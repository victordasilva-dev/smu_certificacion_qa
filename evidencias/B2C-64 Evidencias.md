# Shelf simplificada

| Campo | Valor |
|---|---|
| Suite | B2C-64 |
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
| Aprobado | 1 |
| **Total** | **1** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-13 | 1 | TC-64-D-003 |
| 2026-10-19 | 1 | TC-64-D-003 |

## Detalle por caso de prueba

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

![Paso 2 — shelf simplificada de poett limpiador](<B2C-64 Evidencias/TC-64-D-003-p02-shelf-simplificada-de-poett-limpiador.png>)

![Paso 3 — scroll](<B2C-64 Evidencias/B2C-1245-p03-scroll.png>)

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
  "suite": "B2C-64",
  "tc_file": "Casos de Prueba/Ejecutados/SP1/B2C-64 Test Cases.xlsx",
  "title": "Shelf simplificada",
  "updated_at": "2026-11-13"
 },
 "history": {
  "2026-10-19": [
   "TC-64-D-003"
  ],
  "2026-11-13": [
   "TC-64-D-003"
  ]
 },
 "results": [
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
