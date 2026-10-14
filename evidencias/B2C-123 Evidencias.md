# B2C-123 - Sin cobertura de despacho - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-123 |
| Última actualización | 2026-10-14 |
| Ejecutado por | Victor Chirinos |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | webkit |
| Origen de los TC | Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-123 WEB Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 12 |
| Bloqueado Data | 8 |
| Rechazado | 6 |
| **Total** | **26** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-14 | 26 | TC-B2C123-D-001, TC-B2C123-D-002, TC-B2C123-D-003, TC-B2C123-D-004, TC-B2C123-D-005, TC-B2C123-D-006, TC-B2C123-D-007, TC-B2C123-D-008, TC-B2C123-D-009, TC-B2C123-D-010, TC-B2C123-D-011, TC-B2C123-D-012, TC-B2C123-D-013, TC-B2C123-M-001, TC-B2C123-M-002, TC-B2C123-M-003, TC-B2C123-M-004, TC-B2C123-M-005, TC-B2C123-M-006, TC-B2C123-M-007, TC-B2C123-M-008, TC-B2C123-M-009, TC-B2C123-M-010, TC-B2C123-M-011, TC-B2C123-M-012, TC-B2C123-M-013 |

## Detalle por caso de prueba

### TC-B2C123-D-001 - Verificar que una dirección nueva fuera de zona muestra el modal Aún no llegamos con sus opciones [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 16.1 s |
| Spec | tests/B2C-123.spec.ts:152 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, T-551, Futrono

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección T-551, Futrono, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El sistema muestra el modal "Aún no llegamos a esta dirección".

**Resultado esperado**

Se muestra el modal "Aún no llegamos a esta dirección" con el mensaje "Revisa que esté correcta, prueba con otra dentro de nuestra zona de cobertura o cambia tu método de entrega a una de nuestras tiendas Unimarc" y las opciones "Continuar con esta dirección" y "Cambiar método de entrega".

**Resultado obtenido**

Esperado: mensaje 'Revisa que esté correcta, prueba con otra dentro de nuestra zona de cobertura o cambia tu método de entrega a una de nuestras tiendas Unimarc'. Obtenido: '…a una de nuestras tienda Unimarc' (falta la s). Con 'T-551, Futrono' el modal y sus opciones sí se muestran.

**Observación**

Esperado: mensaje 'Revisa que esté correcta, prueba con otra dentro de nuestra zona de cobertura o cambia tu método de entrega a una de nuestras tiendas Unimarc'. Obtenido: '…a una de nuestras tienda Unimarc' (falta la s). Con 'T-551, Futrono' el modal y sus opciones sí se muestran. tests/B2C-123.spec.ts:152. Bug: B2C-1185 (comentado en la re-ejecución del 2026-10-14).

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-123 Evidencias/TC-B2C123-D-001-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 5 — sugerencia para t 551 futrono](<B2C-123 Evidencias/TC-B2C123-D-001-p05-sugerencia-para-t-551-futrono.png>)

![Paso 6 — modal aun no llegamos a esta direccion](<B2C-123 Evidencias/TC-B2C123-D-001-p06-modal-aun-no-llegamos-a-esta-direccion.png>)

![Estado al fallar la aserción](<B2C-123 Evidencias/TC-B2C123-D-001.png>)

---

### TC-B2C123-D-002 - Verificar que una dirección guardada sin cobertura muestra el modal tras validar OTP [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 67.2 s |
| Spec | tests/B2C-123.spec.ts:309 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta tiene guardada la dirección T-551, Futrono
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, T-551, Futrono, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El usuario selecciona la dirección guardada T-551, Futrono.
5. El usuario completa la validación OTP con el código recibido.

**Resultado esperado**

Se muestra el modal "Aún no llegamos a esta dirección" con sus opciones "Continuar con esta dirección" y "Cambiar método de entrega".

**Resultado obtenido**

Con sesión de vhchirinos+comprador y 'Casa' activa, al elegir la guardada 'T-551, Futrono' se muestra 'Aún no llegamos a esta dirección' con 'Continuar con esta dirección' y 'Cambiar método de entrega'. El modal aparece antes del OTP (el OTP se pide al continuar), no después como dicen los pasos. La dirección guardada se agregó a la cuenta como precondición el 2026-10-14.

**Observación**

Con sesión de vhchirinos+comprador y 'Casa' activa, al elegir la guardada 'T-551, Futrono' se muestra 'Aún no llegamos a esta dirección' con 'Continuar con esta dirección' y 'Cambiar método de entrega'. El modal aparece antes del OTP (el OTP se pide al continuar), no después como dicen los pasos. La dirección guardada se agregó a la cuenta como precondición el 2026-10-14.

**Evidencia**

![Paso 2 — home con sesion y la direccion casa](<B2C-123 Evidencias/TC-B2C123-D-002-p02-home-con-sesion-y-la-direccion-casa.png>)

![Paso 3 — direcciones guardadas](<B2C-123 Evidencias/TC-B2C123-D-002-p03-direcciones-guardadas.png>)

![Paso 5 — modal aun no llegamos a esta direccion](<B2C-123 Evidencias/TC-B2C123-D-002-p05-modal-aun-no-llegamos-a-esta-direccion.png>)

![Estado final del caso](<B2C-123 Evidencias/TC-B2C123-D-002.png>)

---

### TC-B2C123-D-003 - Verificar que continuar sin carro setea la dirección con la etiqueta Despacho sin cobertura [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 18.7 s |
| Spec | tests/B2C-123.spec.ts:168 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro está vacío

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, T-551, Futrono, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección T-551, Futrono, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El sistema muestra el modal "Aún no llegamos a esta dirección".
7. El usuario hace clic en "Continuar con esta dirección".
8. El sistema muestra un loader.
9. El usuario navega a otra página del sitio.

**Resultado esperado**

La dirección T-551, Futrono queda seteada y el Store Locator muestra "Despacho sin cobertura" debajo, también al navegar a otras páginas.

**Resultado obtenido**

Con 'T-551, Futrono': tras 'Continuar con esta dirección' hay loader, el Store Locator muestra 'T-551' con 'Despacho sin cobertura' y se mantiene al navegar a la PLP.

**Observación**

Con 'T-551, Futrono': tras 'Continuar con esta dirección' hay loader, el Store Locator muestra 'T-551' con 'Despacho sin cobertura' y se mantiene al navegar a la PLP.

**Evidencia**

![Paso 5 — sugerencia para t 551 futrono](<B2C-123 Evidencias/TC-B2C123-D-003-p05-sugerencia-para-t-551-futrono.png>)

![Paso 6 — modal aun no llegamos a esta direccion](<B2C-123 Evidencias/TC-B2C123-D-003-p06-modal-aun-no-llegamos-a-esta-direccion.png>)

![Paso 8 — direccion seteada con despacho sin cobertura](<B2C-123 Evidencias/TC-B2C123-D-003-p08-direccion-seteada-con-despacho-sin-cobertura.png>)

![Paso 9 — plp con despacho sin cobertura](<B2C-123 Evidencias/TC-B2C123-D-003-p09-plp-con-despacho-sin-cobertura.png>)

![Estado final del caso](<B2C-123 Evidencias/TC-B2C123-D-003.png>)

---

### TC-B2C123-D-004 - Verificar que continuar con carro y otra tienda abastecedora muestra el modal No se te escapen [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 43.0 s |
| Spec | tests/B2C-123.spec.ts:226 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- La dirección activa es Calle Uno 23, La Florida
- El carro contiene 000000000000675191-UN
- La tienda por defecto de T-551, Futrono es distinta a la de Calle Uno 23, La Florida

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, T-551, Futrono, 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección T-551, Futrono, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El sistema muestra el modal "Aún no llegamos a esta dirección".
7. El usuario hace clic en "Continuar con esta dirección".
8. El sistema muestra un loader y verifica la disponibilidad de productos.

**Resultado esperado**

Se muestra el modal "Algunos productos podrían agotarse" (B2C-126).

**Resultado obtenido**

Con 'Calle Uno 23, La Florida' activa y el carro con 000000000000675191-UN, al confirmar 'T-551, Futrono' y continuar aparece 'Algunos productos podrían agotarse' (B2C-126).

**Observación**

Con 'Calle Uno 23, La Florida' activa y el carro con 000000000000675191-UN, al confirmar 'T-551, Futrono' y continuar aparece 'Algunos productos podrían agotarse' (B2C-126).

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-123 Evidencias/TC-B2C123-D-004-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 5 — sugerencia para t 551 futrono](<B2C-123 Evidencias/TC-B2C123-D-004-p05-sugerencia-para-t-551-futrono.png>)

![Paso 6 — modal aun no llegamos a esta direccion](<B2C-123 Evidencias/TC-B2C123-D-004-p06-modal-aun-no-llegamos-a-esta-direccion.png>)

![TC B2C123 D 004 ppre carro con el sku y direccion activa](<B2C-123 Evidencias/TC-B2C123-D-004-ppre-carro-con-el-sku-y-direccion-activa.png>)

![Estado final del caso](<B2C-123 Evidencias/TC-B2C123-D-004.png>)

---

### TC-B2C123-D-005 - Verificar que Cambiar método de entrega vuelve al modal Elige tu método de entrega [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 11.0 s |
| Spec | tests/B2C-123.spec.ts:193 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, T-551, Futrono

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección T-551, Futrono, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El sistema muestra el modal "Aún no llegamos a esta dirección".
7. El usuario hace clic en "Cambiar método de entrega".

**Resultado esperado**

El modal "Aún no llegamos a esta dirección" se cierra y se muestra el modal "Elige tu método de entrega".

**Resultado obtenido**

'Cambiar método de entrega' cierra 'Aún no llegamos a esta dirección' y vuelve 'Elige tu método de entrega'.

**Observación**

'Cambiar método de entrega' cierra 'Aún no llegamos a esta dirección' y vuelve 'Elige tu método de entrega'.

**Evidencia**

![Paso 5 — sugerencia para t 551 futrono](<B2C-123 Evidencias/TC-B2C123-D-005-p05-sugerencia-para-t-551-futrono.png>)

![Paso 6 — modal aun no llegamos a esta direccion](<B2C-123 Evidencias/TC-B2C123-D-005-p06-modal-aun-no-llegamos-a-esta-direccion.png>)

![Estado final del caso](<B2C-123 Evidencias/TC-B2C123-D-005.png>)

---

### TC-B2C123-D-006 - Verificar que una nueva dirección con cobertura se setea y vuelve a la página de origen [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 15.1 s |
| Spec | tests/B2C-123.spec.ts:251 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: PLP

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, T-551, Futrono, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.
2. El usuario hace clic en el Store Locator del header.
3. El usuario ingresa T-551, Futrono y la confirma.
4. El sistema muestra el modal "Aún no llegamos a esta dirección".
5. El usuario hace clic en "Cambiar método de entrega".
6. El usuario ingresa Calle Uno 23, La Florida y la confirma.

**Resultado esperado**

El modal se cierra, el Store Locator muestra Calle Uno 23, La Florida y el usuario vuelve a la PLP.

**Resultado obtenido**

Desde la PLP: sin cobertura → 'Cambiar método de entrega' → 'Calle Uno 23, La Florida'. El modal se cierra, el Store Locator muestra 'Calle Uno 23' sin etiqueta y sigue en la misma PLP.

**Observación**

Desde la PLP: sin cobertura → 'Cambiar método de entrega' → 'Calle Uno 23, La Florida'. El modal se cierra, el Store Locator muestra 'Calle Uno 23' sin etiqueta y sigue en la misma PLP.

**Evidencia**

![Paso 3 — sugerencia para t 551 futrono](<B2C-123 Evidencias/TC-B2C123-D-006-p03-sugerencia-para-t-551-futrono.png>)

![Paso 4 — modal aun no llegamos a esta direccion](<B2C-123 Evidencias/TC-B2C123-D-006-p04-modal-aun-no-llegamos-a-esta-direccion.png>)

![Paso 5 — de vuelta en elige tu metodo de entrega](<B2C-123 Evidencias/TC-B2C123-D-006-p05-de-vuelta-en-elige-tu-metodo-de-entrega.png>)

![Paso 6 — plp con la nueva direccion](<B2C-123 Evidencias/TC-B2C123-D-006-p06-plp-con-la-nueva-direccion.png>)

![Estado final del caso](<B2C-123 Evidencias/TC-B2C123-D-006.png>)

---

### TC-B2C123-D-007 - Verificar que con dirección sin cobertura agregar un producto se bloquea con un toast [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 40.4 s |
| Spec | tests/B2C-123.spec.ts:204 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- La dirección T-551, Futrono está activa con la etiqueta "Despacho sin cobertura"

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, T-551, Futrono, 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El sistema carga el Home con la etiqueta "Despacho sin cobertura".
3. El usuario ingresa a la PDP de 000000000000675191-UN y lo agrega al carro.

**Resultado esperado**

Se muestra el toast de error "No tenemos cobertura para la dirección actual, seleccione otra dirección" con X de cierre manual y 000000000000675191-UN no se agrega al carro.

**Resultado obtenido**

Esperado: toast 'No tenemos cobertura para la dirección actual, seleccione otra dirección' con X. Obtenido: 'Cambia tu dirección de despacho para poder comprar.'. La X y el bloqueo sí se cumplen (el SKU no se agrega).

**Observación**

Esperado: toast 'No tenemos cobertura para la dirección actual, seleccione otra dirección' con X. Obtenido: 'Cambia tu dirección de despacho para poder comprar.'. La X y el bloqueo sí se cumplen (el SKU no se agrega). tests/B2C-123.spec.ts:204. Bug: B2C-1186 (comentado en la re-ejecución del 2026-10-14).

**Evidencia**

![Paso 2 — home con despacho sin cobertura](<B2C-123 Evidencias/TC-B2C123-D-007-p02-home-con-despacho-sin-cobertura.png>)

![Paso 3 — toast tras agregar](<B2C-123 Evidencias/TC-B2C123-D-007-p03-toast-tras-agregar.png>)

![TC B2C123 D 007 ppre sugerencia para t 551 futrono](<B2C-123 Evidencias/TC-B2C123-D-007-ppre-sugerencia-para-t-551-futrono.png>)

![Estado al fallar la aserción](<B2C-123 Evidencias/TC-B2C123-D-007.png>)

---

### TC-B2C123-D-008 - Verificar que con dirección sin cobertura los productos del carro quedan no disponibles [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro contenía 000000000000675191-UN antes de continuar con la dirección sin cobertura
- La dirección T-551, Futrono está activa con la etiqueta "Despacho sin cobertura"

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, T-551, Futrono, 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.

**Resultado esperado**

000000000000675191-UN se muestra marcado como no disponible en el carro.

**Observación**

Causa: la precondición pide el carro con {SKU_VALID_001} antes de aplicar la dirección sin cobertura, y un invitado sin dirección no puede agregar (re-verificado 2026-10-14: 'Agregar' abre 'Elige tu método de entrega'). Acción: declarar en la fila la dirección con cobertura con la que se arma el carro.

---

### TC-B2C123-D-009 - Verificar que continuar con la dirección sin cobertura desde Mis envíos lleva al Home [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 85.6 s |
| Spec | tests/B2C-123.spec.ts:334 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN
- Método de entrega activo con cobertura
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, T-551, Futrono, 000000000000675191-UN, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario hace clic en la tarjeta de dirección e ingresa T-551, Futrono.
6. El usuario completa la validación OTP.
7. El sistema muestra el modal "Aún no llegamos a esta dirección".
8. El usuario hace clic en "Continuar con esta dirección".

**Resultado esperado**

El usuario es redirigido al Home con T-551, Futrono seteada y la etiqueta de sin cobertura.

**Resultado obtenido**

Desde Mis Envíos (ícono ▾ de la tarjeta), con 'T-551, Futrono': 'Aún no llegamos' → 'Continuar con esta dirección' → 'Sí, continuar' → OTP; redirige al Home con 'T-551' y 'Despacho sin cobertura'.

**Observación**

Desde Mis Envíos (ícono ▾ de la tarjeta), con 'T-551, Futrono': 'Aún no llegamos' → 'Continuar con esta dirección' → 'Sí, continuar' → OTP; redirige al Home con 'T-551' y 'Despacho sin cobertura'.

**Evidencia**

![Paso 2 — carro cargado](<B2C-123 Evidencias/TC-B2C123-D-009-p02-carro-cargado.png>)

![Paso 4 — mis envios](<B2C-123 Evidencias/TC-B2C123-D-009-p04-mis-envios.png>)

![Paso 7 — modal aun no llegamos a esta direccion](<B2C-123 Evidencias/TC-B2C123-D-009-p07-modal-aun-no-llegamos-a-esta-direccion.png>)

![Paso 8 — home con la direccion sin cobertura](<B2C-123 Evidencias/TC-B2C123-D-009-p08-home-con-la-direccion-sin-cobertura.png>)

![Estado final del caso](<B2C-123 Evidencias/TC-B2C123-D-009.png>)

---

### TC-B2C123-D-010 - Verificar que al iniciar sesión una dirección que recuperó cobertura pierde la etiqueta [Desktop] [Logueado]

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
- Sesión iniciada con la cuenta vhchirinos+nocobertura@avatar-global.com
- La última dirección activa del perfil fue marcada sin cobertura en una sesión anterior
- La zona de esa dirección ya tiene cobertura en Janis

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_DIRECCION_SIN_COBERTURA_PASSWORD}, vhchirinos+nocobertura@avatar-global.com, 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El sistema re-verifica la cobertura de la dirección guardada.
3. El usuario ingresa a la PDP de 000000000000675191-UN y lo agrega al carro.

**Resultado esperado**

El Store Locator muestra la dirección sin "Despacho sin cobertura" y 000000000000675191-UN se agrega al carro con normalidad.

**Observación**

Causa: {COMPRADOR_DIRECCION_SIN_COBERTURA_USER} (vhchirinos+nocobertura@avatar-global.com) no es una cuenta registrada en DEV: al pedir el código de acceso el sitio abre 'Crear cuenta'. Acción: registrar la cuenta y dejar su última dirección activa en el estado que pide el TC, o declarar una cuenta existente. Además, la dirección debe haber estado sin cobertura y hoy tenerla en Janis.

---

### TC-B2C123-D-011 - Verificar que al iniciar sesión una dirección que sigue sin cobertura mantiene la etiqueta [Desktop] [Logueado]

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
- Sesión iniciada con la cuenta vhchirinos+nocobertura@avatar-global.com
- La última dirección activa del perfil está sin cobertura y Janis sigue sin cobertura para esas coordenadas

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_DIRECCION_SIN_COBERTURA_PASSWORD}, vhchirinos+nocobertura@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El sistema re-verifica la cobertura de la dirección guardada.

**Resultado esperado**

El Store Locator mantiene la dirección con la etiqueta "Despacho sin cobertura".

**Observación**

Causa: {COMPRADOR_DIRECCION_SIN_COBERTURA_USER} (vhchirinos+nocobertura@avatar-global.com) no es una cuenta registrada en DEV: al pedir el código de acceso el sitio abre 'Crear cuenta'. Acción: registrar la cuenta y dejar su última dirección activa en el estado que pide el TC, o declarar una cuenta existente. (En la ejecución anterior se aprobó con otra cuenta, vhchirinos+comprador, que era el valor previo del token.)

---

### TC-B2C123-D-012 - Verificar que si la re-verificación falla se mantiene el último estado sin cobertura [Desktop] [Logueado]

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
- Sesión iniciada con la cuenta vhchirinos+nocobertura@avatar-global.com
- La última dirección activa del perfil está sin cobertura
- DevTools abierto con bloqueo de la request {JANIS_API_ENDPOINT} (Network request blocking)

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_DIRECCION_SIN_COBERTURA_PASSWORD}, vhchirinos+nocobertura@avatar-global.com, {JANIS_API_ENDPOINT}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El sistema intenta re-verificar la cobertura y la llamada falla.

**Resultado esperado**

El Store Locator mantiene la etiqueta "Despacho sin cobertura" sin cambios.

**Observación**

Causa: {COMPRADOR_DIRECCION_SIN_COBERTURA_USER} (vhchirinos+nocobertura@avatar-global.com) no es una cuenta registrada en DEV: al pedir el código de acceso el sitio abre 'Crear cuenta'. Acción: registrar la cuenta y dejar su última dirección activa en el estado que pide el TC, o declarar una cuenta existente. Además, {JANIS_API_ENDPOINT} está en TBD en el Excel de data.

---

### TC-B2C123-D-013 - Verificar que seleccionar una tienda de retiro sin cobertura de despacho muestra el modal Aún no llegamos [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 19.4 s |
| Spec | tests/B2C-123.spec.ts:275 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, Unimarc Los Lagos II

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega".
5. El usuario selecciona la pestaña "Retiro en tienda".
6. El usuario selecciona la tienda Unimarc Los Lagos II.
7. El sistema verifica cobertura de despacho y detecta que la tienda no está dentro de la zona.

**Resultado esperado**

Se muestra el modal "Aún no llegamos a esta dirección" con el mensaje "Revisa que esté correcta, prueba con otra dentro de nuestra zona de cobertura o cambia tu método de entrega a una de nuestras tiendas Unimarc" y las opciones "Continuar con esta dirección" y "Cambiar método de entrega".

**Resultado obtenido**

Esperado: mensaje 'Revisa que esté correcta, prueba con otra dentro de nuestra zona de cobertura o cambia tu método de entrega a una de nuestras tiendas Unimarc'. Obtenido: '…a una de nuestras tienda Unimarc' (falta la s). Con la tienda 'Unimarc Los Lagos II' el modal y sus opciones sí se muestran.

**Observación**

Esperado: mensaje 'Revisa que esté correcta, prueba con otra dentro de nuestra zona de cobertura o cambia tu método de entrega a una de nuestras tiendas Unimarc'. Obtenido: '…a una de nuestras tienda Unimarc' (falta la s). Con la tienda 'Unimarc Los Lagos II' el modal y sus opciones sí se muestran. tests/B2C-123.spec.ts:275. Bug: B2C-1185 (comentado en la re-ejecución del 2026-10-14).

**Evidencia**

![Paso 2 — home cargado](<B2C-123 Evidencias/TC-B2C123-D-013-p02-home-cargado.png>)

![Paso 4 — modal elige tu metodo de entrega](<B2C-123 Evidencias/TC-B2C123-D-013-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — tienda unimarc los lagos ii seleccionada](<B2C-123 Evidencias/TC-B2C123-D-013-p06-tienda-unimarc-los-lagos-ii-seleccionada.png>)

![Paso 7 — modal aun no llegamos a esta direccion](<B2C-123 Evidencias/TC-B2C123-D-013-p07-modal-aun-no-llegamos-a-esta-direccion.png>)

![Estado al fallar la aserción](<B2C-123 Evidencias/TC-B2C123-D-013.png>)

---

### TC-B2C123-M-001 - Verificar que una dirección nueva fuera de zona muestra el modal Aún no llegamos con sus opciones [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 57.7 s |
| Spec | tests/B2C-123.spec.ts:152 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, T-551, Futrono

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección T-551, Futrono, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Aún no llegamos a esta dirección".

**Resultado esperado**

Se muestra el modal "Aún no llegamos a esta dirección" con el mensaje "Revisa que esté correcta, prueba con otra dentro de nuestra zona de cobertura o cambia tu método de entrega a una de nuestras tiendas Unimarc" y las opciones "Continuar con esta dirección" y "Cambiar método de entrega".

**Resultado obtenido**

Esperado: mensaje 'Revisa que esté correcta, prueba con otra dentro de nuestra zona de cobertura o cambia tu método de entrega a una de nuestras tiendas Unimarc'. Obtenido: '…a una de nuestras tienda Unimarc' (falta la s). Con 'T-551, Futrono' el modal y sus opciones sí se muestran.

**Observación**

Esperado: mensaje 'Revisa que esté correcta, prueba con otra dentro de nuestra zona de cobertura o cambia tu método de entrega a una de nuestras tiendas Unimarc'. Obtenido: '…a una de nuestras tienda Unimarc' (falta la s). Con 'T-551, Futrono' el modal y sus opciones sí se muestran. tests/B2C-123.spec.ts:152. Bug: B2C-1185 (comentado en la re-ejecución del 2026-10-14).

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-123 Evidencias/TC-B2C123-M-001-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 5 — sugerencia para t 551 futrono](<B2C-123 Evidencias/TC-B2C123-M-001-p05-sugerencia-para-t-551-futrono.png>)

![Paso 6 — modal aun no llegamos a esta direccion](<B2C-123 Evidencias/TC-B2C123-M-001-p06-modal-aun-no-llegamos-a-esta-direccion.png>)

![Estado al fallar la aserción](<B2C-123 Evidencias/TC-B2C123-M-001.png>)

---

### TC-B2C123-M-002 - Verificar que una dirección guardada sin cobertura muestra el modal tras validar OTP [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 242.9 s |
| Spec | tests/B2C-123.spec.ts:309 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta tiene guardada la dirección T-551, Futrono
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, T-551, Futrono, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El usuario selecciona la dirección guardada T-551, Futrono.
5. El usuario completa la validación OTP con el código recibido.

**Resultado esperado**

Se muestra el modal "Aún no llegamos a esta dirección" con sus opciones "Continuar con esta dirección" y "Cambiar método de entrega".

**Resultado obtenido**

Con sesión de vhchirinos+comprador y 'Casa' activa, al elegir la guardada 'T-551, Futrono' se muestra 'Aún no llegamos a esta dirección' con 'Continuar con esta dirección' y 'Cambiar método de entrega'. El modal aparece antes del OTP (el OTP se pide al continuar), no después como dicen los pasos. La dirección guardada se agregó a la cuenta como precondición el 2026-10-14.

**Observación**

Con sesión de vhchirinos+comprador y 'Casa' activa, al elegir la guardada 'T-551, Futrono' se muestra 'Aún no llegamos a esta dirección' con 'Continuar con esta dirección' y 'Cambiar método de entrega'. El modal aparece antes del OTP (el OTP se pide al continuar), no después como dicen los pasos. La dirección guardada se agregó a la cuenta como precondición el 2026-10-14.

**Evidencia**

![Paso 2 — home con sesion y la direccion casa](<B2C-123 Evidencias/TC-B2C123-M-002-p02-home-con-sesion-y-la-direccion-casa.png>)

![Paso 3 — direcciones guardadas](<B2C-123 Evidencias/TC-B2C123-M-002-p03-direcciones-guardadas.png>)

![Paso 5 — modal aun no llegamos a esta direccion](<B2C-123 Evidencias/TC-B2C123-M-002-p05-modal-aun-no-llegamos-a-esta-direccion.png>)

![Estado final del caso](<B2C-123 Evidencias/TC-B2C123-M-002.png>)

---

### TC-B2C123-M-003 - Verificar que continuar sin carro setea la dirección con la etiqueta Despacho sin cobertura [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 71.2 s |
| Spec | tests/B2C-123.spec.ts:168 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro está vacío

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, T-551, Futrono, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección T-551, Futrono, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Aún no llegamos a esta dirección".
7. El usuario toca "Continuar con esta dirección".
8. El sistema muestra un loader.
9. El usuario navega a otra página del sitio.

**Resultado esperado**

La dirección T-551, Futrono queda seteada y el Store Locator muestra "Despacho sin cobertura" debajo, también al navegar a otras páginas.

**Resultado obtenido**

Con 'T-551, Futrono': tras 'Continuar con esta dirección' hay loader, el Store Locator muestra 'T-551' con 'Despacho sin cobertura' y se mantiene al navegar a la PLP.

**Observación**

Con 'T-551, Futrono': tras 'Continuar con esta dirección' hay loader, el Store Locator muestra 'T-551' con 'Despacho sin cobertura' y se mantiene al navegar a la PLP.

**Evidencia**

![Paso 5 — sugerencia para t 551 futrono](<B2C-123 Evidencias/TC-B2C123-M-003-p05-sugerencia-para-t-551-futrono.png>)

![Paso 6 — modal aun no llegamos a esta direccion](<B2C-123 Evidencias/TC-B2C123-M-003-p06-modal-aun-no-llegamos-a-esta-direccion.png>)

![Paso 8 — direccion seteada con despacho sin cobertura](<B2C-123 Evidencias/TC-B2C123-M-003-p08-direccion-seteada-con-despacho-sin-cobertura.png>)

![Paso 9 — plp con despacho sin cobertura](<B2C-123 Evidencias/TC-B2C123-M-003-p09-plp-con-despacho-sin-cobertura.png>)

![Estado final del caso](<B2C-123 Evidencias/TC-B2C123-M-003.png>)

---

### TC-B2C123-M-004 - Verificar que continuar con carro y otra tienda abastecedora muestra el modal No se te escapen [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 132.8 s |
| Spec | tests/B2C-123.spec.ts:226 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- La dirección activa es Calle Uno 23, La Florida
- El carro contiene 000000000000675191-UN
- La tienda por defecto de T-551, Futrono es distinta a la de Calle Uno 23, La Florida

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, T-551, Futrono, 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección T-551, Futrono, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Aún no llegamos a esta dirección".
7. El usuario toca "Continuar con esta dirección".
8. El sistema muestra un loader y verifica la disponibilidad de productos.

**Resultado esperado**

Se muestra el modal "Algunos productos podrían agotarse" (B2C-126).

**Resultado obtenido**

Con 'Calle Uno 23, La Florida' activa y el carro con 000000000000675191-UN, al confirmar 'T-551, Futrono' y continuar aparece 'Algunos productos podrían agotarse' (B2C-126).

**Observación**

Con 'Calle Uno 23, La Florida' activa y el carro con 000000000000675191-UN, al confirmar 'T-551, Futrono' y continuar aparece 'Algunos productos podrían agotarse' (B2C-126).

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-123 Evidencias/TC-B2C123-M-004-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 5 — sugerencia para t 551 futrono](<B2C-123 Evidencias/TC-B2C123-M-004-p05-sugerencia-para-t-551-futrono.png>)

![Paso 6 — modal aun no llegamos a esta direccion](<B2C-123 Evidencias/TC-B2C123-M-004-p06-modal-aun-no-llegamos-a-esta-direccion.png>)

![TC B2C123 M 004 ppre carro con el sku y direccion activa](<B2C-123 Evidencias/TC-B2C123-M-004-ppre-carro-con-el-sku-y-direccion-activa.png>)

![Estado final del caso](<B2C-123 Evidencias/TC-B2C123-M-004.png>)

---

### TC-B2C123-M-005 - Verificar que Cambiar método de entrega vuelve al modal Elige tu método de entrega [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 48.6 s |
| Spec | tests/B2C-123.spec.ts:193 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, T-551, Futrono

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección T-551, Futrono, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Aún no llegamos a esta dirección".
7. El usuario toca "Cambiar método de entrega".

**Resultado esperado**

El modal "Aún no llegamos a esta dirección" se cierra y se muestra el modal "Elige tu método de entrega".

**Resultado obtenido**

'Cambiar método de entrega' cierra 'Aún no llegamos a esta dirección' y vuelve 'Elige tu método de entrega'.

**Observación**

'Cambiar método de entrega' cierra 'Aún no llegamos a esta dirección' y vuelve 'Elige tu método de entrega'.

**Evidencia**

![Paso 5 — sugerencia para t 551 futrono](<B2C-123 Evidencias/TC-B2C123-M-005-p05-sugerencia-para-t-551-futrono.png>)

![Paso 6 — modal aun no llegamos a esta direccion](<B2C-123 Evidencias/TC-B2C123-M-005-p06-modal-aun-no-llegamos-a-esta-direccion.png>)

![Estado final del caso](<B2C-123 Evidencias/TC-B2C123-M-005.png>)

---

### TC-B2C123-M-006 - Verificar que una nueva dirección con cobertura se setea y vuelve a la página de origen [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 19.3 s |
| Spec | tests/B2C-123.spec.ts:251 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: PLP

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, T-551, Futrono, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.
2. El usuario toca el Store Locator del header.
3. El usuario ingresa T-551, Futrono y la confirma.
4. El sistema muestra el modal "Aún no llegamos a esta dirección".
5. El usuario toca "Cambiar método de entrega".
6. El usuario ingresa Calle Uno 23, La Florida y la confirma.

**Resultado esperado**

El modal se cierra, el Store Locator muestra Calle Uno 23, La Florida y el usuario vuelve a la PLP.

**Resultado obtenido**

Desde la PLP: sin cobertura → 'Cambiar método de entrega' → 'Calle Uno 23, La Florida'. El modal se cierra, el Store Locator muestra 'Calle Uno 23' sin etiqueta y sigue en la misma PLP.

**Observación**

Desde la PLP: sin cobertura → 'Cambiar método de entrega' → 'Calle Uno 23, La Florida'. El modal se cierra, el Store Locator muestra 'Calle Uno 23' sin etiqueta y sigue en la misma PLP.

**Evidencia**

![Paso 3 — sugerencia para t 551 futrono](<B2C-123 Evidencias/TC-B2C123-M-006-p03-sugerencia-para-t-551-futrono.png>)

![Paso 4 — modal aun no llegamos a esta direccion](<B2C-123 Evidencias/TC-B2C123-M-006-p04-modal-aun-no-llegamos-a-esta-direccion.png>)

![Paso 5 — de vuelta en elige tu metodo de entrega](<B2C-123 Evidencias/TC-B2C123-M-006-p05-de-vuelta-en-elige-tu-metodo-de-entrega.png>)

![Paso 6 — plp con la nueva direccion](<B2C-123 Evidencias/TC-B2C123-M-006-p06-plp-con-la-nueva-direccion.png>)

![Estado final del caso](<B2C-123 Evidencias/TC-B2C123-M-006.png>)

---

### TC-B2C123-M-007 - Verificar que con dirección sin cobertura agregar un producto se bloquea con un toast [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 78.8 s |
| Spec | tests/B2C-123.spec.ts:204 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- La dirección T-551, Futrono está activa con la etiqueta "Despacho sin cobertura"

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, T-551, Futrono, 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El sistema carga el Home con la etiqueta "Despacho sin cobertura".
3. El usuario ingresa a la PDP de 000000000000675191-UN y lo agrega al carro.

**Resultado esperado**

Se muestra el toast de error "No tenemos cobertura para la dirección actual, seleccione otra dirección" con X de cierre manual y 000000000000675191-UN no se agrega al carro.

**Resultado obtenido**

Esperado: toast 'No tenemos cobertura para la dirección actual, seleccione otra dirección' con X. Obtenido: 'Cambia tu dirección de despacho para poder comprar.'. La X y el bloqueo sí se cumplen (el SKU no se agrega).

**Observación**

Esperado: toast 'No tenemos cobertura para la dirección actual, seleccione otra dirección' con X. Obtenido: 'Cambia tu dirección de despacho para poder comprar.'. La X y el bloqueo sí se cumplen (el SKU no se agrega). tests/B2C-123.spec.ts:204. Bug: B2C-1186 (comentado en la re-ejecución del 2026-10-14).

**Evidencia**

![Paso 2 — home con despacho sin cobertura](<B2C-123 Evidencias/TC-B2C123-M-007-p02-home-con-despacho-sin-cobertura.png>)

![Paso 3 — toast tras agregar](<B2C-123 Evidencias/TC-B2C123-M-007-p03-toast-tras-agregar.png>)

![TC B2C123 M 007 ppre sugerencia para t 551 futrono](<B2C-123 Evidencias/TC-B2C123-M-007-ppre-sugerencia-para-t-551-futrono.png>)

![Estado al fallar la aserción](<B2C-123 Evidencias/TC-B2C123-M-007.png>)

---

### TC-B2C123-M-008 - Verificar que con dirección sin cobertura los productos del carro quedan no disponibles [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contenía 000000000000675191-UN antes de continuar con la dirección sin cobertura
- La dirección T-551, Futrono está activa con la etiqueta "Despacho sin cobertura"

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, T-551, Futrono, 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.

**Resultado esperado**

000000000000675191-UN se muestra marcado como no disponible en el carro.

**Observación**

Causa: la precondición pide el carro con {SKU_VALID_001} antes de aplicar la dirección sin cobertura, y un invitado sin dirección no puede agregar (re-verificado 2026-10-14: 'Agregar' abre 'Elige tu método de entrega'). Acción: declarar en la fila la dirección con cobertura con la que se arma el carro.

---

### TC-B2C123-M-009 - Verificar que continuar con la dirección sin cobertura desde Mis envíos lleva al Home [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 158.1 s |
| Spec | tests/B2C-123.spec.ts:334 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN
- Método de entrega activo con cobertura
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, T-551, Futrono, 000000000000675191-UN, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca la tarjeta de dirección e ingresa T-551, Futrono.
6. El usuario completa la validación OTP.
7. El sistema muestra el modal "Aún no llegamos a esta dirección".
8. El usuario toca "Continuar con esta dirección".

**Resultado esperado**

El usuario es redirigido al Home con T-551, Futrono seteada y la etiqueta de sin cobertura.

**Resultado obtenido**

Desde Mis Envíos (ícono ▾ de la tarjeta), con 'T-551, Futrono': 'Aún no llegamos' → 'Continuar con esta dirección' → 'Sí, continuar' → OTP; redirige al Home con 'T-551' y 'Despacho sin cobertura'.

**Observación**

Desde Mis Envíos (ícono ▾ de la tarjeta), con 'T-551, Futrono': 'Aún no llegamos' → 'Continuar con esta dirección' → 'Sí, continuar' → OTP; redirige al Home con 'T-551' y 'Despacho sin cobertura'.

**Evidencia**

![Paso 2 — carro cargado](<B2C-123 Evidencias/TC-B2C123-M-009-p02-carro-cargado.png>)

![Paso 4 — mis envios](<B2C-123 Evidencias/TC-B2C123-M-009-p04-mis-envios.png>)

![Paso 7 — modal aun no llegamos a esta direccion](<B2C-123 Evidencias/TC-B2C123-M-009-p07-modal-aun-no-llegamos-a-esta-direccion.png>)

![Paso 8 — home con la direccion sin cobertura](<B2C-123 Evidencias/TC-B2C123-M-009-p08-home-con-la-direccion-sin-cobertura.png>)

![Estado final del caso](<B2C-123 Evidencias/TC-B2C123-M-009.png>)

---

### TC-B2C123-M-010 - Verificar que al iniciar sesión una dirección que recuperó cobertura pierde la etiqueta [Mobile] [Logueado]

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
- Sesión iniciada con la cuenta vhchirinos+nocobertura@avatar-global.com
- La última dirección activa del perfil fue marcada sin cobertura en una sesión anterior
- La zona de esa dirección ya tiene cobertura en Janis

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_DIRECCION_SIN_COBERTURA_PASSWORD}, vhchirinos+nocobertura@avatar-global.com, 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El sistema re-verifica la cobertura de la dirección guardada.
3. El usuario ingresa a la PDP de 000000000000675191-UN y lo agrega al carro.

**Resultado esperado**

El Store Locator muestra la dirección sin "Despacho sin cobertura" y 000000000000675191-UN se agrega al carro con normalidad.

**Observación**

Causa: {COMPRADOR_DIRECCION_SIN_COBERTURA_USER} (vhchirinos+nocobertura@avatar-global.com) no es una cuenta registrada en DEV: al pedir el código de acceso el sitio abre 'Crear cuenta'. Acción: registrar la cuenta y dejar su última dirección activa en el estado que pide el TC, o declarar una cuenta existente. Además, la dirección debe haber estado sin cobertura y hoy tenerla en Janis.

---

### TC-B2C123-M-011 - Verificar que al iniciar sesión una dirección que sigue sin cobertura mantiene la etiqueta [Mobile] [Logueado]

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
- Sesión iniciada con la cuenta vhchirinos+nocobertura@avatar-global.com
- La última dirección activa del perfil está sin cobertura y Janis sigue sin cobertura para esas coordenadas

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_DIRECCION_SIN_COBERTURA_PASSWORD}, vhchirinos+nocobertura@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El sistema re-verifica la cobertura de la dirección guardada.

**Resultado esperado**

El Store Locator mantiene la dirección con la etiqueta "Despacho sin cobertura".

**Observación**

Causa: {COMPRADOR_DIRECCION_SIN_COBERTURA_USER} (vhchirinos+nocobertura@avatar-global.com) no es una cuenta registrada en DEV: al pedir el código de acceso el sitio abre 'Crear cuenta'. Acción: registrar la cuenta y dejar su última dirección activa en el estado que pide el TC, o declarar una cuenta existente. (En la ejecución anterior se aprobó con otra cuenta, vhchirinos+comprador, que era el valor previo del token.)

---

### TC-B2C123-M-012 - Verificar que si la re-verificación falla se mantiene el último estado sin cobertura [Mobile] [Logueado]

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
- Sesión iniciada con la cuenta vhchirinos+nocobertura@avatar-global.com
- La última dirección activa del perfil está sin cobertura
- DevTools abierto con bloqueo de la request {JANIS_API_ENDPOINT} (Network request blocking)

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_DIRECCION_SIN_COBERTURA_PASSWORD}, vhchirinos+nocobertura@avatar-global.com, {JANIS_API_ENDPOINT}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El sistema intenta re-verificar la cobertura y la llamada falla.

**Resultado esperado**

El Store Locator mantiene la etiqueta "Despacho sin cobertura" sin cambios.

**Observación**

Causa: {COMPRADOR_DIRECCION_SIN_COBERTURA_USER} (vhchirinos+nocobertura@avatar-global.com) no es una cuenta registrada en DEV: al pedir el código de acceso el sitio abre 'Crear cuenta'. Acción: registrar la cuenta y dejar su última dirección activa en el estado que pide el TC, o declarar una cuenta existente. Además, {JANIS_API_ENDPOINT} está en TBD en el Excel de data.

---

### TC-B2C123-M-013 - Verificar que seleccionar una tienda de retiro sin cobertura de despacho muestra el modal Aún no llegamos [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 64.1 s |
| Spec | tests/B2C-123.spec.ts:275 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, Unimarc Los Lagos II

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega".
5. El usuario selecciona la pestaña "Retiro en tienda".
6. El usuario selecciona la tienda Unimarc Los Lagos II.
7. El sistema verifica cobertura de despacho y detecta que la tienda no está dentro de la zona.

**Resultado esperado**

Se muestra el modal "Aún no llegamos a esta dirección" con el mensaje "Revisa que esté correcta, prueba con otra dentro de nuestra zona de cobertura o cambia tu método de entrega a una de nuestras tiendas Unimarc" y las opciones "Continuar con esta dirección" y "Cambiar método de entrega".

**Resultado obtenido**

Esperado: mensaje 'Revisa que esté correcta, prueba con otra dentro de nuestra zona de cobertura o cambia tu método de entrega a una de nuestras tiendas Unimarc'. Obtenido: '…a una de nuestras tienda Unimarc' (falta la s). Con la tienda 'Unimarc Los Lagos II' el modal y sus opciones sí se muestran.

**Observación**

Esperado: mensaje 'Revisa que esté correcta, prueba con otra dentro de nuestra zona de cobertura o cambia tu método de entrega a una de nuestras tiendas Unimarc'. Obtenido: '…a una de nuestras tienda Unimarc' (falta la s). Con la tienda 'Unimarc Los Lagos II' el modal y sus opciones sí se muestran. tests/B2C-123.spec.ts:275. Bug: B2C-1185 (comentado en la re-ejecución del 2026-10-14).

**Evidencia**

![Paso 2 — home cargado](<B2C-123 Evidencias/TC-B2C123-M-013-p02-home-cargado.png>)

![Paso 4 — modal elige tu metodo de entrega](<B2C-123 Evidencias/TC-B2C123-M-013-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — tienda unimarc los lagos ii seleccionada](<B2C-123 Evidencias/TC-B2C123-M-013-p06-tienda-unimarc-los-lagos-ii-seleccionada.png>)

![Paso 7 — modal aun no llegamos a esta direccion](<B2C-123 Evidencias/TC-B2C123-M-013-p07-modal-aun-no-llegamos-a-esta-direccion.png>)

![Estado al fallar la aserción](<B2C-123 Evidencias/TC-B2C123-M-013.png>)

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
  "suite": "B2C-123",
  "tc_file": "Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-123 WEB Test Cases.xlsx",
  "title": "B2C-123 - Sin cobertura de despacho - Evidencias QA",
  "updated_at": "2026-10-14"
 },
 "history": {
  "2026-10-14": [
   "TC-B2C123-D-001",
   "TC-B2C123-D-002",
   "TC-B2C123-D-003",
   "TC-B2C123-D-004",
   "TC-B2C123-D-005",
   "TC-B2C123-D-006",
   "TC-B2C123-D-007",
   "TC-B2C123-D-008",
   "TC-B2C123-D-009",
   "TC-B2C123-D-010",
   "TC-B2C123-D-011",
   "TC-B2C123-D-012",
   "TC-B2C123-D-013",
   "TC-B2C123-M-001",
   "TC-B2C123-M-002",
   "TC-B2C123-M-003",
   "TC-B2C123-M-004",
   "TC-B2C123-M-005",
   "TC-B2C123-M-006",
   "TC-B2C123-M-007",
   "TC-B2C123-M-008",
   "TC-B2C123-M-009",
   "TC-B2C123-M-010",
   "TC-B2C123-M-011",
   "TC-B2C123-M-012",
   "TC-B2C123-M-013"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "duration_s": 16.1,
   "executed_at": "2026-10-14",
   "expected": "Se muestra el modal \"Aún no llegamos a esta dirección\" con el mensaje \"Revisa que esté correcta, prueba con otra dentro de nuestra zona de cobertura o cambia tu método de entrega a una de nuestras tiendas Unimarc\" y las opciones \"Continuar con esta dirección\" y \"Cambiar método de entrega\".",
   "form_factor": "desktop",
   "id": "TC-B2C123-D-001",
   "name": "Verificar que una dirección nueva fuera de zona muestra el modal Aún no llegamos con sus opciones [Desktop] [Guest]",
   "observation": "Esperado: mensaje 'Revisa que esté correcta, prueba con otra dentro de nuestra zona de cobertura o cambia tu método de entrega a una de nuestras tiendas Unimarc'. Obtenido: '…a una de nuestras tienda Unimarc' (falta la s). Con 'T-551, Futrono' el modal y sus opciones sí se muestran. tests/B2C-123.spec.ts:152. Bug: B2C-1185 (comentado en la re-ejecución del 2026-10-14).",
   "observed": "Esperado: mensaje 'Revisa que esté correcta, prueba con otra dentro de nuestra zona de cobertura o cambia tu método de entrega a una de nuestras tiendas Unimarc'. Obtenido: '…a una de nuestras tienda Unimarc' (falta la s). Con 'T-551, Futrono' el modal y sus opciones sí se muestran.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C123-D-001-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 5 — sugerencia para t 551 futrono",
     "file": "TC-B2C123-D-001-p05-sugerencia-para-t-551-futrono.png"
    },
    {
     "caption": "Paso 6 — modal aun no llegamos a esta direccion",
     "file": "TC-B2C123-D-001-p06-modal-aun-no-llegamos-a-esta-direccion.png"
    },
    {
     "caption": "Estado al fallar la aserción",
     "file": "TC-B2C123-D-001.png"
    }
   ],
   "spec": "tests/B2C-123.spec.ts:152",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección T-551, Futrono, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El sistema muestra el modal \"Aún no llegamos a esta dirección\".",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, T-551, Futrono",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 67.2,
   "executed_at": "2026-10-14",
   "expected": "Se muestra el modal \"Aún no llegamos a esta dirección\" con sus opciones \"Continuar con esta dirección\" y \"Cambiar método de entrega\".",
   "form_factor": "desktop",
   "id": "TC-B2C123-D-002",
   "name": "Verificar que una dirección guardada sin cobertura muestra el modal tras validar OTP [Desktop] [Logueado]",
   "observation": "Con sesión de vhchirinos+comprador y 'Casa' activa, al elegir la guardada 'T-551, Futrono' se muestra 'Aún no llegamos a esta dirección' con 'Continuar con esta dirección' y 'Cambiar método de entrega'. El modal aparece antes del OTP (el OTP se pide al continuar), no después como dicen los pasos. La dirección guardada se agregó a la cuenta como precondición el 2026-10-14.",
   "observed": "Con sesión de vhchirinos+comprador y 'Casa' activa, al elegir la guardada 'T-551, Futrono' se muestra 'Aún no llegamos a esta dirección' con 'Continuar con esta dirección' y 'Cambiar método de entrega'. El modal aparece antes del OTP (el OTP se pide al continuar), no después como dicen los pasos. La dirección guardada se agregó a la cuenta como precondición el 2026-10-14.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta tiene guardada la dirección T-551, Futrono\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Paso 2 — home con sesion y la direccion casa",
     "file": "TC-B2C123-D-002-p02-home-con-sesion-y-la-direccion-casa.png"
    },
    {
     "caption": "Paso 3 — direcciones guardadas",
     "file": "TC-B2C123-D-002-p03-direcciones-guardadas.png"
    },
    {
     "caption": "Paso 5 — modal aun no llegamos a esta direccion",
     "file": "TC-B2C123-D-002-p05-modal-aun-no-llegamos-a-esta-direccion.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C123-D-002.png"
    }
   ],
   "spec": "tests/B2C-123.spec.ts:309",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El usuario selecciona la dirección guardada T-551, Futrono.\n5. El usuario completa la validación OTP con el código recibido.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, T-551, Futrono, vhchirinos+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 18.7,
   "executed_at": "2026-10-14",
   "expected": "La dirección T-551, Futrono queda seteada y el Store Locator muestra \"Despacho sin cobertura\" debajo, también al navegar a otras páginas.",
   "form_factor": "desktop",
   "id": "TC-B2C123-D-003",
   "name": "Verificar que continuar sin carro setea la dirección con la etiqueta Despacho sin cobertura [Desktop] [Guest]",
   "observation": "Con 'T-551, Futrono': tras 'Continuar con esta dirección' hay loader, el Store Locator muestra 'T-551' con 'Despacho sin cobertura' y se mantiene al navegar a la PLP.",
   "observed": "Con 'T-551, Futrono': tras 'Continuar con esta dirección' hay loader, el Store Locator muestra 'T-551' con 'Despacho sin cobertura' y se mantiene al navegar a la PLP.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro está vacío",
   "screenshots": [
    {
     "caption": "Paso 5 — sugerencia para t 551 futrono",
     "file": "TC-B2C123-D-003-p05-sugerencia-para-t-551-futrono.png"
    },
    {
     "caption": "Paso 6 — modal aun no llegamos a esta direccion",
     "file": "TC-B2C123-D-003-p06-modal-aun-no-llegamos-a-esta-direccion.png"
    },
    {
     "caption": "Paso 8 — direccion seteada con despacho sin cobertura",
     "file": "TC-B2C123-D-003-p08-direccion-seteada-con-despacho-sin-cobertura.png"
    },
    {
     "caption": "Paso 9 — plp con despacho sin cobertura",
     "file": "TC-B2C123-D-003-p09-plp-con-despacho-sin-cobertura.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C123-D-003.png"
    }
   ],
   "spec": "tests/B2C-123.spec.ts:168",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección T-551, Futrono, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El sistema muestra el modal \"Aún no llegamos a esta dirección\".\n7. El usuario hace clic en \"Continuar con esta dirección\".\n8. El sistema muestra un loader.\n9. El usuario navega a otra página del sitio.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, T-551, Futrono, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 43.0,
   "executed_at": "2026-10-14",
   "expected": "Se muestra el modal \"Algunos productos podrían agotarse\" (B2C-126).",
   "form_factor": "desktop",
   "id": "TC-B2C123-D-004",
   "name": "Verificar que continuar con carro y otra tienda abastecedora muestra el modal No se te escapen [Desktop] [Guest]",
   "observation": "Con 'Calle Uno 23, La Florida' activa y el carro con 000000000000675191-UN, al confirmar 'T-551, Futrono' y continuar aparece 'Algunos productos podrían agotarse' (B2C-126).",
   "observed": "Con 'Calle Uno 23, La Florida' activa y el carro con 000000000000675191-UN, al confirmar 'T-551, Futrono' y continuar aparece 'Algunos productos podrían agotarse' (B2C-126).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- La dirección activa es Calle Uno 23, La Florida\n- El carro contiene 000000000000675191-UN\n- La tienda por defecto de T-551, Futrono es distinta a la de Calle Uno 23, La Florida",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C123-D-004-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 5 — sugerencia para t 551 futrono",
     "file": "TC-B2C123-D-004-p05-sugerencia-para-t-551-futrono.png"
    },
    {
     "caption": "Paso 6 — modal aun no llegamos a esta direccion",
     "file": "TC-B2C123-D-004-p06-modal-aun-no-llegamos-a-esta-direccion.png"
    },
    {
     "caption": "TC B2C123 D 004 ppre carro con el sku y direccion activa",
     "file": "TC-B2C123-D-004-ppre-carro-con-el-sku-y-direccion-activa.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C123-D-004.png"
    }
   ],
   "spec": "tests/B2C-123.spec.ts:226",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección T-551, Futrono, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El sistema muestra el modal \"Aún no llegamos a esta dirección\".\n7. El usuario hace clic en \"Continuar con esta dirección\".\n8. El sistema muestra un loader y verifica la disponibilidad de productos.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, T-551, Futrono, 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 11.0,
   "executed_at": "2026-10-14",
   "expected": "El modal \"Aún no llegamos a esta dirección\" se cierra y se muestra el modal \"Elige tu método de entrega\".",
   "form_factor": "desktop",
   "id": "TC-B2C123-D-005",
   "name": "Verificar que Cambiar método de entrega vuelve al modal Elige tu método de entrega [Desktop] [Guest]",
   "observation": "'Cambiar método de entrega' cierra 'Aún no llegamos a esta dirección' y vuelve 'Elige tu método de entrega'.",
   "observed": "'Cambiar método de entrega' cierra 'Aún no llegamos a esta dirección' y vuelve 'Elige tu método de entrega'.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito",
   "screenshots": [
    {
     "caption": "Paso 5 — sugerencia para t 551 futrono",
     "file": "TC-B2C123-D-005-p05-sugerencia-para-t-551-futrono.png"
    },
    {
     "caption": "Paso 6 — modal aun no llegamos a esta direccion",
     "file": "TC-B2C123-D-005-p06-modal-aun-no-llegamos-a-esta-direccion.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C123-D-005.png"
    }
   ],
   "spec": "tests/B2C-123.spec.ts:193",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección T-551, Futrono, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El sistema muestra el modal \"Aún no llegamos a esta dirección\".\n7. El usuario hace clic en \"Cambiar método de entrega\".",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, T-551, Futrono",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 15.1,
   "executed_at": "2026-10-14",
   "expected": "El modal se cierra, el Store Locator muestra Calle Uno 23, La Florida y el usuario vuelve a la PLP.",
   "form_factor": "desktop",
   "id": "TC-B2C123-D-006",
   "name": "Verificar que una nueva dirección con cobertura se setea y vuelve a la página de origen [Desktop] [Guest]",
   "observation": "Desde la PLP: sin cobertura → 'Cambiar método de entrega' → 'Calle Uno 23, La Florida'. El modal se cierra, el Store Locator muestra 'Calle Uno 23' sin etiqueta y sigue en la misma PLP.",
   "observed": "Desde la PLP: sin cobertura → 'Cambiar método de entrega' → 'Calle Uno 23, La Florida'. El modal se cierra, el Store Locator muestra 'Calle Uno 23' sin etiqueta y sigue en la misma PLP.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: PLP",
   "screenshots": [
    {
     "caption": "Paso 3 — sugerencia para t 551 futrono",
     "file": "TC-B2C123-D-006-p03-sugerencia-para-t-551-futrono.png"
    },
    {
     "caption": "Paso 4 — modal aun no llegamos a esta direccion",
     "file": "TC-B2C123-D-006-p04-modal-aun-no-llegamos-a-esta-direccion.png"
    },
    {
     "caption": "Paso 5 — de vuelta en elige tu metodo de entrega",
     "file": "TC-B2C123-D-006-p05-de-vuelta-en-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — plp con la nueva direccion",
     "file": "TC-B2C123-D-006-p06-plp-con-la-nueva-direccion.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C123-D-006.png"
    }
   ],
   "spec": "tests/B2C-123.spec.ts:251",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.\n2. El usuario hace clic en el Store Locator del header.\n3. El usuario ingresa T-551, Futrono y la confirma.\n4. El sistema muestra el modal \"Aún no llegamos a esta dirección\".\n5. El usuario hace clic en \"Cambiar método de entrega\".\n6. El usuario ingresa Calle Uno 23, La Florida y la confirma.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, T-551, Futrono, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 40.4,
   "executed_at": "2026-10-14",
   "expected": "Se muestra el toast de error \"No tenemos cobertura para la dirección actual, seleccione otra dirección\" con X de cierre manual y 000000000000675191-UN no se agrega al carro.",
   "form_factor": "desktop",
   "id": "TC-B2C123-D-007",
   "name": "Verificar que con dirección sin cobertura agregar un producto se bloquea con un toast [Desktop] [Guest]",
   "observation": "Esperado: toast 'No tenemos cobertura para la dirección actual, seleccione otra dirección' con X. Obtenido: 'Cambia tu dirección de despacho para poder comprar.'. La X y el bloqueo sí se cumplen (el SKU no se agrega). tests/B2C-123.spec.ts:204. Bug: B2C-1186 (comentado en la re-ejecución del 2026-10-14).",
   "observed": "Esperado: toast 'No tenemos cobertura para la dirección actual, seleccione otra dirección' con X. Obtenido: 'Cambia tu dirección de despacho para poder comprar.'. La X y el bloqueo sí se cumplen (el SKU no se agrega).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- La dirección T-551, Futrono está activa con la etiqueta \"Despacho sin cobertura\"",
   "screenshots": [
    {
     "caption": "Paso 2 — home con despacho sin cobertura",
     "file": "TC-B2C123-D-007-p02-home-con-despacho-sin-cobertura.png"
    },
    {
     "caption": "Paso 3 — toast tras agregar",
     "file": "TC-B2C123-D-007-p03-toast-tras-agregar.png"
    },
    {
     "caption": "TC B2C123 D 007 ppre sugerencia para t 551 futrono",
     "file": "TC-B2C123-D-007-ppre-sugerencia-para-t-551-futrono.png"
    },
    {
     "caption": "Estado al fallar la aserción",
     "file": "TC-B2C123-D-007.png"
    }
   ],
   "spec": "tests/B2C-123.spec.ts:204",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El sistema carga el Home con la etiqueta \"Despacho sin cobertura\".\n3. El usuario ingresa a la PDP de 000000000000675191-UN y lo agrega al carro.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, T-551, Futrono, 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "000000000000675191-UN se muestra marcado como no disponible en el carro.",
   "form_factor": "desktop",
   "id": "TC-B2C123-D-008",
   "name": "Verificar que con dirección sin cobertura los productos del carro quedan no disponibles [Desktop] [Guest]",
   "observation": "Causa: la precondición pide el carro con {SKU_VALID_001} antes de aplicar la dirección sin cobertura, y un invitado sin dirección no puede agregar (re-verificado 2026-10-14: 'Agregar' abre 'Elige tu método de entrega'). Acción: declarar en la fila la dirección con cobertura con la que se arma el carro.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contenía 000000000000675191-UN antes de continuar con la dirección sin cobertura\n- La dirección T-551, Futrono está activa con la etiqueta \"Despacho sin cobertura\"",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, T-551, Futrono, 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 85.6,
   "executed_at": "2026-10-14",
   "expected": "El usuario es redirigido al Home con T-551, Futrono seteada y la etiqueta de sin cobertura.",
   "form_factor": "desktop",
   "id": "TC-B2C123-D-009",
   "name": "Verificar que continuar con la dirección sin cobertura desde Mis envíos lleva al Home [Desktop] [Logueado]",
   "observation": "Desde Mis Envíos (ícono ▾ de la tarjeta), con 'T-551, Futrono': 'Aún no llegamos' → 'Continuar con esta dirección' → 'Sí, continuar' → OTP; redirige al Home con 'T-551' y 'Despacho sin cobertura'.",
   "observed": "Desde Mis Envíos (ícono ▾ de la tarjeta), con 'T-551, Futrono': 'Aún no llegamos' → 'Continuar con esta dirección' → 'Sí, continuar' → OTP; redirige al Home con 'T-551' y 'Despacho sin cobertura'.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN\n- Método de entrega activo con cobertura\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C123-D-009-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — mis envios",
     "file": "TC-B2C123-D-009-p04-mis-envios.png"
    },
    {
     "caption": "Paso 7 — modal aun no llegamos a esta direccion",
     "file": "TC-B2C123-D-009-p07-modal-aun-no-llegamos-a-esta-direccion.png"
    },
    {
     "caption": "Paso 8 — home con la direccion sin cobertura",
     "file": "TC-B2C123-D-009-p08-home-con-la-direccion-sin-cobertura.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C123-D-009.png"
    }
   ],
   "spec": "tests/B2C-123.spec.ts:334",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario hace clic en la tarjeta de dirección e ingresa T-551, Futrono.\n6. El usuario completa la validación OTP.\n7. El sistema muestra el modal \"Aún no llegamos a esta dirección\".\n8. El usuario hace clic en \"Continuar con esta dirección\".",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, T-551, Futrono, 000000000000675191-UN, vhchirinos+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "El Store Locator muestra la dirección sin \"Despacho sin cobertura\" y 000000000000675191-UN se agrega al carro con normalidad.",
   "form_factor": "desktop",
   "id": "TC-B2C123-D-010",
   "name": "Verificar que al iniciar sesión una dirección que recuperó cobertura pierde la etiqueta [Desktop] [Logueado]",
   "observation": "Causa: {COMPRADOR_DIRECCION_SIN_COBERTURA_USER} (vhchirinos+nocobertura@avatar-global.com) no es una cuenta registrada en DEV: al pedir el código de acceso el sitio abre 'Crear cuenta'. Acción: registrar la cuenta y dejar su última dirección activa en el estado que pide el TC, o declarar una cuenta existente. Además, la dirección debe haber estado sin cobertura y hoy tenerla en Janis.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+nocobertura@avatar-global.com\n- La última dirección activa del perfil fue marcada sin cobertura en una sesión anterior\n- La zona de esa dirección ya tiene cobertura en Janis",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El sistema re-verifica la cobertura de la dirección guardada.\n3. El usuario ingresa a la PDP de 000000000000675191-UN y lo agrega al carro.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_DIRECCION_SIN_COBERTURA_PASSWORD}, vhchirinos+nocobertura@avatar-global.com, 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "El Store Locator mantiene la dirección con la etiqueta \"Despacho sin cobertura\".",
   "form_factor": "desktop",
   "id": "TC-B2C123-D-011",
   "name": "Verificar que al iniciar sesión una dirección que sigue sin cobertura mantiene la etiqueta [Desktop] [Logueado]",
   "observation": "Causa: {COMPRADOR_DIRECCION_SIN_COBERTURA_USER} (vhchirinos+nocobertura@avatar-global.com) no es una cuenta registrada en DEV: al pedir el código de acceso el sitio abre 'Crear cuenta'. Acción: registrar la cuenta y dejar su última dirección activa en el estado que pide el TC, o declarar una cuenta existente. (En la ejecución anterior se aprobó con otra cuenta, vhchirinos+comprador, que era el valor previo del token.)",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+nocobertura@avatar-global.com\n- La última dirección activa del perfil está sin cobertura y Janis sigue sin cobertura para esas coordenadas",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El sistema re-verifica la cobertura de la dirección guardada.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_DIRECCION_SIN_COBERTURA_PASSWORD}, vhchirinos+nocobertura@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-14",
   "expected": "El Store Locator mantiene la etiqueta \"Despacho sin cobertura\" sin cambios.",
   "form_factor": "desktop",
   "id": "TC-B2C123-D-012",
   "name": "Verificar que si la re-verificación falla se mantiene el último estado sin cobertura [Desktop] [Logueado]",
   "observation": "Causa: {COMPRADOR_DIRECCION_SIN_COBERTURA_USER} (vhchirinos+nocobertura@avatar-global.com) no es una cuenta registrada en DEV: al pedir el código de acceso el sitio abre 'Crear cuenta'. Acción: registrar la cuenta y dejar su última dirección activa en el estado que pide el TC, o declarar una cuenta existente. Además, {JANIS_API_ENDPOINT} está en TBD en el Excel de data.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+nocobertura@avatar-global.com\n- La última dirección activa del perfil está sin cobertura\n- DevTools abierto con bloqueo de la request {JANIS_API_ENDPOINT} (Network request blocking)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El sistema intenta re-verificar la cobertura y la llamada falla.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_DIRECCION_SIN_COBERTURA_PASSWORD}, vhchirinos+nocobertura@avatar-global.com, {JANIS_API_ENDPOINT}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 19.4,
   "executed_at": "2026-10-14",
   "expected": "Se muestra el modal \"Aún no llegamos a esta dirección\" con el mensaje \"Revisa que esté correcta, prueba con otra dentro de nuestra zona de cobertura o cambia tu método de entrega a una de nuestras tiendas Unimarc\" y las opciones \"Continuar con esta dirección\" y \"Cambiar método de entrega\".",
   "form_factor": "desktop",
   "id": "TC-B2C123-D-013",
   "name": "Verificar que seleccionar una tienda de retiro sin cobertura de despacho muestra el modal Aún no llegamos [Desktop] [Guest]",
   "observation": "Esperado: mensaje 'Revisa que esté correcta, prueba con otra dentro de nuestra zona de cobertura o cambia tu método de entrega a una de nuestras tiendas Unimarc'. Obtenido: '…a una de nuestras tienda Unimarc' (falta la s). Con la tienda 'Unimarc Los Lagos II' el modal y sus opciones sí se muestran. tests/B2C-123.spec.ts:275. Bug: B2C-1185 (comentado en la re-ejecución del 2026-10-14).",
   "observed": "Esperado: mensaje 'Revisa que esté correcta, prueba con otra dentro de nuestra zona de cobertura o cambia tu método de entrega a una de nuestras tiendas Unimarc'. Obtenido: '…a una de nuestras tienda Unimarc' (falta la s). Con la tienda 'Unimarc Los Lagos II' el modal y sus opciones sí se muestran.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home",
   "screenshots": [
    {
     "caption": "Paso 2 — home cargado",
     "file": "TC-B2C123-D-013-p02-home-cargado.png"
    },
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C123-D-013-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — tienda unimarc los lagos ii seleccionada",
     "file": "TC-B2C123-D-013-p06-tienda-unimarc-los-lagos-ii-seleccionada.png"
    },
    {
     "caption": "Paso 7 — modal aun no llegamos a esta direccion",
     "file": "TC-B2C123-D-013-p07-modal-aun-no-llegamos-a-esta-direccion.png"
    },
    {
     "caption": "Estado al fallar la aserción",
     "file": "TC-B2C123-D-013.png"
    }
   ],
   "spec": "tests/B2C-123.spec.ts:275",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\".\n5. El usuario selecciona la pestaña \"Retiro en tienda\".\n6. El usuario selecciona la tienda Unimarc Los Lagos II.\n7. El sistema verifica cobertura de despacho y detecta que la tienda no está dentro de la zona.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, Unimarc Los Lagos II",
   "viewport": "1440x900"
  },
  {
   "browser": "webkit",
   "duration_s": 57.7,
   "executed_at": "2026-10-14",
   "expected": "Se muestra el modal \"Aún no llegamos a esta dirección\" con el mensaje \"Revisa que esté correcta, prueba con otra dentro de nuestra zona de cobertura o cambia tu método de entrega a una de nuestras tiendas Unimarc\" y las opciones \"Continuar con esta dirección\" y \"Cambiar método de entrega\".",
   "form_factor": "mobile",
   "id": "TC-B2C123-M-001",
   "name": "Verificar que una dirección nueva fuera de zona muestra el modal Aún no llegamos con sus opciones [Mobile] [Guest]",
   "observation": "Esperado: mensaje 'Revisa que esté correcta, prueba con otra dentro de nuestra zona de cobertura o cambia tu método de entrega a una de nuestras tiendas Unimarc'. Obtenido: '…a una de nuestras tienda Unimarc' (falta la s). Con 'T-551, Futrono' el modal y sus opciones sí se muestran. tests/B2C-123.spec.ts:152. Bug: B2C-1185 (comentado en la re-ejecución del 2026-10-14).",
   "observed": "Esperado: mensaje 'Revisa que esté correcta, prueba con otra dentro de nuestra zona de cobertura o cambia tu método de entrega a una de nuestras tiendas Unimarc'. Obtenido: '…a una de nuestras tienda Unimarc' (falta la s). Con 'T-551, Futrono' el modal y sus opciones sí se muestran.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C123-M-001-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 5 — sugerencia para t 551 futrono",
     "file": "TC-B2C123-M-001-p05-sugerencia-para-t-551-futrono.png"
    },
    {
     "caption": "Paso 6 — modal aun no llegamos a esta direccion",
     "file": "TC-B2C123-M-001-p06-modal-aun-no-llegamos-a-esta-direccion.png"
    },
    {
     "caption": "Estado al fallar la aserción",
     "file": "TC-B2C123-M-001.png"
    }
   ],
   "spec": "tests/B2C-123.spec.ts:152",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección T-551, Futrono, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Aún no llegamos a esta dirección\".",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, T-551, Futrono",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 242.9,
   "executed_at": "2026-10-14",
   "expected": "Se muestra el modal \"Aún no llegamos a esta dirección\" con sus opciones \"Continuar con esta dirección\" y \"Cambiar método de entrega\".",
   "form_factor": "mobile",
   "id": "TC-B2C123-M-002",
   "name": "Verificar que una dirección guardada sin cobertura muestra el modal tras validar OTP [Mobile] [Logueado]",
   "observation": "Con sesión de vhchirinos+comprador y 'Casa' activa, al elegir la guardada 'T-551, Futrono' se muestra 'Aún no llegamos a esta dirección' con 'Continuar con esta dirección' y 'Cambiar método de entrega'. El modal aparece antes del OTP (el OTP se pide al continuar), no después como dicen los pasos. La dirección guardada se agregó a la cuenta como precondición el 2026-10-14.",
   "observed": "Con sesión de vhchirinos+comprador y 'Casa' activa, al elegir la guardada 'T-551, Futrono' se muestra 'Aún no llegamos a esta dirección' con 'Continuar con esta dirección' y 'Cambiar método de entrega'. El modal aparece antes del OTP (el OTP se pide al continuar), no después como dicen los pasos. La dirección guardada se agregó a la cuenta como precondición el 2026-10-14.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta tiene guardada la dirección T-551, Futrono\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Paso 2 — home con sesion y la direccion casa",
     "file": "TC-B2C123-M-002-p02-home-con-sesion-y-la-direccion-casa.png"
    },
    {
     "caption": "Paso 3 — direcciones guardadas",
     "file": "TC-B2C123-M-002-p03-direcciones-guardadas.png"
    },
    {
     "caption": "Paso 5 — modal aun no llegamos a esta direccion",
     "file": "TC-B2C123-M-002-p05-modal-aun-no-llegamos-a-esta-direccion.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C123-M-002.png"
    }
   ],
   "spec": "tests/B2C-123.spec.ts:309",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El usuario selecciona la dirección guardada T-551, Futrono.\n5. El usuario completa la validación OTP con el código recibido.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, T-551, Futrono, vhchirinos+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 71.2,
   "executed_at": "2026-10-14",
   "expected": "La dirección T-551, Futrono queda seteada y el Store Locator muestra \"Despacho sin cobertura\" debajo, también al navegar a otras páginas.",
   "form_factor": "mobile",
   "id": "TC-B2C123-M-003",
   "name": "Verificar que continuar sin carro setea la dirección con la etiqueta Despacho sin cobertura [Mobile] [Guest]",
   "observation": "Con 'T-551, Futrono': tras 'Continuar con esta dirección' hay loader, el Store Locator muestra 'T-551' con 'Despacho sin cobertura' y se mantiene al navegar a la PLP.",
   "observed": "Con 'T-551, Futrono': tras 'Continuar con esta dirección' hay loader, el Store Locator muestra 'T-551' con 'Despacho sin cobertura' y se mantiene al navegar a la PLP.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro está vacío",
   "screenshots": [
    {
     "caption": "Paso 5 — sugerencia para t 551 futrono",
     "file": "TC-B2C123-M-003-p05-sugerencia-para-t-551-futrono.png"
    },
    {
     "caption": "Paso 6 — modal aun no llegamos a esta direccion",
     "file": "TC-B2C123-M-003-p06-modal-aun-no-llegamos-a-esta-direccion.png"
    },
    {
     "caption": "Paso 8 — direccion seteada con despacho sin cobertura",
     "file": "TC-B2C123-M-003-p08-direccion-seteada-con-despacho-sin-cobertura.png"
    },
    {
     "caption": "Paso 9 — plp con despacho sin cobertura",
     "file": "TC-B2C123-M-003-p09-plp-con-despacho-sin-cobertura.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C123-M-003.png"
    }
   ],
   "spec": "tests/B2C-123.spec.ts:168",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección T-551, Futrono, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Aún no llegamos a esta dirección\".\n7. El usuario toca \"Continuar con esta dirección\".\n8. El sistema muestra un loader.\n9. El usuario navega a otra página del sitio.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, T-551, Futrono, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 132.8,
   "executed_at": "2026-10-14",
   "expected": "Se muestra el modal \"Algunos productos podrían agotarse\" (B2C-126).",
   "form_factor": "mobile",
   "id": "TC-B2C123-M-004",
   "name": "Verificar que continuar con carro y otra tienda abastecedora muestra el modal No se te escapen [Mobile] [Guest]",
   "observation": "Con 'Calle Uno 23, La Florida' activa y el carro con 000000000000675191-UN, al confirmar 'T-551, Futrono' y continuar aparece 'Algunos productos podrían agotarse' (B2C-126).",
   "observed": "Con 'Calle Uno 23, La Florida' activa y el carro con 000000000000675191-UN, al confirmar 'T-551, Futrono' y continuar aparece 'Algunos productos podrían agotarse' (B2C-126).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- La dirección activa es Calle Uno 23, La Florida\n- El carro contiene 000000000000675191-UN\n- La tienda por defecto de T-551, Futrono es distinta a la de Calle Uno 23, La Florida",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C123-M-004-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 5 — sugerencia para t 551 futrono",
     "file": "TC-B2C123-M-004-p05-sugerencia-para-t-551-futrono.png"
    },
    {
     "caption": "Paso 6 — modal aun no llegamos a esta direccion",
     "file": "TC-B2C123-M-004-p06-modal-aun-no-llegamos-a-esta-direccion.png"
    },
    {
     "caption": "TC B2C123 M 004 ppre carro con el sku y direccion activa",
     "file": "TC-B2C123-M-004-ppre-carro-con-el-sku-y-direccion-activa.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C123-M-004.png"
    }
   ],
   "spec": "tests/B2C-123.spec.ts:226",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección T-551, Futrono, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Aún no llegamos a esta dirección\".\n7. El usuario toca \"Continuar con esta dirección\".\n8. El sistema muestra un loader y verifica la disponibilidad de productos.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, T-551, Futrono, 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 48.6,
   "executed_at": "2026-10-14",
   "expected": "El modal \"Aún no llegamos a esta dirección\" se cierra y se muestra el modal \"Elige tu método de entrega\".",
   "form_factor": "mobile",
   "id": "TC-B2C123-M-005",
   "name": "Verificar que Cambiar método de entrega vuelve al modal Elige tu método de entrega [Mobile] [Guest]",
   "observation": "'Cambiar método de entrega' cierra 'Aún no llegamos a esta dirección' y vuelve 'Elige tu método de entrega'.",
   "observed": "'Cambiar método de entrega' cierra 'Aún no llegamos a esta dirección' y vuelve 'Elige tu método de entrega'.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito",
   "screenshots": [
    {
     "caption": "Paso 5 — sugerencia para t 551 futrono",
     "file": "TC-B2C123-M-005-p05-sugerencia-para-t-551-futrono.png"
    },
    {
     "caption": "Paso 6 — modal aun no llegamos a esta direccion",
     "file": "TC-B2C123-M-005-p06-modal-aun-no-llegamos-a-esta-direccion.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C123-M-005.png"
    }
   ],
   "spec": "tests/B2C-123.spec.ts:193",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección T-551, Futrono, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Aún no llegamos a esta dirección\".\n7. El usuario toca \"Cambiar método de entrega\".",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, T-551, Futrono",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 19.3,
   "executed_at": "2026-10-14",
   "expected": "El modal se cierra, el Store Locator muestra Calle Uno 23, La Florida y el usuario vuelve a la PLP.",
   "form_factor": "mobile",
   "id": "TC-B2C123-M-006",
   "name": "Verificar que una nueva dirección con cobertura se setea y vuelve a la página de origen [Mobile] [Guest]",
   "observation": "Desde la PLP: sin cobertura → 'Cambiar método de entrega' → 'Calle Uno 23, La Florida'. El modal se cierra, el Store Locator muestra 'Calle Uno 23' sin etiqueta y sigue en la misma PLP.",
   "observed": "Desde la PLP: sin cobertura → 'Cambiar método de entrega' → 'Calle Uno 23, La Florida'. El modal se cierra, el Store Locator muestra 'Calle Uno 23' sin etiqueta y sigue en la misma PLP.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: PLP",
   "screenshots": [
    {
     "caption": "Paso 3 — sugerencia para t 551 futrono",
     "file": "TC-B2C123-M-006-p03-sugerencia-para-t-551-futrono.png"
    },
    {
     "caption": "Paso 4 — modal aun no llegamos a esta direccion",
     "file": "TC-B2C123-M-006-p04-modal-aun-no-llegamos-a-esta-direccion.png"
    },
    {
     "caption": "Paso 5 — de vuelta en elige tu metodo de entrega",
     "file": "TC-B2C123-M-006-p05-de-vuelta-en-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — plp con la nueva direccion",
     "file": "TC-B2C123-M-006-p06-plp-con-la-nueva-direccion.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C123-M-006.png"
    }
   ],
   "spec": "tests/B2C-123.spec.ts:251",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.\n2. El usuario toca el Store Locator del header.\n3. El usuario ingresa T-551, Futrono y la confirma.\n4. El sistema muestra el modal \"Aún no llegamos a esta dirección\".\n5. El usuario toca \"Cambiar método de entrega\".\n6. El usuario ingresa Calle Uno 23, La Florida y la confirma.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, Calle Uno 23, La Florida, T-551, Futrono, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 78.8,
   "executed_at": "2026-10-14",
   "expected": "Se muestra el toast de error \"No tenemos cobertura para la dirección actual, seleccione otra dirección\" con X de cierre manual y 000000000000675191-UN no se agrega al carro.",
   "form_factor": "mobile",
   "id": "TC-B2C123-M-007",
   "name": "Verificar que con dirección sin cobertura agregar un producto se bloquea con un toast [Mobile] [Guest]",
   "observation": "Esperado: toast 'No tenemos cobertura para la dirección actual, seleccione otra dirección' con X. Obtenido: 'Cambia tu dirección de despacho para poder comprar.'. La X y el bloqueo sí se cumplen (el SKU no se agrega). tests/B2C-123.spec.ts:204. Bug: B2C-1186 (comentado en la re-ejecución del 2026-10-14).",
   "observed": "Esperado: toast 'No tenemos cobertura para la dirección actual, seleccione otra dirección' con X. Obtenido: 'Cambia tu dirección de despacho para poder comprar.'. La X y el bloqueo sí se cumplen (el SKU no se agrega).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- La dirección T-551, Futrono está activa con la etiqueta \"Despacho sin cobertura\"",
   "screenshots": [
    {
     "caption": "Paso 2 — home con despacho sin cobertura",
     "file": "TC-B2C123-M-007-p02-home-con-despacho-sin-cobertura.png"
    },
    {
     "caption": "Paso 3 — toast tras agregar",
     "file": "TC-B2C123-M-007-p03-toast-tras-agregar.png"
    },
    {
     "caption": "TC B2C123 M 007 ppre sugerencia para t 551 futrono",
     "file": "TC-B2C123-M-007-ppre-sugerencia-para-t-551-futrono.png"
    },
    {
     "caption": "Estado al fallar la aserción",
     "file": "TC-B2C123-M-007.png"
    }
   ],
   "spec": "tests/B2C-123.spec.ts:204",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El sistema carga el Home con la etiqueta \"Despacho sin cobertura\".\n3. El usuario ingresa a la PDP de 000000000000675191-UN y lo agrega al carro.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, T-551, Futrono, 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-14",
   "expected": "000000000000675191-UN se muestra marcado como no disponible en el carro.",
   "form_factor": "mobile",
   "id": "TC-B2C123-M-008",
   "name": "Verificar que con dirección sin cobertura los productos del carro quedan no disponibles [Mobile] [Guest]",
   "observation": "Causa: la precondición pide el carro con {SKU_VALID_001} antes de aplicar la dirección sin cobertura, y un invitado sin dirección no puede agregar (re-verificado 2026-10-14: 'Agregar' abre 'Elige tu método de entrega'). Acción: declarar en la fila la dirección con cobertura con la que se arma el carro.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contenía 000000000000675191-UN antes de continuar con la dirección sin cobertura\n- La dirección T-551, Futrono está activa con la etiqueta \"Despacho sin cobertura\"",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, T-551, Futrono, 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 158.1,
   "executed_at": "2026-10-14",
   "expected": "El usuario es redirigido al Home con T-551, Futrono seteada y la etiqueta de sin cobertura.",
   "form_factor": "mobile",
   "id": "TC-B2C123-M-009",
   "name": "Verificar que continuar con la dirección sin cobertura desde Mis envíos lleva al Home [Mobile] [Logueado]",
   "observation": "Desde Mis Envíos (ícono ▾ de la tarjeta), con 'T-551, Futrono': 'Aún no llegamos' → 'Continuar con esta dirección' → 'Sí, continuar' → OTP; redirige al Home con 'T-551' y 'Despacho sin cobertura'.",
   "observed": "Desde Mis Envíos (ícono ▾ de la tarjeta), con 'T-551, Futrono': 'Aún no llegamos' → 'Continuar con esta dirección' → 'Sí, continuar' → OTP; redirige al Home con 'T-551' y 'Despacho sin cobertura'.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN\n- Método de entrega activo con cobertura\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C123-M-009-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — mis envios",
     "file": "TC-B2C123-M-009-p04-mis-envios.png"
    },
    {
     "caption": "Paso 7 — modal aun no llegamos a esta direccion",
     "file": "TC-B2C123-M-009-p07-modal-aun-no-llegamos-a-esta-direccion.png"
    },
    {
     "caption": "Paso 8 — home con la direccion sin cobertura",
     "file": "TC-B2C123-M-009-p08-home-con-la-direccion-sin-cobertura.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C123-M-009.png"
    }
   ],
   "spec": "tests/B2C-123.spec.ts:334",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca la tarjeta de dirección e ingresa T-551, Futrono.\n6. El usuario completa la validación OTP.\n7. El sistema muestra el modal \"Aún no llegamos a esta dirección\".\n8. El usuario toca \"Continuar con esta dirección\".",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, T-551, Futrono, 000000000000675191-UN, vhchirinos+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-14",
   "expected": "El Store Locator muestra la dirección sin \"Despacho sin cobertura\" y 000000000000675191-UN se agrega al carro con normalidad.",
   "form_factor": "mobile",
   "id": "TC-B2C123-M-010",
   "name": "Verificar que al iniciar sesión una dirección que recuperó cobertura pierde la etiqueta [Mobile] [Logueado]",
   "observation": "Causa: {COMPRADOR_DIRECCION_SIN_COBERTURA_USER} (vhchirinos+nocobertura@avatar-global.com) no es una cuenta registrada en DEV: al pedir el código de acceso el sitio abre 'Crear cuenta'. Acción: registrar la cuenta y dejar su última dirección activa en el estado que pide el TC, o declarar una cuenta existente. Además, la dirección debe haber estado sin cobertura y hoy tenerla en Janis.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+nocobertura@avatar-global.com\n- La última dirección activa del perfil fue marcada sin cobertura en una sesión anterior\n- La zona de esa dirección ya tiene cobertura en Janis",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El sistema re-verifica la cobertura de la dirección guardada.\n3. El usuario ingresa a la PDP de 000000000000675191-UN y lo agrega al carro.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_DIRECCION_SIN_COBERTURA_PASSWORD}, vhchirinos+nocobertura@avatar-global.com, 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-14",
   "expected": "El Store Locator mantiene la dirección con la etiqueta \"Despacho sin cobertura\".",
   "form_factor": "mobile",
   "id": "TC-B2C123-M-011",
   "name": "Verificar que al iniciar sesión una dirección que sigue sin cobertura mantiene la etiqueta [Mobile] [Logueado]",
   "observation": "Causa: {COMPRADOR_DIRECCION_SIN_COBERTURA_USER} (vhchirinos+nocobertura@avatar-global.com) no es una cuenta registrada en DEV: al pedir el código de acceso el sitio abre 'Crear cuenta'. Acción: registrar la cuenta y dejar su última dirección activa en el estado que pide el TC, o declarar una cuenta existente. (En la ejecución anterior se aprobó con otra cuenta, vhchirinos+comprador, que era el valor previo del token.)",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+nocobertura@avatar-global.com\n- La última dirección activa del perfil está sin cobertura y Janis sigue sin cobertura para esas coordenadas",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El sistema re-verifica la cobertura de la dirección guardada.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_DIRECCION_SIN_COBERTURA_PASSWORD}, vhchirinos+nocobertura@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-14",
   "expected": "El Store Locator mantiene la etiqueta \"Despacho sin cobertura\" sin cambios.",
   "form_factor": "mobile",
   "id": "TC-B2C123-M-012",
   "name": "Verificar que si la re-verificación falla se mantiene el último estado sin cobertura [Mobile] [Logueado]",
   "observation": "Causa: {COMPRADOR_DIRECCION_SIN_COBERTURA_USER} (vhchirinos+nocobertura@avatar-global.com) no es una cuenta registrada en DEV: al pedir el código de acceso el sitio abre 'Crear cuenta'. Acción: registrar la cuenta y dejar su última dirección activa en el estado que pide el TC, o declarar una cuenta existente. Además, {JANIS_API_ENDPOINT} está en TBD en el Excel de data.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+nocobertura@avatar-global.com\n- La última dirección activa del perfil está sin cobertura\n- DevTools abierto con bloqueo de la request {JANIS_API_ENDPOINT} (Network request blocking)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El sistema intenta re-verificar la cobertura y la llamada falla.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, {COMPRADOR_DIRECCION_SIN_COBERTURA_PASSWORD}, vhchirinos+nocobertura@avatar-global.com, {JANIS_API_ENDPOINT}",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 64.1,
   "executed_at": "2026-10-14",
   "expected": "Se muestra el modal \"Aún no llegamos a esta dirección\" con el mensaje \"Revisa que esté correcta, prueba con otra dentro de nuestra zona de cobertura o cambia tu método de entrega a una de nuestras tiendas Unimarc\" y las opciones \"Continuar con esta dirección\" y \"Cambiar método de entrega\".",
   "form_factor": "mobile",
   "id": "TC-B2C123-M-013",
   "name": "Verificar que seleccionar una tienda de retiro sin cobertura de despacho muestra el modal Aún no llegamos [Mobile] [Guest]",
   "observation": "Esperado: mensaje 'Revisa que esté correcta, prueba con otra dentro de nuestra zona de cobertura o cambia tu método de entrega a una de nuestras tiendas Unimarc'. Obtenido: '…a una de nuestras tienda Unimarc' (falta la s). Con la tienda 'Unimarc Los Lagos II' el modal y sus opciones sí se muestran. tests/B2C-123.spec.ts:275. Bug: B2C-1185 (comentado en la re-ejecución del 2026-10-14).",
   "observed": "Esperado: mensaje 'Revisa que esté correcta, prueba con otra dentro de nuestra zona de cobertura o cambia tu método de entrega a una de nuestras tiendas Unimarc'. Obtenido: '…a una de nuestras tienda Unimarc' (falta la s). Con la tienda 'Unimarc Los Lagos II' el modal y sus opciones sí se muestran.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home",
   "screenshots": [
    {
     "caption": "Paso 2 — home cargado",
     "file": "TC-B2C123-M-013-p02-home-cargado.png"
    },
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C123-M-013-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — tienda unimarc los lagos ii seleccionada",
     "file": "TC-B2C123-M-013-p06-tienda-unimarc-los-lagos-ii-seleccionada.png"
    },
    {
     "caption": "Paso 7 — modal aun no llegamos a esta direccion",
     "file": "TC-B2C123-M-013-p07-modal-aun-no-llegamos-a-esta-direccion.png"
    },
    {
     "caption": "Estado al fallar la aserción",
     "file": "TC-B2C123-M-013.png"
    }
   ],
   "spec": "tests/B2C-123.spec.ts:275",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\".\n5. El usuario selecciona la pestaña \"Retiro en tienda\".\n6. El usuario selecciona la tienda Unimarc Los Lagos II.\n7. El sistema verifica cobertura de despacho y detecta que la tienda no está dentro de la zona.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, Unimarc Los Lagos II",
   "viewport": "390x844"
  }
 ]
}
-->
