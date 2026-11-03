# Re-ejecución de casos con bug (B2C-74)

| Campo | Valor |
|---|---|
| Suite | B2C-74 |
| Última actualización | 2026-10-23 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | chromium |
| Origen de los TC | Casos de Prueba/Ejecutados/SP1/B2C-74 WEB Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Rechazado | 2 |
| **Total** | **2** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-23 | 2 | TC-74-D-004, TC-74-M-004 |

## Detalle por caso de prueba

### TC-74-D-004 - Contenido del modal 'Combina la Promo': header, barra de progreso, contador y grid de productos

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-23 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Spec | tests/B2C-74.spec.ts |

**Precondiciones**

User type: Guest.

Producto de prueba con promoción combinable activa (ej. promo 3x2) disponible en la PLP, con al menos 2 variantes con stock. Botón 'Combina la Promo' visible en la shelf del producto.

Modal 'Combina la Promo' abierto. Promo de prueba requiere M=3 unidades para completarse.

Viewport: Desktop 1440×900.

**Data utilizada**

- {BASE_URL} = URL base del storefront
- {PLP_URL} = URL de categoría

**Pasos ejecutados**

1. Navegar a la PLP con viewport Desktop 1280×900.
2. Hacer clic en 'Combina la Promo' en la shelf del producto de prueba.
3. Verificar que el header del modal muestra el título 'Combina la promo'.
4. Verificar que el botón X de cierre está en la esquina superior derecha del drawer.
5. Verificar que la barra de progreso está dividida en M=3 segmentos iguales vacíos.
6. Verificar que el contador muestra '0 / 3 productos'.
7. Verificar que el grid muestra los productos en 2 columnas.
8. Verificar que las shelves del grid corresponden al formato simplificado (B2C-64).

**Resultado esperado**

El modal muestra: título 'Combina la promo' y botón X en el header; barra de progreso con 3 segmentos vacíos; contador '0 / 3 productos'; grid de 2 columnas con shelves simplificadas de todas las variantes combinables.

**Resultado obtenido**

Obtenido: la promo nxp-2x12490 agrupa 2 variantes (000000000000666200-UN y 000000000000666285-UN) y el modal «Combina la promo» muestra 1. Bug: B2C-822. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir corridas de QA, no por corrección).

**Observación**

Obtenido: la promo nxp-2x12490 agrupa 2 variantes (000000000000666200-UN y 000000000000666285-UN) y el modal «Combina la promo» muestra 1. Bug: B2C-822. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir corridas de QA, no por corrección).

**Evidencia**

![Paso 3 — modal combina la promo abierto](<B2C-74 Evidencias/TC-74-D-004-p03-modal-combina-la-promo-abierto.png>)

![Paso 5 — barra con 2 segmentos vacios y contador 0 2](<B2C-74 Evidencias/TC-74-D-004-p05-barra-con-2-segmentos-vacios-y-contador-0-2.png>)

---

### TC-74-M-004 - Contenido del bottom sheet: header, barra de progreso, contador y grid de 2 columnas

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-23 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-74.spec.ts |

**Precondiciones**

User type: Guest.

Producto de prueba con promoción combinable activa (ej. promo 3x2) disponible en la PLP, con al menos 2 variantes con stock. Botón 'Combina la Promo' visible en la shelf del producto.

Bottom sheet abierto. Promo 3x2 (M=3).

Viewport: Mobile 390×844.

**Data utilizada**

- {BASE_URL} = URL base del storefront
- {PLP_URL} = URL de categoría

**Pasos ejecutados**

1. Navegar a la PLP con viewport Mobile 390×844 y abrir el bottom sheet.
2. Verificar el título 'Combina la promo' en el header.
3. Verificar que el botón X está en la esquina superior derecha.
4. Verificar la barra de progreso con 3 segmentos vacíos.
5. Verificar que el contador muestra '0 / 3 productos'.
6. Verificar que el grid tiene 2 columnas con shelves simplificadas.

**Resultado esperado**

El bottom sheet muestra: título + botón X en el header; barra con 3 segmentos vacíos; contador '0 / 3 productos'; grid de 2 columnas con shelves simplificadas.

**Resultado obtenido**

Obtenido: la promo nxp-2x12490 agrupa 2 variantes (000000000000666200-UN y 000000000000666285-UN) y el bottom sheet «Combina la promo» muestra 1. Bug: B2C-823. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir corridas de QA, no por corrección).

**Observación**

Obtenido: la promo nxp-2x12490 agrupa 2 variantes (000000000000666200-UN y 000000000000666285-UN) y el bottom sheet «Combina la promo» muestra 1. Bug: B2C-823. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir corridas de QA, no por corrección).

**Evidencia**

![Paso 3 — bottom sheet combina la promo abierto](<B2C-74 Evidencias/TC-74-M-004-p03-bottom-sheet-combina-la-promo-abierto.png>)

![Paso 5 — barra con 2 segmentos y contador 0 2](<B2C-74 Evidencias/TC-74-M-004-p05-barra-con-2-segmentos-y-contador-0-2.png>)

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
  "suite": "B2C-74",
  "tc_file": "Casos de Prueba/Ejecutados/SP1/B2C-74 WEB Test Cases.xlsx",
  "title": "Re-ejecución de casos con bug (B2C-74)",
  "updated_at": "2026-10-23"
 },
 "history": {
  "2026-10-23": [
   "TC-74-D-004",
   "TC-74-M-004"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-10-23",
   "expected": "El modal muestra: título 'Combina la promo' y botón X en el header; barra de progreso con 3 segmentos vacíos; contador '0 / 3 productos'; grid de 2 columnas con shelves simplificadas de todas las variantes combinables.",
   "form_factor": "desktop",
   "id": "TC-74-D-004",
   "name": "Contenido del modal 'Combina la Promo': header, barra de progreso, contador y grid de productos",
   "observation": "Obtenido: la promo nxp-2x12490 agrupa 2 variantes (000000000000666200-UN y 000000000000666285-UN) y el modal «Combina la promo» muestra 1. Bug: B2C-822. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir corridas de QA, no por corrección).",
   "observed": "Obtenido: la promo nxp-2x12490 agrupa 2 variantes (000000000000666200-UN y 000000000000666285-UN) y el modal «Combina la promo» muestra 1. Bug: B2C-822. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir corridas de QA, no por corrección).",
   "preconditions": "User type: Guest.\nProducto de prueba con promoción combinable activa (ej. promo 3x2) disponible en la PLP, con al menos 2 variantes con stock. Botón 'Combina la Promo' visible en la shelf del producto.\nModal 'Combina la Promo' abierto. Promo de prueba requiere M=3 unidades para completarse.\nViewport: Desktop 1440×900.",
   "screenshots": [
    {
     "caption": "Paso 3 — modal combina la promo abierto",
     "file": "TC-74-D-004-p03-modal-combina-la-promo-abierto.png"
    },
    {
     "caption": "Paso 5 — barra con 2 segmentos vacios y contador 0 2",
     "file": "TC-74-D-004-p05-barra-con-2-segmentos-vacios-y-contador-0-2.png"
    }
   ],
   "spec": "tests/B2C-74.spec.ts",
   "status": "Rechazado",
   "steps": "1. Navegar a la PLP con viewport Desktop 1280×900.\n2. Hacer clic en 'Combina la Promo' en la shelf del producto de prueba.\n3. Verificar que el header del modal muestra el título 'Combina la promo'.\n4. Verificar que el botón X de cierre está en la esquina superior derecha del drawer.\n5. Verificar que la barra de progreso está dividida en M=3 segmentos iguales vacíos.\n6. Verificar que el contador muestra '0 / 3 productos'.\n7. Verificar que el grid muestra los productos en 2 columnas.\n8. Verificar que las shelves del grid corresponden al formato simplificado (B2C-64).",
   "test_data": "- {BASE_URL} = URL base del storefront\n- {PLP_URL} = URL de categoría",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-23",
   "expected": "El bottom sheet muestra: título + botón X en el header; barra con 3 segmentos vacíos; contador '0 / 3 productos'; grid de 2 columnas con shelves simplificadas.",
   "form_factor": "mobile",
   "id": "TC-74-M-004",
   "name": "Contenido del bottom sheet: header, barra de progreso, contador y grid de 2 columnas",
   "observation": "Obtenido: la promo nxp-2x12490 agrupa 2 variantes (000000000000666200-UN y 000000000000666285-UN) y el bottom sheet «Combina la promo» muestra 1. Bug: B2C-823. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir corridas de QA, no por corrección).",
   "observed": "Obtenido: la promo nxp-2x12490 agrupa 2 variantes (000000000000666200-UN y 000000000000666285-UN) y el bottom sheet «Combina la promo» muestra 1. Bug: B2C-823. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir corridas de QA, no por corrección).",
   "preconditions": "User type: Guest.\nProducto de prueba con promoción combinable activa (ej. promo 3x2) disponible en la PLP, con al menos 2 variantes con stock. Botón 'Combina la Promo' visible en la shelf del producto.\nBottom sheet abierto. Promo 3x2 (M=3).\nViewport: Mobile 390×844.",
   "screenshots": [
    {
     "caption": "Paso 3 — bottom sheet combina la promo abierto",
     "file": "TC-74-M-004-p03-bottom-sheet-combina-la-promo-abierto.png"
    },
    {
     "caption": "Paso 5 — barra con 2 segmentos y contador 0 2",
     "file": "TC-74-M-004-p05-barra-con-2-segmentos-y-contador-0-2.png"
    }
   ],
   "spec": "tests/B2C-74.spec.ts",
   "status": "Rechazado",
   "steps": "1. Navegar a la PLP con viewport Mobile 390×844 y abrir el bottom sheet.\n2. Verificar el título 'Combina la promo' en el header.\n3. Verificar que el botón X está en la esquina superior derecha.\n4. Verificar la barra de progreso con 3 segmentos vacíos.\n5. Verificar que el contador muestra '0 / 3 productos'.\n6. Verificar que el grid tiene 2 columnas con shelves simplificadas.",
   "test_data": "- {BASE_URL} = URL base del storefront\n- {PLP_URL} = URL de categoría",
   "viewport": "390x844"
  }
 ]
}
-->
