# B2C-38 APP - Evidencias QA (Android)

| Campo | Valor |
|---|---|
| Suite | B2C-38 APP |
| Última actualización | 2026-10-29 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | App Unimarc v1.0.1 (DEV) |
| Origen de los TC | Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-38 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 11 |
| Bloqueado Data | 5 |
| Bloqueado | 1 |
| **Total** | **17** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-29 | 17 | TC-B2C38-APP-001, TC-B2C38-APP-002, TC-B2C38-APP-003, TC-B2C38-APP-004, TC-B2C38-APP-005, TC-B2C38-APP-006, TC-B2C38-APP-007, TC-B2C38-APP-008, TC-B2C38-APP-009, TC-B2C38-APP-010, TC-B2C38-APP-011, TC-B2C38-APP-012, TC-B2C38-APP-013, TC-B2C38-APP-014, TC-B2C38-APP-015, TC-B2C38-APP-016, TC-B2C38-APP-017 |

## Detalle por caso de prueba

### TC-B2C38-APP-001 - Verificar que el + de un producto estándar suma 1 unidad y actualiza el precio [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-38.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene {SKU_VALID_001} x 1

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca el control + del ítem {SKU_VALID_001}.
4. El sistema muestra un loading en el shelf del producto mientras procesa la solicitud.

**Resultado esperado**

La cantidad pasa de 1 a 2, el precio del ítem se actualiza y el resumen de precios se recalcula.

**Resultado obtenido**

Test Data pendiente: {APP_BUILD}

**Observación**

Test Data pendiente: {APP_BUILD} iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 2 — carro con 1 unidad](<B2C-38 APP Evidencias/TC-B2C38-APP-001-android-p02-carro-con-1-unidad.png>)

![Android · Paso 4 — carro tras tocar](<B2C-38 APP Evidencias/TC-B2C38-APP-001-android-p04-carro-tras-tocar.png>)

![Android · Estado final](<B2C-38 APP Evidencias/TC-B2C38-APP-001-android.png>)

---

### TC-B2C38-APP-002 - Verificar que el − de un producto estándar con 2 unidades resta 1 unidad [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-38.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene {SKU_VALID_001} x 2

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca el control − del ítem {SKU_VALID_001}.
4. El sistema muestra un loading en el shelf del producto mientras procesa la solicitud.

**Resultado esperado**

La cantidad pasa de 2 a 1, el precio del ítem se actualiza y el control − pasa a mostrarse como ícono de tacho.

**Resultado obtenido**

Test Data pendiente: {APP_BUILD}

**Observación**

Test Data pendiente: {APP_BUILD} iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 2 — carro con 2 unidades](<B2C-38 APP Evidencias/TC-B2C38-APP-002-android-p02-carro-con-2-unidades.png>)

![Android · Paso 4 — carro tras tocar](<B2C-38 APP Evidencias/TC-B2C38-APP-002-android-p04-carro-tras-tocar.png>)

![Android · Estado final](<B2C-38 APP Evidencias/TC-B2C38-APP-002-android.png>)

---

### TC-B2C38-APP-003 - Verificar que con 1 unidad el control − se muestra como tacho y elimina el ítem sin confirmar [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-38.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 1

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_UNITARIO} = 000000000400254005-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario verifica que el control − del ítem {SKU_VALID_001} se muestra como ícono de tacho.
4. El usuario toca el ícono de tacho del control de cantidad.
5. El sistema muestra un loading en el shelf del producto.

**Resultado esperado**

El ítem {SKU_VALID_001} se elimina del carrito sin solicitar confirmación y el resumen de precios se recalcula.

**Resultado obtenido**

Test Data pendiente: {APP_BUILD}

**Observación**

Test Data pendiente: {APP_BUILD} iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 3 — item con tacho](<B2C-38 APP Evidencias/TC-B2C38-APP-003-android-p03-item-con-tacho.png>)

![Android · Paso 5 — carro tras tocar el tacho](<B2C-38 APP Evidencias/TC-B2C38-APP-003-android-p05-carro-tras-tocar-el-tacho.png>)

![Android · Estado final](<B2C-38 APP Evidencias/TC-B2C38-APP-003-android.png>)

---

### TC-B2C38-APP-004 - Verificar que el + de un producto pesable suma 0,5 kg y actualiza el precio según el peso [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-38.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene {SKU_PESABLE} con 0,5 kg

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_PESABLE} = 000000000000037972-KG

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca el control + del ítem {SKU_PESABLE}.
4. El sistema muestra un loading en el shelf del producto mientras procesa la solicitud.

**Resultado esperado**

La cantidad pasa de 0,5 kg a 1 kg y el precio del ítem se actualiza según el peso.

**Resultado obtenido**

El pesable {SKU_PESABLE} (mangos granel 500 g) se muestra en «un.» y no en «kg»: cada toque cambia 1 un. (0,5 kg) y el subtotal se duplica. Se aprueba; la unidad con que se muestra la cantidad difiere de la del TC.

**Observación**

El pesable {SKU_PESABLE} (mangos granel 500 g) se muestra en «un.» y no en «kg»: cada toque cambia 1 un. (0,5 kg) y el subtotal se duplica. Se aprueba; la unidad con que se muestra la cantidad difiere de la del TC. iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 2 — carro con el pesable en 1 un 0 5 kg](<B2C-38 APP Evidencias/TC-B2C38-APP-004-android-p02-carro-con-el-pesable-en-1-un-0-5-kg.png>)

![Android · Paso 4 — carro tras tocar](<B2C-38 APP Evidencias/TC-B2C38-APP-004-android-p04-carro-tras-tocar.png>)

![Android · Estado final](<B2C-38 APP Evidencias/TC-B2C38-APP-004-android.png>)

---

### TC-B2C38-APP-005 - Verificar que el − de un producto pesable resta 0,5 kg y actualiza el precio [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-38.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene {SKU_PESABLE} con 1 kg

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_PESABLE} = 000000000000037972-KG

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca el control − del ítem {SKU_PESABLE}.
4. El sistema muestra un loading en el shelf del producto mientras procesa la solicitud.

**Resultado esperado**

La cantidad pasa de 1 kg a 0,5 kg, el precio se actualiza según el peso y el control − pasa a mostrarse como ícono de tacho.

**Resultado obtenido**

El pesable {SKU_PESABLE} (mangos granel 500 g) se muestra en «un.» y no en «kg»: cada toque cambia 1 un. (0,5 kg) y el subtotal baja a la mitad y el control − pasa a tacho. Se aprueba; la unidad con que se muestra la cantidad difiere de la del TC.

**Observación**

El pesable {SKU_PESABLE} (mangos granel 500 g) se muestra en «un.» y no en «kg»: cada toque cambia 1 un. (0,5 kg) y el subtotal baja a la mitad y el control − pasa a tacho. Se aprueba; la unidad con que se muestra la cantidad difiere de la del TC. iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 2 — carro con el pesable en 2 un 1 kg](<B2C-38 APP Evidencias/TC-B2C38-APP-005-android-p02-carro-con-el-pesable-en-2-un-1-kg.png>)

![Android · Paso 4 — carro tras tocar](<B2C-38 APP Evidencias/TC-B2C38-APP-005-android-p04-carro-tras-tocar.png>)

![Android · Estado final](<B2C-38 APP Evidencias/TC-B2C38-APP-005-android.png>)

---

### TC-B2C38-APP-006 - Verificar que un pesable en 0,5 kg muestra el tacho y se elimina sin confirmar [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-38.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene {SKU_PESABLE} con 0,5 kg y {SKU_VALID_001} x 1

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_PESABLE} = 000000000000037972-KG
- {SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario verifica que el control − del ítem {SKU_PESABLE} se muestra como ícono de tacho.
4. El usuario toca el ícono de tacho del control de cantidad.
5. El sistema muestra un loading en el shelf del producto.

**Resultado esperado**

El ítem {SKU_PESABLE} se elimina del carrito sin solicitar confirmación y el resumen de precios se recalcula.

**Resultado obtenido**

CA1b sin diseño Mobile/App en la HU (⏳TBD); se valida el comportamiento funcional | Test Data pendiente: {APP_BUILD}

**Observación**

CA1b sin diseño Mobile/App en la HU (⏳TBD); se valida el comportamiento funcional | Test Data pendiente: {APP_BUILD} iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 3 — pesable con tacho](<B2C-38 APP Evidencias/TC-B2C38-APP-006-android-p03-pesable-con-tacho.png>)

![Android · Paso 5 — carro tras tocar el tacho](<B2C-38 APP Evidencias/TC-B2C38-APP-006-android-p05-carro-tras-tocar-el-tacho.png>)

![Android · Estado final](<B2C-38 APP Evidencias/TC-B2C38-APP-006-android.png>)

---

### TC-B2C38-APP-007 - Verificar que al llegar al cartlimit se muestra el toast de máximo y el botón Máx deshabilitado [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-38.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- {SKU_CAR_LIMIT} tiene cartlimit configurado en BM
- El carro contiene {SKU_CAR_LIMIT} con 1 unidad menos que su cartlimit.
- El producto {SKU_CAR_LIMIT} tiene configurado como carlimit "5"

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_CAR_LIMIT} = 000000000000626717-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca el control + del ítem {SKU_CAR_LIMIT} hasta alcanzar su cartlimit.
4. El sistema muestra el toast informativo "Alcanzaste el máximo de productos" con ícono X.
5. El usuario toca el botón "Máx" que reemplazó al +.
6. El sistema no agrega unidades.

**Resultado esperado**

Se muestra el toast "Alcanzaste el máximo de productos", el + se reemplaza por el botón deshabilitado "Máx" y la cantidad permanece en el cartlimit.

**Resultado obtenido**

Test Data pendiente: {APP_BUILD}

**Observación**

Test Data pendiente: {APP_BUILD} iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 4 — carro al llegar al cartlimit](<B2C-38 APP Evidencias/TC-B2C38-APP-007-android-p04-carro-al-llegar-al-cartlimit.png>)

![Android · Estado final](<B2C-38 APP Evidencias/TC-B2C38-APP-007-android.png>)

---

### TC-B2C38-APP-008 - Verificar que al llegar al stock disponible se muestra el toast de máximo y el botón Máx deshabilitado [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-38.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- El stock de {SKU_STOCK_LIMITADO} en la tienda activa es menor a su cartlimit
- El carro contiene {SKU_STOCK_LIMITADO} con 1 unidad menos que su stock disponible

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_STOCK_LIMITADO} = 000000000638426003-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca el control + del ítem {SKU_STOCK_LIMITADO} hasta alcanzar el stock disponible.
4. El sistema muestra el toast informativo "Alcanzaste el máximo de productos" con ícono X.

**Resultado esperado**

Se muestra el toast "Alcanzaste el máximo de productos", el + se reemplaza por "Máx" deshabilitado y la cantidad queda igual al stock disponible.

**Resultado obtenido**

Test Data pendiente: {APP_BUILD}

**Observación**

Test Data pendiente: {APP_BUILD} iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 4 — carro al llegar al stock disponible](<B2C-38 APP Evidencias/TC-B2C38-APP-008-android-p04-carro-al-llegar-al-stock-disponible.png>)

![Android · Estado final](<B2C-38 APP Evidencias/TC-B2C38-APP-008-android.png>)

---

### TC-B2C38-APP-009 - Verificar que el ícono de eliminar quita un ítem disponible sin confirmación [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-38.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 2

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_UNITARIO} = 000000000400254005-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca el ícono de eliminar del ítem {SKU_UNITARIO}.
4. El sistema muestra un loading en el shelf del producto mientras procesa la solicitud.

**Resultado esperado**

El ítem {SKU_UNITARIO} se elimina sin solicitar confirmación, {SKU_VALID_001} se mantiene y el resumen de precios se recalcula.

**Resultado obtenido**

TC no ejecutable tal como está escrito: con {SKU_UNITARIO} x2 el ítem muestra el control − y no el ícono de eliminar (el tacho aparece solo con 1 unidad). Acción: corregir la precondición o el paso del TC.

**Observación**

TC no ejecutable tal como está escrito: con {SKU_UNITARIO} x2 el ítem muestra el control − y no el ícono de eliminar (el tacho aparece solo con 1 unidad). Acción: corregir la precondición o el paso del TC.

**Evidencia**

![Android · Paso 2 — carro con sku valid 001 x1 y sku unitario x2](<B2C-38 APP Evidencias/TC-B2C38-APP-009-android-p02-carro-con-sku-valid-001-x1-y-sku-unitario-x2.png>)

![Android · Estado final](<B2C-38 APP Evidencias/TC-B2C38-APP-009-android.png>)

---

### TC-B2C38-APP-010 - Verificar que el swipe to delete quita un ítem disponible sin confirmación [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-38.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 2

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_UNITARIO} = 000000000400254005-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario desliza lateralmente el ítem {SKU_UNITARIO} y toca el botón rojo "Eliminar" con ícono de tacho que se revela.
4. El sistema muestra un loading en el shelf del producto mientras procesa la solicitud.

**Resultado esperado**

El ítem {SKU_UNITARIO} se elimina sin solicitar confirmación y el resumen de precios se recalcula.

**Resultado obtenido**

Test Data pendiente: {APP_BUILD}

**Observación**

Test Data pendiente: {APP_BUILD} iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 2 — carro con sku valid 001 x1 y sku unitario x2](<B2C-38 APP Evidencias/TC-B2C38-APP-010-android-p02-carro-con-sku-valid-001-x1-y-sku-unitario-x2.png>)

![Android · Paso 3 — item deslizado](<B2C-38 APP Evidencias/TC-B2C38-APP-010-android-p03-item-deslizado.png>)

![Android · Paso 5 — carro tras el swipe](<B2C-38 APP Evidencias/TC-B2C38-APP-010-android-p05-carro-tras-el-swipe.png>)

![Android · Estado final](<B2C-38 APP Evidencias/TC-B2C38-APP-010-android.png>)

---

### TC-B2C38-APP-011 - Verificar que el ícono de eliminar quita un ítem no disponible sin confirmación [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-38.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca el ícono de eliminar del ítem no disponible {SKU_NO_DISPONIBLE}.
4. El sistema muestra un loading en el shelf del producto mientras procesa la solicitud.

**Resultado esperado**

El ítem {SKU_NO_DISPONIBLE} se elimina sin solicitar confirmación y el resumen de precios se recalcula.

**Resultado obtenido**

Dato que no cumple la precondición: {SKU_NO_DISPONIBLE} aparece «Pronto disponible» y sin botón «Agregar» en la tienda activa de la cuenta, así que no se puede dejar en el carro. Se necesita una tienda con stock de ese SKU (la planilla solo declara {TIENDA_SIN_STOCK}) para agregarlo y luego cambiar a la tienda sin stock. Verificado en Android.

**Observación**

Dato que no cumple la precondición: {SKU_NO_DISPONIBLE} aparece «Pronto disponible» y sin botón «Agregar» en la tienda activa de la cuenta, así que no se puede dejar en el carro. Se necesita una tienda con stock de ese SKU (la planilla solo declara {TIENDA_SIN_STOCK}) para agregarlo y luego cambiar a la tienda sin stock. Verificado en Android.

**Evidencia**

![Android · Estado final](<B2C-38 APP Evidencias/TC-B2C38-APP-011-android.png>)

---

### TC-B2C38-APP-012 - Verificar que el swipe to delete quita un ítem no disponible sin confirmación [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-38.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario desliza lateralmente el ítem {SKU_NO_DISPONIBLE} y toca el botón rojo "Eliminar" con ícono de tacho que se revela.
4. El sistema muestra un loading en el shelf del producto mientras procesa la solicitud.

**Resultado esperado**

El ítem {SKU_NO_DISPONIBLE} se elimina sin solicitar confirmación y el resumen de precios se recalcula.

**Resultado obtenido**

Dato que no cumple la precondición: {SKU_NO_DISPONIBLE} aparece «Pronto disponible» y sin botón «Agregar» en la tienda activa de la cuenta, así que no se puede dejar en el carro. Se necesita una tienda con stock de ese SKU (la planilla solo declara {TIENDA_SIN_STOCK}) para agregarlo y luego cambiar a la tienda sin stock. Verificado en Android.

**Observación**

Dato que no cumple la precondición: {SKU_NO_DISPONIBLE} aparece «Pronto disponible» y sin botón «Agregar» en la tienda activa de la cuenta, así que no se puede dejar en el carro. Se necesita una tienda con stock de ese SKU (la planilla solo declara {TIENDA_SIN_STOCK}) para agregarlo y luego cambiar a la tienda sin stock. Verificado en Android.

---

### TC-B2C38-APP-013 - Verificar que un error al eliminar muestra el toast CRT-021 y el ítem permanece [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-38.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 1
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {CART_ITEM_API_ENDPOINT}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {CART_ITEM_API_ENDPOINT} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_UNITARIO} = 000000000400254005-UN
- {HERRAMIENTA_PROXY_APP} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca el ícono de eliminar del ítem {SKU_UNITARIO}.
4. El sistema muestra el toast de error "No pudimos eliminar el producto del carro. Vuelve a intentarlo. [CRT-021]".
5. El usuario espera 5 segundos y luego cierra el toast con la X.

**Resultado esperado**

El toast CRT-021 permanece visible hasta que el usuario lo cierra con la X y el ítem {SKU_UNITARIO} permanece en el carrito sin cambios.

El total a pagar no se actualiza.

**Resultado obtenido**

Falta dato: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Cargar el valor y re-ejecutar.

**Observación**

Falta dato: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Cargar el valor y re-ejecutar.

---

### TC-B2C38-APP-014 - Verificar que un error al incrementar muestra el toast CRT-022 y la cantidad no cambia [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-38.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene {SKU_VALID_001} x 1
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {CART_ITEM_API_ENDPOINT}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {CART_ITEM_API_ENDPOINT} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {HERRAMIENTA_PROXY_APP} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca el control + del ítem {SKU_VALID_001}.
4. El sistema muestra el toast de error "No pudimos sumar el producto a tu carro. Vuelve a intentarlo. [CRT-022]".

**Resultado esperado**

Se muestra el toast CRT-022 con cierre manual (X) y la cantidad de {SKU_VALID_001} permanece en 1.

El total a pagar no se actualiza.

**Resultado obtenido**

Falta dato: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Cargar el valor y re-ejecutar.

**Observación**

Falta dato: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Cargar el valor y re-ejecutar.

---

### TC-B2C38-APP-015 - Verificar que un error al disminuir muestra el toast CRT-023 y la cantidad no cambia [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-38.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene {SKU_VALID_001} x 2
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {CART_ITEM_API_ENDPOINT}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {CART_ITEM_API_ENDPOINT} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {HERRAMIENTA_PROXY_APP} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca el control − del ítem {SKU_VALID_001}.
4. El sistema muestra el toast de error "No pudimos disminuir la cantidad de tu producto. Vuelve a intentarlo.[CRT-023]".

**Resultado esperado**

Se muestra el toast CRT-023 con cierre manual (X) y la cantidad de {SKU_VALID_001} permanece en 2.

El total a pagar no se actualiza.

**Resultado obtenido**

Falta dato: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Cargar el valor y re-ejecutar.

**Observación**

Falta dato: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Cargar el valor y re-ejecutar.

---

### TC-B2C38-APP-016 - Verificar que al quedar bajo el mínimo de compra se deshabilita Continuar con la entrega [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-38.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Método de entrega activo

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = TBD
- {MONTO_MINIMO_COMPRA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca el control − del ítem {SKU_VALID_001} hasta que el subtotal quede bajo {MONTO_MINIMO_COMPRA}.
4. El sistema recalcula el resumen de precios en tiempo real.

**Resultado esperado**

El botón "Continuar con la entrega" se muestra deshabilitado y se muestra el mensaje informativo de mínimo de compra sobre el subtotal.

**Resultado obtenido**

Ejecutado en Android con la cuenta de pruebas: al bajar el subtotal del mínimo de compra, «Continuar con la entrega» se deshabilita y muestra el mínimo de compra.

**Observación**

Ejecutado en Android con la cuenta de pruebas: al bajar el subtotal del mínimo de compra, «Continuar con la entrega» se deshabilita y muestra el mínimo de compra. iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 2 — carro con 11 unidades sobre el minimo](<B2C-38 APP Evidencias/TC-B2C38-APP-016-android-p02-carro-con-11-unidades-sobre-el-minimo.png>)

![Android · Paso 4 — carro bajo el minimo de compra](<B2C-38 APP Evidencias/TC-B2C38-APP-016-android-p04-carro-bajo-el-minimo-de-compra.png>)

![Android · Estado final](<B2C-38 APP Evidencias/TC-B2C38-APP-016-android.png>)

---

### TC-B2C38-APP-017 - Verificar que al llegar al stock disponible de un producto pesable se muestra el toast de máximo y el botón Máx deshabilitado [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-38.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- {SKU_PESABLE} tiene stock limitado en la tienda activa
- El carro contiene {SKU_PESABLE_STOCK_LIMITADO} con X kg menos que su stock disponible
- El Stock maximo del producto {SKU_PESABLE_STOCK_LIMITADO} es 4

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
-  {SKU_PESABLE_STOCK_LIMITADO} = 000000000000037972-KG
- {BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca el control + del ítem  {SKU_PESABLE_STOCK_LIMITADO}.
4. El sistema muestra un loading en el shelf y suma X kg, alcanzando el stock disponible.
5. El sistema muestra el toast informativo "Alcanzaste el máximo de productos" con ícono X.

**Resultado esperado**

Se muestra el toast "Alcanzaste el máximo de productos", el + se reemplaza por "Máx" deshabilitado y la cantidad en kg queda igual al stock disponible.

**Resultado obtenido**

Al llegar al stock máximo se muestra el toast y «Máx». La cantidad se muestra en «un.» (0,5 kg c/u) y no en kg.

**Observación**

Al llegar al stock máximo se muestra el toast y «Máx». La cantidad se muestra en «un.» (0,5 kg c/u) y no en kg. iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 4 — carro al llegar al stock del pesable](<B2C-38 APP Evidencias/TC-B2C38-APP-017-android-p04-carro-al-llegar-al-stock-del-pesable.png>)

![Android · Estado final](<B2C-38 APP Evidencias/TC-B2C38-APP-017-android.png>)

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
  "suite": "B2C-38 APP",
  "tc_file": "Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-38 APP Test Cases.xlsx",
  "title": "B2C-38 APP - Evidencias QA (Android)",
  "updated_at": "2026-10-29"
 },
 "history": {
  "2026-10-29": [
   "TC-B2C38-APP-001",
   "TC-B2C38-APP-002",
   "TC-B2C38-APP-003",
   "TC-B2C38-APP-004",
   "TC-B2C38-APP-005",
   "TC-B2C38-APP-006",
   "TC-B2C38-APP-007",
   "TC-B2C38-APP-008",
   "TC-B2C38-APP-009",
   "TC-B2C38-APP-010",
   "TC-B2C38-APP-011",
   "TC-B2C38-APP-012",
   "TC-B2C38-APP-013",
   "TC-B2C38-APP-014",
   "TC-B2C38-APP-015",
   "TC-B2C38-APP-016",
   "TC-B2C38-APP-017"
  ]
 },
 "results": [
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "La cantidad pasa de 1 a 2, el precio del ítem se actualiza y el resumen de precios se recalcula.",
   "form_factor": "app",
   "id": "TC-B2C38-APP-001",
   "name": "Verificar que el + de un producto estándar suma 1 unidad y actualiza el precio [App] [Guest]",
   "observation": "Test Data pendiente: {APP_BUILD} iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Test Data pendiente: {APP_BUILD}",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene {SKU_VALID_001} x 1",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — carro con 1 unidad",
     "file": "TC-B2C38-APP-001-android-p02-carro-con-1-unidad.png"
    },
    {
     "caption": "Android · Paso 4 — carro tras tocar",
     "file": "TC-B2C38-APP-001-android-p04-carro-tras-tocar.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C38-APP-001-android.png"
    }
   ],
   "spec": "tests-app/B2C-38.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca el control + del ítem {SKU_VALID_001}.\n4. El sistema muestra un loading en el shelf del producto mientras procesa la solicitud.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "La cantidad pasa de 2 a 1, el precio del ítem se actualiza y el control − pasa a mostrarse como ícono de tacho.",
   "form_factor": "app",
   "id": "TC-B2C38-APP-002",
   "name": "Verificar que el − de un producto estándar con 2 unidades resta 1 unidad [App] [Guest]",
   "observation": "Test Data pendiente: {APP_BUILD} iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Test Data pendiente: {APP_BUILD}",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene {SKU_VALID_001} x 2",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — carro con 2 unidades",
     "file": "TC-B2C38-APP-002-android-p02-carro-con-2-unidades.png"
    },
    {
     "caption": "Android · Paso 4 — carro tras tocar",
     "file": "TC-B2C38-APP-002-android-p04-carro-tras-tocar.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C38-APP-002-android.png"
    }
   ],
   "spec": "tests-app/B2C-38.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca el control − del ítem {SKU_VALID_001}.\n4. El sistema muestra un loading en el shelf del producto mientras procesa la solicitud.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El ítem {SKU_VALID_001} se elimina del carrito sin solicitar confirmación y el resumen de precios se recalcula.",
   "form_factor": "app",
   "id": "TC-B2C38-APP-003",
   "name": "Verificar que con 1 unidad el control − se muestra como tacho y elimina el ítem sin confirmar [App] [Guest]",
   "observation": "Test Data pendiente: {APP_BUILD} iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Test Data pendiente: {APP_BUILD}",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 1",
   "screenshots": [
    {
     "caption": "Android · Paso 3 — item con tacho",
     "file": "TC-B2C38-APP-003-android-p03-item-con-tacho.png"
    },
    {
     "caption": "Android · Paso 5 — carro tras tocar el tacho",
     "file": "TC-B2C38-APP-003-android-p05-carro-tras-tocar-el-tacho.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C38-APP-003-android.png"
    }
   ],
   "spec": "tests-app/B2C-38.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario verifica que el control − del ítem {SKU_VALID_001} se muestra como ícono de tacho.\n4. El usuario toca el ícono de tacho del control de cantidad.\n5. El sistema muestra un loading en el shelf del producto.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_UNITARIO} = 000000000400254005-UN"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "La cantidad pasa de 0,5 kg a 1 kg y el precio del ítem se actualiza según el peso.",
   "form_factor": "app",
   "id": "TC-B2C38-APP-004",
   "name": "Verificar que el + de un producto pesable suma 0,5 kg y actualiza el precio según el peso [App] [Guest]",
   "observation": "El pesable {SKU_PESABLE} (mangos granel 500 g) se muestra en «un.» y no en «kg»: cada toque cambia 1 un. (0,5 kg) y el subtotal se duplica. Se aprueba; la unidad con que se muestra la cantidad difiere de la del TC. iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "El pesable {SKU_PESABLE} (mangos granel 500 g) se muestra en «un.» y no en «kg»: cada toque cambia 1 un. (0,5 kg) y el subtotal se duplica. Se aprueba; la unidad con que se muestra la cantidad difiere de la del TC.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene {SKU_PESABLE} con 0,5 kg",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — carro con el pesable en 1 un 0 5 kg",
     "file": "TC-B2C38-APP-004-android-p02-carro-con-el-pesable-en-1-un-0-5-kg.png"
    },
    {
     "caption": "Android · Paso 4 — carro tras tocar",
     "file": "TC-B2C38-APP-004-android-p04-carro-tras-tocar.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C38-APP-004-android.png"
    }
   ],
   "spec": "tests-app/B2C-38.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca el control + del ítem {SKU_PESABLE}.\n4. El sistema muestra un loading en el shelf del producto mientras procesa la solicitud.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_PESABLE} = 000000000000037972-KG"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "La cantidad pasa de 1 kg a 0,5 kg, el precio se actualiza según el peso y el control − pasa a mostrarse como ícono de tacho.",
   "form_factor": "app",
   "id": "TC-B2C38-APP-005",
   "name": "Verificar que el − de un producto pesable resta 0,5 kg y actualiza el precio [App] [Guest]",
   "observation": "El pesable {SKU_PESABLE} (mangos granel 500 g) se muestra en «un.» y no en «kg»: cada toque cambia 1 un. (0,5 kg) y el subtotal baja a la mitad y el control − pasa a tacho. Se aprueba; la unidad con que se muestra la cantidad difiere de la del TC. iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "El pesable {SKU_PESABLE} (mangos granel 500 g) se muestra en «un.» y no en «kg»: cada toque cambia 1 un. (0,5 kg) y el subtotal baja a la mitad y el control − pasa a tacho. Se aprueba; la unidad con que se muestra la cantidad difiere de la del TC.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene {SKU_PESABLE} con 1 kg",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — carro con el pesable en 2 un 1 kg",
     "file": "TC-B2C38-APP-005-android-p02-carro-con-el-pesable-en-2-un-1-kg.png"
    },
    {
     "caption": "Android · Paso 4 — carro tras tocar",
     "file": "TC-B2C38-APP-005-android-p04-carro-tras-tocar.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C38-APP-005-android.png"
    }
   ],
   "spec": "tests-app/B2C-38.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca el control − del ítem {SKU_PESABLE}.\n4. El sistema muestra un loading en el shelf del producto mientras procesa la solicitud.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_PESABLE} = 000000000000037972-KG"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El ítem {SKU_PESABLE} se elimina del carrito sin solicitar confirmación y el resumen de precios se recalcula.",
   "form_factor": "app",
   "id": "TC-B2C38-APP-006",
   "name": "Verificar que un pesable en 0,5 kg muestra el tacho y se elimina sin confirmar [App] [Guest]",
   "observation": "CA1b sin diseño Mobile/App en la HU (⏳TBD); se valida el comportamiento funcional | Test Data pendiente: {APP_BUILD} iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "CA1b sin diseño Mobile/App en la HU (⏳TBD); se valida el comportamiento funcional | Test Data pendiente: {APP_BUILD}",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene {SKU_PESABLE} con 0,5 kg y {SKU_VALID_001} x 1",
   "screenshots": [
    {
     "caption": "Android · Paso 3 — pesable con tacho",
     "file": "TC-B2C38-APP-006-android-p03-pesable-con-tacho.png"
    },
    {
     "caption": "Android · Paso 5 — carro tras tocar el tacho",
     "file": "TC-B2C38-APP-006-android-p05-carro-tras-tocar-el-tacho.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C38-APP-006-android.png"
    }
   ],
   "spec": "tests-app/B2C-38.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario verifica que el control − del ítem {SKU_PESABLE} se muestra como ícono de tacho.\n4. El usuario toca el ícono de tacho del control de cantidad.\n5. El sistema muestra un loading en el shelf del producto.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_PESABLE} = 000000000000037972-KG\n- {SKU_VALID_001} = 000000000000675191-UN"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra el toast \"Alcanzaste el máximo de productos\", el + se reemplaza por el botón deshabilitado \"Máx\" y la cantidad permanece en el cartlimit.",
   "form_factor": "app",
   "id": "TC-B2C38-APP-007",
   "name": "Verificar que al llegar al cartlimit se muestra el toast de máximo y el botón Máx deshabilitado [App] [Logueado]",
   "observation": "Test Data pendiente: {APP_BUILD} iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Test Data pendiente: {APP_BUILD}",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- {SKU_CAR_LIMIT} tiene cartlimit configurado en BM\n- El carro contiene {SKU_CAR_LIMIT} con 1 unidad menos que su cartlimit.\n- El producto {SKU_CAR_LIMIT} tiene configurado como carlimit \"5\"",
   "screenshots": [
    {
     "caption": "Android · Paso 4 — carro al llegar al cartlimit",
     "file": "TC-B2C38-APP-007-android-p04-carro-al-llegar-al-cartlimit.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C38-APP-007-android.png"
    }
   ],
   "spec": "tests-app/B2C-38.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca el control + del ítem {SKU_CAR_LIMIT} hasta alcanzar su cartlimit.\n4. El sistema muestra el toast informativo \"Alcanzaste el máximo de productos\" con ícono X.\n5. El usuario toca el botón \"Máx\" que reemplazó al +.\n6. El sistema no agrega unidades.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_CAR_LIMIT} = 000000000000626717-UN"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra el toast \"Alcanzaste el máximo de productos\", el + se reemplaza por \"Máx\" deshabilitado y la cantidad queda igual al stock disponible.",
   "form_factor": "app",
   "id": "TC-B2C38-APP-008",
   "name": "Verificar que al llegar al stock disponible se muestra el toast de máximo y el botón Máx deshabilitado [App] [Guest]",
   "observation": "Test Data pendiente: {APP_BUILD} iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Test Data pendiente: {APP_BUILD}",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- El stock de {SKU_STOCK_LIMITADO} en la tienda activa es menor a su cartlimit\n- El carro contiene {SKU_STOCK_LIMITADO} con 1 unidad menos que su stock disponible",
   "screenshots": [
    {
     "caption": "Android · Paso 4 — carro al llegar al stock disponible",
     "file": "TC-B2C38-APP-008-android-p04-carro-al-llegar-al-stock-disponible.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C38-APP-008-android.png"
    }
   ],
   "spec": "tests-app/B2C-38.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca el control + del ítem {SKU_STOCK_LIMITADO} hasta alcanzar el stock disponible.\n4. El sistema muestra el toast informativo \"Alcanzaste el máximo de productos\" con ícono X.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_STOCK_LIMITADO} = 000000000638426003-UN"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El ítem {SKU_UNITARIO} se elimina sin solicitar confirmación, {SKU_VALID_001} se mantiene y el resumen de precios se recalcula.",
   "form_factor": "app",
   "id": "TC-B2C38-APP-009",
   "name": "Verificar que el ícono de eliminar quita un ítem disponible sin confirmación [App] [Guest]",
   "observation": "TC no ejecutable tal como está escrito: con {SKU_UNITARIO} x2 el ítem muestra el control − y no el ícono de eliminar (el tacho aparece solo con 1 unidad). Acción: corregir la precondición o el paso del TC.",
   "observed": "TC no ejecutable tal como está escrito: con {SKU_UNITARIO} x2 el ítem muestra el control − y no el ícono de eliminar (el tacho aparece solo con 1 unidad). Acción: corregir la precondición o el paso del TC.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 2",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — carro con sku valid 001 x1 y sku unitario x2",
     "file": "TC-B2C38-APP-009-android-p02-carro-con-sku-valid-001-x1-y-sku-unitario-x2.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C38-APP-009-android.png"
    }
   ],
   "spec": "tests-app/B2C-38.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca el ícono de eliminar del ítem {SKU_UNITARIO}.\n4. El sistema muestra un loading en el shelf del producto mientras procesa la solicitud.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_UNITARIO} = 000000000400254005-UN"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El ítem {SKU_UNITARIO} se elimina sin solicitar confirmación y el resumen de precios se recalcula.",
   "form_factor": "app",
   "id": "TC-B2C38-APP-010",
   "name": "Verificar que el swipe to delete quita un ítem disponible sin confirmación [App] [Guest]",
   "observation": "Test Data pendiente: {APP_BUILD} iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Test Data pendiente: {APP_BUILD}",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 2",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — carro con sku valid 001 x1 y sku unitario x2",
     "file": "TC-B2C38-APP-010-android-p02-carro-con-sku-valid-001-x1-y-sku-unitario-x2.png"
    },
    {
     "caption": "Android · Paso 3 — item deslizado",
     "file": "TC-B2C38-APP-010-android-p03-item-deslizado.png"
    },
    {
     "caption": "Android · Paso 5 — carro tras el swipe",
     "file": "TC-B2C38-APP-010-android-p05-carro-tras-el-swipe.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C38-APP-010-android.png"
    }
   ],
   "spec": "tests-app/B2C-38.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario desliza lateralmente el ítem {SKU_UNITARIO} y toca el botón rojo \"Eliminar\" con ícono de tacho que se revela.\n4. El sistema muestra un loading en el shelf del producto mientras procesa la solicitud.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_UNITARIO} = 000000000400254005-UN"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El ítem {SKU_NO_DISPONIBLE} se elimina sin solicitar confirmación y el resumen de precios se recalcula.",
   "form_factor": "app",
   "id": "TC-B2C38-APP-011",
   "name": "Verificar que el ícono de eliminar quita un ítem no disponible sin confirmación [App] [Logueado]",
   "observation": "Dato que no cumple la precondición: {SKU_NO_DISPONIBLE} aparece «Pronto disponible» y sin botón «Agregar» en la tienda activa de la cuenta, así que no se puede dejar en el carro. Se necesita una tienda con stock de ese SKU (la planilla solo declara {TIENDA_SIN_STOCK}) para agregarlo y luego cambiar a la tienda sin stock. Verificado en Android.",
   "observed": "Dato que no cumple la precondición: {SKU_NO_DISPONIBLE} aparece «Pronto disponible» y sin botón «Agregar» en la tienda activa de la cuenta, así que no se puede dejar en el carro. Se necesita una tienda con stock de ese SKU (la planilla solo declara {TIENDA_SIN_STOCK}) para agregarlo y luego cambiar a la tienda sin stock. Verificado en Android.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "screenshots": [
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C38-APP-011-android.png"
    }
   ],
   "spec": "tests-app/B2C-38.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca el ícono de eliminar del ítem no disponible {SKU_NO_DISPONIBLE}.\n4. El sistema muestra un loading en el shelf del producto mientras procesa la solicitud.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El ítem {SKU_NO_DISPONIBLE} se elimina sin solicitar confirmación y el resumen de precios se recalcula.",
   "form_factor": "app",
   "id": "TC-B2C38-APP-012",
   "name": "Verificar que el swipe to delete quita un ítem no disponible sin confirmación [App] [Logueado]",
   "observation": "Dato que no cumple la precondición: {SKU_NO_DISPONIBLE} aparece «Pronto disponible» y sin botón «Agregar» en la tienda activa de la cuenta, así que no se puede dejar en el carro. Se necesita una tienda con stock de ese SKU (la planilla solo declara {TIENDA_SIN_STOCK}) para agregarlo y luego cambiar a la tienda sin stock. Verificado en Android.",
   "observed": "Dato que no cumple la precondición: {SKU_NO_DISPONIBLE} aparece «Pronto disponible» y sin botón «Agregar» en la tienda activa de la cuenta, así que no se puede dejar en el carro. Se necesita una tienda con stock de ese SKU (la planilla solo declara {TIENDA_SIN_STOCK}) para agregarlo y luego cambiar a la tienda sin stock. Verificado en Android.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "spec": "tests-app/B2C-38.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario desliza lateralmente el ítem {SKU_NO_DISPONIBLE} y toca el botón rojo \"Eliminar\" con ícono de tacho que se revela.\n4. El sistema muestra un loading en el shelf del producto mientras procesa la solicitud.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El toast CRT-021 permanece visible hasta que el usuario lo cierra con la X y el ítem {SKU_UNITARIO} permanece en el carrito sin cambios.\nEl total a pagar no se actualiza.",
   "form_factor": "app",
   "id": "TC-B2C38-APP-013",
   "name": "Verificar que un error al eliminar muestra el toast CRT-021 y el ítem permanece [App] [Guest]",
   "observation": "Falta dato: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Cargar el valor y re-ejecutar.",
   "observed": "Falta dato: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Cargar el valor y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 1\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {CART_ITEM_API_ENDPOINT}",
   "spec": "tests-app/B2C-38.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca el ícono de eliminar del ítem {SKU_UNITARIO}.\n4. El sistema muestra el toast de error \"No pudimos eliminar el producto del carro. Vuelve a intentarlo. [CRT-021]\".\n5. El usuario espera 5 segundos y luego cierra el toast con la X.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {CART_ITEM_API_ENDPOINT} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_UNITARIO} = 000000000400254005-UN\n- {HERRAMIENTA_PROXY_APP} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra el toast CRT-022 con cierre manual (X) y la cantidad de {SKU_VALID_001} permanece en 1.\nEl total a pagar no se actualiza.",
   "form_factor": "app",
   "id": "TC-B2C38-APP-014",
   "name": "Verificar que un error al incrementar muestra el toast CRT-022 y la cantidad no cambia [App] [Guest]",
   "observation": "Falta dato: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Cargar el valor y re-ejecutar.",
   "observed": "Falta dato: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Cargar el valor y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene {SKU_VALID_001} x 1\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {CART_ITEM_API_ENDPOINT}",
   "spec": "tests-app/B2C-38.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca el control + del ítem {SKU_VALID_001}.\n4. El sistema muestra el toast de error \"No pudimos sumar el producto a tu carro. Vuelve a intentarlo. [CRT-022]\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {CART_ITEM_API_ENDPOINT} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {HERRAMIENTA_PROXY_APP} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra el toast CRT-023 con cierre manual (X) y la cantidad de {SKU_VALID_001} permanece en 2.\nEl total a pagar no se actualiza.",
   "form_factor": "app",
   "id": "TC-B2C38-APP-015",
   "name": "Verificar que un error al disminuir muestra el toast CRT-023 y la cantidad no cambia [App] [Guest]",
   "observation": "Falta dato: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Cargar el valor y re-ejecutar.",
   "observed": "Falta dato: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Cargar el valor y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene {SKU_VALID_001} x 2\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {CART_ITEM_API_ENDPOINT}",
   "spec": "tests-app/B2C-38.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca el control − del ítem {SKU_VALID_001}.\n4. El sistema muestra el toast de error \"No pudimos disminuir la cantidad de tu producto. Vuelve a intentarlo.[CRT-023]\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {CART_ITEM_API_ENDPOINT} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {HERRAMIENTA_PROXY_APP} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El botón \"Continuar con la entrega\" se muestra deshabilitado y se muestra el mensaje informativo de mínimo de compra sobre el subtotal.",
   "form_factor": "app",
   "id": "TC-B2C38-APP-016",
   "name": "Verificar que al quedar bajo el mínimo de compra se deshabilita Continuar con la entrega [App] [Logueado]",
   "observation": "Ejecutado en Android con la cuenta de pruebas: al bajar el subtotal del mínimo de compra, «Continuar con la entrega» se deshabilita y muestra el mínimo de compra. iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Ejecutado en Android con la cuenta de pruebas: al bajar el subtotal del mínimo de compra, «Continuar con la entrega» se deshabilita y muestra el mínimo de compra.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Método de entrega activo",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — carro con 11 unidades sobre el minimo",
     "file": "TC-B2C38-APP-016-android-p02-carro-con-11-unidades-sobre-el-minimo.png"
    },
    {
     "caption": "Android · Paso 4 — carro bajo el minimo de compra",
     "file": "TC-B2C38-APP-016-android-p04-carro-bajo-el-minimo-de-compra.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C38-APP-016-android.png"
    }
   ],
   "spec": "tests-app/B2C-38.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca el control − del ítem {SKU_VALID_001} hasta que el subtotal quede bajo {MONTO_MINIMO_COMPRA}.\n4. El sistema recalcula el resumen de precios en tiempo real.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = TBD\n- {MONTO_MINIMO_COMPRA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra el toast \"Alcanzaste el máximo de productos\", el + se reemplaza por \"Máx\" deshabilitado y la cantidad en kg queda igual al stock disponible.",
   "form_factor": "app",
   "id": "TC-B2C38-APP-017",
   "name": "Verificar que al llegar al stock disponible de un producto pesable se muestra el toast de máximo y el botón Máx deshabilitado [App] [Guest]",
   "observation": "Al llegar al stock máximo se muestra el toast y «Máx». La cantidad se muestra en «un.» (0,5 kg c/u) y no en kg. iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Al llegar al stock máximo se muestra el toast y «Máx». La cantidad se muestra en «un.» (0,5 kg c/u) y no en kg.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- {SKU_PESABLE} tiene stock limitado en la tienda activa\n- El carro contiene {SKU_PESABLE_STOCK_LIMITADO} con X kg menos que su stock disponible\n- El Stock maximo del producto {SKU_PESABLE_STOCK_LIMITADO} es 4",
   "screenshots": [
    {
     "caption": "Android · Paso 4 — carro al llegar al stock del pesable",
     "file": "TC-B2C38-APP-017-android-p04-carro-al-llegar-al-stock-del-pesable.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C38-APP-017-android.png"
    }
   ],
   "spec": "tests-app/B2C-38.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca el control + del ítem  {SKU_PESABLE_STOCK_LIMITADO}.\n4. El sistema muestra un loading en el shelf y suma X kg, alcanzando el stock disponible.\n5. El sistema muestra el toast informativo \"Alcanzaste el máximo de productos\" con ícono X.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n-  {SKU_PESABLE_STOCK_LIMITADO} = 000000000000037972-KG\n- {BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View"
  }
 ]
}
-->
