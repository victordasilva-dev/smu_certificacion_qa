# B2C-41 APP - Modal de sugeridos ¡Que no se te olviden! (Android) - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-41 APP |
| Última actualización | 2026-10-16 |
| Ejecutado por | Victor Chirinos |
| Ambiente | App Unimarc v1.0.7 (DEV) |
| Dispositivo Android | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-41 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 12 |
| **Total** | **12** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-16 | 12 | TC-B2C41-APP-001, TC-B2C41-APP-002, TC-B2C41-APP-003, TC-B2C41-APP-004, TC-B2C41-APP-005, TC-B2C41-APP-006, TC-B2C41-APP-007, TC-B2C41-APP-008, TC-B2C41-APP-009, TC-B2C41-APP-010, TC-B2C41-APP-011, TC-B2C41-APP-012 |

## Detalle por caso de prueba

### TC-B2C41-APP-001 - Verificar que Continuar con la entrega abre el modal de sugeridos cuando hay sugerencias [App] [Logueado]

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
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo

**Data utilizada**

v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 20000, 000000000000675191-UN, 11

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".

**Resultado esperado**

Se muestra el modal "¡Que no se te olviden!" sobre el carrito.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_USUALS_FAVORITOS_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C41-APP-002 - Verificar que sin sugerencias el modal no se muestra y el flujo continúa [App] [Logueado]

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
- Sesión iniciada con la cuenta vhchirinos+noaddress@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta no tiene productos My Usuals ni favoritos

**Data utilizada**

v1.0.7, iOS, contraseña de la cuenta, vhchirinos+noaddress@avatar-global.com, 20000, 000000000000675191-UN, 11

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".

**Resultado esperado**

El modal "¡Que no se te olviden!" no se presenta y el usuario continúa al siguiente paso Mis Envíos sin interrupción.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_SIN_SUGERENCIAS_USER} (vhchirinos+noaddress@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C41-APP-003 - Verificar que con My Usuals y favoritos se ven ambas pestañas en orden [App] [Logueado]

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
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y al menos un favorito

**Data utilizada**

v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 20000, 000000000000675191-UN, 11

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario revisa las pestañas del modal.

**Resultado esperado**

Se muestran dos pestañas en orden: "Lo que más compro" resaltada con la lista My Usuals y luego "Mis favoritos".

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_USUALS_FAVORITOS_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C41-APP-004 - Verificar que sin favoritos solo se ve la pestaña Lo que más compro [App] [Logueado]

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
- Sesión iniciada con la cuenta vhchirinos+oneclick@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y ningún favorito

**Data utilizada**

v1.0.7, iOS, contraseña de la cuenta, vhchirinos+oneclick@avatar-global.com, 20000, 000000000000675191-UN, 11

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario revisa las pestañas del modal.

**Resultado esperado**

Se muestra solo la pestaña "Lo que más compro", resaltada; no se muestra "Mis favoritos".

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_SOLO_USUALS_USER} (vhchirinos+oneclick@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C41-APP-005 - Verificar que sin My Usuals solo se ve la pestaña Mis favoritos [App] [Logueado]

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
- Sesión iniciada con la cuenta vhchirinos+segundo@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta no tiene My Usuals y tiene al menos un favorito

**Data utilizada**

v1.0.7, iOS, contraseña de la cuenta, vhchirinos+segundo@avatar-global.com, 20000, 000000000000675191-UN, 11

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario revisa las pestañas del modal.

**Resultado esperado**

Se muestra solo la pestaña "Mis favoritos"; no se muestra "Lo que más compro".

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_SOLO_FAVORITOS_USER} (vhchirinos+segundo@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C41-APP-006 - Verificar que Lo que más compro muestra los My Usuals en grilla 2x2 con Continuar fijo [App] [Logueado]

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
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y al menos un favorito

**Data utilizada**

v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 20000, 000000000000675191-UN, 11

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario revisa el contenido de la pestaña "Lo que más compro".

**Resultado esperado**

La pestaña "Lo que más compro" está resaltada, muestra los My Usuals en grilla 2x2 con la información de producto de B2C-64 y el botón "Continuar" fijo.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_USUALS_FAVORITOS_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C41-APP-007 - Verificar que Lo que más compro muestra como máximo 24 productos [App] [Logueado]

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
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene más de 24 productos My Usuals

**Data utilizada**

v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 20000, 000000000000675191-UN, 11

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario recorre hasta el final la grilla de "Lo que más compro" y cuenta los productos.

**Resultado esperado**

La pestaña "Lo que más compro" muestra 24 productos, aunque la cuenta tiene más de 24 My Usuals.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_USUALS_MAS_24_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C41-APP-008 - Verificar que la pestaña Mis favoritos muestra los favoritos en grilla 2x2 sin tope [App] [Logueado]

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
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y al menos un favorito

**Data utilizada**

v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 20000, 000000000000675191-UN, 11

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario toca la pestaña "Mis favoritos".
6. El sistema muestra la pestaña "Mis favoritos" resaltada.

**Resultado esperado**

La pestaña "Mis favoritos" queda resaltada y muestra todos los favoritos de la cuenta en grilla 2x2, con la información de B2C-64 y el botón "Continuar" fijo.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_USUALS_FAVORITOS_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C41-APP-009 - Verificar que Agregar un sugerido lo suma al carro y el modal sigue abierto [App] [Logueado]

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
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y al menos un favorito

**Data utilizada**

v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 20000, 000000000000675191-UN, 11

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario toca "Agregar" en el primer producto de la pestaña activa.
6. El sistema muestra un loading en la card del producto mientras procesa la solicitud.

**Resultado esperado**

El producto se agrega al carro con la cantidad indicada, el contador del carro se actualiza en tiempo real, el modal permanece abierto y "Continuar" sigue habilitado.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_USUALS_FAVORITOS_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C41-APP-010 - Verificar que Continuar cierra el modal de sugeridos y sigue a la página Mis Envíos [App] [Logueado]

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
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y al menos un favorito

**Data utilizada**

v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 20000, 000000000000675191-UN, 11

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario toca "Continuar".

**Resultado esperado**

El modal se cierra y el usuario continúa al siguiente paso "Mis Envíos"

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_USUALS_FAVORITOS_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C41-APP-011 - Verificar que un error al agregar un sugerido muestra CRT-024 y el modal sigue abierto [App] [Logueado]

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
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y al menos un favorito
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {ADD_TO_CART_API_ENDPOINT}

**Data utilizada**

{ADD_TO_CART_API_ENDPOINT}, v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, {HERRAMIENTA_PROXY_APP}, 20000, 000000000000675191-UN, 11

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario toca "Agregar" en el primer producto de la pestaña activa.
6. El sistema muestra el toast de error "No pudimos agregar el producto al carro. Inténtalo nuevamente. (CRT-024)".

**Resultado esperado**

Se muestra el toast CRT-024 (persiste hasta la X), el carrito no se modifica, el modal permanece abierto y "Continuar" sigue disponible.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_USUALS_FAVORITOS_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. Además {HERRAMIENTA_PROXY_APP} y {ADD_TO_CART_API_ENDPOINT} están en TBD. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C41-APP-012 - Verificar que al hacer scroll en el modal el botón Continuar permanece fijo [App] [Logueado]

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
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La lista de la pestaña activa supera la altura visible de la pantalla

**Data utilizada**

v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 20000, 000000000000675191-UN, 11

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario hace scroll vertical dentro del modal hasta el final de la lista.

**Resultado esperado**

El área de productos se desplaza verticalmente y el CTA "Continuar" permanece fijo en la parte inferior durante todo el scroll.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_USUALS_FAVORITOS_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

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
  "suite": "B2C-41 APP",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-41 APP Test Cases.xlsx",
  "title": "B2C-41 APP - Modal de sugeridos ¡Que no se te olviden! (Android) - Evidencias QA",
  "updated_at": "2026-10-16"
 },
 "history": {
  "2026-10-16": [
   "TC-B2C41-APP-001",
   "TC-B2C41-APP-002",
   "TC-B2C41-APP-003",
   "TC-B2C41-APP-004",
   "TC-B2C41-APP-005",
   "TC-B2C41-APP-006",
   "TC-B2C41-APP-007",
   "TC-B2C41-APP-008",
   "TC-B2C41-APP-009",
   "TC-B2C41-APP-010",
   "TC-B2C41-APP-011",
   "TC-B2C41-APP-012"
  ]
 },
 "results": [
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Se muestra el modal \"¡Que no se te olviden!\" sobre el carrito.",
   "form_factor": "app",
   "id": "TC-B2C41-APP-001",
   "name": "Verificar que Continuar con la entrega abre el modal de sugeridos cuando hay sugerencias [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_USUALS_FAVORITOS_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".",
   "test_data": "v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 20000, 000000000000675191-UN, 11"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El modal \"¡Que no se te olviden!\" no se presenta y el usuario continúa al siguiente paso Mis Envíos sin interrupción.",
   "form_factor": "app",
   "id": "TC-B2C41-APP-002",
   "name": "Verificar que sin sugerencias el modal no se muestra y el flujo continúa [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_SIN_SUGERENCIAS_USER} (vhchirinos+noaddress@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+noaddress@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta no tiene productos My Usuals ni favoritos",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".",
   "test_data": "v1.0.7, iOS, contraseña de la cuenta, vhchirinos+noaddress@avatar-global.com, 20000, 000000000000675191-UN, 11"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Se muestran dos pestañas en orden: \"Lo que más compro\" resaltada con la lista My Usuals y luego \"Mis favoritos\".",
   "form_factor": "app",
   "id": "TC-B2C41-APP-003",
   "name": "Verificar que con My Usuals y favoritos se ven ambas pestañas en orden [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_USUALS_FAVORITOS_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y al menos un favorito",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario revisa las pestañas del modal.",
   "test_data": "v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 20000, 000000000000675191-UN, 11"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Se muestra solo la pestaña \"Lo que más compro\", resaltada; no se muestra \"Mis favoritos\".",
   "form_factor": "app",
   "id": "TC-B2C41-APP-004",
   "name": "Verificar que sin favoritos solo se ve la pestaña Lo que más compro [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_SOLO_USUALS_USER} (vhchirinos+oneclick@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+oneclick@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y ningún favorito",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario revisa las pestañas del modal.",
   "test_data": "v1.0.7, iOS, contraseña de la cuenta, vhchirinos+oneclick@avatar-global.com, 20000, 000000000000675191-UN, 11"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Se muestra solo la pestaña \"Mis favoritos\"; no se muestra \"Lo que más compro\".",
   "form_factor": "app",
   "id": "TC-B2C41-APP-005",
   "name": "Verificar que sin My Usuals solo se ve la pestaña Mis favoritos [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_SOLO_FAVORITOS_USER} (vhchirinos+segundo@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+segundo@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta no tiene My Usuals y tiene al menos un favorito",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario revisa las pestañas del modal.",
   "test_data": "v1.0.7, iOS, contraseña de la cuenta, vhchirinos+segundo@avatar-global.com, 20000, 000000000000675191-UN, 11"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "La pestaña \"Lo que más compro\" está resaltada, muestra los My Usuals en grilla 2x2 con la información de producto de B2C-64 y el botón \"Continuar\" fijo.",
   "form_factor": "app",
   "id": "TC-B2C41-APP-006",
   "name": "Verificar que Lo que más compro muestra los My Usuals en grilla 2x2 con Continuar fijo [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_USUALS_FAVORITOS_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y al menos un favorito",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario revisa el contenido de la pestaña \"Lo que más compro\".",
   "test_data": "v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 20000, 000000000000675191-UN, 11"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "La pestaña \"Lo que más compro\" muestra 24 productos, aunque la cuenta tiene más de 24 My Usuals.",
   "form_factor": "app",
   "id": "TC-B2C41-APP-007",
   "name": "Verificar que Lo que más compro muestra como máximo 24 productos [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_USUALS_MAS_24_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene más de 24 productos My Usuals",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario recorre hasta el final la grilla de \"Lo que más compro\" y cuenta los productos.",
   "test_data": "v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 20000, 000000000000675191-UN, 11"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "La pestaña \"Mis favoritos\" queda resaltada y muestra todos los favoritos de la cuenta en grilla 2x2, con la información de B2C-64 y el botón \"Continuar\" fijo.",
   "form_factor": "app",
   "id": "TC-B2C41-APP-008",
   "name": "Verificar que la pestaña Mis favoritos muestra los favoritos en grilla 2x2 sin tope [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_USUALS_FAVORITOS_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y al menos un favorito",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario toca la pestaña \"Mis favoritos\".\n6. El sistema muestra la pestaña \"Mis favoritos\" resaltada.",
   "test_data": "v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 20000, 000000000000675191-UN, 11"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El producto se agrega al carro con la cantidad indicada, el contador del carro se actualiza en tiempo real, el modal permanece abierto y \"Continuar\" sigue habilitado.",
   "form_factor": "app",
   "id": "TC-B2C41-APP-009",
   "name": "Verificar que Agregar un sugerido lo suma al carro y el modal sigue abierto [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_USUALS_FAVORITOS_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y al menos un favorito",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario toca \"Agregar\" en el primer producto de la pestaña activa.\n6. El sistema muestra un loading en la card del producto mientras procesa la solicitud.",
   "test_data": "v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 20000, 000000000000675191-UN, 11"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El modal se cierra y el usuario continúa al siguiente paso \"Mis Envíos\"",
   "form_factor": "app",
   "id": "TC-B2C41-APP-010",
   "name": "Verificar que Continuar cierra el modal de sugeridos y sigue a la página Mis Envíos [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_USUALS_FAVORITOS_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y al menos un favorito",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario toca \"Continuar\".",
   "test_data": "v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 20000, 000000000000675191-UN, 11"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Se muestra el toast CRT-024 (persiste hasta la X), el carrito no se modifica, el modal permanece abierto y \"Continuar\" sigue disponible.",
   "form_factor": "app",
   "id": "TC-B2C41-APP-011",
   "name": "Verificar que un error al agregar un sugerido muestra CRT-024 y el modal sigue abierto [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_USUALS_FAVORITOS_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. Además {HERRAMIENTA_PROXY_APP} y {ADD_TO_CART_API_ENDPOINT} están en TBD. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y al menos un favorito\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {ADD_TO_CART_API_ENDPOINT}",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario toca \"Agregar\" en el primer producto de la pestaña activa.\n6. El sistema muestra el toast de error \"No pudimos agregar el producto al carro. Inténtalo nuevamente. (CRT-024)\".",
   "test_data": "{ADD_TO_CART_API_ENDPOINT}, v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, {HERRAMIENTA_PROXY_APP}, 20000, 000000000000675191-UN, 11"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El área de productos se desplaza verticalmente y el CTA \"Continuar\" permanece fijo en la parte inferior durante todo el scroll.",
   "form_factor": "app",
   "id": "TC-B2C41-APP-012",
   "name": "Verificar que al hacer scroll en el modal el botón Continuar permanece fijo [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_USUALS_FAVORITOS_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La lista de la pestaña activa supera la altura visible de la pantalla",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario hace scroll vertical dentro del modal hasta el final de la lista.",
   "test_data": "v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 20000, 000000000000675191-UN, 11"
  }
 ]
}
-->
