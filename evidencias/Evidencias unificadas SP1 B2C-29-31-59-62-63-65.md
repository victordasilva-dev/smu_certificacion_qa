# Evidencias QA unificadas - SP1 (B2C-29, 31, 59, 62, 63, 65) (Web)

Fecha: 2026-10-19 · Ejecutado por: Daniel Uñuruco · Ambiente: DEV (Unimarc)

## Resumen de la ejecución

Casos que estaban Pendiente en cada planilla y se ejecutaron hoy (B2C-65 incluye sus 29 casos).

| HU | Casos | Resultado |
|---|---|---|
| B2C-29 WEB | 10 | 2 Aprobado, 8 Bloqueado Data |
| B2C-31 | 5 | 3 Aprobado, 1 Rechazado (M-033), 1 Bloqueado Data |
| B2C-59 | 7 | 2 Rechazado (D-007, M-007), 5 Bloqueado Data |
| B2C-62 | 4 | 4 Bloqueado Data |
| B2C-63 | 14 | 14 Bloqueado Data |
| B2C-65 | 29 | 12 Aprobado, 2 Rechazado (D-009, M-009), 11 Bloqueado Data, 4 Bloqueado |
| **Total** | **69** | **17 Aprobado, 5 Rechazado, 43 Bloqueado Data, 4 Bloqueado** |

---

## B2C-29 - Home configurable desde Page Designer - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-29 |
| Última actualización | 2026-10-19 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | chromium |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP1/B2C-29 WEB Test Cases.xlsx |

### Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 8 |
| Aprobado | 2 |
| **Total** | **10** |

### Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-19 | 10 | TC-B2C29-D-013, TC-B2C29-D-014, TC-B2C29-D-015, TC-B2C29-D-016, TC-B2C29-D-017, TC-B2C29-M-015, TC-B2C29-M-016, TC-B2C29-M-017, TC-B2C29-M-018, TC-B2C29-M-019 |

### Detalle por caso de prueba

#### TC-B2C29-D-013 - Verificar que al seleccionar un banner con link configurado se redirige al destino definido en Page Designer [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Spec | tests/B2C-29.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- En Page Designer, {COMPONENTE_CON_LINK} está publicado en la Home con el link de redirección {URL_DESTINO_COMPONENTE}

**Data utilizada**

URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El sistema carga el Home con los componentes configurados en Page Designer.
3. El usuario ubica {COMPONENTE_CON_LINK} en la Home.
4. El usuario hace clic en {COMPONENTE_CON_LINK}.

**Resultado esperado**

El sistema navega a {URL_DESTINO_COMPONENTE} (misma pestaña/pantalla) y la página de destino carga completa, sin errores.

**Observación**

Causa: falta data en el Excel de data; {COMPONENTE_CON_LINK} y {URL_DESTINO_COMPONENTE} está en TBD. Acción: cargar el componente de Page Designer publicado en la Home (y su URL de destino si aplica) y re-ejecutar.

---

#### TC-B2C29-D-014 - Verificar que un componente sin link configurado no redirige ni genera error al seleccionarlo [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Spec | tests/B2C-29.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- En Page Designer, {COMPONENTE_SIN_LINK} está publicado en la Home sin link de redirección

**Data utilizada**

URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El sistema carga el Home con los componentes configurados en Page Designer.
3. El usuario hace clic en {COMPONENTE_SIN_LINK}.
4. El usuario revisa la pantalla.

**Resultado esperado**

El usuario permanece en la Home: no hay navegación, no se abre una página en blanco ni de error y el resto de los componentes sigue visible y operativo.

**Observación**

Causa: falta data en el Excel de data; {COMPONENTE_SIN_LINK} está en TBD. Acción: cargar el componente de Page Designer publicado en la Home (y su URL de destino si aplica) y re-ejecutar.

---

#### TC-B2C29-D-015 - Verificar que un componente con link incorrecto lleva a la página de no encontrado del sitio sin romper la navegación [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Spec | tests/B2C-29.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- En Page Designer, {COMPONENTE_LINK_INVALIDO} está publicado en la Home con un link a una URL inexistente del sitio

**Data utilizada**

URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El sistema carga el Home con los componentes configurados en Page Designer.
3. El usuario hace clic en {COMPONENTE_LINK_INVALIDO}.
4. El usuario revisa la pantalla resultante.
5. El usuario usa el botón Atrás para volver a la Home.

**Resultado esperado**

Se muestra la página de "no encontrado" del sitio (con header y navegación disponibles), no una pantalla en blanco ni un error técnico; al volver, la Home carga con normalidad.

**Observación**

Causa: falta data en el Excel de data; {COMPONENTE_LINK_INVALIDO} está en TBD. Acción: cargar el componente de Page Designer publicado en la Home (y su URL de destino si aplica) y re-ejecutar.

---

#### TC-B2C29-D-016 - Verificar que mientras carga la Home se muestra el skeleton y luego se reemplaza por los componentes [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 124.0 s |
| Spec | tests/B2C-29.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- DevTools abierto con throttling de red "Slow 3G" en la pestaña Network

**Data utilizada**

URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/. Red emulada Slow 3G (500 kbps, 400 ms).

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El usuario observa la Home mientras carga.
3. El usuario espera a que termine la carga.

**Resultado esperado**

Mientras carga se muestran placeholders tipo skeleton (bloques grises) en lugar de los componentes; al terminar, cada skeleton se reemplaza por su componente real, sin pantallas en blanco ni mensajes de error.

**Resultado obtenido**

Con la red Slow 3G la Home mostró bloques grises (skeletons) en lugar de los componentes; al terminar la carga ninguno quedó y se vieron los componentes reales, sin pantallas en blanco ni mensajes de error.

**Observación**

La red Slow 3G se emuló por CDP (no con DevTools abierto); resultado equivalente.

**Evidencia**

![Paso 2 — home cargando con skeletons](<B2C-29 Evidencias/TC-B2C29-D-016-p02-home-cargando-con-skeletons.png>)

![Paso 3 — home cargada con sus componentes reales](<B2C-29 Evidencias/TC-B2C29-D-016-p03-home-cargada-con-sus-componentes-reales.png>)

![Estado final](<B2C-29 Evidencias/TC-B2C29-D-016.png>)

---

#### TC-B2C29-D-017 - Verificar que un componente segmentado para usuarios logueados solo se muestra con sesión iniciada [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Spec | tests/B2C-29.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- En Page Designer, {COMPONENTE_SEGMENTO_LOGUEADO} está publicado en la Home con segmentación por estado de sesión (solo logueados)

**Data utilizada**

URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El sistema carga el Home con los componentes configurados en Page Designer.
3. El usuario revisa si se muestra {COMPONENTE_SEGMENTO_LOGUEADO}.
4. El usuario inicia sesión con la cuenta {USER_AUTH_001} y vuelve a la Home.
5. El usuario revisa si se muestra {COMPONENTE_SEGMENTO_LOGUEADO}.
6. El usuario cierra sesión y vuelve a la Home.

**Resultado esperado**

Como invitado {COMPONENTE_SEGMENTO_LOGUEADO} no se muestra y no queda espacio reservado; con sesión iniciada sí se muestra; al cerrar sesión vuelve a ocultarse.

**Observación**

Causa: falta data en el Excel de data; {COMPONENTE_SEGMENTO_LOGUEADO} está en TBD. Acción: cargar el componente de Page Designer publicado en la Home (y su URL de destino si aplica) y re-ejecutar.

---

#### TC-B2C29-M-015 - Verificar que al seleccionar un banner con link configurado se redirige al destino definido en Page Designer [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Spec | tests/B2C-29.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- En Page Designer, {COMPONENTE_CON_LINK} está publicado en la Home con el link de redirección {URL_DESTINO_COMPONENTE}

**Data utilizada**

URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home con los componentes configurados en Page Designer.
3. El usuario ubica {COMPONENTE_CON_LINK} en la Home.
4. El usuario toca {COMPONENTE_CON_LINK}.

**Resultado esperado**

El sistema navega a {URL_DESTINO_COMPONENTE} (misma pestaña/pantalla) y la página de destino carga completa, sin errores.

**Observación**

Causa: falta data en el Excel de data; {COMPONENTE_CON_LINK} y {URL_DESTINO_COMPONENTE} está en TBD. Acción: cargar el componente de Page Designer publicado en la Home (y su URL de destino si aplica) y re-ejecutar.

---

#### TC-B2C29-M-016 - Verificar que un componente sin link configurado no redirige ni genera error al seleccionarlo [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Spec | tests/B2C-29.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- En Page Designer, {COMPONENTE_SIN_LINK} está publicado en la Home sin link de redirección

**Data utilizada**

URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home con los componentes configurados en Page Designer.
3. El usuario toca {COMPONENTE_SIN_LINK}.
4. El usuario revisa la pantalla.

**Resultado esperado**

El usuario permanece en la Home: no hay navegación, no se abre una página en blanco ni de error y el resto de los componentes sigue visible y operativo.

**Observación**

Causa: falta data en el Excel de data; {COMPONENTE_SIN_LINK} está en TBD. Acción: cargar el componente de Page Designer publicado en la Home (y su URL de destino si aplica) y re-ejecutar.

---

#### TC-B2C29-M-017 - Verificar que un componente con link incorrecto lleva a la página de no encontrado del sitio sin romper la navegación [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Spec | tests/B2C-29.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- En Page Designer, {COMPONENTE_LINK_INVALIDO} está publicado en la Home con un link a una URL inexistente del sitio

**Data utilizada**

URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home con los componentes configurados en Page Designer.
3. El usuario toca {COMPONENTE_LINK_INVALIDO}.
4. El usuario revisa la pantalla resultante.
5. El usuario usa el botón Atrás para volver a la Home.

**Resultado esperado**

Se muestra la página de "no encontrado" del sitio (con header y navegación disponibles), no una pantalla en blanco ni un error técnico; al volver, la Home carga con normalidad.

**Observación**

Causa: falta data en el Excel de data; {COMPONENTE_LINK_INVALIDO} está en TBD. Acción: cargar el componente de Page Designer publicado en la Home (y su URL de destino si aplica) y re-ejecutar.

---

#### TC-B2C29-M-018 - Verificar que mientras carga la Home se muestra el skeleton y luego se reemplaza por los componentes [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Duración | 124.0 s |
| Spec | tests/B2C-29.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- DevTools abierto con throttling de red "Slow 3G" en la pestaña Network

**Data utilizada**

URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/. Red emulada Slow 3G (500 kbps, 400 ms).

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El usuario observa la Home mientras carga.
3. El usuario espera a que termine la carga.

**Resultado esperado**

Mientras carga se muestran placeholders tipo skeleton (bloques grises) en lugar de los componentes; al terminar, cada skeleton se reemplaza por su componente real, sin pantallas en blanco ni mensajes de error.

**Resultado obtenido**

Con la red Slow 3G la Home mostró bloques grises (skeletons) en lugar de los componentes; al terminar la carga ninguno quedó y se vieron los componentes reales, sin pantallas en blanco ni mensajes de error.

**Observación**

La red Slow 3G se emuló por CDP (no con DevTools abierto); resultado equivalente.

**Evidencia**

![Paso 2 — home cargando con skeletons](<B2C-29 Evidencias/TC-B2C29-M-018-p02-home-cargando-con-skeletons.png>)

![Paso 3 — home cargada con sus componentes reales](<B2C-29 Evidencias/TC-B2C29-M-018-p03-home-cargada-con-sus-componentes-reales.png>)

![Estado final](<B2C-29 Evidencias/TC-B2C29-M-018.png>)

---

#### TC-B2C29-M-019 - Verificar que un componente segmentado para usuarios logueados solo se muestra con sesión iniciada [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Spec | tests/B2C-29.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- En Page Designer, {COMPONENTE_SEGMENTO_LOGUEADO} está publicado en la Home con segmentación por estado de sesión (solo logueados)

**Data utilizada**

URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home con los componentes configurados en Page Designer.
3. El usuario revisa si se muestra {COMPONENTE_SEGMENTO_LOGUEADO}.
4. El usuario inicia sesión con la cuenta {USER_AUTH_001} y vuelve a la Home.
5. El usuario revisa si se muestra {COMPONENTE_SEGMENTO_LOGUEADO}.
6. El usuario cierra sesión y vuelve a la Home.

**Resultado esperado**

Como invitado {COMPONENTE_SEGMENTO_LOGUEADO} no se muestra y no queda espacio reservado; con sesión iniciada sí se muestra; al cerrar sesión vuelve a ocultarse.

**Observación**

Causa: falta data en el Excel de data; {COMPONENTE_SEGMENTO_LOGUEADO} está en TBD. Acción: cargar el componente de Page Designer publicado en la Home (y su URL de destino si aplica) y re-ejecutar.

---

<!-- qa-evidence-state
{
 "header": {
  "browsers": {
   "desktop": "chromium",
   "mobile": "chromium"
  },
  "environment": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-29",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP1/B2C-29 WEB Test Cases.xlsx",
  "title": "B2C-29 - Home configurable desde Page Designer - Evidencias QA",
  "updated_at": "2026-10-19"
 },
 "history": {
  "2026-10-19": [
   "TC-B2C29-D-013",
   "TC-B2C29-D-014",
   "TC-B2C29-D-015",
   "TC-B2C29-D-016",
   "TC-B2C29-D-017",
   "TC-B2C29-M-015",
   "TC-B2C29-M-016",
   "TC-B2C29-M-017",
   "TC-B2C29-M-018",
   "TC-B2C29-M-019"
  ]
 },
 "results": [
  {
   "executed_at": "2026-10-19",
   "expected": "El sistema navega a {URL_DESTINO_COMPONENTE} (misma pestaña/pantalla) y la página de destino carga completa, sin errores.",
   "form_factor": "desktop",
   "id": "TC-B2C29-D-013",
   "name": "Verificar que al seleccionar un banner con link configurado se redirige al destino definido en Page Designer [Desktop] [Guest]",
   "observation": "Causa: falta data en el Excel de data; {COMPONENTE_CON_LINK} y {URL_DESTINO_COMPONENTE} está en TBD. Acción: cargar el componente de Page Designer publicado en la Home (y su URL de destino si aplica) y re-ejecutar.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- En Page Designer, {COMPONENTE_CON_LINK} está publicado en la Home con el link de redirección {URL_DESTINO_COMPONENTE}",
   "spec": "tests/B2C-29.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El sistema carga el Home con los componentes configurados en Page Designer.\n3. El usuario ubica {COMPONENTE_CON_LINK} en la Home.\n4. El usuario hace clic en {COMPONENTE_CON_LINK}.",
   "test_data": "URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-19",
   "expected": "El usuario permanece en la Home: no hay navegación, no se abre una página en blanco ni de error y el resto de los componentes sigue visible y operativo.",
   "form_factor": "desktop",
   "id": "TC-B2C29-D-014",
   "name": "Verificar que un componente sin link configurado no redirige ni genera error al seleccionarlo [Desktop] [Guest]",
   "observation": "Causa: falta data en el Excel de data; {COMPONENTE_SIN_LINK} está en TBD. Acción: cargar el componente de Page Designer publicado en la Home (y su URL de destino si aplica) y re-ejecutar.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- En Page Designer, {COMPONENTE_SIN_LINK} está publicado en la Home sin link de redirección",
   "spec": "tests/B2C-29.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El sistema carga el Home con los componentes configurados en Page Designer.\n3. El usuario hace clic en {COMPONENTE_SIN_LINK}.\n4. El usuario revisa la pantalla.",
   "test_data": "URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-19",
   "expected": "Se muestra la página de \"no encontrado\" del sitio (con header y navegación disponibles), no una pantalla en blanco ni un error técnico; al volver, la Home carga con normalidad.",
   "form_factor": "desktop",
   "id": "TC-B2C29-D-015",
   "name": "Verificar que un componente con link incorrecto lleva a la página de no encontrado del sitio sin romper la navegación [Desktop] [Guest]",
   "observation": "Causa: falta data en el Excel de data; {COMPONENTE_LINK_INVALIDO} está en TBD. Acción: cargar el componente de Page Designer publicado en la Home (y su URL de destino si aplica) y re-ejecutar.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- En Page Designer, {COMPONENTE_LINK_INVALIDO} está publicado en la Home con un link a una URL inexistente del sitio",
   "spec": "tests/B2C-29.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El sistema carga el Home con los componentes configurados en Page Designer.\n3. El usuario hace clic en {COMPONENTE_LINK_INVALIDO}.\n4. El usuario revisa la pantalla resultante.\n5. El usuario usa el botón Atrás para volver a la Home.",
   "test_data": "URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 124,
   "executed_at": "2026-10-19",
   "expected": "Mientras carga se muestran placeholders tipo skeleton (bloques grises) en lugar de los componentes; al terminar, cada skeleton se reemplaza por su componente real, sin pantallas en blanco ni mensajes de error.",
   "form_factor": "desktop",
   "id": "TC-B2C29-D-016",
   "name": "Verificar que mientras carga la Home se muestra el skeleton y luego se reemplaza por los componentes [Desktop] [Guest]",
   "observation": "La red Slow 3G se emuló por CDP (no con DevTools abierto); resultado equivalente.",
   "observed": "Con la red Slow 3G la Home mostró bloques grises (skeletons) en lugar de los componentes; al terminar la carga ninguno quedó y se vieron los componentes reales, sin pantallas en blanco ni mensajes de error.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- DevTools abierto con throttling de red \"Slow 3G\" en la pestaña Network",
   "screenshots": [
    {
     "caption": "Paso 2 — home cargando con skeletons",
     "file": "TC-B2C29-D-016-p02-home-cargando-con-skeletons.png"
    },
    {
     "caption": "Paso 3 — home cargada con sus componentes reales",
     "file": "TC-B2C29-D-016-p03-home-cargada-con-sus-componentes-reales.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C29-D-016.png"
    }
   ],
   "spec": "tests/B2C-29.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El usuario observa la Home mientras carga.\n3. El usuario espera a que termine la carga.",
   "test_data": "URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/. Red emulada Slow 3G (500 kbps, 400 ms).",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-19",
   "expected": "Como invitado {COMPONENTE_SEGMENTO_LOGUEADO} no se muestra y no queda espacio reservado; con sesión iniciada sí se muestra; al cerrar sesión vuelve a ocultarse.",
   "form_factor": "desktop",
   "id": "TC-B2C29-D-017",
   "name": "Verificar que un componente segmentado para usuarios logueados solo se muestra con sesión iniciada [Desktop] [Guest]",
   "observation": "Causa: falta data en el Excel de data; {COMPONENTE_SEGMENTO_LOGUEADO} está en TBD. Acción: cargar el componente de Page Designer publicado en la Home (y su URL de destino si aplica) y re-ejecutar.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- En Page Designer, {COMPONENTE_SEGMENTO_LOGUEADO} está publicado en la Home con segmentación por estado de sesión (solo logueados)",
   "spec": "tests/B2C-29.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El sistema carga el Home con los componentes configurados en Page Designer.\n3. El usuario revisa si se muestra {COMPONENTE_SEGMENTO_LOGUEADO}.\n4. El usuario inicia sesión con la cuenta {USER_AUTH_001} y vuelve a la Home.\n5. El usuario revisa si se muestra {COMPONENTE_SEGMENTO_LOGUEADO}.\n6. El usuario cierra sesión y vuelve a la Home.",
   "test_data": "URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-19",
   "expected": "El sistema navega a {URL_DESTINO_COMPONENTE} (misma pestaña/pantalla) y la página de destino carga completa, sin errores.",
   "form_factor": "mobile",
   "id": "TC-B2C29-M-015",
   "name": "Verificar que al seleccionar un banner con link configurado se redirige al destino definido en Page Designer [Mobile] [Guest]",
   "observation": "Causa: falta data en el Excel de data; {COMPONENTE_CON_LINK} y {URL_DESTINO_COMPONENTE} está en TBD. Acción: cargar el componente de Page Designer publicado en la Home (y su URL de destino si aplica) y re-ejecutar.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- En Page Designer, {COMPONENTE_CON_LINK} está publicado en la Home con el link de redirección {URL_DESTINO_COMPONENTE}",
   "spec": "tests/B2C-29.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con los componentes configurados en Page Designer.\n3. El usuario ubica {COMPONENTE_CON_LINK} en la Home.\n4. El usuario toca {COMPONENTE_CON_LINK}.",
   "test_data": "URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-19",
   "expected": "El usuario permanece en la Home: no hay navegación, no se abre una página en blanco ni de error y el resto de los componentes sigue visible y operativo.",
   "form_factor": "mobile",
   "id": "TC-B2C29-M-016",
   "name": "Verificar que un componente sin link configurado no redirige ni genera error al seleccionarlo [Mobile] [Guest]",
   "observation": "Causa: falta data en el Excel de data; {COMPONENTE_SIN_LINK} está en TBD. Acción: cargar el componente de Page Designer publicado en la Home (y su URL de destino si aplica) y re-ejecutar.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- En Page Designer, {COMPONENTE_SIN_LINK} está publicado en la Home sin link de redirección",
   "spec": "tests/B2C-29.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con los componentes configurados en Page Designer.\n3. El usuario toca {COMPONENTE_SIN_LINK}.\n4. El usuario revisa la pantalla.",
   "test_data": "URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-19",
   "expected": "Se muestra la página de \"no encontrado\" del sitio (con header y navegación disponibles), no una pantalla en blanco ni un error técnico; al volver, la Home carga con normalidad.",
   "form_factor": "mobile",
   "id": "TC-B2C29-M-017",
   "name": "Verificar que un componente con link incorrecto lleva a la página de no encontrado del sitio sin romper la navegación [Mobile] [Guest]",
   "observation": "Causa: falta data en el Excel de data; {COMPONENTE_LINK_INVALIDO} está en TBD. Acción: cargar el componente de Page Designer publicado en la Home (y su URL de destino si aplica) y re-ejecutar.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- En Page Designer, {COMPONENTE_LINK_INVALIDO} está publicado en la Home con un link a una URL inexistente del sitio",
   "spec": "tests/B2C-29.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con los componentes configurados en Page Designer.\n3. El usuario toca {COMPONENTE_LINK_INVALIDO}.\n4. El usuario revisa la pantalla resultante.\n5. El usuario usa el botón Atrás para volver a la Home.",
   "test_data": "URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "duration_s": 124,
   "executed_at": "2026-10-19",
   "expected": "Mientras carga se muestran placeholders tipo skeleton (bloques grises) en lugar de los componentes; al terminar, cada skeleton se reemplaza por su componente real, sin pantallas en blanco ni mensajes de error.",
   "form_factor": "mobile",
   "id": "TC-B2C29-M-018",
   "name": "Verificar que mientras carga la Home se muestra el skeleton y luego se reemplaza por los componentes [Mobile] [Guest]",
   "observation": "La red Slow 3G se emuló por CDP (no con DevTools abierto); resultado equivalente.",
   "observed": "Con la red Slow 3G la Home mostró bloques grises (skeletons) en lugar de los componentes; al terminar la carga ninguno quedó y se vieron los componentes reales, sin pantallas en blanco ni mensajes de error.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- DevTools abierto con throttling de red \"Slow 3G\" en la pestaña Network",
   "screenshots": [
    {
     "caption": "Paso 2 — home cargando con skeletons",
     "file": "TC-B2C29-M-018-p02-home-cargando-con-skeletons.png"
    },
    {
     "caption": "Paso 3 — home cargada con sus componentes reales",
     "file": "TC-B2C29-M-018-p03-home-cargada-con-sus-componentes-reales.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C29-M-018.png"
    }
   ],
   "spec": "tests/B2C-29.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El usuario observa la Home mientras carga.\n3. El usuario espera a que termine la carga.",
   "test_data": "URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/. Red emulada Slow 3G (500 kbps, 400 ms).",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-19",
   "expected": "Como invitado {COMPONENTE_SEGMENTO_LOGUEADO} no se muestra y no queda espacio reservado; con sesión iniciada sí se muestra; al cerrar sesión vuelve a ocultarse.",
   "form_factor": "mobile",
   "id": "TC-B2C29-M-019",
   "name": "Verificar que un componente segmentado para usuarios logueados solo se muestra con sesión iniciada [Mobile] [Guest]",
   "observation": "Causa: falta data en el Excel de data; {COMPONENTE_SEGMENTO_LOGUEADO} está en TBD. Acción: cargar el componente de Page Designer publicado en la Home (y su URL de destino si aplica) y re-ejecutar.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- En Page Designer, {COMPONENTE_SEGMENTO_LOGUEADO} está publicado en la Home con segmentación por estado de sesión (solo logueados)",
   "spec": "tests/B2C-29.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con los componentes configurados en Page Designer.\n3. El usuario revisa si se muestra {COMPONENTE_SEGMENTO_LOGUEADO}.\n4. El usuario inicia sesión con la cuenta {USER_AUTH_001} y vuelve a la Home.\n5. El usuario revisa si se muestra {COMPONENTE_SEGMENTO_LOGUEADO}.\n6. El usuario cierra sesión y vuelve a la Home.",
   "test_data": "URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
   "viewport": "390x844"
  }
 ]
}
-->


---

## B2C-31 - Pagina de detalle de producto (PDP) - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-31 |
| Última actualización | 2026-10-19 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | webkit |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP1/B2C-31 Test Cases.xlsx |

### Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 3 |
| Bloqueado Data | 1 |
| Rechazado | 1 |
| **Total** | **5** |

### Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-19 | 5 | TC-B2C31-M-022, TC-B2C31-M-032, TC-B2C31-M-033, TC-B2C31-M-034, TC-B2C31-M-040 |

### Detalle por caso de prueba

#### TC-B2C31-M-022 - Verificar que un producto con label muestra una sola cucarda sin bloquear la compra [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | tests/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: PDP
- {SKU_CUCARDA} tiene configurado el atributo label

**Data utilizada**

{BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; {SKU_CUCARDA}: 000000000000028616-KGV

**Pasos ejecutados**

1. El usuario ingresa a la PDP de {SKU_CUCARDA} ({BASE_URL}product/{SKU_CUCARDA}).
2. El sistema carga la PDP de {SKU_CUCARDA}.

**Resultado esperado**

Se muestra una sola cucarda y el botón "Agregar" sigue disponible.

**Resultado obtenido**

La PDP del producto con label muestra una sola cucarda ("Cyber") sobre la imagen y el botón Agregar está visible y habilitado.

**Evidencia**

![Paso 2 — pdp con la cucarda del producto](<B2C-31 Evidencias/TC-B2C31-M-022-p02-pdp-con-la-cucarda-del-producto.png>)

![Estado final](<B2C-31 Evidencias/TC-B2C31-M-022.png>)

---

#### TC-B2C31-M-032 - Verificar que el tab Información muestra pills solo para las secciones con contenido [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | tests/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: PDP
- {SKU_INFO_COMPLETA} tiene varias secciones de información, incluida "Acerca de"

**Data utilizada**

{BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; {SKU_INFO_COMPLETA}: 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a la PDP de {SKU_INFO_COMPLETA} ({BASE_URL}product/{SKU_INFO_COMPLETA}).
2. El sistema carga la PDP de {SKU_INFO_COMPLETA}.
3. El usuario toca el tab "Información".
4. El sistema muestra las pills de las secciones con contenido con "Descripción" activa.
5. El usuario desliza las pills horizontalmente.
6. El sistema desplaza las pills sin romper el layout.

**Resultado esperado**

Solo hay pills para las secciones con contenido (Descripción, Ingredientes, Estilos de alimentación, Sellos, Tabla nutricional, Acerca de según corresponda), "Descripción" está activa y las pills se desplazan horizontalmente.

**Resultado obtenido**

El tab Información muestra 4 pills (Descripción activa, Ingredientes, Estilos de alimentación, Datos de nutrición), una por sección con contenido; las pills se desplazan horizontalmente sin scroll horizontal de la página.

**Observación**

Aprobado. Observación: la pill de la tabla nutricional se llama "Datos de nutrición" en la UI (el TC la nombra "Tabla nutricional"). El SKU declarado no tiene secciones Sellos ni Acerca de, por lo que no hay pills para ellas (correcto: sin contenido). En la primera corrida falló un intento y pasó en el reintento.

**Evidencia**

![Paso 4 — pills de las secciones con contenido](<B2C-31 Evidencias/TC-B2C31-M-032-p04-pills-de-las-secciones-con-contenido.png>)

![Paso 6 — pills desplazadas](<B2C-31 Evidencias/TC-B2C31-M-032-p06-pills-desplazadas.png>)

![Estado final](<B2C-31 Evidencias/TC-B2C31-M-032.png>)

---

#### TC-B2C31-M-033 - Verificar que tocar una pill ancla el scroll a su sección y la marca como activa [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | tests/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: PDP
- {SKU_INFO_COMPLETA} tiene la sección "Tabla nutricional"

**Data utilizada**

{BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; {SKU_INFO_COMPLETA}: 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a la PDP de {SKU_INFO_COMPLETA} ({BASE_URL}product/{SKU_INFO_COMPLETA}).
2. El sistema carga la PDP de {SKU_INFO_COMPLETA}.
3. El usuario toca el tab "Información" y luego la pill "Tabla nutricional".
4. El sistema desplaza el contenido al inicio de la sección "Tabla nutricional" y marca esa pill como activa.

**Resultado esperado**

La pantalla queda al inicio de "Tabla nutricional" y esa pill cambia de color como activa.

**Resultado obtenido**

Al tocar la pill "Datos de nutrición" el scroll sobrepasa el inicio de la sección: el título de la sección queda a 64 px del borde superior, tapado por la barra fija de pills (que termina a 122 px) y el encabezado; la pill sí queda activa (rojo). No se ve el inicio de la sección.

**Observación**

Esperado: la pantalla queda al inicio de "Tabla nutricional" y la pill cambia de color. Obtenido: la pill se activa, pero el título/inicio de la sección queda oculto bajo la barra fija de pills (~58 px de desfase). Reproducido en 3 de 3 intentos.

**Evidencia**

![Paso 3 — tab informacion con sus pills](<B2C-31 Evidencias/TC-B2C31-M-033-p03-tab-informacion-con-sus-pills.png>)

![Estado final](<B2C-31 Evidencias/TC-B2C31-M-033.png>)

---

#### TC-B2C31-M-034 - Verificar que las pills de información quedan fijas bajo los tabs al hacer scroll [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | tests/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: PDP
- {SKU_INFO_COMPLETA} tiene varias secciones de información

**Data utilizada**

{BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; {SKU_INFO_COMPLETA}: 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a la PDP de {SKU_INFO_COMPLETA} ({BASE_URL}product/{SKU_INFO_COMPLETA}).
2. El sistema carga la PDP de {SKU_INFO_COMPLETA}.
3. El usuario toca el tab "Información" y hace scroll hacia abajo por el contenido.

**Resultado esperado**

Las pills permanecen fijas debajo de los tabs mientras se recorre el contenido.

**Resultado obtenido**

Al hacer scroll 4 veces por el contenido, la barra de pills permanece en la misma posición (68 px desde arriba) bajo el encabezado.

**Evidencia**

![Paso 3 — tab informacion antes del scroll](<B2C-31 Evidencias/TC-B2C31-M-034-p03-tab-informacion-antes-del-scroll.png>)

![Paso 4 — pills fijas durante el scroll](<B2C-31 Evidencias/TC-B2C31-M-034-p04-pills-fijas-durante-el-scroll.png>)

![Estado final](<B2C-31 Evidencias/TC-B2C31-M-034.png>)

---

#### TC-B2C31-M-040 - Verificar que la sección "Acerca de" muestra el contenido inspiracional configurado [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | tests/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: PDP
- {SKU_INFO_COMPLETA} tiene contenido en el atributo acercaDe

**Data utilizada**

{BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; {SKU_INFO_COMPLETA}: 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a la PDP de {SKU_INFO_COMPLETA} ({BASE_URL}product/{SKU_INFO_COMPLETA}).
2. El sistema carga la PDP de {SKU_INFO_COMPLETA}.
3. El usuario toca el tab "Información" y luego la pill "Acerca de".
4. El sistema muestra el contenido inspiracional del producto.

**Resultado esperado**

Se muestra el contenido configurado (texto, imágenes y/o video) adaptado al ancho de la pantalla, sin desbordes.

**Resultado obtenido**

No se ejecutó el paso 3: el producto declarado no tiene la pill ni la sección "Acerca de" (solo Descripción, Ingredientes, Estilos de alimentación y Datos de nutrición).

**Observación**

Causa: {SKU_INFO_COMPLETA} (000000000000675191-UN) no tiene contenido en el atributo acercaDe en el ambiente dev, contrario a la precondición. Acción: cargar contenido acercaDe en ese SKU o declarar en la planilla un SKU que lo tenga.

**Evidencia**

![Paso 3 — pills del producto](<B2C-31 Evidencias/TC-B2C31-M-040-p03-pills-del-producto.png>)

![Estado final](<B2C-31 Evidencias/TC-B2C31-M-040.png>)

---

<!-- qa-evidence-state
{
 "header": {
  "browsers": {
   "desktop": "chromium",
   "mobile": "webkit"
  },
  "environment": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-31",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP1/B2C-31 Test Cases.xlsx",
  "title": "B2C-31 - Pagina de detalle de producto (PDP) - Evidencias QA",
  "updated_at": "2026-10-19"
 },
 "history": {
  "2026-10-19": [
   "TC-B2C31-M-022",
   "TC-B2C31-M-032",
   "TC-B2C31-M-033",
   "TC-B2C31-M-034",
   "TC-B2C31-M-040"
  ]
 },
 "results": [
  {
   "browser": "webkit",
   "executed_at": "2026-10-19",
   "expected": "Se muestra una sola cucarda y el botón \"Agregar\" sigue disponible.",
   "form_factor": "mobile",
   "id": "TC-B2C31-M-022",
   "name": "Verificar que un producto con label muestra una sola cucarda sin bloquear la compra [Mobile] [Guest]",
   "observed": "La PDP del producto con label muestra una sola cucarda (\"Cyber\") sobre la imagen y el botón Agregar está visible y habilitado.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: PDP\n- {SKU_CUCARDA} tiene configurado el atributo label",
   "screenshots": [
    {
     "caption": "Paso 2 — pdp con la cucarda del producto",
     "file": "TC-B2C31-M-022-p02-pdp-con-la-cucarda-del-producto.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C31-M-022.png"
    }
   ],
   "spec": "tests/B2C-31.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a la PDP de {SKU_CUCARDA} ({BASE_URL}product/{SKU_CUCARDA}).\n2. El sistema carga la PDP de {SKU_CUCARDA}.",
   "test_data": "{BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; {SKU_CUCARDA}: 000000000000028616-KGV",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-19",
   "expected": "Solo hay pills para las secciones con contenido (Descripción, Ingredientes, Estilos de alimentación, Sellos, Tabla nutricional, Acerca de según corresponda), \"Descripción\" está activa y las pills se desplazan horizontalmente.",
   "form_factor": "mobile",
   "id": "TC-B2C31-M-032",
   "name": "Verificar que el tab Información muestra pills solo para las secciones con contenido [Mobile] [Guest]",
   "observation": "Aprobado. Observación: la pill de la tabla nutricional se llama \"Datos de nutrición\" en la UI (el TC la nombra \"Tabla nutricional\"). El SKU declarado no tiene secciones Sellos ni Acerca de, por lo que no hay pills para ellas (correcto: sin contenido). En la primera corrida falló un intento y pasó en el reintento.",
   "observed": "El tab Información muestra 4 pills (Descripción activa, Ingredientes, Estilos de alimentación, Datos de nutrición), una por sección con contenido; las pills se desplazan horizontalmente sin scroll horizontal de la página.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: PDP\n- {SKU_INFO_COMPLETA} tiene varias secciones de información, incluida \"Acerca de\"",
   "screenshots": [
    {
     "caption": "Paso 4 — pills de las secciones con contenido",
     "file": "TC-B2C31-M-032-p04-pills-de-las-secciones-con-contenido.png"
    },
    {
     "caption": "Paso 6 — pills desplazadas",
     "file": "TC-B2C31-M-032-p06-pills-desplazadas.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C31-M-032.png"
    }
   ],
   "spec": "tests/B2C-31.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a la PDP de {SKU_INFO_COMPLETA} ({BASE_URL}product/{SKU_INFO_COMPLETA}).\n2. El sistema carga la PDP de {SKU_INFO_COMPLETA}.\n3. El usuario toca el tab \"Información\".\n4. El sistema muestra las pills de las secciones con contenido con \"Descripción\" activa.\n5. El usuario desliza las pills horizontalmente.\n6. El sistema desplaza las pills sin romper el layout.",
   "test_data": "{BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; {SKU_INFO_COMPLETA}: 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-19",
   "expected": "La pantalla queda al inicio de \"Tabla nutricional\" y esa pill cambia de color como activa.",
   "form_factor": "mobile",
   "id": "TC-B2C31-M-033",
   "name": "Verificar que tocar una pill ancla el scroll a su sección y la marca como activa [Mobile] [Guest]",
   "observation": "Esperado: la pantalla queda al inicio de \"Tabla nutricional\" y la pill cambia de color. Obtenido: la pill se activa, pero el título/inicio de la sección queda oculto bajo la barra fija de pills (~58 px de desfase). Reproducido en 3 de 3 intentos.",
   "observed": "Al tocar la pill \"Datos de nutrición\" el scroll sobrepasa el inicio de la sección: el título de la sección queda a 64 px del borde superior, tapado por la barra fija de pills (que termina a 122 px) y el encabezado; la pill sí queda activa (rojo). No se ve el inicio de la sección.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: PDP\n- {SKU_INFO_COMPLETA} tiene la sección \"Tabla nutricional\"",
   "screenshots": [
    {
     "caption": "Paso 3 — tab informacion con sus pills",
     "file": "TC-B2C31-M-033-p03-tab-informacion-con-sus-pills.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C31-M-033.png"
    }
   ],
   "spec": "tests/B2C-31.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a la PDP de {SKU_INFO_COMPLETA} ({BASE_URL}product/{SKU_INFO_COMPLETA}).\n2. El sistema carga la PDP de {SKU_INFO_COMPLETA}.\n3. El usuario toca el tab \"Información\" y luego la pill \"Tabla nutricional\".\n4. El sistema desplaza el contenido al inicio de la sección \"Tabla nutricional\" y marca esa pill como activa.",
   "test_data": "{BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; {SKU_INFO_COMPLETA}: 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-19",
   "expected": "Las pills permanecen fijas debajo de los tabs mientras se recorre el contenido.",
   "form_factor": "mobile",
   "id": "TC-B2C31-M-034",
   "name": "Verificar que las pills de información quedan fijas bajo los tabs al hacer scroll [Mobile] [Guest]",
   "observed": "Al hacer scroll 4 veces por el contenido, la barra de pills permanece en la misma posición (68 px desde arriba) bajo el encabezado.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: PDP\n- {SKU_INFO_COMPLETA} tiene varias secciones de información",
   "screenshots": [
    {
     "caption": "Paso 3 — tab informacion antes del scroll",
     "file": "TC-B2C31-M-034-p03-tab-informacion-antes-del-scroll.png"
    },
    {
     "caption": "Paso 4 — pills fijas durante el scroll",
     "file": "TC-B2C31-M-034-p04-pills-fijas-durante-el-scroll.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C31-M-034.png"
    }
   ],
   "spec": "tests/B2C-31.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a la PDP de {SKU_INFO_COMPLETA} ({BASE_URL}product/{SKU_INFO_COMPLETA}).\n2. El sistema carga la PDP de {SKU_INFO_COMPLETA}.\n3. El usuario toca el tab \"Información\" y hace scroll hacia abajo por el contenido.",
   "test_data": "{BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; {SKU_INFO_COMPLETA}: 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-19",
   "expected": "Se muestra el contenido configurado (texto, imágenes y/o video) adaptado al ancho de la pantalla, sin desbordes.",
   "form_factor": "mobile",
   "id": "TC-B2C31-M-040",
   "name": "Verificar que la sección \"Acerca de\" muestra el contenido inspiracional configurado [Mobile] [Guest]",
   "observation": "Causa: {SKU_INFO_COMPLETA} (000000000000675191-UN) no tiene contenido en el atributo acercaDe en el ambiente dev, contrario a la precondición. Acción: cargar contenido acercaDe en ese SKU o declarar en la planilla un SKU que lo tenga.",
   "observed": "No se ejecutó el paso 3: el producto declarado no tiene la pill ni la sección \"Acerca de\" (solo Descripción, Ingredientes, Estilos de alimentación y Datos de nutrición).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: PDP\n- {SKU_INFO_COMPLETA} tiene contenido en el atributo acercaDe",
   "screenshots": [
    {
     "caption": "Paso 3 — pills del producto",
     "file": "TC-B2C31-M-040-p03-pills-del-producto.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C31-M-040.png"
    }
   ],
   "spec": "tests/B2C-31.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a la PDP de {SKU_INFO_COMPLETA} ({BASE_URL}product/{SKU_INFO_COMPLETA}).\n2. El sistema carga la PDP de {SKU_INFO_COMPLETA}.\n3. El usuario toca el tab \"Información\" y luego la pill \"Acerca de\".\n4. El sistema muestra el contenido inspiracional del producto.",
   "test_data": "{BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; {SKU_INFO_COMPLETA}: 000000000000675191-UN",
   "viewport": "390x844"
  }
 ]
}
-->


---

## B2C-59 - Shelf de producto en PLP y SRP - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-59 |
| Última actualización | 2026-10-19 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | webkit |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP1/B2C-59 Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Data Pruebas.xlsx |

### Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 5 |
| Rechazado | 2 |
| **Total** | **7** |

### Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-19 | 7 | TC-B2C59-D-001, TC-B2C59-D-007, TC-B2C59-D-020, TC-B2C59-M-001, TC-B2C59-M-007, TC-B2C59-M-020, TC-B2C59-M-022 |

### Detalle por caso de prueba

#### TC-B2C59-D-001 - Verificar orden de slots en el shelf (Desktop)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Duración | 10.6 s |
| Spec | tests/B2C-59.spec.ts:581 |

**Precondiciones**

User type: Guest o Registrado.

Viewport Desktop 1280x900.

Producto con stock, con cucarda configurada (label ≠ null), con promoción NxM activa y con imagen disponible en catálogo SFCC.

**Data utilizada**

URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ · PLP declarada: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. Navegar a una PLP de categoría con viewport Desktop 1280x900.
2. Localizar un shelf de producto con stock, cucarda, promo NxM activa e imagen disponible.
3. Verificar que la label/cucarda aparece en la esquina superior izquierda de la imagen.
4. Verificar que la galería de imágenes es el slot principal del shelf (hasta 5 imágenes).
5. Verificar que el botón Favoritos (corazón) aparece en la esquina superior derecha de la imagen.
6. Verificar que la sección de precios se muestra debajo de la galería.
7. Verificar que la marca + nombre del producto aparece debajo de la sección de precios.
8. Verificar que el label de formato (si aplica) y/o "Patrocinado" (si aplica) aparece debajo del nombre.
9. Verificar que el botón "Combina la promo >" aparece antes del botón "Agregar".
10. Verificar que el botón "Agregar" es el último elemento del shelf.

**Resultado esperado**

El shelf muestra todos los slots en el orden definido: cucarda (sup. izq.) → galería → favoritos (sup. der.) → precios → marca+nombre → formato/patrocinado → combina promo → agregar. No faltan slots ni están fuera de orden.

**Resultado obtenido**

La PLP declarada (10 shelves) no ofrece ningun producto con cucarda y promo NxM a la vez: la unica cucarda ('Cyber') esta en un producto sin 'Combina la promo' y los tres con 'Combina la promo' no llevan cucarda.

**Observación**

Causa: La PLP declarada (10 shelves) no ofrece ningun producto con cucarda y promo NxM a la vez: la unica cucarda ('Cyber') esta en un producto sin 'Combina la promo' y los tres con 'Combina la promo' no llevan cucarda. El TC no declara un token con ese producto. Accion: declarar en el Excel de data un producto (o PLP) con cucarda, promo NxM, stock e imagen.

**Evidencia**

![Paso 2 — plp declarada ningun shelf con cucarda y promo nxm a la vez](<B2C-59 Evidencias/TC-B2C59-D-001-p02-plp-declarada-ningun-shelf-con-cucarda-y-promo-nxm-a-la-vez.png>)

![Estado final](<B2C-59 Evidencias/TC-B2C59-D-001.png>)

---

#### TC-B2C59-M-001 - Verificar orden de slots en el shelf (Mobile)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 11.1 s |
| Spec | tests/B2C-59.spec.ts:879 |

**Precondiciones**

User type: Guest o Registrado.

Viewport Mobile 390x844.

Producto con stock, con cucarda configurada, con promoción NxM activa y con imagen disponible en catálogo SFCC.

**Data utilizada**

URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ · PLP declarada: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. Navegar a una PLP de categoría con viewport Mobile 390x844.
2. Localizar un shelf de producto con stock, cucarda, promo NxM activa e imagen disponible.
3. Verificar que la label/cucarda aparece en la esquina superior izquierda de la imagen.
4. Verificar que la galería de imágenes es el slot principal del shelf.
5. Verificar que el botón Favoritos aparece en la esquina superior derecha de la imagen.
6. Verificar que la sección de precios se muestra debajo de la galería.
7. Verificar que la marca + nombre del producto aparece debajo de la sección de precios.
8. Verificar que el label de formato/patrocinado aparece debajo del nombre cuando aplica.
9. Verificar que el botón "Combina la promo >" aparece antes del botón "Agregar".
10. Verificar que el botón "Agregar" es el último elemento del shelf.

**Resultado esperado**

El shelf muestra todos los slots en el orden definido en Mobile: cucarda (sup. izq.) → galería → favoritos (sup. der.) → precios → marca+nombre → formato/patrocinado → combina promo → agregar.

**Resultado obtenido**

La PLP declarada (10 shelves) no ofrece ningun producto con cucarda y promo NxM a la vez: la unica cucarda ('Cyber') esta en un producto sin 'Combina la promo' y los tres con 'Combina la promo' no llevan cucarda.

**Observación**

Causa: La PLP declarada (10 shelves) no ofrece ningun producto con cucarda y promo NxM a la vez: la unica cucarda ('Cyber') esta en un producto sin 'Combina la promo' y los tres con 'Combina la promo' no llevan cucarda. El TC no declara un token con ese producto. Accion: declarar en el Excel de data un producto (o PLP) con cucarda, promo NxM, stock e imagen.

**Evidencia**

![Paso 2 — plp declarada ningun shelf con cucarda y promo nxm a la vez](<B2C-59 Evidencias/TC-B2C59-M-001-p02-plp-declarada-ningun-shelf-con-cucarda-y-promo-nxm-a-la-vez.png>)

![Estado final](<B2C-59 Evidencias/TC-B2C59-M-001.png>)

---

#### TC-B2C59-D-020 - Estructura base del shelf con todos los slots opcionales ausentes (Desktop)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Duración | 67.4 s |
| Spec | tests/B2C-59.spec.ts:612 |

**Precondiciones**

User type: Guest o Registrado.

Viewport Desktop 1280x900.

Producto con stock, sin cucarda (label=null), isSponsored=false, no pesable (sin label de formato), sin promocion vigente, con imagen disponible.

**Data utilizada**

URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ · PLP declarada: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. Navegar a una PLP/SRP con un producto sin cucarda, sin Patrocinado, no pesable y sin promo vigente, con viewport Desktop 1280x900.
2. Verificar que no aparece cucarda en la esquina superior izquierda de la imagen.
3. Verificar que no aparece el texto 'Patrocinado' ni el label de formato debajo del nombre.
4. Verificar que no aparece el boton 'Combina la promo'.
5. Verificar que los slots obligatorios (galeria, favoritos, precios, marca+nombre, boton Agregar) se muestran en el orden definido, sin espacios vacios en las posiciones de los slots ausentes.

**Resultado esperado**

El shelf muestra unicamente los slots obligatorios en el orden definido (galeria, favoritos, precios, marca+nombre, agregar), sin cucarda, sin 'Patrocinado', sin label de formato y sin 'Combina la promo'. No quedan espacios vacios ni el layout se rompe.

**Resultado obtenido**

La PLP declarada (10 shelves) no ofrece ningun producto sin cucarda, no pesable (sin label de formato) y sin promocion: el unico sin formato (shelf 7) trae 'Combina la promo'; los demas traen formato o cucarda.

**Observación**

Causa: La PLP declarada (10 shelves) no ofrece ningun producto sin cucarda, no pesable (sin label de formato) y sin promocion: el unico sin formato (shelf 7) trae 'Combina la promo'; los demas traen formato o cucarda. El TC no declara un token con ese producto. Accion: declarar en el Excel de data un producto (o PLP) con esas caracteristicas.

**Evidencia**

![Paso 2 — plp declarada ningun shelf sin cucarda sin formato sin promo](<B2C-59 Evidencias/TC-B2C59-D-020-p02-plp-declarada-ningun-shelf-sin-cucarda-sin-formato-sin-promo.png>)

![Estado final](<B2C-59 Evidencias/TC-B2C59-D-020.png>)

---

#### TC-B2C59-M-020 - Estructura base del shelf con todos los slots opcionales ausentes (Mobile)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

User type: Guest o Registrado.

Viewport Mobile 390x844.

Producto con stock, sin cucarda (label=null), isSponsored=false, no pesable, sin promocion vigente, con imagen disponible.

**Data utilizada**

URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

**Pasos ejecutados**

1. Navegar a una PLP/SRP con un producto sin cucarda, sin Patrocinado, no pesable y sin promo vigente, con viewport Mobile 390x844.
2. Verificar que no aparece cucarda, texto 'Patrocinado', label de formato ni boton 'Combina la promo'.
3. Verificar que los slots obligatorios se muestran en el orden definido, sin espacios vacios en las posiciones ausentes.

**Resultado esperado**

El shelf muestra unicamente los slots obligatorios en el orden definido, sin cucarda, sin 'Patrocinado', sin label de formato y sin 'Combina la promo'. No quedan espacios vacios ni el layout se rompe.

**Resultado obtenido**

No se ejecuto: la fila no declara la PLP ni el producto.

**Observación**

Causa: la fila no declara {PLP_URL} (solo {BASE_URL}) y el caso exige navegar a una PLP/SRP con un producto sin cucarda, sin Patrocinado, no pesable y sin promo; ademas la PLP del par Desktop (D-020) no ofrece ese producto. Accion: declarar en la fila la PLP/SKU a usar y cargar un producto con esas caracteristicas.

---

#### TC-B2C59-M-022 - Sin truncamiento cuando el texto esta dentro del limite de 40 caracteres (Mobile)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

User type: Guest o Registrado.

Viewport Mobile 390x844.

Producto cuyo largo combinado de marca + '|' + descripcion es menor o igual a 40 caracteres.

**Data utilizada**

URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ · PLP_URL_NXM: sin valor

**Pasos ejecutados**

1. Navegar a una PLP/SRP con un producto cuyo nombre es menor o igual a 40 caracteres, con viewport Mobile 390x844.
2. Localizar el shelf del producto.
3. Verificar que el texto se muestra completo, sin truncar y sin puntos suspensivos.
4. Verificar que la marca se muestra en negrita con separador '|' antes de la descripcion.

**Resultado esperado**

El texto se muestra completo, sin truncamiento ni puntos suspensivos, dado que su largo no excede el limite de 40 caracteres. La marca se muestra en negrita con separador '|'.

**Resultado obtenido**

No se ejecuto: falta el token {PLP_URL_NXM}.

**Observación**

Causa: el token {PLP_URL_NXM} que declara la fila no tiene fila en el Excel de data (existe 'PLP_URL_NxM', escrito distinto, y no se usa por no ser el declarado). Accion: cargar {PLP_URL_NXM} (o corregir el nombre en la planilla) con una PLP cuyo producto tenga marca + '|' + descripcion de 40 caracteres o menos.

---

#### TC-B2C59-D-007 - Galeria: hover rota la imagen cuando N>1 (Desktop)

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Duración | 38.4 s |
| Spec | tests/B2C-59.spec.ts:596 |

**Precondiciones**

User type: Guest o Registrado.

Viewport Desktop 1280x900.

Producto con 2 o más imágenes (N≥2) disponibles en catálogo SFCC.

**Data utilizada**

URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ · PLP declarada: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno · SKU multi-imagen: 000000000000028616-KGV (su listado se deduce de la categoria que publica su PDP: /category/carnes_vacuno_otros-cortes)

**Pasos ejecutados**

1. Navegar a una PLP/SRP con un producto que tiene N≥2 imágenes, con viewport Desktop 1280x900.
2. Verificar que la imagen del shelf se muestra estática sin hover.
3. Hacer hover sobre el shelf.
4. Verificar que la imagen rota a la siguiente disponible durante el hover.
5. Verificar que NO se muestran flechas ni dots de navegación sobre la imagen.

**Resultado esperado**

En Desktop, la imagen principal es estática. Al hacer hover, la imagen rota a la siguiente disponible. No se muestran flechas ni dots de navegación.

**Resultado obtenido**

El shelf muestra solo la imagen 01 y no rota con el hover (sin flechas ni dots, eso si se cumple).

**Observación**

Esperado: al hacer hover la imagen rota a la siguiente disponible. Obtenido: tras el hover (8 s) la imagen sigue siendo la misma (-01.jpg) en el shelf del producto 000000000000028616-KGV, que tiene 3 imagenes en su PDP; el shelf renderiza una sola <img> y no cambia. tests/B2C-59.spec.ts:596. Bug: pendiente de crear.

**Evidencia**

![Paso 1 — shelf del producto con 3 imagenes en su listado](<B2C-59 Evidencias/TC-B2C59-D-007-p01-shelf-del-producto-con-3-imagenes-en-su-listado.png>)

![Paso 3 — shelf durante el hover](<B2C-59 Evidencias/TC-B2C59-D-007-p03-shelf-durante-el-hover.png>)

![Estado al fallar la aserción](<B2C-59 Evidencias/TC-B2C59-D-007.png>)

---

#### TC-B2C59-M-007 - Galeria: scroll horizontal cuando N>1 (Mobile)

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 33.6 s |
| Spec | tests/B2C-59.spec.ts:894 |

**Precondiciones**

User type: Guest o Registrado.

Viewport Mobile 390x844.

Producto con 2 o más imágenes (N≥2) disponibles en catálogo SFCC.

**Data utilizada**

URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ · PLP declarada: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno · SKU multi-imagen: 000000000000028616-KGV (su listado se deduce de la categoria que publica su PDP: /category/carnes_vacuno_otros-cortes)

**Pasos ejecutados**

1. Navegar a una PLP/SRP con un producto que tiene N≥2 imágenes, con viewport Mobile 390x844.
2. Verificar que se muestra una imagen a la vez en el shelf.
3. Realizar scroll horizontal sobre la galería del shelf.
4. Verificar que la imagen avanza a la siguiente con el gesto de scroll.
5. Verificar que NO se muestran flechas ni dots de navegación.

**Resultado esperado**

En Mobile, la galería permite scroll horizontal mostrando una imagen a la vez. No se muestran flechas ni dots de navegación.

**Resultado obtenido**

El shelf muestra una sola imagen fija; no hay scroll horizontal (sin flechas ni dots, eso si se cumple).

**Observación**

Esperado: la galeria permite scroll horizontal mostrando una imagen a la vez. Obtenido: el shelf del producto 000000000000028616-KGV (3 imagenes en su PDP) tiene una sola imagen y su contenedor no se desplaza (ancho de contenido 153 = ancho visible 153); el gesto de arrastre horizontal no cambia la imagen. tests/B2C-59.spec.ts:894. Bug: pendiente de crear.

**Evidencia**

![Paso 1 — shelf del producto con 3 imagenes en su listado](<B2C-59 Evidencias/TC-B2C59-M-007-p01-shelf-del-producto-con-3-imagenes-en-su-listado.png>)

![Paso 3 — shelf tras el gesto de desplazamiento horizontal](<B2C-59 Evidencias/TC-B2C59-M-007-p03-shelf-tras-el-gesto-de-desplazamiento-horizontal.png>)

![Estado al fallar la aserción](<B2C-59 Evidencias/TC-B2C59-M-007.png>)

---

<!-- qa-evidence-state
{
 "header": {
  "browsers": {
   "desktop": "chromium",
   "mobile": "webkit"
  },
  "data_file": "Datos Pruebas/Data Pruebas.xlsx",
  "environment": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-59",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP1/B2C-59 Test Cases.xlsx",
  "title": "B2C-59 - Shelf de producto en PLP y SRP - Evidencias QA",
  "updated_at": "2026-10-19"
 },
 "history": {
  "2026-10-19": [
   "TC-B2C59-D-001",
   "TC-B2C59-D-007",
   "TC-B2C59-D-020",
   "TC-B2C59-M-001",
   "TC-B2C59-M-007",
   "TC-B2C59-M-020",
   "TC-B2C59-M-022"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "duration_s": 10.6,
   "executed_at": "2026-10-19",
   "expected": "El shelf muestra todos los slots en el orden definido: cucarda (sup. izq.) → galería → favoritos (sup. der.) → precios → marca+nombre → formato/patrocinado → combina promo → agregar. No faltan slots ni están fuera de orden.",
   "form_factor": "desktop",
   "id": "TC-B2C59-D-001",
   "name": "Verificar orden de slots en el shelf (Desktop)",
   "observation": "Causa: La PLP declarada (10 shelves) no ofrece ningun producto con cucarda y promo NxM a la vez: la unica cucarda ('Cyber') esta en un producto sin 'Combina la promo' y los tres con 'Combina la promo' no llevan cucarda. El TC no declara un token con ese producto. Accion: declarar en el Excel de data un producto (o PLP) con cucarda, promo NxM, stock e imagen.",
   "observed": "La PLP declarada (10 shelves) no ofrece ningun producto con cucarda y promo NxM a la vez: la unica cucarda ('Cyber') esta en un producto sin 'Combina la promo' y los tres con 'Combina la promo' no llevan cucarda.",
   "preconditions": "User type: Guest o Registrado.\nViewport Desktop 1280x900.\nProducto con stock, con cucarda configurada (label ≠ null), con promoción NxM activa y con imagen disponible en catálogo SFCC.",
   "screenshots": [
    {
     "caption": "Paso 2 — plp declarada ningun shelf con cucarda y promo nxm a la vez",
     "file": "TC-B2C59-D-001-p02-plp-declarada-ningun-shelf-con-cucarda-y-promo-nxm-a-la-vez.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C59-D-001.png"
    }
   ],
   "spec": "tests/B2C-59.spec.ts:581",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a una PLP de categoría con viewport Desktop 1280x900.\n2. Localizar un shelf de producto con stock, cucarda, promo NxM activa e imagen disponible.\n3. Verificar que la label/cucarda aparece en la esquina superior izquierda de la imagen.\n4. Verificar que la galería de imágenes es el slot principal del shelf (hasta 5 imágenes).\n5. Verificar que el botón Favoritos (corazón) aparece en la esquina superior derecha de la imagen.\n6. Verificar que la sección de precios se muestra debajo de la galería.\n7. Verificar que la marca + nombre del producto aparece debajo de la sección de precios.\n8. Verificar que el label de formato (si aplica) y/o \"Patrocinado\" (si aplica) aparece debajo del nombre.\n9. Verificar que el botón \"Combina la promo >\" aparece antes del botón \"Agregar\".\n10. Verificar que el botón \"Agregar\" es el último elemento del shelf.",
   "test_data": "URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ · PLP declarada: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno",
   "viewport": "1280x900"
  },
  {
   "browser": "webkit",
   "duration_s": 11.1,
   "executed_at": "2026-10-19",
   "expected": "El shelf muestra todos los slots en el orden definido en Mobile: cucarda (sup. izq.) → galería → favoritos (sup. der.) → precios → marca+nombre → formato/patrocinado → combina promo → agregar.",
   "form_factor": "mobile",
   "id": "TC-B2C59-M-001",
   "name": "Verificar orden de slots en el shelf (Mobile)",
   "observation": "Causa: La PLP declarada (10 shelves) no ofrece ningun producto con cucarda y promo NxM a la vez: la unica cucarda ('Cyber') esta en un producto sin 'Combina la promo' y los tres con 'Combina la promo' no llevan cucarda. El TC no declara un token con ese producto. Accion: declarar en el Excel de data un producto (o PLP) con cucarda, promo NxM, stock e imagen.",
   "observed": "La PLP declarada (10 shelves) no ofrece ningun producto con cucarda y promo NxM a la vez: la unica cucarda ('Cyber') esta en un producto sin 'Combina la promo' y los tres con 'Combina la promo' no llevan cucarda.",
   "preconditions": "User type: Guest o Registrado.\nViewport Mobile 390x844.\nProducto con stock, con cucarda configurada, con promoción NxM activa y con imagen disponible en catálogo SFCC.",
   "screenshots": [
    {
     "caption": "Paso 2 — plp declarada ningun shelf con cucarda y promo nxm a la vez",
     "file": "TC-B2C59-M-001-p02-plp-declarada-ningun-shelf-con-cucarda-y-promo-nxm-a-la-vez.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C59-M-001.png"
    }
   ],
   "spec": "tests/B2C-59.spec.ts:879",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a una PLP de categoría con viewport Mobile 390x844.\n2. Localizar un shelf de producto con stock, cucarda, promo NxM activa e imagen disponible.\n3. Verificar que la label/cucarda aparece en la esquina superior izquierda de la imagen.\n4. Verificar que la galería de imágenes es el slot principal del shelf.\n5. Verificar que el botón Favoritos aparece en la esquina superior derecha de la imagen.\n6. Verificar que la sección de precios se muestra debajo de la galería.\n7. Verificar que la marca + nombre del producto aparece debajo de la sección de precios.\n8. Verificar que el label de formato/patrocinado aparece debajo del nombre cuando aplica.\n9. Verificar que el botón \"Combina la promo >\" aparece antes del botón \"Agregar\".\n10. Verificar que el botón \"Agregar\" es el último elemento del shelf.",
   "test_data": "URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ · PLP declarada: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "duration_s": 67.4,
   "executed_at": "2026-10-19",
   "expected": "El shelf muestra unicamente los slots obligatorios en el orden definido (galeria, favoritos, precios, marca+nombre, agregar), sin cucarda, sin 'Patrocinado', sin label de formato y sin 'Combina la promo'. No quedan espacios vacios ni el layout se rompe.",
   "form_factor": "desktop",
   "id": "TC-B2C59-D-020",
   "name": "Estructura base del shelf con todos los slots opcionales ausentes (Desktop)",
   "observation": "Causa: La PLP declarada (10 shelves) no ofrece ningun producto sin cucarda, no pesable (sin label de formato) y sin promocion: el unico sin formato (shelf 7) trae 'Combina la promo'; los demas traen formato o cucarda. El TC no declara un token con ese producto. Accion: declarar en el Excel de data un producto (o PLP) con esas caracteristicas.",
   "observed": "La PLP declarada (10 shelves) no ofrece ningun producto sin cucarda, no pesable (sin label de formato) y sin promocion: el unico sin formato (shelf 7) trae 'Combina la promo'; los demas traen formato o cucarda.",
   "preconditions": "User type: Guest o Registrado.\nViewport Desktop 1280x900.\nProducto con stock, sin cucarda (label=null), isSponsored=false, no pesable (sin label de formato), sin promocion vigente, con imagen disponible.",
   "screenshots": [
    {
     "caption": "Paso 2 — plp declarada ningun shelf sin cucarda sin formato sin promo",
     "file": "TC-B2C59-D-020-p02-plp-declarada-ningun-shelf-sin-cucarda-sin-formato-sin-promo.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C59-D-020.png"
    }
   ],
   "spec": "tests/B2C-59.spec.ts:612",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a una PLP/SRP con un producto sin cucarda, sin Patrocinado, no pesable y sin promo vigente, con viewport Desktop 1280x900.\n2. Verificar que no aparece cucarda en la esquina superior izquierda de la imagen.\n3. Verificar que no aparece el texto 'Patrocinado' ni el label de formato debajo del nombre.\n4. Verificar que no aparece el boton 'Combina la promo'.\n5. Verificar que los slots obligatorios (galeria, favoritos, precios, marca+nombre, boton Agregar) se muestran en el orden definido, sin espacios vacios en las posiciones de los slots ausentes.",
   "test_data": "URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ · PLP declarada: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno",
   "viewport": "1280x900"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-19",
   "expected": "El shelf muestra unicamente los slots obligatorios en el orden definido, sin cucarda, sin 'Patrocinado', sin label de formato y sin 'Combina la promo'. No quedan espacios vacios ni el layout se rompe.",
   "form_factor": "mobile",
   "id": "TC-B2C59-M-020",
   "name": "Estructura base del shelf con todos los slots opcionales ausentes (Mobile)",
   "observation": "Causa: la fila no declara {PLP_URL} (solo {BASE_URL}) y el caso exige navegar a una PLP/SRP con un producto sin cucarda, sin Patrocinado, no pesable y sin promo; ademas la PLP del par Desktop (D-020) no ofrece ese producto. Accion: declarar en la fila la PLP/SKU a usar y cargar un producto con esas caracteristicas.",
   "observed": "No se ejecuto: la fila no declara la PLP ni el producto.",
   "preconditions": "User type: Guest o Registrado.\nViewport Mobile 390x844.\nProducto con stock, sin cucarda (label=null), isSponsored=false, no pesable, sin promocion vigente, con imagen disponible.",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a una PLP/SRP con un producto sin cucarda, sin Patrocinado, no pesable y sin promo vigente, con viewport Mobile 390x844.\n2. Verificar que no aparece cucarda, texto 'Patrocinado', label de formato ni boton 'Combina la promo'.\n3. Verificar que los slots obligatorios se muestran en el orden definido, sin espacios vacios en las posiciones ausentes.",
   "test_data": "URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-19",
   "expected": "El texto se muestra completo, sin truncamiento ni puntos suspensivos, dado que su largo no excede el limite de 40 caracteres. La marca se muestra en negrita con separador '|'.",
   "form_factor": "mobile",
   "id": "TC-B2C59-M-022",
   "name": "Sin truncamiento cuando el texto esta dentro del limite de 40 caracteres (Mobile)",
   "observation": "Causa: el token {PLP_URL_NXM} que declara la fila no tiene fila en el Excel de data (existe 'PLP_URL_NxM', escrito distinto, y no se usa por no ser el declarado). Accion: cargar {PLP_URL_NXM} (o corregir el nombre en la planilla) con una PLP cuyo producto tenga marca + '|' + descripcion de 40 caracteres o menos.",
   "observed": "No se ejecuto: falta el token {PLP_URL_NXM}.",
   "preconditions": "User type: Guest o Registrado.\nViewport Mobile 390x844.\nProducto cuyo largo combinado de marca + '|' + descripcion es menor o igual a 40 caracteres.",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a una PLP/SRP con un producto cuyo nombre es menor o igual a 40 caracteres, con viewport Mobile 390x844.\n2. Localizar el shelf del producto.\n3. Verificar que el texto se muestra completo, sin truncar y sin puntos suspensivos.\n4. Verificar que la marca se muestra en negrita con separador '|' antes de la descripcion.",
   "test_data": "URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ · PLP_URL_NXM: sin valor",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "duration_s": 38.4,
   "executed_at": "2026-10-19",
   "expected": "En Desktop, la imagen principal es estática. Al hacer hover, la imagen rota a la siguiente disponible. No se muestran flechas ni dots de navegación.",
   "form_factor": "desktop",
   "id": "TC-B2C59-D-007",
   "name": "Galeria: hover rota la imagen cuando N>1 (Desktop)",
   "observation": "Esperado: al hacer hover la imagen rota a la siguiente disponible. Obtenido: tras el hover (8 s) la imagen sigue siendo la misma (-01.jpg) en el shelf del producto 000000000000028616-KGV, que tiene 3 imagenes en su PDP; el shelf renderiza una sola <img> y no cambia. tests/B2C-59.spec.ts:596. Bug: pendiente de crear.",
   "observed": "El shelf muestra solo la imagen 01 y no rota con el hover (sin flechas ni dots, eso si se cumple).",
   "preconditions": "User type: Guest o Registrado.\nViewport Desktop 1280x900.\nProducto con 2 o más imágenes (N≥2) disponibles en catálogo SFCC.",
   "screenshots": [
    {
     "caption": "Paso 1 — shelf del producto con 3 imagenes en su listado",
     "file": "TC-B2C59-D-007-p01-shelf-del-producto-con-3-imagenes-en-su-listado.png"
    },
    {
     "caption": "Paso 3 — shelf durante el hover",
     "file": "TC-B2C59-D-007-p03-shelf-durante-el-hover.png"
    },
    {
     "caption": "Estado al fallar la aserción",
     "file": "TC-B2C59-D-007.png"
    }
   ],
   "spec": "tests/B2C-59.spec.ts:596",
   "status": "Rechazado",
   "steps": "1. Navegar a una PLP/SRP con un producto que tiene N≥2 imágenes, con viewport Desktop 1280x900.\n2. Verificar que la imagen del shelf se muestra estática sin hover.\n3. Hacer hover sobre el shelf.\n4. Verificar que la imagen rota a la siguiente disponible durante el hover.\n5. Verificar que NO se muestran flechas ni dots de navegación sobre la imagen.",
   "test_data": "URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ · PLP declarada: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno · SKU multi-imagen: 000000000000028616-KGV (su listado se deduce de la categoria que publica su PDP: /category/carnes_vacuno_otros-cortes)",
   "viewport": "1280x900"
  },
  {
   "browser": "webkit",
   "duration_s": 33.6,
   "executed_at": "2026-10-19",
   "expected": "En Mobile, la galería permite scroll horizontal mostrando una imagen a la vez. No se muestran flechas ni dots de navegación.",
   "form_factor": "mobile",
   "id": "TC-B2C59-M-007",
   "name": "Galeria: scroll horizontal cuando N>1 (Mobile)",
   "observation": "Esperado: la galeria permite scroll horizontal mostrando una imagen a la vez. Obtenido: el shelf del producto 000000000000028616-KGV (3 imagenes en su PDP) tiene una sola imagen y su contenedor no se desplaza (ancho de contenido 153 = ancho visible 153); el gesto de arrastre horizontal no cambia la imagen. tests/B2C-59.spec.ts:894. Bug: pendiente de crear.",
   "observed": "El shelf muestra una sola imagen fija; no hay scroll horizontal (sin flechas ni dots, eso si se cumple).",
   "preconditions": "User type: Guest o Registrado.\nViewport Mobile 390x844.\nProducto con 2 o más imágenes (N≥2) disponibles en catálogo SFCC.",
   "screenshots": [
    {
     "caption": "Paso 1 — shelf del producto con 3 imagenes en su listado",
     "file": "TC-B2C59-M-007-p01-shelf-del-producto-con-3-imagenes-en-su-listado.png"
    },
    {
     "caption": "Paso 3 — shelf tras el gesto de desplazamiento horizontal",
     "file": "TC-B2C59-M-007-p03-shelf-tras-el-gesto-de-desplazamiento-horizontal.png"
    },
    {
     "caption": "Estado al fallar la aserción",
     "file": "TC-B2C59-M-007.png"
    }
   ],
   "spec": "tests/B2C-59.spec.ts:894",
   "status": "Rechazado",
   "steps": "1. Navegar a una PLP/SRP con un producto que tiene N≥2 imágenes, con viewport Mobile 390x844.\n2. Verificar que se muestra una imagen a la vez en el shelf.\n3. Realizar scroll horizontal sobre la galería del shelf.\n4. Verificar que la imagen avanza a la siguiente con el gesto de scroll.\n5. Verificar que NO se muestran flechas ni dots de navegación.",
   "test_data": "URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ · PLP declarada: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno · SKU multi-imagen: 000000000000028616-KGV (su listado se deduce de la categoria que publica su PDP: /category/carnes_vacuno_otros-cortes)",
   "viewport": "390x844"
  }
 ]
}
-->


---

## B2C-62 - Bloque de precios del shelf - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-62 |
| Última actualización | 2026-10-19 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | webkit |
| Origen de los TC | Casos de Prueba/B2C-62 Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Data Pruebas.xlsx |

### Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 4 |
| **Total** | **4** |

### Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-19 | 4 | TC-B2C62-D-006, TC-B2C62-D-015, TC-B2C62-M-006, TC-B2C62-M-015 |

### Detalle por caso de prueba

#### TC-B2C62-D-006 - Mostrar etiqueta %, precio promo y 'Antes' tachado (Desktop)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Spec | tests/B2C-62.spec.ts:162 |

**Precondiciones**

User type: Guest o Registrado.

Viewport Desktop 1280x900.

Producto con promoción de catálogo activa de tipo % de descuento (ej. 20% off).

**Data utilizada**

URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; SKU 000000000000688028-UN

**Pasos ejecutados**

1. Navegar a una PLP/SRP con viewport Desktop 1280x900.
2. Localizar el shelf de un producto con promo % de descuento activa.
3. Verificar que se muestra la etiqueta con el % de descuento (ej. "-20%").
4. Verificar que el precio promocional se muestra destacado como precio principal.
5. Verificar que el precio anterior se muestra tachado con la etiqueta "Antes".
6. Verificar que el PPUM se calcula sobre el precio promocional (no sobre el regular).

**Resultado esperado**

El shelf muestra: etiqueta % dcto, precio promo destacado, precio "Antes" tachado y PPUM calculado sobre el precio promocional. Todos los elementos son visibles simultáneamente.

**Resultado obtenido**

Causa: el SKU declarado 000000000000688028-UN (Canasto plush Easter Dkora, juguete) no tiene PPUM en ningún precio del shelf, así que el paso 6 (PPUM sobre el precio promocional) no se puede verificar. Los pasos 3 a 5 sí se cumplen: etiqueta 70%, precio promo $2.217 destacado, 'Antes: $7.390' tachado (más precio de socio $1.921). Acción: declarar en la planilla un SKU con promo de % de descuento que sea medible por kg/lt/un.

**Observación**

Causa: el SKU declarado 000000000000688028-UN (Canasto plush Easter Dkora, juguete) no tiene PPUM en ningún precio del shelf, así que el paso 6 (PPUM sobre el precio promocional) no se puede verificar. Los pasos 3 a 5 sí se cumplen: etiqueta 70%, precio promo $2.217 destacado, 'Antes: $7.390' tachado (más precio de socio $1.921). Acción: declarar en la planilla un SKU con promo de % de descuento que sea medible por kg/lt/un.

**Evidencia**

![Paso 2 — shelf con promo de de descuento](<B2C-62 Evidencias/TC-B2C62-D-006-p02-shelf-con-promo-de-de-descuento.png>)

---

#### TC-B2C62-D-015 - Renderizar promo MdP % dcto como precio fijo (Desktop)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Spec | tests/B2C-62.spec.ts:251 |

**Precondiciones**

User type: Guest o Registrado.

Viewport Desktop 1280x900.

Producto con promo de medio de pago (MdP: Unipay o Banco Estado) de tipo % de descuento activa.

**Data utilizada**

URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; PLP carnes_vacuno; SKU 000000000000642688-UN

**Pasos ejecutados**

1. Navegar a una PLP/SRP con viewport Desktop 1280x900.
2. Localizar el shelf de un producto con promo MdP % dcto activa (Unipay o Banco Estado).
3. Verificar que el precio MdP se muestra como precio fijo en CLP (no como pill % de descuento).
4. Verificar que el precio mostrado es el precio efectivo post-descuento.
5. Verificar que el label identificador del MdP (Unipay / Banco Estado) es visible junto al precio.

**Resultado esperado**

La promo de MdP se renderiza como precio fijo en CLP (precio efectivo post-descuento). No se muestra como pill con el %. El label del MdP (Unipay / Banco Estado) es visible.

**Resultado obtenido**

Causa: el SKU declarado 000000000000642688-UN (Galleta Oreo clásica vainilla 108 g) no se muestra en el ambiente: su PDP carga solo el breadcrumb y el bloque de marketing, sin ficha ni precio, y no aparece en su categoría panaderia-y-pasteleria; tampoco está en la PLP declarada carnes_vacuno. No hay shelf con promo de medio de pago que verificar. Acción: cargar/activar el SKU con promo Unipay o Banco Estado en el ambiente, o declarar otro.

**Observación**

Causa: el SKU declarado 000000000000642688-UN (Galleta Oreo clásica vainilla 108 g) no se muestra en el ambiente: su PDP carga solo el breadcrumb y el bloque de marketing, sin ficha ni precio, y no aparece en su categoría panaderia-y-pasteleria; tampoco está en la PLP declarada carnes_vacuno. No hay shelf con promo de medio de pago que verificar. Acción: cargar/activar el SKU con promo Unipay o Banco Estado en el ambiente, o declarar otro.

**Evidencia**

![Paso 2 — pdp del sku sin producto](<B2C-62 Evidencias/TC-B2C62-D-015-p02-pdp-del-sku-sin-producto.png>)

---

#### TC-B2C62-M-006 - Mostrar etiqueta %, precio promo y 'Antes' tachado (Mobile)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | tests/B2C-62.spec.ts:162 |

**Precondiciones**

User type: Guest o Registrado.

Viewport Mobile 390x844.

Producto con promoción de catálogo de tipo % de descuento activa.

**Data utilizada**

URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; SKU 000000000000688028-UN

**Pasos ejecutados**

1. Navegar a una PLP/SRP con viewport Mobile 390x844.
2. Localizar el shelf de un producto con promo % de descuento.
3. Verificar la etiqueta con % dcto visible.
4. Verificar precio promo destacado como precio principal.
5. Verificar precio "Antes" tachado.
6. Verificar PPUM calculado sobre precio promo (no regular).

**Resultado esperado**

El shelf en Mobile muestra: etiqueta % dcto, precio promo destacado, "Antes" tachado y PPUM sobre precio promo.

**Resultado obtenido**

Causa: el SKU declarado 000000000000688028-UN (Canasto plush Easter Dkora, juguete) no tiene PPUM en ningún precio del shelf, así que el paso 6 (PPUM sobre el precio promocional) no se puede verificar. Los pasos 3 a 5 sí se cumplen: etiqueta 70%, precio promo $2.217 destacado, 'Antes: $7.390' tachado (más precio de socio $1.921). Acción: declarar en la planilla un SKU con promo de % de descuento que sea medible por kg/lt/un.

**Observación**

Causa: el SKU declarado 000000000000688028-UN (Canasto plush Easter Dkora, juguete) no tiene PPUM en ningún precio del shelf, así que el paso 6 (PPUM sobre el precio promocional) no se puede verificar. Los pasos 3 a 5 sí se cumplen: etiqueta 70%, precio promo $2.217 destacado, 'Antes: $7.390' tachado (más precio de socio $1.921). Acción: declarar en la planilla un SKU con promo de % de descuento que sea medible por kg/lt/un.

**Evidencia**

![Paso 2 — shelf con promo de de descuento](<B2C-62 Evidencias/TC-B2C62-M-006-p02-shelf-con-promo-de-de-descuento.png>)

---

#### TC-B2C62-M-015 - Renderizar promo MdP % dcto como precio fijo (Mobile)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | tests/B2C-62.spec.ts:251 |

**Precondiciones**

User type: Guest o Registrado.

Viewport Mobile 390x844.

Producto con promo MdP % dcto activa (Unipay o Banco Estado).

**Data utilizada**

URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; PLP carnes_vacuno; SKU 000000000000642688-UN

**Pasos ejecutados**

1. Navegar a una PLP/SRP con viewport Mobile 390x844.
2. Localizar el shelf con promo MdP % dcto activa.
3. Verificar que el precio MdP se muestra como precio fijo en CLP (no pill %).
4. Verificar que el precio es el efectivo post-descuento.
5. Verificar que el label del MdP es visible.

**Resultado esperado**

La promo de MdP se renderiza como precio fijo en Mobile. El precio es el efectivo post-descuento. Label del MdP visible.

**Resultado obtenido**

Causa: el SKU declarado 000000000000642688-UN (Galleta Oreo clásica vainilla 108 g) no se muestra en el ambiente: su PDP carga solo el breadcrumb y el bloque de marketing, sin ficha ni precio, y no aparece en su categoría panaderia-y-pasteleria; tampoco está en la PLP declarada carnes_vacuno. No hay shelf con promo de medio de pago que verificar. Acción: cargar/activar el SKU con promo Unipay o Banco Estado en el ambiente, o declarar otro.

**Observación**

Causa: el SKU declarado 000000000000642688-UN (Galleta Oreo clásica vainilla 108 g) no se muestra en el ambiente: su PDP carga solo el breadcrumb y el bloque de marketing, sin ficha ni precio, y no aparece en su categoría panaderia-y-pasteleria; tampoco está en la PLP declarada carnes_vacuno. No hay shelf con promo de medio de pago que verificar. Acción: cargar/activar el SKU con promo Unipay o Banco Estado en el ambiente, o declarar otro.

**Evidencia**

![Paso 2 — pdp del sku sin producto](<B2C-62 Evidencias/TC-B2C62-M-015-p02-pdp-del-sku-sin-producto.png>)

---

<!-- qa-evidence-state
{
 "header": {
  "browsers": {
   "desktop": "chromium",
   "mobile": "webkit"
  },
  "data_file": "Datos Pruebas/Data Pruebas.xlsx",
  "environment": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-62",
  "tc_file": "Casos de Prueba/B2C-62 Test Cases.xlsx",
  "title": "B2C-62 - Bloque de precios del shelf - Evidencias QA",
  "updated_at": "2026-10-19"
 },
 "history": {
  "2026-10-19": [
   "TC-B2C62-D-006",
   "TC-B2C62-D-015",
   "TC-B2C62-M-006",
   "TC-B2C62-M-015"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "El shelf muestra: etiqueta % dcto, precio promo destacado, precio \"Antes\" tachado y PPUM calculado sobre el precio promocional. Todos los elementos son visibles simultáneamente.",
   "form_factor": "desktop",
   "id": "TC-B2C62-D-006",
   "name": "Mostrar etiqueta %, precio promo y 'Antes' tachado (Desktop)",
   "observation": "Causa: el SKU declarado 000000000000688028-UN (Canasto plush Easter Dkora, juguete) no tiene PPUM en ningún precio del shelf, así que el paso 6 (PPUM sobre el precio promocional) no se puede verificar. Los pasos 3 a 5 sí se cumplen: etiqueta 70%, precio promo $2.217 destacado, 'Antes: $7.390' tachado (más precio de socio $1.921). Acción: declarar en la planilla un SKU con promo de % de descuento que sea medible por kg/lt/un.",
   "observed": "Causa: el SKU declarado 000000000000688028-UN (Canasto plush Easter Dkora, juguete) no tiene PPUM en ningún precio del shelf, así que el paso 6 (PPUM sobre el precio promocional) no se puede verificar. Los pasos 3 a 5 sí se cumplen: etiqueta 70%, precio promo $2.217 destacado, 'Antes: $7.390' tachado (más precio de socio $1.921). Acción: declarar en la planilla un SKU con promo de % de descuento que sea medible por kg/lt/un.",
   "preconditions": "User type: Guest o Registrado.\nViewport Desktop 1280x900.\nProducto con promoción de catálogo activa de tipo % de descuento (ej. 20% off).",
   "screenshots": [
    {
     "caption": "Paso 2 — shelf con promo de de descuento",
     "file": "TC-B2C62-D-006-p02-shelf-con-promo-de-de-descuento.png"
    }
   ],
   "spec": "tests/B2C-62.spec.ts:162",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a una PLP/SRP con viewport Desktop 1280x900.\n2. Localizar el shelf de un producto con promo % de descuento activa.\n3. Verificar que se muestra la etiqueta con el % de descuento (ej. \"-20%\").\n4. Verificar que el precio promocional se muestra destacado como precio principal.\n5. Verificar que el precio anterior se muestra tachado con la etiqueta \"Antes\".\n6. Verificar que el PPUM se calcula sobre el precio promocional (no sobre el regular).",
   "test_data": "URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; SKU 000000000000688028-UN",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "La promo de MdP se renderiza como precio fijo en CLP (precio efectivo post-descuento). No se muestra como pill con el %. El label del MdP (Unipay / Banco Estado) es visible.",
   "form_factor": "desktop",
   "id": "TC-B2C62-D-015",
   "name": "Renderizar promo MdP % dcto como precio fijo (Desktop)",
   "observation": "Causa: el SKU declarado 000000000000642688-UN (Galleta Oreo clásica vainilla 108 g) no se muestra en el ambiente: su PDP carga solo el breadcrumb y el bloque de marketing, sin ficha ni precio, y no aparece en su categoría panaderia-y-pasteleria; tampoco está en la PLP declarada carnes_vacuno. No hay shelf con promo de medio de pago que verificar. Acción: cargar/activar el SKU con promo Unipay o Banco Estado en el ambiente, o declarar otro.",
   "observed": "Causa: el SKU declarado 000000000000642688-UN (Galleta Oreo clásica vainilla 108 g) no se muestra en el ambiente: su PDP carga solo el breadcrumb y el bloque de marketing, sin ficha ni precio, y no aparece en su categoría panaderia-y-pasteleria; tampoco está en la PLP declarada carnes_vacuno. No hay shelf con promo de medio de pago que verificar. Acción: cargar/activar el SKU con promo Unipay o Banco Estado en el ambiente, o declarar otro.",
   "preconditions": "User type: Guest o Registrado.\nViewport Desktop 1280x900.\nProducto con promo de medio de pago (MdP: Unipay o Banco Estado) de tipo % de descuento activa.",
   "screenshots": [
    {
     "caption": "Paso 2 — pdp del sku sin producto",
     "file": "TC-B2C62-D-015-p02-pdp-del-sku-sin-producto.png"
    }
   ],
   "spec": "tests/B2C-62.spec.ts:251",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a una PLP/SRP con viewport Desktop 1280x900.\n2. Localizar el shelf de un producto con promo MdP % dcto activa (Unipay o Banco Estado).\n3. Verificar que el precio MdP se muestra como precio fijo en CLP (no como pill % de descuento).\n4. Verificar que el precio mostrado es el precio efectivo post-descuento.\n5. Verificar que el label identificador del MdP (Unipay / Banco Estado) es visible junto al precio.",
   "test_data": "URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; PLP carnes_vacuno; SKU 000000000000642688-UN",
   "viewport": "1280x900"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-19",
   "expected": "El shelf en Mobile muestra: etiqueta % dcto, precio promo destacado, \"Antes\" tachado y PPUM sobre precio promo.",
   "form_factor": "mobile",
   "id": "TC-B2C62-M-006",
   "name": "Mostrar etiqueta %, precio promo y 'Antes' tachado (Mobile)",
   "observation": "Causa: el SKU declarado 000000000000688028-UN (Canasto plush Easter Dkora, juguete) no tiene PPUM en ningún precio del shelf, así que el paso 6 (PPUM sobre el precio promocional) no se puede verificar. Los pasos 3 a 5 sí se cumplen: etiqueta 70%, precio promo $2.217 destacado, 'Antes: $7.390' tachado (más precio de socio $1.921). Acción: declarar en la planilla un SKU con promo de % de descuento que sea medible por kg/lt/un.",
   "observed": "Causa: el SKU declarado 000000000000688028-UN (Canasto plush Easter Dkora, juguete) no tiene PPUM en ningún precio del shelf, así que el paso 6 (PPUM sobre el precio promocional) no se puede verificar. Los pasos 3 a 5 sí se cumplen: etiqueta 70%, precio promo $2.217 destacado, 'Antes: $7.390' tachado (más precio de socio $1.921). Acción: declarar en la planilla un SKU con promo de % de descuento que sea medible por kg/lt/un.",
   "preconditions": "User type: Guest o Registrado.\nViewport Mobile 390x844.\nProducto con promoción de catálogo de tipo % de descuento activa.",
   "screenshots": [
    {
     "caption": "Paso 2 — shelf con promo de de descuento",
     "file": "TC-B2C62-M-006-p02-shelf-con-promo-de-de-descuento.png"
    }
   ],
   "spec": "tests/B2C-62.spec.ts:162",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a una PLP/SRP con viewport Mobile 390x844.\n2. Localizar el shelf de un producto con promo % de descuento.\n3. Verificar la etiqueta con % dcto visible.\n4. Verificar precio promo destacado como precio principal.\n5. Verificar precio \"Antes\" tachado.\n6. Verificar PPUM calculado sobre precio promo (no regular).",
   "test_data": "URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; SKU 000000000000688028-UN",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-19",
   "expected": "La promo de MdP se renderiza como precio fijo en Mobile. El precio es el efectivo post-descuento. Label del MdP visible.",
   "form_factor": "mobile",
   "id": "TC-B2C62-M-015",
   "name": "Renderizar promo MdP % dcto como precio fijo (Mobile)",
   "observation": "Causa: el SKU declarado 000000000000642688-UN (Galleta Oreo clásica vainilla 108 g) no se muestra en el ambiente: su PDP carga solo el breadcrumb y el bloque de marketing, sin ficha ni precio, y no aparece en su categoría panaderia-y-pasteleria; tampoco está en la PLP declarada carnes_vacuno. No hay shelf con promo de medio de pago que verificar. Acción: cargar/activar el SKU con promo Unipay o Banco Estado en el ambiente, o declarar otro.",
   "observed": "Causa: el SKU declarado 000000000000642688-UN (Galleta Oreo clásica vainilla 108 g) no se muestra en el ambiente: su PDP carga solo el breadcrumb y el bloque de marketing, sin ficha ni precio, y no aparece en su categoría panaderia-y-pasteleria; tampoco está en la PLP declarada carnes_vacuno. No hay shelf con promo de medio de pago que verificar. Acción: cargar/activar el SKU con promo Unipay o Banco Estado en el ambiente, o declarar otro.",
   "preconditions": "User type: Guest o Registrado.\nViewport Mobile 390x844.\nProducto con promo MdP % dcto activa (Unipay o Banco Estado).",
   "screenshots": [
    {
     "caption": "Paso 2 — pdp del sku sin producto",
     "file": "TC-B2C62-M-015-p02-pdp-del-sku-sin-producto.png"
    }
   ],
   "spec": "tests/B2C-62.spec.ts:251",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a una PLP/SRP con viewport Mobile 390x844.\n2. Localizar el shelf con promo MdP % dcto activa.\n3. Verificar que el precio MdP se muestra como precio fijo en CLP (no pill %).\n4. Verificar que el precio es el efectivo post-descuento.\n5. Verificar que el label del MdP es visible.",
   "test_data": "URL base: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; PLP carnes_vacuno; SKU 000000000000642688-UN",
   "viewport": "390x844"
  }
 ]
}
-->


---

## B2C-63 - Completa la promo - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-63 |
| Última actualización | 2026-10-19 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | chromium |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP1/B2C-63 Test cases.xlsx |
| Origen de la data | Datos Pruebas/Data Pruebas.xlsx |

### Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 14 |
| **Total** | **14** |

### Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-19 | 14 | TC-63-D-020, TC-63-D-021, TC-63-D-022, TC-63-D-023, TC-63-D-024, TC-63-D-025, TC-63-D-026, TC-63-M-020, TC-63-M-021, TC-63-M-022, TC-63-M-023, TC-63-M-024, TC-63-M-025, TC-63-M-026 |

### Detalle por caso de prueba

#### TC-63-D-020 - TC-63-D-020

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Spec | tests/B2C-63.spec.ts (sin test: bloqueado en exploracion) |

**Precondiciones**

User type: Guest

Dirección de entrega seleccionada: Calle Uno 23, La Florida (Despacho a domicilio con cobertura)

Producto 000000000664214001-UN con promo activa "Completa la promo" 2x1 (mismo SKU, sin código especial)

El carro contiene 000000000664214001-UN x 2 (promo 2x1 completada)

Viewport Desktop 1280x900

**Data utilizada**

- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas
- 000000000664214001-UN = 000000000664214001-UN
- Calle Uno 23, La Florida = Calle Uno 23, La Florida

**Pasos ejecutados**

1. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas.
2. Abrir un modal que contiene el shelf de 000000000664214001-UN (desde la PLP o un carrusel).
3. Verificar que el sistema muestra el modal con el shelf en 2 unidades y la promo completada.
4. Hacer clic en "−" en el shelf del modal.
5. Verificar que el sistema actualiza la cantidad a 1, retrocede la barra de progreso a 1 de 2 y muestra "Agrega 1 y ahorra más".

**Resultado esperado**

Dentro del modal el contador queda en 1, la barra de progreso retrocede a 1 de 2 y el mensaje cambia a "Agrega 1 y ahorra más"; el carro queda con 1 unidad.

**Resultado obtenido**

No ejecutable: el SKU declarado tiene promo 'Combina la promo' (2 por 1 a $2.550) y no 'Completa la promo'; con 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso ni toast.

**Observación**

Causa: el SKU declarado SKU (000000000664214001-UN, Lay's artesanas 150 g) no tiene en el ambiente la mecanica 'Completa la promo' que exige la precondicion: su shelf y su PDP muestran 'Combina la promo' (2 por 1 a $2.550) y, con invitado y la direccion declarada activa, al agregar 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso, sin toast ni 'Agrega 1 y ahorra más'. Accion requerida: cargar en el Excel de data un SKU con promo 'Completa la promo' 2x1 (mismo SKU) activa y con stock para esa direccion, y re-ejecutar.

**Evidencia**

![Impedimento — shelf del SKU en la PLP con 2 un. en carro: muestra "Combina la promo", sin barra de progreso ni toast](<B2C-63 Evidencias/s2.png>)

![Impedimento — PDP del SKU con 2 un. en carro: muestra "Combina la promo", sin "Completa la promo"](<B2C-63 Evidencias/s3.png>)

---

#### TC-63-D-021 - TC-63-D-021

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Spec | tests/B2C-63.spec.ts (sin test: bloqueado en exploracion) |

**Precondiciones**

User type: Guest

Dirección de entrega seleccionada: Calle Uno 23, La Florida (Despacho a domicilio con cobertura)

Producto 000000000664214001-UN con promo activa "Completa la promo" 2x1 (mismo SKU, sin código especial)

El carro contiene 000000000664214001-UN x 2 (promo 2x1 completada)

Viewport Desktop 1280x900

**Data utilizada**

- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas
- 000000000664214001-UN = 000000000664214001-UN
- Calle Uno 23, La Florida = Calle Uno 23, La Florida

**Pasos ejecutados**

1. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. Abrir la PDP de 000000000664214001-UN.
3. Verificar que el sistema carga la PDP con el contador en 2 y la barra de progreso completa.
4. Hacer clic en "−" en el stepper de la PDP.
5. Verificar que el sistema actualiza el contador a 1, retrocede la barra de progreso a 1 de 2 y muestra "Agrega 1 y ahorra más".

**Resultado esperado**

En la PDP el contador queda en 1, la barra de progreso retrocede a 1 de 2 y se muestra "Agrega 1 y ahorra más".

**Resultado obtenido**

No ejecutable: el SKU declarado tiene promo 'Combina la promo' (2 por 1 a $2.550) y no 'Completa la promo'; con 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso ni toast.

**Observación**

Causa: el SKU declarado SKU (000000000664214001-UN, Lay's artesanas 150 g) no tiene en el ambiente la mecanica 'Completa la promo' que exige la precondicion: su shelf y su PDP muestran 'Combina la promo' (2 por 1 a $2.550) y, con invitado y la direccion declarada activa, al agregar 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso, sin toast ni 'Agrega 1 y ahorra más'. Accion requerida: cargar en el Excel de data un SKU con promo 'Completa la promo' 2x1 (mismo SKU) activa y con stock para esa direccion, y re-ejecutar.

**Evidencia**

![Impedimento — shelf del SKU en la PLP con 2 un. en carro: muestra "Combina la promo", sin barra de progreso ni toast](<B2C-63 Evidencias/s2.png>)

![Impedimento — PDP del SKU con 2 un. en carro: muestra "Combina la promo", sin "Completa la promo"](<B2C-63 Evidencias/s3.png>)

---

#### TC-63-D-022 - TC-63-D-022

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Spec | tests/B2C-63.spec.ts (sin test: bloqueado en exploracion) |

**Precondiciones**

User type: Guest

Dirección de entrega seleccionada: Calle Uno 23, La Florida (Despacho a domicilio con cobertura)

Producto 000000000664214001-UN con promo activa "Completa la promo" 2x1 (mismo SKU, sin código especial)

El carro contiene 000000000664214001-UN x 2 (promo 2x1 completada)

000000000664214001-UN aparece en un carrusel del Home

Viewport Desktop 1280x900

**Data utilizada**

- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas
- 000000000664214001-UN = 000000000664214001-UN
- Calle Uno 23, La Florida = Calle Uno 23, La Florida

**Pasos ejecutados**

1. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ (Home).
2. Ubicar 000000000664214001-UN en un carrusel del Home.
3. Verificar que el sistema muestra el shelf del carrusel con el contador en 2 y la barra de progreso completa.
4. Hacer clic en "−" en el shelf del carrusel.
5. Verificar que el sistema actualiza el contador a 1, retrocede la barra de progreso a 1 de 2 y muestra "Agrega 1 y ahorra más".

**Resultado esperado**

En el carrusel el contador queda en 1, la barra de progreso retrocede a 1 de 2 y se muestra "Agrega 1 y ahorra más".

**Resultado obtenido**

No ejecutable: el SKU declarado tiene promo 'Combina la promo' (2 por 1 a $2.550) y no 'Completa la promo'; con 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso ni toast.

**Observación**

Causa: el SKU declarado SKU (000000000664214001-UN, Lay's artesanas 150 g) no tiene en el ambiente la mecanica 'Completa la promo' que exige la precondicion: su shelf y su PDP muestran 'Combina la promo' (2 por 1 a $2.550) y, con invitado y la direccion declarada activa, al agregar 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso, sin toast ni 'Agrega 1 y ahorra más'. Accion requerida: cargar en el Excel de data un SKU con promo 'Completa la promo' 2x1 (mismo SKU) activa y con stock para esa direccion, y re-ejecutar.

**Evidencia**

![Impedimento — shelf del SKU en la PLP con 2 un. en carro: muestra "Combina la promo", sin barra de progreso ni toast](<B2C-63 Evidencias/s2.png>)

![Impedimento — PDP del SKU con 2 un. en carro: muestra "Combina la promo", sin "Completa la promo"](<B2C-63 Evidencias/s3.png>)

---

#### TC-63-D-023 - TC-63-D-023

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Spec | tests/B2C-63.spec.ts (sin test: bloqueado en exploracion) |

**Precondiciones**

User type: Guest

Dirección de entrega seleccionada: Calle Uno 23, La Florida (Despacho a domicilio con cobertura)

Producto 000000000664214001-UN con promo activa "Completa la promo" 2x1 (mismo SKU, sin código especial)

El carro contiene 000000000664214001-UN x 3 (1er ciclo completado y 2º ciclo en 1 de 2)

Viewport Desktop 1280x900

**Data utilizada**

- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas
- 000000000664214001-UN = 000000000664214001-UN
- Calle Uno 23, La Florida = Calle Uno 23, La Florida

**Pasos ejecutados**

1. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas y ubicar el shelf de 000000000664214001-UN.
2. Verificar que el sistema muestra el shelf de 000000000664214001-UN con el contador en 3 y la barra de progreso en 1 de 2.
3. Hacer clic en "+" en el shelf.
4. Verificar que el sistema actualiza el contador a 4, completa la barra de progreso y muestra el toast "¡Completaste la promo!".

**Resultado esperado**

Con 4 unidades se muestra nuevamente el toast "¡Completaste la promo!", la barra de progreso queda completa y el contador muestra 4.

**Resultado obtenido**

No ejecutable: el SKU declarado tiene promo 'Combina la promo' (2 por 1 a $2.550) y no 'Completa la promo'; con 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso ni toast.

**Observación**

Causa: el SKU declarado SKU (000000000664214001-UN, Lay's artesanas 150 g) no tiene en el ambiente la mecanica 'Completa la promo' que exige la precondicion: su shelf y su PDP muestran 'Combina la promo' (2 por 1 a $2.550) y, con invitado y la direccion declarada activa, al agregar 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso, sin toast ni 'Agrega 1 y ahorra más'. Accion requerida: cargar en el Excel de data un SKU con promo 'Completa la promo' 2x1 (mismo SKU) activa y con stock para esa direccion, y re-ejecutar.

**Evidencia**

![Impedimento — shelf del SKU en la PLP con 2 un. en carro: muestra "Combina la promo", sin barra de progreso ni toast](<B2C-63 Evidencias/s2.png>)

![Impedimento — PDP del SKU con 2 un. en carro: muestra "Combina la promo", sin "Completa la promo"](<B2C-63 Evidencias/s3.png>)

---

#### TC-63-D-024 - TC-63-D-024

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Spec | tests/B2C-63.spec.ts (sin test: bloqueado en exploracion) |

**Precondiciones**

User type: Guest

Dirección de entrega seleccionada: Calle Uno 23, La Florida (Despacho a domicilio con cobertura)

Producto 000000000664214001-UN con promo activa "Completa la promo" 2x1 (mismo SKU, sin código especial)

El carro contiene 000000000664214001-UN x 4 (dos ciclos completos)

Viewport Desktop 1280x900

**Data utilizada**

- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas
- 000000000664214001-UN = 000000000664214001-UN
- Calle Uno 23, La Florida = Calle Uno 23, La Florida

**Pasos ejecutados**

1. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas y ubicar el shelf de 000000000664214001-UN.
2. Verificar que el sistema muestra el shelf de 000000000664214001-UN con el contador en 4 y la barra de progreso completa.
3. Hacer clic en "−" en el shelf.
4. Verificar que el sistema actualiza el contador a 3, retrocede la barra de progreso a 1 de 2 y muestra "Agrega 1 y ahorra más".

**Resultado esperado**

Con 3 unidades el contador muestra 3, la barra de progreso queda en 1 de 2 (2º ciclo en progreso) y el mensaje cambia a "Agrega 1 y ahorra más"; el 1er ciclo sigue completo.

**Resultado obtenido**

No ejecutable: el SKU declarado tiene promo 'Combina la promo' (2 por 1 a $2.550) y no 'Completa la promo'; con 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso ni toast.

**Observación**

Causa: el SKU declarado SKU (000000000664214001-UN, Lay's artesanas 150 g) no tiene en el ambiente la mecanica 'Completa la promo' que exige la precondicion: su shelf y su PDP muestran 'Combina la promo' (2 por 1 a $2.550) y, con invitado y la direccion declarada activa, al agregar 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso, sin toast ni 'Agrega 1 y ahorra más'. Accion requerida: cargar en el Excel de data un SKU con promo 'Completa la promo' 2x1 (mismo SKU) activa y con stock para esa direccion, y re-ejecutar.

**Evidencia**

![Impedimento — shelf del SKU en la PLP con 2 un. en carro: muestra "Combina la promo", sin barra de progreso ni toast](<B2C-63 Evidencias/s2.png>)

![Impedimento — PDP del SKU con 2 un. en carro: muestra "Combina la promo", sin "Completa la promo"](<B2C-63 Evidencias/s3.png>)

---

#### TC-63-D-025 - TC-63-D-025

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Spec | tests/B2C-63.spec.ts (sin test: bloqueado en exploracion) |

**Precondiciones**

User type: Guest

Dirección de entrega seleccionada: Calle Uno 23, La Florida (Despacho a domicilio con cobertura)

Producto 000000000664214001-UN con promo activa "Completa la promo" 2x1 (mismo SKU, sin código especial)

Carro vacío

000000000664214001-UN aparece en un carrusel del Home

Viewport Desktop 1280x900

**Data utilizada**

- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas
- 000000000664214001-UN = 000000000664214001-UN
- Calle Uno 23, La Florida = Calle Uno 23, La Florida

**Pasos ejecutados**

1. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ (Home).
2. Hacer clic en "Agregar" en el shelf de 000000000664214001-UN en un carrusel del Home.
3. Verificar que el sistema agrega la unidad y muestra "Agrega 1 y ahorra más" con la barra de progreso en 1 de 2.
4. Abrir la PDP de 000000000664214001-UN.
5. Verificar que el sistema carga la PDP con el contador en 1 y la barra de progreso en 1 de 2.
6. Hacer clic en "+" en el stepper de la PDP.
7. Verificar que el sistema actualiza el contador a 2, completa la barra de progreso y muestra el toast "¡Completaste la promo!".

**Resultado esperado**

La PDP conserva el progreso iniciado en el Home (contador 1, barra 1 de 2) y al agregar la 2ª unidad muestra "¡Completaste la promo!".

**Resultado obtenido**

No ejecutable: el SKU declarado tiene promo 'Combina la promo' (2 por 1 a $2.550) y no 'Completa la promo'; con 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso ni toast.

**Observación**

Causa: el SKU declarado SKU (000000000664214001-UN, Lay's artesanas 150 g) no tiene en el ambiente la mecanica 'Completa la promo' que exige la precondicion: su shelf y su PDP muestran 'Combina la promo' (2 por 1 a $2.550) y, con invitado y la direccion declarada activa, al agregar 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso, sin toast ni 'Agrega 1 y ahorra más'. Accion requerida: cargar en el Excel de data un SKU con promo 'Completa la promo' 2x1 (mismo SKU) activa y con stock para esa direccion, y re-ejecutar.

**Evidencia**

![Impedimento — shelf del SKU en la PLP con 2 un. en carro: muestra "Combina la promo", sin barra de progreso ni toast](<B2C-63 Evidencias/s2.png>)

![Impedimento — PDP del SKU con 2 un. en carro: muestra "Combina la promo", sin "Completa la promo"](<B2C-63 Evidencias/s3.png>)

---

#### TC-63-D-026 - TC-63-D-026

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Spec | tests/B2C-63.spec.ts (sin test: bloqueado en exploracion) |

**Precondiciones**

User type: Guest

Dirección de entrega seleccionada: Calle Uno 23, La Florida (Despacho a domicilio con cobertura)

Producto 000000000664214001-UN con promo activa "Completa la promo" 2x1 (mismo SKU, sin código especial)

Carro vacío

000000000664214001-UN aparece en un carrusel del Home

Viewport Desktop 1280x900

**Data utilizada**

- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas
- 000000000664214001-UN = 000000000664214001-UN
- Calle Uno 23, La Florida = Calle Uno 23, La Florida

**Pasos ejecutados**

1. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ (Home).
2. Hacer clic en "Agregar" en el shelf de 000000000664214001-UN en un carrusel del Home.
3. Verificar que el sistema agrega la unidad y muestra "Agrega 1 y ahorra más" con la barra de progreso en 1 de 2.
4. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas y ubicar el shelf de 000000000664214001-UN.
5. Verificar que el sistema muestra el shelf de 000000000664214001-UN con el contador en 1 y la barra de progreso en 1 de 2.
6. Hacer clic en "+" en el shelf.
7. Verificar que el sistema actualiza el contador a 2, completa la barra de progreso y muestra el toast "¡Completaste la promo!".

**Resultado esperado**

El shelf de la PLP conserva el progreso iniciado en el Home (contador 1, barra 1 de 2) y al agregar la 2ª unidad muestra "¡Completaste la promo!".

**Resultado obtenido**

No ejecutable: el SKU declarado tiene promo 'Combina la promo' (2 por 1 a $2.550) y no 'Completa la promo'; con 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso ni toast.

**Observación**

Causa: el SKU declarado SKU (000000000664214001-UN, Lay's artesanas 150 g) no tiene en el ambiente la mecanica 'Completa la promo' que exige la precondicion: su shelf y su PDP muestran 'Combina la promo' (2 por 1 a $2.550) y, con invitado y la direccion declarada activa, al agregar 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso, sin toast ni 'Agrega 1 y ahorra más'. Accion requerida: cargar en el Excel de data un SKU con promo 'Completa la promo' 2x1 (mismo SKU) activa y con stock para esa direccion, y re-ejecutar.

**Evidencia**

![Impedimento — shelf del SKU en la PLP con 2 un. en carro: muestra "Combina la promo", sin barra de progreso ni toast](<B2C-63 Evidencias/s2.png>)

![Impedimento — PDP del SKU con 2 un. en carro: muestra "Combina la promo", sin "Completa la promo"](<B2C-63 Evidencias/s3.png>)

---

#### TC-63-M-020 - TC-63-M-020

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-63.spec.ts (sin test: bloqueado en exploracion) |

**Precondiciones**

User type: Guest

Dirección de entrega seleccionada: Calle Uno 23, La Florida (Despacho a domicilio con cobertura)

Producto 000000000664214001-UN con promo activa "Completa la promo" 2x1 (mismo SKU, sin código especial)

El carro contiene 000000000664214001-UN x 2 (promo 2x1 completada)

Viewport Mobile 390x844

**Data utilizada**

- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas
- 000000000664214001-UN = 000000000664214001-UN
- Calle Uno 23, La Florida = Calle Uno 23, La Florida

**Pasos ejecutados**

1. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas.
2. Abrir un modal que contiene el shelf de 000000000664214001-UN (desde la PLP o un carrusel).
3. Verificar que el sistema muestra el modal con el shelf en 2 unidades y la promo completada.
4. Hacer tap en "−" en el shelf del modal.
5. Verificar que el sistema actualiza la cantidad a 1, retrocede la barra de progreso a 1 de 2 y muestra "Agrega 1 y ahorra más".

**Resultado esperado**

Dentro del modal el contador queda en 1, la barra de progreso retrocede a 1 de 2 y el mensaje cambia a "Agrega 1 y ahorra más"; el carro queda con 1 unidad.

**Resultado obtenido**

No ejecutable: el SKU declarado tiene promo 'Combina la promo' (2 por 1 a $2.550) y no 'Completa la promo'; con 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso ni toast.

**Observación**

Causa: el SKU declarado SKU (000000000664214001-UN, Lay's artesanas 150 g) no tiene en el ambiente la mecanica 'Completa la promo' que exige la precondicion: su shelf y su PDP muestran 'Combina la promo' (2 por 1 a $2.550) y, con invitado y la direccion declarada activa, al agregar 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso, sin toast ni 'Agrega 1 y ahorra más'. Accion requerida: cargar en el Excel de data un SKU con promo 'Completa la promo' 2x1 (mismo SKU) activa y con stock para esa direccion, y re-ejecutar.

**Evidencia**

![Impedimento — shelf del SKU en la PLP con 2 un. en carro: muestra "Combina la promo", sin barra de progreso ni toast](<B2C-63 Evidencias/m2.png>)

![Impedimento — PDP del SKU con 2 un. en carro: muestra "Combina la promo", sin "Completa la promo"](<B2C-63 Evidencias/m3.png>)

---

#### TC-63-M-021 - TC-63-M-021

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-63.spec.ts (sin test: bloqueado en exploracion) |

**Precondiciones**

User type: Guest

Dirección de entrega seleccionada: Calle Uno 23, La Florida (Despacho a domicilio con cobertura)

Producto 000000000664214001-UN con promo activa "Completa la promo" 2x1 (mismo SKU, sin código especial)

El carro contiene 000000000664214001-UN x 2 (promo 2x1 completada)

Viewport Mobile 390x844

**Data utilizada**

- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas
- 000000000664214001-UN = 000000000664214001-UN
- Calle Uno 23, La Florida = Calle Uno 23, La Florida

**Pasos ejecutados**

1. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. Abrir la PDP de 000000000664214001-UN.
3. Verificar que el sistema carga la PDP con el contador en 2 y la barra de progreso completa.
4. Hacer tap en "−" en el stepper de la PDP.
5. Verificar que el sistema actualiza el contador a 1, retrocede la barra de progreso a 1 de 2 y muestra "Agrega 1 y ahorra más".

**Resultado esperado**

En la PDP el contador queda en 1, la barra de progreso retrocede a 1 de 2 y se muestra "Agrega 1 y ahorra más".

**Resultado obtenido**

No ejecutable: el SKU declarado tiene promo 'Combina la promo' (2 por 1 a $2.550) y no 'Completa la promo'; con 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso ni toast.

**Observación**

Causa: el SKU declarado SKU (000000000664214001-UN, Lay's artesanas 150 g) no tiene en el ambiente la mecanica 'Completa la promo' que exige la precondicion: su shelf y su PDP muestran 'Combina la promo' (2 por 1 a $2.550) y, con invitado y la direccion declarada activa, al agregar 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso, sin toast ni 'Agrega 1 y ahorra más'. Accion requerida: cargar en el Excel de data un SKU con promo 'Completa la promo' 2x1 (mismo SKU) activa y con stock para esa direccion, y re-ejecutar.

**Evidencia**

![Impedimento — shelf del SKU en la PLP con 2 un. en carro: muestra "Combina la promo", sin barra de progreso ni toast](<B2C-63 Evidencias/m2.png>)

![Impedimento — PDP del SKU con 2 un. en carro: muestra "Combina la promo", sin "Completa la promo"](<B2C-63 Evidencias/m3.png>)

---

#### TC-63-M-022 - TC-63-M-022

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-63.spec.ts (sin test: bloqueado en exploracion) |

**Precondiciones**

User type: Guest

Dirección de entrega seleccionada: Calle Uno 23, La Florida (Despacho a domicilio con cobertura)

Producto 000000000664214001-UN con promo activa "Completa la promo" 2x1 (mismo SKU, sin código especial)

El carro contiene 000000000664214001-UN x 2 (promo 2x1 completada)

000000000664214001-UN aparece en un carrusel del Home

Viewport Mobile 390x844

**Data utilizada**

- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas
- 000000000664214001-UN = 000000000664214001-UN
- Calle Uno 23, La Florida = Calle Uno 23, La Florida

**Pasos ejecutados**

1. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ (Home).
2. Ubicar 000000000664214001-UN en un carrusel del Home.
3. Verificar que el sistema muestra el shelf del carrusel con el contador en 2 y la barra de progreso completa.
4. Hacer tap en "−" en el shelf del carrusel.
5. Verificar que el sistema actualiza el contador a 1, retrocede la barra de progreso a 1 de 2 y muestra "Agrega 1 y ahorra más".

**Resultado esperado**

En el carrusel el contador queda en 1, la barra de progreso retrocede a 1 de 2 y se muestra "Agrega 1 y ahorra más".

**Resultado obtenido**

No ejecutable: el SKU declarado tiene promo 'Combina la promo' (2 por 1 a $2.550) y no 'Completa la promo'; con 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso ni toast.

**Observación**

Causa: el SKU declarado SKU (000000000664214001-UN, Lay's artesanas 150 g) no tiene en el ambiente la mecanica 'Completa la promo' que exige la precondicion: su shelf y su PDP muestran 'Combina la promo' (2 por 1 a $2.550) y, con invitado y la direccion declarada activa, al agregar 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso, sin toast ni 'Agrega 1 y ahorra más'. Accion requerida: cargar en el Excel de data un SKU con promo 'Completa la promo' 2x1 (mismo SKU) activa y con stock para esa direccion, y re-ejecutar.

**Evidencia**

![Impedimento — shelf del SKU en la PLP con 2 un. en carro: muestra "Combina la promo", sin barra de progreso ni toast](<B2C-63 Evidencias/m2.png>)

![Impedimento — PDP del SKU con 2 un. en carro: muestra "Combina la promo", sin "Completa la promo"](<B2C-63 Evidencias/m3.png>)

---

#### TC-63-M-023 - TC-63-M-023

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-63.spec.ts (sin test: bloqueado en exploracion) |

**Precondiciones**

User type: Guest

Dirección de entrega seleccionada: Calle Uno 23, La Florida (Despacho a domicilio con cobertura)

Producto 000000000664214001-UN con promo activa "Completa la promo" 2x1 (mismo SKU, sin código especial)

El carro contiene 000000000664214001-UN x 3 (1er ciclo completado y 2º ciclo en 1 de 2)

Viewport Mobile 390x844

**Data utilizada**

- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas
- 000000000664214001-UN = 000000000664214001-UN
- Calle Uno 23, La Florida = Calle Uno 23, La Florida

**Pasos ejecutados**

1. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas y ubicar el shelf de 000000000664214001-UN.
2. Verificar que el sistema muestra el shelf de 000000000664214001-UN con el contador en 3 y la barra de progreso en 1 de 2.
3. Hacer tap en "+" en el shelf.
4. Verificar que el sistema actualiza el contador a 4, completa la barra de progreso y muestra el toast "¡Completaste la promo!".

**Resultado esperado**

Con 4 unidades se muestra nuevamente el toast "¡Completaste la promo!", la barra de progreso queda completa y el contador muestra 4.

**Resultado obtenido**

No ejecutable: el SKU declarado tiene promo 'Combina la promo' (2 por 1 a $2.550) y no 'Completa la promo'; con 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso ni toast.

**Observación**

Causa: el SKU declarado SKU (000000000664214001-UN, Lay's artesanas 150 g) no tiene en el ambiente la mecanica 'Completa la promo' que exige la precondicion: su shelf y su PDP muestran 'Combina la promo' (2 por 1 a $2.550) y, con invitado y la direccion declarada activa, al agregar 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso, sin toast ni 'Agrega 1 y ahorra más'. Accion requerida: cargar en el Excel de data un SKU con promo 'Completa la promo' 2x1 (mismo SKU) activa y con stock para esa direccion, y re-ejecutar.

**Evidencia**

![Impedimento — shelf del SKU en la PLP con 2 un. en carro: muestra "Combina la promo", sin barra de progreso ni toast](<B2C-63 Evidencias/m2.png>)

![Impedimento — PDP del SKU con 2 un. en carro: muestra "Combina la promo", sin "Completa la promo"](<B2C-63 Evidencias/m3.png>)

---

#### TC-63-M-024 - TC-63-M-024

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-63.spec.ts (sin test: bloqueado en exploracion) |

**Precondiciones**

User type: Guest

Dirección de entrega seleccionada: Calle Uno 23, La Florida (Despacho a domicilio con cobertura)

Producto 000000000664214001-UN con promo activa "Completa la promo" 2x1 (mismo SKU, sin código especial)

El carro contiene 000000000664214001-UN x 4 (dos ciclos completos)

Viewport Mobile 390x844

**Data utilizada**

- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas
- 000000000664214001-UN = 000000000664214001-UN
- Calle Uno 23, La Florida = Calle Uno 23, La Florida

**Pasos ejecutados**

1. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas y ubicar el shelf de 000000000664214001-UN.
2. Verificar que el sistema muestra el shelf de 000000000664214001-UN con el contador en 4 y la barra de progreso completa.
3. Hacer tap en "−" en el shelf.
4. Verificar que el sistema actualiza el contador a 3, retrocede la barra de progreso a 1 de 2 y muestra "Agrega 1 y ahorra más".

**Resultado esperado**

Con 3 unidades el contador muestra 3, la barra de progreso queda en 1 de 2 (2º ciclo en progreso) y el mensaje cambia a "Agrega 1 y ahorra más"; el 1er ciclo sigue completo.

**Resultado obtenido**

No ejecutable: el SKU declarado tiene promo 'Combina la promo' (2 por 1 a $2.550) y no 'Completa la promo'; con 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso ni toast.

**Observación**

Causa: el SKU declarado SKU (000000000664214001-UN, Lay's artesanas 150 g) no tiene en el ambiente la mecanica 'Completa la promo' que exige la precondicion: su shelf y su PDP muestran 'Combina la promo' (2 por 1 a $2.550) y, con invitado y la direccion declarada activa, al agregar 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso, sin toast ni 'Agrega 1 y ahorra más'. Accion requerida: cargar en el Excel de data un SKU con promo 'Completa la promo' 2x1 (mismo SKU) activa y con stock para esa direccion, y re-ejecutar.

**Evidencia**

![Impedimento — shelf del SKU en la PLP con 2 un. en carro: muestra "Combina la promo", sin barra de progreso ni toast](<B2C-63 Evidencias/m2.png>)

![Impedimento — PDP del SKU con 2 un. en carro: muestra "Combina la promo", sin "Completa la promo"](<B2C-63 Evidencias/m3.png>)

---

#### TC-63-M-025 - TC-63-M-025

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-63.spec.ts (sin test: bloqueado en exploracion) |

**Precondiciones**

User type: Guest

Dirección de entrega seleccionada: Calle Uno 23, La Florida (Despacho a domicilio con cobertura)

Producto 000000000664214001-UN con promo activa "Completa la promo" 2x1 (mismo SKU, sin código especial)

Carro vacío

000000000664214001-UN aparece en un carrusel del Home

Viewport Mobile 390x844

**Data utilizada**

- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas
- 000000000664214001-UN = 000000000664214001-UN
- Calle Uno 23, La Florida = Calle Uno 23, La Florida

**Pasos ejecutados**

1. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ (Home).
2. Hacer tap en "Agregar" en el shelf de 000000000664214001-UN en un carrusel del Home.
3. Verificar que el sistema agrega la unidad y muestra "Agrega 1 y ahorra más" con la barra de progreso en 1 de 2.
4. Abrir la PDP de 000000000664214001-UN.
5. Verificar que el sistema carga la PDP con el contador en 1 y la barra de progreso en 1 de 2.
6. Hacer tap en "+" en el stepper de la PDP.
7. Verificar que el sistema actualiza el contador a 2, completa la barra de progreso y muestra el toast "¡Completaste la promo!".

**Resultado esperado**

La PDP conserva el progreso iniciado en el Home (contador 1, barra 1 de 2) y al agregar la 2ª unidad muestra "¡Completaste la promo!".

**Resultado obtenido**

No ejecutable: el SKU declarado tiene promo 'Combina la promo' (2 por 1 a $2.550) y no 'Completa la promo'; con 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso ni toast.

**Observación**

Causa: el SKU declarado SKU (000000000664214001-UN, Lay's artesanas 150 g) no tiene en el ambiente la mecanica 'Completa la promo' que exige la precondicion: su shelf y su PDP muestran 'Combina la promo' (2 por 1 a $2.550) y, con invitado y la direccion declarada activa, al agregar 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso, sin toast ni 'Agrega 1 y ahorra más'. Accion requerida: cargar en el Excel de data un SKU con promo 'Completa la promo' 2x1 (mismo SKU) activa y con stock para esa direccion, y re-ejecutar.

**Evidencia**

![Impedimento — shelf del SKU en la PLP con 2 un. en carro: muestra "Combina la promo", sin barra de progreso ni toast](<B2C-63 Evidencias/m2.png>)

![Impedimento — PDP del SKU con 2 un. en carro: muestra "Combina la promo", sin "Completa la promo"](<B2C-63 Evidencias/m3.png>)

---

#### TC-63-M-026 - TC-63-M-026

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-63.spec.ts (sin test: bloqueado en exploracion) |

**Precondiciones**

User type: Guest

Dirección de entrega seleccionada: Calle Uno 23, La Florida (Despacho a domicilio con cobertura)

Producto 000000000664214001-UN con promo activa "Completa la promo" 2x1 (mismo SKU, sin código especial)

Carro vacío

000000000664214001-UN aparece en un carrusel del Home

Viewport Mobile 390x844

**Data utilizada**

- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas
- 000000000664214001-UN = 000000000664214001-UN
- Calle Uno 23, La Florida = Calle Uno 23, La Florida

**Pasos ejecutados**

1. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ (Home).
2. Hacer tap en "Agregar" en el shelf de 000000000664214001-UN en un carrusel del Home.
3. Verificar que el sistema agrega la unidad y muestra "Agrega 1 y ahorra más" con la barra de progreso en 1 de 2.
4. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas y ubicar el shelf de 000000000664214001-UN.
5. Verificar que el sistema muestra el shelf de 000000000664214001-UN con el contador en 1 y la barra de progreso en 1 de 2.
6. Hacer tap en "+" en el shelf.
7. Verificar que el sistema actualiza el contador a 2, completa la barra de progreso y muestra el toast "¡Completaste la promo!".

**Resultado esperado**

El shelf de la PLP conserva el progreso iniciado en el Home (contador 1, barra 1 de 2) y al agregar la 2ª unidad muestra "¡Completaste la promo!".

**Resultado obtenido**

No ejecutable: el SKU declarado tiene promo 'Combina la promo' (2 por 1 a $2.550) y no 'Completa la promo'; con 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso ni toast.

**Observación**

Causa: el SKU declarado SKU (000000000664214001-UN, Lay's artesanas 150 g) no tiene en el ambiente la mecanica 'Completa la promo' que exige la precondicion: su shelf y su PDP muestran 'Combina la promo' (2 por 1 a $2.550) y, con invitado y la direccion declarada activa, al agregar 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso, sin toast ni 'Agrega 1 y ahorra más'. Accion requerida: cargar en el Excel de data un SKU con promo 'Completa la promo' 2x1 (mismo SKU) activa y con stock para esa direccion, y re-ejecutar.

**Evidencia**

![Impedimento — shelf del SKU en la PLP con 2 un. en carro: muestra "Combina la promo", sin barra de progreso ni toast](<B2C-63 Evidencias/m2.png>)

![Impedimento — PDP del SKU con 2 un. en carro: muestra "Combina la promo", sin "Completa la promo"](<B2C-63 Evidencias/m3.png>)

---

<!-- qa-evidence-state
{
 "header": {
  "browsers": {
   "desktop": "chromium",
   "mobile": "chromium"
  },
  "data_file": "Datos Pruebas/Data Pruebas.xlsx",
  "environment": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-63",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP1/B2C-63 Test cases.xlsx",
  "title": "B2C-63 - Completa la promo - Evidencias QA",
  "updated_at": "2026-10-19"
 },
 "history": {
  "2026-10-19": [
   "TC-63-D-020",
   "TC-63-D-021",
   "TC-63-D-022",
   "TC-63-D-023",
   "TC-63-D-024",
   "TC-63-D-025",
   "TC-63-D-026",
   "TC-63-M-020",
   "TC-63-M-021",
   "TC-63-M-022",
   "TC-63-M-023",
   "TC-63-M-024",
   "TC-63-M-025",
   "TC-63-M-026"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "Dentro del modal el contador queda en 1, la barra de progreso retrocede a 1 de 2 y el mensaje cambia a \"Agrega 1 y ahorra más\"; el carro queda con 1 unidad.",
   "form_factor": "desktop",
   "id": "TC-63-D-020",
   "name": "TC-63-D-020",
   "observation": "Causa: el SKU declarado SKU (000000000664214001-UN, Lay's artesanas 150 g) no tiene en el ambiente la mecanica 'Completa la promo' que exige la precondicion: su shelf y su PDP muestran 'Combina la promo' (2 por 1 a $2.550) y, con invitado y la direccion declarada activa, al agregar 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso, sin toast ni 'Agrega 1 y ahorra más'. Accion requerida: cargar en el Excel de data un SKU con promo 'Completa la promo' 2x1 (mismo SKU) activa y con stock para esa direccion, y re-ejecutar.",
   "observed": "No ejecutable: el SKU declarado tiene promo 'Combina la promo' (2 por 1 a $2.550) y no 'Completa la promo'; con 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso ni toast.",
   "preconditions": "User type: Guest\nDirección de entrega seleccionada: Calle Uno 23, La Florida (Despacho a domicilio con cobertura)\nProducto 000000000664214001-UN con promo activa \"Completa la promo\" 2x1 (mismo SKU, sin código especial)\nEl carro contiene 000000000664214001-UN x 2 (promo 2x1 completada)\nViewport Desktop 1280x900",
   "screenshots": [
    {
     "caption": "Impedimento — shelf del SKU en la PLP con 2 un. en carro: muestra \"Combina la promo\", sin barra de progreso ni toast",
     "file": "s2.png"
    },
    {
     "caption": "Impedimento — PDP del SKU con 2 un. en carro: muestra \"Combina la promo\", sin \"Completa la promo\"",
     "file": "s3.png"
    }
   ],
   "spec": "tests/B2C-63.spec.ts (sin test: bloqueado en exploracion)",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas.\n2. Abrir un modal que contiene el shelf de 000000000664214001-UN (desde la PLP o un carrusel).\n3. Verificar que el sistema muestra el modal con el shelf en 2 unidades y la promo completada.\n4. Hacer clic en \"−\" en el shelf del modal.\n5. Verificar que el sistema actualiza la cantidad a 1, retrocede la barra de progreso a 1 de 2 y muestra \"Agrega 1 y ahorra más\".",
   "test_data": "- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas\n- 000000000664214001-UN = 000000000664214001-UN\n- Calle Uno 23, La Florida = Calle Uno 23, La Florida",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "En la PDP el contador queda en 1, la barra de progreso retrocede a 1 de 2 y se muestra \"Agrega 1 y ahorra más\".",
   "form_factor": "desktop",
   "id": "TC-63-D-021",
   "name": "TC-63-D-021",
   "observation": "Causa: el SKU declarado SKU (000000000664214001-UN, Lay's artesanas 150 g) no tiene en el ambiente la mecanica 'Completa la promo' que exige la precondicion: su shelf y su PDP muestran 'Combina la promo' (2 por 1 a $2.550) y, con invitado y la direccion declarada activa, al agregar 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso, sin toast ni 'Agrega 1 y ahorra más'. Accion requerida: cargar en el Excel de data un SKU con promo 'Completa la promo' 2x1 (mismo SKU) activa y con stock para esa direccion, y re-ejecutar.",
   "observed": "No ejecutable: el SKU declarado tiene promo 'Combina la promo' (2 por 1 a $2.550) y no 'Completa la promo'; con 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso ni toast.",
   "preconditions": "User type: Guest\nDirección de entrega seleccionada: Calle Uno 23, La Florida (Despacho a domicilio con cobertura)\nProducto 000000000664214001-UN con promo activa \"Completa la promo\" 2x1 (mismo SKU, sin código especial)\nEl carro contiene 000000000664214001-UN x 2 (promo 2x1 completada)\nViewport Desktop 1280x900",
   "screenshots": [
    {
     "caption": "Impedimento — shelf del SKU en la PLP con 2 un. en carro: muestra \"Combina la promo\", sin barra de progreso ni toast",
     "file": "s2.png"
    },
    {
     "caption": "Impedimento — PDP del SKU con 2 un. en carro: muestra \"Combina la promo\", sin \"Completa la promo\"",
     "file": "s3.png"
    }
   ],
   "spec": "tests/B2C-63.spec.ts (sin test: bloqueado en exploracion)",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. Abrir la PDP de 000000000664214001-UN.\n3. Verificar que el sistema carga la PDP con el contador en 2 y la barra de progreso completa.\n4. Hacer clic en \"−\" en el stepper de la PDP.\n5. Verificar que el sistema actualiza el contador a 1, retrocede la barra de progreso a 1 de 2 y muestra \"Agrega 1 y ahorra más\".",
   "test_data": "- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas\n- 000000000664214001-UN = 000000000664214001-UN\n- Calle Uno 23, La Florida = Calle Uno 23, La Florida",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "En el carrusel el contador queda en 1, la barra de progreso retrocede a 1 de 2 y se muestra \"Agrega 1 y ahorra más\".",
   "form_factor": "desktop",
   "id": "TC-63-D-022",
   "name": "TC-63-D-022",
   "observation": "Causa: el SKU declarado SKU (000000000664214001-UN, Lay's artesanas 150 g) no tiene en el ambiente la mecanica 'Completa la promo' que exige la precondicion: su shelf y su PDP muestran 'Combina la promo' (2 por 1 a $2.550) y, con invitado y la direccion declarada activa, al agregar 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso, sin toast ni 'Agrega 1 y ahorra más'. Accion requerida: cargar en el Excel de data un SKU con promo 'Completa la promo' 2x1 (mismo SKU) activa y con stock para esa direccion, y re-ejecutar.",
   "observed": "No ejecutable: el SKU declarado tiene promo 'Combina la promo' (2 por 1 a $2.550) y no 'Completa la promo'; con 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso ni toast.",
   "preconditions": "User type: Guest\nDirección de entrega seleccionada: Calle Uno 23, La Florida (Despacho a domicilio con cobertura)\nProducto 000000000664214001-UN con promo activa \"Completa la promo\" 2x1 (mismo SKU, sin código especial)\nEl carro contiene 000000000664214001-UN x 2 (promo 2x1 completada)\n000000000664214001-UN aparece en un carrusel del Home\nViewport Desktop 1280x900",
   "screenshots": [
    {
     "caption": "Impedimento — shelf del SKU en la PLP con 2 un. en carro: muestra \"Combina la promo\", sin barra de progreso ni toast",
     "file": "s2.png"
    },
    {
     "caption": "Impedimento — PDP del SKU con 2 un. en carro: muestra \"Combina la promo\", sin \"Completa la promo\"",
     "file": "s3.png"
    }
   ],
   "spec": "tests/B2C-63.spec.ts (sin test: bloqueado en exploracion)",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ (Home).\n2. Ubicar 000000000664214001-UN en un carrusel del Home.\n3. Verificar que el sistema muestra el shelf del carrusel con el contador en 2 y la barra de progreso completa.\n4. Hacer clic en \"−\" en el shelf del carrusel.\n5. Verificar que el sistema actualiza el contador a 1, retrocede la barra de progreso a 1 de 2 y muestra \"Agrega 1 y ahorra más\".",
   "test_data": "- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas\n- 000000000664214001-UN = 000000000664214001-UN\n- Calle Uno 23, La Florida = Calle Uno 23, La Florida",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "Con 4 unidades se muestra nuevamente el toast \"¡Completaste la promo!\", la barra de progreso queda completa y el contador muestra 4.",
   "form_factor": "desktop",
   "id": "TC-63-D-023",
   "name": "TC-63-D-023",
   "observation": "Causa: el SKU declarado SKU (000000000664214001-UN, Lay's artesanas 150 g) no tiene en el ambiente la mecanica 'Completa la promo' que exige la precondicion: su shelf y su PDP muestran 'Combina la promo' (2 por 1 a $2.550) y, con invitado y la direccion declarada activa, al agregar 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso, sin toast ni 'Agrega 1 y ahorra más'. Accion requerida: cargar en el Excel de data un SKU con promo 'Completa la promo' 2x1 (mismo SKU) activa y con stock para esa direccion, y re-ejecutar.",
   "observed": "No ejecutable: el SKU declarado tiene promo 'Combina la promo' (2 por 1 a $2.550) y no 'Completa la promo'; con 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso ni toast.",
   "preconditions": "User type: Guest\nDirección de entrega seleccionada: Calle Uno 23, La Florida (Despacho a domicilio con cobertura)\nProducto 000000000664214001-UN con promo activa \"Completa la promo\" 2x1 (mismo SKU, sin código especial)\nEl carro contiene 000000000664214001-UN x 3 (1er ciclo completado y 2º ciclo en 1 de 2)\nViewport Desktop 1280x900",
   "screenshots": [
    {
     "caption": "Impedimento — shelf del SKU en la PLP con 2 un. en carro: muestra \"Combina la promo\", sin barra de progreso ni toast",
     "file": "s2.png"
    },
    {
     "caption": "Impedimento — PDP del SKU con 2 un. en carro: muestra \"Combina la promo\", sin \"Completa la promo\"",
     "file": "s3.png"
    }
   ],
   "spec": "tests/B2C-63.spec.ts (sin test: bloqueado en exploracion)",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas y ubicar el shelf de 000000000664214001-UN.\n2. Verificar que el sistema muestra el shelf de 000000000664214001-UN con el contador en 3 y la barra de progreso en 1 de 2.\n3. Hacer clic en \"+\" en el shelf.\n4. Verificar que el sistema actualiza el contador a 4, completa la barra de progreso y muestra el toast \"¡Completaste la promo!\".",
   "test_data": "- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas\n- 000000000664214001-UN = 000000000664214001-UN\n- Calle Uno 23, La Florida = Calle Uno 23, La Florida",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "Con 3 unidades el contador muestra 3, la barra de progreso queda en 1 de 2 (2º ciclo en progreso) y el mensaje cambia a \"Agrega 1 y ahorra más\"; el 1er ciclo sigue completo.",
   "form_factor": "desktop",
   "id": "TC-63-D-024",
   "name": "TC-63-D-024",
   "observation": "Causa: el SKU declarado SKU (000000000664214001-UN, Lay's artesanas 150 g) no tiene en el ambiente la mecanica 'Completa la promo' que exige la precondicion: su shelf y su PDP muestran 'Combina la promo' (2 por 1 a $2.550) y, con invitado y la direccion declarada activa, al agregar 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso, sin toast ni 'Agrega 1 y ahorra más'. Accion requerida: cargar en el Excel de data un SKU con promo 'Completa la promo' 2x1 (mismo SKU) activa y con stock para esa direccion, y re-ejecutar.",
   "observed": "No ejecutable: el SKU declarado tiene promo 'Combina la promo' (2 por 1 a $2.550) y no 'Completa la promo'; con 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso ni toast.",
   "preconditions": "User type: Guest\nDirección de entrega seleccionada: Calle Uno 23, La Florida (Despacho a domicilio con cobertura)\nProducto 000000000664214001-UN con promo activa \"Completa la promo\" 2x1 (mismo SKU, sin código especial)\nEl carro contiene 000000000664214001-UN x 4 (dos ciclos completos)\nViewport Desktop 1280x900",
   "screenshots": [
    {
     "caption": "Impedimento — shelf del SKU en la PLP con 2 un. en carro: muestra \"Combina la promo\", sin barra de progreso ni toast",
     "file": "s2.png"
    },
    {
     "caption": "Impedimento — PDP del SKU con 2 un. en carro: muestra \"Combina la promo\", sin \"Completa la promo\"",
     "file": "s3.png"
    }
   ],
   "spec": "tests/B2C-63.spec.ts (sin test: bloqueado en exploracion)",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas y ubicar el shelf de 000000000664214001-UN.\n2. Verificar que el sistema muestra el shelf de 000000000664214001-UN con el contador en 4 y la barra de progreso completa.\n3. Hacer clic en \"−\" en el shelf.\n4. Verificar que el sistema actualiza el contador a 3, retrocede la barra de progreso a 1 de 2 y muestra \"Agrega 1 y ahorra más\".",
   "test_data": "- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas\n- 000000000664214001-UN = 000000000664214001-UN\n- Calle Uno 23, La Florida = Calle Uno 23, La Florida",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "La PDP conserva el progreso iniciado en el Home (contador 1, barra 1 de 2) y al agregar la 2ª unidad muestra \"¡Completaste la promo!\".",
   "form_factor": "desktop",
   "id": "TC-63-D-025",
   "name": "TC-63-D-025",
   "observation": "Causa: el SKU declarado SKU (000000000664214001-UN, Lay's artesanas 150 g) no tiene en el ambiente la mecanica 'Completa la promo' que exige la precondicion: su shelf y su PDP muestran 'Combina la promo' (2 por 1 a $2.550) y, con invitado y la direccion declarada activa, al agregar 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso, sin toast ni 'Agrega 1 y ahorra más'. Accion requerida: cargar en el Excel de data un SKU con promo 'Completa la promo' 2x1 (mismo SKU) activa y con stock para esa direccion, y re-ejecutar.",
   "observed": "No ejecutable: el SKU declarado tiene promo 'Combina la promo' (2 por 1 a $2.550) y no 'Completa la promo'; con 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso ni toast.",
   "preconditions": "User type: Guest\nDirección de entrega seleccionada: Calle Uno 23, La Florida (Despacho a domicilio con cobertura)\nProducto 000000000664214001-UN con promo activa \"Completa la promo\" 2x1 (mismo SKU, sin código especial)\nCarro vacío\n000000000664214001-UN aparece en un carrusel del Home\nViewport Desktop 1280x900",
   "screenshots": [
    {
     "caption": "Impedimento — shelf del SKU en la PLP con 2 un. en carro: muestra \"Combina la promo\", sin barra de progreso ni toast",
     "file": "s2.png"
    },
    {
     "caption": "Impedimento — PDP del SKU con 2 un. en carro: muestra \"Combina la promo\", sin \"Completa la promo\"",
     "file": "s3.png"
    }
   ],
   "spec": "tests/B2C-63.spec.ts (sin test: bloqueado en exploracion)",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ (Home).\n2. Hacer clic en \"Agregar\" en el shelf de 000000000664214001-UN en un carrusel del Home.\n3. Verificar que el sistema agrega la unidad y muestra \"Agrega 1 y ahorra más\" con la barra de progreso en 1 de 2.\n4. Abrir la PDP de 000000000664214001-UN.\n5. Verificar que el sistema carga la PDP con el contador en 1 y la barra de progreso en 1 de 2.\n6. Hacer clic en \"+\" en el stepper de la PDP.\n7. Verificar que el sistema actualiza el contador a 2, completa la barra de progreso y muestra el toast \"¡Completaste la promo!\".",
   "test_data": "- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas\n- 000000000664214001-UN = 000000000664214001-UN\n- Calle Uno 23, La Florida = Calle Uno 23, La Florida",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "El shelf de la PLP conserva el progreso iniciado en el Home (contador 1, barra 1 de 2) y al agregar la 2ª unidad muestra \"¡Completaste la promo!\".",
   "form_factor": "desktop",
   "id": "TC-63-D-026",
   "name": "TC-63-D-026",
   "observation": "Causa: el SKU declarado SKU (000000000664214001-UN, Lay's artesanas 150 g) no tiene en el ambiente la mecanica 'Completa la promo' que exige la precondicion: su shelf y su PDP muestran 'Combina la promo' (2 por 1 a $2.550) y, con invitado y la direccion declarada activa, al agregar 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso, sin toast ni 'Agrega 1 y ahorra más'. Accion requerida: cargar en el Excel de data un SKU con promo 'Completa la promo' 2x1 (mismo SKU) activa y con stock para esa direccion, y re-ejecutar.",
   "observed": "No ejecutable: el SKU declarado tiene promo 'Combina la promo' (2 por 1 a $2.550) y no 'Completa la promo'; con 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso ni toast.",
   "preconditions": "User type: Guest\nDirección de entrega seleccionada: Calle Uno 23, La Florida (Despacho a domicilio con cobertura)\nProducto 000000000664214001-UN con promo activa \"Completa la promo\" 2x1 (mismo SKU, sin código especial)\nCarro vacío\n000000000664214001-UN aparece en un carrusel del Home\nViewport Desktop 1280x900",
   "screenshots": [
    {
     "caption": "Impedimento — shelf del SKU en la PLP con 2 un. en carro: muestra \"Combina la promo\", sin barra de progreso ni toast",
     "file": "s2.png"
    },
    {
     "caption": "Impedimento — PDP del SKU con 2 un. en carro: muestra \"Combina la promo\", sin \"Completa la promo\"",
     "file": "s3.png"
    }
   ],
   "spec": "tests/B2C-63.spec.ts (sin test: bloqueado en exploracion)",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ (Home).\n2. Hacer clic en \"Agregar\" en el shelf de 000000000664214001-UN en un carrusel del Home.\n3. Verificar que el sistema agrega la unidad y muestra \"Agrega 1 y ahorra más\" con la barra de progreso en 1 de 2.\n4. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas y ubicar el shelf de 000000000664214001-UN.\n5. Verificar que el sistema muestra el shelf de 000000000664214001-UN con el contador en 1 y la barra de progreso en 1 de 2.\n6. Hacer clic en \"+\" en el shelf.\n7. Verificar que el sistema actualiza el contador a 2, completa la barra de progreso y muestra el toast \"¡Completaste la promo!\".",
   "test_data": "- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas\n- 000000000664214001-UN = 000000000664214001-UN\n- Calle Uno 23, La Florida = Calle Uno 23, La Florida",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "Dentro del modal el contador queda en 1, la barra de progreso retrocede a 1 de 2 y el mensaje cambia a \"Agrega 1 y ahorra más\"; el carro queda con 1 unidad.",
   "form_factor": "mobile",
   "id": "TC-63-M-020",
   "name": "TC-63-M-020",
   "observation": "Causa: el SKU declarado SKU (000000000664214001-UN, Lay's artesanas 150 g) no tiene en el ambiente la mecanica 'Completa la promo' que exige la precondicion: su shelf y su PDP muestran 'Combina la promo' (2 por 1 a $2.550) y, con invitado y la direccion declarada activa, al agregar 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso, sin toast ni 'Agrega 1 y ahorra más'. Accion requerida: cargar en el Excel de data un SKU con promo 'Completa la promo' 2x1 (mismo SKU) activa y con stock para esa direccion, y re-ejecutar.",
   "observed": "No ejecutable: el SKU declarado tiene promo 'Combina la promo' (2 por 1 a $2.550) y no 'Completa la promo'; con 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso ni toast.",
   "preconditions": "User type: Guest\nDirección de entrega seleccionada: Calle Uno 23, La Florida (Despacho a domicilio con cobertura)\nProducto 000000000664214001-UN con promo activa \"Completa la promo\" 2x1 (mismo SKU, sin código especial)\nEl carro contiene 000000000664214001-UN x 2 (promo 2x1 completada)\nViewport Mobile 390x844",
   "screenshots": [
    {
     "caption": "Impedimento — shelf del SKU en la PLP con 2 un. en carro: muestra \"Combina la promo\", sin barra de progreso ni toast",
     "file": "m2.png"
    },
    {
     "caption": "Impedimento — PDP del SKU con 2 un. en carro: muestra \"Combina la promo\", sin \"Completa la promo\"",
     "file": "m3.png"
    }
   ],
   "spec": "tests/B2C-63.spec.ts (sin test: bloqueado en exploracion)",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas.\n2. Abrir un modal que contiene el shelf de 000000000664214001-UN (desde la PLP o un carrusel).\n3. Verificar que el sistema muestra el modal con el shelf en 2 unidades y la promo completada.\n4. Hacer tap en \"−\" en el shelf del modal.\n5. Verificar que el sistema actualiza la cantidad a 1, retrocede la barra de progreso a 1 de 2 y muestra \"Agrega 1 y ahorra más\".",
   "test_data": "- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas\n- 000000000664214001-UN = 000000000664214001-UN\n- Calle Uno 23, La Florida = Calle Uno 23, La Florida",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "En la PDP el contador queda en 1, la barra de progreso retrocede a 1 de 2 y se muestra \"Agrega 1 y ahorra más\".",
   "form_factor": "mobile",
   "id": "TC-63-M-021",
   "name": "TC-63-M-021",
   "observation": "Causa: el SKU declarado SKU (000000000664214001-UN, Lay's artesanas 150 g) no tiene en el ambiente la mecanica 'Completa la promo' que exige la precondicion: su shelf y su PDP muestran 'Combina la promo' (2 por 1 a $2.550) y, con invitado y la direccion declarada activa, al agregar 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso, sin toast ni 'Agrega 1 y ahorra más'. Accion requerida: cargar en el Excel de data un SKU con promo 'Completa la promo' 2x1 (mismo SKU) activa y con stock para esa direccion, y re-ejecutar.",
   "observed": "No ejecutable: el SKU declarado tiene promo 'Combina la promo' (2 por 1 a $2.550) y no 'Completa la promo'; con 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso ni toast.",
   "preconditions": "User type: Guest\nDirección de entrega seleccionada: Calle Uno 23, La Florida (Despacho a domicilio con cobertura)\nProducto 000000000664214001-UN con promo activa \"Completa la promo\" 2x1 (mismo SKU, sin código especial)\nEl carro contiene 000000000664214001-UN x 2 (promo 2x1 completada)\nViewport Mobile 390x844",
   "screenshots": [
    {
     "caption": "Impedimento — shelf del SKU en la PLP con 2 un. en carro: muestra \"Combina la promo\", sin barra de progreso ni toast",
     "file": "m2.png"
    },
    {
     "caption": "Impedimento — PDP del SKU con 2 un. en carro: muestra \"Combina la promo\", sin \"Completa la promo\"",
     "file": "m3.png"
    }
   ],
   "spec": "tests/B2C-63.spec.ts (sin test: bloqueado en exploracion)",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. Abrir la PDP de 000000000664214001-UN.\n3. Verificar que el sistema carga la PDP con el contador en 2 y la barra de progreso completa.\n4. Hacer tap en \"−\" en el stepper de la PDP.\n5. Verificar que el sistema actualiza el contador a 1, retrocede la barra de progreso a 1 de 2 y muestra \"Agrega 1 y ahorra más\".",
   "test_data": "- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas\n- 000000000664214001-UN = 000000000664214001-UN\n- Calle Uno 23, La Florida = Calle Uno 23, La Florida",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "En el carrusel el contador queda en 1, la barra de progreso retrocede a 1 de 2 y se muestra \"Agrega 1 y ahorra más\".",
   "form_factor": "mobile",
   "id": "TC-63-M-022",
   "name": "TC-63-M-022",
   "observation": "Causa: el SKU declarado SKU (000000000664214001-UN, Lay's artesanas 150 g) no tiene en el ambiente la mecanica 'Completa la promo' que exige la precondicion: su shelf y su PDP muestran 'Combina la promo' (2 por 1 a $2.550) y, con invitado y la direccion declarada activa, al agregar 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso, sin toast ni 'Agrega 1 y ahorra más'. Accion requerida: cargar en el Excel de data un SKU con promo 'Completa la promo' 2x1 (mismo SKU) activa y con stock para esa direccion, y re-ejecutar.",
   "observed": "No ejecutable: el SKU declarado tiene promo 'Combina la promo' (2 por 1 a $2.550) y no 'Completa la promo'; con 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso ni toast.",
   "preconditions": "User type: Guest\nDirección de entrega seleccionada: Calle Uno 23, La Florida (Despacho a domicilio con cobertura)\nProducto 000000000664214001-UN con promo activa \"Completa la promo\" 2x1 (mismo SKU, sin código especial)\nEl carro contiene 000000000664214001-UN x 2 (promo 2x1 completada)\n000000000664214001-UN aparece en un carrusel del Home\nViewport Mobile 390x844",
   "screenshots": [
    {
     "caption": "Impedimento — shelf del SKU en la PLP con 2 un. en carro: muestra \"Combina la promo\", sin barra de progreso ni toast",
     "file": "m2.png"
    },
    {
     "caption": "Impedimento — PDP del SKU con 2 un. en carro: muestra \"Combina la promo\", sin \"Completa la promo\"",
     "file": "m3.png"
    }
   ],
   "spec": "tests/B2C-63.spec.ts (sin test: bloqueado en exploracion)",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ (Home).\n2. Ubicar 000000000664214001-UN en un carrusel del Home.\n3. Verificar que el sistema muestra el shelf del carrusel con el contador en 2 y la barra de progreso completa.\n4. Hacer tap en \"−\" en el shelf del carrusel.\n5. Verificar que el sistema actualiza el contador a 1, retrocede la barra de progreso a 1 de 2 y muestra \"Agrega 1 y ahorra más\".",
   "test_data": "- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas\n- 000000000664214001-UN = 000000000664214001-UN\n- Calle Uno 23, La Florida = Calle Uno 23, La Florida",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "Con 4 unidades se muestra nuevamente el toast \"¡Completaste la promo!\", la barra de progreso queda completa y el contador muestra 4.",
   "form_factor": "mobile",
   "id": "TC-63-M-023",
   "name": "TC-63-M-023",
   "observation": "Causa: el SKU declarado SKU (000000000664214001-UN, Lay's artesanas 150 g) no tiene en el ambiente la mecanica 'Completa la promo' que exige la precondicion: su shelf y su PDP muestran 'Combina la promo' (2 por 1 a $2.550) y, con invitado y la direccion declarada activa, al agregar 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso, sin toast ni 'Agrega 1 y ahorra más'. Accion requerida: cargar en el Excel de data un SKU con promo 'Completa la promo' 2x1 (mismo SKU) activa y con stock para esa direccion, y re-ejecutar.",
   "observed": "No ejecutable: el SKU declarado tiene promo 'Combina la promo' (2 por 1 a $2.550) y no 'Completa la promo'; con 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso ni toast.",
   "preconditions": "User type: Guest\nDirección de entrega seleccionada: Calle Uno 23, La Florida (Despacho a domicilio con cobertura)\nProducto 000000000664214001-UN con promo activa \"Completa la promo\" 2x1 (mismo SKU, sin código especial)\nEl carro contiene 000000000664214001-UN x 3 (1er ciclo completado y 2º ciclo en 1 de 2)\nViewport Mobile 390x844",
   "screenshots": [
    {
     "caption": "Impedimento — shelf del SKU en la PLP con 2 un. en carro: muestra \"Combina la promo\", sin barra de progreso ni toast",
     "file": "m2.png"
    },
    {
     "caption": "Impedimento — PDP del SKU con 2 un. en carro: muestra \"Combina la promo\", sin \"Completa la promo\"",
     "file": "m3.png"
    }
   ],
   "spec": "tests/B2C-63.spec.ts (sin test: bloqueado en exploracion)",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas y ubicar el shelf de 000000000664214001-UN.\n2. Verificar que el sistema muestra el shelf de 000000000664214001-UN con el contador en 3 y la barra de progreso en 1 de 2.\n3. Hacer tap en \"+\" en el shelf.\n4. Verificar que el sistema actualiza el contador a 4, completa la barra de progreso y muestra el toast \"¡Completaste la promo!\".",
   "test_data": "- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas\n- 000000000664214001-UN = 000000000664214001-UN\n- Calle Uno 23, La Florida = Calle Uno 23, La Florida",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "Con 3 unidades el contador muestra 3, la barra de progreso queda en 1 de 2 (2º ciclo en progreso) y el mensaje cambia a \"Agrega 1 y ahorra más\"; el 1er ciclo sigue completo.",
   "form_factor": "mobile",
   "id": "TC-63-M-024",
   "name": "TC-63-M-024",
   "observation": "Causa: el SKU declarado SKU (000000000664214001-UN, Lay's artesanas 150 g) no tiene en el ambiente la mecanica 'Completa la promo' que exige la precondicion: su shelf y su PDP muestran 'Combina la promo' (2 por 1 a $2.550) y, con invitado y la direccion declarada activa, al agregar 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso, sin toast ni 'Agrega 1 y ahorra más'. Accion requerida: cargar en el Excel de data un SKU con promo 'Completa la promo' 2x1 (mismo SKU) activa y con stock para esa direccion, y re-ejecutar.",
   "observed": "No ejecutable: el SKU declarado tiene promo 'Combina la promo' (2 por 1 a $2.550) y no 'Completa la promo'; con 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso ni toast.",
   "preconditions": "User type: Guest\nDirección de entrega seleccionada: Calle Uno 23, La Florida (Despacho a domicilio con cobertura)\nProducto 000000000664214001-UN con promo activa \"Completa la promo\" 2x1 (mismo SKU, sin código especial)\nEl carro contiene 000000000664214001-UN x 4 (dos ciclos completos)\nViewport Mobile 390x844",
   "screenshots": [
    {
     "caption": "Impedimento — shelf del SKU en la PLP con 2 un. en carro: muestra \"Combina la promo\", sin barra de progreso ni toast",
     "file": "m2.png"
    },
    {
     "caption": "Impedimento — PDP del SKU con 2 un. en carro: muestra \"Combina la promo\", sin \"Completa la promo\"",
     "file": "m3.png"
    }
   ],
   "spec": "tests/B2C-63.spec.ts (sin test: bloqueado en exploracion)",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas y ubicar el shelf de 000000000664214001-UN.\n2. Verificar que el sistema muestra el shelf de 000000000664214001-UN con el contador en 4 y la barra de progreso completa.\n3. Hacer tap en \"−\" en el shelf.\n4. Verificar que el sistema actualiza el contador a 3, retrocede la barra de progreso a 1 de 2 y muestra \"Agrega 1 y ahorra más\".",
   "test_data": "- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas\n- 000000000664214001-UN = 000000000664214001-UN\n- Calle Uno 23, La Florida = Calle Uno 23, La Florida",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "La PDP conserva el progreso iniciado en el Home (contador 1, barra 1 de 2) y al agregar la 2ª unidad muestra \"¡Completaste la promo!\".",
   "form_factor": "mobile",
   "id": "TC-63-M-025",
   "name": "TC-63-M-025",
   "observation": "Causa: el SKU declarado SKU (000000000664214001-UN, Lay's artesanas 150 g) no tiene en el ambiente la mecanica 'Completa la promo' que exige la precondicion: su shelf y su PDP muestran 'Combina la promo' (2 por 1 a $2.550) y, con invitado y la direccion declarada activa, al agregar 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso, sin toast ni 'Agrega 1 y ahorra más'. Accion requerida: cargar en el Excel de data un SKU con promo 'Completa la promo' 2x1 (mismo SKU) activa y con stock para esa direccion, y re-ejecutar.",
   "observed": "No ejecutable: el SKU declarado tiene promo 'Combina la promo' (2 por 1 a $2.550) y no 'Completa la promo'; con 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso ni toast.",
   "preconditions": "User type: Guest\nDirección de entrega seleccionada: Calle Uno 23, La Florida (Despacho a domicilio con cobertura)\nProducto 000000000664214001-UN con promo activa \"Completa la promo\" 2x1 (mismo SKU, sin código especial)\nCarro vacío\n000000000664214001-UN aparece en un carrusel del Home\nViewport Mobile 390x844",
   "screenshots": [
    {
     "caption": "Impedimento — shelf del SKU en la PLP con 2 un. en carro: muestra \"Combina la promo\", sin barra de progreso ni toast",
     "file": "m2.png"
    },
    {
     "caption": "Impedimento — PDP del SKU con 2 un. en carro: muestra \"Combina la promo\", sin \"Completa la promo\"",
     "file": "m3.png"
    }
   ],
   "spec": "tests/B2C-63.spec.ts (sin test: bloqueado en exploracion)",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ (Home).\n2. Hacer tap en \"Agregar\" en el shelf de 000000000664214001-UN en un carrusel del Home.\n3. Verificar que el sistema agrega la unidad y muestra \"Agrega 1 y ahorra más\" con la barra de progreso en 1 de 2.\n4. Abrir la PDP de 000000000664214001-UN.\n5. Verificar que el sistema carga la PDP con el contador en 1 y la barra de progreso en 1 de 2.\n6. Hacer tap en \"+\" en el stepper de la PDP.\n7. Verificar que el sistema actualiza el contador a 2, completa la barra de progreso y muestra el toast \"¡Completaste la promo!\".",
   "test_data": "- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas\n- 000000000664214001-UN = 000000000664214001-UN\n- Calle Uno 23, La Florida = Calle Uno 23, La Florida",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "El shelf de la PLP conserva el progreso iniciado en el Home (contador 1, barra 1 de 2) y al agregar la 2ª unidad muestra \"¡Completaste la promo!\".",
   "form_factor": "mobile",
   "id": "TC-63-M-026",
   "name": "TC-63-M-026",
   "observation": "Causa: el SKU declarado SKU (000000000664214001-UN, Lay's artesanas 150 g) no tiene en el ambiente la mecanica 'Completa la promo' que exige la precondicion: su shelf y su PDP muestran 'Combina la promo' (2 por 1 a $2.550) y, con invitado y la direccion declarada activa, al agregar 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso, sin toast ni 'Agrega 1 y ahorra más'. Accion requerida: cargar en el Excel de data un SKU con promo 'Completa la promo' 2x1 (mismo SKU) activa y con stock para esa direccion, y re-ejecutar.",
   "observed": "No ejecutable: el SKU declarado tiene promo 'Combina la promo' (2 por 1 a $2.550) y no 'Completa la promo'; con 1 y 2 unidades solo muestra 'En carro N un.', sin barra de progreso ni toast.",
   "preconditions": "User type: Guest\nDirección de entrega seleccionada: Calle Uno 23, La Florida (Despacho a domicilio con cobertura)\nProducto 000000000664214001-UN con promo activa \"Completa la promo\" 2x1 (mismo SKU, sin código especial)\nCarro vacío\n000000000664214001-UN aparece en un carrusel del Home\nViewport Mobile 390x844",
   "screenshots": [
    {
     "caption": "Impedimento — shelf del SKU en la PLP con 2 un. en carro: muestra \"Combina la promo\", sin barra de progreso ni toast",
     "file": "m2.png"
    },
    {
     "caption": "Impedimento — PDP del SKU con 2 un. en carro: muestra \"Combina la promo\", sin \"Completa la promo\"",
     "file": "m3.png"
    }
   ],
   "spec": "tests/B2C-63.spec.ts (sin test: bloqueado en exploracion)",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ (Home).\n2. Hacer tap en \"Agregar\" en el shelf de 000000000664214001-UN en un carrusel del Home.\n3. Verificar que el sistema agrega la unidad y muestra \"Agrega 1 y ahorra más\" con la barra de progreso en 1 de 2.\n4. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas y ubicar el shelf de 000000000664214001-UN.\n5. Verificar que el sistema muestra el shelf de 000000000664214001-UN con el contador en 1 y la barra de progreso en 1 de 2.\n6. Hacer tap en \"+\" en el shelf.\n7. Verificar que el sistema actualiza el contador a 2, completa la barra de progreso y muestra el toast \"¡Completaste la promo!\".",
   "test_data": "- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/despensa_coctel-y-snacks_papas-fritas\n- 000000000664214001-UN = 000000000664214001-UN\n- Calle Uno 23, La Florida = Calle Uno 23, La Florida",
   "viewport": "390x844"
  }
 ]
}
-->


---

## B2C-65 - Cucarda en la shelf de producto - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-65 |
| Última actualización | 2026-10-19 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | chromium |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP1/B2C-65 Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Data Pruebas.xlsx |

### Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 12 |
| Bloqueado Data | 11 |
| Bloqueado | 4 |
| Rechazado | 2 |
| **Total** | **29** |

### Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-19 | 29 | TC-65-D-001, TC-65-D-003, TC-65-D-004, TC-65-D-006, TC-65-D-007, TC-65-D-008, TC-65-D-009, TC-65-D-010, TC-65-D-011, TC-65-D-012, TC-65-D-013, TC-65-D-014, TC-65-D-015, TC-65-D-016, TC-65-M-001, TC-65-M-002, TC-65-M-003, TC-65-M-004, TC-65-M-006, TC-65-M-007, TC-65-M-008, TC-65-M-009, TC-65-M-010, TC-65-M-011, TC-65-M-012, TC-65-M-013, TC-65-M-014, TC-65-M-015, TC-65-M-016 |

### Detalle por caso de prueba

#### TC-65-D-001 - Cucarda visible en PLP con posición y estilo configurados

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Duración | 67.4 s |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Guest

Producto con atributos Label_Activo=true, Label_Texto (ej. "Cyber"), Label_ColorTexto y Label_ColorFondo configurados

Producto disponible en una PLP

Viewport Desktop 1280x900

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

{SKU_CYBER} = 000000000000028616-KGV

**Pasos ejecutados**

1. Navegar a la PLP que contiene el producto con cucarda configurada.
2. Localizar el producto en la grilla de la PLP.
3. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen del producto.
4. Verificar que el texto de la cucarda coincide con Label_Texto configurado (ej. "Cyber").
5. Verificar que el color del texto y el color de fondo coinciden con Label_ColorTexto y Label_ColorFondo.
6. Verificar que el ícono (si Label_Icono está configurado) se muestra correctamente.

**Resultado esperado**

La cucarda aparece en la esquina superior izquierda de la imagen del producto en la PLP. El texto, colores e ícono coinciden con los atributos Label configurados en BM. El estilo visual es el definido en el Design System Super DS.

**Resultado obtenido**

La cucarda 'Cyber' aparece arriba a la izquierda de la imagen del SKU declarado (dx 8, dy 3), con color de texto y fondo propios y sin cruzarse con Favoritos. El valor exacto de colores e icono configurado en BM no es legible desde el storefront; el SKU no tiene icono.

**Evidencia**

![Paso 1 — plp declarada](<B2C-65 Evidencias/TC-65-D-001-p01-plp-declarada.png>)

![Paso 2 — shelf del sku 000000000000028616 kgv](<B2C-65 Evidencias/TC-65-D-001-p02-shelf-del-sku-000000000000028616-kgv.png>)

![Paso 3 — cucarda en dx 8 dy 3](<B2C-65 Evidencias/TC-65-D-001-p03-cucarda-en-dx-8-dy-3.png>)

![Estado final](<B2C-65 Evidencias/TC-65-D-001.png>)

---

#### TC-65-D-003 - Cucarda visible en Carrusel y Colecciones con estilo configurado

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Guest

Producto con cucarda configurada visible en al menos un carrusel del Home o en una página de Colección

Viewport Desktop 1280x900

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{SKU_CUCARDA} = 000000000000028616-KGV

**Pasos ejecutados**

1. Navegar al Home y localizar un carrusel que muestre el producto con cucarda.
2. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen del producto en el carrusel.
3. Navegar a una página de Colecciones que contenga el producto.
4. Verificar que la cucarda se muestra con el mismo estilo en la Colección.

**Resultado esperado**

La cucarda se muestra en la shelf del producto tanto en carruseles del Home como en Colecciones. Posición, texto y colores son consistentes en ambos contextos.

**Resultado obtenido**

Causa: el paso 3 exige una página de Colecciones que la fila no declara (solo {BASE_URL} y {SKU_CUCARDA}). Acción: declarar la URL de la colección con el producto.

**Observación**

Causa: el paso 3 exige una página de Colecciones que la fila no declara (solo {BASE_URL} y {SKU_CUCARDA}). Acción: declarar la URL de la colección con el producto.

---

#### TC-65-D-004 - Máximo 1 cucarda por producto — no se superpone con botón Favoritos

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Duración | 73.6 s |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Guest

Producto con cucarda configurada visible en la PLP

Viewport Desktop 1280x900

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

{SKU_CYBER} = 000000000000028616-KGV

**Pasos ejecutados**

1. Navegar a la PLP con el producto con cucarda configurada.
2. Verificar que solo aparece 1 cucarda en la shelf del producto.
3. Verificar que la cucarda está en la esquina superior izquierda de la imagen.
4. Verificar que el botón de Favoritos (icono corazón) está en la esquina superior derecha.
5. Confirmar que no hay solapamiento visual entre la cucarda y el botón Favoritos.

**Resultado esperado**

Solo se muestra 1 cucarda en la shelf del producto. La cucarda (izquierda) y el botón Favoritos (derecha) no se solapan visualmente. Si el producto aplica a múltiples configuraciones de label, se respeta la prioridad y se muestra solo 1.

**Resultado obtenido**

Una sola cucarda en la shelf, a la izquierda; Favoritos a la derecha; sus recuadros no se solapan.

**Evidencia**

![Paso 1 — shelf del producto con cucarda](<B2C-65 Evidencias/TC-65-D-004-p01-shelf-del-producto-con-cucarda.png>)

![Paso 2 — cucarda a la izquierda y favoritos a la derecha](<B2C-65 Evidencias/TC-65-D-004-p02-cucarda-a-la-izquierda-y-favoritos-a-la-derecha.png>)

![Estado final](<B2C-65 Evidencias/TC-65-D-004.png>)

---

#### TC-65-D-006 - Cucarda visible en estado normal (producto disponible, no en carro)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Duración | 19.0 s |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Guest

Producto con cucarda configurada, disponible y con stock

Carrito vacío (producto no agregado)

Viewport Desktop 1280x900

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

{SKU_CYBER} = 000000000000028616-KGV

**Pasos ejecutados**

1. Navegar a la PLP con el producto con cucarda (carrito vacío).
2. Verificar que el producto muestra el botón "Agregar" (estado normal).
3. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen.
4. Verificar posición, texto y colores de la cucarda.

**Resultado esperado**

La cucarda se muestra correctamente en la shelf del producto en estado normal. Posición, texto y colores son consistentes con la configuración en BM.

**Resultado obtenido**

El SKU muestra 'Agregar' (no está en carro) y la cucarda 'Cyber' en la esquina superior izquierda.

**Evidencia**

![Paso 1 — shelf con cucarda en estado normal](<B2C-65 Evidencias/TC-65-D-006-p01-shelf-con-cucarda-en-estado-normal.png>)

![Paso 2 — cucarda cyber en dx 8 dy 3](<B2C-65 Evidencias/TC-65-D-006-p02-cucarda-cyber-en-dx-8-dy-3.png>)

![Estado final](<B2C-65 Evidencias/TC-65-D-006.png>)

---

#### TC-65-D-007 - Cucarda visible en estado 'en carro' (controles de cantidad visibles)

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Duración | 187.7 s |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Guest

Producto con cucarda configurada y con stock

1 unidad del producto ya agregada al carrito (shelf muestra controles +/−)

Viewport Desktop 1280x900

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

{SKU_CYBER} = 000000000000028616-KGV

**Pasos ejecutados**

1. Navegar a la PLP (el producto ya tiene 1 unidad en el carrito).
2. Verificar que la shelf muestra los controles de cantidad (+/−) y el contador.
3. Verificar que la cucarda sigue apareciendo en la esquina superior izquierda de la imagen.
4. Verificar que la cucarda no se oculta ni se desplaza por los controles de cantidad.

**Resultado esperado**

La cucarda se muestra en la misma posición y con el mismo estilo en el estado 'en carro'. Los controles de cantidad no ocultan ni desplazan la cucarda.

**Resultado obtenido**

Causa: el caso excede el tiempo de ejecución (timeouts de 180 s al ubicar el elemento en el ambiente). Acción: revisar el rendimiento del ambiente o el producto declarado y re-ejecutar.

**Observación**

Causa: el caso excede el tiempo de ejecución (timeouts de 180 s al ubicar el elemento en el ambiente). Acción: revisar el rendimiento del ambiente o el producto declarado y re-ejecutar.

---

#### TC-65-D-008 - Cucarda visible en estado 'sin stock' (etiqueta 'Pronto disponible')

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Guest

Producto con cucarda configurada y sin stock para el método de entrega activo

Viewport Desktop 1280x900

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

{SKU_SIN_STOCK} = 000000000000029403-KG

**Pasos ejecutados**

1. Navegar a la PLP con el producto sin stock.
2. Verificar que la shelf muestra la etiqueta "Pronto disponible" y sin botón "Agregar".
3. Verificar que la cucarda sigue apareciendo en la esquina superior izquierda de la imagen.
4. Verificar que la cucarda no se oculta por la etiqueta de sin stock.

**Resultado esperado**

La cucarda se muestra en la misma posición y estilo en el estado 'sin stock'. La etiqueta "Pronto disponible" y la cucarda coexisten sin solapamiento.

**Resultado obtenido**

Causa: el SKU declarado {SKU_SIN_STOCK} (000000000000029403-KG) tiene stock en el ambiente (muestra 'Agregar', sin 'Pronto disponible') y no tiene cucarda configurada. Acción: cargar un SKU sin stock y con cucarda en el Excel de data.

**Observación**

Causa: el SKU declarado {SKU_SIN_STOCK} (000000000000029403-KG) tiene stock en el ambiente (muestra 'Agregar', sin 'Pronto disponible') y no tiene cucarda configurada. Acción: cargar un SKU sin stock y con cucarda en el Excel de data.

---

#### TC-65-D-009 - Texto de cucarda >20 caracteres se trunca con '...' en Desktop

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Duración | 65.1 s |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Guest

Producto con Label_Texto de más de 20 caracteres (ej. "Club Unimarc Exclusivo!") configurado

Viewport Desktop 1280x900

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

{SKU_CUCARDA_LARGA} = 000000000000666285-UN

**Pasos ejecutados**

1. Navegar a la PLP con el producto que tiene Label_Texto de más de 20 caracteres.
2. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen.
3. Verificar que el texto visible está truncado con "..." y no supera los 20 caracteres visibles.
4. Verificar que la cucarda no rompe el layout del shelf ni se desborda.

**Resultado esperado**

El texto de la cucarda aparece truncado con "..." al exceder 20 caracteres en Desktop. El layout de la shelf no se rompe. La cucarda mantiene su posición y dimensiones correctas.

**Resultado obtenido**

Texto completo sin puntos suspensivos y cucarda solapando Favoritos.

**Observación**

Esperado: texto >20 caracteres truncado con '...'. Obtenido: la cucarda de {SKU_CUCARDA_LARGA} muestra completo 'Promoción Lleva 2 unidades por Monto' (36 caracteres) con text-overflow clip, sin '...'; además la cucarda de 180 px se cruza con el botón Favoritos. B2C-65.spec.ts:501.

**Evidencia**

![Paso 1 — shelf del sku 000000000000666285 un](<B2C-65 Evidencias/TC-65-D-009-p01-shelf-del-sku-000000000000666285-un.png>)

![Paso 2 — cucarda de 36 caracteres](<B2C-65 Evidencias/TC-65-D-009-p02-cucarda-de-36-caracteres.png>)

![Estado al fallar la aserción](<B2C-65 Evidencias/TC-65-D-009.png>)

---

#### TC-65-D-010 - Cucarda visible en shelf simplificada dentro de modal de buscador

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Duración | 38.3 s |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Guest

Producto con cucarda configurada (Label_Activo=true, Label_Texto, colores)

Modal de buscador activo con el producto en los resultados

Viewport Desktop 1280x900

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{SKU_CYBER} = 000000000000028616-KGV

{SRP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/search?q=carne

**Pasos ejecutados**

1. Abrir el modal de buscador e ingresar un término que devuelva el producto con cucarda.
2. Localizar la shelf simplificada del producto en los resultados del modal.
3. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen.
4. Verificar que texto y colores son consistentes con la configuración en BM.

**Resultado esperado**

La cucarda se muestra en la shelf simplificada del modal de buscador con el mismo comportamiento que en la shelf de navegación: posición superior izquierda, texto y colores correctos.

**Resultado obtenido**

Causa: con el término declarado en {SRP_URL} ('carne') el modal del buscador no incluye el SKU {SKU_CYBER} entre sus resultados (sí aparece en la SRP completa), por lo que el producto con cucarda no es alcanzable con la data del TC. Acción: declarar en la planilla un término que devuelva el producto en el modal.

**Observación**

Causa: con el término declarado en {SRP_URL} ('carne') el modal del buscador no incluye el SKU {SKU_CYBER} entre sus resultados (sí aparece en la SRP completa), por lo que el producto con cucarda no es alcanzable con la data del TC. Acción: declarar en la planilla un término que devuelva el producto en el modal.

---

#### TC-65-D-011 - Cucarda muestra mismo texto, colores e ícono en Desktop y Mobile

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Duración | 73.7 s |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Guest

Producto con cucarda configurada con Label_Texto, Label_ColorTexto, Label_ColorFondo y Label_Icono

Acceso a la PLP en Desktop 1280x900 y en Mobile 390x844

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. Navegar a la PLP con el producto con cucarda en Desktop 1280x900.
2. Registrar texto, color de texto, color de fondo e ícono de la cucarda.
3. Cambiar la visualización a Mobile 390x844 (o acceder desde dispositivo móvil).
4. Navegar a la misma PLP y localizar el producto.
5. Verificar que texto, colores e ícono son idénticos en ambos viewports.
6. Verificar que el tamaño del componente se adapta al canal.

**Resultado esperado**

La cucarda muestra el mismo texto, colores e ícono en Desktop y Mobile. El tamaño del componente se adapta a cada canal respetando el Design System Super DS. No hay diferencias de contenido entre canales.

**Resultado obtenido**

En Desktop y Mobile los mismos 3 productos de la PLP llevan cucarda con el mismo texto y colores; el tamaño se adapta al canal.

**Evidencia**

![Paso 1 — plp en desktop 1280x900](<B2C-65 Evidencias/TC-65-D-011-p01-plp-en-desktop-1280x900.png>)

![Paso 2 — misma plp en mobile 390x844](<B2C-65 Evidencias/TC-65-D-011-p02-misma-plp-en-mobile-390x844.png>)

![Estado final](<B2C-65 Evidencias/TC-65-D-011.png>)

---

#### TC-65-D-012 - Cucarda visible sobre imagen placeholder cuando el producto no tiene imagen válida

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Duración | 134.5 s |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Guest

Producto con cucarda configurada y sin imagen válida (muestra imagen placeholder)

Producto visible en la PLP

Viewport Desktop 1280x900

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. Navegar a la PLP con el producto sin imagen válida (muestra placeholder).
2. Verificar que la imagen del producto muestra el placeholder configurado.
3. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen placeholder.
4. Verificar que el texto y colores de la cucarda son los configurados en BM.

**Resultado esperado**

La cucarda se muestra sobre la imagen placeholder en la esquina superior izquierda. El estilo visual (texto, colores) es el mismo que sobre una imagen real de producto.

**Resultado obtenido**

Causa: el caso excede el tiempo de ejecución (timeouts de 180 s al ubicar el elemento en el ambiente). Acción: revisar el rendimiento del ambiente o el producto declarado y re-ejecutar. La simulación de imagen inválida no logró mostrar el placeholder sobre un producto con cucarda, por lo que no hay veredicto sobre el producto.

**Observación**

Causa: el caso excede el tiempo de ejecución (timeouts de 180 s al ubicar el elemento en el ambiente). Acción: revisar el rendimiento del ambiente o el producto declarado y re-ejecutar. La simulación de imagen inválida no logró mostrar el placeholder sobre un producto con cucarda, por lo que no hay veredicto sobre el producto.

---

#### TC-65-M-001 - Cucarda visible en PLP con posición y estilo configurados

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 65.6 s |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Guest

Producto con cucarda configurada (Label_Activo=true, Label_Texto, colores)

Producto disponible en una PLP

Viewport Mobile 390x844

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

{SKU_CYBER} = 000000000000028616-KGV

**Pasos ejecutados**

1. Navegar a la PLP en Mobile con el producto con cucarda configurada.
2. Localizar el producto en la grilla.
3. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen.
4. Verificar que texto, colores e ícono coinciden con los atributos Label en BM.

**Resultado esperado**

La cucarda se muestra en la esquina superior izquierda de la imagen en Mobile. Texto, colores e ícono son consistentes con la configuración en BM.

**Resultado obtenido**

Igual que en Desktop, en Mobile: cucarda 'Cyber' arriba a la izquierda, sin cruzar Favoritos.

**Evidencia**

![Paso 1 — plp declarada](<B2C-65 Evidencias/TC-65-M-001-p01-plp-declarada.png>)

![Paso 2 — shelf del sku 000000000000028616 kgv](<B2C-65 Evidencias/TC-65-M-001-p02-shelf-del-sku-000000000000028616-kgv.png>)

![Paso 3 — cucarda en dx 8 dy 3](<B2C-65 Evidencias/TC-65-M-001-p03-cucarda-en-dx-8-dy-3.png>)

![Estado final](<B2C-65 Evidencias/TC-65-M-001.png>)

---

#### TC-65-M-002 - Cucarda visible en SRP (buscador) con estilo configurado

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 88.1 s |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Guest

Producto con cucarda configurada indexado y visible en resultados del buscador

Viewport Mobile 390x844

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

{SKU_CYBER} = 000000000000028616-KGV

**Pasos ejecutados**

1. Abrir el buscador en Mobile e ingresar un término que devuelva el producto con cucarda.
2. Localizar el producto en los resultados.
3. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen.
4. Verificar que texto y colores coinciden con los configurados.

**Resultado esperado**

La cucarda se muestra en la shelf del producto en el SRP/buscador en Mobile. Posición, texto y colores son consistentes con la configuración en BM.

**Resultado obtenido**

Desde el buscador Mobile se llega a la SRP; el SKU declarado muestra la cucarda 'Cyber' arriba a la izquierda.

**Observación**

El término de búsqueda se derivó del nombre del SKU declarado (la fila no declara término).

**Evidencia**

![Paso 1 — resultados de tapapecho vacuno nacional](<B2C-65 Evidencias/TC-65-M-002-p01-resultados-de-tapapecho-vacuno-nacional.png>)

![Paso 2 — shelf del producto en la srp](<B2C-65 Evidencias/TC-65-M-002-p02-shelf-del-producto-en-la-srp.png>)

![Paso 3 — cucarda cyber en dx 8 dy 3](<B2C-65 Evidencias/TC-65-M-002-p03-cucarda-cyber-en-dx-8-dy-3.png>)

![Estado final](<B2C-65 Evidencias/TC-65-M-002.png>)

---

#### TC-65-M-003 - Cucarda visible en Carrusel y Colecciones con estilo configurado

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Guest

Producto con cucarda visible en un carrusel del Home o en una página de Colección

Viewport Mobile 390x844

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{SKU_CUCARDA} = 000000000000028616-KGV

**Pasos ejecutados**

1. Navegar al Home en Mobile y localizar el carrusel con el producto con cucarda.
2. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen en el carrusel.
3. Navegar a una página de Colecciones con el producto y verificar la cucarda.

**Resultado esperado**

La cucarda se muestra en carruseles y Colecciones en Mobile con posición, texto y colores correctos.

**Resultado obtenido**

Causa: el paso 3 exige una página de Colecciones que la fila no declara (solo {BASE_URL} y {SKU_CUCARDA}). Acción: declarar la URL de la colección con el producto.

**Observación**

Causa: el paso 3 exige una página de Colecciones que la fila no declara (solo {BASE_URL} y {SKU_CUCARDA}). Acción: declarar la URL de la colección con el producto.

---

#### TC-65-M-004 - Máximo 1 cucarda por producto — no se superpone con botón Favoritos

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 64.2 s |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Guest

Producto con cucarda configurada en la PLP

Viewport Mobile 390x844

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

{SKU_CYBER} = 000000000000028616-KGV

**Pasos ejecutados**

1. Navegar a la PLP en Mobile con el producto con cucarda.
2. Verificar que solo aparece 1 cucarda en la shelf del producto.
3. Verificar que la cucarda (izquierda) y el botón Favoritos (derecha) no se solapan.

**Resultado esperado**

Solo se muestra 1 cucarda en la shelf del producto en Mobile. La cucarda y el botón Favoritos no se solapan visualmente.

**Resultado obtenido**

Una sola cucarda a la izquierda y Favoritos a la derecha, sin solapamiento, en Mobile.

**Evidencia**

![Paso 1 — shelf del producto con cucarda](<B2C-65 Evidencias/TC-65-M-004-p01-shelf-del-producto-con-cucarda.png>)

![Paso 2 — cucarda a la izquierda y favoritos a la derecha](<B2C-65 Evidencias/TC-65-M-004-p02-cucarda-a-la-izquierda-y-favoritos-a-la-derecha.png>)

![Estado final](<B2C-65 Evidencias/TC-65-M-004.png>)

---

#### TC-65-M-006 - Cucarda visible en estado normal (producto disponible, no en carro)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 66.0 s |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Guest

Producto con cucarda, disponible y con stock · Carrito vacío

Viewport Mobile 390x844

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. Navegar a la PLP en Mobile (carrito vacío, producto disponible).
2. Verificar que el producto muestra el botón "Agregar" (estado normal).
3. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen.

**Resultado esperado**

La cucarda se muestra en la shelf del producto en estado normal en Mobile, con posición, texto y colores correctos.

**Resultado obtenido**

Producto con 'Agregar' y cucarda en la esquina superior izquierda.

**Observación**

Mobile no declara SKU: se tomó el primer producto con cucarda de la PLP declarada.

**Evidencia**

![Paso 1 — shelf con cucarda en estado normal](<B2C-65 Evidencias/TC-65-M-006-p01-shelf-con-cucarda-en-estado-normal.png>)

![Paso 2 — cucarda cyber en dx 8 dy 3](<B2C-65 Evidencias/TC-65-M-006-p02-cucarda-cyber-en-dx-8-dy-3.png>)

![Estado final](<B2C-65 Evidencias/TC-65-M-006.png>)

---

#### TC-65-M-007 - Cucarda visible en estado 'en carro' (controles de cantidad visibles)

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 184.8 s |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Guest

Producto con cucarda y 1 unidad ya en el carrito

Viewport Mobile 390x844

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. Navegar a la PLP en Mobile (producto ya tiene 1 unidad en el carrito).
2. Verificar que la shelf muestra controles de cantidad (+/−).
3. Verificar que la cucarda sigue apareciendo en la esquina superior izquierda.

**Resultado esperado**

La cucarda se mantiene visible en el estado 'en carro' en Mobile. Los controles de cantidad no ocultan ni desplazan la cucarda.

**Resultado obtenido**

Causa: el caso excede el tiempo de ejecución (timeouts de 180 s al ubicar el elemento en el ambiente). Acción: revisar el rendimiento del ambiente o el producto declarado y re-ejecutar.

**Observación**

Causa: el caso excede el tiempo de ejecución (timeouts de 180 s al ubicar el elemento en el ambiente). Acción: revisar el rendimiento del ambiente o el producto declarado y re-ejecutar.

---

#### TC-65-M-008 - Cucarda visible en estado 'sin stock' (etiqueta 'Pronto disponible')

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Guest

Producto con cucarda configurada y sin stock

Viewport Mobile 390x844

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

{SKU_SIN_STOCK} = 000000000000029403-KG

**Pasos ejecutados**

1. Navegar a la PLP en Mobile con el producto sin stock.
2. Verificar que la shelf muestra la etiqueta "Pronto disponible".
3. Verificar que la cucarda sigue apareciendo en la esquina superior izquierda de la imagen.

**Resultado esperado**

La cucarda se muestra en la shelf del producto sin stock en Mobile. "Pronto disponible" y la cucarda coexisten sin solapamiento.

**Resultado obtenido**

Causa: el SKU declarado {SKU_SIN_STOCK} (000000000000029403-KG) tiene stock en el ambiente (muestra 'Agregar', sin 'Pronto disponible') y no tiene cucarda configurada. Acción: cargar un SKU sin stock y con cucarda en el Excel de data.

**Observación**

Causa: el SKU declarado {SKU_SIN_STOCK} (000000000000029403-KG) tiene stock en el ambiente (muestra 'Agregar', sin 'Pronto disponible') y no tiene cucarda configurada. Acción: cargar un SKU sin stock y con cucarda en el Excel de data.

---

#### TC-65-M-009 - Texto de cucarda >15 caracteres se trunca con '...' en Mobile

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 67.4 s |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Guest

Producto con Label_Texto de más de 15 caracteres (ej. "Club Unimarc Exclusivo!") configurado

Viewport Mobile 390x844

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

{SKU_CUCARDA_LARGA} = 000000000000666285-UN

**Pasos ejecutados**

1. Navegar a la PLP en Mobile con el producto que tiene Label_Texto de más de 15 caracteres.
2. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen.
3. Verificar que el texto visible está truncado con "..." y no supera los 15 caracteres.
4. Verificar que el layout del shelf no se rompe.

**Resultado esperado**

El texto de la cucarda aparece truncado con "..." al exceder 15 caracteres en Mobile. El layout del shelf no se rompe. La cucarda mantiene su posición y dimensiones correctas.

**Resultado obtenido**

Texto sin puntos suspensivos, cucarda desborda la imagen y tapa Favoritos.

**Observación**

Esperado: texto >15 caracteres truncado con '...'. Obtenido: la cucarda de {SKU_CUCARDA_LARGA} muestra 'Promoción Lleva 2 unidades por Monto' (36 caracteres) sin '...'; la cucarda mide 153 px, se sale del borde derecho de la imagen y cubre Favoritos. B2C-65.spec.ts:516.

**Evidencia**

![Paso 1 — shelf del sku 000000000000666285 un](<B2C-65 Evidencias/TC-65-M-009-p01-shelf-del-sku-000000000000666285-un.png>)

![Paso 2 — cucarda de 36 caracteres](<B2C-65 Evidencias/TC-65-M-009-p02-cucarda-de-36-caracteres.png>)

![Estado al fallar la aserción](<B2C-65 Evidencias/TC-65-M-009.png>)

---

#### TC-65-M-010 - Cucarda visible en shelf simplificada dentro de modal de buscador

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 31.0 s |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Guest

Producto con cucarda configurada en los resultados del modal de buscador

Viewport Mobile 390x844

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{SKU_CYBER} = 000000000000028616-KGV

{SRP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/search?q=carne

**Pasos ejecutados**

1. Abrir el modal de buscador en Mobile con el producto con cucarda en los resultados.
2. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen en la shelf simplificada.
3. Verificar que texto y colores son consistentes con la configuración en BM.

**Resultado esperado**

La cucarda se muestra en la shelf simplificada del modal en Mobile con posición, texto y colores correctos.

**Resultado obtenido**

La shelf simplificada del modal muestra la cucarda 'Cyber' arriba a la izquierda sin tapar Favoritos.

**Observación**

El término se derivó del nombre del SKU declarado.

**Evidencia**

![Paso 1 — modal de buscador con tapapecho vacuno nacional](<B2C-65 Evidencias/TC-65-M-010-p01-modal-de-buscador-con-tapapecho-vacuno-nacional.png>)

![Paso 2 — shelf simplificada del producto](<B2C-65 Evidencias/TC-65-M-010-p02-shelf-simplificada-del-producto.png>)

![Estado final](<B2C-65 Evidencias/TC-65-M-010.png>)

---

#### TC-65-M-011 - Cucarda muestra mismo texto, colores e ícono en Desktop y Mobile

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 1280x900 |
| Navegador | webkit |
| Duración | 84.2 s |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Guest

Producto con cucarda configurada con Label_Texto, colores e ícono

Acceso a la PLP en Desktop 1280x900 y Mobile 390x844

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. Navegar a la PLP con el producto en Desktop y registrar texto, colores e ícono de la cucarda.
2. Navegar a la misma PLP en Mobile 390x844.
3. Verificar que texto, colores e ícono son idénticos al de Desktop.
4. Verificar que el tamaño del componente se adapta al viewport Mobile.

**Resultado esperado**

La cucarda muestra el mismo contenido en Mobile que en Desktop. El componente se adapta al tamaño del viewport Mobile respetando el Design System Super DS.

**Resultado obtenido**

En Desktop y Mobile los mismos 3 productos de la PLP llevan cucarda con el mismo texto y colores; el tamaño se adapta al canal.

**Evidencia**

![Paso 1 — plp en mobile 390x844](<B2C-65 Evidencias/TC-65-M-011-p01-plp-en-mobile-390x844.png>)

![Paso 2 — misma plp en desktop 1280x900](<B2C-65 Evidencias/TC-65-M-011-p02-misma-plp-en-desktop-1280x900.png>)

![Estado final](<B2C-65 Evidencias/TC-65-M-011.png>)

---

#### TC-65-M-012 - Cucarda visible sobre imagen placeholder cuando el producto no tiene imagen válida

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Guest

Producto con cucarda y sin imagen válida (muestra placeholder)

Viewport Mobile 390x844

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. Navegar a la PLP en Mobile con el producto sin imagen válida (muestra placeholder).
2. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen placeholder.
3. Verificar que texto y colores son los configurados en BM.

**Resultado esperado**

La cucarda se muestra sobre la imagen placeholder en Mobile con el mismo estilo que sobre una imagen real de producto.

**Resultado obtenido**

Causa: el caso excede el tiempo de ejecución (timeouts de 180 s al ubicar el elemento en el ambiente). Acción: revisar el rendimiento del ambiente o el producto declarado y re-ejecutar. (sin veredicto: la corrida se detuvo antes de ejecutarlo).

**Observación**

Causa: el caso excede el tiempo de ejecución (timeouts de 180 s al ubicar el elemento en el ambiente). Acción: revisar el rendimiento del ambiente o el producto declarado y re-ejecutar. (sin veredicto: la corrida se detuvo antes de ejecutarlo).

---

#### TC-65-D-013 - Cucarda visible en PLP para usuario logueado

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

Producto con cucarda configurada en la PLP

Viewport Desktop 1280x900

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{COMPRADOR_PASSWORD} = (contraseña de la cuenta de comprador)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. Iniciar sesión con cuenta de cliente registrado.
2. Navegar a la PLP con el producto con cucarda configurada.
3. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen.
4. Verificar que texto y colores son consistentes con la configuración en BM.

**Resultado esperado**

La cucarda se muestra correctamente para usuario logueado con el mismo comportamiento que para usuario Guest: posición, texto y colores correctos.

**Resultado obtenido**

La cucarda 'Cyber' se ve arriba a la izquierda de la imagen con el usuario logueado, igual que como invitado (dx 8, dy 3), con colores de texto y fondo propios. El valor exacto configurado en BM no se lee desde el storefront.

**Evidencia**

![Paso 1 — plp declarada](<B2C-65 Evidencias/TC-65-D-013-p01-plp-declarada.png>)

![Paso 2 — shelf del sku 000000000000028616 kgv](<B2C-65 Evidencias/TC-65-D-013-p02-shelf-del-sku-000000000000028616-kgv.png>)

![Paso 3 — cucarda en dx 8 dy 3](<B2C-65 Evidencias/TC-65-D-013-p03-cucarda-en-dx-8-dy-3.png>)

![Estado final](<B2C-65 Evidencias/TC-65-D-013.png>)

---

#### TC-65-M-013 - Cucarda visible en PLP para usuario logueado

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

Producto con cucarda configurada en la PLP

Viewport Mobile 390x844

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{COMPRADOR_PASSWORD} = (contraseña de la cuenta de comprador)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. Iniciar sesión con cuenta de cliente registrado en Mobile.
2. Navegar a la PLP con el producto con cucarda.
3. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen.
4. Verificar texto y colores consistentes con BM.

**Resultado esperado**

La cucarda se muestra correctamente en Mobile para usuario logueado, con el mismo comportamiento que para usuario Guest.

**Resultado obtenido**

La cucarda 'Cyber' se ve arriba a la izquierda de la imagen en Mobile con el usuario logueado, igual que como invitado. El valor exacto configurado en BM no se lee desde el storefront.

**Evidencia**

![Paso 1 — plp declarada](<B2C-65 Evidencias/TC-65-M-013-p01-plp-declarada.png>)

![Paso 2 — shelf del sku 000000000000028616 kgv](<B2C-65 Evidencias/TC-65-M-013-p02-shelf-del-sku-000000000000028616-kgv.png>)

![Paso 3 — cucarda en dx 8 dy 3](<B2C-65 Evidencias/TC-65-M-013-p03-cucarda-en-dx-8-dy-3.png>)

![Estado final](<B2C-65 Evidencias/TC-65-M-013.png>)

---

#### TC-65-D-014 - Cucarda consistente en todos los estados de la shelf para usuario logueado

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

Producto con cucarda configurada, con stock

Viewport Desktop 1280x900

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{COMPRADOR_PASSWORD} = (contraseña de la cuenta de comprador)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. Iniciar sesión con cuenta de cliente registrado.
2. Navegar a la PLP (producto sin agregar) → verificar cucarda en estado normal.
3. Agregar el producto al carrito → verificar cucarda en estado 'en carro'.
4. Con producto sin stock → verificar cucarda en estado 'sin stock' (etiqueta 'Pronto disponible').

**Resultado esperado**

La cucarda se muestra en la misma posición y con el mismo estilo en los tres estados de la shelf para usuario logueado. No se oculta ni desplaza en ningún estado.

**Resultado obtenido**

Causa: el paso 4 pide un producto con cucarda y sin stock y la fila no declara ninguno ({SKU_SIN_STOCK} no está en su Test data y en el ambiente tiene stock). Los pasos 2 y 3 (estado normal y 'en carro') se ejecutaron con la cuenta de comprador y la cucarda se mantuvo igual. Acción: declarar en la fila un producto con cucarda y sin stock.

**Observación**

Causa: el paso 4 pide un producto con cucarda y sin stock y la fila no declara ninguno ({SKU_SIN_STOCK} no está en su Test data y en el ambiente tiene stock). Los pasos 2 y 3 (estado normal y 'en carro') se ejecutaron con la cuenta de comprador y la cucarda se mantuvo igual. Acción: declarar en la fila un producto con cucarda y sin stock.

**Evidencia**

![Paso 1 — shelf antes de agregar](<B2C-65 Evidencias/TC-65-D-014-p01-shelf-antes-de-agregar.png>)

![Paso 2 — shelf con controles de cantidad](<B2C-65 Evidencias/TC-65-D-014-p02-shelf-con-controles-de-cantidad.png>)

![Paso 3 — cucarda intacta en el estado en carro](<B2C-65 Evidencias/TC-65-D-014-p03-cucarda-intacta-en-el-estado-en-carro.png>)

![Estado final](<B2C-65 Evidencias/TC-65-D-014.png>)

---

#### TC-65-M-014 - Cucarda consistente en todos los estados de la shelf para usuario logueado

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

Producto con cucarda, disponible y con stock

Viewport Mobile 390x844

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{COMPRADOR_PASSWORD} = (contraseña de la cuenta de comprador)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. Iniciar sesión en Mobile.
2. Navegar a la PLP (sin agregar) → verificar cucarda en estado normal.
3. Agregar producto → verificar cucarda en estado 'en carro'.
4. Con producto sin stock → verificar cucarda en estado 'sin stock'.

**Resultado esperado**

La cucarda se muestra en los tres estados de la shelf en Mobile para usuario logueado, con posición y estilo consistentes.

**Resultado obtenido**

Causa: el paso 4 pide un producto con cucarda y sin stock y la fila no declara ninguno ({SKU_SIN_STOCK} no está en su Test data y en el ambiente tiene stock). Los pasos 2 y 3 (estado normal y 'en carro') se ejecutaron con la cuenta de comprador y la cucarda se mantuvo igual. Acción: declarar en la fila un producto con cucarda y sin stock. En Mobile, además, el estado normal no pudo comprobarse: el producto ya estaba en el carro de la misma cuenta por la corrida Desktop (el botón 'Agregar' no aparece).

**Observación**

Causa: el paso 4 pide un producto con cucarda y sin stock y la fila no declara ninguno ({SKU_SIN_STOCK} no está en su Test data y en el ambiente tiene stock). Los pasos 2 y 3 (estado normal y 'en carro') se ejecutaron con la cuenta de comprador y la cucarda se mantuvo igual. Acción: declarar en la fila un producto con cucarda y sin stock. En Mobile, además, el estado normal no pudo comprobarse: el producto ya estaba en el carro de la misma cuenta por la corrida Desktop (el botón 'Agregar' no aparece).

---

#### TC-65-D-015 - Priorización: label de promoción tiene precedencia sobre label de categoría en storefront

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

Producto en una subcategoría con Label_Activo=true (label de categoría configurado)

Mismo producto elegible a una promoción con Label_Activo=true (label de promoción configurado, texto diferente)

JOB1 y JOB2 ejecutados para aplicar ambos labels

Viewport Desktop 1280x900

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{COMPRADOR_PASSWORD} = (contraseña de la cuenta de comprador)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. Iniciar sesión con cuenta de cliente registrado.
2. Navegar a la PLP con el producto que tiene configurados tanto label de categoría como de promoción.
3. Verificar el texto de la cucarda mostrada en la shelf del producto.
4. Comparar el texto con el Label_Texto de la promoción y el Label_Texto de la categoría.

**Resultado esperado**

La shelf del producto muestra el label de la promoción (no el de la categoría). El texto, colores e ícono corresponden a los atributos configurados en la promoción, confirmando la priorización: promoción > categoría.

**Resultado obtenido**

Causa: la precondición pide un producto con label de categoría y de promoción configurados y los jobs ejecutados, y la fila solo declara {BASE_URL}, {COMPRADOR_USER}, {COMPRADOR_PASSWORD} y {PLP_URL}: no dice qué producto. Acción: declarar en la fila el producto (token) que cumple la precondición.

**Observación**

Causa: la precondición pide un producto con label de categoría y de promoción configurados y los jobs ejecutados, y la fila solo declara {BASE_URL}, {COMPRADOR_USER}, {COMPRADOR_PASSWORD} y {PLP_URL}: no dice qué producto. Acción: declarar en la fila el producto (token) que cumple la precondición.

---

#### TC-65-M-015 - Priorización: label de promoción tiene precedencia sobre label de categoría en storefront

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

Producto con label de categoría y label de promoción configurados (JOB1 y JOB2 ejecutados)

Viewport Mobile 390x844

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{COMPRADOR_PASSWORD} = (contraseña de la cuenta de comprador)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. Iniciar sesión en Mobile.
2. Navegar a la PLP con el producto con ambos labels configurados.
3. Verificar el texto de la cucarda mostrada.
4. Confirmar que corresponde al Label_Texto de la promoción y no de la categoría.

**Resultado esperado**

La shelf en Mobile muestra el label de la promoción (mayor prioridad). El label de la categoría no se muestra.

**Resultado obtenido**

Causa: la precondición pide un producto con label de categoría y de promoción configurados y los jobs ejecutados, y la fila solo declara {BASE_URL}, {COMPRADOR_USER}, {COMPRADOR_PASSWORD} y {PLP_URL}: no dice qué producto. Acción: declarar en la fila el producto (token) que cumple la precondición.

**Observación**

Causa: la precondición pide un producto con label de categoría y de promoción configurados y los jobs ejecutados, y la fila solo declara {BASE_URL}, {COMPRADOR_USER}, {COMPRADOR_PASSWORD} y {PLP_URL}: no dice qué producto. Acción: declarar en la fila el producto (token) que cumple la precondición.

---

#### TC-65-D-016 - Priorización entre labels de promoción: membresía > Unipay > BancoEstado > % dcto en storefront

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

Producto elegible para múltiples promos con label activo: membresía, Unipay, BancoEstado y % descuento

JOB2 ejecutado para aplicar todos los labels

Viewport Desktop 1280x900

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{COMPRADOR_PASSWORD} = (contraseña de la cuenta de comprador)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. Iniciar sesión con cuenta de cliente registrado.
2. Navegar a la PLP con el producto elegible a las múltiples promociones.
3. Verificar el texto de la cucarda mostrada en la shelf.
4. Confirmar que el texto corresponde al Label_Texto de la promoción de membresía (mayor prioridad).

**Resultado esperado**

La shelf muestra el label de la promoción de membresía (máxima prioridad). El texto e ícono corresponden a los atributos de la promo de membresía. Los labels de Unipay, BancoEstado y % dcto no se muestran (solo 1 cucarda por producto).

**Resultado obtenido**

Causa: la precondición pide un producto con varias promociones con label (membresía, Unipay, BancoEstado y % dcto) configurados y los jobs ejecutados, y la fila solo declara {BASE_URL}, {COMPRADOR_USER}, {COMPRADOR_PASSWORD} y {PLP_URL}: no dice qué producto. Acción: declarar en la fila el producto (token) que cumple la precondición.

**Observación**

Causa: la precondición pide un producto con varias promociones con label (membresía, Unipay, BancoEstado y % dcto) configurados y los jobs ejecutados, y la fila solo declara {BASE_URL}, {COMPRADOR_USER}, {COMPRADOR_PASSWORD} y {PLP_URL}: no dice qué producto. Acción: declarar en la fila el producto (token) que cumple la precondición.

---

#### TC-65-M-016 - Priorización entre labels de promoción: membresía > Unipay > BancoEstado > % dcto en storefront

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

Producto elegible a múltiples promos con label: membresía, Unipay, BancoEstado y % dcto (JOB2 ejecutado)

Viewport Mobile 390x844

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{COMPRADOR_PASSWORD} = (contraseña de la cuenta de comprador)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. Iniciar sesión en Mobile.
2. Navegar a la PLP con el producto elegible a múltiples promociones.
3. Verificar el texto de la cucarda.
4. Confirmar que corresponde al label de la promo de membresía.

**Resultado esperado**

La shelf en Mobile muestra el label de la promo de membresía (mayor prioridad). Labels de Unipay, BancoEstado y % dcto no se muestran.

**Resultado obtenido**

Causa: la precondición pide un producto con varias promociones con label (membresía, Unipay, BancoEstado y % dcto) configurados y los jobs ejecutados, y la fila solo declara {BASE_URL}, {COMPRADOR_USER}, {COMPRADOR_PASSWORD} y {PLP_URL}: no dice qué producto. Acción: declarar en la fila el producto (token) que cumple la precondición.

**Observación**

Causa: la precondición pide un producto con varias promociones con label (membresía, Unipay, BancoEstado y % dcto) configurados y los jobs ejecutados, y la fila solo declara {BASE_URL}, {COMPRADOR_USER}, {COMPRADOR_PASSWORD} y {PLP_URL}: no dice qué producto. Acción: declarar en la fila el producto (token) que cumple la precondición.

---

<!-- qa-evidence-state
{
 "header": {
  "browsers": {
   "desktop": "chromium",
   "mobile": "chromium"
  },
  "data_file": "Datos Pruebas/Data Pruebas.xlsx",
  "environment": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-65",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP1/B2C-65 Test Cases.xlsx",
  "title": "B2C-65 - Cucarda en la shelf de producto - Evidencias QA",
  "updated_at": "2026-10-19"
 },
 "history": {
  "2026-10-19": [
   "TC-65-D-001",
   "TC-65-D-003",
   "TC-65-D-004",
   "TC-65-D-006",
   "TC-65-D-007",
   "TC-65-D-008",
   "TC-65-D-009",
   "TC-65-D-010",
   "TC-65-D-011",
   "TC-65-D-012",
   "TC-65-D-013",
   "TC-65-D-014",
   "TC-65-D-015",
   "TC-65-D-016",
   "TC-65-M-001",
   "TC-65-M-002",
   "TC-65-M-003",
   "TC-65-M-004",
   "TC-65-M-006",
   "TC-65-M-007",
   "TC-65-M-008",
   "TC-65-M-009",
   "TC-65-M-010",
   "TC-65-M-011",
   "TC-65-M-012",
   "TC-65-M-013",
   "TC-65-M-014",
   "TC-65-M-015",
   "TC-65-M-016"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "duration_s": 67.4,
   "executed_at": "2026-10-19",
   "expected": "La cucarda aparece en la esquina superior izquierda de la imagen del producto en la PLP. El texto, colores e ícono coinciden con los atributos Label configurados en BM. El estilo visual es el definido en el Design System Super DS.",
   "form_factor": "desktop",
   "id": "TC-65-D-001",
   "name": "Cucarda visible en PLP con posición y estilo configurados",
   "observed": "La cucarda 'Cyber' aparece arriba a la izquierda de la imagen del SKU declarado (dx 8, dy 3), con color de texto y fondo propios y sin cruzarse con Favoritos. El valor exacto de colores e icono configurado en BM no es legible desde el storefront; el SKU no tiene icono.",
   "preconditions": "User type: Guest\nProducto con atributos Label_Activo=true, Label_Texto (ej. \"Cyber\"), Label_ColorTexto y Label_ColorFondo configurados\nProducto disponible en una PLP\nViewport Desktop 1280x900",
   "screenshots": [
    {
     "caption": "Paso 1 — plp declarada",
     "file": "TC-65-D-001-p01-plp-declarada.png"
    },
    {
     "caption": "Paso 2 — shelf del sku 000000000000028616 kgv",
     "file": "TC-65-D-001-p02-shelf-del-sku-000000000000028616-kgv.png"
    },
    {
     "caption": "Paso 3 — cucarda en dx 8 dy 3",
     "file": "TC-65-D-001-p03-cucarda-en-dx-8-dy-3.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-65-D-001.png"
    }
   ],
   "spec": "tests/B2C-65.spec.ts",
   "status": "Aprobado",
   "steps": "1. Navegar a la PLP que contiene el producto con cucarda configurada.\n2. Localizar el producto en la grilla de la PLP.\n3. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen del producto.\n4. Verificar que el texto de la cucarda coincide con Label_Texto configurado (ej. \"Cyber\").\n5. Verificar que el color del texto y el color de fondo coinciden con Label_ColorTexto y Label_ColorFondo.\n6. Verificar que el ícono (si Label_Icono está configurado) se muestra correctamente.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n{SKU_CYBER} = 000000000000028616-KGV",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "La cucarda se muestra en la shelf del producto tanto en carruseles del Home como en Colecciones. Posición, texto y colores son consistentes en ambos contextos.",
   "form_factor": "desktop",
   "id": "TC-65-D-003",
   "name": "Cucarda visible en Carrusel y Colecciones con estilo configurado",
   "observation": "Causa: el paso 3 exige una página de Colecciones que la fila no declara (solo {BASE_URL} y {SKU_CUCARDA}). Acción: declarar la URL de la colección con el producto.",
   "observed": "Causa: el paso 3 exige una página de Colecciones que la fila no declara (solo {BASE_URL} y {SKU_CUCARDA}). Acción: declarar la URL de la colección con el producto.",
   "preconditions": "User type: Guest\nProducto con cucarda configurada visible en al menos un carrusel del Home o en una página de Colección\nViewport Desktop 1280x900",
   "spec": "tests/B2C-65.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. Navegar al Home y localizar un carrusel que muestre el producto con cucarda.\n2. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen del producto en el carrusel.\n3. Navegar a una página de Colecciones que contenga el producto.\n4. Verificar que la cucarda se muestra con el mismo estilo en la Colección.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{SKU_CUCARDA} = 000000000000028616-KGV",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "duration_s": 73.6,
   "executed_at": "2026-10-19",
   "expected": "Solo se muestra 1 cucarda en la shelf del producto. La cucarda (izquierda) y el botón Favoritos (derecha) no se solapan visualmente. Si el producto aplica a múltiples configuraciones de label, se respeta la prioridad y se muestra solo 1.",
   "form_factor": "desktop",
   "id": "TC-65-D-004",
   "name": "Máximo 1 cucarda por producto — no se superpone con botón Favoritos",
   "observed": "Una sola cucarda en la shelf, a la izquierda; Favoritos a la derecha; sus recuadros no se solapan.",
   "preconditions": "User type: Guest\nProducto con cucarda configurada visible en la PLP\nViewport Desktop 1280x900",
   "screenshots": [
    {
     "caption": "Paso 1 — shelf del producto con cucarda",
     "file": "TC-65-D-004-p01-shelf-del-producto-con-cucarda.png"
    },
    {
     "caption": "Paso 2 — cucarda a la izquierda y favoritos a la derecha",
     "file": "TC-65-D-004-p02-cucarda-a-la-izquierda-y-favoritos-a-la-derecha.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-65-D-004.png"
    }
   ],
   "spec": "tests/B2C-65.spec.ts",
   "status": "Aprobado",
   "steps": "1. Navegar a la PLP con el producto con cucarda configurada.\n2. Verificar que solo aparece 1 cucarda en la shelf del producto.\n3. Verificar que la cucarda está en la esquina superior izquierda de la imagen.\n4. Verificar que el botón de Favoritos (icono corazón) está en la esquina superior derecha.\n5. Confirmar que no hay solapamiento visual entre la cucarda y el botón Favoritos.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n{SKU_CYBER} = 000000000000028616-KGV",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "duration_s": 19.0,
   "executed_at": "2026-10-19",
   "expected": "La cucarda se muestra correctamente en la shelf del producto en estado normal. Posición, texto y colores son consistentes con la configuración en BM.",
   "form_factor": "desktop",
   "id": "TC-65-D-006",
   "name": "Cucarda visible en estado normal (producto disponible, no en carro)",
   "observed": "El SKU muestra 'Agregar' (no está en carro) y la cucarda 'Cyber' en la esquina superior izquierda.",
   "preconditions": "User type: Guest\nProducto con cucarda configurada, disponible y con stock\nCarrito vacío (producto no agregado)\nViewport Desktop 1280x900",
   "screenshots": [
    {
     "caption": "Paso 1 — shelf con cucarda en estado normal",
     "file": "TC-65-D-006-p01-shelf-con-cucarda-en-estado-normal.png"
    },
    {
     "caption": "Paso 2 — cucarda cyber en dx 8 dy 3",
     "file": "TC-65-D-006-p02-cucarda-cyber-en-dx-8-dy-3.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-65-D-006.png"
    }
   ],
   "spec": "tests/B2C-65.spec.ts",
   "status": "Aprobado",
   "steps": "1. Navegar a la PLP con el producto con cucarda (carrito vacío).\n2. Verificar que el producto muestra el botón \"Agregar\" (estado normal).\n3. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen.\n4. Verificar posición, texto y colores de la cucarda.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n{SKU_CYBER} = 000000000000028616-KGV",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "duration_s": 187.7,
   "executed_at": "2026-10-19",
   "expected": "La cucarda se muestra en la misma posición y con el mismo estilo en el estado 'en carro'. Los controles de cantidad no ocultan ni desplazan la cucarda.",
   "form_factor": "desktop",
   "id": "TC-65-D-007",
   "name": "Cucarda visible en estado 'en carro' (controles de cantidad visibles)",
   "observation": "Causa: el caso excede el tiempo de ejecución (timeouts de 180 s al ubicar el elemento en el ambiente). Acción: revisar el rendimiento del ambiente o el producto declarado y re-ejecutar.",
   "observed": "Causa: el caso excede el tiempo de ejecución (timeouts de 180 s al ubicar el elemento en el ambiente). Acción: revisar el rendimiento del ambiente o el producto declarado y re-ejecutar.",
   "preconditions": "User type: Guest\nProducto con cucarda configurada y con stock\n1 unidad del producto ya agregada al carrito (shelf muestra controles +/−)\nViewport Desktop 1280x900",
   "spec": "tests/B2C-65.spec.ts",
   "status": "Bloqueado",
   "steps": "1. Navegar a la PLP (el producto ya tiene 1 unidad en el carrito).\n2. Verificar que la shelf muestra los controles de cantidad (+/−) y el contador.\n3. Verificar que la cucarda sigue apareciendo en la esquina superior izquierda de la imagen.\n4. Verificar que la cucarda no se oculta ni se desplaza por los controles de cantidad.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n{SKU_CYBER} = 000000000000028616-KGV",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "La cucarda se muestra en la misma posición y estilo en el estado 'sin stock'. La etiqueta \"Pronto disponible\" y la cucarda coexisten sin solapamiento.",
   "form_factor": "desktop",
   "id": "TC-65-D-008",
   "name": "Cucarda visible en estado 'sin stock' (etiqueta 'Pronto disponible')",
   "observation": "Causa: el SKU declarado {SKU_SIN_STOCK} (000000000000029403-KG) tiene stock en el ambiente (muestra 'Agregar', sin 'Pronto disponible') y no tiene cucarda configurada. Acción: cargar un SKU sin stock y con cucarda en el Excel de data.",
   "observed": "Causa: el SKU declarado {SKU_SIN_STOCK} (000000000000029403-KG) tiene stock en el ambiente (muestra 'Agregar', sin 'Pronto disponible') y no tiene cucarda configurada. Acción: cargar un SKU sin stock y con cucarda en el Excel de data.",
   "preconditions": "User type: Guest\nProducto con cucarda configurada y sin stock para el método de entrega activo\nViewport Desktop 1280x900",
   "spec": "tests/B2C-65.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a la PLP con el producto sin stock.\n2. Verificar que la shelf muestra la etiqueta \"Pronto disponible\" y sin botón \"Agregar\".\n3. Verificar que la cucarda sigue apareciendo en la esquina superior izquierda de la imagen.\n4. Verificar que la cucarda no se oculta por la etiqueta de sin stock.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n{SKU_SIN_STOCK} = 000000000000029403-KG",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "duration_s": 65.1,
   "executed_at": "2026-10-19",
   "expected": "El texto de la cucarda aparece truncado con \"...\" al exceder 20 caracteres en Desktop. El layout de la shelf no se rompe. La cucarda mantiene su posición y dimensiones correctas.",
   "form_factor": "desktop",
   "id": "TC-65-D-009",
   "name": "Texto de cucarda >20 caracteres se trunca con '...' en Desktop",
   "observation": "Esperado: texto >20 caracteres truncado con '...'. Obtenido: la cucarda de {SKU_CUCARDA_LARGA} muestra completo 'Promoción Lleva 2 unidades por Monto' (36 caracteres) con text-overflow clip, sin '...'; además la cucarda de 180 px se cruza con el botón Favoritos. B2C-65.spec.ts:501.",
   "observed": "Texto completo sin puntos suspensivos y cucarda solapando Favoritos.",
   "preconditions": "User type: Guest\nProducto con Label_Texto de más de 20 caracteres (ej. \"Club Unimarc Exclusivo!\") configurado\nViewport Desktop 1280x900",
   "screenshots": [
    {
     "caption": "Paso 1 — shelf del sku 000000000000666285 un",
     "file": "TC-65-D-009-p01-shelf-del-sku-000000000000666285-un.png"
    },
    {
     "caption": "Paso 2 — cucarda de 36 caracteres",
     "file": "TC-65-D-009-p02-cucarda-de-36-caracteres.png"
    },
    {
     "caption": "Estado al fallar la aserción",
     "file": "TC-65-D-009.png"
    }
   ],
   "spec": "tests/B2C-65.spec.ts",
   "status": "Rechazado",
   "steps": "1. Navegar a la PLP con el producto que tiene Label_Texto de más de 20 caracteres.\n2. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen.\n3. Verificar que el texto visible está truncado con \"...\" y no supera los 20 caracteres visibles.\n4. Verificar que la cucarda no rompe el layout del shelf ni se desborda.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n{SKU_CUCARDA_LARGA} = 000000000000666285-UN",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "duration_s": 38.3,
   "executed_at": "2026-10-19",
   "expected": "La cucarda se muestra en la shelf simplificada del modal de buscador con el mismo comportamiento que en la shelf de navegación: posición superior izquierda, texto y colores correctos.",
   "form_factor": "desktop",
   "id": "TC-65-D-010",
   "name": "Cucarda visible en shelf simplificada dentro de modal de buscador",
   "observation": "Causa: con el término declarado en {SRP_URL} ('carne') el modal del buscador no incluye el SKU {SKU_CYBER} entre sus resultados (sí aparece en la SRP completa), por lo que el producto con cucarda no es alcanzable con la data del TC. Acción: declarar en la planilla un término que devuelva el producto en el modal.",
   "observed": "Causa: con el término declarado en {SRP_URL} ('carne') el modal del buscador no incluye el SKU {SKU_CYBER} entre sus resultados (sí aparece en la SRP completa), por lo que el producto con cucarda no es alcanzable con la data del TC. Acción: declarar en la planilla un término que devuelva el producto en el modal.",
   "preconditions": "User type: Guest\nProducto con cucarda configurada (Label_Activo=true, Label_Texto, colores)\nModal de buscador activo con el producto en los resultados\nViewport Desktop 1280x900",
   "spec": "tests/B2C-65.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. Abrir el modal de buscador e ingresar un término que devuelva el producto con cucarda.\n2. Localizar la shelf simplificada del producto en los resultados del modal.\n3. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen.\n4. Verificar que texto y colores son consistentes con la configuración en BM.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{SKU_CYBER} = 000000000000028616-KGV\n{SRP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/search?q=carne",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "duration_s": 73.7,
   "executed_at": "2026-10-19",
   "expected": "La cucarda muestra el mismo texto, colores e ícono en Desktop y Mobile. El tamaño del componente se adapta a cada canal respetando el Design System Super DS. No hay diferencias de contenido entre canales.",
   "form_factor": "desktop",
   "id": "TC-65-D-011",
   "name": "Cucarda muestra mismo texto, colores e ícono en Desktop y Mobile",
   "observed": "En Desktop y Mobile los mismos 3 productos de la PLP llevan cucarda con el mismo texto y colores; el tamaño se adapta al canal.",
   "preconditions": "User type: Guest\nProducto con cucarda configurada con Label_Texto, Label_ColorTexto, Label_ColorFondo y Label_Icono\nAcceso a la PLP en Desktop 1280x900 y en Mobile 390x844",
   "screenshots": [
    {
     "caption": "Paso 1 — plp en desktop 1280x900",
     "file": "TC-65-D-011-p01-plp-en-desktop-1280x900.png"
    },
    {
     "caption": "Paso 2 — misma plp en mobile 390x844",
     "file": "TC-65-D-011-p02-misma-plp-en-mobile-390x844.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-65-D-011.png"
    }
   ],
   "spec": "tests/B2C-65.spec.ts",
   "status": "Aprobado",
   "steps": "1. Navegar a la PLP con el producto con cucarda en Desktop 1280x900.\n2. Registrar texto, color de texto, color de fondo e ícono de la cucarda.\n3. Cambiar la visualización a Mobile 390x844 (o acceder desde dispositivo móvil).\n4. Navegar a la misma PLP y localizar el producto.\n5. Verificar que texto, colores e ícono son idénticos en ambos viewports.\n6. Verificar que el tamaño del componente se adapta al canal.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "duration_s": 134.5,
   "executed_at": "2026-10-19",
   "expected": "La cucarda se muestra sobre la imagen placeholder en la esquina superior izquierda. El estilo visual (texto, colores) es el mismo que sobre una imagen real de producto.",
   "form_factor": "desktop",
   "id": "TC-65-D-012",
   "name": "Cucarda visible sobre imagen placeholder cuando el producto no tiene imagen válida",
   "observation": "Causa: el caso excede el tiempo de ejecución (timeouts de 180 s al ubicar el elemento en el ambiente). Acción: revisar el rendimiento del ambiente o el producto declarado y re-ejecutar. La simulación de imagen inválida no logró mostrar el placeholder sobre un producto con cucarda, por lo que no hay veredicto sobre el producto.",
   "observed": "Causa: el caso excede el tiempo de ejecución (timeouts de 180 s al ubicar el elemento en el ambiente). Acción: revisar el rendimiento del ambiente o el producto declarado y re-ejecutar. La simulación de imagen inválida no logró mostrar el placeholder sobre un producto con cucarda, por lo que no hay veredicto sobre el producto.",
   "preconditions": "User type: Guest\nProducto con cucarda configurada y sin imagen válida (muestra imagen placeholder)\nProducto visible en la PLP\nViewport Desktop 1280x900",
   "spec": "tests/B2C-65.spec.ts",
   "status": "Bloqueado",
   "steps": "1. Navegar a la PLP con el producto sin imagen válida (muestra placeholder).\n2. Verificar que la imagen del producto muestra el placeholder configurado.\n3. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen placeholder.\n4. Verificar que el texto y colores de la cucarda son los configurados en BM.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno",
   "viewport": "1280x900"
  },
  {
   "browser": "webkit",
   "duration_s": 65.6,
   "executed_at": "2026-10-19",
   "expected": "La cucarda se muestra en la esquina superior izquierda de la imagen en Mobile. Texto, colores e ícono son consistentes con la configuración en BM.",
   "form_factor": "mobile",
   "id": "TC-65-M-001",
   "name": "Cucarda visible en PLP con posición y estilo configurados",
   "observed": "Igual que en Desktop, en Mobile: cucarda 'Cyber' arriba a la izquierda, sin cruzar Favoritos.",
   "preconditions": "User type: Guest\nProducto con cucarda configurada (Label_Activo=true, Label_Texto, colores)\nProducto disponible en una PLP\nViewport Mobile 390x844",
   "screenshots": [
    {
     "caption": "Paso 1 — plp declarada",
     "file": "TC-65-M-001-p01-plp-declarada.png"
    },
    {
     "caption": "Paso 2 — shelf del sku 000000000000028616 kgv",
     "file": "TC-65-M-001-p02-shelf-del-sku-000000000000028616-kgv.png"
    },
    {
     "caption": "Paso 3 — cucarda en dx 8 dy 3",
     "file": "TC-65-M-001-p03-cucarda-en-dx-8-dy-3.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-65-M-001.png"
    }
   ],
   "spec": "tests/B2C-65.spec.ts",
   "status": "Aprobado",
   "steps": "1. Navegar a la PLP en Mobile con el producto con cucarda configurada.\n2. Localizar el producto en la grilla.\n3. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen.\n4. Verificar que texto, colores e ícono coinciden con los atributos Label en BM.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n{SKU_CYBER} = 000000000000028616-KGV",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 88.1,
   "executed_at": "2026-10-19",
   "expected": "La cucarda se muestra en la shelf del producto en el SRP/buscador en Mobile. Posición, texto y colores son consistentes con la configuración en BM.",
   "form_factor": "mobile",
   "id": "TC-65-M-002",
   "name": "Cucarda visible en SRP (buscador) con estilo configurado",
   "observation": "El término de búsqueda se derivó del nombre del SKU declarado (la fila no declara término).",
   "observed": "Desde el buscador Mobile se llega a la SRP; el SKU declarado muestra la cucarda 'Cyber' arriba a la izquierda.",
   "preconditions": "User type: Guest\nProducto con cucarda configurada indexado y visible en resultados del buscador\nViewport Mobile 390x844",
   "screenshots": [
    {
     "caption": "Paso 1 — resultados de tapapecho vacuno nacional",
     "file": "TC-65-M-002-p01-resultados-de-tapapecho-vacuno-nacional.png"
    },
    {
     "caption": "Paso 2 — shelf del producto en la srp",
     "file": "TC-65-M-002-p02-shelf-del-producto-en-la-srp.png"
    },
    {
     "caption": "Paso 3 — cucarda cyber en dx 8 dy 3",
     "file": "TC-65-M-002-p03-cucarda-cyber-en-dx-8-dy-3.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-65-M-002.png"
    }
   ],
   "spec": "tests/B2C-65.spec.ts",
   "status": "Aprobado",
   "steps": "1. Abrir el buscador en Mobile e ingresar un término que devuelva el producto con cucarda.\n2. Localizar el producto en los resultados.\n3. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen.\n4. Verificar que texto y colores coinciden con los configurados.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n{SKU_CYBER} = 000000000000028616-KGV",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-19",
   "expected": "La cucarda se muestra en carruseles y Colecciones en Mobile con posición, texto y colores correctos.",
   "form_factor": "mobile",
   "id": "TC-65-M-003",
   "name": "Cucarda visible en Carrusel y Colecciones con estilo configurado",
   "observation": "Causa: el paso 3 exige una página de Colecciones que la fila no declara (solo {BASE_URL} y {SKU_CUCARDA}). Acción: declarar la URL de la colección con el producto.",
   "observed": "Causa: el paso 3 exige una página de Colecciones que la fila no declara (solo {BASE_URL} y {SKU_CUCARDA}). Acción: declarar la URL de la colección con el producto.",
   "preconditions": "User type: Guest\nProducto con cucarda visible en un carrusel del Home o en una página de Colección\nViewport Mobile 390x844",
   "spec": "tests/B2C-65.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. Navegar al Home en Mobile y localizar el carrusel con el producto con cucarda.\n2. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen en el carrusel.\n3. Navegar a una página de Colecciones con el producto y verificar la cucarda.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{SKU_CUCARDA} = 000000000000028616-KGV",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 64.2,
   "executed_at": "2026-10-19",
   "expected": "Solo se muestra 1 cucarda en la shelf del producto en Mobile. La cucarda y el botón Favoritos no se solapan visualmente.",
   "form_factor": "mobile",
   "id": "TC-65-M-004",
   "name": "Máximo 1 cucarda por producto — no se superpone con botón Favoritos",
   "observed": "Una sola cucarda a la izquierda y Favoritos a la derecha, sin solapamiento, en Mobile.",
   "preconditions": "User type: Guest\nProducto con cucarda configurada en la PLP\nViewport Mobile 390x844",
   "screenshots": [
    {
     "caption": "Paso 1 — shelf del producto con cucarda",
     "file": "TC-65-M-004-p01-shelf-del-producto-con-cucarda.png"
    },
    {
     "caption": "Paso 2 — cucarda a la izquierda y favoritos a la derecha",
     "file": "TC-65-M-004-p02-cucarda-a-la-izquierda-y-favoritos-a-la-derecha.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-65-M-004.png"
    }
   ],
   "spec": "tests/B2C-65.spec.ts",
   "status": "Aprobado",
   "steps": "1. Navegar a la PLP en Mobile con el producto con cucarda.\n2. Verificar que solo aparece 1 cucarda en la shelf del producto.\n3. Verificar que la cucarda (izquierda) y el botón Favoritos (derecha) no se solapan.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n{SKU_CYBER} = 000000000000028616-KGV",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 66.0,
   "executed_at": "2026-10-19",
   "expected": "La cucarda se muestra en la shelf del producto en estado normal en Mobile, con posición, texto y colores correctos.",
   "form_factor": "mobile",
   "id": "TC-65-M-006",
   "name": "Cucarda visible en estado normal (producto disponible, no en carro)",
   "observation": "Mobile no declara SKU: se tomó el primer producto con cucarda de la PLP declarada.",
   "observed": "Producto con 'Agregar' y cucarda en la esquina superior izquierda.",
   "preconditions": "User type: Guest\nProducto con cucarda, disponible y con stock · Carrito vacío\nViewport Mobile 390x844",
   "screenshots": [
    {
     "caption": "Paso 1 — shelf con cucarda en estado normal",
     "file": "TC-65-M-006-p01-shelf-con-cucarda-en-estado-normal.png"
    },
    {
     "caption": "Paso 2 — cucarda cyber en dx 8 dy 3",
     "file": "TC-65-M-006-p02-cucarda-cyber-en-dx-8-dy-3.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-65-M-006.png"
    }
   ],
   "spec": "tests/B2C-65.spec.ts",
   "status": "Aprobado",
   "steps": "1. Navegar a la PLP en Mobile (carrito vacío, producto disponible).\n2. Verificar que el producto muestra el botón \"Agregar\" (estado normal).\n3. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 184.8,
   "executed_at": "2026-10-19",
   "expected": "La cucarda se mantiene visible en el estado 'en carro' en Mobile. Los controles de cantidad no ocultan ni desplazan la cucarda.",
   "form_factor": "mobile",
   "id": "TC-65-M-007",
   "name": "Cucarda visible en estado 'en carro' (controles de cantidad visibles)",
   "observation": "Causa: el caso excede el tiempo de ejecución (timeouts de 180 s al ubicar el elemento en el ambiente). Acción: revisar el rendimiento del ambiente o el producto declarado y re-ejecutar.",
   "observed": "Causa: el caso excede el tiempo de ejecución (timeouts de 180 s al ubicar el elemento en el ambiente). Acción: revisar el rendimiento del ambiente o el producto declarado y re-ejecutar.",
   "preconditions": "User type: Guest\nProducto con cucarda y 1 unidad ya en el carrito\nViewport Mobile 390x844",
   "spec": "tests/B2C-65.spec.ts",
   "status": "Bloqueado",
   "steps": "1. Navegar a la PLP en Mobile (producto ya tiene 1 unidad en el carrito).\n2. Verificar que la shelf muestra controles de cantidad (+/−).\n3. Verificar que la cucarda sigue apareciendo en la esquina superior izquierda.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-19",
   "expected": "La cucarda se muestra en la shelf del producto sin stock en Mobile. \"Pronto disponible\" y la cucarda coexisten sin solapamiento.",
   "form_factor": "mobile",
   "id": "TC-65-M-008",
   "name": "Cucarda visible en estado 'sin stock' (etiqueta 'Pronto disponible')",
   "observation": "Causa: el SKU declarado {SKU_SIN_STOCK} (000000000000029403-KG) tiene stock en el ambiente (muestra 'Agregar', sin 'Pronto disponible') y no tiene cucarda configurada. Acción: cargar un SKU sin stock y con cucarda en el Excel de data.",
   "observed": "Causa: el SKU declarado {SKU_SIN_STOCK} (000000000000029403-KG) tiene stock en el ambiente (muestra 'Agregar', sin 'Pronto disponible') y no tiene cucarda configurada. Acción: cargar un SKU sin stock y con cucarda en el Excel de data.",
   "preconditions": "User type: Guest\nProducto con cucarda configurada y sin stock\nViewport Mobile 390x844",
   "spec": "tests/B2C-65.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a la PLP en Mobile con el producto sin stock.\n2. Verificar que la shelf muestra la etiqueta \"Pronto disponible\".\n3. Verificar que la cucarda sigue apareciendo en la esquina superior izquierda de la imagen.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n{SKU_SIN_STOCK} = 000000000000029403-KG",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 67.4,
   "executed_at": "2026-10-19",
   "expected": "El texto de la cucarda aparece truncado con \"...\" al exceder 15 caracteres en Mobile. El layout del shelf no se rompe. La cucarda mantiene su posición y dimensiones correctas.",
   "form_factor": "mobile",
   "id": "TC-65-M-009",
   "name": "Texto de cucarda >15 caracteres se trunca con '...' en Mobile",
   "observation": "Esperado: texto >15 caracteres truncado con '...'. Obtenido: la cucarda de {SKU_CUCARDA_LARGA} muestra 'Promoción Lleva 2 unidades por Monto' (36 caracteres) sin '...'; la cucarda mide 153 px, se sale del borde derecho de la imagen y cubre Favoritos. B2C-65.spec.ts:516.",
   "observed": "Texto sin puntos suspensivos, cucarda desborda la imagen y tapa Favoritos.",
   "preconditions": "User type: Guest\nProducto con Label_Texto de más de 15 caracteres (ej. \"Club Unimarc Exclusivo!\") configurado\nViewport Mobile 390x844",
   "screenshots": [
    {
     "caption": "Paso 1 — shelf del sku 000000000000666285 un",
     "file": "TC-65-M-009-p01-shelf-del-sku-000000000000666285-un.png"
    },
    {
     "caption": "Paso 2 — cucarda de 36 caracteres",
     "file": "TC-65-M-009-p02-cucarda-de-36-caracteres.png"
    },
    {
     "caption": "Estado al fallar la aserción",
     "file": "TC-65-M-009.png"
    }
   ],
   "spec": "tests/B2C-65.spec.ts",
   "status": "Rechazado",
   "steps": "1. Navegar a la PLP en Mobile con el producto que tiene Label_Texto de más de 15 caracteres.\n2. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen.\n3. Verificar que el texto visible está truncado con \"...\" y no supera los 15 caracteres.\n4. Verificar que el layout del shelf no se rompe.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n{SKU_CUCARDA_LARGA} = 000000000000666285-UN",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 31.0,
   "executed_at": "2026-10-19",
   "expected": "La cucarda se muestra en la shelf simplificada del modal en Mobile con posición, texto y colores correctos.",
   "form_factor": "mobile",
   "id": "TC-65-M-010",
   "name": "Cucarda visible en shelf simplificada dentro de modal de buscador",
   "observation": "El término se derivó del nombre del SKU declarado.",
   "observed": "La shelf simplificada del modal muestra la cucarda 'Cyber' arriba a la izquierda sin tapar Favoritos.",
   "preconditions": "User type: Guest\nProducto con cucarda configurada en los resultados del modal de buscador\nViewport Mobile 390x844",
   "screenshots": [
    {
     "caption": "Paso 1 — modal de buscador con tapapecho vacuno nacional",
     "file": "TC-65-M-010-p01-modal-de-buscador-con-tapapecho-vacuno-nacional.png"
    },
    {
     "caption": "Paso 2 — shelf simplificada del producto",
     "file": "TC-65-M-010-p02-shelf-simplificada-del-producto.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-65-M-010.png"
    }
   ],
   "spec": "tests/B2C-65.spec.ts",
   "status": "Aprobado",
   "steps": "1. Abrir el modal de buscador en Mobile con el producto con cucarda en los resultados.\n2. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen en la shelf simplificada.\n3. Verificar que texto y colores son consistentes con la configuración en BM.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{SKU_CYBER} = 000000000000028616-KGV\n{SRP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/search?q=carne",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 84.2,
   "executed_at": "2026-10-19",
   "expected": "La cucarda muestra el mismo contenido en Mobile que en Desktop. El componente se adapta al tamaño del viewport Mobile respetando el Design System Super DS.",
   "form_factor": "mobile",
   "id": "TC-65-M-011",
   "name": "Cucarda muestra mismo texto, colores e ícono en Desktop y Mobile",
   "observed": "En Desktop y Mobile los mismos 3 productos de la PLP llevan cucarda con el mismo texto y colores; el tamaño se adapta al canal.",
   "preconditions": "User type: Guest\nProducto con cucarda configurada con Label_Texto, colores e ícono\nAcceso a la PLP en Desktop 1280x900 y Mobile 390x844",
   "screenshots": [
    {
     "caption": "Paso 1 — plp en mobile 390x844",
     "file": "TC-65-M-011-p01-plp-en-mobile-390x844.png"
    },
    {
     "caption": "Paso 2 — misma plp en desktop 1280x900",
     "file": "TC-65-M-011-p02-misma-plp-en-desktop-1280x900.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-65-M-011.png"
    }
   ],
   "spec": "tests/B2C-65.spec.ts",
   "status": "Aprobado",
   "steps": "1. Navegar a la PLP con el producto en Desktop y registrar texto, colores e ícono de la cucarda.\n2. Navegar a la misma PLP en Mobile 390x844.\n3. Verificar que texto, colores e ícono son idénticos al de Desktop.\n4. Verificar que el tamaño del componente se adapta al viewport Mobile.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno",
   "viewport": "1280x900"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-19",
   "expected": "La cucarda se muestra sobre la imagen placeholder en Mobile con el mismo estilo que sobre una imagen real de producto.",
   "form_factor": "mobile",
   "id": "TC-65-M-012",
   "name": "Cucarda visible sobre imagen placeholder cuando el producto no tiene imagen válida",
   "observation": "Causa: el caso excede el tiempo de ejecución (timeouts de 180 s al ubicar el elemento en el ambiente). Acción: revisar el rendimiento del ambiente o el producto declarado y re-ejecutar. (sin veredicto: la corrida se detuvo antes de ejecutarlo).",
   "observed": "Causa: el caso excede el tiempo de ejecución (timeouts de 180 s al ubicar el elemento en el ambiente). Acción: revisar el rendimiento del ambiente o el producto declarado y re-ejecutar. (sin veredicto: la corrida se detuvo antes de ejecutarlo).",
   "preconditions": "User type: Guest\nProducto con cucarda y sin imagen válida (muestra placeholder)\nViewport Mobile 390x844",
   "spec": "tests/B2C-65.spec.ts",
   "status": "Bloqueado",
   "steps": "1. Navegar a la PLP en Mobile con el producto sin imagen válida (muestra placeholder).\n2. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen placeholder.\n3. Verificar que texto y colores son los configurados en BM.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "La cucarda se muestra correctamente para usuario logueado con el mismo comportamiento que para usuario Guest: posición, texto y colores correctos.",
   "form_factor": "desktop",
   "id": "TC-65-D-013",
   "name": "Cucarda visible en PLP para usuario logueado",
   "observed": "La cucarda 'Cyber' se ve arriba a la izquierda de la imagen con el usuario logueado, igual que como invitado (dx 8, dy 3), con colores de texto y fondo propios. El valor exacto configurado en BM no se lee desde el storefront.",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nProducto con cucarda configurada en la PLP\nViewport Desktop 1280x900",
   "screenshots": [
    {
     "caption": "Paso 1 — plp declarada",
     "file": "TC-65-D-013-p01-plp-declarada.png"
    },
    {
     "caption": "Paso 2 — shelf del sku 000000000000028616 kgv",
     "file": "TC-65-D-013-p02-shelf-del-sku-000000000000028616-kgv.png"
    },
    {
     "caption": "Paso 3 — cucarda en dx 8 dy 3",
     "file": "TC-65-D-013-p03-cucarda-en-dx-8-dy-3.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-65-D-013.png"
    }
   ],
   "spec": "tests/B2C-65.spec.ts",
   "status": "Aprobado",
   "steps": "1. Iniciar sesión con cuenta de cliente registrado.\n2. Navegar a la PLP con el producto con cucarda configurada.\n3. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen.\n4. Verificar que texto y colores son consistentes con la configuración en BM.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta de comprador)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "La cucarda se muestra correctamente en Mobile para usuario logueado, con el mismo comportamiento que para usuario Guest.",
   "form_factor": "mobile",
   "id": "TC-65-M-013",
   "name": "Cucarda visible en PLP para usuario logueado",
   "observed": "La cucarda 'Cyber' se ve arriba a la izquierda de la imagen en Mobile con el usuario logueado, igual que como invitado. El valor exacto configurado en BM no se lee desde el storefront.",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nProducto con cucarda configurada en la PLP\nViewport Mobile 390x844",
   "screenshots": [
    {
     "caption": "Paso 1 — plp declarada",
     "file": "TC-65-M-013-p01-plp-declarada.png"
    },
    {
     "caption": "Paso 2 — shelf del sku 000000000000028616 kgv",
     "file": "TC-65-M-013-p02-shelf-del-sku-000000000000028616-kgv.png"
    },
    {
     "caption": "Paso 3 — cucarda en dx 8 dy 3",
     "file": "TC-65-M-013-p03-cucarda-en-dx-8-dy-3.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-65-M-013.png"
    }
   ],
   "spec": "tests/B2C-65.spec.ts",
   "status": "Aprobado",
   "steps": "1. Iniciar sesión con cuenta de cliente registrado en Mobile.\n2. Navegar a la PLP con el producto con cucarda.\n3. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen.\n4. Verificar texto y colores consistentes con BM.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta de comprador)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "La cucarda se muestra en la misma posición y con el mismo estilo en los tres estados de la shelf para usuario logueado. No se oculta ni desplaza en ningún estado.",
   "form_factor": "desktop",
   "id": "TC-65-D-014",
   "name": "Cucarda consistente en todos los estados de la shelf para usuario logueado",
   "observation": "Causa: el paso 4 pide un producto con cucarda y sin stock y la fila no declara ninguno ({SKU_SIN_STOCK} no está en su Test data y en el ambiente tiene stock). Los pasos 2 y 3 (estado normal y 'en carro') se ejecutaron con la cuenta de comprador y la cucarda se mantuvo igual. Acción: declarar en la fila un producto con cucarda y sin stock.",
   "observed": "Causa: el paso 4 pide un producto con cucarda y sin stock y la fila no declara ninguno ({SKU_SIN_STOCK} no está en su Test data y en el ambiente tiene stock). Los pasos 2 y 3 (estado normal y 'en carro') se ejecutaron con la cuenta de comprador y la cucarda se mantuvo igual. Acción: declarar en la fila un producto con cucarda y sin stock.",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nProducto con cucarda configurada, con stock\nViewport Desktop 1280x900",
   "screenshots": [
    {
     "caption": "Paso 1 — shelf antes de agregar",
     "file": "TC-65-D-014-p01-shelf-antes-de-agregar.png"
    },
    {
     "caption": "Paso 2 — shelf con controles de cantidad",
     "file": "TC-65-D-014-p02-shelf-con-controles-de-cantidad.png"
    },
    {
     "caption": "Paso 3 — cucarda intacta en el estado en carro",
     "file": "TC-65-D-014-p03-cucarda-intacta-en-el-estado-en-carro.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-65-D-014.png"
    }
   ],
   "spec": "tests/B2C-65.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. Iniciar sesión con cuenta de cliente registrado.\n2. Navegar a la PLP (producto sin agregar) → verificar cucarda en estado normal.\n3. Agregar el producto al carrito → verificar cucarda en estado 'en carro'.\n4. Con producto sin stock → verificar cucarda en estado 'sin stock' (etiqueta 'Pronto disponible').",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta de comprador)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "La cucarda se muestra en los tres estados de la shelf en Mobile para usuario logueado, con posición y estilo consistentes.",
   "form_factor": "mobile",
   "id": "TC-65-M-014",
   "name": "Cucarda consistente en todos los estados de la shelf para usuario logueado",
   "observation": "Causa: el paso 4 pide un producto con cucarda y sin stock y la fila no declara ninguno ({SKU_SIN_STOCK} no está en su Test data y en el ambiente tiene stock). Los pasos 2 y 3 (estado normal y 'en carro') se ejecutaron con la cuenta de comprador y la cucarda se mantuvo igual. Acción: declarar en la fila un producto con cucarda y sin stock. En Mobile, además, el estado normal no pudo comprobarse: el producto ya estaba en el carro de la misma cuenta por la corrida Desktop (el botón 'Agregar' no aparece).",
   "observed": "Causa: el paso 4 pide un producto con cucarda y sin stock y la fila no declara ninguno ({SKU_SIN_STOCK} no está en su Test data y en el ambiente tiene stock). Los pasos 2 y 3 (estado normal y 'en carro') se ejecutaron con la cuenta de comprador y la cucarda se mantuvo igual. Acción: declarar en la fila un producto con cucarda y sin stock. En Mobile, además, el estado normal no pudo comprobarse: el producto ya estaba en el carro de la misma cuenta por la corrida Desktop (el botón 'Agregar' no aparece).",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nProducto con cucarda, disponible y con stock\nViewport Mobile 390x844",
   "spec": "tests/B2C-65.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. Iniciar sesión en Mobile.\n2. Navegar a la PLP (sin agregar) → verificar cucarda en estado normal.\n3. Agregar producto → verificar cucarda en estado 'en carro'.\n4. Con producto sin stock → verificar cucarda en estado 'sin stock'.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta de comprador)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "La shelf del producto muestra el label de la promoción (no el de la categoría). El texto, colores e ícono corresponden a los atributos configurados en la promoción, confirmando la priorización: promoción > categoría.",
   "form_factor": "desktop",
   "id": "TC-65-D-015",
   "name": "Priorización: label de promoción tiene precedencia sobre label de categoría en storefront",
   "observation": "Causa: la precondición pide un producto con label de categoría y de promoción configurados y los jobs ejecutados, y la fila solo declara {BASE_URL}, {COMPRADOR_USER}, {COMPRADOR_PASSWORD} y {PLP_URL}: no dice qué producto. Acción: declarar en la fila el producto (token) que cumple la precondición.",
   "observed": "Causa: la precondición pide un producto con label de categoría y de promoción configurados y los jobs ejecutados, y la fila solo declara {BASE_URL}, {COMPRADOR_USER}, {COMPRADOR_PASSWORD} y {PLP_URL}: no dice qué producto. Acción: declarar en la fila el producto (token) que cumple la precondición.",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nProducto en una subcategoría con Label_Activo=true (label de categoría configurado)\nMismo producto elegible a una promoción con Label_Activo=true (label de promoción configurado, texto diferente)\nJOB1 y JOB2 ejecutados para aplicar ambos labels\nViewport Desktop 1280x900",
   "spec": "tests/B2C-65.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. Iniciar sesión con cuenta de cliente registrado.\n2. Navegar a la PLP con el producto que tiene configurados tanto label de categoría como de promoción.\n3. Verificar el texto de la cucarda mostrada en la shelf del producto.\n4. Comparar el texto con el Label_Texto de la promoción y el Label_Texto de la categoría.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta de comprador)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "La shelf en Mobile muestra el label de la promoción (mayor prioridad). El label de la categoría no se muestra.",
   "form_factor": "mobile",
   "id": "TC-65-M-015",
   "name": "Priorización: label de promoción tiene precedencia sobre label de categoría en storefront",
   "observation": "Causa: la precondición pide un producto con label de categoría y de promoción configurados y los jobs ejecutados, y la fila solo declara {BASE_URL}, {COMPRADOR_USER}, {COMPRADOR_PASSWORD} y {PLP_URL}: no dice qué producto. Acción: declarar en la fila el producto (token) que cumple la precondición.",
   "observed": "Causa: la precondición pide un producto con label de categoría y de promoción configurados y los jobs ejecutados, y la fila solo declara {BASE_URL}, {COMPRADOR_USER}, {COMPRADOR_PASSWORD} y {PLP_URL}: no dice qué producto. Acción: declarar en la fila el producto (token) que cumple la precondición.",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nProducto con label de categoría y label de promoción configurados (JOB1 y JOB2 ejecutados)\nViewport Mobile 390x844",
   "spec": "tests/B2C-65.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. Iniciar sesión en Mobile.\n2. Navegar a la PLP con el producto con ambos labels configurados.\n3. Verificar el texto de la cucarda mostrada.\n4. Confirmar que corresponde al Label_Texto de la promoción y no de la categoría.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta de comprador)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "La shelf muestra el label de la promoción de membresía (máxima prioridad). El texto e ícono corresponden a los atributos de la promo de membresía. Los labels de Unipay, BancoEstado y % dcto no se muestran (solo 1 cucarda por producto).",
   "form_factor": "desktop",
   "id": "TC-65-D-016",
   "name": "Priorización entre labels de promoción: membresía > Unipay > BancoEstado > % dcto en storefront",
   "observation": "Causa: la precondición pide un producto con varias promociones con label (membresía, Unipay, BancoEstado y % dcto) configurados y los jobs ejecutados, y la fila solo declara {BASE_URL}, {COMPRADOR_USER}, {COMPRADOR_PASSWORD} y {PLP_URL}: no dice qué producto. Acción: declarar en la fila el producto (token) que cumple la precondición.",
   "observed": "Causa: la precondición pide un producto con varias promociones con label (membresía, Unipay, BancoEstado y % dcto) configurados y los jobs ejecutados, y la fila solo declara {BASE_URL}, {COMPRADOR_USER}, {COMPRADOR_PASSWORD} y {PLP_URL}: no dice qué producto. Acción: declarar en la fila el producto (token) que cumple la precondición.",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nProducto elegible para múltiples promos con label activo: membresía, Unipay, BancoEstado y % descuento\nJOB2 ejecutado para aplicar todos los labels\nViewport Desktop 1280x900",
   "spec": "tests/B2C-65.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. Iniciar sesión con cuenta de cliente registrado.\n2. Navegar a la PLP con el producto elegible a las múltiples promociones.\n3. Verificar el texto de la cucarda mostrada en la shelf.\n4. Confirmar que el texto corresponde al Label_Texto de la promoción de membresía (mayor prioridad).",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta de comprador)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "La shelf en Mobile muestra el label de la promo de membresía (mayor prioridad). Labels de Unipay, BancoEstado y % dcto no se muestran.",
   "form_factor": "mobile",
   "id": "TC-65-M-016",
   "name": "Priorización entre labels de promoción: membresía > Unipay > BancoEstado > % dcto en storefront",
   "observation": "Causa: la precondición pide un producto con varias promociones con label (membresía, Unipay, BancoEstado y % dcto) configurados y los jobs ejecutados, y la fila solo declara {BASE_URL}, {COMPRADOR_USER}, {COMPRADOR_PASSWORD} y {PLP_URL}: no dice qué producto. Acción: declarar en la fila el producto (token) que cumple la precondición.",
   "observed": "Causa: la precondición pide un producto con varias promociones con label (membresía, Unipay, BancoEstado y % dcto) configurados y los jobs ejecutados, y la fila solo declara {BASE_URL}, {COMPRADOR_USER}, {COMPRADOR_PASSWORD} y {PLP_URL}: no dice qué producto. Acción: declarar en la fila el producto (token) que cumple la precondición.",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nProducto elegible a múltiples promos con label: membresía, Unipay, BancoEstado y % dcto (JOB2 ejecutado)\nViewport Mobile 390x844",
   "spec": "tests/B2C-65.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. Iniciar sesión en Mobile.\n2. Navegar a la PLP con el producto elegible a múltiples promociones.\n3. Verificar el texto de la cucarda.\n4. Confirmar que corresponde al label de la promo de membresía.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta de comprador)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno",
   "viewport": "390x844"
  }
 ]
}
-->


---
