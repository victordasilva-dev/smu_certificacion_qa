# B2C-793 - Re-test - No se puede seleccionar un criterio de orden desde el modal de filtros (TC-B2C87-D-004, TC-B2C87-M-002) - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-793 |
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
| Rechazado | 3 |
| **Total** | **6** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-13 | 6 | B2C-793, TC-B2C87-D-004, TC-B2C87-D-011, TC-B2C87-D-012, TC-B2C87-D-013, TC-B2C87-M-002 |

## Detalle por caso de prueba

### B2C-793 - [B2C-87] No se puede seleccionar un criterio de orden desde el modal de filtros (TC-B2C87-D-004, TC-B2C87-M-002)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Pasos ejecutados**

1. Abrir https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/search?q=carne en Desktop 1440x900.
2. Pulsar 'Filtros' para abrir el modal de filtros.
3. En la sección 'Ordena tus productos', pulsar el criterio 'Precio más bajo'.
4. Pulsar el botón de confirmación del pie del modal.

**Resultado esperado**

La opcion queda marcada; el modal se cierra; se muestra loading/skeleton; el listado se refresca ordenado segun la seleccion; el Dropdown 'Ordenar por' muestra la opcion seleccionada. En Mobile (TC-B2C87-M-002): La opcion queda marcada; el modal se cierra; se muestra loading/skeleton; el listado se refresca ordenado segun la seleccion.

**Resultado obtenido**

Al pulsar 'Precio más bajo' en el modal la opción queda marcada y el pie pasa a 'Mostrar 73 productos'; al confirmar el modal se cierra, la URL incorpora sort=price-asc, el dropdown muestra 'Precio más bajo' y el listado queda de menor a mayor. Sin errores de JavaScript. Mismo resultado en Mobile 390x844 (PLP Cerdo). El refresco fue inmediato y no se alcanzó a ver un skeleton.

**Evidencia**

![Paso 1 — seleccion](<B2C-793 Evidencias/B2C-793-p01-seleccion.png>)

![Paso 2 — confirmado](<B2C-793 Evidencias/B2C-793-p02-confirmado.png>)

![Paso 2 — confirmado](<B2C-793 Evidencias/TC-B2C87-M-002-p02-confirmado.png>)

---

### TC-B2C87-D-004 - Seleccion y confirmacion del orden desde el modal de filtros en Desktop

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-87.spec.ts:237 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Required data state: modal de filtros abierto

**Data utilizada**

- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)
- {SRP_URL} = URL de resultado de búsqueda

**Pasos ejecutados**

1. Abrir el modal de filtros en Desktop.
2. Seleccionar una opcion de orden (ej. Precio mas bajo).
3. Hacer clic en 'Mostrar [N] productos'.
4. Verificar el cierre del modal, el listado y el Dropdown 'Ordenar por'.

**Resultado esperado**

La opcion queda marcada; el modal se cierra;; el listado se muestra ordenado segun la seleccion; el Dropdown 'Ordenar por' muestra la opcion seleccionada.

**Resultado obtenido**

La opción queda marcada; el modal se cierra; el listado se ordena según la selección y el dropdown muestra la opción.

**Evidencia**

![Paso 1 — seleccion](<B2C-793 Evidencias/B2C-793-p01-seleccion.png>)

![Paso 2 — confirmado](<B2C-793 Evidencias/B2C-793-p02-confirmado.png>)

---

### TC-B2C87-M-002 - Seleccion y confirmacion del orden desde el modal de filtros en Mobile

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | tests/B2C-87.spec.ts:626 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Required data state: modal de filtros abierto

**Data utilizada**

- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)
- {SRP_URL} = URL de resultado de búsqueda

**Pasos ejecutados**

1. Abrir el modal de filtros en Desktop.
2. Seleccionar una opcion de orden (ej. Precio mas bajo).
3. Hacer clic en 'Mostrar [N] productos'.
4. Verificar el cierre del modal, el listado y el Dropdown 'Ordenar por'.

**Resultado esperado**

La opcion queda marcada; el modal se cierra;; el listado se muestra ordenado segun la seleccion; el Dropdown 'Ordenar por' muestra la opcion seleccionada.

**Resultado obtenido**

En Mobile la opción queda marcada, el modal se cierra y el listado se ordena de menor a mayor.

**Evidencia**

![Paso 1 — seleccion](<B2C-793 Evidencias/TC-B2C87-M-002-p01-seleccion.png>)

![Paso 2 — confirmado](<B2C-793 Evidencias/TC-B2C87-M-002-p02-confirmado.png>)

---

### TC-B2C87-D-011 - Cancelacion sin aplicar: clic en X del modal

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-13 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Required data state: modal de filtros abierto, ordenamiento vigente distinto al seleccionado sin confirmar

**Data utilizada**

- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)
- {SRP_URL} = URL de resultado de búsqueda

**Pasos ejecutados**

1. Abrir el modal de filtros y seleccionar una opcion de orden distinta a la vigente, sin confirmar.
2. Hacer clic en el icono X del modal.
3. Verificar el ordenamiento vigente del listado.

**Resultado esperado**

El modal se cierra; el ordenamiento vigente del listado no cambia.

**Resultado obtenido**

Al pulsar un criterio en el modal el orden se aplica de inmediato (la URL pasa a sort=price-desc antes de confirmar), así que al cerrar con la X el listado queda con el nuevo orden.

**Observación**

Bug: B2C-1496.

**Evidencia**

![Paso 1 — seleccion sin confirmar](<B2C-793 Evidencias/TC-B2C87-D-011-p01-seleccion-sin-confirmar.png>)

![Paso 2 — cerrado](<B2C-793 Evidencias/TC-B2C87-D-011-p02-cerrado.png>)

---

### TC-B2C87-D-012 - Cancelacion sin aplicar: tap fuera del area del modal

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-13 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Required data state: modal de filtros abierto, ordenamiento vigente distinto al seleccionado sin confirmar

**Data utilizada**

- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)
- {SRP_URL} = URL de resultado de búsqueda

**Pasos ejecutados**

1. Abrir el modal de filtros y seleccionar una opcion de orden distinta a la vigente, sin confirmar.
2. Hacer clic fuera del area del modal.
3. Verificar el ordenamiento vigente del listado.

**Resultado esperado**

El modal se cierra; el ordenamiento vigente del listado no cambia.

**Resultado obtenido**

Al pulsar un criterio el orden se aplica de inmediato; al cerrar con un clic fuera del modal el listado queda con el nuevo orden.

**Observación**

Bug: B2C-1496.

**Evidencia**

![Paso 1 — seleccion sin confirmar](<B2C-793 Evidencias/TC-B2C87-D-012-p01-seleccion-sin-confirmar.png>)

![Paso 2 — cerrado](<B2C-793 Evidencias/TC-B2C87-D-012-p02-cerrado.png>)

---

### TC-B2C87-D-013 - Cancelacion sin aplicar: tecla Escape en Desktop

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-13 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Required data state: modal de filtros abierto, ordenamiento vigente distinto al seleccionado sin confirmar

**Data utilizada**

- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)
- {SRP_URL} = URL de resultado de búsqueda

**Pasos ejecutados**

1. Abrir el modal de filtros y seleccionar una opcion de orden distinta a la vigente, sin confirmar.
2. Presionar la tecla Escape.
3. Verificar el ordenamiento vigente del listado.

**Resultado esperado**

El modal se cierra; el ordenamiento vigente del listado no cambia.

**Resultado obtenido**

Al pulsar un criterio el orden se aplica de inmediato; al cerrar con Escape el listado queda con el nuevo orden.

**Observación**

Bug: B2C-1496.

**Evidencia**

![Paso 1 — seleccion sin confirmar](<B2C-793 Evidencias/TC-B2C87-D-013-p01-seleccion-sin-confirmar.png>)

![Paso 2 — cerrado](<B2C-793 Evidencias/TC-B2C87-D-013-p02-cerrado.png>)

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
  "suite": "B2C-793",
  "tc_file": "Casos de Prueba/Ejecutados/SP1/B2C-87 Test Cases.xlsx",
  "title": "B2C-793 - Re-test - No se puede seleccionar un criterio de orden desde el modal de filtros (TC-B2C87-D-004, TC-B2C87-M-002) - Evidencias QA",
  "updated_at": "2026-11-13"
 },
 "history": {
  "2026-11-13": [
   "B2C-793",
   "TC-B2C87-D-004",
   "TC-B2C87-D-011",
   "TC-B2C87-D-012",
   "TC-B2C87-D-013",
   "TC-B2C87-M-002"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-11-13",
   "expected": "La opcion queda marcada; el modal se cierra; se muestra loading/skeleton; el listado se refresca ordenado segun la seleccion; el Dropdown 'Ordenar por' muestra la opcion seleccionada. En Mobile (TC-B2C87-M-002): La opcion queda marcada; el modal se cierra; se muestra loading/skeleton; el listado se refresca ordenado segun la seleccion.",
   "form_factor": "desktop",
   "id": "B2C-793",
   "name": "[B2C-87] No se puede seleccionar un criterio de orden desde el modal de filtros (TC-B2C87-D-004, TC-B2C87-M-002)",
   "observed": "Al pulsar 'Precio más bajo' en el modal la opción queda marcada y el pie pasa a 'Mostrar 73 productos'; al confirmar el modal se cierra, la URL incorpora sort=price-asc, el dropdown muestra 'Precio más bajo' y el listado queda de menor a mayor. Sin errores de JavaScript. Mismo resultado en Mobile 390x844 (PLP Cerdo). El refresco fue inmediato y no se alcanzó a ver un skeleton.",
   "screenshots": [
    {
     "caption": "Paso 1 — seleccion",
     "file": "B2C-793-p01-seleccion.png"
    },
    {
     "caption": "Paso 2 — confirmado",
     "file": "B2C-793-p02-confirmado.png"
    },
    {
     "caption": "Paso 2 — confirmado",
     "file": "TC-B2C87-M-002-p02-confirmado.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Abrir https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/search?q=carne en Desktop 1440x900.\n2. Pulsar 'Filtros' para abrir el modal de filtros.\n3. En la sección 'Ordena tus productos', pulsar el criterio 'Precio más bajo'.\n4. Pulsar el botón de confirmación del pie del modal.",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-13",
   "expected": "La opcion queda marcada; el modal se cierra;; el listado se muestra ordenado segun la seleccion; el Dropdown 'Ordenar por' muestra la opcion seleccionada.",
   "form_factor": "desktop",
   "id": "TC-B2C87-D-004",
   "name": "Seleccion y confirmacion del orden desde el modal de filtros en Desktop",
   "observed": "La opción queda marcada; el modal se cierra; el listado se ordena según la selección y el dropdown muestra la opción.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Required data state: modal de filtros abierto",
   "screenshots": [
    {
     "caption": "Paso 1 — seleccion",
     "file": "B2C-793-p01-seleccion.png"
    },
    {
     "caption": "Paso 2 — confirmado",
     "file": "B2C-793-p02-confirmado.png"
    }
   ],
   "spec": "tests/B2C-87.spec.ts:237",
   "status": "Aprobado",
   "steps": "1. Abrir el modal de filtros en Desktop.\n2. Seleccionar una opcion de orden (ej. Precio mas bajo).\n3. Hacer clic en 'Mostrar [N] productos'.\n4. Verificar el cierre del modal, el listado y el Dropdown 'Ordenar por'.",
   "test_data": "- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)\n- {SRP_URL} = URL de resultado de búsqueda",
   "viewport": "1440x900"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-13",
   "expected": "La opcion queda marcada; el modal se cierra;; el listado se muestra ordenado segun la seleccion; el Dropdown 'Ordenar por' muestra la opcion seleccionada.",
   "form_factor": "mobile",
   "id": "TC-B2C87-M-002",
   "name": "Seleccion y confirmacion del orden desde el modal de filtros en Mobile",
   "observed": "En Mobile la opción queda marcada, el modal se cierra y el listado se ordena de menor a mayor.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Required data state: modal de filtros abierto",
   "screenshots": [
    {
     "caption": "Paso 1 — seleccion",
     "file": "TC-B2C87-M-002-p01-seleccion.png"
    },
    {
     "caption": "Paso 2 — confirmado",
     "file": "TC-B2C87-M-002-p02-confirmado.png"
    }
   ],
   "spec": "tests/B2C-87.spec.ts:626",
   "status": "Aprobado",
   "steps": "1. Abrir el modal de filtros en Desktop.\n2. Seleccionar una opcion de orden (ej. Precio mas bajo).\n3. Hacer clic en 'Mostrar [N] productos'.\n4. Verificar el cierre del modal, el listado y el Dropdown 'Ordenar por'.",
   "test_data": "- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)\n- {SRP_URL} = URL de resultado de búsqueda",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-13",
   "expected": "El modal se cierra; el ordenamiento vigente del listado no cambia.",
   "form_factor": "desktop",
   "id": "TC-B2C87-D-011",
   "name": "Cancelacion sin aplicar: clic en X del modal",
   "observation": "Bug: B2C-1496.",
   "observed": "Al pulsar un criterio en el modal el orden se aplica de inmediato (la URL pasa a sort=price-desc antes de confirmar), así que al cerrar con la X el listado queda con el nuevo orden.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Required data state: modal de filtros abierto, ordenamiento vigente distinto al seleccionado sin confirmar",
   "screenshots": [
    {
     "caption": "Paso 1 — seleccion sin confirmar",
     "file": "TC-B2C87-D-011-p01-seleccion-sin-confirmar.png"
    },
    {
     "caption": "Paso 2 — cerrado",
     "file": "TC-B2C87-D-011-p02-cerrado.png"
    }
   ],
   "status": "Rechazado",
   "steps": "1. Abrir el modal de filtros y seleccionar una opcion de orden distinta a la vigente, sin confirmar.\n2. Hacer clic en el icono X del modal.\n3. Verificar el ordenamiento vigente del listado.",
   "test_data": "- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)\n- {SRP_URL} = URL de resultado de búsqueda",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-13",
   "expected": "El modal se cierra; el ordenamiento vigente del listado no cambia.",
   "form_factor": "desktop",
   "id": "TC-B2C87-D-012",
   "name": "Cancelacion sin aplicar: tap fuera del area del modal",
   "observation": "Bug: B2C-1496.",
   "observed": "Al pulsar un criterio el orden se aplica de inmediato; al cerrar con un clic fuera del modal el listado queda con el nuevo orden.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Required data state: modal de filtros abierto, ordenamiento vigente distinto al seleccionado sin confirmar",
   "screenshots": [
    {
     "caption": "Paso 1 — seleccion sin confirmar",
     "file": "TC-B2C87-D-012-p01-seleccion-sin-confirmar.png"
    },
    {
     "caption": "Paso 2 — cerrado",
     "file": "TC-B2C87-D-012-p02-cerrado.png"
    }
   ],
   "status": "Rechazado",
   "steps": "1. Abrir el modal de filtros y seleccionar una opcion de orden distinta a la vigente, sin confirmar.\n2. Hacer clic fuera del area del modal.\n3. Verificar el ordenamiento vigente del listado.",
   "test_data": "- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)\n- {SRP_URL} = URL de resultado de búsqueda",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-13",
   "expected": "El modal se cierra; el ordenamiento vigente del listado no cambia.",
   "form_factor": "desktop",
   "id": "TC-B2C87-D-013",
   "name": "Cancelacion sin aplicar: tecla Escape en Desktop",
   "observation": "Bug: B2C-1496.",
   "observed": "Al pulsar un criterio el orden se aplica de inmediato; al cerrar con Escape el listado queda con el nuevo orden.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Required data state: modal de filtros abierto, ordenamiento vigente distinto al seleccionado sin confirmar",
   "screenshots": [
    {
     "caption": "Paso 1 — seleccion sin confirmar",
     "file": "TC-B2C87-D-013-p01-seleccion-sin-confirmar.png"
    },
    {
     "caption": "Paso 2 — cerrado",
     "file": "TC-B2C87-D-013-p02-cerrado.png"
    }
   ],
   "status": "Rechazado",
   "steps": "1. Abrir el modal de filtros y seleccionar una opcion de orden distinta a la vigente, sin confirmar.\n2. Presionar la tecla Escape.\n3. Verificar el ordenamiento vigente del listado.",
   "test_data": "- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)\n- {SRP_URL} = URL de resultado de búsqueda",
   "viewport": "1440x900"
  }
 ]
}
-->
