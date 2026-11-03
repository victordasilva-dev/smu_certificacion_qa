# B2C-125 (app Android) - Validación OTP al cambiar la tienda de retiro - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-125 APP |
| Última actualización | 2026-11-03 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Dispositivo Android | dispositivo por ADB |
| Origen de los TC | Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-125 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 2 |
| **Total** | **2** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-03 | 2 | TC-B2C125-APP-018, TC-B2C125-APP-020 |

## Detalle por caso de prueba

### TC-B2C125-APP-018 - Verificar que al confirmar un cambio de tienda de retiro se envía el OTP y se muestra el modal con el toast de envío [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-125.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Retiro en tienda activo en {TIENDA_RETIRO_002}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {USER_AUTH_001}
- {TIENDA_RETIRO_001}
- {TIENDA_RETIRO_002}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario selecciona la tienda {TIENDA_RETIRO_001} y toca "Confirmar tienda".
8. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
9. El usuario revisa la casilla de correo de la cuenta.

**Resultado esperado**

Llega un código OTP al correo registrado de {USER_AUTH_001}; se muestra el modal "Autenticación requerida" con el correo enmascarado y los campos de ingreso, y el toast "El código de verificación ha sido enviado. Revisa tu correo" con X. La tienda aún no queda seteada.

**Observación**

Android (dispositivo por ADB, build v1.0.1): Modal «Autenticación requerida» mostrado; toast de envío: true; correo enmascarado: true; campos de ingreso: 6; código recibido en el correo: true. Retiro activo antes: «Unimarc Los Trapenses, Desde: Hoy 03/11, 12:00 hrs., Gratis». Textos: El código de verificación ha sido enviado. Revisa tu correo | Cerrar aviso | Autenticación requerida | Cerrar | Enviamos un código de verificación al correo dau****@a***.com | Dígito 1 del código | Dígito 2 del código | Dígito 3 del código | Dígito 4 del código | Dígito 5 del código | Dígito 6 del código | ¿No recibiste el código? Reenviar código en 00:51 |

**Evidencia**

![Android · Paso 1 — modal autenticacion requerida](<B2C-125 APP Evidencias/TC-B2C125-APP-018-android-p01-modal-autenticacion-requerida.png>)

---

### TC-B2C125-APP-020 - Verificar que cerrar el modal OTP tras intentar cambiar la tienda de retiro mantiene la tienda anterior [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-125.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Retiro en tienda activo en {TIENDA_RETIRO_002}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {USER_AUTH_001}
- {TIENDA_RETIRO_001}
- {TIENDA_RETIRO_002}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario selecciona la tienda {TIENDA_RETIRO_001} y toca "Confirmar tienda".
8. El sistema envía el código OTP al correo y muestra el modal "Autenticación requerida".
9. El usuario toca "<" del modal.
10. El usuario revisa el Store Locator.

**Resultado esperado**

El flujo OTP se cancela, el usuario vuelve al Store Locator sin cambios y el retiro activo sigue siendo {TIENDA_RETIRO_002}; {TIENDA_RETIRO_001} no queda seteada.

**Observación**

Android (dispositivo por ADB, build v1.0.1): Tras «<» del modal OTP: modal cerrado: true; Store Locator visible: true; retiro activo antes «Unimarc Los Trapenses, Desde: Hoy 03/11, 12:00 hrs., Gratis» y después «Unimarc Los Trapenses, Desde: Hoy 03/11, 12:00 hrs., Gratis». Textos: Desactivado, Escritura con voz de Google | ✕ | ✕ | Elige tu método de entrega | Despacho a domicilio | Despacho a domicilio | Retiro en tienda | Retiro en tienda | Selecciona tu tienda Unimarc | Buscar tienda por dirección, comuna o nombre | Ir al mapa | Ir al mapa | Activar mi ubicación actual | Activar mi ubicación actual.

**Evidencia**

![Android · Paso 1 — tras cerrar el otp](<B2C-125 APP Evidencias/TC-B2C125-APP-020-android-p01-tras-cerrar-el-otp.png>)

![Android · Paso 2 — retiro activo](<B2C-125 APP Evidencias/TC-B2C125-APP-020-android-p02-retiro-activo.png>)

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "devices": {
   "android": "dispositivo por ADB"
  },
  "environment": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-125 APP",
  "tc_file": "Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-125 APP Test Cases.xlsx",
  "title": "B2C-125 (app Android) - Validación OTP al cambiar la tienda de retiro - Evidencias QA",
  "updated_at": "2026-11-03"
 },
 "history": {
  "2026-11-03": [
   "TC-B2C125-APP-018",
   "TC-B2C125-APP-020"
  ]
 },
 "results": [
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Llega un código OTP al correo registrado de {USER_AUTH_001}; se muestra el modal \"Autenticación requerida\" con el correo enmascarado y los campos de ingreso, y el toast \"El código de verificación ha sido enviado. Revisa tu correo\" con X. La tienda aún no queda seteada.",
   "form_factor": "app",
   "id": "TC-B2C125-APP-018",
   "name": "Verificar que al confirmar un cambio de tienda de retiro se envía el OTP y se muestra el modal con el toast de envío [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, build v1.0.1): Modal «Autenticación requerida» mostrado; toast de envío: true; correo enmascarado: true; campos de ingreso: 6; código recibido en el correo: true. Retiro activo antes: «Unimarc Los Trapenses, Desde: Hoy 03/11, 12:00 hrs., Gratis». Textos: El código de verificación ha sido enviado. Revisa tu correo | Cerrar aviso | Autenticación requerida | Cerrar | Enviamos un código de verificación al correo dau****@a***.com | Dígito 1 del código | Dígito 2 del código | Dígito 3 del código | Dígito 4 del código | Dígito 5 del código | Dígito 6 del código | ¿No recibiste el código? Reenviar código en 00:51 | ",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Retiro en tienda activo en {TIENDA_RETIRO_002}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — modal autenticacion requerida",
     "file": "TC-B2C125-APP-018-android-p01-modal-autenticacion-requerida.png"
    }
   ],
   "spec": "tests-app/B2C-125.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario selecciona la tienda {TIENDA_RETIRO_001} y toca \"Confirmar tienda\".\n8. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n9. El usuario revisa la casilla de correo de la cuenta.",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {USER_AUTH_001}\n- {TIENDA_RETIRO_001}\n- {TIENDA_RETIRO_002}"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "El flujo OTP se cancela, el usuario vuelve al Store Locator sin cambios y el retiro activo sigue siendo {TIENDA_RETIRO_002}; {TIENDA_RETIRO_001} no queda seteada.",
   "form_factor": "app",
   "id": "TC-B2C125-APP-020",
   "name": "Verificar que cerrar el modal OTP tras intentar cambiar la tienda de retiro mantiene la tienda anterior [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, build v1.0.1): Tras «<» del modal OTP: modal cerrado: true; Store Locator visible: true; retiro activo antes «Unimarc Los Trapenses, Desde: Hoy 03/11, 12:00 hrs., Gratis» y después «Unimarc Los Trapenses, Desde: Hoy 03/11, 12:00 hrs., Gratis». Textos: Desactivado, Escritura con voz de Google | ✕ | ✕ | Elige tu método de entrega | Despacho a domicilio | Despacho a domicilio | Retiro en tienda | Retiro en tienda | Selecciona tu tienda Unimarc | Buscar tienda por dirección, comuna o nombre | Ir al mapa | Ir al mapa | Activar mi ubicación actual | Activar mi ubicación actual.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Retiro en tienda activo en {TIENDA_RETIRO_002}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — tras cerrar el otp",
     "file": "TC-B2C125-APP-020-android-p01-tras-cerrar-el-otp.png"
    },
    {
     "caption": "Android · Paso 2 — retiro activo",
     "file": "TC-B2C125-APP-020-android-p02-retiro-activo.png"
    }
   ],
   "spec": "tests-app/B2C-125.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario selecciona la tienda {TIENDA_RETIRO_001} y toca \"Confirmar tienda\".\n8. El sistema envía el código OTP al correo y muestra el modal \"Autenticación requerida\".\n9. El usuario toca \"<\" del modal.\n10. El usuario revisa el Store Locator.",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {USER_AUTH_001}\n- {TIENDA_RETIRO_001}\n- {TIENDA_RETIRO_002}"
  }
 ]
}
-->
