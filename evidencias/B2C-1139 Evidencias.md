# B2C-1139 - Re-test - En Mobile la píldora "Todo" de una PLP N2 no vuelve a la PLP N1 padre (TC-B2C35-M-011) - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-1139 |
| Última actualización | 2026-11-13 |
| Ejecutado por | Victor Chirinos |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | webkit |
| Origen de los TC | Casos de Prueba/Ejecutados/SP1/B2C-35 Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 2 |
| **Total** | **2** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-13 | 2 | B2C-1139, TC-B2C35-M-011 |

## Detalle por caso de prueba

### B2C-1139 - [B2C-35] En Mobile la píldora "Todo" de una PLP N2 no vuelve a la PLP N1 padre (TC-B2C35-M-011)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Pasos ejecutados**

1. En Mobile 390x844, ingresar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_cerdo (N2 Cerdo, hija de la N1 Carnes).
2. Tocar la píldora "Todo" (la primera de la fila, que aparece seleccionada).

**Resultado esperado**

Se muestra la PLP N1 padre (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes).

**Resultado obtenido**

En /category/carnes_cerdo, tocar "Todo" lleva a /category/carnes (PLP N1 Carnes, 72 productos). 2 de 2 intentos.

**Evidencia**

![Paso 1 — tras todo](<B2C-1139 Evidencias/B2C-1139-p01-tras-todo.png>)

![Estado final](<B2C-1139 Evidencias/B2C-1139.png>)

---

### TC-B2C35-M-011 - Verificar que la píldora "Todas" de la PLP N2 vuelve a la PLP N1 padre [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | tests/B2C-35.spec.ts:800 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: PLP N2
- {CATEGORY_N1_URL} es la categoría padre de {CATEGORY_N2_URL}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CATEGORY_N2_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_cerdo
- {CATEGORY_N1_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes

**Pasos ejecutados**

1. El usuario ingresa a {CATEGORY_N2_URL}.
2. El sistema carga la PLP N2 con el listado de productos.
3. El usuario toca la píldora "Todas".
4. El sistema navega a la PLP N1 padre.

**Resultado esperado**

Se muestra la PLP N1 padre ({CATEGORY_N1_URL}).

**Resultado obtenido**

La píldora "Todo" de la PLP N2 lleva a la PLP N1 padre.

**Evidencia**

![Paso 2 — plp n2](<B2C-1139 Evidencias/TC-B2C35-M-011-p02-plp-n2.png>)

![Paso 4 — plp n1 padre](<B2C-1139 Evidencias/TC-B2C35-M-011-p04-plp-n1-padre.png>)

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
  "suite": "B2C-1139",
  "tc_file": "Casos de Prueba/Ejecutados/SP1/B2C-35 Test Cases.xlsx",
  "title": "B2C-1139 - Re-test - En Mobile la píldora \"Todo\" de una PLP N2 no vuelve a la PLP N1 padre (TC-B2C35-M-011) - Evidencias QA",
  "updated_at": "2026-11-13"
 },
 "history": {
  "2026-11-13": [
   "B2C-1139",
   "TC-B2C35-M-011"
  ]
 },
 "results": [
  {
   "browser": "webkit",
   "executed_at": "2026-11-13",
   "expected": "Se muestra la PLP N1 padre (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes).",
   "form_factor": "mobile",
   "id": "B2C-1139",
   "name": "[B2C-35] En Mobile la píldora \"Todo\" de una PLP N2 no vuelve a la PLP N1 padre (TC-B2C35-M-011)",
   "observed": "En /category/carnes_cerdo, tocar \"Todo\" lleva a /category/carnes (PLP N1 Carnes, 72 productos). 2 de 2 intentos.",
   "screenshots": [
    {
     "caption": "Paso 1 — tras todo",
     "file": "B2C-1139-p01-tras-todo.png"
    },
    {
     "caption": "Estado final",
     "file": "B2C-1139.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. En Mobile 390x844, ingresar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_cerdo (N2 Cerdo, hija de la N1 Carnes).\n2. Tocar la píldora \"Todo\" (la primera de la fila, que aparece seleccionada).",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-13",
   "expected": "Se muestra la PLP N1 padre ({CATEGORY_N1_URL}).",
   "form_factor": "mobile",
   "id": "TC-B2C35-M-011",
   "name": "Verificar que la píldora \"Todas\" de la PLP N2 vuelve a la PLP N1 padre [Mobile] [Guest]",
   "observed": "La píldora \"Todo\" de la PLP N2 lleva a la PLP N1 padre.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: PLP N2\n- {CATEGORY_N1_URL} es la categoría padre de {CATEGORY_N2_URL}",
   "screenshots": [
    {
     "caption": "Paso 2 — plp n2",
     "file": "TC-B2C35-M-011-p02-plp-n2.png"
    },
    {
     "caption": "Paso 4 — plp n1 padre",
     "file": "TC-B2C35-M-011-p04-plp-n1-padre.png"
    }
   ],
   "spec": "tests/B2C-35.spec.ts:800",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CATEGORY_N2_URL}.\n2. El sistema carga la PLP N2 con el listado de productos.\n3. El usuario toca la píldora \"Todas\".\n4. El sistema navega a la PLP N1 padre.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CATEGORY_N2_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_cerdo\n- {CATEGORY_N1_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes",
   "viewport": "390x844"
  }
 ]
}
-->
