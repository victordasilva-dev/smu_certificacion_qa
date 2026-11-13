# B2C-1142 - Re-test - El shelf de un producto patrocinado no muestra el texto "Patrocinado" en la PLP (TC-B2C59-D-004, M-004) - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-1142 |
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
| Aprobado | 3 |
| **Total** | **3** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-13 | 3 | B2C-1142, TC-B2C59-D-004, TC-B2C59-M-004 |

## Detalle por caso de prueba

### B2C-1142 - [B2C-59] El shelf de un producto patrocinado no muestra el texto "Patrocinado" en la PLP (TC-B2C59-D-004, M-004)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |

**Pasos ejecutados**

1. Ingresar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno (Desktop 1280x900 o Mobile 390x844).
2. Ubicar el shelf de "Nacional | Choclillo vacuno Nacional al vacío 1.3 Kg".

**Resultado esperado**

El texto "Patrocinado" se muestra debajo del nombre del producto en el shelf cuando isSponsored=true.

**Resultado obtenido**

El shelf de Nacional | Choclillo vacuno Nacional al vacío 1.3 Kg (000000000000028597-KGV) muestra "Patrocinado" debajo del nombre, en Desktop 1280x900 (chromium) y en Mobile 390x844 (webkit).

**Evidencia**

![Paso 1 — desktop](<B2C-1142 Evidencias/B2C-1142-p01-desktop.png>)

![Paso 2 — mobile](<B2C-1142 Evidencias/B2C-1142-p02-mobile.png>)

---

### TC-B2C59-D-004 - Mostrar 'Patrocinado' cuando isSponsored=true (Desktop)

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

Producto con atributo isSponsored=true configurado en BM/catálogo SFCC.

**Data utilizada**

- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)
- {PLP_URL} = URL de categoría
- {SKU_SPONSOR} = SKU Sponsor

**Pasos ejecutados**

1. Navegar a una PLP/SRP con un producto que tiene isSponsored=true, con viewport Desktop 1280x900.
2. Localizar el shelf del producto.
3. Verificar que el texto "Patrocinado" aparece debajo del nombre del producto.

**Resultado esperado**

El texto "Patrocinado" se muestra debajo del nombre del producto en el shelf cuando isSponsored=true.

**Resultado obtenido**

El shelf del producto patrocinado muestra "Patrocinado" debajo del nombre.

**Evidencia**

![Paso 1 — desktop](<B2C-1142 Evidencias/B2C-1142-p01-desktop.png>)

---

### TC-B2C59-M-004 - Mostrar 'Patrocinado' cuando isSponsored=true (Mobile)

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

Producto con atributo isSponsored=true.

**Data utilizada**

- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)
- {PLP_URL} = URL de categoría
- {SKU_SPONSOR} = Producto con sponsor

**Pasos ejecutados**

1. Navegar a una PLP/SRP con un producto isSponsored=true, con viewport Mobile 390x844.
2. Verificar que el texto "Patrocinado" aparece debajo del nombre del producto en el shelf.

**Resultado esperado**

El texto "Patrocinado" se muestra debajo del nombre del producto cuando isSponsored=true.

**Resultado obtenido**

El shelf del producto patrocinado muestra "Patrocinado" debajo del nombre.

**Evidencia**

![Paso 2 — mobile](<B2C-1142 Evidencias/B2C-1142-p02-mobile.png>)

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
  "suite": "B2C-1142",
  "tc_file": "Casos de Prueba/Ejecutados/SP1/B2C-59 Test Cases.xlsx",
  "title": "B2C-1142 - Re-test - El shelf de un producto patrocinado no muestra el texto \"Patrocinado\" en la PLP (TC-B2C59-D-004, M-004) - Evidencias QA",
  "updated_at": "2026-11-13"
 },
 "history": {
  "2026-11-13": [
   "B2C-1142",
   "TC-B2C59-D-004",
   "TC-B2C59-M-004"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-11-13",
   "expected": "El texto \"Patrocinado\" se muestra debajo del nombre del producto en el shelf cuando isSponsored=true.",
   "form_factor": "desktop",
   "id": "B2C-1142",
   "name": "[B2C-59] El shelf de un producto patrocinado no muestra el texto \"Patrocinado\" en la PLP (TC-B2C59-D-004, M-004)",
   "observed": "El shelf de Nacional | Choclillo vacuno Nacional al vacío 1.3 Kg (000000000000028597-KGV) muestra \"Patrocinado\" debajo del nombre, en Desktop 1280x900 (chromium) y en Mobile 390x844 (webkit).",
   "screenshots": [
    {
     "caption": "Paso 1 — desktop",
     "file": "B2C-1142-p01-desktop.png"
    },
    {
     "caption": "Paso 2 — mobile",
     "file": "B2C-1142-p02-mobile.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Ingresar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno (Desktop 1280x900 o Mobile 390x844).\n2. Ubicar el shelf de \"Nacional | Choclillo vacuno Nacional al vacío 1.3 Kg\".",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-13",
   "expected": "El texto \"Patrocinado\" se muestra debajo del nombre del producto en el shelf cuando isSponsored=true.",
   "form_factor": "desktop",
   "id": "TC-B2C59-D-004",
   "name": "Mostrar 'Patrocinado' cuando isSponsored=true (Desktop)",
   "observed": "El shelf del producto patrocinado muestra \"Patrocinado\" debajo del nombre.",
   "preconditions": "User type: Guest o Registrado.\nViewport Desktop 1280x900.\nProducto con atributo isSponsored=true configurado en BM/catálogo SFCC.",
   "screenshots": [
    {
     "caption": "Paso 1 — desktop",
     "file": "B2C-1142-p01-desktop.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Navegar a una PLP/SRP con un producto que tiene isSponsored=true, con viewport Desktop 1280x900.\n2. Localizar el shelf del producto.\n3. Verificar que el texto \"Patrocinado\" aparece debajo del nombre del producto.",
   "test_data": "- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)\n- {PLP_URL} = URL de categoría\n- {SKU_SPONSOR} = SKU Sponsor",
   "viewport": "1280x900"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-13",
   "expected": "El texto \"Patrocinado\" se muestra debajo del nombre del producto cuando isSponsored=true.",
   "form_factor": "mobile",
   "id": "TC-B2C59-M-004",
   "name": "Mostrar 'Patrocinado' cuando isSponsored=true (Mobile)",
   "observed": "El shelf del producto patrocinado muestra \"Patrocinado\" debajo del nombre.",
   "preconditions": "User type: Guest o Registrado.\nViewport Mobile 390x844.\nProducto con atributo isSponsored=true.",
   "screenshots": [
    {
     "caption": "Paso 2 — mobile",
     "file": "B2C-1142-p02-mobile.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Navegar a una PLP/SRP con un producto isSponsored=true, con viewport Mobile 390x844.\n2. Verificar que el texto \"Patrocinado\" aparece debajo del nombre del producto en el shelf.",
   "test_data": "- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)\n- {PLP_URL} = URL de categoría\n- {SKU_SPONSOR} = Producto con sponsor",
   "viewport": "390x844"
  }
 ]
}
-->
