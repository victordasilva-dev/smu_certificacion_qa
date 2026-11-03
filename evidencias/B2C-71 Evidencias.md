# Re-ejecución de casos con bug (B2C-71)

| Campo | Valor |
|---|---|
| Suite | B2C-71 |
| Última actualización | 2026-10-23 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | chromium |
| Origen de los TC | Casos de Prueba/Ejecutados/SP1/B2C-71 Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Rechazado | 1 |
| **Total** | **1** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-23 | 1 | TC-B2C71-D-018 |

## Detalle por caso de prueba

### TC-B2C71-D-018 - Estado de carga (overlay) al aplicar filtros

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-23 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-71.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Required data state: uno o mas filtros seleccionados

**Data utilizada**

- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)
- {PLP_URL} = URL de categoría

**Pasos ejecutados**

1. Seleccionar uno o mas filtros.
2. Observar el overlay sobre el listado durante la carga.
3. Esperar a que finalice la carga y verificar el listado y el overlay.

**Resultado esperado**

Se muestra un overlay blanco difuminado sobre el listado mientras carga; al completar, el overlay desaparece y el listado muestra los productos filtrados.

**Resultado obtenido**

Obtenido: al aplicar filtros no se muestra el overlay difuminado de carga sobre el listado. Bug: B2C-779. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir corridas de QA, no por corrección).

**Observación**

Obtenido: al aplicar filtros no se muestra el overlay difuminado de carga sobre el listado. Bug: B2C-779. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir corridas de QA, no por corrección).

**Evidencia**

![Paso 1 — filtro brasil paraguay seleccionado](<B2C-71 Evidencias/TC-B2C71-D-018-p01-filtro-brasil-paraguay-seleccionado.png>)

![Paso 2 — listado durante la carga](<B2C-71 Evidencias/TC-B2C71-D-018-p02-listado-durante-la-carga.png>)

![Paso 3 — listado filtrado sin velo](<B2C-71 Evidencias/TC-B2C71-D-018-p03-listado-filtrado-sin-velo.png>)

---

<!-- qa-evidence-state
{
 "header": {
  "browsers": {
   "desktop": "chromium",
   "mobile": "chromium"
  },
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "environment": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-71",
  "tc_file": "Casos de Prueba/Ejecutados/SP1/B2C-71 Test Cases.xlsx",
  "title": "Re-ejecución de casos con bug (B2C-71)",
  "updated_at": "2026-10-23"
 },
 "history": {
  "2026-10-23": [
   "TC-B2C71-D-018"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-10-23",
   "expected": "Se muestra un overlay blanco difuminado sobre el listado mientras carga; al completar, el overlay desaparece y el listado muestra los productos filtrados.",
   "form_factor": "desktop",
   "id": "TC-B2C71-D-018",
   "name": "Estado de carga (overlay) al aplicar filtros",
   "observation": "Obtenido: al aplicar filtros no se muestra el overlay difuminado de carga sobre el listado. Bug: B2C-779. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir corridas de QA, no por corrección).",
   "observed": "Obtenido: al aplicar filtros no se muestra el overlay difuminado de carga sobre el listado. Bug: B2C-779. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir corridas de QA, no por corrección).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Required data state: uno o mas filtros seleccionados",
   "screenshots": [
    {
     "caption": "Paso 1 — filtro brasil paraguay seleccionado",
     "file": "TC-B2C71-D-018-p01-filtro-brasil-paraguay-seleccionado.png"
    },
    {
     "caption": "Paso 2 — listado durante la carga",
     "file": "TC-B2C71-D-018-p02-listado-durante-la-carga.png"
    },
    {
     "caption": "Paso 3 — listado filtrado sin velo",
     "file": "TC-B2C71-D-018-p03-listado-filtrado-sin-velo.png"
    }
   ],
   "spec": "tests/B2C-71.spec.ts",
   "status": "Rechazado",
   "steps": "1. Seleccionar uno o mas filtros.\n2. Observar el overlay sobre el listado durante la carga.\n3. Esperar a que finalice la carga y verificar el listado y el overlay.",
   "test_data": "- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)\n- {PLP_URL} = URL de categoría",
   "viewport": "1440x900"
  }
 ]
}
-->
