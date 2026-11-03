# B2C-125 (web) - Validación OTP al cambiar dirección o tienda - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-125 |
| Última actualización | 2026-11-02 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | chromium |
| Origen de los TC | Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-125 Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 26 |
| Bloqueado Data | 8 |
| Rechazado | 4 |
| Bloqueado | 2 |
| **Total** | **40** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-02 | 40 | TC-B2C125-D-001, TC-B2C125-D-002, TC-B2C125-D-003, TC-B2C125-D-004, TC-B2C125-D-005, TC-B2C125-D-006, TC-B2C125-D-007, TC-B2C125-D-008, TC-B2C125-D-009, TC-B2C125-D-010, TC-B2C125-D-011, TC-B2C125-D-012, TC-B2C125-D-013, TC-B2C125-D-014, TC-B2C125-D-015, TC-B2C125-D-016, TC-B2C125-D-017, TC-B2C125-D-018, TC-B2C125-D-019, TC-B2C125-D-020, TC-B2C125-M-001, TC-B2C125-M-002, TC-B2C125-M-003, TC-B2C125-M-004, TC-B2C125-M-005, TC-B2C125-M-006, TC-B2C125-M-007, TC-B2C125-M-008, TC-B2C125-M-009, TC-B2C125-M-010, TC-B2C125-M-011, TC-B2C125-M-012, TC-B2C125-M-013, TC-B2C125-M-014, TC-B2C125-M-015, TC-B2C125-M-016, TC-B2C125-M-017, TC-B2C125-M-018, TC-B2C125-M-019, TC-B2C125-M-020 |

## Detalle por caso de prueba

### TC-B2C125-D-001 - Verificar que al confirmar un cambio a una dirección nueva (no guardada) se envía el OTP y se muestra el toast de envío [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-125.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- {DIRECCION_OTRA_TIENDA} es una dirección nueva: no está guardada en la libreta de direcciones de {USER_AUTH_001} (si quedó guardada por una ejecución anterior, p. ej. D/M/APP-008, eliminarla antes de ejecutar)
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".

**Resultado esperado**

Llega un código OTP al correo registrado, se muestra el modal de ingreso y el toast "El código de verificación ha sido enviado. Revisa tu correo" con X.

**Evidencia**

![Paso 2 — home con la sesion iniciada](<B2C-125 Evidencias/TC-B2C125-D-001-p02-home-con-la-sesion-iniciada.png>)

![Paso 4 — store locator abierto pestana despacho a domicilio](<B2C-125 Evidencias/TC-B2C125-D-001-p04-store-locator-abierto-pestana-despacho-a-domicilio.png>)

![Paso 5 — direccion elegida de las sugerencias](<B2C-125 Evidencias/TC-B2C125-D-001-p05-direccion-elegida-de-las-sugerencias.png>)

![Paso 6 — modal autenticacion requerida y toast de envio](<B2C-125 Evidencias/TC-B2C125-D-001-p06-modal-autenticacion-requerida-y-toast-de-envio.png>)

![Estado final](<B2C-125 Evidencias/TC-B2C125-D-001.png>)

---

### TC-B2C125-D-002 - Verificar que el modal Autenticación requerida muestra todos sus elementos [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-125.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
7. El usuario revisa el modal.

**Resultado esperado**

El modal muestra el botón la X, el título "Autenticación requerida", "Enviamos un código de verificación al correo" con el correo enmascarado, 6 campos de código, "¿No recibiste el código? Pide uno nuevo en" con temporizador, el mensaje "Importante: Asegúrate de ingresar correctamente el código de verificación" y el botón "Continuar".

**Evidencia**

![Paso 2 — home con la sesion iniciada](<B2C-125 Evidencias/TC-B2C125-D-002-p02-home-con-la-sesion-iniciada.png>)

![Paso 4 — store locator abierto pestana despacho a domicilio](<B2C-125 Evidencias/TC-B2C125-D-002-p04-store-locator-abierto-pestana-despacho-a-domicilio.png>)

![Paso 5 — direccion elegida de las sugerencias](<B2C-125 Evidencias/TC-B2C125-D-002-p05-direccion-elegida-de-las-sugerencias.png>)

![Paso 6 — modal autenticacion requerida con todos sus elementos](<B2C-125 Evidencias/TC-B2C125-D-002-p06-modal-autenticacion-requerida-con-todos-sus-elementos.png>)

![Estado final](<B2C-125 Evidencias/TC-B2C125-D-002.png>)

---

### TC-B2C125-D-003 - Verificar que el correo del modal OTP se muestra enmascarado según la regla [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-125.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
7. El usuario revisa el correo mostrado en el modal.

**Resultado esperado**

El correo de {USER_AUTH_001} se muestra con el formato "gir****@h***.com" (3 caracteres, primera letra del dominio y .com).

**Evidencia**

![Paso 2 — home con la sesion iniciada](<B2C-125 Evidencias/TC-B2C125-D-003-p02-home-con-la-sesion-iniciada.png>)

![Paso 4 — store locator abierto pestana despacho a domicilio](<B2C-125 Evidencias/TC-B2C125-D-003-p04-store-locator-abierto-pestana-despacho-a-domicilio.png>)

![Paso 5 — direccion elegida de las sugerencias](<B2C-125 Evidencias/TC-B2C125-D-003-p05-direccion-elegida-de-las-sugerencias.png>)

![Paso 6 — correo enmascarado en el modal](<B2C-125 Evidencias/TC-B2C125-D-003-p06-correo-enmascarado-en-el-modal.png>)

![Estado final](<B2C-125 Evidencias/TC-B2C125-D-003.png>)

---

### TC-B2C125-D-004 - Verificar que al ingresar un dígito el foco avanza al siguiente campo [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-125.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
7. El usuario ingresa el primer dígito del código.

**Resultado esperado**

El foco avanza automáticamente al segundo campo.

**Evidencia**

![Paso 2 — home con la sesion iniciada](<B2C-125 Evidencias/TC-B2C125-D-004-p02-home-con-la-sesion-iniciada.png>)

![Paso 4 — store locator abierto pestana despacho a domicilio](<B2C-125 Evidencias/TC-B2C125-D-004-p04-store-locator-abierto-pestana-despacho-a-domicilio.png>)

![Paso 5 — direccion elegida de las sugerencias](<B2C-125 Evidencias/TC-B2C125-D-004-p05-direccion-elegida-de-las-sugerencias.png>)

![Paso 7 — primer digito escrito y foco en el segundo campo](<B2C-125 Evidencias/TC-B2C125-D-004-p07-primer-digito-escrito-y-foco-en-el-segundo-campo.png>)

![Estado final](<B2C-125 Evidencias/TC-B2C125-D-004.png>)

---

### TC-B2C125-D-005 - Verificar que los campos OTP no aceptan letras, símbolos ni espacios [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-125.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {OTP_CON_LETRAS} = 12a$4
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
7. El usuario escribe {OTP_CON_LETRAS} en los campos.

**Resultado esperado**

Los campos solo aceptan los dígitos; las letras, símbolos y espacios no se ingresan.

**Observación**

Falta data: token sin fila en el Excel de data {OTP_CON_LETRAS}. Acción: cargar el valor en el Excel de data (quien administra la data).

---

### TC-B2C125-D-006 - Verificar que con menos de 6 dígitos no se permite continuar [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-125.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
7. El usuario ingresa solo 5 dígitos.
8. El usuario intenta hacer clic en "Continuar".

**Resultado esperado**

No se permite continuar con la validación con el código incompleto.

**Evidencia**

![Paso 2 — home con la sesion iniciada](<B2C-125 Evidencias/TC-B2C125-D-006-p02-home-con-la-sesion-iniciada.png>)

![Paso 4 — store locator abierto pestana despacho a domicilio](<B2C-125 Evidencias/TC-B2C125-D-006-p04-store-locator-abierto-pestana-despacho-a-domicilio.png>)

![Paso 5 — direccion elegida de las sugerencias](<B2C-125 Evidencias/TC-B2C125-D-006-p05-direccion-elegida-de-las-sugerencias.png>)

![Paso 7 — cinco digitos ingresados](<B2C-125 Evidencias/TC-B2C125-D-006-p07-cinco-digitos-ingresados.png>)

![Estado final](<B2C-125 Evidencias/TC-B2C125-D-006.png>)

---

### TC-B2C125-D-007 - Verificar que al validar el código la pantalla muestra el estado skeleton [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-125.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- DevTools abierto con throttling de red "Slow 3G"

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
7. El usuario ingresa el código OTP recibido y presiona "Continuar".

**Resultado esperado**

Mientras se valida el código, los componentes del modal se muestran en gris claro (skeleton).

**Evidencia**

![Paso 2 — home con la sesion iniciada](<B2C-125 Evidencias/TC-B2C125-D-007-p02-home-con-la-sesion-iniciada.png>)

![Paso 4 — store locator abierto pestana despacho a domicilio](<B2C-125 Evidencias/TC-B2C125-D-007-p04-store-locator-abierto-pestana-despacho-a-domicilio.png>)

![Paso 5 — direccion elegida de las sugerencias](<B2C-125 Evidencias/TC-B2C125-D-007-p05-direccion-elegida-de-las-sugerencias.png>)

![Paso 6 — codigo ingresado antes de validar](<B2C-125 Evidencias/TC-B2C125-D-007-p06-codigo-ingresado-antes-de-validar.png>)

![Paso 7 — validando el codigo con red lenta](<B2C-125 Evidencias/TC-B2C125-D-007-p07-validando-el-codigo-con-red-lenta.png>)

![Estado final](<B2C-125 Evidencias/TC-B2C125-D-007.png>)

---

### TC-B2C125-D-008 - Verificar que un OTP correcto aplica la dirección, cierra el modal y la guarda en la libreta [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-125.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- {DIRECCION_OTRA_TIENDA} tiene cobertura y SLAs

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
7. El usuario ingresa el código OTP recibido y presiona "Continuar".
8. El usuario revisa el Store Locator y la libreta de direcciones de Mi cuenta.

**Resultado esperado**

El modal se cierra, el usuario vuelve al punto de origen con {DIRECCION_OTRA_TIENDA} seteada en el Store Locator y la dirección queda en la libreta.

**Evidencia**

![Paso 2 — home con la sesion iniciada](<B2C-125 Evidencias/TC-B2C125-D-008-p02-home-con-la-sesion-iniciada.png>)

![Paso 4 — store locator abierto pestana despacho a domicilio](<B2C-125 Evidencias/TC-B2C125-D-008-p04-store-locator-abierto-pestana-despacho-a-domicilio.png>)

![Paso 5 — direccion elegida de las sugerencias](<B2C-125 Evidencias/TC-B2C125-D-008-p05-direccion-elegida-de-las-sugerencias.png>)

![Paso 6 — codigo ingresado](<B2C-125 Evidencias/TC-B2C125-D-008-p06-codigo-ingresado.png>)

![Paso 7 — store locator tras validar el otp](<B2C-125 Evidencias/TC-B2C125-D-008-p07-store-locator-tras-validar-el-otp.png>)

![Paso 8 — libreta de direcciones guardadas](<B2C-125 Evidencias/TC-B2C125-D-008-p08-libreta-de-direcciones-guardadas.png>)

![Estado final](<B2C-125 Evidencias/TC-B2C125-D-008.png>)

---

### TC-B2C125-D-009 - Verificar que el temporizador de reenvío inicia en 60 segundos y bloquea el reenvío [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-125.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".

**Resultado esperado**

El temporizador inicia en 60 segundos en cuenta regresiva y no se muestra la opción "Reenviar" mientras corre.

**Evidencia**

![Paso 2 — home con la sesion iniciada](<B2C-125 Evidencias/TC-B2C125-D-009-p02-home-con-la-sesion-iniciada.png>)

![Paso 4 — store locator abierto pestana despacho a domicilio](<B2C-125 Evidencias/TC-B2C125-D-009-p04-store-locator-abierto-pestana-despacho-a-domicilio.png>)

![Paso 5 — direccion elegida de las sugerencias](<B2C-125 Evidencias/TC-B2C125-D-009-p05-direccion-elegida-de-las-sugerencias.png>)

![Paso 6 — temporizador inicial 60 s](<B2C-125 Evidencias/TC-B2C125-D-009-p06-temporizador-inicial-60-s.png>)

![Estado final](<B2C-125 Evidencias/TC-B2C125-D-009.png>)

---

### TC-B2C125-D-010 - Verificar que al terminar el temporizador se muestra Reenviar [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-125.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
7. El usuario espera 60 segundos.

**Resultado esperado**

Al llegar a 0 se muestra la opción "Reenviar".

**Evidencia**

![Paso 2 — home con la sesion iniciada](<B2C-125 Evidencias/TC-B2C125-D-010-p02-home-con-la-sesion-iniciada.png>)

![Paso 4 — store locator abierto pestana despacho a domicilio](<B2C-125 Evidencias/TC-B2C125-D-010-p04-store-locator-abierto-pestana-despacho-a-domicilio.png>)

![Paso 5 — direccion elegida de las sugerencias](<B2C-125 Evidencias/TC-B2C125-D-010-p05-direccion-elegida-de-las-sugerencias.png>)

![Paso 7 — a los 60 s reenviar visible](<B2C-125 Evidencias/TC-B2C125-D-010-p07-a-los-60-s-reenviar-visible.png>)

![Estado final](<B2C-125 Evidencias/TC-B2C125-D-010.png>)

---

### TC-B2C125-D-011 - Verificar que un código incorrecto marca los campos en rojo con Código inválido [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-125.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {OTP_INCORRECTO} = 000000 (cualquier código distinto al recibido)
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
7. El usuario ingresa {OTP_INCORRECTO} y presiona "Continuar".

**Resultado esperado**

Los campos se pintan en rojo, se muestra "Código inválido" y el intento queda contabilizado.

**Observación**

Falta data: token sin fila en el Excel de data {OTP_INCORRECTO}. Acción: cargar el valor en el Excel de data (quien administra la data).

---

### TC-B2C125-D-012 - Verificar que un código expirado muestra Código inválido y el toast con Solicitar [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-125.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
7. El usuario espera más de 10 minutos.
8. El usuario ingresa el código recibido y presiona "Continuar".

**Resultado esperado**

Los campos se pintan en rojo, se muestra "Código inválido" y el toast persistente "El código expiró, solicita uno nuevo para continuar" con X y botón "Solicitar".

**Resultado obtenido**

Esperado: con el código expirado se muestra «Código inválido» y el toast persistente con «Solicitar». Obtenido: campos en rojo y toast correctos, pero el mensaje bajo los campos dice «El código expiró, solicita uno nuevo para continuar» y no «Código inválido». Bug B2C-1430.

**Observación**

Esperado: con el código expirado se muestra «Código inválido» y el toast persistente con «Solicitar». Obtenido: campos en rojo y toast correctos, pero el mensaje bajo los campos dice «El código expiró, solicita uno nuevo para continuar» y no «Código inválido». Bug B2C-1430.

**Evidencia**

![Paso 2 — home con la sesion iniciada](<B2C-125 Evidencias/TC-B2C125-D-012-p02-home-con-la-sesion-iniciada.png>)

![Paso 4 — store locator abierto pestana despacho a domicilio](<B2C-125 Evidencias/TC-B2C125-D-012-p04-store-locator-abierto-pestana-despacho-a-domicilio.png>)

![Paso 5 — direccion elegida de las sugerencias](<B2C-125 Evidencias/TC-B2C125-D-012-p05-direccion-elegida-de-las-sugerencias.png>)

![Paso 6 — modal autenticacion requerida recien abierto](<B2C-125 Evidencias/TC-B2C125-D-012-p06-modal-autenticacion-requerida-recien-abierto.png>)

![Paso 7 — tras mas de 10 minutos de espera](<B2C-125 Evidencias/TC-B2C125-D-012-p07-tras-mas-de-10-minutos-de-espera.png>)

![Paso 8 — codigo expirado ingresado](<B2C-125 Evidencias/TC-B2C125-D-012-p08-codigo-expirado-ingresado.png>)

---

### TC-B2C125-D-013 - Verificar que al quinto código incorrecto se bloquea el reenvío por 10 minutos [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-125.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {OTP_INCORRECTO} = 000000 (cualquier código distinto al recibido)
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
7. El usuario ingresa {OTP_INCORRECTO} y presiona "Continuar" 5 veces seguidas.
8. El usuario ingresa el código correcto recibido.

**Resultado esperado**

Se muestra el toast "Ha superado el máximo de intentos. Por seguridad, vuelve a intentarlo en 10 minutos" con X, "Reenviar" queda bloqueado por 10 minutos y el código correcto ya no es aceptado.

**Observación**

Falta data: token sin fila en el Excel de data {OTP_INCORRECTO}. Acción: cargar el valor en el Excel de data (quien administra la data).

---

### TC-B2C125-D-014 - Verificar que Reenviar envía un código nuevo, reinicia el temporizador y el nuevo código funciona [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-125.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
7. El usuario espera 60 segundos.
8. El usuario hace clic en "Reenviar".
9. El usuario ingresa el nuevo código y presiona "Continuar".

**Resultado esperado**

Llega un nuevo código al correo, el temporizador vuelve a 60 s y el nuevo código se valida correctamente.

**Resultado obtenido**

Esperado: tras «Reenviar» el temporizador vuelve a 60 s. Obtenido: aparece el aviso de código enviado y «Reenviar» queda disponible de inmediato, sin «Pide uno nuevo en 60s». El código nuevo llega y se valida bien. Bug B2C-1432.

**Observación**

Esperado: tras «Reenviar» el temporizador vuelve a 60 s. Obtenido: aparece el aviso de código enviado y «Reenviar» queda disponible de inmediato, sin «Pide uno nuevo en 60s». El código nuevo llega y se valida bien. Bug B2C-1432.

**Evidencia**

![Paso 2 — home con la sesion iniciada](<B2C-125 Evidencias/TC-B2C125-D-014-p02-home-con-la-sesion-iniciada.png>)

![Paso 4 — store locator abierto pestana despacho a domicilio](<B2C-125 Evidencias/TC-B2C125-D-014-p04-store-locator-abierto-pestana-despacho-a-domicilio.png>)

![Paso 5 — direccion elegida de las sugerencias](<B2C-125 Evidencias/TC-B2C125-D-014-p05-direccion-elegida-de-las-sugerencias.png>)

![Paso 7 — a los 60 s reenviar visible](<B2C-125 Evidencias/TC-B2C125-D-014-p07-a-los-60-s-reenviar-visible.png>)

![Paso 8 — tras reenviar temporizador en null s](<B2C-125 Evidencias/TC-B2C125-D-014-p08-tras-reenviar-temporizador-en-null-s.png>)

![Paso 9 — nuevo codigo validado](<B2C-125 Evidencias/TC-B2C125-D-014-p09-nuevo-codigo-validado.png>)

![Estado final](<B2C-125 Evidencias/TC-B2C125-D-014.png>)

---

### TC-B2C125-D-015 - Verificar que tras reenviar el código anterior ya no es válido [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-125.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
7. El usuario espera 60 segundos.
8. El usuario hace clic en "Reenviar".
9. El usuario ingresa el código del primer envío y presiona "Continuar".

**Resultado esperado**

El código anterior es rechazado con "Código inválido".

**Evidencia**

![Paso 2 — home con la sesion iniciada](<B2C-125 Evidencias/TC-B2C125-D-015-p02-home-con-la-sesion-iniciada.png>)

![Paso 4 — store locator abierto pestana despacho a domicilio](<B2C-125 Evidencias/TC-B2C125-D-015-p04-store-locator-abierto-pestana-despacho-a-domicilio.png>)

![Paso 5 — direccion elegida de las sugerencias](<B2C-125 Evidencias/TC-B2C125-D-015-p05-direccion-elegida-de-las-sugerencias.png>)

![Paso 8 — tras reenviar](<B2C-125 Evidencias/TC-B2C125-D-015-p08-tras-reenviar.png>)

![Paso 9 — codigo anterior rechazado](<B2C-125 Evidencias/TC-B2C125-D-015-p09-codigo-anterior-rechazado.png>)

![Estado final](<B2C-125 Evidencias/TC-B2C125-D-015.png>)

---

### TC-B2C125-D-016 - Verificar que cerrar el modal OTP cancela el cambio y mantiene la dirección anterior [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-125.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
7. El usuario hace clic en la X del modal.

**Resultado esperado**

El flujo OTP se cancela, el usuario vuelve al Store Locator y la dirección activa sigue siendo {DIRECCION_DESPACHO_001}.

**Evidencia**

![Paso 2 — home con la sesion iniciada](<B2C-125 Evidencias/TC-B2C125-D-016-p02-home-con-la-sesion-iniciada.png>)

![Paso 4 — store locator abierto pestana despacho a domicilio](<B2C-125 Evidencias/TC-B2C125-D-016-p04-store-locator-abierto-pestana-despacho-a-domicilio.png>)

![Paso 5 — direccion elegida de las sugerencias](<B2C-125 Evidencias/TC-B2C125-D-016-p05-direccion-elegida-de-las-sugerencias.png>)

![Paso 7 — tras la x del modal otp](<B2C-125 Evidencias/TC-B2C125-D-016-p07-tras-la-x-del-modal-otp.png>)

![Paso 8 — store locator con la direccion anterior activa](<B2C-125 Evidencias/TC-B2C125-D-016-p08-store-locator-con-la-direccion-anterior-activa.png>)

![Estado final](<B2C-125 Evidencias/TC-B2C125-D-016.png>)

---

### TC-B2C125-D-017 - Verificar que con OTP correcto un error al guardar muestra el toast y no cambia la dirección [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-125.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- DevTools abierto con bloqueo de la request {SETEO_ENTREGA_API_ENDPOINT} (Network request blocking)

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SETEO_ENTREGA_API_ENDPOINT} = TBD
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
7. El usuario ingresa el código OTP recibido y presiona "Continuar".

**Resultado esperado**

Se muestra el toast "Lo sentimos, no pudimos guardar tu dirección. Inténtalo nuevamente." y la dirección activa sigue siendo {DIRECCION_DESPACHO_001}.

**Observación**

Falta data: el bloqueo de la petición con {SETEO_ENTREGA_API_ENDPOINT} no tuvo efecto: la dirección se guardó igual y no apareció el toast de error. El endpoint declarado no coincide con la llamada real. Acción: declarar el endpoint correcto del guardado de dirección (quien administra el Excel de data).

**Evidencia**

![Paso 2 — home con la sesion iniciada](<B2C-125 Evidencias/TC-B2C125-D-017-p02-home-con-la-sesion-iniciada.png>)

![Paso 4 — store locator abierto pestana despacho a domicilio](<B2C-125 Evidencias/TC-B2C125-D-017-p04-store-locator-abierto-pestana-despacho-a-domicilio.png>)

![Paso 5 — direccion elegida de las sugerencias](<B2C-125 Evidencias/TC-B2C125-D-017-p05-direccion-elegida-de-las-sugerencias.png>)

![Paso 6 — codigo ingresado con la request bloqueada](<B2C-125 Evidencias/TC-B2C125-D-017-p06-codigo-ingresado-con-la-request-bloqueada.png>)

![Paso 7 — resultado tras validar el codigo](<B2C-125 Evidencias/TC-B2C125-D-017-p07-resultado-tras-validar-el-codigo.png>)

---

### TC-B2C125-M-001 - Verificar que al confirmar un cambio a una dirección nueva (no guardada) se envía el OTP y se muestra el toast de envío [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-125.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- {DIRECCION_OTRA_TIENDA} es una dirección nueva: no está guardada en la libreta de direcciones de {USER_AUTH_001} (si quedó guardada por una ejecución anterior, p. ej. D/M/APP-008, eliminarla antes de ejecutar)
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".

**Resultado esperado**

Llega un código OTP al correo registrado, se muestra el modal de ingreso y el toast "El código de verificación ha sido enviado. Revisa tu correo" con X.

**Evidencia**

![Paso 2 — home con la sesion iniciada](<B2C-125 Evidencias/TC-B2C125-M-001-p02-home-con-la-sesion-iniciada.png>)

![Paso 4 — store locator abierto pestana despacho a domicilio](<B2C-125 Evidencias/TC-B2C125-M-001-p04-store-locator-abierto-pestana-despacho-a-domicilio.png>)

![Paso 5 — direccion elegida de las sugerencias](<B2C-125 Evidencias/TC-B2C125-M-001-p05-direccion-elegida-de-las-sugerencias.png>)

![Paso 6 — modal autenticacion requerida y toast de envio](<B2C-125 Evidencias/TC-B2C125-M-001-p06-modal-autenticacion-requerida-y-toast-de-envio.png>)

![Estado final](<B2C-125 Evidencias/TC-B2C125-M-001.png>)

---

### TC-B2C125-M-002 - Verificar que el modal Autenticación requerida muestra todos sus elementos [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-125.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
7. El usuario revisa el modal.

**Resultado esperado**

El modal muestra el botón "<", el título "Autenticación requerida", "Enviamos un código de verificación al correo" con el correo enmascarado, 6 campos de código, "¿No recibiste el código? Pide uno nuevo en" con temporizador, el mensaje "Importante: Asegúrate de ingresar correctamente el código de verificación" y el botón "Continuar".

**Evidencia**

![Paso 2 — home con la sesion iniciada](<B2C-125 Evidencias/TC-B2C125-M-002-p02-home-con-la-sesion-iniciada.png>)

![Paso 4 — store locator abierto pestana despacho a domicilio](<B2C-125 Evidencias/TC-B2C125-M-002-p04-store-locator-abierto-pestana-despacho-a-domicilio.png>)

![Paso 5 — direccion elegida de las sugerencias](<B2C-125 Evidencias/TC-B2C125-M-002-p05-direccion-elegida-de-las-sugerencias.png>)

![Paso 6 — modal autenticacion requerida con todos sus elementos](<B2C-125 Evidencias/TC-B2C125-M-002-p06-modal-autenticacion-requerida-con-todos-sus-elementos.png>)

![Estado final](<B2C-125 Evidencias/TC-B2C125-M-002.png>)

---

### TC-B2C125-M-003 - Verificar que el correo del modal OTP se muestra enmascarado según la regla [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-125.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
7. El usuario revisa el correo mostrado en el modal.

**Resultado esperado**

El correo de {USER_AUTH_001} se muestra con el formato "gir****@h***.com" (3 caracteres, primera letra del dominio y .com).

**Evidencia**

![Paso 2 — home con la sesion iniciada](<B2C-125 Evidencias/TC-B2C125-M-003-p02-home-con-la-sesion-iniciada.png>)

![Paso 4 — store locator abierto pestana despacho a domicilio](<B2C-125 Evidencias/TC-B2C125-M-003-p04-store-locator-abierto-pestana-despacho-a-domicilio.png>)

![Paso 5 — direccion elegida de las sugerencias](<B2C-125 Evidencias/TC-B2C125-M-003-p05-direccion-elegida-de-las-sugerencias.png>)

![Paso 6 — correo enmascarado en el modal](<B2C-125 Evidencias/TC-B2C125-M-003-p06-correo-enmascarado-en-el-modal.png>)

![Estado final](<B2C-125 Evidencias/TC-B2C125-M-003.png>)

---

### TC-B2C125-M-004 - Verificar que al ingresar un dígito el foco avanza al siguiente campo [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-125.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
7. El usuario ingresa el primer dígito del código.

**Resultado esperado**

El foco avanza automáticamente al segundo campo.

**Evidencia**

![Paso 2 — home con la sesion iniciada](<B2C-125 Evidencias/TC-B2C125-M-004-p02-home-con-la-sesion-iniciada.png>)

![Paso 4 — store locator abierto pestana despacho a domicilio](<B2C-125 Evidencias/TC-B2C125-M-004-p04-store-locator-abierto-pestana-despacho-a-domicilio.png>)

![Paso 5 — direccion elegida de las sugerencias](<B2C-125 Evidencias/TC-B2C125-M-004-p05-direccion-elegida-de-las-sugerencias.png>)

![Paso 7 — primer digito escrito y foco en el segundo campo](<B2C-125 Evidencias/TC-B2C125-M-004-p07-primer-digito-escrito-y-foco-en-el-segundo-campo.png>)

![Estado final](<B2C-125 Evidencias/TC-B2C125-M-004.png>)

---

### TC-B2C125-M-005 - Verificar que los campos OTP no aceptan letras, símbolos ni espacios [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-125.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {OTP_CON_LETRAS} = 12a$4
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
7. El usuario escribe {OTP_CON_LETRAS} en los campos.

**Resultado esperado**

Los campos solo aceptan los dígitos; las letras, símbolos y espacios no se ingresan.

**Observación**

Falta data: token sin fila en el Excel de data {OTP_CON_LETRAS}. Acción: cargar el valor en el Excel de data (quien administra la data).

---

### TC-B2C125-M-006 - Verificar que con menos de 6 dígitos no se permite continuar [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-125.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
7. El usuario ingresa solo 5 dígitos.
8. El usuario intenta tocar "Continuar".

**Resultado esperado**

No se permite continuar con la validación con el código incompleto.

**Evidencia**

![Paso 2 — home con la sesion iniciada](<B2C-125 Evidencias/TC-B2C125-M-006-p02-home-con-la-sesion-iniciada.png>)

![Paso 4 — store locator abierto pestana despacho a domicilio](<B2C-125 Evidencias/TC-B2C125-M-006-p04-store-locator-abierto-pestana-despacho-a-domicilio.png>)

![Paso 5 — direccion elegida de las sugerencias](<B2C-125 Evidencias/TC-B2C125-M-006-p05-direccion-elegida-de-las-sugerencias.png>)

![Paso 7 — cinco digitos ingresados](<B2C-125 Evidencias/TC-B2C125-M-006-p07-cinco-digitos-ingresados.png>)

![Estado final](<B2C-125 Evidencias/TC-B2C125-M-006.png>)

---

### TC-B2C125-M-007 - Verificar que al validar el código la pantalla muestra el estado skeleton [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-125.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- DevTools abierto con throttling de red "Slow 3G"

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
7. El usuario ingresa el código OTP recibido y presiona "Continuar".

**Resultado esperado**

Mientras se valida el código, los componentes del modal se muestran en gris claro (skeleton).

**Evidencia**

![Paso 2 — home con la sesion iniciada](<B2C-125 Evidencias/TC-B2C125-M-007-p02-home-con-la-sesion-iniciada.png>)

![Paso 4 — store locator abierto pestana despacho a domicilio](<B2C-125 Evidencias/TC-B2C125-M-007-p04-store-locator-abierto-pestana-despacho-a-domicilio.png>)

![Paso 5 — direccion elegida de las sugerencias](<B2C-125 Evidencias/TC-B2C125-M-007-p05-direccion-elegida-de-las-sugerencias.png>)

![Paso 6 — codigo ingresado antes de validar](<B2C-125 Evidencias/TC-B2C125-M-007-p06-codigo-ingresado-antes-de-validar.png>)

![Paso 7 — validando el codigo con red lenta](<B2C-125 Evidencias/TC-B2C125-M-007-p07-validando-el-codigo-con-red-lenta.png>)

![Estado final](<B2C-125 Evidencias/TC-B2C125-M-007.png>)

---

### TC-B2C125-M-008 - Verificar que un OTP correcto aplica la dirección, cierra el modal y la guarda en la libreta [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-125.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- {DIRECCION_OTRA_TIENDA} tiene cobertura y SLAs

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
7. El usuario ingresa el código OTP recibido y presiona "Continuar".
8. El usuario revisa el Store Locator y la libreta de direcciones de Mi cuenta.

**Resultado esperado**

El modal se cierra, el usuario vuelve al punto de origen con {DIRECCION_OTRA_TIENDA} seteada en el Store Locator y la dirección queda en la libreta.

**Evidencia**

![Paso 2 — home con la sesion iniciada](<B2C-125 Evidencias/TC-B2C125-M-008-p02-home-con-la-sesion-iniciada.png>)

![Paso 4 — store locator abierto pestana despacho a domicilio](<B2C-125 Evidencias/TC-B2C125-M-008-p04-store-locator-abierto-pestana-despacho-a-domicilio.png>)

![Paso 5 — direccion elegida de las sugerencias](<B2C-125 Evidencias/TC-B2C125-M-008-p05-direccion-elegida-de-las-sugerencias.png>)

![Paso 6 — codigo ingresado](<B2C-125 Evidencias/TC-B2C125-M-008-p06-codigo-ingresado.png>)

![Paso 7 — store locator tras validar el otp](<B2C-125 Evidencias/TC-B2C125-M-008-p07-store-locator-tras-validar-el-otp.png>)

![Paso 8 — libreta de direcciones guardadas](<B2C-125 Evidencias/TC-B2C125-M-008-p08-libreta-de-direcciones-guardadas.png>)

![Estado final](<B2C-125 Evidencias/TC-B2C125-M-008.png>)

---

### TC-B2C125-M-009 - Verificar que el temporizador de reenvío inicia en 60 segundos y bloquea el reenvío [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-125.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".

**Resultado esperado**

El temporizador inicia en 60 segundos en cuenta regresiva y no se muestra la opción "Reenviar" mientras corre.

**Evidencia**

![Paso 2 — home con la sesion iniciada](<B2C-125 Evidencias/TC-B2C125-M-009-p02-home-con-la-sesion-iniciada.png>)

![Paso 4 — store locator abierto pestana despacho a domicilio](<B2C-125 Evidencias/TC-B2C125-M-009-p04-store-locator-abierto-pestana-despacho-a-domicilio.png>)

![Paso 5 — direccion elegida de las sugerencias](<B2C-125 Evidencias/TC-B2C125-M-009-p05-direccion-elegida-de-las-sugerencias.png>)

![Paso 6 — temporizador inicial 59 s](<B2C-125 Evidencias/TC-B2C125-M-009-p06-temporizador-inicial-59-s.png>)

![Estado final](<B2C-125 Evidencias/TC-B2C125-M-009.png>)

---

### TC-B2C125-M-010 - Verificar que al terminar el temporizador se muestra Reenviar [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-125.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
7. El usuario espera 60 segundos.

**Resultado esperado**

Al llegar a 0 se muestra la opción "Reenviar".

**Evidencia**

![Paso 2 — home con la sesion iniciada](<B2C-125 Evidencias/TC-B2C125-M-010-p02-home-con-la-sesion-iniciada.png>)

![Paso 4 — store locator abierto pestana despacho a domicilio](<B2C-125 Evidencias/TC-B2C125-M-010-p04-store-locator-abierto-pestana-despacho-a-domicilio.png>)

![Paso 5 — direccion elegida de las sugerencias](<B2C-125 Evidencias/TC-B2C125-M-010-p05-direccion-elegida-de-las-sugerencias.png>)

![Paso 7 — a los 60 s reenviar visible](<B2C-125 Evidencias/TC-B2C125-M-010-p07-a-los-60-s-reenviar-visible.png>)

![Estado final](<B2C-125 Evidencias/TC-B2C125-M-010.png>)

---

### TC-B2C125-M-011 - Verificar que un código incorrecto marca los campos en rojo con Código inválido [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-125.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {OTP_INCORRECTO} = 000000 (cualquier código distinto al recibido)
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
7. El usuario ingresa {OTP_INCORRECTO} y presiona "Continuar".

**Resultado esperado**

Los campos se pintan en rojo, se muestra "Código inválido" y el intento queda contabilizado.

**Observación**

Falta data: token sin fila en el Excel de data {OTP_INCORRECTO}. Acción: cargar el valor en el Excel de data (quien administra la data).

---

### TC-B2C125-M-012 - Verificar que un código expirado muestra Código inválido y el toast con Solicitar [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-125.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
7. El usuario espera más de 10 minutos.
8. El usuario ingresa el código recibido y presiona "Continuar".

**Resultado esperado**

Los campos se pintan en rojo, se muestra "Código inválido" y el toast persistente "El código expiró, solicita uno nuevo para continuar" con X y botón "Solicitar".

**Resultado obtenido**

Esperado: con el código expirado se muestra «Código inválido» y el toast persistente con «Solicitar». Obtenido: campos en rojo y toast correctos, pero el mensaje bajo los campos dice «El código expiró, solicita uno nuevo para continuar» y no «Código inválido». Bug B2C-1431.

**Observación**

Esperado: con el código expirado se muestra «Código inválido» y el toast persistente con «Solicitar». Obtenido: campos en rojo y toast correctos, pero el mensaje bajo los campos dice «El código expiró, solicita uno nuevo para continuar» y no «Código inválido». Bug B2C-1431.

**Evidencia**

![Paso 2 — home con la sesion iniciada](<B2C-125 Evidencias/TC-B2C125-M-012-p02-home-con-la-sesion-iniciada.png>)

![Paso 4 — store locator abierto pestana despacho a domicilio](<B2C-125 Evidencias/TC-B2C125-M-012-p04-store-locator-abierto-pestana-despacho-a-domicilio.png>)

![Paso 5 — direccion elegida de las sugerencias](<B2C-125 Evidencias/TC-B2C125-M-012-p05-direccion-elegida-de-las-sugerencias.png>)

![Paso 6 — modal autenticacion requerida recien abierto](<B2C-125 Evidencias/TC-B2C125-M-012-p06-modal-autenticacion-requerida-recien-abierto.png>)

![Paso 7 — tras mas de 10 minutos de espera](<B2C-125 Evidencias/TC-B2C125-M-012-p07-tras-mas-de-10-minutos-de-espera.png>)

![Paso 8 — codigo expirado ingresado](<B2C-125 Evidencias/TC-B2C125-M-012-p08-codigo-expirado-ingresado.png>)

---

### TC-B2C125-M-013 - Verificar que al quinto código incorrecto se bloquea el reenvío por 10 minutos [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-125.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {OTP_INCORRECTO} = 000000 (cualquier código distinto al recibido)
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
7. El usuario ingresa {OTP_INCORRECTO} y presiona "Continuar" 5 veces seguidas.
8. El usuario ingresa el código correcto recibido.

**Resultado esperado**

Se muestra el toast "Ha superado el máximo de intentos. Por seguridad, vuelve a intentarlo en 10 minutos" con X, "Reenviar" queda bloqueado por 10 minutos y el código correcto ya no es aceptado.

**Observación**

Falta data: token sin fila en el Excel de data {OTP_INCORRECTO}. Acción: cargar el valor en el Excel de data (quien administra la data).

---

### TC-B2C125-M-014 - Verificar que Reenviar envía un código nuevo, reinicia el temporizador y el nuevo código funciona [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-125.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
7. El usuario espera 60 segundos.
8. El usuario toca "Reenviar".
9. El usuario ingresa el nuevo código y presiona "Continuar".

**Resultado esperado**

Llega un nuevo código al correo, el temporizador vuelve a 60 s y el nuevo código se valida correctamente.

**Resultado obtenido**

Esperado: tras «Reenviar» el temporizador vuelve a 60 s. Obtenido: aparece el aviso de código enviado y «Reenviar» queda disponible de inmediato, sin «Pide uno nuevo en 60s». El código nuevo llega y se valida bien. Bug B2C-1433.

**Observación**

Esperado: tras «Reenviar» el temporizador vuelve a 60 s. Obtenido: aparece el aviso de código enviado y «Reenviar» queda disponible de inmediato, sin «Pide uno nuevo en 60s». El código nuevo llega y se valida bien. Bug B2C-1433.

**Evidencia**

![Paso 2 — home con la sesion iniciada](<B2C-125 Evidencias/TC-B2C125-M-014-p02-home-con-la-sesion-iniciada.png>)

![Paso 4 — store locator abierto pestana despacho a domicilio](<B2C-125 Evidencias/TC-B2C125-M-014-p04-store-locator-abierto-pestana-despacho-a-domicilio.png>)

![Paso 5 — direccion elegida de las sugerencias](<B2C-125 Evidencias/TC-B2C125-M-014-p05-direccion-elegida-de-las-sugerencias.png>)

![Paso 7 — a los 60 s reenviar visible](<B2C-125 Evidencias/TC-B2C125-M-014-p07-a-los-60-s-reenviar-visible.png>)

![Paso 8 — tras reenviar temporizador en null s](<B2C-125 Evidencias/TC-B2C125-M-014-p08-tras-reenviar-temporizador-en-null-s.png>)

![Paso 9 — nuevo codigo validado](<B2C-125 Evidencias/TC-B2C125-M-014-p09-nuevo-codigo-validado.png>)

![Estado final](<B2C-125 Evidencias/TC-B2C125-M-014.png>)

---

### TC-B2C125-M-015 - Verificar que tras reenviar el código anterior ya no es válido [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-125.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
7. El usuario espera 60 segundos.
8. El usuario toca "Reenviar".
9. El usuario ingresa el código del primer envío y presiona "Continuar".

**Resultado esperado**

El código anterior es rechazado con "Código inválido".

**Evidencia**

![Paso 2 — home con la sesion iniciada](<B2C-125 Evidencias/TC-B2C125-M-015-p02-home-con-la-sesion-iniciada.png>)

![Paso 4 — store locator abierto pestana despacho a domicilio](<B2C-125 Evidencias/TC-B2C125-M-015-p04-store-locator-abierto-pestana-despacho-a-domicilio.png>)

![Paso 5 — direccion elegida de las sugerencias](<B2C-125 Evidencias/TC-B2C125-M-015-p05-direccion-elegida-de-las-sugerencias.png>)

![Paso 8 — tras reenviar](<B2C-125 Evidencias/TC-B2C125-M-015-p08-tras-reenviar.png>)

![Paso 9 — codigo anterior rechazado](<B2C-125 Evidencias/TC-B2C125-M-015-p09-codigo-anterior-rechazado.png>)

![Estado final](<B2C-125 Evidencias/TC-B2C125-M-015.png>)

---

### TC-B2C125-M-016 - Verificar que cerrar el modal OTP cancela el cambio y mantiene la dirección anterior [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-125.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
7. El usuario toca "<" del modal.

**Resultado esperado**

El flujo OTP se cancela, el usuario vuelve al Store Locator y la dirección activa sigue siendo {DIRECCION_DESPACHO_001}.

**Evidencia**

![Paso 2 — home con la sesion iniciada](<B2C-125 Evidencias/TC-B2C125-M-016-p02-home-con-la-sesion-iniciada.png>)

![Paso 4 — store locator abierto pestana despacho a domicilio](<B2C-125 Evidencias/TC-B2C125-M-016-p04-store-locator-abierto-pestana-despacho-a-domicilio.png>)

![Paso 5 — direccion elegida de las sugerencias](<B2C-125 Evidencias/TC-B2C125-M-016-p05-direccion-elegida-de-las-sugerencias.png>)

![Paso 7 — tras la x del modal otp](<B2C-125 Evidencias/TC-B2C125-M-016-p07-tras-la-x-del-modal-otp.png>)

![Paso 8 — store locator con la direccion anterior activa](<B2C-125 Evidencias/TC-B2C125-M-016-p08-store-locator-con-la-direccion-anterior-activa.png>)

![Estado final](<B2C-125 Evidencias/TC-B2C125-M-016.png>)

---

### TC-B2C125-M-017 - Verificar que con OTP correcto un error al guardar muestra el toast y no cambia la dirección [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-125.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- DevTools abierto con bloqueo de la request {SETEO_ENTREGA_API_ENDPOINT} (Network request blocking)

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SETEO_ENTREGA_API_ENDPOINT} = TBD
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
7. El usuario ingresa el código OTP recibido y presiona "Continuar".

**Resultado esperado**

Se muestra el toast "Lo sentimos, no pudimos guardar tu dirección. Inténtalo nuevamente." y la dirección activa sigue siendo {DIRECCION_DESPACHO_001}.

**Observación**

Falta data: el bloqueo de la petición con {SETEO_ENTREGA_API_ENDPOINT} no tuvo efecto: la dirección se guardó igual y no apareció el toast de error. El endpoint declarado no coincide con la llamada real. Acción: declarar el endpoint correcto del guardado de dirección (quien administra el Excel de data).

**Evidencia**

![Paso 2 — home con la sesion iniciada](<B2C-125 Evidencias/TC-B2C125-M-017-p02-home-con-la-sesion-iniciada.png>)

![Paso 4 — store locator abierto pestana despacho a domicilio](<B2C-125 Evidencias/TC-B2C125-M-017-p04-store-locator-abierto-pestana-despacho-a-domicilio.png>)

![Paso 5 — direccion elegida de las sugerencias](<B2C-125 Evidencias/TC-B2C125-M-017-p05-direccion-elegida-de-las-sugerencias.png>)

![Paso 6 — codigo ingresado con la request bloqueada](<B2C-125 Evidencias/TC-B2C125-M-017-p06-codigo-ingresado-con-la-request-bloqueada.png>)

![Paso 7 — resultado tras validar el codigo](<B2C-125 Evidencias/TC-B2C125-M-017-p07-resultado-tras-validar-el-codigo.png>)

---

### TC-B2C125-D-018 - Verificar que al confirmar un cambio de tienda de retiro se envía el OTP y se muestra el modal con el toast de envío [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-125.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Home
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Retiro en tienda activo en {TIENDA_RETIRO_002}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {BASE_URL}
- {USER_AUTH_001}
- {TIENDA_RETIRO_001}
- {TIENDA_RETIRO_002}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el Store Locator.
5. El usuario hace clic en la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario selecciona la tienda {TIENDA_RETIRO_001} y hace clic en "Confirmar tienda".
8. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
9. El usuario revisa la casilla de correo de la cuenta.

**Resultado esperado**

Llega un código OTP al correo registrado de {USER_AUTH_001}; se muestra el modal "Autenticación requerida" con el correo enmascarado y los campos de ingreso, y el toast "El código de verificación ha sido enviado. Revisa tu correo" con X. La tienda aún no queda seteada.

**Evidencia**

![Paso 2 — home con retiro activo en tienda retiro 002](<B2C-125 Evidencias/TC-B2C125-D-018-p02-home-con-retiro-activo-en-tienda-retiro-002.png>)

![Paso 5 — pestana retiro en tienda](<B2C-125 Evidencias/TC-B2C125-D-018-p05-pestana-retiro-en-tienda.png>)

![Paso 7 — tienda tienda retiro 001 seleccionada](<B2C-125 Evidencias/TC-B2C125-D-018-p07-tienda-tienda-retiro-001-seleccionada.png>)

![Paso 8 — modal autenticacion requerida y toast de envio](<B2C-125 Evidencias/TC-B2C125-D-018-p08-modal-autenticacion-requerida-y-toast-de-envio.png>)

![Estado final](<B2C-125 Evidencias/TC-B2C125-D-018.png>)

---

### TC-B2C125-D-019 - Verificar que con OTP correcto y una dirección sin horarios se deriva al modal Sin horarios disponibles [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-125.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Home
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- {DIRECCION_SIN_SLA} tiene cobertura y no tiene SLAs disponibles
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {BASE_URL}
- {USER_AUTH_001}
- {DIRECCION_DESPACHO_001}
- {DIRECCION_SIN_SLA}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_SIN_SLA}, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
7. El usuario ingresa el código OTP recibido y hace clic en "Continuar".

**Resultado esperado**

El modal OTP se cierra y se muestra el modal "Por ahora no hay horarios disponibles" (B2C-127) con los botones "Continuar con esta dirección" y "Cambiar método de entrega"; {DIRECCION_SIN_SLA} aún no queda seteada.

**Observación**

Causa: el caso agotó el tiempo de 7 min antes de llegar al sitio, en 2 de 2 intentos, mientras sondeaba {DIRECCION_SIN_SLA} como invitado; sin veredicto del producto. Acción requerida: repetir el caso con el ambiente estable.

---

### TC-B2C125-D-020 - Verificar que cerrar el modal OTP tras intentar cambiar la tienda de retiro mantiene la tienda anterior [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-125.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Home
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Retiro en tienda activo en {TIENDA_RETIRO_002}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {BASE_URL}
- {USER_AUTH_001}
- {TIENDA_RETIRO_001}
- {TIENDA_RETIRO_002}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el Store Locator.
5. El usuario hace clic en la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario selecciona la tienda {TIENDA_RETIRO_001} y hace clic en "Confirmar tienda".
8. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
9. El usuario hace clic en la X del modal.
10. El usuario revisa el Store Locator.

**Resultado esperado**

El flujo OTP se cancela, el usuario vuelve al Store Locator sin cambios y el retiro activo sigue siendo {TIENDA_RETIRO_002}; {TIENDA_RETIRO_001} no queda seteada.

**Evidencia**

![Paso 2 — home con retiro activo en tienda retiro 002](<B2C-125 Evidencias/TC-B2C125-D-020-p02-home-con-retiro-activo-en-tienda-retiro-002.png>)

![Paso 5 — pestana retiro en tienda](<B2C-125 Evidencias/TC-B2C125-D-020-p05-pestana-retiro-en-tienda.png>)

![Paso 7 — tienda tienda retiro 001 seleccionada](<B2C-125 Evidencias/TC-B2C125-D-020-p07-tienda-tienda-retiro-001-seleccionada.png>)

![Paso 9 — tras la x del modal otp](<B2C-125 Evidencias/TC-B2C125-D-020-p09-tras-la-x-del-modal-otp.png>)

![Paso 10 — store locator sin cambios](<B2C-125 Evidencias/TC-B2C125-D-020-p10-store-locator-sin-cambios.png>)

![Estado final](<B2C-125 Evidencias/TC-B2C125-D-020.png>)

---

### TC-B2C125-M-018 - Verificar que al confirmar un cambio de tienda de retiro se envía el OTP y se muestra el modal con el toast de envío [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-125.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Retiro en tienda activo en {TIENDA_RETIRO_002}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {BASE_URL}
- {USER_AUTH_001}
- {TIENDA_RETIRO_001}
- {TIENDA_RETIRO_002}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario selecciona la tienda {TIENDA_RETIRO_001} y toca "Confirmar tienda".
8. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
9. El usuario revisa la casilla de correo de la cuenta.

**Resultado esperado**

Llega un código OTP al correo registrado de {USER_AUTH_001}; se muestra el modal "Autenticación requerida" con el correo enmascarado y los campos de ingreso, y el toast "El código de verificación ha sido enviado. Revisa tu correo" con X. La tienda aún no queda seteada.

**Evidencia**

![Paso 2 — home con retiro activo en tienda retiro 002](<B2C-125 Evidencias/TC-B2C125-M-018-p02-home-con-retiro-activo-en-tienda-retiro-002.png>)

![Paso 5 — pestana retiro en tienda](<B2C-125 Evidencias/TC-B2C125-M-018-p05-pestana-retiro-en-tienda.png>)

![Paso 7 — tienda tienda retiro 001 seleccionada](<B2C-125 Evidencias/TC-B2C125-M-018-p07-tienda-tienda-retiro-001-seleccionada.png>)

![Paso 8 — modal autenticacion requerida y toast de envio](<B2C-125 Evidencias/TC-B2C125-M-018-p08-modal-autenticacion-requerida-y-toast-de-envio.png>)

![Estado final](<B2C-125 Evidencias/TC-B2C125-M-018.png>)

---

### TC-B2C125-M-019 - Verificar que con OTP correcto y una dirección sin horarios se deriva al modal Sin horarios disponibles [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-125.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- {DIRECCION_SIN_SLA} tiene cobertura y no tiene SLAs disponibles
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {BASE_URL}
- {USER_AUTH_001}
- {DIRECCION_DESPACHO_001}
- {DIRECCION_SIN_SLA}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_SIN_SLA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
7. El usuario ingresa el código OTP recibido y toca "Continuar".

**Resultado esperado**

El modal OTP se cierra y se muestra el modal "Por ahora no hay horarios disponibles" (B2C-127) con los botones "Continuar con esta dirección" y "Cambiar método de entrega"; {DIRECCION_SIN_SLA} aún no queda seteada.

**Observación**

Causa: el caso agotó el tiempo de 7 min antes de llegar al sitio, en 2 de 2 intentos, mientras sondeaba {DIRECCION_SIN_SLA} como invitado; sin veredicto del producto. Acción requerida: repetir el caso con el ambiente estable.

---

### TC-B2C125-M-020 - Verificar que cerrar el modal OTP tras intentar cambiar la tienda de retiro mantiene la tienda anterior [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-125.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Retiro en tienda activo en {TIENDA_RETIRO_002}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {BASE_URL}
- {USER_AUTH_001}
- {TIENDA_RETIRO_001}
- {TIENDA_RETIRO_002}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario selecciona la tienda {TIENDA_RETIRO_001} y toca "Confirmar tienda".
8. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
9. El usuario toca "<" del modal.
10. El usuario revisa el Store Locator.

**Resultado esperado**

El flujo OTP se cancela, el usuario vuelve al Store Locator sin cambios y el retiro activo sigue siendo {TIENDA_RETIRO_002}; {TIENDA_RETIRO_001} no queda seteada.

**Evidencia**

![Paso 2 — home con retiro activo en tienda retiro 002](<B2C-125 Evidencias/TC-B2C125-M-020-p02-home-con-retiro-activo-en-tienda-retiro-002.png>)

![Paso 5 — pestana retiro en tienda](<B2C-125 Evidencias/TC-B2C125-M-020-p05-pestana-retiro-en-tienda.png>)

![Paso 7 — tienda tienda retiro 001 seleccionada](<B2C-125 Evidencias/TC-B2C125-M-020-p07-tienda-tienda-retiro-001-seleccionada.png>)

![Paso 9 — tras la x del modal otp](<B2C-125 Evidencias/TC-B2C125-M-020-p09-tras-la-x-del-modal-otp.png>)

![Paso 10 — store locator sin cambios](<B2C-125 Evidencias/TC-B2C125-M-020-p10-store-locator-sin-cambios.png>)

![Estado final](<B2C-125 Evidencias/TC-B2C125-M-020.png>)

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
  "suite": "B2C-125",
  "tc_file": "Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-125 Test Cases.xlsx",
  "title": "B2C-125 (web) - Validación OTP al cambiar dirección o tienda - Evidencias QA",
  "updated_at": "2026-11-02"
 },
 "history": {
  "2026-11-02": [
   "TC-B2C125-D-001",
   "TC-B2C125-D-002",
   "TC-B2C125-D-003",
   "TC-B2C125-D-004",
   "TC-B2C125-D-005",
   "TC-B2C125-D-006",
   "TC-B2C125-D-007",
   "TC-B2C125-D-008",
   "TC-B2C125-D-009",
   "TC-B2C125-D-010",
   "TC-B2C125-D-011",
   "TC-B2C125-D-012",
   "TC-B2C125-D-013",
   "TC-B2C125-D-014",
   "TC-B2C125-D-015",
   "TC-B2C125-D-016",
   "TC-B2C125-D-017",
   "TC-B2C125-D-018",
   "TC-B2C125-D-019",
   "TC-B2C125-D-020",
   "TC-B2C125-M-001",
   "TC-B2C125-M-002",
   "TC-B2C125-M-003",
   "TC-B2C125-M-004",
   "TC-B2C125-M-005",
   "TC-B2C125-M-006",
   "TC-B2C125-M-007",
   "TC-B2C125-M-008",
   "TC-B2C125-M-009",
   "TC-B2C125-M-010",
   "TC-B2C125-M-011",
   "TC-B2C125-M-012",
   "TC-B2C125-M-013",
   "TC-B2C125-M-014",
   "TC-B2C125-M-015",
   "TC-B2C125-M-016",
   "TC-B2C125-M-017",
   "TC-B2C125-M-018",
   "TC-B2C125-M-019",
   "TC-B2C125-M-020"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Llega un código OTP al correo registrado, se muestra el modal de ingreso y el toast \"El código de verificación ha sido enviado. Revisa tu correo\" con X.",
   "form_factor": "desktop",
   "id": "TC-B2C125-D-001",
   "name": "Verificar que al confirmar un cambio a una dirección nueva (no guardada) se envía el OTP y se muestra el toast de envío [Desktop] [Logueado]",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- {DIRECCION_OTRA_TIENDA} es una dirección nueva: no está guardada en la libreta de direcciones de {USER_AUTH_001} (si quedó guardada por una ejecución anterior, p. ej. D/M/APP-008, eliminarla antes de ejecutar)\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Paso 2 — home con la sesion iniciada",
     "file": "TC-B2C125-D-001-p02-home-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — store locator abierto pestana despacho a domicilio",
     "file": "TC-B2C125-D-001-p04-store-locator-abierto-pestana-despacho-a-domicilio.png"
    },
    {
     "caption": "Paso 5 — direccion elegida de las sugerencias",
     "file": "TC-B2C125-D-001-p05-direccion-elegida-de-las-sugerencias.png"
    },
    {
     "caption": "Paso 6 — modal autenticacion requerida y toast de envio",
     "file": "TC-B2C125-D-001-p06-modal-autenticacion-requerida-y-toast-de-envio.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C125-D-001.png"
    }
   ],
   "spec": "tests/B2C-125.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El modal muestra el botón la X, el título \"Autenticación requerida\", \"Enviamos un código de verificación al correo\" con el correo enmascarado, 6 campos de código, \"¿No recibiste el código? Pide uno nuevo en\" con temporizador, el mensaje \"Importante: Asegúrate de ingresar correctamente el código de verificación\" y el botón \"Continuar\".",
   "form_factor": "desktop",
   "id": "TC-B2C125-D-002",
   "name": "Verificar que el modal Autenticación requerida muestra todos sus elementos [Desktop] [Logueado]",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Paso 2 — home con la sesion iniciada",
     "file": "TC-B2C125-D-002-p02-home-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — store locator abierto pestana despacho a domicilio",
     "file": "TC-B2C125-D-002-p04-store-locator-abierto-pestana-despacho-a-domicilio.png"
    },
    {
     "caption": "Paso 5 — direccion elegida de las sugerencias",
     "file": "TC-B2C125-D-002-p05-direccion-elegida-de-las-sugerencias.png"
    },
    {
     "caption": "Paso 6 — modal autenticacion requerida con todos sus elementos",
     "file": "TC-B2C125-D-002-p06-modal-autenticacion-requerida-con-todos-sus-elementos.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C125-D-002.png"
    }
   ],
   "spec": "tests/B2C-125.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n7. El usuario revisa el modal.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El correo de {USER_AUTH_001} se muestra con el formato \"gir****@h***.com\" (3 caracteres, primera letra del dominio y .com).",
   "form_factor": "desktop",
   "id": "TC-B2C125-D-003",
   "name": "Verificar que el correo del modal OTP se muestra enmascarado según la regla [Desktop] [Logueado]",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Paso 2 — home con la sesion iniciada",
     "file": "TC-B2C125-D-003-p02-home-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — store locator abierto pestana despacho a domicilio",
     "file": "TC-B2C125-D-003-p04-store-locator-abierto-pestana-despacho-a-domicilio.png"
    },
    {
     "caption": "Paso 5 — direccion elegida de las sugerencias",
     "file": "TC-B2C125-D-003-p05-direccion-elegida-de-las-sugerencias.png"
    },
    {
     "caption": "Paso 6 — correo enmascarado en el modal",
     "file": "TC-B2C125-D-003-p06-correo-enmascarado-en-el-modal.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C125-D-003.png"
    }
   ],
   "spec": "tests/B2C-125.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n7. El usuario revisa el correo mostrado en el modal.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El foco avanza automáticamente al segundo campo.",
   "form_factor": "desktop",
   "id": "TC-B2C125-D-004",
   "name": "Verificar que al ingresar un dígito el foco avanza al siguiente campo [Desktop] [Logueado]",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Paso 2 — home con la sesion iniciada",
     "file": "TC-B2C125-D-004-p02-home-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — store locator abierto pestana despacho a domicilio",
     "file": "TC-B2C125-D-004-p04-store-locator-abierto-pestana-despacho-a-domicilio.png"
    },
    {
     "caption": "Paso 5 — direccion elegida de las sugerencias",
     "file": "TC-B2C125-D-004-p05-direccion-elegida-de-las-sugerencias.png"
    },
    {
     "caption": "Paso 7 — primer digito escrito y foco en el segundo campo",
     "file": "TC-B2C125-D-004-p07-primer-digito-escrito-y-foco-en-el-segundo-campo.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C125-D-004.png"
    }
   ],
   "spec": "tests/B2C-125.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n7. El usuario ingresa el primer dígito del código.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Los campos solo aceptan los dígitos; las letras, símbolos y espacios no se ingresan.",
   "form_factor": "desktop",
   "id": "TC-B2C125-D-005",
   "name": "Verificar que los campos OTP no aceptan letras, símbolos ni espacios [Desktop] [Logueado]",
   "observation": "Falta data: token sin fila en el Excel de data {OTP_CON_LETRAS}. Acción: cargar el valor en el Excel de data (quien administra la data).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "spec": "tests/B2C-125.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n7. El usuario escribe {OTP_CON_LETRAS} en los campos.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {OTP_CON_LETRAS} = 12a$4 \n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "No se permite continuar con la validación con el código incompleto.",
   "form_factor": "desktop",
   "id": "TC-B2C125-D-006",
   "name": "Verificar que con menos de 6 dígitos no se permite continuar [Desktop] [Logueado]",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Paso 2 — home con la sesion iniciada",
     "file": "TC-B2C125-D-006-p02-home-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — store locator abierto pestana despacho a domicilio",
     "file": "TC-B2C125-D-006-p04-store-locator-abierto-pestana-despacho-a-domicilio.png"
    },
    {
     "caption": "Paso 5 — direccion elegida de las sugerencias",
     "file": "TC-B2C125-D-006-p05-direccion-elegida-de-las-sugerencias.png"
    },
    {
     "caption": "Paso 7 — cinco digitos ingresados",
     "file": "TC-B2C125-D-006-p07-cinco-digitos-ingresados.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C125-D-006.png"
    }
   ],
   "spec": "tests/B2C-125.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n7. El usuario ingresa solo 5 dígitos.\n8. El usuario intenta hacer clic en \"Continuar\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Mientras se valida el código, los componentes del modal se muestran en gris claro (skeleton).",
   "form_factor": "desktop",
   "id": "TC-B2C125-D-007",
   "name": "Verificar que al validar el código la pantalla muestra el estado skeleton [Desktop] [Logueado]",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- DevTools abierto con throttling de red \"Slow 3G\"",
   "screenshots": [
    {
     "caption": "Paso 2 — home con la sesion iniciada",
     "file": "TC-B2C125-D-007-p02-home-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — store locator abierto pestana despacho a domicilio",
     "file": "TC-B2C125-D-007-p04-store-locator-abierto-pestana-despacho-a-domicilio.png"
    },
    {
     "caption": "Paso 5 — direccion elegida de las sugerencias",
     "file": "TC-B2C125-D-007-p05-direccion-elegida-de-las-sugerencias.png"
    },
    {
     "caption": "Paso 6 — codigo ingresado antes de validar",
     "file": "TC-B2C125-D-007-p06-codigo-ingresado-antes-de-validar.png"
    },
    {
     "caption": "Paso 7 — validando el codigo con red lenta",
     "file": "TC-B2C125-D-007-p07-validando-el-codigo-con-red-lenta.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C125-D-007.png"
    }
   ],
   "spec": "tests/B2C-125.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n7. El usuario ingresa el código OTP recibido y presiona \"Continuar\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El modal se cierra, el usuario vuelve al punto de origen con {DIRECCION_OTRA_TIENDA} seteada en el Store Locator y la dirección queda en la libreta.",
   "form_factor": "desktop",
   "id": "TC-B2C125-D-008",
   "name": "Verificar que un OTP correcto aplica la dirección, cierra el modal y la guarda en la libreta [Desktop] [Logueado]",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- {DIRECCION_OTRA_TIENDA} tiene cobertura y SLAs",
   "screenshots": [
    {
     "caption": "Paso 2 — home con la sesion iniciada",
     "file": "TC-B2C125-D-008-p02-home-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — store locator abierto pestana despacho a domicilio",
     "file": "TC-B2C125-D-008-p04-store-locator-abierto-pestana-despacho-a-domicilio.png"
    },
    {
     "caption": "Paso 5 — direccion elegida de las sugerencias",
     "file": "TC-B2C125-D-008-p05-direccion-elegida-de-las-sugerencias.png"
    },
    {
     "caption": "Paso 6 — codigo ingresado",
     "file": "TC-B2C125-D-008-p06-codigo-ingresado.png"
    },
    {
     "caption": "Paso 7 — store locator tras validar el otp",
     "file": "TC-B2C125-D-008-p07-store-locator-tras-validar-el-otp.png"
    },
    {
     "caption": "Paso 8 — libreta de direcciones guardadas",
     "file": "TC-B2C125-D-008-p08-libreta-de-direcciones-guardadas.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C125-D-008.png"
    }
   ],
   "spec": "tests/B2C-125.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n7. El usuario ingresa el código OTP recibido y presiona \"Continuar\".\n8. El usuario revisa el Store Locator y la libreta de direcciones de Mi cuenta.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El temporizador inicia en 60 segundos en cuenta regresiva y no se muestra la opción \"Reenviar\" mientras corre.",
   "form_factor": "desktop",
   "id": "TC-B2C125-D-009",
   "name": "Verificar que el temporizador de reenvío inicia en 60 segundos y bloquea el reenvío [Desktop] [Logueado]",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Paso 2 — home con la sesion iniciada",
     "file": "TC-B2C125-D-009-p02-home-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — store locator abierto pestana despacho a domicilio",
     "file": "TC-B2C125-D-009-p04-store-locator-abierto-pestana-despacho-a-domicilio.png"
    },
    {
     "caption": "Paso 5 — direccion elegida de las sugerencias",
     "file": "TC-B2C125-D-009-p05-direccion-elegida-de-las-sugerencias.png"
    },
    {
     "caption": "Paso 6 — temporizador inicial 60 s",
     "file": "TC-B2C125-D-009-p06-temporizador-inicial-60-s.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C125-D-009.png"
    }
   ],
   "spec": "tests/B2C-125.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Al llegar a 0 se muestra la opción \"Reenviar\".",
   "form_factor": "desktop",
   "id": "TC-B2C125-D-010",
   "name": "Verificar que al terminar el temporizador se muestra Reenviar [Desktop] [Logueado]",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Paso 2 — home con la sesion iniciada",
     "file": "TC-B2C125-D-010-p02-home-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — store locator abierto pestana despacho a domicilio",
     "file": "TC-B2C125-D-010-p04-store-locator-abierto-pestana-despacho-a-domicilio.png"
    },
    {
     "caption": "Paso 5 — direccion elegida de las sugerencias",
     "file": "TC-B2C125-D-010-p05-direccion-elegida-de-las-sugerencias.png"
    },
    {
     "caption": "Paso 7 — a los 60 s reenviar visible",
     "file": "TC-B2C125-D-010-p07-a-los-60-s-reenviar-visible.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C125-D-010.png"
    }
   ],
   "spec": "tests/B2C-125.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n7. El usuario espera 60 segundos.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Los campos se pintan en rojo, se muestra \"Código inválido\" y el intento queda contabilizado.",
   "form_factor": "desktop",
   "id": "TC-B2C125-D-011",
   "name": "Verificar que un código incorrecto marca los campos en rojo con Código inválido [Desktop] [Logueado]",
   "observation": "Falta data: token sin fila en el Excel de data {OTP_INCORRECTO}. Acción: cargar el valor en el Excel de data (quien administra la data).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "spec": "tests/B2C-125.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n7. El usuario ingresa {OTP_INCORRECTO} y presiona \"Continuar\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {OTP_INCORRECTO} = 000000 (cualquier código distinto al recibido)\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Los campos se pintan en rojo, se muestra \"Código inválido\" y el toast persistente \"El código expiró, solicita uno nuevo para continuar\" con X y botón \"Solicitar\".",
   "form_factor": "desktop",
   "id": "TC-B2C125-D-012",
   "name": "Verificar que un código expirado muestra Código inválido y el toast con Solicitar [Desktop] [Logueado]",
   "observation": "Esperado: con el código expirado se muestra «Código inválido» y el toast persistente con «Solicitar». Obtenido: campos en rojo y toast correctos, pero el mensaje bajo los campos dice «El código expiró, solicita uno nuevo para continuar» y no «Código inválido». Bug B2C-1430.",
   "observed": "Esperado: con el código expirado se muestra «Código inválido» y el toast persistente con «Solicitar». Obtenido: campos en rojo y toast correctos, pero el mensaje bajo los campos dice «El código expiró, solicita uno nuevo para continuar» y no «Código inválido». Bug B2C-1430.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Paso 2 — home con la sesion iniciada",
     "file": "TC-B2C125-D-012-p02-home-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — store locator abierto pestana despacho a domicilio",
     "file": "TC-B2C125-D-012-p04-store-locator-abierto-pestana-despacho-a-domicilio.png"
    },
    {
     "caption": "Paso 5 — direccion elegida de las sugerencias",
     "file": "TC-B2C125-D-012-p05-direccion-elegida-de-las-sugerencias.png"
    },
    {
     "caption": "Paso 6 — modal autenticacion requerida recien abierto",
     "file": "TC-B2C125-D-012-p06-modal-autenticacion-requerida-recien-abierto.png"
    },
    {
     "caption": "Paso 7 — tras mas de 10 minutos de espera",
     "file": "TC-B2C125-D-012-p07-tras-mas-de-10-minutos-de-espera.png"
    },
    {
     "caption": "Paso 8 — codigo expirado ingresado",
     "file": "TC-B2C125-D-012-p08-codigo-expirado-ingresado.png"
    }
   ],
   "spec": "tests/B2C-125.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n7. El usuario espera más de 10 minutos.\n8. El usuario ingresa el código recibido y presiona \"Continuar\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Se muestra el toast \"Ha superado el máximo de intentos. Por seguridad, vuelve a intentarlo en 10 minutos\" con X, \"Reenviar\" queda bloqueado por 10 minutos y el código correcto ya no es aceptado.",
   "form_factor": "desktop",
   "id": "TC-B2C125-D-013",
   "name": "Verificar que al quinto código incorrecto se bloquea el reenvío por 10 minutos [Desktop] [Logueado]",
   "observation": "Falta data: token sin fila en el Excel de data {OTP_INCORRECTO}. Acción: cargar el valor en el Excel de data (quien administra la data).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "spec": "tests/B2C-125.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n7. El usuario ingresa {OTP_INCORRECTO} y presiona \"Continuar\" 5 veces seguidas.\n8. El usuario ingresa el código correcto recibido.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {OTP_INCORRECTO} = 000000 (cualquier código distinto al recibido)\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Llega un nuevo código al correo, el temporizador vuelve a 60 s y el nuevo código se valida correctamente.",
   "form_factor": "desktop",
   "id": "TC-B2C125-D-014",
   "name": "Verificar que Reenviar envía un código nuevo, reinicia el temporizador y el nuevo código funciona [Desktop] [Logueado]",
   "observation": "Esperado: tras «Reenviar» el temporizador vuelve a 60 s. Obtenido: aparece el aviso de código enviado y «Reenviar» queda disponible de inmediato, sin «Pide uno nuevo en 60s». El código nuevo llega y se valida bien. Bug B2C-1432.",
   "observed": "Esperado: tras «Reenviar» el temporizador vuelve a 60 s. Obtenido: aparece el aviso de código enviado y «Reenviar» queda disponible de inmediato, sin «Pide uno nuevo en 60s». El código nuevo llega y se valida bien. Bug B2C-1432.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Paso 2 — home con la sesion iniciada",
     "file": "TC-B2C125-D-014-p02-home-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — store locator abierto pestana despacho a domicilio",
     "file": "TC-B2C125-D-014-p04-store-locator-abierto-pestana-despacho-a-domicilio.png"
    },
    {
     "caption": "Paso 5 — direccion elegida de las sugerencias",
     "file": "TC-B2C125-D-014-p05-direccion-elegida-de-las-sugerencias.png"
    },
    {
     "caption": "Paso 7 — a los 60 s reenviar visible",
     "file": "TC-B2C125-D-014-p07-a-los-60-s-reenviar-visible.png"
    },
    {
     "caption": "Paso 8 — tras reenviar temporizador en null s",
     "file": "TC-B2C125-D-014-p08-tras-reenviar-temporizador-en-null-s.png"
    },
    {
     "caption": "Paso 9 — nuevo codigo validado",
     "file": "TC-B2C125-D-014-p09-nuevo-codigo-validado.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C125-D-014.png"
    }
   ],
   "spec": "tests/B2C-125.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n7. El usuario espera 60 segundos.\n8. El usuario hace clic en \"Reenviar\".\n9. El usuario ingresa el nuevo código y presiona \"Continuar\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El código anterior es rechazado con \"Código inválido\".",
   "form_factor": "desktop",
   "id": "TC-B2C125-D-015",
   "name": "Verificar que tras reenviar el código anterior ya no es válido [Desktop] [Logueado]",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Paso 2 — home con la sesion iniciada",
     "file": "TC-B2C125-D-015-p02-home-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — store locator abierto pestana despacho a domicilio",
     "file": "TC-B2C125-D-015-p04-store-locator-abierto-pestana-despacho-a-domicilio.png"
    },
    {
     "caption": "Paso 5 — direccion elegida de las sugerencias",
     "file": "TC-B2C125-D-015-p05-direccion-elegida-de-las-sugerencias.png"
    },
    {
     "caption": "Paso 8 — tras reenviar",
     "file": "TC-B2C125-D-015-p08-tras-reenviar.png"
    },
    {
     "caption": "Paso 9 — codigo anterior rechazado",
     "file": "TC-B2C125-D-015-p09-codigo-anterior-rechazado.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C125-D-015.png"
    }
   ],
   "spec": "tests/B2C-125.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n7. El usuario espera 60 segundos.\n8. El usuario hace clic en \"Reenviar\".\n9. El usuario ingresa el código del primer envío y presiona \"Continuar\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El flujo OTP se cancela, el usuario vuelve al Store Locator y la dirección activa sigue siendo {DIRECCION_DESPACHO_001}.",
   "form_factor": "desktop",
   "id": "TC-B2C125-D-016",
   "name": "Verificar que cerrar el modal OTP cancela el cambio y mantiene la dirección anterior [Desktop] [Logueado]",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Paso 2 — home con la sesion iniciada",
     "file": "TC-B2C125-D-016-p02-home-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — store locator abierto pestana despacho a domicilio",
     "file": "TC-B2C125-D-016-p04-store-locator-abierto-pestana-despacho-a-domicilio.png"
    },
    {
     "caption": "Paso 5 — direccion elegida de las sugerencias",
     "file": "TC-B2C125-D-016-p05-direccion-elegida-de-las-sugerencias.png"
    },
    {
     "caption": "Paso 7 — tras la x del modal otp",
     "file": "TC-B2C125-D-016-p07-tras-la-x-del-modal-otp.png"
    },
    {
     "caption": "Paso 8 — store locator con la direccion anterior activa",
     "file": "TC-B2C125-D-016-p08-store-locator-con-la-direccion-anterior-activa.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C125-D-016.png"
    }
   ],
   "spec": "tests/B2C-125.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n7. El usuario hace clic en la X del modal.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Se muestra el toast \"Lo sentimos, no pudimos guardar tu dirección. Inténtalo nuevamente.\" y la dirección activa sigue siendo {DIRECCION_DESPACHO_001}.",
   "form_factor": "desktop",
   "id": "TC-B2C125-D-017",
   "name": "Verificar que con OTP correcto un error al guardar muestra el toast y no cambia la dirección [Desktop] [Logueado]",
   "observation": "Falta data: el bloqueo de la petición con {SETEO_ENTREGA_API_ENDPOINT} no tuvo efecto: la dirección se guardó igual y no apareció el toast de error. El endpoint declarado no coincide con la llamada real. Acción: declarar el endpoint correcto del guardado de dirección (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- DevTools abierto con bloqueo de la request {SETEO_ENTREGA_API_ENDPOINT} (Network request blocking)",
   "screenshots": [
    {
     "caption": "Paso 2 — home con la sesion iniciada",
     "file": "TC-B2C125-D-017-p02-home-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — store locator abierto pestana despacho a domicilio",
     "file": "TC-B2C125-D-017-p04-store-locator-abierto-pestana-despacho-a-domicilio.png"
    },
    {
     "caption": "Paso 5 — direccion elegida de las sugerencias",
     "file": "TC-B2C125-D-017-p05-direccion-elegida-de-las-sugerencias.png"
    },
    {
     "caption": "Paso 6 — codigo ingresado con la request bloqueada",
     "file": "TC-B2C125-D-017-p06-codigo-ingresado-con-la-request-bloqueada.png"
    },
    {
     "caption": "Paso 7 — resultado tras validar el codigo",
     "file": "TC-B2C125-D-017-p07-resultado-tras-validar-el-codigo.png"
    }
   ],
   "spec": "tests/B2C-125.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n7. El usuario ingresa el código OTP recibido y presiona \"Continuar\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SETEO_ENTREGA_API_ENDPOINT} = TBD\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Llega un código OTP al correo registrado, se muestra el modal de ingreso y el toast \"El código de verificación ha sido enviado. Revisa tu correo\" con X.",
   "form_factor": "mobile",
   "id": "TC-B2C125-M-001",
   "name": "Verificar que al confirmar un cambio a una dirección nueva (no guardada) se envía el OTP y se muestra el toast de envío [Mobile] [Logueado]",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- {DIRECCION_OTRA_TIENDA} es una dirección nueva: no está guardada en la libreta de direcciones de {USER_AUTH_001} (si quedó guardada por una ejecución anterior, p. ej. D/M/APP-008, eliminarla antes de ejecutar)\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Paso 2 — home con la sesion iniciada",
     "file": "TC-B2C125-M-001-p02-home-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — store locator abierto pestana despacho a domicilio",
     "file": "TC-B2C125-M-001-p04-store-locator-abierto-pestana-despacho-a-domicilio.png"
    },
    {
     "caption": "Paso 5 — direccion elegida de las sugerencias",
     "file": "TC-B2C125-M-001-p05-direccion-elegida-de-las-sugerencias.png"
    },
    {
     "caption": "Paso 6 — modal autenticacion requerida y toast de envio",
     "file": "TC-B2C125-M-001-p06-modal-autenticacion-requerida-y-toast-de-envio.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C125-M-001.png"
    }
   ],
   "spec": "tests/B2C-125.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El modal muestra el botón \"<\", el título \"Autenticación requerida\", \"Enviamos un código de verificación al correo\" con el correo enmascarado, 6 campos de código, \"¿No recibiste el código? Pide uno nuevo en\" con temporizador, el mensaje \"Importante: Asegúrate de ingresar correctamente el código de verificación\" y el botón \"Continuar\".",
   "form_factor": "mobile",
   "id": "TC-B2C125-M-002",
   "name": "Verificar que el modal Autenticación requerida muestra todos sus elementos [Mobile] [Logueado]",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Paso 2 — home con la sesion iniciada",
     "file": "TC-B2C125-M-002-p02-home-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — store locator abierto pestana despacho a domicilio",
     "file": "TC-B2C125-M-002-p04-store-locator-abierto-pestana-despacho-a-domicilio.png"
    },
    {
     "caption": "Paso 5 — direccion elegida de las sugerencias",
     "file": "TC-B2C125-M-002-p05-direccion-elegida-de-las-sugerencias.png"
    },
    {
     "caption": "Paso 6 — modal autenticacion requerida con todos sus elementos",
     "file": "TC-B2C125-M-002-p06-modal-autenticacion-requerida-con-todos-sus-elementos.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C125-M-002.png"
    }
   ],
   "spec": "tests/B2C-125.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n7. El usuario revisa el modal.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El correo de {USER_AUTH_001} se muestra con el formato \"gir****@h***.com\" (3 caracteres, primera letra del dominio y .com).",
   "form_factor": "mobile",
   "id": "TC-B2C125-M-003",
   "name": "Verificar que el correo del modal OTP se muestra enmascarado según la regla [Mobile] [Logueado]",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Paso 2 — home con la sesion iniciada",
     "file": "TC-B2C125-M-003-p02-home-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — store locator abierto pestana despacho a domicilio",
     "file": "TC-B2C125-M-003-p04-store-locator-abierto-pestana-despacho-a-domicilio.png"
    },
    {
     "caption": "Paso 5 — direccion elegida de las sugerencias",
     "file": "TC-B2C125-M-003-p05-direccion-elegida-de-las-sugerencias.png"
    },
    {
     "caption": "Paso 6 — correo enmascarado en el modal",
     "file": "TC-B2C125-M-003-p06-correo-enmascarado-en-el-modal.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C125-M-003.png"
    }
   ],
   "spec": "tests/B2C-125.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n7. El usuario revisa el correo mostrado en el modal.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El foco avanza automáticamente al segundo campo.",
   "form_factor": "mobile",
   "id": "TC-B2C125-M-004",
   "name": "Verificar que al ingresar un dígito el foco avanza al siguiente campo [Mobile] [Logueado]",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Paso 2 — home con la sesion iniciada",
     "file": "TC-B2C125-M-004-p02-home-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — store locator abierto pestana despacho a domicilio",
     "file": "TC-B2C125-M-004-p04-store-locator-abierto-pestana-despacho-a-domicilio.png"
    },
    {
     "caption": "Paso 5 — direccion elegida de las sugerencias",
     "file": "TC-B2C125-M-004-p05-direccion-elegida-de-las-sugerencias.png"
    },
    {
     "caption": "Paso 7 — primer digito escrito y foco en el segundo campo",
     "file": "TC-B2C125-M-004-p07-primer-digito-escrito-y-foco-en-el-segundo-campo.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C125-M-004.png"
    }
   ],
   "spec": "tests/B2C-125.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n7. El usuario ingresa el primer dígito del código.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Los campos solo aceptan los dígitos; las letras, símbolos y espacios no se ingresan.",
   "form_factor": "mobile",
   "id": "TC-B2C125-M-005",
   "name": "Verificar que los campos OTP no aceptan letras, símbolos ni espacios [Mobile] [Logueado]",
   "observation": "Falta data: token sin fila en el Excel de data {OTP_CON_LETRAS}. Acción: cargar el valor en el Excel de data (quien administra la data).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "spec": "tests/B2C-125.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n7. El usuario escribe {OTP_CON_LETRAS} en los campos.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {OTP_CON_LETRAS} = 12a$4 \n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "No se permite continuar con la validación con el código incompleto.",
   "form_factor": "mobile",
   "id": "TC-B2C125-M-006",
   "name": "Verificar que con menos de 6 dígitos no se permite continuar [Mobile] [Logueado]",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Paso 2 — home con la sesion iniciada",
     "file": "TC-B2C125-M-006-p02-home-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — store locator abierto pestana despacho a domicilio",
     "file": "TC-B2C125-M-006-p04-store-locator-abierto-pestana-despacho-a-domicilio.png"
    },
    {
     "caption": "Paso 5 — direccion elegida de las sugerencias",
     "file": "TC-B2C125-M-006-p05-direccion-elegida-de-las-sugerencias.png"
    },
    {
     "caption": "Paso 7 — cinco digitos ingresados",
     "file": "TC-B2C125-M-006-p07-cinco-digitos-ingresados.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C125-M-006.png"
    }
   ],
   "spec": "tests/B2C-125.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n7. El usuario ingresa solo 5 dígitos.\n8. El usuario intenta tocar \"Continuar\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Mientras se valida el código, los componentes del modal se muestran en gris claro (skeleton).",
   "form_factor": "mobile",
   "id": "TC-B2C125-M-007",
   "name": "Verificar que al validar el código la pantalla muestra el estado skeleton [Mobile] [Logueado]",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- DevTools abierto con throttling de red \"Slow 3G\"",
   "screenshots": [
    {
     "caption": "Paso 2 — home con la sesion iniciada",
     "file": "TC-B2C125-M-007-p02-home-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — store locator abierto pestana despacho a domicilio",
     "file": "TC-B2C125-M-007-p04-store-locator-abierto-pestana-despacho-a-domicilio.png"
    },
    {
     "caption": "Paso 5 — direccion elegida de las sugerencias",
     "file": "TC-B2C125-M-007-p05-direccion-elegida-de-las-sugerencias.png"
    },
    {
     "caption": "Paso 6 — codigo ingresado antes de validar",
     "file": "TC-B2C125-M-007-p06-codigo-ingresado-antes-de-validar.png"
    },
    {
     "caption": "Paso 7 — validando el codigo con red lenta",
     "file": "TC-B2C125-M-007-p07-validando-el-codigo-con-red-lenta.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C125-M-007.png"
    }
   ],
   "spec": "tests/B2C-125.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n7. El usuario ingresa el código OTP recibido y presiona \"Continuar\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El modal se cierra, el usuario vuelve al punto de origen con {DIRECCION_OTRA_TIENDA} seteada en el Store Locator y la dirección queda en la libreta.",
   "form_factor": "mobile",
   "id": "TC-B2C125-M-008",
   "name": "Verificar que un OTP correcto aplica la dirección, cierra el modal y la guarda en la libreta [Mobile] [Logueado]",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- {DIRECCION_OTRA_TIENDA} tiene cobertura y SLAs",
   "screenshots": [
    {
     "caption": "Paso 2 — home con la sesion iniciada",
     "file": "TC-B2C125-M-008-p02-home-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — store locator abierto pestana despacho a domicilio",
     "file": "TC-B2C125-M-008-p04-store-locator-abierto-pestana-despacho-a-domicilio.png"
    },
    {
     "caption": "Paso 5 — direccion elegida de las sugerencias",
     "file": "TC-B2C125-M-008-p05-direccion-elegida-de-las-sugerencias.png"
    },
    {
     "caption": "Paso 6 — codigo ingresado",
     "file": "TC-B2C125-M-008-p06-codigo-ingresado.png"
    },
    {
     "caption": "Paso 7 — store locator tras validar el otp",
     "file": "TC-B2C125-M-008-p07-store-locator-tras-validar-el-otp.png"
    },
    {
     "caption": "Paso 8 — libreta de direcciones guardadas",
     "file": "TC-B2C125-M-008-p08-libreta-de-direcciones-guardadas.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C125-M-008.png"
    }
   ],
   "spec": "tests/B2C-125.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n7. El usuario ingresa el código OTP recibido y presiona \"Continuar\".\n8. El usuario revisa el Store Locator y la libreta de direcciones de Mi cuenta.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El temporizador inicia en 60 segundos en cuenta regresiva y no se muestra la opción \"Reenviar\" mientras corre.",
   "form_factor": "mobile",
   "id": "TC-B2C125-M-009",
   "name": "Verificar que el temporizador de reenvío inicia en 60 segundos y bloquea el reenvío [Mobile] [Logueado]",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Paso 2 — home con la sesion iniciada",
     "file": "TC-B2C125-M-009-p02-home-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — store locator abierto pestana despacho a domicilio",
     "file": "TC-B2C125-M-009-p04-store-locator-abierto-pestana-despacho-a-domicilio.png"
    },
    {
     "caption": "Paso 5 — direccion elegida de las sugerencias",
     "file": "TC-B2C125-M-009-p05-direccion-elegida-de-las-sugerencias.png"
    },
    {
     "caption": "Paso 6 — temporizador inicial 59 s",
     "file": "TC-B2C125-M-009-p06-temporizador-inicial-59-s.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C125-M-009.png"
    }
   ],
   "spec": "tests/B2C-125.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Al llegar a 0 se muestra la opción \"Reenviar\".",
   "form_factor": "mobile",
   "id": "TC-B2C125-M-010",
   "name": "Verificar que al terminar el temporizador se muestra Reenviar [Mobile] [Logueado]",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Paso 2 — home con la sesion iniciada",
     "file": "TC-B2C125-M-010-p02-home-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — store locator abierto pestana despacho a domicilio",
     "file": "TC-B2C125-M-010-p04-store-locator-abierto-pestana-despacho-a-domicilio.png"
    },
    {
     "caption": "Paso 5 — direccion elegida de las sugerencias",
     "file": "TC-B2C125-M-010-p05-direccion-elegida-de-las-sugerencias.png"
    },
    {
     "caption": "Paso 7 — a los 60 s reenviar visible",
     "file": "TC-B2C125-M-010-p07-a-los-60-s-reenviar-visible.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C125-M-010.png"
    }
   ],
   "spec": "tests/B2C-125.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n7. El usuario espera 60 segundos.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Los campos se pintan en rojo, se muestra \"Código inválido\" y el intento queda contabilizado.",
   "form_factor": "mobile",
   "id": "TC-B2C125-M-011",
   "name": "Verificar que un código incorrecto marca los campos en rojo con Código inválido [Mobile] [Logueado]",
   "observation": "Falta data: token sin fila en el Excel de data {OTP_INCORRECTO}. Acción: cargar el valor en el Excel de data (quien administra la data).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "spec": "tests/B2C-125.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n7. El usuario ingresa {OTP_INCORRECTO} y presiona \"Continuar\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {OTP_INCORRECTO} = 000000 (cualquier código distinto al recibido)\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Los campos se pintan en rojo, se muestra \"Código inválido\" y el toast persistente \"El código expiró, solicita uno nuevo para continuar\" con X y botón \"Solicitar\".",
   "form_factor": "mobile",
   "id": "TC-B2C125-M-012",
   "name": "Verificar que un código expirado muestra Código inválido y el toast con Solicitar [Mobile] [Logueado]",
   "observation": "Esperado: con el código expirado se muestra «Código inválido» y el toast persistente con «Solicitar». Obtenido: campos en rojo y toast correctos, pero el mensaje bajo los campos dice «El código expiró, solicita uno nuevo para continuar» y no «Código inválido». Bug B2C-1431.",
   "observed": "Esperado: con el código expirado se muestra «Código inválido» y el toast persistente con «Solicitar». Obtenido: campos en rojo y toast correctos, pero el mensaje bajo los campos dice «El código expiró, solicita uno nuevo para continuar» y no «Código inválido». Bug B2C-1431.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Paso 2 — home con la sesion iniciada",
     "file": "TC-B2C125-M-012-p02-home-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — store locator abierto pestana despacho a domicilio",
     "file": "TC-B2C125-M-012-p04-store-locator-abierto-pestana-despacho-a-domicilio.png"
    },
    {
     "caption": "Paso 5 — direccion elegida de las sugerencias",
     "file": "TC-B2C125-M-012-p05-direccion-elegida-de-las-sugerencias.png"
    },
    {
     "caption": "Paso 6 — modal autenticacion requerida recien abierto",
     "file": "TC-B2C125-M-012-p06-modal-autenticacion-requerida-recien-abierto.png"
    },
    {
     "caption": "Paso 7 — tras mas de 10 minutos de espera",
     "file": "TC-B2C125-M-012-p07-tras-mas-de-10-minutos-de-espera.png"
    },
    {
     "caption": "Paso 8 — codigo expirado ingresado",
     "file": "TC-B2C125-M-012-p08-codigo-expirado-ingresado.png"
    }
   ],
   "spec": "tests/B2C-125.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n7. El usuario espera más de 10 minutos.\n8. El usuario ingresa el código recibido y presiona \"Continuar\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Se muestra el toast \"Ha superado el máximo de intentos. Por seguridad, vuelve a intentarlo en 10 minutos\" con X, \"Reenviar\" queda bloqueado por 10 minutos y el código correcto ya no es aceptado.",
   "form_factor": "mobile",
   "id": "TC-B2C125-M-013",
   "name": "Verificar que al quinto código incorrecto se bloquea el reenvío por 10 minutos [Mobile] [Logueado]",
   "observation": "Falta data: token sin fila en el Excel de data {OTP_INCORRECTO}. Acción: cargar el valor en el Excel de data (quien administra la data).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "spec": "tests/B2C-125.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n7. El usuario ingresa {OTP_INCORRECTO} y presiona \"Continuar\" 5 veces seguidas.\n8. El usuario ingresa el código correcto recibido.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {OTP_INCORRECTO} = 000000 (cualquier código distinto al recibido)\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Llega un nuevo código al correo, el temporizador vuelve a 60 s y el nuevo código se valida correctamente.",
   "form_factor": "mobile",
   "id": "TC-B2C125-M-014",
   "name": "Verificar que Reenviar envía un código nuevo, reinicia el temporizador y el nuevo código funciona [Mobile] [Logueado]",
   "observation": "Esperado: tras «Reenviar» el temporizador vuelve a 60 s. Obtenido: aparece el aviso de código enviado y «Reenviar» queda disponible de inmediato, sin «Pide uno nuevo en 60s». El código nuevo llega y se valida bien. Bug B2C-1433.",
   "observed": "Esperado: tras «Reenviar» el temporizador vuelve a 60 s. Obtenido: aparece el aviso de código enviado y «Reenviar» queda disponible de inmediato, sin «Pide uno nuevo en 60s». El código nuevo llega y se valida bien. Bug B2C-1433.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Paso 2 — home con la sesion iniciada",
     "file": "TC-B2C125-M-014-p02-home-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — store locator abierto pestana despacho a domicilio",
     "file": "TC-B2C125-M-014-p04-store-locator-abierto-pestana-despacho-a-domicilio.png"
    },
    {
     "caption": "Paso 5 — direccion elegida de las sugerencias",
     "file": "TC-B2C125-M-014-p05-direccion-elegida-de-las-sugerencias.png"
    },
    {
     "caption": "Paso 7 — a los 60 s reenviar visible",
     "file": "TC-B2C125-M-014-p07-a-los-60-s-reenviar-visible.png"
    },
    {
     "caption": "Paso 8 — tras reenviar temporizador en null s",
     "file": "TC-B2C125-M-014-p08-tras-reenviar-temporizador-en-null-s.png"
    },
    {
     "caption": "Paso 9 — nuevo codigo validado",
     "file": "TC-B2C125-M-014-p09-nuevo-codigo-validado.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C125-M-014.png"
    }
   ],
   "spec": "tests/B2C-125.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n7. El usuario espera 60 segundos.\n8. El usuario toca \"Reenviar\".\n9. El usuario ingresa el nuevo código y presiona \"Continuar\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El código anterior es rechazado con \"Código inválido\".",
   "form_factor": "mobile",
   "id": "TC-B2C125-M-015",
   "name": "Verificar que tras reenviar el código anterior ya no es válido [Mobile] [Logueado]",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Paso 2 — home con la sesion iniciada",
     "file": "TC-B2C125-M-015-p02-home-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — store locator abierto pestana despacho a domicilio",
     "file": "TC-B2C125-M-015-p04-store-locator-abierto-pestana-despacho-a-domicilio.png"
    },
    {
     "caption": "Paso 5 — direccion elegida de las sugerencias",
     "file": "TC-B2C125-M-015-p05-direccion-elegida-de-las-sugerencias.png"
    },
    {
     "caption": "Paso 8 — tras reenviar",
     "file": "TC-B2C125-M-015-p08-tras-reenviar.png"
    },
    {
     "caption": "Paso 9 — codigo anterior rechazado",
     "file": "TC-B2C125-M-015-p09-codigo-anterior-rechazado.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C125-M-015.png"
    }
   ],
   "spec": "tests/B2C-125.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n7. El usuario espera 60 segundos.\n8. El usuario toca \"Reenviar\".\n9. El usuario ingresa el código del primer envío y presiona \"Continuar\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El flujo OTP se cancela, el usuario vuelve al Store Locator y la dirección activa sigue siendo {DIRECCION_DESPACHO_001}.",
   "form_factor": "mobile",
   "id": "TC-B2C125-M-016",
   "name": "Verificar que cerrar el modal OTP cancela el cambio y mantiene la dirección anterior [Mobile] [Logueado]",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Paso 2 — home con la sesion iniciada",
     "file": "TC-B2C125-M-016-p02-home-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — store locator abierto pestana despacho a domicilio",
     "file": "TC-B2C125-M-016-p04-store-locator-abierto-pestana-despacho-a-domicilio.png"
    },
    {
     "caption": "Paso 5 — direccion elegida de las sugerencias",
     "file": "TC-B2C125-M-016-p05-direccion-elegida-de-las-sugerencias.png"
    },
    {
     "caption": "Paso 7 — tras la x del modal otp",
     "file": "TC-B2C125-M-016-p07-tras-la-x-del-modal-otp.png"
    },
    {
     "caption": "Paso 8 — store locator con la direccion anterior activa",
     "file": "TC-B2C125-M-016-p08-store-locator-con-la-direccion-anterior-activa.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C125-M-016.png"
    }
   ],
   "spec": "tests/B2C-125.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n7. El usuario toca \"<\" del modal.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Se muestra el toast \"Lo sentimos, no pudimos guardar tu dirección. Inténtalo nuevamente.\" y la dirección activa sigue siendo {DIRECCION_DESPACHO_001}.",
   "form_factor": "mobile",
   "id": "TC-B2C125-M-017",
   "name": "Verificar que con OTP correcto un error al guardar muestra el toast y no cambia la dirección [Mobile] [Logueado]",
   "observation": "Falta data: el bloqueo de la petición con {SETEO_ENTREGA_API_ENDPOINT} no tuvo efecto: la dirección se guardó igual y no apareció el toast de error. El endpoint declarado no coincide con la llamada real. Acción: declarar el endpoint correcto del guardado de dirección (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- DevTools abierto con bloqueo de la request {SETEO_ENTREGA_API_ENDPOINT} (Network request blocking)",
   "screenshots": [
    {
     "caption": "Paso 2 — home con la sesion iniciada",
     "file": "TC-B2C125-M-017-p02-home-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — store locator abierto pestana despacho a domicilio",
     "file": "TC-B2C125-M-017-p04-store-locator-abierto-pestana-despacho-a-domicilio.png"
    },
    {
     "caption": "Paso 5 — direccion elegida de las sugerencias",
     "file": "TC-B2C125-M-017-p05-direccion-elegida-de-las-sugerencias.png"
    },
    {
     "caption": "Paso 6 — codigo ingresado con la request bloqueada",
     "file": "TC-B2C125-M-017-p06-codigo-ingresado-con-la-request-bloqueada.png"
    },
    {
     "caption": "Paso 7 — resultado tras validar el codigo",
     "file": "TC-B2C125-M-017-p07-resultado-tras-validar-el-codigo.png"
    }
   ],
   "spec": "tests/B2C-125.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n7. El usuario ingresa el código OTP recibido y presiona \"Continuar\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SETEO_ENTREGA_API_ENDPOINT} = TBD\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Llega un código OTP al correo registrado de {USER_AUTH_001}; se muestra el modal \"Autenticación requerida\" con el correo enmascarado y los campos de ingreso, y el toast \"El código de verificación ha sido enviado. Revisa tu correo\" con X. La tienda aún no queda seteada.",
   "form_factor": "desktop",
   "id": "TC-B2C125-D-018",
   "name": "Verificar que al confirmar un cambio de tienda de retiro se envía el OTP y se muestra el modal con el toast de envío [Desktop] [Logueado]",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Retiro en tienda activo en {TIENDA_RETIRO_002}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Paso 2 — home con retiro activo en tienda retiro 002",
     "file": "TC-B2C125-D-018-p02-home-con-retiro-activo-en-tienda-retiro-002.png"
    },
    {
     "caption": "Paso 5 — pestana retiro en tienda",
     "file": "TC-B2C125-D-018-p05-pestana-retiro-en-tienda.png"
    },
    {
     "caption": "Paso 7 — tienda tienda retiro 001 seleccionada",
     "file": "TC-B2C125-D-018-p07-tienda-tienda-retiro-001-seleccionada.png"
    },
    {
     "caption": "Paso 8 — modal autenticacion requerida y toast de envio",
     "file": "TC-B2C125-D-018-p08-modal-autenticacion-requerida-y-toast-de-envio.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C125-D-018.png"
    }
   ],
   "spec": "tests/B2C-125.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el Store Locator.\n5. El usuario hace clic en la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario selecciona la tienda {TIENDA_RETIRO_001} y hace clic en \"Confirmar tienda\".\n8. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n9. El usuario revisa la casilla de correo de la cuenta.",
   "test_data": "- {BASE_URL}\n- {USER_AUTH_001}\n- {TIENDA_RETIRO_001}\n- {TIENDA_RETIRO_002}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El modal OTP se cierra y se muestra el modal \"Por ahora no hay horarios disponibles\" (B2C-127) con los botones \"Continuar con esta dirección\" y \"Cambiar método de entrega\"; {DIRECCION_SIN_SLA} aún no queda seteada.",
   "form_factor": "desktop",
   "id": "TC-B2C125-D-019",
   "name": "Verificar que con OTP correcto y una dirección sin horarios se deriva al modal Sin horarios disponibles [Desktop] [Logueado]",
   "observation": "Causa: el caso agotó el tiempo de 7 min antes de llegar al sitio, en 2 de 2 intentos, mientras sondeaba {DIRECCION_SIN_SLA} como invitado; sin veredicto del producto. Acción requerida: repetir el caso con el ambiente estable.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- {DIRECCION_SIN_SLA} tiene cobertura y no tiene SLAs disponibles\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "spec": "tests/B2C-125.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_SIN_SLA}, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n7. El usuario ingresa el código OTP recibido y hace clic en \"Continuar\".",
   "test_data": "- {BASE_URL}\n- {USER_AUTH_001}\n- {DIRECCION_DESPACHO_001}\n- {DIRECCION_SIN_SLA}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El flujo OTP se cancela, el usuario vuelve al Store Locator sin cambios y el retiro activo sigue siendo {TIENDA_RETIRO_002}; {TIENDA_RETIRO_001} no queda seteada.",
   "form_factor": "desktop",
   "id": "TC-B2C125-D-020",
   "name": "Verificar que cerrar el modal OTP tras intentar cambiar la tienda de retiro mantiene la tienda anterior [Desktop] [Logueado]",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Retiro en tienda activo en {TIENDA_RETIRO_002}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Paso 2 — home con retiro activo en tienda retiro 002",
     "file": "TC-B2C125-D-020-p02-home-con-retiro-activo-en-tienda-retiro-002.png"
    },
    {
     "caption": "Paso 5 — pestana retiro en tienda",
     "file": "TC-B2C125-D-020-p05-pestana-retiro-en-tienda.png"
    },
    {
     "caption": "Paso 7 — tienda tienda retiro 001 seleccionada",
     "file": "TC-B2C125-D-020-p07-tienda-tienda-retiro-001-seleccionada.png"
    },
    {
     "caption": "Paso 9 — tras la x del modal otp",
     "file": "TC-B2C125-D-020-p09-tras-la-x-del-modal-otp.png"
    },
    {
     "caption": "Paso 10 — store locator sin cambios",
     "file": "TC-B2C125-D-020-p10-store-locator-sin-cambios.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C125-D-020.png"
    }
   ],
   "spec": "tests/B2C-125.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el Store Locator.\n5. El usuario hace clic en la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario selecciona la tienda {TIENDA_RETIRO_001} y hace clic en \"Confirmar tienda\".\n8. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n9. El usuario hace clic en la X del modal.\n10. El usuario revisa el Store Locator.",
   "test_data": "- {BASE_URL}\n- {USER_AUTH_001}\n- {TIENDA_RETIRO_001}\n- {TIENDA_RETIRO_002}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Llega un código OTP al correo registrado de {USER_AUTH_001}; se muestra el modal \"Autenticación requerida\" con el correo enmascarado y los campos de ingreso, y el toast \"El código de verificación ha sido enviado. Revisa tu correo\" con X. La tienda aún no queda seteada.",
   "form_factor": "mobile",
   "id": "TC-B2C125-M-018",
   "name": "Verificar que al confirmar un cambio de tienda de retiro se envía el OTP y se muestra el modal con el toast de envío [Mobile] [Logueado]",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Retiro en tienda activo en {TIENDA_RETIRO_002}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Paso 2 — home con retiro activo en tienda retiro 002",
     "file": "TC-B2C125-M-018-p02-home-con-retiro-activo-en-tienda-retiro-002.png"
    },
    {
     "caption": "Paso 5 — pestana retiro en tienda",
     "file": "TC-B2C125-M-018-p05-pestana-retiro-en-tienda.png"
    },
    {
     "caption": "Paso 7 — tienda tienda retiro 001 seleccionada",
     "file": "TC-B2C125-M-018-p07-tienda-tienda-retiro-001-seleccionada.png"
    },
    {
     "caption": "Paso 8 — modal autenticacion requerida y toast de envio",
     "file": "TC-B2C125-M-018-p08-modal-autenticacion-requerida-y-toast-de-envio.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C125-M-018.png"
    }
   ],
   "spec": "tests/B2C-125.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario selecciona la tienda {TIENDA_RETIRO_001} y toca \"Confirmar tienda\".\n8. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n9. El usuario revisa la casilla de correo de la cuenta.",
   "test_data": "- {BASE_URL}\n- {USER_AUTH_001}\n- {TIENDA_RETIRO_001}\n- {TIENDA_RETIRO_002}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El modal OTP se cierra y se muestra el modal \"Por ahora no hay horarios disponibles\" (B2C-127) con los botones \"Continuar con esta dirección\" y \"Cambiar método de entrega\"; {DIRECCION_SIN_SLA} aún no queda seteada.",
   "form_factor": "mobile",
   "id": "TC-B2C125-M-019",
   "name": "Verificar que con OTP correcto y una dirección sin horarios se deriva al modal Sin horarios disponibles [Mobile] [Logueado]",
   "observation": "Causa: el caso agotó el tiempo de 7 min antes de llegar al sitio, en 2 de 2 intentos, mientras sondeaba {DIRECCION_SIN_SLA} como invitado; sin veredicto del producto. Acción requerida: repetir el caso con el ambiente estable.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- {DIRECCION_SIN_SLA} tiene cobertura y no tiene SLAs disponibles\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "spec": "tests/B2C-125.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_SIN_SLA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n7. El usuario ingresa el código OTP recibido y toca \"Continuar\".",
   "test_data": "- {BASE_URL}\n- {USER_AUTH_001}\n- {DIRECCION_DESPACHO_001}\n- {DIRECCION_SIN_SLA}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El flujo OTP se cancela, el usuario vuelve al Store Locator sin cambios y el retiro activo sigue siendo {TIENDA_RETIRO_002}; {TIENDA_RETIRO_001} no queda seteada.",
   "form_factor": "mobile",
   "id": "TC-B2C125-M-020",
   "name": "Verificar que cerrar el modal OTP tras intentar cambiar la tienda de retiro mantiene la tienda anterior [Mobile] [Logueado]",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Retiro en tienda activo en {TIENDA_RETIRO_002}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Paso 2 — home con retiro activo en tienda retiro 002",
     "file": "TC-B2C125-M-020-p02-home-con-retiro-activo-en-tienda-retiro-002.png"
    },
    {
     "caption": "Paso 5 — pestana retiro en tienda",
     "file": "TC-B2C125-M-020-p05-pestana-retiro-en-tienda.png"
    },
    {
     "caption": "Paso 7 — tienda tienda retiro 001 seleccionada",
     "file": "TC-B2C125-M-020-p07-tienda-tienda-retiro-001-seleccionada.png"
    },
    {
     "caption": "Paso 9 — tras la x del modal otp",
     "file": "TC-B2C125-M-020-p09-tras-la-x-del-modal-otp.png"
    },
    {
     "caption": "Paso 10 — store locator sin cambios",
     "file": "TC-B2C125-M-020-p10-store-locator-sin-cambios.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C125-M-020.png"
    }
   ],
   "spec": "tests/B2C-125.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario selecciona la tienda {TIENDA_RETIRO_001} y toca \"Confirmar tienda\".\n8. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n9. El usuario toca \"<\" del modal.\n10. El usuario revisa el Store Locator.",
   "test_data": "- {BASE_URL}\n- {USER_AUTH_001}\n- {TIENDA_RETIRO_001}\n- {TIENDA_RETIRO_002}",
   "viewport": "390x844"
  }
 ]
}
-->
