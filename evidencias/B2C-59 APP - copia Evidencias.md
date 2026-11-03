# B2C-59 APP (copia de prueba) - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-59 APP - copia |
| Última actualización | 2026-10-18 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | App Unimarc v1.0.7 (com.smuapp.unimarc) contra DEV |
| Dispositivo Android | Medium Phone 36.1 (emulador) · Android 16 (mobilecli) |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-59 APP Test Cases - copia.xlsx |
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
| 2026-10-18 | 2 | TC-B2C59-APP-004, TC-B2C59-APP-005 |

## Detalle por caso de prueba

### TC-B2C59-APP-004 - Verificar que un producto patrocinado muestra "Patrocinado" bajo el nombre [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-18 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone 36.1 (emulador) · Android 16 (mobilecli) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Resultados de búsqueda
- {SKU_PATROCINADO} tiene isSponsored = true
- Plataforma: Android

**Data utilizada**

{APP_BUILD} = v1.0.7

{SKU_PATROCINADO} = 000000000000642688-UN

{ANDROID_PACKAGE} = com.smuapp.unimarc

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El usuario busca 000000000000642688-UN y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de 000000000000642688-UN.

**Resultado esperado**

Debajo del nombre del producto se muestra el texto "Patrocinado".

**Resultado obtenido**

No se pudo certificar: el producto declarado como patrocinado no muestra "Patrocinado" en la app.

**Observación**

Causa: el SKU declarado {SKU_PATROCINADO} (000000000000642688-UN, Oreo) no muestra "Patrocinado" en la app y el escenario isSponsored = true no tiene fixture en este ambiente (el shelf web tampoco muestra "Patrocinado" en ningún producto). Acción: cargar un SKU con isSponsored = true que se vea patrocinado en DEV. Corrida de prueba sobre una copia de la planilla.

**Evidencia**

![Android · Impedimento: el producto declarado como patrocinado no muestra "Patrocinado"](<B2C-59 APP - copia Evidencias/TC-B2C59-APP-004-android.png>)

---

### TC-B2C59-APP-005 - Verificar que un producto no patrocinado no muestra "Patrocinado" [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-18 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone 36.1 (emulador) · Android 16 (mobilecli) |
| Duración | 39.0 s |
| Spec | tests-app/B2C-59.spec.ts:18 |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Resultados de búsqueda
- {SKU_VALID_001} tiene isSponsored = false
- Plataforma: Android

**Data utilizada**

{APP_BUILD} = v1.0.7

{SKU_VALID_001} = 000000000000675191-UN

{ANDROID_PACKAGE} = com.smuapp.unimarc

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El usuario busca 000000000000675191-UN y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de 000000000000675191-UN.

**Resultado esperado**

El shelf no muestra el texto "Patrocinado".

**Resultado obtenido**

Se buscó 000000000000675191-UN: el resultado muestra el shelf del producto y no aparece el texto "Patrocinado".

**Observación**

Corrida de prueba sobre una copia de la planilla: ANDROID_PACKAGE (com.smuapp.unimarc) se pasó por entorno porque el Excel de data no lo tiene.

**Evidencia**

![Android · Paso 1 — app abierta en el home](<B2C-59 APP - copia Evidencias/TC-B2C59-APP-005-android-p01-app-abierta-en-el-home.png>)

![Android · Paso 3 — resultados con el shelf del producto](<B2C-59 APP - copia Evidencias/TC-B2C59-APP-005-android-p03-resultados-con-el-shelf-del-producto.png>)

![Android · Estado final](<B2C-59 APP - copia Evidencias/TC-B2C59-APP-005-android.png>)

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "devices": {
   "android": "Medium Phone 36.1 (emulador) · Android 16 (mobilecli)"
  },
  "environment": "App Unimarc v1.0.7 (com.smuapp.unimarc) contra DEV",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-59 APP - copia",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-59 APP Test Cases - copia.xlsx",
  "title": "B2C-59 APP (copia de prueba) - Evidencias QA",
  "updated_at": "2026-10-18"
 },
 "history": {
  "2026-10-18": [
   "TC-B2C59-APP-004",
   "TC-B2C59-APP-005"
  ]
 },
 "results": [
  {
   "device": "Medium Phone 36.1 (emulador) · Android 16 (mobilecli)",
   "duration_s": 0,
   "executed_at": "2026-10-18",
   "expected": "Debajo del nombre del producto se muestra el texto \"Patrocinado\".",
   "form_factor": "app",
   "id": "TC-B2C59-APP-004",
   "name": "Verificar que un producto patrocinado muestra \"Patrocinado\" bajo el nombre [App] [Guest]",
   "observation": "Causa: el SKU declarado {SKU_PATROCINADO} (000000000000642688-UN, Oreo) no muestra \"Patrocinado\" en la app y el escenario isSponsored = true no tiene fixture en este ambiente (el shelf web tampoco muestra \"Patrocinado\" en ningún producto). Acción: cargar un SKU con isSponsored = true que se vea patrocinado en DEV. Corrida de prueba sobre una copia de la planilla.",
   "observed": "No se pudo certificar: el producto declarado como patrocinado no muestra \"Patrocinado\" en la app.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- {SKU_PATROCINADO} tiene isSponsored = true\n- Plataforma: Android",
   "screenshots": [
    {
     "caption": "Android · Impedimento: el producto declarado como patrocinado no muestra \"Patrocinado\"",
     "file": "TC-B2C59-APP-004-android.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El usuario busca 000000000000642688-UN y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de 000000000000642688-UN.",
   "test_data": "{APP_BUILD} = v1.0.7\n{SKU_PATROCINADO} = 000000000000642688-UN\n{ANDROID_PACKAGE} = com.smuapp.unimarc"
  },
  {
   "device": "Medium Phone 36.1 (emulador) · Android 16 (mobilecli)",
   "duration_s": 39.0,
   "executed_at": "2026-10-18",
   "expected": "El shelf no muestra el texto \"Patrocinado\".",
   "form_factor": "app",
   "id": "TC-B2C59-APP-005",
   "name": "Verificar que un producto no patrocinado no muestra \"Patrocinado\" [App] [Guest]",
   "observation": "Corrida de prueba sobre una copia de la planilla: ANDROID_PACKAGE (com.smuapp.unimarc) se pasó por entorno porque el Excel de data no lo tiene.",
   "observed": "Se buscó 000000000000675191-UN: el resultado muestra el shelf del producto y no aparece el texto \"Patrocinado\".",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- {SKU_VALID_001} tiene isSponsored = false\n- Plataforma: Android",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — app abierta en el home",
     "file": "TC-B2C59-APP-005-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Android · Paso 3 — resultados con el shelf del producto",
     "file": "TC-B2C59-APP-005-android-p03-resultados-con-el-shelf-del-producto.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C59-APP-005-android.png"
    }
   ],
   "spec": "tests-app/B2C-59.spec.ts:18",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El usuario busca 000000000000675191-UN y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de 000000000000675191-UN.",
   "test_data": "{APP_BUILD} = v1.0.7\n{SKU_VALID_001} = 000000000000675191-UN\n{ANDROID_PACKAGE} = com.smuapp.unimarc"
  }
 ]
}
-->
