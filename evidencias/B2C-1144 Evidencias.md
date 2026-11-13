# B2C-1144 - Re-test - Mis productos frecuentes: un error al recuperar c_myUsuals se muestra como "Todavía no tienes productos frecuentes", sin mensaje de error ni Reintentar - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-1144 |
| Última actualización | 2026-11-13 |
| Ejecutado por | Victor Chirinos |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | webkit |
| Origen de los TC | Casos de Prueba/Ejecutados/SP1/B2C-85 Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 2 |
| **Total** | **2** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-13 | 2 | B2C-1144, TC-B2C85-D-008 |

## Detalle por caso de prueba

### B2C-1144 - Mis productos frecuentes: un error al recuperar c_myUsuals se muestra como "Todavía no tienes productos frecuentes", sin mensaje de error ni Reintentar

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Pasos ejecutados**

1. Iniciar sesión con el cliente.
2. Hacer que la petición del customer (shopper-customers/.../customers/{id}, la que trae el atributo c_myUsuals) responda con error 500.
3. Entrar a Mis productos frecuentes.

**Resultado esperado**

Se muestra el mensaje "No podemos cargar su información" junto con un botón "Reintentar".

**Resultado obtenido**

Con la cuenta compradora y la petición del customer (c_myUsuals) respondiendo 500, Mis productos frecuentes muestra "No podemos cargar su información" con los botones Reintentar e Ir a inicio. 2 de 2 intentos.

**Evidencia**

![Paso 1 — error simulado](<B2C-1144 Evidencias/B2C-1144-p01-error-simulado.png>)

![Paso 2 — error simulado](<B2C-1144 Evidencias/B2C-1144-p02-error-simulado.png>)

---

### TC-B2C85-D-008 - Error al cargar los datos del atributo myUsuals muestra mensaje y boton Reintentar

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Registrado
- Viewport: Desktop 1440x900
- Required data state: error simulado al recuperar el atributo c_myUsuals

**Data utilizada**

- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)
- {COMPRADOR_USER} = Usuario comprador
- {COMPRADOR_PASSWORD} = Contraseña de comprador

**Pasos ejecutados**

1. Simular un error al recuperar el atributo c_myUsuals del cliente.
2. Acceder (o intentar renderizar) la pagina de My Usuals.
3. Verificar el mensaje de error y el boton Reintentar.

**Resultado esperado**

Se muestra el mensaje 'No podemos cargar su informacion' junto con un boton Reintentar.

**Resultado obtenido**

Se muestra "No podemos cargar su información" junto con el botón Reintentar.

**Observación**

El test() de la suite no pasa del login (el modal ya no pide RUT); se condujo con el CLI con la cuenta {COMPRADOR_USER}.

**Evidencia**

![Paso 1 — error simulado](<B2C-1144 Evidencias/B2C-1144-p01-error-simulado.png>)

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
  "suite": "B2C-1144",
  "tc_file": "Casos de Prueba/Ejecutados/SP1/B2C-85 Test Cases.xlsx",
  "title": "B2C-1144 - Re-test - Mis productos frecuentes: un error al recuperar c_myUsuals se muestra como \"Todavía no tienes productos frecuentes\", sin mensaje de error ni Reintentar - Evidencias QA",
  "updated_at": "2026-11-13"
 },
 "history": {
  "2026-11-13": [
   "B2C-1144",
   "TC-B2C85-D-008"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-11-13",
   "expected": "Se muestra el mensaje \"No podemos cargar su información\" junto con un botón \"Reintentar\".",
   "form_factor": "desktop",
   "id": "B2C-1144",
   "name": "Mis productos frecuentes: un error al recuperar c_myUsuals se muestra como \"Todavía no tienes productos frecuentes\", sin mensaje de error ni Reintentar",
   "observed": "Con la cuenta compradora y la petición del customer (c_myUsuals) respondiendo 500, Mis productos frecuentes muestra \"No podemos cargar su información\" con los botones Reintentar e Ir a inicio. 2 de 2 intentos.",
   "screenshots": [
    {
     "caption": "Paso 1 — error simulado",
     "file": "B2C-1144-p01-error-simulado.png"
    },
    {
     "caption": "Paso 2 — error simulado",
     "file": "B2C-1144-p02-error-simulado.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Iniciar sesión con el cliente.\n2. Hacer que la petición del customer (shopper-customers/.../customers/{id}, la que trae el atributo c_myUsuals) responda con error 500.\n3. Entrar a Mis productos frecuentes.",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-13",
   "expected": "Se muestra el mensaje 'No podemos cargar su informacion' junto con un boton Reintentar.",
   "form_factor": "desktop",
   "id": "TC-B2C85-D-008",
   "name": "Error al cargar los datos del atributo myUsuals muestra mensaje y boton Reintentar",
   "observation": "El test() de la suite no pasa del login (el modal ya no pide RUT); se condujo con el CLI con la cuenta {COMPRADOR_USER}.",
   "observed": "Se muestra \"No podemos cargar su información\" junto con el botón Reintentar.",
   "preconditions": "- User type: Registrado\n- Viewport: Desktop 1440x900\n- Required data state: error simulado al recuperar el atributo c_myUsuals",
   "screenshots": [
    {
     "caption": "Paso 1 — error simulado",
     "file": "B2C-1144-p01-error-simulado.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Simular un error al recuperar el atributo c_myUsuals del cliente.\n2. Acceder (o intentar renderizar) la pagina de My Usuals.\n3. Verificar el mensaje de error y el boton Reintentar.",
   "test_data": "- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)\n- {COMPRADOR_USER} = Usuario comprador\n- {COMPRADOR_PASSWORD} = Contraseña de comprador",
   "viewport": "1440x900"
  }
 ]
}
-->
