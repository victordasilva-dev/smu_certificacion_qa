# B2C-83 - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-83 |
| Última actualización | 2026-11-13 |
| Ejecutado por | Victor Chirinos |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | webkit |
| Origen de los TC | Casos de Prueba/Ejecutados/SP1/B2C-83 Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 1 |
| **Total** | **1** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-13 | 1 | TC-B2C83-D-009 |

## Detalle por caso de prueba

### TC-B2C83-D-009 - Error en la carga de imagen de un banner muestra estado 'imagen no disponible'

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
- Required data state: un banner del collage con imagen invalida o rota

**Data utilizada**

- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)

**Pasos ejecutados**

1. Configurar un banner con una imagen rota o invalida.
2. Navegar a la pagina que contiene el componente.
3. Verificar el estado visual del banner afectado y del resto del collage.

**Resultado esperado**

El banner con imagen rota muestra el estado 'imagen no disponible'; el resto de los banners del collage se muestran y funcionan con normalidad.

**Resultado obtenido**

El banner con la imagen rota muestra "imagen no disponible" y el resto se muestra con normalidad.

**Observación**

El test() de la suite no ubica el componente T1 (cambió su estructura); se condujo con el CLI.

**Evidencia**

![Paso 1 — banner caido](<B2C-83 Evidencias/B2C-783-p01-banner-caido.png>)

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
  "suite": "B2C-83",
  "tc_file": "Casos de Prueba/Ejecutados/SP1/B2C-83 Test Cases.xlsx",
  "title": "B2C-83 - Evidencias QA",
  "updated_at": "2026-11-13"
 },
 "history": {
  "2026-11-13": [
   "TC-B2C83-D-009"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-11-13",
   "expected": "El banner con imagen rota muestra el estado 'imagen no disponible'; el resto de los banners del collage se muestran y funcionan con normalidad.",
   "form_factor": "desktop",
   "id": "TC-B2C83-D-009",
   "name": "Error en la carga de imagen de un banner muestra estado 'imagen no disponible'",
   "observation": "El test() de la suite no ubica el componente T1 (cambió su estructura); se condujo con el CLI.",
   "observed": "El banner con la imagen rota muestra \"imagen no disponible\" y el resto se muestra con normalidad.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Required data state: un banner del collage con imagen invalida o rota",
   "screenshots": [
    {
     "caption": "Paso 1 — banner caido",
     "file": "B2C-783-p01-banner-caido.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Configurar un banner con una imagen rota o invalida.\n2. Navegar a la pagina que contiene el componente.\n3. Verificar el estado visual del banner afectado y del resto del collage.",
   "test_data": "- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)",
   "viewport": "1440x900"
  }
 ]
}
-->
