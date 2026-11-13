# B2C-761 - Re-test - PDP: si falla la carga del producto no se muestra la pantalla de error — la pagina queda vacia y sin opcion de reintentar - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-761 |
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
| Aprobado | 5 |
| **Total** | **5** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-13 | 5 | B2C-761, TC-B2C31-D-002, TC-B2C31-M-041, TC-B2C31-M-042, TC-B2C31-M-043 |

## Detalle por caso de prueba

### B2C-761 - PDP: si falla la carga del producto no se muestra la pantalla de error — la pagina queda vacia y sin opcion de reintentar

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Pasos ejecutados**

1. Entrar a una categoria del sitio, por ejemplo Carnes > Vacuno.
2. Provocar que el servicio de detalle de producto responda con un error de servidor (HTTP 500) para la siguiente consulta de producto.
3. Desde el listado, abrir la ficha de cualquier producto y esperar unos segundos.

**Resultado esperado**

Ante un fallo tecnico de carga se muestra el mensaje "Tuvimos un problema al cargar tu producto" junto al codigo de error, con los botones Reintentar e Ir a inicio; al pulsar Reintentar se repite el skeleton de carga y se vuelve a consultar el producto.

**Resultado obtenido**

Con el detalle de producto respondiendo 500, al abrir la ficha desde el listado se muestra "Tuvimos un problema al cargar tu producto", el código de error 500 y los botones Reintentar e Ir a inicio. 2 de 2 productos.

**Evidencia**

![Paso 1 — pdp error](<B2C-761 Evidencias/B2C-761-p01-pdp-error.png>)

![Paso 2 — pdp error](<B2C-761 Evidencias/B2C-761-p02-pdp-error.png>)

![Estado final](<B2C-761 Evidencias/B2C-761.png>)

---

### TC-B2C31-D-002 - La PDP muestra skeleton en la carga, contenido completo al exito, error con Reintentar en fallo, y 404 en URL invalida

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

- {BASE_URL} = URL base del storefront
- {PLP_URL} = URL de categoría

**Pasos ejecutados**

1. Ver el skeleton y la carga exitosa.
2. Forzar un fallo tecnico y usar Reintentar.
3. Ingresar a una URL de PDP inexistente y esperar/hacer clic.

**Resultado esperado**

Cada estado (skeleton, exito, error con reintento, 404 con redireccion) se comporta segun lo definido.

**Resultado obtenido**

Skeleton durante la carga, PDP completa al éxito, pantalla de error 500 con Reintentar que recupera la PDP, y 404 con redirección al Home.

**Observación**

El test() de la suite agota el tiempo (el nombre del producto ya no es un botón); se condujo con el CLI.

**Evidencia**

![Paso 1 — skeleton](<B2C-761 Evidencias/TC-B2C31-D-002-p01-skeleton.png>)

![Paso 2 — exito](<B2C-761 Evidencias/TC-B2C31-D-002-p02-exito.png>)

![Paso 3 — error](<B2C-761 Evidencias/TC-B2C31-D-002-p03-error.png>)

![Paso 4 — reintento](<B2C-761 Evidencias/TC-B2C31-D-002-p04-reintento.png>)

![Paso 5 — 404](<B2C-761 Evidencias/TC-B2C31-D-002-p05-404.png>)

---

### TC-B2C31-M-041 - Verificar que un fallo al cargar el producto muestra la pantalla de error [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: PDP
- DevTools (emulación Mobile 390x844) con bloqueo de la request de {PDP_API_ENDPOINT} (Network request blocking)

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {PDP_API_ENDPOINT} = TBD
- {SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a la PDP de {SKU_VALID_001} ({BASE_URL}product/{SKU_VALID_001}).
2. El sistema muestra la imagen, "Tuvimos un problema al cargar tu producto", "Estamos trabajando para solucionarlo. Intenta nuevamente en unos segundos.", el código de error y los botones "Reintentar" e "Ir a inicio".

**Resultado esperado**

Se muestra la pantalla de error completa con código y los botones "Reintentar" e "Ir a inicio".

**Resultado obtenido**

Se muestra la pantalla de error completa con código y los botones Reintentar e Ir a inicio.

**Observación**

Data {PDP_API_ENDPOINT} pendiente: se usó el servicio de detalle de producto que documenta el bug B2C-761, abriendo la ficha desde el listado (por URL directa la PDP se arma en el servidor).

**Evidencia**

![Paso 1 — error](<B2C-761 Evidencias/TC-B2C31-M-041-p01-error.png>)

---

### TC-B2C31-M-042 - Verificar que "Reintentar" muestra el skeleton y vuelve a cargar el producto [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: PDP
- DevTools (emulación Mobile 390x844) con bloqueo de la request de {PDP_API_ENDPOINT} (Network request blocking)

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {PDP_API_ENDPOINT} = TBD
- {SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a la PDP de {SKU_VALID_001} ({BASE_URL}product/{SKU_VALID_001}).
2. El sistema muestra la pantalla de error de la PDP.
3. El usuario desactiva en DevTools el bloqueo de {PDP_API_ENDPOINT} y toca "Reintentar".
4. El sistema muestra el skeleton de la PDP y luego la PDP completa.

**Resultado esperado**

Tras tocar "Reintentar" se ve el skeleton y luego la PDP de {SKU_VALID_001}.

**Resultado obtenido**

Tras Reintentar se ve el skeleton y luego la PDP completa.

**Observación**

Data {PDP_API_ENDPOINT} pendiente: se usó el servicio que documenta el bug B2C-761.

**Evidencia**

![Paso 2 — skeleton](<B2C-761 Evidencias/TC-B2C31-M-042-p02-skeleton.png>)

![Paso 3 — pdp](<B2C-761 Evidencias/TC-B2C31-M-042-p03-pdp.png>)

---

### TC-B2C31-M-043 - Verificar que "Ir a inicio" de la pantalla de error lleva al Home [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: PDP
- DevTools (emulación Mobile 390x844) con bloqueo de la request de {PDP_API_ENDPOINT} (Network request blocking)

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {PDP_API_ENDPOINT} = TBD
- {SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a la PDP de {SKU_VALID_001} ({BASE_URL}product/{SKU_VALID_001}).
2. El sistema muestra la pantalla de error de la PDP.
3. El usuario toca "Ir a inicio".
4. El sistema redirige al Home ({BASE_URL}).

**Resultado esperado**

El usuario queda en el Home.

**Resultado obtenido**

Ir a inicio lleva al Home.

**Observación**

Data {PDP_API_ENDPOINT} pendiente: se usó el servicio que documenta el bug B2C-761.

**Evidencia**

![Paso 1 — error](<B2C-761 Evidencias/TC-B2C31-M-043-p01-error.png>)

![Paso 2 — home](<B2C-761 Evidencias/TC-B2C31-M-043-p02-home.png>)

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
  "suite": "B2C-761",
  "tc_file": "Casos de Prueba/Ejecutados/SP1/B2C-31 Test Cases.xlsx",
  "title": "B2C-761 - Re-test - PDP: si falla la carga del producto no se muestra la pantalla de error — la pagina queda vacia y sin opcion de reintentar - Evidencias QA",
  "updated_at": "2026-11-13"
 },
 "history": {
  "2026-11-13": [
   "B2C-761",
   "TC-B2C31-D-002",
   "TC-B2C31-M-041",
   "TC-B2C31-M-042",
   "TC-B2C31-M-043"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-11-13",
   "expected": "Ante un fallo tecnico de carga se muestra el mensaje \"Tuvimos un problema al cargar tu producto\" junto al codigo de error, con los botones Reintentar e Ir a inicio; al pulsar Reintentar se repite el skeleton de carga y se vuelve a consultar el producto.",
   "form_factor": "desktop",
   "id": "B2C-761",
   "name": "PDP: si falla la carga del producto no se muestra la pantalla de error — la pagina queda vacia y sin opcion de reintentar",
   "observed": "Con el detalle de producto respondiendo 500, al abrir la ficha desde el listado se muestra \"Tuvimos un problema al cargar tu producto\", el código de error 500 y los botones Reintentar e Ir a inicio. 2 de 2 productos.",
   "screenshots": [
    {
     "caption": "Paso 1 — pdp error",
     "file": "B2C-761-p01-pdp-error.png"
    },
    {
     "caption": "Paso 2 — pdp error",
     "file": "B2C-761-p02-pdp-error.png"
    },
    {
     "caption": "Estado final",
     "file": "B2C-761.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Entrar a una categoria del sitio, por ejemplo Carnes > Vacuno.\n2. Provocar que el servicio de detalle de producto responda con un error de servidor (HTTP 500) para la siguiente consulta de producto.\n3. Desde el listado, abrir la ficha de cualquier producto y esperar unos segundos.",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-13",
   "expected": "Cada estado (skeleton, exito, error con reintento, 404 con redireccion) se comporta segun lo definido.",
   "form_factor": "desktop",
   "id": "TC-B2C31-D-002",
   "name": "La PDP muestra skeleton en la carga, contenido completo al exito, error con Reintentar en fallo, y 404 en URL invalida",
   "observation": "El test() de la suite agota el tiempo (el nombre del producto ya no es un botón); se condujo con el CLI.",
   "observed": "Skeleton durante la carga, PDP completa al éxito, pantalla de error 500 con Reintentar que recupera la PDP, y 404 con redirección al Home.",
   "preconditions": "- Viewport: Desktop 1440x900",
   "screenshots": [
    {
     "caption": "Paso 1 — skeleton",
     "file": "TC-B2C31-D-002-p01-skeleton.png"
    },
    {
     "caption": "Paso 2 — exito",
     "file": "TC-B2C31-D-002-p02-exito.png"
    },
    {
     "caption": "Paso 3 — error",
     "file": "TC-B2C31-D-002-p03-error.png"
    },
    {
     "caption": "Paso 4 — reintento",
     "file": "TC-B2C31-D-002-p04-reintento.png"
    },
    {
     "caption": "Paso 5 — 404",
     "file": "TC-B2C31-D-002-p05-404.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Ver el skeleton y la carga exitosa.\n2. Forzar un fallo tecnico y usar Reintentar.\n3. Ingresar a una URL de PDP inexistente y esperar/hacer clic.",
   "test_data": "- {BASE_URL} = URL base del storefront\n- {PLP_URL} = URL de categoría",
   "viewport": "1440x900"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-13",
   "expected": "Se muestra la pantalla de error completa con código y los botones \"Reintentar\" e \"Ir a inicio\".",
   "form_factor": "mobile",
   "id": "TC-B2C31-M-041",
   "name": "Verificar que un fallo al cargar el producto muestra la pantalla de error [Mobile] [Guest]",
   "observation": "Data {PDP_API_ENDPOINT} pendiente: se usó el servicio de detalle de producto que documenta el bug B2C-761, abriendo la ficha desde el listado (por URL directa la PDP se arma en el servidor).",
   "observed": "Se muestra la pantalla de error completa con código y los botones Reintentar e Ir a inicio.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: PDP\n- DevTools (emulación Mobile 390x844) con bloqueo de la request de {PDP_API_ENDPOINT} (Network request blocking)",
   "screenshots": [
    {
     "caption": "Paso 1 — error",
     "file": "TC-B2C31-M-041-p01-error.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a la PDP de {SKU_VALID_001} ({BASE_URL}product/{SKU_VALID_001}).\n2. El sistema muestra la imagen, \"Tuvimos un problema al cargar tu producto\", \"Estamos trabajando para solucionarlo. Intenta nuevamente en unos segundos.\", el código de error y los botones \"Reintentar\" e \"Ir a inicio\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {PDP_API_ENDPOINT} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-13",
   "expected": "Tras tocar \"Reintentar\" se ve el skeleton y luego la PDP de {SKU_VALID_001}.",
   "form_factor": "mobile",
   "id": "TC-B2C31-M-042",
   "name": "Verificar que \"Reintentar\" muestra el skeleton y vuelve a cargar el producto [Mobile] [Guest]",
   "observation": "Data {PDP_API_ENDPOINT} pendiente: se usó el servicio que documenta el bug B2C-761.",
   "observed": "Tras Reintentar se ve el skeleton y luego la PDP completa.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: PDP\n- DevTools (emulación Mobile 390x844) con bloqueo de la request de {PDP_API_ENDPOINT} (Network request blocking)",
   "screenshots": [
    {
     "caption": "Paso 2 — skeleton",
     "file": "TC-B2C31-M-042-p02-skeleton.png"
    },
    {
     "caption": "Paso 3 — pdp",
     "file": "TC-B2C31-M-042-p03-pdp.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a la PDP de {SKU_VALID_001} ({BASE_URL}product/{SKU_VALID_001}).\n2. El sistema muestra la pantalla de error de la PDP.\n3. El usuario desactiva en DevTools el bloqueo de {PDP_API_ENDPOINT} y toca \"Reintentar\".\n4. El sistema muestra el skeleton de la PDP y luego la PDP completa.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {PDP_API_ENDPOINT} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-13",
   "expected": "El usuario queda en el Home.",
   "form_factor": "mobile",
   "id": "TC-B2C31-M-043",
   "name": "Verificar que \"Ir a inicio\" de la pantalla de error lleva al Home [Mobile] [Guest]",
   "observation": "Data {PDP_API_ENDPOINT} pendiente: se usó el servicio que documenta el bug B2C-761.",
   "observed": "Ir a inicio lleva al Home.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: PDP\n- DevTools (emulación Mobile 390x844) con bloqueo de la request de {PDP_API_ENDPOINT} (Network request blocking)",
   "screenshots": [
    {
     "caption": "Paso 1 — error",
     "file": "TC-B2C31-M-043-p01-error.png"
    },
    {
     "caption": "Paso 2 — home",
     "file": "TC-B2C31-M-043-p02-home.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a la PDP de {SKU_VALID_001} ({BASE_URL}product/{SKU_VALID_001}).\n2. El sistema muestra la pantalla de error de la PDP.\n3. El usuario toca \"Ir a inicio\".\n4. El sistema redirige al Home ({BASE_URL}).",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {PDP_API_ENDPOINT} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  }
 ]
}
-->
