# B2C-55 - Carrusel My Usuals (Productos frecuentes) - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-55 |
| Última actualización | 2026-11-11 |
| Ejecutado por | Victor Chirinos |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | webkit |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP1/B2C-55 WEB Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 15 |
| Bloqueado Data | 7 |
| Rechazado | 1 |
| **Total** | **23** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-11 | 23 | TC-B2C55-D-001, TC-B2C55-D-002, TC-B2C55-D-003, TC-B2C55-D-004, TC-B2C55-D-005, TC-B2C55-D-006, TC-B2C55-D-007, TC-B2C55-D-008, TC-B2C55-D-009, TC-B2C55-D-010, TC-B2C55-D-011, TC-B2C55-D-012, TC-B2C55-M-001, TC-B2C55-M-002, TC-B2C55-M-003, TC-B2C55-M-004, TC-B2C55-M-005, TC-B2C55-M-006, TC-B2C55-M-007, TC-B2C55-M-008, TC-B2C55-M-009, TC-B2C55-M-010, TC-B2C55-M-011 |

## Detalle por caso de prueba

### TC-B2C55-D-001 - Verificar que el carrusel My Usuals muestra los productos en el orden de relevancia del atributo myUsualsProducts [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-11 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 33.6 s |
| Spec | tests/B2C-55.spec.ts:260 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Home
- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts
- Componente My Usuals configurado en la Home (Page Designer)
- Se conoce el orden de los productos en el atributo myUsualsProducts de la cuenta (orden de relevancia definido por Data SMU)

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; el login es por correo + código OTP)
- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ con viewport Desktop 1440x900.
2. El sistema carga la Home.
3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
4. El sistema autentica al usuario y muestra la Home con el carrusel My Usuals.
5. El usuario recorre el carrusel de izquierda a derecha y compara el orden con el atributo myUsualsProducts de la cuenta.

**Resultado esperado**

Los productos del carrusel aparecen en el mismo orden que en el atributo myUsualsProducts de la cuenta.

**Resultado obtenido**

Los 5 productos del carrusel siguen el orden de c_myUsuals: Galletas La Galleteria, Carne molida 250 g, Tapapecho vacuno, Carne molida 500 g y Trapero Nova (los 5 primeros de 29).

**Evidencia**

![Paso 3 — home con la sesion iniciada](<B2C-55 Evidencias/TC-B2C55-D-001-p03-home-con-la-sesion-iniciada.png>)

![Paso 4 — carrusel my usuals](<B2C-55 Evidencias/TC-B2C55-D-001-p04-carrusel-my-usuals.png>)

![Paso 5 — orden de los productos del carrusel](<B2C-55 Evidencias/TC-B2C55-D-001-p05-orden-de-los-productos-del-carrusel.png>)

![Estado final](<B2C-55 Evidencias/TC-B2C55-D-001.png>)

---

### TC-B2C55-D-002 - Verificar que el carrusel My Usuals se muestra en una landing que contiene el componente [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-11 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | (sin spec: el caso quedó bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Landing
- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts
- Landing {LANDING_MY_USUALS_URL} con el componente My Usuals configurado en Page Designer

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; el login es por correo + código OTP)
- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com
- {LANDING_MY_USUALS_URL} = TBD en el Excel de data

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ con viewport Desktop 1440x900.
2. El sistema carga la Home.
3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
4. El sistema autentica al usuario.
5. El usuario navega a la landing {LANDING_MY_USUALS_URL}.
6. El sistema carga la landing con sus componentes.

**Resultado esperado**

La landing muestra el carrusel My Usuals con los productos frecuentes de la cuenta, en la posición configurada en Page Designer.

**Resultado obtenido**

Causa: {LANDING_MY_USUALS_URL} está en TBD en el Excel de data, así que no hay landing con el componente My Usuals sobre la que correr el caso. Acción: el equipo de contenidos publica una landing con el componente y se carga su URL en {LANDING_MY_USUALS_URL}.

**Observación**

Causa: {LANDING_MY_USUALS_URL} está en TBD en el Excel de data, así que no hay landing con el componente My Usuals sobre la que correr el caso. Acción: el equipo de contenidos publica una landing con el componente y se carga su URL en {LANDING_MY_USUALS_URL}.

---

### TC-B2C55-D-003 - Verificar que el carrusel My Usuals muestra el título configurado centrado [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-11 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 33.7 s |
| Spec | tests/B2C-55.spec.ts:263 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Home
- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts
- Componente My Usuals configurado en la Home (Page Designer)

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; el login es por correo + código OTP)
- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ con viewport Desktop 1440x900.
2. El sistema carga la Home.
3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
4. El sistema autentica al usuario y muestra la Home con el carrusel My Usuals.
5. El usuario observa el encabezado del carrusel.

**Resultado esperado**

El título configurado del componente se muestra centrado sobre el carrusel.

**Resultado obtenido**

El título «Tus productos mas comprados» se muestra centrado sobre el carrusel (text-align center, desvío 0 px).

**Evidencia**

![Paso 3 — home con la sesion iniciada](<B2C-55 Evidencias/TC-B2C55-D-003-p03-home-con-la-sesion-iniciada.png>)

![Paso 4 — carrusel my usuals](<B2C-55 Evidencias/TC-B2C55-D-003-p04-carrusel-my-usuals.png>)

![Paso 5 — titulo centrado](<B2C-55 Evidencias/TC-B2C55-D-003-p05-titulo-centrado.png>)

![Estado final](<B2C-55 Evidencias/TC-B2C55-D-003.png>)

---

### TC-B2C55-D-004 - Verificar que cada producto del carrusel My Usuals usa la shelf estándar [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-11 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 34.2 s |
| Spec | tests/B2C-55.spec.ts:266 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Home
- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts
- Componente My Usuals configurado en la Home (Page Designer)

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; el login es por correo + código OTP)
- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ con viewport Desktop 1440x900.
2. El sistema carga la Home.
3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
4. El sistema autentica al usuario y muestra la Home con el carrusel My Usuals.
5. El usuario revisa las tarjetas de producto del carrusel.

**Resultado esperado**

Cada tarjeta muestra imagen, nombre, precio y botón "Agregar"; los productos en oferta muestran además el precio oferta.

**Resultado obtenido**

Cada tarjeta muestra imagen, nombre, precio y «Agregar». El Tapapecho vacuno (sin stock, posición 3) muestra «Pronto disponible» y «Ver similares» en lugar de «Agregar», como pide el CA5 de la misma HU. Las tarjetas en oferta muestran precio oferta y precio socio.

**Observación**

El Tapapecho vacuno (sin stock, posición 3) muestra «Pronto disponible» y «Ver similares» en lugar de «Agregar», como pide el CA5 de la misma HU. Las tarjetas en oferta muestran precio oferta y precio socio.

**Evidencia**

![Paso 3 — home con la sesion iniciada](<B2C-55 Evidencias/TC-B2C55-D-004-p03-home-con-la-sesion-iniciada.png>)

![Paso 4 — carrusel my usuals](<B2C-55 Evidencias/TC-B2C55-D-004-p04-carrusel-my-usuals.png>)

![Paso 5 — tarjetas del shelf estandar](<B2C-55 Evidencias/TC-B2C55-D-004-p05-tarjetas-del-shelf-estandar.png>)

![Estado final](<B2C-55 Evidencias/TC-B2C55-D-004.png>)

---

### TC-B2C55-D-005 - Verificar que el carrusel My Usuals muestra el link "Ver todos" [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-11 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 33.3 s |
| Spec | tests/B2C-55.spec.ts:269 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Home
- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts
- Componente My Usuals configurado en la Home (Page Designer)

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; el login es por correo + código OTP)
- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ con viewport Desktop 1440x900.
2. El sistema carga la Home.
3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
4. El sistema autentica al usuario y muestra la Home con el carrusel My Usuals.
5. El usuario observa el componente My Usuals.

**Resultado esperado**

El componente muestra el link "Ver todos".

**Resultado obtenido**

El componente muestra el link «Ver todos», que apunta a /account/my-usuals.

**Evidencia**

![Paso 3 — home con la sesion iniciada](<B2C-55 Evidencias/TC-B2C55-D-005-p03-home-con-la-sesion-iniciada.png>)

![Paso 4 — carrusel my usuals](<B2C-55 Evidencias/TC-B2C55-D-005-p04-carrusel-my-usuals.png>)

![Paso 5 — link ver todos](<B2C-55 Evidencias/TC-B2C55-D-005-p05-link-ver-todos.png>)

![Estado final](<B2C-55 Evidencias/TC-B2C55-D-005.png>)

---

### TC-B2C55-D-006 - Verificar que el carrusel My Usuals muestra 5 productos visibles a la vez [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-11 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 38.8 s |
| Spec | tests/B2C-55.spec.ts:272 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Home
- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts
- Componente My Usuals configurado en la Home (Page Designer)

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; el login es por correo + código OTP)
- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ con viewport Desktop 1440x900.
2. El sistema carga la Home.
3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
4. El sistema autentica al usuario y muestra la Home con el carrusel My Usuals.
5. El usuario observa el carrusel sin desplazarlo.

**Resultado esperado**

El carrusel muestra 5 productos visibles a la vez y permite desplazarse para ver el resto.

**Resultado obtenido**

Esperado: 5 productos visibles a la vez y desplazamiento para ver el resto. Obtenido: se ven 5 a la vez, pero el carrusel trae solo 5 tarjetas para los 29 frecuentes de c_myUsuals de la cuenta (pide al catálogo solo los 5 primeros SKU); al tocar «Ver más productos» siguen los mismos 5 y no aparece ningún otro. tests/B2C-55.spec.ts:272. Bug: B2C-1482.

**Observación**

Esperado: 5 productos visibles a la vez y desplazamiento para ver el resto. Obtenido: se ven 5 a la vez, pero el carrusel trae solo 5 tarjetas para los 29 frecuentes de c_myUsuals de la cuenta (pide al catálogo solo los 5 primeros SKU); al tocar «Ver más productos» siguen los mismos 5 y no aparece ningún otro. tests/B2C-55.spec.ts:272. Bug: B2C-1482.

**Evidencia**

![Paso 3 — home con la sesion iniciada](<B2C-55 Evidencias/TC-B2C55-D-006-p03-home-con-la-sesion-iniciada.png>)

![Paso 4 — carrusel my usuals](<B2C-55 Evidencias/TC-B2C55-D-006-p04-carrusel-my-usuals.png>)

![Paso 5 — 5 productos visibles sin desplazar](<B2C-55 Evidencias/TC-B2C55-D-006-p05-5-productos-visibles-sin-desplazar.png>)

![Paso 6 — carrusel tras desplazarlo](<B2C-55 Evidencias/TC-B2C55-D-006-p06-carrusel-tras-desplazarlo.png>)

![Estado final](<B2C-55 Evidencias/TC-B2C55-D-006.png>)

---

### TC-B2C55-D-007 - Verificar que el carrusel My Usuals no se muestra con exactamente 5 productos frecuentes [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-11 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 44.6 s |
| Spec | tests/B2C-55.spec.ts:275 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Home
- La cuenta vhchirinos+5frecuentes@avatar-global.com tiene exactamente 5 productos frecuentes en el atributo myUsualsProducts
- Componente My Usuals configurado en la Home (Page Designer)

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {COMPRADOR_5_FRECUENTES_PASSWORD} = contraseña de la cuenta (no se transcribe; el login es por correo + código OTP)
- {COMPRADOR_5_FRECUENTES_USER} = vhchirinos+5frecuentes@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ con viewport Desktop 1440x900.
2. El sistema carga la Home.
3. El usuario inicia sesión con la cuenta vhchirinos+5frecuentes@avatar-global.com.
4. El sistema autentica al usuario y muestra la Home.
5. El usuario recorre la Home completa.

**Resultado esperado**

La Home no muestra el carrusel My Usuals ni deja espacio vacío en su lugar.

**Resultado obtenido**

La cuenta tiene exactamente 5 frecuentes («5 productos» en Mis productos frecuentes). El Home no muestra el carrusel My Usuals y su contenedor no ocupa lugar (alto 0).

**Evidencia**

![Paso 3 — la cuenta tiene 5 productos frecuentes](<B2C-55 Evidencias/TC-B2C55-D-007-p03-la-cuenta-tiene-5-productos-frecuentes.png>)

![Paso 5 — home sin el carrusel my usuals](<B2C-55 Evidencias/TC-B2C55-D-007-p05-home-sin-el-carrusel-my-usuals.png>)

![Estado final](<B2C-55 Evidencias/TC-B2C55-D-007.png>)

---

### TC-B2C55-D-008 - Verificar que un producto sin stock del carrusel My Usuals muestra la etiqueta "Pronto disponible" [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-11 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | (sin spec: el caso quedó bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Home
- La cuenta {COMPRADOR_FRECUENTES_SIN_STOCK_USER} tiene más de 5 productos frecuentes y al menos uno sin stock
- Componente My Usuals configurado en la Home (Page Designer)

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {COMPRADOR_FRECUENTES_SIN_STOCK_PASSWORD} = contraseña de la cuenta (no se transcribe; el login es por correo + código OTP)
- {COMPRADOR_FRECUENTES_SIN_STOCK_USER} = TBD en el Excel de data

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ con viewport Desktop 1440x900.
2. El sistema carga la Home.
3. El usuario inicia sesión con la cuenta {COMPRADOR_FRECUENTES_SIN_STOCK_USER}.
4. El sistema autentica al usuario y muestra la Home con el carrusel My Usuals.
5. El usuario ubica en el carrusel el producto sin stock.

**Resultado esperado**

La tarjeta del producto sin stock muestra la etiqueta "Pronto disponible".

**Resultado obtenido**

Causa: {COMPRADOR_FRECUENTES_SIN_STOCK_USER} y (contraseña de la cuenta) están en TBD en el Excel de data. Acción: cargar una cuenta con más de 5 frecuentes y al menos uno sin stock entre los 5 primeros. Referencia: vhchirinos+comprador@… tiene hoy el Tapapecho vacuno sin stock en la posición 3 y serviría si se declara en estas filas.

**Observación**

Causa: {COMPRADOR_FRECUENTES_SIN_STOCK_USER} y {COMPRADOR_FRECUENTES_SIN_STOCK_PASSWORD} están en TBD en el Excel de data. Acción: cargar una cuenta con más de 5 frecuentes y al menos uno sin stock entre los 5 primeros. Referencia: vhchirinos+comprador@… tiene hoy el Tapapecho vacuno sin stock en la posición 3 y serviría si se declara en estas filas.

---

### TC-B2C55-D-009 - Verificar que un producto sin stock del carrusel My Usuals muestra "Ver similares" en lugar de "Agregar" [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-11 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | (sin spec: el caso quedó bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Home
- La cuenta {COMPRADOR_FRECUENTES_SIN_STOCK_USER} tiene más de 5 productos frecuentes y al menos uno sin stock
- Componente My Usuals configurado en la Home (Page Designer)

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {COMPRADOR_FRECUENTES_SIN_STOCK_PASSWORD} = contraseña de la cuenta (no se transcribe; el login es por correo + código OTP)
- {COMPRADOR_FRECUENTES_SIN_STOCK_USER} = TBD en el Excel de data

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ con viewport Desktop 1440x900.
2. El sistema carga la Home.
3. El usuario inicia sesión con la cuenta {COMPRADOR_FRECUENTES_SIN_STOCK_USER}.
4. El sistema autentica al usuario y muestra la Home con el carrusel My Usuals.
5. El usuario ubica en el carrusel el producto sin stock.

**Resultado esperado**

La tarjeta del producto sin stock no muestra el botón "Agregar" y muestra el botón "Ver similares".

**Resultado obtenido**

Causa: {COMPRADOR_FRECUENTES_SIN_STOCK_USER} y (contraseña de la cuenta) están en TBD en el Excel de data. Acción: cargar una cuenta con más de 5 frecuentes y al menos uno sin stock entre los 5 primeros. Referencia: vhchirinos+comprador@… tiene hoy el Tapapecho vacuno sin stock en la posición 3 y serviría si se declara en estas filas.

**Observación**

Causa: {COMPRADOR_FRECUENTES_SIN_STOCK_USER} y {COMPRADOR_FRECUENTES_SIN_STOCK_PASSWORD} están en TBD en el Excel de data. Acción: cargar una cuenta con más de 5 frecuentes y al menos uno sin stock entre los 5 primeros. Referencia: vhchirinos+comprador@… tiene hoy el Tapapecho vacuno sin stock en la posición 3 y serviría si se declara en estas filas.

---

### TC-B2C55-D-010 - Verificar que "Agregar" en el carrusel My Usuals suma el producto al carro y actualiza el contador [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-11 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | (sin spec: el caso quedó bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Home
- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts
- Componente My Usuals configurado en la Home (Page Designer)
- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; el login es por correo + código OTP)
- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ con viewport Desktop 1440x900.
2. El sistema carga la Home.
3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
4. El sistema autentica al usuario y muestra la Home con el carrusel My Usuals.
5. El usuario anota el contador del carro y hace clic en "Agregar" en un producto con stock del carrusel.
6. El sistema agrega el producto al carro.

**Resultado esperado**

El contador del ícono del carro aumenta en 1 y la tarjeta del producto muestra el stepper con 1 unidad.

**Resultado obtenido**

Causa: el caso pide un método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura) y la cuenta vhchirinos+comprador@avatar-global.com no lo tiene: el header muestra «Elige una forma de entrega». La fila no declara la dirección ni la tienda a usar, así que no se puede fijar sin elegir data por fuera del caso. Acción: declarar en Test data el token de la dirección o la tienda con cobertura, o dejar la cuenta con un método de entrega activo.

**Observación**

Causa: el caso pide un método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura) y la cuenta {COMPRADOR_USUALS_MAS_24_USER} no lo tiene: el header muestra «Elige una forma de entrega». La fila no declara la dirección ni la tienda a usar, así que no se puede fijar sin elegir data por fuera del caso. Acción: declarar en Test data el token de la dirección o la tienda con cobertura, o dejar la cuenta con un método de entrega activo.

---

### TC-B2C55-D-011 - Verificar que el carrusel My Usuals muestra un ícono de carga mientras obtiene los datos [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-11 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 31.1 s |
| Spec | tests/B2C-55.spec.ts:278 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Home
- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts
- Componente My Usuals configurado en la Home (Page Designer)
- Red lenta simulada (ej. throttling Slow 3G) para observar la carga

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; el login es por correo + código OTP)
- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ con viewport Desktop 1440x900.
2. El sistema carga la Home.
3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
4. El sistema autentica al usuario y comienza a cargar la Home.
5. El usuario observa el área del carrusel My Usuals durante la carga.

**Resultado esperado**

El área del carrusel muestra un ícono de carga hasta que los productos están disponibles; luego se muestra el carrusel con los productos.

**Resultado obtenido**

La carga muestra 5 placeholders (chakra-skeleton) con el título y «Ver todos» ya visibles, no un ícono de loading; se aprueba como indicador de carga, el mismo criterio aplicado en B2C-85 D-007. Carga simulada demorando la lista de productos del catálogo. Al terminar se muestran los productos.

**Observación**

La carga muestra 5 placeholders (chakra-skeleton) con el título y «Ver todos» ya visibles, no un ícono de loading; se aprueba como indicador de carga, el mismo criterio aplicado en B2C-85 D-007. Carga simulada demorando la lista de productos del catálogo.

**Evidencia**

![Paso 5 — area del carrusel durante la carga](<B2C-55 Evidencias/TC-B2C55-D-011-p05-area-del-carrusel-durante-la-carga.png>)

![Paso 6 — carrusel con los productos cargados](<B2C-55 Evidencias/TC-B2C55-D-011-p06-carrusel-con-los-productos-cargados.png>)

![Estado final](<B2C-55 Evidencias/TC-B2C55-D-011.png>)

---

### TC-B2C55-D-012 - Verificar que si falla la obtención del atributo myUsuals el componente no se muestra y no hay mensaje de error [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-11 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 36.5 s |
| Spec | tests/B2C-55.spec.ts:281 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Home
- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts
- Componente My Usuals configurado en la Home (Page Designer)
- Error simulado al recuperar el atributo myUsuals del cliente (con apoyo de Desarrollo)

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; el login es por correo + código OTP)
- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ con viewport Desktop 1440x900.
2. El sistema carga la Home.
3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
4. El sistema autentica al usuario y no logra recuperar el atributo myUsuals.
5. El usuario recorre la Home completa.

**Resultado esperado**

La Home no muestra el carrusel My Usuals ni ningún mensaje de error, y el resto de los componentes se muestra normalmente.

**Resultado obtenido**

Error simulado: la lectura del cliente (shopper-customers) responde 500. El contenedor de Page Designer queda con alto 0, sin mensaje de error, y el resto del Home se muestra (9 componentes).

**Observación**

Error simulado: la lectura del cliente (shopper-customers) responde 500. El contenedor de Page Designer queda con alto 0, sin mensaje de error, y el resto del Home se muestra (9 componentes).

**Evidencia**

![Paso 5 — home con error al leer myusuals](<B2C-55 Evidencias/TC-B2C55-D-012-p05-home-con-error-al-leer-myusuals.png>)

![Estado final](<B2C-55 Evidencias/TC-B2C55-D-012.png>)

---

### TC-B2C55-M-001 - Verificar que el carrusel My Usuals muestra los productos en el orden de relevancia del atributo myUsualsProducts [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-11 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 71.6 s |
| Spec | tests/B2C-55.spec.ts:289 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts
- Componente My Usuals configurado en la Home (Page Designer)
- Se conoce el orden de los productos en el atributo myUsualsProducts de la cuenta (orden de relevancia definido por Data SMU)

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; el login es por correo + código OTP)
- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga la Home.
3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
4. El sistema autentica al usuario y muestra la Home con el carrusel My Usuals.
5. El usuario recorre el carrusel de izquierda a derecha y compara el orden con el atributo myUsualsProducts de la cuenta.

**Resultado esperado**

Los productos del carrusel aparecen en el mismo orden que en el atributo myUsualsProducts de la cuenta.

**Resultado obtenido**

Los 5 productos del carrusel siguen el orden de c_myUsuals: Galletas La Galleteria, Carne molida 250 g, Tapapecho vacuno, Carne molida 500 g y Trapero Nova (los 5 primeros de 29).

**Evidencia**

![Paso 3 — home con la sesion iniciada](<B2C-55 Evidencias/TC-B2C55-M-001-p03-home-con-la-sesion-iniciada.png>)

![Paso 4 — carrusel my usuals](<B2C-55 Evidencias/TC-B2C55-M-001-p04-carrusel-my-usuals.png>)

![Paso 5 — orden de los productos del carrusel](<B2C-55 Evidencias/TC-B2C55-M-001-p05-orden-de-los-productos-del-carrusel.png>)

![Estado final](<B2C-55 Evidencias/TC-B2C55-M-001.png>)

---

### TC-B2C55-M-002 - Verificar que el carrusel My Usuals se muestra en una landing que contiene el componente [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-11 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | (sin spec: el caso quedó bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Landing
- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts
- Landing {LANDING_MY_USUALS_URL} con el componente My Usuals configurado en Page Designer

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; el login es por correo + código OTP)
- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com
- {LANDING_MY_USUALS_URL} = TBD en el Excel de data

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga la Home.
3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
4. El sistema autentica al usuario.
5. El usuario navega a la landing {LANDING_MY_USUALS_URL}.
6. El sistema carga la landing con sus componentes.

**Resultado esperado**

La landing muestra el carrusel My Usuals con los productos frecuentes de la cuenta, en la posición configurada en Page Designer.

**Resultado obtenido**

Causa: {LANDING_MY_USUALS_URL} está en TBD en el Excel de data, así que no hay landing con el componente My Usuals sobre la que correr el caso. Acción: el equipo de contenidos publica una landing con el componente y se carga su URL en {LANDING_MY_USUALS_URL}.

**Observación**

Causa: {LANDING_MY_USUALS_URL} está en TBD en el Excel de data, así que no hay landing con el componente My Usuals sobre la que correr el caso. Acción: el equipo de contenidos publica una landing con el componente y se carga su URL en {LANDING_MY_USUALS_URL}.

---

### TC-B2C55-M-003 - Verificar que el carrusel My Usuals muestra el título configurado centrado [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-11 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 80.0 s |
| Spec | tests/B2C-55.spec.ts:292 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts
- Componente My Usuals configurado en la Home (Page Designer)

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; el login es por correo + código OTP)
- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga la Home.
3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
4. El sistema autentica al usuario y muestra la Home con el carrusel My Usuals.
5. El usuario observa el encabezado del carrusel.

**Resultado esperado**

El título configurado del componente se muestra centrado sobre el carrusel.

**Resultado obtenido**

El título «Tus productos mas comprados» se muestra centrado sobre el carrusel (text-align center, desvío 0 px).

**Evidencia**

![Paso 3 — home con la sesion iniciada](<B2C-55 Evidencias/TC-B2C55-M-003-p03-home-con-la-sesion-iniciada.png>)

![Paso 4 — carrusel my usuals](<B2C-55 Evidencias/TC-B2C55-M-003-p04-carrusel-my-usuals.png>)

![Paso 5 — titulo centrado](<B2C-55 Evidencias/TC-B2C55-M-003-p05-titulo-centrado.png>)

![Estado final](<B2C-55 Evidencias/TC-B2C55-M-003.png>)

---

### TC-B2C55-M-004 - Verificar que cada producto del carrusel My Usuals usa la shelf estándar [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-11 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 80.1 s |
| Spec | tests/B2C-55.spec.ts:295 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts
- Componente My Usuals configurado en la Home (Page Designer)

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; el login es por correo + código OTP)
- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga la Home.
3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
4. El sistema autentica al usuario y muestra la Home con el carrusel My Usuals.
5. El usuario revisa las tarjetas de producto del carrusel.

**Resultado esperado**

Cada tarjeta muestra imagen, nombre, precio y botón "Agregar"; los productos en oferta muestran además el precio oferta.

**Resultado obtenido**

Cada tarjeta muestra imagen, nombre, precio y «Agregar». El Tapapecho vacuno (sin stock, posición 3) muestra «Pronto disponible» y «Ver similares» en lugar de «Agregar», como pide el CA5 de la misma HU. Las tarjetas en oferta muestran precio oferta y precio socio.

**Observación**

El Tapapecho vacuno (sin stock, posición 3) muestra «Pronto disponible» y «Ver similares» en lugar de «Agregar», como pide el CA5 de la misma HU. Las tarjetas en oferta muestran precio oferta y precio socio.

**Evidencia**

![Paso 3 — home con la sesion iniciada](<B2C-55 Evidencias/TC-B2C55-M-004-p03-home-con-la-sesion-iniciada.png>)

![Paso 4 — carrusel my usuals](<B2C-55 Evidencias/TC-B2C55-M-004-p04-carrusel-my-usuals.png>)

![Paso 5 — tarjetas del shelf estandar](<B2C-55 Evidencias/TC-B2C55-M-004-p05-tarjetas-del-shelf-estandar.png>)

![Estado final](<B2C-55 Evidencias/TC-B2C55-M-004.png>)

---

### TC-B2C55-M-005 - Verificar que el carrusel My Usuals muestra el link "Ver todos" [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-11 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 66.5 s |
| Spec | tests/B2C-55.spec.ts:298 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts
- Componente My Usuals configurado en la Home (Page Designer)

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; el login es por correo + código OTP)
- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga la Home.
3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
4. El sistema autentica al usuario y muestra la Home con el carrusel My Usuals.
5. El usuario observa el componente My Usuals.

**Resultado esperado**

El componente muestra el link "Ver todos".

**Resultado obtenido**

El componente muestra el link «Ver todos», que apunta a /account/my-usuals.

**Evidencia**

![Paso 3 — home con la sesion iniciada](<B2C-55 Evidencias/TC-B2C55-M-005-p03-home-con-la-sesion-iniciada.png>)

![Paso 4 — carrusel my usuals](<B2C-55 Evidencias/TC-B2C55-M-005-p04-carrusel-my-usuals.png>)

![Paso 5 — link ver todos](<B2C-55 Evidencias/TC-B2C55-M-005-p05-link-ver-todos.png>)

![Estado final](<B2C-55 Evidencias/TC-B2C55-M-005.png>)

---

### TC-B2C55-M-006 - Verificar que el carrusel My Usuals muestra 2 productos visibles a la vez [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-11 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 80.8 s |
| Spec | tests/B2C-55.spec.ts:301 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts
- Componente My Usuals configurado en la Home (Page Designer)

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; el login es por correo + código OTP)
- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga la Home.
3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
4. El sistema autentica al usuario y muestra la Home con el carrusel My Usuals.
5. El usuario observa el carrusel sin desplazarlo.

**Resultado esperado**

El carrusel muestra 2 productos visibles a la vez y permite desplazarse para ver el resto.

**Resultado obtenido**

Se ven 2 productos a la vez y al deslizar aparecen otros 2. El carrusel trae solo 5 tarjetas de los 29 frecuentes (ver TC-B2C55-D-006).

**Observación**

El carrusel trae solo 5 tarjetas de los 29 frecuentes de la cuenta (ver TC-B2C55-D-006).

**Evidencia**

![Paso 3 — home con la sesion iniciada](<B2C-55 Evidencias/TC-B2C55-M-006-p03-home-con-la-sesion-iniciada.png>)

![Paso 4 — carrusel my usuals](<B2C-55 Evidencias/TC-B2C55-M-006-p04-carrusel-my-usuals.png>)

![Paso 5 — 2 productos visibles sin desplazar](<B2C-55 Evidencias/TC-B2C55-M-006-p05-2-productos-visibles-sin-desplazar.png>)

![Paso 6 — carrusel tras desplazarlo](<B2C-55 Evidencias/TC-B2C55-M-006-p06-carrusel-tras-desplazarlo.png>)

![Estado final](<B2C-55 Evidencias/TC-B2C55-M-006.png>)

---

### TC-B2C55-M-007 - Verificar que el carrusel My Usuals no se muestra con exactamente 5 productos frecuentes [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-11 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 218.2 s |
| Spec | tests/B2C-55.spec.ts:304 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- La cuenta vhchirinos+5frecuentes@avatar-global.com tiene exactamente 5 productos frecuentes en el atributo myUsualsProducts
- Componente My Usuals configurado en la Home (Page Designer)

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {COMPRADOR_5_FRECUENTES_PASSWORD} = contraseña de la cuenta (no se transcribe; el login es por correo + código OTP)
- {COMPRADOR_5_FRECUENTES_USER} = vhchirinos+5frecuentes@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga la Home.
3. El usuario inicia sesión con la cuenta vhchirinos+5frecuentes@avatar-global.com.
4. El sistema autentica al usuario y muestra la Home.
5. El usuario recorre la Home completa.

**Resultado esperado**

La Home no muestra el carrusel My Usuals ni deja espacio vacío en su lugar.

**Resultado obtenido**

La cuenta tiene exactamente 5 frecuentes («5 productos» en Mis productos frecuentes). El Home no muestra el carrusel My Usuals y su contenedor no ocupa lugar (alto 0).

**Observación**

Pasó en el reintento 1: en el primer intento el login por OTP no completó la sesión en Mobile (ambiente).

**Evidencia**

![Paso 3 — la cuenta tiene 5 productos frecuentes](<B2C-55 Evidencias/TC-B2C55-M-007-p03-la-cuenta-tiene-5-productos-frecuentes.png>)

![Paso 5 — home sin el carrusel my usuals](<B2C-55 Evidencias/TC-B2C55-M-007-p05-home-sin-el-carrusel-my-usuals.png>)

![Estado final](<B2C-55 Evidencias/TC-B2C55-M-007.png>)

---

### TC-B2C55-M-008 - Verificar que un producto sin stock del carrusel My Usuals muestra la etiqueta "Pronto disponible" [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-11 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | (sin spec: el caso quedó bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- La cuenta {COMPRADOR_FRECUENTES_SIN_STOCK_USER} tiene más de 5 productos frecuentes y al menos uno sin stock
- Componente My Usuals configurado en la Home (Page Designer)

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {COMPRADOR_FRECUENTES_SIN_STOCK_PASSWORD} = contraseña de la cuenta (no se transcribe; el login es por correo + código OTP)
- {COMPRADOR_FRECUENTES_SIN_STOCK_USER} = TBD en el Excel de data

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga la Home.
3. El usuario inicia sesión con la cuenta {COMPRADOR_FRECUENTES_SIN_STOCK_USER}.
4. El sistema autentica al usuario y muestra la Home con el carrusel My Usuals.
5. El usuario ubica en el carrusel el producto sin stock.

**Resultado esperado**

La tarjeta del producto sin stock muestra la etiqueta "Pronto disponible".

**Resultado obtenido**

Causa: {COMPRADOR_FRECUENTES_SIN_STOCK_USER} y (contraseña de la cuenta) están en TBD en el Excel de data. Acción: cargar una cuenta con más de 5 frecuentes y al menos uno sin stock entre los 5 primeros. Referencia: vhchirinos+comprador@… tiene hoy el Tapapecho vacuno sin stock en la posición 3 y serviría si se declara en estas filas.

**Observación**

Causa: {COMPRADOR_FRECUENTES_SIN_STOCK_USER} y {COMPRADOR_FRECUENTES_SIN_STOCK_PASSWORD} están en TBD en el Excel de data. Acción: cargar una cuenta con más de 5 frecuentes y al menos uno sin stock entre los 5 primeros. Referencia: vhchirinos+comprador@… tiene hoy el Tapapecho vacuno sin stock en la posición 3 y serviría si se declara en estas filas.

---

### TC-B2C55-M-009 - Verificar que un producto sin stock del carrusel My Usuals muestra "Ver similares" en lugar de "Agregar" [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-11 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | (sin spec: el caso quedó bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- La cuenta {COMPRADOR_FRECUENTES_SIN_STOCK_USER} tiene más de 5 productos frecuentes y al menos uno sin stock
- Componente My Usuals configurado en la Home (Page Designer)

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {COMPRADOR_FRECUENTES_SIN_STOCK_PASSWORD} = contraseña de la cuenta (no se transcribe; el login es por correo + código OTP)
- {COMPRADOR_FRECUENTES_SIN_STOCK_USER} = TBD en el Excel de data

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga la Home.
3. El usuario inicia sesión con la cuenta {COMPRADOR_FRECUENTES_SIN_STOCK_USER}.
4. El sistema autentica al usuario y muestra la Home con el carrusel My Usuals.
5. El usuario ubica en el carrusel el producto sin stock.

**Resultado esperado**

La tarjeta del producto sin stock no muestra el botón "Agregar" y muestra el botón "Ver similares".

**Resultado obtenido**

Causa: {COMPRADOR_FRECUENTES_SIN_STOCK_USER} y (contraseña de la cuenta) están en TBD en el Excel de data. Acción: cargar una cuenta con más de 5 frecuentes y al menos uno sin stock entre los 5 primeros. Referencia: vhchirinos+comprador@… tiene hoy el Tapapecho vacuno sin stock en la posición 3 y serviría si se declara en estas filas.

**Observación**

Causa: {COMPRADOR_FRECUENTES_SIN_STOCK_USER} y {COMPRADOR_FRECUENTES_SIN_STOCK_PASSWORD} están en TBD en el Excel de data. Acción: cargar una cuenta con más de 5 frecuentes y al menos uno sin stock entre los 5 primeros. Referencia: vhchirinos+comprador@… tiene hoy el Tapapecho vacuno sin stock en la posición 3 y serviría si se declara en estas filas.

---

### TC-B2C55-M-010 - Verificar que el carrusel My Usuals muestra un ícono de carga mientras obtiene los datos [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-11 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 81.7 s |
| Spec | tests/B2C-55.spec.ts:312 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts
- Componente My Usuals configurado en la Home (Page Designer)
- Red lenta simulada (ej. throttling Slow 3G) para observar la carga

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; el login es por correo + código OTP)
- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga la Home.
3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
4. El sistema autentica al usuario y comienza a cargar la Home.
5. El usuario observa el área del carrusel My Usuals durante la carga.

**Resultado esperado**

El área del carrusel muestra un ícono de carga hasta que los productos están disponibles; luego se muestra el carrusel con los productos.

**Resultado obtenido**

La carga muestra 5 placeholders (chakra-skeleton) con el título y «Ver todos» ya visibles, no un ícono de loading; se aprueba como indicador de carga, el mismo criterio aplicado en B2C-85 D-007. Carga simulada demorando la lista de productos del catálogo. Al terminar se muestran los productos.

**Observación**

La carga muestra 5 placeholders (chakra-skeleton) con el título y «Ver todos» ya visibles, no un ícono de loading; se aprueba como indicador de carga, el mismo criterio aplicado en B2C-85 D-007. Carga simulada demorando la lista de productos del catálogo.

**Evidencia**

![Paso 5 — area del carrusel durante la carga](<B2C-55 Evidencias/TC-B2C55-M-010-p05-area-del-carrusel-durante-la-carga.png>)

![Paso 6 — carrusel con los productos cargados](<B2C-55 Evidencias/TC-B2C55-M-010-p06-carrusel-con-los-productos-cargados.png>)

![Estado final](<B2C-55 Evidencias/TC-B2C55-M-010.png>)

---

### TC-B2C55-M-011 - Verificar que si falla la obtención del atributo myUsuals el componente no se muestra y no hay mensaje de error [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-11 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 88.8 s |
| Spec | tests/B2C-55.spec.ts:315 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts
- Componente My Usuals configurado en la Home (Page Designer)
- Error simulado al recuperar el atributo myUsuals del cliente (con apoyo de Desarrollo)

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; el login es por correo + código OTP)
- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga la Home.
3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
4. El sistema autentica al usuario y no logra recuperar el atributo myUsuals.
5. El usuario recorre la Home completa.

**Resultado esperado**

La Home no muestra el carrusel My Usuals ni ningún mensaje de error, y el resto de los componentes se muestra normalmente.

**Resultado obtenido**

Error simulado: la lectura del cliente (shopper-customers) responde 500. El contenedor de Page Designer queda con alto 0, sin mensaje de error, y el resto del Home se muestra (9 componentes).

**Observación**

Error simulado: la lectura del cliente (shopper-customers) responde 500. El contenedor de Page Designer queda con alto 0, sin mensaje de error, y el resto del Home se muestra (9 componentes).

**Evidencia**

![Paso 5 — home con error al leer myusuals](<B2C-55 Evidencias/TC-B2C55-M-011-p05-home-con-error-al-leer-myusuals.png>)

![Estado final](<B2C-55 Evidencias/TC-B2C55-M-011.png>)

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
  "suite": "B2C-55",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP1/B2C-55 WEB Test Cases.xlsx",
  "title": "B2C-55 - Carrusel My Usuals (Productos frecuentes) - Evidencias QA",
  "updated_at": "2026-11-11"
 },
 "history": {
  "2026-11-11": [
   "TC-B2C55-D-001",
   "TC-B2C55-D-002",
   "TC-B2C55-D-003",
   "TC-B2C55-D-004",
   "TC-B2C55-D-005",
   "TC-B2C55-D-006",
   "TC-B2C55-D-007",
   "TC-B2C55-D-008",
   "TC-B2C55-D-009",
   "TC-B2C55-D-010",
   "TC-B2C55-D-011",
   "TC-B2C55-D-012",
   "TC-B2C55-M-001",
   "TC-B2C55-M-002",
   "TC-B2C55-M-003",
   "TC-B2C55-M-004",
   "TC-B2C55-M-005",
   "TC-B2C55-M-006",
   "TC-B2C55-M-007",
   "TC-B2C55-M-008",
   "TC-B2C55-M-009",
   "TC-B2C55-M-010",
   "TC-B2C55-M-011"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "duration_s": 33.6,
   "executed_at": "2026-11-11",
   "expected": "Los productos del carrusel aparecen en el mismo orden que en el atributo myUsualsProducts de la cuenta.",
   "form_factor": "desktop",
   "id": "TC-B2C55-D-001",
   "name": "Verificar que el carrusel My Usuals muestra los productos en el orden de relevancia del atributo myUsualsProducts [Desktop] [Logueado]",
   "observed": "Los 5 productos del carrusel siguen el orden de c_myUsuals: Galletas La Galleteria, Carne molida 250 g, Tapapecho vacuno, Carne molida 500 g y Trapero Nova (los 5 primeros de 29).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts\n- Componente My Usuals configurado en la Home (Page Designer)\n- Se conoce el orden de los productos en el atributo myUsualsProducts de la cuenta (orden de relevancia definido por Data SMU)",
   "screenshots": [
    {
     "caption": "Paso 3 — home con la sesion iniciada",
     "file": "TC-B2C55-D-001-p03-home-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — carrusel my usuals",
     "file": "TC-B2C55-D-001-p04-carrusel-my-usuals.png"
    },
    {
     "caption": "Paso 5 — orden de los productos del carrusel",
     "file": "TC-B2C55-D-001-p05-orden-de-los-productos-del-carrusel.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C55-D-001.png"
    }
   ],
   "spec": "tests/B2C-55.spec.ts:260",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ con viewport Desktop 1440x900.\n2. El sistema carga la Home.\n3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n4. El sistema autentica al usuario y muestra la Home con el carrusel My Usuals.\n5. El usuario recorre el carrusel de izquierda a derecha y compara el orden con el atributo myUsualsProducts de la cuenta.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; el login es por correo + código OTP)\n- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-11",
   "expected": "La landing muestra el carrusel My Usuals con los productos frecuentes de la cuenta, en la posición configurada en Page Designer.",
   "form_factor": "desktop",
   "id": "TC-B2C55-D-002",
   "name": "Verificar que el carrusel My Usuals se muestra en una landing que contiene el componente [Desktop] [Logueado]",
   "observation": "Causa: {LANDING_MY_USUALS_URL} está en TBD en el Excel de data, así que no hay landing con el componente My Usuals sobre la que correr el caso. Acción: el equipo de contenidos publica una landing con el componente y se carga su URL en {LANDING_MY_USUALS_URL}.",
   "observed": "Causa: {LANDING_MY_USUALS_URL} está en TBD en el Excel de data, así que no hay landing con el componente My Usuals sobre la que correr el caso. Acción: el equipo de contenidos publica una landing con el componente y se carga su URL en {LANDING_MY_USUALS_URL}.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Landing\n- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts\n- Landing {LANDING_MY_USUALS_URL} con el componente My Usuals configurado en Page Designer",
   "spec": "(sin spec: el caso quedó bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ con viewport Desktop 1440x900.\n2. El sistema carga la Home.\n3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n4. El sistema autentica al usuario.\n5. El usuario navega a la landing {LANDING_MY_USUALS_URL}.\n6. El sistema carga la landing con sus componentes.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; el login es por correo + código OTP)\n- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com\n- {LANDING_MY_USUALS_URL} = TBD en el Excel de data",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 33.7,
   "executed_at": "2026-11-11",
   "expected": "El título configurado del componente se muestra centrado sobre el carrusel.",
   "form_factor": "desktop",
   "id": "TC-B2C55-D-003",
   "name": "Verificar que el carrusel My Usuals muestra el título configurado centrado [Desktop] [Logueado]",
   "observed": "El título «Tus productos mas comprados» se muestra centrado sobre el carrusel (text-align center, desvío 0 px).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts\n- Componente My Usuals configurado en la Home (Page Designer)",
   "screenshots": [
    {
     "caption": "Paso 3 — home con la sesion iniciada",
     "file": "TC-B2C55-D-003-p03-home-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — carrusel my usuals",
     "file": "TC-B2C55-D-003-p04-carrusel-my-usuals.png"
    },
    {
     "caption": "Paso 5 — titulo centrado",
     "file": "TC-B2C55-D-003-p05-titulo-centrado.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C55-D-003.png"
    }
   ],
   "spec": "tests/B2C-55.spec.ts:263",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ con viewport Desktop 1440x900.\n2. El sistema carga la Home.\n3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n4. El sistema autentica al usuario y muestra la Home con el carrusel My Usuals.\n5. El usuario observa el encabezado del carrusel.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; el login es por correo + código OTP)\n- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 34.2,
   "executed_at": "2026-11-11",
   "expected": "Cada tarjeta muestra imagen, nombre, precio y botón \"Agregar\"; los productos en oferta muestran además el precio oferta.",
   "form_factor": "desktop",
   "id": "TC-B2C55-D-004",
   "name": "Verificar que cada producto del carrusel My Usuals usa la shelf estándar [Desktop] [Logueado]",
   "observation": "El Tapapecho vacuno (sin stock, posición 3) muestra «Pronto disponible» y «Ver similares» en lugar de «Agregar», como pide el CA5 de la misma HU. Las tarjetas en oferta muestran precio oferta y precio socio.",
   "observed": "Cada tarjeta muestra imagen, nombre, precio y «Agregar». El Tapapecho vacuno (sin stock, posición 3) muestra «Pronto disponible» y «Ver similares» en lugar de «Agregar», como pide el CA5 de la misma HU. Las tarjetas en oferta muestran precio oferta y precio socio.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts\n- Componente My Usuals configurado en la Home (Page Designer)",
   "screenshots": [
    {
     "caption": "Paso 3 — home con la sesion iniciada",
     "file": "TC-B2C55-D-004-p03-home-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — carrusel my usuals",
     "file": "TC-B2C55-D-004-p04-carrusel-my-usuals.png"
    },
    {
     "caption": "Paso 5 — tarjetas del shelf estandar",
     "file": "TC-B2C55-D-004-p05-tarjetas-del-shelf-estandar.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C55-D-004.png"
    }
   ],
   "spec": "tests/B2C-55.spec.ts:266",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ con viewport Desktop 1440x900.\n2. El sistema carga la Home.\n3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n4. El sistema autentica al usuario y muestra la Home con el carrusel My Usuals.\n5. El usuario revisa las tarjetas de producto del carrusel.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; el login es por correo + código OTP)\n- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 33.3,
   "executed_at": "2026-11-11",
   "expected": "El componente muestra el link \"Ver todos\".",
   "form_factor": "desktop",
   "id": "TC-B2C55-D-005",
   "name": "Verificar que el carrusel My Usuals muestra el link \"Ver todos\" [Desktop] [Logueado]",
   "observed": "El componente muestra el link «Ver todos», que apunta a /account/my-usuals.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts\n- Componente My Usuals configurado en la Home (Page Designer)",
   "screenshots": [
    {
     "caption": "Paso 3 — home con la sesion iniciada",
     "file": "TC-B2C55-D-005-p03-home-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — carrusel my usuals",
     "file": "TC-B2C55-D-005-p04-carrusel-my-usuals.png"
    },
    {
     "caption": "Paso 5 — link ver todos",
     "file": "TC-B2C55-D-005-p05-link-ver-todos.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C55-D-005.png"
    }
   ],
   "spec": "tests/B2C-55.spec.ts:269",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ con viewport Desktop 1440x900.\n2. El sistema carga la Home.\n3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n4. El sistema autentica al usuario y muestra la Home con el carrusel My Usuals.\n5. El usuario observa el componente My Usuals.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; el login es por correo + código OTP)\n- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 38.8,
   "executed_at": "2026-11-11",
   "expected": "El carrusel muestra 5 productos visibles a la vez y permite desplazarse para ver el resto.",
   "form_factor": "desktop",
   "id": "TC-B2C55-D-006",
   "name": "Verificar que el carrusel My Usuals muestra 5 productos visibles a la vez [Desktop] [Logueado]",
   "observation": "Esperado: 5 productos visibles a la vez y desplazamiento para ver el resto. Obtenido: se ven 5 a la vez, pero el carrusel trae solo 5 tarjetas para los 29 frecuentes de c_myUsuals de la cuenta (pide al catálogo solo los 5 primeros SKU); al tocar «Ver más productos» siguen los mismos 5 y no aparece ningún otro. tests/B2C-55.spec.ts:272. Bug: B2C-1482.",
   "observed": "Esperado: 5 productos visibles a la vez y desplazamiento para ver el resto. Obtenido: se ven 5 a la vez, pero el carrusel trae solo 5 tarjetas para los 29 frecuentes de c_myUsuals de la cuenta (pide al catálogo solo los 5 primeros SKU); al tocar «Ver más productos» siguen los mismos 5 y no aparece ningún otro. tests/B2C-55.spec.ts:272. Bug: B2C-1482.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts\n- Componente My Usuals configurado en la Home (Page Designer)",
   "screenshots": [
    {
     "caption": "Paso 3 — home con la sesion iniciada",
     "file": "TC-B2C55-D-006-p03-home-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — carrusel my usuals",
     "file": "TC-B2C55-D-006-p04-carrusel-my-usuals.png"
    },
    {
     "caption": "Paso 5 — 5 productos visibles sin desplazar",
     "file": "TC-B2C55-D-006-p05-5-productos-visibles-sin-desplazar.png"
    },
    {
     "caption": "Paso 6 — carrusel tras desplazarlo",
     "file": "TC-B2C55-D-006-p06-carrusel-tras-desplazarlo.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C55-D-006.png"
    }
   ],
   "spec": "tests/B2C-55.spec.ts:272",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ con viewport Desktop 1440x900.\n2. El sistema carga la Home.\n3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n4. El sistema autentica al usuario y muestra la Home con el carrusel My Usuals.\n5. El usuario observa el carrusel sin desplazarlo.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; el login es por correo + código OTP)\n- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 44.6,
   "executed_at": "2026-11-11",
   "expected": "La Home no muestra el carrusel My Usuals ni deja espacio vacío en su lugar.",
   "form_factor": "desktop",
   "id": "TC-B2C55-D-007",
   "name": "Verificar que el carrusel My Usuals no se muestra con exactamente 5 productos frecuentes [Desktop] [Logueado]",
   "observed": "La cuenta tiene exactamente 5 frecuentes («5 productos» en Mis productos frecuentes). El Home no muestra el carrusel My Usuals y su contenedor no ocupa lugar (alto 0).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- La cuenta vhchirinos+5frecuentes@avatar-global.com tiene exactamente 5 productos frecuentes en el atributo myUsualsProducts\n- Componente My Usuals configurado en la Home (Page Designer)",
   "screenshots": [
    {
     "caption": "Paso 3 — la cuenta tiene 5 productos frecuentes",
     "file": "TC-B2C55-D-007-p03-la-cuenta-tiene-5-productos-frecuentes.png"
    },
    {
     "caption": "Paso 5 — home sin el carrusel my usuals",
     "file": "TC-B2C55-D-007-p05-home-sin-el-carrusel-my-usuals.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C55-D-007.png"
    }
   ],
   "spec": "tests/B2C-55.spec.ts:275",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ con viewport Desktop 1440x900.\n2. El sistema carga la Home.\n3. El usuario inicia sesión con la cuenta vhchirinos+5frecuentes@avatar-global.com.\n4. El sistema autentica al usuario y muestra la Home.\n5. El usuario recorre la Home completa.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {COMPRADOR_5_FRECUENTES_PASSWORD} = contraseña de la cuenta (no se transcribe; el login es por correo + código OTP)\n- {COMPRADOR_5_FRECUENTES_USER} = vhchirinos+5frecuentes@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-11",
   "expected": "La tarjeta del producto sin stock muestra la etiqueta \"Pronto disponible\".",
   "form_factor": "desktop",
   "id": "TC-B2C55-D-008",
   "name": "Verificar que un producto sin stock del carrusel My Usuals muestra la etiqueta \"Pronto disponible\" [Desktop] [Logueado]",
   "observation": "Causa: {COMPRADOR_FRECUENTES_SIN_STOCK_USER} y {COMPRADOR_FRECUENTES_SIN_STOCK_PASSWORD} están en TBD en el Excel de data. Acción: cargar una cuenta con más de 5 frecuentes y al menos uno sin stock entre los 5 primeros. Referencia: vhchirinos+comprador@… tiene hoy el Tapapecho vacuno sin stock en la posición 3 y serviría si se declara en estas filas.",
   "observed": "Causa: {COMPRADOR_FRECUENTES_SIN_STOCK_USER} y (contraseña de la cuenta) están en TBD en el Excel de data. Acción: cargar una cuenta con más de 5 frecuentes y al menos uno sin stock entre los 5 primeros. Referencia: vhchirinos+comprador@… tiene hoy el Tapapecho vacuno sin stock en la posición 3 y serviría si se declara en estas filas.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- La cuenta {COMPRADOR_FRECUENTES_SIN_STOCK_USER} tiene más de 5 productos frecuentes y al menos uno sin stock\n- Componente My Usuals configurado en la Home (Page Designer)",
   "spec": "(sin spec: el caso quedó bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ con viewport Desktop 1440x900.\n2. El sistema carga la Home.\n3. El usuario inicia sesión con la cuenta {COMPRADOR_FRECUENTES_SIN_STOCK_USER}.\n4. El sistema autentica al usuario y muestra la Home con el carrusel My Usuals.\n5. El usuario ubica en el carrusel el producto sin stock.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {COMPRADOR_FRECUENTES_SIN_STOCK_PASSWORD} = contraseña de la cuenta (no se transcribe; el login es por correo + código OTP)\n- {COMPRADOR_FRECUENTES_SIN_STOCK_USER} = TBD en el Excel de data",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-11",
   "expected": "La tarjeta del producto sin stock no muestra el botón \"Agregar\" y muestra el botón \"Ver similares\".",
   "form_factor": "desktop",
   "id": "TC-B2C55-D-009",
   "name": "Verificar que un producto sin stock del carrusel My Usuals muestra \"Ver similares\" en lugar de \"Agregar\" [Desktop] [Logueado]",
   "observation": "Causa: {COMPRADOR_FRECUENTES_SIN_STOCK_USER} y {COMPRADOR_FRECUENTES_SIN_STOCK_PASSWORD} están en TBD en el Excel de data. Acción: cargar una cuenta con más de 5 frecuentes y al menos uno sin stock entre los 5 primeros. Referencia: vhchirinos+comprador@… tiene hoy el Tapapecho vacuno sin stock en la posición 3 y serviría si se declara en estas filas.",
   "observed": "Causa: {COMPRADOR_FRECUENTES_SIN_STOCK_USER} y (contraseña de la cuenta) están en TBD en el Excel de data. Acción: cargar una cuenta con más de 5 frecuentes y al menos uno sin stock entre los 5 primeros. Referencia: vhchirinos+comprador@… tiene hoy el Tapapecho vacuno sin stock en la posición 3 y serviría si se declara en estas filas.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- La cuenta {COMPRADOR_FRECUENTES_SIN_STOCK_USER} tiene más de 5 productos frecuentes y al menos uno sin stock\n- Componente My Usuals configurado en la Home (Page Designer)",
   "spec": "(sin spec: el caso quedó bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ con viewport Desktop 1440x900.\n2. El sistema carga la Home.\n3. El usuario inicia sesión con la cuenta {COMPRADOR_FRECUENTES_SIN_STOCK_USER}.\n4. El sistema autentica al usuario y muestra la Home con el carrusel My Usuals.\n5. El usuario ubica en el carrusel el producto sin stock.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {COMPRADOR_FRECUENTES_SIN_STOCK_PASSWORD} = contraseña de la cuenta (no se transcribe; el login es por correo + código OTP)\n- {COMPRADOR_FRECUENTES_SIN_STOCK_USER} = TBD en el Excel de data",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-11",
   "expected": "El contador del ícono del carro aumenta en 1 y la tarjeta del producto muestra el stepper con 1 unidad.",
   "form_factor": "desktop",
   "id": "TC-B2C55-D-010",
   "name": "Verificar que \"Agregar\" en el carrusel My Usuals suma el producto al carro y actualiza el contador [Desktop] [Logueado]",
   "observation": "Causa: el caso pide un método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura) y la cuenta {COMPRADOR_USUALS_MAS_24_USER} no lo tiene: el header muestra «Elige una forma de entrega». La fila no declara la dirección ni la tienda a usar, así que no se puede fijar sin elegir data por fuera del caso. Acción: declarar en Test data el token de la dirección o la tienda con cobertura, o dejar la cuenta con un método de entrega activo.",
   "observed": "Causa: el caso pide un método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura) y la cuenta vhchirinos+comprador@avatar-global.com no lo tiene: el header muestra «Elige una forma de entrega». La fila no declara la dirección ni la tienda a usar, así que no se puede fijar sin elegir data por fuera del caso. Acción: declarar en Test data el token de la dirección o la tienda con cobertura, o dejar la cuenta con un método de entrega activo.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts\n- Componente My Usuals configurado en la Home (Page Designer)\n- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)",
   "spec": "(sin spec: el caso quedó bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ con viewport Desktop 1440x900.\n2. El sistema carga la Home.\n3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n4. El sistema autentica al usuario y muestra la Home con el carrusel My Usuals.\n5. El usuario anota el contador del carro y hace clic en \"Agregar\" en un producto con stock del carrusel.\n6. El sistema agrega el producto al carro.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; el login es por correo + código OTP)\n- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 31.1,
   "executed_at": "2026-11-11",
   "expected": "El área del carrusel muestra un ícono de carga hasta que los productos están disponibles; luego se muestra el carrusel con los productos.",
   "form_factor": "desktop",
   "id": "TC-B2C55-D-011",
   "name": "Verificar que el carrusel My Usuals muestra un ícono de carga mientras obtiene los datos [Desktop] [Logueado]",
   "observation": "La carga muestra 5 placeholders (chakra-skeleton) con el título y «Ver todos» ya visibles, no un ícono de loading; se aprueba como indicador de carga, el mismo criterio aplicado en B2C-85 D-007. Carga simulada demorando la lista de productos del catálogo.",
   "observed": "La carga muestra 5 placeholders (chakra-skeleton) con el título y «Ver todos» ya visibles, no un ícono de loading; se aprueba como indicador de carga, el mismo criterio aplicado en B2C-85 D-007. Carga simulada demorando la lista de productos del catálogo. Al terminar se muestran los productos.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts\n- Componente My Usuals configurado en la Home (Page Designer)\n- Red lenta simulada (ej. throttling Slow 3G) para observar la carga",
   "screenshots": [
    {
     "caption": "Paso 5 — area del carrusel durante la carga",
     "file": "TC-B2C55-D-011-p05-area-del-carrusel-durante-la-carga.png"
    },
    {
     "caption": "Paso 6 — carrusel con los productos cargados",
     "file": "TC-B2C55-D-011-p06-carrusel-con-los-productos-cargados.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C55-D-011.png"
    }
   ],
   "spec": "tests/B2C-55.spec.ts:278",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ con viewport Desktop 1440x900.\n2. El sistema carga la Home.\n3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n4. El sistema autentica al usuario y comienza a cargar la Home.\n5. El usuario observa el área del carrusel My Usuals durante la carga.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; el login es por correo + código OTP)\n- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 36.5,
   "executed_at": "2026-11-11",
   "expected": "La Home no muestra el carrusel My Usuals ni ningún mensaje de error, y el resto de los componentes se muestra normalmente.",
   "form_factor": "desktop",
   "id": "TC-B2C55-D-012",
   "name": "Verificar que si falla la obtención del atributo myUsuals el componente no se muestra y no hay mensaje de error [Desktop] [Logueado]",
   "observation": "Error simulado: la lectura del cliente (shopper-customers) responde 500. El contenedor de Page Designer queda con alto 0, sin mensaje de error, y el resto del Home se muestra (9 componentes).",
   "observed": "Error simulado: la lectura del cliente (shopper-customers) responde 500. El contenedor de Page Designer queda con alto 0, sin mensaje de error, y el resto del Home se muestra (9 componentes).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts\n- Componente My Usuals configurado en la Home (Page Designer)\n- Error simulado al recuperar el atributo myUsuals del cliente (con apoyo de Desarrollo)",
   "screenshots": [
    {
     "caption": "Paso 5 — home con error al leer myusuals",
     "file": "TC-B2C55-D-012-p05-home-con-error-al-leer-myusuals.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C55-D-012.png"
    }
   ],
   "spec": "tests/B2C-55.spec.ts:281",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ con viewport Desktop 1440x900.\n2. El sistema carga la Home.\n3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n4. El sistema autentica al usuario y no logra recuperar el atributo myUsuals.\n5. El usuario recorre la Home completa.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; el login es por correo + código OTP)\n- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "webkit",
   "duration_s": 71.6,
   "executed_at": "2026-11-11",
   "expected": "Los productos del carrusel aparecen en el mismo orden que en el atributo myUsualsProducts de la cuenta.",
   "form_factor": "mobile",
   "id": "TC-B2C55-M-001",
   "name": "Verificar que el carrusel My Usuals muestra los productos en el orden de relevancia del atributo myUsualsProducts [Mobile] [Logueado]",
   "observed": "Los 5 productos del carrusel siguen el orden de c_myUsuals: Galletas La Galleteria, Carne molida 250 g, Tapapecho vacuno, Carne molida 500 g y Trapero Nova (los 5 primeros de 29).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts\n- Componente My Usuals configurado en la Home (Page Designer)\n- Se conoce el orden de los productos en el atributo myUsualsProducts de la cuenta (orden de relevancia definido por Data SMU)",
   "screenshots": [
    {
     "caption": "Paso 3 — home con la sesion iniciada",
     "file": "TC-B2C55-M-001-p03-home-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — carrusel my usuals",
     "file": "TC-B2C55-M-001-p04-carrusel-my-usuals.png"
    },
    {
     "caption": "Paso 5 — orden de los productos del carrusel",
     "file": "TC-B2C55-M-001-p05-orden-de-los-productos-del-carrusel.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C55-M-001.png"
    }
   ],
   "spec": "tests/B2C-55.spec.ts:289",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga la Home.\n3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n4. El sistema autentica al usuario y muestra la Home con el carrusel My Usuals.\n5. El usuario recorre el carrusel de izquierda a derecha y compara el orden con el atributo myUsualsProducts de la cuenta.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; el login es por correo + código OTP)\n- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-11",
   "expected": "La landing muestra el carrusel My Usuals con los productos frecuentes de la cuenta, en la posición configurada en Page Designer.",
   "form_factor": "mobile",
   "id": "TC-B2C55-M-002",
   "name": "Verificar que el carrusel My Usuals se muestra en una landing que contiene el componente [Mobile] [Logueado]",
   "observation": "Causa: {LANDING_MY_USUALS_URL} está en TBD en el Excel de data, así que no hay landing con el componente My Usuals sobre la que correr el caso. Acción: el equipo de contenidos publica una landing con el componente y se carga su URL en {LANDING_MY_USUALS_URL}.",
   "observed": "Causa: {LANDING_MY_USUALS_URL} está en TBD en el Excel de data, así que no hay landing con el componente My Usuals sobre la que correr el caso. Acción: el equipo de contenidos publica una landing con el componente y se carga su URL en {LANDING_MY_USUALS_URL}.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Landing\n- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts\n- Landing {LANDING_MY_USUALS_URL} con el componente My Usuals configurado en Page Designer",
   "spec": "(sin spec: el caso quedó bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga la Home.\n3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n4. El sistema autentica al usuario.\n5. El usuario navega a la landing {LANDING_MY_USUALS_URL}.\n6. El sistema carga la landing con sus componentes.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; el login es por correo + código OTP)\n- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com\n- {LANDING_MY_USUALS_URL} = TBD en el Excel de data",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 80.0,
   "executed_at": "2026-11-11",
   "expected": "El título configurado del componente se muestra centrado sobre el carrusel.",
   "form_factor": "mobile",
   "id": "TC-B2C55-M-003",
   "name": "Verificar que el carrusel My Usuals muestra el título configurado centrado [Mobile] [Logueado]",
   "observed": "El título «Tus productos mas comprados» se muestra centrado sobre el carrusel (text-align center, desvío 0 px).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts\n- Componente My Usuals configurado en la Home (Page Designer)",
   "screenshots": [
    {
     "caption": "Paso 3 — home con la sesion iniciada",
     "file": "TC-B2C55-M-003-p03-home-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — carrusel my usuals",
     "file": "TC-B2C55-M-003-p04-carrusel-my-usuals.png"
    },
    {
     "caption": "Paso 5 — titulo centrado",
     "file": "TC-B2C55-M-003-p05-titulo-centrado.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C55-M-003.png"
    }
   ],
   "spec": "tests/B2C-55.spec.ts:292",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga la Home.\n3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n4. El sistema autentica al usuario y muestra la Home con el carrusel My Usuals.\n5. El usuario observa el encabezado del carrusel.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; el login es por correo + código OTP)\n- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 80.1,
   "executed_at": "2026-11-11",
   "expected": "Cada tarjeta muestra imagen, nombre, precio y botón \"Agregar\"; los productos en oferta muestran además el precio oferta.",
   "form_factor": "mobile",
   "id": "TC-B2C55-M-004",
   "name": "Verificar que cada producto del carrusel My Usuals usa la shelf estándar [Mobile] [Logueado]",
   "observation": "El Tapapecho vacuno (sin stock, posición 3) muestra «Pronto disponible» y «Ver similares» en lugar de «Agregar», como pide el CA5 de la misma HU. Las tarjetas en oferta muestran precio oferta y precio socio.",
   "observed": "Cada tarjeta muestra imagen, nombre, precio y «Agregar». El Tapapecho vacuno (sin stock, posición 3) muestra «Pronto disponible» y «Ver similares» en lugar de «Agregar», como pide el CA5 de la misma HU. Las tarjetas en oferta muestran precio oferta y precio socio.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts\n- Componente My Usuals configurado en la Home (Page Designer)",
   "screenshots": [
    {
     "caption": "Paso 3 — home con la sesion iniciada",
     "file": "TC-B2C55-M-004-p03-home-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — carrusel my usuals",
     "file": "TC-B2C55-M-004-p04-carrusel-my-usuals.png"
    },
    {
     "caption": "Paso 5 — tarjetas del shelf estandar",
     "file": "TC-B2C55-M-004-p05-tarjetas-del-shelf-estandar.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C55-M-004.png"
    }
   ],
   "spec": "tests/B2C-55.spec.ts:295",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga la Home.\n3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n4. El sistema autentica al usuario y muestra la Home con el carrusel My Usuals.\n5. El usuario revisa las tarjetas de producto del carrusel.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; el login es por correo + código OTP)\n- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 66.5,
   "executed_at": "2026-11-11",
   "expected": "El componente muestra el link \"Ver todos\".",
   "form_factor": "mobile",
   "id": "TC-B2C55-M-005",
   "name": "Verificar que el carrusel My Usuals muestra el link \"Ver todos\" [Mobile] [Logueado]",
   "observed": "El componente muestra el link «Ver todos», que apunta a /account/my-usuals.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts\n- Componente My Usuals configurado en la Home (Page Designer)",
   "screenshots": [
    {
     "caption": "Paso 3 — home con la sesion iniciada",
     "file": "TC-B2C55-M-005-p03-home-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — carrusel my usuals",
     "file": "TC-B2C55-M-005-p04-carrusel-my-usuals.png"
    },
    {
     "caption": "Paso 5 — link ver todos",
     "file": "TC-B2C55-M-005-p05-link-ver-todos.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C55-M-005.png"
    }
   ],
   "spec": "tests/B2C-55.spec.ts:298",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga la Home.\n3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n4. El sistema autentica al usuario y muestra la Home con el carrusel My Usuals.\n5. El usuario observa el componente My Usuals.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; el login es por correo + código OTP)\n- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 80.8,
   "executed_at": "2026-11-11",
   "expected": "El carrusel muestra 2 productos visibles a la vez y permite desplazarse para ver el resto.",
   "form_factor": "mobile",
   "id": "TC-B2C55-M-006",
   "name": "Verificar que el carrusel My Usuals muestra 2 productos visibles a la vez [Mobile] [Logueado]",
   "observation": "El carrusel trae solo 5 tarjetas de los 29 frecuentes de la cuenta (ver TC-B2C55-D-006).",
   "observed": "Se ven 2 productos a la vez y al deslizar aparecen otros 2. El carrusel trae solo 5 tarjetas de los 29 frecuentes (ver TC-B2C55-D-006).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts\n- Componente My Usuals configurado en la Home (Page Designer)",
   "screenshots": [
    {
     "caption": "Paso 3 — home con la sesion iniciada",
     "file": "TC-B2C55-M-006-p03-home-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — carrusel my usuals",
     "file": "TC-B2C55-M-006-p04-carrusel-my-usuals.png"
    },
    {
     "caption": "Paso 5 — 2 productos visibles sin desplazar",
     "file": "TC-B2C55-M-006-p05-2-productos-visibles-sin-desplazar.png"
    },
    {
     "caption": "Paso 6 — carrusel tras desplazarlo",
     "file": "TC-B2C55-M-006-p06-carrusel-tras-desplazarlo.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C55-M-006.png"
    }
   ],
   "spec": "tests/B2C-55.spec.ts:301",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga la Home.\n3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n4. El sistema autentica al usuario y muestra la Home con el carrusel My Usuals.\n5. El usuario observa el carrusel sin desplazarlo.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; el login es por correo + código OTP)\n- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 218.2,
   "executed_at": "2026-11-11",
   "expected": "La Home no muestra el carrusel My Usuals ni deja espacio vacío en su lugar.",
   "form_factor": "mobile",
   "id": "TC-B2C55-M-007",
   "name": "Verificar que el carrusel My Usuals no se muestra con exactamente 5 productos frecuentes [Mobile] [Logueado]",
   "observation": "Pasó en el reintento 1: en el primer intento el login por OTP no completó la sesión en Mobile (ambiente).",
   "observed": "La cuenta tiene exactamente 5 frecuentes («5 productos» en Mis productos frecuentes). El Home no muestra el carrusel My Usuals y su contenedor no ocupa lugar (alto 0).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- La cuenta vhchirinos+5frecuentes@avatar-global.com tiene exactamente 5 productos frecuentes en el atributo myUsualsProducts\n- Componente My Usuals configurado en la Home (Page Designer)",
   "screenshots": [
    {
     "caption": "Paso 3 — la cuenta tiene 5 productos frecuentes",
     "file": "TC-B2C55-M-007-p03-la-cuenta-tiene-5-productos-frecuentes.png"
    },
    {
     "caption": "Paso 5 — home sin el carrusel my usuals",
     "file": "TC-B2C55-M-007-p05-home-sin-el-carrusel-my-usuals.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C55-M-007.png"
    }
   ],
   "spec": "tests/B2C-55.spec.ts:304",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga la Home.\n3. El usuario inicia sesión con la cuenta vhchirinos+5frecuentes@avatar-global.com.\n4. El sistema autentica al usuario y muestra la Home.\n5. El usuario recorre la Home completa.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {COMPRADOR_5_FRECUENTES_PASSWORD} = contraseña de la cuenta (no se transcribe; el login es por correo + código OTP)\n- {COMPRADOR_5_FRECUENTES_USER} = vhchirinos+5frecuentes@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-11",
   "expected": "La tarjeta del producto sin stock muestra la etiqueta \"Pronto disponible\".",
   "form_factor": "mobile",
   "id": "TC-B2C55-M-008",
   "name": "Verificar que un producto sin stock del carrusel My Usuals muestra la etiqueta \"Pronto disponible\" [Mobile] [Logueado]",
   "observation": "Causa: {COMPRADOR_FRECUENTES_SIN_STOCK_USER} y {COMPRADOR_FRECUENTES_SIN_STOCK_PASSWORD} están en TBD en el Excel de data. Acción: cargar una cuenta con más de 5 frecuentes y al menos uno sin stock entre los 5 primeros. Referencia: vhchirinos+comprador@… tiene hoy el Tapapecho vacuno sin stock en la posición 3 y serviría si se declara en estas filas.",
   "observed": "Causa: {COMPRADOR_FRECUENTES_SIN_STOCK_USER} y (contraseña de la cuenta) están en TBD en el Excel de data. Acción: cargar una cuenta con más de 5 frecuentes y al menos uno sin stock entre los 5 primeros. Referencia: vhchirinos+comprador@… tiene hoy el Tapapecho vacuno sin stock en la posición 3 y serviría si se declara en estas filas.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- La cuenta {COMPRADOR_FRECUENTES_SIN_STOCK_USER} tiene más de 5 productos frecuentes y al menos uno sin stock\n- Componente My Usuals configurado en la Home (Page Designer)",
   "spec": "(sin spec: el caso quedó bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga la Home.\n3. El usuario inicia sesión con la cuenta {COMPRADOR_FRECUENTES_SIN_STOCK_USER}.\n4. El sistema autentica al usuario y muestra la Home con el carrusel My Usuals.\n5. El usuario ubica en el carrusel el producto sin stock.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {COMPRADOR_FRECUENTES_SIN_STOCK_PASSWORD} = contraseña de la cuenta (no se transcribe; el login es por correo + código OTP)\n- {COMPRADOR_FRECUENTES_SIN_STOCK_USER} = TBD en el Excel de data",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-11",
   "expected": "La tarjeta del producto sin stock no muestra el botón \"Agregar\" y muestra el botón \"Ver similares\".",
   "form_factor": "mobile",
   "id": "TC-B2C55-M-009",
   "name": "Verificar que un producto sin stock del carrusel My Usuals muestra \"Ver similares\" en lugar de \"Agregar\" [Mobile] [Logueado]",
   "observation": "Causa: {COMPRADOR_FRECUENTES_SIN_STOCK_USER} y {COMPRADOR_FRECUENTES_SIN_STOCK_PASSWORD} están en TBD en el Excel de data. Acción: cargar una cuenta con más de 5 frecuentes y al menos uno sin stock entre los 5 primeros. Referencia: vhchirinos+comprador@… tiene hoy el Tapapecho vacuno sin stock en la posición 3 y serviría si se declara en estas filas.",
   "observed": "Causa: {COMPRADOR_FRECUENTES_SIN_STOCK_USER} y (contraseña de la cuenta) están en TBD en el Excel de data. Acción: cargar una cuenta con más de 5 frecuentes y al menos uno sin stock entre los 5 primeros. Referencia: vhchirinos+comprador@… tiene hoy el Tapapecho vacuno sin stock en la posición 3 y serviría si se declara en estas filas.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- La cuenta {COMPRADOR_FRECUENTES_SIN_STOCK_USER} tiene más de 5 productos frecuentes y al menos uno sin stock\n- Componente My Usuals configurado en la Home (Page Designer)",
   "spec": "(sin spec: el caso quedó bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga la Home.\n3. El usuario inicia sesión con la cuenta {COMPRADOR_FRECUENTES_SIN_STOCK_USER}.\n4. El sistema autentica al usuario y muestra la Home con el carrusel My Usuals.\n5. El usuario ubica en el carrusel el producto sin stock.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {COMPRADOR_FRECUENTES_SIN_STOCK_PASSWORD} = contraseña de la cuenta (no se transcribe; el login es por correo + código OTP)\n- {COMPRADOR_FRECUENTES_SIN_STOCK_USER} = TBD en el Excel de data",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 81.7,
   "executed_at": "2026-11-11",
   "expected": "El área del carrusel muestra un ícono de carga hasta que los productos están disponibles; luego se muestra el carrusel con los productos.",
   "form_factor": "mobile",
   "id": "TC-B2C55-M-010",
   "name": "Verificar que el carrusel My Usuals muestra un ícono de carga mientras obtiene los datos [Mobile] [Logueado]",
   "observation": "La carga muestra 5 placeholders (chakra-skeleton) con el título y «Ver todos» ya visibles, no un ícono de loading; se aprueba como indicador de carga, el mismo criterio aplicado en B2C-85 D-007. Carga simulada demorando la lista de productos del catálogo.",
   "observed": "La carga muestra 5 placeholders (chakra-skeleton) con el título y «Ver todos» ya visibles, no un ícono de loading; se aprueba como indicador de carga, el mismo criterio aplicado en B2C-85 D-007. Carga simulada demorando la lista de productos del catálogo. Al terminar se muestran los productos.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts\n- Componente My Usuals configurado en la Home (Page Designer)\n- Red lenta simulada (ej. throttling Slow 3G) para observar la carga",
   "screenshots": [
    {
     "caption": "Paso 5 — area del carrusel durante la carga",
     "file": "TC-B2C55-M-010-p05-area-del-carrusel-durante-la-carga.png"
    },
    {
     "caption": "Paso 6 — carrusel con los productos cargados",
     "file": "TC-B2C55-M-010-p06-carrusel-con-los-productos-cargados.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C55-M-010.png"
    }
   ],
   "spec": "tests/B2C-55.spec.ts:312",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga la Home.\n3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n4. El sistema autentica al usuario y comienza a cargar la Home.\n5. El usuario observa el área del carrusel My Usuals durante la carga.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; el login es por correo + código OTP)\n- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 88.8,
   "executed_at": "2026-11-11",
   "expected": "La Home no muestra el carrusel My Usuals ni ningún mensaje de error, y el resto de los componentes se muestra normalmente.",
   "form_factor": "mobile",
   "id": "TC-B2C55-M-011",
   "name": "Verificar que si falla la obtención del atributo myUsuals el componente no se muestra y no hay mensaje de error [Mobile] [Logueado]",
   "observation": "Error simulado: la lectura del cliente (shopper-customers) responde 500. El contenedor de Page Designer queda con alto 0, sin mensaje de error, y el resto del Home se muestra (9 componentes).",
   "observed": "Error simulado: la lectura del cliente (shopper-customers) responde 500. El contenedor de Page Designer queda con alto 0, sin mensaje de error, y el resto del Home se muestra (9 componentes).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts\n- Componente My Usuals configurado en la Home (Page Designer)\n- Error simulado al recuperar el atributo myUsuals del cliente (con apoyo de Desarrollo)",
   "screenshots": [
    {
     "caption": "Paso 5 — home con error al leer myusuals",
     "file": "TC-B2C55-M-011-p05-home-con-error-al-leer-myusuals.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C55-M-011.png"
    }
   ],
   "spec": "tests/B2C-55.spec.ts:315",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga la Home.\n3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n4. El sistema autentica al usuario y no logra recuperar el atributo myUsuals.\n5. El usuario recorre la Home completa.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; el login es por correo + código OTP)\n- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com",
   "viewport": "390x844"
  }
 ]
}
-->
