# B2C-1364 - Re-test - Al agregar desde el shelf de la búsqueda no se muestra el toast «Agrega 1 y ahorra más» con la barra de progreso (TC-B2C63-APP-007) - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-1364 |
| Última actualización | 2026-11-13 |
| Ejecutado por | Victor Chirinos |
| Ambiente | App Unimarc (DEV) · cl.smu.unimarcapp.sfcc.qa |
| Dispositivo Android | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (actualizada 11-11-2026) |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/Pendiente IOS/B2C-63 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Rechazado | 2 |
| **Total** | **2** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-13 | 2 | B2C-1364, TC-B2C63-APP-007 |

## Detalle por caso de prueba

### B2C-1364 - [B2C-63] Al agregar desde el shelf de la búsqueda no se muestra el toast «Agrega 1 y ahorra más» con la barra de progreso (TC-B2C63-APP-007)

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-13 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (actualizada 11-11-2026) |

**Pasos ejecutados**

1. Iniciar sesión en la App con la cuenta de prueba y abrir el tab Buscar.
2. Buscar 000000000664214001-UN (Papas fritas Lay's artesanas, promo 2×1 a $2.550) y tocar «Buscar» en el teclado.
3. Tocar «Agregar» en el shelf del producto.

**Resultado esperado**

Tras agregar la unidad desde el shelf se muestra el toast «Agrega 1 y ahorra más» con la barra de progreso en 1 de 2.

**Resultado obtenido**

Con la cuenta compradora logueada, al tocar «Agregar» en el shelf de 000000000664214001-UN (Lay's artesanas, 2×1 a $2.550) la unidad se agrega (En carro 1 un.) pero no aparece el toast «Agrega 1 y ahorra más» ni la barra de progreso 1 de 2. Ahora aparece un tooltip «Te falta 1 para la promo» sobre la imagen, sin barra de progreso. 2 de 2 intentos (corrida automatizada y repetición manual).

**Evidencia**

![Paso 3 — tras agregar 2](<B2C-1364 Evidencias/B2C-1364-p03-tras-agregar-2.png>)

![Paso 5 — tras agregar 4](<B2C-1364 Evidencias/B2C-1364-p05-tras-agregar-4.png>)

---

### TC-B2C63-APP-007 - Verificar que un usuario logueado ve el toast al agregar desde el shelf [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-13 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (actualizada 11-11-2026) |
| Spec | tests-app/B2C-63-50-pendientes.spec.ts:33 |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Resultados de búsqueda
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)
- {SKU_COMPLETA_PROMO_2X1} tiene una promo "Completa la promo" 2x1 vigente (mismo SKU, sin código especial)

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_COMPLETA_PROMO_2X1} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com / Avatar1234.

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_COMPLETA_PROMO_2X1} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_COMPLETA_PROMO_2X1}.
4. El usuario toca "Agregar" en el shelf.
5. El sistema agrega la unidad y muestra el toast "Agrega 1 y ahorra más" con la barra de progreso en 1 de 2.

**Resultado esperado**

Se muestra el toast "Agrega 1 y ahorra más" con la barra de progreso.

**Resultado obtenido**

Se agrega la unidad, pero en lugar del toast «Agrega 1 y ahorra más» con barra de progreso aparece un tooltip «Te falta 1 para la promo» sin barra.

**Evidencia**

![Android · Paso 2 — shelf de 000000000664214001 un en los resultados](<B2C-1364 Evidencias/TC-B2C63-APP-007-android-p02-shelf-de-000000000664214001-un-en-los-resultados.png>)

![Android · Paso 6 — shelf tras agregar](<B2C-1364 Evidencias/TC-B2C63-APP-007-android-p06-shelf-tras-agregar.png>)

![Paso 3 — tras agregar 2](<B2C-1364 Evidencias/B2C-1364-p03-tras-agregar-2.png>)

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
  "suite": "B2C-1364",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/Pendiente IOS/B2C-63 APP Test Cases.xlsx",
  "title": "B2C-1364 - Re-test - Al agregar desde el shelf de la búsqueda no se muestra el toast «Agrega 1 y ahorra más» con la barra de progreso (TC-B2C63-APP-007) - Evidencias QA",
  "updated_at": "2026-11-13"
 },
 "history": {
  "2026-11-13": [
   "B2C-1364",
   "TC-B2C63-APP-007"
  ]
 },
 "results": [
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (actualizada 11-11-2026)",
   "executed_at": "2026-11-13",
   "expected": "Tras agregar la unidad desde el shelf se muestra el toast «Agrega 1 y ahorra más» con la barra de progreso en 1 de 2.",
   "form_factor": "app",
   "id": "B2C-1364",
   "name": "[B2C-63] Al agregar desde el shelf de la búsqueda no se muestra el toast «Agrega 1 y ahorra más» con la barra de progreso (TC-B2C63-APP-007)",
   "observed": "Con la cuenta compradora logueada, al tocar «Agregar» en el shelf de 000000000664214001-UN (Lay's artesanas, 2×1 a $2.550) la unidad se agrega (En carro 1 un.) pero no aparece el toast «Agrega 1 y ahorra más» ni la barra de progreso 1 de 2. Ahora aparece un tooltip «Te falta 1 para la promo» sobre la imagen, sin barra de progreso. 2 de 2 intentos (corrida automatizada y repetición manual).",
   "platform": "Android",
   "screenshots": [
    {
     "caption": "Paso 3 — tras agregar 2",
     "file": "B2C-1364-p03-tras-agregar-2.png"
    },
    {
     "caption": "Paso 5 — tras agregar 4",
     "file": "B2C-1364-p05-tras-agregar-4.png"
    }
   ],
   "status": "Rechazado",
   "steps": "1. Iniciar sesión en la App con la cuenta de prueba y abrir el tab Buscar.\n2. Buscar 000000000664214001-UN (Papas fritas Lay's artesanas, promo 2×1 a $2.550) y tocar «Buscar» en el teclado.\n3. Tocar «Agregar» en el shelf del producto."
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (actualizada 11-11-2026)",
   "executed_at": "2026-11-13",
   "expected": "Se muestra el toast \"Agrega 1 y ahorra más\" con la barra de progreso.",
   "form_factor": "app",
   "id": "TC-B2C63-APP-007",
   "name": "Verificar que un usuario logueado ve el toast al agregar desde el shelf [App] [Logueado]",
   "observed": "Se agrega la unidad, pero en lugar del toast «Agrega 1 y ahorra más» con barra de progreso aparece un tooltip «Te falta 1 para la promo» sin barra.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)\n- {SKU_COMPLETA_PROMO_2X1} tiene una promo \"Completa la promo\" 2x1 vigente (mismo SKU, sin código especial)",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — shelf de 000000000664214001 un en los resultados",
     "file": "TC-B2C63-APP-007-android-p02-shelf-de-000000000664214001-un-en-los-resultados.png"
    },
    {
     "caption": "Android · Paso 6 — shelf tras agregar",
     "file": "TC-B2C63-APP-007-android-p06-shelf-tras-agregar.png"
    },
    {
     "caption": "Paso 3 — tras agregar 2",
     "file": "B2C-1364-p03-tras-agregar-2.png"
    }
   ],
   "spec": "tests-app/B2C-63-50-pendientes.spec.ts:33",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_COMPLETA_PROMO_2X1} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_COMPLETA_PROMO_2X1}.\n4. El usuario toca \"Agregar\" en el shelf.\n5. El sistema agrega la unidad y muestra el toast \"Agrega 1 y ahorra más\" con la barra de progreso en 1 de 2.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_COMPLETA_PROMO_2X1} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com / Avatar1234."
  }
 ]
}
-->
