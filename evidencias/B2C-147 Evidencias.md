# B2C-147 - Ver y seleccionar la ventana de despacho o retiro (WEB) - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-147 |
| Última actualización | 2026-10-16 |
| Ejecutado por | Victor Chirinos |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | webkit |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-147 WEB Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 28 |
| Aprobado | 11 |
| Rechazado | 2 |
| **Total** | **41** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-16 | 41 | TC-B2C147-D-001, TC-B2C147-D-002, TC-B2C147-D-003, TC-B2C147-D-004, TC-B2C147-D-005, TC-B2C147-D-006, TC-B2C147-D-007, TC-B2C147-D-008, TC-B2C147-D-009, TC-B2C147-D-010, TC-B2C147-D-011, TC-B2C147-D-012, TC-B2C147-D-013, TC-B2C147-D-014, TC-B2C147-D-015, TC-B2C147-D-016, TC-B2C147-D-017, TC-B2C147-D-018, TC-B2C147-D-020, TC-B2C147-D-021, TC-B2C147-D-022, TC-B2C147-M-001, TC-B2C147-M-002, TC-B2C147-M-003, TC-B2C147-M-004, TC-B2C147-M-005, TC-B2C147-M-006, TC-B2C147-M-007, TC-B2C147-M-008, TC-B2C147-M-009, TC-B2C147-M-010, TC-B2C147-M-011, TC-B2C147-M-012, TC-B2C147-M-013, TC-B2C147-M-014, TC-B2C147-M-015, TC-B2C147-M-016, TC-B2C147-M-017, TC-B2C147-M-018, TC-B2C147-M-019, TC-B2C147-M-020 |

## Detalle por caso de prueba

### TC-B2C147-D-001 - Verificar que al continuar desde el carro Mis Envíos muestra el skeleton y luego Datos de entrega [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 116.3 s |
| Spec | tests/B2C-147.spec.ts:241 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- DevTools abierto con throttling de red "Slow 3G"

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.

**Resultado esperado**

Se muestra el skeleton con el título "Datos de entrega" y placeholders grises; al completar la carga se muestra la página "Datos de entrega".

**Resultado obtenido**

Con {USER_AUTH_001} en despacho a Calle Uno 23, La Florida y 11 × {SKU_VALID_001}: al continuar se ve el skeleton (placeholders grises) con el título 'Datos de entrega' y luego la página completa. 'Slow 3G' simulado retrasando 6 s la consulta de ventanas a Janis (POST …/smu-delivery/…/schedule).

**Observación**

Con {USER_AUTH_001} en despacho a Calle Uno 23, La Florida y 11 × {SKU_VALID_001}: al continuar se ve el skeleton (placeholders grises) con el título 'Datos de entrega' y luego la página completa. 'Slow 3G' simulado retrasando 6 s la consulta de ventanas a Janis (POST …/smu-delivery/…/schedule).

**Evidencia**

![Paso 2 — carro cargado](<B2C-147 Evidencias/TC-B2C147-D-001-p02-carro-cargado.png>)

![Paso 3 — skeleton con el titulo datos de entrega](<B2C-147 Evidencias/TC-B2C147-D-001-p03-skeleton-con-el-titulo-datos-de-entrega.png>)

![Estado final del caso](<B2C-147 Evidencias/TC-B2C147-D-001.png>)

---

### TC-B2C147-D-002 - Verificar que un usuario sin sesión que intenta ir a Mis Envíos es redirigido al inicio de sesión [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 58.1 s |
| Spec | tests/B2C-147.spec.ts:259 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, 20000, 000000000000675191-UN, 11

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega".

**Resultado esperado**

El usuario es redirigido al flujo de inicio de sesión y la página Mis Envíos no se muestra.

**Resultado obtenido**

Invitado con {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida y 11 × {SKU_VALID_001}: 'Continuar con la entrega' abre '¡Hola, ingresa aquí!' y la URL sigue en /cart; Mis Envíos no se pinta en ningún momento.

**Observación**

Invitado con {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida y 11 × {SKU_VALID_001}: 'Continuar con la entrega' abre '¡Hola, ingresa aquí!' y la URL sigue en /cart; Mis Envíos no se pinta en ningún momento.

**Evidencia**

![Paso 2 — carro de invitado sobre el minimo](<B2C-147 Evidencias/TC-B2C147-D-002-p02-carro-de-invitado-sobre-el-minimo.png>)

![Paso 3 — inicio de sesion al continuar](<B2C-147 Evidencias/TC-B2C147-D-002-p03-inicio-de-sesion-al-continuar.png>)

![Estado final del caso](<B2C-147 Evidencias/TC-B2C147-D-002.png>)

---

### TC-B2C147-D-003 - Verificar que con despacho a domicilio la página Datos de entrega muestra todos sus elementos [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 61.0 s |
| Spec | tests/B2C-147.spec.ts:277 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario revisa la página.

**Resultado esperado**

La página muestra en dos columnas: izquierda con "<", título "Datos de entrega", tarjeta rosada "Enviaremos tu compra a:" con la dirección y chevron, "Fecha de entrega", "¿Cuándo quieres recibir tu compra?", selector de fechas, "¿Cuál es el horario de tu preferencia?" y horarios; derecha con resumen de totales, CTA "Ir a pagar" habilitado y "¿Recibe alguien más?"; header y footer simplificados.

**Resultado obtenido**

Despacho a Calle Uno 23, La Florida: header y footer simplificados, '<', título, tarjeta 'Enviaremos tu compra a:' con chevron, Fecha de entrega, selector de fechas, horarios con precio ($2.990), '¿Recibe alguien más?', Despacho / Subtotal / Subtotal con Unipay e 'Ir a pagar' habilitado. La UI dice '¿Cuál es tu horario de preferencia?' (el TC: '¿Cuál es el horario de tu preferencia?'; igual que el CA6).

**Observación**

Despacho a Calle Uno 23, La Florida: header y footer simplificados, '<', título, tarjeta 'Enviaremos tu compra a:' con chevron, Fecha de entrega, selector de fechas, horarios con precio ($2.990), '¿Recibe alguien más?', Despacho / Subtotal / Subtotal con Unipay e 'Ir a pagar' habilitado. La UI dice '¿Cuál es tu horario de preferencia?' (el TC: '¿Cuál es el horario de tu preferencia?'; igual que el CA6).

**Evidencia**

![Paso 2 — carro cargado](<B2C-147 Evidencias/TC-B2C147-D-003-p02-carro-cargado.png>)

![Paso 4 — mis envios despacho](<B2C-147 Evidencias/TC-B2C147-D-003-p04-mis-envios-despacho.png>)

![Paso 5 — pagina datos de entrega despacho](<B2C-147 Evidencias/TC-B2C147-D-003-p05-pagina-datos-de-entrega-despacho.png>)

![Estado final del caso](<B2C-147 Evidencias/TC-B2C147-D-003.png>)

---

### TC-B2C147-D-004 - Verificar que una dirección sin número se muestra con S/N y sin comas vacías [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Metropolitana, Las Condes, Las Condes (sin número ni complemento)

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Metropolitana, Las Condes, Las Condes, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario revisa la tarjeta de dirección.

**Resultado esperado**

La tarjeta muestra la dirección con "S/N" en lugar del número y, si no hay complemento, sin coma vacía.

**Resultado obtenido**

No se ejecutó: la data declarada no sirve o está en TBD.

**Observación**

Causa: {DIRECCION_SIN_NUMERO} = 'Metropolitana, Las Condes, Las Condes' no es una calle: el Store Locator no ofrece ninguna sugerencia de Google que corresponda (2026-10-16), así que no se puede configurar como despacho. Acción: declarar una calle real sin número que Google sugiera y que tenga cobertura.

---

### TC-B2C147-D-005 - Verificar que el selector de fechas muestra los días de Janis con el primero disponible marcado [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 62.7 s |
| Spec | tests/B2C-147.spec.ts:313 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario revisa el selector de fechas.

**Resultado esperado**

El selector muestra los días que retorna Janis ("Hoy" + número, abreviatura de día + número), con los días sin disponibilidad deshabilitados y el primer día disponible seleccionado.

**Resultado obtenido**

Días 'Hoy 16', 'Sab 17' … con 'Hoy' seleccionado (primer día disponible); ninguno deshabilitado ese día. El viernes aparece como 'Vier 23' (4 letras; el resto, 3).

**Observación**

Días 'Hoy 16', 'Sab 17' … con 'Hoy' seleccionado (primer día disponible); ninguno deshabilitado ese día. El viernes aparece como 'Vier 23' (4 letras; el resto, 3).

**Evidencia**

![Paso 2 — carro cargado](<B2C-147 Evidencias/TC-B2C147-D-005-p02-carro-cargado.png>)

![Paso 4 — mis envios despacho](<B2C-147 Evidencias/TC-B2C147-D-005-p04-mis-envios-despacho.png>)

![Paso 5 — selector de fechas](<B2C-147 Evidencias/TC-B2C147-D-005-p05-selector-de-fechas.png>)

![Estado final del caso](<B2C-147 Evidencias/TC-B2C147-D-005.png>)

---

### TC-B2C147-D-006 - Verificar que el resumen de totales incluye despacho, subtotal y subtotal con Unipay [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- El carro también contiene 000000000000661945-UN
- Despacho a domicilio configurado con Calle Uno 23, La Florida

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, 20000, 000000000000661945-UN, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario revisa el resumen de totales.

**Resultado esperado**

El resumen muestra Despacho, Subtotal (subtotal + despacho) y Subtotal con Unipay (subtotal con descuento + despacho).

**Resultado obtenido**

No se ejecutó: la data declarada no sirve o está en TBD.

**Observación**

Causa: {SKU_UNIPAY_001} = 000000000000661945-UN (Lavaloza Quix 1.5 L) no tiene precio Unipay en DEV: el shelf muestra solo $4.750 y en Mis Envíos 'Subtotal con Unipay' = 'Subtotal' ($35.130 con 11 × {SKU_VALID_001}), sin descuento que verificar. Acción: declarar un SKU con descuento Unipay vigente en DEV.

---

### TC-B2C147-D-007 - Verificar que con Express disponible Envío Express queda seleccionado por defecto [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario revisa la sección de horarios.

**Resultado esperado**

La sección muestra "Envío Express 30-60min" seleccionado por defecto y las ventanas con rango horario y precio.

**Resultado obtenido**

No se ejecutó: la data declarada no sirve o está en TBD.

**Observación**

Causa: con {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} = Calle Uno 23, La Florida, Mis Envíos no ofrece 'Envío Express' (solo 12:00-15:00, 15:00-18:00 y 18:00-21:00 a $2.990; 2026-10-16), así que no se puede validar la selección por defecto de Express. Acción: declarar una dirección cuya tienda abastecedora tenga Express habilitado en DEV.

---

### TC-B2C147-D-008 - Verificar que los horarios sin capacidad de entrega se muestran deshabilitados [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio con {DIRECCION_CON_VENTANA_SIN_CAPACIDAD}, que tiene al menos una ventana sin capacidad

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {DIRECCION_CON_VENTANA_SIN_CAPACIDAD}, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario intenta seleccionar una ventana sin capacidad.

**Resultado esperado**

Las ventanas sin capacidad se muestran deshabilitadas y no se pueden seleccionar.

**Resultado obtenido**

No se ejecutó: la data declarada no sirve o está en TBD.

**Observación**

Causa: {DIRECCION_CON_VENTANA_SIN_CAPACIDAD} está en TBD en el Excel de data. Acción: cargar una dirección con al menos una ventana sin capacidad en DEV.

---

### TC-B2C147-D-009 - Verificar que sin Express disponible queda seleccionada la ventana más próxima [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Pasaje Diez 359, Penaflor

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Pasaje Diez 359, Penaflor, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario revisa la sección de horarios.

**Resultado esperado**

No se muestra Envío Express y la ventana más próxima queda seleccionada con su rango horario y precio.

**Resultado obtenido**

No se ejecutó: la data declarada no sirve o está en TBD.

**Observación**

Causa: {DIRECCION_SIN_EXPRESS} = Pasaje Diez 359, Peñaflor no tiene cobertura en DEV: al agregarla el Store Locator responde 'Aún no llegamos a esta dirección' (2026-10-16). Acción: declarar una dirección con cobertura cuya tienda no tenga Express.

---

### TC-B2C147-D-010 - Verificar que con retiro en tienda la página muestra la tienda y horarios sin precio [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 106.3 s |
| Spec | tests/B2C-147.spec.ts:386 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Retiro en tienda configurado con Unimarc Las Condes

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 20000, 000000000000675191-UN, Unimarc Las Condes, 11, cuenta de comprador (correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario revisa la página.

**Resultado esperado**

La tarjeta rosada muestra "Retira tu compra en" con nombre y dirección de Unimarc Las Condes, "Fecha de retiro", "¿Cuándo quieres retirar tu compra?", horarios sin precio, resumen con Subtotal y Subtotal con Unipay, "¿Recibe alguien más?" y "Ir a pagar" habilitado en dos columnas.

**Resultado obtenido**

La tarjeta dice 'Retira tu compra en: Unimarc Las Condes', sin dirección, comuna ni región.

**Observación**

Esperado: tarjeta 'Retira tu compra en' con nombre y dirección de Unimarc Las Condes (CA5: [Nombre] [Dirección], [Comuna], [Región]). Obtenido: solo 'Unimarc Las Condes', sin dirección, comuna ni región (2 de 2 intentos). tests/B2C-147.spec.ts:386. Bug: B2C-1222.

**Evidencia**

![Paso 2 — carro cargado](<B2C-147 Evidencias/TC-B2C147-D-010-p02-carro-cargado.png>)

![Estado al fallar la aserción: la tarjeta de retiro solo trae el nombre de la tienda](<B2C-147 Evidencias/TC-B2C147-D-010-p04-mis-envios-retiro.png>)

---

### TC-B2C147-D-011 - Verificar que si el carro supera el monto máximo Express se deshabilita con un aviso [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)
- Despacho a domicilio con Calle Uno 23, La Florida
- El subtotal del carro supera {MONTO_MAXIMO_EXPRESS}

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, {MONTO_MAXIMO_EXPRESS}, 000000000000675191-UN, cuenta de comprador (correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario revisa la sección de horarios y el subtotal.

**Resultado esperado**

Envío Express aparece deshabilitado, se muestra "El carro no cumple con el monto máximo para el despacho express" con X, la ventana estándar más próxima queda seleccionada y el subtotal refleja su costo.

**Resultado obtenido**

No se ejecutó: la data declarada no sirve o está en TBD.

**Observación**

Causa: {MONTO_MAXIMO_EXPRESS} está en TBD en el Excel de data. Acción: cargar el monto máximo configurado para Envío Express (y una dirección con Express disponible).

---

### TC-B2C147-D-012 - Verificar que el aviso de monto máximo Express se cierra con la X [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)
- Despacho a domicilio con Calle Uno 23, La Florida
- El subtotal del carro supera {MONTO_MAXIMO_EXPRESS}

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, {MONTO_MAXIMO_EXPRESS}, 000000000000675191-UN, cuenta de comprador (correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario hace clic en la X del aviso de monto máximo.

**Resultado esperado**

El aviso se cierra y Envío Express sigue deshabilitado.

**Resultado obtenido**

No se ejecutó: la data declarada no sirve o está en TBD.

**Observación**

Causa: {MONTO_MAXIMO_EXPRESS} está en TBD en el Excel de data. Acción: cargar el monto máximo configurado para Envío Express (y una dirección con Express disponible).

---

### TC-B2C147-D-013 - Verificar que sin ventanas disponibles se muestra la pantalla Sin horarios disponibles [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Av Libertador Gral Bernardo O'Higgins 1072, Maipú

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Av Libertador Gral Bernardo O'Higgins 1072, Maipú, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.

**Resultado esperado**

Se muestra la pantalla con imagen, título "Sin horarios disponibles", subtítulo "Lo sentimos actualmente no tenemos horarios…" con STL-041 y los CTA "Cambiar dirección" y "Volver al inicio".

**Resultado obtenido**

No se ejecutó: la data declarada no sirve o está en TBD.

**Observación**

Causa: {DIRECCION_SIN_SLA} = Av. Libertador Gral. Bernardo O'Higgins 1072, Maipú no tiene cobertura en DEV ('Aún no llegamos a esta dirección' → Home con 'Despacho sin cobertura', visto el 2026-10-14 en B2C-189), no da 'Sin horarios disponibles' (STL-041). Acción: declarar una dirección con cobertura y sin ventanas disponibles.

---

### TC-B2C147-D-014 - Verificar que Cambiar dirección en Sin horarios disponibles abre el Store Locator [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Av Libertador Gral Bernardo O'Higgins 1072, Maipú

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Av Libertador Gral Bernardo O'Higgins 1072, Maipú, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema muestra la pantalla "Sin horarios disponibles".
5. El usuario hace clic en "Cambiar dirección".

**Resultado esperado**

Se abre el flujo del Store Locator para cambiar la dirección.

**Resultado obtenido**

No se ejecutó: la data declarada no sirve o está en TBD.

**Observación**

Causa: {DIRECCION_SIN_SLA} = Av. Libertador Gral. Bernardo O'Higgins 1072, Maipú no tiene cobertura en DEV ('Aún no llegamos a esta dirección' → Home con 'Despacho sin cobertura', visto el 2026-10-14 en B2C-189), no da 'Sin horarios disponibles' (STL-041). Acción: declarar una dirección con cobertura y sin ventanas disponibles.

---

### TC-B2C147-D-015 - Verificar que Volver al inicio en Sin horarios disponibles redirige al Home [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Av Libertador Gral Bernardo O'Higgins 1072, Maipú

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Av Libertador Gral Bernardo O'Higgins 1072, Maipú, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema muestra la pantalla "Sin horarios disponibles".
5. El usuario hace clic en "Volver al inicio".

**Resultado esperado**

El usuario es redirigido al Home.

**Resultado obtenido**

No se ejecutó: la data declarada no sirve o está en TBD.

**Observación**

Causa: {DIRECCION_SIN_SLA} = Av. Libertador Gral. Bernardo O'Higgins 1072, Maipú no tiene cobertura en DEV ('Aún no llegamos a esta dirección' → Home con 'Despacho sin cobertura', visto el 2026-10-14 en B2C-189), no da 'Sin horarios disponibles' (STL-041). Acción: declarar una dirección con cobertura y sin ventanas disponibles.

---

### TC-B2C147-D-016 - Verificar que un error al cargar las ventanas muestra ME-034 y Reintentar vuelve a consultar [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- DevTools abierto con bloqueo de la request {JANIS_API_ENDPOINT} (Network request blocking)

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, {JANIS_API_ENDPOINT}, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema muestra la pantalla de error.
5. El usuario desactiva en DevTools el bloqueo de la request {JANIS_API_ENDPOINT}.
6. El usuario hace clic en "Reintentar".

**Resultado esperado**

Se muestra imagen, "Ups, algo salió mal", "No logramos cargar la…" y el código ME-034 con "Reintentar" y "Volver al inicio"; al reintentar sin error se carga "Datos de entrega".

**Resultado obtenido**

No se ejecutó: la data declarada no sirve o está en TBD.

**Observación**

Causa: {JANIS_API_ENDPOINT} está en TBD en el Excel de data. Acción: cargar el endpoint de Janis a bloquear (en DEV la consulta de ventanas es POST /mobify/proxy/api/custom/smu-delivery/v1/.../schedule).

---

### TC-B2C147-D-017 - Verificar que Volver al inicio en el error de carga redirige al Home [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- DevTools abierto con bloqueo de la request {JANIS_API_ENDPOINT} (Network request blocking)

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, {JANIS_API_ENDPOINT}, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema muestra la pantalla de error ME-034.
5. El usuario hace clic en "Volver al inicio".

**Resultado esperado**

El usuario es redirigido al Home.

**Resultado obtenido**

No se ejecutó: la data declarada no sirve o está en TBD.

**Observación**

Causa: {JANIS_API_ENDPOINT} está en TBD en el Excel de data. Acción: cargar el endpoint de Janis a bloquear (en DEV la consulta de ventanas es POST /mobify/proxy/api/custom/smu-delivery/v1/.../schedule).

---

### TC-B2C147-D-018 - Verificar que un fallo al guardar la selección de ventana muestra el toast ME-035 [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- Página "Datos de entrega" cargada con ventana auto-seleccionada
- DevTools abierto con bloqueo de la request de guardado de ventana en {JANIS_API_ENDPOINT} (retorna 500/503)

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, {JANIS_API_ENDPOINT}, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart y hace clic en "Continuar con la entrega".
2. La página "Datos de entrega" carga correctamente con una ventana auto-seleccionada.
3. En DevTools, activar el bloqueo de la request de guardado de ventana en {JANIS_API_ENDPOINT}.
4. El usuario selecciona una ventana horaria distinta a la pre-seleccionada.
5. Observar que aparece el loader de confirmación automática.
6. Verificar que el loader desaparece con error.
7. Verificar el estado de la sección de horarios.
8. Verificar el contenido del card de entrega en el encabezado.
9. Verificar que aparece el toast de error.
10. Verificar que el toast persiste sin cerrarse automáticamente.
11. Cerrar el toast con la × y verificar que desaparece.

**Resultado esperado**

El loader desaparece y la sección de horarios revierte al estado anterior. La selección del usuario permanece visible (puede reintentar eligiendo de nuevo). El card de entrega mantiene la ventana previamente confirmada. Se muestra el toast de error: «Lo sentimos, no pudimos cambiar tu fecha de entrega. Inténtalo nuevamente. Error: ME-035» y persiste hasta cierre manual con ×.

**Resultado obtenido**

No se ejecutó: la data declarada no sirve o está en TBD.

**Observación**

Causa: {JANIS_API_ENDPOINT} está en TBD en el Excel de data. Acción: cargar el endpoint de Janis a bloquear (en DEV la consulta de ventanas es POST /mobify/proxy/api/custom/smu-delivery/v1/.../schedule).

---

### TC-B2C147-M-001 - Verificar que al continuar desde el carro Mis Envíos muestra el skeleton y luego Datos de entrega [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 161.3 s |
| Spec | tests/B2C-147.spec.ts:241 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- DevTools abierto con throttling de red "Slow 3G"

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.

**Resultado esperado**

Se muestra el skeleton con el título "Datos de entrega" y placeholders grises; al completar la carga se muestra la página "Datos de entrega".

**Resultado obtenido**

Con {USER_AUTH_001} en despacho a Calle Uno 23, La Florida y 11 × {SKU_VALID_001}: al continuar se ve el skeleton (placeholders grises) con el título 'Datos de entrega' y luego la página completa. 'Slow 3G' simulado retrasando 6 s la consulta de ventanas a Janis (POST …/smu-delivery/…/schedule).

**Observación**

Con {USER_AUTH_001} en despacho a Calle Uno 23, La Florida y 11 × {SKU_VALID_001}: al continuar se ve el skeleton (placeholders grises) con el título 'Datos de entrega' y luego la página completa. 'Slow 3G' simulado retrasando 6 s la consulta de ventanas a Janis (POST …/smu-delivery/…/schedule).

**Evidencia**

![Paso 2 — carro cargado](<B2C-147 Evidencias/TC-B2C147-M-001-p02-carro-cargado.png>)

![Paso 3 — skeleton con el titulo datos de entrega](<B2C-147 Evidencias/TC-B2C147-M-001-p03-skeleton-con-el-titulo-datos-de-entrega.png>)

![Estado final del caso](<B2C-147 Evidencias/TC-B2C147-M-001.png>)

---

### TC-B2C147-M-002 - Verificar que un usuario sin sesión que intenta ir a Mis Envíos es redirigido al inicio de sesión [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 98.3 s |
| Spec | tests/B2C-147.spec.ts:259 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, 20000, 000000000000675191-UN, 11

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".

**Resultado esperado**

El usuario es redirigido al flujo de inicio de sesión y la página Mis Envíos no se muestra.

**Resultado obtenido**

Invitado con {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida y 11 × {SKU_VALID_001}: 'Continuar con la entrega' abre '¡Hola, ingresa aquí!' y la URL sigue en /cart; Mis Envíos no se pinta en ningún momento.

**Observación**

Invitado con {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida y 11 × {SKU_VALID_001}: 'Continuar con la entrega' abre '¡Hola, ingresa aquí!' y la URL sigue en /cart; Mis Envíos no se pinta en ningún momento.

**Evidencia**

![Paso 2 — carro de invitado sobre el minimo](<B2C-147 Evidencias/TC-B2C147-M-002-p02-carro-de-invitado-sobre-el-minimo.png>)

![Paso 3 — inicio de sesion al continuar](<B2C-147 Evidencias/TC-B2C147-M-002-p03-inicio-de-sesion-al-continuar.png>)

![Estado final del caso](<B2C-147 Evidencias/TC-B2C147-M-002.png>)

---

### TC-B2C147-M-003 - Verificar que con despacho a domicilio la página Datos de entrega muestra todos sus elementos [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 101.2 s |
| Spec | tests/B2C-147.spec.ts:277 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario revisa la página.

**Resultado esperado**

La página muestra header simplificado con "<", título "Datos de entrega", tarjeta rosada con la dirección y chevron, "Fecha de entrega", "¿Cuándo quieres recibir tu compra?", selector de fechas, "¿Cuál es el horario de tu preferencia?", horarios con precio, "¿Recibe alguien más?", resumen de totales y CTA "Ir a pagar" habilitado.

**Resultado obtenido**

Despacho a Calle Uno 23, La Florida: header y footer simplificados, '<', título, tarjeta 'Enviaremos tu compra a:' con chevron, Fecha de entrega, selector de fechas, horarios con precio ($2.990), '¿Recibe alguien más?', Despacho / Subtotal / Subtotal con Unipay e 'Ir a pagar' habilitado. La UI dice '¿Cuál es tu horario de preferencia?' (el TC: '¿Cuál es el horario de tu preferencia?'; igual que el CA6).

**Observación**

Despacho a Calle Uno 23, La Florida: header y footer simplificados, '<', título, tarjeta 'Enviaremos tu compra a:' con chevron, Fecha de entrega, selector de fechas, horarios con precio ($2.990), '¿Recibe alguien más?', Despacho / Subtotal / Subtotal con Unipay e 'Ir a pagar' habilitado. La UI dice '¿Cuál es tu horario de preferencia?' (el TC: '¿Cuál es el horario de tu preferencia?'; igual que el CA6).

**Evidencia**

![Paso 2 — carro cargado](<B2C-147 Evidencias/TC-B2C147-M-003-p02-carro-cargado.png>)

![Paso 4 — mis envios despacho](<B2C-147 Evidencias/TC-B2C147-M-003-p04-mis-envios-despacho.png>)

![Paso 5 — pagina datos de entrega despacho](<B2C-147 Evidencias/TC-B2C147-M-003-p05-pagina-datos-de-entrega-despacho.png>)

![Estado final del caso](<B2C-147 Evidencias/TC-B2C147-M-003.png>)

---

### TC-B2C147-M-004 - Verificar que una dirección sin número se muestra con S/N y sin comas vacías [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Metropolitana, Las Condes, Las Condes (sin número ni complemento)

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Metropolitana, Las Condes, Las Condes, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario revisa la tarjeta de dirección.

**Resultado esperado**

La tarjeta muestra la dirección con "S/N" en lugar del número y, si no hay complemento, sin coma vacía.

**Resultado obtenido**

No se ejecutó: la data declarada no sirve o está en TBD.

**Observación**

Causa: {DIRECCION_SIN_NUMERO} = 'Metropolitana, Las Condes, Las Condes' no es una calle: el Store Locator no ofrece ninguna sugerencia de Google que corresponda (2026-10-16), así que no se puede configurar como despacho. Acción: declarar una calle real sin número que Google sugiera y que tenga cobertura.

---

### TC-B2C147-M-005 - Verificar que el selector de fechas muestra los días de Janis con el primero disponible marcado [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 170.5 s |
| Spec | tests/B2C-147.spec.ts:313 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario revisa el selector de fechas.

**Resultado esperado**

El selector muestra los días que retorna Janis ("Hoy" + número, abreviatura de día + número), con los días sin disponibilidad deshabilitados y el primer día disponible seleccionado.

**Resultado obtenido**

Días 'Hoy 16', 'Sab 17' … con 'Hoy' seleccionado (primer día disponible); ninguno deshabilitado ese día. El viernes aparece como 'Vier 23' (4 letras; el resto, 3).

**Observación**

Días 'Hoy 16', 'Sab 17' … con 'Hoy' seleccionado (primer día disponible); ninguno deshabilitado ese día. El viernes aparece como 'Vier 23' (4 letras; el resto, 3).

**Evidencia**

![Paso 2 — carro cargado](<B2C-147 Evidencias/TC-B2C147-M-005-p02-carro-cargado.png>)

![Paso 4 — mis envios despacho](<B2C-147 Evidencias/TC-B2C147-M-005-p04-mis-envios-despacho.png>)

![Paso 5 — selector de fechas](<B2C-147 Evidencias/TC-B2C147-M-005-p05-selector-de-fechas.png>)

![Estado final del caso](<B2C-147 Evidencias/TC-B2C147-M-005.png>)

---

### TC-B2C147-M-006 - Verificar que el resumen de totales incluye despacho, subtotal y subtotal con Unipay [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- El carro también contiene 000000000000661945-UN
- Despacho a domicilio configurado con Calle Uno 23, La Florida

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, 20000, 000000000000661945-UN, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario revisa el resumen de totales.

**Resultado esperado**

El resumen muestra Despacho, Subtotal (subtotal + despacho) y Subtotal con Unipay (subtotal con descuento + despacho).

**Resultado obtenido**

No se ejecutó: la data declarada no sirve o está en TBD.

**Observación**

Causa: {SKU_UNIPAY_001} = 000000000000661945-UN (Lavaloza Quix 1.5 L) no tiene precio Unipay en DEV: el shelf muestra solo $4.750 y en Mis Envíos 'Subtotal con Unipay' = 'Subtotal' ($35.130 con 11 × {SKU_VALID_001}), sin descuento que verificar. Acción: declarar un SKU con descuento Unipay vigente en DEV.

---

### TC-B2C147-M-007 - Verificar que con Express disponible Envío Express queda seleccionado por defecto [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario revisa la sección de horarios.

**Resultado esperado**

La sección muestra "Envío Express 30-60min" seleccionado por defecto y las ventanas con rango horario y precio.

**Resultado obtenido**

No se ejecutó: la data declarada no sirve o está en TBD.

**Observación**

Causa: con {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} = Calle Uno 23, La Florida, Mis Envíos no ofrece 'Envío Express' (solo 12:00-15:00, 15:00-18:00 y 18:00-21:00 a $2.990; 2026-10-16), así que no se puede validar la selección por defecto de Express. Acción: declarar una dirección cuya tienda abastecedora tenga Express habilitado en DEV.

---

### TC-B2C147-M-008 - Verificar que los horarios sin capacidad de entrega se muestran deshabilitados [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio con {DIRECCION_CON_VENTANA_SIN_CAPACIDAD}, que tiene al menos una ventana sin capacidad

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {DIRECCION_CON_VENTANA_SIN_CAPACIDAD}, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario intenta seleccionar una ventana sin capacidad.

**Resultado esperado**

Las ventanas sin capacidad se muestran deshabilitadas y no se pueden seleccionar.

**Resultado obtenido**

No se ejecutó: la data declarada no sirve o está en TBD.

**Observación**

Causa: {DIRECCION_CON_VENTANA_SIN_CAPACIDAD} está en TBD en el Excel de data. Acción: cargar una dirección con al menos una ventana sin capacidad en DEV.

---

### TC-B2C147-M-009 - Verificar que sin Express disponible queda seleccionada la ventana más próxima [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Pasaje Diez 359, Penaflor

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Pasaje Diez 359, Penaflor, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario revisa la sección de horarios.

**Resultado esperado**

No se muestra Envío Express y la ventana más próxima queda seleccionada con su rango horario y precio.

**Resultado obtenido**

No se ejecutó: la data declarada no sirve o está en TBD.

**Observación**

Causa: {DIRECCION_SIN_EXPRESS} = Pasaje Diez 359, Peñaflor no tiene cobertura en DEV: al agregarla el Store Locator responde 'Aún no llegamos a esta dirección' (2026-10-16). Acción: declarar una dirección con cobertura cuya tienda no tenga Express.

---

### TC-B2C147-M-010 - Verificar que con retiro en tienda la página muestra la tienda y horarios sin precio [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 107.0 s |
| Spec | tests/B2C-147.spec.ts:386 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Retiro en tienda configurado con Unimarc Las Condes

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 20000, 000000000000675191-UN, Unimarc Las Condes, 11, cuenta de comprador (correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario revisa la página.

**Resultado esperado**

La tarjeta rosada muestra "Retira tu compra en" con nombre y dirección de Unimarc Las Condes, "Fecha de retiro", "¿Cuándo quieres retirar tu compra?", horarios sin precio, resumen con Subtotal y Subtotal con Unipay, "¿Recibe alguien más?" y "Ir a pagar" habilitado.

**Resultado obtenido**

La tarjeta dice 'Retira tu compra en: Unimarc Las Condes', sin dirección, comuna ni región.

**Observación**

Esperado: tarjeta 'Retira tu compra en' con nombre y dirección de Unimarc Las Condes (CA5: [Nombre] [Dirección], [Comuna], [Región]). Obtenido: solo 'Unimarc Las Condes', sin dirección, comuna ni región (2 de 2 intentos). tests/B2C-147.spec.ts:386. Bug: B2C-1222.

**Evidencia**

![Paso 2 — carro cargado](<B2C-147 Evidencias/TC-B2C147-M-010-p02-carro-cargado.png>)

![Estado al fallar la aserción: la tarjeta de retiro solo trae el nombre de la tienda](<B2C-147 Evidencias/TC-B2C147-M-010-p04-mis-envios-retiro.png>)

---

### TC-B2C147-M-011 - Verificar que si el carro supera el monto máximo Express se deshabilita con un aviso [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)
- Despacho a domicilio con Calle Uno 23, La Florida
- El subtotal del carro supera {MONTO_MAXIMO_EXPRESS}

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, {MONTO_MAXIMO_EXPRESS}, 000000000000675191-UN, cuenta de comprador (correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario revisa la sección de horarios y el subtotal.

**Resultado esperado**

Envío Express aparece deshabilitado, se muestra "El carro no cumple con el monto máximo para el despacho express" con X, la ventana estándar más próxima queda seleccionada y el subtotal refleja su costo.

**Resultado obtenido**

No se ejecutó: la data declarada no sirve o está en TBD.

**Observación**

Causa: {MONTO_MAXIMO_EXPRESS} está en TBD en el Excel de data. Acción: cargar el monto máximo configurado para Envío Express (y una dirección con Express disponible).

---

### TC-B2C147-M-012 - Verificar que el aviso de monto máximo Express se cierra con la X [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)
- Despacho a domicilio con Calle Uno 23, La Florida
- El subtotal del carro supera {MONTO_MAXIMO_EXPRESS}

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, {MONTO_MAXIMO_EXPRESS}, 000000000000675191-UN, cuenta de comprador (correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca la X del aviso de monto máximo.

**Resultado esperado**

El aviso se cierra y Envío Express sigue deshabilitado.

**Resultado obtenido**

No se ejecutó: la data declarada no sirve o está en TBD.

**Observación**

Causa: {MONTO_MAXIMO_EXPRESS} está en TBD en el Excel de data. Acción: cargar el monto máximo configurado para Envío Express (y una dirección con Express disponible).

---

### TC-B2C147-M-013 - Verificar que sin ventanas disponibles se muestra la pantalla Sin horarios disponibles [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Av Libertador Gral Bernardo O'Higgins 1072, Maipú

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Av Libertador Gral Bernardo O'Higgins 1072, Maipú, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.

**Resultado esperado**

Se muestra la pantalla con imagen, título "Sin horarios disponibles", subtítulo "Lo sentimos actualmente no tenemos horarios…" con STL-041 y los CTA "Cambiar dirección" y "Volver al inicio".

**Resultado obtenido**

No se ejecutó: la data declarada no sirve o está en TBD.

**Observación**

Causa: {DIRECCION_SIN_SLA} = Av. Libertador Gral. Bernardo O'Higgins 1072, Maipú no tiene cobertura en DEV ('Aún no llegamos a esta dirección' → Home con 'Despacho sin cobertura', visto el 2026-10-14 en B2C-189), no da 'Sin horarios disponibles' (STL-041). Acción: declarar una dirección con cobertura y sin ventanas disponibles.

---

### TC-B2C147-M-014 - Verificar que Cambiar dirección en Sin horarios disponibles abre el Store Locator [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Av Libertador Gral Bernardo O'Higgins 1072, Maipú

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Av Libertador Gral Bernardo O'Higgins 1072, Maipú, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema muestra la pantalla "Sin horarios disponibles".
5. El usuario toca "Cambiar dirección".

**Resultado esperado**

Se abre el flujo del Store Locator para cambiar la dirección.

**Resultado obtenido**

No se ejecutó: la data declarada no sirve o está en TBD.

**Observación**

Causa: {DIRECCION_SIN_SLA} = Av. Libertador Gral. Bernardo O'Higgins 1072, Maipú no tiene cobertura en DEV ('Aún no llegamos a esta dirección' → Home con 'Despacho sin cobertura', visto el 2026-10-14 en B2C-189), no da 'Sin horarios disponibles' (STL-041). Acción: declarar una dirección con cobertura y sin ventanas disponibles.

---

### TC-B2C147-M-015 - Verificar que Volver al inicio en Sin horarios disponibles redirige al Home [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Av Libertador Gral Bernardo O'Higgins 1072, Maipú

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Av Libertador Gral Bernardo O'Higgins 1072, Maipú, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema muestra la pantalla "Sin horarios disponibles".
5. El usuario toca "Volver al inicio".

**Resultado esperado**

El usuario es redirigido al Home.

**Resultado obtenido**

No se ejecutó: la data declarada no sirve o está en TBD.

**Observación**

Causa: {DIRECCION_SIN_SLA} = Av. Libertador Gral. Bernardo O'Higgins 1072, Maipú no tiene cobertura en DEV ('Aún no llegamos a esta dirección' → Home con 'Despacho sin cobertura', visto el 2026-10-14 en B2C-189), no da 'Sin horarios disponibles' (STL-041). Acción: declarar una dirección con cobertura y sin ventanas disponibles.

---

### TC-B2C147-M-016 - Verificar que un error al cargar las ventanas muestra ME-034 y Reintentar vuelve a consultar [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- DevTools abierto con bloqueo de la request {JANIS_API_ENDPOINT} (Network request blocking)

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, {JANIS_API_ENDPOINT}, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema muestra la pantalla de error.
5. El usuario desactiva en DevTools el bloqueo de la request {JANIS_API_ENDPOINT}.
6. El usuario toca "Reintentar".

**Resultado esperado**

Se muestra imagen, "Ups, algo salió mal", "No logramos cargar la…" y el código ME-034 con "Reintentar" y "Volver al inicio"; al reintentar sin error se carga "Datos de entrega".

**Resultado obtenido**

No se ejecutó: la data declarada no sirve o está en TBD.

**Observación**

Causa: {JANIS_API_ENDPOINT} está en TBD en el Excel de data. Acción: cargar el endpoint de Janis a bloquear (en DEV la consulta de ventanas es POST /mobify/proxy/api/custom/smu-delivery/v1/.../schedule).

---

### TC-B2C147-M-017 - Verificar que Volver al inicio en el error de carga redirige al Home [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- DevTools abierto con bloqueo de la request {JANIS_API_ENDPOINT} (Network request blocking)

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, {JANIS_API_ENDPOINT}, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema muestra la pantalla de error ME-034.
5. El usuario toca "Volver al inicio".

**Resultado esperado**

El usuario es redirigido al Home.

**Resultado obtenido**

No se ejecutó: la data declarada no sirve o está en TBD.

**Observación**

Causa: {JANIS_API_ENDPOINT} está en TBD en el Excel de data. Acción: cargar el endpoint de Janis a bloquear (en DEV la consulta de ventanas es POST /mobify/proxy/api/custom/smu-delivery/v1/.../schedule).

---

### TC-B2C147-M-018 - Verificar que un fallo al guardar la selección de ventana muestra el toast ME-035 [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- Página "Datos de entrega" cargada con ventana auto-seleccionada
- DevTools abierto con bloqueo de la request de guardado de ventana en {JANIS_API_ENDPOINT} (retorna 500/503)

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, {JANIS_API_ENDPOINT}, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart y toca "Continuar con la entrega".
2. La página "Datos de entrega" carga correctamente con una ventana auto-seleccionada.
3. En DevTools, activar el bloqueo de la request de guardado de ventana en {JANIS_API_ENDPOINT}.
4. El usuario toca una ventana horaria distinta a la pre-seleccionada.
5. Observar que aparece el loader de confirmación automática.
6. Verificar que el loader desaparece con error.
7. Verificar el estado de la sección de horarios.
8. Verificar el contenido del card de entrega en el encabezado.
9. Verificar que aparece el toast de error.
10. Verificar que el toast persiste sin cerrarse automáticamente.
11. Cerrar el toast con la × y verificar que desaparece.

**Resultado esperado**

El loader desaparece y la sección de horarios revierte al estado anterior. La selección del usuario permanece visible (puede reintentar eligiendo de nuevo). El card de entrega mantiene la ventana previamente confirmada. Se muestra el toast de error: «Lo sentimos, no pudimos cambiar tu fecha de entrega. Inténtalo nuevamente. Error: ME-035» y persiste hasta cierre manual con ×.

**Resultado obtenido**

No se ejecutó: la data declarada no sirve o está en TBD.

**Observación**

Causa: {JANIS_API_ENDPOINT} está en TBD en el Excel de data. Acción: cargar el endpoint de Janis a bloquear (en DEV la consulta de ventanas es POST /mobify/proxy/api/custom/smu-delivery/v1/.../schedule).

---

### TC-B2C147-D-020 - Verificar que un usuario sin sesión que usa "Ir a pagar" del minicarro es redirigido al inicio de sesión [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 61.1 s |
| Spec | tests/B2C-147.spec.ts:358 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, 20000, 000000000000675191-UN, 11

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El usuario hace clic en el ícono del carrito en el header.
3. El sistema despliega el panel flotante del minicarro.
4. El usuario hace clic en "Ir a pagar".

**Resultado esperado**

El usuario es redirigido al flujo de inicio de sesión y la página Mis Envíos no se muestra.

**Resultado obtenido**

Invitado con Calle Uno 23, La Florida y 11 × {SKU_VALID_001}: 'Ir a pagar' del minicarro abre '¡Hola, ingresa aquí!' y la URL sigue en el Home; Mis Envíos no se pinta.

**Observación**

Invitado con Calle Uno 23, La Florida y 11 × {SKU_VALID_001}: 'Ir a pagar' del minicarro abre '¡Hola, ingresa aquí!' y la URL sigue en el Home; Mis Envíos no se pinta.

**Evidencia**

![Paso 3 — minicarro desplegado](<B2C-147 Evidencias/TC-B2C147-D-020-p03-minicarro-desplegado.png>)

![Paso 4 — inicio de sesion tras clic en ir a pagar](<B2C-147 Evidencias/TC-B2C147-D-020-p04-inicio-de-sesion-tras-clic-en-ir-a-pagar.png>)

![Estado final del caso](<B2C-147 Evidencias/TC-B2C147-D-020.png>)

---

### TC-B2C147-D-021 - Verificar que "Continuar" en el modal "No te olvides" lleva a Mis Envíos con skeleton y luego Datos de entrega [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 67.8 s |
| Spec | tests/B2C-147.spec.ts:334 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- La cuenta tiene productos sugeridos (My Usuals o favoritos) que no están en el carro
- DevTools abierto con throttling de red "Slow 3G"

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega".
4. El sistema muestra el modal "No te olvides" con los productos sugeridos.
5. El usuario hace clic en "Continuar" en el modal.

**Resultado esperado**

El modal se cierra. Se muestra el skeleton con el título "Datos de entrega" y placeholders grises; al completar la carga se muestra la página "Datos de entrega".

**Resultado obtenido**

Con {USER_AUTH_001}: 'Continuar con la entrega' abre '¡Que no se te olviden!' (el TC lo llama 'No te olvides') con sugeridos de 'Lo que más compro'/'Mis favoritos'; 'Continuar' lo cierra y se ve el skeleton con el título y luego Datos de entrega (red lenta simulada en la consulta de ventanas).

**Observación**

Con {USER_AUTH_001}: 'Continuar con la entrega' abre '¡Que no se te olviden!' (el TC lo llama 'No te olvides') con sugeridos de 'Lo que más compro'/'Mis favoritos'; 'Continuar' lo cierra y se ve el skeleton con el título y luego Datos de entrega (red lenta simulada en la consulta de ventanas).

**Evidencia**

![Paso 2 — carro cargado](<B2C-147 Evidencias/TC-B2C147-D-021-p02-carro-cargado.png>)

![Paso 4 — modal no te olvides con sugeridos](<B2C-147 Evidencias/TC-B2C147-D-021-p04-modal-no-te-olvides-con-sugeridos.png>)

![Paso 5 — skeleton con el titulo datos de entrega](<B2C-147 Evidencias/TC-B2C147-D-021-p05-skeleton-con-el-titulo-datos-de-entrega.png>)

![Estado final del caso](<B2C-147 Evidencias/TC-B2C147-D-021.png>)

---

### TC-B2C147-D-022 - Verificar que sin ventanas disponibles en retiro en tienda se muestra la pantalla Sin horarios disponibles [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Retiro en tienda configurado con Unimac Los Lagos II

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 20000, 000000000000675191-UN, Unimac Los Lagos II, 11, cuenta de comprador (correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.

**Resultado esperado**

Se muestra la pantalla con imagen, título "Sin horarios disponibles", subtítulo "Lo sentimos actualmente no tenemos horarios…" con STL-041 y los CTA "Cambiar dirección" y "Volver al inicio".

**Resultado obtenido**

No se ejecutó: la data declarada no sirve o está en TBD.

**Observación**

Causa: {TIENDA_SIN_SLA} = 'Unimac Los Lagos II' (typo de 'Unimarc Los Lagos II', tomada como la misma tienda) responde 'Aún no llegamos a esta dirección' al confirmarla como retiro (2026-10-16), no 'Sin horarios disponibles'. Acción: declarar una tienda con cobertura y sin ventanas de retiro.

---

### TC-B2C147-M-019 - Verificar que "Continuar" en el modal "No te olvides" lleva a Mis Envíos con skeleton y luego Datos de entrega [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 130.4 s |
| Spec | tests/B2C-147.spec.ts:334 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- La cuenta tiene productos sugeridos (My Usuals o favoritos) que no están en el carro
- DevTools abierto con throttling de red "Slow 3G"

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "No te olvides" con los productos sugeridos.
5. El usuario toca "Continuar" en el modal.

**Resultado esperado**

El modal se cierra. Se muestra el skeleton con el título "Datos de entrega" y placeholders grises; al completar la carga se muestra la página "Datos de entrega".

**Resultado obtenido**

Con {USER_AUTH_001}: 'Continuar con la entrega' abre '¡Que no se te olviden!' (el TC lo llama 'No te olvides') con sugeridos de 'Lo que más compro'/'Mis favoritos'; 'Continuar' lo cierra y se ve el skeleton con el título y luego Datos de entrega (red lenta simulada en la consulta de ventanas).

**Observación**

Con {USER_AUTH_001}: 'Continuar con la entrega' abre '¡Que no se te olviden!' (el TC lo llama 'No te olvides') con sugeridos de 'Lo que más compro'/'Mis favoritos'; 'Continuar' lo cierra y se ve el skeleton con el título y luego Datos de entrega (red lenta simulada en la consulta de ventanas).

**Evidencia**

![Paso 2 — carro cargado](<B2C-147 Evidencias/TC-B2C147-M-019-p02-carro-cargado.png>)

![Paso 4 — modal no te olvides con sugeridos](<B2C-147 Evidencias/TC-B2C147-M-019-p04-modal-no-te-olvides-con-sugeridos.png>)

![Paso 5 — skeleton con el titulo datos de entrega](<B2C-147 Evidencias/TC-B2C147-M-019-p05-skeleton-con-el-titulo-datos-de-entrega.png>)

![Estado final del caso](<B2C-147 Evidencias/TC-B2C147-M-019.png>)

---

### TC-B2C147-M-020 - Verificar que sin ventanas disponibles en retiro en tienda se muestra la pantalla Sin horarios disponibles [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Retiro en tienda configurado con Unimac Los Lagos II

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 20000, 000000000000675191-UN, Unimac Los Lagos II, 11, cuenta de comprador (correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.

**Resultado esperado**

Se muestra la pantalla con imagen, título "Sin horarios disponibles", subtítulo "Lo sentimos actualmente no tenemos horarios…" con STL-041 y los CTA "Cambiar dirección" y "Volver al inicio".

**Resultado obtenido**

No se ejecutó: la data declarada no sirve o está en TBD.

**Observación**

Causa: {TIENDA_SIN_SLA} = 'Unimac Los Lagos II' (typo de 'Unimarc Los Lagos II', tomada como la misma tienda) responde 'Aún no llegamos a esta dirección' al confirmarla como retiro (2026-10-16), no 'Sin horarios disponibles'. Acción: declarar una tienda con cobertura y sin ventanas de retiro.

---

<!-- qa-evidence-state
{
 "header": {
  "browsers": {
   "desktop": "chromium",
   "mobile": "webkit"
  },
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "environment": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
  "executed_by": "Victor Chirinos",
  "suite": "B2C-147",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-147 WEB Test Cases.xlsx",
  "title": "B2C-147 - Ver y seleccionar la ventana de despacho o retiro (WEB) - Evidencias QA",
  "updated_at": "2026-10-16"
 },
 "history": {
  "2026-10-16": [
   "TC-B2C147-D-001",
   "TC-B2C147-D-002",
   "TC-B2C147-D-003",
   "TC-B2C147-D-004",
   "TC-B2C147-D-005",
   "TC-B2C147-D-006",
   "TC-B2C147-D-007",
   "TC-B2C147-D-008",
   "TC-B2C147-D-009",
   "TC-B2C147-D-010",
   "TC-B2C147-D-011",
   "TC-B2C147-D-012",
   "TC-B2C147-D-013",
   "TC-B2C147-D-014",
   "TC-B2C147-D-015",
   "TC-B2C147-D-016",
   "TC-B2C147-D-017",
   "TC-B2C147-D-018",
   "TC-B2C147-D-020",
   "TC-B2C147-D-021",
   "TC-B2C147-D-022",
   "TC-B2C147-M-001",
   "TC-B2C147-M-002",
   "TC-B2C147-M-003",
   "TC-B2C147-M-004",
   "TC-B2C147-M-005",
   "TC-B2C147-M-006",
   "TC-B2C147-M-007",
   "TC-B2C147-M-008",
   "TC-B2C147-M-009",
   "TC-B2C147-M-010",
   "TC-B2C147-M-011",
   "TC-B2C147-M-012",
   "TC-B2C147-M-013",
   "TC-B2C147-M-014",
   "TC-B2C147-M-015",
   "TC-B2C147-M-016",
   "TC-B2C147-M-017",
   "TC-B2C147-M-018",
   "TC-B2C147-M-019",
   "TC-B2C147-M-020"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "duration_s": 116.3,
   "executed_at": "2026-10-16",
   "expected": "Se muestra el skeleton con el título \"Datos de entrega\" y placeholders grises; al completar la carga se muestra la página \"Datos de entrega\".",
   "form_factor": "desktop",
   "id": "TC-B2C147-D-001",
   "name": "Verificar que al continuar desde el carro Mis Envíos muestra el skeleton y luego Datos de entrega [Desktop] [Logueado]",
   "observation": "Con {USER_AUTH_001} en despacho a Calle Uno 23, La Florida y 11 × {SKU_VALID_001}: al continuar se ve el skeleton (placeholders grises) con el título 'Datos de entrega' y luego la página completa. 'Slow 3G' simulado retrasando 6 s la consulta de ventanas a Janis (POST …/smu-delivery/…/schedule).",
   "observed": "Con {USER_AUTH_001} en despacho a Calle Uno 23, La Florida y 11 × {SKU_VALID_001}: al continuar se ve el skeleton (placeholders grises) con el título 'Datos de entrega' y luego la página completa. 'Slow 3G' simulado retrasando 6 s la consulta de ventanas a Janis (POST …/smu-delivery/…/schedule).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- DevTools abierto con throttling de red \"Slow 3G\"",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C147-D-001-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 3 — skeleton con el titulo datos de entrega",
     "file": "TC-B2C147-D-001-p03-skeleton-con-el-titulo-datos-de-entrega.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C147-D-001.png"
    }
   ],
   "spec": "tests/B2C-147.spec.ts:241",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 58.1,
   "executed_at": "2026-10-16",
   "expected": "El usuario es redirigido al flujo de inicio de sesión y la página Mis Envíos no se muestra.",
   "form_factor": "desktop",
   "id": "TC-B2C147-D-002",
   "name": "Verificar que un usuario sin sesión que intenta ir a Mis Envíos es redirigido al inicio de sesión [Desktop] [Guest]",
   "observation": "Invitado con {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida y 11 × {SKU_VALID_001}: 'Continuar con la entrega' abre '¡Hola, ingresa aquí!' y la URL sigue en /cart; Mis Envíos no se pinta en ningún momento.",
   "observed": "Invitado con {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida y 11 × {SKU_VALID_001}: 'Continuar con la entrega' abre '¡Hola, ingresa aquí!' y la URL sigue en /cart; Mis Envíos no se pinta en ningún momento.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida",
   "screenshots": [
    {
     "caption": "Paso 2 — carro de invitado sobre el minimo",
     "file": "TC-B2C147-D-002-p02-carro-de-invitado-sobre-el-minimo.png"
    },
    {
     "caption": "Paso 3 — inicio de sesion al continuar",
     "file": "TC-B2C147-D-002-p03-inicio-de-sesion-al-continuar.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C147-D-002.png"
    }
   ],
   "spec": "tests/B2C-147.spec.ts:259",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\".",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, 20000, 000000000000675191-UN, 11",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 61,
   "executed_at": "2026-10-16",
   "expected": "La página muestra en dos columnas: izquierda con \"<\", título \"Datos de entrega\", tarjeta rosada \"Enviaremos tu compra a:\" con la dirección y chevron, \"Fecha de entrega\", \"¿Cuándo quieres recibir tu compra?\", selector de fechas, \"¿Cuál es el horario de tu preferencia?\" y horarios; derecha con resumen de totales, CTA \"Ir a pagar\" habilitado y \"¿Recibe alguien más?\"; header y footer simplificados.",
   "form_factor": "desktop",
   "id": "TC-B2C147-D-003",
   "name": "Verificar que con despacho a domicilio la página Datos de entrega muestra todos sus elementos [Desktop] [Logueado]",
   "observation": "Despacho a Calle Uno 23, La Florida: header y footer simplificados, '<', título, tarjeta 'Enviaremos tu compra a:' con chevron, Fecha de entrega, selector de fechas, horarios con precio ($2.990), '¿Recibe alguien más?', Despacho / Subtotal / Subtotal con Unipay e 'Ir a pagar' habilitado. La UI dice '¿Cuál es tu horario de preferencia?' (el TC: '¿Cuál es el horario de tu preferencia?'; igual que el CA6).",
   "observed": "Despacho a Calle Uno 23, La Florida: header y footer simplificados, '<', título, tarjeta 'Enviaremos tu compra a:' con chevron, Fecha de entrega, selector de fechas, horarios con precio ($2.990), '¿Recibe alguien más?', Despacho / Subtotal / Subtotal con Unipay e 'Ir a pagar' habilitado. La UI dice '¿Cuál es tu horario de preferencia?' (el TC: '¿Cuál es el horario de tu preferencia?'; igual que el CA6).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C147-D-003-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — mis envios despacho",
     "file": "TC-B2C147-D-003-p04-mis-envios-despacho.png"
    },
    {
     "caption": "Paso 5 — pagina datos de entrega despacho",
     "file": "TC-B2C147-D-003-p05-pagina-datos-de-entrega-despacho.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C147-D-003.png"
    }
   ],
   "spec": "tests/B2C-147.spec.ts:277",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario revisa la página.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-16",
   "expected": "La tarjeta muestra la dirección con \"S/N\" en lugar del número y, si no hay complemento, sin coma vacía.",
   "form_factor": "desktop",
   "id": "TC-B2C147-D-004",
   "name": "Verificar que una dirección sin número se muestra con S/N y sin comas vacías [Desktop] [Logueado]",
   "observation": "Causa: {DIRECCION_SIN_NUMERO} = 'Metropolitana, Las Condes, Las Condes' no es una calle: el Store Locator no ofrece ninguna sugerencia de Google que corresponda (2026-10-16), así que no se puede configurar como despacho. Acción: declarar una calle real sin número que Google sugiera y que tenga cobertura.",
   "observed": "No se ejecutó: la data declarada no sirve o está en TBD.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Metropolitana, Las Condes, Las Condes (sin número ni complemento)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario revisa la tarjeta de dirección.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Metropolitana, Las Condes, Las Condes, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 62.7,
   "executed_at": "2026-10-16",
   "expected": "El selector muestra los días que retorna Janis (\"Hoy\" + número, abreviatura de día + número), con los días sin disponibilidad deshabilitados y el primer día disponible seleccionado.",
   "form_factor": "desktop",
   "id": "TC-B2C147-D-005",
   "name": "Verificar que el selector de fechas muestra los días de Janis con el primero disponible marcado [Desktop] [Logueado]",
   "observation": "Días 'Hoy 16', 'Sab 17' … con 'Hoy' seleccionado (primer día disponible); ninguno deshabilitado ese día. El viernes aparece como 'Vier 23' (4 letras; el resto, 3).",
   "observed": "Días 'Hoy 16', 'Sab 17' … con 'Hoy' seleccionado (primer día disponible); ninguno deshabilitado ese día. El viernes aparece como 'Vier 23' (4 letras; el resto, 3).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C147-D-005-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — mis envios despacho",
     "file": "TC-B2C147-D-005-p04-mis-envios-despacho.png"
    },
    {
     "caption": "Paso 5 — selector de fechas",
     "file": "TC-B2C147-D-005-p05-selector-de-fechas.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C147-D-005.png"
    }
   ],
   "spec": "tests/B2C-147.spec.ts:313",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario revisa el selector de fechas.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-16",
   "expected": "El resumen muestra Despacho, Subtotal (subtotal + despacho) y Subtotal con Unipay (subtotal con descuento + despacho).",
   "form_factor": "desktop",
   "id": "TC-B2C147-D-006",
   "name": "Verificar que el resumen de totales incluye despacho, subtotal y subtotal con Unipay [Desktop] [Logueado]",
   "observation": "Causa: {SKU_UNIPAY_001} = 000000000000661945-UN (Lavaloza Quix 1.5 L) no tiene precio Unipay en DEV: el shelf muestra solo $4.750 y en Mis Envíos 'Subtotal con Unipay' = 'Subtotal' ($35.130 con 11 × {SKU_VALID_001}), sin descuento que verificar. Acción: declarar un SKU con descuento Unipay vigente en DEV.",
   "observed": "No se ejecutó: la data declarada no sirve o está en TBD.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- El carro también contiene 000000000000661945-UN\n- Despacho a domicilio configurado con Calle Uno 23, La Florida",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario revisa el resumen de totales.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, 20000, 000000000000661945-UN, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-16",
   "expected": "La sección muestra \"Envío Express 30-60min\" seleccionado por defecto y las ventanas con rango horario y precio.",
   "form_factor": "desktop",
   "id": "TC-B2C147-D-007",
   "name": "Verificar que con Express disponible Envío Express queda seleccionado por defecto [Desktop] [Logueado]",
   "observation": "Causa: con {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} = Calle Uno 23, La Florida, Mis Envíos no ofrece 'Envío Express' (solo 12:00-15:00, 15:00-18:00 y 18:00-21:00 a $2.990; 2026-10-16), así que no se puede validar la selección por defecto de Express. Acción: declarar una dirección cuya tienda abastecedora tenga Express habilitado en DEV.",
   "observed": "No se ejecutó: la data declarada no sirve o está en TBD.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario revisa la sección de horarios.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-16",
   "expected": "Las ventanas sin capacidad se muestran deshabilitadas y no se pueden seleccionar.",
   "form_factor": "desktop",
   "id": "TC-B2C147-D-008",
   "name": "Verificar que los horarios sin capacidad de entrega se muestran deshabilitados [Desktop] [Logueado]",
   "observation": "Causa: {DIRECCION_CON_VENTANA_SIN_CAPACIDAD} está en TBD en el Excel de data. Acción: cargar una dirección con al menos una ventana sin capacidad en DEV.",
   "observed": "No se ejecutó: la data declarada no sirve o está en TBD.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio con {DIRECCION_CON_VENTANA_SIN_CAPACIDAD}, que tiene al menos una ventana sin capacidad",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario intenta seleccionar una ventana sin capacidad.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {DIRECCION_CON_VENTANA_SIN_CAPACIDAD}, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-16",
   "expected": "No se muestra Envío Express y la ventana más próxima queda seleccionada con su rango horario y precio.",
   "form_factor": "desktop",
   "id": "TC-B2C147-D-009",
   "name": "Verificar que sin Express disponible queda seleccionada la ventana más próxima [Desktop] [Logueado]",
   "observation": "Causa: {DIRECCION_SIN_EXPRESS} = Pasaje Diez 359, Peñaflor no tiene cobertura en DEV: al agregarla el Store Locator responde 'Aún no llegamos a esta dirección' (2026-10-16). Acción: declarar una dirección con cobertura cuya tienda no tenga Express.",
   "observed": "No se ejecutó: la data declarada no sirve o está en TBD.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Pasaje Diez 359, Penaflor",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario revisa la sección de horarios.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Pasaje Diez 359, Penaflor, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 106.3,
   "executed_at": "2026-10-16",
   "expected": "La tarjeta rosada muestra \"Retira tu compra en\" con nombre y dirección de Unimarc Las Condes, \"Fecha de retiro\", \"¿Cuándo quieres retirar tu compra?\", horarios sin precio, resumen con Subtotal y Subtotal con Unipay, \"¿Recibe alguien más?\" y \"Ir a pagar\" habilitado en dos columnas.",
   "form_factor": "desktop",
   "id": "TC-B2C147-D-010",
   "name": "Verificar que con retiro en tienda la página muestra la tienda y horarios sin precio [Desktop] [Logueado]",
   "observation": "Esperado: tarjeta 'Retira tu compra en' con nombre y dirección de Unimarc Las Condes (CA5: [Nombre] [Dirección], [Comuna], [Región]). Obtenido: solo 'Unimarc Las Condes', sin dirección, comuna ni región (2 de 2 intentos). tests/B2C-147.spec.ts:386. Bug: B2C-1222.",
   "observed": "La tarjeta dice 'Retira tu compra en: Unimarc Las Condes', sin dirección, comuna ni región.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Retiro en tienda configurado con Unimarc Las Condes",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C147-D-010-p02-carro-cargado.png"
    },
    {
     "caption": "Estado al fallar la aserción: la tarjeta de retiro solo trae el nombre de la tienda",
     "file": "TC-B2C147-D-010-p04-mis-envios-retiro.png"
    }
   ],
   "spec": "tests/B2C-147.spec.ts:386",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario revisa la página.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 20000, 000000000000675191-UN, Unimarc Las Condes, 11, cuenta de comprador (correo + OTP)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-16",
   "expected": "Envío Express aparece deshabilitado, se muestra \"El carro no cumple con el monto máximo para el despacho express\" con X, la ventana estándar más próxima queda seleccionada y el subtotal refleja su costo.",
   "form_factor": "desktop",
   "id": "TC-B2C147-D-011",
   "name": "Verificar que si el carro supera el monto máximo Express se deshabilita con un aviso [Desktop] [Logueado]",
   "observation": "Causa: {MONTO_MAXIMO_EXPRESS} está en TBD en el Excel de data. Acción: cargar el monto máximo configurado para Envío Express (y una dirección con Express disponible).",
   "observed": "No se ejecutó: la data declarada no sirve o está en TBD.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)\n- Despacho a domicilio con Calle Uno 23, La Florida\n- El subtotal del carro supera {MONTO_MAXIMO_EXPRESS}",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario revisa la sección de horarios y el subtotal.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, {MONTO_MAXIMO_EXPRESS}, 000000000000675191-UN, cuenta de comprador (correo + OTP)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-16",
   "expected": "El aviso se cierra y Envío Express sigue deshabilitado.",
   "form_factor": "desktop",
   "id": "TC-B2C147-D-012",
   "name": "Verificar que el aviso de monto máximo Express se cierra con la X [Desktop] [Logueado]",
   "observation": "Causa: {MONTO_MAXIMO_EXPRESS} está en TBD en el Excel de data. Acción: cargar el monto máximo configurado para Envío Express (y una dirección con Express disponible).",
   "observed": "No se ejecutó: la data declarada no sirve o está en TBD.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)\n- Despacho a domicilio con Calle Uno 23, La Florida\n- El subtotal del carro supera {MONTO_MAXIMO_EXPRESS}",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario hace clic en la X del aviso de monto máximo.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, {MONTO_MAXIMO_EXPRESS}, 000000000000675191-UN, cuenta de comprador (correo + OTP)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-16",
   "expected": "Se muestra la pantalla con imagen, título \"Sin horarios disponibles\", subtítulo \"Lo sentimos actualmente no tenemos horarios…\" con STL-041 y los CTA \"Cambiar dirección\" y \"Volver al inicio\".",
   "form_factor": "desktop",
   "id": "TC-B2C147-D-013",
   "name": "Verificar que sin ventanas disponibles se muestra la pantalla Sin horarios disponibles [Desktop] [Logueado]",
   "observation": "Causa: {DIRECCION_SIN_SLA} = Av. Libertador Gral. Bernardo O'Higgins 1072, Maipú no tiene cobertura en DEV ('Aún no llegamos a esta dirección' → Home con 'Despacho sin cobertura', visto el 2026-10-14 en B2C-189), no da 'Sin horarios disponibles' (STL-041). Acción: declarar una dirección con cobertura y sin ventanas disponibles.",
   "observed": "No se ejecutó: la data declarada no sirve o está en TBD.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Av Libertador Gral Bernardo O'Higgins 1072, Maipú",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Av Libertador Gral Bernardo O'Higgins 1072, Maipú, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-16",
   "expected": "Se abre el flujo del Store Locator para cambiar la dirección.",
   "form_factor": "desktop",
   "id": "TC-B2C147-D-014",
   "name": "Verificar que Cambiar dirección en Sin horarios disponibles abre el Store Locator [Desktop] [Logueado]",
   "observation": "Causa: {DIRECCION_SIN_SLA} = Av. Libertador Gral. Bernardo O'Higgins 1072, Maipú no tiene cobertura en DEV ('Aún no llegamos a esta dirección' → Home con 'Despacho sin cobertura', visto el 2026-10-14 en B2C-189), no da 'Sin horarios disponibles' (STL-041). Acción: declarar una dirección con cobertura y sin ventanas disponibles.",
   "observed": "No se ejecutó: la data declarada no sirve o está en TBD.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Av Libertador Gral Bernardo O'Higgins 1072, Maipú",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema muestra la pantalla \"Sin horarios disponibles\".\n5. El usuario hace clic en \"Cambiar dirección\".",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Av Libertador Gral Bernardo O'Higgins 1072, Maipú, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-16",
   "expected": "El usuario es redirigido al Home.",
   "form_factor": "desktop",
   "id": "TC-B2C147-D-015",
   "name": "Verificar que Volver al inicio en Sin horarios disponibles redirige al Home [Desktop] [Logueado]",
   "observation": "Causa: {DIRECCION_SIN_SLA} = Av. Libertador Gral. Bernardo O'Higgins 1072, Maipú no tiene cobertura en DEV ('Aún no llegamos a esta dirección' → Home con 'Despacho sin cobertura', visto el 2026-10-14 en B2C-189), no da 'Sin horarios disponibles' (STL-041). Acción: declarar una dirección con cobertura y sin ventanas disponibles.",
   "observed": "No se ejecutó: la data declarada no sirve o está en TBD.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Av Libertador Gral Bernardo O'Higgins 1072, Maipú",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema muestra la pantalla \"Sin horarios disponibles\".\n5. El usuario hace clic en \"Volver al inicio\".",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Av Libertador Gral Bernardo O'Higgins 1072, Maipú, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-16",
   "expected": "Se muestra imagen, \"Ups, algo salió mal\", \"No logramos cargar la…\" y el código ME-034 con \"Reintentar\" y \"Volver al inicio\"; al reintentar sin error se carga \"Datos de entrega\".",
   "form_factor": "desktop",
   "id": "TC-B2C147-D-016",
   "name": "Verificar que un error al cargar las ventanas muestra ME-034 y Reintentar vuelve a consultar [Desktop] [Logueado]",
   "observation": "Causa: {JANIS_API_ENDPOINT} está en TBD en el Excel de data. Acción: cargar el endpoint de Janis a bloquear (en DEV la consulta de ventanas es POST /mobify/proxy/api/custom/smu-delivery/v1/.../schedule).",
   "observed": "No se ejecutó: la data declarada no sirve o está en TBD.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- DevTools abierto con bloqueo de la request {JANIS_API_ENDPOINT} (Network request blocking)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema muestra la pantalla de error.\n5. El usuario desactiva en DevTools el bloqueo de la request {JANIS_API_ENDPOINT}.\n6. El usuario hace clic en \"Reintentar\".",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, {JANIS_API_ENDPOINT}, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-16",
   "expected": "El usuario es redirigido al Home.",
   "form_factor": "desktop",
   "id": "TC-B2C147-D-017",
   "name": "Verificar que Volver al inicio en el error de carga redirige al Home [Desktop] [Logueado]",
   "observation": "Causa: {JANIS_API_ENDPOINT} está en TBD en el Excel de data. Acción: cargar el endpoint de Janis a bloquear (en DEV la consulta de ventanas es POST /mobify/proxy/api/custom/smu-delivery/v1/.../schedule).",
   "observed": "No se ejecutó: la data declarada no sirve o está en TBD.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- DevTools abierto con bloqueo de la request {JANIS_API_ENDPOINT} (Network request blocking)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema muestra la pantalla de error ME-034.\n5. El usuario hace clic en \"Volver al inicio\".",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, {JANIS_API_ENDPOINT}, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-16",
   "expected": "El loader desaparece y la sección de horarios revierte al estado anterior. La selección del usuario permanece visible (puede reintentar eligiendo de nuevo). El card de entrega mantiene la ventana previamente confirmada. Se muestra el toast de error: «Lo sentimos, no pudimos cambiar tu fecha de entrega. Inténtalo nuevamente. Error: ME-035» y persiste hasta cierre manual con ×.",
   "form_factor": "desktop",
   "id": "TC-B2C147-D-018",
   "name": "Verificar que un fallo al guardar la selección de ventana muestra el toast ME-035 [Desktop] [Logueado]",
   "observation": "Causa: {JANIS_API_ENDPOINT} está en TBD en el Excel de data. Acción: cargar el endpoint de Janis a bloquear (en DEV la consulta de ventanas es POST /mobify/proxy/api/custom/smu-delivery/v1/.../schedule).",
   "observed": "No se ejecutó: la data declarada no sirve o está en TBD.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- Página \"Datos de entrega\" cargada con ventana auto-seleccionada\n- DevTools abierto con bloqueo de la request de guardado de ventana en {JANIS_API_ENDPOINT} (retorna 500/503)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart y hace clic en \"Continuar con la entrega\".\n2. La página \"Datos de entrega\" carga correctamente con una ventana auto-seleccionada.\n3. En DevTools, activar el bloqueo de la request de guardado de ventana en {JANIS_API_ENDPOINT}.\n4. El usuario selecciona una ventana horaria distinta a la pre-seleccionada.\n5. Observar que aparece el loader de confirmación automática.\n6. Verificar que el loader desaparece con error.\n7. Verificar el estado de la sección de horarios.\n8. Verificar el contenido del card de entrega en el encabezado.\n9. Verificar que aparece el toast de error.\n10. Verificar que el toast persiste sin cerrarse automáticamente.\n11. Cerrar el toast con la × y verificar que desaparece.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, {JANIS_API_ENDPOINT}, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)",
   "viewport": "1440x900"
  },
  {
   "browser": "webkit",
   "duration_s": 161.3,
   "executed_at": "2026-10-16",
   "expected": "Se muestra el skeleton con el título \"Datos de entrega\" y placeholders grises; al completar la carga se muestra la página \"Datos de entrega\".",
   "form_factor": "mobile",
   "id": "TC-B2C147-M-001",
   "name": "Verificar que al continuar desde el carro Mis Envíos muestra el skeleton y luego Datos de entrega [Mobile] [Logueado]",
   "observation": "Con {USER_AUTH_001} en despacho a Calle Uno 23, La Florida y 11 × {SKU_VALID_001}: al continuar se ve el skeleton (placeholders grises) con el título 'Datos de entrega' y luego la página completa. 'Slow 3G' simulado retrasando 6 s la consulta de ventanas a Janis (POST …/smu-delivery/…/schedule).",
   "observed": "Con {USER_AUTH_001} en despacho a Calle Uno 23, La Florida y 11 × {SKU_VALID_001}: al continuar se ve el skeleton (placeholders grises) con el título 'Datos de entrega' y luego la página completa. 'Slow 3G' simulado retrasando 6 s la consulta de ventanas a Janis (POST …/smu-delivery/…/schedule).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- DevTools abierto con throttling de red \"Slow 3G\"",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C147-M-001-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 3 — skeleton con el titulo datos de entrega",
     "file": "TC-B2C147-M-001-p03-skeleton-con-el-titulo-datos-de-entrega.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C147-M-001.png"
    }
   ],
   "spec": "tests/B2C-147.spec.ts:241",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 98.3,
   "executed_at": "2026-10-16",
   "expected": "El usuario es redirigido al flujo de inicio de sesión y la página Mis Envíos no se muestra.",
   "form_factor": "mobile",
   "id": "TC-B2C147-M-002",
   "name": "Verificar que un usuario sin sesión que intenta ir a Mis Envíos es redirigido al inicio de sesión [Mobile] [Guest]",
   "observation": "Invitado con {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida y 11 × {SKU_VALID_001}: 'Continuar con la entrega' abre '¡Hola, ingresa aquí!' y la URL sigue en /cart; Mis Envíos no se pinta en ningún momento.",
   "observed": "Invitado con {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida y 11 × {SKU_VALID_001}: 'Continuar con la entrega' abre '¡Hola, ingresa aquí!' y la URL sigue en /cart; Mis Envíos no se pinta en ningún momento.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida",
   "screenshots": [
    {
     "caption": "Paso 2 — carro de invitado sobre el minimo",
     "file": "TC-B2C147-M-002-p02-carro-de-invitado-sobre-el-minimo.png"
    },
    {
     "caption": "Paso 3 — inicio de sesion al continuar",
     "file": "TC-B2C147-M-002-p03-inicio-de-sesion-al-continuar.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C147-M-002.png"
    }
   ],
   "spec": "tests/B2C-147.spec.ts:259",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, 20000, 000000000000675191-UN, 11",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 101.2,
   "executed_at": "2026-10-16",
   "expected": "La página muestra header simplificado con \"<\", título \"Datos de entrega\", tarjeta rosada con la dirección y chevron, \"Fecha de entrega\", \"¿Cuándo quieres recibir tu compra?\", selector de fechas, \"¿Cuál es el horario de tu preferencia?\", horarios con precio, \"¿Recibe alguien más?\", resumen de totales y CTA \"Ir a pagar\" habilitado.",
   "form_factor": "mobile",
   "id": "TC-B2C147-M-003",
   "name": "Verificar que con despacho a domicilio la página Datos de entrega muestra todos sus elementos [Mobile] [Logueado]",
   "observation": "Despacho a Calle Uno 23, La Florida: header y footer simplificados, '<', título, tarjeta 'Enviaremos tu compra a:' con chevron, Fecha de entrega, selector de fechas, horarios con precio ($2.990), '¿Recibe alguien más?', Despacho / Subtotal / Subtotal con Unipay e 'Ir a pagar' habilitado. La UI dice '¿Cuál es tu horario de preferencia?' (el TC: '¿Cuál es el horario de tu preferencia?'; igual que el CA6).",
   "observed": "Despacho a Calle Uno 23, La Florida: header y footer simplificados, '<', título, tarjeta 'Enviaremos tu compra a:' con chevron, Fecha de entrega, selector de fechas, horarios con precio ($2.990), '¿Recibe alguien más?', Despacho / Subtotal / Subtotal con Unipay e 'Ir a pagar' habilitado. La UI dice '¿Cuál es tu horario de preferencia?' (el TC: '¿Cuál es el horario de tu preferencia?'; igual que el CA6).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C147-M-003-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — mis envios despacho",
     "file": "TC-B2C147-M-003-p04-mis-envios-despacho.png"
    },
    {
     "caption": "Paso 5 — pagina datos de entrega despacho",
     "file": "TC-B2C147-M-003-p05-pagina-datos-de-entrega-despacho.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C147-M-003.png"
    }
   ],
   "spec": "tests/B2C-147.spec.ts:277",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario revisa la página.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-16",
   "expected": "La tarjeta muestra la dirección con \"S/N\" en lugar del número y, si no hay complemento, sin coma vacía.",
   "form_factor": "mobile",
   "id": "TC-B2C147-M-004",
   "name": "Verificar que una dirección sin número se muestra con S/N y sin comas vacías [Mobile] [Logueado]",
   "observation": "Causa: {DIRECCION_SIN_NUMERO} = 'Metropolitana, Las Condes, Las Condes' no es una calle: el Store Locator no ofrece ninguna sugerencia de Google que corresponda (2026-10-16), así que no se puede configurar como despacho. Acción: declarar una calle real sin número que Google sugiera y que tenga cobertura.",
   "observed": "No se ejecutó: la data declarada no sirve o está en TBD.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Metropolitana, Las Condes, Las Condes (sin número ni complemento)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario revisa la tarjeta de dirección.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Metropolitana, Las Condes, Las Condes, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 170.5,
   "executed_at": "2026-10-16",
   "expected": "El selector muestra los días que retorna Janis (\"Hoy\" + número, abreviatura de día + número), con los días sin disponibilidad deshabilitados y el primer día disponible seleccionado.",
   "form_factor": "mobile",
   "id": "TC-B2C147-M-005",
   "name": "Verificar que el selector de fechas muestra los días de Janis con el primero disponible marcado [Mobile] [Logueado]",
   "observation": "Días 'Hoy 16', 'Sab 17' … con 'Hoy' seleccionado (primer día disponible); ninguno deshabilitado ese día. El viernes aparece como 'Vier 23' (4 letras; el resto, 3).",
   "observed": "Días 'Hoy 16', 'Sab 17' … con 'Hoy' seleccionado (primer día disponible); ninguno deshabilitado ese día. El viernes aparece como 'Vier 23' (4 letras; el resto, 3).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C147-M-005-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — mis envios despacho",
     "file": "TC-B2C147-M-005-p04-mis-envios-despacho.png"
    },
    {
     "caption": "Paso 5 — selector de fechas",
     "file": "TC-B2C147-M-005-p05-selector-de-fechas.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C147-M-005.png"
    }
   ],
   "spec": "tests/B2C-147.spec.ts:313",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario revisa el selector de fechas.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-16",
   "expected": "El resumen muestra Despacho, Subtotal (subtotal + despacho) y Subtotal con Unipay (subtotal con descuento + despacho).",
   "form_factor": "mobile",
   "id": "TC-B2C147-M-006",
   "name": "Verificar que el resumen de totales incluye despacho, subtotal y subtotal con Unipay [Mobile] [Logueado]",
   "observation": "Causa: {SKU_UNIPAY_001} = 000000000000661945-UN (Lavaloza Quix 1.5 L) no tiene precio Unipay en DEV: el shelf muestra solo $4.750 y en Mis Envíos 'Subtotal con Unipay' = 'Subtotal' ($35.130 con 11 × {SKU_VALID_001}), sin descuento que verificar. Acción: declarar un SKU con descuento Unipay vigente en DEV.",
   "observed": "No se ejecutó: la data declarada no sirve o está en TBD.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- El carro también contiene 000000000000661945-UN\n- Despacho a domicilio configurado con Calle Uno 23, La Florida",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario revisa el resumen de totales.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, 20000, 000000000000661945-UN, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-16",
   "expected": "La sección muestra \"Envío Express 30-60min\" seleccionado por defecto y las ventanas con rango horario y precio.",
   "form_factor": "mobile",
   "id": "TC-B2C147-M-007",
   "name": "Verificar que con Express disponible Envío Express queda seleccionado por defecto [Mobile] [Logueado]",
   "observation": "Causa: con {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} = Calle Uno 23, La Florida, Mis Envíos no ofrece 'Envío Express' (solo 12:00-15:00, 15:00-18:00 y 18:00-21:00 a $2.990; 2026-10-16), así que no se puede validar la selección por defecto de Express. Acción: declarar una dirección cuya tienda abastecedora tenga Express habilitado en DEV.",
   "observed": "No se ejecutó: la data declarada no sirve o está en TBD.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario revisa la sección de horarios.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-16",
   "expected": "Las ventanas sin capacidad se muestran deshabilitadas y no se pueden seleccionar.",
   "form_factor": "mobile",
   "id": "TC-B2C147-M-008",
   "name": "Verificar que los horarios sin capacidad de entrega se muestran deshabilitados [Mobile] [Logueado]",
   "observation": "Causa: {DIRECCION_CON_VENTANA_SIN_CAPACIDAD} está en TBD en el Excel de data. Acción: cargar una dirección con al menos una ventana sin capacidad en DEV.",
   "observed": "No se ejecutó: la data declarada no sirve o está en TBD.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio con {DIRECCION_CON_VENTANA_SIN_CAPACIDAD}, que tiene al menos una ventana sin capacidad",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario intenta seleccionar una ventana sin capacidad.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {DIRECCION_CON_VENTANA_SIN_CAPACIDAD}, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-16",
   "expected": "No se muestra Envío Express y la ventana más próxima queda seleccionada con su rango horario y precio.",
   "form_factor": "mobile",
   "id": "TC-B2C147-M-009",
   "name": "Verificar que sin Express disponible queda seleccionada la ventana más próxima [Mobile] [Logueado]",
   "observation": "Causa: {DIRECCION_SIN_EXPRESS} = Pasaje Diez 359, Peñaflor no tiene cobertura en DEV: al agregarla el Store Locator responde 'Aún no llegamos a esta dirección' (2026-10-16). Acción: declarar una dirección con cobertura cuya tienda no tenga Express.",
   "observed": "No se ejecutó: la data declarada no sirve o está en TBD.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Pasaje Diez 359, Penaflor",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario revisa la sección de horarios.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Pasaje Diez 359, Penaflor, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 107,
   "executed_at": "2026-10-16",
   "expected": "La tarjeta rosada muestra \"Retira tu compra en\" con nombre y dirección de Unimarc Las Condes, \"Fecha de retiro\", \"¿Cuándo quieres retirar tu compra?\", horarios sin precio, resumen con Subtotal y Subtotal con Unipay, \"¿Recibe alguien más?\" y \"Ir a pagar\" habilitado.",
   "form_factor": "mobile",
   "id": "TC-B2C147-M-010",
   "name": "Verificar que con retiro en tienda la página muestra la tienda y horarios sin precio [Mobile] [Logueado]",
   "observation": "Esperado: tarjeta 'Retira tu compra en' con nombre y dirección de Unimarc Las Condes (CA5: [Nombre] [Dirección], [Comuna], [Región]). Obtenido: solo 'Unimarc Las Condes', sin dirección, comuna ni región (2 de 2 intentos). tests/B2C-147.spec.ts:386. Bug: B2C-1222.",
   "observed": "La tarjeta dice 'Retira tu compra en: Unimarc Las Condes', sin dirección, comuna ni región.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Retiro en tienda configurado con Unimarc Las Condes",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C147-M-010-p02-carro-cargado.png"
    },
    {
     "caption": "Estado al fallar la aserción: la tarjeta de retiro solo trae el nombre de la tienda",
     "file": "TC-B2C147-M-010-p04-mis-envios-retiro.png"
    }
   ],
   "spec": "tests/B2C-147.spec.ts:386",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario revisa la página.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 20000, 000000000000675191-UN, Unimarc Las Condes, 11, cuenta de comprador (correo + OTP)",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-16",
   "expected": "Envío Express aparece deshabilitado, se muestra \"El carro no cumple con el monto máximo para el despacho express\" con X, la ventana estándar más próxima queda seleccionada y el subtotal refleja su costo.",
   "form_factor": "mobile",
   "id": "TC-B2C147-M-011",
   "name": "Verificar que si el carro supera el monto máximo Express se deshabilita con un aviso [Mobile] [Logueado]",
   "observation": "Causa: {MONTO_MAXIMO_EXPRESS} está en TBD en el Excel de data. Acción: cargar el monto máximo configurado para Envío Express (y una dirección con Express disponible).",
   "observed": "No se ejecutó: la data declarada no sirve o está en TBD.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)\n- Despacho a domicilio con Calle Uno 23, La Florida\n- El subtotal del carro supera {MONTO_MAXIMO_EXPRESS}",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario revisa la sección de horarios y el subtotal.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, {MONTO_MAXIMO_EXPRESS}, 000000000000675191-UN, cuenta de comprador (correo + OTP)",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-16",
   "expected": "El aviso se cierra y Envío Express sigue deshabilitado.",
   "form_factor": "mobile",
   "id": "TC-B2C147-M-012",
   "name": "Verificar que el aviso de monto máximo Express se cierra con la X [Mobile] [Logueado]",
   "observation": "Causa: {MONTO_MAXIMO_EXPRESS} está en TBD en el Excel de data. Acción: cargar el monto máximo configurado para Envío Express (y una dirección con Express disponible).",
   "observed": "No se ejecutó: la data declarada no sirve o está en TBD.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)\n- Despacho a domicilio con Calle Uno 23, La Florida\n- El subtotal del carro supera {MONTO_MAXIMO_EXPRESS}",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca la X del aviso de monto máximo.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, {MONTO_MAXIMO_EXPRESS}, 000000000000675191-UN, cuenta de comprador (correo + OTP)",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-16",
   "expected": "Se muestra la pantalla con imagen, título \"Sin horarios disponibles\", subtítulo \"Lo sentimos actualmente no tenemos horarios…\" con STL-041 y los CTA \"Cambiar dirección\" y \"Volver al inicio\".",
   "form_factor": "mobile",
   "id": "TC-B2C147-M-013",
   "name": "Verificar que sin ventanas disponibles se muestra la pantalla Sin horarios disponibles [Mobile] [Logueado]",
   "observation": "Causa: {DIRECCION_SIN_SLA} = Av. Libertador Gral. Bernardo O'Higgins 1072, Maipú no tiene cobertura en DEV ('Aún no llegamos a esta dirección' → Home con 'Despacho sin cobertura', visto el 2026-10-14 en B2C-189), no da 'Sin horarios disponibles' (STL-041). Acción: declarar una dirección con cobertura y sin ventanas disponibles.",
   "observed": "No se ejecutó: la data declarada no sirve o está en TBD.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Av Libertador Gral Bernardo O'Higgins 1072, Maipú",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Av Libertador Gral Bernardo O'Higgins 1072, Maipú, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-16",
   "expected": "Se abre el flujo del Store Locator para cambiar la dirección.",
   "form_factor": "mobile",
   "id": "TC-B2C147-M-014",
   "name": "Verificar que Cambiar dirección en Sin horarios disponibles abre el Store Locator [Mobile] [Logueado]",
   "observation": "Causa: {DIRECCION_SIN_SLA} = Av. Libertador Gral. Bernardo O'Higgins 1072, Maipú no tiene cobertura en DEV ('Aún no llegamos a esta dirección' → Home con 'Despacho sin cobertura', visto el 2026-10-14 en B2C-189), no da 'Sin horarios disponibles' (STL-041). Acción: declarar una dirección con cobertura y sin ventanas disponibles.",
   "observed": "No se ejecutó: la data declarada no sirve o está en TBD.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Av Libertador Gral Bernardo O'Higgins 1072, Maipú",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema muestra la pantalla \"Sin horarios disponibles\".\n5. El usuario toca \"Cambiar dirección\".",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Av Libertador Gral Bernardo O'Higgins 1072, Maipú, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-16",
   "expected": "El usuario es redirigido al Home.",
   "form_factor": "mobile",
   "id": "TC-B2C147-M-015",
   "name": "Verificar que Volver al inicio en Sin horarios disponibles redirige al Home [Mobile] [Logueado]",
   "observation": "Causa: {DIRECCION_SIN_SLA} = Av. Libertador Gral. Bernardo O'Higgins 1072, Maipú no tiene cobertura en DEV ('Aún no llegamos a esta dirección' → Home con 'Despacho sin cobertura', visto el 2026-10-14 en B2C-189), no da 'Sin horarios disponibles' (STL-041). Acción: declarar una dirección con cobertura y sin ventanas disponibles.",
   "observed": "No se ejecutó: la data declarada no sirve o está en TBD.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Av Libertador Gral Bernardo O'Higgins 1072, Maipú",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema muestra la pantalla \"Sin horarios disponibles\".\n5. El usuario toca \"Volver al inicio\".",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Av Libertador Gral Bernardo O'Higgins 1072, Maipú, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-16",
   "expected": "Se muestra imagen, \"Ups, algo salió mal\", \"No logramos cargar la…\" y el código ME-034 con \"Reintentar\" y \"Volver al inicio\"; al reintentar sin error se carga \"Datos de entrega\".",
   "form_factor": "mobile",
   "id": "TC-B2C147-M-016",
   "name": "Verificar que un error al cargar las ventanas muestra ME-034 y Reintentar vuelve a consultar [Mobile] [Logueado]",
   "observation": "Causa: {JANIS_API_ENDPOINT} está en TBD en el Excel de data. Acción: cargar el endpoint de Janis a bloquear (en DEV la consulta de ventanas es POST /mobify/proxy/api/custom/smu-delivery/v1/.../schedule).",
   "observed": "No se ejecutó: la data declarada no sirve o está en TBD.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- DevTools abierto con bloqueo de la request {JANIS_API_ENDPOINT} (Network request blocking)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema muestra la pantalla de error.\n5. El usuario desactiva en DevTools el bloqueo de la request {JANIS_API_ENDPOINT}.\n6. El usuario toca \"Reintentar\".",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, {JANIS_API_ENDPOINT}, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-16",
   "expected": "El usuario es redirigido al Home.",
   "form_factor": "mobile",
   "id": "TC-B2C147-M-017",
   "name": "Verificar que Volver al inicio en el error de carga redirige al Home [Mobile] [Logueado]",
   "observation": "Causa: {JANIS_API_ENDPOINT} está en TBD en el Excel de data. Acción: cargar el endpoint de Janis a bloquear (en DEV la consulta de ventanas es POST /mobify/proxy/api/custom/smu-delivery/v1/.../schedule).",
   "observed": "No se ejecutó: la data declarada no sirve o está en TBD.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- DevTools abierto con bloqueo de la request {JANIS_API_ENDPOINT} (Network request blocking)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema muestra la pantalla de error ME-034.\n5. El usuario toca \"Volver al inicio\".",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, {JANIS_API_ENDPOINT}, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-16",
   "expected": "El loader desaparece y la sección de horarios revierte al estado anterior. La selección del usuario permanece visible (puede reintentar eligiendo de nuevo). El card de entrega mantiene la ventana previamente confirmada. Se muestra el toast de error: «Lo sentimos, no pudimos cambiar tu fecha de entrega. Inténtalo nuevamente. Error: ME-035» y persiste hasta cierre manual con ×.",
   "form_factor": "mobile",
   "id": "TC-B2C147-M-018",
   "name": "Verificar que un fallo al guardar la selección de ventana muestra el toast ME-035 [Mobile] [Logueado]",
   "observation": "Causa: {JANIS_API_ENDPOINT} está en TBD en el Excel de data. Acción: cargar el endpoint de Janis a bloquear (en DEV la consulta de ventanas es POST /mobify/proxy/api/custom/smu-delivery/v1/.../schedule).",
   "observed": "No se ejecutó: la data declarada no sirve o está en TBD.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- Página \"Datos de entrega\" cargada con ventana auto-seleccionada\n- DevTools abierto con bloqueo de la request de guardado de ventana en {JANIS_API_ENDPOINT} (retorna 500/503)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart y toca \"Continuar con la entrega\".\n2. La página \"Datos de entrega\" carga correctamente con una ventana auto-seleccionada.\n3. En DevTools, activar el bloqueo de la request de guardado de ventana en {JANIS_API_ENDPOINT}.\n4. El usuario toca una ventana horaria distinta a la pre-seleccionada.\n5. Observar que aparece el loader de confirmación automática.\n6. Verificar que el loader desaparece con error.\n7. Verificar el estado de la sección de horarios.\n8. Verificar el contenido del card de entrega en el encabezado.\n9. Verificar que aparece el toast de error.\n10. Verificar que el toast persiste sin cerrarse automáticamente.\n11. Cerrar el toast con la × y verificar que desaparece.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, {JANIS_API_ENDPOINT}, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "duration_s": 61.1,
   "executed_at": "2026-10-16",
   "expected": "El usuario es redirigido al flujo de inicio de sesión y la página Mis Envíos no se muestra.",
   "form_factor": "desktop",
   "id": "TC-B2C147-D-020",
   "name": "Verificar que un usuario sin sesión que usa \"Ir a pagar\" del minicarro es redirigido al inicio de sesión [Desktop] [Guest]",
   "observation": "Invitado con Calle Uno 23, La Florida y 11 × {SKU_VALID_001}: 'Ir a pagar' del minicarro abre '¡Hola, ingresa aquí!' y la URL sigue en el Home; Mis Envíos no se pinta.",
   "observed": "Invitado con Calle Uno 23, La Florida y 11 × {SKU_VALID_001}: 'Ir a pagar' del minicarro abre '¡Hola, ingresa aquí!' y la URL sigue en el Home; Mis Envíos no se pinta.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida",
   "screenshots": [
    {
     "caption": "Paso 3 — minicarro desplegado",
     "file": "TC-B2C147-D-020-p03-minicarro-desplegado.png"
    },
    {
     "caption": "Paso 4 — inicio de sesion tras clic en ir a pagar",
     "file": "TC-B2C147-D-020-p04-inicio-de-sesion-tras-clic-en-ir-a-pagar.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C147-D-020.png"
    }
   ],
   "spec": "tests/B2C-147.spec.ts:358",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El usuario hace clic en el ícono del carrito en el header.\n3. El sistema despliega el panel flotante del minicarro.\n4. El usuario hace clic en \"Ir a pagar\".",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, 20000, 000000000000675191-UN, 11",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 67.8,
   "executed_at": "2026-10-16",
   "expected": "El modal se cierra. Se muestra el skeleton con el título \"Datos de entrega\" y placeholders grises; al completar la carga se muestra la página \"Datos de entrega\".",
   "form_factor": "desktop",
   "id": "TC-B2C147-D-021",
   "name": "Verificar que \"Continuar\" en el modal \"No te olvides\" lleva a Mis Envíos con skeleton y luego Datos de entrega [Desktop] [Logueado]",
   "observation": "Con {USER_AUTH_001}: 'Continuar con la entrega' abre '¡Que no se te olviden!' (el TC lo llama 'No te olvides') con sugeridos de 'Lo que más compro'/'Mis favoritos'; 'Continuar' lo cierra y se ve el skeleton con el título y luego Datos de entrega (red lenta simulada en la consulta de ventanas).",
   "observed": "Con {USER_AUTH_001}: 'Continuar con la entrega' abre '¡Que no se te olviden!' (el TC lo llama 'No te olvides') con sugeridos de 'Lo que más compro'/'Mis favoritos'; 'Continuar' lo cierra y se ve el skeleton con el título y luego Datos de entrega (red lenta simulada en la consulta de ventanas).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- La cuenta tiene productos sugeridos (My Usuals o favoritos) que no están en el carro\n- DevTools abierto con throttling de red \"Slow 3G\"",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C147-D-021-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — modal no te olvides con sugeridos",
     "file": "TC-B2C147-D-021-p04-modal-no-te-olvides-con-sugeridos.png"
    },
    {
     "caption": "Paso 5 — skeleton con el titulo datos de entrega",
     "file": "TC-B2C147-D-021-p05-skeleton-con-el-titulo-datos-de-entrega.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C147-D-021.png"
    }
   ],
   "spec": "tests/B2C-147.spec.ts:334",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\".\n4. El sistema muestra el modal \"No te olvides\" con los productos sugeridos.\n5. El usuario hace clic en \"Continuar\" en el modal.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-16",
   "expected": "Se muestra la pantalla con imagen, título \"Sin horarios disponibles\", subtítulo \"Lo sentimos actualmente no tenemos horarios…\" con STL-041 y los CTA \"Cambiar dirección\" y \"Volver al inicio\".",
   "form_factor": "desktop",
   "id": "TC-B2C147-D-022",
   "name": "Verificar que sin ventanas disponibles en retiro en tienda se muestra la pantalla Sin horarios disponibles [Desktop] [Logueado]",
   "observation": "Causa: {TIENDA_SIN_SLA} = 'Unimac Los Lagos II' (typo de 'Unimarc Los Lagos II', tomada como la misma tienda) responde 'Aún no llegamos a esta dirección' al confirmarla como retiro (2026-10-16), no 'Sin horarios disponibles'. Acción: declarar una tienda con cobertura y sin ventanas de retiro.",
   "observed": "No se ejecutó: la data declarada no sirve o está en TBD.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Retiro en tienda configurado con Unimac Los Lagos II",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 20000, 000000000000675191-UN, Unimac Los Lagos II, 11, cuenta de comprador (correo + OTP)",
   "viewport": "1440x900"
  },
  {
   "browser": "webkit",
   "duration_s": 130.4,
   "executed_at": "2026-10-16",
   "expected": "El modal se cierra. Se muestra el skeleton con el título \"Datos de entrega\" y placeholders grises; al completar la carga se muestra la página \"Datos de entrega\".",
   "form_factor": "mobile",
   "id": "TC-B2C147-M-019",
   "name": "Verificar que \"Continuar\" en el modal \"No te olvides\" lleva a Mis Envíos con skeleton y luego Datos de entrega [Mobile] [Logueado]",
   "observation": "Con {USER_AUTH_001}: 'Continuar con la entrega' abre '¡Que no se te olviden!' (el TC lo llama 'No te olvides') con sugeridos de 'Lo que más compro'/'Mis favoritos'; 'Continuar' lo cierra y se ve el skeleton con el título y luego Datos de entrega (red lenta simulada en la consulta de ventanas).",
   "observed": "Con {USER_AUTH_001}: 'Continuar con la entrega' abre '¡Que no se te olviden!' (el TC lo llama 'No te olvides') con sugeridos de 'Lo que más compro'/'Mis favoritos'; 'Continuar' lo cierra y se ve el skeleton con el título y luego Datos de entrega (red lenta simulada en la consulta de ventanas).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- La cuenta tiene productos sugeridos (My Usuals o favoritos) que no están en el carro\n- DevTools abierto con throttling de red \"Slow 3G\"",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C147-M-019-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — modal no te olvides con sugeridos",
     "file": "TC-B2C147-M-019-p04-modal-no-te-olvides-con-sugeridos.png"
    },
    {
     "caption": "Paso 5 — skeleton con el titulo datos de entrega",
     "file": "TC-B2C147-M-019-p05-skeleton-con-el-titulo-datos-de-entrega.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C147-M-019.png"
    }
   ],
   "spec": "tests/B2C-147.spec.ts:334",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"No te olvides\" con los productos sugeridos.\n5. El usuario toca \"Continuar\" en el modal.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, 20000, 000000000000675191-UN, 11, cuenta de comprador (correo + OTP)",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-16",
   "expected": "Se muestra la pantalla con imagen, título \"Sin horarios disponibles\", subtítulo \"Lo sentimos actualmente no tenemos horarios…\" con STL-041 y los CTA \"Cambiar dirección\" y \"Volver al inicio\".",
   "form_factor": "mobile",
   "id": "TC-B2C147-M-020",
   "name": "Verificar que sin ventanas disponibles en retiro en tienda se muestra la pantalla Sin horarios disponibles [Mobile] [Logueado]",
   "observation": "Causa: {TIENDA_SIN_SLA} = 'Unimac Los Lagos II' (typo de 'Unimarc Los Lagos II', tomada como la misma tienda) responde 'Aún no llegamos a esta dirección' al confirmarla como retiro (2026-10-16), no 'Sin horarios disponibles'. Acción: declarar una tienda con cobertura y sin ventanas de retiro.",
   "observed": "No se ejecutó: la data declarada no sirve o está en TBD.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador (correo + OTP)\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Retiro en tienda configurado con Unimac Los Lagos II",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 20000, 000000000000675191-UN, Unimac Los Lagos II, 11, cuenta de comprador (correo + OTP)",
   "viewport": "390x844"
  }
 ]
}
-->
