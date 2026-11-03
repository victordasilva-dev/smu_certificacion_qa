# B2C-44 (app Android) - Shelves de carro y mecánicas de promociones - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-44 APP |
| Última actualización | 2026-11-03 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Dispositivo Android | dispositivo por ADB |
| Origen de los TC | Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-44 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Rechazado | 9 |
| Aprobado | 5 |
| Bloqueado Data | 3 |
| **Total** | **17** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-03 | 9 | TC-B2C44-APP-005, TC-B2C44-APP-008, TC-B2C44-APP-009, TC-B2C44-APP-010, TC-B2C44-APP-012, TC-B2C44-APP-013, TC-B2C44-APP-014, TC-B2C44-APP-015, TC-B2C44-APP-017 |
| 2026-10-22 | 17 | TC-B2C44-APP-001, TC-B2C44-APP-002, TC-B2C44-APP-003, TC-B2C44-APP-004, TC-B2C44-APP-005, TC-B2C44-APP-006, TC-B2C44-APP-007, TC-B2C44-APP-008, TC-B2C44-APP-009, TC-B2C44-APP-010, TC-B2C44-APP-011, TC-B2C44-APP-012, TC-B2C44-APP-013, TC-B2C44-APP-014, TC-B2C44-APP-015, TC-B2C44-APP-016, TC-B2C44-APP-017 |

## Detalle por caso de prueba

### TC-B2C44-APP-001 - Verificar que el shelf de un ítem sin promoción muestra todos sus elementos [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene {SKU_VALID_001} x 2 (sin promociones)

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UNICHAR(

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_VALID_001}.
4. El usuario revisa cada elemento del shelf.

**Resultado esperado**

El shelf muestra imagen 90x90, "Marca | Nombre", precio unitario "$X.XXX c/u", cantidad "N un." alineada a la derecha, controles de cantidad e ícono lápiz + link "Agregar instrucciones".

**Resultado obtenido**

El ítem muestra imagen, «Super Pollo | Albondigas…», «$2.490 c/u», «($8.300 x Kg)», «2 un.» a la derecha y los controles «−» y «+»; no muestra el ícono de lápiz ni el link «Agregar instrucciones».

**Observación**

Esperado: el shelf muestra imagen, «Marca | Nombre», precio, cantidad, controles e ícono lápiz + link «Agregar instrucciones». Obtenido: todo está salvo el ícono de lápiz y el link «Agregar instrucciones». Bug: B2C-1308.

**Evidencia**

![Paso 3 — mi carro con los productos](<B2C-44 APP Evidencias/TC-B2C44-APP-001-android-p03-mi-carro-con-los-productos.png>)

![Estado final](<B2C-44 APP Evidencias/TC-B2C44-APP-001-android.png>)

---

### TC-B2C44-APP-002 - Verificar que un nombre de producto largo se trunca con puntos suspensivos [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene {SKU_NOMBRE_LARGO}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_NOMBRE_LARGO} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_NOMBRE_LARGO}.
4. El usuario revisa el nombre del producto.

**Resultado esperado**

El texto "Marca | Nombre" se muestra truncado con "…" sin desbordar el shelf.

**Resultado obtenido**

El nombre largo de {SKU_NOMBRE_LARGO} se trunca con «…» sin desbordar el shelf.

**Evidencia**

![Paso 3 — mi carro con los productos](<B2C-44 APP Evidencias/TC-B2C44-APP-002-android-p03-mi-carro-con-los-productos.png>)

![Estado final](<B2C-44 APP Evidencias/TC-B2C44-APP-002-android.png>)

---

### TC-B2C44-APP-003 - Verificar que un pesable muestra la cantidad en kg en el shelf [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene {SKU_PESABLE} con 1 kg

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_PESABLE} = 000000000000037972-KG

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_PESABLE}.
4. El usuario revisa la cantidad del ítem.

**Resultado esperado**

La cantidad se muestra como "1 kg." alineada a la derecha.

**Resultado obtenido**

El pesable muestra la cantidad «1 un.» en lugar de «1 kg.».

**Observación**

Esperado: la cantidad de un pesable se muestra como «1 kg.» alineada a la derecha. Obtenido: «1 un.» ({SKU_PESABLE}, Mangos granel 500 g; también con Kiwi bolsa 1 Kg). Bug: B2C-1309.

**Evidencia**

![Paso 3 — mi carro con los productos](<B2C-44 APP Evidencias/TC-B2C44-APP-003-android-p03-mi-carro-con-los-productos.png>)

![Estado final](<B2C-44 APP Evidencias/TC-B2C44-APP-003-android.png>)

---

### TC-B2C44-APP-004 - Verificar que un invitado ve Agregar instrucciones y al tocarlo se abre el modal de instrucciones [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene {SKU_VALID_001} sin instrucciones

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_VALID_001}.
4. El usuario toca el link "Agregar instrucciones".

**Resultado esperado**

Se muestra el ícono lápiz + link gris "Agregar instrucciones" y al presionarlo se abre el modal "¿Te gustaría algo en especial?" (B2C-45).

**Resultado obtenido**

El ítem del carro no muestra el link «Agregar instrucciones», por lo que no se puede abrir el modal «¿Te gustaría algo en especial?».

**Observación**

Esperado: ícono lápiz + link gris «Agregar instrucciones» que abre el modal «¿Te gustaría algo en especial?». Obtenido: el ítem no tiene el link. Bug: B2C-1308 (mismo defecto que APP-001).

**Evidencia**

![Paso 3 — mi carro con los productos](<B2C-44 APP Evidencias/TC-B2C44-APP-004-android-p03-mi-carro-con-los-productos.png>)

![Estado final](<B2C-44 APP Evidencias/TC-B2C44-APP-004-android.png>)

---

### TC-B2C44-APP-005 - Verificar que un ítem con porcentaje de descuento muestra badge, precio final y precio anterior [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene {SKU_PROM_PCT_DESCUENTO} (promo de precio con descuento vigente en BM)

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_PROM_PCT_DESCUENTO} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_PROM_PCT_DESCUENTO}.
4. El usuario revisa el área de precio del ítem.

**Resultado esperado**

El área de precio muestra el badge amarillo "X%", el precio con descuento en negro semibold con su PPUM y "Antes:" con el precio original tachado y su PPUM.

**Resultado obtenido**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Esperado: badge amarillo «X%», precio con descuento en negro semibold con su PPUM y «Antes:» con el precio original tachado y su PPUM. Obtenido (Kiwi 10%): badge amarillo «10%» y «$2.601 ($2.601 x Kg)», pero el precio con descuento sale en rojo y «Antes: $2.890» tachado va sin PPUM. Bug: B2C-1454.

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Esperado: badge amarillo «X%», precio con descuento en negro semibold con su PPUM y «Antes:» con el precio original tachado y su PPUM. Obtenido (Kiwi 10%): badge amarillo «10%» y «$2.601 ($2.601 x Kg)», pero el precio con descuento sale en rojo y «Antes: $2.890» tachado va sin PPUM. Bug: B2C-1454.

**Evidencia**

![TC B2C44 APP 005 android item SKU PROM PCT DESCUENTO](<B2C-44 APP Evidencias/TC-B2C44-APP-005-android-item-SKU_PROM_PCT_DESCUENTO.png>)

---

### TC-B2C44-APP-006 - Verificar que un ítem con promoción de precio fijo muestra precio final y precio anterior [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene {SKU_PROM_PRECIO_FIJO} (promo de precio fijo vigente en BM)

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_PROM_PRECIO_FIJO} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_PROM_PRECIO_FIJO}.
4. El usuario revisa el área de precio del ítem.

**Resultado esperado**

El área de precio muestra el badge, el precio fijo de la promo en negro semibold con su PPUM y "Antes:" con el precio original tachado.

**Resultado obtenido**

El ítem con precio fijo muestra el badge, el precio fijo de la promo y «Antes:» con el precio original tachado.

**Evidencia**

![Paso 3 — mi carro con los productos](<B2C-44 APP Evidencias/TC-B2C44-APP-006-android-p03-mi-carro-con-los-productos.png>)

![Estado final](<B2C-44 APP Evidencias/TC-B2C44-APP-006-android.png>)

---

### TC-B2C44-APP-007 - Verificar que un ítem con NxM incompleto muestra precio sin badge y el mensaje rojo Te faltan N [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene {SKU_PROM_NxM} x 1 (promo NxM vigente sin completar)

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_PROM_NxM} = 000000000641229002-UNICHAR(

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_PROM_NxM}.
4. El usuario revisa el área de precio del ítem.

**Resultado esperado**

Se muestra el precio unitario sin badge ni precio tachado y debajo el mensaje en rojo "Te faltan N para la promo".

**Resultado obtenido**

El ítem con NxM incompleto muestra el precio unitario sin badge ni precio tachado y el mensaje rojo «Te faltan N para la promo».

**Evidencia**

![Paso 3 — mi carro con los productos](<B2C-44 APP Evidencias/TC-B2C44-APP-007-android-p03-mi-carro-con-los-productos.png>)

![Estado final](<B2C-44 APP Evidencias/TC-B2C44-APP-007-android.png>)

---

### TC-B2C44-APP-008 - Verificar que un ítem con precio Unipay muestra el precio regular y el tag Unipay [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene {SKU_UNIPAY_001} (promo Unipay vigente, sin otras promociones)

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_UNIPAY_001} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_UNIPAY_001}.
4. El usuario revisa el área de precio del ítem.

**Resultado esperado**

Se muestra "$X.XXX c/u" en negro y debajo el tag verde agua con ícono Unipay y "$Y.YYY c/u" en verde oscuro (Y < X), sin badge ni precio tachado.

**Resultado obtenido**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Esperado: el carro muestra el precio/subtotal Unipay (tag con ícono y «Subtotal con Unipay»). Obtenido: el ítem {SKU_UNIPAY_001} (Quix, con precio Unipay $4.275 en su PDP) se ve solo como «$4.750 c/u» sin tag Unipay ni precio Unipay. El SKU sí tiene precio Unipay en su PDP. Bug: B2C-1454.

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Esperado: el carro muestra el precio/subtotal Unipay (tag con ícono y «Subtotal con Unipay»). Obtenido: el ítem {SKU_UNIPAY_001} (Quix, con precio Unipay $4.275 en su PDP) se ve solo como «$4.750 c/u» sin tag Unipay ni precio Unipay. El SKU sí tiene precio Unipay en su PDP. Bug: B2C-1454.

**Evidencia**

![TC B2C44 APP 008 android item SKU UNIPAY 001](<B2C-44 APP Evidencias/TC-B2C44-APP-008-android-item-SKU_UNIPAY_001.png>)

---

### TC-B2C44-APP-009 - Verificar que un ítem con descuento y promoción de medio de pago muestra ambas en orden [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene {SKU_PCT_Y_UNIPAY} (promo % y promo Unipay vigentes)

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_PCT_Y_UNIPAY} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_PCT_Y_UNIPAY}.
4. El usuario revisa el área de precio del ítem.

**Resultado esperado**

Se muestran en orden: badge % + precio con descuento + PPUM; tag del medio de pago con ícono + precio + PPUM; "Antes: $XX.XXX" tachado.

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): la precondición pide {SKU_PCT_Y_UNIPAY} (000000000000668141-UN) con promo % y Unipay vigentes; en el carro solo se ve «$3.990 c/u ($8 x ml)», sin badge % ni precio Unipay. No se puede confirmar que ese SKU tenga ambas promociones en este ambiente. Falta confirmar/cargar el SKU (lo hace el equipo de data).

**Evidencia**

![TC B2C44 APP 009 android item SKU PCT Y UNIPAY](<B2C-44 APP Evidencias/TC-B2C44-APP-009-android-item-SKU_PCT_Y_UNIPAY.png>)

---

### TC-B2C44-APP-010 - Verificar que un ítem con NxM incompleto y precio Unipay muestra ambas promociones en orden [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene {SKU_NXM_Y_UNIPAY} x 1 (NxM sin completar y promo Unipay vigentes)

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_NXM_Y_UNIPAY} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_NXM_Y_UNIPAY}.
4. El usuario revisa el área de precio del ítem.

**Resultado esperado**

Se muestran en orden: "$X.XXX c/u" en negro, tag del medio de pago (ícono + precio) y el mensaje rojo "Te faltan N para la promo".

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): el TC declara el token {SKU_NXM_Y_UNIPAY} sin valor en el Excel de data. Falta cargar ese SKU (lo carga el equipo de data).

---

### TC-B2C44-APP-011 - Verificar que un producto por peso muestra el precio por unidad de medida entre paréntesis [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene {SKU_PESABLE} con 1 kg

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_PESABLE} = 000000000000037972-KG

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_PESABLE}.
4. El usuario revisa el área de precio del ítem.

**Resultado esperado**

El shelf muestra el PPUM entre paréntesis, por ejemplo "($2.990 x Kg)".

**Resultado obtenido**

El ítem pesable muestra el PPUM entre paréntesis.

**Evidencia**

![Paso 3 — mi carro con los productos](<B2C-44 APP Evidencias/TC-B2C44-APP-011-android-p03-mi-carro-con-los-productos.png>)

![Estado final](<B2C-44 APP Evidencias/TC-B2C44-APP-011-android.png>)

---

### TC-B2C44-APP-012 - Verificar que con descuento y medio de pago el PPUM se muestra en ambos precios [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene {SKU_PESABLE_PCT_Y_UNIPAY} (pesable con promo % y promo Unipay vigentes)

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_PESABLE_PCT_Y_UNIPAY} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario ubica el shelf de {SKU_PESABLE_PCT_Y_UNIPAY}.
4. El usuario revisa el área de precio del ítem.

**Resultado esperado**

El precio con descuento y el precio del medio de pago muestran cada uno su propio PPUM entre paréntesis.

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): la precondición pide un pesable con promo % y Unipay ({SKU_PESABLE_PCT_Y_UNIPAY} = Kiwi bolsa 1 Kg); en el carro solo se ve el descuento 10% («$2.601», «Antes: $2.890») y ningún precio Unipay. No se puede verificar el PPUM del precio Unipay. Falta un pesable con ambas promociones (lo carga el equipo de data).

**Evidencia**

![TC B2C44 APP 012 android item pesable](<B2C-44 APP Evidencias/TC-B2C44-APP-012-android-item-pesable.png>)

---

### TC-B2C44-APP-013 - Verificar que la tarjeta de subtotales muestra Subtotal y Subtotal con Unipay con su ícono [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene {SKU_UNIPAY_001} x 1 (promo Unipay vigente) y {SKU_VALID_001} x 1 (sin promociones)

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_UNIPAY_001} = TBD
- {SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario ubica la tarjeta de subtotales.
4. El usuario revisa cada línea de la tarjeta.

**Resultado esperado**

La tarjeta de subtotales muestra la línea "Subtotal" con su monto "$XX.XXX" y la línea "Subtotal con Unipay" con el ícono de tarjeta Unipay y su monto "$XX.XXX".

**Resultado obtenido**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Esperado: el carro muestra el precio/subtotal Unipay (tag con ícono y «Subtotal con Unipay»). Obtenido: la tarjeta de subtotales muestra solo «Subtotal $7.240»; no existe la línea «Subtotal con Unipay» con su ícono. El SKU sí tiene precio Unipay en su PDP. Bug: B2C-1454.

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Esperado: el carro muestra el precio/subtotal Unipay (tag con ícono y «Subtotal con Unipay»). Obtenido: la tarjeta de subtotales muestra solo «Subtotal $7.240»; no existe la línea «Subtotal con Unipay» con su ícono. El SKU sí tiene precio Unipay en su PDP. Bug: B2C-1454.

**Evidencia**

![TC B2C44 APP 013 android subtotales 1 unipay](<B2C-44 APP Evidencias/TC-B2C44-APP-013-android-subtotales-1-unipay.png>)

---

### TC-B2C44-APP-014 - Verificar que el monto Subtotal con Unipay descuenta solo el ahorro de los ítems Unipay [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene {SKU_UNIPAY_001} x 2 (promo Unipay vigente) y {SKU_VALID_001} x 1 (sin promociones)

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_UNIPAY_001} = TBD
- {SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario anota el precio regular (X) y el precio Unipay (Y) del shelf de {SKU_UNIPAY_001} y el precio (P) de {SKU_VALID_001}.
4. El usuario revisa los montos de la tarjeta de subtotales.

**Resultado esperado**

"Subtotal" = 2·X + P (precios regulares). "Subtotal con Unipay" = 2·Y + P, es decir, el Subtotal menos el ahorro Unipay 2·(X − Y); el producto sin promoción se suma a precio normal. El Subtotal con Unipay es menor que el Subtotal.

**Resultado obtenido**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Esperado: el carro muestra el precio/subtotal Unipay (tag con ícono y «Subtotal con Unipay»). Obtenido: con 2 unidades Unipay el carro muestra solo «Subtotal $11.990»; no existe «Subtotal con Unipay». El SKU sí tiene precio Unipay en su PDP. Bug: B2C-1454.

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Esperado: el carro muestra el precio/subtotal Unipay (tag con ícono y «Subtotal con Unipay»). Obtenido: con 2 unidades Unipay el carro muestra solo «Subtotal $11.990»; no existe «Subtotal con Unipay». El SKU sí tiene precio Unipay en su PDP. Bug: B2C-1454.

**Evidencia**

![TC B2C44 APP 014 android subtotales 2 unipay](<B2C-44 APP Evidencias/TC-B2C44-APP-014-android-subtotales-2-unipay.png>)

---

### TC-B2C44-APP-015 - Verificar que los subtotales se recalculan al aumentar la cantidad de un ítem Unipay [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene {SKU_UNIPAY_001} x 1 (promo Unipay vigente) y {SKU_VALID_001} x 1 (sin promociones)

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_UNIPAY_001} = TBD
- {SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario anota los montos de "Subtotal" y "Subtotal con Unipay".
4. El usuario toca "+" en el shelf de {SKU_UNIPAY_001} (cantidad 1 → 2).
5. El usuario revisa nuevamente la tarjeta de subtotales.

**Resultado esperado**

Sin recargar la pantalla, "Subtotal" aumenta en X (precio regular) y "Subtotal con Unipay" aumenta en Y (precio Unipay) de {SKU_UNIPAY_001}; ambas líneas siguen visibles con el ícono Unipay.

**Resultado obtenido**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Esperado: el carro muestra el precio/subtotal Unipay (tag con ícono y «Subtotal con Unipay»). Obtenido: al aumentar la cantidad del ítem Unipay solo se recalcula «Subtotal»; no existe «Subtotal con Unipay». El SKU sí tiene precio Unipay en su PDP. Bug: B2C-1454.

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Esperado: el carro muestra el precio/subtotal Unipay (tag con ícono y «Subtotal con Unipay»). Obtenido: al aumentar la cantidad del ítem Unipay solo se recalcula «Subtotal»; no existe «Subtotal con Unipay». El SKU sí tiene precio Unipay en su PDP. Bug: B2C-1454.

**Evidencia**

![TC B2C44 APP 015 android tras aumentar](<B2C-44 APP Evidencias/TC-B2C44-APP-015-android-tras-aumentar.png>)

---

### TC-B2C44-APP-016 - Verificar que sin ítems con descuento Unipay no se muestra Subtotal con Unipay [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene {SKU_VALID_001} x 2 (sin promociones, sin promo Unipay)

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_UNIPAY_001} = TBD
- {SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario ubica la tarjeta de subtotales.
4. El usuario revisa cada línea de la tarjeta.

**Resultado esperado**

La tarjeta de subtotales muestra solo "Subtotal" con su monto; no se muestran la línea "Subtotal con Unipay" ni el ícono de tarjeta Unipay.

**Resultado obtenido**

Con 2 un. de {SKU_VALID_001} la tarjeta muestra solo «Subtotal $4.980»; no muestra «Subtotal con Unipay» ni el ícono Unipay.

**Evidencia**

![Paso 3 — mi carro con los productos](<B2C-44 APP Evidencias/TC-B2C44-APP-016-android-p03-mi-carro-con-los-productos.png>)

![Estado final](<B2C-44 APP Evidencias/TC-B2C44-APP-016-android.png>)

---

### TC-B2C44-APP-017 - Verificar que al eliminar el único ítem Unipay desaparece Subtotal con Unipay [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-44.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene {SKU_UNIPAY_001} x 1 (promo Unipay vigente) y {SKU_VALID_001} x 1 (sin promociones)

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_UNIPAY_001} = TBD
- {SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario verifica que se muestra "Subtotal con Unipay".
4. El usuario toca el basurero en el shelf de {SKU_UNIPAY_001}.
5. El usuario revisa nuevamente la tarjeta de subtotales.

**Resultado esperado**

Sin recargar la pantalla, la tarjeta muestra solo "Subtotal" con el monto de {SKU_VALID_001}; la línea "Subtotal con Unipay" y el ícono de tarjeta Unipay desaparecen.

**Resultado obtenido**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Esperado: el carro muestra el precio/subtotal Unipay (tag con ícono y «Subtotal con Unipay»). Obtenido: no hay línea «Subtotal con Unipay» que pueda desaparecer: el carro muestra solo «Subtotal» antes y después de eliminar el ítem Unipay. El SKU sí tiene precio Unipay en su PDP. Bug: B2C-1454.

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Esperado: el carro muestra el precio/subtotal Unipay (tag con ícono y «Subtotal con Unipay»). Obtenido: no hay línea «Subtotal con Unipay» que pueda desaparecer: el carro muestra solo «Subtotal» antes y después de eliminar el ítem Unipay. El SKU sí tiene precio Unipay en su PDP. Bug: B2C-1454.

**Evidencia**

![TC B2C44 APP 017 android tras eliminar unipay](<B2C-44 APP Evidencias/TC-B2C44-APP-017-android-tras-eliminar-unipay.png>)

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
  "suite": "B2C-44 APP",
  "tc_file": "Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-44 APP Test Cases.xlsx",
  "title": "B2C-44 (app Android) - Shelves de carro y mecánicas de promociones - Evidencias QA",
  "updated_at": "2026-11-03"
 },
 "history": {
  "2026-10-22": [
   "TC-B2C44-APP-001",
   "TC-B2C44-APP-002",
   "TC-B2C44-APP-003",
   "TC-B2C44-APP-004",
   "TC-B2C44-APP-005",
   "TC-B2C44-APP-006",
   "TC-B2C44-APP-007",
   "TC-B2C44-APP-008",
   "TC-B2C44-APP-009",
   "TC-B2C44-APP-010",
   "TC-B2C44-APP-011",
   "TC-B2C44-APP-012",
   "TC-B2C44-APP-013",
   "TC-B2C44-APP-014",
   "TC-B2C44-APP-015",
   "TC-B2C44-APP-016",
   "TC-B2C44-APP-017"
  ],
  "2026-11-03": [
   "TC-B2C44-APP-005",
   "TC-B2C44-APP-008",
   "TC-B2C44-APP-009",
   "TC-B2C44-APP-010",
   "TC-B2C44-APP-012",
   "TC-B2C44-APP-013",
   "TC-B2C44-APP-014",
   "TC-B2C44-APP-015",
   "TC-B2C44-APP-017"
  ]
 },
 "results": [
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "El shelf muestra imagen 90x90, \"Marca | Nombre\", precio unitario \"$X.XXX c/u\", cantidad \"N un.\" alineada a la derecha, controles de cantidad e ícono lápiz + link \"Agregar instrucciones\".",
   "form_factor": "app",
   "id": "TC-B2C44-APP-001",
   "name": "Verificar que el shelf de un ítem sin promoción muestra todos sus elementos [App] [Guest]",
   "observation": "Esperado: el shelf muestra imagen, «Marca | Nombre», precio, cantidad, controles e ícono lápiz + link «Agregar instrucciones». Obtenido: todo está salvo el ícono de lápiz y el link «Agregar instrucciones». Bug: B2C-1308.",
   "observed": "El ítem muestra imagen, «Super Pollo | Albondigas…», «$2.490 c/u», «($8.300 x Kg)», «2 un.» a la derecha y los controles «−» y «+»; no muestra el ícono de lápiz ni el link «Agregar instrucciones».",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene {SKU_VALID_001} x 2 (sin promociones)",
   "screenshots": [
    {
     "caption": "Paso 3 — mi carro con los productos",
     "file": "TC-B2C44-APP-001-android-p03-mi-carro-con-los-productos.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C44-APP-001-android.png"
    }
   ],
   "spec": "tests-app/B2C-44.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_VALID_001}.\n4. El usuario revisa cada elemento del shelf.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UNICHAR("
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "El texto \"Marca | Nombre\" se muestra truncado con \"…\" sin desbordar el shelf.",
   "form_factor": "app",
   "id": "TC-B2C44-APP-002",
   "name": "Verificar que un nombre de producto largo se trunca con puntos suspensivos [App] [Guest]",
   "observed": "El nombre largo de {SKU_NOMBRE_LARGO} se trunca con «…» sin desbordar el shelf.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene {SKU_NOMBRE_LARGO}",
   "screenshots": [
    {
     "caption": "Paso 3 — mi carro con los productos",
     "file": "TC-B2C44-APP-002-android-p03-mi-carro-con-los-productos.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C44-APP-002-android.png"
    }
   ],
   "spec": "tests-app/B2C-44.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_NOMBRE_LARGO}.\n4. El usuario revisa el nombre del producto.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_NOMBRE_LARGO} = TBD"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "La cantidad se muestra como \"1 kg.\" alineada a la derecha.",
   "form_factor": "app",
   "id": "TC-B2C44-APP-003",
   "name": "Verificar que un pesable muestra la cantidad en kg en el shelf [App] [Guest]",
   "observation": "Esperado: la cantidad de un pesable se muestra como «1 kg.» alineada a la derecha. Obtenido: «1 un.» ({SKU_PESABLE}, Mangos granel 500 g; también con Kiwi bolsa 1 Kg). Bug: B2C-1309.",
   "observed": "El pesable muestra la cantidad «1 un.» en lugar de «1 kg.».",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene {SKU_PESABLE} con 1 kg",
   "screenshots": [
    {
     "caption": "Paso 3 — mi carro con los productos",
     "file": "TC-B2C44-APP-003-android-p03-mi-carro-con-los-productos.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C44-APP-003-android.png"
    }
   ],
   "spec": "tests-app/B2C-44.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_PESABLE}.\n4. El usuario revisa la cantidad del ítem.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_PESABLE} = 000000000000037972-KG"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "Se muestra el ícono lápiz + link gris \"Agregar instrucciones\" y al presionarlo se abre el modal \"¿Te gustaría algo en especial?\" (B2C-45).",
   "form_factor": "app",
   "id": "TC-B2C44-APP-004",
   "name": "Verificar que un invitado ve Agregar instrucciones y al tocarlo se abre el modal de instrucciones [App] [Guest]",
   "observation": "Esperado: ícono lápiz + link gris «Agregar instrucciones» que abre el modal «¿Te gustaría algo en especial?». Obtenido: el ítem no tiene el link. Bug: B2C-1308 (mismo defecto que APP-001).",
   "observed": "El ítem del carro no muestra el link «Agregar instrucciones», por lo que no se puede abrir el modal «¿Te gustaría algo en especial?».",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene {SKU_VALID_001} sin instrucciones",
   "screenshots": [
    {
     "caption": "Paso 3 — mi carro con los productos",
     "file": "TC-B2C44-APP-004-android-p03-mi-carro-con-los-productos.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C44-APP-004-android.png"
    }
   ],
   "spec": "tests-app/B2C-44.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_VALID_001}.\n4. El usuario toca el link \"Agregar instrucciones\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "El área de precio muestra el badge amarillo \"X%\", el precio con descuento en negro semibold con su PPUM y \"Antes:\" con el precio original tachado y su PPUM.",
   "form_factor": "app",
   "id": "TC-B2C44-APP-005",
   "name": "Verificar que un ítem con porcentaje de descuento muestra badge, precio final y precio anterior [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Esperado: badge amarillo «X%», precio con descuento en negro semibold con su PPUM y «Antes:» con el precio original tachado y su PPUM. Obtenido (Kiwi 10%): badge amarillo «10%» y «$2.601 ($2.601 x Kg)», pero el precio con descuento sale en rojo y «Antes: $2.890» tachado va sin PPUM. Bug: B2C-1454.",
   "observed": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Esperado: badge amarillo «X%», precio con descuento en negro semibold con su PPUM y «Antes:» con el precio original tachado y su PPUM. Obtenido (Kiwi 10%): badge amarillo «10%» y «$2.601 ($2.601 x Kg)», pero el precio con descuento sale en rojo y «Antes: $2.890» tachado va sin PPUM. Bug: B2C-1454.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene {SKU_PROM_PCT_DESCUENTO} (promo de precio con descuento vigente en BM)",
   "screenshots": [
    {
     "caption": "TC B2C44 APP 005 android item SKU PROM PCT DESCUENTO",
     "file": "TC-B2C44-APP-005-android-item-SKU_PROM_PCT_DESCUENTO.png"
    }
   ],
   "spec": "tests-app/B2C-44.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_PROM_PCT_DESCUENTO}.\n4. El usuario revisa el área de precio del ítem.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_PROM_PCT_DESCUENTO} = TBD"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "El área de precio muestra el badge, el precio fijo de la promo en negro semibold con su PPUM y \"Antes:\" con el precio original tachado.",
   "form_factor": "app",
   "id": "TC-B2C44-APP-006",
   "name": "Verificar que un ítem con promoción de precio fijo muestra precio final y precio anterior [App] [Guest]",
   "observed": "El ítem con precio fijo muestra el badge, el precio fijo de la promo y «Antes:» con el precio original tachado.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene {SKU_PROM_PRECIO_FIJO} (promo de precio fijo vigente en BM)",
   "screenshots": [
    {
     "caption": "Paso 3 — mi carro con los productos",
     "file": "TC-B2C44-APP-006-android-p03-mi-carro-con-los-productos.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C44-APP-006-android.png"
    }
   ],
   "spec": "tests-app/B2C-44.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_PROM_PRECIO_FIJO}.\n4. El usuario revisa el área de precio del ítem.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_PROM_PRECIO_FIJO} = TBD"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "Se muestra el precio unitario sin badge ni precio tachado y debajo el mensaje en rojo \"Te faltan N para la promo\".",
   "form_factor": "app",
   "id": "TC-B2C44-APP-007",
   "name": "Verificar que un ítem con NxM incompleto muestra precio sin badge y el mensaje rojo Te faltan N [App] [Guest]",
   "observed": "El ítem con NxM incompleto muestra el precio unitario sin badge ni precio tachado y el mensaje rojo «Te faltan N para la promo».",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene {SKU_PROM_NxM} x 1 (promo NxM vigente sin completar)",
   "screenshots": [
    {
     "caption": "Paso 3 — mi carro con los productos",
     "file": "TC-B2C44-APP-007-android-p03-mi-carro-con-los-productos.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C44-APP-007-android.png"
    }
   ],
   "spec": "tests-app/B2C-44.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_PROM_NxM}.\n4. El usuario revisa el área de precio del ítem.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_PROM_NxM} = 000000000641229002-UNICHAR("
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Se muestra \"$X.XXX c/u\" en negro y debajo el tag verde agua con ícono Unipay y \"$Y.YYY c/u\" en verde oscuro (Y < X), sin badge ni precio tachado.",
   "form_factor": "app",
   "id": "TC-B2C44-APP-008",
   "name": "Verificar que un ítem con precio Unipay muestra el precio regular y el tag Unipay [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Esperado: el carro muestra el precio/subtotal Unipay (tag con ícono y «Subtotal con Unipay»). Obtenido: el ítem {SKU_UNIPAY_001} (Quix, con precio Unipay $4.275 en su PDP) se ve solo como «$4.750 c/u» sin tag Unipay ni precio Unipay. El SKU sí tiene precio Unipay en su PDP. Bug: B2C-1454.",
   "observed": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Esperado: el carro muestra el precio/subtotal Unipay (tag con ícono y «Subtotal con Unipay»). Obtenido: el ítem {SKU_UNIPAY_001} (Quix, con precio Unipay $4.275 en su PDP) se ve solo como «$4.750 c/u» sin tag Unipay ni precio Unipay. El SKU sí tiene precio Unipay en su PDP. Bug: B2C-1454.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene {SKU_UNIPAY_001} (promo Unipay vigente, sin otras promociones)",
   "screenshots": [
    {
     "caption": "TC B2C44 APP 008 android item SKU UNIPAY 001",
     "file": "TC-B2C44-APP-008-android-item-SKU_UNIPAY_001.png"
    }
   ],
   "spec": "tests-app/B2C-44.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_UNIPAY_001}.\n4. El usuario revisa el área de precio del ítem.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_UNIPAY_001} = TBD"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Se muestran en orden: badge % + precio con descuento + PPUM; tag del medio de pago con ícono + precio + PPUM; \"Antes: $XX.XXX\" tachado.",
   "form_factor": "app",
   "id": "TC-B2C44-APP-009",
   "name": "Verificar que un ítem con descuento y promoción de medio de pago muestra ambas en orden [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): la precondición pide {SKU_PCT_Y_UNIPAY} (000000000000668141-UN) con promo % y Unipay vigentes; en el carro solo se ve «$3.990 c/u ($8 x ml)», sin badge % ni precio Unipay. No se puede confirmar que ese SKU tenga ambas promociones en este ambiente. Falta confirmar/cargar el SKU (lo hace el equipo de data).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene {SKU_PCT_Y_UNIPAY} (promo % y promo Unipay vigentes)",
   "screenshots": [
    {
     "caption": "TC B2C44 APP 009 android item SKU PCT Y UNIPAY",
     "file": "TC-B2C44-APP-009-android-item-SKU_PCT_Y_UNIPAY.png"
    }
   ],
   "spec": "tests-app/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_PCT_Y_UNIPAY}.\n4. El usuario revisa el área de precio del ítem.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_PCT_Y_UNIPAY} = TBD"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Se muestran en orden: \"$X.XXX c/u\" en negro, tag del medio de pago (ícono + precio) y el mensaje rojo \"Te faltan N para la promo\".",
   "form_factor": "app",
   "id": "TC-B2C44-APP-010",
   "name": "Verificar que un ítem con NxM incompleto y precio Unipay muestra ambas promociones en orden [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): el TC declara el token {SKU_NXM_Y_UNIPAY} sin valor en el Excel de data. Falta cargar ese SKU (lo carga el equipo de data).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene {SKU_NXM_Y_UNIPAY} x 1 (NxM sin completar y promo Unipay vigentes)",
   "spec": "tests-app/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_NXM_Y_UNIPAY}.\n4. El usuario revisa el área de precio del ítem.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_NXM_Y_UNIPAY} = TBD"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "El shelf muestra el PPUM entre paréntesis, por ejemplo \"($2.990 x Kg)\".",
   "form_factor": "app",
   "id": "TC-B2C44-APP-011",
   "name": "Verificar que un producto por peso muestra el precio por unidad de medida entre paréntesis [App] [Guest]",
   "observed": "El ítem pesable muestra el PPUM entre paréntesis.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene {SKU_PESABLE} con 1 kg",
   "screenshots": [
    {
     "caption": "Paso 3 — mi carro con los productos",
     "file": "TC-B2C44-APP-011-android-p03-mi-carro-con-los-productos.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C44-APP-011-android.png"
    }
   ],
   "spec": "tests-app/B2C-44.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_PESABLE}.\n4. El usuario revisa el área de precio del ítem.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_PESABLE} = 000000000000037972-KG"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "El precio con descuento y el precio del medio de pago muestran cada uno su propio PPUM entre paréntesis.",
   "form_factor": "app",
   "id": "TC-B2C44-APP-012",
   "name": "Verificar que con descuento y medio de pago el PPUM se muestra en ambos precios [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): la precondición pide un pesable con promo % y Unipay ({SKU_PESABLE_PCT_Y_UNIPAY} = Kiwi bolsa 1 Kg); en el carro solo se ve el descuento 10% («$2.601», «Antes: $2.890») y ningún precio Unipay. No se puede verificar el PPUM del precio Unipay. Falta un pesable con ambas promociones (lo carga el equipo de data).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene {SKU_PESABLE_PCT_Y_UNIPAY} (pesable con promo % y promo Unipay vigentes)",
   "screenshots": [
    {
     "caption": "TC B2C44 APP 012 android item pesable",
     "file": "TC-B2C44-APP-012-android-item-pesable.png"
    }
   ],
   "spec": "tests-app/B2C-44.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario ubica el shelf de {SKU_PESABLE_PCT_Y_UNIPAY}.\n4. El usuario revisa el área de precio del ítem.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_PESABLE_PCT_Y_UNIPAY} = TBD"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "La tarjeta de subtotales muestra la línea \"Subtotal\" con su monto \"$XX.XXX\" y la línea \"Subtotal con Unipay\" con el ícono de tarjeta Unipay y su monto \"$XX.XXX\".",
   "form_factor": "app",
   "id": "TC-B2C44-APP-013",
   "name": "Verificar que la tarjeta de subtotales muestra Subtotal y Subtotal con Unipay con su ícono [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Esperado: el carro muestra el precio/subtotal Unipay (tag con ícono y «Subtotal con Unipay»). Obtenido: la tarjeta de subtotales muestra solo «Subtotal $7.240»; no existe la línea «Subtotal con Unipay» con su ícono. El SKU sí tiene precio Unipay en su PDP. Bug: B2C-1454.",
   "observed": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Esperado: el carro muestra el precio/subtotal Unipay (tag con ícono y «Subtotal con Unipay»). Obtenido: la tarjeta de subtotales muestra solo «Subtotal $7.240»; no existe la línea «Subtotal con Unipay» con su ícono. El SKU sí tiene precio Unipay en su PDP. Bug: B2C-1454.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene {SKU_UNIPAY_001} x 1 (promo Unipay vigente) y {SKU_VALID_001} x 1 (sin promociones)",
   "screenshots": [
    {
     "caption": "TC B2C44 APP 013 android subtotales 1 unipay",
     "file": "TC-B2C44-APP-013-android-subtotales-1-unipay.png"
    }
   ],
   "spec": "tests-app/B2C-44.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario ubica la tarjeta de subtotales.\n4. El usuario revisa cada línea de la tarjeta.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_UNIPAY_001} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "\"Subtotal\" = 2·X + P (precios regulares). \"Subtotal con Unipay\" = 2·Y + P, es decir, el Subtotal menos el ahorro Unipay 2·(X − Y); el producto sin promoción se suma a precio normal. El Subtotal con Unipay es menor que el Subtotal.",
   "form_factor": "app",
   "id": "TC-B2C44-APP-014",
   "name": "Verificar que el monto Subtotal con Unipay descuenta solo el ahorro de los ítems Unipay [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Esperado: el carro muestra el precio/subtotal Unipay (tag con ícono y «Subtotal con Unipay»). Obtenido: con 2 unidades Unipay el carro muestra solo «Subtotal $11.990»; no existe «Subtotal con Unipay». El SKU sí tiene precio Unipay en su PDP. Bug: B2C-1454.",
   "observed": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Esperado: el carro muestra el precio/subtotal Unipay (tag con ícono y «Subtotal con Unipay»). Obtenido: con 2 unidades Unipay el carro muestra solo «Subtotal $11.990»; no existe «Subtotal con Unipay». El SKU sí tiene precio Unipay en su PDP. Bug: B2C-1454.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene {SKU_UNIPAY_001} x 2 (promo Unipay vigente) y {SKU_VALID_001} x 1 (sin promociones)",
   "screenshots": [
    {
     "caption": "TC B2C44 APP 014 android subtotales 2 unipay",
     "file": "TC-B2C44-APP-014-android-subtotales-2-unipay.png"
    }
   ],
   "spec": "tests-app/B2C-44.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario anota el precio regular (X) y el precio Unipay (Y) del shelf de {SKU_UNIPAY_001} y el precio (P) de {SKU_VALID_001}.\n4. El usuario revisa los montos de la tarjeta de subtotales.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_UNIPAY_001} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Sin recargar la pantalla, \"Subtotal\" aumenta en X (precio regular) y \"Subtotal con Unipay\" aumenta en Y (precio Unipay) de {SKU_UNIPAY_001}; ambas líneas siguen visibles con el ícono Unipay.",
   "form_factor": "app",
   "id": "TC-B2C44-APP-015",
   "name": "Verificar que los subtotales se recalculan al aumentar la cantidad de un ítem Unipay [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Esperado: el carro muestra el precio/subtotal Unipay (tag con ícono y «Subtotal con Unipay»). Obtenido: al aumentar la cantidad del ítem Unipay solo se recalcula «Subtotal»; no existe «Subtotal con Unipay». El SKU sí tiene precio Unipay en su PDP. Bug: B2C-1454.",
   "observed": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Esperado: el carro muestra el precio/subtotal Unipay (tag con ícono y «Subtotal con Unipay»). Obtenido: al aumentar la cantidad del ítem Unipay solo se recalcula «Subtotal»; no existe «Subtotal con Unipay». El SKU sí tiene precio Unipay en su PDP. Bug: B2C-1454.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene {SKU_UNIPAY_001} x 1 (promo Unipay vigente) y {SKU_VALID_001} x 1 (sin promociones)",
   "screenshots": [
    {
     "caption": "TC B2C44 APP 015 android tras aumentar",
     "file": "TC-B2C44-APP-015-android-tras-aumentar.png"
    }
   ],
   "spec": "tests-app/B2C-44.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario anota los montos de \"Subtotal\" y \"Subtotal con Unipay\".\n4. El usuario toca \"+\" en el shelf de {SKU_UNIPAY_001} (cantidad 1 → 2).\n5. El usuario revisa nuevamente la tarjeta de subtotales.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_UNIPAY_001} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "La tarjeta de subtotales muestra solo \"Subtotal\" con su monto; no se muestran la línea \"Subtotal con Unipay\" ni el ícono de tarjeta Unipay.",
   "form_factor": "app",
   "id": "TC-B2C44-APP-016",
   "name": "Verificar que sin ítems con descuento Unipay no se muestra Subtotal con Unipay [App] [Guest]",
   "observed": "Con 2 un. de {SKU_VALID_001} la tarjeta muestra solo «Subtotal $4.980»; no muestra «Subtotal con Unipay» ni el ícono Unipay.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene {SKU_VALID_001} x 2 (sin promociones, sin promo Unipay)",
   "screenshots": [
    {
     "caption": "Paso 3 — mi carro con los productos",
     "file": "TC-B2C44-APP-016-android-p03-mi-carro-con-los-productos.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C44-APP-016-android.png"
    }
   ],
   "spec": "tests-app/B2C-44.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario ubica la tarjeta de subtotales.\n4. El usuario revisa cada línea de la tarjeta.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_UNIPAY_001} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Sin recargar la pantalla, la tarjeta muestra solo \"Subtotal\" con el monto de {SKU_VALID_001}; la línea \"Subtotal con Unipay\" y el ícono de tarjeta Unipay desaparecen.",
   "form_factor": "app",
   "id": "TC-B2C44-APP-017",
   "name": "Verificar que al eliminar el único ítem Unipay desaparece Subtotal con Unipay [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Esperado: el carro muestra el precio/subtotal Unipay (tag con ícono y «Subtotal con Unipay»). Obtenido: no hay línea «Subtotal con Unipay» que pueda desaparecer: el carro muestra solo «Subtotal» antes y después de eliminar el ítem Unipay. El SKU sí tiene precio Unipay en su PDP. Bug: B2C-1454.",
   "observed": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Esperado: el carro muestra el precio/subtotal Unipay (tag con ícono y «Subtotal con Unipay»). Obtenido: no hay línea «Subtotal con Unipay» que pueda desaparecer: el carro muestra solo «Subtotal» antes y después de eliminar el ítem Unipay. El SKU sí tiene precio Unipay en su PDP. Bug: B2C-1454.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene {SKU_UNIPAY_001} x 1 (promo Unipay vigente) y {SKU_VALID_001} x 1 (sin promociones)",
   "screenshots": [
    {
     "caption": "TC B2C44 APP 017 android tras eliminar unipay",
     "file": "TC-B2C44-APP-017-android-tras-eliminar-unipay.png"
    }
   ],
   "spec": "tests-app/B2C-44.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario verifica que se muestra \"Subtotal con Unipay\".\n4. El usuario toca el basurero en el shelf de {SKU_UNIPAY_001}.\n5. El usuario revisa nuevamente la tarjeta de subtotales.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_UNIPAY_001} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN"
  }
 ]
}
-->
