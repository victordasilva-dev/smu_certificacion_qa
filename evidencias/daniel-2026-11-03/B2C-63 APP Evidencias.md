# B2C-63 (app Android) - Completa la promo (toast y progreso) - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-63 APP |
| Última actualización | 2026-11-03 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Dispositivo Android | dispositivo por ADB |
| Origen de los TC | Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-63 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 12 |
| Aprobado | 3 |
| Rechazado | 2 |
| **Total** | **17** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-03 | 17 | TC-B2C63-APP-001, TC-B2C63-APP-002, TC-B2C63-APP-003, TC-B2C63-APP-004, TC-B2C63-APP-005, TC-B2C63-APP-006, TC-B2C63-APP-008, TC-B2C63-APP-009, TC-B2C63-APP-010, TC-B2C63-APP-011, TC-B2C63-APP-012, TC-B2C63-APP-013, TC-B2C63-APP-014, TC-B2C63-APP-015, TC-B2C63-APP-016, TC-B2C63-APP-017, TC-B2C63-APP-018 |

## Detalle por caso de prueba

### TC-B2C63-APP-001 - Verificar que agregar la 1ª unidad desde el shelf muestra "Agrega N y ahorra más" [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-63.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Resultados de búsqueda
- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)
- {SKU_COMPLETA_PROMO_2X1} tiene una promo "Completa la promo" 2x1 vigente (mismo SKU, sin código especial)

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_COMPLETA_PROMO_2X1} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_COMPLETA_PROMO_2X1} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_COMPLETA_PROMO_2X1}.
4. El usuario toca "Agregar" en el shelf.
5. El sistema agrega la unidad y muestra el toast "Agrega 1 y ahorra más" con la barra de progreso en 1 de 2.

**Resultado esperado**

Se muestra el toast "Agrega 1 y ahorra más" y la barra de progreso indica 1 de 2.

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): el SKU {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) se comporta como «Combina la promo» y no como «Completa la promo»: su shelf y su PDP muestran el chip «Combina la promo» y no usan el toast «Agrega N y ahorra más». La precondición (promo Completa la promo 2x1 del mismo SKU) no se cumple. Falta un SKU con Completa la promo 2x1 (lo carga el equipo de data).

**Evidencia**

![Android · Paso 1 — toast 1 de 2](<B2C-63 APP Evidencias/TC-B2C63-APP-001-android-p01-toast-1-de-2.png>)

---

### TC-B2C63-APP-002 - Verificar que completar el umbral desde el shelf muestra "¡Completaste la promo!" [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-63.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Resultados de búsqueda
- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)
- {SKU_COMPLETA_PROMO_2X1} tiene una promo "Completa la promo" 2x1 vigente (mismo SKU, sin código especial)

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_COMPLETA_PROMO_2X1} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_COMPLETA_PROMO_2X1} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_COMPLETA_PROMO_2X1}.
4. El usuario toca "Agregar" en el shelf.
5. El sistema agrega la unidad y muestra el toast "Agrega 1 y ahorra más" con la barra de progreso en 1 de 2.
6. El usuario toca "+" en el shelf.
7. El sistema actualiza la cantidad y muestra el toast "¡Completaste la promo!" con la barra de progreso completa.

**Resultado esperado**

Con 2 unidades se muestra "¡Completaste la promo!" y la barra de progreso queda completa.

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): el SKU {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) se comporta como «Combina la promo» y no como «Completa la promo»: su shelf y su PDP muestran el chip «Combina la promo» y no usan el toast «Agrega N y ahorra más». La precondición (promo Completa la promo 2x1 del mismo SKU) no se cumple. Falta un SKU con Completa la promo 2x1 (lo carga el equipo de data).

**Evidencia**

![Android · Paso 1 — promo completa](<B2C-63 APP Evidencias/TC-B2C63-APP-002-android-p01-promo-completa.png>)

---

### TC-B2C63-APP-003 - Verificar que la barra de progreso y el contador se actualizan con cada unidad [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-63.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Resultados de búsqueda
- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)
- {SKU_COMPLETA_PROMO_3X2} tiene una promo "Completa la promo" 3x2 vigente (mismo SKU, sin código especial)

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_COMPLETA_PROMO_3X2} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_COMPLETA_PROMO_3X2} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_COMPLETA_PROMO_3X2}.
4. El usuario toca "Agregar" y luego "+" dos veces.
5. El sistema muestra "Agrega 2 y ahorra más", luego "Agrega 1 y ahorra más" y finalmente "¡Completaste la promo!", avanzando la barra en cada paso.

**Resultado esperado**

La barra de progreso, el contador y el mensaje cambian con cada unidad sin recargar la pantalla.

**Resultado obtenido**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Esperado: el shelf de los resultados muestra el toast de la promo y la barra de progreso al cambiar la cantidad. Obtenido (SKU 3x2 {SKU_COMPLETA_PROMO_3X2}): la cantidad cambia pero el shelf no muestra «Agrega N y ahorra más» ni «¡Completaste la promo!»; el toast sí aparece en la PDP (B2C-51 TC-013). Bug: B2C-1442.

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Esperado: el shelf de los resultados muestra el toast de la promo y la barra de progreso al cambiar la cantidad. Obtenido (SKU 3x2 {SKU_COMPLETA_PROMO_3X2}): la cantidad cambia pero el shelf no muestra «Agrega N y ahorra más» ni «¡Completaste la promo!»; el toast sí aparece en la PDP (B2C-51 TC-013). Bug: B2C-1442.

**Evidencia**

![Android · Paso 1 — agrega 2](<B2C-63 APP Evidencias/TC-B2C63-APP-003-android-p01-agrega-2.png>)

![Android · Paso 2 — agrega 1](<B2C-63 APP Evidencias/TC-B2C63-APP-003-android-p02-agrega-1.png>)

![Android · Paso 3 — completa](<B2C-63 APP Evidencias/TC-B2C63-APP-003-android-p03-completa.png>)

---

### TC-B2C63-APP-004 - Verificar que agregar desde la PDP muestra el toast y la barra de progreso [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-63.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)
- {SKU_COMPLETA_PROMO_2X1} tiene una promo "Completa la promo" 2x1 vigente (mismo SKU, sin código especial)

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_COMPLETA_PROMO_2X1} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}, busca {SKU_COMPLETA_PROMO_2X1} y abre su PDP.
2. El sistema carga la PDP de {SKU_COMPLETA_PROMO_2X1}.
3. El usuario toca "Agregar".
4. El sistema agrega la unidad y muestra el toast "Agrega 1 y ahorra más" con la barra de progreso en 1 de 2.

**Resultado esperado**

Se muestra el toast "Agrega 1 y ahorra más" con la barra de progreso en la PDP.

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): el SKU {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) se comporta como «Combina la promo» y no como «Completa la promo»: su shelf y su PDP muestran el chip «Combina la promo» y no usan el toast «Agrega N y ahorra más». La precondición (promo Completa la promo 2x1 del mismo SKU) no se cumple. Falta un SKU con Completa la promo 2x1 (lo carga el equipo de data).

**Evidencia**

![Android · Paso 1 — pdp tras agregar](<B2C-63 APP Evidencias/TC-B2C63-APP-004-android-p01-pdp-tras-agregar.png>)

---

### TC-B2C63-APP-005 - Verificar que agregar desde un modal con shelves muestra el toast [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-63.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Modal
- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)
- {SKU_COMPLETA_PROMO_2X1} tiene una promo "Completa la promo" 2x1 vigente (mismo SKU, sin código especial)

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_COMPLETA_PROMO_2X1} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario abre un modal que contiene el shelf de {SKU_COMPLETA_PROMO_2X1}.
3. El sistema muestra el modal con el shelf.
4. El usuario toca "Agregar" en el shelf del modal.
5. El sistema agrega la unidad y muestra el toast "Agrega 1 y ahorra más" con la barra de progreso en 1 de 2.

**Resultado esperado**

Se muestra el toast "Agrega 1 y ahorra más" con la barra de progreso al agregar desde el modal.

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): en el modal «Combina la promo» (se abre desde el chip del shelf). En el modal «Combina la promo» tras «Agregar»: toast «Agrega 1 y ahorra más»; contador «1 / 2 productos». Textos: ✕ | ✕ | Combina la promo | 🤓 | Agrega 1 y ahorra más | 1 / 2 productos | Agregar a mis productos | 2x1 a $2.550 |  ($8.500 x Kg) | $2.550 c/u ($17.000 x Kg) | Lays | Papas fritas Lay's artesanas sal de mar bolsa 150 g | 150 g | En carro | 1 un. | Volver al inicio | Volver al inicio.

**Evidencia**

![Android · Paso 1 — fallo abrir modal](<B2C-63 APP Evidencias/TC-B2C63-APP-005-android-p01-fallo-abrir-modal.png>)

![Android · Paso 1 — modal combina la promo](<B2C-63 APP Evidencias/TC-B2C63-APP-005-android-p01-modal-combina-la-promo.png>)

![Android · Paso 1 — modal tras agregar](<B2C-63 APP Evidencias/TC-B2C63-APP-005-android-p01-modal-tras-agregar.png>)

---

### TC-B2C63-APP-006 - Verificar que agregar desde un carrusel del Home muestra el toast [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-63.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)
- {SKU_COMPLETA_PROMO_2X1} tiene una promo "Completa la promo" 2x1 vigente (mismo SKU, sin código especial)
- {SKU_COMPLETA_PROMO_2X1} aparece en un carrusel del Home

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_COMPLETA_PROMO_2X1} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home con un carrusel que contiene {SKU_COMPLETA_PROMO_2X1}.
3. El usuario toca "Agregar" en ese producto del carrusel.
4. El sistema agrega la unidad y muestra el toast "Agrega 1 y ahorra más" con la barra de progreso en 1 de 2.

**Resultado esperado**

Se muestra el toast "Agrega 1 y ahorra más" con la barra de progreso al agregar desde el carrusel.

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): la precondición pide {SKU_COMPLETA_PROMO_2X1} en un carrusel del Home; se recorrió el Home completo (12 productos distintos) y el SKU no aparece en ninguno. Falta que el SKU de la promo esté en un carrusel del Home (lo configura el equipo de contenido/data).

---

### TC-B2C63-APP-008 - Verificar que quitar una unidad tras completar vuelve el toast al estado en progreso [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-63.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Resultados de búsqueda
- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)
- {SKU_COMPLETA_PROMO_2X1} tiene una promo "Completa la promo" 2x1 vigente (mismo SKU, sin código especial)

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_COMPLETA_PROMO_2X1} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_COMPLETA_PROMO_2X1} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_COMPLETA_PROMO_2X1}.
4. El usuario toca "Agregar" y luego "+" hasta completar la promo.
5. El sistema actualiza la cantidad y muestra el toast "¡Completaste la promo!" con la barra de progreso completa.
6. El usuario toca "−" en el shelf.
7. El sistema actualiza la cantidad y muestra "Agrega 1 y ahorra más" con la barra en 1 de 2.

**Resultado esperado**

Tras quitar una unidad se vuelve a mostrar "Agrega 1 y ahorra más" y la barra retrocede a 1 de 2.

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): el SKU {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) se comporta como «Combina la promo» y no como «Completa la promo»: su shelf y su PDP muestran el chip «Combina la promo» y no usan el toast «Agrega N y ahorra más». La precondición (promo Completa la promo 2x1 del mismo SKU) no se cumple. Falta un SKU con Completa la promo 2x1 (lo carga el equipo de data).

**Evidencia**

![Android · Paso 1 — quitar tras completar](<B2C-63 APP Evidencias/TC-B2C63-APP-008-android-p01-quitar-tras-completar.png>)

---

### TC-B2C63-APP-009 - Verificar que la unidad siguiente a una promo completada inicia un nuevo tramo [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-63.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Resultados de búsqueda
- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)
- {SKU_COMPLETA_PROMO_2X1} tiene una promo "Completa la promo" 2x1 vigente (mismo SKU, sin código especial)

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_COMPLETA_PROMO_2X1} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_COMPLETA_PROMO_2X1} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_COMPLETA_PROMO_2X1}.
4. El usuario toca "Agregar" y luego "+" hasta completar la promo.
5. El sistema actualiza la cantidad y muestra el toast "¡Completaste la promo!" con la barra de progreso completa.
6. El usuario toca "+" una vez más.
7. El sistema reinicia el avance y muestra "Agrega 1 y ahorra más" con la barra en 1 de 2.

**Resultado esperado**

Con 3 unidades se inicia el 2º tramo: la barra se reinicia a 1 de 2 y el contador muestra 3 unidades.

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): el SKU {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) se comporta como «Combina la promo» y no como «Completa la promo»: su shelf y su PDP muestran el chip «Combina la promo» y no usan el toast «Agrega N y ahorra más». La precondición (promo Completa la promo 2x1 del mismo SKU) no se cumple. Falta un SKU con Completa la promo 2x1 (lo carga el equipo de data).

**Evidencia**

![Android · Paso 1 — nuevo tramo](<B2C-63 APP Evidencias/TC-B2C63-APP-009-android-p01-nuevo-tramo.png>)

---

### TC-B2C63-APP-010 - Verificar que disminuir unidades desde el shelf recalcula el progreso [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-63.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Resultados de búsqueda
- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)
- {SKU_COMPLETA_PROMO_3X2} tiene una promo "Completa la promo" 3x2 vigente (mismo SKU, sin código especial)

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_COMPLETA_PROMO_3X2} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_COMPLETA_PROMO_3X2} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_COMPLETA_PROMO_3X2}.
4. El usuario toca "Agregar" y luego "+" hasta tener 2 unidades.
5. El sistema muestra "Agrega 1 y ahorra más".
6. El usuario toca "−" en el shelf.
7. El sistema actualiza el carro y muestra "Agrega 2 y ahorra más".

**Resultado esperado**

Con 1 unidad el progreso y el mensaje se recalculan ("Agrega 2 y ahorra más").

**Resultado obtenido**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Esperado: el shelf de los resultados muestra el toast de la promo y la barra de progreso al cambiar la cantidad. Obtenido (SKU 3x2 {SKU_COMPLETA_PROMO_3X2}): la cantidad cambia pero el shelf no muestra «Agrega N y ahorra más» ni «¡Completaste la promo!»; el toast sí aparece en la PDP (B2C-51 TC-013). Bug: B2C-1442.

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Esperado: el shelf de los resultados muestra el toast de la promo y la barra de progreso al cambiar la cantidad. Obtenido (SKU 3x2 {SKU_COMPLETA_PROMO_3X2}): la cantidad cambia pero el shelf no muestra «Agrega N y ahorra más» ni «¡Completaste la promo!»; el toast sí aparece en la PDP (B2C-51 TC-013). Bug: B2C-1442.

**Evidencia**

![Android · Paso 1 — de 2 a 1](<B2C-63 APP Evidencias/TC-B2C63-APP-010-android-p01-de-2-a-1.png>)

---

### TC-B2C63-APP-011 - Verificar que eliminar el producto desde el shelf resetea el progreso y oculta el toast [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-63.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Resultados de búsqueda
- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)
- {SKU_COMPLETA_PROMO_2X1} tiene una promo "Completa la promo" 2x1 vigente (mismo SKU, sin código especial)

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_COMPLETA_PROMO_2X1} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_COMPLETA_PROMO_2X1} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_COMPLETA_PROMO_2X1}.
4. El usuario toca "Agregar".
5. El sistema agrega la unidad y muestra el toast "Agrega 1 y ahorra más" con la barra de progreso en 1 de 2.
6. El usuario toca "−" hasta llegar a 0 unidades.
7. El sistema quita el producto del carro y deja de mostrar el progreso de la promo.

**Resultado esperado**

El producto sale del carro, el shelf vuelve a mostrar "Agregar" y no se muestran toast ni barra de progreso.

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Tras quitar hasta 0: toast «», progreso «», el shelf vuelve a «Agregar»: true. Nota: al no mostrarse nunca el toast, esta comprobación es la ausencia de toast y barra al llegar a 0 unidades.

**Evidencia**

![Android · Paso 1 — producto eliminado](<B2C-63 APP Evidencias/TC-B2C63-APP-011-android-p01-producto-eliminado.png>)

---

### TC-B2C63-APP-012 - Verificar que disminuir unidades desde un modal actualiza el progreso y el mensaje promocional [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-63.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Modal
- Método de entrega activo: Despacho a domicilio a {DIRECCION_DESPACHO_001}
- {SKU_COMPLETA_PROMO_2X1} tiene una promo "Completa la promo" 2x1 vigente (mismo SKU, sin código especial)
- El carro contiene {SKU_COMPLETA_PROMO_2X1} x 2 (promo 2x1 completada)

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN
- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario abre un modal que contiene el shelf de {SKU_COMPLETA_PROMO_2X1} (desde la PLP o un carrusel).
3. El sistema muestra el modal con el shelf en 2 unidades y la promo completada.
4. El usuario toca "−" en el shelf del modal.
5. El sistema actualiza la cantidad a 1, retrocede la barra de progreso a 1 de 2 y muestra "Agrega 1 y ahorra más".

**Resultado esperado**

Dentro del modal el contador queda en 1, la barra de progreso retrocede a 1 de 2 y el mensaje cambia a "Agrega 1 y ahorra más"; el carro queda con 1 unidad.

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): en el modal «Combina la promo» (se abre desde el chip del shelf). En el modal con 2 unidades: toast «no se muestra», contador «2 / 2 productos»; tras «−»: toast «Agrega 1 y ahorra más», contador «1 / 2 productos». Textos: ✕ | ✕ | Combina la promo | 🤓 | Agrega 1 y ahorra más | 1 / 2 productos | Agregar a mis productos | 2x1 a $2.550 |  ($8.500 x Kg) | $2.550 c/u ($17.000 x Kg) | Lays | Papas fritas Lay's artesanas sal de mar bolsa 150 g | 150 g | En carro | 1 un. | Volver al inicio

**Evidencia**

![Android · Paso 1 — modal con 2 unidades](<B2C-63 APP Evidencias/TC-B2C63-APP-012-android-p01-modal-con-2-unidades.png>)

![Android · Paso 2 — modal tras quitar](<B2C-63 APP Evidencias/TC-B2C63-APP-012-android-p02-modal-tras-quitar.png>)

---

### TC-B2C63-APP-013 - Verificar que quitar unidades desde la PDP actualiza el contador, la barra de progreso y el mensaje promocional [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-63.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- Método de entrega activo: Despacho a domicilio a {DIRECCION_DESPACHO_001}
- {SKU_COMPLETA_PROMO_2X1} tiene una promo "Completa la promo" 2x1 vigente (mismo SKU, sin código especial)
- El carro contiene {SKU_COMPLETA_PROMO_2X1} x 2 (promo 2x1 completada)

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN
- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario abre la PDP de {SKU_COMPLETA_PROMO_2X1}.
3. El sistema carga la PDP con el contador en 2 y la barra de progreso completa.
4. El usuario toca "−" en el stepper de la PDP.
5. El sistema actualiza el contador a 1, retrocede la barra de progreso a 1 de 2 y muestra "Agrega 1 y ahorra más".

**Resultado esperado**

En la PDP el contador queda en 1, la barra de progreso retrocede a 1 de 2 y se muestra "Agrega 1 y ahorra más".

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): el SKU {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) se comporta como «Combina la promo» y no como «Completa la promo»: su shelf y su PDP muestran el chip «Combina la promo» y no usan el toast «Agrega N y ahorra más». La precondición (promo Completa la promo 2x1 del mismo SKU) no se cumple. Falta un SKU con Completa la promo 2x1 (lo carga el equipo de data).

**Evidencia**

![Android · Paso 1 — pdp tras quitar](<B2C-63 APP Evidencias/TC-B2C63-APP-013-android-p01-pdp-tras-quitar.png>)

---

### TC-B2C63-APP-014 - Verificar que quitar unidades desde un carrusel del Home actualiza el contador, la barra de progreso y el mensaje promocional [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-63.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Método de entrega activo: Despacho a domicilio a {DIRECCION_DESPACHO_001}
- {SKU_COMPLETA_PROMO_2X1} tiene una promo "Completa la promo" 2x1 vigente (mismo SKU, sin código especial)
- El carro contiene {SKU_COMPLETA_PROMO_2X1} x 2 (promo 2x1 completada)
- {SKU_COMPLETA_PROMO_2X1} aparece en un carrusel del Home

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN
- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario ubica {SKU_COMPLETA_PROMO_2X1} en un carrusel del Home.
3. El sistema muestra el shelf del carrusel con el contador en 2 y la barra de progreso completa.
4. El usuario toca "−" en el shelf del carrusel.
5. El sistema actualiza el contador a 1, retrocede la barra de progreso a 1 de 2 y muestra "Agrega 1 y ahorra más".

**Resultado esperado**

En el carrusel el contador queda en 1, la barra de progreso retrocede a 1 de 2 y se muestra "Agrega 1 y ahorra más".

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): la precondición pide {SKU_COMPLETA_PROMO_2X1} en un carrusel del Home; se recorrió el Home completo (12 productos distintos) y el SKU no aparece en ninguno. Falta que el SKU de la promo esté en un carrusel del Home (lo configura el equipo de contenido/data).

---

### TC-B2C63-APP-015 - Verificar que completar un segundo ciclo promocional muestra nuevamente el toast "¡Completaste la promo!" [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-63.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Resultados de búsqueda
- Método de entrega activo: Despacho a domicilio a {DIRECCION_DESPACHO_001}
- {SKU_COMPLETA_PROMO_2X1} tiene una promo "Completa la promo" 2x1 vigente (mismo SKU, sin código especial)
- El carro contiene {SKU_COMPLETA_PROMO_2X1} x 3 (1er ciclo completado y 2º ciclo en 1 de 2)

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN
- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_COMPLETA_PROMO_2X1} y toca "Buscar" en el teclado.
3. El sistema muestra el shelf de {SKU_COMPLETA_PROMO_2X1} con el contador en 3 y la barra de progreso en 1 de 2.
4. El usuario toca "+" en el shelf.
5. El sistema actualiza el contador a 4, completa la barra de progreso y muestra el toast "¡Completaste la promo!".

**Resultado esperado**

Con 4 unidades se muestra nuevamente el toast "¡Completaste la promo!", la barra de progreso queda completa y el contador muestra 4.

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): el SKU {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) se comporta como «Combina la promo» y no como «Completa la promo»: su shelf y su PDP muestran el chip «Combina la promo» y no usan el toast «Agrega N y ahorra más». La precondición (promo Completa la promo 2x1 del mismo SKU) no se cumple. Falta un SKU con Completa la promo 2x1 (lo carga el equipo de data).

**Evidencia**

![Android · Paso 1 — segundo ciclo](<B2C-63 APP Evidencias/TC-B2C63-APP-015-android-p01-segundo-ciclo.png>)

---

### TC-B2C63-APP-016 - Verificar que disminuir de 4 a 3 unidades con dos ciclos completos recalcula el progreso promocional [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-63.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Resultados de búsqueda
- Método de entrega activo: Despacho a domicilio a {DIRECCION_DESPACHO_001}
- {SKU_COMPLETA_PROMO_2X1} tiene una promo "Completa la promo" 2x1 vigente (mismo SKU, sin código especial)
- El carro contiene {SKU_COMPLETA_PROMO_2X1} x 4 (dos ciclos completos)

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN
- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_COMPLETA_PROMO_2X1} y toca "Buscar" en el teclado.
3. El sistema muestra el shelf de {SKU_COMPLETA_PROMO_2X1} con el contador en 4 y la barra de progreso completa.
4. El usuario toca "−" en el shelf.
5. El sistema actualiza el contador a 3, retrocede la barra de progreso a 1 de 2 y muestra "Agrega 1 y ahorra más".

**Resultado esperado**

Con 3 unidades el contador muestra 3, la barra de progreso queda en 1 de 2 (2º ciclo en progreso) y el mensaje cambia a "Agrega 1 y ahorra más"; el 1er ciclo sigue completo.

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): el SKU {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) se comporta como «Combina la promo» y no como «Completa la promo»: su shelf y su PDP muestran el chip «Combina la promo» y no usan el toast «Agrega N y ahorra más». La precondición (promo Completa la promo 2x1 del mismo SKU) no se cumple. Falta un SKU con Completa la promo 2x1 (lo carga el equipo de data).

**Evidencia**

![Android · Paso 1 — de 4 a 3](<B2C-63 APP Evidencias/TC-B2C63-APP-016-android-p01-de-4-a-3.png>)

---

### TC-B2C63-APP-017 - Verificar que el progreso promocional iniciado en el Home se mantiene al seguir agregando desde la PDP [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-63.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Método de entrega activo: Despacho a domicilio a {DIRECCION_DESPACHO_001}
- {SKU_COMPLETA_PROMO_2X1} tiene una promo "Completa la promo" 2x1 vigente (mismo SKU, sin código especial)
- Carro vacío
- {SKU_COMPLETA_PROMO_2X1} aparece en un carrusel del Home

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN
- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario toca "Agregar" en el shelf de {SKU_COMPLETA_PROMO_2X1} en un carrusel del Home.
3. El sistema agrega la unidad y muestra "Agrega 1 y ahorra más" con la barra de progreso en 1 de 2.
4. El usuario abre la PDP de {SKU_COMPLETA_PROMO_2X1}.
5. El sistema carga la PDP con el contador en 1 y la barra de progreso en 1 de 2.
6. El usuario toca "+" en el stepper de la PDP.
7. El sistema actualiza el contador a 2, completa la barra de progreso y muestra el toast "¡Completaste la promo!".

**Resultado esperado**

La PDP conserva el progreso iniciado en el Home (contador 1, barra 1 de 2) y al agregar la 2ª unidad muestra "¡Completaste la promo!".

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): la precondición pide {SKU_COMPLETA_PROMO_2X1} en un carrusel del Home; se recorrió el Home completo (12 productos distintos) y el SKU no aparece en ninguno. Falta que el SKU de la promo esté en un carrusel del Home (lo configura el equipo de contenido/data).

---

### TC-B2C63-APP-018 - Verificar que el progreso promocional iniciado en el Home se mantiene al seguir agregando desde los resultados de búsqueda [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-63.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Método de entrega activo: Despacho a domicilio a {DIRECCION_DESPACHO_001}
- {SKU_COMPLETA_PROMO_2X1} tiene una promo "Completa la promo" 2x1 vigente (mismo SKU, sin código especial)
- Carro vacío
- {SKU_COMPLETA_PROMO_2X1} aparece en un carrusel del Home

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN
- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario toca "Agregar" en el shelf de {SKU_COMPLETA_PROMO_2X1} en un carrusel del Home.
3. El sistema agrega la unidad y muestra "Agrega 1 y ahorra más" con la barra de progreso en 1 de 2.
4. El usuario busca {SKU_COMPLETA_PROMO_2X1} y toca "Buscar" en el teclado.
5. El sistema muestra el shelf de {SKU_COMPLETA_PROMO_2X1} con el contador en 1 y la barra de progreso en 1 de 2.
6. El usuario toca "+" en el shelf.
7. El sistema actualiza el contador a 2, completa la barra de progreso y muestra el toast "¡Completaste la promo!".

**Resultado esperado**

El shelf de los resultados conserva el progreso iniciado en el Home (contador 1, barra 1 de 2) y al agregar la 2ª unidad muestra "¡Completaste la promo!".

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): la precondición pide {SKU_COMPLETA_PROMO_2X1} en un carrusel del Home; se recorrió el Home completo (12 productos distintos) y el SKU no aparece en ninguno. Falta que el SKU de la promo esté en un carrusel del Home (lo configura el equipo de contenido/data).

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "devices": {
   "android": "dispositivo por ADB"
  },
  "environment": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-63 APP",
  "tc_file": "Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-63 APP Test Cases.xlsx",
  "title": "B2C-63 (app Android) - Completa la promo (toast y progreso) - Evidencias QA",
  "updated_at": "2026-11-03"
 },
 "history": {
  "2026-11-03": [
   "TC-B2C63-APP-001",
   "TC-B2C63-APP-002",
   "TC-B2C63-APP-003",
   "TC-B2C63-APP-004",
   "TC-B2C63-APP-005",
   "TC-B2C63-APP-006",
   "TC-B2C63-APP-008",
   "TC-B2C63-APP-009",
   "TC-B2C63-APP-010",
   "TC-B2C63-APP-011",
   "TC-B2C63-APP-012",
   "TC-B2C63-APP-013",
   "TC-B2C63-APP-014",
   "TC-B2C63-APP-015",
   "TC-B2C63-APP-016",
   "TC-B2C63-APP-017",
   "TC-B2C63-APP-018"
  ]
 },
 "results": [
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Se muestra el toast \"Agrega 1 y ahorra más\" y la barra de progreso indica 1 de 2.",
   "form_factor": "app",
   "id": "TC-B2C63-APP-001",
   "name": "Verificar que agregar la 1ª unidad desde el shelf muestra \"Agrega N y ahorra más\" [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): el SKU {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) se comporta como «Combina la promo» y no como «Completa la promo»: su shelf y su PDP muestran el chip «Combina la promo» y no usan el toast «Agrega N y ahorra más». La precondición (promo Completa la promo 2x1 del mismo SKU) no se cumple. Falta un SKU con Completa la promo 2x1 (lo carga el equipo de data).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)\n- {SKU_COMPLETA_PROMO_2X1} tiene una promo \"Completa la promo\" 2x1 vigente (mismo SKU, sin código especial)",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — toast 1 de 2",
     "file": "TC-B2C63-APP-001-android-p01-toast-1-de-2.png"
    }
   ],
   "spec": "tests-app/B2C-63.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_COMPLETA_PROMO_2X1} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_COMPLETA_PROMO_2X1}.\n4. El usuario toca \"Agregar\" en el shelf.\n5. El sistema agrega la unidad y muestra el toast \"Agrega 1 y ahorra más\" con la barra de progreso en 1 de 2.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_COMPLETA_PROMO_2X1} = TBD"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Con 2 unidades se muestra \"¡Completaste la promo!\" y la barra de progreso queda completa.",
   "form_factor": "app",
   "id": "TC-B2C63-APP-002",
   "name": "Verificar que completar el umbral desde el shelf muestra \"¡Completaste la promo!\" [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): el SKU {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) se comporta como «Combina la promo» y no como «Completa la promo»: su shelf y su PDP muestran el chip «Combina la promo» y no usan el toast «Agrega N y ahorra más». La precondición (promo Completa la promo 2x1 del mismo SKU) no se cumple. Falta un SKU con Completa la promo 2x1 (lo carga el equipo de data).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)\n- {SKU_COMPLETA_PROMO_2X1} tiene una promo \"Completa la promo\" 2x1 vigente (mismo SKU, sin código especial)",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — promo completa",
     "file": "TC-B2C63-APP-002-android-p01-promo-completa.png"
    }
   ],
   "spec": "tests-app/B2C-63.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_COMPLETA_PROMO_2X1} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_COMPLETA_PROMO_2X1}.\n4. El usuario toca \"Agregar\" en el shelf.\n5. El sistema agrega la unidad y muestra el toast \"Agrega 1 y ahorra más\" con la barra de progreso en 1 de 2.\n6. El usuario toca \"+\" en el shelf.\n7. El sistema actualiza la cantidad y muestra el toast \"¡Completaste la promo!\" con la barra de progreso completa.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_COMPLETA_PROMO_2X1} = TBD"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "La barra de progreso, el contador y el mensaje cambian con cada unidad sin recargar la pantalla.",
   "form_factor": "app",
   "id": "TC-B2C63-APP-003",
   "name": "Verificar que la barra de progreso y el contador se actualizan con cada unidad [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Esperado: el shelf de los resultados muestra el toast de la promo y la barra de progreso al cambiar la cantidad. Obtenido (SKU 3x2 {SKU_COMPLETA_PROMO_3X2}): la cantidad cambia pero el shelf no muestra «Agrega N y ahorra más» ni «¡Completaste la promo!»; el toast sí aparece en la PDP (B2C-51 TC-013). Bug: B2C-1442.",
   "observed": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Esperado: el shelf de los resultados muestra el toast de la promo y la barra de progreso al cambiar la cantidad. Obtenido (SKU 3x2 {SKU_COMPLETA_PROMO_3X2}): la cantidad cambia pero el shelf no muestra «Agrega N y ahorra más» ni «¡Completaste la promo!»; el toast sí aparece en la PDP (B2C-51 TC-013). Bug: B2C-1442.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)\n- {SKU_COMPLETA_PROMO_3X2} tiene una promo \"Completa la promo\" 3x2 vigente (mismo SKU, sin código especial)",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — agrega 2",
     "file": "TC-B2C63-APP-003-android-p01-agrega-2.png"
    },
    {
     "caption": "Android · Paso 2 — agrega 1",
     "file": "TC-B2C63-APP-003-android-p02-agrega-1.png"
    },
    {
     "caption": "Android · Paso 3 — completa",
     "file": "TC-B2C63-APP-003-android-p03-completa.png"
    }
   ],
   "spec": "tests-app/B2C-63.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_COMPLETA_PROMO_3X2} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_COMPLETA_PROMO_3X2}.\n4. El usuario toca \"Agregar\" y luego \"+\" dos veces.\n5. El sistema muestra \"Agrega 2 y ahorra más\", luego \"Agrega 1 y ahorra más\" y finalmente \"¡Completaste la promo!\", avanzando la barra en cada paso.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_COMPLETA_PROMO_3X2} = TBD"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Se muestra el toast \"Agrega 1 y ahorra más\" con la barra de progreso en la PDP.",
   "form_factor": "app",
   "id": "TC-B2C63-APP-004",
   "name": "Verificar que agregar desde la PDP muestra el toast y la barra de progreso [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): el SKU {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) se comporta como «Combina la promo» y no como «Completa la promo»: su shelf y su PDP muestran el chip «Combina la promo» y no usan el toast «Agrega N y ahorra más». La precondición (promo Completa la promo 2x1 del mismo SKU) no se cumple. Falta un SKU con Completa la promo 2x1 (lo carga el equipo de data).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)\n- {SKU_COMPLETA_PROMO_2X1} tiene una promo \"Completa la promo\" 2x1 vigente (mismo SKU, sin código especial)",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — pdp tras agregar",
     "file": "TC-B2C63-APP-004-android-p01-pdp-tras-agregar.png"
    }
   ],
   "spec": "tests-app/B2C-63.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}, busca {SKU_COMPLETA_PROMO_2X1} y abre su PDP.\n2. El sistema carga la PDP de {SKU_COMPLETA_PROMO_2X1}.\n3. El usuario toca \"Agregar\".\n4. El sistema agrega la unidad y muestra el toast \"Agrega 1 y ahorra más\" con la barra de progreso en 1 de 2.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_COMPLETA_PROMO_2X1} = TBD"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Se muestra el toast \"Agrega 1 y ahorra más\" con la barra de progreso al agregar desde el modal.",
   "form_factor": "app",
   "id": "TC-B2C63-APP-005",
   "name": "Verificar que agregar desde un modal con shelves muestra el toast [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): en el modal «Combina la promo» (se abre desde el chip del shelf). En el modal «Combina la promo» tras «Agregar»: toast «Agrega 1 y ahorra más»; contador «1 / 2 productos». Textos: ✕ | ✕ | Combina la promo | 🤓 | Agrega 1 y ahorra más | 1 / 2 productos | Agregar a mis productos | 2x1 a $2.550 |  ($8.500 x Kg) | $2.550 c/u ($17.000 x Kg) | Lays | Papas fritas Lay's artesanas sal de mar bolsa 150 g | 150 g | En carro | 1 un. | Volver al inicio | Volver al inicio.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Modal\n- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)\n- {SKU_COMPLETA_PROMO_2X1} tiene una promo \"Completa la promo\" 2x1 vigente (mismo SKU, sin código especial)",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — fallo abrir modal",
     "file": "TC-B2C63-APP-005-android-p01-fallo-abrir-modal.png"
    },
    {
     "caption": "Android · Paso 1 — modal combina la promo",
     "file": "TC-B2C63-APP-005-android-p01-modal-combina-la-promo.png"
    },
    {
     "caption": "Android · Paso 1 — modal tras agregar",
     "file": "TC-B2C63-APP-005-android-p01-modal-tras-agregar.png"
    }
   ],
   "spec": "tests-app/B2C-63.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario abre un modal que contiene el shelf de {SKU_COMPLETA_PROMO_2X1}.\n3. El sistema muestra el modal con el shelf.\n4. El usuario toca \"Agregar\" en el shelf del modal.\n5. El sistema agrega la unidad y muestra el toast \"Agrega 1 y ahorra más\" con la barra de progreso en 1 de 2.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_COMPLETA_PROMO_2X1} = TBD"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Se muestra el toast \"Agrega 1 y ahorra más\" con la barra de progreso al agregar desde el carrusel.",
   "form_factor": "app",
   "id": "TC-B2C63-APP-006",
   "name": "Verificar que agregar desde un carrusel del Home muestra el toast [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): la precondición pide {SKU_COMPLETA_PROMO_2X1} en un carrusel del Home; se recorrió el Home completo (12 productos distintos) y el SKU no aparece en ninguno. Falta que el SKU de la promo esté en un carrusel del Home (lo configura el equipo de contenido/data).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)\n- {SKU_COMPLETA_PROMO_2X1} tiene una promo \"Completa la promo\" 2x1 vigente (mismo SKU, sin código especial)\n- {SKU_COMPLETA_PROMO_2X1} aparece en un carrusel del Home",
   "spec": "tests-app/B2C-63.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home con un carrusel que contiene {SKU_COMPLETA_PROMO_2X1}.\n3. El usuario toca \"Agregar\" en ese producto del carrusel.\n4. El sistema agrega la unidad y muestra el toast \"Agrega 1 y ahorra más\" con la barra de progreso en 1 de 2.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_COMPLETA_PROMO_2X1} = TBD"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Tras quitar una unidad se vuelve a mostrar \"Agrega 1 y ahorra más\" y la barra retrocede a 1 de 2.",
   "form_factor": "app",
   "id": "TC-B2C63-APP-008",
   "name": "Verificar que quitar una unidad tras completar vuelve el toast al estado en progreso [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): el SKU {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) se comporta como «Combina la promo» y no como «Completa la promo»: su shelf y su PDP muestran el chip «Combina la promo» y no usan el toast «Agrega N y ahorra más». La precondición (promo Completa la promo 2x1 del mismo SKU) no se cumple. Falta un SKU con Completa la promo 2x1 (lo carga el equipo de data).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)\n- {SKU_COMPLETA_PROMO_2X1} tiene una promo \"Completa la promo\" 2x1 vigente (mismo SKU, sin código especial)",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — quitar tras completar",
     "file": "TC-B2C63-APP-008-android-p01-quitar-tras-completar.png"
    }
   ],
   "spec": "tests-app/B2C-63.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_COMPLETA_PROMO_2X1} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_COMPLETA_PROMO_2X1}.\n4. El usuario toca \"Agregar\" y luego \"+\" hasta completar la promo.\n5. El sistema actualiza la cantidad y muestra el toast \"¡Completaste la promo!\" con la barra de progreso completa.\n6. El usuario toca \"−\" en el shelf.\n7. El sistema actualiza la cantidad y muestra \"Agrega 1 y ahorra más\" con la barra en 1 de 2.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_COMPLETA_PROMO_2X1} = TBD"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Con 3 unidades se inicia el 2º tramo: la barra se reinicia a 1 de 2 y el contador muestra 3 unidades.",
   "form_factor": "app",
   "id": "TC-B2C63-APP-009",
   "name": "Verificar que la unidad siguiente a una promo completada inicia un nuevo tramo [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): el SKU {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) se comporta como «Combina la promo» y no como «Completa la promo»: su shelf y su PDP muestran el chip «Combina la promo» y no usan el toast «Agrega N y ahorra más». La precondición (promo Completa la promo 2x1 del mismo SKU) no se cumple. Falta un SKU con Completa la promo 2x1 (lo carga el equipo de data).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)\n- {SKU_COMPLETA_PROMO_2X1} tiene una promo \"Completa la promo\" 2x1 vigente (mismo SKU, sin código especial)",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — nuevo tramo",
     "file": "TC-B2C63-APP-009-android-p01-nuevo-tramo.png"
    }
   ],
   "spec": "tests-app/B2C-63.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_COMPLETA_PROMO_2X1} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_COMPLETA_PROMO_2X1}.\n4. El usuario toca \"Agregar\" y luego \"+\" hasta completar la promo.\n5. El sistema actualiza la cantidad y muestra el toast \"¡Completaste la promo!\" con la barra de progreso completa.\n6. El usuario toca \"+\" una vez más.\n7. El sistema reinicia el avance y muestra \"Agrega 1 y ahorra más\" con la barra en 1 de 2.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_COMPLETA_PROMO_2X1} = TBD"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Con 1 unidad el progreso y el mensaje se recalculan (\"Agrega 2 y ahorra más\").",
   "form_factor": "app",
   "id": "TC-B2C63-APP-010",
   "name": "Verificar que disminuir unidades desde el shelf recalcula el progreso [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Esperado: el shelf de los resultados muestra el toast de la promo y la barra de progreso al cambiar la cantidad. Obtenido (SKU 3x2 {SKU_COMPLETA_PROMO_3X2}): la cantidad cambia pero el shelf no muestra «Agrega N y ahorra más» ni «¡Completaste la promo!»; el toast sí aparece en la PDP (B2C-51 TC-013). Bug: B2C-1442.",
   "observed": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Esperado: el shelf de los resultados muestra el toast de la promo y la barra de progreso al cambiar la cantidad. Obtenido (SKU 3x2 {SKU_COMPLETA_PROMO_3X2}): la cantidad cambia pero el shelf no muestra «Agrega N y ahorra más» ni «¡Completaste la promo!»; el toast sí aparece en la PDP (B2C-51 TC-013). Bug: B2C-1442.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)\n- {SKU_COMPLETA_PROMO_3X2} tiene una promo \"Completa la promo\" 3x2 vigente (mismo SKU, sin código especial)",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — de 2 a 1",
     "file": "TC-B2C63-APP-010-android-p01-de-2-a-1.png"
    }
   ],
   "spec": "tests-app/B2C-63.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_COMPLETA_PROMO_3X2} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_COMPLETA_PROMO_3X2}.\n4. El usuario toca \"Agregar\" y luego \"+\" hasta tener 2 unidades.\n5. El sistema muestra \"Agrega 1 y ahorra más\".\n6. El usuario toca \"−\" en el shelf.\n7. El sistema actualiza el carro y muestra \"Agrega 2 y ahorra más\".",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_COMPLETA_PROMO_3X2} = TBD"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "El producto sale del carro, el shelf vuelve a mostrar \"Agregar\" y no se muestran toast ni barra de progreso.",
   "form_factor": "app",
   "id": "TC-B2C63-APP-011",
   "name": "Verificar que eliminar el producto desde el shelf resetea el progreso y oculta el toast [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Tras quitar hasta 0: toast «», progreso «», el shelf vuelve a «Agregar»: true. Nota: al no mostrarse nunca el toast, esta comprobación es la ausencia de toast y barra al llegar a 0 unidades.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)\n- {SKU_COMPLETA_PROMO_2X1} tiene una promo \"Completa la promo\" 2x1 vigente (mismo SKU, sin código especial)",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — producto eliminado",
     "file": "TC-B2C63-APP-011-android-p01-producto-eliminado.png"
    }
   ],
   "spec": "tests-app/B2C-63.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_COMPLETA_PROMO_2X1} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_COMPLETA_PROMO_2X1}.\n4. El usuario toca \"Agregar\".\n5. El sistema agrega la unidad y muestra el toast \"Agrega 1 y ahorra más\" con la barra de progreso en 1 de 2.\n6. El usuario toca \"−\" hasta llegar a 0 unidades.\n7. El sistema quita el producto del carro y deja de mostrar el progreso de la promo.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_COMPLETA_PROMO_2X1} = TBD"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Dentro del modal el contador queda en 1, la barra de progreso retrocede a 1 de 2 y el mensaje cambia a \"Agrega 1 y ahorra más\"; el carro queda con 1 unidad.",
   "form_factor": "app",
   "id": "TC-B2C63-APP-012",
   "name": "Verificar que disminuir unidades desde un modal actualiza el progreso y el mensaje promocional [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): en el modal «Combina la promo» (se abre desde el chip del shelf). En el modal con 2 unidades: toast «no se muestra», contador «2 / 2 productos»; tras «−»: toast «Agrega 1 y ahorra más», contador «1 / 2 productos». Textos: ✕ | ✕ | Combina la promo | 🤓 | Agrega 1 y ahorra más | 1 / 2 productos | Agregar a mis productos | 2x1 a $2.550 |  ($8.500 x Kg) | $2.550 c/u ($17.000 x Kg) | Lays | Papas fritas Lay's artesanas sal de mar bolsa 150 g | 150 g | En carro | 1 un. | Volver al inicio ",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Modal\n- Método de entrega activo: Despacho a domicilio a {DIRECCION_DESPACHO_001}\n- {SKU_COMPLETA_PROMO_2X1} tiene una promo \"Completa la promo\" 2x1 vigente (mismo SKU, sin código especial)\n- El carro contiene {SKU_COMPLETA_PROMO_2X1} x 2 (promo 2x1 completada)",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — modal con 2 unidades",
     "file": "TC-B2C63-APP-012-android-p01-modal-con-2-unidades.png"
    },
    {
     "caption": "Android · Paso 2 — modal tras quitar",
     "file": "TC-B2C63-APP-012-android-p02-modal-tras-quitar.png"
    }
   ],
   "spec": "tests-app/B2C-63.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario abre un modal que contiene el shelf de {SKU_COMPLETA_PROMO_2X1} (desde la PLP o un carrusel).\n3. El sistema muestra el modal con el shelf en 2 unidades y la promo completada.\n4. El usuario toca \"−\" en el shelf del modal.\n5. El sistema actualiza la cantidad a 1, retrocede la barra de progreso a 1 de 2 y muestra \"Agrega 1 y ahorra más\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN\n- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "En la PDP el contador queda en 1, la barra de progreso retrocede a 1 de 2 y se muestra \"Agrega 1 y ahorra más\".",
   "form_factor": "app",
   "id": "TC-B2C63-APP-013",
   "name": "Verificar que quitar unidades desde la PDP actualiza el contador, la barra de progreso y el mensaje promocional [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): el SKU {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) se comporta como «Combina la promo» y no como «Completa la promo»: su shelf y su PDP muestran el chip «Combina la promo» y no usan el toast «Agrega N y ahorra más». La precondición (promo Completa la promo 2x1 del mismo SKU) no se cumple. Falta un SKU con Completa la promo 2x1 (lo carga el equipo de data).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- Método de entrega activo: Despacho a domicilio a {DIRECCION_DESPACHO_001}\n- {SKU_COMPLETA_PROMO_2X1} tiene una promo \"Completa la promo\" 2x1 vigente (mismo SKU, sin código especial)\n- El carro contiene {SKU_COMPLETA_PROMO_2X1} x 2 (promo 2x1 completada)",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — pdp tras quitar",
     "file": "TC-B2C63-APP-013-android-p01-pdp-tras-quitar.png"
    }
   ],
   "spec": "tests-app/B2C-63.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario abre la PDP de {SKU_COMPLETA_PROMO_2X1}.\n3. El sistema carga la PDP con el contador en 2 y la barra de progreso completa.\n4. El usuario toca \"−\" en el stepper de la PDP.\n5. El sistema actualiza el contador a 1, retrocede la barra de progreso a 1 de 2 y muestra \"Agrega 1 y ahorra más\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN\n- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "En el carrusel el contador queda en 1, la barra de progreso retrocede a 1 de 2 y se muestra \"Agrega 1 y ahorra más\".",
   "form_factor": "app",
   "id": "TC-B2C63-APP-014",
   "name": "Verificar que quitar unidades desde un carrusel del Home actualiza el contador, la barra de progreso y el mensaje promocional [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): la precondición pide {SKU_COMPLETA_PROMO_2X1} en un carrusel del Home; se recorrió el Home completo (12 productos distintos) y el SKU no aparece en ninguno. Falta que el SKU de la promo esté en un carrusel del Home (lo configura el equipo de contenido/data).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Método de entrega activo: Despacho a domicilio a {DIRECCION_DESPACHO_001}\n- {SKU_COMPLETA_PROMO_2X1} tiene una promo \"Completa la promo\" 2x1 vigente (mismo SKU, sin código especial)\n- El carro contiene {SKU_COMPLETA_PROMO_2X1} x 2 (promo 2x1 completada)\n- {SKU_COMPLETA_PROMO_2X1} aparece en un carrusel del Home",
   "spec": "tests-app/B2C-63.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario ubica {SKU_COMPLETA_PROMO_2X1} en un carrusel del Home.\n3. El sistema muestra el shelf del carrusel con el contador en 2 y la barra de progreso completa.\n4. El usuario toca \"−\" en el shelf del carrusel.\n5. El sistema actualiza el contador a 1, retrocede la barra de progreso a 1 de 2 y muestra \"Agrega 1 y ahorra más\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN\n- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Con 4 unidades se muestra nuevamente el toast \"¡Completaste la promo!\", la barra de progreso queda completa y el contador muestra 4.",
   "form_factor": "app",
   "id": "TC-B2C63-APP-015",
   "name": "Verificar que completar un segundo ciclo promocional muestra nuevamente el toast \"¡Completaste la promo!\" [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): el SKU {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) se comporta como «Combina la promo» y no como «Completa la promo»: su shelf y su PDP muestran el chip «Combina la promo» y no usan el toast «Agrega N y ahorra más». La precondición (promo Completa la promo 2x1 del mismo SKU) no se cumple. Falta un SKU con Completa la promo 2x1 (lo carga el equipo de data).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- Método de entrega activo: Despacho a domicilio a {DIRECCION_DESPACHO_001}\n- {SKU_COMPLETA_PROMO_2X1} tiene una promo \"Completa la promo\" 2x1 vigente (mismo SKU, sin código especial)\n- El carro contiene {SKU_COMPLETA_PROMO_2X1} x 3 (1er ciclo completado y 2º ciclo en 1 de 2)",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — segundo ciclo",
     "file": "TC-B2C63-APP-015-android-p01-segundo-ciclo.png"
    }
   ],
   "spec": "tests-app/B2C-63.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_COMPLETA_PROMO_2X1} y toca \"Buscar\" en el teclado.\n3. El sistema muestra el shelf de {SKU_COMPLETA_PROMO_2X1} con el contador en 3 y la barra de progreso en 1 de 2.\n4. El usuario toca \"+\" en el shelf.\n5. El sistema actualiza el contador a 4, completa la barra de progreso y muestra el toast \"¡Completaste la promo!\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN\n- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Con 3 unidades el contador muestra 3, la barra de progreso queda en 1 de 2 (2º ciclo en progreso) y el mensaje cambia a \"Agrega 1 y ahorra más\"; el 1er ciclo sigue completo.",
   "form_factor": "app",
   "id": "TC-B2C63-APP-016",
   "name": "Verificar que disminuir de 4 a 3 unidades con dos ciclos completos recalcula el progreso promocional [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): el SKU {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN) se comporta como «Combina la promo» y no como «Completa la promo»: su shelf y su PDP muestran el chip «Combina la promo» y no usan el toast «Agrega N y ahorra más». La precondición (promo Completa la promo 2x1 del mismo SKU) no se cumple. Falta un SKU con Completa la promo 2x1 (lo carga el equipo de data).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- Método de entrega activo: Despacho a domicilio a {DIRECCION_DESPACHO_001}\n- {SKU_COMPLETA_PROMO_2X1} tiene una promo \"Completa la promo\" 2x1 vigente (mismo SKU, sin código especial)\n- El carro contiene {SKU_COMPLETA_PROMO_2X1} x 4 (dos ciclos completos)",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — de 4 a 3",
     "file": "TC-B2C63-APP-016-android-p01-de-4-a-3.png"
    }
   ],
   "spec": "tests-app/B2C-63.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_COMPLETA_PROMO_2X1} y toca \"Buscar\" en el teclado.\n3. El sistema muestra el shelf de {SKU_COMPLETA_PROMO_2X1} con el contador en 4 y la barra de progreso completa.\n4. El usuario toca \"−\" en el shelf.\n5. El sistema actualiza el contador a 3, retrocede la barra de progreso a 1 de 2 y muestra \"Agrega 1 y ahorra más\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN\n- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "La PDP conserva el progreso iniciado en el Home (contador 1, barra 1 de 2) y al agregar la 2ª unidad muestra \"¡Completaste la promo!\".",
   "form_factor": "app",
   "id": "TC-B2C63-APP-017",
   "name": "Verificar que el progreso promocional iniciado en el Home se mantiene al seguir agregando desde la PDP [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): la precondición pide {SKU_COMPLETA_PROMO_2X1} en un carrusel del Home; se recorrió el Home completo (12 productos distintos) y el SKU no aparece en ninguno. Falta que el SKU de la promo esté en un carrusel del Home (lo configura el equipo de contenido/data).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Método de entrega activo: Despacho a domicilio a {DIRECCION_DESPACHO_001}\n- {SKU_COMPLETA_PROMO_2X1} tiene una promo \"Completa la promo\" 2x1 vigente (mismo SKU, sin código especial)\n- Carro vacío\n- {SKU_COMPLETA_PROMO_2X1} aparece en un carrusel del Home",
   "spec": "tests-app/B2C-63.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario toca \"Agregar\" en el shelf de {SKU_COMPLETA_PROMO_2X1} en un carrusel del Home.\n3. El sistema agrega la unidad y muestra \"Agrega 1 y ahorra más\" con la barra de progreso en 1 de 2.\n4. El usuario abre la PDP de {SKU_COMPLETA_PROMO_2X1}.\n5. El sistema carga la PDP con el contador en 1 y la barra de progreso en 1 de 2.\n6. El usuario toca \"+\" en el stepper de la PDP.\n7. El sistema actualiza el contador a 2, completa la barra de progreso y muestra el toast \"¡Completaste la promo!\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN\n- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "El shelf de los resultados conserva el progreso iniciado en el Home (contador 1, barra 1 de 2) y al agregar la 2ª unidad muestra \"¡Completaste la promo!\".",
   "form_factor": "app",
   "id": "TC-B2C63-APP-018",
   "name": "Verificar que el progreso promocional iniciado en el Home se mantiene al seguir agregando desde los resultados de búsqueda [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): la precondición pide {SKU_COMPLETA_PROMO_2X1} en un carrusel del Home; se recorrió el Home completo (12 productos distintos) y el SKU no aparece en ninguno. Falta que el SKU de la promo esté en un carrusel del Home (lo configura el equipo de contenido/data).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Método de entrega activo: Despacho a domicilio a {DIRECCION_DESPACHO_001}\n- {SKU_COMPLETA_PROMO_2X1} tiene una promo \"Completa la promo\" 2x1 vigente (mismo SKU, sin código especial)\n- Carro vacío\n- {SKU_COMPLETA_PROMO_2X1} aparece en un carrusel del Home",
   "spec": "tests-app/B2C-63.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario toca \"Agregar\" en el shelf de {SKU_COMPLETA_PROMO_2X1} en un carrusel del Home.\n3. El sistema agrega la unidad y muestra \"Agrega 1 y ahorra más\" con la barra de progreso en 1 de 2.\n4. El usuario busca {SKU_COMPLETA_PROMO_2X1} y toca \"Buscar\" en el teclado.\n5. El sistema muestra el shelf de {SKU_COMPLETA_PROMO_2X1} con el contador en 1 y la barra de progreso en 1 de 2.\n6. El usuario toca \"+\" en el shelf.\n7. El sistema actualiza el contador a 2, completa la barra de progreso y muestra el toast \"¡Completaste la promo!\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_COMPLETA_PROMO_2X1} = 000000000664214001-UN\n- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida"
  }
 ]
}
-->
