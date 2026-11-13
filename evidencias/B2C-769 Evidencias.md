# B2C-769 - Re-test - Un nombre de producto dentro del limite de 60 caracteres tampoco se muestra completo en el shelf (TC-B2C59-D-022) - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-769 |
| Última actualización | 2026-11-13 |
| Ejecutado por | Victor Chirinos |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | webkit |
| Origen de los TC | Casos de Prueba/Ejecutados/SP1/B2C-59 Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 2 |
| **Total** | **2** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-13 | 2 | B2C-769, TC-B2C59-D-022 |

## Detalle por caso de prueba

### B2C-769 - [B2C-59] Un nombre de producto dentro del limite de 60 caracteres tampoco se muestra completo en el shelf (TC-B2C59-D-022)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |

**Pasos ejecutados**

1. Abrir la PLP de categoría https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno en Desktop 1280x900.
2. Ubicar el shelf del producto "Nacional | Abastero vacuno Nacional al vacío 1.8 Kg", cuyo texto de marca + nombre tiene 51 caracteres y por lo tanto respeta el límite de 60.
3. Observar si el nombre se lee completo en la tarjeta.

**Resultado esperado**

El texto se muestra completo (marca + '|' + descripcion), sin truncamiento ni puntos suspensivos, dado que su largo no excede el limite de 60 caracteres. La marca se muestra en negrita con separador '|'.

**Resultado obtenido**

"Nacional | Abastero vacuno Nacional al vacío 1.8 Kg" (51 caracteres) se lee completo en el shelf, sin puntos suspensivos.

**Evidencia**

![Estado final](<B2C-769 Evidencias/B2C-769.png>)

---

### TC-B2C59-D-022 - Sin truncamiento cuando el texto esta dentro del limite de 60 caracteres (Desktop)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |

**Precondiciones**

User type: Guest o Registrado.

Viewport Desktop 1280x900.

Producto cuyo largo combinado de marca + '|' + descripcion comercial es menor o igual a 60 caracteres.

**Data utilizada**

- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)
- {PLP_URL} = URL de categoría

**Pasos ejecutados**

1. Navegar a una PLP/SRP con un producto cuyo nombre (marca + descripcion) es menor o igual a 60 caracteres, con viewport Desktop 1280x900.
2. Localizar el shelf del producto.
3. Verificar que el texto se muestra completo, sin truncar y sin puntos suspensivos ('...').
4. Verificar que la marca se muestra en negrita con separador '|' antes de la descripcion.

**Resultado esperado**

El texto se muestra completo (marca + '|' + descripcion), sin truncamiento ni puntos suspensivos, dado que su largo no excede el limite de 60 caracteres. La marca se muestra en negrita con separador '|'.

**Resultado obtenido**

El texto de 51 caracteres se muestra completo.

**Evidencia**

![B2C 769](<B2C-769 Evidencias/B2C-769.png>)

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
  "suite": "B2C-769",
  "tc_file": "Casos de Prueba/Ejecutados/SP1/B2C-59 Test Cases.xlsx",
  "title": "B2C-769 - Re-test - Un nombre de producto dentro del limite de 60 caracteres tampoco se muestra completo en el shelf (TC-B2C59-D-022) - Evidencias QA",
  "updated_at": "2026-11-13"
 },
 "history": {
  "2026-11-13": [
   "B2C-769",
   "TC-B2C59-D-022"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-11-13",
   "expected": "El texto se muestra completo (marca + '|' + descripcion), sin truncamiento ni puntos suspensivos, dado que su largo no excede el limite de 60 caracteres. La marca se muestra en negrita con separador '|'.",
   "form_factor": "desktop",
   "id": "B2C-769",
   "name": "[B2C-59] Un nombre de producto dentro del limite de 60 caracteres tampoco se muestra completo en el shelf (TC-B2C59-D-022)",
   "observed": "\"Nacional | Abastero vacuno Nacional al vacío 1.8 Kg\" (51 caracteres) se lee completo en el shelf, sin puntos suspensivos.",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "B2C-769.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Abrir la PLP de categoría https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno en Desktop 1280x900.\n2. Ubicar el shelf del producto \"Nacional | Abastero vacuno Nacional al vacío 1.8 Kg\", cuyo texto de marca + nombre tiene 51 caracteres y por lo tanto respeta el límite de 60.\n3. Observar si el nombre se lee completo en la tarjeta.",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-13",
   "expected": "El texto se muestra completo (marca + '|' + descripcion), sin truncamiento ni puntos suspensivos, dado que su largo no excede el limite de 60 caracteres. La marca se muestra en negrita con separador '|'.",
   "form_factor": "desktop",
   "id": "TC-B2C59-D-022",
   "name": "Sin truncamiento cuando el texto esta dentro del limite de 60 caracteres (Desktop)",
   "observed": "El texto de 51 caracteres se muestra completo.",
   "preconditions": "User type: Guest o Registrado.\nViewport Desktop 1280x900.\nProducto cuyo largo combinado de marca + '|' + descripcion comercial es menor o igual a 60 caracteres.",
   "screenshots": [
    {
     "caption": "B2C 769",
     "file": "B2C-769.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Navegar a una PLP/SRP con un producto cuyo nombre (marca + descripcion) es menor o igual a 60 caracteres, con viewport Desktop 1280x900.\n2. Localizar el shelf del producto.\n3. Verificar que el texto se muestra completo, sin truncar y sin puntos suspensivos ('...').\n4. Verificar que la marca se muestra en negrita con separador '|' antes de la descripcion.",
   "test_data": "- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)\n- {PLP_URL} = URL de categoría",
   "viewport": "1280x900"
  }
 ]
}
-->
