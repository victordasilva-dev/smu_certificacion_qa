# B2C-168 APP - Fusión de carros invitado a logueado - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-168 APP |
| Última actualización | 2026-10-14 |
| Ejecutado por | Victor Chirinos |
| Ambiente | App Unimarc v1.0.7 (com.smuapp.unimarc) contra DEV |
| Dispositivo Android | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |
| Origen de los TC | Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-168 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 14 |
| Rechazado | 1 |
| **Total** | **15** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-14 | 15 | TC-B2C168-APP-001, TC-B2C168-APP-002, TC-B2C168-APP-003, TC-B2C168-APP-004, TC-B2C168-APP-005, TC-B2C168-APP-006, TC-B2C168-APP-007, TC-B2C168-APP-008, TC-B2C168-APP-009, TC-B2C168-APP-010, TC-B2C168-APP-011, TC-B2C168-APP-012, TC-B2C168-APP-013, TC-B2C168-APP-014, TC-B2C168-APP-015 |

## Detalle por caso de prueba

### TC-B2C168-APP-001 - Verificar que Inicia sesión o regístrate desde el carro abre el modal de inicio de sesión [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |
| Spec | tests-app/B2C-168.spec.ts:25 |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión de invitado con el carro: 000000000000675191-UN x 1

**Data utilizada**

v1.0.7, iOS, 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Inicia sesión o regístrate".

**Resultado esperado**

Se muestra el modal de inicio de sesión (o registro) y no se avanza al checkout.

**Resultado obtenido**

Esperado: 'Inicia sesión o regístrate' en el carro abre el modal de inicio de sesión. Obtenido: con {SKU_VALID_001} x 1 en el carro de invitado (la app deja agregar sin dirección), el botón del pie (cart-checkout) queda en '…' deshabilitado más de 60 s y nunca ofrece 'Inicia sesión o regístrate'; en la exploración pasó igual con dirección y con el subtotal sobre el mínimo. Bug: B2C-1209.

**Observación**

Esperado: 'Inicia sesión o regístrate' en el carro abre el modal de inicio de sesión. Obtenido: con {SKU_VALID_001} x 1 en el carro de invitado (la app deja agregar sin dirección), el botón del pie (cart-checkout) queda en '…' deshabilitado más de 60 s y nunca ofrece 'Inicia sesión o regístrate'; en la exploración pasó igual con dirección y con el subtotal sobre el mínimo. Bug: B2C-1209. tests-app/B2C-168.spec.ts:25. Re-ejecución solo Android (build v1.0.7, com.smuapp.unimarc) pedida el 2026-10-14; antes estaba en Fuera de alcance. La fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. La columna iOS no se tocó.

**Evidencia**

![Android · Paso 1 — home con el sku en el carro](<B2C-168 APP Evidencias/TC-B2C168-APP-001-android-p01-home-con-el-sku-en-el-carro.png>)

![Android · Paso 2 — carro el boton del pie sigue cargando](<B2C-168 APP Evidencias/TC-B2C168-APP-001-android-p02-carro-el-boton-del-pie-sigue-cargando.png>)

![Estado al fallar la aserción](<B2C-168 APP Evidencias/TC-B2C168-APP-001-android.png>)

---

### TC-B2C168-APP-002 - Verificar que el login desde el carro fusiona, muestra los sugeridos y lleva a Datos de entrega [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión de invitado con el carro: 000000000000675191-UN x 1
- La cuenta tiene productos My Usuals o favoritos
- Método de entrega activo con subtotal sobre el mínimo

**Data utilizada**

v1.0.7, iOS, 000000000000675191-UN, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Inicia sesión o regístrate".
4. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
5. El sistema fusiona los carros y muestra el modal "¡Que no se te olviden!".
6. El usuario toca "Continuar".

**Resultado esperado**

Tras la fusión se muestra el modal "¡Que no se te olviden!" y al presionar "Continuar" se muestra la página "Datos de entrega".

**Observación**

Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Re-ejecución solo Android (build v1.0.7, com.smuapp.unimarc) pedida el 2026-10-14; antes estaba en Fuera de alcance. La fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. La columna iOS no se tocó.

---

### TC-B2C168-APP-003 - Verificar que un carro invitado con productos pasa completo a un carro logueado vacío [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión de invitado con el carro: 000000000000675191-UN x 2 y 000000000400254005-UN x 1
- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene ningún producto (preparado iniciando sesión previamente y cerrando sesión)

**Data utilizada**

v1.0.7, iOS, 000000000401693004-UN, 000000000000038061-UN, 000000000400254005-UN, 000000000000675191-UN, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario toca "Ingresa" en la App e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario abre la App v1.0.7 y toca el ícono del carro.
4. El sistema carga el carrito.

**Resultado esperado**

El carro logueado contiene 000000000000675191-UN x 2 y 000000000400254005-UN x 1, igual al carro invitado.

**Observación**

Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Re-ejecución solo Android (build v1.0.7, com.smuapp.unimarc) pedida el 2026-10-14; antes estaba en Fuera de alcance. La fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. La columna iOS no se tocó.

---

### TC-B2C168-APP-004 - Verificar que un carro invitado vacío no altera el carro guardado del logueado [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión de invitado con el carro: vacío
- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene 000000000000038061-UN x 2 y 000000000401693004-UN x 1 (preparado iniciando sesión previamente y cerrando sesión)

**Data utilizada**

v1.0.7, iOS, 000000000401693004-UN, 000000000000038061-UN, 000000000400254005-UN, 000000000000675191-UN, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario toca "Ingresa" en la App e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario abre la App v1.0.7 y toca el ícono del carro.
4. El sistema carga el carrito.

**Resultado esperado**

El carro logueado mantiene 000000000000038061-UN x 2 y 000000000401693004-UN x 1 sin cambios.

**Observación**

Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Re-ejecución solo Android (build v1.0.7, com.smuapp.unimarc) pedida el 2026-10-14; antes estaba en Fuera de alcance. La fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. La columna iOS no se tocó.

---

### TC-B2C168-APP-005 - Verificar que con ambos carros vacíos se muestra el estado de carro vacío [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión de invitado con el carro: vacío
- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene ningún producto (preparado iniciando sesión previamente y cerrando sesión)

**Data utilizada**

v1.0.7, iOS, 000000000401693004-UN, 000000000000038061-UN, 000000000400254005-UN, 000000000000675191-UN, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario toca "Ingresa" en la App e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario abre la App v1.0.7 y toca el ícono del carro.
4. El sistema carga el carrito.

**Resultado esperado**

El carro queda vacío y se muestra el estado de carro vacío.

**Observación**

Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Re-ejecución solo Android (build v1.0.7, com.smuapp.unimarc) pedida el 2026-10-14; antes estaba en Fuera de alcance. La fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. La columna iOS no se tocó.

---

### TC-B2C168-APP-006 - Verificar que productos distintos de ambos carros se suman sin modificar cantidades [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000400254005-UN x 2
- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene 000000000000038061-UN x 1 y 000000000401693004-UN x 3 (preparado iniciando sesión previamente y cerrando sesión)
- Método de entrega activo

**Data utilizada**

v1.0.7, iOS, 000000000401693004-UN, 000000000000038061-UN, 000000000400254005-UN, 000000000000675191-UN, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario toca "Ingresa" en la App e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario abre la App v1.0.7 y toca el ícono del carro.
4. El sistema carga el carrito.

**Resultado esperado**

El carro contiene 000000000000675191-UN x 1, 000000000400254005-UN x 2, 000000000000038061-UN x 1 y 000000000401693004-UN x 3.

**Observación**

Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Re-ejecución solo Android (build v1.0.7, com.smuapp.unimarc) pedida el 2026-10-14; antes estaba en Fuera de alcance. La fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. La columna iOS no se tocó.

---

### TC-B2C168-APP-007 - Verificar que tras la fusión se reconsulta la ventana horaria de la tienda del invitado [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión de invitado con el carro: 000000000000675191-UN x 1
- La sesión de invitado tiene seteada la dirección Calle Uno 23, La Florida
- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene 000000000000038061-UN x 1 (preparado iniciando sesión previamente y cerrando sesión)

**Data utilizada**

v1.0.7, iOS, Calle Uno 23, La Florida, 000000000401693004-UN, 000000000000038061-UN, 000000000400254005-UN, 000000000000675191-UN, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario toca "Ingresa" en la App e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario revisa la ventana horaria del Store Locator del header.

**Resultado esperado**

El Store Locator muestra la próxima ventana horaria vigente para la dirección Calle Uno 23, La Florida de la sesión de invitado.

**Observación**

Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Re-ejecución solo Android (build v1.0.7, com.smuapp.unimarc) pedida el 2026-10-14; antes estaba en Fuera de alcance. La fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. La columna iOS no se tocó.

---

### TC-B2C168-APP-008 - Verificar que un producto duplicado queda con la cantidad del carro invitado [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión de invitado con el carro: 000000000000675191-UN x 2
- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene 000000000000675191-UN x 5 (preparado iniciando sesión previamente y cerrando sesión)

**Data utilizada**

v1.0.7, iOS, 000000000401693004-UN, 000000000000038061-UN, 000000000400254005-UN, 000000000000675191-UN, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario toca "Ingresa" en la App e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario abre la App v1.0.7 y toca el ícono del carro.
4. El sistema carga el carrito.

**Resultado esperado**

000000000000675191-UN queda con cantidad 2 (la del invitado), no 5 ni 7.

**Observación**

Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Re-ejecución solo Android (build v1.0.7, com.smuapp.unimarc) pedida el 2026-10-14; antes estaba en Fuera de alcance. La fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. La columna iOS no se tocó.

---

### TC-B2C168-APP-009 - Verificar que con duplicados y distintos el carro fusionado aplica la regla a cada producto [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión de invitado con el carro: 000000000000675191-UN x 2, 000000000400254005-UN x 1 y 000000000000038061-UN x 3
- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene 000000000400254005-UN x 4, 000000000000038061-UN x 1 y 000000000401693004-UN x 2 (preparado iniciando sesión previamente y cerrando sesión)

**Data utilizada**

v1.0.7, iOS, 000000000401693004-UN, 000000000000038061-UN, 000000000400254005-UN, 000000000000675191-UN, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario toca "Ingresa" en la App e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario abre la App v1.0.7 y toca el ícono del carro.
4. El sistema carga el carrito.

**Resultado esperado**

El carro queda con 000000000000675191-UN x 2, 000000000400254005-UN x 1, 000000000000038061-UN x 3 y 000000000401693004-UN x 2.

**Observación**

Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Re-ejecución solo Android (build v1.0.7, com.smuapp.unimarc) pedida el 2026-10-14; antes estaba en Fuera de alcance. La fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. La columna iOS no se tocó.

---

### TC-B2C168-APP-010 - Verificar que un producto del carro invitado sin stock se agrega marcado como no disponible [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000400254005-UN x 1
- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene ningún producto (preparado iniciando sesión previamente y cerrando sesión)
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock

**Data utilizada**

v1.0.7, iOS, 000000000400254005-UN, 000000000000675191-UN, Unimarc Los leones, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario toca "Ingresa" en la App e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario abre la App v1.0.7 y toca el ícono del carro.
4. El sistema carga el carrito.

**Resultado esperado**

000000000400254005-UN aparece en la sección de no disponibles del carro fusionado y 000000000000675191-UN en disponibles.

**Observación**

Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Re-ejecución solo Android (build v1.0.7, com.smuapp.unimarc) pedida el 2026-10-14; antes estaba en Fuera de alcance. La fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. La columna iOS no se tocó.

---

### TC-B2C168-APP-011 - Verificar que un producto del carro logueado sin stock permanece como no disponible [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión de invitado con el carro: 000000000000675191-UN x 1
- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene 000000000000038061-UN x 1 y 000000000400254005-UN x 1 (preparado iniciando sesión previamente y cerrando sesión)
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock

**Data utilizada**

v1.0.7, iOS, 000000000000038061-UN, 000000000400254005-UN, 000000000000675191-UN, Unimarc Los leones, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario toca "Ingresa" en la App e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario abre la App v1.0.7 y toca el ícono del carro.
4. El sistema carga el carrito.

**Resultado esperado**

000000000400254005-UN permanece como no disponible y 000000000000038061-UN y 000000000000675191-UN quedan disponibles.

**Observación**

Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Re-ejecución solo Android (build v1.0.7, com.smuapp.unimarc) pedida el 2026-10-14; antes estaba en Fuera de alcance. La fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. La columna iOS no se tocó.

---

### TC-B2C168-APP-012 - Verificar que tras la fusión se recalculan precios, promociones y subtotal con Unipay [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión de invitado con el carro: 000000000641229002-UN x 1 y {SKU_UNIPAY_001} x 1
- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene 000000000000675191-UN x 2 (preparado iniciando sesión previamente y cerrando sesión)

**Data utilizada**

v1.0.7, iOS, {SKU_UNIPAY_001}, 000000000000675191-UN, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario toca "Ingresa" en la App e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario abre la App v1.0.7 y toca el ícono del carro.
4. El sistema carga el carrito.
5. El usuario revisa precios, promociones y el resumen de totales.

**Resultado esperado**

Cada producto muestra el precio de su promoción vigente y el total y el "Subtotal con Unipay" se calculan sobre todos los productos fusionados.

**Observación**

Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Además, {SKU_UNIPAY_001} está en TBD en el Excel de data. Re-ejecución solo Android (build v1.0.7, com.smuapp.unimarc) pedida el 2026-10-14; antes estaba en Fuera de alcance. La fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. La columna iOS no se tocó.

---

### TC-B2C168-APP-013 - Verificar que el carro fusionado se ve igual al abrirlo desde otro canal [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión de invitado con el carro: 000000000000675191-UN x 1
- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene 000000000400254005-UN x 1 (preparado iniciando sesión previamente y cerrando sesión)
- Acceso al otro canal (Web o App) con la misma cuenta

**Data utilizada**

v1.0.7, iOS, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, 000000000401693004-UN, 000000000000038061-UN, 000000000400254005-UN, 000000000000675191-UN, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario toca "Ingresa" en la App e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario abre el carro de la misma cuenta en otro canal (v1.0.7 si este es Web, o https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ si es App).
4. El usuario suma 1 unidad de 000000000000675191-UN en el otro canal y vuelve a abrir el carro en este canal.

**Resultado esperado**

Ambos canales muestran el mismo carro fusionado y la unidad agregada en el otro canal se refleja aquí.

**Observación**

Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Re-ejecución solo Android (build v1.0.7, com.smuapp.unimarc) pedida el 2026-10-14; antes estaba en Fuera de alcance. La fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. La columna iOS no se tocó.

---

### TC-B2C168-APP-014 - Verificar que un usuario que se registra por primera vez inicia con el carro invitado [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000400254005-UN x 2
- {EMAIL_NUEVO_REGISTRO} no está registrado (usar un correo nuevo por ejecución)

**Data utilizada**

v1.0.7, iOS, {EMAIL_NUEVO_REGISTRO}, 000000000400254005-UN, 000000000000675191-UN

**Pasos ejecutados**

1. El usuario toca "Ingresa" y elige registrarse con el correo {EMAIL_NUEVO_REGISTRO}.
2. El usuario completa el registro e inicia sesión.
3. El usuario abre la App v1.0.7 y toca el ícono del carro.
4. El sistema carga el carrito.

**Resultado esperado**

El carro de la nueva cuenta contiene 000000000000675191-UN x 1 y 000000000400254005-UN x 2.

**Observación**

Causa: {EMAIL_NUEVO_REGISTRO} no tiene fila en el Excel de data. Acción: cargar un correo nuevo para el registro. Re-ejecución solo Android (build v1.0.7, com.smuapp.unimarc) pedida el 2026-10-14; antes estaba en Fuera de alcance. La fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. La columna iOS no se tocó.

---

### TC-B2C168-APP-015 - Verificar que en Mobile y App el carro fusionado se refleja sin recargar [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión de invitado con el carro: 000000000000675191-UN x 2
- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene 000000000000038061-UN x 1 (preparado iniciando sesión previamente y cerrando sesión)

**Data utilizada**

v1.0.7, iOS, 000000000401693004-UN, 000000000000038061-UN, 000000000400254005-UN, 000000000000675191-UN, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Ingresa" en la App e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
4. El sistema autentica al usuario y ejecuta la fusión de carros.
5. El usuario vuelve al carro sin recargar.

**Resultado esperado**

El carro muestra el resultado de la fusión (000000000000675191-UN x 2 y 000000000000038061-UN x 1) sin necesidad de recargar.

**Observación**

Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Re-ejecución solo Android (build v1.0.7, com.smuapp.unimarc) pedida el 2026-10-14; antes estaba en Fuera de alcance. La fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. La columna iOS no se tocó.

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
  "suite": "B2C-168 APP",
  "tc_file": "Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-168 APP Test Cases.xlsx",
  "title": "B2C-168 APP - Fusión de carros invitado a logueado - Evidencias QA",
  "updated_at": "2026-10-14"
 },
 "history": {
  "2026-10-14": [
   "TC-B2C168-APP-001",
   "TC-B2C168-APP-002",
   "TC-B2C168-APP-003",
   "TC-B2C168-APP-004",
   "TC-B2C168-APP-005",
   "TC-B2C168-APP-006",
   "TC-B2C168-APP-007",
   "TC-B2C168-APP-008",
   "TC-B2C168-APP-009",
   "TC-B2C168-APP-010",
   "TC-B2C168-APP-011",
   "TC-B2C168-APP-012",
   "TC-B2C168-APP-013",
   "TC-B2C168-APP-014",
   "TC-B2C168-APP-015"
  ]
 },
 "results": [
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "Se muestra el modal de inicio de sesión (o registro) y no se avanza al checkout.",
   "form_factor": "app",
   "id": "TC-B2C168-APP-001",
   "name": "Verificar que Inicia sesión o regístrate desde el carro abre el modal de inicio de sesión [App] [Guest]",
   "observation": "Esperado: 'Inicia sesión o regístrate' en el carro abre el modal de inicio de sesión. Obtenido: con {SKU_VALID_001} x 1 en el carro de invitado (la app deja agregar sin dirección), el botón del pie (cart-checkout) queda en '…' deshabilitado más de 60 s y nunca ofrece 'Inicia sesión o regístrate'; en la exploración pasó igual con dirección y con el subtotal sobre el mínimo. Bug: B2C-1209. tests-app/B2C-168.spec.ts:25. Re-ejecución solo Android (build v1.0.7, com.smuapp.unimarc) pedida el 2026-10-14; antes estaba en Fuera de alcance. La fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. La columna iOS no se tocó.",
   "observed": "Esperado: 'Inicia sesión o regístrate' en el carro abre el modal de inicio de sesión. Obtenido: con {SKU_VALID_001} x 1 en el carro de invitado (la app deja agregar sin dirección), el botón del pie (cart-checkout) queda en '…' deshabilitado más de 60 s y nunca ofrece 'Inicia sesión o regístrate'; en la exploración pasó igual con dirección y con el subtotal sobre el mínimo. Bug: B2C-1209.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión de invitado con el carro: 000000000000675191-UN x 1",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — home con el sku en el carro",
     "file": "TC-B2C168-APP-001-android-p01-home-con-el-sku-en-el-carro.png"
    },
    {
     "caption": "Android · Paso 2 — carro el boton del pie sigue cargando",
     "file": "TC-B2C168-APP-001-android-p02-carro-el-boton-del-pie-sigue-cargando.png"
    },
    {
     "caption": "Estado al fallar la aserción",
     "file": "TC-B2C168-APP-001-android.png"
    }
   ],
   "spec": "tests-app/B2C-168.spec.ts:25",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Inicia sesión o regístrate\".",
   "test_data": "v1.0.7, iOS, 000000000000675191-UN"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "Tras la fusión se muestra el modal \"¡Que no se te olviden!\" y al presionar \"Continuar\" se muestra la página \"Datos de entrega\".",
   "form_factor": "app",
   "id": "TC-B2C168-APP-002",
   "name": "Verificar que el login desde el carro fusiona, muestra los sugeridos y lleva a Datos de entrega [App] [Guest]",
   "observation": "Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Re-ejecución solo Android (build v1.0.7, com.smuapp.unimarc) pedida el 2026-10-14; antes estaba en Fuera de alcance. La fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. La columna iOS no se tocó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión de invitado con el carro: 000000000000675191-UN x 1\n- La cuenta tiene productos My Usuals o favoritos\n- Método de entrega activo con subtotal sobre el mínimo",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Inicia sesión o regístrate\".\n4. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n5. El sistema fusiona los carros y muestra el modal \"¡Que no se te olviden!\".\n6. El usuario toca \"Continuar\".",
   "test_data": "v1.0.7, iOS, 000000000000675191-UN, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "El carro logueado contiene 000000000000675191-UN x 2 y 000000000400254005-UN x 1, igual al carro invitado.",
   "form_factor": "app",
   "id": "TC-B2C168-APP-003",
   "name": "Verificar que un carro invitado con productos pasa completo a un carro logueado vacío [App] [Guest]",
   "observation": "Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Re-ejecución solo Android (build v1.0.7, com.smuapp.unimarc) pedida el 2026-10-14; antes estaba en Fuera de alcance. La fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. La columna iOS no se tocó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión de invitado con el carro: 000000000000675191-UN x 2 y 000000000400254005-UN x 1\n- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene ningún producto (preparado iniciando sesión previamente y cerrando sesión)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario toca \"Ingresa\" en la App e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario abre la App v1.0.7 y toca el ícono del carro.\n4. El sistema carga el carrito.",
   "test_data": "v1.0.7, iOS, 000000000401693004-UN, 000000000000038061-UN, 000000000400254005-UN, 000000000000675191-UN, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "El carro logueado mantiene 000000000000038061-UN x 2 y 000000000401693004-UN x 1 sin cambios.",
   "form_factor": "app",
   "id": "TC-B2C168-APP-004",
   "name": "Verificar que un carro invitado vacío no altera el carro guardado del logueado [App] [Guest]",
   "observation": "Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Re-ejecución solo Android (build v1.0.7, com.smuapp.unimarc) pedida el 2026-10-14; antes estaba en Fuera de alcance. La fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. La columna iOS no se tocó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión de invitado con el carro: vacío\n- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene 000000000000038061-UN x 2 y 000000000401693004-UN x 1 (preparado iniciando sesión previamente y cerrando sesión)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario toca \"Ingresa\" en la App e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario abre la App v1.0.7 y toca el ícono del carro.\n4. El sistema carga el carrito.",
   "test_data": "v1.0.7, iOS, 000000000401693004-UN, 000000000000038061-UN, 000000000400254005-UN, 000000000000675191-UN, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "El carro queda vacío y se muestra el estado de carro vacío.",
   "form_factor": "app",
   "id": "TC-B2C168-APP-005",
   "name": "Verificar que con ambos carros vacíos se muestra el estado de carro vacío [App] [Guest]",
   "observation": "Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Re-ejecución solo Android (build v1.0.7, com.smuapp.unimarc) pedida el 2026-10-14; antes estaba en Fuera de alcance. La fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. La columna iOS no se tocó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión de invitado con el carro: vacío\n- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene ningún producto (preparado iniciando sesión previamente y cerrando sesión)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario toca \"Ingresa\" en la App e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario abre la App v1.0.7 y toca el ícono del carro.\n4. El sistema carga el carrito.",
   "test_data": "v1.0.7, iOS, 000000000401693004-UN, 000000000000038061-UN, 000000000400254005-UN, 000000000000675191-UN, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "El carro contiene 000000000000675191-UN x 1, 000000000400254005-UN x 2, 000000000000038061-UN x 1 y 000000000401693004-UN x 3.",
   "form_factor": "app",
   "id": "TC-B2C168-APP-006",
   "name": "Verificar que productos distintos de ambos carros se suman sin modificar cantidades [App] [Guest]",
   "observation": "Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Re-ejecución solo Android (build v1.0.7, com.smuapp.unimarc) pedida el 2026-10-14; antes estaba en Fuera de alcance. La fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. La columna iOS no se tocó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000400254005-UN x 2\n- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene 000000000000038061-UN x 1 y 000000000401693004-UN x 3 (preparado iniciando sesión previamente y cerrando sesión)\n- Método de entrega activo",
   "status": "Bloqueado Data",
   "steps": "1. El usuario toca \"Ingresa\" en la App e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario abre la App v1.0.7 y toca el ícono del carro.\n4. El sistema carga el carrito.",
   "test_data": "v1.0.7, iOS, 000000000401693004-UN, 000000000000038061-UN, 000000000400254005-UN, 000000000000675191-UN, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "El Store Locator muestra la próxima ventana horaria vigente para la dirección Calle Uno 23, La Florida de la sesión de invitado.",
   "form_factor": "app",
   "id": "TC-B2C168-APP-007",
   "name": "Verificar que tras la fusión se reconsulta la ventana horaria de la tienda del invitado [App] [Guest]",
   "observation": "Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Re-ejecución solo Android (build v1.0.7, com.smuapp.unimarc) pedida el 2026-10-14; antes estaba en Fuera de alcance. La fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. La columna iOS no se tocó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión de invitado con el carro: 000000000000675191-UN x 1\n- La sesión de invitado tiene seteada la dirección Calle Uno 23, La Florida\n- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene 000000000000038061-UN x 1 (preparado iniciando sesión previamente y cerrando sesión)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario toca \"Ingresa\" en la App e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario revisa la ventana horaria del Store Locator del header.",
   "test_data": "v1.0.7, iOS, Calle Uno 23, La Florida, 000000000401693004-UN, 000000000000038061-UN, 000000000400254005-UN, 000000000000675191-UN, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "000000000000675191-UN queda con cantidad 2 (la del invitado), no 5 ni 7.",
   "form_factor": "app",
   "id": "TC-B2C168-APP-008",
   "name": "Verificar que un producto duplicado queda con la cantidad del carro invitado [App] [Guest]",
   "observation": "Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Re-ejecución solo Android (build v1.0.7, com.smuapp.unimarc) pedida el 2026-10-14; antes estaba en Fuera de alcance. La fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. La columna iOS no se tocó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión de invitado con el carro: 000000000000675191-UN x 2\n- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene 000000000000675191-UN x 5 (preparado iniciando sesión previamente y cerrando sesión)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario toca \"Ingresa\" en la App e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario abre la App v1.0.7 y toca el ícono del carro.\n4. El sistema carga el carrito.",
   "test_data": "v1.0.7, iOS, 000000000401693004-UN, 000000000000038061-UN, 000000000400254005-UN, 000000000000675191-UN, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "El carro queda con 000000000000675191-UN x 2, 000000000400254005-UN x 1, 000000000000038061-UN x 3 y 000000000401693004-UN x 2.",
   "form_factor": "app",
   "id": "TC-B2C168-APP-009",
   "name": "Verificar que con duplicados y distintos el carro fusionado aplica la regla a cada producto [App] [Guest]",
   "observation": "Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Re-ejecución solo Android (build v1.0.7, com.smuapp.unimarc) pedida el 2026-10-14; antes estaba en Fuera de alcance. La fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. La columna iOS no se tocó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión de invitado con el carro: 000000000000675191-UN x 2, 000000000400254005-UN x 1 y 000000000000038061-UN x 3\n- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene 000000000400254005-UN x 4, 000000000000038061-UN x 1 y 000000000401693004-UN x 2 (preparado iniciando sesión previamente y cerrando sesión)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario toca \"Ingresa\" en la App e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario abre la App v1.0.7 y toca el ícono del carro.\n4. El sistema carga el carrito.",
   "test_data": "v1.0.7, iOS, 000000000401693004-UN, 000000000000038061-UN, 000000000400254005-UN, 000000000000675191-UN, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "000000000400254005-UN aparece en la sección de no disponibles del carro fusionado y 000000000000675191-UN en disponibles.",
   "form_factor": "app",
   "id": "TC-B2C168-APP-010",
   "name": "Verificar que un producto del carro invitado sin stock se agrega marcado como no disponible [App] [Guest]",
   "observation": "Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Re-ejecución solo Android (build v1.0.7, com.smuapp.unimarc) pedida el 2026-10-14; antes estaba en Fuera de alcance. La fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. La columna iOS no se tocó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000400254005-UN x 1\n- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene ningún producto (preparado iniciando sesión previamente y cerrando sesión)\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock",
   "status": "Bloqueado Data",
   "steps": "1. El usuario toca \"Ingresa\" en la App e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario abre la App v1.0.7 y toca el ícono del carro.\n4. El sistema carga el carrito.",
   "test_data": "v1.0.7, iOS, 000000000400254005-UN, 000000000000675191-UN, Unimarc Los leones, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "000000000400254005-UN permanece como no disponible y 000000000000038061-UN y 000000000000675191-UN quedan disponibles.",
   "form_factor": "app",
   "id": "TC-B2C168-APP-011",
   "name": "Verificar que un producto del carro logueado sin stock permanece como no disponible [App] [Guest]",
   "observation": "Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Re-ejecución solo Android (build v1.0.7, com.smuapp.unimarc) pedida el 2026-10-14; antes estaba en Fuera de alcance. La fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. La columna iOS no se tocó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión de invitado con el carro: 000000000000675191-UN x 1\n- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene 000000000000038061-UN x 1 y 000000000400254005-UN x 1 (preparado iniciando sesión previamente y cerrando sesión)\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock",
   "status": "Bloqueado Data",
   "steps": "1. El usuario toca \"Ingresa\" en la App e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario abre la App v1.0.7 y toca el ícono del carro.\n4. El sistema carga el carrito.",
   "test_data": "v1.0.7, iOS, 000000000000038061-UN, 000000000400254005-UN, 000000000000675191-UN, Unimarc Los leones, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "Cada producto muestra el precio de su promoción vigente y el total y el \"Subtotal con Unipay\" se calculan sobre todos los productos fusionados.",
   "form_factor": "app",
   "id": "TC-B2C168-APP-012",
   "name": "Verificar que tras la fusión se recalculan precios, promociones y subtotal con Unipay [App] [Guest]",
   "observation": "Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Además, {SKU_UNIPAY_001} está en TBD en el Excel de data. Re-ejecución solo Android (build v1.0.7, com.smuapp.unimarc) pedida el 2026-10-14; antes estaba en Fuera de alcance. La fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. La columna iOS no se tocó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión de invitado con el carro: 000000000641229002-UN x 1 y {SKU_UNIPAY_001} x 1\n- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene 000000000000675191-UN x 2 (preparado iniciando sesión previamente y cerrando sesión)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario toca \"Ingresa\" en la App e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario abre la App v1.0.7 y toca el ícono del carro.\n4. El sistema carga el carrito.\n5. El usuario revisa precios, promociones y el resumen de totales.",
   "test_data": "v1.0.7, iOS, {SKU_UNIPAY_001}, 000000000000675191-UN, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "Ambos canales muestran el mismo carro fusionado y la unidad agregada en el otro canal se refleja aquí.",
   "form_factor": "app",
   "id": "TC-B2C168-APP-013",
   "name": "Verificar que el carro fusionado se ve igual al abrirlo desde otro canal [App] [Guest]",
   "observation": "Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Re-ejecución solo Android (build v1.0.7, com.smuapp.unimarc) pedida el 2026-10-14; antes estaba en Fuera de alcance. La fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. La columna iOS no se tocó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión de invitado con el carro: 000000000000675191-UN x 1\n- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene 000000000400254005-UN x 1 (preparado iniciando sesión previamente y cerrando sesión)\n- Acceso al otro canal (Web o App) con la misma cuenta",
   "status": "Bloqueado Data",
   "steps": "1. El usuario toca \"Ingresa\" en la App e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario abre el carro de la misma cuenta en otro canal (v1.0.7 si este es Web, o https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ si es App).\n4. El usuario suma 1 unidad de 000000000000675191-UN en el otro canal y vuelve a abrir el carro en este canal.",
   "test_data": "v1.0.7, iOS, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, 000000000401693004-UN, 000000000000038061-UN, 000000000400254005-UN, 000000000000675191-UN, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "El carro de la nueva cuenta contiene 000000000000675191-UN x 1 y 000000000400254005-UN x 2.",
   "form_factor": "app",
   "id": "TC-B2C168-APP-014",
   "name": "Verificar que un usuario que se registra por primera vez inicia con el carro invitado [App] [Guest]",
   "observation": "Causa: {EMAIL_NUEVO_REGISTRO} no tiene fila en el Excel de data. Acción: cargar un correo nuevo para el registro. Re-ejecución solo Android (build v1.0.7, com.smuapp.unimarc) pedida el 2026-10-14; antes estaba en Fuera de alcance. La fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. La columna iOS no se tocó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000400254005-UN x 2\n- {EMAIL_NUEVO_REGISTRO} no está registrado (usar un correo nuevo por ejecución)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario toca \"Ingresa\" y elige registrarse con el correo {EMAIL_NUEVO_REGISTRO}.\n2. El usuario completa el registro e inicia sesión.\n3. El usuario abre la App v1.0.7 y toca el ícono del carro.\n4. El sistema carga el carrito.",
   "test_data": "v1.0.7, iOS, {EMAIL_NUEVO_REGISTRO}, 000000000400254005-UN, 000000000000675191-UN"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "El carro muestra el resultado de la fusión (000000000000675191-UN x 2 y 000000000000038061-UN x 1) sin necesidad de recargar.",
   "form_factor": "app",
   "id": "TC-B2C168-APP-015",
   "name": "Verificar que en Mobile y App el carro fusionado se refleja sin recargar [App] [Guest]",
   "observation": "Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Re-ejecución solo Android (build v1.0.7, com.smuapp.unimarc) pedida el 2026-10-14; antes estaba en Fuera de alcance. La fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. La columna iOS no se tocó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión de invitado con el carro: 000000000000675191-UN x 2\n- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene 000000000000038061-UN x 1 (preparado iniciando sesión previamente y cerrando sesión)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Ingresa\" en la App e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n4. El sistema autentica al usuario y ejecuta la fusión de carros.\n5. El usuario vuelve al carro sin recargar.",
   "test_data": "v1.0.7, iOS, 000000000401693004-UN, 000000000000038061-UN, 000000000400254005-UN, 000000000000675191-UN, vhchirinos+comprador@avatar-global.com"
  }
 ]
}
-->
