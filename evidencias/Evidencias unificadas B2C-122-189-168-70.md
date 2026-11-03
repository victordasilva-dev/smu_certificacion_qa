# Evidencias QA unificadas - B2C-122, B2C-189, B2C-168, B2C-70 (Web)

Fecha: 2026-10-19 · Ejecutado por: Daniel Uñuruco · Ambiente: DEV (Unimarc)

## Resumen de la ejecución

| HU | Casos | Resultado |
|---|---|---|
| B2C-122 | 2 | 1 Aprobado, 1 Rechazado (M-010, bug B2C-1198) |
| B2C-189 | 10 | 1 Aprobado, 9 Bloqueado Data |
| B2C-168 | 17 | 7 Aprobado, 9 Bloqueado Data, 1 Bloqueado (M-015) |
| B2C-70 | 6 | 1 Aprobado, 5 Bloqueado Data |
| **Total** | **35** | **10 Aprobado, 1 Rechazado, 23 Bloqueado Data, 1 Bloqueado** |

---

## B2C-122 - Modal "No se te escapen" - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-122 |
| Última actualización | 2026-10-19 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | webkit |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-122 Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

### Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 1 |
| Rechazado | 1 |
| **Total** | **2** |

### Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-19 | 2 | TC-B2C122-M-010, TC-B2C122-M-011 |

### Detalle por caso de prueba

#### TC-B2C122-M-010 - Verificar que un invitado que inicia sesión desde el prompt pasa al flujo invitado a logueado [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 179.9 s |
| Spec | tests/B2C-122.spec.ts:272 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- La dirección activa es Calle Uno 23, La Florida (tienda abastecedora A)
- El carro contiene 000000000000675191-UN
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{DIRECCION_OTRA_TIENDA} = A. Las Conder 14791, Lo Barnechea

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Algunos productos podrían agotarse".
7. El usuario toca "Sí, continuar".
8. El sistema muestra el prompt de inicio de sesión.
9. El usuario inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.

**Resultado esperado**

Se activa la transición invitado → logueado (B2C-124): se solicita OTP para confirmar la dirección heredada.

**Resultado obtenido**

Después de «Sí, continuar» el cambio de dirección se aplica (Avenida Las Condes 14791, carro con 1 producto) pero no aparece ningún prompt de inicio de sesión: el Home queda limpio y con 'Ingresa aquí'. Sin el prompt no se puede iniciar sesión desde ahí ni se llega a la solicitud de OTP.

**Observación**

Esperado: se activa la transición invitado → logueado (B2C-124) y se solicita OTP. Obtenido: tras «Sí, continuar» no aparece el prompt de inicio de sesión (paso 8), así que el flujo no continúa. Es el mismo defecto de TC-B2C122-M-009 y D-009. 2 de 2 intentos en esta corrida. tests/B2C-122.spec.ts:272. Bug: B2C-1198.

**Evidencia**

![Paso 2 — home con la direccion activa](<B2C-122 Evidencias/TC-B2C122-M-010-p02-home-con-la-direccion-activa.png>)

![Paso 4 — modal elige tu metodo de entrega](<B2C-122 Evidencias/TC-B2C122-M-010-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — modal algunos productos podrian agotarse](<B2C-122 Evidencias/TC-B2C122-M-010-p06-modal-algunos-productos-podrian-agotarse.png>)

![TC B2C122 M 010 ppre direccion activa y carro con el sku](<B2C-122 Evidencias/TC-B2C122-M-010-ppre-direccion-activa-y-carro-con-el-sku.png>)

![Estado tras «Sí, continuar»: sin prompt de inicio de sesión](<B2C-122 Evidencias/TC-B2C122-M-010.png>)

---

#### TC-B2C122-M-011 - Verificar que el modal también aparece al cambiar la tienda de retiro con carro [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 201.6 s |
| Spec | tests/B2C-122.spec.ts:298 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN
- La tienda abastecedora de Unimarc Las Condes es distinta a la activa
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_RETIRO_001} = Unimarc Las Condes

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El usuario toca la pestaña "Retiro en tienda".
5. El usuario selecciona la tienda Unimarc Las Condes y toca "Confirmar tienda".
6. El sistema muestra el modal "Autenticación requerida" y envía el código OTP al correo.
7. El usuario ingresa el código OTP recibido y presiona "Continuar".

**Resultado esperado**

Se muestra el modal "Algunos productos podrían agotarse" antes de aplicar el cambio de tienda de retiro.

**Resultado obtenido**

Con sesión iniciada y el carro con el SKU, al confirmar la tienda de retiro «Unimarc Las Condes» se muestra «Algunos productos podrían agotarse» antes de aplicar el cambio, con su texto completo. No se confirmó con «Sí»: se canceló con «No, gracias».

**Observación**

Con la sesión ya iniciada, el sitio no pidió el código OTP («Autenticación requerida») antes del modal, como describen los pasos 6 y 7: el modal apareció directamente tras «Confirmar tienda». Se cumple el resultado esperado.

**Evidencia**

![Paso 2 — home con sesion iniciada](<B2C-122 Evidencias/TC-B2C122-M-011-p02-home-con-sesion-iniciada.png>)

![Paso 4 — pestana retiro en tienda](<B2C-122 Evidencias/TC-B2C122-M-011-p04-pestana-retiro-en-tienda.png>)

![Paso 8 — modal algunos productos podrian agotarse](<B2C-122 Evidencias/TC-B2C122-M-011-p08-modal-algunos-productos-podrian-agotarse.png>)

![Estado final](<B2C-122 Evidencias/TC-B2C122-M-011.png>)

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
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-122",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-122 Test Cases.xlsx",
  "title": "B2C-122 - Modal \"No se te escapen\" - Evidencias QA",
  "updated_at": "2026-10-19"
 },
 "history": {
  "2026-10-19": [
   "TC-B2C122-M-010",
   "TC-B2C122-M-011"
  ]
 },
 "results": [
  {
   "browser": "webkit",
   "duration_s": 179.9,
   "executed_at": "2026-10-19",
   "expected": "Se activa la transición invitado → logueado (B2C-124): se solicita OTP para confirmar la dirección heredada.",
   "form_factor": "mobile",
   "id": "TC-B2C122-M-010",
   "name": "Verificar que un invitado que inicia sesión desde el prompt pasa al flujo invitado a logueado [Mobile] [Guest]",
   "observation": "Esperado: se activa la transición invitado → logueado (B2C-124) y se solicita OTP. Obtenido: tras «Sí, continuar» no aparece el prompt de inicio de sesión (paso 8), así que el flujo no continúa. Es el mismo defecto de TC-B2C122-M-009 y D-009. 2 de 2 intentos en esta corrida. tests/B2C-122.spec.ts:272. Bug: B2C-1198.",
   "observed": "Después de «Sí, continuar» el cambio de dirección se aplica (Avenida Las Condes 14791, carro con 1 producto) pero no aparece ningún prompt de inicio de sesión: el Home queda limpio y con 'Ingresa aquí'. Sin el prompt no se puede iniciar sesión desde ahí ni se llega a la solicitud de OTP.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- La dirección activa es Calle Uno 23, La Florida (tienda abastecedora A)\n- El carro contiene 000000000000675191-UN\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
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
     "caption": "Estado tras «Sí, continuar»: sin prompt de inicio de sesión",
     "file": "TC-B2C122-M-010.png"
    }
   ],
   "spec": "tests/B2C-122.spec.ts:272",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Algunos productos podrían agotarse\".\n7. El usuario toca \"Sí, continuar\".\n8. El sistema muestra el prompt de inicio de sesión.\n9. El usuario inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{DIRECCION_OTRA_TIENDA} = A. Las Conder 14791, Lo Barnechea\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 201.6,
   "executed_at": "2026-10-19",
   "expected": "Se muestra el modal \"Algunos productos podrían agotarse\" antes de aplicar el cambio de tienda de retiro.",
   "form_factor": "mobile",
   "id": "TC-B2C122-M-011",
   "name": "Verificar que el modal también aparece al cambiar la tienda de retiro con carro [Mobile] [Logueado]",
   "observation": "Con la sesión ya iniciada, el sitio no pidió el código OTP («Autenticación requerida») antes del modal, como describen los pasos 6 y 7: el modal apareció directamente tras «Confirmar tienda». Se cumple el resultado esperado.",
   "observed": "Con sesión iniciada y el carro con el SKU, al confirmar la tienda de retiro «Unimarc Las Condes» se muestra «Algunos productos podrían agotarse» antes de aplicar el cambio, con su texto completo. No se confirmó con «Sí»: se canceló con «No, gracias».",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN\n- La tienda abastecedora de Unimarc Las Condes es distinta a la activa\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
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
   "spec": "tests/B2C-122.spec.ts:298",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El usuario toca la pestaña \"Retiro en tienda\".\n5. El usuario selecciona la tienda Unimarc Las Condes y toca \"Confirmar tienda\".\n6. El sistema muestra el modal \"Autenticación requerida\" y envía el código OTP al correo.\n7. El usuario ingresa el código OTP recibido y presiona \"Continuar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_RETIRO_001} = Unimarc Las Condes\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "390x844"
  }
 ]
}
-->


---

## B2C-189 - Mis Envíos: cambiar dirección o tienda - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-189 |
| Última actualización | 2026-10-19 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | webkit |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-189 WEB Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

### Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 23 |
| Aprobado | 11 |
| Rechazado | 2 |
| **Total** | **36** |

### Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-19 | 10 | TC-B2C189-D-007, TC-B2C189-D-008, TC-B2C189-D-015, TC-B2C189-D-016, TC-B2C189-D-017, TC-B2C189-D-018, TC-B2C189-M-007, TC-B2C189-M-015, TC-B2C189-M-016, TC-B2C189-M-018 |
| 2026-10-14 | 36 | TC-B2C189-D-001, TC-B2C189-D-002, TC-B2C189-D-003, TC-B2C189-D-004, TC-B2C189-D-005, TC-B2C189-D-006, TC-B2C189-D-007, TC-B2C189-D-008, TC-B2C189-D-009, TC-B2C189-D-010, TC-B2C189-D-011, TC-B2C189-D-012, TC-B2C189-D-013, TC-B2C189-D-014, TC-B2C189-D-015, TC-B2C189-D-016, TC-B2C189-D-017, TC-B2C189-D-018, TC-B2C189-M-001, TC-B2C189-M-002, TC-B2C189-M-003, TC-B2C189-M-004, TC-B2C189-M-005, TC-B2C189-M-006, TC-B2C189-M-007, TC-B2C189-M-008, TC-B2C189-M-009, TC-B2C189-M-010, TC-B2C189-M-011, TC-B2C189-M-012, TC-B2C189-M-013, TC-B2C189-M-014, TC-B2C189-M-015, TC-B2C189-M-016, TC-B2C189-M-017, TC-B2C189-M-018 |

### Detalle por caso de prueba

#### TC-B2C189-D-001 - Verificar que el ícono de la tarjeta de dirección abre el Store Locator de despacho [Desktop] [Logueado]

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

#### TC-B2C189-D-002 - Verificar que al cancelar el Store Locator Mis Envíos mantiene la dirección y la ventana [Desktop] [Logueado]

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

#### TC-B2C189-D-003 - Verificar que el ícono de la tarjeta de tienda abre el Store Locator de retiro [Desktop] [Logueado]

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

#### TC-B2C189-D-004 - Verificar que al cancelar el Store Locator Mis Envíos mantiene la tienda y la ventana [Desktop] [Logueado]

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

#### TC-B2C189-D-005 - Verificar que una nueva dirección con todo disponible actualiza la tarjeta y las ventanas [Desktop] [Logueado]

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

#### TC-B2C189-D-006 - Verificar que una nueva tienda con todo disponible actualiza la tarjeta y las ventanas [Desktop] [Logueado]

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

#### TC-B2C189-D-007 - Verificar que una nueva dirección con productos no disponibles activa el flujo de no disponibles [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000 y {SKU_STOCK_SOLO_TIENDA_A}
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- {SKU_STOCK_SOLO_TIENDA_A} no tiene stock en la tienda abastecedora de A. Las Conder 14791, Lo Barnechea
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{DIRECCION_OTRA_TIENDA} = A. Las Conder 14791, Lo Barnechea

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

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

**Resultado obtenido**

No se pudo ejecutar el caso con la data declarada.

**Observación**

Causa: {SKU_STOCK_SOLO_TIENDA_A} no tiene fila (o está en TBD) en el Excel de data. Acción: cargar un SKU con stock solo en la tienda abastecedora de origen.

---

#### TC-B2C189-D-008 - Verificar que tras resolver los productos no disponibles se redirige al carro [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000 y {SKU_STOCK_SOLO_TIENDA_A}
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- {SKU_STOCK_SOLO_TIENDA_A} no tiene stock en la tienda abastecedora de A. Las Conder 14791, Lo Barnechea
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{DIRECCION_OTRA_TIENDA} = A. Las Conder 14791, Lo Barnechea

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

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

**Resultado obtenido**

No se pudo ejecutar el caso con la data declarada.

**Observación**

Causa: {SKU_STOCK_SOLO_TIENDA_A} no tiene fila (o está en TBD) en el Excel de data. Acción: cargar un SKU con stock solo en la tienda abastecedora de origen.

---

#### TC-B2C189-D-009 - Verificar que si falla el servicio de ventanas tras el cambio se muestra el error ME-034 [Desktop] [Logueado]

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

#### TC-B2C189-D-010 - Verificar que Reintentar vuelve a consultar las ventanas de la nueva dirección [Desktop] [Logueado]

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

#### TC-B2C189-D-011 - Verificar que Volver al inicio desde el error ME-034 redirige al Home [Desktop] [Logueado]

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

#### TC-B2C189-D-012 - Verificar que una nueva dirección sin horarios muestra la pantalla Sin horarios disponibles [Desktop] [Logueado]

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

#### TC-B2C189-D-013 - Verificar que Cambiar dirección en Sin horarios disponibles vuelve a abrir el Store Locator [Desktop] [Logueado]

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

#### TC-B2C189-D-014 - Verificar que Volver al inicio desde Sin horarios disponibles redirige al Home [Desktop] [Logueado]

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

#### TC-B2C189-D-015 - Verificar que una dirección de la misma tienda abastecedora se actualiza sin validar productos [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000 y {SKU_STOCK_SOLO_TIENDA_A}
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- Gral. José Artigas 3250, Ñuñoa es atendida por la misma tienda abastecedora que Calle Uno 23, La Florida
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{DIRECCION_MISMA_TIENDA} = Gral. José Artigas 3250, Ñuñoa

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

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

Mis Envíos muestra {DIRECCION_MISMA_TIENDA} con sus ventanas recargadas, sin modal de productos no disponibles y con el carro intacto.

**Resultado obtenido**

No se pudo ejecutar el caso con la data declarada.

**Observación**

Causa: {SKU_STOCK_SOLO_TIENDA_A} no tiene fila (o está en TBD) en el Excel de data. Acción: cargar un SKU con stock solo en la tienda abastecedora de origen.

---

#### TC-B2C189-D-016 - Verificar que Mis Envíos mantiene su estado mientras el Store Locator completa parcialmente el flujo sin confirmar [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 71.8 s |
| Spec | tests/B2C-189.spec.ts:277 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{DIRECCION_DESPACHO} = Camino La Fuente 1589 Las Condes

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

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

Mis Envíos muestra {DIRECCION_DESPACHO_001}, la misma ventana seleccionada y el mismo subtotal anotados en el paso 5, sin ningún cambio producido por la interacción parcial en el Store Locator.

**Resultado obtenido**

Se cumple el resultado esperado.

**Observación**

Se escribió 'Camino La Fuente 1589 Las Condes' (Camino La Fuente 1589 Las Condes) en el buscador del Store Locator sin confirmarla y se cerró con la X: Mis Envíos conserva la dirección activa (Calle Uno 23, La Florida), la ventana seleccionada y el subtotal.

**Evidencia**

![Paso 2 — carro cargado](<B2C-189 Evidencias/TC-B2C189-D-016-p02-carro-cargado.png>)

![Paso 4 — mis envios despacho](<B2C-189 Evidencias/TC-B2C189-D-016-p04-mis-envios-despacho.png>)

![Paso 8 — direccion nueva escrita en el buscador sin confirmar](<B2C-189 Evidencias/TC-B2C189-D-016-p08-direccion-nueva-escrita-en-el-buscador-sin-confirmar.png>)

![Paso 11 — mis envios tras cerrar con la x](<B2C-189 Evidencias/TC-B2C189-D-016-p11-mis-envios-tras-cerrar-con-la-x.png>)

![Estado final](<B2C-189 Evidencias/TC-B2C189-D-016.png>)

---

#### TC-B2C189-D-017 - Verificar que la ventana seleccionada automáticamente tras el cambio cumple la regla de priorización de B2C-147 CA4 [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- 000000000000675191-UN tiene stock en la tienda abastecedora de A. Las Conder 14791, Lo Barnechea
- A. Las Conder 14791, Lo Barnechea tiene múltiples ventanas de entrega disponibles
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{DIRECCION_OTRA_TIENDA} = A. Las Conder 14791, Lo Barnechea

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

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

**Resultado obtenido**

No se pudo ejecutar el caso con la data declarada.

**Observación**

Causa: {VENTANA_ESPERADA_POR_REGLA} no tiene fila (o está en TBD) en el Excel de data. Acción: cargar la ventana que la regla de B2C-147 CA4 debe seleccionar para Calle Uno 23, La Florida.

---

#### TC-B2C189-D-018 - Verificar que una nueva tienda de retiro con producto no disponible activa el flujo de no disponibles [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000 y {SKU_STOCK_SOLO_TIENDA_A}
- Retiro en tienda configurado con Unimarc Las Condes
- {SKU_STOCK_SOLO_TIENDA_A} no tiene stock en Unimarc Los Trapenses
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_RETIRO_001} = Unimarc Las Condes

{TIENDA_RETIRO_002} = Unimarc Los Trapenses

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

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

**Resultado obtenido**

No se pudo ejecutar el caso con la data declarada.

**Observación**

Causa: {SKU_STOCK_SOLO_TIENDA_A} no tiene fila (o está en TBD) en el Excel de data. Acción: cargar un SKU con stock solo en la tienda abastecedora de origen.

---

#### TC-B2C189-M-001 - Verificar que el ícono de la tarjeta de dirección abre el Store Locator de despacho [Mobile] [Logueado]

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

#### TC-B2C189-M-002 - Verificar que al cancelar el Store Locator Mis Envíos mantiene la dirección y la ventana [Mobile] [Logueado]

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

#### TC-B2C189-M-003 - Verificar que el ícono de la tarjeta de tienda abre el Store Locator de retiro [Mobile] [Logueado]

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

#### TC-B2C189-M-004 - Verificar que al cancelar el Store Locator Mis Envíos mantiene la tienda y la ventana [Mobile] [Logueado]

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

#### TC-B2C189-M-005 - Verificar que una nueva dirección con todo disponible actualiza la tarjeta y las ventanas [Mobile] [Logueado]

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

#### TC-B2C189-M-006 - Verificar que una nueva tienda con todo disponible actualiza la tarjeta y las ventanas [Mobile] [Logueado]

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

#### TC-B2C189-M-007 - Verificar que una nueva dirección con productos no disponibles activa el flujo de no disponibles [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000 y {SKU_STOCK_SOLO_TIENDA_A}
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- {SKU_STOCK_SOLO_TIENDA_A} no tiene stock en la tienda abastecedora de A. Las Conder 14791, Lo Barnechea
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{DIRECCION_OTRA_TIENDA} = A. Las Conder 14791, Lo Barnechea

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

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

**Resultado obtenido**

No se pudo ejecutar el caso con la data declarada.

**Observación**

Causa: {SKU_STOCK_SOLO_TIENDA_A} no tiene fila (o está en TBD) en el Excel de data. Acción: cargar un SKU con stock solo en la tienda abastecedora de origen.

---

#### TC-B2C189-M-008 - Verificar que tras resolver los productos no disponibles se redirige al carro [Mobile] [Logueado]

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

#### TC-B2C189-M-009 - Verificar que si falla el servicio de ventanas tras el cambio se muestra el error ME-034 [Mobile] [Logueado]

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

#### TC-B2C189-M-010 - Verificar que Reintentar vuelve a consultar las ventanas de la nueva dirección [Mobile] [Logueado]

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

#### TC-B2C189-M-011 - Verificar que Volver al inicio desde el error ME-034 redirige al Home [Mobile] [Logueado]

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

#### TC-B2C189-M-012 - Verificar que una nueva dirección sin horarios muestra la pantalla Sin horarios disponibles [Mobile] [Logueado]

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

#### TC-B2C189-M-013 - Verificar que Cambiar dirección en Sin horarios disponibles vuelve a abrir el Store Locator [Mobile] [Logueado]

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

#### TC-B2C189-M-014 - Verificar que Volver al inicio desde Sin horarios disponibles redirige al Home [Mobile] [Logueado]

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

#### TC-B2C189-M-015 - Verificar que una dirección de la misma tienda abastecedora se actualiza sin validar productos [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000 y {SKU_STOCK_SOLO_TIENDA_A}
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- Gral. José Artigas 3250, Ñuñoa es atendida por la misma tienda abastecedora que Calle Uno 23, La Florida
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{DIRECCION_MISMA_TIENDA} = Gral. José Artigas 3250, Ñuñoa

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

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

Mis Envíos muestra {DIRECCION_MISMA_TIENDA} con sus ventanas recargadas, sin modal de productos no disponibles y con el carro intacto.

**Resultado obtenido**

No se pudo ejecutar el caso con la data declarada.

**Observación**

Causa: {SKU_STOCK_SOLO_TIENDA_A} no tiene fila (o está en TBD) en el Excel de data. Acción: cargar un SKU con stock solo en la tienda abastecedora de origen.

---

#### TC-B2C189-M-016 - Verificar que Mis Envíos mantiene su estado mientras el Store Locator completa parcialmente el flujo sin confirmar [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

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

Mis Envíos muestra {DIRECCION_DESPACHO_001}, la misma ventana seleccionada y el mismo subtotal anotados en el paso 5, sin ningún cambio producido por la interacción parcial en el Store Locator.

**Resultado obtenido**

No se pudo ejecutar el caso con la data declarada.

**Observación**

Causa: el paso 8 ingresa 'una nueva dirección diferente a Calle Uno 23, La Florida' y la columna Test data de esta fila no declara cuál (D-016 sí declara Camino La Fuente 1589 Las Condes). Acción: declarar Camino La Fuente 1589 Las Condes en el Test data de M-016.

---

#### TC-B2C189-M-017 - Verificar que la ventana seleccionada automáticamente tras el cambio cumple la regla de priorización de B2C-147 CA4 [Mobile] [Logueado]

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

#### TC-B2C189-M-018 - Verificar que una nueva tienda de retiro con producto no disponible activa el flujo de no disponibles [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000 y {SKU_STOCK_SOLO_TIENDA_A}
- Retiro en tienda configurado con Unimarc Las Condes
- {SKU_STOCK_SOLO_TIENDA_A} no tiene stock en Unimarc Los Trapenses
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_RETIRO_001} = Unimarc Las Condes

{TIENDA_RETIRO_002} = Unimarc Los Trapenses

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

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

**Resultado obtenido**

No se pudo ejecutar el caso con la data declarada.

**Observación**

Causa: {SKU_STOCK_SOLO_TIENDA_A} no tiene fila (o está en TBD) en el Excel de data. Acción: cargar un SKU con stock solo en la tienda abastecedora de origen.

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
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-189",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-189 WEB Test Cases.xlsx",
  "title": "B2C-189 - Mis Envíos: cambiar dirección o tienda - Evidencias QA",
  "updated_at": "2026-10-19"
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
  ],
  "2026-10-19": [
   "TC-B2C189-D-007",
   "TC-B2C189-D-008",
   "TC-B2C189-D-015",
   "TC-B2C189-D-016",
   "TC-B2C189-D-017",
   "TC-B2C189-D-018",
   "TC-B2C189-M-007",
   "TC-B2C189-M-015",
   "TC-B2C189-M-016",
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
   "duration_s": 0,
   "executed_at": "2026-10-19",
   "expected": "Se activa el flujo de productos no disponibles de B2C-126 para {SKU_STOCK_SOLO_TIENDA_A}.",
   "form_factor": "desktop",
   "id": "TC-B2C189-D-007",
   "name": "Verificar que una nueva dirección con productos no disponibles activa el flujo de no disponibles [Desktop] [Logueado]",
   "observation": "Causa: {SKU_STOCK_SOLO_TIENDA_A} no tiene fila (o está en TBD) en el Excel de data. Acción: cargar un SKU con stock solo en la tienda abastecedora de origen.",
   "observed": "No se pudo ejecutar el caso con la data declarada.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000 y {SKU_STOCK_SOLO_TIENDA_A}\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- {SKU_STOCK_SOLO_TIENDA_A} no tiene stock en la tienda abastecedora de A. Las Conder 14791, Lo Barnechea\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario hace clic en el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra un loader mientras verifica la disponibilidad.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{DIRECCION_OTRA_TIENDA} = A. Las Conder 14791, Lo Barnechea\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 0,
   "executed_at": "2026-10-19",
   "expected": "El usuario llega al carro de compras sin {SKU_STOCK_SOLO_TIENDA_A}.",
   "form_factor": "desktop",
   "id": "TC-B2C189-D-008",
   "name": "Verificar que tras resolver los productos no disponibles se redirige al carro [Desktop] [Logueado]",
   "observation": "Causa: {SKU_STOCK_SOLO_TIENDA_A} no tiene fila (o está en TBD) en el Excel de data. Acción: cargar un SKU con stock solo en la tienda abastecedora de origen.",
   "observed": "No se pudo ejecutar el caso con la data declarada.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000 y {SKU_STOCK_SOLO_TIENDA_A}\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- {SKU_STOCK_SOLO_TIENDA_A} no tiene stock en la tienda abastecedora de A. Las Conder 14791, Lo Barnechea\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario hace clic en el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra el flujo de productos no disponibles (B2C-126).\n10. El usuario hace clic en \"Entendido\" en el modal \"Se agotaron\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{DIRECCION_OTRA_TIENDA} = A. Las Conder 14791, Lo Barnechea\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
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
   "duration_s": 0,
   "executed_at": "2026-10-19",
   "expected": "Mis Envíos muestra {DIRECCION_MISMA_TIENDA} con sus ventanas recargadas, sin modal de productos no disponibles y con el carro intacto.",
   "form_factor": "desktop",
   "id": "TC-B2C189-D-015",
   "name": "Verificar que una dirección de la misma tienda abastecedora se actualiza sin validar productos [Desktop] [Logueado]",
   "observation": "Causa: {SKU_STOCK_SOLO_TIENDA_A} no tiene fila (o está en TBD) en el Excel de data. Acción: cargar un SKU con stock solo en la tienda abastecedora de origen.",
   "observed": "No se pudo ejecutar el caso con la data declarada.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000 y {SKU_STOCK_SOLO_TIENDA_A}\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- Gral. José Artigas 3250, Ñuñoa es atendida por la misma tienda abastecedora que Calle Uno 23, La Florida\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario hace clic en el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección Gral. José Artigas 3250, Ñuñoa y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{DIRECCION_MISMA_TIENDA} = Gral. José Artigas 3250, Ñuñoa\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 71.8,
   "executed_at": "2026-10-19",
   "expected": "Mis Envíos muestra {DIRECCION_DESPACHO_001}, la misma ventana seleccionada y el mismo subtotal anotados en el paso 5, sin ningún cambio producido por la interacción parcial en el Store Locator.",
   "form_factor": "desktop",
   "id": "TC-B2C189-D-016",
   "name": "Verificar que Mis Envíos mantiene su estado mientras el Store Locator completa parcialmente el flujo sin confirmar [Desktop] [Logueado]",
   "observation": "Se escribió 'Camino La Fuente 1589 Las Condes' (Camino La Fuente 1589 Las Condes) en el buscador del Store Locator sin confirmarla y se cerró con la X: Mis Envíos conserva la dirección activa (Calle Uno 23, La Florida), la ventana seleccionada y el subtotal.",
   "observed": "Se cumple el resultado esperado.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C189-D-016-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — mis envios despacho",
     "file": "TC-B2C189-D-016-p04-mis-envios-despacho.png"
    },
    {
     "caption": "Paso 8 — direccion nueva escrita en el buscador sin confirmar",
     "file": "TC-B2C189-D-016-p08-direccion-nueva-escrita-en-el-buscador-sin-confirmar.png"
    },
    {
     "caption": "Paso 11 — mis envios tras cerrar con la x",
     "file": "TC-B2C189-D-016-p11-mis-envios-tras-cerrar-con-la-x.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C189-D-016.png"
    }
   ],
   "spec": "tests/B2C-189.spec.ts:277",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario anota la dirección activa (Calle Uno 23, La Florida), la ventana seleccionada y el subtotal visibles en Mis Envíos.\n6. El usuario hace clic en el ícono ▾ de la tarjeta de dirección.\n7. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n8. El usuario ingresa una nueva dirección diferente a Calle Uno 23, La Florida en el buscador del Store Locator pero NO la confirma.\n9. El usuario hace clic en la X del Store Locator.\n10. El sistema cierra el Store Locator y vuelve a Mis Envíos.\n11. El usuario verifica la dirección, la ventana seleccionada y el subtotal en Mis Envíos.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{DIRECCION_DESPACHO} = Camino La Fuente 1589 Las Condes\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 0,
   "executed_at": "2026-10-19",
   "expected": "La ventana seleccionada automáticamente es {VENTANA_ESPERADA_POR_REGLA}, cumpliendo la regla de priorización por defecto definida en B2C-147 CA4. Ninguna otra ventana queda marcada como seleccionada.",
   "form_factor": "desktop",
   "id": "TC-B2C189-D-017",
   "name": "Verificar que la ventana seleccionada automáticamente tras el cambio cumple la regla de priorización de B2C-147 CA4 [Desktop] [Logueado]",
   "observation": "Causa: {VENTANA_ESPERADA_POR_REGLA} no tiene fila (o está en TBD) en el Excel de data. Acción: cargar la ventana que la regla de B2C-147 CA4 debe seleccionar para Calle Uno 23, La Florida.",
   "observed": "No se pudo ejecutar el caso con la data declarada.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- 000000000000675191-UN tiene stock en la tienda abastecedora de A. Las Conder 14791, Lo Barnechea\n- A. Las Conder 14791, Lo Barnechea tiene múltiples ventanas de entrega disponibles\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario hace clic en el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra un loader mientras recarga las ventanas.\n10. El sistema regresa a Mis Envíos con las ventanas de A. Las Conder 14791, Lo Barnechea.\n11. El usuario anota la ventana que queda seleccionada automáticamente.\n12. El usuario compara la ventana seleccionada con {VENTANA_ESPERADA_POR_REGLA}.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{DIRECCION_OTRA_TIENDA} = A. Las Conder 14791, Lo Barnechea\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 0,
   "executed_at": "2026-10-19",
   "expected": "Se activa el flujo de productos no disponibles de B2C-126 para {SKU_STOCK_SOLO_TIENDA_A}.",
   "form_factor": "desktop",
   "id": "TC-B2C189-D-018",
   "name": "Verificar que una nueva tienda de retiro con producto no disponible activa el flujo de no disponibles [Desktop] [Logueado]",
   "observation": "Causa: {SKU_STOCK_SOLO_TIENDA_A} no tiene fila (o está en TBD) en el Excel de data. Acción: cargar un SKU con stock solo en la tienda abastecedora de origen.",
   "observed": "No se pudo ejecutar el caso con la data declarada.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000 y {SKU_STOCK_SOLO_TIENDA_A}\n- Retiro en tienda configurado con Unimarc Las Condes\n- {SKU_STOCK_SOLO_TIENDA_A} no tiene stock en Unimarc Los Trapenses\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario hace clic en el ícono ▾ de la tarjeta de tienda.\n6. El sistema abre el Store Locator de retiro en tienda (B2C-121).\n7. El usuario selecciona la tienda Unimarc Los Trapenses y hace clic en \"Confirmar tienda\".\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra un loader mientras verifica la disponibilidad de productos.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_RETIRO_001} = Unimarc Las Condes\n{TIENDA_RETIRO_002} = Unimarc Los Trapenses\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
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
   "duration_s": 0,
   "executed_at": "2026-10-19",
   "expected": "Se activa el flujo de productos no disponibles de B2C-126 para {SKU_STOCK_SOLO_TIENDA_A}.",
   "form_factor": "mobile",
   "id": "TC-B2C189-M-007",
   "name": "Verificar que una nueva dirección con productos no disponibles activa el flujo de no disponibles [Mobile] [Logueado]",
   "observation": "Causa: {SKU_STOCK_SOLO_TIENDA_A} no tiene fila (o está en TBD) en el Excel de data. Acción: cargar un SKU con stock solo en la tienda abastecedora de origen.",
   "observed": "No se pudo ejecutar el caso con la data declarada.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000 y {SKU_STOCK_SOLO_TIENDA_A}\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- {SKU_STOCK_SOLO_TIENDA_A} no tiene stock en la tienda abastecedora de A. Las Conder 14791, Lo Barnechea\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra un loader mientras verifica la disponibilidad.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{DIRECCION_OTRA_TIENDA} = A. Las Conder 14791, Lo Barnechea\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
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
   "duration_s": 0,
   "executed_at": "2026-10-19",
   "expected": "Mis Envíos muestra {DIRECCION_MISMA_TIENDA} con sus ventanas recargadas, sin modal de productos no disponibles y con el carro intacto.",
   "form_factor": "mobile",
   "id": "TC-B2C189-M-015",
   "name": "Verificar que una dirección de la misma tienda abastecedora se actualiza sin validar productos [Mobile] [Logueado]",
   "observation": "Causa: {SKU_STOCK_SOLO_TIENDA_A} no tiene fila (o está en TBD) en el Excel de data. Acción: cargar un SKU con stock solo en la tienda abastecedora de origen.",
   "observed": "No se pudo ejecutar el caso con la data declarada.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000 y {SKU_STOCK_SOLO_TIENDA_A}\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- Gral. José Artigas 3250, Ñuñoa es atendida por la misma tienda abastecedora que Calle Uno 23, La Florida\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección Gral. José Artigas 3250, Ñuñoa y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{DIRECCION_MISMA_TIENDA} = Gral. José Artigas 3250, Ñuñoa\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 0,
   "executed_at": "2026-10-19",
   "expected": "Mis Envíos muestra {DIRECCION_DESPACHO_001}, la misma ventana seleccionada y el mismo subtotal anotados en el paso 5, sin ningún cambio producido por la interacción parcial en el Store Locator.",
   "form_factor": "mobile",
   "id": "TC-B2C189-M-016",
   "name": "Verificar que Mis Envíos mantiene su estado mientras el Store Locator completa parcialmente el flujo sin confirmar [Mobile] [Logueado]",
   "observation": "Causa: el paso 8 ingresa 'una nueva dirección diferente a Calle Uno 23, La Florida' y la columna Test data de esta fila no declara cuál (D-016 sí declara Camino La Fuente 1589 Las Condes). Acción: declarar Camino La Fuente 1589 Las Condes en el Test data de M-016.",
   "observed": "No se pudo ejecutar el caso con la data declarada.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario anota la dirección activa (Calle Uno 23, La Florida), la ventana seleccionada y el subtotal visibles en Mis Envíos.\n6. El usuario toca el ícono ▾ de la tarjeta de dirección.\n7. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n8. El usuario ingresa una nueva dirección diferente a Calle Uno 23, La Florida en el buscador del Store Locator pero NO la confirma.\n9. El usuario toca la X del Store Locator.\n10. El sistema cierra el Store Locator y vuelve a Mis Envíos.\n11. El usuario verifica la dirección, la ventana seleccionada y el subtotal en Mis Envíos.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
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
   "duration_s": 0,
   "executed_at": "2026-10-19",
   "expected": "Se activa el flujo de productos no disponibles de B2C-126 para {SKU_STOCK_SOLO_TIENDA_A}.",
   "form_factor": "mobile",
   "id": "TC-B2C189-M-018",
   "name": "Verificar que una nueva tienda de retiro con producto no disponible activa el flujo de no disponibles [Mobile] [Logueado]",
   "observation": "Causa: {SKU_STOCK_SOLO_TIENDA_A} no tiene fila (o está en TBD) en el Excel de data. Acción: cargar un SKU con stock solo en la tienda abastecedora de origen.",
   "observed": "No se pudo ejecutar el caso con la data declarada.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000 y {SKU_STOCK_SOLO_TIENDA_A}\n- Retiro en tienda configurado con Unimarc Las Condes\n- {SKU_STOCK_SOLO_TIENDA_A} no tiene stock en Unimarc Los Trapenses\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de tienda.\n6. El sistema abre el Store Locator de retiro en tienda (B2C-121).\n7. El usuario selecciona la tienda Unimarc Los Trapenses y toca \"Confirmar tienda\".\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra un loader mientras verifica la disponibilidad de productos.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_RETIRO_001} = Unimarc Las Condes\n{TIENDA_RETIRO_002} = Unimarc Los Trapenses\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "390x844"
  }
 ]
}
-->


---

## B2C-168 - Fusión de carros al iniciar sesión - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-168 |
| Última actualización | 2026-10-19 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | webkit |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-168 WEB Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

### Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 9 |
| Aprobado | 7 |
| Bloqueado | 1 |
| **Total** | **17** |

### Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-19 | 17 | TC-B2C168-D-001, TC-B2C168-D-002, TC-B2C168-D-003, TC-B2C168-D-006, TC-B2C168-D-009, TC-B2C168-D-010, TC-B2C168-D-011, TC-B2C168-D-012, TC-B2C168-D-014, TC-B2C168-D-015, TC-B2C168-M-003, TC-B2C168-M-006, TC-B2C168-M-009, TC-B2C168-M-011, TC-B2C168-M-012, TC-B2C168-M-014, TC-B2C168-M-015 |

### Detalle por caso de prueba

#### TC-B2C168-D-001 - Verificar que Inicia sesión o regístrate desde el carro abre el modal de inicio de sesión [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000000675191-UN x 1

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Inicia sesión o regístrate".

**Resultado esperado**

Se muestra el modal de inicio de sesión (o registro) y no se avanza al checkout.

**Resultado obtenido**

No se pudo ejecutar el caso con la data declarada.

**Observación**

Causa: el carro de invitado de la fila (000000000000675191-UN × 1 = $2.490) queda bajo el mínimo de compra de $20.000: el carro muestra solo 'Mínimo de compra $20.000' deshabilitado y no muestra 'Inicia sesión o regístrate', así que no se llega al paso 3 (comprobado en esta corrida con el carro del invitado armado). Acción: declarar un carro de invitado con subtotal sobre $20.000 y confirmar con negocio el texto del botón.

**Evidencia**

![Paso 2 — carro del invitado](<B2C-168 Evidencias/TC-B2C168-D-001-p02-carro-del-invitado.png>)

---

#### TC-B2C168-D-002 - Verificar que el login desde el carro fusiona, muestra los sugeridos y lleva a Datos de entrega [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000000675191-UN x 1
- La cuenta tiene productos My Usuals o favoritos
- Método de entrega activo con subtotal sobre el mínimo

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Inicia sesión o regístrate".
4. El usuario inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.
5. El sistema fusiona los carros y muestra el modal "¡Que no se te olviden!".
6. El usuario hace clic en "Continuar".

**Resultado esperado**

Tras la fusión se muestra el modal "¡Que no se te olviden!" y al presionar "Continuar" se muestra la página "Datos de entrega".

**Resultado obtenido**

No se pudo ejecutar el caso con la data declarada.

**Observación**

Causa: el carro de invitado de la fila (000000000000675191-UN × 1 = $2.490) queda bajo el mínimo de compra de $20.000: el carro muestra solo 'Mínimo de compra $20.000' deshabilitado y no muestra 'Inicia sesión o regístrate', así que no se llega al paso 3 (comprobado en esta corrida con el carro del invitado armado). Acción: declarar un carro de invitado con subtotal sobre $20.000 y confirmar con negocio el texto del botón. Además la precondición pide 'subtotal sobre el mínimo', lo que contradice 000000000000675191-UN × 1.

---

#### TC-B2C168-D-003 - Verificar que un carro invitado con productos pasa completo a un carro logueado vacío [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 162.1 s |
| Spec | tests/B2C-168.spec.ts:241 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000000675191-UN x 2 y 000000000000674797-UN x 1
- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene ningún producto (preparado iniciando sesión previamente y cerrando sesión)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{SKU_CROSS_SELLING} = 000000000401693004-UN

{SKU_NOMBRE_CORTO} = 000000000000038061-UN

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario hace clic en "Ingresa" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
4. El sistema carga el carrito.

**Resultado esperado**

El carro logueado contiene {SKU_VALID_001} x 2 y {SKU_UNITARIO} x 1, igual al carro invitado.

**Resultado obtenido**

Se cumple el resultado esperado.

**Observación**

Carro guardado vacío; el invitado con 000000000000675191-UN × 2 y 000000000000674797-UN × 1 inicia sesión y el carro fusionado trae los mismos productos y cantidades.

**Evidencia**

![Paso 0 — invitado con su carro armado](<B2C-168 Evidencias/TC-B2C168-D-003-p00-invitado-con-su-carro-armado.png>)

![Paso 2 — sesion iniciada](<B2C-168 Evidencias/TC-B2C168-D-003-p02-sesion-iniciada.png>)

![Paso 4 — carro tras la fusion](<B2C-168 Evidencias/TC-B2C168-D-003-p04-carro-tras-la-fusion.png>)

![Estado final](<B2C-168 Evidencias/TC-B2C168-D-003.png>)

---

#### TC-B2C168-D-006 - Verificar que productos distintos de ambos carros se suman sin modificar cantidades [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 203.4 s |
| Spec | tests/B2C-168.spec.ts:258 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000000674797-UN x 2
- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000038061-UN x 1 y 000000000401693004-UN x 3 (preparado iniciando sesión previamente y cerrando sesión)
- Método de entrega activo

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{SKU_CROSS_SELLING} = 000000000401693004-UN

{SKU_NOMBRE_CORTO} = 000000000000038061-UN

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario hace clic en "Ingresa" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
4. El sistema carga el carrito.

**Resultado esperado**

El carro contiene {SKU_VALID_001} x 1, {SKU_UNITARIO} x 2, {SKU_NOMBRE_CORTO} x 1 y {SKU_CROSS_SELLING} x 3.

**Resultado obtenido**

Se cumple el resultado esperado.

**Observación**

Productos distintos de ambos carros se suman sin cambiar cantidades: 4 productos con las cantidades de cada origen.

**Evidencia**

![Paso 0 — invitado con su carro armado](<B2C-168 Evidencias/TC-B2C168-D-006-p00-invitado-con-su-carro-armado.png>)

![Paso 2 — sesion iniciada](<B2C-168 Evidencias/TC-B2C168-D-006-p02-sesion-iniciada.png>)

![Paso 4 — carro tras la fusion](<B2C-168 Evidencias/TC-B2C168-D-006-p04-carro-tras-la-fusion.png>)

![Estado final](<B2C-168 Evidencias/TC-B2C168-D-006.png>)

---

#### TC-B2C168-D-009 - Verificar que con duplicados y distintos el carro fusionado aplica la regla a cada producto [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 323.7 s |
| Spec | tests/B2C-168.spec.ts:275 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000000675191-UN x 2, 000000000000674797-UN x 1 y 000000000000038061-UN x 3
- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000674797-UN x 4, 000000000000038061-UN x 1 y 000000000401693004-UN x 2 (preparado iniciando sesión previamente y cerrando sesión)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{SKU_CROSS_SELLING} = 000000000401693004-UN

{SKU_NOMBRE_CORTO} = 000000000000038061-UN

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario hace clic en "Ingresa" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
4. El sistema carga el carrito.

**Resultado esperado**

El carro queda con {SKU_VALID_001} x 2, {SKU_UNITARIO} x 1, {SKU_NOMBRE_CORTO} x 3 y {SKU_CROSS_SELLING} x 2.

**Resultado obtenido**

Se cumple el resultado esperado.

**Observación**

Con productos repetidos, la cantidad del invitado prevalece (000000000000675191-UN × 2, 000000000000674797-UN × 1, 000000000000038061-UN × 3) y se conserva 000000000401693004-UN × 2 del carro guardado.

**Evidencia**

![Paso 0 — invitado con su carro armado](<B2C-168 Evidencias/TC-B2C168-D-009-p00-invitado-con-su-carro-armado.png>)

![Paso 2 — sesion iniciada](<B2C-168 Evidencias/TC-B2C168-D-009-p02-sesion-iniciada.png>)

![Paso 4 — carro tras la fusion](<B2C-168 Evidencias/TC-B2C168-D-009-p04-carro-tras-la-fusion.png>)

![Estado final](<B2C-168 Evidencias/TC-B2C168-D-009.png>)

---

#### TC-B2C168-D-010 - Verificar que un producto del carro invitado sin stock se agrega marcado como no disponible [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000400254005-UN x 1
- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene ningún producto (preparado iniciando sesión previamente y cerrando sesión)
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_NO_DISPONIBLE} = 000000000400254005-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_SIN_STOCK} = Unimarc Los leones

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario hace clic en "Ingresa" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
4. El sistema carga el carrito.

**Resultado esperado**

{SKU_NO_DISPONIBLE} aparece en la sección de no disponibles del carro fusionado y {SKU_VALID_001} en disponibles.

**Resultado obtenido**

No se pudo ejecutar el caso con la data declarada.

**Observación**

Causa: 000000000400254005-UN (000000000400254005-UN) tiene stock en Unimarc Los leones (Unimarc Los Leones): con esa tienda activa la PDP muestra 'Agregar' (comprobado en esta corrida), así que no queda como no disponible. Acción: declarar en 000000000400254005-UN un SKU sin stock en Unimarc Los leones, o cambiar la tienda.

**Evidencia**

![Paso 2 — pdp del sku con la tienda sin stock activa](<B2C-168 Evidencias/TC-B2C168-D-010-p02-pdp-del-sku-con-la-tienda-sin-stock-activa.png>)

---

#### TC-B2C168-D-011 - Verificar que un producto del carro logueado sin stock permanece como no disponible [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000000675191-UN x 1
- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000038061-UN x 1 y 000000000400254005-UN x 1 (preparado iniciando sesión previamente y cerrando sesión)
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_NOMBRE_CORTO} = 000000000000038061-UN

{SKU_NO_DISPONIBLE} = 000000000400254005-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_SIN_STOCK} = Unimarc Los leones

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario hace clic en "Ingresa" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
4. El sistema carga el carrito.

**Resultado esperado**

{SKU_NO_DISPONIBLE} permanece como no disponible y {SKU_NOMBRE_CORTO} y {SKU_VALID_001} quedan disponibles.

**Resultado obtenido**

No se pudo ejecutar el caso con la data declarada.

**Observación**

Causa: 000000000400254005-UN (000000000400254005-UN) tiene stock en Unimarc Los leones (Unimarc Los Leones): con esa tienda activa la PDP muestra 'Agregar' (comprobado en esta corrida), así que no queda como no disponible. Acción: declarar en 000000000400254005-UN un SKU sin stock en Unimarc Los leones, o cambiar la tienda. (Comprobado en D-010 con los mismos datos.)

---

#### TC-B2C168-D-012 - Verificar que tras la fusión se recalculan precios, promociones y subtotal con Unipay [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000641229002-UN x 1 y 000000000000661945-UN x 1
- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000675191-UN x 2 (preparado iniciando sesión previamente y cerrando sesión)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{SKU_UNIPAY_001} = 000000000000661945-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario hace clic en "Ingresa" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
4. El sistema carga el carrito.
5. El usuario revisa precios, promociones y el resumen de totales.

**Resultado esperado**

Cada producto muestra el precio de su promoción vigente y el total y el "Subtotal con Unipay" se calculan sobre todos los productos fusionados.

**Resultado obtenido**

No se pudo ejecutar el caso con la data declarada.

**Observación**

Causa: la precondición arma el carro de invitado con 000000000641229002-UN × 1, pero 000000000641229002-UN no está en el Test data de la fila (tampoco declara dirección para el invitado). Acción: declarar 000000000641229002-UN y Calle Uno 23, La Florida en la fila.

---

#### TC-B2C168-D-014 - Verificar que un usuario que se registra por primera vez inicia con el carro invitado [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000000674797-UN x 2
- daunuruco+nuevo@avatar-global.com no está registrado (usar un correo nuevo por ejecución)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{EMAIL_NUEVO_REGISTRO} = daunuruco+nuevo@avatar-global.com

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario hace clic en "Ingresa" y elige registrarse con el correo daunuruco+nuevo@avatar-global.com.
2. El usuario completa el registro e inicia sesión.
3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
4. El sistema carga el carrito.

**Resultado esperado**

El carro de la nueva cuenta contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 2.

**Resultado obtenido**

No se pudo ejecutar el caso con la data declarada.

**Observación**

Causa: registrar una cuenta nueva pide nombre, RUT y teléfono, y la fila solo declara daunuruco+nuevo@avatar-global.com; no se inventan datos personales. Acción: declarar en la fila (o en el Excel de data) los datos de registro de una cuenta nueva por ejecución, con acceso al OTP.

---

#### TC-B2C168-D-015 - Verificar que el merge desde el minicarro invitado fusiona el carro y el minicarro logueado refleja el resultado [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 174.5 s |
| Spec | tests/B2C-168.spec.ts:293 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Minicarro (header)
- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000000674797-UN x 2
- La cuenta daunuruco+comprador@avatar-global.com tiene el carro logueado con 000000000000666200-UN x 1 (producto distinto al invitado)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{SKU_COMBINA_PROMO} = 000000000000666200-UN

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. Como invitado, agregar 000000000000675191-UN x 1 y 000000000000674797-UN x 2 al carro.
2. Abrir el minicarro desde el ícono del header (sin navegar al carro full-page).
3. Verificar que el minicarro invitado muestra los 2 productos.
4. Desde cualquier página, iniciar sesión con daunuruco+comprador@avatar-global.com (cuenta que tiene 000000000000666200-UN x 1 en su carro logueado).
5. Una vez logueado, abrir el minicarro desde el ícono del header.
6. Verificar que el minicarro logueado contiene los 3 productos: 000000000000675191-UN x 1, 000000000000674797-UN x 2 y 000000000000666200-UN x 1.
7. Verificar que las cantidades de cada producto son correctas (regla CA5: productos distintos, sin modificación de cantidades).
8. Verificar que el subtotal del minicarro refleja el carro fusionado completo.

**Resultado esperado**

El minicarro logueado muestra los 3 productos fusionados: {SKU_VALID_001} x 1, {SKU_UNITARIO} x 2 (del invitado) y {SKU_COMBINA_PROMO} x 1 (del logueado). Cantidades sin modificación. El subtotal refleja el total del carro fusionado. El minicarro se actualiza en la misma sesión sin recargar la página.

**Resultado obtenido**

Se cumple el resultado esperado.

**Observación**

El minicarro del invitado muestra los 2 productos; tras iniciar sesión el minicarro muestra los 3 productos fusionados con sus cantidades y su subtotal coincide con el del carro. Pasó en el segundo intento.

**Evidencia**

![Paso 3 — mini carro del invitado](<B2C-168 Evidencias/TC-B2C168-D-015-p03-mini-carro-del-invitado.png>)

![Paso 6 — mini carro del logueado con los 3 productos](<B2C-168 Evidencias/TC-B2C168-D-015-p06-mini-carro-del-logueado-con-los-3-productos.png>)

![Estado final](<B2C-168 Evidencias/TC-B2C168-D-015.png>)

---

#### TC-B2C168-M-003 - Verificar que un carro invitado con productos pasa completo a un carro logueado vacío [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 354.1 s |
| Spec | tests/B2C-168.spec.ts:241 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000000675191-UN x 2 y 000000000000674797-UN x 1
- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene ningún producto (preparado iniciando sesión previamente y cerrando sesión)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{SKU_CROSS_SELLING} = 000000000401693004-UN

{SKU_NOMBRE_CORTO} = 000000000000038061-UN

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario toca "Ingresa" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
4. El sistema carga el carrito.

**Resultado esperado**

El carro logueado contiene {SKU_VALID_001} x 2 y {SKU_UNITARIO} x 1, igual al carro invitado.

**Resultado obtenido**

Se cumple el resultado esperado.

**Observación**

Carro guardado vacío; el invitado con 000000000000675191-UN × 2 y 000000000000674797-UN × 1 inicia sesión y el carro fusionado trae los mismos productos y cantidades. Fallaron intentos previos por la preparación en Mobile (banner de cookies que no se cierra); este pasó.

**Evidencia**

![Paso 0 — invitado con su carro armado](<B2C-168 Evidencias/TC-B2C168-M-003-p00-invitado-con-su-carro-armado.png>)

![Paso 2 — sesion iniciada](<B2C-168 Evidencias/TC-B2C168-M-003-p02-sesion-iniciada.png>)

![Paso 4 — carro tras la fusion](<B2C-168 Evidencias/TC-B2C168-M-003-p04-carro-tras-la-fusion.png>)

![Estado final](<B2C-168 Evidencias/TC-B2C168-M-003.png>)

---

#### TC-B2C168-M-006 - Verificar que productos distintos de ambos carros se suman sin modificar cantidades [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 424.0 s |
| Spec | tests/B2C-168.spec.ts:258 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000000674797-UN x 2
- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000038061-UN x 1 y 000000000401693004-UN x 3 (preparado iniciando sesión previamente y cerrando sesión)
- Método de entrega activo

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{SKU_CROSS_SELLING} = 000000000401693004-UN

{SKU_NOMBRE_CORTO} = 000000000000038061-UN

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario toca "Ingresa" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
4. El sistema carga el carrito.

**Resultado esperado**

El carro contiene {SKU_VALID_001} x 1, {SKU_UNITARIO} x 2, {SKU_NOMBRE_CORTO} x 1 y {SKU_CROSS_SELLING} x 3.

**Resultado obtenido**

Se cumple el resultado esperado.

**Observación**

Productos distintos de ambos carros se suman sin cambiar cantidades. Pasó en el segundo intento; el primero falló por la preparación en Mobile (banner de cookies que no se cierra).

**Evidencia**

![Paso 0 — invitado con su carro armado](<B2C-168 Evidencias/TC-B2C168-M-006-p00-invitado-con-su-carro-armado.png>)

![Paso 2 — sesion iniciada](<B2C-168 Evidencias/TC-B2C168-M-006-p02-sesion-iniciada.png>)

![Paso 4 — carro tras la fusion](<B2C-168 Evidencias/TC-B2C168-M-006-p04-carro-tras-la-fusion.png>)

![Estado final](<B2C-168 Evidencias/TC-B2C168-M-006.png>)

---

#### TC-B2C168-M-009 - Verificar que con duplicados y distintos el carro fusionado aplica la regla a cada producto [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Duración | 239.0 s |
| Spec | tests/B2C-168.spec.ts:277 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000000675191-UN x 2, 000000000000674797-UN x 1 y 000000000000038061-UN x 3
- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000674797-UN x 4, 000000000000038061-UN x 1 y 000000000401693004-UN x 2 (preparado iniciando sesión previamente y cerrando sesión)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{SKU_CROSS_SELLING} = 000000000401693004-UN

{SKU_NOMBRE_CORTO} = 000000000000038061-UN

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario toca "Ingresa" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
4. El sistema carga el carrito.

**Resultado esperado**

El carro queda con {SKU_VALID_001} x 2, {SKU_UNITARIO} x 1, {SKU_NOMBRE_CORTO} x 3 y {SKU_CROSS_SELLING} x 2.

**Resultado obtenido**

Se cumple el resultado esperado.

**Observación**

Con productos repetidos, la cantidad del invitado prevalece (000000000000675191-UN × 2, 000000000000674797-UN × 1, 000000000000038061-UN × 3) y se conserva 000000000401693004-UN × 2 del carro guardado. Corrió con Chromium en formato móvil (390x844): con WebKit el Home del invitado se congelaba por imágenes lentas y el caso no llegaba al login.

**Evidencia**

![Paso 0 — invitado con su carro armado](<B2C-168 Evidencias/TC-B2C168-M-009-p00-invitado-con-su-carro-armado.png>)

![Paso 2 — sesion iniciada](<B2C-168 Evidencias/TC-B2C168-M-009-p02-sesion-iniciada.png>)

![Paso 4 — carro tras la fusion](<B2C-168 Evidencias/TC-B2C168-M-009-p04-carro-tras-la-fusion.png>)

![Estado final](<B2C-168 Evidencias/TC-B2C168-M-009.png>)

---

#### TC-B2C168-M-011 - Verificar que un producto del carro logueado sin stock permanece como no disponible [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000000675191-UN x 1
- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000038061-UN x 1 y 000000000400254005-UN x 1 (preparado iniciando sesión previamente y cerrando sesión)
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{SKU_NOMBRE_CORTO} = 000000000000038061-UN

{SKU_NO_DISPONIBLE} = 000000000400254005-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_SIN_STOCK} = Unimarc Los leones

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario toca "Ingresa" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
4. El sistema carga el carrito.

**Resultado esperado**

{SKU_NO_DISPONIBLE} permanece como no disponible y {SKU_NOMBRE_CORTO} y {SKU_VALID_001} quedan disponibles.

**Resultado obtenido**

No se pudo ejecutar el caso con la data declarada.

**Observación**

Causa: 000000000400254005-UN (000000000400254005-UN) tiene stock en Unimarc Los leones (Unimarc Los Leones): con esa tienda activa la PDP muestra 'Agregar' (comprobado en esta corrida), así que no queda como no disponible. Acción: declarar en 000000000400254005-UN un SKU sin stock en Unimarc Los leones, o cambiar la tienda. (Comprobado en D-010 con los mismos datos.)

---

#### TC-B2C168-M-012 - Verificar que tras la fusión se recalculan precios, promociones y subtotal con Unipay [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000641229002-UN x 1 y 000000000000661945-UN x 1
- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000675191-UN x 2 (preparado iniciando sesión previamente y cerrando sesión)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{SKU_UNIPAY_001} = 000000000000661945-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario toca "Ingresa" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
4. El sistema carga el carrito.
5. El usuario revisa precios, promociones y el resumen de totales.

**Resultado esperado**

Cada producto muestra el precio de su promoción vigente y el total y el "Subtotal con Unipay" se calculan sobre todos los productos fusionados.

**Resultado obtenido**

No se pudo ejecutar el caso con la data declarada.

**Observación**

Causa: la precondición arma el carro de invitado con 000000000641229002-UN × 1, pero 000000000641229002-UN no está en el Test data de la fila. Acción: declarar 000000000641229002-UN y la dirección del invitado en la fila.

---

#### TC-B2C168-M-014 - Verificar que un usuario que se registra por primera vez inicia con el carro invitado [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000000674797-UN x 2
- daunuruco+nuevo@avatar-global.com no está registrado (usar un correo nuevo por ejecución)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{EMAIL_NUEVO_REGISTRO} = daunuruco+nuevo@avatar-global.com

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario toca "Ingresa" y elige registrarse con el correo daunuruco+nuevo@avatar-global.com.
2. El usuario completa el registro e inicia sesión.
3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
4. El sistema carga el carrito.

**Resultado esperado**

El carro de la nueva cuenta contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 2.

**Resultado obtenido**

No se pudo ejecutar el caso con la data declarada.

**Observación**

Causa: registrar una cuenta nueva pide nombre, RUT y teléfono, y la fila solo declara daunuruco+nuevo@avatar-global.com (y no la dirección del invitado). Acción: declarar los datos de registro y la dirección del invitado en la fila.

---

#### TC-B2C168-M-015 - Verificar que en Mobile y App el carro fusionado se refleja sin recargar [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000000675191-UN x 2
- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000038061-UN x 1 (preparado iniciando sesión previamente y cerrando sesión)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{SKU_CROSS_SELLING} = 000000000401693004-UN

{SKU_NOMBRE_CORTO} = 000000000000038061-UN

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Ingresa" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.
4. El sistema autentica al usuario y ejecuta la fusión de carros.
5. El usuario vuelve al carro sin recargar.

**Resultado esperado**

El carro muestra el resultado de la fusión ({SKU_VALID_001} x 2 y {SKU_NOMBRE_CORTO} x 1) sin necesidad de recargar.

**Resultado obtenido**

No se pudo ejecutar: el carro de Mobile no ofrece iniciar sesión.

**Observación**

Causa: el header del carro en Mobile ('Volver / Mi Carro / Más opciones') no tiene 'Ingresa aquí' y 'Más opciones' solo ofrece 'Guardar como lista' y 'Vaciar carro': el paso 3 ('toca Ingresa en el header') no se puede ejecutar como está escrito. Comprobado con Chromium en formato móvil. Acción: confirmar con negocio cómo inicia sesión un invitado desde el carro en Mobile (o ajustar el paso) y repetir el caso.

**Evidencia**

![Paso 2 — carro del invitado](<B2C-168 Evidencias/TC-B2C168-M-015-p02-carro-del-invitado.png>)

![Paso 3 — menu mas opciones del carro](<B2C-168 Evidencias/TC-B2C168-M-015-p03-menu-mas-opciones-del-carro.png>)

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
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-168",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-168 WEB Test Cases.xlsx",
  "title": "B2C-168 - Fusión de carros al iniciar sesión - Evidencias QA",
  "updated_at": "2026-10-19"
 },
 "history": {
  "2026-10-19": [
   "TC-B2C168-D-001",
   "TC-B2C168-D-002",
   "TC-B2C168-D-003",
   "TC-B2C168-D-006",
   "TC-B2C168-D-009",
   "TC-B2C168-D-010",
   "TC-B2C168-D-011",
   "TC-B2C168-D-012",
   "TC-B2C168-D-014",
   "TC-B2C168-D-015",
   "TC-B2C168-M-003",
   "TC-B2C168-M-006",
   "TC-B2C168-M-009",
   "TC-B2C168-M-011",
   "TC-B2C168-M-012",
   "TC-B2C168-M-014",
   "TC-B2C168-M-015"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "duration_s": 0,
   "executed_at": "2026-10-19",
   "expected": "Se muestra el modal de inicio de sesión (o registro) y no se avanza al checkout.",
   "form_factor": "desktop",
   "id": "TC-B2C168-D-001",
   "name": "Verificar que Inicia sesión o regístrate desde el carro abre el modal de inicio de sesión [Desktop] [Guest]",
   "observation": "Causa: el carro de invitado de la fila (000000000000675191-UN × 1 = $2.490) queda bajo el mínimo de compra de $20.000: el carro muestra solo 'Mínimo de compra $20.000' deshabilitado y no muestra 'Inicia sesión o regístrate', así que no se llega al paso 3 (comprobado en esta corrida con el carro del invitado armado). Acción: declarar un carro de invitado con subtotal sobre $20.000 y confirmar con negocio el texto del botón.",
   "observed": "No se pudo ejecutar el caso con la data declarada.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000000675191-UN x 1",
   "screenshots": [
    {
     "caption": "Paso 2 — carro del invitado",
     "file": "TC-B2C168-D-001-p02-carro-del-invitado.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Inicia sesión o regístrate\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 0,
   "executed_at": "2026-10-19",
   "expected": "Tras la fusión se muestra el modal \"¡Que no se te olviden!\" y al presionar \"Continuar\" se muestra la página \"Datos de entrega\".",
   "form_factor": "desktop",
   "id": "TC-B2C168-D-002",
   "name": "Verificar que el login desde el carro fusiona, muestra los sugeridos y lleva a Datos de entrega [Desktop] [Guest]",
   "observation": "Causa: el carro de invitado de la fila (000000000000675191-UN × 1 = $2.490) queda bajo el mínimo de compra de $20.000: el carro muestra solo 'Mínimo de compra $20.000' deshabilitado y no muestra 'Inicia sesión o regístrate', así que no se llega al paso 3 (comprobado en esta corrida con el carro del invitado armado). Acción: declarar un carro de invitado con subtotal sobre $20.000 y confirmar con negocio el texto del botón. Además la precondición pide 'subtotal sobre el mínimo', lo que contradice 000000000000675191-UN × 1.",
   "observed": "No se pudo ejecutar el caso con la data declarada.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000000675191-UN x 1\n- La cuenta tiene productos My Usuals o favoritos\n- Método de entrega activo con subtotal sobre el mínimo",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Inicia sesión o regístrate\".\n4. El usuario inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.\n5. El sistema fusiona los carros y muestra el modal \"¡Que no se te olviden!\".\n6. El usuario hace clic en \"Continuar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 162.1,
   "executed_at": "2026-10-19",
   "expected": "El carro logueado contiene {SKU_VALID_001} x 2 y {SKU_UNITARIO} x 1, igual al carro invitado.",
   "form_factor": "desktop",
   "id": "TC-B2C168-D-003",
   "name": "Verificar que un carro invitado con productos pasa completo a un carro logueado vacío [Desktop] [Guest]",
   "observation": "Carro guardado vacío; el invitado con 000000000000675191-UN × 2 y 000000000000674797-UN × 1 inicia sesión y el carro fusionado trae los mismos productos y cantidades.",
   "observed": "Se cumple el resultado esperado.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000000675191-UN x 2 y 000000000000674797-UN x 1\n- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene ningún producto (preparado iniciando sesión previamente y cerrando sesión)",
   "screenshots": [
    {
     "caption": "Paso 0 — invitado con su carro armado",
     "file": "TC-B2C168-D-003-p00-invitado-con-su-carro-armado.png"
    },
    {
     "caption": "Paso 2 — sesion iniciada",
     "file": "TC-B2C168-D-003-p02-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — carro tras la fusion",
     "file": "TC-B2C168-D-003-p04-carro-tras-la-fusion.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C168-D-003.png"
    }
   ],
   "spec": "tests/B2C-168.spec.ts:241",
   "status": "Aprobado",
   "steps": "1. El usuario hace clic en \"Ingresa\" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n4. El sistema carga el carrito.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{SKU_CROSS_SELLING} = 000000000401693004-UN\n{SKU_NOMBRE_CORTO} = 000000000000038061-UN\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 203.4,
   "executed_at": "2026-10-19",
   "expected": "El carro contiene {SKU_VALID_001} x 1, {SKU_UNITARIO} x 2, {SKU_NOMBRE_CORTO} x 1 y {SKU_CROSS_SELLING} x 3.",
   "form_factor": "desktop",
   "id": "TC-B2C168-D-006",
   "name": "Verificar que productos distintos de ambos carros se suman sin modificar cantidades [Desktop] [Guest]",
   "observation": "Productos distintos de ambos carros se suman sin cambiar cantidades: 4 productos con las cantidades de cada origen.",
   "observed": "Se cumple el resultado esperado.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000000674797-UN x 2\n- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000038061-UN x 1 y 000000000401693004-UN x 3 (preparado iniciando sesión previamente y cerrando sesión)\n- Método de entrega activo",
   "screenshots": [
    {
     "caption": "Paso 0 — invitado con su carro armado",
     "file": "TC-B2C168-D-006-p00-invitado-con-su-carro-armado.png"
    },
    {
     "caption": "Paso 2 — sesion iniciada",
     "file": "TC-B2C168-D-006-p02-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — carro tras la fusion",
     "file": "TC-B2C168-D-006-p04-carro-tras-la-fusion.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C168-D-006.png"
    }
   ],
   "spec": "tests/B2C-168.spec.ts:258",
   "status": "Aprobado",
   "steps": "1. El usuario hace clic en \"Ingresa\" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n4. El sistema carga el carrito.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{SKU_CROSS_SELLING} = 000000000401693004-UN\n{SKU_NOMBRE_CORTO} = 000000000000038061-UN\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 323.7,
   "executed_at": "2026-10-19",
   "expected": "El carro queda con {SKU_VALID_001} x 2, {SKU_UNITARIO} x 1, {SKU_NOMBRE_CORTO} x 3 y {SKU_CROSS_SELLING} x 2.",
   "form_factor": "desktop",
   "id": "TC-B2C168-D-009",
   "name": "Verificar que con duplicados y distintos el carro fusionado aplica la regla a cada producto [Desktop] [Guest]",
   "observation": "Con productos repetidos, la cantidad del invitado prevalece (000000000000675191-UN × 2, 000000000000674797-UN × 1, 000000000000038061-UN × 3) y se conserva 000000000401693004-UN × 2 del carro guardado.",
   "observed": "Se cumple el resultado esperado.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000000675191-UN x 2, 000000000000674797-UN x 1 y 000000000000038061-UN x 3\n- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000674797-UN x 4, 000000000000038061-UN x 1 y 000000000401693004-UN x 2 (preparado iniciando sesión previamente y cerrando sesión)",
   "screenshots": [
    {
     "caption": "Paso 0 — invitado con su carro armado",
     "file": "TC-B2C168-D-009-p00-invitado-con-su-carro-armado.png"
    },
    {
     "caption": "Paso 2 — sesion iniciada",
     "file": "TC-B2C168-D-009-p02-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — carro tras la fusion",
     "file": "TC-B2C168-D-009-p04-carro-tras-la-fusion.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C168-D-009.png"
    }
   ],
   "spec": "tests/B2C-168.spec.ts:275",
   "status": "Aprobado",
   "steps": "1. El usuario hace clic en \"Ingresa\" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n4. El sistema carga el carrito.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{SKU_CROSS_SELLING} = 000000000401693004-UN\n{SKU_NOMBRE_CORTO} = 000000000000038061-UN\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 0,
   "executed_at": "2026-10-19",
   "expected": "{SKU_NO_DISPONIBLE} aparece en la sección de no disponibles del carro fusionado y {SKU_VALID_001} en disponibles.",
   "form_factor": "desktop",
   "id": "TC-B2C168-D-010",
   "name": "Verificar que un producto del carro invitado sin stock se agrega marcado como no disponible [Desktop] [Guest]",
   "observation": "Causa: 000000000400254005-UN (000000000400254005-UN) tiene stock en Unimarc Los leones (Unimarc Los Leones): con esa tienda activa la PDP muestra 'Agregar' (comprobado en esta corrida), así que no queda como no disponible. Acción: declarar en 000000000400254005-UN un SKU sin stock en Unimarc Los leones, o cambiar la tienda.",
   "observed": "No se pudo ejecutar el caso con la data declarada.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000400254005-UN x 1\n- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene ningún producto (preparado iniciando sesión previamente y cerrando sesión)\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock",
   "screenshots": [
    {
     "caption": "Paso 2 — pdp del sku con la tienda sin stock activa",
     "file": "TC-B2C168-D-010-p02-pdp-del-sku-con-la-tienda-sin-stock-activa.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario hace clic en \"Ingresa\" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n4. El sistema carga el carrito.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_NO_DISPONIBLE} = 000000000400254005-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_SIN_STOCK} = Unimarc Los leones\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 0,
   "executed_at": "2026-10-19",
   "expected": "{SKU_NO_DISPONIBLE} permanece como no disponible y {SKU_NOMBRE_CORTO} y {SKU_VALID_001} quedan disponibles.",
   "form_factor": "desktop",
   "id": "TC-B2C168-D-011",
   "name": "Verificar que un producto del carro logueado sin stock permanece como no disponible [Desktop] [Guest]",
   "observation": "Causa: 000000000400254005-UN (000000000400254005-UN) tiene stock en Unimarc Los leones (Unimarc Los Leones): con esa tienda activa la PDP muestra 'Agregar' (comprobado en esta corrida), así que no queda como no disponible. Acción: declarar en 000000000400254005-UN un SKU sin stock en Unimarc Los leones, o cambiar la tienda. (Comprobado en D-010 con los mismos datos.)",
   "observed": "No se pudo ejecutar el caso con la data declarada.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000000675191-UN x 1\n- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000038061-UN x 1 y 000000000400254005-UN x 1 (preparado iniciando sesión previamente y cerrando sesión)\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock",
   "status": "Bloqueado Data",
   "steps": "1. El usuario hace clic en \"Ingresa\" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n4. El sistema carga el carrito.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_NOMBRE_CORTO} = 000000000000038061-UN\n{SKU_NO_DISPONIBLE} = 000000000400254005-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_SIN_STOCK} = Unimarc Los leones\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 0,
   "executed_at": "2026-10-19",
   "expected": "Cada producto muestra el precio de su promoción vigente y el total y el \"Subtotal con Unipay\" se calculan sobre todos los productos fusionados.",
   "form_factor": "desktop",
   "id": "TC-B2C168-D-012",
   "name": "Verificar que tras la fusión se recalculan precios, promociones y subtotal con Unipay [Desktop] [Guest]",
   "observation": "Causa: la precondición arma el carro de invitado con 000000000641229002-UN × 1, pero 000000000641229002-UN no está en el Test data de la fila (tampoco declara dirección para el invitado). Acción: declarar 000000000641229002-UN y Calle Uno 23, La Florida en la fila.",
   "observed": "No se pudo ejecutar el caso con la data declarada.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000641229002-UN x 1 y 000000000000661945-UN x 1\n- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000675191-UN x 2 (preparado iniciando sesión previamente y cerrando sesión)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario hace clic en \"Ingresa\" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n4. El sistema carga el carrito.\n5. El usuario revisa precios, promociones y el resumen de totales.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{SKU_UNIPAY_001} = 000000000000661945-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 0,
   "executed_at": "2026-10-19",
   "expected": "El carro de la nueva cuenta contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 2.",
   "form_factor": "desktop",
   "id": "TC-B2C168-D-014",
   "name": "Verificar que un usuario que se registra por primera vez inicia con el carro invitado [Desktop] [Guest]",
   "observation": "Causa: registrar una cuenta nueva pide nombre, RUT y teléfono, y la fila solo declara daunuruco+nuevo@avatar-global.com; no se inventan datos personales. Acción: declarar en la fila (o en el Excel de data) los datos de registro de una cuenta nueva por ejecución, con acceso al OTP.",
   "observed": "No se pudo ejecutar el caso con la data declarada.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000000674797-UN x 2\n- daunuruco+nuevo@avatar-global.com no está registrado (usar un correo nuevo por ejecución)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario hace clic en \"Ingresa\" y elige registrarse con el correo daunuruco+nuevo@avatar-global.com.\n2. El usuario completa el registro e inicia sesión.\n3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n4. El sistema carga el carrito.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{EMAIL_NUEVO_REGISTRO} = daunuruco+nuevo@avatar-global.com\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 174.5,
   "executed_at": "2026-10-19",
   "expected": "El minicarro logueado muestra los 3 productos fusionados: {SKU_VALID_001} x 1, {SKU_UNITARIO} x 2 (del invitado) y {SKU_COMBINA_PROMO} x 1 (del logueado). Cantidades sin modificación. El subtotal refleja el total del carro fusionado. El minicarro se actualiza en la misma sesión sin recargar la página.",
   "form_factor": "desktop",
   "id": "TC-B2C168-D-015",
   "name": "Verificar que el merge desde el minicarro invitado fusiona el carro y el minicarro logueado refleja el resultado [Desktop] [Guest]",
   "observation": "El minicarro del invitado muestra los 2 productos; tras iniciar sesión el minicarro muestra los 3 productos fusionados con sus cantidades y su subtotal coincide con el del carro. Pasó en el segundo intento.",
   "observed": "Se cumple el resultado esperado.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Minicarro (header)\n- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000000674797-UN x 2\n- La cuenta daunuruco+comprador@avatar-global.com tiene el carro logueado con 000000000000666200-UN x 1 (producto distinto al invitado)",
   "screenshots": [
    {
     "caption": "Paso 3 — mini carro del invitado",
     "file": "TC-B2C168-D-015-p03-mini-carro-del-invitado.png"
    },
    {
     "caption": "Paso 6 — mini carro del logueado con los 3 productos",
     "file": "TC-B2C168-D-015-p06-mini-carro-del-logueado-con-los-3-productos.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C168-D-015.png"
    }
   ],
   "spec": "tests/B2C-168.spec.ts:293",
   "status": "Aprobado",
   "steps": "1. Como invitado, agregar 000000000000675191-UN x 1 y 000000000000674797-UN x 2 al carro.\n2. Abrir el minicarro desde el ícono del header (sin navegar al carro full-page).\n3. Verificar que el minicarro invitado muestra los 2 productos.\n4. Desde cualquier página, iniciar sesión con daunuruco+comprador@avatar-global.com (cuenta que tiene 000000000000666200-UN x 1 en su carro logueado).\n5. Una vez logueado, abrir el minicarro desde el ícono del header.\n6. Verificar que el minicarro logueado contiene los 3 productos: 000000000000675191-UN x 1, 000000000000674797-UN x 2 y 000000000000666200-UN x 1.\n7. Verificar que las cantidades de cada producto son correctas (regla CA5: productos distintos, sin modificación de cantidades).\n8. Verificar que el subtotal del minicarro refleja el carro fusionado completo.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{SKU_COMBINA_PROMO} = 000000000000666200-UN\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "webkit",
   "duration_s": 354.1,
   "executed_at": "2026-10-19",
   "expected": "El carro logueado contiene {SKU_VALID_001} x 2 y {SKU_UNITARIO} x 1, igual al carro invitado.",
   "form_factor": "mobile",
   "id": "TC-B2C168-M-003",
   "name": "Verificar que un carro invitado con productos pasa completo a un carro logueado vacío [Mobile] [Guest]",
   "observation": "Carro guardado vacío; el invitado con 000000000000675191-UN × 2 y 000000000000674797-UN × 1 inicia sesión y el carro fusionado trae los mismos productos y cantidades. Fallaron intentos previos por la preparación en Mobile (banner de cookies que no se cierra); este pasó.",
   "observed": "Se cumple el resultado esperado.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000000675191-UN x 2 y 000000000000674797-UN x 1\n- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene ningún producto (preparado iniciando sesión previamente y cerrando sesión)",
   "screenshots": [
    {
     "caption": "Paso 0 — invitado con su carro armado",
     "file": "TC-B2C168-M-003-p00-invitado-con-su-carro-armado.png"
    },
    {
     "caption": "Paso 2 — sesion iniciada",
     "file": "TC-B2C168-M-003-p02-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — carro tras la fusion",
     "file": "TC-B2C168-M-003-p04-carro-tras-la-fusion.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C168-M-003.png"
    }
   ],
   "spec": "tests/B2C-168.spec.ts:241",
   "status": "Aprobado",
   "steps": "1. El usuario toca \"Ingresa\" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n4. El sistema carga el carrito.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{SKU_CROSS_SELLING} = 000000000401693004-UN\n{SKU_NOMBRE_CORTO} = 000000000000038061-UN\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 424.0,
   "executed_at": "2026-10-19",
   "expected": "El carro contiene {SKU_VALID_001} x 1, {SKU_UNITARIO} x 2, {SKU_NOMBRE_CORTO} x 1 y {SKU_CROSS_SELLING} x 3.",
   "form_factor": "mobile",
   "id": "TC-B2C168-M-006",
   "name": "Verificar que productos distintos de ambos carros se suman sin modificar cantidades [Mobile] [Guest]",
   "observation": "Productos distintos de ambos carros se suman sin cambiar cantidades. Pasó en el segundo intento; el primero falló por la preparación en Mobile (banner de cookies que no se cierra).",
   "observed": "Se cumple el resultado esperado.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000000674797-UN x 2\n- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000038061-UN x 1 y 000000000401693004-UN x 3 (preparado iniciando sesión previamente y cerrando sesión)\n- Método de entrega activo",
   "screenshots": [
    {
     "caption": "Paso 0 — invitado con su carro armado",
     "file": "TC-B2C168-M-006-p00-invitado-con-su-carro-armado.png"
    },
    {
     "caption": "Paso 2 — sesion iniciada",
     "file": "TC-B2C168-M-006-p02-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — carro tras la fusion",
     "file": "TC-B2C168-M-006-p04-carro-tras-la-fusion.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C168-M-006.png"
    }
   ],
   "spec": "tests/B2C-168.spec.ts:258",
   "status": "Aprobado",
   "steps": "1. El usuario toca \"Ingresa\" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n4. El sistema carga el carrito.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{SKU_CROSS_SELLING} = 000000000401693004-UN\n{SKU_NOMBRE_CORTO} = 000000000000038061-UN\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "duration_s": 239.0,
   "executed_at": "2026-10-19",
   "expected": "El carro queda con {SKU_VALID_001} x 2, {SKU_UNITARIO} x 1, {SKU_NOMBRE_CORTO} x 3 y {SKU_CROSS_SELLING} x 2.",
   "form_factor": "mobile",
   "id": "TC-B2C168-M-009",
   "name": "Verificar que con duplicados y distintos el carro fusionado aplica la regla a cada producto [Mobile] [Guest]",
   "observation": "Con productos repetidos, la cantidad del invitado prevalece (000000000000675191-UN × 2, 000000000000674797-UN × 1, 000000000000038061-UN × 3) y se conserva 000000000401693004-UN × 2 del carro guardado. Corrió con Chromium en formato móvil (390x844): con WebKit el Home del invitado se congelaba por imágenes lentas y el caso no llegaba al login.",
   "observed": "Se cumple el resultado esperado.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000000675191-UN x 2, 000000000000674797-UN x 1 y 000000000000038061-UN x 3\n- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000674797-UN x 4, 000000000000038061-UN x 1 y 000000000401693004-UN x 2 (preparado iniciando sesión previamente y cerrando sesión)",
   "screenshots": [
    {
     "caption": "Paso 0 — invitado con su carro armado",
     "file": "TC-B2C168-M-009-p00-invitado-con-su-carro-armado.png"
    },
    {
     "caption": "Paso 2 — sesion iniciada",
     "file": "TC-B2C168-M-009-p02-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — carro tras la fusion",
     "file": "TC-B2C168-M-009-p04-carro-tras-la-fusion.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C168-M-009.png"
    }
   ],
   "spec": "tests/B2C-168.spec.ts:277",
   "status": "Aprobado",
   "steps": "1. El usuario toca \"Ingresa\" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n4. El sistema carga el carrito.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{SKU_CROSS_SELLING} = 000000000401693004-UN\n{SKU_NOMBRE_CORTO} = 000000000000038061-UN\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 0,
   "executed_at": "2026-10-19",
   "expected": "{SKU_NO_DISPONIBLE} permanece como no disponible y {SKU_NOMBRE_CORTO} y {SKU_VALID_001} quedan disponibles.",
   "form_factor": "mobile",
   "id": "TC-B2C168-M-011",
   "name": "Verificar que un producto del carro logueado sin stock permanece como no disponible [Mobile] [Guest]",
   "observation": "Causa: 000000000400254005-UN (000000000400254005-UN) tiene stock en Unimarc Los leones (Unimarc Los Leones): con esa tienda activa la PDP muestra 'Agregar' (comprobado en esta corrida), así que no queda como no disponible. Acción: declarar en 000000000400254005-UN un SKU sin stock en Unimarc Los leones, o cambiar la tienda. (Comprobado en D-010 con los mismos datos.)",
   "observed": "No se pudo ejecutar el caso con la data declarada.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000000675191-UN x 1\n- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000038061-UN x 1 y 000000000400254005-UN x 1 (preparado iniciando sesión previamente y cerrando sesión)\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock",
   "status": "Bloqueado Data",
   "steps": "1. El usuario toca \"Ingresa\" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n4. El sistema carga el carrito.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{SKU_NOMBRE_CORTO} = 000000000000038061-UN\n{SKU_NO_DISPONIBLE} = 000000000400254005-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_SIN_STOCK} = Unimarc Los leones\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 0,
   "executed_at": "2026-10-19",
   "expected": "Cada producto muestra el precio de su promoción vigente y el total y el \"Subtotal con Unipay\" se calculan sobre todos los productos fusionados.",
   "form_factor": "mobile",
   "id": "TC-B2C168-M-012",
   "name": "Verificar que tras la fusión se recalculan precios, promociones y subtotal con Unipay [Mobile] [Guest]",
   "observation": "Causa: la precondición arma el carro de invitado con 000000000641229002-UN × 1, pero 000000000641229002-UN no está en el Test data de la fila. Acción: declarar 000000000641229002-UN y la dirección del invitado en la fila.",
   "observed": "No se pudo ejecutar el caso con la data declarada.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000641229002-UN x 1 y 000000000000661945-UN x 1\n- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000675191-UN x 2 (preparado iniciando sesión previamente y cerrando sesión)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario toca \"Ingresa\" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n4. El sistema carga el carrito.\n5. El usuario revisa precios, promociones y el resumen de totales.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{SKU_UNIPAY_001} = 000000000000661945-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 0,
   "executed_at": "2026-10-19",
   "expected": "El carro de la nueva cuenta contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 2.",
   "form_factor": "mobile",
   "id": "TC-B2C168-M-014",
   "name": "Verificar que un usuario que se registra por primera vez inicia con el carro invitado [Mobile] [Guest]",
   "observation": "Causa: registrar una cuenta nueva pide nombre, RUT y teléfono, y la fila solo declara daunuruco+nuevo@avatar-global.com (y no la dirección del invitado). Acción: declarar los datos de registro y la dirección del invitado en la fila.",
   "observed": "No se pudo ejecutar el caso con la data declarada.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000000674797-UN x 2\n- daunuruco+nuevo@avatar-global.com no está registrado (usar un correo nuevo por ejecución)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario toca \"Ingresa\" y elige registrarse con el correo daunuruco+nuevo@avatar-global.com.\n2. El usuario completa el registro e inicia sesión.\n3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n4. El sistema carga el carrito.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{EMAIL_NUEVO_REGISTRO} = daunuruco+nuevo@avatar-global.com\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "duration_s": 0,
   "executed_at": "2026-10-19",
   "expected": "El carro muestra el resultado de la fusión ({SKU_VALID_001} x 2 y {SKU_NOMBRE_CORTO} x 1) sin necesidad de recargar.",
   "form_factor": "mobile",
   "id": "TC-B2C168-M-015",
   "name": "Verificar que en Mobile y App el carro fusionado se refleja sin recargar [Mobile] [Guest]",
   "observation": "Causa: el header del carro en Mobile ('Volver / Mi Carro / Más opciones') no tiene 'Ingresa aquí' y 'Más opciones' solo ofrece 'Guardar como lista' y 'Vaciar carro': el paso 3 ('toca Ingresa en el header') no se puede ejecutar como está escrito. Comprobado con Chromium en formato móvil. Acción: confirmar con negocio cómo inicia sesión un invitado desde el carro en Mobile (o ajustar el paso) y repetir el caso.",
   "observed": "No se pudo ejecutar: el carro de Mobile no ofrece iniciar sesión.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000000675191-UN x 2\n- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000038061-UN x 1 (preparado iniciando sesión previamente y cerrando sesión)",
   "screenshots": [
    {
     "caption": "Paso 2 — carro del invitado",
     "file": "TC-B2C168-M-015-p02-carro-del-invitado.png"
    },
    {
     "caption": "Paso 3 — menu mas opciones del carro",
     "file": "TC-B2C168-M-015-p03-menu-mas-opciones-del-carro.png"
    }
   ],
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Ingresa\" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.\n4. El sistema autentica al usuario y ejecuta la fusión de carros.\n5. El usuario vuelve al carro sin recargar.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{SKU_CROSS_SELLING} = 000000000401693004-UN\n{SKU_NOMBRE_CORTO} = 000000000000038061-UN\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "390x844"
  }
 ]
}
-->


---

## B2C-70 - Store Locator del header - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-70 |
| Última actualización | 2026-10-19 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | chromium |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-70 WEB Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

### Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 5 |
| Aprobado | 1 |
| **Total** | **6** |

### Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-19 | 6 | TC-B2C70-D-002, TC-B2C70-D-003, TC-B2C70-M-005, TC-B2C70-M-006, TC-B2C70-M-007, TC-B2C70-M-008 |

### Detalle por caso de prueba

#### TC-B2C70-D-002 - Con metodo de entrega activo, el Store Locator muestra el icono del metodo, la direccion o tienda seleccionada y el precio o condicion de despacho vigente

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 23.1 s |
| Spec | tests/B2C-70.spec.ts:179 |

**Precondiciones**

- Viewport: Desktop 1440x900

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

**Pasos ejecutados**

1. Configurar un metodo de entrega con direccion.
2. Navegar a distintas paginas y verificar el contenido del Store Locator.

**Resultado esperado**

El Store Locator muestra el icono del metodo activo, la direccion o tienda, y el label de precio/condicion de despacho.

**Resultado obtenido**

Se cumple el resultado esperado.

**Observación**

Con Calle Uno 23, La Florida como invitado, el Store Locator muestra en el Home y en una PDP el ícono de Despacho a domicilio activo, 'Calle Uno 23' y el label de precio. 'Navegar a distintas páginas' se hizo con Home y PDP: la fila no declara más rutas.

**Evidencia**

![Paso 2 — store locator en home](<B2C-70 Evidencias/TC-B2C70-D-002-p02-store-locator-en-home.png>)

![Paso 4 — store locator en la pdp](<B2C-70 Evidencias/TC-B2C70-D-002-p04-store-locator-en-la-pdp.png>)

![Estado final](<B2C-70 Evidencias/TC-B2C70-D-002.png>)

---

#### TC-B2C70-D-003 - La direccion o tienda mostrada se trunca a 53 caracteres en Desktop y 42 en Mobile, agregando puntos suspensivos

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- Viewport: Desktop 1440x900
- Viewport: Mobile 390x844

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{DIRECCION_LARGA_001} = Avenida Libertador General Bernardo O'Higgins (La Alameda) 1072, Maipú

**Pasos ejecutados**

1. Configurar una direccion/tienda con nombre largo.
2. Ver el Header en Desktop y verificar el truncamiento a 53 caracteres + puntos suspensivos.
3. Repetir en Mobile verificando el truncamiento a 42 caracteres.

**Resultado esperado**

En Desktop el texto se trunca a 53 caracteres + '...'; en Mobile se trunca a 42 caracteres + '...'.

**Resultado obtenido**

No se pudo ejecutar el caso con la data declarada.

**Observación**

Causa: el caso necesita un usuario logueado y una dirección o tienda de más de 53 caracteres; su columna Test data declara Avenida Libertador General Bernardo O'Higgins (La Alameda) 1072, Maipú pero ninguna cuenta. Acción: declarar en la fila la cuenta (con acceso al OTP) y la dirección o tienda de nombre largo.

---

#### TC-B2C70-M-005 - Verificar que el Store Locator mantiene método, dirección y label de precio al navegar [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- La cuenta {COMPRADOR_CON_DIRECCION_USER} tiene una dirección de despacho guardada y activa

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

{SRP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/search?q=carne

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home.
3. El usuario inicia sesión con la cuenta {COMPRADOR_CON_DIRECCION_USER}.
4. El sistema autentica al usuario, recarga el Home y muestra en el Store Locator del header el ícono de Despacho a domicilio, la dirección guardada y el label de precio.
5. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.
6. El sistema carga la PLP y muestra en el Store Locator del header el mismo ícono, dirección y label de precio.
7. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/search?q=carne.
8. El sistema carga la búsqueda y muestra en el Store Locator del header el mismo ícono, dirección y label de precio.

**Resultado esperado**

En el Home, PLP y búsqueda el Store Locator del header muestra el ícono de Despacho + la dirección guardada + el label de precio.

**Resultado obtenido**

No se pudo ejecutar el caso con la data declarada.

**Observación**

Causa: {COMPRADOR_CON_DIRECCION_USER} y {COMPRADOR_CON_DIRECCION_PASSWORD} no tienen fila en el Excel de data. Acción: cargar una cuenta con dirección de despacho guardada y activa, y con acceso al OTP de su casilla.

---

#### TC-B2C70-M-006 - Verificar que el header trunca a 42 caracteres con "…" una dirección larga [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- La cuenta tiene seleccionado Despacho a domicilio con Avenida Libertador General Bernardo O'Higgins (La Alameda) 1072, Maipú

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{DIRECCION_LARGA_001} = Avenida Libertador General Bernardo O'Higgins (La Alameda) 1072, Maipú

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home y muestra en el Store Locator del header los primeros 42 caracteres de Avenida Libertador General Bernardo O'Higgins (La Alameda) 1072, Maipú seguidos de "…".

**Resultado esperado**

El Store Locator del header muestra exactamente los primeros 42 caracteres de {DIRECCION_LARGA_001} (espacios incluidos) + "…".

**Resultado obtenido**

No se pudo ejecutar el caso con la data declarada.

**Observación**

Causa: la cuenta daunuruco+comprador@avatar-global.com no tiene guardada Avenida Libertador General Bernardo O'Higgins (La Alameda) 1072, Maipú ('Avenida Libertador General Bernardo O'Higgins (La Alameda) 1072, Maipú', 70 caracteres). Lo más parecido que tiene es 'Libertador General Bernardo O'Higgins 1072, Maipú' (sin 'Avenida'). Acción: guardar esa dirección en la cuenta o declarar en el Excel de data la dirección que realmente tiene.

---

#### TC-B2C70-M-007 - Verificar que el header muestra completa sin "…" una dirección de 42 caracteres [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- La cuenta tiene seleccionado Despacho a domicilio con Av Libertador Gral Bernardo O'Higgins 1072

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{DIRECCION_42_CHARS} = Av Libertador Gral Bernardo O'Higgins 1072

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home y muestra en el Store Locator del header la dirección Av Libertador Gral Bernardo O'Higgins 1072 completa.

**Resultado esperado**

El Store Locator del header muestra los 42 caracteres de {DIRECCION_42_CHARS} sin truncar y sin "…".

**Resultado obtenido**

No se pudo ejecutar el caso con la data declarada.

**Observación**

Causa: la cuenta daunuruco+comprador@avatar-global.com no tiene guardada Av Libertador Gral Bernardo O'Higgins 1072 ('Av Libertador Gral Bernardo O'Higgins 1072'). Tiene 'Libertador General Bernardo O'Higgins 1072, Maipú', cuyo texto sin comuna también mide 42 caracteres pero se escribe distinto. Acción: guardar la dirección declarada o declarar la que la cuenta tiene guardada.

---

#### TC-B2C70-M-008 - Verificar que el header trunca a 42 caracteres con "…" una tienda de nombre largo [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- La cuenta tiene seleccionado Retiro en tienda en Unimarc Ignacio Carrera Pinto

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{TIENDA_NOMBRE_LARGO_001} = Unimarc Ignacio Carrera Pinto

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home y muestra en el Store Locator del header los primeros 42 caracteres de Unimarc Ignacio Carrera Pinto seguidos de "…".

**Resultado esperado**

El Store Locator del header muestra exactamente los primeros 42 caracteres de {TIENDA_NOMBRE_LARGO_001} + "…".

**Resultado obtenido**

No se pudo ejecutar el caso con la data declarada.

**Observación**

Causa: Unimarc Ignacio Carrera Pinto ('Unimarc Ignacio Carrera Pinto') tiene solo 29 caracteres: no supera los 42, así que el caso (truncar a 42 caracteres + '…') no puede cumplirse con ese dato. Acción: declarar una tienda con un nombre de más de 42 caracteres.

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
  "suite": "B2C-70",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-70 WEB Test Cases.xlsx",
  "title": "B2C-70 - Store Locator del header - Evidencias QA",
  "updated_at": "2026-10-19"
 },
 "history": {
  "2026-10-19": [
   "TC-B2C70-D-002",
   "TC-B2C70-D-003",
   "TC-B2C70-M-005",
   "TC-B2C70-M-006",
   "TC-B2C70-M-007",
   "TC-B2C70-M-008"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "duration_s": 23.1,
   "executed_at": "2026-10-19",
   "expected": "El Store Locator muestra el icono del metodo activo, la direccion o tienda, y el label de precio/condicion de despacho.",
   "form_factor": "desktop",
   "id": "TC-B2C70-D-002",
   "name": "Con metodo de entrega activo, el Store Locator muestra el icono del metodo, la direccion o tienda seleccionada y el precio o condicion de despacho vigente",
   "observation": "Con Calle Uno 23, La Florida como invitado, el Store Locator muestra en el Home y en una PDP el ícono de Despacho a domicilio activo, 'Calle Uno 23' y el label de precio. 'Navegar a distintas páginas' se hizo con Home y PDP: la fila no declara más rutas.",
   "observed": "Se cumple el resultado esperado.",
   "preconditions": "- Viewport: Desktop 1440x900",
   "screenshots": [
    {
     "caption": "Paso 2 — store locator en home",
     "file": "TC-B2C70-D-002-p02-store-locator-en-home.png"
    },
    {
     "caption": "Paso 4 — store locator en la pdp",
     "file": "TC-B2C70-D-002-p04-store-locator-en-la-pdp.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C70-D-002.png"
    }
   ],
   "spec": "tests/B2C-70.spec.ts:179",
   "status": "Aprobado",
   "steps": "1. Configurar un metodo de entrega con direccion.\n2. Navegar a distintas paginas y verificar el contenido del Store Locator.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 0,
   "executed_at": "2026-10-19",
   "expected": "En Desktop el texto se trunca a 53 caracteres + '...'; en Mobile se trunca a 42 caracteres + '...'.",
   "form_factor": "desktop",
   "id": "TC-B2C70-D-003",
   "name": "La direccion o tienda mostrada se trunca a 53 caracteres en Desktop y 42 en Mobile, agregando puntos suspensivos",
   "observation": "Causa: el caso necesita un usuario logueado y una dirección o tienda de más de 53 caracteres; su columna Test data declara Avenida Libertador General Bernardo O'Higgins (La Alameda) 1072, Maipú pero ninguna cuenta. Acción: declarar en la fila la cuenta (con acceso al OTP) y la dirección o tienda de nombre largo.",
   "observed": "No se pudo ejecutar el caso con la data declarada.",
   "preconditions": "- Viewport: Desktop 1440x900\n- Viewport: Mobile 390x844",
   "status": "Bloqueado Data",
   "steps": "1. Configurar una direccion/tienda con nombre largo.\n2. Ver el Header en Desktop y verificar el truncamiento a 53 caracteres + puntos suspensivos.\n3. Repetir en Mobile verificando el truncamiento a 42 caracteres.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{DIRECCION_LARGA_001} = Avenida Libertador General Bernardo O'Higgins (La Alameda) 1072, Maipú",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 0,
   "executed_at": "2026-10-19",
   "expected": "En el Home, PLP y búsqueda el Store Locator del header muestra el ícono de Despacho + la dirección guardada + el label de precio.",
   "form_factor": "mobile",
   "id": "TC-B2C70-M-005",
   "name": "Verificar que el Store Locator mantiene método, dirección y label de precio al navegar [Mobile] [Logueado]",
   "observation": "Causa: {COMPRADOR_CON_DIRECCION_USER} y {COMPRADOR_CON_DIRECCION_PASSWORD} no tienen fila en el Excel de data. Acción: cargar una cuenta con dirección de despacho guardada y activa, y con acceso al OTP de su casilla.",
   "observed": "No se pudo ejecutar el caso con la data declarada.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- La cuenta {COMPRADOR_CON_DIRECCION_USER} tiene una dirección de despacho guardada y activa",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home.\n3. El usuario inicia sesión con la cuenta {COMPRADOR_CON_DIRECCION_USER}.\n4. El sistema autentica al usuario, recarga el Home y muestra en el Store Locator del header el ícono de Despacho a domicilio, la dirección guardada y el label de precio.\n5. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.\n6. El sistema carga la PLP y muestra en el Store Locator del header el mismo ícono, dirección y label de precio.\n7. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/search?q=carne.\n8. El sistema carga la búsqueda y muestra en el Store Locator del header el mismo ícono, dirección y label de precio.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n{SRP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/search?q=carne",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "duration_s": 0,
   "executed_at": "2026-10-19",
   "expected": "El Store Locator del header muestra exactamente los primeros 42 caracteres de {DIRECCION_LARGA_001} (espacios incluidos) + \"…\".",
   "form_factor": "mobile",
   "id": "TC-B2C70-M-006",
   "name": "Verificar que el header trunca a 42 caracteres con \"…\" una dirección larga [Mobile] [Logueado]",
   "observation": "Causa: la cuenta daunuruco+comprador@avatar-global.com no tiene guardada Avenida Libertador General Bernardo O'Higgins (La Alameda) 1072, Maipú ('Avenida Libertador General Bernardo O'Higgins (La Alameda) 1072, Maipú', 70 caracteres). Lo más parecido que tiene es 'Libertador General Bernardo O'Higgins 1072, Maipú' (sin 'Avenida'). Acción: guardar esa dirección en la cuenta o declarar en el Excel de data la dirección que realmente tiene.",
   "observed": "No se pudo ejecutar el caso con la data declarada.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- La cuenta tiene seleccionado Despacho a domicilio con Avenida Libertador General Bernardo O'Higgins (La Alameda) 1072, Maipú",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home y muestra en el Store Locator del header los primeros 42 caracteres de Avenida Libertador General Bernardo O'Higgins (La Alameda) 1072, Maipú seguidos de \"…\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{DIRECCION_LARGA_001} = Avenida Libertador General Bernardo O'Higgins (La Alameda) 1072, Maipú\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "duration_s": 0,
   "executed_at": "2026-10-19",
   "expected": "El Store Locator del header muestra los 42 caracteres de {DIRECCION_42_CHARS} sin truncar y sin \"…\".",
   "form_factor": "mobile",
   "id": "TC-B2C70-M-007",
   "name": "Verificar que el header muestra completa sin \"…\" una dirección de 42 caracteres [Mobile] [Logueado]",
   "observation": "Causa: la cuenta daunuruco+comprador@avatar-global.com no tiene guardada Av Libertador Gral Bernardo O'Higgins 1072 ('Av Libertador Gral Bernardo O'Higgins 1072'). Tiene 'Libertador General Bernardo O'Higgins 1072, Maipú', cuyo texto sin comuna también mide 42 caracteres pero se escribe distinto. Acción: guardar la dirección declarada o declarar la que la cuenta tiene guardada.",
   "observed": "No se pudo ejecutar el caso con la data declarada.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- La cuenta tiene seleccionado Despacho a domicilio con Av Libertador Gral Bernardo O'Higgins 1072",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home y muestra en el Store Locator del header la dirección Av Libertador Gral Bernardo O'Higgins 1072 completa.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{DIRECCION_42_CHARS} = Av Libertador Gral Bernardo O'Higgins 1072\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "duration_s": 0,
   "executed_at": "2026-10-19",
   "expected": "El Store Locator del header muestra exactamente los primeros 42 caracteres de {TIENDA_NOMBRE_LARGO_001} + \"…\".",
   "form_factor": "mobile",
   "id": "TC-B2C70-M-008",
   "name": "Verificar que el header trunca a 42 caracteres con \"…\" una tienda de nombre largo [Mobile] [Logueado]",
   "observation": "Causa: Unimarc Ignacio Carrera Pinto ('Unimarc Ignacio Carrera Pinto') tiene solo 29 caracteres: no supera los 42, así que el caso (truncar a 42 caracteres + '…') no puede cumplirse con ese dato. Acción: declarar una tienda con un nombre de más de 42 caracteres.",
   "observed": "No se pudo ejecutar el caso con la data declarada.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- La cuenta tiene seleccionado Retiro en tienda en Unimarc Ignacio Carrera Pinto",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home y muestra en el Store Locator del header los primeros 42 caracteres de Unimarc Ignacio Carrera Pinto seguidos de \"…\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{TIENDA_NOMBRE_LARGO_001} = Unimarc Ignacio Carrera Pinto\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "390x844"
  }
 ]
}
-->


---
