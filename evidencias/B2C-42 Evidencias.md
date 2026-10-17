# B2C-42 - Contratar o renovar membresía desde el carro - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-42 |
| Última actualización | 2026-10-14 |
| Ejecutado por | Victor Chirinos |
| Ambiente | Storefront DEV (smu-dev-development) |
| Origen de los TC | Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-42 Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado | 44 |
| **Total** | **44** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-14 | 44 | TC-B2C42-D-001, TC-B2C42-D-002, TC-B2C42-D-003, TC-B2C42-D-004, TC-B2C42-D-005, TC-B2C42-D-006, TC-B2C42-D-007, TC-B2C42-D-008, TC-B2C42-D-009, TC-B2C42-D-010, TC-B2C42-D-011, TC-B2C42-D-012, TC-B2C42-D-013, TC-B2C42-D-014, TC-B2C42-D-015, TC-B2C42-D-016, TC-B2C42-D-017, TC-B2C42-D-018, TC-B2C42-D-019, TC-B2C42-D-020, TC-B2C42-D-021, TC-B2C42-D-022, TC-B2C42-M-001, TC-B2C42-M-002, TC-B2C42-M-003, TC-B2C42-M-004, TC-B2C42-M-005, TC-B2C42-M-006, TC-B2C42-M-007, TC-B2C42-M-008, TC-B2C42-M-009, TC-B2C42-M-010, TC-B2C42-M-011, TC-B2C42-M-012, TC-B2C42-M-013, TC-B2C42-M-014, TC-B2C42-M-015, TC-B2C42-M-016, TC-B2C42-M-017, TC-B2C42-M-018, TC-B2C42-M-019, TC-B2C42-M-020, TC-B2C42-M-021, TC-B2C42-M-022 |

## Detalle por caso de prueba

### TC-B2C42-D-001 - Verificar que Lo quiero abre el modal Pagar membresia con la oferta de prueba [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 20000

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario hace clic en "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario revisa el contenido del modal.

**Resultado esperado**

El modal muestra: título "Pagar membresia", botón X, selector de plan 3 meses / 6 meses, toggle de TyC desactivado, bloque de medio de pago con el texto "El cobro único de [precio del plan] se realizará con el medio de pago seleccionado después de tu periodo de prueba", sección de beneficios y el CTA con ícono diamante "Comenzar mis 15 días gratis" deshabilitado; si el contenido excede la pantalla, el modal hace scroll.

**Observación**

Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.

**Evidencia**

![Carro con 21 x 000000000000662457-UN: sin banner de membresía](<B2C-42 Evidencias/b2c42-carro-sin-banner-membresia-1440.png>)

---

### TC-B2C42-D-002 - Verificar que Renovar abre el modal Renovar membresia con cobro inmediato [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+segundo@avatar-global.com
- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_MEMBRESIA_EXPIRADA_PASSWORD}, vhchirinos+segundo@avatar-global.com, 000000000000662457-UN, 20000

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Renovar".
3. El usuario hace clic en "Renovar".
4. El sistema muestra el modal "Renovar membresia".
5. El usuario revisa el contenido del modal.

**Resultado esperado**

El modal muestra: título "Renovar membresia", botón X, selector de plan 3 meses / 6 meses, toggle de TyC desactivado, bloque de medio de pago con el texto "El cobro único de [precio del plan] se realizará de inmediato con el medio de pago seleccionado", sección de beneficios y el CTA con ícono diamante "Renovar mi membresía" deshabilitado.

**Observación**

Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.

---

### TC-B2C42-D-003 - Verificar que para un cliente Nuevo cada plan muestra ícono, 15 días gratis y precio [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 20000

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario hace clic en "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario revisa las opciones de plan 3 meses y 6 meses.

**Resultado esperado**

Cada plan muestra su ícono (3 meses / 6 meses), el texto "15 días gratis" y su precio.

**Observación**

Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.

---

### TC-B2C42-D-004 - Verificar que para un cliente Expirado los planes no muestran 15 días gratis [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+segundo@avatar-global.com
- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_MEMBRESIA_EXPIRADA_PASSWORD}, vhchirinos+segundo@avatar-global.com, 000000000000662457-UN, 20000

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Renovar".
3. El usuario hace clic en "Renovar".
4. El sistema muestra el modal "Renovar membresia".
5. El usuario revisa las opciones de plan 3 meses y 6 meses.

**Resultado esperado**

Cada plan muestra su ícono y su precio, sin el texto "15 días gratis".

**Observación**

Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.

---

### TC-B2C42-D-005 - Verificar que seleccionar el plan de 3 meses actualiza el precio a $14.990 [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 20000

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario hace clic en "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona el plan 3 meses.

**Resultado esperado**

El plan 3 meses queda seleccionado y el resumen del modal muestra $14.990.

**Observación**

Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.

---

### TC-B2C42-D-006 - Verificar que seleccionar el plan de 6 meses actualiza el precio a $24.990 [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 20000

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario hace clic en "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona el plan 6 meses.

**Resultado esperado**

El plan 6 meses queda seleccionado y el resumen del modal muestra $24.990.

**Observación**

Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.

---

### TC-B2C42-D-007 - Verificar que sin tarjetas guardadas el bloque de pago muestra Nuevo medio de pago y Agregar [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta no tiene tarjetas guardadas

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 20000

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario hace clic en "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario revisa el bloque de medio de pago.

**Resultado esperado**

El bloque de pago muestra "Nuevo medio de pago" con el CTA "Agregar" y ninguna tarjeta.

**Observación**

Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.

---

### TC-B2C42-D-008 - Verificar que con tarjeta guardada el bloque de pago muestra logo, últimos 4 dígitos y Agregar [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardada la tarjeta 370000000002032

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario hace clic en "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario revisa el bloque de medio de pago.

**Resultado esperado**

El bloque de pago muestra el logo de la tarjeta con sus 4 últimos dígitos y "Nuevo medio de pago" con el CTA "Agregar".

**Observación**

Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.

---

### TC-B2C42-D-009 - Verificar que seleccionar una tarjeta guardada la asocia al plan de membresía [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardada la tarjeta 370000000002032

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario hace clic en "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.

**Resultado esperado**

La tarjeta 370000000002032 queda seleccionada como medio de pago asociado al plan de membresía.

**Observación**

Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.

---

### TC-B2C42-D-010 - Verificar que agregar una tarjeta nueva la guarda en la cuenta [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta no tiene guardada la tarjeta 370000000002032

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/account, 000000000000662457-UN, 370000000002032, 20000

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario hace clic en "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario hace clic en "Agregar" en "Nuevo medio de pago" e ingresa los datos de 370000000002032.
6. El sistema tokeniza la tarjeta y la muestra en el bloque de medio de pago.
7. El usuario revisa los medios de pago guardados en Mi cuenta (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/account).

**Resultado esperado**

La tarjeta 370000000002032 queda guardada en la cuenta y disponible para compras ecommerce.

**Observación**

Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.

---

### TC-B2C42-D-011 - Verificar que cambiar el medio de pago reemplaza el asociado al plan [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardadas las tarjetas 370000000002032 y 4051884239937763

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 4051884239937763, 20000

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario hace clic en "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.
6. El usuario selecciona la tarjeta guardada 4051884239937763.

**Resultado esperado**

4051884239937763 queda seleccionada como medio asociado al plan y 370000000002032 deja de estar seleccionada.

**Observación**

Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.

---

### TC-B2C42-D-012 - Verificar que activar el toggle de TyC lo deja marcado como aceptado [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 20000

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario hace clic en "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario activa el toggle "Acepto los términos y condiciones y las politicas de privacidad".

**Resultado esperado**

El toggle de Términos y Condiciones queda marcado como aceptado.

**Observación**

Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.

---

### TC-B2C42-D-013 - Verificar que con medio de pago y TyC aceptados se habilita Comenzar mis 15 días gratis [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardada la tarjeta 370000000002032

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario hace clic en "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.
6. El usuario activa el toggle "Acepto los términos y condiciones y las politicas de privacidad".

**Resultado esperado**

El CTA "Comenzar mis 15 días gratis" se habilita.

**Observación**

Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.

---

### TC-B2C42-D-014 - Verificar que sin aceptar los TyC el CTA de contratación sigue deshabilitado [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardada la tarjeta 370000000002032

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario hace clic en "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.
6. El usuario deja el toggle de TyC desactivado.

**Resultado esperado**

El CTA "Comenzar mis 15 días gratis" permanece deshabilitado.

**Observación**

Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.

---

### TC-B2C42-D-015 - Verificar que con medio de pago y TyC aceptados se habilita Renovar mi membresía [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+segundo@avatar-global.com
- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardada la tarjeta 370000000002032

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_MEMBRESIA_EXPIRADA_PASSWORD}, vhchirinos+segundo@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Renovar".
3. El usuario hace clic en "Renovar".
4. El sistema muestra el modal "Renovar membresia".
5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.
6. El usuario activa el toggle "Acepto los términos y condiciones y las politicas de privacidad".

**Resultado esperado**

El CTA "Renovar mi membresía" se habilita.

**Observación**

Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.

---

### TC-B2C42-D-016 - Verificar que Comenzar mis 15 días gratis activa la membresía y muestra el onboarding [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardada la tarjeta 370000000002032

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario hace clic en "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.
6. El usuario activa el toggle "Acepto los términos y condiciones y las politicas de privacidad".
7. El usuario hace clic en "Comenzar mis 15 días gratis".
8. El sistema muestra un estado de carga en el CTA mientras procesa la contratación.

**Resultado esperado**

La membresía se activa de inmediato y se muestra el onboarding de membresía con la información de beneficios activados.

**Observación**

Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.

---

### TC-B2C42-D-017 - Verificar que al cerrar el onboarding el carro muestra precios de membresía [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardada la tarjeta 370000000002032

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario hace clic en "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.
6. El usuario activa el toggle "Acepto los términos y condiciones y las politicas de privacidad".
7. El usuario hace clic en "Comenzar mis 15 días gratis".
8. El sistema activa la membresía y muestra el onboarding.
9. El usuario cierra el onboarding.

**Resultado esperado**

El carro se actualiza y 000000000000662457-UN muestra el precio y descuento de membresía; el banner de oferta ya no se muestra.

**Observación**

Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.

---

### TC-B2C42-D-018 - Verificar que tras contratar la membresía llega el email de confirmación [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardada la tarjeta 370000000002032
- Acceso a la casilla de correo de la cuenta

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario hace clic en "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.
6. El usuario activa el toggle "Acepto los términos y condiciones y las politicas de privacidad".
7. El usuario hace clic en "Comenzar mis 15 días gratis".
8. El sistema activa la membresía.
9. El usuario revisa la casilla de correo de la cuenta.

**Resultado esperado**

El usuario recibe un email de confirmación de la contratación de la membresía.

**Observación**

Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.

---

### TC-B2C42-D-019 - Verificar que Renovar mi membresía cobra de inmediato y activa la membresía [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+segundo@avatar-global.com
- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardada la tarjeta 370000000002032

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_MEMBRESIA_EXPIRADA_PASSWORD}, vhchirinos+segundo@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Renovar".
3. El usuario hace clic en "Renovar".
4. El sistema muestra el modal "Renovar membresia".
5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.
6. El usuario activa el toggle "Acepto los términos y condiciones y las politicas de privacidad".
7. El usuario hace clic en "Renovar mi membresía".
8. El sistema muestra un estado de carga en el CTA mientras procesa la renovación.
9. El usuario cierra el onboarding.

**Resultado esperado**

Se ejecuta el cobro inmediato, la membresía se activa, se muestra el onboarding y al cerrarlo el carro refleja los precios de membresía.

**Observación**

Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.

---

### TC-B2C42-D-020 - Verificar que un fallo en el cobro o activación no activa la membresía [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardada la tarjeta 370000000002032
- DevTools abierto con bloqueo de la request {MEMBRESIA_API_ENDPOINT} (Network request blocking)

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, {MEMBRESIA_API_ENDPOINT}, 000000000000662457-UN, 370000000002032, 20000

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario hace clic en "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.
6. El usuario activa el toggle "Acepto los términos y condiciones y las politicas de privacidad".
7. El usuario hace clic en "Comenzar mis 15 días gratis".
8. El sistema recibe error del servicio de membresía.
9. El usuario revisa el estado de su membresía en Mi Membresía.

**Resultado esperado**

La membresía no se activa y el carro mantiene los precios sin membresía.

**Observación**

Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Además, {MEMBRESIA_API_ENDPOINT} está vacío en el Excel de data. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar, y cargar {MEMBRESIA_API_ENDPOINT} en el Excel de data.

---

### TC-B2C42-D-021 - Verificar que ante un fallo al contratar llega el email de notificación de fallo [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardada la tarjeta 370000000002032
- DevTools abierto con bloqueo de la request {MEMBRESIA_API_ENDPOINT} (Network request blocking)
- Acceso a la casilla de correo de la cuenta

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, {MEMBRESIA_API_ENDPOINT}, 000000000000662457-UN, 370000000002032, 20000

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario hace clic en "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.
6. El usuario activa el toggle "Acepto los términos y condiciones y las politicas de privacidad".
7. El usuario hace clic en "Comenzar mis 15 días gratis".
8. El sistema recibe error del servicio de membresía.
9. El usuario revisa la casilla de correo de la cuenta.

**Resultado esperado**

El usuario recibe un correo de notificación de fallo en la contratación de la membresía (RF-13).

**Observación**

Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Además, {MEMBRESIA_API_ENDPOINT} está vacío en el Excel de data. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar, y cargar {MEMBRESIA_API_ENDPOINT} en el Excel de data.

---

### TC-B2C42-D-022 - Verificar que sin ahorro de membresía suficiente no se muestra el banner [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene solo 000000000000675191-UN (sin precio de membresía): el ahorro potencial es nulo o menor a 20000

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000675191-UN, 20000

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario revisa el carrito buscando el banner de oferta de membresía.

**Resultado esperado**

El banner de oferta de membresía no se muestra y no existe punto de entrada al modal de contratación.

**Observación**

Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Este caso espera que el banner NO aparezca; mientras el banner no exista para nadie, que no aparezca no prueba la regla del umbral, así que no se da por Aprobado. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.

---

### TC-B2C42-M-001 - Verificar que Lo quiero abre el modal Pagar membresia con la oferta de prueba [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 20000

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario revisa el contenido del modal.

**Resultado esperado**

El modal muestra: título "Pagar membresia", botón X, selector de plan 3 meses / 6 meses, toggle de TyC desactivado, bloque de medio de pago con el texto "El cobro único de [precio del plan] se realizará con el medio de pago seleccionado después de tu periodo de prueba", sección de beneficios y el CTA con ícono diamante "Comenzar mis 15 días gratis" deshabilitado; si el contenido excede la pantalla, el modal hace scroll.

**Observación**

Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.

**Evidencia**

![Carro con 21 x 000000000000662457-UN: sin banner de membresía](<B2C-42 Evidencias/b2c42-carro-sin-banner-membresia-390.png>)

---

### TC-B2C42-M-002 - Verificar que Renovar abre el modal Renovar membresia con cobro inmediato [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+segundo@avatar-global.com
- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_MEMBRESIA_EXPIRADA_PASSWORD}, vhchirinos+segundo@avatar-global.com, 000000000000662457-UN, 20000

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Renovar".
3. El usuario toca "Renovar".
4. El sistema muestra el modal "Renovar membresia".
5. El usuario revisa el contenido del modal.

**Resultado esperado**

El modal muestra: título "Renovar membresia", botón X, selector de plan 3 meses / 6 meses, toggle de TyC desactivado, bloque de medio de pago con el texto "El cobro único de [precio del plan] se realizará de inmediato con el medio de pago seleccionado", sección de beneficios y el CTA con ícono diamante "Renovar mi membresía" deshabilitado.

**Observación**

Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.

---

### TC-B2C42-M-003 - Verificar que para un cliente Nuevo cada plan muestra ícono, 15 días gratis y precio [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 20000

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario revisa las opciones de plan 3 meses y 6 meses.

**Resultado esperado**

Cada plan muestra su ícono (3 meses / 6 meses), el texto "15 días gratis" y su precio.

**Observación**

Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.

---

### TC-B2C42-M-004 - Verificar que para un cliente Expirado los planes no muestran 15 días gratis [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+segundo@avatar-global.com
- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_MEMBRESIA_EXPIRADA_PASSWORD}, vhchirinos+segundo@avatar-global.com, 000000000000662457-UN, 20000

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Renovar".
3. El usuario toca "Renovar".
4. El sistema muestra el modal "Renovar membresia".
5. El usuario revisa las opciones de plan 3 meses y 6 meses.

**Resultado esperado**

Cada plan muestra su ícono y su precio, sin el texto "15 días gratis".

**Observación**

Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.

---

### TC-B2C42-M-005 - Verificar que seleccionar el plan de 3 meses actualiza el precio a $14.990 [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 20000

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona el plan 3 meses.

**Resultado esperado**

El plan 3 meses queda seleccionado y el resumen del modal muestra $14.990.

**Observación**

Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.

---

### TC-B2C42-M-006 - Verificar que seleccionar el plan de 6 meses actualiza el precio a $24.990 [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 20000

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona el plan 6 meses.

**Resultado esperado**

El plan 6 meses queda seleccionado y el resumen del modal muestra $24.990.

**Observación**

Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.

---

### TC-B2C42-M-007 - Verificar que sin tarjetas guardadas el bloque de pago muestra Nuevo medio de pago y Agregar [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta no tiene tarjetas guardadas

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 20000

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario revisa el bloque de medio de pago.

**Resultado esperado**

El bloque de pago muestra "Nuevo medio de pago" con el CTA "Agregar" y ninguna tarjeta.

**Observación**

Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.

---

### TC-B2C42-M-008 - Verificar que con tarjeta guardada el bloque de pago muestra logo, últimos 4 dígitos y Agregar [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardada la tarjeta 370000000002032

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario revisa el bloque de medio de pago.

**Resultado esperado**

El bloque de pago muestra el logo de la tarjeta con sus 4 últimos dígitos y "Nuevo medio de pago" con el CTA "Agregar".

**Observación**

Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.

---

### TC-B2C42-M-009 - Verificar que seleccionar una tarjeta guardada la asocia al plan de membresía [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardada la tarjeta 370000000002032

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.

**Resultado esperado**

La tarjeta 370000000002032 queda seleccionada como medio de pago asociado al plan de membresía.

**Observación**

Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.

---

### TC-B2C42-M-010 - Verificar que agregar una tarjeta nueva la guarda en la cuenta [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta no tiene guardada la tarjeta 370000000002032

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/account, 000000000000662457-UN, 370000000002032, 20000

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario toca "Agregar" en "Nuevo medio de pago" e ingresa los datos de 370000000002032.
6. El sistema tokeniza la tarjeta y la muestra en el bloque de medio de pago.
7. El usuario revisa los medios de pago guardados en Mi cuenta (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/account).

**Resultado esperado**

La tarjeta 370000000002032 queda guardada en la cuenta y disponible para compras ecommerce.

**Observación**

Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.

---

### TC-B2C42-M-011 - Verificar que cambiar el medio de pago reemplaza el asociado al plan [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardadas las tarjetas 370000000002032 y 4051884239937763

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 4051884239937763, 20000

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.
6. El usuario selecciona la tarjeta guardada 4051884239937763.

**Resultado esperado**

4051884239937763 queda seleccionada como medio asociado al plan y 370000000002032 deja de estar seleccionada.

**Observación**

Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.

---

### TC-B2C42-M-012 - Verificar que activar el toggle de TyC lo deja marcado como aceptado [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 20000

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario activa el toggle "Acepto los términos y condiciones y las politicas de privacidad".

**Resultado esperado**

El toggle de Términos y Condiciones queda marcado como aceptado.

**Observación**

Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.

---

### TC-B2C42-M-013 - Verificar que con medio de pago y TyC aceptados se habilita Comenzar mis 15 días gratis [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardada la tarjeta 370000000002032

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.
6. El usuario activa el toggle "Acepto los términos y condiciones y las politicas de privacidad".

**Resultado esperado**

El CTA "Comenzar mis 15 días gratis" se habilita.

**Observación**

Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.

---

### TC-B2C42-M-014 - Verificar que sin aceptar los TyC el CTA de contratación sigue deshabilitado [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardada la tarjeta 370000000002032

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.
6. El usuario deja el toggle de TyC desactivado.

**Resultado esperado**

El CTA "Comenzar mis 15 días gratis" permanece deshabilitado.

**Observación**

Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.

---

### TC-B2C42-M-015 - Verificar que con medio de pago y TyC aceptados se habilita Renovar mi membresía [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+segundo@avatar-global.com
- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardada la tarjeta 370000000002032

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_MEMBRESIA_EXPIRADA_PASSWORD}, vhchirinos+segundo@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Renovar".
3. El usuario toca "Renovar".
4. El sistema muestra el modal "Renovar membresia".
5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.
6. El usuario activa el toggle "Acepto los términos y condiciones y las politicas de privacidad".

**Resultado esperado**

El CTA "Renovar mi membresía" se habilita.

**Observación**

Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.

---

### TC-B2C42-M-016 - Verificar que Comenzar mis 15 días gratis activa la membresía y muestra el onboarding [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardada la tarjeta 370000000002032

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.
6. El usuario activa el toggle "Acepto los términos y condiciones y las politicas de privacidad".
7. El usuario toca "Comenzar mis 15 días gratis".
8. El sistema muestra un estado de carga en el CTA mientras procesa la contratación.

**Resultado esperado**

La membresía se activa de inmediato y se muestra el onboarding de membresía con la información de beneficios activados.

**Observación**

Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.

---

### TC-B2C42-M-017 - Verificar que al cerrar el onboarding el carro muestra precios de membresía [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardada la tarjeta 370000000002032

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
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

**Observación**

Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.

---

### TC-B2C42-M-018 - Verificar que tras contratar la membresía llega el email de confirmación [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardada la tarjeta 370000000002032
- Acceso a la casilla de correo de la cuenta

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
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

**Observación**

Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.

---

### TC-B2C42-M-019 - Verificar que Renovar mi membresía cobra de inmediato y activa la membresía [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+segundo@avatar-global.com
- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardada la tarjeta 370000000002032

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_MEMBRESIA_EXPIRADA_PASSWORD}, vhchirinos+segundo@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
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

**Observación**

Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.

---

### TC-B2C42-M-020 - Verificar que un fallo en el cobro o activación no activa la membresía [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardada la tarjeta 370000000002032
- DevTools abierto con bloqueo de la request {MEMBRESIA_API_ENDPOINT} (Network request blocking)

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, {MEMBRESIA_API_ENDPOINT}, 000000000000662457-UN, 370000000002032, 20000

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
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

**Observación**

Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Además, {MEMBRESIA_API_ENDPOINT} está vacío en el Excel de data. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar, y cargar {MEMBRESIA_API_ENDPOINT} en el Excel de data.

---

### TC-B2C42-M-021 - Verificar que ante un fallo al contratar llega el email de notificación de fallo [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000
- La cuenta tiene guardada la tarjeta 370000000002032
- DevTools abierto con bloqueo de la request {MEMBRESIA_API_ENDPOINT} (Network request blocking)
- Acceso a la casilla de correo de la cuenta

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, {MEMBRESIA_API_ENDPOINT}, 000000000000662457-UN, 370000000002032, 20000

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
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

**Observación**

Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Además, {MEMBRESIA_API_ENDPOINT} está vacío en el Excel de data. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar, y cargar {MEMBRESIA_API_ENDPOINT} en el Excel de data.

---

### TC-B2C42-M-022 - Verificar que sin ahorro de membresía suficiente no se muestra el banner [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene solo 000000000000675191-UN (sin precio de membresía): el ahorro potencial es nulo o menor a 20000

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000675191-UN, 20000

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario revisa el carrito buscando el banner de oferta de membresía.

**Resultado esperado**

El banner de oferta de membresía no se muestra y no existe punto de entrada al modal de contratación.

**Observación**

Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Este caso espera que el banner NO aparezca; mientras el banner no exista para nadie, que no aparezca no prueba la regla del umbral, así que no se da por Aprobado. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "environment": "Storefront DEV (smu-dev-development)",
  "executed_by": "Victor Chirinos",
  "suite": "B2C-42",
  "tc_file": "Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-42 Test Cases.xlsx",
  "title": "B2C-42 - Contratar o renovar membresía desde el carro - Evidencias QA",
  "updated_at": "2026-10-14"
 },
 "history": {
  "2026-10-14": [
   "TC-B2C42-D-001",
   "TC-B2C42-D-002",
   "TC-B2C42-D-003",
   "TC-B2C42-D-004",
   "TC-B2C42-D-005",
   "TC-B2C42-D-006",
   "TC-B2C42-D-007",
   "TC-B2C42-D-008",
   "TC-B2C42-D-009",
   "TC-B2C42-D-010",
   "TC-B2C42-D-011",
   "TC-B2C42-D-012",
   "TC-B2C42-D-013",
   "TC-B2C42-D-014",
   "TC-B2C42-D-015",
   "TC-B2C42-D-016",
   "TC-B2C42-D-017",
   "TC-B2C42-D-018",
   "TC-B2C42-D-019",
   "TC-B2C42-D-020",
   "TC-B2C42-D-021",
   "TC-B2C42-D-022",
   "TC-B2C42-M-001",
   "TC-B2C42-M-002",
   "TC-B2C42-M-003",
   "TC-B2C42-M-004",
   "TC-B2C42-M-005",
   "TC-B2C42-M-006",
   "TC-B2C42-M-007",
   "TC-B2C42-M-008",
   "TC-B2C42-M-009",
   "TC-B2C42-M-010",
   "TC-B2C42-M-011",
   "TC-B2C42-M-012",
   "TC-B2C42-M-013",
   "TC-B2C42-M-014",
   "TC-B2C42-M-015",
   "TC-B2C42-M-016",
   "TC-B2C42-M-017",
   "TC-B2C42-M-018",
   "TC-B2C42-M-019",
   "TC-B2C42-M-020",
   "TC-B2C42-M-021",
   "TC-B2C42-M-022"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "El modal muestra: título \"Pagar membresia\", botón X, selector de plan 3 meses / 6 meses, toggle de TyC desactivado, bloque de medio de pago con el texto \"El cobro único de [precio del plan] se realizará con el medio de pago seleccionado después de tu periodo de prueba\", sección de beneficios y el CTA con ícono diamante \"Comenzar mis 15 días gratis\" deshabilitado; si el contenido excede la pantalla, el modal hace scroll.",
   "form_factor": "desktop",
   "id": "TC-B2C42-D-001",
   "name": "Verificar que Lo quiero abre el modal Pagar membresia con la oferta de prueba [Desktop] [Logueado]",
   "observation": "Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000",
   "screenshots": [
    {
     "caption": "Carro con 21 x 000000000000662457-UN: sin banner de membresía",
     "file": "b2c42-carro-sin-banner-membresia-1440.png"
    }
   ],
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario hace clic en \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario revisa el contenido del modal.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 20000",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "El modal muestra: título \"Renovar membresia\", botón X, selector de plan 3 meses / 6 meses, toggle de TyC desactivado, bloque de medio de pago con el texto \"El cobro único de [precio del plan] se realizará de inmediato con el medio de pago seleccionado\", sección de beneficios y el CTA con ícono diamante \"Renovar mi membresía\" deshabilitado.",
   "form_factor": "desktop",
   "id": "TC-B2C42-D-002",
   "name": "Verificar que Renovar abre el modal Renovar membresia con cobro inmediato [Desktop] [Logueado]",
   "observation": "Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+segundo@avatar-global.com\n- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Renovar\".\n3. El usuario hace clic en \"Renovar\".\n4. El sistema muestra el modal \"Renovar membresia\".\n5. El usuario revisa el contenido del modal.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_MEMBRESIA_EXPIRADA_PASSWORD}, vhchirinos+segundo@avatar-global.com, 000000000000662457-UN, 20000",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "Cada plan muestra su ícono (3 meses / 6 meses), el texto \"15 días gratis\" y su precio.",
   "form_factor": "desktop",
   "id": "TC-B2C42-D-003",
   "name": "Verificar que para un cliente Nuevo cada plan muestra ícono, 15 días gratis y precio [Desktop] [Logueado]",
   "observation": "Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario hace clic en \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario revisa las opciones de plan 3 meses y 6 meses.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 20000",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "Cada plan muestra su ícono y su precio, sin el texto \"15 días gratis\".",
   "form_factor": "desktop",
   "id": "TC-B2C42-D-004",
   "name": "Verificar que para un cliente Expirado los planes no muestran 15 días gratis [Desktop] [Logueado]",
   "observation": "Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+segundo@avatar-global.com\n- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Renovar\".\n3. El usuario hace clic en \"Renovar\".\n4. El sistema muestra el modal \"Renovar membresia\".\n5. El usuario revisa las opciones de plan 3 meses y 6 meses.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_MEMBRESIA_EXPIRADA_PASSWORD}, vhchirinos+segundo@avatar-global.com, 000000000000662457-UN, 20000",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "El plan 3 meses queda seleccionado y el resumen del modal muestra $14.990.",
   "form_factor": "desktop",
   "id": "TC-B2C42-D-005",
   "name": "Verificar que seleccionar el plan de 3 meses actualiza el precio a $14.990 [Desktop] [Logueado]",
   "observation": "Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario hace clic en \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona el plan 3 meses.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 20000",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "El plan 6 meses queda seleccionado y el resumen del modal muestra $24.990.",
   "form_factor": "desktop",
   "id": "TC-B2C42-D-006",
   "name": "Verificar que seleccionar el plan de 6 meses actualiza el precio a $24.990 [Desktop] [Logueado]",
   "observation": "Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario hace clic en \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona el plan 6 meses.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 20000",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "El bloque de pago muestra \"Nuevo medio de pago\" con el CTA \"Agregar\" y ninguna tarjeta.",
   "form_factor": "desktop",
   "id": "TC-B2C42-D-007",
   "name": "Verificar que sin tarjetas guardadas el bloque de pago muestra Nuevo medio de pago y Agregar [Desktop] [Logueado]",
   "observation": "Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta no tiene tarjetas guardadas",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario hace clic en \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario revisa el bloque de medio de pago.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 20000",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "El bloque de pago muestra el logo de la tarjeta con sus 4 últimos dígitos y \"Nuevo medio de pago\" con el CTA \"Agregar\".",
   "form_factor": "desktop",
   "id": "TC-B2C42-D-008",
   "name": "Verificar que con tarjeta guardada el bloque de pago muestra logo, últimos 4 dígitos y Agregar [Desktop] [Logueado]",
   "observation": "Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardada la tarjeta 370000000002032",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario hace clic en \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario revisa el bloque de medio de pago.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "La tarjeta 370000000002032 queda seleccionada como medio de pago asociado al plan de membresía.",
   "form_factor": "desktop",
   "id": "TC-B2C42-D-009",
   "name": "Verificar que seleccionar una tarjeta guardada la asocia al plan de membresía [Desktop] [Logueado]",
   "observation": "Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardada la tarjeta 370000000002032",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario hace clic en \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "La tarjeta 370000000002032 queda guardada en la cuenta y disponible para compras ecommerce.",
   "form_factor": "desktop",
   "id": "TC-B2C42-D-010",
   "name": "Verificar que agregar una tarjeta nueva la guarda en la cuenta [Desktop] [Logueado]",
   "observation": "Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta no tiene guardada la tarjeta 370000000002032",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario hace clic en \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario hace clic en \"Agregar\" en \"Nuevo medio de pago\" e ingresa los datos de 370000000002032.\n6. El sistema tokeniza la tarjeta y la muestra en el bloque de medio de pago.\n7. El usuario revisa los medios de pago guardados en Mi cuenta (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/account).",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/account, 000000000000662457-UN, 370000000002032, 20000",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "4051884239937763 queda seleccionada como medio asociado al plan y 370000000002032 deja de estar seleccionada.",
   "form_factor": "desktop",
   "id": "TC-B2C42-D-011",
   "name": "Verificar que cambiar el medio de pago reemplaza el asociado al plan [Desktop] [Logueado]",
   "observation": "Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardadas las tarjetas 370000000002032 y 4051884239937763",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario hace clic en \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.\n6. El usuario selecciona la tarjeta guardada 4051884239937763.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 4051884239937763, 20000",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "El toggle de Términos y Condiciones queda marcado como aceptado.",
   "form_factor": "desktop",
   "id": "TC-B2C42-D-012",
   "name": "Verificar que activar el toggle de TyC lo deja marcado como aceptado [Desktop] [Logueado]",
   "observation": "Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario hace clic en \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 20000",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "El CTA \"Comenzar mis 15 días gratis\" se habilita.",
   "form_factor": "desktop",
   "id": "TC-B2C42-D-013",
   "name": "Verificar que con medio de pago y TyC aceptados se habilita Comenzar mis 15 días gratis [Desktop] [Logueado]",
   "observation": "Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardada la tarjeta 370000000002032",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario hace clic en \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "El CTA \"Comenzar mis 15 días gratis\" permanece deshabilitado.",
   "form_factor": "desktop",
   "id": "TC-B2C42-D-014",
   "name": "Verificar que sin aceptar los TyC el CTA de contratación sigue deshabilitado [Desktop] [Logueado]",
   "observation": "Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardada la tarjeta 370000000002032",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario hace clic en \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.\n6. El usuario deja el toggle de TyC desactivado.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "El CTA \"Renovar mi membresía\" se habilita.",
   "form_factor": "desktop",
   "id": "TC-B2C42-D-015",
   "name": "Verificar que con medio de pago y TyC aceptados se habilita Renovar mi membresía [Desktop] [Logueado]",
   "observation": "Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+segundo@avatar-global.com\n- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardada la tarjeta 370000000002032",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Renovar\".\n3. El usuario hace clic en \"Renovar\".\n4. El sistema muestra el modal \"Renovar membresia\".\n5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_MEMBRESIA_EXPIRADA_PASSWORD}, vhchirinos+segundo@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "La membresía se activa de inmediato y se muestra el onboarding de membresía con la información de beneficios activados.",
   "form_factor": "desktop",
   "id": "TC-B2C42-D-016",
   "name": "Verificar que Comenzar mis 15 días gratis activa la membresía y muestra el onboarding [Desktop] [Logueado]",
   "observation": "Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardada la tarjeta 370000000002032",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario hace clic en \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".\n7. El usuario hace clic en \"Comenzar mis 15 días gratis\".\n8. El sistema muestra un estado de carga en el CTA mientras procesa la contratación.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "El carro se actualiza y 000000000000662457-UN muestra el precio y descuento de membresía; el banner de oferta ya no se muestra.",
   "form_factor": "desktop",
   "id": "TC-B2C42-D-017",
   "name": "Verificar que al cerrar el onboarding el carro muestra precios de membresía [Desktop] [Logueado]",
   "observation": "Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardada la tarjeta 370000000002032",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario hace clic en \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".\n7. El usuario hace clic en \"Comenzar mis 15 días gratis\".\n8. El sistema activa la membresía y muestra el onboarding.\n9. El usuario cierra el onboarding.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "El usuario recibe un email de confirmación de la contratación de la membresía.",
   "form_factor": "desktop",
   "id": "TC-B2C42-D-018",
   "name": "Verificar que tras contratar la membresía llega el email de confirmación [Desktop] [Logueado]",
   "observation": "Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardada la tarjeta 370000000002032\n- Acceso a la casilla de correo de la cuenta",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario hace clic en \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".\n7. El usuario hace clic en \"Comenzar mis 15 días gratis\".\n8. El sistema activa la membresía.\n9. El usuario revisa la casilla de correo de la cuenta.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "Se ejecuta el cobro inmediato, la membresía se activa, se muestra el onboarding y al cerrarlo el carro refleja los precios de membresía.",
   "form_factor": "desktop",
   "id": "TC-B2C42-D-019",
   "name": "Verificar que Renovar mi membresía cobra de inmediato y activa la membresía [Desktop] [Logueado]",
   "observation": "Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+segundo@avatar-global.com\n- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardada la tarjeta 370000000002032",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Renovar\".\n3. El usuario hace clic en \"Renovar\".\n4. El sistema muestra el modal \"Renovar membresia\".\n5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".\n7. El usuario hace clic en \"Renovar mi membresía\".\n8. El sistema muestra un estado de carga en el CTA mientras procesa la renovación.\n9. El usuario cierra el onboarding.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_MEMBRESIA_EXPIRADA_PASSWORD}, vhchirinos+segundo@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "La membresía no se activa y el carro mantiene los precios sin membresía.",
   "form_factor": "desktop",
   "id": "TC-B2C42-D-020",
   "name": "Verificar que un fallo en el cobro o activación no activa la membresía [Desktop] [Logueado]",
   "observation": "Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Además, {MEMBRESIA_API_ENDPOINT} está vacío en el Excel de data. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar, y cargar {MEMBRESIA_API_ENDPOINT} en el Excel de data.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardada la tarjeta 370000000002032\n- DevTools abierto con bloqueo de la request {MEMBRESIA_API_ENDPOINT} (Network request blocking)",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario hace clic en \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".\n7. El usuario hace clic en \"Comenzar mis 15 días gratis\".\n8. El sistema recibe error del servicio de membresía.\n9. El usuario revisa el estado de su membresía en Mi Membresía.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, {MEMBRESIA_API_ENDPOINT}, 000000000000662457-UN, 370000000002032, 20000",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "El usuario recibe un correo de notificación de fallo en la contratación de la membresía (RF-13).",
   "form_factor": "desktop",
   "id": "TC-B2C42-D-021",
   "name": "Verificar que ante un fallo al contratar llega el email de notificación de fallo [Desktop] [Logueado]",
   "observation": "Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Además, {MEMBRESIA_API_ENDPOINT} está vacío en el Excel de data. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar, y cargar {MEMBRESIA_API_ENDPOINT} en el Excel de data.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardada la tarjeta 370000000002032\n- DevTools abierto con bloqueo de la request {MEMBRESIA_API_ENDPOINT} (Network request blocking)\n- Acceso a la casilla de correo de la cuenta",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario hace clic en \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".\n7. El usuario hace clic en \"Comenzar mis 15 días gratis\".\n8. El sistema recibe error del servicio de membresía.\n9. El usuario revisa la casilla de correo de la cuenta.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, {MEMBRESIA_API_ENDPOINT}, 000000000000662457-UN, 370000000002032, 20000",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "El banner de oferta de membresía no se muestra y no existe punto de entrada al modal de contratación.",
   "form_factor": "desktop",
   "id": "TC-B2C42-D-022",
   "name": "Verificar que sin ahorro de membresía suficiente no se muestra el banner [Desktop] [Logueado]",
   "observation": "Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Este caso espera que el banner NO aparezca; mientras el banner no exista para nadie, que no aparezca no prueba la regla del umbral, así que no se da por Aprobado. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene solo 000000000000675191-UN (sin precio de membresía): el ahorro potencial es nulo o menor a 20000",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario revisa el carrito buscando el banner de oferta de membresía.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000675191-UN, 20000",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "El modal muestra: título \"Pagar membresia\", botón X, selector de plan 3 meses / 6 meses, toggle de TyC desactivado, bloque de medio de pago con el texto \"El cobro único de [precio del plan] se realizará con el medio de pago seleccionado después de tu periodo de prueba\", sección de beneficios y el CTA con ícono diamante \"Comenzar mis 15 días gratis\" deshabilitado; si el contenido excede la pantalla, el modal hace scroll.",
   "form_factor": "mobile",
   "id": "TC-B2C42-M-001",
   "name": "Verificar que Lo quiero abre el modal Pagar membresia con la oferta de prueba [Mobile] [Logueado]",
   "observation": "Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000",
   "screenshots": [
    {
     "caption": "Carro con 21 x 000000000000662457-UN: sin banner de membresía",
     "file": "b2c42-carro-sin-banner-membresia-390.png"
    }
   ],
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario revisa el contenido del modal.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 20000",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "El modal muestra: título \"Renovar membresia\", botón X, selector de plan 3 meses / 6 meses, toggle de TyC desactivado, bloque de medio de pago con el texto \"El cobro único de [precio del plan] se realizará de inmediato con el medio de pago seleccionado\", sección de beneficios y el CTA con ícono diamante \"Renovar mi membresía\" deshabilitado.",
   "form_factor": "mobile",
   "id": "TC-B2C42-M-002",
   "name": "Verificar que Renovar abre el modal Renovar membresia con cobro inmediato [Mobile] [Logueado]",
   "observation": "Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+segundo@avatar-global.com\n- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Renovar\".\n3. El usuario toca \"Renovar\".\n4. El sistema muestra el modal \"Renovar membresia\".\n5. El usuario revisa el contenido del modal.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_MEMBRESIA_EXPIRADA_PASSWORD}, vhchirinos+segundo@avatar-global.com, 000000000000662457-UN, 20000",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "Cada plan muestra su ícono (3 meses / 6 meses), el texto \"15 días gratis\" y su precio.",
   "form_factor": "mobile",
   "id": "TC-B2C42-M-003",
   "name": "Verificar que para un cliente Nuevo cada plan muestra ícono, 15 días gratis y precio [Mobile] [Logueado]",
   "observation": "Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario revisa las opciones de plan 3 meses y 6 meses.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 20000",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "Cada plan muestra su ícono y su precio, sin el texto \"15 días gratis\".",
   "form_factor": "mobile",
   "id": "TC-B2C42-M-004",
   "name": "Verificar que para un cliente Expirado los planes no muestran 15 días gratis [Mobile] [Logueado]",
   "observation": "Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+segundo@avatar-global.com\n- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Renovar\".\n3. El usuario toca \"Renovar\".\n4. El sistema muestra el modal \"Renovar membresia\".\n5. El usuario revisa las opciones de plan 3 meses y 6 meses.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_MEMBRESIA_EXPIRADA_PASSWORD}, vhchirinos+segundo@avatar-global.com, 000000000000662457-UN, 20000",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "El plan 3 meses queda seleccionado y el resumen del modal muestra $14.990.",
   "form_factor": "mobile",
   "id": "TC-B2C42-M-005",
   "name": "Verificar que seleccionar el plan de 3 meses actualiza el precio a $14.990 [Mobile] [Logueado]",
   "observation": "Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona el plan 3 meses.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 20000",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "El plan 6 meses queda seleccionado y el resumen del modal muestra $24.990.",
   "form_factor": "mobile",
   "id": "TC-B2C42-M-006",
   "name": "Verificar que seleccionar el plan de 6 meses actualiza el precio a $24.990 [Mobile] [Logueado]",
   "observation": "Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona el plan 6 meses.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 20000",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "El bloque de pago muestra \"Nuevo medio de pago\" con el CTA \"Agregar\" y ninguna tarjeta.",
   "form_factor": "mobile",
   "id": "TC-B2C42-M-007",
   "name": "Verificar que sin tarjetas guardadas el bloque de pago muestra Nuevo medio de pago y Agregar [Mobile] [Logueado]",
   "observation": "Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta no tiene tarjetas guardadas",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario revisa el bloque de medio de pago.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 20000",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "El bloque de pago muestra el logo de la tarjeta con sus 4 últimos dígitos y \"Nuevo medio de pago\" con el CTA \"Agregar\".",
   "form_factor": "mobile",
   "id": "TC-B2C42-M-008",
   "name": "Verificar que con tarjeta guardada el bloque de pago muestra logo, últimos 4 dígitos y Agregar [Mobile] [Logueado]",
   "observation": "Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardada la tarjeta 370000000002032",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario revisa el bloque de medio de pago.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "La tarjeta 370000000002032 queda seleccionada como medio de pago asociado al plan de membresía.",
   "form_factor": "mobile",
   "id": "TC-B2C42-M-009",
   "name": "Verificar que seleccionar una tarjeta guardada la asocia al plan de membresía [Mobile] [Logueado]",
   "observation": "Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardada la tarjeta 370000000002032",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "La tarjeta 370000000002032 queda guardada en la cuenta y disponible para compras ecommerce.",
   "form_factor": "mobile",
   "id": "TC-B2C42-M-010",
   "name": "Verificar que agregar una tarjeta nueva la guarda en la cuenta [Mobile] [Logueado]",
   "observation": "Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta no tiene guardada la tarjeta 370000000002032",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario toca \"Agregar\" en \"Nuevo medio de pago\" e ingresa los datos de 370000000002032.\n6. El sistema tokeniza la tarjeta y la muestra en el bloque de medio de pago.\n7. El usuario revisa los medios de pago guardados en Mi cuenta (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/account).",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/account, 000000000000662457-UN, 370000000002032, 20000",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "4051884239937763 queda seleccionada como medio asociado al plan y 370000000002032 deja de estar seleccionada.",
   "form_factor": "mobile",
   "id": "TC-B2C42-M-011",
   "name": "Verificar que cambiar el medio de pago reemplaza el asociado al plan [Mobile] [Logueado]",
   "observation": "Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardadas las tarjetas 370000000002032 y 4051884239937763",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.\n6. El usuario selecciona la tarjeta guardada 4051884239937763.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 4051884239937763, 20000",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "El toggle de Términos y Condiciones queda marcado como aceptado.",
   "form_factor": "mobile",
   "id": "TC-B2C42-M-012",
   "name": "Verificar que activar el toggle de TyC lo deja marcado como aceptado [Mobile] [Logueado]",
   "observation": "Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 20000",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "El CTA \"Comenzar mis 15 días gratis\" se habilita.",
   "form_factor": "mobile",
   "id": "TC-B2C42-M-013",
   "name": "Verificar que con medio de pago y TyC aceptados se habilita Comenzar mis 15 días gratis [Mobile] [Logueado]",
   "observation": "Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardada la tarjeta 370000000002032",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "El CTA \"Comenzar mis 15 días gratis\" permanece deshabilitado.",
   "form_factor": "mobile",
   "id": "TC-B2C42-M-014",
   "name": "Verificar que sin aceptar los TyC el CTA de contratación sigue deshabilitado [Mobile] [Logueado]",
   "observation": "Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardada la tarjeta 370000000002032",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.\n6. El usuario deja el toggle de TyC desactivado.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "El CTA \"Renovar mi membresía\" se habilita.",
   "form_factor": "mobile",
   "id": "TC-B2C42-M-015",
   "name": "Verificar que con medio de pago y TyC aceptados se habilita Renovar mi membresía [Mobile] [Logueado]",
   "observation": "Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+segundo@avatar-global.com\n- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardada la tarjeta 370000000002032",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Renovar\".\n3. El usuario toca \"Renovar\".\n4. El sistema muestra el modal \"Renovar membresia\".\n5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_MEMBRESIA_EXPIRADA_PASSWORD}, vhchirinos+segundo@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "La membresía se activa de inmediato y se muestra el onboarding de membresía con la información de beneficios activados.",
   "form_factor": "mobile",
   "id": "TC-B2C42-M-016",
   "name": "Verificar que Comenzar mis 15 días gratis activa la membresía y muestra el onboarding [Mobile] [Logueado]",
   "observation": "Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardada la tarjeta 370000000002032",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".\n7. El usuario toca \"Comenzar mis 15 días gratis\".\n8. El sistema muestra un estado de carga en el CTA mientras procesa la contratación.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "El carro se actualiza y 000000000000662457-UN muestra el precio y descuento de membresía; el banner de oferta ya no se muestra.",
   "form_factor": "mobile",
   "id": "TC-B2C42-M-017",
   "name": "Verificar que al cerrar el onboarding el carro muestra precios de membresía [Mobile] [Logueado]",
   "observation": "Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardada la tarjeta 370000000002032",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".\n7. El usuario toca \"Comenzar mis 15 días gratis\".\n8. El sistema activa la membresía y muestra el onboarding.\n9. El usuario cierra el onboarding.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "El usuario recibe un email de confirmación de la contratación de la membresía.",
   "form_factor": "mobile",
   "id": "TC-B2C42-M-018",
   "name": "Verificar que tras contratar la membresía llega el email de confirmación [Mobile] [Logueado]",
   "observation": "Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardada la tarjeta 370000000002032\n- Acceso a la casilla de correo de la cuenta",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".\n7. El usuario toca \"Comenzar mis 15 días gratis\".\n8. El sistema activa la membresía.\n9. El usuario revisa la casilla de correo de la cuenta.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "Se ejecuta el cobro inmediato, la membresía se activa, se muestra el onboarding y al cerrarlo el carro refleja los precios de membresía.",
   "form_factor": "mobile",
   "id": "TC-B2C42-M-019",
   "name": "Verificar que Renovar mi membresía cobra de inmediato y activa la membresía [Mobile] [Logueado]",
   "observation": "Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+segundo@avatar-global.com\n- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardada la tarjeta 370000000002032",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Renovar\".\n3. El usuario toca \"Renovar\".\n4. El sistema muestra el modal \"Renovar membresia\".\n5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".\n7. El usuario toca \"Renovar mi membresía\".\n8. El sistema muestra un estado de carga en el CTA mientras procesa la renovación.\n9. El usuario cierra el onboarding.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_MEMBRESIA_EXPIRADA_PASSWORD}, vhchirinos+segundo@avatar-global.com, 000000000000662457-UN, 370000000002032, 20000",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "La membresía no se activa y el carro mantiene los precios sin membresía.",
   "form_factor": "mobile",
   "id": "TC-B2C42-M-020",
   "name": "Verificar que un fallo en el cobro o activación no activa la membresía [Mobile] [Logueado]",
   "observation": "Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Además, {MEMBRESIA_API_ENDPOINT} está vacío en el Excel de data. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar, y cargar {MEMBRESIA_API_ENDPOINT} en el Excel de data.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardada la tarjeta 370000000002032\n- DevTools abierto con bloqueo de la request {MEMBRESIA_API_ENDPOINT} (Network request blocking)",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".\n7. El usuario toca \"Comenzar mis 15 días gratis\".\n8. El sistema recibe error del servicio de membresía.\n9. El usuario revisa el estado de su membresía en Mi Membresía.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, {MEMBRESIA_API_ENDPOINT}, 000000000000662457-UN, 370000000002032, 20000",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "El usuario recibe un correo de notificación de fallo en la contratación de la membresía (RF-13).",
   "form_factor": "mobile",
   "id": "TC-B2C42-M-021",
   "name": "Verificar que ante un fallo al contratar llega el email de notificación de fallo [Mobile] [Logueado]",
   "observation": "Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Además, {MEMBRESIA_API_ENDPOINT} está vacío en el Excel de data. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar, y cargar {MEMBRESIA_API_ENDPOINT} en el Excel de data.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene 000000000000662457-UN y el ahorro potencial por membresía supera 20000\n- La cuenta tiene guardada la tarjeta 370000000002032\n- DevTools abierto con bloqueo de la request {MEMBRESIA_API_ENDPOINT} (Network request blocking)\n- Acceso a la casilla de correo de la cuenta",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada 370000000002032 en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".\n7. El usuario toca \"Comenzar mis 15 días gratis\".\n8. El sistema recibe error del servicio de membresía.\n9. El usuario revisa la casilla de correo de la cuenta.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, {MEMBRESIA_API_ENDPOINT}, 000000000000662457-UN, 370000000002032, 20000",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "El banner de oferta de membresía no se muestra y no existe punto de entrada al modal de contratación.",
   "form_factor": "mobile",
   "id": "TC-B2C42-M-022",
   "name": "Verificar que sin ahorro de membresía suficiente no se muestra el banner [Mobile] [Logueado]",
   "observation": "Causa: el carro no muestra el banner de oferta de membresía con el CTA 'Lo quiero'/'Renovar', que es el único punto de entrada al modal. Re-verificado el 2026-10-14 con {COMPRADOR_SIN_MEMBRESIA_USER} (vhchirinos+comprador, Mi membresía: 'Contratar') y 21 unidades de {SKU_PRECIO_MIEMBRO} (000000000000662457-UN, $3.890 normal / $2.897 socio: ahorro potencial $20.853 > {UMBRAL_AHORRO_MEMBRESIA} $20.000, subtotal $81.690), en 1440x900 y 390x844; el carro tampoco muestra el precio socio. La HU B2C-42 y su tarea WEB B2C-409 siguen 'En curso' en Jira (el banner es B2C-37 CA13). {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no se re-verificó: el componente no existe para ninguna cuenta. Este caso espera que el banner NO aparezca; mientras el banner no exista para nadie, que no aparezca no prueba la regla del umbral, así que no se da por Aprobado. Acción: desplegar en DEV el banner de oferta de membresía del carro (B2C-37 CA13 / B2C-409) y re-ejecutar.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene solo 000000000000675191-UN (sin precio de membresía): el ahorro potencial es nulo o menor a 20000",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario revisa el carrito buscando el banner de oferta de membresía.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_SIN_MEMBRESIA_PASSWORD}, vhchirinos+comprador@avatar-global.com, 000000000000675191-UN, 20000",
   "viewport": "390x844"
  }
 ]
}
-->
