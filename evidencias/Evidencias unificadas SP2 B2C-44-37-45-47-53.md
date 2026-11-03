# Evidencias QA unificadas - SP2 Unimarc (B2C-44, 37, 45, 47, 53) (Web)

Fecha: 2026-10-20 · Ejecutado por: Daniel Uñuruco · Ambiente: DEV (Unimarc)

## Resumen de la ejecución

| HU | Casos | Aprobado | Rechazado | Bloqueado | Bloqueado Data | Bugs |
|---|---|---|---|---|---|---|
| B2C-44 | 34 | 0 | 0 | 0 | 34 | — |
| B2C-37 WEB | 91 | 34 | 3 | 2 | 52 | B2C-1257, B2C-1258, B2C-1259 |
| B2C-45 | 28 | 18 | 0 | 0 | 10 | — |
| B2C-47 WEB | 32 | 0 | 0 | 22 | 10 | — |
| B2C-53 | 28 | 7 | 1 | 0 | 20 | B2C-1260 |
| **Total** | **213** | **59** | **4** | **24** | **126** | **4** |

Causas principales de los bloqueos: invitado sin dirección declarada (no puede agregar al carro), cambios de stock que exigen Business Manager (B2C-47), {SKU_NO_DISPONIBLE} y {SKU_UNIPAY_001} que no sirven en el ambiente, y endpoints de error en TBD. B2C-53 D-016 y D-018 siguen en 'No aplica' (fuera del vocabulario de estados).

---

## Shelf de producto en el carro

| Campo | Valor |
|---|---|
| Suite | B2C-44 |
| Última actualización | 2026-10-20 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | chromium |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-44 Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

### Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 34 |
| **Total** | **34** |

### Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-20 | 34 | TC-B2C44-D-001, TC-B2C44-D-002, TC-B2C44-D-003, TC-B2C44-D-004, TC-B2C44-D-005, TC-B2C44-D-006, TC-B2C44-D-007, TC-B2C44-D-008, TC-B2C44-D-009, TC-B2C44-D-010, TC-B2C44-D-011, TC-B2C44-D-012, TC-B2C44-D-013, TC-B2C44-D-014, TC-B2C44-D-015, TC-B2C44-D-016, TC-B2C44-D-017, TC-B2C44-M-001, TC-B2C44-M-002, TC-B2C44-M-003, TC-B2C44-M-004, TC-B2C44-M-005, TC-B2C44-M-006, TC-B2C44-M-007, TC-B2C44-M-008, TC-B2C44-M-009, TC-B2C44-M-010, TC-B2C44-M-011, TC-B2C44-M-012, TC-B2C44-M-013, TC-B2C44-M-014, TC-B2C44-M-015, TC-B2C44-M-016, TC-B2C44-M-017 |

### Detalle por caso de prueba

#### TC-B2C44-D-001 - Verificar que el shelf de un ítem sin promoción muestra todos sus elementos [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro contiene {SKU_VALID_001} x 2 (sin promociones)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_VALID_001}.
4. El usuario revisa cada elemento del shelf.

**Resultado esperado**

El shelf muestra ícono X arriba a la derecha, imagen 90x90, "Marca | Nombre", precio unitario "$X.XXX c/u", cantidad "N un." alineada a la derecha, controles de cantidad e ícono lápiz + link "Agregar instrucciones".

**Resultado obtenido**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

**Observación**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

**Evidencia**

![Invitado sin dirección: 'Agregar' abre 'Elige tu método de entrega'](<B2C-44 Evidencias/TC-B2C44-D-001.png>)

---

#### TC-B2C44-D-002 - Verificar que un nombre de producto largo se trunca con puntos suspensivos [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro contiene {SKU_NOMBRE_LARGO}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_NOMBRE_LARGO} = 000000000000662457-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_NOMBRE_LARGO}.
4. El usuario revisa el nombre del producto.

**Resultado esperado**

El texto "Marca | Nombre" se muestra truncado con "…" sin desbordar el shelf.

**Resultado obtenido**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

**Observación**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

---

#### TC-B2C44-D-003 - Verificar que un pesable muestra la cantidad en kg en el shelf [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro contiene {SKU_PESABLE} con 1 kg

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_PESABLE} = 000000000000037972-KG

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_PESABLE}.
4. El usuario revisa la cantidad del ítem.

**Resultado esperado**

La cantidad se muestra como "1 kg." alineada a la derecha.

**Resultado obtenido**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

**Observación**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

---

#### TC-B2C44-D-004 - Verificar que un invitado ve Agregar instrucciones y al tocarlo se abre el modal de instrucciones [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro contiene {SKU_VALID_001} sin instrucciones

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_VALID_001}.
4. El usuario hace clic en el link "Agregar instrucciones".

**Resultado esperado**

Se muestra el ícono lápiz + link gris "Agregar instrucciones" y al presionarlo se abre el modal "¿Te gustaría algo en especial?" (B2C-45).

**Resultado obtenido**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

**Observación**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

---

#### TC-B2C44-D-005 - Verificar que un ítem con porcentaje de descuento muestra badge, precio final y precio anterior [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro contiene {SKU_PROM_PCT_DESCUENTO} (promo de precio con descuento vigente en BM)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_PROM_PCT_DESCUENTO} = 000000000000688028-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_PROM_PCT_DESCUENTO}.
4. El usuario revisa el área de precio del ítem.

**Resultado esperado**

El área de precio muestra el badge amarillo "X%", el precio con descuento en negro semibold con su PPUM y "Antes:" con el precio original tachado y su PPUM.

**Resultado obtenido**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

**Observación**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

---

#### TC-B2C44-D-006 - Verificar que un ítem con promoción de precio fijo muestra precio final y precio anterior [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro contiene {SKU_PROM_PRECIO_FIJO} (promo de precio fijo vigente en BM)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_PROM_PRECIO_FIJO} = 000000000000178089-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_PROM_PRECIO_FIJO}.
4. El usuario revisa el área de precio del ítem.

**Resultado esperado**

El área de precio muestra el badge, el precio fijo de la promo en negro semibold con su PPUM y "Antes:" con el precio original tachado.

**Resultado obtenido**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

**Observación**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

---

#### TC-B2C44-D-007 - Verificar que un ítem con NxM incompleto muestra precio sin badge y el mensaje rojo Te faltan N [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro contiene {SKU_PROM_NxM} x 1 (promo NxM vigente sin completar)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_PROM_NxM}.
4. El usuario revisa el área de precio del ítem.

**Resultado esperado**

Se muestra el precio unitario sin badge ni precio tachado y debajo el mensaje en rojo "Te faltan N para la promo".

**Resultado obtenido**

Causa: la precondición usa {SKU_PROM_NxM} y la fila no lo declara en su Test data. Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

**Observación**

Causa: la precondición usa {SKU_PROM_NxM} y la fila no lo declara en su Test data. Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

---

#### TC-B2C44-D-008 - Verificar que un ítem con precio Unipay muestra el precio regular y el tag Unipay [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro contiene {SKU_UNIPAY_001} (promo Unipay vigente, sin otras promociones)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNIPAY_001} = 000000000000661945-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_UNIPAY_001}.
4. El usuario revisa el área de precio del ítem.

**Resultado esperado**

Se muestra "$X.XXX c/u" en negro y debajo el tag verde agua con ícono Unipay y "$Y.YYY c/u" en verde oscuro (Y < X), sin badge ni precio tachado.

**Resultado obtenido**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

**Observación**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

---

#### TC-B2C44-D-009 - Verificar que un ítem con descuento y promoción de medio de pago muestra ambas en orden [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro contiene {SKU_PCT_Y_UNIPAY} (promo % y promo Unipay vigentes)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_PCT_Y_UNIPAY} = 000000000000668141-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_PCT_Y_UNIPAY}.
4. El usuario revisa el área de precio del ítem.

**Resultado esperado**

Se muestran en orden: badge % + precio con descuento + PPUM; tag del medio de pago con ícono + precio + PPUM; "Antes: $XX.XXX" tachado.

**Resultado obtenido**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

**Observación**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

---

#### TC-B2C44-D-010 - Verificar que un ítem con NxM incompleto y precio Unipay muestra ambas promociones en orden [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro contiene {SKU_NXM_Y_UNIPAY} x 1 (NxM sin completar y promo Unipay vigentes)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_NXM_Y_UNIPAY} = None

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_NXM_Y_UNIPAY}.
4. El usuario revisa el área de precio del ítem.

**Resultado esperado**

Se muestran en orden: "$X.XXX c/u" en negro, tag del medio de pago (ícono + precio) y el mensaje rojo "Te faltan N para la promo".

**Resultado obtenido**

Causa: {SKU_NXM_Y_UNIPAY} está en TBD en el Excel de data. Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

**Observación**

Causa: {SKU_NXM_Y_UNIPAY} está en TBD en el Excel de data. Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

---

#### TC-B2C44-D-011 - Verificar que un producto por peso muestra el precio por unidad de medida entre paréntesis [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro contiene {SKU_PESABLE} con 1 kg

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_PESABLE} = 000000000000037972-KG

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_PESABLE}.
4. El usuario revisa el área de precio del ítem.

**Resultado esperado**

El shelf muestra el PPUM entre paréntesis, por ejemplo "($2.990 x Kg)".

**Resultado obtenido**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

**Observación**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

---

#### TC-B2C44-D-012 - Verificar que con descuento y medio de pago el PPUM se muestra en ambos precios [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro contiene {SKU_PESABLE_PCT_Y_UNIPAY} (pesable con promo % y promo Unipay vigentes)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_PESABLE_PCT_Y_UNIPAY} = 000000000000062644-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_PESABLE_PCT_Y_UNIPAY}.
4. El usuario revisa el área de precio del ítem.

**Resultado esperado**

El precio con descuento y el precio del medio de pago muestran cada uno su propio PPUM entre paréntesis.

**Resultado obtenido**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

**Observación**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

---

#### TC-B2C44-M-001 - Verificar que el shelf de un ítem sin promoción muestra todos sus elementos [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene {SKU_VALID_001} x 2 (sin promociones)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_VALID_001}.
4. El usuario revisa cada elemento del shelf.

**Resultado esperado**

El shelf muestra imagen 90x90, "Marca | Nombre", precio unitario "$X.XXX c/u", cantidad "N un." alineada a la derecha, controles de cantidad e ícono lápiz + link "Agregar instrucciones".

**Resultado obtenido**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

**Observación**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

---

#### TC-B2C44-M-002 - Verificar que un nombre de producto largo se trunca con puntos suspensivos [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene {SKU_NOMBRE_LARGO}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_NOMBRE_LARGO} = 000000000000662457-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_NOMBRE_LARGO}.
4. El usuario revisa el nombre del producto.

**Resultado esperado**

El texto "Marca | Nombre" se muestra truncado con "…" sin desbordar el shelf.

**Resultado obtenido**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

**Observación**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

---

#### TC-B2C44-M-003 - Verificar que un pesable muestra la cantidad en kg en el shelf [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene {SKU_PESABLE} con 1 kg

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_PESABLE} = 000000000000037972-KG

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_PESABLE}.
4. El usuario revisa la cantidad del ítem.

**Resultado esperado**

La cantidad se muestra como "1 kg." alineada a la derecha.

**Resultado obtenido**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

**Observación**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

---

#### TC-B2C44-M-004 - Verificar que un invitado ve Agregar instrucciones y al tocarlo se abre el modal de instrucciones [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene {SKU_VALID_001} sin instrucciones

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_VALID_001}.
4. El usuario toca el link "Agregar instrucciones".

**Resultado esperado**

Se muestra el ícono lápiz + link gris "Agregar instrucciones" y al presionarlo se abre el modal "¿Te gustaría algo en especial?" (B2C-45).

**Resultado obtenido**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

**Observación**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

---

#### TC-B2C44-M-005 - Verificar que un ítem con porcentaje de descuento muestra badge, precio final y precio anterior [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene {SKU_PROM_PCT_DESCUENTO} (promo de precio con descuento vigente en BM)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_PROM_PCT_DESCUENTO} = 000000000000688028-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_PROM_PCT_DESCUENTO}.
4. El usuario revisa el área de precio del ítem.

**Resultado esperado**

El área de precio muestra el badge amarillo "X%", el precio con descuento en negro semibold con su PPUM y "Antes:" con el precio original tachado y su PPUM.

**Resultado obtenido**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

**Observación**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

---

#### TC-B2C44-M-006 - Verificar que un ítem con promoción de precio fijo muestra precio final y precio anterior [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene {SKU_PROM_PRECIO_FIJO} (promo de precio fijo vigente en BM)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_PROM_PRECIO_FIJO} = 000000000000178089-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_PROM_PRECIO_FIJO}.
4. El usuario revisa el área de precio del ítem.

**Resultado esperado**

El área de precio muestra el badge, el precio fijo de la promo en negro semibold con su PPUM y "Antes:" con el precio original tachado.

**Resultado obtenido**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

**Observación**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

---

#### TC-B2C44-M-007 - Verificar que un ítem con NxM incompleto muestra precio sin badge y el mensaje rojo Te faltan N [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene {SKU_PROM_NxM} x 1 (promo NxM vigente sin completar)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_PROM_NxM}.
4. El usuario revisa el área de precio del ítem.

**Resultado esperado**

Se muestra el precio unitario sin badge ni precio tachado y debajo el mensaje en rojo "Te faltan N para la promo".

**Resultado obtenido**

Causa: la precondición usa {SKU_PROM_NxM} y la fila no lo declara en su Test data. Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

**Observación**

Causa: la precondición usa {SKU_PROM_NxM} y la fila no lo declara en su Test data. Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

---

#### TC-B2C44-M-008 - Verificar que un ítem con precio Unipay muestra el precio regular y el tag Unipay [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene {SKU_UNIPAY_001} (promo Unipay vigente, sin otras promociones)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNIPAY_001} = 000000000000661945-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_UNIPAY_001}.
4. El usuario revisa el área de precio del ítem.

**Resultado esperado**

Se muestra "$X.XXX c/u" en negro y debajo el tag verde agua con ícono Unipay y "$Y.YYY c/u" en verde oscuro (Y < X), sin badge ni precio tachado.

**Resultado obtenido**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

**Observación**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

---

#### TC-B2C44-M-009 - Verificar que un ítem con descuento y promoción de medio de pago muestra ambas en orden [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene {SKU_PCT_Y_UNIPAY} (promo % y promo Unipay vigentes)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_PCT_Y_UNIPAY} = 000000000000668141-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_PCT_Y_UNIPAY}.
4. El usuario revisa el área de precio del ítem.

**Resultado esperado**

Se muestran en orden: badge % + precio con descuento + PPUM; tag del medio de pago con ícono + precio + PPUM; "Antes: $XX.XXX" tachado.

**Resultado obtenido**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

**Observación**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

---

#### TC-B2C44-M-010 - Verificar que un ítem con NxM incompleto y precio Unipay muestra ambas promociones en orden [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene {SKU_NXM_Y_UNIPAY} x 1 (NxM sin completar y promo Unipay vigentes)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_NXM_Y_UNIPAY} = None

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_NXM_Y_UNIPAY}.
4. El usuario revisa el área de precio del ítem.

**Resultado esperado**

Se muestran en orden: "$X.XXX c/u" en negro, tag del medio de pago (ícono + precio) y el mensaje rojo "Te faltan N para la promo".

**Resultado obtenido**

Causa: {SKU_NXM_Y_UNIPAY} está en TBD en el Excel de data. Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

**Observación**

Causa: {SKU_NXM_Y_UNIPAY} está en TBD en el Excel de data. Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

---

#### TC-B2C44-M-011 - Verificar que un producto por peso muestra el precio por unidad de medida entre paréntesis [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene {SKU_PESABLE} con 1 kg

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_PESABLE} = 000000000000037972-KG

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_PESABLE}.
4. El usuario revisa el área de precio del ítem.

**Resultado esperado**

El shelf muestra el PPUM entre paréntesis, por ejemplo "($2.990 x Kg)".

**Resultado obtenido**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

**Observación**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

---

#### TC-B2C44-M-012 - Verificar que con descuento y medio de pago el PPUM se muestra en ambos precios [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene {SKU_PESABLE_PCT_Y_UNIPAY} (pesable con promo % y promo Unipay vigentes)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_PESABLE_PCT_Y_UNIPAY} = 000000000000062644-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_PESABLE_PCT_Y_UNIPAY}.
4. El usuario revisa el área de precio del ítem.

**Resultado esperado**

El precio con descuento y el precio del medio de pago muestran cada uno su propio PPUM entre paréntesis.

**Resultado obtenido**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

**Observación**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

---

#### TC-B2C44-D-013 - Verificar que la tarjeta de subtotales muestra Subtotal y Subtotal con Unipay con su ícono [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro contiene {SKU_UNIPAY_001} x 1 (promo Unipay vigente) y {SKU_VALID_001} x 1 (sin promociones)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNIPAY_001} = 000000000000661945-UN

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica la tarjeta de subtotales.
4. El usuario revisa cada línea de la tarjeta.

**Resultado esperado**

La tarjeta de subtotales muestra la línea "Subtotal" con su monto "$XX.XXX" y la línea "Subtotal con Unipay" con el ícono de tarjeta Unipay y su monto "$XX.XXX".

**Resultado obtenido**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

**Observación**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

---

#### TC-B2C44-D-014 - Verificar que el monto Subtotal con Unipay descuenta solo el ahorro de los ítems Unipay [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro contiene {SKU_UNIPAY_001} x 2 (promo Unipay vigente) y {SKU_VALID_001} x 1 (sin promociones)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNIPAY_001} = 000000000000661945-UN

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario anota el precio regular (X) y el precio Unipay (Y) del shelf de {SKU_UNIPAY_001} y el precio (P) de {SKU_VALID_001}.
4. El usuario revisa los montos de la tarjeta de subtotales.

**Resultado esperado**

"Subtotal" = 2·X + P (precios regulares). "Subtotal con Unipay" = 2·Y + P, es decir, el Subtotal menos el ahorro Unipay 2·(X − Y); el producto sin promoción se suma a precio normal. El Subtotal con Unipay es menor que el Subtotal.

**Resultado obtenido**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

**Observación**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

---

#### TC-B2C44-D-015 - Verificar que los subtotales se recalculan al aumentar la cantidad de un ítem Unipay [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro contiene {SKU_UNIPAY_001} x 1 (promo Unipay vigente) y {SKU_VALID_001} x 1 (sin promociones)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNIPAY_001} = 000000000000661945-UN

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario anota los montos de "Subtotal" y "Subtotal con Unipay".
4. El usuario presiona "+" en el shelf de {SKU_UNIPAY_001} (cantidad 1 → 2).
5. El usuario revisa nuevamente la tarjeta de subtotales.

**Resultado esperado**

Sin recargar la página, "Subtotal" aumenta en X (precio regular) y "Subtotal con Unipay" aumenta en Y (precio Unipay) de {SKU_UNIPAY_001}; ambas líneas siguen visibles con el ícono Unipay.

**Resultado obtenido**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

**Observación**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

---

#### TC-B2C44-D-016 - Verificar que sin ítems con descuento Unipay no se muestra Subtotal con Unipay [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro contiene {SKU_VALID_001} x 2 (sin promociones, sin promo Unipay)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNIPAY_001} = 000000000000661945-UN

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica la tarjeta de subtotales.
4. El usuario revisa cada línea de la tarjeta.

**Resultado esperado**

La tarjeta de subtotales muestra solo "Subtotal" con su monto; no se muestran la línea "Subtotal con Unipay" ni el ícono de tarjeta Unipay.

**Resultado obtenido**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

**Observación**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

---

#### TC-B2C44-D-017 - Verificar que al eliminar el único ítem Unipay desaparece Subtotal con Unipay [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro contiene {SKU_UNIPAY_001} x 1 (promo Unipay vigente) y {SKU_VALID_001} x 1 (sin promociones)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNIPAY_001} = 000000000000661945-UN

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario verifica que se muestra "Subtotal con Unipay".
4. El usuario presiona el basurero en el shelf de {SKU_UNIPAY_001}.
5. El usuario revisa nuevamente la tarjeta de subtotales.

**Resultado esperado**

Sin recargar la página, la tarjeta muestra solo "Subtotal" con el monto de {SKU_VALID_001}; la línea "Subtotal con Unipay" y el ícono de tarjeta Unipay desaparecen.

**Resultado obtenido**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

**Observación**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

---

#### TC-B2C44-M-013 - Verificar que la tarjeta de subtotales muestra Subtotal y Subtotal con Unipay con su ícono [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene {SKU_UNIPAY_001} x 1 (promo Unipay vigente) y {SKU_VALID_001} x 1 (sin promociones)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNIPAY_001} = 000000000000661945-UN

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica la tarjeta de subtotales.
4. El usuario revisa cada línea de la tarjeta.

**Resultado esperado**

La tarjeta de subtotales muestra la línea "Subtotal" con su monto "$XX.XXX" y la línea "Subtotal con Unipay" con el ícono de tarjeta Unipay y su monto "$XX.XXX".

**Resultado obtenido**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

**Observación**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

---

#### TC-B2C44-M-014 - Verificar que el monto Subtotal con Unipay descuenta solo el ahorro de los ítems Unipay [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene {SKU_UNIPAY_001} x 2 (promo Unipay vigente) y {SKU_VALID_001} x 1 (sin promociones)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNIPAY_001} = 000000000000661945-UN

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario anota el precio regular (X) y el precio Unipay (Y) del shelf de {SKU_UNIPAY_001} y el precio (P) de {SKU_VALID_001}.
4. El usuario revisa los montos de la tarjeta de subtotales.

**Resultado esperado**

"Subtotal" = 2·X + P (precios regulares). "Subtotal con Unipay" = 2·Y + P, es decir, el Subtotal menos el ahorro Unipay 2·(X − Y); el producto sin promoción se suma a precio normal. El Subtotal con Unipay es menor que el Subtotal.

**Resultado obtenido**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

**Observación**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

---

#### TC-B2C44-M-015 - Verificar que los subtotales se recalculan al aumentar la cantidad de un ítem Unipay [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene {SKU_UNIPAY_001} x 1 (promo Unipay vigente) y {SKU_VALID_001} x 1 (sin promociones)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNIPAY_001} = 000000000000661945-UN

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario anota los montos de "Subtotal" y "Subtotal con Unipay".
4. El usuario toca "+" en el shelf de {SKU_UNIPAY_001} (cantidad 1 → 2).
5. El usuario revisa nuevamente la tarjeta de subtotales.

**Resultado esperado**

Sin recargar la página, "Subtotal" aumenta en X (precio regular) y "Subtotal con Unipay" aumenta en Y (precio Unipay) de {SKU_UNIPAY_001}; ambas líneas siguen visibles con el ícono Unipay.

**Resultado obtenido**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

**Observación**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

---

#### TC-B2C44-M-016 - Verificar que sin ítems con descuento Unipay no se muestra Subtotal con Unipay [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene {SKU_VALID_001} x 2 (sin promociones, sin promo Unipay)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNIPAY_001} = 000000000000661945-UN

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica la tarjeta de subtotales.
4. El usuario revisa cada línea de la tarjeta.

**Resultado esperado**

La tarjeta de subtotales muestra solo "Subtotal" con su monto; no se muestran la línea "Subtotal con Unipay" ni el ícono de tarjeta Unipay.

**Resultado obtenido**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

**Observación**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

---

#### TC-B2C44-M-017 - Verificar que al eliminar el único ítem Unipay desaparece Subtotal con Unipay [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene {SKU_UNIPAY_001} x 1 (promo Unipay vigente) y {SKU_VALID_001} x 1 (sin promociones)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNIPAY_001} = 000000000000661945-UN

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario verifica que se muestra "Subtotal con Unipay".
4. El usuario toca el basurero en el shelf de {SKU_UNIPAY_001}.
5. El usuario revisa nuevamente la tarjeta de subtotales.

**Resultado esperado**

Sin recargar la página, la tarjeta muestra solo "Subtotal" con el monto de {SKU_VALID_001}; la línea "Subtotal con Unipay" y el ícono de tarjeta Unipay desaparecen.

**Resultado obtenido**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

**Observación**

Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).

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
  "suite": "B2C-44",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-44 Test Cases.xlsx",
  "title": "Shelf de producto en el carro",
  "updated_at": "2026-10-20"
 },
 "history": {
  "2026-10-20": [
   "TC-B2C44-D-001",
   "TC-B2C44-D-002",
   "TC-B2C44-D-003",
   "TC-B2C44-D-004",
   "TC-B2C44-D-005",
   "TC-B2C44-D-006",
   "TC-B2C44-D-007",
   "TC-B2C44-D-008",
   "TC-B2C44-D-009",
   "TC-B2C44-D-010",
   "TC-B2C44-D-011",
   "TC-B2C44-D-012",
   "TC-B2C44-D-013",
   "TC-B2C44-D-014",
   "TC-B2C44-D-015",
   "TC-B2C44-D-016",
   "TC-B2C44-D-017",
   "TC-B2C44-M-001",
   "TC-B2C44-M-002",
   "TC-B2C44-M-003",
   "TC-B2C44-M-004",
   "TC-B2C44-M-005",
   "TC-B2C44-M-006",
   "TC-B2C44-M-007",
   "TC-B2C44-M-008",
   "TC-B2C44-M-009",
   "TC-B2C44-M-010",
   "TC-B2C44-M-011",
   "TC-B2C44-M-012",
   "TC-B2C44-M-013",
   "TC-B2C44-M-014",
   "TC-B2C44-M-015",
   "TC-B2C44-M-016",
   "TC-B2C44-M-017"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El shelf muestra ícono X arriba a la derecha, imagen 90x90, \"Marca | Nombre\", precio unitario \"$X.XXX c/u\", cantidad \"N un.\" alineada a la derecha, controles de cantidad e ícono lápiz + link \"Agregar instrucciones\".",
   "form_factor": "desktop",
   "id": "TC-B2C44-D-001",
   "name": "Verificar que el shelf de un ítem sin promoción muestra todos sus elementos [Desktop] [Guest]",
   "observation": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "observed": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_VALID_001} x 2 (sin promociones)",
   "screenshots": [
    {
     "caption": "Invitado sin dirección: 'Agregar' abre 'Elige tu método de entrega'",
     "file": "TC-B2C44-D-001.png"
    }
   ],
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_VALID_001}.\n4. El usuario revisa cada elemento del shelf.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El texto \"Marca | Nombre\" se muestra truncado con \"…\" sin desbordar el shelf.",
   "form_factor": "desktop",
   "id": "TC-B2C44-D-002",
   "name": "Verificar que un nombre de producto largo se trunca con puntos suspensivos [Desktop] [Guest]",
   "observation": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "observed": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_NOMBRE_LARGO}",
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_NOMBRE_LARGO}.\n4. El usuario revisa el nombre del producto.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_NOMBRE_LARGO} = 000000000000662457-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "La cantidad se muestra como \"1 kg.\" alineada a la derecha.",
   "form_factor": "desktop",
   "id": "TC-B2C44-D-003",
   "name": "Verificar que un pesable muestra la cantidad en kg en el shelf [Desktop] [Guest]",
   "observation": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "observed": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_PESABLE} con 1 kg",
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_PESABLE}.\n4. El usuario revisa la cantidad del ítem.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_PESABLE} = 000000000000037972-KG",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se muestra el ícono lápiz + link gris \"Agregar instrucciones\" y al presionarlo se abre el modal \"¿Te gustaría algo en especial?\" (B2C-45).",
   "form_factor": "desktop",
   "id": "TC-B2C44-D-004",
   "name": "Verificar que un invitado ve Agregar instrucciones y al tocarlo se abre el modal de instrucciones [Desktop] [Guest]",
   "observation": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "observed": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_VALID_001} sin instrucciones",
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_VALID_001}.\n4. El usuario hace clic en el link \"Agregar instrucciones\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El área de precio muestra el badge amarillo \"X%\", el precio con descuento en negro semibold con su PPUM y \"Antes:\" con el precio original tachado y su PPUM.",
   "form_factor": "desktop",
   "id": "TC-B2C44-D-005",
   "name": "Verificar que un ítem con porcentaje de descuento muestra badge, precio final y precio anterior [Desktop] [Guest]",
   "observation": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "observed": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_PROM_PCT_DESCUENTO} (promo de precio con descuento vigente en BM)",
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_PROM_PCT_DESCUENTO}.\n4. El usuario revisa el área de precio del ítem.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_PROM_PCT_DESCUENTO} = 000000000000688028-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El área de precio muestra el badge, el precio fijo de la promo en negro semibold con su PPUM y \"Antes:\" con el precio original tachado.",
   "form_factor": "desktop",
   "id": "TC-B2C44-D-006",
   "name": "Verificar que un ítem con promoción de precio fijo muestra precio final y precio anterior [Desktop] [Guest]",
   "observation": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "observed": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_PROM_PRECIO_FIJO} (promo de precio fijo vigente en BM)",
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_PROM_PRECIO_FIJO}.\n4. El usuario revisa el área de precio del ítem.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_PROM_PRECIO_FIJO} = 000000000000178089-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se muestra el precio unitario sin badge ni precio tachado y debajo el mensaje en rojo \"Te faltan N para la promo\".",
   "form_factor": "desktop",
   "id": "TC-B2C44-D-007",
   "name": "Verificar que un ítem con NxM incompleto muestra precio sin badge y el mensaje rojo Te faltan N [Desktop] [Guest]",
   "observation": "Causa: la precondición usa {SKU_PROM_NxM} y la fila no lo declara en su Test data. Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "observed": "Causa: la precondición usa {SKU_PROM_NxM} y la fila no lo declara en su Test data. Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_PROM_NxM} x 1 (promo NxM vigente sin completar)",
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_PROM_NxM}.\n4. El usuario revisa el área de precio del ítem.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se muestra \"$X.XXX c/u\" en negro y debajo el tag verde agua con ícono Unipay y \"$Y.YYY c/u\" en verde oscuro (Y < X), sin badge ni precio tachado.",
   "form_factor": "desktop",
   "id": "TC-B2C44-D-008",
   "name": "Verificar que un ítem con precio Unipay muestra el precio regular y el tag Unipay [Desktop] [Guest]",
   "observation": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "observed": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_UNIPAY_001} (promo Unipay vigente, sin otras promociones)",
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_UNIPAY_001}.\n4. El usuario revisa el área de precio del ítem.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNIPAY_001} = 000000000000661945-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se muestran en orden: badge % + precio con descuento + PPUM; tag del medio de pago con ícono + precio + PPUM; \"Antes: $XX.XXX\" tachado.",
   "form_factor": "desktop",
   "id": "TC-B2C44-D-009",
   "name": "Verificar que un ítem con descuento y promoción de medio de pago muestra ambas en orden [Desktop] [Guest]",
   "observation": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "observed": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_PCT_Y_UNIPAY} (promo % y promo Unipay vigentes)",
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_PCT_Y_UNIPAY}.\n4. El usuario revisa el área de precio del ítem.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_PCT_Y_UNIPAY} = 000000000000668141-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se muestran en orden: \"$X.XXX c/u\" en negro, tag del medio de pago (ícono + precio) y el mensaje rojo \"Te faltan N para la promo\".",
   "form_factor": "desktop",
   "id": "TC-B2C44-D-010",
   "name": "Verificar que un ítem con NxM incompleto y precio Unipay muestra ambas promociones en orden [Desktop] [Guest]",
   "observation": "Causa: {SKU_NXM_Y_UNIPAY} está en TBD en el Excel de data. Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "observed": "Causa: {SKU_NXM_Y_UNIPAY} está en TBD en el Excel de data. Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_NXM_Y_UNIPAY} x 1 (NxM sin completar y promo Unipay vigentes)",
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_NXM_Y_UNIPAY}.\n4. El usuario revisa el área de precio del ítem.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_NXM_Y_UNIPAY} = None",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El shelf muestra el PPUM entre paréntesis, por ejemplo \"($2.990 x Kg)\".",
   "form_factor": "desktop",
   "id": "TC-B2C44-D-011",
   "name": "Verificar que un producto por peso muestra el precio por unidad de medida entre paréntesis [Desktop] [Guest]",
   "observation": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "observed": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_PESABLE} con 1 kg",
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_PESABLE}.\n4. El usuario revisa el área de precio del ítem.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_PESABLE} = 000000000000037972-KG",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El precio con descuento y el precio del medio de pago muestran cada uno su propio PPUM entre paréntesis.",
   "form_factor": "desktop",
   "id": "TC-B2C44-D-012",
   "name": "Verificar que con descuento y medio de pago el PPUM se muestra en ambos precios [Desktop] [Guest]",
   "observation": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "observed": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_PESABLE_PCT_Y_UNIPAY} (pesable con promo % y promo Unipay vigentes)",
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_PESABLE_PCT_Y_UNIPAY}.\n4. El usuario revisa el área de precio del ítem.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_PESABLE_PCT_Y_UNIPAY} = 000000000000062644-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El shelf muestra imagen 90x90, \"Marca | Nombre\", precio unitario \"$X.XXX c/u\", cantidad \"N un.\" alineada a la derecha, controles de cantidad e ícono lápiz + link \"Agregar instrucciones\".",
   "form_factor": "mobile",
   "id": "TC-B2C44-M-001",
   "name": "Verificar que el shelf de un ítem sin promoción muestra todos sus elementos [Mobile] [Guest]",
   "observation": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "observed": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_VALID_001} x 2 (sin promociones)",
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_VALID_001}.\n4. El usuario revisa cada elemento del shelf.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El texto \"Marca | Nombre\" se muestra truncado con \"…\" sin desbordar el shelf.",
   "form_factor": "mobile",
   "id": "TC-B2C44-M-002",
   "name": "Verificar que un nombre de producto largo se trunca con puntos suspensivos [Mobile] [Guest]",
   "observation": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "observed": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_NOMBRE_LARGO}",
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_NOMBRE_LARGO}.\n4. El usuario revisa el nombre del producto.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_NOMBRE_LARGO} = 000000000000662457-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "La cantidad se muestra como \"1 kg.\" alineada a la derecha.",
   "form_factor": "mobile",
   "id": "TC-B2C44-M-003",
   "name": "Verificar que un pesable muestra la cantidad en kg en el shelf [Mobile] [Guest]",
   "observation": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "observed": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_PESABLE} con 1 kg",
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_PESABLE}.\n4. El usuario revisa la cantidad del ítem.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_PESABLE} = 000000000000037972-KG",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se muestra el ícono lápiz + link gris \"Agregar instrucciones\" y al presionarlo se abre el modal \"¿Te gustaría algo en especial?\" (B2C-45).",
   "form_factor": "mobile",
   "id": "TC-B2C44-M-004",
   "name": "Verificar que un invitado ve Agregar instrucciones y al tocarlo se abre el modal de instrucciones [Mobile] [Guest]",
   "observation": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "observed": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_VALID_001} sin instrucciones",
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_VALID_001}.\n4. El usuario toca el link \"Agregar instrucciones\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El área de precio muestra el badge amarillo \"X%\", el precio con descuento en negro semibold con su PPUM y \"Antes:\" con el precio original tachado y su PPUM.",
   "form_factor": "mobile",
   "id": "TC-B2C44-M-005",
   "name": "Verificar que un ítem con porcentaje de descuento muestra badge, precio final y precio anterior [Mobile] [Guest]",
   "observation": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "observed": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_PROM_PCT_DESCUENTO} (promo de precio con descuento vigente en BM)",
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_PROM_PCT_DESCUENTO}.\n4. El usuario revisa el área de precio del ítem.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_PROM_PCT_DESCUENTO} = 000000000000688028-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El área de precio muestra el badge, el precio fijo de la promo en negro semibold con su PPUM y \"Antes:\" con el precio original tachado.",
   "form_factor": "mobile",
   "id": "TC-B2C44-M-006",
   "name": "Verificar que un ítem con promoción de precio fijo muestra precio final y precio anterior [Mobile] [Guest]",
   "observation": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "observed": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_PROM_PRECIO_FIJO} (promo de precio fijo vigente en BM)",
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_PROM_PRECIO_FIJO}.\n4. El usuario revisa el área de precio del ítem.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_PROM_PRECIO_FIJO} = 000000000000178089-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se muestra el precio unitario sin badge ni precio tachado y debajo el mensaje en rojo \"Te faltan N para la promo\".",
   "form_factor": "mobile",
   "id": "TC-B2C44-M-007",
   "name": "Verificar que un ítem con NxM incompleto muestra precio sin badge y el mensaje rojo Te faltan N [Mobile] [Guest]",
   "observation": "Causa: la precondición usa {SKU_PROM_NxM} y la fila no lo declara en su Test data. Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "observed": "Causa: la precondición usa {SKU_PROM_NxM} y la fila no lo declara en su Test data. Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_PROM_NxM} x 1 (promo NxM vigente sin completar)",
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_PROM_NxM}.\n4. El usuario revisa el área de precio del ítem.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se muestra \"$X.XXX c/u\" en negro y debajo el tag verde agua con ícono Unipay y \"$Y.YYY c/u\" en verde oscuro (Y < X), sin badge ni precio tachado.",
   "form_factor": "mobile",
   "id": "TC-B2C44-M-008",
   "name": "Verificar que un ítem con precio Unipay muestra el precio regular y el tag Unipay [Mobile] [Guest]",
   "observation": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "observed": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_UNIPAY_001} (promo Unipay vigente, sin otras promociones)",
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_UNIPAY_001}.\n4. El usuario revisa el área de precio del ítem.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNIPAY_001} = 000000000000661945-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se muestran en orden: badge % + precio con descuento + PPUM; tag del medio de pago con ícono + precio + PPUM; \"Antes: $XX.XXX\" tachado.",
   "form_factor": "mobile",
   "id": "TC-B2C44-M-009",
   "name": "Verificar que un ítem con descuento y promoción de medio de pago muestra ambas en orden [Mobile] [Guest]",
   "observation": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "observed": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_PCT_Y_UNIPAY} (promo % y promo Unipay vigentes)",
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_PCT_Y_UNIPAY}.\n4. El usuario revisa el área de precio del ítem.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_PCT_Y_UNIPAY} = 000000000000668141-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se muestran en orden: \"$X.XXX c/u\" en negro, tag del medio de pago (ícono + precio) y el mensaje rojo \"Te faltan N para la promo\".",
   "form_factor": "mobile",
   "id": "TC-B2C44-M-010",
   "name": "Verificar que un ítem con NxM incompleto y precio Unipay muestra ambas promociones en orden [Mobile] [Guest]",
   "observation": "Causa: {SKU_NXM_Y_UNIPAY} está en TBD en el Excel de data. Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "observed": "Causa: {SKU_NXM_Y_UNIPAY} está en TBD en el Excel de data. Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_NXM_Y_UNIPAY} x 1 (NxM sin completar y promo Unipay vigentes)",
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_NXM_Y_UNIPAY}.\n4. El usuario revisa el área de precio del ítem.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_NXM_Y_UNIPAY} = None",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El shelf muestra el PPUM entre paréntesis, por ejemplo \"($2.990 x Kg)\".",
   "form_factor": "mobile",
   "id": "TC-B2C44-M-011",
   "name": "Verificar que un producto por peso muestra el precio por unidad de medida entre paréntesis [Mobile] [Guest]",
   "observation": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "observed": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_PESABLE} con 1 kg",
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_PESABLE}.\n4. El usuario revisa el área de precio del ítem.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_PESABLE} = 000000000000037972-KG",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El precio con descuento y el precio del medio de pago muestran cada uno su propio PPUM entre paréntesis.",
   "form_factor": "mobile",
   "id": "TC-B2C44-M-012",
   "name": "Verificar que con descuento y medio de pago el PPUM se muestra en ambos precios [Mobile] [Guest]",
   "observation": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "observed": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_PESABLE_PCT_Y_UNIPAY} (pesable con promo % y promo Unipay vigentes)",
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_PESABLE_PCT_Y_UNIPAY}.\n4. El usuario revisa el área de precio del ítem.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_PESABLE_PCT_Y_UNIPAY} = 000000000000062644-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "La tarjeta de subtotales muestra la línea \"Subtotal\" con su monto \"$XX.XXX\" y la línea \"Subtotal con Unipay\" con el ícono de tarjeta Unipay y su monto \"$XX.XXX\".",
   "form_factor": "desktop",
   "id": "TC-B2C44-D-013",
   "name": "Verificar que la tarjeta de subtotales muestra Subtotal y Subtotal con Unipay con su ícono [Desktop] [Guest]",
   "observation": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "observed": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_UNIPAY_001} x 1 (promo Unipay vigente) y {SKU_VALID_001} x 1 (sin promociones)",
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica la tarjeta de subtotales.\n4. El usuario revisa cada línea de la tarjeta.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNIPAY_001} = 000000000000661945-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "\"Subtotal\" = 2·X + P (precios regulares). \"Subtotal con Unipay\" = 2·Y + P, es decir, el Subtotal menos el ahorro Unipay 2·(X − Y); el producto sin promoción se suma a precio normal. El Subtotal con Unipay es menor que el Subtotal.",
   "form_factor": "desktop",
   "id": "TC-B2C44-D-014",
   "name": "Verificar que el monto Subtotal con Unipay descuenta solo el ahorro de los ítems Unipay [Desktop] [Guest]",
   "observation": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "observed": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_UNIPAY_001} x 2 (promo Unipay vigente) y {SKU_VALID_001} x 1 (sin promociones)",
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario anota el precio regular (X) y el precio Unipay (Y) del shelf de {SKU_UNIPAY_001} y el precio (P) de {SKU_VALID_001}.\n4. El usuario revisa los montos de la tarjeta de subtotales.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNIPAY_001} = 000000000000661945-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Sin recargar la página, \"Subtotal\" aumenta en X (precio regular) y \"Subtotal con Unipay\" aumenta en Y (precio Unipay) de {SKU_UNIPAY_001}; ambas líneas siguen visibles con el ícono Unipay.",
   "form_factor": "desktop",
   "id": "TC-B2C44-D-015",
   "name": "Verificar que los subtotales se recalculan al aumentar la cantidad de un ítem Unipay [Desktop] [Guest]",
   "observation": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "observed": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_UNIPAY_001} x 1 (promo Unipay vigente) y {SKU_VALID_001} x 1 (sin promociones)",
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario anota los montos de \"Subtotal\" y \"Subtotal con Unipay\".\n4. El usuario presiona \"+\" en el shelf de {SKU_UNIPAY_001} (cantidad 1 → 2).\n5. El usuario revisa nuevamente la tarjeta de subtotales.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNIPAY_001} = 000000000000661945-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "La tarjeta de subtotales muestra solo \"Subtotal\" con su monto; no se muestran la línea \"Subtotal con Unipay\" ni el ícono de tarjeta Unipay.",
   "form_factor": "desktop",
   "id": "TC-B2C44-D-016",
   "name": "Verificar que sin ítems con descuento Unipay no se muestra Subtotal con Unipay [Desktop] [Guest]",
   "observation": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "observed": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_VALID_001} x 2 (sin promociones, sin promo Unipay)",
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica la tarjeta de subtotales.\n4. El usuario revisa cada línea de la tarjeta.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNIPAY_001} = 000000000000661945-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Sin recargar la página, la tarjeta muestra solo \"Subtotal\" con el monto de {SKU_VALID_001}; la línea \"Subtotal con Unipay\" y el ícono de tarjeta Unipay desaparecen.",
   "form_factor": "desktop",
   "id": "TC-B2C44-D-017",
   "name": "Verificar que al eliminar el único ítem Unipay desaparece Subtotal con Unipay [Desktop] [Guest]",
   "observation": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "observed": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_UNIPAY_001} x 1 (promo Unipay vigente) y {SKU_VALID_001} x 1 (sin promociones)",
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario verifica que se muestra \"Subtotal con Unipay\".\n4. El usuario presiona el basurero en el shelf de {SKU_UNIPAY_001}.\n5. El usuario revisa nuevamente la tarjeta de subtotales.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNIPAY_001} = 000000000000661945-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "La tarjeta de subtotales muestra la línea \"Subtotal\" con su monto \"$XX.XXX\" y la línea \"Subtotal con Unipay\" con el ícono de tarjeta Unipay y su monto \"$XX.XXX\".",
   "form_factor": "mobile",
   "id": "TC-B2C44-M-013",
   "name": "Verificar que la tarjeta de subtotales muestra Subtotal y Subtotal con Unipay con su ícono [Mobile] [Guest]",
   "observation": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "observed": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_UNIPAY_001} x 1 (promo Unipay vigente) y {SKU_VALID_001} x 1 (sin promociones)",
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica la tarjeta de subtotales.\n4. El usuario revisa cada línea de la tarjeta.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNIPAY_001} = 000000000000661945-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "\"Subtotal\" = 2·X + P (precios regulares). \"Subtotal con Unipay\" = 2·Y + P, es decir, el Subtotal menos el ahorro Unipay 2·(X − Y); el producto sin promoción se suma a precio normal. El Subtotal con Unipay es menor que el Subtotal.",
   "form_factor": "mobile",
   "id": "TC-B2C44-M-014",
   "name": "Verificar que el monto Subtotal con Unipay descuenta solo el ahorro de los ítems Unipay [Mobile] [Guest]",
   "observation": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "observed": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_UNIPAY_001} x 2 (promo Unipay vigente) y {SKU_VALID_001} x 1 (sin promociones)",
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario anota el precio regular (X) y el precio Unipay (Y) del shelf de {SKU_UNIPAY_001} y el precio (P) de {SKU_VALID_001}.\n4. El usuario revisa los montos de la tarjeta de subtotales.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNIPAY_001} = 000000000000661945-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Sin recargar la página, \"Subtotal\" aumenta en X (precio regular) y \"Subtotal con Unipay\" aumenta en Y (precio Unipay) de {SKU_UNIPAY_001}; ambas líneas siguen visibles con el ícono Unipay.",
   "form_factor": "mobile",
   "id": "TC-B2C44-M-015",
   "name": "Verificar que los subtotales se recalculan al aumentar la cantidad de un ítem Unipay [Mobile] [Guest]",
   "observation": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "observed": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_UNIPAY_001} x 1 (promo Unipay vigente) y {SKU_VALID_001} x 1 (sin promociones)",
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario anota los montos de \"Subtotal\" y \"Subtotal con Unipay\".\n4. El usuario toca \"+\" en el shelf de {SKU_UNIPAY_001} (cantidad 1 → 2).\n5. El usuario revisa nuevamente la tarjeta de subtotales.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNIPAY_001} = 000000000000661945-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "La tarjeta de subtotales muestra solo \"Subtotal\" con su monto; no se muestran la línea \"Subtotal con Unipay\" ni el ícono de tarjeta Unipay.",
   "form_factor": "mobile",
   "id": "TC-B2C44-M-016",
   "name": "Verificar que sin ítems con descuento Unipay no se muestra Subtotal con Unipay [Mobile] [Guest]",
   "observation": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "observed": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_VALID_001} x 2 (sin promociones, sin promo Unipay)",
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica la tarjeta de subtotales.\n4. El usuario revisa cada línea de la tarjeta.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNIPAY_001} = 000000000000661945-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Sin recargar la página, la tarjeta muestra solo \"Subtotal\" con el monto de {SKU_VALID_001}; la línea \"Subtotal con Unipay\" y el ícono de tarjeta Unipay desaparecen.",
   "form_factor": "mobile",
   "id": "TC-B2C44-M-017",
   "name": "Verificar que al eliminar el único ítem Unipay desaparece Subtotal con Unipay [Mobile] [Guest]",
   "observation": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "observed": "Causa: el caso es de invitado (User type: Guest) y necesita el carro con productos, y un invitado sin dirección no puede agregar: al tocar 'Agregar' se abre 'Elige tu método de entrega' y el producto no entra al carro (verificado 2026-10-20). La fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado (p. ej. {DIRECCION_DESPACHO_001}).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_UNIPAY_001} x 1 (promo Unipay vigente) y {SKU_VALID_001} x 1 (sin promociones)",
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario verifica que se muestra \"Subtotal con Unipay\".\n4. El usuario toca el basurero en el shelf de {SKU_UNIPAY_001}.\n5. El usuario revisa nuevamente la tarjeta de subtotales.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNIPAY_001} = 000000000000661945-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  }
 ]
}
-->


---

## Página del carro

| Campo | Valor |
|---|---|
| Suite | B2C-37 |
| Última actualización | 2026-10-20 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | chromium |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-37 WEB Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

### Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 52 |
| Aprobado | 34 |
| Rechazado | 3 |
| Bloqueado | 2 |
| **Total** | **91** |

### Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-20 | 91 | TC-B2C37-D-001, TC-B2C37-D-002, TC-B2C37-D-003, TC-B2C37-D-004, TC-B2C37-D-005, TC-B2C37-D-006, TC-B2C37-D-007, TC-B2C37-D-009, TC-B2C37-D-010, TC-B2C37-D-011, TC-B2C37-D-012, TC-B2C37-D-013, TC-B2C37-D-014, TC-B2C37-D-015, TC-B2C37-D-016, TC-B2C37-D-017, TC-B2C37-D-018, TC-B2C37-D-019, TC-B2C37-D-020, TC-B2C37-D-021, TC-B2C37-D-022, TC-B2C37-D-023, TC-B2C37-D-024, TC-B2C37-D-025, TC-B2C37-D-026, TC-B2C37-D-027, TC-B2C37-D-028, TC-B2C37-D-029, TC-B2C37-D-030, TC-B2C37-D-031, TC-B2C37-D-032, TC-B2C37-D-033, TC-B2C37-D-034, TC-B2C37-D-035, TC-B2C37-D-036, TC-B2C37-D-037, TC-B2C37-D-038, TC-B2C37-D-039, TC-B2C37-D-040, TC-B2C37-D-041, TC-B2C37-D-042, TC-B2C37-D-043, TC-B2C37-D-044, TC-B2C37-D-045, TC-B2C37-D-046, TC-B2C37-M-001, TC-B2C37-M-002, TC-B2C37-M-003, TC-B2C37-M-004, TC-B2C37-M-005, TC-B2C37-M-006, TC-B2C37-M-007, TC-B2C37-M-008, TC-B2C37-M-010, TC-B2C37-M-011, TC-B2C37-M-012, TC-B2C37-M-013, TC-B2C37-M-014, TC-B2C37-M-015, TC-B2C37-M-016, TC-B2C37-M-017, TC-B2C37-M-018, TC-B2C37-M-019, TC-B2C37-M-020, TC-B2C37-M-021, TC-B2C37-M-022, TC-B2C37-M-023, TC-B2C37-M-024, TC-B2C37-M-025, TC-B2C37-M-026, TC-B2C37-M-027, TC-B2C37-M-028, TC-B2C37-M-029, TC-B2C37-M-030, TC-B2C37-M-031, TC-B2C37-M-032, TC-B2C37-M-033, TC-B2C37-M-034, TC-B2C37-M-035, TC-B2C37-M-036, TC-B2C37-M-037, TC-B2C37-M-038, TC-B2C37-M-039, TC-B2C37-M-040, TC-B2C37-M-041, TC-B2C37-M-042, TC-B2C37-M-043, TC-B2C37-M-044, TC-B2C37-M-045, TC-B2C37-M-046, TC-B2C37-M-047 |

### Detalle por caso de prueba

#### TC-B2C37-D-001 - Verificar que el carrito muestra el layout de dos columnas con ítems disponibles sin Unipay [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene solo {SKU_VALID_001} (disponible y sin descuento Unipay)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el header simplificado, en la columna izquierda "< Mi carrito" y el acordeón de ítems disponibles expandido (logo Unimarc + número de ítems + "productos") con la lista de productos.
3. El usuario revisa la columna derecha y el pie de página.
4. El sistema muestra la tarjeta de totales solo con "Subtotal", el CTA "Continuar con la entrega", los botones "Guardar como lista" y "Vaciar carro" y el footer simplificado.

**Resultado esperado**

El carrito muestra el layout de dos columnas con header y footer simplificados; la tarjeta de totales muestra solo "Subtotal" (sin "Subtotal con Unipay") junto al CTA "Continuar con la entrega", "Guardar como lista" y "Vaciar carro".

**Resultado obtenido**

Layout del carro con header simplificado ('Mi Carro' y volver), acordeón de disponibles expandido, tarjeta de totales con solo 'Subtotal' (sin 'Subtotal con Unipay'), CTA, footer simplificado, 'Guardar como lista' y 'Vaciar carro'. Bajo el mínimo el CTA se rotula 'Mínimo de compra $20.000'.

**Evidencia**

![Paso 2 — carrito con un item disponible](<B2C-37 Evidencias/TC-B2C37-D-001-p02-carrito-con-un-item-disponible.png>)

![Estado final](<B2C-37 Evidencias/TC-B2C37-D-001.png>)

---

#### TC-B2C37-D-002 - Verificar que el carrito no muestra "Guardar como lista" al usuario invitado [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión de invitado (ventana de incógnito, sin iniciar sesión)
- El carro contiene {SKU_VALID_001}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra en la columna derecha la tarjeta de totales y solo el botón "Vaciar carro".

**Resultado esperado**

La columna derecha muestra el botón "Vaciar carro" y no muestra "Guardar como lista".

**Resultado obtenido**

Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.

**Observación**

Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.

---

#### TC-B2C37-D-003 - Verificar que la tarjeta de totales muestra "Subtotal con Unipay" con descuento Unipay [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_UNIPAY_001} (producto con descuento Unipay)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_UNIPAY_001} = 000000000000661945-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra en la tarjeta de totales las líneas "Subtotal" y "Subtotal con Unipay".

**Resultado esperado**

La tarjeta de totales muestra "Subtotal" y "Subtotal con Unipay", con un monto de "Subtotal con Unipay" menor al "Subtotal".

**Resultado obtenido**

Causa: {SKU_UNIPAY_001} (000000000000661945-UN, Lavaloza Quix) no tiene precio Unipay vigente: la PDP y el carro muestran solo $4.750 y no aparece 'Subtotal con Unipay'. Acción: declarar un SKU con promo Unipay vigente.

**Observación**

Causa: {SKU_UNIPAY_001} (000000000000661945-UN, Lavaloza Quix) no tiene precio Unipay vigente: la PDP y el carro muestran solo $4.750 y no aparece 'Subtotal con Unipay'. Acción: declarar un SKU con promo Unipay vigente.

---

#### TC-B2C37-D-004 - Verificar que "Guardar como lista" inicia el flujo de guardado de lista [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en el botón "Guardar como lista".
4. El sistema inicia el flujo de guardar como lista (B2C-54).

**Resultado esperado**

Se inicia el flujo de "Guardar como lista" definido en B2C-54.

**Resultado obtenido**

'Guardar como lista' abre el flujo 'Agregar como lista' (Crear nueva lista / listas existentes / Confirmar).

**Evidencia**

![Estado final](<B2C-37 Evidencias/TC-B2C37-D-004.png>)

---

#### TC-B2C37-D-005 - Verificar que "Continuar con la entrega" avanza al paso Datos de entrega [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO}
- El subtotal del carro es mayor o igual a {MONTO_MINIMO_COMPRA} y hay un método de entrega activo

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

{UNIDADES_SOBRE_MINIMO} = 11

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito con el CTA "Continuar con la entrega" habilitado.
3. El usuario hace clic en "Continuar con la entrega".
4. El sistema navega al paso Datos de entrega del checkout.

**Resultado esperado**

El usuario queda en el paso Datos de entrega del checkout.

**Resultado obtenido**

Con {SKU_VALID_001} x 11 el CTA 'Continuar con la entrega' está habilitado y lleva a Datos de entrega (/checkout/entrega).

**Evidencia**

![Paso 2 — carro sobre el minimo](<B2C-37 Evidencias/TC-B2C37-D-005-p02-carro-sobre-el-minimo.png>)

![Estado final](<B2C-37 Evidencias/TC-B2C37-D-005.png>)

---

#### TC-B2C37-D-006 - Verificar que el carrito muestra disponibles colapsados y no disponibles expandidos [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_NO_DISPONIBLE} = 000000000400254005-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_SIN_STOCK} = Unimarc Los leones

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el acordeón de ítems disponibles colapsado (logo Unimarc + número de ítems + "productos" + chevron ↓) con el carrusel de miniaturas de 60×60 px, y el acordeón de ítems no disponibles expandido (ícono de carrito tachado + "Productos no disponibles" + "N productos" + chevron ↓) con la lista completa de ítems no disponibles. En la columna derecha muestra la tarjeta de totales, "Guardar como lista" y "Vaciar carro".

**Resultado esperado**

El acordeón de disponibles se muestra colapsado con carrusel de miniaturas y el de no disponibles expandido con la lista completa de ítems no disponibles.

**Resultado obtenido**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.

---

#### TC-B2C37-D-007 - Verificar que el carrusel de disponibles muestra el tile "+N" con los ítems restantes [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKUS_CARRUSEL} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKUS_CARRUSEL} = None

{SKU_NO_DISPONIBLE} = 000000000400254005-UN

{TIENDA_SIN_STOCK} = Unimarc Los leones

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito con el acordeón de disponibles colapsado y muestra en el carrusel las miniaturas que caben y un tile "+N" en gris.

**Resultado esperado**

El carrusel muestra un tile "+N" en gris donde N es la cantidad de ítems disponibles que no se muestran como miniatura.

**Resultado obtenido**

Causa: token(s) sin fila en el Excel de data: {SKUS_CARRUSEL}. Acción: cargar el dato en el Excel de data.

**Observación**

Causa: token(s) sin fila en el Excel de data: {SKUS_CARRUSEL}. Acción: cargar el dato en el Excel de data.

---

#### TC-B2C37-D-009 - Verificar que una sección colapsada se expande al hacer clic en su encabezado [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_NO_DISPONIBLE} = 000000000400254005-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_SIN_STOCK} = Unimarc Los leones

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.
3. El usuario hace clic en el encabezado del acordeón de ítems disponibles.
4. El sistema expande la sección: el chevron cambia a ↑, el carrusel de miniaturas se oculta y se muestra la lista completa de ítems.

**Resultado esperado**

La sección de ítems disponibles queda expandida: el chevron cambia a ↑, el carrusel de miniaturas se oculta y se muestra la lista completa de ítems.

**Resultado obtenido**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.

---

#### TC-B2C37-D-010 - Verificar que una sección expandida se colapsa al hacer clic en su encabezado [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_NO_DISPONIBLE} = 000000000400254005-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_SIN_STOCK} = Unimarc Los leones

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.
3. El usuario hace clic en el encabezado del acordeón de productos no disponibles.
4. El sistema colapsa la sección: el chevron cambia a ↓, la lista de ítems se oculta y se muestra el carrusel de miniaturas.

**Resultado esperado**

La sección queda colapsada: el chevron cambia a ↓, la lista de ítems se oculta y se muestra el carrusel de miniaturas.

**Resultado obtenido**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.

---

#### TC-B2C37-D-011 - Verificar que las secciones disponibles y no disponibles cambian de estado de forma independiente [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_NO_DISPONIBLE} = 000000000400254005-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_SIN_STOCK} = Unimarc Los leones

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.
3. El usuario hace clic en el encabezado del acordeón de ítems disponibles.
4. El sistema expande la sección de ítems disponibles y mantiene expandida la sección de no disponibles.
5. El usuario hace clic en el encabezado del acordeón de productos no disponibles.
6. El sistema colapsa la sección de no disponibles y mantiene expandida la sección de ítems disponibles.

**Resultado esperado**

Cada sección cambia de estado sin modificar el estado de la otra (disponibles expandida y no disponibles colapsada al final).

**Resultado obtenido**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.

---

#### TC-B2C37-D-012 - Verificar que el estado de los acordeones vuelve al inicial al recargar el carrito [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_NO_DISPONIBLE} = 000000000400254005-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_SIN_STOCK} = Unimarc Los leones

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.
3. El usuario hace clic en el encabezado del acordeón de ítems disponibles.
4. El sistema expande la sección de ítems disponibles.
5. El usuario recarga la página.
6. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.

**Resultado esperado**

Tras recargar o reingresar, el carrito vuelve al estado inicial: disponibles colapsado y no disponibles expandido.

**Resultado obtenido**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.

---

#### TC-B2C37-D-013 - Verificar que cada ítem disponible muestra imagen, nombre, precios, cantidad y controles [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene solo {SKU_VALID_001} (disponible)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito con el acordeón de disponibles expandido y muestra por cada ítem: imagen, nombre, precio unitario, precio final (con descuentos), cantidad actual, controles +/− y acción de eliminar.

**Resultado esperado**

Cada ítem disponible muestra imagen, nombre, precio unitario, precio final, cantidad actual, controles +/− y acción de eliminar.

**Resultado obtenido**

El ítem muestra imagen, 'Marca | Nombre', precio unitario '$2.490 c/u', cantidad '2 un.', controles + y − y la acción de eliminar. Sin descuento, el precio final coincide con el unitario.

**Evidencia**

![Paso 2 — item disponible](<B2C-37 Evidencias/TC-B2C37-D-013-p02-item-disponible.png>)

![Estado final](<B2C-37 Evidencias/TC-B2C37-D-013.png>)

---

#### TC-B2C37-D-014 - Verificar que los ítems disponibles se ordenan del agregado más reciente al más antiguo [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: PDP
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro está vacío

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_PESABLE} = 000000000000037972-KG

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a la PDP de {SKU_UNITARIO} y lo agrega al carro.
2. El usuario ingresa a la PDP de {SKU_PESABLE} y lo agrega al carro.
3. El usuario ingresa a la PDP de {SKU_VALID_001} y lo agrega al carro.
4. El sistema agrega los tres productos al carro.
5. El usuario ingresa a {CART_URL}.
6. El sistema carga el carrito y lista los ítems disponibles en el orden {SKU_VALID_001}, {SKU_PESABLE}, {SKU_UNITARIO}.

**Resultado esperado**

La lista de ítems disponibles muestra primero {SKU_VALID_001}, luego {SKU_PESABLE} y al final {SKU_UNITARIO}.

**Resultado obtenido**

Esperado: los ítems se listan del agregado más reciente al más antiguo ({SKU_VALID_001}, {SKU_PESABLE}, {SKU_UNITARIO}). Obtenido: tras agregar en orden Lavalozas Quix → Mangos granel → Albóndigas Super Pollo, el carro los lista Lavalozas Quix, Mangos granel, Albóndigas: del más antiguo al más reciente. tests/B2C-37.spec.ts.

**Observación**

Esperado: los ítems se listan del agregado más reciente al más antiguo ({SKU_VALID_001}, {SKU_PESABLE}, {SKU_UNITARIO}). Obtenido: tras agregar en orden Lavalozas Quix → Mangos granel → Albóndigas Super Pollo, el carro los lista Lavalozas Quix, Mangos granel, Albóndigas: del más antiguo al más reciente. tests/B2C-37.spec.ts.

**Evidencia**

![Paso 6 — orden de los items](<B2C-37 Evidencias/TC-B2C37-D-014-p06-orden-de-los-items.png>)

---

#### TC-B2C37-D-015 - Verificar que cada ítem no disponible muestra overlay, badge, faltantes y "Reemplazar" [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_NO_DISPONIBLE} = 000000000400254005-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_SIN_STOCK} = Unimarc Los leones

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra por cada ítem no disponible: imagen con overlay blanco semitransparente, badge "Pronto disponible" (fondo gris, texto gris), nombre, texto "Faltantes: N un" con la cantidad solicitada y CTA "Reemplazar" y el link "Eliminar".

**Resultado esperado**

Cada ítem no disponible muestra imagen con overlay, badge "Pronto disponible", nombre, "Faltantes: N un" y CTA "Reemplazar", además del link "Eliminar".

**Resultado obtenido**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.

---

#### TC-B2C37-D-016 - Verificar que los ítems no disponibles no permiten cambiar cantidad ni suman al subtotal [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_NO_DISPONIBLE} = 000000000400254005-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_SIN_STOCK} = Unimarc Los leones

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito con el acordeón de no disponibles expandido.
3. El usuario revisa un ítem no disponible y la tarjeta de totales.
4. El sistema muestra el ítem no disponible sin controles +/− y el Subtotal calculado solo con los ítems disponibles.

**Resultado esperado**

El ítem no disponible no tiene controles para modificar la cantidad y el Subtotal corresponde solo a {SKU_VALID_001}.

**Resultado obtenido**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.

---

#### TC-B2C37-D-017 - Verificar que "Reemplazar" inicia el flujo de productos similares [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_NO_DISPONIBLE} = 000000000400254005-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_SIN_STOCK} = Unimarc Los leones

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito con el acordeón de no disponibles expandido.
3. El usuario hace clic en "Reemplazar" en el ítem {SKU_NO_DISPONIBLE}.
4. El sistema inicia el flujo de búsqueda de productos similares (B2C-40).

**Resultado esperado**

Se inicia el flujo de productos similares definido en B2C-40 para {SKU_NO_DISPONIBLE}.

**Resultado obtenido**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.

---

#### TC-B2C37-D-018 - Verificar que el link "Eliminar" quita el ítem no disponible del carrito [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_NO_DISPONIBLE} = 000000000400254005-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_SIN_STOCK} = Unimarc Los leones

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito con el acordeón de no disponibles expandido.
3. El usuario hace clic en "Eliminar" en el ítem {SKU_NO_DISPONIBLE}.
4. El sistema quita el ítem {SKU_NO_DISPONIBLE} del carrito.

**Resultado esperado**

{SKU_NO_DISPONIBLE} ya no aparece en el carrito y {SKU_VALID_001} se mantiene.

**Resultado obtenido**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.

---

#### TC-B2C37-D-019 - Verificar que "Vaciar carro" abre el modal de confirmación con su contenido [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en el botón "Vaciar carro".
4. El sistema despliega un modal con imagen, título "Vaciar el carro", subtítulo "¿Deseas eliminar todos los productos de tu carro?", botones "Sí, eliminar" y "No, gracias" e ícono "X" en la esquina superior izquierda.

**Resultado esperado**

El modal muestra imagen, título "Vaciar el carro", subtítulo "¿Deseas eliminar todos los productos de tu carro?", "Sí, eliminar", "No, gracias" e ícono "X".

**Resultado obtenido**

Esperado: el modal 'Vaciar el carro' muestra imagen, título, subtítulo, 'Sí, eliminar', 'No, gracias' e ícono 'X' en la esquina superior izquierda. Obtenido: todo está, pero la X está en la esquina superior derecha (a 400 px del borde izquierdo de un modal de 448 px). tests/B2C-37.spec.ts.

**Observación**

Esperado: el modal 'Vaciar el carro' muestra imagen, título, subtítulo, 'Sí, eliminar', 'No, gracias' e ícono 'X' en la esquina superior izquierda. Obtenido: todo está, pero la X está en la esquina superior derecha (a 400 px del borde izquierdo de un modal de 448 px). tests/B2C-37.spec.ts.

**Evidencia**

![Paso 4 — modal vaciar el carro](<B2C-37 Evidencias/TC-B2C37-D-019-p04-modal-vaciar-el-carro.png>)

---

#### TC-B2C37-D-020 - Verificar que el modal muestra el estado de carga al confirmar el vaciado [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}
- DevTools abierto con throttling de red "Slow 3G"

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en el botón "Vaciar carro".
4. El sistema despliega el modal de confirmación "Vaciar el carro".
5. El usuario hace clic en "Sí, eliminar".
6. El sistema reemplaza el botón "Sí, eliminar" por un indicador de carga y deshabilita "No, gracias" mientras procesa.

**Resultado esperado**

Durante el procesamiento, "Sí, eliminar" se muestra como indicador de carga y "No, gracias" queda deshabilitado.

**Resultado obtenido**

Causa: el caso necesita la red lenta de DevTools ('Slow 3G') para ver el estado de carga del modal; la simulación por la automatización dejó la página sin responder en 2 de 2 intentos (perfil Slow 3G completo y solo latencia), sin llegar a observar el botón. Acción: verificarlo a mano con DevTools o habilitar un modo de prueba con respuesta demorada.

**Observación**

Causa: el caso necesita la red lenta de DevTools ('Slow 3G') para ver el estado de carga del modal; la simulación por la automatización dejó la página sin responder en 2 de 2 intentos (perfil Slow 3G completo y solo latencia), sin llegar a observar el botón. Acción: verificarlo a mano con DevTools o habilitar un modo de prueba con respuesta demorada.

**Evidencia**

![Estado final](<B2C-37 Evidencias/TC-B2C37-D-020.png>)

---

#### TC-B2C37-D-021 - Verificar que "Sí, eliminar" vacía el carro y muestra el estado de carro vacío [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en el botón "Vaciar carro".
4. El sistema despliega el modal de confirmación "Vaciar el carro".
5. El usuario hace clic en "Sí, eliminar".
6. El sistema elimina todos los ítems y muestra imagen, título "¡Tu carro está vacío!", subtítulo "Descubre todas las ofertas que tenemos para ti y llena tu despensa." y botón "Ir a comprar".

**Resultado esperado**

El carro queda sin ítems y muestra el estado vacío con "¡Tu carro está vacío!", su subtítulo y el botón "Ir a comprar".

**Resultado obtenido**

'Sí, eliminar' vacía el carro y muestra '¡Tu carro está vacío!', 'Descubre todas las ofertas que tenemos para ti y llena tu despensa.' y 'Ir a comprar'.

**Evidencia**

![Estado final](<B2C-37 Evidencias/TC-B2C37-D-021.png>)

---

#### TC-B2C37-D-022 - Verificar que "No, gracias" cierra el modal sin cambios en el carro [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en el botón "Vaciar carro".
4. El sistema despliega el modal de confirmación "Vaciar el carro".
5. El usuario hace clic en "No, gracias".
6. El sistema cierra el modal y mantiene el carrito sin cambios.

**Resultado esperado**

El modal se cierra y el carro conserva {SKU_VALID_001} y {SKU_UNITARIO} con sus cantidades.

**Resultado obtenido**

'No, gracias' cierra el modal y el carro conserva sus productos.

**Evidencia**

![Estado final](<B2C-37 Evidencias/TC-B2C37-D-022.png>)

---

#### TC-B2C37-D-023 - Verificar que la "X" del modal lo cierra sin cambios en el carro [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en el botón "Vaciar carro".
4. El sistema despliega el modal de confirmación "Vaciar el carro".
5. El usuario hace clic en el ícono "X" del modal.
6. El sistema cierra el modal y mantiene el carrito sin cambios.

**Resultado esperado**

El modal se cierra y el carro conserva {SKU_VALID_001} y {SKU_UNITARIO} con sus cantidades.

**Resultado obtenido**

La X cierra el modal y el carro conserva sus productos.

**Evidencia**

![Estado final](<B2C-37 Evidencias/TC-B2C37-D-023.png>)

---

#### TC-B2C37-D-024 - Verificar que el carrito muestra el toast de restricción de alcohol [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_ALCOHOL} (producto con restricción de alcohol)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_ALCOHOL} = None

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra un toast informativo con título "Información importante", el mensaje "Deberás mostrar tu carnet al recibir compras de bebidas alcohólicas." e ícono "X".

**Resultado esperado**

Se muestra el toast "Información importante" con el mensaje de carnet y {SKU_ALCOHOL} permanece en el carrito.

**Resultado obtenido**

Causa: token(s) sin fila en el Excel de data: {SKU_ALCOHOL}. Acción: cargar el dato en el Excel de data.

**Observación**

Causa: token(s) sin fila en el Excel de data: {SKU_ALCOHOL}. Acción: cargar el dato en el Excel de data.

---

#### TC-B2C37-D-025 - Verificar que la "X" cierra el toast de restricción de alcohol [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_ALCOHOL} (producto con restricción de alcohol)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_ALCOHOL} = None

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra un toast informativo con título "Información importante", el mensaje "Deberás mostrar tu carnet al recibir compras de bebidas alcohólicas." e ícono "X".
3. El usuario hace clic en el ícono "X" del toast.
4. El sistema cierra el toast.

**Resultado esperado**

El toast deja de mostrarse y {SKU_ALCOHOL} permanece en el carrito.

**Resultado obtenido**

Causa: token(s) sin fila en el Excel de data: {SKU_ALCOHOL}. Acción: cargar el dato en el Excel de data.

**Observación**

Causa: token(s) sin fila en el Excel de data: {SKU_ALCOHOL}. Acción: cargar el dato en el Excel de data.

---

#### TC-B2C37-D-026 - Verificar que el toast de restricción de alcohol desaparece a los 4 segundos [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_ALCOHOL} (producto con restricción de alcohol)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_ALCOHOL} = None

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra un toast informativo con título "Información importante", el mensaje "Deberás mostrar tu carnet al recibir compras de bebidas alcohólicas." e ícono "X".
3. El usuario espera 4 segundos sin interactuar con el toast.
4. El sistema oculta el toast automáticamente.

**Resultado esperado**

El toast desaparece solo a los 4 segundos de mostrarse.

**Resultado obtenido**

Causa: token(s) sin fila en el Excel de data: {SKU_ALCOHOL}. Acción: cargar el dato en el Excel de data.

**Observación**

Causa: token(s) sin fila en el Excel de data: {SKU_ALCOHOL}. Acción: cargar el dato en el Excel de data.

---

#### TC-B2C37-D-027 - Verificar que el carrito sin ítems muestra el estado vacío con "Ir a Comprar" [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión de invitado (ventana de incógnito, sin iniciar sesión)
- El carro está vacío

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el estado de carro vacío con un mensaje que invita a agregar productos y el CTA "Ir a Comprar".

**Resultado esperado**

Se muestra el estado de carro vacío con el mensaje que invita a agregar productos y el CTA "Ir a Comprar".

**Resultado obtenido**

Como invitado con el carro vacío se muestra '¡Tu carro está vacío!', el texto que invita a agregar productos y 'Ir a comprar'. En la primera corrida el carro de invitado mostró el error CRT-020 ('No pudimos mostrar tu carro'); en la re-ejecución cargó normal.

**Observación**

Como invitado con el carro vacío se muestra '¡Tu carro está vacío!', el texto que invita a agregar productos y 'Ir a comprar'. En la primera corrida el carro de invitado mostró el error CRT-020 ('No pudimos mostrar tu carro'); en la re-ejecución cargó normal.

**Evidencia**

![Estado final](<B2C-37 Evidencias/TC-B2C37-D-027.png>)

---

#### TC-B2C37-D-028 - Verificar que "Ir a Comprar" del carro vacío redirige al Home [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión de invitado (ventana de incógnito, sin iniciar sesión)
- El carro está vacío

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el estado de carro vacío con un mensaje que invita a agregar productos y el CTA "Ir a Comprar".
3. El usuario hace clic en "Ir a Comprar".
4. El sistema redirige a el Home ({BASE_URL}).

**Resultado esperado**

El usuario queda en el Home ({BASE_URL}).

**Resultado obtenido**

'Ir a comprar' del carro vacío lleva al Home. En la primera corrida el carro de invitado mostró el error CRT-020 ('No pudimos mostrar tu carro'); en la re-ejecución cargó normal.

**Observación**

'Ir a comprar' del carro vacío lleva al Home. En la primera corrida el carro de invitado mostró el error CRT-020 ('No pudimos mostrar tu carro'); en la re-ejecución cargó normal.

**Evidencia**

![Estado final](<B2C-37 Evidencias/TC-B2C37-D-028.png>)

---

#### TC-B2C37-D-029 - Verificar que el carrito muestra el estado de error CRT-020 sin ítems parciales [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001}
- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_API_ENDPOINT} = None

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el estado de error con imagen, título "No pudimos mostrar tu carro", mensaje "Tenemos problemas con cargar tus productos. Por favor, inténtalo otra vez.", CTA "Volver al inicio", CTA "Reintentar" y "Error: CRT-020".

**Resultado esperado**

Se muestra el estado de error CRT-020 completo y no se muestran ítems ni totales del carro.

**Resultado obtenido**

Causa: token(s) en TBD en el Excel de data: {CART_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.

**Observación**

Causa: token(s) en TBD en el Excel de data: {CART_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.

---

#### TC-B2C37-D-030 - Verificar que "Volver al inicio" del error de carga navega al Home [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001}
- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_API_ENDPOINT} = None

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el estado de error con imagen, título "No pudimos mostrar tu carro", mensaje "Tenemos problemas con cargar tus productos. Por favor, inténtalo otra vez.", CTA "Volver al inicio", CTA "Reintentar" y "Error: CRT-020".
3. El usuario hace clic en "Volver al inicio".
4. El sistema navega a el Home ({BASE_URL}).

**Resultado esperado**

El usuario queda en el Home ({BASE_URL}).

**Resultado obtenido**

Causa: token(s) en TBD en el Excel de data: {CART_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.

**Observación**

Causa: token(s) en TBD en el Excel de data: {CART_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.

---

#### TC-B2C37-D-031 - Verificar que "Reintentar" vuelve a cargar el contenido del carrito [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001}
- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_API_ENDPOINT} = None

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el estado de error con imagen, título "No pudimos mostrar tu carro", mensaje "Tenemos problemas con cargar tus productos. Por favor, inténtalo otra vez.", CTA "Volver al inicio", CTA "Reintentar" y "Error: CRT-020".
3. El usuario desactiva en DevTools el bloqueo de la request {CART_API_ENDPOINT}.
4. El usuario hace clic en "Reintentar".
5. El sistema vuelve a solicitar el contenido y carga el carrito con {SKU_VALID_001}.

**Resultado esperado**

El carrito se carga correctamente y muestra {SKU_VALID_001}.

**Resultado obtenido**

Causa: token(s) en TBD en el Excel de data: {CART_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.

**Observación**

Causa: token(s) en TBD en el Excel de data: {CART_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.

---

#### TC-B2C37-D-032 - Verificar que el error al vaciar muestra el toast CRT-076 y conserva los ítems [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}
- DevTools abierto con bloqueo de la request {VACIAR_CARRO_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{VACIAR_CARRO_API_ENDPOINT} = None

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en el botón "Vaciar carro".
4. El sistema despliega el modal de confirmación "Vaciar el carro".
5. El usuario hace clic en "Sí, eliminar".
6. El sistema muestra el toast de error "¡Lo sentimos! No pudimos vaciar tu carro, vuelve a intentarlo! [CRT-076]".

**Resultado esperado**

Se muestra el toast de error CRT-076 y el carro conserva {SKU_VALID_001} y {SKU_UNITARIO} sin cambios.

**Resultado obtenido**

Causa: token(s) en TBD en el Excel de data: {VACIAR_CARRO_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.

**Observación**

Causa: token(s) en TBD en el Excel de data: {VACIAR_CARRO_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.

---

#### TC-B2C37-D-033 - Verificar que el toast de error CRT-076 permanece hasta cerrarlo con la X [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}
- DevTools abierto con bloqueo de la request {VACIAR_CARRO_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{VACIAR_CARRO_API_ENDPOINT} = None

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en el botón "Vaciar carro".
4. El sistema despliega el modal de confirmación "Vaciar el carro".
5. El usuario hace clic en "Sí, eliminar".
6. El sistema muestra el toast de error "¡Lo sentimos! No pudimos vaciar tu carro, vuelve a intentarlo! [CRT-076]".
7. El usuario espera 10 segundos sin interactuar con el toast.
8. El sistema mantiene visible el toast de error.
9. El usuario hace clic en el ícono "X" del toast.
10. El sistema cierra el toast.

**Resultado esperado**

El toast sigue visible después de 10 segundos y solo se cierra con la "X".

**Resultado obtenido**

Causa: token(s) en TBD en el Excel de data: {VACIAR_CARRO_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.

**Observación**

Causa: token(s) en TBD en el Excel de data: {VACIAR_CARRO_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.

---

#### TC-B2C37-D-034 - Verificar que el carrito bajo el mínimo muestra el faltante y deshabilita el CTA [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El método de entrega activo es Despacho a domicilio
- El carro contiene {SKU_VALID_001} x 1 y el subtotal es menor a {MONTO_MINIMO_COMPRA}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito, muestra el toast "¡Solo te faltan $X para ir a pagar!" con X = {MONTO_MINIMO_COMPRA} − subtotal y el botón "Continuar con la entrega" deshabilitado con el label "Mínimo de compra ${MONTO_MINIMO_COMPRA}".

**Resultado esperado**

Se muestra el toast con el faltante real y el CTA "Continuar con la entrega" deshabilitado con el label "Mínimo de compra $Y".

**Resultado obtenido**

Con {SKU_VALID_001} x 1 se muestra el toast '¡Solo te faltan $X para ir a pagar!' con X = 20.000 − subtotal y el CTA deshabilitado con el label 'Mínimo de compra $20.000'.

**Evidencia**

![Paso 2 — toast de monto minimo y cta](<B2C-37 Evidencias/TC-B2C37-D-034-p02-toast-de-monto-minimo-y-cta.png>)

---

#### TC-B2C37-D-035 - Verificar que el monto faltante del toast se actualiza al cambiar la cantidad [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El método de entrega activo es Despacho a domicilio
- El carro contiene {SKU_VALID_001} x 1 y el subtotal es menor a {MONTO_MINIMO_COMPRA}
- Con 2 unidades de {SKU_VALID_001} el subtotal sigue siendo menor a {MONTO_MINIMO_COMPRA}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito, muestra el toast "¡Solo te faltan $X para ir a pagar!" con X = {MONTO_MINIMO_COMPRA} − subtotal y el botón "Continuar con la entrega" deshabilitado con el label "Mínimo de compra ${MONTO_MINIMO_COMPRA}".
3. El usuario hace clic en una vez el control + de {SKU_VALID_001}.
4. El sistema actualiza la cantidad y recalcula el monto del toast sin recargar la página.

**Resultado esperado**

El toast muestra el nuevo faltante: {MONTO_MINIMO_COMPRA} − subtotal con 2 unidades de {SKU_VALID_001}.

**Resultado obtenido**

Al sumar una unidad, el toast actualiza el faltante a 20.000 − nuevo subtotal sin recargar.

**Evidencia**

![Paso 2 — toast con 1 unidad](<B2C-37 Evidencias/TC-B2C37-D-035-p02-toast-con-1-unidad.png>)

![Paso 4 — toast con 2 unidades](<B2C-37 Evidencias/TC-B2C37-D-035-p04-toast-con-2-unidades.png>)

---

#### TC-B2C37-D-036 - Verificar que la X cierra el toast de monto mínimo [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El método de entrega activo es Despacho a domicilio
- El carro contiene {SKU_VALID_001} x 1 y el subtotal es menor a {MONTO_MINIMO_COMPRA}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito, muestra el toast "¡Solo te faltan $X para ir a pagar!" con X = {MONTO_MINIMO_COMPRA} − subtotal y el botón "Continuar con la entrega" deshabilitado con el label "Mínimo de compra ${MONTO_MINIMO_COMPRA}".
3. El usuario hace clic en el ícono "X" del toast.
4. El sistema cierra el toast.

**Resultado esperado**

El toast deja de mostrarse y el CTA "Continuar con la entrega" sigue deshabilitado.

**Resultado obtenido**

La X ('Cerrar el aviso') cierra el toast y el CTA sigue deshabilitado.

**Evidencia**

![Estado final](<B2C-37 Evidencias/TC-B2C37-D-036.png>)

---

#### TC-B2C37-D-037 - Verificar que el carrito sobre el mínimo con Retiro habilita "Continuar con la entrega" [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El método de entrega activo es Retiro en tienda en {TIENDA_RETIRO_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_RETIRO_001} = Unimarc Las Condes

{UNIDADES_SOBRE_MINIMO} = 11

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito con el CTA "Continuar con la entrega" habilitado y sin el toast de monto faltante.

**Resultado esperado**

El CTA "Continuar con la entrega" está habilitado y no se muestra el toast "¡Solo te faltan $X para ir a pagar!".

**Resultado obtenido**

Con retiro en Unimarc Las Condes y {SKU_VALID_001} x 11, 'Continuar con la entrega' está habilitado y no aparece el toast de faltante. Al terminar se restauró el despacho a Calle Uno 23.

**Evidencia**

![Paso 2 — carro con retiro sobre el minimo](<B2C-37 Evidencias/TC-B2C37-D-037-p02-carro-con-retiro-sobre-el-minimo.png>)

---

#### TC-B2C37-D-038 - Verificar que al alcanzar el mínimo se oculta el toast y se habilita el CTA en tiempo real [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El método de entrega activo es Despacho a domicilio
- El carro contiene {SKU_VALID_001} x 1 y el subtotal es menor a {MONTO_MINIMO_COMPRA}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

{UNIDADES_SOBRE_MINIMO} = 11

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito, muestra el toast "¡Solo te faltan $X para ir a pagar!" con X = {MONTO_MINIMO_COMPRA} − subtotal y el botón "Continuar con la entrega" deshabilitado con el label "Mínimo de compra ${MONTO_MINIMO_COMPRA}".
3. El usuario hace clic en el control + de {SKU_VALID_001} hasta llegar a {UNIDADES_SOBRE_MINIMO} unidades.
4. El sistema recalcula el subtotal, oculta el toast y habilita el CTA "Continuar con la entrega" sin recargar la página.

**Resultado esperado**

Con {UNIDADES_SOBRE_MINIMO} unidades el toast desaparece y el CTA "Continuar con la entrega" queda habilitado.

**Resultado obtenido**

Al sumar hasta 11 unidades el toast desaparece y 'Continuar con la entrega' queda habilitado en tiempo real.

**Evidencia**

![Paso 4 — carro con 11 unidades](<B2C-37 Evidencias/TC-B2C37-D-038-p04-carro-con-11-unidades.png>)

---

#### TC-B2C37-D-039 - Verificar que el carrito muestra el banner de membresía para cliente sin membresía previa [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}
- La cuenta {COMPRADOR_SIN_MEMBRESIA_USER} nunca tuvo membresía
- El carro contiene {SKU_VALID_001}
- El carrito contiene productos con descuentos membresía {SKU_OFERTA_MEMBRESIA}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_SIN_MEMBRESIA_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_SIN_MEMBRESIA_USER} = daunuruco+comprador@avatar-global.com

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner "Ahorra $X siendo Diamante · Prueba y disfruta 15 días gratis." con el CTA "Lo quiero".

**Resultado esperado**

Se muestra el banner "Ahorra $X siendo Diamante · Prueba y disfruta 15 días gratis." con $X calculado sobre el carro y el CTA "Lo quiero".

**Resultado obtenido**

Causa: la precondición pide el carro con productos con descuento de membresía ({SKU_OFERTA_MEMBRESIA}) y la fila no declara ese token. Acción: declarar {SKU_OFERTA_MEMBRESIA} en la fila.

**Observación**

Causa: la precondición pide el carro con productos con descuento de membresía ({SKU_OFERTA_MEMBRESIA}) y la fila no declara ese token. Acción: declarar {SKU_OFERTA_MEMBRESIA} en la fila.

---

#### TC-B2C37-D-040 - Verificar que "Lo quiero" abre el flujo de contratación de membresía [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}
- La cuenta {COMPRADOR_SIN_MEMBRESIA_USER} nunca tuvo membresía
- El carro contiene {SKU_VALID_001}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_SIN_MEMBRESIA_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_SIN_MEMBRESIA_USER} = daunuruco+comprador@avatar-global.com

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner "Ahorra $X siendo Diamante · Prueba y disfruta 15 días gratis." con el CTA "Lo quiero".
3. El usuario hace clic en "Lo quiero".
4. El sistema abre el flujo de contratación de membresía (B2C-42).

**Resultado esperado**

Se abre el flujo de contratación de membresía definido en B2C-42.

**Resultado obtenido**

Causa: con {COMPRADOR_SIN_MEMBRESIA_USER} (daunuruco+comprador, la misma cuenta que {COMPRADOR_USER}) y {SKU_VALID_001} en el carro no aparece ningún banner de membresía, así que no hay 'Lo quiero' que tocar; no se puede comprobar que la cuenta 'nunca tuvo membresía'. Acción: declarar una cuenta que nunca haya tenido membresía.

**Observación**

Causa: con {COMPRADOR_SIN_MEMBRESIA_USER} (daunuruco+comprador, la misma cuenta que {COMPRADOR_USER}) y {SKU_VALID_001} en el carro no aparece ningún banner de membresía, así que no hay 'Lo quiero' que tocar; no se puede comprobar que la cuenta 'nunca tuvo membresía'. Acción: declarar una cuenta que nunca haya tenido membresía.

**Evidencia**

![Paso 2 — carro de la cuenta sin membresia](<B2C-37 Evidencias/TC-B2C37-D-040-p02-carro-de-la-cuenta-sin-membresia.png>)

---

#### TC-B2C37-D-041 - Verificar que el carrito muestra el banner de renovación para membresía expirada [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER}
- La cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER} tuvo membresía y ya no está vigente
- El carro contiene {SKU_VALID_001}
- El carrito contiene productos con descuentos membresía {SKU_OFERTA_MEMBRESIA}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_MEMBRESIA_EXPIRADA_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_MEMBRESIA_EXPIRADA_USER} = daunuruco+segundo@avatar-global.com

{SKU_OFERTA_MEMBRESIA} = 000000000000178089-UN

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner "Ahorrarías $X siendo Diamante · Vuelve, te extrañamos." con el CTA "Renovar".

**Resultado esperado**

Se muestra el banner "Ahorrarías $X siendo Diamante · Vuelve, te extrañamos." con $X calculado sobre el carro y el CTA "Renovar".

**Resultado obtenido**

Causa: con {COMPRADOR_MEMBRESIA_EXPIRADA_USER} (daunuruco+segundo) y el carro con {SKU_VALID_001} y {SKU_OFERTA_MEMBRESIA} no aparece ningún banner de membresía ni 'Renovar'; no se puede comprobar que la cuenta tenga una membresía expirada. Acción: confirmar el estado de membresía de la cuenta o declarar otra con membresía expirada.

**Observación**

Causa: con {COMPRADOR_MEMBRESIA_EXPIRADA_USER} (daunuruco+segundo) y el carro con {SKU_VALID_001} y {SKU_OFERTA_MEMBRESIA} no aparece ningún banner de membresía ni 'Renovar'; no se puede comprobar que la cuenta tenga una membresía expirada. Acción: confirmar el estado de membresía de la cuenta o declarar otra con membresía expirada.

**Evidencia**

![Paso 2 — carro de la cuenta con membresia expirada](<B2C-37 Evidencias/TC-B2C37-D-041-p02-carro-de-la-cuenta-con-membresia-expirada.png>)

---

#### TC-B2C37-D-042 - Verificar que "Renovar" abre el flujo de renovación de membresía [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER}
- La cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER} tuvo membresía y ya no está vigente
- El carro contiene {SKU_VALID_001}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_MEMBRESIA_EXPIRADA_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_MEMBRESIA_EXPIRADA_USER} = daunuruco+segundo@avatar-global.com

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner "Ahorrarías $X siendo Diamante · Vuelve, te extrañamos." con el CTA "Renovar".
3. El usuario hace clic en "Renovar".
4. El sistema abre el flujo de renovación de membresía (B2C-42).

**Resultado esperado**

Se abre el flujo de renovación de membresía definido en B2C-42.

**Resultado obtenido**

Causa: con {COMPRADOR_MEMBRESIA_EXPIRADA_USER} (daunuruco+segundo) y el carro con {SKU_VALID_001} no aparece ningún banner de membresía ni 'Renovar'; no se puede comprobar que la cuenta tenga una membresía expirada. Acción: confirmar el estado de membresía de la cuenta o declarar otra con membresía expirada.

**Observación**

Causa: con {COMPRADOR_MEMBRESIA_EXPIRADA_USER} (daunuruco+segundo) y el carro con {SKU_VALID_001} no aparece ningún banner de membresía ni 'Renovar'; no se puede comprobar que la cuenta tenga una membresía expirada. Acción: confirmar el estado de membresía de la cuenta o declarar otra con membresía expirada.

**Evidencia**

![Paso 2 — carro de la cuenta con membresia expirada](<B2C-37 Evidencias/TC-B2C37-D-042-p02-carro-de-la-cuenta-con-membresia-expirada.png>)

---

#### TC-B2C37-D-043 - Verificar que el carrito no muestra el banner de membresía al usuario invitado [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión de invitado (sin iniciar sesión)
- El carro contiene {SKU_VALID_001}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carro invitado.

**Resultado esperado**

El carrito no muestra el banner de oferta de membresía.

**Resultado obtenido**

Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.

**Observación**

Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.

---

#### TC-B2C37-D-044 - Verificar que el carrito muestra el skeleton de carga mientras procesa la solicitud [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001}
- DevTools abierto con throttling de red "Slow 3G"

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra la pantalla de skeleton que replica la estructura del carrito mientras procesa la solicitud.

**Resultado esperado**

Durante la carga se muestra el skeleton con la estructura del carrito de Desktop.

**Resultado obtenido**

Con la red lenta simulada se registra el skeleton mientras carga el carrito.

**Evidencia**

![Paso 2 — skeleton de carga del carrito](<B2C-37 Evidencias/TC-B2C37-D-044-p02-skeleton-de-carga-del-carrito.png>)

![Estado final](<B2C-37 Evidencias/TC-B2C37-D-044.png>)

---

#### TC-B2C37-D-045 - Verificar que el skeleton se reemplaza por el contenido del carrito sin parpadeo [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001}
- DevTools abierto con throttling de red "Slow 3G"

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra la pantalla de skeleton que replica la estructura del carrito mientras procesa la solicitud.
3. El usuario espera a que finalice la carga.
4. El sistema reemplaza el skeleton por el contenido del carrito con una transición suave.

**Resultado esperado**

El skeleton se reemplaza por el carrito con {SKU_VALID_001} sin parpadeo.

**Resultado obtenido**

El skeleton se reemplaza por el carrito con {SKU_VALID_001} y no quedan skeletons al terminar la carga.

**Evidencia**

![Paso 2 — skeleton de carga del carrito](<B2C-37 Evidencias/TC-B2C37-D-045-p02-skeleton-de-carga-del-carrito.png>)

![Estado final](<B2C-37 Evidencias/TC-B2C37-D-045.png>)

---

#### TC-B2C37-D-046 - Verificar que el skeleton se reemplaza por el estado de error si la carga falla [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001}
- DevTools abierto con throttling de red "Slow 3G"
- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_API_ENDPOINT} = None

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra la pantalla de skeleton que replica la estructura del carrito mientras procesa la solicitud.
3. El usuario espera a que finalice la solicitud.
4. El sistema reemplaza el skeleton por el estado de error "No pudimos mostrar tu carro" con "Error: CRT-020".

**Resultado esperado**

El skeleton se reemplaza por el estado de error del carrito (CRT-020).

**Resultado obtenido**

Causa: token(s) en TBD en el Excel de data: {CART_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.

**Observación**

Causa: token(s) en TBD en el Excel de data: {CART_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.

---

#### TC-B2C37-M-001 - Verificar que el carrito muestra el layout con ítems disponibles y totales fijos sin Unipay [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene solo {SKU_VALID_001} (disponible y sin descuento Unipay)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el header simplificado "< Mi carrito", el acordeón de ítems disponibles expandido (logo Unimarc + número de ítems + "productos" + ícono de menú ⋯) con la lista de productos.
3. El usuario revisa la parte inferior de la pantalla.
4. El sistema muestra la tarjeta de totales fija solo con "Subtotal", el CTA "Continuar con la entrega" y el footer simplificado.

**Resultado esperado**

El carrito muestra header simplificado, acordeón de disponibles expandido con ícono ⋯ y la tarjeta de totales fija con "Subtotal" (sin "Subtotal con Unipay") y el CTA "Continuar con la entrega".

**Resultado obtenido**

Layout del carro con header simplificado ('Mi Carro' y volver), acordeón de disponibles expandido, tarjeta de totales con solo 'Subtotal' (sin 'Subtotal con Unipay'), CTA, footer simplificado e ícono ⋯. Bajo el mínimo el CTA se rotula 'Mínimo de compra $20.000'.

**Evidencia**

![Paso 2 — carrito con un item disponible](<B2C-37 Evidencias/TC-B2C37-M-001-p02-carrito-con-un-item-disponible.png>)

![Estado final](<B2C-37 Evidencias/TC-B2C37-M-001.png>)

---

#### TC-B2C37-M-002 - Verificar que la tarjeta de totales muestra "Subtotal con Unipay" con descuento Unipay [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_UNIPAY_001} (producto con descuento Unipay)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_UNIPAY_001} = 000000000000661945-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra en la tarjeta de totales las líneas "Subtotal" y "Subtotal con Unipay".

**Resultado esperado**

La tarjeta de totales muestra "Subtotal" y "Subtotal con Unipay", con un monto de "Subtotal con Unipay" menor al "Subtotal".

**Resultado obtenido**

Causa: {SKU_UNIPAY_001} (000000000000661945-UN, Lavaloza Quix) no tiene precio Unipay vigente: la PDP y el carro muestran solo $4.750 y no aparece 'Subtotal con Unipay'. Acción: declarar un SKU con promo Unipay vigente.

**Observación**

Causa: {SKU_UNIPAY_001} (000000000000661945-UN, Lavaloza Quix) no tiene precio Unipay vigente: la PDP y el carro muestran solo $4.750 y no aparece 'Subtotal con Unipay'. Acción: declarar un SKU con promo Unipay vigente.

---

#### TC-B2C37-M-003 - Verificar que el menú ⋯ muestra "Guardar como lista" y "Vaciar carro" [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca el menú de tres puntos (⋯).
4. El sistema despliega las opciones "Guardar como lista" y "Vaciar carro", cada una con su ícono.

**Resultado esperado**

El menú ⋯ muestra "Guardar como lista" + ícono y "Vaciar carro" + ícono.

**Resultado obtenido**

El menú ⋯ ('Más opciones') muestra 'Guardar como lista' y 'Vaciar carro', cada uno con su ícono.

**Evidencia**

![Paso 4 — menu abierto](<B2C-37 Evidencias/TC-B2C37-M-003-p04-menu-abierto.png>)

![Estado final](<B2C-37 Evidencias/TC-B2C37-M-003.png>)

---

#### TC-B2C37-M-004 - Verificar que el menú ⋯ muestra solo "Vaciar carro" al usuario invitado [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión de invitado (sin iniciar sesión)
- El carro contiene {SKU_VALID_001}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca el menú de tres puntos (⋯).
4. El sistema despliega el menú con la opción "Vaciar carro" + ícono.

**Resultado esperado**

El menú ⋯ muestra "Vaciar carro" + ícono y no muestra "Guardar como lista".

**Resultado obtenido**

Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.

**Observación**

Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.

---

#### TC-B2C37-M-005 - Verificar que "Continuar con la entrega" avanza al paso Datos de entrega [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO}
- El subtotal del carro es mayor o igual a {MONTO_MINIMO_COMPRA} y hay un método de entrega activo

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

{UNIDADES_SOBRE_MINIMO} = 11

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito con el CTA "Continuar con la entrega" habilitado.
3. El usuario toca "Continuar con la entrega".
4. El sistema navega al paso Datos de entrega del checkout.

**Resultado esperado**

El usuario queda en el paso Datos de entrega del checkout.

**Resultado obtenido**

Con {SKU_VALID_001} x 11 el CTA 'Continuar con la entrega' está habilitado y lleva a Datos de entrega (/checkout/entrega).

**Evidencia**

![Paso 2 — carro sobre el minimo](<B2C-37 Evidencias/TC-B2C37-M-005-p02-carro-sobre-el-minimo.png>)

![Estado final](<B2C-37 Evidencias/TC-B2C37-M-005.png>)

---

#### TC-B2C37-M-006 - Verificar que "Guardar como lista" del menú ⋯ inicia el flujo de guardado de lista [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca el menú de tres puntos (⋯).
4. El sistema despliega las opciones "Guardar como lista" y "Vaciar carro".
5. El usuario toca "Guardar como lista".
6. El sistema inicia el flujo de guardar como lista (B2C-54).

**Resultado esperado**

Se inicia el flujo de "Guardar como lista" definido en B2C-54.

**Resultado obtenido**

'Guardar como lista' del menú ⋯ abre el flujo 'Agregar como lista' (Crear nueva lista / listas existentes / Confirmar).

**Evidencia**

![Estado final](<B2C-37 Evidencias/TC-B2C37-M-006.png>)

---

#### TC-B2C37-M-007 - Verificar que el carrito muestra disponibles colapsados y no disponibles expandidos [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_NO_DISPONIBLE} = 000000000400254005-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_SIN_STOCK} = Unimarc Los leones

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el acordeón de ítems disponibles colapsado (logo Unimarc + número de ítems + "productos" + chevron ↓ + ícono de menú ⋯ y el botón "Mostrar más") con el carrusel de miniaturas de 60×60 px, y el acordeón de ítems no disponibles expandido (ícono de carrito tachado + "Productos no disponibles" + "N productos" + chevron ↓ y el botón "Mostrar más") con la lista completa de ítems no disponibles.

**Resultado esperado**

El acordeón de disponibles se muestra colapsado con carrusel de miniaturas y el de no disponibles expandido con la lista completa de ítems no disponibles.

**Resultado obtenido**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.

---

#### TC-B2C37-M-008 - Verificar que el carrusel de disponibles muestra el tile "+N" con los ítems restantes [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKUS_CARRUSEL} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKUS_CARRUSEL} = None

{SKU_NO_DISPONIBLE} = 000000000400254005-UN

{TIENDA_SIN_STOCK} = Unimarc Los leones

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito con el acordeón de disponibles colapsado y muestra en el carrusel las miniaturas que caben y un tile "+N" en gris.

**Resultado esperado**

El carrusel muestra un tile "+N" en gris donde N es la cantidad de ítems disponibles que no se muestran como miniatura.

**Resultado obtenido**

Causa: token(s) sin fila en el Excel de data: {SKUS_CARRUSEL}. Acción: cargar el dato en el Excel de data.

**Observación**

Causa: token(s) sin fila en el Excel de data: {SKUS_CARRUSEL}. Acción: cargar el dato en el Excel de data.

---

#### TC-B2C37-M-010 - Verificar que una sección colapsada se expande al tocar "Mostrar más" [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_NO_DISPONIBLE} = 000000000400254005-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_SIN_STOCK} = Unimarc Los leones

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.
3. El usuario toca el botón "Mostrar más" del acordeón de ítems disponibles.
4. El sistema expande la sección: el botón cambia a "Mostrar menos", el carrusel de miniaturas se oculta y se muestra la lista completa de ítems.

**Resultado esperado**

La sección de ítems disponibles queda expandida: el botón cambia a "Mostrar menos", el carrusel de miniaturas se oculta y se muestra la lista completa de ítems.

**Resultado obtenido**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.

---

#### TC-B2C37-M-011 - Verificar que una sección expandida se colapsa al tocar "Mostrar menos" [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_NO_DISPONIBLE} = 000000000400254005-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_SIN_STOCK} = Unimarc Los leones

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.
3. El usuario toca el botón "Mostrar más" del acordeón de ítems disponibles.
4. El sistema expande la sección: el botón cambia a "Mostrar menos", el carrusel de miniaturas se oculta y se muestra la lista completa de ítems.
5. El usuario toca el botón "Mostrar menos" del acordeón de ítems disponibles.
6. El sistema colapsa la sección: el botón cambia a "Mostrar más", la lista de ítems se oculta y se muestra el carrusel de miniaturas.

**Resultado esperado**

La sección queda colapsada: el botón cambia a "Mostrar más", la lista de ítems se oculta y se muestra el carrusel de miniaturas.

**Resultado obtenido**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.

---

#### TC-B2C37-M-012 - Verificar que las secciones disponibles y no disponibles cambian de estado de forma independiente [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_NO_DISPONIBLE} = 000000000400254005-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_SIN_STOCK} = Unimarc Los leones

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.
3. El usuario toca el botón "Mostrar más" del acordeón de ítems disponibles.
4. El sistema expande la sección de ítems disponibles y mantiene expandida la sección de no disponibles.
5. El usuario toca el botón "Mostrar menos" del acordeón de productos no disponibles.
6. El sistema colapsa la sección de no disponibles y mantiene expandida la sección de ítems disponibles.

**Resultado esperado**

Cada sección cambia de estado sin modificar el estado de la otra (disponibles expandida y no disponibles colapsada al final).

**Resultado obtenido**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.

---

#### TC-B2C37-M-013 - Verificar que el estado de los acordeones vuelve al inicial al recargar el carrito [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_NO_DISPONIBLE} = 000000000400254005-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_SIN_STOCK} = Unimarc Los leones

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.
3. El usuario toca el botón "Mostrar más" del acordeón de ítems disponibles.
4. El sistema expande la sección de ítems disponibles.
5. El usuario recarga la página.
6. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.

**Resultado esperado**

Tras recargar o reingresar, el carrito vuelve al estado inicial: disponibles colapsado y no disponibles expandido.

**Resultado obtenido**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.

---

#### TC-B2C37-M-014 - Verificar que cada ítem disponible muestra imagen, nombre, precios, cantidad y controles [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene solo {SKU_VALID_001} (disponible)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito con el acordeón de disponibles expandido y muestra por cada ítem: imagen, nombre, precio unitario, precio final (con descuentos), cantidad actual, controles +/− y acción de eliminar.

**Resultado esperado**

Cada ítem disponible muestra imagen, nombre, precio unitario, precio final, cantidad actual, controles +/− y acción de eliminar.

**Resultado obtenido**

El ítem muestra imagen, 'Marca | Nombre', precio unitario '$2.490 c/u', cantidad '2 un.', controles + y − y la acción de eliminar. Sin descuento, el precio final coincide con el unitario.

**Evidencia**

![Paso 2 — item disponible](<B2C-37 Evidencias/TC-B2C37-M-014-p02-item-disponible.png>)

![Estado final](<B2C-37 Evidencias/TC-B2C37-M-014.png>)

---

#### TC-B2C37-M-015 - Verificar que los ítems disponibles se ordenan del agregado más reciente al más antiguo [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: PDP
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro está vacío

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_PESABLE} = 000000000000037972-KG

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a la PDP de {SKU_UNITARIO} y lo agrega al carro.
2. El usuario ingresa a la PDP de {SKU_PESABLE} y lo agrega al carro.
3. El usuario ingresa a la PDP de {SKU_VALID_001} y lo agrega al carro.
4. El sistema agrega los tres productos al carro.
5. El usuario ingresa a {CART_URL}.
6. El sistema carga el carrito y lista los ítems disponibles en el orden {SKU_VALID_001}, {SKU_PESABLE}, {SKU_UNITARIO}.

**Resultado esperado**

La lista de ítems disponibles muestra primero {SKU_VALID_001}, luego {SKU_PESABLE} y al final {SKU_UNITARIO}.

**Resultado obtenido**

Esperado: los ítems se listan del agregado más reciente al más antiguo ({SKU_VALID_001}, {SKU_PESABLE}, {SKU_UNITARIO}). Obtenido: tras agregar en orden Lavalozas Quix → Mangos granel → Albóndigas Super Pollo, el carro los lista Lavalozas Quix, Mangos granel, Albóndigas: del más antiguo al más reciente. tests/B2C-37.spec.ts.

**Observación**

Esperado: los ítems se listan del agregado más reciente al más antiguo ({SKU_VALID_001}, {SKU_PESABLE}, {SKU_UNITARIO}). Obtenido: tras agregar en orden Lavalozas Quix → Mangos granel → Albóndigas Super Pollo, el carro los lista Lavalozas Quix, Mangos granel, Albóndigas: del más antiguo al más reciente. tests/B2C-37.spec.ts.

**Evidencia**

![Paso 6 — orden de los items](<B2C-37 Evidencias/TC-B2C37-M-015-p06-orden-de-los-items.png>)

---

#### TC-B2C37-M-016 - Verificar que cada ítem no disponible muestra overlay, badge, faltantes y "Reemplazar" [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_NO_DISPONIBLE} = 000000000400254005-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_SIN_STOCK} = Unimarc Los leones

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra por cada ítem no disponible: imagen con overlay blanco semitransparente, badge "Pronto disponible" (fondo gris, texto gris), nombre, texto "Faltantes: N un" con la cantidad solicitada y CTA "Reemplazar".

**Resultado esperado**

Cada ítem no disponible muestra imagen con overlay, badge "Pronto disponible", nombre, "Faltantes: N un" y CTA "Reemplazar".

**Resultado obtenido**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.

---

#### TC-B2C37-M-017 - Verificar que los ítems no disponibles no permiten cambiar cantidad ni suman al subtotal [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_NO_DISPONIBLE} = 000000000400254005-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_SIN_STOCK} = Unimarc Los leones

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito con el acordeón de no disponibles expandido.
3. El usuario revisa un ítem no disponible y la tarjeta de totales.
4. El sistema muestra el ítem no disponible sin controles +/− y el Subtotal calculado solo con los ítems disponibles.

**Resultado esperado**

El ítem no disponible no tiene controles para modificar la cantidad y el Subtotal corresponde solo a {SKU_VALID_001}.

**Resultado obtenido**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.

---

#### TC-B2C37-M-018 - Verificar que "Reemplazar" inicia el flujo de productos similares [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_NO_DISPONIBLE} = 000000000400254005-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_SIN_STOCK} = Unimarc Los leones

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito con el acordeón de no disponibles expandido.
3. El usuario toca "Reemplazar" en el ítem {SKU_NO_DISPONIBLE}.
4. El sistema inicia el flujo de búsqueda de productos similares (B2C-40).

**Resultado esperado**

Se inicia el flujo de productos similares definido en B2C-40 para {SKU_NO_DISPONIBLE}.

**Resultado obtenido**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.

---

#### TC-B2C37-M-019 - Verificar que "Vaciar carro" abre el modal de confirmación con su contenido [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca el menú de tres puntos (⋯).
4. El sistema despliega las opciones "Guardar como lista" y "Vaciar carro".
5. El usuario toca "Vaciar carro".
6. El sistema despliega un modal con imagen, título "Vaciar el carro", subtítulo "¿Deseas eliminar todos los productos de tu carro?", botones "Sí, eliminar" y "No, gracias" e ícono "X" en la esquina superior izquierda.

**Resultado esperado**

El modal muestra imagen, título "Vaciar el carro", subtítulo "¿Deseas eliminar todos los productos de tu carro?", "Sí, eliminar", "No, gracias" e ícono "X".

**Resultado obtenido**

El modal 'Vaciar el carro' muestra imagen, título, subtítulo, 'Sí, eliminar', 'No, gracias' y la X.

**Evidencia**

![Paso 4 — modal vaciar el carro](<B2C-37 Evidencias/TC-B2C37-M-019-p04-modal-vaciar-el-carro.png>)

---

#### TC-B2C37-M-020 - Verificar que el modal muestra el estado de carga al confirmar el vaciado [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}
- DevTools abierto con throttling de red "Slow 3G"

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca el menú de tres puntos (⋯).
4. El sistema despliega las opciones "Guardar como lista" y "Vaciar carro".
5. El usuario toca "Vaciar carro".
6. El sistema despliega el modal de confirmación "Vaciar el carro".
7. El usuario toca "Sí, eliminar".
8. El sistema reemplaza el botón "Sí, eliminar" por un indicador de carga y deshabilita "No, gracias" mientras procesa.

**Resultado esperado**

Durante el procesamiento, "Sí, eliminar" se muestra como indicador de carga y "No, gracias" queda deshabilitado.

**Resultado obtenido**

Causa: el caso necesita la red lenta de DevTools ('Slow 3G') para ver el estado de carga del modal; la simulación por la automatización dejó la página sin responder en 2 de 2 intentos (perfil Slow 3G completo y solo latencia), sin llegar a observar el botón. Acción: verificarlo a mano con DevTools o habilitar un modo de prueba con respuesta demorada.

**Observación**

Causa: el caso necesita la red lenta de DevTools ('Slow 3G') para ver el estado de carga del modal; la simulación por la automatización dejó la página sin responder en 2 de 2 intentos (perfil Slow 3G completo y solo latencia), sin llegar a observar el botón. Acción: verificarlo a mano con DevTools o habilitar un modo de prueba con respuesta demorada.

**Evidencia**

![Estado final](<B2C-37 Evidencias/TC-B2C37-M-020.png>)

---

#### TC-B2C37-M-021 - Verificar que "Sí, eliminar" vacía el carro y muestra el estado de carro vacío [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca el menú de tres puntos (⋯).
4. El sistema despliega las opciones "Guardar como lista" y "Vaciar carro".
5. El usuario toca "Vaciar carro".
6. El sistema despliega el modal de confirmación "Vaciar el carro".
7. El usuario toca "Sí, eliminar".
8. El sistema elimina todos los ítems y muestra imagen, título "¡Tu carro está vacío!", subtítulo "Descubre todas las ofertas que tenemos para ti y llena tu despensa." y botón "Ir a comprar".

**Resultado esperado**

El carro queda sin ítems y muestra el estado vacío con "¡Tu carro está vacío!", su subtítulo y el botón "Ir a comprar".

**Resultado obtenido**

'Sí, eliminar' vacía el carro y muestra '¡Tu carro está vacío!', 'Descubre todas las ofertas que tenemos para ti y llena tu despensa.' y 'Ir a comprar'.

**Evidencia**

![Estado final](<B2C-37 Evidencias/TC-B2C37-M-021.png>)

---

#### TC-B2C37-M-022 - Verificar que "No, gracias" cierra el modal sin cambios en el carro [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca el menú de tres puntos (⋯).
4. El sistema despliega las opciones "Guardar como lista" y "Vaciar carro".
5. El usuario toca "Vaciar carro".
6. El sistema despliega el modal de confirmación "Vaciar el carro".
7. El usuario toca "No, gracias".
8. El sistema cierra el modal y mantiene el carrito sin cambios.

**Resultado esperado**

El modal se cierra y el carro conserva {SKU_VALID_001} y {SKU_UNITARIO} con sus cantidades.

**Resultado obtenido**

'No, gracias' cierra el modal y el carro conserva sus productos.

**Evidencia**

![Estado final](<B2C-37 Evidencias/TC-B2C37-M-022.png>)

---

#### TC-B2C37-M-023 - Verificar que la "X" del modal lo cierra sin cambios en el carro [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca el menú de tres puntos (⋯).
4. El sistema despliega las opciones "Guardar como lista" y "Vaciar carro".
5. El usuario toca "Vaciar carro".
6. El sistema despliega el modal de confirmación "Vaciar el carro".
7. El usuario toca el ícono "X" del modal.
8. El sistema cierra el modal y mantiene el carrito sin cambios.

**Resultado esperado**

El modal se cierra y el carro conserva {SKU_VALID_001} y {SKU_UNITARIO} con sus cantidades.

**Resultado obtenido**

La X cierra el modal y el carro conserva sus productos.

**Evidencia**

![Estado final](<B2C-37 Evidencias/TC-B2C37-M-023.png>)

---

#### TC-B2C37-M-024 - Verificar que el carrito muestra el toast de restricción de alcohol [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_ALCOHOL} (producto con restricción de alcohol)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_ALCOHOL} = None

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra un toast informativo con título "Información importante", el mensaje "Deberás mostrar tu carnet al recibir compras de bebidas alcohólicas." e ícono "X".

**Resultado esperado**

Se muestra el toast "Información importante" con el mensaje de carnet y {SKU_ALCOHOL} permanece en el carrito.

**Resultado obtenido**

Causa: token(s) sin fila en el Excel de data: {SKU_ALCOHOL}. Acción: cargar el dato en el Excel de data.

**Observación**

Causa: token(s) sin fila en el Excel de data: {SKU_ALCOHOL}. Acción: cargar el dato en el Excel de data.

---

#### TC-B2C37-M-025 - Verificar que la "X" cierra el toast de restricción de alcohol [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_ALCOHOL} (producto con restricción de alcohol)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_ALCOHOL} = None

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra un toast informativo con título "Información importante", el mensaje "Deberás mostrar tu carnet al recibir compras de bebidas alcohólicas." e ícono "X".
3. El usuario toca el ícono "X" del toast.
4. El sistema cierra el toast.

**Resultado esperado**

El toast deja de mostrarse y {SKU_ALCOHOL} permanece en el carrito.

**Resultado obtenido**

Causa: token(s) sin fila en el Excel de data: {SKU_ALCOHOL}. Acción: cargar el dato en el Excel de data.

**Observación**

Causa: token(s) sin fila en el Excel de data: {SKU_ALCOHOL}. Acción: cargar el dato en el Excel de data.

---

#### TC-B2C37-M-026 - Verificar que el toast de restricción de alcohol desaparece a los 4 segundos [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_ALCOHOL} (producto con restricción de alcohol)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_ALCOHOL} = None

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra un toast informativo con título "Información importante", el mensaje "Deberás mostrar tu carnet al recibir compras de bebidas alcohólicas." e ícono "X".
3. El usuario espera 4 segundos sin interactuar con el toast.
4. El sistema oculta el toast automáticamente.

**Resultado esperado**

El toast desaparece solo a los 4 segundos de mostrarse.

**Resultado obtenido**

Causa: token(s) sin fila en el Excel de data: {SKU_ALCOHOL}. Acción: cargar el dato en el Excel de data.

**Observación**

Causa: token(s) sin fila en el Excel de data: {SKU_ALCOHOL}. Acción: cargar el dato en el Excel de data.

---

#### TC-B2C37-M-027 - Verificar que el carrito sin ítems muestra el estado vacío con "Ir a Comprar" [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión de invitado (ventana de incógnito, sin iniciar sesión)
- El carro está vacío

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el estado de carro vacío con un mensaje que invita a agregar productos y el CTA "Ir a Comprar".

**Resultado esperado**

Se muestra el estado de carro vacío con el mensaje que invita a agregar productos y el CTA "Ir a Comprar".

**Resultado obtenido**

Como invitado con el carro vacío se muestra '¡Tu carro está vacío!', el texto que invita a agregar productos y 'Ir a comprar'.

**Evidencia**

![Estado final](<B2C-37 Evidencias/TC-B2C37-M-027.png>)

---

#### TC-B2C37-M-028 - Verificar que "Ir a Comprar" del carro vacío redirige al Home [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión de invitado (ventana de incógnito, sin iniciar sesión)
- El carro está vacío

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el estado de carro vacío con un mensaje que invita a agregar productos y el CTA "Ir a Comprar".
3. El usuario toca "Ir a Comprar".
4. El sistema redirige a el Home ({BASE_URL}).

**Resultado esperado**

El usuario queda en el Home ({BASE_URL}).

**Resultado obtenido**

'Ir a comprar' del carro vacío lleva al Home.

**Evidencia**

![Estado final](<B2C-37 Evidencias/TC-B2C37-M-028.png>)

---

#### TC-B2C37-M-029 - Verificar que el carrito muestra el estado de error CRT-020 sin ítems parciales [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001}
- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_API_ENDPOINT} = None

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el estado de error con imagen, título "No pudimos mostrar tu carro", mensaje "Tenemos problemas con cargar tus productos. Por favor, inténtalo otra vez.", CTA "Volver al inicio", CTA "Reintentar" y "Error: CRT-020".

**Resultado esperado**

Se muestra el estado de error CRT-020 completo y no se muestran ítems ni totales del carro.

**Resultado obtenido**

Causa: token(s) en TBD en el Excel de data: {CART_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.

**Observación**

Causa: token(s) en TBD en el Excel de data: {CART_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.

---

#### TC-B2C37-M-030 - Verificar que "Volver al inicio" del error de carga navega al Home [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001}
- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_API_ENDPOINT} = None

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el estado de error con imagen, título "No pudimos mostrar tu carro", mensaje "Tenemos problemas con cargar tus productos. Por favor, inténtalo otra vez.", CTA "Volver al inicio", CTA "Reintentar" y "Error: CRT-020".
3. El usuario toca "Volver al inicio".
4. El sistema navega a el Home ({BASE_URL}).

**Resultado esperado**

El usuario queda en el Home ({BASE_URL}).

**Resultado obtenido**

Causa: token(s) en TBD en el Excel de data: {CART_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.

**Observación**

Causa: token(s) en TBD en el Excel de data: {CART_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.

---

#### TC-B2C37-M-031 - Verificar que "Reintentar" vuelve a cargar el contenido del carrito [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001}
- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_API_ENDPOINT} = None

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el estado de error con imagen, título "No pudimos mostrar tu carro", mensaje "Tenemos problemas con cargar tus productos. Por favor, inténtalo otra vez.", CTA "Volver al inicio", CTA "Reintentar" y "Error: CRT-020".
3. El usuario desactiva en DevTools el bloqueo de la request {CART_API_ENDPOINT}.
4. El usuario toca "Reintentar".
5. El sistema vuelve a solicitar el contenido y carga el carrito con {SKU_VALID_001}.

**Resultado esperado**

El carrito se carga correctamente y muestra {SKU_VALID_001}.

**Resultado obtenido**

Causa: token(s) en TBD en el Excel de data: {CART_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.

**Observación**

Causa: token(s) en TBD en el Excel de data: {CART_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.

---

#### TC-B2C37-M-032 - Verificar que el error al vaciar muestra el toast CRT-076 y conserva los ítems [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}
- DevTools abierto con bloqueo de la request {VACIAR_CARRO_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{VACIAR_CARRO_API_ENDPOINT} = None

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca el menú de tres puntos (⋯).
4. El sistema despliega las opciones "Guardar como lista" y "Vaciar carro".
5. El usuario toca "Vaciar carro".
6. El sistema despliega el modal de confirmación "Vaciar el carro".
7. El usuario toca "Sí, eliminar".
8. El sistema muestra el toast de error "¡Lo sentimos! No pudimos vaciar tu carro, vuelve a intentarlo! [CRT-076]".

**Resultado esperado**

Se muestra el toast de error CRT-076 y el carro conserva {SKU_VALID_001} y {SKU_UNITARIO} sin cambios.

**Resultado obtenido**

Causa: token(s) en TBD en el Excel de data: {VACIAR_CARRO_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.

**Observación**

Causa: token(s) en TBD en el Excel de data: {VACIAR_CARRO_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.

---

#### TC-B2C37-M-033 - Verificar que el toast de error CRT-076 permanece hasta cerrarlo con la X [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}
- DevTools abierto con bloqueo de la request {VACIAR_CARRO_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{VACIAR_CARRO_API_ENDPOINT} = None

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca el menú de tres puntos (⋯).
4. El sistema despliega las opciones "Guardar como lista" y "Vaciar carro".
5. El usuario toca "Vaciar carro".
6. El sistema despliega el modal de confirmación "Vaciar el carro".
7. El usuario toca "Sí, eliminar".
8. El sistema muestra el toast de error "¡Lo sentimos! No pudimos vaciar tu carro, vuelve a intentarlo! [CRT-076]".
9. El usuario espera 10 segundos sin interactuar con el toast.
10. El sistema mantiene visible el toast de error.
11. El usuario toca el ícono "X" del toast.
12. El sistema cierra el toast.

**Resultado esperado**

El toast sigue visible después de 10 segundos y solo se cierra con la "X".

**Resultado obtenido**

Causa: token(s) en TBD en el Excel de data: {VACIAR_CARRO_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.

**Observación**

Causa: token(s) en TBD en el Excel de data: {VACIAR_CARRO_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.

---

#### TC-B2C37-M-034 - Verificar que el carrito bajo el mínimo muestra el faltante y deshabilita el CTA [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El método de entrega activo es Despacho a domicilio
- El carro contiene {SKU_VALID_001} x 1 y el subtotal es menor a {MONTO_MINIMO_COMPRA}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito, muestra el toast "¡Solo te faltan $X para ir a pagar!" con X = {MONTO_MINIMO_COMPRA} − subtotal y el botón "Continuar con la entrega" deshabilitado con el label "Mínimo de compra ${MONTO_MINIMO_COMPRA}".

**Resultado esperado**

Se muestra el toast con el faltante real y el CTA "Continuar con la entrega" deshabilitado con el label "Mínimo de compra $Y".

**Resultado obtenido**

Con {SKU_VALID_001} x 1 se muestra el toast '¡Solo te faltan $X para ir a pagar!' con X = 20.000 − subtotal y el CTA deshabilitado con el label 'Mínimo de compra $20.000'.

**Evidencia**

![Paso 2 — toast de monto minimo y cta](<B2C-37 Evidencias/TC-B2C37-M-034-p02-toast-de-monto-minimo-y-cta.png>)

---

#### TC-B2C37-M-035 - Verificar que el monto faltante del toast se actualiza al cambiar la cantidad [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El método de entrega activo es Despacho a domicilio
- El carro contiene {SKU_VALID_001} x 1 y el subtotal es menor a {MONTO_MINIMO_COMPRA}
- Con 2 unidades de {SKU_VALID_001} el subtotal sigue siendo menor a {MONTO_MINIMO_COMPRA}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito, muestra el toast "¡Solo te faltan $X para ir a pagar!" con X = {MONTO_MINIMO_COMPRA} − subtotal y el botón "Continuar con la entrega" deshabilitado con el label "Mínimo de compra ${MONTO_MINIMO_COMPRA}".
3. El usuario toca una vez el control + de {SKU_VALID_001}.
4. El sistema actualiza la cantidad y recalcula el monto del toast sin recargar la página.

**Resultado esperado**

El toast muestra el nuevo faltante: {MONTO_MINIMO_COMPRA} − subtotal con 2 unidades de {SKU_VALID_001}.

**Resultado obtenido**

Al sumar una unidad, el toast actualiza el faltante a 20.000 − nuevo subtotal sin recargar.

**Evidencia**

![Paso 2 — toast con 1 unidad](<B2C-37 Evidencias/TC-B2C37-M-035-p02-toast-con-1-unidad.png>)

![Paso 4 — toast con 2 unidades](<B2C-37 Evidencias/TC-B2C37-M-035-p04-toast-con-2-unidades.png>)

---

#### TC-B2C37-M-036 - Verificar que la X cierra el toast de monto mínimo [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El método de entrega activo es Despacho a domicilio
- El carro contiene {SKU_VALID_001} x 1 y el subtotal es menor a {MONTO_MINIMO_COMPRA}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito, muestra el toast "¡Solo te faltan $X para ir a pagar!" con X = {MONTO_MINIMO_COMPRA} − subtotal y el botón "Continuar con la entrega" deshabilitado con el label "Mínimo de compra ${MONTO_MINIMO_COMPRA}".
3. El usuario toca el ícono "X" del toast.
4. El sistema cierra el toast.

**Resultado esperado**

El toast deja de mostrarse y el CTA "Continuar con la entrega" sigue deshabilitado.

**Resultado obtenido**

La X ('Cerrar el aviso') cierra el toast y el CTA sigue deshabilitado.

**Evidencia**

![Estado final](<B2C-37 Evidencias/TC-B2C37-M-036.png>)

---

#### TC-B2C37-M-037 - Verificar que el carrito sobre el mínimo con Retiro habilita "Continuar con la entrega" [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El método de entrega activo es Retiro en tienda en {TIENDA_RETIRO_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_RETIRO_001} = Unimarc Las Condes

{UNIDADES_SOBRE_MINIMO} = 11

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito con el CTA "Continuar con la entrega" habilitado y sin el toast de monto faltante.

**Resultado esperado**

El CTA "Continuar con la entrega" está habilitado y no se muestra el toast "¡Solo te faltan $X para ir a pagar!".

**Resultado obtenido**

Con retiro en Unimarc Las Condes y {SKU_VALID_001} x 11, 'Continuar con la entrega' está habilitado y no aparece el toast de faltante. Al terminar se restauró el despacho a Calle Uno 23.

**Evidencia**

![Paso 2 — carro con retiro sobre el minimo](<B2C-37 Evidencias/TC-B2C37-M-037-p02-carro-con-retiro-sobre-el-minimo.png>)

---

#### TC-B2C37-M-038 - Verificar que al alcanzar el mínimo se oculta el toast y se habilita el CTA en tiempo real [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El método de entrega activo es Despacho a domicilio
- El carro contiene {SKU_VALID_001} x 1 y el subtotal es menor a {MONTO_MINIMO_COMPRA}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

{UNIDADES_SOBRE_MINIMO} = 11

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito, muestra el toast "¡Solo te faltan $X para ir a pagar!" con X = {MONTO_MINIMO_COMPRA} − subtotal y el botón "Continuar con la entrega" deshabilitado con el label "Mínimo de compra ${MONTO_MINIMO_COMPRA}".
3. El usuario toca el control + de {SKU_VALID_001} hasta llegar a {UNIDADES_SOBRE_MINIMO} unidades.
4. El sistema recalcula el subtotal, oculta el toast y habilita el CTA "Continuar con la entrega" sin recargar la página.

**Resultado esperado**

Con {UNIDADES_SOBRE_MINIMO} unidades el toast desaparece y el CTA "Continuar con la entrega" queda habilitado.

**Resultado obtenido**

Al sumar hasta 11 unidades el toast desaparece y 'Continuar con la entrega' queda habilitado en tiempo real.

**Evidencia**

![Paso 4 — carro con 11 unidades](<B2C-37 Evidencias/TC-B2C37-M-038-p04-carro-con-11-unidades.png>)

---

#### TC-B2C37-M-039 - Verificar que el carrito muestra el banner de membresía para cliente sin membresía previa [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}
- La cuenta {COMPRADOR_SIN_MEMBRESIA_USER} nunca tuvo membresía
- El carro contiene {SKU_VALID_001}
- El carrito contiene productos con descuentos membresía {SKU_OFERTA_MEMBRESIA}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_SIN_MEMBRESIA_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_SIN_MEMBRESIA_USER} = daunuruco+comprador@avatar-global.com

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner "Ahorra $X siendo Diamante · Prueba y disfruta 15 días gratis." con el CTA "Lo quiero".

**Resultado esperado**

Se muestra el banner "Ahorra $X siendo Diamante · Prueba y disfruta 15 días gratis." con $X calculado sobre el carro y el CTA "Lo quiero".

**Resultado obtenido**

Causa: la precondición pide el carro con productos con descuento de membresía ({SKU_OFERTA_MEMBRESIA}) y la fila no declara ese token. Acción: declarar {SKU_OFERTA_MEMBRESIA} en la fila.

**Observación**

Causa: la precondición pide el carro con productos con descuento de membresía ({SKU_OFERTA_MEMBRESIA}) y la fila no declara ese token. Acción: declarar {SKU_OFERTA_MEMBRESIA} en la fila.

---

#### TC-B2C37-M-040 - Verificar que "Lo quiero" abre el flujo de contratación de membresía [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}
- La cuenta {COMPRADOR_SIN_MEMBRESIA_USER} nunca tuvo membresía
- El carro contiene {SKU_VALID_001}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_SIN_MEMBRESIA_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_SIN_MEMBRESIA_USER} = daunuruco+comprador@avatar-global.com

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner "Ahorra $X siendo Diamante · Prueba y disfruta 15 días gratis." con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema abre el flujo de contratación de membresía (B2C-42).

**Resultado esperado**

Se abre el flujo de contratación de membresía definido en B2C-42.

**Resultado obtenido**

Causa: con {COMPRADOR_SIN_MEMBRESIA_USER} (daunuruco+comprador, la misma cuenta que {COMPRADOR_USER}) y {SKU_VALID_001} en el carro no aparece ningún banner de membresía, así que no hay 'Lo quiero' que tocar; no se puede comprobar que la cuenta 'nunca tuvo membresía'. Acción: declarar una cuenta que nunca haya tenido membresía.

**Observación**

Causa: con {COMPRADOR_SIN_MEMBRESIA_USER} (daunuruco+comprador, la misma cuenta que {COMPRADOR_USER}) y {SKU_VALID_001} en el carro no aparece ningún banner de membresía, así que no hay 'Lo quiero' que tocar; no se puede comprobar que la cuenta 'nunca tuvo membresía'. Acción: declarar una cuenta que nunca haya tenido membresía.

**Evidencia**

![Paso 2 — carro de la cuenta sin membresia](<B2C-37 Evidencias/TC-B2C37-M-040-p02-carro-de-la-cuenta-sin-membresia.png>)

---

#### TC-B2C37-M-041 - Verificar que el carrito muestra el banner de renovación para membresía expirada [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER}
- La cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER} tuvo membresía y ya no está vigente
- El carro contiene {SKU_VALID_001}
- El carrito contiene productos con descuentos membresía {SKU_OFERTA_MEMBRESIA}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_MEMBRESIA_EXPIRADA_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_MEMBRESIA_EXPIRADA_USER} = daunuruco+segundo@avatar-global.com

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner "Ahorrarías $X siendo Diamante · Vuelve, te extrañamos." con el CTA "Renovar".

**Resultado esperado**

Se muestra el banner "Ahorrarías $X siendo Diamante · Vuelve, te extrañamos." con $X calculado sobre el carro y el CTA "Renovar".

**Resultado obtenido**

Causa: con {COMPRADOR_MEMBRESIA_EXPIRADA_USER} (daunuruco+segundo) y el carro con {SKU_VALID_001} y {SKU_OFERTA_MEMBRESIA} no aparece ningún banner de membresía ni 'Renovar'; no se puede comprobar que la cuenta tenga una membresía expirada. Acción: confirmar el estado de membresía de la cuenta o declarar otra con membresía expirada.

**Observación**

Causa: con {COMPRADOR_MEMBRESIA_EXPIRADA_USER} (daunuruco+segundo) y el carro con {SKU_VALID_001} y {SKU_OFERTA_MEMBRESIA} no aparece ningún banner de membresía ni 'Renovar'; no se puede comprobar que la cuenta tenga una membresía expirada. Acción: confirmar el estado de membresía de la cuenta o declarar otra con membresía expirada.

**Evidencia**

![Paso 2 — carro de la cuenta con membresia expirada](<B2C-37 Evidencias/TC-B2C37-M-041-p02-carro-de-la-cuenta-con-membresia-expirada.png>)

---

#### TC-B2C37-M-042 - Verificar que "Renovar" abre el flujo de renovación de membresía [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER}
- La cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER} tuvo membresía y ya no está vigente
- El carro contiene {SKU_VALID_001}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_MEMBRESIA_EXPIRADA_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_MEMBRESIA_EXPIRADA_USER} = daunuruco+segundo@avatar-global.com

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner "Ahorrarías $X siendo Diamante · Vuelve, te extrañamos." con el CTA "Renovar".
3. El usuario toca "Renovar".
4. El sistema abre el flujo de renovación de membresía (B2C-42).

**Resultado esperado**

Se abre el flujo de renovación de membresía definido en B2C-42.

**Resultado obtenido**

Causa: con {COMPRADOR_MEMBRESIA_EXPIRADA_USER} (daunuruco+segundo) y el carro con {SKU_VALID_001} no aparece ningún banner de membresía ni 'Renovar'; no se puede comprobar que la cuenta tenga una membresía expirada. Acción: confirmar el estado de membresía de la cuenta o declarar otra con membresía expirada.

**Observación**

Causa: con {COMPRADOR_MEMBRESIA_EXPIRADA_USER} (daunuruco+segundo) y el carro con {SKU_VALID_001} no aparece ningún banner de membresía ni 'Renovar'; no se puede comprobar que la cuenta tenga una membresía expirada. Acción: confirmar el estado de membresía de la cuenta o declarar otra con membresía expirada.

**Evidencia**

![Paso 2 — carro de la cuenta con membresia expirada](<B2C-37 Evidencias/TC-B2C37-M-042-p02-carro-de-la-cuenta-con-membresia-expirada.png>)

---

#### TC-B2C37-M-043 - Verificar que el carrito no muestra el banner de membresía al usuario invitado [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión de invitado (sin iniciar sesión)
- El carro contiene {SKU_VALID_001}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carro invitado.

**Resultado esperado**

El carrito no muestra el banner de oferta de membresía.

**Resultado obtenido**

Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.

**Observación**

Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.

---

#### TC-B2C37-M-044 - Verificar que el carrito muestra el skeleton de carga mientras procesa la solicitud [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001}
- DevTools abierto con throttling de red "Slow 3G"

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra la pantalla de skeleton que replica la estructura del carrito mientras procesa la solicitud.

**Resultado esperado**

Durante la carga se muestra el skeleton con la estructura del carrito de Mobile.

**Resultado obtenido**

Con la red lenta simulada se registra el skeleton mientras carga el carrito.

**Evidencia**

![Paso 2 — skeleton de carga del carrito](<B2C-37 Evidencias/TC-B2C37-M-044-p02-skeleton-de-carga-del-carrito.png>)

![Estado final](<B2C-37 Evidencias/TC-B2C37-M-044.png>)

---

#### TC-B2C37-M-045 - Verificar que el skeleton se reemplaza por el contenido del carrito sin parpadeo [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001}
- DevTools abierto con throttling de red "Slow 3G"

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra la pantalla de skeleton que replica la estructura del carrito mientras procesa la solicitud.
3. El usuario espera a que finalice la carga.
4. El sistema reemplaza el skeleton por el contenido del carrito con una transición suave.

**Resultado esperado**

El skeleton se reemplaza por el carrito con {SKU_VALID_001} sin parpadeo.

**Resultado obtenido**

El skeleton se reemplaza por el carrito con {SKU_VALID_001} y no quedan skeletons al terminar la carga.

**Evidencia**

![Paso 2 — skeleton de carga del carrito](<B2C-37 Evidencias/TC-B2C37-M-045-p02-skeleton-de-carga-del-carrito.png>)

![Estado final](<B2C-37 Evidencias/TC-B2C37-M-045.png>)

---

#### TC-B2C37-M-046 - Verificar que el skeleton se reemplaza por el estado de error si la carga falla [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001}
- DevTools abierto con throttling de red "Slow 3G"
- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_API_ENDPOINT} = None

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra la pantalla de skeleton que replica la estructura del carrito mientras procesa la solicitud.
3. El usuario espera a que finalice la solicitud.
4. El sistema reemplaza el skeleton por el estado de error "No pudimos mostrar tu carro" con "Error: CRT-020".

**Resultado esperado**

El skeleton se reemplaza por el estado de error del carrito (CRT-020).

**Resultado obtenido**

Causa: token(s) en TBD en el Excel de data: {CART_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.

**Observación**

Causa: token(s) en TBD en el Excel de data: {CART_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.

---

#### TC-B2C37-M-047 - Verificar que la tarjeta de totales queda fija al hacer scroll en la lista de productos [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKUS_CARRUSEL} y {SKU_UNIPAY_001}, y la lista supera la altura visible de la pantalla

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKUS_CARRUSEL} = None

{SKU_UNIPAY_001} = 000000000000661945-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito con la lista de productos y la tarjeta de totales en la parte inferior.
3. El usuario hace scroll vertical hasta el final de la lista de productos.
4. El sistema desplaza el área de productos y mantiene fija la tarjeta de totales con "Subtotal", "Subtotal con Unipay" y el CTA "Continuar con la entrega".

**Resultado esperado**

Durante todo el scroll la tarjeta de totales permanece fija mostrando "Subtotal", "Subtotal con Unipay" y "Continuar con la entrega".

**Resultado obtenido**

Causa: {SKUS_CARRUSEL} no tiene fila en el Excel de data (y {SKU_UNIPAY_001} no tiene promo Unipay vigente). Acción: cargar {SKUS_CARRUSEL} y un SKU con Unipay vigente.

**Observación**

Causa: {SKUS_CARRUSEL} no tiene fila en el Excel de data (y {SKU_UNIPAY_001} no tiene promo Unipay vigente). Acción: cargar {SKUS_CARRUSEL} y un SKU con Unipay vigente.

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
  "suite": "B2C-37",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-37 WEB Test Cases.xlsx",
  "title": "Página del carro",
  "updated_at": "2026-10-20"
 },
 "history": {
  "2026-10-20": [
   "TC-B2C37-D-001",
   "TC-B2C37-D-002",
   "TC-B2C37-D-003",
   "TC-B2C37-D-004",
   "TC-B2C37-D-005",
   "TC-B2C37-D-006",
   "TC-B2C37-D-007",
   "TC-B2C37-D-009",
   "TC-B2C37-D-010",
   "TC-B2C37-D-011",
   "TC-B2C37-D-012",
   "TC-B2C37-D-013",
   "TC-B2C37-D-014",
   "TC-B2C37-D-015",
   "TC-B2C37-D-016",
   "TC-B2C37-D-017",
   "TC-B2C37-D-018",
   "TC-B2C37-D-019",
   "TC-B2C37-D-020",
   "TC-B2C37-D-021",
   "TC-B2C37-D-022",
   "TC-B2C37-D-023",
   "TC-B2C37-D-024",
   "TC-B2C37-D-025",
   "TC-B2C37-D-026",
   "TC-B2C37-D-027",
   "TC-B2C37-D-028",
   "TC-B2C37-D-029",
   "TC-B2C37-D-030",
   "TC-B2C37-D-031",
   "TC-B2C37-D-032",
   "TC-B2C37-D-033",
   "TC-B2C37-D-034",
   "TC-B2C37-D-035",
   "TC-B2C37-D-036",
   "TC-B2C37-D-037",
   "TC-B2C37-D-038",
   "TC-B2C37-D-039",
   "TC-B2C37-D-040",
   "TC-B2C37-D-041",
   "TC-B2C37-D-042",
   "TC-B2C37-D-043",
   "TC-B2C37-D-044",
   "TC-B2C37-D-045",
   "TC-B2C37-D-046",
   "TC-B2C37-M-001",
   "TC-B2C37-M-002",
   "TC-B2C37-M-003",
   "TC-B2C37-M-004",
   "TC-B2C37-M-005",
   "TC-B2C37-M-006",
   "TC-B2C37-M-007",
   "TC-B2C37-M-008",
   "TC-B2C37-M-010",
   "TC-B2C37-M-011",
   "TC-B2C37-M-012",
   "TC-B2C37-M-013",
   "TC-B2C37-M-014",
   "TC-B2C37-M-015",
   "TC-B2C37-M-016",
   "TC-B2C37-M-017",
   "TC-B2C37-M-018",
   "TC-B2C37-M-019",
   "TC-B2C37-M-020",
   "TC-B2C37-M-021",
   "TC-B2C37-M-022",
   "TC-B2C37-M-023",
   "TC-B2C37-M-024",
   "TC-B2C37-M-025",
   "TC-B2C37-M-026",
   "TC-B2C37-M-027",
   "TC-B2C37-M-028",
   "TC-B2C37-M-029",
   "TC-B2C37-M-030",
   "TC-B2C37-M-031",
   "TC-B2C37-M-032",
   "TC-B2C37-M-033",
   "TC-B2C37-M-034",
   "TC-B2C37-M-035",
   "TC-B2C37-M-036",
   "TC-B2C37-M-037",
   "TC-B2C37-M-038",
   "TC-B2C37-M-039",
   "TC-B2C37-M-040",
   "TC-B2C37-M-041",
   "TC-B2C37-M-042",
   "TC-B2C37-M-043",
   "TC-B2C37-M-044",
   "TC-B2C37-M-045",
   "TC-B2C37-M-046",
   "TC-B2C37-M-047"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El carrito muestra el layout de dos columnas con header y footer simplificados; la tarjeta de totales muestra solo \"Subtotal\" (sin \"Subtotal con Unipay\") junto al CTA \"Continuar con la entrega\", \"Guardar como lista\" y \"Vaciar carro\".",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-001",
   "name": "Verificar que el carrito muestra el layout de dos columnas con ítems disponibles sin Unipay [Desktop] [Logueado]",
   "observed": "Layout del carro con header simplificado ('Mi Carro' y volver), acordeón de disponibles expandido, tarjeta de totales con solo 'Subtotal' (sin 'Subtotal con Unipay'), CTA, footer simplificado, 'Guardar como lista' y 'Vaciar carro'. Bajo el mínimo el CTA se rotula 'Mínimo de compra $20.000'.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene solo {SKU_VALID_001} (disponible y sin descuento Unipay)",
   "screenshots": [
    {
     "caption": "Paso 2 — carrito con un item disponible",
     "file": "TC-B2C37-D-001-p02-carrito-con-un-item-disponible.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C37-D-001.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el header simplificado, en la columna izquierda \"< Mi carrito\" y el acordeón de ítems disponibles expandido (logo Unimarc + número de ítems + \"productos\") con la lista de productos.\n3. El usuario revisa la columna derecha y el pie de página.\n4. El sistema muestra la tarjeta de totales solo con \"Subtotal\", el CTA \"Continuar con la entrega\", los botones \"Guardar como lista\" y \"Vaciar carro\" y el footer simplificado.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "La columna derecha muestra el botón \"Vaciar carro\" y no muestra \"Guardar como lista\".",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-002",
   "name": "Verificar que el carrito no muestra \"Guardar como lista\" al usuario invitado [Desktop] [Guest]",
   "observation": "Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.",
   "observed": "Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión de invitado (ventana de incógnito, sin iniciar sesión)\n- El carro contiene {SKU_VALID_001}",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra en la columna derecha la tarjeta de totales y solo el botón \"Vaciar carro\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "La tarjeta de totales muestra \"Subtotal\" y \"Subtotal con Unipay\", con un monto de \"Subtotal con Unipay\" menor al \"Subtotal\".",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-003",
   "name": "Verificar que la tarjeta de totales muestra \"Subtotal con Unipay\" con descuento Unipay [Desktop] [Logueado]",
   "observation": "Causa: {SKU_UNIPAY_001} (000000000000661945-UN, Lavaloza Quix) no tiene precio Unipay vigente: la PDP y el carro muestran solo $4.750 y no aparece 'Subtotal con Unipay'. Acción: declarar un SKU con promo Unipay vigente.",
   "observed": "Causa: {SKU_UNIPAY_001} (000000000000661945-UN, Lavaloza Quix) no tiene precio Unipay vigente: la PDP y el carro muestran solo $4.750 y no aparece 'Subtotal con Unipay'. Acción: declarar un SKU con promo Unipay vigente.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_UNIPAY_001} (producto con descuento Unipay)",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra en la tarjeta de totales las líneas \"Subtotal\" y \"Subtotal con Unipay\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_UNIPAY_001} = 000000000000661945-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se inicia el flujo de \"Guardar como lista\" definido en B2C-54.",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-004",
   "name": "Verificar que \"Guardar como lista\" inicia el flujo de guardado de lista [Desktop] [Logueado]",
   "observed": "'Guardar como lista' abre el flujo 'Agregar como lista' (Crear nueva lista / listas existentes / Confirmar).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001}",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C37-D-004.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en el botón \"Guardar como lista\".\n4. El sistema inicia el flujo de guardar como lista (B2C-54).",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El usuario queda en el paso Datos de entrega del checkout.",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-005",
   "name": "Verificar que \"Continuar con la entrega\" avanza al paso Datos de entrega [Desktop] [Logueado]",
   "observed": "Con {SKU_VALID_001} x 11 el CTA 'Continuar con la entrega' está habilitado y lleva a Datos de entrega (/checkout/entrega).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO}\n- El subtotal del carro es mayor o igual a {MONTO_MINIMO_COMPRA} y hay un método de entrega activo",
   "screenshots": [
    {
     "caption": "Paso 2 — carro sobre el minimo",
     "file": "TC-B2C37-D-005-p02-carro-sobre-el-minimo.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C37-D-005.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito con el CTA \"Continuar con la entrega\" habilitado.\n3. El usuario hace clic en \"Continuar con la entrega\".\n4. El sistema navega al paso Datos de entrega del checkout.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN\n{UNIDADES_SOBRE_MINIMO} = 11",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El acordeón de disponibles se muestra colapsado con carrusel de miniaturas y el de no disponibles expandido con la lista completa de ítems no disponibles.",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-006",
   "name": "Verificar que el carrito muestra disponibles colapsados y no disponibles expandidos [Desktop] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.",
   "observed": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el acordeón de ítems disponibles colapsado (logo Unimarc + número de ítems + \"productos\" + chevron ↓) con el carrusel de miniaturas de 60×60 px, y el acordeón de ítems no disponibles expandido (ícono de carrito tachado + \"Productos no disponibles\" + \"N productos\" + chevron ↓) con la lista completa de ítems no disponibles. En la columna derecha muestra la tarjeta de totales, \"Guardar como lista\" y \"Vaciar carro\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_NO_DISPONIBLE} = 000000000400254005-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_SIN_STOCK} = Unimarc Los leones",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El carrusel muestra un tile \"+N\" en gris donde N es la cantidad de ítems disponibles que no se muestran como miniatura.",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-007",
   "name": "Verificar que el carrusel de disponibles muestra el tile \"+N\" con los ítems restantes [Desktop] [Logueado]",
   "observation": "Causa: token(s) sin fila en el Excel de data: {SKUS_CARRUSEL}. Acción: cargar el dato en el Excel de data.",
   "observed": "Causa: token(s) sin fila en el Excel de data: {SKUS_CARRUSEL}. Acción: cargar el dato en el Excel de data.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKUS_CARRUSEL} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito con el acordeón de disponibles colapsado y muestra en el carrusel las miniaturas que caben y un tile \"+N\" en gris.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKUS_CARRUSEL} = None\n{SKU_NO_DISPONIBLE} = 000000000400254005-UN\n{TIENDA_SIN_STOCK} = Unimarc Los leones",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "La sección de ítems disponibles queda expandida: el chevron cambia a ↑, el carrusel de miniaturas se oculta y se muestra la lista completa de ítems.",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-009",
   "name": "Verificar que una sección colapsada se expande al hacer clic en su encabezado [Desktop] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.",
   "observed": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.\n3. El usuario hace clic en el encabezado del acordeón de ítems disponibles.\n4. El sistema expande la sección: el chevron cambia a ↑, el carrusel de miniaturas se oculta y se muestra la lista completa de ítems.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_NO_DISPONIBLE} = 000000000400254005-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_SIN_STOCK} = Unimarc Los leones",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "La sección queda colapsada: el chevron cambia a ↓, la lista de ítems se oculta y se muestra el carrusel de miniaturas.",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-010",
   "name": "Verificar que una sección expandida se colapsa al hacer clic en su encabezado [Desktop] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.",
   "observed": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.\n3. El usuario hace clic en el encabezado del acordeón de productos no disponibles.\n4. El sistema colapsa la sección: el chevron cambia a ↓, la lista de ítems se oculta y se muestra el carrusel de miniaturas.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_NO_DISPONIBLE} = 000000000400254005-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_SIN_STOCK} = Unimarc Los leones",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Cada sección cambia de estado sin modificar el estado de la otra (disponibles expandida y no disponibles colapsada al final).",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-011",
   "name": "Verificar que las secciones disponibles y no disponibles cambian de estado de forma independiente [Desktop] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.",
   "observed": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.\n3. El usuario hace clic en el encabezado del acordeón de ítems disponibles.\n4. El sistema expande la sección de ítems disponibles y mantiene expandida la sección de no disponibles.\n5. El usuario hace clic en el encabezado del acordeón de productos no disponibles.\n6. El sistema colapsa la sección de no disponibles y mantiene expandida la sección de ítems disponibles.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_NO_DISPONIBLE} = 000000000400254005-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_SIN_STOCK} = Unimarc Los leones",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Tras recargar o reingresar, el carrito vuelve al estado inicial: disponibles colapsado y no disponibles expandido.",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-012",
   "name": "Verificar que el estado de los acordeones vuelve al inicial al recargar el carrito [Desktop] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.",
   "observed": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.\n3. El usuario hace clic en el encabezado del acordeón de ítems disponibles.\n4. El sistema expande la sección de ítems disponibles.\n5. El usuario recarga la página.\n6. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_NO_DISPONIBLE} = 000000000400254005-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_SIN_STOCK} = Unimarc Los leones",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Cada ítem disponible muestra imagen, nombre, precio unitario, precio final, cantidad actual, controles +/− y acción de eliminar.",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-013",
   "name": "Verificar que cada ítem disponible muestra imagen, nombre, precios, cantidad y controles [Desktop] [Logueado]",
   "observed": "El ítem muestra imagen, 'Marca | Nombre', precio unitario '$2.490 c/u', cantidad '2 un.', controles + y − y la acción de eliminar. Sin descuento, el precio final coincide con el unitario.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene solo {SKU_VALID_001} (disponible)",
   "screenshots": [
    {
     "caption": "Paso 2 — item disponible",
     "file": "TC-B2C37-D-013-p02-item-disponible.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C37-D-013.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito con el acordeón de disponibles expandido y muestra por cada ítem: imagen, nombre, precio unitario, precio final (con descuentos), cantidad actual, controles +/− y acción de eliminar.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "La lista de ítems disponibles muestra primero {SKU_VALID_001}, luego {SKU_PESABLE} y al final {SKU_UNITARIO}.",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-014",
   "name": "Verificar que los ítems disponibles se ordenan del agregado más reciente al más antiguo [Desktop] [Logueado]",
   "observation": "Esperado: los ítems se listan del agregado más reciente al más antiguo ({SKU_VALID_001}, {SKU_PESABLE}, {SKU_UNITARIO}). Obtenido: tras agregar en orden Lavalozas Quix → Mangos granel → Albóndigas Super Pollo, el carro los lista Lavalozas Quix, Mangos granel, Albóndigas: del más antiguo al más reciente. tests/B2C-37.spec.ts.",
   "observed": "Esperado: los ítems se listan del agregado más reciente al más antiguo ({SKU_VALID_001}, {SKU_PESABLE}, {SKU_UNITARIO}). Obtenido: tras agregar en orden Lavalozas Quix → Mangos granel → Albóndigas Super Pollo, el carro los lista Lavalozas Quix, Mangos granel, Albóndigas: del más antiguo al más reciente. tests/B2C-37.spec.ts.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: PDP\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro está vacío",
   "screenshots": [
    {
     "caption": "Paso 6 — orden de los items",
     "file": "TC-B2C37-D-014-p06-orden-de-los-items.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a la PDP de {SKU_UNITARIO} y lo agrega al carro.\n2. El usuario ingresa a la PDP de {SKU_PESABLE} y lo agrega al carro.\n3. El usuario ingresa a la PDP de {SKU_VALID_001} y lo agrega al carro.\n4. El sistema agrega los tres productos al carro.\n5. El usuario ingresa a {CART_URL}.\n6. El sistema carga el carrito y lista los ítems disponibles en el orden {SKU_VALID_001}, {SKU_PESABLE}, {SKU_UNITARIO}.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_PESABLE} = 000000000000037972-KG\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Cada ítem no disponible muestra imagen con overlay, badge \"Pronto disponible\", nombre, \"Faltantes: N un\" y CTA \"Reemplazar\", además del link \"Eliminar\".",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-015",
   "name": "Verificar que cada ítem no disponible muestra overlay, badge, faltantes y \"Reemplazar\" [Desktop] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.",
   "observed": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra por cada ítem no disponible: imagen con overlay blanco semitransparente, badge \"Pronto disponible\" (fondo gris, texto gris), nombre, texto \"Faltantes: N un\" con la cantidad solicitada y CTA \"Reemplazar\" y el link \"Eliminar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_NO_DISPONIBLE} = 000000000400254005-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_SIN_STOCK} = Unimarc Los leones",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El ítem no disponible no tiene controles para modificar la cantidad y el Subtotal corresponde solo a {SKU_VALID_001}.",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-016",
   "name": "Verificar que los ítems no disponibles no permiten cambiar cantidad ni suman al subtotal [Desktop] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.",
   "observed": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito con el acordeón de no disponibles expandido.\n3. El usuario revisa un ítem no disponible y la tarjeta de totales.\n4. El sistema muestra el ítem no disponible sin controles +/− y el Subtotal calculado solo con los ítems disponibles.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_NO_DISPONIBLE} = 000000000400254005-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_SIN_STOCK} = Unimarc Los leones",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se inicia el flujo de productos similares definido en B2C-40 para {SKU_NO_DISPONIBLE}.",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-017",
   "name": "Verificar que \"Reemplazar\" inicia el flujo de productos similares [Desktop] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.",
   "observed": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito con el acordeón de no disponibles expandido.\n3. El usuario hace clic en \"Reemplazar\" en el ítem {SKU_NO_DISPONIBLE}.\n4. El sistema inicia el flujo de búsqueda de productos similares (B2C-40).",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_NO_DISPONIBLE} = 000000000400254005-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_SIN_STOCK} = Unimarc Los leones",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "{SKU_NO_DISPONIBLE} ya no aparece en el carrito y {SKU_VALID_001} se mantiene.",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-018",
   "name": "Verificar que el link \"Eliminar\" quita el ítem no disponible del carrito [Desktop] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.",
   "observed": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito con el acordeón de no disponibles expandido.\n3. El usuario hace clic en \"Eliminar\" en el ítem {SKU_NO_DISPONIBLE}.\n4. El sistema quita el ítem {SKU_NO_DISPONIBLE} del carrito.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_NO_DISPONIBLE} = 000000000400254005-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_SIN_STOCK} = Unimarc Los leones",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El modal muestra imagen, título \"Vaciar el carro\", subtítulo \"¿Deseas eliminar todos los productos de tu carro?\", \"Sí, eliminar\", \"No, gracias\" e ícono \"X\".",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-019",
   "name": "Verificar que \"Vaciar carro\" abre el modal de confirmación con su contenido [Desktop] [Logueado]",
   "observation": "Esperado: el modal 'Vaciar el carro' muestra imagen, título, subtítulo, 'Sí, eliminar', 'No, gracias' e ícono 'X' en la esquina superior izquierda. Obtenido: todo está, pero la X está en la esquina superior derecha (a 400 px del borde izquierdo de un modal de 448 px). tests/B2C-37.spec.ts.",
   "observed": "Esperado: el modal 'Vaciar el carro' muestra imagen, título, subtítulo, 'Sí, eliminar', 'No, gracias' e ícono 'X' en la esquina superior izquierda. Obtenido: todo está, pero la X está en la esquina superior derecha (a 400 px del borde izquierdo de un modal de 448 px). tests/B2C-37.spec.ts.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}",
   "screenshots": [
    {
     "caption": "Paso 4 — modal vaciar el carro",
     "file": "TC-B2C37-D-019-p04-modal-vaciar-el-carro.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en el botón \"Vaciar carro\".\n4. El sistema despliega un modal con imagen, título \"Vaciar el carro\", subtítulo \"¿Deseas eliminar todos los productos de tu carro?\", botones \"Sí, eliminar\" y \"No, gracias\" e ícono \"X\" en la esquina superior izquierda.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Durante el procesamiento, \"Sí, eliminar\" se muestra como indicador de carga y \"No, gracias\" queda deshabilitado.",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-020",
   "name": "Verificar que el modal muestra el estado de carga al confirmar el vaciado [Desktop] [Logueado]",
   "observation": "Causa: el caso necesita la red lenta de DevTools ('Slow 3G') para ver el estado de carga del modal; la simulación por la automatización dejó la página sin responder en 2 de 2 intentos (perfil Slow 3G completo y solo latencia), sin llegar a observar el botón. Acción: verificarlo a mano con DevTools o habilitar un modo de prueba con respuesta demorada.",
   "observed": "Causa: el caso necesita la red lenta de DevTools ('Slow 3G') para ver el estado de carga del modal; la simulación por la automatización dejó la página sin responder en 2 de 2 intentos (perfil Slow 3G completo y solo latencia), sin llegar a observar el botón. Acción: verificarlo a mano con DevTools o habilitar un modo de prueba con respuesta demorada.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}\n- DevTools abierto con throttling de red \"Slow 3G\"",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C37-D-020.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en el botón \"Vaciar carro\".\n4. El sistema despliega el modal de confirmación \"Vaciar el carro\".\n5. El usuario hace clic en \"Sí, eliminar\".\n6. El sistema reemplaza el botón \"Sí, eliminar\" por un indicador de carga y deshabilita \"No, gracias\" mientras procesa.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El carro queda sin ítems y muestra el estado vacío con \"¡Tu carro está vacío!\", su subtítulo y el botón \"Ir a comprar\".",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-021",
   "name": "Verificar que \"Sí, eliminar\" vacía el carro y muestra el estado de carro vacío [Desktop] [Logueado]",
   "observed": "'Sí, eliminar' vacía el carro y muestra '¡Tu carro está vacío!', 'Descubre todas las ofertas que tenemos para ti y llena tu despensa.' y 'Ir a comprar'.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C37-D-021.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en el botón \"Vaciar carro\".\n4. El sistema despliega el modal de confirmación \"Vaciar el carro\".\n5. El usuario hace clic en \"Sí, eliminar\".\n6. El sistema elimina todos los ítems y muestra imagen, título \"¡Tu carro está vacío!\", subtítulo \"Descubre todas las ofertas que tenemos para ti y llena tu despensa.\" y botón \"Ir a comprar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El modal se cierra y el carro conserva {SKU_VALID_001} y {SKU_UNITARIO} con sus cantidades.",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-022",
   "name": "Verificar que \"No, gracias\" cierra el modal sin cambios en el carro [Desktop] [Logueado]",
   "observed": "'No, gracias' cierra el modal y el carro conserva sus productos.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C37-D-022.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en el botón \"Vaciar carro\".\n4. El sistema despliega el modal de confirmación \"Vaciar el carro\".\n5. El usuario hace clic en \"No, gracias\".\n6. El sistema cierra el modal y mantiene el carrito sin cambios.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El modal se cierra y el carro conserva {SKU_VALID_001} y {SKU_UNITARIO} con sus cantidades.",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-023",
   "name": "Verificar que la \"X\" del modal lo cierra sin cambios en el carro [Desktop] [Logueado]",
   "observed": "La X cierra el modal y el carro conserva sus productos.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C37-D-023.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en el botón \"Vaciar carro\".\n4. El sistema despliega el modal de confirmación \"Vaciar el carro\".\n5. El usuario hace clic en el ícono \"X\" del modal.\n6. El sistema cierra el modal y mantiene el carrito sin cambios.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se muestra el toast \"Información importante\" con el mensaje de carnet y {SKU_ALCOHOL} permanece en el carrito.",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-024",
   "name": "Verificar que el carrito muestra el toast de restricción de alcohol [Desktop] [Logueado]",
   "observation": "Causa: token(s) sin fila en el Excel de data: {SKU_ALCOHOL}. Acción: cargar el dato en el Excel de data.",
   "observed": "Causa: token(s) sin fila en el Excel de data: {SKU_ALCOHOL}. Acción: cargar el dato en el Excel de data.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_ALCOHOL} (producto con restricción de alcohol)",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra un toast informativo con título \"Información importante\", el mensaje \"Deberás mostrar tu carnet al recibir compras de bebidas alcohólicas.\" e ícono \"X\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_ALCOHOL} = None",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El toast deja de mostrarse y {SKU_ALCOHOL} permanece en el carrito.",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-025",
   "name": "Verificar que la \"X\" cierra el toast de restricción de alcohol [Desktop] [Logueado]",
   "observation": "Causa: token(s) sin fila en el Excel de data: {SKU_ALCOHOL}. Acción: cargar el dato en el Excel de data.",
   "observed": "Causa: token(s) sin fila en el Excel de data: {SKU_ALCOHOL}. Acción: cargar el dato en el Excel de data.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_ALCOHOL} (producto con restricción de alcohol)",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra un toast informativo con título \"Información importante\", el mensaje \"Deberás mostrar tu carnet al recibir compras de bebidas alcohólicas.\" e ícono \"X\".\n3. El usuario hace clic en el ícono \"X\" del toast.\n4. El sistema cierra el toast.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_ALCOHOL} = None",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El toast desaparece solo a los 4 segundos de mostrarse.",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-026",
   "name": "Verificar que el toast de restricción de alcohol desaparece a los 4 segundos [Desktop] [Logueado]",
   "observation": "Causa: token(s) sin fila en el Excel de data: {SKU_ALCOHOL}. Acción: cargar el dato en el Excel de data.",
   "observed": "Causa: token(s) sin fila en el Excel de data: {SKU_ALCOHOL}. Acción: cargar el dato en el Excel de data.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_ALCOHOL} (producto con restricción de alcohol)",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra un toast informativo con título \"Información importante\", el mensaje \"Deberás mostrar tu carnet al recibir compras de bebidas alcohólicas.\" e ícono \"X\".\n3. El usuario espera 4 segundos sin interactuar con el toast.\n4. El sistema oculta el toast automáticamente.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_ALCOHOL} = None",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se muestra el estado de carro vacío con el mensaje que invita a agregar productos y el CTA \"Ir a Comprar\".",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-027",
   "name": "Verificar que el carrito sin ítems muestra el estado vacío con \"Ir a Comprar\" [Desktop] [Guest]",
   "observation": "Como invitado con el carro vacío se muestra '¡Tu carro está vacío!', el texto que invita a agregar productos y 'Ir a comprar'. En la primera corrida el carro de invitado mostró el error CRT-020 ('No pudimos mostrar tu carro'); en la re-ejecución cargó normal.",
   "observed": "Como invitado con el carro vacío se muestra '¡Tu carro está vacío!', el texto que invita a agregar productos y 'Ir a comprar'. En la primera corrida el carro de invitado mostró el error CRT-020 ('No pudimos mostrar tu carro'); en la re-ejecución cargó normal.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión de invitado (ventana de incógnito, sin iniciar sesión)\n- El carro está vacío",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C37-D-027.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el estado de carro vacío con un mensaje que invita a agregar productos y el CTA \"Ir a Comprar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El usuario queda en el Home ({BASE_URL}).",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-028",
   "name": "Verificar que \"Ir a Comprar\" del carro vacío redirige al Home [Desktop] [Guest]",
   "observation": "'Ir a comprar' del carro vacío lleva al Home. En la primera corrida el carro de invitado mostró el error CRT-020 ('No pudimos mostrar tu carro'); en la re-ejecución cargó normal.",
   "observed": "'Ir a comprar' del carro vacío lleva al Home. En la primera corrida el carro de invitado mostró el error CRT-020 ('No pudimos mostrar tu carro'); en la re-ejecución cargó normal.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión de invitado (ventana de incógnito, sin iniciar sesión)\n- El carro está vacío",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C37-D-028.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el estado de carro vacío con un mensaje que invita a agregar productos y el CTA \"Ir a Comprar\".\n3. El usuario hace clic en \"Ir a Comprar\".\n4. El sistema redirige a el Home ({BASE_URL}).",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se muestra el estado de error CRT-020 completo y no se muestran ítems ni totales del carro.",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-029",
   "name": "Verificar que el carrito muestra el estado de error CRT-020 sin ítems parciales [Desktop] [Logueado]",
   "observation": "Causa: token(s) en TBD en el Excel de data: {CART_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.",
   "observed": "Causa: token(s) en TBD en el Excel de data: {CART_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001}\n- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el estado de error con imagen, título \"No pudimos mostrar tu carro\", mensaje \"Tenemos problemas con cargar tus productos. Por favor, inténtalo otra vez.\", CTA \"Volver al inicio\", CTA \"Reintentar\" y \"Error: CRT-020\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_API_ENDPOINT} = None\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El usuario queda en el Home ({BASE_URL}).",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-030",
   "name": "Verificar que \"Volver al inicio\" del error de carga navega al Home [Desktop] [Logueado]",
   "observation": "Causa: token(s) en TBD en el Excel de data: {CART_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.",
   "observed": "Causa: token(s) en TBD en el Excel de data: {CART_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001}\n- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el estado de error con imagen, título \"No pudimos mostrar tu carro\", mensaje \"Tenemos problemas con cargar tus productos. Por favor, inténtalo otra vez.\", CTA \"Volver al inicio\", CTA \"Reintentar\" y \"Error: CRT-020\".\n3. El usuario hace clic en \"Volver al inicio\".\n4. El sistema navega a el Home ({BASE_URL}).",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_API_ENDPOINT} = None\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El carrito se carga correctamente y muestra {SKU_VALID_001}.",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-031",
   "name": "Verificar que \"Reintentar\" vuelve a cargar el contenido del carrito [Desktop] [Logueado]",
   "observation": "Causa: token(s) en TBD en el Excel de data: {CART_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.",
   "observed": "Causa: token(s) en TBD en el Excel de data: {CART_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001}\n- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el estado de error con imagen, título \"No pudimos mostrar tu carro\", mensaje \"Tenemos problemas con cargar tus productos. Por favor, inténtalo otra vez.\", CTA \"Volver al inicio\", CTA \"Reintentar\" y \"Error: CRT-020\".\n3. El usuario desactiva en DevTools el bloqueo de la request {CART_API_ENDPOINT}.\n4. El usuario hace clic en \"Reintentar\".\n5. El sistema vuelve a solicitar el contenido y carga el carrito con {SKU_VALID_001}.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_API_ENDPOINT} = None\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se muestra el toast de error CRT-076 y el carro conserva {SKU_VALID_001} y {SKU_UNITARIO} sin cambios.",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-032",
   "name": "Verificar que el error al vaciar muestra el toast CRT-076 y conserva los ítems [Desktop] [Logueado]",
   "observation": "Causa: token(s) en TBD en el Excel de data: {VACIAR_CARRO_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.",
   "observed": "Causa: token(s) en TBD en el Excel de data: {VACIAR_CARRO_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}\n- DevTools abierto con bloqueo de la request {VACIAR_CARRO_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en el botón \"Vaciar carro\".\n4. El sistema despliega el modal de confirmación \"Vaciar el carro\".\n5. El usuario hace clic en \"Sí, eliminar\".\n6. El sistema muestra el toast de error \"¡Lo sentimos! No pudimos vaciar tu carro, vuelve a intentarlo! [CRT-076]\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{VACIAR_CARRO_API_ENDPOINT} = None",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El toast sigue visible después de 10 segundos y solo se cierra con la \"X\".",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-033",
   "name": "Verificar que el toast de error CRT-076 permanece hasta cerrarlo con la X [Desktop] [Logueado]",
   "observation": "Causa: token(s) en TBD en el Excel de data: {VACIAR_CARRO_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.",
   "observed": "Causa: token(s) en TBD en el Excel de data: {VACIAR_CARRO_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}\n- DevTools abierto con bloqueo de la request {VACIAR_CARRO_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en el botón \"Vaciar carro\".\n4. El sistema despliega el modal de confirmación \"Vaciar el carro\".\n5. El usuario hace clic en \"Sí, eliminar\".\n6. El sistema muestra el toast de error \"¡Lo sentimos! No pudimos vaciar tu carro, vuelve a intentarlo! [CRT-076]\".\n7. El usuario espera 10 segundos sin interactuar con el toast.\n8. El sistema mantiene visible el toast de error.\n9. El usuario hace clic en el ícono \"X\" del toast.\n10. El sistema cierra el toast.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{VACIAR_CARRO_API_ENDPOINT} = None",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se muestra el toast con el faltante real y el CTA \"Continuar con la entrega\" deshabilitado con el label \"Mínimo de compra $Y\".",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-034",
   "name": "Verificar que el carrito bajo el mínimo muestra el faltante y deshabilita el CTA [Desktop] [Logueado]",
   "observed": "Con {SKU_VALID_001} x 1 se muestra el toast '¡Solo te faltan $X para ir a pagar!' con X = 20.000 − subtotal y el CTA deshabilitado con el label 'Mínimo de compra $20.000'.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El método de entrega activo es Despacho a domicilio\n- El carro contiene {SKU_VALID_001} x 1 y el subtotal es menor a {MONTO_MINIMO_COMPRA}",
   "screenshots": [
    {
     "caption": "Paso 2 — toast de monto minimo y cta",
     "file": "TC-B2C37-D-034-p02-toast-de-monto-minimo-y-cta.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito, muestra el toast \"¡Solo te faltan $X para ir a pagar!\" con X = {MONTO_MINIMO_COMPRA} − subtotal y el botón \"Continuar con la entrega\" deshabilitado con el label \"Mínimo de compra ${MONTO_MINIMO_COMPRA}\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El toast muestra el nuevo faltante: {MONTO_MINIMO_COMPRA} − subtotal con 2 unidades de {SKU_VALID_001}.",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-035",
   "name": "Verificar que el monto faltante del toast se actualiza al cambiar la cantidad [Desktop] [Logueado]",
   "observed": "Al sumar una unidad, el toast actualiza el faltante a 20.000 − nuevo subtotal sin recargar.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El método de entrega activo es Despacho a domicilio\n- El carro contiene {SKU_VALID_001} x 1 y el subtotal es menor a {MONTO_MINIMO_COMPRA}\n- Con 2 unidades de {SKU_VALID_001} el subtotal sigue siendo menor a {MONTO_MINIMO_COMPRA}",
   "screenshots": [
    {
     "caption": "Paso 2 — toast con 1 unidad",
     "file": "TC-B2C37-D-035-p02-toast-con-1-unidad.png"
    },
    {
     "caption": "Paso 4 — toast con 2 unidades",
     "file": "TC-B2C37-D-035-p04-toast-con-2-unidades.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito, muestra el toast \"¡Solo te faltan $X para ir a pagar!\" con X = {MONTO_MINIMO_COMPRA} − subtotal y el botón \"Continuar con la entrega\" deshabilitado con el label \"Mínimo de compra ${MONTO_MINIMO_COMPRA}\".\n3. El usuario hace clic en una vez el control + de {SKU_VALID_001}.\n4. El sistema actualiza la cantidad y recalcula el monto del toast sin recargar la página.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El toast deja de mostrarse y el CTA \"Continuar con la entrega\" sigue deshabilitado.",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-036",
   "name": "Verificar que la X cierra el toast de monto mínimo [Desktop] [Logueado]",
   "observed": "La X ('Cerrar el aviso') cierra el toast y el CTA sigue deshabilitado.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El método de entrega activo es Despacho a domicilio\n- El carro contiene {SKU_VALID_001} x 1 y el subtotal es menor a {MONTO_MINIMO_COMPRA}",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C37-D-036.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito, muestra el toast \"¡Solo te faltan $X para ir a pagar!\" con X = {MONTO_MINIMO_COMPRA} − subtotal y el botón \"Continuar con la entrega\" deshabilitado con el label \"Mínimo de compra ${MONTO_MINIMO_COMPRA}\".\n3. El usuario hace clic en el ícono \"X\" del toast.\n4. El sistema cierra el toast.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El CTA \"Continuar con la entrega\" está habilitado y no se muestra el toast \"¡Solo te faltan $X para ir a pagar!\".",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-037",
   "name": "Verificar que el carrito sobre el mínimo con Retiro habilita \"Continuar con la entrega\" [Desktop] [Logueado]",
   "observed": "Con retiro en Unimarc Las Condes y {SKU_VALID_001} x 11, 'Continuar con la entrega' está habilitado y no aparece el toast de faltante. Al terminar se restauró el despacho a Calle Uno 23.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El método de entrega activo es Retiro en tienda en {TIENDA_RETIRO_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}",
   "screenshots": [
    {
     "caption": "Paso 2 — carro con retiro sobre el minimo",
     "file": "TC-B2C37-D-037-p02-carro-con-retiro-sobre-el-minimo.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito con el CTA \"Continuar con la entrega\" habilitado y sin el toast de monto faltante.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_RETIRO_001} = Unimarc Las Condes\n{UNIDADES_SOBRE_MINIMO} = 11",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Con {UNIDADES_SOBRE_MINIMO} unidades el toast desaparece y el CTA \"Continuar con la entrega\" queda habilitado.",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-038",
   "name": "Verificar que al alcanzar el mínimo se oculta el toast y se habilita el CTA en tiempo real [Desktop] [Logueado]",
   "observed": "Al sumar hasta 11 unidades el toast desaparece y 'Continuar con la entrega' queda habilitado en tiempo real.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El método de entrega activo es Despacho a domicilio\n- El carro contiene {SKU_VALID_001} x 1 y el subtotal es menor a {MONTO_MINIMO_COMPRA}",
   "screenshots": [
    {
     "caption": "Paso 4 — carro con 11 unidades",
     "file": "TC-B2C37-D-038-p04-carro-con-11-unidades.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito, muestra el toast \"¡Solo te faltan $X para ir a pagar!\" con X = {MONTO_MINIMO_COMPRA} − subtotal y el botón \"Continuar con la entrega\" deshabilitado con el label \"Mínimo de compra ${MONTO_MINIMO_COMPRA}\".\n3. El usuario hace clic en el control + de {SKU_VALID_001} hasta llegar a {UNIDADES_SOBRE_MINIMO} unidades.\n4. El sistema recalcula el subtotal, oculta el toast y habilita el CTA \"Continuar con la entrega\" sin recargar la página.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN\n{UNIDADES_SOBRE_MINIMO} = 11",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se muestra el banner \"Ahorra $X siendo Diamante · Prueba y disfruta 15 días gratis.\" con $X calculado sobre el carro y el CTA \"Lo quiero\".",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-039",
   "name": "Verificar que el carrito muestra el banner de membresía para cliente sin membresía previa [Desktop] [Logueado]",
   "observation": "Causa: la precondición pide el carro con productos con descuento de membresía ({SKU_OFERTA_MEMBRESIA}) y la fila no declara ese token. Acción: declarar {SKU_OFERTA_MEMBRESIA} en la fila.",
   "observed": "Causa: la precondición pide el carro con productos con descuento de membresía ({SKU_OFERTA_MEMBRESIA}) y la fila no declara ese token. Acción: declarar {SKU_OFERTA_MEMBRESIA} en la fila.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta {COMPRADOR_SIN_MEMBRESIA_USER} nunca tuvo membresía\n- El carro contiene {SKU_VALID_001}\n- El carrito contiene productos con descuentos membresía {SKU_OFERTA_MEMBRESIA}",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner \"Ahorra $X siendo Diamante · Prueba y disfruta 15 días gratis.\" con el CTA \"Lo quiero\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_SIN_MEMBRESIA_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_SIN_MEMBRESIA_USER} = daunuruco+comprador@avatar-global.com\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se abre el flujo de contratación de membresía definido en B2C-42.",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-040",
   "name": "Verificar que \"Lo quiero\" abre el flujo de contratación de membresía [Desktop] [Logueado]",
   "observation": "Causa: con {COMPRADOR_SIN_MEMBRESIA_USER} (daunuruco+comprador, la misma cuenta que {COMPRADOR_USER}) y {SKU_VALID_001} en el carro no aparece ningún banner de membresía, así que no hay 'Lo quiero' que tocar; no se puede comprobar que la cuenta 'nunca tuvo membresía'. Acción: declarar una cuenta que nunca haya tenido membresía.",
   "observed": "Causa: con {COMPRADOR_SIN_MEMBRESIA_USER} (daunuruco+comprador, la misma cuenta que {COMPRADOR_USER}) y {SKU_VALID_001} en el carro no aparece ningún banner de membresía, así que no hay 'Lo quiero' que tocar; no se puede comprobar que la cuenta 'nunca tuvo membresía'. Acción: declarar una cuenta que nunca haya tenido membresía.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta {COMPRADOR_SIN_MEMBRESIA_USER} nunca tuvo membresía\n- El carro contiene {SKU_VALID_001}",
   "screenshots": [
    {
     "caption": "Paso 2 — carro de la cuenta sin membresia",
     "file": "TC-B2C37-D-040-p02-carro-de-la-cuenta-sin-membresia.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner \"Ahorra $X siendo Diamante · Prueba y disfruta 15 días gratis.\" con el CTA \"Lo quiero\".\n3. El usuario hace clic en \"Lo quiero\".\n4. El sistema abre el flujo de contratación de membresía (B2C-42).",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_SIN_MEMBRESIA_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_SIN_MEMBRESIA_USER} = daunuruco+comprador@avatar-global.com\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se muestra el banner \"Ahorrarías $X siendo Diamante · Vuelve, te extrañamos.\" con $X calculado sobre el carro y el CTA \"Renovar\".",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-041",
   "name": "Verificar que el carrito muestra el banner de renovación para membresía expirada [Desktop] [Logueado]",
   "observation": "Causa: con {COMPRADOR_MEMBRESIA_EXPIRADA_USER} (daunuruco+segundo) y el carro con {SKU_VALID_001} y {SKU_OFERTA_MEMBRESIA} no aparece ningún banner de membresía ni 'Renovar'; no se puede comprobar que la cuenta tenga una membresía expirada. Acción: confirmar el estado de membresía de la cuenta o declarar otra con membresía expirada.",
   "observed": "Causa: con {COMPRADOR_MEMBRESIA_EXPIRADA_USER} (daunuruco+segundo) y el carro con {SKU_VALID_001} y {SKU_OFERTA_MEMBRESIA} no aparece ningún banner de membresía ni 'Renovar'; no se puede comprobar que la cuenta tenga una membresía expirada. Acción: confirmar el estado de membresía de la cuenta o declarar otra con membresía expirada.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER}\n- La cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER} tuvo membresía y ya no está vigente\n- El carro contiene {SKU_VALID_001}\n- El carrito contiene productos con descuentos membresía {SKU_OFERTA_MEMBRESIA}",
   "screenshots": [
    {
     "caption": "Paso 2 — carro de la cuenta con membresia expirada",
     "file": "TC-B2C37-D-041-p02-carro-de-la-cuenta-con-membresia-expirada.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner \"Ahorrarías $X siendo Diamante · Vuelve, te extrañamos.\" con el CTA \"Renovar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_MEMBRESIA_EXPIRADA_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_MEMBRESIA_EXPIRADA_USER} = daunuruco+segundo@avatar-global.com\n{SKU_OFERTA_MEMBRESIA} = 000000000000178089-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se abre el flujo de renovación de membresía definido en B2C-42.",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-042",
   "name": "Verificar que \"Renovar\" abre el flujo de renovación de membresía [Desktop] [Logueado]",
   "observation": "Causa: con {COMPRADOR_MEMBRESIA_EXPIRADA_USER} (daunuruco+segundo) y el carro con {SKU_VALID_001} no aparece ningún banner de membresía ni 'Renovar'; no se puede comprobar que la cuenta tenga una membresía expirada. Acción: confirmar el estado de membresía de la cuenta o declarar otra con membresía expirada.",
   "observed": "Causa: con {COMPRADOR_MEMBRESIA_EXPIRADA_USER} (daunuruco+segundo) y el carro con {SKU_VALID_001} no aparece ningún banner de membresía ni 'Renovar'; no se puede comprobar que la cuenta tenga una membresía expirada. Acción: confirmar el estado de membresía de la cuenta o declarar otra con membresía expirada.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER}\n- La cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER} tuvo membresía y ya no está vigente\n- El carro contiene {SKU_VALID_001}",
   "screenshots": [
    {
     "caption": "Paso 2 — carro de la cuenta con membresia expirada",
     "file": "TC-B2C37-D-042-p02-carro-de-la-cuenta-con-membresia-expirada.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner \"Ahorrarías $X siendo Diamante · Vuelve, te extrañamos.\" con el CTA \"Renovar\".\n3. El usuario hace clic en \"Renovar\".\n4. El sistema abre el flujo de renovación de membresía (B2C-42).",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_MEMBRESIA_EXPIRADA_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_MEMBRESIA_EXPIRADA_USER} = daunuruco+segundo@avatar-global.com\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El carrito no muestra el banner de oferta de membresía.",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-043",
   "name": "Verificar que el carrito no muestra el banner de membresía al usuario invitado [Desktop] [Guest]",
   "observation": "Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.",
   "observed": "Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión de invitado (sin iniciar sesión)\n- El carro contiene {SKU_VALID_001}",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carro invitado.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Durante la carga se muestra el skeleton con la estructura del carrito de Desktop.",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-044",
   "name": "Verificar que el carrito muestra el skeleton de carga mientras procesa la solicitud [Desktop] [Logueado]",
   "observed": "Con la red lenta simulada se registra el skeleton mientras carga el carrito.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001}\n- DevTools abierto con throttling de red \"Slow 3G\"",
   "screenshots": [
    {
     "caption": "Paso 2 — skeleton de carga del carrito",
     "file": "TC-B2C37-D-044-p02-skeleton-de-carga-del-carrito.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C37-D-044.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra la pantalla de skeleton que replica la estructura del carrito mientras procesa la solicitud.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El skeleton se reemplaza por el carrito con {SKU_VALID_001} sin parpadeo.",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-045",
   "name": "Verificar que el skeleton se reemplaza por el contenido del carrito sin parpadeo [Desktop] [Logueado]",
   "observed": "El skeleton se reemplaza por el carrito con {SKU_VALID_001} y no quedan skeletons al terminar la carga.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001}\n- DevTools abierto con throttling de red \"Slow 3G\"",
   "screenshots": [
    {
     "caption": "Paso 2 — skeleton de carga del carrito",
     "file": "TC-B2C37-D-045-p02-skeleton-de-carga-del-carrito.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C37-D-045.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra la pantalla de skeleton que replica la estructura del carrito mientras procesa la solicitud.\n3. El usuario espera a que finalice la carga.\n4. El sistema reemplaza el skeleton por el contenido del carrito con una transición suave.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El skeleton se reemplaza por el estado de error del carrito (CRT-020).",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-046",
   "name": "Verificar que el skeleton se reemplaza por el estado de error si la carga falla [Desktop] [Logueado]",
   "observation": "Causa: token(s) en TBD en el Excel de data: {CART_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.",
   "observed": "Causa: token(s) en TBD en el Excel de data: {CART_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001}\n- DevTools abierto con throttling de red \"Slow 3G\"\n- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra la pantalla de skeleton que replica la estructura del carrito mientras procesa la solicitud.\n3. El usuario espera a que finalice la solicitud.\n4. El sistema reemplaza el skeleton por el estado de error \"No pudimos mostrar tu carro\" con \"Error: CRT-020\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_API_ENDPOINT} = None\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El carrito muestra header simplificado, acordeón de disponibles expandido con ícono ⋯ y la tarjeta de totales fija con \"Subtotal\" (sin \"Subtotal con Unipay\") y el CTA \"Continuar con la entrega\".",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-001",
   "name": "Verificar que el carrito muestra el layout con ítems disponibles y totales fijos sin Unipay [Mobile] [Logueado]",
   "observed": "Layout del carro con header simplificado ('Mi Carro' y volver), acordeón de disponibles expandido, tarjeta de totales con solo 'Subtotal' (sin 'Subtotal con Unipay'), CTA, footer simplificado e ícono ⋯. Bajo el mínimo el CTA se rotula 'Mínimo de compra $20.000'.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene solo {SKU_VALID_001} (disponible y sin descuento Unipay)",
   "screenshots": [
    {
     "caption": "Paso 2 — carrito con un item disponible",
     "file": "TC-B2C37-M-001-p02-carrito-con-un-item-disponible.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C37-M-001.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el header simplificado \"< Mi carrito\", el acordeón de ítems disponibles expandido (logo Unimarc + número de ítems + \"productos\" + ícono de menú ⋯) con la lista de productos.\n3. El usuario revisa la parte inferior de la pantalla.\n4. El sistema muestra la tarjeta de totales fija solo con \"Subtotal\", el CTA \"Continuar con la entrega\" y el footer simplificado.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "La tarjeta de totales muestra \"Subtotal\" y \"Subtotal con Unipay\", con un monto de \"Subtotal con Unipay\" menor al \"Subtotal\".",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-002",
   "name": "Verificar que la tarjeta de totales muestra \"Subtotal con Unipay\" con descuento Unipay [Mobile] [Logueado]",
   "observation": "Causa: {SKU_UNIPAY_001} (000000000000661945-UN, Lavaloza Quix) no tiene precio Unipay vigente: la PDP y el carro muestran solo $4.750 y no aparece 'Subtotal con Unipay'. Acción: declarar un SKU con promo Unipay vigente.",
   "observed": "Causa: {SKU_UNIPAY_001} (000000000000661945-UN, Lavaloza Quix) no tiene precio Unipay vigente: la PDP y el carro muestran solo $4.750 y no aparece 'Subtotal con Unipay'. Acción: declarar un SKU con promo Unipay vigente.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_UNIPAY_001} (producto con descuento Unipay)",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra en la tarjeta de totales las líneas \"Subtotal\" y \"Subtotal con Unipay\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_UNIPAY_001} = 000000000000661945-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El menú ⋯ muestra \"Guardar como lista\" + ícono y \"Vaciar carro\" + ícono.",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-003",
   "name": "Verificar que el menú ⋯ muestra \"Guardar como lista\" y \"Vaciar carro\" [Mobile] [Logueado]",
   "observed": "El menú ⋯ ('Más opciones') muestra 'Guardar como lista' y 'Vaciar carro', cada uno con su ícono.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001}",
   "screenshots": [
    {
     "caption": "Paso 4 — menu abierto",
     "file": "TC-B2C37-M-003-p04-menu-abierto.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C37-M-003.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca el menú de tres puntos (⋯).\n4. El sistema despliega las opciones \"Guardar como lista\" y \"Vaciar carro\", cada una con su ícono.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El menú ⋯ muestra \"Vaciar carro\" + ícono y no muestra \"Guardar como lista\".",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-004",
   "name": "Verificar que el menú ⋯ muestra solo \"Vaciar carro\" al usuario invitado [Mobile] [Guest]",
   "observation": "Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.",
   "observed": "Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión de invitado (sin iniciar sesión)\n- El carro contiene {SKU_VALID_001}",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca el menú de tres puntos (⋯).\n4. El sistema despliega el menú con la opción \"Vaciar carro\" + ícono.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El usuario queda en el paso Datos de entrega del checkout.",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-005",
   "name": "Verificar que \"Continuar con la entrega\" avanza al paso Datos de entrega [Mobile] [Logueado]",
   "observed": "Con {SKU_VALID_001} x 11 el CTA 'Continuar con la entrega' está habilitado y lleva a Datos de entrega (/checkout/entrega).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO}\n- El subtotal del carro es mayor o igual a {MONTO_MINIMO_COMPRA} y hay un método de entrega activo",
   "screenshots": [
    {
     "caption": "Paso 2 — carro sobre el minimo",
     "file": "TC-B2C37-M-005-p02-carro-sobre-el-minimo.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C37-M-005.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito con el CTA \"Continuar con la entrega\" habilitado.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema navega al paso Datos de entrega del checkout.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN\n{UNIDADES_SOBRE_MINIMO} = 11",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se inicia el flujo de \"Guardar como lista\" definido en B2C-54.",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-006",
   "name": "Verificar que \"Guardar como lista\" del menú ⋯ inicia el flujo de guardado de lista [Mobile] [Logueado]",
   "observed": "'Guardar como lista' del menú ⋯ abre el flujo 'Agregar como lista' (Crear nueva lista / listas existentes / Confirmar).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001}",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C37-M-006.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca el menú de tres puntos (⋯).\n4. El sistema despliega las opciones \"Guardar como lista\" y \"Vaciar carro\".\n5. El usuario toca \"Guardar como lista\".\n6. El sistema inicia el flujo de guardar como lista (B2C-54).",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El acordeón de disponibles se muestra colapsado con carrusel de miniaturas y el de no disponibles expandido con la lista completa de ítems no disponibles.",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-007",
   "name": "Verificar que el carrito muestra disponibles colapsados y no disponibles expandidos [Mobile] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.",
   "observed": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el acordeón de ítems disponibles colapsado (logo Unimarc + número de ítems + \"productos\" + chevron ↓ + ícono de menú ⋯ y el botón \"Mostrar más\") con el carrusel de miniaturas de 60×60 px, y el acordeón de ítems no disponibles expandido (ícono de carrito tachado + \"Productos no disponibles\" + \"N productos\" + chevron ↓ y el botón \"Mostrar más\") con la lista completa de ítems no disponibles.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_NO_DISPONIBLE} = 000000000400254005-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_SIN_STOCK} = Unimarc Los leones",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El carrusel muestra un tile \"+N\" en gris donde N es la cantidad de ítems disponibles que no se muestran como miniatura.",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-008",
   "name": "Verificar que el carrusel de disponibles muestra el tile \"+N\" con los ítems restantes [Mobile] [Logueado]",
   "observation": "Causa: token(s) sin fila en el Excel de data: {SKUS_CARRUSEL}. Acción: cargar el dato en el Excel de data.",
   "observed": "Causa: token(s) sin fila en el Excel de data: {SKUS_CARRUSEL}. Acción: cargar el dato en el Excel de data.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKUS_CARRUSEL} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito con el acordeón de disponibles colapsado y muestra en el carrusel las miniaturas que caben y un tile \"+N\" en gris.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKUS_CARRUSEL} = None\n{SKU_NO_DISPONIBLE} = 000000000400254005-UN\n{TIENDA_SIN_STOCK} = Unimarc Los leones",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "La sección de ítems disponibles queda expandida: el botón cambia a \"Mostrar menos\", el carrusel de miniaturas se oculta y se muestra la lista completa de ítems.",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-010",
   "name": "Verificar que una sección colapsada se expande al tocar \"Mostrar más\" [Mobile] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.",
   "observed": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.\n3. El usuario toca el botón \"Mostrar más\" del acordeón de ítems disponibles.\n4. El sistema expande la sección: el botón cambia a \"Mostrar menos\", el carrusel de miniaturas se oculta y se muestra la lista completa de ítems.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_NO_DISPONIBLE} = 000000000400254005-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_SIN_STOCK} = Unimarc Los leones",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "La sección queda colapsada: el botón cambia a \"Mostrar más\", la lista de ítems se oculta y se muestra el carrusel de miniaturas.",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-011",
   "name": "Verificar que una sección expandida se colapsa al tocar \"Mostrar menos\" [Mobile] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.",
   "observed": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.\n3. El usuario toca el botón \"Mostrar más\" del acordeón de ítems disponibles.\n4. El sistema expande la sección: el botón cambia a \"Mostrar menos\", el carrusel de miniaturas se oculta y se muestra la lista completa de ítems.\n5. El usuario toca el botón \"Mostrar menos\" del acordeón de ítems disponibles.\n6. El sistema colapsa la sección: el botón cambia a \"Mostrar más\", la lista de ítems se oculta y se muestra el carrusel de miniaturas.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_NO_DISPONIBLE} = 000000000400254005-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_SIN_STOCK} = Unimarc Los leones",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Cada sección cambia de estado sin modificar el estado de la otra (disponibles expandida y no disponibles colapsada al final).",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-012",
   "name": "Verificar que las secciones disponibles y no disponibles cambian de estado de forma independiente [Mobile] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.",
   "observed": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.\n3. El usuario toca el botón \"Mostrar más\" del acordeón de ítems disponibles.\n4. El sistema expande la sección de ítems disponibles y mantiene expandida la sección de no disponibles.\n5. El usuario toca el botón \"Mostrar menos\" del acordeón de productos no disponibles.\n6. El sistema colapsa la sección de no disponibles y mantiene expandida la sección de ítems disponibles.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_NO_DISPONIBLE} = 000000000400254005-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_SIN_STOCK} = Unimarc Los leones",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Tras recargar o reingresar, el carrito vuelve al estado inicial: disponibles colapsado y no disponibles expandido.",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-013",
   "name": "Verificar que el estado de los acordeones vuelve al inicial al recargar el carrito [Mobile] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.",
   "observed": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.\n3. El usuario toca el botón \"Mostrar más\" del acordeón de ítems disponibles.\n4. El sistema expande la sección de ítems disponibles.\n5. El usuario recarga la página.\n6. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_NO_DISPONIBLE} = 000000000400254005-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_SIN_STOCK} = Unimarc Los leones",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Cada ítem disponible muestra imagen, nombre, precio unitario, precio final, cantidad actual, controles +/− y acción de eliminar.",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-014",
   "name": "Verificar que cada ítem disponible muestra imagen, nombre, precios, cantidad y controles [Mobile] [Logueado]",
   "observed": "El ítem muestra imagen, 'Marca | Nombre', precio unitario '$2.490 c/u', cantidad '2 un.', controles + y − y la acción de eliminar. Sin descuento, el precio final coincide con el unitario.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene solo {SKU_VALID_001} (disponible)",
   "screenshots": [
    {
     "caption": "Paso 2 — item disponible",
     "file": "TC-B2C37-M-014-p02-item-disponible.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C37-M-014.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito con el acordeón de disponibles expandido y muestra por cada ítem: imagen, nombre, precio unitario, precio final (con descuentos), cantidad actual, controles +/− y acción de eliminar.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "La lista de ítems disponibles muestra primero {SKU_VALID_001}, luego {SKU_PESABLE} y al final {SKU_UNITARIO}.",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-015",
   "name": "Verificar que los ítems disponibles se ordenan del agregado más reciente al más antiguo [Mobile] [Logueado]",
   "observation": "Esperado: los ítems se listan del agregado más reciente al más antiguo ({SKU_VALID_001}, {SKU_PESABLE}, {SKU_UNITARIO}). Obtenido: tras agregar en orden Lavalozas Quix → Mangos granel → Albóndigas Super Pollo, el carro los lista Lavalozas Quix, Mangos granel, Albóndigas: del más antiguo al más reciente. tests/B2C-37.spec.ts.",
   "observed": "Esperado: los ítems se listan del agregado más reciente al más antiguo ({SKU_VALID_001}, {SKU_PESABLE}, {SKU_UNITARIO}). Obtenido: tras agregar en orden Lavalozas Quix → Mangos granel → Albóndigas Super Pollo, el carro los lista Lavalozas Quix, Mangos granel, Albóndigas: del más antiguo al más reciente. tests/B2C-37.spec.ts.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: PDP\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro está vacío",
   "screenshots": [
    {
     "caption": "Paso 6 — orden de los items",
     "file": "TC-B2C37-M-015-p06-orden-de-los-items.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a la PDP de {SKU_UNITARIO} y lo agrega al carro.\n2. El usuario ingresa a la PDP de {SKU_PESABLE} y lo agrega al carro.\n3. El usuario ingresa a la PDP de {SKU_VALID_001} y lo agrega al carro.\n4. El sistema agrega los tres productos al carro.\n5. El usuario ingresa a {CART_URL}.\n6. El sistema carga el carrito y lista los ítems disponibles en el orden {SKU_VALID_001}, {SKU_PESABLE}, {SKU_UNITARIO}.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_PESABLE} = 000000000000037972-KG\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Cada ítem no disponible muestra imagen con overlay, badge \"Pronto disponible\", nombre, \"Faltantes: N un\" y CTA \"Reemplazar\".",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-016",
   "name": "Verificar que cada ítem no disponible muestra overlay, badge, faltantes y \"Reemplazar\" [Mobile] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.",
   "observed": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra por cada ítem no disponible: imagen con overlay blanco semitransparente, badge \"Pronto disponible\" (fondo gris, texto gris), nombre, texto \"Faltantes: N un\" con la cantidad solicitada y CTA \"Reemplazar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_NO_DISPONIBLE} = 000000000400254005-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_SIN_STOCK} = Unimarc Los leones",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El ítem no disponible no tiene controles para modificar la cantidad y el Subtotal corresponde solo a {SKU_VALID_001}.",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-017",
   "name": "Verificar que los ítems no disponibles no permiten cambiar cantidad ni suman al subtotal [Mobile] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.",
   "observed": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito con el acordeón de no disponibles expandido.\n3. El usuario revisa un ítem no disponible y la tarjeta de totales.\n4. El sistema muestra el ítem no disponible sin controles +/− y el Subtotal calculado solo con los ítems disponibles.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_NO_DISPONIBLE} = 000000000400254005-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_SIN_STOCK} = Unimarc Los leones",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se inicia el flujo de productos similares definido en B2C-40 para {SKU_NO_DISPONIBLE}.",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-018",
   "name": "Verificar que \"Reemplazar\" inicia el flujo de productos similares [Mobile] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.",
   "observed": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma el carro con un ítem no disponible antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU con stock en la dirección activa y sin stock en {TIENDA_SIN_STOCK}.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito con el acordeón de no disponibles expandido.\n3. El usuario toca \"Reemplazar\" en el ítem {SKU_NO_DISPONIBLE}.\n4. El sistema inicia el flujo de búsqueda de productos similares (B2C-40).",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_NO_DISPONIBLE} = 000000000400254005-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_SIN_STOCK} = Unimarc Los leones",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El modal muestra imagen, título \"Vaciar el carro\", subtítulo \"¿Deseas eliminar todos los productos de tu carro?\", \"Sí, eliminar\", \"No, gracias\" e ícono \"X\".",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-019",
   "name": "Verificar que \"Vaciar carro\" abre el modal de confirmación con su contenido [Mobile] [Logueado]",
   "observed": "El modal 'Vaciar el carro' muestra imagen, título, subtítulo, 'Sí, eliminar', 'No, gracias' y la X.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}",
   "screenshots": [
    {
     "caption": "Paso 4 — modal vaciar el carro",
     "file": "TC-B2C37-M-019-p04-modal-vaciar-el-carro.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca el menú de tres puntos (⋯).\n4. El sistema despliega las opciones \"Guardar como lista\" y \"Vaciar carro\".\n5. El usuario toca \"Vaciar carro\".\n6. El sistema despliega un modal con imagen, título \"Vaciar el carro\", subtítulo \"¿Deseas eliminar todos los productos de tu carro?\", botones \"Sí, eliminar\" y \"No, gracias\" e ícono \"X\" en la esquina superior izquierda.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Durante el procesamiento, \"Sí, eliminar\" se muestra como indicador de carga y \"No, gracias\" queda deshabilitado.",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-020",
   "name": "Verificar que el modal muestra el estado de carga al confirmar el vaciado [Mobile] [Logueado]",
   "observation": "Causa: el caso necesita la red lenta de DevTools ('Slow 3G') para ver el estado de carga del modal; la simulación por la automatización dejó la página sin responder en 2 de 2 intentos (perfil Slow 3G completo y solo latencia), sin llegar a observar el botón. Acción: verificarlo a mano con DevTools o habilitar un modo de prueba con respuesta demorada.",
   "observed": "Causa: el caso necesita la red lenta de DevTools ('Slow 3G') para ver el estado de carga del modal; la simulación por la automatización dejó la página sin responder en 2 de 2 intentos (perfil Slow 3G completo y solo latencia), sin llegar a observar el botón. Acción: verificarlo a mano con DevTools o habilitar un modo de prueba con respuesta demorada.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}\n- DevTools abierto con throttling de red \"Slow 3G\"",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C37-M-020.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca el menú de tres puntos (⋯).\n4. El sistema despliega las opciones \"Guardar como lista\" y \"Vaciar carro\".\n5. El usuario toca \"Vaciar carro\".\n6. El sistema despliega el modal de confirmación \"Vaciar el carro\".\n7. El usuario toca \"Sí, eliminar\".\n8. El sistema reemplaza el botón \"Sí, eliminar\" por un indicador de carga y deshabilita \"No, gracias\" mientras procesa.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El carro queda sin ítems y muestra el estado vacío con \"¡Tu carro está vacío!\", su subtítulo y el botón \"Ir a comprar\".",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-021",
   "name": "Verificar que \"Sí, eliminar\" vacía el carro y muestra el estado de carro vacío [Mobile] [Logueado]",
   "observed": "'Sí, eliminar' vacía el carro y muestra '¡Tu carro está vacío!', 'Descubre todas las ofertas que tenemos para ti y llena tu despensa.' y 'Ir a comprar'.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C37-M-021.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca el menú de tres puntos (⋯).\n4. El sistema despliega las opciones \"Guardar como lista\" y \"Vaciar carro\".\n5. El usuario toca \"Vaciar carro\".\n6. El sistema despliega el modal de confirmación \"Vaciar el carro\".\n7. El usuario toca \"Sí, eliminar\".\n8. El sistema elimina todos los ítems y muestra imagen, título \"¡Tu carro está vacío!\", subtítulo \"Descubre todas las ofertas que tenemos para ti y llena tu despensa.\" y botón \"Ir a comprar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El modal se cierra y el carro conserva {SKU_VALID_001} y {SKU_UNITARIO} con sus cantidades.",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-022",
   "name": "Verificar que \"No, gracias\" cierra el modal sin cambios en el carro [Mobile] [Logueado]",
   "observed": "'No, gracias' cierra el modal y el carro conserva sus productos.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C37-M-022.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca el menú de tres puntos (⋯).\n4. El sistema despliega las opciones \"Guardar como lista\" y \"Vaciar carro\".\n5. El usuario toca \"Vaciar carro\".\n6. El sistema despliega el modal de confirmación \"Vaciar el carro\".\n7. El usuario toca \"No, gracias\".\n8. El sistema cierra el modal y mantiene el carrito sin cambios.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El modal se cierra y el carro conserva {SKU_VALID_001} y {SKU_UNITARIO} con sus cantidades.",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-023",
   "name": "Verificar que la \"X\" del modal lo cierra sin cambios en el carro [Mobile] [Logueado]",
   "observed": "La X cierra el modal y el carro conserva sus productos.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C37-M-023.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca el menú de tres puntos (⋯).\n4. El sistema despliega las opciones \"Guardar como lista\" y \"Vaciar carro\".\n5. El usuario toca \"Vaciar carro\".\n6. El sistema despliega el modal de confirmación \"Vaciar el carro\".\n7. El usuario toca el ícono \"X\" del modal.\n8. El sistema cierra el modal y mantiene el carrito sin cambios.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se muestra el toast \"Información importante\" con el mensaje de carnet y {SKU_ALCOHOL} permanece en el carrito.",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-024",
   "name": "Verificar que el carrito muestra el toast de restricción de alcohol [Mobile] [Logueado]",
   "observation": "Causa: token(s) sin fila en el Excel de data: {SKU_ALCOHOL}. Acción: cargar el dato en el Excel de data.",
   "observed": "Causa: token(s) sin fila en el Excel de data: {SKU_ALCOHOL}. Acción: cargar el dato en el Excel de data.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_ALCOHOL} (producto con restricción de alcohol)",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra un toast informativo con título \"Información importante\", el mensaje \"Deberás mostrar tu carnet al recibir compras de bebidas alcohólicas.\" e ícono \"X\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_ALCOHOL} = None",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El toast deja de mostrarse y {SKU_ALCOHOL} permanece en el carrito.",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-025",
   "name": "Verificar que la \"X\" cierra el toast de restricción de alcohol [Mobile] [Logueado]",
   "observation": "Causa: token(s) sin fila en el Excel de data: {SKU_ALCOHOL}. Acción: cargar el dato en el Excel de data.",
   "observed": "Causa: token(s) sin fila en el Excel de data: {SKU_ALCOHOL}. Acción: cargar el dato en el Excel de data.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_ALCOHOL} (producto con restricción de alcohol)",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra un toast informativo con título \"Información importante\", el mensaje \"Deberás mostrar tu carnet al recibir compras de bebidas alcohólicas.\" e ícono \"X\".\n3. El usuario toca el ícono \"X\" del toast.\n4. El sistema cierra el toast.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_ALCOHOL} = None",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El toast desaparece solo a los 4 segundos de mostrarse.",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-026",
   "name": "Verificar que el toast de restricción de alcohol desaparece a los 4 segundos [Mobile] [Logueado]",
   "observation": "Causa: token(s) sin fila en el Excel de data: {SKU_ALCOHOL}. Acción: cargar el dato en el Excel de data.",
   "observed": "Causa: token(s) sin fila en el Excel de data: {SKU_ALCOHOL}. Acción: cargar el dato en el Excel de data.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_ALCOHOL} (producto con restricción de alcohol)",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra un toast informativo con título \"Información importante\", el mensaje \"Deberás mostrar tu carnet al recibir compras de bebidas alcohólicas.\" e ícono \"X\".\n3. El usuario espera 4 segundos sin interactuar con el toast.\n4. El sistema oculta el toast automáticamente.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_ALCOHOL} = None",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se muestra el estado de carro vacío con el mensaje que invita a agregar productos y el CTA \"Ir a Comprar\".",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-027",
   "name": "Verificar que el carrito sin ítems muestra el estado vacío con \"Ir a Comprar\" [Mobile] [Guest]",
   "observed": "Como invitado con el carro vacío se muestra '¡Tu carro está vacío!', el texto que invita a agregar productos y 'Ir a comprar'.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión de invitado (ventana de incógnito, sin iniciar sesión)\n- El carro está vacío",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C37-M-027.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el estado de carro vacío con un mensaje que invita a agregar productos y el CTA \"Ir a Comprar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El usuario queda en el Home ({BASE_URL}).",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-028",
   "name": "Verificar que \"Ir a Comprar\" del carro vacío redirige al Home [Mobile] [Guest]",
   "observed": "'Ir a comprar' del carro vacío lleva al Home.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión de invitado (ventana de incógnito, sin iniciar sesión)\n- El carro está vacío",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C37-M-028.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el estado de carro vacío con un mensaje que invita a agregar productos y el CTA \"Ir a Comprar\".\n3. El usuario toca \"Ir a Comprar\".\n4. El sistema redirige a el Home ({BASE_URL}).",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se muestra el estado de error CRT-020 completo y no se muestran ítems ni totales del carro.",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-029",
   "name": "Verificar que el carrito muestra el estado de error CRT-020 sin ítems parciales [Mobile] [Logueado]",
   "observation": "Causa: token(s) en TBD en el Excel de data: {CART_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.",
   "observed": "Causa: token(s) en TBD en el Excel de data: {CART_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001}\n- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el estado de error con imagen, título \"No pudimos mostrar tu carro\", mensaje \"Tenemos problemas con cargar tus productos. Por favor, inténtalo otra vez.\", CTA \"Volver al inicio\", CTA \"Reintentar\" y \"Error: CRT-020\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_API_ENDPOINT} = None\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El usuario queda en el Home ({BASE_URL}).",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-030",
   "name": "Verificar que \"Volver al inicio\" del error de carga navega al Home [Mobile] [Logueado]",
   "observation": "Causa: token(s) en TBD en el Excel de data: {CART_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.",
   "observed": "Causa: token(s) en TBD en el Excel de data: {CART_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001}\n- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el estado de error con imagen, título \"No pudimos mostrar tu carro\", mensaje \"Tenemos problemas con cargar tus productos. Por favor, inténtalo otra vez.\", CTA \"Volver al inicio\", CTA \"Reintentar\" y \"Error: CRT-020\".\n3. El usuario toca \"Volver al inicio\".\n4. El sistema navega a el Home ({BASE_URL}).",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_API_ENDPOINT} = None\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El carrito se carga correctamente y muestra {SKU_VALID_001}.",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-031",
   "name": "Verificar que \"Reintentar\" vuelve a cargar el contenido del carrito [Mobile] [Logueado]",
   "observation": "Causa: token(s) en TBD en el Excel de data: {CART_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.",
   "observed": "Causa: token(s) en TBD en el Excel de data: {CART_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001}\n- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el estado de error con imagen, título \"No pudimos mostrar tu carro\", mensaje \"Tenemos problemas con cargar tus productos. Por favor, inténtalo otra vez.\", CTA \"Volver al inicio\", CTA \"Reintentar\" y \"Error: CRT-020\".\n3. El usuario desactiva en DevTools el bloqueo de la request {CART_API_ENDPOINT}.\n4. El usuario toca \"Reintentar\".\n5. El sistema vuelve a solicitar el contenido y carga el carrito con {SKU_VALID_001}.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_API_ENDPOINT} = None\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se muestra el toast de error CRT-076 y el carro conserva {SKU_VALID_001} y {SKU_UNITARIO} sin cambios.",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-032",
   "name": "Verificar que el error al vaciar muestra el toast CRT-076 y conserva los ítems [Mobile] [Logueado]",
   "observation": "Causa: token(s) en TBD en el Excel de data: {VACIAR_CARRO_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.",
   "observed": "Causa: token(s) en TBD en el Excel de data: {VACIAR_CARRO_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}\n- DevTools abierto con bloqueo de la request {VACIAR_CARRO_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca el menú de tres puntos (⋯).\n4. El sistema despliega las opciones \"Guardar como lista\" y \"Vaciar carro\".\n5. El usuario toca \"Vaciar carro\".\n6. El sistema despliega el modal de confirmación \"Vaciar el carro\".\n7. El usuario toca \"Sí, eliminar\".\n8. El sistema muestra el toast de error \"¡Lo sentimos! No pudimos vaciar tu carro, vuelve a intentarlo! [CRT-076]\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{VACIAR_CARRO_API_ENDPOINT} = None",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El toast sigue visible después de 10 segundos y solo se cierra con la \"X\".",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-033",
   "name": "Verificar que el toast de error CRT-076 permanece hasta cerrarlo con la X [Mobile] [Logueado]",
   "observation": "Causa: token(s) en TBD en el Excel de data: {VACIAR_CARRO_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.",
   "observed": "Causa: token(s) en TBD en el Excel de data: {VACIAR_CARRO_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}\n- DevTools abierto con bloqueo de la request {VACIAR_CARRO_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca el menú de tres puntos (⋯).\n4. El sistema despliega las opciones \"Guardar como lista\" y \"Vaciar carro\".\n5. El usuario toca \"Vaciar carro\".\n6. El sistema despliega el modal de confirmación \"Vaciar el carro\".\n7. El usuario toca \"Sí, eliminar\".\n8. El sistema muestra el toast de error \"¡Lo sentimos! No pudimos vaciar tu carro, vuelve a intentarlo! [CRT-076]\".\n9. El usuario espera 10 segundos sin interactuar con el toast.\n10. El sistema mantiene visible el toast de error.\n11. El usuario toca el ícono \"X\" del toast.\n12. El sistema cierra el toast.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{VACIAR_CARRO_API_ENDPOINT} = None",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se muestra el toast con el faltante real y el CTA \"Continuar con la entrega\" deshabilitado con el label \"Mínimo de compra $Y\".",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-034",
   "name": "Verificar que el carrito bajo el mínimo muestra el faltante y deshabilita el CTA [Mobile] [Logueado]",
   "observed": "Con {SKU_VALID_001} x 1 se muestra el toast '¡Solo te faltan $X para ir a pagar!' con X = 20.000 − subtotal y el CTA deshabilitado con el label 'Mínimo de compra $20.000'.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El método de entrega activo es Despacho a domicilio\n- El carro contiene {SKU_VALID_001} x 1 y el subtotal es menor a {MONTO_MINIMO_COMPRA}",
   "screenshots": [
    {
     "caption": "Paso 2 — toast de monto minimo y cta",
     "file": "TC-B2C37-M-034-p02-toast-de-monto-minimo-y-cta.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito, muestra el toast \"¡Solo te faltan $X para ir a pagar!\" con X = {MONTO_MINIMO_COMPRA} − subtotal y el botón \"Continuar con la entrega\" deshabilitado con el label \"Mínimo de compra ${MONTO_MINIMO_COMPRA}\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El toast muestra el nuevo faltante: {MONTO_MINIMO_COMPRA} − subtotal con 2 unidades de {SKU_VALID_001}.",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-035",
   "name": "Verificar que el monto faltante del toast se actualiza al cambiar la cantidad [Mobile] [Logueado]",
   "observed": "Al sumar una unidad, el toast actualiza el faltante a 20.000 − nuevo subtotal sin recargar.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El método de entrega activo es Despacho a domicilio\n- El carro contiene {SKU_VALID_001} x 1 y el subtotal es menor a {MONTO_MINIMO_COMPRA}\n- Con 2 unidades de {SKU_VALID_001} el subtotal sigue siendo menor a {MONTO_MINIMO_COMPRA}",
   "screenshots": [
    {
     "caption": "Paso 2 — toast con 1 unidad",
     "file": "TC-B2C37-M-035-p02-toast-con-1-unidad.png"
    },
    {
     "caption": "Paso 4 — toast con 2 unidades",
     "file": "TC-B2C37-M-035-p04-toast-con-2-unidades.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito, muestra el toast \"¡Solo te faltan $X para ir a pagar!\" con X = {MONTO_MINIMO_COMPRA} − subtotal y el botón \"Continuar con la entrega\" deshabilitado con el label \"Mínimo de compra ${MONTO_MINIMO_COMPRA}\".\n3. El usuario toca una vez el control + de {SKU_VALID_001}.\n4. El sistema actualiza la cantidad y recalcula el monto del toast sin recargar la página.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El toast deja de mostrarse y el CTA \"Continuar con la entrega\" sigue deshabilitado.",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-036",
   "name": "Verificar que la X cierra el toast de monto mínimo [Mobile] [Logueado]",
   "observed": "La X ('Cerrar el aviso') cierra el toast y el CTA sigue deshabilitado.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El método de entrega activo es Despacho a domicilio\n- El carro contiene {SKU_VALID_001} x 1 y el subtotal es menor a {MONTO_MINIMO_COMPRA}",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C37-M-036.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito, muestra el toast \"¡Solo te faltan $X para ir a pagar!\" con X = {MONTO_MINIMO_COMPRA} − subtotal y el botón \"Continuar con la entrega\" deshabilitado con el label \"Mínimo de compra ${MONTO_MINIMO_COMPRA}\".\n3. El usuario toca el ícono \"X\" del toast.\n4. El sistema cierra el toast.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El CTA \"Continuar con la entrega\" está habilitado y no se muestra el toast \"¡Solo te faltan $X para ir a pagar!\".",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-037",
   "name": "Verificar que el carrito sobre el mínimo con Retiro habilita \"Continuar con la entrega\" [Mobile] [Logueado]",
   "observed": "Con retiro en Unimarc Las Condes y {SKU_VALID_001} x 11, 'Continuar con la entrega' está habilitado y no aparece el toast de faltante. Al terminar se restauró el despacho a Calle Uno 23.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El método de entrega activo es Retiro en tienda en {TIENDA_RETIRO_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}",
   "screenshots": [
    {
     "caption": "Paso 2 — carro con retiro sobre el minimo",
     "file": "TC-B2C37-M-037-p02-carro-con-retiro-sobre-el-minimo.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito con el CTA \"Continuar con la entrega\" habilitado y sin el toast de monto faltante.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_RETIRO_001} = Unimarc Las Condes\n{UNIDADES_SOBRE_MINIMO} = 11",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Con {UNIDADES_SOBRE_MINIMO} unidades el toast desaparece y el CTA \"Continuar con la entrega\" queda habilitado.",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-038",
   "name": "Verificar que al alcanzar el mínimo se oculta el toast y se habilita el CTA en tiempo real [Mobile] [Logueado]",
   "observed": "Al sumar hasta 11 unidades el toast desaparece y 'Continuar con la entrega' queda habilitado en tiempo real.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El método de entrega activo es Despacho a domicilio\n- El carro contiene {SKU_VALID_001} x 1 y el subtotal es menor a {MONTO_MINIMO_COMPRA}",
   "screenshots": [
    {
     "caption": "Paso 4 — carro con 11 unidades",
     "file": "TC-B2C37-M-038-p04-carro-con-11-unidades.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito, muestra el toast \"¡Solo te faltan $X para ir a pagar!\" con X = {MONTO_MINIMO_COMPRA} − subtotal y el botón \"Continuar con la entrega\" deshabilitado con el label \"Mínimo de compra ${MONTO_MINIMO_COMPRA}\".\n3. El usuario toca el control + de {SKU_VALID_001} hasta llegar a {UNIDADES_SOBRE_MINIMO} unidades.\n4. El sistema recalcula el subtotal, oculta el toast y habilita el CTA \"Continuar con la entrega\" sin recargar la página.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN\n{UNIDADES_SOBRE_MINIMO} = 11",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se muestra el banner \"Ahorra $X siendo Diamante · Prueba y disfruta 15 días gratis.\" con $X calculado sobre el carro y el CTA \"Lo quiero\".",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-039",
   "name": "Verificar que el carrito muestra el banner de membresía para cliente sin membresía previa [Mobile] [Logueado]",
   "observation": "Causa: la precondición pide el carro con productos con descuento de membresía ({SKU_OFERTA_MEMBRESIA}) y la fila no declara ese token. Acción: declarar {SKU_OFERTA_MEMBRESIA} en la fila.",
   "observed": "Causa: la precondición pide el carro con productos con descuento de membresía ({SKU_OFERTA_MEMBRESIA}) y la fila no declara ese token. Acción: declarar {SKU_OFERTA_MEMBRESIA} en la fila.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta {COMPRADOR_SIN_MEMBRESIA_USER} nunca tuvo membresía\n- El carro contiene {SKU_VALID_001}\n- El carrito contiene productos con descuentos membresía {SKU_OFERTA_MEMBRESIA}",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner \"Ahorra $X siendo Diamante · Prueba y disfruta 15 días gratis.\" con el CTA \"Lo quiero\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_SIN_MEMBRESIA_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_SIN_MEMBRESIA_USER} = daunuruco+comprador@avatar-global.com\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se abre el flujo de contratación de membresía definido en B2C-42.",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-040",
   "name": "Verificar que \"Lo quiero\" abre el flujo de contratación de membresía [Mobile] [Logueado]",
   "observation": "Causa: con {COMPRADOR_SIN_MEMBRESIA_USER} (daunuruco+comprador, la misma cuenta que {COMPRADOR_USER}) y {SKU_VALID_001} en el carro no aparece ningún banner de membresía, así que no hay 'Lo quiero' que tocar; no se puede comprobar que la cuenta 'nunca tuvo membresía'. Acción: declarar una cuenta que nunca haya tenido membresía.",
   "observed": "Causa: con {COMPRADOR_SIN_MEMBRESIA_USER} (daunuruco+comprador, la misma cuenta que {COMPRADOR_USER}) y {SKU_VALID_001} en el carro no aparece ningún banner de membresía, así que no hay 'Lo quiero' que tocar; no se puede comprobar que la cuenta 'nunca tuvo membresía'. Acción: declarar una cuenta que nunca haya tenido membresía.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta {COMPRADOR_SIN_MEMBRESIA_USER} nunca tuvo membresía\n- El carro contiene {SKU_VALID_001}",
   "screenshots": [
    {
     "caption": "Paso 2 — carro de la cuenta sin membresia",
     "file": "TC-B2C37-M-040-p02-carro-de-la-cuenta-sin-membresia.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner \"Ahorra $X siendo Diamante · Prueba y disfruta 15 días gratis.\" con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema abre el flujo de contratación de membresía (B2C-42).",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_SIN_MEMBRESIA_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_SIN_MEMBRESIA_USER} = daunuruco+comprador@avatar-global.com\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se muestra el banner \"Ahorrarías $X siendo Diamante · Vuelve, te extrañamos.\" con $X calculado sobre el carro y el CTA \"Renovar\".",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-041",
   "name": "Verificar que el carrito muestra el banner de renovación para membresía expirada [Mobile] [Logueado]",
   "observation": "Causa: con {COMPRADOR_MEMBRESIA_EXPIRADA_USER} (daunuruco+segundo) y el carro con {SKU_VALID_001} y {SKU_OFERTA_MEMBRESIA} no aparece ningún banner de membresía ni 'Renovar'; no se puede comprobar que la cuenta tenga una membresía expirada. Acción: confirmar el estado de membresía de la cuenta o declarar otra con membresía expirada.",
   "observed": "Causa: con {COMPRADOR_MEMBRESIA_EXPIRADA_USER} (daunuruco+segundo) y el carro con {SKU_VALID_001} y {SKU_OFERTA_MEMBRESIA} no aparece ningún banner de membresía ni 'Renovar'; no se puede comprobar que la cuenta tenga una membresía expirada. Acción: confirmar el estado de membresía de la cuenta o declarar otra con membresía expirada.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER}\n- La cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER} tuvo membresía y ya no está vigente\n- El carro contiene {SKU_VALID_001}\n- El carrito contiene productos con descuentos membresía {SKU_OFERTA_MEMBRESIA}",
   "screenshots": [
    {
     "caption": "Paso 2 — carro de la cuenta con membresia expirada",
     "file": "TC-B2C37-M-041-p02-carro-de-la-cuenta-con-membresia-expirada.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner \"Ahorrarías $X siendo Diamante · Vuelve, te extrañamos.\" con el CTA \"Renovar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_MEMBRESIA_EXPIRADA_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_MEMBRESIA_EXPIRADA_USER} = daunuruco+segundo@avatar-global.com\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se abre el flujo de renovación de membresía definido en B2C-42.",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-042",
   "name": "Verificar que \"Renovar\" abre el flujo de renovación de membresía [Mobile] [Logueado]",
   "observation": "Causa: con {COMPRADOR_MEMBRESIA_EXPIRADA_USER} (daunuruco+segundo) y el carro con {SKU_VALID_001} no aparece ningún banner de membresía ni 'Renovar'; no se puede comprobar que la cuenta tenga una membresía expirada. Acción: confirmar el estado de membresía de la cuenta o declarar otra con membresía expirada.",
   "observed": "Causa: con {COMPRADOR_MEMBRESIA_EXPIRADA_USER} (daunuruco+segundo) y el carro con {SKU_VALID_001} no aparece ningún banner de membresía ni 'Renovar'; no se puede comprobar que la cuenta tenga una membresía expirada. Acción: confirmar el estado de membresía de la cuenta o declarar otra con membresía expirada.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER}\n- La cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER} tuvo membresía y ya no está vigente\n- El carro contiene {SKU_VALID_001}",
   "screenshots": [
    {
     "caption": "Paso 2 — carro de la cuenta con membresia expirada",
     "file": "TC-B2C37-M-042-p02-carro-de-la-cuenta-con-membresia-expirada.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner \"Ahorrarías $X siendo Diamante · Vuelve, te extrañamos.\" con el CTA \"Renovar\".\n3. El usuario toca \"Renovar\".\n4. El sistema abre el flujo de renovación de membresía (B2C-42).",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_MEMBRESIA_EXPIRADA_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_MEMBRESIA_EXPIRADA_USER} = daunuruco+segundo@avatar-global.com\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El carrito no muestra el banner de oferta de membresía.",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-043",
   "name": "Verificar que el carrito no muestra el banner de membresía al usuario invitado [Mobile] [Guest]",
   "observation": "Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.",
   "observed": "Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión de invitado (sin iniciar sesión)\n- El carro contiene {SKU_VALID_001}",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carro invitado.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Durante la carga se muestra el skeleton con la estructura del carrito de Mobile.",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-044",
   "name": "Verificar que el carrito muestra el skeleton de carga mientras procesa la solicitud [Mobile] [Logueado]",
   "observed": "Con la red lenta simulada se registra el skeleton mientras carga el carrito.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001}\n- DevTools abierto con throttling de red \"Slow 3G\"",
   "screenshots": [
    {
     "caption": "Paso 2 — skeleton de carga del carrito",
     "file": "TC-B2C37-M-044-p02-skeleton-de-carga-del-carrito.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C37-M-044.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra la pantalla de skeleton que replica la estructura del carrito mientras procesa la solicitud.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El skeleton se reemplaza por el carrito con {SKU_VALID_001} sin parpadeo.",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-045",
   "name": "Verificar que el skeleton se reemplaza por el contenido del carrito sin parpadeo [Mobile] [Logueado]",
   "observed": "El skeleton se reemplaza por el carrito con {SKU_VALID_001} y no quedan skeletons al terminar la carga.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001}\n- DevTools abierto con throttling de red \"Slow 3G\"",
   "screenshots": [
    {
     "caption": "Paso 2 — skeleton de carga del carrito",
     "file": "TC-B2C37-M-045-p02-skeleton-de-carga-del-carrito.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C37-M-045.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra la pantalla de skeleton que replica la estructura del carrito mientras procesa la solicitud.\n3. El usuario espera a que finalice la carga.\n4. El sistema reemplaza el skeleton por el contenido del carrito con una transición suave.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El skeleton se reemplaza por el estado de error del carrito (CRT-020).",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-046",
   "name": "Verificar que el skeleton se reemplaza por el estado de error si la carga falla [Mobile] [Logueado]",
   "observation": "Causa: token(s) en TBD en el Excel de data: {CART_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.",
   "observed": "Causa: token(s) en TBD en el Excel de data: {CART_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001}\n- DevTools abierto con throttling de red \"Slow 3G\"\n- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra la pantalla de skeleton que replica la estructura del carrito mientras procesa la solicitud.\n3. El usuario espera a que finalice la solicitud.\n4. El sistema reemplaza el skeleton por el estado de error \"No pudimos mostrar tu carro\" con \"Error: CRT-020\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_API_ENDPOINT} = None\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Durante todo el scroll la tarjeta de totales permanece fija mostrando \"Subtotal\", \"Subtotal con Unipay\" y \"Continuar con la entrega\".",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-047",
   "name": "Verificar que la tarjeta de totales queda fija al hacer scroll en la lista de productos [Mobile] [Logueado]",
   "observation": "Causa: {SKUS_CARRUSEL} no tiene fila en el Excel de data (y {SKU_UNIPAY_001} no tiene promo Unipay vigente). Acción: cargar {SKUS_CARRUSEL} y un SKU con Unipay vigente.",
   "observed": "Causa: {SKUS_CARRUSEL} no tiene fila en el Excel de data (y {SKU_UNIPAY_001} no tiene promo Unipay vigente). Acción: cargar {SKUS_CARRUSEL} y un SKU con Unipay vigente.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKUS_CARRUSEL} y {SKU_UNIPAY_001}, y la lista supera la altura visible de la pantalla",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito con la lista de productos y la tarjeta de totales en la parte inferior.\n3. El usuario hace scroll vertical hasta el final de la lista de productos.\n4. El sistema desplaza el área de productos y mantiene fija la tarjeta de totales con \"Subtotal\", \"Subtotal con Unipay\" y el CTA \"Continuar con la entrega\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKUS_CARRUSEL} = None\n{SKU_UNIPAY_001} = 000000000000661945-UN",
   "viewport": "390x844"
  }
 ]
}
-->


---

## Instrucciones al picker

| Campo | Valor |
|---|---|
| Suite | B2C-45 |
| Última actualización | 2026-10-20 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | chromium |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-45 Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

### Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 18 |
| Bloqueado Data | 10 |
| **Total** | **28** |

### Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-20 | 28 | TC-B2C45-D-001, TC-B2C45-D-002, TC-B2C45-D-003, TC-B2C45-D-004, TC-B2C45-D-005, TC-B2C45-D-006, TC-B2C45-D-007, TC-B2C45-D-008, TC-B2C45-D-009, TC-B2C45-D-010, TC-B2C45-D-011, TC-B2C45-D-012, TC-B2C45-D-013, TC-B2C45-D-014, TC-B2C45-M-001, TC-B2C45-M-002, TC-B2C45-M-003, TC-B2C45-M-004, TC-B2C45-M-005, TC-B2C45-M-006, TC-B2C45-M-007, TC-B2C45-M-008, TC-B2C45-M-009, TC-B2C45-M-010, TC-B2C45-M-011, TC-B2C45-M-012, TC-B2C45-M-013, TC-B2C45-M-014 |

### Detalle por caso de prueba

#### TC-B2C45-D-001 - Verificar que Agregar instrucciones abre el modal de nuevo comentario con sus elementos [Desktop] [Logueado]

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

#### TC-B2C45-D-002 - Verificar que al escribir el contador se actualiza y se habilita Agregar [Desktop] [Logueado]

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

#### TC-B2C45-D-003 - Verificar que el campo de instrucciones no admite más de 150 caracteres [Desktop] [Logueado]

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

#### TC-B2C45-D-004 - Verificar que confirmar la instrucción la guarda y el shelf muestra la nota [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
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
- {TEXTO_INSTRUCCION_001} tiene 30 caracteres o menos

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
6. El usuario hace clic en "Agregar".
7. El sistema muestra loading en el CTA mientras guarda.

**Resultado esperado**

El modal se cierra, el shelf muestra "Nota: {TEXTO_INSTRUCCION_001}" + "Editar instrucciones" y aparece el toast "Tu instrucción fue agregada con éxito" (4 s + X).

**Resultado obtenido**

Causa: la precondición dice que {TEXTO_INSTRUCCION_001} tiene 30 caracteres o menos y el valor cargado ('Primera intrucción de entrega válida') tiene 36: el shelf lo muestra truncado y nunca como 'Nota: {TEXTO_INSTRUCCION_001}' completo. La fila se contradice con su data. Acción: cargar un {TEXTO_INSTRUCCION_001} de 30 caracteres o menos.

**Observación**

Causa: la precondición dice que {TEXTO_INSTRUCCION_001} tiene 30 caracteres o menos y el valor cargado ('Primera intrucción de entrega válida') tiene 36: el shelf lo muestra truncado y nunca como 'Nota: {TEXTO_INSTRUCCION_001}' completo. La fila se contradice con su data. Acción: cargar un {TEXTO_INSTRUCCION_001} de 30 caracteres o menos.

---

#### TC-B2C45-D-005 - Verificar que una nota de más de 30 caracteres se trunca con puntos suspensivos en el shelf [Desktop] [Logueado]

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

#### TC-B2C45-D-006 - Verificar que un invitado puede agregar una instrucción al picker [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
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

Causa: el caso es de invitado con {SKU_VALID_001} en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.

**Observación**

Causa: el caso es de invitado con {SKU_VALID_001} en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.

---

#### TC-B2C45-D-007 - Verificar que Editar instrucciones abre el modal con el comentario precargado [Desktop] [Logueado]

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

#### TC-B2C45-D-008 - Verificar que confirmar la edición reemplaza el comentario y muestra el toast [Desktop] [Logueado]

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

#### TC-B2C45-D-009 - Verificar que Eliminar comentario muestra el modal de confirmación [Desktop] [Logueado]

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

#### TC-B2C45-D-010 - Verificar que Sí, eliminar quita la instrucción y el shelf vuelve a Agregar instrucciones [Desktop] [Logueado]

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

#### TC-B2C45-D-011 - Verificar que No, gracias vuelve al modal de edición sin eliminar el comentario [Desktop] [Logueado]

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

#### TC-B2C45-D-012 - Verificar que un error al guardar una instrucción nueva muestra CRT-026 [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
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
- DevTools abierto con bloqueo de la request {COMENTARIO_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMENTARIO_API_ENDPOINT} = None

{SKU_VALID_001} = 000000000000675191-UN

{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida

{USER_AUTH_001} = (cuenta de comprador)

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

Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data (necesario para forzar el error del servicio). Acción: cargar el endpoint.

**Observación**

Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data (necesario para forzar el error del servicio). Acción: cargar el endpoint.

---

#### TC-B2C45-D-013 - Verificar que un error al eliminar desde el modal de edición muestra CRT-027 [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
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
- DevTools abierto con bloqueo de la request {COMENTARIO_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMENTARIO_API_ENDPOINT} = None

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

**Resultado esperado**

El modal se cierra, aparece el toast "No pudimos eliminar tu comentario. Inténtalo nuevamente." (CRT-027) hasta cerrarlo con la X y la nota permanece en el shelf.

**Resultado obtenido**

Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data (necesario para forzar el error del servicio). Acción: cargar el endpoint.

**Observación**

Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data (necesario para forzar el error del servicio). Acción: cargar el endpoint.

---

#### TC-B2C45-D-014 - Verificar que un error al editar muestra CRT-075 y el comentario original se mantiene [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
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
- DevTools abierto con bloqueo de la request {COMENTARIO_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMENTARIO_API_ENDPOINT} = None

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

**Resultado esperado**

El modal se cierra, aparece el toast "No pudimos editar tu comentario. Inténtalo nuevamente." (CRT-075) hasta cerrarlo con la X y el shelf mantiene {TEXTO_INSTRUCCION_001}.

**Resultado obtenido**

Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data (necesario para forzar el error del servicio). Acción: cargar el endpoint.

**Observación**

Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data (necesario para forzar el error del servicio). Acción: cargar el endpoint.

---

#### TC-B2C45-M-001 - Verificar que Agregar instrucciones abre el modal de nuevo comentario con sus elementos [Mobile] [Logueado]

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

#### TC-B2C45-M-002 - Verificar que al escribir el contador se actualiza y se habilita Agregar [Mobile] [Logueado]

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

#### TC-B2C45-M-003 - Verificar que el campo de instrucciones no admite más de 150 caracteres [Mobile] [Logueado]

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

#### TC-B2C45-M-004 - Verificar que confirmar la instrucción la guarda y el shelf muestra la nota [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
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
- {TEXTO_INSTRUCCION_001} tiene 30 caracteres o menos

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
6. El usuario toca "Agregar".
7. El sistema muestra loading en el CTA mientras guarda.

**Resultado esperado**

El modal se cierra, el shelf muestra "Nota: {TEXTO_INSTRUCCION_001}" + "Editar instrucciones" y aparece el toast "Tu instrucción fue agregada con éxito" (4 s + X).

**Resultado obtenido**

Causa: la precondición dice que {TEXTO_INSTRUCCION_001} tiene 30 caracteres o menos y el valor cargado ('Primera intrucción de entrega válida') tiene 36: el shelf lo muestra truncado y nunca como 'Nota: {TEXTO_INSTRUCCION_001}' completo. La fila se contradice con su data. Acción: cargar un {TEXTO_INSTRUCCION_001} de 30 caracteres o menos.

**Observación**

Causa: la precondición dice que {TEXTO_INSTRUCCION_001} tiene 30 caracteres o menos y el valor cargado ('Primera intrucción de entrega válida') tiene 36: el shelf lo muestra truncado y nunca como 'Nota: {TEXTO_INSTRUCCION_001}' completo. La fila se contradice con su data. Acción: cargar un {TEXTO_INSTRUCCION_001} de 30 caracteres o menos.

---

#### TC-B2C45-M-005 - Verificar que una nota de más de 30 caracteres se trunca con puntos suspensivos en el shelf [Mobile] [Logueado]

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

#### TC-B2C45-M-006 - Verificar que un invitado puede agregar una instrucción al picker [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
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

Causa: el caso es de invitado con {SKU_VALID_001} en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.

**Observación**

Causa: el caso es de invitado con {SKU_VALID_001} en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.

---

#### TC-B2C45-M-007 - Verificar que Editar instrucciones abre el modal con el comentario precargado [Mobile] [Logueado]

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

#### TC-B2C45-M-008 - Verificar que confirmar la edición reemplaza el comentario y muestra el toast [Mobile] [Logueado]

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

#### TC-B2C45-M-009 - Verificar que Eliminar comentario muestra el modal de confirmación [Mobile] [Logueado]

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

#### TC-B2C45-M-010 - Verificar que Sí, eliminar quita la instrucción y el shelf vuelve a Agregar instrucciones [Mobile] [Logueado]

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

#### TC-B2C45-M-011 - Verificar que No, gracias vuelve al modal de edición sin eliminar el comentario [Mobile] [Logueado]

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

#### TC-B2C45-M-012 - Verificar que un error al guardar una instrucción nueva muestra CRT-026 [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
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
- DevTools abierto con bloqueo de la request {COMENTARIO_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMENTARIO_API_ENDPOINT} = None

{SKU_VALID_001} = 000000000000675191-UN

{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida

{USER_AUTH_001} = (cuenta de comprador)

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

Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data (necesario para forzar el error del servicio). Acción: cargar el endpoint.

**Observación**

Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data (necesario para forzar el error del servicio). Acción: cargar el endpoint.

---

#### TC-B2C45-M-013 - Verificar que un error al eliminar desde el modal de edición muestra CRT-027 [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
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
- DevTools abierto con bloqueo de la request {COMENTARIO_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMENTARIO_API_ENDPOINT} = None

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

**Resultado esperado**

El modal se cierra, aparece el toast "No pudimos eliminar tu comentario. Inténtalo nuevamente." (CRT-027) hasta cerrarlo con la X y la nota permanece en el shelf.

**Resultado obtenido**

Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data (necesario para forzar el error del servicio). Acción: cargar el endpoint.

**Observación**

Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data (necesario para forzar el error del servicio). Acción: cargar el endpoint.

---

#### TC-B2C45-M-014 - Verificar que un error al editar muestra CRT-075 y el comentario original se mantiene [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
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
- DevTools abierto con bloqueo de la request {COMENTARIO_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMENTARIO_API_ENDPOINT} = None

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

**Resultado esperado**

El modal se cierra, aparece el toast "No pudimos editar tu comentario. Inténtalo nuevamente." (CRT-075) hasta cerrarlo con la X y el shelf mantiene {TEXTO_INSTRUCCION_001}.

**Resultado obtenido**

Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data (necesario para forzar el error del servicio). Acción: cargar el endpoint.

**Observación**

Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data (necesario para forzar el error del servicio). Acción: cargar el endpoint.

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
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-45 Test Cases.xlsx",
  "title": "Instrucciones al picker",
  "updated_at": "2026-10-20"
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
   "executed_at": "2026-10-20",
   "expected": "El modal se cierra, el shelf muestra \"Nota: {TEXTO_INSTRUCCION_001}\" + \"Editar instrucciones\" y aparece el toast \"Tu instrucción fue agregada con éxito\" (4 s + X).",
   "form_factor": "desktop",
   "id": "TC-B2C45-D-004",
   "name": "Verificar que confirmar la instrucción la guarda y el shelf muestra la nota [Desktop] [Logueado]",
   "observation": "Causa: la precondición dice que {TEXTO_INSTRUCCION_001} tiene 30 caracteres o menos y el valor cargado ('Primera intrucción de entrega válida') tiene 36: el shelf lo muestra truncado y nunca como 'Nota: {TEXTO_INSTRUCCION_001}' completo. La fila se contradice con su data. Acción: cargar un {TEXTO_INSTRUCCION_001} de 30 caracteres o menos.",
   "observed": "Causa: la precondición dice que {TEXTO_INSTRUCCION_001} tiene 30 caracteres o menos y el valor cargado ('Primera intrucción de entrega válida') tiene 36: el shelf lo muestra truncado y nunca como 'Nota: {TEXTO_INSTRUCCION_001}' completo. La fila se contradice con su data. Acción: cargar un {TEXTO_INSTRUCCION_001} de 30 caracteres o menos.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} sin instrucciones\n- {TEXTO_INSTRUCCION_001} tiene 30 caracteres o menos",
   "spec": "tests/B2C-45.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Agregar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal \"¿Te gustaría algo en especial?\".\n5. El usuario escribe {TEXTO_INSTRUCCION_001} en el campo \"Instrucciones\".\n6. El usuario hace clic en \"Agregar\".\n7. El sistema muestra loading en el CTA mientras guarda.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN\n{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida\n{USER_AUTH_001} = (cuenta de comprador)",
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
   "executed_at": "2026-10-20",
   "expected": "El comentario se guarda: el shelf muestra \"Nota: {TEXTO_INSTRUCCION_001}\" + \"Editar instrucciones\" y aparece el toast de confirmación.",
   "form_factor": "desktop",
   "id": "TC-B2C45-D-006",
   "name": "Verificar que un invitado puede agregar una instrucción al picker [Desktop] [Guest]",
   "observation": "Causa: el caso es de invitado con {SKU_VALID_001} en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.",
   "observed": "Causa: el caso es de invitado con {SKU_VALID_001} en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_VALID_001} sin instrucciones",
   "spec": "tests/B2C-45.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Agregar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal \"¿Te gustaría algo en especial?\".\n5. El usuario escribe {TEXTO_INSTRUCCION_001} en el campo \"Instrucciones\".\n6. El usuario hace clic en \"Agregar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN\n{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida",
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
   "executed_at": "2026-10-20",
   "expected": "El modal se cierra, aparece el toast \"No pudimos agregar tu comentario. Vuelve a intentarlo.\" (CRT-026) hasta cerrarlo con la X y el shelf mantiene \"Agregar instrucciones\".",
   "form_factor": "desktop",
   "id": "TC-B2C45-D-012",
   "name": "Verificar que un error al guardar una instrucción nueva muestra CRT-026 [Desktop] [Logueado]",
   "observation": "Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data (necesario para forzar el error del servicio). Acción: cargar el endpoint.",
   "observed": "Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data (necesario para forzar el error del servicio). Acción: cargar el endpoint.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} sin instrucciones\n- DevTools abierto con bloqueo de la request {COMENTARIO_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-45.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Agregar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal \"¿Te gustaría algo en especial?\".\n5. El usuario escribe {TEXTO_INSTRUCCION_001} en el campo \"Instrucciones\".\n6. El usuario hace clic en \"Agregar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMENTARIO_API_ENDPOINT} = None\n{SKU_VALID_001} = 000000000000675191-UN\n{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El modal se cierra, aparece el toast \"No pudimos eliminar tu comentario. Inténtalo nuevamente.\" (CRT-027) hasta cerrarlo con la X y la nota permanece en el shelf.",
   "form_factor": "desktop",
   "id": "TC-B2C45-D-013",
   "name": "Verificar que un error al eliminar desde el modal de edición muestra CRT-027 [Desktop] [Logueado]",
   "observation": "Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data (necesario para forzar el error del servicio). Acción: cargar el endpoint.",
   "observed": "Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data (necesario para forzar el error del servicio). Acción: cargar el endpoint.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} con la instrucción {TEXTO_INSTRUCCION_001} guardada\n- DevTools abierto con bloqueo de la request {COMENTARIO_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-45.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Editar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal de edición con el comentario precargado.\n5. El usuario hace clic en \"Eliminar comentario\".\n6. El sistema muestra el modal de confirmación \"Eliminar comentario\".\n7. El usuario hace clic en \"Sí, eliminar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMENTARIO_API_ENDPOINT} = None\n{SKU_VALID_001} = 000000000000675191-UN\n{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El modal se cierra, aparece el toast \"No pudimos editar tu comentario. Inténtalo nuevamente.\" (CRT-075) hasta cerrarlo con la X y el shelf mantiene {TEXTO_INSTRUCCION_001}.",
   "form_factor": "desktop",
   "id": "TC-B2C45-D-014",
   "name": "Verificar que un error al editar muestra CRT-075 y el comentario original se mantiene [Desktop] [Logueado]",
   "observation": "Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data (necesario para forzar el error del servicio). Acción: cargar el endpoint.",
   "observed": "Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data (necesario para forzar el error del servicio). Acción: cargar el endpoint.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} con la instrucción {TEXTO_INSTRUCCION_001} guardada\n- DevTools abierto con bloqueo de la request {COMENTARIO_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-45.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Editar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal de edición con el comentario precargado.\n5. El usuario reemplaza el texto por {TEXTO_INSTRUCCION_002}.\n6. El usuario hace clic en \"Confirmar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMENTARIO_API_ENDPOINT} = None\n{SKU_VALID_001} = 000000000000675191-UN\n{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida\n{TEXTO_INSTRUCCION_002} = Segunda instrucción: Entreguenlo con cuidado (es una sorpresa)\n{USER_AUTH_001} = (cuenta de comprador)",
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
   "executed_at": "2026-10-20",
   "expected": "El modal se cierra, el shelf muestra \"Nota: {TEXTO_INSTRUCCION_001}\" + \"Editar instrucciones\" y aparece el toast \"Tu instrucción fue agregada con éxito\" (4 s + X).",
   "form_factor": "mobile",
   "id": "TC-B2C45-M-004",
   "name": "Verificar que confirmar la instrucción la guarda y el shelf muestra la nota [Mobile] [Logueado]",
   "observation": "Causa: la precondición dice que {TEXTO_INSTRUCCION_001} tiene 30 caracteres o menos y el valor cargado ('Primera intrucción de entrega válida') tiene 36: el shelf lo muestra truncado y nunca como 'Nota: {TEXTO_INSTRUCCION_001}' completo. La fila se contradice con su data. Acción: cargar un {TEXTO_INSTRUCCION_001} de 30 caracteres o menos.",
   "observed": "Causa: la precondición dice que {TEXTO_INSTRUCCION_001} tiene 30 caracteres o menos y el valor cargado ('Primera intrucción de entrega válida') tiene 36: el shelf lo muestra truncado y nunca como 'Nota: {TEXTO_INSTRUCCION_001}' completo. La fila se contradice con su data. Acción: cargar un {TEXTO_INSTRUCCION_001} de 30 caracteres o menos.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} sin instrucciones\n- {TEXTO_INSTRUCCION_001} tiene 30 caracteres o menos",
   "spec": "tests/B2C-45.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Agregar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal \"¿Te gustaría algo en especial?\".\n5. El usuario escribe {TEXTO_INSTRUCCION_001} en el campo \"Instrucciones\".\n6. El usuario toca \"Agregar\".\n7. El sistema muestra loading en el CTA mientras guarda.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN\n{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida\n{USER_AUTH_001} = (cuenta de comprador)",
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
   "executed_at": "2026-10-20",
   "expected": "El comentario se guarda: el shelf muestra \"Nota: {TEXTO_INSTRUCCION_001}\" + \"Editar instrucciones\" y aparece el toast de confirmación.",
   "form_factor": "mobile",
   "id": "TC-B2C45-M-006",
   "name": "Verificar que un invitado puede agregar una instrucción al picker [Mobile] [Guest]",
   "observation": "Causa: el caso es de invitado con {SKU_VALID_001} en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.",
   "observed": "Causa: el caso es de invitado con {SKU_VALID_001} en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_VALID_001} sin instrucciones",
   "spec": "tests/B2C-45.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Agregar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal \"¿Te gustaría algo en especial?\".\n5. El usuario escribe {TEXTO_INSTRUCCION_001} en el campo \"Instrucciones\".\n6. El usuario toca \"Agregar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN\n{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida",
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
   "executed_at": "2026-10-20",
   "expected": "El modal se cierra, aparece el toast \"No pudimos agregar tu comentario. Vuelve a intentarlo.\" (CRT-026) hasta cerrarlo con la X y el shelf mantiene \"Agregar instrucciones\".",
   "form_factor": "mobile",
   "id": "TC-B2C45-M-012",
   "name": "Verificar que un error al guardar una instrucción nueva muestra CRT-026 [Mobile] [Logueado]",
   "observation": "Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data (necesario para forzar el error del servicio). Acción: cargar el endpoint.",
   "observed": "Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data (necesario para forzar el error del servicio). Acción: cargar el endpoint.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} sin instrucciones\n- DevTools abierto con bloqueo de la request {COMENTARIO_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-45.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Agregar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal \"¿Te gustaría algo en especial?\".\n5. El usuario escribe {TEXTO_INSTRUCCION_001} en el campo \"Instrucciones\".\n6. El usuario toca \"Agregar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMENTARIO_API_ENDPOINT} = None\n{SKU_VALID_001} = 000000000000675191-UN\n{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El modal se cierra, aparece el toast \"No pudimos eliminar tu comentario. Inténtalo nuevamente.\" (CRT-027) hasta cerrarlo con la X y la nota permanece en el shelf.",
   "form_factor": "mobile",
   "id": "TC-B2C45-M-013",
   "name": "Verificar que un error al eliminar desde el modal de edición muestra CRT-027 [Mobile] [Logueado]",
   "observation": "Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data (necesario para forzar el error del servicio). Acción: cargar el endpoint.",
   "observed": "Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data (necesario para forzar el error del servicio). Acción: cargar el endpoint.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} con la instrucción {TEXTO_INSTRUCCION_001} guardada\n- DevTools abierto con bloqueo de la request {COMENTARIO_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-45.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Editar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal de edición con el comentario precargado.\n5. El usuario toca \"Eliminar comentario\".\n6. El sistema muestra el modal de confirmación \"Eliminar comentario\".\n7. El usuario toca \"Sí, eliminar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMENTARIO_API_ENDPOINT} = None\n{SKU_VALID_001} = 000000000000675191-UN\n{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El modal se cierra, aparece el toast \"No pudimos editar tu comentario. Inténtalo nuevamente.\" (CRT-075) hasta cerrarlo con la X y el shelf mantiene {TEXTO_INSTRUCCION_001}.",
   "form_factor": "mobile",
   "id": "TC-B2C45-M-014",
   "name": "Verificar que un error al editar muestra CRT-075 y el comentario original se mantiene [Mobile] [Logueado]",
   "observation": "Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data (necesario para forzar el error del servicio). Acción: cargar el endpoint.",
   "observed": "Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data (necesario para forzar el error del servicio). Acción: cargar el endpoint.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} con la instrucción {TEXTO_INSTRUCCION_001} guardada\n- DevTools abierto con bloqueo de la request {COMENTARIO_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-45.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Editar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal de edición con el comentario precargado.\n5. El usuario reemplaza el texto por {TEXTO_INSTRUCCION_002}.\n6. El usuario toca \"Confirmar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMENTARIO_API_ENDPOINT} = None\n{SKU_VALID_001} = 000000000000675191-UN\n{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida\n{TEXTO_INSTRUCCION_002} = Segunda instrucción: Entreguenlo con cuidado (es una sorpresa)\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "390x844"
  }
 ]
}
-->


---

## Productos de vuelta en el carro («Están de vuelta»)

| Campo | Valor |
|---|---|
| Suite | B2C-47 |
| Última actualización | 2026-10-20 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | chromium |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-47 WEB Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

### Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado | 22 |
| Bloqueado Data | 10 |
| **Total** | **32** |

### Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-20 | 32 | TC-B2C47-D-001, TC-B2C47-D-002, TC-B2C47-D-003, TC-B2C47-D-004, TC-B2C47-D-005, TC-B2C47-D-006, TC-B2C47-D-007, TC-B2C47-D-008, TC-B2C47-D-009, TC-B2C47-D-010, TC-B2C47-D-011, TC-B2C47-D-012, TC-B2C47-D-013, TC-B2C47-D-014, TC-B2C47-D-015, TC-B2C47-D-016, TC-B2C47-M-001, TC-B2C47-M-002, TC-B2C47-M-003, TC-B2C47-M-004, TC-B2C47-M-005, TC-B2C47-M-006, TC-B2C47-M-007, TC-B2C47-M-008, TC-B2C47-M-009, TC-B2C47-M-010, TC-B2C47-M-011, TC-B2C47-M-012, TC-B2C47-M-013, TC-B2C47-M-014, TC-B2C47-M-015, TC-B2C47-M-016 |

### Detalle por caso de prueba

#### TC-B2C47-D-001 - Verificar que Entendido cierra el modal, muestra el toast y agrega los productos al carro [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-47.spec.ts |

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

{BM_ADMIN_PASSWORD} = (credencial)

{BM_ADMIN_USER} = (credencial)

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario hace clic en "Entendido".
4. El sistema cierra el modal y actualiza el carrito en tiempo real.

**Resultado esperado**

El modal se cierra, se muestra el toast con ícono ✓ y botón X "¡Tu carro ha sido actualizado!" y {SKU_UNITARIO} x 2 queda en la sección de disponibles.

**Resultado obtenido**

Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.

**Observación**

Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.

---

#### TC-B2C47-D-002 - Verificar que el toast de carro actualizado desaparece solo a los 4 segundos [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-47.spec.ts |

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

{BM_ADMIN_PASSWORD} = (credencial)

{BM_ADMIN_USER} = (credencial)

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario hace clic en "Entendido".
4. El sistema muestra el toast "¡Tu carro ha sido actualizado!".
5. El usuario espera sin interactuar.

**Resultado esperado**

El toast desaparece automáticamente transcurridos 4 segundos.

**Resultado obtenido**

Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.

**Observación**

Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.

---

#### TC-B2C47-D-003 - Verificar que el toast de carro actualizado se cierra con la X [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-47.spec.ts |

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

{BM_ADMIN_PASSWORD} = (credencial)

{BM_ADMIN_USER} = (credencial)

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario hace clic en "Entendido".
4. El sistema muestra el toast "¡Tu carro ha sido actualizado!".
5. El usuario hace clic en la X del toast antes de 4 segundos.

**Resultado esperado**

El toast se cierra inmediatamente.

**Resultado obtenido**

Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.

**Observación**

Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.

---

#### TC-B2C47-D-004 - Verificar que un unitario con stock suficiente pasa completo a disponibles sin aviso adicional [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-47.spec.ts |

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

{BM_ADMIN_PASSWORD} = (credencial)

{BM_ADMIN_USER} = (credencial)

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario hace clic en "Entendido".
4. El usuario revisa el carrito.

**Resultado esperado**

{SKU_UNITARIO} x 3 pasa completo a la sección de disponibles, no queda en no disponibles y no se muestra aviso adicional.

**Resultado obtenido**

Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.

**Observación**

Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.

---

#### TC-B2C47-D-005 - Verificar que un unitario con stock parcial deja la cantidad restante en No disponibles [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-47.spec.ts |

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

{BM_ADMIN_PASSWORD} = (credencial)

{BM_ADMIN_USER} = (credencial)

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario hace clic en "Entendido".
4. El usuario revisa las secciones de disponibles y no disponibles.

**Resultado esperado**

{SKU_UNITARIO} queda con 2 unidades en disponibles y 1 unidad en la sección No disponibles; no se muestra un mensaje adicional.

**Resultado obtenido**

Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.

**Observación**

Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.

---

#### TC-B2C47-D-006 - Verificar que un pesable repuesto se reincorpora con el multiplicador de medida [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-47.spec.ts |

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

{BM_ADMIN_PASSWORD} = (credencial)

{BM_ADMIN_USER} = (credencial)

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_PESABLE} = 000000000000037972-KG

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario revisa la unidad de medida de {SKU_PESABLE} en el modal.
4. El usuario hace clic en "Entendido".

**Resultado esperado**

El modal muestra la unidad de medida de {SKU_PESABLE} (kg) y el carrito lo reincorpora con la cantidad disponible aplicando el multiplicador de Janis.

**Resultado obtenido**

Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.

**Observación**

Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.

---

#### TC-B2C47-D-007 - Verificar que cerrar el modal con la X también agrega los productos y muestra el toast [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-47.spec.ts |

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

{BM_ADMIN_PASSWORD} = (credencial)

{BM_ADMIN_USER} = (credencial)

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario hace clic en la X del modal.
4. El sistema cierra el modal y actualiza el carrito.

**Resultado esperado**

Se muestra el toast con ícono ✓ y botón X "¡Tu carro ha sido actualizado!" y {SKU_UNITARIO} x 2 queda en la sección de disponibles.

**Resultado obtenido**

Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.

**Observación**

Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.

---

#### TC-B2C47-D-008 - Verificar que un invitado con productos repuestos los ve agregados al carro tras Entendido [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-47.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{BM_ADMIN_PASSWORD} = (credencial)

{BM_ADMIN_USER} = (credencial)

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View

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

Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar. Además el caso es de invitado con productos en el carro y la fila no declara una dirección (un invitado sin dirección no puede agregar).

**Observación**

Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar. Además el caso es de invitado con productos en el carro y la fila no declara una dirección (un invitado sin dirección no puede agregar).

---

#### TC-B2C47-D-009 - Verificar que un restock parcial deja 4 disponibles y 1 no disponible con totales recalculados [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-47.spec.ts |

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

{BM_ADMIN_PASSWORD} = (credencial)

{BM_ADMIN_USER} = (credencial)

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario hace clic en "Entendido".
4. El usuario revisa las secciones del carrito y el resumen de precios.

**Resultado esperado**

{SKU_UNITARIO} queda con 4 unidades en disponibles y 1 en no disponibles, y el resumen de precios y totales se recalcula.

**Resultado obtenido**

Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.

**Observación**

Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.

---

#### TC-B2C47-D-010 - Verificar que con un solo producto repuesto el modal se muestra en talla xs [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-47.spec.ts |

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

{BM_ADMIN_PASSWORD} = (credencial)

{BM_ADMIN_USER} = (credencial)

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario revisa el tamaño del modal.

**Resultado esperado**

El modal "Están de vuelta" se muestra en talla xs según Figma.

**Resultado obtenido**

Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.

**Observación**

Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.

---

#### TC-B2C47-D-011 - Verificar que con dos o más productos repuestos el modal se muestra en talla md [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-47.spec.ts |

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

{BM_ADMIN_PASSWORD} = (credencial)

{BM_ADMIN_USER} = (credencial)

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_PESABLE} = 000000000000037972-KG

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario revisa el tamaño del modal.

**Resultado esperado**

El modal "Están de vuelta" lista {SKU_UNITARIO} y {SKU_PESABLE} y se muestra en talla md según Figma.

**Resultado obtenido**

Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.

**Observación**

Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.

---

#### TC-B2C47-M-001 - Verificar que Entendido cierra el modal, muestra el toast y agrega los productos al carro [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-47.spec.ts |

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

{BM_ADMIN_PASSWORD} = (credencial)

{BM_ADMIN_USER} = (credencial)

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario toca "Entendido".
4. El sistema cierra el modal y actualiza el carrito en tiempo real.

**Resultado esperado**

El modal se cierra, se muestra el toast con ícono ✓ y botón X "¡Tu carro ha sido actualizado!" y {SKU_UNITARIO} x 2 queda en la sección de disponibles.

**Resultado obtenido**

Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.

**Observación**

Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.

---

#### TC-B2C47-M-002 - Verificar que el toast de carro actualizado desaparece solo a los 4 segundos [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-47.spec.ts |

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

{BM_ADMIN_PASSWORD} = (credencial)

{BM_ADMIN_USER} = (credencial)

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario toca "Entendido".
4. El sistema muestra el toast "¡Tu carro ha sido actualizado!".
5. El usuario espera sin interactuar.

**Resultado esperado**

El toast desaparece automáticamente transcurridos 4 segundos.

**Resultado obtenido**

Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.

**Observación**

Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.

---

#### TC-B2C47-M-003 - Verificar que el toast de carro actualizado se cierra con la X [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-47.spec.ts |

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

{BM_ADMIN_PASSWORD} = (credencial)

{BM_ADMIN_USER} = (credencial)

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario toca "Entendido".
4. El sistema muestra el toast "¡Tu carro ha sido actualizado!".
5. El usuario toca la X del toast antes de 4 segundos.

**Resultado esperado**

El toast se cierra inmediatamente.

**Resultado obtenido**

Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.

**Observación**

Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.

---

#### TC-B2C47-M-004 - Verificar que un unitario con stock suficiente pasa completo a disponibles sin aviso adicional [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-47.spec.ts |

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

{BM_ADMIN_PASSWORD} = (credencial)

{BM_ADMIN_USER} = (credencial)

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario toca "Entendido".
4. El usuario revisa el carrito.

**Resultado esperado**

{SKU_UNITARIO} x 3 pasa completo a la sección de disponibles, no queda en no disponibles y no se muestra aviso adicional.

**Resultado obtenido**

Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.

**Observación**

Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.

---

#### TC-B2C47-M-005 - Verificar que un unitario con stock parcial deja la cantidad restante en No disponibles [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-47.spec.ts |

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

{BM_ADMIN_PASSWORD} = (credencial)

{BM_ADMIN_USER} = (credencial)

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario toca "Entendido".
4. El usuario revisa las secciones de disponibles y no disponibles.

**Resultado esperado**

{SKU_UNITARIO} queda con 2 unidades en disponibles y 1 unidad en la sección No disponibles; no se muestra un mensaje adicional.

**Resultado obtenido**

Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.

**Observación**

Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.

---

#### TC-B2C47-M-006 - Verificar que un pesable repuesto se reincorpora con el multiplicador de medida [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-47.spec.ts |

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

{BM_ADMIN_PASSWORD} = (credencial)

{BM_ADMIN_USER} = (credencial)

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_PESABLE} = 000000000000037972-KG

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario revisa la unidad de medida de {SKU_PESABLE} en el modal.
4. El usuario toca "Entendido".

**Resultado esperado**

El modal muestra la unidad de medida de {SKU_PESABLE} (kg) y el carrito lo reincorpora con la cantidad disponible aplicando el multiplicador de Janis.

**Resultado obtenido**

Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.

**Observación**

Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.

---

#### TC-B2C47-M-007 - Verificar que cerrar el modal con la X también agrega los productos y muestra el toast [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-47.spec.ts |

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

{BM_ADMIN_PASSWORD} = (credencial)

{BM_ADMIN_USER} = (credencial)

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario toca la X del modal.
4. El sistema cierra el modal y actualiza el carrito.

**Resultado esperado**

Se muestra el toast con ícono ✓ y botón X "¡Tu carro ha sido actualizado!" y {SKU_UNITARIO} x 2 queda en la sección de disponibles.

**Resultado obtenido**

Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.

**Observación**

Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.

---

#### TC-B2C47-M-008 - Verificar que un invitado con productos repuestos los ve agregados al carro tras Entendido [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-47.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{BM_ADMIN_PASSWORD} = (credencial)

{BM_ADMIN_USER} = (credencial)

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View

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

Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar. Además el caso es de invitado con productos en el carro y la fila no declara una dirección (un invitado sin dirección no puede agregar).

**Observación**

Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar. Además el caso es de invitado con productos en el carro y la fila no declara una dirección (un invitado sin dirección no puede agregar).

---

#### TC-B2C47-M-009 - Verificar que un restock parcial deja 4 disponibles y 1 no disponible con totales recalculados [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-47.spec.ts |

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

{BM_ADMIN_PASSWORD} = (credencial)

{BM_ADMIN_USER} = (credencial)

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario toca "Entendido".
4. El usuario revisa las secciones del carrito y el resumen de precios.

**Resultado esperado**

{SKU_UNITARIO} queda con 4 unidades en disponibles y 1 en no disponibles, y el resumen de precios y totales se recalcula.

**Resultado obtenido**

Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.

**Observación**

Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.

---

#### TC-B2C47-M-010 - Verificar que con un solo producto repuesto el modal se muestra en talla xs [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-47.spec.ts |

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

{BM_ADMIN_PASSWORD} = (credencial)

{BM_ADMIN_USER} = (credencial)

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario revisa el tamaño del modal.

**Resultado esperado**

El modal "Están de vuelta" se muestra en talla xs según Figma.

**Resultado obtenido**

Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.

**Observación**

Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.

---

#### TC-B2C47-M-011 - Verificar que con dos o más productos repuestos el modal se muestra en talla md [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-47.spec.ts |

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

{BM_ADMIN_PASSWORD} = (credencial)

{BM_ADMIN_USER} = (credencial)

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_PESABLE} = 000000000000037972-KG

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario revisa el tamaño del modal.

**Resultado esperado**

El modal "Están de vuelta" lista {SKU_UNITARIO} y {SKU_PESABLE} y se muestra en talla md según Figma.

**Resultado obtenido**

Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.

**Observación**

Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.

---

#### TC-B2C47-D-012 - Verificar que si falla la reincorporación los productos no se agregan y se muestra el toast de error [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-47.spec.ts |

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

{BM_ADMIN_PASSWORD} = (credencial)

{BM_ADMIN_USER} = (credencial)

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_ITEM_API_ENDPOINT} = None

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{INVENTORY_LIST_TIENDA_RETIRO_001} = None

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_RETIRO_001} = Unimarc Las Condes

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

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

Causa: token(s) en TBD en el Excel de data: {CART_ITEM_API_ENDPOINT}. Acción: cargar el dato en el Excel de data. Además, la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida.

**Observación**

Causa: token(s) en TBD en el Excel de data: {CART_ITEM_API_ENDPOINT}. Acción: cargar el dato en el Excel de data. Además, la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida.

---

#### TC-B2C47-D-013 - Verificar que el toast de error de reincorporación persiste hasta cerrarlo con la X [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-47.spec.ts |

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

{BM_ADMIN_PASSWORD} = (credencial)

{BM_ADMIN_USER} = (credencial)

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_ITEM_API_ENDPOINT} = None

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{INVENTORY_LIST_TIENDA_RETIRO_001} = None

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_RETIRO_001} = Unimarc Las Condes

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

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

Causa: token(s) en TBD en el Excel de data: {CART_ITEM_API_ENDPOINT}. Acción: cargar el dato en el Excel de data. Además, la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida.

**Observación**

Causa: token(s) en TBD en el Excel de data: {CART_ITEM_API_ENDPOINT}. Acción: cargar el dato en el Excel de data. Además, la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida.

---

#### TC-B2C47-D-014 - Verificar que tras el error de reincorporación el usuario puede reintentar y los productos se agregan [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-47.spec.ts |

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

{BM_ADMIN_PASSWORD} = (credencial)

{BM_ADMIN_USER} = (credencial)

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_ITEM_API_ENDPOINT} = None

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{INVENTORY_LIST_TIENDA_RETIRO_001} = None

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_RETIRO_001} = Unimarc Las Condes

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

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

Causa: token(s) en TBD en el Excel de data: {CART_ITEM_API_ENDPOINT}. Acción: cargar el dato en el Excel de data. Además, la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida.

**Observación**

Causa: token(s) en TBD en el Excel de data: {CART_ITEM_API_ENDPOINT}. Acción: cargar el dato en el Excel de data. Además, la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida.

---

#### TC-B2C47-D-015 - Verificar que si falla la reincorporación al cerrar el modal con la X se muestra el toast de error [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-47.spec.ts |

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

{BM_ADMIN_PASSWORD} = (credencial)

{BM_ADMIN_USER} = (credencial)

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_ITEM_API_ENDPOINT} = None

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{INVENTORY_LIST_TIENDA_RETIRO_001} = None

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_RETIRO_001} = Unimarc Las Condes

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito; el usuario anota el subtotal y el total.
3. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
4. El usuario cierra el modal con la X.
5. El sistema intenta reincorporar los productos y la request falla.

**Resultado esperado**

Se muestra el toast de error "Ha ocurrido un error al agregar los productos a tu carro" con botón X (no el toast de confirmación); {SKU_UNITARIO} x 2 sigue en No disponibles y subtotal y total no cambian.

**Resultado obtenido**

Causa: token(s) en TBD en el Excel de data: {CART_ITEM_API_ENDPOINT}. Acción: cargar el dato en el Excel de data. Además, la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida.

**Observación**

Causa: token(s) en TBD en el Excel de data: {CART_ITEM_API_ENDPOINT}. Acción: cargar el dato en el Excel de data. Además, la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida.

---

#### TC-B2C47-M-012 - Verificar que si falla la reincorporación los productos no se agregan y se muestra el toast de error [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-47.spec.ts |

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

{BM_ADMIN_PASSWORD} = (credencial)

{BM_ADMIN_USER} = (credencial)

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_ITEM_API_ENDPOINT} = None

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{INVENTORY_LIST_TIENDA_RETIRO_001} = None

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_RETIRO_001} = Unimarc Las Condes

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

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

Causa: token(s) en TBD en el Excel de data: {CART_ITEM_API_ENDPOINT}. Acción: cargar el dato en el Excel de data. Además, la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida.

**Observación**

Causa: token(s) en TBD en el Excel de data: {CART_ITEM_API_ENDPOINT}. Acción: cargar el dato en el Excel de data. Además, la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida.

---

#### TC-B2C47-M-013 - Verificar que el toast de error de reincorporación persiste hasta cerrarlo con la X [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-47.spec.ts |

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

{BM_ADMIN_PASSWORD} = (credencial)

{BM_ADMIN_USER} = (credencial)

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_ITEM_API_ENDPOINT} = None

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{INVENTORY_LIST_TIENDA_RETIRO_001} = None

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_RETIRO_001} = Unimarc Las Condes

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

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

Causa: token(s) en TBD en el Excel de data: {CART_ITEM_API_ENDPOINT}. Acción: cargar el dato en el Excel de data. Además, la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida.

**Observación**

Causa: token(s) en TBD en el Excel de data: {CART_ITEM_API_ENDPOINT}. Acción: cargar el dato en el Excel de data. Además, la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida.

---

#### TC-B2C47-M-014 - Verificar que tras el error de reincorporación el usuario puede reintentar y los productos se agregan [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-47.spec.ts |

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

{BM_ADMIN_PASSWORD} = (credencial)

{BM_ADMIN_USER} = (credencial)

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_ITEM_API_ENDPOINT} = None

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{INVENTORY_LIST_TIENDA_RETIRO_001} = None

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_RETIRO_001} = Unimarc Las Condes

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

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

Causa: token(s) en TBD en el Excel de data: {CART_ITEM_API_ENDPOINT}. Acción: cargar el dato en el Excel de data. Además, la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida.

**Observación**

Causa: token(s) en TBD en el Excel de data: {CART_ITEM_API_ENDPOINT}. Acción: cargar el dato en el Excel de data. Además, la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida.

---

#### TC-B2C47-M-015 - Verificar que si falla la reincorporación al cerrar el modal con la X se muestra el toast de error [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-47.spec.ts |

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

{BM_ADMIN_PASSWORD} = (credencial)

{BM_ADMIN_USER} = (credencial)

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_ITEM_API_ENDPOINT} = None

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{INVENTORY_LIST_TIENDA_RETIRO_001} = None

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_RETIRO_001} = Unimarc Las Condes

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito; el usuario anota el subtotal y el total.
3. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
4. El usuario cierra el modal con la X.
5. El sistema intenta reincorporar los productos y la request falla.

**Resultado esperado**

Se muestra el toast de error "Ha ocurrido un error al agregar los productos a tu carro" con botón X (no el toast de confirmación); {SKU_UNITARIO} x 2 sigue en No disponibles y subtotal y total no cambian.

**Resultado obtenido**

Causa: token(s) en TBD en el Excel de data: {CART_ITEM_API_ENDPOINT}. Acción: cargar el dato en el Excel de data. Además, la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida.

**Observación**

Causa: token(s) en TBD en el Excel de data: {CART_ITEM_API_ENDPOINT}. Acción: cargar el dato en el Excel de data. Además, la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida.

---

#### TC-B2C47-D-016 - Verificar que al reincorporar los productos el total a pagar aumenta en el valor de lo agregado [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-47.spec.ts |

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

{BM_ADMIN_PASSWORD} = (credencial)

{BM_ADMIN_USER} = (credencial)

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{INVENTORY_LIST_TIENDA_RETIRO_001} = None

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_RETIRO_001} = Unimarc Las Condes

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

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

Causa: token(s) sin fila en el Excel de data: {INVENTORY_LIST_TIENDA_RETIRO_001}. Acción: cargar el dato en el Excel de data. Además, la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida.

**Observación**

Causa: token(s) sin fila en el Excel de data: {INVENTORY_LIST_TIENDA_RETIRO_001}. Acción: cargar el dato en el Excel de data. Además, la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida.

---

#### TC-B2C47-M-016 - Verificar que al reincorporar los productos el total a pagar aumenta en el valor de lo agregado [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-47.spec.ts |

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

{BM_ADMIN_PASSWORD} = (credencial)

{BM_ADMIN_USER} = (credencial)

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{INVENTORY_LIST_TIENDA_RETIRO_001} = None

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_RETIRO_001} = Unimarc Las Condes

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

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

Causa: token(s) sin fila en el Excel de data: {INVENTORY_LIST_TIENDA_RETIRO_001}. Acción: cargar el dato en el Excel de data. Además, la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida.

**Observación**

Causa: token(s) sin fila en el Excel de data: {INVENTORY_LIST_TIENDA_RETIRO_001}. Acción: cargar el dato en el Excel de data. Además, la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida.

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
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-47 WEB Test Cases.xlsx",
  "title": "Productos de vuelta en el carro («Están de vuelta»)",
  "updated_at": "2026-10-20"
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
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El modal se cierra, se muestra el toast con ícono ✓ y botón X \"¡Tu carro ha sido actualizado!\" y {SKU_UNITARIO} x 2 queda en la sección de disponibles.",
   "form_factor": "desktop",
   "id": "TC-B2C47-D-001",
   "name": "Verificar que Entendido cierra el modal, muestra el toast y agrega los productos al carro [Desktop] [Logueado]",
   "observation": "Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.",
   "observed": "Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)",
   "spec": "tests/B2C-47.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario hace clic en \"Entendido\".\n4. El sistema cierra el modal y actualiza el carrito en tiempo real.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (credencial)\n{BM_ADMIN_USER} = (credencial)\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El toast desaparece automáticamente transcurridos 4 segundos.",
   "form_factor": "desktop",
   "id": "TC-B2C47-D-002",
   "name": "Verificar que el toast de carro actualizado desaparece solo a los 4 segundos [Desktop] [Logueado]",
   "observation": "Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.",
   "observed": "Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)",
   "spec": "tests/B2C-47.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario hace clic en \"Entendido\".\n4. El sistema muestra el toast \"¡Tu carro ha sido actualizado!\".\n5. El usuario espera sin interactuar.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (credencial)\n{BM_ADMIN_USER} = (credencial)\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El toast se cierra inmediatamente.",
   "form_factor": "desktop",
   "id": "TC-B2C47-D-003",
   "name": "Verificar que el toast de carro actualizado se cierra con la X [Desktop] [Logueado]",
   "observation": "Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.",
   "observed": "Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)",
   "spec": "tests/B2C-47.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario hace clic en \"Entendido\".\n4. El sistema muestra el toast \"¡Tu carro ha sido actualizado!\".\n5. El usuario hace clic en la X del toast antes de 4 segundos.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (credencial)\n{BM_ADMIN_USER} = (credencial)\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "{SKU_UNITARIO} x 3 pasa completo a la sección de disponibles, no queda en no disponibles y no se muestra aviso adicional.",
   "form_factor": "desktop",
   "id": "TC-B2C47-D-004",
   "name": "Verificar que un unitario con stock suficiente pasa completo a disponibles sin aviso adicional [Desktop] [Logueado]",
   "observation": "Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.",
   "observed": "Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 3\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 5 (restock en la tienda abastecedora activa)",
   "spec": "tests/B2C-47.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario hace clic en \"Entendido\".\n4. El usuario revisa el carrito.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (credencial)\n{BM_ADMIN_USER} = (credencial)\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "{SKU_UNITARIO} queda con 2 unidades en disponibles y 1 unidad en la sección No disponibles; no se muestra un mensaje adicional.",
   "form_factor": "desktop",
   "id": "TC-B2C47-D-005",
   "name": "Verificar que un unitario con stock parcial deja la cantidad restante en No disponibles [Desktop] [Logueado]",
   "observation": "Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.",
   "observed": "Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 3\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)",
   "spec": "tests/B2C-47.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario hace clic en \"Entendido\".\n4. El usuario revisa las secciones de disponibles y no disponibles.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (credencial)\n{BM_ADMIN_USER} = (credencial)\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El modal muestra la unidad de medida de {SKU_PESABLE} (kg) y el carrito lo reincorpora con la cantidad disponible aplicando el multiplicador de Janis.",
   "form_factor": "desktop",
   "id": "TC-B2C47-D-006",
   "name": "Verificar que un pesable repuesto se reincorpora con el multiplicador de medida [Desktop] [Logueado]",
   "observation": "Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.",
   "observed": "Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_PESABLE} con 1 kg\n- Desde BM ({BM_URL}) el stock de {SKU_PESABLE} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_PESABLE} queda marcado como no disponible en el carro\n- Desde BM ({BM_URL}) el stock de {SKU_PESABLE} en {BM_INVENTORY_LIST} se deja en 1 kg o más (restock en la tienda abastecedora activa)",
   "spec": "tests/B2C-47.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario revisa la unidad de medida de {SKU_PESABLE} en el modal.\n4. El usuario hace clic en \"Entendido\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (credencial)\n{BM_ADMIN_USER} = (credencial)\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_PESABLE} = 000000000000037972-KG\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se muestra el toast con ícono ✓ y botón X \"¡Tu carro ha sido actualizado!\" y {SKU_UNITARIO} x 2 queda en la sección de disponibles.",
   "form_factor": "desktop",
   "id": "TC-B2C47-D-007",
   "name": "Verificar que cerrar el modal con la X también agrega los productos y muestra el toast [Desktop] [Logueado]",
   "observation": "Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.",
   "observed": "Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)",
   "spec": "tests/B2C-47.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario hace clic en la X del modal.\n4. El sistema cierra el modal y actualiza el carrito.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (credencial)\n{BM_ADMIN_USER} = (credencial)\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se muestra el toast \"¡Tu carro ha sido actualizado!\" y {SKU_UNITARIO} x 2 queda en la sección de disponibles.",
   "form_factor": "desktop",
   "id": "TC-B2C47-D-008",
   "name": "Verificar que un invitado con productos repuestos los ve agregados al carro tras Entendido [Desktop] [Guest]",
   "observation": "Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar. Además el caso es de invitado con productos en el carro y la fila no declara una dirección (un invitado sin dirección no puede agregar).",
   "observed": "Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar. Además el caso es de invitado con productos en el carro y la fila no declara una dirección (un invitado sin dirección no puede agregar).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)",
   "spec": "tests/B2C-47.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario hace clic en \"Entendido\".\n4. El sistema cierra el modal y actualiza el carrito en tiempo real.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (credencial)\n{BM_ADMIN_USER} = (credencial)\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "{SKU_UNITARIO} queda con 4 unidades en disponibles y 1 en no disponibles, y el resumen de precios y totales se recalcula.",
   "form_factor": "desktop",
   "id": "TC-B2C47-D-009",
   "name": "Verificar que un restock parcial deja 4 disponibles y 1 no disponible con totales recalculados [Desktop] [Logueado]",
   "observation": "Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.",
   "observed": "Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 5\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2: el carro muestra 2 unidades disponibles y 3 no disponibles\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 4 (restock parcial)",
   "spec": "tests/B2C-47.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario hace clic en \"Entendido\".\n4. El usuario revisa las secciones del carrito y el resumen de precios.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (credencial)\n{BM_ADMIN_USER} = (credencial)\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El modal \"Están de vuelta\" se muestra en talla xs según Figma.",
   "form_factor": "desktop",
   "id": "TC-B2C47-D-010",
   "name": "Verificar que con un solo producto repuesto el modal se muestra en talla xs [Desktop] [Logueado]",
   "observation": "Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.",
   "observed": "Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)",
   "spec": "tests/B2C-47.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario revisa el tamaño del modal.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (credencial)\n{BM_ADMIN_USER} = (credencial)\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El modal \"Están de vuelta\" lista {SKU_UNITARIO} y {SKU_PESABLE} y se muestra en talla md según Figma.",
   "form_factor": "desktop",
   "id": "TC-B2C47-D-011",
   "name": "Verificar que con dos o más productos repuestos el modal se muestra en talla md [Desktop] [Logueado]",
   "observation": "Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.",
   "observed": "Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001}, {SKU_UNITARIO} x 2 y {SKU_PESABLE} con 1 kg\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} y {SKU_PESABLE} en {BM_INVENTORY_LIST} se deja en 0 y ambos quedan no disponibles\n- Desde BM se repone el stock de ambos productos (restock)",
   "spec": "tests/B2C-47.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario revisa el tamaño del modal.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (credencial)\n{BM_ADMIN_USER} = (credencial)\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_PESABLE} = 000000000000037972-KG\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El modal se cierra, se muestra el toast con ícono ✓ y botón X \"¡Tu carro ha sido actualizado!\" y {SKU_UNITARIO} x 2 queda en la sección de disponibles.",
   "form_factor": "mobile",
   "id": "TC-B2C47-M-001",
   "name": "Verificar que Entendido cierra el modal, muestra el toast y agrega los productos al carro [Mobile] [Logueado]",
   "observation": "Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.",
   "observed": "Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)",
   "spec": "tests/B2C-47.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario toca \"Entendido\".\n4. El sistema cierra el modal y actualiza el carrito en tiempo real.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (credencial)\n{BM_ADMIN_USER} = (credencial)\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El toast desaparece automáticamente transcurridos 4 segundos.",
   "form_factor": "mobile",
   "id": "TC-B2C47-M-002",
   "name": "Verificar que el toast de carro actualizado desaparece solo a los 4 segundos [Mobile] [Logueado]",
   "observation": "Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.",
   "observed": "Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)",
   "spec": "tests/B2C-47.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario toca \"Entendido\".\n4. El sistema muestra el toast \"¡Tu carro ha sido actualizado!\".\n5. El usuario espera sin interactuar.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (credencial)\n{BM_ADMIN_USER} = (credencial)\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El toast se cierra inmediatamente.",
   "form_factor": "mobile",
   "id": "TC-B2C47-M-003",
   "name": "Verificar que el toast de carro actualizado se cierra con la X [Mobile] [Logueado]",
   "observation": "Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.",
   "observed": "Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)",
   "spec": "tests/B2C-47.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario toca \"Entendido\".\n4. El sistema muestra el toast \"¡Tu carro ha sido actualizado!\".\n5. El usuario toca la X del toast antes de 4 segundos.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (credencial)\n{BM_ADMIN_USER} = (credencial)\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "{SKU_UNITARIO} x 3 pasa completo a la sección de disponibles, no queda en no disponibles y no se muestra aviso adicional.",
   "form_factor": "mobile",
   "id": "TC-B2C47-M-004",
   "name": "Verificar que un unitario con stock suficiente pasa completo a disponibles sin aviso adicional [Mobile] [Logueado]",
   "observation": "Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.",
   "observed": "Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 3\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 5 (restock en la tienda abastecedora activa)",
   "spec": "tests/B2C-47.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario toca \"Entendido\".\n4. El usuario revisa el carrito.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (credencial)\n{BM_ADMIN_USER} = (credencial)\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "{SKU_UNITARIO} queda con 2 unidades en disponibles y 1 unidad en la sección No disponibles; no se muestra un mensaje adicional.",
   "form_factor": "mobile",
   "id": "TC-B2C47-M-005",
   "name": "Verificar que un unitario con stock parcial deja la cantidad restante en No disponibles [Mobile] [Logueado]",
   "observation": "Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.",
   "observed": "Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 3\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)",
   "spec": "tests/B2C-47.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario toca \"Entendido\".\n4. El usuario revisa las secciones de disponibles y no disponibles.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (credencial)\n{BM_ADMIN_USER} = (credencial)\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El modal muestra la unidad de medida de {SKU_PESABLE} (kg) y el carrito lo reincorpora con la cantidad disponible aplicando el multiplicador de Janis.",
   "form_factor": "mobile",
   "id": "TC-B2C47-M-006",
   "name": "Verificar que un pesable repuesto se reincorpora con el multiplicador de medida [Mobile] [Logueado]",
   "observation": "Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.",
   "observed": "Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_PESABLE} con 1 kg\n- Desde BM ({BM_URL}) el stock de {SKU_PESABLE} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_PESABLE} queda marcado como no disponible en el carro\n- Desde BM ({BM_URL}) el stock de {SKU_PESABLE} en {BM_INVENTORY_LIST} se deja en 1 kg o más (restock en la tienda abastecedora activa)",
   "spec": "tests/B2C-47.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario revisa la unidad de medida de {SKU_PESABLE} en el modal.\n4. El usuario toca \"Entendido\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (credencial)\n{BM_ADMIN_USER} = (credencial)\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_PESABLE} = 000000000000037972-KG\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se muestra el toast con ícono ✓ y botón X \"¡Tu carro ha sido actualizado!\" y {SKU_UNITARIO} x 2 queda en la sección de disponibles.",
   "form_factor": "mobile",
   "id": "TC-B2C47-M-007",
   "name": "Verificar que cerrar el modal con la X también agrega los productos y muestra el toast [Mobile] [Logueado]",
   "observation": "Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.",
   "observed": "Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)",
   "spec": "tests/B2C-47.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario toca la X del modal.\n4. El sistema cierra el modal y actualiza el carrito.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (credencial)\n{BM_ADMIN_USER} = (credencial)\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se muestra el toast \"¡Tu carro ha sido actualizado!\" y {SKU_UNITARIO} x 2 queda en la sección de disponibles.",
   "form_factor": "mobile",
   "id": "TC-B2C47-M-008",
   "name": "Verificar que un invitado con productos repuestos los ve agregados al carro tras Entendido [Mobile] [Guest]",
   "observation": "Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar. Además el caso es de invitado con productos en el carro y la fila no declara una dirección (un invitado sin dirección no puede agregar).",
   "observed": "Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar. Además el caso es de invitado con productos en el carro y la fila no declara una dirección (un invitado sin dirección no puede agregar).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)",
   "spec": "tests/B2C-47.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario toca \"Entendido\".\n4. El sistema cierra el modal y actualiza el carrito en tiempo real.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (credencial)\n{BM_ADMIN_USER} = (credencial)\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "{SKU_UNITARIO} queda con 4 unidades en disponibles y 1 en no disponibles, y el resumen de precios y totales se recalcula.",
   "form_factor": "mobile",
   "id": "TC-B2C47-M-009",
   "name": "Verificar que un restock parcial deja 4 disponibles y 1 no disponible con totales recalculados [Mobile] [Logueado]",
   "observation": "Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.",
   "observed": "Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 5\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2: el carro muestra 2 unidades disponibles y 3 no disponibles\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 4 (restock parcial)",
   "spec": "tests/B2C-47.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario toca \"Entendido\".\n4. El usuario revisa las secciones del carrito y el resumen de precios.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (credencial)\n{BM_ADMIN_USER} = (credencial)\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El modal \"Están de vuelta\" se muestra en talla xs según Figma.",
   "form_factor": "mobile",
   "id": "TC-B2C47-M-010",
   "name": "Verificar que con un solo producto repuesto el modal se muestra en talla xs [Mobile] [Logueado]",
   "observation": "Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.",
   "observed": "Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)",
   "spec": "tests/B2C-47.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario revisa el tamaño del modal.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (credencial)\n{BM_ADMIN_USER} = (credencial)\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El modal \"Están de vuelta\" lista {SKU_UNITARIO} y {SKU_PESABLE} y se muestra en talla md según Figma.",
   "form_factor": "mobile",
   "id": "TC-B2C47-M-011",
   "name": "Verificar que con dos o más productos repuestos el modal se muestra en talla md [Mobile] [Logueado]",
   "observation": "Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.",
   "observed": "Causa: la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida. Acción: que alguien con acceso a BM deje el stock en el estado que pide cada caso y avise para re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001}, {SKU_UNITARIO} x 2 y {SKU_PESABLE} con 1 kg\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} y {SKU_PESABLE} en {BM_INVENTORY_LIST} se deja en 0 y ambos quedan no disponibles\n- Desde BM se repone el stock de ambos productos (restock)",
   "spec": "tests/B2C-47.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario revisa el tamaño del modal.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (credencial)\n{BM_ADMIN_USER} = (credencial)\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_PESABLE} = 000000000000037972-KG\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se muestra el toast de error \"Ha ocurrido un error al agregar los productos a tu carro\" con botón X; {SKU_UNITARIO} x 2 sigue en la sección No disponibles y no se agrega a disponibles; subtotal y total quedan iguales a los anotados antes del intento.",
   "form_factor": "desktop",
   "id": "TC-B2C47-D-012",
   "name": "Verificar que si falla la reincorporación los productos no se agregan y se muestra el toast de error [Desktop] [Logueado]",
   "observation": "Causa: token(s) en TBD en el Excel de data: {CART_ITEM_API_ENDPOINT}. Acción: cargar el dato en el Excel de data. Además, la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida.",
   "observed": "Causa: token(s) en TBD en el Excel de data: {CART_ITEM_API_ENDPOINT}. Acción: cargar el dato en el Excel de data. Además, la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Carro asignado a la tienda {TIENDA_RETIRO_001} (retiro en tienda seleccionado)\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- En BM ({BM_INVENTORY_LIST}), en el inventario de la tienda asignada al carro ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 0 y {SKU_UNITARIO} queda como no disponible en el carro\n- En el mismo inventario ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 2 (restock)\n- DevTools abierto con bloqueo de la request {CART_ITEM_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-47.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito; el usuario anota la cantidad de {SKU_UNITARIO} en No disponibles, el subtotal y el total.\n3. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n4. El usuario hace clic en \"Entendido\".\n5. El sistema intenta reincorporar los productos y la request falla.\n6. El usuario revisa el carrito y la tarjeta de totales.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (credencial)\n{BM_ADMIN_USER} = (credencial)\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_ITEM_API_ENDPOINT} = None\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{INVENTORY_LIST_TIENDA_RETIRO_001} = None\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_RETIRO_001} = Unimarc Las Condes\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El toast \"Ha ocurrido un error al agregar los productos a tu carro\" sigue visible después de los 4 segundos y solo se cierra al presionar la X; el carrito no cambia.",
   "form_factor": "desktop",
   "id": "TC-B2C47-D-013",
   "name": "Verificar que el toast de error de reincorporación persiste hasta cerrarlo con la X [Desktop] [Logueado]",
   "observation": "Causa: token(s) en TBD en el Excel de data: {CART_ITEM_API_ENDPOINT}. Acción: cargar el dato en el Excel de data. Además, la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida.",
   "observed": "Causa: token(s) en TBD en el Excel de data: {CART_ITEM_API_ENDPOINT}. Acción: cargar el dato en el Excel de data. Además, la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Carro asignado a la tienda {TIENDA_RETIRO_001} (retiro en tienda seleccionado)\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- En BM ({BM_INVENTORY_LIST}), en el inventario de la tienda asignada al carro ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 0 y {SKU_UNITARIO} queda como no disponible en el carro\n- En el mismo inventario ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 2 (restock)\n- DevTools abierto con bloqueo de la request {CART_ITEM_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-47.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario hace clic en \"Entendido\".\n4. El sistema intenta reincorporar los productos y la request falla.\n5. El usuario espera más de 4 segundos sin interactuar con el toast.\n6. El usuario presiona la X del toast.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (credencial)\n{BM_ADMIN_USER} = (credencial)\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_ITEM_API_ENDPOINT} = None\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{INVENTORY_LIST_TIENDA_RETIRO_001} = None\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_RETIRO_001} = Unimarc Las Condes\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El reintento está disponible: el modal \"Están de vuelta\" se vuelve a mostrar, al presionar \"Entendido\" se muestra el toast \"¡Tu carro ha sido actualizado!\" y {SKU_UNITARIO} x 2 pasa a la sección de disponibles con totales recalculados.",
   "form_factor": "desktop",
   "id": "TC-B2C47-D-014",
   "name": "Verificar que tras el error de reincorporación el usuario puede reintentar y los productos se agregan [Desktop] [Logueado]",
   "observation": "Causa: token(s) en TBD en el Excel de data: {CART_ITEM_API_ENDPOINT}. Acción: cargar el dato en el Excel de data. Además, la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida.",
   "observed": "Causa: token(s) en TBD en el Excel de data: {CART_ITEM_API_ENDPOINT}. Acción: cargar el dato en el Excel de data. Además, la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Carro asignado a la tienda {TIENDA_RETIRO_001} (retiro en tienda seleccionado)\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- En BM ({BM_INVENTORY_LIST}), en el inventario de la tienda asignada al carro ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 0 y {SKU_UNITARIO} queda como no disponible en el carro\n- En el mismo inventario ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 2 (restock)\n- DevTools abierto con bloqueo de la request {CART_ITEM_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-47.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario hace clic en \"Entendido\".\n4. El sistema intenta reincorporar los productos y la request falla.\n5. El sistema muestra el toast de error y el usuario lo cierra con la X.\n6. El usuario desactiva el bloqueo de {CART_ITEM_API_ENDPOINT} en DevTools.\n7. El usuario reintenta la reincorporación (recarga el carrito y el sistema vuelve a mostrar el modal \"Están de vuelta\").\n8. El usuario hace clic en \"Entendido\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (credencial)\n{BM_ADMIN_USER} = (credencial)\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_ITEM_API_ENDPOINT} = None\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{INVENTORY_LIST_TIENDA_RETIRO_001} = None\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_RETIRO_001} = Unimarc Las Condes\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se muestra el toast de error \"Ha ocurrido un error al agregar los productos a tu carro\" con botón X (no el toast de confirmación); {SKU_UNITARIO} x 2 sigue en No disponibles y subtotal y total no cambian.",
   "form_factor": "desktop",
   "id": "TC-B2C47-D-015",
   "name": "Verificar que si falla la reincorporación al cerrar el modal con la X se muestra el toast de error [Desktop] [Logueado]",
   "observation": "Causa: token(s) en TBD en el Excel de data: {CART_ITEM_API_ENDPOINT}. Acción: cargar el dato en el Excel de data. Además, la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida.",
   "observed": "Causa: token(s) en TBD en el Excel de data: {CART_ITEM_API_ENDPOINT}. Acción: cargar el dato en el Excel de data. Además, la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Carro asignado a la tienda {TIENDA_RETIRO_001} (retiro en tienda seleccionado)\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- En BM ({BM_INVENTORY_LIST}), en el inventario de la tienda asignada al carro ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 0 y {SKU_UNITARIO} queda como no disponible en el carro\n- En el mismo inventario ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 2 (restock)\n- DevTools abierto con bloqueo de la request {CART_ITEM_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-47.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito; el usuario anota el subtotal y el total.\n3. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n4. El usuario cierra el modal con la X.\n5. El sistema intenta reincorporar los productos y la request falla.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (credencial)\n{BM_ADMIN_USER} = (credencial)\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_ITEM_API_ENDPOINT} = None\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{INVENTORY_LIST_TIENDA_RETIRO_001} = None\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_RETIRO_001} = Unimarc Las Condes\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se muestra el toast de error \"Ha ocurrido un error al agregar los productos a tu carro\" con botón X; {SKU_UNITARIO} x 2 sigue en la sección No disponibles y no se agrega a disponibles; subtotal y total quedan iguales a los anotados antes del intento.",
   "form_factor": "mobile",
   "id": "TC-B2C47-M-012",
   "name": "Verificar que si falla la reincorporación los productos no se agregan y se muestra el toast de error [Mobile] [Logueado]",
   "observation": "Causa: token(s) en TBD en el Excel de data: {CART_ITEM_API_ENDPOINT}. Acción: cargar el dato en el Excel de data. Además, la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida.",
   "observed": "Causa: token(s) en TBD en el Excel de data: {CART_ITEM_API_ENDPOINT}. Acción: cargar el dato en el Excel de data. Además, la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Carro asignado a la tienda {TIENDA_RETIRO_001} (retiro en tienda seleccionado)\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- En BM ({BM_INVENTORY_LIST}), en el inventario de la tienda asignada al carro ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 0 y {SKU_UNITARIO} queda como no disponible en el carro\n- En el mismo inventario ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 2 (restock)\n- DevTools abierto con bloqueo de la request {CART_ITEM_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-47.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito; el usuario anota la cantidad de {SKU_UNITARIO} en No disponibles, el subtotal y el total.\n3. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n4. El usuario toca \"Entendido\".\n5. El sistema intenta reincorporar los productos y la request falla.\n6. El usuario revisa el carrito y la tarjeta de totales.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (credencial)\n{BM_ADMIN_USER} = (credencial)\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_ITEM_API_ENDPOINT} = None\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{INVENTORY_LIST_TIENDA_RETIRO_001} = None\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_RETIRO_001} = Unimarc Las Condes\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El toast \"Ha ocurrido un error al agregar los productos a tu carro\" sigue visible después de los 4 segundos y solo se cierra al tocar la X; el carrito no cambia.",
   "form_factor": "mobile",
   "id": "TC-B2C47-M-013",
   "name": "Verificar que el toast de error de reincorporación persiste hasta cerrarlo con la X [Mobile] [Logueado]",
   "observation": "Causa: token(s) en TBD en el Excel de data: {CART_ITEM_API_ENDPOINT}. Acción: cargar el dato en el Excel de data. Además, la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida.",
   "observed": "Causa: token(s) en TBD en el Excel de data: {CART_ITEM_API_ENDPOINT}. Acción: cargar el dato en el Excel de data. Además, la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Carro asignado a la tienda {TIENDA_RETIRO_001} (retiro en tienda seleccionado)\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- En BM ({BM_INVENTORY_LIST}), en el inventario de la tienda asignada al carro ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 0 y {SKU_UNITARIO} queda como no disponible en el carro\n- En el mismo inventario ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 2 (restock)\n- DevTools abierto con bloqueo de la request {CART_ITEM_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-47.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario toca \"Entendido\".\n4. El sistema intenta reincorporar los productos y la request falla.\n5. El usuario espera más de 4 segundos sin interactuar con el toast.\n6. El usuario toca la X del toast.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (credencial)\n{BM_ADMIN_USER} = (credencial)\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_ITEM_API_ENDPOINT} = None\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{INVENTORY_LIST_TIENDA_RETIRO_001} = None\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_RETIRO_001} = Unimarc Las Condes\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El reintento está disponible: el modal \"Están de vuelta\" se vuelve a mostrar, al tocar \"Entendido\" se muestra el toast \"¡Tu carro ha sido actualizado!\" y {SKU_UNITARIO} x 2 pasa a la sección de disponibles con totales recalculados.",
   "form_factor": "mobile",
   "id": "TC-B2C47-M-014",
   "name": "Verificar que tras el error de reincorporación el usuario puede reintentar y los productos se agregan [Mobile] [Logueado]",
   "observation": "Causa: token(s) en TBD en el Excel de data: {CART_ITEM_API_ENDPOINT}. Acción: cargar el dato en el Excel de data. Además, la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida.",
   "observed": "Causa: token(s) en TBD en el Excel de data: {CART_ITEM_API_ENDPOINT}. Acción: cargar el dato en el Excel de data. Además, la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Carro asignado a la tienda {TIENDA_RETIRO_001} (retiro en tienda seleccionado)\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- En BM ({BM_INVENTORY_LIST}), en el inventario de la tienda asignada al carro ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 0 y {SKU_UNITARIO} queda como no disponible en el carro\n- En el mismo inventario ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 2 (restock)\n- DevTools abierto con bloqueo de la request {CART_ITEM_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-47.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario toca \"Entendido\".\n4. El sistema intenta reincorporar los productos y la request falla.\n5. El sistema muestra el toast de error y el usuario lo cierra con la X.\n6. El usuario desactiva el bloqueo de {CART_ITEM_API_ENDPOINT} en DevTools.\n7. El usuario reintenta la reincorporación (recarga el carrito y el sistema vuelve a mostrar el modal \"Están de vuelta\").\n8. El usuario toca \"Entendido\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (credencial)\n{BM_ADMIN_USER} = (credencial)\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_ITEM_API_ENDPOINT} = None\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{INVENTORY_LIST_TIENDA_RETIRO_001} = None\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_RETIRO_001} = Unimarc Las Condes\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se muestra el toast de error \"Ha ocurrido un error al agregar los productos a tu carro\" con botón X (no el toast de confirmación); {SKU_UNITARIO} x 2 sigue en No disponibles y subtotal y total no cambian.",
   "form_factor": "mobile",
   "id": "TC-B2C47-M-015",
   "name": "Verificar que si falla la reincorporación al cerrar el modal con la X se muestra el toast de error [Mobile] [Logueado]",
   "observation": "Causa: token(s) en TBD en el Excel de data: {CART_ITEM_API_ENDPOINT}. Acción: cargar el dato en el Excel de data. Además, la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida.",
   "observed": "Causa: token(s) en TBD en el Excel de data: {CART_ITEM_API_ENDPOINT}. Acción: cargar el dato en el Excel de data. Además, la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Carro asignado a la tienda {TIENDA_RETIRO_001} (retiro en tienda seleccionado)\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- En BM ({BM_INVENTORY_LIST}), en el inventario de la tienda asignada al carro ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 0 y {SKU_UNITARIO} queda como no disponible en el carro\n- En el mismo inventario ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 2 (restock)\n- DevTools abierto con bloqueo de la request {CART_ITEM_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-47.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito; el usuario anota el subtotal y el total.\n3. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n4. El usuario cierra el modal con la X.\n5. El sistema intenta reincorporar los productos y la request falla.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (credencial)\n{BM_ADMIN_USER} = (credencial)\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_ITEM_API_ENDPOINT} = None\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{INVENTORY_LIST_TIENDA_RETIRO_001} = None\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_RETIRO_001} = Unimarc Las Condes\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "{SKU_UNITARIO} x 2 pasa a la sección de disponibles y la tarjeta de totales se actualiza sin recargar: subtotal = S + 2·P y total a pagar = T + 2·P.",
   "form_factor": "desktop",
   "id": "TC-B2C47-D-016",
   "name": "Verificar que al reincorporar los productos el total a pagar aumenta en el valor de lo agregado [Desktop] [Logueado]",
   "observation": "Causa: token(s) sin fila en el Excel de data: {INVENTORY_LIST_TIENDA_RETIRO_001}. Acción: cargar el dato en el Excel de data. Además, la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida.",
   "observed": "Causa: token(s) sin fila en el Excel de data: {INVENTORY_LIST_TIENDA_RETIRO_001}. Acción: cargar el dato en el Excel de data. Además, la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Carro asignado a la tienda {TIENDA_RETIRO_001} (retiro en tienda seleccionado)\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2 ({SKU_UNITARIO} sin promociones vigentes)\n- En BM ({BM_INVENTORY_LIST}), en el inventario de la tienda asignada al carro ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 0 y {SKU_UNITARIO} queda como no disponible en el carro\n- En el mismo inventario ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 2 (restock)",
   "spec": "tests/B2C-47.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito; el usuario anota el precio unitario (P) de {SKU_UNITARIO} y los montos de la tarjeta de totales: subtotal (S) y total a pagar (T).\n3. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n4. El usuario hace clic en \"Entendido\".\n5. El sistema cierra el modal y muestra el toast \"¡Tu carro ha sido actualizado!\".\n6. Sin recargar, el usuario revisa la tarjeta de totales.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (credencial)\n{BM_ADMIN_USER} = (credencial)\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{INVENTORY_LIST_TIENDA_RETIRO_001} = None\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_RETIRO_001} = Unimarc Las Condes\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "{SKU_UNITARIO} x 2 pasa a la sección de disponibles y la tarjeta de totales se actualiza sin recargar: subtotal = S + 2·P y total a pagar = T + 2·P.",
   "form_factor": "mobile",
   "id": "TC-B2C47-M-016",
   "name": "Verificar que al reincorporar los productos el total a pagar aumenta en el valor de lo agregado [Mobile] [Logueado]",
   "observation": "Causa: token(s) sin fila en el Excel de data: {INVENTORY_LIST_TIENDA_RETIRO_001}. Acción: cargar el dato en el Excel de data. Además, la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida.",
   "observed": "Causa: token(s) sin fila en el Excel de data: {INVENTORY_LIST_TIENDA_RETIRO_001}. Acción: cargar el dato en el Excel de data. Además, la precondición exige modificar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER}. Business Manager está fuera del alcance de la automatización (y esa cuenta es personal), así que la precondición no se puede preparar desde la corrida.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Carro asignado a la tienda {TIENDA_RETIRO_001} (retiro en tienda seleccionado)\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2 ({SKU_UNITARIO} sin promociones vigentes)\n- En BM ({BM_INVENTORY_LIST}), en el inventario de la tienda asignada al carro ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 0 y {SKU_UNITARIO} queda como no disponible en el carro\n- En el mismo inventario ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 2 (restock)",
   "spec": "tests/B2C-47.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito; el usuario anota el precio unitario (P) de {SKU_UNITARIO} y los montos de la tarjeta de totales: subtotal (S) y total a pagar (T).\n3. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n4. El usuario toca \"Entendido\".\n5. El sistema cierra el modal y muestra el toast \"¡Tu carro ha sido actualizado!\".\n6. Sin recargar, el usuario revisa la tarjeta de totales.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (credencial)\n{BM_ADMIN_USER} = (credencial)\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{INVENTORY_LIST_TIENDA_RETIRO_001} = None\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_RETIRO_001} = Unimarc Las Condes\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "390x844"
  }
 ]
}
-->


---

## Minicarro

| Campo | Valor |
|---|---|
| Suite | B2C-53 |
| Última actualización | 2026-10-20 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-53 Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

### Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 20 |
| Aprobado | 7 |
| Rechazado | 1 |
| **Total** | **28** |

### Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-20 | 28 | TC-B2C53-D-001, TC-B2C53-D-002, TC-B2C53-D-003, TC-B2C53-D-004, TC-B2C53-D-005, TC-B2C53-D-006, TC-B2C53-D-007, TC-B2C53-D-008, TC-B2C53-D-009, TC-B2C53-D-010, TC-B2C53-D-011, TC-B2C53-D-012, TC-B2C53-D-013, TC-B2C53-D-014, TC-B2C53-D-015, TC-B2C53-D-017, TC-B2C53-D-019, TC-B2C53-D-020, TC-B2C53-D-021, TC-B2C53-D-022, TC-B2C53-D-023, TC-B2C53-D-024, TC-B2C53-D-025, TC-B2C53-D-026, TC-B2C53-D-027, TC-B2C53-D-028, TC-B2C53-D-029, TC-B2C53-D-030 |

### Detalle por caso de prueba

#### TC-B2C53-D-001 - Verificar que al abrir el minicarro se muestra un skeleton mientras carga el carrito [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- El carro contiene {SKU_VALID_001}
- DevTools abierto con throttling de red "Slow 3G"

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario hace clic en el ícono del carrito en el header.

**Resultado esperado**

Se muestra un skeleton de carga en el panel del minicarro hasta que se obtienen los datos del carrito.

**Resultado obtenido**

Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.

**Observación**

Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.

---

#### TC-B2C53-D-002 - Verificar que el minicarro lista los productos con thumbnail, nombre, unidad, precio y cantidad [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- El carro contiene {SKU_VALID_001} x 1 y {SKU_PESABLE} con 0,5 kg

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_PESABLE} = 000000000000037972-KG

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario hace clic en el ícono del carrito en el header.
3. El sistema despliega el panel flotante del minicarro.
4. El usuario revisa cada producto listado.

**Resultado esperado**

Cada producto muestra thumbnail, nombre, unidad de medida, precio y cantidad con controles +/−; la lista es completa y scrolleable (no colapsa).

**Resultado obtenido**

Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.

**Observación**

Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.

---

#### TC-B2C53-D-003 - Verificar que el minicarro muestra total, Vaciar carro, Ver mi carro, Ir a pagar e indicador [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- El carro contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 1

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario hace clic en el ícono del carrito en el header.
3. El sistema despliega el panel flotante del minicarro.
4. El usuario revisa el total, las acciones del panel y el indicador del ícono del carrito.

**Resultado esperado**

El panel muestra el total del carrito, el link "Vaciar carro 🗑", los CTAs "Ver mi carro" e "Ir a pagar", y el ícono del carrito muestra 2.

**Resultado obtenido**

Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.

**Observación**

Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.

---

#### TC-B2C53-D-004 - Verificar que los productos no disponibles se muestran debajo como referencia visual [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_NO_DISPONIBLE} = 000000000400254005-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_SIN_STOCK} = Unimarc Los leones

{USER_AUTH_001} = (credencial)

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario hace clic en el ícono del carrito en el header.
3. El sistema despliega el panel flotante del minicarro.
4. El usuario revisa la sección de productos no disponibles del minicarro.

**Resultado esperado**

{SKU_NO_DISPONIBLE} se muestra en una sección de no disponibles debajo de los disponibles, sin acciones de gestión (definidas en B2C-39).

**Resultado obtenido**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23: no se puede agregar al carro para armar la precondición. Acción: declarar un SKU con stock en la dirección activa y sin stock en la tienda del caso.

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23: no se puede agregar al carro para armar la precondición. Acción: declarar un SKU con stock en la dirección activa y sin stock en la tienda del caso.

---

#### TC-B2C53-D-005 - Verificar que con el carro vacío el minicarro muestra el estado vacío e Ir a comprar [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- El carro está vacío

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario hace clic en el ícono del carrito en el header.
3. El sistema despliega el panel flotante del minicarro.
4. El usuario revisa el panel y el ícono del carrito.

**Resultado esperado**

El panel muestra imagen, subtítulo "Tu carro está vacío", un mensaje que invita a seguir comprando y el CTA "Ir a comprar"; el ícono del carrito no muestra número.

**Resultado obtenido**

Esperado: con el carro vacío el panel muestra imagen, 'Tu carro está vacío', el mensaje y 'Ir a comprar', y el ícono del carrito no muestra número. Obtenido: el panel cumple, pero el ícono del carrito del header muestra '0' (aria-label 'Mi carrito, número de artículos: 0'). tests/B2C-53.spec.ts.

**Observación**

Esperado: con el carro vacío el panel muestra imagen, 'Tu carro está vacío', el mensaje y 'Ir a comprar', y el ícono del carrito no muestra número. Obtenido: el panel cumple, pero el ícono del carrito del header muestra '0' (aria-label 'Mi carrito, número de artículos: 0'). tests/B2C-53.spec.ts.

**Evidencia**

![Paso 3 — minicarro vacio](<B2C-53 Evidencias/TC-B2C53-D-005-p03-minicarro-vacio.png>)

![Estado final](<B2C-53 Evidencias/TC-B2C53-D-005.png>)

---

#### TC-B2C53-D-006 - Verificar que un error al cargar el minicarro muestra la pantalla de error CRT-020 [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- El carro contiene {SKU_VALID_001}
- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_API_ENDPOINT} = *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/customer/shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/abk0k1kXsWxHARxbs2xaYYxKs1/baskets

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario hace clic en el ícono del carrito en el header.

**Resultado esperado**

El panel se abre con la pantalla de error "No pudimos mostrar tu carro. Tenemos problemas con cargar tus productos. Por favor, inténtalo otra vez. (CRT-020)" y los botones "Reintentar" y "Volver al Inicio".

**Resultado obtenido**

Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.

**Observación**

Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.

---

#### TC-B2C53-D-007 - Verificar que Reintentar con éxito recarga el minicarro y muestra los productos [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- El carro contiene {SKU_VALID_001}
- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_API_ENDPOINT} = *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/customer/shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/abk0k1kXsWxHARxbs2xaYYxKs1/baskets

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario hace clic en el ícono del carrito en el header.
3. El sistema muestra la pantalla de error CRT-020.
4. El usuario desactiva en DevTools el bloqueo de la request {CART_API_ENDPOINT}.
5. El usuario hace clic en "Reintentar".
6. El sistema muestra el skeleton de carga.

**Resultado esperado**

El minicarro vuelve a solicitar el carrito y muestra {SKU_VALID_001}.

**Resultado obtenido**

Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.

**Observación**

Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.

---

#### TC-B2C53-D-008 - Verificar que Reintentar con fallo mantiene la pantalla de error del minicarro [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- El carro contiene {SKU_VALID_001}
- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_API_ENDPOINT} = *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/customer/shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/abk0k1kXsWxHARxbs2xaYYxKs1/baskets

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario hace clic en el ícono del carrito en el header.
3. El sistema muestra la pantalla de error CRT-020.
4. El usuario hace clic en "Reintentar".
5. El sistema muestra el skeleton de carga.

**Resultado esperado**

Tras el skeleton, el minicarro vuelve a mostrar la pantalla de error CRT-020 con "Reintentar" y "Volver al Inicio".

**Resultado obtenido**

Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.

**Observación**

Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.

---

#### TC-B2C53-D-009 - Verificar que Volver al Inicio cierra el minicarro y redirige al Home [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: PLP ({PLP_URL})
- El carro contiene {SKU_VALID_001}
- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_API_ENDPOINT} = *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/customer/shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/abk0k1kXsWxHARxbs2xaYYxKs1/baskets

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {PLP_URL}.
2. El usuario hace clic en el ícono del carrito en el header.
3. El sistema muestra la pantalla de error CRT-020.
4. El usuario hace clic en "Volver al Inicio".

**Resultado esperado**

El minicarro se cierra y el usuario es redirigido al Home ({BASE_URL}).

**Resultado obtenido**

Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.

**Observación**

Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.

---

#### TC-B2C53-D-010 - Verificar que con el minicarro cerrado el indicador del carrito se actualiza en tiempo real [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: PLP ({PLP_URL})
- El carro contiene {SKU_VALID_001} x 1
- El minicarro está cerrado

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {PLP_URL}.
2. El usuario hace clic en "Agregar" en un producto unitario de la PLP.
3. El usuario hace clic en el + del mismo producto.

**Resultado esperado**

El indicador del ícono del carrito pasa de 1 a 2 y luego a 3 en tiempo real, sin recargar la página.

**Resultado obtenido**

Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.

**Observación**

Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.

---

#### TC-B2C53-D-011 - Verificar que el indicador cuenta los unitarios por cantidad y los pesables como 1 [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- El carro contiene {SKU_VALID_001} x 3 y {SKU_PESABLE} con 1,5 kg

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_PESABLE} = 000000000000037972-KG

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario revisa el número del indicador del ícono del carrito.

**Resultado esperado**

El indicador muestra 4 (3 unidades de {SKU_VALID_001} + 1 por {SKU_PESABLE}).

**Resultado obtenido**

Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.

**Observación**

Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.

---

#### TC-B2C53-D-012 - Verificar que con el mínimo cumplido Ver mi carro redirige al carro completo [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Método de entrega activo

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (credencial)

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario hace clic en el ícono del carrito en el header.
3. El sistema despliega el panel flotante del minicarro.
4. El usuario hace clic en "Ver mi carro".

**Resultado esperado**

El usuario es redirigido al carro completo ({CART_URL}).

**Resultado obtenido**

Con {SKU_VALID_001} x 11 (subtotal $27.390), 'Ver mi carro' del minicarro lleva al carro completo (/cart).

**Evidencia**

![Paso 3 — minicarro sobre el minimo](<B2C-53 Evidencias/TC-B2C53-D-012-p03-minicarro-sobre-el-minimo.png>)

![Estado final](<B2C-53 Evidencias/TC-B2C53-D-012.png>)

---

#### TC-B2C53-D-013 - Verificar que con el mínimo cumplido Ir a pagar lleva directo a Mis Envíos [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Método de entrega activo
- La cuenta tiene productos My Usuals o favoritos

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (credencial)

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario hace clic en el ícono del carrito en el header.
3. El sistema despliega el panel flotante del minicarro.
4. El usuario hace clic en "Ir a pagar".

**Resultado esperado**

El usuario es redirigido directamente a Mis Envíos, sin mostrarse el modal "¡Que no se te olviden!" (B2C-41).

**Resultado obtenido**

Con {SKU_VALID_001} x 11, 'Ir a pagar' del minicarro lleva directo a Mis Envíos (/checkout/entrega) sin mostrar '¡Que no se te olviden!'.

**Evidencia**

![Paso 3 — minicarro sobre el minimo](<B2C-53 Evidencias/TC-B2C53-D-013-p03-minicarro-sobre-el-minimo.png>)

![Estado final](<B2C-53 Evidencias/TC-B2C53-D-013.png>)

---

#### TC-B2C53-D-014 - Verificar que sin el mínimo el minicarro muestra el faltante y deshabilita Ir a pagar [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x 1 y el subtotal es menor a {MONTO_MINIMO_COMPRA}
- Método de entrega activo

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (credencial)

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario hace clic en el ícono del carrito en el header.
3. El sistema despliega el panel flotante del minicarro.
4. El usuario revisa el panel del minicarro.

**Resultado esperado**

Se muestra el banner "¡Solo te faltan $X para ir a pagar!" (X = {MONTO_MINIMO_COMPRA} − subtotal) con botón X, la línea "Mínimo de compra ${MONTO_MINIMO_COMPRA}" y el botón "Ir a pagar" deshabilitado.

**Resultado obtenido**

Con {SKU_VALID_001} x 1 el minicarro muestra '¡Solo te faltan $X para ir a pagar!' (X = 20.000 − subtotal) con su X, la línea 'Mínimo de compra $20.000' e 'Ir a pagar' deshabilitado.

**Evidencia**

![Paso 4 — minicarro bajo el minimo](<B2C-53 Evidencias/TC-B2C53-D-014-p04-minicarro-bajo-el-minimo.png>)

---

#### TC-B2C53-D-015 - Verificar que el banner de faltante para el mínimo se cierra con la X [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x 1 y el subtotal es menor a {MONTO_MINIMO_COMPRA}
- Método de entrega activo

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (credencial)

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario hace clic en el ícono del carrito en el header.
3. El sistema despliega el panel flotante del minicarro.
4. El usuario hace clic en la X del banner "¡Solo te faltan $X para ir a pagar!".

**Resultado esperado**

El banner se cierra y el botón "Ir a pagar" sigue deshabilitado.

**Resultado obtenido**

La X cierra el banner de faltante y 'Ir a pagar' sigue deshabilitado.

**Evidencia**

![Estado final](<B2C-53 Evidencias/TC-B2C53-D-015.png>)

---

#### TC-B2C53-D-017 - Verificar que un invitado que hace clic en "Ver mi carro" es redirigido a la sección del carro [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- El carro contiene {SKU_VALID_001}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario hace clic en el ícono del carrito en el header.
3. El sistema despliega el panel flotante del minicarro.
4. El usuario hace clic en "Ver mi carro".

**Resultado esperado**

El sistema redirige al usuario a la sección del carro ({CART_URL}).

**Resultado obtenido**

Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.

**Observación**

Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.

---

#### TC-B2C53-D-019 - Verificar que Vaciar carro abre el modal de confirmación con Si, eliminar y No, Gracias [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- El carro contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 1

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario hace clic en el ícono del carrito en el header.
3. El sistema despliega el panel flotante del minicarro.
4. El usuario hace clic en el link "Vaciar carro 🗑".
5. El sistema despliega el modal de confirmación "Vaciar carro".
6. El usuario revisa el contenido del modal.

**Resultado esperado**

El modal muestra imagen, título "Vaciar carro", subtítulo "¿Estas seguro de que quieres eliminar todos los producots de tu carro?" y los botones "Si, eliminar" y "No, Gracias".

**Resultado obtenido**

Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.

**Observación**

Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.

---

#### TC-B2C53-D-020 - Verificar que con Unipay activo el total del minicarro refleja el descuento Unipay [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- Sesión iniciada con la cuenta {COMPRADOR_UNIPAY_USER}
- La cuenta tiene membresía Unipay activa
- El carro contiene {SKU_UNIPAY_001} (producto con descuento Unipay)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_UNIPAY_PASSWORD} = (credencial)

{COMPRADOR_UNIPAY_USER} = daunuruco+comprador@avatar-global.com

{SKU_UNIPAY_001} = 000000000000661945-UN

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario hace clic en el ícono del carrito en el header.
3. El sistema despliega el panel flotante del minicarro.
4. El usuario revisa el precio del producto y el total del panel.

**Resultado esperado**

El total del minicarro refleja el precio de {SKU_UNIPAY_001} con el descuento Unipay aplicado.

**Resultado obtenido**

Causa: {SKU_UNIPAY_001} (000000000000661945-UN) no tiene precio Unipay vigente: la PDP y el carro muestran solo $4.750. Acción: declarar un SKU con promo Unipay vigente.

**Observación**

Causa: {SKU_UNIPAY_001} (000000000000661945-UN) no tiene precio Unipay vigente: la PDP y el carro muestran solo $4.750. Acción: declarar un SKU con promo Unipay vigente.

---

#### TC-B2C53-D-021 - Verificar que confirmar el vaciado muestra spinner y deja el minicarro vacío [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- El carro contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 1

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario hace clic en el ícono del carrito en el header.
3. El sistema despliega el panel flotante del minicarro.
4. El usuario hace clic en el link "Vaciar carro 🗑".
5. El sistema despliega el modal de confirmación "Vaciar carro".
6. El usuario hace clic en "Si, eliminar".
7. El sistema muestra un spinner en el botón.

**Resultado esperado**

El panel pasa al estado vacío ("Tu carro está vacío") y el indicador del ícono del carrito se actualiza a 0.

**Resultado obtenido**

Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.

**Observación**

Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.

---

#### TC-B2C53-D-022 - Verificar que un error al vaciar cierra el modal, mantiene los productos y muestra CRT-076 [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- El carro contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 1
- DevTools abierto con bloqueo de la request {VACIAR_CARRO_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{VACIAR_CARRO_API_ENDPOINT} = None

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario hace clic en el ícono del carrito en el header.
3. El sistema despliega el panel flotante del minicarro.
4. El usuario hace clic en el link "Vaciar carro 🗑".
5. El sistema despliega el modal de confirmación "Vaciar carro".
6. El usuario hace clic en "Si, eliminar".

**Resultado esperado**

El modal se cierra, el carrito mantiene {SKU_VALID_001} y {SKU_UNITARIO} y se muestra el toast "¡Lo sentimos! No pudimos vaciar tu carro, vuelve a intentarlo" (CRT-076) que persiste hasta cerrarlo con la X.

**Resultado obtenido**

Causa: token(s) en TBD en el Excel de data: {VACIAR_CARRO_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.

**Observación**

Causa: token(s) en TBD en el Excel de data: {VACIAR_CARRO_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.

---

#### TC-B2C53-D-023 - Verificar que No, Gracias cierra el modal de vaciado sin cambios en el carro [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- El carro contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 1

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario hace clic en el ícono del carrito en el header.
3. El sistema despliega el panel flotante del minicarro.
4. El usuario hace clic en el link "Vaciar carro 🗑".
5. El sistema despliega el modal de confirmación "Vaciar carro".
6. El usuario hace clic en "No, Gracias".

**Resultado esperado**

El modal se cierra y el minicarro mantiene {SKU_VALID_001} y {SKU_UNITARIO} con sus cantidades.

**Resultado obtenido**

Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.

**Observación**

Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.

---

#### TC-B2C53-D-024 - Verificar que un producto con promo "Combina/Completa" muestra el mensaje en el minicarro [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- El carro contiene {SKU_CON_PROMO_COMBINA}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{SKU_CON_PROMO_COMBINA} = None

{USER_AUTH_001} = (credencial)

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL} con la cuenta {USER_AUTH_001}.
2. El usuario agrega {SKU_CON_PROMO_COMBINA} al carrito.
3. El usuario hace clic en el ícono del carrito en el header.
4. El sistema despliega el panel flotante del minicarro.
5. El usuario localiza {SKU_CON_PROMO_COMBINA} en el listado del minicarro.
6. El usuario verifica que el producto muestra el mensaje "Combina" o "Completa".

**Resultado esperado**

El producto {SKU_CON_PROMO_COMBINA} muestra el mensaje "Combina" o "Completa" junto a su información.

**Resultado obtenido**

Causa: token(s) sin fila en el Excel de data: {SKU_CON_PROMO_COMBINA}. Acción: cargar el dato en el Excel de data.

**Observación**

Causa: token(s) sin fila en el Excel de data: {SKU_CON_PROMO_COMBINA}. Acción: cargar el dato en el Excel de data.

---

#### TC-B2C53-D-025 - Verificar que incrementar la cantidad de un producto en el minicarro actualiza el subtotal e indicador [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- El carro contiene {SKU_VALID_001} x 1

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = (credencial)

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL} con la cuenta {USER_AUTH_001}.
2. El usuario agrega {SKU_VALID_001} x 1 al carrito.
3. El usuario hace clic en el ícono del carrito en el header.
4. El sistema despliega el panel flotante del minicarro.
5. El usuario anota el subtotal actual y la cantidad del indicador del ícono.
6. El usuario hace clic en el control + del producto {SKU_VALID_001}.
7. El sistema actualiza la cantidad del producto y el subtotal del minicarro.

**Resultado esperado**

La cantidad del producto {SKU_VALID_001} se incrementa en 1. El subtotal del minicarro refleja el nuevo precio. El indicador del ícono del carrito se actualiza al nuevo total de ítems.

**Resultado obtenido**

El + del minicarro pasa la cantidad de 1 a 2, el subtotal se duplica y el indicador del ícono pasa a 2.

**Evidencia**

![Paso 5 — minicarro con 1 un](<B2C-53 Evidencias/TC-B2C53-D-025-p05-minicarro-con-1-un.png>)

![Paso 7 — minicarro con 2 un](<B2C-53 Evidencias/TC-B2C53-D-025-p07-minicarro-con-2-un.png>)

---

#### TC-B2C53-D-026 - Verificar que decrementar la cantidad de un producto en el minicarro actualiza el subtotal e indicador [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- El carro contiene {SKU_VALID_001} x 2

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = (credencial)

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL} con la cuenta {USER_AUTH_001}.
2. El usuario agrega {SKU_VALID_001} x 2 al carrito.
3. El usuario hace clic en el ícono del carrito en el header.
4. El sistema despliega el panel flotante del minicarro.
5. El usuario anota el subtotal actual y la cantidad del indicador del ícono.
6. El usuario hace clic en el control − del producto {SKU_VALID_001}.
7. El sistema actualiza la cantidad del producto y el subtotal del minicarro.

**Resultado esperado**

La cantidad del producto {SKU_VALID_001} se decrementa en 1 (de 2 a 1). El subtotal del minicarro refleja el nuevo precio. El indicador del ícono del carrito se actualiza al nuevo total de ítems.

**Resultado obtenido**

El − del minicarro pasa la cantidad de 2 a 1, el subtotal baja a la mitad y el indicador pasa a 1.

**Evidencia**

![Paso 5 — minicarro con 2 un](<B2C-53 Evidencias/TC-B2C53-D-026-p05-minicarro-con-2-un.png>)

![Paso 7 — minicarro con 1 un](<B2C-53 Evidencias/TC-B2C53-D-026-p07-minicarro-con-1-un.png>)

---

#### TC-B2C53-D-027 - Verificar que decrementar la cantidad a 0 elimina el producto del minicarro [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- El carro contiene {SKU_VALID_001} x 1

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = (credencial)

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL} con la cuenta {USER_AUTH_001}.
2. El usuario agrega {SKU_VALID_001} x 1 al carrito.
3. El usuario hace clic en el ícono del carrito en el header.
4. El sistema despliega el panel flotante del minicarro.
5. El usuario hace clic en el control − del producto {SKU_VALID_001} (cantidad actual: 1).
6. El sistema elimina el producto del minicarro y actualiza el subtotal.

**Resultado esperado**

El producto {SKU_VALID_001} desaparece del listado del minicarro. El subtotal se actualiza descontando el precio del producto eliminado. El indicador del ícono del carrito se actualiza.

**Resultado obtenido**

Con 1 unidad, el control − (tacho) elimina el producto del minicarro, el subtotal descuenta su precio y el indicador se actualiza.

**Evidencia**

![Paso 5 — minicarro con 1 un](<B2C-53 Evidencias/TC-B2C53-D-027-p05-minicarro-con-1-un.png>)

![Paso 7 — minicarro sin el producto](<B2C-53 Evidencias/TC-B2C53-D-027-p07-minicarro-sin-el-producto.png>)

---

#### TC-B2C53-D-028 - Verificar que al alcanzar el límite máximo de cantidad el control + queda deshabilitado [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- El carro contiene {SKU_VALID_001} x {CART_LIMIT_QTY}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_LIMIT_QTY} = None

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = (credencial)

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL} con la cuenta {USER_AUTH_001}.
2. El usuario agrega {SKU_VALID_001} al carrito hasta alcanzar {CART_LIMIT_QTY}.
3. El usuario hace clic en el ícono del carrito en el header.
4. El sistema despliega el panel flotante del minicarro.
5. El usuario verifica el estado del control + del producto {SKU_VALID_001}.

**Resultado esperado**

El control + del producto {SKU_VALID_001} se muestra deshabilitado (no clickeable). La cantidad del producto permanece en {CART_LIMIT_QTY}.

**Resultado obtenido**

Causa: token(s) sin fila en el Excel de data: {CART_LIMIT_QTY}. Acción: cargar el dato en el Excel de data.

**Observación**

Causa: token(s) sin fila en el Excel de data: {CART_LIMIT_QTY}. Acción: cargar el dato en el Excel de data.

---

#### TC-B2C53-D-029 - Verificar que un producto no disponible se muestra sin controles +/− en el minicarro [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- El carro contiene {SKU_VALID_001} (disponible) y {SKU_NO_DISPONIBLE} (no disponible)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{SKU_NO_DISPONIBLE} = 000000000400254005-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = (credencial)

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL} con la cuenta {USER_AUTH_001}.
2. El usuario agrega {SKU_VALID_001} y {SKU_NO_DISPONIBLE} al carrito.
3. El usuario hace clic en el ícono del carrito en el header.
4. El sistema despliega el panel flotante del minicarro.
5. El usuario ubica la sección de productos no disponibles en el minicarro.
6. El usuario verifica los controles del producto {SKU_NO_DISPONIBLE}.

**Resultado esperado**

El producto {SKU_NO_DISPONIBLE} aparece en una sección separada debajo de los disponibles. No muestra controles +/− ni acciones de compra. Se presenta como referencia visual únicamente.

**Resultado obtenido**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23: no se puede agregar al carro para armar la precondición. Acción: declarar un SKU con stock en la dirección activa y sin stock en la tienda del caso.

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23: no se puede agregar al carro para armar la precondición. Acción: declarar un SKU con stock en la dirección activa y sin stock en la tienda del caso.

---

#### TC-B2C53-D-030 - Verificar que el total del minicarro no incluye el precio de los productos no disponibles [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- El carro contiene {SKU_VALID_001} x 1 (disponible) y {SKU_NO_DISPONIBLE} (no disponible)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{PRECIO_SKU_VALID_001} = None

{SKU_NO_DISPONIBLE} = 000000000400254005-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = (credencial)

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL} con la cuenta {USER_AUTH_001}.
2. El usuario agrega {SKU_VALID_001} x 1 y {SKU_NO_DISPONIBLE} al carrito.
3. El usuario hace clic en el ícono del carrito en el header.
4. El sistema despliega el panel flotante del minicarro.
5. El usuario verifica el total mostrado en el pie del minicarro.

**Resultado esperado**

El total del minicarro es igual al precio de {SKU_VALID_001} × 1 ({PRECIO_SKU_VALID_001}). El precio de {SKU_NO_DISPONIBLE} no está incluido en el total.

**Resultado obtenido**

Causa: token(s) sin fila en el Excel de data: {PRECIO_SKU_VALID_001}. Acción: cargar el dato en el Excel de data.

**Observación**

Causa: token(s) sin fila en el Excel de data: {PRECIO_SKU_VALID_001}. Acción: cargar el dato en el Excel de data.

---

<!-- qa-evidence-state
{
 "header": {
  "browsers": {
   "desktop": "chromium"
  },
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "environment": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-53",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-53 Test Cases.xlsx",
  "title": "Minicarro",
  "updated_at": "2026-10-20"
 },
 "history": {
  "2026-10-20": [
   "TC-B2C53-D-001",
   "TC-B2C53-D-002",
   "TC-B2C53-D-003",
   "TC-B2C53-D-004",
   "TC-B2C53-D-005",
   "TC-B2C53-D-006",
   "TC-B2C53-D-007",
   "TC-B2C53-D-008",
   "TC-B2C53-D-009",
   "TC-B2C53-D-010",
   "TC-B2C53-D-011",
   "TC-B2C53-D-012",
   "TC-B2C53-D-013",
   "TC-B2C53-D-014",
   "TC-B2C53-D-015",
   "TC-B2C53-D-017",
   "TC-B2C53-D-019",
   "TC-B2C53-D-020",
   "TC-B2C53-D-021",
   "TC-B2C53-D-022",
   "TC-B2C53-D-023",
   "TC-B2C53-D-024",
   "TC-B2C53-D-025",
   "TC-B2C53-D-026",
   "TC-B2C53-D-027",
   "TC-B2C53-D-028",
   "TC-B2C53-D-029",
   "TC-B2C53-D-030"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se muestra un skeleton de carga en el panel del minicarro hasta que se obtienen los datos del carrito.",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-001",
   "name": "Verificar que al abrir el minicarro se muestra un skeleton mientras carga el carrito [Desktop] [Guest]",
   "observation": "Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.",
   "observed": "Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- El carro contiene {SKU_VALID_001}\n- DevTools abierto con throttling de red \"Slow 3G\"",
   "spec": "tests/B2C-53.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario hace clic en el ícono del carrito en el header.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Cada producto muestra thumbnail, nombre, unidad de medida, precio y cantidad con controles +/−; la lista es completa y scrolleable (no colapsa).",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-002",
   "name": "Verificar que el minicarro lista los productos con thumbnail, nombre, unidad, precio y cantidad [Desktop] [Guest]",
   "observation": "Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.",
   "observed": "Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- El carro contiene {SKU_VALID_001} x 1 y {SKU_PESABLE} con 0,5 kg",
   "spec": "tests/B2C-53.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario hace clic en el ícono del carrito en el header.\n3. El sistema despliega el panel flotante del minicarro.\n4. El usuario revisa cada producto listado.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_PESABLE} = 000000000000037972-KG\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El panel muestra el total del carrito, el link \"Vaciar carro 🗑\", los CTAs \"Ver mi carro\" e \"Ir a pagar\", y el ícono del carrito muestra 2.",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-003",
   "name": "Verificar que el minicarro muestra total, Vaciar carro, Ver mi carro, Ir a pagar e indicador [Desktop] [Guest]",
   "observation": "Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.",
   "observed": "Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- El carro contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 1",
   "spec": "tests/B2C-53.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario hace clic en el ícono del carrito en el header.\n3. El sistema despliega el panel flotante del minicarro.\n4. El usuario revisa el total, las acciones del panel y el indicador del ícono del carrito.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "{SKU_NO_DISPONIBLE} se muestra en una sección de no disponibles debajo de los disponibles, sin acciones de gestión (definidas en B2C-39).",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-004",
   "name": "Verificar que los productos no disponibles se muestran debajo como referencia visual [Desktop] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23: no se puede agregar al carro para armar la precondición. Acción: declarar un SKU con stock en la dirección activa y sin stock en la tienda del caso.",
   "observed": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23: no se puede agregar al carro para armar la precondición. Acción: declarar un SKU con stock en la dirección activa y sin stock en la tienda del caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "spec": "tests/B2C-53.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario hace clic en el ícono del carrito en el header.\n3. El sistema despliega el panel flotante del minicarro.\n4. El usuario revisa la sección de productos no disponibles del minicarro.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_NO_DISPONIBLE} = 000000000400254005-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_SIN_STOCK} = Unimarc Los leones\n{USER_AUTH_001} = (credencial)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El panel muestra imagen, subtítulo \"Tu carro está vacío\", un mensaje que invita a seguir comprando y el CTA \"Ir a comprar\"; el ícono del carrito no muestra número.",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-005",
   "name": "Verificar que con el carro vacío el minicarro muestra el estado vacío e Ir a comprar [Desktop] [Guest]",
   "observation": "Esperado: con el carro vacío el panel muestra imagen, 'Tu carro está vacío', el mensaje y 'Ir a comprar', y el ícono del carrito no muestra número. Obtenido: el panel cumple, pero el ícono del carrito del header muestra '0' (aria-label 'Mi carrito, número de artículos: 0'). tests/B2C-53.spec.ts.",
   "observed": "Esperado: con el carro vacío el panel muestra imagen, 'Tu carro está vacío', el mensaje y 'Ir a comprar', y el ícono del carrito no muestra número. Obtenido: el panel cumple, pero el ícono del carrito del header muestra '0' (aria-label 'Mi carrito, número de artículos: 0'). tests/B2C-53.spec.ts.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- El carro está vacío",
   "screenshots": [
    {
     "caption": "Paso 3 — minicarro vacio",
     "file": "TC-B2C53-D-005-p03-minicarro-vacio.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C53-D-005.png"
    }
   ],
   "spec": "tests/B2C-53.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario hace clic en el ícono del carrito en el header.\n3. El sistema despliega el panel flotante del minicarro.\n4. El usuario revisa el panel y el ícono del carrito.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El panel se abre con la pantalla de error \"No pudimos mostrar tu carro. Tenemos problemas con cargar tus productos. Por favor, inténtalo otra vez. (CRT-020)\" y los botones \"Reintentar\" y \"Volver al Inicio\".",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-006",
   "name": "Verificar que un error al cargar el minicarro muestra la pantalla de error CRT-020 [Desktop] [Guest]",
   "observation": "Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.",
   "observed": "Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- El carro contiene {SKU_VALID_001}\n- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-53.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario hace clic en el ícono del carrito en el header.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_API_ENDPOINT} = *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/customer/shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/abk0k1kXsWxHARxbs2xaYYxKs1/baskets\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El minicarro vuelve a solicitar el carrito y muestra {SKU_VALID_001}.",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-007",
   "name": "Verificar que Reintentar con éxito recarga el minicarro y muestra los productos [Desktop] [Guest]",
   "observation": "Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.",
   "observed": "Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- El carro contiene {SKU_VALID_001}\n- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-53.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario hace clic en el ícono del carrito en el header.\n3. El sistema muestra la pantalla de error CRT-020.\n4. El usuario desactiva en DevTools el bloqueo de la request {CART_API_ENDPOINT}.\n5. El usuario hace clic en \"Reintentar\".\n6. El sistema muestra el skeleton de carga.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_API_ENDPOINT} = *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/customer/shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/abk0k1kXsWxHARxbs2xaYYxKs1/baskets\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Tras el skeleton, el minicarro vuelve a mostrar la pantalla de error CRT-020 con \"Reintentar\" y \"Volver al Inicio\".",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-008",
   "name": "Verificar que Reintentar con fallo mantiene la pantalla de error del minicarro [Desktop] [Guest]",
   "observation": "Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.",
   "observed": "Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- El carro contiene {SKU_VALID_001}\n- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-53.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario hace clic en el ícono del carrito en el header.\n3. El sistema muestra la pantalla de error CRT-020.\n4. El usuario hace clic en \"Reintentar\".\n5. El sistema muestra el skeleton de carga.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_API_ENDPOINT} = *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/customer/shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/abk0k1kXsWxHARxbs2xaYYxKs1/baskets\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El minicarro se cierra y el usuario es redirigido al Home ({BASE_URL}).",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-009",
   "name": "Verificar que Volver al Inicio cierra el minicarro y redirige al Home [Desktop] [Guest]",
   "observation": "Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.",
   "observed": "Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: PLP ({PLP_URL})\n- El carro contiene {SKU_VALID_001}\n- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-53.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {PLP_URL}.\n2. El usuario hace clic en el ícono del carrito en el header.\n3. El sistema muestra la pantalla de error CRT-020.\n4. El usuario hace clic en \"Volver al Inicio\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_API_ENDPOINT} = *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/customer/shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/abk0k1kXsWxHARxbs2xaYYxKs1/baskets\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El indicador del ícono del carrito pasa de 1 a 2 y luego a 3 en tiempo real, sin recargar la página.",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-010",
   "name": "Verificar que con el minicarro cerrado el indicador del carrito se actualiza en tiempo real [Desktop] [Guest]",
   "observation": "Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.",
   "observed": "Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: PLP ({PLP_URL})\n- El carro contiene {SKU_VALID_001} x 1\n- El minicarro está cerrado",
   "spec": "tests/B2C-53.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {PLP_URL}.\n2. El usuario hace clic en \"Agregar\" en un producto unitario de la PLP.\n3. El usuario hace clic en el + del mismo producto.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El indicador muestra 4 (3 unidades de {SKU_VALID_001} + 1 por {SKU_PESABLE}).",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-011",
   "name": "Verificar que el indicador cuenta los unitarios por cantidad y los pesables como 1 [Desktop] [Guest]",
   "observation": "Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.",
   "observed": "Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- El carro contiene {SKU_VALID_001} x 3 y {SKU_PESABLE} con 1,5 kg",
   "spec": "tests/B2C-53.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario revisa el número del indicador del ícono del carrito.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_PESABLE} = 000000000000037972-KG\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El usuario es redirigido al carro completo ({CART_URL}).",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-012",
   "name": "Verificar que con el mínimo cumplido Ver mi carro redirige al carro completo [Desktop] [Logueado]",
   "observed": "Con {SKU_VALID_001} x 11 (subtotal $27.390), 'Ver mi carro' del minicarro lleva al carro completo (/cart).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Método de entrega activo",
   "screenshots": [
    {
     "caption": "Paso 3 — minicarro sobre el minimo",
     "file": "TC-B2C53-D-012-p03-minicarro-sobre-el-minimo.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C53-D-012.png"
    }
   ],
   "spec": "tests/B2C-53.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario hace clic en el ícono del carrito en el header.\n3. El sistema despliega el panel flotante del minicarro.\n4. El usuario hace clic en \"Ver mi carro\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (credencial)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El usuario es redirigido directamente a Mis Envíos, sin mostrarse el modal \"¡Que no se te olviden!\" (B2C-41).",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-013",
   "name": "Verificar que con el mínimo cumplido Ir a pagar lleva directo a Mis Envíos [Desktop] [Logueado]",
   "observed": "Con {SKU_VALID_001} x 11, 'Ir a pagar' del minicarro lleva directo a Mis Envíos (/checkout/entrega) sin mostrar '¡Que no se te olviden!'.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Método de entrega activo\n- La cuenta tiene productos My Usuals o favoritos",
   "screenshots": [
    {
     "caption": "Paso 3 — minicarro sobre el minimo",
     "file": "TC-B2C53-D-013-p03-minicarro-sobre-el-minimo.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C53-D-013.png"
    }
   ],
   "spec": "tests/B2C-53.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario hace clic en el ícono del carrito en el header.\n3. El sistema despliega el panel flotante del minicarro.\n4. El usuario hace clic en \"Ir a pagar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (credencial)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se muestra el banner \"¡Solo te faltan $X para ir a pagar!\" (X = {MONTO_MINIMO_COMPRA} − subtotal) con botón X, la línea \"Mínimo de compra ${MONTO_MINIMO_COMPRA}\" y el botón \"Ir a pagar\" deshabilitado.",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-014",
   "name": "Verificar que sin el mínimo el minicarro muestra el faltante y deshabilita Ir a pagar [Desktop] [Logueado]",
   "observed": "Con {SKU_VALID_001} x 1 el minicarro muestra '¡Solo te faltan $X para ir a pagar!' (X = 20.000 − subtotal) con su X, la línea 'Mínimo de compra $20.000' e 'Ir a pagar' deshabilitado.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x 1 y el subtotal es menor a {MONTO_MINIMO_COMPRA}\n- Método de entrega activo",
   "screenshots": [
    {
     "caption": "Paso 4 — minicarro bajo el minimo",
     "file": "TC-B2C53-D-014-p04-minicarro-bajo-el-minimo.png"
    }
   ],
   "spec": "tests/B2C-53.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario hace clic en el ícono del carrito en el header.\n3. El sistema despliega el panel flotante del minicarro.\n4. El usuario revisa el panel del minicarro.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (credencial)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El banner se cierra y el botón \"Ir a pagar\" sigue deshabilitado.",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-015",
   "name": "Verificar que el banner de faltante para el mínimo se cierra con la X [Desktop] [Logueado]",
   "observed": "La X cierra el banner de faltante y 'Ir a pagar' sigue deshabilitado.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x 1 y el subtotal es menor a {MONTO_MINIMO_COMPRA}\n- Método de entrega activo",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C53-D-015.png"
    }
   ],
   "spec": "tests/B2C-53.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario hace clic en el ícono del carrito en el header.\n3. El sistema despliega el panel flotante del minicarro.\n4. El usuario hace clic en la X del banner \"¡Solo te faltan $X para ir a pagar!\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (credencial)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El sistema redirige al usuario a la sección del carro ({CART_URL}).",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-017",
   "name": "Verificar que un invitado que hace clic en \"Ver mi carro\" es redirigido a la sección del carro [Desktop] [Guest]",
   "observation": "Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.",
   "observed": "Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- El carro contiene {SKU_VALID_001}",
   "spec": "tests/B2C-53.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario hace clic en el ícono del carrito en el header.\n3. El sistema despliega el panel flotante del minicarro.\n4. El usuario hace clic en \"Ver mi carro\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El modal muestra imagen, título \"Vaciar carro\", subtítulo \"¿Estas seguro de que quieres eliminar todos los producots de tu carro?\" y los botones \"Si, eliminar\" y \"No, Gracias\".",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-019",
   "name": "Verificar que Vaciar carro abre el modal de confirmación con Si, eliminar y No, Gracias [Desktop] [Guest]",
   "observation": "Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.",
   "observed": "Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- El carro contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 1",
   "spec": "tests/B2C-53.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario hace clic en el ícono del carrito en el header.\n3. El sistema despliega el panel flotante del minicarro.\n4. El usuario hace clic en el link \"Vaciar carro 🗑\".\n5. El sistema despliega el modal de confirmación \"Vaciar carro\".\n6. El usuario revisa el contenido del modal.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El total del minicarro refleja el precio de {SKU_UNIPAY_001} con el descuento Unipay aplicado.",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-020",
   "name": "Verificar que con Unipay activo el total del minicarro refleja el descuento Unipay [Desktop] [Logueado]",
   "observation": "Causa: {SKU_UNIPAY_001} (000000000000661945-UN) no tiene precio Unipay vigente: la PDP y el carro muestran solo $4.750. Acción: declarar un SKU con promo Unipay vigente.",
   "observed": "Causa: {SKU_UNIPAY_001} (000000000000661945-UN) no tiene precio Unipay vigente: la PDP y el carro muestran solo $4.750. Acción: declarar un SKU con promo Unipay vigente.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- Sesión iniciada con la cuenta {COMPRADOR_UNIPAY_USER}\n- La cuenta tiene membresía Unipay activa\n- El carro contiene {SKU_UNIPAY_001} (producto con descuento Unipay)",
   "spec": "tests/B2C-53.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario hace clic en el ícono del carrito en el header.\n3. El sistema despliega el panel flotante del minicarro.\n4. El usuario revisa el precio del producto y el total del panel.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_UNIPAY_PASSWORD} = (credencial)\n{COMPRADOR_UNIPAY_USER} = daunuruco+comprador@avatar-global.com\n{SKU_UNIPAY_001} = 000000000000661945-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El panel pasa al estado vacío (\"Tu carro está vacío\") y el indicador del ícono del carrito se actualiza a 0.",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-021",
   "name": "Verificar que confirmar el vaciado muestra spinner y deja el minicarro vacío [Desktop] [Guest]",
   "observation": "Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.",
   "observed": "Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- El carro contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 1",
   "spec": "tests/B2C-53.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario hace clic en el ícono del carrito en el header.\n3. El sistema despliega el panel flotante del minicarro.\n4. El usuario hace clic en el link \"Vaciar carro 🗑\".\n5. El sistema despliega el modal de confirmación \"Vaciar carro\".\n6. El usuario hace clic en \"Si, eliminar\".\n7. El sistema muestra un spinner en el botón.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El modal se cierra, el carrito mantiene {SKU_VALID_001} y {SKU_UNITARIO} y se muestra el toast \"¡Lo sentimos! No pudimos vaciar tu carro, vuelve a intentarlo\" (CRT-076) que persiste hasta cerrarlo con la X.",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-022",
   "name": "Verificar que un error al vaciar cierra el modal, mantiene los productos y muestra CRT-076 [Desktop] [Guest]",
   "observation": "Causa: token(s) en TBD en el Excel de data: {VACIAR_CARRO_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.",
   "observed": "Causa: token(s) en TBD en el Excel de data: {VACIAR_CARRO_API_ENDPOINT}. Acción: cargar el dato en el Excel de data.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- El carro contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 1\n- DevTools abierto con bloqueo de la request {VACIAR_CARRO_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-53.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario hace clic en el ícono del carrito en el header.\n3. El sistema despliega el panel flotante del minicarro.\n4. El usuario hace clic en el link \"Vaciar carro 🗑\".\n5. El sistema despliega el modal de confirmación \"Vaciar carro\".\n6. El usuario hace clic en \"Si, eliminar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{VACIAR_CARRO_API_ENDPOINT} = None",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El modal se cierra y el minicarro mantiene {SKU_VALID_001} y {SKU_UNITARIO} con sus cantidades.",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-023",
   "name": "Verificar que No, Gracias cierra el modal de vaciado sin cambios en el carro [Desktop] [Guest]",
   "observation": "Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.",
   "observed": "Causa: el caso es de invitado con productos en el carro y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección. Acción: declarar la dirección del invitado en la fila.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- El carro contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 1",
   "spec": "tests/B2C-53.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario hace clic en el ícono del carrito en el header.\n3. El sistema despliega el panel flotante del minicarro.\n4. El usuario hace clic en el link \"Vaciar carro 🗑\".\n5. El sistema despliega el modal de confirmación \"Vaciar carro\".\n6. El usuario hace clic en \"No, Gracias\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El producto {SKU_CON_PROMO_COMBINA} muestra el mensaje \"Combina\" o \"Completa\" junto a su información.",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-024",
   "name": "Verificar que un producto con promo \"Combina/Completa\" muestra el mensaje en el minicarro [Desktop] [Logueado]",
   "observation": "Causa: token(s) sin fila en el Excel de data: {SKU_CON_PROMO_COMBINA}. Acción: cargar el dato en el Excel de data.",
   "observed": "Causa: token(s) sin fila en el Excel de data: {SKU_CON_PROMO_COMBINA}. Acción: cargar el dato en el Excel de data.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- El carro contiene {SKU_CON_PROMO_COMBINA}",
   "spec": "tests/B2C-53.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL} con la cuenta {USER_AUTH_001}.\n2. El usuario agrega {SKU_CON_PROMO_COMBINA} al carrito.\n3. El usuario hace clic en el ícono del carrito en el header.\n4. El sistema despliega el panel flotante del minicarro.\n5. El usuario localiza {SKU_CON_PROMO_COMBINA} en el listado del minicarro.\n6. El usuario verifica que el producto muestra el mensaje \"Combina\" o \"Completa\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{SKU_CON_PROMO_COMBINA} = None\n{USER_AUTH_001} = (credencial)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "La cantidad del producto {SKU_VALID_001} se incrementa en 1. El subtotal del minicarro refleja el nuevo precio. El indicador del ícono del carrito se actualiza al nuevo total de ítems.",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-025",
   "name": "Verificar que incrementar la cantidad de un producto en el minicarro actualiza el subtotal e indicador [Desktop] [Logueado]",
   "observed": "El + del minicarro pasa la cantidad de 1 a 2, el subtotal se duplica y el indicador del ícono pasa a 2.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- El carro contiene {SKU_VALID_001} x 1",
   "screenshots": [
    {
     "caption": "Paso 5 — minicarro con 1 un",
     "file": "TC-B2C53-D-025-p05-minicarro-con-1-un.png"
    },
    {
     "caption": "Paso 7 — minicarro con 2 un",
     "file": "TC-B2C53-D-025-p07-minicarro-con-2-un.png"
    }
   ],
   "spec": "tests/B2C-53.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL} con la cuenta {USER_AUTH_001}.\n2. El usuario agrega {SKU_VALID_001} x 1 al carrito.\n3. El usuario hace clic en el ícono del carrito en el header.\n4. El sistema despliega el panel flotante del minicarro.\n5. El usuario anota el subtotal actual y la cantidad del indicador del ícono.\n6. El usuario hace clic en el control + del producto {SKU_VALID_001}.\n7. El sistema actualiza la cantidad del producto y el subtotal del minicarro.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = (credencial)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "La cantidad del producto {SKU_VALID_001} se decrementa en 1 (de 2 a 1). El subtotal del minicarro refleja el nuevo precio. El indicador del ícono del carrito se actualiza al nuevo total de ítems.",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-026",
   "name": "Verificar que decrementar la cantidad de un producto en el minicarro actualiza el subtotal e indicador [Desktop] [Logueado]",
   "observed": "El − del minicarro pasa la cantidad de 2 a 1, el subtotal baja a la mitad y el indicador pasa a 1.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- El carro contiene {SKU_VALID_001} x 2",
   "screenshots": [
    {
     "caption": "Paso 5 — minicarro con 2 un",
     "file": "TC-B2C53-D-026-p05-minicarro-con-2-un.png"
    },
    {
     "caption": "Paso 7 — minicarro con 1 un",
     "file": "TC-B2C53-D-026-p07-minicarro-con-1-un.png"
    }
   ],
   "spec": "tests/B2C-53.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL} con la cuenta {USER_AUTH_001}.\n2. El usuario agrega {SKU_VALID_001} x 2 al carrito.\n3. El usuario hace clic en el ícono del carrito en el header.\n4. El sistema despliega el panel flotante del minicarro.\n5. El usuario anota el subtotal actual y la cantidad del indicador del ícono.\n6. El usuario hace clic en el control − del producto {SKU_VALID_001}.\n7. El sistema actualiza la cantidad del producto y el subtotal del minicarro.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = (credencial)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El producto {SKU_VALID_001} desaparece del listado del minicarro. El subtotal se actualiza descontando el precio del producto eliminado. El indicador del ícono del carrito se actualiza.",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-027",
   "name": "Verificar que decrementar la cantidad a 0 elimina el producto del minicarro [Desktop] [Logueado]",
   "observed": "Con 1 unidad, el control − (tacho) elimina el producto del minicarro, el subtotal descuenta su precio y el indicador se actualiza.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- El carro contiene {SKU_VALID_001} x 1",
   "screenshots": [
    {
     "caption": "Paso 5 — minicarro con 1 un",
     "file": "TC-B2C53-D-027-p05-minicarro-con-1-un.png"
    },
    {
     "caption": "Paso 7 — minicarro sin el producto",
     "file": "TC-B2C53-D-027-p07-minicarro-sin-el-producto.png"
    }
   ],
   "spec": "tests/B2C-53.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL} con la cuenta {USER_AUTH_001}.\n2. El usuario agrega {SKU_VALID_001} x 1 al carrito.\n3. El usuario hace clic en el ícono del carrito en el header.\n4. El sistema despliega el panel flotante del minicarro.\n5. El usuario hace clic en el control − del producto {SKU_VALID_001} (cantidad actual: 1).\n6. El sistema elimina el producto del minicarro y actualiza el subtotal.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = (credencial)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El control + del producto {SKU_VALID_001} se muestra deshabilitado (no clickeable). La cantidad del producto permanece en {CART_LIMIT_QTY}.",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-028",
   "name": "Verificar que al alcanzar el límite máximo de cantidad el control + queda deshabilitado [Desktop] [Logueado]",
   "observation": "Causa: token(s) sin fila en el Excel de data: {CART_LIMIT_QTY}. Acción: cargar el dato en el Excel de data.",
   "observed": "Causa: token(s) sin fila en el Excel de data: {CART_LIMIT_QTY}. Acción: cargar el dato en el Excel de data.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- El carro contiene {SKU_VALID_001} x {CART_LIMIT_QTY}",
   "spec": "tests/B2C-53.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL} con la cuenta {USER_AUTH_001}.\n2. El usuario agrega {SKU_VALID_001} al carrito hasta alcanzar {CART_LIMIT_QTY}.\n3. El usuario hace clic en el ícono del carrito en el header.\n4. El sistema despliega el panel flotante del minicarro.\n5. El usuario verifica el estado del control + del producto {SKU_VALID_001}.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_LIMIT_QTY} = None\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = (credencial)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El producto {SKU_NO_DISPONIBLE} aparece en una sección separada debajo de los disponibles. No muestra controles +/− ni acciones de compra. Se presenta como referencia visual únicamente.",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-029",
   "name": "Verificar que un producto no disponible se muestra sin controles +/− en el minicarro [Desktop] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23: no se puede agregar al carro para armar la precondición. Acción: declarar un SKU con stock en la dirección activa y sin stock en la tienda del caso.",
   "observed": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23: no se puede agregar al carro para armar la precondición. Acción: declarar un SKU con stock en la dirección activa y sin stock en la tienda del caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- El carro contiene {SKU_VALID_001} (disponible) y {SKU_NO_DISPONIBLE} (no disponible)",
   "spec": "tests/B2C-53.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL} con la cuenta {USER_AUTH_001}.\n2. El usuario agrega {SKU_VALID_001} y {SKU_NO_DISPONIBLE} al carrito.\n3. El usuario hace clic en el ícono del carrito en el header.\n4. El sistema despliega el panel flotante del minicarro.\n5. El usuario ubica la sección de productos no disponibles en el minicarro.\n6. El usuario verifica los controles del producto {SKU_NO_DISPONIBLE}.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{SKU_NO_DISPONIBLE} = 000000000400254005-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = (credencial)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El total del minicarro es igual al precio de {SKU_VALID_001} × 1 ({PRECIO_SKU_VALID_001}). El precio de {SKU_NO_DISPONIBLE} no está incluido en el total.",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-030",
   "name": "Verificar que el total del minicarro no incluye el precio de los productos no disponibles [Desktop] [Logueado]",
   "observation": "Causa: token(s) sin fila en el Excel de data: {PRECIO_SKU_VALID_001}. Acción: cargar el dato en el Excel de data.",
   "observed": "Causa: token(s) sin fila en el Excel de data: {PRECIO_SKU_VALID_001}. Acción: cargar el dato en el Excel de data.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- El carro contiene {SKU_VALID_001} x 1 (disponible) y {SKU_NO_DISPONIBLE} (no disponible)",
   "spec": "tests/B2C-53.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL} con la cuenta {USER_AUTH_001}.\n2. El usuario agrega {SKU_VALID_001} x 1 y {SKU_NO_DISPONIBLE} al carrito.\n3. El usuario hace clic en el ícono del carrito en el header.\n4. El sistema despliega el panel flotante del minicarro.\n5. El usuario verifica el total mostrado en el pie del minicarro.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{PRECIO_SKU_VALID_001} = None\n{SKU_NO_DISPONIBLE} = 000000000400254005-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = (credencial)",
   "viewport": "1440x900"
  }
 ]
}
-->


---
