# B2C-51 APP

| Campo | Valor |
|---|---|
| Suite | B2C-51 |
| Última actualización | 2026-10-27 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | App Unimarc v1.0.1 (DEV) |
| Navegador Desktop | chromium |
| Navegador Mobile | chromium |
| Dispositivo Android | Pixel 6 · Android 14 (emulador) |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-51 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Rechazado | 4 |
| Aprobado | 3 |
| Bloqueado Data | 2 |
| **Total** | **9** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-27 | 4 | TC-B2C51-APP-005, TC-B2C51-APP-008, TC-B2C51-APP-009, TC-B2C51-APP-010 |
| 2026-10-26 | 3 | TC-B2C51-APP-001, TC-B2C51-APP-002, TC-B2C51-APP-015 |
| 2026-10-23 | 2 | TC-B2C51-M-002, TC-B2C51-M-009 |

## Detalle por caso de prueba

### TC-B2C51-M-002 - Verificar que con oferta activa se muestran "Antes" tachado, badge % y precio oferta [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-23 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-51.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: PDP
- {SKU_PRECIO_OFERTA} tiene un precio de oferta vigente

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {SKU_PRECIO_OFERTA} = TBD

**Pasos ejecutados**

1. El usuario ingresa a la PDP de {SKU_PRECIO_OFERTA} ({BASE_URL}product/{SKU_PRECIO_OFERTA}).
2. El sistema carga la PDP de {SKU_PRECIO_OFERTA}.

**Resultado esperado**

Se muestran "Antes" + precio lista tachado y atenuado, el badge "XX%" en amarillo con el % = (lista − oferta) / lista × 100 redondeado al entero, el precio oferta en color de acento y el PPUM recalculado sobre el precio oferta (si aplica).

**Resultado obtenido**

Obtenido: en la PDP Mobile el precio lista tachado de la oferta no va precedido de «Antes». Bug: B2C-1162. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir corridas de QA, no por corrección).

**Observación**

Obtenido: en la PDP Mobile el precio lista tachado de la oferta no va precedido de «Antes». Bug: B2C-1162. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir corridas de QA, no por corrección).

**Evidencia**

![Paso 2 — bloque de precios con oferta](<B2C-51 Evidencias/TC-B2C51-M-002-p02-bloque-de-precios-con-oferta.png>)

---

### TC-B2C51-M-009 - Verificar que oferta + membresía muestra badge Membresía, oferta y lista tachado [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-23 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-51.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: PDP
- Sesión iniciada con la cuenta {COMPRADOR_MEMBRESIA_USER}
- {SKU_OFERTA_MEMBRESIA} tiene oferta vigente y precio de membresía

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {SKU_OFERTA_MEMBRESIA} = TBD
- {COMPRADOR_MEMBRESIA_USER} = 10.101.010-4
- {COMPRADOR_MEMBRESIA_PASSWORD} = Avatar123.

**Pasos ejecutados**

1. El usuario ingresa a la PDP de {SKU_OFERTA_MEMBRESIA} ({BASE_URL}product/{SKU_OFERTA_MEMBRESIA}).
2. El sistema carga la PDP de {SKU_OFERTA_MEMBRESIA}.
3. El usuario compara el orden de los precios con la shelf del mismo producto en una PLP o SRP.

**Resultado esperado**

Precio 1: badge Membresía · Precio 2: oferta en acento · Precio 3: lista tachado; no hay más de 3 precios y el orden coincide con el de la shelf del mismo producto en la PLP (B2C-62).

**Resultado obtenido**

Obtenido: en la PDP Mobile con oferta + membresía el orden de los precios es membresía > oferta > lista tachado; el esperado es oferta > lista tachado > membresía. Bug: B2C-1162 (hoy cambia el orden respecto de lo reportado: el de membresía aparece primero). Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir corridas de QA, no por corrección).

**Observación**

Obtenido: en la PDP Mobile con oferta + membresía el orden de los precios es membresía > oferta > lista tachado; el esperado es oferta > lista tachado > membresía. Bug: B2C-1162 (hoy cambia el orden respecto de lo reportado: el de membresía aparece primero). Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir corridas de QA, no por corrección).

**Evidencia**

![Paso 2 — bloque de precios oferta membresia](<B2C-51 Evidencias/TC-B2C51-M-009-p02-bloque-de-precios-oferta-membresia.png>)

---

### TC-B2C51-APP-001 - Verificar que sin promoción el bloque de precios muestra solo el precio lista sin tachar

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- 000000000000652899-UN no tiene ninguna promoción activa vigente

**Data utilizada**

- v1.0.1 = TBD
- 000000000000652899-UN = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1, busca 000000000000652899-UN y abre su PDP.
2. El sistema carga la PDP de 000000000000652899-UN.

**Resultado esperado**

Se muestra solo el precio lista destacado, en color estándar y sin tachado, y el PPUM debajo si aplica.

**Resultado obtenido**

PDP de {SKU_SIN_PROMO} = 652899 (Salsa Carozzi bolognesa 200 g): un único precio '$990', sin tachar, sin 'Antes', sin badge ni precio de promo (no trae PPUM). La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C51-APP-002 - Verificar que con oferta activa se muestran "Antes" tachado, badge % y precio oferta

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- 000000000000178089-UN tiene un precio de oferta vigente

**Data utilizada**

- v1.0.1 = TBD
- 000000000000178089-UN = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1, busca 000000000000178089-UN y abre su PDP.
2. El sistema carga la PDP de 000000000000178089-UN.

**Resultado esperado**

Se muestran "Antes" + precio lista tachado y atenuado, el badge "XX%" en amarillo con el % = (lista − oferta) / lista × 100 redondeado al entero, el precio oferta en color de acento y el PPUM recalculado sobre el precio oferta (si aplica).

**Resultado obtenido**

PDP de {SKU_PRECIO_OFERTA} = 178089 (Mermelada Watt's 0% mora 200 g): badge '23%' con fondo amarillo, '$1.200' destacado, PPUM '($6.000 x Kg)' recalculado sobre la oferta (1.200 / 0,2 kg) y 'Antes: $1.550' con el monto tachado; 23 = (1.550 − 1.200) / 1.550 × 100 redondeado. El precio oferta se ve en el mismo color oscuro que un precio normal (el CA2 dice 'color de acento'); no se trató como defecto, igual que en la web. Primera pasada fallida por el script (detector de tachado y título compartido con el botón); corregido y re-ejecutado: pasó al primer intento. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C51-APP-005 - Verificar que con precio membresía se muestra como 1er precio con badge Membresía

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | tests-app/B2C-51-pendientes.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: PDP
- Sesión iniciada con la cuenta daunuruco+noaddress@avatar-global.com
- 000000000000662457-UN tiene precio especial de membresía activo

**Data utilizada**

- v1.0.1 = TBD
- 000000000000662457-UN = 000000000000662457-UN
- daunuruco+noaddress@avatar-global.com = 10.101.010-4

**Pasos ejecutados**

1. El usuario abre la App v1.0.1, busca 000000000000662457-UN y abre su PDP.
2. El sistema carga la PDP de 000000000000662457-UN.

**Resultado esperado**

Se muestra como 1er precio con el badge [Membresía].

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): esperado: el precio de membresía como 1er precio con el badge de Membresía. Obtenido con la cuenta con membresía: en la PDP de 000000000000662457-UN el 1er precio es el normal ($3.890, sin badge) y el de Membresía ($2.897, con el badge de diamante, un ícono sin texto) aparece debajo, como 2º precio. Bug: B2C-1365.

**Evidencia**

![Android · Paso 2 — resultados de 000000000000662457 un](<B2C-51 Evidencias/TC-B2C51-APP-005-android-p02-resultados-de-000000000000662457-un.png>)

![Android · Paso 4 — pdp de 000000000000662457 un](<B2C-51 Evidencias/TC-B2C51-APP-005-android-p04-pdp-de-000000000000662457-un.png>)

---

### TC-B2C51-APP-008 - Verificar que con Membresía, Unipay y Banco Estado a la vez el 1er precio es Membresía

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | tests-app/B2C-51-pendientes.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: PDP
- Sesión iniciada con la cuenta daunuruco+noaddress@avatar-global.com
- 000000000000666200-UN tiene precio Membresía, Unipay y Banco Estado vigentes a la vez

**Data utilizada**

- v1.0.1 = TBD
- 000000000000666200-UN = TBD
- daunuruco+noaddress@avatar-global.com = 10.101.010-4

**Pasos ejecutados**

1. El usuario abre la App v1.0.1, busca 000000000000666200-UN y abre su PDP.
2. El sistema carga la PDP de 000000000000666200-UN.

**Resultado esperado**

El 1er precio corresponde a Membresía, según PriceDisplayPriority = MEMBERSHIP_FIRST (por defecto).

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: la PDP de {SKU_TRES_PRECIOS} (000000000000666200-UN) con la cuenta con membresía muestra solo la promo «Lleva 2 por $12.490», «Lleva 2 por $10.866» con badge de Membresía y $7.690 c/u, sin precios Unipay ni Banco Estado vigentes: no se cumple la precondición (Membresía, Unipay y Banco Estado a la vez). Acción: dejar vigentes los tres precios en el SKU o declarar otro que los tenga.

**Evidencia**

![Android · Paso 2 — resultados de 000000000000666200 un](<B2C-51 Evidencias/TC-B2C51-APP-008-android-p02-resultados-de-000000000000666200-un.png>)

![Android · Paso 4 — pdp de 000000000000666200 un](<B2C-51 Evidencias/TC-B2C51-APP-008-android-p04-pdp-de-000000000000666200-un.png>)

---

### TC-B2C51-APP-009 - Verificar que oferta + membresía muestra badge Membresía, oferta y lista tachado

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | tests-app/B2C-51-pendientes.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: PDP
- Sesión iniciada con la cuenta daunuruco+noaddress@avatar-global.com
- 000000000000178089-UN tiene oferta vigente y precio de membresía

**Data utilizada**

- v1.0.1 = TBD
- 000000000000178089-UN = TBD
- daunuruco+noaddress@avatar-global.com = 10.101.010-4

**Pasos ejecutados**

1. El usuario abre la App v1.0.1, busca 000000000000178089-UN y abre su PDP.
2. El sistema carga la PDP de 000000000000178089-UN.
3. El usuario compara el orden de los precios con la shelf del mismo producto en una PLP o SRP.

**Resultado esperado**

Precio 1: badge Membresía · Precio 2: oferta en acento · Precio 3: lista tachado; no hay más de 3 precios y el orden coincide con el de la shelf del mismo producto en la PLP (B2C-62).

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: la PDP de {SKU_OFERTA_MEMBRESIA} (000000000000178089-UN) con la cuenta con membresía muestra la oferta (23%, $1.200, «Antes: $1.550») pero ningún precio de membresía ni badge: no se cumple la precondición (oferta y precio de membresía vigentes). Acción: dejar vigente el precio de membresía en el SKU o declarar otro que tenga oferta y membresía.

**Evidencia**

![Android · Paso 2 — resultados de 000000000000178089 un](<B2C-51 Evidencias/TC-B2C51-APP-009-android-p02-resultados-de-000000000000178089-un.png>)

![Android · Paso 4 — pdp de 000000000000178089 un](<B2C-51 Evidencias/TC-B2C51-APP-009-android-p04-pdp-de-000000000000178089-un.png>)

---

### TC-B2C51-APP-010 - Verificar que NxM + membresía muestra el badge Membresía y luego el precio compuesto

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | tests-app/B2C-51-pendientes.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: PDP
- Sesión iniciada con la cuenta daunuruco+noaddress@avatar-global.com
- 000000000664214001-UN tiene promo NxM y precio de membresía

**Data utilizada**

- v1.0.1 = TBD
- 000000000664214001-UN = TBD
- daunuruco+noaddress@avatar-global.com = 10.101.010-4

**Pasos ejecutados**

1. El usuario abre la App v1.0.1, busca 000000000664214001-UN y abre su PDP.
2. El sistema carga la PDP de 000000000664214001-UN.
3. El usuario compara el orden de los precios con la shelf del mismo producto en una PLP o SRP.

**Resultado esperado**

Precio 1: badge Membresía · Precio 2: N × $X.XXX; no hay más de 3 precios y el orden coincide con el de la shelf del mismo producto en la PLP (B2C-62).

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): esperado: precio 1 = badge Membresía y precio 2 = precio compuesto N × $X.XXX. Obtenido en la PDP de 000000000664214001-UN con la cuenta con membresía: 1º la promo «2 por 1 a $2.550» (sin badge de Membresía), 2º el precio de Membresía «Lleva 2 por $2.550» con el badge de diamante y 3º el precio normal $2.550 c/u; la tarjeta de la búsqueda tiene el mismo orden. Bug: B2C-1366.

**Evidencia**

![Android · Paso 2 — resultados de 000000000664214001 un](<B2C-51 Evidencias/TC-B2C51-APP-010-android-p02-resultados-de-000000000664214001-un.png>)

![Android · Paso 4 — pdp de 000000000664214001 un](<B2C-51 Evidencias/TC-B2C51-APP-010-android-p04-pdp-de-000000000664214001-un.png>)

---

### TC-B2C51-APP-015 - Verificar que un producto con "Combina la promo" muestra el botón y abre el drawer

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- 000000000000666200-UN tiene una promo combinable con ID terminado en CLP1

**Data utilizada**

- v1.0.1 = TBD
- 000000000000666200-UN = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1, busca 000000000000666200-UN y abre su PDP.
2. El sistema carga la PDP de 000000000000666200-UN.
3. El usuario toca "Combina la promo >".
4. El sistema abre el drawer de Combina la promo.

**Resultado esperado**

Se muestra "Combina la promo >" bajo el precio; al tocarlo se abre el drawer para elegir la combinación, y el stepper no muestra toasts de Completa la promo.

**Resultado obtenido**

PDP de {SKU_COMBINA_PROMO} = 666200: bajo el precio ('Lleva 2 por $12.490') está 'Combina la promo'; al tocarlo se abre el drawer con '0 / 2 productos' y las dos variantes combinables. Tras cerrarlo, 'Agregar' no muestra toasts de 'Completa la promo'. El ID de la promo (CLP1) no se puede ver desde la app. Primera pasada fallida por el script (detector de tachado y título compartido con el botón); corregido y re-ejecutado: pasó al primer intento. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

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
  "environment": "App Unimarc v1.0.1 (DEV)",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-51",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-51 APP Test Cases.xlsx",
  "title": "B2C-51 APP",
  "updated_at": "2026-10-27"
 },
 "history": {
  "2026-10-23": [
   "TC-B2C51-M-002",
   "TC-B2C51-M-009"
  ],
  "2026-10-26": [
   "TC-B2C51-APP-001",
   "TC-B2C51-APP-002",
   "TC-B2C51-APP-015"
  ],
  "2026-10-27": [
   "TC-B2C51-APP-005",
   "TC-B2C51-APP-008",
   "TC-B2C51-APP-009",
   "TC-B2C51-APP-010"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-10-23",
   "expected": "Se muestran \"Antes\" + precio lista tachado y atenuado, el badge \"XX%\" en amarillo con el % = (lista − oferta) / lista × 100 redondeado al entero, el precio oferta en color de acento y el PPUM recalculado sobre el precio oferta (si aplica).",
   "form_factor": "mobile",
   "id": "TC-B2C51-M-002",
   "name": "Verificar que con oferta activa se muestran \"Antes\" tachado, badge % y precio oferta [Mobile] [Guest]",
   "observation": "Obtenido: en la PDP Mobile el precio lista tachado de la oferta no va precedido de «Antes». Bug: B2C-1162. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir corridas de QA, no por corrección).",
   "observed": "Obtenido: en la PDP Mobile el precio lista tachado de la oferta no va precedido de «Antes». Bug: B2C-1162. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir corridas de QA, no por corrección).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: PDP\n- {SKU_PRECIO_OFERTA} tiene un precio de oferta vigente",
   "screenshots": [
    {
     "caption": "Paso 2 — bloque de precios con oferta",
     "file": "TC-B2C51-M-002-p02-bloque-de-precios-con-oferta.png"
    }
   ],
   "spec": "tests/B2C-51.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a la PDP de {SKU_PRECIO_OFERTA} ({BASE_URL}product/{SKU_PRECIO_OFERTA}).\n2. El sistema carga la PDP de {SKU_PRECIO_OFERTA}.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {SKU_PRECIO_OFERTA} = TBD",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-23",
   "expected": "Precio 1: badge Membresía · Precio 2: oferta en acento · Precio 3: lista tachado; no hay más de 3 precios y el orden coincide con el de la shelf del mismo producto en la PLP (B2C-62).",
   "form_factor": "mobile",
   "id": "TC-B2C51-M-009",
   "name": "Verificar que oferta + membresía muestra badge Membresía, oferta y lista tachado [Mobile] [Logueado]",
   "observation": "Obtenido: en la PDP Mobile con oferta + membresía el orden de los precios es membresía > oferta > lista tachado; el esperado es oferta > lista tachado > membresía. Bug: B2C-1162 (hoy cambia el orden respecto de lo reportado: el de membresía aparece primero). Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir corridas de QA, no por corrección).",
   "observed": "Obtenido: en la PDP Mobile con oferta + membresía el orden de los precios es membresía > oferta > lista tachado; el esperado es oferta > lista tachado > membresía. Bug: B2C-1162 (hoy cambia el orden respecto de lo reportado: el de membresía aparece primero). Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir corridas de QA, no por corrección).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: PDP\n- Sesión iniciada con la cuenta {COMPRADOR_MEMBRESIA_USER}\n- {SKU_OFERTA_MEMBRESIA} tiene oferta vigente y precio de membresía",
   "screenshots": [
    {
     "caption": "Paso 2 — bloque de precios oferta membresia",
     "file": "TC-B2C51-M-009-p02-bloque-de-precios-oferta-membresia.png"
    }
   ],
   "spec": "tests/B2C-51.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a la PDP de {SKU_OFERTA_MEMBRESIA} ({BASE_URL}product/{SKU_OFERTA_MEMBRESIA}).\n2. El sistema carga la PDP de {SKU_OFERTA_MEMBRESIA}.\n3. El usuario compara el orden de los precios con la shelf del mismo producto en una PLP o SRP.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {SKU_OFERTA_MEMBRESIA} = TBD\n- {COMPRADOR_MEMBRESIA_USER} = 10.101.010-4\n- {COMPRADOR_MEMBRESIA_PASSWORD} = Avatar123.",
   "viewport": "390x844"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se muestra solo el precio lista destacado, en color estándar y sin tachado, y el PPUM debajo si aplica.",
   "form_factor": "app",
   "id": "TC-B2C51-APP-001",
   "name": "Verificar que sin promoción el bloque de precios muestra solo el precio lista sin tachar",
   "observed": "PDP de {SKU_SIN_PROMO} = 652899 (Salsa Carozzi bolognesa 200 g): un único precio '$990', sin tachar, sin 'Antes', sin badge ni precio de promo (no trae PPUM). La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- 000000000000652899-UN no tiene ninguna promoción activa vigente",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1, busca 000000000000652899-UN y abre su PDP.\n2. El sistema carga la PDP de 000000000000652899-UN.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000652899-UN = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se muestran \"Antes\" + precio lista tachado y atenuado, el badge \"XX%\" en amarillo con el % = (lista − oferta) / lista × 100 redondeado al entero, el precio oferta en color de acento y el PPUM recalculado sobre el precio oferta (si aplica).",
   "form_factor": "app",
   "id": "TC-B2C51-APP-002",
   "name": "Verificar que con oferta activa se muestran \"Antes\" tachado, badge % y precio oferta",
   "observed": "PDP de {SKU_PRECIO_OFERTA} = 178089 (Mermelada Watt's 0% mora 200 g): badge '23%' con fondo amarillo, '$1.200' destacado, PPUM '($6.000 x Kg)' recalculado sobre la oferta (1.200 / 0,2 kg) y 'Antes: $1.550' con el monto tachado; 23 = (1.550 − 1.200) / 1.550 × 100 redondeado. El precio oferta se ve en el mismo color oscuro que un precio normal (el CA2 dice 'color de acento'); no se trató como defecto, igual que en la web. Primera pasada fallida por el script (detector de tachado y título compartido con el botón); corregido y re-ejecutado: pasó al primer intento. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- 000000000000178089-UN tiene un precio de oferta vigente",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1, busca 000000000000178089-UN y abre su PDP.\n2. El sistema carga la PDP de 000000000000178089-UN.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000178089-UN = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Se muestra como 1er precio con el badge [Membresía].",
   "form_factor": "app",
   "id": "TC-B2C51-APP-005",
   "name": "Verificar que con precio membresía se muestra como 1er precio con badge Membresía",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): esperado: el precio de membresía como 1er precio con el badge de Membresía. Obtenido con la cuenta con membresía: en la PDP de 000000000000662457-UN el 1er precio es el normal ($3.890, sin badge) y el de Membresía ($2.897, con el badge de diamante, un ícono sin texto) aparece debajo, como 2º precio. Bug: B2C-1365.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- Sesión iniciada con la cuenta daunuruco+noaddress@avatar-global.com\n- 000000000000662457-UN tiene precio especial de membresía activo",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — resultados de 000000000000662457 un",
     "file": "TC-B2C51-APP-005-android-p02-resultados-de-000000000000662457-un.png"
    },
    {
     "caption": "Android · Paso 4 — pdp de 000000000000662457 un",
     "file": "TC-B2C51-APP-005-android-p04-pdp-de-000000000000662457-un.png"
    }
   ],
   "spec": "tests-app/B2C-51-pendientes.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App v1.0.1, busca 000000000000662457-UN y abre su PDP.\n2. El sistema carga la PDP de 000000000000662457-UN.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000662457-UN = 000000000000662457-UN\n- daunuruco+noaddress@avatar-global.com = 10.101.010-4"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "El 1er precio corresponde a Membresía, según PriceDisplayPriority = MEMBERSHIP_FIRST (por defecto).",
   "form_factor": "app",
   "id": "TC-B2C51-APP-008",
   "name": "Verificar que con Membresía, Unipay y Banco Estado a la vez el 1er precio es Membresía",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: la PDP de {SKU_TRES_PRECIOS} (000000000000666200-UN) con la cuenta con membresía muestra solo la promo «Lleva 2 por $12.490», «Lleva 2 por $10.866» con badge de Membresía y $7.690 c/u, sin precios Unipay ni Banco Estado vigentes: no se cumple la precondición (Membresía, Unipay y Banco Estado a la vez). Acción: dejar vigentes los tres precios en el SKU o declarar otro que los tenga.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- Sesión iniciada con la cuenta daunuruco+noaddress@avatar-global.com\n- 000000000000666200-UN tiene precio Membresía, Unipay y Banco Estado vigentes a la vez",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — resultados de 000000000000666200 un",
     "file": "TC-B2C51-APP-008-android-p02-resultados-de-000000000000666200-un.png"
    },
    {
     "caption": "Android · Paso 4 — pdp de 000000000000666200 un",
     "file": "TC-B2C51-APP-008-android-p04-pdp-de-000000000000666200-un.png"
    }
   ],
   "spec": "tests-app/B2C-51-pendientes.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1, busca 000000000000666200-UN y abre su PDP.\n2. El sistema carga la PDP de 000000000000666200-UN.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000666200-UN = TBD\n- daunuruco+noaddress@avatar-global.com = 10.101.010-4"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Precio 1: badge Membresía · Precio 2: oferta en acento · Precio 3: lista tachado; no hay más de 3 precios y el orden coincide con el de la shelf del mismo producto en la PLP (B2C-62).",
   "form_factor": "app",
   "id": "TC-B2C51-APP-009",
   "name": "Verificar que oferta + membresía muestra badge Membresía, oferta y lista tachado",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: la PDP de {SKU_OFERTA_MEMBRESIA} (000000000000178089-UN) con la cuenta con membresía muestra la oferta (23%, $1.200, «Antes: $1.550») pero ningún precio de membresía ni badge: no se cumple la precondición (oferta y precio de membresía vigentes). Acción: dejar vigente el precio de membresía en el SKU o declarar otro que tenga oferta y membresía.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- Sesión iniciada con la cuenta daunuruco+noaddress@avatar-global.com\n- 000000000000178089-UN tiene oferta vigente y precio de membresía",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — resultados de 000000000000178089 un",
     "file": "TC-B2C51-APP-009-android-p02-resultados-de-000000000000178089-un.png"
    },
    {
     "caption": "Android · Paso 4 — pdp de 000000000000178089 un",
     "file": "TC-B2C51-APP-009-android-p04-pdp-de-000000000000178089-un.png"
    }
   ],
   "spec": "tests-app/B2C-51-pendientes.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1, busca 000000000000178089-UN y abre su PDP.\n2. El sistema carga la PDP de 000000000000178089-UN.\n3. El usuario compara el orden de los precios con la shelf del mismo producto en una PLP o SRP.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000178089-UN = TBD\n- daunuruco+noaddress@avatar-global.com = 10.101.010-4"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Precio 1: badge Membresía · Precio 2: N × $X.XXX; no hay más de 3 precios y el orden coincide con el de la shelf del mismo producto en la PLP (B2C-62).",
   "form_factor": "app",
   "id": "TC-B2C51-APP-010",
   "name": "Verificar que NxM + membresía muestra el badge Membresía y luego el precio compuesto",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): esperado: precio 1 = badge Membresía y precio 2 = precio compuesto N × $X.XXX. Obtenido en la PDP de 000000000664214001-UN con la cuenta con membresía: 1º la promo «2 por 1 a $2.550» (sin badge de Membresía), 2º el precio de Membresía «Lleva 2 por $2.550» con el badge de diamante y 3º el precio normal $2.550 c/u; la tarjeta de la búsqueda tiene el mismo orden. Bug: B2C-1366.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- Sesión iniciada con la cuenta daunuruco+noaddress@avatar-global.com\n- 000000000664214001-UN tiene promo NxM y precio de membresía",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — resultados de 000000000664214001 un",
     "file": "TC-B2C51-APP-010-android-p02-resultados-de-000000000664214001-un.png"
    },
    {
     "caption": "Android · Paso 4 — pdp de 000000000664214001 un",
     "file": "TC-B2C51-APP-010-android-p04-pdp-de-000000000664214001-un.png"
    }
   ],
   "spec": "tests-app/B2C-51-pendientes.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App v1.0.1, busca 000000000664214001-UN y abre su PDP.\n2. El sistema carga la PDP de 000000000664214001-UN.\n3. El usuario compara el orden de los precios con la shelf del mismo producto en una PLP o SRP.",
   "test_data": "- v1.0.1 = TBD\n- 000000000664214001-UN = TBD\n- daunuruco+noaddress@avatar-global.com = 10.101.010-4"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se muestra \"Combina la promo >\" bajo el precio; al tocarlo se abre el drawer para elegir la combinación, y el stepper no muestra toasts de Completa la promo.",
   "form_factor": "app",
   "id": "TC-B2C51-APP-015",
   "name": "Verificar que un producto con \"Combina la promo\" muestra el botón y abre el drawer",
   "observed": "PDP de {SKU_COMBINA_PROMO} = 666200: bajo el precio ('Lleva 2 por $12.490') está 'Combina la promo'; al tocarlo se abre el drawer con '0 / 2 productos' y las dos variantes combinables. Tras cerrarlo, 'Agregar' no muestra toasts de 'Completa la promo'. El ID de la promo (CLP1) no se puede ver desde la app. Primera pasada fallida por el script (detector de tachado y título compartido con el botón); corregido y re-ejecutado: pasó al primer intento. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- 000000000000666200-UN tiene una promo combinable con ID terminado en CLP1",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1, busca 000000000000666200-UN y abre su PDP.\n2. El sistema carga la PDP de 000000000000666200-UN.\n3. El usuario toca \"Combina la promo >\".\n4. El sistema abre el drawer de Combina la promo.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000666200-UN = TBD"
  }
 ]
}
-->
