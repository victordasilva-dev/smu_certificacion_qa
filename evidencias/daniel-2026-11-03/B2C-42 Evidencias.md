# B2C-42 (web) - Contratar o renovar membresía desde el carro - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-42 |
| Última actualización | 2026-11-02 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | chromium |
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
| 2026-11-02 | 44 | TC-B2C42-D-001, TC-B2C42-D-002, TC-B2C42-D-003, TC-B2C42-D-004, TC-B2C42-D-005, TC-B2C42-D-006, TC-B2C42-D-007, TC-B2C42-D-008, TC-B2C42-D-009, TC-B2C42-D-010, TC-B2C42-D-011, TC-B2C42-D-012, TC-B2C42-D-013, TC-B2C42-D-014, TC-B2C42-D-015, TC-B2C42-D-016, TC-B2C42-D-017, TC-B2C42-D-018, TC-B2C42-D-019, TC-B2C42-D-020, TC-B2C42-D-021, TC-B2C42-D-022, TC-B2C42-M-001, TC-B2C42-M-002, TC-B2C42-M-003, TC-B2C42-M-004, TC-B2C42-M-005, TC-B2C42-M-006, TC-B2C42-M-007, TC-B2C42-M-008, TC-B2C42-M-009, TC-B2C42-M-010, TC-B2C42-M-011, TC-B2C42-M-012, TC-B2C42-M-013, TC-B2C42-M-014, TC-B2C42-M-015, TC-B2C42-M-016, TC-B2C42-M-017, TC-B2C42-M-018, TC-B2C42-M-019, TC-B2C42-M-020, TC-B2C42-M-021, TC-B2C42-M-022 |

## Detalle por caso de prueba

### TC-B2C42-D-001 - Verificar que Lo quiero abre el modal Pagar membresia con la oferta de prueba [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN
- {UMBRAL_AHORRO_MEMBRESIA} = TBD
- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario hace clic en "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario revisa el contenido del modal.

**Resultado esperado**

El modal muestra: título "Pagar membresia", botón X, selector de plan 3 meses / 6 meses, toggle de TyC desactivado, bloque de medio de pago con el texto "El cobro único de [precio del plan] se realizará con el medio de pago seleccionado después de tu periodo de prueba", sección de beneficios y el CTA con ícono diamante "Comenzar mis 15 días gratis" deshabilitado; si el contenido excede la pantalla, el modal hace scroll.

**Observación**

Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.

---

### TC-B2C42-D-002 - Verificar que Renovar abre el modal Renovar membresia con cobro inmediato [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER}
- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)
- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN
- {UMBRAL_AHORRO_MEMBRESIA} = TBD
- {COMPRADOR_MEMBRESIA_EXPIRADA_USER} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Renovar".
3. El usuario hace clic en "Renovar".
4. El sistema muestra el modal "Renovar membresia".
5. El usuario revisa el contenido del modal.

**Resultado esperado**

El modal muestra: título "Renovar membresia", botón X, selector de plan 3 meses / 6 meses, toggle de TyC desactivado, bloque de medio de pago con el texto "El cobro único de [precio del plan] se realizará de inmediato con el medio de pago seleccionado", sección de beneficios y el CTA con ícono diamante "Renovar mi membresía" deshabilitado.

**Observación**

Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.

---

### TC-B2C42-D-003 - Verificar que para un cliente Nuevo cada plan muestra ícono, 15 días gratis y precio [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN
- {UMBRAL_AHORRO_MEMBRESIA} = TBD
- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario hace clic en "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario revisa las opciones de plan 3 meses y 6 meses.

**Resultado esperado**

Cada plan muestra su ícono (3 meses / 6 meses), el texto "15 días gratis" y su precio.

**Observación**

Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.

---

### TC-B2C42-D-004 - Verificar que para un cliente Expirado los planes no muestran 15 días gratis [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER}
- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)
- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN
- {UMBRAL_AHORRO_MEMBRESIA} = TBD
- {COMPRADOR_MEMBRESIA_EXPIRADA_USER} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Renovar".
3. El usuario hace clic en "Renovar".
4. El sistema muestra el modal "Renovar membresia".
5. El usuario revisa las opciones de plan 3 meses y 6 meses.

**Resultado esperado**

Cada plan muestra su ícono y su precio, sin el texto "15 días gratis".

**Observación**

Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.

---

### TC-B2C42-D-005 - Verificar que seleccionar el plan de 3 meses actualiza el precio a $14.990 [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN
- {UMBRAL_AHORRO_MEMBRESIA} = TBD
- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario hace clic en "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona el plan 3 meses.

**Resultado esperado**

El plan 3 meses queda seleccionado y el resumen del modal muestra $14.990.

**Observación**

Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.

---

### TC-B2C42-D-006 - Verificar que seleccionar el plan de 6 meses actualiza el precio a $24.990 [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN
- {UMBRAL_AHORRO_MEMBRESIA} = TBD
- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario hace clic en "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona el plan 6 meses.

**Resultado esperado**

El plan 6 meses queda seleccionado y el resumen del modal muestra $24.990.

**Observación**

Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.

---

### TC-B2C42-D-007 - Verificar que sin tarjetas guardadas el bloque de pago muestra Nuevo medio de pago y Agregar [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}
- La cuenta no tiene tarjetas guardadas

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN
- {UMBRAL_AHORRO_MEMBRESIA} = TBD
- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario hace clic en "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario revisa el bloque de medio de pago.

**Resultado esperado**

El bloque de pago muestra "Nuevo medio de pago" con el CTA "Agregar" y ninguna tarjeta.

**Observación**

Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.

---

### TC-B2C42-D-008 - Verificar que con tarjeta guardada el bloque de pago muestra logo, últimos 4 dígitos y Agregar [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}
- La cuenta tiene guardada la tarjeta {TARJETA_CREDITO_001}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN
- {UMBRAL_AHORRO_MEMBRESIA} = TBD
- {TARJETA_CREDITO_001} = TBD
- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario hace clic en "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario revisa el bloque de medio de pago.

**Resultado esperado**

El bloque de pago muestra el logo de la tarjeta con sus 4 últimos dígitos y "Nuevo medio de pago" con el CTA "Agregar".

**Observación**

Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.

---

### TC-B2C42-D-009 - Verificar que seleccionar una tarjeta guardada la asocia al plan de membresía [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}
- La cuenta tiene guardada la tarjeta {TARJETA_CREDITO_001}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN
- {UMBRAL_AHORRO_MEMBRESIA} = TBD
- {TARJETA_CREDITO_001} = TBD
- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario hace clic en "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_001} en el bloque de medio de pago.

**Resultado esperado**

La tarjeta {TARJETA_CREDITO_001} queda seleccionada como medio de pago asociado al plan de membresía.

**Observación**

Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.

---

### TC-B2C42-D-010 - Verificar que agregar una tarjeta nueva la guarda en la cuenta [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}
- La cuenta no tiene guardada la tarjeta {TARJETA_CREDITO_001}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {MI_CUENTA_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/account
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN
- {UMBRAL_AHORRO_MEMBRESIA} = TBD
- {TARJETA_CREDITO_001} = TBD
- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario hace clic en "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario hace clic en "Agregar" en "Nuevo medio de pago" e ingresa los datos de {TARJETA_CREDITO_001}.
6. El sistema tokeniza la tarjeta y la muestra en el bloque de medio de pago.
7. El usuario revisa los medios de pago guardados en Mi cuenta ({MI_CUENTA_URL}).

**Resultado esperado**

La tarjeta {TARJETA_CREDITO_001} queda guardada en la cuenta y disponible para compras ecommerce.

**Observación**

Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.

---

### TC-B2C42-D-011 - Verificar que cambiar el medio de pago reemplaza el asociado al plan [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}
- La cuenta tiene guardadas las tarjetas {TARJETA_CREDITO_001} y {TARJETA_CREDITO_002}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN
- {UMBRAL_AHORRO_MEMBRESIA} = TBD
- {TARJETA_CREDITO_001} = TBD
- {TARJETA_CREDITO_002} = TBD
- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario hace clic en "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_001} en el bloque de medio de pago.
6. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_002}.

**Resultado esperado**

{TARJETA_CREDITO_002} queda seleccionada como medio asociado al plan y {TARJETA_CREDITO_001} deja de estar seleccionada.

**Observación**

Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.

---

### TC-B2C42-D-012 - Verificar que activar el toggle de TyC lo deja marcado como aceptado [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN
- {UMBRAL_AHORRO_MEMBRESIA} = TBD
- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario hace clic en "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario activa el toggle "Acepto los términos y condiciones y las politicas de privacidad".

**Resultado esperado**

El toggle de Términos y Condiciones queda marcado como aceptado.

**Observación**

Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.

---

### TC-B2C42-D-013 - Verificar que con medio de pago y TyC aceptados se habilita Comenzar mis 15 días gratis [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}
- La cuenta tiene guardada la tarjeta {TARJETA_CREDITO_001}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN
- {UMBRAL_AHORRO_MEMBRESIA} = TBD
- {TARJETA_CREDITO_001} = TBD
- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario hace clic en "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_001} en el bloque de medio de pago.
6. El usuario activa el toggle "Acepto los términos y condiciones y las politicas de privacidad".

**Resultado esperado**

El CTA "Comenzar mis 15 días gratis" se habilita.

**Observación**

Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.

---

### TC-B2C42-D-014 - Verificar que sin aceptar los TyC el CTA de contratación sigue deshabilitado [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}
- La cuenta tiene guardada la tarjeta {TARJETA_CREDITO_001}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN
- {UMBRAL_AHORRO_MEMBRESIA} = TBD
- {TARJETA_CREDITO_001} = TBD
- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario hace clic en "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_001} en el bloque de medio de pago.
6. El usuario deja el toggle de TyC desactivado.

**Resultado esperado**

El CTA "Comenzar mis 15 días gratis" permanece deshabilitado.

**Observación**

Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.

---

### TC-B2C42-D-015 - Verificar que con medio de pago y TyC aceptados se habilita Renovar mi membresía [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER}
- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)
- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}
- La cuenta tiene guardada la tarjeta {TARJETA_CREDITO_001}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN
- {UMBRAL_AHORRO_MEMBRESIA} = TBD
- {TARJETA_CREDITO_001} = TBD
- {COMPRADOR_MEMBRESIA_EXPIRADA_USER} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Renovar".
3. El usuario hace clic en "Renovar".
4. El sistema muestra el modal "Renovar membresia".
5. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_001} en el bloque de medio de pago.
6. El usuario activa el toggle "Acepto los términos y condiciones y las politicas de privacidad".

**Resultado esperado**

El CTA "Renovar mi membresía" se habilita.

**Observación**

Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.

---

### TC-B2C42-D-016 - Verificar que Comenzar mis 15 días gratis activa la membresía y muestra el onboarding [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}
- La cuenta tiene guardada la tarjeta {TARJETA_CREDITO_001}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN
- {UMBRAL_AHORRO_MEMBRESIA} = TBD
- {TARJETA_CREDITO_001} = TBD
- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario hace clic en "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_001} en el bloque de medio de pago.
6. El usuario activa el toggle "Acepto los términos y condiciones y las politicas de privacidad".
7. El usuario hace clic en "Comenzar mis 15 días gratis".
8. El sistema muestra un estado de carga en el CTA mientras procesa la contratación.

**Resultado esperado**

La membresía se activa de inmediato y se muestra el onboarding de membresía con la información de beneficios activados.

**Observación**

Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.

---

### TC-B2C42-D-017 - Verificar que al cerrar el onboarding el carro muestra precios de membresía [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}
- La cuenta tiene guardada la tarjeta {TARJETA_CREDITO_001}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN
- {UMBRAL_AHORRO_MEMBRESIA} = TBD
- {TARJETA_CREDITO_001} = TBD
- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario hace clic en "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_001} en el bloque de medio de pago.
6. El usuario activa el toggle "Acepto los términos y condiciones y las politicas de privacidad".
7. El usuario hace clic en "Comenzar mis 15 días gratis".
8. El sistema activa la membresía y muestra el onboarding.
9. El usuario cierra el onboarding.

**Resultado esperado**

El carro se actualiza y {SKU_PRECIO_MIEMBRO} muestra el precio y descuento de membresía; el banner de oferta ya no se muestra.

**Observación**

Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.

---

### TC-B2C42-D-018 - Verificar que tras contratar la membresía llega el email de confirmación [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}
- La cuenta tiene guardada la tarjeta {TARJETA_CREDITO_001}
- Acceso a la casilla de correo de la cuenta

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN
- {UMBRAL_AHORRO_MEMBRESIA} = TBD
- {TARJETA_CREDITO_001} = TBD
- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario hace clic en "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_001} en el bloque de medio de pago.
6. El usuario activa el toggle "Acepto los términos y condiciones y las politicas de privacidad".
7. El usuario hace clic en "Comenzar mis 15 días gratis".
8. El sistema activa la membresía.
9. El usuario revisa la casilla de correo de la cuenta.

**Resultado esperado**

El usuario recibe un email de confirmación de la contratación de la membresía.

**Observación**

Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.

---

### TC-B2C42-D-019 - Verificar que Renovar mi membresía cobra de inmediato y activa la membresía [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER}
- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)
- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}
- La cuenta tiene guardada la tarjeta {TARJETA_CREDITO_001}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN
- {UMBRAL_AHORRO_MEMBRESIA} = TBD
- {TARJETA_CREDITO_001} = TBD
- {COMPRADOR_MEMBRESIA_EXPIRADA_USER} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Renovar".
3. El usuario hace clic en "Renovar".
4. El sistema muestra el modal "Renovar membresia".
5. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_001} en el bloque de medio de pago.
6. El usuario activa el toggle "Acepto los términos y condiciones y las politicas de privacidad".
7. El usuario hace clic en "Renovar mi membresía".
8. El sistema muestra un estado de carga en el CTA mientras procesa la renovación.
9. El usuario cierra el onboarding.

**Resultado esperado**

Se ejecuta el cobro inmediato, la membresía se activa, se muestra el onboarding y al cerrarlo el carro refleja los precios de membresía.

**Observación**

Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.

---

### TC-B2C42-D-020 - Verificar que un fallo en el cobro o activación no activa la membresía [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}
- La cuenta tiene guardada la tarjeta {TARJETA_CREDITO_001}
- DevTools abierto con bloqueo de la request {MEMBRESIA_API_ENDPOINT} (Network request blocking)

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {MEMBRESIA_API_ENDPOINT} = TBD
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN
- {UMBRAL_AHORRO_MEMBRESIA} = TBD
- {TARJETA_CREDITO_001} = TBD
- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario hace clic en "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_001} en el bloque de medio de pago.
6. El usuario activa el toggle "Acepto los términos y condiciones y las politicas de privacidad".
7. El usuario hace clic en "Comenzar mis 15 días gratis".
8. El sistema recibe error del servicio de membresía.
9. El usuario revisa el estado de su membresía en Mi Membresía.

**Resultado esperado**

La membresía no se activa y el carro mantiene los precios sin membresía.

**Observación**

Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.

---

### TC-B2C42-D-021 - Verificar que ante un fallo al contratar llega el email de notificación de fallo [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}
- La cuenta tiene guardada la tarjeta {TARJETA_CREDITO_001}
- DevTools abierto con bloqueo de la request {MEMBRESIA_API_ENDPOINT} (Network request blocking)
- Acceso a la casilla de correo de la cuenta

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {MEMBRESIA_API_ENDPOINT} = TBD
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN
- {UMBRAL_AHORRO_MEMBRESIA} = TBD
- {TARJETA_CREDITO_001} = TBD
- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario hace clic en "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_001} en el bloque de medio de pago.
6. El usuario activa el toggle "Acepto los términos y condiciones y las politicas de privacidad".
7. El usuario hace clic en "Comenzar mis 15 días gratis".
8. El sistema recibe error del servicio de membresía.
9. El usuario revisa la casilla de correo de la cuenta.

**Resultado esperado**

El usuario recibe un correo de notificación de fallo en la contratación de la membresía (RF-13).

**Observación**

Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.

---

### TC-B2C42-D-022 - Verificar que sin ahorro de membresía suficiente no se muestra el banner [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene solo {SKU_VALID_001} (sin precio de membresía): el ahorro potencial es nulo o menor a {UMBRAL_AHORRO_MEMBRESIA}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_VALID_001} = 000000000000675191-UN
- {UMBRAL_AHORRO_MEMBRESIA} = TBD
- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario revisa el carrito buscando el banner de oferta de membresía.

**Resultado esperado**

El banner de oferta de membresía no se muestra y no existe punto de entrada al modal de contratación.

**Observación**

Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.

---

### TC-B2C42-M-001 - Verificar que Lo quiero abre el modal Pagar membresia con la oferta de prueba [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN
- {UMBRAL_AHORRO_MEMBRESIA} = TBD
- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario revisa el contenido del modal.

**Resultado esperado**

El modal muestra: título "Pagar membresia", botón X, selector de plan 3 meses / 6 meses, toggle de TyC desactivado, bloque de medio de pago con el texto "El cobro único de [precio del plan] se realizará con el medio de pago seleccionado después de tu periodo de prueba", sección de beneficios y el CTA con ícono diamante "Comenzar mis 15 días gratis" deshabilitado; si el contenido excede la pantalla, el modal hace scroll.

**Observación**

Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.

---

### TC-B2C42-M-002 - Verificar que Renovar abre el modal Renovar membresia con cobro inmediato [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER}
- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)
- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN
- {UMBRAL_AHORRO_MEMBRESIA} = TBD
- {COMPRADOR_MEMBRESIA_EXPIRADA_USER} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Renovar".
3. El usuario toca "Renovar".
4. El sistema muestra el modal "Renovar membresia".
5. El usuario revisa el contenido del modal.

**Resultado esperado**

El modal muestra: título "Renovar membresia", botón X, selector de plan 3 meses / 6 meses, toggle de TyC desactivado, bloque de medio de pago con el texto "El cobro único de [precio del plan] se realizará de inmediato con el medio de pago seleccionado", sección de beneficios y el CTA con ícono diamante "Renovar mi membresía" deshabilitado.

**Observación**

Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.

---

### TC-B2C42-M-003 - Verificar que para un cliente Nuevo cada plan muestra ícono, 15 días gratis y precio [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN
- {UMBRAL_AHORRO_MEMBRESIA} = TBD
- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario revisa las opciones de plan 3 meses y 6 meses.

**Resultado esperado**

Cada plan muestra su ícono (3 meses / 6 meses), el texto "15 días gratis" y su precio.

**Observación**

Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.

---

### TC-B2C42-M-004 - Verificar que para un cliente Expirado los planes no muestran 15 días gratis [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER}
- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)
- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN
- {UMBRAL_AHORRO_MEMBRESIA} = TBD
- {COMPRADOR_MEMBRESIA_EXPIRADA_USER} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Renovar".
3. El usuario toca "Renovar".
4. El sistema muestra el modal "Renovar membresia".
5. El usuario revisa las opciones de plan 3 meses y 6 meses.

**Resultado esperado**

Cada plan muestra su ícono y su precio, sin el texto "15 días gratis".

**Observación**

Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.

---

### TC-B2C42-M-005 - Verificar que seleccionar el plan de 3 meses actualiza el precio a $14.990 [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN
- {UMBRAL_AHORRO_MEMBRESIA} = TBD
- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona el plan 3 meses.

**Resultado esperado**

El plan 3 meses queda seleccionado y el resumen del modal muestra $14.990.

**Observación**

Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.

---

### TC-B2C42-M-006 - Verificar que seleccionar el plan de 6 meses actualiza el precio a $24.990 [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN
- {UMBRAL_AHORRO_MEMBRESIA} = TBD
- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona el plan 6 meses.

**Resultado esperado**

El plan 6 meses queda seleccionado y el resumen del modal muestra $24.990.

**Observación**

Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.

---

### TC-B2C42-M-007 - Verificar que sin tarjetas guardadas el bloque de pago muestra Nuevo medio de pago y Agregar [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}
- La cuenta no tiene tarjetas guardadas

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN
- {UMBRAL_AHORRO_MEMBRESIA} = TBD
- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario revisa el bloque de medio de pago.

**Resultado esperado**

El bloque de pago muestra "Nuevo medio de pago" con el CTA "Agregar" y ninguna tarjeta.

**Observación**

Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.

---

### TC-B2C42-M-008 - Verificar que con tarjeta guardada el bloque de pago muestra logo, últimos 4 dígitos y Agregar [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}
- La cuenta tiene guardada la tarjeta {TARJETA_CREDITO_001}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN
- {UMBRAL_AHORRO_MEMBRESIA} = TBD
- {TARJETA_CREDITO_001} = TBD
- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario revisa el bloque de medio de pago.

**Resultado esperado**

El bloque de pago muestra el logo de la tarjeta con sus 4 últimos dígitos y "Nuevo medio de pago" con el CTA "Agregar".

**Observación**

Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.

---

### TC-B2C42-M-009 - Verificar que seleccionar una tarjeta guardada la asocia al plan de membresía [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}
- La cuenta tiene guardada la tarjeta {TARJETA_CREDITO_001}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN
- {UMBRAL_AHORRO_MEMBRESIA} = TBD
- {TARJETA_CREDITO_001} = TBD
- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_001} en el bloque de medio de pago.

**Resultado esperado**

La tarjeta {TARJETA_CREDITO_001} queda seleccionada como medio de pago asociado al plan de membresía.

**Observación**

Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.

---

### TC-B2C42-M-010 - Verificar que agregar una tarjeta nueva la guarda en la cuenta [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}
- La cuenta no tiene guardada la tarjeta {TARJETA_CREDITO_001}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {MI_CUENTA_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/account
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN
- {UMBRAL_AHORRO_MEMBRESIA} = TBD
- {TARJETA_CREDITO_001} = TBD
- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario toca "Agregar" en "Nuevo medio de pago" e ingresa los datos de {TARJETA_CREDITO_001}.
6. El sistema tokeniza la tarjeta y la muestra en el bloque de medio de pago.
7. El usuario revisa los medios de pago guardados en Mi cuenta ({MI_CUENTA_URL}).

**Resultado esperado**

La tarjeta {TARJETA_CREDITO_001} queda guardada en la cuenta y disponible para compras ecommerce.

**Observación**

Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.

---

### TC-B2C42-M-011 - Verificar que cambiar el medio de pago reemplaza el asociado al plan [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}
- La cuenta tiene guardadas las tarjetas {TARJETA_CREDITO_001} y {TARJETA_CREDITO_002}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN
- {UMBRAL_AHORRO_MEMBRESIA} = TBD
- {TARJETA_CREDITO_001} = TBD
- {TARJETA_CREDITO_002} = TBD
- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_001} en el bloque de medio de pago.
6. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_002}.

**Resultado esperado**

{TARJETA_CREDITO_002} queda seleccionada como medio asociado al plan y {TARJETA_CREDITO_001} deja de estar seleccionada.

**Observación**

Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.

---

### TC-B2C42-M-012 - Verificar que activar el toggle de TyC lo deja marcado como aceptado [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN
- {UMBRAL_AHORRO_MEMBRESIA} = TBD
- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario activa el toggle "Acepto los términos y condiciones y las politicas de privacidad".

**Resultado esperado**

El toggle de Términos y Condiciones queda marcado como aceptado.

**Observación**

Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.

---

### TC-B2C42-M-013 - Verificar que con medio de pago y TyC aceptados se habilita Comenzar mis 15 días gratis [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}
- La cuenta tiene guardada la tarjeta {TARJETA_CREDITO_001}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN
- {UMBRAL_AHORRO_MEMBRESIA} = TBD
- {TARJETA_CREDITO_001} = TBD
- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_001} en el bloque de medio de pago.
6. El usuario activa el toggle "Acepto los términos y condiciones y las politicas de privacidad".

**Resultado esperado**

El CTA "Comenzar mis 15 días gratis" se habilita.

**Observación**

Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.

---

### TC-B2C42-M-014 - Verificar que sin aceptar los TyC el CTA de contratación sigue deshabilitado [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}
- La cuenta tiene guardada la tarjeta {TARJETA_CREDITO_001}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN
- {UMBRAL_AHORRO_MEMBRESIA} = TBD
- {TARJETA_CREDITO_001} = TBD
- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_001} en el bloque de medio de pago.
6. El usuario deja el toggle de TyC desactivado.

**Resultado esperado**

El CTA "Comenzar mis 15 días gratis" permanece deshabilitado.

**Observación**

Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.

---

### TC-B2C42-M-015 - Verificar que con medio de pago y TyC aceptados se habilita Renovar mi membresía [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER}
- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)
- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}
- La cuenta tiene guardada la tarjeta {TARJETA_CREDITO_001}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN
- {UMBRAL_AHORRO_MEMBRESIA} = TBD
- {TARJETA_CREDITO_001} = TBD
- {COMPRADOR_MEMBRESIA_EXPIRADA_USER} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Renovar".
3. El usuario toca "Renovar".
4. El sistema muestra el modal "Renovar membresia".
5. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_001} en el bloque de medio de pago.
6. El usuario activa el toggle "Acepto los términos y condiciones y las politicas de privacidad".

**Resultado esperado**

El CTA "Renovar mi membresía" se habilita.

**Observación**

Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.

---

### TC-B2C42-M-016 - Verificar que Comenzar mis 15 días gratis activa la membresía y muestra el onboarding [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}
- La cuenta tiene guardada la tarjeta {TARJETA_CREDITO_001}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN
- {UMBRAL_AHORRO_MEMBRESIA} = TBD
- {TARJETA_CREDITO_001} = TBD
- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_001} en el bloque de medio de pago.
6. El usuario activa el toggle "Acepto los términos y condiciones y las politicas de privacidad".
7. El usuario toca "Comenzar mis 15 días gratis".
8. El sistema muestra un estado de carga en el CTA mientras procesa la contratación.

**Resultado esperado**

La membresía se activa de inmediato y se muestra el onboarding de membresía con la información de beneficios activados.

**Observación**

Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.

---

### TC-B2C42-M-017 - Verificar que al cerrar el onboarding el carro muestra precios de membresía [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}
- La cuenta tiene guardada la tarjeta {TARJETA_CREDITO_001}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN
- {UMBRAL_AHORRO_MEMBRESIA} = TBD
- {TARJETA_CREDITO_001} = TBD
- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_001} en el bloque de medio de pago.
6. El usuario activa el toggle "Acepto los términos y condiciones y las politicas de privacidad".
7. El usuario toca "Comenzar mis 15 días gratis".
8. El sistema activa la membresía y muestra el onboarding.
9. El usuario cierra el onboarding.

**Resultado esperado**

El carro se actualiza y {SKU_PRECIO_MIEMBRO} muestra el precio y descuento de membresía; el banner de oferta ya no se muestra.

**Observación**

Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.

---

### TC-B2C42-M-018 - Verificar que tras contratar la membresía llega el email de confirmación [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}
- La cuenta tiene guardada la tarjeta {TARJETA_CREDITO_001}
- Acceso a la casilla de correo de la cuenta

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN
- {UMBRAL_AHORRO_MEMBRESIA} = TBD
- {TARJETA_CREDITO_001} = TBD
- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_001} en el bloque de medio de pago.
6. El usuario activa el toggle "Acepto los términos y condiciones y las politicas de privacidad".
7. El usuario toca "Comenzar mis 15 días gratis".
8. El sistema activa la membresía.
9. El usuario revisa la casilla de correo de la cuenta.

**Resultado esperado**

El usuario recibe un email de confirmación de la contratación de la membresía.

**Observación**

Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.

---

### TC-B2C42-M-019 - Verificar que Renovar mi membresía cobra de inmediato y activa la membresía [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER}
- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)
- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}
- La cuenta tiene guardada la tarjeta {TARJETA_CREDITO_001}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN
- {UMBRAL_AHORRO_MEMBRESIA} = TBD
- {TARJETA_CREDITO_001} = TBD
- {COMPRADOR_MEMBRESIA_EXPIRADA_USER} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Renovar".
3. El usuario toca "Renovar".
4. El sistema muestra el modal "Renovar membresia".
5. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_001} en el bloque de medio de pago.
6. El usuario activa el toggle "Acepto los términos y condiciones y las politicas de privacidad".
7. El usuario toca "Renovar mi membresía".
8. El sistema muestra un estado de carga en el CTA mientras procesa la renovación.
9. El usuario cierra el onboarding.

**Resultado esperado**

Se ejecuta el cobro inmediato, la membresía se activa, se muestra el onboarding y al cerrarlo el carro refleja los precios de membresía.

**Observación**

Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.

---

### TC-B2C42-M-020 - Verificar que un fallo en el cobro o activación no activa la membresía [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}
- La cuenta tiene guardada la tarjeta {TARJETA_CREDITO_001}
- DevTools abierto con bloqueo de la request {MEMBRESIA_API_ENDPOINT} (Network request blocking)

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {MEMBRESIA_API_ENDPOINT} = TBD
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN
- {UMBRAL_AHORRO_MEMBRESIA} = TBD
- {TARJETA_CREDITO_001} = TBD
- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_001} en el bloque de medio de pago.
6. El usuario activa el toggle "Acepto los términos y condiciones y las politicas de privacidad".
7. El usuario toca "Comenzar mis 15 días gratis".
8. El sistema recibe error del servicio de membresía.
9. El usuario revisa el estado de su membresía en Mi Membresía.

**Resultado esperado**

La membresía no se activa y el carro mantiene los precios sin membresía.

**Observación**

Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.

---

### TC-B2C42-M-021 - Verificar que ante un fallo al contratar llega el email de notificación de fallo [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}
- La cuenta tiene guardada la tarjeta {TARJETA_CREDITO_001}
- DevTools abierto con bloqueo de la request {MEMBRESIA_API_ENDPOINT} (Network request blocking)
- Acceso a la casilla de correo de la cuenta

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {MEMBRESIA_API_ENDPOINT} = TBD
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN
- {UMBRAL_AHORRO_MEMBRESIA} = TBD
- {TARJETA_CREDITO_001} = TBD
- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema muestra el modal "Pagar membresia".
5. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_001} en el bloque de medio de pago.
6. El usuario activa el toggle "Acepto los términos y condiciones y las politicas de privacidad".
7. El usuario toca "Comenzar mis 15 días gratis".
8. El sistema recibe error del servicio de membresía.
9. El usuario revisa la casilla de correo de la cuenta.

**Resultado esperado**

El usuario recibe un correo de notificación de fallo en la contratación de la membresía (RF-13).

**Observación**

Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.

---

### TC-B2C42-M-022 - Verificar que sin ahorro de membresía suficiente no se muestra el banner [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-42.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}
- La cuenta nunca tuvo membresía (tipo Nuevo)
- El carro contiene solo {SKU_VALID_001} (sin precio de membresía): el ahorro potencial es nulo o menor a {UMBRAL_AHORRO_MEMBRESIA}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_VALID_001} = 000000000000675191-UN
- {UMBRAL_AHORRO_MEMBRESIA} = TBD
- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario revisa el carrito buscando el banner de oferta de membresía.

**Resultado esperado**

El banner de oferta de membresía no se muestra y no existe punto de entrada al modal de contratación.

**Observación**

Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.

---

<!-- qa-evidence-state
{
 "header": {
  "browsers": {
   "desktop": "chromium",
   "mobile": "chromium"
  },
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "environment": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-42",
  "tc_file": "Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-42 Test Cases.xlsx",
  "title": "B2C-42 (web) - Contratar o renovar membresía desde el carro - Evidencias QA",
  "updated_at": "2026-11-02"
 },
 "history": {
  "2026-11-02": [
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
   "executed_at": "2026-11-02",
   "expected": "El modal muestra: título \"Pagar membresia\", botón X, selector de plan 3 meses / 6 meses, toggle de TyC desactivado, bloque de medio de pago con el texto \"El cobro único de [precio del plan] se realizará con el medio de pago seleccionado después de tu periodo de prueba\", sección de beneficios y el CTA con ícono diamante \"Comenzar mis 15 días gratis\" deshabilitado; si el contenido excede la pantalla, el modal hace scroll.",
   "form_factor": "desktop",
   "id": "TC-B2C42-D-001",
   "name": "Verificar que Lo quiero abre el modal Pagar membresia con la oferta de prueba [Desktop] [Logueado]",
   "observation": "Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}",
   "spec": "tests/B2C-42.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario hace clic en \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario revisa el contenido del modal.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN\n- {UMBRAL_AHORRO_MEMBRESIA} = TBD\n- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El modal muestra: título \"Renovar membresia\", botón X, selector de plan 3 meses / 6 meses, toggle de TyC desactivado, bloque de medio de pago con el texto \"El cobro único de [precio del plan] se realizará de inmediato con el medio de pago seleccionado\", sección de beneficios y el CTA con ícono diamante \"Renovar mi membresía\" deshabilitado.",
   "form_factor": "desktop",
   "id": "TC-B2C42-D-002",
   "name": "Verificar que Renovar abre el modal Renovar membresia con cobro inmediato [Desktop] [Logueado]",
   "observation": "Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER}\n- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)\n- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}",
   "spec": "tests/B2C-42.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Renovar\".\n3. El usuario hace clic en \"Renovar\".\n4. El sistema muestra el modal \"Renovar membresia\".\n5. El usuario revisa el contenido del modal.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN\n- {UMBRAL_AHORRO_MEMBRESIA} = TBD\n- {COMPRADOR_MEMBRESIA_EXPIRADA_USER} = TBD",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Cada plan muestra su ícono (3 meses / 6 meses), el texto \"15 días gratis\" y su precio.",
   "form_factor": "desktop",
   "id": "TC-B2C42-D-003",
   "name": "Verificar que para un cliente Nuevo cada plan muestra ícono, 15 días gratis y precio [Desktop] [Logueado]",
   "observation": "Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}",
   "spec": "tests/B2C-42.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario hace clic en \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario revisa las opciones de plan 3 meses y 6 meses.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN\n- {UMBRAL_AHORRO_MEMBRESIA} = TBD\n- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Cada plan muestra su ícono y su precio, sin el texto \"15 días gratis\".",
   "form_factor": "desktop",
   "id": "TC-B2C42-D-004",
   "name": "Verificar que para un cliente Expirado los planes no muestran 15 días gratis [Desktop] [Logueado]",
   "observation": "Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER}\n- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)\n- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}",
   "spec": "tests/B2C-42.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Renovar\".\n3. El usuario hace clic en \"Renovar\".\n4. El sistema muestra el modal \"Renovar membresia\".\n5. El usuario revisa las opciones de plan 3 meses y 6 meses.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN\n- {UMBRAL_AHORRO_MEMBRESIA} = TBD\n- {COMPRADOR_MEMBRESIA_EXPIRADA_USER} = TBD",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El plan 3 meses queda seleccionado y el resumen del modal muestra $14.990.",
   "form_factor": "desktop",
   "id": "TC-B2C42-D-005",
   "name": "Verificar que seleccionar el plan de 3 meses actualiza el precio a $14.990 [Desktop] [Logueado]",
   "observation": "Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}",
   "spec": "tests/B2C-42.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario hace clic en \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona el plan 3 meses.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN\n- {UMBRAL_AHORRO_MEMBRESIA} = TBD\n- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El plan 6 meses queda seleccionado y el resumen del modal muestra $24.990.",
   "form_factor": "desktop",
   "id": "TC-B2C42-D-006",
   "name": "Verificar que seleccionar el plan de 6 meses actualiza el precio a $24.990 [Desktop] [Logueado]",
   "observation": "Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}",
   "spec": "tests/B2C-42.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario hace clic en \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona el plan 6 meses.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN\n- {UMBRAL_AHORRO_MEMBRESIA} = TBD\n- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El bloque de pago muestra \"Nuevo medio de pago\" con el CTA \"Agregar\" y ninguna tarjeta.",
   "form_factor": "desktop",
   "id": "TC-B2C42-D-007",
   "name": "Verificar que sin tarjetas guardadas el bloque de pago muestra Nuevo medio de pago y Agregar [Desktop] [Logueado]",
   "observation": "Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}\n- La cuenta no tiene tarjetas guardadas",
   "spec": "tests/B2C-42.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario hace clic en \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario revisa el bloque de medio de pago.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN\n- {UMBRAL_AHORRO_MEMBRESIA} = TBD\n- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El bloque de pago muestra el logo de la tarjeta con sus 4 últimos dígitos y \"Nuevo medio de pago\" con el CTA \"Agregar\".",
   "form_factor": "desktop",
   "id": "TC-B2C42-D-008",
   "name": "Verificar que con tarjeta guardada el bloque de pago muestra logo, últimos 4 dígitos y Agregar [Desktop] [Logueado]",
   "observation": "Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}\n- La cuenta tiene guardada la tarjeta {TARJETA_CREDITO_001}",
   "spec": "tests/B2C-42.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario hace clic en \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario revisa el bloque de medio de pago.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN\n- {UMBRAL_AHORRO_MEMBRESIA} = TBD\n- {TARJETA_CREDITO_001} = TBD\n- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "La tarjeta {TARJETA_CREDITO_001} queda seleccionada como medio de pago asociado al plan de membresía.",
   "form_factor": "desktop",
   "id": "TC-B2C42-D-009",
   "name": "Verificar que seleccionar una tarjeta guardada la asocia al plan de membresía [Desktop] [Logueado]",
   "observation": "Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}\n- La cuenta tiene guardada la tarjeta {TARJETA_CREDITO_001}",
   "spec": "tests/B2C-42.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario hace clic en \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_001} en el bloque de medio de pago.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN\n- {UMBRAL_AHORRO_MEMBRESIA} = TBD\n- {TARJETA_CREDITO_001} = TBD\n- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "La tarjeta {TARJETA_CREDITO_001} queda guardada en la cuenta y disponible para compras ecommerce.",
   "form_factor": "desktop",
   "id": "TC-B2C42-D-010",
   "name": "Verificar que agregar una tarjeta nueva la guarda en la cuenta [Desktop] [Logueado]",
   "observation": "Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}\n- La cuenta no tiene guardada la tarjeta {TARJETA_CREDITO_001}",
   "spec": "tests/B2C-42.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario hace clic en \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario hace clic en \"Agregar\" en \"Nuevo medio de pago\" e ingresa los datos de {TARJETA_CREDITO_001}.\n6. El sistema tokeniza la tarjeta y la muestra en el bloque de medio de pago.\n7. El usuario revisa los medios de pago guardados en Mi cuenta ({MI_CUENTA_URL}).",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {MI_CUENTA_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/account\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN\n- {UMBRAL_AHORRO_MEMBRESIA} = TBD\n- {TARJETA_CREDITO_001} = TBD\n- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "{TARJETA_CREDITO_002} queda seleccionada como medio asociado al plan y {TARJETA_CREDITO_001} deja de estar seleccionada.",
   "form_factor": "desktop",
   "id": "TC-B2C42-D-011",
   "name": "Verificar que cambiar el medio de pago reemplaza el asociado al plan [Desktop] [Logueado]",
   "observation": "Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}\n- La cuenta tiene guardadas las tarjetas {TARJETA_CREDITO_001} y {TARJETA_CREDITO_002}",
   "spec": "tests/B2C-42.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario hace clic en \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_001} en el bloque de medio de pago.\n6. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_002}.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN\n- {UMBRAL_AHORRO_MEMBRESIA} = TBD\n- {TARJETA_CREDITO_001} = TBD\n- {TARJETA_CREDITO_002} = TBD\n- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El toggle de Términos y Condiciones queda marcado como aceptado.",
   "form_factor": "desktop",
   "id": "TC-B2C42-D-012",
   "name": "Verificar que activar el toggle de TyC lo deja marcado como aceptado [Desktop] [Logueado]",
   "observation": "Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}",
   "spec": "tests/B2C-42.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario hace clic en \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN\n- {UMBRAL_AHORRO_MEMBRESIA} = TBD\n- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El CTA \"Comenzar mis 15 días gratis\" se habilita.",
   "form_factor": "desktop",
   "id": "TC-B2C42-D-013",
   "name": "Verificar que con medio de pago y TyC aceptados se habilita Comenzar mis 15 días gratis [Desktop] [Logueado]",
   "observation": "Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}\n- La cuenta tiene guardada la tarjeta {TARJETA_CREDITO_001}",
   "spec": "tests/B2C-42.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario hace clic en \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_001} en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN\n- {UMBRAL_AHORRO_MEMBRESIA} = TBD\n- {TARJETA_CREDITO_001} = TBD\n- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El CTA \"Comenzar mis 15 días gratis\" permanece deshabilitado.",
   "form_factor": "desktop",
   "id": "TC-B2C42-D-014",
   "name": "Verificar que sin aceptar los TyC el CTA de contratación sigue deshabilitado [Desktop] [Logueado]",
   "observation": "Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}\n- La cuenta tiene guardada la tarjeta {TARJETA_CREDITO_001}",
   "spec": "tests/B2C-42.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario hace clic en \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_001} en el bloque de medio de pago.\n6. El usuario deja el toggle de TyC desactivado.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN\n- {UMBRAL_AHORRO_MEMBRESIA} = TBD\n- {TARJETA_CREDITO_001} = TBD\n- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El CTA \"Renovar mi membresía\" se habilita.",
   "form_factor": "desktop",
   "id": "TC-B2C42-D-015",
   "name": "Verificar que con medio de pago y TyC aceptados se habilita Renovar mi membresía [Desktop] [Logueado]",
   "observation": "Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER}\n- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)\n- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}\n- La cuenta tiene guardada la tarjeta {TARJETA_CREDITO_001}",
   "spec": "tests/B2C-42.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Renovar\".\n3. El usuario hace clic en \"Renovar\".\n4. El sistema muestra el modal \"Renovar membresia\".\n5. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_001} en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN\n- {UMBRAL_AHORRO_MEMBRESIA} = TBD\n- {TARJETA_CREDITO_001} = TBD\n- {COMPRADOR_MEMBRESIA_EXPIRADA_USER} = TBD",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "La membresía se activa de inmediato y se muestra el onboarding de membresía con la información de beneficios activados.",
   "form_factor": "desktop",
   "id": "TC-B2C42-D-016",
   "name": "Verificar que Comenzar mis 15 días gratis activa la membresía y muestra el onboarding [Desktop] [Logueado]",
   "observation": "Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}\n- La cuenta tiene guardada la tarjeta {TARJETA_CREDITO_001}",
   "spec": "tests/B2C-42.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario hace clic en \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_001} en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".\n7. El usuario hace clic en \"Comenzar mis 15 días gratis\".\n8. El sistema muestra un estado de carga en el CTA mientras procesa la contratación.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN\n- {UMBRAL_AHORRO_MEMBRESIA} = TBD\n- {TARJETA_CREDITO_001} = TBD\n- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El carro se actualiza y {SKU_PRECIO_MIEMBRO} muestra el precio y descuento de membresía; el banner de oferta ya no se muestra.",
   "form_factor": "desktop",
   "id": "TC-B2C42-D-017",
   "name": "Verificar que al cerrar el onboarding el carro muestra precios de membresía [Desktop] [Logueado]",
   "observation": "Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}\n- La cuenta tiene guardada la tarjeta {TARJETA_CREDITO_001}",
   "spec": "tests/B2C-42.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario hace clic en \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_001} en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".\n7. El usuario hace clic en \"Comenzar mis 15 días gratis\".\n8. El sistema activa la membresía y muestra el onboarding.\n9. El usuario cierra el onboarding.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN\n- {UMBRAL_AHORRO_MEMBRESIA} = TBD\n- {TARJETA_CREDITO_001} = TBD\n- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El usuario recibe un email de confirmación de la contratación de la membresía.",
   "form_factor": "desktop",
   "id": "TC-B2C42-D-018",
   "name": "Verificar que tras contratar la membresía llega el email de confirmación [Desktop] [Logueado]",
   "observation": "Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}\n- La cuenta tiene guardada la tarjeta {TARJETA_CREDITO_001}\n- Acceso a la casilla de correo de la cuenta",
   "spec": "tests/B2C-42.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario hace clic en \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_001} en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".\n7. El usuario hace clic en \"Comenzar mis 15 días gratis\".\n8. El sistema activa la membresía.\n9. El usuario revisa la casilla de correo de la cuenta.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN\n- {UMBRAL_AHORRO_MEMBRESIA} = TBD\n- {TARJETA_CREDITO_001} = TBD\n- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Se ejecuta el cobro inmediato, la membresía se activa, se muestra el onboarding y al cerrarlo el carro refleja los precios de membresía.",
   "form_factor": "desktop",
   "id": "TC-B2C42-D-019",
   "name": "Verificar que Renovar mi membresía cobra de inmediato y activa la membresía [Desktop] [Logueado]",
   "observation": "Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER}\n- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)\n- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}\n- La cuenta tiene guardada la tarjeta {TARJETA_CREDITO_001}",
   "spec": "tests/B2C-42.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Renovar\".\n3. El usuario hace clic en \"Renovar\".\n4. El sistema muestra el modal \"Renovar membresia\".\n5. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_001} en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".\n7. El usuario hace clic en \"Renovar mi membresía\".\n8. El sistema muestra un estado de carga en el CTA mientras procesa la renovación.\n9. El usuario cierra el onboarding.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN\n- {UMBRAL_AHORRO_MEMBRESIA} = TBD\n- {TARJETA_CREDITO_001} = TBD\n- {COMPRADOR_MEMBRESIA_EXPIRADA_USER} = TBD",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "La membresía no se activa y el carro mantiene los precios sin membresía.",
   "form_factor": "desktop",
   "id": "TC-B2C42-D-020",
   "name": "Verificar que un fallo en el cobro o activación no activa la membresía [Desktop] [Logueado]",
   "observation": "Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}\n- La cuenta tiene guardada la tarjeta {TARJETA_CREDITO_001}\n- DevTools abierto con bloqueo de la request {MEMBRESIA_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-42.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario hace clic en \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_001} en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".\n7. El usuario hace clic en \"Comenzar mis 15 días gratis\".\n8. El sistema recibe error del servicio de membresía.\n9. El usuario revisa el estado de su membresía en Mi Membresía.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {MEMBRESIA_API_ENDPOINT} = TBD\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN\n- {UMBRAL_AHORRO_MEMBRESIA} = TBD\n- {TARJETA_CREDITO_001} = TBD\n- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El usuario recibe un correo de notificación de fallo en la contratación de la membresía (RF-13).",
   "form_factor": "desktop",
   "id": "TC-B2C42-D-021",
   "name": "Verificar que ante un fallo al contratar llega el email de notificación de fallo [Desktop] [Logueado]",
   "observation": "Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}\n- La cuenta tiene guardada la tarjeta {TARJETA_CREDITO_001}\n- DevTools abierto con bloqueo de la request {MEMBRESIA_API_ENDPOINT} (Network request blocking)\n- Acceso a la casilla de correo de la cuenta",
   "spec": "tests/B2C-42.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario hace clic en \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_001} en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".\n7. El usuario hace clic en \"Comenzar mis 15 días gratis\".\n8. El sistema recibe error del servicio de membresía.\n9. El usuario revisa la casilla de correo de la cuenta.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {MEMBRESIA_API_ENDPOINT} = TBD\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN\n- {UMBRAL_AHORRO_MEMBRESIA} = TBD\n- {TARJETA_CREDITO_001} = TBD\n- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El banner de oferta de membresía no se muestra y no existe punto de entrada al modal de contratación.",
   "form_factor": "desktop",
   "id": "TC-B2C42-D-022",
   "name": "Verificar que sin ahorro de membresía suficiente no se muestra el banner [Desktop] [Logueado]",
   "observation": "Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene solo {SKU_VALID_001} (sin precio de membresía): el ahorro potencial es nulo o menor a {UMBRAL_AHORRO_MEMBRESIA}",
   "spec": "tests/B2C-42.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario revisa el carrito buscando el banner de oferta de membresía.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UMBRAL_AHORRO_MEMBRESIA} = TBD\n- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El modal muestra: título \"Pagar membresia\", botón X, selector de plan 3 meses / 6 meses, toggle de TyC desactivado, bloque de medio de pago con el texto \"El cobro único de [precio del plan] se realizará con el medio de pago seleccionado después de tu periodo de prueba\", sección de beneficios y el CTA con ícono diamante \"Comenzar mis 15 días gratis\" deshabilitado; si el contenido excede la pantalla, el modal hace scroll.",
   "form_factor": "mobile",
   "id": "TC-B2C42-M-001",
   "name": "Verificar que Lo quiero abre el modal Pagar membresia con la oferta de prueba [Mobile] [Logueado]",
   "observation": "Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}",
   "spec": "tests/B2C-42.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario revisa el contenido del modal.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN\n- {UMBRAL_AHORRO_MEMBRESIA} = TBD\n- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El modal muestra: título \"Renovar membresia\", botón X, selector de plan 3 meses / 6 meses, toggle de TyC desactivado, bloque de medio de pago con el texto \"El cobro único de [precio del plan] se realizará de inmediato con el medio de pago seleccionado\", sección de beneficios y el CTA con ícono diamante \"Renovar mi membresía\" deshabilitado.",
   "form_factor": "mobile",
   "id": "TC-B2C42-M-002",
   "name": "Verificar que Renovar abre el modal Renovar membresia con cobro inmediato [Mobile] [Logueado]",
   "observation": "Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER}\n- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)\n- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}",
   "spec": "tests/B2C-42.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Renovar\".\n3. El usuario toca \"Renovar\".\n4. El sistema muestra el modal \"Renovar membresia\".\n5. El usuario revisa el contenido del modal.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN\n- {UMBRAL_AHORRO_MEMBRESIA} = TBD\n- {COMPRADOR_MEMBRESIA_EXPIRADA_USER} = TBD",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Cada plan muestra su ícono (3 meses / 6 meses), el texto \"15 días gratis\" y su precio.",
   "form_factor": "mobile",
   "id": "TC-B2C42-M-003",
   "name": "Verificar que para un cliente Nuevo cada plan muestra ícono, 15 días gratis y precio [Mobile] [Logueado]",
   "observation": "Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}",
   "spec": "tests/B2C-42.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario revisa las opciones de plan 3 meses y 6 meses.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN\n- {UMBRAL_AHORRO_MEMBRESIA} = TBD\n- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Cada plan muestra su ícono y su precio, sin el texto \"15 días gratis\".",
   "form_factor": "mobile",
   "id": "TC-B2C42-M-004",
   "name": "Verificar que para un cliente Expirado los planes no muestran 15 días gratis [Mobile] [Logueado]",
   "observation": "Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER}\n- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)\n- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}",
   "spec": "tests/B2C-42.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Renovar\".\n3. El usuario toca \"Renovar\".\n4. El sistema muestra el modal \"Renovar membresia\".\n5. El usuario revisa las opciones de plan 3 meses y 6 meses.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN\n- {UMBRAL_AHORRO_MEMBRESIA} = TBD\n- {COMPRADOR_MEMBRESIA_EXPIRADA_USER} = TBD",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El plan 3 meses queda seleccionado y el resumen del modal muestra $14.990.",
   "form_factor": "mobile",
   "id": "TC-B2C42-M-005",
   "name": "Verificar que seleccionar el plan de 3 meses actualiza el precio a $14.990 [Mobile] [Logueado]",
   "observation": "Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}",
   "spec": "tests/B2C-42.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona el plan 3 meses.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN\n- {UMBRAL_AHORRO_MEMBRESIA} = TBD\n- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El plan 6 meses queda seleccionado y el resumen del modal muestra $24.990.",
   "form_factor": "mobile",
   "id": "TC-B2C42-M-006",
   "name": "Verificar que seleccionar el plan de 6 meses actualiza el precio a $24.990 [Mobile] [Logueado]",
   "observation": "Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}",
   "spec": "tests/B2C-42.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona el plan 6 meses.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN\n- {UMBRAL_AHORRO_MEMBRESIA} = TBD\n- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El bloque de pago muestra \"Nuevo medio de pago\" con el CTA \"Agregar\" y ninguna tarjeta.",
   "form_factor": "mobile",
   "id": "TC-B2C42-M-007",
   "name": "Verificar que sin tarjetas guardadas el bloque de pago muestra Nuevo medio de pago y Agregar [Mobile] [Logueado]",
   "observation": "Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}\n- La cuenta no tiene tarjetas guardadas",
   "spec": "tests/B2C-42.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario revisa el bloque de medio de pago.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN\n- {UMBRAL_AHORRO_MEMBRESIA} = TBD\n- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El bloque de pago muestra el logo de la tarjeta con sus 4 últimos dígitos y \"Nuevo medio de pago\" con el CTA \"Agregar\".",
   "form_factor": "mobile",
   "id": "TC-B2C42-M-008",
   "name": "Verificar que con tarjeta guardada el bloque de pago muestra logo, últimos 4 dígitos y Agregar [Mobile] [Logueado]",
   "observation": "Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}\n- La cuenta tiene guardada la tarjeta {TARJETA_CREDITO_001}",
   "spec": "tests/B2C-42.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario revisa el bloque de medio de pago.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN\n- {UMBRAL_AHORRO_MEMBRESIA} = TBD\n- {TARJETA_CREDITO_001} = TBD\n- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "La tarjeta {TARJETA_CREDITO_001} queda seleccionada como medio de pago asociado al plan de membresía.",
   "form_factor": "mobile",
   "id": "TC-B2C42-M-009",
   "name": "Verificar que seleccionar una tarjeta guardada la asocia al plan de membresía [Mobile] [Logueado]",
   "observation": "Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}\n- La cuenta tiene guardada la tarjeta {TARJETA_CREDITO_001}",
   "spec": "tests/B2C-42.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_001} en el bloque de medio de pago.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN\n- {UMBRAL_AHORRO_MEMBRESIA} = TBD\n- {TARJETA_CREDITO_001} = TBD\n- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "La tarjeta {TARJETA_CREDITO_001} queda guardada en la cuenta y disponible para compras ecommerce.",
   "form_factor": "mobile",
   "id": "TC-B2C42-M-010",
   "name": "Verificar que agregar una tarjeta nueva la guarda en la cuenta [Mobile] [Logueado]",
   "observation": "Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}\n- La cuenta no tiene guardada la tarjeta {TARJETA_CREDITO_001}",
   "spec": "tests/B2C-42.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario toca \"Agregar\" en \"Nuevo medio de pago\" e ingresa los datos de {TARJETA_CREDITO_001}.\n6. El sistema tokeniza la tarjeta y la muestra en el bloque de medio de pago.\n7. El usuario revisa los medios de pago guardados en Mi cuenta ({MI_CUENTA_URL}).",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {MI_CUENTA_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/account\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN\n- {UMBRAL_AHORRO_MEMBRESIA} = TBD\n- {TARJETA_CREDITO_001} = TBD\n- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "{TARJETA_CREDITO_002} queda seleccionada como medio asociado al plan y {TARJETA_CREDITO_001} deja de estar seleccionada.",
   "form_factor": "mobile",
   "id": "TC-B2C42-M-011",
   "name": "Verificar que cambiar el medio de pago reemplaza el asociado al plan [Mobile] [Logueado]",
   "observation": "Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}\n- La cuenta tiene guardadas las tarjetas {TARJETA_CREDITO_001} y {TARJETA_CREDITO_002}",
   "spec": "tests/B2C-42.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_001} en el bloque de medio de pago.\n6. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_002}.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN\n- {UMBRAL_AHORRO_MEMBRESIA} = TBD\n- {TARJETA_CREDITO_001} = TBD\n- {TARJETA_CREDITO_002} = TBD\n- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El toggle de Términos y Condiciones queda marcado como aceptado.",
   "form_factor": "mobile",
   "id": "TC-B2C42-M-012",
   "name": "Verificar que activar el toggle de TyC lo deja marcado como aceptado [Mobile] [Logueado]",
   "observation": "Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}",
   "spec": "tests/B2C-42.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN\n- {UMBRAL_AHORRO_MEMBRESIA} = TBD\n- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El CTA \"Comenzar mis 15 días gratis\" se habilita.",
   "form_factor": "mobile",
   "id": "TC-B2C42-M-013",
   "name": "Verificar que con medio de pago y TyC aceptados se habilita Comenzar mis 15 días gratis [Mobile] [Logueado]",
   "observation": "Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}\n- La cuenta tiene guardada la tarjeta {TARJETA_CREDITO_001}",
   "spec": "tests/B2C-42.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_001} en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN\n- {UMBRAL_AHORRO_MEMBRESIA} = TBD\n- {TARJETA_CREDITO_001} = TBD\n- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El CTA \"Comenzar mis 15 días gratis\" permanece deshabilitado.",
   "form_factor": "mobile",
   "id": "TC-B2C42-M-014",
   "name": "Verificar que sin aceptar los TyC el CTA de contratación sigue deshabilitado [Mobile] [Logueado]",
   "observation": "Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}\n- La cuenta tiene guardada la tarjeta {TARJETA_CREDITO_001}",
   "spec": "tests/B2C-42.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_001} en el bloque de medio de pago.\n6. El usuario deja el toggle de TyC desactivado.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN\n- {UMBRAL_AHORRO_MEMBRESIA} = TBD\n- {TARJETA_CREDITO_001} = TBD\n- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El CTA \"Renovar mi membresía\" se habilita.",
   "form_factor": "mobile",
   "id": "TC-B2C42-M-015",
   "name": "Verificar que con medio de pago y TyC aceptados se habilita Renovar mi membresía [Mobile] [Logueado]",
   "observation": "Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER}\n- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)\n- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}\n- La cuenta tiene guardada la tarjeta {TARJETA_CREDITO_001}",
   "spec": "tests/B2C-42.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Renovar\".\n3. El usuario toca \"Renovar\".\n4. El sistema muestra el modal \"Renovar membresia\".\n5. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_001} en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN\n- {UMBRAL_AHORRO_MEMBRESIA} = TBD\n- {TARJETA_CREDITO_001} = TBD\n- {COMPRADOR_MEMBRESIA_EXPIRADA_USER} = TBD",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "La membresía se activa de inmediato y se muestra el onboarding de membresía con la información de beneficios activados.",
   "form_factor": "mobile",
   "id": "TC-B2C42-M-016",
   "name": "Verificar que Comenzar mis 15 días gratis activa la membresía y muestra el onboarding [Mobile] [Logueado]",
   "observation": "Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}\n- La cuenta tiene guardada la tarjeta {TARJETA_CREDITO_001}",
   "spec": "tests/B2C-42.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_001} en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".\n7. El usuario toca \"Comenzar mis 15 días gratis\".\n8. El sistema muestra un estado de carga en el CTA mientras procesa la contratación.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN\n- {UMBRAL_AHORRO_MEMBRESIA} = TBD\n- {TARJETA_CREDITO_001} = TBD\n- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El carro se actualiza y {SKU_PRECIO_MIEMBRO} muestra el precio y descuento de membresía; el banner de oferta ya no se muestra.",
   "form_factor": "mobile",
   "id": "TC-B2C42-M-017",
   "name": "Verificar que al cerrar el onboarding el carro muestra precios de membresía [Mobile] [Logueado]",
   "observation": "Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}\n- La cuenta tiene guardada la tarjeta {TARJETA_CREDITO_001}",
   "spec": "tests/B2C-42.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_001} en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".\n7. El usuario toca \"Comenzar mis 15 días gratis\".\n8. El sistema activa la membresía y muestra el onboarding.\n9. El usuario cierra el onboarding.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN\n- {UMBRAL_AHORRO_MEMBRESIA} = TBD\n- {TARJETA_CREDITO_001} = TBD\n- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El usuario recibe un email de confirmación de la contratación de la membresía.",
   "form_factor": "mobile",
   "id": "TC-B2C42-M-018",
   "name": "Verificar que tras contratar la membresía llega el email de confirmación [Mobile] [Logueado]",
   "observation": "Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}\n- La cuenta tiene guardada la tarjeta {TARJETA_CREDITO_001}\n- Acceso a la casilla de correo de la cuenta",
   "spec": "tests/B2C-42.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_001} en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".\n7. El usuario toca \"Comenzar mis 15 días gratis\".\n8. El sistema activa la membresía.\n9. El usuario revisa la casilla de correo de la cuenta.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN\n- {UMBRAL_AHORRO_MEMBRESIA} = TBD\n- {TARJETA_CREDITO_001} = TBD\n- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Se ejecuta el cobro inmediato, la membresía se activa, se muestra el onboarding y al cerrarlo el carro refleja los precios de membresía.",
   "form_factor": "mobile",
   "id": "TC-B2C42-M-019",
   "name": "Verificar que Renovar mi membresía cobra de inmediato y activa la membresía [Mobile] [Logueado]",
   "observation": "Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER}\n- La cuenta tuvo membresía y ya no está vigente (tipo Expirado)\n- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}\n- La cuenta tiene guardada la tarjeta {TARJETA_CREDITO_001}",
   "spec": "tests/B2C-42.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Renovar\".\n3. El usuario toca \"Renovar\".\n4. El sistema muestra el modal \"Renovar membresia\".\n5. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_001} en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".\n7. El usuario toca \"Renovar mi membresía\".\n8. El sistema muestra un estado de carga en el CTA mientras procesa la renovación.\n9. El usuario cierra el onboarding.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN\n- {UMBRAL_AHORRO_MEMBRESIA} = TBD\n- {TARJETA_CREDITO_001} = TBD\n- {COMPRADOR_MEMBRESIA_EXPIRADA_USER} = TBD",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "La membresía no se activa y el carro mantiene los precios sin membresía.",
   "form_factor": "mobile",
   "id": "TC-B2C42-M-020",
   "name": "Verificar que un fallo en el cobro o activación no activa la membresía [Mobile] [Logueado]",
   "observation": "Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}\n- La cuenta tiene guardada la tarjeta {TARJETA_CREDITO_001}\n- DevTools abierto con bloqueo de la request {MEMBRESIA_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-42.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_001} en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".\n7. El usuario toca \"Comenzar mis 15 días gratis\".\n8. El sistema recibe error del servicio de membresía.\n9. El usuario revisa el estado de su membresía en Mi Membresía.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {MEMBRESIA_API_ENDPOINT} = TBD\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN\n- {UMBRAL_AHORRO_MEMBRESIA} = TBD\n- {TARJETA_CREDITO_001} = TBD\n- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El usuario recibe un correo de notificación de fallo en la contratación de la membresía (RF-13).",
   "form_factor": "mobile",
   "id": "TC-B2C42-M-021",
   "name": "Verificar que ante un fallo al contratar llega el email de notificación de fallo [Mobile] [Logueado]",
   "observation": "Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene {SKU_PRECIO_MIEMBRO} y el ahorro potencial por membresía supera {UMBRAL_AHORRO_MEMBRESIA}\n- La cuenta tiene guardada la tarjeta {TARJETA_CREDITO_001}\n- DevTools abierto con bloqueo de la request {MEMBRESIA_API_ENDPOINT} (Network request blocking)\n- Acceso a la casilla de correo de la cuenta",
   "spec": "tests/B2C-42.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito y muestra el banner de oferta de membresía con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema muestra el modal \"Pagar membresia\".\n5. El usuario selecciona la tarjeta guardada {TARJETA_CREDITO_001} en el bloque de medio de pago.\n6. El usuario activa el toggle \"Acepto los términos y condiciones y las politicas de privacidad\".\n7. El usuario toca \"Comenzar mis 15 días gratis\".\n8. El sistema recibe error del servicio de membresía.\n9. El usuario revisa la casilla de correo de la cuenta.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {MEMBRESIA_API_ENDPOINT} = TBD\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN\n- {UMBRAL_AHORRO_MEMBRESIA} = TBD\n- {TARJETA_CREDITO_001} = TBD\n- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El banner de oferta de membresía no se muestra y no existe punto de entrada al modal de contratación.",
   "form_factor": "mobile",
   "id": "TC-B2C42-M-022",
   "name": "Verificar que sin ahorro de membresía suficiente no se muestra el banner [Mobile] [Logueado]",
   "observation": "Causa: el banner de oferta de membresía («Lo quiero» / «Renovar») no aparece en el carro del ambiente, así que el flujo del caso no se puede iniciar. Con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} y 21 × {SKU_PRECIO_MIEMBRO} (ahorro potencial sobre {UMBRAL_AHORRO_MEMBRESIA}) el carro muestra el precio normal ($3.890 c/u) y ningún banner ni precio de socio; mismo resultado el 12-oct. Acción requerida: desplegar la funcionalidad de membresía en el carro en el ambiente (HU B2C-37 CA13, tarea B2C-409) y repetir el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta nunca tuvo membresía (tipo Nuevo)\n- El carro contiene solo {SKU_VALID_001} (sin precio de membresía): el ahorro potencial es nulo o menor a {UMBRAL_AHORRO_MEMBRESIA}",
   "spec": "tests/B2C-42.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario revisa el carrito buscando el banner de oferta de membresía.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UMBRAL_AHORRO_MEMBRESIA} = TBD\n- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K",
   "viewport": "390x844"
  }
 ]
}
-->
