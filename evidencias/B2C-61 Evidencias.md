# B2C-61 - Store Locator: disponibilidad y promociones por tienda - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-61 |
| Última actualización | 2026-11-09 |
| Ejecutado por | Victor Chirinos |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | webkit |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-61 Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 46 |
| Aprobado | 4 |
| **Total** | **50** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-09 | 25 | TC-B2C61-D-001, TC-B2C61-D-006, TC-B2C61-D-007, TC-B2C61-D-009, TC-B2C61-D-010, TC-B2C61-D-011, TC-B2C61-D-012, TC-B2C61-D-013, TC-B2C61-D-014, TC-B2C61-D-015, TC-B2C61-D-017, TC-B2C61-D-019, TC-B2C61-M-003, TC-B2C61-M-004, TC-B2C61-M-005, TC-B2C61-M-006, TC-B2C61-M-007, TC-B2C61-M-009, TC-B2C61-M-010, TC-B2C61-M-011, TC-B2C61-M-012, TC-B2C61-M-013, TC-B2C61-M-014, TC-B2C61-M-015, TC-B2C61-M-019 |
| 2026-10-29 | 50 | TC-B2C61-D-001, TC-B2C61-D-002, TC-B2C61-D-003, TC-B2C61-D-004, TC-B2C61-D-005, TC-B2C61-D-006, TC-B2C61-D-007, TC-B2C61-D-008, TC-B2C61-D-009, TC-B2C61-D-010, TC-B2C61-D-011, TC-B2C61-D-012, TC-B2C61-D-013, TC-B2C61-D-014, TC-B2C61-D-015, TC-B2C61-D-016, TC-B2C61-D-017, TC-B2C61-D-018, TC-B2C61-D-019, TC-B2C61-D-020, TC-B2C61-D-021, TC-B2C61-D-022, TC-B2C61-D-023, TC-B2C61-D-024, TC-B2C61-D-025, TC-B2C61-M-001, TC-B2C61-M-002, TC-B2C61-M-003, TC-B2C61-M-004, TC-B2C61-M-005, TC-B2C61-M-006, TC-B2C61-M-007, TC-B2C61-M-008, TC-B2C61-M-009, TC-B2C61-M-010, TC-B2C61-M-011, TC-B2C61-M-012, TC-B2C61-M-013, TC-B2C61-M-014, TC-B2C61-M-015, TC-B2C61-M-016, TC-B2C61-M-017, TC-B2C61-M-018, TC-B2C61-M-019, TC-B2C61-M-020, TC-B2C61-M-021, TC-B2C61-M-022, TC-B2C61-M-023, TC-B2C61-M-024, TC-B2C61-M-025 |

## Detalle por caso de prueba

### TC-B2C61-D-001 - Verificar que al setear una dirección se muestra el contenido del segmento de su tienda [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-09 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_B} para la tienda de A. Las Condes 14791, Lo Barnechea y QA B2C-61 por defecto

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección Calle Uno 23, La Florida, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.

**Resultado esperado**

La landing muestra Vilanova 122, Las Condes, sin interrumpir el flujo del usuario al setear la dirección.

**Resultado obtenido**

No se ejecutó: falta data de prueba.

**Observación**

Causa: {CONTENIDO_SEGMENTO_B} y {PD_LANDING_SEGMENTO_URL} están en TBD en el Excel de data. Acción: cargar la landing de segmentación y el contenido del segmento B (responsable de la data de prueba) y re-ejecutar con --only.

---

### TC-B2C61-D-002 - Verificar que si el segmento de la tienda no tiene contenido se muestra el contenido por defecto [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- La tienda de {DIRECCION_TIENDA_SIN_SEGMENTO} no tiene segmento ni contenido configurado en BM
- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_B} para la tienda de A. Las Conder 14791, Lo Barnechea y QA B2C-61 por defecto

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_TIENDA_SIN_SEGMENTO}, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.

**Resultado esperado**

La landing muestra QA B2C-61.

**Resultado obtenido**

No ejecutado: falta data de prueba.

**Observación**

Causa: token(s) en TBD en el Excel de data: {CONTENIDO_SEGMENTO_B}, {DIRECCION_TIENDA_SIN_SEGMENTO}, {PD_LANDING_SEGMENTO_URL}. Acción: cargar el dato en el Excel de data (responsable de la data de prueba) y re-ejecutar con --only.

---

### TC-B2C61-D-003 - Verificar que sin tienda asignada se muestra el contenido por defecto [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión nueva sin dirección ni tienda seteada
- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_B} para la tienda de A. Las Conder 14791, Lo Barnechea y QA B2C-61 por defecto

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.

**Resultado esperado**

La landing muestra QA B2C-61 y el Store Locator sigue sin tienda asignada.

**Resultado obtenido**

No ejecutado: falta data de prueba.

**Observación**

Causa: token(s) en TBD en el Excel de data: {CONTENIDO_SEGMENTO_B}, {PD_LANDING_SEGMENTO_URL}. Acción: cargar el dato en el Excel de data (responsable de la data de prueba) y re-ejecutar con --only.

---

### TC-B2C61-D-004 - Verificar que al cambiar a otra tienda el contenido cambia en la siguiente carga de página [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- La dirección activa es Calle Uno 23, La Florida
- El carro está vacío
- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_B} para la tienda de A. Las Conder 14791, Lo Barnechea y QA B2C-61 por defecto

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.
2. El sistema muestra Vilanova 122, Las Condes.
3. El usuario hace clic en el Store Locator del header.
4. El usuario ingresa A. Las Conder 14791, Lo Barnechea y la confirma.
5. El usuario revisa la landing sin recargar.
6. El usuario vuelve a cargar la landing.

**Resultado esperado**

Sin recargar sigue Vilanova 122, Las Condes; al volver a cargar la landing se muestra {CONTENIDO_SEGMENTO_B}.

**Resultado obtenido**

No ejecutado: falta data de prueba.

**Observación**

Causa: token(s) en TBD en el Excel de data: {CONTENIDO_SEGMENTO_B}, {PD_LANDING_SEGMENTO_URL}. Acción: cargar el dato en el Excel de data (responsable de la data de prueba) y re-ejecutar con --only.

---

### TC-B2C61-D-005 - Verificar que al cambiar a una dirección sin cobertura se activa Sin cobertura sin re-asignar segmento [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- La dirección activa es Calle Uno 23, La Florida
- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_B} para la tienda de A. Las Conder 14791, Lo Barnechea y QA B2C-61 por defecto

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección T-551, Futrono, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El sistema muestra el modal "Aún no llegamos a esta dirección".
7. El usuario hace clic en la X o cierra el modal.
8. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.

**Resultado esperado**

Se muestra el flujo Sin cobertura (B2C-123) y la landing sigue mostrando Vilanova 122, Las Condes.

**Resultado obtenido**

No ejecutado: falta data de prueba.

**Observación**

Causa: token(s) en TBD en el Excel de data: {CONTENIDO_SEGMENTO_B}, {PD_LANDING_SEGMENTO_URL}. Acción: cargar el dato en el Excel de data (responsable de la data de prueba) y re-ejecutar con --only.

---

### TC-B2C61-D-006 - Verificar que el segmento del invitado persiste al navegar durante la sesión [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-09 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- La dirección Calle Uno 23, La Florida está seteada como invitado
- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_B} para la tienda de A. Las Condes 14791, Lo Barnechea y QA B2C-61 por defecto

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El usuario navega a una PLP y luego a la landing.
3. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.

**Resultado esperado**

La landing sigue mostrando Vilanova 122, Las Condes tras navegar.

**Resultado obtenido**

No se ejecutó: falta data de prueba.

**Observación**

Causa: {CONTENIDO_SEGMENTO_B} y {PD_LANDING_SEGMENTO_URL} están en TBD en el Excel de data. Acción: cargar la landing de segmentación y el contenido del segmento B (responsable de la data de prueba) y re-ejecutar con --only.

---

### TC-B2C61-D-007 - Verificar que el segmento del logueado persiste en su perfil durante la sesión [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-09 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com / Avatar1234.
- La dirección Calle Uno 23, La Florida está seteada en la cuenta
- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_B} para la tienda de A. Las Condes 14791, Lo Barnechea y QA B2C-61 por defecto

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El usuario navega a una PLP.
3. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.

**Resultado esperado**

La landing muestra Vilanova 122, Las Condes.

**Resultado obtenido**

No se ejecutó: falta data de prueba.

**Observación**

Causa: {CONTENIDO_SEGMENTO_B} y {PD_LANDING_SEGMENTO_URL} están en TBD en el Excel de data. Acción: cargar la landing de segmentación y el contenido del segmento B (responsable de la data de prueba) y re-ejecutar con --only.

---

### TC-B2C61-D-008 - Verificar que un producto con stock en la tienda activa se muestra disponible [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-61.spec.ts:126 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: PDP
- La dirección activa es Calle Uno 23, La Florida
- 000000000000674797-UN tiene stock en la tienda de Calle Uno 23, La Florida

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario ingresa a la PDP de 000000000000674797-UN.

**Resultado esperado**

000000000000674797-UN se muestra disponible con el botón "Agregar" habilitado.

**Resultado obtenido**

El producto declarado se muestra disponible en la tienda activa: botón «Agregar» visible y habilitado, sin etiqueta de no disponible.

**Evidencia**

![Paso 1 — pdp con agregar habilitado](<B2C-61 Evidencias/TC-B2C61-D-008-p01-pdp-con-agregar-habilitado.png>)

---

### TC-B2C61-D-009 - Verificar que un producto sin stock en la tienda activa se muestra no disponible y sin Agregar [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-09 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-61.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: SRP
- La dirección activa es A. Las Condes 14791, Lo Barnechea
- 000000000000674797-UN no tiene stock en la tienda de A. Las Condes 14791, Lo Barnechea

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario busca Lavalozas Quix.
2. El sistema muestra resultados con el shelf de 000000000000674797-UN.

**Resultado esperado**

000000000000674797-UN se muestra con etiqueta visible de no disponible y sin opción de agregar al carro.

**Resultado obtenido**

El shelf del SKU en la SRP se muestra con «Agregar» y sin etiqueta de no disponible.

**Observación**

Causa: el SKU 000000000000674797-UN tiene stock (Agregar habilitado, sin etiqueta de no disponible) con la dirección A. Las Condes 14791, Lo Barnechea, donde la precondición dice que no tiene; se comporta igual en ambas tiendas. Acción: cargar un SKU y un par de direcciones cuyas tiendas difieran realmente en stock, y re-ejecutar.

**Evidencia**

![Paso 2 — resultados con el shelf del sku](<B2C-61 Evidencias/TC-B2C61-D-009-p02-resultados-con-el-shelf-del-sku.png>)

![Estado al fallar la aserción](<B2C-61 Evidencias/TC-B2C61-D-009.png>)

---

### TC-B2C61-D-010 - Verificar que un producto inactivo para la tienda activa no aparece en catálogo ni en PDP [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-09 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-61.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: SRP
- La dirección activa es Calle Uno 23, La Florida
- 000000000400254005-UN está inactivo para la tienda de Calle Uno 23, La Florida

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario busca 000000000400254005-UN.
2. El usuario ingresa a la PDP de 000000000400254005-UN.

**Resultado esperado**

000000000400254005-UN no aparece en los resultados y su PDP no se muestra.

**Resultado obtenido**

El SKU aparece en los resultados (1 producto) y su PDP se muestra con «Pronto disponible».

**Observación**

Causa: con Calle Uno 23, La Florida activa, 000000000400254005-UN aparece en la SRP y su PDP se abre con «Pronto disponible» y «Ver similares» (presentación de producto sin stock, no de producto inactivo); desde el storefront no se puede confirmar que esté inactivo para esa tienda. Acción: confirmar en BM que el SKU está offline/inactivo para la tienda de Calle Uno 23, La Florida (o cargar uno que lo esté) y re-ejecutar.

**Evidencia**

![Paso 0 — direccion de la tienda a aplicada](<B2C-61 Evidencias/TC-B2C61-D-010-p00-direccion-de-la-tienda-a-aplicada.png>)

![Paso 1 — resultados de la busqueda del sku](<B2C-61 Evidencias/TC-B2C61-D-010-p01-resultados-de-la-busqueda-del-sku.png>)

![Paso 2 — pdp del sku](<B2C-61 Evidencias/TC-B2C61-D-010-p02-pdp-del-sku.png>)

![Estado al fallar la aserción](<B2C-61 Evidencias/TC-B2C61-D-010.png>)

---

### TC-B2C61-D-011 - Verificar que al cambiar de tienda un producto sin stock en la nueva tienda queda no disponible [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-09 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-61.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- La dirección activa es Calle Uno 23, La Florida
- El carro contiene 000000000000674797-UN

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección A. Las Condes 14791, Lo Barnechea, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El sistema muestra el modal "Algunos productos podrían agotarse" (B2C-122).
7. El usuario hace clic en "Sí, continuar".
8. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.

**Resultado esperado**

Se muestra el modal de B2C-122 y, tras continuar, 000000000000674797-UN queda como no disponible para la nueva tienda.

**Resultado obtenido**

Se mostró el modal de B2C-122; tras continuar el SKU sigue disponible en el carro.

**Observación**

Causa: el SKU 000000000000674797-UN tiene stock (Agregar habilitado, sin etiqueta de no disponible) con la dirección A. Las Condes 14791, Lo Barnechea, donde la precondición dice que no tiene; se comporta igual en ambas tiendas: tras confirmar la nueva dirección se muestra el modal «Algunos productos podrían agotarse», pero el SKU sigue disponible porque tiene stock en la nueva tienda. Acción: cargar un SKU y un par de direcciones cuyas tiendas difieran realmente en stock, y re-ejecutar.

**Evidencia**

![Paso 0 — sku en el carro con la tienda de origen](<B2C-61 Evidencias/TC-B2C61-D-011-p00-sku-en-el-carro-con-la-tienda-de-origen.png>)

![Paso 6 — modal algunos productos podrian agotarse](<B2C-61 Evidencias/TC-B2C61-D-011-p06-modal-algunos-productos-podrian-agotarse.png>)

![Paso 8 — carro tras el cambio de tienda](<B2C-61 Evidencias/TC-B2C61-D-011-p08-carro-tras-el-cambio-de-tienda.png>)

![Estado al fallar la aserción](<B2C-61 Evidencias/TC-B2C61-D-011.png>)

---

### TC-B2C61-D-012 - Verificar que al cambiar de tienda un producto que ahora tiene stock se habilita [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-09 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-61.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- La dirección activa es A. Las Condes 14791, Lo Barnechea, donde 000000000000674797-UN no tiene stock
- El carro está vacío

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección Calle Uno 23, La Florida, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El usuario ingresa a la PDP de 000000000000674797-UN.

**Resultado esperado**

000000000000674797-UN se muestra disponible con "Agregar" habilitado.

**Resultado obtenido**

En la dirección de partida el SKU ya muestra «Agregar» habilitado.

**Observación**

Causa: precondición no disponible: el SKU 000000000000674797-UN tiene stock (Agregar habilitado, sin etiqueta de no disponible) con la dirección A. Las Condes 14791, Lo Barnechea, donde la precondición dice que no tiene; se comporta igual en ambas tiendas. Acción: cargar un SKU y un par de direcciones cuyas tiendas difieran realmente en stock, y re-ejecutar.

**Evidencia**

![Paso 0 — pdp en la tienda sin stock estado previo](<B2C-61 Evidencias/TC-B2C61-D-012-p00-pdp-en-la-tienda-sin-stock-estado-previo.png>)

---

### TC-B2C61-D-013 - Verificar que la PDP de un producto sin stock en la tienda activa deshabilita Agregar con mensaje [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-09 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-61.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: PDP
- La dirección activa es A. Las Condes 14791, Lo Barnechea

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario ingresa a la PDP de 000000000000674797-UN.

**Resultado esperado**

El botón "Agregar" aparece deshabilitado, se muestra "Este producto no esta disponible para tu dirección" y no se informa disponibilidad en otras tiendas.

**Resultado obtenido**

La PDP muestra «Agregar» habilitado y no el mensaje «Este producto no esta disponible para tu dirección».

**Observación**

Causa: el SKU 000000000000674797-UN tiene stock (Agregar habilitado, sin etiqueta de no disponible) con la dirección A. Las Condes 14791, Lo Barnechea, donde la precondición dice que no tiene; se comporta igual en ambas tiendas. Acción: cargar un SKU y un par de direcciones cuyas tiendas difieran realmente en stock, y re-ejecutar.

**Evidencia**

![Paso 1 — pdp en la tienda sin stock](<B2C-61 Evidencias/TC-B2C61-D-013-p01-pdp-en-la-tienda-sin-stock.png>)

---

### TC-B2C61-D-014 - Verificar que solo se muestran las promociones vigentes de la tienda activa [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-09 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-61.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: PDP
- La dirección activa es A. Las Condes 14791, Lo Barnechea
- 000000000000652899-UN tiene una promoción vigente solo para la tienda de Calle Uno 23, La Florida

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario ingresa a la PDP de 000000000000652899-UN.

**Resultado esperado**

000000000000652899-UN muestra su precio base, sin el descuento de la promoción de la tienda A.

**Resultado obtenido**

La PDP muestra solo el precio base ($990).

**Observación**

Causa: la precondición «000000000000652899-UN tiene promoción vigente solo en la tienda de Calle Uno 23, La Florida» no se verifica: el SKU muestra $990 sin descuento en ambas tiendas (ver 015), así que el precio base observado no prueba nada. Acción: cargar en BM una promoción vigente solo para la tienda A sobre el SKU y re-ejecutar.

**Evidencia**

![Paso 1 — pdp en la tienda sin la promocion](<B2C-61 Evidencias/TC-B2C61-D-014-p01-pdp-en-la-tienda-sin-la-promocion.png>)

---

### TC-B2C61-D-015 - Verificar que la promoción de la tienda activa se refleja en el precio con descuento [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-09 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-61.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: PDP
- La dirección activa es Calle Uno 23, La Florida
- 000000000000652899-UN tiene una promoción vigente solo para la tienda de Calle Uno 23, La Florida

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario ingresa a la PDP de 000000000000652899-UN.

**Resultado esperado**

000000000000652899-UN muestra el precio con el descuento de la promoción de la tienda A.

**Resultado obtenido**

La PDP muestra un único precio ($990), sin descuento.

**Observación**

Causa: 000000000000652899-UN no muestra promoción en la tienda de Calle Uno 23, La Florida (precio único $990), igual que en la otra tienda; la promoción declarada no existe o no está vigente en el ambiente. Acción: cargar en BM una promoción vigente solo para la tienda A sobre el SKU y re-ejecutar.

**Evidencia**

![Paso 1 — pdp en la tienda con la promocion](<B2C-61 Evidencias/TC-B2C61-D-015-p01-pdp-en-la-tienda-con-la-promocion.png>)

---

### TC-B2C61-D-016 - Verificar que un usuario sin Unipay ve el ahorro potencial de la promoción Unipay [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-61.spec.ts:229 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: PDP
- La dirección activa es Calle Uno 23, La Florida
- El usuario no tiene Unipay contratado

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario ingresa a la PDP de 000000000000661945-UN.

**Resultado esperado**

Se muestra el precio Unipay de 000000000000661945-UN como ahorro potencial.

**Resultado obtenido**

La PDP muestra la promoción % Unipay con el precio Unipay como ahorro potencial junto al precio normal.

**Evidencia**

![Paso 1 — pdp con precio unipay](<B2C-61 Evidencias/TC-B2C61-D-016-p01-pdp-con-precio-unipay.png>)

---

### TC-B2C61-M-001 - Verificar que al setear una dirección se muestra el contenido del segmento de su tienda [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_B} para la tienda de A. Las Conder 14791, Lo Barnechea y QA B2C-61 por defecto

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección Calle Uno 23, La Florida, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.

**Resultado esperado**

La landing muestra Vilanova 122, Las Condes, sin interrumpir el flujo del usuario al setear la dirección.

**Resultado obtenido**

No ejecutado: falta data de prueba.

**Observación**

Causa: token(s) en TBD en el Excel de data: {CONTENIDO_SEGMENTO_B}, {PD_LANDING_SEGMENTO_URL}. Acción: cargar el dato en el Excel de data (responsable de la data de prueba) y re-ejecutar con --only.

---

### TC-B2C61-M-002 - Verificar que si el segmento de la tienda no tiene contenido se muestra el contenido por defecto [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- La tienda de {DIRECCION_TIENDA_SIN_SEGMENTO} no tiene segmento ni contenido configurado en BM
- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_B} para la tienda de A. Las Conder 14791, Lo Barnechea y QA B2C-61 por defecto

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_TIENDA_SIN_SEGMENTO}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.

**Resultado esperado**

La landing muestra QA B2C-61.

**Resultado obtenido**

No ejecutado: falta data de prueba.

**Observación**

Causa: token(s) en TBD en el Excel de data: {CONTENIDO_SEGMENTO_B}, {DIRECCION_TIENDA_SIN_SEGMENTO}, {PD_LANDING_SEGMENTO_URL}. Acción: cargar el dato en el Excel de data (responsable de la data de prueba) y re-ejecutar con --only.

---

### TC-B2C61-M-003 - Verificar que sin tienda asignada se muestra el contenido por defecto [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-09 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión nueva sin dirección ni tienda seteada
- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_B} para la tienda de A. Las Condes 14791, Lo Barnechea y QA B2C-61 por defecto

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.

**Resultado esperado**

La landing muestra QA B2C-61 y el Store Locator sigue sin tienda asignada.

**Resultado obtenido**

No se ejecutó: falta data de prueba.

**Observación**

Causa: {CONTENIDO_SEGMENTO_B} y {PD_LANDING_SEGMENTO_URL} están en TBD en el Excel de data. Acción: cargar la landing de segmentación y el contenido del segmento B (responsable de la data de prueba) y re-ejecutar con --only.

---

### TC-B2C61-M-004 - Verificar que al cambiar a otra tienda el contenido cambia en la siguiente carga de página [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-09 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- La dirección activa es Calle Uno 23, La Florida
- El carro está vacío
- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_B} para la tienda de A. Las Condes 14791, Lo Barnechea y QA B2C-61 por defecto

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.
2. El sistema muestra Vilanova 122, Las Condes.
3. El usuario toca el Store Locator del header.
4. El usuario ingresa A. Las Condes 14791, Lo Barnechea y la confirma.
5. El usuario revisa la landing sin recargar.
6. El usuario vuelve a cargar la landing.

**Resultado esperado**

Sin recargar sigue Vilanova 122, Las Condes; al volver a cargar la landing se muestra {CONTENIDO_SEGMENTO_B}.

**Resultado obtenido**

No se ejecutó: falta data de prueba.

**Observación**

Causa: {CONTENIDO_SEGMENTO_B} y {PD_LANDING_SEGMENTO_URL} están en TBD en el Excel de data. Acción: cargar la landing de segmentación y el contenido del segmento B (responsable de la data de prueba) y re-ejecutar con --only.

---

### TC-B2C61-M-005 - Verificar que al cambiar a una dirección sin cobertura se activa Sin cobertura sin re-asignar segmento [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-09 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- La dirección activa es Calle Uno 23, La Florida
- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_B} para la tienda de A. Las Condes 14791, Lo Barnechea y QA B2C-61 por defecto

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección T-551, Futrono, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Aún no llegamos a esta dirección".
7. El usuario toca la X o cierra el modal.
8. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.

**Resultado esperado**

Se muestra el flujo Sin cobertura (B2C-123) y la landing sigue mostrando Vilanova 122, Las Condes.

**Resultado obtenido**

No se ejecutó: falta data de prueba.

**Observación**

Causa: {CONTENIDO_SEGMENTO_B} y {PD_LANDING_SEGMENTO_URL} están en TBD en el Excel de data. Acción: cargar la landing de segmentación y el contenido del segmento B (responsable de la data de prueba) y re-ejecutar con --only.

---

### TC-B2C61-M-006 - Verificar que el segmento del invitado persiste al navegar durante la sesión [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-09 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- La dirección Calle Uno 23, La Florida está seteada como invitado
- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_B} para la tienda de A. Las Condes 14791, Lo Barnechea y QA B2C-61 por defecto

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El usuario navega a una PLP y luego a la landing.
3. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.

**Resultado esperado**

La landing sigue mostrando Vilanova 122, Las Condes tras navegar.

**Resultado obtenido**

No se ejecutó: falta data de prueba.

**Observación**

Causa: {CONTENIDO_SEGMENTO_B} y {PD_LANDING_SEGMENTO_URL} están en TBD en el Excel de data. Acción: cargar la landing de segmentación y el contenido del segmento B (responsable de la data de prueba) y re-ejecutar con --only.

---

### TC-B2C61-M-007 - Verificar que el segmento del logueado persiste en su perfil durante la sesión [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-09 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com / Avatar1234.
- La dirección Calle Uno 23, La Florida está seteada en la cuenta
- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_B} para la tienda de A. Las Condes 14791, Lo Barnechea y QA B2C-61 por defecto

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El usuario navega a una PLP.
3. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.

**Resultado esperado**

La landing muestra Vilanova 122, Las Condes.

**Resultado obtenido**

No se ejecutó: falta data de prueba.

**Observación**

Causa: {CONTENIDO_SEGMENTO_B} y {PD_LANDING_SEGMENTO_URL} están en TBD en el Excel de data. Acción: cargar la landing de segmentación y el contenido del segmento B (responsable de la data de prueba) y re-ejecutar con --only.

---

### TC-B2C61-M-008 - Verificar que un producto con stock en la tienda activa se muestra disponible [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-61.spec.ts:126 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: PDP
- La dirección activa es Calle Uno 23, La Florida
- 000000000000674797-UN tiene stock en la tienda de Calle Uno 23, La Florida

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario ingresa a la PDP de 000000000000674797-UN.

**Resultado esperado**

000000000000674797-UN se muestra disponible con el botón "Agregar" habilitado.

**Resultado obtenido**

El producto declarado se muestra disponible en la tienda activa: botón «Agregar» visible y habilitado, sin etiqueta de no disponible.

**Evidencia**

![Paso 1 — pdp con agregar habilitado](<B2C-61 Evidencias/TC-B2C61-M-008-p01-pdp-con-agregar-habilitado.png>)

---

### TC-B2C61-M-009 - Verificar que un producto sin stock en la tienda activa se muestra no disponible y sin Agregar [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-09 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | tests/B2C-61.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: SRP
- La dirección activa es A. Las Condes 14791, Lo Barnechea
- 000000000000674797-UN no tiene stock en la tienda de A. Las Condes 14791, Lo Barnechea

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario busca Lavalozas Quix.
2. El sistema muestra resultados con el shelf de 000000000000674797-UN.

**Resultado esperado**

000000000000674797-UN se muestra con etiqueta visible de no disponible y sin opción de agregar al carro.

**Resultado obtenido**

El shelf del SKU en la SRP se muestra con «Agregar» y sin etiqueta de no disponible.

**Observación**

Causa: el SKU 000000000000674797-UN tiene stock (Agregar habilitado, sin etiqueta de no disponible) con la dirección A. Las Condes 14791, Lo Barnechea, donde la precondición dice que no tiene; se comporta igual en ambas tiendas. Acción: cargar un SKU y un par de direcciones cuyas tiendas difieran realmente en stock, y re-ejecutar.

**Evidencia**

![Paso 2 — resultados con el shelf del sku](<B2C-61 Evidencias/TC-B2C61-M-009-p02-resultados-con-el-shelf-del-sku.png>)

![Estado al fallar la aserción](<B2C-61 Evidencias/TC-B2C61-M-009.png>)

---

### TC-B2C61-M-010 - Verificar que un producto inactivo para la tienda activa no aparece en catálogo ni en PDP [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-09 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | tests/B2C-61.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: SRP
- La dirección activa es Calle Uno 23, La Florida
- 000000000400254005-UN está inactivo para la tienda de Calle Uno 23, La Florida

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario busca 000000000400254005-UN.
2. El usuario ingresa a la PDP de 000000000400254005-UN.

**Resultado esperado**

000000000400254005-UN no aparece en los resultados y su PDP no se muestra.

**Resultado obtenido**

El SKU aparece en los resultados (1 producto) y su PDP se muestra con «Pronto disponible».

**Observación**

Causa: con Calle Uno 23, La Florida activa, 000000000400254005-UN aparece en la SRP y su PDP se abre con «Pronto disponible» y «Ver similares» (presentación de producto sin stock, no de producto inactivo); desde el storefront no se puede confirmar que esté inactivo para esa tienda. Acción: confirmar en BM que el SKU está offline/inactivo para la tienda de Calle Uno 23, La Florida (o cargar uno que lo esté) y re-ejecutar.

**Evidencia**

![Paso 0 — direccion de la tienda a aplicada](<B2C-61 Evidencias/TC-B2C61-M-010-p00-direccion-de-la-tienda-a-aplicada.png>)

![Paso 1 — resultados de la busqueda del sku](<B2C-61 Evidencias/TC-B2C61-M-010-p01-resultados-de-la-busqueda-del-sku.png>)

![Paso 2 — pdp del sku](<B2C-61 Evidencias/TC-B2C61-M-010-p02-pdp-del-sku.png>)

![Estado al fallar la aserción](<B2C-61 Evidencias/TC-B2C61-M-010.png>)

---

### TC-B2C61-M-011 - Verificar que al cambiar de tienda un producto sin stock en la nueva tienda queda no disponible [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-09 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | tests/B2C-61.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- La dirección activa es Calle Uno 23, La Florida
- El carro contiene 000000000000674797-UN

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección A. Las Condes 14791, Lo Barnechea, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Algunos productos podrían agotarse" (B2C-122).
7. El usuario toca "Sí, continuar".
8. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.

**Resultado esperado**

Se muestra el modal de B2C-122 y, tras continuar, 000000000000674797-UN queda como no disponible para la nueva tienda.

**Resultado obtenido**

Se mostró el modal de B2C-122; tras continuar el SKU sigue disponible en el carro.

**Observación**

Causa: el SKU 000000000000674797-UN tiene stock (Agregar habilitado, sin etiqueta de no disponible) con la dirección A. Las Condes 14791, Lo Barnechea, donde la precondición dice que no tiene; se comporta igual en ambas tiendas: tras confirmar la nueva dirección se muestra el modal «Algunos productos podrían agotarse», pero el SKU sigue disponible porque tiene stock en la nueva tienda. Acción: cargar un SKU y un par de direcciones cuyas tiendas difieran realmente en stock, y re-ejecutar.

**Evidencia**

![Paso 0 — sku en el carro con la tienda de origen](<B2C-61 Evidencias/TC-B2C61-M-011-p00-sku-en-el-carro-con-la-tienda-de-origen.png>)

![Estado al fallar la aserción](<B2C-61 Evidencias/TC-B2C61-M-011.png>)

---

### TC-B2C61-M-012 - Verificar que al cambiar de tienda un producto que ahora tiene stock se habilita [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-09 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | tests/B2C-61.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- La dirección activa es A. Las Condes 14791, Lo Barnechea, donde 000000000000674797-UN no tiene stock
- El carro está vacío

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección Calle Uno 23, La Florida, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El usuario ingresa a la PDP de 000000000000674797-UN.

**Resultado esperado**

000000000000674797-UN se muestra disponible con "Agregar" habilitado.

**Resultado obtenido**

En la dirección de partida el SKU ya muestra «Agregar» habilitado.

**Observación**

Causa: precondición no disponible: el SKU 000000000000674797-UN tiene stock (Agregar habilitado, sin etiqueta de no disponible) con la dirección A. Las Condes 14791, Lo Barnechea, donde la precondición dice que no tiene; se comporta igual en ambas tiendas. Acción: cargar un SKU y un par de direcciones cuyas tiendas difieran realmente en stock, y re-ejecutar.

**Evidencia**

![Paso 0 — pdp en la tienda sin stock estado previo](<B2C-61 Evidencias/TC-B2C61-M-012-p00-pdp-en-la-tienda-sin-stock-estado-previo.png>)

---

### TC-B2C61-M-013 - Verificar que la PDP de un producto sin stock en la tienda activa deshabilita Agregar con mensaje [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-09 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | tests/B2C-61.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: PDP
- La dirección activa es A. Las Condes 14791, Lo Barnechea

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario ingresa a la PDP de 000000000000674797-UN.

**Resultado esperado**

El botón "Agregar" aparece deshabilitado, se muestra "Este producto no esta disponible para tu dirección" y no se informa disponibilidad en otras tiendas.

**Resultado obtenido**

La PDP muestra «Agregar» habilitado y no el mensaje «Este producto no esta disponible para tu dirección».

**Observación**

Causa: el SKU 000000000000674797-UN tiene stock (Agregar habilitado, sin etiqueta de no disponible) con la dirección A. Las Condes 14791, Lo Barnechea, donde la precondición dice que no tiene; se comporta igual en ambas tiendas. Acción: cargar un SKU y un par de direcciones cuyas tiendas difieran realmente en stock, y re-ejecutar.

**Evidencia**

![Paso 1 — pdp en la tienda sin stock](<B2C-61 Evidencias/TC-B2C61-M-013-p01-pdp-en-la-tienda-sin-stock.png>)

---

### TC-B2C61-M-014 - Verificar que solo se muestran las promociones vigentes de la tienda activa [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-09 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | tests/B2C-61.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: PDP
- La dirección activa es A. Las Condes 14791, Lo Barnechea
- 000000000000652899-UN tiene una promoción vigente solo para la tienda de Calle Uno 23, La Florida

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario ingresa a la PDP de 000000000000652899-UN.

**Resultado esperado**

000000000000652899-UN muestra su precio base, sin el descuento de la promoción de la tienda A.

**Resultado obtenido**

La PDP muestra solo el precio base ($990).

**Observación**

Causa: la precondición «000000000000652899-UN tiene promoción vigente solo en la tienda de Calle Uno 23, La Florida» no se verifica: el SKU muestra $990 sin descuento en ambas tiendas (ver 015), así que el precio base observado no prueba nada. Acción: cargar en BM una promoción vigente solo para la tienda A sobre el SKU y re-ejecutar.

**Evidencia**

![Paso 1 — pdp en la tienda sin la promocion](<B2C-61 Evidencias/TC-B2C61-M-014-p01-pdp-en-la-tienda-sin-la-promocion.png>)

---

### TC-B2C61-M-015 - Verificar que la promoción de la tienda activa se refleja en el precio con descuento [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-09 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | tests/B2C-61.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: PDP
- La dirección activa es Calle Uno 23, La Florida
- 000000000000652899-UN tiene una promoción vigente solo para la tienda de Calle Uno 23, La Florida

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario ingresa a la PDP de 000000000000652899-UN.

**Resultado esperado**

000000000000652899-UN muestra el precio con el descuento de la promoción de la tienda A.

**Resultado obtenido**

La PDP muestra un único precio ($990), sin descuento.

**Observación**

Causa: 000000000000652899-UN no muestra promoción en la tienda de Calle Uno 23, La Florida (precio único $990), igual que en la otra tienda; la promoción declarada no existe o no está vigente en el ambiente. Acción: cargar en BM una promoción vigente solo para la tienda A sobre el SKU y re-ejecutar.

**Evidencia**

![Paso 1 — pdp en la tienda con la promocion](<B2C-61 Evidencias/TC-B2C61-M-015-p01-pdp-en-la-tienda-con-la-promocion.png>)

---

### TC-B2C61-M-016 - Verificar que un usuario sin Unipay ve el ahorro potencial de la promoción Unipay [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-61.spec.ts:229 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: PDP
- La dirección activa es Calle Uno 23, La Florida
- El usuario no tiene Unipay contratado

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario ingresa a la PDP de 000000000000661945-UN.

**Resultado esperado**

Se muestra el precio Unipay de 000000000000661945-UN como ahorro potencial.

**Resultado obtenido**

La PDP muestra la promoción % Unipay con el precio Unipay como ahorro potencial junto al precio normal.

**Evidencia**

![Paso 1 — pdp con precio unipay](<B2C-61 Evidencias/TC-B2C61-M-016-p01-pdp-con-precio-unipay.png>)

---

### TC-B2C61-D-017 - Verificar que los datos de entrega seleccionados quedan asociados al basket con su warehouseId [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-09 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-61.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- Sesión nueva sin dirección ni tienda seteada
- El carro está vacío
- 000000000000675191-UN tiene stock en la tienda abastecedora de Calle Uno 23, La Florida (warehouseId 400)
- DevTools abierto en la pestaña Network, filtrando la request *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/customer/shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/abk0k1kXsWxHARxbs2xaYYxKs1/baskets

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección Av. Perú 760, Recoleta, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El usuario busca 000000000000675191-UN y hace clic en "Agregar".
7. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
8. El usuario revisa en DevTools la respuesta de *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/customer/shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/abk0k1kXsWxHARxbs2xaYYxKs1/baskets (basket): dirección de envío y warehouseId.
9. El usuario recarga https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
10. El usuario vuelve a revisar la respuesta de *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/customer/shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/abk0k1kXsWxHARxbs2xaYYxKs1/baskets.

**Resultado esperado**

El basket contiene 000000000000675191-UN y tiene asociados la dirección de envío Av. Perú 760, Recoleta y el warehouseId 400; tras recargar, el basket mantiene la misma dirección y warehouseId.

**Resultado obtenido**

En la SRP el SKU aparece con «Pronto disponible» y «Ver similares».

**Observación**

Causa: 000000000000675191-UN se muestra «Pronto disponible» (sin «Agregar») con la dirección Av. Perú 760, Recoleta, así que no se puede agregar al carro para revisar el basket. Acción: declarar un SKU con stock en la tienda de Av. Perú 760, Recoleta (o alinear la precondición, que habla de la tienda de Calle Uno 23, La Florida) y re-ejecutar.

**Evidencia**

![Paso 5 — direccion aplicada en el header](<B2C-61 Evidencias/TC-B2C61-D-017-p05-direccion-aplicada-en-el-header.png>)

![Estado al fallar la aserción](<B2C-61 Evidencias/TC-B2C61-D-017.png>)

---

### TC-B2C61-D-018 - Verificar que al cambiar a una tienda válida con cobertura y sin segmento configurado se aplica el contenido por defecto [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- La dirección activa es Calle Uno 23, La Florida
- El carro está vacío
- {DIRECCION_TIENDA_SIN_SEGMENTO} tiene cobertura y SLAs, y su tienda abastecedora (distinta a la de Calle Uno 23, La Florida) no tiene segmento configurado en BM
- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_B} para la tienda de A. Las Conder 14791, Lo Barnechea y QA B2C-61 por defecto

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.
2. El sistema muestra Vilanova 122, Las Condes.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_TIENDA_SIN_SEGMENTO}, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El usuario revisa que no se muestre el modal "Aún no llegamos a esta dirección" y que la dirección quede seteada.
7. El usuario vuelve a cargar la landing.

**Resultado esperado**

La dirección {DIRECCION_TIENDA_SIN_SEGMENTO} queda seteada sin pasar por el flujo Sin cobertura (B2C-123) y, al volver a cargar la landing, se muestra QA B2C-61 (fallback), no Vilanova 122, Las Condes.

**Resultado obtenido**

No ejecutado: falta data de prueba.

**Observación**

Causa: token(s) en TBD en el Excel de data: {CONTENIDO_SEGMENTO_B}, {DIRECCION_TIENDA_SIN_SEGMENTO}, {PD_LANDING_SEGMENTO_URL}. Acción: cargar el dato en el Excel de data (responsable de la data de prueba) y re-ejecutar con --only.

---

### TC-B2C61-M-017 - Verificar que los datos de entrega seleccionados quedan asociados al basket con su warehouseId [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-61.spec.ts:242 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión nueva sin dirección ni tienda seteada
- El carro está vacío
- 000000000000675191-UN tiene stock en la tienda abastecedora de Calle Uno 23, La Florida (warehouseId 400)
- DevTools abierto en la pestaña Network, filtrando la request (endpoint del basket del Excel de data)

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección Calle Uno 23, La Florida, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El usuario busca 000000000000675191-UN y toca "Agregar".
7. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
8. El usuario revisa en DevTools la respuesta de (endpoint del basket del Excel de data) (basket): dirección de envío y warehouseId.
9. El usuario recarga https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
10. El usuario vuelve a revisar la respuesta de (endpoint del basket del Excel de data).

**Resultado esperado**

El basket contiene 000000000000675191-UN y tiene asociados la dirección de envío Calle Uno 23, La Florida y el warehouseId 400; tras recargar, el basket mantiene la misma dirección y warehouseId.

**Resultado obtenido**

El basket contiene el SKU y la dirección de envío declarada; la tienda abastecedora asociada es la 581 y no aparece el warehouseId declarado (400).

**Observación**

Causa: el warehouseId declarado en el Excel de data no coincide con la tienda abastecedora que el ambiente asocia a la dirección (581); no es posible determinar si el dato está desactualizado o es un defecto. Acción: confirmar el warehouseId vigente de la dirección con el dueño de la data y re-ejecutar.

**Evidencia**

![Paso 5 — direccion aplicada en el header](<B2C-61 Evidencias/TC-B2C61-M-017-p05-direccion-aplicada-en-el-header.png>)

![Paso 6 — producto agregado](<B2C-61 Evidencias/TC-B2C61-M-017-p06-producto-agregado.png>)

![Paso 7 — carro con el producto](<B2C-61 Evidencias/TC-B2C61-M-017-p07-carro-con-el-producto.png>)

---

### TC-B2C61-M-018 - Verificar que al cambiar a una tienda válida con cobertura y sin segmento configurado se aplica el contenido por defecto [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- La dirección activa es Calle Uno 23, La Florida
- El carro está vacío
- {DIRECCION_TIENDA_SIN_SEGMENTO} tiene cobertura y SLAs, y su tienda abastecedora (distinta a la de Calle Uno 23, La Florida) no tiene segmento configurado en BM
- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_B} para la tienda de A. Las Conder 14791, Lo Barnechea y QA B2C-61 por defecto

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.
2. El sistema muestra Vilanova 122, Las Condes.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_TIENDA_SIN_SEGMENTO}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El usuario revisa que no se muestre el modal "Aún no llegamos a esta dirección" y que la dirección quede seteada.
7. El usuario vuelve a cargar la landing.

**Resultado esperado**

La dirección {DIRECCION_TIENDA_SIN_SEGMENTO} queda seteada sin pasar por el flujo Sin cobertura (B2C-123) y, al volver a cargar la landing, se muestra QA B2C-61 (fallback), no Vilanova 122, Las Condes.

**Resultado obtenido**

No ejecutado: falta data de prueba.

**Observación**

Causa: token(s) en TBD en el Excel de data: {CONTENIDO_SEGMENTO_B}, {DIRECCION_TIENDA_SIN_SEGMENTO}, {PD_LANDING_SEGMENTO_URL}. Acción: cargar el dato en el Excel de data (responsable de la data de prueba) y re-ejecutar con --only.

---

### TC-B2C61-D-019 - Verificar que un usuario sin dirección con productos en el carro no puede avanzar al pago [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-09 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-61.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Home
- Sesión iniciada con la cuenta vhchirinos+noaddress@avatar-global.com / (contraseña de la cuenta), sin direcciones guardadas
- Sin dirección ni tienda seteada en el Store Locator (navegación con la tienda por defecto)
- El carro está vacío

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El sistema carga el Home.
3. El usuario verifica que el Store Locator no tiene dirección ni tienda seteada.
4. El usuario busca 000000000000675191-UN y hace clic en "Agregar".
5. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
6. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
7. El usuario intenta avanzar al pago sin seleccionar dirección ni tienda.

**Resultado esperado**

El sistema no permite avanzar al pago: solicita seleccionar una dirección o tienda con cobertura (Store Locator) y no se puede completar la compra mientras no haya una dirección válida.

**Resultado obtenido**

Al tocar «Agregar» se abre «Elige tu método de entrega» con la dirección guardada Calle Uno 23; el carro queda vacío.

**Observación**

Causa: la cuenta vhchirinos+noaddress@avatar-global.com tiene una dirección guardada (Calle Uno 23, La Florida) y la precondición pide una cuenta sin direcciones guardadas; además, sin dirección activa «Agregar» abre el Store Locator y el carro queda vacío. Acción: eliminar las direcciones guardadas de la cuenta (o declarar otra sin direcciones) y re-ejecutar.

**Evidencia**

![Paso 3 — store locator sin direccion ni tienda](<B2C-61 Evidencias/TC-B2C61-D-019-p03-store-locator-sin-direccion-ni-tienda.png>)

![Paso 4 — producto agregado](<B2C-61 Evidencias/TC-B2C61-D-019-p04-producto-agregado.png>)

![Estado al fallar la aserción](<B2C-61 Evidencias/TC-B2C61-D-019.png>)

---

### TC-B2C61-M-019 - Verificar que un usuario sin dirección con productos en el carro no puede avanzar al pago [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-09 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | tests/B2C-61.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta vhchirinos+noaddress@avatar-global.com / (contraseña de la cuenta), sin direcciones guardadas
- Sin dirección ni tienda seteada en el Store Locator (navegación con la tienda por defecto)
- El carro está vacío

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El sistema carga el Home.
3. El usuario verifica que el Store Locator no tiene dirección ni tienda seteada.
4. El usuario busca 000000000000675191-UN y toca "Agregar".
5. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
6. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
7. El usuario intenta avanzar al pago sin seleccionar dirección ni tienda.

**Resultado esperado**

El sistema no permite avanzar al pago: solicita seleccionar una dirección o tienda con cobertura (Store Locator) y no se puede completar la compra mientras no haya una dirección válida.

**Resultado obtenido**

Al tocar «Agregar» se abre «Elige tu método de entrega» con la dirección guardada Calle Uno 23; el carro queda vacío.

**Observación**

Causa: la cuenta vhchirinos+noaddress@avatar-global.com tiene una dirección guardada (Calle Uno 23, La Florida) y la precondición pide una cuenta sin direcciones guardadas; además, sin dirección activa «Agregar» abre el Store Locator y el carro queda vacío. Acción: eliminar las direcciones guardadas de la cuenta (o declarar otra sin direcciones) y re-ejecutar.

**Evidencia**

![Paso 3 — store locator sin direccion ni tienda](<B2C-61 Evidencias/TC-B2C61-M-019-p03-store-locator-sin-direccion-ni-tienda.png>)

![Paso 4 — producto agregado](<B2C-61 Evidencias/TC-B2C61-M-019-p04-producto-agregado.png>)

![Estado al fallar la aserción](<B2C-61 Evidencias/TC-B2C61-M-019.png>)

---

### TC-B2C61-D-020 - Verificar que al pasar de retiro en tienda a despacho a domicilio se asigna el segmento de la tienda abastecedora de la dirección [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Home
- Sesión iniciada con la cuenta (cuenta del Excel de data)
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- El carro está vacío
- El método de entrega activo es Retiro en tienda en Unimarc Las Condes
- Calle Uno 23, La Florida es una dirección guardada de la cuenta, con cobertura y SLAs
- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_RETIRO} para el segmento de Unimarc Las Condes y QA B2C-61 por defecto

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.
2. El sistema muestra {CONTENIDO_SEGMENTO_RETIRO}.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega".
5. El usuario hace clic en la pestaña "Despacho a domicilio", elige la dirección guardada Calle Uno 23, La Florida y hace clic en "Confirmar".
6. El usuario vuelve a cargar la landing.

**Resultado esperado**

La dirección guardada Calle Uno 23, La Florida queda como método de entrega activo sin pedir OTP y, al volver a cargar la landing, se muestra Vilanova 122, Las Condes (segmento de la tienda abastecedora de la dirección).

**Resultado obtenido**

No ejecutado: falta data de prueba.

**Observación**

Causa: token(s) en TBD en el Excel de data: {PD_LANDING_SEGMENTO_URL}; token(s) sin fila en el Excel de data: {CONTENIDO_SEGMENTO_RETIRO}. Acción: cargar el dato en el Excel de data (responsable de la data de prueba) y re-ejecutar con --only.

---

### TC-B2C61-D-021 - Verificar que al pasar de despacho a domicilio a retiro en tienda se asigna el segmento de la tienda de retiro [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Home
- Sesión iniciada con la cuenta (cuenta del Excel de data)
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- El carro está vacío
- La dirección activa es Calle Uno 23, La Florida (despacho a domicilio)
- Unimarc Las Condes tiene cobertura y SLAs, y su tienda abastecedora es distinta a la de Calle Uno 23, La Florida
- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_RETIRO} para el segmento de Unimarc Las Condes y QA B2C-61 por defecto

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.
2. El sistema muestra Vilanova 122, Las Condes.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega".
5. El usuario hace clic en la pestaña "Retiro en tienda", elige Unimarc Las Condes y hace clic en "Confirmar".
6. El sistema muestra el modal "Autenticación requerida" (B2C-125).
7. El usuario ingresa el código OTP recibido y hace clic en "Continuar".
8. El usuario vuelve a cargar la landing.

**Resultado esperado**

Retiro en tienda en Unimarc Las Condes queda como método de entrega activo y, al volver a cargar la landing, se muestra {CONTENIDO_SEGMENTO_RETIRO} (segmento de la tienda de retiro), no Vilanova 122, Las Condes.

**Resultado obtenido**

No ejecutado: falta data de prueba.

**Observación**

Causa: token(s) en TBD en el Excel de data: {PD_LANDING_SEGMENTO_URL}; token(s) sin fila en el Excel de data: {CONTENIDO_SEGMENTO_RETIRO}. Acción: cargar el dato en el Excel de data (responsable de la data de prueba) y re-ejecutar con --only.

---

### TC-B2C61-D-022 - Verificar que con retiro en tienda el stock mostrado corresponde a la tienda de retiro [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Home
- Sesión iniciada con la cuenta (cuenta del Excel de data)
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- El carro está vacío
- El método de entrega activo es Retiro en tienda en Unimarc Las Condes
- {SKU_STOCK_SOLO_TIENDA_RETIRO_001} tiene stock en Unimarc Las Condes y no tiene stock en la tienda abastecedora de Calle Uno 23, La Florida

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ y busca {SKU_STOCK_SOLO_TIENDA_RETIRO_001}.
2. El sistema muestra el resultado de búsqueda.
3. El usuario hace clic en el producto.
4. El sistema carga la PDP.
5. El usuario revisa la disponibilidad del producto.

**Resultado esperado**

{SKU_STOCK_SOLO_TIENDA_RETIRO_001} se muestra disponible, con el botón "Agregar" habilitado, porque tiene stock en la tienda de retiro activa Unimarc Las Condes.

**Resultado obtenido**

No ejecutado: falta data de prueba.

**Observación**

Causa: token(s) sin fila en el Excel de data: {SKU_STOCK_SOLO_TIENDA_RETIRO_001}. Acción: cargar el dato en el Excel de data (responsable de la data de prueba) y re-ejecutar con --only.

---

### TC-B2C61-D-023 - Verificar que al elegir una tienda de retiro sin cobertura se activa Sin cobertura sin re-asignar segmento [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Home
- Sesión iniciada con la cuenta (cuenta del Excel de data)
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- El carro está vacío
- La dirección activa es Calle Uno 23, La Florida (despacho a domicilio)
- Unimarc Los Lagos II no tiene cobertura
- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_RETIRO} para el segmento de Unimarc Las Condes y QA B2C-61 por defecto

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.
2. El sistema muestra Vilanova 122, Las Condes.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega".
5. El usuario hace clic en la pestaña "Retiro en tienda", elige Unimarc Los Lagos II y hace clic en "Confirmar".
6. El sistema muestra el modal "Autenticación requerida" (B2C-125).
7. El usuario ingresa el código OTP recibido y hace clic en "Continuar".
8. El sistema muestra el modal "Aún no llegamos a esta dirección".
9. El usuario cierra el modal con la X.
10. El usuario vuelve a cargar la landing.

**Resultado esperado**

Se muestra el flujo Sin cobertura (B2C-123) y, al volver a cargar la landing, sigue mostrándose Vilanova 122, Las Condes: el segmento no se re-asigna.

**Resultado obtenido**

No ejecutado: falta data de prueba.

**Observación**

Causa: token(s) en TBD en el Excel de data: {PD_LANDING_SEGMENTO_URL}; token(s) sin fila en el Excel de data: {CONTENIDO_SEGMENTO_RETIRO}. Acción: cargar el dato en el Excel de data (responsable de la data de prueba) y re-ejecutar con --only.

---

### TC-B2C61-D-024 - Verificar que al continuar con una dirección de despacho sin horarios se asigna el segmento de su tienda abastecedora [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Home
- Sesión iniciada con la cuenta (cuenta del Excel de data)
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- El carro está vacío
- La dirección activa es Calle Uno 23, La Florida
- Av Libertador Gral Bernardo O'Higgins 1072, Maipú tiene cobertura y no tiene SLAs disponibles; su tienda abastecedora es distinta a la de Calle Uno 23, La Florida
- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_RETIRO} para el segmento de Unimarc Las Condes y QA B2C-61 por defecto
- En BM, el segmento de la tienda abastecedora de Av Libertador Gral Bernardo O'Higgins 1072, Maipú tiene el contenido {CONTENIDO_SEGMENTO_SIN_SLA}

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.
2. El sistema muestra Vilanova 122, Las Condes.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección Av Libertador Gral Bernardo O'Higgins 1072, Maipú, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El sistema muestra el modal "Autenticación requerida" (B2C-125).
7. El usuario ingresa el código OTP recibido y hace clic en "Continuar".
8. El sistema muestra el modal "Por ahora no hay horarios disponibles".
9. El usuario hace clic en "Continuar con esta dirección".
10. El usuario vuelve a cargar la landing.

**Resultado esperado**

Av Libertador Gral Bernardo O'Higgins 1072, Maipú queda seteada con el aviso "Dirección sin horarios disponibles" y, al volver a cargar la landing, se muestra {CONTENIDO_SEGMENTO_SIN_SLA} (segmento de su tienda abastecedora).

**Resultado obtenido**

No ejecutado: falta data de prueba.

**Observación**

Causa: token(s) en TBD en el Excel de data: {PD_LANDING_SEGMENTO_URL}; token(s) sin fila en el Excel de data: {CONTENIDO_SEGMENTO_RETIRO}, {CONTENIDO_SEGMENTO_SIN_SLA}. Acción: cargar el dato en el Excel de data (responsable de la data de prueba) y re-ejecutar con --only.

---

### TC-B2C61-D-025 - Verificar que al continuar con una tienda de retiro sin horarios se asigna el segmento de esa tienda [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Home
- Sesión iniciada con la cuenta (cuenta del Excel de data)
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- El carro está vacío
- La dirección activa es Calle Uno 23, La Florida (despacho a domicilio)
- {TIENDA_RETIRO_SIN_SLA} tiene cobertura y no tiene SLAs disponibles
- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_RETIRO} para el segmento de Unimarc Las Condes y QA B2C-61 por defecto
- En BM, el segmento de {TIENDA_RETIRO_SIN_SLA} tiene el contenido {CONTENIDO_SEGMENTO_TIENDA_SIN_SLA}

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.
2. El sistema muestra Vilanova 122, Las Condes.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega".
5. El usuario hace clic en la pestaña "Retiro en tienda", elige {TIENDA_RETIRO_SIN_SLA} y hace clic en "Confirmar".
6. El sistema muestra el modal "Autenticación requerida" (B2C-125).
7. El usuario ingresa el código OTP recibido y hace clic en "Continuar".
8. El sistema muestra el modal "Por ahora no hay horarios disponibles".
9. El usuario hace clic en "Continuar con esta dirección".
10. El usuario vuelve a cargar la landing.

**Resultado esperado**

Retiro en tienda en {TIENDA_RETIRO_SIN_SLA} queda seteado con el aviso "Dirección sin horarios disponibles" y, al volver a cargar la landing, se muestra {CONTENIDO_SEGMENTO_TIENDA_SIN_SLA} (segmento de la tienda de retiro).

**Resultado obtenido**

No ejecutado: falta data de prueba.

**Observación**

Causa: token(s) en TBD en el Excel de data: {PD_LANDING_SEGMENTO_URL}, {TIENDA_RETIRO_SIN_SLA}; token(s) sin fila en el Excel de data: {CONTENIDO_SEGMENTO_RETIRO}, {CONTENIDO_SEGMENTO_TIENDA_SIN_SLA}. Acción: cargar el dato en el Excel de data (responsable de la data de prueba) y re-ejecutar con --only.

---

### TC-B2C61-M-020 - Verificar que al pasar de retiro en tienda a despacho a domicilio se asigna el segmento de la tienda abastecedora de la dirección [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta (cuenta del Excel de data)
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- El carro está vacío
- El método de entrega activo es Retiro en tienda en Unimarc Las Condes
- Calle Uno 23, La Florida es una dirección guardada de la cuenta, con cobertura y SLAs
- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_RETIRO} para el segmento de Unimarc Las Condes y QA B2C-61 por defecto

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.
2. El sistema muestra {CONTENIDO_SEGMENTO_RETIRO}.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega".
5. El usuario toca la pestaña "Despacho a domicilio", elige la dirección guardada Calle Uno 23, La Florida y toca "Confirmar".
6. El usuario vuelve a cargar la landing.

**Resultado esperado**

La dirección guardada Calle Uno 23, La Florida queda como método de entrega activo sin pedir OTP y, al volver a cargar la landing, se muestra Vilanova 122, Las Condes (segmento de la tienda abastecedora de la dirección).

**Resultado obtenido**

No ejecutado: falta data de prueba.

**Observación**

Causa: token(s) en TBD en el Excel de data: {PD_LANDING_SEGMENTO_URL}; token(s) sin fila en el Excel de data: {CONTENIDO_SEGMENTO_RETIRO}. Acción: cargar el dato en el Excel de data (responsable de la data de prueba) y re-ejecutar con --only.

---

### TC-B2C61-M-021 - Verificar que al pasar de despacho a domicilio a retiro en tienda se asigna el segmento de la tienda de retiro [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta (cuenta del Excel de data)
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- El carro está vacío
- La dirección activa es Calle Uno 23, La Florida (despacho a domicilio)
- Unimarc Las Condes tiene cobertura y SLAs, y su tienda abastecedora es distinta a la de Calle Uno 23, La Florida
- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_RETIRO} para el segmento de Unimarc Las Condes y QA B2C-61 por defecto

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.
2. El sistema muestra Vilanova 122, Las Condes.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega".
5. El usuario toca la pestaña "Retiro en tienda", elige Unimarc Las Condes y toca "Confirmar".
6. El sistema muestra el modal "Autenticación requerida" (B2C-125).
7. El usuario ingresa el código OTP recibido y toca "Continuar".
8. El usuario vuelve a cargar la landing.

**Resultado esperado**

Retiro en tienda en Unimarc Las Condes queda como método de entrega activo y, al volver a cargar la landing, se muestra {CONTENIDO_SEGMENTO_RETIRO} (segmento de la tienda de retiro), no Vilanova 122, Las Condes.

**Resultado obtenido**

No ejecutado: falta data de prueba.

**Observación**

Causa: token(s) en TBD en el Excel de data: {PD_LANDING_SEGMENTO_URL}; token(s) sin fila en el Excel de data: {CONTENIDO_SEGMENTO_RETIRO}. Acción: cargar el dato en el Excel de data (responsable de la data de prueba) y re-ejecutar con --only.

---

### TC-B2C61-M-022 - Verificar que con retiro en tienda el stock mostrado corresponde a la tienda de retiro [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta (cuenta del Excel de data)
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- El carro está vacío
- El método de entrega activo es Retiro en tienda en Unimarc Las Condes
- {SKU_STOCK_SOLO_TIENDA_RETIRO_001} tiene stock en Unimarc Las Condes y no tiene stock en la tienda abastecedora de Calle Uno 23, La Florida

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ y busca {SKU_STOCK_SOLO_TIENDA_RETIRO_001}.
2. El sistema muestra el resultado de búsqueda.
3. El usuario hace clic en el producto.
4. El sistema carga la PDP.
5. El usuario revisa la disponibilidad del producto.

**Resultado esperado**

{SKU_STOCK_SOLO_TIENDA_RETIRO_001} se muestra disponible, con el botón "Agregar" habilitado, porque tiene stock en la tienda de retiro activa Unimarc Las Condes.

**Resultado obtenido**

No ejecutado: falta data de prueba.

**Observación**

Causa: token(s) sin fila en el Excel de data: {SKU_STOCK_SOLO_TIENDA_RETIRO_001}. Acción: cargar el dato en el Excel de data (responsable de la data de prueba) y re-ejecutar con --only.

---

### TC-B2C61-M-023 - Verificar que al elegir una tienda de retiro sin cobertura se activa Sin cobertura sin re-asignar segmento [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta (cuenta del Excel de data)
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- El carro está vacío
- La dirección activa es Calle Uno 23, La Florida (despacho a domicilio)
- Unimarc Los Lagos II no tiene cobertura
- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_RETIRO} para el segmento de Unimarc Las Condes y QA B2C-61 por defecto

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.
2. El sistema muestra Vilanova 122, Las Condes.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega".
5. El usuario toca la pestaña "Retiro en tienda", elige Unimarc Los Lagos II y toca "Confirmar".
6. El sistema muestra el modal "Autenticación requerida" (B2C-125).
7. El usuario ingresa el código OTP recibido y toca "Continuar".
8. El sistema muestra el modal "Aún no llegamos a esta dirección".
9. El usuario cierra el modal con la X.
10. El usuario vuelve a cargar la landing.

**Resultado esperado**

Se muestra el flujo Sin cobertura (B2C-123) y, al volver a cargar la landing, sigue mostrándose Vilanova 122, Las Condes: el segmento no se re-asigna.

**Resultado obtenido**

No ejecutado: falta data de prueba.

**Observación**

Causa: token(s) en TBD en el Excel de data: {PD_LANDING_SEGMENTO_URL}; token(s) sin fila en el Excel de data: {CONTENIDO_SEGMENTO_RETIRO}. Acción: cargar el dato en el Excel de data (responsable de la data de prueba) y re-ejecutar con --only.

---

### TC-B2C61-M-024 - Verificar que al continuar con una dirección de despacho sin horarios se asigna el segmento de su tienda abastecedora [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta (cuenta del Excel de data)
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- El carro está vacío
- La dirección activa es Calle Uno 23, La Florida
- Av Libertador Gral Bernardo O'Higgins 1072, Maipú tiene cobertura y no tiene SLAs disponibles; su tienda abastecedora es distinta a la de Calle Uno 23, La Florida
- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_RETIRO} para el segmento de Unimarc Las Condes y QA B2C-61 por defecto
- En BM, el segmento de la tienda abastecedora de Av Libertador Gral Bernardo O'Higgins 1072, Maipú tiene el contenido {CONTENIDO_SEGMENTO_SIN_SLA}

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.
2. El sistema muestra Vilanova 122, Las Condes.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección Av Libertador Gral Bernardo O'Higgins 1072, Maipú, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Autenticación requerida" (B2C-125).
7. El usuario ingresa el código OTP recibido y toca "Continuar".
8. El sistema muestra el modal "Por ahora no hay horarios disponibles".
9. El usuario toca "Continuar con esta dirección".
10. El usuario vuelve a cargar la landing.

**Resultado esperado**

Av Libertador Gral Bernardo O'Higgins 1072, Maipú queda seteada con el aviso "Dirección sin horarios disponibles" y, al volver a cargar la landing, se muestra {CONTENIDO_SEGMENTO_SIN_SLA} (segmento de su tienda abastecedora).

**Resultado obtenido**

No ejecutado: falta data de prueba.

**Observación**

Causa: token(s) en TBD en el Excel de data: {PD_LANDING_SEGMENTO_URL}; token(s) sin fila en el Excel de data: {CONTENIDO_SEGMENTO_RETIRO}, {CONTENIDO_SEGMENTO_SIN_SLA}. Acción: cargar el dato en el Excel de data (responsable de la data de prueba) y re-ejecutar con --only.

---

### TC-B2C61-M-025 - Verificar que al continuar con una tienda de retiro sin horarios se asigna el segmento de esa tienda [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta (cuenta del Excel de data)
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- El carro está vacío
- La dirección activa es Calle Uno 23, La Florida (despacho a domicilio)
- {TIENDA_RETIRO_SIN_SLA} tiene cobertura y no tiene SLAs disponibles
- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_RETIRO} para el segmento de Unimarc Las Condes y QA B2C-61 por defecto
- En BM, el segmento de {TIENDA_RETIRO_SIN_SLA} tiene el contenido {CONTENIDO_SEGMENTO_TIENDA_SIN_SLA}

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.
2. El sistema muestra Vilanova 122, Las Condes.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega".
5. El usuario toca la pestaña "Retiro en tienda", elige {TIENDA_RETIRO_SIN_SLA} y toca "Confirmar".
6. El sistema muestra el modal "Autenticación requerida" (B2C-125).
7. El usuario ingresa el código OTP recibido y toca "Continuar".
8. El sistema muestra el modal "Por ahora no hay horarios disponibles".
9. El usuario toca "Continuar con esta dirección".
10. El usuario vuelve a cargar la landing.

**Resultado esperado**

Retiro en tienda en {TIENDA_RETIRO_SIN_SLA} queda seteado con el aviso "Dirección sin horarios disponibles" y, al volver a cargar la landing, se muestra {CONTENIDO_SEGMENTO_TIENDA_SIN_SLA} (segmento de la tienda de retiro).

**Resultado obtenido**

No ejecutado: falta data de prueba.

**Observación**

Causa: token(s) en TBD en el Excel de data: {PD_LANDING_SEGMENTO_URL}, {TIENDA_RETIRO_SIN_SLA}; token(s) sin fila en el Excel de data: {CONTENIDO_SEGMENTO_RETIRO}, {CONTENIDO_SEGMENTO_TIENDA_SIN_SLA}. Acción: cargar el dato en el Excel de data (responsable de la data de prueba) y re-ejecutar con --only.

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
  "suite": "B2C-61",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-61 Test Cases.xlsx",
  "title": "B2C-61 - Store Locator: disponibilidad y promociones por tienda - Evidencias QA",
  "updated_at": "2026-11-09"
 },
 "history": {
  "2026-10-29": [
   "TC-B2C61-D-001",
   "TC-B2C61-D-002",
   "TC-B2C61-D-003",
   "TC-B2C61-D-004",
   "TC-B2C61-D-005",
   "TC-B2C61-D-006",
   "TC-B2C61-D-007",
   "TC-B2C61-D-008",
   "TC-B2C61-D-009",
   "TC-B2C61-D-010",
   "TC-B2C61-D-011",
   "TC-B2C61-D-012",
   "TC-B2C61-D-013",
   "TC-B2C61-D-014",
   "TC-B2C61-D-015",
   "TC-B2C61-D-016",
   "TC-B2C61-D-017",
   "TC-B2C61-D-018",
   "TC-B2C61-D-019",
   "TC-B2C61-D-020",
   "TC-B2C61-D-021",
   "TC-B2C61-D-022",
   "TC-B2C61-D-023",
   "TC-B2C61-D-024",
   "TC-B2C61-D-025",
   "TC-B2C61-M-001",
   "TC-B2C61-M-002",
   "TC-B2C61-M-003",
   "TC-B2C61-M-004",
   "TC-B2C61-M-005",
   "TC-B2C61-M-006",
   "TC-B2C61-M-007",
   "TC-B2C61-M-008",
   "TC-B2C61-M-009",
   "TC-B2C61-M-010",
   "TC-B2C61-M-011",
   "TC-B2C61-M-012",
   "TC-B2C61-M-013",
   "TC-B2C61-M-014",
   "TC-B2C61-M-015",
   "TC-B2C61-M-016",
   "TC-B2C61-M-017",
   "TC-B2C61-M-018",
   "TC-B2C61-M-019",
   "TC-B2C61-M-020",
   "TC-B2C61-M-021",
   "TC-B2C61-M-022",
   "TC-B2C61-M-023",
   "TC-B2C61-M-024",
   "TC-B2C61-M-025"
  ],
  "2026-11-09": [
   "TC-B2C61-D-001",
   "TC-B2C61-D-006",
   "TC-B2C61-D-007",
   "TC-B2C61-D-009",
   "TC-B2C61-D-010",
   "TC-B2C61-D-011",
   "TC-B2C61-D-012",
   "TC-B2C61-D-013",
   "TC-B2C61-D-014",
   "TC-B2C61-D-015",
   "TC-B2C61-D-017",
   "TC-B2C61-D-019",
   "TC-B2C61-M-003",
   "TC-B2C61-M-004",
   "TC-B2C61-M-005",
   "TC-B2C61-M-006",
   "TC-B2C61-M-007",
   "TC-B2C61-M-009",
   "TC-B2C61-M-010",
   "TC-B2C61-M-011",
   "TC-B2C61-M-012",
   "TC-B2C61-M-013",
   "TC-B2C61-M-014",
   "TC-B2C61-M-015",
   "TC-B2C61-M-019"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-11-09",
   "expected": "La landing muestra Vilanova 122, Las Condes, sin interrumpir el flujo del usuario al setear la dirección.",
   "form_factor": "desktop",
   "id": "TC-B2C61-D-001",
   "name": "Verificar que al setear una dirección se muestra el contenido del segmento de su tienda [Desktop] [Guest]",
   "observation": "Causa: {CONTENIDO_SEGMENTO_B} y {PD_LANDING_SEGMENTO_URL} están en TBD en el Excel de data. Acción: cargar la landing de segmentación y el contenido del segmento B (responsable de la data de prueba) y re-ejecutar con -\u002donly.",
   "observed": "No se ejecutó: falta data de prueba.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_B} para la tienda de A. Las Condes 14791, Lo Barnechea y QA B2C-61 por defecto",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección Calle Uno 23, La Florida, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-29",
   "expected": "La landing muestra QA B2C-61.",
   "form_factor": "desktop",
   "id": "TC-B2C61-D-002",
   "name": "Verificar que si el segmento de la tienda no tiene contenido se muestra el contenido por defecto [Desktop] [Guest]",
   "observation": "Causa: token(s) en TBD en el Excel de data: {CONTENIDO_SEGMENTO_B}, {DIRECCION_TIENDA_SIN_SEGMENTO}, {PD_LANDING_SEGMENTO_URL}. Acción: cargar el dato en el Excel de data (responsable de la data de prueba) y re-ejecutar con -\u002donly.",
   "observed": "No ejecutado: falta data de prueba.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- La tienda de {DIRECCION_TIENDA_SIN_SEGMENTO} no tiene segmento ni contenido configurado en BM\n- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_B} para la tienda de A. Las Conder 14791, Lo Barnechea y QA B2C-61 por defecto",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_TIENDA_SIN_SEGMENTO}, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-29",
   "expected": "La landing muestra QA B2C-61 y el Store Locator sigue sin tienda asignada.",
   "form_factor": "desktop",
   "id": "TC-B2C61-D-003",
   "name": "Verificar que sin tienda asignada se muestra el contenido por defecto [Desktop] [Guest]",
   "observation": "Causa: token(s) en TBD en el Excel de data: {CONTENIDO_SEGMENTO_B}, {PD_LANDING_SEGMENTO_URL}. Acción: cargar el dato en el Excel de data (responsable de la data de prueba) y re-ejecutar con -\u002donly.",
   "observed": "No ejecutado: falta data de prueba.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión nueva sin dirección ni tienda seteada\n- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_B} para la tienda de A. Las Conder 14791, Lo Barnechea y QA B2C-61 por defecto",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-29",
   "expected": "Sin recargar sigue Vilanova 122, Las Condes; al volver a cargar la landing se muestra {CONTENIDO_SEGMENTO_B}.",
   "form_factor": "desktop",
   "id": "TC-B2C61-D-004",
   "name": "Verificar que al cambiar a otra tienda el contenido cambia en la siguiente carga de página [Desktop] [Guest]",
   "observation": "Causa: token(s) en TBD en el Excel de data: {CONTENIDO_SEGMENTO_B}, {PD_LANDING_SEGMENTO_URL}. Acción: cargar el dato en el Excel de data (responsable de la data de prueba) y re-ejecutar con -\u002donly.",
   "observed": "No ejecutado: falta data de prueba.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- La dirección activa es Calle Uno 23, La Florida\n- El carro está vacío\n- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_B} para la tienda de A. Las Conder 14791, Lo Barnechea y QA B2C-61 por defecto",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.\n2. El sistema muestra Vilanova 122, Las Condes.\n3. El usuario hace clic en el Store Locator del header.\n4. El usuario ingresa A. Las Conder 14791, Lo Barnechea y la confirma.\n5. El usuario revisa la landing sin recargar.\n6. El usuario vuelve a cargar la landing.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-29",
   "expected": "Se muestra el flujo Sin cobertura (B2C-123) y la landing sigue mostrando Vilanova 122, Las Condes.",
   "form_factor": "desktop",
   "id": "TC-B2C61-D-005",
   "name": "Verificar que al cambiar a una dirección sin cobertura se activa Sin cobertura sin re-asignar segmento [Desktop] [Guest]",
   "observation": "Causa: token(s) en TBD en el Excel de data: {CONTENIDO_SEGMENTO_B}, {PD_LANDING_SEGMENTO_URL}. Acción: cargar el dato en el Excel de data (responsable de la data de prueba) y re-ejecutar con -\u002donly.",
   "observed": "No ejecutado: falta data de prueba.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- La dirección activa es Calle Uno 23, La Florida\n- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_B} para la tienda de A. Las Conder 14791, Lo Barnechea y QA B2C-61 por defecto",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección T-551, Futrono, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El sistema muestra el modal \"Aún no llegamos a esta dirección\".\n7. El usuario hace clic en la X o cierra el modal.\n8. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-09",
   "expected": "La landing sigue mostrando Vilanova 122, Las Condes tras navegar.",
   "form_factor": "desktop",
   "id": "TC-B2C61-D-006",
   "name": "Verificar que el segmento del invitado persiste al navegar durante la sesión [Desktop] [Guest]",
   "observation": "Causa: {CONTENIDO_SEGMENTO_B} y {PD_LANDING_SEGMENTO_URL} están en TBD en el Excel de data. Acción: cargar la landing de segmentación y el contenido del segmento B (responsable de la data de prueba) y re-ejecutar con -\u002donly.",
   "observed": "No se ejecutó: falta data de prueba.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- La dirección Calle Uno 23, La Florida está seteada como invitado\n- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_B} para la tienda de A. Las Condes 14791, Lo Barnechea y QA B2C-61 por defecto",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El usuario navega a una PLP y luego a la landing.\n3. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-09",
   "expected": "La landing muestra Vilanova 122, Las Condes.",
   "form_factor": "desktop",
   "id": "TC-B2C61-D-007",
   "name": "Verificar que el segmento del logueado persiste en su perfil durante la sesión [Desktop] [Logueado]",
   "observation": "Causa: {CONTENIDO_SEGMENTO_B} y {PD_LANDING_SEGMENTO_URL} están en TBD en el Excel de data. Acción: cargar la landing de segmentación y el contenido del segmento B (responsable de la data de prueba) y re-ejecutar con -\u002donly.",
   "observed": "No se ejecutó: falta data de prueba.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com / Avatar1234.\n- La dirección Calle Uno 23, La Florida está seteada en la cuenta\n- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_B} para la tienda de A. Las Condes 14791, Lo Barnechea y QA B2C-61 por defecto",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El usuario navega a una PLP.\n3. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-29",
   "expected": "000000000000674797-UN se muestra disponible con el botón \"Agregar\" habilitado.",
   "form_factor": "desktop",
   "id": "TC-B2C61-D-008",
   "name": "Verificar que un producto con stock en la tienda activa se muestra disponible [Desktop] [Guest]",
   "observed": "El producto declarado se muestra disponible en la tienda activa: botón «Agregar» visible y habilitado, sin etiqueta de no disponible.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: PDP\n- La dirección activa es Calle Uno 23, La Florida\n- 000000000000674797-UN tiene stock en la tienda de Calle Uno 23, La Florida",
   "screenshots": [
    {
     "caption": "Paso 1 — pdp con agregar habilitado",
     "file": "TC-B2C61-D-008-p01-pdp-con-agregar-habilitado.png"
    }
   ],
   "spec": "tests/B2C-61.spec.ts:126",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a la PDP de 000000000000674797-UN.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-09",
   "expected": "000000000000674797-UN se muestra con etiqueta visible de no disponible y sin opción de agregar al carro.",
   "form_factor": "desktop",
   "id": "TC-B2C61-D-009",
   "name": "Verificar que un producto sin stock en la tienda activa se muestra no disponible y sin Agregar [Desktop] [Guest]",
   "observation": "Causa: el SKU 000000000000674797-UN tiene stock (Agregar habilitado, sin etiqueta de no disponible) con la dirección A. Las Condes 14791, Lo Barnechea, donde la precondición dice que no tiene; se comporta igual en ambas tiendas. Acción: cargar un SKU y un par de direcciones cuyas tiendas difieran realmente en stock, y re-ejecutar.",
   "observed": "El shelf del SKU en la SRP se muestra con «Agregar» y sin etiqueta de no disponible.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: SRP\n- La dirección activa es A. Las Condes 14791, Lo Barnechea\n- 000000000000674797-UN no tiene stock en la tienda de A. Las Condes 14791, Lo Barnechea",
   "screenshots": [
    {
     "caption": "Paso 2 — resultados con el shelf del sku",
     "file": "TC-B2C61-D-009-p02-resultados-con-el-shelf-del-sku.png"
    },
    {
     "caption": "Estado al fallar la aserción",
     "file": "TC-B2C61-D-009.png"
    }
   ],
   "spec": "tests/B2C-61.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario busca Lavalozas Quix.\n2. El sistema muestra resultados con el shelf de 000000000000674797-UN.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-09",
   "expected": "000000000400254005-UN no aparece en los resultados y su PDP no se muestra.",
   "form_factor": "desktop",
   "id": "TC-B2C61-D-010",
   "name": "Verificar que un producto inactivo para la tienda activa no aparece en catálogo ni en PDP [Desktop] [Guest]",
   "observation": "Causa: con Calle Uno 23, La Florida activa, 000000000400254005-UN aparece en la SRP y su PDP se abre con «Pronto disponible» y «Ver similares» (presentación de producto sin stock, no de producto inactivo); desde el storefront no se puede confirmar que esté inactivo para esa tienda. Acción: confirmar en BM que el SKU está offline/inactivo para la tienda de Calle Uno 23, La Florida (o cargar uno que lo esté) y re-ejecutar.",
   "observed": "El SKU aparece en los resultados (1 producto) y su PDP se muestra con «Pronto disponible».",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: SRP\n- La dirección activa es Calle Uno 23, La Florida\n- 000000000400254005-UN está inactivo para la tienda de Calle Uno 23, La Florida",
   "screenshots": [
    {
     "caption": "Paso 0 — direccion de la tienda a aplicada",
     "file": "TC-B2C61-D-010-p00-direccion-de-la-tienda-a-aplicada.png"
    },
    {
     "caption": "Paso 1 — resultados de la busqueda del sku",
     "file": "TC-B2C61-D-010-p01-resultados-de-la-busqueda-del-sku.png"
    },
    {
     "caption": "Paso 2 — pdp del sku",
     "file": "TC-B2C61-D-010-p02-pdp-del-sku.png"
    },
    {
     "caption": "Estado al fallar la aserción",
     "file": "TC-B2C61-D-010.png"
    }
   ],
   "spec": "tests/B2C-61.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario busca 000000000400254005-UN.\n2. El usuario ingresa a la PDP de 000000000400254005-UN.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-09",
   "expected": "Se muestra el modal de B2C-122 y, tras continuar, 000000000000674797-UN queda como no disponible para la nueva tienda.",
   "form_factor": "desktop",
   "id": "TC-B2C61-D-011",
   "name": "Verificar que al cambiar de tienda un producto sin stock en la nueva tienda queda no disponible [Desktop] [Guest]",
   "observation": "Causa: el SKU 000000000000674797-UN tiene stock (Agregar habilitado, sin etiqueta de no disponible) con la dirección A. Las Condes 14791, Lo Barnechea, donde la precondición dice que no tiene; se comporta igual en ambas tiendas: tras confirmar la nueva dirección se muestra el modal «Algunos productos podrían agotarse», pero el SKU sigue disponible porque tiene stock en la nueva tienda. Acción: cargar un SKU y un par de direcciones cuyas tiendas difieran realmente en stock, y re-ejecutar.",
   "observed": "Se mostró el modal de B2C-122; tras continuar el SKU sigue disponible en el carro.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- La dirección activa es Calle Uno 23, La Florida\n- El carro contiene 000000000000674797-UN",
   "screenshots": [
    {
     "caption": "Paso 0 — sku en el carro con la tienda de origen",
     "file": "TC-B2C61-D-011-p00-sku-en-el-carro-con-la-tienda-de-origen.png"
    },
    {
     "caption": "Paso 6 — modal algunos productos podrian agotarse",
     "file": "TC-B2C61-D-011-p06-modal-algunos-productos-podrian-agotarse.png"
    },
    {
     "caption": "Paso 8 — carro tras el cambio de tienda",
     "file": "TC-B2C61-D-011-p08-carro-tras-el-cambio-de-tienda.png"
    },
    {
     "caption": "Estado al fallar la aserción",
     "file": "TC-B2C61-D-011.png"
    }
   ],
   "spec": "tests/B2C-61.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección A. Las Condes 14791, Lo Barnechea, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El sistema muestra el modal \"Algunos productos podrían agotarse\" (B2C-122).\n7. El usuario hace clic en \"Sí, continuar\".\n8. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-09",
   "expected": "000000000000674797-UN se muestra disponible con \"Agregar\" habilitado.",
   "form_factor": "desktop",
   "id": "TC-B2C61-D-012",
   "name": "Verificar que al cambiar de tienda un producto que ahora tiene stock se habilita [Desktop] [Guest]",
   "observation": "Causa: precondición no disponible: el SKU 000000000000674797-UN tiene stock (Agregar habilitado, sin etiqueta de no disponible) con la dirección A. Las Condes 14791, Lo Barnechea, donde la precondición dice que no tiene; se comporta igual en ambas tiendas. Acción: cargar un SKU y un par de direcciones cuyas tiendas difieran realmente en stock, y re-ejecutar.",
   "observed": "En la dirección de partida el SKU ya muestra «Agregar» habilitado.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- La dirección activa es A. Las Condes 14791, Lo Barnechea, donde 000000000000674797-UN no tiene stock\n- El carro está vacío",
   "screenshots": [
    {
     "caption": "Paso 0 — pdp en la tienda sin stock estado previo",
     "file": "TC-B2C61-D-012-p00-pdp-en-la-tienda-sin-stock-estado-previo.png"
    }
   ],
   "spec": "tests/B2C-61.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección Calle Uno 23, La Florida, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El usuario ingresa a la PDP de 000000000000674797-UN.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-09",
   "expected": "El botón \"Agregar\" aparece deshabilitado, se muestra \"Este producto no esta disponible para tu dirección\" y no se informa disponibilidad en otras tiendas.",
   "form_factor": "desktop",
   "id": "TC-B2C61-D-013",
   "name": "Verificar que la PDP de un producto sin stock en la tienda activa deshabilita Agregar con mensaje [Desktop] [Guest]",
   "observation": "Causa: el SKU 000000000000674797-UN tiene stock (Agregar habilitado, sin etiqueta de no disponible) con la dirección A. Las Condes 14791, Lo Barnechea, donde la precondición dice que no tiene; se comporta igual en ambas tiendas. Acción: cargar un SKU y un par de direcciones cuyas tiendas difieran realmente en stock, y re-ejecutar.",
   "observed": "La PDP muestra «Agregar» habilitado y no el mensaje «Este producto no esta disponible para tu dirección».",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: PDP\n- La dirección activa es A. Las Condes 14791, Lo Barnechea",
   "screenshots": [
    {
     "caption": "Paso 1 — pdp en la tienda sin stock",
     "file": "TC-B2C61-D-013-p01-pdp-en-la-tienda-sin-stock.png"
    }
   ],
   "spec": "tests/B2C-61.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a la PDP de 000000000000674797-UN.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-09",
   "expected": "000000000000652899-UN muestra su precio base, sin el descuento de la promoción de la tienda A.",
   "form_factor": "desktop",
   "id": "TC-B2C61-D-014",
   "name": "Verificar que solo se muestran las promociones vigentes de la tienda activa [Desktop] [Guest]",
   "observation": "Causa: la precondición «000000000000652899-UN tiene promoción vigente solo en la tienda de Calle Uno 23, La Florida» no se verifica: el SKU muestra $990 sin descuento en ambas tiendas (ver 015), así que el precio base observado no prueba nada. Acción: cargar en BM una promoción vigente solo para la tienda A sobre el SKU y re-ejecutar.",
   "observed": "La PDP muestra solo el precio base ($990).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: PDP\n- La dirección activa es A. Las Condes 14791, Lo Barnechea\n- 000000000000652899-UN tiene una promoción vigente solo para la tienda de Calle Uno 23, La Florida",
   "screenshots": [
    {
     "caption": "Paso 1 — pdp en la tienda sin la promocion",
     "file": "TC-B2C61-D-014-p01-pdp-en-la-tienda-sin-la-promocion.png"
    }
   ],
   "spec": "tests/B2C-61.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a la PDP de 000000000000652899-UN.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-09",
   "expected": "000000000000652899-UN muestra el precio con el descuento de la promoción de la tienda A.",
   "form_factor": "desktop",
   "id": "TC-B2C61-D-015",
   "name": "Verificar que la promoción de la tienda activa se refleja en el precio con descuento [Desktop] [Guest]",
   "observation": "Causa: 000000000000652899-UN no muestra promoción en la tienda de Calle Uno 23, La Florida (precio único $990), igual que en la otra tienda; la promoción declarada no existe o no está vigente en el ambiente. Acción: cargar en BM una promoción vigente solo para la tienda A sobre el SKU y re-ejecutar.",
   "observed": "La PDP muestra un único precio ($990), sin descuento.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: PDP\n- La dirección activa es Calle Uno 23, La Florida\n- 000000000000652899-UN tiene una promoción vigente solo para la tienda de Calle Uno 23, La Florida",
   "screenshots": [
    {
     "caption": "Paso 1 — pdp en la tienda con la promocion",
     "file": "TC-B2C61-D-015-p01-pdp-en-la-tienda-con-la-promocion.png"
    }
   ],
   "spec": "tests/B2C-61.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a la PDP de 000000000000652899-UN.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-29",
   "expected": "Se muestra el precio Unipay de 000000000000661945-UN como ahorro potencial.",
   "form_factor": "desktop",
   "id": "TC-B2C61-D-016",
   "name": "Verificar que un usuario sin Unipay ve el ahorro potencial de la promoción Unipay [Desktop] [Guest]",
   "observed": "La PDP muestra la promoción % Unipay con el precio Unipay como ahorro potencial junto al precio normal.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: PDP\n- La dirección activa es Calle Uno 23, La Florida\n- El usuario no tiene Unipay contratado",
   "screenshots": [
    {
     "caption": "Paso 1 — pdp con precio unipay",
     "file": "TC-B2C61-D-016-p01-pdp-con-precio-unipay.png"
    }
   ],
   "spec": "tests/B2C-61.spec.ts:229",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a la PDP de 000000000000661945-UN.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-29",
   "expected": "La landing muestra Vilanova 122, Las Condes, sin interrumpir el flujo del usuario al setear la dirección.",
   "form_factor": "mobile",
   "id": "TC-B2C61-M-001",
   "name": "Verificar que al setear una dirección se muestra el contenido del segmento de su tienda [Mobile] [Guest]",
   "observation": "Causa: token(s) en TBD en el Excel de data: {CONTENIDO_SEGMENTO_B}, {PD_LANDING_SEGMENTO_URL}. Acción: cargar el dato en el Excel de data (responsable de la data de prueba) y re-ejecutar con -\u002donly.",
   "observed": "No ejecutado: falta data de prueba.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_B} para la tienda de A. Las Conder 14791, Lo Barnechea y QA B2C-61 por defecto",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección Calle Uno 23, La Florida, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-29",
   "expected": "La landing muestra QA B2C-61.",
   "form_factor": "mobile",
   "id": "TC-B2C61-M-002",
   "name": "Verificar que si el segmento de la tienda no tiene contenido se muestra el contenido por defecto [Mobile] [Guest]",
   "observation": "Causa: token(s) en TBD en el Excel de data: {CONTENIDO_SEGMENTO_B}, {DIRECCION_TIENDA_SIN_SEGMENTO}, {PD_LANDING_SEGMENTO_URL}. Acción: cargar el dato en el Excel de data (responsable de la data de prueba) y re-ejecutar con -\u002donly.",
   "observed": "No ejecutado: falta data de prueba.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- La tienda de {DIRECCION_TIENDA_SIN_SEGMENTO} no tiene segmento ni contenido configurado en BM\n- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_B} para la tienda de A. Las Conder 14791, Lo Barnechea y QA B2C-61 por defecto",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_TIENDA_SIN_SEGMENTO}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-09",
   "expected": "La landing muestra QA B2C-61 y el Store Locator sigue sin tienda asignada.",
   "form_factor": "mobile",
   "id": "TC-B2C61-M-003",
   "name": "Verificar que sin tienda asignada se muestra el contenido por defecto [Mobile] [Guest]",
   "observation": "Causa: {CONTENIDO_SEGMENTO_B} y {PD_LANDING_SEGMENTO_URL} están en TBD en el Excel de data. Acción: cargar la landing de segmentación y el contenido del segmento B (responsable de la data de prueba) y re-ejecutar con -\u002donly.",
   "observed": "No se ejecutó: falta data de prueba.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión nueva sin dirección ni tienda seteada\n- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_B} para la tienda de A. Las Condes 14791, Lo Barnechea y QA B2C-61 por defecto",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-09",
   "expected": "Sin recargar sigue Vilanova 122, Las Condes; al volver a cargar la landing se muestra {CONTENIDO_SEGMENTO_B}.",
   "form_factor": "mobile",
   "id": "TC-B2C61-M-004",
   "name": "Verificar que al cambiar a otra tienda el contenido cambia en la siguiente carga de página [Mobile] [Guest]",
   "observation": "Causa: {CONTENIDO_SEGMENTO_B} y {PD_LANDING_SEGMENTO_URL} están en TBD en el Excel de data. Acción: cargar la landing de segmentación y el contenido del segmento B (responsable de la data de prueba) y re-ejecutar con -\u002donly.",
   "observed": "No se ejecutó: falta data de prueba.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- La dirección activa es Calle Uno 23, La Florida\n- El carro está vacío\n- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_B} para la tienda de A. Las Condes 14791, Lo Barnechea y QA B2C-61 por defecto",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.\n2. El sistema muestra Vilanova 122, Las Condes.\n3. El usuario toca el Store Locator del header.\n4. El usuario ingresa A. Las Condes 14791, Lo Barnechea y la confirma.\n5. El usuario revisa la landing sin recargar.\n6. El usuario vuelve a cargar la landing.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-09",
   "expected": "Se muestra el flujo Sin cobertura (B2C-123) y la landing sigue mostrando Vilanova 122, Las Condes.",
   "form_factor": "mobile",
   "id": "TC-B2C61-M-005",
   "name": "Verificar que al cambiar a una dirección sin cobertura se activa Sin cobertura sin re-asignar segmento [Mobile] [Guest]",
   "observation": "Causa: {CONTENIDO_SEGMENTO_B} y {PD_LANDING_SEGMENTO_URL} están en TBD en el Excel de data. Acción: cargar la landing de segmentación y el contenido del segmento B (responsable de la data de prueba) y re-ejecutar con -\u002donly.",
   "observed": "No se ejecutó: falta data de prueba.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- La dirección activa es Calle Uno 23, La Florida\n- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_B} para la tienda de A. Las Condes 14791, Lo Barnechea y QA B2C-61 por defecto",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección T-551, Futrono, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Aún no llegamos a esta dirección\".\n7. El usuario toca la X o cierra el modal.\n8. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-09",
   "expected": "La landing sigue mostrando Vilanova 122, Las Condes tras navegar.",
   "form_factor": "mobile",
   "id": "TC-B2C61-M-006",
   "name": "Verificar que el segmento del invitado persiste al navegar durante la sesión [Mobile] [Guest]",
   "observation": "Causa: {CONTENIDO_SEGMENTO_B} y {PD_LANDING_SEGMENTO_URL} están en TBD en el Excel de data. Acción: cargar la landing de segmentación y el contenido del segmento B (responsable de la data de prueba) y re-ejecutar con -\u002donly.",
   "observed": "No se ejecutó: falta data de prueba.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- La dirección Calle Uno 23, La Florida está seteada como invitado\n- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_B} para la tienda de A. Las Condes 14791, Lo Barnechea y QA B2C-61 por defecto",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El usuario navega a una PLP y luego a la landing.\n3. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-09",
   "expected": "La landing muestra Vilanova 122, Las Condes.",
   "form_factor": "mobile",
   "id": "TC-B2C61-M-007",
   "name": "Verificar que el segmento del logueado persiste en su perfil durante la sesión [Mobile] [Logueado]",
   "observation": "Causa: {CONTENIDO_SEGMENTO_B} y {PD_LANDING_SEGMENTO_URL} están en TBD en el Excel de data. Acción: cargar la landing de segmentación y el contenido del segmento B (responsable de la data de prueba) y re-ejecutar con -\u002donly.",
   "observed": "No se ejecutó: falta data de prueba.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com / Avatar1234.\n- La dirección Calle Uno 23, La Florida está seteada en la cuenta\n- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_B} para la tienda de A. Las Condes 14791, Lo Barnechea y QA B2C-61 por defecto",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El usuario navega a una PLP.\n3. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-29",
   "expected": "000000000000674797-UN se muestra disponible con el botón \"Agregar\" habilitado.",
   "form_factor": "mobile",
   "id": "TC-B2C61-M-008",
   "name": "Verificar que un producto con stock en la tienda activa se muestra disponible [Mobile] [Guest]",
   "observed": "El producto declarado se muestra disponible en la tienda activa: botón «Agregar» visible y habilitado, sin etiqueta de no disponible.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: PDP\n- La dirección activa es Calle Uno 23, La Florida\n- 000000000000674797-UN tiene stock en la tienda de Calle Uno 23, La Florida",
   "screenshots": [
    {
     "caption": "Paso 1 — pdp con agregar habilitado",
     "file": "TC-B2C61-M-008-p01-pdp-con-agregar-habilitado.png"
    }
   ],
   "spec": "tests/B2C-61.spec.ts:126",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a la PDP de 000000000000674797-UN.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-09",
   "expected": "000000000000674797-UN se muestra con etiqueta visible de no disponible y sin opción de agregar al carro.",
   "form_factor": "mobile",
   "id": "TC-B2C61-M-009",
   "name": "Verificar que un producto sin stock en la tienda activa se muestra no disponible y sin Agregar [Mobile] [Guest]",
   "observation": "Causa: el SKU 000000000000674797-UN tiene stock (Agregar habilitado, sin etiqueta de no disponible) con la dirección A. Las Condes 14791, Lo Barnechea, donde la precondición dice que no tiene; se comporta igual en ambas tiendas. Acción: cargar un SKU y un par de direcciones cuyas tiendas difieran realmente en stock, y re-ejecutar.",
   "observed": "El shelf del SKU en la SRP se muestra con «Agregar» y sin etiqueta de no disponible.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: SRP\n- La dirección activa es A. Las Condes 14791, Lo Barnechea\n- 000000000000674797-UN no tiene stock en la tienda de A. Las Condes 14791, Lo Barnechea",
   "screenshots": [
    {
     "caption": "Paso 2 — resultados con el shelf del sku",
     "file": "TC-B2C61-M-009-p02-resultados-con-el-shelf-del-sku.png"
    },
    {
     "caption": "Estado al fallar la aserción",
     "file": "TC-B2C61-M-009.png"
    }
   ],
   "spec": "tests/B2C-61.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario busca Lavalozas Quix.\n2. El sistema muestra resultados con el shelf de 000000000000674797-UN.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-09",
   "expected": "000000000400254005-UN no aparece en los resultados y su PDP no se muestra.",
   "form_factor": "mobile",
   "id": "TC-B2C61-M-010",
   "name": "Verificar que un producto inactivo para la tienda activa no aparece en catálogo ni en PDP [Mobile] [Guest]",
   "observation": "Causa: con Calle Uno 23, La Florida activa, 000000000400254005-UN aparece en la SRP y su PDP se abre con «Pronto disponible» y «Ver similares» (presentación de producto sin stock, no de producto inactivo); desde el storefront no se puede confirmar que esté inactivo para esa tienda. Acción: confirmar en BM que el SKU está offline/inactivo para la tienda de Calle Uno 23, La Florida (o cargar uno que lo esté) y re-ejecutar.",
   "observed": "El SKU aparece en los resultados (1 producto) y su PDP se muestra con «Pronto disponible».",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: SRP\n- La dirección activa es Calle Uno 23, La Florida\n- 000000000400254005-UN está inactivo para la tienda de Calle Uno 23, La Florida",
   "screenshots": [
    {
     "caption": "Paso 0 — direccion de la tienda a aplicada",
     "file": "TC-B2C61-M-010-p00-direccion-de-la-tienda-a-aplicada.png"
    },
    {
     "caption": "Paso 1 — resultados de la busqueda del sku",
     "file": "TC-B2C61-M-010-p01-resultados-de-la-busqueda-del-sku.png"
    },
    {
     "caption": "Paso 2 — pdp del sku",
     "file": "TC-B2C61-M-010-p02-pdp-del-sku.png"
    },
    {
     "caption": "Estado al fallar la aserción",
     "file": "TC-B2C61-M-010.png"
    }
   ],
   "spec": "tests/B2C-61.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario busca 000000000400254005-UN.\n2. El usuario ingresa a la PDP de 000000000400254005-UN.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-09",
   "expected": "Se muestra el modal de B2C-122 y, tras continuar, 000000000000674797-UN queda como no disponible para la nueva tienda.",
   "form_factor": "mobile",
   "id": "TC-B2C61-M-011",
   "name": "Verificar que al cambiar de tienda un producto sin stock en la nueva tienda queda no disponible [Mobile] [Guest]",
   "observation": "Causa: el SKU 000000000000674797-UN tiene stock (Agregar habilitado, sin etiqueta de no disponible) con la dirección A. Las Condes 14791, Lo Barnechea, donde la precondición dice que no tiene; se comporta igual en ambas tiendas: tras confirmar la nueva dirección se muestra el modal «Algunos productos podrían agotarse», pero el SKU sigue disponible porque tiene stock en la nueva tienda. Acción: cargar un SKU y un par de direcciones cuyas tiendas difieran realmente en stock, y re-ejecutar.",
   "observed": "Se mostró el modal de B2C-122; tras continuar el SKU sigue disponible en el carro.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- La dirección activa es Calle Uno 23, La Florida\n- El carro contiene 000000000000674797-UN",
   "screenshots": [
    {
     "caption": "Paso 0 — sku en el carro con la tienda de origen",
     "file": "TC-B2C61-M-011-p00-sku-en-el-carro-con-la-tienda-de-origen.png"
    },
    {
     "caption": "Estado al fallar la aserción",
     "file": "TC-B2C61-M-011.png"
    }
   ],
   "spec": "tests/B2C-61.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección A. Las Condes 14791, Lo Barnechea, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Algunos productos podrían agotarse\" (B2C-122).\n7. El usuario toca \"Sí, continuar\".\n8. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-09",
   "expected": "000000000000674797-UN se muestra disponible con \"Agregar\" habilitado.",
   "form_factor": "mobile",
   "id": "TC-B2C61-M-012",
   "name": "Verificar que al cambiar de tienda un producto que ahora tiene stock se habilita [Mobile] [Guest]",
   "observation": "Causa: precondición no disponible: el SKU 000000000000674797-UN tiene stock (Agregar habilitado, sin etiqueta de no disponible) con la dirección A. Las Condes 14791, Lo Barnechea, donde la precondición dice que no tiene; se comporta igual en ambas tiendas. Acción: cargar un SKU y un par de direcciones cuyas tiendas difieran realmente en stock, y re-ejecutar.",
   "observed": "En la dirección de partida el SKU ya muestra «Agregar» habilitado.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- La dirección activa es A. Las Condes 14791, Lo Barnechea, donde 000000000000674797-UN no tiene stock\n- El carro está vacío",
   "screenshots": [
    {
     "caption": "Paso 0 — pdp en la tienda sin stock estado previo",
     "file": "TC-B2C61-M-012-p00-pdp-en-la-tienda-sin-stock-estado-previo.png"
    }
   ],
   "spec": "tests/B2C-61.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección Calle Uno 23, La Florida, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El usuario ingresa a la PDP de 000000000000674797-UN.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-09",
   "expected": "El botón \"Agregar\" aparece deshabilitado, se muestra \"Este producto no esta disponible para tu dirección\" y no se informa disponibilidad en otras tiendas.",
   "form_factor": "mobile",
   "id": "TC-B2C61-M-013",
   "name": "Verificar que la PDP de un producto sin stock en la tienda activa deshabilita Agregar con mensaje [Mobile] [Guest]",
   "observation": "Causa: el SKU 000000000000674797-UN tiene stock (Agregar habilitado, sin etiqueta de no disponible) con la dirección A. Las Condes 14791, Lo Barnechea, donde la precondición dice que no tiene; se comporta igual en ambas tiendas. Acción: cargar un SKU y un par de direcciones cuyas tiendas difieran realmente en stock, y re-ejecutar.",
   "observed": "La PDP muestra «Agregar» habilitado y no el mensaje «Este producto no esta disponible para tu dirección».",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: PDP\n- La dirección activa es A. Las Condes 14791, Lo Barnechea",
   "screenshots": [
    {
     "caption": "Paso 1 — pdp en la tienda sin stock",
     "file": "TC-B2C61-M-013-p01-pdp-en-la-tienda-sin-stock.png"
    }
   ],
   "spec": "tests/B2C-61.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a la PDP de 000000000000674797-UN.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-09",
   "expected": "000000000000652899-UN muestra su precio base, sin el descuento de la promoción de la tienda A.",
   "form_factor": "mobile",
   "id": "TC-B2C61-M-014",
   "name": "Verificar que solo se muestran las promociones vigentes de la tienda activa [Mobile] [Guest]",
   "observation": "Causa: la precondición «000000000000652899-UN tiene promoción vigente solo en la tienda de Calle Uno 23, La Florida» no se verifica: el SKU muestra $990 sin descuento en ambas tiendas (ver 015), así que el precio base observado no prueba nada. Acción: cargar en BM una promoción vigente solo para la tienda A sobre el SKU y re-ejecutar.",
   "observed": "La PDP muestra solo el precio base ($990).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: PDP\n- La dirección activa es A. Las Condes 14791, Lo Barnechea\n- 000000000000652899-UN tiene una promoción vigente solo para la tienda de Calle Uno 23, La Florida",
   "screenshots": [
    {
     "caption": "Paso 1 — pdp en la tienda sin la promocion",
     "file": "TC-B2C61-M-014-p01-pdp-en-la-tienda-sin-la-promocion.png"
    }
   ],
   "spec": "tests/B2C-61.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a la PDP de 000000000000652899-UN.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-09",
   "expected": "000000000000652899-UN muestra el precio con el descuento de la promoción de la tienda A.",
   "form_factor": "mobile",
   "id": "TC-B2C61-M-015",
   "name": "Verificar que la promoción de la tienda activa se refleja en el precio con descuento [Mobile] [Guest]",
   "observation": "Causa: 000000000000652899-UN no muestra promoción en la tienda de Calle Uno 23, La Florida (precio único $990), igual que en la otra tienda; la promoción declarada no existe o no está vigente en el ambiente. Acción: cargar en BM una promoción vigente solo para la tienda A sobre el SKU y re-ejecutar.",
   "observed": "La PDP muestra un único precio ($990), sin descuento.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: PDP\n- La dirección activa es Calle Uno 23, La Florida\n- 000000000000652899-UN tiene una promoción vigente solo para la tienda de Calle Uno 23, La Florida",
   "screenshots": [
    {
     "caption": "Paso 1 — pdp en la tienda con la promocion",
     "file": "TC-B2C61-M-015-p01-pdp-en-la-tienda-con-la-promocion.png"
    }
   ],
   "spec": "tests/B2C-61.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a la PDP de 000000000000652899-UN.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-29",
   "expected": "Se muestra el precio Unipay de 000000000000661945-UN como ahorro potencial.",
   "form_factor": "mobile",
   "id": "TC-B2C61-M-016",
   "name": "Verificar que un usuario sin Unipay ve el ahorro potencial de la promoción Unipay [Mobile] [Guest]",
   "observed": "La PDP muestra la promoción % Unipay con el precio Unipay como ahorro potencial junto al precio normal.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: PDP\n- La dirección activa es Calle Uno 23, La Florida\n- El usuario no tiene Unipay contratado",
   "screenshots": [
    {
     "caption": "Paso 1 — pdp con precio unipay",
     "file": "TC-B2C61-M-016-p01-pdp-con-precio-unipay.png"
    }
   ],
   "spec": "tests/B2C-61.spec.ts:229",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a la PDP de 000000000000661945-UN.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-09",
   "expected": "El basket contiene 000000000000675191-UN y tiene asociados la dirección de envío Av. Perú 760, Recoleta y el warehouseId 400; tras recargar, el basket mantiene la misma dirección y warehouseId.",
   "form_factor": "desktop",
   "id": "TC-B2C61-D-017",
   "name": "Verificar que los datos de entrega seleccionados quedan asociados al basket con su warehouseId [Desktop] [Guest]",
   "observation": "Causa: 000000000000675191-UN se muestra «Pronto disponible» (sin «Agregar») con la dirección Av. Perú 760, Recoleta, así que no se puede agregar al carro para revisar el basket. Acción: declarar un SKU con stock en la tienda de Av. Perú 760, Recoleta (o alinear la precondición, que habla de la tienda de Calle Uno 23, La Florida) y re-ejecutar.",
   "observed": "En la SRP el SKU aparece con «Pronto disponible» y «Ver similares».",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- Sesión nueva sin dirección ni tienda seteada\n- El carro está vacío\n- 000000000000675191-UN tiene stock en la tienda abastecedora de Calle Uno 23, La Florida (warehouseId 400)\n- DevTools abierto en la pestaña Network, filtrando la request *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/customer/shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/abk0k1kXsWxHARxbs2xaYYxKs1/baskets",
   "screenshots": [
    {
     "caption": "Paso 5 — direccion aplicada en el header",
     "file": "TC-B2C61-D-017-p05-direccion-aplicada-en-el-header.png"
    },
    {
     "caption": "Estado al fallar la aserción",
     "file": "TC-B2C61-D-017.png"
    }
   ],
   "spec": "tests/B2C-61.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección Av. Perú 760, Recoleta, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El usuario busca 000000000000675191-UN y hace clic en \"Agregar\".\n7. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n8. El usuario revisa en DevTools la respuesta de *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/customer/shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/abk0k1kXsWxHARxbs2xaYYxKs1/baskets (basket): dirección de envío y warehouseId.\n9. El usuario recarga https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n10. El usuario vuelve a revisar la respuesta de *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/customer/shopper-customers/v1/organizations/f_ecom_bmkg_dev/customers/abk0k1kXsWxHARxbs2xaYYxKs1/baskets.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-29",
   "expected": "La dirección {DIRECCION_TIENDA_SIN_SEGMENTO} queda seteada sin pasar por el flujo Sin cobertura (B2C-123) y, al volver a cargar la landing, se muestra QA B2C-61 (fallback), no Vilanova 122, Las Condes.",
   "form_factor": "desktop",
   "id": "TC-B2C61-D-018",
   "name": "Verificar que al cambiar a una tienda válida con cobertura y sin segmento configurado se aplica el contenido por defecto [Desktop] [Guest]",
   "observation": "Causa: token(s) en TBD en el Excel de data: {CONTENIDO_SEGMENTO_B}, {DIRECCION_TIENDA_SIN_SEGMENTO}, {PD_LANDING_SEGMENTO_URL}. Acción: cargar el dato en el Excel de data (responsable de la data de prueba) y re-ejecutar con -\u002donly.",
   "observed": "No ejecutado: falta data de prueba.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- La dirección activa es Calle Uno 23, La Florida\n- El carro está vacío\n- {DIRECCION_TIENDA_SIN_SEGMENTO} tiene cobertura y SLAs, y su tienda abastecedora (distinta a la de Calle Uno 23, La Florida) no tiene segmento configurado en BM\n- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_B} para la tienda de A. Las Conder 14791, Lo Barnechea y QA B2C-61 por defecto",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.\n2. El sistema muestra Vilanova 122, Las Condes.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_TIENDA_SIN_SEGMENTO}, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El usuario revisa que no se muestre el modal \"Aún no llegamos a esta dirección\" y que la dirección quede seteada.\n7. El usuario vuelve a cargar la landing.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-29",
   "expected": "El basket contiene 000000000000675191-UN y tiene asociados la dirección de envío Calle Uno 23, La Florida y el warehouseId 400; tras recargar, el basket mantiene la misma dirección y warehouseId.",
   "form_factor": "mobile",
   "id": "TC-B2C61-M-017",
   "name": "Verificar que los datos de entrega seleccionados quedan asociados al basket con su warehouseId [Mobile] [Guest]",
   "observation": "Causa: el warehouseId declarado en el Excel de data no coincide con la tienda abastecedora que el ambiente asocia a la dirección (581); no es posible determinar si el dato está desactualizado o es un defecto. Acción: confirmar el warehouseId vigente de la dirección con el dueño de la data y re-ejecutar.",
   "observed": "El basket contiene el SKU y la dirección de envío declarada; la tienda abastecedora asociada es la 581 y no aparece el warehouseId declarado (400).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión nueva sin dirección ni tienda seteada\n- El carro está vacío\n- 000000000000675191-UN tiene stock en la tienda abastecedora de Calle Uno 23, La Florida (warehouseId 400)\n- DevTools abierto en la pestaña Network, filtrando la request (endpoint del basket del Excel de data)",
   "screenshots": [
    {
     "caption": "Paso 5 — direccion aplicada en el header",
     "file": "TC-B2C61-M-017-p05-direccion-aplicada-en-el-header.png"
    },
    {
     "caption": "Paso 6 — producto agregado",
     "file": "TC-B2C61-M-017-p06-producto-agregado.png"
    },
    {
     "caption": "Paso 7 — carro con el producto",
     "file": "TC-B2C61-M-017-p07-carro-con-el-producto.png"
    }
   ],
   "spec": "tests/B2C-61.spec.ts:242",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección Calle Uno 23, La Florida, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El usuario busca 000000000000675191-UN y toca \"Agregar\".\n7. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n8. El usuario revisa en DevTools la respuesta de (endpoint del basket del Excel de data) (basket): dirección de envío y warehouseId.\n9. El usuario recarga https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n10. El usuario vuelve a revisar la respuesta de (endpoint del basket del Excel de data).",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-29",
   "expected": "La dirección {DIRECCION_TIENDA_SIN_SEGMENTO} queda seteada sin pasar por el flujo Sin cobertura (B2C-123) y, al volver a cargar la landing, se muestra QA B2C-61 (fallback), no Vilanova 122, Las Condes.",
   "form_factor": "mobile",
   "id": "TC-B2C61-M-018",
   "name": "Verificar que al cambiar a una tienda válida con cobertura y sin segmento configurado se aplica el contenido por defecto [Mobile] [Guest]",
   "observation": "Causa: token(s) en TBD en el Excel de data: {CONTENIDO_SEGMENTO_B}, {DIRECCION_TIENDA_SIN_SEGMENTO}, {PD_LANDING_SEGMENTO_URL}. Acción: cargar el dato en el Excel de data (responsable de la data de prueba) y re-ejecutar con -\u002donly.",
   "observed": "No ejecutado: falta data de prueba.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- La dirección activa es Calle Uno 23, La Florida\n- El carro está vacío\n- {DIRECCION_TIENDA_SIN_SEGMENTO} tiene cobertura y SLAs, y su tienda abastecedora (distinta a la de Calle Uno 23, La Florida) no tiene segmento configurado en BM\n- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_B} para la tienda de A. Las Conder 14791, Lo Barnechea y QA B2C-61 por defecto",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.\n2. El sistema muestra Vilanova 122, Las Condes.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_TIENDA_SIN_SEGMENTO}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El usuario revisa que no se muestre el modal \"Aún no llegamos a esta dirección\" y que la dirección quede seteada.\n7. El usuario vuelve a cargar la landing.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-09",
   "expected": "El sistema no permite avanzar al pago: solicita seleccionar una dirección o tienda con cobertura (Store Locator) y no se puede completar la compra mientras no haya una dirección válida.",
   "form_factor": "desktop",
   "id": "TC-B2C61-D-019",
   "name": "Verificar que un usuario sin dirección con productos en el carro no puede avanzar al pago [Desktop] [Logueado]",
   "observation": "Causa: la cuenta vhchirinos+noaddress@avatar-global.com tiene una dirección guardada (Calle Uno 23, La Florida) y la precondición pide una cuenta sin direcciones guardadas; además, sin dirección activa «Agregar» abre el Store Locator y el carro queda vacío. Acción: eliminar las direcciones guardadas de la cuenta (o declarar otra sin direcciones) y re-ejecutar.",
   "observed": "Al tocar «Agregar» se abre «Elige tu método de entrega» con la dirección guardada Calle Uno 23; el carro queda vacío.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- Sesión iniciada con la cuenta vhchirinos+noaddress@avatar-global.com / (contraseña de la cuenta), sin direcciones guardadas\n- Sin dirección ni tienda seteada en el Store Locator (navegación con la tienda por defecto)\n- El carro está vacío",
   "screenshots": [
    {
     "caption": "Paso 3 — store locator sin direccion ni tienda",
     "file": "TC-B2C61-D-019-p03-store-locator-sin-direccion-ni-tienda.png"
    },
    {
     "caption": "Paso 4 — producto agregado",
     "file": "TC-B2C61-D-019-p04-producto-agregado.png"
    },
    {
     "caption": "Estado al fallar la aserción",
     "file": "TC-B2C61-D-019.png"
    }
   ],
   "spec": "tests/B2C-61.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El sistema carga el Home.\n3. El usuario verifica que el Store Locator no tiene dirección ni tienda seteada.\n4. El usuario busca 000000000000675191-UN y hace clic en \"Agregar\".\n5. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n6. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n7. El usuario intenta avanzar al pago sin seleccionar dirección ni tienda.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "1440x900"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-09",
   "expected": "El sistema no permite avanzar al pago: solicita seleccionar una dirección o tienda con cobertura (Store Locator) y no se puede completar la compra mientras no haya una dirección válida.",
   "form_factor": "mobile",
   "id": "TC-B2C61-M-019",
   "name": "Verificar que un usuario sin dirección con productos en el carro no puede avanzar al pago [Mobile] [Logueado]",
   "observation": "Causa: la cuenta vhchirinos+noaddress@avatar-global.com tiene una dirección guardada (Calle Uno 23, La Florida) y la precondición pide una cuenta sin direcciones guardadas; además, sin dirección activa «Agregar» abre el Store Locator y el carro queda vacío. Acción: eliminar las direcciones guardadas de la cuenta (o declarar otra sin direcciones) y re-ejecutar.",
   "observed": "Al tocar «Agregar» se abre «Elige tu método de entrega» con la dirección guardada Calle Uno 23; el carro queda vacío.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta vhchirinos+noaddress@avatar-global.com / (contraseña de la cuenta), sin direcciones guardadas\n- Sin dirección ni tienda seteada en el Store Locator (navegación con la tienda por defecto)\n- El carro está vacío",
   "screenshots": [
    {
     "caption": "Paso 3 — store locator sin direccion ni tienda",
     "file": "TC-B2C61-M-019-p03-store-locator-sin-direccion-ni-tienda.png"
    },
    {
     "caption": "Paso 4 — producto agregado",
     "file": "TC-B2C61-M-019-p04-producto-agregado.png"
    },
    {
     "caption": "Estado al fallar la aserción",
     "file": "TC-B2C61-M-019.png"
    }
   ],
   "spec": "tests/B2C-61.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El sistema carga el Home.\n3. El usuario verifica que el Store Locator no tiene dirección ni tienda seteada.\n4. El usuario busca 000000000000675191-UN y toca \"Agregar\".\n5. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n6. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n7. El usuario intenta avanzar al pago sin seleccionar dirección ni tienda.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-29",
   "expected": "La dirección guardada Calle Uno 23, La Florida queda como método de entrega activo sin pedir OTP y, al volver a cargar la landing, se muestra Vilanova 122, Las Condes (segmento de la tienda abastecedora de la dirección).",
   "form_factor": "desktop",
   "id": "TC-B2C61-D-020",
   "name": "Verificar que al pasar de retiro en tienda a despacho a domicilio se asigna el segmento de la tienda abastecedora de la dirección [Desktop] [Logueado]",
   "observation": "Causa: token(s) en TBD en el Excel de data: {PD_LANDING_SEGMENTO_URL}; token(s) sin fila en el Excel de data: {CONTENIDO_SEGMENTO_RETIRO}. Acción: cargar el dato en el Excel de data (responsable de la data de prueba) y re-ejecutar con -\u002donly.",
   "observed": "No ejecutado: falta data de prueba.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- Sesión iniciada con la cuenta (cuenta del Excel de data)\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- El carro está vacío\n- El método de entrega activo es Retiro en tienda en Unimarc Las Condes\n- Calle Uno 23, La Florida es una dirección guardada de la cuenta, con cobertura y SLAs\n- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_RETIRO} para el segmento de Unimarc Las Condes y QA B2C-61 por defecto",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.\n2. El sistema muestra {CONTENIDO_SEGMENTO_RETIRO}.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\".\n5. El usuario hace clic en la pestaña \"Despacho a domicilio\", elige la dirección guardada Calle Uno 23, La Florida y hace clic en \"Confirmar\".\n6. El usuario vuelve a cargar la landing.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-29",
   "expected": "Retiro en tienda en Unimarc Las Condes queda como método de entrega activo y, al volver a cargar la landing, se muestra {CONTENIDO_SEGMENTO_RETIRO} (segmento de la tienda de retiro), no Vilanova 122, Las Condes.",
   "form_factor": "desktop",
   "id": "TC-B2C61-D-021",
   "name": "Verificar que al pasar de despacho a domicilio a retiro en tienda se asigna el segmento de la tienda de retiro [Desktop] [Logueado]",
   "observation": "Causa: token(s) en TBD en el Excel de data: {PD_LANDING_SEGMENTO_URL}; token(s) sin fila en el Excel de data: {CONTENIDO_SEGMENTO_RETIRO}. Acción: cargar el dato en el Excel de data (responsable de la data de prueba) y re-ejecutar con -\u002donly.",
   "observed": "No ejecutado: falta data de prueba.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- Sesión iniciada con la cuenta (cuenta del Excel de data)\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- El carro está vacío\n- La dirección activa es Calle Uno 23, La Florida (despacho a domicilio)\n- Unimarc Las Condes tiene cobertura y SLAs, y su tienda abastecedora es distinta a la de Calle Uno 23, La Florida\n- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_RETIRO} para el segmento de Unimarc Las Condes y QA B2C-61 por defecto",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.\n2. El sistema muestra Vilanova 122, Las Condes.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\".\n5. El usuario hace clic en la pestaña \"Retiro en tienda\", elige Unimarc Las Condes y hace clic en \"Confirmar\".\n6. El sistema muestra el modal \"Autenticación requerida\" (B2C-125).\n7. El usuario ingresa el código OTP recibido y hace clic en \"Continuar\".\n8. El usuario vuelve a cargar la landing.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-29",
   "expected": "{SKU_STOCK_SOLO_TIENDA_RETIRO_001} se muestra disponible, con el botón \"Agregar\" habilitado, porque tiene stock en la tienda de retiro activa Unimarc Las Condes.",
   "form_factor": "desktop",
   "id": "TC-B2C61-D-022",
   "name": "Verificar que con retiro en tienda el stock mostrado corresponde a la tienda de retiro [Desktop] [Logueado]",
   "observation": "Causa: token(s) sin fila en el Excel de data: {SKU_STOCK_SOLO_TIENDA_RETIRO_001}. Acción: cargar el dato en el Excel de data (responsable de la data de prueba) y re-ejecutar con -\u002donly.",
   "observed": "No ejecutado: falta data de prueba.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- Sesión iniciada con la cuenta (cuenta del Excel de data)\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- El carro está vacío\n- El método de entrega activo es Retiro en tienda en Unimarc Las Condes\n- {SKU_STOCK_SOLO_TIENDA_RETIRO_001} tiene stock en Unimarc Las Condes y no tiene stock en la tienda abastecedora de Calle Uno 23, La Florida",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ y busca {SKU_STOCK_SOLO_TIENDA_RETIRO_001}.\n2. El sistema muestra el resultado de búsqueda.\n3. El usuario hace clic en el producto.\n4. El sistema carga la PDP.\n5. El usuario revisa la disponibilidad del producto.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-29",
   "expected": "Se muestra el flujo Sin cobertura (B2C-123) y, al volver a cargar la landing, sigue mostrándose Vilanova 122, Las Condes: el segmento no se re-asigna.",
   "form_factor": "desktop",
   "id": "TC-B2C61-D-023",
   "name": "Verificar que al elegir una tienda de retiro sin cobertura se activa Sin cobertura sin re-asignar segmento [Desktop] [Logueado]",
   "observation": "Causa: token(s) en TBD en el Excel de data: {PD_LANDING_SEGMENTO_URL}; token(s) sin fila en el Excel de data: {CONTENIDO_SEGMENTO_RETIRO}. Acción: cargar el dato en el Excel de data (responsable de la data de prueba) y re-ejecutar con -\u002donly.",
   "observed": "No ejecutado: falta data de prueba.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- Sesión iniciada con la cuenta (cuenta del Excel de data)\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- El carro está vacío\n- La dirección activa es Calle Uno 23, La Florida (despacho a domicilio)\n- Unimarc Los Lagos II no tiene cobertura\n- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_RETIRO} para el segmento de Unimarc Las Condes y QA B2C-61 por defecto",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.\n2. El sistema muestra Vilanova 122, Las Condes.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\".\n5. El usuario hace clic en la pestaña \"Retiro en tienda\", elige Unimarc Los Lagos II y hace clic en \"Confirmar\".\n6. El sistema muestra el modal \"Autenticación requerida\" (B2C-125).\n7. El usuario ingresa el código OTP recibido y hace clic en \"Continuar\".\n8. El sistema muestra el modal \"Aún no llegamos a esta dirección\".\n9. El usuario cierra el modal con la X.\n10. El usuario vuelve a cargar la landing.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-29",
   "expected": "Av Libertador Gral Bernardo O'Higgins 1072, Maipú queda seteada con el aviso \"Dirección sin horarios disponibles\" y, al volver a cargar la landing, se muestra {CONTENIDO_SEGMENTO_SIN_SLA} (segmento de su tienda abastecedora).",
   "form_factor": "desktop",
   "id": "TC-B2C61-D-024",
   "name": "Verificar que al continuar con una dirección de despacho sin horarios se asigna el segmento de su tienda abastecedora [Desktop] [Logueado]",
   "observation": "Causa: token(s) en TBD en el Excel de data: {PD_LANDING_SEGMENTO_URL}; token(s) sin fila en el Excel de data: {CONTENIDO_SEGMENTO_RETIRO}, {CONTENIDO_SEGMENTO_SIN_SLA}. Acción: cargar el dato en el Excel de data (responsable de la data de prueba) y re-ejecutar con -\u002donly.",
   "observed": "No ejecutado: falta data de prueba.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- Sesión iniciada con la cuenta (cuenta del Excel de data)\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- El carro está vacío\n- La dirección activa es Calle Uno 23, La Florida\n- Av Libertador Gral Bernardo O'Higgins 1072, Maipú tiene cobertura y no tiene SLAs disponibles; su tienda abastecedora es distinta a la de Calle Uno 23, La Florida\n- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_RETIRO} para el segmento de Unimarc Las Condes y QA B2C-61 por defecto\n- En BM, el segmento de la tienda abastecedora de Av Libertador Gral Bernardo O'Higgins 1072, Maipú tiene el contenido {CONTENIDO_SEGMENTO_SIN_SLA}",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.\n2. El sistema muestra Vilanova 122, Las Condes.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección Av Libertador Gral Bernardo O'Higgins 1072, Maipú, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El sistema muestra el modal \"Autenticación requerida\" (B2C-125).\n7. El usuario ingresa el código OTP recibido y hace clic en \"Continuar\".\n8. El sistema muestra el modal \"Por ahora no hay horarios disponibles\".\n9. El usuario hace clic en \"Continuar con esta dirección\".\n10. El usuario vuelve a cargar la landing.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-29",
   "expected": "Retiro en tienda en {TIENDA_RETIRO_SIN_SLA} queda seteado con el aviso \"Dirección sin horarios disponibles\" y, al volver a cargar la landing, se muestra {CONTENIDO_SEGMENTO_TIENDA_SIN_SLA} (segmento de la tienda de retiro).",
   "form_factor": "desktop",
   "id": "TC-B2C61-D-025",
   "name": "Verificar que al continuar con una tienda de retiro sin horarios se asigna el segmento de esa tienda [Desktop] [Logueado]",
   "observation": "Causa: token(s) en TBD en el Excel de data: {PD_LANDING_SEGMENTO_URL}, {TIENDA_RETIRO_SIN_SLA}; token(s) sin fila en el Excel de data: {CONTENIDO_SEGMENTO_RETIRO}, {CONTENIDO_SEGMENTO_TIENDA_SIN_SLA}. Acción: cargar el dato en el Excel de data (responsable de la data de prueba) y re-ejecutar con -\u002donly.",
   "observed": "No ejecutado: falta data de prueba.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- Sesión iniciada con la cuenta (cuenta del Excel de data)\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- El carro está vacío\n- La dirección activa es Calle Uno 23, La Florida (despacho a domicilio)\n- {TIENDA_RETIRO_SIN_SLA} tiene cobertura y no tiene SLAs disponibles\n- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_RETIRO} para el segmento de Unimarc Las Condes y QA B2C-61 por defecto\n- En BM, el segmento de {TIENDA_RETIRO_SIN_SLA} tiene el contenido {CONTENIDO_SEGMENTO_TIENDA_SIN_SLA}",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.\n2. El sistema muestra Vilanova 122, Las Condes.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\".\n5. El usuario hace clic en la pestaña \"Retiro en tienda\", elige {TIENDA_RETIRO_SIN_SLA} y hace clic en \"Confirmar\".\n6. El sistema muestra el modal \"Autenticación requerida\" (B2C-125).\n7. El usuario ingresa el código OTP recibido y hace clic en \"Continuar\".\n8. El sistema muestra el modal \"Por ahora no hay horarios disponibles\".\n9. El usuario hace clic en \"Continuar con esta dirección\".\n10. El usuario vuelve a cargar la landing.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-29",
   "expected": "La dirección guardada Calle Uno 23, La Florida queda como método de entrega activo sin pedir OTP y, al volver a cargar la landing, se muestra Vilanova 122, Las Condes (segmento de la tienda abastecedora de la dirección).",
   "form_factor": "mobile",
   "id": "TC-B2C61-M-020",
   "name": "Verificar que al pasar de retiro en tienda a despacho a domicilio se asigna el segmento de la tienda abastecedora de la dirección [Mobile] [Logueado]",
   "observation": "Causa: token(s) en TBD en el Excel de data: {PD_LANDING_SEGMENTO_URL}; token(s) sin fila en el Excel de data: {CONTENIDO_SEGMENTO_RETIRO}. Acción: cargar el dato en el Excel de data (responsable de la data de prueba) y re-ejecutar con -\u002donly.",
   "observed": "No ejecutado: falta data de prueba.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta (cuenta del Excel de data)\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- El carro está vacío\n- El método de entrega activo es Retiro en tienda en Unimarc Las Condes\n- Calle Uno 23, La Florida es una dirección guardada de la cuenta, con cobertura y SLAs\n- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_RETIRO} para el segmento de Unimarc Las Condes y QA B2C-61 por defecto",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.\n2. El sistema muestra {CONTENIDO_SEGMENTO_RETIRO}.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\".\n5. El usuario toca la pestaña \"Despacho a domicilio\", elige la dirección guardada Calle Uno 23, La Florida y toca \"Confirmar\".\n6. El usuario vuelve a cargar la landing.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-29",
   "expected": "Retiro en tienda en Unimarc Las Condes queda como método de entrega activo y, al volver a cargar la landing, se muestra {CONTENIDO_SEGMENTO_RETIRO} (segmento de la tienda de retiro), no Vilanova 122, Las Condes.",
   "form_factor": "mobile",
   "id": "TC-B2C61-M-021",
   "name": "Verificar que al pasar de despacho a domicilio a retiro en tienda se asigna el segmento de la tienda de retiro [Mobile] [Logueado]",
   "observation": "Causa: token(s) en TBD en el Excel de data: {PD_LANDING_SEGMENTO_URL}; token(s) sin fila en el Excel de data: {CONTENIDO_SEGMENTO_RETIRO}. Acción: cargar el dato en el Excel de data (responsable de la data de prueba) y re-ejecutar con -\u002donly.",
   "observed": "No ejecutado: falta data de prueba.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta (cuenta del Excel de data)\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- El carro está vacío\n- La dirección activa es Calle Uno 23, La Florida (despacho a domicilio)\n- Unimarc Las Condes tiene cobertura y SLAs, y su tienda abastecedora es distinta a la de Calle Uno 23, La Florida\n- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_RETIRO} para el segmento de Unimarc Las Condes y QA B2C-61 por defecto",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.\n2. El sistema muestra Vilanova 122, Las Condes.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\".\n5. El usuario toca la pestaña \"Retiro en tienda\", elige Unimarc Las Condes y toca \"Confirmar\".\n6. El sistema muestra el modal \"Autenticación requerida\" (B2C-125).\n7. El usuario ingresa el código OTP recibido y toca \"Continuar\".\n8. El usuario vuelve a cargar la landing.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-29",
   "expected": "{SKU_STOCK_SOLO_TIENDA_RETIRO_001} se muestra disponible, con el botón \"Agregar\" habilitado, porque tiene stock en la tienda de retiro activa Unimarc Las Condes.",
   "form_factor": "mobile",
   "id": "TC-B2C61-M-022",
   "name": "Verificar que con retiro en tienda el stock mostrado corresponde a la tienda de retiro [Mobile] [Logueado]",
   "observation": "Causa: token(s) sin fila en el Excel de data: {SKU_STOCK_SOLO_TIENDA_RETIRO_001}. Acción: cargar el dato en el Excel de data (responsable de la data de prueba) y re-ejecutar con -\u002donly.",
   "observed": "No ejecutado: falta data de prueba.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta (cuenta del Excel de data)\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- El carro está vacío\n- El método de entrega activo es Retiro en tienda en Unimarc Las Condes\n- {SKU_STOCK_SOLO_TIENDA_RETIRO_001} tiene stock en Unimarc Las Condes y no tiene stock en la tienda abastecedora de Calle Uno 23, La Florida",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ y busca {SKU_STOCK_SOLO_TIENDA_RETIRO_001}.\n2. El sistema muestra el resultado de búsqueda.\n3. El usuario hace clic en el producto.\n4. El sistema carga la PDP.\n5. El usuario revisa la disponibilidad del producto.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-29",
   "expected": "Se muestra el flujo Sin cobertura (B2C-123) y, al volver a cargar la landing, sigue mostrándose Vilanova 122, Las Condes: el segmento no se re-asigna.",
   "form_factor": "mobile",
   "id": "TC-B2C61-M-023",
   "name": "Verificar que al elegir una tienda de retiro sin cobertura se activa Sin cobertura sin re-asignar segmento [Mobile] [Logueado]",
   "observation": "Causa: token(s) en TBD en el Excel de data: {PD_LANDING_SEGMENTO_URL}; token(s) sin fila en el Excel de data: {CONTENIDO_SEGMENTO_RETIRO}. Acción: cargar el dato en el Excel de data (responsable de la data de prueba) y re-ejecutar con -\u002donly.",
   "observed": "No ejecutado: falta data de prueba.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta (cuenta del Excel de data)\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- El carro está vacío\n- La dirección activa es Calle Uno 23, La Florida (despacho a domicilio)\n- Unimarc Los Lagos II no tiene cobertura\n- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_RETIRO} para el segmento de Unimarc Las Condes y QA B2C-61 por defecto",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.\n2. El sistema muestra Vilanova 122, Las Condes.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\".\n5. El usuario toca la pestaña \"Retiro en tienda\", elige Unimarc Los Lagos II y toca \"Confirmar\".\n6. El sistema muestra el modal \"Autenticación requerida\" (B2C-125).\n7. El usuario ingresa el código OTP recibido y toca \"Continuar\".\n8. El sistema muestra el modal \"Aún no llegamos a esta dirección\".\n9. El usuario cierra el modal con la X.\n10. El usuario vuelve a cargar la landing.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-29",
   "expected": "Av Libertador Gral Bernardo O'Higgins 1072, Maipú queda seteada con el aviso \"Dirección sin horarios disponibles\" y, al volver a cargar la landing, se muestra {CONTENIDO_SEGMENTO_SIN_SLA} (segmento de su tienda abastecedora).",
   "form_factor": "mobile",
   "id": "TC-B2C61-M-024",
   "name": "Verificar que al continuar con una dirección de despacho sin horarios se asigna el segmento de su tienda abastecedora [Mobile] [Logueado]",
   "observation": "Causa: token(s) en TBD en el Excel de data: {PD_LANDING_SEGMENTO_URL}; token(s) sin fila en el Excel de data: {CONTENIDO_SEGMENTO_RETIRO}, {CONTENIDO_SEGMENTO_SIN_SLA}. Acción: cargar el dato en el Excel de data (responsable de la data de prueba) y re-ejecutar con -\u002donly.",
   "observed": "No ejecutado: falta data de prueba.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta (cuenta del Excel de data)\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- El carro está vacío\n- La dirección activa es Calle Uno 23, La Florida\n- Av Libertador Gral Bernardo O'Higgins 1072, Maipú tiene cobertura y no tiene SLAs disponibles; su tienda abastecedora es distinta a la de Calle Uno 23, La Florida\n- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_RETIRO} para el segmento de Unimarc Las Condes y QA B2C-61 por defecto\n- En BM, el segmento de la tienda abastecedora de Av Libertador Gral Bernardo O'Higgins 1072, Maipú tiene el contenido {CONTENIDO_SEGMENTO_SIN_SLA}",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.\n2. El sistema muestra Vilanova 122, Las Condes.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección Av Libertador Gral Bernardo O'Higgins 1072, Maipú, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Autenticación requerida\" (B2C-125).\n7. El usuario ingresa el código OTP recibido y toca \"Continuar\".\n8. El sistema muestra el modal \"Por ahora no hay horarios disponibles\".\n9. El usuario toca \"Continuar con esta dirección\".\n10. El usuario vuelve a cargar la landing.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-29",
   "expected": "Retiro en tienda en {TIENDA_RETIRO_SIN_SLA} queda seteado con el aviso \"Dirección sin horarios disponibles\" y, al volver a cargar la landing, se muestra {CONTENIDO_SEGMENTO_TIENDA_SIN_SLA} (segmento de la tienda de retiro).",
   "form_factor": "mobile",
   "id": "TC-B2C61-M-025",
   "name": "Verificar que al continuar con una tienda de retiro sin horarios se asigna el segmento de esa tienda [Mobile] [Logueado]",
   "observation": "Causa: token(s) en TBD en el Excel de data: {PD_LANDING_SEGMENTO_URL}, {TIENDA_RETIRO_SIN_SLA}; token(s) sin fila en el Excel de data: {CONTENIDO_SEGMENTO_RETIRO}, {CONTENIDO_SEGMENTO_TIENDA_SIN_SLA}. Acción: cargar el dato en el Excel de data (responsable de la data de prueba) y re-ejecutar con -\u002donly.",
   "observed": "No ejecutado: falta data de prueba.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta (cuenta del Excel de data)\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- El carro está vacío\n- La dirección activa es Calle Uno 23, La Florida (despacho a domicilio)\n- {TIENDA_RETIRO_SIN_SLA} tiene cobertura y no tiene SLAs disponibles\n- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido Vilanova 122, Las Condes para el segmento de la tienda de Calle Uno 23, La Florida, {CONTENIDO_SEGMENTO_RETIRO} para el segmento de Unimarc Las Condes y QA B2C-61 por defecto\n- En BM, el segmento de {TIENDA_RETIRO_SIN_SLA} tiene el contenido {CONTENIDO_SEGMENTO_TIENDA_SIN_SLA}",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {PD_LANDING_SEGMENTO_URL}.\n2. El sistema muestra Vilanova 122, Las Condes.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\".\n5. El usuario toca la pestaña \"Retiro en tienda\", elige {TIENDA_RETIRO_SIN_SLA} y toca \"Confirmar\".\n6. El sistema muestra el modal \"Autenticación requerida\" (B2C-125).\n7. El usuario ingresa el código OTP recibido y toca \"Continuar\".\n8. El sistema muestra el modal \"Por ahora no hay horarios disponibles\".\n9. El usuario toca \"Continuar con esta dirección\".\n10. El usuario vuelve a cargar la landing.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).",
   "viewport": "390x844"
  }
 ]
}
-->
