# B2C-62 APP - Evidencias QA (Android)

| Campo | Valor |
|---|---|
| Suite | B2C-62 APP |
| Última actualización | 2026-10-29 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | App Unimarc v1.0.1 (DEV) |
| Origen de los TC | Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-62 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 12 |
| Bloqueado Data | 9 |
| Rechazado | 1 |
| **Total** | **22** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-29 | 22 | TC-B2C62-APP-001, TC-B2C62-APP-002, TC-B2C62-APP-003, TC-B2C62-APP-004, TC-B2C62-APP-005, TC-B2C62-APP-006, TC-B2C62-APP-007, TC-B2C62-APP-008, TC-B2C62-APP-009, TC-B2C62-APP-010, TC-B2C62-APP-011, TC-B2C62-APP-012, TC-B2C62-APP-013, TC-B2C62-APP-014, TC-B2C62-APP-015, TC-B2C62-APP-016, TC-B2C62-APP-017, TC-B2C62-APP-018, TC-B2C62-APP-019, TC-B2C62-APP-020, TC-B2C62-APP-021, TC-B2C62-APP-022 |
| 2026-10-22 | 22 | TC-B2C62-APP-001, TC-B2C62-APP-002, TC-B2C62-APP-003, TC-B2C62-APP-004, TC-B2C62-APP-005, TC-B2C62-APP-006, TC-B2C62-APP-007, TC-B2C62-APP-008, TC-B2C62-APP-009, TC-B2C62-APP-010, TC-B2C62-APP-011, TC-B2C62-APP-012, TC-B2C62-APP-013, TC-B2C62-APP-014, TC-B2C62-APP-015, TC-B2C62-APP-016, TC-B2C62-APP-017, TC-B2C62-APP-018, TC-B2C62-APP-019, TC-B2C62-APP-020, TC-B2C62-APP-021, TC-B2C62-APP-022 |

## Detalle por caso de prueba

### TC-B2C62-APP-001 - Verificar que sin promoción el shelf muestra el precio normal en CLP [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-62.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Resultados de búsqueda
- {SKU_SIN_PROMO} no tiene ninguna promoción vigente

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_SIN_PROMO} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_SIN_PROMO} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_SIN_PROMO}.

**Resultado esperado**

Se muestra el precio normal formateado en CLP (ej. $1.990), sin tachado ni badges.

**Observación**

iOS: pendiente (falta MOBILENEXT_API_KEY).

---

### TC-B2C62-APP-002 - Verificar que sin promoción el shelf muestra el PPUM con la unidad estándar [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-62.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Resultados de búsqueda
- {SKU_SIN_PROMO} no tiene ninguna promoción vigente

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_SIN_PROMO} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_SIN_PROMO} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_SIN_PROMO}.

**Resultado esperado**

Se muestra el PPUM según Figma, con la unidad estándar del SKU (kg, L, unidad, m, etc.).

**Resultado obtenido**

Esperado: el shelf muestra el PPUM con la unidad estándar del SKU. Obtenido: el shelf de {SKU_SIN_PROMO} (000000000000652899-UN, Salsa de tomates Toscana 200 g) muestra solo «$990» y ningún PPUM, mientras otros SKU de 200 g sí lo muestran (ej. «$6.000 x Kg»). B2C-62.spec.ts:98. Bug: B2C-1298.

**Observación**

Esperado: el shelf muestra el PPUM con la unidad estándar del SKU. Obtenido: el shelf de {SKU_SIN_PROMO} (000000000000652899-UN, Salsa de tomates Toscana 200 g) muestra solo «$990» y ningún PPUM, mientras otros SKU de 200 g sí lo muestran (ej. «$6.000 x Kg»). B2C-62.spec.ts:98. Bug: B2C-1298.

---

### TC-B2C62-APP-003 - Verificar que el PPUM se calcula sobre el precio efectivo mostrado [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-62.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Resultados de búsqueda
- {SKU_PRECIO_OFERTA} tiene un precio de oferta vigente

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_PRECIO_OFERTA} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_PRECIO_OFERTA} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_PRECIO_OFERTA}.

**Resultado esperado**

El PPUM se muestra al mismo nivel que el precio y corresponde al precio efectivo (oferta), no al regular.

**Observación**

iOS: pendiente (falta MOBILENEXT_API_KEY).

---

### TC-B2C62-APP-004 - Verificar que un producto pesable muestra el precio por kg y el PPUM [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-62.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Resultados de búsqueda

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_PESABLE} = 000000000000037972-KG

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_PESABLE} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_PESABLE}.

**Resultado esperado**

Se muestran el precio por kg y el PPUM; no se muestra equivalencia aproximada en unidades.

**Observación**

iOS: pendiente (falta MOBILENEXT_API_KEY).

---

### TC-B2C62-APP-005 - Verificar que con % de descuento se muestran etiqueta %, precio promo y "Antes" tachado [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-62.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Resultados de búsqueda
- {SKU_PROM_PCT_DESCUENTO} tiene una promo de % de descuento vigente

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_PROM_PCT_DESCUENTO} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_PROM_PCT_DESCUENTO} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_PROM_PCT_DESCUENTO}.

**Resultado esperado**

Se muestran la etiqueta con el %, el precio promocional destacado, "Antes" + precio anterior tachado y el PPUM sobre el precio promo.

**Resultado obtenido**

Ejecutado en Android: el shelf muestra la etiqueta con el %, el precio promocional, «Antes» tachado y el PPUM.

**Observación**

Ejecutado en Android: el shelf muestra la etiqueta con el %, el precio promocional, «Antes» tachado y el PPUM. iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 1 — app abierta con la barra de pestanas](<B2C-62 APP Evidencias/TC-B2C62-APP-005-android-p01-app-abierta-con-la-barra-de-pestanas.png>)

![Android · Paso 3 — resultados con el shelf del producto](<B2C-62 APP Evidencias/TC-B2C62-APP-005-android-p03-resultados-con-el-shelf-del-producto.png>)

![Android · Estado final](<B2C-62 APP Evidencias/TC-B2C62-APP-005-android.png>)

---

### TC-B2C62-APP-006 - Verificar que con precio fijo se muestra el % calculado aunque no sea redondo [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-62.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Resultados de búsqueda
- {SKU_PROM_PRECIO_FIJO} tiene una promo de precio fijo vigente

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_PROM_PRECIO_FIJO} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_PROM_PRECIO_FIJO} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_PROM_PRECIO_FIJO}.

**Resultado esperado**

Se muestra la etiqueta con el % calculado desde el precio fijo (puede ser no redondo, ej. 37%) con el mismo formato que % off.

**Observación**

iOS: pendiente (falta MOBILENEXT_API_KEY).

---

### TC-B2C62-APP-007 - Verificar que con promo NxM se muestran la etiqueta, el precio "$X c/u" y los PPUM [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-62.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Resultados de búsqueda
- {SKU_PROM_NxM} tiene una promo NxM vigente

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_PROM_NxM} = 000000000641229002-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_PROM_NxM} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_PROM_NxM}.

**Resultado esperado**

Se muestran el precio compuesto "3x2 a $X" destacado como precio principal, el precio unitario regular "$X c/u" como referencia, el PPUM promocional del total y el PPUM referencial unitario.

**Observación**

iOS: pendiente (falta MOBILENEXT_API_KEY).

---

### TC-B2C62-APP-008 - Verificar que con promo NxPrecio se muestran la etiqueta, el precio unitario y los PPUM [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-62.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Resultados de búsqueda
- {SKU_PROM_NxPRECIO} tiene una promo NxPrecio vigente

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_PROM_NxPRECIO} = 000000000000666200-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_PROM_NxPRECIO} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_PROM_NxPRECIO}.

**Resultado esperado**

Se muestran el precio compuesto "Lleva N por $X" destacado como precio principal, el precio unitario regular como referencia, el PPUM promocional total y el PPUM referencial unitario.

**Observación**

iOS: pendiente (falta MOBILENEXT_API_KEY).

---

### TC-B2C62-APP-009 - Verificar que con promo X% en X unidad se muestran la etiqueta, el precio y el PPUM [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-62.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Resultados de búsqueda
- {SKU_PROM_XPCT_XUNIDAD} tiene una promo X% en X unidad vigente

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_PROM_XPCT_XUNIDAD} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_PROM_XPCT_XUNIDAD} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_PROM_XPCT_XUNIDAD}.

**Resultado esperado**

Se muestran la etiqueta con la mecánica y su condición (ej. "50% dcto en 2da unidad"), el precio unitario regular destacado y su PPUM.

**Resultado obtenido**

Falta dato: {SKU_PROM_XPCT_XUNIDAD} está en TBD en el Excel de data. Cargar el valor y re-ejecutar.

**Observación**

Falta dato: {SKU_PROM_XPCT_XUNIDAD} está en TBD en el Excel de data. Cargar el valor y re-ejecutar.

---

### TC-B2C62-APP-010 - Verificar que una promo de membresía se muestra como precio fijo efectivo [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-62.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Resultados de búsqueda
- {SKU_PRECIO_MIEMBRO} tiene una promo de membresía activa

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_PRECIO_MIEMBRO} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_PRECIO_MIEMBRO}.

**Resultado esperado**

La promo de membresía se muestra como precio fijo (no como pill %) con el precio efectivo post-descuento.

**Observación**

iOS: pendiente (falta MOBILENEXT_API_KEY).

---

### TC-B2C62-APP-011 - Verificar que una promo de medio de pago se muestra como precio fijo efectivo [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-62.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Resultados de búsqueda
- {SKU_PRECIO_UNIPAY} tiene una promo Unipay activa

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_PRECIO_UNIPAY} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_PRECIO_UNIPAY} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_PRECIO_UNIPAY}.

**Resultado esperado**

La promo de medio de pago se muestra como precio fijo (no como pill %) con el precio efectivo post-descuento.

**Resultado obtenido**

Dato que no cumple la precondición: el SKU {SKU_PRECIO_UNIPAY} muestra un solo precio y no tiene promo de medio de pago vigente en el ambiente. Cargar un SKU con esa promo y re-ejecutar. Verificado en Android.

**Observación**

Dato que no cumple la precondición: el SKU {SKU_PRECIO_UNIPAY} muestra un solo precio y no tiene promo de medio de pago vigente en el ambiente. Cargar un SKU con esa promo y re-ejecutar. Verificado en Android.

**Evidencia**

![Android · Paso 1 — app abierta con la barra de pestanas](<B2C-62 APP Evidencias/TC-B2C62-APP-011-android-p01-app-abierta-con-la-barra-de-pestanas.png>)

![Android · Paso 3 — resultados con el shelf del producto](<B2C-62 APP Evidencias/TC-B2C62-APP-011-android-p03-resultados-con-el-shelf-del-producto.png>)

![Android · Estado final](<B2C-62 APP Evidencias/TC-B2C62-APP-011-android.png>)

---

### TC-B2C62-APP-012 - Verificar que con profundización la promo de membresía se calcula sobre el precio rebajado [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-62.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Resultados de búsqueda
- {SKU_OFERTA_MEMBRESIA} tiene promo de catálogo y membresía con profundización

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_OFERTA_MEMBRESIA} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_OFERTA_MEMBRESIA} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_OFERTA_MEMBRESIA}.

**Resultado esperado**

El precio de membresía corresponde al descuento aplicado sobre el precio ya rebajado por la promo de catálogo.

**Resultado obtenido**

Dato que no cumple la precondición: el SKU {SKU_OFERTA_MEMBRESIA} muestra la oferta pero no el precio de membresía en el ambiente. Cargar un SKU con oferta y membresía y re-ejecutar. Verificado en Android.

**Observación**

Dato que no cumple la precondición: el SKU {SKU_OFERTA_MEMBRESIA} muestra la oferta pero no el precio de membresía en el ambiente. Cargar un SKU con oferta y membresía y re-ejecutar. Verificado en Android.

**Evidencia**

![Android · Paso 1 — app abierta con la barra de pestanas](<B2C-62 APP Evidencias/TC-B2C62-APP-012-android-p01-app-abierta-con-la-barra-de-pestanas.png>)

![Android · Paso 3 — resultados con el shelf del producto](<B2C-62 APP Evidencias/TC-B2C62-APP-012-android-p03-resultados-con-el-shelf-del-producto.png>)

![Android · Estado final](<B2C-62 APP Evidencias/TC-B2C62-APP-012-android.png>)

---

### TC-B2C62-APP-013 - Verificar que sin profundización el beneficio adicional se calcula sobre el precio base [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-62.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Resultados de búsqueda
- {SKU_SIN_PROFUNDIZACION} tiene dos promos combinadas sin profundización

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_SIN_PROFUNDIZACION} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_SIN_PROFUNDIZACION} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_SIN_PROFUNDIZACION}.

**Resultado esperado**

El beneficio adicional se calcula sobre el precio base, no sobre el precio rebajado.

**Resultado obtenido**

Falta dato: {SKU_SIN_PROFUNDIZACION} está en TBD en el Excel de data. Cargar el valor y re-ejecutar.

**Observación**

Falta dato: {SKU_SIN_PROFUNDIZACION} está en TBD en el Excel de data. Cargar el valor y re-ejecutar.

---

### TC-B2C62-APP-014 - Verificar que membresía tiene prioridad sobre medio de pago y entre 2 MdP gana el mejor descuento [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-62.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Resultados de búsqueda
- {SKU_DOS_MDP} tiene promo de membresía y dos promos de medio de pago vigentes

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_DOS_MDP} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_DOS_MDP} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_DOS_MDP}.

**Resultado esperado**

Se muestra la promo de membresía por sobre las de medio de pago y, entre dos medios de pago, la de mayor descuento.

**Resultado obtenido**

Falta dato: {SKU_DOS_MDP} está en TBD en el Excel de data. Cargar el valor y re-ejecutar.

**Observación**

Falta dato: {SKU_DOS_MDP} está en TBD en el Excel de data. Cargar el valor y re-ejecutar.

---

### TC-B2C62-APP-015 - Verificar que una promo se activa automáticamente al iniciar su vigencia [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-62.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Resultados de búsqueda
- {SKU_PROM_PROGRAMADA} tiene una promo que inicia en {FECHA_INICIO_VIGENCIA}

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_PROM_PROGRAMADA} = TBD
- {FECHA_INICIO_VIGENCIA} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_PROM_PROGRAMADA} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_PROM_PROGRAMADA}.
4. El usuario vuelve a buscar {SKU_PROM_PROGRAMADA} después de {FECHA_INICIO_VIGENCIA}.
5. El sistema muestra el shelf con la promo vigente.

**Resultado esperado**

Antes de {FECHA_INICIO_VIGENCIA} se muestra el precio normal y después se muestra la promo, sin deploy.

**Resultado obtenido**

Falta dato: {SKU_PROM_PROGRAMADA} está en TBD en el Excel de data. Cargar el valor y re-ejecutar.

**Observación**

Falta dato: {SKU_PROM_PROGRAMADA} está en TBD en el Excel de data. Cargar el valor y re-ejecutar.

---

### TC-B2C62-APP-016 - Verificar que una promo deja de mostrarse al terminar su vigencia [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-62.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Resultados de búsqueda
- {SKU_PROM_PROGRAMADA} tiene una promo que termina en {FECHA_FIN_VIGENCIA}

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_PROM_PROGRAMADA} = TBD
- {FECHA_FIN_VIGENCIA} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_PROM_PROGRAMADA} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_PROM_PROGRAMADA}.
4. El usuario vuelve a buscar {SKU_PROM_PROGRAMADA} después de {FECHA_FIN_VIGENCIA}.
5. El sistema muestra el shelf con el precio normal.

**Resultado esperado**

Hasta {FECHA_FIN_VIGENCIA} se muestra la promo y después el shelf vuelve al precio normal, sin deploy.

**Resultado obtenido**

Falta dato: {SKU_PROM_PROGRAMADA} está en TBD en el Excel de data. Cargar el valor y re-ejecutar.

**Observación**

Falta dato: {SKU_PROM_PROGRAMADA} está en TBD en el Excel de data. Cargar el valor y re-ejecutar.

---

### TC-B2C62-APP-017 - Verificar que los shelves no muestran precios $0 ni promos duplicadas o incompletas [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-62.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: PLP

**Data utilizada**

- {APP_BUILD} = TBD
- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.
2. El sistema carga la PLP.
3. El usuario recorre todos los shelves del listado.

**Resultado esperado**

Ningún shelf muestra precio $0, promos duplicadas, etiquetas incompletas ni información inconsistente.

**Observación**

iOS: pendiente (falta MOBILENEXT_API_KEY).

---

### TC-B2C62-APP-018 - Verificar que sin promo el shelf muestra un solo precio [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-62.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Resultados de búsqueda
- {SKU_SIN_PROMO} no tiene ninguna promoción vigente

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_SIN_PROMO} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_SIN_PROMO} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_SIN_PROMO}.

**Resultado esperado**

Se muestra un único precio (lista) en color estándar.

**Observación**

iOS: pendiente (falta MOBILENEXT_API_KEY).

---

### TC-B2C62-APP-019 - Verificar que con oferta el shelf muestra oferta destacada y lista tachado [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-62.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Resultados de búsqueda
- {SKU_PRECIO_OFERTA} tiene un precio de oferta vigente

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_PRECIO_OFERTA} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_PRECIO_OFERTA} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_PRECIO_OFERTA}.

**Resultado esperado**

Se muestran 2 precios: el de oferta destacado en color de acento con etiqueta de % de descuento y el precio lista tachado.

**Observación**

iOS: pendiente (falta MOBILENEXT_API_KEY).

---

### TC-B2C62-APP-020 - Verificar que con oferta y membresía el shelf muestra membresía como 1er precio y 3 precios como máximo [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-62.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Resultados de búsqueda
- {SKU_OFERTA_MEMBRESIA} tiene oferta vigente y precio de membresía

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_OFERTA_MEMBRESIA} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_OFERTA_MEMBRESIA} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_OFERTA_MEMBRESIA}.

**Resultado esperado**

Se muestran 3 precios en este orden: membresía con su label (1er precio), oferta destacado con etiqueta de % de descuento y lista tachado; nunca más de 3.

**Resultado obtenido**

Dato que no cumple la precondición: el SKU {SKU_OFERTA_MEMBRESIA} muestra la oferta pero no el precio de membresía en el ambiente. Cargar un SKU con oferta y membresía y re-ejecutar. Verificado en Android.

**Observación**

Dato que no cumple la precondición: el SKU {SKU_OFERTA_MEMBRESIA} muestra la oferta pero no el precio de membresía en el ambiente. Cargar un SKU con oferta y membresía y re-ejecutar. Verificado en Android.

**Evidencia**

![Android · Paso 1 — app abierta con la barra de pestanas](<B2C-62 APP Evidencias/TC-B2C62-APP-020-android-p01-app-abierta-con-la-barra-de-pestanas.png>)

![Android · Paso 3 — resultados con el shelf del producto](<B2C-62 APP Evidencias/TC-B2C62-APP-020-android-p03-resultados-con-el-shelf-del-producto.png>)

![Android · Estado final](<B2C-62 APP Evidencias/TC-B2C62-APP-020-android.png>)

---

### TC-B2C62-APP-021 - Verificar que con NxM o NxPrecio el precio compuesto se muestra como precio destacado [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-62.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Resultados de búsqueda
- {SKU_PROM_NxPRECIO} tiene una promo NxPrecio vigente

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_PROM_NxPRECIO} = 000000000000666200-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_PROM_NxPRECIO} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_PROM_NxPRECIO}.

**Resultado esperado**

El precio compuesto (ej. "Lleva 2 por $X") se muestra destacado y el precio lista queda como referencia, sin superar 3 precios.

**Observación**

iOS: pendiente (falta MOBILENEXT_API_KEY).

---

### TC-B2C62-APP-022 - Verificar que con Membresía, Unipay y Banco Estado a la vez el 1er precio es Membresía [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-62.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Resultados de búsqueda
- PriceDisplayPriority = MEMBERSHIP_FIRST
- {SKU_TRES_PRECIOS} tiene precio Membresía, Unipay y Banco Estado vigentes a la vez

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_TRES_PRECIOS} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_TRES_PRECIOS} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_TRES_PRECIOS}.

**Resultado esperado**

El primer precio corresponde a Membresía, según PriceDisplayPriority = MEMBERSHIP_FIRST (por defecto).

**Resultado obtenido**

Dato que no cumple la precondición: el SKU {SKU_TRES_PRECIOS} no muestra precio de Membresía, Unipay ni Banco Estado en el ambiente. Cargar un SKU con esas tres promos y re-ejecutar. Verificado en Android.

**Observación**

Dato que no cumple la precondición: el SKU {SKU_TRES_PRECIOS} no muestra precio de Membresía, Unipay ni Banco Estado en el ambiente. Cargar un SKU con esas tres promos y re-ejecutar. Verificado en Android.

**Evidencia**

![Android · Paso 1 — app abierta con la barra de pestanas](<B2C-62 APP Evidencias/TC-B2C62-APP-022-android-p01-app-abierta-con-la-barra-de-pestanas.png>)

![Android · Paso 3 — resultados con el shelf del producto](<B2C-62 APP Evidencias/TC-B2C62-APP-022-android-p03-resultados-con-el-shelf-del-producto.png>)

![Android · Estado final](<B2C-62 APP Evidencias/TC-B2C62-APP-022-android.png>)

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "devices": {
   "Android": "dispositivo por ADB"
  },
  "environment": "App Unimarc v1.0.1 (DEV)",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-62 APP",
  "tc_file": "Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-62 APP Test Cases.xlsx",
  "title": "B2C-62 APP - Evidencias QA (Android)",
  "updated_at": "2026-10-29"
 },
 "history": {
  "2026-10-22": [
   "TC-B2C62-APP-001",
   "TC-B2C62-APP-002",
   "TC-B2C62-APP-003",
   "TC-B2C62-APP-004",
   "TC-B2C62-APP-005",
   "TC-B2C62-APP-006",
   "TC-B2C62-APP-007",
   "TC-B2C62-APP-008",
   "TC-B2C62-APP-009",
   "TC-B2C62-APP-010",
   "TC-B2C62-APP-011",
   "TC-B2C62-APP-012",
   "TC-B2C62-APP-013",
   "TC-B2C62-APP-014",
   "TC-B2C62-APP-015",
   "TC-B2C62-APP-016",
   "TC-B2C62-APP-017",
   "TC-B2C62-APP-018",
   "TC-B2C62-APP-019",
   "TC-B2C62-APP-020",
   "TC-B2C62-APP-021",
   "TC-B2C62-APP-022"
  ],
  "2026-10-29": [
   "TC-B2C62-APP-001",
   "TC-B2C62-APP-002",
   "TC-B2C62-APP-003",
   "TC-B2C62-APP-004",
   "TC-B2C62-APP-005",
   "TC-B2C62-APP-006",
   "TC-B2C62-APP-007",
   "TC-B2C62-APP-008",
   "TC-B2C62-APP-009",
   "TC-B2C62-APP-010",
   "TC-B2C62-APP-011",
   "TC-B2C62-APP-012",
   "TC-B2C62-APP-013",
   "TC-B2C62-APP-014",
   "TC-B2C62-APP-015",
   "TC-B2C62-APP-016",
   "TC-B2C62-APP-017",
   "TC-B2C62-APP-018",
   "TC-B2C62-APP-019",
   "TC-B2C62-APP-020",
   "TC-B2C62-APP-021",
   "TC-B2C62-APP-022"
  ]
 },
 "results": [
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra el precio normal formateado en CLP (ej. $1.990), sin tachado ni badges.",
   "form_factor": "app",
   "id": "TC-B2C62-APP-001",
   "name": "Verificar que sin promoción el shelf muestra el precio normal en CLP [App] [Guest]",
   "observation": "iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- {SKU_SIN_PROMO} no tiene ninguna promoción vigente",
   "spec": "tests-app/B2C-62.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_SIN_PROMO} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_SIN_PROMO}.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_SIN_PROMO} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra el PPUM según Figma, con la unidad estándar del SKU (kg, L, unidad, m, etc.).",
   "form_factor": "app",
   "id": "TC-B2C62-APP-002",
   "name": "Verificar que sin promoción el shelf muestra el PPUM con la unidad estándar [App] [Guest]",
   "observation": "Esperado: el shelf muestra el PPUM con la unidad estándar del SKU. Obtenido: el shelf de {SKU_SIN_PROMO} (000000000000652899-UN, Salsa de tomates Toscana 200 g) muestra solo «$990» y ningún PPUM, mientras otros SKU de 200 g sí lo muestran (ej. «$6.000 x Kg»). B2C-62.spec.ts:98. Bug: B2C-1298.",
   "observed": "Esperado: el shelf muestra el PPUM con la unidad estándar del SKU. Obtenido: el shelf de {SKU_SIN_PROMO} (000000000000652899-UN, Salsa de tomates Toscana 200 g) muestra solo «$990» y ningún PPUM, mientras otros SKU de 200 g sí lo muestran (ej. «$6.000 x Kg»). B2C-62.spec.ts:98. Bug: B2C-1298.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- {SKU_SIN_PROMO} no tiene ninguna promoción vigente",
   "spec": "tests-app/B2C-62.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_SIN_PROMO} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_SIN_PROMO}.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_SIN_PROMO} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El PPUM se muestra al mismo nivel que el precio y corresponde al precio efectivo (oferta), no al regular.",
   "form_factor": "app",
   "id": "TC-B2C62-APP-003",
   "name": "Verificar que el PPUM se calcula sobre el precio efectivo mostrado [App] [Guest]",
   "observation": "iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- {SKU_PRECIO_OFERTA} tiene un precio de oferta vigente",
   "spec": "tests-app/B2C-62.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_PRECIO_OFERTA} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_PRECIO_OFERTA}.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_PRECIO_OFERTA} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestran el precio por kg y el PPUM; no se muestra equivalencia aproximada en unidades.",
   "form_factor": "app",
   "id": "TC-B2C62-APP-004",
   "name": "Verificar que un producto pesable muestra el precio por kg y el PPUM [App] [Guest]",
   "observation": "iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Resultados de búsqueda",
   "spec": "tests-app/B2C-62.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_PESABLE} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_PESABLE}.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_PESABLE} = 000000000000037972-KG"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestran la etiqueta con el %, el precio promocional destacado, \"Antes\" + precio anterior tachado y el PPUM sobre el precio promo.",
   "form_factor": "app",
   "id": "TC-B2C62-APP-005",
   "name": "Verificar que con % de descuento se muestran etiqueta %, precio promo y \"Antes\" tachado [App] [Guest]",
   "observation": "Ejecutado en Android: el shelf muestra la etiqueta con el %, el precio promocional, «Antes» tachado y el PPUM. iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Ejecutado en Android: el shelf muestra la etiqueta con el %, el precio promocional, «Antes» tachado y el PPUM.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- {SKU_PROM_PCT_DESCUENTO} tiene una promo de % de descuento vigente",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — app abierta con la barra de pestanas",
     "file": "TC-B2C62-APP-005-android-p01-app-abierta-con-la-barra-de-pestanas.png"
    },
    {
     "caption": "Android · Paso 3 — resultados con el shelf del producto",
     "file": "TC-B2C62-APP-005-android-p03-resultados-con-el-shelf-del-producto.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C62-APP-005-android.png"
    }
   ],
   "spec": "tests-app/B2C-62.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_PROM_PCT_DESCUENTO} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_PROM_PCT_DESCUENTO}.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_PROM_PCT_DESCUENTO} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra la etiqueta con el % calculado desde el precio fijo (puede ser no redondo, ej. 37%) con el mismo formato que % off.",
   "form_factor": "app",
   "id": "TC-B2C62-APP-006",
   "name": "Verificar que con precio fijo se muestra el % calculado aunque no sea redondo [App] [Guest]",
   "observation": "iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- {SKU_PROM_PRECIO_FIJO} tiene una promo de precio fijo vigente",
   "spec": "tests-app/B2C-62.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_PROM_PRECIO_FIJO} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_PROM_PRECIO_FIJO}.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_PROM_PRECIO_FIJO} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestran el precio compuesto \"3x2 a $X\" destacado como precio principal, el precio unitario regular \"$X c/u\" como referencia, el PPUM promocional del total y el PPUM referencial unitario.",
   "form_factor": "app",
   "id": "TC-B2C62-APP-007",
   "name": "Verificar que con promo NxM se muestran la etiqueta, el precio \"$X c/u\" y los PPUM [App] [Guest]",
   "observation": "iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- {SKU_PROM_NxM} tiene una promo NxM vigente",
   "spec": "tests-app/B2C-62.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_PROM_NxM} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_PROM_NxM}.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_PROM_NxM} = 000000000641229002-UN"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestran el precio compuesto \"Lleva N por $X\" destacado como precio principal, el precio unitario regular como referencia, el PPUM promocional total y el PPUM referencial unitario.",
   "form_factor": "app",
   "id": "TC-B2C62-APP-008",
   "name": "Verificar que con promo NxPrecio se muestran la etiqueta, el precio unitario y los PPUM [App] [Guest]",
   "observation": "iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- {SKU_PROM_NxPRECIO} tiene una promo NxPrecio vigente",
   "spec": "tests-app/B2C-62.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_PROM_NxPRECIO} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_PROM_NxPRECIO}.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_PROM_NxPRECIO} = 000000000000666200-UN"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestran la etiqueta con la mecánica y su condición (ej. \"50% dcto en 2da unidad\"), el precio unitario regular destacado y su PPUM.",
   "form_factor": "app",
   "id": "TC-B2C62-APP-009",
   "name": "Verificar que con promo X% en X unidad se muestran la etiqueta, el precio y el PPUM [App] [Guest]",
   "observation": "Falta dato: {SKU_PROM_XPCT_XUNIDAD} está en TBD en el Excel de data. Cargar el valor y re-ejecutar.",
   "observed": "Falta dato: {SKU_PROM_XPCT_XUNIDAD} está en TBD en el Excel de data. Cargar el valor y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- {SKU_PROM_XPCT_XUNIDAD} tiene una promo X% en X unidad vigente",
   "spec": "tests-app/B2C-62.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_PROM_XPCT_XUNIDAD} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_PROM_XPCT_XUNIDAD}.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_PROM_XPCT_XUNIDAD} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "La promo de membresía se muestra como precio fijo (no como pill %) con el precio efectivo post-descuento.",
   "form_factor": "app",
   "id": "TC-B2C62-APP-010",
   "name": "Verificar que una promo de membresía se muestra como precio fijo efectivo [App] [Guest]",
   "observation": "iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- {SKU_PRECIO_MIEMBRO} tiene una promo de membresía activa",
   "spec": "tests-app/B2C-62.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_PRECIO_MIEMBRO} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_PRECIO_MIEMBRO}.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "La promo de medio de pago se muestra como precio fijo (no como pill %) con el precio efectivo post-descuento.",
   "form_factor": "app",
   "id": "TC-B2C62-APP-011",
   "name": "Verificar que una promo de medio de pago se muestra como precio fijo efectivo [App] [Guest]",
   "observation": "Dato que no cumple la precondición: el SKU {SKU_PRECIO_UNIPAY} muestra un solo precio y no tiene promo de medio de pago vigente en el ambiente. Cargar un SKU con esa promo y re-ejecutar. Verificado en Android.",
   "observed": "Dato que no cumple la precondición: el SKU {SKU_PRECIO_UNIPAY} muestra un solo precio y no tiene promo de medio de pago vigente en el ambiente. Cargar un SKU con esa promo y re-ejecutar. Verificado en Android.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- {SKU_PRECIO_UNIPAY} tiene una promo Unipay activa",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — app abierta con la barra de pestanas",
     "file": "TC-B2C62-APP-011-android-p01-app-abierta-con-la-barra-de-pestanas.png"
    },
    {
     "caption": "Android · Paso 3 — resultados con el shelf del producto",
     "file": "TC-B2C62-APP-011-android-p03-resultados-con-el-shelf-del-producto.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C62-APP-011-android.png"
    }
   ],
   "spec": "tests-app/B2C-62.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_PRECIO_UNIPAY} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_PRECIO_UNIPAY}.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_PRECIO_UNIPAY} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El precio de membresía corresponde al descuento aplicado sobre el precio ya rebajado por la promo de catálogo.",
   "form_factor": "app",
   "id": "TC-B2C62-APP-012",
   "name": "Verificar que con profundización la promo de membresía se calcula sobre el precio rebajado [App] [Guest]",
   "observation": "Dato que no cumple la precondición: el SKU {SKU_OFERTA_MEMBRESIA} muestra la oferta pero no el precio de membresía en el ambiente. Cargar un SKU con oferta y membresía y re-ejecutar. Verificado en Android.",
   "observed": "Dato que no cumple la precondición: el SKU {SKU_OFERTA_MEMBRESIA} muestra la oferta pero no el precio de membresía en el ambiente. Cargar un SKU con oferta y membresía y re-ejecutar. Verificado en Android.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- {SKU_OFERTA_MEMBRESIA} tiene promo de catálogo y membresía con profundización",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — app abierta con la barra de pestanas",
     "file": "TC-B2C62-APP-012-android-p01-app-abierta-con-la-barra-de-pestanas.png"
    },
    {
     "caption": "Android · Paso 3 — resultados con el shelf del producto",
     "file": "TC-B2C62-APP-012-android-p03-resultados-con-el-shelf-del-producto.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C62-APP-012-android.png"
    }
   ],
   "spec": "tests-app/B2C-62.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_OFERTA_MEMBRESIA} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_OFERTA_MEMBRESIA}.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_OFERTA_MEMBRESIA} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El beneficio adicional se calcula sobre el precio base, no sobre el precio rebajado.",
   "form_factor": "app",
   "id": "TC-B2C62-APP-013",
   "name": "Verificar que sin profundización el beneficio adicional se calcula sobre el precio base [App] [Guest]",
   "observation": "Falta dato: {SKU_SIN_PROFUNDIZACION} está en TBD en el Excel de data. Cargar el valor y re-ejecutar.",
   "observed": "Falta dato: {SKU_SIN_PROFUNDIZACION} está en TBD en el Excel de data. Cargar el valor y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- {SKU_SIN_PROFUNDIZACION} tiene dos promos combinadas sin profundización",
   "spec": "tests-app/B2C-62.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_SIN_PROFUNDIZACION} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_SIN_PROFUNDIZACION}.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_SIN_PROFUNDIZACION} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra la promo de membresía por sobre las de medio de pago y, entre dos medios de pago, la de mayor descuento.",
   "form_factor": "app",
   "id": "TC-B2C62-APP-014",
   "name": "Verificar que membresía tiene prioridad sobre medio de pago y entre 2 MdP gana el mejor descuento [App] [Guest]",
   "observation": "Falta dato: {SKU_DOS_MDP} está en TBD en el Excel de data. Cargar el valor y re-ejecutar.",
   "observed": "Falta dato: {SKU_DOS_MDP} está en TBD en el Excel de data. Cargar el valor y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- {SKU_DOS_MDP} tiene promo de membresía y dos promos de medio de pago vigentes",
   "spec": "tests-app/B2C-62.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_DOS_MDP} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_DOS_MDP}.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_DOS_MDP} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Antes de {FECHA_INICIO_VIGENCIA} se muestra el precio normal y después se muestra la promo, sin deploy.",
   "form_factor": "app",
   "id": "TC-B2C62-APP-015",
   "name": "Verificar que una promo se activa automáticamente al iniciar su vigencia [App] [Guest]",
   "observation": "Falta dato: {SKU_PROM_PROGRAMADA} está en TBD en el Excel de data. Cargar el valor y re-ejecutar.",
   "observed": "Falta dato: {SKU_PROM_PROGRAMADA} está en TBD en el Excel de data. Cargar el valor y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- {SKU_PROM_PROGRAMADA} tiene una promo que inicia en {FECHA_INICIO_VIGENCIA}",
   "spec": "tests-app/B2C-62.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_PROM_PROGRAMADA} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_PROM_PROGRAMADA}.\n4. El usuario vuelve a buscar {SKU_PROM_PROGRAMADA} después de {FECHA_INICIO_VIGENCIA}.\n5. El sistema muestra el shelf con la promo vigente.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_PROM_PROGRAMADA} = TBD\n- {FECHA_INICIO_VIGENCIA} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Hasta {FECHA_FIN_VIGENCIA} se muestra la promo y después el shelf vuelve al precio normal, sin deploy.",
   "form_factor": "app",
   "id": "TC-B2C62-APP-016",
   "name": "Verificar que una promo deja de mostrarse al terminar su vigencia [App] [Guest]",
   "observation": "Falta dato: {SKU_PROM_PROGRAMADA} está en TBD en el Excel de data. Cargar el valor y re-ejecutar.",
   "observed": "Falta dato: {SKU_PROM_PROGRAMADA} está en TBD en el Excel de data. Cargar el valor y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- {SKU_PROM_PROGRAMADA} tiene una promo que termina en {FECHA_FIN_VIGENCIA}",
   "spec": "tests-app/B2C-62.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_PROM_PROGRAMADA} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_PROM_PROGRAMADA}.\n4. El usuario vuelve a buscar {SKU_PROM_PROGRAMADA} después de {FECHA_FIN_VIGENCIA}.\n5. El sistema muestra el shelf con el precio normal.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_PROM_PROGRAMADA} = TBD\n- {FECHA_FIN_VIGENCIA} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Ningún shelf muestra precio $0, promos duplicadas, etiquetas incompletas ni información inconsistente.",
   "form_factor": "app",
   "id": "TC-B2C62-APP-017",
   "name": "Verificar que los shelves no muestran precios $0 ni promos duplicadas o incompletas [App] [Guest]",
   "observation": "iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: PLP",
   "spec": "tests-app/B2C-62.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.\n2. El sistema carga la PLP.\n3. El usuario recorre todos los shelves del listado.",
   "test_data": "- {APP_BUILD} = TBD\n- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra un único precio (lista) en color estándar.",
   "form_factor": "app",
   "id": "TC-B2C62-APP-018",
   "name": "Verificar que sin promo el shelf muestra un solo precio [App] [Guest]",
   "observation": "iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- {SKU_SIN_PROMO} no tiene ninguna promoción vigente",
   "spec": "tests-app/B2C-62.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_SIN_PROMO} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_SIN_PROMO}.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_SIN_PROMO} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestran 2 precios: el de oferta destacado en color de acento con etiqueta de % de descuento y el precio lista tachado.",
   "form_factor": "app",
   "id": "TC-B2C62-APP-019",
   "name": "Verificar que con oferta el shelf muestra oferta destacada y lista tachado [App] [Guest]",
   "observation": "iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- {SKU_PRECIO_OFERTA} tiene un precio de oferta vigente",
   "spec": "tests-app/B2C-62.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_PRECIO_OFERTA} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_PRECIO_OFERTA}.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_PRECIO_OFERTA} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestran 3 precios en este orden: membresía con su label (1er precio), oferta destacado con etiqueta de % de descuento y lista tachado; nunca más de 3.",
   "form_factor": "app",
   "id": "TC-B2C62-APP-020",
   "name": "Verificar que con oferta y membresía el shelf muestra membresía como 1er precio y 3 precios como máximo [App] [Guest]",
   "observation": "Dato que no cumple la precondición: el SKU {SKU_OFERTA_MEMBRESIA} muestra la oferta pero no el precio de membresía en el ambiente. Cargar un SKU con oferta y membresía y re-ejecutar. Verificado en Android.",
   "observed": "Dato que no cumple la precondición: el SKU {SKU_OFERTA_MEMBRESIA} muestra la oferta pero no el precio de membresía en el ambiente. Cargar un SKU con oferta y membresía y re-ejecutar. Verificado en Android.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- {SKU_OFERTA_MEMBRESIA} tiene oferta vigente y precio de membresía",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — app abierta con la barra de pestanas",
     "file": "TC-B2C62-APP-020-android-p01-app-abierta-con-la-barra-de-pestanas.png"
    },
    {
     "caption": "Android · Paso 3 — resultados con el shelf del producto",
     "file": "TC-B2C62-APP-020-android-p03-resultados-con-el-shelf-del-producto.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C62-APP-020-android.png"
    }
   ],
   "spec": "tests-app/B2C-62.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_OFERTA_MEMBRESIA} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_OFERTA_MEMBRESIA}.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_OFERTA_MEMBRESIA} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El precio compuesto (ej. \"Lleva 2 por $X\") se muestra destacado y el precio lista queda como referencia, sin superar 3 precios.",
   "form_factor": "app",
   "id": "TC-B2C62-APP-021",
   "name": "Verificar que con NxM o NxPrecio el precio compuesto se muestra como precio destacado [App] [Guest]",
   "observation": "iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- {SKU_PROM_NxPRECIO} tiene una promo NxPrecio vigente",
   "spec": "tests-app/B2C-62.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_PROM_NxPRECIO} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_PROM_NxPRECIO}.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_PROM_NxPRECIO} = 000000000000666200-UN"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El primer precio corresponde a Membresía, según PriceDisplayPriority = MEMBERSHIP_FIRST (por defecto).",
   "form_factor": "app",
   "id": "TC-B2C62-APP-022",
   "name": "Verificar que con Membresía, Unipay y Banco Estado a la vez el 1er precio es Membresía [App] [Guest]",
   "observation": "Dato que no cumple la precondición: el SKU {SKU_TRES_PRECIOS} no muestra precio de Membresía, Unipay ni Banco Estado en el ambiente. Cargar un SKU con esas tres promos y re-ejecutar. Verificado en Android.",
   "observed": "Dato que no cumple la precondición: el SKU {SKU_TRES_PRECIOS} no muestra precio de Membresía, Unipay ni Banco Estado en el ambiente. Cargar un SKU con esas tres promos y re-ejecutar. Verificado en Android.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- PriceDisplayPriority = MEMBERSHIP_FIRST\n- {SKU_TRES_PRECIOS} tiene precio Membresía, Unipay y Banco Estado vigentes a la vez",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — app abierta con la barra de pestanas",
     "file": "TC-B2C62-APP-022-android-p01-app-abierta-con-la-barra-de-pestanas.png"
    },
    {
     "caption": "Android · Paso 3 — resultados con el shelf del producto",
     "file": "TC-B2C62-APP-022-android-p03-resultados-con-el-shelf-del-producto.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C62-APP-022-android.png"
    }
   ],
   "spec": "tests-app/B2C-62.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_TRES_PRECIOS} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_TRES_PRECIOS}.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_TRES_PRECIOS} = TBD"
  }
 ]
}
-->
