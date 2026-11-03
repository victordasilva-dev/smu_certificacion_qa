# B2C-144 APP

| Campo | Valor |
|---|---|
| Suite | B2C-144 |
| Última actualización | 2026-10-27 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | App Unimarc v1.0.1 (DEV) |
| Dispositivo Android | Pixel 6 · Android 14 (emulador) |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-144 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 1 |
| Bloqueado Data | 1 |
| **Total** | **2** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-27 | 2 | TC-B2C144-APP-015, TC-B2C144-APP-027 |

## Detalle por caso de prueba

### TC-B2C144-APP-015 - Verificar que un cliente con membresía ve el chip Gratis con su ícono en el navbar

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | tests-app/B2C-144-123-pendientes.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+noaddress@avatar-global.com
- Despacho a Calle Uno 23, La Florida
- La cuenta tiene membresía Unimarc activa

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- Calle Uno 23, La Florida = Casa
- daunuruco+noaddress@avatar-global.com = 10.101.010-4

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario revisa el Store Locator del navbar.

**Resultado esperado**

El chip muestra "Gratis" verde plain, visualmente distinto al "Gratis" por umbral de monto.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: la cuenta {SIN_DIRECCION_USER} (daunuruco+noaddress) no tiene membresía Unimarc activa: Mi cuenta la muestra como «Socio Oro» y ofrece «Contrata tu membresía [Contratar]» (contratarla no está autorizado). Con despacho a Calle Uno 23, La Florida (guardada en esta ejecución con autorización del usuario) el navbar muestra «Desde: Hoy 27/10, 15:00 hrs.» con el chip amarillo «$2.990», que es lo que corresponde a un cliente sin membresía; no se puede verificar el chip «Gratis» verde. Acción: declarar una cuenta con membresía vigente y la dirección Calle Uno 23 activa. Nota: la dirección quedó como dirección de despacho activa de la cuenta y la app no permite quitarla.

**Evidencia**

![Android · Paso 2 — home con despacho a calle uno 23](<B2C-144 Evidencias/TC-B2C144-APP-015-android-p02-home-con-despacho-a-calle-uno-23.png>)

![Android · Paso 4 — mi cuenta sin membresia](<B2C-144 Evidencias/TC-B2C144-APP-015-android-p04-mi-cuenta-sin-membresia.png>)

![Android · Estado final](<B2C-144 Evidencias/TC-B2C144-APP-015-android.png>)

---

### TC-B2C144-APP-027 - Verificar que al iniciar sesión en una cuenta sin direcciones se ve Elige una forma de entrega

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | tests-app/B2C-144-123-pendientes.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión de invitado sin dirección seteada
- La cuenta daunuruco+noaddress@avatar-global.com no tiene direcciones guardadas

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- daunuruco+noaddress@avatar-global.com = 10.101.010-4

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario inicia sesión con la cuenta daunuruco+noaddress@avatar-global.com.
3. El usuario revisa el navbar.

**Resultado esperado**

El Store Locator permanece vacío y muestra "Elige una forma de entrega" (B2C-138). Al revisar las solicitudes de red o los logs de integración, no se registra ninguna llamada a GetShippingSimulationsFromJanis.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): con la cuenta sin direcciones, tras iniciar sesión desde invitado sin dirección, el navbar de la Home sigue mostrando «Elige una forma de entrega» (capturas de la Home del invitado y de la cuenta con sesión). Nota: la segunda parte del resultado esperado —que no se registre ninguna llamada a GetShippingSimulationsFromJanis— no se verificó porque no hay proxy ni logs de red disponibles ({HERRAMIENTA_PROXY_APP} sin valor); se da por aprobado a pedido del usuario.

**Evidencia**

![Android · Paso 2 — home del invitado sin direccion](<B2C-144 Evidencias/TC-B2C144-APP-027-android-p02-home-del-invitado-sin-direccion.png>)

![Android · Paso 4 — home tras iniciar sesion con la cuenta sin direcciones](<B2C-144 Evidencias/TC-B2C144-APP-027-android-p04-home-tras-iniciar-sesion-con-la-cuenta-sin-direcciones.png>)

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "devices": {
   "android": "Pixel 6 · Android 14 (emulador)"
  },
  "environment": "App Unimarc v1.0.1 (DEV)",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-144",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-144 APP Test Cases.xlsx",
  "title": "B2C-144 APP",
  "updated_at": "2026-10-27"
 },
 "history": {
  "2026-10-27": [
   "TC-B2C144-APP-015",
   "TC-B2C144-APP-027"
  ]
 },
 "results": [
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "El chip muestra \"Gratis\" verde plain, visualmente distinto al \"Gratis\" por umbral de monto.",
   "form_factor": "app",
   "id": "TC-B2C144-APP-015",
   "name": "Verificar que un cliente con membresía ve el chip Gratis con su ícono en el navbar",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: la cuenta {SIN_DIRECCION_USER} (daunuruco+noaddress) no tiene membresía Unimarc activa: Mi cuenta la muestra como «Socio Oro» y ofrece «Contrata tu membresía [Contratar]» (contratarla no está autorizado). Con despacho a Calle Uno 23, La Florida (guardada en esta ejecución con autorización del usuario) el navbar muestra «Desde: Hoy 27/10, 15:00 hrs.» con el chip amarillo «$2.990», que es lo que corresponde a un cliente sin membresía; no se puede verificar el chip «Gratis» verde. Acción: declarar una cuenta con membresía vigente y la dirección Calle Uno 23 activa. Nota: la dirección quedó como dirección de despacho activa de la cuenta y la app no permite quitarla.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+noaddress@avatar-global.com\n- Despacho a Calle Uno 23, La Florida\n- La cuenta tiene membresía Unimarc activa",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home con despacho a calle uno 23",
     "file": "TC-B2C144-APP-015-android-p02-home-con-despacho-a-calle-uno-23.png"
    },
    {
     "caption": "Android · Paso 4 — mi cuenta sin membresia",
     "file": "TC-B2C144-APP-015-android-p04-mi-cuenta-sin-membresia.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C144-APP-015-android.png"
    }
   ],
   "spec": "tests-app/B2C-144-123-pendientes.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario revisa el Store Locator del navbar.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- Calle Uno 23, La Florida = Casa\n- daunuruco+noaddress@avatar-global.com = 10.101.010-4"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "El Store Locator permanece vacío y muestra \"Elige una forma de entrega\" (B2C-138). Al revisar las solicitudes de red o los logs de integración, no se registra ninguna llamada a GetShippingSimulationsFromJanis.",
   "form_factor": "app",
   "id": "TC-B2C144-APP-027",
   "name": "Verificar que al iniciar sesión en una cuenta sin direcciones se ve Elige una forma de entrega",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): con la cuenta sin direcciones, tras iniciar sesión desde invitado sin dirección, el navbar de la Home sigue mostrando «Elige una forma de entrega» (capturas de la Home del invitado y de la cuenta con sesión). Nota: la segunda parte del resultado esperado —que no se registre ninguna llamada a GetShippingSimulationsFromJanis— no se verificó porque no hay proxy ni logs de red disponibles ({HERRAMIENTA_PROXY_APP} sin valor); se da por aprobado a pedido del usuario.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión de invitado sin dirección seteada\n- La cuenta daunuruco+noaddress@avatar-global.com no tiene direcciones guardadas",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home del invitado sin direccion",
     "file": "TC-B2C144-APP-027-android-p02-home-del-invitado-sin-direccion.png"
    },
    {
     "caption": "Android · Paso 4 — home tras iniciar sesion con la cuenta sin direcciones",
     "file": "TC-B2C144-APP-027-android-p04-home-tras-iniciar-sesion-con-la-cuenta-sin-direcciones.png"
    }
   ],
   "spec": "tests-app/B2C-144-123-pendientes.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario inicia sesión con la cuenta daunuruco+noaddress@avatar-global.com.\n3. El usuario revisa el navbar.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- daunuruco+noaddress@avatar-global.com = 10.101.010-4"
  }
 ]
}
-->
