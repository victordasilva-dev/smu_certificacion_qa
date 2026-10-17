# B2C-42 APP - Contratar o renovar la membresía desde el carro (Android) - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-42 APP |
| Última actualización | 2026-10-16 |
| Ejecutado por | Victor Chirinos |
| Ambiente | App Unimarc v1.0.7 (DEV) |
| Dispositivo Android | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-42 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 22 |
| **Total** | **22** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-16 | 22 | TC-B2C42-APP-001, TC-B2C42-APP-002, TC-B2C42-APP-003, TC-B2C42-APP-004, TC-B2C42-APP-005, TC-B2C42-APP-006, TC-B2C42-APP-007, TC-B2C42-APP-008, TC-B2C42-APP-009, TC-B2C42-APP-010, TC-B2C42-APP-011, TC-B2C42-APP-012, TC-B2C42-APP-013, TC-B2C42-APP-014, TC-B2C42-APP-015, TC-B2C42-APP-016, TC-B2C42-APP-017, TC-B2C42-APP-018, TC-B2C42-APP-019, TC-B2C42-APP-020, TC-B2C42-APP-021, TC-B2C42-APP-022 |

## Detalle por caso de prueba

### TC-B2C42-APP-001 - Verificar que Lo quiero abre el modal Pagar membresia con la oferta de prueba [App] [Logueado]

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
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000

**Data utilizada**

v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 20000

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario revisa el contenido del modal.

**Resultado esperado**

El modal muestra: título "Pagar membresia", botón X, selector de plan 3 meses / 6 meses, toggle de TyC desactivado, bloque de medio de pago con el texto "El cobro único de [precio del plan] se realizará con el medio de pago seleccionado después de tu periodo de prueba", sección de beneficios y el CTA con ícono diamante "Comenzar mis 15 días gratis" deshabilitado; si el contenido excede la pantalla, el modal hace scroll.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. Nota: en la web el banner de membresía del carro (punto de entrada 'Lo quiero'/'Renovar') no existe en DEV al 2026-10-14 (HU B2C-42 y tarea WEB B2C-409 'En curso'). La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C42-APP-002 - Verificar que Renovar abre el modal Renovar membresia con cobro inmediato [App] [Logueado]

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
- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000

**Data utilizada**

v1.0.7, iOS, contraseña de la cuenta, vhchirinos+segundo@avatar-global.com, 000000000000662457-UN, 20000

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Renovar".
3. El usuario toca "Renovar".
4. El sistema muestra el modal "Renovar membresia".
5. El usuario revisa el contenido del modal.

**Resultado esperado**

El modal muestra: título "Renovar membresia", botón X, selector de plan 3 meses / 6 meses, toggle de TyC desactivado, bloque de medio de pago con el texto "El cobro único de [precio del plan] se realizará de inmediato con el medio de pago seleccionado", sección de beneficios y el CTA con ícono diamante "Renovar mi membresía" deshabilitado.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_MEMBRESIA_EXPIRADA_USER} (vhchirinos+segundo@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. Nota: en la web el banner de membresía del carro (punto de entrada 'Lo quiero'/'Renovar') no existe en DEV al 2026-10-14 (HU B2C-42 y tarea WEB B2C-409 'En curso'). La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C42-APP-003 - Verificar que para un cliente Nuevo cada plan muestra ícono, 15 días gratis y precio [App] [Logueado]

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
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000

**Data utilizada**

v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 20000

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario revisa las opciones de plan 3 meses y 6 meses.

**Resultado esperado**

Cada plan muestra su ícono (3 meses / 6 meses), el texto "15 días gratis" y su precio.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. Nota: en la web el banner de membresía del carro (punto de entrada 'Lo quiero'/'Renovar') no existe en DEV al 2026-10-14 (HU B2C-42 y tarea WEB B2C-409 'En curso'). La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C42-APP-004 - Verificar que para un cliente Expirado los planes no muestran 15 días gratis [App] [Logueado]

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
- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000

**Data utilizada**

v1.0.7, iOS, contraseña de la cuenta, vhchirinos+segundo@avatar-global.com, 000000000000662457-UN, 20000

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Renovar".
3. El usuario toca "Renovar".
4. El sistema muestra el modal "Renovar membresia".
5. El usuario revisa las opciones de plan 3 meses y 6 meses.

**Resultado esperado**

Cada plan muestra su ícono y su precio, sin el texto "15 días gratis".

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_MEMBRESIA_EXPIRADA_USER} (vhchirinos+segundo@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. Nota: en la web el banner de membresía del carro (punto de entrada 'Lo quiero'/'Renovar') no existe en DEV al 2026-10-14 (HU B2C-42 y tarea WEB B2C-409 'En curso'). La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C42-APP-005 - Verificar que seleccionar el plan de 3 meses actualiza el precio a $14.990 [App] [Logueado]

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
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000

**Data utilizada**

v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 20000

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona el plan 3 meses.

**Resultado esperado**

El plan 3 meses queda seleccionado y el resumen del modal muestra $14.990.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. Nota: en la web el banner de membresía del carro (punto de entrada 'Lo quiero'/'Renovar') no existe en DEV al 2026-10-14 (HU B2C-42 y tarea WEB B2C-409 'En curso'). La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C42-APP-006 - Verificar que seleccionar el plan de 6 meses actualiza el precio a $24.990 [App] [Logueado]

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
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000

**Data utilizada**

v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 20000

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona el plan 6 meses.

**Resultado esperado**

El plan 6 meses queda seleccionado y el resumen del modal muestra $24.990.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. Nota: en la web el banner de membresía del carro (punto de entrada 'Lo quiero'/'Renovar') no existe en DEV al 2026-10-14 (HU B2C-42 y tarea WEB B2C-409 'En curso'). La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C42-APP-007 - Verificar que sin tarjetas guardadas el bloque de pago muestra Nuevo medio de pago y Agregar [App] [Logueado]

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
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta no tiene tarjetas guardadas

**Data utilizada**

v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 20000

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario revisa el bloque de medio de pago.

**Resultado esperado**

El bloque de pago muestra "Nuevo medio de pago" con el CTA "Agregar" y ninguna tarjeta.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. Nota: en la web el banner de membresía del carro (punto de entrada 'Lo quiero'/'Renovar') no existe en DEV al 2026-10-14 (HU B2C-42 y tarea WEB B2C-409 'En curso'). La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C42-APP-008 - Verificar que con tarjeta guardada el bloque de pago muestra logo, últimos 4 dígitos y Agregar [App] [Logueado]

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
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardada la tarjeta 370000000002032

**Data utilizada**

v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario revisa el bloque de medio de pago.

**Resultado esperado**

El bloque de pago muestra el logo de la tarjeta con sus 4 últimos dígitos y "Nuevo medio de pago" con el CTA "Agregar".

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. Nota: en la web el banner de membresía del carro (punto de entrada 'Lo quiero'/'Renovar') no existe en DEV al 2026-10-14 (HU B2C-42 y tarea WEB B2C-409 'En curso'). La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C42-APP-009 - Verificar que seleccionar una tarjeta guardada la asocia al plan de membresía [App] [Logueado]

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
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardada la tarjeta 370000000002032

**Data utilizada**

v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.

**Resultado esperado**

La tarjeta 370000000002032 queda seleccionada como medio de pago asociado al plan de membresía.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. Nota: en la web el banner de membresía del carro (punto de entrada 'Lo quiero'/'Renovar') no existe en DEV al 2026-10-14 (HU B2C-42 y tarea WEB B2C-409 'En curso'). La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C42-APP-010 - Verificar que agregar una tarjeta nueva la guarda en la cuenta [App] [Logueado]

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
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta no tiene guardada la tarjeta 370000000002032

**Data utilizada**

v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/account, 000000000000662457-UN, 370000000002032, 20000

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario toca "Agregar" en "Nuevo medio de pago" e ingresa los datos de 370000000002032.
6. El sistema tokeniza la tarjeta y la muestra en el bloque de medio de pago.
7. El usuario revisa los medios de pago guardados en Mi cuenta de la App.

**Resultado esperado**

La tarjeta 370000000002032 queda guardada en la cuenta y disponible para compras ecommerce.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. Nota: en la web el banner de membresía del carro (punto de entrada 'Lo quiero'/'Renovar') no existe en DEV al 2026-10-14 (HU B2C-42 y tarea WEB B2C-409 'En curso'). La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C42-APP-011 - Verificar que cambiar el medio de pago reemplaza el asociado al plan [App] [Logueado]

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
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardadas las tarjetas 370000000002032 y 4051884239937763

**Data utilizada**

v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 4051884239937763, 20000

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.
6. El usuario selecciona la tarjeta guardada 4051884239937763.

**Resultado esperado**

4051884239937763 queda seleccionada como medio asociado al plan y 370000000002032 deja de estar seleccionada.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. Nota: en la web el banner de membresía del carro (punto de entrada 'Lo quiero'/'Renovar') no existe en DEV al 2026-10-14 (HU B2C-42 y tarea WEB B2C-409 'En curso'). La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C42-APP-012 - Verificar que activar el toggle de TyC lo deja marcado como aceptado [App] [Logueado]

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
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000

**Data utilizada**

v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 20000

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario activa el toggle "Acepto los términos y condiciones y las politicas de privacidad".

**Resultado esperado**

El toggle de Términos y Condiciones queda marcado como aceptado.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. Nota: en la web el banner de membresía del carro (punto de entrada 'Lo quiero'/'Renovar') no existe en DEV al 2026-10-14 (HU B2C-42 y tarea WEB B2C-409 'En curso'). La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C42-APP-013 - Verificar que con medio de pago y TyC aceptados se habilita Comenzar mis 15 días gratis [App] [Logueado]

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
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardada la tarjeta 370000000002032

**Data utilizada**

v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.
6. El usuario activa el toggle "Acepto los términos y condiciones y las politicas de privacidad".

**Resultado esperado**

El CTA "Comenzar mis 15 días gratis" se habilita.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. Nota: en la web el banner de membresía del carro (punto de entrada 'Lo quiero'/'Renovar') no existe en DEV al 2026-10-14 (HU B2C-42 y tarea WEB B2C-409 'En curso'). La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C42-APP-014 - Verificar que sin aceptar los TyC el CTA de contratación sigue deshabilitado [App] [Logueado]

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
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardada la tarjeta 370000000002032

**Data utilizada**

v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.
6. El usuario deja el toggle de TyC desactivado.

**Resultado esperado**

El CTA "Comenzar mis 15 días gratis" permanece deshabilitado.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. Nota: en la web el banner de membresía del carro (punto de entrada 'Lo quiero'/'Renovar') no existe en DEV al 2026-10-14 (HU B2C-42 y tarea WEB B2C-409 'En curso'). La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C42-APP-015 - Verificar que con medio de pago y TyC aceptados se habilita Renovar mi membresía [App] [Logueado]

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
- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardada la tarjeta 370000000002032

**Data utilizada**

v1.0.7, iOS, contraseña de la cuenta, vhchirinos+segundo@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Renovar".
3. El usuario toca "Renovar".
4. El sistema muestra el modal "Renovar membresia".
5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.
6. El usuario activa el toggle "Acepto los términos y condiciones y las politicas de privacidad".

**Resultado esperado**

El CTA "Renovar mi membresía" se habilita.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_MEMBRESIA_EXPIRADA_USER} (vhchirinos+segundo@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. Nota: en la web el banner de membresía del carro (punto de entrada 'Lo quiero'/'Renovar') no existe en DEV al 2026-10-14 (HU B2C-42 y tarea WEB B2C-409 'En curso'). La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C42-APP-016 - Verificar que Comenzar mis 15 días gratis activa la membresía y muestra el onboarding [App] [Logueado]

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
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardada la tarjeta 370000000002032

**Data utilizada**

v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.
6. El usuario activa el toggle "Acepto los términos y condiciones y las politicas de privacidad".
7. El usuario toca "Comenzar mis 15 días gratis".
8. El sistema muestra un estado de carga en el CTA mientras procesa la contratación.

**Resultado esperado**

La membresía se activa de inmediato y se muestra el onboarding de membresía con la información de beneficios activados.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. Nota: en la web el banner de membresía del carro (punto de entrada 'Lo quiero'/'Renovar') no existe en DEV al 2026-10-14 (HU B2C-42 y tarea WEB B2C-409 'En curso'). La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C42-APP-017 - Verificar que al cerrar el onboarding el carro muestra precios de membresía [App] [Logueado]

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
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardada la tarjeta 370000000002032

**Data utilizada**

v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.
6. El usuario activa el toggle "Acepto los términos y condiciones y las politicas de privacidad".
7. El usuario toca "Comenzar mis 15 días gratis".
8. El sistema activa la membresía y muestra el onboarding.
9. El usuario cierra el onboarding.

**Resultado esperado**

El carro se actualiza y 000000000000662457-UN muestra el precio y descuento de membresía; el banner de oferta ya no se muestra.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. Nota: en la web el banner de membresía del carro (punto de entrada 'Lo quiero'/'Renovar') no existe en DEV al 2026-10-14 (HU B2C-42 y tarea WEB B2C-409 'En curso'). La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C42-APP-018 - Verificar que tras contratar la membresía llega el email de confirmación [App] [Logueado]

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
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardada la tarjeta 370000000002032
- Acceso a la casilla de correo de la cuenta

**Data utilizada**

v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.
6. El usuario activa el toggle "Acepto los términos y condiciones y las politicas de privacidad".
7. El usuario toca "Comenzar mis 15 días gratis".
8. El sistema activa la membresía.
9. El usuario revisa la casilla de correo de la cuenta.

**Resultado esperado**

El usuario recibe un email de confirmación de la contratación de la membresía.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. Nota: en la web el banner de membresía del carro (punto de entrada 'Lo quiero'/'Renovar') no existe en DEV al 2026-10-14 (HU B2C-42 y tarea WEB B2C-409 'En curso'). La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C42-APP-019 - Verificar que Renovar mi membresía cobra de inmediato y activa la membresía [App] [Logueado]

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
- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardada la tarjeta 370000000002032

**Data utilizada**

v1.0.7, iOS, contraseña de la cuenta, vhchirinos+segundo@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Renovar".
3. El usuario toca "Renovar".
4. El sistema muestra el modal "Renovar membresia".
5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.
6. El usuario activa el toggle "Acepto los términos y condiciones y las politicas de privacidad".
7. El usuario toca "Renovar mi membresía".
8. El sistema muestra un estado de carga en el CTA mientras procesa la renovación.
9. El usuario cierra el onboarding.

**Resultado esperado**

Se ejecuta el cobro inmediato, la membresía se activa, se muestra el onboarding y al cerrarlo el carro refleja los precios de membresía.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_MEMBRESIA_EXPIRADA_USER} (vhchirinos+segundo@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. Nota: en la web el banner de membresía del carro (punto de entrada 'Lo quiero'/'Renovar') no existe en DEV al 2026-10-14 (HU B2C-42 y tarea WEB B2C-409 'En curso'). La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C42-APP-020 - Verificar que un fallo en el cobro o activación no activa la membresía [App] [Logueado]

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
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardada la tarjeta 370000000002032
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {MEMBRESIA_API_ENDPOINT}

**Data utilizada**

v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, {HERRAMIENTA_PROXY_APP}, {MEMBRESIA_API_ENDPOINT}, 000000000000662457-UN, 370000000002032, 20000

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.
6. El usuario activa el toggle "Acepto los términos y condiciones y las politicas de privacidad".
7. El usuario toca "Comenzar mis 15 días gratis".
8. El sistema recibe error del servicio de membresía.
9. El usuario revisa el estado de su membresía en Mi Membresía.

**Resultado esperado**

La membresía no se activa y el carro mantiene los precios sin membresía.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. Además {HERRAMIENTA_PROXY_APP} y {MEMBRESIA_API_ENDPOINT} no tienen valor en el Excel de data. Nota: en la web el banner de membresía del carro (punto de entrada 'Lo quiero'/'Renovar') no existe en DEV al 2026-10-14 (HU B2C-42 y tarea WEB B2C-409 'En curso'). La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C42-APP-021 - Verificar que ante un fallo al contratar llega el email de notificación de fallo [App] [Logueado]

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
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardada la tarjeta 370000000002032
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {MEMBRESIA_API_ENDPOINT}
- Acceso a la casilla de correo de la cuenta

**Data utilizada**

v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, {HERRAMIENTA_PROXY_APP}, {MEMBRESIA_API_ENDPOINT}, 000000000000662457-UN, 370000000002032, 20000

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.
6. El usuario activa el toggle "Acepto los términos y condiciones y las politicas de privacidad".
7. El usuario toca "Comenzar mis 15 días gratis".
8. El sistema recibe error del servicio de membresía.
9. El usuario revisa la casilla de correo de la cuenta.

**Resultado esperado**

El usuario recibe un correo de notificación de fallo en la contratación de la membresía (RF-13).

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. Además {HERRAMIENTA_PROXY_APP} y {MEMBRESIA_API_ENDPOINT} no tienen valor en el Excel de data. Nota: en la web el banner de membresía del carro (punto de entrada 'Lo quiero'/'Renovar') no existe en DEV al 2026-10-14 (HU B2C-42 y tarea WEB B2C-409 'En curso'). La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C42-APP-022 - Verificar que sin ahorro de membresía suficiente no se muestra el banner [App] [Logueado]

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
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene solo 000000000000675191-UN (sin precio de membresía): el ahorro potencial es nulo o menor a 20000

**Data utilizada**

v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 000000000000675191-UN, 20000

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario revisa el carrito buscando el banner de oferta de membresía.

**Resultado esperado**

El banner de oferta de membresía no se muestra y no existe punto de entrada al modal de contratación.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. Nota: en la web el banner de membresía del carro (punto de entrada 'Lo quiero'/'Renovar') no existe en DEV al 2026-10-14 (HU B2C-42 y tarea WEB B2C-409 'En curso'). La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.

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
  "suite": "B2C-42 APP",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-42 APP Test Cases.xlsx",
  "title": "B2C-42 APP - Contratar o renovar la membresía desde el carro (Android) - Evidencias QA",
  "updated_at": "2026-10-16"
 },
 "history": {
  "2026-10-16": [
   "TC-B2C42-APP-001",
   "TC-B2C42-APP-002",
   "TC-B2C42-APP-003",
   "TC-B2C42-APP-004",
   "TC-B2C42-APP-005",
   "TC-B2C42-APP-006",
   "TC-B2C42-APP-007",
   "TC-B2C42-APP-008",
   "TC-B2C42-APP-009",
   "TC-B2C42-APP-010",
   "TC-B2C42-APP-011",
   "TC-B2C42-APP-012",
   "TC-B2C42-APP-013",
   "TC-B2C42-APP-014",
   "TC-B2C42-APP-015",
   "TC-B2C42-APP-016",
   "TC-B2C42-APP-017",
   "TC-B2C42-APP-018",
   "TC-B2C42-APP-019",
   "TC-B2C42-APP-020",
   "TC-B2C42-APP-021",
   "TC-B2C42-APP-022"
  ]
 },
 "results": [
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El modal muestra: título \"Pagar membresia\", botón X, selector de plan 3 meses / 6 meses, toggle de TyC desactivado, bloque de medio de pago con el texto \"El cobro único de [precio del plan] se realizará con el medio de pago seleccionado después de tu periodo de prueba\", sección de beneficios y el CTA con ícono diamante \"Comenzar mis 15 días gratis\" deshabilitado; si el contenido excede la pantalla, el modal hace scroll.",
   "form_factor": "app",
   "id": "TC-B2C42-APP-001",
   "name": "Verificar que Lo quiero abre el modal Pagar membresia con la oferta de prueba [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. Nota: en la web el banner de membresía del carro (punto de entrada 'Lo quiero'/'Renovar') no existe en DEV al 2026-10-14 (HU B2C-42 y tarea WEB B2C-409 'En curso'). La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario revisa el contenido del modal.",
   "test_data": "v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 20000"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El modal muestra: título \"Renovar membresia\", botón X, selector de plan 3 meses / 6 meses, toggle de TyC desactivado, bloque de medio de pago con el texto \"El cobro único de [precio del plan] se realizará de inmediato con el medio de pago seleccionado\", sección de beneficios y el CTA con ícono diamante \"Renovar mi membresía\" deshabilitado.",
   "form_factor": "app",
   "id": "TC-B2C42-APP-002",
   "name": "Verificar que Renovar abre el modal Renovar membresia con cobro inmediato [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_MEMBRESIA_EXPIRADA_USER} (vhchirinos+segundo@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. Nota: en la web el banner de membresía del carro (punto de entrada 'Lo quiero'/'Renovar') no existe en DEV al 2026-10-14 (HU B2C-42 y tarea WEB B2C-409 'En curso'). La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+segundo@avatar-global.com\n- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Renovar\".\n3. El usuario toca \"Renovar\".\n4. El sistema muestra el modal \"Renovar membresia\".\n5. El usuario revisa el contenido del modal.",
   "test_data": "v1.0.7, iOS, contraseña de la cuenta, vhchirinos+segundo@avatar-global.com, 000000000000662457-UN, 20000"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Cada plan muestra su ícono (3 meses / 6 meses), el texto \"15 días gratis\" y su precio.",
   "form_factor": "app",
   "id": "TC-B2C42-APP-003",
   "name": "Verificar que para un cliente Nuevo cada plan muestra ícono, 15 días gratis y precio [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. Nota: en la web el banner de membresía del carro (punto de entrada 'Lo quiero'/'Renovar') no existe en DEV al 2026-10-14 (HU B2C-42 y tarea WEB B2C-409 'En curso'). La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario revisa las opciones de plan 3 meses y 6 meses.",
   "test_data": "v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 20000"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Cada plan muestra su ícono y su precio, sin el texto \"15 días gratis\".",
   "form_factor": "app",
   "id": "TC-B2C42-APP-004",
   "name": "Verificar que para un cliente Expirado los planes no muestran 15 días gratis [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_MEMBRESIA_EXPIRADA_USER} (vhchirinos+segundo@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. Nota: en la web el banner de membresía del carro (punto de entrada 'Lo quiero'/'Renovar') no existe en DEV al 2026-10-14 (HU B2C-42 y tarea WEB B2C-409 'En curso'). La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+segundo@avatar-global.com\n- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Renovar\".\n3. El usuario toca \"Renovar\".\n4. El sistema muestra el modal \"Renovar membresia\".\n5. El usuario revisa las opciones de plan 3 meses y 6 meses.",
   "test_data": "v1.0.7, iOS, contraseña de la cuenta, vhchirinos+segundo@avatar-global.com, 000000000000662457-UN, 20000"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El plan 3 meses queda seleccionado y el resumen del modal muestra $14.990.",
   "form_factor": "app",
   "id": "TC-B2C42-APP-005",
   "name": "Verificar que seleccionar el plan de 3 meses actualiza el precio a $14.990 [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. Nota: en la web el banner de membresía del carro (punto de entrada 'Lo quiero'/'Renovar') no existe en DEV al 2026-10-14 (HU B2C-42 y tarea WEB B2C-409 'En curso'). La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona el plan 3 meses.",
   "test_data": "v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 20000"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El plan 6 meses queda seleccionado y el resumen del modal muestra $24.990.",
   "form_factor": "app",
   "id": "TC-B2C42-APP-006",
   "name": "Verificar que seleccionar el plan de 6 meses actualiza el precio a $24.990 [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. Nota: en la web el banner de membresía del carro (punto de entrada 'Lo quiero'/'Renovar') no existe en DEV al 2026-10-14 (HU B2C-42 y tarea WEB B2C-409 'En curso'). La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona el plan 6 meses.",
   "test_data": "v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 20000"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El bloque de pago muestra \"Nuevo medio de pago\" con el CTA \"Agregar\" y ninguna tarjeta.",
   "form_factor": "app",
   "id": "TC-B2C42-APP-007",
   "name": "Verificar que sin tarjetas guardadas el bloque de pago muestra Nuevo medio de pago y Agregar [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. Nota: en la web el banner de membresía del carro (punto de entrada 'Lo quiero'/'Renovar') no existe en DEV al 2026-10-14 (HU B2C-42 y tarea WEB B2C-409 'En curso'). La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta no tiene tarjetas guardadas",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario revisa el bloque de medio de pago.",
   "test_data": "v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 20000"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El bloque de pago muestra el logo de la tarjeta con sus 4 últimos dígitos y \"Nuevo medio de pago\" con el CTA \"Agregar\".",
   "form_factor": "app",
   "id": "TC-B2C42-APP-008",
   "name": "Verificar que con tarjeta guardada el bloque de pago muestra logo, últimos 4 dígitos y Agregar [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. Nota: en la web el banner de membresía del carro (punto de entrada 'Lo quiero'/'Renovar') no existe en DEV al 2026-10-14 (HU B2C-42 y tarea WEB B2C-409 'En curso'). La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardada la tarjeta 370000000002032",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario revisa el bloque de medio de pago.",
   "test_data": "v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "La tarjeta 370000000002032 queda seleccionada como medio de pago asociado al plan de membresía.",
   "form_factor": "app",
   "id": "TC-B2C42-APP-009",
   "name": "Verificar que seleccionar una tarjeta guardada la asocia al plan de membresía [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. Nota: en la web el banner de membresía del carro (punto de entrada 'Lo quiero'/'Renovar') no existe en DEV al 2026-10-14 (HU B2C-42 y tarea WEB B2C-409 'En curso'). La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardada la tarjeta 370000000002032",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.",
   "test_data": "v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "La tarjeta 370000000002032 queda guardada en la cuenta y disponible para compras ecommerce.",
   "form_factor": "app",
   "id": "TC-B2C42-APP-010",
   "name": "Verificar que agregar una tarjeta nueva la guarda en la cuenta [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. Nota: en la web el banner de membresía del carro (punto de entrada 'Lo quiero'/'Renovar') no existe en DEV al 2026-10-14 (HU B2C-42 y tarea WEB B2C-409 'En curso'). La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta no tiene guardada la tarjeta 370000000002032",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario toca \"Agregar\" en \"Nuevo medio de pago\" e ingresa los datos de 370000000002032.\n6. El sistema tokeniza la tarjeta y la muestra en el bloque de medio de pago.\n7. El usuario revisa los medios de pago guardados en Mi cuenta de la App.",
   "test_data": "v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/account, 000000000000662457-UN, 370000000002032, 20000"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "4051884239937763 queda seleccionada como medio asociado al plan y 370000000002032 deja de estar seleccionada.",
   "form_factor": "app",
   "id": "TC-B2C42-APP-011",
   "name": "Verificar que cambiar el medio de pago reemplaza el asociado al plan [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. Nota: en la web el banner de membresía del carro (punto de entrada 'Lo quiero'/'Renovar') no existe en DEV al 2026-10-14 (HU B2C-42 y tarea WEB B2C-409 'En curso'). La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardadas las tarjetas 370000000002032 y 4051884239937763",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.\n6. El usuario selecciona la tarjeta guardada 4051884239937763.",
   "test_data": "v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 4051884239937763, 20000"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El toggle de Términos y Condiciones queda marcado como aceptado.",
   "form_factor": "app",
   "id": "TC-B2C42-APP-012",
   "name": "Verificar que activar el toggle de TyC lo deja marcado como aceptado [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. Nota: en la web el banner de membresía del carro (punto de entrada 'Lo quiero'/'Renovar') no existe en DEV al 2026-10-14 (HU B2C-42 y tarea WEB B2C-409 'En curso'). La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".",
   "test_data": "v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 20000"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El CTA \"Comenzar mis 15 días gratis\" se habilita.",
   "form_factor": "app",
   "id": "TC-B2C42-APP-013",
   "name": "Verificar que con medio de pago y TyC aceptados se habilita Comenzar mis 15 días gratis [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. Nota: en la web el banner de membresía del carro (punto de entrada 'Lo quiero'/'Renovar') no existe en DEV al 2026-10-14 (HU B2C-42 y tarea WEB B2C-409 'En curso'). La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardada la tarjeta 370000000002032",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".",
   "test_data": "v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El CTA \"Comenzar mis 15 días gratis\" permanece deshabilitado.",
   "form_factor": "app",
   "id": "TC-B2C42-APP-014",
   "name": "Verificar que sin aceptar los TyC el CTA de contratación sigue deshabilitado [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. Nota: en la web el banner de membresía del carro (punto de entrada 'Lo quiero'/'Renovar') no existe en DEV al 2026-10-14 (HU B2C-42 y tarea WEB B2C-409 'En curso'). La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardada la tarjeta 370000000002032",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.\n6. El usuario deja el toggle de TyC desactivado.",
   "test_data": "v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El CTA \"Renovar mi membresía\" se habilita.",
   "form_factor": "app",
   "id": "TC-B2C42-APP-015",
   "name": "Verificar que con medio de pago y TyC aceptados se habilita Renovar mi membresía [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_MEMBRESIA_EXPIRADA_USER} (vhchirinos+segundo@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. Nota: en la web el banner de membresía del carro (punto de entrada 'Lo quiero'/'Renovar') no existe en DEV al 2026-10-14 (HU B2C-42 y tarea WEB B2C-409 'En curso'). La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+segundo@avatar-global.com\n- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardada la tarjeta 370000000002032",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Renovar\".\n3. El usuario toca \"Renovar\".\n4. El sistema muestra el modal \"Renovar membresia\".\n5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".",
   "test_data": "v1.0.7, iOS, contraseña de la cuenta, vhchirinos+segundo@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "La membresía se activa de inmediato y se muestra el onboarding de membresía con la información de beneficios activados.",
   "form_factor": "app",
   "id": "TC-B2C42-APP-016",
   "name": "Verificar que Comenzar mis 15 días gratis activa la membresía y muestra el onboarding [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. Nota: en la web el banner de membresía del carro (punto de entrada 'Lo quiero'/'Renovar') no existe en DEV al 2026-10-14 (HU B2C-42 y tarea WEB B2C-409 'En curso'). La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardada la tarjeta 370000000002032",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".\n7. El usuario toca \"Comenzar mis 15 días gratis\".\n8. El sistema muestra un estado de carga en el CTA mientras procesa la contratación.",
   "test_data": "v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El carro se actualiza y 000000000000662457-UN muestra el precio y descuento de membresía; el banner de oferta ya no se muestra.",
   "form_factor": "app",
   "id": "TC-B2C42-APP-017",
   "name": "Verificar que al cerrar el onboarding el carro muestra precios de membresía [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. Nota: en la web el banner de membresía del carro (punto de entrada 'Lo quiero'/'Renovar') no existe en DEV al 2026-10-14 (HU B2C-42 y tarea WEB B2C-409 'En curso'). La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardada la tarjeta 370000000002032",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".\n7. El usuario toca \"Comenzar mis 15 días gratis\".\n8. El sistema activa la membresía y muestra el onboarding.\n9. El usuario cierra el onboarding.",
   "test_data": "v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El usuario recibe un email de confirmación de la contratación de la membresía.",
   "form_factor": "app",
   "id": "TC-B2C42-APP-018",
   "name": "Verificar que tras contratar la membresía llega el email de confirmación [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. Nota: en la web el banner de membresía del carro (punto de entrada 'Lo quiero'/'Renovar') no existe en DEV al 2026-10-14 (HU B2C-42 y tarea WEB B2C-409 'En curso'). La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardada la tarjeta 370000000002032\n- Acceso a la casilla de correo de la cuenta",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".\n7. El usuario toca \"Comenzar mis 15 días gratis\".\n8. El sistema activa la membresía.\n9. El usuario revisa la casilla de correo de la cuenta.",
   "test_data": "v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Se ejecuta el cobro inmediato, la membresía se activa, se muestra el onboarding y al cerrarlo el carro refleja los precios de membresía.",
   "form_factor": "app",
   "id": "TC-B2C42-APP-019",
   "name": "Verificar que Renovar mi membresía cobra de inmediato y activa la membresía [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_MEMBRESIA_EXPIRADA_USER} (vhchirinos+segundo@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. Nota: en la web el banner de membresía del carro (punto de entrada 'Lo quiero'/'Renovar') no existe en DEV al 2026-10-14 (HU B2C-42 y tarea WEB B2C-409 'En curso'). La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+segundo@avatar-global.com\n- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardada la tarjeta 370000000002032",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Renovar\".\n3. El usuario toca \"Renovar\".\n4. El sistema muestra el modal \"Renovar membresia\".\n5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".\n7. El usuario toca \"Renovar mi membresía\".\n8. El sistema muestra un estado de carga en el CTA mientras procesa la renovación.\n9. El usuario cierra el onboarding.",
   "test_data": "v1.0.7, iOS, contraseña de la cuenta, vhchirinos+segundo@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "La membresía no se activa y el carro mantiene los precios sin membresía.",
   "form_factor": "app",
   "id": "TC-B2C42-APP-020",
   "name": "Verificar que un fallo en el cobro o activación no activa la membresía [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. Además {HERRAMIENTA_PROXY_APP} y {MEMBRESIA_API_ENDPOINT} no tienen valor en el Excel de data. Nota: en la web el banner de membresía del carro (punto de entrada 'Lo quiero'/'Renovar') no existe en DEV al 2026-10-14 (HU B2C-42 y tarea WEB B2C-409 'En curso'). La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardada la tarjeta 370000000002032\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {MEMBRESIA_API_ENDPOINT}",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".\n7. El usuario toca \"Comenzar mis 15 días gratis\".\n8. El sistema recibe error del servicio de membresía.\n9. El usuario revisa el estado de su membresía en Mi Membresía.",
   "test_data": "v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, {HERRAMIENTA_PROXY_APP}, {MEMBRESIA_API_ENDPOINT}, 000000000000662457-UN, 370000000002032, 20000"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El usuario recibe un correo de notificación de fallo en la contratación de la membresía (RF-13).",
   "form_factor": "app",
   "id": "TC-B2C42-APP-021",
   "name": "Verificar que ante un fallo al contratar llega el email de notificación de fallo [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. Además {HERRAMIENTA_PROXY_APP} y {MEMBRESIA_API_ENDPOINT} no tienen valor en el Excel de data. Nota: en la web el banner de membresía del carro (punto de entrada 'Lo quiero'/'Renovar') no existe en DEV al 2026-10-14 (HU B2C-42 y tarea WEB B2C-409 'En curso'). La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardada la tarjeta 370000000002032\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {MEMBRESIA_API_ENDPOINT}\n- Acceso a la casilla de correo de la cuenta",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".\n7. El usuario toca \"Comenzar mis 15 días gratis\".\n8. El sistema recibe error del servicio de membresía.\n9. El usuario revisa la casilla de correo de la cuenta.",
   "test_data": "v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, {HERRAMIENTA_PROXY_APP}, {MEMBRESIA_API_ENDPOINT}, 000000000000662457-UN, 370000000002032, 20000"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El banner de oferta de membresía no se muestra y no existe punto de entrada al modal de contratación.",
   "form_factor": "app",
   "id": "TC-B2C42-APP-022",
   "name": "Verificar que sin ahorro de membresía suficiente no se muestra el banner [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña (verificado en esta app el 2026-10-14 y el 2026-10-16). Acción: declarar una cuenta con RUT con la condición del caso o liberar un build con login por correo. Nota: en la web el banner de membresía del carro (punto de entrada 'Lo quiero'/'Renovar') no existe en DEV al 2026-10-14 (HU B2C-42 y tarea WEB B2C-409 'En curso'). La fila no declara 'Plataforma:'; se evaluó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene solo 000000000000675191-UN (sin precio de membresía): el ahorro potencial es nulo o menor a 20000",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario revisa el carrito buscando el banner de oferta de membresía.",
   "test_data": "v1.0.7, iOS, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, 000000000000675191-UN, 20000"
  }
 ]
}
-->
