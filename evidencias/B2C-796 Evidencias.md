# B2C-796 - Re-test - El icono de filtros no muestra el indicador de seleccion activa al cambiar el orden (TC-B2C87-D-016) - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-796 |
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
| Rechazado | 2 |
| **Total** | **2** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-13 | 2 | B2C-796, TC-B2C87-D-016 |

## Detalle por caso de prueba

### B2C-796 - [B2C-87] El icono de filtros no muestra el indicador de seleccion activa al cambiar el orden (TC-B2C87-D-016)

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-13 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Pasos ejecutados**

1. Abrir https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/search?q=carne en Desktop 1440x900 y observar el icono de 'Filtros' de la barra del listado, con el orden por defecto 'Recomendado'.
2. Pulsar el control de ordenamiento y elegir 'Precio más bajo', que es un criterio distinto al de por defecto.
3. Volver a observar el icono de 'Filtros'.

**Resultado esperado**

El icono de filtros muestra el indicador bullet de seleccion activa.

**Resultado obtenido**

En /search?q=carne, tras elegir 'Precio más bajo' en el control de ordenamiento, el ícono de Filtros se ve igual que con el orden por defecto: no aparece el indicador de selección activa (2 de 2 intentos). En la PLP de categoría (/category/carnes_cerdo) sí aparece el punto rojo, pero en la búsqueda no.

**Evidencia**

![B2C 796 SRP dropdown](<B2C-796 Evidencias/B2C-796-SRP-dropdown.png>)

![B2C 796 SRP2 dropdown](<B2C-796 Evidencias/B2C-796-SRP2-dropdown.png>)

![B2C 796 PLP dropdown](<B2C-796 Evidencias/B2C-796-PLP-dropdown.png>)

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

![B2C 796 SRP dropdown](<B2C-796 Evidencias/B2C-796-SRP-dropdown.png>)

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
  "suite": "B2C-796",
  "tc_file": "Casos de Prueba/Ejecutados/SP1/B2C-87 Test Cases.xlsx",
  "title": "B2C-796 - Re-test - El icono de filtros no muestra el indicador de seleccion activa al cambiar el orden (TC-B2C87-D-016) - Evidencias QA",
  "updated_at": "2026-11-13"
 },
 "history": {
  "2026-11-13": [
   "B2C-796",
   "TC-B2C87-D-016"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-11-13",
   "expected": "El icono de filtros muestra el indicador bullet de seleccion activa.",
   "form_factor": "desktop",
   "id": "B2C-796",
   "name": "[B2C-87] El icono de filtros no muestra el indicador de seleccion activa al cambiar el orden (TC-B2C87-D-016)",
   "observed": "En /search?q=carne, tras elegir 'Precio más bajo' en el control de ordenamiento, el ícono de Filtros se ve igual que con el orden por defecto: no aparece el indicador de selección activa (2 de 2 intentos). En la PLP de categoría (/category/carnes_cerdo) sí aparece el punto rojo, pero en la búsqueda no.",
   "screenshots": [
    {
     "caption": "B2C 796 SRP dropdown",
     "file": "B2C-796-SRP-dropdown.png"
    },
    {
     "caption": "B2C 796 SRP2 dropdown",
     "file": "B2C-796-SRP2-dropdown.png"
    },
    {
     "caption": "B2C 796 PLP dropdown",
     "file": "B2C-796-PLP-dropdown.png"
    }
   ],
   "status": "Rechazado",
   "steps": "1. Abrir https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/search?q=carne en Desktop 1440x900 y observar el icono de 'Filtros' de la barra del listado, con el orden por defecto 'Recomendado'.\n2. Pulsar el control de ordenamiento y elegir 'Precio más bajo', que es un criterio distinto al de por defecto.\n3. Volver a observar el icono de 'Filtros'.",
   "viewport": "1440x900"
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
  }
 ]
}
-->
