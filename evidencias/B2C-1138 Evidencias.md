# B2C-1138 - Re-test - En Mobile la PLP no muestra la cantidad de productos junto al título (TC-B2C35-M-005, M-008, M-013) - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-1138 |
| Última actualización | 2026-11-13 |
| Ejecutado por | Victor Chirinos |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | webkit |
| Origen de los TC | Casos de Prueba/Ejecutados/SP1/B2C-35 Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 5 |
| **Total** | **5** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-13 | 5 | B2C-1138, TC-B2C35-M-005, TC-B2C35-M-008, TC-B2C35-M-013, TC-B2C77-M-015 |

## Detalle por caso de prueba

### B2C-1138 - [B2C-35] En Mobile la PLP no muestra la cantidad de productos junto al título (TC-B2C35-M-005, M-008, M-013)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Pasos ejecutados**

1. En Mobile 390x844, ingresar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_cerdo.
2. Observar la cabecera de la PLP (breadcrumb, título 'Cerdo').
3. Tocar la píldora 'Chuleta' y observar la cabecera de la PLP N3.

**Resultado esperado**

Se muestra el título de la categoría destacado junto a la cantidad total de productos disponibles para la dirección o tienda activa. (TC-B2C35-M-008)

**Resultado obtenido**

La cabecera de la PLP muestra el título y la cantidad: "Cerdo 15 productos" en la N2 y "Chuleta 4 productos" al pasar a la N3. 2 de 2 intentos.

**Evidencia**

![Paso 1 — n2](<B2C-1138 Evidencias/B2C-1138-p01-n2.png>)

![Paso 2 — n3](<B2C-1138 Evidencias/B2C-1138-p02-n3.png>)

![Estado final](<B2C-1138 Evidencias/B2C-1138.png>)

---

### TC-B2C35-M-005 - Verificar que la PLP N2 muestra sus componentes en el orden definido [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | tests/B2C-35.spec.ts:705 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: PLP N2

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CATEGORY_N2_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_cerdo

**Pasos ejecutados**

1. El usuario ingresa a {CATEGORY_N2_URL}.
2. El sistema carga la PLP N2 con el listado de productos.
3. El usuario hace scroll desde el inicio hasta el final de la página.

**Resultado esperado**

Se muestran en orden: breadcrumb, banner principal (si está configurado), título + cantidad, Filtros, banners destacados (si hay), píldora "Todas" + píldoras de subcategorías, grilla de productos y componente SEO (si está configurado); no se muestra el dropdown "Ordenar por".

**Resultado obtenido**

La PLP N2 muestra sus componentes en orden, con título y cantidad de productos.

**Evidencia**

![Paso 2 — plp n2 cargada](<B2C-1138 Evidencias/TC-B2C35-M-005-p02-plp-n2-cargada.png>)

---

### TC-B2C35-M-008 - Verificar que la PLP muestra el título de la categoría y la cantidad de productos [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | tests/B2C-35.spec.ts:768 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: PLP N2

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CATEGORY_N2_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_cerdo

**Pasos ejecutados**

1. El usuario ingresa a {CATEGORY_N2_URL}.
2. El sistema carga la PLP N2 con el listado de productos.

**Resultado esperado**

Se muestra el título de la categoría destacado junto a la cantidad total de productos disponibles para la dirección o tienda activa.

**Resultado obtenido**

Se muestran el título de la categoría y la cantidad total de productos.

**Evidencia**

![Paso 2 — cabecera de la plp n2](<B2C-1138 Evidencias/TC-B2C35-M-008-p02-cabecera-de-la-plp-n2.png>)

---

### TC-B2C35-M-013 - Verificar que tocar una píldora N3 navega a su PLP y resetea los filtros [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | tests/B2C-35.spec.ts:837 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: PLP N2
- {CATEGORY_N2_URL} tiene subcategorías N3 activas

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CATEGORY_N2_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_cerdo

**Pasos ejecutados**

1. El usuario ingresa a {CATEGORY_N2_URL}.
2. El sistema carga la PLP N2 con el listado de productos.
3. El usuario aplica un filtro desde "Filtros".
4. El sistema muestra el listado filtrado.
5. El usuario toca la píldora de una subcategoría N3.
6. El sistema navega a la PLP N3 de esa subcategoría.

**Resultado esperado**

La URL, el título, el conteo y el breadcrumb (Inicio > N2 > N3) corresponden a la N3 y el panel de filtros queda sin filtros aplicados.

**Resultado obtenido**

Al navegar a la N3 el conteo se actualiza.

**Evidencia**

![Paso 4 — plp n2 con filtro ofertas aplicado](<B2C-1138 Evidencias/TC-B2C35-M-013-p04-plp-n2-con-filtro-ofertas-aplicado.png>)

![Paso 6 — panel de filtros de la n3 sin filtros](<B2C-1138 Evidencias/TC-B2C35-M-013-p06-panel-de-filtros-de-la-n3-sin-filtros.png>)

---

### TC-B2C77-M-015 - Verificar que el carrusel de la tab activa no supera el máximo de productos [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | tests/B2C-77.spec.ts:886 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El componente T4 está publicado en el Home

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL} desde el navegador del dispositivo móvil.
2. El sistema carga el Home con el componente Tabs + Carrusel (T4).
3. El usuario desliza el carrusel hasta el final y cuenta los productos.

**Resultado esperado**

El carrusel muestra como máximo 12 productos (valor por defecto) aunque la colección tenga más.

**Resultado obtenido**

El carrusel de la tab activa no supera el máximo de productos configurado.

**Evidencia**

![Paso 2 — tab amada masa activa](<B2C-1138 Evidencias/TC-B2C77-M-015-p02-tab-amada-masa-activa.png>)

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
  "suite": "B2C-1138",
  "tc_file": "Casos de Prueba/Ejecutados/SP1/B2C-35 Test Cases.xlsx",
  "title": "B2C-1138 - Re-test - En Mobile la PLP no muestra la cantidad de productos junto al título (TC-B2C35-M-005, M-008, M-013) - Evidencias QA",
  "updated_at": "2026-11-13"
 },
 "history": {
  "2026-11-13": [
   "B2C-1138",
   "TC-B2C35-M-005",
   "TC-B2C35-M-008",
   "TC-B2C35-M-013",
   "TC-B2C77-M-015"
  ]
 },
 "results": [
  {
   "browser": "webkit",
   "executed_at": "2026-11-13",
   "expected": "Se muestra el título de la categoría destacado junto a la cantidad total de productos disponibles para la dirección o tienda activa. (TC-B2C35-M-008)",
   "form_factor": "mobile",
   "id": "B2C-1138",
   "name": "[B2C-35] En Mobile la PLP no muestra la cantidad de productos junto al título (TC-B2C35-M-005, M-008, M-013)",
   "observed": "La cabecera de la PLP muestra el título y la cantidad: \"Cerdo 15 productos\" en la N2 y \"Chuleta 4 productos\" al pasar a la N3. 2 de 2 intentos.",
   "screenshots": [
    {
     "caption": "Paso 1 — n2",
     "file": "B2C-1138-p01-n2.png"
    },
    {
     "caption": "Paso 2 — n3",
     "file": "B2C-1138-p02-n3.png"
    },
    {
     "caption": "Estado final",
     "file": "B2C-1138.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. En Mobile 390x844, ingresar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_cerdo.\n2. Observar la cabecera de la PLP (breadcrumb, título 'Cerdo').\n3. Tocar la píldora 'Chuleta' y observar la cabecera de la PLP N3.",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-13",
   "expected": "Se muestran en orden: breadcrumb, banner principal (si está configurado), título + cantidad, Filtros, banners destacados (si hay), píldora \"Todas\" + píldoras de subcategorías, grilla de productos y componente SEO (si está configurado); no se muestra el dropdown \"Ordenar por\".",
   "form_factor": "mobile",
   "id": "TC-B2C35-M-005",
   "name": "Verificar que la PLP N2 muestra sus componentes en el orden definido [Mobile] [Guest]",
   "observed": "La PLP N2 muestra sus componentes en orden, con título y cantidad de productos.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: PLP N2",
   "screenshots": [
    {
     "caption": "Paso 2 — plp n2 cargada",
     "file": "TC-B2C35-M-005-p02-plp-n2-cargada.png"
    }
   ],
   "spec": "tests/B2C-35.spec.ts:705",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CATEGORY_N2_URL}.\n2. El sistema carga la PLP N2 con el listado de productos.\n3. El usuario hace scroll desde el inicio hasta el final de la página.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CATEGORY_N2_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_cerdo",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-13",
   "expected": "Se muestra el título de la categoría destacado junto a la cantidad total de productos disponibles para la dirección o tienda activa.",
   "form_factor": "mobile",
   "id": "TC-B2C35-M-008",
   "name": "Verificar que la PLP muestra el título de la categoría y la cantidad de productos [Mobile] [Guest]",
   "observed": "Se muestran el título de la categoría y la cantidad total de productos.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: PLP N2",
   "screenshots": [
    {
     "caption": "Paso 2 — cabecera de la plp n2",
     "file": "TC-B2C35-M-008-p02-cabecera-de-la-plp-n2.png"
    }
   ],
   "spec": "tests/B2C-35.spec.ts:768",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CATEGORY_N2_URL}.\n2. El sistema carga la PLP N2 con el listado de productos.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CATEGORY_N2_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_cerdo",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-13",
   "expected": "La URL, el título, el conteo y el breadcrumb (Inicio > N2 > N3) corresponden a la N3 y el panel de filtros queda sin filtros aplicados.",
   "form_factor": "mobile",
   "id": "TC-B2C35-M-013",
   "name": "Verificar que tocar una píldora N3 navega a su PLP y resetea los filtros [Mobile] [Guest]",
   "observed": "Al navegar a la N3 el conteo se actualiza.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: PLP N2\n- {CATEGORY_N2_URL} tiene subcategorías N3 activas",
   "screenshots": [
    {
     "caption": "Paso 4 — plp n2 con filtro ofertas aplicado",
     "file": "TC-B2C35-M-013-p04-plp-n2-con-filtro-ofertas-aplicado.png"
    },
    {
     "caption": "Paso 6 — panel de filtros de la n3 sin filtros",
     "file": "TC-B2C35-M-013-p06-panel-de-filtros-de-la-n3-sin-filtros.png"
    }
   ],
   "spec": "tests/B2C-35.spec.ts:837",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CATEGORY_N2_URL}.\n2. El sistema carga la PLP N2 con el listado de productos.\n3. El usuario aplica un filtro desde \"Filtros\".\n4. El sistema muestra el listado filtrado.\n5. El usuario toca la píldora de una subcategoría N3.\n6. El sistema navega a la PLP N3 de esa subcategoría.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CATEGORY_N2_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_cerdo",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-13",
   "expected": "El carrusel muestra como máximo 12 productos (valor por defecto) aunque la colección tenga más.",
   "form_factor": "mobile",
   "id": "TC-B2C77-M-015",
   "name": "Verificar que el carrusel de la tab activa no supera el máximo de productos [Mobile] [Guest]",
   "observed": "El carrusel de la tab activa no supera el máximo de productos configurado.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El componente T4 está publicado en el Home",
   "screenshots": [
    {
     "caption": "Paso 2 — tab amada masa activa",
     "file": "TC-B2C77-M-015-p02-tab-amada-masa-activa.png"
    }
   ],
   "spec": "tests/B2C-77.spec.ts:886",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL} desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con el componente Tabs + Carrusel (T4).\n3. El usuario desliza el carrusel hasta el final y cuenta los productos.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
   "viewport": "390x844"
  }
 ]
}
-->
