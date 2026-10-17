# B2C-39 APP - Eliminar y reemplazar no disponibles en el carro (Android) - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-39 APP |
| Última actualización | 2026-10-16 |
| Ejecutado por | Victor Chirinos |
| Ambiente | App Unimarc v1.0.7 (DEV) |
| Dispositivo Android | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-39 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 10 |
| **Total** | **10** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-16 | 10 | TC-B2C39-APP-001, TC-B2C39-APP-002, TC-B2C39-APP-003, TC-B2C39-APP-004, TC-B2C39-APP-005, TC-B2C39-APP-006, TC-B2C39-APP-007, TC-B2C39-APP-008, TC-B2C39-APP-009, TC-B2C39-APP-010 |

## Detalle por caso de prueba

### TC-B2C39-APP-001 - Verificar que Reemplazar de un ítem no disponible abre el modal de productos similares [App] [Logueado]

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
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock

**Data utilizada**

v1.0.7, iOS, 000000000400254005-UN, 000000000000675191-UN, Unimarc Los leones, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Reemplazar" en el ítem 000000000400254005-UN.
4. El sistema abre el modal de productos similares (B2C-40).

**Resultado esperado**

Se abre el modal de productos similares de 000000000400254005-UN (B2C-40).

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {USER_AUTH_001} es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Además {SKU_NO_DISPONIBLE} = 000000000400254005-UN (Picado Nestlé Naturnes 215 g) SÍ tiene stock en {TIENDA_SIN_STOCK} = Unimarc Los Leones: en la app (2026-10-16, invitado con retiro en Unimarc Los Leones) la búsqueda del SKU lo muestra con 'Agregar' (igual que en la web el 2026-10-12 y 2026-10-14), así que no hay ítem no disponible que verificar. Acción: declarar un SKU sin stock en esa tienda (o una tienda donde {SKU_NO_DISPONIBLE} no tenga stock) y una cuenta con RUT. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Exploración: {SKU_NO_DISPONIBLE} con 'Agregar' (con stock) en retiro Unimarc Los Leones](<B2C-39 APP Evidencias/i-sku-no-disponible.png>)

---

### TC-B2C39-APP-002 - Verificar que el ítem no disponible muestra el CTA Reemplazar y el link de texto Eliminar [App] [Logueado]

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
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock

**Data utilizada**

v1.0.7, iOS, 000000000400254005-UN, 000000000000675191-UN, Unimarc Los leones, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario revisa el ítem 000000000400254005-UN en la sección de no disponibles.

**Resultado esperado**

El ítem muestra el CTA "Reemplazar" y el link de texto "Eliminar"; no se muestra un ícono ✕.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {USER_AUTH_001} es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Además {SKU_NO_DISPONIBLE} = 000000000400254005-UN (Picado Nestlé Naturnes 215 g) SÍ tiene stock en {TIENDA_SIN_STOCK} = Unimarc Los Leones: en la app (2026-10-16, invitado con retiro en Unimarc Los Leones) la búsqueda del SKU lo muestra con 'Agregar' (igual que en la web el 2026-10-12 y 2026-10-14), así que no hay ítem no disponible que verificar. Acción: declarar un SKU sin stock en esa tienda (o una tienda donde {SKU_NO_DISPONIBLE} no tenga stock) y una cuenta con RUT. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Exploración: {SKU_NO_DISPONIBLE} con 'Agregar' (con stock) en retiro Unimarc Los Leones](<B2C-39 APP Evidencias/i-sku-no-disponible.png>)

---

### TC-B2C39-APP-003 - Verificar que reemplazar por un similar lo agrega a disponibles y quita el no disponible [App] [Logueado]

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
- El carro contiene 000000000000675191-UN y 000000000400254005-UN x 1
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock

**Data utilizada**

v1.0.7, iOS, 000000000400254005-UN, 000000000000675191-UN, Unimarc Los leones, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Reemplazar" en el ítem 000000000400254005-UN.
4. El sistema abre el modal de productos similares (B2C-40).
5. El usuario toca "Agregar" en el primer producto similar del modal.
6. El usuario toca "Reemplazar producto".
7. El sistema muestra un estado de carga (loading).

**Resultado esperado**

El similar se agrega a la sección de disponibles con la cantidad seleccionada, 000000000400254005-UN sale de no disponibles, el resumen de precios se recalcula y se muestra el toast "¡Tu carro ha sido actualizado!".

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {USER_AUTH_001} es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Además {SKU_NO_DISPONIBLE} = 000000000400254005-UN (Picado Nestlé Naturnes 215 g) SÍ tiene stock en {TIENDA_SIN_STOCK} = Unimarc Los Leones: en la app (2026-10-16, invitado con retiro en Unimarc Los Leones) la búsqueda del SKU lo muestra con 'Agregar' (igual que en la web el 2026-10-12 y 2026-10-14), así que no hay ítem no disponible que verificar. Acción: declarar un SKU sin stock en esa tienda (o una tienda donde {SKU_NO_DISPONIBLE} no tenga stock) y una cuenta con RUT. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Exploración: {SKU_NO_DISPONIBLE} con 'Agregar' (con stock) en retiro Unimarc Los Leones](<B2C-39 APP Evidencias/i-sku-no-disponible.png>)

---

### TC-B2C39-APP-004 - Verificar que un reemplazo parcial deja en no disponibles la cantidad restante [App] [Logueado]

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
- El carro contiene 000000000000675191-UN y 000000000400254005-UN x 3
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock

**Data utilizada**

v1.0.7, iOS, 000000000400254005-UN, 000000000000675191-UN, Unimarc Los leones, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Reemplazar" en el ítem 000000000400254005-UN.
4. El sistema abre el modal de productos similares (B2C-40).
5. El usuario toca "Agregar" en el primer producto similar del modal y deja la cantidad en 1.
6. El usuario toca "Reemplazar producto".
7. El sistema muestra un estado de carga (loading).

**Resultado esperado**

El similar se agrega a disponibles con cantidad 1 y 000000000400254005-UN permanece en no disponibles con cantidad 2 (3 − 1).

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {USER_AUTH_001} es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Además {SKU_NO_DISPONIBLE} = 000000000400254005-UN (Picado Nestlé Naturnes 215 g) SÍ tiene stock en {TIENDA_SIN_STOCK} = Unimarc Los Leones: en la app (2026-10-16, invitado con retiro en Unimarc Los Leones) la búsqueda del SKU lo muestra con 'Agregar' (igual que en la web el 2026-10-12 y 2026-10-14), así que no hay ítem no disponible que verificar. Acción: declarar un SKU sin stock en esa tienda (o una tienda donde {SKU_NO_DISPONIBLE} no tenga stock) y una cuenta con RUT. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Exploración: {SKU_NO_DISPONIBLE} con 'Agregar' (con stock) en retiro Unimarc Los Leones](<B2C-39 APP Evidencias/i-sku-no-disponible.png>)

---

### TC-B2C39-APP-005 - Verificar que un carro solo con no disponibles muestra la sección expandida y el CTA deshabilitado [App] [Logueado]

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
- El carro contiene solo 000000000400254005-UN
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock

**Data utilizada**

v1.0.7, iOS, 000000000400254005-UN, Unimarc Los leones, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario revisa la sección de no disponibles y el botón "Continuar con la entrega".

**Resultado esperado**

La sección de no disponibles se muestra expandida con badge "Pronto disponible", CTA "Reemplazar" y link "Eliminar"; no hay ítems disponibles y "Continuar con la entrega" está deshabilitado.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {USER_AUTH_001} es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Además {SKU_NO_DISPONIBLE} = 000000000400254005-UN (Picado Nestlé Naturnes 215 g) SÍ tiene stock en {TIENDA_SIN_STOCK} = Unimarc Los Leones: en la app (2026-10-16, invitado con retiro en Unimarc Los Leones) la búsqueda del SKU lo muestra con 'Agregar' (igual que en la web el 2026-10-12 y 2026-10-14), así que no hay ítem no disponible que verificar. Acción: declarar un SKU sin stock en esa tienda (o una tienda donde {SKU_NO_DISPONIBLE} no tenga stock) y una cuenta con RUT. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Exploración: {SKU_NO_DISPONIBLE} con 'Agregar' (con stock) en retiro Unimarc Los Leones](<B2C-39 APP Evidencias/i-sku-no-disponible.png>)

---

### TC-B2C39-APP-006 - Verificar que eliminar un no disponible sin confirmar mantiene la sección si quedan otros [App] [Logueado]

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
- El carro contiene 000000000000675191-UN, 000000000400254005-UN y 000000000000966668-KG
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN y 000000000000966668-KG no tienen stock

**Data utilizada**

v1.0.7, iOS, 000000000000966668-KG, 000000000400254005-UN, 000000000000675191-UN, Unimarc Los leones, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario desliza lateralmente el ítem 000000000400254005-UN y toca el botón rojo "Eliminar" con ícono de tacho que se revela.
4. El sistema muestra un loading en el shelf del producto.

**Resultado esperado**

000000000400254005-UN se elimina sin solicitar confirmación y la sección de no disponibles sigue visible con 000000000000966668-KG.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {USER_AUTH_001} es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Además {SKU_NO_DISPONIBLE} = 000000000400254005-UN (Picado Nestlé Naturnes 215 g) SÍ tiene stock en {TIENDA_SIN_STOCK} = Unimarc Los Leones: en la app (2026-10-16, invitado con retiro en Unimarc Los Leones) la búsqueda del SKU lo muestra con 'Agregar' (igual que en la web el 2026-10-12 y 2026-10-14), así que no hay ítem no disponible que verificar. Acción: declarar un SKU sin stock en esa tienda (o una tienda donde {SKU_NO_DISPONIBLE} no tenga stock) y una cuenta con RUT. ({SKU_NO_DISPONIBLE_2} también tenía stock en Los Leones el 2026-10-14.) La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Exploración: {SKU_NO_DISPONIBLE} con 'Agregar' (con stock) en retiro Unimarc Los Leones](<B2C-39 APP Evidencias/i-sku-no-disponible.png>)

---

### TC-B2C39-APP-007 - Verificar que eliminar el último no disponible hace desaparecer la sección [App] [Logueado]

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
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock

**Data utilizada**

v1.0.7, iOS, 000000000400254005-UN, 000000000000675191-UN, Unimarc Los leones, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario desliza lateralmente el ítem 000000000400254005-UN y toca el botón rojo "Eliminar" con ícono de tacho que se revela.
4. El sistema muestra un loading en el shelf del producto.

**Resultado esperado**

000000000400254005-UN se elimina sin confirmación y la sección de no disponibles desaparece; 000000000000675191-UN se mantiene.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {USER_AUTH_001} es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Además {SKU_NO_DISPONIBLE} = 000000000400254005-UN (Picado Nestlé Naturnes 215 g) SÍ tiene stock en {TIENDA_SIN_STOCK} = Unimarc Los Leones: en la app (2026-10-16, invitado con retiro en Unimarc Los Leones) la búsqueda del SKU lo muestra con 'Agregar' (igual que en la web el 2026-10-12 y 2026-10-14), así que no hay ítem no disponible que verificar. Acción: declarar un SKU sin stock en esa tienda (o una tienda donde {SKU_NO_DISPONIBLE} no tenga stock) y una cuenta con RUT. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Exploración: {SKU_NO_DISPONIBLE} con 'Agregar' (con stock) en retiro Unimarc Los Leones](<B2C-39 APP Evidencias/i-sku-no-disponible.png>)

---

### TC-B2C39-APP-008 - Verificar que un error al eliminar un no disponible muestra el toast CRT-021 [App] [Logueado]

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
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {CART_ITEM_API_ENDPOINT}

**Data utilizada**

v1.0.7, iOS, {CART_ITEM_API_ENDPOINT}, {HERRAMIENTA_PROXY_APP}, 000000000400254005-UN, 000000000000675191-UN, Unimarc Los leones, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario desliza lateralmente el ítem 000000000400254005-UN y toca el botón rojo "Eliminar" con ícono de tacho que se revela.
4. El sistema muestra el toast de error "No pudimos eliminar el producto del carro. Vuelve a intentarlo" [CRT-021].

**Resultado esperado**

El toast CRT-021 persiste hasta que el usuario lo cierra con la X y 000000000400254005-UN permanece en no disponibles sin cambios.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {USER_AUTH_001} es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Además {SKU_NO_DISPONIBLE} = 000000000400254005-UN (Picado Nestlé Naturnes 215 g) SÍ tiene stock en {TIENDA_SIN_STOCK} = Unimarc Los Leones: en la app (2026-10-16, invitado con retiro en Unimarc Los Leones) la búsqueda del SKU lo muestra con 'Agregar' (igual que en la web el 2026-10-12 y 2026-10-14), así que no hay ítem no disponible que verificar. Acción: declarar un SKU sin stock en esa tienda (o una tienda donde {SKU_NO_DISPONIBLE} no tenga stock) y una cuenta con RUT. Además {HERRAMIENTA_PROXY_APP} y el endpoint del caso están en TBD. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Exploración: {SKU_NO_DISPONIBLE} con 'Agregar' (con stock) en retiro Unimarc Los Leones](<B2C-39 APP Evidencias/i-sku-no-disponible.png>)

---

### TC-B2C39-APP-009 - Verificar que un error al agregar el sustituto muestra el toast CRT-025 [App] [Logueado]

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
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {ADD_TO_CART_API_ENDPOINT}

**Data utilizada**

{ADD_TO_CART_API_ENDPOINT}, v1.0.7, iOS, {HERRAMIENTA_PROXY_APP}, 000000000400254005-UN, 000000000000675191-UN, Unimarc Los leones, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Reemplazar" en el ítem 000000000400254005-UN.
4. El sistema abre el modal de productos similares (B2C-40).
5. El usuario toca "Agregar" en el primer producto similar del modal.
6. El usuario toca "Reemplazar producto".
7. El sistema muestra el toast de error "¡Lo sentimos! No pudimos reemplazar tu producto, vuelve a intentarlo. (CRT-025)".

**Resultado esperado**

Se muestra el toast CRT-025 y 000000000400254005-UN permanece en la sección de no disponibles sin cambios.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {USER_AUTH_001} es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Además {SKU_NO_DISPONIBLE} = 000000000400254005-UN (Picado Nestlé Naturnes 215 g) SÍ tiene stock en {TIENDA_SIN_STOCK} = Unimarc Los Leones: en la app (2026-10-16, invitado con retiro en Unimarc Los Leones) la búsqueda del SKU lo muestra con 'Agregar' (igual que en la web el 2026-10-12 y 2026-10-14), así que no hay ítem no disponible que verificar. Acción: declarar un SKU sin stock en esa tienda (o una tienda donde {SKU_NO_DISPONIBLE} no tenga stock) y una cuenta con RUT. Además {HERRAMIENTA_PROXY_APP} y el endpoint del caso están en TBD. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Exploración: {SKU_NO_DISPONIBLE} con 'Agregar' (con stock) en retiro Unimarc Los Leones](<B2C-39 APP Evidencias/i-sku-no-disponible.png>)

---

### TC-B2C39-APP-010 - Verificar que un invitado ve la sección de no disponibles con Reemplazar y Eliminar [App] [Guest]

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
- Ubicacion: Home de la App
- El carro contiene 000000000000675191-UN y 000000000400254005-UN
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock

**Data utilizada**

v1.0.7, iOS, 000000000400254005-UN, 000000000000675191-UN, Unimarc Los leones

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario revisa la sección de no disponibles.

**Resultado esperado**

Se muestra la sección de no disponibles con 000000000400254005-UN, badge "Pronto disponible", CTA "Reemplazar" y link "Eliminar".

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {SKU_NO_DISPONIBLE} = 000000000400254005-UN (Picado Nestlé Naturnes 215 g) SÍ tiene stock en {TIENDA_SIN_STOCK} = Unimarc Los Leones: en la app (2026-10-16, invitado con retiro en Unimarc Los Leones) la búsqueda del SKU lo muestra con 'Agregar' (igual que en la web el 2026-10-12 y 2026-10-14), así que no hay ítem no disponible que verificar. Acción: declarar un SKU sin stock en esa tienda (o una tienda donde {SKU_NO_DISPONIBLE} no tenga stock). La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Exploración: {SKU_NO_DISPONIBLE} con 'Agregar' (con stock) en retiro Unimarc Los Leones](<B2C-39 APP Evidencias/i-sku-no-disponible.png>)

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
  "suite": "B2C-39 APP",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-39 APP Test Cases.xlsx",
  "title": "B2C-39 APP - Eliminar y reemplazar no disponibles en el carro (Android) - Evidencias QA",
  "updated_at": "2026-10-16"
 },
 "history": {
  "2026-10-16": [
   "TC-B2C39-APP-001",
   "TC-B2C39-APP-002",
   "TC-B2C39-APP-003",
   "TC-B2C39-APP-004",
   "TC-B2C39-APP-005",
   "TC-B2C39-APP-006",
   "TC-B2C39-APP-007",
   "TC-B2C39-APP-008",
   "TC-B2C39-APP-009",
   "TC-B2C39-APP-010"
  ]
 },
 "results": [
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Se abre el modal de productos similares de 000000000400254005-UN (B2C-40).",
   "form_factor": "app",
   "id": "TC-B2C39-APP-001",
   "name": "Verificar que Reemplazar de un ítem no disponible abre el modal de productos similares [App] [Logueado]",
   "observation": "Causa: {USER_AUTH_001} es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Además {SKU_NO_DISPONIBLE} = 000000000400254005-UN (Picado Nestlé Naturnes 215 g) SÍ tiene stock en {TIENDA_SIN_STOCK} = Unimarc Los Leones: en la app (2026-10-16, invitado con retiro en Unimarc Los Leones) la búsqueda del SKU lo muestra con 'Agregar' (igual que en la web el 2026-10-12 y 2026-10-14), así que no hay ítem no disponible que verificar. Acción: declarar un SKU sin stock en esa tienda (o una tienda donde {SKU_NO_DISPONIBLE} no tenga stock) y una cuenta con RUT. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN y 000000000400254005-UN\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock",
   "screenshots": [
    {
     "caption": "Exploración: {SKU_NO_DISPONIBLE} con 'Agregar' (con stock) en retiro Unimarc Los Leones",
     "file": "i-sku-no-disponible.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Reemplazar\" en el ítem 000000000400254005-UN.\n4. El sistema abre el modal de productos similares (B2C-40).",
   "test_data": "v1.0.7, iOS, 000000000400254005-UN, 000000000000675191-UN, Unimarc Los leones, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El ítem muestra el CTA \"Reemplazar\" y el link de texto \"Eliminar\"; no se muestra un ícono ✕.",
   "form_factor": "app",
   "id": "TC-B2C39-APP-002",
   "name": "Verificar que el ítem no disponible muestra el CTA Reemplazar y el link de texto Eliminar [App] [Logueado]",
   "observation": "Causa: {USER_AUTH_001} es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Además {SKU_NO_DISPONIBLE} = 000000000400254005-UN (Picado Nestlé Naturnes 215 g) SÍ tiene stock en {TIENDA_SIN_STOCK} = Unimarc Los Leones: en la app (2026-10-16, invitado con retiro en Unimarc Los Leones) la búsqueda del SKU lo muestra con 'Agregar' (igual que en la web el 2026-10-12 y 2026-10-14), así que no hay ítem no disponible que verificar. Acción: declarar un SKU sin stock en esa tienda (o una tienda donde {SKU_NO_DISPONIBLE} no tenga stock) y una cuenta con RUT. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN y 000000000400254005-UN\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock",
   "screenshots": [
    {
     "caption": "Exploración: {SKU_NO_DISPONIBLE} con 'Agregar' (con stock) en retiro Unimarc Los Leones",
     "file": "i-sku-no-disponible.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario revisa el ítem 000000000400254005-UN en la sección de no disponibles.",
   "test_data": "v1.0.7, iOS, 000000000400254005-UN, 000000000000675191-UN, Unimarc Los leones, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El similar se agrega a la sección de disponibles con la cantidad seleccionada, 000000000400254005-UN sale de no disponibles, el resumen de precios se recalcula y se muestra el toast \"¡Tu carro ha sido actualizado!\".",
   "form_factor": "app",
   "id": "TC-B2C39-APP-003",
   "name": "Verificar que reemplazar por un similar lo agrega a disponibles y quita el no disponible [App] [Logueado]",
   "observation": "Causa: {USER_AUTH_001} es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Además {SKU_NO_DISPONIBLE} = 000000000400254005-UN (Picado Nestlé Naturnes 215 g) SÍ tiene stock en {TIENDA_SIN_STOCK} = Unimarc Los Leones: en la app (2026-10-16, invitado con retiro en Unimarc Los Leones) la búsqueda del SKU lo muestra con 'Agregar' (igual que en la web el 2026-10-12 y 2026-10-14), así que no hay ítem no disponible que verificar. Acción: declarar un SKU sin stock en esa tienda (o una tienda donde {SKU_NO_DISPONIBLE} no tenga stock) y una cuenta con RUT. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN y 000000000400254005-UN x 1\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock",
   "screenshots": [
    {
     "caption": "Exploración: {SKU_NO_DISPONIBLE} con 'Agregar' (con stock) en retiro Unimarc Los Leones",
     "file": "i-sku-no-disponible.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Reemplazar\" en el ítem 000000000400254005-UN.\n4. El sistema abre el modal de productos similares (B2C-40).\n5. El usuario toca \"Agregar\" en el primer producto similar del modal.\n6. El usuario toca \"Reemplazar producto\".\n7. El sistema muestra un estado de carga (loading).",
   "test_data": "v1.0.7, iOS, 000000000400254005-UN, 000000000000675191-UN, Unimarc Los leones, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El similar se agrega a disponibles con cantidad 1 y 000000000400254005-UN permanece en no disponibles con cantidad 2 (3 − 1).",
   "form_factor": "app",
   "id": "TC-B2C39-APP-004",
   "name": "Verificar que un reemplazo parcial deja en no disponibles la cantidad restante [App] [Logueado]",
   "observation": "Causa: {USER_AUTH_001} es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Además {SKU_NO_DISPONIBLE} = 000000000400254005-UN (Picado Nestlé Naturnes 215 g) SÍ tiene stock en {TIENDA_SIN_STOCK} = Unimarc Los Leones: en la app (2026-10-16, invitado con retiro en Unimarc Los Leones) la búsqueda del SKU lo muestra con 'Agregar' (igual que en la web el 2026-10-12 y 2026-10-14), así que no hay ítem no disponible que verificar. Acción: declarar un SKU sin stock en esa tienda (o una tienda donde {SKU_NO_DISPONIBLE} no tenga stock) y una cuenta con RUT. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN y 000000000400254005-UN x 3\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock",
   "screenshots": [
    {
     "caption": "Exploración: {SKU_NO_DISPONIBLE} con 'Agregar' (con stock) en retiro Unimarc Los Leones",
     "file": "i-sku-no-disponible.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Reemplazar\" en el ítem 000000000400254005-UN.\n4. El sistema abre el modal de productos similares (B2C-40).\n5. El usuario toca \"Agregar\" en el primer producto similar del modal y deja la cantidad en 1.\n6. El usuario toca \"Reemplazar producto\".\n7. El sistema muestra un estado de carga (loading).",
   "test_data": "v1.0.7, iOS, 000000000400254005-UN, 000000000000675191-UN, Unimarc Los leones, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "La sección de no disponibles se muestra expandida con badge \"Pronto disponible\", CTA \"Reemplazar\" y link \"Eliminar\"; no hay ítems disponibles y \"Continuar con la entrega\" está deshabilitado.",
   "form_factor": "app",
   "id": "TC-B2C39-APP-005",
   "name": "Verificar que un carro solo con no disponibles muestra la sección expandida y el CTA deshabilitado [App] [Logueado]",
   "observation": "Causa: {USER_AUTH_001} es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Además {SKU_NO_DISPONIBLE} = 000000000400254005-UN (Picado Nestlé Naturnes 215 g) SÍ tiene stock en {TIENDA_SIN_STOCK} = Unimarc Los Leones: en la app (2026-10-16, invitado con retiro en Unimarc Los Leones) la búsqueda del SKU lo muestra con 'Agregar' (igual que en la web el 2026-10-12 y 2026-10-14), así que no hay ítem no disponible que verificar. Acción: declarar un SKU sin stock en esa tienda (o una tienda donde {SKU_NO_DISPONIBLE} no tenga stock) y una cuenta con RUT. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene solo 000000000400254005-UN\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock",
   "screenshots": [
    {
     "caption": "Exploración: {SKU_NO_DISPONIBLE} con 'Agregar' (con stock) en retiro Unimarc Los Leones",
     "file": "i-sku-no-disponible.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario revisa la sección de no disponibles y el botón \"Continuar con la entrega\".",
   "test_data": "v1.0.7, iOS, 000000000400254005-UN, Unimarc Los leones, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "000000000400254005-UN se elimina sin solicitar confirmación y la sección de no disponibles sigue visible con 000000000000966668-KG.",
   "form_factor": "app",
   "id": "TC-B2C39-APP-006",
   "name": "Verificar que eliminar un no disponible sin confirmar mantiene la sección si quedan otros [App] [Logueado]",
   "observation": "Causa: {USER_AUTH_001} es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Además {SKU_NO_DISPONIBLE} = 000000000400254005-UN (Picado Nestlé Naturnes 215 g) SÍ tiene stock en {TIENDA_SIN_STOCK} = Unimarc Los Leones: en la app (2026-10-16, invitado con retiro en Unimarc Los Leones) la búsqueda del SKU lo muestra con 'Agregar' (igual que en la web el 2026-10-12 y 2026-10-14), así que no hay ítem no disponible que verificar. Acción: declarar un SKU sin stock en esa tienda (o una tienda donde {SKU_NO_DISPONIBLE} no tenga stock) y una cuenta con RUT. ({SKU_NO_DISPONIBLE_2} también tenía stock en Los Leones el 2026-10-14.) La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN, 000000000400254005-UN y 000000000000966668-KG\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN y 000000000000966668-KG no tienen stock",
   "screenshots": [
    {
     "caption": "Exploración: {SKU_NO_DISPONIBLE} con 'Agregar' (con stock) en retiro Unimarc Los Leones",
     "file": "i-sku-no-disponible.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario desliza lateralmente el ítem 000000000400254005-UN y toca el botón rojo \"Eliminar\" con ícono de tacho que se revela.\n4. El sistema muestra un loading en el shelf del producto.",
   "test_data": "v1.0.7, iOS, 000000000000966668-KG, 000000000400254005-UN, 000000000000675191-UN, Unimarc Los leones, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "000000000400254005-UN se elimina sin confirmación y la sección de no disponibles desaparece; 000000000000675191-UN se mantiene.",
   "form_factor": "app",
   "id": "TC-B2C39-APP-007",
   "name": "Verificar que eliminar el último no disponible hace desaparecer la sección [App] [Logueado]",
   "observation": "Causa: {USER_AUTH_001} es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Además {SKU_NO_DISPONIBLE} = 000000000400254005-UN (Picado Nestlé Naturnes 215 g) SÍ tiene stock en {TIENDA_SIN_STOCK} = Unimarc Los Leones: en la app (2026-10-16, invitado con retiro en Unimarc Los Leones) la búsqueda del SKU lo muestra con 'Agregar' (igual que en la web el 2026-10-12 y 2026-10-14), así que no hay ítem no disponible que verificar. Acción: declarar un SKU sin stock en esa tienda (o una tienda donde {SKU_NO_DISPONIBLE} no tenga stock) y una cuenta con RUT. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN y 000000000400254005-UN\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock",
   "screenshots": [
    {
     "caption": "Exploración: {SKU_NO_DISPONIBLE} con 'Agregar' (con stock) en retiro Unimarc Los Leones",
     "file": "i-sku-no-disponible.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario desliza lateralmente el ítem 000000000400254005-UN y toca el botón rojo \"Eliminar\" con ícono de tacho que se revela.\n4. El sistema muestra un loading en el shelf del producto.",
   "test_data": "v1.0.7, iOS, 000000000400254005-UN, 000000000000675191-UN, Unimarc Los leones, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El toast CRT-021 persiste hasta que el usuario lo cierra con la X y 000000000400254005-UN permanece en no disponibles sin cambios.",
   "form_factor": "app",
   "id": "TC-B2C39-APP-008",
   "name": "Verificar que un error al eliminar un no disponible muestra el toast CRT-021 [App] [Logueado]",
   "observation": "Causa: {USER_AUTH_001} es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Además {SKU_NO_DISPONIBLE} = 000000000400254005-UN (Picado Nestlé Naturnes 215 g) SÍ tiene stock en {TIENDA_SIN_STOCK} = Unimarc Los Leones: en la app (2026-10-16, invitado con retiro en Unimarc Los Leones) la búsqueda del SKU lo muestra con 'Agregar' (igual que en la web el 2026-10-12 y 2026-10-14), así que no hay ítem no disponible que verificar. Acción: declarar un SKU sin stock en esa tienda (o una tienda donde {SKU_NO_DISPONIBLE} no tenga stock) y una cuenta con RUT. Además {HERRAMIENTA_PROXY_APP} y el endpoint del caso están en TBD. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN y 000000000400254005-UN\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {CART_ITEM_API_ENDPOINT}",
   "screenshots": [
    {
     "caption": "Exploración: {SKU_NO_DISPONIBLE} con 'Agregar' (con stock) en retiro Unimarc Los Leones",
     "file": "i-sku-no-disponible.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario desliza lateralmente el ítem 000000000400254005-UN y toca el botón rojo \"Eliminar\" con ícono de tacho que se revela.\n4. El sistema muestra el toast de error \"No pudimos eliminar el producto del carro. Vuelve a intentarlo\" [CRT-021].",
   "test_data": "v1.0.7, iOS, {CART_ITEM_API_ENDPOINT}, {HERRAMIENTA_PROXY_APP}, 000000000400254005-UN, 000000000000675191-UN, Unimarc Los leones, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Se muestra el toast CRT-025 y 000000000400254005-UN permanece en la sección de no disponibles sin cambios.",
   "form_factor": "app",
   "id": "TC-B2C39-APP-009",
   "name": "Verificar que un error al agregar el sustituto muestra el toast CRT-025 [App] [Logueado]",
   "observation": "Causa: {USER_AUTH_001} es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Además {SKU_NO_DISPONIBLE} = 000000000400254005-UN (Picado Nestlé Naturnes 215 g) SÍ tiene stock en {TIENDA_SIN_STOCK} = Unimarc Los Leones: en la app (2026-10-16, invitado con retiro en Unimarc Los Leones) la búsqueda del SKU lo muestra con 'Agregar' (igual que en la web el 2026-10-12 y 2026-10-14), así que no hay ítem no disponible que verificar. Acción: declarar un SKU sin stock en esa tienda (o una tienda donde {SKU_NO_DISPONIBLE} no tenga stock) y una cuenta con RUT. Además {HERRAMIENTA_PROXY_APP} y el endpoint del caso están en TBD. La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN y 000000000400254005-UN\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {ADD_TO_CART_API_ENDPOINT}",
   "screenshots": [
    {
     "caption": "Exploración: {SKU_NO_DISPONIBLE} con 'Agregar' (con stock) en retiro Unimarc Los Leones",
     "file": "i-sku-no-disponible.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Reemplazar\" en el ítem 000000000400254005-UN.\n4. El sistema abre el modal de productos similares (B2C-40).\n5. El usuario toca \"Agregar\" en el primer producto similar del modal.\n6. El usuario toca \"Reemplazar producto\".\n7. El sistema muestra el toast de error \"¡Lo sentimos! No pudimos reemplazar tu producto, vuelve a intentarlo. (CRT-025)\".",
   "test_data": "{ADD_TO_CART_API_ENDPOINT}, v1.0.7, iOS, {HERRAMIENTA_PROXY_APP}, 000000000400254005-UN, 000000000000675191-UN, Unimarc Los leones, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Se muestra la sección de no disponibles con 000000000400254005-UN, badge \"Pronto disponible\", CTA \"Reemplazar\" y link \"Eliminar\".",
   "form_factor": "app",
   "id": "TC-B2C39-APP-010",
   "name": "Verificar que un invitado ve la sección de no disponibles con Reemplazar y Eliminar [App] [Guest]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} = 000000000400254005-UN (Picado Nestlé Naturnes 215 g) SÍ tiene stock en {TIENDA_SIN_STOCK} = Unimarc Los Leones: en la app (2026-10-16, invitado con retiro en Unimarc Los Leones) la búsqueda del SKU lo muestra con 'Agregar' (igual que en la web el 2026-10-12 y 2026-10-14), así que no hay ítem no disponible que verificar. Acción: declarar un SKU sin stock en esa tienda (o una tienda donde {SKU_NO_DISPONIBLE} no tenga stock). La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene 000000000000675191-UN y 000000000400254005-UN\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock",
   "screenshots": [
    {
     "caption": "Exploración: {SKU_NO_DISPONIBLE} con 'Agregar' (con stock) en retiro Unimarc Los Leones",
     "file": "i-sku-no-disponible.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario revisa la sección de no disponibles.",
   "test_data": "v1.0.7, iOS, 000000000400254005-UN, 000000000000675191-UN, Unimarc Los leones"
  }
 ]
}
-->
