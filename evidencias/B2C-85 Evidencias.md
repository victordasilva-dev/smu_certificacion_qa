# B2C-85 - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-85 |
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
| Aprobado | 1 |
| **Total** | **1** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-13 | 1 | TC-B2C85-D-008 |

## Detalle por caso de prueba

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

![Paso 1 — error simulado](<B2C-85 Evidencias/B2C-1144-p01-error-simulado.png>)

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
  "suite": "B2C-85",
  "tc_file": "Casos de Prueba/Ejecutados/SP1/B2C-85 Test Cases.xlsx",
  "title": "B2C-85 - Evidencias QA",
  "updated_at": "2026-11-13"
 },
 "history": {
  "2026-11-13": [
   "TC-B2C85-D-008"
  ]
 },
 "results": [
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
