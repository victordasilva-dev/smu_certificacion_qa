# B2C-1211 - Re-test - "Ordena tus productos" muestra las opciones en un orden distinto al definido en la HU (TC-B2C87-D-003)) - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-1211 |
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
| Aprobado | 2 |
| **Total** | **2** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-13 | 2 | B2C-1211, TC-B2C87-D-003 |

## Detalle por caso de prueba

### B2C-1211 - [B2C-87] "Ordena tus productos" muestra las opciones en un orden distinto al definido en la HU (TC-B2C87-D-003))

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Pasos ejecutados**

1. Abrir la web y navegar a la PLP N2 Carnes > Cerdo (equivalente a /category/carnes_cerdo), o buscar 'leche' y tocar Buscar en el teclado.
2. Tocar el ícono de filtros ('Abrir filtros y ordenamiento').
3. Recorrer el carrusel de 'Ordena tus productos' de izquierda a derecha.

**Resultado esperado**

Se muestran las 6 opciones en el orden: Recomendado, Pensados para ti, Precio más bajo, Precio más alto, Mejor descuento, Más vendido.

**Resultado obtenido**

En la PLP Carnes > Cerdo y en la búsqueda de 'leche', 'Ordena tus productos' muestra Recomendado, Pensados para ti, Precio más bajo, Precio más alto, Mejor descuento y Más vendido, que es el orden del resultado esperado.

**Evidencia**

![B2C 1211 PLP](<B2C-1211 Evidencias/B2C-1211-PLP.png>)

![B2C 1211 SRP](<B2C-1211 Evidencias/B2C-1211-SRP.png>)

---

### TC-B2C87-D-003 - Opciones de ordenamiento nativo disponibles, en orden y de seleccion unica

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

1. Abrir el selector de ordenamiento (dropdown o modal).
2. Verificar el orden y el listado de opciones.
3. Verificar que solo se puede seleccionar una opcion a la vez.

**Resultado esperado**

Las opciones se muestran en el orden:

Recomendado

Pensados para ti

Precio más bajo

Precio más alto

Mejor descuento

Más vendido

la seleccion es unica.

**Resultado obtenido**

Las 6 opciones aparecen en el orden definido (Recomendado, Pensados para ti, Precio más bajo, Precio más alto, Mejor descuento, Más vendido) y la selección es única.

**Observación**

El test() de la suite espera el orden anterior de la HU; se condujo con el CLI contra el orden vigente de la planilla.

**Evidencia**

![B2C 1211 SRP](<B2C-1211 Evidencias/B2C-1211-SRP.png>)

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
  "suite": "B2C-1211",
  "tc_file": "Casos de Prueba/Ejecutados/SP1/B2C-87 Test Cases.xlsx",
  "title": "B2C-1211 - Re-test - \"Ordena tus productos\" muestra las opciones en un orden distinto al definido en la HU (TC-B2C87-D-003)) - Evidencias QA",
  "updated_at": "2026-11-13"
 },
 "history": {
  "2026-11-13": [
   "B2C-1211",
   "TC-B2C87-D-003"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-11-13",
   "expected": "Se muestran las 6 opciones en el orden: Recomendado, Pensados para ti, Precio más bajo, Precio más alto, Mejor descuento, Más vendido.",
   "form_factor": "desktop",
   "id": "B2C-1211",
   "name": "[B2C-87] \"Ordena tus productos\" muestra las opciones en un orden distinto al definido en la HU (TC-B2C87-D-003))",
   "observed": "En la PLP Carnes > Cerdo y en la búsqueda de 'leche', 'Ordena tus productos' muestra Recomendado, Pensados para ti, Precio más bajo, Precio más alto, Mejor descuento y Más vendido, que es el orden del resultado esperado.",
   "screenshots": [
    {
     "caption": "B2C 1211 PLP",
     "file": "B2C-1211-PLP.png"
    },
    {
     "caption": "B2C 1211 SRP",
     "file": "B2C-1211-SRP.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Abrir la web y navegar a la PLP N2 Carnes > Cerdo (equivalente a /category/carnes_cerdo), o buscar 'leche' y tocar Buscar en el teclado.\n2. Tocar el ícono de filtros ('Abrir filtros y ordenamiento').\n3. Recorrer el carrusel de 'Ordena tus productos' de izquierda a derecha.",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-13",
   "expected": "Las opciones se muestran en el orden: \nRecomendado \n\nPensados para ti \n\nPrecio más bajo \n\nPrecio más alto \n\nMejor descuento\n\nMás vendido \nla seleccion es unica.",
   "form_factor": "desktop",
   "id": "TC-B2C87-D-003",
   "name": "Opciones de ordenamiento nativo disponibles, en orden y de seleccion unica",
   "observation": "El test() de la suite espera el orden anterior de la HU; se condujo con el CLI contra el orden vigente de la planilla.",
   "observed": "Las 6 opciones aparecen en el orden definido (Recomendado, Pensados para ti, Precio más bajo, Precio más alto, Mejor descuento, Más vendido) y la selección es única.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Required data state: selector de ordenamiento abierto",
   "screenshots": [
    {
     "caption": "B2C 1211 SRP",
     "file": "B2C-1211-SRP.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Abrir el selector de ordenamiento (dropdown o modal).\n2. Verificar el orden y el listado de opciones.\n3. Verificar que solo se puede seleccionar una opcion a la vez.",
   "test_data": "- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)\n- {SRP_URL} = URL de resultado de búsqueda",
   "viewport": "1440x900"
  }
 ]
}
-->
