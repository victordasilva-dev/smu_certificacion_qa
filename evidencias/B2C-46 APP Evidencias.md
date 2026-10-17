# B2C-46 APP - Modal Están de vuelta en el carro (Android) - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-46 APP |
| Última actualización | 2026-10-16 |
| Ejecutado por | Victor Chirinos |
| Ambiente | App Unimarc v1.0.7 (DEV) |
| Dispositivo Android | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-46 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Fuera de alcance | 4 |
| Bloqueado Data | 2 |
| Aprobado | 1 |
| **Total** | **7** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-16 | 7 | TC-B2C46-APP-001, TC-B2C46-APP-002, TC-B2C46-APP-003, TC-B2C46-APP-004, TC-B2C46-APP-005, TC-B2C46-APP-006, TC-B2C46-APP-007 |

## Detalle por caso de prueba

### TC-B2C46-APP-001 - Verificar que al ingresar al carro con productos repuestos se muestra el modal Están de vuelta [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Fuera de alcance |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN y 000000000000674797-UN x 2
- Desde BM (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site) el stock de 000000000000674797-UN en https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View se deja en 0 y 000000000000674797-UN queda marcado como no disponible en el carro
- Desde BM (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site) el stock de 000000000000674797-UN en https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View se deja en un valor mayor o igual a 2 (restock en la tienda abastecedora activa)

**Data utilizada**

v1.0.7, iOS, contraseña de la cuenta, e_jmoran@smu.cl, https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View, https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site, 000000000000674797-UN, 000000000000675191-UN, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema compara los productos no disponibles contra el inventario actual.
3. El usuario revisa el contenido del modal.

**Resultado esperado**

Se muestra el modal "Están de vuelta" con ícono X, título "Están de vuelta", subtítulo "Estos productos volvieron a estar disponibles, los agregamos a tu carro", la lista de productos recuperados (000000000000674797-UN con nombre, cantidad disponible actual y unidad de medida) y el botón "Entendido".

**Resultado obtenido**

No se ejecutó.

**Observación**

TC que exige dejar en 0 y luego reponer desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST}: fuera del alcance de la automatización (no se modifica el inventario del BM de DEV compartido), igual que en la web de B2C-46. Además {USER_AUTH_001} es un correo y la v1.0.7 solo inicia sesión con RUT. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C46-APP-002 - Verificar que un invitado con productos repuestos también ve el modal Están de vuelta [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Fuera de alcance |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene 000000000000675191-UN y 000000000000674797-UN x 2
- Desde BM (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site) el stock de 000000000000674797-UN en https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View se deja en 0 y 000000000000674797-UN queda marcado como no disponible en el carro
- Desde BM (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site) el stock de 000000000000674797-UN en https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View se deja en un valor mayor o igual a 2 (restock en la tienda abastecedora activa)

**Data utilizada**

v1.0.7, iOS, contraseña de la cuenta, e_jmoran@smu.cl, https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View, https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site, 000000000000674797-UN, 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema compara los productos no disponibles contra el inventario actual.
3. El usuario revisa el contenido del modal.

**Resultado esperado**

Se muestra el modal "Están de vuelta" con el subtítulo "Estos productos volvieron a estar disponibles, los agregamos a tu carro" y 000000000000674797-UN en la lista de productos recuperados.

**Resultado obtenido**

No se ejecutó.

**Observación**

TC que exige dejar en 0 y luego reponer desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST}: fuera del alcance de la automatización (no se modifica el inventario del BM de DEV compartido), igual que en la web de B2C-46. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C46-APP-003 - Verificar que un pesable repuesto se lista en el modal con su unidad de medida [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Fuera de alcance |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN y 000000000000037972-KG con 1 kg
- Desde BM (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site) el stock de 000000000000037972-KG en https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View se deja en 0 y 000000000000037972-KG queda marcado como no disponible en el carro
- Desde BM (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site) el stock de 000000000000037972-KG en https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View se deja en un valor mayor o igual a 1 kg (restock en la tienda abastecedora activa)

**Data utilizada**

v1.0.7, iOS, contraseña de la cuenta, e_jmoran@smu.cl, https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View, https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site, 000000000000037972-KG, 000000000000675191-UN, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema compara los productos no disponibles contra el inventario actual.
3. El usuario revisa el ítem pesable en la lista del modal.

**Resultado esperado**

El modal lista 000000000000037972-KG con su nombre, la cantidad disponible actual y la unidad de medida en kg.

**Resultado obtenido**

No se ejecutó.

**Observación**

TC que exige dejar en 0 y luego reponer desde BM ({BM_URL}) el stock de {SKU_PESABLE} en {BM_INVENTORY_LIST}: fuera del alcance de la automatización (no se modifica el inventario del BM de DEV compartido), igual que en la web de B2C-46. Además {USER_AUTH_001} es un correo y la v1.0.7 solo inicia sesión con RUT. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C46-APP-004 - Verificar que el modal Están de vuelta se muestra una sola vez en la sesión [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Fuera de alcance |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN y 000000000000674797-UN x 2
- Desde BM (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site) el stock de 000000000000674797-UN en https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View se deja en 0 y 000000000000674797-UN queda marcado como no disponible en el carro
- Desde BM (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site) el stock de 000000000000674797-UN en https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View se deja en un valor mayor o igual a 2 (restock en la tienda abastecedora activa)

**Data utilizada**

v1.0.7, iOS, contraseña de la cuenta, e_jmoran@smu.cl, https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View, https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site, 000000000000674797-UN, 000000000000675191-UN, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema compara los productos no disponibles contra el inventario actual.
3. El sistema muestra el modal "Están de vuelta".
4. El usuario toca "Entendido".
5. El usuario navega al Home y vuelve a ingresar al carrito en la misma sesión.

**Resultado esperado**

Al volver a ingresar al carrito en la misma sesión, el modal "Están de vuelta" no se vuelve a mostrar.

**Resultado obtenido**

No se ejecutó.

**Observación**

TC que exige dejar en 0 y luego reponer desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST}: fuera del alcance de la automatización (no se modifica el inventario del BM de DEV compartido), igual que en la web de B2C-46. Además {USER_AUTH_001} es un correo y la v1.0.7 solo inicia sesión con RUT. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C46-APP-005 - Verificar que si ningún no disponible recuperó stock no se muestra el modal [App] [Logueado]

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
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN y 000000000400254005-UN
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN sigue sin stock

**Data utilizada**

v1.0.7, iOS, 000000000400254005-UN, 000000000000675191-UN, Unimarc Los leones, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.

**Resultado esperado**

No se muestra el modal "Están de vuelta" y el carrito se presenta con 000000000400254005-UN en la sección de no disponibles.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {USER_AUTH_001} (vhchirinos+comprador) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar una cuenta con RUT. Además {SKU_NO_DISPONIBLE} = 000000000400254005-UN tiene stock en {TIENDA_SIN_STOCK} = Unimarc Los Leones (verificado en la app el 2026-10-16, B2C-39 APP): no queda en no disponibles. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C46-APP-006 - Verificar que un logueado sin productos no disponibles no ve el modal [App] [Logueado]

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
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene solo 000000000000675191-UN (disponible)

**Data utilizada**

v1.0.7, iOS, 000000000000675191-UN, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.

**Resultado esperado**

El carrito se carga directamente en su estado habitual, sin el modal "Están de vuelta".

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {USER_AUTH_001} (vhchirinos+comprador) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar una cuenta con RUT. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C46-APP-007 - Verificar que un invitado sin productos no disponibles no ve el modal [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |
| Duración | 47.0 s |
| Spec | tests-app/B2C-46.spec.ts:25 |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene solo 000000000000675191-UN (disponible)

**Data utilizada**

v1.0.7, iOS, 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.

**Resultado esperado**

El carrito se carga directamente en su estado habitual, sin el modal "Están de vuelta".

**Resultado obtenido**

Invitado (datos borrados): {SKU_VALID_001} = 000000000000675191-UN agregado desde la SRP (Floating Pill '1 unidad'); al tocar el carro, 'Mi carro' carga con el ítem y su cantidad, sin el modal 'Están de vuelta'. Pasó en el reintento 1: en el primer intento la cantidad del ítem aún no estaba renderizada (tiempo de carga del carro).

**Observación**

Invitado (datos borrados): {SKU_VALID_001} = 000000000000675191-UN agregado desde la SRP (Floating Pill '1 unidad'); al tocar el carro, 'Mi carro' carga con el ítem y su cantidad, sin el modal 'Están de vuelta'. Pasó en el reintento 1: en el primer intento la cantidad del ítem aún no estaba renderizada (tiempo de carga del carro). La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Android · Paso 0 — carro de invitado con el sku disponible](<B2C-46 APP Evidencias/TC-B2C46-APP-007-android-p00-carro-de-invitado-con-el-sku-disponible.png>)

![Android · Paso 2 — carro en su estado habitual sin modal](<B2C-46 APP Evidencias/TC-B2C46-APP-007-android-p02-carro-en-su-estado-habitual-sin-modal.png>)

![Estado final del caso](<B2C-46 APP Evidencias/TC-B2C46-APP-007-android.png>)

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
  "suite": "B2C-46 APP",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-46 APP Test Cases.xlsx",
  "title": "B2C-46 APP - Modal Están de vuelta en el carro (Android) - Evidencias QA",
  "updated_at": "2026-10-16"
 },
 "history": {
  "2026-10-16": [
   "TC-B2C46-APP-001",
   "TC-B2C46-APP-002",
   "TC-B2C46-APP-003",
   "TC-B2C46-APP-004",
   "TC-B2C46-APP-005",
   "TC-B2C46-APP-006",
   "TC-B2C46-APP-007"
  ]
 },
 "results": [
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Se muestra el modal \"Están de vuelta\" con ícono X, título \"Están de vuelta\", subtítulo \"Estos productos volvieron a estar disponibles, los agregamos a tu carro\", la lista de productos recuperados (000000000000674797-UN con nombre, cantidad disponible actual y unidad de medida) y el botón \"Entendido\".",
   "form_factor": "app",
   "id": "TC-B2C46-APP-001",
   "name": "Verificar que al ingresar al carro con productos repuestos se muestra el modal Están de vuelta [App] [Logueado]",
   "observation": "TC que exige dejar en 0 y luego reponer desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST}: fuera del alcance de la automatización (no se modifica el inventario del BM de DEV compartido), igual que en la web de B2C-46. Además {USER_AUTH_001} es un correo y la v1.0.7 solo inicia sesión con RUT. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN y 000000000000674797-UN x 2\n- Desde BM (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site) el stock de 000000000000674797-UN en https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View se deja en 0 y 000000000000674797-UN queda marcado como no disponible en el carro\n- Desde BM (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site) el stock de 000000000000674797-UN en https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View se deja en un valor mayor o igual a 2 (restock en la tienda abastecedora activa)",
   "status": "Fuera de alcance",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema compara los productos no disponibles contra el inventario actual.\n3. El usuario revisa el contenido del modal.",
   "test_data": "v1.0.7, iOS, contraseña de la cuenta, e_jmoran@smu.cl, https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View, https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site, 000000000000674797-UN, 000000000000675191-UN, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Se muestra el modal \"Están de vuelta\" con el subtítulo \"Estos productos volvieron a estar disponibles, los agregamos a tu carro\" y 000000000000674797-UN en la lista de productos recuperados.",
   "form_factor": "app",
   "id": "TC-B2C46-APP-002",
   "name": "Verificar que un invitado con productos repuestos también ve el modal Están de vuelta [App] [Guest]",
   "observation": "TC que exige dejar en 0 y luego reponer desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST}: fuera del alcance de la automatización (no se modifica el inventario del BM de DEV compartido), igual que en la web de B2C-46. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene 000000000000675191-UN y 000000000000674797-UN x 2\n- Desde BM (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site) el stock de 000000000000674797-UN en https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View se deja en 0 y 000000000000674797-UN queda marcado como no disponible en el carro\n- Desde BM (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site) el stock de 000000000000674797-UN en https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View se deja en un valor mayor o igual a 2 (restock en la tienda abastecedora activa)",
   "status": "Fuera de alcance",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema compara los productos no disponibles contra el inventario actual.\n3. El usuario revisa el contenido del modal.",
   "test_data": "v1.0.7, iOS, contraseña de la cuenta, e_jmoran@smu.cl, https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View, https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site, 000000000000674797-UN, 000000000000675191-UN"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El modal lista 000000000000037972-KG con su nombre, la cantidad disponible actual y la unidad de medida en kg.",
   "form_factor": "app",
   "id": "TC-B2C46-APP-003",
   "name": "Verificar que un pesable repuesto se lista en el modal con su unidad de medida [App] [Logueado]",
   "observation": "TC que exige dejar en 0 y luego reponer desde BM ({BM_URL}) el stock de {SKU_PESABLE} en {BM_INVENTORY_LIST}: fuera del alcance de la automatización (no se modifica el inventario del BM de DEV compartido), igual que en la web de B2C-46. Además {USER_AUTH_001} es un correo y la v1.0.7 solo inicia sesión con RUT. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN y 000000000000037972-KG con 1 kg\n- Desde BM (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site) el stock de 000000000000037972-KG en https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View se deja en 0 y 000000000000037972-KG queda marcado como no disponible en el carro\n- Desde BM (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site) el stock de 000000000000037972-KG en https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View se deja en un valor mayor o igual a 1 kg (restock en la tienda abastecedora activa)",
   "status": "Fuera de alcance",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema compara los productos no disponibles contra el inventario actual.\n3. El usuario revisa el ítem pesable en la lista del modal.",
   "test_data": "v1.0.7, iOS, contraseña de la cuenta, e_jmoran@smu.cl, https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View, https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site, 000000000000037972-KG, 000000000000675191-UN, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Al volver a ingresar al carrito en la misma sesión, el modal \"Están de vuelta\" no se vuelve a mostrar.",
   "form_factor": "app",
   "id": "TC-B2C46-APP-004",
   "name": "Verificar que el modal Están de vuelta se muestra una sola vez en la sesión [App] [Logueado]",
   "observation": "TC que exige dejar en 0 y luego reponer desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST}: fuera del alcance de la automatización (no se modifica el inventario del BM de DEV compartido), igual que en la web de B2C-46. Además {USER_AUTH_001} es un correo y la v1.0.7 solo inicia sesión con RUT. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN y 000000000000674797-UN x 2\n- Desde BM (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site) el stock de 000000000000674797-UN en https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View se deja en 0 y 000000000000674797-UN queda marcado como no disponible en el carro\n- Desde BM (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site) el stock de 000000000000674797-UN en https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View se deja en un valor mayor o igual a 2 (restock en la tienda abastecedora activa)",
   "status": "Fuera de alcance",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema compara los productos no disponibles contra el inventario actual.\n3. El sistema muestra el modal \"Están de vuelta\".\n4. El usuario toca \"Entendido\".\n5. El usuario navega al Home y vuelve a ingresar al carrito en la misma sesión.",
   "test_data": "v1.0.7, iOS, contraseña de la cuenta, e_jmoran@smu.cl, https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View, https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site, 000000000000674797-UN, 000000000000675191-UN, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "No se muestra el modal \"Están de vuelta\" y el carrito se presenta con 000000000400254005-UN en la sección de no disponibles.",
   "form_factor": "app",
   "id": "TC-B2C46-APP-005",
   "name": "Verificar que si ningún no disponible recuperó stock no se muestra el modal [App] [Logueado]",
   "observation": "Causa: {USER_AUTH_001} (vhchirinos+comprador) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar una cuenta con RUT. Además {SKU_NO_DISPONIBLE} = 000000000400254005-UN tiene stock en {TIENDA_SIN_STOCK} = Unimarc Los Leones (verificado en la app el 2026-10-16, B2C-39 APP): no queda en no disponibles. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN y 000000000400254005-UN\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN sigue sin stock",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.",
   "test_data": "v1.0.7, iOS, 000000000400254005-UN, 000000000000675191-UN, Unimarc Los leones, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El carrito se carga directamente en su estado habitual, sin el modal \"Están de vuelta\".",
   "form_factor": "app",
   "id": "TC-B2C46-APP-006",
   "name": "Verificar que un logueado sin productos no disponibles no ve el modal [App] [Logueado]",
   "observation": "Causa: {USER_AUTH_001} (vhchirinos+comprador) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar una cuenta con RUT. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene solo 000000000000675191-UN (disponible)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.",
   "test_data": "v1.0.7, iOS, 000000000000675191-UN, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "duration_s": 47,
   "executed_at": "2026-10-16",
   "expected": "El carrito se carga directamente en su estado habitual, sin el modal \"Están de vuelta\".",
   "form_factor": "app",
   "id": "TC-B2C46-APP-007",
   "name": "Verificar que un invitado sin productos no disponibles no ve el modal [App] [Guest]",
   "observation": "Invitado (datos borrados): {SKU_VALID_001} = 000000000000675191-UN agregado desde la SRP (Floating Pill '1 unidad'); al tocar el carro, 'Mi carro' carga con el ítem y su cantidad, sin el modal 'Están de vuelta'. Pasó en el reintento 1: en el primer intento la cantidad del ítem aún no estaba renderizada (tiempo de carga del carro). La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "Invitado (datos borrados): {SKU_VALID_001} = 000000000000675191-UN agregado desde la SRP (Floating Pill '1 unidad'); al tocar el carro, 'Mi carro' carga con el ítem y su cantidad, sin el modal 'Están de vuelta'. Pasó en el reintento 1: en el primer intento la cantidad del ítem aún no estaba renderizada (tiempo de carga del carro).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene solo 000000000000675191-UN (disponible)",
   "screenshots": [
    {
     "caption": "Android · Paso 0 — carro de invitado con el sku disponible",
     "file": "TC-B2C46-APP-007-android-p00-carro-de-invitado-con-el-sku-disponible.png"
    },
    {
     "caption": "Android · Paso 2 — carro en su estado habitual sin modal",
     "file": "TC-B2C46-APP-007-android-p02-carro-en-su-estado-habitual-sin-modal.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C46-APP-007-android.png"
    }
   ],
   "spec": "tests-app/B2C-46.spec.ts:25",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.",
   "test_data": "v1.0.7, iOS, 000000000000675191-UN"
  }
 ]
}
-->
