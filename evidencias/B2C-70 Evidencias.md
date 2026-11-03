# B2C-70 - Store Locator del header - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-70 |
| Última actualización | 2026-11-02 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | chromium |
| Origen de los TC | Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-70 WEB Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 9 |
| Aprobado | 2 |
| Rechazado | 2 |
| **Total** | **13** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-02 | 12 | TC-B2C70-D-003, TC-B2C70-M-005, TC-B2C70-M-006, TC-B2C70-M-007, TC-B2C70-M-008, TC-B2C70-M-009, TC-B2C70-M-010, TC-B2C70-M-011, TC-B2C70-M-012, TC-B2C70-M-013, TC-B2C70-M-014, TC-B2C70-M-015 |
| 2026-10-19 | 6 | TC-B2C70-D-002, TC-B2C70-D-003, TC-B2C70-M-005, TC-B2C70-M-006, TC-B2C70-M-007, TC-B2C70-M-008 |

## Detalle por caso de prueba

### TC-B2C70-D-002 - Con metodo de entrega activo, el Store Locator muestra el icono del metodo, la direccion o tienda seleccionada y el precio o condicion de despacho vigente

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 23.1 s |
| Spec | tests/B2C-70.spec.ts:179 |

**Precondiciones**

- Viewport: Desktop 1440x900

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

**Pasos ejecutados**

1. Configurar un metodo de entrega con direccion.
2. Navegar a distintas paginas y verificar el contenido del Store Locator.

**Resultado esperado**

El Store Locator muestra el icono del metodo activo, la direccion o tienda, y el label de precio/condicion de despacho.

**Resultado obtenido**

Se cumple el resultado esperado.

**Observación**

Con Calle Uno 23, La Florida como invitado, el Store Locator muestra en el Home y en una PDP el ícono de Despacho a domicilio activo, 'Calle Uno 23' y el label de precio. 'Navegar a distintas páginas' se hizo con Home y PDP: la fila no declara más rutas.

**Evidencia**

![Paso 2 — store locator en home](<B2C-70 Evidencias/TC-B2C70-D-002-p02-store-locator-en-home.png>)

![Paso 4 — store locator en la pdp](<B2C-70 Evidencias/TC-B2C70-D-002-p04-store-locator-en-la-pdp.png>)

![Estado final](<B2C-70 Evidencias/TC-B2C70-D-002.png>)

---

### TC-B2C70-D-003 - La direccion o tienda mostrada se trunca a 53 caracteres en Desktop y 42 en Mobile, agregando puntos suspensivos

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-70.spec.ts |

**Precondiciones**

- Viewport: Desktop 1440x900
- Viewport: Mobile 390x844

**Data utilizada**

- {BASE_URL} = URL base del storefront
- {COMPRADOR_USER} = TBD
- {DIRECCION_LARGA_001} =

**Pasos ejecutados**

1. Configurar una direccion/tienda con nombre largo.
2. Ver el Header en Desktop y verificar el truncamiento a 53 caracteres + puntos suspensivos.
3. Repetir en Mobile verificando el truncamiento a 42 caracteres.

**Resultado esperado**

En Desktop el texto se trunca a 53 caracteres + '...'; en Mobile se trunca a 42 caracteres + '...'.

**Resultado obtenido**

Esperado: Desktop trunca a 53 caracteres + «…» y Mobile a 42 + «…». Obtenido: en ambos viewports muestra «Avenida Libertador General …» (unos 27 caracteres). Bug: B2C-1428.

**Observación**

Esperado: Desktop trunca a 53 caracteres + «…» y Mobile a 42 + «…». Obtenido: en ambos viewports muestra «Avenida Libertador General …» (unos 27 caracteres). Bug: B2C-1428.

**Evidencia**

![Paso 2 — desktop store locator con la direccion larga](<B2C-70 Evidencias/TC-B2C70-D-003-p02-desktop-store-locator-con-la-direccion-larga.png>)

![Paso 3 — mobile store locator con la direccion larga](<B2C-70 Evidencias/TC-B2C70-D-003-p03-mobile-store-locator-con-la-direccion-larga.png>)

![Estado final](<B2C-70 Evidencias/TC-B2C70-D-003.png>)

---

### TC-B2C70-M-005 - Verificar que el Store Locator mantiene método, dirección y label de precio al navegar [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-70.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- La cuenta {COMPRADOR_CON_DIRECCION_USER} tiene una dirección de despacho guardada y activa

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno
- {SRP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/search?q=carne
- {COMPRADOR_CON_DIRECCION_USER} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL} desde el navegador del dispositivo móvil.
2. El sistema carga el Home.
3. El usuario inicia sesión con la cuenta {COMPRADOR_CON_DIRECCION_USER}.
4. El sistema autentica al usuario, recarga el Home y muestra en el Store Locator del header el ícono de Despacho a domicilio, la dirección guardada y el label de precio.
5. El usuario ingresa a {PLP_URL}.
6. El sistema carga la PLP y muestra en el Store Locator del header el mismo ícono, dirección y label de precio.
7. El usuario ingresa a {SRP_URL}.
8. El sistema carga la búsqueda y muestra en el Store Locator del header el mismo ícono, dirección y label de precio.

**Resultado esperado**

En el Home, PLP y búsqueda el Store Locator del header muestra el ícono de Despacho + la dirección guardada + el label de precio.

**Observación**

Con la cuenta {COMPRADOR_CON_DIRECCION_USER} el Store Locator mantiene ícono de Despacho, dirección guardada y label de precio en Home, PLP y búsqueda.

**Evidencia**

![Paso 2 — home store locator con metodo direccion y label](<B2C-70 Evidencias/TC-B2C70-M-005-p02-home-store-locator-con-metodo-direccion-y-label.png>)

![Paso 3 — plp store locator](<B2C-70 Evidencias/TC-B2C70-M-005-p03-plp-store-locator.png>)

![Paso 4 — busqueda store locator](<B2C-70 Evidencias/TC-B2C70-M-005-p04-busqueda-store-locator.png>)

![Estado final](<B2C-70 Evidencias/TC-B2C70-M-005.png>)

---

### TC-B2C70-M-006 - Verificar que el header trunca a 42 caracteres con "…" una dirección larga [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-70.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La cuenta tiene seleccionado Despacho a domicilio con {DIRECCION_LARGA_001}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {DIRECCION_LARGA_001} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL} desde el navegador del dispositivo móvil.
2. El sistema carga el Home y muestra en el Store Locator del header los primeros 42 caracteres de {DIRECCION_LARGA_001} seguidos de "…".

**Resultado esperado**

El Store Locator del header muestra exactamente los primeros 42 caracteres de {DIRECCION_LARGA_001} (espacios incluidos) + "…".

**Resultado obtenido**

Esperado: el Store Locator del header muestra los primeros 42 caracteres de la dirección + «…» («Avenida Libertador General Bernardo O'Higg…»). Obtenido: muestra «Avenida Libertador General …» (menos de 30 caracteres). Reproducible en 2 de 2 intentos. Bug: B2C-1427.

**Observación**

Esperado: el Store Locator del header muestra los primeros 42 caracteres de la dirección + «…» («Avenida Libertador General Bernardo O'Higg…»). Obtenido: muestra «Avenida Libertador General …» (menos de 30 caracteres). Reproducible en 2 de 2 intentos. Bug: B2C-1427.

**Evidencia**

![Paso 2 — store locator con la direccion larga](<B2C-70 Evidencias/TC-B2C70-M-006-p02-store-locator-con-la-direccion-larga.png>)

---

### TC-B2C70-M-007 - Verificar que el header muestra completa sin "…" una dirección de 42 caracteres [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-70.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La cuenta tiene seleccionado Despacho a domicilio con {DIRECCION_42_CHARS}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {DIRECCION_42_CHARS} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL} desde el navegador del dispositivo móvil.
2. El sistema carga el Home y muestra en el Store Locator del header la dirección {DIRECCION_42_CHARS} completa.

**Resultado esperado**

El Store Locator del header muestra los 42 caracteres de {DIRECCION_42_CHARS} sin truncar y sin "…".

**Observación**

Falta data: la cuenta {USER_AUTH_001} no tiene guardada la dirección «Av Libertador Gral Bernardo O'Higgins 1072» ({DIRECCION_42_CHARS}), por lo que no se puede dejar activa. Acción: guardar esa dirección en la cuenta o declarar otra cuenta que la tenga (quien administra el Excel de data).

---

### TC-B2C70-M-008 - Verificar que el header trunca a 42 caracteres con "…" una tienda de nombre largo [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-70.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La cuenta tiene seleccionado Retiro en tienda en {TIENDA_NOMBRE_LARGO_001}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {TIENDA_NOMBRE_LARGO_001} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL} desde el navegador del dispositivo móvil.
2. El sistema carga el Home y muestra en el Store Locator del header los primeros 42 caracteres de {TIENDA_NOMBRE_LARGO_001} seguidos de "…".

**Resultado esperado**

El Store Locator del header muestra exactamente los primeros 42 caracteres de {TIENDA_NOMBRE_LARGO_001} + "…".

**Observación**

Falta data: {TIENDA_NOMBRE_LARGO_001} («Unimarc Ignacio Carrera Pinto») tiene 29 caracteres y el caso exige un nombre de más de 42. Acción: proveer una tienda con nombre largo (quien administra el Excel de data).

---

### TC-B2C70-M-009 - Verificar que el Store Locator muestra ícono de despacho, dirección y label con precio cuando el despacho tiene costo [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-70.spec.ts |

**Precondiciones**

"- User type: Guest

- Viewport: Mobile 390x844
- Ubicacion: Home
- En la sesión actual se seleccionó Despacho a domicilio con {DIRECCION_DESPACHO_CON_COSTO} (flujo B2C-4)
- La condición de despacho vigente para esa dirección tiene costo (mayor a $0)"

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {TIENDA_NOMBRE_LARGO_001} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL} desde el navegador del dispositivo móvil.
2. El sistema carga el Home y muestra en el Store Locator del header el ícono de Despacho a domicilio activo, la dirección {DIRECCION_DESPACHO_CON_COSTO} y el label con el precio de despacho vigente.
3. El usuario ingresa a {PLP_URL}.
4. El sistema carga la PLP y muestra en el Store Locator del header el mismo ícono, dirección y precio de despacho.

**Resultado esperado**

En el Home y la PLP el Store Locator del header muestra el ícono de Despacho a domicilio + {DIRECCION_DESPACHO_CON_COSTO} + el label con el precio de despacho vigente (formato de la imagen de referencia, p. ej. "$3.990").

**Observación**

Falta data: la columna Test data del caso no declara {DIRECCION_DESPACHO_CON_COSTO} ni {PLP_URL}, que su precondición necesita. Acción: declarar el token en la planilla y cargar su valor en el Excel de data (quien administra la planilla y la data).

---

### TC-B2C70-M-010 - Verificar que el Store Locator muestra ícono de retiro, tienda y label de condición sin costo cuando el retiro no tiene costo [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-70.spec.ts |

**Precondiciones**

"- User type: Guest

- Viewport: Mobile 390x844
- Ubicacion: Home
- En la sesión actual se seleccionó Retiro en tienda en {TIENDA_RETIRO_SIN_COSTO} (flujo B2C-4)
- La condición de retiro vigente para esa tienda es sin costo"

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {TIENDA_NOMBRE_LARGO_001} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL} desde el navegador del dispositivo móvil.
2. El sistema carga el Home y muestra en el Store Locator del header el ícono de Retiro en tienda activo, la tienda {TIENDA_RETIRO_SIN_COSTO} y el label de condición sin costo.
3. El usuario ingresa a {PLP_URL}.
4. El sistema carga la PLP y muestra en el Store Locator del header el mismo ícono, tienda y label de condición.

**Resultado esperado**

En el Home y la PLP el Store Locator del header muestra el ícono de Retiro en tienda + {TIENDA_RETIRO_SIN_COSTO} + el label de condición sin costo vigente (según épica B2C-4).

**Observación**

Falta data: la columna Test data del caso no declara {TIENDA_RETIRO_SIN_COSTO} ni {PLP_URL}, que su precondición necesita. Acción: declarar el token en la planilla y cargar su valor en el Excel de data (quien administra la planilla y la data).

---

### TC-B2C70-M-011 - Verificar que el Store Locator muestra despacho sin costo para un cliente Diamante [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-70.spec.ts |

**Precondiciones**

"- User type: Logueado

- Viewport: Mobile 390x844
- Ubicacion: Home
- La cuenta {COMPRADOR_USER_DIAMANTE} tiene segmento Diamante y Despacho a domicilio activo con {DIRECCION_DESPACHO_CON_COSTO}
- La cuenta de control {COMPRADOR_NO_DIAMANTE_USER} no es Diamante y tiene Despacho a domicilio activo con la misma {DIRECCION_DESPACHO_CON_COSTO}"

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {TIENDA_NOMBRE_LARGO_001} = TBD
- {COMPRADOR_DIAMANTE_USER} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL} desde el navegador del dispositivo móvil.
2. El sistema carga el Home.
3. El usuario inicia sesión con la cuenta {COMPRADOR_USER_DIAMANTE}.
4. El sistema autentica al usuario, recarga el Home y muestra en el Store Locator del header el ícono de Despacho a domicilio, la dirección {DIRECCION_DESPACHO_CON_COSTO} y el label de condición de despacho sin costo.
5. El usuario ingresa a {PLP_URL}.
6. El sistema carga la PLP y muestra en el Store Locator del header el mismo ícono, dirección y label sin costo.
7. El usuario cierra sesión e inicia sesión con la cuenta {COMPRADOR_NO_DIAMANTE_USER}.
8. El sistema autentica al usuario y muestra en el Store Locator del header el ícono de Despacho a domicilio, la misma dirección y el label con el precio de despacho vigente.

**Resultado esperado**

Con {COMPRADOR_DIAMANTE_USER} el Store Locator muestra en Home y PLP el ícono de Despacho + {DIRECCION_DESPACHO_CON_COSTO} + el label de condición de despacho sin costo. Con {COMPRADOR_NO_DIAMANTE_USER} y la misma dirección se muestra el precio de despacho vigente.

**Observación**

Falta data: {COMPRADOR_USER_DIAMANTE} no tiene fila en el Excel de data. Acción: cargar la cuenta Diamante (quien administra el Excel de data).

---

### TC-B2C70-M-012 - Verificar que el header muestra correctamente una dirección sin numeración [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-70.spec.ts |

**Precondiciones**

"- User type: Logueado

- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La cuenta tiene seleccionado Despacho a domicilio con {DIRECCION_SIN_NUMERO} (dirección sin numeración, aceptada por el flujo B2C-4)"

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {TIENDA_NOMBRE_LARGO_001} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL} desde el navegador del dispositivo móvil.
2. El sistema carga el Home y muestra en el Store Locator del header el ícono de Despacho a domicilio, la dirección {DIRECCION_SIN_NUMERO} y el label de precio o condición de despacho.

**Resultado esperado**

El Store Locator del header muestra {DIRECCION_SIN_NUMERO} tal como fue registrada, sin agregar "null", "undefined", "0", espacios dobles ni separadores sobrantes; el ícono y el label de precio o condición se muestran normalmente.

**Observación**

Falta data: la columna Test data del caso no declara {DIRECCION_SIN_NUMERO}, que su precondición necesita. Acción: declarar el token en la planilla y cargar su valor en el Excel de data (quien administra la planilla y la data).

---

### TC-B2C70-M-013 - Verificar que el header muestra correctamente una dirección sin depto [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-70.spec.ts |

**Precondiciones**

"- User type: Logueado

- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La cuenta tiene seleccionado Despacho a domicilio con {DIRECCION_SIN_DEPTO} (calle y número, campo depto vacío)"

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {TIENDA_NOMBRE_LARGO_001} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL} desde el navegador del dispositivo móvil.
2. El sistema carga el Home y muestra en el Store Locator del header el ícono de Despacho a domicilio, la dirección {DIRECCION_SIN_DEPTO} y el label de precio o condición de despacho.

**Resultado esperado**

El Store Locator del header muestra la calle y el número de {DIRECCION_SIN_DEPTO}, sin textos residuales del depto ("Depto", "Dpto.", "#", coma final) ni valores vacíos.

**Observación**

Falta data: la columna Test data del caso no declara {DIRECCION_SIN_DEPTO}, que su precondición necesita. Acción: declarar el token en la planilla y cargar su valor en el Excel de data (quien administra la planilla y la data).

---

### TC-B2C70-M-014 - Verificar que el header muestra correctamente una dirección con depto [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-70.spec.ts |

**Precondiciones**

"- User type: Logueado

- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La cuenta tiene seleccionado Despacho a domicilio con {DIRECCION_CON_DEPTO} (calle, número y depto)"

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {TIENDA_NOMBRE_LARGO_001} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL} desde el navegador del dispositivo móvil.
2. El sistema carga el Home y muestra en el Store Locator del header el ícono de Despacho a domicilio, la dirección {DIRECCION_CON_DEPTO} y el label de precio o condición de despacho.

**Resultado esperado**

El Store Locator del header muestra {DIRECCION_CON_DEPTO} según el formato definido por negocio para el depto. Si el texto mostrado supera 42 caracteres, se trunca a 42 + "…" (CA3).

**Observación**

Falta data: {DIRECCION_CON_DEPTO} no tiene fila en el Excel de data (TBD). Acción: cargar una dirección con depto (quien administra el Excel de data).

---

### TC-B2C70-M-015 - Verificar que el header muestra una dirección con el caracter especial "+" sin alterarlo [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-70.spec.ts |

**Precondiciones**

"- User type: Logueado

- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta {COMPRADOR_CON_DIRECCION_USER}
- La cuenta tiene seleccionado Despacho a domicilio con {DIRECCION_CARACTERES_ESPECIALES} (contiene el caracter ""+"")"

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {TIENDA_NOMBRE_LARGO_001} = TBD
- {COMPRADOR_CON_DIRECCION_USER} = TBD
- {DIRECCION_CARACTERES_ESPECIALES} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL} desde el navegador del dispositivo móvil.
2. El sistema carga el Home y muestra en el Store Locator del header la dirección {DIRECCION_CARACTERES_ESPECIALES} con el caracter ""+"".
3. El usuario ingresa a {PLP_URL}.
4. El sistema carga la PLP y muestra la misma dirección con el caracter ""+"".
5. El usuario recarga la página.
6. El sistema recarga la PLP y muestra la misma dirección con el caracter ""+"".

**Resultado esperado**

En Home, PLP y tras recargar, el Store Locator muestra {DIRECCION_CARACTERES_ESPECIALES} con el "+" literal: no se reemplaza por espacio, "%2B" ni "&#43;", ni se omite. El resto de la dirección se mantiene intacto.

**Observación**

Falta data: la cuenta {COMPRADOR_CON_DIRECCION_USER} no tiene guardada la dirección «Pasaje Los Aromos 3-A / Lote 5+» ({DIRECCION_CARACTERES_ESPECIALES}), por lo que no se puede dejar activa. Acción: guardar esa dirección en la cuenta (quien administra el Excel de data).

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
  "suite": "B2C-70",
  "tc_file": "Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-70 WEB Test Cases.xlsx",
  "title": "B2C-70 - Store Locator del header - Evidencias QA",
  "updated_at": "2026-11-02"
 },
 "history": {
  "2026-10-19": [
   "TC-B2C70-D-002",
   "TC-B2C70-D-003",
   "TC-B2C70-M-005",
   "TC-B2C70-M-006",
   "TC-B2C70-M-007",
   "TC-B2C70-M-008"
  ],
  "2026-11-02": [
   "TC-B2C70-D-003",
   "TC-B2C70-M-005",
   "TC-B2C70-M-006",
   "TC-B2C70-M-007",
   "TC-B2C70-M-008",
   "TC-B2C70-M-009",
   "TC-B2C70-M-010",
   "TC-B2C70-M-011",
   "TC-B2C70-M-012",
   "TC-B2C70-M-013",
   "TC-B2C70-M-014",
   "TC-B2C70-M-015"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "duration_s": 23.1,
   "executed_at": "2026-10-19",
   "expected": "El Store Locator muestra el icono del metodo activo, la direccion o tienda, y el label de precio/condicion de despacho.",
   "form_factor": "desktop",
   "id": "TC-B2C70-D-002",
   "name": "Con metodo de entrega activo, el Store Locator muestra el icono del metodo, la direccion o tienda seleccionada y el precio o condicion de despacho vigente",
   "observation": "Con Calle Uno 23, La Florida como invitado, el Store Locator muestra en el Home y en una PDP el ícono de Despacho a domicilio activo, 'Calle Uno 23' y el label de precio. 'Navegar a distintas páginas' se hizo con Home y PDP: la fila no declara más rutas.",
   "observed": "Se cumple el resultado esperado.",
   "preconditions": "- Viewport: Desktop 1440x900",
   "screenshots": [
    {
     "caption": "Paso 2 — store locator en home",
     "file": "TC-B2C70-D-002-p02-store-locator-en-home.png"
    },
    {
     "caption": "Paso 4 — store locator en la pdp",
     "file": "TC-B2C70-D-002-p04-store-locator-en-la-pdp.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C70-D-002.png"
    }
   ],
   "spec": "tests/B2C-70.spec.ts:179",
   "status": "Aprobado",
   "steps": "1. Configurar un metodo de entrega con direccion.\n2. Navegar a distintas paginas y verificar el contenido del Store Locator.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "En Desktop el texto se trunca a 53 caracteres + '...'; en Mobile se trunca a 42 caracteres + '...'.",
   "form_factor": "desktop",
   "id": "TC-B2C70-D-003",
   "name": "La direccion o tienda mostrada se trunca a 53 caracteres en Desktop y 42 en Mobile, agregando puntos suspensivos",
   "observation": "Esperado: Desktop trunca a 53 caracteres + «…» y Mobile a 42 + «…». Obtenido: en ambos viewports muestra «Avenida Libertador General …» (unos 27 caracteres). Bug: B2C-1428.",
   "observed": "Esperado: Desktop trunca a 53 caracteres + «…» y Mobile a 42 + «…». Obtenido: en ambos viewports muestra «Avenida Libertador General …» (unos 27 caracteres). Bug: B2C-1428.",
   "preconditions": "- Viewport: Desktop 1440x900\n- Viewport: Mobile 390x844",
   "screenshots": [
    {
     "caption": "Paso 2 — desktop store locator con la direccion larga",
     "file": "TC-B2C70-D-003-p02-desktop-store-locator-con-la-direccion-larga.png"
    },
    {
     "caption": "Paso 3 — mobile store locator con la direccion larga",
     "file": "TC-B2C70-D-003-p03-mobile-store-locator-con-la-direccion-larga.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C70-D-003.png"
    }
   ],
   "spec": "tests/B2C-70.spec.ts",
   "status": "Rechazado",
   "steps": "1. Configurar una direccion/tienda con nombre largo.\n2. Ver el Header en Desktop y verificar el truncamiento a 53 caracteres + puntos suspensivos.\n3. Repetir en Mobile verificando el truncamiento a 42 caracteres.",
   "test_data": "- {BASE_URL} = URL base del storefront\n- {COMPRADOR_USER} = TBD\n- {DIRECCION_LARGA_001} =",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "En el Home, PLP y búsqueda el Store Locator del header muestra el ícono de Despacho + la dirección guardada + el label de precio.",
   "form_factor": "mobile",
   "id": "TC-B2C70-M-005",
   "name": "Verificar que el Store Locator mantiene método, dirección y label de precio al navegar [Mobile] [Logueado]",
   "observation": "Con la cuenta {COMPRADOR_CON_DIRECCION_USER} el Store Locator mantiene ícono de Despacho, dirección guardada y label de precio en Home, PLP y búsqueda.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- La cuenta {COMPRADOR_CON_DIRECCION_USER} tiene una dirección de despacho guardada y activa",
   "screenshots": [
    {
     "caption": "Paso 2 — home store locator con metodo direccion y label",
     "file": "TC-B2C70-M-005-p02-home-store-locator-con-metodo-direccion-y-label.png"
    },
    {
     "caption": "Paso 3 — plp store locator",
     "file": "TC-B2C70-M-005-p03-plp-store-locator.png"
    },
    {
     "caption": "Paso 4 — busqueda store locator",
     "file": "TC-B2C70-M-005-p04-busqueda-store-locator.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C70-M-005.png"
    }
   ],
   "spec": "tests/B2C-70.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL} desde el navegador del dispositivo móvil.\n2. El sistema carga el Home.\n3. El usuario inicia sesión con la cuenta {COMPRADOR_CON_DIRECCION_USER}.\n4. El sistema autentica al usuario, recarga el Home y muestra en el Store Locator del header el ícono de Despacho a domicilio, la dirección guardada y el label de precio.\n5. El usuario ingresa a {PLP_URL}.\n6. El sistema carga la PLP y muestra en el Store Locator del header el mismo ícono, dirección y label de precio.\n7. El usuario ingresa a {SRP_URL}.\n8. El sistema carga la búsqueda y muestra en el Store Locator del header el mismo ícono, dirección y label de precio.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n- {SRP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/search?q=carne\n- {COMPRADOR_CON_DIRECCION_USER} = TBD",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El Store Locator del header muestra exactamente los primeros 42 caracteres de {DIRECCION_LARGA_001} (espacios incluidos) + \"…\".",
   "form_factor": "mobile",
   "id": "TC-B2C70-M-006",
   "name": "Verificar que el header trunca a 42 caracteres con \"…\" una dirección larga [Mobile] [Logueado]",
   "observation": "Esperado: el Store Locator del header muestra los primeros 42 caracteres de la dirección + «…» («Avenida Libertador General Bernardo O'Higg…»). Obtenido: muestra «Avenida Libertador General …» (menos de 30 caracteres). Reproducible en 2 de 2 intentos. Bug: B2C-1427.",
   "observed": "Esperado: el Store Locator del header muestra los primeros 42 caracteres de la dirección + «…» («Avenida Libertador General Bernardo O'Higg…»). Obtenido: muestra «Avenida Libertador General …» (menos de 30 caracteres). Reproducible en 2 de 2 intentos. Bug: B2C-1427.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La cuenta tiene seleccionado Despacho a domicilio con {DIRECCION_LARGA_001}",
   "screenshots": [
    {
     "caption": "Paso 2 — store locator con la direccion larga",
     "file": "TC-B2C70-M-006-p02-store-locator-con-la-direccion-larga.png"
    }
   ],
   "spec": "tests/B2C-70.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {BASE_URL} desde el navegador del dispositivo móvil.\n2. El sistema carga el Home y muestra en el Store Locator del header los primeros 42 caracteres de {DIRECCION_LARGA_001} seguidos de \"…\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {DIRECCION_LARGA_001} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El Store Locator del header muestra los 42 caracteres de {DIRECCION_42_CHARS} sin truncar y sin \"…\".",
   "form_factor": "mobile",
   "id": "TC-B2C70-M-007",
   "name": "Verificar que el header muestra completa sin \"…\" una dirección de 42 caracteres [Mobile] [Logueado]",
   "observation": "Falta data: la cuenta {USER_AUTH_001} no tiene guardada la dirección «Av Libertador Gral Bernardo O'Higgins 1072» ({DIRECCION_42_CHARS}), por lo que no se puede dejar activa. Acción: guardar esa dirección en la cuenta o declarar otra cuenta que la tenga (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La cuenta tiene seleccionado Despacho a domicilio con {DIRECCION_42_CHARS}",
   "spec": "tests/B2C-70.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL} desde el navegador del dispositivo móvil.\n2. El sistema carga el Home y muestra en el Store Locator del header la dirección {DIRECCION_42_CHARS} completa.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {DIRECCION_42_CHARS} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El Store Locator del header muestra exactamente los primeros 42 caracteres de {TIENDA_NOMBRE_LARGO_001} + \"…\".",
   "form_factor": "mobile",
   "id": "TC-B2C70-M-008",
   "name": "Verificar que el header trunca a 42 caracteres con \"…\" una tienda de nombre largo [Mobile] [Logueado]",
   "observation": "Falta data: {TIENDA_NOMBRE_LARGO_001} («Unimarc Ignacio Carrera Pinto») tiene 29 caracteres y el caso exige un nombre de más de 42. Acción: proveer una tienda con nombre largo (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La cuenta tiene seleccionado Retiro en tienda en {TIENDA_NOMBRE_LARGO_001}",
   "spec": "tests/B2C-70.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL} desde el navegador del dispositivo móvil.\n2. El sistema carga el Home y muestra en el Store Locator del header los primeros 42 caracteres de {TIENDA_NOMBRE_LARGO_001} seguidos de \"…\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {TIENDA_NOMBRE_LARGO_001} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "En el Home y la PLP el Store Locator del header muestra el ícono de Despacho a domicilio + {DIRECCION_DESPACHO_CON_COSTO} + el label con el precio de despacho vigente (formato de la imagen de referencia, p. ej. \"$3.990\").",
   "form_factor": "mobile",
   "id": "TC-B2C70-M-009",
   "name": "Verificar que el Store Locator muestra ícono de despacho, dirección y label con precio cuando el despacho tiene costo [Mobile] [Guest]",
   "observation": "Falta data: la columna Test data del caso no declara {DIRECCION_DESPACHO_CON_COSTO} ni {PLP_URL}, que su precondición necesita. Acción: declarar el token en la planilla y cargar su valor en el Excel de data (quien administra la planilla y la data).",
   "preconditions": "\"- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- En la sesión actual se seleccionó Despacho a domicilio con {DIRECCION_DESPACHO_CON_COSTO} (flujo B2C-4)\n- La condición de despacho vigente para esa dirección tiene costo (mayor a $0)\"",
   "spec": "tests/B2C-70.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL} desde el navegador del dispositivo móvil.\n2. El sistema carga el Home y muestra en el Store Locator del header el ícono de Despacho a domicilio activo, la dirección {DIRECCION_DESPACHO_CON_COSTO} y el label con el precio de despacho vigente.\n3. El usuario ingresa a {PLP_URL}.\n4. El sistema carga la PLP y muestra en el Store Locator del header el mismo ícono, dirección y precio de despacho.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {TIENDA_NOMBRE_LARGO_001} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "En el Home y la PLP el Store Locator del header muestra el ícono de Retiro en tienda + {TIENDA_RETIRO_SIN_COSTO} + el label de condición sin costo vigente (según épica B2C-4).",
   "form_factor": "mobile",
   "id": "TC-B2C70-M-010",
   "name": "Verificar que el Store Locator muestra ícono de retiro, tienda y label de condición sin costo cuando el retiro no tiene costo [Mobile] [Guest]",
   "observation": "Falta data: la columna Test data del caso no declara {TIENDA_RETIRO_SIN_COSTO} ni {PLP_URL}, que su precondición necesita. Acción: declarar el token en la planilla y cargar su valor en el Excel de data (quien administra la planilla y la data).",
   "preconditions": "\"- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- En la sesión actual se seleccionó Retiro en tienda en {TIENDA_RETIRO_SIN_COSTO} (flujo B2C-4)\n- La condición de retiro vigente para esa tienda es sin costo\"",
   "spec": "tests/B2C-70.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL} desde el navegador del dispositivo móvil.\n2. El sistema carga el Home y muestra en el Store Locator del header el ícono de Retiro en tienda activo, la tienda {TIENDA_RETIRO_SIN_COSTO} y el label de condición sin costo.\n3. El usuario ingresa a {PLP_URL}.\n4. El sistema carga la PLP y muestra en el Store Locator del header el mismo ícono, tienda y label de condición.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {TIENDA_NOMBRE_LARGO_001} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Con {COMPRADOR_DIAMANTE_USER} el Store Locator muestra en Home y PLP el ícono de Despacho + {DIRECCION_DESPACHO_CON_COSTO} + el label de condición de despacho sin costo. Con {COMPRADOR_NO_DIAMANTE_USER} y la misma dirección se muestra el precio de despacho vigente.",
   "form_factor": "mobile",
   "id": "TC-B2C70-M-011",
   "name": "Verificar que el Store Locator muestra despacho sin costo para un cliente Diamante [Mobile] [Logueado]",
   "observation": "Falta data: {COMPRADOR_USER_DIAMANTE} no tiene fila en el Excel de data. Acción: cargar la cuenta Diamante (quien administra el Excel de data).",
   "preconditions": "\"- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- La cuenta {COMPRADOR_USER_DIAMANTE} tiene segmento Diamante y Despacho a domicilio activo con {DIRECCION_DESPACHO_CON_COSTO}\n- La cuenta de control {COMPRADOR_NO_DIAMANTE_USER} no es Diamante y tiene Despacho a domicilio activo con la misma {DIRECCION_DESPACHO_CON_COSTO}\"",
   "spec": "tests/B2C-70.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL} desde el navegador del dispositivo móvil.\n2. El sistema carga el Home.\n3. El usuario inicia sesión con la cuenta {COMPRADOR_USER_DIAMANTE}.\n4. El sistema autentica al usuario, recarga el Home y muestra en el Store Locator del header el ícono de Despacho a domicilio, la dirección {DIRECCION_DESPACHO_CON_COSTO} y el label de condición de despacho sin costo.\n5. El usuario ingresa a {PLP_URL}.\n6. El sistema carga la PLP y muestra en el Store Locator del header el mismo ícono, dirección y label sin costo.\n7. El usuario cierra sesión e inicia sesión con la cuenta {COMPRADOR_NO_DIAMANTE_USER}.\n8. El sistema autentica al usuario y muestra en el Store Locator del header el ícono de Despacho a domicilio, la misma dirección y el label con el precio de despacho vigente.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {TIENDA_NOMBRE_LARGO_001} = TBD\n- {COMPRADOR_DIAMANTE_USER} = TBD",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El Store Locator del header muestra {DIRECCION_SIN_NUMERO} tal como fue registrada, sin agregar \"null\", \"undefined\", \"0\", espacios dobles ni separadores sobrantes; el ícono y el label de precio o condición se muestran normalmente.",
   "form_factor": "mobile",
   "id": "TC-B2C70-M-012",
   "name": "Verificar que el header muestra correctamente una dirección sin numeración [Mobile] [Logueado]",
   "observation": "Falta data: la columna Test data del caso no declara {DIRECCION_SIN_NUMERO}, que su precondición necesita. Acción: declarar el token en la planilla y cargar su valor en el Excel de data (quien administra la planilla y la data).",
   "preconditions": "\"- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La cuenta tiene seleccionado Despacho a domicilio con {DIRECCION_SIN_NUMERO} (dirección sin numeración, aceptada por el flujo B2C-4)\"",
   "spec": "tests/B2C-70.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL} desde el navegador del dispositivo móvil.\n2. El sistema carga el Home y muestra en el Store Locator del header el ícono de Despacho a domicilio, la dirección {DIRECCION_SIN_NUMERO} y el label de precio o condición de despacho.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {TIENDA_NOMBRE_LARGO_001} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El Store Locator del header muestra la calle y el número de {DIRECCION_SIN_DEPTO}, sin textos residuales del depto (\"Depto\", \"Dpto.\", \"#\", coma final) ni valores vacíos.",
   "form_factor": "mobile",
   "id": "TC-B2C70-M-013",
   "name": "Verificar que el header muestra correctamente una dirección sin depto [Mobile] [Logueado]",
   "observation": "Falta data: la columna Test data del caso no declara {DIRECCION_SIN_DEPTO}, que su precondición necesita. Acción: declarar el token en la planilla y cargar su valor en el Excel de data (quien administra la planilla y la data).",
   "preconditions": "\"- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La cuenta tiene seleccionado Despacho a domicilio con {DIRECCION_SIN_DEPTO} (calle y número, campo depto vacío)\"",
   "spec": "tests/B2C-70.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL} desde el navegador del dispositivo móvil.\n2. El sistema carga el Home y muestra en el Store Locator del header el ícono de Despacho a domicilio, la dirección {DIRECCION_SIN_DEPTO} y el label de precio o condición de despacho.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {TIENDA_NOMBRE_LARGO_001} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El Store Locator del header muestra {DIRECCION_CON_DEPTO} según el formato definido por negocio para el depto. Si el texto mostrado supera 42 caracteres, se trunca a 42 + \"…\" (CA3).",
   "form_factor": "mobile",
   "id": "TC-B2C70-M-014",
   "name": "Verificar que el header muestra correctamente una dirección con depto [Mobile] [Logueado]",
   "observation": "Falta data: {DIRECCION_CON_DEPTO} no tiene fila en el Excel de data (TBD). Acción: cargar una dirección con depto (quien administra el Excel de data).",
   "preconditions": "\"- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La cuenta tiene seleccionado Despacho a domicilio con {DIRECCION_CON_DEPTO} (calle, número y depto)\"",
   "spec": "tests/B2C-70.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL} desde el navegador del dispositivo móvil.\n2. El sistema carga el Home y muestra en el Store Locator del header el ícono de Despacho a domicilio, la dirección {DIRECCION_CON_DEPTO} y el label de precio o condición de despacho.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {TIENDA_NOMBRE_LARGO_001} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "En Home, PLP y tras recargar, el Store Locator muestra {DIRECCION_CARACTERES_ESPECIALES} con el \"+\" literal: no se reemplaza por espacio, \"%2B\" ni \"&#43;\", ni se omite. El resto de la dirección se mantiene intacto.",
   "form_factor": "mobile",
   "id": "TC-B2C70-M-015",
   "name": "Verificar que el header muestra una dirección con el caracter especial \"+\" sin alterarlo [Mobile] [Logueado]",
   "observation": "Falta data: la cuenta {COMPRADOR_CON_DIRECCION_USER} no tiene guardada la dirección «Pasaje Los Aromos 3-A / Lote 5+» ({DIRECCION_CARACTERES_ESPECIALES}), por lo que no se puede dejar activa. Acción: guardar esa dirección en la cuenta (quien administra el Excel de data).",
   "preconditions": "\"- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta {COMPRADOR_CON_DIRECCION_USER}\n- La cuenta tiene seleccionado Despacho a domicilio con {DIRECCION_CARACTERES_ESPECIALES} (contiene el caracter \"\"+\"\")\"",
   "spec": "tests/B2C-70.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL} desde el navegador del dispositivo móvil.\n2. El sistema carga el Home y muestra en el Store Locator del header la dirección {DIRECCION_CARACTERES_ESPECIALES} con el caracter \"\"+\"\".\n3. El usuario ingresa a {PLP_URL}.\n4. El sistema carga la PLP y muestra la misma dirección con el caracter \"\"+\"\".\n5. El usuario recarga la página.\n6. El sistema recarga la PLP y muestra la misma dirección con el caracter \"\"+\"\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {TIENDA_NOMBRE_LARGO_001} = TBD\n- {COMPRADOR_CON_DIRECCION_USER} = TBD\n- {DIRECCION_CARACTERES_ESPECIALES} = TBD",
   "viewport": "390x844"
  }
 ]
}
-->
