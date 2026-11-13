# B2C-1128 - Re-test - El carrusel del Splash cambia de imagen cada ~0,6 s en lugar de cada 1,8 s (TC-B2C67-APP-002) - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-1128 |
| Última actualización | 2026-11-13 |
| Ejecutado por | Victor Chirinos |
| Ambiente | App Unimarc (DEV) · cl.smu.unimarcapp.sfcc.qa |
| Dispositivo Android | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (actualizada 11-11-2026) |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/Pendiente IOS/B2C-67 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Rechazado | 2 |
| **Total** | **2** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-13 | 2 | B2C-1128, TC-B2C67-APP-002 |

## Detalle por caso de prueba

### B2C-1128 - [B2C-67] El carrusel del Splash cambia de imagen cada ~0,6 s en lugar de cada 1,8 s (TC-B2C67-APP-002)

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-13 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (actualizada 11-11-2026) |

**Pasos ejecutados**

1. Cerrar completamente la app.
2. Abrirla desde el icono (cold start) y cronometrar cuánto permanece cada imagen del carrusel del Splash.

**Resultado esperado**

Las imagenes transicionan cada 1.8 segundos con efecto fade; el carrusel puede cortarse antes de completar las 6 imagenes si la app esta lista.

**Resultado obtenido**

Arranque en frío medido 3 veces por cuadros: el carrusel del Splash cambia de imagen a los 1,10 s, 1,37 s y 1,53 s (promedio 1,33 s) en lugar de cada 1,8 s. Mejoró respecto de lo reportado (0,4–1,0 s), pero 2 de 3 mediciones quedan fuera de la tolerancia de ±0,3 s.

**Evidencia**

![Paso 1 — cuadros del splash con su tiempo](<B2C-1128 Evidencias/TC-B2C67-APP-002-android-p01-cuadros-del-splash-con-su-tiempo.png>)

---

### TC-B2C67-APP-002 - Las imagenes del carrusel del Splash transicionan automaticamente con efecto fade cada 1.8 segundos, pudiendo no completar las 6 si la app termina de inicializar antes

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-13 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (actualizada 11-11-2026) |
| Spec | tests-app/B2C-67.spec.ts:68 |

**Precondiciones**

- Plataforma: App iOS/Android

**Data utilizada**

- {IOS_BUNDLE_ID} = bundle id de la app iOS
- {IOS_APP_BUILD} = build de la app iOS (.app del simulador)
- {ANDROID_PACKAGE} = package de la app Android
- {ANDROID_APP_BUILD} = build de la app Android

**Pasos ejecutados**

1. Abrir la app en cold start y cronometrar la transicion entre imagenes del carrusel.
2. Verificar el efecto fade en la transicion.
3. Repetir con una inicializacion rapida y verificar que el carrusel se corte antes de mostrar las 6 imagenes.

**Resultado esperado**

Las imagenes transicionan cada 1.8 segundos con efecto fade; el carrusel puede cortarse antes de completar las 6 imagenes si la app esta lista.

**Resultado obtenido**

Las imágenes transicionan con fade y el carrusel se corta al estar lista la app, pero el intervalo medido fue 1,10 / 1,37 / 1,53 s en lugar de 1,8 s.

**Evidencia**

![Android · Paso 1 — cuadros del splash con su tiempo](<B2C-1128 Evidencias/TC-B2C67-APP-002-android-p01-cuadros-del-splash-con-su-tiempo.png>)

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "devices": {
   "android": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (actualizada 11-11-2026)"
  },
  "environment": "App Unimarc (DEV) · cl.smu.unimarcapp.sfcc.qa",
  "executed_by": "Victor Chirinos",
  "suite": "B2C-1128",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/Pendiente IOS/B2C-67 APP Test Cases.xlsx",
  "title": "B2C-1128 - Re-test - El carrusel del Splash cambia de imagen cada ~0,6 s en lugar de cada 1,8 s (TC-B2C67-APP-002) - Evidencias QA",
  "updated_at": "2026-11-13"
 },
 "history": {
  "2026-11-13": [
   "B2C-1128",
   "TC-B2C67-APP-002"
  ]
 },
 "results": [
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (actualizada 11-11-2026)",
   "executed_at": "2026-11-13",
   "expected": "Las imagenes transicionan cada 1.8 segundos con efecto fade; el carrusel puede cortarse antes de completar las 6 imagenes si la app esta lista.",
   "form_factor": "app",
   "id": "B2C-1128",
   "name": "[B2C-67] El carrusel del Splash cambia de imagen cada ~0,6 s en lugar de cada 1,8 s (TC-B2C67-APP-002)",
   "observed": "Arranque en frío medido 3 veces por cuadros: el carrusel del Splash cambia de imagen a los 1,10 s, 1,37 s y 1,53 s (promedio 1,33 s) en lugar de cada 1,8 s. Mejoró respecto de lo reportado (0,4–1,0 s), pero 2 de 3 mediciones quedan fuera de la tolerancia de ±0,3 s.",
   "platform": "Android",
   "screenshots": [
    {
     "caption": "Paso 1 — cuadros del splash con su tiempo",
     "file": "TC-B2C67-APP-002-android-p01-cuadros-del-splash-con-su-tiempo.png"
    }
   ],
   "status": "Rechazado",
   "steps": "1. Cerrar completamente la app.\n2. Abrirla desde el icono (cold start) y cronometrar cuánto permanece cada imagen del carrusel del Splash."
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (actualizada 11-11-2026)",
   "executed_at": "2026-11-13",
   "expected": "Las imagenes transicionan cada 1.8 segundos con efecto fade; el carrusel puede cortarse antes de completar las 6 imagenes si la app esta lista.",
   "form_factor": "app",
   "id": "TC-B2C67-APP-002",
   "name": "Las imagenes del carrusel del Splash transicionan automaticamente con efecto fade cada 1.8 segundos, pudiendo no completar las 6 si la app termina de inicializar antes",
   "observed": "Las imágenes transicionan con fade y el carrusel se corta al estar lista la app, pero el intervalo medido fue 1,10 / 1,37 / 1,53 s en lugar de 1,8 s.",
   "platform": "Android",
   "preconditions": "- Plataforma: App iOS/Android",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — cuadros del splash con su tiempo",
     "file": "TC-B2C67-APP-002-android-p01-cuadros-del-splash-con-su-tiempo.png"
    }
   ],
   "spec": "tests-app/B2C-67.spec.ts:68",
   "status": "Rechazado",
   "steps": "1. Abrir la app en cold start y cronometrar la transicion entre imagenes del carrusel.\n2. Verificar el efecto fade en la transicion.\n3. Repetir con una inicializacion rapida y verificar que el carrusel se corte antes de mostrar las 6 imagenes.",
   "test_data": "- {IOS_BUNDLE_ID} = bundle id de la app iOS\n- {IOS_APP_BUILD} = build de la app iOS (.app del simulador)\n- {ANDROID_PACKAGE} = package de la app Android\n- {ANDROID_APP_BUILD} = build de la app Android"
  }
 ]
}
-->
