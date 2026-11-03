# Re-ejecución de casos con bug (B2C-87)

| Campo | Valor |
|---|---|
| Suite | B2C-87 |
| Última actualización | 2026-10-23 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | chromium |
| Origen de los TC | Casos de Prueba/Ejecutados/SP1/B2C-87 Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Rechazado | 3 |
| Aprobado | 1 |
| **Total** | **4** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-23 | 4 | TC-B2C87-D-003, TC-B2C87-D-005, TC-B2C87-D-023, TC-B2C87-M-002 |

## Detalle por caso de prueba

### TC-B2C87-D-003 - Opciones de ordenamiento nativo disponibles, en orden y de seleccion unica

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-23 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-87.spec.ts |

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

Obtenido: el selector ofrece 6 criterios; se suma «Mejor descuento» a los 5 declarados. Bug: B2C-792. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir corridas de QA, no por corrección).

**Observación**

Obtenido: el selector ofrece 6 criterios; se suma «Mejor descuento» a los 5 declarados. Bug: B2C-792. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir corridas de QA, no por corrección).

**Evidencia**

![Paso 1 — selector de ordenamiento abierto](<B2C-87 Evidencias/TC-B2C87-D-003-p01-selector-de-ordenamiento-abierto.png>)

![Paso 2 — listado de opciones ofrecidas](<B2C-87 Evidencias/TC-B2C87-D-003-p02-listado-de-opciones-ofrecidas.png>)

---

### TC-B2C87-D-005 - Seleccion y confirmacion del orden desde el Dropdown 'Ordenar por' en Desktop

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-23 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-87.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Required data state: Dropdown 'Ordenar por' desplegado

**Data utilizada**

- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)
- {SRP_URL} = URL de resultado de búsqueda

**Pasos ejecutados**

1. Desplegar el Dropdown 'Ordenar por' en la PLP, en Desktop.
2. Seleccionar una opcion de orden.
3. Verificar el cierre del dropdown, el loading, el listado y la opcion mostrada en el dropdown.
4. Abrir el modal de filtros y verificar que refleja la misma seleccion.

**Resultado esperado**

El Dropdown se cierra; se muestra loading/skeleton; el listado se refresca ordenado; el Dropdown muestra la opcion seleccionada; el modal de filtros refleja la misma seleccion.

**Resultado obtenido**

Re-ejecutado el 2026-10-23: el dropdown se cierra, el listado se reordena, el dropdown muestra el criterio y el modal de filtros refleja la misma selección (antes no la reflejaba, bug B2C-795).

**Observación**

Re-ejecutado el 2026-10-23: el dropdown se cierra, el listado se reordena, el dropdown muestra el criterio y el modal de filtros refleja la misma selección (antes no la reflejaba, bug B2C-795).

**Evidencia**

![Paso 1 — dropdown ordenar por desplegado](<B2C-87 Evidencias/TC-B2C87-D-005-p01-dropdown-ordenar-por-desplegado.png>)

![Paso 2 — listado refrescado con el nuevo orden](<B2C-87 Evidencias/TC-B2C87-D-005-p02-listado-refrescado-con-el-nuevo-orden.png>)

![Paso 3 — modal de filtros abierto tras ordenar](<B2C-87 Evidencias/TC-B2C87-D-005-p03-modal-de-filtros-abierto-tras-ordenar.png>)

![Estado final](<B2C-87 Evidencias/TC-B2C87-D-005.png>)

---

### TC-B2C87-D-023 - Ordenamiento en SRP: mismas opciones y Recomendado por relevancia de busqueda

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-23 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-87.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: SRP con un termino de busqueda ingresado

**Data utilizada**

- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)
- {SRP_URL} = URL de resultado de búsqueda

**Pasos ejecutados**

1. Realizar una busqueda y acceder a la SRP resultante.
2. Abrir el selector de ordenamiento y verificar las opciones y su orden.
3. Seleccionar 'Recomendado' y confirmar.
4. Verificar que el orden resultante refleja la relevancia respecto al termino buscado.

**Resultado esperado**

Las opciones de ordenamiento en la SRP son las mismas y en el mismo orden que en PLP; 'Recomendado' ordena los resultados por relevancia respecto al termino de busqueda.

**Resultado obtenido**

Obtenido: la SRP ofrece 6 criterios; se suma «Mejor descuento» a los 5 declarados. Bug: B2C-792. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir corridas de QA, no por corrección).

**Observación**

Obtenido: la SRP ofrece 6 criterios; se suma «Mejor descuento» a los 5 declarados. Bug: B2C-792. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir corridas de QA, no por corrección).

**Evidencia**

![Paso 1 — srp del termino buscado](<B2C-87 Evidencias/TC-B2C87-D-023-p01-srp-del-termino-buscado.png>)

![Paso 2 — opciones de ordenamiento en la srp](<B2C-87 Evidencias/TC-B2C87-D-023-p02-opciones-de-ordenamiento-en-la-srp.png>)

![Paso 3 — srp tras confirmar recomendado](<B2C-87 Evidencias/TC-B2C87-D-023-p03-srp-tras-confirmar-recomendado.png>)

---

### TC-B2C87-M-002 - Verificar que confirmar un orden desde el modal cierra el modal y reordena el listado [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-23 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-87.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: PLP

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CATEGORY_N2_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_cerdo

**Pasos ejecutados**

1. El usuario ingresa a {CATEGORY_N2_URL}.
2. El sistema carga la PLP N2 con el listado de productos.
3. El usuario toca el ícono de filtros.
4. El sistema abre el modal de filtros con la sección "Ordena tus productos".
5. El usuario toca la opción "Precio más bajo" en "Ordena tus productos".
6. El sistema marca la opción "Precio más bajo".
7. El usuario toca "Mostrar [N] productos".
8. El sistema cierra el modal, muestra el skeleton de carga y refresca el listado ordenado por "Precio más bajo".

**Resultado esperado**

El modal se cierra, se muestra el skeleton de carga y el listado queda ordenado de menor a mayor precio de venta.

**Resultado obtenido**

Obtenido: tras marcar «Precio más bajo» y confirmar, el modal se cierra y el listado queda ordenado, pero no se muestra skeleton de carga (con la red ralentizada 1,5 s). Bug: B2C-1145. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir corridas de QA, no por corrección).

**Observación**

Obtenido: tras marcar «Precio más bajo» y confirmar, el modal se cierra y el listado queda ordenado, pero no se muestra skeleton de carga (con la red ralentizada 1,5 s). Bug: B2C-1145. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir corridas de QA, no por corrección).

**Evidencia**

![Paso 6 — precio mas bajo marcado](<B2C-87 Evidencias/TC-B2C87-M-002-p06-precio-mas-bajo-marcado.png>)

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
  "suite": "B2C-87",
  "tc_file": "Casos de Prueba/Ejecutados/SP1/B2C-87 Test Cases.xlsx",
  "title": "Re-ejecución de casos con bug (B2C-87)",
  "updated_at": "2026-10-23"
 },
 "history": {
  "2026-10-23": [
   "TC-B2C87-D-003",
   "TC-B2C87-D-005",
   "TC-B2C87-D-023",
   "TC-B2C87-M-002"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-10-23",
   "expected": "Las opciones se muestran en el orden: \nRecomendado \n\nPensados para ti \n\nPrecio más bajo \n\nPrecio más alto \n\nMejor descuento\n\nMás vendido \nla seleccion es unica.",
   "form_factor": "desktop",
   "id": "TC-B2C87-D-003",
   "name": "Opciones de ordenamiento nativo disponibles, en orden y de seleccion unica",
   "observation": "Obtenido: el selector ofrece 6 criterios; se suma «Mejor descuento» a los 5 declarados. Bug: B2C-792. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir corridas de QA, no por corrección).",
   "observed": "Obtenido: el selector ofrece 6 criterios; se suma «Mejor descuento» a los 5 declarados. Bug: B2C-792. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir corridas de QA, no por corrección).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Required data state: selector de ordenamiento abierto",
   "screenshots": [
    {
     "caption": "Paso 1 — selector de ordenamiento abierto",
     "file": "TC-B2C87-D-003-p01-selector-de-ordenamiento-abierto.png"
    },
    {
     "caption": "Paso 2 — listado de opciones ofrecidas",
     "file": "TC-B2C87-D-003-p02-listado-de-opciones-ofrecidas.png"
    }
   ],
   "spec": "tests/B2C-87.spec.ts",
   "status": "Rechazado",
   "steps": "1. Abrir el selector de ordenamiento (dropdown o modal).\n2. Verificar el orden y el listado de opciones.\n3. Verificar que solo se puede seleccionar una opcion a la vez.",
   "test_data": "- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)\n- {SRP_URL} = URL de resultado de búsqueda",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-23",
   "expected": "El Dropdown se cierra; se muestra loading/skeleton; el listado se refresca ordenado; el Dropdown muestra la opcion seleccionada; el modal de filtros refleja la misma seleccion.",
   "form_factor": "desktop",
   "id": "TC-B2C87-D-005",
   "name": "Seleccion y confirmacion del orden desde el Dropdown 'Ordenar por' en Desktop",
   "observation": "Re-ejecutado el 2026-10-23: el dropdown se cierra, el listado se reordena, el dropdown muestra el criterio y el modal de filtros refleja la misma selección (antes no la reflejaba, bug B2C-795).",
   "observed": "Re-ejecutado el 2026-10-23: el dropdown se cierra, el listado se reordena, el dropdown muestra el criterio y el modal de filtros refleja la misma selección (antes no la reflejaba, bug B2C-795).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Required data state: Dropdown 'Ordenar por' desplegado",
   "screenshots": [
    {
     "caption": "Paso 1 — dropdown ordenar por desplegado",
     "file": "TC-B2C87-D-005-p01-dropdown-ordenar-por-desplegado.png"
    },
    {
     "caption": "Paso 2 — listado refrescado con el nuevo orden",
     "file": "TC-B2C87-D-005-p02-listado-refrescado-con-el-nuevo-orden.png"
    },
    {
     "caption": "Paso 3 — modal de filtros abierto tras ordenar",
     "file": "TC-B2C87-D-005-p03-modal-de-filtros-abierto-tras-ordenar.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C87-D-005.png"
    }
   ],
   "spec": "tests/B2C-87.spec.ts",
   "status": "Aprobado",
   "steps": "1. Desplegar el Dropdown 'Ordenar por' en la PLP, en Desktop.\n2. Seleccionar una opcion de orden.\n3. Verificar el cierre del dropdown, el loading, el listado y la opcion mostrada en el dropdown.\n4. Abrir el modal de filtros y verificar que refleja la misma seleccion.",
   "test_data": "- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)\n- {SRP_URL} = URL de resultado de búsqueda",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-23",
   "expected": "Las opciones de ordenamiento en la SRP son las mismas y en el mismo orden que en PLP; 'Recomendado' ordena los resultados por relevancia respecto al termino de busqueda.",
   "form_factor": "desktop",
   "id": "TC-B2C87-D-023",
   "name": "Ordenamiento en SRP: mismas opciones y Recomendado por relevancia de busqueda",
   "observation": "Obtenido: la SRP ofrece 6 criterios; se suma «Mejor descuento» a los 5 declarados. Bug: B2C-792. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir corridas de QA, no por corrección).",
   "observed": "Obtenido: la SRP ofrece 6 criterios; se suma «Mejor descuento» a los 5 declarados. Bug: B2C-792. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir corridas de QA, no por corrección).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: SRP con un termino de busqueda ingresado",
   "screenshots": [
    {
     "caption": "Paso 1 — srp del termino buscado",
     "file": "TC-B2C87-D-023-p01-srp-del-termino-buscado.png"
    },
    {
     "caption": "Paso 2 — opciones de ordenamiento en la srp",
     "file": "TC-B2C87-D-023-p02-opciones-de-ordenamiento-en-la-srp.png"
    },
    {
     "caption": "Paso 3 — srp tras confirmar recomendado",
     "file": "TC-B2C87-D-023-p03-srp-tras-confirmar-recomendado.png"
    }
   ],
   "spec": "tests/B2C-87.spec.ts",
   "status": "Rechazado",
   "steps": "1. Realizar una busqueda y acceder a la SRP resultante.\n2. Abrir el selector de ordenamiento y verificar las opciones y su orden.\n3. Seleccionar 'Recomendado' y confirmar.\n4. Verificar que el orden resultante refleja la relevancia respecto al termino buscado.",
   "test_data": "- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)\n- {SRP_URL} = URL de resultado de búsqueda",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-23",
   "expected": "El modal se cierra, se muestra el skeleton de carga y el listado queda ordenado de menor a mayor precio de venta.",
   "form_factor": "mobile",
   "id": "TC-B2C87-M-002",
   "name": "Verificar que confirmar un orden desde el modal cierra el modal y reordena el listado [Mobile] [Guest]",
   "observation": "Obtenido: tras marcar «Precio más bajo» y confirmar, el modal se cierra y el listado queda ordenado, pero no se muestra skeleton de carga (con la red ralentizada 1,5 s). Bug: B2C-1145. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir corridas de QA, no por corrección).",
   "observed": "Obtenido: tras marcar «Precio más bajo» y confirmar, el modal se cierra y el listado queda ordenado, pero no se muestra skeleton de carga (con la red ralentizada 1,5 s). Bug: B2C-1145. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir corridas de QA, no por corrección).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: PLP",
   "screenshots": [
    {
     "caption": "Paso 6 — precio mas bajo marcado",
     "file": "TC-B2C87-M-002-p06-precio-mas-bajo-marcado.png"
    }
   ],
   "spec": "tests/B2C-87.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {CATEGORY_N2_URL}.\n2. El sistema carga la PLP N2 con el listado de productos.\n3. El usuario toca el ícono de filtros.\n4. El sistema abre el modal de filtros con la sección \"Ordena tus productos\".\n5. El usuario toca la opción \"Precio más bajo\" en \"Ordena tus productos\".\n6. El sistema marca la opción \"Precio más bajo\".\n7. El usuario toca \"Mostrar [N] productos\".\n8. El sistema cierra el modal, muestra el skeleton de carga y refresca el listado ordenado por \"Precio más bajo\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CATEGORY_N2_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_cerdo",
   "viewport": "390x844"
  }
 ]
}
-->
