# B2C-767 - Re-test - El nombre del producto en el shelf no se trunca con puntos suspensivos ni respeta el limite de 60 caracteres (TC-B2C59-D-015) - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-767 |
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
| 2026-11-13 | 2 | B2C-767, TC-B2C59-D-015 |

## Detalle por caso de prueba

### B2C-767 - [B2C-59] El nombre del producto en el shelf no se trunca con puntos suspensivos ni respeta el limite de 60 caracteres (TC-B2C59-D-015)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |

**Pasos ejecutados**

1. Abrir la PLP de categoría https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno en Desktop 1280x900.
2. Ubicar el shelf del producto "Fundo Rio Alegre | Carne molida 4% grasa vacuno Fundo Río Alegre tártaro 250 g", cuyo texto de marca + nombre tiene 78 caracteres y supera el límite de 60.
3. Observar el texto de marca y descripción que muestra el shelf.

**Resultado esperado**

El texto se trunca a 60 caracteres máximo con "...". La marca aparece en negrita con separador "|" antes de la descripción. El texto truncado mantiene legibilidad.

**Resultado obtenido**

Los nombres largos se cortan en 60 caracteres con "…": "Fundo Rio Alegre | Carne molida 4% grasa vacuno Fundo Río Al…" (60 + …), con la marca en negrita y el separador |.

**Evidencia**

![Estado final](<B2C-767 Evidencias/B2C-767.png>)

---

### TC-B2C59-D-015 - Truncamiento de marca y descripcion a 60 caracteres (Desktop)

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

Producto cuyo largo combinado de marca + "|" + descripción comercial supera 60 caracteres.

**Data utilizada**

- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)
- {PLP_URL} = URL de categoría

**Pasos ejecutados**

1. Navegar a una PLP/SRP con un producto cuyo nombre (marca + descripción) supera 60 caracteres, con viewport Desktop 1280x900.
2. Localizar el shelf del producto.
3. Verificar que el texto se trunca con puntos suspensivos ("...") dentro del límite de 60 caracteres.
4. Verificar que la marca se muestra en negrita.
5. Verificar que el separador "|" aparece entre la marca y la descripción comercial.

**Resultado esperado**

El texto se trunca a 60 caracteres máximo con "...". La marca aparece en negrita con separador "|" antes de la descripción. El texto truncado mantiene legibilidad.

**Resultado obtenido**

Marca + descripción se truncan a 60 caracteres con puntos suspensivos.

**Evidencia**

![B2C 767](<B2C-767 Evidencias/B2C-767.png>)

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
  "suite": "B2C-767",
  "tc_file": "Casos de Prueba/Ejecutados/SP1/B2C-59 Test Cases.xlsx",
  "title": "B2C-767 - Re-test - El nombre del producto en el shelf no se trunca con puntos suspensivos ni respeta el limite de 60 caracteres (TC-B2C59-D-015) - Evidencias QA",
  "updated_at": "2026-11-13"
 },
 "history": {
  "2026-11-13": [
   "B2C-767",
   "TC-B2C59-D-015"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-11-13",
   "expected": "El texto se trunca a 60 caracteres máximo con \"...\". La marca aparece en negrita con separador \"|\" antes de la descripción. El texto truncado mantiene legibilidad.",
   "form_factor": "desktop",
   "id": "B2C-767",
   "name": "[B2C-59] El nombre del producto en el shelf no se trunca con puntos suspensivos ni respeta el limite de 60 caracteres (TC-B2C59-D-015)",
   "observed": "Los nombres largos se cortan en 60 caracteres con \"…\": \"Fundo Rio Alegre | Carne molida 4% grasa vacuno Fundo Río Al…\" (60 + …), con la marca en negrita y el separador |.",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "B2C-767.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Abrir la PLP de categoría https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno en Desktop 1280x900.\n2. Ubicar el shelf del producto \"Fundo Rio Alegre | Carne molida 4% grasa vacuno Fundo Río Alegre tártaro 250 g\", cuyo texto de marca + nombre tiene 78 caracteres y supera el límite de 60.\n3. Observar el texto de marca y descripción que muestra el shelf.",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-13",
   "expected": "El texto se trunca a 60 caracteres máximo con \"...\". La marca aparece en negrita con separador \"|\" antes de la descripción. El texto truncado mantiene legibilidad.",
   "form_factor": "desktop",
   "id": "TC-B2C59-D-015",
   "name": "Truncamiento de marca y descripcion a 60 caracteres (Desktop)",
   "observed": "Marca + descripción se truncan a 60 caracteres con puntos suspensivos.",
   "preconditions": "User type: Guest o Registrado.\nViewport Desktop 1280x900.\nProducto cuyo largo combinado de marca + \"|\" + descripción comercial supera 60 caracteres.",
   "screenshots": [
    {
     "caption": "B2C 767",
     "file": "B2C-767.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Navegar a una PLP/SRP con un producto cuyo nombre (marca + descripción) supera 60 caracteres, con viewport Desktop 1280x900.\n2. Localizar el shelf del producto.\n3. Verificar que el texto se trunca con puntos suspensivos (\"...\") dentro del límite de 60 caracteres.\n4. Verificar que la marca se muestra en negrita.\n5. Verificar que el separador \"|\" aparece entre la marca y la descripción comercial.",
   "test_data": "- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)\n- {PLP_URL} = URL de categoría",
   "viewport": "1280x900"
  }
 ]
}
-->
