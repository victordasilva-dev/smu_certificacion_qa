# B2C-51 APP - Bloque de precios de la PDP (Android) - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-51 APP |
| Última actualización | 2026-10-16 |
| Ejecutado por | Victor Chirinos |
| Ambiente | App Unimarc v1.0.7 (DEV) |
| Dispositivo Android | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-51 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 13 |
| Aprobado | 3 |
| **Total** | **16** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-16 | 16 | TC-B2C51-APP-001, TC-B2C51-APP-002, TC-B2C51-APP-003, TC-B2C51-APP-004, TC-B2C51-APP-005, TC-B2C51-APP-006, TC-B2C51-APP-007, TC-B2C51-APP-008, TC-B2C51-APP-009, TC-B2C51-APP-010, TC-B2C51-APP-011, TC-B2C51-APP-012, TC-B2C51-APP-013, TC-B2C51-APP-014, TC-B2C51-APP-015, TC-B2C51-APP-016 |

## Detalle por caso de prueba

### TC-B2C51-APP-001 - Verificar que sin promoción el bloque de precios muestra solo el precio lista sin tachar [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |
| Duración | 39.0 s |
| Spec | tests-app/B2C-51.spec.ts:45 |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- 000000000000652899-UN no tiene ninguna promoción activa vigente

**Data utilizada**

v1.0.7, 000000000000652899-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7, busca 000000000000652899-UN y abre su PDP.
2. El sistema carga la PDP de 000000000000652899-UN.

**Resultado esperado**

Se muestra solo el precio lista destacado, en color estándar y sin tachado, y el PPUM debajo si aplica.

**Resultado obtenido**

PDP de {SKU_SIN_PROMO} = 652899 (Salsa Carozzi bolognesa 200 g): un único precio '$990', sin tachar, sin 'Antes', sin badge ni precio de promo (no trae PPUM).

**Observación**

PDP de {SKU_SIN_PROMO} = 652899 (Salsa Carozzi bolognesa 200 g): un único precio '$990', sin tachar, sin 'Antes', sin badge ni precio de promo (no trae PPUM). La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Android · Paso 2 — pdp cargada](<B2C-51 APP Evidencias/TC-B2C51-APP-001-android-p02-pdp-cargada.png>)

![Android · Paso 3 — bloque de precios sin promocion](<B2C-51 APP Evidencias/TC-B2C51-APP-001-android-p03-bloque-de-precios-sin-promocion.png>)

![Estado final del caso](<B2C-51 APP Evidencias/TC-B2C51-APP-001-android.png>)

---

### TC-B2C51-APP-002 - Verificar que con oferta activa se muestran "Antes" tachado, badge % y precio oferta [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |
| Duración | 29.0 s |
| Spec | tests-app/B2C-51.spec.ts:61 |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- 000000000000178089-UN tiene un precio de oferta vigente

**Data utilizada**

v1.0.7, 000000000000178089-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7, busca 000000000000178089-UN y abre su PDP.
2. El sistema carga la PDP de 000000000000178089-UN.

**Resultado esperado**

Se muestran "Antes" + precio lista tachado y atenuado, el badge "XX%" en amarillo con el % = (lista − oferta) / lista × 100 redondeado al entero, el precio oferta en color de acento y el PPUM recalculado sobre el precio oferta (si aplica).

**Resultado obtenido**

PDP de {SKU_PRECIO_OFERTA} = 178089 (Mermelada Watt's 0% mora 200 g): badge '23%' con fondo amarillo, '$1.200' destacado, PPUM '($6.000 x Kg)' recalculado sobre la oferta (1.200 / 0,2 kg) y 'Antes: $1.550' con el monto tachado; 23 = (1.550 − 1.200) / 1.550 × 100 redondeado. El precio oferta se ve en el mismo color oscuro que un precio normal (el CA2 dice 'color de acento'); no se trató como defecto, igual que en la web.

**Observación**

PDP de {SKU_PRECIO_OFERTA} = 178089 (Mermelada Watt's 0% mora 200 g): badge '23%' con fondo amarillo, '$1.200' destacado, PPUM '($6.000 x Kg)' recalculado sobre la oferta (1.200 / 0,2 kg) y 'Antes: $1.550' con el monto tachado; 23 = (1.550 − 1.200) / 1.550 × 100 redondeado. El precio oferta se ve en el mismo color oscuro que un precio normal (el CA2 dice 'color de acento'); no se trató como defecto, igual que en la web. Primera pasada fallida por el script (detector de tachado y título compartido con el botón); corregido y re-ejecutado: pasó al primer intento. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Android · Paso 2 — pdp cargada](<B2C-51 APP Evidencias/TC-B2C51-APP-002-android-p02-pdp-cargada.png>)

![Android · Paso 3 — bloque de precios con oferta](<B2C-51 APP Evidencias/TC-B2C51-APP-002-android-p03-bloque-de-precios-con-oferta.png>)

![Estado final del caso](<B2C-51 APP Evidencias/TC-B2C51-APP-002-android.png>)

---

### TC-B2C51-APP-003 - Verificar que con promo NxM se muestra el precio compuesto "N por M a $X" [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- 000000000641229002-UN tiene una promoción NxM activa

**Data utilizada**

v1.0.7

**Pasos ejecutados**

1. El usuario abre la App v1.0.7, busca 000000000641229002-UN y abre su PDP.
2. El sistema carga la PDP de 000000000641229002-UN.

**Resultado esperado**

El precio principal es "<N> por <M> a $X.XXX" destacado, con el PPUM estimado según la promo, y debajo el precio unitario y el PPUM originales.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: el caso usa {SKU_PROM_NxM} pero su columna Test data solo declara {APP_BUILD}. Acción: declarar el token del SKU en la fila. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C51-APP-004 - Verificar que con promo NxPrecio se muestra "Lleva N por $X" [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- 000000000000666200-UN tiene una promoción NxPrecio activa

**Data utilizada**

v1.0.7

**Pasos ejecutados**

1. El usuario abre la App v1.0.7, busca 000000000000666200-UN y abre su PDP.
2. El sistema carga la PDP de 000000000000666200-UN.

**Resultado esperado**

El precio principal es "Lleva <N> por $X.XXX" destacado, con el PPUM estimado según la promo, y debajo el precio unitario y el PPUM originales.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: el caso usa {SKU_PROM_NxPRECIO} pero su columna Test data solo declara {APP_BUILD}. Acción: declarar el token del SKU en la fila. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C51-APP-005 - Verificar que con precio membresía se muestra un tercer precio con badge Membresía [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: PDP
- Sesión iniciada con la cuenta vhchirinos+noaddress@avatar-global.com
- 000000000000662457-UN tiene precio especial de membresía activo

**Data utilizada**

v1.0.7, contraseña de la cuenta, vhchirinos+noaddress@avatar-global.com, 000000000000662457-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7, busca 000000000000662457-UN y abre su PDP.
2. El sistema carga la PDP de 000000000000662457-UN.

**Resultado esperado**

Se muestra un tercer precio con el badge [Membresía].

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_MEMBRESIA_USER} (vhchirinos+noaddress) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar una cuenta con RUT y membresía. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C51-APP-006 - Verificar que con precio Unipay se muestra un tercer precio con badge Unipay [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- 000000000000674114-UN tiene precio especial Unipay activo

**Data utilizada**

v1.0.7, 000000000000674114-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7, busca 000000000000674114-UN y abre su PDP.
2. El sistema carga la PDP de 000000000000674114-UN.

**Resultado esperado**

Se muestra un tercer precio con el badge [Unipay].

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {SKU_PRECIO_UNIPAY} = 000000000000674114-UN (Lavalozas Quix limón 480 ml) no muestra precio Unipay en la PDP de la app (solo '$1.290' y PPUM, 2026-10-16). En cambio {SKU_PRECIO_BE} = 642688 sí muestra un tercer precio con el badge 'u' de Unipay: los tokens parecen cruzados. Acción: confirmar en BM el precio especial de cada SKU y declarar uno con precio Unipay. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Exploración 2026-10-16: PDP del SKU declarado](<B2C-51 APP Evidencias/pdp-000000000000674114-UN.png>)

---

### TC-B2C51-APP-007 - Verificar que con precio Banco Estado se muestra un tercer precio con badge Banco Estado [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- 000000000000642688-UN tiene precio especial Banco Estado activo

**Data utilizada**

v1.0.7, 000000000000642688-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7, busca 000000000000642688-UN y abre su PDP.
2. El sistema carga la PDP de 000000000000642688-UN.

**Resultado esperado**

Se muestra un tercer precio con el badge [Banco Estado].

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {SKU_PRECIO_BE} = 000000000000642688-UN (Galleta Oreo clásica 108 g) muestra en la PDP de la app un tercer precio '$757' ($6.882 x Kg) con el badge 'u' sobre fondo turquesa, que es el de Unipay, no Banco Estado. Desde la app no se puede saber si el precio configurado es Banco Estado (y entonces el badge sería un defecto) o Unipay (data equivocada); la PDP web de ese SKU no carga el producto. Acción: confirmar en BM el tipo de precio especial de 642688 o declarar un SKU con precio Banco Estado. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Exploración 2026-10-16: PDP del SKU declarado](<B2C-51 APP Evidencias/pdp-000000000000642688-UN.png>)

---

### TC-B2C51-APP-008 - Verificar que con Membresía, Unipay y Banco Estado a la vez el tercer precio es Membresía [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: PDP
- Sesión iniciada con la cuenta vhchirinos+noaddress@avatar-global.com
- 000000000000666200-UN tiene precio Membresía, Unipay y Banco Estado vigentes a la vez

**Data utilizada**

v1.0.7, contraseña de la cuenta, vhchirinos+noaddress@avatar-global.com, 000000000000666200-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7, busca 000000000000666200-UN y abre su PDP.
2. El sistema carga la PDP de 000000000000666200-UN.

**Resultado esperado**

El tercer precio corresponde a Membresía, según PriceDisplayPriority = MEMBERSHIP_FIRST (por defecto).

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_MEMBRESIA_USER} (vhchirinos+noaddress) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar una cuenta con RUT y membresía. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C51-APP-009 - Verificar que oferta + membresía muestra oferta, lista tachado y badge Membresía [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: PDP
- Sesión iniciada con la cuenta vhchirinos+noaddress@avatar-global.com
- 000000000000178089-UN tiene oferta vigente y precio de membresía

**Data utilizada**

v1.0.7, contraseña de la cuenta, vhchirinos+noaddress@avatar-global.com, 000000000000178089-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7, busca 000000000000178089-UN y abre su PDP.
2. El sistema carga la PDP de 000000000000178089-UN.

**Resultado esperado**

Precio 1: oferta en acento · Precio 2: lista tachado · Precio 3: badge Membresía; no hay más de 3 precios.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_MEMBRESIA_USER} (vhchirinos+noaddress) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar una cuenta con RUT y membresía. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C51-APP-010 - Verificar que NxM + membresía muestra el precio compuesto y el badge Membresía [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: PDP
- Sesión iniciada con la cuenta vhchirinos+noaddress@avatar-global.com
- 000000000664214001-UN tiene promo NxM y precio de membresía

**Data utilizada**

v1.0.7, contraseña de la cuenta, vhchirinos+noaddress@avatar-global.com, 000000000664214001-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7, busca 000000000664214001-UN y abre su PDP.
2. El sistema carga la PDP de 000000000664214001-UN.

**Resultado esperado**

Precio 1: N × $X.XXX destacado · Precio 3: badge Membresía; no hay más de 3 precios.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_MEMBRESIA_USER} (vhchirinos+noaddress) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar una cuenta con RUT y membresía. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C51-APP-011 - Verificar que oferta + Unipay muestra oferta, lista tachado y badge Unipay [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- 000000000000661945-UN tiene oferta vigente y precio Unipay

**Data utilizada**

v1.0.7, 000000000000661945-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7, busca 000000000000661945-UN y abre su PDP.
2. El sistema carga la PDP de 000000000000661945-UN.

**Resultado esperado**

Precio 1: oferta en acento · Precio 2: lista tachado · Precio 3: badge Unipay; no hay más de 3 precios.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {SKU_OFERTA_UNIPAY} = 000000000000661945-UN (Lavaloza Quix 1.5 L) no tiene oferta ni precio Unipay: la PDP de la app muestra solo '$4.750' y PPUM (2026-10-16; igual en la web, B2C-147). Acción: declarar un SKU con oferta y precio Unipay. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Exploración 2026-10-16: PDP del SKU declarado](<B2C-51 APP Evidencias/pdp-000000000000661945-UN.png>)

---

### TC-B2C51-APP-012 - Verificar que NxPrecio + Unipay muestra el precio compuesto y el badge Unipay [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- {SKU_NXPRECIO_UNIPAY} tiene promo NxPrecio y precio Unipay

**Data utilizada**

v1.0.7, {SKU_NXPRECIO_UNIPAY}

**Pasos ejecutados**

1. El usuario abre la App v1.0.7, busca {SKU_NXPRECIO_UNIPAY} y abre su PDP.
2. El sistema carga la PDP de {SKU_NXPRECIO_UNIPAY}.

**Resultado esperado**

Precio 1: N × $X.XXX destacado · Precio 3: badge Unipay; no hay más de 3 precios.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {SKU_NXPRECIO_UNIPAY} no tiene valor en el Excel de data. Acción: declarar un SKU con promo NxPrecio y precio Unipay. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C51-APP-013 - Verificar que "Completa la promo" muestra toasts con las unidades faltantes al sumar [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- 000000000641229002-UN Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)

**Data utilizada**

v1.0.7

**Pasos ejecutados**

1. El usuario abre la App v1.0.7, busca 000000000641229002-UN y abre su PDP.
2. El sistema carga la PDP de 000000000641229002-UN.
3. El usuario toca "Agregar" y luego "+" una vez.
4. El sistema muestra un toast indicando las unidades que faltan para la promo.

**Resultado esperado**

Con cada "+" por debajo de N se muestra un toast de progreso con las unidades que faltan para activar la promo.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: el caso usa {SKU_PROM_NxM} pero su columna Test data solo declara {APP_BUILD}. Acción: declarar el token del SKU en la fila. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C51-APP-014 - Verificar que al completar las N unidades el bloque de precios refleja la promo activa [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- 000000000641229002-UN Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)

**Data utilizada**

v1.0.7

**Pasos ejecutados**

1. El usuario abre la App v1.0.7, busca 000000000641229002-UN y abre su PDP.
2. El sistema carga la PDP de 000000000641229002-UN.
3. El usuario toca "Agregar" y luego "+" hasta alcanzar las N unidades de la promo.
4. El sistema muestra el toast "completaste la promo" y actualiza el bloque de precios.

**Resultado esperado**

Al llegar a N unidades se muestra el toast "completaste la promo" y el bloque de precios refleja el precio promocional activo.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: el caso usa {SKU_PROM_NxM} pero su columna Test data solo declara {APP_BUILD}. Acción: declarar el token del SKU en la fila. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C51-APP-015 - Verificar que un producto con "Combina la promo" muestra el botón y abre el drawer [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |
| Duración | 42.0 s |
| Spec | tests-app/B2C-51.spec.ts:92 |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- 000000000000666200-UN tiene una promo combinable con ID terminado en CLP1

**Data utilizada**

v1.0.7, 000000000000666200-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7, busca 000000000000666200-UN y abre su PDP.
2. El sistema carga la PDP de 000000000000666200-UN.
3. El usuario toca "Combina la promo >".
4. El sistema abre el drawer de Combina la promo.

**Resultado esperado**

Se muestra "Combina la promo >" bajo el precio; al tocarlo se abre el drawer para elegir la combinación, y el stepper no muestra toasts de Completa la promo.

**Resultado obtenido**

PDP de {SKU_COMBINA_PROMO} = 666200: bajo el precio ('Lleva 2 por $12.490') está 'Combina la promo'; al tocarlo se abre el drawer con '0 / 2 productos' y las dos variantes combinables. Tras cerrarlo, 'Agregar' no muestra toasts de 'Completa la promo'. El ID de la promo (CLP1) no se puede ver desde la app.

**Observación**

PDP de {SKU_COMBINA_PROMO} = 666200: bajo el precio ('Lleva 2 por $12.490') está 'Combina la promo'; al tocarlo se abre el drawer con '0 / 2 productos' y las dos variantes combinables. Tras cerrarlo, 'Agregar' no muestra toasts de 'Completa la promo'. El ID de la promo (CLP1) no se puede ver desde la app. Primera pasada fallida por el script (detector de tachado y título compartido con el botón); corregido y re-ejecutado: pasó al primer intento. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Android · Paso 2 — pdp cargada](<B2C-51 APP Evidencias/TC-B2C51-APP-015-android-p02-pdp-cargada.png>)

![Android · Paso 4 — drawer combina la promo](<B2C-51 APP Evidencias/TC-B2C51-APP-015-android-p04-drawer-combina-la-promo.png>)

![Android · Paso 5 — stepper sin toasts de completa la promo](<B2C-51 APP Evidencias/TC-B2C51-APP-015-android-p05-stepper-sin-toasts-de-completa-la-promo.png>)

![Estado final del caso](<B2C-51 APP Evidencias/TC-B2C51-APP-015-android.png>)

---

### TC-B2C51-APP-016 - Verificar que un producto con "Completa la promo" no muestra el botón "Combina la promo" [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- 000000000641229002-UN tiene una promo NxM del mismo SKU, sin código CLP1

**Data utilizada**

v1.0.7

**Pasos ejecutados**

1. El usuario abre la App v1.0.7, busca 000000000641229002-UN y abre su PDP.
2. El sistema carga la PDP de 000000000641229002-UN.

**Resultado esperado**

No se muestra "Combina la promo" y la mecánica funciona solo con los toasts del stepper.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: el caso usa {SKU_PROM_NxM} pero su columna Test data solo declara {APP_BUILD}. Acción: declarar el token del SKU en la fila. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "devices": {
   "android": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk"
  },
  "environment": "App Unimarc v1.0.7 (DEV)",
  "executed_by": "Victor Chirinos",
  "suite": "B2C-51 APP",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-51 APP Test Cases.xlsx",
  "title": "B2C-51 APP - Bloque de precios de la PDP (Android) - Evidencias QA",
  "updated_at": "2026-10-16"
 },
 "history": {
  "2026-10-16": [
   "TC-B2C51-APP-001",
   "TC-B2C51-APP-002",
   "TC-B2C51-APP-003",
   "TC-B2C51-APP-004",
   "TC-B2C51-APP-005",
   "TC-B2C51-APP-006",
   "TC-B2C51-APP-007",
   "TC-B2C51-APP-008",
   "TC-B2C51-APP-009",
   "TC-B2C51-APP-010",
   "TC-B2C51-APP-011",
   "TC-B2C51-APP-012",
   "TC-B2C51-APP-013",
   "TC-B2C51-APP-014",
   "TC-B2C51-APP-015",
   "TC-B2C51-APP-016"
  ]
 },
 "results": [
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "duration_s": 39,
   "executed_at": "2026-10-16",
   "expected": "Se muestra solo el precio lista destacado, en color estándar y sin tachado, y el PPUM debajo si aplica.",
   "form_factor": "app",
   "id": "TC-B2C51-APP-001",
   "name": "Verificar que sin promoción el bloque de precios muestra solo el precio lista sin tachar [App] [Guest]",
   "observation": "PDP de {SKU_SIN_PROMO} = 652899 (Salsa Carozzi bolognesa 200 g): un único precio '$990', sin tachar, sin 'Antes', sin badge ni precio de promo (no trae PPUM). La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "PDP de {SKU_SIN_PROMO} = 652899 (Salsa Carozzi bolognesa 200 g): un único precio '$990', sin tachar, sin 'Antes', sin badge ni precio de promo (no trae PPUM).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- 000000000000652899-UN no tiene ninguna promoción activa vigente",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — pdp cargada",
     "file": "TC-B2C51-APP-001-android-p02-pdp-cargada.png"
    },
    {
     "caption": "Android · Paso 3 — bloque de precios sin promocion",
     "file": "TC-B2C51-APP-001-android-p03-bloque-de-precios-sin-promocion.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C51-APP-001-android.png"
    }
   ],
   "spec": "tests-app/B2C-51.spec.ts:45",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.7, busca 000000000000652899-UN y abre su PDP.\n2. El sistema carga la PDP de 000000000000652899-UN.",
   "test_data": "v1.0.7, 000000000000652899-UN"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "duration_s": 29,
   "executed_at": "2026-10-16",
   "expected": "Se muestran \"Antes\" + precio lista tachado y atenuado, el badge \"XX%\" en amarillo con el % = (lista − oferta) / lista × 100 redondeado al entero, el precio oferta en color de acento y el PPUM recalculado sobre el precio oferta (si aplica).",
   "form_factor": "app",
   "id": "TC-B2C51-APP-002",
   "name": "Verificar que con oferta activa se muestran \"Antes\" tachado, badge % y precio oferta [App] [Guest]",
   "observation": "PDP de {SKU_PRECIO_OFERTA} = 178089 (Mermelada Watt's 0% mora 200 g): badge '23%' con fondo amarillo, '$1.200' destacado, PPUM '($6.000 x Kg)' recalculado sobre la oferta (1.200 / 0,2 kg) y 'Antes: $1.550' con el monto tachado; 23 = (1.550 − 1.200) / 1.550 × 100 redondeado. El precio oferta se ve en el mismo color oscuro que un precio normal (el CA2 dice 'color de acento'); no se trató como defecto, igual que en la web. Primera pasada fallida por el script (detector de tachado y título compartido con el botón); corregido y re-ejecutado: pasó al primer intento. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "PDP de {SKU_PRECIO_OFERTA} = 178089 (Mermelada Watt's 0% mora 200 g): badge '23%' con fondo amarillo, '$1.200' destacado, PPUM '($6.000 x Kg)' recalculado sobre la oferta (1.200 / 0,2 kg) y 'Antes: $1.550' con el monto tachado; 23 = (1.550 − 1.200) / 1.550 × 100 redondeado. El precio oferta se ve en el mismo color oscuro que un precio normal (el CA2 dice 'color de acento'); no se trató como defecto, igual que en la web.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- 000000000000178089-UN tiene un precio de oferta vigente",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — pdp cargada",
     "file": "TC-B2C51-APP-002-android-p02-pdp-cargada.png"
    },
    {
     "caption": "Android · Paso 3 — bloque de precios con oferta",
     "file": "TC-B2C51-APP-002-android-p03-bloque-de-precios-con-oferta.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C51-APP-002-android.png"
    }
   ],
   "spec": "tests-app/B2C-51.spec.ts:61",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.7, busca 000000000000178089-UN y abre su PDP.\n2. El sistema carga la PDP de 000000000000178089-UN.",
   "test_data": "v1.0.7, 000000000000178089-UN"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El precio principal es \"<N> por <M> a $X.XXX\" destacado, con el PPUM estimado según la promo, y debajo el precio unitario y el PPUM originales.",
   "form_factor": "app",
   "id": "TC-B2C51-APP-003",
   "name": "Verificar que con promo NxM se muestra el precio compuesto \"N por M a $X\" [App] [Guest]",
   "observation": "Causa: el caso usa {SKU_PROM_NxM} pero su columna Test data solo declara {APP_BUILD}. Acción: declarar el token del SKU en la fila. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- 000000000641229002-UN tiene una promoción NxM activa",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7, busca 000000000641229002-UN y abre su PDP.\n2. El sistema carga la PDP de 000000000641229002-UN.",
   "test_data": "v1.0.7"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El precio principal es \"Lleva <N> por $X.XXX\" destacado, con el PPUM estimado según la promo, y debajo el precio unitario y el PPUM originales.",
   "form_factor": "app",
   "id": "TC-B2C51-APP-004",
   "name": "Verificar que con promo NxPrecio se muestra \"Lleva N por $X\" [App] [Guest]",
   "observation": "Causa: el caso usa {SKU_PROM_NxPRECIO} pero su columna Test data solo declara {APP_BUILD}. Acción: declarar el token del SKU en la fila. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- 000000000000666200-UN tiene una promoción NxPrecio activa",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7, busca 000000000000666200-UN y abre su PDP.\n2. El sistema carga la PDP de 000000000000666200-UN.",
   "test_data": "v1.0.7"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Se muestra un tercer precio con el badge [Membresía].",
   "form_factor": "app",
   "id": "TC-B2C51-APP-005",
   "name": "Verificar que con precio membresía se muestra un tercer precio con badge Membresía [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_MEMBRESIA_USER} (vhchirinos+noaddress) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar una cuenta con RUT y membresía. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- Sesión iniciada con la cuenta vhchirinos+noaddress@avatar-global.com\n- 000000000000662457-UN tiene precio especial de membresía activo",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7, busca 000000000000662457-UN y abre su PDP.\n2. El sistema carga la PDP de 000000000000662457-UN.",
   "test_data": "v1.0.7, contraseña de la cuenta, vhchirinos+noaddress@avatar-global.com, 000000000000662457-UN"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Se muestra un tercer precio con el badge [Unipay].",
   "form_factor": "app",
   "id": "TC-B2C51-APP-006",
   "name": "Verificar que con precio Unipay se muestra un tercer precio con badge Unipay [App] [Guest]",
   "observation": "Causa: {SKU_PRECIO_UNIPAY} = 000000000000674114-UN (Lavalozas Quix limón 480 ml) no muestra precio Unipay en la PDP de la app (solo '$1.290' y PPUM, 2026-10-16). En cambio {SKU_PRECIO_BE} = 642688 sí muestra un tercer precio con el badge 'u' de Unipay: los tokens parecen cruzados. Acción: confirmar en BM el precio especial de cada SKU y declarar uno con precio Unipay. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- 000000000000674114-UN tiene precio especial Unipay activo",
   "screenshots": [
    {
     "caption": "Exploración 2026-10-16: PDP del SKU declarado",
     "file": "pdp-000000000000674114-UN.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7, busca 000000000000674114-UN y abre su PDP.\n2. El sistema carga la PDP de 000000000000674114-UN.",
   "test_data": "v1.0.7, 000000000000674114-UN"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Se muestra un tercer precio con el badge [Banco Estado].",
   "form_factor": "app",
   "id": "TC-B2C51-APP-007",
   "name": "Verificar que con precio Banco Estado se muestra un tercer precio con badge Banco Estado [App] [Guest]",
   "observation": "Causa: {SKU_PRECIO_BE} = 000000000000642688-UN (Galleta Oreo clásica 108 g) muestra en la PDP de la app un tercer precio '$757' ($6.882 x Kg) con el badge 'u' sobre fondo turquesa, que es el de Unipay, no Banco Estado. Desde la app no se puede saber si el precio configurado es Banco Estado (y entonces el badge sería un defecto) o Unipay (data equivocada); la PDP web de ese SKU no carga el producto. Acción: confirmar en BM el tipo de precio especial de 642688 o declarar un SKU con precio Banco Estado. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- 000000000000642688-UN tiene precio especial Banco Estado activo",
   "screenshots": [
    {
     "caption": "Exploración 2026-10-16: PDP del SKU declarado",
     "file": "pdp-000000000000642688-UN.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7, busca 000000000000642688-UN y abre su PDP.\n2. El sistema carga la PDP de 000000000000642688-UN.",
   "test_data": "v1.0.7, 000000000000642688-UN"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El tercer precio corresponde a Membresía, según PriceDisplayPriority = MEMBERSHIP_FIRST (por defecto).",
   "form_factor": "app",
   "id": "TC-B2C51-APP-008",
   "name": "Verificar que con Membresía, Unipay y Banco Estado a la vez el tercer precio es Membresía [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_MEMBRESIA_USER} (vhchirinos+noaddress) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar una cuenta con RUT y membresía. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- Sesión iniciada con la cuenta vhchirinos+noaddress@avatar-global.com\n- 000000000000666200-UN tiene precio Membresía, Unipay y Banco Estado vigentes a la vez",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7, busca 000000000000666200-UN y abre su PDP.\n2. El sistema carga la PDP de 000000000000666200-UN.",
   "test_data": "v1.0.7, contraseña de la cuenta, vhchirinos+noaddress@avatar-global.com, 000000000000666200-UN"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Precio 1: oferta en acento · Precio 2: lista tachado · Precio 3: badge Membresía; no hay más de 3 precios.",
   "form_factor": "app",
   "id": "TC-B2C51-APP-009",
   "name": "Verificar que oferta + membresía muestra oferta, lista tachado y badge Membresía [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_MEMBRESIA_USER} (vhchirinos+noaddress) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar una cuenta con RUT y membresía. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- Sesión iniciada con la cuenta vhchirinos+noaddress@avatar-global.com\n- 000000000000178089-UN tiene oferta vigente y precio de membresía",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7, busca 000000000000178089-UN y abre su PDP.\n2. El sistema carga la PDP de 000000000000178089-UN.",
   "test_data": "v1.0.7, contraseña de la cuenta, vhchirinos+noaddress@avatar-global.com, 000000000000178089-UN"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Precio 1: N × $X.XXX destacado · Precio 3: badge Membresía; no hay más de 3 precios.",
   "form_factor": "app",
   "id": "TC-B2C51-APP-010",
   "name": "Verificar que NxM + membresía muestra el precio compuesto y el badge Membresía [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_MEMBRESIA_USER} (vhchirinos+noaddress) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar una cuenta con RUT y membresía. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- Sesión iniciada con la cuenta vhchirinos+noaddress@avatar-global.com\n- 000000000664214001-UN tiene promo NxM y precio de membresía",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7, busca 000000000664214001-UN y abre su PDP.\n2. El sistema carga la PDP de 000000000664214001-UN.",
   "test_data": "v1.0.7, contraseña de la cuenta, vhchirinos+noaddress@avatar-global.com, 000000000664214001-UN"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Precio 1: oferta en acento · Precio 2: lista tachado · Precio 3: badge Unipay; no hay más de 3 precios.",
   "form_factor": "app",
   "id": "TC-B2C51-APP-011",
   "name": "Verificar que oferta + Unipay muestra oferta, lista tachado y badge Unipay [App] [Guest]",
   "observation": "Causa: {SKU_OFERTA_UNIPAY} = 000000000000661945-UN (Lavaloza Quix 1.5 L) no tiene oferta ni precio Unipay: la PDP de la app muestra solo '$4.750' y PPUM (2026-10-16; igual en la web, B2C-147). Acción: declarar un SKU con oferta y precio Unipay. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- 000000000000661945-UN tiene oferta vigente y precio Unipay",
   "screenshots": [
    {
     "caption": "Exploración 2026-10-16: PDP del SKU declarado",
     "file": "pdp-000000000000661945-UN.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7, busca 000000000000661945-UN y abre su PDP.\n2. El sistema carga la PDP de 000000000000661945-UN.",
   "test_data": "v1.0.7, 000000000000661945-UN"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Precio 1: N × $X.XXX destacado · Precio 3: badge Unipay; no hay más de 3 precios.",
   "form_factor": "app",
   "id": "TC-B2C51-APP-012",
   "name": "Verificar que NxPrecio + Unipay muestra el precio compuesto y el badge Unipay [App] [Guest]",
   "observation": "Causa: {SKU_NXPRECIO_UNIPAY} no tiene valor en el Excel de data. Acción: declarar un SKU con promo NxPrecio y precio Unipay. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- {SKU_NXPRECIO_UNIPAY} tiene promo NxPrecio y precio Unipay",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7, busca {SKU_NXPRECIO_UNIPAY} y abre su PDP.\n2. El sistema carga la PDP de {SKU_NXPRECIO_UNIPAY}.",
   "test_data": "v1.0.7, {SKU_NXPRECIO_UNIPAY}"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Con cada \"+\" por debajo de N se muestra un toast de progreso con las unidades que faltan para activar la promo.",
   "form_factor": "app",
   "id": "TC-B2C51-APP-013",
   "name": "Verificar que \"Completa la promo\" muestra toasts con las unidades faltantes al sumar [App] [Guest]",
   "observation": "Causa: el caso usa {SKU_PROM_NxM} pero su columna Test data solo declara {APP_BUILD}. Acción: declarar el token del SKU en la fila. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- 000000000641229002-UN Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7, busca 000000000641229002-UN y abre su PDP.\n2. El sistema carga la PDP de 000000000641229002-UN.\n3. El usuario toca \"Agregar\" y luego \"+\" una vez.\n4. El sistema muestra un toast indicando las unidades que faltan para la promo.",
   "test_data": "v1.0.7"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Al llegar a N unidades se muestra el toast \"completaste la promo\" y el bloque de precios refleja el precio promocional activo.",
   "form_factor": "app",
   "id": "TC-B2C51-APP-014",
   "name": "Verificar que al completar las N unidades el bloque de precios refleja la promo activa [App] [Guest]",
   "observation": "Causa: el caso usa {SKU_PROM_NxM} pero su columna Test data solo declara {APP_BUILD}. Acción: declarar el token del SKU en la fila. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- 000000000641229002-UN Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7, busca 000000000641229002-UN y abre su PDP.\n2. El sistema carga la PDP de 000000000641229002-UN.\n3. El usuario toca \"Agregar\" y luego \"+\" hasta alcanzar las N unidades de la promo.\n4. El sistema muestra el toast \"completaste la promo\" y actualiza el bloque de precios.",
   "test_data": "v1.0.7"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "duration_s": 42,
   "executed_at": "2026-10-16",
   "expected": "Se muestra \"Combina la promo >\" bajo el precio; al tocarlo se abre el drawer para elegir la combinación, y el stepper no muestra toasts de Completa la promo.",
   "form_factor": "app",
   "id": "TC-B2C51-APP-015",
   "name": "Verificar que un producto con \"Combina la promo\" muestra el botón y abre el drawer [App] [Guest]",
   "observation": "PDP de {SKU_COMBINA_PROMO} = 666200: bajo el precio ('Lleva 2 por $12.490') está 'Combina la promo'; al tocarlo se abre el drawer con '0 / 2 productos' y las dos variantes combinables. Tras cerrarlo, 'Agregar' no muestra toasts de 'Completa la promo'. El ID de la promo (CLP1) no se puede ver desde la app. Primera pasada fallida por el script (detector de tachado y título compartido con el botón); corregido y re-ejecutado: pasó al primer intento. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "PDP de {SKU_COMBINA_PROMO} = 666200: bajo el precio ('Lleva 2 por $12.490') está 'Combina la promo'; al tocarlo se abre el drawer con '0 / 2 productos' y las dos variantes combinables. Tras cerrarlo, 'Agregar' no muestra toasts de 'Completa la promo'. El ID de la promo (CLP1) no se puede ver desde la app.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- 000000000000666200-UN tiene una promo combinable con ID terminado en CLP1",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — pdp cargada",
     "file": "TC-B2C51-APP-015-android-p02-pdp-cargada.png"
    },
    {
     "caption": "Android · Paso 4 — drawer combina la promo",
     "file": "TC-B2C51-APP-015-android-p04-drawer-combina-la-promo.png"
    },
    {
     "caption": "Android · Paso 5 — stepper sin toasts de completa la promo",
     "file": "TC-B2C51-APP-015-android-p05-stepper-sin-toasts-de-completa-la-promo.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C51-APP-015-android.png"
    }
   ],
   "spec": "tests-app/B2C-51.spec.ts:92",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.7, busca 000000000000666200-UN y abre su PDP.\n2. El sistema carga la PDP de 000000000000666200-UN.\n3. El usuario toca \"Combina la promo >\".\n4. El sistema abre el drawer de Combina la promo.",
   "test_data": "v1.0.7, 000000000000666200-UN"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "No se muestra \"Combina la promo\" y la mecánica funciona solo con los toasts del stepper.",
   "form_factor": "app",
   "id": "TC-B2C51-APP-016",
   "name": "Verificar que un producto con \"Completa la promo\" no muestra el botón \"Combina la promo\" [App] [Guest]",
   "observation": "Causa: el caso usa {SKU_PROM_NxM} pero su columna Test data solo declara {APP_BUILD}. Acción: declarar el token del SKU en la fila. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- 000000000641229002-UN tiene una promo NxM del mismo SKU, sin código CLP1",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7, busca 000000000641229002-UN y abre su PDP.\n2. El sistema carga la PDP de 000000000641229002-UN.",
   "test_data": "v1.0.7"
  }
 ]
}
-->
