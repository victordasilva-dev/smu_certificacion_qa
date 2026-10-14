# B2C-189 - Mis Envíos: cambiar dirección o tienda desde la tarjeta - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-189 |
| Última actualización | 2026-10-14 |
| Ejecutado por | Victor Chirinos |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | webkit |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-189 WEB Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 24 |
| Aprobado | 10 |
| Rechazado | 2 |
| **Total** | **36** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-14 | 36 | TC-B2C189-D-001, TC-B2C189-D-002, TC-B2C189-D-003, TC-B2C189-D-004, TC-B2C189-D-005, TC-B2C189-D-006, TC-B2C189-D-007, TC-B2C189-D-008, TC-B2C189-D-009, TC-B2C189-D-010, TC-B2C189-D-011, TC-B2C189-D-012, TC-B2C189-D-013, TC-B2C189-D-014, TC-B2C189-D-015, TC-B2C189-D-016, TC-B2C189-D-017, TC-B2C189-D-018, TC-B2C189-M-001, TC-B2C189-M-002, TC-B2C189-M-003, TC-B2C189-M-004, TC-B2C189-M-005, TC-B2C189-M-006, TC-B2C189-M-007, TC-B2C189-M-008, TC-B2C189-M-009, TC-B2C189-M-010, TC-B2C189-M-011, TC-B2C189-M-012, TC-B2C189-M-013, TC-B2C189-M-014, TC-B2C189-M-015, TC-B2C189-M-016, TC-B2C189-M-017, TC-B2C189-M-018 |

## Detalle por caso de prueba

### TC-B2C189-D-001 - Verificar que el ícono de la tarjeta de dirección abre el Store Locator de despacho [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 85.3 s |
| Spec | tests/B2C-189.spec.ts:197 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario hace clic en el ícono ▾ de la tarjeta de dirección.
6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).

**Resultado esperado**

Se abre el Store Locator de despacho a domicilio y Mis Envíos permanece sin cambios detrás.

**Resultado obtenido**

Al pulsar el ícono ▾ de la tarjeta, el drawer 'Elige tu método de entrega' se abre sobre Mis Envíos con la pestaña del método activo seleccionada; la página detrás no cambia (misma URL y mismo contenido).

**Evidencia**

![Paso 2 — carro cargado](<B2C-189 Evidencias/TC-B2C189-D-001-p02-carro-cargado.png>)

![Paso 4 — mis envios despacho](<B2C-189 Evidencias/TC-B2C189-D-001-p04-mis-envios-despacho.png>)

![Paso 6 — store locator de despacho](<B2C-189 Evidencias/TC-B2C189-D-001-p06-store-locator-de-despacho.png>)

![Estado final del caso](<B2C-189 Evidencias/TC-B2C189-D-001.png>)

---

### TC-B2C189-D-002 - Verificar que al cancelar el Store Locator Mis Envíos mantiene la dirección y la ventana [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 64.9 s |
| Spec | tests/B2C-189.spec.ts:211 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario hace clic en el ícono ▾ de la tarjeta de dirección.
6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).
7. El usuario hace clic en la X del Store Locator sin confirmar una dirección.

**Resultado esperado**

Se vuelve a Mis Envíos con la misma dirección Calle Uno 23, La Florida, la misma ventana seleccionada y el mismo subtotal.

**Resultado obtenido**

Al cerrar el Store Locator con la X sin confirmar, Mis Envíos conserva el mismo destino, la misma ventana seleccionada y el mismo subtotal.

**Evidencia**

![Paso 2 — carro cargado](<B2C-189 Evidencias/TC-B2C189-D-002-p02-carro-cargado.png>)

![Paso 4 — mis envios despacho](<B2C-189 Evidencias/TC-B2C189-D-002-p04-mis-envios-despacho.png>)

![Paso 6 — store locator de despacho](<B2C-189 Evidencias/TC-B2C189-D-002-p06-store-locator-de-despacho.png>)

![Paso 7 — mis envios tras cerrar con la x](<B2C-189 Evidencias/TC-B2C189-D-002-p07-mis-envios-tras-cerrar-con-la-x.png>)

![Estado final del caso](<B2C-189 Evidencias/TC-B2C189-D-002.png>)

---

### TC-B2C189-D-003 - Verificar que el ícono de la tarjeta de tienda abre el Store Locator de retiro [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 64.5 s |
| Spec | tests/B2C-189.spec.ts:197 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Retiro en tienda configurado con Unimarc Las Condes

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 20000, 000000000000675191-UN, Unimarc Las Condes, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario hace clic en el ícono ▾ de la tarjeta de tienda.
6. El sistema abre el Store Locator de retiro en tienda (B2C-121).

**Resultado esperado**

Se abre el Store Locator de retiro en tienda y Mis Envíos permanece sin cambios detrás.

**Resultado obtenido**

Al pulsar el ícono ▾ de la tarjeta, el drawer 'Elige tu método de entrega' se abre sobre Mis Envíos con la pestaña del método activo seleccionada; la página detrás no cambia (misma URL y mismo contenido).

**Evidencia**

![Paso 2 — carro cargado](<B2C-189 Evidencias/TC-B2C189-D-003-p02-carro-cargado.png>)

![Paso 4 — mis envios retiro](<B2C-189 Evidencias/TC-B2C189-D-003-p04-mis-envios-retiro.png>)

![Paso 6 — store locator de retiro](<B2C-189 Evidencias/TC-B2C189-D-003-p06-store-locator-de-retiro.png>)

![Estado final del caso](<B2C-189 Evidencias/TC-B2C189-D-003.png>)

---

### TC-B2C189-D-004 - Verificar que al cancelar el Store Locator Mis Envíos mantiene la tienda y la ventana [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 64.3 s |
| Spec | tests/B2C-189.spec.ts:211 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Retiro en tienda configurado con Unimarc Las Condes

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 20000, 000000000000675191-UN, Unimarc Las Condes, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario hace clic en el ícono ▾ de la tarjeta de tienda.
6. El sistema abre el Store Locator de retiro en tienda (B2C-121).
7. El usuario hace clic en la X del Store Locator sin confirmar una tienda.

**Resultado esperado**

Se vuelve a Mis Envíos con la misma tienda Unimarc Las Condes y la misma ventana seleccionada.

**Resultado obtenido**

Al cerrar el Store Locator con la X sin confirmar, Mis Envíos conserva el mismo destino, la misma ventana seleccionada y el mismo subtotal.

**Evidencia**

![Paso 2 — carro cargado](<B2C-189 Evidencias/TC-B2C189-D-004-p02-carro-cargado.png>)

![Paso 4 — mis envios retiro](<B2C-189 Evidencias/TC-B2C189-D-004-p04-mis-envios-retiro.png>)

![Paso 6 — store locator de retiro](<B2C-189 Evidencias/TC-B2C189-D-004-p06-store-locator-de-retiro.png>)

![Paso 7 — mis envios tras cerrar con la x](<B2C-189 Evidencias/TC-B2C189-D-004-p07-mis-envios-tras-cerrar-con-la-x.png>)

![Estado final del caso](<B2C-189 Evidencias/TC-B2C189-D-004.png>)

---

### TC-B2C189-D-005 - Verificar que una nueva dirección con todo disponible actualiza la tarjeta y las ventanas [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 89.4 s |
| Spec | tests/B2C-189.spec.ts:227 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- 000000000000675191-UN tiene stock en la tienda abastecedora de A. Las Conder 14791, Lo Barnechea
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario hace clic en el ícono ▾ de la tarjeta de dirección.
6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).
7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.
8. El usuario completa la validación OTP con el código recibido en el correo.
9. El sistema muestra un loader mientras recarga las ventanas.

**Resultado esperado**

Se vuelve a Mis Envíos con la tarjeta rosada mostrando A. Las Conder 14791, Lo Barnechea, las ventanas de la nueva dirección y una ventana seleccionada automáticamente según la regla de priorización por defecto.

**Resultado obtenido**

Tras confirmar Avenida Las Condes 14791, Lo Barnechea (sugerencia de Google para A. Las Conder 14791, Lo Barnechea) y validar el OTP, el Store Locator se cierra, hay loader y queda una ventana seleccionada, pero la tarjeta de Mis Envíos sigue mostrando 'Calle Uno 23, La Florida, Metropolitana'. El header sí pasa a la dirección nueva; la tarjeta no se actualiza ni recargando la página.

**Observación**

Esperado: la tarjeta muestra la nueva dirección (Avenida Las Condes 14791). Obtenido: sigue 'Calle Uno 23, La Florida, Metropolitana'. tests/B2C-189.spec.ts:227. Data: {DIRECCION_OTRA_TIENDA}='A. Las Conder 14791, Lo Barnechea' (typo), se eligió la sugerencia de Google con el mismo número y comuna. Bug: B2C-1204.

**Evidencia**

![Estado al fallar la aserción](<B2C-189 Evidencias/TC-B2C189-D-005.png>)

---

### TC-B2C189-D-006 - Verificar que una nueva tienda con todo disponible actualiza la tarjeta y las ventanas [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 104.5 s |
| Spec | tests/B2C-189.spec.ts:227 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Retiro en tienda configurado con Unimarc Las Condes
- 000000000000675191-UN tiene stock en Unimarc Los Trapenses
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 20000, 000000000000675191-UN, Unimarc Las Condes, Unimarc Los Trapenses, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario hace clic en el ícono ▾ de la tarjeta de tienda.
6. El sistema abre el Store Locator de retiro en tienda (B2C-121).
7. El usuario selecciona la tienda Unimarc Los Trapenses y hace clic en "Confirmar tienda".
8. El usuario completa la validación OTP con el código recibido en el correo.
9. El sistema muestra un loader mientras recarga las ventanas.

**Resultado esperado**

Se vuelve a Mis Envíos con la tarjeta rosada mostrando Unimarc Los Trapenses, sus ventanas de retiro y una ventana seleccionada por defecto.

**Resultado obtenido**

Tras confirmar Unimarc Los Trapenses y validar el OTP, hay loader, Mis Envíos muestra la tienda nueva en la tarjeta y una ventana de retiro seleccionada por defecto.

**Evidencia**

![Paso 2 — carro cargado](<B2C-189 Evidencias/TC-B2C189-D-006-p02-carro-cargado.png>)

![Paso 4 — mis envios retiro](<B2C-189 Evidencias/TC-B2C189-D-006-p04-mis-envios-retiro.png>)

![Paso 6 — store locator de retiro](<B2C-189 Evidencias/TC-B2C189-D-006-p06-store-locator-de-retiro.png>)

![Paso 7 — tienda nueva confirmada](<B2C-189 Evidencias/TC-B2C189-D-006-p07-tienda-nueva-confirmada.png>)

![Paso 8 — otp validado](<B2C-189 Evidencias/TC-B2C189-D-006-p08-otp-validado.png>)

![Paso 9 — mis envios tras el cambio](<B2C-189 Evidencias/TC-B2C189-D-006-p09-mis-envios-tras-el-cambio.png>)

![Estado final del caso](<B2C-189 Evidencias/TC-B2C189-D-006.png>)

---

### TC-B2C189-D-007 - Verificar que una nueva dirección con productos no disponibles activa el flujo de no disponibles [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000 y {SKU_STOCK_SOLO_TIENDA_A}
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- {SKU_STOCK_SOLO_TIENDA_A} no tiene stock en la tienda abastecedora de A. Las Conder 14791, Lo Barnechea
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, 20000, {SKU_STOCK_SOLO_TIENDA_A}, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario hace clic en el ícono ▾ de la tarjeta de dirección.
6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).
7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.
8. El usuario completa la validación OTP con el código recibido en el correo.
9. El sistema muestra un loader mientras verifica la disponibilidad.

**Resultado esperado**

Se activa el flujo de productos no disponibles de B2C-126 para {SKU_STOCK_SOLO_TIENDA_A}.

**Observación**

Causa: {SKU_STOCK_SOLO_TIENDA_A} está en TBD en el Excel de data. Acción: cargar un SKU con stock solo en la tienda abastecedora de origen.

---

### TC-B2C189-D-008 - Verificar que tras resolver los productos no disponibles se redirige al carro [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000 y {SKU_STOCK_SOLO_TIENDA_A}
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- {SKU_STOCK_SOLO_TIENDA_A} no tiene stock en la tienda abastecedora de A. Las Conder 14791, Lo Barnechea
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, 20000, {SKU_STOCK_SOLO_TIENDA_A}, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario hace clic en el ícono ▾ de la tarjeta de dirección.
6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).
7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.
8. El usuario completa la validación OTP con el código recibido en el correo.
9. El sistema muestra el flujo de productos no disponibles (B2C-126).
10. El usuario hace clic en "Entendido" en el modal "Se agotaron".

**Resultado esperado**

El usuario llega al carro de compras sin {SKU_STOCK_SOLO_TIENDA_A}.

**Observación**

Causa: {SKU_STOCK_SOLO_TIENDA_A} está en TBD en el Excel de data. Acción: cargar un SKU con stock solo en la tienda abastecedora de origen.

---

### TC-B2C189-D-009 - Verificar que si falla el servicio de ventanas tras el cambio se muestra el error ME-034 [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- 000000000000675191-UN tiene stock en la tienda de A. Las Conder 14791, Lo Barnechea
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- DevTools abierto con bloqueo de la request {JANIS_API_ENDPOINT} (Network request blocking) (activarlo después de confirmar la dirección)

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, {JANIS_API_ENDPOINT}, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario hace clic en el ícono ▾ de la tarjeta de dirección.
6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).
7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.
8. El usuario completa la validación OTP con el código recibido en el correo.
9. El sistema muestra un loader.

**Resultado esperado**

Se muestra la pantalla "Ups Algo salió mal" con el código ME-034 y los botones "Reintentar" y "Volver al inicio".

**Observación**

Causa: {JANIS_API_ENDPOINT} está en TBD en el Excel de data. Acción: cargar el endpoint del servicio de ventanas a bloquear.

---

### TC-B2C189-D-010 - Verificar que Reintentar vuelve a consultar las ventanas de la nueva dirección [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- DevTools abierto con bloqueo de la request {JANIS_API_ENDPOINT} (Network request blocking) (activarlo después de confirmar la dirección)

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, {JANIS_API_ENDPOINT}, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario hace clic en el ícono ▾ de la tarjeta de dirección.
6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).
7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.
8. El usuario completa la validación OTP con el código recibido en el correo.
9. El sistema muestra la pantalla de error ME-034.
10. El usuario desactiva en DevTools el bloqueo de la request {JANIS_API_ENDPOINT}.
11. El usuario hace clic en "Reintentar".

**Resultado esperado**

Se cargan las ventanas de A. Las Conder 14791, Lo Barnechea y Mis Envíos muestra la nueva dirección con una ventana seleccionada por defecto.

**Observación**

Causa: {JANIS_API_ENDPOINT} está en TBD en el Excel de data. Acción: cargar el endpoint del servicio de ventanas a bloquear.

---

### TC-B2C189-D-011 - Verificar que Volver al inicio desde el error ME-034 redirige al Home [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- DevTools abierto con bloqueo de la request {JANIS_API_ENDPOINT} (Network request blocking) (activarlo después de confirmar la dirección)

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, {JANIS_API_ENDPOINT}, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario hace clic en el ícono ▾ de la tarjeta de dirección.
6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).
7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.
8. El usuario completa la validación OTP con el código recibido en el correo.
9. El sistema muestra la pantalla de error ME-034.
10. El usuario hace clic en "Volver al inicio".

**Resultado esperado**

El usuario es redirigido al Home.

**Observación**

Causa: {JANIS_API_ENDPOINT} está en TBD en el Excel de data. Acción: cargar el endpoint del servicio de ventanas a bloquear.

---

### TC-B2C189-D-012 - Verificar que una nueva dirección sin horarios muestra la pantalla Sin horarios disponibles [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, Av Libertador Gral Bernardo O'Higgins 1072, Maipú, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario hace clic en el ícono ▾ de la tarjeta de dirección.
6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).
7. El usuario ingresa la dirección Av Libertador Gral Bernardo O'Higgins 1072, Maipú y la confirma.
8. El usuario completa la validación OTP con el código recibido en el correo.
9. El sistema muestra la pantalla "Sin horarios disponibles".
10. El usuario verifica que el código STL-041 es legible en pantalla.

**Resultado esperado**

Se muestra la pantalla "Sin horarios disponibles" con el código de trazabilidad STL-041 legible en pantalla y los botones "Cambiar dirección" y "Volver al inicio" activos.

**Observación**

Causa: {DIRECCION_SIN_SLA} (Av. Libertador Gral. Bernardo O'Higgins 1072, Maipú) no tiene cobertura en DEV: al confirmarla el sitio muestra 'Aún no llegamos a esta dirección' y, al continuar, vuelve al Home con 'Despacho sin cobertura'; nunca llega a 'Sin horarios disponibles' (STL-041). Acción: cargar una dirección con cobertura pero sin ventanas (SLA) disponibles.

---

### TC-B2C189-D-013 - Verificar que Cambiar dirección en Sin horarios disponibles vuelve a abrir el Store Locator [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, Av Libertador Gral Bernardo O'Higgins 1072, Maipú, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario hace clic en el ícono ▾ de la tarjeta de dirección.
6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).
7. El usuario ingresa la dirección Av Libertador Gral Bernardo O'Higgins 1072, Maipú y la confirma.
8. El usuario completa la validación OTP con el código recibido en el correo.
9. El sistema muestra la pantalla "Sin horarios disponibles".
10. El usuario hace clic en "Cambiar dirección".

**Resultado esperado**

Se abre el Store Locator para seleccionar otra dirección o tienda.

**Observación**

Causa: {DIRECCION_SIN_SLA} (Av. Libertador Gral. Bernardo O'Higgins 1072, Maipú) no tiene cobertura en DEV: al confirmarla el sitio muestra 'Aún no llegamos a esta dirección' y, al continuar, vuelve al Home con 'Despacho sin cobertura'; nunca llega a 'Sin horarios disponibles' (STL-041). Acción: cargar una dirección con cobertura pero sin ventanas (SLA) disponibles.

---

### TC-B2C189-D-014 - Verificar que Volver al inicio desde Sin horarios disponibles redirige al Home [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, Av Libertador Gral Bernardo O'Higgins 1072, Maipú, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario hace clic en el ícono ▾ de la tarjeta de dirección.
6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).
7. El usuario ingresa la dirección Av Libertador Gral Bernardo O'Higgins 1072, Maipú y la confirma.
8. El usuario completa la validación OTP con el código recibido en el correo.
9. El sistema muestra la pantalla "Sin horarios disponibles".
10. El usuario hace clic en "Volver al inicio".

**Resultado esperado**

El usuario es redirigido al Home.

**Observación**

Causa: {DIRECCION_SIN_SLA} (Av. Libertador Gral. Bernardo O'Higgins 1072, Maipú) no tiene cobertura en DEV: al confirmarla el sitio muestra 'Aún no llegamos a esta dirección' y, al continuar, vuelve al Home con 'Despacho sin cobertura'; nunca llega a 'Sin horarios disponibles' (STL-041). Acción: cargar una dirección con cobertura pero sin ventanas (SLA) disponibles.

---

### TC-B2C189-D-015 - Verificar que una dirección de la misma tienda abastecedora se actualiza sin validar productos [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000 y {SKU_STOCK_SOLO_TIENDA_A}
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- Gral. José Artigas 3250, Ñuñoa es atendida por la misma tienda abastecedora que Calle Uno 23, La Florida
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, Gral. José Artigas 3250, Ñuñoa, 20000, {SKU_STOCK_SOLO_TIENDA_A}, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario hace clic en el ícono ▾ de la tarjeta de dirección.
6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).
7. El usuario ingresa la dirección Gral. José Artigas 3250, Ñuñoa y la confirma.
8. El usuario completa la validación OTP con el código recibido en el correo.

**Resultado esperado**

Mis Envíos muestra Gral. José Artigas 3250, Ñuñoa con sus ventanas recargadas, sin modal de productos no disponibles y con el carro intacto.

**Observación**

Causa: {SKU_STOCK_SOLO_TIENDA_A} está en TBD en el Excel de data. Acción: cargar un SKU con stock solo en la tienda abastecedora de origen.

---

### TC-B2C189-D-016 - Verificar que Mis Envíos mantiene su estado mientras el Store Locator completa parcialmente el flujo sin confirmar [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario anota la dirección activa (Calle Uno 23, La Florida), la ventana seleccionada y el subtotal visibles en Mis Envíos.
6. El usuario hace clic en el ícono ▾ de la tarjeta de dirección.
7. El sistema abre el Store Locator de despacho a domicilio (B2C-26).
8. El usuario ingresa una nueva dirección diferente a Calle Uno 23, La Florida en el buscador del Store Locator pero NO la confirma.
9. El usuario hace clic en la X del Store Locator.
10. El sistema cierra el Store Locator y vuelve a Mis Envíos.
11. El usuario verifica la dirección, la ventana seleccionada y el subtotal en Mis Envíos.

**Resultado esperado**

Mis Envíos muestra Calle Uno 23, La Florida, la misma ventana seleccionada y el mismo subtotal anotados en el paso 5, sin ningún cambio producido por la interacción parcial en el Store Locator.

**Observación**

Causa: el paso 8 ingresa 'una nueva dirección diferente a {DIRECCION_DESPACHO_001}' y la columna Test data no declara cuál. Acción: declarar el token de la dirección a ingresar en la fila del TC.

---

### TC-B2C189-D-017 - Verificar que la ventana seleccionada automáticamente tras el cambio cumple la regla de priorización de B2C-147 CA4 [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- 000000000000675191-UN tiene stock en la tienda abastecedora de A. Las Conder 14791, Lo Barnechea
- A. Las Conder 14791, Lo Barnechea tiene múltiples ventanas de entrega disponibles
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com, {VENTANA_ESPERADA_POR_REGLA}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario hace clic en el ícono ▾ de la tarjeta de dirección.
6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).
7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.
8. El usuario completa la validación OTP con el código recibido en el correo.
9. El sistema muestra un loader mientras recarga las ventanas.
10. El sistema regresa a Mis Envíos con las ventanas de A. Las Conder 14791, Lo Barnechea.
11. El usuario anota la ventana que queda seleccionada automáticamente.
12. El usuario compara la ventana seleccionada con {VENTANA_ESPERADA_POR_REGLA}.

**Resultado esperado**

La ventana seleccionada automáticamente es {VENTANA_ESPERADA_POR_REGLA}, cumpliendo la regla de priorización por defecto definida en B2C-147 CA4. Ninguna otra ventana queda marcada como seleccionada.

**Observación**

Causa: {VENTANA_ESPERADA_POR_REGLA} está en TBD en el Excel de data. Acción: cargar la ventana que la regla de B2C-147 CA4 debe seleccionar para {DIRECCION_OTRA_TIENDA}.

---

### TC-B2C189-D-018 - Verificar que una nueva tienda de retiro con producto no disponible activa el flujo de no disponibles [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000 y {SKU_STOCK_SOLO_TIENDA_A}
- Retiro en tienda configurado con Unimarc Las Condes
- {SKU_STOCK_SOLO_TIENDA_A} no tiene stock en Unimarc Los Trapenses
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 20000, {SKU_STOCK_SOLO_TIENDA_A}, 000000000000675191-UN, Unimarc Las Condes, Unimarc Los Trapenses, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario hace clic en el ícono ▾ de la tarjeta de tienda.
6. El sistema abre el Store Locator de retiro en tienda (B2C-121).
7. El usuario selecciona la tienda Unimarc Los Trapenses y hace clic en "Confirmar tienda".
8. El usuario completa la validación OTP con el código recibido en el correo.
9. El sistema muestra un loader mientras verifica la disponibilidad de productos.

**Resultado esperado**

Se activa el flujo de productos no disponibles de B2C-126 para {SKU_STOCK_SOLO_TIENDA_A}.

**Observación**

Causa: {SKU_STOCK_SOLO_TIENDA_A} está en TBD en el Excel de data. Acción: cargar un SKU con stock solo en la tienda abastecedora de origen.

---

### TC-B2C189-M-001 - Verificar que el ícono de la tarjeta de dirección abre el Store Locator de despacho [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 149.5 s |
| Spec | tests/B2C-189.spec.ts:197 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca el ícono ▾ de la tarjeta de dirección.
6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).

**Resultado esperado**

Se abre el Store Locator de despacho a domicilio y Mis Envíos permanece sin cambios detrás.

**Resultado obtenido**

Al pulsar el ícono ▾ de la tarjeta, el drawer 'Elige tu método de entrega' se abre sobre Mis Envíos con la pestaña del método activo seleccionada; la página detrás no cambia (misma URL y mismo contenido).

**Evidencia**

![Paso 2 — carro cargado](<B2C-189 Evidencias/TC-B2C189-M-001-p02-carro-cargado.png>)

![Paso 4 — mis envios despacho](<B2C-189 Evidencias/TC-B2C189-M-001-p04-mis-envios-despacho.png>)

![Paso 6 — store locator de despacho](<B2C-189 Evidencias/TC-B2C189-M-001-p06-store-locator-de-despacho.png>)

![Estado final del caso](<B2C-189 Evidencias/TC-B2C189-M-001.png>)

---

### TC-B2C189-M-002 - Verificar que al cancelar el Store Locator Mis Envíos mantiene la dirección y la ventana [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 96.2 s |
| Spec | tests/B2C-189.spec.ts:211 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca el ícono ▾ de la tarjeta de dirección.
6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).
7. El usuario toca la X del Store Locator sin confirmar una dirección.

**Resultado esperado**

Se vuelve a Mis Envíos con la misma dirección Calle Uno 23, La Florida, la misma ventana seleccionada y el mismo subtotal.

**Resultado obtenido**

Al cerrar el Store Locator con la X sin confirmar, Mis Envíos conserva el mismo destino, la misma ventana seleccionada y el mismo subtotal.

**Evidencia**

![Paso 2 — carro cargado](<B2C-189 Evidencias/TC-B2C189-M-002-p02-carro-cargado.png>)

![Paso 4 — mis envios despacho](<B2C-189 Evidencias/TC-B2C189-M-002-p04-mis-envios-despacho.png>)

![Paso 6 — store locator de despacho](<B2C-189 Evidencias/TC-B2C189-M-002-p06-store-locator-de-despacho.png>)

![Paso 7 — mis envios tras cerrar con la x](<B2C-189 Evidencias/TC-B2C189-M-002-p07-mis-envios-tras-cerrar-con-la-x.png>)

![Estado final del caso](<B2C-189 Evidencias/TC-B2C189-M-002.png>)

---

### TC-B2C189-M-003 - Verificar que el ícono de la tarjeta de tienda abre el Store Locator de retiro [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 144.0 s |
| Spec | tests/B2C-189.spec.ts:197 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Retiro en tienda configurado con Unimarc Las Condes

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 20000, 000000000000675191-UN, Unimarc Las Condes, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca el ícono ▾ de la tarjeta de tienda.
6. El sistema abre el Store Locator de retiro en tienda (B2C-121).

**Resultado esperado**

Se abre el Store Locator de retiro en tienda y Mis Envíos permanece sin cambios detrás.

**Resultado obtenido**

Al pulsar el ícono ▾ de la tarjeta, el drawer 'Elige tu método de entrega' se abre sobre Mis Envíos con la pestaña del método activo seleccionada; la página detrás no cambia (misma URL y mismo contenido).

**Evidencia**

![Paso 2 — carro cargado](<B2C-189 Evidencias/TC-B2C189-M-003-p02-carro-cargado.png>)

![Paso 4 — mis envios retiro](<B2C-189 Evidencias/TC-B2C189-M-003-p04-mis-envios-retiro.png>)

![Paso 6 — store locator de retiro](<B2C-189 Evidencias/TC-B2C189-M-003-p06-store-locator-de-retiro.png>)

![Estado final del caso](<B2C-189 Evidencias/TC-B2C189-M-003.png>)

---

### TC-B2C189-M-004 - Verificar que al cancelar el Store Locator Mis Envíos mantiene la tienda y la ventana [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 90.4 s |
| Spec | tests/B2C-189.spec.ts:211 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Retiro en tienda configurado con Unimarc Las Condes

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 20000, 000000000000675191-UN, Unimarc Las Condes, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca el ícono ▾ de la tarjeta de tienda.
6. El sistema abre el Store Locator de retiro en tienda (B2C-121).
7. El usuario toca la X del Store Locator sin confirmar una tienda.

**Resultado esperado**

Se vuelve a Mis Envíos con la misma tienda Unimarc Las Condes y la misma ventana seleccionada.

**Resultado obtenido**

Al cerrar el Store Locator con la X sin confirmar, Mis Envíos conserva el mismo destino, la misma ventana seleccionada y el mismo subtotal.

**Evidencia**

![Paso 2 — carro cargado](<B2C-189 Evidencias/TC-B2C189-M-004-p02-carro-cargado.png>)

![Paso 4 — mis envios retiro](<B2C-189 Evidencias/TC-B2C189-M-004-p04-mis-envios-retiro.png>)

![Paso 6 — store locator de retiro](<B2C-189 Evidencias/TC-B2C189-M-004-p06-store-locator-de-retiro.png>)

![Paso 7 — mis envios tras cerrar con la x](<B2C-189 Evidencias/TC-B2C189-M-004-p07-mis-envios-tras-cerrar-con-la-x.png>)

![Estado final del caso](<B2C-189 Evidencias/TC-B2C189-M-004.png>)

---

### TC-B2C189-M-005 - Verificar que una nueva dirección con todo disponible actualiza la tarjeta y las ventanas [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 200.1 s |
| Spec | tests/B2C-189.spec.ts:227 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- 000000000000675191-UN tiene stock en la tienda abastecedora de A. Las Conder 14791, Lo Barnechea
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca el ícono ▾ de la tarjeta de dirección.
6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).
7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.
8. El usuario completa la validación OTP con el código recibido en el correo.
9. El sistema muestra un loader mientras recarga las ventanas.

**Resultado esperado**

Se vuelve a Mis Envíos con la tarjeta rosada mostrando A. Las Conder 14791, Lo Barnechea, las ventanas de la nueva dirección y una ventana seleccionada automáticamente según la regla de priorización por defecto.

**Resultado obtenido**

Tras confirmar Avenida Las Condes 14791, Lo Barnechea (sugerencia de Google para A. Las Conder 14791, Lo Barnechea) y validar el OTP, el Store Locator se cierra, hay loader y queda una ventana seleccionada, pero la tarjeta de Mis Envíos sigue mostrando 'Calle Uno 23, La Florida, Metropolitana'. El header sí pasa a la dirección nueva; la tarjeta no se actualiza ni recargando la página.

**Observación**

Esperado: la tarjeta muestra la nueva dirección (Avenida Las Condes 14791). Obtenido: sigue 'Calle Uno 23, La Florida, Metropolitana'. tests/B2C-189.spec.ts:227. Data: {DIRECCION_OTRA_TIENDA}='A. Las Conder 14791, Lo Barnechea' (typo), se eligió la sugerencia de Google con el mismo número y comuna. Bug: B2C-1204.

**Evidencia**

![Paso 2 — carro cargado](<B2C-189 Evidencias/TC-B2C189-M-005-p02-carro-cargado.png>)

![Paso 4 — mis envios despacho](<B2C-189 Evidencias/TC-B2C189-M-005-p04-mis-envios-despacho.png>)

![Paso 6 — store locator de despacho](<B2C-189 Evidencias/TC-B2C189-M-005-p06-store-locator-de-despacho.png>)

![Paso 7 — direccion nueva confirmada](<B2C-189 Evidencias/TC-B2C189-M-005-p07-direccion-nueva-confirmada.png>)

![Paso 8 — otp validado](<B2C-189 Evidencias/TC-B2C189-M-005-p08-otp-validado.png>)

![Paso 9 — mis envios tras el cambio](<B2C-189 Evidencias/TC-B2C189-M-005-p09-mis-envios-tras-el-cambio.png>)

![Estado al fallar la aserción](<B2C-189 Evidencias/TC-B2C189-M-005.png>)

---

### TC-B2C189-M-006 - Verificar que una nueva tienda con todo disponible actualiza la tarjeta y las ventanas [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 146.4 s |
| Spec | tests/B2C-189.spec.ts:227 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Retiro en tienda configurado con Unimarc Las Condes
- 000000000000675191-UN tiene stock en Unimarc Los Trapenses
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 20000, 000000000000675191-UN, Unimarc Las Condes, Unimarc Los Trapenses, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca el ícono ▾ de la tarjeta de tienda.
6. El sistema abre el Store Locator de retiro en tienda (B2C-121).
7. El usuario selecciona la tienda Unimarc Los Trapenses y toca "Confirmar tienda".
8. El usuario completa la validación OTP con el código recibido en el correo.
9. El sistema muestra un loader mientras recarga las ventanas.

**Resultado esperado**

Se vuelve a Mis Envíos con la tarjeta rosada mostrando Unimarc Los Trapenses, sus ventanas de retiro y una ventana seleccionada por defecto.

**Resultado obtenido**

Tras confirmar Unimarc Los Trapenses y validar el OTP, hay loader, Mis Envíos muestra la tienda nueva en la tarjeta y una ventana de retiro seleccionada por defecto.

**Evidencia**

![Paso 2 — carro cargado](<B2C-189 Evidencias/TC-B2C189-M-006-p02-carro-cargado.png>)

![Paso 4 — mis envios retiro](<B2C-189 Evidencias/TC-B2C189-M-006-p04-mis-envios-retiro.png>)

![Paso 6 — store locator de retiro](<B2C-189 Evidencias/TC-B2C189-M-006-p06-store-locator-de-retiro.png>)

![Paso 7 — tienda nueva confirmada](<B2C-189 Evidencias/TC-B2C189-M-006-p07-tienda-nueva-confirmada.png>)

![Paso 8 — otp validado](<B2C-189 Evidencias/TC-B2C189-M-006-p08-otp-validado.png>)

![Paso 9 — mis envios tras el cambio](<B2C-189 Evidencias/TC-B2C189-M-006-p09-mis-envios-tras-el-cambio.png>)

![Estado final del caso](<B2C-189 Evidencias/TC-B2C189-M-006.png>)

---

### TC-B2C189-M-007 - Verificar que una nueva dirección con productos no disponibles activa el flujo de no disponibles [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000 y {SKU_STOCK_SOLO_TIENDA_A}
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- {SKU_STOCK_SOLO_TIENDA_A} no tiene stock en la tienda abastecedora de A. Las Conder 14791, Lo Barnechea
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, 20000, {SKU_STOCK_SOLO_TIENDA_A}, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca el ícono ▾ de la tarjeta de dirección.
6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).
7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.
8. El usuario completa la validación OTP con el código recibido en el correo.
9. El sistema muestra un loader mientras verifica la disponibilidad.

**Resultado esperado**

Se activa el flujo de productos no disponibles de B2C-126 para {SKU_STOCK_SOLO_TIENDA_A}.

**Observación**

Causa: {SKU_STOCK_SOLO_TIENDA_A} está en TBD en el Excel de data. Acción: cargar un SKU con stock solo en la tienda abastecedora de origen.

---

### TC-B2C189-M-008 - Verificar que tras resolver los productos no disponibles se redirige al carro [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000 y {SKU_STOCK_SOLO_TIENDA_A}
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- {SKU_STOCK_SOLO_TIENDA_A} no tiene stock en la tienda abastecedora de A. Las Conder 14791, Lo Barnechea
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, 20000, {SKU_STOCK_SOLO_TIENDA_A}, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca el ícono ▾ de la tarjeta de dirección.
6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).
7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.
8. El usuario completa la validación OTP con el código recibido en el correo.
9. El sistema muestra el flujo de productos no disponibles (B2C-126).
10. El usuario toca "Entendido" en el modal "Se agotaron".

**Resultado esperado**

El usuario llega al carro de compras sin {SKU_STOCK_SOLO_TIENDA_A}.

**Observación**

Causa: {SKU_STOCK_SOLO_TIENDA_A} está en TBD en el Excel de data. Acción: cargar un SKU con stock solo en la tienda abastecedora de origen.

---

### TC-B2C189-M-009 - Verificar que si falla el servicio de ventanas tras el cambio se muestra el error ME-034 [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- 000000000000675191-UN tiene stock en la tienda de A. Las Conder 14791, Lo Barnechea
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- DevTools abierto con bloqueo de la request {JANIS_API_ENDPOINT} (Network request blocking) (activarlo después de confirmar la dirección)

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, {JANIS_API_ENDPOINT}, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca el ícono ▾ de la tarjeta de dirección.
6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).
7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.
8. El usuario completa la validación OTP con el código recibido en el correo.
9. El sistema muestra un loader.

**Resultado esperado**

Se muestra la pantalla "Ups Algo salió mal" con el código ME-034 y los botones "Reintentar" y "Volver al inicio".

**Observación**

Causa: {JANIS_API_ENDPOINT} está en TBD en el Excel de data. Acción: cargar el endpoint del servicio de ventanas a bloquear.

---

### TC-B2C189-M-010 - Verificar que Reintentar vuelve a consultar las ventanas de la nueva dirección [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- DevTools abierto con bloqueo de la request {JANIS_API_ENDPOINT} (Network request blocking) (activarlo después de confirmar la dirección)

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, {JANIS_API_ENDPOINT}, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca el ícono ▾ de la tarjeta de dirección.
6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).
7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.
8. El usuario completa la validación OTP con el código recibido en el correo.
9. El sistema muestra la pantalla de error ME-034.
10. El usuario desactiva en DevTools el bloqueo de la request {JANIS_API_ENDPOINT}.
11. El usuario toca "Reintentar".

**Resultado esperado**

Se cargan las ventanas de A. Las Conder 14791, Lo Barnechea y Mis Envíos muestra la nueva dirección con una ventana seleccionada por defecto.

**Observación**

Causa: {JANIS_API_ENDPOINT} está en TBD en el Excel de data. Acción: cargar el endpoint del servicio de ventanas a bloquear.

---

### TC-B2C189-M-011 - Verificar que Volver al inicio desde el error ME-034 redirige al Home [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- DevTools abierto con bloqueo de la request {JANIS_API_ENDPOINT} (Network request blocking) (activarlo después de confirmar la dirección)

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, {JANIS_API_ENDPOINT}, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca el ícono ▾ de la tarjeta de dirección.
6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).
7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.
8. El usuario completa la validación OTP con el código recibido en el correo.
9. El sistema muestra la pantalla de error ME-034.
10. El usuario toca "Volver al inicio".

**Resultado esperado**

El usuario es redirigido al Home.

**Observación**

Causa: {JANIS_API_ENDPOINT} está en TBD en el Excel de data. Acción: cargar el endpoint del servicio de ventanas a bloquear.

---

### TC-B2C189-M-012 - Verificar que una nueva dirección sin horarios muestra la pantalla Sin horarios disponibles [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, Av Libertador Gral Bernardo O'Higgins 1072, Maipú, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca el ícono ▾ de la tarjeta de dirección.
6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).
7. El usuario ingresa la dirección Av Libertador Gral Bernardo O'Higgins 1072, Maipú y la confirma.
8. El usuario completa la validación OTP con el código recibido en el correo.
9. El sistema muestra la pantalla "Sin horarios disponibles".
10. El usuario verifica que el código STL-041 es legible en pantalla.

**Resultado esperado**

Se muestra la pantalla "Sin horarios disponibles" con el código de trazabilidad STL-041 legible en pantalla y los botones "Cambiar dirección" y "Volver al inicio" activos.

**Observación**

Causa: {DIRECCION_SIN_SLA} (Av. Libertador Gral. Bernardo O'Higgins 1072, Maipú) no tiene cobertura en DEV: al confirmarla el sitio muestra 'Aún no llegamos a esta dirección' y, al continuar, vuelve al Home con 'Despacho sin cobertura'; nunca llega a 'Sin horarios disponibles' (STL-041). Acción: cargar una dirección con cobertura pero sin ventanas (SLA) disponibles.

---

### TC-B2C189-M-013 - Verificar que Cambiar dirección en Sin horarios disponibles vuelve a abrir el Store Locator [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, Av Libertador Gral Bernardo O'Higgins 1072, Maipú, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca el ícono ▾ de la tarjeta de dirección.
6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).
7. El usuario ingresa la dirección Av Libertador Gral Bernardo O'Higgins 1072, Maipú y la confirma.
8. El usuario completa la validación OTP con el código recibido en el correo.
9. El sistema muestra la pantalla "Sin horarios disponibles".
10. El usuario toca "Cambiar dirección".

**Resultado esperado**

Se abre el Store Locator para seleccionar otra dirección o tienda.

**Observación**

Causa: {DIRECCION_SIN_SLA} (Av. Libertador Gral. Bernardo O'Higgins 1072, Maipú) no tiene cobertura en DEV: al confirmarla el sitio muestra 'Aún no llegamos a esta dirección' y, al continuar, vuelve al Home con 'Despacho sin cobertura'; nunca llega a 'Sin horarios disponibles' (STL-041). Acción: cargar una dirección con cobertura pero sin ventanas (SLA) disponibles.

---

### TC-B2C189-M-014 - Verificar que Volver al inicio desde Sin horarios disponibles redirige al Home [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, Av Libertador Gral Bernardo O'Higgins 1072, Maipú, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca el ícono ▾ de la tarjeta de dirección.
6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).
7. El usuario ingresa la dirección Av Libertador Gral Bernardo O'Higgins 1072, Maipú y la confirma.
8. El usuario completa la validación OTP con el código recibido en el correo.
9. El sistema muestra la pantalla "Sin horarios disponibles".
10. El usuario toca "Volver al inicio".

**Resultado esperado**

El usuario es redirigido al Home.

**Observación**

Causa: {DIRECCION_SIN_SLA} (Av. Libertador Gral. Bernardo O'Higgins 1072, Maipú) no tiene cobertura en DEV: al confirmarla el sitio muestra 'Aún no llegamos a esta dirección' y, al continuar, vuelve al Home con 'Despacho sin cobertura'; nunca llega a 'Sin horarios disponibles' (STL-041). Acción: cargar una dirección con cobertura pero sin ventanas (SLA) disponibles.

---

### TC-B2C189-M-015 - Verificar que una dirección de la misma tienda abastecedora se actualiza sin validar productos [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000 y {SKU_STOCK_SOLO_TIENDA_A}
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- Gral. José Artigas 3250, Ñuñoa es atendida por la misma tienda abastecedora que Calle Uno 23, La Florida
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, Gral. José Artigas 3250, Ñuñoa, 20000, {SKU_STOCK_SOLO_TIENDA_A}, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca el ícono ▾ de la tarjeta de dirección.
6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).
7. El usuario ingresa la dirección Gral. José Artigas 3250, Ñuñoa y la confirma.
8. El usuario completa la validación OTP con el código recibido en el correo.

**Resultado esperado**

Mis Envíos muestra Gral. José Artigas 3250, Ñuñoa con sus ventanas recargadas, sin modal de productos no disponibles y con el carro intacto.

**Observación**

Causa: {SKU_STOCK_SOLO_TIENDA_A} está en TBD en el Excel de data. Acción: cargar un SKU con stock solo en la tienda abastecedora de origen.

---

### TC-B2C189-M-016 - Verificar que Mis Envíos mantiene su estado mientras el Store Locator completa parcialmente el flujo sin confirmar [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario anota la dirección activa (Calle Uno 23, La Florida), la ventana seleccionada y el subtotal visibles en Mis Envíos.
6. El usuario toca el ícono ▾ de la tarjeta de dirección.
7. El sistema abre el Store Locator de despacho a domicilio (B2C-26).
8. El usuario ingresa una nueva dirección diferente a Calle Uno 23, La Florida en el buscador del Store Locator pero NO la confirma.
9. El usuario toca la X del Store Locator.
10. El sistema cierra el Store Locator y vuelve a Mis Envíos.
11. El usuario verifica la dirección, la ventana seleccionada y el subtotal en Mis Envíos.

**Resultado esperado**

Mis Envíos muestra Calle Uno 23, La Florida, la misma ventana seleccionada y el mismo subtotal anotados en el paso 5, sin ningún cambio producido por la interacción parcial en el Store Locator.

**Observación**

Causa: el paso 8 ingresa 'una nueva dirección diferente a {DIRECCION_DESPACHO_001}' y la columna Test data no declara cuál. Acción: declarar el token de la dirección a ingresar en la fila del TC.

---

### TC-B2C189-M-017 - Verificar que la ventana seleccionada automáticamente tras el cambio cumple la regla de priorización de B2C-147 CA4 [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- 000000000000675191-UN tiene stock en la tienda abastecedora de A. Las Conder 14791, Lo Barnechea
- A. Las Conder 14791, Lo Barnechea tiene múltiples ventanas de entrega disponibles
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com, {VENTANA_ESPERADA_POR_REGLA}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca el ícono ▾ de la tarjeta de dirección.
6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).
7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.
8. El usuario completa la validación OTP con el código recibido en el correo.
9. El sistema muestra un loader mientras recarga las ventanas.
10. El sistema regresa a Mis Envíos con las ventanas de A. Las Conder 14791, Lo Barnechea.
11. El usuario anota la ventana que queda seleccionada automáticamente.
12. El usuario compara la ventana seleccionada con {VENTANA_ESPERADA_POR_REGLA}.

**Resultado esperado**

La ventana seleccionada automáticamente es {VENTANA_ESPERADA_POR_REGLA}, cumpliendo la regla de priorización por defecto definida en B2C-147 CA4. Ninguna otra ventana queda marcada como seleccionada.

**Observación**

Causa: {VENTANA_ESPERADA_POR_REGLA} está en TBD en el Excel de data. Acción: cargar la ventana que la regla de B2C-147 CA4 debe seleccionar para {DIRECCION_OTRA_TIENDA}.

---

### TC-B2C189-M-018 - Verificar que una nueva tienda de retiro con producto no disponible activa el flujo de no disponibles [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000 y {SKU_STOCK_SOLO_TIENDA_A}
- Retiro en tienda configurado con Unimarc Las Condes
- {SKU_STOCK_SOLO_TIENDA_A} no tiene stock en Unimarc Los Trapenses
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 20000, {SKU_STOCK_SOLO_TIENDA_A}, 000000000000675191-UN, Unimarc Las Condes, Unimarc Los Trapenses, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca el ícono ▾ de la tarjeta de tienda.
6. El sistema abre el Store Locator de retiro en tienda (B2C-121).
7. El usuario selecciona la tienda Unimarc Los Trapenses y toca "Confirmar tienda".
8. El usuario completa la validación OTP con el código recibido en el correo.
9. El sistema muestra un loader mientras verifica la disponibilidad de productos.

**Resultado esperado**

Se activa el flujo de productos no disponibles de B2C-126 para {SKU_STOCK_SOLO_TIENDA_A}.

**Observación**

Causa: {SKU_STOCK_SOLO_TIENDA_A} está en TBD en el Excel de data. Acción: cargar un SKU con stock solo en la tienda abastecedora de origen.

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
  "suite": "B2C-189",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-189 WEB Test Cases.xlsx",
  "title": "B2C-189 - Mis Envíos: cambiar dirección o tienda desde la tarjeta - Evidencias QA",
  "updated_at": "2026-10-14"
 },
 "history": {
  "2026-10-14": [
   "TC-B2C189-D-001",
   "TC-B2C189-D-002",
   "TC-B2C189-D-003",
   "TC-B2C189-D-004",
   "TC-B2C189-D-005",
   "TC-B2C189-D-006",
   "TC-B2C189-D-007",
   "TC-B2C189-D-008",
   "TC-B2C189-D-009",
   "TC-B2C189-D-010",
   "TC-B2C189-D-011",
   "TC-B2C189-D-012",
   "TC-B2C189-D-013",
   "TC-B2C189-D-014",
   "TC-B2C189-D-015",
   "TC-B2C189-D-016",
   "TC-B2C189-D-017",
   "TC-B2C189-D-018",
   "TC-B2C189-M-001",
   "TC-B2C189-M-002",
   "TC-B2C189-M-003",
   "TC-B2C189-M-004",
   "TC-B2C189-M-005",
   "TC-B2C189-M-006",
   "TC-B2C189-M-007",
   "TC-B2C189-M-008",
   "TC-B2C189-M-009",
   "TC-B2C189-M-010",
   "TC-B2C189-M-011",
   "TC-B2C189-M-012",
   "TC-B2C189-M-013",
   "TC-B2C189-M-014",
   "TC-B2C189-M-015",
   "TC-B2C189-M-016",
   "TC-B2C189-M-017",
   "TC-B2C189-M-018"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "duration_s": 85.3,
   "executed_at": "2026-10-14",
   "expected": "Se abre el Store Locator de despacho a domicilio y Mis Envíos permanece sin cambios detrás.",
   "form_factor": "desktop",
   "id": "TC-B2C189-D-001",
   "name": "Verificar que el ícono de la tarjeta de dirección abre el Store Locator de despacho [Desktop] [Logueado]",
   "observed": "Al pulsar el ícono ▾ de la tarjeta, el drawer 'Elige tu método de entrega' se abre sobre Mis Envíos con la pestaña del método activo seleccionada; la página detrás no cambia (misma URL y mismo contenido).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C189-D-001-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — mis envios despacho",
     "file": "TC-B2C189-D-001-p04-mis-envios-despacho.png"
    },
    {
     "caption": "Paso 6 — store locator de despacho",
     "file": "TC-B2C189-D-001-p06-store-locator-de-despacho.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C189-D-001.png"
    }
   ],
   "spec": "tests/B2C-189.spec.ts:197",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario hace clic en el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 64.9,
   "executed_at": "2026-10-14",
   "expected": "Se vuelve a Mis Envíos con la misma dirección Calle Uno 23, La Florida, la misma ventana seleccionada y el mismo subtotal.",
   "form_factor": "desktop",
   "id": "TC-B2C189-D-002",
   "name": "Verificar que al cancelar el Store Locator Mis Envíos mantiene la dirección y la ventana [Desktop] [Logueado]",
   "observed": "Al cerrar el Store Locator con la X sin confirmar, Mis Envíos conserva el mismo destino, la misma ventana seleccionada y el mismo subtotal.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C189-D-002-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — mis envios despacho",
     "file": "TC-B2C189-D-002-p04-mis-envios-despacho.png"
    },
    {
     "caption": "Paso 6 — store locator de despacho",
     "file": "TC-B2C189-D-002-p06-store-locator-de-despacho.png"
    },
    {
     "caption": "Paso 7 — mis envios tras cerrar con la x",
     "file": "TC-B2C189-D-002-p07-mis-envios-tras-cerrar-con-la-x.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C189-D-002.png"
    }
   ],
   "spec": "tests/B2C-189.spec.ts:211",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario hace clic en el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario hace clic en la X del Store Locator sin confirmar una dirección.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 64.5,
   "executed_at": "2026-10-14",
   "expected": "Se abre el Store Locator de retiro en tienda y Mis Envíos permanece sin cambios detrás.",
   "form_factor": "desktop",
   "id": "TC-B2C189-D-003",
   "name": "Verificar que el ícono de la tarjeta de tienda abre el Store Locator de retiro [Desktop] [Logueado]",
   "observed": "Al pulsar el ícono ▾ de la tarjeta, el drawer 'Elige tu método de entrega' se abre sobre Mis Envíos con la pestaña del método activo seleccionada; la página detrás no cambia (misma URL y mismo contenido).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Retiro en tienda configurado con Unimarc Las Condes",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C189-D-003-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — mis envios retiro",
     "file": "TC-B2C189-D-003-p04-mis-envios-retiro.png"
    },
    {
     "caption": "Paso 6 — store locator de retiro",
     "file": "TC-B2C189-D-003-p06-store-locator-de-retiro.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C189-D-003.png"
    }
   ],
   "spec": "tests/B2C-189.spec.ts:197",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario hace clic en el ícono ▾ de la tarjeta de tienda.\n6. El sistema abre el Store Locator de retiro en tienda (B2C-121).",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 20000, 000000000000675191-UN, Unimarc Las Condes, 11, vhchirinos+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 64.3,
   "executed_at": "2026-10-14",
   "expected": "Se vuelve a Mis Envíos con la misma tienda Unimarc Las Condes y la misma ventana seleccionada.",
   "form_factor": "desktop",
   "id": "TC-B2C189-D-004",
   "name": "Verificar que al cancelar el Store Locator Mis Envíos mantiene la tienda y la ventana [Desktop] [Logueado]",
   "observed": "Al cerrar el Store Locator con la X sin confirmar, Mis Envíos conserva el mismo destino, la misma ventana seleccionada y el mismo subtotal.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Retiro en tienda configurado con Unimarc Las Condes",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C189-D-004-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — mis envios retiro",
     "file": "TC-B2C189-D-004-p04-mis-envios-retiro.png"
    },
    {
     "caption": "Paso 6 — store locator de retiro",
     "file": "TC-B2C189-D-004-p06-store-locator-de-retiro.png"
    },
    {
     "caption": "Paso 7 — mis envios tras cerrar con la x",
     "file": "TC-B2C189-D-004-p07-mis-envios-tras-cerrar-con-la-x.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C189-D-004.png"
    }
   ],
   "spec": "tests/B2C-189.spec.ts:211",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario hace clic en el ícono ▾ de la tarjeta de tienda.\n6. El sistema abre el Store Locator de retiro en tienda (B2C-121).\n7. El usuario hace clic en la X del Store Locator sin confirmar una tienda.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 20000, 000000000000675191-UN, Unimarc Las Condes, 11, vhchirinos+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 89.4,
   "executed_at": "2026-10-14",
   "expected": "Se vuelve a Mis Envíos con la tarjeta rosada mostrando A. Las Conder 14791, Lo Barnechea, las ventanas de la nueva dirección y una ventana seleccionada automáticamente según la regla de priorización por defecto.",
   "form_factor": "desktop",
   "id": "TC-B2C189-D-005",
   "name": "Verificar que una nueva dirección con todo disponible actualiza la tarjeta y las ventanas [Desktop] [Logueado]",
   "observation": "Esperado: la tarjeta muestra la nueva dirección (Avenida Las Condes 14791). Obtenido: sigue 'Calle Uno 23, La Florida, Metropolitana'. tests/B2C-189.spec.ts:227. Data: {DIRECCION_OTRA_TIENDA}='A. Las Conder 14791, Lo Barnechea' (typo), se eligió la sugerencia de Google con el mismo número y comuna. Bug: B2C-1204.",
   "observed": "Tras confirmar Avenida Las Condes 14791, Lo Barnechea (sugerencia de Google para A. Las Conder 14791, Lo Barnechea) y validar el OTP, el Store Locator se cierra, hay loader y queda una ventana seleccionada, pero la tarjeta de Mis Envíos sigue mostrando 'Calle Uno 23, La Florida, Metropolitana'. El header sí pasa a la dirección nueva; la tarjeta no se actualiza ni recargando la página.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- 000000000000675191-UN tiene stock en la tienda abastecedora de A. Las Conder 14791, Lo Barnechea\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Estado al fallar la aserción",
     "file": "TC-B2C189-D-005.png"
    }
   ],
   "spec": "tests/B2C-189.spec.ts:227",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario hace clic en el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra un loader mientras recarga las ventanas.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 104.5,
   "executed_at": "2026-10-14",
   "expected": "Se vuelve a Mis Envíos con la tarjeta rosada mostrando Unimarc Los Trapenses, sus ventanas de retiro y una ventana seleccionada por defecto.",
   "form_factor": "desktop",
   "id": "TC-B2C189-D-006",
   "name": "Verificar que una nueva tienda con todo disponible actualiza la tarjeta y las ventanas [Desktop] [Logueado]",
   "observed": "Tras confirmar Unimarc Los Trapenses y validar el OTP, hay loader, Mis Envíos muestra la tienda nueva en la tarjeta y una ventana de retiro seleccionada por defecto.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Retiro en tienda configurado con Unimarc Las Condes\n- 000000000000675191-UN tiene stock en Unimarc Los Trapenses\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C189-D-006-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — mis envios retiro",
     "file": "TC-B2C189-D-006-p04-mis-envios-retiro.png"
    },
    {
     "caption": "Paso 6 — store locator de retiro",
     "file": "TC-B2C189-D-006-p06-store-locator-de-retiro.png"
    },
    {
     "caption": "Paso 7 — tienda nueva confirmada",
     "file": "TC-B2C189-D-006-p07-tienda-nueva-confirmada.png"
    },
    {
     "caption": "Paso 8 — otp validado",
     "file": "TC-B2C189-D-006-p08-otp-validado.png"
    },
    {
     "caption": "Paso 9 — mis envios tras el cambio",
     "file": "TC-B2C189-D-006-p09-mis-envios-tras-el-cambio.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C189-D-006.png"
    }
   ],
   "spec": "tests/B2C-189.spec.ts:227",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario hace clic en el ícono ▾ de la tarjeta de tienda.\n6. El sistema abre el Store Locator de retiro en tienda (B2C-121).\n7. El usuario selecciona la tienda Unimarc Los Trapenses y hace clic en \"Confirmar tienda\".\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra un loader mientras recarga las ventanas.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 20000, 000000000000675191-UN, Unimarc Las Condes, Unimarc Los Trapenses, 11, vhchirinos+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "Se activa el flujo de productos no disponibles de B2C-126 para {SKU_STOCK_SOLO_TIENDA_A}.",
   "form_factor": "desktop",
   "id": "TC-B2C189-D-007",
   "name": "Verificar que una nueva dirección con productos no disponibles activa el flujo de no disponibles [Desktop] [Logueado]",
   "observation": "Causa: {SKU_STOCK_SOLO_TIENDA_A} está en TBD en el Excel de data. Acción: cargar un SKU con stock solo en la tienda abastecedora de origen.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000 y {SKU_STOCK_SOLO_TIENDA_A}\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- {SKU_STOCK_SOLO_TIENDA_A} no tiene stock en la tienda abastecedora de A. Las Conder 14791, Lo Barnechea\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario hace clic en el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra un loader mientras verifica la disponibilidad.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, 20000, {SKU_STOCK_SOLO_TIENDA_A}, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "El usuario llega al carro de compras sin {SKU_STOCK_SOLO_TIENDA_A}.",
   "form_factor": "desktop",
   "id": "TC-B2C189-D-008",
   "name": "Verificar que tras resolver los productos no disponibles se redirige al carro [Desktop] [Logueado]",
   "observation": "Causa: {SKU_STOCK_SOLO_TIENDA_A} está en TBD en el Excel de data. Acción: cargar un SKU con stock solo en la tienda abastecedora de origen.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000 y {SKU_STOCK_SOLO_TIENDA_A}\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- {SKU_STOCK_SOLO_TIENDA_A} no tiene stock en la tienda abastecedora de A. Las Conder 14791, Lo Barnechea\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario hace clic en el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra el flujo de productos no disponibles (B2C-126).\n10. El usuario hace clic en \"Entendido\" en el modal \"Se agotaron\".",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, 20000, {SKU_STOCK_SOLO_TIENDA_A}, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "Se muestra la pantalla \"Ups Algo salió mal\" con el código ME-034 y los botones \"Reintentar\" y \"Volver al inicio\".",
   "form_factor": "desktop",
   "id": "TC-B2C189-D-009",
   "name": "Verificar que si falla el servicio de ventanas tras el cambio se muestra el error ME-034 [Desktop] [Logueado]",
   "observation": "Causa: {JANIS_API_ENDPOINT} está en TBD en el Excel de data. Acción: cargar el endpoint del servicio de ventanas a bloquear.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- 000000000000675191-UN tiene stock en la tienda de A. Las Conder 14791, Lo Barnechea\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- DevTools abierto con bloqueo de la request {JANIS_API_ENDPOINT} (Network request blocking) (activarlo después de confirmar la dirección)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario hace clic en el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra un loader.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, {JANIS_API_ENDPOINT}, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "Se cargan las ventanas de A. Las Conder 14791, Lo Barnechea y Mis Envíos muestra la nueva dirección con una ventana seleccionada por defecto.",
   "form_factor": "desktop",
   "id": "TC-B2C189-D-010",
   "name": "Verificar que Reintentar vuelve a consultar las ventanas de la nueva dirección [Desktop] [Logueado]",
   "observation": "Causa: {JANIS_API_ENDPOINT} está en TBD en el Excel de data. Acción: cargar el endpoint del servicio de ventanas a bloquear.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- DevTools abierto con bloqueo de la request {JANIS_API_ENDPOINT} (Network request blocking) (activarlo después de confirmar la dirección)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario hace clic en el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra la pantalla de error ME-034.\n10. El usuario desactiva en DevTools el bloqueo de la request {JANIS_API_ENDPOINT}.\n11. El usuario hace clic en \"Reintentar\".",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, {JANIS_API_ENDPOINT}, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "El usuario es redirigido al Home.",
   "form_factor": "desktop",
   "id": "TC-B2C189-D-011",
   "name": "Verificar que Volver al inicio desde el error ME-034 redirige al Home [Desktop] [Logueado]",
   "observation": "Causa: {JANIS_API_ENDPOINT} está en TBD en el Excel de data. Acción: cargar el endpoint del servicio de ventanas a bloquear.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- DevTools abierto con bloqueo de la request {JANIS_API_ENDPOINT} (Network request blocking) (activarlo después de confirmar la dirección)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario hace clic en el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra la pantalla de error ME-034.\n10. El usuario hace clic en \"Volver al inicio\".",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, {JANIS_API_ENDPOINT}, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "Se muestra la pantalla \"Sin horarios disponibles\" con el código de trazabilidad STL-041 legible en pantalla y los botones \"Cambiar dirección\" y \"Volver al inicio\" activos.",
   "form_factor": "desktop",
   "id": "TC-B2C189-D-012",
   "name": "Verificar que una nueva dirección sin horarios muestra la pantalla Sin horarios disponibles [Desktop] [Logueado]",
   "observation": "Causa: {DIRECCION_SIN_SLA} (Av. Libertador Gral. Bernardo O'Higgins 1072, Maipú) no tiene cobertura en DEV: al confirmarla el sitio muestra 'Aún no llegamos a esta dirección' y, al continuar, vuelve al Home con 'Despacho sin cobertura'; nunca llega a 'Sin horarios disponibles' (STL-041). Acción: cargar una dirección con cobertura pero sin ventanas (SLA) disponibles.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario hace clic en el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección Av Libertador Gral Bernardo O'Higgins 1072, Maipú y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra la pantalla \"Sin horarios disponibles\".\n10. El usuario verifica que el código STL-041 es legible en pantalla.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, Av Libertador Gral Bernardo O'Higgins 1072, Maipú, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "Se abre el Store Locator para seleccionar otra dirección o tienda.",
   "form_factor": "desktop",
   "id": "TC-B2C189-D-013",
   "name": "Verificar que Cambiar dirección en Sin horarios disponibles vuelve a abrir el Store Locator [Desktop] [Logueado]",
   "observation": "Causa: {DIRECCION_SIN_SLA} (Av. Libertador Gral. Bernardo O'Higgins 1072, Maipú) no tiene cobertura en DEV: al confirmarla el sitio muestra 'Aún no llegamos a esta dirección' y, al continuar, vuelve al Home con 'Despacho sin cobertura'; nunca llega a 'Sin horarios disponibles' (STL-041). Acción: cargar una dirección con cobertura pero sin ventanas (SLA) disponibles.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario hace clic en el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección Av Libertador Gral Bernardo O'Higgins 1072, Maipú y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra la pantalla \"Sin horarios disponibles\".\n10. El usuario hace clic en \"Cambiar dirección\".",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, Av Libertador Gral Bernardo O'Higgins 1072, Maipú, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "El usuario es redirigido al Home.",
   "form_factor": "desktop",
   "id": "TC-B2C189-D-014",
   "name": "Verificar que Volver al inicio desde Sin horarios disponibles redirige al Home [Desktop] [Logueado]",
   "observation": "Causa: {DIRECCION_SIN_SLA} (Av. Libertador Gral. Bernardo O'Higgins 1072, Maipú) no tiene cobertura en DEV: al confirmarla el sitio muestra 'Aún no llegamos a esta dirección' y, al continuar, vuelve al Home con 'Despacho sin cobertura'; nunca llega a 'Sin horarios disponibles' (STL-041). Acción: cargar una dirección con cobertura pero sin ventanas (SLA) disponibles.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario hace clic en el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección Av Libertador Gral Bernardo O'Higgins 1072, Maipú y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra la pantalla \"Sin horarios disponibles\".\n10. El usuario hace clic en \"Volver al inicio\".",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, Av Libertador Gral Bernardo O'Higgins 1072, Maipú, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "Mis Envíos muestra Gral. José Artigas 3250, Ñuñoa con sus ventanas recargadas, sin modal de productos no disponibles y con el carro intacto.",
   "form_factor": "desktop",
   "id": "TC-B2C189-D-015",
   "name": "Verificar que una dirección de la misma tienda abastecedora se actualiza sin validar productos [Desktop] [Logueado]",
   "observation": "Causa: {SKU_STOCK_SOLO_TIENDA_A} está en TBD en el Excel de data. Acción: cargar un SKU con stock solo en la tienda abastecedora de origen.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000 y {SKU_STOCK_SOLO_TIENDA_A}\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- Gral. José Artigas 3250, Ñuñoa es atendida por la misma tienda abastecedora que Calle Uno 23, La Florida\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario hace clic en el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección Gral. José Artigas 3250, Ñuñoa y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, Gral. José Artigas 3250, Ñuñoa, 20000, {SKU_STOCK_SOLO_TIENDA_A}, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "Mis Envíos muestra Calle Uno 23, La Florida, la misma ventana seleccionada y el mismo subtotal anotados en el paso 5, sin ningún cambio producido por la interacción parcial en el Store Locator.",
   "form_factor": "desktop",
   "id": "TC-B2C189-D-016",
   "name": "Verificar que Mis Envíos mantiene su estado mientras el Store Locator completa parcialmente el flujo sin confirmar [Desktop] [Logueado]",
   "observation": "Causa: el paso 8 ingresa 'una nueva dirección diferente a {DIRECCION_DESPACHO_001}' y la columna Test data no declara cuál. Acción: declarar el token de la dirección a ingresar en la fila del TC.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario anota la dirección activa (Calle Uno 23, La Florida), la ventana seleccionada y el subtotal visibles en Mis Envíos.\n6. El usuario hace clic en el ícono ▾ de la tarjeta de dirección.\n7. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n8. El usuario ingresa una nueva dirección diferente a Calle Uno 23, La Florida en el buscador del Store Locator pero NO la confirma.\n9. El usuario hace clic en la X del Store Locator.\n10. El sistema cierra el Store Locator y vuelve a Mis Envíos.\n11. El usuario verifica la dirección, la ventana seleccionada y el subtotal en Mis Envíos.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "La ventana seleccionada automáticamente es {VENTANA_ESPERADA_POR_REGLA}, cumpliendo la regla de priorización por defecto definida en B2C-147 CA4. Ninguna otra ventana queda marcada como seleccionada.",
   "form_factor": "desktop",
   "id": "TC-B2C189-D-017",
   "name": "Verificar que la ventana seleccionada automáticamente tras el cambio cumple la regla de priorización de B2C-147 CA4 [Desktop] [Logueado]",
   "observation": "Causa: {VENTANA_ESPERADA_POR_REGLA} está en TBD en el Excel de data. Acción: cargar la ventana que la regla de B2C-147 CA4 debe seleccionar para {DIRECCION_OTRA_TIENDA}.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- 000000000000675191-UN tiene stock en la tienda abastecedora de A. Las Conder 14791, Lo Barnechea\n- A. Las Conder 14791, Lo Barnechea tiene múltiples ventanas de entrega disponibles\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario hace clic en el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra un loader mientras recarga las ventanas.\n10. El sistema regresa a Mis Envíos con las ventanas de A. Las Conder 14791, Lo Barnechea.\n11. El usuario anota la ventana que queda seleccionada automáticamente.\n12. El usuario compara la ventana seleccionada con {VENTANA_ESPERADA_POR_REGLA}.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com, {VENTANA_ESPERADA_POR_REGLA}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "Se activa el flujo de productos no disponibles de B2C-126 para {SKU_STOCK_SOLO_TIENDA_A}.",
   "form_factor": "desktop",
   "id": "TC-B2C189-D-018",
   "name": "Verificar que una nueva tienda de retiro con producto no disponible activa el flujo de no disponibles [Desktop] [Logueado]",
   "observation": "Causa: {SKU_STOCK_SOLO_TIENDA_A} está en TBD en el Excel de data. Acción: cargar un SKU con stock solo en la tienda abastecedora de origen.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000 y {SKU_STOCK_SOLO_TIENDA_A}\n- Retiro en tienda configurado con Unimarc Las Condes\n- {SKU_STOCK_SOLO_TIENDA_A} no tiene stock en Unimarc Los Trapenses\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario hace clic en el ícono ▾ de la tarjeta de tienda.\n6. El sistema abre el Store Locator de retiro en tienda (B2C-121).\n7. El usuario selecciona la tienda Unimarc Los Trapenses y hace clic en \"Confirmar tienda\".\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra un loader mientras verifica la disponibilidad de productos.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 20000, {SKU_STOCK_SOLO_TIENDA_A}, 000000000000675191-UN, Unimarc Las Condes, Unimarc Los Trapenses, 11, vhchirinos+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "webkit",
   "duration_s": 149.5,
   "executed_at": "2026-10-14",
   "expected": "Se abre el Store Locator de despacho a domicilio y Mis Envíos permanece sin cambios detrás.",
   "form_factor": "mobile",
   "id": "TC-B2C189-M-001",
   "name": "Verificar que el ícono de la tarjeta de dirección abre el Store Locator de despacho [Mobile] [Logueado]",
   "observed": "Al pulsar el ícono ▾ de la tarjeta, el drawer 'Elige tu método de entrega' se abre sobre Mis Envíos con la pestaña del método activo seleccionada; la página detrás no cambia (misma URL y mismo contenido).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C189-M-001-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — mis envios despacho",
     "file": "TC-B2C189-M-001-p04-mis-envios-despacho.png"
    },
    {
     "caption": "Paso 6 — store locator de despacho",
     "file": "TC-B2C189-M-001-p06-store-locator-de-despacho.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C189-M-001.png"
    }
   ],
   "spec": "tests/B2C-189.spec.ts:197",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 96.2,
   "executed_at": "2026-10-14",
   "expected": "Se vuelve a Mis Envíos con la misma dirección Calle Uno 23, La Florida, la misma ventana seleccionada y el mismo subtotal.",
   "form_factor": "mobile",
   "id": "TC-B2C189-M-002",
   "name": "Verificar que al cancelar el Store Locator Mis Envíos mantiene la dirección y la ventana [Mobile] [Logueado]",
   "observed": "Al cerrar el Store Locator con la X sin confirmar, Mis Envíos conserva el mismo destino, la misma ventana seleccionada y el mismo subtotal.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C189-M-002-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — mis envios despacho",
     "file": "TC-B2C189-M-002-p04-mis-envios-despacho.png"
    },
    {
     "caption": "Paso 6 — store locator de despacho",
     "file": "TC-B2C189-M-002-p06-store-locator-de-despacho.png"
    },
    {
     "caption": "Paso 7 — mis envios tras cerrar con la x",
     "file": "TC-B2C189-M-002-p07-mis-envios-tras-cerrar-con-la-x.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C189-M-002.png"
    }
   ],
   "spec": "tests/B2C-189.spec.ts:211",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario toca la X del Store Locator sin confirmar una dirección.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 144.0,
   "executed_at": "2026-10-14",
   "expected": "Se abre el Store Locator de retiro en tienda y Mis Envíos permanece sin cambios detrás.",
   "form_factor": "mobile",
   "id": "TC-B2C189-M-003",
   "name": "Verificar que el ícono de la tarjeta de tienda abre el Store Locator de retiro [Mobile] [Logueado]",
   "observed": "Al pulsar el ícono ▾ de la tarjeta, el drawer 'Elige tu método de entrega' se abre sobre Mis Envíos con la pestaña del método activo seleccionada; la página detrás no cambia (misma URL y mismo contenido).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Retiro en tienda configurado con Unimarc Las Condes",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C189-M-003-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — mis envios retiro",
     "file": "TC-B2C189-M-003-p04-mis-envios-retiro.png"
    },
    {
     "caption": "Paso 6 — store locator de retiro",
     "file": "TC-B2C189-M-003-p06-store-locator-de-retiro.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C189-M-003.png"
    }
   ],
   "spec": "tests/B2C-189.spec.ts:197",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de tienda.\n6. El sistema abre el Store Locator de retiro en tienda (B2C-121).",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 20000, 000000000000675191-UN, Unimarc Las Condes, 11, vhchirinos+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 90.4,
   "executed_at": "2026-10-14",
   "expected": "Se vuelve a Mis Envíos con la misma tienda Unimarc Las Condes y la misma ventana seleccionada.",
   "form_factor": "mobile",
   "id": "TC-B2C189-M-004",
   "name": "Verificar que al cancelar el Store Locator Mis Envíos mantiene la tienda y la ventana [Mobile] [Logueado]",
   "observed": "Al cerrar el Store Locator con la X sin confirmar, Mis Envíos conserva el mismo destino, la misma ventana seleccionada y el mismo subtotal.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Retiro en tienda configurado con Unimarc Las Condes",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C189-M-004-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — mis envios retiro",
     "file": "TC-B2C189-M-004-p04-mis-envios-retiro.png"
    },
    {
     "caption": "Paso 6 — store locator de retiro",
     "file": "TC-B2C189-M-004-p06-store-locator-de-retiro.png"
    },
    {
     "caption": "Paso 7 — mis envios tras cerrar con la x",
     "file": "TC-B2C189-M-004-p07-mis-envios-tras-cerrar-con-la-x.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C189-M-004.png"
    }
   ],
   "spec": "tests/B2C-189.spec.ts:211",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de tienda.\n6. El sistema abre el Store Locator de retiro en tienda (B2C-121).\n7. El usuario toca la X del Store Locator sin confirmar una tienda.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 20000, 000000000000675191-UN, Unimarc Las Condes, 11, vhchirinos+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 200.1,
   "executed_at": "2026-10-14",
   "expected": "Se vuelve a Mis Envíos con la tarjeta rosada mostrando A. Las Conder 14791, Lo Barnechea, las ventanas de la nueva dirección y una ventana seleccionada automáticamente según la regla de priorización por defecto.",
   "form_factor": "mobile",
   "id": "TC-B2C189-M-005",
   "name": "Verificar que una nueva dirección con todo disponible actualiza la tarjeta y las ventanas [Mobile] [Logueado]",
   "observation": "Esperado: la tarjeta muestra la nueva dirección (Avenida Las Condes 14791). Obtenido: sigue 'Calle Uno 23, La Florida, Metropolitana'. tests/B2C-189.spec.ts:227. Data: {DIRECCION_OTRA_TIENDA}='A. Las Conder 14791, Lo Barnechea' (typo), se eligió la sugerencia de Google con el mismo número y comuna. Bug: B2C-1204.",
   "observed": "Tras confirmar Avenida Las Condes 14791, Lo Barnechea (sugerencia de Google para A. Las Conder 14791, Lo Barnechea) y validar el OTP, el Store Locator se cierra, hay loader y queda una ventana seleccionada, pero la tarjeta de Mis Envíos sigue mostrando 'Calle Uno 23, La Florida, Metropolitana'. El header sí pasa a la dirección nueva; la tarjeta no se actualiza ni recargando la página.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- 000000000000675191-UN tiene stock en la tienda abastecedora de A. Las Conder 14791, Lo Barnechea\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C189-M-005-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — mis envios despacho",
     "file": "TC-B2C189-M-005-p04-mis-envios-despacho.png"
    },
    {
     "caption": "Paso 6 — store locator de despacho",
     "file": "TC-B2C189-M-005-p06-store-locator-de-despacho.png"
    },
    {
     "caption": "Paso 7 — direccion nueva confirmada",
     "file": "TC-B2C189-M-005-p07-direccion-nueva-confirmada.png"
    },
    {
     "caption": "Paso 8 — otp validado",
     "file": "TC-B2C189-M-005-p08-otp-validado.png"
    },
    {
     "caption": "Paso 9 — mis envios tras el cambio",
     "file": "TC-B2C189-M-005-p09-mis-envios-tras-el-cambio.png"
    },
    {
     "caption": "Estado al fallar la aserción",
     "file": "TC-B2C189-M-005.png"
    }
   ],
   "spec": "tests/B2C-189.spec.ts:227",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra un loader mientras recarga las ventanas.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 146.4,
   "executed_at": "2026-10-14",
   "expected": "Se vuelve a Mis Envíos con la tarjeta rosada mostrando Unimarc Los Trapenses, sus ventanas de retiro y una ventana seleccionada por defecto.",
   "form_factor": "mobile",
   "id": "TC-B2C189-M-006",
   "name": "Verificar que una nueva tienda con todo disponible actualiza la tarjeta y las ventanas [Mobile] [Logueado]",
   "observed": "Tras confirmar Unimarc Los Trapenses y validar el OTP, hay loader, Mis Envíos muestra la tienda nueva en la tarjeta y una ventana de retiro seleccionada por defecto.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Retiro en tienda configurado con Unimarc Las Condes\n- 000000000000675191-UN tiene stock en Unimarc Los Trapenses\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C189-M-006-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — mis envios retiro",
     "file": "TC-B2C189-M-006-p04-mis-envios-retiro.png"
    },
    {
     "caption": "Paso 6 — store locator de retiro",
     "file": "TC-B2C189-M-006-p06-store-locator-de-retiro.png"
    },
    {
     "caption": "Paso 7 — tienda nueva confirmada",
     "file": "TC-B2C189-M-006-p07-tienda-nueva-confirmada.png"
    },
    {
     "caption": "Paso 8 — otp validado",
     "file": "TC-B2C189-M-006-p08-otp-validado.png"
    },
    {
     "caption": "Paso 9 — mis envios tras el cambio",
     "file": "TC-B2C189-M-006-p09-mis-envios-tras-el-cambio.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C189-M-006.png"
    }
   ],
   "spec": "tests/B2C-189.spec.ts:227",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de tienda.\n6. El sistema abre el Store Locator de retiro en tienda (B2C-121).\n7. El usuario selecciona la tienda Unimarc Los Trapenses y toca \"Confirmar tienda\".\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra un loader mientras recarga las ventanas.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 20000, 000000000000675191-UN, Unimarc Las Condes, Unimarc Los Trapenses, 11, vhchirinos+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-14",
   "expected": "Se activa el flujo de productos no disponibles de B2C-126 para {SKU_STOCK_SOLO_TIENDA_A}.",
   "form_factor": "mobile",
   "id": "TC-B2C189-M-007",
   "name": "Verificar que una nueva dirección con productos no disponibles activa el flujo de no disponibles [Mobile] [Logueado]",
   "observation": "Causa: {SKU_STOCK_SOLO_TIENDA_A} está en TBD en el Excel de data. Acción: cargar un SKU con stock solo en la tienda abastecedora de origen.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000 y {SKU_STOCK_SOLO_TIENDA_A}\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- {SKU_STOCK_SOLO_TIENDA_A} no tiene stock en la tienda abastecedora de A. Las Conder 14791, Lo Barnechea\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra un loader mientras verifica la disponibilidad.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, 20000, {SKU_STOCK_SOLO_TIENDA_A}, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-14",
   "expected": "El usuario llega al carro de compras sin {SKU_STOCK_SOLO_TIENDA_A}.",
   "form_factor": "mobile",
   "id": "TC-B2C189-M-008",
   "name": "Verificar que tras resolver los productos no disponibles se redirige al carro [Mobile] [Logueado]",
   "observation": "Causa: {SKU_STOCK_SOLO_TIENDA_A} está en TBD en el Excel de data. Acción: cargar un SKU con stock solo en la tienda abastecedora de origen.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000 y {SKU_STOCK_SOLO_TIENDA_A}\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- {SKU_STOCK_SOLO_TIENDA_A} no tiene stock en la tienda abastecedora de A. Las Conder 14791, Lo Barnechea\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra el flujo de productos no disponibles (B2C-126).\n10. El usuario toca \"Entendido\" en el modal \"Se agotaron\".",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, 20000, {SKU_STOCK_SOLO_TIENDA_A}, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-14",
   "expected": "Se muestra la pantalla \"Ups Algo salió mal\" con el código ME-034 y los botones \"Reintentar\" y \"Volver al inicio\".",
   "form_factor": "mobile",
   "id": "TC-B2C189-M-009",
   "name": "Verificar que si falla el servicio de ventanas tras el cambio se muestra el error ME-034 [Mobile] [Logueado]",
   "observation": "Causa: {JANIS_API_ENDPOINT} está en TBD en el Excel de data. Acción: cargar el endpoint del servicio de ventanas a bloquear.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- 000000000000675191-UN tiene stock en la tienda de A. Las Conder 14791, Lo Barnechea\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- DevTools abierto con bloqueo de la request {JANIS_API_ENDPOINT} (Network request blocking) (activarlo después de confirmar la dirección)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra un loader.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, {JANIS_API_ENDPOINT}, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-14",
   "expected": "Se cargan las ventanas de A. Las Conder 14791, Lo Barnechea y Mis Envíos muestra la nueva dirección con una ventana seleccionada por defecto.",
   "form_factor": "mobile",
   "id": "TC-B2C189-M-010",
   "name": "Verificar que Reintentar vuelve a consultar las ventanas de la nueva dirección [Mobile] [Logueado]",
   "observation": "Causa: {JANIS_API_ENDPOINT} está en TBD en el Excel de data. Acción: cargar el endpoint del servicio de ventanas a bloquear.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- DevTools abierto con bloqueo de la request {JANIS_API_ENDPOINT} (Network request blocking) (activarlo después de confirmar la dirección)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra la pantalla de error ME-034.\n10. El usuario desactiva en DevTools el bloqueo de la request {JANIS_API_ENDPOINT}.\n11. El usuario toca \"Reintentar\".",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, {JANIS_API_ENDPOINT}, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-14",
   "expected": "El usuario es redirigido al Home.",
   "form_factor": "mobile",
   "id": "TC-B2C189-M-011",
   "name": "Verificar que Volver al inicio desde el error ME-034 redirige al Home [Mobile] [Logueado]",
   "observation": "Causa: {JANIS_API_ENDPOINT} está en TBD en el Excel de data. Acción: cargar el endpoint del servicio de ventanas a bloquear.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- DevTools abierto con bloqueo de la request {JANIS_API_ENDPOINT} (Network request blocking) (activarlo después de confirmar la dirección)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra la pantalla de error ME-034.\n10. El usuario toca \"Volver al inicio\".",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, {JANIS_API_ENDPOINT}, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-14",
   "expected": "Se muestra la pantalla \"Sin horarios disponibles\" con el código de trazabilidad STL-041 legible en pantalla y los botones \"Cambiar dirección\" y \"Volver al inicio\" activos.",
   "form_factor": "mobile",
   "id": "TC-B2C189-M-012",
   "name": "Verificar que una nueva dirección sin horarios muestra la pantalla Sin horarios disponibles [Mobile] [Logueado]",
   "observation": "Causa: {DIRECCION_SIN_SLA} (Av. Libertador Gral. Bernardo O'Higgins 1072, Maipú) no tiene cobertura en DEV: al confirmarla el sitio muestra 'Aún no llegamos a esta dirección' y, al continuar, vuelve al Home con 'Despacho sin cobertura'; nunca llega a 'Sin horarios disponibles' (STL-041). Acción: cargar una dirección con cobertura pero sin ventanas (SLA) disponibles.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección Av Libertador Gral Bernardo O'Higgins 1072, Maipú y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra la pantalla \"Sin horarios disponibles\".\n10. El usuario verifica que el código STL-041 es legible en pantalla.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, Av Libertador Gral Bernardo O'Higgins 1072, Maipú, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-14",
   "expected": "Se abre el Store Locator para seleccionar otra dirección o tienda.",
   "form_factor": "mobile",
   "id": "TC-B2C189-M-013",
   "name": "Verificar que Cambiar dirección en Sin horarios disponibles vuelve a abrir el Store Locator [Mobile] [Logueado]",
   "observation": "Causa: {DIRECCION_SIN_SLA} (Av. Libertador Gral. Bernardo O'Higgins 1072, Maipú) no tiene cobertura en DEV: al confirmarla el sitio muestra 'Aún no llegamos a esta dirección' y, al continuar, vuelve al Home con 'Despacho sin cobertura'; nunca llega a 'Sin horarios disponibles' (STL-041). Acción: cargar una dirección con cobertura pero sin ventanas (SLA) disponibles.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección Av Libertador Gral Bernardo O'Higgins 1072, Maipú y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra la pantalla \"Sin horarios disponibles\".\n10. El usuario toca \"Cambiar dirección\".",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, Av Libertador Gral Bernardo O'Higgins 1072, Maipú, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-14",
   "expected": "El usuario es redirigido al Home.",
   "form_factor": "mobile",
   "id": "TC-B2C189-M-014",
   "name": "Verificar que Volver al inicio desde Sin horarios disponibles redirige al Home [Mobile] [Logueado]",
   "observation": "Causa: {DIRECCION_SIN_SLA} (Av. Libertador Gral. Bernardo O'Higgins 1072, Maipú) no tiene cobertura en DEV: al confirmarla el sitio muestra 'Aún no llegamos a esta dirección' y, al continuar, vuelve al Home con 'Despacho sin cobertura'; nunca llega a 'Sin horarios disponibles' (STL-041). Acción: cargar una dirección con cobertura pero sin ventanas (SLA) disponibles.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección Av Libertador Gral Bernardo O'Higgins 1072, Maipú y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra la pantalla \"Sin horarios disponibles\".\n10. El usuario toca \"Volver al inicio\".",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, Av Libertador Gral Bernardo O'Higgins 1072, Maipú, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-14",
   "expected": "Mis Envíos muestra Gral. José Artigas 3250, Ñuñoa con sus ventanas recargadas, sin modal de productos no disponibles y con el carro intacto.",
   "form_factor": "mobile",
   "id": "TC-B2C189-M-015",
   "name": "Verificar que una dirección de la misma tienda abastecedora se actualiza sin validar productos [Mobile] [Logueado]",
   "observation": "Causa: {SKU_STOCK_SOLO_TIENDA_A} está en TBD en el Excel de data. Acción: cargar un SKU con stock solo en la tienda abastecedora de origen.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000 y {SKU_STOCK_SOLO_TIENDA_A}\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- Gral. José Artigas 3250, Ñuñoa es atendida por la misma tienda abastecedora que Calle Uno 23, La Florida\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección Gral. José Artigas 3250, Ñuñoa y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, Gral. José Artigas 3250, Ñuñoa, 20000, {SKU_STOCK_SOLO_TIENDA_A}, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-14",
   "expected": "Mis Envíos muestra Calle Uno 23, La Florida, la misma ventana seleccionada y el mismo subtotal anotados en el paso 5, sin ningún cambio producido por la interacción parcial en el Store Locator.",
   "form_factor": "mobile",
   "id": "TC-B2C189-M-016",
   "name": "Verificar que Mis Envíos mantiene su estado mientras el Store Locator completa parcialmente el flujo sin confirmar [Mobile] [Logueado]",
   "observation": "Causa: el paso 8 ingresa 'una nueva dirección diferente a {DIRECCION_DESPACHO_001}' y la columna Test data no declara cuál. Acción: declarar el token de la dirección a ingresar en la fila del TC.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario anota la dirección activa (Calle Uno 23, La Florida), la ventana seleccionada y el subtotal visibles en Mis Envíos.\n6. El usuario toca el ícono ▾ de la tarjeta de dirección.\n7. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n8. El usuario ingresa una nueva dirección diferente a Calle Uno 23, La Florida en el buscador del Store Locator pero NO la confirma.\n9. El usuario toca la X del Store Locator.\n10. El sistema cierra el Store Locator y vuelve a Mis Envíos.\n11. El usuario verifica la dirección, la ventana seleccionada y el subtotal en Mis Envíos.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-14",
   "expected": "La ventana seleccionada automáticamente es {VENTANA_ESPERADA_POR_REGLA}, cumpliendo la regla de priorización por defecto definida en B2C-147 CA4. Ninguna otra ventana queda marcada como seleccionada.",
   "form_factor": "mobile",
   "id": "TC-B2C189-M-017",
   "name": "Verificar que la ventana seleccionada automáticamente tras el cambio cumple la regla de priorización de B2C-147 CA4 [Mobile] [Logueado]",
   "observation": "Causa: {VENTANA_ESPERADA_POR_REGLA} está en TBD en el Excel de data. Acción: cargar la ventana que la regla de B2C-147 CA4 debe seleccionar para {DIRECCION_OTRA_TIENDA}.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- 000000000000675191-UN tiene stock en la tienda abastecedora de A. Las Conder 14791, Lo Barnechea\n- A. Las Conder 14791, Lo Barnechea tiene múltiples ventanas de entrega disponibles\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra un loader mientras recarga las ventanas.\n10. El sistema regresa a Mis Envíos con las ventanas de A. Las Conder 14791, Lo Barnechea.\n11. El usuario anota la ventana que queda seleccionada automáticamente.\n12. El usuario compara la ventana seleccionada con {VENTANA_ESPERADA_POR_REGLA}.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com, {VENTANA_ESPERADA_POR_REGLA}",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-14",
   "expected": "Se activa el flujo de productos no disponibles de B2C-126 para {SKU_STOCK_SOLO_TIENDA_A}.",
   "form_factor": "mobile",
   "id": "TC-B2C189-M-018",
   "name": "Verificar que una nueva tienda de retiro con producto no disponible activa el flujo de no disponibles [Mobile] [Logueado]",
   "observation": "Causa: {SKU_STOCK_SOLO_TIENDA_A} está en TBD en el Excel de data. Acción: cargar un SKU con stock solo en la tienda abastecedora de origen.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000 y {SKU_STOCK_SOLO_TIENDA_A}\n- Retiro en tienda configurado con Unimarc Las Condes\n- {SKU_STOCK_SOLO_TIENDA_A} no tiene stock en Unimarc Los Trapenses\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de tienda.\n6. El sistema abre el Store Locator de retiro en tienda (B2C-121).\n7. El usuario selecciona la tienda Unimarc Los Trapenses y toca \"Confirmar tienda\".\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra un loader mientras verifica la disponibilidad de productos.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 20000, {SKU_STOCK_SOLO_TIENDA_A}, 000000000000675191-UN, Unimarc Las Condes, Unimarc Los Trapenses, 11, vhchirinos+comprador@avatar-global.com",
   "viewport": "390x844"
  }
 ]
}
-->
