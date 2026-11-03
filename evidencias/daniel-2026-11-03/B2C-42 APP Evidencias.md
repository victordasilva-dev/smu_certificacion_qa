# Membresía desde el carro en la app (Android)

| Campo | Valor |
|---|---|
| Suite | B2C-42 APP |
| Última actualización | 2026-10-26 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | App Unimarc v1.0.1 (DEV) |
| Dispositivo Android | Pixel 6 · Android 14 (emulador) |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-42 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 13 |
| Bloqueado | 8 |
| Aprobado | 1 |
| Rechazado | 1 |
| **Total** | **23** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-26 | 23 | TC-B2C42-APP-001, TC-B2C42-APP-002, TC-B2C42-APP-003, TC-B2C42-APP-004, TC-B2C42-APP-005, TC-B2C42-APP-006, TC-B2C42-APP-007, TC-B2C42-APP-008, TC-B2C42-APP-009, TC-B2C42-APP-010, TC-B2C42-APP-011, TC-B2C42-APP-012, TC-B2C42-APP-013, TC-B2C42-APP-014, TC-B2C42-APP-015, TC-B2C42-APP-016, TC-B2C42-APP-017, TC-B2C42-APP-018, TC-B2C42-APP-019, TC-B2C42-APP-020, TC-B2C42-APP-021, TC-B2C42-APP-022, TC-B2C42-APP-023 |

## Detalle por caso de prueba

### TC-B2C42-APP-001 - Verificar que Lo quiero abre el modal Pagar membresia con la oferta de prueba

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | tests-app/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000662457-UN = 000000000000662457-UN
- 20000 = TBD
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario revisa el contenido del modal.

**Resultado esperado**

El modal muestra: título "Pagar membresia", botón X, selector de plan 3 meses / 6 meses, toggle de TyC desactivado, bloque de medio de pago con el texto "El cobro único de [precio del plan] se realizará con el medio de pago seleccionado después de tu periodo de prueba", sección de beneficios y el CTA con ícono diamante "Comenzar mis 15 días gratis" deshabilitado; si el contenido excede la pantalla, el modal hace scroll.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Esperado: el modal muestra título 'Pagar membresia', selector de plan 3 / 6 meses y el texto 'El cobro único de [precio del plan] se realizará…'. Obtenido: el modal se titula 'Socio Diamante · Prueba gratuita', no tiene selector de planes (muestra 'En este momento no hay planes disponibles para contratar. Por favor, intenta nuevamente más tarde.') ni el texto de cobro; sí muestra cierre, beneficios, tarjeta guardada, checkbox de TyC desmarcado y el CTA deshabilitado. Bug: B2C-1362.

**Evidencia**

![Android · Paso 2 — carro con el banner de membresia](<B2C-42 APP Evidencias/TC-B2C42-APP-001-android-p02-carro-con-el-banner-de-membresia.png>)

![Android · Paso 4 — modal de contratacion](<B2C-42 APP Evidencias/TC-B2C42-APP-001-android-p04-modal-de-contratacion.png>)

---

### TC-B2C42-APP-002 - Verificar que Renovar abre el modal Renovar membresia con cobro inmediato

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | tests-app/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+segundo@avatar-global.com
- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000662457-UN = 000000000000662457-UN
- 20000 = TBD
- daunuruco+segundo@avatar-global.com = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Renovar".
3. El usuario toca "Renovar".
4. El sistema muestra el modal "Renovar membresia".
5. El usuario revisa el contenido del modal.

**Resultado esperado**

El modal muestra: título "Renovar membresia", botón X, selector de plan 3 meses / 6 meses, toggle de TyC desactivado, bloque de medio de pago con el texto "El cobro único de [precio del plan] se realizará de inmediato con el medio de pago seleccionado", sección de beneficios y el CTA con ícono diamante "Renovar mi membresía" deshabilitado.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no figura como expirada en el ambiente: tras iniciar sesión con ella (saludo distinto al de la cuenta nueva) el banner del carro ofrece 'Ahorra $993 siendo Diamante · Prueba y disfruta 15 días gratis · Lo quiero' (oferta de cliente nuevo) en vez de 'Renovar'. Acción: cargar una cuenta con membresía vencida.

**Evidencia**

![Android · Paso 2 — carro con el banner de renovacion](<B2C-42 APP Evidencias/TC-B2C42-APP-002-android-p02-carro-con-el-banner-de-renovacion.png>)

![Android · Estado final](<B2C-42 APP Evidencias/TC-B2C42-APP-002-android.png>)

---

### TC-B2C42-APP-003 - Verificar que para un cliente Nuevo cada plan muestra ícono, 15 días gratis y precio

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | tests-app/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000662457-UN = 000000000000662457-UN
- 20000 = TBD
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario revisa las opciones de plan 3 meses y 6 meses.

**Resultado esperado**

Cada plan muestra su ícono (3 meses / 6 meses), el texto "15 días gratis" y su precio.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: el ambiente no devuelve planes de membresía: el modal de contratación muestra 'En este momento no hay planes disponibles para contratar. Por favor, intenta nuevamente más tarde.' y el CTA 'Comenzar mis 15 días gratis' queda deshabilitado. No hay planes de 3 ni de 6 meses cuyo ícono, '15 días gratis' y precio revisar. Acción: configurar los planes de membresía en el ambiente y re-ejecutar.

**Evidencia**

![Android · Paso 4 — modal de contratacion](<B2C-42 APP Evidencias/TC-B2C42-APP-003-android-p04-modal-de-contratacion.png>)

---

### TC-B2C42-APP-004 - Verificar que para un cliente Expirado los planes no muestran 15 días gratis

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | tests-app/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+segundo@avatar-global.com
- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000662457-UN = 000000000000662457-UN
- 20000 = TBD
- daunuruco+segundo@avatar-global.com = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Renovar".
3. El usuario toca "Renovar".
4. El sistema muestra el modal "Renovar membresia".
5. El usuario revisa las opciones de plan 3 meses y 6 meses.

**Resultado esperado**

Cada plan muestra su ícono y su precio, sin el texto "15 días gratis".

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no figura como expirada en el ambiente: tras iniciar sesión con ella (saludo distinto al de la cuenta nueva) el banner del carro ofrece 'Ahorra $993 siendo Diamante · Prueba y disfruta 15 días gratis · Lo quiero' (oferta de cliente nuevo) en vez de 'Renovar'. Acción: cargar una cuenta con membresía vencida.

**Evidencia**

![Android · Estado final](<B2C-42 APP Evidencias/TC-B2C42-APP-004-android.png>)

---

### TC-B2C42-APP-005 - Verificar que seleccionar el plan de 3 meses actualiza el precio a $14.990

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | tests-app/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000662457-UN = 000000000000662457-UN
- 20000 = TBD
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona el plan 3 meses.

**Resultado esperado**

El plan 3 meses queda seleccionado y el resumen del modal muestra $14.990.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: el ambiente no devuelve planes de membresía: el modal de contratación muestra 'En este momento no hay planes disponibles para contratar. Por favor, intenta nuevamente más tarde.' y el CTA 'Comenzar mis 15 días gratis' queda deshabilitado. No hay plan de 3 meses que seleccionar ni resumen con $14.990. Acción: configurar los planes de membresía en el ambiente y re-ejecutar.

**Evidencia**

![Android · Paso 4 — modal de contratacion](<B2C-42 APP Evidencias/TC-B2C42-APP-005-android-p04-modal-de-contratacion.png>)

---

### TC-B2C42-APP-006 - Verificar que seleccionar el plan de 6 meses actualiza el precio a $24.990

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | tests-app/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000662457-UN = 000000000000662457-UN
- 20000 = TBD
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona el plan 6 meses.

**Resultado esperado**

El plan 6 meses queda seleccionado y el resumen del modal muestra $24.990.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: el ambiente no devuelve planes de membresía: el modal de contratación muestra 'En este momento no hay planes disponibles para contratar. Por favor, intenta nuevamente más tarde.' y el CTA 'Comenzar mis 15 días gratis' queda deshabilitado. No hay plan de 6 meses que seleccionar ni resumen con $24.990. Acción: configurar los planes de membresía en el ambiente y re-ejecutar.

**Evidencia**

![Android · Paso 4 — modal de contratacion](<B2C-42 APP Evidencias/TC-B2C42-APP-006-android-p04-modal-de-contratacion.png>)

---

### TC-B2C42-APP-007 - Verificar que sin tarjetas guardadas el bloque de pago muestra Nuevo medio de pago y Agregar

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta no tiene tarjetas guardadas

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000662457-UN = 000000000000662457-UN
- 20000 = TBD
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario revisa el bloque de medio de pago.

**Resultado esperado**

El bloque de pago muestra "Nuevo medio de pago" con el CTA "Agregar" y ninguna tarjeta.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: el caso requiere una cuenta sin tarjetas guardadas y {COMPRADOR_SIN_MEMBRESIA_USER} tiene dos (****6623 y Mastercard ****1122, visibles en 'Mis tarjetas'). Acción: declarar una cuenta sin tarjetas.

---

### TC-B2C42-APP-008 - Verificar que con tarjeta guardada el bloque de pago muestra logo, últimos 4 dígitos y Agregar

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardada la tarjeta 370000000002032

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000662457-UN = 000000000000662457-UN
- 20000 = TBD
- 370000000002032 = TBD
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario revisa el bloque de medio de pago.

**Resultado esperado**

El bloque de pago muestra el logo de la tarjeta con sus 4 últimos dígitos y "Nuevo medio de pago" con el CTA "Agregar".

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: la fila declara {TARJETA_CREDITO_001} como tarjeta guardada de la cuenta, pero la cuenta tiene guardadas BANCO DE CHILE Crédito ****6623 (la seleccionada; el modal la dibuja con logo VISA) y Mastercard ****1122; ninguna es la declarada ({TARJETA_CREDITO_001} termina en 2032); además el alta de tarjetas no está disponible en el ambiente ('No pudimos abrir el registro de tu tarjeta. Inténtalo nuevamente.'), así que la declarada no se puede guardar. Acción: guardar {TARJETA_CREDITO_001} en la cuenta o declarar una de las tarjetas que ya tiene.

**Evidencia**

![Android · Paso 4 — modal con la tarjeta guardada](<B2C-42 APP Evidencias/TC-B2C42-APP-008-android-p04-modal-con-la-tarjeta-guardada.png>)

---

### TC-B2C42-APP-009 - Verificar que seleccionar una tarjeta guardada la asocia al plan de membresía

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardada la tarjeta 370000000002032

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000662457-UN = 000000000000662457-UN
- 20000 = TBD
- 370000000002032 = TBD
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.

**Resultado esperado**

La tarjeta 370000000002032 queda seleccionada como medio de pago asociado al plan de membresía.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: la fila declara {TARJETA_CREDITO_001} como tarjeta guardada de la cuenta, pero la cuenta tiene guardadas BANCO DE CHILE Crédito ****6623 (la seleccionada; el modal la dibuja con logo VISA) y Mastercard ****1122; ninguna es la declarada ({TARJETA_CREDITO_001} termina en 2032); además el alta de tarjetas no está disponible en el ambiente ('No pudimos abrir el registro de tu tarjeta. Inténtalo nuevamente.'), así que la declarada no se puede guardar. Acción: guardar {TARJETA_CREDITO_001} en la cuenta o declarar una de las tarjetas que ya tiene.

---

### TC-B2C42-APP-010 - Verificar que agregar una tarjeta nueva la guarda en la cuenta

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta no tiene guardada la tarjeta 370000000002032

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/account = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/account
- 000000000000662457-UN = 000000000000662457-UN
- 20000 = TBD
- 370000000002032 = TBD
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario toca "Agregar" en "Nuevo medio de pago" e ingresa los datos de 370000000002032.
6. El sistema tokeniza la tarjeta y la muestra en el bloque de medio de pago.
7. El usuario revisa los medios de pago guardados en Mi cuenta de la App.

**Resultado esperado**

La tarjeta 370000000002032 queda guardada en la cuenta y disponible para compras ecommerce.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: en 'Mis tarjetas' (se llega con 'Cambiar' en el modal) al tocar '+ Agregar tarjeta' la app muestra 'No pudimos abrir el registro de tu tarjeta. Inténtalo nuevamente.' y no abre el formulario, así que no se puede agregar {TARJETA_CREDITO_001}. La fila además declara solo el número de la tarjeta (sin vencimiento ni CVV). No se modificó la cuenta. Capturas tomadas en una exploración del flujo. Acción: revisar el servicio de registro de tarjetas del ambiente y declarar vencimiento y CVV de la tarjeta de prueba.

**Evidencia**

![Android · Paso 5 — mis tarjetas del modal](<B2C-42 APP Evidencias/TC-B2C42-APP-010-android-p05-mis-tarjetas-del-modal.png>)

![Android · Paso 6 — registro de tarjeta no abre](<B2C-42 APP Evidencias/TC-B2C42-APP-010-android-p06-registro-de-tarjeta-no-abre.png>)

---

### TC-B2C42-APP-011 - Verificar que cambiar el medio de pago reemplaza el asociado al plan

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardadas las tarjetas 370000000002032 y 4051884239937763

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000662457-UN = 000000000000662457-UN
- 20000 = TBD
- 370000000002032 = TBD
- 4051884239937763 = TBD
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.
6. El usuario selecciona la tarjeta guardada 4051884239937763.

**Resultado esperado**

4051884239937763 queda seleccionada como medio asociado al plan y 370000000002032 deja de estar seleccionada.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: el caso requiere tener guardadas {TARJETA_CREDITO_001} y {TARJETA_CREDITO_002}; la cuenta tiene guardadas BANCO DE CHILE Crédito ****6623 (la seleccionada; el modal la dibuja con logo VISA) y Mastercard ****1122; ninguna es una de las declaradas, y el alta de tarjetas no está disponible en el ambiente ('No pudimos abrir el registro de tu tarjeta. Inténtalo nuevamente.'), así que la declarada no se puede guardar. Capturas tomadas en una exploración del flujo. Acción: guardar ambas tarjetas declaradas en la cuenta.

**Evidencia**

![Android · Paso 5 — tarjetas guardadas de la cuenta](<B2C-42 APP Evidencias/TC-B2C42-APP-011-android-p05-tarjetas-guardadas-de-la-cuenta.png>)

---

### TC-B2C42-APP-012 - Verificar que activar el toggle de TyC lo deja marcado como aceptado

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | tests-app/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000662457-UN = 000000000000662457-UN
- 20000 = TBD
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario activa el toggle "Acepto los términos y condiciones y las politicas de privacidad".

**Resultado esperado**

El toggle de Términos y Condiciones queda marcado como aceptado.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): el checkbox de términos y condiciones pasa de desmarcado a marcado al tocarlo. Nota: el control es un checkbox y el modal se titula 'Socio Diamante · Prueba gratuita' (el TC dice toggle y 'Pagar membresia').

**Evidencia**

![Android · Paso 4 — tyc sin aceptar](<B2C-42 APP Evidencias/TC-B2C42-APP-012-android-p04-tyc-sin-aceptar.png>)

![Android · Paso 6 — tyc aceptados](<B2C-42 APP Evidencias/TC-B2C42-APP-012-android-p06-tyc-aceptados.png>)

![Android · Estado final](<B2C-42 APP Evidencias/TC-B2C42-APP-012-android.png>)

---

### TC-B2C42-APP-013 - Verificar que con medio de pago y TyC aceptados se habilita Comenzar mis 15 días gratis

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardada la tarjeta 370000000002032

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000662457-UN = 000000000000662457-UN
- 20000 = TBD
- 370000000002032 = TBD
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.
6. El usuario activa el toggle "Acepto los términos y condiciones y las politicas de privacidad".

**Resultado esperado**

El CTA "Comenzar mis 15 días gratis" se habilita.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: la fila declara {TARJETA_CREDITO_001} como tarjeta guardada de la cuenta, pero la cuenta tiene guardadas BANCO DE CHILE Crédito ****6623 (la seleccionada; el modal la dibuja con logo VISA) y Mastercard ****1122; ninguna es la declarada ({TARJETA_CREDITO_001} termina en 2032); además el alta de tarjetas no está disponible en el ambiente ('No pudimos abrir el registro de tu tarjeta. Inténtalo nuevamente.'), así que la declarada no se puede guardar. Acción: guardar {TARJETA_CREDITO_001} en la cuenta o declarar una de las tarjetas que ya tiene.

---

### TC-B2C42-APP-014 - Verificar que sin aceptar los TyC el CTA de contratación sigue deshabilitado

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardada la tarjeta 370000000002032

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000662457-UN = 000000000000662457-UN
- 20000 = TBD
- 370000000002032 = TBD
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.
6. El usuario deja el toggle de TyC desactivado.

**Resultado esperado**

El CTA "Comenzar mis 15 días gratis" permanece deshabilitado.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: la fila declara {TARJETA_CREDITO_001} como tarjeta guardada de la cuenta, pero la cuenta tiene guardadas BANCO DE CHILE Crédito ****6623 (la seleccionada; el modal la dibuja con logo VISA) y Mastercard ****1122; ninguna es la declarada ({TARJETA_CREDITO_001} termina en 2032); además el alta de tarjetas no está disponible en el ambiente ('No pudimos abrir el registro de tu tarjeta. Inténtalo nuevamente.'), así que la declarada no se puede guardar. Acción: guardar {TARJETA_CREDITO_001} en la cuenta o declarar una de las tarjetas que ya tiene.

---

### TC-B2C42-APP-015 - Verificar que con medio de pago y TyC aceptados se habilita Renovar mi membresía

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+segundo@avatar-global.com
- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardada la tarjeta 370000000002032

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000662457-UN = 000000000000662457-UN
- 20000 = TBD
- 370000000002032 = TBD
- daunuruco+segundo@avatar-global.com = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Renovar".
3. El usuario toca "Renovar".
4. El sistema muestra el modal "Renovar membresia".
5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.
6. El usuario activa el toggle "Acepto los términos y condiciones y las politicas de privacidad".

**Resultado esperado**

El CTA "Renovar mi membresía" se habilita.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: la fila declara {TARJETA_CREDITO_001} como tarjeta guardada y el alta de tarjetas no está disponible en el ambiente ('No pudimos abrir el registro de tu tarjeta. Inténtalo nuevamente.'), así que la declarada no se puede guardar. Además {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no figura como expirada (ver TC-B2C42-APP-002). Acción: cuenta expirada con la tarjeta declarada guardada.

---

### TC-B2C42-APP-016 - Verificar que Comenzar mis 15 días gratis activa la membresía y muestra el onboarding

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardada la tarjeta 370000000002032

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000662457-UN = 000000000000662457-UN
- 20000 = TBD
- 370000000002032 = TBD
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
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

Causa: contratar la membresía con 'Comenzar mis 15 días gratis' exige elegir un plan y el ambiente no devuelve planes: el CTA del modal permanece deshabilitado (observado en TC-B2C42-APP-001). El caso no se ejecutó para no forzar una contratación. Acción: configurar los planes de membresía en el ambiente y re-ejecutar.

---

### TC-B2C42-APP-017 - Verificar que al cerrar el onboarding el carro muestra precios de membresía

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardada la tarjeta 370000000002032

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000662457-UN = 000000000000662457-UN
- 20000 = TBD
- 370000000002032 = TBD
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
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

Causa: cerrar el onboarding de la contratación exige elegir un plan y el ambiente no devuelve planes: el CTA del modal permanece deshabilitado (observado en TC-B2C42-APP-001). El caso no se ejecutó para no forzar una contratación. Acción: configurar los planes de membresía en el ambiente y re-ejecutar.

---

### TC-B2C42-APP-018 - Verificar que tras contratar la membresía llega el email de confirmación

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardada la tarjeta 370000000002032
- Acceso a la casilla de correo de la cuenta

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000662457-UN = 000000000000662457-UN
- 20000 = TBD
- 370000000002032 = TBD
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
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

Causa: recibir el correo de confirmación de la contratación exige elegir un plan y el ambiente no devuelve planes: el CTA del modal permanece deshabilitado (observado en TC-B2C42-APP-001). El caso no se ejecutó para no forzar una contratación. Acción: configurar los planes de membresía en el ambiente y re-ejecutar.

---

### TC-B2C42-APP-019 - Verificar que Renovar mi membresía cobra de inmediato y activa la membresía

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+segundo@avatar-global.com
- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardada la tarjeta 370000000002032

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000662457-UN = 000000000000662457-UN
- 20000 = TBD
- 370000000002032 = TBD
- daunuruco+segundo@avatar-global.com = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
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

Causa: renovar la membresía con 'Renovar mi membresía' exige elegir un plan y el ambiente no devuelve planes: el CTA del modal permanece deshabilitado (observado en TC-B2C42-APP-001). El caso no se ejecutó para no forzar una contratación. Acción: configurar los planes de membresía en el ambiente y re-ejecutar.

---

### TC-B2C42-APP-020 - Verificar que un fallo en el cobro o activación no activa la membresía

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardada la tarjeta 370000000002032
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {MEMBRESIA_API_ENDPOINT}

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- {MEMBRESIA_API_ENDPOINT} = TBD
- 000000000000662457-UN = 000000000000662457-UN
- 20000 = TBD
- 370000000002032 = TBD
- {HERRAMIENTA_PROXY_APP} = TBD
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
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

Causa: {HERRAMIENTA_PROXY_APP} y {MEMBRESIA_API_ENDPOINT} no tienen valor en el Excel de data: el caso exige inducir un error de API y no hay herramienta ni alternativa disponible. Acción: cargar ambos valores y avisar para re-ejecutar.

---

### TC-B2C42-APP-021 - Verificar que ante un fallo al contratar llega el email de notificación de fallo

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardada la tarjeta 370000000002032
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {MEMBRESIA_API_ENDPOINT}
- Acceso a la casilla de correo de la cuenta

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- {MEMBRESIA_API_ENDPOINT} = TBD
- 000000000000662457-UN = 000000000000662457-UN
- 20000 = TBD
- 370000000002032 = TBD
- {HERRAMIENTA_PROXY_APP} = TBD
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
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

Causa: {HERRAMIENTA_PROXY_APP} y {MEMBRESIA_API_ENDPOINT} no tienen valor en el Excel de data: el caso exige inducir un error de API y no hay herramienta ni alternativa disponible. Acción: cargar ambos valores y avisar para re-ejecutar.

---

### TC-B2C42-APP-022 - Verificar que sin ahorro de membresía suficiente no se muestra el banner

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | tests-app/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene solo 000000000000675191-UN (sin precio de membresía): el ahorro potencial es nulo o menor a 20000

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000675191-UN = 000000000000675191-UN
- 20000 = TBD
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario revisa el carrito buscando el banner de oferta de membresía.

**Resultado esperado**

El banner de oferta de membresía no se muestra y no existe punto de entrada al modal de contratación.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura como 'Pronto disponible' con botón 'Ver similares' (sin stock): no se puede agregar al carro y el caso exige un carro solo con ese producto. Acción: reponer su stock o declarar un SKU con stock y sin precio de membresía.

**Evidencia**

![Android · Estado final](<B2C-42 APP Evidencias/TC-B2C42-APP-022-android.png>)

---

### TC-B2C42-APP-023 - Verificar que los planes y el CTA muestran los días de prueba configurados y no un valor fijo de 15

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- La duración del periodo de prueba configurada para membresía es {DIAS_PRUEBA_MEMBRESIA} días (valor distinto de 15)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000

**Data utilizada**

- v1.0.1
- 000000000000662457-UN
- 20000
- {DIAS_PRUEBA_MEMBRESIA}
- daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario revisa el texto de días gratis de los planes 3 meses y 6 meses y el label del CTA.

**Resultado esperado**

Cada plan muestra "{DIAS_PRUEBA_MEMBRESIA} días gratis" y el CTA muestra "Comenzar mis {DIAS_PRUEBA_MEMBRESIA} días gratis"; ningún texto del modal muestra un valor fijo de 15 días.

**Resultado obtenido**

Causa: {DIAS_PRUEBA_MEMBRESIA} no tiene valor en el Excel de data. Acción: cargar los días de prueba configurados y avisar para re-ejecutar el caso.

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
  "suite": "B2C-42 APP",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-42 APP Test Cases.xlsx",
  "title": "Membresía desde el carro en la app (Android)",
  "updated_at": "2026-10-26"
 },
 "history": {
  "2026-10-26": [
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
   "TC-B2C42-APP-022",
   "TC-B2C42-APP-023"
  ]
 },
 "results": [
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El modal muestra: título \"Pagar membresia\", botón X, selector de plan 3 meses / 6 meses, toggle de TyC desactivado, bloque de medio de pago con el texto \"El cobro único de [precio del plan] se realizará con el medio de pago seleccionado después de tu periodo de prueba\", sección de beneficios y el CTA con ícono diamante \"Comenzar mis 15 días gratis\" deshabilitado; si el contenido excede la pantalla, el modal hace scroll.",
   "form_factor": "app",
   "id": "TC-B2C42-APP-001",
   "name": "Verificar que Lo quiero abre el modal Pagar membresia con la oferta de prueba",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Esperado: el modal muestra título 'Pagar membresia', selector de plan 3 / 6 meses y el texto 'El cobro único de [precio del plan] se realizará…'. Obtenido: el modal se titula 'Socio Diamante · Prueba gratuita', no tiene selector de planes (muestra 'En este momento no hay planes disponibles para contratar. Por favor, intenta nuevamente más tarde.') ni el texto de cobro; sí muestra cierre, beneficios, tarjeta guardada, checkbox de TyC desmarcado y el CTA deshabilitado. Bug: B2C-1362.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — carro con el banner de membresia",
     "file": "TC-B2C42-APP-001-android-p02-carro-con-el-banner-de-membresia.png"
    },
    {
     "caption": "Android · Paso 4 — modal de contratacion",
     "file": "TC-B2C42-APP-001-android-p04-modal-de-contratacion.png"
    }
   ],
   "spec": "tests-app/B2C-42.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario revisa el contenido del modal.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000662457-UN = 000000000000662457-UN\n- 20000 = TBD\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El modal muestra: título \"Renovar membresia\", botón X, selector de plan 3 meses / 6 meses, toggle de TyC desactivado, bloque de medio de pago con el texto \"El cobro único de [precio del plan] se realizará de inmediato con el medio de pago seleccionado\", sección de beneficios y el CTA con ícono diamante \"Renovar mi membresía\" deshabilitado.",
   "form_factor": "app",
   "id": "TC-B2C42-APP-002",
   "name": "Verificar que Renovar abre el modal Renovar membresia con cobro inmediato",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no figura como expirada en el ambiente: tras iniciar sesión con ella (saludo distinto al de la cuenta nueva) el banner del carro ofrece 'Ahorra $993 siendo Diamante · Prueba y disfruta 15 días gratis · Lo quiero' (oferta de cliente nuevo) en vez de 'Renovar'. Acción: cargar una cuenta con membresía vencida.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+segundo@avatar-global.com\n- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — carro con el banner de renovacion",
     "file": "TC-B2C42-APP-002-android-p02-carro-con-el-banner-de-renovacion.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C42-APP-002-android.png"
    }
   ],
   "spec": "tests-app/B2C-42.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Renovar\".\n3. El usuario toca \"Renovar\".\n4. El sistema muestra el modal \"Renovar membresia\".\n5. El usuario revisa el contenido del modal.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000662457-UN = 000000000000662457-UN\n- 20000 = TBD\n- daunuruco+segundo@avatar-global.com = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Cada plan muestra su ícono (3 meses / 6 meses), el texto \"15 días gratis\" y su precio.",
   "form_factor": "app",
   "id": "TC-B2C42-APP-003",
   "name": "Verificar que para un cliente Nuevo cada plan muestra ícono, 15 días gratis y precio",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: el ambiente no devuelve planes de membresía: el modal de contratación muestra 'En este momento no hay planes disponibles para contratar. Por favor, intenta nuevamente más tarde.' y el CTA 'Comenzar mis 15 días gratis' queda deshabilitado. No hay planes de 3 ni de 6 meses cuyo ícono, '15 días gratis' y precio revisar. Acción: configurar los planes de membresía en el ambiente y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000",
   "screenshots": [
    {
     "caption": "Android · Paso 4 — modal de contratacion",
     "file": "TC-B2C42-APP-003-android-p04-modal-de-contratacion.png"
    }
   ],
   "spec": "tests-app/B2C-42.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario revisa las opciones de plan 3 meses y 6 meses.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000662457-UN = 000000000000662457-UN\n- 20000 = TBD\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Cada plan muestra su ícono y su precio, sin el texto \"15 días gratis\".",
   "form_factor": "app",
   "id": "TC-B2C42-APP-004",
   "name": "Verificar que para un cliente Expirado los planes no muestran 15 días gratis",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no figura como expirada en el ambiente: tras iniciar sesión con ella (saludo distinto al de la cuenta nueva) el banner del carro ofrece 'Ahorra $993 siendo Diamante · Prueba y disfruta 15 días gratis · Lo quiero' (oferta de cliente nuevo) en vez de 'Renovar'. Acción: cargar una cuenta con membresía vencida.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+segundo@avatar-global.com\n- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000",
   "screenshots": [
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C42-APP-004-android.png"
    }
   ],
   "spec": "tests-app/B2C-42.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Renovar\".\n3. El usuario toca \"Renovar\".\n4. El sistema muestra el modal \"Renovar membresia\".\n5. El usuario revisa las opciones de plan 3 meses y 6 meses.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000662457-UN = 000000000000662457-UN\n- 20000 = TBD\n- daunuruco+segundo@avatar-global.com = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El plan 3 meses queda seleccionado y el resumen del modal muestra $14.990.",
   "form_factor": "app",
   "id": "TC-B2C42-APP-005",
   "name": "Verificar que seleccionar el plan de 3 meses actualiza el precio a $14.990",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: el ambiente no devuelve planes de membresía: el modal de contratación muestra 'En este momento no hay planes disponibles para contratar. Por favor, intenta nuevamente más tarde.' y el CTA 'Comenzar mis 15 días gratis' queda deshabilitado. No hay plan de 3 meses que seleccionar ni resumen con $14.990. Acción: configurar los planes de membresía en el ambiente y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000",
   "screenshots": [
    {
     "caption": "Android · Paso 4 — modal de contratacion",
     "file": "TC-B2C42-APP-005-android-p04-modal-de-contratacion.png"
    }
   ],
   "spec": "tests-app/B2C-42.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona el plan 3 meses.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000662457-UN = 000000000000662457-UN\n- 20000 = TBD\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El plan 6 meses queda seleccionado y el resumen del modal muestra $24.990.",
   "form_factor": "app",
   "id": "TC-B2C42-APP-006",
   "name": "Verificar que seleccionar el plan de 6 meses actualiza el precio a $24.990",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: el ambiente no devuelve planes de membresía: el modal de contratación muestra 'En este momento no hay planes disponibles para contratar. Por favor, intenta nuevamente más tarde.' y el CTA 'Comenzar mis 15 días gratis' queda deshabilitado. No hay plan de 6 meses que seleccionar ni resumen con $24.990. Acción: configurar los planes de membresía en el ambiente y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000",
   "screenshots": [
    {
     "caption": "Android · Paso 4 — modal de contratacion",
     "file": "TC-B2C42-APP-006-android-p04-modal-de-contratacion.png"
    }
   ],
   "spec": "tests-app/B2C-42.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona el plan 6 meses.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000662457-UN = 000000000000662457-UN\n- 20000 = TBD\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El bloque de pago muestra \"Nuevo medio de pago\" con el CTA \"Agregar\" y ninguna tarjeta.",
   "form_factor": "app",
   "id": "TC-B2C42-APP-007",
   "name": "Verificar que sin tarjetas guardadas el bloque de pago muestra Nuevo medio de pago y Agregar",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: el caso requiere una cuenta sin tarjetas guardadas y {COMPRADOR_SIN_MEMBRESIA_USER} tiene dos (****6623 y Mastercard ****1122, visibles en 'Mis tarjetas'). Acción: declarar una cuenta sin tarjetas.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta no tiene tarjetas guardadas",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario revisa el bloque de medio de pago.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000662457-UN = 000000000000662457-UN\n- 20000 = TBD\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El bloque de pago muestra el logo de la tarjeta con sus 4 últimos dígitos y \"Nuevo medio de pago\" con el CTA \"Agregar\".",
   "form_factor": "app",
   "id": "TC-B2C42-APP-008",
   "name": "Verificar que con tarjeta guardada el bloque de pago muestra logo, últimos 4 dígitos y Agregar",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: la fila declara {TARJETA_CREDITO_001} como tarjeta guardada de la cuenta, pero la cuenta tiene guardadas BANCO DE CHILE Crédito ****6623 (la seleccionada; el modal la dibuja con logo VISA) y Mastercard ****1122; ninguna es la declarada ({TARJETA_CREDITO_001} termina en 2032); además el alta de tarjetas no está disponible en el ambiente ('No pudimos abrir el registro de tu tarjeta. Inténtalo nuevamente.'), así que la declarada no se puede guardar. Acción: guardar {TARJETA_CREDITO_001} en la cuenta o declarar una de las tarjetas que ya tiene.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardada la tarjeta 370000000002032",
   "screenshots": [
    {
     "caption": "Android · Paso 4 — modal con la tarjeta guardada",
     "file": "TC-B2C42-APP-008-android-p04-modal-con-la-tarjeta-guardada.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario revisa el bloque de medio de pago.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000662457-UN = 000000000000662457-UN\n- 20000 = TBD\n- 370000000002032 = TBD\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "La tarjeta 370000000002032 queda seleccionada como medio de pago asociado al plan de membresía.",
   "form_factor": "app",
   "id": "TC-B2C42-APP-009",
   "name": "Verificar que seleccionar una tarjeta guardada la asocia al plan de membresía",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: la fila declara {TARJETA_CREDITO_001} como tarjeta guardada de la cuenta, pero la cuenta tiene guardadas BANCO DE CHILE Crédito ****6623 (la seleccionada; el modal la dibuja con logo VISA) y Mastercard ****1122; ninguna es la declarada ({TARJETA_CREDITO_001} termina en 2032); además el alta de tarjetas no está disponible en el ambiente ('No pudimos abrir el registro de tu tarjeta. Inténtalo nuevamente.'), así que la declarada no se puede guardar. Acción: guardar {TARJETA_CREDITO_001} en la cuenta o declarar una de las tarjetas que ya tiene.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardada la tarjeta 370000000002032",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000662457-UN = 000000000000662457-UN\n- 20000 = TBD\n- 370000000002032 = TBD\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "La tarjeta 370000000002032 queda guardada en la cuenta y disponible para compras ecommerce.",
   "form_factor": "app",
   "id": "TC-B2C42-APP-010",
   "name": "Verificar que agregar una tarjeta nueva la guarda en la cuenta",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: en 'Mis tarjetas' (se llega con 'Cambiar' en el modal) al tocar '+ Agregar tarjeta' la app muestra 'No pudimos abrir el registro de tu tarjeta. Inténtalo nuevamente.' y no abre el formulario, así que no se puede agregar {TARJETA_CREDITO_001}. La fila además declara solo el número de la tarjeta (sin vencimiento ni CVV). No se modificó la cuenta. Capturas tomadas en una exploración del flujo. Acción: revisar el servicio de registro de tarjetas del ambiente y declarar vencimiento y CVV de la tarjeta de prueba.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta no tiene guardada la tarjeta 370000000002032",
   "screenshots": [
    {
     "caption": "Android · Paso 5 — mis tarjetas del modal",
     "file": "TC-B2C42-APP-010-android-p05-mis-tarjetas-del-modal.png"
    },
    {
     "caption": "Android · Paso 6 — registro de tarjeta no abre",
     "file": "TC-B2C42-APP-010-android-p06-registro-de-tarjeta-no-abre.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario toca \"Agregar\" en \"Nuevo medio de pago\" e ingresa los datos de 370000000002032.\n6. El sistema tokeniza la tarjeta y la muestra en el bloque de medio de pago.\n7. El usuario revisa los medios de pago guardados en Mi cuenta de la App.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/account = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/account\n- 000000000000662457-UN = 000000000000662457-UN\n- 20000 = TBD\n- 370000000002032 = TBD\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "4051884239937763 queda seleccionada como medio asociado al plan y 370000000002032 deja de estar seleccionada.",
   "form_factor": "app",
   "id": "TC-B2C42-APP-011",
   "name": "Verificar que cambiar el medio de pago reemplaza el asociado al plan",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: el caso requiere tener guardadas {TARJETA_CREDITO_001} y {TARJETA_CREDITO_002}; la cuenta tiene guardadas BANCO DE CHILE Crédito ****6623 (la seleccionada; el modal la dibuja con logo VISA) y Mastercard ****1122; ninguna es una de las declaradas, y el alta de tarjetas no está disponible en el ambiente ('No pudimos abrir el registro de tu tarjeta. Inténtalo nuevamente.'), así que la declarada no se puede guardar. Capturas tomadas en una exploración del flujo. Acción: guardar ambas tarjetas declaradas en la cuenta.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardadas las tarjetas 370000000002032 y 4051884239937763",
   "screenshots": [
    {
     "caption": "Android · Paso 5 — tarjetas guardadas de la cuenta",
     "file": "TC-B2C42-APP-011-android-p05-tarjetas-guardadas-de-la-cuenta.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.\n6. El usuario selecciona la tarjeta guardada 4051884239937763.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000662457-UN = 000000000000662457-UN\n- 20000 = TBD\n- 370000000002032 = TBD\n- 4051884239937763 = TBD\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El toggle de Términos y Condiciones queda marcado como aceptado.",
   "form_factor": "app",
   "id": "TC-B2C42-APP-012",
   "name": "Verificar que activar el toggle de TyC lo deja marcado como aceptado",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): el checkbox de términos y condiciones pasa de desmarcado a marcado al tocarlo. Nota: el control es un checkbox y el modal se titula 'Socio Diamante · Prueba gratuita' (el TC dice toggle y 'Pagar membresia').",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000",
   "screenshots": [
    {
     "caption": "Android · Paso 4 — tyc sin aceptar",
     "file": "TC-B2C42-APP-012-android-p04-tyc-sin-aceptar.png"
    },
    {
     "caption": "Android · Paso 6 — tyc aceptados",
     "file": "TC-B2C42-APP-012-android-p06-tyc-aceptados.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C42-APP-012-android.png"
    }
   ],
   "spec": "tests-app/B2C-42.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000662457-UN = 000000000000662457-UN\n- 20000 = TBD\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El CTA \"Comenzar mis 15 días gratis\" se habilita.",
   "form_factor": "app",
   "id": "TC-B2C42-APP-013",
   "name": "Verificar que con medio de pago y TyC aceptados se habilita Comenzar mis 15 días gratis",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: la fila declara {TARJETA_CREDITO_001} como tarjeta guardada de la cuenta, pero la cuenta tiene guardadas BANCO DE CHILE Crédito ****6623 (la seleccionada; el modal la dibuja con logo VISA) y Mastercard ****1122; ninguna es la declarada ({TARJETA_CREDITO_001} termina en 2032); además el alta de tarjetas no está disponible en el ambiente ('No pudimos abrir el registro de tu tarjeta. Inténtalo nuevamente.'), así que la declarada no se puede guardar. Acción: guardar {TARJETA_CREDITO_001} en la cuenta o declarar una de las tarjetas que ya tiene.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardada la tarjeta 370000000002032",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000662457-UN = 000000000000662457-UN\n- 20000 = TBD\n- 370000000002032 = TBD\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El CTA \"Comenzar mis 15 días gratis\" permanece deshabilitado.",
   "form_factor": "app",
   "id": "TC-B2C42-APP-014",
   "name": "Verificar que sin aceptar los TyC el CTA de contratación sigue deshabilitado",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: la fila declara {TARJETA_CREDITO_001} como tarjeta guardada de la cuenta, pero la cuenta tiene guardadas BANCO DE CHILE Crédito ****6623 (la seleccionada; el modal la dibuja con logo VISA) y Mastercard ****1122; ninguna es la declarada ({TARJETA_CREDITO_001} termina en 2032); además el alta de tarjetas no está disponible en el ambiente ('No pudimos abrir el registro de tu tarjeta. Inténtalo nuevamente.'), así que la declarada no se puede guardar. Acción: guardar {TARJETA_CREDITO_001} en la cuenta o declarar una de las tarjetas que ya tiene.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardada la tarjeta 370000000002032",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.\n6. El usuario deja el toggle de TyC desactivado.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000662457-UN = 000000000000662457-UN\n- 20000 = TBD\n- 370000000002032 = TBD\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El CTA \"Renovar mi membresía\" se habilita.",
   "form_factor": "app",
   "id": "TC-B2C42-APP-015",
   "name": "Verificar que con medio de pago y TyC aceptados se habilita Renovar mi membresía",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: la fila declara {TARJETA_CREDITO_001} como tarjeta guardada y el alta de tarjetas no está disponible en el ambiente ('No pudimos abrir el registro de tu tarjeta. Inténtalo nuevamente.'), así que la declarada no se puede guardar. Además {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no figura como expirada (ver TC-B2C42-APP-002). Acción: cuenta expirada con la tarjeta declarada guardada.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+segundo@avatar-global.com\n- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardada la tarjeta 370000000002032",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Renovar\".\n3. El usuario toca \"Renovar\".\n4. El sistema muestra el modal \"Renovar membresia\".\n5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000662457-UN = 000000000000662457-UN\n- 20000 = TBD\n- 370000000002032 = TBD\n- daunuruco+segundo@avatar-global.com = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "La membresía se activa de inmediato y se muestra el onboarding de membresía con la información de beneficios activados.",
   "form_factor": "app",
   "id": "TC-B2C42-APP-016",
   "name": "Verificar que Comenzar mis 15 días gratis activa la membresía y muestra el onboarding",
   "observed": "Causa: contratar la membresía con 'Comenzar mis 15 días gratis' exige elegir un plan y el ambiente no devuelve planes: el CTA del modal permanece deshabilitado (observado en TC-B2C42-APP-001). El caso no se ejecutó para no forzar una contratación. Acción: configurar los planes de membresía en el ambiente y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardada la tarjeta 370000000002032",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".\n7. El usuario toca \"Comenzar mis 15 días gratis\".\n8. El sistema muestra un estado de carga en el CTA mientras procesa la contratación.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000662457-UN = 000000000000662457-UN\n- 20000 = TBD\n- 370000000002032 = TBD\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El carro se actualiza y 000000000000662457-UN muestra el precio y descuento de membresía; el banner de oferta ya no se muestra.",
   "form_factor": "app",
   "id": "TC-B2C42-APP-017",
   "name": "Verificar que al cerrar el onboarding el carro muestra precios de membresía",
   "observed": "Causa: cerrar el onboarding de la contratación exige elegir un plan y el ambiente no devuelve planes: el CTA del modal permanece deshabilitado (observado en TC-B2C42-APP-001). El caso no se ejecutó para no forzar una contratación. Acción: configurar los planes de membresía en el ambiente y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardada la tarjeta 370000000002032",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".\n7. El usuario toca \"Comenzar mis 15 días gratis\".\n8. El sistema activa la membresía y muestra el onboarding.\n9. El usuario cierra el onboarding.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000662457-UN = 000000000000662457-UN\n- 20000 = TBD\n- 370000000002032 = TBD\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El usuario recibe un email de confirmación de la contratación de la membresía.",
   "form_factor": "app",
   "id": "TC-B2C42-APP-018",
   "name": "Verificar que tras contratar la membresía llega el email de confirmación",
   "observed": "Causa: recibir el correo de confirmación de la contratación exige elegir un plan y el ambiente no devuelve planes: el CTA del modal permanece deshabilitado (observado en TC-B2C42-APP-001). El caso no se ejecutó para no forzar una contratación. Acción: configurar los planes de membresía en el ambiente y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardada la tarjeta 370000000002032\n- Acceso a la casilla de correo de la cuenta",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".\n7. El usuario toca \"Comenzar mis 15 días gratis\".\n8. El sistema activa la membresía.\n9. El usuario revisa la casilla de correo de la cuenta.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000662457-UN = 000000000000662457-UN\n- 20000 = TBD\n- 370000000002032 = TBD\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se ejecuta el cobro inmediato, la membresía se activa, se muestra el onboarding y al cerrarlo el carro refleja los precios de membresía.",
   "form_factor": "app",
   "id": "TC-B2C42-APP-019",
   "name": "Verificar que Renovar mi membresía cobra de inmediato y activa la membresía",
   "observed": "Causa: renovar la membresía con 'Renovar mi membresía' exige elegir un plan y el ambiente no devuelve planes: el CTA del modal permanece deshabilitado (observado en TC-B2C42-APP-001). El caso no se ejecutó para no forzar una contratación. Acción: configurar los planes de membresía en el ambiente y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+segundo@avatar-global.com\n- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardada la tarjeta 370000000002032",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Renovar\".\n3. El usuario toca \"Renovar\".\n4. El sistema muestra el modal \"Renovar membresia\".\n5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".\n7. El usuario toca \"Renovar mi membresía\".\n8. El sistema muestra un estado de carga en el CTA mientras procesa la renovación.\n9. El usuario cierra el onboarding.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000662457-UN = 000000000000662457-UN\n- 20000 = TBD\n- 370000000002032 = TBD\n- daunuruco+segundo@avatar-global.com = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "La membresía no se activa y el carro mantiene los precios sin membresía.",
   "form_factor": "app",
   "id": "TC-B2C42-APP-020",
   "name": "Verificar que un fallo en el cobro o activación no activa la membresía",
   "observed": "Causa: {HERRAMIENTA_PROXY_APP} y {MEMBRESIA_API_ENDPOINT} no tienen valor en el Excel de data: el caso exige inducir un error de API y no hay herramienta ni alternativa disponible. Acción: cargar ambos valores y avisar para re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardada la tarjeta 370000000002032\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {MEMBRESIA_API_ENDPOINT}",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".\n7. El usuario toca \"Comenzar mis 15 días gratis\".\n8. El sistema recibe error del servicio de membresía.\n9. El usuario revisa el estado de su membresía en Mi Membresía.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- {MEMBRESIA_API_ENDPOINT} = TBD\n- 000000000000662457-UN = 000000000000662457-UN\n- 20000 = TBD\n- 370000000002032 = TBD\n- {HERRAMIENTA_PROXY_APP} = TBD\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El usuario recibe un correo de notificación de fallo en la contratación de la membresía (RF-13).",
   "form_factor": "app",
   "id": "TC-B2C42-APP-021",
   "name": "Verificar que ante un fallo al contratar llega el email de notificación de fallo",
   "observed": "Causa: {HERRAMIENTA_PROXY_APP} y {MEMBRESIA_API_ENDPOINT} no tienen valor en el Excel de data: el caso exige inducir un error de API y no hay herramienta ni alternativa disponible. Acción: cargar ambos valores y avisar para re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardada la tarjeta 370000000002032\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {MEMBRESIA_API_ENDPOINT}\n- Acceso a la casilla de correo de la cuenta",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".\n7. El usuario toca \"Comenzar mis 15 días gratis\".\n8. El sistema recibe error del servicio de membresía.\n9. El usuario revisa la casilla de correo de la cuenta.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- {MEMBRESIA_API_ENDPOINT} = TBD\n- 000000000000662457-UN = 000000000000662457-UN\n- 20000 = TBD\n- 370000000002032 = TBD\n- {HERRAMIENTA_PROXY_APP} = TBD\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El banner de oferta de membresía no se muestra y no existe punto de entrada al modal de contratación.",
   "form_factor": "app",
   "id": "TC-B2C42-APP-022",
   "name": "Verificar que sin ahorro de membresía suficiente no se muestra el banner",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura como 'Pronto disponible' con botón 'Ver similares' (sin stock): no se puede agregar al carro y el caso exige un carro solo con ese producto. Acción: reponer su stock o declarar un SKU con stock y sin precio de membresía.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene solo 000000000000675191-UN (sin precio de membresía): el ahorro potencial es nulo o menor a 20000",
   "screenshots": [
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C42-APP-022-android.png"
    }
   ],
   "spec": "tests-app/B2C-42.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario revisa el carrito buscando el banner de oferta de membresía.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000675191-UN = 000000000000675191-UN\n- 20000 = TBD\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Cada plan muestra \"{DIAS_PRUEBA_MEMBRESIA} días gratis\" y el CTA muestra \"Comenzar mis {DIAS_PRUEBA_MEMBRESIA} días gratis\"; ningún texto del modal muestra un valor fijo de 15 días.",
   "form_factor": "app",
   "id": "TC-B2C42-APP-023",
   "name": "Verificar que los planes y el CTA muestran los días de prueba configurados y no un valor fijo de 15",
   "observed": "Causa: {DIAS_PRUEBA_MEMBRESIA} no tiene valor en el Excel de data. Acción: cargar los días de prueba configurados y avisar para re-ejecutar el caso.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- La duración del periodo de prueba configurada para membresía es {DIAS_PRUEBA_MEMBRESIA} días (valor distinto de 15)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario revisa el texto de días gratis de los planes 3 meses y 6 meses y el label del CTA.",
   "test_data": "- v1.0.1\n- 000000000000662457-UN\n- 20000\n- {DIAS_PRUEBA_MEMBRESIA}\n- daunuruco+comprador@avatar-global.com"
  }
 ]
}
-->
