# Re-ejecución de casos con bug (B2C-69)

| Campo | Valor |
|---|---|
| Suite | B2C-69 |
| Última actualización | 2026-10-23 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | chromium |
| Origen de los TC | Casos de Prueba/Ejecutados/SP1/B2C-69 Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 2 |
| **Total** | **2** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-23 | 2 | TC-B2C69-D-005, TC-B2C69-M-004 |

## Detalle por caso de prueba

### TC-B2C69-D-005 - Cliente logueado sin membresia paga muestra el boton 'Suscribete a Unimarc' en Desktop

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-23 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-69.spec.ts |

**Precondiciones**

- User type: Cliente logueado, sin pertenecer a los Customer Groups Diamante/Platino/Oro/OroDiferencial
- Viewport: Desktop 1440x900
- Ubicacion: Home de la tienda

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K
- {COMPRADOR_SIN_MEMBRESIA_PASSWORD} = Avatar123.

**Pasos ejecutados**

1. Autenticarse con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}.
2. Navegar a cualquier pagina habilitada con viewport Desktop 1440x900.
3. Visualizar el header.

**Resultado esperado**

Se muestra el boton "Suscribete a Unimarc".

**Resultado obtenido**

Re-ejecutado el 2026-10-23 con login por correo + OTP: el cliente sin membresía ve el botón «Suscríbete a Unimarc» en el header de Desktop (antes veía «Ver mi suscripción», bug B2C-849).

**Observación**

Re-ejecutado el 2026-10-23 con login por correo + OTP: el cliente sin membresía ve el botón «Suscríbete a Unimarc» en el header de Desktop (antes veía «Ver mi suscripción», bug B2C-849).

**Evidencia**

![Paso 3 — header del cliente sin membresia](<B2C-69 Evidencias/TC-B2C69-D-005-p03-header-del-cliente-sin-membresia.png>)

![Estado final](<B2C-69 Evidencias/TC-B2C69-D-005.png>)

---

### TC-B2C69-M-004 - Cliente logueado sin membresia paga muestra el boton 'Suscribete a Unimarc' en Mobile

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-23 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-69.spec.ts |

**Precondiciones**

- User type: Cliente logueado, sin pertenecer a los Customer Groups Diamante/Platino/Oro/OroDiferencial
- Viewport: Mobile 390x844
- Ubicacion: Home de la tienda

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K
- {COMPRADOR_SIN_MEMBRESIA_PASSWORD} = Avatar123.

**Pasos ejecutados**

1. Autenticarse con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}.
2. Navegar a cualquier pagina habilitada con viewport Mobile 390x844.
3. Visualizar el header.

**Resultado esperado**

Se muestra el boton "Suscribete a Unimarc".

**Resultado obtenido**

Re-ejecutado el 2026-10-23 con login por correo + OTP: el cliente sin membresía ve el botón «Suscríbete a Unimarc» en el header de Mobile (antes veía «Ver mi suscripción», bug B2C-850).

**Observación**

Re-ejecutado el 2026-10-23 con login por correo + OTP: el cliente sin membresía ve el botón «Suscríbete a Unimarc» en el header de Mobile (antes veía «Ver mi suscripción», bug B2C-850).

**Evidencia**

![Paso 3 — header del cliente sin membresia](<B2C-69 Evidencias/TC-B2C69-M-004-p03-header-del-cliente-sin-membresia.png>)

![Estado final](<B2C-69 Evidencias/TC-B2C69-M-004.png>)

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
  "suite": "B2C-69",
  "tc_file": "Casos de Prueba/Ejecutados/SP1/B2C-69 Test Cases.xlsx",
  "title": "Re-ejecución de casos con bug (B2C-69)",
  "updated_at": "2026-10-23"
 },
 "history": {
  "2026-10-23": [
   "TC-B2C69-D-005",
   "TC-B2C69-M-004"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-10-23",
   "expected": "Se muestra el boton \"Suscribete a Unimarc\".",
   "form_factor": "desktop",
   "id": "TC-B2C69-D-005",
   "name": "Cliente logueado sin membresia paga muestra el boton 'Suscribete a Unimarc' en Desktop",
   "observation": "Re-ejecutado el 2026-10-23 con login por correo + OTP: el cliente sin membresía ve el botón «Suscríbete a Unimarc» en el header de Desktop (antes veía «Ver mi suscripción», bug B2C-849).",
   "observed": "Re-ejecutado el 2026-10-23 con login por correo + OTP: el cliente sin membresía ve el botón «Suscríbete a Unimarc» en el header de Desktop (antes veía «Ver mi suscripción», bug B2C-849).",
   "preconditions": "- User type: Cliente logueado, sin pertenecer a los Customer Groups Diamante/Platino/Oro/OroDiferencial\n- Viewport: Desktop 1440x900\n- Ubicacion: Home de la tienda",
   "screenshots": [
    {
     "caption": "Paso 3 — header del cliente sin membresia",
     "file": "TC-B2C69-D-005-p03-header-del-cliente-sin-membresia.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C69-D-005.png"
    }
   ],
   "spec": "tests/B2C-69.spec.ts",
   "status": "Aprobado",
   "steps": "1. Autenticarse con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}.\n2. Navegar a cualquier pagina habilitada con viewport Desktop 1440x900.\n3. Visualizar el header.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K\n- {COMPRADOR_SIN_MEMBRESIA_PASSWORD} = Avatar123.",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-23",
   "expected": "Se muestra el boton \"Suscribete a Unimarc\".",
   "form_factor": "mobile",
   "id": "TC-B2C69-M-004",
   "name": "Cliente logueado sin membresia paga muestra el boton 'Suscribete a Unimarc' en Mobile",
   "observation": "Re-ejecutado el 2026-10-23 con login por correo + OTP: el cliente sin membresía ve el botón «Suscríbete a Unimarc» en el header de Mobile (antes veía «Ver mi suscripción», bug B2C-850).",
   "observed": "Re-ejecutado el 2026-10-23 con login por correo + OTP: el cliente sin membresía ve el botón «Suscríbete a Unimarc» en el header de Mobile (antes veía «Ver mi suscripción», bug B2C-850).",
   "preconditions": "- User type: Cliente logueado, sin pertenecer a los Customer Groups Diamante/Platino/Oro/OroDiferencial\n- Viewport: Mobile 390x844\n- Ubicacion: Home de la tienda",
   "screenshots": [
    {
     "caption": "Paso 3 — header del cliente sin membresia",
     "file": "TC-B2C69-M-004-p03-header-del-cliente-sin-membresia.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C69-M-004.png"
    }
   ],
   "spec": "tests/B2C-69.spec.ts",
   "status": "Aprobado",
   "steps": "1. Autenticarse con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}.\n2. Navegar a cualquier pagina habilitada con viewport Mobile 390x844.\n3. Visualizar el header.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K\n- {COMPRADOR_SIN_MEMBRESIA_PASSWORD} = Avatar123.",
   "viewport": "390x844"
  }
 ]
}
-->
