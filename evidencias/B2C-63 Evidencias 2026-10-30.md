# B2C-63 - Evidencias QA (casos pendientes, corrida del 2026-10-30)

| Campo | Valor |
|---|---|
| Suite | B2C-63 |
| Última actualización | 2026-10-30 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ (DEV) |
| Navegador Desktop | chromium |
| Navegador Mobile | webkit |
| Origen de los TC | SP1/B2C-63 Test cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 21 |
| Bloqueado Data | 10 |
| Rechazado | 8 |
| **Total** | **39** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-30 | 39 | TC-63-D-001, TC-63-D-002, TC-63-D-004, TC-63-D-005, TC-63-D-006, TC-63-D-007, TC-63-D-008, TC-63-D-010, TC-63-D-011, TC-63-D-012, TC-63-D-013, TC-63-D-014, TC-63-D-015, TC-63-D-016, TC-63-D-017, TC-63-D-018, TC-63-D-019, TC-63-D-022, TC-63-D-025, TC-63-D-026, TC-63-M-001, TC-63-M-002, TC-63-M-004, TC-63-M-005, TC-63-M-006, TC-63-M-007, TC-63-M-008, TC-63-M-010, TC-63-M-011, TC-63-M-012, TC-63-M-013, TC-63-M-014, TC-63-M-015, TC-63-M-016, TC-63-M-017, TC-63-M-019, TC-63-M-022, TC-63-M-025, TC-63-M-026 |

## Detalle por caso de prueba

### TC-63-D-001 - Toast 'Agrega N y ahorra más' al agregar 1ª unidad desde PLP (Guest)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |

**Precondiciones**

User type: Guest

El usuario tiene ha ingresado y seleccionado una dirección de entrega

Producto con promo activa "Completa la promo" tipo 2x1 disponible en PLP

Carrito vacío

Viewport Desktop 1280x900

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {DIRECCION_DESPACHO_003} = TBD
- {SKU_PROM_2x1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba

**Pasos ejecutados**

1. Navegar a la PLP de una categoría que contenga un producto con promo "Completa la promo" (ej. promo 2x1).
2. Localizar el producto con la promo activa en el shelf de la PLP.
3. Hacer clic en el botón "+" o "Agregar" del producto en el shelf.
4. Observar el toast que aparece tras la acción.
5. Verificar el texto del mensaje, la barra de progreso y el contador de unidades.

**Resultado esperado**

Se muestra un toast con el mensaje "Agrega 1 más y ahorra más" (o equivalente indicando las unidades faltantes para el siguiente tramo). La barra de progreso refleja 1 de N unidades. El contador del producto en el shelf se actualiza a 1.

**Resultado obtenido**

Verificado 2026-10-30 (Desktop 1280x900, invitado, SKU 000000000664214001-UN, promo 2x1): Con el carro vacío, al agregar la 1ª unidad desde la PLP el shelf muestra «Agrega 1 y ahorra más» y el contador queda en 1.

**Observación**

Verificado 2026-10-30 (Desktop 1280x900, invitado, SKU 000000000664214001-UN, promo 2x1): Con el carro vacío, al agregar la 1ª unidad desde la PLP el shelf muestra «Agrega 1 y ahorra más» y el contador queda en 1.

**Evidencia**

![Paso 1 — shelf antes de agregar](<B2C-63 Evidencias 2026-10-30/TC-63-D-001-p01-shelf-antes-de-agregar.png>)

![Paso 2 — tras la 1 unidad](<B2C-63 Evidencias 2026-10-30/TC-63-D-001-p02-tras-la-1-unidad.png>)

---

### TC-63-D-002 - Toast '¡Completaste la promo!' al alcanzar umbral desde PLP (Guest)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |

**Precondiciones**

User type: Guest

El usuario tiene ha ingresado y seleccionado una dirección de entrega

Producto con promo activa "Completa la promo" tipo 2x1 disponible en PLP

1 unidad del producto ya agregada al carrito (faltan N-1 para completar)

Viewport Desktop 1280x900

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {DIRECCION_DESPACHO_003} = TBD
- {SKU_PROM_2x1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
- {UNIDADES_CARRITO_INICIAL_1} = 1 (unidad del producto ya en el carrito al iniciar el test)

**Pasos ejecutados**

1. Navegar a la PLP (el carrito ya tiene 1 unidad del producto con promo 2x1).
2. Localizar el producto en el shelf.
3. Hacer clic en "+" para agregar la 2ª unidad (que completa el tramo).
4. Observar el toast que aparece.
5. Verificar el texto del toast y el estado de la barra de progreso.

**Resultado esperado**

Se muestra el toast "¡Completaste la promo!" (o equivalente de logro). La barra de progreso se muestra completa (2/2). El contador del producto en el shelf actualiza a 2 unidades.

**Resultado obtenido**

Verificado 2026-10-30 (Desktop 1280x900, invitado, SKU 000000000664214001-UN, promo 2x1): Con 1 unidad en el carro, al agregar la 2ª desde la PLP el shelf muestra «¡Completaste la promo!» y el contador queda en 2.

**Observación**

Verificado 2026-10-30 (Desktop 1280x900, invitado, SKU 000000000664214001-UN, promo 2x1): Con 1 unidad en el carro, al agregar la 2ª desde la PLP el shelf muestra «¡Completaste la promo!» y el contador queda en 2.

**Evidencia**

![Paso 1 — carro con 1 unidad](<B2C-63 Evidencias 2026-10-30/TC-63-D-002-p01-carro-con-1-unidad.png>)

![Paso 2 — tras la 2 unidad](<B2C-63 Evidencias 2026-10-30/TC-63-D-002-p02-tras-la-2-unidad.png>)

---

### TC-63-D-004 - Toast progresivo al agregar desde PDP (Guest)

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |

**Precondiciones**

User type: Guest

El usuario tiene ha ingresado y seleccionado una dirección de entrega

PDP de un producto con promo activa "Completa la promo" 2x1 abierta

Carrito vacío

Viewport Desktop 1280x900

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {DIRECCION_DESPACHO_003} = TBD
- {SKU_PROM_2x1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba

**Pasos ejecutados**

1. Navegar a la PDP del producto con promo "Completa la promo" 2x1.
2. Hacer clic en el botón "+ Agregar al carrito" o en el stepper (+).
3. Observar el toast que aparece tras la acción.
4. Verificar el texto del mensaje y la barra de progreso.

**Resultado esperado**

Se muestra el toast "Agrega 1 más y ahorra más" desde la PDP. La barra de progreso refleja 1 de 2 unidades. El comportamiento es idéntico al de la PLP.

**Resultado obtenido**

Verificado 2026-10-30 (Desktop 1280x900, invitado). Esperado: mensaje «Agrega 1 más y ahorra más» al agregar desde la PDP. Obtenido: la PDP muestra «En carro 1 un.» pero no muestra ningún mensaje ni barra de progreso de la promo (el shelf de la PLP sí lo muestra). Bug: B2C-1414.

**Observación**

Verificado 2026-10-30 (Desktop 1280x900, invitado). Esperado: mensaje «Agrega 1 más y ahorra más» al agregar desde la PDP. Obtenido: la PDP muestra «En carro 1 un.» pero no muestra ningún mensaje ni barra de progreso de la promo (el shelf de la PLP sí lo muestra). Bug: B2C-1414.

**Evidencia**

![Paso 1 — pdp antes de agregar](<B2C-63 Evidencias 2026-10-30/TC-63-D-004-p01-pdp-antes-de-agregar.png>)

![Paso 2 — pdp tras agregar la 1 unidad](<B2C-63 Evidencias 2026-10-30/TC-63-D-004-p02-pdp-tras-agregar-la-1-unidad.png>)

---

### TC-63-D-005 - Toast progresivo al agregar desde Modal de producto (Guest)

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |

**Precondiciones**

User type: Guest

El usuario tiene ha ingresado y seleccionado una dirección de entrega

Modal de producto con promo activa "Completa la promo" 2x1 accesible desde PLP o carrusel

Carrito vacío

Viewport Desktop 1280x900

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {DIRECCION_DESPACHO_003} = TBD
- {SKU_PROM_2x1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba

**Pasos ejecutados**

1. Navegar a la PLP o Home donde aparece el producto con promo en el shelf/carrusel.
2. Abrir el modal del producto (ej. clic en el nombre del producto o en "ver detalle").
3. Dentro del modal, hacer clic en "+" para agregar 1 unidad.
4. Observar el toast que aparece y la barra de progreso.

**Resultado esperado**

Se muestra el toast "Agrega 1 más y ahorra más" al agregar desde el modal. La barra de progreso y el contador se actualizan correctamente dentro del modal.

**Resultado obtenido**

Verificado 2026-10-30 (Desktop 1280x900, invitado). Esperado: «Agrega 1 más y ahorra más» al agregar desde el modal. Obtenido: el modal «Combina la promo» muestra barra completa («1 / 1 productos») y «¡Completaste la promo!» con 1 sola unidad en carro (el shelf muestra «Agrega 1 y ahorra más»). Bug: B2C-1415.

**Observación**

Verificado 2026-10-30 (Desktop 1280x900, invitado). Esperado: «Agrega 1 más y ahorra más» al agregar desde el modal. Obtenido: el modal «Combina la promo» muestra barra completa («1 / 1 productos») y «¡Completaste la promo!» con 1 sola unidad en carro (el shelf muestra «Agrega 1 y ahorra más»). Bug: B2C-1415.

**Evidencia**

![Paso 1 — modal combina la promo abierto](<B2C-63 Evidencias 2026-10-30/TC-63-D-005-p01-modal-combina-la-promo-abierto.png>)

![Paso 2 — modal tras agregar la 1 unidad](<B2C-63 Evidencias 2026-10-30/TC-63-D-005-p02-modal-tras-agregar-la-1-unidad.png>)

---

### TC-63-D-006 - Toast progresivo al agregar desde Carrusel/Shelf en Home (Guest)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |

**Precondiciones**

User type: Guest

El usuario tiene ha ingresado y seleccionado una dirección de entrega

Producto con promo activa "Completa la promo" 2x1 visible en carrusel/shelf del Home

Carrito vacío

Viewport Desktop 1280x900

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {DIRECCION_DESPACHO_003} = TBD
- {SKU_PROM_2x1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba

**Pasos ejecutados**

1. Navegar al Home de la tienda.
2. Localizar el carrusel/shelf que muestra el producto con promo "Completa la promo".
3. Hacer clic en el botón "+" del producto en el shelf del carrusel.
4. Observar el toast que aparece y la actualización del contador.

**Resultado esperado**

Se muestra el toast "Agrega 1 más y ahorra más". La barra de progreso refleja 1 de N unidades. El comportamiento es consistente con el de PLP y PDP.

**Resultado obtenido**

Verificado 2026-10-30: Causa: {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home en el ambiente (el TC lo necesita ahí). Acción: publicar en un carrusel del Home un producto con la promo «Completa la promo» o declarar otro SKU que ya esté en el Home.

**Observación**

Verificado 2026-10-30: Causa: {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home en el ambiente (el TC lo necesita ahí). Acción: publicar en un carrusel del Home un producto con la promo «Completa la promo» o declarar otro SKU que ya esté en el Home.

---

### TC-63-D-007 - Toast al quitar unidades regresa a estado en-progreso (Guest)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |

**Precondiciones**

User type: Guest

El usuario tiene ha ingresado y seleccionado una dirección de entrega

Producto con promo "Completa la promo" 2x1

2 unidades ya en el carrito (promo completada, toast '¡Completaste la promo!' previamente mostrado)

Viewport Desktop 1280x900

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {DIRECCION_DESPACHO_003} = TBD
- {SKU_PROM_2x1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
- {UNIDADES_CARRITO_INICIAL_2} = 2 (unidades del producto ya en el carrito al iniciar el test)

**Pasos ejecutados**

1. Navegar a la PLP (el carrito tiene 2 unidades, promo 2x1 completada).
2. Localizar el producto en el shelf.
3. Hacer clic en "-" para quitar 1 unidad.
4. Observar el toast que aparece y el estado de la barra de progreso.

**Resultado esperado**

Se muestra el toast "Agrega 1 más y ahorra más" (regreso al estado en-progreso). La barra de progreso retrocede a 1 de 2. El contador del producto en el shelf se actualiza a 1 unidad.

**Resultado obtenido**

Verificado 2026-10-30 (Desktop 1280x900, invitado, SKU 000000000664214001-UN, promo 2x1): Con 2 unidades, al quitar una desde la PLP el shelf vuelve a «Agrega 1 y ahorra más» y el contador queda en 1.

**Observación**

Verificado 2026-10-30 (Desktop 1280x900, invitado, SKU 000000000664214001-UN, promo 2x1): Con 2 unidades, al quitar una desde la PLP el shelf vuelve a «Agrega 1 y ahorra más» y el contador queda en 1.

**Evidencia**

![Paso 1 — carro con 2 unidades promo completa](<B2C-63 Evidencias 2026-10-30/TC-63-D-007-p01-carro-con-2-unidades-promo-completa.png>)

![Paso 2 — tras quitar una unidad](<B2C-63 Evidencias 2026-10-30/TC-63-D-007-p02-tras-quitar-una-unidad.png>)

---

### TC-63-D-008 - Recurrencia 2x1 — 3ª unidad reinicia ciclo promocional (Guest)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |

**Precondiciones**

User type: Guest

El usuario tiene ha ingresado y seleccionado una dirección de entrega

Producto con promo "Completa la promo" tipo 2x1 en PLP

2 unidades ya en el carrito (1er tramo completado)

Viewport Desktop 1280x900

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {DIRECCION_DESPACHO_003} = TBD
- {SKU_PROM_2x1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
- {UNIDADES_CARRITO_INICIAL_2} = 2 (unidades del producto ya en el carrito al iniciar el test)

**Pasos ejecutados**

1. Navegar a la PLP (carrito tiene 2 unidades, toast '¡Completaste la promo!' previamente mostrado).
2. Hacer clic en "+" para agregar la 3ª unidad.
3. Observar el toast que aparece y la barra de progreso.

**Resultado esperado**

Se muestra el toast "Agrega 1 más y ahorra más" (inicio del 2° ciclo). La barra de progreso muestra 1 de 2 (reiniciada para el nuevo tramo). El contador del producto refleja 3 unidades totales en el carrito.

**Resultado obtenido**

Verificado 2026-10-30 (Desktop 1280x900, invitado, SKU 000000000664214001-UN, promo 2x1): Con 2 unidades, al agregar la 3ª el shelf muestra «Agrega 1 y ahorra más» (nuevo ciclo) y el contador queda en 3.

**Observación**

Verificado 2026-10-30 (Desktop 1280x900, invitado, SKU 000000000664214001-UN, promo 2x1): Con 2 unidades, al agregar la 3ª el shelf muestra «Agrega 1 y ahorra más» (nuevo ciclo) y el contador queda en 3.

**Evidencia**

![Paso 1 — carro con 2 unidades 1er tramo completo](<B2C-63 Evidencias 2026-10-30/TC-63-D-008-p01-carro-con-2-unidades-1er-tramo-completo.png>)

![Paso 2 — tras la 3 unidad](<B2C-63 Evidencias 2026-10-30/TC-63-D-008-p02-tras-la-3-unidad.png>)

---

### TC-63-D-010 - Eliminar producto desde shelf resetea progreso y oculta toast (Guest)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |

**Precondiciones**

User type: Guest

El usuario tiene ha ingresado y seleccionado una dirección de entrega

Producto con promo "Completa la promo" 2x1 en PLP

1 unidad del producto en el carrito

Viewport Desktop 1280x900

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {DIRECCION_DESPACHO_003} = TBD
- {SKU_PROM_2x1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
- {UNIDADES_CARRITO_INICIAL_1} = 1 (unidad del producto ya en el carrito al iniciar el test)

**Pasos ejecutados**

1. Navegar a la PLP (el carrito tiene 1 unidad del producto en promo).
2. Hacer clic en "-" hasta llegar a 0 unidades (o usar el botón de eliminar si aplica).
3. Observar la UI del shelf y el estado de la barra de progreso.

**Resultado esperado**

El producto es eliminado del carrito. La barra de progreso desaparece o se resetea a 0. Los mensajes del toast de la promo no se muestran. El botón del shelf vuelve al estado inicial ("Agregar").

**Resultado obtenido**

Verificado 2026-10-30 (Desktop 1280x900, invitado, SKU 000000000664214001-UN, promo 2x1): Al eliminar el producto desde el shelf, el contador desaparece, vuelve «Agregar» y no queda ningún mensaje de la promo.

**Observación**

Verificado 2026-10-30 (Desktop 1280x900, invitado, SKU 000000000664214001-UN, promo 2x1): Al eliminar el producto desde el shelf, el contador desaparece, vuelve «Agregar» y no queda ningún mensaje de la promo.

**Evidencia**

![Paso 1 — carro con 1 unidad](<B2C-63 Evidencias 2026-10-30/TC-63-D-010-p01-carro-con-1-unidad.png>)

![Paso 2 — tras eliminar el producto](<B2C-63 Evidencias 2026-10-30/TC-63-D-010-p02-tras-eliminar-el-producto.png>)

---

### TC-63-D-011 - Toast 'Agrega N y ahorra más' al agregar desde PLP (Logueado)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

Producto con promo activa "Completa la promo" 2x1 en PLP

Carrito vacío

Viewport Desktop 1280x900

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {SKU_PROM_2x1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
- {COMPRADOR_USER} = email de cuenta de cliente registrado
- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada

**Pasos ejecutados**

1. Iniciar sesión con cuenta de cliente registrado.
2. Navegar a la PLP con el producto en promo "Completa la promo" 2x1.
3. Hacer clic en "+" para agregar 1 unidad desde el shelf.
4. Observar el toast y la barra de progreso.

**Resultado esperado**

Se muestra el toast "Agrega 1 más y ahorra más". La barra de progreso refleja 1 de 2 unidades. El comportamiento es idéntico al del usuario Guest.

**Resultado obtenido**

Verificado 2026-10-30 (Desktop 1280x900, con sesión, SKU 000000000664214001-UN, promo 2x1): Con el carro vacío, al agregar la 1ª unidad desde la PLP el shelf muestra «Agrega 1 y ahorra más» y el contador queda en 1.

**Observación**

Verificado 2026-10-30 (Desktop 1280x900, con sesión, SKU 000000000664214001-UN, promo 2x1): Con el carro vacío, al agregar la 1ª unidad desde la PLP el shelf muestra «Agrega 1 y ahorra más» y el contador queda en 1.

**Evidencia**

![Paso 1 — shelf antes de agregar](<B2C-63 Evidencias 2026-10-30/TC-63-D-011-p01-shelf-antes-de-agregar.png>)

![Paso 2 — tras la 1 unidad](<B2C-63 Evidencias 2026-10-30/TC-63-D-011-p02-tras-la-1-unidad.png>)

---

### TC-63-D-012 - Toast '¡Completaste la promo!' al alcanzar umbral desde PLP (Logueado)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

Producto con promo "Completa la promo" 2x1 en PLP

1 unidad del producto ya en el carrito

Viewport Desktop 1280x900

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {SKU_PROM_2x1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
- {UNIDADES_CARRITO_INICIAL_1} = 1 (unidad del producto ya en el carrito al iniciar el test)
- {COMPRADOR_USER} = email de cuenta de cliente registrado
- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada

**Pasos ejecutados**

1. Iniciar sesión con cuenta de cliente registrado.
2. Navegar a la PLP (el carrito tiene 1 unidad, promo 2x1).
3. Hacer clic en "+" para agregar la 2ª unidad.
4. Observar el toast que aparece.

**Resultado esperado**

Se muestra el toast "¡Completaste la promo!". La barra de progreso se muestra completa (2/2). El contador refleja 2 unidades en el shelf.

**Resultado obtenido**

Verificado 2026-10-30 (Desktop 1280x900, con sesión, SKU 000000000664214001-UN, promo 2x1): Con 1 unidad en el carro, al agregar la 2ª desde la PLP el shelf muestra «¡Completaste la promo!» y el contador queda en 2.

**Observación**

Verificado 2026-10-30 (Desktop 1280x900, con sesión, SKU 000000000664214001-UN, promo 2x1): Con 1 unidad en el carro, al agregar la 2ª desde la PLP el shelf muestra «¡Completaste la promo!» y el contador queda en 2.

**Evidencia**

![Paso 1 — carro con 1 unidad](<B2C-63 Evidencias 2026-10-30/TC-63-D-012-p01-carro-con-1-unidad.png>)

![Paso 2 — tras la 2 unidad](<B2C-63 Evidencias 2026-10-30/TC-63-D-012-p02-tras-la-2-unidad.png>)

---

### TC-63-D-013 - Toast progresivo al agregar desde PDP (Logueado)

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

PDP de producto con promo activa "Completa la promo" 2x1 abierta

Carrito vacío

Viewport Desktop 1280x900

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {SKU_PROM_2x1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
- {COMPRADOR_USER} = email de cuenta de cliente registrado
- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada

**Pasos ejecutados**

1. Iniciar sesión con cuenta de cliente registrado.
2. Navegar a la PDP del producto con promo "Completa la promo" 2x1.
3. Hacer clic en "+ Agregar al carrito" o en el stepper.
4. Observar el toast y la barra de progreso.

**Resultado esperado**

Se muestra el toast "Agrega 1 más y ahorra más" desde la PDP. La barra de progreso refleja 1 de 2 unidades. El comportamiento es idéntico al del usuario Guest en PDP.

**Resultado obtenido**

Verificado 2026-10-30 (Desktop 1280x900, con sesión). Esperado: mensaje «Agrega 1 más y ahorra más» al agregar desde la PDP. Obtenido: la PDP muestra «En carro 1 un.» pero no muestra ningún mensaje ni barra de progreso de la promo (el shelf de la PLP sí lo muestra). Bug: B2C-1416.

**Observación**

Verificado 2026-10-30 (Desktop 1280x900, con sesión). Esperado: mensaje «Agrega 1 más y ahorra más» al agregar desde la PDP. Obtenido: la PDP muestra «En carro 1 un.» pero no muestra ningún mensaje ni barra de progreso de la promo (el shelf de la PLP sí lo muestra). Bug: B2C-1416.

**Evidencia**

![Paso 1 — pdp antes de agregar](<B2C-63 Evidencias 2026-10-30/TC-63-D-013-p01-pdp-antes-de-agregar.png>)

![Paso 2 — pdp tras agregar la 1 unidad](<B2C-63 Evidencias 2026-10-30/TC-63-D-013-p02-pdp-tras-agregar-la-1-unidad.png>)

---

### TC-63-D-014 - Toast progresivo al agregar desde Modal de producto (Logueado)

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

Modal de producto con promo activa "Completa la promo" 2x1 accesible desde PLP o carrusel

Carrito vacío

Viewport Desktop 1280x900

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {SKU_PROM_2x1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
- {COMPRADOR_USER} = email de cuenta de cliente registrado
- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada

**Pasos ejecutados**

1. Iniciar sesión con cuenta de cliente registrado.
2. Navegar a la PLP o Home donde aparece el producto con promo en el shelf.
3. Abrir el modal del producto.
4. Dentro del modal, hacer clic en "+" para agregar 1 unidad.
5. Observar el toast que aparece.

**Resultado esperado**

Se muestra el toast "Agrega 1 más y ahorra más" desde el modal. La barra de progreso y el contador se actualizan correctamente.

**Resultado obtenido**

Verificado 2026-10-30 (Desktop 1280x900, con sesión). Esperado: «Agrega 1 más y ahorra más» al agregar desde el modal. Obtenido: el modal «Combina la promo» muestra barra completa («1 / 1 productos») y «¡Completaste la promo!» con 1 sola unidad en carro (el shelf muestra «Agrega 1 y ahorra más»). Bug: B2C-1417.

**Observación**

Verificado 2026-10-30 (Desktop 1280x900, con sesión). Esperado: «Agrega 1 más y ahorra más» al agregar desde el modal. Obtenido: el modal «Combina la promo» muestra barra completa («1 / 1 productos») y «¡Completaste la promo!» con 1 sola unidad en carro (el shelf muestra «Agrega 1 y ahorra más»). Bug: B2C-1417.

**Evidencia**

![Paso 1 — modal combina la promo abierto](<B2C-63 Evidencias 2026-10-30/TC-63-D-014-p01-modal-combina-la-promo-abierto.png>)

![Paso 2 — modal tras agregar la 1 unidad](<B2C-63 Evidencias 2026-10-30/TC-63-D-014-p02-modal-tras-agregar-la-1-unidad.png>)

---

### TC-63-D-015 - Toast progresivo al agregar desde Carrusel/Shelf en Home (Logueado)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

Producto con promo activa "Completa la promo" 2x1 visible en carrusel/shelf del Home

Carrito vacío

Viewport Desktop 1280x900

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {SKU_PROM_2x1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
- {COMPRADOR_USER} = email de cuenta de cliente registrado
- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada

**Pasos ejecutados**

1. Iniciar sesión con cuenta de cliente registrado.
2. Navegar al Home de la tienda.
3. Localizar el carrusel con el producto en promo "Completa la promo".
4. Hacer clic en "+" del producto en el shelf del carrusel.
5. Observar el toast y el contador.

**Resultado esperado**

Se muestra el toast "Agrega 1 más y ahorra más". La barra de progreso y el contador se actualizan correctamente desde el carrusel.

**Resultado obtenido**

Verificado 2026-10-30: Causa: {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home en el ambiente (el TC lo necesita ahí). Acción: publicar en un carrusel del Home un producto con la promo «Completa la promo» o declarar otro SKU que ya esté en el Home.

**Observación**

Verificado 2026-10-30: Causa: {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home en el ambiente (el TC lo necesita ahí). Acción: publicar en un carrusel del Home un producto con la promo «Completa la promo» o declarar otro SKU que ya esté en el Home.

---

### TC-63-D-016 - Toast al quitar unidades regresa a estado en-progreso (Logueado)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

Producto con promo "Completa la promo" 2x1 en PLP

2 unidades en el carrito (promo completada)

Viewport Desktop 1280x900

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {SKU_PROM_2x1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
- {UNIDADES_CARRITO_INICIAL_2} = 2 (unidades del producto ya en el carrito al iniciar el test)
- {COMPRADOR_USER} = email de cuenta de cliente registrado
- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada

**Pasos ejecutados**

1. Iniciar sesión con cuenta de cliente registrado.
2. Navegar a la PLP (el carrito tiene 2 unidades, promo 2x1 completada).
3. Hacer clic en "-" en el shelf para quitar 1 unidad.
4. Observar el toast y la barra de progreso.

**Resultado esperado**

Se muestra el toast "Agrega 1 más y ahorra más" (regreso al estado en-progreso). La barra de progreso retrocede a 1 de 2. El contador del shelf actualiza a 1 unidad.

**Resultado obtenido**

Verificado 2026-10-30 (Desktop 1280x900, con sesión, SKU 000000000664214001-UN, promo 2x1): Con 2 unidades, al quitar una desde la PLP el shelf vuelve a «Agrega 1 y ahorra más» y el contador queda en 1.

**Observación**

Verificado 2026-10-30 (Desktop 1280x900, con sesión, SKU 000000000664214001-UN, promo 2x1): Con 2 unidades, al quitar una desde la PLP el shelf vuelve a «Agrega 1 y ahorra más» y el contador queda en 1.

**Evidencia**

![Paso 1 — carro con 2 unidades promo completa](<B2C-63 Evidencias 2026-10-30/TC-63-D-016-p01-carro-con-2-unidades-promo-completa.png>)

![Paso 2 — tras quitar una unidad](<B2C-63 Evidencias 2026-10-30/TC-63-D-016-p02-tras-quitar-una-unidad.png>)

---

### TC-63-D-017 - Recurrencia 2x1 — 3ª unidad reinicia ciclo promocional (Logueado)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

Producto con promo "Completa la promo" 2x1 en PLP

2 unidades ya en el carrito (1er tramo completado)

Viewport Desktop 1280x900

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {SKU_PROM_2x1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
- {UNIDADES_CARRITO_INICIAL_2} = 2 (unidades del producto ya en el carrito al iniciar el test)
- {COMPRADOR_USER} = email de cuenta de cliente registrado
- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada

**Pasos ejecutados**

1. Iniciar sesión con cuenta de cliente registrado.
2. Navegar a la PLP (el carrito tiene 2 unidades, promo 2x1 completada).
3. Hacer clic en "+" para agregar la 3ª unidad.
4. Observar el toast y la barra de progreso.

**Resultado esperado**

Se muestra el toast "Agrega 1 más y ahorra más" (inicio del 2° ciclo). La barra de progreso muestra 1 de 2 (reiniciada). El carrito refleja 3 unidades totales.

**Resultado obtenido**

Verificado 2026-10-30 (Desktop 1280x900, con sesión, SKU 000000000664214001-UN, promo 2x1): Con 2 unidades, al agregar la 3ª el shelf muestra «Agrega 1 y ahorra más» (nuevo ciclo) y el contador queda en 3.

**Observación**

Verificado 2026-10-30 (Desktop 1280x900, con sesión, SKU 000000000664214001-UN, promo 2x1): Con 2 unidades, al agregar la 3ª el shelf muestra «Agrega 1 y ahorra más» (nuevo ciclo) y el contador queda en 3.

**Evidencia**

![Paso 1 — carro con 2 unidades 1er tramo completo](<B2C-63 Evidencias 2026-10-30/TC-63-D-017-p01-carro-con-2-unidades-1er-tramo-completo.png>)

![Paso 2 — tras la 3 unidad](<B2C-63 Evidencias 2026-10-30/TC-63-D-017-p02-tras-la-3-unidad.png>)

---

### TC-63-D-018 - Disminuir unidades recalcula progreso promocional (Logueado)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

Producto con promo "Completa la promo" tipo 3x2 en PLP

2 unidades en el carrito (progreso 2/3)

Viewport Desktop 1280x900

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {SKU_PROM_NxM} = SKU del producto con promo "Completa la promo" tipo 3x2 activa en el ambiente de prueba
- {UNIDADES_CARRITO_INICIAL_2} = 2 (unidades del producto ya en el carrito al iniciar el test)
- {COMPRADOR_USER} = email de cuenta de cliente registrado
- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada

**Pasos ejecutados**

1. Iniciar sesión con cuenta de cliente registrado.
2. Navegar a la PLP (el carrito tiene 2 unidades, promo 3x2, progreso 2/3).
3. Hacer clic en "-" en el shelf para disminuir a 1 unidad.
4. Observar la barra de progreso y el toast.

**Resultado esperado**

La barra de progreso retrocede a 1/3. El toast actualiza el mensaje ("Agrega 2 más y ahorra más"). El contador del shelf refleja 1 unidad. No se produce recarga de la página.

**Resultado obtenido**

Verificado 2026-10-30 (Desktop 1280x900, con sesión, SKU 000000000641229002-UN, promo 3x2): con 2 unidades, al disminuir a 1 el shelf muestra «Agrega 2 y ahorra más» y el contador queda en 1.

**Observación**

Verificado 2026-10-30 (Desktop 1280x900, con sesión, SKU 000000000641229002-UN, promo 3x2): con 2 unidades, al disminuir a 1 el shelf muestra «Agrega 2 y ahorra más» y el contador queda en 1.

**Evidencia**

![Paso 1 — carro con 2 unidades 2 3](<B2C-63 Evidencias 2026-10-30/TC-63-D-018-p01-carro-con-2-unidades-2-3.png>)

![Paso 2 — tras disminuir a 1](<B2C-63 Evidencias 2026-10-30/TC-63-D-018-p02-tras-disminuir-a-1.png>)

---

### TC-63-D-019 - Eliminar producto resetea progreso y oculta toast (Logueado)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

Producto con promo "Completa la promo" 2x1 en PLP

1 unidad del producto en el carrito

Viewport Desktop 1280x900

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {SKU_PROM_2x1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
- {UNIDADES_CARRITO_INICIAL_1} = 1 (unidad del producto ya en el carrito al iniciar el test)
- {COMPRADOR_USER} = email de cuenta de cliente registrado
- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada

**Pasos ejecutados**

1. Iniciar sesión con cuenta de cliente registrado.
2. Navegar a la PLP (el carrito tiene 1 unidad del producto en promo).
3. Hacer clic en "-" hasta 0 unidades o usar el botón de eliminar si aplica.
4. Observar la UI del shelf y la barra de progreso.

**Resultado esperado**

El producto es eliminado del carrito. La barra de progreso desaparece o se resetea. Los mensajes del toast de la promo no se muestran. El botón del shelf vuelve al estado inicial ("Agregar").

**Resultado obtenido**

Verificado 2026-10-30 (Desktop 1280x900, con sesión, SKU 000000000664214001-UN, promo 2x1): Al eliminar el producto desde el shelf, el contador desaparece, vuelve «Agregar» y no queda ningún mensaje de la promo.

**Observación**

Verificado 2026-10-30 (Desktop 1280x900, con sesión, SKU 000000000664214001-UN, promo 2x1): Al eliminar el producto desde el shelf, el contador desaparece, vuelve «Agregar» y no queda ningún mensaje de la promo.

**Evidencia**

![Paso 1 — carro con 1 unidad](<B2C-63 Evidencias 2026-10-30/TC-63-D-019-p01-carro-con-1-unidad.png>)

![Paso 2 — tras eliminar el producto](<B2C-63 Evidencias 2026-10-30/TC-63-D-019-p02-tras-eliminar-el-producto.png>)

---

### TC-63-M-001 - Toast 'Agrega N y ahorra más' al agregar 1ª unidad desde PLP (Guest)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

User type: Guest

Producto con promo activa "Completa la promo" 2x1 disponible en PLP

Carrito vacío

Viewport Mobile 390x844

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {DIRECCION_DESPACHO_003} = TBD
- {SKU_PROM_2x1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba

**Pasos ejecutados**

1. Navegar a la PLP en Mobile con un producto en promo "Completa la promo" 2x1.
2. Localizar el producto con la promo activa en el shelf.
3. Hacer tap en el botón "+" o "Agregar" del producto.
4. Observar el toast que aparece.
5. Verificar el texto del toast y la barra de progreso.

**Resultado esperado**

Se muestra un toast con el mensaje "Agrega 1 más y ahorra más" en Mobile. La barra de progreso refleja 1 de N unidades. El contador del producto en el shelf se actualiza a 1.

**Resultado obtenido**

Verificado 2026-10-30 (Mobile 390x844, invitado, SKU 000000000664214001-UN, promo 2x1): Con el carro vacío, al agregar la 1ª unidad desde la PLP el shelf muestra «Agrega 1 y ahorra más» y el contador queda en 1.

**Observación**

Verificado 2026-10-30 (Mobile 390x844, invitado, SKU 000000000664214001-UN, promo 2x1): Con el carro vacío, al agregar la 1ª unidad desde la PLP el shelf muestra «Agrega 1 y ahorra más» y el contador queda en 1.

**Evidencia**

![Paso 1 — shelf antes de agregar](<B2C-63 Evidencias 2026-10-30/TC-63-M-001-p01-shelf-antes-de-agregar.png>)

![Paso 2 — tras la 1 unidad](<B2C-63 Evidencias 2026-10-30/TC-63-M-001-p02-tras-la-1-unidad.png>)

---

### TC-63-M-002 - Toast '¡Completaste la promo!' al alcanzar umbral desde PLP (Guest)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

User type: Guest

Producto con promo activa "Completa la promo" 2x1 en PLP

1 unidad del producto ya en el carrito

Viewport Mobile 390x844

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {DIRECCION_DESPACHO_003} = TBD
- {SKU_PROM_2x1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
- {UNIDADES_CARRITO_INICIAL_1} = 1 (unidad del producto ya en el carrito al iniciar el test)

**Pasos ejecutados**

1. Navegar a la PLP en Mobile (el carrito tiene 1 unidad, promo 2x1).
2. Hacer tap en "+" para agregar la 2ª unidad.
3. Observar el toast que aparece.
4. Verificar el texto del toast y el estado de la barra de progreso.

**Resultado esperado**

Se muestra el toast "¡Completaste la promo!" en Mobile. La barra de progreso se muestra completa (2/2). El contador actualiza a 2 unidades.

**Resultado obtenido**

Verificado 2026-10-30 (Mobile 390x844, invitado, SKU 000000000664214001-UN, promo 2x1): Con 1 unidad en el carro, al agregar la 2ª desde la PLP el shelf muestra «¡Completaste la promo!» y el contador queda en 2.

**Observación**

Verificado 2026-10-30 (Mobile 390x844, invitado, SKU 000000000664214001-UN, promo 2x1): Con 1 unidad en el carro, al agregar la 2ª desde la PLP el shelf muestra «¡Completaste la promo!» y el contador queda en 2.

**Evidencia**

![Paso 1 — carro con 1 unidad](<B2C-63 Evidencias 2026-10-30/TC-63-M-002-p01-carro-con-1-unidad.png>)

![Paso 2 — tras la 2 unidad](<B2C-63 Evidencias 2026-10-30/TC-63-M-002-p02-tras-la-2-unidad.png>)

---

### TC-63-M-004 - Toast progresivo al agregar desde PDP (Guest)

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-30 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

User type: Guest

PDP de producto con promo activa "Completa la promo" 2x1 abierta

Carrito vacío

Viewport Mobile 390x844

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {DIRECCION_DESPACHO_003} = TBD
- {SKU_PROM_2x1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba

**Pasos ejecutados**

1. Navegar a la PDP del producto con promo "Completa la promo" 2x1 en Mobile.
2. Hacer tap en el botón "+ Agregar al carrito" o en el stepper.
3. Observar el toast y la barra de progreso.

**Resultado esperado**

Se muestra el toast "Agrega 1 más y ahorra más" desde la PDP en Mobile. La barra de progreso refleja 1 de 2 unidades. El comportamiento es idéntico al de la PLP en Mobile.

**Resultado obtenido**

Verificado 2026-10-30 (Mobile 390x844, invitado). Esperado: mensaje «Agrega 1 más y ahorra más» al agregar desde la PDP. Obtenido: la PDP muestra «En carro 1 un.» pero no muestra ningún mensaje ni barra de progreso de la promo (el shelf de la PLP sí lo muestra). Bug: B2C-1418.

**Observación**

Verificado 2026-10-30 (Mobile 390x844, invitado). Esperado: mensaje «Agrega 1 más y ahorra más» al agregar desde la PDP. Obtenido: la PDP muestra «En carro 1 un.» pero no muestra ningún mensaje ni barra de progreso de la promo (el shelf de la PLP sí lo muestra). Bug: B2C-1418.

**Evidencia**

![Paso 1 — pdp antes de agregar](<B2C-63 Evidencias 2026-10-30/TC-63-M-004-p01-pdp-antes-de-agregar.png>)

![Paso 2 — pdp tras agregar la 1 unidad](<B2C-63 Evidencias 2026-10-30/TC-63-M-004-p02-pdp-tras-agregar-la-1-unidad.png>)

---

### TC-63-M-005 - Toast progresivo al agregar desde Modal de producto (Guest)

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-30 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

User type: Guest

Modal de producto con promo activa "Completa la promo" 2x1 accesible desde PLP o carrusel

Carrito vacío

Viewport Mobile 390x844

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {DIRECCION_DESPACHO_003} = TBD
- {SKU_PROM_2x1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba

**Pasos ejecutados**

1. Navegar a la PLP o Home en Mobile donde aparece el producto con promo.
2. Abrir el modal del producto (tap en el nombre o "ver detalle").
3. Dentro del modal, hacer tap en "+" para agregar 1 unidad.
4. Observar el toast y la barra de progreso.

**Resultado esperado**

Se muestra el toast "Agrega 1 más y ahorra más" al agregar desde el modal en Mobile. La barra de progreso y el contador se actualizan correctamente.

**Resultado obtenido**

Verificado 2026-10-30 (Mobile 390x844, invitado). Esperado: «Agrega 1 más y ahorra más» al agregar desde el modal. Obtenido: el modal «Combina la promo» muestra barra completa («1 / 1 productos») y «¡Completaste la promo!» con 1 sola unidad en carro (el shelf muestra «Agrega 1 y ahorra más»). Bug: B2C-1419.

**Observación**

Verificado 2026-10-30 (Mobile 390x844, invitado). Esperado: «Agrega 1 más y ahorra más» al agregar desde el modal. Obtenido: el modal «Combina la promo» muestra barra completa («1 / 1 productos») y «¡Completaste la promo!» con 1 sola unidad en carro (el shelf muestra «Agrega 1 y ahorra más»). Bug: B2C-1419.

**Evidencia**

![Paso 1 — modal combina la promo abierto](<B2C-63 Evidencias 2026-10-30/TC-63-M-005-p01-modal-combina-la-promo-abierto.png>)

![Paso 2 — modal tras agregar la 1 unidad](<B2C-63 Evidencias 2026-10-30/TC-63-M-005-p02-modal-tras-agregar-la-1-unidad.png>)

---

### TC-63-M-006 - Toast progresivo al agregar desde Carrusel/Shelf en Home (Guest)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

User type: Guest

Producto con promo activa "Completa la promo" 2x1 visible en carrusel/shelf del Home

Carrito vacío

Viewport Mobile 390x844

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {DIRECCION_DESPACHO_003} = TBD
- {SKU_PROM_2x1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba

**Pasos ejecutados**

1. Navegar al Home en Mobile.
2. Localizar el carrusel/shelf que muestra el producto con promo.
3. Hacer tap en el botón "+" del producto en el shelf.
4. Observar el toast y el contador.

**Resultado esperado**

Se muestra el toast "Agrega 1 más y ahorra más" en Mobile. La barra de progreso refleja 1 de N unidades. El comportamiento es consistente con PLP y PDP en Mobile.

**Resultado obtenido**

Verificado 2026-10-30: Causa: {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home en el ambiente (el TC lo necesita ahí). Acción: publicar en un carrusel del Home un producto con la promo «Completa la promo» o declarar otro SKU que ya esté en el Home.

**Observación**

Verificado 2026-10-30: Causa: {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home en el ambiente (el TC lo necesita ahí). Acción: publicar en un carrusel del Home un producto con la promo «Completa la promo» o declarar otro SKU que ya esté en el Home.

---

### TC-63-M-007 - Toast al quitar unidades regresa a estado en-progreso (Guest)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

User type: Guest

Producto con promo "Completa la promo" 2x1 en PLP

2 unidades en el carrito (promo completada)

Viewport Mobile 390x844

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {DIRECCION_DESPACHO_003} = TBD
- {SKU_PROM_2x1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
- {UNIDADES_CARRITO_INICIAL_2} = 2 (unidades del producto ya en el carrito al iniciar el test)

**Pasos ejecutados**

1. Navegar a la PLP en Mobile (el carrito tiene 2 unidades, promo 2x1 completada).
2. Hacer tap en "-" en el shelf para quitar 1 unidad.
3. Observar el toast y la barra de progreso.

**Resultado esperado**

Se muestra el toast "Agrega 1 más y ahorra más" en Mobile (regreso al estado en-progreso). La barra de progreso retrocede a 1 de 2. El contador actualiza a 1 unidad.

**Resultado obtenido**

Verificado 2026-10-30 (Mobile 390x844, invitado, SKU 000000000664214001-UN, promo 2x1): Con 2 unidades, al quitar una desde la PLP el shelf vuelve a «Agrega 1 y ahorra más» y el contador queda en 1.

**Observación**

Verificado 2026-10-30 (Mobile 390x844, invitado, SKU 000000000664214001-UN, promo 2x1): Con 2 unidades, al quitar una desde la PLP el shelf vuelve a «Agrega 1 y ahorra más» y el contador queda en 1.

**Evidencia**

![Paso 1 — carro con 2 unidades promo completa](<B2C-63 Evidencias 2026-10-30/TC-63-M-007-p01-carro-con-2-unidades-promo-completa.png>)

![Paso 2 — tras quitar una unidad](<B2C-63 Evidencias 2026-10-30/TC-63-M-007-p02-tras-quitar-una-unidad.png>)

---

### TC-63-M-008 - Recurrencia 2x1 — 3ª unidad reinicia ciclo promocional (Guest)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

User type: Guest

Producto con promo "Completa la promo" 2x1 en PLP

2 unidades en el carrito (1er tramo completado)

Viewport Mobile 390x844

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {DIRECCION_DESPACHO_003} = TBD
- {SKU_PROM_2x1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
- {UNIDADES_CARRITO_INICIAL_2} = 2 (unidades del producto ya en el carrito al iniciar el test)

**Pasos ejecutados**

1. Navegar a la PLP en Mobile (carrito tiene 2 unidades, promo completada).
2. Hacer tap en "+" para agregar la 3ª unidad.
3. Observar el toast y la barra de progreso.

**Resultado esperado**

Se muestra el toast "Agrega 1 más y ahorra más" (inicio del 2° ciclo) en Mobile. La barra de progreso muestra 1 de 2 (reiniciada). El contador refleja 3 unidades totales en el carrito.

**Resultado obtenido**

Verificado 2026-10-30 (Mobile 390x844, invitado, SKU 000000000664214001-UN, promo 2x1): Con 2 unidades, al agregar la 3ª el shelf muestra «Agrega 1 y ahorra más» (nuevo ciclo) y el contador queda en 3.

**Observación**

Verificado 2026-10-30 (Mobile 390x844, invitado, SKU 000000000664214001-UN, promo 2x1): Con 2 unidades, al agregar la 3ª el shelf muestra «Agrega 1 y ahorra más» (nuevo ciclo) y el contador queda en 3.

**Evidencia**

![Paso 1 — carro con 2 unidades 1er tramo completo](<B2C-63 Evidencias 2026-10-30/TC-63-M-008-p01-carro-con-2-unidades-1er-tramo-completo.png>)

![Paso 2 — tras la 3 unidad](<B2C-63 Evidencias 2026-10-30/TC-63-M-008-p02-tras-la-3-unidad.png>)

---

### TC-63-M-010 - Eliminar producto desde shelf resetea progreso y oculta toast (Guest)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

User type: Guest

Producto con promo "Completa la promo" 2x1 en PLP

1 unidad del producto en el carrito

Viewport Mobile 390x844

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {DIRECCION_DESPACHO_003} = TBD
- {SKU_PROM_2x1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
- {UNIDADES_CARRITO_INICIAL_1} = 1 (unidad del producto ya en el carrito al iniciar el test)

**Pasos ejecutados**

1. Navegar a la PLP en Mobile (el carrito tiene 1 unidad del producto en promo).
2. Hacer tap en "-" hasta 0 unidades o usar el botón de eliminar.
3. Observar la UI del shelf y la barra de progreso.

**Resultado esperado**

El producto es eliminado del carrito. La barra de progreso desaparece o se resetea en Mobile. Los mensajes del toast no se muestran. El botón del shelf vuelve al estado inicial ("Agregar").

**Resultado obtenido**

Verificado 2026-10-30 (Mobile 390x844, invitado, SKU 000000000664214001-UN, promo 2x1): Al eliminar el producto desde el shelf, el contador desaparece, vuelve «Agregar» y no queda ningún mensaje de la promo.

**Observación**

Verificado 2026-10-30 (Mobile 390x844, invitado, SKU 000000000664214001-UN, promo 2x1): Al eliminar el producto desde el shelf, el contador desaparece, vuelve «Agregar» y no queda ningún mensaje de la promo.

**Evidencia**

![Paso 1 — carro con 1 unidad](<B2C-63 Evidencias 2026-10-30/TC-63-M-010-p01-carro-con-1-unidad.png>)

![Paso 2 — tras eliminar el producto](<B2C-63 Evidencias 2026-10-30/TC-63-M-010-p02-tras-eliminar-el-producto.png>)

---

### TC-63-M-011 - Toast 'Agrega N y ahorra más' al agregar desde PLP (Logueado)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

Producto con promo activa "Completa la promo" 2x1 en PLP

Carrito vacío

Viewport Mobile 390x844

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {SKU_PROM_2x1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
- {COMPRADOR_USER} = email de cuenta de cliente registrado
- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada

**Pasos ejecutados**

1. Iniciar sesión con cuenta de cliente registrado en Mobile.
2. Navegar a la PLP con el producto en promo "Completa la promo" 2x1.
3. Hacer tap en "+" para agregar 1 unidad desde el shelf.
4. Observar el toast y la barra de progreso.

**Resultado esperado**

Se muestra el toast "Agrega 1 más y ahorra más" en Mobile. La barra de progreso refleja 1 de 2. El comportamiento es idéntico al del usuario Guest en Mobile.

**Resultado obtenido**

Verificado 2026-10-30 (Mobile 390x844, con sesión, SKU 000000000664214001-UN, promo 2x1): Con el carro vacío, al agregar la 1ª unidad desde la PLP el shelf muestra «Agrega 1 y ahorra más» y el contador queda en 1.

**Observación**

Verificado 2026-10-30 (Mobile 390x844, con sesión, SKU 000000000664214001-UN, promo 2x1): Con el carro vacío, al agregar la 1ª unidad desde la PLP el shelf muestra «Agrega 1 y ahorra más» y el contador queda en 1.

**Evidencia**

![Paso 1 — shelf antes de agregar](<B2C-63 Evidencias 2026-10-30/TC-63-M-011-p01-shelf-antes-de-agregar.png>)

![Paso 2 — tras la 1 unidad](<B2C-63 Evidencias 2026-10-30/TC-63-M-011-p02-tras-la-1-unidad.png>)

---

### TC-63-M-012 - Toast '¡Completaste la promo!' al alcanzar umbral desde PLP (Logueado)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

Producto con promo "Completa la promo" 2x1 en PLP

1 unidad del producto en el carrito

Viewport Mobile 390x844

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {SKU_PROM_2x1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
- {UNIDADES_CARRITO_INICIAL_1} = 1 (unidad del producto ya en el carrito al iniciar el test)
- {COMPRADOR_USER} = email de cuenta de cliente registrado
- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada

**Pasos ejecutados**

1. Iniciar sesión con cuenta de cliente registrado en Mobile.
2. Navegar a la PLP (el carrito tiene 1 unidad, promo 2x1).
3. Hacer tap en "+" para agregar la 2ª unidad.
4. Observar el toast que aparece.

**Resultado esperado**

Se muestra el toast "¡Completaste la promo!" en Mobile. La barra de progreso se muestra completa (2/2). El contador refleja 2 unidades.

**Resultado obtenido**

Verificado 2026-10-30 (Mobile 390x844, con sesión, SKU 000000000664214001-UN, promo 2x1): Con 1 unidad en el carro, al agregar la 2ª desde la PLP el shelf muestra «¡Completaste la promo!» y el contador queda en 2.

**Observación**

Verificado 2026-10-30 (Mobile 390x844, con sesión, SKU 000000000664214001-UN, promo 2x1): Con 1 unidad en el carro, al agregar la 2ª desde la PLP el shelf muestra «¡Completaste la promo!» y el contador queda en 2.

**Evidencia**

![Paso 1 — carro con 1 unidad](<B2C-63 Evidencias 2026-10-30/TC-63-M-012-p01-carro-con-1-unidad.png>)

![Paso 2 — tras la 2 unidad](<B2C-63 Evidencias 2026-10-30/TC-63-M-012-p02-tras-la-2-unidad.png>)

---

### TC-63-M-013 - Toast progresivo al agregar desde PDP (Logueado)

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-30 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

PDP de producto con promo activa "Completa la promo" 2x1 abierta

Carrito vacío

Viewport Mobile 390x844

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {SKU_PROM_2x1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
- {COMPRADOR_USER} = email de cuenta de cliente registrado
- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada

**Pasos ejecutados**

1. Iniciar sesión con cuenta de cliente registrado en Mobile.
2. Navegar a la PDP del producto con promo.
3. Hacer tap en "+ Agregar al carrito" o en el stepper.
4. Observar el toast y la barra de progreso.

**Resultado esperado**

Se muestra el toast "Agrega 1 más y ahorra más" desde la PDP en Mobile. La barra de progreso refleja 1 de 2 unidades. El comportamiento es idéntico al del usuario Guest en PDP.

**Resultado obtenido**

Verificado 2026-10-30 (Mobile 390x844, con sesión). Esperado: mensaje «Agrega 1 más y ahorra más» al agregar desde la PDP. Obtenido: la PDP muestra «En carro 1 un.» pero no muestra ningún mensaje ni barra de progreso de la promo (el shelf de la PLP sí lo muestra). Bug: B2C-1420.

**Observación**

Verificado 2026-10-30 (Mobile 390x844, con sesión). Esperado: mensaje «Agrega 1 más y ahorra más» al agregar desde la PDP. Obtenido: la PDP muestra «En carro 1 un.» pero no muestra ningún mensaje ni barra de progreso de la promo (el shelf de la PLP sí lo muestra). Bug: B2C-1420.

**Evidencia**

![Paso 1 — pdp antes de agregar](<B2C-63 Evidencias 2026-10-30/TC-63-M-013-p01-pdp-antes-de-agregar.png>)

![Paso 2 — pdp tras agregar la 1 unidad](<B2C-63 Evidencias 2026-10-30/TC-63-M-013-p02-pdp-tras-agregar-la-1-unidad.png>)

---

### TC-63-M-014 - Toast progresivo al agregar desde Modal de producto (Logueado)

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-30 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

Modal de producto con promo activa "Completa la promo" 2x1 accesible

Carrito vacío

Viewport Mobile 390x844

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {SKU_PROM_2x1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
- {COMPRADOR_USER} = email de cuenta de cliente registrado
- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada

**Pasos ejecutados**

1. Iniciar sesión con cuenta de cliente registrado en Mobile.
2. Navegar a la PLP o Home con el producto en promo.
3. Abrir el modal del producto.
4. Hacer tap en "+" para agregar 1 unidad.
5. Observar el toast que aparece.

**Resultado esperado**

Se muestra el toast "Agrega 1 más y ahorra más" desde el modal en Mobile. La barra de progreso y el contador se actualizan correctamente.

**Resultado obtenido**

Verificado 2026-10-30 (Mobile 390x844, con sesión). Esperado: «Agrega 1 más y ahorra más» al agregar desde el modal. Obtenido: el modal «Combina la promo» muestra barra completa («1 / 1 productos») y «¡Completaste la promo!» con 1 sola unidad en carro (el shelf muestra «Agrega 1 y ahorra más»). Bug: B2C-1421.

**Observación**

Verificado 2026-10-30 (Mobile 390x844, con sesión). Esperado: «Agrega 1 más y ahorra más» al agregar desde el modal. Obtenido: el modal «Combina la promo» muestra barra completa («1 / 1 productos») y «¡Completaste la promo!» con 1 sola unidad en carro (el shelf muestra «Agrega 1 y ahorra más»). Bug: B2C-1421.

**Evidencia**

![Paso 1 — modal combina la promo abierto](<B2C-63 Evidencias 2026-10-30/TC-63-M-014-p01-modal-combina-la-promo-abierto.png>)

![Paso 2 — modal tras agregar la 1 unidad](<B2C-63 Evidencias 2026-10-30/TC-63-M-014-p02-modal-tras-agregar-la-1-unidad.png>)

---

### TC-63-M-015 - Toast progresivo al agregar desde Carrusel/Shelf en Home (Logueado)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

Producto con promo activa "Completa la promo" 2x1 visible en carrusel/shelf del Home

Carrito vacío

Viewport Mobile 390x844

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {SKU_PROM_2x1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
- {COMPRADOR_USER} = email de cuenta de cliente registrado
- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada

**Pasos ejecutados**

1. Iniciar sesión con cuenta de cliente registrado en Mobile.
2. Navegar al Home.
3. Localizar el carrusel con el producto en promo.
4. Hacer tap en "+" del producto en el shelf.
5. Observar el toast y el contador.

**Resultado esperado**

Se muestra el toast "Agrega 1 más y ahorra más" en Mobile. La barra de progreso y el contador se actualizan correctamente desde el carrusel.

**Resultado obtenido**

Verificado 2026-10-30: Causa: {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home en el ambiente (el TC lo necesita ahí). Acción: publicar en un carrusel del Home un producto con la promo «Completa la promo» o declarar otro SKU que ya esté en el Home.

**Observación**

Verificado 2026-10-30: Causa: {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home en el ambiente (el TC lo necesita ahí). Acción: publicar en un carrusel del Home un producto con la promo «Completa la promo» o declarar otro SKU que ya esté en el Home.

---

### TC-63-M-016 - Toast al quitar unidades regresa a estado en-progreso (Logueado)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

Producto con promo "Completa la promo" 2x1 en PLP

2 unidades en el carrito (promo completada)

Viewport Mobile 390x844

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {SKU_PROM_2x1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
- {UNIDADES_CARRITO_INICIAL_2} = 2 (unidades del producto ya en el carrito al iniciar el test)
- {COMPRADOR_USER} = email de cuenta de cliente registrado
- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada

**Pasos ejecutados**

1. Iniciar sesión con cuenta de cliente registrado en Mobile.
2. Navegar a la PLP (el carrito tiene 2 unidades, promo completada).
3. Hacer tap en "-" en el shelf para quitar 1 unidad.
4. Observar el toast y la barra de progreso.

**Resultado esperado**

Se muestra el toast "Agrega 1 más y ahorra más" en Mobile. La barra de progreso retrocede a 1 de 2. El contador actualiza a 1 unidad.

**Resultado obtenido**

Verificado 2026-10-30 (Mobile 390x844, con sesión, SKU 000000000664214001-UN, promo 2x1): Con 2 unidades, al quitar una desde la PLP el shelf vuelve a «Agrega 1 y ahorra más» y el contador queda en 1.

**Observación**

Verificado 2026-10-30 (Mobile 390x844, con sesión, SKU 000000000664214001-UN, promo 2x1): Con 2 unidades, al quitar una desde la PLP el shelf vuelve a «Agrega 1 y ahorra más» y el contador queda en 1.

**Evidencia**

![Paso 1 — carro con 2 unidades promo completa](<B2C-63 Evidencias 2026-10-30/TC-63-M-016-p01-carro-con-2-unidades-promo-completa.png>)

![Paso 2 — tras quitar una unidad](<B2C-63 Evidencias 2026-10-30/TC-63-M-016-p02-tras-quitar-una-unidad.png>)

---

### TC-63-M-017 - Recurrencia 2x1 — 3ª unidad reinicia ciclo promocional (Logueado)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

Producto con promo "Completa la promo" 2x1 en PLP

2 unidades en el carrito (1er tramo completado)

Viewport Mobile 390x844

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {SKU_PROM_2x1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
- {UNIDADES_CARRITO_INICIAL_2} = 2 (unidades del producto ya en el carrito al iniciar el test)
- {COMPRADOR_USER} = email de cuenta de cliente registrado
- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada

**Pasos ejecutados**

1. Iniciar sesión con cuenta de cliente registrado en Mobile.
2. Navegar a la PLP (el carrito tiene 2 unidades, promo 2x1 completada).
3. Hacer tap en "+" para agregar la 3ª unidad.
4. Observar el toast y la barra de progreso.

**Resultado esperado**

Se muestra el toast "Agrega 1 más y ahorra más" en Mobile (inicio del 2° ciclo). La barra de progreso muestra 1 de 2 (reiniciada). El carrito refleja 3 unidades totales.

**Resultado obtenido**

Verificado 2026-10-30 (Mobile 390x844, con sesión, SKU 000000000664214001-UN, promo 2x1): Con 2 unidades, al agregar la 3ª el shelf muestra «Agrega 1 y ahorra más» (nuevo ciclo) y el contador queda en 3.

**Observación**

Verificado 2026-10-30 (Mobile 390x844, con sesión, SKU 000000000664214001-UN, promo 2x1): Con 2 unidades, al agregar la 3ª el shelf muestra «Agrega 1 y ahorra más» (nuevo ciclo) y el contador queda en 3.

**Evidencia**

![Paso 1 — carro con 2 unidades 1er tramo completo](<B2C-63 Evidencias 2026-10-30/TC-63-M-017-p01-carro-con-2-unidades-1er-tramo-completo.png>)

![Paso 2 — tras la 3 unidad](<B2C-63 Evidencias 2026-10-30/TC-63-M-017-p02-tras-la-3-unidad.png>)

---

### TC-63-M-019 - Eliminar producto resetea progreso y oculta toast (Logueado)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

Producto con promo "Completa la promo" 2x1 en PLP

1 unidad del producto en el carrito

Viewport Mobile 390x844

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {SKU_PROM_2x1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
- {UNIDADES_CARRITO_INICIAL_1} = 1 (unidad del producto ya en el carrito al iniciar el test)
- {COMPRADOR_USER} = email de cuenta de cliente registrado
- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada

**Pasos ejecutados**

1. Iniciar sesión con cuenta de cliente registrado en Mobile.
2. Navegar a la PLP (el carrito tiene 1 unidad del producto en promo).
3. Hacer tap en "-" hasta 0 unidades o usar el botón de eliminar.
4. Observar la UI del shelf y la barra de progreso.

**Resultado esperado**

El producto es eliminado del carrito. La barra de progreso desaparece o se resetea en Mobile. Los mensajes del toast no se muestran. El botón del shelf vuelve al estado inicial ("Agregar").

**Resultado obtenido**

Verificado 2026-10-30 (Mobile 390x844, con sesión, SKU 000000000664214001-UN, promo 2x1): Al eliminar el producto desde el shelf, el contador desaparece, vuelve «Agregar» y no queda ningún mensaje de la promo.

**Observación**

Verificado 2026-10-30 (Mobile 390x844, con sesión, SKU 000000000664214001-UN, promo 2x1): Al eliminar el producto desde el shelf, el contador desaparece, vuelve «Agregar» y no queda ningún mensaje de la promo.

**Evidencia**

![Paso 1 — carro con 1 unidad](<B2C-63 Evidencias 2026-10-30/TC-63-M-019-p01-carro-con-1-unidad.png>)

![Paso 2 — tras eliminar el producto](<B2C-63 Evidencias 2026-10-30/TC-63-M-019-p02-tras-eliminar-el-producto.png>)

---

### TC-63-D-022 - Usuario invitado quita una unidad desde un carrusel del Home

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |

**Precondiciones**

User type: Guest

Dirección de entrega seleccionada: {DIRECCION_DESPACHO_001} (Despacho a domicilio con cobertura)

Producto {SKU_COMPLETA_PROMO_2X1} con promo activa "Completa la promo" 2x1 (mismo SKU, sin código especial)

El carro contiene {SKU_COMPLETA_PROMO_2X1} x 2 (promo 2x1 completada)

{SKU_COMPLETA_PROMO_2X1} aparece en un carrusel del Home

Viewport Desktop 1280x900

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {PLP_URL_NxM} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas
- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN
- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

**Pasos ejecutados**

1. Navegar a {BASE_URL} (Home).
2. Ubicar {SKU_COMPLETA_PROMO_2X1} en un carrusel del Home.
3. Verificar que el sistema muestra el shelf del carrusel con el contador en 2 y la barra de progreso completa.
4. Hacer clic en "−" en el shelf del carrusel.
5. Verificar que el sistema actualiza el contador a 1, retrocede la barra de progreso a 1 de 2 y muestra "Agrega 1 y ahorra más".

**Resultado esperado**

En el carrusel el contador queda en 1, la barra de progreso retrocede a 1 de 2 y se muestra "Agrega 1 y ahorra más".

**Resultado obtenido**

Verificado 2026-10-30: Causa: {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home en el ambiente (el TC lo necesita ahí). Acción: publicar en un carrusel del Home un producto con la promo «Completa la promo» o declarar otro SKU que ya esté en el Home.

**Observación**

Verificado 2026-10-30: Causa: {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home en el ambiente (el TC lo necesita ahí). Acción: publicar en un carrusel del Home un producto con la promo «Completa la promo» o declarar otro SKU que ya esté en el Home.

---

### TC-63-D-025 - Usuario invitado inicia la promo en el Home y la completa en la PDP

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |

**Precondiciones**

User type: Guest

Dirección de entrega seleccionada: {DIRECCION_DESPACHO_001} (Despacho a domicilio con cobertura)

Producto {SKU_COMPLETA_PROMO_2X1} con promo activa "Completa la promo" 2x1 (mismo SKU, sin código especial)

Carro vacío

{SKU_COMPLETA_PROMO_2X1} aparece en un carrusel del Home

Viewport Desktop 1280x900

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {PLP_URL_NxM} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas
- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN
- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

**Pasos ejecutados**

1. Navegar a {BASE_URL} (Home).
2. Hacer clic en "Agregar" en el shelf de {SKU_COMPLETA_PROMO_2X1} en un carrusel del Home.
3. Verificar que el sistema agrega la unidad y muestra "Agrega 1 y ahorra más" con la barra de progreso en 1 de 2.
4. Abrir la PDP de {SKU_COMPLETA_PROMO_2X1}.
5. Verificar que el sistema carga la PDP con el contador en 1 y la barra de progreso en 1 de 2.
6. Hacer clic en "+" en el stepper de la PDP.
7. Verificar que el sistema actualiza el contador a 2, completa la barra de progreso y muestra el toast "¡Completaste la promo!".

**Resultado esperado**

La PDP conserva el progreso iniciado en el Home (contador 1, barra 1 de 2) y al agregar la 2ª unidad muestra "¡Completaste la promo!".

**Resultado obtenido**

Verificado 2026-10-30: Causa: {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home en el ambiente (el TC lo necesita ahí). Acción: publicar en un carrusel del Home un producto con la promo «Completa la promo» o declarar otro SKU que ya esté en el Home.

**Observación**

Verificado 2026-10-30: Causa: {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home en el ambiente (el TC lo necesita ahí). Acción: publicar en un carrusel del Home un producto con la promo «Completa la promo» o declarar otro SKU que ya esté en el Home.

---

### TC-63-D-026 - Usuario invitado inicia la promo en el Home y la completa en la PLP

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |

**Precondiciones**

User type: Guest

Dirección de entrega seleccionada: {DIRECCION_DESPACHO_001} (Despacho a domicilio con cobertura)

Producto {SKU_COMPLETA_PROMO_2X1} con promo activa "Completa la promo" 2x1 (mismo SKU, sin código especial)

Carro vacío

{SKU_COMPLETA_PROMO_2X1} aparece en un carrusel del Home

Viewport Desktop 1280x900

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {PLP_URL_NxM} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas
- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN
- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

**Pasos ejecutados**

1. Navegar a {BASE_URL} (Home).
2. Hacer clic en "Agregar" en el shelf de {SKU_COMPLETA_PROMO_2X1} en un carrusel del Home.
3. Verificar que el sistema agrega la unidad y muestra "Agrega 1 y ahorra más" con la barra de progreso en 1 de 2.
4. Navegar a {PLP_URL_NxM} y ubicar el shelf de {SKU_COMPLETA_PROMO_2X1}.
5. Verificar que el sistema muestra el shelf de {SKU_COMPLETA_PROMO_2X1} con el contador en 1 y la barra de progreso en 1 de 2.
6. Hacer clic en "+" en el shelf.
7. Verificar que el sistema actualiza el contador a 2, completa la barra de progreso y muestra el toast "¡Completaste la promo!".

**Resultado esperado**

El shelf de la PLP conserva el progreso iniciado en el Home (contador 1, barra 1 de 2) y al agregar la 2ª unidad muestra "¡Completaste la promo!".

**Resultado obtenido**

Verificado 2026-10-30: Causa: {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home en el ambiente (el TC lo necesita ahí). Acción: publicar en un carrusel del Home un producto con la promo «Completa la promo» o declarar otro SKU que ya esté en el Home.

**Observación**

Verificado 2026-10-30: Causa: {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home en el ambiente (el TC lo necesita ahí). Acción: publicar en un carrusel del Home un producto con la promo «Completa la promo» o declarar otro SKU que ya esté en el Home.

---

### TC-63-M-022 - Usuario invitado quita una unidad desde un carrusel del Home

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

User type: Guest

Dirección de entrega seleccionada: {DIRECCION_DESPACHO_001} (Despacho a domicilio con cobertura)

Producto {SKU_COMPLETA_PROMO_2X1} con promo activa "Completa la promo" 2x1 (mismo SKU, sin código especial)

El carro contiene {SKU_COMPLETA_PROMO_2X1} x 2 (promo 2x1 completada)

{SKU_COMPLETA_PROMO_2X1} aparece en un carrusel del Home

Viewport Mobile 390x844

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {PLP_URL_NxM} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas
- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN
- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

**Pasos ejecutados**

1. Navegar a {BASE_URL} (Home).
2. Ubicar {SKU_COMPLETA_PROMO_2X1} en un carrusel del Home.
3. Verificar que el sistema muestra el shelf del carrusel con el contador en 2 y la barra de progreso completa.
4. Hacer tap en "−" en el shelf del carrusel.
5. Verificar que el sistema actualiza el contador a 1, retrocede la barra de progreso a 1 de 2 y muestra "Agrega 1 y ahorra más".

**Resultado esperado**

En el carrusel el contador queda en 1, la barra de progreso retrocede a 1 de 2 y se muestra "Agrega 1 y ahorra más".

**Resultado obtenido**

Verificado 2026-10-30: Causa: {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home en el ambiente (el TC lo necesita ahí). Acción: publicar en un carrusel del Home un producto con la promo «Completa la promo» o declarar otro SKU que ya esté en el Home.

**Observación**

Verificado 2026-10-30: Causa: {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home en el ambiente (el TC lo necesita ahí). Acción: publicar en un carrusel del Home un producto con la promo «Completa la promo» o declarar otro SKU que ya esté en el Home.

---

### TC-63-M-025 - Usuario invitado inicia la promo en el Home y la completa en la PDP

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

User type: Guest

Dirección de entrega seleccionada: {DIRECCION_DESPACHO_001} (Despacho a domicilio con cobertura)

Producto {SKU_COMPLETA_PROMO_2X1} con promo activa "Completa la promo" 2x1 (mismo SKU, sin código especial)

Carro vacío

{SKU_COMPLETA_PROMO_2X1} aparece en un carrusel del Home

Viewport Mobile 390x844

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {PLP_URL_NxM} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas
- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN
- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

**Pasos ejecutados**

1. Navegar a {BASE_URL} (Home).
2. Hacer tap en "Agregar" en el shelf de {SKU_COMPLETA_PROMO_2X1} en un carrusel del Home.
3. Verificar que el sistema agrega la unidad y muestra "Agrega 1 y ahorra más" con la barra de progreso en 1 de 2.
4. Abrir la PDP de {SKU_COMPLETA_PROMO_2X1}.
5. Verificar que el sistema carga la PDP con el contador en 1 y la barra de progreso en 1 de 2.
6. Hacer tap en "+" en el stepper de la PDP.
7. Verificar que el sistema actualiza el contador a 2, completa la barra de progreso y muestra el toast "¡Completaste la promo!".

**Resultado esperado**

La PDP conserva el progreso iniciado en el Home (contador 1, barra 1 de 2) y al agregar la 2ª unidad muestra "¡Completaste la promo!".

**Resultado obtenido**

Verificado 2026-10-30: Causa: {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home en el ambiente (el TC lo necesita ahí). Acción: publicar en un carrusel del Home un producto con la promo «Completa la promo» o declarar otro SKU que ya esté en el Home.

**Observación**

Verificado 2026-10-30: Causa: {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home en el ambiente (el TC lo necesita ahí). Acción: publicar en un carrusel del Home un producto con la promo «Completa la promo» o declarar otro SKU que ya esté en el Home.

---

### TC-63-M-026 - Usuario invitado inicia la promo en el Home y la completa en la PLP

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

User type: Guest

Dirección de entrega seleccionada: {DIRECCION_DESPACHO_001} (Despacho a domicilio con cobertura)

Producto {SKU_COMPLETA_PROMO_2X1} con promo activa "Completa la promo" 2x1 (mismo SKU, sin código especial)

Carro vacío

{SKU_COMPLETA_PROMO_2X1} aparece en un carrusel del Home

Viewport Mobile 390x844

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {PLP_URL_NxM} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas
- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN
- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

**Pasos ejecutados**

1. Navegar a {BASE_URL} (Home).
2. Hacer tap en "Agregar" en el shelf de {SKU_COMPLETA_PROMO_2X1} en un carrusel del Home.
3. Verificar que el sistema agrega la unidad y muestra "Agrega 1 y ahorra más" con la barra de progreso en 1 de 2.
4. Navegar a {PLP_URL_NxM} y ubicar el shelf de {SKU_COMPLETA_PROMO_2X1}.
5. Verificar que el sistema muestra el shelf de {SKU_COMPLETA_PROMO_2X1} con el contador en 1 y la barra de progreso en 1 de 2.
6. Hacer tap en "+" en el shelf.
7. Verificar que el sistema actualiza el contador a 2, completa la barra de progreso y muestra el toast "¡Completaste la promo!".

**Resultado esperado**

El shelf de la PLP conserva el progreso iniciado en el Home (contador 1, barra 1 de 2) y al agregar la 2ª unidad muestra "¡Completaste la promo!".

**Resultado obtenido**

Verificado 2026-10-30: Causa: {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home en el ambiente (el TC lo necesita ahí). Acción: publicar en un carrusel del Home un producto con la promo «Completa la promo» o declarar otro SKU que ya esté en el Home.

**Observación**

Verificado 2026-10-30: Causa: {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home en el ambiente (el TC lo necesita ahí). Acción: publicar en un carrusel del Home un producto con la promo «Completa la promo» o declarar otro SKU que ya esté en el Home.

---

<!-- qa-evidence-state
{
 "header": {
  "browsers": {
   "desktop": "chromium",
   "mobile": "webkit"
  },
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "environment": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ (DEV)",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-63",
  "tc_file": "SP1/B2C-63 Test cases.xlsx",
  "title": "B2C-63 - Evidencias QA (casos pendientes, corrida del 2026-10-30)",
  "updated_at": "2026-10-30"
 },
 "history": {
  "2026-10-30": [
   "TC-63-D-001",
   "TC-63-D-002",
   "TC-63-D-004",
   "TC-63-D-005",
   "TC-63-D-006",
   "TC-63-D-007",
   "TC-63-D-008",
   "TC-63-D-010",
   "TC-63-D-011",
   "TC-63-D-012",
   "TC-63-D-013",
   "TC-63-D-014",
   "TC-63-D-015",
   "TC-63-D-016",
   "TC-63-D-017",
   "TC-63-D-018",
   "TC-63-D-019",
   "TC-63-D-022",
   "TC-63-D-025",
   "TC-63-D-026",
   "TC-63-M-001",
   "TC-63-M-002",
   "TC-63-M-004",
   "TC-63-M-005",
   "TC-63-M-006",
   "TC-63-M-007",
   "TC-63-M-008",
   "TC-63-M-010",
   "TC-63-M-011",
   "TC-63-M-012",
   "TC-63-M-013",
   "TC-63-M-014",
   "TC-63-M-015",
   "TC-63-M-016",
   "TC-63-M-017",
   "TC-63-M-019",
   "TC-63-M-022",
   "TC-63-M-025",
   "TC-63-M-026"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "Se muestra un toast con el mensaje \"Agrega 1 más y ahorra más\" (o equivalente indicando las unidades faltantes para el siguiente tramo). La barra de progreso refleja 1 de N unidades. El contador del producto en el shelf se actualiza a 1.",
   "form_factor": "desktop",
   "id": "TC-63-D-001",
   "name": "Toast 'Agrega N y ahorra más' al agregar 1ª unidad desde PLP (Guest)",
   "observation": "Verificado 2026-10-30 (Desktop 1280x900, invitado, SKU 000000000664214001-UN, promo 2x1): Con el carro vacío, al agregar la 1ª unidad desde la PLP el shelf muestra «Agrega 1 y ahorra más» y el contador queda en 1.",
   "observed": "Verificado 2026-10-30 (Desktop 1280x900, invitado, SKU 000000000664214001-UN, promo 2x1): Con el carro vacío, al agregar la 1ª unidad desde la PLP el shelf muestra «Agrega 1 y ahorra más» y el contador queda en 1.",
   "preconditions": "User type: Guest\nEl usuario tiene ha ingresado y seleccionado una dirección de entrega\nProducto con promo activa \"Completa la promo\" tipo 2x1 disponible en PLP\nCarrito vacío\nViewport Desktop 1280x900",
   "screenshots": [
    {
     "caption": "Paso 1 — shelf antes de agregar",
     "file": "TC-63-D-001-p01-shelf-antes-de-agregar.png"
    },
    {
     "caption": "Paso 2 — tras la 1 unidad",
     "file": "TC-63-D-001-p02-tras-la-1-unidad.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Navegar a la PLP de una categoría que contenga un producto con promo \"Completa la promo\" (ej. promo 2x1).\n2. Localizar el producto con la promo activa en el shelf de la PLP.\n3. Hacer clic en el botón \"+\" o \"Agregar\" del producto en el shelf.\n4. Observar el toast que aparece tras la acción.\n5. Verificar el texto del mensaje, la barra de progreso y el contador de unidades.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {DIRECCION_DESPACHO_003} = TBD\n- {SKU_PROM_2x1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "Se muestra el toast \"¡Completaste la promo!\" (o equivalente de logro). La barra de progreso se muestra completa (2/2). El contador del producto en el shelf actualiza a 2 unidades.",
   "form_factor": "desktop",
   "id": "TC-63-D-002",
   "name": "Toast '¡Completaste la promo!' al alcanzar umbral desde PLP (Guest)",
   "observation": "Verificado 2026-10-30 (Desktop 1280x900, invitado, SKU 000000000664214001-UN, promo 2x1): Con 1 unidad en el carro, al agregar la 2ª desde la PLP el shelf muestra «¡Completaste la promo!» y el contador queda en 2.",
   "observed": "Verificado 2026-10-30 (Desktop 1280x900, invitado, SKU 000000000664214001-UN, promo 2x1): Con 1 unidad en el carro, al agregar la 2ª desde la PLP el shelf muestra «¡Completaste la promo!» y el contador queda en 2.",
   "preconditions": "User type: Guest\nEl usuario tiene ha ingresado y seleccionado una dirección de entrega\nProducto con promo activa \"Completa la promo\" tipo 2x1 disponible en PLP\n1 unidad del producto ya agregada al carrito (faltan N-1 para completar)\nViewport Desktop 1280x900",
   "screenshots": [
    {
     "caption": "Paso 1 — carro con 1 unidad",
     "file": "TC-63-D-002-p01-carro-con-1-unidad.png"
    },
    {
     "caption": "Paso 2 — tras la 2 unidad",
     "file": "TC-63-D-002-p02-tras-la-2-unidad.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Navegar a la PLP (el carrito ya tiene 1 unidad del producto con promo 2x1).\n2. Localizar el producto en el shelf.\n3. Hacer clic en \"+\" para agregar la 2ª unidad (que completa el tramo).\n4. Observar el toast que aparece.\n5. Verificar el texto del toast y el estado de la barra de progreso.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {DIRECCION_DESPACHO_003} = TBD\n- {SKU_PROM_2x1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {UNIDADES_CARRITO_INICIAL_1} = 1 (unidad del producto ya en el carrito al iniciar el test)",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "Se muestra el toast \"Agrega 1 más y ahorra más\" desde la PDP. La barra de progreso refleja 1 de 2 unidades. El comportamiento es idéntico al de la PLP.",
   "form_factor": "desktop",
   "id": "TC-63-D-004",
   "name": "Toast progresivo al agregar desde PDP (Guest)",
   "observation": "Verificado 2026-10-30 (Desktop 1280x900, invitado). Esperado: mensaje «Agrega 1 más y ahorra más» al agregar desde la PDP. Obtenido: la PDP muestra «En carro 1 un.» pero no muestra ningún mensaje ni barra de progreso de la promo (el shelf de la PLP sí lo muestra). Bug: B2C-1414.",
   "observed": "Verificado 2026-10-30 (Desktop 1280x900, invitado). Esperado: mensaje «Agrega 1 más y ahorra más» al agregar desde la PDP. Obtenido: la PDP muestra «En carro 1 un.» pero no muestra ningún mensaje ni barra de progreso de la promo (el shelf de la PLP sí lo muestra). Bug: B2C-1414.",
   "preconditions": "User type: Guest\nEl usuario tiene ha ingresado y seleccionado una dirección de entrega\nPDP de un producto con promo activa \"Completa la promo\" 2x1 abierta\nCarrito vacío\nViewport Desktop 1280x900",
   "screenshots": [
    {
     "caption": "Paso 1 — pdp antes de agregar",
     "file": "TC-63-D-004-p01-pdp-antes-de-agregar.png"
    },
    {
     "caption": "Paso 2 — pdp tras agregar la 1 unidad",
     "file": "TC-63-D-004-p02-pdp-tras-agregar-la-1-unidad.png"
    }
   ],
   "status": "Rechazado",
   "steps": "1. Navegar a la PDP del producto con promo \"Completa la promo\" 2x1.\n2. Hacer clic en el botón \"+ Agregar al carrito\" o en el stepper (+).\n3. Observar el toast que aparece tras la acción.\n4. Verificar el texto del mensaje y la barra de progreso.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {DIRECCION_DESPACHO_003} = TBD\n- {SKU_PROM_2x1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "Se muestra el toast \"Agrega 1 más y ahorra más\" al agregar desde el modal. La barra de progreso y el contador se actualizan correctamente dentro del modal.",
   "form_factor": "desktop",
   "id": "TC-63-D-005",
   "name": "Toast progresivo al agregar desde Modal de producto (Guest)",
   "observation": "Verificado 2026-10-30 (Desktop 1280x900, invitado). Esperado: «Agrega 1 más y ahorra más» al agregar desde el modal. Obtenido: el modal «Combina la promo» muestra barra completa («1 / 1 productos») y «¡Completaste la promo!» con 1 sola unidad en carro (el shelf muestra «Agrega 1 y ahorra más»). Bug: B2C-1415.",
   "observed": "Verificado 2026-10-30 (Desktop 1280x900, invitado). Esperado: «Agrega 1 más y ahorra más» al agregar desde el modal. Obtenido: el modal «Combina la promo» muestra barra completa («1 / 1 productos») y «¡Completaste la promo!» con 1 sola unidad en carro (el shelf muestra «Agrega 1 y ahorra más»). Bug: B2C-1415.",
   "preconditions": "User type: Guest\nEl usuario tiene ha ingresado y seleccionado una dirección de entrega\nModal de producto con promo activa \"Completa la promo\" 2x1 accesible desde PLP o carrusel\nCarrito vacío\nViewport Desktop 1280x900",
   "screenshots": [
    {
     "caption": "Paso 1 — modal combina la promo abierto",
     "file": "TC-63-D-005-p01-modal-combina-la-promo-abierto.png"
    },
    {
     "caption": "Paso 2 — modal tras agregar la 1 unidad",
     "file": "TC-63-D-005-p02-modal-tras-agregar-la-1-unidad.png"
    }
   ],
   "status": "Rechazado",
   "steps": "1. Navegar a la PLP o Home donde aparece el producto con promo en el shelf/carrusel.\n2. Abrir el modal del producto (ej. clic en el nombre del producto o en \"ver detalle\").\n3. Dentro del modal, hacer clic en \"+\" para agregar 1 unidad.\n4. Observar el toast que aparece y la barra de progreso.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {DIRECCION_DESPACHO_003} = TBD\n- {SKU_PROM_2x1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "Se muestra el toast \"Agrega 1 más y ahorra más\". La barra de progreso refleja 1 de N unidades. El comportamiento es consistente con el de PLP y PDP.",
   "form_factor": "desktop",
   "id": "TC-63-D-006",
   "name": "Toast progresivo al agregar desde Carrusel/Shelf en Home (Guest)",
   "observation": "Verificado 2026-10-30: Causa: {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home en el ambiente (el TC lo necesita ahí). Acción: publicar en un carrusel del Home un producto con la promo «Completa la promo» o declarar otro SKU que ya esté en el Home.",
   "observed": "Verificado 2026-10-30: Causa: {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home en el ambiente (el TC lo necesita ahí). Acción: publicar en un carrusel del Home un producto con la promo «Completa la promo» o declarar otro SKU que ya esté en el Home.",
   "preconditions": "User type: Guest\nEl usuario tiene ha ingresado y seleccionado una dirección de entrega\nProducto con promo activa \"Completa la promo\" 2x1 visible en carrusel/shelf del Home\nCarrito vacío\nViewport Desktop 1280x900",
   "status": "Bloqueado Data",
   "steps": "1. Navegar al Home de la tienda.\n2. Localizar el carrusel/shelf que muestra el producto con promo \"Completa la promo\".\n3. Hacer clic en el botón \"+\" del producto en el shelf del carrusel.\n4. Observar el toast que aparece y la actualización del contador.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {DIRECCION_DESPACHO_003} = TBD\n- {SKU_PROM_2x1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "Se muestra el toast \"Agrega 1 más y ahorra más\" (regreso al estado en-progreso). La barra de progreso retrocede a 1 de 2. El contador del producto en el shelf se actualiza a 1 unidad.",
   "form_factor": "desktop",
   "id": "TC-63-D-007",
   "name": "Toast al quitar unidades regresa a estado en-progreso (Guest)",
   "observation": "Verificado 2026-10-30 (Desktop 1280x900, invitado, SKU 000000000664214001-UN, promo 2x1): Con 2 unidades, al quitar una desde la PLP el shelf vuelve a «Agrega 1 y ahorra más» y el contador queda en 1.",
   "observed": "Verificado 2026-10-30 (Desktop 1280x900, invitado, SKU 000000000664214001-UN, promo 2x1): Con 2 unidades, al quitar una desde la PLP el shelf vuelve a «Agrega 1 y ahorra más» y el contador queda en 1.",
   "preconditions": "User type: Guest\nEl usuario tiene ha ingresado y seleccionado una dirección de entrega\nProducto con promo \"Completa la promo\" 2x1\n2 unidades ya en el carrito (promo completada, toast '¡Completaste la promo!' previamente mostrado)\nViewport Desktop 1280x900",
   "screenshots": [
    {
     "caption": "Paso 1 — carro con 2 unidades promo completa",
     "file": "TC-63-D-007-p01-carro-con-2-unidades-promo-completa.png"
    },
    {
     "caption": "Paso 2 — tras quitar una unidad",
     "file": "TC-63-D-007-p02-tras-quitar-una-unidad.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Navegar a la PLP (el carrito tiene 2 unidades, promo 2x1 completada).\n2. Localizar el producto en el shelf.\n3. Hacer clic en \"-\" para quitar 1 unidad.\n4. Observar el toast que aparece y el estado de la barra de progreso.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {DIRECCION_DESPACHO_003} = TBD\n- {SKU_PROM_2x1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {UNIDADES_CARRITO_INICIAL_2} = 2 (unidades del producto ya en el carrito al iniciar el test)",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "Se muestra el toast \"Agrega 1 más y ahorra más\" (inicio del 2° ciclo). La barra de progreso muestra 1 de 2 (reiniciada para el nuevo tramo). El contador del producto refleja 3 unidades totales en el carrito.",
   "form_factor": "desktop",
   "id": "TC-63-D-008",
   "name": "Recurrencia 2x1 — 3ª unidad reinicia ciclo promocional (Guest)",
   "observation": "Verificado 2026-10-30 (Desktop 1280x900, invitado, SKU 000000000664214001-UN, promo 2x1): Con 2 unidades, al agregar la 3ª el shelf muestra «Agrega 1 y ahorra más» (nuevo ciclo) y el contador queda en 3.",
   "observed": "Verificado 2026-10-30 (Desktop 1280x900, invitado, SKU 000000000664214001-UN, promo 2x1): Con 2 unidades, al agregar la 3ª el shelf muestra «Agrega 1 y ahorra más» (nuevo ciclo) y el contador queda en 3.",
   "preconditions": "User type: Guest\nEl usuario tiene ha ingresado y seleccionado una dirección de entrega\nProducto con promo \"Completa la promo\" tipo 2x1 en PLP\n2 unidades ya en el carrito (1er tramo completado)\nViewport Desktop 1280x900",
   "screenshots": [
    {
     "caption": "Paso 1 — carro con 2 unidades 1er tramo completo",
     "file": "TC-63-D-008-p01-carro-con-2-unidades-1er-tramo-completo.png"
    },
    {
     "caption": "Paso 2 — tras la 3 unidad",
     "file": "TC-63-D-008-p02-tras-la-3-unidad.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Navegar a la PLP (carrito tiene 2 unidades, toast '¡Completaste la promo!' previamente mostrado).\n2. Hacer clic en \"+\" para agregar la 3ª unidad.\n3. Observar el toast que aparece y la barra de progreso.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {DIRECCION_DESPACHO_003} = TBD\n- {SKU_PROM_2x1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {UNIDADES_CARRITO_INICIAL_2} = 2 (unidades del producto ya en el carrito al iniciar el test)",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "El producto es eliminado del carrito. La barra de progreso desaparece o se resetea a 0. Los mensajes del toast de la promo no se muestran. El botón del shelf vuelve al estado inicial (\"Agregar\").",
   "form_factor": "desktop",
   "id": "TC-63-D-010",
   "name": "Eliminar producto desde shelf resetea progreso y oculta toast (Guest)",
   "observation": "Verificado 2026-10-30 (Desktop 1280x900, invitado, SKU 000000000664214001-UN, promo 2x1): Al eliminar el producto desde el shelf, el contador desaparece, vuelve «Agregar» y no queda ningún mensaje de la promo.",
   "observed": "Verificado 2026-10-30 (Desktop 1280x900, invitado, SKU 000000000664214001-UN, promo 2x1): Al eliminar el producto desde el shelf, el contador desaparece, vuelve «Agregar» y no queda ningún mensaje de la promo.",
   "preconditions": "User type: Guest\nEl usuario tiene ha ingresado y seleccionado una dirección de entrega\nProducto con promo \"Completa la promo\" 2x1 en PLP\n1 unidad del producto en el carrito\nViewport Desktop 1280x900",
   "screenshots": [
    {
     "caption": "Paso 1 — carro con 1 unidad",
     "file": "TC-63-D-010-p01-carro-con-1-unidad.png"
    },
    {
     "caption": "Paso 2 — tras eliminar el producto",
     "file": "TC-63-D-010-p02-tras-eliminar-el-producto.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Navegar a la PLP (el carrito tiene 1 unidad del producto en promo).\n2. Hacer clic en \"-\" hasta llegar a 0 unidades (o usar el botón de eliminar si aplica).\n3. Observar la UI del shelf y el estado de la barra de progreso.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {DIRECCION_DESPACHO_003} = TBD\n- {SKU_PROM_2x1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {UNIDADES_CARRITO_INICIAL_1} = 1 (unidad del producto ya en el carrito al iniciar el test)",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "Se muestra el toast \"Agrega 1 más y ahorra más\". La barra de progreso refleja 1 de 2 unidades. El comportamiento es idéntico al del usuario Guest.",
   "form_factor": "desktop",
   "id": "TC-63-D-011",
   "name": "Toast 'Agrega N y ahorra más' al agregar desde PLP (Logueado)",
   "observation": "Verificado 2026-10-30 (Desktop 1280x900, con sesión, SKU 000000000664214001-UN, promo 2x1): Con el carro vacío, al agregar la 1ª unidad desde la PLP el shelf muestra «Agrega 1 y ahorra más» y el contador queda en 1.",
   "observed": "Verificado 2026-10-30 (Desktop 1280x900, con sesión, SKU 000000000664214001-UN, promo 2x1): Con el carro vacío, al agregar la 1ª unidad desde la PLP el shelf muestra «Agrega 1 y ahorra más» y el contador queda en 1.",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nProducto con promo activa \"Completa la promo\" 2x1 en PLP\nCarrito vacío\nViewport Desktop 1280x900",
   "screenshots": [
    {
     "caption": "Paso 1 — shelf antes de agregar",
     "file": "TC-63-D-011-p01-shelf-antes-de-agregar.png"
    },
    {
     "caption": "Paso 2 — tras la 1 unidad",
     "file": "TC-63-D-011-p02-tras-la-1-unidad.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Iniciar sesión con cuenta de cliente registrado.\n2. Navegar a la PLP con el producto en promo \"Completa la promo\" 2x1.\n3. Hacer clic en \"+\" para agregar 1 unidad desde el shelf.\n4. Observar el toast y la barra de progreso.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {SKU_PROM_2x1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {COMPRADOR_USER} = email de cuenta de cliente registrado\n- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "Se muestra el toast \"¡Completaste la promo!\". La barra de progreso se muestra completa (2/2). El contador refleja 2 unidades en el shelf.",
   "form_factor": "desktop",
   "id": "TC-63-D-012",
   "name": "Toast '¡Completaste la promo!' al alcanzar umbral desde PLP (Logueado)",
   "observation": "Verificado 2026-10-30 (Desktop 1280x900, con sesión, SKU 000000000664214001-UN, promo 2x1): Con 1 unidad en el carro, al agregar la 2ª desde la PLP el shelf muestra «¡Completaste la promo!» y el contador queda en 2.",
   "observed": "Verificado 2026-10-30 (Desktop 1280x900, con sesión, SKU 000000000664214001-UN, promo 2x1): Con 1 unidad en el carro, al agregar la 2ª desde la PLP el shelf muestra «¡Completaste la promo!» y el contador queda en 2.",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nProducto con promo \"Completa la promo\" 2x1 en PLP\n1 unidad del producto ya en el carrito\nViewport Desktop 1280x900",
   "screenshots": [
    {
     "caption": "Paso 1 — carro con 1 unidad",
     "file": "TC-63-D-012-p01-carro-con-1-unidad.png"
    },
    {
     "caption": "Paso 2 — tras la 2 unidad",
     "file": "TC-63-D-012-p02-tras-la-2-unidad.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Iniciar sesión con cuenta de cliente registrado.\n2. Navegar a la PLP (el carrito tiene 1 unidad, promo 2x1).\n3. Hacer clic en \"+\" para agregar la 2ª unidad.\n4. Observar el toast que aparece.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {SKU_PROM_2x1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {UNIDADES_CARRITO_INICIAL_1} = 1 (unidad del producto ya en el carrito al iniciar el test)\n- {COMPRADOR_USER} = email de cuenta de cliente registrado\n- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "Se muestra el toast \"Agrega 1 más y ahorra más\" desde la PDP. La barra de progreso refleja 1 de 2 unidades. El comportamiento es idéntico al del usuario Guest en PDP.",
   "form_factor": "desktop",
   "id": "TC-63-D-013",
   "name": "Toast progresivo al agregar desde PDP (Logueado)",
   "observation": "Verificado 2026-10-30 (Desktop 1280x900, con sesión). Esperado: mensaje «Agrega 1 más y ahorra más» al agregar desde la PDP. Obtenido: la PDP muestra «En carro 1 un.» pero no muestra ningún mensaje ni barra de progreso de la promo (el shelf de la PLP sí lo muestra). Bug: B2C-1416.",
   "observed": "Verificado 2026-10-30 (Desktop 1280x900, con sesión). Esperado: mensaje «Agrega 1 más y ahorra más» al agregar desde la PDP. Obtenido: la PDP muestra «En carro 1 un.» pero no muestra ningún mensaje ni barra de progreso de la promo (el shelf de la PLP sí lo muestra). Bug: B2C-1416.",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nPDP de producto con promo activa \"Completa la promo\" 2x1 abierta\nCarrito vacío\nViewport Desktop 1280x900",
   "screenshots": [
    {
     "caption": "Paso 1 — pdp antes de agregar",
     "file": "TC-63-D-013-p01-pdp-antes-de-agregar.png"
    },
    {
     "caption": "Paso 2 — pdp tras agregar la 1 unidad",
     "file": "TC-63-D-013-p02-pdp-tras-agregar-la-1-unidad.png"
    }
   ],
   "status": "Rechazado",
   "steps": "1. Iniciar sesión con cuenta de cliente registrado.\n2. Navegar a la PDP del producto con promo \"Completa la promo\" 2x1.\n3. Hacer clic en \"+ Agregar al carrito\" o en el stepper.\n4. Observar el toast y la barra de progreso.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {SKU_PROM_2x1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {COMPRADOR_USER} = email de cuenta de cliente registrado\n- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "Se muestra el toast \"Agrega 1 más y ahorra más\" desde el modal. La barra de progreso y el contador se actualizan correctamente.",
   "form_factor": "desktop",
   "id": "TC-63-D-014",
   "name": "Toast progresivo al agregar desde Modal de producto (Logueado)",
   "observation": "Verificado 2026-10-30 (Desktop 1280x900, con sesión). Esperado: «Agrega 1 más y ahorra más» al agregar desde el modal. Obtenido: el modal «Combina la promo» muestra barra completa («1 / 1 productos») y «¡Completaste la promo!» con 1 sola unidad en carro (el shelf muestra «Agrega 1 y ahorra más»). Bug: B2C-1417.",
   "observed": "Verificado 2026-10-30 (Desktop 1280x900, con sesión). Esperado: «Agrega 1 más y ahorra más» al agregar desde el modal. Obtenido: el modal «Combina la promo» muestra barra completa («1 / 1 productos») y «¡Completaste la promo!» con 1 sola unidad en carro (el shelf muestra «Agrega 1 y ahorra más»). Bug: B2C-1417.",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nModal de producto con promo activa \"Completa la promo\" 2x1 accesible desde PLP o carrusel\nCarrito vacío\nViewport Desktop 1280x900",
   "screenshots": [
    {
     "caption": "Paso 1 — modal combina la promo abierto",
     "file": "TC-63-D-014-p01-modal-combina-la-promo-abierto.png"
    },
    {
     "caption": "Paso 2 — modal tras agregar la 1 unidad",
     "file": "TC-63-D-014-p02-modal-tras-agregar-la-1-unidad.png"
    }
   ],
   "status": "Rechazado",
   "steps": "1. Iniciar sesión con cuenta de cliente registrado.\n2. Navegar a la PLP o Home donde aparece el producto con promo en el shelf.\n3. Abrir el modal del producto.\n4. Dentro del modal, hacer clic en \"+\" para agregar 1 unidad.\n5. Observar el toast que aparece.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {SKU_PROM_2x1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {COMPRADOR_USER} = email de cuenta de cliente registrado\n- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "Se muestra el toast \"Agrega 1 más y ahorra más\". La barra de progreso y el contador se actualizan correctamente desde el carrusel.",
   "form_factor": "desktop",
   "id": "TC-63-D-015",
   "name": "Toast progresivo al agregar desde Carrusel/Shelf en Home (Logueado)",
   "observation": "Verificado 2026-10-30: Causa: {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home en el ambiente (el TC lo necesita ahí). Acción: publicar en un carrusel del Home un producto con la promo «Completa la promo» o declarar otro SKU que ya esté en el Home.",
   "observed": "Verificado 2026-10-30: Causa: {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home en el ambiente (el TC lo necesita ahí). Acción: publicar en un carrusel del Home un producto con la promo «Completa la promo» o declarar otro SKU que ya esté en el Home.",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nProducto con promo activa \"Completa la promo\" 2x1 visible en carrusel/shelf del Home\nCarrito vacío\nViewport Desktop 1280x900",
   "status": "Bloqueado Data",
   "steps": "1. Iniciar sesión con cuenta de cliente registrado.\n2. Navegar al Home de la tienda.\n3. Localizar el carrusel con el producto en promo \"Completa la promo\".\n4. Hacer clic en \"+\" del producto en el shelf del carrusel.\n5. Observar el toast y el contador.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {SKU_PROM_2x1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {COMPRADOR_USER} = email de cuenta de cliente registrado\n- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "Se muestra el toast \"Agrega 1 más y ahorra más\" (regreso al estado en-progreso). La barra de progreso retrocede a 1 de 2. El contador del shelf actualiza a 1 unidad.",
   "form_factor": "desktop",
   "id": "TC-63-D-016",
   "name": "Toast al quitar unidades regresa a estado en-progreso (Logueado)",
   "observation": "Verificado 2026-10-30 (Desktop 1280x900, con sesión, SKU 000000000664214001-UN, promo 2x1): Con 2 unidades, al quitar una desde la PLP el shelf vuelve a «Agrega 1 y ahorra más» y el contador queda en 1.",
   "observed": "Verificado 2026-10-30 (Desktop 1280x900, con sesión, SKU 000000000664214001-UN, promo 2x1): Con 2 unidades, al quitar una desde la PLP el shelf vuelve a «Agrega 1 y ahorra más» y el contador queda en 1.",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nProducto con promo \"Completa la promo\" 2x1 en PLP\n2 unidades en el carrito (promo completada)\nViewport Desktop 1280x900",
   "screenshots": [
    {
     "caption": "Paso 1 — carro con 2 unidades promo completa",
     "file": "TC-63-D-016-p01-carro-con-2-unidades-promo-completa.png"
    },
    {
     "caption": "Paso 2 — tras quitar una unidad",
     "file": "TC-63-D-016-p02-tras-quitar-una-unidad.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Iniciar sesión con cuenta de cliente registrado.\n2. Navegar a la PLP (el carrito tiene 2 unidades, promo 2x1 completada).\n3. Hacer clic en \"-\" en el shelf para quitar 1 unidad.\n4. Observar el toast y la barra de progreso.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {SKU_PROM_2x1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {UNIDADES_CARRITO_INICIAL_2} = 2 (unidades del producto ya en el carrito al iniciar el test)\n- {COMPRADOR_USER} = email de cuenta de cliente registrado\n- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "Se muestra el toast \"Agrega 1 más y ahorra más\" (inicio del 2° ciclo). La barra de progreso muestra 1 de 2 (reiniciada). El carrito refleja 3 unidades totales.",
   "form_factor": "desktop",
   "id": "TC-63-D-017",
   "name": "Recurrencia 2x1 — 3ª unidad reinicia ciclo promocional (Logueado)",
   "observation": "Verificado 2026-10-30 (Desktop 1280x900, con sesión, SKU 000000000664214001-UN, promo 2x1): Con 2 unidades, al agregar la 3ª el shelf muestra «Agrega 1 y ahorra más» (nuevo ciclo) y el contador queda en 3.",
   "observed": "Verificado 2026-10-30 (Desktop 1280x900, con sesión, SKU 000000000664214001-UN, promo 2x1): Con 2 unidades, al agregar la 3ª el shelf muestra «Agrega 1 y ahorra más» (nuevo ciclo) y el contador queda en 3.",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nProducto con promo \"Completa la promo\" 2x1 en PLP\n2 unidades ya en el carrito (1er tramo completado)\nViewport Desktop 1280x900",
   "screenshots": [
    {
     "caption": "Paso 1 — carro con 2 unidades 1er tramo completo",
     "file": "TC-63-D-017-p01-carro-con-2-unidades-1er-tramo-completo.png"
    },
    {
     "caption": "Paso 2 — tras la 3 unidad",
     "file": "TC-63-D-017-p02-tras-la-3-unidad.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Iniciar sesión con cuenta de cliente registrado.\n2. Navegar a la PLP (el carrito tiene 2 unidades, promo 2x1 completada).\n3. Hacer clic en \"+\" para agregar la 3ª unidad.\n4. Observar el toast y la barra de progreso.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {SKU_PROM_2x1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {UNIDADES_CARRITO_INICIAL_2} = 2 (unidades del producto ya en el carrito al iniciar el test)\n- {COMPRADOR_USER} = email de cuenta de cliente registrado\n- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "La barra de progreso retrocede a 1/3. El toast actualiza el mensaje (\"Agrega 2 más y ahorra más\"). El contador del shelf refleja 1 unidad. No se produce recarga de la página.",
   "form_factor": "desktop",
   "id": "TC-63-D-018",
   "name": "Disminuir unidades recalcula progreso promocional (Logueado)",
   "observation": "Verificado 2026-10-30 (Desktop 1280x900, con sesión, SKU 000000000641229002-UN, promo 3x2): con 2 unidades, al disminuir a 1 el shelf muestra «Agrega 2 y ahorra más» y el contador queda en 1.",
   "observed": "Verificado 2026-10-30 (Desktop 1280x900, con sesión, SKU 000000000641229002-UN, promo 3x2): con 2 unidades, al disminuir a 1 el shelf muestra «Agrega 2 y ahorra más» y el contador queda en 1.",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nProducto con promo \"Completa la promo\" tipo 3x2 en PLP\n2 unidades en el carrito (progreso 2/3)\nViewport Desktop 1280x900",
   "screenshots": [
    {
     "caption": "Paso 1 — carro con 2 unidades 2 3",
     "file": "TC-63-D-018-p01-carro-con-2-unidades-2-3.png"
    },
    {
     "caption": "Paso 2 — tras disminuir a 1",
     "file": "TC-63-D-018-p02-tras-disminuir-a-1.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Iniciar sesión con cuenta de cliente registrado.\n2. Navegar a la PLP (el carrito tiene 2 unidades, promo 3x2, progreso 2/3).\n3. Hacer clic en \"-\" en el shelf para disminuir a 1 unidad.\n4. Observar la barra de progreso y el toast.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {SKU_PROM_NxM} = SKU del producto con promo \"Completa la promo\" tipo 3x2 activa en el ambiente de prueba\n- {UNIDADES_CARRITO_INICIAL_2} = 2 (unidades del producto ya en el carrito al iniciar el test)\n- {COMPRADOR_USER} = email de cuenta de cliente registrado\n- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "El producto es eliminado del carrito. La barra de progreso desaparece o se resetea. Los mensajes del toast de la promo no se muestran. El botón del shelf vuelve al estado inicial (\"Agregar\").",
   "form_factor": "desktop",
   "id": "TC-63-D-019",
   "name": "Eliminar producto resetea progreso y oculta toast (Logueado)",
   "observation": "Verificado 2026-10-30 (Desktop 1280x900, con sesión, SKU 000000000664214001-UN, promo 2x1): Al eliminar el producto desde el shelf, el contador desaparece, vuelve «Agregar» y no queda ningún mensaje de la promo.",
   "observed": "Verificado 2026-10-30 (Desktop 1280x900, con sesión, SKU 000000000664214001-UN, promo 2x1): Al eliminar el producto desde el shelf, el contador desaparece, vuelve «Agregar» y no queda ningún mensaje de la promo.",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nProducto con promo \"Completa la promo\" 2x1 en PLP\n1 unidad del producto en el carrito\nViewport Desktop 1280x900",
   "screenshots": [
    {
     "caption": "Paso 1 — carro con 1 unidad",
     "file": "TC-63-D-019-p01-carro-con-1-unidad.png"
    },
    {
     "caption": "Paso 2 — tras eliminar el producto",
     "file": "TC-63-D-019-p02-tras-eliminar-el-producto.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Iniciar sesión con cuenta de cliente registrado.\n2. Navegar a la PLP (el carrito tiene 1 unidad del producto en promo).\n3. Hacer clic en \"-\" hasta 0 unidades o usar el botón de eliminar si aplica.\n4. Observar la UI del shelf y la barra de progreso.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {SKU_PROM_2x1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {UNIDADES_CARRITO_INICIAL_1} = 1 (unidad del producto ya en el carrito al iniciar el test)\n- {COMPRADOR_USER} = email de cuenta de cliente registrado\n- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada",
   "viewport": "1280x900"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-30",
   "expected": "Se muestra un toast con el mensaje \"Agrega 1 más y ahorra más\" en Mobile. La barra de progreso refleja 1 de N unidades. El contador del producto en el shelf se actualiza a 1.",
   "form_factor": "mobile",
   "id": "TC-63-M-001",
   "name": "Toast 'Agrega N y ahorra más' al agregar 1ª unidad desde PLP (Guest)",
   "observation": "Verificado 2026-10-30 (Mobile 390x844, invitado, SKU 000000000664214001-UN, promo 2x1): Con el carro vacío, al agregar la 1ª unidad desde la PLP el shelf muestra «Agrega 1 y ahorra más» y el contador queda en 1.",
   "observed": "Verificado 2026-10-30 (Mobile 390x844, invitado, SKU 000000000664214001-UN, promo 2x1): Con el carro vacío, al agregar la 1ª unidad desde la PLP el shelf muestra «Agrega 1 y ahorra más» y el contador queda en 1.",
   "preconditions": "User type: Guest\nProducto con promo activa \"Completa la promo\" 2x1 disponible en PLP\nCarrito vacío\nViewport Mobile 390x844",
   "screenshots": [
    {
     "caption": "Paso 1 — shelf antes de agregar",
     "file": "TC-63-M-001-p01-shelf-antes-de-agregar.png"
    },
    {
     "caption": "Paso 2 — tras la 1 unidad",
     "file": "TC-63-M-001-p02-tras-la-1-unidad.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Navegar a la PLP en Mobile con un producto en promo \"Completa la promo\" 2x1.\n2. Localizar el producto con la promo activa en el shelf.\n3. Hacer tap en el botón \"+\" o \"Agregar\" del producto.\n4. Observar el toast que aparece.\n5. Verificar el texto del toast y la barra de progreso.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {DIRECCION_DESPACHO_003} = TBD\n- {SKU_PROM_2x1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-30",
   "expected": "Se muestra el toast \"¡Completaste la promo!\" en Mobile. La barra de progreso se muestra completa (2/2). El contador actualiza a 2 unidades.",
   "form_factor": "mobile",
   "id": "TC-63-M-002",
   "name": "Toast '¡Completaste la promo!' al alcanzar umbral desde PLP (Guest)",
   "observation": "Verificado 2026-10-30 (Mobile 390x844, invitado, SKU 000000000664214001-UN, promo 2x1): Con 1 unidad en el carro, al agregar la 2ª desde la PLP el shelf muestra «¡Completaste la promo!» y el contador queda en 2.",
   "observed": "Verificado 2026-10-30 (Mobile 390x844, invitado, SKU 000000000664214001-UN, promo 2x1): Con 1 unidad en el carro, al agregar la 2ª desde la PLP el shelf muestra «¡Completaste la promo!» y el contador queda en 2.",
   "preconditions": "User type: Guest\nProducto con promo activa \"Completa la promo\" 2x1 en PLP\n1 unidad del producto ya en el carrito\nViewport Mobile 390x844",
   "screenshots": [
    {
     "caption": "Paso 1 — carro con 1 unidad",
     "file": "TC-63-M-002-p01-carro-con-1-unidad.png"
    },
    {
     "caption": "Paso 2 — tras la 2 unidad",
     "file": "TC-63-M-002-p02-tras-la-2-unidad.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Navegar a la PLP en Mobile (el carrito tiene 1 unidad, promo 2x1).\n2. Hacer tap en \"+\" para agregar la 2ª unidad.\n3. Observar el toast que aparece.\n4. Verificar el texto del toast y el estado de la barra de progreso.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {DIRECCION_DESPACHO_003} = TBD\n- {SKU_PROM_2x1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {UNIDADES_CARRITO_INICIAL_1} = 1 (unidad del producto ya en el carrito al iniciar el test)",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-30",
   "expected": "Se muestra el toast \"Agrega 1 más y ahorra más\" desde la PDP en Mobile. La barra de progreso refleja 1 de 2 unidades. El comportamiento es idéntico al de la PLP en Mobile.",
   "form_factor": "mobile",
   "id": "TC-63-M-004",
   "name": "Toast progresivo al agregar desde PDP (Guest)",
   "observation": "Verificado 2026-10-30 (Mobile 390x844, invitado). Esperado: mensaje «Agrega 1 más y ahorra más» al agregar desde la PDP. Obtenido: la PDP muestra «En carro 1 un.» pero no muestra ningún mensaje ni barra de progreso de la promo (el shelf de la PLP sí lo muestra). Bug: B2C-1418.",
   "observed": "Verificado 2026-10-30 (Mobile 390x844, invitado). Esperado: mensaje «Agrega 1 más y ahorra más» al agregar desde la PDP. Obtenido: la PDP muestra «En carro 1 un.» pero no muestra ningún mensaje ni barra de progreso de la promo (el shelf de la PLP sí lo muestra). Bug: B2C-1418.",
   "preconditions": "User type: Guest\nPDP de producto con promo activa \"Completa la promo\" 2x1 abierta\nCarrito vacío\nViewport Mobile 390x844",
   "screenshots": [
    {
     "caption": "Paso 1 — pdp antes de agregar",
     "file": "TC-63-M-004-p01-pdp-antes-de-agregar.png"
    },
    {
     "caption": "Paso 2 — pdp tras agregar la 1 unidad",
     "file": "TC-63-M-004-p02-pdp-tras-agregar-la-1-unidad.png"
    }
   ],
   "status": "Rechazado",
   "steps": "1. Navegar a la PDP del producto con promo \"Completa la promo\" 2x1 en Mobile.\n2. Hacer tap en el botón \"+ Agregar al carrito\" o en el stepper.\n3. Observar el toast y la barra de progreso.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {DIRECCION_DESPACHO_003} = TBD\n- {SKU_PROM_2x1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-30",
   "expected": "Se muestra el toast \"Agrega 1 más y ahorra más\" al agregar desde el modal en Mobile. La barra de progreso y el contador se actualizan correctamente.",
   "form_factor": "mobile",
   "id": "TC-63-M-005",
   "name": "Toast progresivo al agregar desde Modal de producto (Guest)",
   "observation": "Verificado 2026-10-30 (Mobile 390x844, invitado). Esperado: «Agrega 1 más y ahorra más» al agregar desde el modal. Obtenido: el modal «Combina la promo» muestra barra completa («1 / 1 productos») y «¡Completaste la promo!» con 1 sola unidad en carro (el shelf muestra «Agrega 1 y ahorra más»). Bug: B2C-1419.",
   "observed": "Verificado 2026-10-30 (Mobile 390x844, invitado). Esperado: «Agrega 1 más y ahorra más» al agregar desde el modal. Obtenido: el modal «Combina la promo» muestra barra completa («1 / 1 productos») y «¡Completaste la promo!» con 1 sola unidad en carro (el shelf muestra «Agrega 1 y ahorra más»). Bug: B2C-1419.",
   "preconditions": "User type: Guest\nModal de producto con promo activa \"Completa la promo\" 2x1 accesible desde PLP o carrusel\nCarrito vacío\nViewport Mobile 390x844",
   "screenshots": [
    {
     "caption": "Paso 1 — modal combina la promo abierto",
     "file": "TC-63-M-005-p01-modal-combina-la-promo-abierto.png"
    },
    {
     "caption": "Paso 2 — modal tras agregar la 1 unidad",
     "file": "TC-63-M-005-p02-modal-tras-agregar-la-1-unidad.png"
    }
   ],
   "status": "Rechazado",
   "steps": "1. Navegar a la PLP o Home en Mobile donde aparece el producto con promo.\n2. Abrir el modal del producto (tap en el nombre o \"ver detalle\").\n3. Dentro del modal, hacer tap en \"+\" para agregar 1 unidad.\n4. Observar el toast y la barra de progreso.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {DIRECCION_DESPACHO_003} = TBD\n- {SKU_PROM_2x1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-30",
   "expected": "Se muestra el toast \"Agrega 1 más y ahorra más\" en Mobile. La barra de progreso refleja 1 de N unidades. El comportamiento es consistente con PLP y PDP en Mobile.",
   "form_factor": "mobile",
   "id": "TC-63-M-006",
   "name": "Toast progresivo al agregar desde Carrusel/Shelf en Home (Guest)",
   "observation": "Verificado 2026-10-30: Causa: {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home en el ambiente (el TC lo necesita ahí). Acción: publicar en un carrusel del Home un producto con la promo «Completa la promo» o declarar otro SKU que ya esté en el Home.",
   "observed": "Verificado 2026-10-30: Causa: {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home en el ambiente (el TC lo necesita ahí). Acción: publicar en un carrusel del Home un producto con la promo «Completa la promo» o declarar otro SKU que ya esté en el Home.",
   "preconditions": "User type: Guest\nProducto con promo activa \"Completa la promo\" 2x1 visible en carrusel/shelf del Home\nCarrito vacío\nViewport Mobile 390x844",
   "status": "Bloqueado Data",
   "steps": "1. Navegar al Home en Mobile.\n2. Localizar el carrusel/shelf que muestra el producto con promo.\n3. Hacer tap en el botón \"+\" del producto en el shelf.\n4. Observar el toast y el contador.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {DIRECCION_DESPACHO_003} = TBD\n- {SKU_PROM_2x1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-30",
   "expected": "Se muestra el toast \"Agrega 1 más y ahorra más\" en Mobile (regreso al estado en-progreso). La barra de progreso retrocede a 1 de 2. El contador actualiza a 1 unidad.",
   "form_factor": "mobile",
   "id": "TC-63-M-007",
   "name": "Toast al quitar unidades regresa a estado en-progreso (Guest)",
   "observation": "Verificado 2026-10-30 (Mobile 390x844, invitado, SKU 000000000664214001-UN, promo 2x1): Con 2 unidades, al quitar una desde la PLP el shelf vuelve a «Agrega 1 y ahorra más» y el contador queda en 1.",
   "observed": "Verificado 2026-10-30 (Mobile 390x844, invitado, SKU 000000000664214001-UN, promo 2x1): Con 2 unidades, al quitar una desde la PLP el shelf vuelve a «Agrega 1 y ahorra más» y el contador queda en 1.",
   "preconditions": "User type: Guest\nProducto con promo \"Completa la promo\" 2x1 en PLP\n2 unidades en el carrito (promo completada)\nViewport Mobile 390x844",
   "screenshots": [
    {
     "caption": "Paso 1 — carro con 2 unidades promo completa",
     "file": "TC-63-M-007-p01-carro-con-2-unidades-promo-completa.png"
    },
    {
     "caption": "Paso 2 — tras quitar una unidad",
     "file": "TC-63-M-007-p02-tras-quitar-una-unidad.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Navegar a la PLP en Mobile (el carrito tiene 2 unidades, promo 2x1 completada).\n2. Hacer tap en \"-\" en el shelf para quitar 1 unidad.\n3. Observar el toast y la barra de progreso.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {DIRECCION_DESPACHO_003} = TBD\n- {SKU_PROM_2x1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {UNIDADES_CARRITO_INICIAL_2} = 2 (unidades del producto ya en el carrito al iniciar el test)",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-30",
   "expected": "Se muestra el toast \"Agrega 1 más y ahorra más\" (inicio del 2° ciclo) en Mobile. La barra de progreso muestra 1 de 2 (reiniciada). El contador refleja 3 unidades totales en el carrito.",
   "form_factor": "mobile",
   "id": "TC-63-M-008",
   "name": "Recurrencia 2x1 — 3ª unidad reinicia ciclo promocional (Guest)",
   "observation": "Verificado 2026-10-30 (Mobile 390x844, invitado, SKU 000000000664214001-UN, promo 2x1): Con 2 unidades, al agregar la 3ª el shelf muestra «Agrega 1 y ahorra más» (nuevo ciclo) y el contador queda en 3.",
   "observed": "Verificado 2026-10-30 (Mobile 390x844, invitado, SKU 000000000664214001-UN, promo 2x1): Con 2 unidades, al agregar la 3ª el shelf muestra «Agrega 1 y ahorra más» (nuevo ciclo) y el contador queda en 3.",
   "preconditions": "User type: Guest\nProducto con promo \"Completa la promo\" 2x1 en PLP\n2 unidades en el carrito (1er tramo completado)\nViewport Mobile 390x844",
   "screenshots": [
    {
     "caption": "Paso 1 — carro con 2 unidades 1er tramo completo",
     "file": "TC-63-M-008-p01-carro-con-2-unidades-1er-tramo-completo.png"
    },
    {
     "caption": "Paso 2 — tras la 3 unidad",
     "file": "TC-63-M-008-p02-tras-la-3-unidad.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Navegar a la PLP en Mobile (carrito tiene 2 unidades, promo completada).\n2. Hacer tap en \"+\" para agregar la 3ª unidad.\n3. Observar el toast y la barra de progreso.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {DIRECCION_DESPACHO_003} = TBD\n- {SKU_PROM_2x1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {UNIDADES_CARRITO_INICIAL_2} = 2 (unidades del producto ya en el carrito al iniciar el test)",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-30",
   "expected": "El producto es eliminado del carrito. La barra de progreso desaparece o se resetea en Mobile. Los mensajes del toast no se muestran. El botón del shelf vuelve al estado inicial (\"Agregar\").",
   "form_factor": "mobile",
   "id": "TC-63-M-010",
   "name": "Eliminar producto desde shelf resetea progreso y oculta toast (Guest)",
   "observation": "Verificado 2026-10-30 (Mobile 390x844, invitado, SKU 000000000664214001-UN, promo 2x1): Al eliminar el producto desde el shelf, el contador desaparece, vuelve «Agregar» y no queda ningún mensaje de la promo.",
   "observed": "Verificado 2026-10-30 (Mobile 390x844, invitado, SKU 000000000664214001-UN, promo 2x1): Al eliminar el producto desde el shelf, el contador desaparece, vuelve «Agregar» y no queda ningún mensaje de la promo.",
   "preconditions": "User type: Guest\nProducto con promo \"Completa la promo\" 2x1 en PLP\n1 unidad del producto en el carrito\nViewport Mobile 390x844",
   "screenshots": [
    {
     "caption": "Paso 1 — carro con 1 unidad",
     "file": "TC-63-M-010-p01-carro-con-1-unidad.png"
    },
    {
     "caption": "Paso 2 — tras eliminar el producto",
     "file": "TC-63-M-010-p02-tras-eliminar-el-producto.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Navegar a la PLP en Mobile (el carrito tiene 1 unidad del producto en promo).\n2. Hacer tap en \"-\" hasta 0 unidades o usar el botón de eliminar.\n3. Observar la UI del shelf y la barra de progreso.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {DIRECCION_DESPACHO_003} = TBD\n- {SKU_PROM_2x1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {UNIDADES_CARRITO_INICIAL_1} = 1 (unidad del producto ya en el carrito al iniciar el test)",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-30",
   "expected": "Se muestra el toast \"Agrega 1 más y ahorra más\" en Mobile. La barra de progreso refleja 1 de 2. El comportamiento es idéntico al del usuario Guest en Mobile.",
   "form_factor": "mobile",
   "id": "TC-63-M-011",
   "name": "Toast 'Agrega N y ahorra más' al agregar desde PLP (Logueado)",
   "observation": "Verificado 2026-10-30 (Mobile 390x844, con sesión, SKU 000000000664214001-UN, promo 2x1): Con el carro vacío, al agregar la 1ª unidad desde la PLP el shelf muestra «Agrega 1 y ahorra más» y el contador queda en 1.",
   "observed": "Verificado 2026-10-30 (Mobile 390x844, con sesión, SKU 000000000664214001-UN, promo 2x1): Con el carro vacío, al agregar la 1ª unidad desde la PLP el shelf muestra «Agrega 1 y ahorra más» y el contador queda en 1.",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nProducto con promo activa \"Completa la promo\" 2x1 en PLP\nCarrito vacío\nViewport Mobile 390x844",
   "screenshots": [
    {
     "caption": "Paso 1 — shelf antes de agregar",
     "file": "TC-63-M-011-p01-shelf-antes-de-agregar.png"
    },
    {
     "caption": "Paso 2 — tras la 1 unidad",
     "file": "TC-63-M-011-p02-tras-la-1-unidad.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Iniciar sesión con cuenta de cliente registrado en Mobile.\n2. Navegar a la PLP con el producto en promo \"Completa la promo\" 2x1.\n3. Hacer tap en \"+\" para agregar 1 unidad desde el shelf.\n4. Observar el toast y la barra de progreso.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {SKU_PROM_2x1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {COMPRADOR_USER} = email de cuenta de cliente registrado\n- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-30",
   "expected": "Se muestra el toast \"¡Completaste la promo!\" en Mobile. La barra de progreso se muestra completa (2/2). El contador refleja 2 unidades.",
   "form_factor": "mobile",
   "id": "TC-63-M-012",
   "name": "Toast '¡Completaste la promo!' al alcanzar umbral desde PLP (Logueado)",
   "observation": "Verificado 2026-10-30 (Mobile 390x844, con sesión, SKU 000000000664214001-UN, promo 2x1): Con 1 unidad en el carro, al agregar la 2ª desde la PLP el shelf muestra «¡Completaste la promo!» y el contador queda en 2.",
   "observed": "Verificado 2026-10-30 (Mobile 390x844, con sesión, SKU 000000000664214001-UN, promo 2x1): Con 1 unidad en el carro, al agregar la 2ª desde la PLP el shelf muestra «¡Completaste la promo!» y el contador queda en 2.",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nProducto con promo \"Completa la promo\" 2x1 en PLP\n1 unidad del producto en el carrito\nViewport Mobile 390x844",
   "screenshots": [
    {
     "caption": "Paso 1 — carro con 1 unidad",
     "file": "TC-63-M-012-p01-carro-con-1-unidad.png"
    },
    {
     "caption": "Paso 2 — tras la 2 unidad",
     "file": "TC-63-M-012-p02-tras-la-2-unidad.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Iniciar sesión con cuenta de cliente registrado en Mobile.\n2. Navegar a la PLP (el carrito tiene 1 unidad, promo 2x1).\n3. Hacer tap en \"+\" para agregar la 2ª unidad.\n4. Observar el toast que aparece.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {SKU_PROM_2x1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {UNIDADES_CARRITO_INICIAL_1} = 1 (unidad del producto ya en el carrito al iniciar el test)\n- {COMPRADOR_USER} = email de cuenta de cliente registrado\n- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-30",
   "expected": "Se muestra el toast \"Agrega 1 más y ahorra más\" desde la PDP en Mobile. La barra de progreso refleja 1 de 2 unidades. El comportamiento es idéntico al del usuario Guest en PDP.",
   "form_factor": "mobile",
   "id": "TC-63-M-013",
   "name": "Toast progresivo al agregar desde PDP (Logueado)",
   "observation": "Verificado 2026-10-30 (Mobile 390x844, con sesión). Esperado: mensaje «Agrega 1 más y ahorra más» al agregar desde la PDP. Obtenido: la PDP muestra «En carro 1 un.» pero no muestra ningún mensaje ni barra de progreso de la promo (el shelf de la PLP sí lo muestra). Bug: B2C-1420.",
   "observed": "Verificado 2026-10-30 (Mobile 390x844, con sesión). Esperado: mensaje «Agrega 1 más y ahorra más» al agregar desde la PDP. Obtenido: la PDP muestra «En carro 1 un.» pero no muestra ningún mensaje ni barra de progreso de la promo (el shelf de la PLP sí lo muestra). Bug: B2C-1420.",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nPDP de producto con promo activa \"Completa la promo\" 2x1 abierta\nCarrito vacío\nViewport Mobile 390x844",
   "screenshots": [
    {
     "caption": "Paso 1 — pdp antes de agregar",
     "file": "TC-63-M-013-p01-pdp-antes-de-agregar.png"
    },
    {
     "caption": "Paso 2 — pdp tras agregar la 1 unidad",
     "file": "TC-63-M-013-p02-pdp-tras-agregar-la-1-unidad.png"
    }
   ],
   "status": "Rechazado",
   "steps": "1. Iniciar sesión con cuenta de cliente registrado en Mobile.\n2. Navegar a la PDP del producto con promo.\n3. Hacer tap en \"+ Agregar al carrito\" o en el stepper.\n4. Observar el toast y la barra de progreso.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {SKU_PROM_2x1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {COMPRADOR_USER} = email de cuenta de cliente registrado\n- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-30",
   "expected": "Se muestra el toast \"Agrega 1 más y ahorra más\" desde el modal en Mobile. La barra de progreso y el contador se actualizan correctamente.",
   "form_factor": "mobile",
   "id": "TC-63-M-014",
   "name": "Toast progresivo al agregar desde Modal de producto (Logueado)",
   "observation": "Verificado 2026-10-30 (Mobile 390x844, con sesión). Esperado: «Agrega 1 más y ahorra más» al agregar desde el modal. Obtenido: el modal «Combina la promo» muestra barra completa («1 / 1 productos») y «¡Completaste la promo!» con 1 sola unidad en carro (el shelf muestra «Agrega 1 y ahorra más»). Bug: B2C-1421.",
   "observed": "Verificado 2026-10-30 (Mobile 390x844, con sesión). Esperado: «Agrega 1 más y ahorra más» al agregar desde el modal. Obtenido: el modal «Combina la promo» muestra barra completa («1 / 1 productos») y «¡Completaste la promo!» con 1 sola unidad en carro (el shelf muestra «Agrega 1 y ahorra más»). Bug: B2C-1421.",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nModal de producto con promo activa \"Completa la promo\" 2x1 accesible\nCarrito vacío\nViewport Mobile 390x844",
   "screenshots": [
    {
     "caption": "Paso 1 — modal combina la promo abierto",
     "file": "TC-63-M-014-p01-modal-combina-la-promo-abierto.png"
    },
    {
     "caption": "Paso 2 — modal tras agregar la 1 unidad",
     "file": "TC-63-M-014-p02-modal-tras-agregar-la-1-unidad.png"
    }
   ],
   "status": "Rechazado",
   "steps": "1. Iniciar sesión con cuenta de cliente registrado en Mobile.\n2. Navegar a la PLP o Home con el producto en promo.\n3. Abrir el modal del producto.\n4. Hacer tap en \"+\" para agregar 1 unidad.\n5. Observar el toast que aparece.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {SKU_PROM_2x1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {COMPRADOR_USER} = email de cuenta de cliente registrado\n- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-30",
   "expected": "Se muestra el toast \"Agrega 1 más y ahorra más\" en Mobile. La barra de progreso y el contador se actualizan correctamente desde el carrusel.",
   "form_factor": "mobile",
   "id": "TC-63-M-015",
   "name": "Toast progresivo al agregar desde Carrusel/Shelf en Home (Logueado)",
   "observation": "Verificado 2026-10-30: Causa: {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home en el ambiente (el TC lo necesita ahí). Acción: publicar en un carrusel del Home un producto con la promo «Completa la promo» o declarar otro SKU que ya esté en el Home.",
   "observed": "Verificado 2026-10-30: Causa: {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home en el ambiente (el TC lo necesita ahí). Acción: publicar en un carrusel del Home un producto con la promo «Completa la promo» o declarar otro SKU que ya esté en el Home.",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nProducto con promo activa \"Completa la promo\" 2x1 visible en carrusel/shelf del Home\nCarrito vacío\nViewport Mobile 390x844",
   "status": "Bloqueado Data",
   "steps": "1. Iniciar sesión con cuenta de cliente registrado en Mobile.\n2. Navegar al Home.\n3. Localizar el carrusel con el producto en promo.\n4. Hacer tap en \"+\" del producto en el shelf.\n5. Observar el toast y el contador.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {SKU_PROM_2x1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {COMPRADOR_USER} = email de cuenta de cliente registrado\n- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-30",
   "expected": "Se muestra el toast \"Agrega 1 más y ahorra más\" en Mobile. La barra de progreso retrocede a 1 de 2. El contador actualiza a 1 unidad.",
   "form_factor": "mobile",
   "id": "TC-63-M-016",
   "name": "Toast al quitar unidades regresa a estado en-progreso (Logueado)",
   "observation": "Verificado 2026-10-30 (Mobile 390x844, con sesión, SKU 000000000664214001-UN, promo 2x1): Con 2 unidades, al quitar una desde la PLP el shelf vuelve a «Agrega 1 y ahorra más» y el contador queda en 1.",
   "observed": "Verificado 2026-10-30 (Mobile 390x844, con sesión, SKU 000000000664214001-UN, promo 2x1): Con 2 unidades, al quitar una desde la PLP el shelf vuelve a «Agrega 1 y ahorra más» y el contador queda en 1.",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nProducto con promo \"Completa la promo\" 2x1 en PLP\n2 unidades en el carrito (promo completada)\nViewport Mobile 390x844",
   "screenshots": [
    {
     "caption": "Paso 1 — carro con 2 unidades promo completa",
     "file": "TC-63-M-016-p01-carro-con-2-unidades-promo-completa.png"
    },
    {
     "caption": "Paso 2 — tras quitar una unidad",
     "file": "TC-63-M-016-p02-tras-quitar-una-unidad.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Iniciar sesión con cuenta de cliente registrado en Mobile.\n2. Navegar a la PLP (el carrito tiene 2 unidades, promo completada).\n3. Hacer tap en \"-\" en el shelf para quitar 1 unidad.\n4. Observar el toast y la barra de progreso.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {SKU_PROM_2x1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {UNIDADES_CARRITO_INICIAL_2} = 2 (unidades del producto ya en el carrito al iniciar el test)\n- {COMPRADOR_USER} = email de cuenta de cliente registrado\n- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-30",
   "expected": "Se muestra el toast \"Agrega 1 más y ahorra más\" en Mobile (inicio del 2° ciclo). La barra de progreso muestra 1 de 2 (reiniciada). El carrito refleja 3 unidades totales.",
   "form_factor": "mobile",
   "id": "TC-63-M-017",
   "name": "Recurrencia 2x1 — 3ª unidad reinicia ciclo promocional (Logueado)",
   "observation": "Verificado 2026-10-30 (Mobile 390x844, con sesión, SKU 000000000664214001-UN, promo 2x1): Con 2 unidades, al agregar la 3ª el shelf muestra «Agrega 1 y ahorra más» (nuevo ciclo) y el contador queda en 3.",
   "observed": "Verificado 2026-10-30 (Mobile 390x844, con sesión, SKU 000000000664214001-UN, promo 2x1): Con 2 unidades, al agregar la 3ª el shelf muestra «Agrega 1 y ahorra más» (nuevo ciclo) y el contador queda en 3.",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nProducto con promo \"Completa la promo\" 2x1 en PLP\n2 unidades en el carrito (1er tramo completado)\nViewport Mobile 390x844",
   "screenshots": [
    {
     "caption": "Paso 1 — carro con 2 unidades 1er tramo completo",
     "file": "TC-63-M-017-p01-carro-con-2-unidades-1er-tramo-completo.png"
    },
    {
     "caption": "Paso 2 — tras la 3 unidad",
     "file": "TC-63-M-017-p02-tras-la-3-unidad.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Iniciar sesión con cuenta de cliente registrado en Mobile.\n2. Navegar a la PLP (el carrito tiene 2 unidades, promo 2x1 completada).\n3. Hacer tap en \"+\" para agregar la 3ª unidad.\n4. Observar el toast y la barra de progreso.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {SKU_PROM_2x1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {UNIDADES_CARRITO_INICIAL_2} = 2 (unidades del producto ya en el carrito al iniciar el test)\n- {COMPRADOR_USER} = email de cuenta de cliente registrado\n- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-30",
   "expected": "El producto es eliminado del carrito. La barra de progreso desaparece o se resetea en Mobile. Los mensajes del toast no se muestran. El botón del shelf vuelve al estado inicial (\"Agregar\").",
   "form_factor": "mobile",
   "id": "TC-63-M-019",
   "name": "Eliminar producto resetea progreso y oculta toast (Logueado)",
   "observation": "Verificado 2026-10-30 (Mobile 390x844, con sesión, SKU 000000000664214001-UN, promo 2x1): Al eliminar el producto desde el shelf, el contador desaparece, vuelve «Agregar» y no queda ningún mensaje de la promo.",
   "observed": "Verificado 2026-10-30 (Mobile 390x844, con sesión, SKU 000000000664214001-UN, promo 2x1): Al eliminar el producto desde el shelf, el contador desaparece, vuelve «Agregar» y no queda ningún mensaje de la promo.",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nProducto con promo \"Completa la promo\" 2x1 en PLP\n1 unidad del producto en el carrito\nViewport Mobile 390x844",
   "screenshots": [
    {
     "caption": "Paso 1 — carro con 1 unidad",
     "file": "TC-63-M-019-p01-carro-con-1-unidad.png"
    },
    {
     "caption": "Paso 2 — tras eliminar el producto",
     "file": "TC-63-M-019-p02-tras-eliminar-el-producto.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Iniciar sesión con cuenta de cliente registrado en Mobile.\n2. Navegar a la PLP (el carrito tiene 1 unidad del producto en promo).\n3. Hacer tap en \"-\" hasta 0 unidades o usar el botón de eliminar.\n4. Observar la UI del shelf y la barra de progreso.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {SKU_PROM_2x1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {UNIDADES_CARRITO_INICIAL_1} = 1 (unidad del producto ya en el carrito al iniciar el test)\n- {COMPRADOR_USER} = email de cuenta de cliente registrado\n- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "En el carrusel el contador queda en 1, la barra de progreso retrocede a 1 de 2 y se muestra \"Agrega 1 y ahorra más\".",
   "form_factor": "desktop",
   "id": "TC-63-D-022",
   "name": "Usuario invitado quita una unidad desde un carrusel del Home",
   "observation": "Verificado 2026-10-30: Causa: {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home en el ambiente (el TC lo necesita ahí). Acción: publicar en un carrusel del Home un producto con la promo «Completa la promo» o declarar otro SKU que ya esté en el Home.",
   "observed": "Verificado 2026-10-30: Causa: {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home en el ambiente (el TC lo necesita ahí). Acción: publicar en un carrusel del Home un producto con la promo «Completa la promo» o declarar otro SKU que ya esté en el Home.",
   "preconditions": "User type: Guest\nDirección de entrega seleccionada: {DIRECCION_DESPACHO_001} (Despacho a domicilio con cobertura)\nProducto {SKU_COMPLETA_PROMO_2X1} con promo activa \"Completa la promo\" 2x1 (mismo SKU, sin código especial)\nEl carro contiene {SKU_COMPLETA_PROMO_2X1} x 2 (promo 2x1 completada)\n{SKU_COMPLETA_PROMO_2X1} aparece en un carrusel del Home\nViewport Desktop 1280x900",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a {BASE_URL} (Home).\n2. Ubicar {SKU_COMPLETA_PROMO_2X1} en un carrusel del Home.\n3. Verificar que el sistema muestra el shelf del carrusel con el contador en 2 y la barra de progreso completa.\n4. Hacer clic en \"−\" en el shelf del carrusel.\n5. Verificar que el sistema actualiza el contador a 1, retrocede la barra de progreso a 1 de 2 y muestra \"Agrega 1 y ahorra más\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {PLP_URL_NxM} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas\n- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN\n- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "La PDP conserva el progreso iniciado en el Home (contador 1, barra 1 de 2) y al agregar la 2ª unidad muestra \"¡Completaste la promo!\".",
   "form_factor": "desktop",
   "id": "TC-63-D-025",
   "name": "Usuario invitado inicia la promo en el Home y la completa en la PDP",
   "observation": "Verificado 2026-10-30: Causa: {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home en el ambiente (el TC lo necesita ahí). Acción: publicar en un carrusel del Home un producto con la promo «Completa la promo» o declarar otro SKU que ya esté en el Home.",
   "observed": "Verificado 2026-10-30: Causa: {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home en el ambiente (el TC lo necesita ahí). Acción: publicar en un carrusel del Home un producto con la promo «Completa la promo» o declarar otro SKU que ya esté en el Home.",
   "preconditions": "User type: Guest\nDirección de entrega seleccionada: {DIRECCION_DESPACHO_001} (Despacho a domicilio con cobertura)\nProducto {SKU_COMPLETA_PROMO_2X1} con promo activa \"Completa la promo\" 2x1 (mismo SKU, sin código especial)\nCarro vacío\n{SKU_COMPLETA_PROMO_2X1} aparece en un carrusel del Home\nViewport Desktop 1280x900",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a {BASE_URL} (Home).\n2. Hacer clic en \"Agregar\" en el shelf de {SKU_COMPLETA_PROMO_2X1} en un carrusel del Home.\n3. Verificar que el sistema agrega la unidad y muestra \"Agrega 1 y ahorra más\" con la barra de progreso en 1 de 2.\n4. Abrir la PDP de {SKU_COMPLETA_PROMO_2X1}.\n5. Verificar que el sistema carga la PDP con el contador en 1 y la barra de progreso en 1 de 2.\n6. Hacer clic en \"+\" en el stepper de la PDP.\n7. Verificar que el sistema actualiza el contador a 2, completa la barra de progreso y muestra el toast \"¡Completaste la promo!\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {PLP_URL_NxM} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas\n- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN\n- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "El shelf de la PLP conserva el progreso iniciado en el Home (contador 1, barra 1 de 2) y al agregar la 2ª unidad muestra \"¡Completaste la promo!\".",
   "form_factor": "desktop",
   "id": "TC-63-D-026",
   "name": "Usuario invitado inicia la promo en el Home y la completa en la PLP",
   "observation": "Verificado 2026-10-30: Causa: {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home en el ambiente (el TC lo necesita ahí). Acción: publicar en un carrusel del Home un producto con la promo «Completa la promo» o declarar otro SKU que ya esté en el Home.",
   "observed": "Verificado 2026-10-30: Causa: {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home en el ambiente (el TC lo necesita ahí). Acción: publicar en un carrusel del Home un producto con la promo «Completa la promo» o declarar otro SKU que ya esté en el Home.",
   "preconditions": "User type: Guest\nDirección de entrega seleccionada: {DIRECCION_DESPACHO_001} (Despacho a domicilio con cobertura)\nProducto {SKU_COMPLETA_PROMO_2X1} con promo activa \"Completa la promo\" 2x1 (mismo SKU, sin código especial)\nCarro vacío\n{SKU_COMPLETA_PROMO_2X1} aparece en un carrusel del Home\nViewport Desktop 1280x900",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a {BASE_URL} (Home).\n2. Hacer clic en \"Agregar\" en el shelf de {SKU_COMPLETA_PROMO_2X1} en un carrusel del Home.\n3. Verificar que el sistema agrega la unidad y muestra \"Agrega 1 y ahorra más\" con la barra de progreso en 1 de 2.\n4. Navegar a {PLP_URL_NxM} y ubicar el shelf de {SKU_COMPLETA_PROMO_2X1}.\n5. Verificar que el sistema muestra el shelf de {SKU_COMPLETA_PROMO_2X1} con el contador en 1 y la barra de progreso en 1 de 2.\n6. Hacer clic en \"+\" en el shelf.\n7. Verificar que el sistema actualiza el contador a 2, completa la barra de progreso y muestra el toast \"¡Completaste la promo!\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {PLP_URL_NxM} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas\n- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN\n- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida",
   "viewport": "1280x900"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-30",
   "expected": "En el carrusel el contador queda en 1, la barra de progreso retrocede a 1 de 2 y se muestra \"Agrega 1 y ahorra más\".",
   "form_factor": "mobile",
   "id": "TC-63-M-022",
   "name": "Usuario invitado quita una unidad desde un carrusel del Home",
   "observation": "Verificado 2026-10-30: Causa: {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home en el ambiente (el TC lo necesita ahí). Acción: publicar en un carrusel del Home un producto con la promo «Completa la promo» o declarar otro SKU que ya esté en el Home.",
   "observed": "Verificado 2026-10-30: Causa: {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home en el ambiente (el TC lo necesita ahí). Acción: publicar en un carrusel del Home un producto con la promo «Completa la promo» o declarar otro SKU que ya esté en el Home.",
   "preconditions": "User type: Guest\nDirección de entrega seleccionada: {DIRECCION_DESPACHO_001} (Despacho a domicilio con cobertura)\nProducto {SKU_COMPLETA_PROMO_2X1} con promo activa \"Completa la promo\" 2x1 (mismo SKU, sin código especial)\nEl carro contiene {SKU_COMPLETA_PROMO_2X1} x 2 (promo 2x1 completada)\n{SKU_COMPLETA_PROMO_2X1} aparece en un carrusel del Home\nViewport Mobile 390x844",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a {BASE_URL} (Home).\n2. Ubicar {SKU_COMPLETA_PROMO_2X1} en un carrusel del Home.\n3. Verificar que el sistema muestra el shelf del carrusel con el contador en 2 y la barra de progreso completa.\n4. Hacer tap en \"−\" en el shelf del carrusel.\n5. Verificar que el sistema actualiza el contador a 1, retrocede la barra de progreso a 1 de 2 y muestra \"Agrega 1 y ahorra más\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {PLP_URL_NxM} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas\n- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN\n- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-30",
   "expected": "La PDP conserva el progreso iniciado en el Home (contador 1, barra 1 de 2) y al agregar la 2ª unidad muestra \"¡Completaste la promo!\".",
   "form_factor": "mobile",
   "id": "TC-63-M-025",
   "name": "Usuario invitado inicia la promo en el Home y la completa en la PDP",
   "observation": "Verificado 2026-10-30: Causa: {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home en el ambiente (el TC lo necesita ahí). Acción: publicar en un carrusel del Home un producto con la promo «Completa la promo» o declarar otro SKU que ya esté en el Home.",
   "observed": "Verificado 2026-10-30: Causa: {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home en el ambiente (el TC lo necesita ahí). Acción: publicar en un carrusel del Home un producto con la promo «Completa la promo» o declarar otro SKU que ya esté en el Home.",
   "preconditions": "User type: Guest\nDirección de entrega seleccionada: {DIRECCION_DESPACHO_001} (Despacho a domicilio con cobertura)\nProducto {SKU_COMPLETA_PROMO_2X1} con promo activa \"Completa la promo\" 2x1 (mismo SKU, sin código especial)\nCarro vacío\n{SKU_COMPLETA_PROMO_2X1} aparece en un carrusel del Home\nViewport Mobile 390x844",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a {BASE_URL} (Home).\n2. Hacer tap en \"Agregar\" en el shelf de {SKU_COMPLETA_PROMO_2X1} en un carrusel del Home.\n3. Verificar que el sistema agrega la unidad y muestra \"Agrega 1 y ahorra más\" con la barra de progreso en 1 de 2.\n4. Abrir la PDP de {SKU_COMPLETA_PROMO_2X1}.\n5. Verificar que el sistema carga la PDP con el contador en 1 y la barra de progreso en 1 de 2.\n6. Hacer tap en \"+\" en el stepper de la PDP.\n7. Verificar que el sistema actualiza el contador a 2, completa la barra de progreso y muestra el toast \"¡Completaste la promo!\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {PLP_URL_NxM} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas\n- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN\n- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-30",
   "expected": "El shelf de la PLP conserva el progreso iniciado en el Home (contador 1, barra 1 de 2) y al agregar la 2ª unidad muestra \"¡Completaste la promo!\".",
   "form_factor": "mobile",
   "id": "TC-63-M-026",
   "name": "Usuario invitado inicia la promo en el Home y la completa en la PLP",
   "observation": "Verificado 2026-10-30: Causa: {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home en el ambiente (el TC lo necesita ahí). Acción: publicar en un carrusel del Home un producto con la promo «Completa la promo» o declarar otro SKU que ya esté en el Home.",
   "observed": "Verificado 2026-10-30: Causa: {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home en el ambiente (el TC lo necesita ahí). Acción: publicar en un carrusel del Home un producto con la promo «Completa la promo» o declarar otro SKU que ya esté en el Home.",
   "preconditions": "User type: Guest\nDirección de entrega seleccionada: {DIRECCION_DESPACHO_001} (Despacho a domicilio con cobertura)\nProducto {SKU_COMPLETA_PROMO_2X1} con promo activa \"Completa la promo\" 2x1 (mismo SKU, sin código especial)\nCarro vacío\n{SKU_COMPLETA_PROMO_2X1} aparece en un carrusel del Home\nViewport Mobile 390x844",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a {BASE_URL} (Home).\n2. Hacer tap en \"Agregar\" en el shelf de {SKU_COMPLETA_PROMO_2X1} en un carrusel del Home.\n3. Verificar que el sistema agrega la unidad y muestra \"Agrega 1 y ahorra más\" con la barra de progreso en 1 de 2.\n4. Navegar a {PLP_URL_NxM} y ubicar el shelf de {SKU_COMPLETA_PROMO_2X1}.\n5. Verificar que el sistema muestra el shelf de {SKU_COMPLETA_PROMO_2X1} con el contador en 1 y la barra de progreso en 1 de 2.\n6. Hacer tap en \"+\" en el shelf.\n7. Verificar que el sistema actualiza el contador a 2, completa la barra de progreso y muestra el toast \"¡Completaste la promo!\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {PLP_URL_NxM} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas\n- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN\n- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida",
   "viewport": "390x844"
  }
 ]
}
-->
