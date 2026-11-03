# Re-ejecución Android de casos con bug (B2C-21 APP)

| Campo | Valor |
|---|---|
| Suite | B2C-21 APP |
| Última actualización | 2026-10-25 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | App Unimarc v1.0.1 (DEV) |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP1/Pendiente iOS/B2C-21 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Rechazado | 1 |
| **Total** | **1** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-25 | 1 | TC-B2C21-APP-002 |

## Detalle por caso de prueba

### TC-B2C21-APP-002 - Apertura del modal de categorias con el icono sandwich del header en APP

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-25 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-21.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: cualquier pantalla

**Data utilizada**

- {APP_BUILD} = build de la app (placeholder, pendiente de environment)

**Pasos ejecutados**

1. Navegar a cualquier pantalla en la APP.
2. Hacer tap en el icono sandwich del header.
3. Verificar la apertura del modal.

**Resultado esperado**

El modal de categorias se despliega mostrando las categorias N1 activas.

**Resultado obtenido**

Android (re-ejecución 25-oct, app v1.0.1, Pixel 6): esperado 'el modal de categorías se despliega al tocar el icono sandwich del header'; obtenido: el header de la Home no tiene icono sandwich (solo Store Locator y accesos Suscríbete/Ofertas/Marketplace/Locales). tests-app/B2C-21.spec.ts:54. Mismo defecto del bug B2C-830 (DESCARTADO). iOS: no se ejecutó; queda Pendiente.

**Observación**

Android (re-ejecución 25-oct, app v1.0.1, Pixel 6): esperado 'el modal de categorías se despliega al tocar el icono sandwich del header'; obtenido: el header de la Home no tiene icono sandwich (solo Store Locator y accesos Suscríbete/Ofertas/Marketplace/Locales). tests-app/B2C-21.spec.ts:54. Mismo defecto del bug B2C-830 (DESCARTADO). iOS: no se ejecutó; queda Pendiente.

**Evidencia**

![Android · Paso 1 — home header sin icono sandwich](<B2C-21 APP Evidencias/TC-B2C21-APP-002-android-p01-home-header-sin-icono-sandwich.png>)

![Android · Estado final](<B2C-21 APP Evidencias/TC-B2C21-APP-002-android.png>)

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "devices": {
   "Android": "Pixel 6 (emulador) · Android 14"
  },
  "environment": "App Unimarc v1.0.1 (DEV)",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-21 APP",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP1/Pendiente iOS/B2C-21 APP Test Cases.xlsx",
  "title": "Re-ejecución Android de casos con bug (B2C-21 APP)",
  "updated_at": "2026-10-25"
 },
 "history": {
  "2026-10-25": [
   "TC-B2C21-APP-002"
  ]
 },
 "results": [
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-25",
   "expected": "El modal de categorias se despliega mostrando las categorias N1 activas.",
   "form_factor": "app",
   "id": "TC-B2C21-APP-002",
   "name": "Apertura del modal de categorias con el icono sandwich del header en APP",
   "observation": "Android (re-ejecución 25-oct, app v1.0.1, Pixel 6): esperado 'el modal de categorías se despliega al tocar el icono sandwich del header'; obtenido: el header de la Home no tiene icono sandwich (solo Store Locator y accesos Suscríbete/Ofertas/Marketplace/Locales). tests-app/B2C-21.spec.ts:54. Mismo defecto del bug B2C-830 (DESCARTADO). iOS: no se ejecutó; queda Pendiente.",
   "observed": "Android (re-ejecución 25-oct, app v1.0.1, Pixel 6): esperado 'el modal de categorías se despliega al tocar el icono sandwich del header'; obtenido: el header de la Home no tiene icono sandwich (solo Store Locator y accesos Suscríbete/Ofertas/Marketplace/Locales). tests-app/B2C-21.spec.ts:54. Mismo defecto del bug B2C-830 (DESCARTADO). iOS: no se ejecutó; queda Pendiente.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: cualquier pantalla",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — home header sin icono sandwich",
     "file": "TC-B2C21-APP-002-android-p01-home-header-sin-icono-sandwich.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C21-APP-002-android.png"
    }
   ],
   "spec": "tests-app/B2C-21.spec.ts",
   "status": "Rechazado",
   "steps": "1. Navegar a cualquier pantalla en la APP.\n2. Hacer tap en el icono sandwich del header.\n3. Verificar la apertura del modal.",
   "test_data": "- {APP_BUILD} = build de la app (placeholder, pendiente de environment)"
  }
 ]
}
-->
