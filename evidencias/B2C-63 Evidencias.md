# B2C-63 - Completa la promo - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-63 |
| Última actualización | 2026-10-27 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | chromium |
| Dispositivo Android | Pixel 6 · Android 14 (emulador) |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP1/B2C-63 Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 39 |
| Aprobado | 9 |
| Rechazado | 5 |
| **Total** | **53** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-27 | 53 | TC-63-D-001, TC-63-D-002, TC-63-D-003, TC-63-D-004, TC-63-D-005, TC-63-D-006, TC-63-D-007, TC-63-D-008, TC-63-D-009, TC-63-D-010, TC-63-D-011, TC-63-D-012, TC-63-D-013, TC-63-D-014, TC-63-D-015, TC-63-D-016, TC-63-D-017, TC-63-D-018, TC-63-D-019, TC-63-D-020, TC-63-D-021, TC-63-D-022, TC-63-D-023, TC-63-D-024, TC-63-D-025, TC-63-D-026, TC-63-M-001, TC-63-M-002, TC-63-M-003, TC-63-M-004, TC-63-M-005, TC-63-M-006, TC-63-M-007, TC-63-M-008, TC-63-M-009, TC-63-M-010, TC-63-M-011, TC-63-M-012, TC-63-M-013, TC-63-M-014, TC-63-M-015, TC-63-M-016, TC-63-M-017, TC-63-M-018, TC-63-M-019, TC-63-M-020, TC-63-M-021, TC-63-M-022, TC-63-M-023, TC-63-M-024, TC-63-M-025, TC-63-M-026, TC-B2C63-APP-007 |
| 2026-10-19 | 14 | TC-63-D-020, TC-63-D-021, TC-63-D-022, TC-63-D-023, TC-63-D-024, TC-63-D-025, TC-63-D-026, TC-63-M-020, TC-63-M-021, TC-63-M-022, TC-63-M-023, TC-63-M-024, TC-63-M-025, TC-63-M-026 |

## Detalle por caso de prueba

### TC-63-D-020 - Usuario invitado disminuye unidades desde un modal

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-27 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Spec | tests/B2C-63.spec.ts:137 |

**Precondiciones**

User type: Guest

Dirección de entrega seleccionada: {DIRECCION_DESPACHO_001} (Despacho a domicilio con cobertura)

Producto {SKU_COMPLETA_PROMO_2X1} con promo activa "Completa la promo" 2x1 (mismo SKU, sin código especial)

El carro contiene {SKU_COMPLETA_PROMO_2X1} x 2 (promo 2x1 completada)

Viewport Desktop 1280x900

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {PLP_URL_NxM} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas
- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN
- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

**Pasos ejecutados**

1. Navegar a {PLP_URL_NxM}.
2. Abrir un modal que contiene el shelf de {SKU_COMPLETA_PROMO_2X1} (desde la PLP o un carrusel).
3. Verificar que el sistema muestra el modal con el shelf en 2 unidades y la promo completada.
4. Hacer clic en "−" en el shelf del modal.
5. Verificar que el sistema actualiza la cantidad a 1, retrocede la barra de progreso a 1 de 2 y muestra "Agrega 1 y ahorra más".

**Resultado esperado**

Dentro del modal el contador queda en 1, la barra de progreso retrocede a 1 de 2 y el mensaje cambia a "Agrega 1 y ahorra más"; el carro queda con 1 unidad.

**Resultado obtenido**

Tras disminuir de 2 a 1 en el modal «Combina la promo», el shelf del modal queda en «En carro 1 un.» pero el modal muestra «Agrega 2 y ahorra más» y el contador «1 / 1 productos». Esperado: barra en 1 de 2 y «Agrega 1 y ahorra más».

**Observación**

El SKU declarado ({SKU_COMPLETA_PROMO_2X1}) rotula su mecánica «Combina la promo», no «Completa la promo» como dice la precondición; el comportamiento de progreso y mensajes es el que se evalúa. En la PLP el mismo SKU muestra «Agrega 1 y ahorra más» con 1 unidad.

**Evidencia**

![Paso 3 — modal con el shelf en 2 unidades](<B2C-63 Evidencias/TC-63-D-020-p03-modal-con-el-shelf-en-2-unidades.png>)

![Paso 4 — modal tras disminuir una unidad](<B2C-63 Evidencias/TC-63-D-020-p04-modal-tras-disminuir-una-unidad.png>)

---

### TC-63-D-021 - Usuario invitado quita una unidad desde la PDP

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-27 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Spec | tests/B2C-63.spec.ts:118 |

**Precondiciones**

User type: Guest

Dirección de entrega seleccionada: {DIRECCION_DESPACHO_001} (Despacho a domicilio con cobertura)

Producto {SKU_COMPLETA_PROMO_2X1} con promo activa "Completa la promo" 2x1 (mismo SKU, sin código especial)

El carro contiene {SKU_COMPLETA_PROMO_2X1} x 2 (promo 2x1 completada)

Viewport Desktop 1280x900

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {PLP_URL_NxM} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas
- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN
- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

**Pasos ejecutados**

1. Navegar a {BASE_URL}.
2. Abrir la PDP de {SKU_COMPLETA_PROMO_2X1}.
3. Verificar que el sistema carga la PDP con el contador en 2 y la barra de progreso completa.
4. Hacer clic en "−" en el stepper de la PDP.
5. Verificar que el sistema actualiza el contador a 1, retrocede la barra de progreso a 1 de 2 y muestra "Agrega 1 y ahorra más".

**Resultado esperado**

En la PDP el contador queda en 1, la barra de progreso retrocede a 1 de 2 y se muestra "Agrega 1 y ahorra más".

**Resultado obtenido**

La PDP pasa a «En carro 1 un.» (el stepper cambia al basurero), pero no muestra barra de progreso ni el mensaje «Agrega 1 y ahorra más»; solo queda el enlace «Combina la promo». Esperado: contador 1, barra en 1 de 2 y «Agrega 1 y ahorra más».

**Observación**

El SKU declarado ({SKU_COMPLETA_PROMO_2X1}) rotula su mecánica «Combina la promo», no «Completa la promo» como dice la precondición; el comportamiento de progreso y mensajes es el que se evalúa. En la PLP el mismo SKU sí muestra «Agrega 1 y ahorra más» (TC-63-D-024).

**Evidencia**

![Paso 3 — pdp con 2 unidades](<B2C-63 Evidencias/TC-63-D-021-p03-pdp-con-2-unidades.png>)

![Paso 4 — tras quitar una unidad](<B2C-63 Evidencias/TC-63-D-021-p04-tras-quitar-una-unidad.png>)

---

### TC-63-D-022 - Usuario invitado quita una unidad desde un carrusel del Home

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Spec | tests/B2C-63.spec.ts:168 |

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

No ejecutable: la precondición no se cumple en el ambiente.

**Observación**

El SKU {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home (58 shelves revisados), y la precondición lo exige. Acción: publicar el SKU en un carrusel del Home o declarar otro SKU que sí esté.

---

### TC-63-D-023 - Usuario invitado llega a 4 unidades en una promo 2x1

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Duración | 60.0 s |
| Spec | tests/B2C-63.spec.ts:232 |

**Precondiciones**

User type: Guest

Dirección de entrega seleccionada: {DIRECCION_DESPACHO_001} (Despacho a domicilio con cobertura)

Producto {SKU_COMPLETA_PROMO_2X1} con promo activa "Completa la promo" 2x1 (mismo SKU, sin código especial)

El carro contiene {SKU_COMPLETA_PROMO_2X1} x 3 (1er ciclo completado y 2º ciclo en 1 de 2)

Viewport Desktop 1280x900

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {PLP_URL_NxM} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas
- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN
- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

**Pasos ejecutados**

1. Navegar a {PLP_URL_NxM} y ubicar el shelf de {SKU_COMPLETA_PROMO_2X1}.
2. Verificar que el sistema muestra el shelf de {SKU_COMPLETA_PROMO_2X1} con el contador en 3 y la barra de progreso en 1 de 2.
3. Hacer clic en "+" en el shelf.
4. Verificar que el sistema actualiza el contador a 4, completa la barra de progreso y muestra el toast "¡Completaste la promo!".

**Resultado esperado**

Con 4 unidades se muestra nuevamente el toast "¡Completaste la promo!", la barra de progreso queda completa y el contador muestra 4.

**Resultado obtenido**

Con 3 unidades el shelf mostró «Agrega 1 y ahorra más»; al sumar la 4ª quedó en 4 y mostró «¡Completaste la promo!».

**Observación**

El SKU declarado ({SKU_COMPLETA_PROMO_2X1}) rotula su mecánica «Combina la promo», no «Completa la promo» como dice la precondición; el comportamiento de progreso y mensajes es el que se evalúa.

**Evidencia**

![Paso 2 — shelf con 3 unidades 1 de 2](<B2C-63 Evidencias/TC-63-D-023-p02-shelf-con-3-unidades-1-de-2.png>)

![Paso 4 — shelf con 4 unidades](<B2C-63 Evidencias/TC-63-D-023-p04-shelf-con-4-unidades.png>)

---

### TC-63-D-024 - Usuario invitado baja de 4 a 3 unidades en una promo 2x1

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Duración | 60.0 s |
| Spec | tests/B2C-63.spec.ts:248 |

**Precondiciones**

User type: Guest

Dirección de entrega seleccionada: {DIRECCION_DESPACHO_001} (Despacho a domicilio con cobertura)

Producto {SKU_COMPLETA_PROMO_2X1} con promo activa "Completa la promo" 2x1 (mismo SKU, sin código especial)

El carro contiene {SKU_COMPLETA_PROMO_2X1} x 4 (dos ciclos completos)

Viewport Desktop 1280x900

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {PLP_URL_NxM} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas
- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN
- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

**Pasos ejecutados**

1. Navegar a {PLP_URL_NxM} y ubicar el shelf de {SKU_COMPLETA_PROMO_2X1}.
2. Verificar que el sistema muestra el shelf de {SKU_COMPLETA_PROMO_2X1} con el contador en 4 y la barra de progreso completa.
3. Hacer clic en "−" en el shelf.
4. Verificar que el sistema actualiza el contador a 3, retrocede la barra de progreso a 1 de 2 y muestra "Agrega 1 y ahorra más".

**Resultado esperado**

Con 3 unidades el contador muestra 3, la barra de progreso queda en 1 de 2 (2º ciclo en progreso) y el mensaje cambia a "Agrega 1 y ahorra más"; el 1er ciclo sigue completo.

**Resultado obtenido**

Con 4 unidades el shelf quedó completo; al disminuir a 3 mostró «En carro 3 un.» y «Agrega 1 y ahorra más».

**Observación**

El SKU declarado ({SKU_COMPLETA_PROMO_2X1}) rotula su mecánica «Combina la promo», no «Completa la promo» como dice la precondición; el comportamiento de progreso y mensajes es el que se evalúa.

**Evidencia**

![Paso 2 — shelf con 4 unidades](<B2C-63 Evidencias/TC-63-D-024-p02-shelf-con-4-unidades.png>)

![Paso 4 — shelf con 3 unidades](<B2C-63 Evidencias/TC-63-D-024-p04-shelf-con-3-unidades.png>)

---

### TC-63-D-025 - Usuario invitado inicia la promo en el Home y la completa en la PDP

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Spec | tests/B2C-63.spec.ts:185 |

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

No ejecutable: la precondición no se cumple en el ambiente.

**Observación**

El SKU {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home (58 shelves revisados), y la precondición lo exige. Acción: publicar el SKU en un carrusel del Home o declarar otro SKU que sí esté.

---

### TC-63-D-026 - Usuario invitado inicia la promo en el Home y la completa en la PLP

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Spec | tests/B2C-63.spec.ts:210 |

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

No ejecutable: la precondición no se cumple en el ambiente.

**Observación**

El SKU {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home (58 shelves revisados), y la precondición lo exige. Acción: publicar el SKU en un carrusel del Home o declarar otro SKU que sí esté.

---

### TC-63-M-020 - Usuario invitado disminuye unidades desde un modal

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-27 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-63.spec.ts:137 |

**Precondiciones**

User type: Guest

Dirección de entrega seleccionada: {DIRECCION_DESPACHO_001} (Despacho a domicilio con cobertura)

Producto {SKU_COMPLETA_PROMO_2X1} con promo activa "Completa la promo" 2x1 (mismo SKU, sin código especial)

El carro contiene {SKU_COMPLETA_PROMO_2X1} x 2 (promo 2x1 completada)

Viewport Mobile 390x844

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {PLP_URL_NxM} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas
- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN
- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

**Pasos ejecutados**

1. Navegar a {PLP_URL_NxM}.
2. Abrir un modal que contiene el shelf de {SKU_COMPLETA_PROMO_2X1} (desde la PLP o un carrusel).
3. Verificar que el sistema muestra el modal con el shelf en 2 unidades y la promo completada.
4. Hacer tap en "−" en el shelf del modal.
5. Verificar que el sistema actualiza la cantidad a 1, retrocede la barra de progreso a 1 de 2 y muestra "Agrega 1 y ahorra más".

**Resultado esperado**

Dentro del modal el contador queda en 1, la barra de progreso retrocede a 1 de 2 y el mensaje cambia a "Agrega 1 y ahorra más"; el carro queda con 1 unidad.

**Resultado obtenido**

Tras disminuir de 2 a 1 en el modal «Combina la promo», el shelf del modal queda en «En carro 1 un.» pero el modal muestra «Agrega 2 y ahorra más» y el contador «1 / 1 productos». Esperado: barra en 1 de 2 y «Agrega 1 y ahorra más».

**Observación**

El SKU declarado ({SKU_COMPLETA_PROMO_2X1}) rotula su mecánica «Combina la promo», no «Completa la promo» como dice la precondición; el comportamiento de progreso y mensajes es el que se evalúa. En la PLP el mismo SKU muestra «Agrega 1 y ahorra más» con 1 unidad.

**Evidencia**

![Paso 3 — modal con el shelf en 2 unidades](<B2C-63 Evidencias/TC-63-M-020-p03-modal-con-el-shelf-en-2-unidades.png>)

![Paso 4 — modal tras disminuir una unidad](<B2C-63 Evidencias/TC-63-M-020-p04-modal-tras-disminuir-una-unidad.png>)

---

### TC-63-M-021 - Usuario invitado quita una unidad desde la PDP

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-27 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-63.spec.ts:118 |

**Precondiciones**

User type: Guest

Dirección de entrega seleccionada: {DIRECCION_DESPACHO_001} (Despacho a domicilio con cobertura)

Producto {SKU_COMPLETA_PROMO_2X1} con promo activa "Completa la promo" 2x1 (mismo SKU, sin código especial)

El carro contiene {SKU_COMPLETA_PROMO_2X1} x 2 (promo 2x1 completada)

Viewport Mobile 390x844

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {PLP_URL_NxM} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas
- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN
- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

**Pasos ejecutados**

1. Navegar a {BASE_URL}.
2. Abrir la PDP de {SKU_COMPLETA_PROMO_2X1}.
3. Verificar que el sistema carga la PDP con el contador en 2 y la barra de progreso completa.
4. Hacer tap en "−" en el stepper de la PDP.
5. Verificar que el sistema actualiza el contador a 1, retrocede la barra de progreso a 1 de 2 y muestra "Agrega 1 y ahorra más".

**Resultado esperado**

En la PDP el contador queda en 1, la barra de progreso retrocede a 1 de 2 y se muestra "Agrega 1 y ahorra más".

**Resultado obtenido**

La PDP pasa a «En carro 1 un.» (el stepper cambia al basurero), pero no muestra barra de progreso ni el mensaje «Agrega 1 y ahorra más»; solo queda el enlace «Combina la promo». Esperado: contador 1, barra en 1 de 2 y «Agrega 1 y ahorra más».

**Observación**

El SKU declarado ({SKU_COMPLETA_PROMO_2X1}) rotula su mecánica «Combina la promo», no «Completa la promo» como dice la precondición; el comportamiento de progreso y mensajes es el que se evalúa. En la PLP el mismo SKU sí muestra «Agrega 1 y ahorra más» (TC-63-M-024).

**Evidencia**

![Paso 3 — pdp con 2 unidades](<B2C-63 Evidencias/TC-63-M-021-p03-pdp-con-2-unidades.png>)

![Paso 4 — tras quitar una unidad](<B2C-63 Evidencias/TC-63-M-021-p04-tras-quitar-una-unidad.png>)

---

### TC-63-M-022 - Usuario invitado quita una unidad desde un carrusel del Home

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-63.spec.ts:168 |

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

No ejecutable: la precondición no se cumple en el ambiente.

**Observación**

El SKU {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home (58 shelves revisados), y la precondición lo exige. Acción: publicar el SKU en un carrusel del Home o declarar otro SKU que sí esté.

---

### TC-63-M-023 - Usuario invitado llega a 4 unidades en una promo 2x1

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Duración | 59.0 s |
| Spec | tests/B2C-63.spec.ts:232 |

**Precondiciones**

User type: Guest

Dirección de entrega seleccionada: {DIRECCION_DESPACHO_001} (Despacho a domicilio con cobertura)

Producto {SKU_COMPLETA_PROMO_2X1} con promo activa "Completa la promo" 2x1 (mismo SKU, sin código especial)

El carro contiene {SKU_COMPLETA_PROMO_2X1} x 3 (1er ciclo completado y 2º ciclo en 1 de 2)

Viewport Mobile 390x844

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {PLP_URL_NxM} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas
- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN
- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

**Pasos ejecutados**

1. Navegar a {PLP_URL_NxM} y ubicar el shelf de {SKU_COMPLETA_PROMO_2X1}.
2. Verificar que el sistema muestra el shelf de {SKU_COMPLETA_PROMO_2X1} con el contador en 3 y la barra de progreso en 1 de 2.
3. Hacer tap en "+" en el shelf.
4. Verificar que el sistema actualiza el contador a 4, completa la barra de progreso y muestra el toast "¡Completaste la promo!".

**Resultado esperado**

Con 4 unidades se muestra nuevamente el toast "¡Completaste la promo!", la barra de progreso queda completa y el contador muestra 4.

**Resultado obtenido**

Con 3 unidades el shelf mostró «Agrega 1 y ahorra más»; al sumar la 4ª quedó en 4 y mostró «¡Completaste la promo!».

**Observación**

El SKU declarado ({SKU_COMPLETA_PROMO_2X1}) rotula su mecánica «Combina la promo», no «Completa la promo» como dice la precondición; el comportamiento de progreso y mensajes es el que se evalúa.

**Evidencia**

![Paso 2 — shelf con 3 unidades 1 de 2](<B2C-63 Evidencias/TC-63-M-023-p02-shelf-con-3-unidades-1-de-2.png>)

![Paso 4 — shelf con 4 unidades](<B2C-63 Evidencias/TC-63-M-023-p04-shelf-con-4-unidades.png>)

---

### TC-63-M-024 - Usuario invitado baja de 4 a 3 unidades en una promo 2x1

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Duración | 58.0 s |
| Spec | tests/B2C-63.spec.ts:248 |

**Precondiciones**

User type: Guest

Dirección de entrega seleccionada: {DIRECCION_DESPACHO_001} (Despacho a domicilio con cobertura)

Producto {SKU_COMPLETA_PROMO_2X1} con promo activa "Completa la promo" 2x1 (mismo SKU, sin código especial)

El carro contiene {SKU_COMPLETA_PROMO_2X1} x 4 (dos ciclos completos)

Viewport Mobile 390x844

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {PLP_URL_NxM} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas
- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN
- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

**Pasos ejecutados**

1. Navegar a {PLP_URL_NxM} y ubicar el shelf de {SKU_COMPLETA_PROMO_2X1}.
2. Verificar que el sistema muestra el shelf de {SKU_COMPLETA_PROMO_2X1} con el contador en 4 y la barra de progreso completa.
3. Hacer tap en "−" en el shelf.
4. Verificar que el sistema actualiza el contador a 3, retrocede la barra de progreso a 1 de 2 y muestra "Agrega 1 y ahorra más".

**Resultado esperado**

Con 3 unidades el contador muestra 3, la barra de progreso queda en 1 de 2 (2º ciclo en progreso) y el mensaje cambia a "Agrega 1 y ahorra más"; el 1er ciclo sigue completo.

**Resultado obtenido**

Con 4 unidades el shelf quedó completo; al disminuir a 3 mostró «En carro 3 un.» y «Agrega 1 y ahorra más».

**Observación**

El SKU declarado ({SKU_COMPLETA_PROMO_2X1}) rotula su mecánica «Combina la promo», no «Completa la promo» como dice la precondición; el comportamiento de progreso y mensajes es el que se evalúa.

**Evidencia**

![Paso 2 — shelf con 4 unidades](<B2C-63 Evidencias/TC-63-M-024-p02-shelf-con-4-unidades.png>)

![Paso 4 — shelf con 3 unidades](<B2C-63 Evidencias/TC-63-M-024-p04-shelf-con-3-unidades.png>)

---

### TC-63-M-025 - Usuario invitado inicia la promo en el Home y la completa en la PDP

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-63.spec.ts:185 |

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

No ejecutable: la precondición no se cumple en el ambiente.

**Observación**

El SKU {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home (58 shelves revisados), y la precondición lo exige. Acción: publicar el SKU en un carrusel del Home o declarar otro SKU que sí esté.

---

### TC-63-M-026 - Usuario invitado inicia la promo en el Home y la completa en la PLP

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-63.spec.ts:210 |

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

No ejecutable: la precondición no se cumple en el ambiente.

**Observación**

El SKU {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home (58 shelves revisados), y la precondición lo exige. Acción: publicar el SKU en un carrusel del Home o declarar otro SKU que sí esté.

---

### TC-B2C63-APP-007 - Verificar que un usuario logueado ve el toast al agregar desde el shelf

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | tests-app/B2C-63-50-pendientes.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Resultados de búsqueda
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)
- 000000000664214001-UN tiene una promo "Completa la promo" 2x1 vigente (mismo SKU, sin código especial)

**Data utilizada**

- v1.0.1 = TBD
- 000000000664214001-UN = TBD
- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000664214001-UN y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de 000000000664214001-UN.
4. El usuario toca "Agregar" en el shelf.
5. El sistema agrega la unidad y muestra el toast "Agrega 1 y ahorra más" con la barra de progreso en 1 de 2.

**Resultado esperado**

Se muestra el toast "Agrega 1 y ahorra más" con la barra de progreso.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): al tocar «Agregar» en el shelf de 000000000664214001-UN (promo 2×1 a $2.550) la unidad se agrega (el shelf pasa a «En carro 1 un.» y el carro flotante a 2 unidades), pero no aparece el toast «Agrega 1 y ahorra más» ni la barra de progreso: cuatro capturas inmediatas (≈2 s) y la captura posterior del shelf no los muestran. Reproducido en la corrida automatizada y en una repetición manual; la unidad agregada se quitó al terminar. Bug: B2C-1364.

**Evidencia**

![Android · Paso 2 — shelf de 000000000664214001 un en los resultados](<B2C-63 Evidencias/TC-B2C63-APP-007-android-p02-shelf-de-000000000664214001-un-en-los-resultados.png>)

![Android · Paso 4 — captura inmediata tras agregar sin toast](<B2C-63 Evidencias/TC-B2C63-APP-007-android-p04-captura-inmediata-tras-agregar-sin-toast.png>)

![Android · Paso 6 — shelf tras agregar](<B2C-63 Evidencias/TC-B2C63-APP-007-android-p06-shelf-tras-agregar.png>)

![Android · Estado final](<B2C-63 Evidencias/TC-B2C63-APP-007-android.png>)

---

### TC-63-D-003 - Barra de progreso y contador actualizan en tiempo real al agregar (Guest)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Duración | 78.0 s |
| Spec | tests/B2C-63.spec.ts:80 |

**Precondiciones**

User type: Guest

El usuario tiene ha ingresado y seleccionado una dirección de entrega

Producto con promo activa "Completa la promo" tipo 3x2 en PLP (umbral: 3 unidades)

Carrito vacío

Viewport Desktop 1280x900

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {DIRECCION_DESPACHO_003} = TBD
- {SKU_PROM_NxM} = SKU del producto con promo "Completa la promo" tipo 3x2 activa en el ambiente de prueba

**Pasos ejecutados**

1. Navegar a la PLP con el producto con promo 3x2.
2. Hacer clic en "+" → observar barra de progreso, toast y contador (debería mostrar 1/3).
3. Hacer clic en "+" nuevamente → observar barra, toast y contador (debería mostrar 2/3).
4. Hacer clic en "+" una vez más → observar barra, toast y contador (debería mostrar 3/3, promo completada).
5. Verificar que en cada paso la UI se actualiza sin recarga completa de la página.

**Resultado esperado**

En cada paso la barra de progreso avanza correctamente (1/3, 2/3, 3/3). Los mensajes del toast cambian acordemente ("Agrega 2 más", "Agrega 1 más", "¡Completaste la promo!"). No se produce recarga de la página entre pasos. El contador del producto refleja 1, 2, 3 unidades respectivamente.

**Resultado obtenido**

Con la 1ª, 2ª y 3ª unidad el shelf mostró «Agrega 2…», «Agrega 1…» y «¡Completaste la promo!»; sin recargar la página.

**Observación**

El SKU 3x2 ({SKU_PROM_NxM}) rotula «Combina la promo».

**Evidencia**

![Paso 1 — shelf 3x2 antes de agregar](<B2C-63 Evidencias/TC-63-D-003-p01-shelf-3x2-antes-de-agregar.png>)

![Paso 2 — tras la 1 unidad](<B2C-63 Evidencias/TC-63-D-003-p02-tras-la-1-unidad.png>)

![Paso 3 — tras la 2 unidad](<B2C-63 Evidencias/TC-63-D-003-p03-tras-la-2-unidad.png>)

![Paso 4 — tras la 3 unidad](<B2C-63 Evidencias/TC-63-D-003-p04-tras-la-3-unidad.png>)

---

### TC-63-D-009 - Disminuir unidades desde shelf recalcula progreso promocional (Guest)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Duración | 53.0 s |
| Spec | tests/B2C-63.spec.ts:102 |

**Precondiciones**

User type: Guest

El usuario tiene ha ingresado y seleccionado una dirección de entrega

Producto con promo "Completa la promo" tipo 3x2 en PLP

2 unidades ya en el carrito (progreso 2/3)

Viewport Desktop 1280x900

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {DIRECCION_DESPACHO_003} = TBD
- {SKU_PROM_NxM} = SKU del producto con promo "Completa la promo" tipo 3x2 activa en el ambiente de prueba
- {UNIDADES_CARRITO_INICIAL_2} = 2 (unidades del producto ya en el carrito al iniciar el test)

**Pasos ejecutados**

1. Navegar a la PLP (el carrito tiene 2 unidades del producto con promo 3x2, progreso 2/3).
2. Hacer clic en "-" en el shelf para disminuir a 1 unidad.
3. Observar la barra de progreso y el toast resultante.

**Resultado esperado**

La barra de progreso retrocede a 1/3. El toast actualiza el mensaje ("Agrega 2 más y ahorra más"). El contador del producto en el shelf refleja 1 unidad. No se produce recarga de la página.

**Resultado obtenido**

Al disminuir de 2 a 1 el shelf quedó en «En carro 1 un.» y mostró «Agrega 2 y ahorra más».

**Observación**

El SKU 3x2 ({SKU_PROM_NxM}) rotula «Combina la promo».

**Evidencia**

![Paso 1 — carrito con 2 unidades 2 3](<B2C-63 Evidencias/TC-63-D-009-p01-carrito-con-2-unidades-2-3.png>)

![Paso 2 — tras disminuir a 1](<B2C-63 Evidencias/TC-63-D-009-p02-tras-disminuir-a-1.png>)

---

### TC-63-M-003 - Barra de progreso y contador actualizan en tiempo real al agregar (Guest)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Duración | 60.0 s |
| Spec | tests/B2C-63.spec.ts:80 |

**Precondiciones**

User type: Guest

Producto con promo activa "Completa la promo" 3x2 en PLP (umbral: 3 unidades)

Carrito vacío

Viewport Mobile 390x844

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {DIRECCION_DESPACHO_003} = TBD
- {SKU_PROM_NxM} = SKU del producto con promo "Completa la promo" tipo 3x2 activa en el ambiente de prueba

**Pasos ejecutados**

1. Navegar a la PLP en Mobile con el producto con promo 3x2.
2. Hacer tap en "+" → observar barra de progreso, toast y contador (1/3).
3. Hacer tap en "+" → observar barra, toast y contador (2/3).
4. Hacer tap en "+" → observar barra, toast y contador (3/3, promo completada).
5. Verificar que la UI se actualiza sin recarga de página.

**Resultado esperado**

En cada paso la barra de progreso avanza (1/3, 2/3, 3/3). Los toasts cambian acordemente ("Agrega 2 más", "Agrega 1 más", "¡Completaste la promo!"). No se produce recarga de la página. El contador refleja 1, 2, 3 unidades.

**Resultado obtenido**

Con la 1ª, 2ª y 3ª unidad el shelf mostró «Agrega 2…», «Agrega 1…» y «¡Completaste la promo!»; sin recargar la página.

**Observación**

El SKU 3x2 ({SKU_PROM_NxM}) rotula «Combina la promo».

**Evidencia**

![Paso 1 — shelf 3x2 antes de agregar](<B2C-63 Evidencias/TC-63-M-003-p01-shelf-3x2-antes-de-agregar.png>)

![Paso 2 — tras la 1 unidad](<B2C-63 Evidencias/TC-63-M-003-p02-tras-la-1-unidad.png>)

![Paso 3 — tras la 2 unidad](<B2C-63 Evidencias/TC-63-M-003-p03-tras-la-2-unidad.png>)

![Paso 4 — tras la 3 unidad](<B2C-63 Evidencias/TC-63-M-003-p04-tras-la-3-unidad.png>)

---

### TC-63-M-009 - Disminuir unidades desde shelf recalcula progreso promocional (Guest)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Duración | 59.0 s |
| Spec | tests/B2C-63.spec.ts:102 |

**Precondiciones**

User type: Guest

Producto con promo "Completa la promo" 3x2 en PLP

2 unidades en el carrito (progreso 2/3)

Viewport Mobile 390x844

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {DIRECCION_DESPACHO_003} = TBD
- {SKU_PROM_NxM} = SKU del producto con promo "Completa la promo" tipo 3x2 activa en el ambiente de prueba
- {UNIDADES_CARRITO_INICIAL_2} = 2 (unidades del producto ya en el carrito al iniciar el test)

**Pasos ejecutados**

1. Navegar a la PLP en Mobile (el carrito tiene 2 unidades, promo 3x2, progreso 2/3).
2. Hacer tap en "-" en el shelf para disminuir a 1 unidad.
3. Observar la barra de progreso y el toast resultante.

**Resultado esperado**

La barra de progreso retrocede a 1/3 en Mobile. El toast actualiza el mensaje ("Agrega 2 más y ahorra más"). El contador refleja 1 unidad. No se produce recarga.

**Resultado obtenido**

Al disminuir de 2 a 1 el shelf quedó en «En carro 1 un.» y mostró «Agrega 2 y ahorra más».

**Observación**

El SKU 3x2 ({SKU_PROM_NxM}) rotula «Combina la promo».

**Evidencia**

![Paso 1 — carrito con 2 unidades 2 3](<B2C-63 Evidencias/TC-63-M-009-p01-carrito-con-2-unidades-2-3.png>)

![Paso 2 — tras disminuir a 1](<B2C-63 Evidencias/TC-63-M-009-p02-tras-disminuir-a-1.png>)

---

### TC-63-D-001 - Toast 'Agrega N y ahorra más' al agregar 1ª unidad desde PLP (Guest)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | desktop |
| Viewport | 1280x900 |

**Precondiciones**

User type: Guest

El usuario tiene ha ingresado y seleccionado una dirección de entrega

Producto con promo activa "Completa la promo" tipo 2x1 disponible en PLP

Carrito vacío

Viewport Desktop 1280x900

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {DIRECCION_DESPACHO_003} = TBD
- {SKU_PROM_2X1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba

**Pasos ejecutados**

1. Navegar a la PLP de una categoría que contenga un producto con promo "Completa la promo" (ej. promo 2x1).
2. Localizar el producto con la promo activa en el shelf de la PLP.
3. Hacer clic en el botón "+" o "Agregar" del producto en el shelf.
4. Observar el toast que aparece tras la acción.
5. Verificar el texto del mensaje, la barra de progreso y el contador de unidades.

**Resultado esperado**

Se muestra un toast con el mensaje "Agrega 1 más y ahorra más" (o equivalente indicando las unidades faltantes para el siguiente tramo). La barra de progreso refleja 1 de N unidades. El contador del producto en el shelf se actualiza a 1.

**Resultado obtenido**

No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

**Observación**

token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

---

### TC-63-D-002 - Toast '¡Completaste la promo!' al alcanzar umbral desde PLP (Guest)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | desktop |
| Viewport | 1280x900 |

**Precondiciones**

User type: Guest

El usuario tiene ha ingresado y seleccionado una dirección de entrega

Producto con promo activa "Completa la promo" tipo 2x1 disponible en PLP

1 unidad del producto ya agregada al carrito (faltan N-1 para completar)

Viewport Desktop 1280x900

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {DIRECCION_DESPACHO_003} = TBD
- {SKU_PROM_2X1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
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

No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

**Observación**

token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

---

### TC-63-D-004 - Toast progresivo al agregar desde PDP (Guest)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | desktop |
| Viewport | 1280x900 |

**Precondiciones**

User type: Guest

El usuario tiene ha ingresado y seleccionado una dirección de entrega

PDP de un producto con promo activa "Completa la promo" 2x1 abierta

Carrito vacío

Viewport Desktop 1280x900

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {DIRECCION_DESPACHO_003} = TBD
- {SKU_PROM_2X1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba

**Pasos ejecutados**

1. Navegar a la PDP del producto con promo "Completa la promo" 2x1.
2. Hacer clic en el botón "+ Agregar al carrito" o en el stepper (+).
3. Observar el toast que aparece tras la acción.
4. Verificar el texto del mensaje y la barra de progreso.

**Resultado esperado**

Se muestra el toast "Agrega 1 más y ahorra más" desde la PDP. La barra de progreso refleja 1 de 2 unidades. El comportamiento es idéntico al de la PLP.

**Resultado obtenido**

No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

**Observación**

token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

---

### TC-63-D-005 - Toast progresivo al agregar desde Modal de producto (Guest)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | desktop |
| Viewport | 1280x900 |

**Precondiciones**

User type: Guest

El usuario tiene ha ingresado y seleccionado una dirección de entrega

Modal de producto con promo activa "Completa la promo" 2x1 accesible desde PLP o carrusel

Carrito vacío

Viewport Desktop 1280x900

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {DIRECCION_DESPACHO_003} = TBD
- {SKU_PROM_2X1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba

**Pasos ejecutados**

1. Navegar a la PLP o Home donde aparece el producto con promo en el shelf/carrusel.
2. Abrir el modal del producto (ej. clic en el nombre del producto o en "ver detalle").
3. Dentro del modal, hacer clic en "+" para agregar 1 unidad.
4. Observar el toast que aparece y la barra de progreso.

**Resultado esperado**

Se muestra el toast "Agrega 1 más y ahorra más" al agregar desde el modal. La barra de progreso y el contador se actualizan correctamente dentro del modal.

**Resultado obtenido**

No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

**Observación**

token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

---

### TC-63-D-006 - Toast progresivo al agregar desde Carrusel/Shelf en Home (Guest)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | desktop |
| Viewport | 1280x900 |

**Precondiciones**

User type: Guest

El usuario tiene ha ingresado y seleccionado una dirección de entrega

Producto con promo activa "Completa la promo" 2x1 visible en carrusel/shelf del Home

Carrito vacío

Viewport Desktop 1280x900

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {DIRECCION_DESPACHO_003} = TBD
- {SKU_PROM_2X1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba

**Pasos ejecutados**

1. Navegar al Home de la tienda.
2. Localizar el carrusel/shelf que muestra el producto con promo "Completa la promo".
3. Hacer clic en el botón "+" del producto en el shelf del carrusel.
4. Observar el toast que aparece y la actualización del contador.

**Resultado esperado**

Se muestra el toast "Agrega 1 más y ahorra más". La barra de progreso refleja 1 de N unidades. El comportamiento es consistente con el de PLP y PDP.

**Resultado obtenido**

No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

**Observación**

token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

---

### TC-63-D-007 - Toast al quitar unidades regresa a estado en-progreso (Guest)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | desktop |
| Viewport | 1280x900 |

**Precondiciones**

User type: Guest

El usuario tiene ha ingresado y seleccionado una dirección de entrega

Producto con promo "Completa la promo" 2x1

2 unidades ya en el carrito (promo completada, toast '¡Completaste la promo!' previamente mostrado)

Viewport Desktop 1280x900

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {DIRECCION_DESPACHO_003} = TBD
- {SKU_PROM_2X1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
- {UNIDADES_CARRITO_INICIAL_2} = 2 (unidades del producto ya en el carrito al iniciar el test)

**Pasos ejecutados**

1. Navegar a la PLP (el carrito tiene 2 unidades, promo 2x1 completada).
2. Localizar el producto en el shelf.
3. Hacer clic en "-" para quitar 1 unidad.
4. Observar el toast que aparece y el estado de la barra de progreso.

**Resultado esperado**

Se muestra el toast "Agrega 1 más y ahorra más" (regreso al estado en-progreso). La barra de progreso retrocede a 1 de 2. El contador del producto en el shelf se actualiza a 1 unidad.

**Resultado obtenido**

No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

**Observación**

token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

---

### TC-63-D-008 - Recurrencia 2x1 — 3ª unidad reinicia ciclo promocional (Guest)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | desktop |
| Viewport | 1280x900 |

**Precondiciones**

User type: Guest

El usuario tiene ha ingresado y seleccionado una dirección de entrega

Producto con promo "Completa la promo" tipo 2x1 en PLP

2 unidades ya en el carrito (1er tramo completado)

Viewport Desktop 1280x900

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {DIRECCION_DESPACHO_003} = TBD
- {SKU_PROM_2X1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
- {UNIDADES_CARRITO_INICIAL_2} = 2 (unidades del producto ya en el carrito al iniciar el test)

**Pasos ejecutados**

1. Navegar a la PLP (carrito tiene 2 unidades, toast '¡Completaste la promo!' previamente mostrado).
2. Hacer clic en "+" para agregar la 3ª unidad.
3. Observar el toast que aparece y la barra de progreso.

**Resultado esperado**

Se muestra el toast "Agrega 1 más y ahorra más" (inicio del 2° ciclo). La barra de progreso muestra 1 de 2 (reiniciada para el nuevo tramo). El contador del producto refleja 3 unidades totales en el carrito.

**Resultado obtenido**

No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

**Observación**

token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

---

### TC-63-D-010 - Eliminar producto desde shelf resetea progreso y oculta toast (Guest)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | desktop |
| Viewport | 1280x900 |

**Precondiciones**

User type: Guest

El usuario tiene ha ingresado y seleccionado una dirección de entrega

Producto con promo "Completa la promo" 2x1 en PLP

1 unidad del producto en el carrito

Viewport Desktop 1280x900

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {DIRECCION_DESPACHO_003} = TBD
- {SKU_PROM_2X1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
- {UNIDADES_CARRITO_INICIAL_1} = 1 (unidad del producto ya en el carrito al iniciar el test)

**Pasos ejecutados**

1. Navegar a la PLP (el carrito tiene 1 unidad del producto en promo).
2. Hacer clic en "-" hasta llegar a 0 unidades (o usar el botón de eliminar si aplica).
3. Observar la UI del shelf y el estado de la barra de progreso.

**Resultado esperado**

El producto es eliminado del carrito. La barra de progreso desaparece o se resetea a 0. Los mensajes del toast de la promo no se muestran. El botón del shelf vuelve al estado inicial ("Agregar").

**Resultado obtenido**

No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

**Observación**

token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

---

### TC-63-D-011 - Toast 'Agrega N y ahorra más' al agregar desde PLP (Logueado)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | desktop |
| Viewport | 1280x900 |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

Producto con promo activa "Completa la promo" 2x1 en PLP

Carrito vacío

Viewport Desktop 1280x900

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {SKU_PROM_2X1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
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

No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

**Observación**

token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

---

### TC-63-D-012 - Toast '¡Completaste la promo!' al alcanzar umbral desde PLP (Logueado)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | desktop |
| Viewport | 1280x900 |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

Producto con promo "Completa la promo" 2x1 en PLP

1 unidad del producto ya en el carrito

Viewport Desktop 1280x900

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {SKU_PROM_2X1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
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

No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

**Observación**

token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

---

### TC-63-D-013 - Toast progresivo al agregar desde PDP (Logueado)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | desktop |
| Viewport | 1280x900 |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

PDP de producto con promo activa "Completa la promo" 2x1 abierta

Carrito vacío

Viewport Desktop 1280x900

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {SKU_PROM_2X1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
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

No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

**Observación**

token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

---

### TC-63-D-014 - Toast progresivo al agregar desde Modal de producto (Logueado)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | desktop |
| Viewport | 1280x900 |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

Modal de producto con promo activa "Completa la promo" 2x1 accesible desde PLP o carrusel

Carrito vacío

Viewport Desktop 1280x900

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {SKU_PROM_2X1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
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

No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

**Observación**

token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

---

### TC-63-D-015 - Toast progresivo al agregar desde Carrusel/Shelf en Home (Logueado)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | desktop |
| Viewport | 1280x900 |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

Producto con promo activa "Completa la promo" 2x1 visible en carrusel/shelf del Home

Carrito vacío

Viewport Desktop 1280x900

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {SKU_PROM_2X1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
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

No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

**Observación**

token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

---

### TC-63-D-016 - Toast al quitar unidades regresa a estado en-progreso (Logueado)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | desktop |
| Viewport | 1280x900 |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

Producto con promo "Completa la promo" 2x1 en PLP

2 unidades en el carrito (promo completada)

Viewport Desktop 1280x900

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {SKU_PROM_2X1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
- {UNIDADES_CARRITO_INICIAL} = 2 (unidades del producto ya en el carrito al iniciar el test)
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

No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}, {UNIDADES_CARRITO_INICIAL}

**Observación**

token(s) sin fila en el Excel de data: {SKU_PROM_2X1}, {UNIDADES_CARRITO_INICIAL}

---

### TC-63-D-017 - Recurrencia 2x1 — 3ª unidad reinicia ciclo promocional (Logueado)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | desktop |
| Viewport | 1280x900 |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

Producto con promo "Completa la promo" 2x1 en PLP

2 unidades ya en el carrito (1er tramo completado)

Viewport Desktop 1280x900

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {SKU_PROM_2X1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
- {UNIDADES_CARRITO_INICIAL} = 2 (unidades del producto ya en el carrito al iniciar el test)
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

No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}, {UNIDADES_CARRITO_INICIAL}

**Observación**

token(s) sin fila en el Excel de data: {SKU_PROM_2X1}, {UNIDADES_CARRITO_INICIAL}

---

### TC-63-D-018 - Disminuir unidades recalcula progreso promocional (Logueado)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | desktop |
| Viewport | 1280x900 |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

Producto con promo "Completa la promo" tipo 3x2 en PLP

2 unidades en el carrito (progreso 2/3)

Viewport Desktop 1280x900

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {SKU_PROM_NxM} = SKU del producto con promo "Completa la promo" tipo 3x2 activa en el ambiente de prueba
- {UNIDADES_CARRITO_INICIAL} = 2 (unidades del producto ya en el carrito al iniciar el test)
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

No se ejecutó: token(s) sin fila en el Excel de data: {UNIDADES_CARRITO_INICIAL}

**Observación**

token(s) sin fila en el Excel de data: {UNIDADES_CARRITO_INICIAL}

---

### TC-63-D-019 - Eliminar producto resetea progreso y oculta toast (Logueado)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | desktop |
| Viewport | 1280x900 |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

Producto con promo "Completa la promo" 2x1 en PLP

1 unidad del producto en el carrito

Viewport Desktop 1280x900

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {SKU_PROM_2X1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
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

No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

**Observación**

token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

---

### TC-63-M-001 - Toast 'Agrega N y ahorra más' al agregar 1ª unidad desde PLP (Guest)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

User type: Guest

Producto con promo activa "Completa la promo" 2x1 disponible en PLP

Carrito vacío

Viewport Mobile 390x844

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {DIRECCION_DESPACHO_003} = TBD
- {SKU_PROM_2X1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba

**Pasos ejecutados**

1. Navegar a la PLP en Mobile con un producto en promo "Completa la promo" 2x1.
2. Localizar el producto con la promo activa en el shelf.
3. Hacer tap en el botón "+" o "Agregar" del producto.
4. Observar el toast que aparece.
5. Verificar el texto del toast y la barra de progreso.

**Resultado esperado**

Se muestra un toast con el mensaje "Agrega 1 más y ahorra más" en Mobile. La barra de progreso refleja 1 de N unidades. El contador del producto en el shelf se actualiza a 1.

**Resultado obtenido**

No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

**Observación**

token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

---

### TC-63-M-002 - Toast '¡Completaste la promo!' al alcanzar umbral desde PLP (Guest)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

User type: Guest

Producto con promo activa "Completa la promo" 2x1 en PLP

1 unidad del producto ya en el carrito

Viewport Mobile 390x844

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {DIRECCION_DESPACHO_003} = TBD
- {SKU_PROM_2X1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
- {UNIDADES_CARRITO_INICIAL_1} = 1 (unidad del producto ya en el carrito al iniciar el test)

**Pasos ejecutados**

1. Navegar a la PLP en Mobile (el carrito tiene 1 unidad, promo 2x1).
2. Hacer tap en "+" para agregar la 2ª unidad.
3. Observar el toast que aparece.
4. Verificar el texto del toast y el estado de la barra de progreso.

**Resultado esperado**

Se muestra el toast "¡Completaste la promo!" en Mobile. La barra de progreso se muestra completa (2/2). El contador actualiza a 2 unidades.

**Resultado obtenido**

No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

**Observación**

token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

---

### TC-63-M-004 - Toast progresivo al agregar desde PDP (Guest)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

User type: Guest

PDP de producto con promo activa "Completa la promo" 2x1 abierta

Carrito vacío

Viewport Mobile 390x844

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {DIRECCION_DESPACHO_003} = TBD
- {SKU_PROM_2X1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba

**Pasos ejecutados**

1. Navegar a la PDP del producto con promo "Completa la promo" 2x1 en Mobile.
2. Hacer tap en el botón "+ Agregar al carrito" o en el stepper.
3. Observar el toast y la barra de progreso.

**Resultado esperado**

Se muestra el toast "Agrega 1 más y ahorra más" desde la PDP en Mobile. La barra de progreso refleja 1 de 2 unidades. El comportamiento es idéntico al de la PLP en Mobile.

**Resultado obtenido**

No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

**Observación**

token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

---

### TC-63-M-005 - Toast progresivo al agregar desde Modal de producto (Guest)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

User type: Guest

Modal de producto con promo activa "Completa la promo" 2x1 accesible desde PLP o carrusel

Carrito vacío

Viewport Mobile 390x844

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {DIRECCION_DESPACHO_003} = TBD
- {SKU_PROM_2X1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba

**Pasos ejecutados**

1. Navegar a la PLP o Home en Mobile donde aparece el producto con promo.
2. Abrir el modal del producto (tap en el nombre o "ver detalle").
3. Dentro del modal, hacer tap en "+" para agregar 1 unidad.
4. Observar el toast y la barra de progreso.

**Resultado esperado**

Se muestra el toast "Agrega 1 más y ahorra más" al agregar desde el modal en Mobile. La barra de progreso y el contador se actualizan correctamente.

**Resultado obtenido**

No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

**Observación**

token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

---

### TC-63-M-006 - Toast progresivo al agregar desde Carrusel/Shelf en Home (Guest)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

User type: Guest

Producto con promo activa "Completa la promo" 2x1 visible en carrusel/shelf del Home

Carrito vacío

Viewport Mobile 390x844

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {DIRECCION_DESPACHO_003} = TBD
- {SKU_PROM_2X1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba

**Pasos ejecutados**

1. Navegar al Home en Mobile.
2. Localizar el carrusel/shelf que muestra el producto con promo.
3. Hacer tap en el botón "+" del producto en el shelf.
4. Observar el toast y el contador.

**Resultado esperado**

Se muestra el toast "Agrega 1 más y ahorra más" en Mobile. La barra de progreso refleja 1 de N unidades. El comportamiento es consistente con PLP y PDP en Mobile.

**Resultado obtenido**

No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

**Observación**

token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

---

### TC-63-M-007 - Toast al quitar unidades regresa a estado en-progreso (Guest)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

User type: Guest

Producto con promo "Completa la promo" 2x1 en PLP

2 unidades en el carrito (promo completada)

Viewport Mobile 390x844

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {DIRECCION_DESPACHO_003} = TBD
- {SKU_PROM_2X1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
- {UNIDADES_CARRITO_INICIAL_2} = 2 (unidades del producto ya en el carrito al iniciar el test)

**Pasos ejecutados**

1. Navegar a la PLP en Mobile (el carrito tiene 2 unidades, promo 2x1 completada).
2. Hacer tap en "-" en el shelf para quitar 1 unidad.
3. Observar el toast y la barra de progreso.

**Resultado esperado**

Se muestra el toast "Agrega 1 más y ahorra más" en Mobile (regreso al estado en-progreso). La barra de progreso retrocede a 1 de 2. El contador actualiza a 1 unidad.

**Resultado obtenido**

No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

**Observación**

token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

---

### TC-63-M-008 - Recurrencia 2x1 — 3ª unidad reinicia ciclo promocional (Guest)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

User type: Guest

Producto con promo "Completa la promo" 2x1 en PLP

2 unidades en el carrito (1er tramo completado)

Viewport Mobile 390x844

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {DIRECCION_DESPACHO_003} = TBD
- {SKU_PROM_2X1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
- {UNIDADES_CARRITO_INICIAL_2} = 2 (unidades del producto ya en el carrito al iniciar el test)

**Pasos ejecutados**

1. Navegar a la PLP en Mobile (carrito tiene 2 unidades, promo completada).
2. Hacer tap en "+" para agregar la 3ª unidad.
3. Observar el toast y la barra de progreso.

**Resultado esperado**

Se muestra el toast "Agrega 1 más y ahorra más" (inicio del 2° ciclo) en Mobile. La barra de progreso muestra 1 de 2 (reiniciada). El contador refleja 3 unidades totales en el carrito.

**Resultado obtenido**

No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

**Observación**

token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

---

### TC-63-M-010 - Eliminar producto desde shelf resetea progreso y oculta toast (Guest)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

User type: Guest

Producto con promo "Completa la promo" 2x1 en PLP

1 unidad del producto en el carrito

Viewport Mobile 390x844

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {DIRECCION_DESPACHO_003} = TBD
- {SKU_PROM_2X1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
- {UNIDADES_CARRITO_INICIAL_1} = 1 (unidad del producto ya en el carrito al iniciar el test)

**Pasos ejecutados**

1. Navegar a la PLP en Mobile (el carrito tiene 1 unidad del producto en promo).
2. Hacer tap en "-" hasta 0 unidades o usar el botón de eliminar.
3. Observar la UI del shelf y la barra de progreso.

**Resultado esperado**

El producto es eliminado del carrito. La barra de progreso desaparece o se resetea en Mobile. Los mensajes del toast no se muestran. El botón del shelf vuelve al estado inicial ("Agregar").

**Resultado obtenido**

No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

**Observación**

token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

---

### TC-63-M-011 - Toast 'Agrega N y ahorra más' al agregar desde PLP (Logueado)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

Producto con promo activa "Completa la promo" 2x1 en PLP

Carrito vacío

Viewport Mobile 390x844

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {SKU_PROM_2X1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
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

No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

**Observación**

token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

---

### TC-63-M-012 - Toast '¡Completaste la promo!' al alcanzar umbral desde PLP (Logueado)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

Producto con promo "Completa la promo" 2x1 en PLP

1 unidad del producto en el carrito

Viewport Mobile 390x844

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {SKU_PROM_2X1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
- {UNIDADES_CARRITO_INICIAL} = 1 (unidad del producto ya en el carrito al iniciar el test)
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

No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}, {UNIDADES_CARRITO_INICIAL}

**Observación**

token(s) sin fila en el Excel de data: {SKU_PROM_2X1}, {UNIDADES_CARRITO_INICIAL}

---

### TC-63-M-013 - Toast progresivo al agregar desde PDP (Logueado)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

PDP de producto con promo activa "Completa la promo" 2x1 abierta

Carrito vacío

Viewport Mobile 390x844

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {SKU_PROM_2X1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
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

No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

**Observación**

token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

---

### TC-63-M-014 - Toast progresivo al agregar desde Modal de producto (Logueado)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

Modal de producto con promo activa "Completa la promo" 2x1 accesible

Carrito vacío

Viewport Mobile 390x844

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {SKU_PROM_2X1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
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

No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

**Observación**

token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

---

### TC-63-M-015 - Toast progresivo al agregar desde Carrusel/Shelf en Home (Logueado)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

Producto con promo activa "Completa la promo" 2x1 visible en carrusel/shelf del Home

Carrito vacío

Viewport Mobile 390x844

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {SKU_PROM_2X1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
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

No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

**Observación**

token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

---

### TC-63-M-016 - Toast al quitar unidades regresa a estado en-progreso (Logueado)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

Producto con promo "Completa la promo" 2x1 en PLP

2 unidades en el carrito (promo completada)

Viewport Mobile 390x844

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {SKU_PROM_2X1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
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

No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

**Observación**

token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

---

### TC-63-M-017 - Recurrencia 2x1 — 3ª unidad reinicia ciclo promocional (Logueado)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

Producto con promo "Completa la promo" 2x1 en PLP

2 unidades en el carrito (1er tramo completado)

Viewport Mobile 390x844

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {SKU_PROM_2X1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
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

No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

**Observación**

token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

---

### TC-63-M-019 - Eliminar producto resetea progreso y oculta toast (Logueado)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

Producto con promo "Completa la promo" 2x1 en PLP

1 unidad del producto en el carrito

Viewport Mobile 390x844

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {SKU_PROM_2X1} = SKU del producto con promo "Completa la promo" tipo 2x1 activa en el ambiente de prueba
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

No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

**Observación**

token(s) sin fila en el Excel de data: {SKU_PROM_2X1}

---

### TC-63-M-018 - Disminuir unidades recalcula progreso promocional (Logueado)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Duración | 132.0 s |
| Spec | tests/B2C-63.spec.ts:300 |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

Producto con promo "Completa la promo" 3x2 en PLP

2 unidades en el carrito (progreso 2/3)

Viewport Mobile 390x844

**Data utilizada**

- {BASE_URL} = URL base del storefront Unimarc
- {SKU_PROM_NxM} = SKU del producto con promo "Completa la promo" tipo 3x2 activa en el ambiente de prueba
- {UNIDADES_CARRITO_INICIAL_2} = 2 (unidades del producto ya en el carrito al iniciar el test)
- {COMPRADOR_USER} = email de cuenta de cliente registrado
- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada

**Pasos ejecutados**

1. Iniciar sesión con cuenta de cliente registrado en Mobile.
2. Navegar a la PLP (el carrito tiene 2 unidades, promo 3x2, progreso 2/3).
3. Hacer tap en "-" en el shelf para disminuir a 1 unidad.
4. Observar la barra de progreso y el toast.

**Resultado esperado**

La barra de progreso retrocede a 1/3 en Mobile. El toast actualiza el mensaje ("Agrega 2 más y ahorra más"). El contador refleja 1 unidad. No se produce recarga.

**Resultado obtenido**

Con sesión iniciada (correo + OTP) y 2 unidades en el carro, al disminuir a 1 el shelf quedó en «En carro 1 un.» y mostró «Agrega 2 y ahorra más».

**Observación**

El SKU 3x2 ({SKU_PROM_NxM}) rotula «Combina la promo».

**Evidencia**

![Paso 2 — sesion iniciada y 2 unidades en el carro 2 3](<B2C-63 Evidencias/TC-63-M-018-p02-sesion-iniciada-y-2-unidades-en-el-carro-2-3.png>)

![Paso 4 — tras disminuir a 1 unidad](<B2C-63 Evidencias/TC-63-M-018-p04-tras-disminuir-a-1-unidad.png>)

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
  "environment": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-63",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP1/B2C-63 Test Cases.xlsx",
  "title": "B2C-63 - Completa la promo - Evidencias QA",
  "updated_at": "2026-10-27"
 },
 "history": {
  "2026-10-19": [
   "TC-63-D-020",
   "TC-63-D-021",
   "TC-63-D-022",
   "TC-63-D-023",
   "TC-63-D-024",
   "TC-63-D-025",
   "TC-63-D-026",
   "TC-63-M-020",
   "TC-63-M-021",
   "TC-63-M-022",
   "TC-63-M-023",
   "TC-63-M-024",
   "TC-63-M-025",
   "TC-63-M-026"
  ],
  "2026-10-27": [
   "TC-63-D-001",
   "TC-63-D-002",
   "TC-63-D-003",
   "TC-63-D-004",
   "TC-63-D-005",
   "TC-63-D-006",
   "TC-63-D-007",
   "TC-63-D-008",
   "TC-63-D-009",
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
   "TC-63-D-020",
   "TC-63-D-021",
   "TC-63-D-022",
   "TC-63-D-023",
   "TC-63-D-024",
   "TC-63-D-025",
   "TC-63-D-026",
   "TC-63-M-001",
   "TC-63-M-002",
   "TC-63-M-003",
   "TC-63-M-004",
   "TC-63-M-005",
   "TC-63-M-006",
   "TC-63-M-007",
   "TC-63-M-008",
   "TC-63-M-009",
   "TC-63-M-010",
   "TC-63-M-011",
   "TC-63-M-012",
   "TC-63-M-013",
   "TC-63-M-014",
   "TC-63-M-015",
   "TC-63-M-016",
   "TC-63-M-017",
   "TC-63-M-018",
   "TC-63-M-019",
   "TC-63-M-020",
   "TC-63-M-021",
   "TC-63-M-022",
   "TC-63-M-023",
   "TC-63-M-024",
   "TC-63-M-025",
   "TC-63-M-026",
   "TC-B2C63-APP-007"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "Dentro del modal el contador queda en 1, la barra de progreso retrocede a 1 de 2 y el mensaje cambia a \"Agrega 1 y ahorra más\"; el carro queda con 1 unidad.",
   "form_factor": "desktop",
   "id": "TC-63-D-020",
   "name": "Usuario invitado disminuye unidades desde un modal",
   "observation": "El SKU declarado ({SKU_COMPLETA_PROMO_2X1}) rotula su mecánica «Combina la promo», no «Completa la promo» como dice la precondición; el comportamiento de progreso y mensajes es el que se evalúa. En la PLP el mismo SKU muestra «Agrega 1 y ahorra más» con 1 unidad.",
   "observed": "Tras disminuir de 2 a 1 en el modal «Combina la promo», el shelf del modal queda en «En carro 1 un.» pero el modal muestra «Agrega 2 y ahorra más» y el contador «1 / 1 productos». Esperado: barra en 1 de 2 y «Agrega 1 y ahorra más».",
   "preconditions": "User type: Guest\nDirección de entrega seleccionada: {DIRECCION_DESPACHO_001} (Despacho a domicilio con cobertura)\nProducto {SKU_COMPLETA_PROMO_2X1} con promo activa \"Completa la promo\" 2x1 (mismo SKU, sin código especial)\nEl carro contiene {SKU_COMPLETA_PROMO_2X1} x 2 (promo 2x1 completada)\nViewport Desktop 1280x900",
   "screenshots": [
    {
     "caption": "Paso 3 — modal con el shelf en 2 unidades",
     "file": "TC-63-D-020-p03-modal-con-el-shelf-en-2-unidades.png"
    },
    {
     "caption": "Paso 4 — modal tras disminuir una unidad",
     "file": "TC-63-D-020-p04-modal-tras-disminuir-una-unidad.png"
    }
   ],
   "spec": "tests/B2C-63.spec.ts:137",
   "status": "Rechazado",
   "steps": "1. Navegar a {PLP_URL_NxM}.\n2. Abrir un modal que contiene el shelf de {SKU_COMPLETA_PROMO_2X1} (desde la PLP o un carrusel).\n3. Verificar que el sistema muestra el modal con el shelf en 2 unidades y la promo completada.\n4. Hacer clic en \"−\" en el shelf del modal.\n5. Verificar que el sistema actualiza la cantidad a 1, retrocede la barra de progreso a 1 de 2 y muestra \"Agrega 1 y ahorra más\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {PLP_URL_NxM} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas\n- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN\n- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "En la PDP el contador queda en 1, la barra de progreso retrocede a 1 de 2 y se muestra \"Agrega 1 y ahorra más\".",
   "form_factor": "desktop",
   "id": "TC-63-D-021",
   "name": "Usuario invitado quita una unidad desde la PDP",
   "observation": "El SKU declarado ({SKU_COMPLETA_PROMO_2X1}) rotula su mecánica «Combina la promo», no «Completa la promo» como dice la precondición; el comportamiento de progreso y mensajes es el que se evalúa. En la PLP el mismo SKU sí muestra «Agrega 1 y ahorra más» (TC-63-D-024).",
   "observed": "La PDP pasa a «En carro 1 un.» (el stepper cambia al basurero), pero no muestra barra de progreso ni el mensaje «Agrega 1 y ahorra más»; solo queda el enlace «Combina la promo». Esperado: contador 1, barra en 1 de 2 y «Agrega 1 y ahorra más».",
   "preconditions": "User type: Guest\nDirección de entrega seleccionada: {DIRECCION_DESPACHO_001} (Despacho a domicilio con cobertura)\nProducto {SKU_COMPLETA_PROMO_2X1} con promo activa \"Completa la promo\" 2x1 (mismo SKU, sin código especial)\nEl carro contiene {SKU_COMPLETA_PROMO_2X1} x 2 (promo 2x1 completada)\nViewport Desktop 1280x900",
   "screenshots": [
    {
     "caption": "Paso 3 — pdp con 2 unidades",
     "file": "TC-63-D-021-p03-pdp-con-2-unidades.png"
    },
    {
     "caption": "Paso 4 — tras quitar una unidad",
     "file": "TC-63-D-021-p04-tras-quitar-una-unidad.png"
    }
   ],
   "spec": "tests/B2C-63.spec.ts:118",
   "status": "Rechazado",
   "steps": "1. Navegar a {BASE_URL}.\n2. Abrir la PDP de {SKU_COMPLETA_PROMO_2X1}.\n3. Verificar que el sistema carga la PDP con el contador en 2 y la barra de progreso completa.\n4. Hacer clic en \"−\" en el stepper de la PDP.\n5. Verificar que el sistema actualiza el contador a 1, retrocede la barra de progreso a 1 de 2 y muestra \"Agrega 1 y ahorra más\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {PLP_URL_NxM} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas\n- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN\n- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "En el carrusel el contador queda en 1, la barra de progreso retrocede a 1 de 2 y se muestra \"Agrega 1 y ahorra más\".",
   "form_factor": "desktop",
   "id": "TC-63-D-022",
   "name": "Usuario invitado quita una unidad desde un carrusel del Home",
   "observation": "El SKU {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home (58 shelves revisados), y la precondición lo exige. Acción: publicar el SKU en un carrusel del Home o declarar otro SKU que sí esté.",
   "observed": "No ejecutable: la precondición no se cumple en el ambiente.",
   "preconditions": "User type: Guest\nDirección de entrega seleccionada: {DIRECCION_DESPACHO_001} (Despacho a domicilio con cobertura)\nProducto {SKU_COMPLETA_PROMO_2X1} con promo activa \"Completa la promo\" 2x1 (mismo SKU, sin código especial)\nEl carro contiene {SKU_COMPLETA_PROMO_2X1} x 2 (promo 2x1 completada)\n{SKU_COMPLETA_PROMO_2X1} aparece en un carrusel del Home\nViewport Desktop 1280x900",
   "spec": "tests/B2C-63.spec.ts:168",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a {BASE_URL} (Home).\n2. Ubicar {SKU_COMPLETA_PROMO_2X1} en un carrusel del Home.\n3. Verificar que el sistema muestra el shelf del carrusel con el contador en 2 y la barra de progreso completa.\n4. Hacer clic en \"−\" en el shelf del carrusel.\n5. Verificar que el sistema actualiza el contador a 1, retrocede la barra de progreso a 1 de 2 y muestra \"Agrega 1 y ahorra más\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {PLP_URL_NxM} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas\n- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN\n- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "duration_s": 60,
   "executed_at": "2026-10-27",
   "expected": "Con 4 unidades se muestra nuevamente el toast \"¡Completaste la promo!\", la barra de progreso queda completa y el contador muestra 4.",
   "form_factor": "desktop",
   "id": "TC-63-D-023",
   "name": "Usuario invitado llega a 4 unidades en una promo 2x1",
   "observation": "El SKU declarado ({SKU_COMPLETA_PROMO_2X1}) rotula su mecánica «Combina la promo», no «Completa la promo» como dice la precondición; el comportamiento de progreso y mensajes es el que se evalúa.",
   "observed": "Con 3 unidades el shelf mostró «Agrega 1 y ahorra más»; al sumar la 4ª quedó en 4 y mostró «¡Completaste la promo!».",
   "preconditions": "User type: Guest\nDirección de entrega seleccionada: {DIRECCION_DESPACHO_001} (Despacho a domicilio con cobertura)\nProducto {SKU_COMPLETA_PROMO_2X1} con promo activa \"Completa la promo\" 2x1 (mismo SKU, sin código especial)\nEl carro contiene {SKU_COMPLETA_PROMO_2X1} x 3 (1er ciclo completado y 2º ciclo en 1 de 2)\nViewport Desktop 1280x900",
   "screenshots": [
    {
     "caption": "Paso 2 — shelf con 3 unidades 1 de 2",
     "file": "TC-63-D-023-p02-shelf-con-3-unidades-1-de-2.png"
    },
    {
     "caption": "Paso 4 — shelf con 4 unidades",
     "file": "TC-63-D-023-p04-shelf-con-4-unidades.png"
    }
   ],
   "spec": "tests/B2C-63.spec.ts:232",
   "status": "Aprobado",
   "steps": "1. Navegar a {PLP_URL_NxM} y ubicar el shelf de {SKU_COMPLETA_PROMO_2X1}.\n2. Verificar que el sistema muestra el shelf de {SKU_COMPLETA_PROMO_2X1} con el contador en 3 y la barra de progreso en 1 de 2.\n3. Hacer clic en \"+\" en el shelf.\n4. Verificar que el sistema actualiza el contador a 4, completa la barra de progreso y muestra el toast \"¡Completaste la promo!\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {PLP_URL_NxM} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas\n- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN\n- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "duration_s": 60,
   "executed_at": "2026-10-27",
   "expected": "Con 3 unidades el contador muestra 3, la barra de progreso queda en 1 de 2 (2º ciclo en progreso) y el mensaje cambia a \"Agrega 1 y ahorra más\"; el 1er ciclo sigue completo.",
   "form_factor": "desktop",
   "id": "TC-63-D-024",
   "name": "Usuario invitado baja de 4 a 3 unidades en una promo 2x1",
   "observation": "El SKU declarado ({SKU_COMPLETA_PROMO_2X1}) rotula su mecánica «Combina la promo», no «Completa la promo» como dice la precondición; el comportamiento de progreso y mensajes es el que se evalúa.",
   "observed": "Con 4 unidades el shelf quedó completo; al disminuir a 3 mostró «En carro 3 un.» y «Agrega 1 y ahorra más».",
   "preconditions": "User type: Guest\nDirección de entrega seleccionada: {DIRECCION_DESPACHO_001} (Despacho a domicilio con cobertura)\nProducto {SKU_COMPLETA_PROMO_2X1} con promo activa \"Completa la promo\" 2x1 (mismo SKU, sin código especial)\nEl carro contiene {SKU_COMPLETA_PROMO_2X1} x 4 (dos ciclos completos)\nViewport Desktop 1280x900",
   "screenshots": [
    {
     "caption": "Paso 2 — shelf con 4 unidades",
     "file": "TC-63-D-024-p02-shelf-con-4-unidades.png"
    },
    {
     "caption": "Paso 4 — shelf con 3 unidades",
     "file": "TC-63-D-024-p04-shelf-con-3-unidades.png"
    }
   ],
   "spec": "tests/B2C-63.spec.ts:248",
   "status": "Aprobado",
   "steps": "1. Navegar a {PLP_URL_NxM} y ubicar el shelf de {SKU_COMPLETA_PROMO_2X1}.\n2. Verificar que el sistema muestra el shelf de {SKU_COMPLETA_PROMO_2X1} con el contador en 4 y la barra de progreso completa.\n3. Hacer clic en \"−\" en el shelf.\n4. Verificar que el sistema actualiza el contador a 3, retrocede la barra de progreso a 1 de 2 y muestra \"Agrega 1 y ahorra más\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {PLP_URL_NxM} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas\n- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN\n- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "La PDP conserva el progreso iniciado en el Home (contador 1, barra 1 de 2) y al agregar la 2ª unidad muestra \"¡Completaste la promo!\".",
   "form_factor": "desktop",
   "id": "TC-63-D-025",
   "name": "Usuario invitado inicia la promo en el Home y la completa en la PDP",
   "observation": "El SKU {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home (58 shelves revisados), y la precondición lo exige. Acción: publicar el SKU en un carrusel del Home o declarar otro SKU que sí esté.",
   "observed": "No ejecutable: la precondición no se cumple en el ambiente.",
   "preconditions": "User type: Guest\nDirección de entrega seleccionada: {DIRECCION_DESPACHO_001} (Despacho a domicilio con cobertura)\nProducto {SKU_COMPLETA_PROMO_2X1} con promo activa \"Completa la promo\" 2x1 (mismo SKU, sin código especial)\nCarro vacío\n{SKU_COMPLETA_PROMO_2X1} aparece en un carrusel del Home\nViewport Desktop 1280x900",
   "spec": "tests/B2C-63.spec.ts:185",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a {BASE_URL} (Home).\n2. Hacer clic en \"Agregar\" en el shelf de {SKU_COMPLETA_PROMO_2X1} en un carrusel del Home.\n3. Verificar que el sistema agrega la unidad y muestra \"Agrega 1 y ahorra más\" con la barra de progreso en 1 de 2.\n4. Abrir la PDP de {SKU_COMPLETA_PROMO_2X1}.\n5. Verificar que el sistema carga la PDP con el contador en 1 y la barra de progreso en 1 de 2.\n6. Hacer clic en \"+\" en el stepper de la PDP.\n7. Verificar que el sistema actualiza el contador a 2, completa la barra de progreso y muestra el toast \"¡Completaste la promo!\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {PLP_URL_NxM} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas\n- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN\n- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "El shelf de la PLP conserva el progreso iniciado en el Home (contador 1, barra 1 de 2) y al agregar la 2ª unidad muestra \"¡Completaste la promo!\".",
   "form_factor": "desktop",
   "id": "TC-63-D-026",
   "name": "Usuario invitado inicia la promo en el Home y la completa en la PLP",
   "observation": "El SKU {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home (58 shelves revisados), y la precondición lo exige. Acción: publicar el SKU en un carrusel del Home o declarar otro SKU que sí esté.",
   "observed": "No ejecutable: la precondición no se cumple en el ambiente.",
   "preconditions": "User type: Guest\nDirección de entrega seleccionada: {DIRECCION_DESPACHO_001} (Despacho a domicilio con cobertura)\nProducto {SKU_COMPLETA_PROMO_2X1} con promo activa \"Completa la promo\" 2x1 (mismo SKU, sin código especial)\nCarro vacío\n{SKU_COMPLETA_PROMO_2X1} aparece en un carrusel del Home\nViewport Desktop 1280x900",
   "spec": "tests/B2C-63.spec.ts:210",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a {BASE_URL} (Home).\n2. Hacer clic en \"Agregar\" en el shelf de {SKU_COMPLETA_PROMO_2X1} en un carrusel del Home.\n3. Verificar que el sistema agrega la unidad y muestra \"Agrega 1 y ahorra más\" con la barra de progreso en 1 de 2.\n4. Navegar a {PLP_URL_NxM} y ubicar el shelf de {SKU_COMPLETA_PROMO_2X1}.\n5. Verificar que el sistema muestra el shelf de {SKU_COMPLETA_PROMO_2X1} con el contador en 1 y la barra de progreso en 1 de 2.\n6. Hacer clic en \"+\" en el shelf.\n7. Verificar que el sistema actualiza el contador a 2, completa la barra de progreso y muestra el toast \"¡Completaste la promo!\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {PLP_URL_NxM} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas\n- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN\n- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "Dentro del modal el contador queda en 1, la barra de progreso retrocede a 1 de 2 y el mensaje cambia a \"Agrega 1 y ahorra más\"; el carro queda con 1 unidad.",
   "form_factor": "mobile",
   "id": "TC-63-M-020",
   "name": "Usuario invitado disminuye unidades desde un modal",
   "observation": "El SKU declarado ({SKU_COMPLETA_PROMO_2X1}) rotula su mecánica «Combina la promo», no «Completa la promo» como dice la precondición; el comportamiento de progreso y mensajes es el que se evalúa. En la PLP el mismo SKU muestra «Agrega 1 y ahorra más» con 1 unidad.",
   "observed": "Tras disminuir de 2 a 1 en el modal «Combina la promo», el shelf del modal queda en «En carro 1 un.» pero el modal muestra «Agrega 2 y ahorra más» y el contador «1 / 1 productos». Esperado: barra en 1 de 2 y «Agrega 1 y ahorra más».",
   "preconditions": "User type: Guest\nDirección de entrega seleccionada: {DIRECCION_DESPACHO_001} (Despacho a domicilio con cobertura)\nProducto {SKU_COMPLETA_PROMO_2X1} con promo activa \"Completa la promo\" 2x1 (mismo SKU, sin código especial)\nEl carro contiene {SKU_COMPLETA_PROMO_2X1} x 2 (promo 2x1 completada)\nViewport Mobile 390x844",
   "screenshots": [
    {
     "caption": "Paso 3 — modal con el shelf en 2 unidades",
     "file": "TC-63-M-020-p03-modal-con-el-shelf-en-2-unidades.png"
    },
    {
     "caption": "Paso 4 — modal tras disminuir una unidad",
     "file": "TC-63-M-020-p04-modal-tras-disminuir-una-unidad.png"
    }
   ],
   "spec": "tests/B2C-63.spec.ts:137",
   "status": "Rechazado",
   "steps": "1. Navegar a {PLP_URL_NxM}.\n2. Abrir un modal que contiene el shelf de {SKU_COMPLETA_PROMO_2X1} (desde la PLP o un carrusel).\n3. Verificar que el sistema muestra el modal con el shelf en 2 unidades y la promo completada.\n4. Hacer tap en \"−\" en el shelf del modal.\n5. Verificar que el sistema actualiza la cantidad a 1, retrocede la barra de progreso a 1 de 2 y muestra \"Agrega 1 y ahorra más\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {PLP_URL_NxM} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas\n- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN\n- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "En la PDP el contador queda en 1, la barra de progreso retrocede a 1 de 2 y se muestra \"Agrega 1 y ahorra más\".",
   "form_factor": "mobile",
   "id": "TC-63-M-021",
   "name": "Usuario invitado quita una unidad desde la PDP",
   "observation": "El SKU declarado ({SKU_COMPLETA_PROMO_2X1}) rotula su mecánica «Combina la promo», no «Completa la promo» como dice la precondición; el comportamiento de progreso y mensajes es el que se evalúa. En la PLP el mismo SKU sí muestra «Agrega 1 y ahorra más» (TC-63-M-024).",
   "observed": "La PDP pasa a «En carro 1 un.» (el stepper cambia al basurero), pero no muestra barra de progreso ni el mensaje «Agrega 1 y ahorra más»; solo queda el enlace «Combina la promo». Esperado: contador 1, barra en 1 de 2 y «Agrega 1 y ahorra más».",
   "preconditions": "User type: Guest\nDirección de entrega seleccionada: {DIRECCION_DESPACHO_001} (Despacho a domicilio con cobertura)\nProducto {SKU_COMPLETA_PROMO_2X1} con promo activa \"Completa la promo\" 2x1 (mismo SKU, sin código especial)\nEl carro contiene {SKU_COMPLETA_PROMO_2X1} x 2 (promo 2x1 completada)\nViewport Mobile 390x844",
   "screenshots": [
    {
     "caption": "Paso 3 — pdp con 2 unidades",
     "file": "TC-63-M-021-p03-pdp-con-2-unidades.png"
    },
    {
     "caption": "Paso 4 — tras quitar una unidad",
     "file": "TC-63-M-021-p04-tras-quitar-una-unidad.png"
    }
   ],
   "spec": "tests/B2C-63.spec.ts:118",
   "status": "Rechazado",
   "steps": "1. Navegar a {BASE_URL}.\n2. Abrir la PDP de {SKU_COMPLETA_PROMO_2X1}.\n3. Verificar que el sistema carga la PDP con el contador en 2 y la barra de progreso completa.\n4. Hacer tap en \"−\" en el stepper de la PDP.\n5. Verificar que el sistema actualiza el contador a 1, retrocede la barra de progreso a 1 de 2 y muestra \"Agrega 1 y ahorra más\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {PLP_URL_NxM} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas\n- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN\n- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "En el carrusel el contador queda en 1, la barra de progreso retrocede a 1 de 2 y se muestra \"Agrega 1 y ahorra más\".",
   "form_factor": "mobile",
   "id": "TC-63-M-022",
   "name": "Usuario invitado quita una unidad desde un carrusel del Home",
   "observation": "El SKU {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home (58 shelves revisados), y la precondición lo exige. Acción: publicar el SKU en un carrusel del Home o declarar otro SKU que sí esté.",
   "observed": "No ejecutable: la precondición no se cumple en el ambiente.",
   "preconditions": "User type: Guest\nDirección de entrega seleccionada: {DIRECCION_DESPACHO_001} (Despacho a domicilio con cobertura)\nProducto {SKU_COMPLETA_PROMO_2X1} con promo activa \"Completa la promo\" 2x1 (mismo SKU, sin código especial)\nEl carro contiene {SKU_COMPLETA_PROMO_2X1} x 2 (promo 2x1 completada)\n{SKU_COMPLETA_PROMO_2X1} aparece en un carrusel del Home\nViewport Mobile 390x844",
   "spec": "tests/B2C-63.spec.ts:168",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a {BASE_URL} (Home).\n2. Ubicar {SKU_COMPLETA_PROMO_2X1} en un carrusel del Home.\n3. Verificar que el sistema muestra el shelf del carrusel con el contador en 2 y la barra de progreso completa.\n4. Hacer tap en \"−\" en el shelf del carrusel.\n5. Verificar que el sistema actualiza el contador a 1, retrocede la barra de progreso a 1 de 2 y muestra \"Agrega 1 y ahorra más\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {PLP_URL_NxM} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas\n- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN\n- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "duration_s": 59,
   "executed_at": "2026-10-27",
   "expected": "Con 4 unidades se muestra nuevamente el toast \"¡Completaste la promo!\", la barra de progreso queda completa y el contador muestra 4.",
   "form_factor": "mobile",
   "id": "TC-63-M-023",
   "name": "Usuario invitado llega a 4 unidades en una promo 2x1",
   "observation": "El SKU declarado ({SKU_COMPLETA_PROMO_2X1}) rotula su mecánica «Combina la promo», no «Completa la promo» como dice la precondición; el comportamiento de progreso y mensajes es el que se evalúa.",
   "observed": "Con 3 unidades el shelf mostró «Agrega 1 y ahorra más»; al sumar la 4ª quedó en 4 y mostró «¡Completaste la promo!».",
   "preconditions": "User type: Guest\nDirección de entrega seleccionada: {DIRECCION_DESPACHO_001} (Despacho a domicilio con cobertura)\nProducto {SKU_COMPLETA_PROMO_2X1} con promo activa \"Completa la promo\" 2x1 (mismo SKU, sin código especial)\nEl carro contiene {SKU_COMPLETA_PROMO_2X1} x 3 (1er ciclo completado y 2º ciclo en 1 de 2)\nViewport Mobile 390x844",
   "screenshots": [
    {
     "caption": "Paso 2 — shelf con 3 unidades 1 de 2",
     "file": "TC-63-M-023-p02-shelf-con-3-unidades-1-de-2.png"
    },
    {
     "caption": "Paso 4 — shelf con 4 unidades",
     "file": "TC-63-M-023-p04-shelf-con-4-unidades.png"
    }
   ],
   "spec": "tests/B2C-63.spec.ts:232",
   "status": "Aprobado",
   "steps": "1. Navegar a {PLP_URL_NxM} y ubicar el shelf de {SKU_COMPLETA_PROMO_2X1}.\n2. Verificar que el sistema muestra el shelf de {SKU_COMPLETA_PROMO_2X1} con el contador en 3 y la barra de progreso en 1 de 2.\n3. Hacer tap en \"+\" en el shelf.\n4. Verificar que el sistema actualiza el contador a 4, completa la barra de progreso y muestra el toast \"¡Completaste la promo!\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {PLP_URL_NxM} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas\n- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN\n- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "duration_s": 58,
   "executed_at": "2026-10-27",
   "expected": "Con 3 unidades el contador muestra 3, la barra de progreso queda en 1 de 2 (2º ciclo en progreso) y el mensaje cambia a \"Agrega 1 y ahorra más\"; el 1er ciclo sigue completo.",
   "form_factor": "mobile",
   "id": "TC-63-M-024",
   "name": "Usuario invitado baja de 4 a 3 unidades en una promo 2x1",
   "observation": "El SKU declarado ({SKU_COMPLETA_PROMO_2X1}) rotula su mecánica «Combina la promo», no «Completa la promo» como dice la precondición; el comportamiento de progreso y mensajes es el que se evalúa.",
   "observed": "Con 4 unidades el shelf quedó completo; al disminuir a 3 mostró «En carro 3 un.» y «Agrega 1 y ahorra más».",
   "preconditions": "User type: Guest\nDirección de entrega seleccionada: {DIRECCION_DESPACHO_001} (Despacho a domicilio con cobertura)\nProducto {SKU_COMPLETA_PROMO_2X1} con promo activa \"Completa la promo\" 2x1 (mismo SKU, sin código especial)\nEl carro contiene {SKU_COMPLETA_PROMO_2X1} x 4 (dos ciclos completos)\nViewport Mobile 390x844",
   "screenshots": [
    {
     "caption": "Paso 2 — shelf con 4 unidades",
     "file": "TC-63-M-024-p02-shelf-con-4-unidades.png"
    },
    {
     "caption": "Paso 4 — shelf con 3 unidades",
     "file": "TC-63-M-024-p04-shelf-con-3-unidades.png"
    }
   ],
   "spec": "tests/B2C-63.spec.ts:248",
   "status": "Aprobado",
   "steps": "1. Navegar a {PLP_URL_NxM} y ubicar el shelf de {SKU_COMPLETA_PROMO_2X1}.\n2. Verificar que el sistema muestra el shelf de {SKU_COMPLETA_PROMO_2X1} con el contador en 4 y la barra de progreso completa.\n3. Hacer tap en \"−\" en el shelf.\n4. Verificar que el sistema actualiza el contador a 3, retrocede la barra de progreso a 1 de 2 y muestra \"Agrega 1 y ahorra más\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {PLP_URL_NxM} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas\n- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN\n- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "La PDP conserva el progreso iniciado en el Home (contador 1, barra 1 de 2) y al agregar la 2ª unidad muestra \"¡Completaste la promo!\".",
   "form_factor": "mobile",
   "id": "TC-63-M-025",
   "name": "Usuario invitado inicia la promo en el Home y la completa en la PDP",
   "observation": "El SKU {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home (58 shelves revisados), y la precondición lo exige. Acción: publicar el SKU en un carrusel del Home o declarar otro SKU que sí esté.",
   "observed": "No ejecutable: la precondición no se cumple en el ambiente.",
   "preconditions": "User type: Guest\nDirección de entrega seleccionada: {DIRECCION_DESPACHO_001} (Despacho a domicilio con cobertura)\nProducto {SKU_COMPLETA_PROMO_2X1} con promo activa \"Completa la promo\" 2x1 (mismo SKU, sin código especial)\nCarro vacío\n{SKU_COMPLETA_PROMO_2X1} aparece en un carrusel del Home\nViewport Mobile 390x844",
   "spec": "tests/B2C-63.spec.ts:185",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a {BASE_URL} (Home).\n2. Hacer tap en \"Agregar\" en el shelf de {SKU_COMPLETA_PROMO_2X1} en un carrusel del Home.\n3. Verificar que el sistema agrega la unidad y muestra \"Agrega 1 y ahorra más\" con la barra de progreso en 1 de 2.\n4. Abrir la PDP de {SKU_COMPLETA_PROMO_2X1}.\n5. Verificar que el sistema carga la PDP con el contador en 1 y la barra de progreso en 1 de 2.\n6. Hacer tap en \"+\" en el stepper de la PDP.\n7. Verificar que el sistema actualiza el contador a 2, completa la barra de progreso y muestra el toast \"¡Completaste la promo!\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {PLP_URL_NxM} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas\n- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN\n- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "El shelf de la PLP conserva el progreso iniciado en el Home (contador 1, barra 1 de 2) y al agregar la 2ª unidad muestra \"¡Completaste la promo!\".",
   "form_factor": "mobile",
   "id": "TC-63-M-026",
   "name": "Usuario invitado inicia la promo en el Home y la completa en la PLP",
   "observation": "El SKU {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) no aparece en ningún carrusel del Home (58 shelves revisados), y la precondición lo exige. Acción: publicar el SKU en un carrusel del Home o declarar otro SKU que sí esté.",
   "observed": "No ejecutable: la precondición no se cumple en el ambiente.",
   "preconditions": "User type: Guest\nDirección de entrega seleccionada: {DIRECCION_DESPACHO_001} (Despacho a domicilio con cobertura)\nProducto {SKU_COMPLETA_PROMO_2X1} con promo activa \"Completa la promo\" 2x1 (mismo SKU, sin código especial)\nCarro vacío\n{SKU_COMPLETA_PROMO_2X1} aparece en un carrusel del Home\nViewport Mobile 390x844",
   "spec": "tests/B2C-63.spec.ts:210",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a {BASE_URL} (Home).\n2. Hacer tap en \"Agregar\" en el shelf de {SKU_COMPLETA_PROMO_2X1} en un carrusel del Home.\n3. Verificar que el sistema agrega la unidad y muestra \"Agrega 1 y ahorra más\" con la barra de progreso en 1 de 2.\n4. Navegar a {PLP_URL_NxM} y ubicar el shelf de {SKU_COMPLETA_PROMO_2X1}.\n5. Verificar que el sistema muestra el shelf de {SKU_COMPLETA_PROMO_2X1} con el contador en 1 y la barra de progreso en 1 de 2.\n6. Hacer tap en \"+\" en el shelf.\n7. Verificar que el sistema actualiza el contador a 2, completa la barra de progreso y muestra el toast \"¡Completaste la promo!\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {PLP_URL_NxM} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas\n- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN\n- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida",
   "viewport": "390x844"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Se muestra el toast \"Agrega 1 y ahorra más\" con la barra de progreso.",
   "form_factor": "app",
   "id": "TC-B2C63-APP-007",
   "name": "Verificar que un usuario logueado ve el toast al agregar desde el shelf",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): al tocar «Agregar» en el shelf de 000000000664214001-UN (promo 2×1 a $2.550) la unidad se agrega (el shelf pasa a «En carro 1 un.» y el carro flotante a 2 unidades), pero no aparece el toast «Agrega 1 y ahorra más» ni la barra de progreso: cuatro capturas inmediatas (≈2 s) y la captura posterior del shelf no los muestran. Reproducido en la corrida automatizada y en una repetición manual; la unidad agregada se quitó al terminar. Bug: B2C-1364.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)\n- 000000000664214001-UN tiene una promo \"Completa la promo\" 2x1 vigente (mismo SKU, sin código especial)",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — shelf de 000000000664214001 un en los resultados",
     "file": "TC-B2C63-APP-007-android-p02-shelf-de-000000000664214001-un-en-los-resultados.png"
    },
    {
     "caption": "Android · Paso 4 — captura inmediata tras agregar sin toast",
     "file": "TC-B2C63-APP-007-android-p04-captura-inmediata-tras-agregar-sin-toast.png"
    },
    {
     "caption": "Android · Paso 6 — shelf tras agregar",
     "file": "TC-B2C63-APP-007-android-p06-shelf-tras-agregar.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C63-APP-007-android.png"
    }
   ],
   "spec": "tests-app/B2C-63-50-pendientes.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000664214001-UN y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de 000000000664214001-UN.\n4. El usuario toca \"Agregar\" en el shelf.\n5. El sistema agrega la unidad y muestra el toast \"Agrega 1 y ahorra más\" con la barra de progreso en 1 de 2.",
   "test_data": "- v1.0.1 = TBD\n- 000000000664214001-UN = TBD\n- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com"
  },
  {
   "browser": "chromium",
   "duration_s": 78,
   "executed_at": "2026-10-27",
   "expected": "En cada paso la barra de progreso avanza correctamente (1/3, 2/3, 3/3). Los mensajes del toast cambian acordemente (\"Agrega 2 más\", \"Agrega 1 más\", \"¡Completaste la promo!\"). No se produce recarga de la página entre pasos. El contador del producto refleja 1, 2, 3 unidades respectivamente.",
   "form_factor": "desktop",
   "id": "TC-63-D-003",
   "name": "Barra de progreso y contador actualizan en tiempo real al agregar (Guest)",
   "observation": "El SKU 3x2 ({SKU_PROM_NxM}) rotula «Combina la promo».",
   "observed": "Con la 1ª, 2ª y 3ª unidad el shelf mostró «Agrega 2…», «Agrega 1…» y «¡Completaste la promo!»; sin recargar la página.",
   "preconditions": "User type: Guest\nEl usuario tiene ha ingresado y seleccionado una dirección de entrega\nProducto con promo activa \"Completa la promo\" tipo 3x2 en PLP (umbral: 3 unidades)\nCarrito vacío\nViewport Desktop 1280x900",
   "screenshots": [
    {
     "caption": "Paso 1 — shelf 3x2 antes de agregar",
     "file": "TC-63-D-003-p01-shelf-3x2-antes-de-agregar.png"
    },
    {
     "caption": "Paso 2 — tras la 1 unidad",
     "file": "TC-63-D-003-p02-tras-la-1-unidad.png"
    },
    {
     "caption": "Paso 3 — tras la 2 unidad",
     "file": "TC-63-D-003-p03-tras-la-2-unidad.png"
    },
    {
     "caption": "Paso 4 — tras la 3 unidad",
     "file": "TC-63-D-003-p04-tras-la-3-unidad.png"
    }
   ],
   "spec": "tests/B2C-63.spec.ts:80",
   "status": "Aprobado",
   "steps": "1. Navegar a la PLP con el producto con promo 3x2.\n2. Hacer clic en \"+\" → observar barra de progreso, toast y contador (debería mostrar 1/3).\n3. Hacer clic en \"+\" nuevamente → observar barra, toast y contador (debería mostrar 2/3).\n4. Hacer clic en \"+\" una vez más → observar barra, toast y contador (debería mostrar 3/3, promo completada).\n5. Verificar que en cada paso la UI se actualiza sin recarga completa de la página.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {DIRECCION_DESPACHO_003} = TBD\n- {SKU_PROM_NxM} = SKU del producto con promo \"Completa la promo\" tipo 3x2 activa en el ambiente de prueba",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "duration_s": 53,
   "executed_at": "2026-10-27",
   "expected": "La barra de progreso retrocede a 1/3. El toast actualiza el mensaje (\"Agrega 2 más y ahorra más\"). El contador del producto en el shelf refleja 1 unidad. No se produce recarga de la página.",
   "form_factor": "desktop",
   "id": "TC-63-D-009",
   "name": "Disminuir unidades desde shelf recalcula progreso promocional (Guest)",
   "observation": "El SKU 3x2 ({SKU_PROM_NxM}) rotula «Combina la promo».",
   "observed": "Al disminuir de 2 a 1 el shelf quedó en «En carro 1 un.» y mostró «Agrega 2 y ahorra más».",
   "preconditions": "User type: Guest\nEl usuario tiene ha ingresado y seleccionado una dirección de entrega\nProducto con promo \"Completa la promo\" tipo 3x2 en PLP\n2 unidades ya en el carrito (progreso 2/3)\nViewport Desktop 1280x900",
   "screenshots": [
    {
     "caption": "Paso 1 — carrito con 2 unidades 2 3",
     "file": "TC-63-D-009-p01-carrito-con-2-unidades-2-3.png"
    },
    {
     "caption": "Paso 2 — tras disminuir a 1",
     "file": "TC-63-D-009-p02-tras-disminuir-a-1.png"
    }
   ],
   "spec": "tests/B2C-63.spec.ts:102",
   "status": "Aprobado",
   "steps": "1. Navegar a la PLP (el carrito tiene 2 unidades del producto con promo 3x2, progreso 2/3).\n2. Hacer clic en \"-\" en el shelf para disminuir a 1 unidad.\n3. Observar la barra de progreso y el toast resultante.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {DIRECCION_DESPACHO_003} = TBD\n- {SKU_PROM_NxM} = SKU del producto con promo \"Completa la promo\" tipo 3x2 activa en el ambiente de prueba\n- {UNIDADES_CARRITO_INICIAL_2} = 2 (unidades del producto ya en el carrito al iniciar el test)",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "duration_s": 60,
   "executed_at": "2026-10-27",
   "expected": "En cada paso la barra de progreso avanza (1/3, 2/3, 3/3). Los toasts cambian acordemente (\"Agrega 2 más\", \"Agrega 1 más\", \"¡Completaste la promo!\"). No se produce recarga de la página. El contador refleja 1, 2, 3 unidades.",
   "form_factor": "mobile",
   "id": "TC-63-M-003",
   "name": "Barra de progreso y contador actualizan en tiempo real al agregar (Guest)",
   "observation": "El SKU 3x2 ({SKU_PROM_NxM}) rotula «Combina la promo».",
   "observed": "Con la 1ª, 2ª y 3ª unidad el shelf mostró «Agrega 2…», «Agrega 1…» y «¡Completaste la promo!»; sin recargar la página.",
   "preconditions": "User type: Guest\nProducto con promo activa \"Completa la promo\" 3x2 en PLP (umbral: 3 unidades)\nCarrito vacío\nViewport Mobile 390x844",
   "screenshots": [
    {
     "caption": "Paso 1 — shelf 3x2 antes de agregar",
     "file": "TC-63-M-003-p01-shelf-3x2-antes-de-agregar.png"
    },
    {
     "caption": "Paso 2 — tras la 1 unidad",
     "file": "TC-63-M-003-p02-tras-la-1-unidad.png"
    },
    {
     "caption": "Paso 3 — tras la 2 unidad",
     "file": "TC-63-M-003-p03-tras-la-2-unidad.png"
    },
    {
     "caption": "Paso 4 — tras la 3 unidad",
     "file": "TC-63-M-003-p04-tras-la-3-unidad.png"
    }
   ],
   "spec": "tests/B2C-63.spec.ts:80",
   "status": "Aprobado",
   "steps": "1. Navegar a la PLP en Mobile con el producto con promo 3x2.\n2. Hacer tap en \"+\" → observar barra de progreso, toast y contador (1/3).\n3. Hacer tap en \"+\" → observar barra, toast y contador (2/3).\n4. Hacer tap en \"+\" → observar barra, toast y contador (3/3, promo completada).\n5. Verificar que la UI se actualiza sin recarga de página.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {DIRECCION_DESPACHO_003} = TBD\n- {SKU_PROM_NxM} = SKU del producto con promo \"Completa la promo\" tipo 3x2 activa en el ambiente de prueba",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "duration_s": 59,
   "executed_at": "2026-10-27",
   "expected": "La barra de progreso retrocede a 1/3 en Mobile. El toast actualiza el mensaje (\"Agrega 2 más y ahorra más\"). El contador refleja 1 unidad. No se produce recarga.",
   "form_factor": "mobile",
   "id": "TC-63-M-009",
   "name": "Disminuir unidades desde shelf recalcula progreso promocional (Guest)",
   "observation": "El SKU 3x2 ({SKU_PROM_NxM}) rotula «Combina la promo».",
   "observed": "Al disminuir de 2 a 1 el shelf quedó en «En carro 1 un.» y mostró «Agrega 2 y ahorra más».",
   "preconditions": "User type: Guest\nProducto con promo \"Completa la promo\" 3x2 en PLP\n2 unidades en el carrito (progreso 2/3)\nViewport Mobile 390x844",
   "screenshots": [
    {
     "caption": "Paso 1 — carrito con 2 unidades 2 3",
     "file": "TC-63-M-009-p01-carrito-con-2-unidades-2-3.png"
    },
    {
     "caption": "Paso 2 — tras disminuir a 1",
     "file": "TC-63-M-009-p02-tras-disminuir-a-1.png"
    }
   ],
   "spec": "tests/B2C-63.spec.ts:102",
   "status": "Aprobado",
   "steps": "1. Navegar a la PLP en Mobile (el carrito tiene 2 unidades, promo 3x2, progreso 2/3).\n2. Hacer tap en \"-\" en el shelf para disminuir a 1 unidad.\n3. Observar la barra de progreso y el toast resultante.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {DIRECCION_DESPACHO_003} = TBD\n- {SKU_PROM_NxM} = SKU del producto con promo \"Completa la promo\" tipo 3x2 activa en el ambiente de prueba\n- {UNIDADES_CARRITO_INICIAL_2} = 2 (unidades del producto ya en el carrito al iniciar el test)",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-27",
   "expected": "Se muestra un toast con el mensaje \"Agrega 1 más y ahorra más\" (o equivalente indicando las unidades faltantes para el siguiente tramo). La barra de progreso refleja 1 de N unidades. El contador del producto en el shelf se actualiza a 1.",
   "form_factor": "desktop",
   "id": "TC-63-D-001",
   "name": "Toast 'Agrega N y ahorra más' al agregar 1ª unidad desde PLP (Guest)",
   "observation": "token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "observed": "No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "preconditions": "User type: Guest\nEl usuario tiene ha ingresado y seleccionado una dirección de entrega\nProducto con promo activa \"Completa la promo\" tipo 2x1 disponible en PLP\nCarrito vacío\nViewport Desktop 1280x900",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a la PLP de una categoría que contenga un producto con promo \"Completa la promo\" (ej. promo 2x1).\n2. Localizar el producto con la promo activa en el shelf de la PLP.\n3. Hacer clic en el botón \"+\" o \"Agregar\" del producto en el shelf.\n4. Observar el toast que aparece tras la acción.\n5. Verificar el texto del mensaje, la barra de progreso y el contador de unidades.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {DIRECCION_DESPACHO_003} = TBD\n- {SKU_PROM_2X1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba",
   "viewport": "1280x900"
  },
  {
   "executed_at": "2026-10-27",
   "expected": "Se muestra el toast \"¡Completaste la promo!\" (o equivalente de logro). La barra de progreso se muestra completa (2/2). El contador del producto en el shelf actualiza a 2 unidades.",
   "form_factor": "desktop",
   "id": "TC-63-D-002",
   "name": "Toast '¡Completaste la promo!' al alcanzar umbral desde PLP (Guest)",
   "observation": "token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "observed": "No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "preconditions": "User type: Guest\nEl usuario tiene ha ingresado y seleccionado una dirección de entrega\nProducto con promo activa \"Completa la promo\" tipo 2x1 disponible en PLP\n1 unidad del producto ya agregada al carrito (faltan N-1 para completar)\nViewport Desktop 1280x900",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a la PLP (el carrito ya tiene 1 unidad del producto con promo 2x1).\n2. Localizar el producto en el shelf.\n3. Hacer clic en \"+\" para agregar la 2ª unidad (que completa el tramo).\n4. Observar el toast que aparece.\n5. Verificar el texto del toast y el estado de la barra de progreso.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {DIRECCION_DESPACHO_003} = TBD\n- {SKU_PROM_2X1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {UNIDADES_CARRITO_INICIAL_1} = 1 (unidad del producto ya en el carrito al iniciar el test)",
   "viewport": "1280x900"
  },
  {
   "executed_at": "2026-10-27",
   "expected": "Se muestra el toast \"Agrega 1 más y ahorra más\" desde la PDP. La barra de progreso refleja 1 de 2 unidades. El comportamiento es idéntico al de la PLP.",
   "form_factor": "desktop",
   "id": "TC-63-D-004",
   "name": "Toast progresivo al agregar desde PDP (Guest)",
   "observation": "token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "observed": "No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "preconditions": "User type: Guest\nEl usuario tiene ha ingresado y seleccionado una dirección de entrega\nPDP de un producto con promo activa \"Completa la promo\" 2x1 abierta\nCarrito vacío\nViewport Desktop 1280x900",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a la PDP del producto con promo \"Completa la promo\" 2x1.\n2. Hacer clic en el botón \"+ Agregar al carrito\" o en el stepper (+).\n3. Observar el toast que aparece tras la acción.\n4. Verificar el texto del mensaje y la barra de progreso.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {DIRECCION_DESPACHO_003} = TBD\n- {SKU_PROM_2X1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba",
   "viewport": "1280x900"
  },
  {
   "executed_at": "2026-10-27",
   "expected": "Se muestra el toast \"Agrega 1 más y ahorra más\" al agregar desde el modal. La barra de progreso y el contador se actualizan correctamente dentro del modal.",
   "form_factor": "desktop",
   "id": "TC-63-D-005",
   "name": "Toast progresivo al agregar desde Modal de producto (Guest)",
   "observation": "token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "observed": "No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "preconditions": "User type: Guest\nEl usuario tiene ha ingresado y seleccionado una dirección de entrega\nModal de producto con promo activa \"Completa la promo\" 2x1 accesible desde PLP o carrusel\nCarrito vacío\nViewport Desktop 1280x900",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a la PLP o Home donde aparece el producto con promo en el shelf/carrusel.\n2. Abrir el modal del producto (ej. clic en el nombre del producto o en \"ver detalle\").\n3. Dentro del modal, hacer clic en \"+\" para agregar 1 unidad.\n4. Observar el toast que aparece y la barra de progreso.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {DIRECCION_DESPACHO_003} = TBD\n- {SKU_PROM_2X1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba",
   "viewport": "1280x900"
  },
  {
   "executed_at": "2026-10-27",
   "expected": "Se muestra el toast \"Agrega 1 más y ahorra más\". La barra de progreso refleja 1 de N unidades. El comportamiento es consistente con el de PLP y PDP.",
   "form_factor": "desktop",
   "id": "TC-63-D-006",
   "name": "Toast progresivo al agregar desde Carrusel/Shelf en Home (Guest)",
   "observation": "token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "observed": "No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "preconditions": "User type: Guest\nEl usuario tiene ha ingresado y seleccionado una dirección de entrega\nProducto con promo activa \"Completa la promo\" 2x1 visible en carrusel/shelf del Home\nCarrito vacío\nViewport Desktop 1280x900",
   "status": "Bloqueado Data",
   "steps": "1. Navegar al Home de la tienda.\n2. Localizar el carrusel/shelf que muestra el producto con promo \"Completa la promo\".\n3. Hacer clic en el botón \"+\" del producto en el shelf del carrusel.\n4. Observar el toast que aparece y la actualización del contador.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {DIRECCION_DESPACHO_003} = TBD\n- {SKU_PROM_2X1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba",
   "viewport": "1280x900"
  },
  {
   "executed_at": "2026-10-27",
   "expected": "Se muestra el toast \"Agrega 1 más y ahorra más\" (regreso al estado en-progreso). La barra de progreso retrocede a 1 de 2. El contador del producto en el shelf se actualiza a 1 unidad.",
   "form_factor": "desktop",
   "id": "TC-63-D-007",
   "name": "Toast al quitar unidades regresa a estado en-progreso (Guest)",
   "observation": "token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "observed": "No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "preconditions": "User type: Guest\nEl usuario tiene ha ingresado y seleccionado una dirección de entrega\nProducto con promo \"Completa la promo\" 2x1\n2 unidades ya en el carrito (promo completada, toast '¡Completaste la promo!' previamente mostrado)\nViewport Desktop 1280x900",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a la PLP (el carrito tiene 2 unidades, promo 2x1 completada).\n2. Localizar el producto en el shelf.\n3. Hacer clic en \"-\" para quitar 1 unidad.\n4. Observar el toast que aparece y el estado de la barra de progreso.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {DIRECCION_DESPACHO_003} = TBD\n- {SKU_PROM_2X1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {UNIDADES_CARRITO_INICIAL_2} = 2 (unidades del producto ya en el carrito al iniciar el test)",
   "viewport": "1280x900"
  },
  {
   "executed_at": "2026-10-27",
   "expected": "Se muestra el toast \"Agrega 1 más y ahorra más\" (inicio del 2° ciclo). La barra de progreso muestra 1 de 2 (reiniciada para el nuevo tramo). El contador del producto refleja 3 unidades totales en el carrito.",
   "form_factor": "desktop",
   "id": "TC-63-D-008",
   "name": "Recurrencia 2x1 — 3ª unidad reinicia ciclo promocional (Guest)",
   "observation": "token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "observed": "No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "preconditions": "User type: Guest\nEl usuario tiene ha ingresado y seleccionado una dirección de entrega\nProducto con promo \"Completa la promo\" tipo 2x1 en PLP\n2 unidades ya en el carrito (1er tramo completado)\nViewport Desktop 1280x900",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a la PLP (carrito tiene 2 unidades, toast '¡Completaste la promo!' previamente mostrado).\n2. Hacer clic en \"+\" para agregar la 3ª unidad.\n3. Observar el toast que aparece y la barra de progreso.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {DIRECCION_DESPACHO_003} = TBD\n- {SKU_PROM_2X1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {UNIDADES_CARRITO_INICIAL_2} = 2 (unidades del producto ya en el carrito al iniciar el test)",
   "viewport": "1280x900"
  },
  {
   "executed_at": "2026-10-27",
   "expected": "El producto es eliminado del carrito. La barra de progreso desaparece o se resetea a 0. Los mensajes del toast de la promo no se muestran. El botón del shelf vuelve al estado inicial (\"Agregar\").",
   "form_factor": "desktop",
   "id": "TC-63-D-010",
   "name": "Eliminar producto desde shelf resetea progreso y oculta toast (Guest)",
   "observation": "token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "observed": "No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "preconditions": "User type: Guest\nEl usuario tiene ha ingresado y seleccionado una dirección de entrega\nProducto con promo \"Completa la promo\" 2x1 en PLP\n1 unidad del producto en el carrito\nViewport Desktop 1280x900",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a la PLP (el carrito tiene 1 unidad del producto en promo).\n2. Hacer clic en \"-\" hasta llegar a 0 unidades (o usar el botón de eliminar si aplica).\n3. Observar la UI del shelf y el estado de la barra de progreso.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {DIRECCION_DESPACHO_003} = TBD\n- {SKU_PROM_2X1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {UNIDADES_CARRITO_INICIAL_1} = 1 (unidad del producto ya en el carrito al iniciar el test)",
   "viewport": "1280x900"
  },
  {
   "executed_at": "2026-10-27",
   "expected": "Se muestra el toast \"Agrega 1 más y ahorra más\". La barra de progreso refleja 1 de 2 unidades. El comportamiento es idéntico al del usuario Guest.",
   "form_factor": "desktop",
   "id": "TC-63-D-011",
   "name": "Toast 'Agrega N y ahorra más' al agregar desde PLP (Logueado)",
   "observation": "token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "observed": "No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nProducto con promo activa \"Completa la promo\" 2x1 en PLP\nCarrito vacío\nViewport Desktop 1280x900",
   "status": "Bloqueado Data",
   "steps": "1. Iniciar sesión con cuenta de cliente registrado.\n2. Navegar a la PLP con el producto en promo \"Completa la promo\" 2x1.\n3. Hacer clic en \"+\" para agregar 1 unidad desde el shelf.\n4. Observar el toast y la barra de progreso.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {SKU_PROM_2X1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {COMPRADOR_USER} = email de cuenta de cliente registrado\n- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada",
   "viewport": "1280x900"
  },
  {
   "executed_at": "2026-10-27",
   "expected": "Se muestra el toast \"¡Completaste la promo!\". La barra de progreso se muestra completa (2/2). El contador refleja 2 unidades en el shelf.",
   "form_factor": "desktop",
   "id": "TC-63-D-012",
   "name": "Toast '¡Completaste la promo!' al alcanzar umbral desde PLP (Logueado)",
   "observation": "token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "observed": "No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nProducto con promo \"Completa la promo\" 2x1 en PLP\n1 unidad del producto ya en el carrito\nViewport Desktop 1280x900",
   "status": "Bloqueado Data",
   "steps": "1. Iniciar sesión con cuenta de cliente registrado.\n2. Navegar a la PLP (el carrito tiene 1 unidad, promo 2x1).\n3. Hacer clic en \"+\" para agregar la 2ª unidad.\n4. Observar el toast que aparece.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {SKU_PROM_2X1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {UNIDADES_CARRITO_INICIAL_1} = 1 (unidad del producto ya en el carrito al iniciar el test)\n- {COMPRADOR_USER} = email de cuenta de cliente registrado\n- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada",
   "viewport": "1280x900"
  },
  {
   "executed_at": "2026-10-27",
   "expected": "Se muestra el toast \"Agrega 1 más y ahorra más\" desde la PDP. La barra de progreso refleja 1 de 2 unidades. El comportamiento es idéntico al del usuario Guest en PDP.",
   "form_factor": "desktop",
   "id": "TC-63-D-013",
   "name": "Toast progresivo al agregar desde PDP (Logueado)",
   "observation": "token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "observed": "No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nPDP de producto con promo activa \"Completa la promo\" 2x1 abierta\nCarrito vacío\nViewport Desktop 1280x900",
   "status": "Bloqueado Data",
   "steps": "1. Iniciar sesión con cuenta de cliente registrado.\n2. Navegar a la PDP del producto con promo \"Completa la promo\" 2x1.\n3. Hacer clic en \"+ Agregar al carrito\" o en el stepper.\n4. Observar el toast y la barra de progreso.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {SKU_PROM_2X1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {COMPRADOR_USER} = email de cuenta de cliente registrado\n- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada",
   "viewport": "1280x900"
  },
  {
   "executed_at": "2026-10-27",
   "expected": "Se muestra el toast \"Agrega 1 más y ahorra más\" desde el modal. La barra de progreso y el contador se actualizan correctamente.",
   "form_factor": "desktop",
   "id": "TC-63-D-014",
   "name": "Toast progresivo al agregar desde Modal de producto (Logueado)",
   "observation": "token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "observed": "No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nModal de producto con promo activa \"Completa la promo\" 2x1 accesible desde PLP o carrusel\nCarrito vacío\nViewport Desktop 1280x900",
   "status": "Bloqueado Data",
   "steps": "1. Iniciar sesión con cuenta de cliente registrado.\n2. Navegar a la PLP o Home donde aparece el producto con promo en el shelf.\n3. Abrir el modal del producto.\n4. Dentro del modal, hacer clic en \"+\" para agregar 1 unidad.\n5. Observar el toast que aparece.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {SKU_PROM_2X1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {COMPRADOR_USER} = email de cuenta de cliente registrado\n- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada",
   "viewport": "1280x900"
  },
  {
   "executed_at": "2026-10-27",
   "expected": "Se muestra el toast \"Agrega 1 más y ahorra más\". La barra de progreso y el contador se actualizan correctamente desde el carrusel.",
   "form_factor": "desktop",
   "id": "TC-63-D-015",
   "name": "Toast progresivo al agregar desde Carrusel/Shelf en Home (Logueado)",
   "observation": "token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "observed": "No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nProducto con promo activa \"Completa la promo\" 2x1 visible en carrusel/shelf del Home\nCarrito vacío\nViewport Desktop 1280x900",
   "status": "Bloqueado Data",
   "steps": "1. Iniciar sesión con cuenta de cliente registrado.\n2. Navegar al Home de la tienda.\n3. Localizar el carrusel con el producto en promo \"Completa la promo\".\n4. Hacer clic en \"+\" del producto en el shelf del carrusel.\n5. Observar el toast y el contador.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {SKU_PROM_2X1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {COMPRADOR_USER} = email de cuenta de cliente registrado\n- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada",
   "viewport": "1280x900"
  },
  {
   "executed_at": "2026-10-27",
   "expected": "Se muestra el toast \"Agrega 1 más y ahorra más\" (regreso al estado en-progreso). La barra de progreso retrocede a 1 de 2. El contador del shelf actualiza a 1 unidad.",
   "form_factor": "desktop",
   "id": "TC-63-D-016",
   "name": "Toast al quitar unidades regresa a estado en-progreso (Logueado)",
   "observation": "token(s) sin fila en el Excel de data: {SKU_PROM_2X1}, {UNIDADES_CARRITO_INICIAL}",
   "observed": "No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}, {UNIDADES_CARRITO_INICIAL}",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nProducto con promo \"Completa la promo\" 2x1 en PLP\n2 unidades en el carrito (promo completada)\nViewport Desktop 1280x900",
   "status": "Bloqueado Data",
   "steps": "1. Iniciar sesión con cuenta de cliente registrado.\n2. Navegar a la PLP (el carrito tiene 2 unidades, promo 2x1 completada).\n3. Hacer clic en \"-\" en el shelf para quitar 1 unidad.\n4. Observar el toast y la barra de progreso.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {SKU_PROM_2X1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {UNIDADES_CARRITO_INICIAL} = 2 (unidades del producto ya en el carrito al iniciar el test)\n- {COMPRADOR_USER} = email de cuenta de cliente registrado\n- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada",
   "viewport": "1280x900"
  },
  {
   "executed_at": "2026-10-27",
   "expected": "Se muestra el toast \"Agrega 1 más y ahorra más\" (inicio del 2° ciclo). La barra de progreso muestra 1 de 2 (reiniciada). El carrito refleja 3 unidades totales.",
   "form_factor": "desktop",
   "id": "TC-63-D-017",
   "name": "Recurrencia 2x1 — 3ª unidad reinicia ciclo promocional (Logueado)",
   "observation": "token(s) sin fila en el Excel de data: {SKU_PROM_2X1}, {UNIDADES_CARRITO_INICIAL}",
   "observed": "No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}, {UNIDADES_CARRITO_INICIAL}",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nProducto con promo \"Completa la promo\" 2x1 en PLP\n2 unidades ya en el carrito (1er tramo completado)\nViewport Desktop 1280x900",
   "status": "Bloqueado Data",
   "steps": "1. Iniciar sesión con cuenta de cliente registrado.\n2. Navegar a la PLP (el carrito tiene 2 unidades, promo 2x1 completada).\n3. Hacer clic en \"+\" para agregar la 3ª unidad.\n4. Observar el toast y la barra de progreso.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {SKU_PROM_2X1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {UNIDADES_CARRITO_INICIAL} = 2 (unidades del producto ya en el carrito al iniciar el test)\n- {COMPRADOR_USER} = email de cuenta de cliente registrado\n- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada",
   "viewport": "1280x900"
  },
  {
   "executed_at": "2026-10-27",
   "expected": "La barra de progreso retrocede a 1/3. El toast actualiza el mensaje (\"Agrega 2 más y ahorra más\"). El contador del shelf refleja 1 unidad. No se produce recarga de la página.",
   "form_factor": "desktop",
   "id": "TC-63-D-018",
   "name": "Disminuir unidades recalcula progreso promocional (Logueado)",
   "observation": "token(s) sin fila en el Excel de data: {UNIDADES_CARRITO_INICIAL}",
   "observed": "No se ejecutó: token(s) sin fila en el Excel de data: {UNIDADES_CARRITO_INICIAL}",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nProducto con promo \"Completa la promo\" tipo 3x2 en PLP\n2 unidades en el carrito (progreso 2/3)\nViewport Desktop 1280x900",
   "status": "Bloqueado Data",
   "steps": "1. Iniciar sesión con cuenta de cliente registrado.\n2. Navegar a la PLP (el carrito tiene 2 unidades, promo 3x2, progreso 2/3).\n3. Hacer clic en \"-\" en el shelf para disminuir a 1 unidad.\n4. Observar la barra de progreso y el toast.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {SKU_PROM_NxM} = SKU del producto con promo \"Completa la promo\" tipo 3x2 activa en el ambiente de prueba\n- {UNIDADES_CARRITO_INICIAL} = 2 (unidades del producto ya en el carrito al iniciar el test)\n- {COMPRADOR_USER} = email de cuenta de cliente registrado\n- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada",
   "viewport": "1280x900"
  },
  {
   "executed_at": "2026-10-27",
   "expected": "El producto es eliminado del carrito. La barra de progreso desaparece o se resetea. Los mensajes del toast de la promo no se muestran. El botón del shelf vuelve al estado inicial (\"Agregar\").",
   "form_factor": "desktop",
   "id": "TC-63-D-019",
   "name": "Eliminar producto resetea progreso y oculta toast (Logueado)",
   "observation": "token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "observed": "No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nProducto con promo \"Completa la promo\" 2x1 en PLP\n1 unidad del producto en el carrito\nViewport Desktop 1280x900",
   "status": "Bloqueado Data",
   "steps": "1. Iniciar sesión con cuenta de cliente registrado.\n2. Navegar a la PLP (el carrito tiene 1 unidad del producto en promo).\n3. Hacer clic en \"-\" hasta 0 unidades o usar el botón de eliminar si aplica.\n4. Observar la UI del shelf y la barra de progreso.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {SKU_PROM_2X1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {UNIDADES_CARRITO_INICIAL_1} = 1 (unidad del producto ya en el carrito al iniciar el test)\n- {COMPRADOR_USER} = email de cuenta de cliente registrado\n- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada",
   "viewport": "1280x900"
  },
  {
   "executed_at": "2026-10-27",
   "expected": "Se muestra un toast con el mensaje \"Agrega 1 más y ahorra más\" en Mobile. La barra de progreso refleja 1 de N unidades. El contador del producto en el shelf se actualiza a 1.",
   "form_factor": "mobile",
   "id": "TC-63-M-001",
   "name": "Toast 'Agrega N y ahorra más' al agregar 1ª unidad desde PLP (Guest)",
   "observation": "token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "observed": "No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "preconditions": "User type: Guest\nProducto con promo activa \"Completa la promo\" 2x1 disponible en PLP\nCarrito vacío\nViewport Mobile 390x844",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a la PLP en Mobile con un producto en promo \"Completa la promo\" 2x1.\n2. Localizar el producto con la promo activa en el shelf.\n3. Hacer tap en el botón \"+\" o \"Agregar\" del producto.\n4. Observar el toast que aparece.\n5. Verificar el texto del toast y la barra de progreso.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {DIRECCION_DESPACHO_003} = TBD\n- {SKU_PROM_2X1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-27",
   "expected": "Se muestra el toast \"¡Completaste la promo!\" en Mobile. La barra de progreso se muestra completa (2/2). El contador actualiza a 2 unidades.",
   "form_factor": "mobile",
   "id": "TC-63-M-002",
   "name": "Toast '¡Completaste la promo!' al alcanzar umbral desde PLP (Guest)",
   "observation": "token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "observed": "No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "preconditions": "User type: Guest\nProducto con promo activa \"Completa la promo\" 2x1 en PLP\n1 unidad del producto ya en el carrito\nViewport Mobile 390x844",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a la PLP en Mobile (el carrito tiene 1 unidad, promo 2x1).\n2. Hacer tap en \"+\" para agregar la 2ª unidad.\n3. Observar el toast que aparece.\n4. Verificar el texto del toast y el estado de la barra de progreso.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {DIRECCION_DESPACHO_003} = TBD\n- {SKU_PROM_2X1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {UNIDADES_CARRITO_INICIAL_1} = 1 (unidad del producto ya en el carrito al iniciar el test)",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-27",
   "expected": "Se muestra el toast \"Agrega 1 más y ahorra más\" desde la PDP en Mobile. La barra de progreso refleja 1 de 2 unidades. El comportamiento es idéntico al de la PLP en Mobile.",
   "form_factor": "mobile",
   "id": "TC-63-M-004",
   "name": "Toast progresivo al agregar desde PDP (Guest)",
   "observation": "token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "observed": "No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "preconditions": "User type: Guest\nPDP de producto con promo activa \"Completa la promo\" 2x1 abierta\nCarrito vacío\nViewport Mobile 390x844",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a la PDP del producto con promo \"Completa la promo\" 2x1 en Mobile.\n2. Hacer tap en el botón \"+ Agregar al carrito\" o en el stepper.\n3. Observar el toast y la barra de progreso.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {DIRECCION_DESPACHO_003} = TBD\n- {SKU_PROM_2X1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-27",
   "expected": "Se muestra el toast \"Agrega 1 más y ahorra más\" al agregar desde el modal en Mobile. La barra de progreso y el contador se actualizan correctamente.",
   "form_factor": "mobile",
   "id": "TC-63-M-005",
   "name": "Toast progresivo al agregar desde Modal de producto (Guest)",
   "observation": "token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "observed": "No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "preconditions": "User type: Guest\nModal de producto con promo activa \"Completa la promo\" 2x1 accesible desde PLP o carrusel\nCarrito vacío\nViewport Mobile 390x844",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a la PLP o Home en Mobile donde aparece el producto con promo.\n2. Abrir el modal del producto (tap en el nombre o \"ver detalle\").\n3. Dentro del modal, hacer tap en \"+\" para agregar 1 unidad.\n4. Observar el toast y la barra de progreso.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {DIRECCION_DESPACHO_003} = TBD\n- {SKU_PROM_2X1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-27",
   "expected": "Se muestra el toast \"Agrega 1 más y ahorra más\" en Mobile. La barra de progreso refleja 1 de N unidades. El comportamiento es consistente con PLP y PDP en Mobile.",
   "form_factor": "mobile",
   "id": "TC-63-M-006",
   "name": "Toast progresivo al agregar desde Carrusel/Shelf en Home (Guest)",
   "observation": "token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "observed": "No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "preconditions": "User type: Guest\nProducto con promo activa \"Completa la promo\" 2x1 visible en carrusel/shelf del Home\nCarrito vacío\nViewport Mobile 390x844",
   "status": "Bloqueado Data",
   "steps": "1. Navegar al Home en Mobile.\n2. Localizar el carrusel/shelf que muestra el producto con promo.\n3. Hacer tap en el botón \"+\" del producto en el shelf.\n4. Observar el toast y el contador.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {DIRECCION_DESPACHO_003} = TBD\n- {SKU_PROM_2X1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-27",
   "expected": "Se muestra el toast \"Agrega 1 más y ahorra más\" en Mobile (regreso al estado en-progreso). La barra de progreso retrocede a 1 de 2. El contador actualiza a 1 unidad.",
   "form_factor": "mobile",
   "id": "TC-63-M-007",
   "name": "Toast al quitar unidades regresa a estado en-progreso (Guest)",
   "observation": "token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "observed": "No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "preconditions": "User type: Guest\nProducto con promo \"Completa la promo\" 2x1 en PLP\n2 unidades en el carrito (promo completada)\nViewport Mobile 390x844",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a la PLP en Mobile (el carrito tiene 2 unidades, promo 2x1 completada).\n2. Hacer tap en \"-\" en el shelf para quitar 1 unidad.\n3. Observar el toast y la barra de progreso.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {DIRECCION_DESPACHO_003} = TBD\n- {SKU_PROM_2X1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {UNIDADES_CARRITO_INICIAL_2} = 2 (unidades del producto ya en el carrito al iniciar el test)",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-27",
   "expected": "Se muestra el toast \"Agrega 1 más y ahorra más\" (inicio del 2° ciclo) en Mobile. La barra de progreso muestra 1 de 2 (reiniciada). El contador refleja 3 unidades totales en el carrito.",
   "form_factor": "mobile",
   "id": "TC-63-M-008",
   "name": "Recurrencia 2x1 — 3ª unidad reinicia ciclo promocional (Guest)",
   "observation": "token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "observed": "No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "preconditions": "User type: Guest\nProducto con promo \"Completa la promo\" 2x1 en PLP\n2 unidades en el carrito (1er tramo completado)\nViewport Mobile 390x844",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a la PLP en Mobile (carrito tiene 2 unidades, promo completada).\n2. Hacer tap en \"+\" para agregar la 3ª unidad.\n3. Observar el toast y la barra de progreso.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {DIRECCION_DESPACHO_003} = TBD\n- {SKU_PROM_2X1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {UNIDADES_CARRITO_INICIAL_2} = 2 (unidades del producto ya en el carrito al iniciar el test)",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-27",
   "expected": "El producto es eliminado del carrito. La barra de progreso desaparece o se resetea en Mobile. Los mensajes del toast no se muestran. El botón del shelf vuelve al estado inicial (\"Agregar\").",
   "form_factor": "mobile",
   "id": "TC-63-M-010",
   "name": "Eliminar producto desde shelf resetea progreso y oculta toast (Guest)",
   "observation": "token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "observed": "No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "preconditions": "User type: Guest\nProducto con promo \"Completa la promo\" 2x1 en PLP\n1 unidad del producto en el carrito\nViewport Mobile 390x844",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a la PLP en Mobile (el carrito tiene 1 unidad del producto en promo).\n2. Hacer tap en \"-\" hasta 0 unidades o usar el botón de eliminar.\n3. Observar la UI del shelf y la barra de progreso.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {DIRECCION_DESPACHO_003} = TBD\n- {SKU_PROM_2X1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {UNIDADES_CARRITO_INICIAL_1} = 1 (unidad del producto ya en el carrito al iniciar el test)",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-27",
   "expected": "Se muestra el toast \"Agrega 1 más y ahorra más\" en Mobile. La barra de progreso refleja 1 de 2. El comportamiento es idéntico al del usuario Guest en Mobile.",
   "form_factor": "mobile",
   "id": "TC-63-M-011",
   "name": "Toast 'Agrega N y ahorra más' al agregar desde PLP (Logueado)",
   "observation": "token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "observed": "No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nProducto con promo activa \"Completa la promo\" 2x1 en PLP\nCarrito vacío\nViewport Mobile 390x844",
   "status": "Bloqueado Data",
   "steps": "1. Iniciar sesión con cuenta de cliente registrado en Mobile.\n2. Navegar a la PLP con el producto en promo \"Completa la promo\" 2x1.\n3. Hacer tap en \"+\" para agregar 1 unidad desde el shelf.\n4. Observar el toast y la barra de progreso.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {SKU_PROM_2X1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {COMPRADOR_USER} = email de cuenta de cliente registrado\n- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-27",
   "expected": "Se muestra el toast \"¡Completaste la promo!\" en Mobile. La barra de progreso se muestra completa (2/2). El contador refleja 2 unidades.",
   "form_factor": "mobile",
   "id": "TC-63-M-012",
   "name": "Toast '¡Completaste la promo!' al alcanzar umbral desde PLP (Logueado)",
   "observation": "token(s) sin fila en el Excel de data: {SKU_PROM_2X1}, {UNIDADES_CARRITO_INICIAL}",
   "observed": "No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}, {UNIDADES_CARRITO_INICIAL}",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nProducto con promo \"Completa la promo\" 2x1 en PLP\n1 unidad del producto en el carrito\nViewport Mobile 390x844",
   "status": "Bloqueado Data",
   "steps": "1. Iniciar sesión con cuenta de cliente registrado en Mobile.\n2. Navegar a la PLP (el carrito tiene 1 unidad, promo 2x1).\n3. Hacer tap en \"+\" para agregar la 2ª unidad.\n4. Observar el toast que aparece.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {SKU_PROM_2X1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {UNIDADES_CARRITO_INICIAL} = 1 (unidad del producto ya en el carrito al iniciar el test)\n- {COMPRADOR_USER} = email de cuenta de cliente registrado\n- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-27",
   "expected": "Se muestra el toast \"Agrega 1 más y ahorra más\" desde la PDP en Mobile. La barra de progreso refleja 1 de 2 unidades. El comportamiento es idéntico al del usuario Guest en PDP.",
   "form_factor": "mobile",
   "id": "TC-63-M-013",
   "name": "Toast progresivo al agregar desde PDP (Logueado)",
   "observation": "token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "observed": "No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nPDP de producto con promo activa \"Completa la promo\" 2x1 abierta\nCarrito vacío\nViewport Mobile 390x844",
   "status": "Bloqueado Data",
   "steps": "1. Iniciar sesión con cuenta de cliente registrado en Mobile.\n2. Navegar a la PDP del producto con promo.\n3. Hacer tap en \"+ Agregar al carrito\" o en el stepper.\n4. Observar el toast y la barra de progreso.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {SKU_PROM_2X1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {COMPRADOR_USER} = email de cuenta de cliente registrado\n- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-27",
   "expected": "Se muestra el toast \"Agrega 1 más y ahorra más\" desde el modal en Mobile. La barra de progreso y el contador se actualizan correctamente.",
   "form_factor": "mobile",
   "id": "TC-63-M-014",
   "name": "Toast progresivo al agregar desde Modal de producto (Logueado)",
   "observation": "token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "observed": "No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nModal de producto con promo activa \"Completa la promo\" 2x1 accesible\nCarrito vacío\nViewport Mobile 390x844",
   "status": "Bloqueado Data",
   "steps": "1. Iniciar sesión con cuenta de cliente registrado en Mobile.\n2. Navegar a la PLP o Home con el producto en promo.\n3. Abrir el modal del producto.\n4. Hacer tap en \"+\" para agregar 1 unidad.\n5. Observar el toast que aparece.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {SKU_PROM_2X1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {COMPRADOR_USER} = email de cuenta de cliente registrado\n- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-27",
   "expected": "Se muestra el toast \"Agrega 1 más y ahorra más\" en Mobile. La barra de progreso y el contador se actualizan correctamente desde el carrusel.",
   "form_factor": "mobile",
   "id": "TC-63-M-015",
   "name": "Toast progresivo al agregar desde Carrusel/Shelf en Home (Logueado)",
   "observation": "token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "observed": "No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nProducto con promo activa \"Completa la promo\" 2x1 visible en carrusel/shelf del Home\nCarrito vacío\nViewport Mobile 390x844",
   "status": "Bloqueado Data",
   "steps": "1. Iniciar sesión con cuenta de cliente registrado en Mobile.\n2. Navegar al Home.\n3. Localizar el carrusel con el producto en promo.\n4. Hacer tap en \"+\" del producto en el shelf.\n5. Observar el toast y el contador.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {SKU_PROM_2X1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {COMPRADOR_USER} = email de cuenta de cliente registrado\n- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-27",
   "expected": "Se muestra el toast \"Agrega 1 más y ahorra más\" en Mobile. La barra de progreso retrocede a 1 de 2. El contador actualiza a 1 unidad.",
   "form_factor": "mobile",
   "id": "TC-63-M-016",
   "name": "Toast al quitar unidades regresa a estado en-progreso (Logueado)",
   "observation": "token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "observed": "No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nProducto con promo \"Completa la promo\" 2x1 en PLP\n2 unidades en el carrito (promo completada)\nViewport Mobile 390x844",
   "status": "Bloqueado Data",
   "steps": "1. Iniciar sesión con cuenta de cliente registrado en Mobile.\n2. Navegar a la PLP (el carrito tiene 2 unidades, promo completada).\n3. Hacer tap en \"-\" en el shelf para quitar 1 unidad.\n4. Observar el toast y la barra de progreso.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {SKU_PROM_2X1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {UNIDADES_CARRITO_INICIAL_2} = 2 (unidades del producto ya en el carrito al iniciar el test)\n- {COMPRADOR_USER} = email de cuenta de cliente registrado\n- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-27",
   "expected": "Se muestra el toast \"Agrega 1 más y ahorra más\" en Mobile (inicio del 2° ciclo). La barra de progreso muestra 1 de 2 (reiniciada). El carrito refleja 3 unidades totales.",
   "form_factor": "mobile",
   "id": "TC-63-M-017",
   "name": "Recurrencia 2x1 — 3ª unidad reinicia ciclo promocional (Logueado)",
   "observation": "token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "observed": "No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nProducto con promo \"Completa la promo\" 2x1 en PLP\n2 unidades en el carrito (1er tramo completado)\nViewport Mobile 390x844",
   "status": "Bloqueado Data",
   "steps": "1. Iniciar sesión con cuenta de cliente registrado en Mobile.\n2. Navegar a la PLP (el carrito tiene 2 unidades, promo 2x1 completada).\n3. Hacer tap en \"+\" para agregar la 3ª unidad.\n4. Observar el toast y la barra de progreso.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {SKU_PROM_2X1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {UNIDADES_CARRITO_INICIAL_2} = 2 (unidades del producto ya en el carrito al iniciar el test)\n- {COMPRADOR_USER} = email de cuenta de cliente registrado\n- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-27",
   "expected": "El producto es eliminado del carrito. La barra de progreso desaparece o se resetea en Mobile. Los mensajes del toast no se muestran. El botón del shelf vuelve al estado inicial (\"Agregar\").",
   "form_factor": "mobile",
   "id": "TC-63-M-019",
   "name": "Eliminar producto resetea progreso y oculta toast (Logueado)",
   "observation": "token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "observed": "No se ejecutó: token(s) sin fila en el Excel de data: {SKU_PROM_2X1}",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nProducto con promo \"Completa la promo\" 2x1 en PLP\n1 unidad del producto en el carrito\nViewport Mobile 390x844",
   "status": "Bloqueado Data",
   "steps": "1. Iniciar sesión con cuenta de cliente registrado en Mobile.\n2. Navegar a la PLP (el carrito tiene 1 unidad del producto en promo).\n3. Hacer tap en \"-\" hasta 0 unidades o usar el botón de eliminar.\n4. Observar la UI del shelf y la barra de progreso.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {SKU_PROM_2X1} = SKU del producto con promo \"Completa la promo\" tipo 2x1 activa en el ambiente de prueba\n- {UNIDADES_CARRITO_INICIAL_1} = 1 (unidad del producto ya en el carrito al iniciar el test)\n- {COMPRADOR_USER} = email de cuenta de cliente registrado\n- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "duration_s": 132,
   "executed_at": "2026-10-27",
   "expected": "La barra de progreso retrocede a 1/3 en Mobile. El toast actualiza el mensaje (\"Agrega 2 más y ahorra más\"). El contador refleja 1 unidad. No se produce recarga.",
   "form_factor": "mobile",
   "id": "TC-63-M-018",
   "name": "Disminuir unidades recalcula progreso promocional (Logueado)",
   "observation": "El SKU 3x2 ({SKU_PROM_NxM}) rotula «Combina la promo».",
   "observed": "Con sesión iniciada (correo + OTP) y 2 unidades en el carro, al disminuir a 1 el shelf quedó en «En carro 1 un.» y mostró «Agrega 2 y ahorra más».",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nProducto con promo \"Completa la promo\" 3x2 en PLP\n2 unidades en el carrito (progreso 2/3)\nViewport Mobile 390x844",
   "screenshots": [
    {
     "caption": "Paso 2 — sesion iniciada y 2 unidades en el carro 2 3",
     "file": "TC-63-M-018-p02-sesion-iniciada-y-2-unidades-en-el-carro-2-3.png"
    },
    {
     "caption": "Paso 4 — tras disminuir a 1 unidad",
     "file": "TC-63-M-018-p04-tras-disminuir-a-1-unidad.png"
    }
   ],
   "spec": "tests/B2C-63.spec.ts:300",
   "status": "Aprobado",
   "steps": "1. Iniciar sesión con cuenta de cliente registrado en Mobile.\n2. Navegar a la PLP (el carrito tiene 2 unidades, promo 3x2, progreso 2/3).\n3. Hacer tap en \"-\" en el shelf para disminuir a 1 unidad.\n4. Observar la barra de progreso y el toast.",
   "test_data": "- {BASE_URL} = URL base del storefront Unimarc\n- {SKU_PROM_NxM} = SKU del producto con promo \"Completa la promo\" tipo 3x2 activa en el ambiente de prueba\n- {UNIDADES_CARRITO_INICIAL_2} = 2 (unidades del producto ya en el carrito al iniciar el test)\n- {COMPRADOR_USER} = email de cuenta de cliente registrado\n- {COMPRADOR_PASSWORD} = contrasena de la cuenta registrada",
   "viewport": "390x844"
  }
 ]
}
-->
