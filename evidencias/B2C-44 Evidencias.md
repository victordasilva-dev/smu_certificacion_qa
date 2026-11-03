# Re-ejecución de casos con bug (B2C-44)

| Campo | Valor |
|---|---|
| Suite | B2C-44 |
| Última actualización | 2026-10-23 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | chromium |
| Origen de los TC | Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-44 WEB Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 16 |
| Rechazado | 10 |
| Aprobado | 8 |
| **Total** | **34** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-23 | 8 | TC-B2C44-D-001, TC-B2C44-D-005, TC-B2C44-D-006, TC-B2C44-D-011, TC-B2C44-M-001, TC-B2C44-M-005, TC-B2C44-M-006, TC-B2C44-M-011 |
| 2026-10-21 | 34 | TC-B2C44-D-001, TC-B2C44-D-002, TC-B2C44-D-003, TC-B2C44-D-004, TC-B2C44-D-005, TC-B2C44-D-006, TC-B2C44-D-007, TC-B2C44-D-008, TC-B2C44-D-009, TC-B2C44-D-010, TC-B2C44-D-011, TC-B2C44-D-012, TC-B2C44-D-013, TC-B2C44-D-014, TC-B2C44-D-015, TC-B2C44-D-016, TC-B2C44-D-017, TC-B2C44-M-001, TC-B2C44-M-002, TC-B2C44-M-003, TC-B2C44-M-004, TC-B2C44-M-005, TC-B2C44-M-006, TC-B2C44-M-007, TC-B2C44-M-008, TC-B2C44-M-009, TC-B2C44-M-010, TC-B2C44-M-011, TC-B2C44-M-012, TC-B2C44-M-013, TC-B2C44-M-014, TC-B2C44-M-015, TC-B2C44-M-016, TC-B2C44-M-017 |
| 2026-10-20 | 34 | TC-B2C44-D-001, TC-B2C44-D-002, TC-B2C44-D-003, TC-B2C44-D-004, TC-B2C44-D-005, TC-B2C44-D-006, TC-B2C44-D-007, TC-B2C44-D-008, TC-B2C44-D-009, TC-B2C44-D-010, TC-B2C44-D-011, TC-B2C44-D-012, TC-B2C44-D-013, TC-B2C44-D-014, TC-B2C44-D-015, TC-B2C44-D-016, TC-B2C44-D-017, TC-B2C44-M-001, TC-B2C44-M-002, TC-B2C44-M-003, TC-B2C44-M-004, TC-B2C44-M-005, TC-B2C44-M-006, TC-B2C44-M-007, TC-B2C44-M-008, TC-B2C44-M-009, TC-B2C44-M-010, TC-B2C44-M-011, TC-B2C44-M-012, TC-B2C44-M-013, TC-B2C44-M-014, TC-B2C44-M-015, TC-B2C44-M-016, TC-B2C44-M-017 |

## Detalle por caso de prueba

### TC-B2C44-D-001 - Verificar que el shelf de un ítem sin promoción muestra todos sus elementos [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-23 |
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

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_003}=TBD
- {SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_VALID_001}.
4. El usuario revisa cada elemento del shelf.

**Resultado esperado**

El shelf muestra ícono X arriba a la derecha, imagen 90x90, "Marca | Nombre", precio unitario "$X.XXX c/u", cantidad "N un." alineada a la derecha, controles de cantidad e ícono lápiz + link "Agregar instrucciones".

**Resultado obtenido**

Obtenido: el shelf del carro muestra el texto «Eliminar» en vez del ícono X arriba a la derecha. Bug: B2C-1175. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir la corrida del 2026-10-12, no por corrección).

**Observación**

Obtenido: el shelf del carro muestra el texto «Eliminar» en vez del ícono X arriba a la derecha. Bug: B2C-1175. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir la corrida del 2026-10-12, no por corrección).

**Evidencia**

![Paso 3 — shelf de sku valid 001](<B2C-44 Evidencias/TC-B2C44-D-001-p03-shelf-de-sku-valid-001.png>)

![Estado final](<B2C-44 Evidencias/TC-B2C44-D-001.png>)

---

### TC-B2C44-D-002 - Verificar que un nombre de producto largo se trunca con puntos suspensivos [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
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

{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea

{SKU_NOMBRE_LARGO} = 000000000000662457-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_NOMBRE_LARGO}.
4. El usuario revisa el nombre del producto.

**Resultado esperado**

El texto "Marca | Nombre" se muestra truncado con "…" sin desbordar el shelf.

**Resultado obtenido**

El nombre largo de {SKU_NOMBRE_LARGO} se trunca con «…» y no desborda el shelf.

**Evidencia**

![Paso 3 — shelf de sku nombre largo](<B2C-44 Evidencias/TC-B2C44-D-002-p03-shelf-de-sku-nombre-largo.png>)

![Estado final](<B2C-44 Evidencias/TC-B2C44-D-002.png>)

---

### TC-B2C44-D-003 - Verificar que un pesable muestra la cantidad en kg en el shelf [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-21 |
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

{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea

{SKU_PESABLE} = 000000000000037972-KG

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_PESABLE}.
4. El usuario revisa la cantidad del ítem.

**Resultado esperado**

La cantidad se muestra como "1 kg." alineada a la derecha.

**Resultado obtenido**

Esperado: la cantidad del pesable se muestra en kg. Obtenido: el shelf de {SKU_PESABLE} (Mangos granel 500 g) muestra «$2.790 c/u» y «1 un.»; su ficha sí muestra «0.5 kg» y «($5.580 x kg)». Bug B2C-1271.

**Observación**

Esperado: la cantidad del pesable se muestra en kg. Obtenido: el shelf de {SKU_PESABLE} (Mangos granel 500 g) muestra «$2.790 c/u» y «1 un.»; su ficha sí muestra «0.5 kg» y «($5.580 x kg)». Bug B2C-1271.

**Evidencia**

![Paso 3 — shelf de sku pesable](<B2C-44 Evidencias/TC-B2C44-D-003-p03-shelf-de-sku-pesable.png>)

---

### TC-B2C44-D-004 - Verificar que un invitado ve Agregar instrucciones y al tocarlo se abre el modal de instrucciones [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
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

{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_VALID_001}.
4. El usuario hace clic en el link "Agregar instrucciones".

**Resultado esperado**

Se muestra el ícono lápiz + link gris "Agregar instrucciones" y al presionarlo se abre el modal "¿Te gustaría algo en especial?" (B2C-45).

**Resultado obtenido**

El invitado ve el link «Agregar instrucciones» con su ícono y al tocarlo se abre el modal «¿Te gustaría algo en especial?».

**Evidencia**

![Paso 3 — shelf con agregar instrucciones](<B2C-44 Evidencias/TC-B2C44-D-004-p03-shelf-con-agregar-instrucciones.png>)

![Estado final](<B2C-44 Evidencias/TC-B2C44-D-004.png>)

---

### TC-B2C44-D-005 - Verificar que un ítem con porcentaje de descuento muestra badge, precio final y precio anterior [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-23 |
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

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_003}=TBD
- {SKU_PROM_PCT_DESCUENTO} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_PROM_PCT_DESCUENTO}.
4. El usuario revisa el área de precio del ítem.

**Resultado esperado**

El área de precio muestra el badge amarillo "X%", el precio con descuento en negro semibold con su PPUM y "Antes:" con el precio original tachado y su PPUM.

**Resultado obtenido**

Obtenido: el ítem con descuento por porcentaje (Kiwi bolsa 1 Kg, {SKU_PROM_PCT_DESCUENTO}) muestra «$2.601 c/u $2.341 c/u» sin badge «X%» ni «Antes:». Bug: B2C-1177. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir la corrida del 2026-10-12, no por corrección).

**Observación**

Obtenido: el ítem con descuento por porcentaje (Kiwi bolsa 1 Kg, {SKU_PROM_PCT_DESCUENTO}) muestra «$2.601 c/u $2.341 c/u» sin badge «X%» ni «Antes:». Bug: B2C-1177. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir la corrida del 2026-10-12, no por corrección).

**Evidencia**

![Paso 3 — shelf de sku prom pct descuento](<B2C-44 Evidencias/TC-B2C44-D-005-p03-shelf-de-sku-prom-pct-descuento.png>)

![Estado final](<B2C-44 Evidencias/TC-B2C44-D-005.png>)

---

### TC-B2C44-D-006 - Verificar que un ítem con promoción de precio fijo muestra precio final y precio anterior [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-23 |
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

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_003}=TBD
- {SKU_PROM_PRECIO_FIJO} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_PROM_PRECIO_FIJO}.
4. El usuario revisa el área de precio del ítem.

**Resultado esperado**

El área de precio muestra el badge, el precio fijo de la promo en negro semibold con su PPUM y "Antes:" con el precio original tachado.

**Resultado obtenido**

Obtenido: el ítem con promoción de precio fijo (Mermelada Watt's) muestra «$1.200 c/u» sin «Antes:» con el precio anterior tachado. Bug: B2C-1178. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir la corrida del 2026-10-12, no por corrección).

**Observación**

Obtenido: el ítem con promoción de precio fijo (Mermelada Watt's) muestra «$1.200 c/u» sin «Antes:» con el precio anterior tachado. Bug: B2C-1178. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir la corrida del 2026-10-12, no por corrección).

**Evidencia**

![Paso 3 — shelf de sku prom precio fijo](<B2C-44 Evidencias/TC-B2C44-D-006-p03-shelf-de-sku-prom-precio-fijo.png>)

![Estado final](<B2C-44 Evidencias/TC-B2C44-D-006.png>)

---

### TC-B2C44-D-007 - Verificar que un ítem con NxM incompleto muestra precio sin badge y el mensaje rojo Te faltan N [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
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

{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_PROM_NxM}.
4. El usuario revisa el área de precio del ítem.

**Resultado esperado**

Se muestra el precio unitario sin badge ni precio tachado y debajo el mensaje en rojo "Te faltan N para la promo".

**Resultado obtenido**

El shelf de {SKU_PROM_NxM} muestra el precio «$24.500 c/u» sin insignia ni precio tachado y el mensaje rojo «Te faltan 2 para la promo».

**Evidencia**

![Paso 3 — shelf de sku prom nxm](<B2C-44 Evidencias/TC-B2C44-D-007-p03-shelf-de-sku-prom-nxm.png>)

![Estado final](<B2C-44 Evidencias/TC-B2C44-D-007.png>)

---

### TC-B2C44-D-008 - Verificar que un ítem con precio Unipay muestra el precio regular y el tag Unipay [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
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

{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea

{SKU_UNIPAY_001} = 000000000000661945-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_UNIPAY_001}.
4. El usuario revisa el área de precio del ítem.

**Resultado esperado**

Se muestra "$X.XXX c/u" en negro y debajo el tag verde agua con ícono Unipay y "$Y.YYY c/u" en verde oscuro (Y < X), sin badge ni precio tachado.

**Resultado obtenido**

Causa: {SKU_UNIPAY_001} (Lavaloza Quix 1.5 L) no tiene precio Unipay vigente: su ficha trae solo la etiqueta «Promoción % Unipay» y un único precio ($4.750), y el carro muestra solo «$4.750 c/u» y «Subtotal», sin tag ni «Subtotal con Unipay». Acción: declarar un SKU con precio Unipay vigente. Verificado en vivo el 2026-10-21.

**Observación**

Causa: {SKU_UNIPAY_001} (Lavaloza Quix 1.5 L) no tiene precio Unipay vigente: su ficha trae solo la etiqueta «Promoción % Unipay» y un único precio ($4.750), y el carro muestra solo «$4.750 c/u» y «Subtotal», sin tag ni «Subtotal con Unipay». Acción: declarar un SKU con precio Unipay vigente. Verificado en vivo el 2026-10-21.

**Evidencia**

![Paso 3 — shelf de sku unipay 001](<B2C-44 Evidencias/TC-B2C44-D-008-p03-shelf-de-sku-unipay-001.png>)

---

### TC-B2C44-D-009 - Verificar que un ítem con descuento y promoción de medio de pago muestra ambas en orden [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
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

{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea

{SKU_PCT_Y_UNIPAY} = 000000000000668141-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_PCT_Y_UNIPAY}.
4. El usuario revisa el área de precio del ítem.

**Resultado esperado**

Se muestran en orden: badge % + precio con descuento + PPUM; tag del medio de pago con ícono + precio + PPUM; "Antes: $XX.XXX" tachado.

**Resultado obtenido**

Causa: {SKU_PCT_Y_UNIPAY} (Lavaloza Quix ultra 500 ml) no tiene promoción Unipay ni descuento: su ficha y el carro muestran un solo precio ($3.990). Acción: declarar un SKU con descuento y precio Unipay vigentes. Verificado en vivo el 2026-10-21.

**Observación**

Causa: {SKU_PCT_Y_UNIPAY} (Lavaloza Quix ultra 500 ml) no tiene promoción Unipay ni descuento: su ficha y el carro muestran un solo precio ($3.990). Acción: declarar un SKU con descuento y precio Unipay vigentes. Verificado en vivo el 2026-10-21.

**Evidencia**

![Paso 3 — shelf de sku pct y unipay](<B2C-44 Evidencias/TC-B2C44-D-009-p03-shelf-de-sku-pct-y-unipay.png>)

---

### TC-B2C44-D-010 - Verificar que un ítem con NxM incompleto y precio Unipay muestra ambas promociones en orden [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
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

{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea

{SKU_NXM_Y_UNIPAY} = None

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_NXM_Y_UNIPAY}.
4. El usuario revisa el área de precio del ítem.

**Resultado esperado**

Se muestran en orden: "$X.XXX c/u" en negro, tag del medio de pago (ícono + precio) y el mensaje rojo "Te faltan N para la promo".

**Resultado obtenido**

Causa: {SKU_NXM_Y_UNIPAY} está en TBD en el Excel de data, así que el caso no tiene producto. Acción: declarar el SKU. Verificado en vivo el 2026-10-21.

**Observación**

Causa: {SKU_NXM_Y_UNIPAY} está en TBD en el Excel de data, así que el caso no tiene producto. Acción: declarar el SKU. Verificado en vivo el 2026-10-21.

---

### TC-B2C44-D-011 - Verificar que un producto por peso muestra el precio por unidad de medida entre paréntesis [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-23 |
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

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_003}=TBD
- {SKU_PESABLE} = 000000000000037972-KG

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_PESABLE}.
4. El usuario revisa el área de precio del ítem.

**Resultado esperado**

El shelf muestra el PPUM entre paréntesis, por ejemplo "($2.990 x Kg)".

**Resultado obtenido**

Obtenido: el producto por peso (Mangos granel 500 g) muestra «$2.790 c/u» sin el PPUM entre paréntesis («($X x Kg)»). Bug: B2C-1179. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir la corrida del 2026-10-12, no por corrección).

**Observación**

Obtenido: el producto por peso (Mangos granel 500 g) muestra «$2.790 c/u» sin el PPUM entre paréntesis («($X x Kg)»). Bug: B2C-1179. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir la corrida del 2026-10-12, no por corrección).

**Evidencia**

![Paso 3 — shelf de sku pesable](<B2C-44 Evidencias/TC-B2C44-D-011-p03-shelf-de-sku-pesable.png>)

---

### TC-B2C44-D-012 - Verificar que con descuento y medio de pago el PPUM se muestra en ambos precios [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
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

{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea

{SKU_PESABLE_PCT_Y_UNIPAY} = 000000000000062644-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_PESABLE_PCT_Y_UNIPAY}.
4. El usuario revisa el área de precio del ítem.

**Resultado esperado**

El precio con descuento y el precio del medio de pago muestran cada uno su propio PPUM entre paréntesis.

**Resultado obtenido**

Causa: {SKU_PESABLE_PCT_Y_UNIPAY} (Kiwi bolsa 1 Kg) no tiene promoción Unipay: su ficha no la menciona y el carro muestra un solo precio ($2.601). Acción: declarar un SKU con descuento y precio Unipay vigentes. Verificado en vivo el 2026-10-21.

**Observación**

Causa: {SKU_PESABLE_PCT_Y_UNIPAY} (Kiwi bolsa 1 Kg) no tiene promoción Unipay: su ficha no la menciona y el carro muestra un solo precio ($2.601). Acción: declarar un SKU con descuento y precio Unipay vigentes. Verificado en vivo el 2026-10-21.

**Evidencia**

![Paso 3 — shelf de sku pesable pct y unipay](<B2C-44 Evidencias/TC-B2C44-D-012-p03-shelf-de-sku-pesable-pct-y-unipay.png>)

---

### TC-B2C44-M-001 - Verificar que el shelf de un ítem sin promoción muestra todos sus elementos [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-23 |
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

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_003}=TBD
- {SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_VALID_001}.
4. El usuario revisa cada elemento del shelf.

**Resultado esperado**

El shelf muestra imagen 90x90, "Marca | Nombre", precio unitario "$X.XXX c/u", cantidad "N un." alineada a la derecha, controles de cantidad e ícono lápiz + link "Agregar instrucciones".

**Resultado obtenido**

Obtenido: el shelf muestra el texto «Eliminar» en vez del ícono X y la imagen mide 60x60 px en vez de 90x90. Bug: B2C-1176. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir la corrida del 2026-10-12, no por corrección).

**Observación**

Obtenido: el shelf muestra el texto «Eliminar» en vez del ícono X y la imagen mide 60x60 px en vez de 90x90. Bug: B2C-1176. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir la corrida del 2026-10-12, no por corrección).

**Evidencia**

![Paso 3 — shelf de sku valid 001](<B2C-44 Evidencias/TC-B2C44-M-001-p03-shelf-de-sku-valid-001.png>)

![Estado final](<B2C-44 Evidencias/TC-B2C44-M-001.png>)

---

### TC-B2C44-M-002 - Verificar que un nombre de producto largo se trunca con puntos suspensivos [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
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

{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea

{SKU_NOMBRE_LARGO} = 000000000000662457-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_NOMBRE_LARGO}.
4. El usuario revisa el nombre del producto.

**Resultado esperado**

El texto "Marca | Nombre" se muestra truncado con "…" sin desbordar el shelf.

**Resultado obtenido**

El nombre largo de {SKU_NOMBRE_LARGO} se trunca con «…» y no desborda el shelf.

**Evidencia**

![Paso 3 — shelf de sku nombre largo](<B2C-44 Evidencias/TC-B2C44-M-002-p03-shelf-de-sku-nombre-largo.png>)

![Estado final](<B2C-44 Evidencias/TC-B2C44-M-002.png>)

---

### TC-B2C44-M-003 - Verificar que un pesable muestra la cantidad en kg en el shelf [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-21 |
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

{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea

{SKU_PESABLE} = 000000000000037972-KG

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_PESABLE}.
4. El usuario revisa la cantidad del ítem.

**Resultado esperado**

La cantidad se muestra como "1 kg." alineada a la derecha.

**Resultado obtenido**

Esperado: la cantidad del pesable se muestra en kg. Obtenido: el shelf de {SKU_PESABLE} (Mangos granel 500 g) muestra «$2.790 c/u» y «1 un.»; su ficha sí muestra «0.5 kg» y «($5.580 x kg)». Bug B2C-1272.

**Observación**

Esperado: la cantidad del pesable se muestra en kg. Obtenido: el shelf de {SKU_PESABLE} (Mangos granel 500 g) muestra «$2.790 c/u» y «1 un.»; su ficha sí muestra «0.5 kg» y «($5.580 x kg)». Bug B2C-1272.

**Evidencia**

![Paso 3 — shelf de sku pesable](<B2C-44 Evidencias/TC-B2C44-M-003-p03-shelf-de-sku-pesable.png>)

---

### TC-B2C44-M-004 - Verificar que un invitado ve Agregar instrucciones y al tocarlo se abre el modal de instrucciones [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
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

{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_VALID_001}.
4. El usuario toca el link "Agregar instrucciones".

**Resultado esperado**

Se muestra el ícono lápiz + link gris "Agregar instrucciones" y al presionarlo se abre el modal "¿Te gustaría algo en especial?" (B2C-45).

**Resultado obtenido**

El invitado ve el link «Agregar instrucciones» con su ícono y al tocarlo se abre el modal «¿Te gustaría algo en especial?».

**Evidencia**

![Paso 3 — shelf con agregar instrucciones](<B2C-44 Evidencias/TC-B2C44-M-004-p03-shelf-con-agregar-instrucciones.png>)

![Estado final](<B2C-44 Evidencias/TC-B2C44-M-004.png>)

---

### TC-B2C44-M-005 - Verificar que un ítem con porcentaje de descuento muestra badge, precio final y precio anterior [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-23 |
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

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_003}=TBD
- {SKU_PROM_PCT_DESCUENTO} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_PROM_PCT_DESCUENTO}.
4. El usuario revisa el área de precio del ítem.

**Resultado esperado**

El área de precio muestra el badge amarillo "X%", el precio con descuento en negro semibold con su PPUM y "Antes:" con el precio original tachado y su PPUM.

**Resultado obtenido**

Obtenido: el ítem con descuento por porcentaje (Kiwi bolsa 1 Kg, {SKU_PROM_PCT_DESCUENTO}) muestra «$2.601 c/u $2.341 c/u» sin badge «X%» ni «Antes:». Bug: B2C-1177. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir la corrida del 2026-10-12, no por corrección).

**Observación**

Obtenido: el ítem con descuento por porcentaje (Kiwi bolsa 1 Kg, {SKU_PROM_PCT_DESCUENTO}) muestra «$2.601 c/u $2.341 c/u» sin badge «X%» ni «Antes:». Bug: B2C-1177. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir la corrida del 2026-10-12, no por corrección).

**Evidencia**

![Paso 3 — shelf de sku prom pct descuento](<B2C-44 Evidencias/TC-B2C44-M-005-p03-shelf-de-sku-prom-pct-descuento.png>)

![Estado final](<B2C-44 Evidencias/TC-B2C44-M-005.png>)

---

### TC-B2C44-M-006 - Verificar que un ítem con promoción de precio fijo muestra precio final y precio anterior [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-23 |
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

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_003}=TBD
- {SKU_PROM_PRECIO_FIJO} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_PROM_PRECIO_FIJO}.
4. El usuario revisa el área de precio del ítem.

**Resultado esperado**

El área de precio muestra el badge, el precio fijo de la promo en negro semibold con su PPUM y "Antes:" con el precio original tachado.

**Resultado obtenido**

Obtenido: el ítem con promoción de precio fijo (Mermelada Watt's) muestra «$1.200 c/u» sin «Antes:» con el precio anterior tachado. Bug: B2C-1178. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir la corrida del 2026-10-12, no por corrección).

**Observación**

Obtenido: el ítem con promoción de precio fijo (Mermelada Watt's) muestra «$1.200 c/u» sin «Antes:» con el precio anterior tachado. Bug: B2C-1178. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir la corrida del 2026-10-12, no por corrección).

**Evidencia**

![Paso 3 — shelf de sku prom precio fijo](<B2C-44 Evidencias/TC-B2C44-M-006-p03-shelf-de-sku-prom-precio-fijo.png>)

![Estado final](<B2C-44 Evidencias/TC-B2C44-M-006.png>)

---

### TC-B2C44-M-007 - Verificar que un ítem con NxM incompleto muestra precio sin badge y el mensaje rojo Te faltan N [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
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

{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_PROM_NxM}.
4. El usuario revisa el área de precio del ítem.

**Resultado esperado**

Se muestra el precio unitario sin badge ni precio tachado y debajo el mensaje en rojo "Te faltan N para la promo".

**Resultado obtenido**

El shelf de {SKU_PROM_NxM} muestra el precio «$24.500 c/u» sin insignia ni precio tachado y el mensaje rojo «Te faltan 2 para la promo».

**Evidencia**

![Paso 3 — shelf de sku prom nxm](<B2C-44 Evidencias/TC-B2C44-M-007-p03-shelf-de-sku-prom-nxm.png>)

![Estado final](<B2C-44 Evidencias/TC-B2C44-M-007.png>)

---

### TC-B2C44-M-008 - Verificar que un ítem con precio Unipay muestra el precio regular y el tag Unipay [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
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

{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea

{SKU_UNIPAY_001} = 000000000000661945-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_UNIPAY_001}.
4. El usuario revisa el área de precio del ítem.

**Resultado esperado**

Se muestra "$X.XXX c/u" en negro y debajo el tag verde agua con ícono Unipay y "$Y.YYY c/u" en verde oscuro (Y < X), sin badge ni precio tachado.

**Resultado obtenido**

Causa: {SKU_UNIPAY_001} (Lavaloza Quix 1.5 L) no tiene precio Unipay vigente: su ficha trae solo la etiqueta «Promoción % Unipay» y un único precio ($4.750), y el carro muestra solo «$4.750 c/u» y «Subtotal», sin tag ni «Subtotal con Unipay». Acción: declarar un SKU con precio Unipay vigente. Verificado en vivo el 2026-10-21.

**Observación**

Causa: {SKU_UNIPAY_001} (Lavaloza Quix 1.5 L) no tiene precio Unipay vigente: su ficha trae solo la etiqueta «Promoción % Unipay» y un único precio ($4.750), y el carro muestra solo «$4.750 c/u» y «Subtotal», sin tag ni «Subtotal con Unipay». Acción: declarar un SKU con precio Unipay vigente. Verificado en vivo el 2026-10-21.

**Evidencia**

![Paso 3 — shelf de sku unipay 001](<B2C-44 Evidencias/TC-B2C44-M-008-p03-shelf-de-sku-unipay-001.png>)

---

### TC-B2C44-M-009 - Verificar que un ítem con descuento y promoción de medio de pago muestra ambas en orden [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
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

{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea

{SKU_PCT_Y_UNIPAY} = 000000000000668141-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_PCT_Y_UNIPAY}.
4. El usuario revisa el área de precio del ítem.

**Resultado esperado**

Se muestran en orden: badge % + precio con descuento + PPUM; tag del medio de pago con ícono + precio + PPUM; "Antes: $XX.XXX" tachado.

**Resultado obtenido**

Causa: {SKU_PCT_Y_UNIPAY} (Lavaloza Quix ultra 500 ml) no tiene promoción Unipay ni descuento: su ficha y el carro muestran un solo precio ($3.990). Acción: declarar un SKU con descuento y precio Unipay vigentes. Verificado en vivo el 2026-10-21.

**Observación**

Causa: {SKU_PCT_Y_UNIPAY} (Lavaloza Quix ultra 500 ml) no tiene promoción Unipay ni descuento: su ficha y el carro muestran un solo precio ($3.990). Acción: declarar un SKU con descuento y precio Unipay vigentes. Verificado en vivo el 2026-10-21.

**Evidencia**

![Paso 3 — shelf de sku pct y unipay](<B2C-44 Evidencias/TC-B2C44-M-009-p03-shelf-de-sku-pct-y-unipay.png>)

---

### TC-B2C44-M-010 - Verificar que un ítem con NxM incompleto y precio Unipay muestra ambas promociones en orden [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
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

{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea

{SKU_NXM_Y_UNIPAY} = None

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_NXM_Y_UNIPAY}.
4. El usuario revisa el área de precio del ítem.

**Resultado esperado**

Se muestran en orden: "$X.XXX c/u" en negro, tag del medio de pago (ícono + precio) y el mensaje rojo "Te faltan N para la promo".

**Resultado obtenido**

Causa: {SKU_NXM_Y_UNIPAY} está en TBD en el Excel de data, así que el caso no tiene producto. Acción: declarar el SKU. Verificado en vivo el 2026-10-21.

**Observación**

Causa: {SKU_NXM_Y_UNIPAY} está en TBD en el Excel de data, así que el caso no tiene producto. Acción: declarar el SKU. Verificado en vivo el 2026-10-21.

---

### TC-B2C44-M-011 - Verificar que un producto por peso muestra el precio por unidad de medida entre paréntesis [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-23 |
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

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_003}=TBD
- {SKU_PESABLE} = 000000000000037972-KG

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_PESABLE}.
4. El usuario revisa el área de precio del ítem.

**Resultado esperado**

El shelf muestra el PPUM entre paréntesis, por ejemplo "($2.990 x Kg)".

**Resultado obtenido**

Obtenido: el producto por peso (Mangos granel 500 g) muestra «$2.790 c/u» sin el PPUM entre paréntesis («($X x Kg)»). Bug: B2C-1179. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir la corrida del 2026-10-12, no por corrección).

**Observación**

Obtenido: el producto por peso (Mangos granel 500 g) muestra «$2.790 c/u» sin el PPUM entre paréntesis («($X x Kg)»). Bug: B2C-1179. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir la corrida del 2026-10-12, no por corrección).

**Evidencia**

![Paso 3 — shelf de sku pesable](<B2C-44 Evidencias/TC-B2C44-M-011-p03-shelf-de-sku-pesable.png>)

---

### TC-B2C44-M-012 - Verificar que con descuento y medio de pago el PPUM se muestra en ambos precios [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
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

{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea

{SKU_PESABLE_PCT_Y_UNIPAY} = 000000000000062644-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_PESABLE_PCT_Y_UNIPAY}.
4. El usuario revisa el área de precio del ítem.

**Resultado esperado**

El precio con descuento y el precio del medio de pago muestran cada uno su propio PPUM entre paréntesis.

**Resultado obtenido**

Causa: {SKU_PESABLE_PCT_Y_UNIPAY} (Kiwi bolsa 1 Kg) no tiene promoción Unipay: su ficha no la menciona y el carro muestra un solo precio ($2.601). Acción: declarar un SKU con descuento y precio Unipay vigentes. Verificado en vivo el 2026-10-21.

**Observación**

Causa: {SKU_PESABLE_PCT_Y_UNIPAY} (Kiwi bolsa 1 Kg) no tiene promoción Unipay: su ficha no la menciona y el carro muestra un solo precio ($2.601). Acción: declarar un SKU con descuento y precio Unipay vigentes. Verificado en vivo el 2026-10-21.

**Evidencia**

![Paso 3 — shelf de sku pesable pct y unipay](<B2C-44 Evidencias/TC-B2C44-M-012-p03-shelf-de-sku-pesable-pct-y-unipay.png>)

---

### TC-B2C44-D-013 - Verificar que la tarjeta de subtotales muestra Subtotal y Subtotal con Unipay con su ícono [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
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

{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea

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

Causa: {SKU_UNIPAY_001} (Lavaloza Quix 1.5 L) no tiene precio Unipay vigente: su ficha trae solo la etiqueta «Promoción % Unipay» y un único precio ($4.750), y el carro muestra solo «$4.750 c/u» y «Subtotal», sin tag ni «Subtotal con Unipay». Acción: declarar un SKU con precio Unipay vigente. Verificado en vivo el 2026-10-21.

**Observación**

Causa: {SKU_UNIPAY_001} (Lavaloza Quix 1.5 L) no tiene precio Unipay vigente: su ficha trae solo la etiqueta «Promoción % Unipay» y un único precio ($4.750), y el carro muestra solo «$4.750 c/u» y «Subtotal», sin tag ni «Subtotal con Unipay». Acción: declarar un SKU con precio Unipay vigente. Verificado en vivo el 2026-10-21.

**Evidencia**

![Paso 3 — tarjeta de subtotales](<B2C-44 Evidencias/TC-B2C44-D-013-p03-tarjeta-de-subtotales.png>)

---

### TC-B2C44-D-014 - Verificar que el monto Subtotal con Unipay descuenta solo el ahorro de los ítems Unipay [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
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

{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea

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

Causa: {SKU_UNIPAY_001} (Lavaloza Quix 1.5 L) no tiene precio Unipay vigente: su ficha trae solo la etiqueta «Promoción % Unipay» y un único precio ($4.750), y el carro muestra solo «$4.750 c/u» y «Subtotal», sin tag ni «Subtotal con Unipay». Acción: declarar un SKU con precio Unipay vigente. Verificado en vivo el 2026-10-21.

**Observación**

Causa: {SKU_UNIPAY_001} (Lavaloza Quix 1.5 L) no tiene precio Unipay vigente: su ficha trae solo la etiqueta «Promoción % Unipay» y un único precio ($4.750), y el carro muestra solo «$4.750 c/u» y «Subtotal», sin tag ni «Subtotal con Unipay». Acción: declarar un SKU con precio Unipay vigente. Verificado en vivo el 2026-10-21.

**Evidencia**

![Paso 3 — tarjeta de subtotales](<B2C-44 Evidencias/TC-B2C44-D-014-p03-tarjeta-de-subtotales.png>)

---

### TC-B2C44-D-015 - Verificar que los subtotales se recalculan al aumentar la cantidad de un ítem Unipay [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
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

{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea

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

Causa: {SKU_UNIPAY_001} (Lavaloza Quix 1.5 L) no tiene precio Unipay vigente: su ficha trae solo la etiqueta «Promoción % Unipay» y un único precio ($4.750), y el carro muestra solo «$4.750 c/u» y «Subtotal», sin tag ni «Subtotal con Unipay». Acción: declarar un SKU con precio Unipay vigente. Verificado en vivo el 2026-10-21.

**Observación**

Causa: {SKU_UNIPAY_001} (Lavaloza Quix 1.5 L) no tiene precio Unipay vigente: su ficha trae solo la etiqueta «Promoción % Unipay» y un único precio ($4.750), y el carro muestra solo «$4.750 c/u» y «Subtotal», sin tag ni «Subtotal con Unipay». Acción: declarar un SKU con precio Unipay vigente. Verificado en vivo el 2026-10-21.

**Evidencia**

![Paso 3 — tarjeta de subtotales](<B2C-44 Evidencias/TC-B2C44-D-015-p03-tarjeta-de-subtotales.png>)

---

### TC-B2C44-D-016 - Verificar que sin ítems con descuento Unipay no se muestra Subtotal con Unipay [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
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

{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea

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

Con el carro sin promoción Unipay vigente la tarjeta muestra solo «Subtotal», sin «Subtotal con Unipay» ni su ícono. El carro de la prueba tenía los 9 productos (no solo {SKU_VALID_001} x 2) y ninguno con precio Unipay.

**Evidencia**

![Paso 3 — tarjeta de subtotales](<B2C-44 Evidencias/TC-B2C44-D-016-p03-tarjeta-de-subtotales.png>)

![Estado final](<B2C-44 Evidencias/TC-B2C44-D-016.png>)

---

### TC-B2C44-D-017 - Verificar que al eliminar el único ítem Unipay desaparece Subtotal con Unipay [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
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

{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea

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

Causa: {SKU_UNIPAY_001} (Lavaloza Quix 1.5 L) no tiene precio Unipay vigente: su ficha trae solo la etiqueta «Promoción % Unipay» y un único precio ($4.750), y el carro muestra solo «$4.750 c/u» y «Subtotal», sin tag ni «Subtotal con Unipay». Acción: declarar un SKU con precio Unipay vigente. Verificado en vivo el 2026-10-21.

**Observación**

Causa: {SKU_UNIPAY_001} (Lavaloza Quix 1.5 L) no tiene precio Unipay vigente: su ficha trae solo la etiqueta «Promoción % Unipay» y un único precio ($4.750), y el carro muestra solo «$4.750 c/u» y «Subtotal», sin tag ni «Subtotal con Unipay». Acción: declarar un SKU con precio Unipay vigente. Verificado en vivo el 2026-10-21.

**Evidencia**

![Paso 3 — tarjeta de subtotales](<B2C-44 Evidencias/TC-B2C44-D-017-p03-tarjeta-de-subtotales.png>)

---

### TC-B2C44-M-013 - Verificar que la tarjeta de subtotales muestra Subtotal y Subtotal con Unipay con su ícono [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
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

{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea

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

Causa: {SKU_UNIPAY_001} (Lavaloza Quix 1.5 L) no tiene precio Unipay vigente: su ficha trae solo la etiqueta «Promoción % Unipay» y un único precio ($4.750), y el carro muestra solo «$4.750 c/u» y «Subtotal», sin tag ni «Subtotal con Unipay». Acción: declarar un SKU con precio Unipay vigente. Verificado en vivo el 2026-10-21.

**Observación**

Causa: {SKU_UNIPAY_001} (Lavaloza Quix 1.5 L) no tiene precio Unipay vigente: su ficha trae solo la etiqueta «Promoción % Unipay» y un único precio ($4.750), y el carro muestra solo «$4.750 c/u» y «Subtotal», sin tag ni «Subtotal con Unipay». Acción: declarar un SKU con precio Unipay vigente. Verificado en vivo el 2026-10-21.

**Evidencia**

![Paso 3 — tarjeta de subtotales](<B2C-44 Evidencias/TC-B2C44-M-013-p03-tarjeta-de-subtotales.png>)

---

### TC-B2C44-M-014 - Verificar que el monto Subtotal con Unipay descuenta solo el ahorro de los ítems Unipay [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
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

{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea

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

Causa: {SKU_UNIPAY_001} (Lavaloza Quix 1.5 L) no tiene precio Unipay vigente: su ficha trae solo la etiqueta «Promoción % Unipay» y un único precio ($4.750), y el carro muestra solo «$4.750 c/u» y «Subtotal», sin tag ni «Subtotal con Unipay». Acción: declarar un SKU con precio Unipay vigente. Verificado en vivo el 2026-10-21.

**Observación**

Causa: {SKU_UNIPAY_001} (Lavaloza Quix 1.5 L) no tiene precio Unipay vigente: su ficha trae solo la etiqueta «Promoción % Unipay» y un único precio ($4.750), y el carro muestra solo «$4.750 c/u» y «Subtotal», sin tag ni «Subtotal con Unipay». Acción: declarar un SKU con precio Unipay vigente. Verificado en vivo el 2026-10-21.

**Evidencia**

![Paso 3 — tarjeta de subtotales](<B2C-44 Evidencias/TC-B2C44-M-014-p03-tarjeta-de-subtotales.png>)

---

### TC-B2C44-M-015 - Verificar que los subtotales se recalculan al aumentar la cantidad de un ítem Unipay [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
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

{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea

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

Causa: {SKU_UNIPAY_001} (Lavaloza Quix 1.5 L) no tiene precio Unipay vigente: su ficha trae solo la etiqueta «Promoción % Unipay» y un único precio ($4.750), y el carro muestra solo «$4.750 c/u» y «Subtotal», sin tag ni «Subtotal con Unipay». Acción: declarar un SKU con precio Unipay vigente. Verificado en vivo el 2026-10-21.

**Observación**

Causa: {SKU_UNIPAY_001} (Lavaloza Quix 1.5 L) no tiene precio Unipay vigente: su ficha trae solo la etiqueta «Promoción % Unipay» y un único precio ($4.750), y el carro muestra solo «$4.750 c/u» y «Subtotal», sin tag ni «Subtotal con Unipay». Acción: declarar un SKU con precio Unipay vigente. Verificado en vivo el 2026-10-21.

**Evidencia**

![Paso 3 — tarjeta de subtotales](<B2C-44 Evidencias/TC-B2C44-M-015-p03-tarjeta-de-subtotales.png>)

---

### TC-B2C44-M-016 - Verificar que sin ítems con descuento Unipay no se muestra Subtotal con Unipay [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
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

{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea

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

Con el carro sin promoción Unipay vigente la tarjeta muestra solo «Subtotal», sin «Subtotal con Unipay» ni su ícono. El carro de la prueba tenía los 9 productos (no solo {SKU_VALID_001} x 2) y ninguno con precio Unipay.

**Evidencia**

![Paso 3 — tarjeta de subtotales](<B2C-44 Evidencias/TC-B2C44-M-016-p03-tarjeta-de-subtotales.png>)

![Estado final](<B2C-44 Evidencias/TC-B2C44-M-016.png>)

---

### TC-B2C44-M-017 - Verificar que al eliminar el único ítem Unipay desaparece Subtotal con Unipay [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
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

{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea

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

Causa: {SKU_UNIPAY_001} (Lavaloza Quix 1.5 L) no tiene precio Unipay vigente: su ficha trae solo la etiqueta «Promoción % Unipay» y un único precio ($4.750), y el carro muestra solo «$4.750 c/u» y «Subtotal», sin tag ni «Subtotal con Unipay». Acción: declarar un SKU con precio Unipay vigente. Verificado en vivo el 2026-10-21.

**Observación**

Causa: {SKU_UNIPAY_001} (Lavaloza Quix 1.5 L) no tiene precio Unipay vigente: su ficha trae solo la etiqueta «Promoción % Unipay» y un único precio ($4.750), y el carro muestra solo «$4.750 c/u» y «Subtotal», sin tag ni «Subtotal con Unipay». Acción: declarar un SKU con precio Unipay vigente. Verificado en vivo el 2026-10-21.

**Evidencia**

![Paso 3 — tarjeta de subtotales](<B2C-44 Evidencias/TC-B2C44-M-017-p03-tarjeta-de-subtotales.png>)

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
  "tc_file": "Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-44 WEB Test Cases.xlsx",
  "title": "Re-ejecución de casos con bug (B2C-44)",
  "updated_at": "2026-10-23"
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
  ],
  "2026-10-21": [
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
  ],
  "2026-10-23": [
   "TC-B2C44-D-001",
   "TC-B2C44-D-005",
   "TC-B2C44-D-006",
   "TC-B2C44-D-011",
   "TC-B2C44-M-001",
   "TC-B2C44-M-005",
   "TC-B2C44-M-006",
   "TC-B2C44-M-011"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-10-23",
   "expected": "El shelf muestra ícono X arriba a la derecha, imagen 90x90, \"Marca | Nombre\", precio unitario \"$X.XXX c/u\", cantidad \"N un.\" alineada a la derecha, controles de cantidad e ícono lápiz + link \"Agregar instrucciones\".",
   "form_factor": "desktop",
   "id": "TC-B2C44-D-001",
   "name": "Verificar que el shelf de un ítem sin promoción muestra todos sus elementos [Desktop] [Guest]",
   "observation": "Obtenido: el shelf del carro muestra el texto «Eliminar» en vez del ícono X arriba a la derecha. Bug: B2C-1175. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir la corrida del 2026-10-12, no por corrección).",
   "observed": "Obtenido: el shelf del carro muestra el texto «Eliminar» en vez del ícono X arriba a la derecha. Bug: B2C-1175. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir la corrida del 2026-10-12, no por corrección).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_VALID_001} x 2 (sin promociones)",
   "screenshots": [
    {
     "caption": "Paso 3 — shelf de sku valid 001",
     "file": "TC-B2C44-D-001-p03-shelf-de-sku-valid-001.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C44-D-001.png"
    }
   ],
   "spec": "tests/B2C-44.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_VALID_001}.\n4. El usuario revisa cada elemento del shelf.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_003}=TBD\n- {SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El texto \"Marca | Nombre\" se muestra truncado con \"…\" sin desbordar el shelf.",
   "form_factor": "desktop",
   "id": "TC-B2C44-D-002",
   "name": "Verificar que un nombre de producto largo se trunca con puntos suspensivos [Desktop] [Guest]",
   "observed": "El nombre largo de {SKU_NOMBRE_LARGO} se trunca con «…» y no desborda el shelf.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_NOMBRE_LARGO}",
   "screenshots": [
    {
     "caption": "Paso 3 — shelf de sku nombre largo",
     "file": "TC-B2C44-D-002-p03-shelf-de-sku-nombre-largo.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C44-D-002.png"
    }
   ],
   "spec": "tests/B2C-44.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_NOMBRE_LARGO}.\n4. El usuario revisa el nombre del producto.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea\n{SKU_NOMBRE_LARGO} = 000000000000662457-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "La cantidad se muestra como \"1 kg.\" alineada a la derecha.",
   "form_factor": "desktop",
   "id": "TC-B2C44-D-003",
   "name": "Verificar que un pesable muestra la cantidad en kg en el shelf [Desktop] [Guest]",
   "observation": "Esperado: la cantidad del pesable se muestra en kg. Obtenido: el shelf de {SKU_PESABLE} (Mangos granel 500 g) muestra «$2.790 c/u» y «1 un.»; su ficha sí muestra «0.5 kg» y «($5.580 x kg)». Bug B2C-1271.",
   "observed": "Esperado: la cantidad del pesable se muestra en kg. Obtenido: el shelf de {SKU_PESABLE} (Mangos granel 500 g) muestra «$2.790 c/u» y «1 un.»; su ficha sí muestra «0.5 kg» y «($5.580 x kg)». Bug B2C-1271.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_PESABLE} con 1 kg",
   "screenshots": [
    {
     "caption": "Paso 3 — shelf de sku pesable",
     "file": "TC-B2C44-D-003-p03-shelf-de-sku-pesable.png"
    }
   ],
   "spec": "tests/B2C-44.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_PESABLE}.\n4. El usuario revisa la cantidad del ítem.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea\n{SKU_PESABLE} = 000000000000037972-KG",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "Se muestra el ícono lápiz + link gris \"Agregar instrucciones\" y al presionarlo se abre el modal \"¿Te gustaría algo en especial?\" (B2C-45).",
   "form_factor": "desktop",
   "id": "TC-B2C44-D-004",
   "name": "Verificar que un invitado ve Agregar instrucciones y al tocarlo se abre el modal de instrucciones [Desktop] [Guest]",
   "observed": "El invitado ve el link «Agregar instrucciones» con su ícono y al tocarlo se abre el modal «¿Te gustaría algo en especial?».",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_VALID_001} sin instrucciones",
   "screenshots": [
    {
     "caption": "Paso 3 — shelf con agregar instrucciones",
     "file": "TC-B2C44-D-004-p03-shelf-con-agregar-instrucciones.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C44-D-004.png"
    }
   ],
   "spec": "tests/B2C-44.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_VALID_001}.\n4. El usuario hace clic en el link \"Agregar instrucciones\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-23",
   "expected": "El área de precio muestra el badge amarillo \"X%\", el precio con descuento en negro semibold con su PPUM y \"Antes:\" con el precio original tachado y su PPUM.",
   "form_factor": "desktop",
   "id": "TC-B2C44-D-005",
   "name": "Verificar que un ítem con porcentaje de descuento muestra badge, precio final y precio anterior [Desktop] [Guest]",
   "observation": "Obtenido: el ítem con descuento por porcentaje (Kiwi bolsa 1 Kg, {SKU_PROM_PCT_DESCUENTO}) muestra «$2.601 c/u $2.341 c/u» sin badge «X%» ni «Antes:». Bug: B2C-1177. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir la corrida del 2026-10-12, no por corrección).",
   "observed": "Obtenido: el ítem con descuento por porcentaje (Kiwi bolsa 1 Kg, {SKU_PROM_PCT_DESCUENTO}) muestra «$2.601 c/u $2.341 c/u» sin badge «X%» ni «Antes:». Bug: B2C-1177. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir la corrida del 2026-10-12, no por corrección).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_PROM_PCT_DESCUENTO} (promo de precio con descuento vigente en BM)",
   "screenshots": [
    {
     "caption": "Paso 3 — shelf de sku prom pct descuento",
     "file": "TC-B2C44-D-005-p03-shelf-de-sku-prom-pct-descuento.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C44-D-005.png"
    }
   ],
   "spec": "tests/B2C-44.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_PROM_PCT_DESCUENTO}.\n4. El usuario revisa el área de precio del ítem.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_003}=TBD\n- {SKU_PROM_PCT_DESCUENTO} = TBD",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-23",
   "expected": "El área de precio muestra el badge, el precio fijo de la promo en negro semibold con su PPUM y \"Antes:\" con el precio original tachado.",
   "form_factor": "desktop",
   "id": "TC-B2C44-D-006",
   "name": "Verificar que un ítem con promoción de precio fijo muestra precio final y precio anterior [Desktop] [Guest]",
   "observation": "Obtenido: el ítem con promoción de precio fijo (Mermelada Watt's) muestra «$1.200 c/u» sin «Antes:» con el precio anterior tachado. Bug: B2C-1178. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir la corrida del 2026-10-12, no por corrección).",
   "observed": "Obtenido: el ítem con promoción de precio fijo (Mermelada Watt's) muestra «$1.200 c/u» sin «Antes:» con el precio anterior tachado. Bug: B2C-1178. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir la corrida del 2026-10-12, no por corrección).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_PROM_PRECIO_FIJO} (promo de precio fijo vigente en BM)",
   "screenshots": [
    {
     "caption": "Paso 3 — shelf de sku prom precio fijo",
     "file": "TC-B2C44-D-006-p03-shelf-de-sku-prom-precio-fijo.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C44-D-006.png"
    }
   ],
   "spec": "tests/B2C-44.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_PROM_PRECIO_FIJO}.\n4. El usuario revisa el área de precio del ítem.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_003}=TBD\n- {SKU_PROM_PRECIO_FIJO} = TBD",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "Se muestra el precio unitario sin badge ni precio tachado y debajo el mensaje en rojo \"Te faltan N para la promo\".",
   "form_factor": "desktop",
   "id": "TC-B2C44-D-007",
   "name": "Verificar que un ítem con NxM incompleto muestra precio sin badge y el mensaje rojo Te faltan N [Desktop] [Guest]",
   "observed": "El shelf de {SKU_PROM_NxM} muestra el precio «$24.500 c/u» sin insignia ni precio tachado y el mensaje rojo «Te faltan 2 para la promo».",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_PROM_NxM} x 1 (promo NxM vigente sin completar)",
   "screenshots": [
    {
     "caption": "Paso 3 — shelf de sku prom nxm",
     "file": "TC-B2C44-D-007-p03-shelf-de-sku-prom-nxm.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C44-D-007.png"
    }
   ],
   "spec": "tests/B2C-44.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_PROM_NxM}.\n4. El usuario revisa el área de precio del ítem.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "Se muestra \"$X.XXX c/u\" en negro y debajo el tag verde agua con ícono Unipay y \"$Y.YYY c/u\" en verde oscuro (Y < X), sin badge ni precio tachado.",
   "form_factor": "desktop",
   "id": "TC-B2C44-D-008",
   "name": "Verificar que un ítem con precio Unipay muestra el precio regular y el tag Unipay [Desktop] [Guest]",
   "observation": "Causa: {SKU_UNIPAY_001} (Lavaloza Quix 1.5 L) no tiene precio Unipay vigente: su ficha trae solo la etiqueta «Promoción % Unipay» y un único precio ($4.750), y el carro muestra solo «$4.750 c/u» y «Subtotal», sin tag ni «Subtotal con Unipay». Acción: declarar un SKU con precio Unipay vigente. Verificado en vivo el 2026-10-21.",
   "observed": "Causa: {SKU_UNIPAY_001} (Lavaloza Quix 1.5 L) no tiene precio Unipay vigente: su ficha trae solo la etiqueta «Promoción % Unipay» y un único precio ($4.750), y el carro muestra solo «$4.750 c/u» y «Subtotal», sin tag ni «Subtotal con Unipay». Acción: declarar un SKU con precio Unipay vigente. Verificado en vivo el 2026-10-21.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_UNIPAY_001} (promo Unipay vigente, sin otras promociones)",
   "screenshots": [
    {
     "caption": "Paso 3 — shelf de sku unipay 001",
     "file": "TC-B2C44-D-008-p03-shelf-de-sku-unipay-001.png"
    }
   ],
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_UNIPAY_001}.\n4. El usuario revisa el área de precio del ítem.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea\n{SKU_UNIPAY_001} = 000000000000661945-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "Se muestran en orden: badge % + precio con descuento + PPUM; tag del medio de pago con ícono + precio + PPUM; \"Antes: $XX.XXX\" tachado.",
   "form_factor": "desktop",
   "id": "TC-B2C44-D-009",
   "name": "Verificar que un ítem con descuento y promoción de medio de pago muestra ambas en orden [Desktop] [Guest]",
   "observation": "Causa: {SKU_PCT_Y_UNIPAY} (Lavaloza Quix ultra 500 ml) no tiene promoción Unipay ni descuento: su ficha y el carro muestran un solo precio ($3.990). Acción: declarar un SKU con descuento y precio Unipay vigentes. Verificado en vivo el 2026-10-21.",
   "observed": "Causa: {SKU_PCT_Y_UNIPAY} (Lavaloza Quix ultra 500 ml) no tiene promoción Unipay ni descuento: su ficha y el carro muestran un solo precio ($3.990). Acción: declarar un SKU con descuento y precio Unipay vigentes. Verificado en vivo el 2026-10-21.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_PCT_Y_UNIPAY} (promo % y promo Unipay vigentes)",
   "screenshots": [
    {
     "caption": "Paso 3 — shelf de sku pct y unipay",
     "file": "TC-B2C44-D-009-p03-shelf-de-sku-pct-y-unipay.png"
    }
   ],
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_PCT_Y_UNIPAY}.\n4. El usuario revisa el área de precio del ítem.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea\n{SKU_PCT_Y_UNIPAY} = 000000000000668141-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "Se muestran en orden: \"$X.XXX c/u\" en negro, tag del medio de pago (ícono + precio) y el mensaje rojo \"Te faltan N para la promo\".",
   "form_factor": "desktop",
   "id": "TC-B2C44-D-010",
   "name": "Verificar que un ítem con NxM incompleto y precio Unipay muestra ambas promociones en orden [Desktop] [Guest]",
   "observation": "Causa: {SKU_NXM_Y_UNIPAY} está en TBD en el Excel de data, así que el caso no tiene producto. Acción: declarar el SKU. Verificado en vivo el 2026-10-21.",
   "observed": "Causa: {SKU_NXM_Y_UNIPAY} está en TBD en el Excel de data, así que el caso no tiene producto. Acción: declarar el SKU. Verificado en vivo el 2026-10-21.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_NXM_Y_UNIPAY} x 1 (NxM sin completar y promo Unipay vigentes)",
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_NXM_Y_UNIPAY}.\n4. El usuario revisa el área de precio del ítem.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea\n{SKU_NXM_Y_UNIPAY} = None",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-23",
   "expected": "El shelf muestra el PPUM entre paréntesis, por ejemplo \"($2.990 x Kg)\".",
   "form_factor": "desktop",
   "id": "TC-B2C44-D-011",
   "name": "Verificar que un producto por peso muestra el precio por unidad de medida entre paréntesis [Desktop] [Guest]",
   "observation": "Obtenido: el producto por peso (Mangos granel 500 g) muestra «$2.790 c/u» sin el PPUM entre paréntesis («($X x Kg)»). Bug: B2C-1179. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir la corrida del 2026-10-12, no por corrección).",
   "observed": "Obtenido: el producto por peso (Mangos granel 500 g) muestra «$2.790 c/u» sin el PPUM entre paréntesis («($X x Kg)»). Bug: B2C-1179. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir la corrida del 2026-10-12, no por corrección).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_PESABLE} con 1 kg",
   "screenshots": [
    {
     "caption": "Paso 3 — shelf de sku pesable",
     "file": "TC-B2C44-D-011-p03-shelf-de-sku-pesable.png"
    }
   ],
   "spec": "tests/B2C-44.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_PESABLE}.\n4. El usuario revisa el área de precio del ítem.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_003}=TBD\n- {SKU_PESABLE} = 000000000000037972-KG",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El precio con descuento y el precio del medio de pago muestran cada uno su propio PPUM entre paréntesis.",
   "form_factor": "desktop",
   "id": "TC-B2C44-D-012",
   "name": "Verificar que con descuento y medio de pago el PPUM se muestra en ambos precios [Desktop] [Guest]",
   "observation": "Causa: {SKU_PESABLE_PCT_Y_UNIPAY} (Kiwi bolsa 1 Kg) no tiene promoción Unipay: su ficha no la menciona y el carro muestra un solo precio ($2.601). Acción: declarar un SKU con descuento y precio Unipay vigentes. Verificado en vivo el 2026-10-21.",
   "observed": "Causa: {SKU_PESABLE_PCT_Y_UNIPAY} (Kiwi bolsa 1 Kg) no tiene promoción Unipay: su ficha no la menciona y el carro muestra un solo precio ($2.601). Acción: declarar un SKU con descuento y precio Unipay vigentes. Verificado en vivo el 2026-10-21.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_PESABLE_PCT_Y_UNIPAY} (pesable con promo % y promo Unipay vigentes)",
   "screenshots": [
    {
     "caption": "Paso 3 — shelf de sku pesable pct y unipay",
     "file": "TC-B2C44-D-012-p03-shelf-de-sku-pesable-pct-y-unipay.png"
    }
   ],
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_PESABLE_PCT_Y_UNIPAY}.\n4. El usuario revisa el área de precio del ítem.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea\n{SKU_PESABLE_PCT_Y_UNIPAY} = 000000000000062644-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-23",
   "expected": "El shelf muestra imagen 90x90, \"Marca | Nombre\", precio unitario \"$X.XXX c/u\", cantidad \"N un.\" alineada a la derecha, controles de cantidad e ícono lápiz + link \"Agregar instrucciones\".",
   "form_factor": "mobile",
   "id": "TC-B2C44-M-001",
   "name": "Verificar que el shelf de un ítem sin promoción muestra todos sus elementos [Mobile] [Guest]",
   "observation": "Obtenido: el shelf muestra el texto «Eliminar» en vez del ícono X y la imagen mide 60x60 px en vez de 90x90. Bug: B2C-1176. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir la corrida del 2026-10-12, no por corrección).",
   "observed": "Obtenido: el shelf muestra el texto «Eliminar» en vez del ícono X y la imagen mide 60x60 px en vez de 90x90. Bug: B2C-1176. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir la corrida del 2026-10-12, no por corrección).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_VALID_001} x 2 (sin promociones)",
   "screenshots": [
    {
     "caption": "Paso 3 — shelf de sku valid 001",
     "file": "TC-B2C44-M-001-p03-shelf-de-sku-valid-001.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C44-M-001.png"
    }
   ],
   "spec": "tests/B2C-44.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_VALID_001}.\n4. El usuario revisa cada elemento del shelf.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_003}=TBD\n- {SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El texto \"Marca | Nombre\" se muestra truncado con \"…\" sin desbordar el shelf.",
   "form_factor": "mobile",
   "id": "TC-B2C44-M-002",
   "name": "Verificar que un nombre de producto largo se trunca con puntos suspensivos [Mobile] [Guest]",
   "observed": "El nombre largo de {SKU_NOMBRE_LARGO} se trunca con «…» y no desborda el shelf.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_NOMBRE_LARGO}",
   "screenshots": [
    {
     "caption": "Paso 3 — shelf de sku nombre largo",
     "file": "TC-B2C44-M-002-p03-shelf-de-sku-nombre-largo.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C44-M-002.png"
    }
   ],
   "spec": "tests/B2C-44.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_NOMBRE_LARGO}.\n4. El usuario revisa el nombre del producto.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea\n{SKU_NOMBRE_LARGO} = 000000000000662457-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "La cantidad se muestra como \"1 kg.\" alineada a la derecha.",
   "form_factor": "mobile",
   "id": "TC-B2C44-M-003",
   "name": "Verificar que un pesable muestra la cantidad en kg en el shelf [Mobile] [Guest]",
   "observation": "Esperado: la cantidad del pesable se muestra en kg. Obtenido: el shelf de {SKU_PESABLE} (Mangos granel 500 g) muestra «$2.790 c/u» y «1 un.»; su ficha sí muestra «0.5 kg» y «($5.580 x kg)». Bug B2C-1272.",
   "observed": "Esperado: la cantidad del pesable se muestra en kg. Obtenido: el shelf de {SKU_PESABLE} (Mangos granel 500 g) muestra «$2.790 c/u» y «1 un.»; su ficha sí muestra «0.5 kg» y «($5.580 x kg)». Bug B2C-1272.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_PESABLE} con 1 kg",
   "screenshots": [
    {
     "caption": "Paso 3 — shelf de sku pesable",
     "file": "TC-B2C44-M-003-p03-shelf-de-sku-pesable.png"
    }
   ],
   "spec": "tests/B2C-44.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_PESABLE}.\n4. El usuario revisa la cantidad del ítem.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea\n{SKU_PESABLE} = 000000000000037972-KG",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "Se muestra el ícono lápiz + link gris \"Agregar instrucciones\" y al presionarlo se abre el modal \"¿Te gustaría algo en especial?\" (B2C-45).",
   "form_factor": "mobile",
   "id": "TC-B2C44-M-004",
   "name": "Verificar que un invitado ve Agregar instrucciones y al tocarlo se abre el modal de instrucciones [Mobile] [Guest]",
   "observed": "El invitado ve el link «Agregar instrucciones» con su ícono y al tocarlo se abre el modal «¿Te gustaría algo en especial?».",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_VALID_001} sin instrucciones",
   "screenshots": [
    {
     "caption": "Paso 3 — shelf con agregar instrucciones",
     "file": "TC-B2C44-M-004-p03-shelf-con-agregar-instrucciones.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C44-M-004.png"
    }
   ],
   "spec": "tests/B2C-44.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_VALID_001}.\n4. El usuario toca el link \"Agregar instrucciones\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-23",
   "expected": "El área de precio muestra el badge amarillo \"X%\", el precio con descuento en negro semibold con su PPUM y \"Antes:\" con el precio original tachado y su PPUM.",
   "form_factor": "mobile",
   "id": "TC-B2C44-M-005",
   "name": "Verificar que un ítem con porcentaje de descuento muestra badge, precio final y precio anterior [Mobile] [Guest]",
   "observation": "Obtenido: el ítem con descuento por porcentaje (Kiwi bolsa 1 Kg, {SKU_PROM_PCT_DESCUENTO}) muestra «$2.601 c/u $2.341 c/u» sin badge «X%» ni «Antes:». Bug: B2C-1177. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir la corrida del 2026-10-12, no por corrección).",
   "observed": "Obtenido: el ítem con descuento por porcentaje (Kiwi bolsa 1 Kg, {SKU_PROM_PCT_DESCUENTO}) muestra «$2.601 c/u $2.341 c/u» sin badge «X%» ni «Antes:». Bug: B2C-1177. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir la corrida del 2026-10-12, no por corrección).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_PROM_PCT_DESCUENTO} (promo de precio con descuento vigente en BM)",
   "screenshots": [
    {
     "caption": "Paso 3 — shelf de sku prom pct descuento",
     "file": "TC-B2C44-M-005-p03-shelf-de-sku-prom-pct-descuento.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C44-M-005.png"
    }
   ],
   "spec": "tests/B2C-44.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_PROM_PCT_DESCUENTO}.\n4. El usuario revisa el área de precio del ítem.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_003}=TBD\n- {SKU_PROM_PCT_DESCUENTO} = TBD",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-23",
   "expected": "El área de precio muestra el badge, el precio fijo de la promo en negro semibold con su PPUM y \"Antes:\" con el precio original tachado.",
   "form_factor": "mobile",
   "id": "TC-B2C44-M-006",
   "name": "Verificar que un ítem con promoción de precio fijo muestra precio final y precio anterior [Mobile] [Guest]",
   "observation": "Obtenido: el ítem con promoción de precio fijo (Mermelada Watt's) muestra «$1.200 c/u» sin «Antes:» con el precio anterior tachado. Bug: B2C-1178. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir la corrida del 2026-10-12, no por corrección).",
   "observed": "Obtenido: el ítem con promoción de precio fijo (Mermelada Watt's) muestra «$1.200 c/u» sin «Antes:» con el precio anterior tachado. Bug: B2C-1178. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir la corrida del 2026-10-12, no por corrección).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_PROM_PRECIO_FIJO} (promo de precio fijo vigente en BM)",
   "screenshots": [
    {
     "caption": "Paso 3 — shelf de sku prom precio fijo",
     "file": "TC-B2C44-M-006-p03-shelf-de-sku-prom-precio-fijo.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C44-M-006.png"
    }
   ],
   "spec": "tests/B2C-44.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_PROM_PRECIO_FIJO}.\n4. El usuario revisa el área de precio del ítem.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_003}=TBD\n- {SKU_PROM_PRECIO_FIJO} = TBD",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "Se muestra el precio unitario sin badge ni precio tachado y debajo el mensaje en rojo \"Te faltan N para la promo\".",
   "form_factor": "mobile",
   "id": "TC-B2C44-M-007",
   "name": "Verificar que un ítem con NxM incompleto muestra precio sin badge y el mensaje rojo Te faltan N [Mobile] [Guest]",
   "observed": "El shelf de {SKU_PROM_NxM} muestra el precio «$24.500 c/u» sin insignia ni precio tachado y el mensaje rojo «Te faltan 2 para la promo».",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_PROM_NxM} x 1 (promo NxM vigente sin completar)",
   "screenshots": [
    {
     "caption": "Paso 3 — shelf de sku prom nxm",
     "file": "TC-B2C44-M-007-p03-shelf-de-sku-prom-nxm.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C44-M-007.png"
    }
   ],
   "spec": "tests/B2C-44.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_PROM_NxM}.\n4. El usuario revisa el área de precio del ítem.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "Se muestra \"$X.XXX c/u\" en negro y debajo el tag verde agua con ícono Unipay y \"$Y.YYY c/u\" en verde oscuro (Y < X), sin badge ni precio tachado.",
   "form_factor": "mobile",
   "id": "TC-B2C44-M-008",
   "name": "Verificar que un ítem con precio Unipay muestra el precio regular y el tag Unipay [Mobile] [Guest]",
   "observation": "Causa: {SKU_UNIPAY_001} (Lavaloza Quix 1.5 L) no tiene precio Unipay vigente: su ficha trae solo la etiqueta «Promoción % Unipay» y un único precio ($4.750), y el carro muestra solo «$4.750 c/u» y «Subtotal», sin tag ni «Subtotal con Unipay». Acción: declarar un SKU con precio Unipay vigente. Verificado en vivo el 2026-10-21.",
   "observed": "Causa: {SKU_UNIPAY_001} (Lavaloza Quix 1.5 L) no tiene precio Unipay vigente: su ficha trae solo la etiqueta «Promoción % Unipay» y un único precio ($4.750), y el carro muestra solo «$4.750 c/u» y «Subtotal», sin tag ni «Subtotal con Unipay». Acción: declarar un SKU con precio Unipay vigente. Verificado en vivo el 2026-10-21.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_UNIPAY_001} (promo Unipay vigente, sin otras promociones)",
   "screenshots": [
    {
     "caption": "Paso 3 — shelf de sku unipay 001",
     "file": "TC-B2C44-M-008-p03-shelf-de-sku-unipay-001.png"
    }
   ],
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_UNIPAY_001}.\n4. El usuario revisa el área de precio del ítem.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea\n{SKU_UNIPAY_001} = 000000000000661945-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "Se muestran en orden: badge % + precio con descuento + PPUM; tag del medio de pago con ícono + precio + PPUM; \"Antes: $XX.XXX\" tachado.",
   "form_factor": "mobile",
   "id": "TC-B2C44-M-009",
   "name": "Verificar que un ítem con descuento y promoción de medio de pago muestra ambas en orden [Mobile] [Guest]",
   "observation": "Causa: {SKU_PCT_Y_UNIPAY} (Lavaloza Quix ultra 500 ml) no tiene promoción Unipay ni descuento: su ficha y el carro muestran un solo precio ($3.990). Acción: declarar un SKU con descuento y precio Unipay vigentes. Verificado en vivo el 2026-10-21.",
   "observed": "Causa: {SKU_PCT_Y_UNIPAY} (Lavaloza Quix ultra 500 ml) no tiene promoción Unipay ni descuento: su ficha y el carro muestran un solo precio ($3.990). Acción: declarar un SKU con descuento y precio Unipay vigentes. Verificado en vivo el 2026-10-21.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_PCT_Y_UNIPAY} (promo % y promo Unipay vigentes)",
   "screenshots": [
    {
     "caption": "Paso 3 — shelf de sku pct y unipay",
     "file": "TC-B2C44-M-009-p03-shelf-de-sku-pct-y-unipay.png"
    }
   ],
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_PCT_Y_UNIPAY}.\n4. El usuario revisa el área de precio del ítem.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea\n{SKU_PCT_Y_UNIPAY} = 000000000000668141-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "Se muestran en orden: \"$X.XXX c/u\" en negro, tag del medio de pago (ícono + precio) y el mensaje rojo \"Te faltan N para la promo\".",
   "form_factor": "mobile",
   "id": "TC-B2C44-M-010",
   "name": "Verificar que un ítem con NxM incompleto y precio Unipay muestra ambas promociones en orden [Mobile] [Guest]",
   "observation": "Causa: {SKU_NXM_Y_UNIPAY} está en TBD en el Excel de data, así que el caso no tiene producto. Acción: declarar el SKU. Verificado en vivo el 2026-10-21.",
   "observed": "Causa: {SKU_NXM_Y_UNIPAY} está en TBD en el Excel de data, así que el caso no tiene producto. Acción: declarar el SKU. Verificado en vivo el 2026-10-21.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_NXM_Y_UNIPAY} x 1 (NxM sin completar y promo Unipay vigentes)",
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_NXM_Y_UNIPAY}.\n4. El usuario revisa el área de precio del ítem.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea\n{SKU_NXM_Y_UNIPAY} = None",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-23",
   "expected": "El shelf muestra el PPUM entre paréntesis, por ejemplo \"($2.990 x Kg)\".",
   "form_factor": "mobile",
   "id": "TC-B2C44-M-011",
   "name": "Verificar que un producto por peso muestra el precio por unidad de medida entre paréntesis [Mobile] [Guest]",
   "observation": "Obtenido: el producto por peso (Mangos granel 500 g) muestra «$2.790 c/u» sin el PPUM entre paréntesis («($X x Kg)»). Bug: B2C-1179. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir la corrida del 2026-10-12, no por corrección).",
   "observed": "Obtenido: el producto por peso (Mangos granel 500 g) muestra «$2.790 c/u» sin el PPUM entre paréntesis («($X x Kg)»). Bug: B2C-1179. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir la corrida del 2026-10-12, no por corrección).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_PESABLE} con 1 kg",
   "screenshots": [
    {
     "caption": "Paso 3 — shelf de sku pesable",
     "file": "TC-B2C44-M-011-p03-shelf-de-sku-pesable.png"
    }
   ],
   "spec": "tests/B2C-44.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_PESABLE}.\n4. El usuario revisa el área de precio del ítem.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_003}=TBD\n- {SKU_PESABLE} = 000000000000037972-KG",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El precio con descuento y el precio del medio de pago muestran cada uno su propio PPUM entre paréntesis.",
   "form_factor": "mobile",
   "id": "TC-B2C44-M-012",
   "name": "Verificar que con descuento y medio de pago el PPUM se muestra en ambos precios [Mobile] [Guest]",
   "observation": "Causa: {SKU_PESABLE_PCT_Y_UNIPAY} (Kiwi bolsa 1 Kg) no tiene promoción Unipay: su ficha no la menciona y el carro muestra un solo precio ($2.601). Acción: declarar un SKU con descuento y precio Unipay vigentes. Verificado en vivo el 2026-10-21.",
   "observed": "Causa: {SKU_PESABLE_PCT_Y_UNIPAY} (Kiwi bolsa 1 Kg) no tiene promoción Unipay: su ficha no la menciona y el carro muestra un solo precio ($2.601). Acción: declarar un SKU con descuento y precio Unipay vigentes. Verificado en vivo el 2026-10-21.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_PESABLE_PCT_Y_UNIPAY} (pesable con promo % y promo Unipay vigentes)",
   "screenshots": [
    {
     "caption": "Paso 3 — shelf de sku pesable pct y unipay",
     "file": "TC-B2C44-M-012-p03-shelf-de-sku-pesable-pct-y-unipay.png"
    }
   ],
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_PESABLE_PCT_Y_UNIPAY}.\n4. El usuario revisa el área de precio del ítem.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea\n{SKU_PESABLE_PCT_Y_UNIPAY} = 000000000000062644-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "La tarjeta de subtotales muestra la línea \"Subtotal\" con su monto \"$XX.XXX\" y la línea \"Subtotal con Unipay\" con el ícono de tarjeta Unipay y su monto \"$XX.XXX\".",
   "form_factor": "desktop",
   "id": "TC-B2C44-D-013",
   "name": "Verificar que la tarjeta de subtotales muestra Subtotal y Subtotal con Unipay con su ícono [Desktop] [Guest]",
   "observation": "Causa: {SKU_UNIPAY_001} (Lavaloza Quix 1.5 L) no tiene precio Unipay vigente: su ficha trae solo la etiqueta «Promoción % Unipay» y un único precio ($4.750), y el carro muestra solo «$4.750 c/u» y «Subtotal», sin tag ni «Subtotal con Unipay». Acción: declarar un SKU con precio Unipay vigente. Verificado en vivo el 2026-10-21.",
   "observed": "Causa: {SKU_UNIPAY_001} (Lavaloza Quix 1.5 L) no tiene precio Unipay vigente: su ficha trae solo la etiqueta «Promoción % Unipay» y un único precio ($4.750), y el carro muestra solo «$4.750 c/u» y «Subtotal», sin tag ni «Subtotal con Unipay». Acción: declarar un SKU con precio Unipay vigente. Verificado en vivo el 2026-10-21.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_UNIPAY_001} x 1 (promo Unipay vigente) y {SKU_VALID_001} x 1 (sin promociones)",
   "screenshots": [
    {
     "caption": "Paso 3 — tarjeta de subtotales",
     "file": "TC-B2C44-D-013-p03-tarjeta-de-subtotales.png"
    }
   ],
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica la tarjeta de subtotales.\n4. El usuario revisa cada línea de la tarjeta.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea\n{SKU_UNIPAY_001} = 000000000000661945-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "\"Subtotal\" = 2·X + P (precios regulares). \"Subtotal con Unipay\" = 2·Y + P, es decir, el Subtotal menos el ahorro Unipay 2·(X − Y); el producto sin promoción se suma a precio normal. El Subtotal con Unipay es menor que el Subtotal.",
   "form_factor": "desktop",
   "id": "TC-B2C44-D-014",
   "name": "Verificar que el monto Subtotal con Unipay descuenta solo el ahorro de los ítems Unipay [Desktop] [Guest]",
   "observation": "Causa: {SKU_UNIPAY_001} (Lavaloza Quix 1.5 L) no tiene precio Unipay vigente: su ficha trae solo la etiqueta «Promoción % Unipay» y un único precio ($4.750), y el carro muestra solo «$4.750 c/u» y «Subtotal», sin tag ni «Subtotal con Unipay». Acción: declarar un SKU con precio Unipay vigente. Verificado en vivo el 2026-10-21.",
   "observed": "Causa: {SKU_UNIPAY_001} (Lavaloza Quix 1.5 L) no tiene precio Unipay vigente: su ficha trae solo la etiqueta «Promoción % Unipay» y un único precio ($4.750), y el carro muestra solo «$4.750 c/u» y «Subtotal», sin tag ni «Subtotal con Unipay». Acción: declarar un SKU con precio Unipay vigente. Verificado en vivo el 2026-10-21.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_UNIPAY_001} x 2 (promo Unipay vigente) y {SKU_VALID_001} x 1 (sin promociones)",
   "screenshots": [
    {
     "caption": "Paso 3 — tarjeta de subtotales",
     "file": "TC-B2C44-D-014-p03-tarjeta-de-subtotales.png"
    }
   ],
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario anota el precio regular (X) y el precio Unipay (Y) del shelf de {SKU_UNIPAY_001} y el precio (P) de {SKU_VALID_001}.\n4. El usuario revisa los montos de la tarjeta de subtotales.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea\n{SKU_UNIPAY_001} = 000000000000661945-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "Sin recargar la página, \"Subtotal\" aumenta en X (precio regular) y \"Subtotal con Unipay\" aumenta en Y (precio Unipay) de {SKU_UNIPAY_001}; ambas líneas siguen visibles con el ícono Unipay.",
   "form_factor": "desktop",
   "id": "TC-B2C44-D-015",
   "name": "Verificar que los subtotales se recalculan al aumentar la cantidad de un ítem Unipay [Desktop] [Guest]",
   "observation": "Causa: {SKU_UNIPAY_001} (Lavaloza Quix 1.5 L) no tiene precio Unipay vigente: su ficha trae solo la etiqueta «Promoción % Unipay» y un único precio ($4.750), y el carro muestra solo «$4.750 c/u» y «Subtotal», sin tag ni «Subtotal con Unipay». Acción: declarar un SKU con precio Unipay vigente. Verificado en vivo el 2026-10-21.",
   "observed": "Causa: {SKU_UNIPAY_001} (Lavaloza Quix 1.5 L) no tiene precio Unipay vigente: su ficha trae solo la etiqueta «Promoción % Unipay» y un único precio ($4.750), y el carro muestra solo «$4.750 c/u» y «Subtotal», sin tag ni «Subtotal con Unipay». Acción: declarar un SKU con precio Unipay vigente. Verificado en vivo el 2026-10-21.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_UNIPAY_001} x 1 (promo Unipay vigente) y {SKU_VALID_001} x 1 (sin promociones)",
   "screenshots": [
    {
     "caption": "Paso 3 — tarjeta de subtotales",
     "file": "TC-B2C44-D-015-p03-tarjeta-de-subtotales.png"
    }
   ],
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario anota los montos de \"Subtotal\" y \"Subtotal con Unipay\".\n4. El usuario presiona \"+\" en el shelf de {SKU_UNIPAY_001} (cantidad 1 → 2).\n5. El usuario revisa nuevamente la tarjeta de subtotales.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea\n{SKU_UNIPAY_001} = 000000000000661945-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "La tarjeta de subtotales muestra solo \"Subtotal\" con su monto; no se muestran la línea \"Subtotal con Unipay\" ni el ícono de tarjeta Unipay.",
   "form_factor": "desktop",
   "id": "TC-B2C44-D-016",
   "name": "Verificar que sin ítems con descuento Unipay no se muestra Subtotal con Unipay [Desktop] [Guest]",
   "observed": "Con el carro sin promoción Unipay vigente la tarjeta muestra solo «Subtotal», sin «Subtotal con Unipay» ni su ícono. El carro de la prueba tenía los 9 productos (no solo {SKU_VALID_001} x 2) y ninguno con precio Unipay.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_VALID_001} x 2 (sin promociones, sin promo Unipay)",
   "screenshots": [
    {
     "caption": "Paso 3 — tarjeta de subtotales",
     "file": "TC-B2C44-D-016-p03-tarjeta-de-subtotales.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C44-D-016.png"
    }
   ],
   "spec": "tests/B2C-44.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica la tarjeta de subtotales.\n4. El usuario revisa cada línea de la tarjeta.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea\n{SKU_UNIPAY_001} = 000000000000661945-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "Sin recargar la página, la tarjeta muestra solo \"Subtotal\" con el monto de {SKU_VALID_001}; la línea \"Subtotal con Unipay\" y el ícono de tarjeta Unipay desaparecen.",
   "form_factor": "desktop",
   "id": "TC-B2C44-D-017",
   "name": "Verificar que al eliminar el único ítem Unipay desaparece Subtotal con Unipay [Desktop] [Guest]",
   "observation": "Causa: {SKU_UNIPAY_001} (Lavaloza Quix 1.5 L) no tiene precio Unipay vigente: su ficha trae solo la etiqueta «Promoción % Unipay» y un único precio ($4.750), y el carro muestra solo «$4.750 c/u» y «Subtotal», sin tag ni «Subtotal con Unipay». Acción: declarar un SKU con precio Unipay vigente. Verificado en vivo el 2026-10-21.",
   "observed": "Causa: {SKU_UNIPAY_001} (Lavaloza Quix 1.5 L) no tiene precio Unipay vigente: su ficha trae solo la etiqueta «Promoción % Unipay» y un único precio ($4.750), y el carro muestra solo «$4.750 c/u» y «Subtotal», sin tag ni «Subtotal con Unipay». Acción: declarar un SKU con precio Unipay vigente. Verificado en vivo el 2026-10-21.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_UNIPAY_001} x 1 (promo Unipay vigente) y {SKU_VALID_001} x 1 (sin promociones)",
   "screenshots": [
    {
     "caption": "Paso 3 — tarjeta de subtotales",
     "file": "TC-B2C44-D-017-p03-tarjeta-de-subtotales.png"
    }
   ],
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario verifica que se muestra \"Subtotal con Unipay\".\n4. El usuario presiona el basurero en el shelf de {SKU_UNIPAY_001}.\n5. El usuario revisa nuevamente la tarjeta de subtotales.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea\n{SKU_UNIPAY_001} = 000000000000661945-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "La tarjeta de subtotales muestra la línea \"Subtotal\" con su monto \"$XX.XXX\" y la línea \"Subtotal con Unipay\" con el ícono de tarjeta Unipay y su monto \"$XX.XXX\".",
   "form_factor": "mobile",
   "id": "TC-B2C44-M-013",
   "name": "Verificar que la tarjeta de subtotales muestra Subtotal y Subtotal con Unipay con su ícono [Mobile] [Guest]",
   "observation": "Causa: {SKU_UNIPAY_001} (Lavaloza Quix 1.5 L) no tiene precio Unipay vigente: su ficha trae solo la etiqueta «Promoción % Unipay» y un único precio ($4.750), y el carro muestra solo «$4.750 c/u» y «Subtotal», sin tag ni «Subtotal con Unipay». Acción: declarar un SKU con precio Unipay vigente. Verificado en vivo el 2026-10-21.",
   "observed": "Causa: {SKU_UNIPAY_001} (Lavaloza Quix 1.5 L) no tiene precio Unipay vigente: su ficha trae solo la etiqueta «Promoción % Unipay» y un único precio ($4.750), y el carro muestra solo «$4.750 c/u» y «Subtotal», sin tag ni «Subtotal con Unipay». Acción: declarar un SKU con precio Unipay vigente. Verificado en vivo el 2026-10-21.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_UNIPAY_001} x 1 (promo Unipay vigente) y {SKU_VALID_001} x 1 (sin promociones)",
   "screenshots": [
    {
     "caption": "Paso 3 — tarjeta de subtotales",
     "file": "TC-B2C44-M-013-p03-tarjeta-de-subtotales.png"
    }
   ],
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica la tarjeta de subtotales.\n4. El usuario revisa cada línea de la tarjeta.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea\n{SKU_UNIPAY_001} = 000000000000661945-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "\"Subtotal\" = 2·X + P (precios regulares). \"Subtotal con Unipay\" = 2·Y + P, es decir, el Subtotal menos el ahorro Unipay 2·(X − Y); el producto sin promoción se suma a precio normal. El Subtotal con Unipay es menor que el Subtotal.",
   "form_factor": "mobile",
   "id": "TC-B2C44-M-014",
   "name": "Verificar que el monto Subtotal con Unipay descuenta solo el ahorro de los ítems Unipay [Mobile] [Guest]",
   "observation": "Causa: {SKU_UNIPAY_001} (Lavaloza Quix 1.5 L) no tiene precio Unipay vigente: su ficha trae solo la etiqueta «Promoción % Unipay» y un único precio ($4.750), y el carro muestra solo «$4.750 c/u» y «Subtotal», sin tag ni «Subtotal con Unipay». Acción: declarar un SKU con precio Unipay vigente. Verificado en vivo el 2026-10-21.",
   "observed": "Causa: {SKU_UNIPAY_001} (Lavaloza Quix 1.5 L) no tiene precio Unipay vigente: su ficha trae solo la etiqueta «Promoción % Unipay» y un único precio ($4.750), y el carro muestra solo «$4.750 c/u» y «Subtotal», sin tag ni «Subtotal con Unipay». Acción: declarar un SKU con precio Unipay vigente. Verificado en vivo el 2026-10-21.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_UNIPAY_001} x 2 (promo Unipay vigente) y {SKU_VALID_001} x 1 (sin promociones)",
   "screenshots": [
    {
     "caption": "Paso 3 — tarjeta de subtotales",
     "file": "TC-B2C44-M-014-p03-tarjeta-de-subtotales.png"
    }
   ],
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario anota el precio regular (X) y el precio Unipay (Y) del shelf de {SKU_UNIPAY_001} y el precio (P) de {SKU_VALID_001}.\n4. El usuario revisa los montos de la tarjeta de subtotales.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea\n{SKU_UNIPAY_001} = 000000000000661945-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "Sin recargar la página, \"Subtotal\" aumenta en X (precio regular) y \"Subtotal con Unipay\" aumenta en Y (precio Unipay) de {SKU_UNIPAY_001}; ambas líneas siguen visibles con el ícono Unipay.",
   "form_factor": "mobile",
   "id": "TC-B2C44-M-015",
   "name": "Verificar que los subtotales se recalculan al aumentar la cantidad de un ítem Unipay [Mobile] [Guest]",
   "observation": "Causa: {SKU_UNIPAY_001} (Lavaloza Quix 1.5 L) no tiene precio Unipay vigente: su ficha trae solo la etiqueta «Promoción % Unipay» y un único precio ($4.750), y el carro muestra solo «$4.750 c/u» y «Subtotal», sin tag ni «Subtotal con Unipay». Acción: declarar un SKU con precio Unipay vigente. Verificado en vivo el 2026-10-21.",
   "observed": "Causa: {SKU_UNIPAY_001} (Lavaloza Quix 1.5 L) no tiene precio Unipay vigente: su ficha trae solo la etiqueta «Promoción % Unipay» y un único precio ($4.750), y el carro muestra solo «$4.750 c/u» y «Subtotal», sin tag ni «Subtotal con Unipay». Acción: declarar un SKU con precio Unipay vigente. Verificado en vivo el 2026-10-21.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_UNIPAY_001} x 1 (promo Unipay vigente) y {SKU_VALID_001} x 1 (sin promociones)",
   "screenshots": [
    {
     "caption": "Paso 3 — tarjeta de subtotales",
     "file": "TC-B2C44-M-015-p03-tarjeta-de-subtotales.png"
    }
   ],
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario anota los montos de \"Subtotal\" y \"Subtotal con Unipay\".\n4. El usuario toca \"+\" en el shelf de {SKU_UNIPAY_001} (cantidad 1 → 2).\n5. El usuario revisa nuevamente la tarjeta de subtotales.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea\n{SKU_UNIPAY_001} = 000000000000661945-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "La tarjeta de subtotales muestra solo \"Subtotal\" con su monto; no se muestran la línea \"Subtotal con Unipay\" ni el ícono de tarjeta Unipay.",
   "form_factor": "mobile",
   "id": "TC-B2C44-M-016",
   "name": "Verificar que sin ítems con descuento Unipay no se muestra Subtotal con Unipay [Mobile] [Guest]",
   "observed": "Con el carro sin promoción Unipay vigente la tarjeta muestra solo «Subtotal», sin «Subtotal con Unipay» ni su ícono. El carro de la prueba tenía los 9 productos (no solo {SKU_VALID_001} x 2) y ninguno con precio Unipay.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_VALID_001} x 2 (sin promociones, sin promo Unipay)",
   "screenshots": [
    {
     "caption": "Paso 3 — tarjeta de subtotales",
     "file": "TC-B2C44-M-016-p03-tarjeta-de-subtotales.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C44-M-016.png"
    }
   ],
   "spec": "tests/B2C-44.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario ubica la tarjeta de subtotales.\n4. El usuario revisa cada línea de la tarjeta.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea\n{SKU_UNIPAY_001} = 000000000000661945-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "Sin recargar la página, la tarjeta muestra solo \"Subtotal\" con el monto de {SKU_VALID_001}; la línea \"Subtotal con Unipay\" y el ícono de tarjeta Unipay desaparecen.",
   "form_factor": "mobile",
   "id": "TC-B2C44-M-017",
   "name": "Verificar que al eliminar el único ítem Unipay desaparece Subtotal con Unipay [Mobile] [Guest]",
   "observation": "Causa: {SKU_UNIPAY_001} (Lavaloza Quix 1.5 L) no tiene precio Unipay vigente: su ficha trae solo la etiqueta «Promoción % Unipay» y un único precio ($4.750), y el carro muestra solo «$4.750 c/u» y «Subtotal», sin tag ni «Subtotal con Unipay». Acción: declarar un SKU con precio Unipay vigente. Verificado en vivo el 2026-10-21.",
   "observed": "Causa: {SKU_UNIPAY_001} (Lavaloza Quix 1.5 L) no tiene precio Unipay vigente: su ficha trae solo la etiqueta «Promoción % Unipay» y un único precio ($4.750), y el carro muestra solo «$4.750 c/u» y «Subtotal», sin tag ni «Subtotal con Unipay». Acción: declarar un SKU con precio Unipay vigente. Verificado en vivo el 2026-10-21.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_UNIPAY_001} x 1 (promo Unipay vigente) y {SKU_VALID_001} x 1 (sin promociones)",
   "screenshots": [
    {
     "caption": "Paso 3 — tarjeta de subtotales",
     "file": "TC-B2C44-M-017-p03-tarjeta-de-subtotales.png"
    }
   ],
   "spec": "tests/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario verifica que se muestra \"Subtotal con Unipay\".\n4. El usuario toca el basurero en el shelf de {SKU_UNIPAY_001}.\n5. El usuario revisa nuevamente la tarjeta de subtotales.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea\n{SKU_UNIPAY_001} = 000000000000661945-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  }
 ]
}
-->
