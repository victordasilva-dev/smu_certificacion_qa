# B2C-148 APP

| Campo | Valor |
|---|---|
| Suite | B2C-148 |
| Última actualización | 2026-10-27 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | App Unimarc v1.0.1 (DEV) |
| Dispositivo Android | Pixel 6 · Android 14 (emulador) |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-148 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 6 |
| **Total** | **6** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-27 | 6 | TC-B2C148-APP-001, TC-B2C148-APP-002, TC-B2C148-APP-003, TC-B2C148-APP-004, TC-B2C148-APP-005, TC-B2C148-APP-006 |

## Detalle por caso de prueba

### TC-B2C148-APP-001 - Verificar que en despacho cambiar solo la fecha refresca los horarios sin confirmar la ventana

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- Calle Uno 23, La Florida = Casa
- 000000000000675191-UN = 000000000000675191-UN
- 11 = TBD
- 20000 = TBD
- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario selecciona otra fecha disponible en "¿Cuándo quieres recibir tu compra?".

**Resultado esperado**

Se muestran los horarios de la nueva fecha con uno destacado por defecto; no hay loader, "Fecha de entrega" y el subtotal no cambian e "Ir a pagar" sigue habilitado.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.

**Evidencia**

![Android · Paso 2 — sku pronto disponible con sesion](<B2C-148 Evidencias/TC-B2C148-APP-001-android-p02-sku-pronto-disponible-con-sesion.png>)

---

### TC-B2C148-APP-002 - Verificar que en despacho elegir otro horario lo guarda y muestra el toast de confirmación

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- Calle Uno 23, La Florida = Casa
- 000000000000675191-UN = 000000000000675191-UN
- 11 = TBD
- 20000 = TBD
- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario selecciona otro horario disponible en "¿Cuál es tu horario de preferencia?".
6. El sistema muestra un loader sobre el selector de ventana.

**Resultado esperado**

"Fecha de entrega" muestra el nuevo día y horario, el subtotal refleja el costo de la ventana elegida, aparece el toast "La fecha de despacho ha sido actualizada correctamente." (4 s + X) e "Ir a pagar" sigue habilitado.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.

**Evidencia**

![Android · Paso 2 — sku pronto disponible con sesion](<B2C-148 Evidencias/TC-B2C148-APP-002-android-p02-sku-pronto-disponible-con-sesion.png>)

---

### TC-B2C148-APP-003 - Verificar que en despacho un error al guardar el horario muestra ME-035 y conserva la ventana

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {VENTANA_API_ENDPOINT}

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- {VENTANA_API_ENDPOINT} = TBD
- Calle Uno 23, La Florida = Casa
- 000000000000675191-UN = 000000000000675191-UN
- 11 = TBD
- 20000 = TBD
- {HERRAMIENTA_PROXY_APP} = TBD
- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario selecciona otro horario disponible.

**Resultado esperado**

Se muestra el toast "Lo sentimos, no pudimos cambiar tu fecha de entrega. Inténtalo nuevamente. Error: ME-035" hasta cerrarlo con la X y "Fecha de entrega" mantiene la ventana anterior.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición. Además {HERRAMIENTA_PROXY_APP} y {VENTANA_API_ENDPOINT} no tienen valor en la data.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.

**Evidencia**

![Android · Paso 2 — sku pronto disponible con sesion](<B2C-148 Evidencias/TC-B2C148-APP-003-android-p02-sku-pronto-disponible-con-sesion.png>)

---

### TC-B2C148-APP-004 - Verificar que en retiro cambiar solo la fecha refresca los horarios sin confirmar la ventana

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Retiro en tienda configurado con Unimarc Las Condes

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- Unimarc Las Condes = TBD
- 000000000000675191-UN = 000000000000675191-UN
- 11 = TBD
- 20000 = TBD
- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario selecciona otra fecha disponible en "¿Cuándo quieres retirar tu compra?".

**Resultado esperado**

Se muestran los horarios de la nueva fecha con uno destacado por defecto; no hay loader, "Fecha de retiro" no cambia e "Ir a pagar" sigue habilitado.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.

**Evidencia**

![Android · Paso 2 — sku pronto disponible con sesion](<B2C-148 Evidencias/TC-B2C148-APP-004-android-p02-sku-pronto-disponible-con-sesion.png>)

---

### TC-B2C148-APP-005 - Verificar que en retiro elegir otro horario lo guarda y muestra el toast de confirmación

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Retiro en tienda configurado con Unimarc Las Condes

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- Unimarc Las Condes = TBD
- 000000000000675191-UN = 000000000000675191-UN
- 11 = TBD
- 20000 = TBD
- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario selecciona otro horario disponible en "¿Cuál es tu horario de preferencia?".
6. El sistema muestra un loader sobre el selector de ventana.

**Resultado esperado**

"Fecha de retiro" muestra el nuevo día y horario, aparece el toast "La fecha de retiro ha sido actualizada correctamente." (4 s + X) e "Ir a pagar" sigue habilitado.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.

**Evidencia**

![Android · Paso 2 — sku pronto disponible con sesion](<B2C-148 Evidencias/TC-B2C148-APP-005-android-p02-sku-pronto-disponible-con-sesion.png>)

---

### TC-B2C148-APP-006 - Verificar que en retiro un error al guardar el horario muestra ME-035 y conserva la ventana

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Retiro en tienda configurado con Unimarc Las Condes
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {VENTANA_API_ENDPOINT}

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- {VENTANA_API_ENDPOINT} = TBD
- Unimarc Las Condes = TBD
- 000000000000675191-UN = 000000000000675191-UN
- 11 = TBD
- 20000 = TBD
- {HERRAMIENTA_PROXY_APP} = TBD
- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario selecciona otro horario disponible.

**Resultado esperado**

Se muestra el toast "Lo sentimos, no pudimos cambiar tu fecha de entrega. Inténtalo nuevamente. Error: ME-035" hasta cerrarlo con la X y "Fecha de retiro" mantiene la ventana anterior.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición. Además {HERRAMIENTA_PROXY_APP} y {VENTANA_API_ENDPOINT} no tienen valor en la data.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.

**Evidencia**

![Android · Paso 2 — sku pronto disponible con sesion](<B2C-148 Evidencias/TC-B2C148-APP-006-android-p02-sku-pronto-disponible-con-sesion.png>)

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "devices": {
   "android": "Pixel 6 · Android 14 (emulador)"
  },
  "environment": "App Unimarc v1.0.1 (DEV)",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-148",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-148 APP Test Cases.xlsx",
  "title": "B2C-148 APP",
  "updated_at": "2026-10-27"
 },
 "history": {
  "2026-10-27": [
   "TC-B2C148-APP-001",
   "TC-B2C148-APP-002",
   "TC-B2C148-APP-003",
   "TC-B2C148-APP-004",
   "TC-B2C148-APP-005",
   "TC-B2C148-APP-006"
  ]
 },
 "results": [
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Se muestran los horarios de la nueva fecha con uno destacado por defecto; no hay loader, \"Fecha de entrega\" y el subtotal no cambian e \"Ir a pagar\" sigue habilitado.",
   "form_factor": "app",
   "id": "TC-B2C148-APP-001",
   "name": "Verificar que en despacho cambiar solo la fecha refresca los horarios sin confirmar la ventana",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — sku pronto disponible con sesion",
     "file": "TC-B2C148-APP-001-android-p02-sku-pronto-disponible-con-sesion.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario selecciona otra fecha disponible en \"¿Cuándo quieres recibir tu compra?\".",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- Calle Uno 23, La Florida = Casa\n- 000000000000675191-UN = 000000000000675191-UN\n- 11 = TBD\n- 20000 = TBD\n- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "\"Fecha de entrega\" muestra el nuevo día y horario, el subtotal refleja el costo de la ventana elegida, aparece el toast \"La fecha de despacho ha sido actualizada correctamente.\" (4 s + X) e \"Ir a pagar\" sigue habilitado.",
   "form_factor": "app",
   "id": "TC-B2C148-APP-002",
   "name": "Verificar que en despacho elegir otro horario lo guarda y muestra el toast de confirmación",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — sku pronto disponible con sesion",
     "file": "TC-B2C148-APP-002-android-p02-sku-pronto-disponible-con-sesion.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario selecciona otro horario disponible en \"¿Cuál es tu horario de preferencia?\".\n6. El sistema muestra un loader sobre el selector de ventana.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- Calle Uno 23, La Florida = Casa\n- 000000000000675191-UN = 000000000000675191-UN\n- 11 = TBD\n- 20000 = TBD\n- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Se muestra el toast \"Lo sentimos, no pudimos cambiar tu fecha de entrega. Inténtalo nuevamente. Error: ME-035\" hasta cerrarlo con la X y \"Fecha de entrega\" mantiene la ventana anterior.",
   "form_factor": "app",
   "id": "TC-B2C148-APP-003",
   "name": "Verificar que en despacho un error al guardar el horario muestra ME-035 y conserva la ventana",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición. Además {HERRAMIENTA_PROXY_APP} y {VENTANA_API_ENDPOINT} no tienen valor en la data.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {VENTANA_API_ENDPOINT}",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — sku pronto disponible con sesion",
     "file": "TC-B2C148-APP-003-android-p02-sku-pronto-disponible-con-sesion.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario selecciona otro horario disponible.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- {VENTANA_API_ENDPOINT} = TBD\n- Calle Uno 23, La Florida = Casa\n- 000000000000675191-UN = 000000000000675191-UN\n- 11 = TBD\n- 20000 = TBD\n- {HERRAMIENTA_PROXY_APP} = TBD\n- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Se muestran los horarios de la nueva fecha con uno destacado por defecto; no hay loader, \"Fecha de retiro\" no cambia e \"Ir a pagar\" sigue habilitado.",
   "form_factor": "app",
   "id": "TC-B2C148-APP-004",
   "name": "Verificar que en retiro cambiar solo la fecha refresca los horarios sin confirmar la ventana",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Retiro en tienda configurado con Unimarc Las Condes",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — sku pronto disponible con sesion",
     "file": "TC-B2C148-APP-004-android-p02-sku-pronto-disponible-con-sesion.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario selecciona otra fecha disponible en \"¿Cuándo quieres retirar tu compra?\".",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- Unimarc Las Condes = TBD\n- 000000000000675191-UN = 000000000000675191-UN\n- 11 = TBD\n- 20000 = TBD\n- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "\"Fecha de retiro\" muestra el nuevo día y horario, aparece el toast \"La fecha de retiro ha sido actualizada correctamente.\" (4 s + X) e \"Ir a pagar\" sigue habilitado.",
   "form_factor": "app",
   "id": "TC-B2C148-APP-005",
   "name": "Verificar que en retiro elegir otro horario lo guarda y muestra el toast de confirmación",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Retiro en tienda configurado con Unimarc Las Condes",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — sku pronto disponible con sesion",
     "file": "TC-B2C148-APP-005-android-p02-sku-pronto-disponible-con-sesion.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario selecciona otro horario disponible en \"¿Cuál es tu horario de preferencia?\".\n6. El sistema muestra un loader sobre el selector de ventana.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- Unimarc Las Condes = TBD\n- 000000000000675191-UN = 000000000000675191-UN\n- 11 = TBD\n- 20000 = TBD\n- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Se muestra el toast \"Lo sentimos, no pudimos cambiar tu fecha de entrega. Inténtalo nuevamente. Error: ME-035\" hasta cerrarlo con la X y \"Fecha de retiro\" mantiene la ventana anterior.",
   "form_factor": "app",
   "id": "TC-B2C148-APP-006",
   "name": "Verificar que en retiro un error al guardar el horario muestra ME-035 y conserva la ventana",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición. Además {HERRAMIENTA_PROXY_APP} y {VENTANA_API_ENDPOINT} no tienen valor en la data.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Retiro en tienda configurado con Unimarc Las Condes\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {VENTANA_API_ENDPOINT}",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — sku pronto disponible con sesion",
     "file": "TC-B2C148-APP-006-android-p02-sku-pronto-disponible-con-sesion.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario selecciona otro horario disponible.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- {VENTANA_API_ENDPOINT} = TBD\n- Unimarc Las Condes = TBD\n- 000000000000675191-UN = 000000000000675191-UN\n- 11 = TBD\n- 20000 = TBD\n- {HERRAMIENTA_PROXY_APP} = TBD\n- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com"
  }
 ]
}
-->
