# B2C-138 - Store Locator sin método de entrega - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-138 |
| Última actualización | 2026-10-15 |
| Ejecutado por | Victor Chirinos |
| Ambiente | Storefront Unimarc DEV (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/), Chromium Desktop 1440x900 / WebKit Mobile 390x844 |
| Origen de los TC | Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-138 WEB Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 5 |
| Bloqueado Data | 2 |
| **Total** | **7** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-15 | 7 | TC-B2C138-D-002, TC-B2C138-D-005, TC-B2C138-D-010, TC-B2C138-D-011, TC-B2C138-M-002, TC-B2C138-M-003, TC-B2C138-M-005 |

## Detalle por caso de prueba

### TC-B2C138-D-002 - Header muestra «Elige una forma de entrega» + ícono ∨ cuando no hay método seleccionado [Logueado][Desktop]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

Usuario invitado o con sesión activa (sin dirección de despacho configurada). Viewport: Desktop 1440x900. URL base: https://www.unimarc.cl.

**Data utilizada**

{BASE_URL}, {COMPRADOR_SIN_DIRECCION_USER}, {PLP_URL}, {SKU_VALID_001}

**Pasos ejecutados**

1. Navegar a la Home del sitio con viewport Desktop 1440x900 sin método de entrega configurado.
2. Verificar que la sección Store Locator en el header muestra:
a. Ícono de ubicación/entrega.

b. Texto: «Elige una forma de entrega».

c. Ícono chevron ∨ (flecha hacia abajo).

3. Navegar a una PLP (listado de categoría) y verificar el mismo estado en el header.
4. Navegar a una PDP y verificar el mismo estado en el header.

**Resultado esperado**

En todas las páginas habilitadas, el Store Locator muestra: ícono + «Elige una forma de entrega» + chevron ∨. El estado es consistente para usuarios logueados sin dirección.

**Resultado obtenido**

Home, PLP y PDP muestran ícono + «Elige una forma de entrega» + chevron ∨ con la sesión iniciada.

**Observación**

Logueado con {COMPRADOR_SIN_DIRECCION_USER} (vhchirinos+sincasa@avatar-global.com) por correo + OTP desde 'Ingresa aquí' (el header saluda 'Hola, Comprador'); la cuenta no tiene direcciones guardadas ni método de entrega. PDP abierta por /product/000000000000675191-UN.

**Evidencia**

![Paso 2 — store locator en home](<B2C-138 Evidencias/TC-B2C138-D-002-p02-store-locator-en-home.png>)

![Paso 3 — store locator en plp](<B2C-138 Evidencias/TC-B2C138-D-002-p03-store-locator-en-plp.png>)

![Paso 4 — store locator en pdp](<B2C-138 Evidencias/TC-B2C138-D-002-p04-store-locator-en-pdp.png>)

![Estado final](<B2C-138 Evidencias/TC-B2C138-D-002.png>)

---

### TC-B2C138-D-005 - Estructura del modal para usuario logueado: tabs Despacho/Retiro, imagen y mensaje «sin direcciones guardadas» [Logueado][Desktop]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

Usuario logueado sin dirección de despacho configurada. Viewport: Desktop 1440x900. URL base: https://www.unimarc.cl. Modal «Elige tu método de entrega» abierto.

**Data utilizada**

{BASE_URL}, {COMPRADOR_SIN_DIRECCION_USER}

**Pasos ejecutados**

1. Iniciar sesión con vhchirinos+comprador@avatar-global.com / {COMPRADOR_PASSWORD} (usuario sin dirección de despacho configurada).
2. Abrir el modal «Elige tu método de entrega» desde el header.
3. Verificar que la pestaña «Despacho a domicilio» está activa (color rojo) y es la vista por defecto.
4. Verificar que la pestaña «Retiro en tienda» está inactiva (gris).
5. Verificar que ambas pestañas incluyen su ícono correspondiente.
6. Verificar que se muestra una imagen en el área de contenido.
7. Verificar el mensaje: «Aún no tienes direcciones guardadas».
8. Verificar que existe texto de ayuda para ingresar una dirección.

**Resultado esperado**

Modal muestra para usuario logueado: tab «Despacho a domicilio» activo (rojo) + tab «Retiro en tienda» inactivo (gris) + imagen + mensaje «Aún no tienes direcciones guardadas» + texto de ayuda. Todos los íconos presentes.

**Resultado obtenido**

Modal con «Despacho a domicilio» activa (roja), «Retiro en tienda» inactiva (gris), imagen, «Aún no tienes direcciones guardadas» y el texto de ayuda.

**Observación**

Logueado con {COMPRADOR_SIN_DIRECCION_USER} (vhchirinos+sincasa@avatar-global.com) por correo + OTP desde 'Ingresa aquí' (el header saluda 'Hola, Comprador'); la cuenta no tiene direcciones guardadas ni método de entrega.

**Evidencia**

![Paso 1 — sesion iniciada sin metodo de entrega](<B2C-138 Evidencias/TC-B2C138-D-005-p01-sesion-iniciada-sin-metodo-de-entrega.png>)

![Paso 2 — modal abierto](<B2C-138 Evidencias/TC-B2C138-D-005-p02-modal-abierto.png>)

![Paso 4 — pestanas despacho activa y retiro inactiva](<B2C-138 Evidencias/TC-B2C138-D-005-p04-pestanas-despacho-activa-y-retiro-inactiva.png>)

![Estado final](<B2C-138 Evidencias/TC-B2C138-D-005.png>)

---

### TC-B2C138-D-010 - Error al cargar el modal: pantalla de error interna con «Reintentar» y «Volver al Inicio»

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-15 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

Usuario invitado o con sesión activa. Viewport: Desktop 1440x900. URL base: https://www.unimarc.cl. Error simulado de red/timeout al intentar abrir el modal del Store Locator.

**Data utilizada**

{BASE_URL}

**Pasos ejecutados**

1. Hacer clic en el indicador ∨ del Store Locator con error de red simulado.
2. Verificar que el modal se abre (no se omite) pero muestra una pantalla de error en su interior.
3. Verificar que la pantalla de error incluye:
a. Mensaje de error correspondiente.

b. Botón «Reintentar».

c. Botón «Volver al Inicio».

4. Verificar que el header mantiene su estado previo «Elige una forma de entrega» + ∨ sin cambios.
5. Hacer clic en «Volver al Inicio» y verificar que redirige a la página de inicio.

**Resultado esperado**

El modal permanece abierto mostrando la pantalla de error (no se cierra ni muestra toast). Los botones «Reintentar» y «Volver al Inicio» son visibles y funcionales. El header no cambia de estado.

**Resultado obtenido**

No ejecutado: sin llamada declarada que simular.

**Observación**

Causa: la fila no declara qué llamada simular ni con qué cuenta. Como invitado, abrir el modal no hace ninguna request (re-verificado el 2026-10-15: 0 requests al abrirlo), así que no hay llamada que hacer fallar; y sin red el sitio entra en modo 'navegando sin conexión' y el modal no se abre. Acción: declarar en el Test data el endpoint a simular (o una cuenta logueada cuyo modal cargue direcciones guardadas), igual que M-010/M-011.

---

### TC-B2C138-D-011 - «Reintentar» en pantalla de error recarga el modal del Store Locator

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-15 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

Usuario invitado o con sesión activa. Viewport: Desktop 1440x900. URL base: https://www.unimarc.cl. Pantalla de error visible dentro del modal (continuación de D-008).

**Data utilizada**

{BASE_URL}

**Pasos ejecutados**

1. Con la pantalla de error visible dentro del modal (flujo D-008), hacer clic en el botón «Reintentar».
2. Verificar que el sistema intenta cargar el modal nuevamente (debe mostrar el estado de carga / skeleton durante el reintento).
3. Si la carga es exitosa en el reintento: verificar que el modal muestra la estructura correcta (tabs Despacho/Retiro + mensaje sin direcciones).
4. Si el error persiste: verificar que la pantalla de error se muestra nuevamente.

**Resultado esperado**

«Reintentar» dispara una nueva carga del modal. Si el reintento es exitoso, el modal muestra su estructura normal. Si el error persiste, la pantalla de error se mantiene dentro del modal.

**Resultado obtenido**

No ejecutado: sin llamada declarada que simular.

**Observación**

Causa: la fila no declara qué llamada simular ni con qué cuenta. Como invitado, abrir el modal no hace ninguna request (re-verificado el 2026-10-15: 0 requests al abrirlo), así que no hay llamada que hacer fallar; y sin red el sitio entra en modo 'navegando sin conexión' y el modal no se abre. Acción: declarar en el Test data el endpoint a simular (o una cuenta logueada cuyo modal cargue direcciones guardadas), igual que M-010/M-011.

---

### TC-B2C138-M-002 - Header muestra «Elige una forma de entrega» + ícono ∨ cuando no hay método seleccionado[Logueado][Mobile]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

Usuario invitado o con sesión activa (sin dirección de despacho configurada). Viewport: Mobile 390x844. URL base: https://www.unimarc.cl.

**Data utilizada**

{BASE_URL}, {COMPRADOR_SIN_DIRECCION_USER}, {PLP_URL}, {SKU_VALID_001}

**Pasos ejecutados**

1. Navegar a la Home del sitio con viewport Mobile 390x844 sin método de entrega configurado.
2. Verificar que la sección Store Locator en el header muestra:
a. Ícono de ubicación/entrega.

b. Texto: «Elige una forma de entrega».

c. Ícono chevron ∨ (flecha hacia abajo).

3. Navegar a una PLP y verificar el mismo estado en el header.
4. Navegar a una PDP y verificar el mismo estado en el header.

**Resultado esperado**

En todas las páginas habilitadas, el Store Locator muestra: ícono + «Elige una forma de entrega» + chevron ∨. El estado es consistente para usuarios logueados sin dirección.

**Resultado obtenido**

Home, PLP y PDP muestran ícono + «Elige una forma de entrega» + chevron ∨ con la sesión iniciada.

**Observación**

Logueado con {COMPRADOR_SIN_DIRECCION_USER} (vhchirinos+sincasa@avatar-global.com) por correo + OTP desde 'Ingresa aquí' (el header saluda 'Hola, Comprador'); la cuenta no tiene direcciones guardadas ni método de entrega. PDP abierta por /product/000000000000675191-UN.

**Evidencia**

![Paso 2 — store locator en home](<B2C-138 Evidencias/TC-B2C138-M-002-p02-store-locator-en-home.png>)

![Paso 3 — store locator en plp](<B2C-138 Evidencias/TC-B2C138-M-002-p03-store-locator-en-plp.png>)

![Paso 4 — store locator en pdp](<B2C-138 Evidencias/TC-B2C138-M-002-p04-store-locator-en-pdp.png>)

![Estado final](<B2C-138 Evidencias/TC-B2C138-M-002.png>)

---

### TC-B2C138-M-003 - Tap en el Store Locator abre el modal «Elige tu método de entrega» con botón X

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

Usuario invitado o con sesión activa (sin dirección de despacho configurada). Viewport: Mobile 390x844. URL base: https://www.unimarc.cl.

**Data utilizada**

{BASE_URL}, {COMPRADOR_SIN_DIRECCION_USER}

**Pasos ejecutados**

1. Con el header mostrando «Elige una forma de entrega» + ∨, hacer tap en el indicador.
2. Verificar que se despliega el modal «Elige tu método de entrega».
3. Verificar que el modal contiene el botón cerrar «X».
4. Cerrar el modal y repetir los pasos 1–3 con un usuario logueado sin dirección.

**Resultado esperado**

El modal «Elige tu método de entrega» se abre correctamente en Mobile. El botón X está visible y accesible. El comportamiento es idéntico para usuarios invitados y logueados sin dirección.

**Resultado obtenido**

El modal «Elige tu método de entrega» se abre con la X visible como invitado y como logueado sin dirección.

**Observación**

Pasos 1-3 como invitado y paso 4 con logueado con {COMPRADOR_SIN_DIRECCION_USER} (vhchirinos+sincasa@avatar-global.com) por correo + OTP desde 'Ingresa aquí' (el header saluda 'Hola, Comprador'); la cuenta no tiene direcciones guardadas ni método de entrega.

**Evidencia**

![Paso 2 — invitado modal elige tu metodo de entrega con x](<B2C-138 Evidencias/TC-B2C138-M-003-p02-invitado-modal-elige-tu-metodo-de-entrega-con-x.png>)

![Paso 4 — logueado sin direccion modal con x](<B2C-138 Evidencias/TC-B2C138-M-003-p04-logueado-sin-direccion-modal-con-x.png>)

![Paso 4 — store locator en home](<B2C-138 Evidencias/TC-B2C138-M-003-p04-store-locator-en-home.png>)

![Estado final](<B2C-138 Evidencias/TC-B2C138-M-003.png>)

---

### TC-B2C138-M-005 - Estructura del modal en Mobile para usuario logueado: tabs Despacho/Retiro, imagen y mensaje «sin direcciones guardadas» [Logueado][Mobile]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

Usuario logueado sin dirección de despacho configurada. Viewport: Mobile 390x844. URL base: https://www.unimarc.cl. Modal «Elige tu método de entrega» abierto.

**Data utilizada**

{BASE_URL}, {COMPRADOR_SIN_DIRECCION_USER}

**Pasos ejecutados**

1. Iniciar sesión con vhchirinos+comprador@avatar-global.com / {COMPRADOR_PASSWORD} (usuario sin dirección de despacho configurada).
2. Abrir el modal «Elige tu método de entrega» desde el header en Mobile.
3. Verificar que la pestaña «Despacho a domicilio» está activa (color rojo) y es la vista por defecto.
4. Verificar que la pestaña «Retiro en tienda» está inactiva (gris).
5. Verificar que ambas pestañas incluyen su ícono correspondiente.
6. Verificar que se muestra una imagen en el área de contenido.
7. Verificar el mensaje: «Aún no tienes direcciones guardadas».
8. Verificar que existe texto de ayuda para ingresar una dirección.

**Resultado esperado**

Modal muestra en Mobile para usuario logueado: tab «Despacho a domicilio» activo (rojo) + tab «Retiro en tienda» inactivo (gris) + imagen + mensaje «Aún no tienes direcciones guardadas» + texto de ayuda. Todos los íconos presentes.

**Resultado obtenido**

Modal con «Despacho a domicilio» activa (roja), «Retiro en tienda» inactiva (gris), imagen, «Aún no tienes direcciones guardadas» y el texto de ayuda.

**Observación**

Logueado con {COMPRADOR_SIN_DIRECCION_USER} (vhchirinos+sincasa@avatar-global.com) por correo + OTP desde 'Ingresa aquí' (el header saluda 'Hola, Comprador'); la cuenta no tiene direcciones guardadas ni método de entrega.

**Evidencia**

![Paso 1 — sesion iniciada sin metodo de entrega](<B2C-138 Evidencias/TC-B2C138-M-005-p01-sesion-iniciada-sin-metodo-de-entrega.png>)

![Paso 2 — modal abierto](<B2C-138 Evidencias/TC-B2C138-M-005-p02-modal-abierto.png>)

![Paso 4 — pestanas despacho activa y retiro inactiva](<B2C-138 Evidencias/TC-B2C138-M-005-p04-pestanas-despacho-activa-y-retiro-inactiva.png>)

![Estado final](<B2C-138 Evidencias/TC-B2C138-M-005.png>)

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "environment": "Storefront Unimarc DEV (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/), Chromium Desktop 1440x900 / WebKit Mobile 390x844",
  "executed_by": "Victor Chirinos",
  "suite": "B2C-138",
  "tc_file": "Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-138 WEB Test Cases.xlsx",
  "title": "B2C-138 - Store Locator sin método de entrega - Evidencias QA",
  "updated_at": "2026-10-15"
 },
 "history": {
  "2026-10-15": [
   "TC-B2C138-D-002",
   "TC-B2C138-D-005",
   "TC-B2C138-D-010",
   "TC-B2C138-D-011",
   "TC-B2C138-M-002",
   "TC-B2C138-M-003",
   "TC-B2C138-M-005"
  ]
 },
 "results": [
  {
   "executed_at": "2026-10-15",
   "expected": "En todas las páginas habilitadas, el Store Locator muestra: ícono + «Elige una forma de entrega» + chevron ∨. El estado es consistente para usuarios logueados sin dirección.",
   "form_factor": "desktop",
   "id": "TC-B2C138-D-002",
   "name": "Header muestra «Elige una forma de entrega» + ícono ∨ cuando no hay método seleccionado [Logueado][Desktop]",
   "observation": "Logueado con {COMPRADOR_SIN_DIRECCION_USER} (vhchirinos+sincasa@avatar-global.com) por correo + OTP desde 'Ingresa aquí' (el header saluda 'Hola, Comprador'); la cuenta no tiene direcciones guardadas ni método de entrega. PDP abierta por /product/000000000000675191-UN.",
   "observed": "Home, PLP y PDP muestran ícono + «Elige una forma de entrega» + chevron ∨ con la sesión iniciada.",
   "preconditions": "Usuario invitado o con sesión activa (sin dirección de despacho configurada). Viewport: Desktop 1440x900. URL base: https://www.unimarc.cl.",
   "screenshots": [
    {
     "caption": "Paso 2 — store locator en home",
     "file": "TC-B2C138-D-002-p02-store-locator-en-home.png"
    },
    {
     "caption": "Paso 3 — store locator en plp",
     "file": "TC-B2C138-D-002-p03-store-locator-en-plp.png"
    },
    {
     "caption": "Paso 4 — store locator en pdp",
     "file": "TC-B2C138-D-002-p04-store-locator-en-pdp.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C138-D-002.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Navegar a la Home del sitio con viewport Desktop 1440x900 sin método de entrega configurado.\n2. Verificar que la sección Store Locator en el header muestra:\n   a. Ícono de ubicación/entrega.\n   b. Texto: «Elige una forma de entrega».\n   c. Ícono chevron ∨ (flecha hacia abajo).\n3. Navegar a una PLP (listado de categoría) y verificar el mismo estado en el header.\n4. Navegar a una PDP y verificar el mismo estado en el header.",
   "test_data": "{BASE_URL}, {COMPRADOR_SIN_DIRECCION_USER}, {PLP_URL}, {SKU_VALID_001}",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "Modal muestra para usuario logueado: tab «Despacho a domicilio» activo (rojo) + tab «Retiro en tienda» inactivo (gris) + imagen + mensaje «Aún no tienes direcciones guardadas» + texto de ayuda. Todos los íconos presentes.",
   "form_factor": "desktop",
   "id": "TC-B2C138-D-005",
   "name": "Estructura del modal para usuario logueado: tabs Despacho/Retiro, imagen y mensaje «sin direcciones guardadas» [Logueado][Desktop]",
   "observation": "Logueado con {COMPRADOR_SIN_DIRECCION_USER} (vhchirinos+sincasa@avatar-global.com) por correo + OTP desde 'Ingresa aquí' (el header saluda 'Hola, Comprador'); la cuenta no tiene direcciones guardadas ni método de entrega.",
   "observed": "Modal con «Despacho a domicilio» activa (roja), «Retiro en tienda» inactiva (gris), imagen, «Aún no tienes direcciones guardadas» y el texto de ayuda.",
   "preconditions": "Usuario logueado sin dirección de despacho configurada. Viewport: Desktop 1440x900. URL base: https://www.unimarc.cl. Modal «Elige tu método de entrega» abierto.",
   "screenshots": [
    {
     "caption": "Paso 1 — sesion iniciada sin metodo de entrega",
     "file": "TC-B2C138-D-005-p01-sesion-iniciada-sin-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 2 — modal abierto",
     "file": "TC-B2C138-D-005-p02-modal-abierto.png"
    },
    {
     "caption": "Paso 4 — pestanas despacho activa y retiro inactiva",
     "file": "TC-B2C138-D-005-p04-pestanas-despacho-activa-y-retiro-inactiva.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C138-D-005.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Iniciar sesión con vhchirinos+comprador@avatar-global.com / {COMPRADOR_PASSWORD} (usuario sin dirección de despacho configurada).\n2. Abrir el modal «Elige tu método de entrega» desde el header.\n3. Verificar que la pestaña «Despacho a domicilio» está activa (color rojo) y es la vista por defecto.\n4. Verificar que la pestaña «Retiro en tienda» está inactiva (gris).\n5. Verificar que ambas pestañas incluyen su ícono correspondiente.\n6. Verificar que se muestra una imagen en el área de contenido.\n7. Verificar el mensaje: «Aún no tienes direcciones guardadas».\n8. Verificar que existe texto de ayuda para ingresar una dirección.",
   "test_data": "{BASE_URL}, {COMPRADOR_SIN_DIRECCION_USER}",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "El modal permanece abierto mostrando la pantalla de error (no se cierra ni muestra toast). Los botones «Reintentar» y «Volver al Inicio» son visibles y funcionales. El header no cambia de estado.",
   "form_factor": "desktop",
   "id": "TC-B2C138-D-010",
   "name": "Error al cargar el modal: pantalla de error interna con «Reintentar» y «Volver al Inicio»",
   "observation": "Causa: la fila no declara qué llamada simular ni con qué cuenta. Como invitado, abrir el modal no hace ninguna request (re-verificado el 2026-10-15: 0 requests al abrirlo), así que no hay llamada que hacer fallar; y sin red el sitio entra en modo 'navegando sin conexión' y el modal no se abre. Acción: declarar en el Test data el endpoint a simular (o una cuenta logueada cuyo modal cargue direcciones guardadas), igual que M-010/M-011.",
   "observed": "No ejecutado: sin llamada declarada que simular.",
   "preconditions": "Usuario invitado o con sesión activa. Viewport: Desktop 1440x900. URL base: https://www.unimarc.cl. Error simulado de red/timeout al intentar abrir el modal del Store Locator.",
   "status": "Bloqueado Data",
   "steps": "1. Hacer clic en el indicador ∨ del Store Locator con error de red simulado.\n2. Verificar que el modal se abre (no se omite) pero muestra una pantalla de error en su interior.\n3. Verificar que la pantalla de error incluye:\n   a. Mensaje de error correspondiente.\n   b. Botón «Reintentar».\n   c. Botón «Volver al Inicio».\n4. Verificar que el header mantiene su estado previo «Elige una forma de entrega» + ∨ sin cambios.\n5. Hacer clic en «Volver al Inicio» y verificar que redirige a la página de inicio.",
   "test_data": "{BASE_URL}",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "«Reintentar» dispara una nueva carga del modal. Si el reintento es exitoso, el modal muestra su estructura normal. Si el error persiste, la pantalla de error se mantiene dentro del modal.",
   "form_factor": "desktop",
   "id": "TC-B2C138-D-011",
   "name": "«Reintentar» en pantalla de error recarga el modal del Store Locator",
   "observation": "Causa: la fila no declara qué llamada simular ni con qué cuenta. Como invitado, abrir el modal no hace ninguna request (re-verificado el 2026-10-15: 0 requests al abrirlo), así que no hay llamada que hacer fallar; y sin red el sitio entra en modo 'navegando sin conexión' y el modal no se abre. Acción: declarar en el Test data el endpoint a simular (o una cuenta logueada cuyo modal cargue direcciones guardadas), igual que M-010/M-011.",
   "observed": "No ejecutado: sin llamada declarada que simular.",
   "preconditions": "Usuario invitado o con sesión activa. Viewport: Desktop 1440x900. URL base: https://www.unimarc.cl. Pantalla de error visible dentro del modal (continuación de D-008).",
   "status": "Bloqueado Data",
   "steps": "1. Con la pantalla de error visible dentro del modal (flujo D-008), hacer clic en el botón «Reintentar».\n2. Verificar que el sistema intenta cargar el modal nuevamente (debe mostrar el estado de carga / skeleton durante el reintento).\n3. Si la carga es exitosa en el reintento: verificar que el modal muestra la estructura correcta (tabs Despacho/Retiro + mensaje sin direcciones).\n4. Si el error persiste: verificar que la pantalla de error se muestra nuevamente.",
   "test_data": "{BASE_URL}",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "En todas las páginas habilitadas, el Store Locator muestra: ícono + «Elige una forma de entrega» + chevron ∨. El estado es consistente para usuarios logueados sin dirección.",
   "form_factor": "mobile",
   "id": "TC-B2C138-M-002",
   "name": "Header muestra «Elige una forma de entrega» + ícono ∨ cuando no hay método seleccionado[Logueado][Mobile]",
   "observation": "Logueado con {COMPRADOR_SIN_DIRECCION_USER} (vhchirinos+sincasa@avatar-global.com) por correo + OTP desde 'Ingresa aquí' (el header saluda 'Hola, Comprador'); la cuenta no tiene direcciones guardadas ni método de entrega. PDP abierta por /product/000000000000675191-UN.",
   "observed": "Home, PLP y PDP muestran ícono + «Elige una forma de entrega» + chevron ∨ con la sesión iniciada.",
   "preconditions": "Usuario invitado o con sesión activa (sin dirección de despacho configurada). Viewport: Mobile 390x844. URL base: https://www.unimarc.cl.",
   "screenshots": [
    {
     "caption": "Paso 2 — store locator en home",
     "file": "TC-B2C138-M-002-p02-store-locator-en-home.png"
    },
    {
     "caption": "Paso 3 — store locator en plp",
     "file": "TC-B2C138-M-002-p03-store-locator-en-plp.png"
    },
    {
     "caption": "Paso 4 — store locator en pdp",
     "file": "TC-B2C138-M-002-p04-store-locator-en-pdp.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C138-M-002.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Navegar a la Home del sitio con viewport Mobile 390x844 sin método de entrega configurado.\n2. Verificar que la sección Store Locator en el header muestra:\n   a. Ícono de ubicación/entrega.\n   b. Texto: «Elige una forma de entrega».\n   c. Ícono chevron ∨ (flecha hacia abajo).\n3. Navegar a una PLP y verificar el mismo estado en el header.\n4. Navegar a una PDP y verificar el mismo estado en el header.",
   "test_data": "{BASE_URL}, {COMPRADOR_SIN_DIRECCION_USER}, {PLP_URL}, {SKU_VALID_001}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "El modal «Elige tu método de entrega» se abre correctamente en Mobile. El botón X está visible y accesible. El comportamiento es idéntico para usuarios invitados y logueados sin dirección.",
   "form_factor": "mobile",
   "id": "TC-B2C138-M-003",
   "name": "Tap en el Store Locator abre el modal «Elige tu método de entrega» con botón X",
   "observation": "Pasos 1-3 como invitado y paso 4 con logueado con {COMPRADOR_SIN_DIRECCION_USER} (vhchirinos+sincasa@avatar-global.com) por correo + OTP desde 'Ingresa aquí' (el header saluda 'Hola, Comprador'); la cuenta no tiene direcciones guardadas ni método de entrega.",
   "observed": "El modal «Elige tu método de entrega» se abre con la X visible como invitado y como logueado sin dirección.",
   "preconditions": "Usuario invitado o con sesión activa (sin dirección de despacho configurada). Viewport: Mobile 390x844. URL base: https://www.unimarc.cl.",
   "screenshots": [
    {
     "caption": "Paso 2 — invitado modal elige tu metodo de entrega con x",
     "file": "TC-B2C138-M-003-p02-invitado-modal-elige-tu-metodo-de-entrega-con-x.png"
    },
    {
     "caption": "Paso 4 — logueado sin direccion modal con x",
     "file": "TC-B2C138-M-003-p04-logueado-sin-direccion-modal-con-x.png"
    },
    {
     "caption": "Paso 4 — store locator en home",
     "file": "TC-B2C138-M-003-p04-store-locator-en-home.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C138-M-003.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Con el header mostrando «Elige una forma de entrega» + ∨, hacer tap en el indicador.\n2. Verificar que se despliega el modal «Elige tu método de entrega».\n3. Verificar que el modal contiene el botón cerrar «X».\n4. Cerrar el modal y repetir los pasos 1–3 con un usuario logueado sin dirección.",
   "test_data": "{BASE_URL}, {COMPRADOR_SIN_DIRECCION_USER}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "Modal muestra en Mobile para usuario logueado: tab «Despacho a domicilio» activo (rojo) + tab «Retiro en tienda» inactivo (gris) + imagen + mensaje «Aún no tienes direcciones guardadas» + texto de ayuda. Todos los íconos presentes.",
   "form_factor": "mobile",
   "id": "TC-B2C138-M-005",
   "name": "Estructura del modal en Mobile para usuario logueado: tabs Despacho/Retiro, imagen y mensaje «sin direcciones guardadas» [Logueado][Mobile]",
   "observation": "Logueado con {COMPRADOR_SIN_DIRECCION_USER} (vhchirinos+sincasa@avatar-global.com) por correo + OTP desde 'Ingresa aquí' (el header saluda 'Hola, Comprador'); la cuenta no tiene direcciones guardadas ni método de entrega.",
   "observed": "Modal con «Despacho a domicilio» activa (roja), «Retiro en tienda» inactiva (gris), imagen, «Aún no tienes direcciones guardadas» y el texto de ayuda.",
   "preconditions": "Usuario logueado sin dirección de despacho configurada. Viewport: Mobile 390x844. URL base: https://www.unimarc.cl. Modal «Elige tu método de entrega» abierto.",
   "screenshots": [
    {
     "caption": "Paso 1 — sesion iniciada sin metodo de entrega",
     "file": "TC-B2C138-M-005-p01-sesion-iniciada-sin-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 2 — modal abierto",
     "file": "TC-B2C138-M-005-p02-modal-abierto.png"
    },
    {
     "caption": "Paso 4 — pestanas despacho activa y retiro inactiva",
     "file": "TC-B2C138-M-005-p04-pestanas-despacho-activa-y-retiro-inactiva.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C138-M-005.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Iniciar sesión con vhchirinos+comprador@avatar-global.com / {COMPRADOR_PASSWORD} (usuario sin dirección de despacho configurada).\n2. Abrir el modal «Elige tu método de entrega» desde el header en Mobile.\n3. Verificar que la pestaña «Despacho a domicilio» está activa (color rojo) y es la vista por defecto.\n4. Verificar que la pestaña «Retiro en tienda» está inactiva (gris).\n5. Verificar que ambas pestañas incluyen su ícono correspondiente.\n6. Verificar que se muestra una imagen en el área de contenido.\n7. Verificar el mensaje: «Aún no tienes direcciones guardadas».\n8. Verificar que existe texto de ayuda para ingresar una dirección.",
   "test_data": "{BASE_URL}, {COMPRADOR_SIN_DIRECCION_USER}",
   "viewport": "390x844"
  }
 ]
}
-->
