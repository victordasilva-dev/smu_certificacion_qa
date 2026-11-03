# B2C-51 (app Android) - Precios y promociones en la PDP - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-51 APP |
| Última actualización | 2026-11-03 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Dispositivo Android | dispositivo por ADB |
| Origen de los TC | Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-51 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 7 |
| Bloqueado Data | 2 |
| **Total** | **9** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-03 | 9 | TC-B2C51-APP-003, TC-B2C51-APP-004, TC-B2C51-APP-006, TC-B2C51-APP-007, TC-B2C51-APP-011, TC-B2C51-APP-012, TC-B2C51-APP-013, TC-B2C51-APP-014, TC-B2C51-APP-016 |

## Detalle por caso de prueba

### TC-B2C51-APP-003 - Verificar que con promo NxM se muestra el precio compuesto "N por M a $X" [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-51.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- {SKU_PROM_NxM} tiene una promoción NxM activa

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_PROM_NxM} = 000000000641229002-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}, busca {SKU_PROM_NxM} y abre su PDP.
2. El sistema carga la PDP de {SKU_PROM_NxM}.

**Resultado esperado**

El precio principal es "<N> por <M> a $X.XXX" destacado, con el PPUM estimado según la promo, y debajo el precio unitario y el PPUM originales.

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): PDP de {SKU_PROM_NxM}: precio principal «3 por 2 a $49.000» destacado con PPUM «($125.641 x Kg)» y debajo «$24.500 c/u» con su PPUM «($188.462 x Kg)».

**Evidencia**

![Android · TC B2C51 APP 003 pdp](<B2C-51 APP Evidencias/TC-B2C51-APP-003-android-pdp.png>)

---

### TC-B2C51-APP-004 - Verificar que con promo NxPrecio se muestra "Lleva N por $X" [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-51.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- {SKU_PROM_NxPRECIO} tiene una promoción NxPrecio activa

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_PROM_NxPRECIO} = 000000000000666200-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}, busca {SKU_PROM_NxPRECIO} y abre su PDP.
2. El sistema carga la PDP de {SKU_PROM_NxPRECIO}.

**Resultado esperado**

El precio principal es "Lleva <N> por $X.XXX" destacado, con el PPUM estimado según la promo, y debajo el precio unitario y el PPUM originales.

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): PDP de {SKU_PROM_NxPRECIO}: «Lleva 2 por $12.490 ($12.490 x Kg)» y debajo «$7.690 c/u ($15.380 x Kg)».

**Evidencia**

![Android · TC B2C51 APP 004 pdp](<B2C-51 APP Evidencias/TC-B2C51-APP-004-android-pdp.png>)

---

### TC-B2C51-APP-006 - Verificar que con precio Unipay se muestra como 1er precio con badge Unipay [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-51.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- {SKU_PRECIO_UNIPAY} tiene precio especial Unipay activo

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_PRECIO_UNIPAY} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}, busca {SKU_PRECIO_UNIPAY} y abre su PDP.
2. El sistema carga la PDP de {SKU_PRECIO_UNIPAY}.

**Resultado esperado**

Se muestra como 1er precio con el badge [Unipay].

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): PDP de {SKU_PRECIO_UNIPAY}: se muestra como 1er precio «Precio Unipay $1.290 ($3 x ml)».

**Evidencia**

![Android · TC B2C51 APP 006 pdp](<B2C-51 APP Evidencias/TC-B2C51-APP-006-android-pdp.png>)

---

### TC-B2C51-APP-007 - Verificar que con precio Banco Estado se muestra como 1er precio con badge Banco Estado [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-51.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- {SKU_PRECIO_BE} tiene precio especial Banco Estado activo

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_PRECIO_BE} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}, busca {SKU_PRECIO_BE} y abre su PDP.
2. El sistema carga la PDP de {SKU_PRECIO_BE}.

**Resultado esperado**

Se muestra como 1er precio con el badge [Banco Estado].

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): PDP de {SKU_PRECIO_BE}: se muestra como 1er precio «Precio Banco Estado $910 ($910 x Kg)».

**Evidencia**

![Android · TC B2C51 APP 007 pdp](<B2C-51 APP Evidencias/TC-B2C51-APP-007-android-pdp.png>)

---

### TC-B2C51-APP-011 - Verificar que oferta + Unipay muestra badge Unipay, oferta y lista tachado [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-51.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- {SKU_OFERTA_UNIPAY} tiene oferta vigente y precio Unipay

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_OFERTA_UNIPAY} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}, busca {SKU_OFERTA_UNIPAY} y abre su PDP.
2. El sistema carga la PDP de {SKU_OFERTA_UNIPAY}.
3. El usuario compara el orden de los precios con la shelf del mismo producto en una PLP o SRP.

**Resultado esperado**

Precio 1: badge Unipay · Precio 2: oferta en acento · Precio 3: lista tachado; no hay más de 3 precios y el orden coincide con el de la shelf del mismo producto en la PLP (B2C-62).

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): la precondición pide {SKU_OFERTA_UNIPAY} con oferta vigente y precio Unipay; su PDP muestra solo «Promoción % Unipay» con dos precios ($4.750 y $4.275), sin oferta en acento ni lista tachado, y el shelf del mismo producto no se encontró para comparar el orden. La data no coincide con la precondición. Falta un SKU con oferta + Unipay (lo carga el equipo de data).

**Evidencia**

![Android · TC B2C51 APP 011 pdp](<B2C-51 APP Evidencias/TC-B2C51-APP-011-android-pdp.png>)

![TC B2C51 APP 011 android shelf srp](<B2C-51 APP Evidencias/TC-B2C51-APP-011-android-shelf-srp.png>)

---

### TC-B2C51-APP-012 - Verificar que NxPrecio + Unipay muestra el badge Unipay y luego el precio compuesto [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-51.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- {SKU_NXPRECIO_UNIPAY} tiene promo NxPrecio y precio Unipay

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_NXPRECIO_UNIPAY} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}, busca {SKU_NXPRECIO_UNIPAY} y abre su PDP.
2. El sistema carga la PDP de {SKU_NXPRECIO_UNIPAY}.
3. El usuario compara el orden de los precios con la shelf del mismo producto en una PLP o SRP.

**Resultado esperado**

Precio 1: badge Unipay · Precio 2: N × $X.XXX; no hay más de 3 precios y el orden coincide con el de la shelf del mismo producto en la PLP (B2C-62).

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): el TC declara el token {SKU_NXPRECIO_UNIPAY} sin valor en el Excel de data. Falta cargar ese SKU (lo carga el equipo de data).

---

### TC-B2C51-APP-013 - Verificar que "Completa la promo" muestra toasts con las unidades faltantes al sumar [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-51.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- {SKU_PROM_NxM} Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_PROM_NxM} = 000000000641229002-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}, busca {SKU_PROM_NxM} y abre su PDP.
2. El sistema carga la PDP de {SKU_PROM_NxM}.
3. El usuario toca "Agregar" y luego "+" una vez.
4. El sistema muestra un toast indicando las unidades que faltan para la promo.

**Resultado esperado**

Con cada "+" por debajo de N se muestra un toast de progreso con las unidades que faltan para activar la promo.

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): PDP de {SKU_PROM_NxM}: tras «Agregar» el toast «Agrega 2 y ahorra más» y tras «+» «Agrega 1 y ahorra más».

**Evidencia**

![TC B2C51 APP 013 android tras agregar](<B2C-51 APP Evidencias/TC-B2C51-APP-013-android-tras-agregar.png>)

![TC B2C51 APP 013 android tras mas](<B2C-51 APP Evidencias/TC-B2C51-APP-013-android-tras-mas.png>)

---

### TC-B2C51-APP-014 - Verificar que al completar las N unidades el bloque de precios refleja la promo activa [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-51.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- {SKU_PROM_NxM} Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_PROM_NxM} = 000000000641229002-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}, busca {SKU_PROM_NxM} y abre su PDP.
2. El sistema carga la PDP de {SKU_PROM_NxM}.
3. El usuario toca "Agregar" y luego "+" hasta alcanzar las N unidades de la promo.
4. El sistema muestra el toast "completaste la promo" y actualiza el bloque de precios.

**Resultado esperado**

Al llegar a N unidades se muestra el toast "completaste la promo" y el bloque de precios refleja el precio promocional activo.

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Al llegar a 3 unidades se muestra el toast «¡Completaste la promo!»; el bloque de precios muestra la promo activa («3 por 2 a $49.000», «Lleva 3 por $2.592»).

**Evidencia**

![TC B2C51 APP 014 android mas 2](<B2C-51 APP Evidencias/TC-B2C51-APP-014-android-mas-2.png>)

![TC B2C51 APP 014 android mas 3](<B2C-51 APP Evidencias/TC-B2C51-APP-014-android-mas-3.png>)

![TC B2C51 APP 014 android mas 4](<B2C-51 APP Evidencias/TC-B2C51-APP-014-android-mas-4.png>)

---

### TC-B2C51-APP-016 - Verificar que un producto con "Completa la promo" no muestra el botón "Combina la promo" [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-51.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- {SKU_PROM_NxM} tiene una promo NxM del mismo SKU, sin código CLP1

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_PROM_NxM} = 000000000641229002-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}, busca {SKU_PROM_NxM} y abre su PDP.
2. El sistema carga la PDP de {SKU_PROM_NxM}.

**Resultado esperado**

No se muestra "Combina la promo" y la mecánica funciona solo con los toasts del stepper.

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): PDP de {SKU_PROM_NxM} (Completa la promo): no se muestra «Combina la promo» y la mecánica funciona solo con los toasts del stepper.

**Evidencia**

![Android · TC B2C51 APP 016 pdp](<B2C-51 APP Evidencias/TC-B2C51-APP-016-android-pdp.png>)

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
  "suite": "B2C-51 APP",
  "tc_file": "Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-51 APP Test Cases.xlsx",
  "title": "B2C-51 (app Android) - Precios y promociones en la PDP - Evidencias QA",
  "updated_at": "2026-11-03"
 },
 "history": {
  "2026-11-03": [
   "TC-B2C51-APP-003",
   "TC-B2C51-APP-004",
   "TC-B2C51-APP-006",
   "TC-B2C51-APP-007",
   "TC-B2C51-APP-011",
   "TC-B2C51-APP-012",
   "TC-B2C51-APP-013",
   "TC-B2C51-APP-014",
   "TC-B2C51-APP-016"
  ]
 },
 "results": [
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "El precio principal es \"<N> por <M> a $X.XXX\" destacado, con el PPUM estimado según la promo, y debajo el precio unitario y el PPUM originales.",
   "form_factor": "app",
   "id": "TC-B2C51-APP-003",
   "name": "Verificar que con promo NxM se muestra el precio compuesto \"N por M a $X\" [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): PDP de {SKU_PROM_NxM}: precio principal «3 por 2 a $49.000» destacado con PPUM «($125.641 x Kg)» y debajo «$24.500 c/u» con su PPUM «($188.462 x Kg)».",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- {SKU_PROM_NxM} tiene una promoción NxM activa",
   "screenshots": [
    {
     "caption": "Android · TC B2C51 APP 003 pdp",
     "file": "TC-B2C51-APP-003-android-pdp.png"
    }
   ],
   "spec": "tests-app/B2C-51.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}, busca {SKU_PROM_NxM} y abre su PDP.\n2. El sistema carga la PDP de {SKU_PROM_NxM}.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_PROM_NxM} = 000000000641229002-UN"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "El precio principal es \"Lleva <N> por $X.XXX\" destacado, con el PPUM estimado según la promo, y debajo el precio unitario y el PPUM originales.",
   "form_factor": "app",
   "id": "TC-B2C51-APP-004",
   "name": "Verificar que con promo NxPrecio se muestra \"Lleva N por $X\" [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): PDP de {SKU_PROM_NxPRECIO}: «Lleva 2 por $12.490 ($12.490 x Kg)» y debajo «$7.690 c/u ($15.380 x Kg)».",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- {SKU_PROM_NxPRECIO} tiene una promoción NxPrecio activa",
   "screenshots": [
    {
     "caption": "Android · TC B2C51 APP 004 pdp",
     "file": "TC-B2C51-APP-004-android-pdp.png"
    }
   ],
   "spec": "tests-app/B2C-51.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}, busca {SKU_PROM_NxPRECIO} y abre su PDP.\n2. El sistema carga la PDP de {SKU_PROM_NxPRECIO}.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_PROM_NxPRECIO} = 000000000000666200-UN"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Se muestra como 1er precio con el badge [Unipay].",
   "form_factor": "app",
   "id": "TC-B2C51-APP-006",
   "name": "Verificar que con precio Unipay se muestra como 1er precio con badge Unipay [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): PDP de {SKU_PRECIO_UNIPAY}: se muestra como 1er precio «Precio Unipay $1.290 ($3 x ml)».",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- {SKU_PRECIO_UNIPAY} tiene precio especial Unipay activo",
   "screenshots": [
    {
     "caption": "Android · TC B2C51 APP 006 pdp",
     "file": "TC-B2C51-APP-006-android-pdp.png"
    }
   ],
   "spec": "tests-app/B2C-51.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}, busca {SKU_PRECIO_UNIPAY} y abre su PDP.\n2. El sistema carga la PDP de {SKU_PRECIO_UNIPAY}.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_PRECIO_UNIPAY} = TBD"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Se muestra como 1er precio con el badge [Banco Estado].",
   "form_factor": "app",
   "id": "TC-B2C51-APP-007",
   "name": "Verificar que con precio Banco Estado se muestra como 1er precio con badge Banco Estado [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): PDP de {SKU_PRECIO_BE}: se muestra como 1er precio «Precio Banco Estado $910 ($910 x Kg)».",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- {SKU_PRECIO_BE} tiene precio especial Banco Estado activo",
   "screenshots": [
    {
     "caption": "Android · TC B2C51 APP 007 pdp",
     "file": "TC-B2C51-APP-007-android-pdp.png"
    }
   ],
   "spec": "tests-app/B2C-51.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}, busca {SKU_PRECIO_BE} y abre su PDP.\n2. El sistema carga la PDP de {SKU_PRECIO_BE}.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_PRECIO_BE} = TBD"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Precio 1: badge Unipay · Precio 2: oferta en acento · Precio 3: lista tachado; no hay más de 3 precios y el orden coincide con el de la shelf del mismo producto en la PLP (B2C-62).",
   "form_factor": "app",
   "id": "TC-B2C51-APP-011",
   "name": "Verificar que oferta + Unipay muestra badge Unipay, oferta y lista tachado [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): la precondición pide {SKU_OFERTA_UNIPAY} con oferta vigente y precio Unipay; su PDP muestra solo «Promoción % Unipay» con dos precios ($4.750 y $4.275), sin oferta en acento ni lista tachado, y el shelf del mismo producto no se encontró para comparar el orden. La data no coincide con la precondición. Falta un SKU con oferta + Unipay (lo carga el equipo de data).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- {SKU_OFERTA_UNIPAY} tiene oferta vigente y precio Unipay",
   "screenshots": [
    {
     "caption": "Android · TC B2C51 APP 011 pdp",
     "file": "TC-B2C51-APP-011-android-pdp.png"
    },
    {
     "caption": "TC B2C51 APP 011 android shelf srp",
     "file": "TC-B2C51-APP-011-android-shelf-srp.png"
    }
   ],
   "spec": "tests-app/B2C-51.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}, busca {SKU_OFERTA_UNIPAY} y abre su PDP.\n2. El sistema carga la PDP de {SKU_OFERTA_UNIPAY}.\n3. El usuario compara el orden de los precios con la shelf del mismo producto en una PLP o SRP.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_OFERTA_UNIPAY} = TBD"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Precio 1: badge Unipay · Precio 2: N × $X.XXX; no hay más de 3 precios y el orden coincide con el de la shelf del mismo producto en la PLP (B2C-62).",
   "form_factor": "app",
   "id": "TC-B2C51-APP-012",
   "name": "Verificar que NxPrecio + Unipay muestra el badge Unipay y luego el precio compuesto [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): el TC declara el token {SKU_NXPRECIO_UNIPAY} sin valor en el Excel de data. Falta cargar ese SKU (lo carga el equipo de data).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- {SKU_NXPRECIO_UNIPAY} tiene promo NxPrecio y precio Unipay",
   "spec": "tests-app/B2C-51.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}, busca {SKU_NXPRECIO_UNIPAY} y abre su PDP.\n2. El sistema carga la PDP de {SKU_NXPRECIO_UNIPAY}.\n3. El usuario compara el orden de los precios con la shelf del mismo producto en una PLP o SRP.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_NXPRECIO_UNIPAY} = TBD"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Con cada \"+\" por debajo de N se muestra un toast de progreso con las unidades que faltan para activar la promo.",
   "form_factor": "app",
   "id": "TC-B2C51-APP-013",
   "name": "Verificar que \"Completa la promo\" muestra toasts con las unidades faltantes al sumar [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): PDP de {SKU_PROM_NxM}: tras «Agregar» el toast «Agrega 2 y ahorra más» y tras «+» «Agrega 1 y ahorra más».",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- {SKU_PROM_NxM} Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)",
   "screenshots": [
    {
     "caption": "TC B2C51 APP 013 android tras agregar",
     "file": "TC-B2C51-APP-013-android-tras-agregar.png"
    },
    {
     "caption": "TC B2C51 APP 013 android tras mas",
     "file": "TC-B2C51-APP-013-android-tras-mas.png"
    }
   ],
   "spec": "tests-app/B2C-51.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}, busca {SKU_PROM_NxM} y abre su PDP.\n2. El sistema carga la PDP de {SKU_PROM_NxM}.\n3. El usuario toca \"Agregar\" y luego \"+\" una vez.\n4. El sistema muestra un toast indicando las unidades que faltan para la promo.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_PROM_NxM} = 000000000641229002-UN"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Al llegar a N unidades se muestra el toast \"completaste la promo\" y el bloque de precios refleja el precio promocional activo.",
   "form_factor": "app",
   "id": "TC-B2C51-APP-014",
   "name": "Verificar que al completar las N unidades el bloque de precios refleja la promo activa [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Al llegar a 3 unidades se muestra el toast «¡Completaste la promo!»; el bloque de precios muestra la promo activa («3 por 2 a $49.000», «Lleva 3 por $2.592»).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- {SKU_PROM_NxM} Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)",
   "screenshots": [
    {
     "caption": "TC B2C51 APP 014 android mas 2",
     "file": "TC-B2C51-APP-014-android-mas-2.png"
    },
    {
     "caption": "TC B2C51 APP 014 android mas 3",
     "file": "TC-B2C51-APP-014-android-mas-3.png"
    },
    {
     "caption": "TC B2C51 APP 014 android mas 4",
     "file": "TC-B2C51-APP-014-android-mas-4.png"
    }
   ],
   "spec": "tests-app/B2C-51.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}, busca {SKU_PROM_NxM} y abre su PDP.\n2. El sistema carga la PDP de {SKU_PROM_NxM}.\n3. El usuario toca \"Agregar\" y luego \"+\" hasta alcanzar las N unidades de la promo.\n4. El sistema muestra el toast \"completaste la promo\" y actualiza el bloque de precios.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_PROM_NxM} = 000000000641229002-UN"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "No se muestra \"Combina la promo\" y la mecánica funciona solo con los toasts del stepper.",
   "form_factor": "app",
   "id": "TC-B2C51-APP-016",
   "name": "Verificar que un producto con \"Completa la promo\" no muestra el botón \"Combina la promo\" [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): PDP de {SKU_PROM_NxM} (Completa la promo): no se muestra «Combina la promo» y la mecánica funciona solo con los toasts del stepper.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- {SKU_PROM_NxM} tiene una promo NxM del mismo SKU, sin código CLP1",
   "screenshots": [
    {
     "caption": "Android · TC B2C51 APP 016 pdp",
     "file": "TC-B2C51-APP-016-android-pdp.png"
    }
   ],
   "spec": "tests-app/B2C-51.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}, busca {SKU_PROM_NxM} y abre su PDP.\n2. El sistema carga la PDP de {SKU_PROM_NxM}.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_PROM_NxM} = 000000000641229002-UN"
  }
 ]
}
-->
