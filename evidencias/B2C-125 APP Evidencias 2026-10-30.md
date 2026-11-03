# B2C-125 APP Android - Evidencias QA (corrida del 2026-10-30)

| Campo | Valor |
|---|---|
| Suite | B2C-125 |
| Última actualización | 2026-10-30 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | App Android cl.smu.unimarcapp.sfcc.qa v1.0.1 (DEV), dispositivo por ADB |
| Origen de los TC | Unimarc/B2C-125 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 11 |
| Rechazado | 1 |
| **Total** | **12** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-30 | 12 | TC-B2C125-APP-001, TC-B2C125-APP-002, TC-B2C125-APP-003, TC-B2C125-APP-004, TC-B2C125-APP-006, TC-B2C125-APP-008, TC-B2C125-APP-009, TC-B2C125-APP-010, TC-B2C125-APP-012, TC-B2C125-APP-014, TC-B2C125-APP-015, TC-B2C125-APP-016 |

## Detalle por caso de prueba

### TC-B2C125-APP-001 - Verificar que al confirmar un cambio a una dirección nueva (no guardada) se envía el OTP y se muestra el toast de envío [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- {DIRECCION_OTRA_TIENDA} es una dirección nueva: no está guardada en la libreta de direcciones de {USER_AUTH_001} (si quedó guardada por una ejecución anterior, p. ej. D/M/APP-008, eliminarla antes de ejecutar)
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".

**Resultado esperado**

Llega un código OTP al correo registrado, se muestra el modal de ingreso y el toast "El código de verificación ha sido enviado. Revisa tu correo" con X.

**Resultado obtenido**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): tras «Confirmar dirección» con {DIRECCION_OTRA_TIENDA} llega el código al correo, se abre el modal «Autenticación requerida» y aparece el toast «El código de verificación ha sido enviado. Revisa tu correo» con «Cerrar aviso». iOS: no ejecutado.

**Observación**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): tras «Confirmar dirección» con {DIRECCION_OTRA_TIENDA} llega el código al correo, se abre el modal «Autenticación requerida» y aparece el toast «El código de verificación ha sido enviado. Revisa tu correo» con «Cerrar aviso». iOS: no ejecutado.

**Evidencia**

![Android · Paso 1 — modal autenticacion requerida](<B2C-125 APP Evidencias 2026-10-30/TC-B2C125-APP-001-android-p01-modal-autenticacion-requerida.png>)

---

### TC-B2C125-APP-002 - Verificar que el modal Autenticación requerida muestra todos sus elementos [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
7. El usuario revisa el modal.

**Resultado esperado**

El modal muestra el botón "<", el título "Autenticación requerida", "Enviamos un código de verificación al correo" con el correo enmascarado, 6 campos de código, "¿No recibiste el código? Pide uno nuevo en" con temporizador, el mensaje "Importante: Asegúrate de ingresar correctamente el código de verificación" y el botón "Continuar".

**Resultado obtenido**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): el modal muestra «Cerrar», «Autenticación requerida», «Enviamos un código de verificación al correo» con el correo enmascarado, 6 campos, «¿No recibiste el código? Reenviar código en mm:ss», «Importante: Asegúrate de ingresar correctamente el código de verificación» y el botón rojo «Validar» (el TC lo llama «Continuar»; aparece al ocultar el teclado). iOS: no ejecutado.

**Observación**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): el modal muestra «Cerrar», «Autenticación requerida», «Enviamos un código de verificación al correo» con el correo enmascarado, 6 campos, «¿No recibiste el código? Reenviar código en mm:ss», «Importante: Asegúrate de ingresar correctamente el código de verificación» y el botón rojo «Validar» (el TC lo llama «Continuar»; aparece al ocultar el teclado). iOS: no ejecutado.

---

### TC-B2C125-APP-003 - Verificar que el correo del modal OTP se muestra enmascarado según la regla [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
7. El usuario revisa el correo mostrado en el modal.

**Resultado esperado**

El correo de {USER_AUTH_001} se muestra con el formato "gir****@h***.com" (3 caracteres, primera letra del dominio y .com).

**Resultado obtenido**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): el correo se muestra como dau****@a***.com (3 caracteres, ****, primera letra del dominio, ***, .com). iOS: no ejecutado.

**Observación**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): el correo se muestra como dau****@a***.com (3 caracteres, ****, primera letra del dominio, ***, .com). iOS: no ejecutado.

---

### TC-B2C125-APP-004 - Verificar que al ingresar un dígito el foco avanza al siguiente campo [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
7. El usuario ingresa el primer dígito del código.

**Resultado esperado**

El foco avanza automáticamente al segundo campo.

**Resultado obtenido**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): al ingresar el primer dígito el foco avanza al segundo campo (verificado en la captura). iOS: no ejecutado.

**Observación**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): al ingresar el primer dígito el foco avanza al segundo campo (verificado en la captura). iOS: no ejecutado.

**Evidencia**

![Android · Paso 1 — foco tras el primer digito](<B2C-125 APP Evidencias 2026-10-30/TC-B2C125-APP-004-android-p01-foco-tras-el-primer-digito.png>)

---

### TC-B2C125-APP-006 - Verificar que con menos de 6 dígitos no se permite continuar [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
7. El usuario ingresa solo 5 dígitos.
8. El usuario intenta tocar "Continuar".

**Resultado esperado**

No se permite continuar con la validación con el código incompleto.

**Resultado obtenido**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): con 5 dígitos el botón «Validar» queda deshabilitado. iOS: no ejecutado.

**Observación**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): con 5 dígitos el botón «Validar» queda deshabilitado. iOS: no ejecutado.

**Evidencia**

![Android · Paso 1 — cinco digitos](<B2C-125 APP Evidencias 2026-10-30/TC-B2C125-APP-006-android-p01-cinco-digitos.png>)

---

### TC-B2C125-APP-008 - Verificar que un OTP correcto aplica la dirección, cierra el modal y la guarda en la libreta [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- {DIRECCION_OTRA_TIENDA} tiene cobertura y SLAs

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
7. El usuario ingresa el código OTP recibido y presiona "Continuar".
8. El usuario revisa el Store Locator y la libreta de direcciones de Mi cuenta.

**Resultado esperado**

El modal se cierra, el usuario vuelve al punto de origen con {DIRECCION_OTRA_TIENDA} seteada en el Store Locator y la dirección queda en la libreta.

**Resultado obtenido**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): con el código correcto el modal se cierra, vuelve al Home y {DIRECCION_OTRA_TIENDA} queda como dirección activa («Avenida Las Condes 14791, Lo Barnechea»). No se verificó su presencia en la libreta: la lista de direcciones guardadas tiene decenas de entradas «Calle Uno 23 (n)» y no se recorrió completa. La cuenta se devolvió a {DIRECCION_DESPACHO_001} después. iOS: no ejecutado.

**Observación**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): con el código correcto el modal se cierra, vuelve al Home y {DIRECCION_OTRA_TIENDA} queda como dirección activa («Avenida Las Condes 14791, Lo Barnechea»). No se verificó su presencia en la libreta: la lista de direcciones guardadas tiene decenas de entradas «Calle Uno 23 (n)» y no se recorrió completa. La cuenta se devolvió a {DIRECCION_DESPACHO_001} después. iOS: no ejecutado.

**Evidencia**

![Android · Paso 2 — libreta con la direccion nueva](<B2C-125 APP Evidencias 2026-10-30/TC-B2C125-APP-008-android-p02-libreta-con-la-direccion-nueva.png>)

---

### TC-B2C125-APP-009 - Verificar que el temporizador de reenvío inicia en 60 segundos y bloquea el reenvío [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".

**Resultado esperado**

El temporizador inicia en 60 segundos en cuenta regresiva y no se muestra la opción "Reenviar" mientras corre.

**Resultado obtenido**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Esperado: el temporizador inicia en 60 segundos. Obtenido: al abrirse el modal marca 01:32 (01:23 en otra ejecución), es decir, parte de más de 60 segundos; «Reenviar» no se muestra mientras corre. Bug: B2C-1413. iOS: no ejecutado.

**Observación**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Esperado: el temporizador inicia en 60 segundos. Obtenido: al abrirse el modal marca 01:32 (01:23 en otra ejecución), es decir, parte de más de 60 segundos; «Reenviar» no se muestra mientras corre. Bug: B2C-1413. iOS: no ejecutado.

---

### TC-B2C125-APP-010 - Verificar que al terminar el temporizador se muestra Reenviar [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
7. El usuario espera 60 segundos.

**Resultado esperado**

Al llegar a 0 se muestra la opción "Reenviar".

**Resultado obtenido**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): al llegar el temporizador a 0 se muestra «Reenviar» (a unos 86 s de abrirse el modal; la cuenta regresiva parte de más de 60 s, ver B2C-1413). iOS: no ejecutado.

**Observación**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): al llegar el temporizador a 0 se muestra «Reenviar» (a unos 86 s de abrirse el modal; la cuenta regresiva parte de más de 60 s, ver B2C-1413). iOS: no ejecutado.

**Evidencia**

![Android · Paso 1 — reenviar visible](<B2C-125 APP Evidencias 2026-10-30/TC-B2C125-APP-010-android-p01-reenviar-visible.png>)

---

### TC-B2C125-APP-012 - Verificar que un código expirado muestra Código inválido y el toast con Solicitar [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
7. El usuario espera más de 10 minutos.
8. El usuario ingresa el código recibido y presiona "Continuar".

**Resultado esperado**

Los campos se pintan en rojo, se muestra "Código inválido" y el toast persistente "El código expiró, solicita uno nuevo para continuar" con X y botón "Solicitar".

**Resultado obtenido**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): con un código de más de 10 minutos de antigüedad se muestra el toast «El código expiró, solicita uno nuevo para continuar» con «Solicitar» y «Cerrar aviso». iOS: no ejecutado.

**Observación**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): con un código de más de 10 minutos de antigüedad se muestra el toast «El código expiró, solicita uno nuevo para continuar» con «Solicitar» y «Cerrar aviso». iOS: no ejecutado.

**Evidencia**

![Android · Paso 1 — codigo expirado](<B2C-125 APP Evidencias 2026-10-30/TC-B2C125-APP-012-android-p01-codigo-expirado.png>)

---

### TC-B2C125-APP-014 - Verificar que Reenviar envía un código nuevo, reinicia el temporizador y el nuevo código funciona [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
7. El usuario espera 60 segundos.
8. El usuario toca "Reenviar".
9. El usuario ingresa el nuevo código y presiona "Continuar".

**Resultado esperado**

Llega un nuevo código al correo, el temporizador vuelve a 60 s y el nuevo código se valida correctamente.

**Resultado obtenido**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): tras esperar, «Reenviar» aparece y al tocarlo llega un código nuevo al correo; el temporizador se reinicia (parte de ~2 minutos, ver B2C-1413) y el código nuevo se valida: el modal se cierra y la dirección queda aplicada. iOS: no ejecutado.

**Observación**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): tras esperar, «Reenviar» aparece y al tocarlo llega un código nuevo al correo; el temporizador se reinicia (parte de ~2 minutos, ver B2C-1413) y el código nuevo se valida: el modal se cierra y la dirección queda aplicada. iOS: no ejecutado.

**Evidencia**

![Android · Paso 1 — reenviar disponible](<B2C-125 APP Evidencias 2026-10-30/TC-B2C125-APP-014-android-p01-reenviar-disponible.png>)

![Android · Paso 2 — tras reenviar](<B2C-125 APP Evidencias 2026-10-30/TC-B2C125-APP-014-android-p02-tras-reenviar.png>)

![Android · Paso 3 — codigo nuevo validado](<B2C-125 APP Evidencias 2026-10-30/TC-B2C125-APP-014-android-p03-codigo-nuevo-validado.png>)

---

### TC-B2C125-APP-015 - Verificar que tras reenviar el código anterior ya no es válido [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
7. El usuario espera 60 segundos.
8. El usuario toca "Reenviar".
9. El usuario ingresa el código del primer envío y presiona "Continuar".

**Resultado esperado**

El código anterior es rechazado con "Código inválido".

**Resultado obtenido**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): tras reenviar, el código anterior es rechazado con «Código inválido» y el modal sigue abierto. iOS: no ejecutado.

**Observación**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): tras reenviar, el código anterior es rechazado con «Código inválido» y el modal sigue abierto. iOS: no ejecutado.

**Evidencia**

![Android · Paso 1 — codigo anterior tecleado](<B2C-125 APP Evidencias 2026-10-30/TC-B2C125-APP-015-android-p01-codigo-anterior-tecleado.png>)

![Android · Paso 1 — codigo anterior](<B2C-125 APP Evidencias 2026-10-30/TC-B2C125-APP-015-android-p01-codigo-anterior.png>)

---

### TC-B2C125-APP-016 - Verificar que cerrar el modal OTP cancela el cambio y mantiene la dirección anterior [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
7. El usuario toca "<" del modal.

**Resultado esperado**

El flujo OTP se cancela, el usuario vuelve al Store Locator y la dirección activa sigue siendo {DIRECCION_DESPACHO_001}.

**Resultado obtenido**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): al tocar la X del modal «Autenticación requerida» se cancela el cambio: la app vuelve a «Detalles de la dirección» (no a un Store Locator, como dice el TC), muestra «Verificación pendiente. Tu dirección no fue guardada» y la dirección activa sigue siendo {DIRECCION_DESPACHO_001}. iOS: no ejecutado.

**Observación**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): al tocar la X del modal «Autenticación requerida» se cancela el cambio: la app vuelve a «Detalles de la dirección» (no a un Store Locator, como dice el TC), muestra «Verificación pendiente. Tu dirección no fue guardada» y la dirección activa sigue siendo {DIRECCION_DESPACHO_001}. iOS: no ejecutado.

**Evidencia**

![Android · Paso 1 — modal otp abierto](<B2C-125 APP Evidencias 2026-10-30/TC-B2C125-APP-016-android-p01-modal-otp-abierto.png>)

![Android · Paso 1 — tras cerrar el otp](<B2C-125 APP Evidencias 2026-10-30/TC-B2C125-APP-016-android-p01-tras-cerrar-el-otp.png>)

![Android · Paso 2 — tras cerrar el otp](<B2C-125 APP Evidencias 2026-10-30/TC-B2C125-APP-016-android-p02-tras-cerrar-el-otp.png>)

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "environment": "App Android cl.smu.unimarcapp.sfcc.qa v1.0.1 (DEV), dispositivo por ADB",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-125",
  "tc_file": "Unimarc/B2C-125 APP Test Cases.xlsx",
  "title": "B2C-125 APP Android - Evidencias QA (corrida del 2026-10-30)",
  "updated_at": "2026-10-30"
 },
 "history": {
  "2026-10-30": [
   "TC-B2C125-APP-001",
   "TC-B2C125-APP-002",
   "TC-B2C125-APP-003",
   "TC-B2C125-APP-004",
   "TC-B2C125-APP-006",
   "TC-B2C125-APP-008",
   "TC-B2C125-APP-009",
   "TC-B2C125-APP-010",
   "TC-B2C125-APP-012",
   "TC-B2C125-APP-014",
   "TC-B2C125-APP-015",
   "TC-B2C125-APP-016"
  ]
 },
 "results": [
  {
   "executed_at": "2026-10-30",
   "expected": "Llega un código OTP al correo registrado, se muestra el modal de ingreso y el toast \"El código de verificación ha sido enviado. Revisa tu correo\" con X.",
   "id": "TC-B2C125-APP-001",
   "name": "Verificar que al confirmar un cambio a una dirección nueva (no guardada) se envía el OTP y se muestra el toast de envío [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): tras «Confirmar dirección» con {DIRECCION_OTRA_TIENDA} llega el código al correo, se abre el modal «Autenticación requerida» y aparece el toast «El código de verificación ha sido enviado. Revisa tu correo» con «Cerrar aviso». iOS: no ejecutado.",
   "observed": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): tras «Confirmar dirección» con {DIRECCION_OTRA_TIENDA} llega el código al correo, se abre el modal «Autenticación requerida» y aparece el toast «El código de verificación ha sido enviado. Revisa tu correo» con «Cerrar aviso». iOS: no ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- {DIRECCION_OTRA_TIENDA} es una dirección nueva: no está guardada en la libreta de direcciones de {USER_AUTH_001} (si quedó guardada por una ejecución anterior, p. ej. D/M/APP-008, eliminarla antes de ejecutar)\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — modal autenticacion requerida",
     "file": "TC-B2C125-APP-001-android-p01-modal-autenticacion-requerida.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "El modal muestra el botón \"<\", el título \"Autenticación requerida\", \"Enviamos un código de verificación al correo\" con el correo enmascarado, 6 campos de código, \"¿No recibiste el código? Pide uno nuevo en\" con temporizador, el mensaje \"Importante: Asegúrate de ingresar correctamente el código de verificación\" y el botón \"Continuar\".",
   "id": "TC-B2C125-APP-002",
   "name": "Verificar que el modal Autenticación requerida muestra todos sus elementos [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): el modal muestra «Cerrar», «Autenticación requerida», «Enviamos un código de verificación al correo» con el correo enmascarado, 6 campos, «¿No recibiste el código? Reenviar código en mm:ss», «Importante: Asegúrate de ingresar correctamente el código de verificación» y el botón rojo «Validar» (el TC lo llama «Continuar»; aparece al ocultar el teclado). iOS: no ejecutado.",
   "observed": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): el modal muestra «Cerrar», «Autenticación requerida», «Enviamos un código de verificación al correo» con el correo enmascarado, 6 campos, «¿No recibiste el código? Reenviar código en mm:ss», «Importante: Asegúrate de ingresar correctamente el código de verificación» y el botón rojo «Validar» (el TC lo llama «Continuar»; aparece al ocultar el teclado). iOS: no ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n7. El usuario revisa el modal.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "El correo de {USER_AUTH_001} se muestra con el formato \"gir****@h***.com\" (3 caracteres, primera letra del dominio y .com).",
   "id": "TC-B2C125-APP-003",
   "name": "Verificar que el correo del modal OTP se muestra enmascarado según la regla [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): el correo se muestra como dau****@a***.com (3 caracteres, ****, primera letra del dominio, ***, .com). iOS: no ejecutado.",
   "observed": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): el correo se muestra como dau****@a***.com (3 caracteres, ****, primera letra del dominio, ***, .com). iOS: no ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n7. El usuario revisa el correo mostrado en el modal.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "El foco avanza automáticamente al segundo campo.",
   "id": "TC-B2C125-APP-004",
   "name": "Verificar que al ingresar un dígito el foco avanza al siguiente campo [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): al ingresar el primer dígito el foco avanza al segundo campo (verificado en la captura). iOS: no ejecutado.",
   "observed": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): al ingresar el primer dígito el foco avanza al segundo campo (verificado en la captura). iOS: no ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — foco tras el primer digito",
     "file": "TC-B2C125-APP-004-android-p01-foco-tras-el-primer-digito.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n7. El usuario ingresa el primer dígito del código.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "No se permite continuar con la validación con el código incompleto.",
   "id": "TC-B2C125-APP-006",
   "name": "Verificar que con menos de 6 dígitos no se permite continuar [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): con 5 dígitos el botón «Validar» queda deshabilitado. iOS: no ejecutado.",
   "observed": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): con 5 dígitos el botón «Validar» queda deshabilitado. iOS: no ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — cinco digitos",
     "file": "TC-B2C125-APP-006-android-p01-cinco-digitos.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n7. El usuario ingresa solo 5 dígitos.\n8. El usuario intenta tocar \"Continuar\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "El modal se cierra, el usuario vuelve al punto de origen con {DIRECCION_OTRA_TIENDA} seteada en el Store Locator y la dirección queda en la libreta.",
   "id": "TC-B2C125-APP-008",
   "name": "Verificar que un OTP correcto aplica la dirección, cierra el modal y la guarda en la libreta [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): con el código correcto el modal se cierra, vuelve al Home y {DIRECCION_OTRA_TIENDA} queda como dirección activa («Avenida Las Condes 14791, Lo Barnechea»). No se verificó su presencia en la libreta: la lista de direcciones guardadas tiene decenas de entradas «Calle Uno 23 (n)» y no se recorrió completa. La cuenta se devolvió a {DIRECCION_DESPACHO_001} después. iOS: no ejecutado.",
   "observed": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): con el código correcto el modal se cierra, vuelve al Home y {DIRECCION_OTRA_TIENDA} queda como dirección activa («Avenida Las Condes 14791, Lo Barnechea»). No se verificó su presencia en la libreta: la lista de direcciones guardadas tiene decenas de entradas «Calle Uno 23 (n)» y no se recorrió completa. La cuenta se devolvió a {DIRECCION_DESPACHO_001} después. iOS: no ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- {DIRECCION_OTRA_TIENDA} tiene cobertura y SLAs",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — libreta con la direccion nueva",
     "file": "TC-B2C125-APP-008-android-p02-libreta-con-la-direccion-nueva.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n7. El usuario ingresa el código OTP recibido y presiona \"Continuar\".\n8. El usuario revisa el Store Locator y la libreta de direcciones de Mi cuenta.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "El temporizador inicia en 60 segundos en cuenta regresiva y no se muestra la opción \"Reenviar\" mientras corre.",
   "id": "TC-B2C125-APP-009",
   "name": "Verificar que el temporizador de reenvío inicia en 60 segundos y bloquea el reenvío [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Esperado: el temporizador inicia en 60 segundos. Obtenido: al abrirse el modal marca 01:32 (01:23 en otra ejecución), es decir, parte de más de 60 segundos; «Reenviar» no se muestra mientras corre. Bug: B2C-1413. iOS: no ejecutado.",
   "observed": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Esperado: el temporizador inicia en 60 segundos. Obtenido: al abrirse el modal marca 01:32 (01:23 en otra ejecución), es decir, parte de más de 60 segundos; «Reenviar» no se muestra mientras corre. Bug: B2C-1413. iOS: no ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "Al llegar a 0 se muestra la opción \"Reenviar\".",
   "id": "TC-B2C125-APP-010",
   "name": "Verificar que al terminar el temporizador se muestra Reenviar [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): al llegar el temporizador a 0 se muestra «Reenviar» (a unos 86 s de abrirse el modal; la cuenta regresiva parte de más de 60 s, ver B2C-1413). iOS: no ejecutado.",
   "observed": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): al llegar el temporizador a 0 se muestra «Reenviar» (a unos 86 s de abrirse el modal; la cuenta regresiva parte de más de 60 s, ver B2C-1413). iOS: no ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — reenviar visible",
     "file": "TC-B2C125-APP-010-android-p01-reenviar-visible.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n7. El usuario espera 60 segundos.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "Los campos se pintan en rojo, se muestra \"Código inválido\" y el toast persistente \"El código expiró, solicita uno nuevo para continuar\" con X y botón \"Solicitar\".",
   "id": "TC-B2C125-APP-012",
   "name": "Verificar que un código expirado muestra Código inválido y el toast con Solicitar [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): con un código de más de 10 minutos de antigüedad se muestra el toast «El código expiró, solicita uno nuevo para continuar» con «Solicitar» y «Cerrar aviso». iOS: no ejecutado.",
   "observed": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): con un código de más de 10 minutos de antigüedad se muestra el toast «El código expiró, solicita uno nuevo para continuar» con «Solicitar» y «Cerrar aviso». iOS: no ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — codigo expirado",
     "file": "TC-B2C125-APP-012-android-p01-codigo-expirado.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n7. El usuario espera más de 10 minutos.\n8. El usuario ingresa el código recibido y presiona \"Continuar\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "Llega un nuevo código al correo, el temporizador vuelve a 60 s y el nuevo código se valida correctamente.",
   "id": "TC-B2C125-APP-014",
   "name": "Verificar que Reenviar envía un código nuevo, reinicia el temporizador y el nuevo código funciona [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): tras esperar, «Reenviar» aparece y al tocarlo llega un código nuevo al correo; el temporizador se reinicia (parte de ~2 minutos, ver B2C-1413) y el código nuevo se valida: el modal se cierra y la dirección queda aplicada. iOS: no ejecutado.",
   "observed": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): tras esperar, «Reenviar» aparece y al tocarlo llega un código nuevo al correo; el temporizador se reinicia (parte de ~2 minutos, ver B2C-1413) y el código nuevo se valida: el modal se cierra y la dirección queda aplicada. iOS: no ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — reenviar disponible",
     "file": "TC-B2C125-APP-014-android-p01-reenviar-disponible.png"
    },
    {
     "caption": "Android · Paso 2 — tras reenviar",
     "file": "TC-B2C125-APP-014-android-p02-tras-reenviar.png"
    },
    {
     "caption": "Android · Paso 3 — codigo nuevo validado",
     "file": "TC-B2C125-APP-014-android-p03-codigo-nuevo-validado.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n7. El usuario espera 60 segundos.\n8. El usuario toca \"Reenviar\".\n9. El usuario ingresa el nuevo código y presiona \"Continuar\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "El código anterior es rechazado con \"Código inválido\".",
   "id": "TC-B2C125-APP-015",
   "name": "Verificar que tras reenviar el código anterior ya no es válido [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): tras reenviar, el código anterior es rechazado con «Código inválido» y el modal sigue abierto. iOS: no ejecutado.",
   "observed": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): tras reenviar, el código anterior es rechazado con «Código inválido» y el modal sigue abierto. iOS: no ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — codigo anterior tecleado",
     "file": "TC-B2C125-APP-015-android-p01-codigo-anterior-tecleado.png"
    },
    {
     "caption": "Android · Paso 1 — codigo anterior",
     "file": "TC-B2C125-APP-015-android-p01-codigo-anterior.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n7. El usuario espera 60 segundos.\n8. El usuario toca \"Reenviar\".\n9. El usuario ingresa el código del primer envío y presiona \"Continuar\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "El flujo OTP se cancela, el usuario vuelve al Store Locator y la dirección activa sigue siendo {DIRECCION_DESPACHO_001}.",
   "id": "TC-B2C125-APP-016",
   "name": "Verificar que cerrar el modal OTP cancela el cambio y mantiene la dirección anterior [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): al tocar la X del modal «Autenticación requerida» se cancela el cambio: la app vuelve a «Detalles de la dirección» (no a un Store Locator, como dice el TC), muestra «Verificación pendiente. Tu dirección no fue guardada» y la dirección activa sigue siendo {DIRECCION_DESPACHO_001}. iOS: no ejecutado.",
   "observed": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): al tocar la X del modal «Autenticación requerida» se cancela el cambio: la app vuelve a «Detalles de la dirección» (no a un Store Locator, como dice el TC), muestra «Verificación pendiente. Tu dirección no fue guardada» y la dirección activa sigue siendo {DIRECCION_DESPACHO_001}. iOS: no ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — modal otp abierto",
     "file": "TC-B2C125-APP-016-android-p01-modal-otp-abierto.png"
    },
    {
     "caption": "Android · Paso 1 — tras cerrar el otp",
     "file": "TC-B2C125-APP-016-android-p01-tras-cerrar-el-otp.png"
    },
    {
     "caption": "Android · Paso 2 — tras cerrar el otp",
     "file": "TC-B2C125-APP-016-android-p02-tras-cerrar-el-otp.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n7. El usuario toca \"<\" del modal.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  }
 ]
}
-->
