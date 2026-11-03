# B2C-50 (app Android) - Mensaje de avance de promoción Combina y Completa - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-50 APP |
| Última actualización | 2026-11-03 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Dispositivo Android | dispositivo por ADB |
| Origen de los TC | Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-50 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 5 |
| Bloqueado Data | 3 |
| Rechazado | 1 |
| **Total** | **9** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-03 | 9 | TC-B2C50-APP-001, TC-B2C50-APP-004, TC-B2C50-APP-005, TC-B2C50-APP-006, TC-B2C50-APP-007, TC-B2C50-APP-008, TC-B2C50-APP-009, TC-B2C50-APP-010, TC-B2C50-APP-012 |

## Detalle por caso de prueba

### TC-B2C50-APP-001 - Verificar que un producto con promo Combina incompleta muestra Te faltan N con CTA en el carro [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-50.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene {SKU_COMBINA_PROMO} x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere {CANTIDAD_PROMO_COMBINA} unidades

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_COMBINA_PROMO} = TBD
- {CANTIDAD_PROMO_COMBINA} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario revisa el shelf de {SKU_COMBINA_PROMO}.

**Resultado esperado**

El shelf muestra "Te faltan N para la promo >" con N = {CANTIDAD_PROMO_COMBINA} − 1 y el CTA "›".

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): la precondición usa {CANTIDAD_PROMO_COMBINA} = 3, pero la promo del SKU {SKU_COMBINA_PROMO} (000000000000666200-UN) es «Lleva 2 unidades por Monto»: con 1 unidad el carro muestra «Te faltan 1 para la promo. Ver productos combinables» y no «Te faltan 2». El N de la data no coincide con la promo real. Falta corregir {CANTIDAD_PROMO_COMBINA} o el SKU (lo hace el equipo de data).

**Evidencia**

![TC B2C50 APP 001 android qty1 combina](<B2C-50 APP Evidencias/TC-B2C50-APP-001-android-qty1-combina.png>)

---

### TC-B2C50-APP-004 - Verificar que un producto con promo de tipo "Completa la promo", incompleta, muestra Te faltan N sin CTA en el carro [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-50.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene {SKU_COMPLETA_PROMO_3X2} x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_COMPLETA_PROMO_3X2} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario revisa el shelf de {SKU_COMPLETA_PROMO_3X2}.

**Resultado esperado**

El shelf muestra "Te faltan 2 para la promo" sin CTA "›".

Es solo un mensaje y no abre un modal

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Carro con 1 unidad de {SKU_COMPLETA_PROMO_3X2}: «Te faltan 2 para la promo», sin CTA «Ver productos combinables».

**Evidencia**

![TC B2C50 APP 004 android qty1 3x2](<B2C-50 APP Evidencias/TC-B2C50-APP-004-android-qty1-3x2.png>)

---

### TC-B2C50-APP-005 - Verificar que al sumar una unidad el contador Te faltan N baja en 1 sin recargar [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-50.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene {SKU_COMPLETA_PROMO_3X2} x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_COMPLETA_PROMO_3X2} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca el control + de {SKU_COMPLETA_PROMO_3X2}.

**Resultado esperado**

La cantidad pasa a 2 y el mensaje cambia de inmediato a "Te faltan 1 para la promo" sin recargar la página.

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Al sumar una unidad la cantidad pasa a 2 un. y el mensaje cambia a «Te faltan 1 para la promo» sin recargar.

**Evidencia**

![TC B2C50 APP 005 android qty2 3x2](<B2C-50 APP Evidencias/TC-B2C50-APP-005-android-qty2-3x2.png>)

---

### TC-B2C50-APP-006 - Verificar que al completar la promo el mensaje cambia a Llevas la promo [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-50.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene {SKU_COMPLETA_PROMO_3X2} x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_COMPLETA_PROMO_3X2} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca el control + de {SKU_COMPLETA_PROMO_3X2} hasta llegar a 3 unidades.

**Resultado esperado**

El mensaje "Te faltan N" desaparece y el shelf muestra "Llevas la promo ✓".

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Con 3 unidades desaparece «Te faltan N» y el ítem muestra «Llevas la promo ✓» en verde.

**Evidencia**

![TC B2C50 APP 006 android qty3 3x2](<B2C-50 APP Evidencias/TC-B2C50-APP-006-android-qty3-3x2.png>)

---

### TC-B2C50-APP-007 - Verificar que al completar la promo el precio unitario se recalcula con el descuento [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-50.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene {SKU_COMPLETA_PROMO_3X2} x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_COMPLETA_PROMO_3X2} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca el control + de {SKU_COMPLETA_PROMO_3X2} hasta llegar a 3 unidades.
4. El usuario revisa el precio del ítem.

**Resultado esperado**

El precio unitario de {SKU_COMPLETA_PROMO_3X2} se recalcula con el descuento de la promo 3x2 aplicado a las 3 unidades.

**Resultado obtenido**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Esperado: al completar la promo el precio unitario se recalcula con el descuento 3x2 aplicado a las 3 unidades. Obtenido: con 3 unidades el ítem sigue mostrando «$2.450 c/u» y «($18.284 x Kg)» sin cambio; solo el Subtotal refleja el descuento ($4.900 en lugar de $7.350). Bug: B2C-1453.

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Esperado: al completar la promo el precio unitario se recalcula con el descuento 3x2 aplicado a las 3 unidades. Obtenido: con 3 unidades el ítem sigue mostrando «$2.450 c/u» y «($18.284 x Kg)» sin cambio; solo el Subtotal refleja el descuento ($4.900 en lugar de $7.350). Bug: B2C-1453.

**Evidencia**

![TC B2C50 APP 007 android qty3 precio](<B2C-50 APP Evidencias/TC-B2C50-APP-007-android-qty3-precio.png>)

---

### TC-B2C50-APP-008 - Verificar que al completar la promo Combina desaparece el CTA de Combina [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-50.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene {SKU_COMBINA_PROMO} x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere {CANTIDAD_PROMO_COMBINA} unidades

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_COMBINA_PROMO} = TBD
- {CANTIDAD_PROMO_COMBINA} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca el control + de {SKU_COMBINA_PROMO} hasta llegar a {CANTIDAD_PROMO_COMBINA} unidades.

**Resultado esperado**

El shelf muestra "Llevas la promo ✓" y ya no muestra el mensaje "Te faltan N" ni el CTA "›".

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): la precondición usa {CANTIDAD_PROMO_COMBINA} = 3, pero la promo del SKU {SKU_COMBINA_PROMO} (000000000000666200-UN) es «Lleva 2 unidades por Monto»: con 1 unidad el carro muestra «Te faltan 1 para la promo. Ver productos combinables» y no «Te faltan 2». El N de la data no coincide con la promo real. Falta corregir {CANTIDAD_PROMO_COMBINA} o el SKU (lo hace el equipo de data).

**Evidencia**

![TC B2C50 APP 008 android qty3 combina](<B2C-50 APP Evidencias/TC-B2C50-APP-008-android-qty3-combina.png>)

---

### TC-B2C50-APP-009 - Verificar que al superar el umbral de la promo de tipo "Completa la promo" el contador inicia un nuevo ciclo [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-50.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene {SKU_COMPLETA_PROMO_3X2} x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_COMPLETA_PROMO_3X2} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca el control + de {SKU_COMPLETA_PROMO_3X2} hasta llegar a 4 unidades.

**Resultado esperado**

Con 4 unidades el shelf muestra "Te faltan 2 para la promo" (siguiente umbral = 6).

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Con 4 unidades el ítem muestra «Te faltan 2 para la promo» (siguiente umbral 6).

**Evidencia**

![TC B2C50 APP 009 android qty4 3x2](<B2C-50 APP Evidencias/TC-B2C50-APP-009-android-qty4-3x2.png>)

---

### TC-B2C50-APP-010 - Verificar que al superar el umbral de la promo de tipo "Combina la promo" el contador inicia un nuevo ciclo [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-50.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene {SKU_COMBINA_PROMO} x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere {CANTIDAD_PROMO_COMBINA} unidades

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_COMBINA_PROMO} = TBD
- {CANTIDAD_PROMO_COMBINA} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca el control + de {SKU_COMBINA_PROMO} hasta llegar a {CANTIDAD_PROMO_COMBINA} + 1 unidades.

**Resultado esperado**

El shelf vuelve a mostrar "Te faltan N para la promo >" con N = (2 × {CANTIDAD_PROMO_COMBINA}) − cantidad actual.

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): la precondición usa {CANTIDAD_PROMO_COMBINA} = 3, pero la promo del SKU {SKU_COMBINA_PROMO} (000000000000666200-UN) es «Lleva 2 unidades por Monto»: con 1 unidad el carro muestra «Te faltan 1 para la promo. Ver productos combinables» y no «Te faltan 2». El N de la data no coincide con la promo real. Falta corregir {CANTIDAD_PROMO_COMBINA} o el SKU (lo hace el equipo de data).

**Evidencia**

![TC B2C50 APP 010 android qty4 combina](<B2C-50 APP Evidencias/TC-B2C50-APP-010-android-qty4-combina.png>)

---

### TC-B2C50-APP-012 - Verificar que al eliminar los productos de la promo el mensaje desaparece [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-50.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene {SKU_COMPLETA_PROMO_3X2} x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades
- El carro también contiene {SKU_VALID_001} (sin promo)

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_COMPLETA_PROMO_3X2} = TBD
- {SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario elimina {SKU_COMPLETA_PROMO_3X2} del carro con el ícono de eliminar.

**Resultado esperado**

El mensaje "Te faltan N para la promo" desaparece junto con el producto y {SKU_VALID_001} no muestra mensaje de promo.

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Al eliminar {SKU_COMPLETA_PROMO_3X2} el mensaje «Te faltan 2 para la promo» desaparece con el producto y {SKU_VALID_001} queda sin mensaje de promo.

**Evidencia**

![TC B2C50 APP 012 android antes de eliminar](<B2C-50 APP Evidencias/TC-B2C50-APP-012-android-antes-de-eliminar.png>)

![TC B2C50 APP 012 android tras eliminar](<B2C-50 APP Evidencias/TC-B2C50-APP-012-android-tras-eliminar.png>)

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
  "suite": "B2C-50 APP",
  "tc_file": "Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-50 APP Test Cases.xlsx",
  "title": "B2C-50 (app Android) - Mensaje de avance de promoción Combina y Completa - Evidencias QA",
  "updated_at": "2026-11-03"
 },
 "history": {
  "2026-11-03": [
   "TC-B2C50-APP-001",
   "TC-B2C50-APP-004",
   "TC-B2C50-APP-005",
   "TC-B2C50-APP-006",
   "TC-B2C50-APP-007",
   "TC-B2C50-APP-008",
   "TC-B2C50-APP-009",
   "TC-B2C50-APP-010",
   "TC-B2C50-APP-012"
  ]
 },
 "results": [
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "El shelf muestra \"Te faltan N para la promo >\" con N = {CANTIDAD_PROMO_COMBINA} − 1 y el CTA \"›\".",
   "form_factor": "app",
   "id": "TC-B2C50-APP-001",
   "name": "Verificar que un producto con promo Combina incompleta muestra Te faltan N con CTA en el carro [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): la precondición usa {CANTIDAD_PROMO_COMBINA} = 3, pero la promo del SKU {SKU_COMBINA_PROMO} (000000000000666200-UN) es «Lleva 2 unidades por Monto»: con 1 unidad el carro muestra «Te faltan 1 para la promo. Ver productos combinables» y no «Te faltan 2». El N de la data no coincide con la promo real. Falta corregir {CANTIDAD_PROMO_COMBINA} o el SKU (lo hace el equipo de data).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene {SKU_COMBINA_PROMO} x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere {CANTIDAD_PROMO_COMBINA} unidades",
   "screenshots": [
    {
     "caption": "TC B2C50 APP 001 android qty1 combina",
     "file": "TC-B2C50-APP-001-android-qty1-combina.png"
    }
   ],
   "spec": "tests-app/B2C-50.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario revisa el shelf de {SKU_COMBINA_PROMO}.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_COMBINA_PROMO} = TBD\n- {CANTIDAD_PROMO_COMBINA} = TBD"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "El shelf muestra \"Te faltan 2 para la promo\" sin CTA \"›\".\nEs solo un mensaje y no abre un modal",
   "form_factor": "app",
   "id": "TC-B2C50-APP-004",
   "name": "Verificar que un producto con promo de tipo \"Completa la promo\", incompleta, muestra Te faltan N sin CTA en el carro [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Carro con 1 unidad de {SKU_COMPLETA_PROMO_3X2}: «Te faltan 2 para la promo», sin CTA «Ver productos combinables».",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene {SKU_COMPLETA_PROMO_3X2} x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades",
   "screenshots": [
    {
     "caption": "TC B2C50 APP 004 android qty1 3x2",
     "file": "TC-B2C50-APP-004-android-qty1-3x2.png"
    }
   ],
   "spec": "tests-app/B2C-50.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario revisa el shelf de {SKU_COMPLETA_PROMO_3X2}.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_COMPLETA_PROMO_3X2} = TBD"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "La cantidad pasa a 2 y el mensaje cambia de inmediato a \"Te faltan 1 para la promo\" sin recargar la página.",
   "form_factor": "app",
   "id": "TC-B2C50-APP-005",
   "name": "Verificar que al sumar una unidad el contador Te faltan N baja en 1 sin recargar [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Al sumar una unidad la cantidad pasa a 2 un. y el mensaje cambia a «Te faltan 1 para la promo» sin recargar.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene {SKU_COMPLETA_PROMO_3X2} x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades",
   "screenshots": [
    {
     "caption": "TC B2C50 APP 005 android qty2 3x2",
     "file": "TC-B2C50-APP-005-android-qty2-3x2.png"
    }
   ],
   "spec": "tests-app/B2C-50.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca el control + de {SKU_COMPLETA_PROMO_3X2}.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_COMPLETA_PROMO_3X2} = TBD"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "El mensaje \"Te faltan N\" desaparece y el shelf muestra \"Llevas la promo ✓\".",
   "form_factor": "app",
   "id": "TC-B2C50-APP-006",
   "name": "Verificar que al completar la promo el mensaje cambia a Llevas la promo [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Con 3 unidades desaparece «Te faltan N» y el ítem muestra «Llevas la promo ✓» en verde.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene {SKU_COMPLETA_PROMO_3X2} x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades",
   "screenshots": [
    {
     "caption": "TC B2C50 APP 006 android qty3 3x2",
     "file": "TC-B2C50-APP-006-android-qty3-3x2.png"
    }
   ],
   "spec": "tests-app/B2C-50.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca el control + de {SKU_COMPLETA_PROMO_3X2} hasta llegar a 3 unidades.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_COMPLETA_PROMO_3X2} = TBD"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "El precio unitario de {SKU_COMPLETA_PROMO_3X2} se recalcula con el descuento de la promo 3x2 aplicado a las 3 unidades.",
   "form_factor": "app",
   "id": "TC-B2C50-APP-007",
   "name": "Verificar que al completar la promo el precio unitario se recalcula con el descuento [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Esperado: al completar la promo el precio unitario se recalcula con el descuento 3x2 aplicado a las 3 unidades. Obtenido: con 3 unidades el ítem sigue mostrando «$2.450 c/u» y «($18.284 x Kg)» sin cambio; solo el Subtotal refleja el descuento ($4.900 en lugar de $7.350). Bug: B2C-1453.",
   "observed": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Esperado: al completar la promo el precio unitario se recalcula con el descuento 3x2 aplicado a las 3 unidades. Obtenido: con 3 unidades el ítem sigue mostrando «$2.450 c/u» y «($18.284 x Kg)» sin cambio; solo el Subtotal refleja el descuento ($4.900 en lugar de $7.350). Bug: B2C-1453.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene {SKU_COMPLETA_PROMO_3X2} x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades",
   "screenshots": [
    {
     "caption": "TC B2C50 APP 007 android qty3 precio",
     "file": "TC-B2C50-APP-007-android-qty3-precio.png"
    }
   ],
   "spec": "tests-app/B2C-50.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca el control + de {SKU_COMPLETA_PROMO_3X2} hasta llegar a 3 unidades.\n4. El usuario revisa el precio del ítem.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_COMPLETA_PROMO_3X2} = TBD"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "El shelf muestra \"Llevas la promo ✓\" y ya no muestra el mensaje \"Te faltan N\" ni el CTA \"›\".",
   "form_factor": "app",
   "id": "TC-B2C50-APP-008",
   "name": "Verificar que al completar la promo Combina desaparece el CTA de Combina [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): la precondición usa {CANTIDAD_PROMO_COMBINA} = 3, pero la promo del SKU {SKU_COMBINA_PROMO} (000000000000666200-UN) es «Lleva 2 unidades por Monto»: con 1 unidad el carro muestra «Te faltan 1 para la promo. Ver productos combinables» y no «Te faltan 2». El N de la data no coincide con la promo real. Falta corregir {CANTIDAD_PROMO_COMBINA} o el SKU (lo hace el equipo de data).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene {SKU_COMBINA_PROMO} x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere {CANTIDAD_PROMO_COMBINA} unidades",
   "screenshots": [
    {
     "caption": "TC B2C50 APP 008 android qty3 combina",
     "file": "TC-B2C50-APP-008-android-qty3-combina.png"
    }
   ],
   "spec": "tests-app/B2C-50.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca el control + de {SKU_COMBINA_PROMO} hasta llegar a {CANTIDAD_PROMO_COMBINA} unidades.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_COMBINA_PROMO} = TBD\n- {CANTIDAD_PROMO_COMBINA} = TBD"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Con 4 unidades el shelf muestra \"Te faltan 2 para la promo\" (siguiente umbral = 6).",
   "form_factor": "app",
   "id": "TC-B2C50-APP-009",
   "name": "Verificar que al superar el umbral de la promo de tipo \"Completa la promo\" el contador inicia un nuevo ciclo [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Con 4 unidades el ítem muestra «Te faltan 2 para la promo» (siguiente umbral 6).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene {SKU_COMPLETA_PROMO_3X2} x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades",
   "screenshots": [
    {
     "caption": "TC B2C50 APP 009 android qty4 3x2",
     "file": "TC-B2C50-APP-009-android-qty4-3x2.png"
    }
   ],
   "spec": "tests-app/B2C-50.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca el control + de {SKU_COMPLETA_PROMO_3X2} hasta llegar a 4 unidades.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_COMPLETA_PROMO_3X2} = TBD"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "El shelf vuelve a mostrar \"Te faltan N para la promo >\" con N = (2 × {CANTIDAD_PROMO_COMBINA}) − cantidad actual.",
   "form_factor": "app",
   "id": "TC-B2C50-APP-010",
   "name": "Verificar que al superar el umbral de la promo de tipo \"Combina la promo\" el contador inicia un nuevo ciclo [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): la precondición usa {CANTIDAD_PROMO_COMBINA} = 3, pero la promo del SKU {SKU_COMBINA_PROMO} (000000000000666200-UN) es «Lleva 2 unidades por Monto»: con 1 unidad el carro muestra «Te faltan 1 para la promo. Ver productos combinables» y no «Te faltan 2». El N de la data no coincide con la promo real. Falta corregir {CANTIDAD_PROMO_COMBINA} o el SKU (lo hace el equipo de data).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene {SKU_COMBINA_PROMO} x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere {CANTIDAD_PROMO_COMBINA} unidades",
   "screenshots": [
    {
     "caption": "TC B2C50 APP 010 android qty4 combina",
     "file": "TC-B2C50-APP-010-android-qty4-combina.png"
    }
   ],
   "spec": "tests-app/B2C-50.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca el control + de {SKU_COMBINA_PROMO} hasta llegar a {CANTIDAD_PROMO_COMBINA} + 1 unidades.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_COMBINA_PROMO} = TBD\n- {CANTIDAD_PROMO_COMBINA} = TBD"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "El mensaje \"Te faltan N para la promo\" desaparece junto con el producto y {SKU_VALID_001} no muestra mensaje de promo.",
   "form_factor": "app",
   "id": "TC-B2C50-APP-012",
   "name": "Verificar que al eliminar los productos de la promo el mensaje desaparece [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Al eliminar {SKU_COMPLETA_PROMO_3X2} el mensaje «Te faltan 2 para la promo» desaparece con el producto y {SKU_VALID_001} queda sin mensaje de promo.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene {SKU_COMPLETA_PROMO_3X2} x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades\n- El carro también contiene {SKU_VALID_001} (sin promo)",
   "screenshots": [
    {
     "caption": "TC B2C50 APP 012 android antes de eliminar",
     "file": "TC-B2C50-APP-012-android-antes-de-eliminar.png"
    },
    {
     "caption": "TC B2C50 APP 012 android tras eliminar",
     "file": "TC-B2C50-APP-012-android-tras-eliminar.png"
    }
   ],
   "spec": "tests-app/B2C-50.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario elimina {SKU_COMPLETA_PROMO_3X2} del carro con el ícono de eliminar.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_COMPLETA_PROMO_3X2} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN"
  }
 ]
}
-->
