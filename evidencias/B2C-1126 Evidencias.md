# B2C-1126 - Re-test - El buscador de la TapBar abre la búsqueda con el campo sin foco (TC-B2C22-APP-013) - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-1126 |
| Última actualización | 2026-11-13 |
| Ejecutado por | Victor Chirinos |
| Ambiente | App Unimarc (DEV) · cl.smu.unimarcapp.sfcc.qa |
| Dispositivo Android | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (actualizada 11-11-2026) |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP1/Pendiente iOS/B2C-22 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 2 |
| **Total** | **2** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-13 | 2 | B2C-1126, TC-B2C22-APP-013 |

## Detalle por caso de prueba

### B2C-1126 - [B2C-22] El buscador de la TapBar abre la búsqueda con el campo sin foco (TC-B2C22-APP-013)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (actualizada 11-11-2026) |

**Pasos ejecutados**

1. Abrir la app como invitado y quedarse en el Home.
2. Tocar el buscador de la TapBar (tab 'Buscar').

**Resultado esperado**

Se abre la pantalla de busqueda con el campo de ingreso activo; la barra del buscador muestra el icono de lupa en estado activo mientras el usuario esta en busqueda o en la SRP.

**Resultado obtenido**

Como invitado, al tocar «Buscar» en la TapBar se abre la búsqueda con el campo «¿Qué estás buscando?» enfocado y el teclado abierto; la lupa del tab queda activa en rojo. Corrida automatizada y repetición manual.

**Evidencia**

![Paso 1 — busqueda](<B2C-1126 Evidencias/B2C-1126-p01-busqueda.png>)

---

### TC-B2C22-APP-013 - Tap en el buscador del TapBar abre la pantalla de busqueda con el campo activo

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (actualizada 11-11-2026) |
| Spec | tests-app/B2C-22.spec.ts:216 |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: cualquier seccion

**Data utilizada**

- {APP_BUILD} = build de la app (placeholder, pendiente de environment)

**Pasos ejecutados**

1. Ubicarse en cualquier seccion del sitio.
2. Presionar sobre el buscador del TapBar.
3. Verificar la apertura de la pantalla de busqueda y el estado del campo.
4. Verificar el icono de la barra durante la busqueda/SRP.

**Resultado esperado**

Se abre la pantalla de busqueda con el campo de ingreso activo; la barra del buscador muestra el icono de lupa en estado activo mientras el usuario esta en busqueda o en la SRP.

**Resultado obtenido**

La pantalla de búsqueda se abre con el campo activo y la lupa del TapBar activa.

**Evidencia**

![Android · Paso 3 — pantalla de busqueda](<B2C-1126 Evidencias/TC-B2C22-APP-013-android-p03-pantalla-de-busqueda.png>)

![Android · Paso 4 — lupa de la tapbar](<B2C-1126 Evidencias/TC-B2C22-APP-013-android-p04-lupa-de-la-tapbar.png>)

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
  "suite": "B2C-1126",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP1/Pendiente iOS/B2C-22 APP Test Cases.xlsx",
  "title": "B2C-1126 - Re-test - El buscador de la TapBar abre la búsqueda con el campo sin foco (TC-B2C22-APP-013) - Evidencias QA",
  "updated_at": "2026-11-13"
 },
 "history": {
  "2026-11-13": [
   "B2C-1126",
   "TC-B2C22-APP-013"
  ]
 },
 "results": [
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (actualizada 11-11-2026)",
   "executed_at": "2026-11-13",
   "expected": "Se abre la pantalla de busqueda con el campo de ingreso activo; la barra del buscador muestra el icono de lupa en estado activo mientras el usuario esta en busqueda o en la SRP.",
   "form_factor": "app",
   "id": "B2C-1126",
   "name": "[B2C-22] El buscador de la TapBar abre la búsqueda con el campo sin foco (TC-B2C22-APP-013)",
   "observed": "Como invitado, al tocar «Buscar» en la TapBar se abre la búsqueda con el campo «¿Qué estás buscando?» enfocado y el teclado abierto; la lupa del tab queda activa en rojo. Corrida automatizada y repetición manual.",
   "platform": "Android",
   "screenshots": [
    {
     "caption": "Paso 1 — busqueda",
     "file": "B2C-1126-p01-busqueda.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Abrir la app como invitado y quedarse en el Home.\n2. Tocar el buscador de la TapBar (tab 'Buscar')."
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (actualizada 11-11-2026)",
   "executed_at": "2026-11-13",
   "expected": "Se abre la pantalla de busqueda con el campo de ingreso activo; la barra del buscador muestra el icono de lupa en estado activo mientras el usuario esta en busqueda o en la SRP.",
   "form_factor": "app",
   "id": "TC-B2C22-APP-013",
   "name": "Tap en el buscador del TapBar abre la pantalla de busqueda con el campo activo",
   "observed": "La pantalla de búsqueda se abre con el campo activo y la lupa del TapBar activa.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: cualquier seccion",
   "screenshots": [
    {
     "caption": "Android · Paso 3 — pantalla de busqueda",
     "file": "TC-B2C22-APP-013-android-p03-pantalla-de-busqueda.png"
    },
    {
     "caption": "Android · Paso 4 — lupa de la tapbar",
     "file": "TC-B2C22-APP-013-android-p04-lupa-de-la-tapbar.png"
    }
   ],
   "spec": "tests-app/B2C-22.spec.ts:216",
   "status": "Aprobado",
   "steps": "1. Ubicarse en cualquier seccion del sitio.\n2. Presionar sobre el buscador del TapBar.\n3. Verificar la apertura de la pantalla de busqueda y el estado del campo.\n4. Verificar el icono de la barra durante la busqueda/SRP.",
   "test_data": "- {APP_BUILD} = build de la app (placeholder, pendiente de environment)"
  }
 ]
}
-->
