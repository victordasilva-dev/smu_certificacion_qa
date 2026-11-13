# B2C-1240 - Re-test - En la PDP Mobile, al tocar la pill "Datos de nutrición" el título de la sección queda oculto bajo la barra de pills (TC-B2C31-M-033) - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-1240 |
| Última actualización | 2026-11-13 |
| Ejecutado por | Victor Chirinos |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | webkit |
| Origen de los TC | Casos de Prueba/Ejecutados/SP1/B2C-31 Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 2 |
| **Total** | **2** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-13 | 2 | B2C-1240, TC-B2C31-M-033 |

## Detalle por caso de prueba

### B2C-1240 - [B2C-31] En la PDP Mobile, al tocar la pill "Datos de nutrición" el título de la sección queda oculto bajo la barra de pills (TC-B2C31-M-033)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Pasos ejecutados**

1. Ingresar a la PDP del producto 000000000000675191-UN (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/product/000000000000675191-UN) en un viewport Mobile de 390x844.
2. Tocar el tab "Información" y, como primera acción dentro del tab, tocar la pill "Datos de nutrición".

**Resultado esperado**

La pantalla queda al inicio de "Tabla nutricional" y esa pill cambia de color como activa.

**Resultado obtenido**

Como primera acción del tab Información, tocar "Datos de nutrición" deja la sección justo bajo la barra fija de pills (barra termina en 114 px) y la pill queda activa en rojo. Mismo resultado en 2 de 2 intentos.

**Evidencia**

![Paso 1 — tras pill](<B2C-1240 Evidencias/B2C-1240-p01-tras-pill.png>)

![Paso 2 — tras pill](<B2C-1240 Evidencias/B2C-1240-p02-tras-pill.png>)

![Estado final](<B2C-1240 Evidencias/B2C-1240.png>)

---

### TC-B2C31-M-033 - Verificar que tocar una pill ancla el scroll a su sección y la marca como activa [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | tests/B2C-31.spec.ts:1107 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: PDP
- {SKU_INFO_COMPLETA} tiene la sección "Tabla nutricional"

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {SKU_INFO_COMPLETA} = TBD

**Pasos ejecutados**

1. El usuario ingresa a la PDP de {SKU_INFO_COMPLETA} ({BASE_URL}product/{SKU_INFO_COMPLETA}).
2. El sistema carga la PDP de {SKU_INFO_COMPLETA}.
3. El usuario toca el tab "Información" y luego la pill "Tabla nutricional".
4. El sistema desplaza el contenido al inicio de la sección "Tabla nutricional" y marca esa pill como activa.

**Resultado esperado**

La pantalla queda al inicio de "Tabla nutricional" y esa pill cambia de color como activa.

**Resultado obtenido**

Al tocar la pill, el contenido se ancla a su sección y la pill cambia de color como activa.

**Evidencia**

![Paso 3 — tab informacion con sus pills](<B2C-1240 Evidencias/TC-B2C31-M-033-p03-tab-informacion-con-sus-pills.png>)

![Paso 4 — seccion al inicio con su pill activa](<B2C-1240 Evidencias/TC-B2C31-M-033-p04-seccion-al-inicio-con-su-pill-activa.png>)

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
  "suite": "B2C-1240",
  "tc_file": "Casos de Prueba/Ejecutados/SP1/B2C-31 Test Cases.xlsx",
  "title": "B2C-1240 - Re-test - En la PDP Mobile, al tocar la pill \"Datos de nutrición\" el título de la sección queda oculto bajo la barra de pills (TC-B2C31-M-033) - Evidencias QA",
  "updated_at": "2026-11-13"
 },
 "history": {
  "2026-11-13": [
   "B2C-1240",
   "TC-B2C31-M-033"
  ]
 },
 "results": [
  {
   "browser": "webkit",
   "executed_at": "2026-11-13",
   "expected": "La pantalla queda al inicio de \"Tabla nutricional\" y esa pill cambia de color como activa.",
   "form_factor": "mobile",
   "id": "B2C-1240",
   "name": "[B2C-31] En la PDP Mobile, al tocar la pill \"Datos de nutrición\" el título de la sección queda oculto bajo la barra de pills (TC-B2C31-M-033)",
   "observed": "Como primera acción del tab Información, tocar \"Datos de nutrición\" deja la sección justo bajo la barra fija de pills (barra termina en 114 px) y la pill queda activa en rojo. Mismo resultado en 2 de 2 intentos.",
   "screenshots": [
    {
     "caption": "Paso 1 — tras pill",
     "file": "B2C-1240-p01-tras-pill.png"
    },
    {
     "caption": "Paso 2 — tras pill",
     "file": "B2C-1240-p02-tras-pill.png"
    },
    {
     "caption": "Estado final",
     "file": "B2C-1240.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Ingresar a la PDP del producto 000000000000675191-UN (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/product/000000000000675191-UN) en un viewport Mobile de 390x844.\n2. Tocar el tab \"Información\" y, como primera acción dentro del tab, tocar la pill \"Datos de nutrición\".",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-13",
   "expected": "La pantalla queda al inicio de \"Tabla nutricional\" y esa pill cambia de color como activa.",
   "form_factor": "mobile",
   "id": "TC-B2C31-M-033",
   "name": "Verificar que tocar una pill ancla el scroll a su sección y la marca como activa [Mobile] [Guest]",
   "observed": "Al tocar la pill, el contenido se ancla a su sección y la pill cambia de color como activa.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: PDP\n- {SKU_INFO_COMPLETA} tiene la sección \"Tabla nutricional\"",
   "screenshots": [
    {
     "caption": "Paso 3 — tab informacion con sus pills",
     "file": "TC-B2C31-M-033-p03-tab-informacion-con-sus-pills.png"
    },
    {
     "caption": "Paso 4 — seccion al inicio con su pill activa",
     "file": "TC-B2C31-M-033-p04-seccion-al-inicio-con-su-pill-activa.png"
    }
   ],
   "spec": "tests/B2C-31.spec.ts:1107",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a la PDP de {SKU_INFO_COMPLETA} ({BASE_URL}product/{SKU_INFO_COMPLETA}).\n2. El sistema carga la PDP de {SKU_INFO_COMPLETA}.\n3. El usuario toca el tab \"Información\" y luego la pill \"Tabla nutricional\".\n4. El sistema desplaza el contenido al inicio de la sección \"Tabla nutricional\" y marca esa pill como activa.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {SKU_INFO_COMPLETA} = TBD",
   "viewport": "390x844"
  }
 ]
}
-->
