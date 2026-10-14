# B2C-148 APP - Datos de entrega: cambio de fecha y horario - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-148 APP |
| Última actualización | 2026-10-14 |
| Ejecutado por | Victor Chirinos |
| Ambiente | App Unimarc v1.0.7 (com.smuapp.unimarc) contra DEV |
| Dispositivo Android | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |
| Origen de los TC | Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-148 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 6 |
| **Total** | **6** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-14 | 6 | TC-B2C148-APP-001, TC-B2C148-APP-002, TC-B2C148-APP-003, TC-B2C148-APP-004, TC-B2C148-APP-005, TC-B2C148-APP-006 |

## Detalle por caso de prueba

### TC-B2C148-APP-001 - Verificar que en despacho cambiar solo la fecha refresca los horarios sin confirmar la ventana [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida

**Data utilizada**

v1.0.7, iOS, Calle Uno 23, La Florida, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario selecciona otra fecha disponible en "¿Cuándo quieres recibir tu compra?".

**Resultado esperado**

Se muestran los horarios de la nueva fecha con uno destacado por defecto; no hay loader, "Fecha de entrega" y el subtotal no cambian e "Ir a pagar" sigue habilitado.

**Observación**

Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado (verificado en el emulador el 2026-10-14). Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Re-ejecución solo Android (build v1.0.7, com.smuapp.unimarc) pedida el 2026-10-14; antes estaba en Fuera de Alcance. La fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. La columna iOS no se tocó.

---

### TC-B2C148-APP-002 - Verificar que en despacho elegir otro horario lo guarda y muestra el toast de confirmación [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida

**Data utilizada**

v1.0.7, iOS, Calle Uno 23, La Florida, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario selecciona otro horario disponible en "¿Cuál es tu horario de preferencia?".
6. El sistema muestra un loader sobre el selector de ventana.

**Resultado esperado**

"Fecha de entrega" muestra el nuevo día y horario, el subtotal refleja el costo de la ventana elegida, aparece el toast "La fecha de despacho ha sido actualizada correctamente." (4 s + X) e "Ir a pagar" sigue habilitado.

**Observación**

Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado (verificado en el emulador el 2026-10-14). Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Re-ejecución solo Android (build v1.0.7, com.smuapp.unimarc) pedida el 2026-10-14; antes estaba en Fuera de Alcance. La fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. La columna iOS no se tocó.

---

### TC-B2C148-APP-003 - Verificar que en despacho un error al guardar el horario muestra ME-035 y conserva la ventana [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {VENTANA_API_ENDPOINT}

**Data utilizada**

v1.0.7, iOS, Calle Uno 23, La Florida, {HERRAMIENTA_PROXY_APP}, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com, {VENTANA_API_ENDPOINT}

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario selecciona otro horario disponible.

**Resultado esperado**

Se muestra el toast "Lo sentimos, no pudimos cambiar tu fecha de entrega. Inténtalo nuevamente. Error: ME-035" hasta cerrarlo con la X y "Fecha de entrega" mantiene la ventana anterior.

**Observación**

Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado (verificado en el emulador el 2026-10-14). Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Además, {HERRAMIENTA_PROXY_APP} y {VENTANA_API_ENDPOINT} están en TBD en el Excel de data. Re-ejecución solo Android (build v1.0.7, com.smuapp.unimarc) pedida el 2026-10-14; antes estaba en Fuera de Alcance. La fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. La columna iOS no se tocó.

---

### TC-B2C148-APP-004 - Verificar que en retiro cambiar solo la fecha refresca los horarios sin confirmar la ventana [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Retiro en tienda configurado con Unimarc Las Condes

**Data utilizada**

v1.0.7, iOS, 20000, 000000000000675191-UN, Unimarc Las Condes, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario selecciona otra fecha disponible en "¿Cuándo quieres retirar tu compra?".

**Resultado esperado**

Se muestran los horarios de la nueva fecha con uno destacado por defecto; no hay loader, "Fecha de retiro" no cambia e "Ir a pagar" sigue habilitado.

**Observación**

Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado (verificado en el emulador el 2026-10-14). Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Re-ejecución solo Android (build v1.0.7, com.smuapp.unimarc) pedida el 2026-10-14; antes estaba en Fuera de Alcance. La fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. La columna iOS no se tocó.

---

### TC-B2C148-APP-005 - Verificar que en retiro elegir otro horario lo guarda y muestra el toast de confirmación [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Retiro en tienda configurado con Unimarc Las Condes

**Data utilizada**

v1.0.7, iOS, 20000, 000000000000675191-UN, Unimarc Las Condes, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario selecciona otro horario disponible en "¿Cuál es tu horario de preferencia?".
6. El sistema muestra un loader sobre el selector de ventana.

**Resultado esperado**

"Fecha de retiro" muestra el nuevo día y horario, aparece el toast "La fecha de retiro ha sido actualizada correctamente." (4 s + X) e "Ir a pagar" sigue habilitado.

**Observación**

Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado (verificado en el emulador el 2026-10-14). Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Re-ejecución solo Android (build v1.0.7, com.smuapp.unimarc) pedida el 2026-10-14; antes estaba en Fuera de Alcance. La fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. La columna iOS no se tocó.

---

### TC-B2C148-APP-006 - Verificar que en retiro un error al guardar el horario muestra ME-035 y conserva la ventana [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Retiro en tienda configurado con Unimarc Las Condes
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {VENTANA_API_ENDPOINT}

**Data utilizada**

v1.0.7, iOS, {HERRAMIENTA_PROXY_APP}, 20000, 000000000000675191-UN, Unimarc Las Condes, 11, vhchirinos+comprador@avatar-global.com, {VENTANA_API_ENDPOINT}

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario selecciona otro horario disponible.

**Resultado esperado**

Se muestra el toast "Lo sentimos, no pudimos cambiar tu fecha de entrega. Inténtalo nuevamente. Error: ME-035" hasta cerrarlo con la X y "Fecha de retiro" mantiene la ventana anterior.

**Observación**

Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado (verificado en el emulador el 2026-10-14). Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Además, {HERRAMIENTA_PROXY_APP} y {VENTANA_API_ENDPOINT} están en TBD en el Excel de data. Re-ejecución solo Android (build v1.0.7, com.smuapp.unimarc) pedida el 2026-10-14; antes estaba en Fuera de Alcance. La fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. La columna iOS no se tocó.

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "devices": {
   "android": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)"
  },
  "environment": "App Unimarc v1.0.7 (com.smuapp.unimarc) contra DEV",
  "executed_by": "Victor Chirinos",
  "suite": "B2C-148 APP",
  "tc_file": "Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-148 APP Test Cases.xlsx",
  "title": "B2C-148 APP - Datos de entrega: cambio de fecha y horario - Evidencias QA",
  "updated_at": "2026-10-14"
 },
 "history": {
  "2026-10-14": [
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
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "Se muestran los horarios de la nueva fecha con uno destacado por defecto; no hay loader, \"Fecha de entrega\" y el subtotal no cambian e \"Ir a pagar\" sigue habilitado.",
   "form_factor": "app",
   "id": "TC-B2C148-APP-001",
   "name": "Verificar que en despacho cambiar solo la fecha refresca los horarios sin confirmar la ventana [App] [Logueado]",
   "observation": "Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado (verificado en el emulador el 2026-10-14). Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Re-ejecución solo Android (build v1.0.7, com.smuapp.unimarc) pedida el 2026-10-14; antes estaba en Fuera de Alcance. La fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. La columna iOS no se tocó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario selecciona otra fecha disponible en \"¿Cuándo quieres recibir tu compra?\".",
   "test_data": "v1.0.7, iOS, Calle Uno 23, La Florida, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "\"Fecha de entrega\" muestra el nuevo día y horario, el subtotal refleja el costo de la ventana elegida, aparece el toast \"La fecha de despacho ha sido actualizada correctamente.\" (4 s + X) e \"Ir a pagar\" sigue habilitado.",
   "form_factor": "app",
   "id": "TC-B2C148-APP-002",
   "name": "Verificar que en despacho elegir otro horario lo guarda y muestra el toast de confirmación [App] [Logueado]",
   "observation": "Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado (verificado en el emulador el 2026-10-14). Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Re-ejecución solo Android (build v1.0.7, com.smuapp.unimarc) pedida el 2026-10-14; antes estaba en Fuera de Alcance. La fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. La columna iOS no se tocó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario selecciona otro horario disponible en \"¿Cuál es tu horario de preferencia?\".\n6. El sistema muestra un loader sobre el selector de ventana.",
   "test_data": "v1.0.7, iOS, Calle Uno 23, La Florida, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "Se muestra el toast \"Lo sentimos, no pudimos cambiar tu fecha de entrega. Inténtalo nuevamente. Error: ME-035\" hasta cerrarlo con la X y \"Fecha de entrega\" mantiene la ventana anterior.",
   "form_factor": "app",
   "id": "TC-B2C148-APP-003",
   "name": "Verificar que en despacho un error al guardar el horario muestra ME-035 y conserva la ventana [App] [Logueado]",
   "observation": "Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado (verificado en el emulador el 2026-10-14). Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Además, {HERRAMIENTA_PROXY_APP} y {VENTANA_API_ENDPOINT} están en TBD en el Excel de data. Re-ejecución solo Android (build v1.0.7, com.smuapp.unimarc) pedida el 2026-10-14; antes estaba en Fuera de Alcance. La fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. La columna iOS no se tocó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {VENTANA_API_ENDPOINT}",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario selecciona otro horario disponible.",
   "test_data": "v1.0.7, iOS, Calle Uno 23, La Florida, {HERRAMIENTA_PROXY_APP}, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com, {VENTANA_API_ENDPOINT}"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "Se muestran los horarios de la nueva fecha con uno destacado por defecto; no hay loader, \"Fecha de retiro\" no cambia e \"Ir a pagar\" sigue habilitado.",
   "form_factor": "app",
   "id": "TC-B2C148-APP-004",
   "name": "Verificar que en retiro cambiar solo la fecha refresca los horarios sin confirmar la ventana [App] [Logueado]",
   "observation": "Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado (verificado en el emulador el 2026-10-14). Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Re-ejecución solo Android (build v1.0.7, com.smuapp.unimarc) pedida el 2026-10-14; antes estaba en Fuera de Alcance. La fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. La columna iOS no se tocó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Retiro en tienda configurado con Unimarc Las Condes",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario selecciona otra fecha disponible en \"¿Cuándo quieres retirar tu compra?\".",
   "test_data": "v1.0.7, iOS, 20000, 000000000000675191-UN, Unimarc Las Condes, 11, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "\"Fecha de retiro\" muestra el nuevo día y horario, aparece el toast \"La fecha de retiro ha sido actualizada correctamente.\" (4 s + X) e \"Ir a pagar\" sigue habilitado.",
   "form_factor": "app",
   "id": "TC-B2C148-APP-005",
   "name": "Verificar que en retiro elegir otro horario lo guarda y muestra el toast de confirmación [App] [Logueado]",
   "observation": "Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado (verificado en el emulador el 2026-10-14). Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Re-ejecución solo Android (build v1.0.7, com.smuapp.unimarc) pedida el 2026-10-14; antes estaba en Fuera de Alcance. La fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. La columna iOS no se tocó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Retiro en tienda configurado con Unimarc Las Condes",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario selecciona otro horario disponible en \"¿Cuál es tu horario de preferencia?\".\n6. El sistema muestra un loader sobre el selector de ventana.",
   "test_data": "v1.0.7, iOS, 20000, 000000000000675191-UN, Unimarc Las Condes, 11, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "Se muestra el toast \"Lo sentimos, no pudimos cambiar tu fecha de entrega. Inténtalo nuevamente. Error: ME-035\" hasta cerrarlo con la X y \"Fecha de retiro\" mantiene la ventana anterior.",
   "form_factor": "app",
   "id": "TC-B2C148-APP-006",
   "name": "Verificar que en retiro un error al guardar el horario muestra ME-035 y conserva la ventana [App] [Logueado]",
   "observation": "Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado (verificado en el emulador el 2026-10-14). Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Además, {HERRAMIENTA_PROXY_APP} y {VENTANA_API_ENDPOINT} están en TBD en el Excel de data. Re-ejecución solo Android (build v1.0.7, com.smuapp.unimarc) pedida el 2026-10-14; antes estaba en Fuera de Alcance. La fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. La columna iOS no se tocó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Retiro en tienda configurado con Unimarc Las Condes\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {VENTANA_API_ENDPOINT}",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario selecciona otro horario disponible.",
   "test_data": "v1.0.7, iOS, {HERRAMIENTA_PROXY_APP}, 20000, 000000000000675191-UN, Unimarc Las Condes, 11, vhchirinos+comprador@avatar-global.com, {VENTANA_API_ENDPOINT}"
  }
 ]
}
-->
