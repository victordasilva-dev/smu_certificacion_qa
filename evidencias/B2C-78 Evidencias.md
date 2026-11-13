# B2C-78 - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-78 |
| Última actualización | 2026-11-13 |
| Ejecutado por | Victor Chirinos |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | webkit |
| Origen de los TC | Casos de Prueba/Ejecutados/SP1/B2C-78 Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 1 |
| **Total** | **1** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-13 | 1 | TC-B2C78-D-012 |

## Detalle por caso de prueba

### TC-B2C78-D-012 - Error en la carga de una imagen (logo, fondo o badge) muestra estado 'imagen no disponible'

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Required data state: un elemento del componente (logo, imagen de fondo o badge) con imagen invalida o rota

**Data utilizada**

- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)
- {MODULO_BOMBA} = Nombre de modulo bomba configurado

**Pasos ejecutados**

1. Configurar (o identificar) un elemento del componente con imagen rota.
2. Navegar a la pagina con el componente visible.
3. Verificar el estado visual del elemento afectado y del resto del componente.

**Resultado esperado**

El elemento con imagen rota muestra un estado de 'imagen no disponible'; el resto del componente se muestra y funciona con normalidad.

**Resultado obtenido**

El logo caído muestra el estado "Imagen no disponible" y el resto del componente funciona con normalidad.

**Observación**

El test() de la suite no logra cortar la imagen del logo; se condujo con el CLI.

**Evidencia**

![Paso 1 — logo caido](<B2C-78 Evidencias/B2C-1143-p01-logo-caido.png>)

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
  "executed_by": "Victor Chirinos",
  "suite": "B2C-78",
  "tc_file": "Casos de Prueba/Ejecutados/SP1/B2C-78 Test Cases.xlsx",
  "title": "B2C-78 - Evidencias QA",
  "updated_at": "2026-11-13"
 },
 "history": {
  "2026-11-13": [
   "TC-B2C78-D-012"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-11-13",
   "expected": "El elemento con imagen rota muestra un estado de 'imagen no disponible'; el resto del componente se muestra y funciona con normalidad.",
   "form_factor": "desktop",
   "id": "TC-B2C78-D-012",
   "name": "Error en la carga de una imagen (logo, fondo o badge) muestra estado 'imagen no disponible'",
   "observation": "El test() de la suite no logra cortar la imagen del logo; se condujo con el CLI.",
   "observed": "El logo caído muestra el estado \"Imagen no disponible\" y el resto del componente funciona con normalidad.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Required data state: un elemento del componente (logo, imagen de fondo o badge) con imagen invalida o rota",
   "screenshots": [
    {
     "caption": "Paso 1 — logo caido",
     "file": "B2C-1143-p01-logo-caido.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Configurar (o identificar) un elemento del componente con imagen rota.\n2. Navegar a la pagina con el componente visible.\n3. Verificar el estado visual del elemento afectado y del resto del componente.",
   "test_data": "- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)\n- {MODULO_BOMBA} = Nombre de modulo bomba configurado",
   "viewport": "1440x900"
  }
 ]
}
-->
