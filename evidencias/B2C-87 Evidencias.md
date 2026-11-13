# Re-ejecución de casos con bug (B2C-87)

| Campo | Valor |
|---|---|
| Suite | B2C-87 |
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
| Aprobado | 6 |
| Rechazado | 5 |
| **Total** | **11** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-13 | 9 | TC-B2C87-D-003, TC-B2C87-D-004, TC-B2C87-D-008, TC-B2C87-D-009, TC-B2C87-D-011, TC-B2C87-D-012, TC-B2C87-D-013, TC-B2C87-D-016, TC-B2C87-M-002 |
| 2026-10-23 | 4 | TC-B2C87-D-003, TC-B2C87-D-005, TC-B2C87-D-023, TC-B2C87-M-002 |

## Detalle por caso de prueba

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

![B2C 1211 SRP](<B2C-87 Evidencias/B2C-1211-SRP.png>)

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

![Paso 1 — seleccion](<B2C-87 Evidencias/TC-B2C87-M-002-p01-seleccion.png>)

![Paso 2 — confirmado](<B2C-87 Evidencias/TC-B2C87-M-002-p02-confirmado.png>)

---

### TC-B2C87-D-016 - El icono de filtros muestra indicador bullet cuando hay un ordenamiento distinto al default

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
- Required data state: ordenamiento distinto al default confirmado

**Data utilizada**

- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)
- {SRP_URL} = URL de resultado de búsqueda

**Pasos ejecutados**

1. Confirmar un criterio de ordenamiento distinto a 'Recomendado'.
2. Verificar el icono de filtros.

**Resultado esperado**

El icono de filtros muestra el indicador bullet de seleccion activa.

**Resultado obtenido**

En la búsqueda el ícono de filtros no muestra el indicador con un orden distinto al default (en la PLP sí).

**Evidencia**

![B2C 796 SRP dropdown](<B2C-87 Evidencias/B2C-796-SRP-dropdown.png>)

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

![Paso 1 — asc](<B2C-87 Evidencias/B2C-794-p01-asc.png>)

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

![Paso 2 — desc](<B2C-87 Evidencias/B2C-794-p02-desc.png>)

![Paso 3 — desc](<B2C-87 Evidencias/B2C-794-p03-desc.png>)

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

![Paso 1 — seleccion](<B2C-87 Evidencias/B2C-793-p01-seleccion.png>)

![Paso 2 — confirmado](<B2C-87 Evidencias/B2C-793-p02-confirmado.png>)

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

![Paso 1 — seleccion sin confirmar](<B2C-87 Evidencias/TC-B2C87-D-011-p01-seleccion-sin-confirmar.png>)

![Paso 2 — cerrado](<B2C-87 Evidencias/TC-B2C87-D-011-p02-cerrado.png>)

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

![Paso 1 — seleccion sin confirmar](<B2C-87 Evidencias/TC-B2C87-D-012-p01-seleccion-sin-confirmar.png>)

![Paso 2 — cerrado](<B2C-87 Evidencias/TC-B2C87-D-012-p02-cerrado.png>)

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

![Paso 1 — seleccion sin confirmar](<B2C-87 Evidencias/TC-B2C87-D-013-p01-seleccion-sin-confirmar.png>)

![Paso 2 — cerrado](<B2C-87 Evidencias/TC-B2C87-D-013-p02-cerrado.png>)

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
  "suite": "B2C-87",
  "tc_file": "Casos de Prueba/Ejecutados/SP1/B2C-87 Test Cases.xlsx",
  "title": "Re-ejecución de casos con bug (B2C-87)",
  "updated_at": "2026-11-13"
 },
 "history": {
  "2026-10-23": [
   "TC-B2C87-D-003",
   "TC-B2C87-D-005",
   "TC-B2C87-D-023",
   "TC-B2C87-M-002"
  ],
  "2026-11-13": [
   "TC-B2C87-D-003",
   "TC-B2C87-D-004",
   "TC-B2C87-D-008",
   "TC-B2C87-D-009",
   "TC-B2C87-D-011",
   "TC-B2C87-D-012",
   "TC-B2C87-D-013",
   "TC-B2C87-D-016",
   "TC-B2C87-M-002"
  ]
 },
 "results": [
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
   "expected": "El icono de filtros muestra el indicador bullet de seleccion activa.",
   "form_factor": "desktop",
   "id": "TC-B2C87-D-016",
   "name": "El icono de filtros muestra indicador bullet cuando hay un ordenamiento distinto al default",
   "observed": "En la búsqueda el ícono de filtros no muestra el indicador con un orden distinto al default (en la PLP sí).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Required data state: ordenamiento distinto al default confirmado",
   "screenshots": [
    {
     "caption": "B2C 796 SRP dropdown",
     "file": "B2C-796-SRP-dropdown.png"
    }
   ],
   "status": "Rechazado",
   "steps": "1. Confirmar un criterio de ordenamiento distinto a 'Recomendado'.\n2. Verificar el icono de filtros.",
   "test_data": "- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)\n- {SRP_URL} = URL de resultado de búsqueda",
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
