# B2C-763 - Re-test - PLP: scroll al volver desde la PDP - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-763 |
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
| Aprobado | 2 |
| **Total** | **2** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-13 | 2 | B2C-763, TC-B2C35-D-015 |

## Detalle por caso de prueba

### B2C-763 - PLP: al volver desde la PDP con el botón atrás, el scroll no se restaura a la posición previa

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

Re-test del bug B2C-763 (HU B2C-35), en LISTO EN DEVELOPMENT. Categoría Carnes > Cerdo (/category/carnes_cerdo), sin sesión.

**Data utilizada**

URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; categoría: Carnes > Cerdo

**Pasos ejecutados**

1. Entrar a la categoría Carnes > Cerdo.
2. Desplazarse por la grilla hasta dejar atrás las primeras filas de productos (posición 899).
3. Abrir la ficha de un producto visible en ese punto del listado (Filete de Cerdo Super Cerdo 900 g).
4. Volver al listado con el botón atrás del navegador.

**Resultado esperado**

La PLP no recarga desde el inicio, el scroll se restaura a la posición exacta previa y la tarjeta desde la que se navegó queda visible.

**Resultado obtenido**

Se salió del listado en la posición 899 y se volvió exactamente a 899 (antes del fix volvía a 365). La PLP no se recargó (el estado de la página se conservó) y la tarjeta del Filete de Cerdo quedó visible. En una segunda medición, desde la posición 200, volvió a 200.

**Observación**

Corregido: el defecto ya no se reproduce.

**Evidencia**

![Paso 2 — PLP Cerdo desplazada a 899](<B2C-763 Evidencias/B2C-763-p02-PLP-Cerdo-desplazada.png>)

![Paso 3 — PDP abierta desde la tarjeta](<B2C-763 Evidencias/B2C-763-p03-PDP-Filete-de-Cerdo-abierta.png>)

![Paso 4 — de vuelta en la PLP: scroll en 899, tarjeta visible](<B2C-763 Evidencias/B2C-763.png>)

---

### TC-B2C35-D-015 - Al volver de la PDP con atras del navegador, la PLP restaura el scroll exacto sin recargar

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- Viewport: Desktop 1440x900

**Data utilizada**

{BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; PLP usada: Carnes > Cerdo (/category/carnes_cerdo)

**Pasos ejecutados**

1. Hacer scroll y entrar a una PDP.
2. Presionar atras del navegador.

**Resultado esperado**

El scroll se restaura exactamente y la tarjeta queda visible, sin recargar toda la pagina.

**Resultado obtenido**

Con la PLP desplazada a 700 se abrió la ficha de "Lomo centro de cerdo Super Cerdo al vacío 800 g"; al volver con atrás, el scroll quedó en 700, la página no se recargó y la tarjeta quedó visible en la misma posición.

**Observación**

Re-test 2026-11-13 de B2C-763: corregido. Al volver de la PDP con atrás, el scroll se restauró exacto (700 → 700), sin recargar, con la tarjeta de origen visible. El test() del spec espera la URL /product/ y la PDP abre ahora como /<slug>/<SKU>.html: se condujo con el CLI.

**Evidencia**

![Paso 1 — PLP desplazada a 700](<B2C-763 Evidencias/TC-B2C35-D-015-p01-PLP-Cerdo-desplazada-a-700.png>)

![Paso 1 — PDP abierta desde la tarjeta](<B2C-763 Evidencias/TC-B2C35-D-015-p01-PDP-abierta-desde-la-tarjeta.png>)

![Paso 2 — PLP tras volver: scroll en 700 y tarjeta visible](<B2C-763 Evidencias/TC-B2C35-D-015-p02-PLP-tras-volver-con-atras.png>)

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
  "suite": "B2C-763",
  "tc_file": "Casos de Prueba/Ejecutados/SP1/B2C-35 Test Cases.xlsx",
  "title": "B2C-763 - Re-test - PLP: scroll al volver desde la PDP - Evidencias QA",
  "updated_at": "2026-11-13"
 },
 "history": {
  "2026-11-13": [
   "B2C-763",
   "TC-B2C35-D-015"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-11-13",
   "expected": "La PLP no recarga desde el inicio, el scroll se restaura a la posición exacta previa y la tarjeta desde la que se navegó queda visible.",
   "form_factor": "desktop",
   "id": "B2C-763",
   "name": "PLP: al volver desde la PDP con el botón atrás, el scroll no se restaura a la posición previa",
   "observation": "Corregido: el defecto ya no se reproduce.",
   "observed": "Se salió del listado en la posición 899 y se volvió exactamente a 899 (antes del fix volvía a 365). La PLP no se recargó (el estado de la página se conservó) y la tarjeta del Filete de Cerdo quedó visible. En una segunda medición, desde la posición 200, volvió a 200.",
   "preconditions": "Re-test del bug B2C-763 (HU B2C-35), en LISTO EN DEVELOPMENT. Categoría Carnes > Cerdo (/category/carnes_cerdo), sin sesión.",
   "screenshots": [
    {
     "caption": "Paso 2 — PLP Cerdo desplazada a 899",
     "file": "B2C-763-p02-PLP-Cerdo-desplazada.png"
    },
    {
     "caption": "Paso 3 — PDP abierta desde la tarjeta",
     "file": "B2C-763-p03-PDP-Filete-de-Cerdo-abierta.png"
    },
    {
     "caption": "Paso 4 — de vuelta en la PLP: scroll en 899, tarjeta visible",
     "file": "B2C-763.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Entrar a la categoría Carnes > Cerdo.\n2. Desplazarse por la grilla hasta dejar atrás las primeras filas de productos (posición 899).\n3. Abrir la ficha de un producto visible en ese punto del listado (Filete de Cerdo Super Cerdo 900 g).\n4. Volver al listado con el botón atrás del navegador.",
   "test_data": "URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; categoría: Carnes > Cerdo",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-13",
   "expected": "El scroll se restaura exactamente y la tarjeta queda visible, sin recargar toda la pagina.",
   "form_factor": "desktop",
   "id": "TC-B2C35-D-015",
   "name": "Al volver de la PDP con atras del navegador, la PLP restaura el scroll exacto sin recargar",
   "observation": "Re-test 2026-11-13 de B2C-763: corregido. Al volver de la PDP con atrás, el scroll se restauró exacto (700 → 700), sin recargar, con la tarjeta de origen visible. El test() del spec espera la URL /product/ y la PDP abre ahora como /<slug>/<SKU>.html: se condujo con el CLI.",
   "observed": "Con la PLP desplazada a 700 se abrió la ficha de \"Lomo centro de cerdo Super Cerdo al vacío 800 g\"; al volver con atrás, el scroll quedó en 700, la página no se recargó y la tarjeta quedó visible en la misma posición.",
   "preconditions": "- Viewport: Desktop 1440x900",
   "screenshots": [
    {
     "caption": "Paso 1 — PLP desplazada a 700",
     "file": "TC-B2C35-D-015-p01-PLP-Cerdo-desplazada-a-700.png"
    },
    {
     "caption": "Paso 1 — PDP abierta desde la tarjeta",
     "file": "TC-B2C35-D-015-p01-PDP-abierta-desde-la-tarjeta.png"
    },
    {
     "caption": "Paso 2 — PLP tras volver: scroll en 700 y tarjeta visible",
     "file": "TC-B2C35-D-015-p02-PLP-tras-volver-con-atras.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Hacer scroll y entrar a una PDP.\n2. Presionar atras del navegador.",
   "test_data": "{BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; PLP usada: Carnes > Cerdo (/category/carnes_cerdo)",
   "viewport": "1440x900"
  }
 ]
}
-->
