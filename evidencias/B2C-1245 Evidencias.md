# B2C-1245 - Re-test - En el modal de buscador, la shelf simplificada de un producto con 8 imágenes muestra una sola imagen sin forma de navegar la galería (TC-64-D-003) - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-1245 |
| Última actualización | 2026-11-13 |
| Ejecutado por | Victor Chirinos |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | webkit |
| Origen de los TC | Casos de Prueba/Ejecutados/SP1/B2C-64 Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 2 |
| **Total** | **2** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-13 | 2 | B2C-1245, TC-64-D-003 |

## Detalle por caso de prueba

### B2C-1245 - [B2C-64] En el modal de buscador, la shelf simplificada de un producto con 8 imágenes muestra una sola imagen sin forma de navegar la galería (TC-64-D-003)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |

**Pasos ejecutados**

1. Abrir https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ en un viewport Desktop de 1280x900, abrir el modal del buscador e ingresar "poett limpiador".
2. Localizar la shelf simplificada del primer resultado (Limpiador líquido aromatizante Poett frescura de lavanda 1.8 L, SKU 000000000402160001-UN). Su PDP tiene 8 imágenes.
3. Verificar la imagen principal y buscar indicadores de galería (dots o flechas); pasar el mouse sobre la imagen durante unos segundos.

**Resultado esperado**

La galería muestra la imagen principal del producto. Se pueden navegar las imágenes adicionales (hasta 5 en total). No se muestran más de 5 imágenes aunque el producto tenga más configuradas.

**Resultado obtenido**

La shelf simplificada de Poett frescura de lavanda (000000000402160001-UN) muestra la imagen principal y una galería de 5 imágenes: al dejar el mouse encima avanza sola de una imagen a otra (01 → 02 → 03) y también se desplaza con scroll horizontal.

**Evidencia**

![Paso 1 — modal](<B2C-1245 Evidencias/B2C-1245-p01-modal.png>)

![Paso 3 — scroll](<B2C-1245 Evidencias/B2C-1245-p03-scroll.png>)

![Estado final](<B2C-1245 Evidencias/B2C-1245.png>)

---

### TC-64-D-003 - 

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Spec | tests/B2C-64.spec.ts:154 |

**Precondiciones**

User type: Guest

Producto con múltiples imágenes configuradas (al menos 3, idealmente 5) disponible en el buscador

Modal de buscador activo

Viewport Desktop 1280x900

**Data utilizada**

- {BASE_URL} = URL base del storefront
- {SEARCH_MULTI_IMAGEN} = poett limpiador

**Pasos ejecutados**

1. Abrir el modal de buscador e ingresar un término que devuelva el producto con múltiples imágenes.
2. Localizar la shelf simplificada del producto.
3. Verificar que se muestra la imagen principal del producto.
4. Si hay indicadores de galería (dots o flechas), interactuar con ellos para navegar entre imágenes.
5. Verificar que se muestran como máximo 5 imágenes disponibles.

**Resultado esperado**

La galería muestra la imagen principal del producto. Se pueden navegar las imágenes adicionales (hasta 5 en total). No se muestran más de 5 imágenes aunque el producto tenga más configuradas.

**Resultado obtenido**

La shelf muestra la imagen principal y permite recorrer las imágenes adicionales (5 en total): avanzan con el hover y con scroll horizontal.

**Evidencia**

![Paso 2 — shelf simplificada de poett limpiador](<B2C-1245 Evidencias/TC-64-D-003-p02-shelf-simplificada-de-poett-limpiador.png>)

![Paso 3 — scroll](<B2C-1245 Evidencias/B2C-1245-p03-scroll.png>)

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
  "suite": "B2C-1245",
  "tc_file": "Casos de Prueba/Ejecutados/SP1/B2C-64 Test Cases.xlsx",
  "title": "B2C-1245 - Re-test - En el modal de buscador, la shelf simplificada de un producto con 8 imágenes muestra una sola imagen sin forma de navegar la galería (TC-64-D-003) - Evidencias QA",
  "updated_at": "2026-11-13"
 },
 "history": {
  "2026-11-13": [
   "B2C-1245",
   "TC-64-D-003"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-11-13",
   "expected": "La galería muestra la imagen principal del producto. Se pueden navegar las imágenes adicionales (hasta 5 en total). No se muestran más de 5 imágenes aunque el producto tenga más configuradas.",
   "form_factor": "desktop",
   "id": "B2C-1245",
   "name": "[B2C-64] En el modal de buscador, la shelf simplificada de un producto con 8 imágenes muestra una sola imagen sin forma de navegar la galería (TC-64-D-003)",
   "observed": "La shelf simplificada de Poett frescura de lavanda (000000000402160001-UN) muestra la imagen principal y una galería de 5 imágenes: al dejar el mouse encima avanza sola de una imagen a otra (01 → 02 → 03) y también se desplaza con scroll horizontal.",
   "screenshots": [
    {
     "caption": "Paso 1 — modal",
     "file": "B2C-1245-p01-modal.png"
    },
    {
     "caption": "Paso 3 — scroll",
     "file": "B2C-1245-p03-scroll.png"
    },
    {
     "caption": "Estado final",
     "file": "B2C-1245.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Abrir https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ en un viewport Desktop de 1280x900, abrir el modal del buscador e ingresar \"poett limpiador\".\n2. Localizar la shelf simplificada del primer resultado (Limpiador líquido aromatizante Poett frescura de lavanda 1.8 L, SKU 000000000402160001-UN). Su PDP tiene 8 imágenes.\n3. Verificar la imagen principal y buscar indicadores de galería (dots o flechas); pasar el mouse sobre la imagen durante unos segundos.",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-13",
   "expected": "La galería muestra la imagen principal del producto. Se pueden navegar las imágenes adicionales (hasta 5 en total). No se muestran más de 5 imágenes aunque el producto tenga más configuradas.",
   "form_factor": "desktop",
   "id": "TC-64-D-003",
   "observed": "La shelf muestra la imagen principal y permite recorrer las imágenes adicionales (5 en total): avanzan con el hover y con scroll horizontal.",
   "preconditions": "User type: Guest\nProducto con múltiples imágenes configuradas (al menos 3, idealmente 5) disponible en el buscador\nModal de buscador activo\nViewport Desktop 1280x900",
   "screenshots": [
    {
     "caption": "Paso 2 — shelf simplificada de poett limpiador",
     "file": "TC-64-D-003-p02-shelf-simplificada-de-poett-limpiador.png"
    },
    {
     "caption": "Paso 3 — scroll",
     "file": "B2C-1245-p03-scroll.png"
    }
   ],
   "spec": "tests/B2C-64.spec.ts:154",
   "status": "Aprobado",
   "steps": "1. Abrir el modal de buscador e ingresar un término que devuelva el producto con múltiples imágenes.\n2. Localizar la shelf simplificada del producto.\n3. Verificar que se muestra la imagen principal del producto.\n4. Si hay indicadores de galería (dots o flechas), interactuar con ellos para navegar entre imágenes.\n5. Verificar que se muestran como máximo 5 imágenes disponibles.",
   "test_data": "- {BASE_URL} = URL base del storefront\n- {SEARCH_MULTI_IMAGEN} = poett limpiador",
   "viewport": "1280x900"
  }
 ]
}
-->
