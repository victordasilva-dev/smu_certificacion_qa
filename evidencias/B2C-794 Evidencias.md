# B2C-794 - Re-test - Los productos con descuento se ordenan por su precio anterior y no por el de venta (TC-B2C87-D-008, TC-B2C87-D-009) - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-794 |
| Última actualización | 2026-11-13 |
| Ejecutado por | Victor Chirinos |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | webkit |
| Origen de los TC | Casos de Prueba/Ejecutados/SP1/B2C-87 Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 3 |
| **Total** | **3** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-13 | 3 | B2C-794, TC-B2C87-D-008, TC-B2C87-D-009 |

## Detalle por caso de prueba

### B2C-794 - [B2C-87] Los productos con descuento se ordenan por su precio anterior y no por el de venta (TC-B2C87-D-008, TC-B2C87-D-009)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Pasos ejecutados**

1. Abrir https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/search?q=carne en Desktop 1440x900.
2. Pulsar el control de ordenamiento de la barra y elegir 'Precio más bajo'.
3. Recorrer el listado hasta el producto 'Chuleta centro de cerdo Super Cerdo congelado 750 g', que se muestra con 10% de descuento: precio de venta $6.291, precio anterior $6.990.
4. Comparar su posición con la de los productos que lo rodean.

**Resultado esperado**

Los productos se ordenan por precio de venta de forma ascendente. Y en el sentido inverso (CA9): Los productos se ordenan por precio de venta de forma descendente.

**Resultado obtenido**

La Chuleta centro de cerdo congelada ya no tiene descuento, así que se verificó con los productos que hoy lo tienen. En 'Precio más bajo', Albóndigas Super Pollo ($1.867, antes $2.490) y Chuleta centro bandeja ($3.667, antes $4.890) quedan en la posición de su precio de venta. En 'Precio más alto' pasa lo mismo con Chuletas de cordero ($14.242), Tapapecho Brasil ($9.490), Abastero ($8.392) y Tapapecho Nacional ($8.312).

**Evidencia**

![Paso 1 — asc](<B2C-794 Evidencias/B2C-794-p01-asc.png>)

![Paso 2 — desc](<B2C-794 Evidencias/B2C-794-p02-desc.png>)

![Paso 3 — desc](<B2C-794 Evidencias/B2C-794-p03-desc.png>)

![Estado final](<B2C-794 Evidencias/B2C-794.png>)

---

### TC-B2C87-D-008 - Ordenamiento por 'Precio mas bajo' (ascendente)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Required data state: selector de ordenamiento abierto

**Data utilizada**

- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)
- {SRP_URL} = URL de resultado de búsqueda

**Pasos ejecutados**

1. Seleccionar la opcion 'Precio mas bajo' y confirmar.
2. Verificar el orden resultante de los precios de los productos.

**Resultado esperado**

Los productos se ordenan por precio de venta de forma ascendente.

**Resultado obtenido**

Los productos (incluidos los con descuento) se ordenan por precio de venta ascendente.

**Evidencia**

![Paso 1 — asc](<B2C-794 Evidencias/B2C-794-p01-asc.png>)

---

### TC-B2C87-D-009 - Ordenamiento por 'Precio mas alto' (descendente)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Required data state: selector de ordenamiento abierto

**Data utilizada**

- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)
- {SRP_URL} = URL de resultado de búsqueda

**Pasos ejecutados**

1. Seleccionar la opcion 'Precio mas alto' y confirmar.
2. Verificar el orden resultante de los precios de los productos.

**Resultado esperado**

Los productos se ordenan por precio de venta de forma descendente.

**Resultado obtenido**

Los productos (incluidos los con descuento) se ordenan por precio de venta descendente.

**Evidencia**

![Paso 2 — desc](<B2C-794 Evidencias/B2C-794-p02-desc.png>)

![Paso 3 — desc](<B2C-794 Evidencias/B2C-794-p03-desc.png>)

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
  "suite": "B2C-794",
  "tc_file": "Casos de Prueba/Ejecutados/SP1/B2C-87 Test Cases.xlsx",
  "title": "B2C-794 - Re-test - Los productos con descuento se ordenan por su precio anterior y no por el de venta (TC-B2C87-D-008, TC-B2C87-D-009) - Evidencias QA",
  "updated_at": "2026-11-13"
 },
 "history": {
  "2026-11-13": [
   "B2C-794",
   "TC-B2C87-D-008",
   "TC-B2C87-D-009"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-11-13",
   "expected": "Los productos se ordenan por precio de venta de forma ascendente. Y en el sentido inverso (CA9): Los productos se ordenan por precio de venta de forma descendente.",
   "form_factor": "desktop",
   "id": "B2C-794",
   "name": "[B2C-87] Los productos con descuento se ordenan por su precio anterior y no por el de venta (TC-B2C87-D-008, TC-B2C87-D-009)",
   "observed": "La Chuleta centro de cerdo congelada ya no tiene descuento, así que se verificó con los productos que hoy lo tienen. En 'Precio más bajo', Albóndigas Super Pollo ($1.867, antes $2.490) y Chuleta centro bandeja ($3.667, antes $4.890) quedan en la posición de su precio de venta. En 'Precio más alto' pasa lo mismo con Chuletas de cordero ($14.242), Tapapecho Brasil ($9.490), Abastero ($8.392) y Tapapecho Nacional ($8.312).",
   "screenshots": [
    {
     "caption": "Paso 1 — asc",
     "file": "B2C-794-p01-asc.png"
    },
    {
     "caption": "Paso 2 — desc",
     "file": "B2C-794-p02-desc.png"
    },
    {
     "caption": "Paso 3 — desc",
     "file": "B2C-794-p03-desc.png"
    },
    {
     "caption": "Estado final",
     "file": "B2C-794.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Abrir https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/search?q=carne en Desktop 1440x900.\n2. Pulsar el control de ordenamiento de la barra y elegir 'Precio más bajo'.\n3. Recorrer el listado hasta el producto 'Chuleta centro de cerdo Super Cerdo congelado 750 g', que se muestra con 10% de descuento: precio de venta $6.291, precio anterior $6.990.\n4. Comparar su posición con la de los productos que lo rodean.",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-13",
   "expected": "Los productos se ordenan por precio de venta de forma ascendente.",
   "form_factor": "desktop",
   "id": "TC-B2C87-D-008",
   "name": "Ordenamiento por 'Precio mas bajo' (ascendente)",
   "observed": "Los productos (incluidos los con descuento) se ordenan por precio de venta ascendente.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Required data state: selector de ordenamiento abierto",
   "screenshots": [
    {
     "caption": "Paso 1 — asc",
     "file": "B2C-794-p01-asc.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Seleccionar la opcion 'Precio mas bajo' y confirmar.\n2. Verificar el orden resultante de los precios de los productos.",
   "test_data": "- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)\n- {SRP_URL} = URL de resultado de búsqueda",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-13",
   "expected": "Los productos se ordenan por precio de venta de forma descendente.",
   "form_factor": "desktop",
   "id": "TC-B2C87-D-009",
   "name": "Ordenamiento por 'Precio mas alto' (descendente)",
   "observed": "Los productos (incluidos los con descuento) se ordenan por precio de venta descendente.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Required data state: selector de ordenamiento abierto",
   "screenshots": [
    {
     "caption": "Paso 2 — desc",
     "file": "B2C-794-p02-desc.png"
    },
    {
     "caption": "Paso 3 — desc",
     "file": "B2C-794-p03-desc.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Seleccionar la opcion 'Precio mas alto' y confirmar.\n2. Verificar el orden resultante de los precios de los productos.",
   "test_data": "- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)\n- {SRP_URL} = URL de resultado de búsqueda",
   "viewport": "1440x900"
  }
 ]
}
-->
