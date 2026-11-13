# B2C-783 - Re-test - El Collage de Banners no muestra el estado "imagen no disponible" cuando falla la carga de un banner - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-783 |
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
| Aprobado | 2 |
| **Total** | **2** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-13 | 2 | B2C-783, TC-B2C83-D-009 |

## Detalle por caso de prueba

### B2C-783 - [B2C-83] El Collage de Banners no muestra el estado "imagen no disponible" cuando falla la carga de un banner

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Pasos ejecutados**

1. Abrir el Home del storefront en Desktop 1440x900.
2. Cortar la petición de la imagen del banner del Collage de Banners variante T1 (se verifica que no cargó).
3. Observar el banner afectado durante 20 segundos.

**Resultado esperado**

el banner con la imagen rota muestra el estado "imagen no disponible", y el resto del collage se muestra y funciona con normalidad.

**Resultado obtenido**

Con la imagen del banner T1 (cob-banner-1.png) bloqueada, el banner muestra "Imagen no disponible" a los 3 y a los 8 segundos y conserva su espacio (1425x250); el collage T6 carga sus 5 banners con normalidad.

**Evidencia**

![Paso 1 — banner caido](<B2C-783 Evidencias/B2C-783-p01-banner-caido.png>)

![Estado final](<B2C-783 Evidencias/B2C-783.png>)

---

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

![Paso 1 — banner caido](<B2C-783 Evidencias/B2C-783-p01-banner-caido.png>)

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
  "suite": "B2C-783",
  "tc_file": "Casos de Prueba/Ejecutados/SP1/B2C-83 Test Cases.xlsx",
  "title": "B2C-783 - Re-test - El Collage de Banners no muestra el estado \"imagen no disponible\" cuando falla la carga de un banner - Evidencias QA",
  "updated_at": "2026-11-13"
 },
 "history": {
  "2026-11-13": [
   "B2C-783",
   "TC-B2C83-D-009"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-11-13",
   "expected": "el banner con la imagen rota muestra el estado \"imagen no disponible\", y el resto del collage se muestra y funciona con normalidad.",
   "form_factor": "desktop",
   "id": "B2C-783",
   "name": "[B2C-83] El Collage de Banners no muestra el estado \"imagen no disponible\" cuando falla la carga de un banner",
   "observed": "Con la imagen del banner T1 (cob-banner-1.png) bloqueada, el banner muestra \"Imagen no disponible\" a los 3 y a los 8 segundos y conserva su espacio (1425x250); el collage T6 carga sus 5 banners con normalidad.",
   "screenshots": [
    {
     "caption": "Paso 1 — banner caido",
     "file": "B2C-783-p01-banner-caido.png"
    },
    {
     "caption": "Estado final",
     "file": "B2C-783.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Abrir el Home del storefront en Desktop 1440x900.\n2. Cortar la petición de la imagen del banner del Collage de Banners variante T1 (se verifica que no cargó).\n3. Observar el banner afectado durante 20 segundos.",
   "viewport": "1440x900"
  },
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
