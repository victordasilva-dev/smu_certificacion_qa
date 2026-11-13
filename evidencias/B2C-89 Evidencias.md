# B2C-89 - Add to cart desde la shelf - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-89 |
| Última actualización | 2026-11-13 |
| Ejecutado por | Victor Chirinos |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | webkit |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP1/B2C-89 Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 6 |
| Rechazado | 1 |
| **Total** | **7** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-13 | 7 | TC-89-D-001, TC-89-D-003, TC-89-D-004, TC-89-D-005, TC-89-M-001, TC-89-M-003, TC-89-M-004 |

## Detalle por caso de prueba

### TC-89-D-001 - Agregar producto al carro desde la shelf con usuario logueado y dirección configurada

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Spec | tests/B2C-89.spec.ts:370 |

**Precondiciones**

User type: Logueado con dirección/tienda/método de entrega configurado.

Producto de prueba con stock disponible visible en PLP.

Botón 'Agregar' visible en la shelf del producto.

Viewport: Desktop 1280×900.

**Data utilizada**

{BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; {COMPRADOR_PASSWORD}: contraseña de la cuenta compradora; {COMPRADOR_USER}: vhchirinos+comprador@avatar-global.com; {SKU_UNITARIO}: 000000000000674797-UN

**Pasos ejecutados**

1. Navegar a la PLP con viewport Desktop 1280×900 con sesión iniciada y dirección configurada.
2. Localizar el producto de prueba con stock disponible.
3. Verificar que el botón 'Agregar' es visible en la shelf del producto.
4. Hacer clic en el botón 'Agregar'.
5. Verificar que el sistema agrega 1 unidad del producto al carrito (sin abrir PDP).
6. Verificar que el componente de la shelf cambia al estado 'En carro' mostrando el stepper con cantidad '1'.
7. Verificar que el badge numérico del minicarrito en el header se actualiza reflejando la nueva cantidad total del carrito.

**Resultado esperado**

1 unidad del producto se agrega al carrito sin necesidad de entrar al PDP; la shelf cambia al estado 'En carro' con stepper mostrando cantidad '1'; el badge del minicarrito en el header se actualiza con la nueva cantidad.

**Resultado obtenido**

En la PLP /category/lavalozas-y-lavavajillas con sesión y dirección (Calle Uno 23, La Florida), "Agregar" dejó la shelf en "En carro 1 un." sin abrir la PDP y el badge del minicarro pasó de 0 a 1.

**Evidencia**

![Paso 1 — plp category lavalozas y lavavajillas con sesion y direccion](<B2C-89 Evidencias/TC-89-D-001-p01-plp-category-lavalozas-y-lavavajillas-con-sesion-y-direccion.png>)

![Paso 3 — shelf con agregar carro en 0](<B2C-89 Evidencias/TC-89-D-001-p03-shelf-con-agregar-carro-en-0.png>)

![Paso 6 — shelf en carro 1 un](<B2C-89 Evidencias/TC-89-D-001-p06-shelf-en-carro-1-un.png>)

![Paso 7 — badge del minicarro en 1](<B2C-89 Evidencias/TC-89-D-001-p07-badge-del-minicarro-en-1.png>)

---

### TC-89-D-003 - Estado 'En carro' con qty=1: muestra basurero (eliminar) y botón '+'

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Spec | tests/B2C-89.spec.ts:375 |

**Precondiciones**

User type: Logueado con dirección configurada.

Producto de prueba con 1 unidad ya en el carrito (estado 'En carro' qty=1).

Viewport: Desktop 1280×900.

**Data utilizada**

{BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; {COMPRADOR_PASSWORD}: contraseña de la cuenta compradora; {COMPRADOR_USER}: vhchirinos+comprador@avatar-global.com; {SKU_UNITARIO}: 000000000000674797-UN; {UNIDADES_CARRITO_INICIAL_1}: 1

**Pasos ejecutados**

1. Con 1 unidad del producto en el carrito, navegar a la PLP con viewport Desktop 1280×900.
2. Localizar la shelf del producto en estado 'En carro'.
3. Verificar que se muestra el bloque 'En carro 1 un.' con ícono basurero y botón '+'.
4. Verificar que NO se muestra el botón '−' (solo basurero cuando qty=1).
5. Hacer clic en '+' y verificar que qty pasa a 2, el minicarro se actualiza en tiempo real.
6. Volver a qty=1 usando '−' en el stepper.
7. Hacer clic en el ícono basurero y verificar que el producto se elimina del carrito.
8. Verificar que la shelf vuelve al estado 'Agregar' y el badge del minicarro se actualiza.

**Resultado esperado**

Con qty=1 se muestra ícono basurero + botón '+' (sin '−'); el '+' incrementa a 2 y actualiza el minicarro en tiempo real; el basurero elimina el producto del carrito y la shelf vuelve al estado 'Agregar'.

**Resultado obtenido**

Con 1 un. en el carro la shelf mostró basurero y "+", sin "−". "+" llevó a 2 (badge 1→2), "−" volvió a 1 y el basurero eliminó el producto: la shelf volvió a "Agregar" y el badge a 0.

**Evidencia**

![Paso 1 — plp category lavalozas y lavavajillas con 1 un en el carro](<B2C-89 Evidencias/TC-89-D-003-p01-plp-category-lavalozas-y-lavavajillas-con-1-un-en-el-carro.png>)

![Paso 3 — en carro 1 un basurero y](<B2C-89 Evidencias/TC-89-D-003-p03-en-carro-1-un-basurero-y.png>)

![Paso 5 — en carro 2 un minicarro en 2](<B2C-89 Evidencias/TC-89-D-003-p05-en-carro-2-un-minicarro-en-2.png>)

![Paso 6 — de vuelta en 1 un](<B2C-89 Evidencias/TC-89-D-003-p06-de-vuelta-en-1-un.png>)

![Paso 8 — shelf en agregar minicarro en 0](<B2C-89 Evidencias/TC-89-D-003-p08-shelf-en-agregar-minicarro-en-0.png>)

---

### TC-89-D-004 - Estado 'En carro' con qty>1: muestra botón '−' y '+' con actualización en tiempo real

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Spec | tests/B2C-89.spec.ts:380 |

**Precondiciones**

User type: Logueado con dirección configurada.

Producto de prueba con 2 unidades en el carrito (estado 'En carro' qty=2).

Viewport: Desktop 1280×900.

**Data utilizada**

{BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; {COMPRADOR_PASSWORD}: contraseña de la cuenta compradora; {COMPRADOR_USER}: vhchirinos+comprador@avatar-global.com; {SKU_UNITARIO}: 000000000000674797-UN; {UNIDADES_CARRITO_INICIAL_2}: 2

**Pasos ejecutados**

1. Con 2 unidades del producto en el carrito, navegar a la PLP con viewport Desktop 1280×900.
2. Verificar que se muestra el stepper con '−' + cantidad '2' + '+'.
3. Hacer clic en '+' y verificar que qty pasa a 3 y el minicarro se actualiza en tiempo real.
4. Hacer clic en '−' y verificar que qty vuelve a 2 y el minicarro se actualiza.
5. Volver a hacer clic en '−' y verificar que qty pasa a 1 y el stepper cambia a mostrar basurero + '+' (sin '−').
6. Verificar que todas las actualizaciones se reflejan sin recarga de página.

**Resultado esperado**

Con qty>1 se muestra el stepper con '−' y '+'; las acciones '+' y '−' actualizan qty y el minicarro en tiempo real sin recarga; al llegar a qty=1, el '−' desaparece y aparece el basurero.

**Resultado obtenido**

Con 2 un. el stepper mostró "−", 2 y "+". "+" llevó a 3 (badge 2→3), "−" a 2 (badge 3→2) y otro "−" a 1, donde apareció el basurero y desapareció el "−". Todo sin recargar la página.

**Evidencia**

![Paso 1 — plp category lavalozas y lavavajillas con 2 un en el carro](<B2C-89 Evidencias/TC-89-D-004-p01-plp-category-lavalozas-y-lavavajillas-con-2-un-en-el-carro.png>)

![Paso 2 — stepper 2](<B2C-89 Evidencias/TC-89-D-004-p02-stepper-2.png>)

![Paso 3 — en carro 3 un minicarro en 3](<B2C-89 Evidencias/TC-89-D-004-p03-en-carro-3-un-minicarro-en-3.png>)

![Paso 4 — en carro 2 un minicarro en 2](<B2C-89 Evidencias/TC-89-D-004-p04-en-carro-2-un-minicarro-en-2.png>)

![Paso 5 — en carro 1 un basurero y](<B2C-89 Evidencias/TC-89-D-004-p05-en-carro-1-un-basurero-y.png>)

---

### TC-89-D-005 - Botón '+' se deshabilita al alcanzar el máximo de stock disponible en el carrito

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-13 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Spec | tests/B2C-89.spec.ts:252 |

**Precondiciones**

User type: Logueado con dirección configurada.

Producto de prueba con stock limitado conocido (ej. stock=3).

El carrito ya tiene la cantidad máxima de stock disponible del producto (ej. qty=3).

Viewport: Desktop 1280×900.

**Data utilizada**

{BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; {COMPRADOR_PASSWORD}: contraseña de la cuenta compradora; {COMPRADOR_USER}: vhchirinos+comprador@avatar-global.com; {SKU_STOCK_LIMITADO}: 000000000638426003-UN

**Pasos ejecutados**

1. Con el carrito al máximo de stock del producto (ej. qty=stock=3), navegar a la PLP con viewport Desktop 1280×900.
2. Localizar la shelf del producto en estado 'En carro' con el stepper.
3. Verificar que el botón '+' del stepper está deshabilitado (no clicable/opaco).
4. Intentar hacer clic en '+' y verificar que no agrega unidades adicionales.
5. Verificar que la cantidad en el carrito permanece en el máximo de stock.

**Resultado esperado**

El botón '+' se muestra deshabilitado cuando el carrito tiene la cantidad máxima de stock disponible; no se pueden agregar más unidades del producto.

**Resultado obtenido**

La shelf quedó en "En carro 5 un.": el "+" no suma más unidades pero sigue habilitado, sin mensaje de cantidad máxima.

**Observación**

Esperado: botón "+" deshabilitado con el carro al máximo disponible. Obtenido: en la shelf de la PLP (/category/lacteos-huevos-y-refrigerados_yoghurt_proteina) el producto queda en "En carro 5 un." y el "+" sigue habilitado (sin disabled ni aria-disabled, cursor pointer); el clic envía una petición al carro pero no suma unidades ni muestra mensaje. En la PDP del mismo producto, en 5 un., el "+" sí se deshabilita y aparece "Usted ha agregado la cantidad máxima de productos". tests/B2C-89.spec.ts:252.

**Evidencia**

![Paso 1 — plp category lacteos huevos y refrigerados yoghurt proteina](<B2C-89 Evidencias/TC-89-D-005-p01-plp-category-lacteos-huevos-y-refrigerados-yoghurt-proteina-.png>)

![Paso 2 — shelf en carro 5 un](<B2C-89 Evidencias/TC-89-D-005-p02-shelf-en-carro-5-un.png>)

![Estado al fallar la aserción: "+" habilitado en 5 un.](<B2C-89 Evidencias/TC-89-D-005.png> "ancho completo")

---

### TC-89-M-001 - Agregar producto al carro desde la shelf con usuario logueado y dirección configurada

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | tests/B2C-89.spec.ts:404 |

**Precondiciones**

User type: Logueado con dirección/tienda/método de entrega configurado.

Producto de prueba con stock disponible en PLP.

Botón 'Agregar' visible en la shelf del producto.

Viewport: Mobile 390×844.

**Data utilizada**

{BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; {COMPRADOR_PASSWORD}: contraseña de la cuenta compradora; {COMPRADOR_USER}: vhchirinos+comprador@avatar-global.com; {SKU_UNITARIO}: 000000000000674797-UN

**Pasos ejecutados**

1. Navegar a la PLP con viewport Mobile 390×844 con sesión iniciada y dirección configurada.
2. Localizar el producto de prueba con stock disponible.
3. Verificar que el botón 'Agregar' es visible en la shelf.
4. Hacer tap en el botón 'Agregar'.
5. Verificar que 1 unidad se agrega al carrito sin abrir el PDP.
6. Verificar que la shelf cambia al estado 'En carro' con stepper mostrando '1'.
7. Verificar que el badge del minicarrito en el header se actualiza.

**Resultado esperado**

1 unidad agregada al carrito sin abrir PDP; shelf en estado 'En carro' con stepper '1'; badge del minicarrito actualizado.

**Resultado obtenido**

En la PLP /category/lavalozas-y-lavavajillas Mobile, "Agregar" dejó la shelf en "En carro 1 un." sin abrir la PDP y el badge sumó 1 (5→6).

**Observación**

El carro de la cuenta tenía 5 un. de otro producto al empezar; el badge pasó de 5 a 6, una unidad más, como pide el caso.

**Evidencia**

![Paso 1 — plp category lavalozas y lavavajillas con sesion y direccion](<B2C-89 Evidencias/TC-89-M-001-p01-plp-category-lavalozas-y-lavavajillas-con-sesion-y-direccion.png>)

![Paso 3 — shelf con agregar carro en 5](<B2C-89 Evidencias/TC-89-M-001-p03-shelf-con-agregar-carro-en-5.png>)

![Paso 6 — shelf en carro 1 un](<B2C-89 Evidencias/TC-89-M-001-p06-shelf-en-carro-1-un.png>)

![Paso 7 — badge del minicarro en 6](<B2C-89 Evidencias/TC-89-M-001-p07-badge-del-minicarro-en-6.png>)

---

### TC-89-M-003 - Estado 'En carro' con qty=1: muestra basurero y botón '+' en Mobile

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | tests/B2C-89.spec.ts:409 |

**Precondiciones**

User type: Logueado con dirección configurada.

Producto de prueba con 1 unidad en el carrito (qty=1).

Viewport: Mobile 390×844.

**Data utilizada**

{BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; {COMPRADOR_PASSWORD}: contraseña de la cuenta compradora; {COMPRADOR_USER}: vhchirinos+comprador@avatar-global.com; {SKU_UNITARIO}: 000000000000674797-UN; {UNIDADES_CARRITO_INICIAL_1}: 1

**Pasos ejecutados**

1. Con 1 unidad del producto en el carrito, navegar a la PLP con viewport Mobile 390×844.
2. Verificar que la shelf muestra 'En carro 1 un.' con ícono basurero y botón '+'.
3. Verificar que NO hay botón '−' (solo basurero cuando qty=1).
4. Hacer tap en '+' y verificar que qty pasa a 2, minicarro actualiza en tiempo real.
5. Volver a qty=1 con '−'.
6. Hacer tap en el basurero y verificar que el producto se elimina del carrito.
7. Verificar que la shelf vuelve al estado 'Agregar'.

**Resultado esperado**

Con qty=1 se muestra basurero + '+' (sin '−'); '+' incrementa a 2 con actualización en tiempo real; basurero elimina el producto y la shelf vuelve a 'Agregar'.

**Resultado obtenido**

Con 1 un. la shelf mostró basurero y "+", sin "−". "+" llevó a 2 (badge +1), "−" volvió a 1 y el basurero eliminó el producto: la shelf volvió a "Agregar".

**Observación**

El carro de la cuenta tenía 5 un. de otro producto al empezar; el badge se midió en relativo (+1 con "+", −1 con el basurero).

**Evidencia**

![Paso 1 — plp category lavalozas y lavavajillas con 1 un en el carro](<B2C-89 Evidencias/TC-89-M-003-p01-plp-category-lavalozas-y-lavavajillas-con-1-un-en-el-carro.png>)

![Paso 3 — en carro 1 un basurero y](<B2C-89 Evidencias/TC-89-M-003-p03-en-carro-1-un-basurero-y.png>)

![Paso 5 — en carro 2 un minicarro en 7](<B2C-89 Evidencias/TC-89-M-003-p05-en-carro-2-un-minicarro-en-7.png>)

![Paso 6 — de vuelta en 1 un](<B2C-89 Evidencias/TC-89-M-003-p06-de-vuelta-en-1-un.png>)

![Paso 8 — shelf en agregar minicarro en 5](<B2C-89 Evidencias/TC-89-M-003-p08-shelf-en-agregar-minicarro-en-5.png>)

---

### TC-89-M-004 - Estado 'En carro' con qty>1: muestra '−' y '+' con actualización en tiempo real

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | tests/B2C-89.spec.ts:414 |

**Precondiciones**

User type: Logueado con dirección configurada.

Producto de prueba con 2 unidades en el carrito (qty=2).

Viewport: Mobile 390×844.

**Data utilizada**

{BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; {COMPRADOR_PASSWORD}: contraseña de la cuenta compradora; {COMPRADOR_USER}: vhchirinos+comprador@avatar-global.com; {SKU_UNITARIO}: 000000000000674797-UN; {UNIDADES_CARRITO_INICIAL_2}: 2

**Pasos ejecutados**

1. Con 2 unidades del producto en el carrito, navegar a la PLP con viewport Mobile 390×844.
2. Verificar que se muestra el stepper con '−' + '2' + '+'.
3. Hacer tap en '+' y verificar que qty pasa a 3 y el minicarro actualiza en tiempo real.
4. Hacer tap en '−' y verificar que qty vuelve a 2 y el minicarro actualiza.
5. Hacer tap en '−' de nuevo y verificar que qty pasa a 1 y el stepper cambia a basurero + '+' (sin '−').
6. Verificar que todas las actualizaciones ocurren sin recarga de página.

**Resultado esperado**

Con qty>1 el stepper muestra '−' y '+'; acciones '+' y '−' actualizan qty y minicarro en tiempo real; al llegar a qty=1, el '−' se reemplaza por basurero.

**Resultado obtenido**

Con 2 un. el stepper mostró "−", 2 y "+". "+" llevó a 3, "−" a 2 y otro "−" a 1 con basurero y sin "−"; el badge acompañó cada cambio, sin recargar.

**Observación**

El carro de la cuenta tenía 5 un. de otro producto al empezar; el badge se midió en relativo (+1 con "+", −1 con "−").

**Evidencia**

![Paso 1 — plp category lavalozas y lavavajillas con 2 un en el carro](<B2C-89 Evidencias/TC-89-M-004-p01-plp-category-lavalozas-y-lavavajillas-con-2-un-en-el-carro.png>)

![Paso 2 — stepper 2](<B2C-89 Evidencias/TC-89-M-004-p02-stepper-2.png>)

![Paso 3 — en carro 3 un minicarro en 8](<B2C-89 Evidencias/TC-89-M-004-p03-en-carro-3-un-minicarro-en-8.png>)

![Paso 4 — en carro 2 un minicarro en 7](<B2C-89 Evidencias/TC-89-M-004-p04-en-carro-2-un-minicarro-en-7.png>)

![Paso 5 — en carro 1 un basurero y](<B2C-89 Evidencias/TC-89-M-004-p05-en-carro-1-un-basurero-y.png>)

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
  "suite": "B2C-89",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP1/B2C-89 Test Cases.xlsx",
  "title": "B2C-89 - Add to cart desde la shelf - Evidencias QA",
  "updated_at": "2026-11-13"
 },
 "history": {
  "2026-11-13": [
   "TC-89-D-001",
   "TC-89-D-003",
   "TC-89-D-004",
   "TC-89-D-005",
   "TC-89-M-001",
   "TC-89-M-003",
   "TC-89-M-004"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-11-13",
   "expected": "1 unidad del producto se agrega al carrito sin necesidad de entrar al PDP; la shelf cambia al estado 'En carro' con stepper mostrando cantidad '1'; el badge del minicarrito en el header se actualiza con la nueva cantidad.",
   "form_factor": "desktop",
   "id": "TC-89-D-001",
   "name": "Agregar producto al carro desde la shelf con usuario logueado y dirección configurada",
   "observed": "En la PLP /category/lavalozas-y-lavavajillas con sesión y dirección (Calle Uno 23, La Florida), \"Agregar\" dejó la shelf en \"En carro 1 un.\" sin abrir la PDP y el badge del minicarro pasó de 0 a 1.",
   "preconditions": "User type: Logueado con dirección/tienda/método de entrega configurado.\nProducto de prueba con stock disponible visible en PLP.\nBotón 'Agregar' visible en la shelf del producto.\nViewport: Desktop 1280×900.",
   "screenshots": [
    {
     "caption": "Paso 1 — plp category lavalozas y lavavajillas con sesion y direccion",
     "file": "TC-89-D-001-p01-plp-category-lavalozas-y-lavavajillas-con-sesion-y-direccion.png"
    },
    {
     "caption": "Paso 3 — shelf con agregar carro en 0",
     "file": "TC-89-D-001-p03-shelf-con-agregar-carro-en-0.png"
    },
    {
     "caption": "Paso 6 — shelf en carro 1 un",
     "file": "TC-89-D-001-p06-shelf-en-carro-1-un.png"
    },
    {
     "caption": "Paso 7 — badge del minicarro en 1",
     "file": "TC-89-D-001-p07-badge-del-minicarro-en-1.png"
    }
   ],
   "spec": "tests/B2C-89.spec.ts:370",
   "status": "Aprobado",
   "steps": "1. Navegar a la PLP con viewport Desktop 1280×900 con sesión iniciada y dirección configurada.\n2. Localizar el producto de prueba con stock disponible.\n3. Verificar que el botón 'Agregar' es visible en la shelf del producto.\n4. Hacer clic en el botón 'Agregar'.\n5. Verificar que el sistema agrega 1 unidad del producto al carrito (sin abrir PDP).\n6. Verificar que el componente de la shelf cambia al estado 'En carro' mostrando el stepper con cantidad '1'.\n7. Verificar que el badge numérico del minicarrito en el header se actualiza reflejando la nueva cantidad total del carrito.",
   "test_data": "{BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; {COMPRADOR_PASSWORD}: contraseña de la cuenta compradora; {COMPRADOR_USER}: vhchirinos+comprador@avatar-global.com; {SKU_UNITARIO}: 000000000000674797-UN",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-13",
   "expected": "Con qty=1 se muestra ícono basurero + botón '+' (sin '−'); el '+' incrementa a 2 y actualiza el minicarro en tiempo real; el basurero elimina el producto del carrito y la shelf vuelve al estado 'Agregar'.",
   "form_factor": "desktop",
   "id": "TC-89-D-003",
   "name": "Estado 'En carro' con qty=1: muestra basurero (eliminar) y botón '+'",
   "observed": "Con 1 un. en el carro la shelf mostró basurero y \"+\", sin \"−\". \"+\" llevó a 2 (badge 1→2), \"−\" volvió a 1 y el basurero eliminó el producto: la shelf volvió a \"Agregar\" y el badge a 0.",
   "preconditions": "User type: Logueado con dirección configurada.\nProducto de prueba con 1 unidad ya en el carrito (estado 'En carro' qty=1).\nViewport: Desktop 1280×900.",
   "screenshots": [
    {
     "caption": "Paso 1 — plp category lavalozas y lavavajillas con 1 un en el carro",
     "file": "TC-89-D-003-p01-plp-category-lavalozas-y-lavavajillas-con-1-un-en-el-carro.png"
    },
    {
     "caption": "Paso 3 — en carro 1 un basurero y",
     "file": "TC-89-D-003-p03-en-carro-1-un-basurero-y.png"
    },
    {
     "caption": "Paso 5 — en carro 2 un minicarro en 2",
     "file": "TC-89-D-003-p05-en-carro-2-un-minicarro-en-2.png"
    },
    {
     "caption": "Paso 6 — de vuelta en 1 un",
     "file": "TC-89-D-003-p06-de-vuelta-en-1-un.png"
    },
    {
     "caption": "Paso 8 — shelf en agregar minicarro en 0",
     "file": "TC-89-D-003-p08-shelf-en-agregar-minicarro-en-0.png"
    }
   ],
   "spec": "tests/B2C-89.spec.ts:375",
   "status": "Aprobado",
   "steps": "1. Con 1 unidad del producto en el carrito, navegar a la PLP con viewport Desktop 1280×900.\n2. Localizar la shelf del producto en estado 'En carro'.\n3. Verificar que se muestra el bloque 'En carro 1 un.' con ícono basurero y botón '+'.\n4. Verificar que NO se muestra el botón '−' (solo basurero cuando qty=1).\n5. Hacer clic en '+' y verificar que qty pasa a 2, el minicarro se actualiza en tiempo real.\n6. Volver a qty=1 usando '−' en el stepper.\n7. Hacer clic en el ícono basurero y verificar que el producto se elimina del carrito.\n8. Verificar que la shelf vuelve al estado 'Agregar' y el badge del minicarro se actualiza.",
   "test_data": "{BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; {COMPRADOR_PASSWORD}: contraseña de la cuenta compradora; {COMPRADOR_USER}: vhchirinos+comprador@avatar-global.com; {SKU_UNITARIO}: 000000000000674797-UN; {UNIDADES_CARRITO_INICIAL_1}: 1",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-13",
   "expected": "Con qty>1 se muestra el stepper con '−' y '+'; las acciones '+' y '−' actualizan qty y el minicarro en tiempo real sin recarga; al llegar a qty=1, el '−' desaparece y aparece el basurero.",
   "form_factor": "desktop",
   "id": "TC-89-D-004",
   "name": "Estado 'En carro' con qty>1: muestra botón '−' y '+' con actualización en tiempo real",
   "observed": "Con 2 un. el stepper mostró \"−\", 2 y \"+\". \"+\" llevó a 3 (badge 2→3), \"−\" a 2 (badge 3→2) y otro \"−\" a 1, donde apareció el basurero y desapareció el \"−\". Todo sin recargar la página.",
   "preconditions": "User type: Logueado con dirección configurada.\nProducto de prueba con 2 unidades en el carrito (estado 'En carro' qty=2).\nViewport: Desktop 1280×900.",
   "screenshots": [
    {
     "caption": "Paso 1 — plp category lavalozas y lavavajillas con 2 un en el carro",
     "file": "TC-89-D-004-p01-plp-category-lavalozas-y-lavavajillas-con-2-un-en-el-carro.png"
    },
    {
     "caption": "Paso 2 — stepper 2",
     "file": "TC-89-D-004-p02-stepper-2.png"
    },
    {
     "caption": "Paso 3 — en carro 3 un minicarro en 3",
     "file": "TC-89-D-004-p03-en-carro-3-un-minicarro-en-3.png"
    },
    {
     "caption": "Paso 4 — en carro 2 un minicarro en 2",
     "file": "TC-89-D-004-p04-en-carro-2-un-minicarro-en-2.png"
    },
    {
     "caption": "Paso 5 — en carro 1 un basurero y",
     "file": "TC-89-D-004-p05-en-carro-1-un-basurero-y.png"
    }
   ],
   "spec": "tests/B2C-89.spec.ts:380",
   "status": "Aprobado",
   "steps": "1. Con 2 unidades del producto en el carrito, navegar a la PLP con viewport Desktop 1280×900.\n2. Verificar que se muestra el stepper con '−' + cantidad '2' + '+'.\n3. Hacer clic en '+' y verificar que qty pasa a 3 y el minicarro se actualiza en tiempo real.\n4. Hacer clic en '−' y verificar que qty vuelve a 2 y el minicarro se actualiza.\n5. Volver a hacer clic en '−' y verificar que qty pasa a 1 y el stepper cambia a mostrar basurero + '+' (sin '−').\n6. Verificar que todas las actualizaciones se reflejan sin recarga de página.",
   "test_data": "{BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; {COMPRADOR_PASSWORD}: contraseña de la cuenta compradora; {COMPRADOR_USER}: vhchirinos+comprador@avatar-global.com; {SKU_UNITARIO}: 000000000000674797-UN; {UNIDADES_CARRITO_INICIAL_2}: 2",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-13",
   "expected": "El botón '+' se muestra deshabilitado cuando el carrito tiene la cantidad máxima de stock disponible; no se pueden agregar más unidades del producto.",
   "form_factor": "desktop",
   "id": "TC-89-D-005",
   "name": "Botón '+' se deshabilita al alcanzar el máximo de stock disponible en el carrito",
   "observation": "Esperado: botón \"+\" deshabilitado con el carro al máximo disponible. Obtenido: en la shelf de la PLP (/category/lacteos-huevos-y-refrigerados_yoghurt_proteina) el producto queda en \"En carro 5 un.\" y el \"+\" sigue habilitado (sin disabled ni aria-disabled, cursor pointer); el clic envía una petición al carro pero no suma unidades ni muestra mensaje. En la PDP del mismo producto, en 5 un., el \"+\" sí se deshabilita y aparece \"Usted ha agregado la cantidad máxima de productos\". tests/B2C-89.spec.ts:252.",
   "observed": "La shelf quedó en \"En carro 5 un.\": el \"+\" no suma más unidades pero sigue habilitado, sin mensaje de cantidad máxima.",
   "preconditions": "User type: Logueado con dirección configurada.\nProducto de prueba con stock limitado conocido (ej. stock=3).\nEl carrito ya tiene la cantidad máxima de stock disponible del producto (ej. qty=3).\nViewport: Desktop 1280×900.",
   "screenshots": [
    {
     "caption": "Paso 1 — plp category lacteos huevos y refrigerados yoghurt proteina",
     "file": "TC-89-D-005-p01-plp-category-lacteos-huevos-y-refrigerados-yoghurt-proteina-.png"
    },
    {
     "caption": "Paso 2 — shelf en carro 5 un",
     "file": "TC-89-D-005-p02-shelf-en-carro-5-un.png"
    },
    {
     "caption": "Estado al fallar la aserción: \"+\" habilitado en 5 un.",
     "file": "TC-89-D-005.png",
     "full_width": true
    }
   ],
   "spec": "tests/B2C-89.spec.ts:252",
   "status": "Rechazado",
   "steps": "1. Con el carrito al máximo de stock del producto (ej. qty=stock=3), navegar a la PLP con viewport Desktop 1280×900.\n2. Localizar la shelf del producto en estado 'En carro' con el stepper.\n3. Verificar que el botón '+' del stepper está deshabilitado (no clicable/opaco).\n4. Intentar hacer clic en '+' y verificar que no agrega unidades adicionales.\n5. Verificar que la cantidad en el carrito permanece en el máximo de stock.",
   "test_data": "{BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; {COMPRADOR_PASSWORD}: contraseña de la cuenta compradora; {COMPRADOR_USER}: vhchirinos+comprador@avatar-global.com; {SKU_STOCK_LIMITADO}: 000000000638426003-UN",
   "viewport": "1280x900"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-13",
   "expected": "1 unidad agregada al carrito sin abrir PDP; shelf en estado 'En carro' con stepper '1'; badge del minicarrito actualizado.",
   "form_factor": "mobile",
   "id": "TC-89-M-001",
   "name": "Agregar producto al carro desde la shelf con usuario logueado y dirección configurada",
   "observation": "El carro de la cuenta tenía 5 un. de otro producto al empezar; el badge pasó de 5 a 6, una unidad más, como pide el caso.",
   "observed": "En la PLP /category/lavalozas-y-lavavajillas Mobile, \"Agregar\" dejó la shelf en \"En carro 1 un.\" sin abrir la PDP y el badge sumó 1 (5→6).",
   "preconditions": "User type: Logueado con dirección/tienda/método de entrega configurado.\nProducto de prueba con stock disponible en PLP.\nBotón 'Agregar' visible en la shelf del producto.\nViewport: Mobile 390×844.",
   "screenshots": [
    {
     "caption": "Paso 1 — plp category lavalozas y lavavajillas con sesion y direccion",
     "file": "TC-89-M-001-p01-plp-category-lavalozas-y-lavavajillas-con-sesion-y-direccion.png"
    },
    {
     "caption": "Paso 3 — shelf con agregar carro en 5",
     "file": "TC-89-M-001-p03-shelf-con-agregar-carro-en-5.png"
    },
    {
     "caption": "Paso 6 — shelf en carro 1 un",
     "file": "TC-89-M-001-p06-shelf-en-carro-1-un.png"
    },
    {
     "caption": "Paso 7 — badge del minicarro en 6",
     "file": "TC-89-M-001-p07-badge-del-minicarro-en-6.png"
    }
   ],
   "spec": "tests/B2C-89.spec.ts:404",
   "status": "Aprobado",
   "steps": "1. Navegar a la PLP con viewport Mobile 390×844 con sesión iniciada y dirección configurada.\n2. Localizar el producto de prueba con stock disponible.\n3. Verificar que el botón 'Agregar' es visible en la shelf.\n4. Hacer tap en el botón 'Agregar'.\n5. Verificar que 1 unidad se agrega al carrito sin abrir el PDP.\n6. Verificar que la shelf cambia al estado 'En carro' con stepper mostrando '1'.\n7. Verificar que el badge del minicarrito en el header se actualiza.",
   "test_data": "{BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; {COMPRADOR_PASSWORD}: contraseña de la cuenta compradora; {COMPRADOR_USER}: vhchirinos+comprador@avatar-global.com; {SKU_UNITARIO}: 000000000000674797-UN",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-13",
   "expected": "Con qty=1 se muestra basurero + '+' (sin '−'); '+' incrementa a 2 con actualización en tiempo real; basurero elimina el producto y la shelf vuelve a 'Agregar'.",
   "form_factor": "mobile",
   "id": "TC-89-M-003",
   "name": "Estado 'En carro' con qty=1: muestra basurero y botón '+' en Mobile",
   "observation": "El carro de la cuenta tenía 5 un. de otro producto al empezar; el badge se midió en relativo (+1 con \"+\", −1 con el basurero).",
   "observed": "Con 1 un. la shelf mostró basurero y \"+\", sin \"−\". \"+\" llevó a 2 (badge +1), \"−\" volvió a 1 y el basurero eliminó el producto: la shelf volvió a \"Agregar\".",
   "preconditions": "User type: Logueado con dirección configurada.\nProducto de prueba con 1 unidad en el carrito (qty=1).\nViewport: Mobile 390×844.",
   "screenshots": [
    {
     "caption": "Paso 1 — plp category lavalozas y lavavajillas con 1 un en el carro",
     "file": "TC-89-M-003-p01-plp-category-lavalozas-y-lavavajillas-con-1-un-en-el-carro.png"
    },
    {
     "caption": "Paso 3 — en carro 1 un basurero y",
     "file": "TC-89-M-003-p03-en-carro-1-un-basurero-y.png"
    },
    {
     "caption": "Paso 5 — en carro 2 un minicarro en 7",
     "file": "TC-89-M-003-p05-en-carro-2-un-minicarro-en-7.png"
    },
    {
     "caption": "Paso 6 — de vuelta en 1 un",
     "file": "TC-89-M-003-p06-de-vuelta-en-1-un.png"
    },
    {
     "caption": "Paso 8 — shelf en agregar minicarro en 5",
     "file": "TC-89-M-003-p08-shelf-en-agregar-minicarro-en-5.png"
    }
   ],
   "spec": "tests/B2C-89.spec.ts:409",
   "status": "Aprobado",
   "steps": "1. Con 1 unidad del producto en el carrito, navegar a la PLP con viewport Mobile 390×844.\n2. Verificar que la shelf muestra 'En carro 1 un.' con ícono basurero y botón '+'.\n3. Verificar que NO hay botón '−' (solo basurero cuando qty=1).\n4. Hacer tap en '+' y verificar que qty pasa a 2, minicarro actualiza en tiempo real.\n5. Volver a qty=1 con '−'.\n6. Hacer tap en el basurero y verificar que el producto se elimina del carrito.\n7. Verificar que la shelf vuelve al estado 'Agregar'.",
   "test_data": "{BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; {COMPRADOR_PASSWORD}: contraseña de la cuenta compradora; {COMPRADOR_USER}: vhchirinos+comprador@avatar-global.com; {SKU_UNITARIO}: 000000000000674797-UN; {UNIDADES_CARRITO_INICIAL_1}: 1",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-13",
   "expected": "Con qty>1 el stepper muestra '−' y '+'; acciones '+' y '−' actualizan qty y minicarro en tiempo real; al llegar a qty=1, el '−' se reemplaza por basurero.",
   "form_factor": "mobile",
   "id": "TC-89-M-004",
   "name": "Estado 'En carro' con qty>1: muestra '−' y '+' con actualización en tiempo real",
   "observation": "El carro de la cuenta tenía 5 un. de otro producto al empezar; el badge se midió en relativo (+1 con \"+\", −1 con \"−\").",
   "observed": "Con 2 un. el stepper mostró \"−\", 2 y \"+\". \"+\" llevó a 3, \"−\" a 2 y otro \"−\" a 1 con basurero y sin \"−\"; el badge acompañó cada cambio, sin recargar.",
   "preconditions": "User type: Logueado con dirección configurada.\nProducto de prueba con 2 unidades en el carrito (qty=2).\nViewport: Mobile 390×844.",
   "screenshots": [
    {
     "caption": "Paso 1 — plp category lavalozas y lavavajillas con 2 un en el carro",
     "file": "TC-89-M-004-p01-plp-category-lavalozas-y-lavavajillas-con-2-un-en-el-carro.png"
    },
    {
     "caption": "Paso 2 — stepper 2",
     "file": "TC-89-M-004-p02-stepper-2.png"
    },
    {
     "caption": "Paso 3 — en carro 3 un minicarro en 8",
     "file": "TC-89-M-004-p03-en-carro-3-un-minicarro-en-8.png"
    },
    {
     "caption": "Paso 4 — en carro 2 un minicarro en 7",
     "file": "TC-89-M-004-p04-en-carro-2-un-minicarro-en-7.png"
    },
    {
     "caption": "Paso 5 — en carro 1 un basurero y",
     "file": "TC-89-M-004-p05-en-carro-1-un-basurero-y.png"
    }
   ],
   "spec": "tests/B2C-89.spec.ts:414",
   "status": "Aprobado",
   "steps": "1. Con 2 unidades del producto en el carrito, navegar a la PLP con viewport Mobile 390×844.\n2. Verificar que se muestra el stepper con '−' + '2' + '+'.\n3. Hacer tap en '+' y verificar que qty pasa a 3 y el minicarro actualiza en tiempo real.\n4. Hacer tap en '−' y verificar que qty vuelve a 2 y el minicarro actualiza.\n5. Hacer tap en '−' de nuevo y verificar que qty pasa a 1 y el stepper cambia a basurero + '+' (sin '−').\n6. Verificar que todas las actualizaciones ocurren sin recarga de página.",
   "test_data": "{BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; {COMPRADOR_PASSWORD}: contraseña de la cuenta compradora; {COMPRADOR_USER}: vhchirinos+comprador@avatar-global.com; {SKU_UNITARIO}: 000000000000674797-UN; {UNIDADES_CARRITO_INICIAL_2}: 2",
   "viewport": "390x844"
  }
 ]
}
-->
