# B2C-188 APP - Floating Cart (App) - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-188 APP |
| Última actualización | 2026-11-16 |
| Ejecutado por | Victor Chirinos |
| Ambiente | App Unimarc QA (cl.smu.unimarcapp.sfcc.qa, build v1.0.1) contra DEV |
| Dispositivo Android | Pixel 4 API 33 · Android 13 · emulador local |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP1/B2C-188 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 12 |
| Aprobado | 5 |
| Rechazado | 5 |
| Bloqueado | 1 |
| **Total** | **23** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-16 | 23 | TC-B2C-188-APP-002, TC-B2C-188-APP-003, TC-B2C-188-APP-004, TC-B2C-188-APP-005, TC-B2C-188-APP-006, TC-B2C-188-APP-007, TC-B2C-188-APP-008, TC-B2C-188-APP-009, TC-B2C-188-APP-010, TC-B2C-188-APP-011, TC-B2C-188-APP-012, TC-B2C-188-APP-013, TC-B2C-188-APP-014, TC-B2C-188-APP-015, TC-B2C-188-APP-016, TC-B2C-188-APP-017, TC-B2C-188-APP-018, TC-B2C-188-APP-019, TC-B2C-188-APP-020, TC-B2C-188-APP-021, TC-B2C-188-APP-022, TC-B2C-188-APP-023, TC-B2C-188-APP-024 |

## Detalle por caso de prueba

### TC-B2C-188-APP-002 - Verificar que el Floating Cart se muestra con el conteo correcto de unidades disponibles [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 4 API 33 · Android 13 · emulador local |
| Spec | tests-app/B2C-188.spec.ts |

**Precondiciones**

App iniciada. Cliente en Home, PLP, PDP o SRP. Carrito con al menos 1 producto disponible (ej. 10 unidades).

**Data utilizada**

Cuenta de comprador vhchirinos+comprador@avatar-global.com (login por correo + código OTP)

{SKU_UNITARIO} 000000000000674797-UN (Quix Lavalozas ultra concentrado 500 ml, $3.990)

**Pasos ejecutados**

1. Iniciar sesión con un usuario que tenga 10 unidades disponibles en el carrito.
2. Navegar a Home.
3. Observar la presencia y posición del Floating Cart.
4. Verificar el número visible en el componente.

**Resultado esperado**

El Floating Cart aparece anclado sobre el TabBar. El número visible en el componente es 10. El TabBar permanece visible simultáneamente.

**Resultado obtenido**

Con la cuenta de comprador y 10 unidades de {SKU_UNITARIO}, el Floating Cart muestra "10 unidades, Te faltan $20.100 para despacho GRATIS, Ir al carro" anclado sobre la TabBar, con la TabBar visible.

**Observación**

La fila no declara "Plataforma:"; se certifica solo Android (emulador Pixel 4 API 33, app ya instalada). iOS queda Pendiente.

**Evidencia**

![Android · Paso 1 — home floating cart 10 unidades](<B2C-188 APP Evidencias/TC-B2C-188-APP-002-android-p01-home-floating-cart-10-unidades.png>)

---

### TC-B2C-188-APP-003 - Verificar que el Floating Cart muestra el icono de unidades y el botón 'Ir al carro' sobre el TabBar [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 4 API 33 · Android 13 · emulador local |
| Spec | tests-app/B2C-188.spec.ts |

**Precondiciones**

App iniciada. Cliente logueado. Carrito con al menos 1 producto disponible. Floating Cart visible.

**Data utilizada**

Cuenta de comprador vhchirinos+comprador@avatar-global.com (login por correo + código OTP)

{SKU_UNITARIO} 000000000000674797-UN (Quix Lavalozas ultra concentrado 500 ml, $3.990)

**Pasos ejecutados**

1. Con el Floating Cart visible, navegar a Home.
2. Verificar los elementos del componente: icono con conteo de unidades y botón 'Ir al carro'.
3. Verificar que el Floating Cart está posicionado encima del TabBar.
4. Repetir la verificación en PLP, PDP y SRP.

**Resultado esperado**

En todas las pantallas el Floating Cart muestra: icono con el conteo de unidades del carrito, botón 'Ir al carro', componente posicionado encima del TabBar y TabBar visible simultáneamente.

**Resultado obtenido**

Home, PLP y SRP: icono, "2 unidades" e "Ir al carro" encima de la TabBar. PDP: el Floating Cart se muestra pero la TabBar no está (el componente queda en el borde inferior).

**Observación**

Esperado: en Home, PLP, PDP y SRP el Floating Cart encima del TabBar con el TabBar visible. Obtenido: en la PDP no se muestra el TabBar. Paso 4. Bug: B2C-1497. La fila no declara "Plataforma:"; se certifica solo Android (emulador Pixel 4 API 33, app ya instalada). iOS queda Pendiente.

**Evidencia**

![Android · Paso 1 — home floating cart](<B2C-188 APP Evidencias/TC-B2C-188-APP-003-android-p01-home-floating-cart.png>)

![Android · Paso 2 — plp floating cart](<B2C-188 APP Evidencias/TC-B2C-188-APP-003-android-p02-plp-floating-cart.png>)

![Android · Paso 3 — pdp floating cart](<B2C-188 APP Evidencias/TC-B2C-188-APP-003-android-p03-pdp-floating-cart.png>)

![Android · Paso 4 — srp floating cart](<B2C-188 APP Evidencias/TC-B2C-188-APP-003-android-p04-srp-floating-cart.png>)

![Android · Estado final](<B2C-188 APP Evidencias/TC-B2C-188-APP-003-android.png>)

---

### TC-B2C-188-APP-004 - Verificar que el Floating Cart refleja la quantity de productos unitarios en el conteo consolidado [App]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 4 API 33 · Android 13 · emulador local |

**Precondiciones**

App iniciada. Carrito con 1 producto unitario con quantity 3.

**Data utilizada**

{SKU_UNITARIO} 000000000000674797-UN (Quix Lavalozas ultra concentrado 500 ml, $3.990)

**Pasos ejecutados**

1. Agregar 1 producto unitario con quantity 3 al carrito.
2. Navegar a Home o PLP.
3. Observar el número visible en el Floating Cart.

**Resultado esperado**

El Floating Cart muestra 3.

**Resultado obtenido**

No se pudo armar el carro.

**Observación**

Causa: La fila no declara cuenta ni dirección de entrega, y como invitado sin dirección "Agregar" abre "Elige tu método de entrega" ("Para armar tu carro, ingresa una dirección"): el carro no se puede armar con la data declarada (verificado el 2026-11-16 en Android, en la PDP y en la vitrina del Home). Acción: declarar en la fila la cuenta o la dirección con la que se arma el carro. La fila no declara "Plataforma:"; se certifica solo Android (emulador Pixel 4 API 33, app ya instalada). iOS queda Pendiente.

**Evidencia**

![Android · Paso 1 — invitado sin direccion no puede agregar](<B2C-188 APP Evidencias/TC-B2C-188-APP-004-android-p01-invitado-sin-direccion-no-puede-agregar.png>)

---

### TC-B2C-188-APP-005 - Verificar que el Floating Cart cuenta productos pesables como 1 por ítem independiente de la quantity [App]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 4 API 33 · Android 13 · emulador local |

**Precondiciones**

App iniciada. Carrito con 1 producto pesable con quantity 2.

**Data utilizada**

{SKU_PESABLE} 000000000000037972-KG

**Pasos ejecutados**

1. Agregar 1 producto pesable con quantity 2 al carrito.
2. Navegar a Home o PLP.
3. Observar el número visible en el Floating Cart.

**Resultado esperado**

El Floating Cart muestra 1.

**Resultado obtenido**

No se pudo armar el carro.

**Observación**

Causa: La fila no declara cuenta ni dirección de entrega, y como invitado sin dirección "Agregar" abre "Elige tu método de entrega" ("Para armar tu carro, ingresa una dirección"): el carro no se puede armar con la data declarada (verificado el 2026-11-16 en Android, en la PDP y en la vitrina del Home). Acción: declarar en la fila la cuenta o la dirección con la que se arma el carro. La fila no declara "Plataforma:"; se certifica solo Android (emulador Pixel 4 API 33, app ya instalada). iOS queda Pendiente.

**Evidencia**

![Android · Paso 1 — invitado sin direccion no puede agregar](<B2C-188 APP Evidencias/TC-B2C-188-APP-005-android-p01-invitado-sin-direccion-no-puede-agregar.png>)

---

### TC-B2C-188-APP-006 - Verificar que el Floating Cart excluye productos no disponibles del conteo consolidado [App]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 4 API 33 · Android 13 · emulador local |

**Precondiciones**

App iniciada. Carrito con 1 producto unitario disponible (qty 2) y 1 producto no disponible (qty 4).

**Data utilizada**

{SKU_UNITARIO} 000000000000674797-UN (Quix Lavalozas ultra concentrado 500 ml, $3.990)

{SKU_SIN_STOCK} 000000000000029403-KG

**Pasos ejecutados**

1. Configurar el carrito con 1 producto disponible (qty 2) y 1 producto no disponible (qty 4).
2. Navegar a Home o PLP.
3. Observar el número visible en el Floating Cart.

**Resultado esperado**

El Floating Cart muestra 2. El producto no disponible no se suma al conteo aunque permanezca en el carrito.

**Resultado obtenido**

No se pudo armar el carro.

**Observación**

Causa: La fila no declara cuenta ni dirección de entrega, y como invitado sin dirección "Agregar" abre "Elige tu método de entrega" ("Para armar tu carro, ingresa una dirección"): el carro no se puede armar con la data declarada (verificado el 2026-11-16 en Android, en la PDP y en la vitrina del Home). Acción: declarar en la fila la cuenta o la dirección con la que se arma el carro. La fila no declara "Plataforma:"; se certifica solo Android (emulador Pixel 4 API 33, app ya instalada). iOS queda Pendiente.

**Evidencia**

![Android · Paso 1 — invitado sin direccion no puede agregar](<B2C-188 APP Evidencias/TC-B2C-188-APP-006-android-p01-invitado-sin-direccion-no-puede-agregar.png>)

---

### TC-B2C-188-APP-007 - Verificar que el Floating Cart actualiza el conteo al agregar un producto unitario sin recargar la app [App]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 4 API 33 · Android 13 · emulador local |

**Precondiciones**

App iniciada. Floating Cart visible con conteo inicial de 3. Cliente en PLP.

**Data utilizada**

{SKU_UNITARIO} 000000000000674797-UN (Quix Lavalozas ultra concentrado 500 ml, $3.990)

**Pasos ejecutados**

1. Con el Floating Cart mostrando conteo 3, agregar 1 producto unitario (qty 1) desde la PLP.
2. Observar el número en el Floating Cart inmediatamente después de la acción.

**Resultado esperado**

El Floating Cart muestra 4. La actualización ocurre de forma inmediata sin recargar la app.

**Resultado obtenido**

No se pudo armar el carro.

**Observación**

Causa: La fila no declara cuenta ni dirección de entrega, y como invitado sin dirección "Agregar" abre "Elige tu método de entrega" ("Para armar tu carro, ingresa una dirección"): el carro no se puede armar con la data declarada (verificado el 2026-11-16 en Android, en la PDP y en la vitrina del Home). Acción: declarar en la fila la cuenta o la dirección con la que se arma el carro. La fila no declara "Plataforma:"; se certifica solo Android (emulador Pixel 4 API 33, app ya instalada). iOS queda Pendiente.

**Evidencia**

![Android · Paso 1 — invitado sin direccion no puede agregar](<B2C-188 APP Evidencias/TC-B2C-188-APP-007-android-p01-invitado-sin-direccion-no-puede-agregar.png>)

---

### TC-B2C-188-APP-008 - Verificar que el Floating Cart actualiza el conteo al aumentar la quantity de un producto unitario [App]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 4 API 33 · Android 13 · emulador local |

**Precondiciones**

App iniciada. Floating Cart visible con conteo inicial de 5. Carrito con 1 producto unitario con qty 2.

**Data utilizada**

{SKU_UNITARIO} 000000000000674797-UN (Quix Lavalozas ultra concentrado 500 ml, $3.990)

**Pasos ejecutados**

1. Abrir el carrito o PDP del producto unitario.
2. Aumentar la quantity de 2 a 4.
3. Observar el número en el Floating Cart.

**Resultado esperado**

El Floating Cart muestra 7. La actualización es inmediata sin recarga de la app.

**Resultado obtenido**

No se pudo armar el carro.

**Observación**

Causa: La fila no declara cuenta ni dirección de entrega, y como invitado sin dirección "Agregar" abre "Elige tu método de entrega" ("Para armar tu carro, ingresa una dirección"): el carro no se puede armar con la data declarada (verificado el 2026-11-16 en Android, en la PDP y en la vitrina del Home). Acción: declarar en la fila la cuenta o la dirección con la que se arma el carro. La fila no declara "Plataforma:"; se certifica solo Android (emulador Pixel 4 API 33, app ya instalada). iOS queda Pendiente.

**Evidencia**

![Android · Paso 1 — invitado sin direccion no puede agregar](<B2C-188 APP Evidencias/TC-B2C-188-APP-008-android-p01-invitado-sin-direccion-no-puede-agregar.png>)

---

### TC-B2C-188-APP-009 - Verificar que el Floating Cart se oculta al eliminar el último producto y el conteo llega a 0 [App]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 4 API 33 · Android 13 · emulador local |

**Precondiciones**

App iniciada. Floating Cart visible. Carrito con 1 producto unitario disponible (qty 1).

**Data utilizada**

{SKU_UNITARIO} 000000000000674797-UN (Quix Lavalozas ultra concentrado 500 ml, $3.990)

**Pasos ejecutados**

1. Con el Floating Cart visible (conteo = 1), eliminar el único producto del carrito.
2. Observar si el Floating Cart permanece visible o desaparece.

**Resultado esperado**

El Floating Cart se oculta con animación de deslizamiento hacia abajo. El conteo queda en 0.

**Resultado obtenido**

No se pudo armar el carro.

**Observación**

Causa: La fila no declara cuenta ni dirección de entrega, y como invitado sin dirección "Agregar" abre "Elige tu método de entrega" ("Para armar tu carro, ingresa una dirección"): el carro no se puede armar con la data declarada (verificado el 2026-11-16 en Android, en la PDP y en la vitrina del Home). Acción: declarar en la fila la cuenta o la dirección con la que se arma el carro. La fila no declara "Plataforma:"; se certifica solo Android (emulador Pixel 4 API 33, app ya instalada). iOS queda Pendiente.

**Evidencia**

![Android · Paso 1 — invitado sin direccion no puede agregar](<B2C-188 APP Evidencias/TC-B2C-188-APP-009-android-p01-invitado-sin-direccion-no-puede-agregar.png>)

---

### TC-B2C-188-APP-010 - Verificar que la barra de progreso refleja el porcentaje de avance y el monto restante para despacho gratis [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 4 API 33 · Android 13 · emulador local |
| Spec | tests-app/B2C-188.spec.ts |

**Precondiciones**

App iniciada. Cliente logueado sin beneficio permanente de despacho gratis. Umbral personalizado aplicable (ej. $60.000 para cliente normal). Subtotal del carrito inferior al umbral. Floating Cart visible.

**Data utilizada**

Cuenta de comprador vhchirinos+comprador@avatar-global.com (login por correo + código OTP)

{SKU_UNITARIO} 000000000000674797-UN (Quix Lavalozas ultra concentrado 500 ml, $3.990)

**Pasos ejecutados**

1. Con subtotal del carrito de $30.000 y umbral $60.000, observar el Floating Cart.
2. Verificar la barra de progreso y el porcentaje de avance.
3. Verificar el monto restante indicado en el componente.

**Resultado esperado**

La barra de progreso muestra aproximadamente 50% de avance. El Floating Cart indica el monto restante para el despacho gratis (ej. $30.000). La barra y el monto son coherentes con el subtotal actual.

**Resultado obtenido**

Con 8 unidades (subtotal $31.920) el Floating Cart dice "Te faltan $28.080 para despacho GRATIS" (monto correcto sobre $60.000), pero no muestra barra de progreso: medido en píxeles, el componente es idéntico con 7%, 53% y 93% de avance.

**Observación**

Esperado: barra de progreso con el porcentaje de avance (subtotal/umbral) y el monto restante. Obtenido: solo el texto del monto restante, sin barra. Paso 2. Bug: B2C-1498. La fila no declara "Plataforma:"; se certifica solo Android (emulador Pixel 4 API 33, app ya instalada). iOS queda Pendiente.

**Evidencia**

![Android · Paso 1 — barra de progreso subtotal 31920](<B2C-188 APP Evidencias/TC-B2C-188-APP-010-android-p01-barra-de-progreso-subtotal-31920.png>)

---

### TC-B2C-188-APP-011 - Verificar que la barra de progreso se actualiza en tiempo real al modificar el carrito [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 4 API 33 · Android 13 · emulador local |
| Spec | tests-app/B2C-188.spec.ts |

**Precondiciones**

App iniciada. Cliente logueado sin beneficio permanente de despacho gratis. Floating Cart visible con barra de progreso. Subtotal inferior al umbral.

**Data utilizada**

Cuenta de comprador vhchirinos+comprador@avatar-global.com (login por correo + código OTP)

{SKU_UNITARIO} 000000000000674797-UN (Quix Lavalozas ultra concentrado 500 ml, $3.990)

**Pasos ejecutados**

1. Con subtotal inicial de $40.000 (umbral $60.000), observar barra de progreso y monto restante ($20.000).
2. Agregar al carrito un producto de $15.000.
3. Observar la barra de progreso y el monto restante en el Floating Cart.

**Resultado esperado**

La barra de progreso aumenta reflejando el nuevo subtotal ($55.000). El monto restante se actualiza a $5.000. La actualización ocurre en tiempo real sin recargar la app.

**Resultado obtenido**

De 10 a 14 unidades (subtotal $39.900 → $55.860) el monto restante se actualiza en tiempo real de $20.100 a $4.140, pero no hay barra de progreso que aumente.

**Observación**

Esperado: la barra de progreso aumenta y el monto restante se actualiza. Obtenido: el monto se actualiza ($20.100 → $4.140), no hay barra. Paso 3. Bug: B2C-1498. La fila no declara "Plataforma:"; se certifica solo Android (emulador Pixel 4 API 33, app ya instalada). iOS queda Pendiente.

**Evidencia**

![Android · Paso 1 — antes subtotal 39900](<B2C-188 APP Evidencias/TC-B2C-188-APP-011-android-p01-antes-subtotal-39900.png>)

![Android · Paso 2 — despues subtotal 55860](<B2C-188 APP Evidencias/TC-B2C-188-APP-011-android-p02-despues-subtotal-55860.png>)

---

### TC-B2C-188-APP-012 - Verificar que el umbral de despacho gratis es $60.000 para cliente sin segmento especial [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 4 API 33 · Android 13 · emulador local |
| Spec | tests-app/B2C-188.spec.ts |

**Precondiciones**

App iniciada. Cliente logueado sin segmentos especiales (cliente normal). Promociones de despacho gratis sobre monto fijo activas en SFCC. Floating Cart visible.

**Data utilizada**

Cuenta de comprador vhchirinos+comprador@avatar-global.com (login por correo + código OTP)

{SKU_UNITARIO} 000000000000674797-UN (Quix Lavalozas ultra concentrado 500 ml, $3.990)

**Pasos ejecutados**

1. Iniciar sesión con un usuario cliente normal (sin segmentos colaborador ni diamante).
2. Agregar productos al carrito con subtotal < $60.000.
3. Observar el monto indicado como umbral en el Floating Cart.

**Resultado esperado**

El Floating Cart refleja un umbral de $60.000 para el despacho gratis. La barra de progreso y el monto restante se calculan sobre $60.000.

**Resultado obtenido**

Con 5 unidades ($19.950) dice "Te faltan $40.050": el umbral aplicado es $60.000. No hay barra de progreso.

**Observación**

Esperado: umbral $60.000 con barra de progreso y monto restante. Obtenido: el monto refleja $60.000, pero no hay barra. Paso 3. Bug: B2C-1498. La fila no declara "Plataforma:"; se certifica solo Android (emulador Pixel 4 API 33, app ya instalada). iOS queda Pendiente.

**Evidencia**

![Android · Paso 1 — umbral 60000](<B2C-188 APP Evidencias/TC-B2C-188-APP-012-android-p01-umbral-60000.png>)

---

### TC-B2C-188-APP-013 - Verificar que el umbral de despacho gratis es $40.000 para cliente con segmento Colaborador [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 4 API 33 · Android 13 · emulador local |
| Spec | tests-app/B2C-188.spec.ts |

**Precondiciones**

App iniciada. Cliente logueado con segmento 'Colaborador' activo. Floating Cart visible. Subtotal del carrito inferior a $40.000.

**Data utilizada**

{COMPRADOR_COLABORADOR_USER} vhchirinos+empleado@avatar-global.com

{SKU_UNITARIO} 000000000000674797-UN (Quix Lavalozas ultra concentrado 500 ml, $3.990)

**Pasos ejecutados**

1. Iniciar sesión con un usuario de segmento colaborador.
2. Agregar productos con subtotal < $40.000.
3. Observar el umbral indicado en el Floating Cart.

**Resultado esperado**

El Floating Cart refleja un umbral de $40.000. La barra de progreso se calcula sobre $40.000. El umbral de $60.000 no aplica.

**Resultado obtenido**

Al ingresar el correo de {COMPRADOR_COLABORADOR_USER} la app abre "Crear cuenta" en vez de enviar el código: la cuenta no existe en DEV.

**Observación**

Causa: {COMPRADOR_COLABORADOR_USER} (vhchirinos+empleado@avatar-global.com) no está registrada en DEV; la app pide crear la cuenta. Acción: registrar la cuenta con segmento Colaborador o declarar otra. La fila no declara "Plataforma:"; se certifica solo Android (emulador Pixel 4 API 33, app ya instalada). iOS queda Pendiente.

**Evidencia**

![Android · Paso 1 — correo colaborador abre crear cuenta](<B2C-188 APP Evidencias/TC-B2C-188-APP-013-android-p01-correo-colaborador-abre-crear-cuenta.png>)

---

### TC-B2C-188-APP-014 - Verificar que el umbral de despacho gratis es $20.000 para cliente Diamante y combinación Colaborador+Diamante [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 4 API 33 · Android 13 · emulador local |
| Spec | tests-app/B2C-188.spec.ts |

**Precondiciones**

App iniciada. Cliente logueado con segmento 'Diamante' (y prueba separada con segmentos 'Colaborador + Diamante'). Floating Cart visible. Subtotal inferior a $20.000.

**Data utilizada**

{COMPRADOR_DIAMANTE_USER} vhchirinos+diamante@avatar-global.com

{SKU_UNITARIO} 000000000000674797-UN (Quix Lavalozas ultra concentrado 500 ml, $3.990)

**Pasos ejecutados**

1. Iniciar sesión con un usuario de segmento Diamante.
2. Agregar productos con subtotal < $20.000.
3. Observar el umbral en el Floating Cart.
4. Repetir los pasos 1–3 con un usuario de segmentos Colaborador + Diamante.

**Resultado esperado**

En ambos casos (Diamante solo y Colaborador + Diamante) el Floating Cart muestra un umbral de $20.000. La barra de progreso se calcula sobre $20.000.

**Resultado obtenido**

Con {COMPRADOR_DIAMANTE_USER} ("Hola, Miembro Diamante") el Floating Cart aplica $60.000 ("Te faltan $52.020" con 2 unidades), pero Mi cuenta la muestra como "Socio Oro": la cuenta no tiene el segmento Diamante.

**Observación**

Causa: {COMPRADOR_DIAMANTE_USER} (vhchirinos+diamante@avatar-global.com) figura en la app como "Socio Oro", no como Diamante; además el paso 4 pide una cuenta Colaborador + Diamante que la fila no declara. Acción: asignar el segmento Diamante a la cuenta y declarar la cuenta Colaborador + Diamante. La fila no declara "Plataforma:"; se certifica solo Android (emulador Pixel 4 API 33, app ya instalada). iOS queda Pendiente.

**Evidencia**

![Android · Paso 1 — umbral diamante](<B2C-188 APP Evidencias/TC-B2C-188-APP-014-android-p01-umbral-diamante.png>)

![Android · Paso 2 — mi cuenta segmento](<B2C-188 APP Evidencias/TC-B2C-188-APP-014-android-p02-mi-cuenta-segmento.png>)

![Android · Estado final](<B2C-188 APP Evidencias/TC-B2C-188-APP-014-android.png>)

---

### TC-B2C-188-APP-015 - Verificar que el Floating Cart muestra '¡Ya tienes despacho GRATIS!' y toast al alcanzar el umbral [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 4 API 33 · Android 13 · emulador local |
| Spec | tests-app/B2C-188.spec.ts |

**Precondiciones**

App iniciada. Cliente logueado sin beneficio permanente de despacho gratis. Umbral personalizado X conocido. Floating Cart visible con barra de progreso. Subtotal del carrito inferior a X.

**Data utilizada**

Cuenta de comprador vhchirinos+comprador@avatar-global.com (login por correo + código OTP)

{SKU_UNITARIO} 000000000000674797-UN (Quix Lavalozas ultra concentrado 500 ml, $3.990)

**Pasos ejecutados**

1. Con subtotal justo por debajo del umbral X, agregar un producto que lleve el subtotal a ≥ X.
2. Observar el Floating Cart inmediatamente.
3. Verificar si aparece un toast.
4. Cronometrar la visibilidad del toast.

**Resultado esperado**

El Floating Cart muestra '¡Ya tienes despacho GRATIS!' sin barra de progreso ni monto restante. Aparece un toast con icono + 'Despacho Gratis'. El toast permanece visible durante 3 segundos y luego desaparece.

**Resultado obtenido**

De 15 a 16 unidades (subtotal $59.850 → $63.840) el Floating Cart pasa a "16 unidades, ¡Ya tienes despacho GRATIS!, Ir al carro" sin monto restante, y aparece el toast "¡Despacho GRATIS!" con icono, visible ~3 s (presente a 0,8–2,5 s, ausente a 3,8 s).

**Observación**

La fila no declara "Plataforma:"; se certifica solo Android (emulador Pixel 4 API 33, app ya instalada). iOS queda Pendiente.

**Evidencia**

![Android · Paso 1 — justo bajo el umbral 59850](<B2C-188 APP Evidencias/TC-B2C-188-APP-015-android-p01-justo-bajo-el-umbral-59850.png>)

![Android · Paso 2 — al alcanzar el umbral](<B2C-188 APP Evidencias/TC-B2C-188-APP-015-android-p02-al-alcanzar-el-umbral.png>)

![Android · Paso 3 — estado despacho gratis](<B2C-188 APP Evidencias/TC-B2C-188-APP-015-android-p03-estado-despacho-gratis.png>)

---

### TC-B2C-188-APP-016 - Verificar que el Floating Cart regresa al estado de barra de progreso al caer el subtotal por debajo del umbral [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 4 API 33 · Android 13 · emulador local |
| Spec | tests-app/B2C-188.spec.ts |

**Precondiciones**

App iniciada. Floating Cart mostrando '¡Ya tienes despacho GRATIS!' (subtotal ≥ X). Cliente logueado sin beneficio permanente de despacho gratis.

**Data utilizada**

Cuenta de comprador vhchirinos+comprador@avatar-global.com (login por correo + código OTP)

{SKU_UNITARIO} 000000000000674797-UN (Quix Lavalozas ultra concentrado 500 ml, $3.990)

**Pasos ejecutados**

1. Con el Floating Cart en estado '¡Ya tienes despacho GRATIS!', eliminar productos suficientes para que el subtotal caiga por debajo del umbral X.
2. Observar el Floating Cart tras la eliminación.

**Resultado esperado**

El Floating Cart regresa al estado de barra de progreso reflejando el avance actualizado. El monto restante se muestra correctamente. El mensaje '¡Ya tienes despacho GRATIS!' ya no aparece.

**Resultado obtenido**

Con 16 unidades muestra "¡Ya tienes despacho GRATIS!"; al quitar una unidad (subtotal $59.850) vuelve a "Te faltan $150 para despacho GRATIS", pero no a una barra de progreso.

**Observación**

Esperado: regresa al estado de barra de progreso con el avance actualizado y el monto restante. Obtenido: vuelve el monto restante ($150) sin barra. Paso 2. Bug: B2C-1498. La fila no declara "Plataforma:"; se certifica solo Android (emulador Pixel 4 API 33, app ya instalada). iOS queda Pendiente.

**Evidencia**

![Android · Paso 1 — con despacho gratis](<B2C-188 APP Evidencias/TC-B2C-188-APP-016-android-p01-con-despacho-gratis.png>)

![Android · Paso 2 — bajo el umbral](<B2C-188 APP Evidencias/TC-B2C-188-APP-016-android-p02-bajo-el-umbral.png>)

---

### TC-B2C-188-APP-017 - Verificar que el Floating Cart muestra despacho gratis permanente para cliente con membresía activa [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 4 API 33 · Android 13 · emulador local |
| Spec | tests-app/B2C-188.spec.ts |

**Precondiciones**

App iniciada. Cliente logueado con beneficio permanente de despacho gratis activo (membresía u otra condición comercial configurada). Floating Cart visible.

**Data utilizada**

{COMPRADOR_MEMBRESIA_USER} vhchirinos+noaddress@avatar-global.com

{SKU_UNITARIO} 000000000000674797-UN (Quix Lavalozas ultra concentrado 500 ml, $3.990)

**Pasos ejecutados**

1. Iniciar sesión con un usuario que tenga beneficio permanente de despacho gratis.
2. Agregar productos al carrito.
3. Observar el Floating Cart con subtotales bajo, medio y alto (por encima del umbral normal).

**Resultado esperado**

El Floating Cart muestra directamente el estado 'Despacho gratis' en todos los casos. No se muestra barra de progreso ni indicación de monto restante. El estado se mantiene independientemente del subtotal del carrito.

**Resultado obtenido**

Con {COMPRADOR_MEMBRESIA_USER} la sesión se inicia, pero el carro no se puede armar: la cuenta no tiene dirección y "Agregar" pide una.

**Observación**

Causa: {COMPRADOR_MEMBRESIA_USER} (vhchirinos+noaddress@avatar-global.com) no tiene dirección de entrega y no puede armar el carro (2026-11-16); en octubre ya figuraba como "Socio Oro" sin membresía activa. Acción: declarar una cuenta con membresía activa (despacho gratis permanente) y dirección. La fila no declara "Plataforma:"; se certifica solo Android (emulador Pixel 4 API 33, app ya instalada). iOS queda Pendiente.

---

### TC-B2C-188-APP-018 - Verificar que el tap en 'Ir al carro' navega al carrito y el Floating Cart permanece visible al volver [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 4 API 33 · Android 13 · emulador local |
| Spec | tests-app/B2C-188.spec.ts |

**Precondiciones**

App iniciada. Cliente logueado. Floating Cart visible (conteo ≥ 1). Cliente en Home, PLP, PDP o SRP.

**Data utilizada**

Cuenta de comprador vhchirinos+comprador@avatar-global.com (login por correo + código OTP)

{SKU_UNITARIO} 000000000000674797-UN (Quix Lavalozas ultra concentrado 500 ml, $3.990)

**Pasos ejecutados**

1. Con el Floating Cart visible, tocar el botón 'Ir al carro'.
2. Verificar la pantalla resultante.
3. Presionar 'Volver' o navegar hacia atrás.
4. Observar el Floating Cart.

**Resultado esperado**

Al tocar 'Ir al carro' se navega a la pantalla completa del carrito. Al volver, el Floating Cart permanece visible con el mismo conteo (siempre que sea ≥ 1).

**Resultado obtenido**

"Ir al carro" abre "Mi carro" (sin Floating Cart); al volver, el Floating Cart sigue con "2 unidades".

**Observación**

La fila no declara "Plataforma:"; se certifica solo Android (emulador Pixel 4 API 33, app ya instalada). iOS queda Pendiente.

**Evidencia**

![Android · Paso 1 — home con floating cart](<B2C-188 APP Evidencias/TC-B2C-188-APP-018-android-p01-home-con-floating-cart.png>)

![Android · Paso 2 — mi carro](<B2C-188 APP Evidencias/TC-B2C-188-APP-018-android-p02-mi-carro.png>)

![Android · Paso 3 — al volver](<B2C-188 APP Evidencias/TC-B2C-188-APP-018-android-p03-al-volver.png>)

---

### TC-B2C-188-APP-019 - Verificar que el Floating Cart se muestra en Home, PLP, PDP, SRP y Mi Cuenta [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 4 API 33 · Android 13 · emulador local |
| Spec | tests-app/B2C-188.spec.ts |

**Precondiciones**

App iniciada. Cliente logueado. Carrito con conteo consolidado ≥ 1 productos disponibles.

**Data utilizada**

Cuenta de comprador vhchirinos+comprador@avatar-global.com (login por correo + código OTP)

{SKU_UNITARIO} 000000000000674797-UN (Quix Lavalozas ultra concentrado 500 ml, $3.990)

**Pasos ejecutados**

1. Con Floating Cart activo (conteo ≥ 1), navegar a Home y verificar visibilidad.
2. Navegar a PLP y verificar visibilidad.
3. Navegar a PDP y verificar visibilidad.
4. Navegar a SRP y verificar visibilidad.
5. Navegar a Mi Cuenta y verificar visibilidad.

**Resultado esperado**

El Floating Cart se muestra correctamente en todas las pantallas: Home, PLP, PDP, SRP y Mi Cuenta.

**Resultado obtenido**

El Floating Cart se muestra en Home, PLP ("Mostrar todo" de "Los más vendidos"), PDP, SRP y Mi cuenta.

**Observación**

La fila no declara "Plataforma:"; se certifica solo Android (emulador Pixel 4 API 33, app ya instalada). iOS queda Pendiente.

**Evidencia**

![Android · Paso 1 — home](<B2C-188 APP Evidencias/TC-B2C-188-APP-019-android-p01-home.png>)

![Android · Paso 2 — plp](<B2C-188 APP Evidencias/TC-B2C-188-APP-019-android-p02-plp.png>)

![Android · Paso 3 — pdp](<B2C-188 APP Evidencias/TC-B2C-188-APP-019-android-p03-pdp.png>)

![Android · Paso 4 — srp](<B2C-188 APP Evidencias/TC-B2C-188-APP-019-android-p04-srp.png>)

![Android · Paso 5 — mi cuenta](<B2C-188 APP Evidencias/TC-B2C-188-APP-019-android-p05-mi-cuenta.png>)

---

### TC-B2C-188-APP-020 - Verificar que el Floating Cart no se muestra en Login, Carrito, Checkout, página de error ni cortina de mantenimiento [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 4 API 33 · Android 13 · emulador local |
| Spec | tests-app/B2C-188.spec.ts |

**Precondiciones**

App iniciada. Cliente logueado. Carrito con conteo consolidado ≥ 1 productos disponibles.

**Data utilizada**

Cuenta de comprador vhchirinos+comprador@avatar-global.com (login por correo + código OTP)

{SKU_UNITARIO} 000000000000674797-UN (Quix Lavalozas ultra concentrado 500 ml, $3.990)

**Pasos ejecutados**

1. Con conteo ≥ 1, navegar a la pantalla de SSO/Login y verificar que el Floating Cart no aparece.
2. Navegar a la pantalla de Carrito y verificar ausencia del Floating Cart.
3. Navegar a Checkout y verificar ausencia.
4. Reproducir una página de error y verificar ausencia.
5. Reproducir la cortina de mantenimiento y verificar ausencia.

**Resultado esperado**

El Floating Cart no se muestra en ninguna de las páginas especiales: SSO/Login, Carrito, Checkout, página de error y cortina de mantenimiento.

**Resultado obtenido**

Carrito ("Mi carro") y Checkout ("Datos de entrega") se muestran sin Floating Cart. Los demás pasos no se pudieron reproducir.

**Observación**

Causa: con sesión y conteo ≥ 1 no se llega a la pantalla de SSO/Login, y la página de error y la cortina de mantenimiento no se pueden provocar en DEV. Carrito y Checkout: OK. Acción: indicar cómo reproducir la página de error y la cortina de mantenimiento en DEV. La fila no declara "Plataforma:"; se certifica solo Android (emulador Pixel 4 API 33, app ya instalada). iOS queda Pendiente.

**Evidencia**

![Android · Paso 1 — carrito](<B2C-188 APP Evidencias/TC-B2C-188-APP-020-android-p01-carrito.png>)

![Android · Paso 2 — checkout](<B2C-188 APP Evidencias/TC-B2C-188-APP-020-android-p02-checkout.png>)

![Android · Estado final](<B2C-188 APP Evidencias/TC-B2C-188-APP-020-android.png>)

---

### TC-B2C-188-APP-021 - Verificar que el Floating Cart recalcula el umbral de despacho gratis al iniciar sesión según el segmento del usuario [App]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 4 API 33 · Android 13 · emulador local |

**Precondiciones**

App iniciada. Cliente navegando en modo invitado con productos en el carrito (subtotal $25.000). Floating Cart visible con umbral $60.000 (cliente normal). Subtotal < $60.000.

**Data utilizada**

{COMPRADOR_DIAMANTE_USER} vhchirinos+diamante@avatar-global.com

{SKU_UNITARIO} 000000000000674797-UN (Quix Lavalozas ultra concentrado 500 ml, $3.990)

**Pasos ejecutados**

1. Navegar como invitado con productos en el carrito (subtotal $25.000, umbral $60.000).
2. Iniciar sesión con un usuario de segmento Diamante.
3. Observar el Floating Cart inmediatamente después del login.

**Resultado esperado**

El Floating Cart recalcula el umbral a $20.000 sin recarga de la app. Como el subtotal ($25.000) supera el nuevo umbral ($20.000), el Floating Cart muestra directamente '¡Ya tienes despacho GRATIS!'. La barra de progreso y el monto restante se actualizan al nuevo umbral.

**Resultado obtenido**

No se pudo armar el carro como invitado.

**Observación**

Causa: la fila no declara dirección de entrega para el invitado, y como invitado sin dirección "Agregar" abre "Elige tu método de entrega": el carro no se puede armar (2026-11-16). Además {COMPRADOR_DIAMANTE_USER} figura como "Socio Oro", no Diamante. Acción: declarar la dirección del invitado y asignar el segmento Diamante a la cuenta. La fila no declara "Plataforma:"; se certifica solo Android (emulador Pixel 4 API 33, app ya instalada). iOS queda Pendiente.

**Evidencia**

![Android · Paso 1 — invitado sin direccion no puede agregar](<B2C-188 APP Evidencias/TC-B2C-188-APP-021-android-p01-invitado-sin-direccion-no-puede-agregar.png>)

---

### TC-B2C-188-APP-022 - Verificar que el Floating Cart no muestra barra de progreso en modo Retiro en tienda y la muestra al cambiar a Despacho a domicilio [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 4 API 33 · Android 13 · emulador local |

**Precondiciones**

App iniciada. Cliente logueado. Método de entrega configurado como 'Retiro en tienda'. Carrito con más de 1 producto disponible. Floating Cart visible.

**Data utilizada**

Cuenta de comprador vhchirinos+comprador@avatar-global.com (login por correo + código OTP)

{SKU_UNITARIO} 000000000000674797-UN (Quix Lavalozas ultra concentrado 500 ml, $3.990)

**Pasos ejecutados**

1. Con método de entrega 'Retiro en tienda', observar el Floating Cart.
2. Verificar presencia del conteo de productos.
3. Verificar ausencia de barra de progreso y monto restante.
4. Cambiar el método de entrega a 'Despacho a domicilio'.
5. Observar el Floating Cart.

**Resultado esperado**

En modo retiro en tienda: el Floating Cart muestra el conteo de productos pero NO muestra barra de progreso ni monto restante. Al cambiar a despacho a domicilio: la barra de progreso aparece con el cálculo correspondiente al umbral del cliente.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: el caso necesita "Retiro en tienda" y la fila no declara qué tienda elegir. Acción: declarar la tienda de retiro como token en la fila. La fila no declara "Plataforma:"; se certifica solo Android (emulador Pixel 4 API 33, app ya instalada). iOS queda Pendiente.

---

### TC-B2C-188-APP-024 - Verificar que el Floating Cart aparece y desaparece con animación de deslizamiento [App]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 4 API 33 · Android 13 · emulador local |

**Precondiciones**

App iniciada. Cliente logueado. Carrito vacío (conteo = 0). Cliente en Home.

**Data utilizada**

{SKU_UNITARIO} 000000000000674797-UN (Quix Lavalozas ultra concentrado 500 ml, $3.990)

**Pasos ejecutados**

1. Con el carrito vacío, agregar 1 producto desde la Home.
2. Observar si el Floating Cart aparece con animación de deslizamiento desde abajo.
3. Eliminar el producto del carrito (conteo vuelve a 0).
4. Observar si el Floating Cart desaparece con animación de deslizamiento hacia abajo.

**Resultado esperado**

Al agregar el primer producto (conteo 0→1): el Floating Cart se desliza desde abajo con animación suave. Al eliminar el último producto (conteo ≥1→0): el Floating Cart se desliza hacia abajo con la misma animación suave.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: el caso pide un cliente logueado y su columna Test data no declara ninguna cuenta. Acción: declarar la cuenta del caso como token en la fila. La fila no declara "Plataforma:"; se certifica solo Android (emulador Pixel 4 API 33, app ya instalada). iOS queda Pendiente.

---

### TC-B2C-188-APP-023 - Verificar que el Floating Cart permanece anclado sobre el TabBar y fijo durante el scroll [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 4 API 33 · Android 13 · emulador local |
| Spec | tests-app/B2C-188.spec.ts |

**Precondiciones**

App iniciada. Cliente logueado. Floating Cart visible. Cliente en PLP o SRP con contenido scrolleable.

**Data utilizada**

Cuenta de comprador vhchirinos+comprador@avatar-global.com (login por correo + código OTP)

**Pasos ejecutados**

1. Con el Floating Cart visible en PLP, desplazar el contenido hacia abajo (scroll).
2. Observar la posición del Floating Cart durante el scroll.
3. Verificar que el TabBar también permanece visible simultáneamente.
4. Realizar scroll hacia arriba y verificar la misma posición.

**Resultado esperado**

El Floating Cart permanece fijo (sticky) en la parte inferior de la pantalla durante el scroll. El Floating Cart se posiciona inmediatamente sobre el TabBar sin superposición. Ambos componentes (Floating Cart y TabBar) son visibles simultáneamente.

**Resultado obtenido**

En la PLP ("Mostrar todo" de "Los más vendidos"), con scroll hacia abajo y hacia arriba, el Floating Cart se mantiene en la misma posición, inmediatamente sobre la TabBar sin superponerse, y ambos visibles.

**Observación**

La fila no declara "Plataforma:"; se certifica solo Android (emulador Pixel 4 API 33, app ya instalada). iOS queda Pendiente.

**Evidencia**

![Android · Paso 1 — plp inicio](<B2C-188 APP Evidencias/TC-B2C-188-APP-023-android-p01-plp-inicio.png>)

![Android · Paso 2 — plp tras scroll abajo](<B2C-188 APP Evidencias/TC-B2C-188-APP-023-android-p02-plp-tras-scroll-abajo.png>)

![Android · Paso 3 — plp tras scroll arriba](<B2C-188 APP Evidencias/TC-B2C-188-APP-023-android-p03-plp-tras-scroll-arriba.png>)

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "devices": {
   "android": "Pixel 4 API 33 · Android 13 · emulador local"
  },
  "environment": "App Unimarc QA (cl.smu.unimarcapp.sfcc.qa, build v1.0.1) contra DEV",
  "executed_by": "Victor Chirinos",
  "suite": "B2C-188 APP",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP1/B2C-188 APP Test Cases.xlsx",
  "title": "B2C-188 APP - Floating Cart (App) - Evidencias QA",
  "updated_at": "2026-11-16"
 },
 "history": {
  "2026-11-16": [
   "TC-B2C-188-APP-002",
   "TC-B2C-188-APP-003",
   "TC-B2C-188-APP-004",
   "TC-B2C-188-APP-005",
   "TC-B2C-188-APP-006",
   "TC-B2C-188-APP-007",
   "TC-B2C-188-APP-008",
   "TC-B2C-188-APP-009",
   "TC-B2C-188-APP-010",
   "TC-B2C-188-APP-011",
   "TC-B2C-188-APP-012",
   "TC-B2C-188-APP-013",
   "TC-B2C-188-APP-014",
   "TC-B2C-188-APP-015",
   "TC-B2C-188-APP-016",
   "TC-B2C-188-APP-017",
   "TC-B2C-188-APP-018",
   "TC-B2C-188-APP-019",
   "TC-B2C-188-APP-020",
   "TC-B2C-188-APP-021",
   "TC-B2C-188-APP-022",
   "TC-B2C-188-APP-023",
   "TC-B2C-188-APP-024"
  ]
 },
 "results": [
  {
   "device": "Pixel 4 API 33 · Android 13 · emulador local",
   "executed_at": "2026-11-16",
   "expected": "El Floating Cart aparece anclado sobre el TabBar. El número visible en el componente es 10. El TabBar permanece visible simultáneamente.",
   "form_factor": "app",
   "id": "TC-B2C-188-APP-002",
   "name": "Verificar que el Floating Cart se muestra con el conteo correcto de unidades disponibles [App] [Logueado]",
   "observation": "La fila no declara \"Plataforma:\"; se certifica solo Android (emulador Pixel 4 API 33, app ya instalada). iOS queda Pendiente.",
   "observed": "Con la cuenta de comprador y 10 unidades de {SKU_UNITARIO}, el Floating Cart muestra \"10 unidades, Te faltan $20.100 para despacho GRATIS, Ir al carro\" anclado sobre la TabBar, con la TabBar visible.",
   "platform": "Android",
   "preconditions": "App iniciada. Cliente en Home, PLP, PDP o SRP. Carrito con al menos 1 producto disponible (ej. 10 unidades).",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — home floating cart 10 unidades",
     "file": "TC-B2C-188-APP-002-android-p01-home-floating-cart-10-unidades.png"
    }
   ],
   "spec": "tests-app/B2C-188.spec.ts",
   "status": "Aprobado",
   "steps": "1. Iniciar sesión con un usuario que tenga 10 unidades disponibles en el carrito.\n 2. Navegar a Home.\n 3. Observar la presencia y posición del Floating Cart.\n 4. Verificar el número visible en el componente.",
   "test_data": "Cuenta de comprador vhchirinos+comprador@avatar-global.com (login por correo + código OTP)\n{SKU_UNITARIO} 000000000000674797-UN (Quix Lavalozas ultra concentrado 500 ml, $3.990)"
  },
  {
   "device": "Pixel 4 API 33 · Android 13 · emulador local",
   "executed_at": "2026-11-16",
   "expected": "En todas las pantallas el Floating Cart muestra: icono con el conteo de unidades del carrito, botón 'Ir al carro', componente posicionado encima del TabBar y TabBar visible simultáneamente.",
   "form_factor": "app",
   "id": "TC-B2C-188-APP-003",
   "name": "Verificar que el Floating Cart muestra el icono de unidades y el botón 'Ir al carro' sobre el TabBar [App] [Logueado]",
   "observation": "Esperado: en Home, PLP, PDP y SRP el Floating Cart encima del TabBar con el TabBar visible. Obtenido: en la PDP no se muestra el TabBar. Paso 4. Bug: B2C-1497. La fila no declara \"Plataforma:\"; se certifica solo Android (emulador Pixel 4 API 33, app ya instalada). iOS queda Pendiente.",
   "observed": "Home, PLP y SRP: icono, \"2 unidades\" e \"Ir al carro\" encima de la TabBar. PDP: el Floating Cart se muestra pero la TabBar no está (el componente queda en el borde inferior).",
   "platform": "Android",
   "preconditions": "App iniciada. Cliente logueado. Carrito con al menos 1 producto disponible. Floating Cart visible.",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — home floating cart",
     "file": "TC-B2C-188-APP-003-android-p01-home-floating-cart.png"
    },
    {
     "caption": "Android · Paso 2 — plp floating cart",
     "file": "TC-B2C-188-APP-003-android-p02-plp-floating-cart.png"
    },
    {
     "caption": "Android · Paso 3 — pdp floating cart",
     "file": "TC-B2C-188-APP-003-android-p03-pdp-floating-cart.png"
    },
    {
     "caption": "Android · Paso 4 — srp floating cart",
     "file": "TC-B2C-188-APP-003-android-p04-srp-floating-cart.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C-188-APP-003-android.png"
    }
   ],
   "spec": "tests-app/B2C-188.spec.ts",
   "status": "Rechazado",
   "steps": "1. Con el Floating Cart visible, navegar a Home.\n 2. Verificar los elementos del componente: icono con conteo de unidades y botón 'Ir al carro'.\n 3. Verificar que el Floating Cart está posicionado encima del TabBar.\n 4. Repetir la verificación en PLP, PDP y SRP.",
   "test_data": "Cuenta de comprador vhchirinos+comprador@avatar-global.com (login por correo + código OTP)\n{SKU_UNITARIO} 000000000000674797-UN (Quix Lavalozas ultra concentrado 500 ml, $3.990)"
  },
  {
   "device": "Pixel 4 API 33 · Android 13 · emulador local",
   "executed_at": "2026-11-16",
   "expected": "El Floating Cart muestra 3.",
   "form_factor": "app",
   "id": "TC-B2C-188-APP-004",
   "name": "Verificar que el Floating Cart refleja la quantity de productos unitarios en el conteo consolidado [App]",
   "observation": "Causa: La fila no declara cuenta ni dirección de entrega, y como invitado sin dirección \"Agregar\" abre \"Elige tu método de entrega\" (\"Para armar tu carro, ingresa una dirección\"): el carro no se puede armar con la data declarada (verificado el 2026-11-16 en Android, en la PDP y en la vitrina del Home). Acción: declarar en la fila la cuenta o la dirección con la que se arma el carro. La fila no declara \"Plataforma:\"; se certifica solo Android (emulador Pixel 4 API 33, app ya instalada). iOS queda Pendiente.",
   "observed": "No se pudo armar el carro.",
   "platform": "Android",
   "preconditions": "App iniciada. Carrito con 1 producto unitario con quantity 3.",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — invitado sin direccion no puede agregar",
     "file": "TC-B2C-188-APP-004-android-p01-invitado-sin-direccion-no-puede-agregar.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Agregar 1 producto unitario con quantity 3 al carrito.\n 2. Navegar a Home o PLP.\n 3. Observar el número visible en el Floating Cart.",
   "test_data": "{SKU_UNITARIO} 000000000000674797-UN (Quix Lavalozas ultra concentrado 500 ml, $3.990)"
  },
  {
   "device": "Pixel 4 API 33 · Android 13 · emulador local",
   "executed_at": "2026-11-16",
   "expected": "El Floating Cart muestra 1.",
   "form_factor": "app",
   "id": "TC-B2C-188-APP-005",
   "name": "Verificar que el Floating Cart cuenta productos pesables como 1 por ítem independiente de la quantity [App]",
   "observation": "Causa: La fila no declara cuenta ni dirección de entrega, y como invitado sin dirección \"Agregar\" abre \"Elige tu método de entrega\" (\"Para armar tu carro, ingresa una dirección\"): el carro no se puede armar con la data declarada (verificado el 2026-11-16 en Android, en la PDP y en la vitrina del Home). Acción: declarar en la fila la cuenta o la dirección con la que se arma el carro. La fila no declara \"Plataforma:\"; se certifica solo Android (emulador Pixel 4 API 33, app ya instalada). iOS queda Pendiente.",
   "observed": "No se pudo armar el carro.",
   "platform": "Android",
   "preconditions": "App iniciada. Carrito con 1 producto pesable con quantity 2.",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — invitado sin direccion no puede agregar",
     "file": "TC-B2C-188-APP-005-android-p01-invitado-sin-direccion-no-puede-agregar.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Agregar 1 producto pesable con quantity 2 al carrito.\n 2. Navegar a Home o PLP.\n 3. Observar el número visible en el Floating Cart.",
   "test_data": "{SKU_PESABLE} 000000000000037972-KG"
  },
  {
   "device": "Pixel 4 API 33 · Android 13 · emulador local",
   "executed_at": "2026-11-16",
   "expected": "El Floating Cart muestra 2. El producto no disponible no se suma al conteo aunque permanezca en el carrito.",
   "form_factor": "app",
   "id": "TC-B2C-188-APP-006",
   "name": "Verificar que el Floating Cart excluye productos no disponibles del conteo consolidado [App]",
   "observation": "Causa: La fila no declara cuenta ni dirección de entrega, y como invitado sin dirección \"Agregar\" abre \"Elige tu método de entrega\" (\"Para armar tu carro, ingresa una dirección\"): el carro no se puede armar con la data declarada (verificado el 2026-11-16 en Android, en la PDP y en la vitrina del Home). Acción: declarar en la fila la cuenta o la dirección con la que se arma el carro. La fila no declara \"Plataforma:\"; se certifica solo Android (emulador Pixel 4 API 33, app ya instalada). iOS queda Pendiente.",
   "observed": "No se pudo armar el carro.",
   "platform": "Android",
   "preconditions": "App iniciada. Carrito con 1 producto unitario disponible (qty 2) y 1 producto no disponible (qty 4).",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — invitado sin direccion no puede agregar",
     "file": "TC-B2C-188-APP-006-android-p01-invitado-sin-direccion-no-puede-agregar.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Configurar el carrito con 1 producto disponible (qty 2) y 1 producto no disponible (qty 4).\n 2. Navegar a Home o PLP.\n 3. Observar el número visible en el Floating Cart.",
   "test_data": "{SKU_UNITARIO} 000000000000674797-UN (Quix Lavalozas ultra concentrado 500 ml, $3.990)\n{SKU_SIN_STOCK} 000000000000029403-KG"
  },
  {
   "device": "Pixel 4 API 33 · Android 13 · emulador local",
   "executed_at": "2026-11-16",
   "expected": "El Floating Cart muestra 4. La actualización ocurre de forma inmediata sin recargar la app.",
   "form_factor": "app",
   "id": "TC-B2C-188-APP-007",
   "name": "Verificar que el Floating Cart actualiza el conteo al agregar un producto unitario sin recargar la app [App]",
   "observation": "Causa: La fila no declara cuenta ni dirección de entrega, y como invitado sin dirección \"Agregar\" abre \"Elige tu método de entrega\" (\"Para armar tu carro, ingresa una dirección\"): el carro no se puede armar con la data declarada (verificado el 2026-11-16 en Android, en la PDP y en la vitrina del Home). Acción: declarar en la fila la cuenta o la dirección con la que se arma el carro. La fila no declara \"Plataforma:\"; se certifica solo Android (emulador Pixel 4 API 33, app ya instalada). iOS queda Pendiente.",
   "observed": "No se pudo armar el carro.",
   "platform": "Android",
   "preconditions": "App iniciada. Floating Cart visible con conteo inicial de 3. Cliente en PLP.",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — invitado sin direccion no puede agregar",
     "file": "TC-B2C-188-APP-007-android-p01-invitado-sin-direccion-no-puede-agregar.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Con el Floating Cart mostrando conteo 3, agregar 1 producto unitario (qty 1) desde la PLP.\n 2. Observar el número en el Floating Cart inmediatamente después de la acción.",
   "test_data": "{SKU_UNITARIO} 000000000000674797-UN (Quix Lavalozas ultra concentrado 500 ml, $3.990)"
  },
  {
   "device": "Pixel 4 API 33 · Android 13 · emulador local",
   "executed_at": "2026-11-16",
   "expected": "El Floating Cart muestra 7. La actualización es inmediata sin recarga de la app.",
   "form_factor": "app",
   "id": "TC-B2C-188-APP-008",
   "name": "Verificar que el Floating Cart actualiza el conteo al aumentar la quantity de un producto unitario [App]",
   "observation": "Causa: La fila no declara cuenta ni dirección de entrega, y como invitado sin dirección \"Agregar\" abre \"Elige tu método de entrega\" (\"Para armar tu carro, ingresa una dirección\"): el carro no se puede armar con la data declarada (verificado el 2026-11-16 en Android, en la PDP y en la vitrina del Home). Acción: declarar en la fila la cuenta o la dirección con la que se arma el carro. La fila no declara \"Plataforma:\"; se certifica solo Android (emulador Pixel 4 API 33, app ya instalada). iOS queda Pendiente.",
   "observed": "No se pudo armar el carro.",
   "platform": "Android",
   "preconditions": "App iniciada. Floating Cart visible con conteo inicial de 5. Carrito con 1 producto unitario con qty 2.",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — invitado sin direccion no puede agregar",
     "file": "TC-B2C-188-APP-008-android-p01-invitado-sin-direccion-no-puede-agregar.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Abrir el carrito o PDP del producto unitario.\n 2. Aumentar la quantity de 2 a 4.\n 3. Observar el número en el Floating Cart.",
   "test_data": "{SKU_UNITARIO} 000000000000674797-UN (Quix Lavalozas ultra concentrado 500 ml, $3.990)"
  },
  {
   "device": "Pixel 4 API 33 · Android 13 · emulador local",
   "executed_at": "2026-11-16",
   "expected": "El Floating Cart se oculta con animación de deslizamiento hacia abajo. El conteo queda en 0.",
   "form_factor": "app",
   "id": "TC-B2C-188-APP-009",
   "name": "Verificar que el Floating Cart se oculta al eliminar el último producto y el conteo llega a 0 [App]",
   "observation": "Causa: La fila no declara cuenta ni dirección de entrega, y como invitado sin dirección \"Agregar\" abre \"Elige tu método de entrega\" (\"Para armar tu carro, ingresa una dirección\"): el carro no se puede armar con la data declarada (verificado el 2026-11-16 en Android, en la PDP y en la vitrina del Home). Acción: declarar en la fila la cuenta o la dirección con la que se arma el carro. La fila no declara \"Plataforma:\"; se certifica solo Android (emulador Pixel 4 API 33, app ya instalada). iOS queda Pendiente.",
   "observed": "No se pudo armar el carro.",
   "platform": "Android",
   "preconditions": "App iniciada. Floating Cart visible. Carrito con 1 producto unitario disponible (qty 1).",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — invitado sin direccion no puede agregar",
     "file": "TC-B2C-188-APP-009-android-p01-invitado-sin-direccion-no-puede-agregar.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Con el Floating Cart visible (conteo = 1), eliminar el único producto del carrito.\n 2. Observar si el Floating Cart permanece visible o desaparece.",
   "test_data": "{SKU_UNITARIO} 000000000000674797-UN (Quix Lavalozas ultra concentrado 500 ml, $3.990)"
  },
  {
   "device": "Pixel 4 API 33 · Android 13 · emulador local",
   "executed_at": "2026-11-16",
   "expected": "La barra de progreso muestra aproximadamente 50% de avance. El Floating Cart indica el monto restante para el despacho gratis (ej. $30.000). La barra y el monto son coherentes con el subtotal actual.",
   "form_factor": "app",
   "id": "TC-B2C-188-APP-010",
   "name": "Verificar que la barra de progreso refleja el porcentaje de avance y el monto restante para despacho gratis [App] [Logueado]",
   "observation": "Esperado: barra de progreso con el porcentaje de avance (subtotal/umbral) y el monto restante. Obtenido: solo el texto del monto restante, sin barra. Paso 2. Bug: B2C-1498. La fila no declara \"Plataforma:\"; se certifica solo Android (emulador Pixel 4 API 33, app ya instalada). iOS queda Pendiente.",
   "observed": "Con 8 unidades (subtotal $31.920) el Floating Cart dice \"Te faltan $28.080 para despacho GRATIS\" (monto correcto sobre $60.000), pero no muestra barra de progreso: medido en píxeles, el componente es idéntico con 7%, 53% y 93% de avance.",
   "platform": "Android",
   "preconditions": "App iniciada. Cliente logueado sin beneficio permanente de despacho gratis. Umbral personalizado aplicable (ej. $60.000 para cliente normal). Subtotal del carrito inferior al umbral. Floating Cart visible.",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — barra de progreso subtotal 31920",
     "file": "TC-B2C-188-APP-010-android-p01-barra-de-progreso-subtotal-31920.png"
    }
   ],
   "spec": "tests-app/B2C-188.spec.ts",
   "status": "Rechazado",
   "steps": "1. Con subtotal del carrito de $30.000 y umbral $60.000, observar el Floating Cart.\n 2. Verificar la barra de progreso y el porcentaje de avance.\n 3. Verificar el monto restante indicado en el componente.",
   "test_data": "Cuenta de comprador vhchirinos+comprador@avatar-global.com (login por correo + código OTP)\n{SKU_UNITARIO} 000000000000674797-UN (Quix Lavalozas ultra concentrado 500 ml, $3.990)"
  },
  {
   "device": "Pixel 4 API 33 · Android 13 · emulador local",
   "executed_at": "2026-11-16",
   "expected": "La barra de progreso aumenta reflejando el nuevo subtotal ($55.000). El monto restante se actualiza a $5.000. La actualización ocurre en tiempo real sin recargar la app.",
   "form_factor": "app",
   "id": "TC-B2C-188-APP-011",
   "name": "Verificar que la barra de progreso se actualiza en tiempo real al modificar el carrito [App] [Logueado]",
   "observation": "Esperado: la barra de progreso aumenta y el monto restante se actualiza. Obtenido: el monto se actualiza ($20.100 → $4.140), no hay barra. Paso 3. Bug: B2C-1498. La fila no declara \"Plataforma:\"; se certifica solo Android (emulador Pixel 4 API 33, app ya instalada). iOS queda Pendiente.",
   "observed": "De 10 a 14 unidades (subtotal $39.900 → $55.860) el monto restante se actualiza en tiempo real de $20.100 a $4.140, pero no hay barra de progreso que aumente.",
   "platform": "Android",
   "preconditions": "App iniciada. Cliente logueado sin beneficio permanente de despacho gratis. Floating Cart visible con barra de progreso. Subtotal inferior al umbral.",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — antes subtotal 39900",
     "file": "TC-B2C-188-APP-011-android-p01-antes-subtotal-39900.png"
    },
    {
     "caption": "Android · Paso 2 — despues subtotal 55860",
     "file": "TC-B2C-188-APP-011-android-p02-despues-subtotal-55860.png"
    }
   ],
   "spec": "tests-app/B2C-188.spec.ts",
   "status": "Rechazado",
   "steps": "1. Con subtotal inicial de $40.000 (umbral $60.000), observar barra de progreso y monto restante ($20.000).\n 2. Agregar al carrito un producto de $15.000.\n 3. Observar la barra de progreso y el monto restante en el Floating Cart.",
   "test_data": "Cuenta de comprador vhchirinos+comprador@avatar-global.com (login por correo + código OTP)\n{SKU_UNITARIO} 000000000000674797-UN (Quix Lavalozas ultra concentrado 500 ml, $3.990)"
  },
  {
   "device": "Pixel 4 API 33 · Android 13 · emulador local",
   "executed_at": "2026-11-16",
   "expected": "El Floating Cart refleja un umbral de $60.000 para el despacho gratis. La barra de progreso y el monto restante se calculan sobre $60.000.",
   "form_factor": "app",
   "id": "TC-B2C-188-APP-012",
   "name": "Verificar que el umbral de despacho gratis es $60.000 para cliente sin segmento especial [App] [Logueado]",
   "observation": "Esperado: umbral $60.000 con barra de progreso y monto restante. Obtenido: el monto refleja $60.000, pero no hay barra. Paso 3. Bug: B2C-1498. La fila no declara \"Plataforma:\"; se certifica solo Android (emulador Pixel 4 API 33, app ya instalada). iOS queda Pendiente.",
   "observed": "Con 5 unidades ($19.950) dice \"Te faltan $40.050\": el umbral aplicado es $60.000. No hay barra de progreso.",
   "platform": "Android",
   "preconditions": "App iniciada. Cliente logueado sin segmentos especiales (cliente normal). Promociones de despacho gratis sobre monto fijo activas en SFCC. Floating Cart visible.",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — umbral 60000",
     "file": "TC-B2C-188-APP-012-android-p01-umbral-60000.png"
    }
   ],
   "spec": "tests-app/B2C-188.spec.ts",
   "status": "Rechazado",
   "steps": "1. Iniciar sesión con un usuario cliente normal (sin segmentos colaborador ni diamante).\n 2. Agregar productos al carrito con subtotal < $60.000.\n 3. Observar el monto indicado como umbral en el Floating Cart.",
   "test_data": "Cuenta de comprador vhchirinos+comprador@avatar-global.com (login por correo + código OTP)\n{SKU_UNITARIO} 000000000000674797-UN (Quix Lavalozas ultra concentrado 500 ml, $3.990)"
  },
  {
   "device": "Pixel 4 API 33 · Android 13 · emulador local",
   "executed_at": "2026-11-16",
   "expected": "El Floating Cart refleja un umbral de $40.000. La barra de progreso se calcula sobre $40.000. El umbral de $60.000 no aplica.",
   "form_factor": "app",
   "id": "TC-B2C-188-APP-013",
   "name": "Verificar que el umbral de despacho gratis es $40.000 para cliente con segmento Colaborador [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_COLABORADOR_USER} (vhchirinos+empleado@avatar-global.com) no está registrada en DEV; la app pide crear la cuenta. Acción: registrar la cuenta con segmento Colaborador o declarar otra. La fila no declara \"Plataforma:\"; se certifica solo Android (emulador Pixel 4 API 33, app ya instalada). iOS queda Pendiente.",
   "observed": "Al ingresar el correo de {COMPRADOR_COLABORADOR_USER} la app abre \"Crear cuenta\" en vez de enviar el código: la cuenta no existe en DEV.",
   "platform": "Android",
   "preconditions": "App iniciada. Cliente logueado con segmento 'Colaborador' activo. Floating Cart visible. Subtotal del carrito inferior a $40.000.",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — correo colaborador abre crear cuenta",
     "file": "TC-B2C-188-APP-013-android-p01-correo-colaborador-abre-crear-cuenta.png"
    }
   ],
   "spec": "tests-app/B2C-188.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. Iniciar sesión con un usuario de segmento colaborador.\n 2. Agregar productos con subtotal < $40.000.\n 3. Observar el umbral indicado en el Floating Cart.",
   "test_data": "{COMPRADOR_COLABORADOR_USER} vhchirinos+empleado@avatar-global.com\n{SKU_UNITARIO} 000000000000674797-UN (Quix Lavalozas ultra concentrado 500 ml, $3.990)"
  },
  {
   "device": "Pixel 4 API 33 · Android 13 · emulador local",
   "executed_at": "2026-11-16",
   "expected": "En ambos casos (Diamante solo y Colaborador + Diamante) el Floating Cart muestra un umbral de $20.000. La barra de progreso se calcula sobre $20.000.",
   "form_factor": "app",
   "id": "TC-B2C-188-APP-014",
   "name": "Verificar que el umbral de despacho gratis es $20.000 para cliente Diamante y combinación Colaborador+Diamante [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_DIAMANTE_USER} (vhchirinos+diamante@avatar-global.com) figura en la app como \"Socio Oro\", no como Diamante; además el paso 4 pide una cuenta Colaborador + Diamante que la fila no declara. Acción: asignar el segmento Diamante a la cuenta y declarar la cuenta Colaborador + Diamante. La fila no declara \"Plataforma:\"; se certifica solo Android (emulador Pixel 4 API 33, app ya instalada). iOS queda Pendiente.",
   "observed": "Con {COMPRADOR_DIAMANTE_USER} (\"Hola, Miembro Diamante\") el Floating Cart aplica $60.000 (\"Te faltan $52.020\" con 2 unidades), pero Mi cuenta la muestra como \"Socio Oro\": la cuenta no tiene el segmento Diamante.",
   "platform": "Android",
   "preconditions": "App iniciada. Cliente logueado con segmento 'Diamante' (y prueba separada con segmentos 'Colaborador + Diamante'). Floating Cart visible. Subtotal inferior a $20.000.",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — umbral diamante",
     "file": "TC-B2C-188-APP-014-android-p01-umbral-diamante.png"
    },
    {
     "caption": "Android · Paso 2 — mi cuenta segmento",
     "file": "TC-B2C-188-APP-014-android-p02-mi-cuenta-segmento.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C-188-APP-014-android.png"
    }
   ],
   "spec": "tests-app/B2C-188.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. Iniciar sesión con un usuario de segmento Diamante.\n 2. Agregar productos con subtotal < $20.000.\n 3. Observar el umbral en el Floating Cart.\n 4. Repetir los pasos 1–3 con un usuario de segmentos Colaborador + Diamante.",
   "test_data": "{COMPRADOR_DIAMANTE_USER} vhchirinos+diamante@avatar-global.com\n{SKU_UNITARIO} 000000000000674797-UN (Quix Lavalozas ultra concentrado 500 ml, $3.990)"
  },
  {
   "device": "Pixel 4 API 33 · Android 13 · emulador local",
   "executed_at": "2026-11-16",
   "expected": "El Floating Cart muestra '¡Ya tienes despacho GRATIS!' sin barra de progreso ni monto restante. Aparece un toast con icono + 'Despacho Gratis'. El toast permanece visible durante 3 segundos y luego desaparece.",
   "form_factor": "app",
   "id": "TC-B2C-188-APP-015",
   "name": "Verificar que el Floating Cart muestra '¡Ya tienes despacho GRATIS!' y toast al alcanzar el umbral [App] [Logueado]",
   "observation": "La fila no declara \"Plataforma:\"; se certifica solo Android (emulador Pixel 4 API 33, app ya instalada). iOS queda Pendiente.",
   "observed": "De 15 a 16 unidades (subtotal $59.850 → $63.840) el Floating Cart pasa a \"16 unidades, ¡Ya tienes despacho GRATIS!, Ir al carro\" sin monto restante, y aparece el toast \"¡Despacho GRATIS!\" con icono, visible ~3 s (presente a 0,8–2,5 s, ausente a 3,8 s).",
   "platform": "Android",
   "preconditions": "App iniciada. Cliente logueado sin beneficio permanente de despacho gratis. Umbral personalizado X conocido. Floating Cart visible con barra de progreso. Subtotal del carrito inferior a X.",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — justo bajo el umbral 59850",
     "file": "TC-B2C-188-APP-015-android-p01-justo-bajo-el-umbral-59850.png"
    },
    {
     "caption": "Android · Paso 2 — al alcanzar el umbral",
     "file": "TC-B2C-188-APP-015-android-p02-al-alcanzar-el-umbral.png"
    },
    {
     "caption": "Android · Paso 3 — estado despacho gratis",
     "file": "TC-B2C-188-APP-015-android-p03-estado-despacho-gratis.png"
    }
   ],
   "spec": "tests-app/B2C-188.spec.ts",
   "status": "Aprobado",
   "steps": "1. Con subtotal justo por debajo del umbral X, agregar un producto que lleve el subtotal a ≥ X.\n 2. Observar el Floating Cart inmediatamente.\n 3. Verificar si aparece un toast.\n 4. Cronometrar la visibilidad del toast.",
   "test_data": "Cuenta de comprador vhchirinos+comprador@avatar-global.com (login por correo + código OTP)\n{SKU_UNITARIO} 000000000000674797-UN (Quix Lavalozas ultra concentrado 500 ml, $3.990)"
  },
  {
   "device": "Pixel 4 API 33 · Android 13 · emulador local",
   "executed_at": "2026-11-16",
   "expected": "El Floating Cart regresa al estado de barra de progreso reflejando el avance actualizado. El monto restante se muestra correctamente. El mensaje '¡Ya tienes despacho GRATIS!' ya no aparece.",
   "form_factor": "app",
   "id": "TC-B2C-188-APP-016",
   "name": "Verificar que el Floating Cart regresa al estado de barra de progreso al caer el subtotal por debajo del umbral [App] [Logueado]",
   "observation": "Esperado: regresa al estado de barra de progreso con el avance actualizado y el monto restante. Obtenido: vuelve el monto restante ($150) sin barra. Paso 2. Bug: B2C-1498. La fila no declara \"Plataforma:\"; se certifica solo Android (emulador Pixel 4 API 33, app ya instalada). iOS queda Pendiente.",
   "observed": "Con 16 unidades muestra \"¡Ya tienes despacho GRATIS!\"; al quitar una unidad (subtotal $59.850) vuelve a \"Te faltan $150 para despacho GRATIS\", pero no a una barra de progreso.",
   "platform": "Android",
   "preconditions": "App iniciada. Floating Cart mostrando '¡Ya tienes despacho GRATIS!' (subtotal ≥ X). Cliente logueado sin beneficio permanente de despacho gratis.",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — con despacho gratis",
     "file": "TC-B2C-188-APP-016-android-p01-con-despacho-gratis.png"
    },
    {
     "caption": "Android · Paso 2 — bajo el umbral",
     "file": "TC-B2C-188-APP-016-android-p02-bajo-el-umbral.png"
    }
   ],
   "spec": "tests-app/B2C-188.spec.ts",
   "status": "Rechazado",
   "steps": "1. Con el Floating Cart en estado '¡Ya tienes despacho GRATIS!', eliminar productos suficientes para que el subtotal caiga por debajo del umbral X.\n 2. Observar el Floating Cart tras la eliminación.",
   "test_data": "Cuenta de comprador vhchirinos+comprador@avatar-global.com (login por correo + código OTP)\n{SKU_UNITARIO} 000000000000674797-UN (Quix Lavalozas ultra concentrado 500 ml, $3.990)"
  },
  {
   "device": "Pixel 4 API 33 · Android 13 · emulador local",
   "executed_at": "2026-11-16",
   "expected": "El Floating Cart muestra directamente el estado 'Despacho gratis' en todos los casos. No se muestra barra de progreso ni indicación de monto restante. El estado se mantiene independientemente del subtotal del carrito.",
   "form_factor": "app",
   "id": "TC-B2C-188-APP-017",
   "name": "Verificar que el Floating Cart muestra despacho gratis permanente para cliente con membresía activa [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_MEMBRESIA_USER} (vhchirinos+noaddress@avatar-global.com) no tiene dirección de entrega y no puede armar el carro (2026-11-16); en octubre ya figuraba como \"Socio Oro\" sin membresía activa. Acción: declarar una cuenta con membresía activa (despacho gratis permanente) y dirección. La fila no declara \"Plataforma:\"; se certifica solo Android (emulador Pixel 4 API 33, app ya instalada). iOS queda Pendiente.",
   "observed": "Con {COMPRADOR_MEMBRESIA_USER} la sesión se inicia, pero el carro no se puede armar: la cuenta no tiene dirección y \"Agregar\" pide una.",
   "platform": "Android",
   "preconditions": "App iniciada. Cliente logueado con beneficio permanente de despacho gratis activo (membresía u otra condición comercial configurada). Floating Cart visible.",
   "spec": "tests-app/B2C-188.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. Iniciar sesión con un usuario que tenga beneficio permanente de despacho gratis.\n 2. Agregar productos al carrito.\n 3. Observar el Floating Cart con subtotales bajo, medio y alto (por encima del umbral normal).",
   "test_data": "{COMPRADOR_MEMBRESIA_USER} vhchirinos+noaddress@avatar-global.com\n{SKU_UNITARIO} 000000000000674797-UN (Quix Lavalozas ultra concentrado 500 ml, $3.990)"
  },
  {
   "device": "Pixel 4 API 33 · Android 13 · emulador local",
   "executed_at": "2026-11-16",
   "expected": "Al tocar 'Ir al carro' se navega a la pantalla completa del carrito. Al volver, el Floating Cart permanece visible con el mismo conteo (siempre que sea ≥ 1).",
   "form_factor": "app",
   "id": "TC-B2C-188-APP-018",
   "name": "Verificar que el tap en 'Ir al carro' navega al carrito y el Floating Cart permanece visible al volver [App] [Logueado]",
   "observation": "La fila no declara \"Plataforma:\"; se certifica solo Android (emulador Pixel 4 API 33, app ya instalada). iOS queda Pendiente.",
   "observed": "\"Ir al carro\" abre \"Mi carro\" (sin Floating Cart); al volver, el Floating Cart sigue con \"2 unidades\".",
   "platform": "Android",
   "preconditions": "App iniciada. Cliente logueado. Floating Cart visible (conteo ≥ 1). Cliente en Home, PLP, PDP o SRP.",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — home con floating cart",
     "file": "TC-B2C-188-APP-018-android-p01-home-con-floating-cart.png"
    },
    {
     "caption": "Android · Paso 2 — mi carro",
     "file": "TC-B2C-188-APP-018-android-p02-mi-carro.png"
    },
    {
     "caption": "Android · Paso 3 — al volver",
     "file": "TC-B2C-188-APP-018-android-p03-al-volver.png"
    }
   ],
   "spec": "tests-app/B2C-188.spec.ts",
   "status": "Aprobado",
   "steps": "1. Con el Floating Cart visible, tocar el botón 'Ir al carro'.\n 2. Verificar la pantalla resultante.\n 3. Presionar 'Volver' o navegar hacia atrás.\n 4. Observar el Floating Cart.",
   "test_data": "Cuenta de comprador vhchirinos+comprador@avatar-global.com (login por correo + código OTP)\n{SKU_UNITARIO} 000000000000674797-UN (Quix Lavalozas ultra concentrado 500 ml, $3.990)"
  },
  {
   "device": "Pixel 4 API 33 · Android 13 · emulador local",
   "executed_at": "2026-11-16",
   "expected": "El Floating Cart se muestra correctamente en todas las pantallas: Home, PLP, PDP, SRP y Mi Cuenta.",
   "form_factor": "app",
   "id": "TC-B2C-188-APP-019",
   "name": "Verificar que el Floating Cart se muestra en Home, PLP, PDP, SRP y Mi Cuenta [App] [Logueado]",
   "observation": "La fila no declara \"Plataforma:\"; se certifica solo Android (emulador Pixel 4 API 33, app ya instalada). iOS queda Pendiente.",
   "observed": "El Floating Cart se muestra en Home, PLP (\"Mostrar todo\" de \"Los más vendidos\"), PDP, SRP y Mi cuenta.",
   "platform": "Android",
   "preconditions": "App iniciada. Cliente logueado. Carrito con conteo consolidado ≥ 1 productos disponibles.",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — home",
     "file": "TC-B2C-188-APP-019-android-p01-home.png"
    },
    {
     "caption": "Android · Paso 2 — plp",
     "file": "TC-B2C-188-APP-019-android-p02-plp.png"
    },
    {
     "caption": "Android · Paso 3 — pdp",
     "file": "TC-B2C-188-APP-019-android-p03-pdp.png"
    },
    {
     "caption": "Android · Paso 4 — srp",
     "file": "TC-B2C-188-APP-019-android-p04-srp.png"
    },
    {
     "caption": "Android · Paso 5 — mi cuenta",
     "file": "TC-B2C-188-APP-019-android-p05-mi-cuenta.png"
    }
   ],
   "spec": "tests-app/B2C-188.spec.ts",
   "status": "Aprobado",
   "steps": "1. Con Floating Cart activo (conteo ≥ 1), navegar a Home y verificar visibilidad.\n 2. Navegar a PLP y verificar visibilidad.\n 3. Navegar a PDP y verificar visibilidad.\n 4. Navegar a SRP y verificar visibilidad.\n 5. Navegar a Mi Cuenta y verificar visibilidad.",
   "test_data": "Cuenta de comprador vhchirinos+comprador@avatar-global.com (login por correo + código OTP)\n{SKU_UNITARIO} 000000000000674797-UN (Quix Lavalozas ultra concentrado 500 ml, $3.990)"
  },
  {
   "device": "Pixel 4 API 33 · Android 13 · emulador local",
   "executed_at": "2026-11-16",
   "expected": "El Floating Cart no se muestra en ninguna de las páginas especiales: SSO/Login, Carrito, Checkout, página de error y cortina de mantenimiento.",
   "form_factor": "app",
   "id": "TC-B2C-188-APP-020",
   "name": "Verificar que el Floating Cart no se muestra en Login, Carrito, Checkout, página de error ni cortina de mantenimiento [App] [Logueado]",
   "observation": "Causa: con sesión y conteo ≥ 1 no se llega a la pantalla de SSO/Login, y la página de error y la cortina de mantenimiento no se pueden provocar en DEV. Carrito y Checkout: OK. Acción: indicar cómo reproducir la página de error y la cortina de mantenimiento en DEV. La fila no declara \"Plataforma:\"; se certifica solo Android (emulador Pixel 4 API 33, app ya instalada). iOS queda Pendiente.",
   "observed": "Carrito (\"Mi carro\") y Checkout (\"Datos de entrega\") se muestran sin Floating Cart. Los demás pasos no se pudieron reproducir.",
   "platform": "Android",
   "preconditions": "App iniciada. Cliente logueado. Carrito con conteo consolidado ≥ 1 productos disponibles.",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — carrito",
     "file": "TC-B2C-188-APP-020-android-p01-carrito.png"
    },
    {
     "caption": "Android · Paso 2 — checkout",
     "file": "TC-B2C-188-APP-020-android-p02-checkout.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C-188-APP-020-android.png"
    }
   ],
   "spec": "tests-app/B2C-188.spec.ts",
   "status": "Bloqueado",
   "steps": "1. Con conteo ≥ 1, navegar a la pantalla de SSO/Login y verificar que el Floating Cart no aparece.\n 2. Navegar a la pantalla de Carrito y verificar ausencia del Floating Cart.\n 3. Navegar a Checkout y verificar ausencia.\n 4. Reproducir una página de error y verificar ausencia.\n 5. Reproducir la cortina de mantenimiento y verificar ausencia.",
   "test_data": "Cuenta de comprador vhchirinos+comprador@avatar-global.com (login por correo + código OTP)\n{SKU_UNITARIO} 000000000000674797-UN (Quix Lavalozas ultra concentrado 500 ml, $3.990)"
  },
  {
   "device": "Pixel 4 API 33 · Android 13 · emulador local",
   "executed_at": "2026-11-16",
   "expected": "El Floating Cart recalcula el umbral a $20.000 sin recarga de la app. Como el subtotal ($25.000) supera el nuevo umbral ($20.000), el Floating Cart muestra directamente '¡Ya tienes despacho GRATIS!'. La barra de progreso y el monto restante se actualizan al nuevo umbral.",
   "form_factor": "app",
   "id": "TC-B2C-188-APP-021",
   "name": "Verificar que el Floating Cart recalcula el umbral de despacho gratis al iniciar sesión según el segmento del usuario [App]",
   "observation": "Causa: la fila no declara dirección de entrega para el invitado, y como invitado sin dirección \"Agregar\" abre \"Elige tu método de entrega\": el carro no se puede armar (2026-11-16). Además {COMPRADOR_DIAMANTE_USER} figura como \"Socio Oro\", no Diamante. Acción: declarar la dirección del invitado y asignar el segmento Diamante a la cuenta. La fila no declara \"Plataforma:\"; se certifica solo Android (emulador Pixel 4 API 33, app ya instalada). iOS queda Pendiente.",
   "observed": "No se pudo armar el carro como invitado.",
   "platform": "Android",
   "preconditions": "App iniciada. Cliente navegando en modo invitado con productos en el carrito (subtotal $25.000). Floating Cart visible con umbral $60.000 (cliente normal). Subtotal < $60.000.",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — invitado sin direccion no puede agregar",
     "file": "TC-B2C-188-APP-021-android-p01-invitado-sin-direccion-no-puede-agregar.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Navegar como invitado con productos en el carrito (subtotal $25.000, umbral $60.000).\n 2. Iniciar sesión con un usuario de segmento Diamante.\n 3. Observar el Floating Cart inmediatamente después del login.",
   "test_data": "{COMPRADOR_DIAMANTE_USER} vhchirinos+diamante@avatar-global.com\n{SKU_UNITARIO} 000000000000674797-UN (Quix Lavalozas ultra concentrado 500 ml, $3.990)"
  },
  {
   "device": "Pixel 4 API 33 · Android 13 · emulador local",
   "executed_at": "2026-11-16",
   "expected": "En modo retiro en tienda: el Floating Cart muestra el conteo de productos pero NO muestra barra de progreso ni monto restante. Al cambiar a despacho a domicilio: la barra de progreso aparece con el cálculo correspondiente al umbral del cliente.",
   "form_factor": "app",
   "id": "TC-B2C-188-APP-022",
   "name": "Verificar que el Floating Cart no muestra barra de progreso en modo Retiro en tienda y la muestra al cambiar a Despacho a domicilio [App] [Logueado]",
   "observation": "Causa: el caso necesita \"Retiro en tienda\" y la fila no declara qué tienda elegir. Acción: declarar la tienda de retiro como token en la fila. La fila no declara \"Plataforma:\"; se certifica solo Android (emulador Pixel 4 API 33, app ya instalada). iOS queda Pendiente.",
   "observed": "No ejecutado.",
   "platform": "Android",
   "preconditions": "App iniciada. Cliente logueado. Método de entrega configurado como 'Retiro en tienda'. Carrito con más de 1 producto disponible. Floating Cart visible.",
   "status": "Bloqueado Data",
   "steps": "1. Con método de entrega 'Retiro en tienda', observar el Floating Cart.\n 2. Verificar presencia del conteo de productos.\n 3. Verificar ausencia de barra de progreso y monto restante.\n 4. Cambiar el método de entrega a 'Despacho a domicilio'.\n 5. Observar el Floating Cart.",
   "test_data": "Cuenta de comprador vhchirinos+comprador@avatar-global.com (login por correo + código OTP)\n{SKU_UNITARIO} 000000000000674797-UN (Quix Lavalozas ultra concentrado 500 ml, $3.990)"
  },
  {
   "device": "Pixel 4 API 33 · Android 13 · emulador local",
   "executed_at": "2026-11-16",
   "expected": "Al agregar el primer producto (conteo 0→1): el Floating Cart se desliza desde abajo con animación suave. Al eliminar el último producto (conteo ≥1→0): el Floating Cart se desliza hacia abajo con la misma animación suave.",
   "form_factor": "app",
   "id": "TC-B2C-188-APP-024",
   "name": "Verificar que el Floating Cart aparece y desaparece con animación de deslizamiento [App]",
   "observation": "Causa: el caso pide un cliente logueado y su columna Test data no declara ninguna cuenta. Acción: declarar la cuenta del caso como token en la fila. La fila no declara \"Plataforma:\"; se certifica solo Android (emulador Pixel 4 API 33, app ya instalada). iOS queda Pendiente.",
   "observed": "No ejecutado.",
   "platform": "Android",
   "preconditions": "App iniciada. Cliente logueado. Carrito vacío (conteo = 0). Cliente en Home.",
   "status": "Bloqueado Data",
   "steps": "1. Con el carrito vacío, agregar 1 producto desde la Home.\n 2. Observar si el Floating Cart aparece con animación de deslizamiento desde abajo.\n 3. Eliminar el producto del carrito (conteo vuelve a 0).\n 4. Observar si el Floating Cart desaparece con animación de deslizamiento hacia abajo.",
   "test_data": "{SKU_UNITARIO} 000000000000674797-UN (Quix Lavalozas ultra concentrado 500 ml, $3.990)"
  },
  {
   "device": "Pixel 4 API 33 · Android 13 · emulador local",
   "executed_at": "2026-11-16",
   "expected": "El Floating Cart permanece fijo (sticky) en la parte inferior de la pantalla durante el scroll. El Floating Cart se posiciona inmediatamente sobre el TabBar sin superposición. Ambos componentes (Floating Cart y TabBar) son visibles simultáneamente.",
   "form_factor": "app",
   "id": "TC-B2C-188-APP-023",
   "name": "Verificar que el Floating Cart permanece anclado sobre el TabBar y fijo durante el scroll [App] [Logueado]",
   "observation": "La fila no declara \"Plataforma:\"; se certifica solo Android (emulador Pixel 4 API 33, app ya instalada). iOS queda Pendiente.",
   "observed": "En la PLP (\"Mostrar todo\" de \"Los más vendidos\"), con scroll hacia abajo y hacia arriba, el Floating Cart se mantiene en la misma posición, inmediatamente sobre la TabBar sin superponerse, y ambos visibles.",
   "platform": "Android",
   "preconditions": "App iniciada. Cliente logueado. Floating Cart visible. Cliente en PLP o SRP con contenido scrolleable.",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — plp inicio",
     "file": "TC-B2C-188-APP-023-android-p01-plp-inicio.png"
    },
    {
     "caption": "Android · Paso 2 — plp tras scroll abajo",
     "file": "TC-B2C-188-APP-023-android-p02-plp-tras-scroll-abajo.png"
    },
    {
     "caption": "Android · Paso 3 — plp tras scroll arriba",
     "file": "TC-B2C-188-APP-023-android-p03-plp-tras-scroll-arriba.png"
    }
   ],
   "spec": "tests-app/B2C-188.spec.ts",
   "status": "Aprobado",
   "steps": "1. Con el Floating Cart visible en PLP, desplazar el contenido hacia abajo (scroll).\n 2. Observar la posición del Floating Cart durante el scroll.\n 3. Verificar que el TabBar también permanece visible simultáneamente.\n 4. Realizar scroll hacia arriba y verificar la misma posición.",
   "test_data": "Cuenta de comprador vhchirinos+comprador@avatar-global.com (login por correo + código OTP)"
  }
 ]
}
-->
