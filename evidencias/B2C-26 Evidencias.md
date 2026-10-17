# B2C-26 - Setear método de entrega con Despacho a domicilio - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-26 |
| Última actualización | 2026-10-15 |
| Ejecutado por | Victor Chirinos |
| Ambiente | Storefront Unimarc DEV (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/), Chromium Desktop 1440x900 / WebKit Mobile 390x844 |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-26 WEB Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 29 |
| Rechazado | 17 |
| Bloqueado Data | 11 |
| Bloqueado | 2 |
| **Total** | **59** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-15 | 59 | TC-B2C26-D-001, TC-B2C26-D-002, TC-B2C26-D-003, TC-B2C26-D-004, TC-B2C26-D-005, TC-B2C26-D-006, TC-B2C26-D-007, TC-B2C26-D-008, TC-B2C26-D-009, TC-B2C26-D-010, TC-B2C26-D-011, TC-B2C26-D-012, TC-B2C26-D-013, TC-B2C26-D-014, TC-B2C26-D-015, TC-B2C26-D-016, TC-B2C26-D-017, TC-B2C26-D-018, TC-B2C26-D-019, TC-B2C26-M-001, TC-B2C26-M-002, TC-B2C26-M-003, TC-B2C26-M-004, TC-B2C26-M-005, TC-B2C26-M-006, TC-B2C26-M-007, TC-B2C26-M-008, TC-B2C26-M-009, TC-B2C26-M-010, TC-B2C26-M-011, TC-B2C26-M-012, TC-B2C26-M-013, TC-B2C26-M-014, TC-B2C26-M-015, TC-B2C26-M-016, TC-B2C26-M-017, TC-B2C26-M-018, TC-B2C26-M-019, TC-B2C26-M-020, TC-B2C26-M-021, TC-B2C26-M-022, TC-B2C26-M-023, TC-B2C26-M-024, TC-B2C26-M-025, TC-B2C26-M-026, TC-B2C26-M-027, TC-B2C26-M-028, TC-B2C26-M-029, TC-B2C26-M-030, TC-B2C26-M-031, TC-B2C26-M-032, TC-B2C26-M-033, TC-B2C26-M-034, TC-B2C26-M-035, TC-B2C26-M-036, TC-B2C26-M-037, TC-B2C26-M-038, TC-B2C26-M-039, TC-B2C26-M-040 |

## Detalle por caso de prueba

### TC-B2C26-D-001 - Al escribir 3 o mas caracteres en el buscador de Google se muestran sugerencias en tiempo real, y al elegir una con direccion completa redirige a B2C-99

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- Viewport: Desktop 1440x900

**Data utilizada**

{BASE_URL}, {DIRECCION_DESPACHO}

**Pasos ejecutados**

1. Escribir 3 o mas caracteres en el buscador.
2. Verificar las sugerencias en tiempo real.
3. Seleccionar una sugerencia con direccion completa y verificar la redireccion a B2C-99.

**Resultado esperado**

Se muestran sugerencias en tiempo real y al seleccionar una completa se redirige correctamente a B2C-99.

**Resultado obtenido**

Coincide con el resultado esperado.

**Observación**

Dirección Camino La Fuente 1589 Las Condes.

**Evidencia**

![Paso 0 — modal elige tu metodo de entrega](<B2C-26 Evidencias/TC-B2C26-D-001-p00-modal-elige-tu-metodo-de-entrega.png>)

![Paso 2 — sugerencias de google](<B2C-26 Evidencias/TC-B2C26-D-001-p02-sugerencias-de-google.png>)

![Paso 3 — confirmacion con pin b2c 99](<B2C-26 Evidencias/TC-B2C26-D-001-p03-confirmacion-con-pin-b2c-99.png>)

![Estado final](<B2C-26 Evidencias/TC-B2C26-D-001.png>)

---

### TC-B2C26-D-002 - Con menos de 3 caracteres no se consulta a Google y se ofrece agregar manualmente; sin resultados o con la API caida, tambien se ofrece Agregar direccion manual al final de la lista

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- Viewport: Desktop 1440x900

**Data utilizada**

{BASE_URL}, {DIRECCION_DESPACHO}

**Pasos ejecutados**

1. Escribir 1-2 caracteres y verificar que no haya sugerencias ni consulta a Google.
2. Escribir un termino sin resultados y verificar la opcion 'Agregar' al final.
3. Simular una falla de la API de Google y verificar el fallback a ingreso manual.

**Resultado esperado**

En los 3 escenarios se ofrece la opcion de agregar la direccion manualmente, sin bloquear al cliente.

**Resultado obtenido**

Coincide con el resultado esperado.

**Observación**

2 caracteres 'Ca' (sin consultas a Google); término sin resultados 'zzqxw 99999' (texto del paso, no es data del ambiente); falla de Google simulada abortando maps.googleapis.com. En los 3 casos el pie '¿No aparece tu dirección? Agregar' abre el formulario manual.

**Evidencia**

![Paso 1 — 2 caracteres sin sugerencias agregar disponible](<B2C-26 Evidencias/TC-B2C26-D-002-p01-2-caracteres-sin-sugerencias-agregar-disponible.png>)

![Paso 2 — sin resultados no aparece tu direccion agregar](<B2C-26 Evidencias/TC-B2C26-D-002-p02-sin-resultados-no-aparece-tu-direccion-agregar.png>)

![Paso 3 — google caido sin sugerencias agregar disponible](<B2C-26 Evidencias/TC-B2C26-D-002-p03-google-caido-sin-sugerencias-agregar-disponible.png>)

![Estado final](<B2C-26 Evidencias/TC-B2C26-D-002.png>)

---

### TC-B2C26-D-003 - Si Google retorna un resultado sin calle reconocida, el texto escrito se usa como Calle, se prellenan Region y Comuna, y continua directo al PIN

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-15 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- Viewport: Desktop 1440x900

**Data utilizada**

{BASE_URL}, {DIRECCION_DESPACHO}

**Pasos ejecutados**

1. Buscar un termino que retorne un resultado de tipo comuna o region.
2. Seleccionar ese resultado.
3. Verificar que el texto escrito se use como Calle y que Region/Comuna se prellenen.

**Resultado esperado**

El texto escrito se usa como Calle, Region y Comuna se prellenan, y el flujo continua al PIN interactivo.

**Resultado obtenido**

con 'Las Condes' (comuna de Camino La Fuente 1589 Las Condes) solo hay calles: 'Las Condesas', 'Las Condes · Antofagasta', '… Chiguayante', '… San Bernardo', 'Plazuela Las Condes'; la consulta va restringida a types=address.

**Observación**

Esperado: un resultado de Google de tipo comuna/región que deje el texto como Calle y prellene Región/Comuna. Obtenido: con 'Las Condes' (comuna de Camino La Fuente 1589 Las Condes) solo hay calles: 'Las Condesas', 'Las Condes · Antofagasta', '… Chiguayante', '… San Bernardo', 'Plazuela Las Condes'; la consulta va restringida a types=address. (tests/B2C-26.spec.ts:310). Mismo comportamiento que el bug B2C-844 (DESCARTADO en Jira): se marca Rechazado citándolo, sin abrir un bug nuevo.

**Evidencia**

![Paso 1 — sugerencias para las condes](<B2C-26 Evidencias/TC-B2C26-D-003-p01-sugerencias-para-las-condes.png>)

---

### TC-B2C26-D-004 - El invitado ve su direccion activa marcada en el modal, y el logueado ve un skeleton seguido de la direccion activa marcada, la lista de direcciones guardadas y los metodos Google/GPS

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-15 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- Viewport: Desktop 1440x900

**Data utilizada**

{BASE_URL}, {DIRECCION_DESPACHO}

**Pasos ejecutados**

1. Como invitado, abrir el modal y verificar el formato de la direccion marcada.
2. Como logueado, abrir el modal y verificar el skeleton y luego la lista completa.

**Resultado esperado**

El invitado ve su direccion activa formateada; el logueado ve el skeleton y luego la lista completa con ambos metodos.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: el paso 2 es 'como logueado' (skeleton, lista de guardadas) pero la fila solo declara https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ y Camino La Fuente 1589 Las Condes: no hay cuenta declarada. Acción: declarar la cuenta (p. ej. vhchirinos+comprador@avatar-global.com/{COMPRADOR_PASSWORD}) en Test data.

---

### TC-B2C26-D-005 - Si falla la carga de direcciones guardadas, se reemplaza el modal por una pantalla de error con codigo, botones Reintentar y Volver al inicio, sin cambiar la direccion activa

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- Viewport: Desktop 1440x900

**Data utilizada**

{BASE_URL}, {COMPRADOR_PASSWORD}, {COMPRADOR_USER}

**Pasos ejecutados**

1. Simular un error al cargar las direcciones guardadas.
2. Verificar el titulo, mensaje, codigo de error y los 2 botones.
3. Verificar que la direccion activa no haya cambiado.

**Resultado esperado**

Se muestra la pantalla de error completa con sus 2 botones, sin alterar la direccion activa.

**Resultado obtenido**

Coincide con el resultado esperado.

**Observación**

Logueado con vhchirinos+comprador@avatar-global.com (vhchirinos+comprador@avatar-global.com) por correo + OTP leído del Gmail conectado; dirección activa 'Casa' (Calle Uno 23, La Florida). Error simulado con 500 en la carga del cliente (shopper-customers/customers/{id}).

**Evidencia**

![Paso 0 — direccion activa calle uno 23 la florida](<B2C-26 Evidencias/TC-B2C26-D-005-p00-direccion-activa-calle-uno-23-la-florida.png>)

![Paso 2 — pantalla de error con codigo y 2 botones](<B2C-26 Evidencias/TC-B2C26-D-005-p02-pantalla-de-error-con-codigo-y-2-botones.png>)

![Estado final](<B2C-26 Evidencias/TC-B2C26-D-005.png>)

---

### TC-B2C26-D-006 - Con permiso de geolocalizacion concedido en Web, Activar mi ubicacion actual muestra un loader, obtiene las coordenadas GPS y redirige a B2C-99

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- Viewport: Desktop 1440x900

**Data utilizada**

{BASE_URL}, {LATITUD_DESPACHO}, {LONGITUD_DESPACHO}

**Pasos ejecutados**

1. En Web con permiso concedido, seleccionar 'Activar mi ubicacion actual' y verificar el loader y la redireccion.

**Resultado esperado**

Se muestra el loader, se obtienen las coordenadas GPS y se redirige correctamente a B2C-99.

**Resultado obtenido**

Coincide con el resultado esperado.

**Observación**

Ubicación concedida en -33.4012534, -70.5233046: 'Buscando tu ubicación…' y B2C-99 'Detalles de la dirección' con el mapa en esas coordenadas.

**Evidencia**

![Estado final](<B2C-26 Evidencias/TC-B2C26-D-006.png>)

---

### TC-B2C26-D-007 - Sin permiso de geolocalizacion, se muestra un modal para activarlo; al denegarlo se vuelve sin cambios al modal de metodo de entrega en Web

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-15 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- Viewport: Desktop 1440x900

**Data utilizada**

{BASE_URL}

**Pasos ejecutados**

1. En Web sin permiso, denegar y verificar el regreso sin cambios.
2. Repetir concediendo y verificar la redireccion a B2C-99.

**Resultado esperado**

Al denegar (Web) se regresa sin cambios; al conceder en Web se redirige a B2C-99.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: el paso 2 concede el permiso de ubicación y espera la redirección a B2C-99, pero la fila no declara la ubicación del dispositivo (-33.4012534/-70.5233046, como D-006). Acción: declarar las coordenadas en Test data.

---

### TC-B2C26-D-008 - Si se conceden los permisos pero el sistema no logra obtener las coordenadas, se muestra un toast de error permitiendo reintentar o usar otro metodo

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- Viewport: Desktop 1440x900

**Data utilizada**

{BASE_URL}

**Pasos ejecutados**

1. Simular una falla al obtener las coordenadas tras conceder el permiso.
2. Verificar el toast de error.
3. Reintentar y luego probar con otro metodo de ingreso.

**Resultado esperado**

Se muestra el toast de error especificado, permitiendo reintentar o usar otro metodo de ingreso.

**Resultado obtenido**

Coincide con el resultado esperado.

**Observación**

Ubicación no disponible simulada (permiso concedido y getCurrentPosition con error 2): toast 'No pudimos obtener tu ubicación actual. Inténtalo nuevamente.' en cada intento; luego Camino La Fuente 1589 Las Condes da sugerencias de Google.

**Evidencia**

![Paso 2 — toast de error](<B2C-26 Evidencias/TC-B2C26-D-008-p02-toast-de-error.png>)

![Paso 3 — reintento](<B2C-26 Evidencias/TC-B2C26-D-008-p03-reintento.png>)

![Paso 4 — sugerencias de google](<B2C-26 Evidencias/TC-B2C26-D-008-p04-sugerencias-de-google.png>)

![Estado final](<B2C-26 Evidencias/TC-B2C26-D-008.png>)

---

### TC-B2C26-D-009 - El formulario de direccion manual muestra Region, Comuna, Direccion y Numeracion, con el boton Continuar deshabilitado hasta completar los campos obligatorios y catalogos correctos en los dropdown

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-15 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- Viewport: Desktop 1440x900

**Data utilizada**

{BASE_URL}

**Pasos ejecutados**

1. Abrir el formulario y verificar los 4 campos con sus placeholders.
2. Completar lo obligatorio y verificar que se habilite el boton.
3. Desplegar Region y Comuna y verificar sus listados.

**Resultado esperado**

El formulario muestra los campos correctos, el boton se habilita solo al completar lo obligatorio, y los dropdown muestran los catalogos esperados.

**Resultado obtenido**

la Región Metropolitana incluye Machalí (Región de O'Higgins). Campos, placeholders y habilitación del botón OK.

**Observación**

Esperado: Comuna lista solo las comunas de la región elegida. Obtenido: la Región Metropolitana incluye Machalí (Región de O'Higgins). Campos, placeholders y habilitación del botón OK. (tests/B2C-26.spec.ts:382). Mismo comportamiento que el bug B2C-1164 (DESCARTADO en Jira): se marca Rechazado citándolo, sin abrir un bug nuevo. (B2C-1164 se reportó en APP; en web se repite.)

**Evidencia**

![Paso 1 — formulario direccion manual](<B2C-26 Evidencias/TC-B2C26-D-009-p01-formulario-direccion-manual.png>)

---

### TC-B2C26-D-010 - Al presionar Continuar con detalle de la direccion en el formulario manual, se muestra un loader y se redirige a B2C-99 con la direccion precargada y el PIN geocodificado automaticamente

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- Viewport: Desktop 1440x900

**Data utilizada**

{BASE_URL}, {DIRECCION_DESPACHO}

**Pasos ejecutados**

1. Completar el formulario manual con los campos obligatorios.
2. Presionar 'Continuar con detalles de la direccion'.
3. Verificar el loader, la redireccion a B2C-99 y la precarga con el PIN geocodificado.

**Resultado esperado**

Se muestra el loader, se redirige a B2C-99 con la direccion precargada y el PIN correctamente geocodificado.

**Resultado obtenido**

Coincide con el resultado esperado.

**Observación**

Formulario con Metropolitana / Las Condes / 'Camino La Fuente' / 1589 (de Camino La Fuente 1589 Las Condes). El botón dice 'Continuar con detalles de la dirección'.

**Evidencia**

![Paso 1 — formulario completo metropolitana las condes](<B2C-26 Evidencias/TC-B2C26-D-010-p01-formulario-completo-metropolitana-las-condes.png>)

![Estado final](<B2C-26 Evidencias/TC-B2C26-D-010.png>)

---

### TC-B2C26-D-011 - Al elegir una direccion guardada distinta a la activa, el sistema valida cobertura, SLAs y carrito en segundo plano y deriva al flujo correspondiente: exito sin PIN/OTP, sin cobertura, sin horarios, con carrito, o error

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-15 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- Viewport: Desktop 1440x900

**Data utilizada**

{BASE_URL}, {COMPRADOR_PASSWORD}, {COMPRADOR_USER}

**Pasos ejecutados**

1. Seleccionar con cobertura, SLA y sin carrito, verificando el cierre directo sin PIN/OTP.
2. Repetir sin cobertura (B2C-123), sin SLAs (B2C-127), y con carrito (B2C-122).
3. Simular error de API y verificar el toast y que la direccion anterior se mantenga.

**Resultado esperado**

Cada escenario deriva al flujo correcto; el error de API mantiene la direccion anterior con su toast.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: el TC recorre 5 escenarios y la fila solo declara vhchirinos+comprador@avatar-global.com: falta una dirección guardada con cobertura y sin SLA (B2C-127) y un SKU para el escenario 'con carrito' (B2C-122). Acción: declarar esa dirección (guardada en la cuenta) y el SKU. Nota: los escenarios sueltos corren en M-021 (pide OTP, B2C-1156), M-022 y M-023.

---

### TC-B2C26-D-012 - El menu de opciones solo aparece en direcciones guardadas no activas; al confirmar Eliminar se muestra un loader y un toast de exito o de error segun el resultado

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-15 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- Viewport: Desktop 1440x900

**Data utilizada**

{BASE_URL}, {COMPRADOR_PASSWORD}, {COMPRADOR_USER}

**Pasos ejecutados**

1. Verificar que el menu no aparezca en la direccion activa.
2. Eliminar con 'No gracias' y verificar que no haya cambios.
3. Repetir con 'Aceptar' en un caso exitoso y uno con error, verificando cada toast.

**Resultado esperado**

El menu se muestra solo en direcciones no activas; exito y error muestran el loader y el toast correspondiente.

**Resultado obtenido**

(1) la activa ('Casa') también muestra el menú ⋮

**Observación**

Esperado: el menú ⋮ solo en las no activas y, al eliminar con éxito, la dirección se quita de la lista. Obtenido: (1) la activa ('Casa') también muestra el menú ⋮ (tests/B2C-26.spec.ts:430) — mismo comportamiento que B2C-1157 (DESCARTADO), sin bug nuevo; (2) tras 'Aceptar' aparece el toast 'Tu dirección fue eliminada con éxito.' pero la dirección sigue en la lista del modal abierto (la lista no se actualiza; al reabrir el modal ya no está: el DELETE sí se aplicó). Reproducido 4/4 en Desktop y Mobile. (tests/B2C-26.spec.ts:456). Bug B2C-1216. 'No gracias' y el toast de error al eliminar: OK. Se eliminaron guardadas duplicadas (quedan copias iguales).

**Evidencia**

![Paso 1 — direcciones guardadas](<B2C-26 Evidencias/TC-B2C26-D-012-p01-direcciones-guardadas.png>)

![Paso 2 — quieres eliminar tu direccion](<B2C-26 Evidencias/TC-B2C26-D-012-p02-quieres-eliminar-tu-direccion.png>)

![Paso 3 — toast de error al eliminar](<B2C-26 Evidencias/TC-B2C26-D-012-p03-toast-de-error-al-eliminar.png>)

![Paso 4 — tras eliminar la direccion sigue en la lista](<B2C-26 Evidencias/TC-B2C26-D-012-p04-tras-eliminar-la-direccion-sigue-en-la-lista.png>)

---

### TC-B2C26-D-013 - En el header, el logueado ve automaticamente la direccion de su ultima compra si no tiene direccion activa en sesion, o la ultima seteada en la sesion si no tiene historial

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-15 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- Viewport: Desktop 1440x900

**Data utilizada**

{BASE_URL}, {COMPRADOR_MEMBRESIA_PASSWORD}, {COMPRADOR_MEMBRESIA_USER}, {COMPRADOR_PASSWORD}, {COMPRADOR_USER}

**Pasos ejecutados**

1. Loguearse con historial sin direccion activa y verificar el formato mostrado.
2. Loguearse sin historial con direccion seteada en sesion y verificar que el clic abra el modal correspondiente.

**Resultado esperado**

En ambos casos el Store Locator muestra la direccion correcta segun la regla de precedencia, con el formato esperado.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: el paso 2 ('sin historial con dirección seteada en sesión') necesita setear una dirección con vhchirinos+noaddress@avatar-global.com y la fila no declara cuál. Acción: declarar la dirección (p. ej. Camino La Fuente 1589 Las Condes). El paso 1 equivale a M-030 (Aprobado).

---

### TC-B2C26-D-014 - El invitado con direccion seteada en la sesion la ve en el header con icono, calle, numeracion y comuna, sin guardarla en ningun perfil, y al iniciar sesion se dispara el flujo de asociacion

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-15 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- Viewport: Desktop 1440x900

**Data utilizada**

{BASE_URL}, {COMPRADOR_PASSWORD}, {COMPRADOR_USER}, {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. Configurar una direccion como invitado y verificar el formato en el Store Locator.
2. Cerrar el navegador y verificar que la direccion no persista.
3. Iniciar sesion con la direccion de invitado activa y verificar que se dispare el flujo correspondiente.

**Resultado esperado**

La direccion de invitado se muestra con el formato definido, no persiste tras cerrar el navegador, y dispara el flujo de asociacion al loguearse.

**Resultado obtenido**

'Calle Uno 23' sin la comuna (La Florida). La dirección no persiste en una ventana nueva y al iniciar sesión con vhchirinos+comprador@avatar-global.com aparece el OTP 'Autenticación requerida' (asociación B2C-124/125): OK.

**Observación**

Esperado: Store Locator con ícono, calle, numeración y comuna. Obtenido: 'Calle Uno 23' sin la comuna (La Florida). La dirección no persiste en una ventana nueva y al iniciar sesión con vhchirinos+comprador@avatar-global.com aparece el OTP 'Autenticación requerida' (asociación B2C-124/125): OK. (tests/B2C-26.spec.ts:461). Mismo comportamiento que el bug B2C-1159 (DESCARTADO en Jira): se marca Rechazado citándolo, sin abrir un bug nuevo.

**Evidencia**

![Paso 1 — header calle uno 23 desde jue 15 10 18 00 hrs 2 990](<B2C-26 Evidencias/TC-B2C26-D-014-p01-header-calle-uno-23-desde-jue-15-10-18-00-hrs-2-990.png>)

![Paso 2 — ventana nueva sin direccion](<B2C-26 Evidencias/TC-B2C26-D-014-p02-ventana-nueva-sin-direccion.png>)

![Estado final](<B2C-26 Evidencias/TC-B2C26-D-014.png>)

---

### TC-B2C26-D-015 - La direccion activa se mantiene visible y consistente en el header al navegar entre paginas, sin pedir reconfiguracion, respetando las reglas de persistencia para usuario invitado

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-15 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- Viewport: Desktop 1440x900

**Data utilizada**

{BASE_URL}, {DIRECCION_DESPACHO}

**Pasos ejecutados**

1. Navegar entre Home, PLP, PDP, busqueda y carrito verificando que la direccion se mantenga visible sin pedir reconfiguracion.
2. Como invitado, cerrar el navegador y verificar que la direccion se pierda.

**Resultado esperado**

La direccion se mantiene consistente durante la navegacion, y se pierde al cerrar el navegador para usuario invitado

**Resultado obtenido**

Home, PLP, PDP y SRP OK; el Carro usa el header simplificado (B2C-25) sin Store Locator. Al cerrar el navegador la dirección se pierde (OK).

**Observación**

Esperado: la misma dirección en Home, PLP, PDP, SRP y Carro. Obtenido: Home, PLP, PDP y SRP OK; el Carro usa el header simplificado (B2C-25) sin Store Locator. Al cerrar el navegador la dirección se pierde (OK). (tests/B2C-26.spec.ts:486). Mismo comportamiento que el bug B2C-846 (DESCARTADO en Jira): se marca Rechazado citándolo, sin abrir un bug nuevo.

**Evidencia**

![Paso 2 — store locator en home](<B2C-26 Evidencias/TC-B2C26-D-015-p02-store-locator-en-home.png>)

![Paso 3 — store locator en plp](<B2C-26 Evidencias/TC-B2C26-D-015-p03-store-locator-en-plp.png>)

![Paso 4 — store locator en pdp](<B2C-26 Evidencias/TC-B2C26-D-015-p04-store-locator-en-pdp.png>)

![Paso 5 — store locator en srp](<B2C-26 Evidencias/TC-B2C26-D-015-p05-store-locator-en-srp.png>)

![Paso 6 — store locator en carro](<B2C-26 Evidencias/TC-B2C26-D-015-p06-store-locator-en-carro.png>)

![Paso 7 — ventana nueva sin direccion](<B2C-26 Evidencias/TC-B2C26-D-015-p07-ventana-nueva-sin-direccion.png>)

![Estado final](<B2C-26 Evidencias/TC-B2C26-D-015.png>)

---

### TC-B2C26-M-001 - Verificar que con 3 o más caracteres se sugieren direcciones de Google y una completa lleva al PIN [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sin método de entrega seleccionado (ventana de incógnito)

**Data utilizada**

{BASE_URL}, {DIRECCION_DESPACHO}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" seleccionada.
5. El usuario escribe 3 o más caracteres de una calle en "Calle, dirección o lugar".
6. El sistema muestra sugerencias de Google en tiempo real, sin presionar Enter.
7. El usuario toca una sugerencia con dirección completa (calle y número).
8. El sistema redirige a la confirmación de dirección con PIN en el mapa (B2C-99).

**Resultado esperado**

Se muestran sugerencias en tiempo real y, al tocar una dirección completa, se redirige a la confirmación con PIN (B2C-99).

**Resultado obtenido**

Coincide con el resultado esperado.

**Observación**

Dirección Camino La Fuente 1589 Las Condes.

**Evidencia**

![Paso 4 — modal con despacho a domicilio](<B2C-26 Evidencias/TC-B2C26-M-001-p04-modal-con-despacho-a-domicilio.png>)

![Paso 6 — sugerencias de google](<B2C-26 Evidencias/TC-B2C26-M-001-p06-sugerencias-de-google.png>)

![Paso 8 — confirmacion con pin b2c 99](<B2C-26 Evidencias/TC-B2C26-M-001-p08-confirmacion-con-pin-b2c-99.png>)

![Estado final](<B2C-26 Evidencias/TC-B2C26-M-001.png>)

---

### TC-B2C26-M-002 - Verificar que con menos de 3 caracteres no se muestran sugerencias y se ofrece agregar manualmente [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sin método de entrega seleccionado (ventana de incógnito)
- DevTools abierto en la pestaña Network

**Data utilizada**

{BASE_URL}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" seleccionada.
5. El usuario escribe 2 caracteres en "Calle, dirección o lugar".
6. El sistema no muestra sugerencias y muestra "¿No aparece tu dirección?" + opción "Agregar".

**Resultado esperado**

No se muestran sugerencias ni se ejecutan requests a Google (verificable en DevTools > Network) y se muestra "¿No aparece tu dirección?" + opción "Agregar".

**Resultado obtenido**

Coincide con el resultado esperado.

**Observación**

2 caracteres 'Ca': sin consultas a AutocompletionService de Google.

**Evidencia**

![Estado final](<B2C-26 Evidencias/TC-B2C26-M-002.png>)

---

### TC-B2C26-M-003 - Verificar que una búsqueda sin resultados ofrece "Agregar" y abre el formulario manual vacío [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sin método de entrega seleccionado (ventana de incógnito)

**Data utilizada**

{BASE_URL}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" seleccionada.
5. El usuario escribe un texto sin coincidencias (ej. "zzqxw 99999") en "Calle, dirección o lugar".
6. El sistema no muestra sugerencias de Google y muestra "¿No aparece tu dirección?" + opción "Agregar" al final de la lista.
7. El usuario toca "Agregar".
8. El sistema muestra el formulario "Dirección manual" con Región* ("Elegir región"), Comuna* ("Elegir comuna"), Dirección* ("Calle") y Numeración ("Ej. 2160"). Todos los campos están vacíos.

**Resultado esperado**

Se muestra "Agregar" y al tocarla se abre el formulario "Dirección manual" con todos los campos vacíos.

**Resultado obtenido**

Coincide con el resultado esperado.

**Observación**

Término 'zzqxw 99999' del paso (no es data del ambiente).

**Evidencia**

![Paso 6 — sin sugerencias no aparece tu direccion agregar](<B2C-26 Evidencias/TC-B2C26-M-003-p06-sin-sugerencias-no-aparece-tu-direccion-agregar.png>)

![Estado final](<B2C-26 Evidencias/TC-B2C26-M-003.png>)

---

### TC-B2C26-M-004 - Verificar que la opción "Agregar" aparece al final de la lista también cuando hay resultados [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sin método de entrega seleccionado (ventana de incógnito)

**Data utilizada**

{BASE_URL}, {DIRECCION_DESPACHO}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" seleccionada.
5. El usuario escribe 3 o más caracteres de una calle existente en "Calle, dirección o lugar".
6. El sistema muestra las sugerencias de Google y, después de la última, "¿No aparece tu dirección?" + opción "Agregar".

**Resultado esperado**

Con resultados, "¿No aparece tu dirección?" + opción "Agregar" aparece como último elemento de la lista.

**Resultado obtenido**

Coincide con el resultado esperado.

**Observación**

Dirección Camino La Fuente 1589 Las Condes.

**Evidencia**

![Paso 6 — sugerencias de google](<B2C-26 Evidencias/TC-B2C26-M-004-p06-sugerencias-de-google.png>)

![Estado final](<B2C-26 Evidencias/TC-B2C26-M-004.png>)

---

### TC-B2C26-M-005 - Verificar que un error de la API de Google ofrece agregar la dirección manualmente [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sin método de entrega seleccionado (ventana de incógnito)
- DevTools (emulación Mobile 390x844) con bloqueo de la request de Google Places (maps.googleapis.com) (Network request blocking)

**Data utilizada**

{BASE_URL}, {DIRECCION_DESPACHO}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" seleccionada.
5. El usuario escribe 3 o más caracteres de una calle en "Calle, dirección o lugar".
6. El sistema no muestra sugerencias de Google y muestra la opción "Agregar dirección manualmente".
7. El usuario toca la opción de agregar manualmente.
8. El sistema muestra el formulario "Dirección manual" con Región* ("Elegir región"), Comuna* ("Elegir comuna"), Dirección* ("Calle") y Numeración ("Ej. 2160").

**Resultado esperado**

Se muestra la opción de ingreso manual y el usuario puede continuar con el formulario "Dirección manual".

**Resultado obtenido**

Coincide con el resultado esperado.

**Observación**

Google bloqueado (maps.googleapis.com abortado). La opción se llama '¿No aparece tu dirección? Agregar' (no 'Agregar dirección manualmente' como dice el paso 6).

**Evidencia**

![Paso 6 — google caido no aparece tu direccion agregar](<B2C-26 Evidencias/TC-B2C26-M-005-p06-google-caido-no-aparece-tu-direccion-agregar.png>)

![Estado final](<B2C-26 Evidencias/TC-B2C26-M-005.png>)

---

### TC-B2C26-M-006 - Verificar que un resultado de Google sin calle usa el texto escrito como Calle y continúa al PIN [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sin método de entrega seleccionado (ventana de incógnito)

**Data utilizada**

{BASE_URL}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" seleccionada.
5. El usuario escribe el nombre de una comuna (ej. "Providencia") en "Calle, dirección o lugar".
6. El sistema muestra sugerencias de Google, entre ellas un resultado de tipo comuna.
7. El usuario toca el resultado de tipo comuna.
8. El sistema continúa a la confirmación con PIN (B2C-99) con Calle = texto escrito y Región y Comuna prellenadas desde el resultado.

**Resultado esperado**

En B2C-99 el campo Calle contiene el texto escrito por el usuario y Región y Comuna vienen prellenadas desde Google.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: el TC busca 'el nombre de una comuna' y la fila solo declara https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; 'Providencia' es un ejemplo del paso. Acción: declarar la comuna en Test data. Nota: en D-003 (comuna de Camino La Fuente 1589 Las Condes) Google no devolvió resultados de tipo comuna (B2C-844, DESCARTADO).

---

### TC-B2C26-M-007 - Verificar que el modal del invitado muestra su dirección activa marcada con el formato definido [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- En la sesión actual se configuró una dirección de despacho como invitado

**Data utilizada**

{BASE_URL}, {DIRECCION_DESPACHO}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal con "Despacho a domicilio" seleccionada y muestra en "Dirección de Despacho" la dirección activa marcada.

**Resultado esperado**

La dirección activa aparece marcada con el formato: nombre, calle, número (si aplica), complemento (si aplica), comuna y región.

**Resultado obtenido**

'Camino La Fuente 15…' (solo el nombre por defecto truncado).

**Observación**

Esperado: dirección activa con nombre, calle, número, comuna y región. Obtenido: 'Camino La Fuente 15…' (solo el nombre por defecto truncado). (tests/B2C-26.spec.ts:589). Mismo comportamiento que el bug B2C-1158 (DESCARTADO en Jira): se marca Rechazado citándolo, sin abrir un bug nuevo.

**Evidencia**

![Paso 4 — direccion activa camino la fuente 15](<B2C-26 Evidencias/TC-B2C26-M-007-p04-direccion-activa-camino-la-fuente-15.png>)

---

### TC-B2C26-M-008 - Verificar que el modal del logueado muestra skeleton y luego la dirección activa y las guardadas [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta vhchirinos+comprador@avatar-global.com tiene al menos 2 direcciones guardadas y una activa

**Data utilizada**

{BASE_URL}, {COMPRADOR_PASSWORD}, {COMPRADOR_USER}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador "Calle, dirección o lugar" y "Activar mi ubicación actual".

**Resultado esperado**

Tras el skeleton se muestra la dirección activa marcada (separada de las guardadas), cada dirección guardada con etiqueta, calle, número, complemento, comuna y región, y las opciones de búsqueda Google y "Activar mi ubicación actual".

**Resultado obtenido**

las direcciones aparecen sin skeleton (no se observó ninguno al abrir).

**Observación**

Esperado: skeleton de carga y luego la dirección activa y las guardadas. Obtenido: las direcciones aparecen sin skeleton (no se observó ninguno al abrir). (tests/B2C-26.spec.ts:604). Mismo comportamiento que el bug B2C-1160 (DESCARTADO en Jira): se marca Rechazado citándolo, sin abrir un bug nuevo.

**Evidencia**

![Paso 4 — direccion activa y guardadas](<B2C-26 Evidencias/TC-B2C26-M-008-p04-direccion-activa-y-guardadas.png>)

---

### TC-B2C26-M-009 - Verificar que un error al cargar los métodos de entrega muestra la pantalla de error con código [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta vhchirinos+comprador@avatar-global.com tiene una dirección activa
- DevTools (emulación Mobile 390x844) con bloqueo de la request de carga de direcciones guardadas (Network request blocking)

**Data utilizada**

{BASE_URL}, {COMPRADOR_PASSWORD}, {COMPRADOR_USER}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home con el Store Locator en el header.
3. El usuario anota la dirección activa del header.
4. El usuario toca el Store Locator del header.
5. El sistema reemplaza el modal por la pantalla de error "Ups, algo salió mal" con el mensaje "No logramos cargar la información de los métodos de entrega. Intenta otra vez.", un código de error y los botones "Reintentar" y "Volver al inicio".

**Resultado esperado**

Se muestra la pantalla de error completa con código de referencia y los 2 botones, y la dirección activa anotada no cambia.

**Resultado obtenido**

Coincide con el resultado esperado.

**Observación**

Logueado con vhchirinos+comprador@avatar-global.com (vhchirinos+comprador@avatar-global.com) por correo + OTP leído del Gmail conectado; dirección activa 'Casa' (Calle Uno 23, La Florida). Error simulado con 500 en la carga del cliente.

**Evidencia**

![Paso 3 — direccion activa calle uno 23 la florida](<B2C-26 Evidencias/TC-B2C26-M-009-p03-direccion-activa-calle-uno-23-la-florida.png>)

![Paso 5 — pantalla de error](<B2C-26 Evidencias/TC-B2C26-M-009-p05-pantalla-de-error.png>)

![Estado final](<B2C-26 Evidencias/TC-B2C26-M-009.png>)

---

### TC-B2C26-M-010 - Verificar que "Reintentar" vuelve a cargar los métodos de entrega [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta vhchirinos+comprador@avatar-global.com tiene direcciones guardadas
- DevTools (emulación Mobile 390x844) con bloqueo de la request de carga de direcciones guardadas (Network request blocking)

**Data utilizada**

{BASE_URL}, {COMPRADOR_PASSWORD}, {COMPRADOR_USER}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema muestra la pantalla de error "Ups, algo salió mal".
5. El usuario desactiva en DevTools el bloqueo de la request de carga de direcciones guardadas y toca "Reintentar".
6. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador "Calle, dirección o lugar" y "Activar mi ubicación actual".

**Resultado esperado**

El modal "Elige tu método de entrega" se carga con la dirección activa y las direcciones guardadas.

**Resultado obtenido**

tras restablecer la carga, el drawer sigue en 'Ups, algo salió mal' después de un toque.

**Observación**

Esperado: un toque en 'Reintentar' vuelve a cargar los métodos de entrega. Obtenido: tras restablecer la carga, el drawer sigue en 'Ups, algo salió mal' después de un toque. (tests/B2C-26.spec.ts:645). Mismo comportamiento que el bug B2C-845 (DESCARTADO en Jira): se marca Rechazado citándolo, sin abrir un bug nuevo.

**Evidencia**

![Paso 4 — pantalla de error](<B2C-26 Evidencias/TC-B2C26-M-010-p04-pantalla-de-error.png>)

---

### TC-B2C26-M-011 - Verificar que "Volver al inicio" cierra la pantalla de error y regresa al Home [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta vhchirinos+comprador@avatar-global.com tiene direcciones guardadas
- DevTools (emulación Mobile 390x844) con bloqueo de la request de carga de direcciones guardadas (Network request blocking)

**Data utilizada**

{BASE_URL}, {COMPRADOR_PASSWORD}, {COMPRADOR_USER}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El usuario navega a una PLP.
3. El sistema carga la PLP.
4. El usuario toca el Store Locator del header.
5. El sistema muestra la pantalla de error "Ups, algo salió mal".
6. El usuario toca "Volver al inicio".
7. El sistema cierra el modal y redirige al Home (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/).

**Resultado esperado**

El modal se cierra y el usuario queda en el Home.

**Resultado obtenido**

Ver capturas.

**Observación**

Causa: con la carga de direcciones bloqueada (500 en shopper-customers/customers/{id}, 70 s para que los datos queden viejos), al abrir el Store Locator desde una PLP el drawer muestra las direcciones que ya tenía y no la pantalla 'Ups, algo salió mal' (desde el Home sí aparece: M-009 Aprobado). No se llega al paso 6. Acción: indicar qué request bloquear desde la PLP o ejecutar manualmente.

**Evidencia**

![Paso 3 — plp](<B2C-26 Evidencias/TC-B2C26-M-011-p03-plp.png>)

---

### TC-B2C26-M-012 - Verificar que "Activar mi ubicación actual" con permiso concedido muestra loader y lleva al PIN [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El navegador del dispositivo tiene concedido el permiso de ubicación para https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

**Data utilizada**

{BASE_URL}, {LATITUD_DESPACHO}, {LONGITUD_DESPACHO}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" seleccionada.
5. El usuario toca "Activar mi ubicación actual".
6. El sistema muestra un loader mientras obtiene las coordenadas GPS.
7. El sistema redirige a la confirmación de dirección con PIN en el mapa (B2C-99).

**Resultado esperado**

Se muestra el loader y se redirige a B2C-99 con el PIN en la ubicación actual del dispositivo.

**Resultado obtenido**

Coincide con el resultado esperado.

**Observación**

Ubicación concedida en -33.4012534, -70.5233046.

**Evidencia**

![Estado final](<B2C-26 Evidencias/TC-B2C26-M-012.png>)

---

### TC-B2C26-M-013 - Verificar que sin permiso de ubicación se muestra el modal para activar permisos en el navegador [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El permiso de ubicación del navegador para https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ está en "Preguntar" o sin conceder

**Data utilizada**

{BASE_URL}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" seleccionada.
5. El usuario toca "Activar mi ubicación actual".
6. El sistema muestra el modal que indica activar los permisos de ubicación en la configuración del navegador.
7. El usuario cierra el modal de permisos.
8. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" seleccionada.

**Resultado esperado**

Se muestra el modal para activar permisos y, al cerrarlo, el usuario vuelve a "Elige tu método de entrega".

**Resultado obtenido**

Coincide con el resultado esperado.

**Observación**

Sin permiso de ubicación: modal 'Unimarc no tiene acceso a tu localización'; al cerrarlo vuelve a 'Elige tu método de entrega'.

**Evidencia**

![Paso 6 — modal de permisos](<B2C-26 Evidencias/TC-B2C26-M-013-p06-modal-de-permisos.png>)

![Estado final](<B2C-26 Evidencias/TC-B2C26-M-013.png>)

---

### TC-B2C26-M-014 - Verificar que denegar el permiso de ubicación vuelve al modal de entrega sin cambios [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El permiso de ubicación del navegador para https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ está en "Preguntar"

**Data utilizada**

{BASE_URL}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" seleccionada.
5. El usuario toca "Activar mi ubicación actual".
6. El sistema muestra el modal para activar permisos y el navegador solicita el permiso de ubicación.
7. El usuario deniega el permiso de ubicación.
8. El sistema cierra el modal de permisos y vuelve a "Elige tu método de entrega".

**Resultado esperado**

El usuario vuelve a "Elige tu método de entrega" sin dirección seteada y sin cambios.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: el TC deniega el permiso en el prompt nativo del navegador ('Preguntar'); Playwright no muestra ese prompt (concede o niega de antemano), así que el paso 7 no es reproducible en la automatización. Sin permiso, el sitio abre 'Unimarc no tiene acceso a tu localización' (ver M-013, Aprobado). Acción: ejecutar manualmente en un dispositivo.

---

### TC-B2C26-M-015 - Verificar que conceder el permiso de ubicación obtiene las coordenadas y lleva al PIN [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El permiso de ubicación del navegador para https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ está en "Preguntar"

**Data utilizada**

{BASE_URL}, {LATITUD_DESPACHO}, {LONGITUD_DESPACHO}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" seleccionada.
5. El usuario toca "Activar mi ubicación actual".
6. El sistema muestra el modal para activar permisos y el navegador solicita el permiso de ubicación.
7. El usuario concede el permiso de ubicación.
8. El sistema obtiene las coordenadas GPS.
9. El sistema redirige a la confirmación de dirección con PIN en el mapa (B2C-99).

**Resultado esperado**

Se redirige a B2C-99 con el PIN en la ubicación actual del dispositivo.

**Resultado obtenido**

Coincide con el resultado esperado.

**Observación**

Permiso concedido de antemano en -33.4012534, -70.5233046: Playwright no muestra el prompt nativo, así que el paso 6 (modal + prompt) no se observa; se verifica el resultado esperado (B2C-99 con el PIN en la ubicación).

**Evidencia**

![Estado final](<B2C-26 Evidencias/TC-B2C26-M-015.png>)

---

### TC-B2C26-M-016 - Verificar que una falla al obtener coordenadas muestra el toast de error y permite reintentar [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El navegador tiene concedido el permiso de ubicación
- DevTools > Sensors con Location = "Location unavailable" (emulación Mobile 390x844)

**Data utilizada**

{BASE_URL}, {DIRECCION_DESPACHO}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" seleccionada.
5. El usuario toca "Activar mi ubicación actual".
6. El sistema muestra el toast "No pudimos obtener tu ubicación actual. Inténtalo nuevamente." y mantiene el modal abierto.
7. El usuario escribe 3 o más caracteres en "Calle, dirección o lugar".
8. El sistema muestra sugerencias de Google.

**Resultado esperado**

Se muestra el toast de error y el usuario puede seguir con otro método (búsqueda de Google) o volver a tocar "Activar mi ubicación actual".

**Resultado obtenido**

Coincide con el resultado esperado.

**Observación**

Ubicación no disponible simulada; después Camino La Fuente 1589 Las Condes da sugerencias de Google.

**Evidencia**

![Paso 6 — toast de error](<B2C-26 Evidencias/TC-B2C26-M-016-p06-toast-de-error.png>)

![Paso 8 — sugerencias de google](<B2C-26 Evidencias/TC-B2C26-M-016-p08-sugerencias-de-google.png>)

![Estado final](<B2C-26 Evidencias/TC-B2C26-M-016.png>)

---

### TC-B2C26-M-017 - Verificar que el formulario manual muestra sus campos con el botón Continuar deshabilitado [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sin método de entrega seleccionado (ventana de incógnito)

**Data utilizada**

{BASE_URL}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" seleccionada.
5. El usuario escribe 2 caracteres en el buscador y toca "Agregar".
6. El sistema muestra el formulario "Dirección manual" con Región* ("Elegir región"), Comuna* ("Elegir comuna"), Dirección* ("Calle") y Numeración ("Ej. 2160").

**Resultado esperado**

Se muestran los 4 campos con sus placeholders y el botón "Continuar con detalle de la dirección" está deshabilitado.

**Resultado obtenido**

Coincide con el resultado esperado.

**Evidencia**

![Estado final](<B2C-26 Evidencias/TC-B2C26-M-017.png>)

---

### TC-B2C26-M-018 - Verificar que completar los campos obligatorios habilita "Continuar con detalle de la dirección" [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sin método de entrega seleccionado (ventana de incógnito)

**Data utilizada**

{BASE_URL}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" seleccionada.
5. El usuario escribe 2 caracteres en el buscador y toca "Agregar".
6. El sistema muestra el formulario "Dirección manual" con Región* ("Elegir región"), Comuna* ("Elegir comuna"), Dirección* ("Calle") y Numeración ("Ej. 2160").
7. El usuario elige una Región y una Comuna.
8. El sistema mantiene deshabilitado el botón.
9. El usuario escribe una calle en Dirección.
10. El sistema habilita "Continuar con detalle de la dirección".

**Resultado esperado**

El botón permanece deshabilitado mientras falta Dirección y se habilita al completar Región, Comuna y Dirección.

**Resultado obtenido**

Coincide con el resultado esperado.

**Observación**

Metropolitana y la primera comuna; Dirección 'Calle de prueba' (la fila no declara calle).

**Evidencia**

![Paso 8 — region y comuna elegidas](<B2C-26 Evidencias/TC-B2C26-M-018-p08-region-y-comuna-elegidas.png>)

![Estado final](<B2C-26 Evidencias/TC-B2C26-M-018.png>)

---

### TC-B2C26-M-019 - Verificar que los dropdown de Región y Comuna muestran los catálogos de Chile [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sin método de entrega seleccionado (ventana de incógnito)

**Data utilizada**

{BASE_URL}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" seleccionada.
5. El usuario escribe 2 caracteres en el buscador y toca "Agregar".
6. El sistema muestra el formulario "Dirección manual" con Región* ("Elegir región"), Comuna* ("Elegir comuna"), Dirección* ("Calle") y Numeración ("Ej. 2160").
7. El usuario despliega Región.
8. El sistema lista las regiones de Chile.
9. El usuario elige "Región Metropolitana" y despliega Comuna.
10. El sistema lista solo las comunas de la Región Metropolitana.

**Resultado esperado**

Región muestra las regiones de Chile y Comuna solo las comunas de la región elegida (no es texto libre).

**Resultado obtenido**

la lista incluye Machalí (Región de O'Higgins). Regiones: 16.

**Observación**

Esperado: Comuna lista solo las comunas de la Región Metropolitana. Obtenido: la lista incluye Machalí (Región de O'Higgins). Regiones: 16. (tests/B2C-26.spec.ts:733). Mismo comportamiento que el bug B2C-1164 (DESCARTADO en Jira): se marca Rechazado citándolo, sin abrir un bug nuevo. (B2C-1164 se reportó en APP; en web se repite.)

**Evidencia**

![Paso 10 — 39 comunas de la rm](<B2C-26 Evidencias/TC-B2C26-M-019-p10-39-comunas-de-la-rm.png>)

---

### TC-B2C26-M-020 - Verificar que continuar desde el formulario manual lleva al PIN con la dirección precargada [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sin método de entrega seleccionado (ventana de incógnito)

**Data utilizada**

{BASE_URL}, {DIRECCION_DESPACHO}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" seleccionada.
5. El usuario escribe 2 caracteres en el buscador y toca "Agregar".
6. El sistema muestra el formulario "Dirección manual" con Región* ("Elegir región"), Comuna* ("Elegir comuna"), Dirección* ("Calle") y Numeración ("Ej. 2160").
7. El usuario completa Región, Comuna, Dirección y Numeración y toca "Continuar con detalle de la dirección".
8. El sistema muestra un loader y redirige a la confirmación con PIN (B2C-99).

**Resultado esperado**

En B2C-99 se muestran precargadas Región, Comuna, Calle y Numeración y el PIN queda ubicado sobre esa dirección.

**Resultado obtenido**

Coincide con el resultado esperado.

**Observación**

Formulario con Metropolitana / Las Condes / 'Camino La Fuente' / 1589 (de Camino La Fuente 1589 Las Condes).

**Evidencia**

![Paso 7 — formulario completo metropolitana](<B2C-26 Evidencias/TC-B2C26-M-020-p07-formulario-completo-metropolitana.png>)

![Estado final](<B2C-26 Evidencias/TC-B2C26-M-020.png>)

---

### TC-B2C26-M-021 - Verificar que elegir una dirección guardada la setea sin PIN ni OTP y mantiene la página [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: PLP
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta vhchirinos+comprador@avatar-global.com tiene al menos 2 direcciones guardadas con cobertura y horarios
- El carro está vacío

**Data utilizada**

{BASE_URL}, {COMPRADOR_PASSWORD}, {COMPRADOR_USER}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El usuario navega a una PLP.
3. El sistema carga la PLP.
4. El usuario toca el Store Locator del header.
5. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador "Calle, dirección o lugar" y "Activar mi ubicación actual".
6. El usuario toca una dirección guardada distinta de la activa.
7. El sistema muestra un loader, valida cobertura y SLAs y cierra el modal.

**Resultado esperado**

El header muestra la nueva dirección, el usuario sigue en la PLP y no se pidió PIN ni OTP.

**Resultado obtenido**

se pide el OTP 'Autenticación requerida'; tras ingresarlo el header muestra 'Camino La Fuente 15…' y se sigue en la PLP.

**Observación**

Esperado: la dirección guardada se setea sin PIN ni OTP. Obtenido: se pide el OTP 'Autenticación requerida'; tras ingresarlo el header muestra 'Camino La Fuente 15…' y se sigue en la PLP. (tests/B2C-26.spec.ts:767). Mismo comportamiento que el bug B2C-1156 (DESCARTADO en Jira): se marca Rechazado citándolo, sin abrir un bug nuevo. El carro se vació para cumplir la precondición y luego se volvió a dejar activa "Casa".

**Evidencia**

![Paso 5 — direcciones guardadas](<B2C-26 Evidencias/TC-B2C26-M-021-p05-direcciones-guardadas.png>)

![Paso 7 — se pidio otp autenticacion requerida](<B2C-26 Evidencias/TC-B2C26-M-021-p07-se-pidio-otp-autenticacion-requerida.png>)

![Estado final](<B2C-26 Evidencias/TC-B2C26-M-021.png>)

---

### TC-B2C26-M-022 - Verificar que un error de API al cambiar de dirección muestra toast y mantiene la dirección anterior [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta vhchirinos+comprador@avatar-global.com tiene al menos 2 direcciones guardadas
- Después de abrir el modal, DevTools (emulación Mobile 390x844) con bloqueo de la request de cambio de dirección activa (Network request blocking)

**Data utilizada**

{BASE_URL}, {COMPRADOR_PASSWORD}, {COMPRADOR_USER}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home con el Store Locator en el header.
3. El usuario anota la dirección activa del header.
4. El usuario toca el Store Locator del header.
5. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador "Calle, dirección o lugar" y "Activar mi ubicación actual".
6. El usuario toca una dirección guardada distinta de la activa.
7. El sistema muestra el modal con la lista de direcciones y el toast "Lo sentimos, no pudimos cambiar tu dirección. Inténtalo nuevamente."

**Resultado esperado**

Se muestra el toast de error, el modal vuelve a la lista y la dirección activa sigue siendo la anotada.

**Resultado obtenido**

el cambio hace dos POST smu-delivery/apply (el 1º pide el OTP 'Autenticación requerida', B2C-1156; el 2º aplica con el código). Con el 2º respondiendo 500 (error simulado), el modal se cierra sin toast y el header muestra la dirección elegida ('Camino La Fuente 15…') aunque no se aplicó: al recargar vuelve 'Calle Uno 23, La Florida'

**Observación**

Esperado: toast 'Lo sentimos, no pudimos cambiar tu dirección. Inténtalo nuevamente.', el modal vuelve a la lista y la dirección activa no cambia. Obtenido: el cambio hace dos POST smu-delivery/apply (el 1º pide el OTP 'Autenticación requerida', B2C-1156; el 2º aplica con el código). Con el 2º respondiendo 500 (error simulado), el modal se cierra sin toast y el header muestra la dirección elegida ('Camino La Fuente 15…') aunque no se aplicó: al recargar vuelve 'Calle Uno 23, La Florida' (tests/B2C-26.spec.ts:817). Bug B2C-1217.

**Evidencia**

![Paso 7 — tras el otp](<B2C-26 Evidencias/TC-B2C26-M-022-p07-tras-el-otp.png>)

---

### TC-B2C26-M-023 - Verificar que elegir una dirección guardada sin cobertura deriva al flujo Sin cobertura [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta vhchirinos+comprador@avatar-global.com tiene una dirección guardada fuera de la zona de reparto actual

**Data utilizada**

{BASE_URL}, {COMPRADOR_PASSWORD}, {COMPRADOR_USER}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador "Calle, dirección o lugar" y "Activar mi ubicación actual".
5. El usuario toca la dirección guardada sin cobertura.
6. El sistema muestra un loader y deriva al flujo Sin cobertura (B2C-123).

**Resultado esperado**

Se inicia el flujo Sin cobertura definido en B2C-123.

**Resultado obtenido**

Coincide con el resultado esperado.

**Observación**

Logueado con vhchirinos+comprador@avatar-global.com (vhchirinos+comprador@avatar-global.com) por correo + OTP leído del Gmail conectado; dirección activa 'Casa' (Calle Uno 23, La Florida). Se eligió la guardada 'T-551' (T-551, Futrono): 'Aún no llegamos a esta dirección' (B2C-123); luego 'Cambiar método de entrega'.

**Evidencia**

![Paso 4 — direcciones guardadas](<B2C-26 Evidencias/TC-B2C26-M-023-p04-direcciones-guardadas.png>)

![Estado final](<B2C-26 Evidencias/TC-B2C26-M-023.png>)

---

### TC-B2C26-M-024 - Verificar que una dirección guardada sin horarios y sin carrito deriva a Sin horarios disponibles [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta vhchirinos+comprador@avatar-global.com tiene una dirección guardada con cobertura y sin ventanas horarias
- El carro está vacío

**Data utilizada**

{BASE_URL}, {COMPRADOR_PASSWORD}, {COMPRADOR_USER}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador "Calle, dirección o lugar" y "Activar mi ubicación actual".
5. El usuario toca la dirección guardada sin horarios disponibles.
6. El sistema muestra un loader y deriva al flujo Sin horarios disponibles (B2C-127).

**Resultado esperado**

Se inicia el flujo Sin horarios disponibles definido en B2C-127.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: vhchirinos+comprador@avatar-global.com no tiene una dirección guardada con cobertura y sin ventanas horarias (sus 15 guardadas son Calle Uno 23, Av. Las Condes 14791, Camino La Fuente, Libertador B. O'Higgins 1072, Mechique y T-551), y la fila no declara cuál usar. Av Libertador Gral Bernardo O'Higgins 1072, Maipú del Excel de data no tiene cobertura en DEV (B2C-189). Acción: declarar y guardar en la cuenta una dirección con cobertura sin SLA.

---

### TC-B2C26-M-025 - Verificar que elegir una dirección guardada con productos en el carro inicia el flujo de B2C-122 [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta vhchirinos+comprador@avatar-global.com tiene al menos 2 direcciones guardadas con cobertura
- El carro tiene al menos un producto

**Data utilizada**

{BASE_URL}, {COMPRADOR_PASSWORD}, {COMPRADOR_USER}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador "Calle, dirección o lugar" y "Activar mi ubicación actual".
5. El usuario toca una dirección guardada distinta de la activa.
6. El sistema muestra un loader y inicia el flujo de B2C-122.

**Resultado esperado**

Se inicia el flujo definido en B2C-122 (vía B2C-144).

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: la precondición pide 'el carro tiene al menos un producto' y la fila no declara SKU. Acción: declarar el SKU (p. ej. 000000000000675191-UN).

---

### TC-B2C26-M-026 - Verificar que el menú ⋮ aparece solo en las direcciones guardadas no activas [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta vhchirinos+comprador@avatar-global.com tiene al menos 2 direcciones guardadas y una activa

**Data utilizada**

{BASE_URL}, {COMPRADOR_PASSWORD}, {COMPRADOR_USER}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador "Calle, dirección o lugar" y "Activar mi ubicación actual".

**Resultado esperado**

Cada dirección guardada no activa muestra el menú ⋮ y la dirección activa no lo muestra.

**Resultado obtenido**

la activa ('Casa') también muestra el menú ⋮.

**Observación**

Esperado: la dirección activa no muestra el menú ⋮. Obtenido: la activa ('Casa') también muestra el menú ⋮. (tests/B2C-26.spec.ts:836). Mismo comportamiento que el bug B2C-1157 (DESCARTADO en Jira): se marca Rechazado citándolo, sin abrir un bug nuevo.

**Evidencia**

![Paso 4 — direcciones guardadas](<B2C-26 Evidencias/TC-B2C26-M-026-p04-direcciones-guardadas.png>)

![Estado final](<B2C-26 Evidencias/TC-B2C26-M-026.png>)

---

### TC-B2C26-M-027 - Verificar que "No gracias" en la confirmación de eliminar mantiene la dirección [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta vhchirinos+comprador@avatar-global.com tiene al menos 2 direcciones guardadas y una activa

**Data utilizada**

{BASE_URL}, {COMPRADOR_PASSWORD}, {COMPRADOR_USER}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador "Calle, dirección o lugar" y "Activar mi ubicación actual".
5. El usuario toca ⋮ en una dirección no activa y luego "Eliminar dirección".
6. El sistema muestra el modal "¿Quieres eliminar tu dirección?" con "Aceptar" y "No gracias".
7. El usuario toca "No gracias".
8. El sistema cierra el modal de confirmación.

**Resultado esperado**

El modal de confirmación se cierra y la dirección sigue en la lista.

**Resultado obtenido**

Coincide con el resultado esperado.

**Observación**

Logueado con vhchirinos+comprador@avatar-global.com (vhchirinos+comprador@avatar-global.com) por correo + OTP leído del Gmail conectado; dirección activa 'Casa' (Calle Uno 23, La Florida).

**Evidencia**

![Paso 6 — quieres eliminar tu direccion](<B2C-26 Evidencias/TC-B2C26-M-027-p06-quieres-eliminar-tu-direccion.png>)

![Estado final](<B2C-26 Evidencias/TC-B2C26-M-027.png>)

---

### TC-B2C26-M-028 - Verificar que "Aceptar" elimina la dirección y muestra el toast de éxito [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta vhchirinos+comprador@avatar-global.com tiene al menos 2 direcciones guardadas y una activa

**Data utilizada**

{BASE_URL}, {COMPRADOR_PASSWORD}, {COMPRADOR_USER}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador "Calle, dirección o lugar" y "Activar mi ubicación actual".
5. El usuario toca ⋮ en una dirección no activa y luego "Eliminar dirección".
6. El sistema muestra el modal "¿Quieres eliminar tu dirección?".
7. El usuario toca "Aceptar".
8. El sistema muestra un loader, quita la dirección de la lista, cierra el modal de confirmación y muestra el toast "Tu dirección fue eliminada con éxito.".

**Resultado esperado**

La dirección desaparece de la lista y el toast de éxito se cierra solo a los 4 segundos.

**Resultado obtenido**

tras 'Aceptar' aparece el toast 'Tu dirección fue eliminada con éxito.' pero la dirección sigue en la lista del modal abierto (la lista no se actualiza; al reabrir el modal ya no está: el DELETE sí se aplicó). Reproducido 4/4 en Desktop y Mobile.

**Observación**

Esperado: loader, la dirección se quita de la lista y toast de éxito que se cierra a los 4 s. Obtenido: tras 'Aceptar' aparece el toast 'Tu dirección fue eliminada con éxito.' pero la dirección sigue en la lista del modal abierto (la lista no se actualiza; al reabrir el modal ya no está: el DELETE sí se aplicó). Reproducido 4/4 en Desktop y Mobile. (tests/B2C-26.spec.ts:873). Bug B2C-1216. Se eliminó una guardada duplicada (quedan copias iguales).

**Evidencia**

![Paso 8 — avenida las condes 3 eliminada](<B2C-26 Evidencias/TC-B2C26-M-028-p08-avenida-las-condes-3-eliminada.png>)

![Paso 9 — la direccion sigue en la lista](<B2C-26 Evidencias/TC-B2C26-M-028-p09-la-direccion-sigue-en-la-lista.png>)

---

### TC-B2C26-M-029 - Verificar que un error al eliminar muestra el toast de error y la dirección permanece [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta vhchirinos+comprador@avatar-global.com tiene al menos 2 direcciones guardadas y una activa
- Después de abrir el modal, DevTools (emulación Mobile 390x844) con bloqueo de la request de eliminación de dirección (Network request blocking)

**Data utilizada**

{BASE_URL}, {COMPRADOR_PASSWORD}, {COMPRADOR_USER}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador "Calle, dirección o lugar" y "Activar mi ubicación actual".
5. El usuario toca ⋮ en una dirección no activa y luego "Eliminar dirección".
6. El sistema muestra el modal "¿Quieres eliminar tu dirección?".
7. El usuario toca "Aceptar".
8. El sistema muestra un loader y luego el toast "Lo sentimos, no pudimos eliminar tu dirección. Inténtalo nuevamente.".

**Resultado esperado**

Se muestra el toast de error (se cierra solo con la X) y la dirección sigue en la lista.

**Resultado obtenido**

Coincide con el resultado esperado.

**Observación**

Logueado con vhchirinos+comprador@avatar-global.com (vhchirinos+comprador@avatar-global.com) por correo + OTP leído del Gmail conectado; dirección activa 'Casa' (Calle Uno 23, La Florida). Error simulado con 500 en el DELETE de la dirección: el toast sigue visible a los 7 s.

**Evidencia**

![Paso 8 — toast de error](<B2C-26 Evidencias/TC-B2C26-M-029-p08-toast-de-error.png>)

![Estado final](<B2C-26 Evidencias/TC-B2C26-M-029.png>)

---

### TC-B2C26-M-030 - Verificar que el header del logueado sin dirección en sesión muestra la de su última compra [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- La cuenta vhchirinos+comprador@avatar-global.com tiene al menos una compra completada
- Sin dirección activa en la sesión (ventana de incógnito)

**Data utilizada**

{BASE_URL}, {COMPRADOR_PASSWORD}, {COMPRADOR_USER}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home con el Store Locator en el header.
3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
4. El sistema autentica al usuario y muestra en el Store Locator del header la dirección de la última compra completada.

**Resultado esperado**

El header muestra ícono de despacho + dirección de la última compra + "Desde" + fecha + horario + label de precio o condición de despacho.

**Resultado obtenido**

Coincide con el resultado esperado.

**Observación**

Login en ventana nueva con vhchirinos+comprador@avatar-global.com por correo + OTP. Las compras de la cuenta son en Calle Uno 23, La Florida: el header muestra 'Calle Uno 23, La Florida · Desde: <día> <hora> hrs. · $2.990'.

**Evidencia**

![Paso 2 — home sin sesion](<B2C-26 Evidencias/TC-B2C26-M-030-p02-home-sin-sesion.png>)

![Paso 4 — header calle uno 23 la florida desde jue 15 10 18 00 hrs 2 9](<B2C-26 Evidencias/TC-B2C26-M-030-p04-header-calle-uno-23-la-florida-desde-jue-15-10-18-00-hrs-2-9.png>)

---

### TC-B2C26-M-031 - Verificar que el header del logueado sin historial muestra la dirección seteada en la sesión [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta vhchirinos+comprador@avatar-global.com no tiene historial de compras

**Data utilizada**

{BASE_URL}, {COMPRADOR_MEMBRESIA_PASSWORD}, {COMPRADOR_MEMBRESIA_USER}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home con el Store Locator en el header.
3. El usuario configura una dirección de despacho desde el Store Locator.
4. El sistema muestra la dirección seteada en el Store Locator del header.
5. El usuario toca el Store Locator del header.
6. El sistema abre el modal con la dirección seteada marcada como activa.

**Resultado esperado**

El header muestra la dirección seteada en la sesión y el modal la muestra como activa.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: el paso 3 'configura una dirección de despacho' y la fila no declara cuál (solo https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ y vhchirinos+noaddress@avatar-global.com). Además la precondición nombra vhchirinos+comprador@avatar-global.com, que tiene compras, y declara vhchirinos+noaddress@avatar-global.com. Acción: declarar la dirección y alinear la cuenta.

---

### TC-B2C26-M-032 - Verificar que el header del invitado muestra la dirección de la sesión con el formato definido [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sin método de entrega seleccionado (ventana de incógnito)

**Data utilizada**

{BASE_URL}, {DIRECCION_DESPACHO}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home con el Store Locator en el header.
3. El usuario configura una dirección de despacho desde el Store Locator.
4. El sistema muestra la dirección en el Store Locator del header.

**Resultado esperado**

El header muestra ícono de despacho + calle + numeración (si aplica) + comuna + ícono de edición.

**Resultado obtenido**

'Camino La Fuente 15…' (nombre truncado a 20 caracteres, sin numeración completa ni comuna).

**Observación**

Esperado: header con ícono + calle + numeración + comuna + ícono de edición. Obtenido: 'Camino La Fuente 15…' (nombre truncado a 20 caracteres, sin numeración completa ni comuna). (tests/B2C-26.spec.ts:915). Mismo comportamiento que el bug B2C-1159 (DESCARTADO en Jira): se marca Rechazado citándolo, sin abrir un bug nuevo.

**Evidencia**

![Paso 4 — header camino la fuente 15 desde jue 15 10 18 00 hrs 2 990](<B2C-26 Evidencias/TC-B2C26-M-032-p04-header-camino-la-fuente-15-desde-jue-15-10-18-00-hrs-2-990.png>)

---

### TC-B2C26-M-033 - Verificar que la dirección del invitado no persiste al cerrar el navegador [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sin método de entrega seleccionado (ventana de incógnito)

**Data utilizada**

{BASE_URL}, {DIRECCION_DESPACHO}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home con el Store Locator en el header.
3. El usuario configura una dirección de despacho desde el Store Locator.
4. El sistema muestra la dirección en el header.
5. El usuario cierra todas las ventanas de incógnito y vuelve a ingresar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ en una nueva ventana de incógnito.
6. El sistema carga el Home con "Elige una forma de entrega" en el Store Locator.

**Resultado esperado**

Tras cerrar el navegador, el header vuelve a "Elige una forma de entrega" y la dirección anterior no se muestra.

**Resultado obtenido**

Coincide con el resultado esperado.

**Observación**

Dirección Camino La Fuente 1589 Las Condes; se cerró el contexto del navegador y se abrió uno nuevo.

**Evidencia**

![Paso 4 — header camino la fuente 15](<B2C-26 Evidencias/TC-B2C26-M-033-p04-header-camino-la-fuente-15.png>)

![Estado final](<B2C-26 Evidencias/TC-B2C26-M-033.png>)

---

### TC-B2C26-M-034 - Verificar que iniciar sesión con dirección de invitado activa inicia el flujo de asociación [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sin método de entrega seleccionado (ventana de incógnito)

**Data utilizada**

{BASE_URL}, {DIRECCION_DESPACHO}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home con el Store Locator en el header.
3. El usuario configura una dirección de despacho desde el Store Locator.
4. El sistema muestra la dirección en el header.
5. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
6. El sistema autentica al usuario e inicia el flujo de asociación de dirección (B2C-124).

**Resultado esperado**

Se inicia el flujo de asociación de dirección definido en B2C-124.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: el paso 5 inicia sesión con vhchirinos+comprador@avatar-global.com pero la fila no lo declara en Test data (solo https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ y Camino La Fuente 1589 Las Condes). Acción: declarar vhchirinos+comprador@avatar-global.com. El flujo equivale a la parte 3 de D-014 (OTP 'Autenticación requerida' al iniciar sesión, visto el 2026-10-15).

---

### TC-B2C26-M-035 - Verificar que la dirección activa se mantiene en el header al navegar por el sitio [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta vhchirinos+comprador@avatar-global.com tiene una dirección activa

**Data utilizada**

{BASE_URL}, {COMPRADOR_PASSWORD}, {COMPRADOR_USER}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home con la dirección activa en el Store Locator.
3. El usuario navega a una PLP, abre una PDP, busca un producto y abre el Carro.
4. El sistema muestra la misma dirección activa en el Store Locator en cada página, sin solicitar reconfigurarla.

**Resultado esperado**

En Home, PLP, PDP, SRP y Carro el header muestra la misma dirección activa y no se pide volver a configurarla.

**Resultado obtenido**

Home, PLP, PDP y SRP OK; el Carro usa el header simplificado sin Store Locator.

**Observación**

Esperado: la misma dirección activa en Home, PLP, PDP, SRP y Carro. Obtenido: Home, PLP, PDP y SRP OK; el Carro usa el header simplificado sin Store Locator. (tests/B2C-26.spec.ts:941). Mismo comportamiento que el bug B2C-846 (DESCARTADO en Jira): se marca Rechazado citándolo, sin abrir un bug nuevo.

**Evidencia**

![Paso 2 — store locator en home](<B2C-26 Evidencias/TC-B2C26-M-035-p02-store-locator-en-home.png>)

![Paso 3 — store locator en plp](<B2C-26 Evidencias/TC-B2C26-M-035-p03-store-locator-en-plp.png>)

![Paso 4 — store locator en pdp](<B2C-26 Evidencias/TC-B2C26-M-035-p04-store-locator-en-pdp.png>)

![Paso 5 — store locator en srp](<B2C-26 Evidencias/TC-B2C26-M-035-p05-store-locator-en-srp.png>)

![Paso 6 — store locator en carro](<B2C-26 Evidencias/TC-B2C26-M-035-p06-store-locator-en-carro.png>)

![Estado final](<B2C-26 Evidencias/TC-B2C26-M-035.png>)

---

### TC-B2C26-M-036 - Verificar que al reiniciar sesión se recupera la dirección de la última compra o la última seteada [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta vhchirinos+comprador@avatar-global.com tiene una dirección activa

**Data utilizada**

{BASE_URL}, {COMPRADOR_PASSWORD}, {COMPRADOR_USER}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home con el Store Locator en el header.
3. El usuario anota la dirección activa del header.
4. El usuario cierra sesión y vuelve a iniciar sesión con la cuenta vhchirinos+comprador@avatar-global.com.
5. El sistema autentica al usuario y muestra una dirección en el Store Locator del header.

**Resultado esperado**

El header muestra la dirección de la última compra completada o, si no hay historial, la última dirección seteada.

**Resultado obtenido**

Coincide con el resultado esperado.

**Observación**

Logueado con vhchirinos+comprador@avatar-global.com (vhchirinos+comprador@avatar-global.com) por correo + OTP leído del Gmail conectado; dirección activa 'Casa' (Calle Uno 23, La Florida). Cerrar sesión desde el menú de la cuenta y volver a entrar por correo + OTP: 'Calle Uno 23, La Florida' antes y después.

**Evidencia**

![Paso 3 — direccion activa calle uno 23 la florida](<B2C-26 Evidencias/TC-B2C26-M-036-p03-direccion-activa-calle-uno-23-la-florida.png>)

![Paso 4 — sesion cerrada](<B2C-26 Evidencias/TC-B2C26-M-036-p04-sesion-cerrada.png>)

![Paso 5 — tras volver a iniciar sesion calle uno 23 la florida](<B2C-26 Evidencias/TC-B2C26-M-036-p05-tras-volver-a-iniciar-sesion-calle-uno-23-la-florida.png>)

---

### TC-B2C26-D-016 - Verificar que el formulario manual acepta los caracteres especiales +, - y / en la dirección [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- Sin método de entrega seleccionado (ventana de incógnito)

**Data utilizada**

{BASE_URL}, {DIRECCION_CARACTERES_ESPECIALES}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador de escritorio.
2. El sistema carga el Home con el Store Locator en el header.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" seleccionada.
5. El usuario escribe 2 caracteres en el buscador y hace clic en "Agregar".
6. El sistema muestra el formulario "Dirección manual" con Región* ("Elegir región"), Comuna* ("Elegir comuna"), Dirección* ("Calle") y Numeración ("Ej. 2160").
7. El usuario selecciona una Región y una Comuna con cobertura, escribe Pasaje Los Aromos 3-A / Lote 5+ en Dirección y 120 en Numeración.
8. El sistema mantiene el texto tal como se escribió, sin mensaje de error, y habilita "Continuar con detalle de la dirección".
9. El usuario hace clic en "Continuar con detalle de la dirección".
10. El sistema muestra un loader y redirige a la confirmación con PIN (B2C-99).

**Resultado esperado**

El campo Dirección acepta "+", "-" y "/" sin error y sin eliminar caracteres, y en B2C-99 la calle se muestra precargada como "Pasaje Los Aromos 3-A / Lote 5+".

**Resultado obtenido**

Coincide con el resultado esperado.

**Observación**

Región Metropolitana y comuna Las Condes (la fila no declara comuna); Numeración 120 del paso.

**Evidencia**

![Paso 8 — formulario con caracteres especiales](<B2C-26 Evidencias/TC-B2C26-D-016-p08-formulario-con-caracteres-especiales.png>)

![Estado final](<B2C-26 Evidencias/TC-B2C26-D-016.png>)

---

### TC-B2C26-D-017 - Verificar que una dirección manual sin numeración se visualiza con "S/N" [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-15 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- Sin método de entrega seleccionado (ventana de incógnito)
- La dirección a ingresar tiene cobertura y horarios disponibles

**Data utilizada**

{BASE_URL}, {DIRECCION_SIN_NUMERO}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador de escritorio.
2. El sistema carga el Home con el Store Locator en el header.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" seleccionada.
5. El usuario escribe 2 caracteres en el buscador y hace clic en "Agregar".
6. El sistema muestra el formulario "Dirección manual" con Región* ("Elegir región"), Comuna* ("Elegir comuna"), Dirección* ("Calle") y Numeración ("Ej. 2160").
7. El usuario completa Región, Comuna y Dirección con Metropolitana, Las Condes, Las Condes, deja Numeración vacío y hace clic en "Continuar con detalle de la dirección".
8. El sistema muestra un loader y redirige a la confirmación con PIN (B2C-99).
9. El usuario confirma la dirección en B2C-99 y completa el flujo hasta dejarla seteada.
10. El sistema cierra el flujo y muestra la dirección en el Store Locator del header.
11. El usuario hace clic en el Store Locator del header.
12. El sistema abre el modal con la dirección activa marcada en "Dirección de despacho".

**Resultado esperado**

La dirección activa se muestra con "S/N" en el lugar de la numeración (calle, S/N, comuna y región) en el modal y en el Store Locator del header.

**Resultado obtenido**

header 'Las Condes S/N' (OK) y modal 'Las Condes S/N' sin comuna ni región.

**Observación**

Esperado: 'Las Condes, S/N, Las Condes, Metropolitana' en el modal y en el header. Obtenido: header 'Las Condes S/N' (OK) y modal 'Las Condes S/N' sin comuna ni región. (tests/B2C-26.spec.ts:503). Mismo comportamiento que el bug B2C-1158 (DESCARTADO en Jira): se marca Rechazado citándolo, sin abrir un bug nuevo.

**Evidencia**

![Paso 7 — formulario sin numeracion](<B2C-26 Evidencias/TC-B2C26-D-017-p07-formulario-sin-numeracion.png>)

![Paso 8 — b2c 99](<B2C-26 Evidencias/TC-B2C26-D-017-p08-b2c-99.png>)

![Paso 10 — header las condes s n](<B2C-26 Evidencias/TC-B2C26-D-017-p10-header-las-condes-s-n.png>)

![Paso 12 — direccion activa las condes s n](<B2C-26 Evidencias/TC-B2C26-D-017-p12-direccion-activa-las-condes-s-n.png>)

---

### TC-B2C26-D-018 - Verificar que una dirección sin numeración se guarda en el perfil con "S/N" [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Home
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La dirección a ingresar tiene cobertura y horarios disponibles
- El carro está vacío

**Data utilizada**

{BASE_URL}, {COMPRADOR_PASSWORD}, {COMPRADOR_USER}, {DIRECCION_SIN_NUMERO}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador de escritorio.
2. El sistema carga el Home con el Store Locator en el header.
3. El usuario hace clic en el Store Locator del header.
4. El sistema muestra el skeleton de carga y luego la dirección activa, las direcciones guardadas y el buscador "Calle, dirección o lugar".
5. El usuario escribe 2 caracteres en el buscador y hace clic en "Agregar".
6. El sistema muestra el formulario "Dirección manual" con Región* ("Elegir región"), Comuna* ("Elegir comuna"), Dirección* ("Calle") y Numeración ("Ej. 2160").
7. El usuario completa Región, Comuna y Dirección con Metropolitana, Las Condes, Las Condes, deja Numeración vacío y hace clic en "Continuar con detalle de la dirección".
8. El usuario confirma la dirección en B2C-99 y completa el flujo (incluido el OTP de B2C-125 si se solicita) hasta dejarla seteada.
9. El usuario hace clic en el Store Locator del header y revisa la dirección nueva en la lista.
10. El usuario cierra sesión, vuelve a iniciar sesión con vhchirinos+comprador@avatar-global.com y abre nuevamente el Store Locator.

**Resultado esperado**

La dirección nueva queda guardada en el perfil y se muestra con "S/N" como numeración en el modal, antes y después de volver a iniciar sesión.

**Resultado obtenido**

Coincide con el resultado esperado.

**Observación**

Logueado con vhchirinos+comprador@avatar-global.com (vhchirinos+comprador@avatar-global.com) por correo + OTP leído del Gmail conectado; dirección activa 'Casa' (Calle Uno 23, La Florida). Se vació el carro (precondición). Formulario con Metropolitana, Las Condes, Las Condes (Metropolitana / Las Condes / calle 'Las Condes'), OTP 'Autenticación requerida' al guardar. Después se eliminó la dirección agregada y se volvió a dejar activa 'Casa'.

**Evidencia**

![Paso 7 — formulario sin numeracion](<B2C-26 Evidencias/TC-B2C26-D-018-p07-formulario-sin-numeracion.png>)

![Paso 8 — direccion seteada](<B2C-26 Evidencias/TC-B2C26-D-018-p08-direccion-seteada.png>)

![Paso 9 — lista con la direccion nueva](<B2C-26 Evidencias/TC-B2C26-D-018-p09-lista-con-la-direccion-nueva.png>)

![Paso 10 — tras volver a iniciar sesion](<B2C-26 Evidencias/TC-B2C26-D-018-p10-tras-volver-a-iniciar-sesion.png>)

---

### TC-B2C26-M-037 - Verificar que el formulario manual acepta los caracteres especiales +, - y / en la dirección [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sin método de entrega seleccionado (ventana de incógnito)

**Data utilizada**

{BASE_URL}, {DIRECCION_CARACTERES_ESPECIALES}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" seleccionada.
5. El usuario escribe 2 caracteres en el buscador y toca "Agregar".
6. El sistema muestra el formulario "Dirección manual" con Región* ("Elegir región"), Comuna* ("Elegir comuna"), Dirección* ("Calle") y Numeración ("Ej. 2160").
7. El usuario selecciona una Región y una Comuna con cobertura, escribe Pasaje Los Aromos 3-A / Lote 5+ en Dirección y 120 en Numeración.
8. El sistema mantiene el texto tal como se escribió, sin mensaje de error, y habilita "Continuar con detalle de la dirección".
9. El usuario toca "Continuar con detalle de la dirección".
10. El sistema muestra un loader y redirige a la confirmación con PIN (B2C-99).

**Resultado esperado**

El campo Dirección acepta "+", "-" y "/" sin error y sin eliminar caracteres, y en B2C-99 la calle se muestra precargada como "Pasaje Los Aromos 3-A / Lote 5+".

**Resultado obtenido**

Coincide con el resultado esperado.

**Observación**

Región Metropolitana y comuna Las Condes (la fila no declara comuna); Numeración 120 del paso.

**Evidencia**

![Paso 8 — formulario con caracteres especiales](<B2C-26 Evidencias/TC-B2C26-M-037-p08-formulario-con-caracteres-especiales.png>)

![Estado final](<B2C-26 Evidencias/TC-B2C26-M-037.png>)

---

### TC-B2C26-M-038 - Verificar que una dirección manual sin numeración se visualiza con "S/N" [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sin método de entrega seleccionado (ventana de incógnito)
- La dirección a ingresar tiene cobertura y horarios disponibles

**Data utilizada**

{BASE_URL}, {DIRECCION_SIN_NUMERO}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" seleccionada.
5. El usuario escribe 2 caracteres en el buscador y toca "Agregar".
6. El sistema muestra el formulario "Dirección manual" con Región* ("Elegir región"), Comuna* ("Elegir comuna"), Dirección* ("Calle") y Numeración ("Ej. 2160").
7. El usuario completa Región, Comuna y Dirección con Metropolitana, Las Condes, Las Condes, deja Numeración vacío y toca "Continuar con detalle de la dirección".
8. El sistema muestra un loader y redirige a la confirmación con PIN (B2C-99).
9. El usuario confirma la dirección en B2C-99 y completa el flujo hasta dejarla seteada.
10. El sistema cierra el flujo y muestra la dirección en el Store Locator del header.
11. El usuario toca el Store Locator del header.
12. El sistema abre el modal con la dirección activa marcada en "Dirección de despacho".

**Resultado esperado**

La dirección activa se muestra con "S/N" en el lugar de la numeración (calle, S/N, comuna y región) en el modal y en el Store Locator del header.

**Resultado obtenido**

header 'Las Condes S/N' (OK) y modal 'Las Condes S/N' sin comuna ni región.

**Observación**

Esperado: 'Las Condes, S/N, Las Condes, Metropolitana' en el modal y en el header. Obtenido: header 'Las Condes S/N' (OK) y modal 'Las Condes S/N' sin comuna ni región. (tests/B2C-26.spec.ts:969). Mismo comportamiento que el bug B2C-1158 (DESCARTADO en Jira): se marca Rechazado citándolo, sin abrir un bug nuevo.

**Evidencia**

![Paso 7 — formulario sin numeracion](<B2C-26 Evidencias/TC-B2C26-M-038-p07-formulario-sin-numeracion.png>)

![Paso 8 — b2c 99](<B2C-26 Evidencias/TC-B2C26-M-038-p08-b2c-99.png>)

![Paso 10 — header las condes s n](<B2C-26 Evidencias/TC-B2C26-M-038-p10-header-las-condes-s-n.png>)

![Paso 12 — direccion activa las condes s n](<B2C-26 Evidencias/TC-B2C26-M-038-p12-direccion-activa-las-condes-s-n.png>)

---

### TC-B2C26-M-039 - Verificar que una dirección sin numeración se guarda en el perfil con "S/N" [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La dirección a ingresar tiene cobertura y horarios disponibles
- El carro está vacío

**Data utilizada**

{BASE_URL}, {COMPRADOR_PASSWORD}, {COMPRADOR_USER}, {DIRECCION_SIN_NUMERO}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema muestra el skeleton de carga y luego la dirección activa, las direcciones guardadas y el buscador "Calle, dirección o lugar".
5. El usuario escribe 2 caracteres en el buscador y toca "Agregar".
6. El sistema muestra el formulario "Dirección manual" con Región* ("Elegir región"), Comuna* ("Elegir comuna"), Dirección* ("Calle") y Numeración ("Ej. 2160").
7. El usuario completa Región, Comuna y Dirección con Metropolitana, Las Condes, Las Condes, deja Numeración vacío y toca "Continuar con detalle de la dirección".
8. El usuario confirma la dirección en B2C-99 y completa el flujo (incluido el OTP de B2C-125 si se solicita) hasta dejarla seteada.
9. El usuario toca el Store Locator del header y revisa la dirección nueva en la lista.
10. El usuario cierra sesión, vuelve a iniciar sesión con vhchirinos+comprador@avatar-global.com y abre nuevamente el Store Locator.

**Resultado esperado**

La dirección nueva queda guardada en el perfil y se muestra con "S/N" como numeración en el modal, antes y después de volver a iniciar sesión.

**Resultado obtenido**

Coincide con el resultado esperado.

**Observación**

Logueado con vhchirinos+comprador@avatar-global.com (vhchirinos+comprador@avatar-global.com) por correo + OTP leído del Gmail conectado; dirección activa 'Casa' (Calle Uno 23, La Florida). Se vació el carro (precondición). Formulario con Metropolitana, Las Condes, Las Condes; OTP al guardar y al volver a iniciar sesión. Después se eliminó la dirección agregada y se volvió a dejar activa 'Casa'.

**Evidencia**

![Paso 7 — formulario sin numeracion](<B2C-26 Evidencias/TC-B2C26-M-039-p07-formulario-sin-numeracion.png>)

![Paso 8 — direccion seteada](<B2C-26 Evidencias/TC-B2C26-M-039-p08-direccion-seteada.png>)

![Paso 9 — lista con la direccion nueva](<B2C-26 Evidencias/TC-B2C26-M-039-p09-lista-con-la-direccion-nueva.png>)

![Paso 10 — tras volver a iniciar sesion](<B2C-26 Evidencias/TC-B2C26-M-039-p10-tras-volver-a-iniciar-sesion.png>)

---

### TC-B2C26-D-019 - Verificar que al buscar un Plus Code de Google la dirección se agrega sin problemas [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-15 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- Sin método de entrega seleccionado (ventana de incógnito)

**Data utilizada**

{BASE_URL}, {DIRECCION_PLUS_CODE}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El sistema carga el Home con el Store Locator en el header.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" seleccionada.
5. El usuario escribe HG74+86G Las Condes, Chile en "Calle, dirección o lugar".
6. El sistema muestra la sugerencia de Google correspondiente al Plus Code (Las Condes).
7. El usuario selecciona la sugerencia.
8. El sistema redirige a la confirmación de dirección con PIN en el mapa (B2C-99) con la dirección precargada.
9. El usuario confirma la dirección.
10. El sistema cierra el modal y actualiza el Store Locator del header.

**Resultado esperado**

Google muestra la sugerencia del Plus Code sin errores; al seleccionarla se redirige a la confirmación con PIN (B2C-99) con Región Metropolitana y Comuna Las Condes precargadas y el PIN sobre la ubicación del Plus Code; al confirmar, el modal se cierra y el Store Locator del header muestra la dirección seteada, sin mensajes de error.

**Resultado obtenido**

Ver capturas.

**Observación**

Causa: HG74+86G Las Condes, Chile (HG74+86G Las Condes, Chile) sugiere 'HG74+86G Las Condes, Chile' y B2C-99 muestra 'Las Condes, Región Metropolitana', pero al tocar 'Agregar dirección' el sitio abre 'Aún no llegamos a esta dirección' (sin cobertura): no se llega al paso 10 (cierre del modal y header con la dirección). Acción: declarar un Plus Code dentro de la zona de cobertura.

**Evidencia**

![TC B2C26 D 019 x01 aun no llegamos a esta direccion](<B2C-26 Evidencias/TC-B2C26-D-019-x01-aun-no-llegamos-a-esta-direccion.png>)

![Paso 6 — sugerencias hg74 86g las condes chile](<B2C-26 Evidencias/TC-B2C26-D-019-p06-sugerencias-hg74-86g-las-condes-chile.png>)

![Paso 8 — b2c 99](<B2C-26 Evidencias/TC-B2C26-D-019-p08-b2c-99.png>)

![Paso 8 — detalles con las condes metropolitana](<B2C-26 Evidencias/TC-B2C26-D-019-p08-detalles-con-las-condes-metropolitana.png>)

---

### TC-B2C26-M-040 - Verificar que al buscar un Plus Code de Google la dirección se agrega sin problemas [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sin método de entrega seleccionado (ventana de incógnito)

**Data utilizada**

{BASE_URL}, {DIRECCION_PLUS_CODE}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" seleccionada.
5. El usuario escribe HG74+86G Las Condes, Chile en "Calle, dirección o lugar".
6. El sistema muestra la sugerencia de Google correspondiente al Plus Code (Las Condes).
7. El usuario toca la sugerencia.
8. El sistema redirige a la confirmación de dirección con PIN en el mapa (B2C-99) con la dirección precargada.
9. El usuario confirma la dirección.
10. El sistema cierra el modal y actualiza el Store Locator del header.

**Resultado esperado**

Google muestra la sugerencia del Plus Code sin errores; al tocarla se redirige a la confirmación con PIN (B2C-99) con Región Metropolitana y Comuna Las Condes precargadas y el PIN sobre la ubicación del Plus Code; al confirmar, el modal se cierra y el Store Locator del header muestra la dirección seteada, sin mensajes de error.

**Resultado obtenido**

Ver capturas.

**Observación**

Causa: HG74+86G Las Condes, Chile (HG74+86G Las Condes, Chile) sugiere 'HG74+86G Las Condes, Chile' y B2C-99 muestra 'Las Condes, Región Metropolitana', pero al tocar 'Agregar dirección' el sitio abre 'Aún no llegamos a esta dirección' (sin cobertura): no se llega al paso 10 (cierre del modal y header con la dirección). Acción: declarar un Plus Code dentro de la zona de cobertura. (la captura x01 es de la exploración en Desktop 1440x900)

**Evidencia**

![TC B2C26 M 040 x01 aun no llegamos a esta direccion](<B2C-26 Evidencias/TC-B2C26-M-040-x01-aun-no-llegamos-a-esta-direccion.png>)

![Paso 6 — sugerencias hg74 86g las condes chile](<B2C-26 Evidencias/TC-B2C26-M-040-p06-sugerencias-hg74-86g-las-condes-chile.png>)

![Paso 8 — b2c 99](<B2C-26 Evidencias/TC-B2C26-M-040-p08-b2c-99.png>)

![Paso 8 — detalles con las condes metropolitana](<B2C-26 Evidencias/TC-B2C26-M-040-p08-detalles-con-las-condes-metropolitana.png>)

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "environment": "Storefront Unimarc DEV (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/), Chromium Desktop 1440x900 / WebKit Mobile 390x844",
  "executed_by": "Victor Chirinos",
  "suite": "B2C-26",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-26 WEB Test Cases.xlsx",
  "title": "B2C-26 - Setear método de entrega con Despacho a domicilio - Evidencias QA",
  "updated_at": "2026-10-15"
 },
 "history": {
  "2026-10-15": [
   "TC-B2C26-D-001",
   "TC-B2C26-D-002",
   "TC-B2C26-D-003",
   "TC-B2C26-D-004",
   "TC-B2C26-D-005",
   "TC-B2C26-D-006",
   "TC-B2C26-D-007",
   "TC-B2C26-D-008",
   "TC-B2C26-D-009",
   "TC-B2C26-D-010",
   "TC-B2C26-D-011",
   "TC-B2C26-D-012",
   "TC-B2C26-D-013",
   "TC-B2C26-D-014",
   "TC-B2C26-D-015",
   "TC-B2C26-D-016",
   "TC-B2C26-D-017",
   "TC-B2C26-D-018",
   "TC-B2C26-D-019",
   "TC-B2C26-M-001",
   "TC-B2C26-M-002",
   "TC-B2C26-M-003",
   "TC-B2C26-M-004",
   "TC-B2C26-M-005",
   "TC-B2C26-M-006",
   "TC-B2C26-M-007",
   "TC-B2C26-M-008",
   "TC-B2C26-M-009",
   "TC-B2C26-M-010",
   "TC-B2C26-M-011",
   "TC-B2C26-M-012",
   "TC-B2C26-M-013",
   "TC-B2C26-M-014",
   "TC-B2C26-M-015",
   "TC-B2C26-M-016",
   "TC-B2C26-M-017",
   "TC-B2C26-M-018",
   "TC-B2C26-M-019",
   "TC-B2C26-M-020",
   "TC-B2C26-M-021",
   "TC-B2C26-M-022",
   "TC-B2C26-M-023",
   "TC-B2C26-M-024",
   "TC-B2C26-M-025",
   "TC-B2C26-M-026",
   "TC-B2C26-M-027",
   "TC-B2C26-M-028",
   "TC-B2C26-M-029",
   "TC-B2C26-M-030",
   "TC-B2C26-M-031",
   "TC-B2C26-M-032",
   "TC-B2C26-M-033",
   "TC-B2C26-M-034",
   "TC-B2C26-M-035",
   "TC-B2C26-M-036",
   "TC-B2C26-M-037",
   "TC-B2C26-M-038",
   "TC-B2C26-M-039",
   "TC-B2C26-M-040"
  ]
 },
 "results": [
  {
   "executed_at": "2026-10-15",
   "expected": "Se muestran sugerencias en tiempo real y al seleccionar una completa se redirige correctamente a B2C-99.",
   "form_factor": "desktop",
   "id": "TC-B2C26-D-001",
   "name": "Al escribir 3 o mas caracteres en el buscador de Google se muestran sugerencias en tiempo real, y al elegir una con direccion completa redirige a B2C-99",
   "observation": "Dirección Camino La Fuente 1589 Las Condes.",
   "observed": "Coincide con el resultado esperado.",
   "preconditions": "- Viewport: Desktop 1440x900",
   "screenshots": [
    {
     "caption": "Paso 0 — modal elige tu metodo de entrega",
     "file": "TC-B2C26-D-001-p00-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 2 — sugerencias de google",
     "file": "TC-B2C26-D-001-p02-sugerencias-de-google.png"
    },
    {
     "caption": "Paso 3 — confirmacion con pin b2c 99",
     "file": "TC-B2C26-D-001-p03-confirmacion-con-pin-b2c-99.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C26-D-001.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Escribir 3 o mas caracteres en el buscador.\n2. Verificar las sugerencias en tiempo real.\n3. Seleccionar una sugerencia con direccion completa y verificar la redireccion a B2C-99.",
   "test_data": "{BASE_URL}, {DIRECCION_DESPACHO}",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "En los 3 escenarios se ofrece la opcion de agregar la direccion manualmente, sin bloquear al cliente.",
   "form_factor": "desktop",
   "id": "TC-B2C26-D-002",
   "name": "Con menos de 3 caracteres no se consulta a Google y se ofrece agregar manualmente; sin resultados o con la API caida, tambien se ofrece Agregar direccion manual al final de la lista",
   "observation": "2 caracteres 'Ca' (sin consultas a Google); término sin resultados 'zzqxw 99999' (texto del paso, no es data del ambiente); falla de Google simulada abortando maps.googleapis.com. En los 3 casos el pie '¿No aparece tu dirección? Agregar' abre el formulario manual.",
   "observed": "Coincide con el resultado esperado.",
   "preconditions": "- Viewport: Desktop 1440x900",
   "screenshots": [
    {
     "caption": "Paso 1 — 2 caracteres sin sugerencias agregar disponible",
     "file": "TC-B2C26-D-002-p01-2-caracteres-sin-sugerencias-agregar-disponible.png"
    },
    {
     "caption": "Paso 2 — sin resultados no aparece tu direccion agregar",
     "file": "TC-B2C26-D-002-p02-sin-resultados-no-aparece-tu-direccion-agregar.png"
    },
    {
     "caption": "Paso 3 — google caido sin sugerencias agregar disponible",
     "file": "TC-B2C26-D-002-p03-google-caido-sin-sugerencias-agregar-disponible.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C26-D-002.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Escribir 1-2 caracteres y verificar que no haya sugerencias ni consulta a Google.\n2. Escribir un termino sin resultados y verificar la opcion 'Agregar' al final.\n3. Simular una falla de la API de Google y verificar el fallback a ingreso manual.",
   "test_data": "{BASE_URL}, {DIRECCION_DESPACHO}",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "El texto escrito se usa como Calle, Region y Comuna se prellenan, y el flujo continua al PIN interactivo.",
   "form_factor": "desktop",
   "id": "TC-B2C26-D-003",
   "name": "Si Google retorna un resultado sin calle reconocida, el texto escrito se usa como Calle, se prellenan Region y Comuna, y continua directo al PIN",
   "observation": "Esperado: un resultado de Google de tipo comuna/región que deje el texto como Calle y prellene Región/Comuna. Obtenido: con 'Las Condes' (comuna de Camino La Fuente 1589 Las Condes) solo hay calles: 'Las Condesas', 'Las Condes · Antofagasta', '… Chiguayante', '… San Bernardo', 'Plazuela Las Condes'; la consulta va restringida a types=address. (tests/B2C-26.spec.ts:310). Mismo comportamiento que el bug B2C-844 (DESCARTADO en Jira): se marca Rechazado citándolo, sin abrir un bug nuevo.",
   "observed": "con 'Las Condes' (comuna de Camino La Fuente 1589 Las Condes) solo hay calles: 'Las Condesas', 'Las Condes · Antofagasta', '… Chiguayante', '… San Bernardo', 'Plazuela Las Condes'; la consulta va restringida a types=address.",
   "preconditions": "- Viewport: Desktop 1440x900",
   "screenshots": [
    {
     "caption": "Paso 1 — sugerencias para las condes",
     "file": "TC-B2C26-D-003-p01-sugerencias-para-las-condes.png"
    }
   ],
   "status": "Rechazado",
   "steps": "1. Buscar un termino que retorne un resultado de tipo comuna o region.\n2. Seleccionar ese resultado.\n3. Verificar que el texto escrito se use como Calle y que Region/Comuna se prellenen.",
   "test_data": "{BASE_URL}, {DIRECCION_DESPACHO}",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "El invitado ve su direccion activa formateada; el logueado ve el skeleton y luego la lista completa con ambos metodos.",
   "form_factor": "desktop",
   "id": "TC-B2C26-D-004",
   "name": "El invitado ve su direccion activa marcada en el modal, y el logueado ve un skeleton seguido de la direccion activa marcada, la lista de direcciones guardadas y los metodos Google/GPS",
   "observation": "Causa: el paso 2 es 'como logueado' (skeleton, lista de guardadas) pero la fila solo declara https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ y Camino La Fuente 1589 Las Condes: no hay cuenta declarada. Acción: declarar la cuenta (p. ej. vhchirinos+comprador@avatar-global.com/{COMPRADOR_PASSWORD}) en Test data.",
   "observed": "No ejecutado.",
   "preconditions": "- Viewport: Desktop 1440x900",
   "status": "Bloqueado Data",
   "steps": "1. Como invitado, abrir el modal y verificar el formato de la direccion marcada.\n2. Como logueado, abrir el modal y verificar el skeleton y luego la lista completa.",
   "test_data": "{BASE_URL}, {DIRECCION_DESPACHO}",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "Se muestra la pantalla de error completa con sus 2 botones, sin alterar la direccion activa.",
   "form_factor": "desktop",
   "id": "TC-B2C26-D-005",
   "name": "Si falla la carga de direcciones guardadas, se reemplaza el modal por una pantalla de error con codigo, botones Reintentar y Volver al inicio, sin cambiar la direccion activa",
   "observation": "Logueado con vhchirinos+comprador@avatar-global.com (vhchirinos+comprador@avatar-global.com) por correo + OTP leído del Gmail conectado; dirección activa 'Casa' (Calle Uno 23, La Florida). Error simulado con 500 en la carga del cliente (shopper-customers/customers/{id}).",
   "observed": "Coincide con el resultado esperado.",
   "preconditions": "- Viewport: Desktop 1440x900",
   "screenshots": [
    {
     "caption": "Paso 0 — direccion activa calle uno 23 la florida",
     "file": "TC-B2C26-D-005-p00-direccion-activa-calle-uno-23-la-florida.png"
    },
    {
     "caption": "Paso 2 — pantalla de error con codigo y 2 botones",
     "file": "TC-B2C26-D-005-p02-pantalla-de-error-con-codigo-y-2-botones.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C26-D-005.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Simular un error al cargar las direcciones guardadas.\n2. Verificar el titulo, mensaje, codigo de error y los 2 botones.\n3. Verificar que la direccion activa no haya cambiado.",
   "test_data": "{BASE_URL}, {COMPRADOR_PASSWORD}, {COMPRADOR_USER}",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "Se muestra el loader, se obtienen las coordenadas GPS y se redirige correctamente a B2C-99.",
   "form_factor": "desktop",
   "id": "TC-B2C26-D-006",
   "name": "Con permiso de geolocalizacion concedido en Web, Activar mi ubicacion actual muestra un loader, obtiene las coordenadas GPS y redirige a B2C-99",
   "observation": "Ubicación concedida en -33.4012534, -70.5233046: 'Buscando tu ubicación…' y B2C-99 'Detalles de la dirección' con el mapa en esas coordenadas.",
   "observed": "Coincide con el resultado esperado.",
   "preconditions": "- Viewport: Desktop 1440x900",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C26-D-006.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. En Web con permiso concedido, seleccionar 'Activar mi ubicacion actual' y verificar el loader y la redireccion.",
   "test_data": "{BASE_URL}, {LATITUD_DESPACHO}, {LONGITUD_DESPACHO}",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "Al denegar (Web) se regresa sin cambios; al conceder en Web se redirige a B2C-99.",
   "form_factor": "desktop",
   "id": "TC-B2C26-D-007",
   "name": "Sin permiso de geolocalizacion, se muestra un modal para activarlo; al denegarlo se vuelve sin cambios al modal de metodo de entrega en Web",
   "observation": "Causa: el paso 2 concede el permiso de ubicación y espera la redirección a B2C-99, pero la fila no declara la ubicación del dispositivo (-33.4012534/-70.5233046, como D-006). Acción: declarar las coordenadas en Test data.",
   "observed": "No ejecutado.",
   "preconditions": "- Viewport: Desktop 1440x900",
   "status": "Bloqueado Data",
   "steps": "1. En Web sin permiso, denegar y verificar el regreso sin cambios.\n2. Repetir concediendo y verificar la redireccion a B2C-99.",
   "test_data": "{BASE_URL}",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "Se muestra el toast de error especificado, permitiendo reintentar o usar otro metodo de ingreso.",
   "form_factor": "desktop",
   "id": "TC-B2C26-D-008",
   "name": "Si se conceden los permisos pero el sistema no logra obtener las coordenadas, se muestra un toast de error permitiendo reintentar o usar otro metodo",
   "observation": "Ubicación no disponible simulada (permiso concedido y getCurrentPosition con error 2): toast 'No pudimos obtener tu ubicación actual. Inténtalo nuevamente.' en cada intento; luego Camino La Fuente 1589 Las Condes da sugerencias de Google.",
   "observed": "Coincide con el resultado esperado.",
   "preconditions": "- Viewport: Desktop 1440x900",
   "screenshots": [
    {
     "caption": "Paso 2 — toast de error",
     "file": "TC-B2C26-D-008-p02-toast-de-error.png"
    },
    {
     "caption": "Paso 3 — reintento",
     "file": "TC-B2C26-D-008-p03-reintento.png"
    },
    {
     "caption": "Paso 4 — sugerencias de google",
     "file": "TC-B2C26-D-008-p04-sugerencias-de-google.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C26-D-008.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Simular una falla al obtener las coordenadas tras conceder el permiso.\n2. Verificar el toast de error.\n3. Reintentar y luego probar con otro metodo de ingreso.",
   "test_data": "{BASE_URL}",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "El formulario muestra los campos correctos, el boton se habilita solo al completar lo obligatorio, y los dropdown muestran los catalogos esperados.",
   "form_factor": "desktop",
   "id": "TC-B2C26-D-009",
   "name": "El formulario de direccion manual muestra Region, Comuna, Direccion y Numeracion, con el boton Continuar deshabilitado hasta completar los campos obligatorios y catalogos correctos en los dropdown",
   "observation": "Esperado: Comuna lista solo las comunas de la región elegida. Obtenido: la Región Metropolitana incluye Machalí (Región de O'Higgins). Campos, placeholders y habilitación del botón OK. (tests/B2C-26.spec.ts:382). Mismo comportamiento que el bug B2C-1164 (DESCARTADO en Jira): se marca Rechazado citándolo, sin abrir un bug nuevo. (B2C-1164 se reportó en APP; en web se repite.)",
   "observed": "la Región Metropolitana incluye Machalí (Región de O'Higgins). Campos, placeholders y habilitación del botón OK.",
   "preconditions": "- Viewport: Desktop 1440x900",
   "screenshots": [
    {
     "caption": "Paso 1 — formulario direccion manual",
     "file": "TC-B2C26-D-009-p01-formulario-direccion-manual.png"
    }
   ],
   "status": "Rechazado",
   "steps": "1. Abrir el formulario y verificar los 4 campos con sus placeholders.\n2. Completar lo obligatorio y verificar que se habilite el boton.\n3. Desplegar Region y Comuna y verificar sus listados.",
   "test_data": "{BASE_URL}",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "Se muestra el loader, se redirige a B2C-99 con la direccion precargada y el PIN correctamente geocodificado.",
   "form_factor": "desktop",
   "id": "TC-B2C26-D-010",
   "name": "Al presionar Continuar con detalle de la direccion en el formulario manual, se muestra un loader y se redirige a B2C-99 con la direccion precargada y el PIN geocodificado automaticamente",
   "observation": "Formulario con Metropolitana / Las Condes / 'Camino La Fuente' / 1589 (de Camino La Fuente 1589 Las Condes). El botón dice 'Continuar con detalles de la dirección'.",
   "observed": "Coincide con el resultado esperado.",
   "preconditions": "- Viewport: Desktop 1440x900",
   "screenshots": [
    {
     "caption": "Paso 1 — formulario completo metropolitana las condes",
     "file": "TC-B2C26-D-010-p01-formulario-completo-metropolitana-las-condes.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C26-D-010.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Completar el formulario manual con los campos obligatorios.\n2. Presionar 'Continuar con detalles de la direccion'.\n3. Verificar el loader, la redireccion a B2C-99 y la precarga con el PIN geocodificado.",
   "test_data": "{BASE_URL}, {DIRECCION_DESPACHO}",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "Cada escenario deriva al flujo correcto; el error de API mantiene la direccion anterior con su toast.",
   "form_factor": "desktop",
   "id": "TC-B2C26-D-011",
   "name": "Al elegir una direccion guardada distinta a la activa, el sistema valida cobertura, SLAs y carrito en segundo plano y deriva al flujo correspondiente: exito sin PIN/OTP, sin cobertura, sin horarios, con carrito, o error",
   "observation": "Causa: el TC recorre 5 escenarios y la fila solo declara vhchirinos+comprador@avatar-global.com: falta una dirección guardada con cobertura y sin SLA (B2C-127) y un SKU para el escenario 'con carrito' (B2C-122). Acción: declarar esa dirección (guardada en la cuenta) y el SKU. Nota: los escenarios sueltos corren en M-021 (pide OTP, B2C-1156), M-022 y M-023.",
   "observed": "No ejecutado.",
   "preconditions": "- Viewport: Desktop 1440x900",
   "status": "Bloqueado Data",
   "steps": "1. Seleccionar con cobertura, SLA y sin carrito, verificando el cierre directo sin PIN/OTP.\n2. Repetir sin cobertura (B2C-123), sin SLAs (B2C-127), y con carrito (B2C-122).\n3. Simular error de API y verificar el toast y que la direccion anterior se mantenga.",
   "test_data": "{BASE_URL}, {COMPRADOR_PASSWORD}, {COMPRADOR_USER}",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "El menu se muestra solo en direcciones no activas; exito y error muestran el loader y el toast correspondiente.",
   "form_factor": "desktop",
   "id": "TC-B2C26-D-012",
   "name": "El menu de opciones solo aparece en direcciones guardadas no activas; al confirmar Eliminar se muestra un loader y un toast de exito o de error segun el resultado",
   "observation": "Esperado: el menú ⋮ solo en las no activas y, al eliminar con éxito, la dirección se quita de la lista. Obtenido: (1) la activa ('Casa') también muestra el menú ⋮ (tests/B2C-26.spec.ts:430) — mismo comportamiento que B2C-1157 (DESCARTADO), sin bug nuevo; (2) tras 'Aceptar' aparece el toast 'Tu dirección fue eliminada con éxito.' pero la dirección sigue en la lista del modal abierto (la lista no se actualiza; al reabrir el modal ya no está: el DELETE sí se aplicó). Reproducido 4/4 en Desktop y Mobile. (tests/B2C-26.spec.ts:456). Bug B2C-1216. 'No gracias' y el toast de error al eliminar: OK. Se eliminaron guardadas duplicadas (quedan copias iguales).",
   "observed": "(1) la activa ('Casa') también muestra el menú ⋮",
   "preconditions": "- Viewport: Desktop 1440x900",
   "screenshots": [
    {
     "caption": "Paso 1 — direcciones guardadas",
     "file": "TC-B2C26-D-012-p01-direcciones-guardadas.png"
    },
    {
     "caption": "Paso 2 — quieres eliminar tu direccion",
     "file": "TC-B2C26-D-012-p02-quieres-eliminar-tu-direccion.png"
    },
    {
     "caption": "Paso 3 — toast de error al eliminar",
     "file": "TC-B2C26-D-012-p03-toast-de-error-al-eliminar.png"
    },
    {
     "caption": "Paso 4 — tras eliminar la direccion sigue en la lista",
     "file": "TC-B2C26-D-012-p04-tras-eliminar-la-direccion-sigue-en-la-lista.png"
    }
   ],
   "status": "Rechazado",
   "steps": "1. Verificar que el menu no aparezca en la direccion activa.\n2. Eliminar con 'No gracias' y verificar que no haya cambios.\n3. Repetir con 'Aceptar' en un caso exitoso y uno con error, verificando cada toast.",
   "test_data": "{BASE_URL}, {COMPRADOR_PASSWORD}, {COMPRADOR_USER}",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "En ambos casos el Store Locator muestra la direccion correcta segun la regla de precedencia, con el formato esperado.",
   "form_factor": "desktop",
   "id": "TC-B2C26-D-013",
   "name": "En el header, el logueado ve automaticamente la direccion de su ultima compra si no tiene direccion activa en sesion, o la ultima seteada en la sesion si no tiene historial",
   "observation": "Causa: el paso 2 ('sin historial con dirección seteada en sesión') necesita setear una dirección con vhchirinos+noaddress@avatar-global.com y la fila no declara cuál. Acción: declarar la dirección (p. ej. Camino La Fuente 1589 Las Condes). El paso 1 equivale a M-030 (Aprobado).",
   "observed": "No ejecutado.",
   "preconditions": "- Viewport: Desktop 1440x900",
   "status": "Bloqueado Data",
   "steps": "1. Loguearse con historial sin direccion activa y verificar el formato mostrado.\n2. Loguearse sin historial con direccion seteada en sesion y verificar que el clic abra el modal correspondiente.",
   "test_data": "{BASE_URL}, {COMPRADOR_MEMBRESIA_PASSWORD}, {COMPRADOR_MEMBRESIA_USER}, {COMPRADOR_PASSWORD}, {COMPRADOR_USER}",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "La direccion de invitado se muestra con el formato definido, no persiste tras cerrar el navegador, y dispara el flujo de asociacion al loguearse.",
   "form_factor": "desktop",
   "id": "TC-B2C26-D-014",
   "name": "El invitado con direccion seteada en la sesion la ve en el header con icono, calle, numeracion y comuna, sin guardarla en ningun perfil, y al iniciar sesion se dispara el flujo de asociacion",
   "observation": "Esperado: Store Locator con ícono, calle, numeración y comuna. Obtenido: 'Calle Uno 23' sin la comuna (La Florida). La dirección no persiste en una ventana nueva y al iniciar sesión con vhchirinos+comprador@avatar-global.com aparece el OTP 'Autenticación requerida' (asociación B2C-124/125): OK. (tests/B2C-26.spec.ts:461). Mismo comportamiento que el bug B2C-1159 (DESCARTADO en Jira): se marca Rechazado citándolo, sin abrir un bug nuevo.",
   "observed": "'Calle Uno 23' sin la comuna (La Florida). La dirección no persiste en una ventana nueva y al iniciar sesión con vhchirinos+comprador@avatar-global.com aparece el OTP 'Autenticación requerida' (asociación B2C-124/125): OK.",
   "preconditions": "- Viewport: Desktop 1440x900",
   "screenshots": [
    {
     "caption": "Paso 1 — header calle uno 23 desde jue 15 10 18 00 hrs 2 990",
     "file": "TC-B2C26-D-014-p01-header-calle-uno-23-desde-jue-15-10-18-00-hrs-2-990.png"
    },
    {
     "caption": "Paso 2 — ventana nueva sin direccion",
     "file": "TC-B2C26-D-014-p02-ventana-nueva-sin-direccion.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C26-D-014.png"
    }
   ],
   "status": "Rechazado",
   "steps": "1. Configurar una direccion como invitado y verificar el formato en el Store Locator.\n2. Cerrar el navegador y verificar que la direccion no persista.\n3. Iniciar sesion con la direccion de invitado activa y verificar que se dispare el flujo correspondiente.",
   "test_data": "{BASE_URL}, {COMPRADOR_PASSWORD}, {COMPRADOR_USER}, {DIRECCION_DESPACHO_001}",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "La direccion se mantiene consistente durante la navegacion, y se pierde al cerrar el navegador para usuario invitado",
   "form_factor": "desktop",
   "id": "TC-B2C26-D-015",
   "name": "La direccion activa se mantiene visible y consistente en el header al navegar entre paginas, sin pedir reconfiguracion, respetando las reglas de persistencia para usuario invitado",
   "observation": "Esperado: la misma dirección en Home, PLP, PDP, SRP y Carro. Obtenido: Home, PLP, PDP y SRP OK; el Carro usa el header simplificado (B2C-25) sin Store Locator. Al cerrar el navegador la dirección se pierde (OK). (tests/B2C-26.spec.ts:486). Mismo comportamiento que el bug B2C-846 (DESCARTADO en Jira): se marca Rechazado citándolo, sin abrir un bug nuevo.",
   "observed": "Home, PLP, PDP y SRP OK; el Carro usa el header simplificado (B2C-25) sin Store Locator. Al cerrar el navegador la dirección se pierde (OK).",
   "preconditions": "- Viewport: Desktop 1440x900",
   "screenshots": [
    {
     "caption": "Paso 2 — store locator en home",
     "file": "TC-B2C26-D-015-p02-store-locator-en-home.png"
    },
    {
     "caption": "Paso 3 — store locator en plp",
     "file": "TC-B2C26-D-015-p03-store-locator-en-plp.png"
    },
    {
     "caption": "Paso 4 — store locator en pdp",
     "file": "TC-B2C26-D-015-p04-store-locator-en-pdp.png"
    },
    {
     "caption": "Paso 5 — store locator en srp",
     "file": "TC-B2C26-D-015-p05-store-locator-en-srp.png"
    },
    {
     "caption": "Paso 6 — store locator en carro",
     "file": "TC-B2C26-D-015-p06-store-locator-en-carro.png"
    },
    {
     "caption": "Paso 7 — ventana nueva sin direccion",
     "file": "TC-B2C26-D-015-p07-ventana-nueva-sin-direccion.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C26-D-015.png"
    }
   ],
   "status": "Rechazado",
   "steps": "1. Navegar entre Home, PLP, PDP, busqueda y carrito verificando que la direccion se mantenga visible sin pedir reconfiguracion.\n2. Como invitado, cerrar el navegador y verificar que la direccion se pierda.",
   "test_data": "{BASE_URL}, {DIRECCION_DESPACHO}",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "Se muestran sugerencias en tiempo real y, al tocar una dirección completa, se redirige a la confirmación con PIN (B2C-99).",
   "form_factor": "mobile",
   "id": "TC-B2C26-M-001",
   "name": "Verificar que con 3 o más caracteres se sugieren direcciones de Google y una completa lleva al PIN [Mobile] [Guest]",
   "observation": "Dirección Camino La Fuente 1589 Las Condes.",
   "observed": "Coincide con el resultado esperado.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sin método de entrega seleccionado (ventana de incógnito)",
   "screenshots": [
    {
     "caption": "Paso 4 — modal con despacho a domicilio",
     "file": "TC-B2C26-M-001-p04-modal-con-despacho-a-domicilio.png"
    },
    {
     "caption": "Paso 6 — sugerencias de google",
     "file": "TC-B2C26-M-001-p06-sugerencias-de-google.png"
    },
    {
     "caption": "Paso 8 — confirmacion con pin b2c 99",
     "file": "TC-B2C26-M-001-p08-confirmacion-con-pin-b2c-99.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C26-M-001.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.\n5. El usuario escribe 3 o más caracteres de una calle en \"Calle, dirección o lugar\".\n6. El sistema muestra sugerencias de Google en tiempo real, sin presionar Enter.\n7. El usuario toca una sugerencia con dirección completa (calle y número).\n8. El sistema redirige a la confirmación de dirección con PIN en el mapa (B2C-99).",
   "test_data": "{BASE_URL}, {DIRECCION_DESPACHO}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "No se muestran sugerencias ni se ejecutan requests a Google (verificable en DevTools > Network) y se muestra \"¿No aparece tu dirección?\" + opción \"Agregar\".",
   "form_factor": "mobile",
   "id": "TC-B2C26-M-002",
   "name": "Verificar que con menos de 3 caracteres no se muestran sugerencias y se ofrece agregar manualmente [Mobile] [Guest]",
   "observation": "2 caracteres 'Ca': sin consultas a AutocompletionService de Google.",
   "observed": "Coincide con el resultado esperado.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sin método de entrega seleccionado (ventana de incógnito)\n- DevTools abierto en la pestaña Network",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C26-M-002.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.\n5. El usuario escribe 2 caracteres en \"Calle, dirección o lugar\".\n6. El sistema no muestra sugerencias y muestra \"¿No aparece tu dirección?\" + opción \"Agregar\".",
   "test_data": "{BASE_URL}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "Se muestra \"Agregar\" y al tocarla se abre el formulario \"Dirección manual\" con todos los campos vacíos.",
   "form_factor": "mobile",
   "id": "TC-B2C26-M-003",
   "name": "Verificar que una búsqueda sin resultados ofrece \"Agregar\" y abre el formulario manual vacío [Mobile] [Guest]",
   "observation": "Término 'zzqxw 99999' del paso (no es data del ambiente).",
   "observed": "Coincide con el resultado esperado.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sin método de entrega seleccionado (ventana de incógnito)",
   "screenshots": [
    {
     "caption": "Paso 6 — sin sugerencias no aparece tu direccion agregar",
     "file": "TC-B2C26-M-003-p06-sin-sugerencias-no-aparece-tu-direccion-agregar.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C26-M-003.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.\n5. El usuario escribe un texto sin coincidencias (ej. \"zzqxw 99999\") en \"Calle, dirección o lugar\".\n6. El sistema no muestra sugerencias de Google y muestra \"¿No aparece tu dirección?\" + opción \"Agregar\" al final de la lista.\n7. El usuario toca \"Agregar\".\n8. El sistema muestra el formulario \"Dirección manual\" con Región* (\"Elegir región\"), Comuna* (\"Elegir comuna\"), Dirección* (\"Calle\") y Numeración (\"Ej. 2160\"). Todos los campos están vacíos.",
   "test_data": "{BASE_URL}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "Con resultados, \"¿No aparece tu dirección?\" + opción \"Agregar\" aparece como último elemento de la lista.",
   "form_factor": "mobile",
   "id": "TC-B2C26-M-004",
   "name": "Verificar que la opción \"Agregar\" aparece al final de la lista también cuando hay resultados [Mobile] [Guest]",
   "observation": "Dirección Camino La Fuente 1589 Las Condes.",
   "observed": "Coincide con el resultado esperado.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sin método de entrega seleccionado (ventana de incógnito)",
   "screenshots": [
    {
     "caption": "Paso 6 — sugerencias de google",
     "file": "TC-B2C26-M-004-p06-sugerencias-de-google.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C26-M-004.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.\n5. El usuario escribe 3 o más caracteres de una calle existente en \"Calle, dirección o lugar\".\n6. El sistema muestra las sugerencias de Google y, después de la última, \"¿No aparece tu dirección?\" + opción \"Agregar\".",
   "test_data": "{BASE_URL}, {DIRECCION_DESPACHO}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "Se muestra la opción de ingreso manual y el usuario puede continuar con el formulario \"Dirección manual\".",
   "form_factor": "mobile",
   "id": "TC-B2C26-M-005",
   "name": "Verificar que un error de la API de Google ofrece agregar la dirección manualmente [Mobile] [Guest]",
   "observation": "Google bloqueado (maps.googleapis.com abortado). La opción se llama '¿No aparece tu dirección? Agregar' (no 'Agregar dirección manualmente' como dice el paso 6).",
   "observed": "Coincide con el resultado esperado.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sin método de entrega seleccionado (ventana de incógnito)\n- DevTools (emulación Mobile 390x844) con bloqueo de la request de Google Places (maps.googleapis.com) (Network request blocking)",
   "screenshots": [
    {
     "caption": "Paso 6 — google caido no aparece tu direccion agregar",
     "file": "TC-B2C26-M-005-p06-google-caido-no-aparece-tu-direccion-agregar.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C26-M-005.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.\n5. El usuario escribe 3 o más caracteres de una calle en \"Calle, dirección o lugar\".\n6. El sistema no muestra sugerencias de Google y muestra la opción \"Agregar dirección manualmente\".\n7. El usuario toca la opción de agregar manualmente.\n8. El sistema muestra el formulario \"Dirección manual\" con Región* (\"Elegir región\"), Comuna* (\"Elegir comuna\"), Dirección* (\"Calle\") y Numeración (\"Ej. 2160\").",
   "test_data": "{BASE_URL}, {DIRECCION_DESPACHO}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "En B2C-99 el campo Calle contiene el texto escrito por el usuario y Región y Comuna vienen prellenadas desde Google.",
   "form_factor": "mobile",
   "id": "TC-B2C26-M-006",
   "name": "Verificar que un resultado de Google sin calle usa el texto escrito como Calle y continúa al PIN [Mobile] [Guest]",
   "observation": "Causa: el TC busca 'el nombre de una comuna' y la fila solo declara https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; 'Providencia' es un ejemplo del paso. Acción: declarar la comuna en Test data. Nota: en D-003 (comuna de Camino La Fuente 1589 Las Condes) Google no devolvió resultados de tipo comuna (B2C-844, DESCARTADO).",
   "observed": "No ejecutado.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sin método de entrega seleccionado (ventana de incógnito)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.\n5. El usuario escribe el nombre de una comuna (ej. \"Providencia\") en \"Calle, dirección o lugar\".\n6. El sistema muestra sugerencias de Google, entre ellas un resultado de tipo comuna.\n7. El usuario toca el resultado de tipo comuna.\n8. El sistema continúa a la confirmación con PIN (B2C-99) con Calle = texto escrito y Región y Comuna prellenadas desde el resultado.",
   "test_data": "{BASE_URL}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "La dirección activa aparece marcada con el formato: nombre, calle, número (si aplica), complemento (si aplica), comuna y región.",
   "form_factor": "mobile",
   "id": "TC-B2C26-M-007",
   "name": "Verificar que el modal del invitado muestra su dirección activa marcada con el formato definido [Mobile] [Guest]",
   "observation": "Esperado: dirección activa con nombre, calle, número, comuna y región. Obtenido: 'Camino La Fuente 15…' (solo el nombre por defecto truncado). (tests/B2C-26.spec.ts:589). Mismo comportamiento que el bug B2C-1158 (DESCARTADO en Jira): se marca Rechazado citándolo, sin abrir un bug nuevo.",
   "observed": "'Camino La Fuente 15…' (solo el nombre por defecto truncado).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- En la sesión actual se configuró una dirección de despacho como invitado",
   "screenshots": [
    {
     "caption": "Paso 4 — direccion activa camino la fuente 15",
     "file": "TC-B2C26-M-007-p04-direccion-activa-camino-la-fuente-15.png"
    }
   ],
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal con \"Despacho a domicilio\" seleccionada y muestra en \"Dirección de Despacho\" la dirección activa marcada.",
   "test_data": "{BASE_URL}, {DIRECCION_DESPACHO}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "Tras el skeleton se muestra la dirección activa marcada (separada de las guardadas), cada dirección guardada con etiqueta, calle, número, complemento, comuna y región, y las opciones de búsqueda Google y \"Activar mi ubicación actual\".",
   "form_factor": "mobile",
   "id": "TC-B2C26-M-008",
   "name": "Verificar que el modal del logueado muestra skeleton y luego la dirección activa y las guardadas [Mobile] [Logueado]",
   "observation": "Esperado: skeleton de carga y luego la dirección activa y las guardadas. Obtenido: las direcciones aparecen sin skeleton (no se observó ninguno al abrir). (tests/B2C-26.spec.ts:604). Mismo comportamiento que el bug B2C-1160 (DESCARTADO en Jira): se marca Rechazado citándolo, sin abrir un bug nuevo.",
   "observed": "las direcciones aparecen sin skeleton (no se observó ninguno al abrir).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta vhchirinos+comprador@avatar-global.com tiene al menos 2 direcciones guardadas y una activa",
   "screenshots": [
    {
     "caption": "Paso 4 — direccion activa y guardadas",
     "file": "TC-B2C26-M-008-p04-direccion-activa-y-guardadas.png"
    }
   ],
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador \"Calle, dirección o lugar\" y \"Activar mi ubicación actual\".",
   "test_data": "{BASE_URL}, {COMPRADOR_PASSWORD}, {COMPRADOR_USER}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "Se muestra la pantalla de error completa con código de referencia y los 2 botones, y la dirección activa anotada no cambia.",
   "form_factor": "mobile",
   "id": "TC-B2C26-M-009",
   "name": "Verificar que un error al cargar los métodos de entrega muestra la pantalla de error con código [Mobile] [Logueado]",
   "observation": "Logueado con vhchirinos+comprador@avatar-global.com (vhchirinos+comprador@avatar-global.com) por correo + OTP leído del Gmail conectado; dirección activa 'Casa' (Calle Uno 23, La Florida). Error simulado con 500 en la carga del cliente.",
   "observed": "Coincide con el resultado esperado.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta vhchirinos+comprador@avatar-global.com tiene una dirección activa\n- DevTools (emulación Mobile 390x844) con bloqueo de la request de carga de direcciones guardadas (Network request blocking)",
   "screenshots": [
    {
     "caption": "Paso 3 — direccion activa calle uno 23 la florida",
     "file": "TC-B2C26-M-009-p03-direccion-activa-calle-uno-23-la-florida.png"
    },
    {
     "caption": "Paso 5 — pantalla de error",
     "file": "TC-B2C26-M-009-p05-pantalla-de-error.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C26-M-009.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con el Store Locator en el header.\n3. El usuario anota la dirección activa del header.\n4. El usuario toca el Store Locator del header.\n5. El sistema reemplaza el modal por la pantalla de error \"Ups, algo salió mal\" con el mensaje \"No logramos cargar la información de los métodos de entrega. Intenta otra vez.\", un código de error y los botones \"Reintentar\" y \"Volver al inicio\".",
   "test_data": "{BASE_URL}, {COMPRADOR_PASSWORD}, {COMPRADOR_USER}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "El modal \"Elige tu método de entrega\" se carga con la dirección activa y las direcciones guardadas.",
   "form_factor": "mobile",
   "id": "TC-B2C26-M-010",
   "name": "Verificar que \"Reintentar\" vuelve a cargar los métodos de entrega [Mobile] [Logueado]",
   "observation": "Esperado: un toque en 'Reintentar' vuelve a cargar los métodos de entrega. Obtenido: tras restablecer la carga, el drawer sigue en 'Ups, algo salió mal' después de un toque. (tests/B2C-26.spec.ts:645). Mismo comportamiento que el bug B2C-845 (DESCARTADO en Jira): se marca Rechazado citándolo, sin abrir un bug nuevo.",
   "observed": "tras restablecer la carga, el drawer sigue en 'Ups, algo salió mal' después de un toque.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta vhchirinos+comprador@avatar-global.com tiene direcciones guardadas\n- DevTools (emulación Mobile 390x844) con bloqueo de la request de carga de direcciones guardadas (Network request blocking)",
   "screenshots": [
    {
     "caption": "Paso 4 — pantalla de error",
     "file": "TC-B2C26-M-010-p04-pantalla-de-error.png"
    }
   ],
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema muestra la pantalla de error \"Ups, algo salió mal\".\n5. El usuario desactiva en DevTools el bloqueo de la request de carga de direcciones guardadas y toca \"Reintentar\".\n6. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador \"Calle, dirección o lugar\" y \"Activar mi ubicación actual\".",
   "test_data": "{BASE_URL}, {COMPRADOR_PASSWORD}, {COMPRADOR_USER}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "El modal se cierra y el usuario queda en el Home.",
   "form_factor": "mobile",
   "id": "TC-B2C26-M-011",
   "name": "Verificar que \"Volver al inicio\" cierra la pantalla de error y regresa al Home [Mobile] [Logueado]",
   "observation": "Causa: con la carga de direcciones bloqueada (500 en shopper-customers/customers/{id}, 70 s para que los datos queden viejos), al abrir el Store Locator desde una PLP el drawer muestra las direcciones que ya tenía y no la pantalla 'Ups, algo salió mal' (desde el Home sí aparece: M-009 Aprobado). No se llega al paso 6. Acción: indicar qué request bloquear desde la PLP o ejecutar manualmente.",
   "observed": "Ver capturas.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta vhchirinos+comprador@avatar-global.com tiene direcciones guardadas\n- DevTools (emulación Mobile 390x844) con bloqueo de la request de carga de direcciones guardadas (Network request blocking)",
   "screenshots": [
    {
     "caption": "Paso 3 — plp",
     "file": "TC-B2C26-M-011-p03-plp.png"
    }
   ],
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El usuario navega a una PLP.\n3. El sistema carga la PLP.\n4. El usuario toca el Store Locator del header.\n5. El sistema muestra la pantalla de error \"Ups, algo salió mal\".\n6. El usuario toca \"Volver al inicio\".\n7. El sistema cierra el modal y redirige al Home (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/).",
   "test_data": "{BASE_URL}, {COMPRADOR_PASSWORD}, {COMPRADOR_USER}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "Se muestra el loader y se redirige a B2C-99 con el PIN en la ubicación actual del dispositivo.",
   "form_factor": "mobile",
   "id": "TC-B2C26-M-012",
   "name": "Verificar que \"Activar mi ubicación actual\" con permiso concedido muestra loader y lleva al PIN [Mobile] [Guest]",
   "observation": "Ubicación concedida en -33.4012534, -70.5233046.",
   "observed": "Coincide con el resultado esperado.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El navegador del dispositivo tiene concedido el permiso de ubicación para https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C26-M-012.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.\n5. El usuario toca \"Activar mi ubicación actual\".\n6. El sistema muestra un loader mientras obtiene las coordenadas GPS.\n7. El sistema redirige a la confirmación de dirección con PIN en el mapa (B2C-99).",
   "test_data": "{BASE_URL}, {LATITUD_DESPACHO}, {LONGITUD_DESPACHO}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "Se muestra el modal para activar permisos y, al cerrarlo, el usuario vuelve a \"Elige tu método de entrega\".",
   "form_factor": "mobile",
   "id": "TC-B2C26-M-013",
   "name": "Verificar que sin permiso de ubicación se muestra el modal para activar permisos en el navegador [Mobile] [Guest]",
   "observation": "Sin permiso de ubicación: modal 'Unimarc no tiene acceso a tu localización'; al cerrarlo vuelve a 'Elige tu método de entrega'.",
   "observed": "Coincide con el resultado esperado.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El permiso de ubicación del navegador para https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ está en \"Preguntar\" o sin conceder",
   "screenshots": [
    {
     "caption": "Paso 6 — modal de permisos",
     "file": "TC-B2C26-M-013-p06-modal-de-permisos.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C26-M-013.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.\n5. El usuario toca \"Activar mi ubicación actual\".\n6. El sistema muestra el modal que indica activar los permisos de ubicación en la configuración del navegador.\n7. El usuario cierra el modal de permisos.\n8. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.",
   "test_data": "{BASE_URL}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "El usuario vuelve a \"Elige tu método de entrega\" sin dirección seteada y sin cambios.",
   "form_factor": "mobile",
   "id": "TC-B2C26-M-014",
   "name": "Verificar que denegar el permiso de ubicación vuelve al modal de entrega sin cambios [Mobile] [Guest]",
   "observation": "Causa: el TC deniega el permiso en el prompt nativo del navegador ('Preguntar'); Playwright no muestra ese prompt (concede o niega de antemano), así que el paso 7 no es reproducible en la automatización. Sin permiso, el sitio abre 'Unimarc no tiene acceso a tu localización' (ver M-013, Aprobado). Acción: ejecutar manualmente en un dispositivo.",
   "observed": "No ejecutado.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El permiso de ubicación del navegador para https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ está en \"Preguntar\"",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.\n5. El usuario toca \"Activar mi ubicación actual\".\n6. El sistema muestra el modal para activar permisos y el navegador solicita el permiso de ubicación.\n7. El usuario deniega el permiso de ubicación.\n8. El sistema cierra el modal de permisos y vuelve a \"Elige tu método de entrega\".",
   "test_data": "{BASE_URL}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "Se redirige a B2C-99 con el PIN en la ubicación actual del dispositivo.",
   "form_factor": "mobile",
   "id": "TC-B2C26-M-015",
   "name": "Verificar que conceder el permiso de ubicación obtiene las coordenadas y lleva al PIN [Mobile] [Guest]",
   "observation": "Permiso concedido de antemano en -33.4012534, -70.5233046: Playwright no muestra el prompt nativo, así que el paso 6 (modal + prompt) no se observa; se verifica el resultado esperado (B2C-99 con el PIN en la ubicación).",
   "observed": "Coincide con el resultado esperado.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El permiso de ubicación del navegador para https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ está en \"Preguntar\"",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C26-M-015.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.\n5. El usuario toca \"Activar mi ubicación actual\".\n6. El sistema muestra el modal para activar permisos y el navegador solicita el permiso de ubicación.\n7. El usuario concede el permiso de ubicación.\n8. El sistema obtiene las coordenadas GPS.\n9. El sistema redirige a la confirmación de dirección con PIN en el mapa (B2C-99).",
   "test_data": "{BASE_URL}, {LATITUD_DESPACHO}, {LONGITUD_DESPACHO}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "Se muestra el toast de error y el usuario puede seguir con otro método (búsqueda de Google) o volver a tocar \"Activar mi ubicación actual\".",
   "form_factor": "mobile",
   "id": "TC-B2C26-M-016",
   "name": "Verificar que una falla al obtener coordenadas muestra el toast de error y permite reintentar [Mobile] [Guest]",
   "observation": "Ubicación no disponible simulada; después Camino La Fuente 1589 Las Condes da sugerencias de Google.",
   "observed": "Coincide con el resultado esperado.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El navegador tiene concedido el permiso de ubicación\n- DevTools > Sensors con Location = \"Location unavailable\" (emulación Mobile 390x844)",
   "screenshots": [
    {
     "caption": "Paso 6 — toast de error",
     "file": "TC-B2C26-M-016-p06-toast-de-error.png"
    },
    {
     "caption": "Paso 8 — sugerencias de google",
     "file": "TC-B2C26-M-016-p08-sugerencias-de-google.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C26-M-016.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.\n5. El usuario toca \"Activar mi ubicación actual\".\n6. El sistema muestra el toast \"No pudimos obtener tu ubicación actual. Inténtalo nuevamente.\" y mantiene el modal abierto.\n7. El usuario escribe 3 o más caracteres en \"Calle, dirección o lugar\".\n8. El sistema muestra sugerencias de Google.",
   "test_data": "{BASE_URL}, {DIRECCION_DESPACHO}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "Se muestran los 4 campos con sus placeholders y el botón \"Continuar con detalle de la dirección\" está deshabilitado.",
   "form_factor": "mobile",
   "id": "TC-B2C26-M-017",
   "name": "Verificar que el formulario manual muestra sus campos con el botón Continuar deshabilitado [Mobile] [Guest]",
   "observed": "Coincide con el resultado esperado.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sin método de entrega seleccionado (ventana de incógnito)",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C26-M-017.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.\n5. El usuario escribe 2 caracteres en el buscador y toca \"Agregar\".\n6. El sistema muestra el formulario \"Dirección manual\" con Región* (\"Elegir región\"), Comuna* (\"Elegir comuna\"), Dirección* (\"Calle\") y Numeración (\"Ej. 2160\").",
   "test_data": "{BASE_URL}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "El botón permanece deshabilitado mientras falta Dirección y se habilita al completar Región, Comuna y Dirección.",
   "form_factor": "mobile",
   "id": "TC-B2C26-M-018",
   "name": "Verificar que completar los campos obligatorios habilita \"Continuar con detalle de la dirección\" [Mobile] [Guest]",
   "observation": "Metropolitana y la primera comuna; Dirección 'Calle de prueba' (la fila no declara calle).",
   "observed": "Coincide con el resultado esperado.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sin método de entrega seleccionado (ventana de incógnito)",
   "screenshots": [
    {
     "caption": "Paso 8 — region y comuna elegidas",
     "file": "TC-B2C26-M-018-p08-region-y-comuna-elegidas.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C26-M-018.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.\n5. El usuario escribe 2 caracteres en el buscador y toca \"Agregar\".\n6. El sistema muestra el formulario \"Dirección manual\" con Región* (\"Elegir región\"), Comuna* (\"Elegir comuna\"), Dirección* (\"Calle\") y Numeración (\"Ej. 2160\").\n7. El usuario elige una Región y una Comuna.\n8. El sistema mantiene deshabilitado el botón.\n9. El usuario escribe una calle en Dirección.\n10. El sistema habilita \"Continuar con detalle de la dirección\".",
   "test_data": "{BASE_URL}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "Región muestra las regiones de Chile y Comuna solo las comunas de la región elegida (no es texto libre).",
   "form_factor": "mobile",
   "id": "TC-B2C26-M-019",
   "name": "Verificar que los dropdown de Región y Comuna muestran los catálogos de Chile [Mobile] [Guest]",
   "observation": "Esperado: Comuna lista solo las comunas de la Región Metropolitana. Obtenido: la lista incluye Machalí (Región de O'Higgins). Regiones: 16. (tests/B2C-26.spec.ts:733). Mismo comportamiento que el bug B2C-1164 (DESCARTADO en Jira): se marca Rechazado citándolo, sin abrir un bug nuevo. (B2C-1164 se reportó en APP; en web se repite.)",
   "observed": "la lista incluye Machalí (Región de O'Higgins). Regiones: 16.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sin método de entrega seleccionado (ventana de incógnito)",
   "screenshots": [
    {
     "caption": "Paso 10 — 39 comunas de la rm",
     "file": "TC-B2C26-M-019-p10-39-comunas-de-la-rm.png"
    }
   ],
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.\n5. El usuario escribe 2 caracteres en el buscador y toca \"Agregar\".\n6. El sistema muestra el formulario \"Dirección manual\" con Región* (\"Elegir región\"), Comuna* (\"Elegir comuna\"), Dirección* (\"Calle\") y Numeración (\"Ej. 2160\").\n7. El usuario despliega Región.\n8. El sistema lista las regiones de Chile.\n9. El usuario elige \"Región Metropolitana\" y despliega Comuna.\n10. El sistema lista solo las comunas de la Región Metropolitana.",
   "test_data": "{BASE_URL}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "En B2C-99 se muestran precargadas Región, Comuna, Calle y Numeración y el PIN queda ubicado sobre esa dirección.",
   "form_factor": "mobile",
   "id": "TC-B2C26-M-020",
   "name": "Verificar que continuar desde el formulario manual lleva al PIN con la dirección precargada [Mobile] [Guest]",
   "observation": "Formulario con Metropolitana / Las Condes / 'Camino La Fuente' / 1589 (de Camino La Fuente 1589 Las Condes).",
   "observed": "Coincide con el resultado esperado.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sin método de entrega seleccionado (ventana de incógnito)",
   "screenshots": [
    {
     "caption": "Paso 7 — formulario completo metropolitana",
     "file": "TC-B2C26-M-020-p07-formulario-completo-metropolitana.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C26-M-020.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.\n5. El usuario escribe 2 caracteres en el buscador y toca \"Agregar\".\n6. El sistema muestra el formulario \"Dirección manual\" con Región* (\"Elegir región\"), Comuna* (\"Elegir comuna\"), Dirección* (\"Calle\") y Numeración (\"Ej. 2160\").\n7. El usuario completa Región, Comuna, Dirección y Numeración y toca \"Continuar con detalle de la dirección\".\n8. El sistema muestra un loader y redirige a la confirmación con PIN (B2C-99).",
   "test_data": "{BASE_URL}, {DIRECCION_DESPACHO}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "El header muestra la nueva dirección, el usuario sigue en la PLP y no se pidió PIN ni OTP.",
   "form_factor": "mobile",
   "id": "TC-B2C26-M-021",
   "name": "Verificar que elegir una dirección guardada la setea sin PIN ni OTP y mantiene la página [Mobile] [Logueado]",
   "observation": "Esperado: la dirección guardada se setea sin PIN ni OTP. Obtenido: se pide el OTP 'Autenticación requerida'; tras ingresarlo el header muestra 'Camino La Fuente 15…' y se sigue en la PLP. (tests/B2C-26.spec.ts:767). Mismo comportamiento que el bug B2C-1156 (DESCARTADO en Jira): se marca Rechazado citándolo, sin abrir un bug nuevo. El carro se vació para cumplir la precondición y luego se volvió a dejar activa \"Casa\".",
   "observed": "se pide el OTP 'Autenticación requerida'; tras ingresarlo el header muestra 'Camino La Fuente 15…' y se sigue en la PLP.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: PLP\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta vhchirinos+comprador@avatar-global.com tiene al menos 2 direcciones guardadas con cobertura y horarios\n- El carro está vacío",
   "screenshots": [
    {
     "caption": "Paso 5 — direcciones guardadas",
     "file": "TC-B2C26-M-021-p05-direcciones-guardadas.png"
    },
    {
     "caption": "Paso 7 — se pidio otp autenticacion requerida",
     "file": "TC-B2C26-M-021-p07-se-pidio-otp-autenticacion-requerida.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C26-M-021.png"
    }
   ],
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El usuario navega a una PLP.\n3. El sistema carga la PLP.\n4. El usuario toca el Store Locator del header.\n5. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador \"Calle, dirección o lugar\" y \"Activar mi ubicación actual\".\n6. El usuario toca una dirección guardada distinta de la activa.\n7. El sistema muestra un loader, valida cobertura y SLAs y cierra el modal.",
   "test_data": "{BASE_URL}, {COMPRADOR_PASSWORD}, {COMPRADOR_USER}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "Se muestra el toast de error, el modal vuelve a la lista y la dirección activa sigue siendo la anotada.",
   "form_factor": "mobile",
   "id": "TC-B2C26-M-022",
   "name": "Verificar que un error de API al cambiar de dirección muestra toast y mantiene la dirección anterior [Mobile] [Logueado]",
   "observation": "Esperado: toast 'Lo sentimos, no pudimos cambiar tu dirección. Inténtalo nuevamente.', el modal vuelve a la lista y la dirección activa no cambia. Obtenido: el cambio hace dos POST smu-delivery/apply (el 1º pide el OTP 'Autenticación requerida', B2C-1156; el 2º aplica con el código). Con el 2º respondiendo 500 (error simulado), el modal se cierra sin toast y el header muestra la dirección elegida ('Camino La Fuente 15…') aunque no se aplicó: al recargar vuelve 'Calle Uno 23, La Florida' (tests/B2C-26.spec.ts:817). Bug B2C-1217.",
   "observed": "el cambio hace dos POST smu-delivery/apply (el 1º pide el OTP 'Autenticación requerida', B2C-1156; el 2º aplica con el código). Con el 2º respondiendo 500 (error simulado), el modal se cierra sin toast y el header muestra la dirección elegida ('Camino La Fuente 15…') aunque no se aplicó: al recargar vuelve 'Calle Uno 23, La Florida'",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta vhchirinos+comprador@avatar-global.com tiene al menos 2 direcciones guardadas\n- Después de abrir el modal, DevTools (emulación Mobile 390x844) con bloqueo de la request de cambio de dirección activa (Network request blocking)",
   "screenshots": [
    {
     "caption": "Paso 7 — tras el otp",
     "file": "TC-B2C26-M-022-p07-tras-el-otp.png"
    }
   ],
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con el Store Locator en el header.\n3. El usuario anota la dirección activa del header.\n4. El usuario toca el Store Locator del header.\n5. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador \"Calle, dirección o lugar\" y \"Activar mi ubicación actual\".\n6. El usuario toca una dirección guardada distinta de la activa.\n7. El sistema muestra el modal con la lista de direcciones y el toast \"Lo sentimos, no pudimos cambiar tu dirección. Inténtalo nuevamente.\"",
   "test_data": "{BASE_URL}, {COMPRADOR_PASSWORD}, {COMPRADOR_USER}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "Se inicia el flujo Sin cobertura definido en B2C-123.",
   "form_factor": "mobile",
   "id": "TC-B2C26-M-023",
   "name": "Verificar que elegir una dirección guardada sin cobertura deriva al flujo Sin cobertura [Mobile] [Logueado]",
   "observation": "Logueado con vhchirinos+comprador@avatar-global.com (vhchirinos+comprador@avatar-global.com) por correo + OTP leído del Gmail conectado; dirección activa 'Casa' (Calle Uno 23, La Florida). Se eligió la guardada 'T-551' (T-551, Futrono): 'Aún no llegamos a esta dirección' (B2C-123); luego 'Cambiar método de entrega'.",
   "observed": "Coincide con el resultado esperado.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta vhchirinos+comprador@avatar-global.com tiene una dirección guardada fuera de la zona de reparto actual",
   "screenshots": [
    {
     "caption": "Paso 4 — direcciones guardadas",
     "file": "TC-B2C26-M-023-p04-direcciones-guardadas.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C26-M-023.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador \"Calle, dirección o lugar\" y \"Activar mi ubicación actual\".\n5. El usuario toca la dirección guardada sin cobertura.\n6. El sistema muestra un loader y deriva al flujo Sin cobertura (B2C-123).",
   "test_data": "{BASE_URL}, {COMPRADOR_PASSWORD}, {COMPRADOR_USER}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "Se inicia el flujo Sin horarios disponibles definido en B2C-127.",
   "form_factor": "mobile",
   "id": "TC-B2C26-M-024",
   "name": "Verificar que una dirección guardada sin horarios y sin carrito deriva a Sin horarios disponibles [Mobile] [Logueado]",
   "observation": "Causa: vhchirinos+comprador@avatar-global.com no tiene una dirección guardada con cobertura y sin ventanas horarias (sus 15 guardadas son Calle Uno 23, Av. Las Condes 14791, Camino La Fuente, Libertador B. O'Higgins 1072, Mechique y T-551), y la fila no declara cuál usar. Av Libertador Gral Bernardo O'Higgins 1072, Maipú del Excel de data no tiene cobertura en DEV (B2C-189). Acción: declarar y guardar en la cuenta una dirección con cobertura sin SLA.",
   "observed": "No ejecutado.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta vhchirinos+comprador@avatar-global.com tiene una dirección guardada con cobertura y sin ventanas horarias\n- El carro está vacío",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador \"Calle, dirección o lugar\" y \"Activar mi ubicación actual\".\n5. El usuario toca la dirección guardada sin horarios disponibles.\n6. El sistema muestra un loader y deriva al flujo Sin horarios disponibles (B2C-127).",
   "test_data": "{BASE_URL}, {COMPRADOR_PASSWORD}, {COMPRADOR_USER}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "Se inicia el flujo definido en B2C-122 (vía B2C-144).",
   "form_factor": "mobile",
   "id": "TC-B2C26-M-025",
   "name": "Verificar que elegir una dirección guardada con productos en el carro inicia el flujo de B2C-122 [Mobile] [Logueado]",
   "observation": "Causa: la precondición pide 'el carro tiene al menos un producto' y la fila no declara SKU. Acción: declarar el SKU (p. ej. 000000000000675191-UN).",
   "observed": "No ejecutado.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta vhchirinos+comprador@avatar-global.com tiene al menos 2 direcciones guardadas con cobertura\n- El carro tiene al menos un producto",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador \"Calle, dirección o lugar\" y \"Activar mi ubicación actual\".\n5. El usuario toca una dirección guardada distinta de la activa.\n6. El sistema muestra un loader y inicia el flujo de B2C-122.",
   "test_data": "{BASE_URL}, {COMPRADOR_PASSWORD}, {COMPRADOR_USER}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "Cada dirección guardada no activa muestra el menú ⋮ y la dirección activa no lo muestra.",
   "form_factor": "mobile",
   "id": "TC-B2C26-M-026",
   "name": "Verificar que el menú ⋮ aparece solo en las direcciones guardadas no activas [Mobile] [Logueado]",
   "observation": "Esperado: la dirección activa no muestra el menú ⋮. Obtenido: la activa ('Casa') también muestra el menú ⋮. (tests/B2C-26.spec.ts:836). Mismo comportamiento que el bug B2C-1157 (DESCARTADO en Jira): se marca Rechazado citándolo, sin abrir un bug nuevo.",
   "observed": "la activa ('Casa') también muestra el menú ⋮.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta vhchirinos+comprador@avatar-global.com tiene al menos 2 direcciones guardadas y una activa",
   "screenshots": [
    {
     "caption": "Paso 4 — direcciones guardadas",
     "file": "TC-B2C26-M-026-p04-direcciones-guardadas.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C26-M-026.png"
    }
   ],
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador \"Calle, dirección o lugar\" y \"Activar mi ubicación actual\".",
   "test_data": "{BASE_URL}, {COMPRADOR_PASSWORD}, {COMPRADOR_USER}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "El modal de confirmación se cierra y la dirección sigue en la lista.",
   "form_factor": "mobile",
   "id": "TC-B2C26-M-027",
   "name": "Verificar que \"No gracias\" en la confirmación de eliminar mantiene la dirección [Mobile] [Logueado]",
   "observation": "Logueado con vhchirinos+comprador@avatar-global.com (vhchirinos+comprador@avatar-global.com) por correo + OTP leído del Gmail conectado; dirección activa 'Casa' (Calle Uno 23, La Florida).",
   "observed": "Coincide con el resultado esperado.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta vhchirinos+comprador@avatar-global.com tiene al menos 2 direcciones guardadas y una activa",
   "screenshots": [
    {
     "caption": "Paso 6 — quieres eliminar tu direccion",
     "file": "TC-B2C26-M-027-p06-quieres-eliminar-tu-direccion.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C26-M-027.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador \"Calle, dirección o lugar\" y \"Activar mi ubicación actual\".\n5. El usuario toca ⋮ en una dirección no activa y luego \"Eliminar dirección\".\n6. El sistema muestra el modal \"¿Quieres eliminar tu dirección?\" con \"Aceptar\" y \"No gracias\".\n7. El usuario toca \"No gracias\".\n8. El sistema cierra el modal de confirmación.",
   "test_data": "{BASE_URL}, {COMPRADOR_PASSWORD}, {COMPRADOR_USER}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "La dirección desaparece de la lista y el toast de éxito se cierra solo a los 4 segundos.",
   "form_factor": "mobile",
   "id": "TC-B2C26-M-028",
   "name": "Verificar que \"Aceptar\" elimina la dirección y muestra el toast de éxito [Mobile] [Logueado]",
   "observation": "Esperado: loader, la dirección se quita de la lista y toast de éxito que se cierra a los 4 s. Obtenido: tras 'Aceptar' aparece el toast 'Tu dirección fue eliminada con éxito.' pero la dirección sigue en la lista del modal abierto (la lista no se actualiza; al reabrir el modal ya no está: el DELETE sí se aplicó). Reproducido 4/4 en Desktop y Mobile. (tests/B2C-26.spec.ts:873). Bug B2C-1216. Se eliminó una guardada duplicada (quedan copias iguales).",
   "observed": "tras 'Aceptar' aparece el toast 'Tu dirección fue eliminada con éxito.' pero la dirección sigue en la lista del modal abierto (la lista no se actualiza; al reabrir el modal ya no está: el DELETE sí se aplicó). Reproducido 4/4 en Desktop y Mobile.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta vhchirinos+comprador@avatar-global.com tiene al menos 2 direcciones guardadas y una activa",
   "screenshots": [
    {
     "caption": "Paso 8 — avenida las condes 3 eliminada",
     "file": "TC-B2C26-M-028-p08-avenida-las-condes-3-eliminada.png"
    },
    {
     "caption": "Paso 9 — la direccion sigue en la lista",
     "file": "TC-B2C26-M-028-p09-la-direccion-sigue-en-la-lista.png"
    }
   ],
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador \"Calle, dirección o lugar\" y \"Activar mi ubicación actual\".\n5. El usuario toca ⋮ en una dirección no activa y luego \"Eliminar dirección\".\n6. El sistema muestra el modal \"¿Quieres eliminar tu dirección?\".\n7. El usuario toca \"Aceptar\".\n8. El sistema muestra un loader, quita la dirección de la lista, cierra el modal de confirmación y muestra el toast \"Tu dirección fue eliminada con éxito.\".",
   "test_data": "{BASE_URL}, {COMPRADOR_PASSWORD}, {COMPRADOR_USER}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "Se muestra el toast de error (se cierra solo con la X) y la dirección sigue en la lista.",
   "form_factor": "mobile",
   "id": "TC-B2C26-M-029",
   "name": "Verificar que un error al eliminar muestra el toast de error y la dirección permanece [Mobile] [Logueado]",
   "observation": "Logueado con vhchirinos+comprador@avatar-global.com (vhchirinos+comprador@avatar-global.com) por correo + OTP leído del Gmail conectado; dirección activa 'Casa' (Calle Uno 23, La Florida). Error simulado con 500 en el DELETE de la dirección: el toast sigue visible a los 7 s.",
   "observed": "Coincide con el resultado esperado.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta vhchirinos+comprador@avatar-global.com tiene al menos 2 direcciones guardadas y una activa\n- Después de abrir el modal, DevTools (emulación Mobile 390x844) con bloqueo de la request de eliminación de dirección (Network request blocking)",
   "screenshots": [
    {
     "caption": "Paso 8 — toast de error",
     "file": "TC-B2C26-M-029-p08-toast-de-error.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C26-M-029.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador \"Calle, dirección o lugar\" y \"Activar mi ubicación actual\".\n5. El usuario toca ⋮ en una dirección no activa y luego \"Eliminar dirección\".\n6. El sistema muestra el modal \"¿Quieres eliminar tu dirección?\".\n7. El usuario toca \"Aceptar\".\n8. El sistema muestra un loader y luego el toast \"Lo sentimos, no pudimos eliminar tu dirección. Inténtalo nuevamente.\".",
   "test_data": "{BASE_URL}, {COMPRADOR_PASSWORD}, {COMPRADOR_USER}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "El header muestra ícono de despacho + dirección de la última compra + \"Desde\" + fecha + horario + label de precio o condición de despacho.",
   "form_factor": "mobile",
   "id": "TC-B2C26-M-030",
   "name": "Verificar que el header del logueado sin dirección en sesión muestra la de su última compra [Mobile] [Logueado]",
   "observation": "Login en ventana nueva con vhchirinos+comprador@avatar-global.com por correo + OTP. Las compras de la cuenta son en Calle Uno 23, La Florida: el header muestra 'Calle Uno 23, La Florida · Desde: <día> <hora> hrs. · $2.990'.",
   "observed": "Coincide con el resultado esperado.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- La cuenta vhchirinos+comprador@avatar-global.com tiene al menos una compra completada\n- Sin dirección activa en la sesión (ventana de incógnito)",
   "screenshots": [
    {
     "caption": "Paso 2 — home sin sesion",
     "file": "TC-B2C26-M-030-p02-home-sin-sesion.png"
    },
    {
     "caption": "Paso 4 — header calle uno 23 la florida desde jue 15 10 18 00 hrs 2 9",
     "file": "TC-B2C26-M-030-p04-header-calle-uno-23-la-florida-desde-jue-15-10-18-00-hrs-2-9.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con el Store Locator en el header.\n3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n4. El sistema autentica al usuario y muestra en el Store Locator del header la dirección de la última compra completada.",
   "test_data": "{BASE_URL}, {COMPRADOR_PASSWORD}, {COMPRADOR_USER}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "El header muestra la dirección seteada en la sesión y el modal la muestra como activa.",
   "form_factor": "mobile",
   "id": "TC-B2C26-M-031",
   "name": "Verificar que el header del logueado sin historial muestra la dirección seteada en la sesión [Mobile] [Logueado]",
   "observation": "Causa: el paso 3 'configura una dirección de despacho' y la fila no declara cuál (solo https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ y vhchirinos+noaddress@avatar-global.com). Además la precondición nombra vhchirinos+comprador@avatar-global.com, que tiene compras, y declara vhchirinos+noaddress@avatar-global.com. Acción: declarar la dirección y alinear la cuenta.",
   "observed": "No ejecutado.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta vhchirinos+comprador@avatar-global.com no tiene historial de compras",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con el Store Locator en el header.\n3. El usuario configura una dirección de despacho desde el Store Locator.\n4. El sistema muestra la dirección seteada en el Store Locator del header.\n5. El usuario toca el Store Locator del header.\n6. El sistema abre el modal con la dirección seteada marcada como activa.",
   "test_data": "{BASE_URL}, {COMPRADOR_MEMBRESIA_PASSWORD}, {COMPRADOR_MEMBRESIA_USER}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "El header muestra ícono de despacho + calle + numeración (si aplica) + comuna + ícono de edición.",
   "form_factor": "mobile",
   "id": "TC-B2C26-M-032",
   "name": "Verificar que el header del invitado muestra la dirección de la sesión con el formato definido [Mobile] [Guest]",
   "observation": "Esperado: header con ícono + calle + numeración + comuna + ícono de edición. Obtenido: 'Camino La Fuente 15…' (nombre truncado a 20 caracteres, sin numeración completa ni comuna). (tests/B2C-26.spec.ts:915). Mismo comportamiento que el bug B2C-1159 (DESCARTADO en Jira): se marca Rechazado citándolo, sin abrir un bug nuevo.",
   "observed": "'Camino La Fuente 15…' (nombre truncado a 20 caracteres, sin numeración completa ni comuna).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sin método de entrega seleccionado (ventana de incógnito)",
   "screenshots": [
    {
     "caption": "Paso 4 — header camino la fuente 15 desde jue 15 10 18 00 hrs 2 990",
     "file": "TC-B2C26-M-032-p04-header-camino-la-fuente-15-desde-jue-15-10-18-00-hrs-2-990.png"
    }
   ],
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con el Store Locator en el header.\n3. El usuario configura una dirección de despacho desde el Store Locator.\n4. El sistema muestra la dirección en el Store Locator del header.",
   "test_data": "{BASE_URL}, {DIRECCION_DESPACHO}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "Tras cerrar el navegador, el header vuelve a \"Elige una forma de entrega\" y la dirección anterior no se muestra.",
   "form_factor": "mobile",
   "id": "TC-B2C26-M-033",
   "name": "Verificar que la dirección del invitado no persiste al cerrar el navegador [Mobile] [Guest]",
   "observation": "Dirección Camino La Fuente 1589 Las Condes; se cerró el contexto del navegador y se abrió uno nuevo.",
   "observed": "Coincide con el resultado esperado.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sin método de entrega seleccionado (ventana de incógnito)",
   "screenshots": [
    {
     "caption": "Paso 4 — header camino la fuente 15",
     "file": "TC-B2C26-M-033-p04-header-camino-la-fuente-15.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C26-M-033.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con el Store Locator en el header.\n3. El usuario configura una dirección de despacho desde el Store Locator.\n4. El sistema muestra la dirección en el header.\n5. El usuario cierra todas las ventanas de incógnito y vuelve a ingresar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ en una nueva ventana de incógnito.\n6. El sistema carga el Home con \"Elige una forma de entrega\" en el Store Locator.",
   "test_data": "{BASE_URL}, {DIRECCION_DESPACHO}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "Se inicia el flujo de asociación de dirección definido en B2C-124.",
   "form_factor": "mobile",
   "id": "TC-B2C26-M-034",
   "name": "Verificar que iniciar sesión con dirección de invitado activa inicia el flujo de asociación [Mobile] [Guest]",
   "observation": "Causa: el paso 5 inicia sesión con vhchirinos+comprador@avatar-global.com pero la fila no lo declara en Test data (solo https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ y Camino La Fuente 1589 Las Condes). Acción: declarar vhchirinos+comprador@avatar-global.com. El flujo equivale a la parte 3 de D-014 (OTP 'Autenticación requerida' al iniciar sesión, visto el 2026-10-15).",
   "observed": "No ejecutado.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sin método de entrega seleccionado (ventana de incógnito)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con el Store Locator en el header.\n3. El usuario configura una dirección de despacho desde el Store Locator.\n4. El sistema muestra la dirección en el header.\n5. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n6. El sistema autentica al usuario e inicia el flujo de asociación de dirección (B2C-124).",
   "test_data": "{BASE_URL}, {DIRECCION_DESPACHO}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "En Home, PLP, PDP, SRP y Carro el header muestra la misma dirección activa y no se pide volver a configurarla.",
   "form_factor": "mobile",
   "id": "TC-B2C26-M-035",
   "name": "Verificar que la dirección activa se mantiene en el header al navegar por el sitio [Mobile] [Logueado]",
   "observation": "Esperado: la misma dirección activa en Home, PLP, PDP, SRP y Carro. Obtenido: Home, PLP, PDP y SRP OK; el Carro usa el header simplificado sin Store Locator. (tests/B2C-26.spec.ts:941). Mismo comportamiento que el bug B2C-846 (DESCARTADO en Jira): se marca Rechazado citándolo, sin abrir un bug nuevo.",
   "observed": "Home, PLP, PDP y SRP OK; el Carro usa el header simplificado sin Store Locator.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta vhchirinos+comprador@avatar-global.com tiene una dirección activa",
   "screenshots": [
    {
     "caption": "Paso 2 — store locator en home",
     "file": "TC-B2C26-M-035-p02-store-locator-en-home.png"
    },
    {
     "caption": "Paso 3 — store locator en plp",
     "file": "TC-B2C26-M-035-p03-store-locator-en-plp.png"
    },
    {
     "caption": "Paso 4 — store locator en pdp",
     "file": "TC-B2C26-M-035-p04-store-locator-en-pdp.png"
    },
    {
     "caption": "Paso 5 — store locator en srp",
     "file": "TC-B2C26-M-035-p05-store-locator-en-srp.png"
    },
    {
     "caption": "Paso 6 — store locator en carro",
     "file": "TC-B2C26-M-035-p06-store-locator-en-carro.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C26-M-035.png"
    }
   ],
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con la dirección activa en el Store Locator.\n3. El usuario navega a una PLP, abre una PDP, busca un producto y abre el Carro.\n4. El sistema muestra la misma dirección activa en el Store Locator en cada página, sin solicitar reconfigurarla.",
   "test_data": "{BASE_URL}, {COMPRADOR_PASSWORD}, {COMPRADOR_USER}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "El header muestra la dirección de la última compra completada o, si no hay historial, la última dirección seteada.",
   "form_factor": "mobile",
   "id": "TC-B2C26-M-036",
   "name": "Verificar que al reiniciar sesión se recupera la dirección de la última compra o la última seteada [Mobile] [Logueado]",
   "observation": "Logueado con vhchirinos+comprador@avatar-global.com (vhchirinos+comprador@avatar-global.com) por correo + OTP leído del Gmail conectado; dirección activa 'Casa' (Calle Uno 23, La Florida). Cerrar sesión desde el menú de la cuenta y volver a entrar por correo + OTP: 'Calle Uno 23, La Florida' antes y después.",
   "observed": "Coincide con el resultado esperado.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta vhchirinos+comprador@avatar-global.com tiene una dirección activa",
   "screenshots": [
    {
     "caption": "Paso 3 — direccion activa calle uno 23 la florida",
     "file": "TC-B2C26-M-036-p03-direccion-activa-calle-uno-23-la-florida.png"
    },
    {
     "caption": "Paso 4 — sesion cerrada",
     "file": "TC-B2C26-M-036-p04-sesion-cerrada.png"
    },
    {
     "caption": "Paso 5 — tras volver a iniciar sesion calle uno 23 la florida",
     "file": "TC-B2C26-M-036-p05-tras-volver-a-iniciar-sesion-calle-uno-23-la-florida.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con el Store Locator en el header.\n3. El usuario anota la dirección activa del header.\n4. El usuario cierra sesión y vuelve a iniciar sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n5. El sistema autentica al usuario y muestra una dirección en el Store Locator del header.",
   "test_data": "{BASE_URL}, {COMPRADOR_PASSWORD}, {COMPRADOR_USER}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "El campo Dirección acepta \"+\", \"-\" y \"/\" sin error y sin eliminar caracteres, y en B2C-99 la calle se muestra precargada como \"Pasaje Los Aromos 3-A / Lote 5+\".",
   "form_factor": "desktop",
   "id": "TC-B2C26-D-016",
   "name": "Verificar que el formulario manual acepta los caracteres especiales +, - y / en la dirección [Desktop] [Guest]",
   "observation": "Región Metropolitana y comuna Las Condes (la fila no declara comuna); Numeración 120 del paso.",
   "observed": "Coincide con el resultado esperado.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- Sin método de entrega seleccionado (ventana de incógnito)",
   "screenshots": [
    {
     "caption": "Paso 8 — formulario con caracteres especiales",
     "file": "TC-B2C26-D-016-p08-formulario-con-caracteres-especiales.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C26-D-016.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador de escritorio.\n2. El sistema carga el Home con el Store Locator en el header.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.\n5. El usuario escribe 2 caracteres en el buscador y hace clic en \"Agregar\".\n6. El sistema muestra el formulario \"Dirección manual\" con Región* (\"Elegir región\"), Comuna* (\"Elegir comuna\"), Dirección* (\"Calle\") y Numeración (\"Ej. 2160\").\n7. El usuario selecciona una Región y una Comuna con cobertura, escribe Pasaje Los Aromos 3-A / Lote 5+ en Dirección y 120 en Numeración.\n8. El sistema mantiene el texto tal como se escribió, sin mensaje de error, y habilita \"Continuar con detalle de la dirección\".\n9. El usuario hace clic en \"Continuar con detalle de la dirección\".\n10. El sistema muestra un loader y redirige a la confirmación con PIN (B2C-99).",
   "test_data": "{BASE_URL}, {DIRECCION_CARACTERES_ESPECIALES}",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "La dirección activa se muestra con \"S/N\" en el lugar de la numeración (calle, S/N, comuna y región) en el modal y en el Store Locator del header.",
   "form_factor": "desktop",
   "id": "TC-B2C26-D-017",
   "name": "Verificar que una dirección manual sin numeración se visualiza con \"S/N\" [Desktop] [Guest]",
   "observation": "Esperado: 'Las Condes, S/N, Las Condes, Metropolitana' en el modal y en el header. Obtenido: header 'Las Condes S/N' (OK) y modal 'Las Condes S/N' sin comuna ni región. (tests/B2C-26.spec.ts:503). Mismo comportamiento que el bug B2C-1158 (DESCARTADO en Jira): se marca Rechazado citándolo, sin abrir un bug nuevo.",
   "observed": "header 'Las Condes S/N' (OK) y modal 'Las Condes S/N' sin comuna ni región.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- Sin método de entrega seleccionado (ventana de incógnito)\n- La dirección a ingresar tiene cobertura y horarios disponibles",
   "screenshots": [
    {
     "caption": "Paso 7 — formulario sin numeracion",
     "file": "TC-B2C26-D-017-p07-formulario-sin-numeracion.png"
    },
    {
     "caption": "Paso 8 — b2c 99",
     "file": "TC-B2C26-D-017-p08-b2c-99.png"
    },
    {
     "caption": "Paso 10 — header las condes s n",
     "file": "TC-B2C26-D-017-p10-header-las-condes-s-n.png"
    },
    {
     "caption": "Paso 12 — direccion activa las condes s n",
     "file": "TC-B2C26-D-017-p12-direccion-activa-las-condes-s-n.png"
    }
   ],
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador de escritorio.\n2. El sistema carga el Home con el Store Locator en el header.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.\n5. El usuario escribe 2 caracteres en el buscador y hace clic en \"Agregar\".\n6. El sistema muestra el formulario \"Dirección manual\" con Región* (\"Elegir región\"), Comuna* (\"Elegir comuna\"), Dirección* (\"Calle\") y Numeración (\"Ej. 2160\").\n7. El usuario completa Región, Comuna y Dirección con Metropolitana, Las Condes, Las Condes, deja Numeración vacío y hace clic en \"Continuar con detalle de la dirección\".\n8. El sistema muestra un loader y redirige a la confirmación con PIN (B2C-99).\n9. El usuario confirma la dirección en B2C-99 y completa el flujo hasta dejarla seteada.\n10. El sistema cierra el flujo y muestra la dirección en el Store Locator del header.\n11. El usuario hace clic en el Store Locator del header.\n12. El sistema abre el modal con la dirección activa marcada en \"Dirección de despacho\".",
   "test_data": "{BASE_URL}, {DIRECCION_SIN_NUMERO}",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "La dirección nueva queda guardada en el perfil y se muestra con \"S/N\" como numeración en el modal, antes y después de volver a iniciar sesión.",
   "form_factor": "desktop",
   "id": "TC-B2C26-D-018",
   "name": "Verificar que una dirección sin numeración se guarda en el perfil con \"S/N\" [Desktop] [Logueado]",
   "observation": "Logueado con vhchirinos+comprador@avatar-global.com (vhchirinos+comprador@avatar-global.com) por correo + OTP leído del Gmail conectado; dirección activa 'Casa' (Calle Uno 23, La Florida). Se vació el carro (precondición). Formulario con Metropolitana, Las Condes, Las Condes (Metropolitana / Las Condes / calle 'Las Condes'), OTP 'Autenticación requerida' al guardar. Después se eliminó la dirección agregada y se volvió a dejar activa 'Casa'.",
   "observed": "Coincide con el resultado esperado.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La dirección a ingresar tiene cobertura y horarios disponibles\n- El carro está vacío",
   "screenshots": [
    {
     "caption": "Paso 7 — formulario sin numeracion",
     "file": "TC-B2C26-D-018-p07-formulario-sin-numeracion.png"
    },
    {
     "caption": "Paso 8 — direccion seteada",
     "file": "TC-B2C26-D-018-p08-direccion-seteada.png"
    },
    {
     "caption": "Paso 9 — lista con la direccion nueva",
     "file": "TC-B2C26-D-018-p09-lista-con-la-direccion-nueva.png"
    },
    {
     "caption": "Paso 10 — tras volver a iniciar sesion",
     "file": "TC-B2C26-D-018-p10-tras-volver-a-iniciar-sesion.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador de escritorio.\n2. El sistema carga el Home con el Store Locator en el header.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema muestra el skeleton de carga y luego la dirección activa, las direcciones guardadas y el buscador \"Calle, dirección o lugar\".\n5. El usuario escribe 2 caracteres en el buscador y hace clic en \"Agregar\".\n6. El sistema muestra el formulario \"Dirección manual\" con Región* (\"Elegir región\"), Comuna* (\"Elegir comuna\"), Dirección* (\"Calle\") y Numeración (\"Ej. 2160\").\n7. El usuario completa Región, Comuna y Dirección con Metropolitana, Las Condes, Las Condes, deja Numeración vacío y hace clic en \"Continuar con detalle de la dirección\".\n8. El usuario confirma la dirección en B2C-99 y completa el flujo (incluido el OTP de B2C-125 si se solicita) hasta dejarla seteada.\n9. El usuario hace clic en el Store Locator del header y revisa la dirección nueva en la lista.\n10. El usuario cierra sesión, vuelve a iniciar sesión con vhchirinos+comprador@avatar-global.com y abre nuevamente el Store Locator.",
   "test_data": "{BASE_URL}, {COMPRADOR_PASSWORD}, {COMPRADOR_USER}, {DIRECCION_SIN_NUMERO}",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "El campo Dirección acepta \"+\", \"-\" y \"/\" sin error y sin eliminar caracteres, y en B2C-99 la calle se muestra precargada como \"Pasaje Los Aromos 3-A / Lote 5+\".",
   "form_factor": "mobile",
   "id": "TC-B2C26-M-037",
   "name": "Verificar que el formulario manual acepta los caracteres especiales +, - y / en la dirección [Mobile] [Guest]",
   "observation": "Región Metropolitana y comuna Las Condes (la fila no declara comuna); Numeración 120 del paso.",
   "observed": "Coincide con el resultado esperado.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sin método de entrega seleccionado (ventana de incógnito)",
   "screenshots": [
    {
     "caption": "Paso 8 — formulario con caracteres especiales",
     "file": "TC-B2C26-M-037-p08-formulario-con-caracteres-especiales.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C26-M-037.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.\n5. El usuario escribe 2 caracteres en el buscador y toca \"Agregar\".\n6. El sistema muestra el formulario \"Dirección manual\" con Región* (\"Elegir región\"), Comuna* (\"Elegir comuna\"), Dirección* (\"Calle\") y Numeración (\"Ej. 2160\").\n7. El usuario selecciona una Región y una Comuna con cobertura, escribe Pasaje Los Aromos 3-A / Lote 5+ en Dirección y 120 en Numeración.\n8. El sistema mantiene el texto tal como se escribió, sin mensaje de error, y habilita \"Continuar con detalle de la dirección\".\n9. El usuario toca \"Continuar con detalle de la dirección\".\n10. El sistema muestra un loader y redirige a la confirmación con PIN (B2C-99).",
   "test_data": "{BASE_URL}, {DIRECCION_CARACTERES_ESPECIALES}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "La dirección activa se muestra con \"S/N\" en el lugar de la numeración (calle, S/N, comuna y región) en el modal y en el Store Locator del header.",
   "form_factor": "mobile",
   "id": "TC-B2C26-M-038",
   "name": "Verificar que una dirección manual sin numeración se visualiza con \"S/N\" [Mobile] [Guest]",
   "observation": "Esperado: 'Las Condes, S/N, Las Condes, Metropolitana' en el modal y en el header. Obtenido: header 'Las Condes S/N' (OK) y modal 'Las Condes S/N' sin comuna ni región. (tests/B2C-26.spec.ts:969). Mismo comportamiento que el bug B2C-1158 (DESCARTADO en Jira): se marca Rechazado citándolo, sin abrir un bug nuevo.",
   "observed": "header 'Las Condes S/N' (OK) y modal 'Las Condes S/N' sin comuna ni región.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sin método de entrega seleccionado (ventana de incógnito)\n- La dirección a ingresar tiene cobertura y horarios disponibles",
   "screenshots": [
    {
     "caption": "Paso 7 — formulario sin numeracion",
     "file": "TC-B2C26-M-038-p07-formulario-sin-numeracion.png"
    },
    {
     "caption": "Paso 8 — b2c 99",
     "file": "TC-B2C26-M-038-p08-b2c-99.png"
    },
    {
     "caption": "Paso 10 — header las condes s n",
     "file": "TC-B2C26-M-038-p10-header-las-condes-s-n.png"
    },
    {
     "caption": "Paso 12 — direccion activa las condes s n",
     "file": "TC-B2C26-M-038-p12-direccion-activa-las-condes-s-n.png"
    }
   ],
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.\n5. El usuario escribe 2 caracteres en el buscador y toca \"Agregar\".\n6. El sistema muestra el formulario \"Dirección manual\" con Región* (\"Elegir región\"), Comuna* (\"Elegir comuna\"), Dirección* (\"Calle\") y Numeración (\"Ej. 2160\").\n7. El usuario completa Región, Comuna y Dirección con Metropolitana, Las Condes, Las Condes, deja Numeración vacío y toca \"Continuar con detalle de la dirección\".\n8. El sistema muestra un loader y redirige a la confirmación con PIN (B2C-99).\n9. El usuario confirma la dirección en B2C-99 y completa el flujo hasta dejarla seteada.\n10. El sistema cierra el flujo y muestra la dirección en el Store Locator del header.\n11. El usuario toca el Store Locator del header.\n12. El sistema abre el modal con la dirección activa marcada en \"Dirección de despacho\".",
   "test_data": "{BASE_URL}, {DIRECCION_SIN_NUMERO}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "La dirección nueva queda guardada en el perfil y se muestra con \"S/N\" como numeración en el modal, antes y después de volver a iniciar sesión.",
   "form_factor": "mobile",
   "id": "TC-B2C26-M-039",
   "name": "Verificar que una dirección sin numeración se guarda en el perfil con \"S/N\" [Mobile] [Logueado]",
   "observation": "Logueado con vhchirinos+comprador@avatar-global.com (vhchirinos+comprador@avatar-global.com) por correo + OTP leído del Gmail conectado; dirección activa 'Casa' (Calle Uno 23, La Florida). Se vació el carro (precondición). Formulario con Metropolitana, Las Condes, Las Condes; OTP al guardar y al volver a iniciar sesión. Después se eliminó la dirección agregada y se volvió a dejar activa 'Casa'.",
   "observed": "Coincide con el resultado esperado.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La dirección a ingresar tiene cobertura y horarios disponibles\n- El carro está vacío",
   "screenshots": [
    {
     "caption": "Paso 7 — formulario sin numeracion",
     "file": "TC-B2C26-M-039-p07-formulario-sin-numeracion.png"
    },
    {
     "caption": "Paso 8 — direccion seteada",
     "file": "TC-B2C26-M-039-p08-direccion-seteada.png"
    },
    {
     "caption": "Paso 9 — lista con la direccion nueva",
     "file": "TC-B2C26-M-039-p09-lista-con-la-direccion-nueva.png"
    },
    {
     "caption": "Paso 10 — tras volver a iniciar sesion",
     "file": "TC-B2C26-M-039-p10-tras-volver-a-iniciar-sesion.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema muestra el skeleton de carga y luego la dirección activa, las direcciones guardadas y el buscador \"Calle, dirección o lugar\".\n5. El usuario escribe 2 caracteres en el buscador y toca \"Agregar\".\n6. El sistema muestra el formulario \"Dirección manual\" con Región* (\"Elegir región\"), Comuna* (\"Elegir comuna\"), Dirección* (\"Calle\") y Numeración (\"Ej. 2160\").\n7. El usuario completa Región, Comuna y Dirección con Metropolitana, Las Condes, Las Condes, deja Numeración vacío y toca \"Continuar con detalle de la dirección\".\n8. El usuario confirma la dirección en B2C-99 y completa el flujo (incluido el OTP de B2C-125 si se solicita) hasta dejarla seteada.\n9. El usuario toca el Store Locator del header y revisa la dirección nueva en la lista.\n10. El usuario cierra sesión, vuelve a iniciar sesión con vhchirinos+comprador@avatar-global.com y abre nuevamente el Store Locator.",
   "test_data": "{BASE_URL}, {COMPRADOR_PASSWORD}, {COMPRADOR_USER}, {DIRECCION_SIN_NUMERO}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "Google muestra la sugerencia del Plus Code sin errores; al seleccionarla se redirige a la confirmación con PIN (B2C-99) con Región Metropolitana y Comuna Las Condes precargadas y el PIN sobre la ubicación del Plus Code; al confirmar, el modal se cierra y el Store Locator del header muestra la dirección seteada, sin mensajes de error.",
   "form_factor": "desktop",
   "id": "TC-B2C26-D-019",
   "name": "Verificar que al buscar un Plus Code de Google la dirección se agrega sin problemas [Desktop] [Guest]",
   "observation": "Causa: HG74+86G Las Condes, Chile (HG74+86G Las Condes, Chile) sugiere 'HG74+86G Las Condes, Chile' y B2C-99 muestra 'Las Condes, Región Metropolitana', pero al tocar 'Agregar dirección' el sitio abre 'Aún no llegamos a esta dirección' (sin cobertura): no se llega al paso 10 (cierre del modal y header con la dirección). Acción: declarar un Plus Code dentro de la zona de cobertura.",
   "observed": "Ver capturas.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- Sin método de entrega seleccionado (ventana de incógnito)",
   "screenshots": [
    {
     "caption": "TC B2C26 D 019 x01 aun no llegamos a esta direccion",
     "file": "TC-B2C26-D-019-x01-aun-no-llegamos-a-esta-direccion.png"
    },
    {
     "caption": "Paso 6 — sugerencias hg74 86g las condes chile",
     "file": "TC-B2C26-D-019-p06-sugerencias-hg74-86g-las-condes-chile.png"
    },
    {
     "caption": "Paso 8 — b2c 99",
     "file": "TC-B2C26-D-019-p08-b2c-99.png"
    },
    {
     "caption": "Paso 8 — detalles con las condes metropolitana",
     "file": "TC-B2C26-D-019-p08-detalles-con-las-condes-metropolitana.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El sistema carga el Home con el Store Locator en el header.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.\n5. El usuario escribe HG74+86G Las Condes, Chile en \"Calle, dirección o lugar\".\n6. El sistema muestra la sugerencia de Google correspondiente al Plus Code (Las Condes).\n7. El usuario selecciona la sugerencia.\n8. El sistema redirige a la confirmación de dirección con PIN en el mapa (B2C-99) con la dirección precargada.\n9. El usuario confirma la dirección.\n10. El sistema cierra el modal y actualiza el Store Locator del header.",
   "test_data": "{BASE_URL}, {DIRECCION_PLUS_CODE}",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "Google muestra la sugerencia del Plus Code sin errores; al tocarla se redirige a la confirmación con PIN (B2C-99) con Región Metropolitana y Comuna Las Condes precargadas y el PIN sobre la ubicación del Plus Code; al confirmar, el modal se cierra y el Store Locator del header muestra la dirección seteada, sin mensajes de error.",
   "form_factor": "mobile",
   "id": "TC-B2C26-M-040",
   "name": "Verificar que al buscar un Plus Code de Google la dirección se agrega sin problemas [Mobile] [Guest]",
   "observation": "Causa: HG74+86G Las Condes, Chile (HG74+86G Las Condes, Chile) sugiere 'HG74+86G Las Condes, Chile' y B2C-99 muestra 'Las Condes, Región Metropolitana', pero al tocar 'Agregar dirección' el sitio abre 'Aún no llegamos a esta dirección' (sin cobertura): no se llega al paso 10 (cierre del modal y header con la dirección). Acción: declarar un Plus Code dentro de la zona de cobertura. (la captura x01 es de la exploración en Desktop 1440x900)",
   "observed": "Ver capturas.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sin método de entrega seleccionado (ventana de incógnito)",
   "screenshots": [
    {
     "caption": "TC B2C26 M 040 x01 aun no llegamos a esta direccion",
     "file": "TC-B2C26-M-040-x01-aun-no-llegamos-a-esta-direccion.png"
    },
    {
     "caption": "Paso 6 — sugerencias hg74 86g las condes chile",
     "file": "TC-B2C26-M-040-p06-sugerencias-hg74-86g-las-condes-chile.png"
    },
    {
     "caption": "Paso 8 — b2c 99",
     "file": "TC-B2C26-M-040-p08-b2c-99.png"
    },
    {
     "caption": "Paso 8 — detalles con las condes metropolitana",
     "file": "TC-B2C26-M-040-p08-detalles-con-las-condes-metropolitana.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.\n5. El usuario escribe HG74+86G Las Condes, Chile en \"Calle, dirección o lugar\".\n6. El sistema muestra la sugerencia de Google correspondiente al Plus Code (Las Condes).\n7. El usuario toca la sugerencia.\n8. El sistema redirige a la confirmación de dirección con PIN en el mapa (B2C-99) con la dirección precargada.\n9. El usuario confirma la dirección.\n10. El sistema cierra el modal y actualiza el Store Locator del header.",
   "test_data": "{BASE_URL}, {DIRECCION_PLUS_CODE}",
   "viewport": "390x844"
  }
 ]
}
-->
