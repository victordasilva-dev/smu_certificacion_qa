# B2C-1243 - Re-test - En Desktop, el texto largo de la cucarda no se trunca con "..." y se cruza con el botón de Favoritos (TC-65-D-009) - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-1243 |
| Última actualización | 2026-11-13 |
| Ejecutado por | Victor Chirinos |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | webkit |
| Origen de los TC | Casos de Prueba/Ejecutados/SP1/B2C-65 Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 2 |
| **Total** | **2** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-13 | 2 | B2C-1243, TC-65-D-009 |

## Detalle por caso de prueba

### B2C-1243 - [B2C-65] En Desktop, el texto largo de la cucarda no se trunca con "..." y se cruza con el botón de Favoritos (TC-65-D-009)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |

**Pasos ejecutados**

1. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno con un viewport Desktop de 1280x900 y ubicar el producto 000000000000666285-UN, cuya cucarda tiene el texto "Promoción Lleva 2 unidades por Monto" (36 caracteres).
2. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen.
3. Verificar el texto visible de la cucarda y su ancho.

**Resultado esperado**

El texto de la cucarda aparece truncado con "..." al exceder 20 caracteres en Desktop. El layout de la shelf no se rompe. La cucarda mantiene su posición y dimensiones correctas.

**Resultado obtenido**

La cucarda de 000000000000666285-UN se ve como "Promoción Lleva 2 un..." (20 caracteres y puntos suspensivos) y termina 16 px antes del botón de Favoritos, sin cruzarse con él.

**Evidencia**

![Estado final](<B2C-1243 Evidencias/B2C-1243.png>)

---

### TC-65-D-009 - Texto de cucarda >20 caracteres se trunca con '...' en Desktop

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |

**Precondiciones**

User type: Guest

Producto con Label_Texto de más de 20 caracteres (ej. "Club Unimarc Exclusivo!") configurado

Viewport Desktop 1280x900

**Data utilizada**

- {BASE_URL} = URL base del storefront
- {PLP_URL} = URL de categoría
- {SKU_CUCARDA_LARGA} = SKU con cucarda larga

**Pasos ejecutados**

1. Navegar a la PLP con el producto que tiene Label_Texto de más de 20 caracteres.
2. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen.
3. Verificar que el texto visible está truncado con "..." y no supera los 20 caracteres visibles.
4. Verificar que la cucarda no rompe el layout del shelf ni se desborda.

**Resultado esperado**

El texto de la cucarda aparece truncado con "..." al exceder 20 caracteres en Desktop. El layout de la shelf no se rompe. La cucarda mantiene su posición y dimensiones correctas.

**Resultado obtenido**

El texto de la cucarda se trunca a 20 caracteres con "..." sin romper el layout.

**Observación**

El test() de la suite no ubica la cucarda (selector desactualizado); se condujo con el CLI.

**Evidencia**

![B2C 1243](<B2C-1243 Evidencias/B2C-1243.png>)

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
  "suite": "B2C-1243",
  "tc_file": "Casos de Prueba/Ejecutados/SP1/B2C-65 Test Cases.xlsx",
  "title": "B2C-1243 - Re-test - En Desktop, el texto largo de la cucarda no se trunca con \"...\" y se cruza con el botón de Favoritos (TC-65-D-009) - Evidencias QA",
  "updated_at": "2026-11-13"
 },
 "history": {
  "2026-11-13": [
   "B2C-1243",
   "TC-65-D-009"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-11-13",
   "expected": "El texto de la cucarda aparece truncado con \"...\" al exceder 20 caracteres en Desktop. El layout de la shelf no se rompe. La cucarda mantiene su posición y dimensiones correctas.",
   "form_factor": "desktop",
   "id": "B2C-1243",
   "name": "[B2C-65] En Desktop, el texto largo de la cucarda no se trunca con \"...\" y se cruza con el botón de Favoritos (TC-65-D-009)",
   "observed": "La cucarda de 000000000000666285-UN se ve como \"Promoción Lleva 2 un...\" (20 caracteres y puntos suspensivos) y termina 16 px antes del botón de Favoritos, sin cruzarse con él.",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "B2C-1243.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno con un viewport Desktop de 1280x900 y ubicar el producto 000000000000666285-UN, cuya cucarda tiene el texto \"Promoción Lleva 2 unidades por Monto\" (36 caracteres).\n2. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen.\n3. Verificar el texto visible de la cucarda y su ancho.",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-13",
   "expected": "El texto de la cucarda aparece truncado con \"...\" al exceder 20 caracteres en Desktop. El layout de la shelf no se rompe. La cucarda mantiene su posición y dimensiones correctas.",
   "form_factor": "desktop",
   "id": "TC-65-D-009",
   "name": "Texto de cucarda >20 caracteres se trunca con '...' en Desktop",
   "observation": "El test() de la suite no ubica la cucarda (selector desactualizado); se condujo con el CLI.",
   "observed": "El texto de la cucarda se trunca a 20 caracteres con \"...\" sin romper el layout.",
   "preconditions": "User type: Guest\nProducto con Label_Texto de más de 20 caracteres (ej. \"Club Unimarc Exclusivo!\") configurado\nViewport Desktop 1280x900",
   "screenshots": [
    {
     "caption": "B2C 1243",
     "file": "B2C-1243.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Navegar a la PLP con el producto que tiene Label_Texto de más de 20 caracteres.\n2. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen.\n3. Verificar que el texto visible está truncado con \"...\" y no supera los 20 caracteres visibles.\n4. Verificar que la cucarda no rompe el layout del shelf ni se desborda.",
   "test_data": "- {BASE_URL} = URL base del storefront\n- {PLP_URL} = URL de categoría\n- {SKU_CUCARDA_LARGA} = SKU con cucarda larga",
   "viewport": "1280x900"
  }
 ]
}
-->
