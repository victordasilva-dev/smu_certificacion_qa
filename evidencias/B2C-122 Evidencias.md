# B2C-122 APP

| Campo | Valor |
|---|---|
| Suite | B2C-122 |
| Última actualización | 2026-10-27 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | App Unimarc v1.0.1 (DEV) |
| Navegador Desktop | chromium |
| Navegador Mobile | chromium |
| Dispositivo Android | Pixel 6 · Android 14 (emulador) |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-122 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 8 |
| Bloqueado Data | 7 |
| Rechazado | 2 |
| Bloqueado | 1 |
| **Total** | **18** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-27 | 2 | TC-B2C122-APP-010, TC-B2C122-APP-011 |
| 2026-10-26 | 6 | TC-B2C122-APP-001, TC-B2C122-APP-003, TC-B2C122-APP-004, TC-B2C122-APP-007, TC-B2C122-APP-009, TC-B2C122-APP-012 |
| 2026-10-20 | 10 | TC-B2C122-D-001, TC-B2C122-D-002, TC-B2C122-D-003, TC-B2C122-D-008, TC-B2C122-D-010, TC-B2C122-D-011, TC-B2C122-M-002, TC-B2C122-M-008, TC-B2C122-M-010, TC-B2C122-M-011 |
| 2026-10-19 | 2 | TC-B2C122-M-010, TC-B2C122-M-011 |

## Detalle por caso de prueba

### TC-B2C122-M-010 - Verificar que un invitado que inicia sesión desde el prompt pasa al flujo invitado a logueado [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-122.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- La dirección activa es {DIRECCION_DESPACHO_001} (tienda abastecedora A)
- El carro contiene {SKU_VALID_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{DIRECCION_OTRA_TIENDA} = A. Las Conder 14791, Lo Barnechea

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Algunos productos podrían agotarse".
7. El usuario toca "Sí, continuar".
8. El sistema muestra el prompt de inicio de sesión.
9. El usuario inicia sesión con la cuenta {USER_AUTH_001}.

**Resultado esperado**

Se activa la transición invitado → logueado (B2C-124): se solicita OTP para confirmar la dirección heredada.

**Resultado obtenido**

Esperado: tras 'Sí, continuar' se muestra el prompt de inicio de sesión y, al iniciar sesión con {USER_AUTH_001}, se solicita el OTP (transición invitado → logueado, B2C-124). Obtenido: la dirección se aplica (header 'Avenida Las Condes…') y no aparece ningún prompt de inicio de sesión; el usuario sigue como invitado. tests/B2C-122.spec.ts (D/M-010). Bug: B2C-1198.

**Observación**

Esperado: tras 'Sí, continuar' se muestra el prompt de inicio de sesión y, al iniciar sesión con {USER_AUTH_001}, se solicita el OTP (transición invitado → logueado, B2C-124). Obtenido: la dirección se aplica (header 'Avenida Las Condes…') y no aparece ningún prompt de inicio de sesión; el usuario sigue como invitado. tests/B2C-122.spec.ts (D/M-010). Bug: B2C-1198.

**Evidencia**

![Paso 2 — home con la direccion activa](<B2C-122 Evidencias/TC-B2C122-M-010-p02-home-con-la-direccion-activa.png>)

![Paso 4 — modal elige tu metodo de entrega](<B2C-122 Evidencias/TC-B2C122-M-010-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — modal algunos productos podrian agotarse](<B2C-122 Evidencias/TC-B2C122-M-010-p06-modal-algunos-productos-podrian-agotarse.png>)

![TC B2C122 M 010 ppre direccion activa y carro con el sku](<B2C-122 Evidencias/TC-B2C122-M-010-ppre-direccion-activa-y-carro-con-el-sku.png>)

![Estado al fallar la aserción](<B2C-122 Evidencias/TC-B2C122-M-010.png>)

---

### TC-B2C122-M-011 - Verificar que el modal también aparece al cambiar la tienda de retiro con carro [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-122.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001}
- La tienda abastecedora de {TIENDA_RETIRO_001} es distinta a la activa
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_RETIRO_001} = Unimarc Las Condes

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El usuario toca la pestaña "Retiro en tienda".
5. El usuario selecciona la tienda {TIENDA_RETIRO_001} y toca "Confirmar tienda".
6. El sistema muestra el modal "Autenticación requerida" y envía el código OTP al correo.
7. El usuario ingresa el código OTP recibido y presiona "Continuar".

**Resultado esperado**

Se muestra el modal "Algunos productos podrían agotarse" antes de aplicar el cambio de tienda de retiro.

**Resultado obtenido**

Con sesión iniciada con {USER_AUTH_001} y el carro con {SKU_VALID_001}, al elegir Unimarc Las Condes en 'Retiro en tienda' y 'Confirmar tienda' se muestra 'Algunos productos podrían agotarse' con su texto antes de aplicar el cambio; se cerró con 'No, gracias' sin aplicar el cambio.

**Evidencia**

![Paso 2 — home con sesion iniciada](<B2C-122 Evidencias/TC-B2C122-M-011-p02-home-con-sesion-iniciada.png>)

![Paso 4 — pestana retiro en tienda](<B2C-122 Evidencias/TC-B2C122-M-011-p04-pestana-retiro-en-tienda.png>)

![Paso 8 — modal algunos productos podrian agotarse](<B2C-122 Evidencias/TC-B2C122-M-011-p08-modal-algunos-productos-podrian-agotarse.png>)

![Estado final](<B2C-122 Evidencias/TC-B2C122-M-011.png>)

---

### TC-B2C122-D-001 - Verificar que al cambiar a una dirección de otra tienda abastecedora con carro aparece el modal [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-122.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- La dirección activa es {DIRECCION_DESPACHO_001} (tienda abastecedora A)
- El carro contiene {SKU_VALID_001}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea

{DIRECCION_OTRA_TIENDA} = A. Las Conder 14791, Lo Barnechea

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El sistema muestra el modal "Algunos productos podrían agotarse".

**Resultado esperado**

Se muestra el modal "Algunos productos podrían agotarse" con el texto "Al cambiar la dirección o tipo de despacho, puede que algunos productos no se encuentren en esta ubicación o tienda. ¿Deseas continuar?", los botones "Sí, continuar" y "No, gracias" y el ícono X.

**Resultado obtenido**

Ejecutado con la dirección activa que declara la fila, {DIRECCION_DESPACHO_003} (Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea); la precondición escrita dice {DIRECCION_DESPACHO_001}. Causa: con esa dirección activa, {DIRECCION_OTRA_TIENDA} (A. Las Condes 14791, Lo Barnechea) es atendida por la misma tienda: el cambio se aplica directo, sin el modal 'Algunos productos podrían agotarse'. La data declarada no cumple la precondición 'otra tienda abastecedora'. Acción: declarar una dirección activa y una 'otra tienda' que sean de tiendas distintas, y alinear la precondición.

**Observación**

Ejecutado con la dirección activa que declara la fila, {DIRECCION_DESPACHO_003} (Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea); la precondición escrita dice {DIRECCION_DESPACHO_001}. Causa: con esa dirección activa, {DIRECCION_OTRA_TIENDA} (A. Las Condes 14791, Lo Barnechea) es atendida por la misma tienda: el cambio se aplica directo, sin el modal 'Algunos productos podrían agotarse'. La data declarada no cumple la precondición 'otra tienda abastecedora'. Acción: declarar una dirección activa y una 'otra tienda' que sean de tiendas distintas, y alinear la precondición.

**Evidencia**

![Estado tras confirmar la dirección (impedimento de data)](<B2C-122 Evidencias/TC-B2C122-D-001.png>)

---

### TC-B2C122-D-002 - Verificar que si la nueva dirección usa la misma tienda abastecedora el cambio se aplica sin modal [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-122.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- La dirección activa es {DIRECCION_DESPACHO_001} (tienda abastecedora A)
- El carro contiene {SKU_VALID_001}
- {DIRECCION_MISMA_TIENDA} es atendida por la misma tienda abastecedora que {DIRECCION_DESPACHO_001}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea

{DIRECCION_MISMA_TIENDA} = Gral. José Artigas 3250, Ñuñoa

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_MISMA_TIENDA}, la selecciona de las sugerencias y hace clic en "Confirmar dirección".

**Resultado esperado**

No se muestra el modal y el Store Locator queda con {DIRECCION_MISMA_TIENDA}.

**Resultado obtenido**

Ejecutado con la dirección activa que declara la fila, {DIRECCION_DESPACHO_003} (Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea); la precondición escrita dice {DIRECCION_DESPACHO_001}. Causa: con esa dirección activa, {DIRECCION_MISMA_TIENDA} (Gral. José Artigas 3250, Ñuñoa) es de otra tienda: aparece el modal 'Algunos productos podrían agotarse'. La data declarada no cumple la precondición 'misma tienda abastecedora'. Acción: declarar una dirección de la misma tienda que la dirección activa, y alinear la precondición.

**Observación**

Ejecutado con la dirección activa que declara la fila, {DIRECCION_DESPACHO_003} (Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea); la precondición escrita dice {DIRECCION_DESPACHO_001}. Causa: con esa dirección activa, {DIRECCION_MISMA_TIENDA} (Gral. José Artigas 3250, Ñuñoa) es de otra tienda: aparece el modal 'Algunos productos podrían agotarse'. La data declarada no cumple la precondición 'misma tienda abastecedora'. Acción: declarar una dirección de la misma tienda que la dirección activa, y alinear la precondición.

**Evidencia**

![Estado tras confirmar la dirección (impedimento de data)](<B2C-122 Evidencias/TC-B2C122-D-002.png>)

---

### TC-B2C122-D-003 - Verificar que No, gracias cierra el modal sin aplicar el cambio [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-122.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- La dirección activa es {DIRECCION_DESPACHO_001} (tienda abastecedora A)
- El carro contiene {SKU_VALID_001}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea

{DIRECCION_OTRA_TIENDA} = A. Las Conder 14791, Lo Barnechea

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El sistema muestra el modal "Algunos productos podrían agotarse".
7. El usuario hace clic en "No, gracias".

**Resultado esperado**

El modal se cierra, la dirección activa sigue siendo {DIRECCION_DESPACHO_001} y el carro mantiene {SKU_VALID_001}.

**Resultado obtenido**

Ejecutado con la dirección activa que declara la fila, {DIRECCION_DESPACHO_003} (Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea); la precondición escrita dice {DIRECCION_DESPACHO_001}. Causa: con esa dirección activa, {DIRECCION_OTRA_TIENDA} (A. Las Condes 14791, Lo Barnechea) es atendida por la misma tienda: el cambio se aplica directo, sin el modal 'Algunos productos podrían agotarse'. La data declarada no cumple la precondición 'otra tienda abastecedora'. Acción: declarar una dirección activa y una 'otra tienda' que sean de tiendas distintas, y alinear la precondición.

**Observación**

Ejecutado con la dirección activa que declara la fila, {DIRECCION_DESPACHO_003} (Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea); la precondición escrita dice {DIRECCION_DESPACHO_001}. Causa: con esa dirección activa, {DIRECCION_OTRA_TIENDA} (A. Las Condes 14791, Lo Barnechea) es atendida por la misma tienda: el cambio se aplica directo, sin el modal 'Algunos productos podrían agotarse'. La data declarada no cumple la precondición 'otra tienda abastecedora'. Acción: declarar una dirección activa y una 'otra tienda' que sean de tiendas distintas, y alinear la precondición.

**Evidencia**

![Estado tras confirmar la dirección (impedimento de data)](<B2C-122 Evidencias/TC-B2C122-D-003.png>)

---

### TC-B2C122-D-008 - Verificar que si hay productos no disponibles en la nueva tienda se activa ese flujo [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-122.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- La dirección activa es {DIRECCION_DESPACHO_001} (tienda abastecedora A)
- El carro contiene {SKU_VALID_001}
- El carro también contiene {SKU_STOCK_SOLO_TIENDA_A}, sin stock en la tienda de {DIRECCION_OTRA_TIENDA}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{DIRECCION_OTRA_TIENDA} = A. Las Conder 14791, Lo Barnechea

{SKU_STOCK_SOLO_TIENDA_A} = None

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El sistema muestra el modal "Algunos productos podrían agotarse".
7. El usuario hace clic en "Sí, continuar".

**Resultado esperado**

Se activa el flujo de productos no disponibles de B2C-126 para {SKU_STOCK_SOLO_TIENDA_A}.

**Resultado obtenido**

Causa: {SKU_STOCK_SOLO_TIENDA_A} está en TBD en el Excel de data. Acción: cargar un SKU con stock solo en la tienda A.

**Observación**

Causa: {SKU_STOCK_SOLO_TIENDA_A} está en TBD en el Excel de data. Acción: cargar un SKU con stock solo en la tienda A.

---

### TC-B2C122-D-010 - Verificar que un invitado que inicia sesión desde el prompt pasa al flujo invitado a logueado [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-122.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- La dirección activa es {DIRECCION_DESPACHO_001} (tienda abastecedora A)
- El carro contiene {SKU_VALID_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{DIRECCION_OTRA_TIENDA} = A. Las Conder 14791, Lo Barnechea

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El sistema muestra el modal "Algunos productos podrían agotarse".
7. El usuario hace clic en "Sí, continuar".
8. El sistema muestra el prompt de inicio de sesión.
9. El usuario inicia sesión con la cuenta {USER_AUTH_001}.

**Resultado esperado**

Se activa la transición invitado → logueado (B2C-124): se solicita OTP para confirmar la dirección heredada.

**Resultado obtenido**

Esperado: tras 'Sí, continuar' se muestra el prompt de inicio de sesión y, al iniciar sesión con {USER_AUTH_001}, se solicita el OTP (transición invitado → logueado, B2C-124). Obtenido: la dirección se aplica (header 'Avenida Las Condes…') y no aparece ningún prompt de inicio de sesión; el usuario sigue como invitado. tests/B2C-122.spec.ts (D/M-010). En la re-ejecución del mismo día el modal quedó procesando «Sí, continuar» más de 45 s sin cerrarse. Bug: B2C-1198.

**Observación**

Esperado: tras 'Sí, continuar' se muestra el prompt de inicio de sesión y, al iniciar sesión con {USER_AUTH_001}, se solicita el OTP (transición invitado → logueado, B2C-124). Obtenido: la dirección se aplica (header 'Avenida Las Condes…') y no aparece ningún prompt de inicio de sesión; el usuario sigue como invitado. tests/B2C-122.spec.ts (D/M-010). En la re-ejecución del mismo día el modal quedó procesando «Sí, continuar» más de 45 s sin cerrarse. Bug: B2C-1198.

**Evidencia**

![Paso 2 — home con la direccion activa](<B2C-122 Evidencias/TC-B2C122-D-010-p02-home-con-la-direccion-activa.png>)

![Paso 4 — modal elige tu metodo de entrega](<B2C-122 Evidencias/TC-B2C122-D-010-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — modal algunos productos podrian agotarse](<B2C-122 Evidencias/TC-B2C122-D-010-p06-modal-algunos-productos-podrian-agotarse.png>)

![TC B2C122 D 010 ppre direccion activa y carro con el sku](<B2C-122 Evidencias/TC-B2C122-D-010-ppre-direccion-activa-y-carro-con-el-sku.png>)

![Estado al fallar la aserción](<B2C-122 Evidencias/TC-B2C122-D-010.png>)

---

### TC-B2C122-D-011 - Verificar que el modal también aparece al cambiar la tienda de retiro con carro [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-122.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001}
- La tienda abastecedora de {TIENDA_RETIRO_001} es distinta a la activa
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_RETIRO_001} = Unimarc Las Condes

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El usuario hace clic en la pestaña "Retiro en tienda".
5. El usuario selecciona la tienda {TIENDA_RETIRO_001} y hace clic en "Confirmar tienda".
6. El sistema muestra el modal "Autenticación requerida" y envía el código OTP al correo.
7. El usuario ingresa el código OTP recibido y presiona "Continuar".

**Resultado esperado**

Se muestra el modal "Algunos productos podrían agotarse" antes de aplicar el cambio de tienda de retiro.

**Resultado obtenido**

Con sesión iniciada con {USER_AUTH_001} y el carro con {SKU_VALID_001}, al elegir Unimarc Las Condes en 'Retiro en tienda' y 'Confirmar tienda' se muestra 'Algunos productos podrían agotarse' con su texto antes de aplicar el cambio; se cerró con 'No, gracias' sin aplicar el cambio.

**Evidencia**

![Paso 2 — home con sesion iniciada](<B2C-122 Evidencias/TC-B2C122-D-011-p02-home-con-sesion-iniciada.png>)

![Paso 4 — pestana retiro en tienda](<B2C-122 Evidencias/TC-B2C122-D-011-p04-pestana-retiro-en-tienda.png>)

![Paso 8 — modal algunos productos podrian agotarse](<B2C-122 Evidencias/TC-B2C122-D-011-p08-modal-algunos-productos-podrian-agotarse.png>)

![Estado final](<B2C-122 Evidencias/TC-B2C122-D-011.png>)

---

### TC-B2C122-M-002 - Verificar que si la nueva dirección usa la misma tienda abastecedora el cambio se aplica sin modal [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-122.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- La dirección activa es {DIRECCION_DESPACHO_001} (tienda abastecedora A)
- El carro contiene {SKU_VALID_001}
- {DIRECCION_MISMA_TIENDA} es atendida por la misma tienda abastecedora que {DIRECCION_DESPACHO_001}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea

{DIRECCION_MISMA_TIENDA} = Gral. José Artigas 3250, Ñuñoa

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_MISMA_TIENDA}, la selecciona de las sugerencias y toca "Confirmar dirección".

**Resultado esperado**

No se muestra el modal y el Store Locator queda con {DIRECCION_MISMA_TIENDA}.

**Resultado obtenido**

Ejecutado con la dirección activa que declara la fila, {DIRECCION_DESPACHO_003} (Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea); la precondición escrita dice {DIRECCION_DESPACHO_001}. Causa: con esa dirección activa, {DIRECCION_MISMA_TIENDA} (Gral. José Artigas 3250, Ñuñoa) es de otra tienda: aparece el modal 'Algunos productos podrían agotarse'. La data declarada no cumple la precondición 'misma tienda abastecedora'. Acción: declarar una dirección de la misma tienda que la dirección activa, y alinear la precondición.

**Observación**

Ejecutado con la dirección activa que declara la fila, {DIRECCION_DESPACHO_003} (Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea); la precondición escrita dice {DIRECCION_DESPACHO_001}. Causa: con esa dirección activa, {DIRECCION_MISMA_TIENDA} (Gral. José Artigas 3250, Ñuñoa) es de otra tienda: aparece el modal 'Algunos productos podrían agotarse'. La data declarada no cumple la precondición 'misma tienda abastecedora'. Acción: declarar una dirección de la misma tienda que la dirección activa, y alinear la precondición.

**Evidencia**

![Estado tras confirmar la dirección (impedimento de data)](<B2C-122 Evidencias/TC-B2C122-M-002.png>)

---

### TC-B2C122-M-008 - Verificar que si hay productos no disponibles en la nueva tienda se activa ese flujo [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-122.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- La dirección activa es {DIRECCION_DESPACHO_001} (tienda abastecedora A)
- El carro contiene {SKU_VALID_001}
- El carro también contiene {SKU_STOCK_SOLO_TIENDA_A}, sin stock en la tienda de {DIRECCION_OTRA_TIENDA}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{DIRECCION_OTRA_TIENDA} = A. Las Conder 14791, Lo Barnechea

{SKU_STOCK_SOLO_TIENDA_A} = None

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Algunos productos podrían agotarse".
7. El usuario toca "Sí, continuar".

**Resultado esperado**

Se activa el flujo de productos no disponibles de B2C-126 para {SKU_STOCK_SOLO_TIENDA_A}.

**Resultado obtenido**

Causa: {SKU_STOCK_SOLO_TIENDA_A} está en TBD en el Excel de data. Acción: cargar un SKU con stock solo en la tienda A.

**Observación**

Causa: {SKU_STOCK_SOLO_TIENDA_A} está en TBD en el Excel de data. Acción: cargar un SKU con stock solo en la tienda A.

---

### TC-B2C122-APP-001 - Verificar que al cambiar a una dirección de otra tienda abastecedora con carro aparece el modal

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- La dirección activa es Calle Uno 23, La Florida (tienda abastecedora A)
- El carro contiene 000000000000675191-UN

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- Calle Uno 23, La Florida = Casa
- A. Las Conder 14791, Lo Barnechea = TBD
- 000000000000675191-UN = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Algunos productos podrían agotarse".

**Resultado esperado**

Se muestra el modal "Algunos productos podrían agotarse" con el texto "Al cambiar la dirección o tipo de despacho, puede que algunos productos no se encuentren en esta ubicación o tienda. ¿Deseas continuar?", los botones "Sí, continuar" y "No, gracias" y el ícono X.

**Resultado obtenido**

Al confirmar Avenida Las Condes 14791, Lo Barnechea (sugerencia de Google para A. Las Conder 14791, Lo Barnechea='A. Las Conder 14791, Lo Barnechea') con el carro cargado se abre 'Algunos productos podrían agotarse' con el texto esperado, 'Sí, continuar', 'No, gracias' y la X. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

---

### TC-B2C122-APP-003 - Verificar que No, gracias cierra el modal sin aplicar el cambio

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- La dirección activa es Calle Uno 23, La Florida (tienda abastecedora A)
- El carro contiene 000000000000675191-UN

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- Calle Uno 23, La Florida = Casa
- A. Las Conder 14791, Lo Barnechea = TBD
- 000000000000675191-UN = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Algunos productos podrían agotarse".
7. El usuario toca "No, gracias".

**Resultado esperado**

El modal se cierra, la dirección activa sigue siendo Calle Uno 23, La Florida y el carro mantiene 000000000000675191-UN.

**Resultado obtenido**

'No, gracias' cierra el modal; al volver al Home el navbar sigue en Calle Uno 23 y el Floating Cart en 1 unidad. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

---

### TC-B2C122-APP-004 - Verificar que la X del modal cierra sin aplicar el cambio

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- La dirección activa es Calle Uno 23, La Florida (tienda abastecedora A)
- El carro contiene 000000000000675191-UN

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- Calle Uno 23, La Florida = Casa
- A. Las Conder 14791, Lo Barnechea = TBD
- 000000000000675191-UN = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Algunos productos podrían agotarse".
7. El usuario toca la X del modal.

**Resultado esperado**

El modal se cierra, la dirección activa sigue siendo Calle Uno 23, La Florida y el carro no cambia.

**Resultado obtenido**

La X cierra el modal; al volver al Home el navbar sigue en Calle Uno 23 y el Floating Cart en 1 unidad. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

---

### TC-B2C122-APP-007 - Verificar que si todo está disponible y hay horarios el cambio se aplica y se mantiene la página

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- La dirección activa es Calle Uno 23, La Florida (tienda abastecedora A)
- El carro contiene 000000000000675191-UN
- 000000000000675191-UN tiene stock en la tienda abastecedora de A. Las Conder 14791, Lo Barnechea
- A. Las Conder 14791, Lo Barnechea tiene SLAs disponibles

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- Calle Uno 23, La Florida = Casa
- A. Las Conder 14791, Lo Barnechea = TBD
- 000000000000675191-UN = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Algunos productos podrían agotarse".
7. El usuario toca "Sí, continuar".

**Resultado esperado**

El modal se cierra, el Store Locator del header muestra A. Las Conder 14791, Lo Barnechea y el usuario permanece en la página desde donde abrió el modal.

**Resultado obtenido**

Tras 'Sí, continuar' el modal se cierra y el navbar muestra Avenida Las Condes 14791 en el Home. Como invitado se abre antes el prompt 'Iniciar sesión o registrarse' (TC-009), que se cerró. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

---

### TC-B2C122-APP-009 - Verificar que tras el cambio el invitado ve el prompt de login y puede seguir como invitado

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- La dirección activa es Calle Uno 23, La Florida (tienda abastecedora A)
- El carro contiene 000000000000675191-UN

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- Calle Uno 23, La Florida = Casa
- A. Las Conder 14791, Lo Barnechea = TBD
- 000000000000675191-UN = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Algunos productos podrían agotarse".
7. El usuario toca "Sí, continuar".
8. El sistema muestra el prompt de inicio de sesión.
9. El usuario cierra el prompt sin iniciar sesión.

**Resultado esperado**

Se muestra el prompt de inicio de sesión y, al cerrarlo, el usuario sigue como invitado con A. Las Conder 14791, Lo Barnechea seteada.

**Resultado obtenido**

Tras 'Sí, continuar' aparece 'Iniciar sesión o registrarse'; al cerrarlo el navbar muestra Avenida Las Condes 14791 y Mi cuenta sigue ofreciendo 'Iniciar sesión' (invitado). Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

---

### TC-B2C122-APP-011 - Verificar que el modal también aparece al cambiar la tienda de retiro con carro

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN
- La tienda abastecedora de Unimarc Las Condes es distinta a la activa
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- Unimarc Las Condes = TBD
- 000000000000675191-UN = 000000000000675191-UN
- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El usuario toca la pestaña "Retiro en tienda".
5. El usuario selecciona la tienda Unimarc Las Condes y toca "Confirmar tienda".
6. El sistema muestra el modal "Autenticación requerida" y envía el código OTP al correo.
7. El usuario ingresa el código OTP recibido y presiona "Continuar".

**Resultado esperado**

Se muestra el modal "Algunos productos podrían agotarse" antes de aplicar el cambio de tienda de retiro.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: el caso exige la cuenta con un carro que contiene 000000000000675191-UN y una tienda de retiro abastecedora distinta a la activa; con la cuenta de prueba (tienda activa Las Condes) 000000000000675191-UN figura 'Pronto disponible' con 'Ver similares' (sin stock) y no se puede agregar, y {Unimarc Las Condes} no se declara como tienda de otra abastecedora. Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta y declarar la tienda de retiro del caso.

**Evidencia**

![Android · Paso 2 — sku pronto disponible con sesion](<B2C-122 Evidencias/TC-B2C122-APP-011-android-p02-sku-pronto-disponible-con-sesion.png>)

---

### TC-B2C122-APP-012 - Verificar que tras cerrar el modal con «No, gracias» o X el cliente regresa al Store Locator sin cambios

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- La dirección activa es Calle Uno 23, La Florida (tienda abastecedora A)
- El carro contiene 000000000000675191-UN

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- Calle Uno 23, La Florida = Casa
- A. Las Conder 14791, Lo Barnechea = TBD
- 000000000000675191-UN = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Algunos productos podrían agotarse".
7. El usuario toca "No, gracias".
8. Verificar que el modal "Algunos productos podrían agotarse" se cierra.
9. Verificar que el Store Locator permanece abierto (el usuario sigue en la pantalla de selección de dirección).
10. Verificar que la dirección activa en el navbar sigue siendo Calle Uno 23, La Florida.
11. Repetir pasos 6–10 usando el ícono X en lugar de "No, gracias".

**Resultado esperado**

Al cerrar con «No, gracias» o X: el modal "No se te escapen" se cierra, el Store Locator permanece abierto en el estado previo (pantalla anterior), la dirección activa en el navbar sigue siendo Calle Uno 23, La Florida y el carro mantiene 000000000000675191-UN sin modificaciones.

**Resultado obtenido**

Con 'No, gracias' y con la X el modal se cierra y queda abierta 'Detalles de la dirección' (pantalla anterior del Store Locator); el navbar sigue en Calle Uno 23 y el carro en 1 unidad. El modal se titula 'Algunos productos podrían agotarse', no 'No se te escapen' como dice el esperado. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

---

### TC-B2C122-APP-010 - Verificar que un invitado que inicia sesión desde el prompt pasa al flujo invitado a logueado

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- La dirección activa es Calle Uno 23, La Florida (tienda abastecedora A)
- El carro contiene 000000000000675191-UN
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- Calle Uno 23, La Florida = Casa
- A. Las Conder 14791, Lo Barnechea = TBD
- 000000000000675191-UN = 000000000000675191-UN
- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Algunos productos podrían agotarse".
7. El usuario toca "Sí, continuar".
8. El sistema muestra el prompt de inicio de sesión.
9. El usuario inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.

**Resultado esperado**

Se activa la transición invitado → logueado (B2C-124): se solicita OTP para confirmar la dirección heredada.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa (ambiente): el caso parte de un invitado con carro en la Home; desde el 27-oct la Home publica un componente con contador regresivo y carruseles que se actualizan sin pausa (captura) y uiautomator no logra volcarla («no XML content found in uiautomator dump»): la corrida llegó a armar la precondición y falló al leer la pantalla antes de abrir el prompt de inicio de sesión. No es un resultado del producto. Acción: repetir cuando la Home no tenga el contador animado.

**Evidencia**

![Android · Paso 2 — home con contador que impide el volcado](<B2C-122 Evidencias/TC-B2C122-APP-010-android-p02-home-con-contador-que-impide-el-volcado.png>)

---

<!-- qa-evidence-state
{
 "header": {
  "browsers": {
   "desktop": "chromium",
   "mobile": "chromium"
  },
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "devices": {
   "android": "Pixel 6 · Android 14 (emulador)"
  },
  "environment": "App Unimarc v1.0.1 (DEV)",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-122",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-122 APP Test Cases.xlsx",
  "title": "B2C-122 APP",
  "updated_at": "2026-10-27"
 },
 "history": {
  "2026-10-19": [
   "TC-B2C122-M-010",
   "TC-B2C122-M-011"
  ],
  "2026-10-20": [
   "TC-B2C122-D-001",
   "TC-B2C122-D-002",
   "TC-B2C122-D-003",
   "TC-B2C122-D-008",
   "TC-B2C122-D-010",
   "TC-B2C122-D-011",
   "TC-B2C122-M-002",
   "TC-B2C122-M-008",
   "TC-B2C122-M-010",
   "TC-B2C122-M-011"
  ],
  "2026-10-26": [
   "TC-B2C122-APP-001",
   "TC-B2C122-APP-003",
   "TC-B2C122-APP-004",
   "TC-B2C122-APP-007",
   "TC-B2C122-APP-009",
   "TC-B2C122-APP-012"
  ],
  "2026-10-27": [
   "TC-B2C122-APP-010",
   "TC-B2C122-APP-011"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se activa la transición invitado → logueado (B2C-124): se solicita OTP para confirmar la dirección heredada.",
   "form_factor": "mobile",
   "id": "TC-B2C122-M-010",
   "name": "Verificar que un invitado que inicia sesión desde el prompt pasa al flujo invitado a logueado [Mobile] [Guest]",
   "observation": "Esperado: tras 'Sí, continuar' se muestra el prompt de inicio de sesión y, al iniciar sesión con {USER_AUTH_001}, se solicita el OTP (transición invitado → logueado, B2C-124). Obtenido: la dirección se aplica (header 'Avenida Las Condes…') y no aparece ningún prompt de inicio de sesión; el usuario sigue como invitado. tests/B2C-122.spec.ts (D/M-010). Bug: B2C-1198.",
   "observed": "Esperado: tras 'Sí, continuar' se muestra el prompt de inicio de sesión y, al iniciar sesión con {USER_AUTH_001}, se solicita el OTP (transición invitado → logueado, B2C-124). Obtenido: la dirección se aplica (header 'Avenida Las Condes…') y no aparece ningún prompt de inicio de sesión; el usuario sigue como invitado. tests/B2C-122.spec.ts (D/M-010). Bug: B2C-1198.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- La dirección activa es {DIRECCION_DESPACHO_001} (tienda abastecedora A)\n- El carro contiene {SKU_VALID_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Paso 2 — home con la direccion activa",
     "file": "TC-B2C122-M-010-p02-home-con-la-direccion-activa.png"
    },
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C122-M-010-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — modal algunos productos podrian agotarse",
     "file": "TC-B2C122-M-010-p06-modal-algunos-productos-podrian-agotarse.png"
    },
    {
     "caption": "TC B2C122 M 010 ppre direccion activa y carro con el sku",
     "file": "TC-B2C122-M-010-ppre-direccion-activa-y-carro-con-el-sku.png"
    },
    {
     "caption": "Estado al fallar la aserción",
     "file": "TC-B2C122-M-010.png"
    }
   ],
   "spec": "tests/B2C-122.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Algunos productos podrían agotarse\".\n7. El usuario toca \"Sí, continuar\".\n8. El sistema muestra el prompt de inicio de sesión.\n9. El usuario inicia sesión con la cuenta {USER_AUTH_001}.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{DIRECCION_OTRA_TIENDA} = A. Las Conder 14791, Lo Barnechea\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se muestra el modal \"Algunos productos podrían agotarse\" antes de aplicar el cambio de tienda de retiro.",
   "form_factor": "mobile",
   "id": "TC-B2C122-M-011",
   "name": "Verificar que el modal también aparece al cambiar la tienda de retiro con carro [Mobile] [Logueado]",
   "observed": "Con sesión iniciada con {USER_AUTH_001} y el carro con {SKU_VALID_001}, al elegir Unimarc Las Condes en 'Retiro en tienda' y 'Confirmar tienda' se muestra 'Algunos productos podrían agotarse' con su texto antes de aplicar el cambio; se cerró con 'No, gracias' sin aplicar el cambio.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001}\n- La tienda abastecedora de {TIENDA_RETIRO_001} es distinta a la activa\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Paso 2 — home con sesion iniciada",
     "file": "TC-B2C122-M-011-p02-home-con-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — pestana retiro en tienda",
     "file": "TC-B2C122-M-011-p04-pestana-retiro-en-tienda.png"
    },
    {
     "caption": "Paso 8 — modal algunos productos podrian agotarse",
     "file": "TC-B2C122-M-011-p08-modal-algunos-productos-podrian-agotarse.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C122-M-011.png"
    }
   ],
   "spec": "tests/B2C-122.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El usuario toca la pestaña \"Retiro en tienda\".\n5. El usuario selecciona la tienda {TIENDA_RETIRO_001} y toca \"Confirmar tienda\".\n6. El sistema muestra el modal \"Autenticación requerida\" y envía el código OTP al correo.\n7. El usuario ingresa el código OTP recibido y presiona \"Continuar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_RETIRO_001} = Unimarc Las Condes\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se muestra el modal \"Algunos productos podrían agotarse\" con el texto \"Al cambiar la dirección o tipo de despacho, puede que algunos productos no se encuentren en esta ubicación o tienda. ¿Deseas continuar?\", los botones \"Sí, continuar\" y \"No, gracias\" y el ícono X.",
   "form_factor": "desktop",
   "id": "TC-B2C122-D-001",
   "name": "Verificar que al cambiar a una dirección de otra tienda abastecedora con carro aparece el modal [Desktop] [Guest]",
   "observation": "Ejecutado con la dirección activa que declara la fila, {DIRECCION_DESPACHO_003} (Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea); la precondición escrita dice {DIRECCION_DESPACHO_001}. Causa: con esa dirección activa, {DIRECCION_OTRA_TIENDA} (A. Las Condes 14791, Lo Barnechea) es atendida por la misma tienda: el cambio se aplica directo, sin el modal 'Algunos productos podrían agotarse'. La data declarada no cumple la precondición 'otra tienda abastecedora'. Acción: declarar una dirección activa y una 'otra tienda' que sean de tiendas distintas, y alinear la precondición.",
   "observed": "Ejecutado con la dirección activa que declara la fila, {DIRECCION_DESPACHO_003} (Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea); la precondición escrita dice {DIRECCION_DESPACHO_001}. Causa: con esa dirección activa, {DIRECCION_OTRA_TIENDA} (A. Las Condes 14791, Lo Barnechea) es atendida por la misma tienda: el cambio se aplica directo, sin el modal 'Algunos productos podrían agotarse'. La data declarada no cumple la precondición 'otra tienda abastecedora'. Acción: declarar una dirección activa y una 'otra tienda' que sean de tiendas distintas, y alinear la precondición.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- La dirección activa es {DIRECCION_DESPACHO_001} (tienda abastecedora A)\n- El carro contiene {SKU_VALID_001}",
   "screenshots": [
    {
     "caption": "Estado tras confirmar la dirección (impedimento de data)",
     "file": "TC-B2C122-D-001.png"
    }
   ],
   "spec": "tests/B2C-122.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El sistema muestra el modal \"Algunos productos podrían agotarse\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea\n{DIRECCION_OTRA_TIENDA} = A. Las Conder 14791, Lo Barnechea\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "No se muestra el modal y el Store Locator queda con {DIRECCION_MISMA_TIENDA}.",
   "form_factor": "desktop",
   "id": "TC-B2C122-D-002",
   "name": "Verificar que si la nueva dirección usa la misma tienda abastecedora el cambio se aplica sin modal [Desktop] [Guest]",
   "observation": "Ejecutado con la dirección activa que declara la fila, {DIRECCION_DESPACHO_003} (Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea); la precondición escrita dice {DIRECCION_DESPACHO_001}. Causa: con esa dirección activa, {DIRECCION_MISMA_TIENDA} (Gral. José Artigas 3250, Ñuñoa) es de otra tienda: aparece el modal 'Algunos productos podrían agotarse'. La data declarada no cumple la precondición 'misma tienda abastecedora'. Acción: declarar una dirección de la misma tienda que la dirección activa, y alinear la precondición.",
   "observed": "Ejecutado con la dirección activa que declara la fila, {DIRECCION_DESPACHO_003} (Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea); la precondición escrita dice {DIRECCION_DESPACHO_001}. Causa: con esa dirección activa, {DIRECCION_MISMA_TIENDA} (Gral. José Artigas 3250, Ñuñoa) es de otra tienda: aparece el modal 'Algunos productos podrían agotarse'. La data declarada no cumple la precondición 'misma tienda abastecedora'. Acción: declarar una dirección de la misma tienda que la dirección activa, y alinear la precondición.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- La dirección activa es {DIRECCION_DESPACHO_001} (tienda abastecedora A)\n- El carro contiene {SKU_VALID_001}\n- {DIRECCION_MISMA_TIENDA} es atendida por la misma tienda abastecedora que {DIRECCION_DESPACHO_001}",
   "screenshots": [
    {
     "caption": "Estado tras confirmar la dirección (impedimento de data)",
     "file": "TC-B2C122-D-002.png"
    }
   ],
   "spec": "tests/B2C-122.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_MISMA_TIENDA}, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea\n{DIRECCION_MISMA_TIENDA} = Gral. José Artigas 3250, Ñuñoa\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El modal se cierra, la dirección activa sigue siendo {DIRECCION_DESPACHO_001} y el carro mantiene {SKU_VALID_001}.",
   "form_factor": "desktop",
   "id": "TC-B2C122-D-003",
   "name": "Verificar que No, gracias cierra el modal sin aplicar el cambio [Desktop] [Guest]",
   "observation": "Ejecutado con la dirección activa que declara la fila, {DIRECCION_DESPACHO_003} (Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea); la precondición escrita dice {DIRECCION_DESPACHO_001}. Causa: con esa dirección activa, {DIRECCION_OTRA_TIENDA} (A. Las Condes 14791, Lo Barnechea) es atendida por la misma tienda: el cambio se aplica directo, sin el modal 'Algunos productos podrían agotarse'. La data declarada no cumple la precondición 'otra tienda abastecedora'. Acción: declarar una dirección activa y una 'otra tienda' que sean de tiendas distintas, y alinear la precondición.",
   "observed": "Ejecutado con la dirección activa que declara la fila, {DIRECCION_DESPACHO_003} (Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea); la precondición escrita dice {DIRECCION_DESPACHO_001}. Causa: con esa dirección activa, {DIRECCION_OTRA_TIENDA} (A. Las Condes 14791, Lo Barnechea) es atendida por la misma tienda: el cambio se aplica directo, sin el modal 'Algunos productos podrían agotarse'. La data declarada no cumple la precondición 'otra tienda abastecedora'. Acción: declarar una dirección activa y una 'otra tienda' que sean de tiendas distintas, y alinear la precondición.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- La dirección activa es {DIRECCION_DESPACHO_001} (tienda abastecedora A)\n- El carro contiene {SKU_VALID_001}",
   "screenshots": [
    {
     "caption": "Estado tras confirmar la dirección (impedimento de data)",
     "file": "TC-B2C122-D-003.png"
    }
   ],
   "spec": "tests/B2C-122.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El sistema muestra el modal \"Algunos productos podrían agotarse\".\n7. El usuario hace clic en \"No, gracias\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea\n{DIRECCION_OTRA_TIENDA} = A. Las Conder 14791, Lo Barnechea\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se activa el flujo de productos no disponibles de B2C-126 para {SKU_STOCK_SOLO_TIENDA_A}.",
   "form_factor": "desktop",
   "id": "TC-B2C122-D-008",
   "name": "Verificar que si hay productos no disponibles en la nueva tienda se activa ese flujo [Desktop] [Guest]",
   "observation": "Causa: {SKU_STOCK_SOLO_TIENDA_A} está en TBD en el Excel de data. Acción: cargar un SKU con stock solo en la tienda A.",
   "observed": "Causa: {SKU_STOCK_SOLO_TIENDA_A} está en TBD en el Excel de data. Acción: cargar un SKU con stock solo en la tienda A.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- La dirección activa es {DIRECCION_DESPACHO_001} (tienda abastecedora A)\n- El carro contiene {SKU_VALID_001}\n- El carro también contiene {SKU_STOCK_SOLO_TIENDA_A}, sin stock en la tienda de {DIRECCION_OTRA_TIENDA}",
   "spec": "tests/B2C-122.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El sistema muestra el modal \"Algunos productos podrían agotarse\".\n7. El usuario hace clic en \"Sí, continuar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{DIRECCION_OTRA_TIENDA} = A. Las Conder 14791, Lo Barnechea\n{SKU_STOCK_SOLO_TIENDA_A} = None\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se activa la transición invitado → logueado (B2C-124): se solicita OTP para confirmar la dirección heredada.",
   "form_factor": "desktop",
   "id": "TC-B2C122-D-010",
   "name": "Verificar que un invitado que inicia sesión desde el prompt pasa al flujo invitado a logueado [Desktop] [Guest]",
   "observation": "Esperado: tras 'Sí, continuar' se muestra el prompt de inicio de sesión y, al iniciar sesión con {USER_AUTH_001}, se solicita el OTP (transición invitado → logueado, B2C-124). Obtenido: la dirección se aplica (header 'Avenida Las Condes…') y no aparece ningún prompt de inicio de sesión; el usuario sigue como invitado. tests/B2C-122.spec.ts (D/M-010). En la re-ejecución del mismo día el modal quedó procesando «Sí, continuar» más de 45 s sin cerrarse. Bug: B2C-1198.",
   "observed": "Esperado: tras 'Sí, continuar' se muestra el prompt de inicio de sesión y, al iniciar sesión con {USER_AUTH_001}, se solicita el OTP (transición invitado → logueado, B2C-124). Obtenido: la dirección se aplica (header 'Avenida Las Condes…') y no aparece ningún prompt de inicio de sesión; el usuario sigue como invitado. tests/B2C-122.spec.ts (D/M-010). En la re-ejecución del mismo día el modal quedó procesando «Sí, continuar» más de 45 s sin cerrarse. Bug: B2C-1198.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- La dirección activa es {DIRECCION_DESPACHO_001} (tienda abastecedora A)\n- El carro contiene {SKU_VALID_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Paso 2 — home con la direccion activa",
     "file": "TC-B2C122-D-010-p02-home-con-la-direccion-activa.png"
    },
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C122-D-010-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — modal algunos productos podrian agotarse",
     "file": "TC-B2C122-D-010-p06-modal-algunos-productos-podrian-agotarse.png"
    },
    {
     "caption": "TC B2C122 D 010 ppre direccion activa y carro con el sku",
     "file": "TC-B2C122-D-010-ppre-direccion-activa-y-carro-con-el-sku.png"
    },
    {
     "caption": "Estado al fallar la aserción",
     "file": "TC-B2C122-D-010.png"
    }
   ],
   "spec": "tests/B2C-122.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El sistema muestra el modal \"Algunos productos podrían agotarse\".\n7. El usuario hace clic en \"Sí, continuar\".\n8. El sistema muestra el prompt de inicio de sesión.\n9. El usuario inicia sesión con la cuenta {USER_AUTH_001}.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{DIRECCION_OTRA_TIENDA} = A. Las Conder 14791, Lo Barnechea\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se muestra el modal \"Algunos productos podrían agotarse\" antes de aplicar el cambio de tienda de retiro.",
   "form_factor": "desktop",
   "id": "TC-B2C122-D-011",
   "name": "Verificar que el modal también aparece al cambiar la tienda de retiro con carro [Desktop] [Logueado]",
   "observed": "Con sesión iniciada con {USER_AUTH_001} y el carro con {SKU_VALID_001}, al elegir Unimarc Las Condes en 'Retiro en tienda' y 'Confirmar tienda' se muestra 'Algunos productos podrían agotarse' con su texto antes de aplicar el cambio; se cerró con 'No, gracias' sin aplicar el cambio.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001}\n- La tienda abastecedora de {TIENDA_RETIRO_001} es distinta a la activa\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Paso 2 — home con sesion iniciada",
     "file": "TC-B2C122-D-011-p02-home-con-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — pestana retiro en tienda",
     "file": "TC-B2C122-D-011-p04-pestana-retiro-en-tienda.png"
    },
    {
     "caption": "Paso 8 — modal algunos productos podrian agotarse",
     "file": "TC-B2C122-D-011-p08-modal-algunos-productos-podrian-agotarse.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C122-D-011.png"
    }
   ],
   "spec": "tests/B2C-122.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El usuario hace clic en la pestaña \"Retiro en tienda\".\n5. El usuario selecciona la tienda {TIENDA_RETIRO_001} y hace clic en \"Confirmar tienda\".\n6. El sistema muestra el modal \"Autenticación requerida\" y envía el código OTP al correo.\n7. El usuario ingresa el código OTP recibido y presiona \"Continuar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_RETIRO_001} = Unimarc Las Condes\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "No se muestra el modal y el Store Locator queda con {DIRECCION_MISMA_TIENDA}.",
   "form_factor": "mobile",
   "id": "TC-B2C122-M-002",
   "name": "Verificar que si la nueva dirección usa la misma tienda abastecedora el cambio se aplica sin modal [Mobile] [Guest]",
   "observation": "Ejecutado con la dirección activa que declara la fila, {DIRECCION_DESPACHO_003} (Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea); la precondición escrita dice {DIRECCION_DESPACHO_001}. Causa: con esa dirección activa, {DIRECCION_MISMA_TIENDA} (Gral. José Artigas 3250, Ñuñoa) es de otra tienda: aparece el modal 'Algunos productos podrían agotarse'. La data declarada no cumple la precondición 'misma tienda abastecedora'. Acción: declarar una dirección de la misma tienda que la dirección activa, y alinear la precondición.",
   "observed": "Ejecutado con la dirección activa que declara la fila, {DIRECCION_DESPACHO_003} (Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea); la precondición escrita dice {DIRECCION_DESPACHO_001}. Causa: con esa dirección activa, {DIRECCION_MISMA_TIENDA} (Gral. José Artigas 3250, Ñuñoa) es de otra tienda: aparece el modal 'Algunos productos podrían agotarse'. La data declarada no cumple la precondición 'misma tienda abastecedora'. Acción: declarar una dirección de la misma tienda que la dirección activa, y alinear la precondición.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- La dirección activa es {DIRECCION_DESPACHO_001} (tienda abastecedora A)\n- El carro contiene {SKU_VALID_001}\n- {DIRECCION_MISMA_TIENDA} es atendida por la misma tienda abastecedora que {DIRECCION_DESPACHO_001}",
   "screenshots": [
    {
     "caption": "Estado tras confirmar la dirección (impedimento de data)",
     "file": "TC-B2C122-M-002.png"
    }
   ],
   "spec": "tests/B2C-122.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_MISMA_TIENDA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea\n{DIRECCION_MISMA_TIENDA} = Gral. José Artigas 3250, Ñuñoa\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se activa el flujo de productos no disponibles de B2C-126 para {SKU_STOCK_SOLO_TIENDA_A}.",
   "form_factor": "mobile",
   "id": "TC-B2C122-M-008",
   "name": "Verificar que si hay productos no disponibles en la nueva tienda se activa ese flujo [Mobile] [Guest]",
   "observation": "Causa: {SKU_STOCK_SOLO_TIENDA_A} está en TBD en el Excel de data. Acción: cargar un SKU con stock solo en la tienda A.",
   "observed": "Causa: {SKU_STOCK_SOLO_TIENDA_A} está en TBD en el Excel de data. Acción: cargar un SKU con stock solo en la tienda A.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- La dirección activa es {DIRECCION_DESPACHO_001} (tienda abastecedora A)\n- El carro contiene {SKU_VALID_001}\n- El carro también contiene {SKU_STOCK_SOLO_TIENDA_A}, sin stock en la tienda de {DIRECCION_OTRA_TIENDA}",
   "spec": "tests/B2C-122.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Algunos productos podrían agotarse\".\n7. El usuario toca \"Sí, continuar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{DIRECCION_OTRA_TIENDA} = A. Las Conder 14791, Lo Barnechea\n{SKU_STOCK_SOLO_TIENDA_A} = None\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se muestra el modal \"Algunos productos podrían agotarse\" con el texto \"Al cambiar la dirección o tipo de despacho, puede que algunos productos no se encuentren en esta ubicación o tienda. ¿Deseas continuar?\", los botones \"Sí, continuar\" y \"No, gracias\" y el ícono X.",
   "form_factor": "app",
   "id": "TC-B2C122-APP-001",
   "name": "Verificar que al cambiar a una dirección de otra tienda abastecedora con carro aparece el modal",
   "observed": "Al confirmar Avenida Las Condes 14791, Lo Barnechea (sugerencia de Google para A. Las Conder 14791, Lo Barnechea='A. Las Conder 14791, Lo Barnechea') con el carro cargado se abre 'Algunos productos podrían agotarse' con el texto esperado, 'Sí, continuar', 'No, gracias' y la X. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- La dirección activa es Calle Uno 23, La Florida (tienda abastecedora A)\n- El carro contiene 000000000000675191-UN",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Algunos productos podrían agotarse\".",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- Calle Uno 23, La Florida = Casa\n- A. Las Conder 14791, Lo Barnechea = TBD\n- 000000000000675191-UN = 000000000000675191-UN"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El modal se cierra, la dirección activa sigue siendo Calle Uno 23, La Florida y el carro mantiene 000000000000675191-UN.",
   "form_factor": "app",
   "id": "TC-B2C122-APP-003",
   "name": "Verificar que No, gracias cierra el modal sin aplicar el cambio",
   "observed": "'No, gracias' cierra el modal; al volver al Home el navbar sigue en Calle Uno 23 y el Floating Cart en 1 unidad. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- La dirección activa es Calle Uno 23, La Florida (tienda abastecedora A)\n- El carro contiene 000000000000675191-UN",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Algunos productos podrían agotarse\".\n7. El usuario toca \"No, gracias\".",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- Calle Uno 23, La Florida = Casa\n- A. Las Conder 14791, Lo Barnechea = TBD\n- 000000000000675191-UN = 000000000000675191-UN"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El modal se cierra, la dirección activa sigue siendo Calle Uno 23, La Florida y el carro no cambia.",
   "form_factor": "app",
   "id": "TC-B2C122-APP-004",
   "name": "Verificar que la X del modal cierra sin aplicar el cambio",
   "observed": "La X cierra el modal; al volver al Home el navbar sigue en Calle Uno 23 y el Floating Cart en 1 unidad. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- La dirección activa es Calle Uno 23, La Florida (tienda abastecedora A)\n- El carro contiene 000000000000675191-UN",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Algunos productos podrían agotarse\".\n7. El usuario toca la X del modal.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- Calle Uno 23, La Florida = Casa\n- A. Las Conder 14791, Lo Barnechea = TBD\n- 000000000000675191-UN = 000000000000675191-UN"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El modal se cierra, el Store Locator del header muestra A. Las Conder 14791, Lo Barnechea y el usuario permanece en la página desde donde abrió el modal.",
   "form_factor": "app",
   "id": "TC-B2C122-APP-007",
   "name": "Verificar que si todo está disponible y hay horarios el cambio se aplica y se mantiene la página",
   "observed": "Tras 'Sí, continuar' el modal se cierra y el navbar muestra Avenida Las Condes 14791 en el Home. Como invitado se abre antes el prompt 'Iniciar sesión o registrarse' (TC-009), que se cerró. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- La dirección activa es Calle Uno 23, La Florida (tienda abastecedora A)\n- El carro contiene 000000000000675191-UN\n- 000000000000675191-UN tiene stock en la tienda abastecedora de A. Las Conder 14791, Lo Barnechea\n- A. Las Conder 14791, Lo Barnechea tiene SLAs disponibles",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Algunos productos podrían agotarse\".\n7. El usuario toca \"Sí, continuar\".",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- Calle Uno 23, La Florida = Casa\n- A. Las Conder 14791, Lo Barnechea = TBD\n- 000000000000675191-UN = 000000000000675191-UN"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se muestra el prompt de inicio de sesión y, al cerrarlo, el usuario sigue como invitado con A. Las Conder 14791, Lo Barnechea seteada.",
   "form_factor": "app",
   "id": "TC-B2C122-APP-009",
   "name": "Verificar que tras el cambio el invitado ve el prompt de login y puede seguir como invitado",
   "observed": "Tras 'Sí, continuar' aparece 'Iniciar sesión o registrarse'; al cerrarlo el navbar muestra Avenida Las Condes 14791 y Mi cuenta sigue ofreciendo 'Iniciar sesión' (invitado). Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- La dirección activa es Calle Uno 23, La Florida (tienda abastecedora A)\n- El carro contiene 000000000000675191-UN",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Algunos productos podrían agotarse\".\n7. El usuario toca \"Sí, continuar\".\n8. El sistema muestra el prompt de inicio de sesión.\n9. El usuario cierra el prompt sin iniciar sesión.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- Calle Uno 23, La Florida = Casa\n- A. Las Conder 14791, Lo Barnechea = TBD\n- 000000000000675191-UN = 000000000000675191-UN"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Se muestra el modal \"Algunos productos podrían agotarse\" antes de aplicar el cambio de tienda de retiro.",
   "form_factor": "app",
   "id": "TC-B2C122-APP-011",
   "name": "Verificar que el modal también aparece al cambiar la tienda de retiro con carro",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: el caso exige la cuenta con un carro que contiene 000000000000675191-UN y una tienda de retiro abastecedora distinta a la activa; con la cuenta de prueba (tienda activa Las Condes) 000000000000675191-UN figura 'Pronto disponible' con 'Ver similares' (sin stock) y no se puede agregar, y {Unimarc Las Condes} no se declara como tienda de otra abastecedora. Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta y declarar la tienda de retiro del caso.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN\n- La tienda abastecedora de Unimarc Las Condes es distinta a la activa\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — sku pronto disponible con sesion",
     "file": "TC-B2C122-APP-011-android-p02-sku-pronto-disponible-con-sesion.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El usuario toca la pestaña \"Retiro en tienda\".\n5. El usuario selecciona la tienda Unimarc Las Condes y toca \"Confirmar tienda\".\n6. El sistema muestra el modal \"Autenticación requerida\" y envía el código OTP al correo.\n7. El usuario ingresa el código OTP recibido y presiona \"Continuar\".",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- Unimarc Las Condes = TBD\n- 000000000000675191-UN = 000000000000675191-UN\n- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Al cerrar con «No, gracias» o X: el modal \"No se te escapen\" se cierra, el Store Locator permanece abierto en el estado previo (pantalla anterior), la dirección activa en el navbar sigue siendo Calle Uno 23, La Florida y el carro mantiene 000000000000675191-UN sin modificaciones.",
   "form_factor": "app",
   "id": "TC-B2C122-APP-012",
   "name": "Verificar que tras cerrar el modal con «No, gracias» o X el cliente regresa al Store Locator sin cambios",
   "observed": "Con 'No, gracias' y con la X el modal se cierra y queda abierta 'Detalles de la dirección' (pantalla anterior del Store Locator); el navbar sigue en Calle Uno 23 y el carro en 1 unidad. El modal se titula 'Algunos productos podrían agotarse', no 'No se te escapen' como dice el esperado. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- La dirección activa es Calle Uno 23, La Florida (tienda abastecedora A)\n- El carro contiene 000000000000675191-UN",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Algunos productos podrían agotarse\".\n7. El usuario toca \"No, gracias\".\n8. Verificar que el modal \"Algunos productos podrían agotarse\" se cierra.\n9. Verificar que el Store Locator permanece abierto (el usuario sigue en la pantalla de selección de dirección).\n10. Verificar que la dirección activa en el navbar sigue siendo Calle Uno 23, La Florida.\n11. Repetir pasos 6–10 usando el ícono X en lugar de \"No, gracias\".",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- Calle Uno 23, La Florida = Casa\n- A. Las Conder 14791, Lo Barnechea = TBD\n- 000000000000675191-UN = 000000000000675191-UN"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Se activa la transición invitado → logueado (B2C-124): se solicita OTP para confirmar la dirección heredada.",
   "form_factor": "app",
   "id": "TC-B2C122-APP-010",
   "name": "Verificar que un invitado que inicia sesión desde el prompt pasa al flujo invitado a logueado",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa (ambiente): el caso parte de un invitado con carro en la Home; desde el 27-oct la Home publica un componente con contador regresivo y carruseles que se actualizan sin pausa (captura) y uiautomator no logra volcarla («no XML content found in uiautomator dump»): la corrida llegó a armar la precondición y falló al leer la pantalla antes de abrir el prompt de inicio de sesión. No es un resultado del producto. Acción: repetir cuando la Home no tenga el contador animado.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- La dirección activa es Calle Uno 23, La Florida (tienda abastecedora A)\n- El carro contiene 000000000000675191-UN\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home con contador que impide el volcado",
     "file": "TC-B2C122-APP-010-android-p02-home-con-contador-que-impide-el-volcado.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Algunos productos podrían agotarse\".\n7. El usuario toca \"Sí, continuar\".\n8. El sistema muestra el prompt de inicio de sesión.\n9. El usuario inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- Calle Uno 23, La Florida = Casa\n- A. Las Conder 14791, Lo Barnechea = TBD\n- 000000000000675191-UN = 000000000000675191-UN\n- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com"
  }
 ]
}
-->
