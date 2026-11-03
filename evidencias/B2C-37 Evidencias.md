# Página del carro

| Campo | Valor |
|---|---|
| Suite | B2C-37 |
| Última actualización | 2026-11-02 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | chromium |
| Origen de los TC | Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-37 WEB Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 52 |
| Bloqueado Data | 22 |
| Rechazado | 11 |
| Bloqueado | 6 |
| **Total** | **91** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-02 | 91 | TC-B2C37-D-001, TC-B2C37-D-002, TC-B2C37-D-003, TC-B2C37-D-004, TC-B2C37-D-005, TC-B2C37-D-006, TC-B2C37-D-007, TC-B2C37-D-009, TC-B2C37-D-010, TC-B2C37-D-011, TC-B2C37-D-012, TC-B2C37-D-013, TC-B2C37-D-014, TC-B2C37-D-015, TC-B2C37-D-016, TC-B2C37-D-017, TC-B2C37-D-018, TC-B2C37-D-019, TC-B2C37-D-020, TC-B2C37-D-021, TC-B2C37-D-022, TC-B2C37-D-023, TC-B2C37-D-024, TC-B2C37-D-025, TC-B2C37-D-026, TC-B2C37-D-027, TC-B2C37-D-028, TC-B2C37-D-029, TC-B2C37-D-030, TC-B2C37-D-031, TC-B2C37-D-032, TC-B2C37-D-033, TC-B2C37-D-034, TC-B2C37-D-035, TC-B2C37-D-036, TC-B2C37-D-037, TC-B2C37-D-038, TC-B2C37-D-039, TC-B2C37-D-040, TC-B2C37-D-041, TC-B2C37-D-042, TC-B2C37-D-043, TC-B2C37-D-044, TC-B2C37-D-045, TC-B2C37-D-046, TC-B2C37-M-001, TC-B2C37-M-002, TC-B2C37-M-003, TC-B2C37-M-004, TC-B2C37-M-005, TC-B2C37-M-006, TC-B2C37-M-007, TC-B2C37-M-008, TC-B2C37-M-010, TC-B2C37-M-011, TC-B2C37-M-012, TC-B2C37-M-013, TC-B2C37-M-014, TC-B2C37-M-015, TC-B2C37-M-016, TC-B2C37-M-017, TC-B2C37-M-018, TC-B2C37-M-019, TC-B2C37-M-020, TC-B2C37-M-021, TC-B2C37-M-022, TC-B2C37-M-023, TC-B2C37-M-024, TC-B2C37-M-025, TC-B2C37-M-026, TC-B2C37-M-027, TC-B2C37-M-028, TC-B2C37-M-029, TC-B2C37-M-030, TC-B2C37-M-031, TC-B2C37-M-032, TC-B2C37-M-033, TC-B2C37-M-034, TC-B2C37-M-035, TC-B2C37-M-036, TC-B2C37-M-037, TC-B2C37-M-038, TC-B2C37-M-039, TC-B2C37-M-040, TC-B2C37-M-041, TC-B2C37-M-042, TC-B2C37-M-043, TC-B2C37-M-044, TC-B2C37-M-045, TC-B2C37-M-046, TC-B2C37-M-047 |

## Detalle por caso de prueba

### TC-B2C37-D-001 - Verificar que el carrito muestra el layout de dos columnas con ítems disponibles sin Unipay [Desktop] [Logueado]

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

### TC-B2C37-D-002 - Verificar que el carrito no muestra "Guardar como lista" al usuario invitado [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
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

{DIRECCION_DESPACHO_002} = Vilanova 122, Las Condes

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra en la columna derecha la tarjeta de totales y solo el botón "Vaciar carro".

**Resultado esperado**

La columna derecha muestra el botón "Vaciar carro" y no muestra "Guardar como lista".

**Resultado obtenido**

Esperado: la columna derecha muestra 'Vaciar carro' y no 'Guardar como lista'. Obtenido: como invitado con dirección Vilanova 122 y {SKU_VALID_001} en el carro, la columna derecha muestra 'Guardar como lista' y 'Vaciar carro' (2 de 2 intentos). Bug B2C-1264.

**Observación**

Esperado: la columna derecha muestra 'Vaciar carro' y no 'Guardar como lista'. Obtenido: como invitado con dirección Vilanova 122 y {SKU_VALID_001} en el carro, la columna derecha muestra 'Guardar como lista' y 'Vaciar carro' (2 de 2 intentos). Bug B2C-1264.

**Evidencia**

![Paso 2 — columna derecha del carro invitado](<B2C-37 Evidencias/TC-B2C37-D-002-p02-columna-derecha-del-carro-invitado.png>)

---

### TC-B2C37-D-003 - Verificar que la tarjeta de totales muestra "Subtotal con Unipay" con descuento Unipay [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
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

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_UNIPAY_001} = TBD
- {COMPRADOR_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra en la tarjeta de totales las líneas "Subtotal" y "Subtotal con Unipay".

**Resultado esperado**

La tarjeta de totales muestra "Subtotal" y "Subtotal con Unipay", con un monto de "Subtotal con Unipay" menor al "Subtotal".

**Observación**

Falta data: el SKU {SKU_UNIPAY_001} queda en el carro con su precio normal y sin precio Unipay, por lo que no aparece la línea «Subtotal con Unipay». El producto declarado no tiene descuento Unipay en el ambiente. Acción: proveer un SKU con descuento Unipay vigente (quien administra el Excel de data).

**Evidencia**

![Estado final](<B2C-37 Evidencias/TC-B2C37-D-003.png>)

---

### TC-B2C37-D-004 - Verificar que "Guardar como lista" inicia el flujo de guardado de lista [Desktop] [Logueado]

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

### TC-B2C37-D-005 - Verificar que "Continuar con la entrega" avanza al paso Datos de entrega [Desktop] [Logueado]

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

### TC-B2C37-D-006 - Verificar que el carrito muestra disponibles colapsados y no disponibles expandidos [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
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

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {COMPRADOR_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el acordeón de ítems disponibles colapsado (logo Unimarc + número de ítems + "productos" + chevron ↓) con el carrusel de miniaturas de 60×60 px, y el acordeón de ítems no disponibles expandido (ícono de carrito tachado + "Productos no disponibles" + "N productos" + chevron ↓) con la lista completa de ítems no disponibles. En la columna derecha muestra la tarjeta de totales, "Guardar como lista" y "Vaciar carro".

**Resultado esperado**

El acordeón de disponibles se muestra colapsado con carrusel de miniaturas y el de no disponibles expandido con la lista completa de ítems no disponibles.

**Observación**

Falta data: {SKU_NO_DISPONIBLE} figura «Pronto disponible» sin «Agregar» en el ambiente, por lo que no se puede dejar en el carro. Acción: cargar un SKU sin stock que sí permita agregarlo (quien administra el Excel de data).

**Evidencia**

![Estado final](<B2C-37 Evidencias/TC-B2C37-D-006.png>)

---

### TC-B2C37-D-007 - Verificar que el carrusel de disponibles muestra el tile "+N" con los ítems restantes [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
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

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKUS_CARRUSEL} = TBD
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {COMPRADOR_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito con el acordeón de disponibles colapsado y muestra en el carrusel las miniaturas que caben y un tile "+N" en gris.

**Resultado esperado**

El carrusel muestra un tile "+N" en gris donde N es la cantidad de ítems disponibles que no se muestran como miniatura.

**Observación**

Falta data: {SKU_NO_DISPONIBLE} figura «Pronto disponible» sin «Agregar» en el ambiente, por lo que no se puede dejar en el carro. Acción: cargar un SKU sin stock que sí permita agregarlo (quien administra el Excel de data).

**Evidencia**

![Estado final](<B2C-37 Evidencias/TC-B2C37-D-007.png>)

---

### TC-B2C37-D-009 - Verificar que una sección colapsada se expande al hacer clic en su encabezado [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
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

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {COMPRADOR_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.
3. El usuario hace clic en el encabezado del acordeón de ítems disponibles.
4. El sistema expande la sección: el chevron cambia a ↑, el carrusel de miniaturas se oculta y se muestra la lista completa de ítems.

**Resultado esperado**

La sección de ítems disponibles queda expandida: el chevron cambia a ↑, el carrusel de miniaturas se oculta y se muestra la lista completa de ítems.

**Observación**

Falta data: {SKU_NO_DISPONIBLE} figura «Pronto disponible» sin «Agregar» en el ambiente, por lo que no se puede dejar en el carro. Acción: cargar un SKU sin stock que sí permita agregarlo (quien administra el Excel de data).

**Evidencia**

![Estado final](<B2C-37 Evidencias/TC-B2C37-D-009.png>)

---

### TC-B2C37-D-010 - Verificar que una sección expandida se colapsa al hacer clic en su encabezado [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
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

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {COMPRADOR_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.
3. El usuario hace clic en el encabezado del acordeón de productos no disponibles.
4. El sistema colapsa la sección: el chevron cambia a ↓, la lista de ítems se oculta y se muestra el carrusel de miniaturas.

**Resultado esperado**

La sección queda colapsada: el chevron cambia a ↓, la lista de ítems se oculta y se muestra el carrusel de miniaturas.

**Observación**

Falta data: {SKU_NO_DISPONIBLE} figura «Pronto disponible» sin «Agregar» en el ambiente, por lo que no se puede dejar en el carro. Acción: cargar un SKU sin stock que sí permita agregarlo (quien administra el Excel de data).

**Evidencia**

![Estado final](<B2C-37 Evidencias/TC-B2C37-D-010.png>)

---

### TC-B2C37-D-011 - Verificar que las secciones disponibles y no disponibles cambian de estado de forma independiente [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
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

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {COMPRADOR_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.
3. El usuario hace clic en el encabezado del acordeón de ítems disponibles.
4. El sistema expande la sección de ítems disponibles y mantiene expandida la sección de no disponibles.
5. El usuario hace clic en el encabezado del acordeón de productos no disponibles.
6. El sistema colapsa la sección de no disponibles y mantiene expandida la sección de ítems disponibles.

**Resultado esperado**

Cada sección cambia de estado sin modificar el estado de la otra (disponibles expandida y no disponibles colapsada al final).

**Observación**

Falta data: {SKU_NO_DISPONIBLE} figura «Pronto disponible» sin «Agregar» en el ambiente, por lo que no se puede dejar en el carro. Acción: cargar un SKU sin stock que sí permita agregarlo (quien administra el Excel de data).

**Evidencia**

![Estado final](<B2C-37 Evidencias/TC-B2C37-D-011.png>)

---

### TC-B2C37-D-012 - Verificar que el estado de los acordeones vuelve al inicial al recargar el carrito [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
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

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {COMPRADOR_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.
3. El usuario hace clic en el encabezado del acordeón de ítems disponibles.
4. El sistema expande la sección de ítems disponibles.
5. El usuario recarga la página.
6. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.

**Resultado esperado**

Tras recargar o reingresar, el carrito vuelve al estado inicial: disponibles colapsado y no disponibles expandido.

**Observación**

Falta data: {SKU_NO_DISPONIBLE} figura «Pronto disponible» sin «Agregar» en el ambiente, por lo que no se puede dejar en el carro. Acción: cargar un SKU sin stock que sí permita agregarlo (quien administra el Excel de data).

**Evidencia**

![Estado final](<B2C-37 Evidencias/TC-B2C37-D-012.png>)

---

### TC-B2C37-D-013 - Verificar que cada ítem disponible muestra imagen, nombre, precios, cantidad y controles [Desktop] [Logueado]

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

### TC-B2C37-D-014 - Verificar que los ítems disponibles se ordenan del agregado más reciente al más antiguo [Desktop] [Logueado]

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

Esperado: los ítems se listan del agregado más reciente al más antiguo ({SKU_VALID_001}, {SKU_PESABLE}, {SKU_UNITARIO}). Obtenido: tras agregar en orden Lavalozas Quix → Mangos granel → Albóndigas Super Pollo, el carro los lista Lavalozas Quix, Mangos granel, Albóndigas: del más antiguo al más reciente. tests/B2C-37.spec.ts. Bug: B2C-1257.

**Observación**

Esperado: los ítems se listan del agregado más reciente al más antiguo ({SKU_VALID_001}, {SKU_PESABLE}, {SKU_UNITARIO}). Obtenido: tras agregar en orden Lavalozas Quix → Mangos granel → Albóndigas Super Pollo, el carro los lista Lavalozas Quix, Mangos granel, Albóndigas: del más antiguo al más reciente. tests/B2C-37.spec.ts. Bug: B2C-1257.

**Evidencia**

![Paso 6 — orden de los items](<B2C-37 Evidencias/TC-B2C37-D-014-p06-orden-de-los-items.png>)

---

### TC-B2C37-D-015 - Verificar que cada ítem no disponible muestra overlay, badge, faltantes y "Reemplazar" [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
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

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {COMPRADOR_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra por cada ítem no disponible: imagen con overlay blanco semitransparente, badge "Pronto disponible" (fondo gris, texto gris), nombre, texto "Faltantes: N un" con la cantidad solicitada y CTA "Reemplazar" y el link "Eliminar".

**Resultado esperado**

Cada ítem no disponible muestra imagen con overlay, badge "Pronto disponible", nombre, "Faltantes: N un" y CTA "Reemplazar", además del link "Eliminar".

**Observación**

Falta data: {SKU_NO_DISPONIBLE} figura «Pronto disponible» sin «Agregar» en el ambiente, por lo que no se puede dejar en el carro. Acción: cargar un SKU sin stock que sí permita agregarlo (quien administra el Excel de data).

**Evidencia**

![Estado final](<B2C-37 Evidencias/TC-B2C37-D-015.png>)

---

### TC-B2C37-D-016 - Verificar que los ítems no disponibles no permiten cambiar cantidad ni suman al subtotal [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
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

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {COMPRADOR_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito con el acordeón de no disponibles expandido.
3. El usuario revisa un ítem no disponible y la tarjeta de totales.
4. El sistema muestra el ítem no disponible sin controles +/− y el Subtotal calculado solo con los ítems disponibles.

**Resultado esperado**

El ítem no disponible no tiene controles para modificar la cantidad y el Subtotal corresponde solo a {SKU_VALID_001}.

**Observación**

Falta data: {SKU_NO_DISPONIBLE} figura «Pronto disponible» sin «Agregar» en el ambiente, por lo que no se puede dejar en el carro. Acción: cargar un SKU sin stock que sí permita agregarlo (quien administra el Excel de data).

**Evidencia**

![Estado final](<B2C-37 Evidencias/TC-B2C37-D-016.png>)

---

### TC-B2C37-D-017 - Verificar que "Reemplazar" inicia el flujo de productos similares [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
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

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {COMPRADOR_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito con el acordeón de no disponibles expandido.
3. El usuario hace clic en "Reemplazar" en el ítem {SKU_NO_DISPONIBLE}.
4. El sistema inicia el flujo de búsqueda de productos similares (B2C-40).

**Resultado esperado**

Se inicia el flujo de productos similares definido en B2C-40 para {SKU_NO_DISPONIBLE}.

**Observación**

Falta data: {SKU_NO_DISPONIBLE} figura «Pronto disponible» sin «Agregar» en el ambiente, por lo que no se puede dejar en el carro. Acción: cargar un SKU sin stock que sí permita agregarlo (quien administra el Excel de data).

**Evidencia**

![Estado final](<B2C-37 Evidencias/TC-B2C37-D-017.png>)

---

### TC-B2C37-D-018 - Verificar que el link "Eliminar" quita el ítem no disponible del carrito [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
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

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {COMPRADOR_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito con el acordeón de no disponibles expandido.
3. El usuario hace clic en "Eliminar" en el ítem {SKU_NO_DISPONIBLE}.
4. El sistema quita el ítem {SKU_NO_DISPONIBLE} del carrito.

**Resultado esperado**

{SKU_NO_DISPONIBLE} ya no aparece en el carrito y {SKU_VALID_001} se mantiene.

**Observación**

Falta data: {SKU_NO_DISPONIBLE} figura «Pronto disponible» sin «Agregar» en el ambiente, por lo que no se puede dejar en el carro. Acción: cargar un SKU sin stock que sí permita agregarlo (quien administra el Excel de data).

**Evidencia**

![Estado final](<B2C-37 Evidencias/TC-B2C37-D-018.png>)

---

### TC-B2C37-D-019 - Verificar que "Vaciar carro" abre el modal de confirmación con su contenido [Desktop] [Logueado]

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

Esperado: el modal 'Vaciar el carro' muestra imagen, título, subtítulo, 'Sí, eliminar', 'No, gracias' e ícono 'X' en la esquina superior izquierda. Obtenido: todo está, pero la X está en la esquina superior derecha (a 400 px del borde izquierdo de un modal de 448 px). tests/B2C-37.spec.ts. Bug: B2C-1259.

**Observación**

Esperado: el modal 'Vaciar el carro' muestra imagen, título, subtítulo, 'Sí, eliminar', 'No, gracias' e ícono 'X' en la esquina superior izquierda. Obtenido: todo está, pero la X está en la esquina superior derecha (a 400 px del borde izquierdo de un modal de 448 px). tests/B2C-37.spec.ts. Bug: B2C-1259.

**Evidencia**

![Paso 4 — modal vaciar el carro](<B2C-37 Evidencias/TC-B2C37-D-019-p04-modal-vaciar-el-carro.png>)

---

### TC-B2C37-D-020 - Verificar que el modal muestra el estado de carga al confirmar el vaciado [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
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

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_UNITARIO} = 000000000400254005-UN
- {COMPRADOR_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en el botón "Vaciar carro".
4. El sistema despliega el modal de confirmación "Vaciar el carro".
5. El usuario hace clic en "Sí, eliminar".
6. El sistema reemplaza el botón "Sí, eliminar" por un indicador de carga y deshabilita "No, gracias" mientras procesa.

**Resultado esperado**

Durante el procesamiento, "Sí, eliminar" se muestra como indicador de carga y "No, gracias" queda deshabilitado.

**Observación**

Causa: el caso excedió el timeout de 6 min en dos intentos y el navegador se cerró al capturar la evidencia del modal de vaciado; no se obtuvo veredicto del producto. Acción requerida: repetir el caso con el ambiente estable.

---

### TC-B2C37-D-021 - Verificar que "Sí, eliminar" vacía el carro y muestra el estado de carro vacío [Desktop] [Logueado]

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

### TC-B2C37-D-022 - Verificar que "No, gracias" cierra el modal sin cambios en el carro [Desktop] [Logueado]

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

### TC-B2C37-D-023 - Verificar que la "X" del modal lo cierra sin cambios en el carro [Desktop] [Logueado]

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

### TC-B2C37-D-024 - Verificar que el carrito muestra el toast de restricción de alcohol [Desktop] [Logueado]

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
- El carro contiene {SKU_ALCOHOL} (producto con restricción de alcohol)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_ALCOHOL} = 000000000000653466-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra un toast informativo con título "Información importante", el mensaje "Deberás mostrar tu carnet al recibir compras de bebidas alcohólicas." e ícono "X".

**Resultado esperado**

Se muestra el toast "Información importante" con el mensaje de carnet y {SKU_ALCOHOL} permanece en el carrito.

**Resultado obtenido**

Con {SKU_ALCOHOL} en el carro se muestra el toast 'Información importante' con 'Deberás mostrar tu carnet al recibir compras de bebidas alcohólicas.' y su X; el producto sigue en el carrito.

**Evidencia**

![Estado final](<B2C-37 Evidencias/TC-B2C37-D-024.png>)

---

### TC-B2C37-D-025 - Verificar que la "X" cierra el toast de restricción de alcohol [Desktop] [Logueado]

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
- El carro contiene {SKU_ALCOHOL} (producto con restricción de alcohol)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_ALCOHOL} = 000000000000653466-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra un toast informativo con título "Información importante", el mensaje "Deberás mostrar tu carnet al recibir compras de bebidas alcohólicas." e ícono "X".
3. El usuario hace clic en el ícono "X" del toast.
4. El sistema cierra el toast.

**Resultado esperado**

El toast deja de mostrarse y {SKU_ALCOHOL} permanece en el carrito.

**Resultado obtenido**

La X cierra el toast de alcohol y {SKU_ALCOHOL} sigue en el carrito.

**Evidencia**

![Paso 2 — toast de alcohol visible](<B2C-37 Evidencias/TC-B2C37-D-025-p02-toast-de-alcohol-visible.png>)

![Estado final](<B2C-37 Evidencias/TC-B2C37-D-025.png>)

---

### TC-B2C37-D-026 - Verificar que el toast de restricción de alcohol desaparece a los 4 segundos [Desktop] [Logueado]

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
- El carro contiene {SKU_ALCOHOL} (producto con restricción de alcohol)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_ALCOHOL} = 000000000000653466-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra un toast informativo con título "Información importante", el mensaje "Deberás mostrar tu carnet al recibir compras de bebidas alcohólicas." e ícono "X".
3. El usuario espera 4 segundos sin interactuar con el toast.
4. El sistema oculta el toast automáticamente.

**Resultado esperado**

El toast desaparece solo a los 4 segundos de mostrarse.

**Resultado obtenido**

Esperado: el toast 'Información importante' se oculta solo a los 4 segundos. Obtenido: con {SKU_ALCOHOL} en el carro el toast sigue visible a los 15 segundos de mostrarse (2 de 2 intentos). Bug B2C-1266.

**Observación**

Esperado: el toast 'Información importante' se oculta solo a los 4 segundos. Obtenido: con {SKU_ALCOHOL} en el carro el toast sigue visible a los 15 segundos de mostrarse (2 de 2 intentos). Bug B2C-1266.

**Evidencia**

![Paso 2 — toast de alcohol al aparecer](<B2C-37 Evidencias/TC-B2C37-D-026-p02-toast-de-alcohol-al-aparecer.png>)

![Paso 3 — toast todavia visible a los 15 s](<B2C-37 Evidencias/TC-B2C37-D-026-p03-toast-todavia-visible-a-los-15-s.png>)

---

### TC-B2C37-D-027 - Verificar que el carrito sin ítems muestra el estado vacío con "Ir a Comprar" [Desktop] [Guest]

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

### TC-B2C37-D-028 - Verificar que "Ir a Comprar" del carro vacío redirige al Home [Desktop] [Guest]

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

### TC-B2C37-D-029 - Verificar que el carrito muestra el estado de error CRT-020 sin ítems parciales [Desktop] [Logueado]

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
- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_API_ENDPOINT} = *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/customer/shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/abk0k1kXsWxHARxbs2xaYYxKs1/baskets

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

Con la request del carro bloqueada se muestra 'No pudimos mostrar tu carro', 'Tenemos problemas con cargar tus productos. Por favor, inténtalo otra vez.', imagen, 'Volver al inicio', 'Reintentar' y 'Error: CRT-020', sin ítems ni totales. El bloqueo se hizo sobre la request GET .../shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/<id>/baskets de {CART_API_ENDPOINT}: el token trae el id de otro cliente (abk0k1kXsWxHARxbs2xaYYxKs1), así que se bloqueó la misma ruta con el id de la cuenta usada.

**Observación**

Con la request del carro bloqueada se muestra 'No pudimos mostrar tu carro', 'Tenemos problemas con cargar tus productos. Por favor, inténtalo otra vez.', imagen, 'Volver al inicio', 'Reintentar' y 'Error: CRT-020', sin ítems ni totales. El bloqueo se hizo sobre la request GET .../shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/<id>/baskets de {CART_API_ENDPOINT}: el token trae el id de otro cliente (abk0k1kXsWxHARxbs2xaYYxKs1), así que se bloqueó la misma ruta con el id de la cuenta usada.

**Evidencia**

![Estado final](<B2C-37 Evidencias/TC-B2C37-D-029.png>)

---

### TC-B2C37-D-030 - Verificar que "Volver al inicio" del error de carga navega al Home [Desktop] [Logueado]

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
- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_API_ENDPOINT} = *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/customer/shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/abk0k1kXsWxHARxbs2xaYYxKs1/baskets

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

Desde el error CRT-020, 'Volver al inicio' lleva al Home. El bloqueo se hizo sobre la request GET .../shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/<id>/baskets de {CART_API_ENDPOINT}: el token trae el id de otro cliente (abk0k1kXsWxHARxbs2xaYYxKs1), así que se bloqueó la misma ruta con el id de la cuenta usada.

**Observación**

Desde el error CRT-020, 'Volver al inicio' lleva al Home. El bloqueo se hizo sobre la request GET .../shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/<id>/baskets de {CART_API_ENDPOINT}: el token trae el id de otro cliente (abk0k1kXsWxHARxbs2xaYYxKs1), así que se bloqueó la misma ruta con el id de la cuenta usada.

**Evidencia**

![Paso 2 — estado de error crt 020](<B2C-37 Evidencias/TC-B2C37-D-030-p02-estado-de-error-crt-020.png>)

![Estado final](<B2C-37 Evidencias/TC-B2C37-D-030.png>)

---

### TC-B2C37-D-031 - Verificar que "Reintentar" vuelve a cargar el contenido del carrito [Desktop] [Logueado]

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
- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_API_ENDPOINT} = *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/customer/shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/abk0k1kXsWxHARxbs2xaYYxKs1/baskets

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

Al quitar el bloqueo y tocar 'Reintentar', el carrito carga y muestra {SKU_VALID_001}. El bloqueo se hizo sobre la request GET .../shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/<id>/baskets de {CART_API_ENDPOINT}: el token trae el id de otro cliente (abk0k1kXsWxHARxbs2xaYYxKs1), así que se bloqueó la misma ruta con el id de la cuenta usada.

**Evidencia**

![Paso 2 — estado de error crt 020](<B2C-37 Evidencias/TC-B2C37-D-031-p02-estado-de-error-crt-020.png>)

![Estado final](<B2C-37 Evidencias/TC-B2C37-D-031.png>)

---

### TC-B2C37-D-032 - Verificar que el error al vaciar muestra el toast CRT-076 y conserva los ítems [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
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

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {VACIAR_CARRO_API_ENDPOINT} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_UNITARIO} = 000000000400254005-UN
- {COMPRADOR_USER} = 11.223.344-K
- {COMPRADOR_PASSWORD} = [omitido]

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

Con las requests DELETE de ítems del carro bloqueadas y {SKU_VALID_001} + {SKU_UNITARIO} en el carro: al confirmar «Sí, eliminar» aparece el toast «¡Lo sentimos! No pudimos vaciar tu carro, vuelve a intentarlo! [CRT-076]» y el carro conserva sus ítems.

**Evidencia**

![Paso 4 — modal «Vaciar el carro»](<B2C-37 Evidencias/TC-B2C37-D-032-p04-modal-vaciar-el-carro.png>)

![Paso 6 — toast CRT-076](<B2C-37 Evidencias/TC-B2C37-D-032-p06-toast-crt-076.png>)

![Estado final](<B2C-37 Evidencias/TC-B2C37-D-032.png>)

---

### TC-B2C37-D-033 - Verificar que el toast de error CRT-076 permanece hasta cerrarlo con la X [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
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

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {VACIAR_CARRO_API_ENDPOINT} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_UNITARIO} = 000000000400254005-UN
- {COMPRADOR_USER} = 11.223.344-K
- {COMPRADOR_PASSWORD} = [omitido]

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

Con las requests DELETE de ítems del carro bloqueadas: el toast CRT-076 sigue visible a los 10 s y solo se cierra con la X.

**Evidencia**

![Paso 4 — modal «Vaciar el carro»](<B2C-37 Evidencias/TC-B2C37-D-033-p04-modal-vaciar-el-carro.png>)

![Paso 6 — toast CRT-076](<B2C-37 Evidencias/TC-B2C37-D-033-p06-toast-crt-076.png>)

![Estado final](<B2C-37 Evidencias/TC-B2C37-D-033.png>)

---

### TC-B2C37-D-034 - Verificar que el carrito bajo el mínimo muestra el faltante y deshabilita el CTA [Desktop] [Logueado]

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

### TC-B2C37-D-035 - Verificar que el monto faltante del toast se actualiza al cambiar la cantidad [Desktop] [Logueado]

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

### TC-B2C37-D-036 - Verificar que la X cierra el toast de monto mínimo [Desktop] [Logueado]

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

### TC-B2C37-D-037 - Verificar que el carrito sobre el mínimo con Retiro habilita "Continuar con la entrega" [Desktop] [Logueado]

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

### TC-B2C37-D-038 - Verificar que al alcanzar el mínimo se oculta el toast y se habilita el CTA en tiempo real [Desktop] [Logueado]

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

### TC-B2C37-D-039 - Verificar que el carrito muestra el banner de membresía para cliente sin membresía previa [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-02 |
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

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_VALID_001} = 000000000000675191-UN
- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K
- SKU_OFERTA_MEMBRESIA = 000000000000178089-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner "Ahorra $X siendo Diamante · Prueba y disfruta 15 días gratis." con el CTA "Lo quiero".

**Resultado esperado**

Se muestra el banner "Ahorra $X siendo Diamante · Prueba y disfruta 15 días gratis." con $X calculado sobre el carro y el CTA "Lo quiero".

**Resultado obtenido**

Esperado: banner «Ahorra $X siendo Diamante · Prueba y disfruta 15 días gratis.» con el CTA «Lo quiero». Obtenido: el carro carga con el precio normal y no muestra el banner (corridas del 12-oct y 2-nov). Duda abierta: no se pudo confirmar desde el storefront que la cuenta nunca tuvo membresía. Bug B2C-1434.

**Observación**

Esperado: banner «Ahorra $X siendo Diamante · Prueba y disfruta 15 días gratis.» con el CTA «Lo quiero». Obtenido: el carro carga con el precio normal y no muestra el banner (corridas del 12-oct y 2-nov). Duda abierta: no se pudo confirmar desde el storefront que la cuenta nunca tuvo membresía. Bug B2C-1434.

**Evidencia**

![Estado final](<B2C-37 Evidencias/TC-B2C37-D-039.png>)

---

### TC-B2C37-D-040 - Verificar que "Lo quiero" abre el flujo de contratación de membresía [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
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

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_VALID_001} = 000000000000675191-UN
- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner "Ahorra $X siendo Diamante · Prueba y disfruta 15 días gratis." con el CTA "Lo quiero".
3. El usuario hace clic en "Lo quiero".
4. El sistema abre el flujo de contratación de membresía (B2C-42).

**Resultado esperado**

Se abre el flujo de contratación de membresía definido en B2C-42.

**Observación**

Causa: el caso abre el flujo de contratación o renovación de membresía definido en B2C-42 y no se puede llegar a él: la tarea de desarrollo web de B2C-42 (B2C-409) está «En curso». Acción requerida: repetir el caso cuando B2C-409 esté desplegada en DEV.

**Evidencia**

![Paso 2 — carro de la cuenta sin membresia](<B2C-37 Evidencias/TC-B2C37-D-040-p02-carro-de-la-cuenta-sin-membresia.png>)

---

### TC-B2C37-D-041 - Verificar que el carrito muestra el banner de renovación para membresía expirada [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-02 |
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

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_VALID_001} = 000000000000675191-UN
- {COMPRADOR_MEMBRESIA_EXPIRADA_USER} = TBD
- {SKU_OFERTA_MEMBRESIA} = 000000000000178089-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner "Ahorrarías $X siendo Diamante · Vuelve, te extrañamos." con el CTA "Renovar".

**Resultado esperado**

Se muestra el banner "Ahorrarías $X siendo Diamante · Vuelve, te extrañamos." con $X calculado sobre el carro y el CTA "Renovar".

**Resultado obtenido**

Esperado: banner «Ahorrarías $X siendo Diamante · Vuelve, te extrañamos.» con el CTA «Renovar». Obtenido: el carro carga con el precio normal y no muestra el banner (corridas del 12-oct y 2-nov). Duda abierta: desde el storefront no se distingue una cuenta Nueva de una Expirada. Bug B2C-1436.

**Observación**

Esperado: banner «Ahorrarías $X siendo Diamante · Vuelve, te extrañamos.» con el CTA «Renovar». Obtenido: el carro carga con el precio normal y no muestra el banner (corridas del 12-oct y 2-nov). Duda abierta: desde el storefront no se distingue una cuenta Nueva de una Expirada. Bug B2C-1436.

**Evidencia**

![Paso 2 — carro de la cuenta con membresia expirada](<B2C-37 Evidencias/TC-B2C37-D-041-p02-carro-de-la-cuenta-con-membresia-expirada.png>)

---

### TC-B2C37-D-042 - Verificar que "Renovar" abre el flujo de renovación de membresía [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
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

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_VALID_001} = 000000000000675191-UN
- {COMPRADOR_MEMBRESIA_EXPIRADA_USER} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner "Ahorrarías $X siendo Diamante · Vuelve, te extrañamos." con el CTA "Renovar".
3. El usuario hace clic en "Renovar".
4. El sistema abre el flujo de renovación de membresía (B2C-42).

**Resultado esperado**

Se abre el flujo de renovación de membresía definido en B2C-42.

**Observación**

Causa: el caso abre el flujo de contratación o renovación de membresía definido en B2C-42 y no se puede llegar a él: la tarea de desarrollo web de B2C-42 (B2C-409) está «En curso». Acción requerida: repetir el caso cuando B2C-409 esté desplegada en DEV.

**Evidencia**

![Paso 2 — carro de la cuenta con membresia expirada](<B2C-37 Evidencias/TC-B2C37-D-042-p02-carro-de-la-cuenta-con-membresia-expirada.png>)

---

### TC-B2C37-D-043 - Verificar que el carrito no muestra el banner de membresía al usuario invitado [Desktop] [Guest]

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
- Sesión de invitado (sin iniciar sesión)
- El carro contiene {SKU_VALID_001}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carro invitado.

**Resultado esperado**

El carrito no muestra el banner de oferta de membresía.

**Resultado obtenido**

Como invitado con dirección y {SKU_VALID_001} en el carro, el carrito carga y no muestra el banner de membresía.

**Evidencia**

![Estado final](<B2C-37 Evidencias/TC-B2C37-D-043.png>)

---

### TC-B2C37-D-044 - Verificar que el carrito muestra el skeleton de carga mientras procesa la solicitud [Desktop] [Logueado]

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

### TC-B2C37-D-045 - Verificar que el skeleton se reemplaza por el contenido del carrito sin parpadeo [Desktop] [Logueado]

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

### TC-B2C37-D-046 - Verificar que el skeleton se reemplaza por el estado de error si la carga falla [Desktop] [Logueado]

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
- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_API_ENDPOINT} = *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/customer/shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/abk0k1kXsWxHARxbs2xaYYxKs1/baskets

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

Con red lenta y la request del carro bloqueada se ve el skeleton y luego se reemplaza por 'No pudimos mostrar tu carro' con 'Error: CRT-020', sin skeletons restantes. El bloqueo se hizo sobre la request GET .../shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/<id>/baskets de {CART_API_ENDPOINT}: el token trae el id de otro cliente (abk0k1kXsWxHARxbs2xaYYxKs1), así que se bloqueó la misma ruta con el id de la cuenta usada.

**Observación**

Con red lenta y la request del carro bloqueada se ve el skeleton y luego se reemplaza por 'No pudimos mostrar tu carro' con 'Error: CRT-020', sin skeletons restantes. El bloqueo se hizo sobre la request GET .../shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/<id>/baskets de {CART_API_ENDPOINT}: el token trae el id de otro cliente (abk0k1kXsWxHARxbs2xaYYxKs1), así que se bloqueó la misma ruta con el id de la cuenta usada.

**Evidencia**

![Paso 2 — skeleton de carga del carrito](<B2C-37 Evidencias/TC-B2C37-D-046-p02-skeleton-de-carga-del-carrito.png>)

![Estado final](<B2C-37 Evidencias/TC-B2C37-D-046.png>)

---

### TC-B2C37-M-001 - Verificar que el carrito muestra el layout con ítems disponibles y totales fijos sin Unipay [Mobile] [Logueado]

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

### TC-B2C37-M-002 - Verificar que la tarjeta de totales muestra "Subtotal con Unipay" con descuento Unipay [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
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

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_UNIPAY_001} = TBD
- {COMPRADOR_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra en la tarjeta de totales las líneas "Subtotal" y "Subtotal con Unipay".

**Resultado esperado**

La tarjeta de totales muestra "Subtotal" y "Subtotal con Unipay", con un monto de "Subtotal con Unipay" menor al "Subtotal".

**Observación**

Falta data: el SKU {SKU_UNIPAY_001} queda en el carro con su precio normal y sin precio Unipay, por lo que no aparece la línea «Subtotal con Unipay». El producto declarado no tiene descuento Unipay en el ambiente. Acción: proveer un SKU con descuento Unipay vigente (quien administra el Excel de data).

**Evidencia**

![Estado final](<B2C-37 Evidencias/TC-B2C37-M-002.png>)

---

### TC-B2C37-M-003 - Verificar que el menú ⋯ muestra "Guardar como lista" y "Vaciar carro" [Mobile] [Logueado]

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

### TC-B2C37-M-004 - Verificar que el menú ⋯ muestra solo "Vaciar carro" al usuario invitado [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
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

{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca el menú de tres puntos (⋯).
4. El sistema despliega el menú con la opción "Vaciar carro" + ícono.

**Resultado esperado**

El menú ⋯ muestra "Vaciar carro" + ícono y no muestra "Guardar como lista".

**Resultado obtenido**

Esperado: el menú ⋯ muestra solo 'Vaciar carro' + ícono. Obtenido: como invitado con dirección Av. San Josemaría Escrivá de Balaguer 14833 y {SKU_VALID_001} en el carro, el menú ⋯ muestra 'Guardar como lista' y 'Vaciar carro' (2 de 2 intentos). Bug B2C-1265.

**Observación**

Esperado: el menú ⋯ muestra solo 'Vaciar carro' + ícono. Obtenido: como invitado con dirección Av. San Josemaría Escrivá de Balaguer 14833 y {SKU_VALID_001} en el carro, el menú ⋯ muestra 'Guardar como lista' y 'Vaciar carro' (2 de 2 intentos). Bug B2C-1265.

**Evidencia**

![Paso 3 — menu del invitado](<B2C-37 Evidencias/TC-B2C37-M-004-p03-menu-del-invitado.png>)

---

### TC-B2C37-M-005 - Verificar que "Continuar con la entrega" avanza al paso Datos de entrega [Mobile] [Logueado]

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

### TC-B2C37-M-006 - Verificar que "Guardar como lista" del menú ⋯ inicia el flujo de guardado de lista [Mobile] [Logueado]

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

### TC-B2C37-M-007 - Verificar que el carrito muestra disponibles colapsados y no disponibles expandidos [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
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

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {COMPRADOR_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el acordeón de ítems disponibles colapsado (logo Unimarc + número de ítems + "productos" + chevron ↓ + ícono de menú ⋯ y el botón "Mostrar más") con el carrusel de miniaturas de 60×60 px, y el acordeón de ítems no disponibles expandido (ícono de carrito tachado + "Productos no disponibles" + "N productos" + chevron ↓ y el botón "Mostrar más") con la lista completa de ítems no disponibles.

**Resultado esperado**

El acordeón de disponibles se muestra colapsado con carrusel de miniaturas y el de no disponibles expandido con la lista completa de ítems no disponibles.

**Observación**

Falta data: {SKU_NO_DISPONIBLE} figura «Pronto disponible» sin «Agregar» en el ambiente, por lo que no se puede dejar en el carro. Acción: cargar un SKU sin stock que sí permita agregarlo (quien administra el Excel de data).

**Evidencia**

![Estado final](<B2C-37 Evidencias/TC-B2C37-M-007.png>)

---

### TC-B2C37-M-008 - Verificar que el carrusel de disponibles muestra el tile "+N" con los ítems restantes [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
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

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKUS_CARRUSEL} = TBD
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {COMPRADOR_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito con el acordeón de disponibles colapsado y muestra en el carrusel las miniaturas que caben y un tile "+N" en gris.

**Resultado esperado**

El carrusel muestra un tile "+N" en gris donde N es la cantidad de ítems disponibles que no se muestran como miniatura.

**Observación**

Falta data: {SKU_NO_DISPONIBLE} figura «Pronto disponible» sin «Agregar» en el ambiente, por lo que no se puede dejar en el carro. Acción: cargar un SKU sin stock que sí permita agregarlo (quien administra el Excel de data).

**Evidencia**

![Estado final](<B2C-37 Evidencias/TC-B2C37-M-008.png>)

---

### TC-B2C37-M-010 - Verificar que una sección colapsada se expande al tocar "Mostrar más" [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
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

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {COMPRADOR_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.
3. El usuario toca el botón "Mostrar más" del acordeón de ítems disponibles.
4. El sistema expande la sección: el botón cambia a "Mostrar menos", el carrusel de miniaturas se oculta y se muestra la lista completa de ítems.

**Resultado esperado**

La sección de ítems disponibles queda expandida: el botón cambia a "Mostrar menos", el carrusel de miniaturas se oculta y se muestra la lista completa de ítems.

**Observación**

Falta data: {SKU_NO_DISPONIBLE} figura «Pronto disponible» sin «Agregar» en el ambiente, por lo que no se puede dejar en el carro. Acción: cargar un SKU sin stock que sí permita agregarlo (quien administra el Excel de data).

**Evidencia**

![Estado final](<B2C-37 Evidencias/TC-B2C37-M-010.png>)

---

### TC-B2C37-M-011 - Verificar que una sección expandida se colapsa al tocar "Mostrar menos" [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
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

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {COMPRADOR_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.
3. El usuario toca el botón "Mostrar más" del acordeón de ítems disponibles.
4. El sistema expande la sección: el botón cambia a "Mostrar menos", el carrusel de miniaturas se oculta y se muestra la lista completa de ítems.
5. El usuario toca el botón "Mostrar menos" del acordeón de ítems disponibles.
6. El sistema colapsa la sección: el botón cambia a "Mostrar más", la lista de ítems se oculta y se muestra el carrusel de miniaturas.

**Resultado esperado**

La sección queda colapsada: el botón cambia a "Mostrar más", la lista de ítems se oculta y se muestra el carrusel de miniaturas.

**Observación**

Falta data: {SKU_NO_DISPONIBLE} figura «Pronto disponible» sin «Agregar» en el ambiente, por lo que no se puede dejar en el carro. Acción: cargar un SKU sin stock que sí permita agregarlo (quien administra el Excel de data).

**Evidencia**

![Estado final](<B2C-37 Evidencias/TC-B2C37-M-011.png>)

---

### TC-B2C37-M-012 - Verificar que las secciones disponibles y no disponibles cambian de estado de forma independiente [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
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

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {COMPRADOR_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.
3. El usuario toca el botón "Mostrar más" del acordeón de ítems disponibles.
4. El sistema expande la sección de ítems disponibles y mantiene expandida la sección de no disponibles.
5. El usuario toca el botón "Mostrar menos" del acordeón de productos no disponibles.
6. El sistema colapsa la sección de no disponibles y mantiene expandida la sección de ítems disponibles.

**Resultado esperado**

Cada sección cambia de estado sin modificar el estado de la otra (disponibles expandida y no disponibles colapsada al final).

**Observación**

Falta data: {SKU_NO_DISPONIBLE} figura «Pronto disponible» sin «Agregar» en el ambiente, por lo que no se puede dejar en el carro. Acción: cargar un SKU sin stock que sí permita agregarlo (quien administra el Excel de data).

**Evidencia**

![Estado final](<B2C-37 Evidencias/TC-B2C37-M-012.png>)

---

### TC-B2C37-M-013 - Verificar que el estado de los acordeones vuelve al inicial al recargar el carrito [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
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

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {COMPRADOR_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.
3. El usuario toca el botón "Mostrar más" del acordeón de ítems disponibles.
4. El sistema expande la sección de ítems disponibles.
5. El usuario recarga la página.
6. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.

**Resultado esperado**

Tras recargar o reingresar, el carrito vuelve al estado inicial: disponibles colapsado y no disponibles expandido.

**Observación**

Falta data: {SKU_NO_DISPONIBLE} figura «Pronto disponible» sin «Agregar» en el ambiente, por lo que no se puede dejar en el carro. Acción: cargar un SKU sin stock que sí permita agregarlo (quien administra el Excel de data).

**Evidencia**

![Estado final](<B2C-37 Evidencias/TC-B2C37-M-013.png>)

---

### TC-B2C37-M-014 - Verificar que cada ítem disponible muestra imagen, nombre, precios, cantidad y controles [Mobile] [Logueado]

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

### TC-B2C37-M-015 - Verificar que los ítems disponibles se ordenan del agregado más reciente al más antiguo [Mobile] [Logueado]

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

Esperado: los ítems se listan del agregado más reciente al más antiguo ({SKU_VALID_001}, {SKU_PESABLE}, {SKU_UNITARIO}). Obtenido: tras agregar en orden Lavalozas Quix → Mangos granel → Albóndigas Super Pollo, el carro los lista Lavalozas Quix, Mangos granel, Albóndigas: del más antiguo al más reciente. tests/B2C-37.spec.ts. Bug: B2C-1258.

**Observación**

Esperado: los ítems se listan del agregado más reciente al más antiguo ({SKU_VALID_001}, {SKU_PESABLE}, {SKU_UNITARIO}). Obtenido: tras agregar en orden Lavalozas Quix → Mangos granel → Albóndigas Super Pollo, el carro los lista Lavalozas Quix, Mangos granel, Albóndigas: del más antiguo al más reciente. tests/B2C-37.spec.ts. Bug: B2C-1258.

**Evidencia**

![Paso 6 — orden de los items](<B2C-37 Evidencias/TC-B2C37-M-015-p06-orden-de-los-items.png>)

---

### TC-B2C37-M-016 - Verificar que cada ítem no disponible muestra overlay, badge, faltantes y "Reemplazar" [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
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

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {COMPRADOR_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra por cada ítem no disponible: imagen con overlay blanco semitransparente, badge "Pronto disponible" (fondo gris, texto gris), nombre, texto "Faltantes: N un" con la cantidad solicitada y CTA "Reemplazar".

**Resultado esperado**

Cada ítem no disponible muestra imagen con overlay, badge "Pronto disponible", nombre, "Faltantes: N un" y CTA "Reemplazar".

**Observación**

Falta data: {SKU_NO_DISPONIBLE} figura «Pronto disponible» sin «Agregar» en el ambiente, por lo que no se puede dejar en el carro. Acción: cargar un SKU sin stock que sí permita agregarlo (quien administra el Excel de data).

**Evidencia**

![Estado final](<B2C-37 Evidencias/TC-B2C37-M-016.png>)

---

### TC-B2C37-M-017 - Verificar que los ítems no disponibles no permiten cambiar cantidad ni suman al subtotal [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
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

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {COMPRADOR_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito con el acordeón de no disponibles expandido.
3. El usuario revisa un ítem no disponible y la tarjeta de totales.
4. El sistema muestra el ítem no disponible sin controles +/− y el Subtotal calculado solo con los ítems disponibles.

**Resultado esperado**

El ítem no disponible no tiene controles para modificar la cantidad y el Subtotal corresponde solo a {SKU_VALID_001}.

**Observación**

Falta data: {SKU_NO_DISPONIBLE} figura «Pronto disponible» sin «Agregar» en el ambiente, por lo que no se puede dejar en el carro. Acción: cargar un SKU sin stock que sí permita agregarlo (quien administra el Excel de data).

**Evidencia**

![Estado final](<B2C-37 Evidencias/TC-B2C37-M-017.png>)

---

### TC-B2C37-M-018 - Verificar que "Reemplazar" inicia el flujo de productos similares [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
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

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {COMPRADOR_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito con el acordeón de no disponibles expandido.
3. El usuario toca "Reemplazar" en el ítem {SKU_NO_DISPONIBLE}.
4. El sistema inicia el flujo de búsqueda de productos similares (B2C-40).

**Resultado esperado**

Se inicia el flujo de productos similares definido en B2C-40 para {SKU_NO_DISPONIBLE}.

**Observación**

Falta data: {SKU_NO_DISPONIBLE} figura «Pronto disponible» sin «Agregar» en el ambiente, por lo que no se puede dejar en el carro. Acción: cargar un SKU sin stock que sí permita agregarlo (quien administra el Excel de data).

**Evidencia**

![Estado final](<B2C-37 Evidencias/TC-B2C37-M-018.png>)

---

### TC-B2C37-M-019 - Verificar que "Vaciar carro" abre el modal de confirmación con su contenido [Mobile] [Logueado]

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

### TC-B2C37-M-020 - Verificar que el modal muestra el estado de carga al confirmar el vaciado [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
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

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_UNITARIO} = 000000000400254005-UN
- {COMPRADOR_USER} = 11.223.344-K

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

**Observación**

Causa: el caso excedió el timeout de 6 min en dos intentos y el navegador se cerró al capturar la evidencia del modal de vaciado; no se obtuvo veredicto del producto. Acción requerida: repetir el caso con el ambiente estable.

---

### TC-B2C37-M-021 - Verificar que "Sí, eliminar" vacía el carro y muestra el estado de carro vacío [Mobile] [Logueado]

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

### TC-B2C37-M-022 - Verificar que "No, gracias" cierra el modal sin cambios en el carro [Mobile] [Logueado]

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

### TC-B2C37-M-023 - Verificar que la "X" del modal lo cierra sin cambios en el carro [Mobile] [Logueado]

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

### TC-B2C37-M-024 - Verificar que el carrito muestra el toast de restricción de alcohol [Mobile] [Logueado]

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
- El carro contiene {SKU_ALCOHOL} (producto con restricción de alcohol)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_ALCOHOL} = 000000000000653466-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra un toast informativo con título "Información importante", el mensaje "Deberás mostrar tu carnet al recibir compras de bebidas alcohólicas." e ícono "X".

**Resultado esperado**

Se muestra el toast "Información importante" con el mensaje de carnet y {SKU_ALCOHOL} permanece en el carrito.

**Resultado obtenido**

Con {SKU_ALCOHOL} en el carro se muestra el toast 'Información importante' con 'Deberás mostrar tu carnet al recibir compras de bebidas alcohólicas.' y su X; el producto sigue en el carrito.

**Evidencia**

![Estado final](<B2C-37 Evidencias/TC-B2C37-M-024.png>)

---

### TC-B2C37-M-025 - Verificar que la "X" cierra el toast de restricción de alcohol [Mobile] [Logueado]

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
- El carro contiene {SKU_ALCOHOL} (producto con restricción de alcohol)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_ALCOHOL} = 000000000000653466-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra un toast informativo con título "Información importante", el mensaje "Deberás mostrar tu carnet al recibir compras de bebidas alcohólicas." e ícono "X".
3. El usuario toca el ícono "X" del toast.
4. El sistema cierra el toast.

**Resultado esperado**

El toast deja de mostrarse y {SKU_ALCOHOL} permanece en el carrito.

**Resultado obtenido**

La X cierra el toast de alcohol y {SKU_ALCOHOL} sigue en el carrito.

**Evidencia**

![Paso 2 — toast de alcohol visible](<B2C-37 Evidencias/TC-B2C37-M-025-p02-toast-de-alcohol-visible.png>)

![Estado final](<B2C-37 Evidencias/TC-B2C37-M-025.png>)

---

### TC-B2C37-M-026 - Verificar que el toast de restricción de alcohol desaparece a los 4 segundos [Mobile] [Logueado]

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
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_ALCOHOL} (producto con restricción de alcohol)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_ALCOHOL} = 000000000000653466-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra un toast informativo con título "Información importante", el mensaje "Deberás mostrar tu carnet al recibir compras de bebidas alcohólicas." e ícono "X".
3. El usuario espera 4 segundos sin interactuar con el toast.
4. El sistema oculta el toast automáticamente.

**Resultado esperado**

El toast desaparece solo a los 4 segundos de mostrarse.

**Resultado obtenido**

Esperado: el toast 'Información importante' se oculta solo a los 4 segundos. Obtenido: con {SKU_ALCOHOL} en el carro el toast sigue visible a los 15 segundos de mostrarse (2 de 2 intentos). Bug B2C-1267.

**Observación**

Esperado: el toast 'Información importante' se oculta solo a los 4 segundos. Obtenido: con {SKU_ALCOHOL} en el carro el toast sigue visible a los 15 segundos de mostrarse (2 de 2 intentos). Bug B2C-1267.

**Evidencia**

![Paso 2 — toast de alcohol al aparecer](<B2C-37 Evidencias/TC-B2C37-M-026-p02-toast-de-alcohol-al-aparecer.png>)

![Paso 3 — toast todavia visible a los 15 s](<B2C-37 Evidencias/TC-B2C37-M-026-p03-toast-todavia-visible-a-los-15-s.png>)

---

### TC-B2C37-M-027 - Verificar que el carrito sin ítems muestra el estado vacío con "Ir a Comprar" [Mobile] [Guest]

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

### TC-B2C37-M-028 - Verificar que "Ir a Comprar" del carro vacío redirige al Home [Mobile] [Guest]

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

### TC-B2C37-M-029 - Verificar que el carrito muestra el estado de error CRT-020 sin ítems parciales [Mobile] [Logueado]

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
- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_API_ENDPOINT} = *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/customer/shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/abk0k1kXsWxHARxbs2xaYYxKs1/baskets

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

Con la request del carro bloqueada se muestra 'No pudimos mostrar tu carro', 'Tenemos problemas con cargar tus productos. Por favor, inténtalo otra vez.', imagen, 'Volver al inicio', 'Reintentar' y 'Error: CRT-020', sin ítems ni totales. El bloqueo se hizo sobre la request GET .../shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/<id>/baskets de {CART_API_ENDPOINT}: el token trae el id de otro cliente (abk0k1kXsWxHARxbs2xaYYxKs1), así que se bloqueó la misma ruta con el id de la cuenta usada.

**Observación**

Con la request del carro bloqueada se muestra 'No pudimos mostrar tu carro', 'Tenemos problemas con cargar tus productos. Por favor, inténtalo otra vez.', imagen, 'Volver al inicio', 'Reintentar' y 'Error: CRT-020', sin ítems ni totales. El bloqueo se hizo sobre la request GET .../shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/<id>/baskets de {CART_API_ENDPOINT}: el token trae el id de otro cliente (abk0k1kXsWxHARxbs2xaYYxKs1), así que se bloqueó la misma ruta con el id de la cuenta usada.

**Evidencia**

![Estado final](<B2C-37 Evidencias/TC-B2C37-M-029.png>)

---

### TC-B2C37-M-030 - Verificar que "Volver al inicio" del error de carga navega al Home [Mobile] [Logueado]

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
- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_API_ENDPOINT} = *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/customer/shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/abk0k1kXsWxHARxbs2xaYYxKs1/baskets

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

Desde el error CRT-020, 'Volver al inicio' lleva al Home. El bloqueo se hizo sobre la request GET .../shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/<id>/baskets de {CART_API_ENDPOINT}: el token trae el id de otro cliente (abk0k1kXsWxHARxbs2xaYYxKs1), así que se bloqueó la misma ruta con el id de la cuenta usada.

**Observación**

Desde el error CRT-020, 'Volver al inicio' lleva al Home. El bloqueo se hizo sobre la request GET .../shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/<id>/baskets de {CART_API_ENDPOINT}: el token trae el id de otro cliente (abk0k1kXsWxHARxbs2xaYYxKs1), así que se bloqueó la misma ruta con el id de la cuenta usada.

**Evidencia**

![Paso 2 — estado de error crt 020](<B2C-37 Evidencias/TC-B2C37-M-030-p02-estado-de-error-crt-020.png>)

![Estado final](<B2C-37 Evidencias/TC-B2C37-M-030.png>)

---

### TC-B2C37-M-031 - Verificar que "Reintentar" vuelve a cargar el contenido del carrito [Mobile] [Logueado]

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
- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_API_ENDPOINT} = *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/customer/shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/abk0k1kXsWxHARxbs2xaYYxKs1/baskets

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

Al quitar el bloqueo y tocar 'Reintentar', el carrito carga y muestra {SKU_VALID_001}. El bloqueo se hizo sobre la request GET .../shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/<id>/baskets de {CART_API_ENDPOINT}: el token trae el id de otro cliente (abk0k1kXsWxHARxbs2xaYYxKs1), así que se bloqueó la misma ruta con el id de la cuenta usada.

**Evidencia**

![Paso 2 — estado de error crt 020](<B2C-37 Evidencias/TC-B2C37-M-031-p02-estado-de-error-crt-020.png>)

![Estado final](<B2C-37 Evidencias/TC-B2C37-M-031.png>)

---

### TC-B2C37-M-032 - Verificar que el error al vaciar muestra el toast CRT-076 y conserva los ítems [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
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

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {VACIAR_CARRO_API_ENDPOINT} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_UNITARIO} = 000000000400254005-UN
- {COMPRADOR_USER} = 11.223.344-K
- {COMPRADOR_PASSWORD} = [omitido]

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

Con las requests DELETE de ítems del carro bloqueadas y {SKU_VALID_001} + {SKU_UNITARIO} en el carro: al confirmar «Sí, eliminar» aparece el toast «¡Lo sentimos! No pudimos vaciar tu carro, vuelve a intentarlo! [CRT-076]» y el carro conserva sus ítems.

**Evidencia**

![Paso 4 — modal «Vaciar el carro»](<B2C-37 Evidencias/TC-B2C37-M-032-p04-modal-vaciar-el-carro.png>)

![Paso 6 — toast CRT-076](<B2C-37 Evidencias/TC-B2C37-M-032-p06-toast-crt-076.png>)

![Estado final](<B2C-37 Evidencias/TC-B2C37-M-032.png>)

---

### TC-B2C37-M-033 - Verificar que el toast de error CRT-076 permanece hasta cerrarlo con la X [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
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

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {VACIAR_CARRO_API_ENDPOINT} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_UNITARIO} = 000000000400254005-UN
- {COMPRADOR_USER} = 11.223.344-K
- {COMPRADOR_PASSWORD} = [omitido]

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

Con las requests DELETE de ítems del carro bloqueadas: el toast CRT-076 sigue visible a los 10 s y solo se cierra con la X.

**Evidencia**

![Paso 4 — modal «Vaciar el carro»](<B2C-37 Evidencias/TC-B2C37-M-033-p04-modal-vaciar-el-carro.png>)

![Paso 6 — toast CRT-076](<B2C-37 Evidencias/TC-B2C37-M-033-p06-toast-crt-076.png>)

![Estado final](<B2C-37 Evidencias/TC-B2C37-M-033.png>)

---

### TC-B2C37-M-034 - Verificar que el carrito bajo el mínimo muestra el faltante y deshabilita el CTA [Mobile] [Logueado]

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

### TC-B2C37-M-035 - Verificar que el monto faltante del toast se actualiza al cambiar la cantidad [Mobile] [Logueado]

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

### TC-B2C37-M-036 - Verificar que la X cierra el toast de monto mínimo [Mobile] [Logueado]

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

### TC-B2C37-M-037 - Verificar que el carrito sobre el mínimo con Retiro habilita "Continuar con la entrega" [Mobile] [Logueado]

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

### TC-B2C37-M-038 - Verificar que al alcanzar el mínimo se oculta el toast y se habilita el CTA en tiempo real [Mobile] [Logueado]

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

### TC-B2C37-M-039 - Verificar que el carrito muestra el banner de membresía para cliente sin membresía previa [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-02 |
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

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_VALID_001} = 000000000000675191-UN
- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K
- SKU_OFERTA_MEMBRESIA = 000000000000178089-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner "Ahorra $X siendo Diamante · Prueba y disfruta 15 días gratis." con el CTA "Lo quiero".

**Resultado esperado**

Se muestra el banner "Ahorra $X siendo Diamante · Prueba y disfruta 15 días gratis." con $X calculado sobre el carro y el CTA "Lo quiero".

**Resultado obtenido**

Esperado: banner «Ahorra $X siendo Diamante · Prueba y disfruta 15 días gratis.» con el CTA «Lo quiero». Obtenido: el carro carga con el precio normal y no muestra el banner (corridas del 12-oct y 2-nov). Duda abierta: no se pudo confirmar desde el storefront que la cuenta nunca tuvo membresía. Bug B2C-1435.

**Observación**

Esperado: banner «Ahorra $X siendo Diamante · Prueba y disfruta 15 días gratis.» con el CTA «Lo quiero». Obtenido: el carro carga con el precio normal y no muestra el banner (corridas del 12-oct y 2-nov). Duda abierta: no se pudo confirmar desde el storefront que la cuenta nunca tuvo membresía. Bug B2C-1435.

**Evidencia**

![Estado final](<B2C-37 Evidencias/TC-B2C37-M-039.png>)

---

### TC-B2C37-M-040 - Verificar que "Lo quiero" abre el flujo de contratación de membresía [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
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

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_VALID_001} = 000000000000675191-UN
- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner "Ahorra $X siendo Diamante · Prueba y disfruta 15 días gratis." con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema abre el flujo de contratación de membresía (B2C-42).

**Resultado esperado**

Se abre el flujo de contratación de membresía definido en B2C-42.

**Observación**

Causa: el caso abre el flujo de contratación o renovación de membresía definido en B2C-42 y no se puede llegar a él: la tarea de desarrollo web de B2C-42 (B2C-409) está «En curso». Acción requerida: repetir el caso cuando B2C-409 esté desplegada en DEV.

**Evidencia**

![Paso 2 — carro de la cuenta sin membresia](<B2C-37 Evidencias/TC-B2C37-M-040-p02-carro-de-la-cuenta-sin-membresia.png>)

---

### TC-B2C37-M-041 - Verificar que el carrito muestra el banner de renovación para membresía expirada [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-02 |
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

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_VALID_001} = 000000000000675191-UN
- {COMPRADOR_MEMBRESIA_EXPIRADA_USER} = TBD
- SKU_OFERTA_MEMBRESIA = 000000000000178089-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner "Ahorrarías $X siendo Diamante · Vuelve, te extrañamos." con el CTA "Renovar".

**Resultado esperado**

Se muestra el banner "Ahorrarías $X siendo Diamante · Vuelve, te extrañamos." con $X calculado sobre el carro y el CTA "Renovar".

**Resultado obtenido**

Esperado: banner «Ahorrarías $X siendo Diamante · Vuelve, te extrañamos.» con el CTA «Renovar». Obtenido: el carro carga con el precio normal y no muestra el banner (corridas del 12-oct y 2-nov). Duda abierta: desde el storefront no se distingue una cuenta Nueva de una Expirada. Bug B2C-1437.

**Observación**

Esperado: banner «Ahorrarías $X siendo Diamante · Vuelve, te extrañamos.» con el CTA «Renovar». Obtenido: el carro carga con el precio normal y no muestra el banner (corridas del 12-oct y 2-nov). Duda abierta: desde el storefront no se distingue una cuenta Nueva de una Expirada. Bug B2C-1437.

**Evidencia**

![Paso 2 — carro de la cuenta con membresia expirada](<B2C-37 Evidencias/TC-B2C37-M-041-p02-carro-de-la-cuenta-con-membresia-expirada.png>)

---

### TC-B2C37-M-042 - Verificar que "Renovar" abre el flujo de renovación de membresía [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
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

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_VALID_001} = 000000000000675191-UN
- {COMPRADOR_MEMBRESIA_EXPIRADA_USER} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner "Ahorrarías $X siendo Diamante · Vuelve, te extrañamos." con el CTA "Renovar".
3. El usuario toca "Renovar".
4. El sistema abre el flujo de renovación de membresía (B2C-42).

**Resultado esperado**

Se abre el flujo de renovación de membresía definido en B2C-42.

**Observación**

Causa: el caso abre el flujo de contratación o renovación de membresía definido en B2C-42 y no se puede llegar a él: la tarea de desarrollo web de B2C-42 (B2C-409) está «En curso». Acción requerida: repetir el caso cuando B2C-409 esté desplegada en DEV.

**Evidencia**

![Paso 2 — carro de la cuenta con membresia expirada](<B2C-37 Evidencias/TC-B2C37-M-042-p02-carro-de-la-cuenta-con-membresia-expirada.png>)

---

### TC-B2C37-M-043 - Verificar que el carrito no muestra el banner de membresía al usuario invitado [Mobile] [Guest]

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
- Sesión de invitado (sin iniciar sesión)
- El carro contiene {SKU_VALID_001}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carro invitado.

**Resultado esperado**

El carrito no muestra el banner de oferta de membresía.

**Resultado obtenido**

Como invitado con dirección y {SKU_VALID_001} en el carro, el carrito carga y no muestra el banner de membresía.

**Evidencia**

![Estado final](<B2C-37 Evidencias/TC-B2C37-M-043.png>)

---

### TC-B2C37-M-044 - Verificar que el carrito muestra el skeleton de carga mientras procesa la solicitud [Mobile] [Logueado]

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

### TC-B2C37-M-045 - Verificar que el skeleton se reemplaza por el contenido del carrito sin parpadeo [Mobile] [Logueado]

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

### TC-B2C37-M-046 - Verificar que el skeleton se reemplaza por el estado de error si la carga falla [Mobile] [Logueado]

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
- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_API_ENDPOINT} = *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/customer/shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/abk0k1kXsWxHARxbs2xaYYxKs1/baskets

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

Con red lenta y la request del carro bloqueada se ve el skeleton y luego se reemplaza por 'No pudimos mostrar tu carro' con 'Error: CRT-020', sin skeletons restantes. El bloqueo se hizo sobre la request GET .../shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/<id>/baskets de {CART_API_ENDPOINT}: el token trae el id de otro cliente (abk0k1kXsWxHARxbs2xaYYxKs1), así que se bloqueó la misma ruta con el id de la cuenta usada.

**Observación**

Con red lenta y la request del carro bloqueada se ve el skeleton y luego se reemplaza por 'No pudimos mostrar tu carro' con 'Error: CRT-020', sin skeletons restantes. El bloqueo se hizo sobre la request GET .../shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/<id>/baskets de {CART_API_ENDPOINT}: el token trae el id de otro cliente (abk0k1kXsWxHARxbs2xaYYxKs1), así que se bloqueó la misma ruta con el id de la cuenta usada.

**Evidencia**

![Paso 2 — skeleton de carga del carrito](<B2C-37 Evidencias/TC-B2C37-M-046-p02-skeleton-de-carga-del-carrito.png>)

![Estado final](<B2C-37 Evidencias/TC-B2C37-M-046.png>)

---

### TC-B2C37-M-047 - Verificar que la tarjeta de totales queda fija al hacer scroll en la lista de productos [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
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

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKUS_CARRUSEL} = TBD
- {SKU_UNIPAY_001} = TBD
- {COMPRADOR_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito con la lista de productos y la tarjeta de totales en la parte inferior.
3. El usuario hace scroll vertical hasta el final de la lista de productos.
4. El sistema desplaza el área de productos y mantiene fija la tarjeta de totales con "Subtotal", "Subtotal con Unipay" y el CTA "Continuar con la entrega".

**Resultado esperado**

Durante todo el scroll la tarjeta de totales permanece fija mostrando "Subtotal", "Subtotal con Unipay" y "Continuar con la entrega".

**Observación**

Falta data: el SKU {SKU_UNIPAY_001} queda en el carro con su precio normal y sin precio Unipay, por lo que no aparece la línea «Subtotal con Unipay». El producto declarado no tiene descuento Unipay en el ambiente. Acción: proveer un SKU con descuento Unipay vigente (quien administra el Excel de data).

**Evidencia**

![Paso 2 — carro al inicio de la lista](<B2C-37 Evidencias/TC-B2C37-M-047-p02-carro-al-inicio-de-la-lista.png>)

![Paso 3 — carro al final de la lista](<B2C-37 Evidencias/TC-B2C37-M-047-p03-carro-al-final-de-la-lista.png>)

![Estado final](<B2C-37 Evidencias/TC-B2C37-M-047.png>)

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
  "tc_file": "Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-37 WEB Test Cases.xlsx",
  "title": "Página del carro",
  "updated_at": "2026-11-02"
 },
 "history": {
  "2026-11-02": [
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
   "observation": "Esperado: la columna derecha muestra 'Vaciar carro' y no 'Guardar como lista'. Obtenido: como invitado con dirección Vilanova 122 y {SKU_VALID_001} en el carro, la columna derecha muestra 'Guardar como lista' y 'Vaciar carro' (2 de 2 intentos). Bug B2C-1264.",
   "observed": "Esperado: la columna derecha muestra 'Vaciar carro' y no 'Guardar como lista'. Obtenido: como invitado con dirección Vilanova 122 y {SKU_VALID_001} en el carro, la columna derecha muestra 'Guardar como lista' y 'Vaciar carro' (2 de 2 intentos). Bug B2C-1264.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión de invitado (ventana de incógnito, sin iniciar sesión)\n- El carro contiene {SKU_VALID_001}",
   "screenshots": [
    {
     "caption": "Paso 2 — columna derecha del carro invitado",
     "file": "TC-B2C37-D-002-p02-columna-derecha-del-carro-invitado.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra en la columna derecha la tarjeta de totales y solo el botón \"Vaciar carro\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_002} = Vilanova 122, Las Condes\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "La tarjeta de totales muestra \"Subtotal\" y \"Subtotal con Unipay\", con un monto de \"Subtotal con Unipay\" menor al \"Subtotal\".",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-003",
   "name": "Verificar que la tarjeta de totales muestra \"Subtotal con Unipay\" con descuento Unipay [Desktop] [Logueado]",
   "observation": "Falta data: el SKU {SKU_UNIPAY_001} queda en el carro con su precio normal y sin precio Unipay, por lo que no aparece la línea «Subtotal con Unipay». El producto declarado no tiene descuento Unipay en el ambiente. Acción: proveer un SKU con descuento Unipay vigente (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_UNIPAY_001} (producto con descuento Unipay)",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C37-D-003.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra en la tarjeta de totales las líneas \"Subtotal\" y \"Subtotal con Unipay\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_UNIPAY_001} = TBD\n- {COMPRADOR_USER} = 11.223.344-K",
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
   "executed_at": "2026-11-02",
   "expected": "El acordeón de disponibles se muestra colapsado con carrusel de miniaturas y el de no disponibles expandido con la lista completa de ítems no disponibles.",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-006",
   "name": "Verificar que el carrito muestra disponibles colapsados y no disponibles expandidos [Desktop] [Logueado]",
   "observation": "Falta data: {SKU_NO_DISPONIBLE} figura «Pronto disponible» sin «Agregar» en el ambiente, por lo que no se puede dejar en el carro. Acción: cargar un SKU sin stock que sí permita agregarlo (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C37-D-006.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el acordeón de ítems disponibles colapsado (logo Unimarc + número de ítems + \"productos\" + chevron ↓) con el carrusel de miniaturas de 60×60 px, y el acordeón de ítems no disponibles expandido (ícono de carrito tachado + \"Productos no disponibles\" + \"N productos\" + chevron ↓) con la lista completa de ítems no disponibles. En la columna derecha muestra la tarjeta de totales, \"Guardar como lista\" y \"Vaciar carro\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {COMPRADOR_USER} = 11.223.344-K",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El carrusel muestra un tile \"+N\" en gris donde N es la cantidad de ítems disponibles que no se muestran como miniatura.",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-007",
   "name": "Verificar que el carrusel de disponibles muestra el tile \"+N\" con los ítems restantes [Desktop] [Logueado]",
   "observation": "Falta data: {SKU_NO_DISPONIBLE} figura «Pronto disponible» sin «Agregar» en el ambiente, por lo que no se puede dejar en el carro. Acción: cargar un SKU sin stock que sí permita agregarlo (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKUS_CARRUSEL} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C37-D-007.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito con el acordeón de disponibles colapsado y muestra en el carrusel las miniaturas que caben y un tile \"+N\" en gris.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKUS_CARRUSEL} = TBD\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {COMPRADOR_USER} = 11.223.344-K",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "La sección de ítems disponibles queda expandida: el chevron cambia a ↑, el carrusel de miniaturas se oculta y se muestra la lista completa de ítems.",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-009",
   "name": "Verificar que una sección colapsada se expande al hacer clic en su encabezado [Desktop] [Logueado]",
   "observation": "Falta data: {SKU_NO_DISPONIBLE} figura «Pronto disponible» sin «Agregar» en el ambiente, por lo que no se puede dejar en el carro. Acción: cargar un SKU sin stock que sí permita agregarlo (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C37-D-009.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.\n3. El usuario hace clic en el encabezado del acordeón de ítems disponibles.\n4. El sistema expande la sección: el chevron cambia a ↑, el carrusel de miniaturas se oculta y se muestra la lista completa de ítems.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {COMPRADOR_USER} = 11.223.344-K",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "La sección queda colapsada: el chevron cambia a ↓, la lista de ítems se oculta y se muestra el carrusel de miniaturas.",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-010",
   "name": "Verificar que una sección expandida se colapsa al hacer clic en su encabezado [Desktop] [Logueado]",
   "observation": "Falta data: {SKU_NO_DISPONIBLE} figura «Pronto disponible» sin «Agregar» en el ambiente, por lo que no se puede dejar en el carro. Acción: cargar un SKU sin stock que sí permita agregarlo (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C37-D-010.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.\n3. El usuario hace clic en el encabezado del acordeón de productos no disponibles.\n4. El sistema colapsa la sección: el chevron cambia a ↓, la lista de ítems se oculta y se muestra el carrusel de miniaturas.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {COMPRADOR_USER} = 11.223.344-K",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Cada sección cambia de estado sin modificar el estado de la otra (disponibles expandida y no disponibles colapsada al final).",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-011",
   "name": "Verificar que las secciones disponibles y no disponibles cambian de estado de forma independiente [Desktop] [Logueado]",
   "observation": "Falta data: {SKU_NO_DISPONIBLE} figura «Pronto disponible» sin «Agregar» en el ambiente, por lo que no se puede dejar en el carro. Acción: cargar un SKU sin stock que sí permita agregarlo (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C37-D-011.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.\n3. El usuario hace clic en el encabezado del acordeón de ítems disponibles.\n4. El sistema expande la sección de ítems disponibles y mantiene expandida la sección de no disponibles.\n5. El usuario hace clic en el encabezado del acordeón de productos no disponibles.\n6. El sistema colapsa la sección de no disponibles y mantiene expandida la sección de ítems disponibles.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {COMPRADOR_USER} = 11.223.344-K",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Tras recargar o reingresar, el carrito vuelve al estado inicial: disponibles colapsado y no disponibles expandido.",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-012",
   "name": "Verificar que el estado de los acordeones vuelve al inicial al recargar el carrito [Desktop] [Logueado]",
   "observation": "Falta data: {SKU_NO_DISPONIBLE} figura «Pronto disponible» sin «Agregar» en el ambiente, por lo que no se puede dejar en el carro. Acción: cargar un SKU sin stock que sí permita agregarlo (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C37-D-012.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.\n3. El usuario hace clic en el encabezado del acordeón de ítems disponibles.\n4. El sistema expande la sección de ítems disponibles.\n5. El usuario recarga la página.\n6. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {COMPRADOR_USER} = 11.223.344-K",
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
   "observation": "Esperado: los ítems se listan del agregado más reciente al más antiguo ({SKU_VALID_001}, {SKU_PESABLE}, {SKU_UNITARIO}). Obtenido: tras agregar en orden Lavalozas Quix → Mangos granel → Albóndigas Super Pollo, el carro los lista Lavalozas Quix, Mangos granel, Albóndigas: del más antiguo al más reciente. tests/B2C-37.spec.ts. Bug: B2C-1257.",
   "observed": "Esperado: los ítems se listan del agregado más reciente al más antiguo ({SKU_VALID_001}, {SKU_PESABLE}, {SKU_UNITARIO}). Obtenido: tras agregar en orden Lavalozas Quix → Mangos granel → Albóndigas Super Pollo, el carro los lista Lavalozas Quix, Mangos granel, Albóndigas: del más antiguo al más reciente. tests/B2C-37.spec.ts. Bug: B2C-1257.",
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
   "executed_at": "2026-11-02",
   "expected": "Cada ítem no disponible muestra imagen con overlay, badge \"Pronto disponible\", nombre, \"Faltantes: N un\" y CTA \"Reemplazar\", además del link \"Eliminar\".",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-015",
   "name": "Verificar que cada ítem no disponible muestra overlay, badge, faltantes y \"Reemplazar\" [Desktop] [Logueado]",
   "observation": "Falta data: {SKU_NO_DISPONIBLE} figura «Pronto disponible» sin «Agregar» en el ambiente, por lo que no se puede dejar en el carro. Acción: cargar un SKU sin stock que sí permita agregarlo (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C37-D-015.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra por cada ítem no disponible: imagen con overlay blanco semitransparente, badge \"Pronto disponible\" (fondo gris, texto gris), nombre, texto \"Faltantes: N un\" con la cantidad solicitada y CTA \"Reemplazar\" y el link \"Eliminar\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {COMPRADOR_USER} = 11.223.344-K",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El ítem no disponible no tiene controles para modificar la cantidad y el Subtotal corresponde solo a {SKU_VALID_001}.",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-016",
   "name": "Verificar que los ítems no disponibles no permiten cambiar cantidad ni suman al subtotal [Desktop] [Logueado]",
   "observation": "Falta data: {SKU_NO_DISPONIBLE} figura «Pronto disponible» sin «Agregar» en el ambiente, por lo que no se puede dejar en el carro. Acción: cargar un SKU sin stock que sí permita agregarlo (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C37-D-016.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito con el acordeón de no disponibles expandido.\n3. El usuario revisa un ítem no disponible y la tarjeta de totales.\n4. El sistema muestra el ítem no disponible sin controles +/− y el Subtotal calculado solo con los ítems disponibles.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {COMPRADOR_USER} = 11.223.344-K",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Se inicia el flujo de productos similares definido en B2C-40 para {SKU_NO_DISPONIBLE}.",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-017",
   "name": "Verificar que \"Reemplazar\" inicia el flujo de productos similares [Desktop] [Logueado]",
   "observation": "Falta data: {SKU_NO_DISPONIBLE} figura «Pronto disponible» sin «Agregar» en el ambiente, por lo que no se puede dejar en el carro. Acción: cargar un SKU sin stock que sí permita agregarlo (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C37-D-017.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito con el acordeón de no disponibles expandido.\n3. El usuario hace clic en \"Reemplazar\" en el ítem {SKU_NO_DISPONIBLE}.\n4. El sistema inicia el flujo de búsqueda de productos similares (B2C-40).",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {COMPRADOR_USER} = 11.223.344-K",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "{SKU_NO_DISPONIBLE} ya no aparece en el carrito y {SKU_VALID_001} se mantiene.",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-018",
   "name": "Verificar que el link \"Eliminar\" quita el ítem no disponible del carrito [Desktop] [Logueado]",
   "observation": "Falta data: {SKU_NO_DISPONIBLE} figura «Pronto disponible» sin «Agregar» en el ambiente, por lo que no se puede dejar en el carro. Acción: cargar un SKU sin stock que sí permita agregarlo (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C37-D-018.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito con el acordeón de no disponibles expandido.\n3. El usuario hace clic en \"Eliminar\" en el ítem {SKU_NO_DISPONIBLE}.\n4. El sistema quita el ítem {SKU_NO_DISPONIBLE} del carrito.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {COMPRADOR_USER} = 11.223.344-K",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El modal muestra imagen, título \"Vaciar el carro\", subtítulo \"¿Deseas eliminar todos los productos de tu carro?\", \"Sí, eliminar\", \"No, gracias\" e ícono \"X\".",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-019",
   "name": "Verificar que \"Vaciar carro\" abre el modal de confirmación con su contenido [Desktop] [Logueado]",
   "observation": "Esperado: el modal 'Vaciar el carro' muestra imagen, título, subtítulo, 'Sí, eliminar', 'No, gracias' e ícono 'X' en la esquina superior izquierda. Obtenido: todo está, pero la X está en la esquina superior derecha (a 400 px del borde izquierdo de un modal de 448 px). tests/B2C-37.spec.ts. Bug: B2C-1259.",
   "observed": "Esperado: el modal 'Vaciar el carro' muestra imagen, título, subtítulo, 'Sí, eliminar', 'No, gracias' e ícono 'X' en la esquina superior izquierda. Obtenido: todo está, pero la X está en la esquina superior derecha (a 400 px del borde izquierdo de un modal de 448 px). tests/B2C-37.spec.ts. Bug: B2C-1259.",
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
   "executed_at": "2026-11-02",
   "expected": "Durante el procesamiento, \"Sí, eliminar\" se muestra como indicador de carga y \"No, gracias\" queda deshabilitado.",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-020",
   "name": "Verificar que el modal muestra el estado de carga al confirmar el vaciado [Desktop] [Logueado]",
   "observation": "Causa: el caso excedió el timeout de 6 min en dos intentos y el navegador se cerró al capturar la evidencia del modal de vaciado; no se obtuvo veredicto del producto. Acción requerida: repetir el caso con el ambiente estable.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}\n- DevTools abierto con throttling de red \"Slow 3G\"",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en el botón \"Vaciar carro\".\n4. El sistema despliega el modal de confirmación \"Vaciar el carro\".\n5. El usuario hace clic en \"Sí, eliminar\".\n6. El sistema reemplaza el botón \"Sí, eliminar\" por un indicador de carga y deshabilita \"No, gracias\" mientras procesa.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_UNITARIO} = 000000000400254005-UN\n- {COMPRADOR_USER} = 11.223.344-K",
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
   "observed": "Con {SKU_ALCOHOL} en el carro se muestra el toast 'Información importante' con 'Deberás mostrar tu carnet al recibir compras de bebidas alcohólicas.' y su X; el producto sigue en el carrito.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_ALCOHOL} (producto con restricción de alcohol)",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C37-D-024.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra un toast informativo con título \"Información importante\", el mensaje \"Deberás mostrar tu carnet al recibir compras de bebidas alcohólicas.\" e ícono \"X\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_ALCOHOL} = 000000000000653466-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El toast deja de mostrarse y {SKU_ALCOHOL} permanece en el carrito.",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-025",
   "name": "Verificar que la \"X\" cierra el toast de restricción de alcohol [Desktop] [Logueado]",
   "observed": "La X cierra el toast de alcohol y {SKU_ALCOHOL} sigue en el carrito.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_ALCOHOL} (producto con restricción de alcohol)",
   "screenshots": [
    {
     "caption": "Paso 2 — toast de alcohol visible",
     "file": "TC-B2C37-D-025-p02-toast-de-alcohol-visible.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C37-D-025.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra un toast informativo con título \"Información importante\", el mensaje \"Deberás mostrar tu carnet al recibir compras de bebidas alcohólicas.\" e ícono \"X\".\n3. El usuario hace clic en el ícono \"X\" del toast.\n4. El sistema cierra el toast.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_ALCOHOL} = 000000000000653466-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El toast desaparece solo a los 4 segundos de mostrarse.",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-026",
   "name": "Verificar que el toast de restricción de alcohol desaparece a los 4 segundos [Desktop] [Logueado]",
   "observation": "Esperado: el toast 'Información importante' se oculta solo a los 4 segundos. Obtenido: con {SKU_ALCOHOL} en el carro el toast sigue visible a los 15 segundos de mostrarse (2 de 2 intentos). Bug B2C-1266.",
   "observed": "Esperado: el toast 'Información importante' se oculta solo a los 4 segundos. Obtenido: con {SKU_ALCOHOL} en el carro el toast sigue visible a los 15 segundos de mostrarse (2 de 2 intentos). Bug B2C-1266.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_ALCOHOL} (producto con restricción de alcohol)",
   "screenshots": [
    {
     "caption": "Paso 2 — toast de alcohol al aparecer",
     "file": "TC-B2C37-D-026-p02-toast-de-alcohol-al-aparecer.png"
    },
    {
     "caption": "Paso 3 — toast todavia visible a los 15 s",
     "file": "TC-B2C37-D-026-p03-toast-todavia-visible-a-los-15-s.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra un toast informativo con título \"Información importante\", el mensaje \"Deberás mostrar tu carnet al recibir compras de bebidas alcohólicas.\" e ícono \"X\".\n3. El usuario espera 4 segundos sin interactuar con el toast.\n4. El sistema oculta el toast automáticamente.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_ALCOHOL} = 000000000000653466-UN",
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
   "observation": "Con la request del carro bloqueada se muestra 'No pudimos mostrar tu carro', 'Tenemos problemas con cargar tus productos. Por favor, inténtalo otra vez.', imagen, 'Volver al inicio', 'Reintentar' y 'Error: CRT-020', sin ítems ni totales. El bloqueo se hizo sobre la request GET .../shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/<id>/baskets de {CART_API_ENDPOINT}: el token trae el id de otro cliente (abk0k1kXsWxHARxbs2xaYYxKs1), así que se bloqueó la misma ruta con el id de la cuenta usada.",
   "observed": "Con la request del carro bloqueada se muestra 'No pudimos mostrar tu carro', 'Tenemos problemas con cargar tus productos. Por favor, inténtalo otra vez.', imagen, 'Volver al inicio', 'Reintentar' y 'Error: CRT-020', sin ítems ni totales. El bloqueo se hizo sobre la request GET .../shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/<id>/baskets de {CART_API_ENDPOINT}: el token trae el id de otro cliente (abk0k1kXsWxHARxbs2xaYYxKs1), así que se bloqueó la misma ruta con el id de la cuenta usada.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001}\n- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C37-D-029.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el estado de error con imagen, título \"No pudimos mostrar tu carro\", mensaje \"Tenemos problemas con cargar tus productos. Por favor, inténtalo otra vez.\", CTA \"Volver al inicio\", CTA \"Reintentar\" y \"Error: CRT-020\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_API_ENDPOINT} = *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/customer/shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/abk0k1kXsWxHARxbs2xaYYxKs1/baskets\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El usuario queda en el Home ({BASE_URL}).",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-030",
   "name": "Verificar que \"Volver al inicio\" del error de carga navega al Home [Desktop] [Logueado]",
   "observation": "Desde el error CRT-020, 'Volver al inicio' lleva al Home. El bloqueo se hizo sobre la request GET .../shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/<id>/baskets de {CART_API_ENDPOINT}: el token trae el id de otro cliente (abk0k1kXsWxHARxbs2xaYYxKs1), así que se bloqueó la misma ruta con el id de la cuenta usada.",
   "observed": "Desde el error CRT-020, 'Volver al inicio' lleva al Home. El bloqueo se hizo sobre la request GET .../shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/<id>/baskets de {CART_API_ENDPOINT}: el token trae el id de otro cliente (abk0k1kXsWxHARxbs2xaYYxKs1), así que se bloqueó la misma ruta con el id de la cuenta usada.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001}\n- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)",
   "screenshots": [
    {
     "caption": "Paso 2 — estado de error crt 020",
     "file": "TC-B2C37-D-030-p02-estado-de-error-crt-020.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C37-D-030.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el estado de error con imagen, título \"No pudimos mostrar tu carro\", mensaje \"Tenemos problemas con cargar tus productos. Por favor, inténtalo otra vez.\", CTA \"Volver al inicio\", CTA \"Reintentar\" y \"Error: CRT-020\".\n3. El usuario hace clic en \"Volver al inicio\".\n4. El sistema navega a el Home ({BASE_URL}).",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_API_ENDPOINT} = *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/customer/shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/abk0k1kXsWxHARxbs2xaYYxKs1/baskets\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El carrito se carga correctamente y muestra {SKU_VALID_001}.",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-031",
   "name": "Verificar que \"Reintentar\" vuelve a cargar el contenido del carrito [Desktop] [Logueado]",
   "observed": "Al quitar el bloqueo y tocar 'Reintentar', el carrito carga y muestra {SKU_VALID_001}. El bloqueo se hizo sobre la request GET .../shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/<id>/baskets de {CART_API_ENDPOINT}: el token trae el id de otro cliente (abk0k1kXsWxHARxbs2xaYYxKs1), así que se bloqueó la misma ruta con el id de la cuenta usada.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001}\n- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)",
   "screenshots": [
    {
     "caption": "Paso 2 — estado de error crt 020",
     "file": "TC-B2C37-D-031-p02-estado-de-error-crt-020.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C37-D-031.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el estado de error con imagen, título \"No pudimos mostrar tu carro\", mensaje \"Tenemos problemas con cargar tus productos. Por favor, inténtalo otra vez.\", CTA \"Volver al inicio\", CTA \"Reintentar\" y \"Error: CRT-020\".\n3. El usuario desactiva en DevTools el bloqueo de la request {CART_API_ENDPOINT}.\n4. El usuario hace clic en \"Reintentar\".\n5. El sistema vuelve a solicitar el contenido y carga el carrito con {SKU_VALID_001}.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_API_ENDPOINT} = *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/customer/shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/abk0k1kXsWxHARxbs2xaYYxKs1/baskets\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "Se muestra el toast de error CRT-076 y el carro conserva {SKU_VALID_001} y {SKU_UNITARIO} sin cambios.",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-032",
   "name": "Verificar que el error al vaciar muestra el toast CRT-076 y conserva los ítems [Desktop] [Logueado]",
   "observed": "Con las requests DELETE de ítems del carro bloqueadas y {SKU_VALID_001} + {SKU_UNITARIO} en el carro: al confirmar «Sí, eliminar» aparece el toast «¡Lo sentimos! No pudimos vaciar tu carro, vuelve a intentarlo! [CRT-076]» y el carro conserva sus ítems.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}\n- DevTools abierto con bloqueo de la request {VACIAR_CARRO_API_ENDPOINT} (Network request blocking)",
   "screenshots": [
    {
     "caption": "Paso 4 — modal «Vaciar el carro»",
     "file": "TC-B2C37-D-032-p04-modal-vaciar-el-carro.png"
    },
    {
     "caption": "Paso 6 — toast CRT-076",
     "file": "TC-B2C37-D-032-p06-toast-crt-076.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C37-D-032.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en el botón \"Vaciar carro\".\n4. El sistema despliega el modal de confirmación \"Vaciar el carro\".\n5. El usuario hace clic en \"Sí, eliminar\".\n6. El sistema muestra el toast de error \"¡Lo sentimos! No pudimos vaciar tu carro, vuelve a intentarlo! [CRT-076]\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {VACIAR_CARRO_API_ENDPOINT} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_UNITARIO} = 000000000400254005-UN\n- {COMPRADOR_USER} = 11.223.344-K\n- {COMPRADOR_PASSWORD} = [omitido]",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El toast sigue visible después de 10 segundos y solo se cierra con la \"X\".",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-033",
   "name": "Verificar que el toast de error CRT-076 permanece hasta cerrarlo con la X [Desktop] [Logueado]",
   "observed": "Con las requests DELETE de ítems del carro bloqueadas: el toast CRT-076 sigue visible a los 10 s y solo se cierra con la X.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}\n- DevTools abierto con bloqueo de la request {VACIAR_CARRO_API_ENDPOINT} (Network request blocking)",
   "screenshots": [
    {
     "caption": "Paso 4 — modal «Vaciar el carro»",
     "file": "TC-B2C37-D-033-p04-modal-vaciar-el-carro.png"
    },
    {
     "caption": "Paso 6 — toast CRT-076",
     "file": "TC-B2C37-D-033-p06-toast-crt-076.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C37-D-033.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en el botón \"Vaciar carro\".\n4. El sistema despliega el modal de confirmación \"Vaciar el carro\".\n5. El usuario hace clic en \"Sí, eliminar\".\n6. El sistema muestra el toast de error \"¡Lo sentimos! No pudimos vaciar tu carro, vuelve a intentarlo! [CRT-076]\".\n7. El usuario espera 10 segundos sin interactuar con el toast.\n8. El sistema mantiene visible el toast de error.\n9. El usuario hace clic en el ícono \"X\" del toast.\n10. El sistema cierra el toast.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {VACIAR_CARRO_API_ENDPOINT} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_UNITARIO} = 000000000400254005-UN\n- {COMPRADOR_USER} = 11.223.344-K\n- {COMPRADOR_PASSWORD} = [omitido]",
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
   "executed_at": "2026-11-02",
   "expected": "Se muestra el banner \"Ahorra $X siendo Diamante · Prueba y disfruta 15 días gratis.\" con $X calculado sobre el carro y el CTA \"Lo quiero\".",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-039",
   "name": "Verificar que el carrito muestra el banner de membresía para cliente sin membresía previa [Desktop] [Logueado]",
   "observation": "Esperado: banner «Ahorra $X siendo Diamante · Prueba y disfruta 15 días gratis.» con el CTA «Lo quiero». Obtenido: el carro carga con el precio normal y no muestra el banner (corridas del 12-oct y 2-nov). Duda abierta: no se pudo confirmar desde el storefront que la cuenta nunca tuvo membresía. Bug B2C-1434.",
   "observed": "Esperado: banner «Ahorra $X siendo Diamante · Prueba y disfruta 15 días gratis.» con el CTA «Lo quiero». Obtenido: el carro carga con el precio normal y no muestra el banner (corridas del 12-oct y 2-nov). Duda abierta: no se pudo confirmar desde el storefront que la cuenta nunca tuvo membresía. Bug B2C-1434.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta {COMPRADOR_SIN_MEMBRESIA_USER} nunca tuvo membresía\n- El carro contiene {SKU_VALID_001}\n- El carrito contiene productos con descuentos membresía {SKU_OFERTA_MEMBRESIA}",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C37-D-039.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner \"Ahorra $X siendo Diamante · Prueba y disfruta 15 días gratis.\" con el CTA \"Lo quiero\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_VALID_001} = 000000000000675191-UN\n- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K\n- SKU_OFERTA_MEMBRESIA = 000000000000178089-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Se abre el flujo de contratación de membresía definido en B2C-42.",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-040",
   "name": "Verificar que \"Lo quiero\" abre el flujo de contratación de membresía [Desktop] [Logueado]",
   "observation": "Causa: el caso abre el flujo de contratación o renovación de membresía definido en B2C-42 y no se puede llegar a él: la tarea de desarrollo web de B2C-42 (B2C-409) está «En curso». Acción requerida: repetir el caso cuando B2C-409 esté desplegada en DEV.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta {COMPRADOR_SIN_MEMBRESIA_USER} nunca tuvo membresía\n- El carro contiene {SKU_VALID_001}",
   "screenshots": [
    {
     "caption": "Paso 2 — carro de la cuenta sin membresia",
     "file": "TC-B2C37-D-040-p02-carro-de-la-cuenta-sin-membresia.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner \"Ahorra $X siendo Diamante · Prueba y disfruta 15 días gratis.\" con el CTA \"Lo quiero\".\n3. El usuario hace clic en \"Lo quiero\".\n4. El sistema abre el flujo de contratación de membresía (B2C-42).",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_VALID_001} = 000000000000675191-UN\n- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Se muestra el banner \"Ahorrarías $X siendo Diamante · Vuelve, te extrañamos.\" con $X calculado sobre el carro y el CTA \"Renovar\".",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-041",
   "name": "Verificar que el carrito muestra el banner de renovación para membresía expirada [Desktop] [Logueado]",
   "observation": "Esperado: banner «Ahorrarías $X siendo Diamante · Vuelve, te extrañamos.» con el CTA «Renovar». Obtenido: el carro carga con el precio normal y no muestra el banner (corridas del 12-oct y 2-nov). Duda abierta: desde el storefront no se distingue una cuenta Nueva de una Expirada. Bug B2C-1436.",
   "observed": "Esperado: banner «Ahorrarías $X siendo Diamante · Vuelve, te extrañamos.» con el CTA «Renovar». Obtenido: el carro carga con el precio normal y no muestra el banner (corridas del 12-oct y 2-nov). Duda abierta: desde el storefront no se distingue una cuenta Nueva de una Expirada. Bug B2C-1436.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER}\n- La cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER} tuvo membresía y ya no está vigente\n- El carro contiene {SKU_VALID_001}\n- El carrito contiene productos con descuentos membresía {SKU_OFERTA_MEMBRESIA}",
   "screenshots": [
    {
     "caption": "Paso 2 — carro de la cuenta con membresia expirada",
     "file": "TC-B2C37-D-041-p02-carro-de-la-cuenta-con-membresia-expirada.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner \"Ahorrarías $X siendo Diamante · Vuelve, te extrañamos.\" con el CTA \"Renovar\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_VALID_001} = 000000000000675191-UN\n- {COMPRADOR_MEMBRESIA_EXPIRADA_USER} = TBD\n- {SKU_OFERTA_MEMBRESIA} = 000000000000178089-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Se abre el flujo de renovación de membresía definido en B2C-42.",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-042",
   "name": "Verificar que \"Renovar\" abre el flujo de renovación de membresía [Desktop] [Logueado]",
   "observation": "Causa: el caso abre el flujo de contratación o renovación de membresía definido en B2C-42 y no se puede llegar a él: la tarea de desarrollo web de B2C-42 (B2C-409) está «En curso». Acción requerida: repetir el caso cuando B2C-409 esté desplegada en DEV.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER}\n- La cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER} tuvo membresía y ya no está vigente\n- El carro contiene {SKU_VALID_001}",
   "screenshots": [
    {
     "caption": "Paso 2 — carro de la cuenta con membresia expirada",
     "file": "TC-B2C37-D-042-p02-carro-de-la-cuenta-con-membresia-expirada.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner \"Ahorrarías $X siendo Diamante · Vuelve, te extrañamos.\" con el CTA \"Renovar\".\n3. El usuario hace clic en \"Renovar\".\n4. El sistema abre el flujo de renovación de membresía (B2C-42).",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_VALID_001} = 000000000000675191-UN\n- {COMPRADOR_MEMBRESIA_EXPIRADA_USER} = TBD",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El carrito no muestra el banner de oferta de membresía.",
   "form_factor": "desktop",
   "id": "TC-B2C37-D-043",
   "name": "Verificar que el carrito no muestra el banner de membresía al usuario invitado [Desktop] [Guest]",
   "observed": "Como invitado con dirección y {SKU_VALID_001} en el carro, el carrito carga y no muestra el banner de membresía.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión de invitado (sin iniciar sesión)\n- El carro contiene {SKU_VALID_001}",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C37-D-043.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carro invitado.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{SKU_VALID_001} = 000000000000675191-UN",
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
   "observation": "Con red lenta y la request del carro bloqueada se ve el skeleton y luego se reemplaza por 'No pudimos mostrar tu carro' con 'Error: CRT-020', sin skeletons restantes. El bloqueo se hizo sobre la request GET .../shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/<id>/baskets de {CART_API_ENDPOINT}: el token trae el id de otro cliente (abk0k1kXsWxHARxbs2xaYYxKs1), así que se bloqueó la misma ruta con el id de la cuenta usada.",
   "observed": "Con red lenta y la request del carro bloqueada se ve el skeleton y luego se reemplaza por 'No pudimos mostrar tu carro' con 'Error: CRT-020', sin skeletons restantes. El bloqueo se hizo sobre la request GET .../shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/<id>/baskets de {CART_API_ENDPOINT}: el token trae el id de otro cliente (abk0k1kXsWxHARxbs2xaYYxKs1), así que se bloqueó la misma ruta con el id de la cuenta usada.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001}\n- DevTools abierto con throttling de red \"Slow 3G\"\n- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)",
   "screenshots": [
    {
     "caption": "Paso 2 — skeleton de carga del carrito",
     "file": "TC-B2C37-D-046-p02-skeleton-de-carga-del-carrito.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C37-D-046.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra la pantalla de skeleton que replica la estructura del carrito mientras procesa la solicitud.\n3. El usuario espera a que finalice la solicitud.\n4. El sistema reemplaza el skeleton por el estado de error \"No pudimos mostrar tu carro\" con \"Error: CRT-020\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_API_ENDPOINT} = *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/customer/shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/abk0k1kXsWxHARxbs2xaYYxKs1/baskets\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_VALID_001} = 000000000000675191-UN",
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
   "executed_at": "2026-11-02",
   "expected": "La tarjeta de totales muestra \"Subtotal\" y \"Subtotal con Unipay\", con un monto de \"Subtotal con Unipay\" menor al \"Subtotal\".",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-002",
   "name": "Verificar que la tarjeta de totales muestra \"Subtotal con Unipay\" con descuento Unipay [Mobile] [Logueado]",
   "observation": "Falta data: el SKU {SKU_UNIPAY_001} queda en el carro con su precio normal y sin precio Unipay, por lo que no aparece la línea «Subtotal con Unipay». El producto declarado no tiene descuento Unipay en el ambiente. Acción: proveer un SKU con descuento Unipay vigente (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_UNIPAY_001} (producto con descuento Unipay)",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C37-M-002.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra en la tarjeta de totales las líneas \"Subtotal\" y \"Subtotal con Unipay\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_UNIPAY_001} = TBD\n- {COMPRADOR_USER} = 11.223.344-K",
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
   "observation": "Esperado: el menú ⋯ muestra solo 'Vaciar carro' + ícono. Obtenido: como invitado con dirección Av. San Josemaría Escrivá de Balaguer 14833 y {SKU_VALID_001} en el carro, el menú ⋯ muestra 'Guardar como lista' y 'Vaciar carro' (2 de 2 intentos). Bug B2C-1265.",
   "observed": "Esperado: el menú ⋯ muestra solo 'Vaciar carro' + ícono. Obtenido: como invitado con dirección Av. San Josemaría Escrivá de Balaguer 14833 y {SKU_VALID_001} en el carro, el menú ⋯ muestra 'Guardar como lista' y 'Vaciar carro' (2 de 2 intentos). Bug B2C-1265.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión de invitado (sin iniciar sesión)\n- El carro contiene {SKU_VALID_001}",
   "screenshots": [
    {
     "caption": "Paso 3 — menu del invitado",
     "file": "TC-B2C37-M-004-p03-menu-del-invitado.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca el menú de tres puntos (⋯).\n4. El sistema despliega el menú con la opción \"Vaciar carro\" + ícono.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea\n{SKU_VALID_001} = 000000000000675191-UN",
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
   "executed_at": "2026-11-02",
   "expected": "El acordeón de disponibles se muestra colapsado con carrusel de miniaturas y el de no disponibles expandido con la lista completa de ítems no disponibles.",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-007",
   "name": "Verificar que el carrito muestra disponibles colapsados y no disponibles expandidos [Mobile] [Logueado]",
   "observation": "Falta data: {SKU_NO_DISPONIBLE} figura «Pronto disponible» sin «Agregar» en el ambiente, por lo que no se puede dejar en el carro. Acción: cargar un SKU sin stock que sí permita agregarlo (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C37-M-007.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el acordeón de ítems disponibles colapsado (logo Unimarc + número de ítems + \"productos\" + chevron ↓ + ícono de menú ⋯ y el botón \"Mostrar más\") con el carrusel de miniaturas de 60×60 px, y el acordeón de ítems no disponibles expandido (ícono de carrito tachado + \"Productos no disponibles\" + \"N productos\" + chevron ↓ y el botón \"Mostrar más\") con la lista completa de ítems no disponibles.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {COMPRADOR_USER} = 11.223.344-K",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El carrusel muestra un tile \"+N\" en gris donde N es la cantidad de ítems disponibles que no se muestran como miniatura.",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-008",
   "name": "Verificar que el carrusel de disponibles muestra el tile \"+N\" con los ítems restantes [Mobile] [Logueado]",
   "observation": "Falta data: {SKU_NO_DISPONIBLE} figura «Pronto disponible» sin «Agregar» en el ambiente, por lo que no se puede dejar en el carro. Acción: cargar un SKU sin stock que sí permita agregarlo (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKUS_CARRUSEL} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C37-M-008.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito con el acordeón de disponibles colapsado y muestra en el carrusel las miniaturas que caben y un tile \"+N\" en gris.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKUS_CARRUSEL} = TBD\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {COMPRADOR_USER} = 11.223.344-K",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "La sección de ítems disponibles queda expandida: el botón cambia a \"Mostrar menos\", el carrusel de miniaturas se oculta y se muestra la lista completa de ítems.",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-010",
   "name": "Verificar que una sección colapsada se expande al tocar \"Mostrar más\" [Mobile] [Logueado]",
   "observation": "Falta data: {SKU_NO_DISPONIBLE} figura «Pronto disponible» sin «Agregar» en el ambiente, por lo que no se puede dejar en el carro. Acción: cargar un SKU sin stock que sí permita agregarlo (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C37-M-010.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.\n3. El usuario toca el botón \"Mostrar más\" del acordeón de ítems disponibles.\n4. El sistema expande la sección: el botón cambia a \"Mostrar menos\", el carrusel de miniaturas se oculta y se muestra la lista completa de ítems.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {COMPRADOR_USER} = 11.223.344-K",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "La sección queda colapsada: el botón cambia a \"Mostrar más\", la lista de ítems se oculta y se muestra el carrusel de miniaturas.",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-011",
   "name": "Verificar que una sección expandida se colapsa al tocar \"Mostrar menos\" [Mobile] [Logueado]",
   "observation": "Falta data: {SKU_NO_DISPONIBLE} figura «Pronto disponible» sin «Agregar» en el ambiente, por lo que no se puede dejar en el carro. Acción: cargar un SKU sin stock que sí permita agregarlo (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C37-M-011.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.\n3. El usuario toca el botón \"Mostrar más\" del acordeón de ítems disponibles.\n4. El sistema expande la sección: el botón cambia a \"Mostrar menos\", el carrusel de miniaturas se oculta y se muestra la lista completa de ítems.\n5. El usuario toca el botón \"Mostrar menos\" del acordeón de ítems disponibles.\n6. El sistema colapsa la sección: el botón cambia a \"Mostrar más\", la lista de ítems se oculta y se muestra el carrusel de miniaturas.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {COMPRADOR_USER} = 11.223.344-K",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Cada sección cambia de estado sin modificar el estado de la otra (disponibles expandida y no disponibles colapsada al final).",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-012",
   "name": "Verificar que las secciones disponibles y no disponibles cambian de estado de forma independiente [Mobile] [Logueado]",
   "observation": "Falta data: {SKU_NO_DISPONIBLE} figura «Pronto disponible» sin «Agregar» en el ambiente, por lo que no se puede dejar en el carro. Acción: cargar un SKU sin stock que sí permita agregarlo (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C37-M-012.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.\n3. El usuario toca el botón \"Mostrar más\" del acordeón de ítems disponibles.\n4. El sistema expande la sección de ítems disponibles y mantiene expandida la sección de no disponibles.\n5. El usuario toca el botón \"Mostrar menos\" del acordeón de productos no disponibles.\n6. El sistema colapsa la sección de no disponibles y mantiene expandida la sección de ítems disponibles.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {COMPRADOR_USER} = 11.223.344-K",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Tras recargar o reingresar, el carrito vuelve al estado inicial: disponibles colapsado y no disponibles expandido.",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-013",
   "name": "Verificar que el estado de los acordeones vuelve al inicial al recargar el carrito [Mobile] [Logueado]",
   "observation": "Falta data: {SKU_NO_DISPONIBLE} figura «Pronto disponible» sin «Agregar» en el ambiente, por lo que no se puede dejar en el carro. Acción: cargar un SKU sin stock que sí permita agregarlo (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C37-M-013.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.\n3. El usuario toca el botón \"Mostrar más\" del acordeón de ítems disponibles.\n4. El sistema expande la sección de ítems disponibles.\n5. El usuario recarga la página.\n6. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {COMPRADOR_USER} = 11.223.344-K",
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
   "observation": "Esperado: los ítems se listan del agregado más reciente al más antiguo ({SKU_VALID_001}, {SKU_PESABLE}, {SKU_UNITARIO}). Obtenido: tras agregar en orden Lavalozas Quix → Mangos granel → Albóndigas Super Pollo, el carro los lista Lavalozas Quix, Mangos granel, Albóndigas: del más antiguo al más reciente. tests/B2C-37.spec.ts. Bug: B2C-1258.",
   "observed": "Esperado: los ítems se listan del agregado más reciente al más antiguo ({SKU_VALID_001}, {SKU_PESABLE}, {SKU_UNITARIO}). Obtenido: tras agregar en orden Lavalozas Quix → Mangos granel → Albóndigas Super Pollo, el carro los lista Lavalozas Quix, Mangos granel, Albóndigas: del más antiguo al más reciente. tests/B2C-37.spec.ts. Bug: B2C-1258.",
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
   "executed_at": "2026-11-02",
   "expected": "Cada ítem no disponible muestra imagen con overlay, badge \"Pronto disponible\", nombre, \"Faltantes: N un\" y CTA \"Reemplazar\".",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-016",
   "name": "Verificar que cada ítem no disponible muestra overlay, badge, faltantes y \"Reemplazar\" [Mobile] [Logueado]",
   "observation": "Falta data: {SKU_NO_DISPONIBLE} figura «Pronto disponible» sin «Agregar» en el ambiente, por lo que no se puede dejar en el carro. Acción: cargar un SKU sin stock que sí permita agregarlo (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C37-M-016.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra por cada ítem no disponible: imagen con overlay blanco semitransparente, badge \"Pronto disponible\" (fondo gris, texto gris), nombre, texto \"Faltantes: N un\" con la cantidad solicitada y CTA \"Reemplazar\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {COMPRADOR_USER} = 11.223.344-K",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El ítem no disponible no tiene controles para modificar la cantidad y el Subtotal corresponde solo a {SKU_VALID_001}.",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-017",
   "name": "Verificar que los ítems no disponibles no permiten cambiar cantidad ni suman al subtotal [Mobile] [Logueado]",
   "observation": "Falta data: {SKU_NO_DISPONIBLE} figura «Pronto disponible» sin «Agregar» en el ambiente, por lo que no se puede dejar en el carro. Acción: cargar un SKU sin stock que sí permita agregarlo (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C37-M-017.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito con el acordeón de no disponibles expandido.\n3. El usuario revisa un ítem no disponible y la tarjeta de totales.\n4. El sistema muestra el ítem no disponible sin controles +/− y el Subtotal calculado solo con los ítems disponibles.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {COMPRADOR_USER} = 11.223.344-K",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Se inicia el flujo de productos similares definido en B2C-40 para {SKU_NO_DISPONIBLE}.",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-018",
   "name": "Verificar que \"Reemplazar\" inicia el flujo de productos similares [Mobile] [Logueado]",
   "observation": "Falta data: {SKU_NO_DISPONIBLE} figura «Pronto disponible» sin «Agregar» en el ambiente, por lo que no se puede dejar en el carro. Acción: cargar un SKU sin stock que sí permita agregarlo (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C37-M-018.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito con el acordeón de no disponibles expandido.\n3. El usuario toca \"Reemplazar\" en el ítem {SKU_NO_DISPONIBLE}.\n4. El sistema inicia el flujo de búsqueda de productos similares (B2C-40).",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {COMPRADOR_USER} = 11.223.344-K",
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
   "executed_at": "2026-11-02",
   "expected": "Durante el procesamiento, \"Sí, eliminar\" se muestra como indicador de carga y \"No, gracias\" queda deshabilitado.",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-020",
   "name": "Verificar que el modal muestra el estado de carga al confirmar el vaciado [Mobile] [Logueado]",
   "observation": "Causa: el caso excedió el timeout de 6 min en dos intentos y el navegador se cerró al capturar la evidencia del modal de vaciado; no se obtuvo veredicto del producto. Acción requerida: repetir el caso con el ambiente estable.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}\n- DevTools abierto con throttling de red \"Slow 3G\"",
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca el menú de tres puntos (⋯).\n4. El sistema despliega las opciones \"Guardar como lista\" y \"Vaciar carro\".\n5. El usuario toca \"Vaciar carro\".\n6. El sistema despliega el modal de confirmación \"Vaciar el carro\".\n7. El usuario toca \"Sí, eliminar\".\n8. El sistema reemplaza el botón \"Sí, eliminar\" por un indicador de carga y deshabilita \"No, gracias\" mientras procesa.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_UNITARIO} = 000000000400254005-UN\n- {COMPRADOR_USER} = 11.223.344-K",
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
   "observed": "Con {SKU_ALCOHOL} en el carro se muestra el toast 'Información importante' con 'Deberás mostrar tu carnet al recibir compras de bebidas alcohólicas.' y su X; el producto sigue en el carrito.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_ALCOHOL} (producto con restricción de alcohol)",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C37-M-024.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra un toast informativo con título \"Información importante\", el mensaje \"Deberás mostrar tu carnet al recibir compras de bebidas alcohólicas.\" e ícono \"X\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_ALCOHOL} = 000000000000653466-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El toast deja de mostrarse y {SKU_ALCOHOL} permanece en el carrito.",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-025",
   "name": "Verificar que la \"X\" cierra el toast de restricción de alcohol [Mobile] [Logueado]",
   "observed": "La X cierra el toast de alcohol y {SKU_ALCOHOL} sigue en el carrito.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_ALCOHOL} (producto con restricción de alcohol)",
   "screenshots": [
    {
     "caption": "Paso 2 — toast de alcohol visible",
     "file": "TC-B2C37-M-025-p02-toast-de-alcohol-visible.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C37-M-025.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra un toast informativo con título \"Información importante\", el mensaje \"Deberás mostrar tu carnet al recibir compras de bebidas alcohólicas.\" e ícono \"X\".\n3. El usuario toca el ícono \"X\" del toast.\n4. El sistema cierra el toast.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_ALCOHOL} = 000000000000653466-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El toast desaparece solo a los 4 segundos de mostrarse.",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-026",
   "name": "Verificar que el toast de restricción de alcohol desaparece a los 4 segundos [Mobile] [Logueado]",
   "observation": "Esperado: el toast 'Información importante' se oculta solo a los 4 segundos. Obtenido: con {SKU_ALCOHOL} en el carro el toast sigue visible a los 15 segundos de mostrarse (2 de 2 intentos). Bug B2C-1267.",
   "observed": "Esperado: el toast 'Información importante' se oculta solo a los 4 segundos. Obtenido: con {SKU_ALCOHOL} en el carro el toast sigue visible a los 15 segundos de mostrarse (2 de 2 intentos). Bug B2C-1267.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_ALCOHOL} (producto con restricción de alcohol)",
   "screenshots": [
    {
     "caption": "Paso 2 — toast de alcohol al aparecer",
     "file": "TC-B2C37-M-026-p02-toast-de-alcohol-al-aparecer.png"
    },
    {
     "caption": "Paso 3 — toast todavia visible a los 15 s",
     "file": "TC-B2C37-M-026-p03-toast-todavia-visible-a-los-15-s.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra un toast informativo con título \"Información importante\", el mensaje \"Deberás mostrar tu carnet al recibir compras de bebidas alcohólicas.\" e ícono \"X\".\n3. El usuario espera 4 segundos sin interactuar con el toast.\n4. El sistema oculta el toast automáticamente.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_ALCOHOL} = 000000000000653466-UN",
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
   "observation": "Con la request del carro bloqueada se muestra 'No pudimos mostrar tu carro', 'Tenemos problemas con cargar tus productos. Por favor, inténtalo otra vez.', imagen, 'Volver al inicio', 'Reintentar' y 'Error: CRT-020', sin ítems ni totales. El bloqueo se hizo sobre la request GET .../shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/<id>/baskets de {CART_API_ENDPOINT}: el token trae el id de otro cliente (abk0k1kXsWxHARxbs2xaYYxKs1), así que se bloqueó la misma ruta con el id de la cuenta usada.",
   "observed": "Con la request del carro bloqueada se muestra 'No pudimos mostrar tu carro', 'Tenemos problemas con cargar tus productos. Por favor, inténtalo otra vez.', imagen, 'Volver al inicio', 'Reintentar' y 'Error: CRT-020', sin ítems ni totales. El bloqueo se hizo sobre la request GET .../shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/<id>/baskets de {CART_API_ENDPOINT}: el token trae el id de otro cliente (abk0k1kXsWxHARxbs2xaYYxKs1), así que se bloqueó la misma ruta con el id de la cuenta usada.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001}\n- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C37-M-029.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el estado de error con imagen, título \"No pudimos mostrar tu carro\", mensaje \"Tenemos problemas con cargar tus productos. Por favor, inténtalo otra vez.\", CTA \"Volver al inicio\", CTA \"Reintentar\" y \"Error: CRT-020\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_API_ENDPOINT} = *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/customer/shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/abk0k1kXsWxHARxbs2xaYYxKs1/baskets\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El usuario queda en el Home ({BASE_URL}).",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-030",
   "name": "Verificar que \"Volver al inicio\" del error de carga navega al Home [Mobile] [Logueado]",
   "observation": "Desde el error CRT-020, 'Volver al inicio' lleva al Home. El bloqueo se hizo sobre la request GET .../shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/<id>/baskets de {CART_API_ENDPOINT}: el token trae el id de otro cliente (abk0k1kXsWxHARxbs2xaYYxKs1), así que se bloqueó la misma ruta con el id de la cuenta usada.",
   "observed": "Desde el error CRT-020, 'Volver al inicio' lleva al Home. El bloqueo se hizo sobre la request GET .../shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/<id>/baskets de {CART_API_ENDPOINT}: el token trae el id de otro cliente (abk0k1kXsWxHARxbs2xaYYxKs1), así que se bloqueó la misma ruta con el id de la cuenta usada.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001}\n- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)",
   "screenshots": [
    {
     "caption": "Paso 2 — estado de error crt 020",
     "file": "TC-B2C37-M-030-p02-estado-de-error-crt-020.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C37-M-030.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el estado de error con imagen, título \"No pudimos mostrar tu carro\", mensaje \"Tenemos problemas con cargar tus productos. Por favor, inténtalo otra vez.\", CTA \"Volver al inicio\", CTA \"Reintentar\" y \"Error: CRT-020\".\n3. El usuario toca \"Volver al inicio\".\n4. El sistema navega a el Home ({BASE_URL}).",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_API_ENDPOINT} = *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/customer/shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/abk0k1kXsWxHARxbs2xaYYxKs1/baskets\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El carrito se carga correctamente y muestra {SKU_VALID_001}.",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-031",
   "name": "Verificar que \"Reintentar\" vuelve a cargar el contenido del carrito [Mobile] [Logueado]",
   "observed": "Al quitar el bloqueo y tocar 'Reintentar', el carrito carga y muestra {SKU_VALID_001}. El bloqueo se hizo sobre la request GET .../shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/<id>/baskets de {CART_API_ENDPOINT}: el token trae el id de otro cliente (abk0k1kXsWxHARxbs2xaYYxKs1), así que se bloqueó la misma ruta con el id de la cuenta usada.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001}\n- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)",
   "screenshots": [
    {
     "caption": "Paso 2 — estado de error crt 020",
     "file": "TC-B2C37-M-031-p02-estado-de-error-crt-020.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C37-M-031.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el estado de error con imagen, título \"No pudimos mostrar tu carro\", mensaje \"Tenemos problemas con cargar tus productos. Por favor, inténtalo otra vez.\", CTA \"Volver al inicio\", CTA \"Reintentar\" y \"Error: CRT-020\".\n3. El usuario desactiva en DevTools el bloqueo de la request {CART_API_ENDPOINT}.\n4. El usuario toca \"Reintentar\".\n5. El sistema vuelve a solicitar el contenido y carga el carrito con {SKU_VALID_001}.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_API_ENDPOINT} = *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/customer/shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/abk0k1kXsWxHARxbs2xaYYxKs1/baskets\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "Se muestra el toast de error CRT-076 y el carro conserva {SKU_VALID_001} y {SKU_UNITARIO} sin cambios.",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-032",
   "name": "Verificar que el error al vaciar muestra el toast CRT-076 y conserva los ítems [Mobile] [Logueado]",
   "observed": "Con las requests DELETE de ítems del carro bloqueadas y {SKU_VALID_001} + {SKU_UNITARIO} en el carro: al confirmar «Sí, eliminar» aparece el toast «¡Lo sentimos! No pudimos vaciar tu carro, vuelve a intentarlo! [CRT-076]» y el carro conserva sus ítems.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}\n- DevTools abierto con bloqueo de la request {VACIAR_CARRO_API_ENDPOINT} (Network request blocking)",
   "screenshots": [
    {
     "caption": "Paso 4 — modal «Vaciar el carro»",
     "file": "TC-B2C37-M-032-p04-modal-vaciar-el-carro.png"
    },
    {
     "caption": "Paso 6 — toast CRT-076",
     "file": "TC-B2C37-M-032-p06-toast-crt-076.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C37-M-032.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca el menú de tres puntos (⋯).\n4. El sistema despliega las opciones \"Guardar como lista\" y \"Vaciar carro\".\n5. El usuario toca \"Vaciar carro\".\n6. El sistema despliega el modal de confirmación \"Vaciar el carro\".\n7. El usuario toca \"Sí, eliminar\".\n8. El sistema muestra el toast de error \"¡Lo sentimos! No pudimos vaciar tu carro, vuelve a intentarlo! [CRT-076]\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {VACIAR_CARRO_API_ENDPOINT} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_UNITARIO} = 000000000400254005-UN\n- {COMPRADOR_USER} = 11.223.344-K\n- {COMPRADOR_PASSWORD} = [omitido]",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El toast sigue visible después de 10 segundos y solo se cierra con la \"X\".",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-033",
   "name": "Verificar que el toast de error CRT-076 permanece hasta cerrarlo con la X [Mobile] [Logueado]",
   "observed": "Con las requests DELETE de ítems del carro bloqueadas: el toast CRT-076 sigue visible a los 10 s y solo se cierra con la X.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}\n- DevTools abierto con bloqueo de la request {VACIAR_CARRO_API_ENDPOINT} (Network request blocking)",
   "screenshots": [
    {
     "caption": "Paso 4 — modal «Vaciar el carro»",
     "file": "TC-B2C37-M-033-p04-modal-vaciar-el-carro.png"
    },
    {
     "caption": "Paso 6 — toast CRT-076",
     "file": "TC-B2C37-M-033-p06-toast-crt-076.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C37-M-033.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca el menú de tres puntos (⋯).\n4. El sistema despliega las opciones \"Guardar como lista\" y \"Vaciar carro\".\n5. El usuario toca \"Vaciar carro\".\n6. El sistema despliega el modal de confirmación \"Vaciar el carro\".\n7. El usuario toca \"Sí, eliminar\".\n8. El sistema muestra el toast de error \"¡Lo sentimos! No pudimos vaciar tu carro, vuelve a intentarlo! [CRT-076]\".\n9. El usuario espera 10 segundos sin interactuar con el toast.\n10. El sistema mantiene visible el toast de error.\n11. El usuario toca el ícono \"X\" del toast.\n12. El sistema cierra el toast.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {VACIAR_CARRO_API_ENDPOINT} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_UNITARIO} = 000000000400254005-UN\n- {COMPRADOR_USER} = 11.223.344-K\n- {COMPRADOR_PASSWORD} = [omitido]",
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
   "executed_at": "2026-11-02",
   "expected": "Se muestra el banner \"Ahorra $X siendo Diamante · Prueba y disfruta 15 días gratis.\" con $X calculado sobre el carro y el CTA \"Lo quiero\".",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-039",
   "name": "Verificar que el carrito muestra el banner de membresía para cliente sin membresía previa [Mobile] [Logueado]",
   "observation": "Esperado: banner «Ahorra $X siendo Diamante · Prueba y disfruta 15 días gratis.» con el CTA «Lo quiero». Obtenido: el carro carga con el precio normal y no muestra el banner (corridas del 12-oct y 2-nov). Duda abierta: no se pudo confirmar desde el storefront que la cuenta nunca tuvo membresía. Bug B2C-1435.",
   "observed": "Esperado: banner «Ahorra $X siendo Diamante · Prueba y disfruta 15 días gratis.» con el CTA «Lo quiero». Obtenido: el carro carga con el precio normal y no muestra el banner (corridas del 12-oct y 2-nov). Duda abierta: no se pudo confirmar desde el storefront que la cuenta nunca tuvo membresía. Bug B2C-1435.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta {COMPRADOR_SIN_MEMBRESIA_USER} nunca tuvo membresía\n- El carro contiene {SKU_VALID_001}\n- El carrito contiene productos con descuentos membresía {SKU_OFERTA_MEMBRESIA}",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C37-M-039.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner \"Ahorra $X siendo Diamante · Prueba y disfruta 15 días gratis.\" con el CTA \"Lo quiero\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_VALID_001} = 000000000000675191-UN\n- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K\n- SKU_OFERTA_MEMBRESIA = 000000000000178089-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Se abre el flujo de contratación de membresía definido en B2C-42.",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-040",
   "name": "Verificar que \"Lo quiero\" abre el flujo de contratación de membresía [Mobile] [Logueado]",
   "observation": "Causa: el caso abre el flujo de contratación o renovación de membresía definido en B2C-42 y no se puede llegar a él: la tarea de desarrollo web de B2C-42 (B2C-409) está «En curso». Acción requerida: repetir el caso cuando B2C-409 esté desplegada en DEV.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta {COMPRADOR_SIN_MEMBRESIA_USER} nunca tuvo membresía\n- El carro contiene {SKU_VALID_001}",
   "screenshots": [
    {
     "caption": "Paso 2 — carro de la cuenta sin membresia",
     "file": "TC-B2C37-M-040-p02-carro-de-la-cuenta-sin-membresia.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner \"Ahorra $X siendo Diamante · Prueba y disfruta 15 días gratis.\" con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema abre el flujo de contratación de membresía (B2C-42).",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_VALID_001} = 000000000000675191-UN\n- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Se muestra el banner \"Ahorrarías $X siendo Diamante · Vuelve, te extrañamos.\" con $X calculado sobre el carro y el CTA \"Renovar\".",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-041",
   "name": "Verificar que el carrito muestra el banner de renovación para membresía expirada [Mobile] [Logueado]",
   "observation": "Esperado: banner «Ahorrarías $X siendo Diamante · Vuelve, te extrañamos.» con el CTA «Renovar». Obtenido: el carro carga con el precio normal y no muestra el banner (corridas del 12-oct y 2-nov). Duda abierta: desde el storefront no se distingue una cuenta Nueva de una Expirada. Bug B2C-1437.",
   "observed": "Esperado: banner «Ahorrarías $X siendo Diamante · Vuelve, te extrañamos.» con el CTA «Renovar». Obtenido: el carro carga con el precio normal y no muestra el banner (corridas del 12-oct y 2-nov). Duda abierta: desde el storefront no se distingue una cuenta Nueva de una Expirada. Bug B2C-1437.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER}\n- La cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER} tuvo membresía y ya no está vigente\n- El carro contiene {SKU_VALID_001}\n- El carrito contiene productos con descuentos membresía {SKU_OFERTA_MEMBRESIA}",
   "screenshots": [
    {
     "caption": "Paso 2 — carro de la cuenta con membresia expirada",
     "file": "TC-B2C37-M-041-p02-carro-de-la-cuenta-con-membresia-expirada.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner \"Ahorrarías $X siendo Diamante · Vuelve, te extrañamos.\" con el CTA \"Renovar\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_VALID_001} = 000000000000675191-UN\n- {COMPRADOR_MEMBRESIA_EXPIRADA_USER} = TBD\n- SKU_OFERTA_MEMBRESIA = 000000000000178089-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Se abre el flujo de renovación de membresía definido en B2C-42.",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-042",
   "name": "Verificar que \"Renovar\" abre el flujo de renovación de membresía [Mobile] [Logueado]",
   "observation": "Causa: el caso abre el flujo de contratación o renovación de membresía definido en B2C-42 y no se puede llegar a él: la tarea de desarrollo web de B2C-42 (B2C-409) está «En curso». Acción requerida: repetir el caso cuando B2C-409 esté desplegada en DEV.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER}\n- La cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER} tuvo membresía y ya no está vigente\n- El carro contiene {SKU_VALID_001}",
   "screenshots": [
    {
     "caption": "Paso 2 — carro de la cuenta con membresia expirada",
     "file": "TC-B2C37-M-042-p02-carro-de-la-cuenta-con-membresia-expirada.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner \"Ahorrarías $X siendo Diamante · Vuelve, te extrañamos.\" con el CTA \"Renovar\".\n3. El usuario toca \"Renovar\".\n4. El sistema abre el flujo de renovación de membresía (B2C-42).",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_VALID_001} = 000000000000675191-UN\n- {COMPRADOR_MEMBRESIA_EXPIRADA_USER} = TBD",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El carrito no muestra el banner de oferta de membresía.",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-043",
   "name": "Verificar que el carrito no muestra el banner de membresía al usuario invitado [Mobile] [Guest]",
   "observed": "Como invitado con dirección y {SKU_VALID_001} en el carro, el carrito carga y no muestra el banner de membresía.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión de invitado (sin iniciar sesión)\n- El carro contiene {SKU_VALID_001}",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C37-M-043.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carro invitado.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea\n{SKU_VALID_001} = 000000000000675191-UN",
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
   "observation": "Con red lenta y la request del carro bloqueada se ve el skeleton y luego se reemplaza por 'No pudimos mostrar tu carro' con 'Error: CRT-020', sin skeletons restantes. El bloqueo se hizo sobre la request GET .../shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/<id>/baskets de {CART_API_ENDPOINT}: el token trae el id de otro cliente (abk0k1kXsWxHARxbs2xaYYxKs1), así que se bloqueó la misma ruta con el id de la cuenta usada.",
   "observed": "Con red lenta y la request del carro bloqueada se ve el skeleton y luego se reemplaza por 'No pudimos mostrar tu carro' con 'Error: CRT-020', sin skeletons restantes. El bloqueo se hizo sobre la request GET .../shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/<id>/baskets de {CART_API_ENDPOINT}: el token trae el id de otro cliente (abk0k1kXsWxHARxbs2xaYYxKs1), así que se bloqueó la misma ruta con el id de la cuenta usada.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001}\n- DevTools abierto con throttling de red \"Slow 3G\"\n- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)",
   "screenshots": [
    {
     "caption": "Paso 2 — skeleton de carga del carrito",
     "file": "TC-B2C37-M-046-p02-skeleton-de-carga-del-carrito.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C37-M-046.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra la pantalla de skeleton que replica la estructura del carrito mientras procesa la solicitud.\n3. El usuario espera a que finalice la solicitud.\n4. El sistema reemplaza el skeleton por el estado de error \"No pudimos mostrar tu carro\" con \"Error: CRT-020\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_API_ENDPOINT} = *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/customer/shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/abk0k1kXsWxHARxbs2xaYYxKs1/baskets\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Durante todo el scroll la tarjeta de totales permanece fija mostrando \"Subtotal\", \"Subtotal con Unipay\" y \"Continuar con la entrega\".",
   "form_factor": "mobile",
   "id": "TC-B2C37-M-047",
   "name": "Verificar que la tarjeta de totales queda fija al hacer scroll en la lista de productos [Mobile] [Logueado]",
   "observation": "Falta data: el SKU {SKU_UNIPAY_001} queda en el carro con su precio normal y sin precio Unipay, por lo que no aparece la línea «Subtotal con Unipay». El producto declarado no tiene descuento Unipay en el ambiente. Acción: proveer un SKU con descuento Unipay vigente (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKUS_CARRUSEL} y {SKU_UNIPAY_001}, y la lista supera la altura visible de la pantalla",
   "screenshots": [
    {
     "caption": "Paso 2 — carro al inicio de la lista",
     "file": "TC-B2C37-M-047-p02-carro-al-inicio-de-la-lista.png"
    },
    {
     "caption": "Paso 3 — carro al final de la lista",
     "file": "TC-B2C37-M-047-p03-carro-al-final-de-la-lista.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C37-M-047.png"
    }
   ],
   "spec": "tests/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito con la lista de productos y la tarjeta de totales en la parte inferior.\n3. El usuario hace scroll vertical hasta el final de la lista de productos.\n4. El sistema desplaza el área de productos y mantiene fija la tarjeta de totales con \"Subtotal\", \"Subtotal con Unipay\" y el CTA \"Continuar con la entrega\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKUS_CARRUSEL} = TBD\n- {SKU_UNIPAY_001} = TBD\n- {COMPRADOR_USER} = 11.223.344-K",
   "viewport": "390x844"
  }
 ]
}
-->
