# B2C-768 - Re-test - El nombre del producto en el shelf no se trunca con puntos suspensivos ni respeta el limite de 40 caracteres (TC-B2C59-M-015) - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-768 |
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
| 2026-11-13 | 2 | B2C-768, TC-B2C59-M-015 |

## Detalle por caso de prueba

### B2C-768 - [B2C-59] El nombre del producto en el shelf no se trunca con puntos suspensivos ni respeta el limite de 40 caracteres (TC-B2C59-M-015)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Pasos ejecutados**

1. Abrir la PLP de categoría https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno en Mobile 390x844.
2. Ubicar el shelf del producto "Nacional | Abastero vacuno Nacional al vacío 1.8 Kg", cuyo texto de marca + nombre tiene 51 caracteres y supera el límite de 40.
3. Observar el texto de marca y descripción que muestra el shelf.

**Resultado esperado**

El texto se trunca a 40 caracteres máximo con "...". La marca aparece en negrita con separador "|" antes de la descripción.

**Resultado obtenido**

Los nombres del shelf se cortan en 40 caracteres con "…": "Nacional | Abastero vacuno Nacional al v…", con la marca en negrita y el separador |.

**Evidencia**

![Estado final](<B2C-768 Evidencias/B2C-768.png>)

---

### TC-B2C59-M-015 - Truncamiento de marca y descripcion a 40 caracteres (Mobile)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

User type: Guest o Registrado.

Viewport Mobile 390x844.

Producto cuyo largo combinado de marca + "|" + descripción supera 40 caracteres.

**Data utilizada**

- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)
- {PLP_URL} = URL de categoría

**Pasos ejecutados**

1. Navegar a una PLP/SRP con un producto cuyo nombre supera 40 caracteres, con viewport Mobile 390x844.
2. Localizar el shelf del producto.
3. Verificar que el texto se trunca con "..." dentro del límite de 40 caracteres.
4. Verificar que la marca se muestra en negrita.
5. Verificar que el separador "|" aparece entre la marca y la descripción.

**Resultado esperado**

El texto se trunca a 40 caracteres máximo con "...". La marca aparece en negrita con separador "|" antes de la descripción.

**Resultado obtenido**

Marca + descripción se truncan a 40 caracteres con puntos suspensivos.

**Evidencia**

![B2C 768](<B2C-768 Evidencias/B2C-768.png>)

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
  "suite": "B2C-768",
  "tc_file": "Casos de Prueba/Ejecutados/SP1/B2C-59 Test Cases.xlsx",
  "title": "B2C-768 - Re-test - El nombre del producto en el shelf no se trunca con puntos suspensivos ni respeta el limite de 40 caracteres (TC-B2C59-M-015) - Evidencias QA",
  "updated_at": "2026-11-13"
 },
 "history": {
  "2026-11-13": [
   "B2C-768",
   "TC-B2C59-M-015"
  ]
 },
 "results": [
  {
   "browser": "webkit",
   "executed_at": "2026-11-13",
   "expected": "El texto se trunca a 40 caracteres máximo con \"...\". La marca aparece en negrita con separador \"|\" antes de la descripción.",
   "form_factor": "mobile",
   "id": "B2C-768",
   "name": "[B2C-59] El nombre del producto en el shelf no se trunca con puntos suspensivos ni respeta el limite de 40 caracteres (TC-B2C59-M-015)",
   "observed": "Los nombres del shelf se cortan en 40 caracteres con \"…\": \"Nacional | Abastero vacuno Nacional al v…\", con la marca en negrita y el separador |.",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "B2C-768.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Abrir la PLP de categoría https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno en Mobile 390x844.\n2. Ubicar el shelf del producto \"Nacional | Abastero vacuno Nacional al vacío 1.8 Kg\", cuyo texto de marca + nombre tiene 51 caracteres y supera el límite de 40.\n3. Observar el texto de marca y descripción que muestra el shelf.",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-13",
   "expected": "El texto se trunca a 40 caracteres máximo con \"...\". La marca aparece en negrita con separador \"|\" antes de la descripción.",
   "form_factor": "mobile",
   "id": "TC-B2C59-M-015",
   "name": "Truncamiento de marca y descripcion a 40 caracteres (Mobile)",
   "observed": "Marca + descripción se truncan a 40 caracteres con puntos suspensivos.",
   "preconditions": "User type: Guest o Registrado.\nViewport Mobile 390x844.\nProducto cuyo largo combinado de marca + \"|\" + descripción supera 40 caracteres.",
   "screenshots": [
    {
     "caption": "B2C 768",
     "file": "B2C-768.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Navegar a una PLP/SRP con un producto cuyo nombre supera 40 caracteres, con viewport Mobile 390x844.\n2. Localizar el shelf del producto.\n3. Verificar que el texto se trunca con \"...\" dentro del límite de 40 caracteres.\n4. Verificar que la marca se muestra en negrita.\n5. Verificar que el separador \"|\" aparece entre la marca y la descripción.",
   "test_data": "- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)\n- {PLP_URL} = URL de categoría",
   "viewport": "390x844"
  }
 ]
}
-->
