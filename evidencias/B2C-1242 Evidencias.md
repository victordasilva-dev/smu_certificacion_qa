# B2C-1242 - Re-test - En Mobile, la galería del shelf de un producto con varias imágenes no permite scroll horizontal (TC-B2C59-M-007) - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-1242 |
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
| 2026-11-13 | 2 | B2C-1242, TC-B2C59-M-007 |

## Detalle por caso de prueba

### B2C-1242 - [B2C-59] En Mobile, la galería del shelf de un producto con varias imágenes no permite scroll horizontal (TC-B2C59-M-007)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Pasos ejecutados**

1. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno_otros-cortes con un viewport Mobile de 390x844. Ahí está el producto 000000000000028616-KGV, que tiene 3 imágenes en su PDP.
2. Verificar que el shelf del producto muestra una imagen a la vez.
3. Realizar un desplazamiento (arrastre) horizontal sobre la galería del shelf.

**Resultado esperado**

En Mobile, la galería permite scroll horizontal mostrando una imagen a la vez. No se muestran flechas ni dots de navegación.

**Resultado obtenido**

La galería del shelf de 000000000000028616-KGV muestra una imagen a la vez y se desplaza horizontalmente con snap: imagen 01 → 02 → 03. No tiene flechas ni dots.

**Evidencia**

![Paso 1 — imagen1](<B2C-1242 Evidencias/B2C-1242-p01-imagen1.png>)

![Paso 2 — imagen2](<B2C-1242 Evidencias/B2C-1242-p02-imagen2.png>)

![Paso 3 — imagen3](<B2C-1242 Evidencias/B2C-1242-p03-imagen3.png>)

![Estado final](<B2C-1242 Evidencias/B2C-1242.png>)

---

### TC-B2C59-M-007 - Galeria: scroll horizontal cuando N>1 (Mobile)

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

Producto con 2 o más imágenes (N≥2) disponibles en catálogo SFCC.

**Data utilizada**

- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)
- {PLP_URL} = URL de categoría
- {SKU_MULTI_IMAGEN} = SKU con mas de una imagen

**Pasos ejecutados**

1. Navegar a una PLP/SRP con un producto que tiene N≥2 imágenes, con viewport Mobile 390x844.
2. Verificar que se muestra una imagen a la vez en el shelf.
3. Realizar scroll horizontal sobre la galería del shelf.
4. Verificar que la imagen avanza a la siguiente con el gesto de scroll.
5. Verificar que NO se muestran flechas ni dots de navegación.

**Resultado esperado**

En Mobile, la galería permite scroll horizontal mostrando una imagen a la vez. No se muestran flechas ni dots de navegación.

**Resultado obtenido**

Una imagen a la vez, scroll horizontal entre las 3 imágenes, sin flechas ni dots.

**Evidencia**

![Paso 1 — imagen1](<B2C-1242 Evidencias/B2C-1242-p01-imagen1.png>)

![Paso 3 — imagen3](<B2C-1242 Evidencias/B2C-1242-p03-imagen3.png>)

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
  "suite": "B2C-1242",
  "tc_file": "Casos de Prueba/Ejecutados/SP1/B2C-59 Test Cases.xlsx",
  "title": "B2C-1242 - Re-test - En Mobile, la galería del shelf de un producto con varias imágenes no permite scroll horizontal (TC-B2C59-M-007) - Evidencias QA",
  "updated_at": "2026-11-13"
 },
 "history": {
  "2026-11-13": [
   "B2C-1242",
   "TC-B2C59-M-007"
  ]
 },
 "results": [
  {
   "browser": "webkit",
   "executed_at": "2026-11-13",
   "expected": "En Mobile, la galería permite scroll horizontal mostrando una imagen a la vez. No se muestran flechas ni dots de navegación.",
   "form_factor": "mobile",
   "id": "B2C-1242",
   "name": "[B2C-59] En Mobile, la galería del shelf de un producto con varias imágenes no permite scroll horizontal (TC-B2C59-M-007)",
   "observed": "La galería del shelf de 000000000000028616-KGV muestra una imagen a la vez y se desplaza horizontalmente con snap: imagen 01 → 02 → 03. No tiene flechas ni dots.",
   "screenshots": [
    {
     "caption": "Paso 1 — imagen1",
     "file": "B2C-1242-p01-imagen1.png"
    },
    {
     "caption": "Paso 2 — imagen2",
     "file": "B2C-1242-p02-imagen2.png"
    },
    {
     "caption": "Paso 3 — imagen3",
     "file": "B2C-1242-p03-imagen3.png"
    },
    {
     "caption": "Estado final",
     "file": "B2C-1242.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno_otros-cortes con un viewport Mobile de 390x844. Ahí está el producto 000000000000028616-KGV, que tiene 3 imágenes en su PDP.\n2. Verificar que el shelf del producto muestra una imagen a la vez.\n3. Realizar un desplazamiento (arrastre) horizontal sobre la galería del shelf.",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-13",
   "expected": "En Mobile, la galería permite scroll horizontal mostrando una imagen a la vez. No se muestran flechas ni dots de navegación.",
   "form_factor": "mobile",
   "id": "TC-B2C59-M-007",
   "name": "Galeria: scroll horizontal cuando N>1 (Mobile)",
   "observed": "Una imagen a la vez, scroll horizontal entre las 3 imágenes, sin flechas ni dots.",
   "preconditions": "User type: Guest o Registrado.\nViewport Mobile 390x844.\nProducto con 2 o más imágenes (N≥2) disponibles en catálogo SFCC.",
   "screenshots": [
    {
     "caption": "Paso 1 — imagen1",
     "file": "B2C-1242-p01-imagen1.png"
    },
    {
     "caption": "Paso 3 — imagen3",
     "file": "B2C-1242-p03-imagen3.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Navegar a una PLP/SRP con un producto que tiene N≥2 imágenes, con viewport Mobile 390x844.\n2. Verificar que se muestra una imagen a la vez en el shelf.\n3. Realizar scroll horizontal sobre la galería del shelf.\n4. Verificar que la imagen avanza a la siguiente con el gesto de scroll.\n5. Verificar que NO se muestran flechas ni dots de navegación.",
   "test_data": "- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)\n- {PLP_URL} = URL de categoría\n- {SKU_MULTI_IMAGEN} = SKU con mas de una imagen",
   "viewport": "390x844"
  }
 ]
}
-->
