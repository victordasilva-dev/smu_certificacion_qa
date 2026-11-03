# B2C-101 - Tolerancia del buscador - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-101 |
| Última actualización | 2026-11-03 |
| Ejecutado por | Victor Chirinos |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | webkit |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP1/B2C-101 WEB Test Cases.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 2 |
| Bloqueado Data | 2 |
| **Total** | **4** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-03 | 4 | TC-B2C-101-D-002, TC-B2C-101-D-005, TC-B2C-101-M-002, TC-B2C-101-M-005 |

## Detalle por caso de prueba

### TC-B2C-101-D-002 - Error tipográfico en término compuesto muestra productos del término corregido

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Duración | 15.0 s |
| Spec | tests/B2C-101.spec.ts:130 |

**Precondiciones**

Storefront Unimarc activo en Desktop 1280×900. Motor de búsqueda Einstein Search habilitado con diccionarios SFCC configurados. Catálogo de productos publicado. User type: Guest.

**Data utilizada**

- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {SEARCH_TYPO_MULTI}: paan molde
- {SRP_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/search?q=carne

**Pasos ejecutados**

1. Navegar al Home con viewport Desktop 1280×900.
2. Hacer clic en el campo de búsqueda en el header.
3. Ingresar el término compuesto con error: "paan de molde".
4. Presionar Enter o clic en el ícono de búsqueda.
5. Observar los resultados mostrados en la SRP.

**Resultado esperado**

La SRP muestra productos de "pan de molde". El sistema interpreta correctamente el término multi-token a pesar del error tipográfico en el primer token ("paan" → "pan"). No aparece mensaje de "Sin resultados".

**Resultado obtenido**

Desde el buscador del header, "paan de molde" abre la SRP "Resultado para “paan de molde”" con 103 productos, todos panes de molde (Bauducco, Ideal, Molenderos, Prosepan…); sin "Sin resultados".

**Observación**

Se usó el término del paso 3 ("paan de molde"); el token {SEARCH_TYPO_MULTI} vale "paan molde" y devuelve los mismos 103 productos.

**Evidencia**

![Paso 1 — home cargado](<B2C-101 Evidencias/TC-B2C-101-D-002-p01-home-cargado.png>)

![Paso 3 — termino paan de molde escrito en el buscador](<B2C-101 Evidencias/TC-B2C-101-D-002-p03-termino-paan-de-molde-escrito-en-el-buscador.png>)

![Paso 5 — srp resultante](<B2C-101 Evidencias/TC-B2C-101-D-002-p05-srp-resultante.png>)

![Estado final del caso](<B2C-101 Evidencias/TC-B2C-101-D-002.png>)

---

### TC-B2C-101-D-005 - Coincidencias exactas se priorizan sobre las parciales

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |

**Precondiciones**

Storefront Unimarc activo en Desktop 1280×900. Motor de búsqueda Einstein Search habilitado con diccionarios SFCC configurados. Catálogo de productos publicado. User type: Guest.

**Data utilizada**

- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {SEARCH_EXACT_002}: leche entera
- {SRP_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/search?q=carne

**Pasos ejecutados**

1. Navegar al Home con viewport Desktop 1280×900.
2. Hacer clic en el campo de búsqueda.
3. Ingresar el término "leche entera" (con productos de coincidencia exacta y parcial en catálogo).
4. Presionar Enter o clic en buscar.
5. Observar el orden de los productos en la SRP.
6. Identificar la posición de productos cuyo nombre es exactamente "Leche Entera" frente a productos con el fragmento (ej. "Leche Entera Descremada", "Leche Entera 2L").
7. Verificar que los de coincidencia exacta ocupan las primeras posiciones.

**Resultado esperado**

Los productos cuyo nombre coincide exactamente con "leche entera" aparecen en las primeras posiciones de la SRP. Los productos con coincidencia parcial (ej. que contienen el fragmento pero con palabras adicionales) aparecen después de los exactos. El orden refleja la priorización: exactas > parciales.

**Resultado obtenido**

La SRP de "leche entera" trae 9 productos y ninguno se llama exactamente "Leche Entera".

**Observación**

Causa: el caso necesita productos cuyo nombre sea exactamente "leche entera" y otros que solo contengan el fragmento, y en DEV "leche entera" trae 9 productos sin ninguno de nombre exacto (Leche Soprole entera natural 1 L, Leche entera Loncoleche sin tapa 1 L, Leche entera Fundo Río Alegre 1 L…): no hay exactas y parciales que ordenar (re-verificado el 2026-11-03). Acción requerida: cargar en el catálogo de DEV un producto llamado exactamente como {SEARCH_EXACT_002}, o declarar un término que tenga coincidencias exactas y parciales, y re-ejecutar.

**Evidencia**

![SRP de "leche entera" (exploración)](<B2C-101 Evidencias/TC-B2C-101-D-005.png>)

---

### TC-B2C-101-M-002 - Error tipográfico en término compuesto muestra productos del término corregido

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 15.0 s |
| Spec | tests/B2C-101.spec.ts:130 |

**Precondiciones**

Storefront Unimarc activo en Mobile 390×844. Motor de búsqueda Einstein Search habilitado con diccionarios SFCC configurados. Catálogo de productos publicado. User type: Guest.

**Data utilizada**

- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {SEARCH_TYPO_MULTI}: paan molde
- {SRP_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/search?q=carne

**Pasos ejecutados**

1. Navegar al Home con viewport Mobile 390×844.
2. Hacer clic en el ícono de búsqueda para abrir la vista full-screen.
3. Ingresar el término compuesto con error: "paan de molde".
4. Presionar el botón de búsqueda del teclado virtual.
5. Observar los resultados mostrados en la SRP.

**Resultado esperado**

La SRP muestra productos de "pan de molde". El sistema interpreta correctamente el término multi-token a pesar del error tipográfico en el primer token ("paan" → "pan"). No aparece mensaje de "Sin resultados".

**Resultado obtenido**

Desde la vista full-screen del buscador, "paan de molde" abre la SRP con 103 productos, todos panes de molde; sin "Sin resultados".

**Observación**

Se usó el término del paso 3 ("paan de molde"); el token {SEARCH_TYPO_MULTI} vale "paan molde" y devuelve los mismos 103 productos.

**Evidencia**

![Paso 1 — home cargado](<B2C-101 Evidencias/TC-B2C-101-M-002-p01-home-cargado.png>)

![Paso 3 — termino paan de molde escrito en el buscador](<B2C-101 Evidencias/TC-B2C-101-M-002-p03-termino-paan-de-molde-escrito-en-el-buscador.png>)

![Paso 5 — srp resultante](<B2C-101 Evidencias/TC-B2C-101-M-002-p05-srp-resultante.png>)

![Estado final del caso](<B2C-101 Evidencias/TC-B2C-101-M-002.png>)

---

### TC-B2C-101-M-005 - Coincidencias exactas se priorizan sobre las parciales

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

Storefront Unimarc activo en Mobile 390×844. Motor de búsqueda Einstein Search habilitado con diccionarios SFCC configurados. Catálogo de productos publicado. User type: Guest.

**Data utilizada**

- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {SEARCH_EXACT_002}: leche entera
- {SRP_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/search?q=carne

**Pasos ejecutados**

1. Navegar al Home con viewport Mobile 390×844.
2. Hacer clic en el ícono de búsqueda para abrir la vista full-screen.
3. Ingresar el término "leche entera" (con productos de coincidencia exacta y parcial en catálogo).
4. Presionar el botón de búsqueda del teclado virtual.
5. Observar el orden de los productos en la SRP.
6. Identificar la posición de productos cuyo nombre es exactamente "Leche Entera" frente a productos con el fragmento (ej. "Leche Entera Descremada", "Leche Entera 2L").
7. Verificar que los de coincidencia exacta ocupan las primeras posiciones.

**Resultado esperado**

Los productos cuyo nombre coincide exactamente con "leche entera" aparecen en las primeras posiciones de la SRP. Los productos con coincidencia parcial aparecen después de los exactos. El orden refleja la priorización: exactas > parciales.

**Resultado obtenido**

La SRP de "leche entera" trae 9 productos y ninguno se llama exactamente "Leche Entera".

**Observación**

Causa: el caso necesita productos cuyo nombre sea exactamente "leche entera" y otros que solo contengan el fragmento, y en DEV "leche entera" trae 9 productos sin ninguno de nombre exacto (Leche Soprole entera natural 1 L, Leche entera Loncoleche sin tapa 1 L, Leche entera Fundo Río Alegre 1 L…): no hay exactas y parciales que ordenar (re-verificado el 2026-11-03). Acción requerida: cargar en el catálogo de DEV un producto llamado exactamente como {SEARCH_EXACT_002}, o declarar un término que tenga coincidencias exactas y parciales, y re-ejecutar.

**Evidencia**

![SRP de "leche entera" (exploración)](<B2C-101 Evidencias/TC-B2C-101-M-005.png>)

---

<!-- qa-evidence-state
{
 "header": {
  "browsers": {
   "desktop": "chromium",
   "mobile": "webkit"
  },
  "environment": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
  "executed_by": "Victor Chirinos",
  "suite": "B2C-101",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP1/B2C-101 WEB Test Cases.xlsx",
  "title": "B2C-101 - Tolerancia del buscador - Evidencias QA",
  "updated_at": "2026-11-03"
 },
 "history": {
  "2026-11-03": [
   "TC-B2C-101-D-002",
   "TC-B2C-101-D-005",
   "TC-B2C-101-M-002",
   "TC-B2C-101-M-005"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "duration_s": 15,
   "executed_at": "2026-11-03",
   "expected": "La SRP muestra productos de \"pan de molde\". El sistema interpreta correctamente el término multi-token a pesar del error tipográfico en el primer token (\"paan\" → \"pan\"). No aparece mensaje de \"Sin resultados\".",
   "form_factor": "desktop",
   "id": "TC-B2C-101-D-002",
   "name": "Error tipográfico en término compuesto muestra productos del término corregido",
   "observation": "Se usó el término del paso 3 (\"paan de molde\"); el token {SEARCH_TYPO_MULTI} vale \"paan molde\" y devuelve los mismos 103 productos.",
   "observed": "Desde el buscador del header, \"paan de molde\" abre la SRP \"Resultado para “paan de molde”\" con 103 productos, todos panes de molde (Bauducco, Ideal, Molenderos, Prosepan…); sin \"Sin resultados\".",
   "preconditions": "Storefront Unimarc activo en Desktop 1280×900. Motor de búsqueda Einstein Search habilitado con diccionarios SFCC configurados. Catálogo de productos publicado. User type: Guest.",
   "screenshots": [
    {
     "caption": "Paso 1 — home cargado",
     "file": "TC-B2C-101-D-002-p01-home-cargado.png"
    },
    {
     "caption": "Paso 3 — termino paan de molde escrito en el buscador",
     "file": "TC-B2C-101-D-002-p03-termino-paan-de-molde-escrito-en-el-buscador.png"
    },
    {
     "caption": "Paso 5 — srp resultante",
     "file": "TC-B2C-101-D-002-p05-srp-resultante.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C-101-D-002.png"
    }
   ],
   "spec": "tests/B2C-101.spec.ts:130",
   "status": "Aprobado",
   "steps": "1. Navegar al Home con viewport Desktop 1280×900.\n2. Hacer clic en el campo de búsqueda en el header.\n3. Ingresar el término compuesto con error: \"paan de molde\".\n4. Presionar Enter o clic en el ícono de búsqueda.\n5. Observar los resultados mostrados en la SRP.",
   "test_data": "- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {SEARCH_TYPO_MULTI}: paan molde\n- {SRP_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/search?q=carne",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-03",
   "expected": "Los productos cuyo nombre coincide exactamente con \"leche entera\" aparecen en las primeras posiciones de la SRP. Los productos con coincidencia parcial (ej. que contienen el fragmento pero con palabras adicionales) aparecen después de los exactos. El orden refleja la priorización: exactas > parciales.",
   "form_factor": "desktop",
   "id": "TC-B2C-101-D-005",
   "name": "Coincidencias exactas se priorizan sobre las parciales",
   "observation": "Causa: el caso necesita productos cuyo nombre sea exactamente \"leche entera\" y otros que solo contengan el fragmento, y en DEV \"leche entera\" trae 9 productos sin ninguno de nombre exacto (Leche Soprole entera natural 1 L, Leche entera Loncoleche sin tapa 1 L, Leche entera Fundo Río Alegre 1 L…): no hay exactas y parciales que ordenar (re-verificado el 2026-11-03). Acción requerida: cargar en el catálogo de DEV un producto llamado exactamente como {SEARCH_EXACT_002}, o declarar un término que tenga coincidencias exactas y parciales, y re-ejecutar.",
   "observed": "La SRP de \"leche entera\" trae 9 productos y ninguno se llama exactamente \"Leche Entera\".",
   "preconditions": "Storefront Unimarc activo en Desktop 1280×900. Motor de búsqueda Einstein Search habilitado con diccionarios SFCC configurados. Catálogo de productos publicado. User type: Guest.",
   "screenshots": [
    {
     "caption": "SRP de \"leche entera\" (exploración)",
     "file": "TC-B2C-101-D-005.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Navegar al Home con viewport Desktop 1280×900.\n2. Hacer clic en el campo de búsqueda.\n3. Ingresar el término \"leche entera\" (con productos de coincidencia exacta y parcial en catálogo).\n4. Presionar Enter o clic en buscar.\n5. Observar el orden de los productos en la SRP.\n6. Identificar la posición de productos cuyo nombre es exactamente \"Leche Entera\" frente a productos con el fragmento (ej. \"Leche Entera Descremada\", \"Leche Entera 2L\").\n7. Verificar que los de coincidencia exacta ocupan las primeras posiciones.",
   "test_data": "- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {SEARCH_EXACT_002}: leche entera\n- {SRP_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/search?q=carne",
   "viewport": "1280x900"
  },
  {
   "browser": "webkit",
   "duration_s": 15,
   "executed_at": "2026-11-03",
   "expected": "La SRP muestra productos de \"pan de molde\". El sistema interpreta correctamente el término multi-token a pesar del error tipográfico en el primer token (\"paan\" → \"pan\"). No aparece mensaje de \"Sin resultados\".",
   "form_factor": "mobile",
   "id": "TC-B2C-101-M-002",
   "name": "Error tipográfico en término compuesto muestra productos del término corregido",
   "observation": "Se usó el término del paso 3 (\"paan de molde\"); el token {SEARCH_TYPO_MULTI} vale \"paan molde\" y devuelve los mismos 103 productos.",
   "observed": "Desde la vista full-screen del buscador, \"paan de molde\" abre la SRP con 103 productos, todos panes de molde; sin \"Sin resultados\".",
   "preconditions": "Storefront Unimarc activo en Mobile 390×844. Motor de búsqueda Einstein Search habilitado con diccionarios SFCC configurados. Catálogo de productos publicado. User type: Guest.",
   "screenshots": [
    {
     "caption": "Paso 1 — home cargado",
     "file": "TC-B2C-101-M-002-p01-home-cargado.png"
    },
    {
     "caption": "Paso 3 — termino paan de molde escrito en el buscador",
     "file": "TC-B2C-101-M-002-p03-termino-paan-de-molde-escrito-en-el-buscador.png"
    },
    {
     "caption": "Paso 5 — srp resultante",
     "file": "TC-B2C-101-M-002-p05-srp-resultante.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C-101-M-002.png"
    }
   ],
   "spec": "tests/B2C-101.spec.ts:130",
   "status": "Aprobado",
   "steps": "1. Navegar al Home con viewport Mobile 390×844.\n2. Hacer clic en el ícono de búsqueda para abrir la vista full-screen.\n3. Ingresar el término compuesto con error: \"paan de molde\".\n4. Presionar el botón de búsqueda del teclado virtual.\n5. Observar los resultados mostrados en la SRP.",
   "test_data": "- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {SEARCH_TYPO_MULTI}: paan molde\n- {SRP_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/search?q=carne",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-03",
   "expected": "Los productos cuyo nombre coincide exactamente con \"leche entera\" aparecen en las primeras posiciones de la SRP. Los productos con coincidencia parcial aparecen después de los exactos. El orden refleja la priorización: exactas > parciales.",
   "form_factor": "mobile",
   "id": "TC-B2C-101-M-005",
   "name": "Coincidencias exactas se priorizan sobre las parciales",
   "observation": "Causa: el caso necesita productos cuyo nombre sea exactamente \"leche entera\" y otros que solo contengan el fragmento, y en DEV \"leche entera\" trae 9 productos sin ninguno de nombre exacto (Leche Soprole entera natural 1 L, Leche entera Loncoleche sin tapa 1 L, Leche entera Fundo Río Alegre 1 L…): no hay exactas y parciales que ordenar (re-verificado el 2026-11-03). Acción requerida: cargar en el catálogo de DEV un producto llamado exactamente como {SEARCH_EXACT_002}, o declarar un término que tenga coincidencias exactas y parciales, y re-ejecutar.",
   "observed": "La SRP de \"leche entera\" trae 9 productos y ninguno se llama exactamente \"Leche Entera\".",
   "preconditions": "Storefront Unimarc activo en Mobile 390×844. Motor de búsqueda Einstein Search habilitado con diccionarios SFCC configurados. Catálogo de productos publicado. User type: Guest.",
   "screenshots": [
    {
     "caption": "SRP de \"leche entera\" (exploración)",
     "file": "TC-B2C-101-M-005.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Navegar al Home con viewport Mobile 390×844.\n2. Hacer clic en el ícono de búsqueda para abrir la vista full-screen.\n3. Ingresar el término \"leche entera\" (con productos de coincidencia exacta y parcial en catálogo).\n4. Presionar el botón de búsqueda del teclado virtual.\n5. Observar el orden de los productos en la SRP.\n6. Identificar la posición de productos cuyo nombre es exactamente \"Leche Entera\" frente a productos con el fragmento (ej. \"Leche Entera Descremada\", \"Leche Entera 2L\").\n7. Verificar que los de coincidencia exacta ocupan las primeras posiciones.",
   "test_data": "- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {SEARCH_EXACT_002}: leche entera\n- {SRP_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/search?q=carne",
   "viewport": "390x844"
  }
 ]
}
-->
