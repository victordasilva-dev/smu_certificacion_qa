# B2C-762 - Re-test - PLP: tras tres reintentos con el servicio de productos caido, el error NAV-005 no redirige al Home - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-762 |
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
| Rechazado | 2 |
| **Total** | **2** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-13 | 2 | B2C-762, TC-B2C35-D-012 |

## Detalle por caso de prueba

### B2C-762 - PLP: tras tres reintentos con el servicio de productos caido, el error NAV-005 no redirige al Home

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-13 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Pasos ejecutados**

1. Entrar a la categoria Carnes > Cerdo.
2. Provocar que el servicio de busqueda de productos deje de responder (una demora superior a los 8 segundos que tolera la pagina).
3. Desde esa PLP, entrar a una de sus subcategorias haciendo clic en su pildora. Aparece la pantalla de error con el codigo NAV-005.
4. Con el servicio todavia caido, pulsar Reintentar tres veces.

**Resultado esperado**

Tras el tercer reintento sin respuesta del servicio, la PLP redirige al Home.

**Resultado obtenido**

Con el servicio de búsqueda demorado 12 s, al entrar a la subcategoría aparece el error NAV-005 con Reintentar. Tras el tercer Reintentar, y 15 s más de espera, la página sigue en la PLP (/category/carnes_cerdo_costillas-y-costillar) con el mismo error: no redirige al Home. 2 de 2 intentos (Chuleta y Costillas y costillar).

**Evidencia**

![Paso 1 — nav005](<B2C-762 Evidencias/B2C-762-p01-nav005.png>)

![Paso 2 — reintento 1](<B2C-762 Evidencias/B2C-762-p02-reintento-1.png>)

![Paso 4 — reintento 3](<B2C-762 Evidencias/B2C-762-p04-reintento-3.png>)

![Paso 5 — final](<B2C-762 Evidencias/B2C-762-p05-final.png>)

![Estado final](<B2C-762 Evidencias/B2C-762.png>)

---

### TC-B2C35-D-012 - La PLP muestra skeletons por componente y, tras 8s sin respuesta, el error NAV-005 con Reintentar

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-13 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- Viewport: Desktop 1440x900

**Data utilizada**

- {BASE_URL} = URL base del storefront

**Pasos ejecutados**

1. Observar los skeletons al navegar.
2. Simular una demora mayor a 8s.
3. Hacer clic en 'Reintentar' 3 veces.

**Resultado esperado**

Los skeletons se reemplazan de forma independiente; tras 8s aparece NAV-005; al 3er reintento redirige al Home.

**Resultado obtenido**

Se muestra NAV-005 con Reintentar, pero al tercer reintento no redirige al Home.

**Evidencia**

![Paso 1 — nav005](<B2C-762 Evidencias/B2C-762-p01-nav005.png>)

![Paso 5 — final](<B2C-762 Evidencias/B2C-762-p05-final.png>)

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
  "suite": "B2C-762",
  "tc_file": "Casos de Prueba/Ejecutados/SP1/B2C-35 Test Cases.xlsx",
  "title": "B2C-762 - Re-test - PLP: tras tres reintentos con el servicio de productos caido, el error NAV-005 no redirige al Home - Evidencias QA",
  "updated_at": "2026-11-13"
 },
 "history": {
  "2026-11-13": [
   "B2C-762",
   "TC-B2C35-D-012"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-11-13",
   "expected": "Tras el tercer reintento sin respuesta del servicio, la PLP redirige al Home.",
   "form_factor": "desktop",
   "id": "B2C-762",
   "name": "PLP: tras tres reintentos con el servicio de productos caido, el error NAV-005 no redirige al Home",
   "observed": "Con el servicio de búsqueda demorado 12 s, al entrar a la subcategoría aparece el error NAV-005 con Reintentar. Tras el tercer Reintentar, y 15 s más de espera, la página sigue en la PLP (/category/carnes_cerdo_costillas-y-costillar) con el mismo error: no redirige al Home. 2 de 2 intentos (Chuleta y Costillas y costillar).",
   "screenshots": [
    {
     "caption": "Paso 1 — nav005",
     "file": "B2C-762-p01-nav005.png"
    },
    {
     "caption": "Paso 2 — reintento 1",
     "file": "B2C-762-p02-reintento-1.png"
    },
    {
     "caption": "Paso 4 — reintento 3",
     "file": "B2C-762-p04-reintento-3.png"
    },
    {
     "caption": "Paso 5 — final",
     "file": "B2C-762-p05-final.png"
    },
    {
     "caption": "Estado final",
     "file": "B2C-762.png"
    }
   ],
   "status": "Rechazado",
   "steps": "1. Entrar a la categoria Carnes > Cerdo.\n2. Provocar que el servicio de busqueda de productos deje de responder (una demora superior a los 8 segundos que tolera la pagina).\n3. Desde esa PLP, entrar a una de sus subcategorias haciendo clic en su pildora. Aparece la pantalla de error con el codigo NAV-005.\n4. Con el servicio todavia caido, pulsar Reintentar tres veces.",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-13",
   "expected": "Los skeletons se reemplazan de forma independiente; tras 8s aparece NAV-005; al 3er reintento redirige al Home.",
   "form_factor": "desktop",
   "id": "TC-B2C35-D-012",
   "name": "La PLP muestra skeletons por componente y, tras 8s sin respuesta, el error NAV-005 con Reintentar",
   "observed": "Se muestra NAV-005 con Reintentar, pero al tercer reintento no redirige al Home.",
   "preconditions": "- Viewport: Desktop 1440x900",
   "screenshots": [
    {
     "caption": "Paso 1 — nav005",
     "file": "B2C-762-p01-nav005.png"
    },
    {
     "caption": "Paso 5 — final",
     "file": "B2C-762-p05-final.png"
    }
   ],
   "status": "Rechazado",
   "steps": "1. Observar los skeletons al navegar.\n2. Simular una demora mayor a 8s.\n3. Hacer clic en 'Reintentar' 3 veces.",
   "test_data": "- {BASE_URL} = URL base del storefront",
   "viewport": "1440x900"
  }
 ]
}
-->
