# B2C-1244 - Re-test - En Mobile, el texto largo de la cucarda no se trunca con "..." y desborda la imagen cubriendo Favoritos (TC-65-M-009) - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-1244 |
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
| 2026-11-13 | 2 | B2C-1244, TC-65-M-009 |

## Detalle por caso de prueba

### B2C-1244 - [B2C-65] En Mobile, el texto largo de la cucarda no se trunca con "..." y desborda la imagen cubriendo Favoritos (TC-65-M-009)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Pasos ejecutados**

1. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno con un viewport Mobile de 390x844 y ubicar el producto 000000000000666285-UN, cuya cucarda tiene el texto "Promoción Lleva 2 unidades por Monto" (36 caracteres).
2. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen.
3. Verificar el texto visible de la cucarda y que el layout del shelf no se rompe.

**Resultado esperado**

El texto de la cucarda aparece truncado con "..." al exceder 15 caracteres en Mobile. El layout del shelf no se rompe. La cucarda mantiene su posición y dimensiones correctas.

**Resultado obtenido**

La cucarda de 000000000000666285-UN se ve como "Promoción Lleva..." (15 caracteres y puntos suspensivos), en la esquina superior izquierda de la imagen y sin tocar el botón de Favoritos (termina 5 px antes).

**Evidencia**

![Estado final](<B2C-1244 Evidencias/B2C-1244.png>)

---

### TC-65-M-009 - Texto de cucarda >15 caracteres se trunca con '...' en Mobile

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

User type: Guest

Producto con Label_Texto de más de 15 caracteres (ej. "Club Unimarc Exclusivo!") configurado

Viewport Mobile 390x844

**Data utilizada**

- {BASE_URL} = URL base del storefront
- {PLP_URL} = URL de categoría
- {SKU_CUCARDA_LARGA} = SKU con cucarda larga

**Pasos ejecutados**

1. Navegar a la PLP en Mobile con el producto que tiene Label_Texto de más de 15 caracteres.
2. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen.
3. Verificar que el texto visible está truncado con "..." y no supera los 15 caracteres.
4. Verificar que el layout del shelf no se rompe.

**Resultado esperado**

El texto de la cucarda aparece truncado con "..." al exceder 15 caracteres en Mobile. El layout del shelf no se rompe. La cucarda mantiene su posición y dimensiones correctas.

**Resultado obtenido**

El texto de la cucarda se trunca a 15 caracteres con "..." y no rompe el layout del shelf.

**Observación**

El test() de la suite no ubica la cucarda (selector desactualizado); se condujo con el CLI.

**Evidencia**

![B2C 1244](<B2C-1244 Evidencias/B2C-1244.png>)

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
  "suite": "B2C-1244",
  "tc_file": "Casos de Prueba/Ejecutados/SP1/B2C-65 Test Cases.xlsx",
  "title": "B2C-1244 - Re-test - En Mobile, el texto largo de la cucarda no se trunca con \"...\" y desborda la imagen cubriendo Favoritos (TC-65-M-009) - Evidencias QA",
  "updated_at": "2026-11-13"
 },
 "history": {
  "2026-11-13": [
   "B2C-1244",
   "TC-65-M-009"
  ]
 },
 "results": [
  {
   "browser": "webkit",
   "executed_at": "2026-11-13",
   "expected": "El texto de la cucarda aparece truncado con \"...\" al exceder 15 caracteres en Mobile. El layout del shelf no se rompe. La cucarda mantiene su posición y dimensiones correctas.",
   "form_factor": "mobile",
   "id": "B2C-1244",
   "name": "[B2C-65] En Mobile, el texto largo de la cucarda no se trunca con \"...\" y desborda la imagen cubriendo Favoritos (TC-65-M-009)",
   "observed": "La cucarda de 000000000000666285-UN se ve como \"Promoción Lleva...\" (15 caracteres y puntos suspensivos), en la esquina superior izquierda de la imagen y sin tocar el botón de Favoritos (termina 5 px antes).",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "B2C-1244.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno con un viewport Mobile de 390x844 y ubicar el producto 000000000000666285-UN, cuya cucarda tiene el texto \"Promoción Lleva 2 unidades por Monto\" (36 caracteres).\n2. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen.\n3. Verificar el texto visible de la cucarda y que el layout del shelf no se rompe.",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-13",
   "expected": "El texto de la cucarda aparece truncado con \"...\" al exceder 15 caracteres en Mobile. El layout del shelf no se rompe. La cucarda mantiene su posición y dimensiones correctas.",
   "form_factor": "mobile",
   "id": "TC-65-M-009",
   "name": "Texto de cucarda >15 caracteres se trunca con '...' en Mobile",
   "observation": "El test() de la suite no ubica la cucarda (selector desactualizado); se condujo con el CLI.",
   "observed": "El texto de la cucarda se trunca a 15 caracteres con \"...\" y no rompe el layout del shelf.",
   "preconditions": "User type: Guest\nProducto con Label_Texto de más de 15 caracteres (ej. \"Club Unimarc Exclusivo!\") configurado\nViewport Mobile 390x844",
   "screenshots": [
    {
     "caption": "B2C 1244",
     "file": "B2C-1244.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Navegar a la PLP en Mobile con el producto que tiene Label_Texto de más de 15 caracteres.\n2. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen.\n3. Verificar que el texto visible está truncado con \"...\" y no supera los 15 caracteres.\n4. Verificar que el layout del shelf no se rompe.",
   "test_data": "- {BASE_URL} = URL base del storefront\n- {PLP_URL} = URL de categoría\n- {SKU_CUCARDA_LARGA} = SKU con cucarda larga",
   "viewport": "390x844"
  }
 ]
}
-->
