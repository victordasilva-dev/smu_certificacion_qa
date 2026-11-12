# B2C-29 - Home configurable desde Page Designer - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-29 |
| Última actualización | 2026-11-10 |
| Ejecutado por | Victor Chirinos |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | webkit |
| Dispositivo Android | Pixel 6 · Android 14 (emulador) |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP1/B2C-29 WEB Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 21 |
| Aprobado | 8 |
| Fuera de alcance | 4 |
| Bloqueado | 1 |
| **Total** | **34** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-10 | 13 | TC-B2C29-D-005, TC-B2C29-D-013, TC-B2C29-D-014, TC-B2C29-D-015, TC-B2C29-D-017, TC-B2C29-M-006, TC-B2C29-M-007, TC-B2C29-M-008, TC-B2C29-M-009, TC-B2C29-M-015, TC-B2C29-M-016, TC-B2C29-M-017, TC-B2C29-M-019 |
| 2026-10-27 | 12 | TC-B2C29-APP-008, TC-B2C29-APP-009, TC-B2C29-APP-010, TC-B2C29-APP-011, TC-B2C29-APP-012, TC-B2C29-APP-013, TC-B2C29-APP-015, TC-B2C29-APP-016, TC-B2C29-APP-017, TC-B2C29-APP-018, TC-B2C29-APP-019, TC-B2C29-APP-020 |
| 2026-10-26 | 6 | TC-B2C29-APP-001, TC-B2C29-APP-002, TC-B2C29-APP-003, TC-B2C29-APP-004, TC-B2C29-APP-005, TC-B2C29-APP-014 |
| 2026-10-22 | 12 | TC-B2C29-D-006, TC-B2C29-D-013, TC-B2C29-D-014, TC-B2C29-D-015, TC-B2C29-D-017, TC-B2C29-M-007, TC-B2C29-M-008, TC-B2C29-M-009, TC-B2C29-M-015, TC-B2C29-M-016, TC-B2C29-M-017, TC-B2C29-M-019 |
| 2026-10-19 | 10 | TC-B2C29-D-013, TC-B2C29-D-014, TC-B2C29-D-015, TC-B2C29-D-016, TC-B2C29-D-017, TC-B2C29-M-015, TC-B2C29-M-016, TC-B2C29-M-017, TC-B2C29-M-018, TC-B2C29-M-019 |

## Detalle por caso de prueba

### TC-B2C29-D-013 - Verificar que al seleccionar un banner con link configurado se redirige al destino definido en Page Designer [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-10 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-29.spec.ts:513 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- En Page Designer, Home_Banner está publicado en la Home con el link de redirección https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/bebidas-y-licores

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {COMPONENTE_CON_LINK} = Home_Banner
- {URL_DESTINO_COMPONENTE} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/bebidas-y-licores

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El sistema carga el Home con los componentes configurados en Page Designer.
3. El usuario ubica Home_Banner en la Home.
4. El usuario hace clic en Home_Banner.

**Resultado esperado**

El sistema navega a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/bebidas-y-licores (misma pestaña/pantalla) y la página de destino carga completa, sin errores.

**Resultado obtenido**

Se hizo clic en el slide de «Home_Banner» (componente tb-banner-hp, slide tb-banner-b1-hp) y la página navegó en la misma pestaña a /category/bebidas-y-licores, que cargó completa y sin mensajes de error.

**Evidencia**

![Paso 3 — home banner en la home](<B2C-29 Evidencias/TC-B2C29-D-013-p03-home-banner-en-la-home.png>)

![Paso 4 — pagina de destino](<B2C-29 Evidencias/TC-B2C29-D-013-p04-pagina-de-destino.png>)

---

### TC-B2C29-D-014 - Verificar que un componente sin link configurado no redirige ni genera error al seleccionarlo [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-10 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | (sin spec: el caso quedó bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- En Page Designer, Featured Block (OT) está publicado en la Home sin link de redirección

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {COMPONENTE_SIN_LINK} = Featured Block (OT)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El sistema carga el Home con los componentes configurados en Page Designer.
3. El usuario hace clic en Featured Block (OT).
4. El usuario revisa la pantalla.

**Resultado esperado**

El usuario permanece en la Home: no hay navegación, no se abre una página en blanco ni de error y el resto de los componentes sigue visible y operativo.

**Resultado obtenido**

Causa: el componente declarado en {COMPONENTE_SIN_LINK} («Featured Block (OT)») corresponde al único Featured Block de la Home (hp-membresia-hw, «Contrata la membresía»), que SÍ tiene link configurado: ctaUrl /membresia, CTA «Comienza tus 15 días gratis». No hay en la Home un componente publicado sin link. Acción: declarar en el Excel de data un componente publicado en la Home sin link de redirección.

**Observación**

Causa: el componente declarado en {COMPONENTE_SIN_LINK} («Featured Block (OT)») corresponde al único Featured Block de la Home (hp-membresia-hw, «Contrata la membresía»), que SÍ tiene link configurado: ctaUrl /membresia, CTA «Comienza tus 15 días gratis». No hay en la Home un componente publicado sin link. Acción: declarar en el Excel de data un componente publicado en la Home sin link de redirección.

---

### TC-B2C29-D-015 - Verificar que un componente con link incorrecto lleva a la página de no encontrado del sitio sin romper la navegación [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-10 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | (sin spec: el caso quedó bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- En Page Designer, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/lacteos-huevos-y-refrigeradosX está publicado en la Home con un link a una URL inexistente del sitio

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {COMPONENTE_LINK_INVALIDO} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/lacteos-huevos-y-refrigeradosX

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El sistema carga el Home con los componentes configurados en Page Designer.
3. El usuario hace clic en https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/lacteos-huevos-y-refrigeradosX.
4. El usuario revisa la pantalla resultante.
5. El usuario usa el botón Atrás para volver a la Home.

**Resultado esperado**

Se muestra la página de "no encontrado" del sitio (con header y navegación disponibles), no una pantalla en blanco ni un error técnico; al volver, la Home carga con normalidad.

**Resultado obtenido**

Causa: {COMPONENTE_LINK_INVALIDO} trae una URL (…/category/lacteos-huevos-y-refrigeradosX) y ningún componente de la Home enlaza a ella: no aparece en la configuración de Page Designer ni en el DOM, en Desktop ni en Mobile. El slide más parecido de Home_Banner apunta a la URL válida /category/lacteos-huevos-y-refrigerados. Acción: publicar un componente con ese link inválido y declarar su nombre en {COMPONENTE_LINK_INVALIDO}.

**Observación**

Causa: {COMPONENTE_LINK_INVALIDO} trae una URL (…/category/lacteos-huevos-y-refrigeradosX) y ningún componente de la Home enlaza a ella: no aparece en la configuración de Page Designer ni en el DOM, en Desktop ni en Mobile. El slide más parecido de Home_Banner apunta a la URL válida /category/lacteos-huevos-y-refrigerados. Acción: publicar un componente con ese link inválido y declarar su nombre en {COMPONENTE_LINK_INVALIDO}.

---

### TC-B2C29-D-016 - Verificar que mientras carga la Home se muestra el skeleton y luego se reemplaza por los componentes [Desktop] [Guest]

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

### TC-B2C29-D-017 - Verificar que un componente segmentado para usuarios logueados solo se muestra con sesión iniciada [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-10 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 360.4 s |
| Spec | tests/B2C-29.spec.ts:538 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- En Page Designer, Bienvenida_Diamante está publicado en la Home con segmentación por estado de sesión (solo logueados)

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {COMPONENTE_SEGMENTO_LOGUEADO} = Bienvenida_Diamante
- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El sistema carga el Home con los componentes configurados en Page Designer.
3. El usuario revisa si se muestra Bienvenida_Diamante.
4. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com y vuelve a la Home.
5. El usuario revisa si se muestra Bienvenida_Diamante.
6. El usuario cierra sesión y vuelve a la Home.

**Resultado esperado**

Como invitado Bienvenida_Diamante no se muestra y no queda espacio reservado; con sesión iniciada sí se muestra; al cerrar sesión vuelve a ocultarse.

**Resultado obtenido**

Causa: Page Designer no le entrega «Bienvenida_Diamante» a ninguna sesión: invitado, cuenta comprador (vhchirinos+comprador@…), cuenta del segmento (vhchirinos+noaddress@…) ni cuenta fuera del segmento (vhchirinos+segundo@…). Todas reciben solo Unimarc Home | Home_Banner | Modulo Bomba | Carrusel_Banner (respuesta de shopper-experience /pages/home-page, pedida con el token de cada sesión). Además, la data usa el mismo componente para dos segmentaciones distintas: «solo logueados» (D-017/M-019) y «segmento Diamante» (M-008/M-009). No se puede distinguir un defecto de una configuración ausente. Acción: confirmar en Page Designer que «Bienvenida_Diamante» está publicado con la segmentación de cada caso (o declarar en el Excel de data un componente por segmentación) y que las cuentas declaradas pertenecen a ese segmento.

**Observación**

Causa: Page Designer no le entrega «Bienvenida_Diamante» a ninguna sesión: invitado, cuenta comprador (vhchirinos+comprador@…), cuenta del segmento (vhchirinos+noaddress@…) ni cuenta fuera del segmento (vhchirinos+segundo@…). Todas reciben solo Unimarc Home | Home_Banner | Modulo Bomba | Carrusel_Banner (respuesta de shopper-experience /pages/home-page, pedida con el token de cada sesión). Además, la data usa el mismo componente para dos segmentaciones distintas: «solo logueados» (D-017/M-019) y «segmento Diamante» (M-008/M-009). No se puede distinguir un defecto de una configuración ausente. Acción: confirmar en Page Designer que «Bienvenida_Diamante» está publicado con la segmentación de cada caso (o declarar en el Excel de data un componente por segmentación) y que las cuentas declaradas pertenecen a ese segmento.

**Evidencia**

![Paso 3 — home como invitado](<B2C-29 Evidencias/TC-B2C29-D-017-p03-home-como-invitado.png>)

![Paso 5 — home con sesion iniciada](<B2C-29 Evidencias/TC-B2C29-D-017-p05-home-con-sesion-iniciada.png>)

![Paso 6 — home tras cerrar sesion](<B2C-29 Evidencias/TC-B2C29-D-017-p06-home-tras-cerrar-sesion.png>)

---

### TC-B2C29-M-015 - Verificar que al seleccionar un banner con link configurado se redirige al destino definido en Page Designer [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-10 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | tests/B2C-29.spec.ts:513 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- En Page Designer, Home_Banner está publicado en la Home con el link de redirección https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/bebidas-y-licores

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {COMPONENTE_CON_LINK} = Home_Banner
- {URL_DESTINO_COMPONENTE} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/bebidas-y-licores

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home con los componentes configurados en Page Designer.
3. El usuario ubica Home_Banner en la Home.
4. El usuario toca Home_Banner.

**Resultado esperado**

El sistema navega a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/bebidas-y-licores (misma pestaña/pantalla) y la página de destino carga completa, sin errores.

**Resultado obtenido**

Se tocó el slide de «Home_Banner» (tb-banner-b1-hp) y la página navegó en la misma pestaña a /category/bebidas-y-licores, que cargó completa y sin mensajes de error.

**Evidencia**

![Paso 3 — home banner en la home](<B2C-29 Evidencias/TC-B2C29-M-015-p03-home-banner-en-la-home.png>)

![Paso 4 — pagina de destino](<B2C-29 Evidencias/TC-B2C29-M-015-p04-pagina-de-destino.png>)

---

### TC-B2C29-M-016 - Verificar que un componente sin link configurado no redirige ni genera error al seleccionarlo [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-10 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | (sin spec: el caso quedó bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- En Page Designer, Featured Block (OT) está publicado en la Home sin link de redirección

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {COMPONENTE_SIN_LINK} = Featured Block (OT)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home con los componentes configurados en Page Designer.
3. El usuario toca Featured Block (OT).
4. El usuario revisa la pantalla.

**Resultado esperado**

El usuario permanece en la Home: no hay navegación, no se abre una página en blanco ni de error y el resto de los componentes sigue visible y operativo.

**Resultado obtenido**

Causa: el componente declarado en {COMPONENTE_SIN_LINK} («Featured Block (OT)») corresponde al único Featured Block de la Home (hp-membresia-hw, «Contrata la membresía»), que SÍ tiene link configurado: ctaUrl /membresia, CTA «Comienza tus 15 días gratis». No hay en la Home un componente publicado sin link. Acción: declarar en el Excel de data un componente publicado en la Home sin link de redirección.

**Observación**

Causa: el componente declarado en {COMPONENTE_SIN_LINK} («Featured Block (OT)») corresponde al único Featured Block de la Home (hp-membresia-hw, «Contrata la membresía»), que SÍ tiene link configurado: ctaUrl /membresia, CTA «Comienza tus 15 días gratis». No hay en la Home un componente publicado sin link. Acción: declarar en el Excel de data un componente publicado en la Home sin link de redirección.

---

### TC-B2C29-M-017 - Verificar que un componente con link incorrecto lleva a la página de no encontrado del sitio sin romper la navegación [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-10 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | (sin spec: el caso quedó bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- En Page Designer, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/lacteos-huevos-y-refrigeradosX está publicado en la Home con un link a una URL inexistente del sitio

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {COMPONENTE_LINK_INVALIDO} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/lacteos-huevos-y-refrigeradosX

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home con los componentes configurados en Page Designer.
3. El usuario toca https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/lacteos-huevos-y-refrigeradosX.
4. El usuario revisa la pantalla resultante.
5. El usuario usa el botón Atrás para volver a la Home.

**Resultado esperado**

Se muestra la página de "no encontrado" del sitio (con header y navegación disponibles), no una pantalla en blanco ni un error técnico; al volver, la Home carga con normalidad.

**Resultado obtenido**

Causa: {COMPONENTE_LINK_INVALIDO} trae una URL (…/category/lacteos-huevos-y-refrigeradosX) y ningún componente de la Home enlaza a ella: no aparece en la configuración de Page Designer ni en el DOM, en Desktop ni en Mobile. El slide más parecido de Home_Banner apunta a la URL válida /category/lacteos-huevos-y-refrigerados. Acción: publicar un componente con ese link inválido y declarar su nombre en {COMPONENTE_LINK_INVALIDO}.

**Observación**

Causa: {COMPONENTE_LINK_INVALIDO} trae una URL (…/category/lacteos-huevos-y-refrigeradosX) y ningún componente de la Home enlaza a ella: no aparece en la configuración de Page Designer ni en el DOM, en Desktop ni en Mobile. El slide más parecido de Home_Banner apunta a la URL válida /category/lacteos-huevos-y-refrigerados. Acción: publicar un componente con ese link inválido y declarar su nombre en {COMPONENTE_LINK_INVALIDO}.

---

### TC-B2C29-M-018 - Verificar que mientras carga la Home se muestra el skeleton y luego se reemplaza por los componentes [Mobile] [Guest]

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

### TC-B2C29-M-019 - Verificar que un componente segmentado para usuarios logueados solo se muestra con sesión iniciada [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-10 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 315.8 s |
| Spec | tests/B2C-29.spec.ts:538 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- En Page Designer, Bienvenida_Diamante está publicado en la Home con segmentación por estado de sesión (solo logueados)

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {COMPONENTE_SEGMENTO_LOGUEADO} = Bienvenida_Diamante
- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home con los componentes configurados en Page Designer.
3. El usuario revisa si se muestra Bienvenida_Diamante.
4. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com y vuelve a la Home.
5. El usuario revisa si se muestra Bienvenida_Diamante.
6. El usuario cierra sesión y vuelve a la Home.

**Resultado esperado**

Como invitado Bienvenida_Diamante no se muestra y no queda espacio reservado; con sesión iniciada sí se muestra; al cerrar sesión vuelve a ocultarse.

**Resultado obtenido**

Causa: Page Designer no le entrega «Bienvenida_Diamante» a ninguna sesión: invitado, cuenta comprador (vhchirinos+comprador@…), cuenta del segmento (vhchirinos+noaddress@…) ni cuenta fuera del segmento (vhchirinos+segundo@…). Todas reciben solo Unimarc Home | Home_Banner | Modulo Bomba | Carrusel_Banner (respuesta de shopper-experience /pages/home-page, pedida con el token de cada sesión). Además, la data usa el mismo componente para dos segmentaciones distintas: «solo logueados» (D-017/M-019) y «segmento Diamante» (M-008/M-009). No se puede distinguir un defecto de una configuración ausente. Acción: confirmar en Page Designer que «Bienvenida_Diamante» está publicado con la segmentación de cada caso (o declarar en el Excel de data un componente por segmentación) y que las cuentas declaradas pertenecen a ese segmento.

**Observación**

Causa: Page Designer no le entrega «Bienvenida_Diamante» a ninguna sesión: invitado, cuenta comprador (vhchirinos+comprador@…), cuenta del segmento (vhchirinos+noaddress@…) ni cuenta fuera del segmento (vhchirinos+segundo@…). Todas reciben solo Unimarc Home | Home_Banner | Modulo Bomba | Carrusel_Banner (respuesta de shopper-experience /pages/home-page, pedida con el token de cada sesión). Además, la data usa el mismo componente para dos segmentaciones distintas: «solo logueados» (D-017/M-019) y «segmento Diamante» (M-008/M-009). No se puede distinguir un defecto de una configuración ausente. Acción: confirmar en Page Designer que «Bienvenida_Diamante» está publicado con la segmentación de cada caso (o declarar en el Excel de data un componente por segmentación) y que las cuentas declaradas pertenecen a ese segmento.

**Evidencia**

![Paso 3 — home como invitado](<B2C-29 Evidencias/TC-B2C29-M-019-p03-home-como-invitado.png>)

![Paso 5 — home con sesion iniciada](<B2C-29 Evidencias/TC-B2C29-M-019-p05-home-con-sesion-iniciada.png>)

![Paso 6 — home tras cerrar sesion](<B2C-29 Evidencias/TC-B2C29-M-019-p06-home-tras-cerrar-sesion.png>)

---

### TC-B2C29-D-006 - Desactivacion automatica de un componente al cumplirse la fecha fin

| Campo | Valor |
|---|---|
| Estado | Fuera de alcance |
| Ejecutado | 2026-10-22 |
| Form factor | desktop |
| Spec | tests/B2C-29.spec.ts |

**Precondiciones**

- User type: BM Admin (config) / Guest (verificacion)
- Viewport: Desktop 1440x900
- Required data state: componente configurado con fecha de fin de vigencia

**Data utilizada**

- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)
- {FECHA_FIN_VIGENCIA} = fecha/hora de fin configurada

**Pasos ejecutados**

1. Configurar un componente con fecha de fin de vigencia.
2. Esperar (o simular) que se cumpla la fecha fin.
3. Navegar al Home.

**Resultado esperado**

El componente se desactiva automaticamente al cumplirse la fecha fin; durante el periodo de inactividad no se muestra en el Home.

**Resultado obtenido**

Causa: la precondición exige configurar el componente con fecha de fin desde Business Manager (Page Designer), que esta automatización no cubre. Acción: ejecutarlo manualmente con acceso a Business Manager.

**Observación**

Causa: la precondición exige configurar el componente con fecha de fin desde Business Manager (Page Designer), que esta automatización no cubre. Acción: ejecutarlo manualmente con acceso a Business Manager.

---

### TC-B2C29-M-007 - Verificar que un componente programado deja de mostrarse al cumplirse su fecha de fin [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-10 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | (sin spec: el caso quedó bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión nueva de navegador (ventana de incógnito), sin sesión iniciada
- Modulo Bomba está configurado en Page Designer con fin de vigencia 2026-12-12 00:00:00

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {COMPONENTE_PROGRAMADO} = Modulo Bomba
- {FECHA_FIN_VIGENCIA} = 2026-12-12 00:00:00

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga la Home con Modulo Bomba antes de 2026-12-12 00:00:00.
3. El usuario vuelve a acceder a la Home después de 2026-12-12 00:00:00.
4. El sistema carga la Home sin Modulo Bomba.

**Resultado esperado**

Modulo Bomba se muestra hasta 2026-12-12 00:00:00 y deja de mostrarse después, sin dejar espacio vacío.

**Resultado obtenido**

Causa: {FECHA_FIN_VIGENCIA} es 2026-12-12 y todavía no llega (hoy es 2026-11-10), así que no se puede ver que «Modulo Bomba» deje de mostrarse. Hoy se muestra en la Home (hp-bomba-hw, endDate 12/12/2026 23:59:59 en Page Designer; el token dice 00:00:00). Ese endDate es el de la cuenta regresiva del módulo (mensaje «Finalizado» al vencer), así que no está claro que sea un fin de vigencia. Acción: volver a probar después del 12/12/2026 o programar un componente con fin de vigencia cercano.

**Observación**

Causa: {FECHA_FIN_VIGENCIA} es 2026-12-12 y todavía no llega (hoy es 2026-11-10), así que no se puede ver que «Modulo Bomba» deje de mostrarse. Hoy se muestra en la Home (hp-bomba-hw, endDate 12/12/2026 23:59:59 en Page Designer; el token dice 00:00:00). Ese endDate es el de la cuenta regresiva del módulo (mensaje «Finalizado» al vencer), así que no está claro que sea un fin de vigencia. Acción: volver a probar después del 12/12/2026 o programar un componente con fin de vigencia cercano.

---

### TC-B2C29-M-008 - Verificar que un usuario del segmento configurado ve el componente segmentado [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-10 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 210.5 s |
| Spec | tests/B2C-29.spec.ts:564 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- Bienvenida_Diamante está publicado con segmentación activa
- La cuenta vhchirinos+noaddress@avatar-global.com pertenece al segmento de Bienvenida_Diamante

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {COMPONENTE_SEGMENTADO} = Bienvenida_Diamante
- {COMPRADOR_SEGMENTO_PASSWORD} = contraseña de la cuenta (no se transcribe)
- {COMPRADOR_SEGMENTO_USER} = vhchirinos+noaddress@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home.
3. El usuario inicia sesión con la cuenta vhchirinos+noaddress@avatar-global.com.
4. El sistema autentica al usuario y muestra el Home.

**Resultado esperado**

La Home muestra Bienvenida_Diamante.

**Resultado obtenido**

Causa: Page Designer no le entrega «Bienvenida_Diamante» a ninguna sesión: invitado, cuenta comprador (vhchirinos+comprador@…), cuenta del segmento (vhchirinos+noaddress@…) ni cuenta fuera del segmento (vhchirinos+segundo@…). Todas reciben solo Unimarc Home | Home_Banner | Modulo Bomba | Carrusel_Banner (respuesta de shopper-experience /pages/home-page, pedida con el token de cada sesión). Además, la data usa el mismo componente para dos segmentaciones distintas: «solo logueados» (D-017/M-019) y «segmento Diamante» (M-008/M-009). No se puede distinguir un defecto de una configuración ausente. Acción: confirmar en Page Designer que «Bienvenida_Diamante» está publicado con la segmentación de cada caso (o declarar en el Excel de data un componente por segmentación) y que las cuentas declaradas pertenecen a ese segmento.

**Observación**

Causa: Page Designer no le entrega «Bienvenida_Diamante» a ninguna sesión: invitado, cuenta comprador (vhchirinos+comprador@…), cuenta del segmento (vhchirinos+noaddress@…) ni cuenta fuera del segmento (vhchirinos+segundo@…). Todas reciben solo Unimarc Home | Home_Banner | Modulo Bomba | Carrusel_Banner (respuesta de shopper-experience /pages/home-page, pedida con el token de cada sesión). Además, la data usa el mismo componente para dos segmentaciones distintas: «solo logueados» (D-017/M-019) y «segmento Diamante» (M-008/M-009). No se puede distinguir un defecto de una configuración ausente. Acción: confirmar en Page Designer que «Bienvenida_Diamante» está publicado con la segmentación de cada caso (o declarar en el Excel de data un componente por segmentación) y que las cuentas declaradas pertenecen a ese segmento.

**Evidencia**

![Paso 4 — home de la cuenta del segmento](<B2C-29 Evidencias/TC-B2C29-M-008-p04-home-de-la-cuenta-del-segmento.png>)

---

### TC-B2C29-M-009 - Verificar que un usuario fuera del segmento no ve el componente y no queda espacio reservado [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-10 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 195.1 s |
| Spec | tests/B2C-29.spec.ts:574 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- Bienvenida_Diamante está publicado con segmentación activa
- La cuenta vhchirinos+segundo@avatar-global.com no pertenece al segmento de Bienvenida_Diamante

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {COMPONENTE_SEGMENTADO} = Bienvenida_Diamante
- {COMPRADOR_FUERA_SEGMENTO_PASSWORD} = contraseña de la cuenta (no se transcribe)
- {COMPRADOR_FUERA_SEGMENTO_USER} = vhchirinos+segundo@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga el Home.
3. El usuario inicia sesión con la cuenta vhchirinos+segundo@avatar-global.com.
4. El sistema autentica al usuario y muestra el Home.

**Resultado esperado**

La Home no muestra Bienvenida_Diamante y el componente siguiente aparece a continuación del anterior, sin espacio vacío.

**Resultado obtenido**

Causa: la cuenta fuera del segmento no recibe «Bienvenida_Diamante», pero ninguna otra sesión lo recibe tampoco, así que el resultado no demuestra la segmentación. Page Designer no le entrega «Bienvenida_Diamante» a ninguna sesión: invitado, cuenta comprador (vhchirinos+comprador@…), cuenta del segmento (vhchirinos+noaddress@…) ni cuenta fuera del segmento (vhchirinos+segundo@…). Todas reciben solo Unimarc Home | Home_Banner | Modulo Bomba | Carrusel_Banner (respuesta de shopper-experience /pages/home-page, pedida con el token de cada sesión). Además, la data usa el mismo componente para dos segmentaciones distintas: «solo logueados» (D-017/M-019) y «segmento Diamante» (M-008/M-009). Acción: confirmar en Page Designer que «Bienvenida_Diamante» está publicado con la segmentación de cada caso (o declarar en el Excel de data un componente por segmentación) y que las cuentas declaradas pertenecen a ese segmento.

**Observación**

Causa: la cuenta fuera del segmento no recibe «Bienvenida_Diamante», pero ninguna otra sesión lo recibe tampoco, así que el resultado no demuestra la segmentación. Page Designer no le entrega «Bienvenida_Diamante» a ninguna sesión: invitado, cuenta comprador (vhchirinos+comprador@…), cuenta del segmento (vhchirinos+noaddress@…) ni cuenta fuera del segmento (vhchirinos+segundo@…). Todas reciben solo Unimarc Home | Home_Banner | Modulo Bomba | Carrusel_Banner (respuesta de shopper-experience /pages/home-page, pedida con el token de cada sesión). Además, la data usa el mismo componente para dos segmentaciones distintas: «solo logueados» (D-017/M-019) y «segmento Diamante» (M-008/M-009). Acción: confirmar en Page Designer que «Bienvenida_Diamante» está publicado con la segmentación de cada caso (o declarar en el Excel de data un componente por segmentación) y que las cuentas declaradas pertenecen a ese segmento.

**Evidencia**

![Paso 4 — home de la cuenta fuera del segmento](<B2C-29 Evidencias/TC-B2C29-M-009-p04-home-de-la-cuenta-fuera-del-segmento.png>)

---

### TC-B2C29-APP-001 - Verificar que la Home carga sin iniciar sesión y muestra los componentes de Page Designer

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin sesión iniciada

**Data utilizada**

- v1.0.1 = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App con los componentes configurados en Page Designer.
3. El usuario hace scroll hasta el final de la Home.

**Resultado esperado**

La Home carga sin pedir login y muestra todos los componentes configurados (banners, carruseles, colecciones).

**Resultado obtenido**

Como invitado (datos borrados) la Home carga sin pedir login y, de arriba abajo, muestra: carrusel de banners, 'Los más vendidos', Módulo Bomba con cuenta regresiva, 'Categorías destacadas', 'Cada día, una ocasión', 'Frescura y calidad', 'Prende la parrilla', 'Chocolates Milka', 'Nuestras marcas', 'Especial Bebidas', 'Contrata la membresía' y Términos y condiciones. Sin data de qué está publicado en Page Designer, se verificó la carga completa, no la lista exacta. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C29-APP-002 - Verificar que los componentes de la Home tienen padding lateral y los fondos ocupan todo el ancho

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin sesión iniciada

**Data utilizada**

- v1.0.1 = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App con los componentes configurados en Page Designer.
3. El usuario recorre la Home y revisa los bordes de cada componente.

**Resultado esperado**

Los componentes muestran padding lateral respecto del borde de la pantalla y los componentes con color de fondo tienen el fondo de extremo a extremo.

**Resultado obtenido**

Ningún texto del contenido queda a menos de 16 px del borde izquierdo (las vitrinas arrancan en x≈42 de 1080) y el fondo gris del Módulo Bomba va de extremo a extremo; las tarjetas que asoman por la derecha son el scroll horizontal de los carruseles. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C29-APP-003 - Verificar que la Home muestra todos los componentes configurados sin límite de cantidad ni de largo

| Campo | Valor |
|---|---|
| Estado | Fuera de alcance |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin sesión iniciada
- La Home tiene publicados en Page Designer más componentes que la configuración estándar (ej. 20 o más)

**Data utilizada**

- v1.0.1 = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App con los componentes configurados en Page Designer.
3. El usuario hace scroll hasta el final de la Home y cuenta los componentes.

**Resultado esperado**

Se muestran todos los componentes publicados en Page Designer, sin cortes ni límite de largo vertical.

**Resultado obtenido**

TC que requiere publicar más componentes que la configuración estándar (20 o más) en Page Designer (Business Manager): fuera del alcance de la automatización de la app; se necesita acceso a BM para saber qué componentes están publicados y compararlos con la Home. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C29-APP-004 - Verificar que el contenido publicado en Page Designer se ve sin reiniciar la App

| Campo | Valor |
|---|---|
| Estado | Fuera de alcance |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin sesión iniciada

**Data utilizada**

- v1.0.1 = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App con los componentes configurados en Page Designer.
3. El usuario anota el primer banner de la Home.
4. Negocio publica en Page Designer un cambio en ese banner.
5. El usuario vuelve al Home desde otra pantalla, sin cerrar ni reiniciar la App.
6. El sistema muestra la Home con el contenido publicado.

**Resultado esperado**

La Home muestra el banner actualizado sin que el usuario haya reiniciado la App.

**Resultado obtenido**

TC que requiere que Negocio publique un cambio en un banner en Page Designer (Business Manager): fuera del alcance de la automatización de la app; se necesita acceso a BM para publicar el cambio durante la corrida. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C29-APP-005 - Verificar que un componente con error no se muestra y el resto de la Home carga normal

| Campo | Valor |
|---|---|
| Estado | Fuera de alcance |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin sesión iniciada
- Componente_Error está publicado en la Home con un error (ej. imagen con nombre incorrecto)

**Data utilizada**

- v1.0.1 = TBD
- Componente_Error = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App con los componentes configurados en Page Designer.
3. El usuario recorre la Home completa.

**Resultado esperado**

Componente_Error no se muestra, el resto de los componentes carga con normalidad y la Home no presenta errores ni cortes.

**Resultado obtenido**

TC que requiere tener {COMPONENTE_CON_ERROR} ('Componente_Error') publicado con un error en Page Designer (Business Manager): fuera del alcance de la automatización de la app; se necesita acceso a BM para confirmar que está publicado y con qué error (desde la app su ausencia no se distingue de que no esté publicado). La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C29-APP-008 - Verificar que un usuario del segmento configurado ve el componente segmentado

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Bienvenida_Diamante está publicado con segmentación activa
- La cuenta daunuruco+noaddress@avatar-global.com pertenece al segmento de Bienvenida_Diamante

**Data utilizada**

- v1.0.1 = TBD
- Bienvenida_Diamante = TBD
- daunuruco+noaddress@avatar-global.com = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App.
3. El usuario inicia sesión con la cuenta daunuruco+noaddress@avatar-global.com.
4. El sistema autentica al usuario y muestra el Home de la App.

**Resultado esperado**

La Home muestra Bienvenida_Diamante.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: la Home de la cuenta del segmento (sesión iniciada) se recorrió completa (banners, «Los más vendidos», ofertas con contador, «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas»), pero «Bienvenida_Diamante» es el nombre interno del componente en Page Designer y no aparece como texto en la app: no hay forma de reconocerlo en la Home sin conocer su contenido visible. Acción: declarar qué se ve (título o imagen) del componente segmentado.

**Evidencia**

![Android · Paso 2 — home de la cuenta parte 1](<B2C-29 Evidencias/TC-B2C29-APP-008-android-p02-home-de-la-cuenta-parte-1.png>)

![Android · Paso 4 — home de la cuenta parte 2](<B2C-29 Evidencias/TC-B2C29-APP-008-android-p04-home-de-la-cuenta-parte-2.png>)

---

### TC-B2C29-APP-009 - Verificar que un usuario fuera del segmento no ve el componente y no queda espacio reservado

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Bienvenida_Diamante está publicado con segmentación activa
- La cuenta daunuruco+segundo@avatar-global.com no pertenece al segmento de Bienvenida_Diamante

**Data utilizada**

- v1.0.1 = TBD
- Bienvenida_Diamante = TBD
- daunuruco+segundo@avatar-global.com = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App.
3. El usuario inicia sesión con la cuenta daunuruco+segundo@avatar-global.com.
4. El sistema autentica al usuario y muestra el Home de la App.

**Resultado esperado**

La Home no muestra Bienvenida_Diamante y el componente siguiente aparece a continuación del anterior, sin espacio vacío.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: «Bienvenida_Diamante» es el nombre interno del componente en Page Designer y no se muestra como texto en la app (tampoco se declara su contenido visible), por lo que no se puede comprobar su ausencia con la cuenta fuera del segmento. Acción: declarar qué se ve (título o imagen) del componente segmentado.

---

### TC-B2C29-APP-010 - Verificar que el carrusel My Usuals muestra los productos frecuentes del usuario

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- La cuenta {COMPRADOR_CON_FRECUENTES_USER} tiene productos frecuentes registrados

**Data utilizada**

- v1.0.1 = TBD
- daunuruco+comprador@avatar-global.com = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga la Home.
3. El usuario inicia sesión con la cuenta {COMPRADOR_CON_FRECUENTES_USER}.
4. El sistema autentica al usuario y muestra la Home con el carrusel de productos frecuentes.

**Resultado esperado**

La Home muestra el carrusel My Usuals con los productos frecuentes de la cuenta y el CTA "Ver todo".

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: {COMPRADOR_CON_FRECUENTES_USER} (cuenta con productos frecuentes) no tiene valor en la data y la Test data declara otra cuenta ({COMPRADOR_FRECUENTES_USER}) sin confirmar que tenga My Usuals; con la cuenta sin dirección la Home no muestra el carrusel My Usuals. Acción: declarar la cuenta con productos frecuentes.

---

### TC-B2C29-APP-011 - Verificar que "Ver todo" del carrusel My Usuals abre la colección completa

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- La cuenta {COMPRADOR_CON_FRECUENTES_USER} tiene productos frecuentes registrados

**Data utilizada**

- v1.0.1 = TBD
- daunuruco+comprador@avatar-global.com = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga la Home.
3. El usuario inicia sesión con la cuenta {COMPRADOR_CON_FRECUENTES_USER}.
4. El sistema muestra la Home con el carrusel My Usuals.
5. El usuario toca "Ver todo" en el carrusel My Usuals.
6. El sistema abre la colección completa de My Usuals.

**Resultado esperado**

Se muestra la colección completa de productos frecuentes de la cuenta.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: {COMPRADOR_CON_FRECUENTES_USER} (cuenta con productos frecuentes) no tiene valor en la data y la Test data declara otra cuenta ({COMPRADOR_FRECUENTES_USER}) sin confirmar que tenga My Usuals; con la cuenta sin dirección la Home no muestra el carrusel My Usuals. Acción: declarar la cuenta con productos frecuentes.

---

### TC-B2C29-APP-012 - Verificar que "Agregar" en el carrusel My Usuals suma el producto al carro

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- La cuenta {COMPRADOR_CON_FRECUENTES_USER} tiene productos frecuentes registrados
- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)

**Data utilizada**

- v1.0.1 = TBD
- daunuruco+comprador@avatar-global.com = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga la Home.
3. El usuario inicia sesión con la cuenta {COMPRADOR_CON_FRECUENTES_USER}.
4. El sistema muestra la Home con el carrusel My Usuals.
5. El usuario anota el contador del carro y toca "Agregar" en un producto del carrusel.
6. El sistema agrega el producto al carro y muestra el stepper en ese producto.

**Resultado esperado**

El contador del carro aumenta en 1 y el producto del carrusel muestra el stepper con 1 unidad.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: {COMPRADOR_CON_FRECUENTES_USER} (cuenta con productos frecuentes) no tiene valor en la data y la Test data declara otra cuenta ({COMPRADOR_FRECUENTES_USER}) sin confirmar que tenga My Usuals; con la cuenta sin dirección la Home no muestra el carrusel My Usuals. Acción: declarar la cuenta con productos frecuentes.

---

### TC-B2C29-APP-013 - Verificar que un usuario logueado sin productos frecuentes no ve el carrusel My Usuals

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- La cuenta daunuruco+noaddress@avatar-global.com no tiene productos frecuentes registrados

**Data utilizada**

- v1.0.1 = TBD
- daunuruco+noaddress@avatar-global.com = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga la Home.
3. El usuario inicia sesión con la cuenta daunuruco+noaddress@avatar-global.com.
4. El sistema autentica al usuario y muestra la Home.

**Resultado esperado**

La Home no muestra el carrusel My Usuals ni deja espacio vacío en su lugar.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): con la cuenta sin productos frecuentes la Home se recorrió completa (banners, «Los más vendidos», ofertas con contador, «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas»): no aparece el carrusel My Usuals y las secciones se siguen sin espacios vacíos.

**Evidencia**

![Android · Paso 2 — home de la cuenta parte 1](<B2C-29 Evidencias/TC-B2C29-APP-013-android-p02-home-de-la-cuenta-parte-1.png>)

![Android · Paso 4 — home de la cuenta parte 2](<B2C-29 Evidencias/TC-B2C29-APP-013-android-p04-home-de-la-cuenta-parte-2.png>)

---

### TC-B2C29-APP-014 - Verificar que un usuario invitado no ve el carrusel My Usuals

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin sesión iniciada

**Data utilizada**

- v1.0.1 = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App con los componentes configurados en Page Designer.
3. El usuario recorre la Home completa.

**Resultado esperado**

La Home no muestra el carrusel My Usuals ni deja espacio vacío en su lugar.

**Resultado obtenido**

Como invitado, recorrida la Home completa hasta Términos y condiciones, no aparece ningún carrusel de productos frecuentes (My Usuals: 'frecuentes'/'My Usuals'/'Lo que más compras'). El título del carrusel en la app no se pudo confirmar con sesión (login por correo deshabilitado en v1.0.7). La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C29-APP-015 - Verificar que al seleccionar un banner con link configurado se redirige al destino definido en Page Designer

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- En Page Designer, {COMPONENTE_CON_LINK} está publicado en la Home con el link de redirección {URL_DESTINO_COMPONENTE}

**Data utilizada**

- v1.0.1
- Android
- daunuruco+comprador@avatar-global.com
- {COMPONENTE_CON_LINK}
- {URL_DESTINO_COMPONENTE}

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home con los componentes configurados en Page Designer.
3. El usuario ubica {COMPONENTE_CON_LINK} en la Home.
4. El usuario toca {COMPONENTE_CON_LINK}.

**Resultado esperado**

El sistema navega a {URL_DESTINO_COMPONENTE} (misma pestaña/pantalla) y la página de destino carga completa, sin errores.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: {COMPONENTE_CON_LINK} y {URL_DESTINO_COMPONENTE} no tienen valor en la data. Acción: declarar el banner con link y su destino esperado.

---

### TC-B2C29-APP-016 - Verificar que un componente sin link configurado no redirige ni genera error al seleccionarlo

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- En Page Designer, {COMPONENTE_SIN_LINK} está publicado en la Home sin link de redirección

**Data utilizada**

- v1.0.1
- Android
- daunuruco+comprador@avatar-global.com
- {COMPONENTE_SIN_LINK}

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home con los componentes configurados en Page Designer.
3. El usuario toca {COMPONENTE_SIN_LINK}.
4. El usuario revisa la pantalla.

**Resultado esperado**

El usuario permanece en la Home: no hay navegación, no se abre una página en blanco ni de error y el resto de los componentes sigue visible y operativo.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: {COMPONENTE_SIN_LINK} no tiene valor en la data. Acción: declarar el componente sin link.

---

### TC-B2C29-APP-017 - Verificar que un componente con link incorrecto lleva a la página de no encontrado del sitio sin romper la navegación

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- En Page Designer, {COMPONENTE_LINK_INVALIDO} está publicado en la Home con un link a una URL inexistente del sitio

**Data utilizada**

- v1.0.1
- Android
- daunuruco+comprador@avatar-global.com
- {COMPONENTE_LINK_INVALIDO}

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home con los componentes configurados en Page Designer.
3. El usuario toca {COMPONENTE_LINK_INVALIDO}.
4. El usuario revisa la pantalla resultante.
5. El usuario vuelve a la Home.

**Resultado esperado**

Se muestra la página de "no encontrado" del sitio (con header y navegación disponibles), no una pantalla en blanco ni un error técnico; al volver, la Home carga con normalidad.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: {COMPONENTE_LINK_INVALIDO} no tiene valor en la data. Acción: declarar el componente con link incorrecto.

---

### TC-B2C29-APP-018 - Verificar que mientras carga la Home se muestra el skeleton y luego se reemplaza por los componentes

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- {HERRAMIENTA_PROXY_APP} configurado para simular una conexión lenta (throttling)

**Data utilizada**

- v1.0.1
- Android
- daunuruco+comprador@avatar-global.com
- {HERRAMIENTA_PROXY_APP}

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario observa la Home mientras carga.
3. El usuario espera a que termine la carga.

**Resultado esperado**

Mientras carga se muestran placeholders tipo skeleton (bloques grises) en lugar de los componentes; al terminar, cada skeleton se reemplaza por su componente real, sin pantallas en blanco ni mensajes de error.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: {HERRAMIENTA_PROXY_APP} (proxy para demorar la carga del Home y ver el skeleton) no tiene valor en la data. Acción: declarar la herramienta de proxy.

---

### TC-B2C29-APP-019 - Verificar que un componente segmentado para usuarios logueados solo se muestra con sesión iniciada

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- En Page Designer, {COMPONENTE_SEGMENTO_LOGUEADO} está publicado en la Home con segmentación por estado de sesión (solo logueados)

**Data utilizada**

- v1.0.1
- Android
- {COMPONENTE_SEGMENTO_LOGUEADO}
- daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home con los componentes configurados en Page Designer.
3. El usuario revisa si se muestra {COMPONENTE_SEGMENTO_LOGUEADO}.
4. El usuario inicia sesión con la cuenta daunuruco+comprador@avatar-global.com y vuelve a la Home.
5. El usuario revisa si se muestra {COMPONENTE_SEGMENTO_LOGUEADO}.
6. El usuario cierra sesión y vuelve a la Home.

**Resultado esperado**

Como invitado {COMPONENTE_SEGMENTO_LOGUEADO} no se muestra y no queda espacio reservado; con sesión iniciada sí se muestra; al cerrar sesión vuelve a ocultarse.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: {COMPONENTE_SEGMENTO_LOGUEADO} no tiene valor en la data. Acción: declarar el componente segmentado para logueados.

---

### TC-B2C29-APP-020 - Verificar que el pull to refresh de la Home recarga los componentes con el contenido publicado

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com

**Data utilizada**

- v1.0.1
- Android
- daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home con los componentes configurados en Page Designer.
3. El usuario anota el primer banner de la Home.
4. Negocio publica en Page Designer un cambio en ese banner.
5. El usuario, desde el inicio de la Home, desliza hacia abajo (pull to refresh) y suelta.
6. El usuario observa la recarga y revisa el primer banner.

**Resultado esperado**

Se muestra el indicador de recarga (y/o skeleton), la Home se recarga sin cerrar la App y el primer banner muestra el contenido publicado; el resto de los componentes carga con normalidad.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: el paso 4 exige que Negocio publique un cambio en el primer banner desde Page Designer; la ejecución no tiene acceso a Business Manager ni a un cambio coordinado, por lo que no se puede comprobar que tras el pull to refresh el banner muestre el contenido nuevo. Acción: coordinar con Negocio un cambio publicado durante la prueba.

---

### TC-B2C29-M-006 - Verificar que un componente programado aparece en su fecha y hora de inicio [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-10 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | (sin spec: el caso quedó bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión nueva de navegador (ventana de incógnito), sin sesión iniciada
- Modulo Bomba está configurado en Page Designer con inicio de vigencia 2026-09-01 00:00:00

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {COMPONENTE_PROGRAMADO} = Modulo Bomba
- {FECHA_INICIO_VIGENCIA} = 2026-09-01 00:00:00

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.
2. El sistema carga la Home sin Modulo Bomba antes de 2026-09-01 00:00:00.
3. El usuario vuelve a acceder a la Home después de 2026-09-01 00:00:00.
4. El sistema muestra Modulo Bomba en la Home.

**Resultado esperado**

Modulo Bomba no se muestra antes de 2026-09-01 00:00:00 y sí se muestra desde esa fecha y hora.

**Resultado obtenido**

Causa: {FECHA_INICIO_VIGENCIA} es 2026-09-01 00:00 y ya pasó (hoy es 2026-11-10), así que no se puede observar la Home «antes» del inicio de vigencia (pasos 2 y 3). Además, en Page Designer «Modulo Bomba» (hp-bomba-hw) no tiene fecha de inicio: solo un endDate de cuenta regresiva (12/12/2026 23:59:59). Acción: programar un componente con un inicio de vigencia futuro y cercano, y declararlo en {COMPONENTE_PROGRAMADO} / {FECHA_INICIO_VIGENCIA}.

**Observación**

Causa: {FECHA_INICIO_VIGENCIA} es 2026-09-01 00:00 y ya pasó (hoy es 2026-11-10), así que no se puede observar la Home «antes» del inicio de vigencia (pasos 2 y 3). Además, en Page Designer «Modulo Bomba» (hp-bomba-hw) no tiene fecha de inicio: solo un endDate de cuenta regresiva (12/12/2026 23:59:59). Acción: programar un componente con un inicio de vigencia futuro y cercano, y declararlo en {COMPONENTE_PROGRAMADO} / {FECHA_INICIO_VIGENCIA}.

---

### TC-B2C29-D-005 - Activacion automatica de un componente en la fecha y hora programada

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-10 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | (sin spec: el caso quedó bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: BM Admin (config) / Guest (verificacion)
- Viewport: Desktop 1440x900
- Required data state: componente configurado con fecha de inicio de vigencia

**Data utilizada**

- {FECHA_INICIO_VIGENCIA} = 2026-09-01 00:00:00

**Pasos ejecutados**

1. En Page Designer, configurar un componente con fecha/hora de inicio de vigencia.
2. Esperar (o simular) que se cumpla la fecha/hora configurada.
3. Navegar al Home.

**Resultado esperado**

El componente se activa y se muestra automaticamente al cumplirse la fecha/hora configurada, sin intervencion manual adicional.

**Resultado obtenido**

Causa: la columna Test data solo declara {FECHA_INICIO_VIGENCIA} (2026-09-01, ya pasada). Faltan {BASE_URL}, el componente programado y la cuenta de Business Manager con la que se configura en Page Designer (paso 1). Acción: declarar esos tokens en la fila, con una fecha de inicio futura.

**Observación**

Causa: la columna Test data solo declara {FECHA_INICIO_VIGENCIA} (2026-09-01, ya pasada). Faltan {BASE_URL}, el componente programado y la cuenta de Business Manager con la que se configura en Page Designer (paso 1). Acción: declarar esos tokens en la fila, con una fecha de inicio futura.

---

<!-- qa-evidence-state
{
 "header": {
  "browsers": {
   "desktop": "chromium",
   "mobile": "webkit"
  },
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "devices": {
   "android": "Pixel 6 · Android 14 (emulador)"
  },
  "environment": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
  "executed_by": "Victor Chirinos",
  "suite": "B2C-29",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP1/B2C-29 WEB Test Cases.xlsx",
  "title": "B2C-29 - Home configurable desde Page Designer - Evidencias QA",
  "updated_at": "2026-11-10"
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
  ],
  "2026-10-22": [
   "TC-B2C29-D-006",
   "TC-B2C29-D-013",
   "TC-B2C29-D-014",
   "TC-B2C29-D-015",
   "TC-B2C29-D-017",
   "TC-B2C29-M-007",
   "TC-B2C29-M-008",
   "TC-B2C29-M-009",
   "TC-B2C29-M-015",
   "TC-B2C29-M-016",
   "TC-B2C29-M-017",
   "TC-B2C29-M-019"
  ],
  "2026-10-26": [
   "TC-B2C29-APP-001",
   "TC-B2C29-APP-002",
   "TC-B2C29-APP-003",
   "TC-B2C29-APP-004",
   "TC-B2C29-APP-005",
   "TC-B2C29-APP-014"
  ],
  "2026-10-27": [
   "TC-B2C29-APP-008",
   "TC-B2C29-APP-009",
   "TC-B2C29-APP-010",
   "TC-B2C29-APP-011",
   "TC-B2C29-APP-012",
   "TC-B2C29-APP-013",
   "TC-B2C29-APP-015",
   "TC-B2C29-APP-016",
   "TC-B2C29-APP-017",
   "TC-B2C29-APP-018",
   "TC-B2C29-APP-019",
   "TC-B2C29-APP-020"
  ],
  "2026-11-10": [
   "TC-B2C29-D-005",
   "TC-B2C29-D-013",
   "TC-B2C29-D-014",
   "TC-B2C29-D-015",
   "TC-B2C29-D-017",
   "TC-B2C29-M-006",
   "TC-B2C29-M-007",
   "TC-B2C29-M-008",
   "TC-B2C29-M-009",
   "TC-B2C29-M-015",
   "TC-B2C29-M-016",
   "TC-B2C29-M-017",
   "TC-B2C29-M-019"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-11-10",
   "expected": "El sistema navega a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/bebidas-y-licores (misma pestaña/pantalla) y la página de destino carga completa, sin errores.",
   "form_factor": "desktop",
   "id": "TC-B2C29-D-013",
   "name": "Verificar que al seleccionar un banner con link configurado se redirige al destino definido en Page Designer [Desktop] [Guest]",
   "observed": "Se hizo clic en el slide de «Home_Banner» (componente tb-banner-hp, slide tb-banner-b1-hp) y la página navegó en la misma pestaña a /category/bebidas-y-licores, que cargó completa y sin mensajes de error.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- En Page Designer, Home_Banner está publicado en la Home con el link de redirección https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/bebidas-y-licores",
   "screenshots": [
    {
     "caption": "Paso 3 — home banner en la home",
     "file": "TC-B2C29-D-013-p03-home-banner-en-la-home.png"
    },
    {
     "caption": "Paso 4 — pagina de destino",
     "file": "TC-B2C29-D-013-p04-pagina-de-destino.png"
    }
   ],
   "spec": "tests/B2C-29.spec.ts:513",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El sistema carga el Home con los componentes configurados en Page Designer.\n3. El usuario ubica Home_Banner en la Home.\n4. El usuario hace clic en Home_Banner.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {COMPONENTE_CON_LINK} = Home_Banner\n- {URL_DESTINO_COMPONENTE} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/bebidas-y-licores",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-10",
   "expected": "El usuario permanece en la Home: no hay navegación, no se abre una página en blanco ni de error y el resto de los componentes sigue visible y operativo.",
   "form_factor": "desktop",
   "id": "TC-B2C29-D-014",
   "name": "Verificar que un componente sin link configurado no redirige ni genera error al seleccionarlo [Desktop] [Guest]",
   "observation": "Causa: el componente declarado en {COMPONENTE_SIN_LINK} («Featured Block (OT)») corresponde al único Featured Block de la Home (hp-membresia-hw, «Contrata la membresía»), que SÍ tiene link configurado: ctaUrl /membresia, CTA «Comienza tus 15 días gratis». No hay en la Home un componente publicado sin link. Acción: declarar en el Excel de data un componente publicado en la Home sin link de redirección.",
   "observed": "Causa: el componente declarado en {COMPONENTE_SIN_LINK} («Featured Block (OT)») corresponde al único Featured Block de la Home (hp-membresia-hw, «Contrata la membresía»), que SÍ tiene link configurado: ctaUrl /membresia, CTA «Comienza tus 15 días gratis». No hay en la Home un componente publicado sin link. Acción: declarar en el Excel de data un componente publicado en la Home sin link de redirección.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- En Page Designer, Featured Block (OT) está publicado en la Home sin link de redirección",
   "spec": "(sin spec: el caso quedó bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El sistema carga el Home con los componentes configurados en Page Designer.\n3. El usuario hace clic en Featured Block (OT).\n4. El usuario revisa la pantalla.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {COMPONENTE_SIN_LINK} = Featured Block (OT)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-10",
   "expected": "Se muestra la página de \"no encontrado\" del sitio (con header y navegación disponibles), no una pantalla en blanco ni un error técnico; al volver, la Home carga con normalidad.",
   "form_factor": "desktop",
   "id": "TC-B2C29-D-015",
   "name": "Verificar que un componente con link incorrecto lleva a la página de no encontrado del sitio sin romper la navegación [Desktop] [Guest]",
   "observation": "Causa: {COMPONENTE_LINK_INVALIDO} trae una URL (…/category/lacteos-huevos-y-refrigeradosX) y ningún componente de la Home enlaza a ella: no aparece en la configuración de Page Designer ni en el DOM, en Desktop ni en Mobile. El slide más parecido de Home_Banner apunta a la URL válida /category/lacteos-huevos-y-refrigerados. Acción: publicar un componente con ese link inválido y declarar su nombre en {COMPONENTE_LINK_INVALIDO}.",
   "observed": "Causa: {COMPONENTE_LINK_INVALIDO} trae una URL (…/category/lacteos-huevos-y-refrigeradosX) y ningún componente de la Home enlaza a ella: no aparece en la configuración de Page Designer ni en el DOM, en Desktop ni en Mobile. El slide más parecido de Home_Banner apunta a la URL válida /category/lacteos-huevos-y-refrigerados. Acción: publicar un componente con ese link inválido y declarar su nombre en {COMPONENTE_LINK_INVALIDO}.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- En Page Designer, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/lacteos-huevos-y-refrigeradosX está publicado en la Home con un link a una URL inexistente del sitio",
   "spec": "(sin spec: el caso quedó bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El sistema carga el Home con los componentes configurados en Page Designer.\n3. El usuario hace clic en https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/lacteos-huevos-y-refrigeradosX.\n4. El usuario revisa la pantalla resultante.\n5. El usuario usa el botón Atrás para volver a la Home.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {COMPONENTE_LINK_INVALIDO} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/lacteos-huevos-y-refrigeradosX",
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
   "browser": "chromium",
   "duration_s": 360.4,
   "executed_at": "2026-11-10",
   "expected": "Como invitado Bienvenida_Diamante no se muestra y no queda espacio reservado; con sesión iniciada sí se muestra; al cerrar sesión vuelve a ocultarse.",
   "form_factor": "desktop",
   "id": "TC-B2C29-D-017",
   "name": "Verificar que un componente segmentado para usuarios logueados solo se muestra con sesión iniciada [Desktop] [Guest]",
   "observation": "Causa: Page Designer no le entrega «Bienvenida_Diamante» a ninguna sesión: invitado, cuenta comprador (vhchirinos+comprador@…), cuenta del segmento (vhchirinos+noaddress@…) ni cuenta fuera del segmento (vhchirinos+segundo@…). Todas reciben solo Unimarc Home | Home_Banner | Modulo Bomba | Carrusel_Banner (respuesta de shopper-experience /pages/home-page, pedida con el token de cada sesión). Además, la data usa el mismo componente para dos segmentaciones distintas: «solo logueados» (D-017/M-019) y «segmento Diamante» (M-008/M-009). No se puede distinguir un defecto de una configuración ausente. Acción: confirmar en Page Designer que «Bienvenida_Diamante» está publicado con la segmentación de cada caso (o declarar en el Excel de data un componente por segmentación) y que las cuentas declaradas pertenecen a ese segmento.",
   "observed": "Causa: Page Designer no le entrega «Bienvenida_Diamante» a ninguna sesión: invitado, cuenta comprador (vhchirinos+comprador@…), cuenta del segmento (vhchirinos+noaddress@…) ni cuenta fuera del segmento (vhchirinos+segundo@…). Todas reciben solo Unimarc Home | Home_Banner | Modulo Bomba | Carrusel_Banner (respuesta de shopper-experience /pages/home-page, pedida con el token de cada sesión). Además, la data usa el mismo componente para dos segmentaciones distintas: «solo logueados» (D-017/M-019) y «segmento Diamante» (M-008/M-009). No se puede distinguir un defecto de una configuración ausente. Acción: confirmar en Page Designer que «Bienvenida_Diamante» está publicado con la segmentación de cada caso (o declarar en el Excel de data un componente por segmentación) y que las cuentas declaradas pertenecen a ese segmento.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- En Page Designer, Bienvenida_Diamante está publicado en la Home con segmentación por estado de sesión (solo logueados)",
   "screenshots": [
    {
     "caption": "Paso 3 — home como invitado",
     "file": "TC-B2C29-D-017-p03-home-como-invitado.png"
    },
    {
     "caption": "Paso 5 — home con sesion iniciada",
     "file": "TC-B2C29-D-017-p05-home-con-sesion-iniciada.png"
    },
    {
     "caption": "Paso 6 — home tras cerrar sesion",
     "file": "TC-B2C29-D-017-p06-home-tras-cerrar-sesion.png"
    }
   ],
   "spec": "tests/B2C-29.spec.ts:538",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El sistema carga el Home con los componentes configurados en Page Designer.\n3. El usuario revisa si se muestra Bienvenida_Diamante.\n4. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com y vuelve a la Home.\n5. El usuario revisa si se muestra Bienvenida_Diamante.\n6. El usuario cierra sesión y vuelve a la Home.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {COMPONENTE_SEGMENTO_LOGUEADO} = Bienvenida_Diamante\n- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-10",
   "expected": "El sistema navega a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/bebidas-y-licores (misma pestaña/pantalla) y la página de destino carga completa, sin errores.",
   "form_factor": "mobile",
   "id": "TC-B2C29-M-015",
   "name": "Verificar que al seleccionar un banner con link configurado se redirige al destino definido en Page Designer [Mobile] [Guest]",
   "observed": "Se tocó el slide de «Home_Banner» (tb-banner-b1-hp) y la página navegó en la misma pestaña a /category/bebidas-y-licores, que cargó completa y sin mensajes de error.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- En Page Designer, Home_Banner está publicado en la Home con el link de redirección https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/bebidas-y-licores",
   "screenshots": [
    {
     "caption": "Paso 3 — home banner en la home",
     "file": "TC-B2C29-M-015-p03-home-banner-en-la-home.png"
    },
    {
     "caption": "Paso 4 — pagina de destino",
     "file": "TC-B2C29-M-015-p04-pagina-de-destino.png"
    }
   ],
   "spec": "tests/B2C-29.spec.ts:513",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con los componentes configurados en Page Designer.\n3. El usuario ubica Home_Banner en la Home.\n4. El usuario toca Home_Banner.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {COMPONENTE_CON_LINK} = Home_Banner\n- {URL_DESTINO_COMPONENTE} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/bebidas-y-licores",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-10",
   "expected": "El usuario permanece en la Home: no hay navegación, no se abre una página en blanco ni de error y el resto de los componentes sigue visible y operativo.",
   "form_factor": "mobile",
   "id": "TC-B2C29-M-016",
   "name": "Verificar que un componente sin link configurado no redirige ni genera error al seleccionarlo [Mobile] [Guest]",
   "observation": "Causa: el componente declarado en {COMPONENTE_SIN_LINK} («Featured Block (OT)») corresponde al único Featured Block de la Home (hp-membresia-hw, «Contrata la membresía»), que SÍ tiene link configurado: ctaUrl /membresia, CTA «Comienza tus 15 días gratis». No hay en la Home un componente publicado sin link. Acción: declarar en el Excel de data un componente publicado en la Home sin link de redirección.",
   "observed": "Causa: el componente declarado en {COMPONENTE_SIN_LINK} («Featured Block (OT)») corresponde al único Featured Block de la Home (hp-membresia-hw, «Contrata la membresía»), que SÍ tiene link configurado: ctaUrl /membresia, CTA «Comienza tus 15 días gratis». No hay en la Home un componente publicado sin link. Acción: declarar en el Excel de data un componente publicado en la Home sin link de redirección.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- En Page Designer, Featured Block (OT) está publicado en la Home sin link de redirección",
   "spec": "(sin spec: el caso quedó bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con los componentes configurados en Page Designer.\n3. El usuario toca Featured Block (OT).\n4. El usuario revisa la pantalla.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {COMPONENTE_SIN_LINK} = Featured Block (OT)",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-10",
   "expected": "Se muestra la página de \"no encontrado\" del sitio (con header y navegación disponibles), no una pantalla en blanco ni un error técnico; al volver, la Home carga con normalidad.",
   "form_factor": "mobile",
   "id": "TC-B2C29-M-017",
   "name": "Verificar que un componente con link incorrecto lleva a la página de no encontrado del sitio sin romper la navegación [Mobile] [Guest]",
   "observation": "Causa: {COMPONENTE_LINK_INVALIDO} trae una URL (…/category/lacteos-huevos-y-refrigeradosX) y ningún componente de la Home enlaza a ella: no aparece en la configuración de Page Designer ni en el DOM, en Desktop ni en Mobile. El slide más parecido de Home_Banner apunta a la URL válida /category/lacteos-huevos-y-refrigerados. Acción: publicar un componente con ese link inválido y declarar su nombre en {COMPONENTE_LINK_INVALIDO}.",
   "observed": "Causa: {COMPONENTE_LINK_INVALIDO} trae una URL (…/category/lacteos-huevos-y-refrigeradosX) y ningún componente de la Home enlaza a ella: no aparece en la configuración de Page Designer ni en el DOM, en Desktop ni en Mobile. El slide más parecido de Home_Banner apunta a la URL válida /category/lacteos-huevos-y-refrigerados. Acción: publicar un componente con ese link inválido y declarar su nombre en {COMPONENTE_LINK_INVALIDO}.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- En Page Designer, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/lacteos-huevos-y-refrigeradosX está publicado en la Home con un link a una URL inexistente del sitio",
   "spec": "(sin spec: el caso quedó bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con los componentes configurados en Page Designer.\n3. El usuario toca https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/lacteos-huevos-y-refrigeradosX.\n4. El usuario revisa la pantalla resultante.\n5. El usuario usa el botón Atrás para volver a la Home.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {COMPONENTE_LINK_INVALIDO} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/lacteos-huevos-y-refrigeradosX",
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
   "browser": "webkit",
   "duration_s": 315.8,
   "executed_at": "2026-11-10",
   "expected": "Como invitado Bienvenida_Diamante no se muestra y no queda espacio reservado; con sesión iniciada sí se muestra; al cerrar sesión vuelve a ocultarse.",
   "form_factor": "mobile",
   "id": "TC-B2C29-M-019",
   "name": "Verificar que un componente segmentado para usuarios logueados solo se muestra con sesión iniciada [Mobile] [Guest]",
   "observation": "Causa: Page Designer no le entrega «Bienvenida_Diamante» a ninguna sesión: invitado, cuenta comprador (vhchirinos+comprador@…), cuenta del segmento (vhchirinos+noaddress@…) ni cuenta fuera del segmento (vhchirinos+segundo@…). Todas reciben solo Unimarc Home | Home_Banner | Modulo Bomba | Carrusel_Banner (respuesta de shopper-experience /pages/home-page, pedida con el token de cada sesión). Además, la data usa el mismo componente para dos segmentaciones distintas: «solo logueados» (D-017/M-019) y «segmento Diamante» (M-008/M-009). No se puede distinguir un defecto de una configuración ausente. Acción: confirmar en Page Designer que «Bienvenida_Diamante» está publicado con la segmentación de cada caso (o declarar en el Excel de data un componente por segmentación) y que las cuentas declaradas pertenecen a ese segmento.",
   "observed": "Causa: Page Designer no le entrega «Bienvenida_Diamante» a ninguna sesión: invitado, cuenta comprador (vhchirinos+comprador@…), cuenta del segmento (vhchirinos+noaddress@…) ni cuenta fuera del segmento (vhchirinos+segundo@…). Todas reciben solo Unimarc Home | Home_Banner | Modulo Bomba | Carrusel_Banner (respuesta de shopper-experience /pages/home-page, pedida con el token de cada sesión). Además, la data usa el mismo componente para dos segmentaciones distintas: «solo logueados» (D-017/M-019) y «segmento Diamante» (M-008/M-009). No se puede distinguir un defecto de una configuración ausente. Acción: confirmar en Page Designer que «Bienvenida_Diamante» está publicado con la segmentación de cada caso (o declarar en el Excel de data un componente por segmentación) y que las cuentas declaradas pertenecen a ese segmento.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- En Page Designer, Bienvenida_Diamante está publicado en la Home con segmentación por estado de sesión (solo logueados)",
   "screenshots": [
    {
     "caption": "Paso 3 — home como invitado",
     "file": "TC-B2C29-M-019-p03-home-como-invitado.png"
    },
    {
     "caption": "Paso 5 — home con sesion iniciada",
     "file": "TC-B2C29-M-019-p05-home-con-sesion-iniciada.png"
    },
    {
     "caption": "Paso 6 — home tras cerrar sesion",
     "file": "TC-B2C29-M-019-p06-home-tras-cerrar-sesion.png"
    }
   ],
   "spec": "tests/B2C-29.spec.ts:538",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home con los componentes configurados en Page Designer.\n3. El usuario revisa si se muestra Bienvenida_Diamante.\n4. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com y vuelve a la Home.\n5. El usuario revisa si se muestra Bienvenida_Diamante.\n6. El usuario cierra sesión y vuelve a la Home.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {COMPONENTE_SEGMENTO_LOGUEADO} = Bienvenida_Diamante\n- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-22",
   "expected": "El componente se desactiva automaticamente al cumplirse la fecha fin; durante el periodo de inactividad no se muestra en el Home.",
   "form_factor": "desktop",
   "id": "TC-B2C29-D-006",
   "name": "Desactivacion automatica de un componente al cumplirse la fecha fin",
   "observation": "Causa: la precondición exige configurar el componente con fecha de fin desde Business Manager (Page Designer), que esta automatización no cubre. Acción: ejecutarlo manualmente con acceso a Business Manager.",
   "observed": "Causa: la precondición exige configurar el componente con fecha de fin desde Business Manager (Page Designer), que esta automatización no cubre. Acción: ejecutarlo manualmente con acceso a Business Manager.",
   "preconditions": "- User type: BM Admin (config) / Guest (verificacion)\n- Viewport: Desktop 1440x900\n- Required data state: componente configurado con fecha de fin de vigencia",
   "spec": "tests/B2C-29.spec.ts",
   "status": "Fuera de alcance",
   "steps": "1. Configurar un componente con fecha de fin de vigencia.\n2. Esperar (o simular) que se cumpla la fecha fin.\n3. Navegar al Home.",
   "test_data": "- {BASE_URL} = URL base del storefront (placeholder, pendiente de environment)\n- {FECHA_FIN_VIGENCIA} = fecha/hora de fin configurada"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-10",
   "expected": "Modulo Bomba se muestra hasta 2026-12-12 00:00:00 y deja de mostrarse después, sin dejar espacio vacío.",
   "form_factor": "mobile",
   "id": "TC-B2C29-M-007",
   "name": "Verificar que un componente programado deja de mostrarse al cumplirse su fecha de fin [Mobile] [Guest]",
   "observation": "Causa: {FECHA_FIN_VIGENCIA} es 2026-12-12 y todavía no llega (hoy es 2026-11-10), así que no se puede ver que «Modulo Bomba» deje de mostrarse. Hoy se muestra en la Home (hp-bomba-hw, endDate 12/12/2026 23:59:59 en Page Designer; el token dice 00:00:00). Ese endDate es el de la cuenta regresiva del módulo (mensaje «Finalizado» al vencer), así que no está claro que sea un fin de vigencia. Acción: volver a probar después del 12/12/2026 o programar un componente con fin de vigencia cercano.",
   "observed": "Causa: {FECHA_FIN_VIGENCIA} es 2026-12-12 y todavía no llega (hoy es 2026-11-10), así que no se puede ver que «Modulo Bomba» deje de mostrarse. Hoy se muestra en la Home (hp-bomba-hw, endDate 12/12/2026 23:59:59 en Page Designer; el token dice 00:00:00). Ese endDate es el de la cuenta regresiva del módulo (mensaje «Finalizado» al vencer), así que no está claro que sea un fin de vigencia. Acción: volver a probar después del 12/12/2026 o programar un componente con fin de vigencia cercano.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión nueva de navegador (ventana de incógnito), sin sesión iniciada\n- Modulo Bomba está configurado en Page Designer con fin de vigencia 2026-12-12 00:00:00",
   "spec": "(sin spec: el caso quedó bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga la Home con Modulo Bomba antes de 2026-12-12 00:00:00.\n3. El usuario vuelve a acceder a la Home después de 2026-12-12 00:00:00.\n4. El sistema carga la Home sin Modulo Bomba.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {COMPONENTE_PROGRAMADO} = Modulo Bomba\n- {FECHA_FIN_VIGENCIA} = 2026-12-12 00:00:00",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 210.5,
   "executed_at": "2026-11-10",
   "expected": "La Home muestra Bienvenida_Diamante.",
   "form_factor": "mobile",
   "id": "TC-B2C29-M-008",
   "name": "Verificar que un usuario del segmento configurado ve el componente segmentado [Mobile] [Logueado]",
   "observation": "Causa: Page Designer no le entrega «Bienvenida_Diamante» a ninguna sesión: invitado, cuenta comprador (vhchirinos+comprador@…), cuenta del segmento (vhchirinos+noaddress@…) ni cuenta fuera del segmento (vhchirinos+segundo@…). Todas reciben solo Unimarc Home | Home_Banner | Modulo Bomba | Carrusel_Banner (respuesta de shopper-experience /pages/home-page, pedida con el token de cada sesión). Además, la data usa el mismo componente para dos segmentaciones distintas: «solo logueados» (D-017/M-019) y «segmento Diamante» (M-008/M-009). No se puede distinguir un defecto de una configuración ausente. Acción: confirmar en Page Designer que «Bienvenida_Diamante» está publicado con la segmentación de cada caso (o declarar en el Excel de data un componente por segmentación) y que las cuentas declaradas pertenecen a ese segmento.",
   "observed": "Causa: Page Designer no le entrega «Bienvenida_Diamante» a ninguna sesión: invitado, cuenta comprador (vhchirinos+comprador@…), cuenta del segmento (vhchirinos+noaddress@…) ni cuenta fuera del segmento (vhchirinos+segundo@…). Todas reciben solo Unimarc Home | Home_Banner | Modulo Bomba | Carrusel_Banner (respuesta de shopper-experience /pages/home-page, pedida con el token de cada sesión). Además, la data usa el mismo componente para dos segmentaciones distintas: «solo logueados» (D-017/M-019) y «segmento Diamante» (M-008/M-009). No se puede distinguir un defecto de una configuración ausente. Acción: confirmar en Page Designer que «Bienvenida_Diamante» está publicado con la segmentación de cada caso (o declarar en el Excel de data un componente por segmentación) y que las cuentas declaradas pertenecen a ese segmento.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Bienvenida_Diamante está publicado con segmentación activa\n- La cuenta vhchirinos+noaddress@avatar-global.com pertenece al segmento de Bienvenida_Diamante",
   "screenshots": [
    {
     "caption": "Paso 4 — home de la cuenta del segmento",
     "file": "TC-B2C29-M-008-p04-home-de-la-cuenta-del-segmento.png"
    }
   ],
   "spec": "tests/B2C-29.spec.ts:564",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home.\n3. El usuario inicia sesión con la cuenta vhchirinos+noaddress@avatar-global.com.\n4. El sistema autentica al usuario y muestra el Home.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {COMPONENTE_SEGMENTADO} = Bienvenida_Diamante\n- {COMPRADOR_SEGMENTO_PASSWORD} = contraseña de la cuenta (no se transcribe)\n- {COMPRADOR_SEGMENTO_USER} = vhchirinos+noaddress@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 195.1,
   "executed_at": "2026-11-10",
   "expected": "La Home no muestra Bienvenida_Diamante y el componente siguiente aparece a continuación del anterior, sin espacio vacío.",
   "form_factor": "mobile",
   "id": "TC-B2C29-M-009",
   "name": "Verificar que un usuario fuera del segmento no ve el componente y no queda espacio reservado [Mobile] [Logueado]",
   "observation": "Causa: la cuenta fuera del segmento no recibe «Bienvenida_Diamante», pero ninguna otra sesión lo recibe tampoco, así que el resultado no demuestra la segmentación. Page Designer no le entrega «Bienvenida_Diamante» a ninguna sesión: invitado, cuenta comprador (vhchirinos+comprador@…), cuenta del segmento (vhchirinos+noaddress@…) ni cuenta fuera del segmento (vhchirinos+segundo@…). Todas reciben solo Unimarc Home | Home_Banner | Modulo Bomba | Carrusel_Banner (respuesta de shopper-experience /pages/home-page, pedida con el token de cada sesión). Además, la data usa el mismo componente para dos segmentaciones distintas: «solo logueados» (D-017/M-019) y «segmento Diamante» (M-008/M-009). Acción: confirmar en Page Designer que «Bienvenida_Diamante» está publicado con la segmentación de cada caso (o declarar en el Excel de data un componente por segmentación) y que las cuentas declaradas pertenecen a ese segmento.",
   "observed": "Causa: la cuenta fuera del segmento no recibe «Bienvenida_Diamante», pero ninguna otra sesión lo recibe tampoco, así que el resultado no demuestra la segmentación. Page Designer no le entrega «Bienvenida_Diamante» a ninguna sesión: invitado, cuenta comprador (vhchirinos+comprador@…), cuenta del segmento (vhchirinos+noaddress@…) ni cuenta fuera del segmento (vhchirinos+segundo@…). Todas reciben solo Unimarc Home | Home_Banner | Modulo Bomba | Carrusel_Banner (respuesta de shopper-experience /pages/home-page, pedida con el token de cada sesión). Además, la data usa el mismo componente para dos segmentaciones distintas: «solo logueados» (D-017/M-019) y «segmento Diamante» (M-008/M-009). Acción: confirmar en Page Designer que «Bienvenida_Diamante» está publicado con la segmentación de cada caso (o declarar en el Excel de data un componente por segmentación) y que las cuentas declaradas pertenecen a ese segmento.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Bienvenida_Diamante está publicado con segmentación activa\n- La cuenta vhchirinos+segundo@avatar-global.com no pertenece al segmento de Bienvenida_Diamante",
   "screenshots": [
    {
     "caption": "Paso 4 — home de la cuenta fuera del segmento",
     "file": "TC-B2C29-M-009-p04-home-de-la-cuenta-fuera-del-segmento.png"
    }
   ],
   "spec": "tests/B2C-29.spec.ts:574",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga el Home.\n3. El usuario inicia sesión con la cuenta vhchirinos+segundo@avatar-global.com.\n4. El sistema autentica al usuario y muestra el Home.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {COMPONENTE_SEGMENTADO} = Bienvenida_Diamante\n- {COMPRADOR_FUERA_SEGMENTO_PASSWORD} = contraseña de la cuenta (no se transcribe)\n- {COMPRADOR_FUERA_SEGMENTO_USER} = vhchirinos+segundo@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "La Home carga sin pedir login y muestra todos los componentes configurados (banners, carruseles, colecciones).",
   "form_factor": "app",
   "id": "TC-B2C29-APP-001",
   "name": "Verificar que la Home carga sin iniciar sesión y muestra los componentes de Page Designer",
   "observed": "Como invitado (datos borrados) la Home carga sin pedir login y, de arriba abajo, muestra: carrusel de banners, 'Los más vendidos', Módulo Bomba con cuenta regresiva, 'Categorías destacadas', 'Cada día, una ocasión', 'Frescura y calidad', 'Prende la parrilla', 'Chocolates Milka', 'Nuestras marcas', 'Especial Bebidas', 'Contrata la membresía' y Términos y condiciones. Sin data de qué está publicado en Page Designer, se verificó la carga completa, no la lista exacta. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App recién instalada o con datos borrados, sin sesión iniciada",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App con los componentes configurados en Page Designer.\n3. El usuario hace scroll hasta el final de la Home.",
   "test_data": "- v1.0.1 = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Los componentes muestran padding lateral respecto del borde de la pantalla y los componentes con color de fondo tienen el fondo de extremo a extremo.",
   "form_factor": "app",
   "id": "TC-B2C29-APP-002",
   "name": "Verificar que los componentes de la Home tienen padding lateral y los fondos ocupan todo el ancho",
   "observed": "Ningún texto del contenido queda a menos de 16 px del borde izquierdo (las vitrinas arrancan en x≈42 de 1080) y el fondo gris del Módulo Bomba va de extremo a extremo; las tarjetas que asoman por la derecha son el scroll horizontal de los carruseles. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App recién instalada o con datos borrados, sin sesión iniciada",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App con los componentes configurados en Page Designer.\n3. El usuario recorre la Home y revisa los bordes de cada componente.",
   "test_data": "- v1.0.1 = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se muestran todos los componentes publicados en Page Designer, sin cortes ni límite de largo vertical.",
   "form_factor": "app",
   "id": "TC-B2C29-APP-003",
   "name": "Verificar que la Home muestra todos los componentes configurados sin límite de cantidad ni de largo",
   "observed": "TC que requiere publicar más componentes que la configuración estándar (20 o más) en Page Designer (Business Manager): fuera del alcance de la automatización de la app; se necesita acceso a BM para saber qué componentes están publicados y compararlos con la Home. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App recién instalada o con datos borrados, sin sesión iniciada\n- La Home tiene publicados en Page Designer más componentes que la configuración estándar (ej. 20 o más)",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Fuera de alcance",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App con los componentes configurados en Page Designer.\n3. El usuario hace scroll hasta el final de la Home y cuenta los componentes.",
   "test_data": "- v1.0.1 = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "La Home muestra el banner actualizado sin que el usuario haya reiniciado la App.",
   "form_factor": "app",
   "id": "TC-B2C29-APP-004",
   "name": "Verificar que el contenido publicado en Page Designer se ve sin reiniciar la App",
   "observed": "TC que requiere que Negocio publique un cambio en un banner en Page Designer (Business Manager): fuera del alcance de la automatización de la app; se necesita acceso a BM para publicar el cambio durante la corrida. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App recién instalada o con datos borrados, sin sesión iniciada",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Fuera de alcance",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App con los componentes configurados en Page Designer.\n3. El usuario anota el primer banner de la Home.\n4. Negocio publica en Page Designer un cambio en ese banner.\n5. El usuario vuelve al Home desde otra pantalla, sin cerrar ni reiniciar la App.\n6. El sistema muestra la Home con el contenido publicado.",
   "test_data": "- v1.0.1 = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Componente_Error no se muestra, el resto de los componentes carga con normalidad y la Home no presenta errores ni cortes.",
   "form_factor": "app",
   "id": "TC-B2C29-APP-005",
   "name": "Verificar que un componente con error no se muestra y el resto de la Home carga normal",
   "observed": "TC que requiere tener {COMPONENTE_CON_ERROR} ('Componente_Error') publicado con un error en Page Designer (Business Manager): fuera del alcance de la automatización de la app; se necesita acceso a BM para confirmar que está publicado y con qué error (desde la app su ausencia no se distingue de que no esté publicado). La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App recién instalada o con datos borrados, sin sesión iniciada\n- Componente_Error está publicado en la Home con un error (ej. imagen con nombre incorrecto)",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Fuera de alcance",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App con los componentes configurados en Page Designer.\n3. El usuario recorre la Home completa.",
   "test_data": "- v1.0.1 = TBD\n- Componente_Error = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "La Home muestra Bienvenida_Diamante.",
   "form_factor": "app",
   "id": "TC-B2C29-APP-008",
   "name": "Verificar que un usuario del segmento configurado ve el componente segmentado",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: la Home de la cuenta del segmento (sesión iniciada) se recorrió completa (banners, «Los más vendidos», ofertas con contador, «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas»), pero «Bienvenida_Diamante» es el nombre interno del componente en Page Designer y no aparece como texto en la app: no hay forma de reconocerlo en la Home sin conocer su contenido visible. Acción: declarar qué se ve (título o imagen) del componente segmentado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Bienvenida_Diamante está publicado con segmentación activa\n- La cuenta daunuruco+noaddress@avatar-global.com pertenece al segmento de Bienvenida_Diamante",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home de la cuenta parte 1",
     "file": "TC-B2C29-APP-008-android-p02-home-de-la-cuenta-parte-1.png"
    },
    {
     "caption": "Android · Paso 4 — home de la cuenta parte 2",
     "file": "TC-B2C29-APP-008-android-p04-home-de-la-cuenta-parte-2.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App.\n3. El usuario inicia sesión con la cuenta daunuruco+noaddress@avatar-global.com.\n4. El sistema autentica al usuario y muestra el Home de la App.",
   "test_data": "- v1.0.1 = TBD\n- Bienvenida_Diamante = TBD\n- daunuruco+noaddress@avatar-global.com = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "La Home no muestra Bienvenida_Diamante y el componente siguiente aparece a continuación del anterior, sin espacio vacío.",
   "form_factor": "app",
   "id": "TC-B2C29-APP-009",
   "name": "Verificar que un usuario fuera del segmento no ve el componente y no queda espacio reservado",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: «Bienvenida_Diamante» es el nombre interno del componente en Page Designer y no se muestra como texto en la app (tampoco se declara su contenido visible), por lo que no se puede comprobar su ausencia con la cuenta fuera del segmento. Acción: declarar qué se ve (título o imagen) del componente segmentado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Bienvenida_Diamante está publicado con segmentación activa\n- La cuenta daunuruco+segundo@avatar-global.com no pertenece al segmento de Bienvenida_Diamante",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App.\n3. El usuario inicia sesión con la cuenta daunuruco+segundo@avatar-global.com.\n4. El sistema autentica al usuario y muestra el Home de la App.",
   "test_data": "- v1.0.1 = TBD\n- Bienvenida_Diamante = TBD\n- daunuruco+segundo@avatar-global.com = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "La Home muestra el carrusel My Usuals con los productos frecuentes de la cuenta y el CTA \"Ver todo\".",
   "form_factor": "app",
   "id": "TC-B2C29-APP-010",
   "name": "Verificar que el carrusel My Usuals muestra los productos frecuentes del usuario",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: {COMPRADOR_CON_FRECUENTES_USER} (cuenta con productos frecuentes) no tiene valor en la data y la Test data declara otra cuenta ({COMPRADOR_FRECUENTES_USER}) sin confirmar que tenga My Usuals; con la cuenta sin dirección la Home no muestra el carrusel My Usuals. Acción: declarar la cuenta con productos frecuentes.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- La cuenta {COMPRADOR_CON_FRECUENTES_USER} tiene productos frecuentes registrados",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga la Home.\n3. El usuario inicia sesión con la cuenta {COMPRADOR_CON_FRECUENTES_USER}.\n4. El sistema autentica al usuario y muestra la Home con el carrusel de productos frecuentes.",
   "test_data": "- v1.0.1 = TBD\n- daunuruco+comprador@avatar-global.com = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Se muestra la colección completa de productos frecuentes de la cuenta.",
   "form_factor": "app",
   "id": "TC-B2C29-APP-011",
   "name": "Verificar que \"Ver todo\" del carrusel My Usuals abre la colección completa",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: {COMPRADOR_CON_FRECUENTES_USER} (cuenta con productos frecuentes) no tiene valor en la data y la Test data declara otra cuenta ({COMPRADOR_FRECUENTES_USER}) sin confirmar que tenga My Usuals; con la cuenta sin dirección la Home no muestra el carrusel My Usuals. Acción: declarar la cuenta con productos frecuentes.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- La cuenta {COMPRADOR_CON_FRECUENTES_USER} tiene productos frecuentes registrados",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga la Home.\n3. El usuario inicia sesión con la cuenta {COMPRADOR_CON_FRECUENTES_USER}.\n4. El sistema muestra la Home con el carrusel My Usuals.\n5. El usuario toca \"Ver todo\" en el carrusel My Usuals.\n6. El sistema abre la colección completa de My Usuals.",
   "test_data": "- v1.0.1 = TBD\n- daunuruco+comprador@avatar-global.com = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "El contador del carro aumenta en 1 y el producto del carrusel muestra el stepper con 1 unidad.",
   "form_factor": "app",
   "id": "TC-B2C29-APP-012",
   "name": "Verificar que \"Agregar\" en el carrusel My Usuals suma el producto al carro",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: {COMPRADOR_CON_FRECUENTES_USER} (cuenta con productos frecuentes) no tiene valor en la data y la Test data declara otra cuenta ({COMPRADOR_FRECUENTES_USER}) sin confirmar que tenga My Usuals; con la cuenta sin dirección la Home no muestra el carrusel My Usuals. Acción: declarar la cuenta con productos frecuentes.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- La cuenta {COMPRADOR_CON_FRECUENTES_USER} tiene productos frecuentes registrados\n- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga la Home.\n3. El usuario inicia sesión con la cuenta {COMPRADOR_CON_FRECUENTES_USER}.\n4. El sistema muestra la Home con el carrusel My Usuals.\n5. El usuario anota el contador del carro y toca \"Agregar\" en un producto del carrusel.\n6. El sistema agrega el producto al carro y muestra el stepper en ese producto.",
   "test_data": "- v1.0.1 = TBD\n- daunuruco+comprador@avatar-global.com = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "La Home no muestra el carrusel My Usuals ni deja espacio vacío en su lugar.",
   "form_factor": "app",
   "id": "TC-B2C29-APP-013",
   "name": "Verificar que un usuario logueado sin productos frecuentes no ve el carrusel My Usuals",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): con la cuenta sin productos frecuentes la Home se recorrió completa (banners, «Los más vendidos», ofertas con contador, «Categorías destacadas», «Cada día, una ocasión», «Frescura y calidad», «Prende la parrilla», «Chocolates Milka», «Nuestras marcas», «Especial Bebidas»): no aparece el carrusel My Usuals y las secciones se siguen sin espacios vacíos.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- La cuenta daunuruco+noaddress@avatar-global.com no tiene productos frecuentes registrados",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home de la cuenta parte 1",
     "file": "TC-B2C29-APP-013-android-p02-home-de-la-cuenta-parte-1.png"
    },
    {
     "caption": "Android · Paso 4 — home de la cuenta parte 2",
     "file": "TC-B2C29-APP-013-android-p04-home-de-la-cuenta-parte-2.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga la Home.\n3. El usuario inicia sesión con la cuenta daunuruco+noaddress@avatar-global.com.\n4. El sistema autentica al usuario y muestra la Home.",
   "test_data": "- v1.0.1 = TBD\n- daunuruco+noaddress@avatar-global.com = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "La Home no muestra el carrusel My Usuals ni deja espacio vacío en su lugar.",
   "form_factor": "app",
   "id": "TC-B2C29-APP-014",
   "name": "Verificar que un usuario invitado no ve el carrusel My Usuals",
   "observed": "Como invitado, recorrida la Home completa hasta Términos y condiciones, no aparece ningún carrusel de productos frecuentes (My Usuals: 'frecuentes'/'My Usuals'/'Lo que más compras'). El título del carrusel en la app no se pudo confirmar con sesión (login por correo deshabilitado en v1.0.7). La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App recién instalada o con datos borrados, sin sesión iniciada",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App con los componentes configurados en Page Designer.\n3. El usuario recorre la Home completa.",
   "test_data": "- v1.0.1 = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "El sistema navega a {URL_DESTINO_COMPONENTE} (misma pestaña/pantalla) y la página de destino carga completa, sin errores.",
   "form_factor": "app",
   "id": "TC-B2C29-APP-015",
   "name": "Verificar que al seleccionar un banner con link configurado se redirige al destino definido en Page Designer",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: {COMPONENTE_CON_LINK} y {URL_DESTINO_COMPONENTE} no tienen valor en la data. Acción: declarar el banner con link y su destino esperado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- En Page Designer, {COMPONENTE_CON_LINK} está publicado en la Home con el link de redirección {URL_DESTINO_COMPONENTE}",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home con los componentes configurados en Page Designer.\n3. El usuario ubica {COMPONENTE_CON_LINK} en la Home.\n4. El usuario toca {COMPONENTE_CON_LINK}.",
   "test_data": "- v1.0.1\n- Android\n- daunuruco+comprador@avatar-global.com\n- {COMPONENTE_CON_LINK}\n- {URL_DESTINO_COMPONENTE}"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "El usuario permanece en la Home: no hay navegación, no se abre una página en blanco ni de error y el resto de los componentes sigue visible y operativo.",
   "form_factor": "app",
   "id": "TC-B2C29-APP-016",
   "name": "Verificar que un componente sin link configurado no redirige ni genera error al seleccionarlo",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: {COMPONENTE_SIN_LINK} no tiene valor en la data. Acción: declarar el componente sin link.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- En Page Designer, {COMPONENTE_SIN_LINK} está publicado en la Home sin link de redirección",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home con los componentes configurados en Page Designer.\n3. El usuario toca {COMPONENTE_SIN_LINK}.\n4. El usuario revisa la pantalla.",
   "test_data": "- v1.0.1\n- Android\n- daunuruco+comprador@avatar-global.com\n- {COMPONENTE_SIN_LINK}"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Se muestra la página de \"no encontrado\" del sitio (con header y navegación disponibles), no una pantalla en blanco ni un error técnico; al volver, la Home carga con normalidad.",
   "form_factor": "app",
   "id": "TC-B2C29-APP-017",
   "name": "Verificar que un componente con link incorrecto lleva a la página de no encontrado del sitio sin romper la navegación",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: {COMPONENTE_LINK_INVALIDO} no tiene valor en la data. Acción: declarar el componente con link incorrecto.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- En Page Designer, {COMPONENTE_LINK_INVALIDO} está publicado en la Home con un link a una URL inexistente del sitio",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home con los componentes configurados en Page Designer.\n3. El usuario toca {COMPONENTE_LINK_INVALIDO}.\n4. El usuario revisa la pantalla resultante.\n5. El usuario vuelve a la Home.",
   "test_data": "- v1.0.1\n- Android\n- daunuruco+comprador@avatar-global.com\n- {COMPONENTE_LINK_INVALIDO}"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Mientras carga se muestran placeholders tipo skeleton (bloques grises) en lugar de los componentes; al terminar, cada skeleton se reemplaza por su componente real, sin pantallas en blanco ni mensajes de error.",
   "form_factor": "app",
   "id": "TC-B2C29-APP-018",
   "name": "Verificar que mientras carga la Home se muestra el skeleton y luego se reemplaza por los componentes",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: {HERRAMIENTA_PROXY_APP} (proxy para demorar la carga del Home y ver el skeleton) no tiene valor en la data. Acción: declarar la herramienta de proxy.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- {HERRAMIENTA_PROXY_APP} configurado para simular una conexión lenta (throttling)",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario observa la Home mientras carga.\n3. El usuario espera a que termine la carga.",
   "test_data": "- v1.0.1\n- Android\n- daunuruco+comprador@avatar-global.com\n- {HERRAMIENTA_PROXY_APP}"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Como invitado {COMPONENTE_SEGMENTO_LOGUEADO} no se muestra y no queda espacio reservado; con sesión iniciada sí se muestra; al cerrar sesión vuelve a ocultarse.",
   "form_factor": "app",
   "id": "TC-B2C29-APP-019",
   "name": "Verificar que un componente segmentado para usuarios logueados solo se muestra con sesión iniciada",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: {COMPONENTE_SEGMENTO_LOGUEADO} no tiene valor en la data. Acción: declarar el componente segmentado para logueados.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- En Page Designer, {COMPONENTE_SEGMENTO_LOGUEADO} está publicado en la Home con segmentación por estado de sesión (solo logueados)",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home con los componentes configurados en Page Designer.\n3. El usuario revisa si se muestra {COMPONENTE_SEGMENTO_LOGUEADO}.\n4. El usuario inicia sesión con la cuenta daunuruco+comprador@avatar-global.com y vuelve a la Home.\n5. El usuario revisa si se muestra {COMPONENTE_SEGMENTO_LOGUEADO}.\n6. El usuario cierra sesión y vuelve a la Home.",
   "test_data": "- v1.0.1\n- Android\n- {COMPONENTE_SEGMENTO_LOGUEADO}\n- daunuruco+comprador@avatar-global.com"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Se muestra el indicador de recarga (y/o skeleton), la Home se recarga sin cerrar la App y el primer banner muestra el contenido publicado; el resto de los componentes carga con normalidad.",
   "form_factor": "app",
   "id": "TC-B2C29-APP-020",
   "name": "Verificar que el pull to refresh de la Home recarga los componentes con el contenido publicado",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: el paso 4 exige que Negocio publique un cambio en el primer banner desde Page Designer; la ejecución no tiene acceso a Business Manager ni a un cambio coordinado, por lo que no se puede comprobar que tras el pull to refresh el banner muestre el contenido nuevo. Acción: coordinar con Negocio un cambio publicado durante la prueba.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home con los componentes configurados en Page Designer.\n3. El usuario anota el primer banner de la Home.\n4. Negocio publica en Page Designer un cambio en ese banner.\n5. El usuario, desde el inicio de la Home, desliza hacia abajo (pull to refresh) y suelta.\n6. El usuario observa la recarga y revisa el primer banner.",
   "test_data": "- v1.0.1\n- Android\n- daunuruco+comprador@avatar-global.com"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-10",
   "expected": "Modulo Bomba no se muestra antes de 2026-09-01 00:00:00 y sí se muestra desde esa fecha y hora.",
   "form_factor": "mobile",
   "id": "TC-B2C29-M-006",
   "name": "Verificar que un componente programado aparece en su fecha y hora de inicio [Mobile] [Guest]",
   "observation": "Causa: {FECHA_INICIO_VIGENCIA} es 2026-09-01 00:00 y ya pasó (hoy es 2026-11-10), así que no se puede observar la Home «antes» del inicio de vigencia (pasos 2 y 3). Además, en Page Designer «Modulo Bomba» (hp-bomba-hw) no tiene fecha de inicio: solo un endDate de cuenta regresiva (12/12/2026 23:59:59). Acción: programar un componente con un inicio de vigencia futuro y cercano, y declararlo en {COMPONENTE_PROGRAMADO} / {FECHA_INICIO_VIGENCIA}.",
   "observed": "Causa: {FECHA_INICIO_VIGENCIA} es 2026-09-01 00:00 y ya pasó (hoy es 2026-11-10), así que no se puede observar la Home «antes» del inicio de vigencia (pasos 2 y 3). Además, en Page Designer «Modulo Bomba» (hp-bomba-hw) no tiene fecha de inicio: solo un endDate de cuenta regresiva (12/12/2026 23:59:59). Acción: programar un componente con un inicio de vigencia futuro y cercano, y declararlo en {COMPONENTE_PROGRAMADO} / {FECHA_INICIO_VIGENCIA}.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión nueva de navegador (ventana de incógnito), sin sesión iniciada\n- Modulo Bomba está configurado en Page Designer con inicio de vigencia 2026-09-01 00:00:00",
   "spec": "(sin spec: el caso quedó bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ desde el navegador del dispositivo móvil.\n2. El sistema carga la Home sin Modulo Bomba antes de 2026-09-01 00:00:00.\n3. El usuario vuelve a acceder a la Home después de 2026-09-01 00:00:00.\n4. El sistema muestra Modulo Bomba en la Home.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {COMPONENTE_PROGRAMADO} = Modulo Bomba\n- {FECHA_INICIO_VIGENCIA} = 2026-09-01 00:00:00",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-10",
   "expected": "El componente se activa y se muestra automaticamente al cumplirse la fecha/hora configurada, sin intervencion manual adicional.",
   "form_factor": "desktop",
   "id": "TC-B2C29-D-005",
   "name": "Activacion automatica de un componente en la fecha y hora programada",
   "observation": "Causa: la columna Test data solo declara {FECHA_INICIO_VIGENCIA} (2026-09-01, ya pasada). Faltan {BASE_URL}, el componente programado y la cuenta de Business Manager con la que se configura en Page Designer (paso 1). Acción: declarar esos tokens en la fila, con una fecha de inicio futura.",
   "observed": "Causa: la columna Test data solo declara {FECHA_INICIO_VIGENCIA} (2026-09-01, ya pasada). Faltan {BASE_URL}, el componente programado y la cuenta de Business Manager con la que se configura en Page Designer (paso 1). Acción: declarar esos tokens en la fila, con una fecha de inicio futura.",
   "preconditions": "- User type: BM Admin (config) / Guest (verificacion)\n- Viewport: Desktop 1440x900\n- Required data state: componente configurado con fecha de inicio de vigencia",
   "spec": "(sin spec: el caso quedó bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. En Page Designer, configurar un componente con fecha/hora de inicio de vigencia.\n2. Esperar (o simular) que se cumpla la fecha/hora configurada.\n3. Navegar al Home.",
   "test_data": "- {FECHA_INICIO_VIGENCIA} = 2026-09-01 00:00:00",
   "viewport": "1440x900"
  }
 ]
}
-->
