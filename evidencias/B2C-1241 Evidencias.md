# B2C-1241 - Re-test - En Desktop, el shelf de un producto con varias imágenes no rota la imagen al hacer hover (TC-B2C59-D-007) - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-1241 |
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
| 2026-11-13 | 2 | B2C-1241, TC-B2C59-D-007 |

## Detalle por caso de prueba

### B2C-1241 - [B2C-59] En Desktop, el shelf de un producto con varias imágenes no rota la imagen al hacer hover (TC-B2C59-D-007)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |

**Pasos ejecutados**

1. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno_otros-cortes con un viewport Desktop de 1280x900. Ahí está el producto 000000000000028616-KGV, que tiene 3 imágenes en su PDP.
2. Verificar que la imagen del shelf se muestra estática sin hover (primera imagen).
3. Hacer hover sobre el shelf de ese producto.

**Resultado esperado**

En Desktop, la imagen principal es estática. Al hacer hover, la imagen rota a la siguiente disponible. No se muestran flechas ni dots de navegación.

**Resultado obtenido**

Sin hover se ve la primera imagen de 000000000000028616-KGV; con el mouse encima rota a la 02, luego a la 03 y vuelve a la 01. Al salir, vuelve a la primera.

**Evidencia**

![Paso 1 — sin hover](<B2C-1241 Evidencias/B2C-1241-p01-sin-hover.png>)

![Paso 2 — hover](<B2C-1241 Evidencias/B2C-1241-p02-hover.png>)

---

### TC-B2C59-D-007 - Galeria: hover rota la imagen cuando N>1 (Desktop)

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

Producto con 2 o más imágenes (N≥2) disponibles en catálogo SFCC.

**Data utilizada**

- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)
- {PLP_URL} = URL de categoría
- {SKU_MULTI_IMAGEN} = SKU con mas de una imagen

**Pasos ejecutados**

1. Navegar a una PLP/SRP con un producto que tiene N≥2 imágenes, con viewport Desktop 1280x900.
2. Verificar que la imagen del shelf se muestra estática sin hover.
3. Hacer hover sobre el shelf.
4. Verificar que la imagen rota a la siguiente disponible durante el hover.
5. Verificar que NO se muestran flechas ni dots de navegación sobre la imagen.

**Resultado esperado**

En Desktop, la imagen principal es estática. Al hacer hover, la imagen rota a la siguiente disponible. No se muestran flechas ni dots de navegación.

**Resultado obtenido**

La imagen es estática sin hover y rota a la siguiente disponible durante el hover.

**Evidencia**

![Paso 1 — sin hover](<B2C-1241 Evidencias/B2C-1241-p01-sin-hover.png>)

![Paso 2 — hover](<B2C-1241 Evidencias/B2C-1241-p02-hover.png>)

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
  "suite": "B2C-1241",
  "tc_file": "Casos de Prueba/Ejecutados/SP1/B2C-59 Test Cases.xlsx",
  "title": "B2C-1241 - Re-test - En Desktop, el shelf de un producto con varias imágenes no rota la imagen al hacer hover (TC-B2C59-D-007) - Evidencias QA",
  "updated_at": "2026-11-13"
 },
 "history": {
  "2026-11-13": [
   "B2C-1241",
   "TC-B2C59-D-007"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-11-13",
   "expected": "En Desktop, la imagen principal es estática. Al hacer hover, la imagen rota a la siguiente disponible. No se muestran flechas ni dots de navegación.",
   "form_factor": "desktop",
   "id": "B2C-1241",
   "name": "[B2C-59] En Desktop, el shelf de un producto con varias imágenes no rota la imagen al hacer hover (TC-B2C59-D-007)",
   "observed": "Sin hover se ve la primera imagen de 000000000000028616-KGV; con el mouse encima rota a la 02, luego a la 03 y vuelve a la 01. Al salir, vuelve a la primera.",
   "screenshots": [
    {
     "caption": "Paso 1 — sin hover",
     "file": "B2C-1241-p01-sin-hover.png"
    },
    {
     "caption": "Paso 2 — hover",
     "file": "B2C-1241-p02-hover.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno_otros-cortes con un viewport Desktop de 1280x900. Ahí está el producto 000000000000028616-KGV, que tiene 3 imágenes en su PDP.\n2. Verificar que la imagen del shelf se muestra estática sin hover (primera imagen).\n3. Hacer hover sobre el shelf de ese producto.",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-13",
   "expected": "En Desktop, la imagen principal es estática. Al hacer hover, la imagen rota a la siguiente disponible. No se muestran flechas ni dots de navegación.",
   "form_factor": "desktop",
   "id": "TC-B2C59-D-007",
   "name": "Galeria: hover rota la imagen cuando N>1 (Desktop)",
   "observed": "La imagen es estática sin hover y rota a la siguiente disponible durante el hover.",
   "preconditions": "User type: Guest o Registrado.\nViewport Desktop 1280x900.\nProducto con 2 o más imágenes (N≥2) disponibles en catálogo SFCC.",
   "screenshots": [
    {
     "caption": "Paso 1 — sin hover",
     "file": "B2C-1241-p01-sin-hover.png"
    },
    {
     "caption": "Paso 2 — hover",
     "file": "B2C-1241-p02-hover.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Navegar a una PLP/SRP con un producto que tiene N≥2 imágenes, con viewport Desktop 1280x900.\n2. Verificar que la imagen del shelf se muestra estática sin hover.\n3. Hacer hover sobre el shelf.\n4. Verificar que la imagen rota a la siguiente disponible durante el hover.\n5. Verificar que NO se muestran flechas ni dots de navegación sobre la imagen.",
   "test_data": "- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)\n- {PLP_URL} = URL de categoría\n- {SKU_MULTI_IMAGEN} = SKU con mas de una imagen",
   "viewport": "1280x900"
  }
 ]
}
-->
