# B2C-65 APP - Cucarda del shelf - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-65 APP |
| Última actualización | 2026-11-12 |
| Ejecutado por | Victor Chirinos |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Dispositivo Android | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP1/B2C-65 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 8 |
| Bloqueado Data | 4 |
| Pendiente | 1 |
| Rechazado | 1 |
| **Total** | **14** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-12 | 14 | TC-65-APP-001, TC-65-APP-002, TC-65-APP-003, TC-65-APP-004, TC-65-APP-005, TC-65-APP-006, TC-65-APP-007, TC-65-APP-008, TC-65-APP-009, TC-65-APP-010, TC-65-APP-011, TC-65-APP-012, TC-65-APP-013, TC-65-APP-014 |

## Detalle por caso de prueba

### TC-65-APP-001 - Verificar que la cucarda se muestra en la PLP en la esquina superior izquierda con el estilo configurado [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-12 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador |
| Spec | tests-app/B2C-65.spec.ts:100 |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- Ubicacion: PLP
- 000000000000028616-KGV tiene cucarda configurada (Label_Texto, colores, ícono y borde)

**Data utilizada**

App: v1.0.1 (cl.smu.unimarcapp.sfcc.qa, ya instalada)

Cuenta: vhchirinos+comprador@avatar-global.com (login por correo + código OTP)

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

{SKU_CYBER} = 000000000000028616-KGV

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
2. El usuario navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.
3. El sistema carga la PLP con el listado de productos.
4. El usuario ubica 000000000000028616-KGV en la grilla.

**Resultado esperado**

La shelf de 000000000000028616-KGV muestra la cucarda en la esquina superior izquierda de la imagen, con el texto, colores, ícono y borde configurados.

**Resultado obtenido**

El shelf de Tapapecho Nacional (028616-KGV) en la PLP Vacuno muestra la cucarda «Cyber» en la esquina superior izquierda (dx 45, dy 36 respecto del shelf), con su recuadro, y Favoritos a la derecha.

**Observación**

Colores, ícono y borde configurados en BM no se leen desde la app: se verificaron posición, texto y recuadro en la captura. La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 ya instalada en el emulador, a pedido del usuario. iOS queda Pendiente.

**Evidencia**

![Android · Paso 1 — app con la sesion iniciada](<B2C-65 APP Evidencias/TC-65-APP-001-android-p01-app-con-la-sesion-iniciada.png>)

![Android · Paso 3 — plp vacuno](<B2C-65 APP Evidencias/TC-65-APP-001-android-p03-plp-vacuno.png>)

![Android · Paso 4 — shelf con la cucarda](<B2C-65 APP Evidencias/TC-65-APP-001-android-p04-shelf-con-la-cucarda.png>)

![Android · Estado final](<B2C-65 APP Evidencias/TC-65-APP-001-android.png>)

---

### TC-65-APP-002 - Verificar que la cucarda se muestra en los resultados de búsqueda [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-12 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador |
| Spec | tests-app/B2C-65.spec.ts:114 |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- Ubicacion: Buscador
- 000000000000028616-KGV tiene cucarda configurada y aparece en los resultados

**Data utilizada**

App: v1.0.1 (cl.smu.unimarcapp.sfcc.qa, ya instalada)

Cuenta: vhchirinos+comprador@avatar-global.com (login por correo + código OTP)

{SRP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/search?q=carne

{SKU_CYBER} = 000000000000028616-KGV

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
2. El usuario busca el término de https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/search?q=carne en el buscador.
3. El sistema muestra los resultados de búsqueda.
4. El usuario ubica 000000000000028616-KGV en los resultados.

**Resultado esperado**

La shelf de 000000000000028616-KGV en los resultados muestra la cucarda en la esquina superior izquierda con el estilo configurado.

**Resultado obtenido**

En los resultados de «carne» el shelf de 028616-KGV muestra la cucarda «Cyber» arriba a la izquierda (dx 45, dy 36), igual que en la PLP.

**Observación**

La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 ya instalada en el emulador, a pedido del usuario. iOS queda Pendiente.

**Evidencia**

![Android · Paso 1 — app con la sesion iniciada](<B2C-65 APP Evidencias/TC-65-APP-002-android-p01-app-con-la-sesion-iniciada.png>)

![Android · Paso 3 — resultados de carne](<B2C-65 APP Evidencias/TC-65-APP-002-android-p03-resultados-de-carne.png>)

![Android · Paso 4 — shelf con la cucarda en los resultados](<B2C-65 APP Evidencias/TC-65-APP-002-android-p04-shelf-con-la-cucarda-en-los-resultados.png>)

![Android · Estado final](<B2C-65 APP Evidencias/TC-65-APP-002-android.png>)

---

### TC-65-APP-003 - Verificar que la cucarda se muestra en carruseles y colecciones [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-12 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador |
| Spec | tests-app/B2C-65.spec.ts:131 |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- Ubicacion: Home de la App
- 000000000000028616-KGV tiene cucarda y aparece en un carrusel del Home o en una Colección

**Data utilizada**

App: v1.0.1 (cl.smu.unimarcapp.sfcc.qa, ya instalada)

Cuenta: vhchirinos+comprador@avatar-global.com (login por correo + código OTP)

{SKU_CUCARDA} = 000000000000028616-KGV

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
2. El sistema carga la Home.
3. El usuario ubica 000000000000028616-KGV en un carrusel o en una Colección.

**Resultado esperado**

La shelf de 000000000000028616-KGV muestra la cucarda en la esquina superior izquierda con el estilo configurado.

**Resultado obtenido**

Se recorrió el Home y se deslizaron sus carruseles de productos: 028616-KGV no aparece en ninguno.

**Observación**

Causa: {SKU_CUCARDA} (028616-KGV) no está en ningún carrusel del Home y la fila no declara una Colección. En el carrusel «Tus productos mas comprados» sí se ve otra cucarda («Promoción Lleva 2 u…», 666285-UN) en la misma posición. Acción: declarar un SKU con cucarda que esté en un carrusel del Home o la Colección donde ubicarlo. La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 ya instalada en el emulador, a pedido del usuario. iOS queda Pendiente.

**Evidencia**

![Android · Paso 1 — app con la sesion iniciada](<B2C-65 APP Evidencias/TC-65-APP-003-android-p01-app-con-la-sesion-iniciada.png>)

![Android · Paso 2 — home](<B2C-65 APP Evidencias/TC-65-APP-003-android-p02-home.png>)

![Android · Estado final](<B2C-65 APP Evidencias/TC-65-APP-003-android.png>)

---

### TC-65-APP-004 - Verificar que se muestra como máximo 1 cucarda y no se superpone con Favoritos [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-12 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador |
| Spec | tests-app/B2C-65.spec.ts:166 |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- Ubicacion: PLP
- 000000000000028616-KGV tiene cucarda configurada

**Data utilizada**

App: v1.0.1 (cl.smu.unimarcapp.sfcc.qa, ya instalada)

Cuenta: vhchirinos+comprador@avatar-global.com (login por correo + código OTP)

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

{SKU_CYBER} = 000000000000028616-KGV

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
2. El usuario navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.
3. El sistema carga la PLP con el listado de productos.
4. El usuario observa la parte superior de la imagen de 000000000000028616-KGV.

**Resultado esperado**

La shelf muestra una sola cucarda a la izquierda y el botón de Favoritos a la derecha, sin superposición.

**Resultado obtenido**

El shelf de 028616-KGV tiene una sola cucarda («Cyber», x 45..128 del shelf) y el botón de Favoritos a la derecha (x 375..463), separados por 247 px, sin superposición.

**Observación**

La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 ya instalada en el emulador, a pedido del usuario. iOS queda Pendiente.

**Evidencia**

![Android · Paso 1 — app con la sesion iniciada](<B2C-65 APP Evidencias/TC-65-APP-004-android-p01-app-con-la-sesion-iniciada.png>)

![Android · Paso 3 — plp vacuno](<B2C-65 APP Evidencias/TC-65-APP-004-android-p03-plp-vacuno.png>)

![Android · Paso 4 — cucarda y favoritos](<B2C-65 APP Evidencias/TC-65-APP-004-android-p04-cucarda-y-favoritos.png>)

![Android · Estado final](<B2C-65 APP Evidencias/TC-65-APP-004-android.png>)

---

### TC-65-APP-005 - Verificar que un producto sin Label_Texto no muestra cucarda ni espacio vacío [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-12 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador |
| Spec | tests-app/B2C-65.spec.ts:181 |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- Ubicacion: PLP
- 000000000000662457-UN no tiene Label_Texto configurado

**Data utilizada**

App: v1.0.1 (cl.smu.unimarcapp.sfcc.qa, ya instalada)

Cuenta: vhchirinos+comprador@avatar-global.com (login por correo + código OTP)

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

{SKU_PRECIO_MIEMBRO} = 000000000000662457-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
2. El usuario navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.
3. El sistema carga la PLP con el listado de productos.
4. El usuario ubica 000000000000662457-UN en la grilla.

**Resultado esperado**

La shelf de 000000000000662457-UN no muestra cucarda ni deja un espacio vacío en la esquina superior izquierda.

**Resultado obtenido**

El shelf de 662457-UN no muestra cucarda (ningún texto en la franja superior) y sus precios empiezan a la misma altura (dy 391) que en el shelf de 028616-KGV, que sí tiene cucarda: no queda espacio reservado.

**Observación**

La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 ya instalada en el emulador, a pedido del usuario. iOS queda Pendiente.

**Evidencia**

![Android · Paso 1 — app con la sesion iniciada](<B2C-65 APP Evidencias/TC-65-APP-005-android-p01-app-con-la-sesion-iniciada.png>)

![Android · Paso 3 — plp vacuno](<B2C-65 APP Evidencias/TC-65-APP-005-android-p03-plp-vacuno.png>)

![Android · Paso 4 — shelf sin cucarda](<B2C-65 APP Evidencias/TC-65-APP-005-android-p04-shelf-sin-cucarda.png>)

![Android · Estado final](<B2C-65 APP Evidencias/TC-65-APP-005-android.png>)

---

### TC-65-APP-006 - Verificar que la cucarda se muestra en la shelf en estado normal [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-12 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador |
| Spec | tests-app/B2C-65.spec.ts:201 |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- Ubicacion: PLP
- 000000000000028616-KGV tiene cucarda, stock y no está en el carro

**Data utilizada**

App: v1.0.1 (cl.smu.unimarcapp.sfcc.qa, ya instalada)

Cuenta: vhchirinos+comprador@avatar-global.com (login por correo + código OTP)

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

{SKU_CYBER} = 000000000000028616-KGV

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
2. El usuario navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.
3. El sistema carga la PLP con el listado de productos.
4. El usuario ubica 000000000000028616-KGV en la grilla.

**Resultado esperado**

La shelf en estado normal muestra la cucarda en su posición y con su estilo, sin ocultarse ni superponerse con otros elementos.

**Resultado obtenido**

Con 028616-KGV en estado normal («Agregar», sin estar en el carro) la cucarda «Cyber» está arriba a la izquierda y no se cruza con Favoritos.

**Observación**

La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 ya instalada en el emulador, a pedido del usuario. iOS queda Pendiente.

**Evidencia**

![Android · Paso 1 — app con la sesion iniciada](<B2C-65 APP Evidencias/TC-65-APP-006-android-p01-app-con-la-sesion-iniciada.png>)

![Android · Paso 3 — plp vacuno](<B2C-65 APP Evidencias/TC-65-APP-006-android-p03-plp-vacuno.png>)

![Android · Paso 4 — shelf en estado normal con la cucarda](<B2C-65 APP Evidencias/TC-65-APP-006-android-p04-shelf-en-estado-normal-con-la-cucarda.png>)

![Android · Estado final](<B2C-65 APP Evidencias/TC-65-APP-006-android.png>)

---

### TC-65-APP-007 - Verificar que la cucarda se mantiene en la shelf en estado "en carro" [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-12 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador |
| Spec | tests-app/B2C-65.spec.ts:217 |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- Ubicacion: PLP
- 000000000000028616-KGV tiene cucarda y stock
- Método de entrega activo

**Data utilizada**

App: v1.0.1 (cl.smu.unimarcapp.sfcc.qa, ya instalada)

Cuenta: vhchirinos+comprador@avatar-global.com (login por correo + código OTP)

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

{SKU_CYBER} = 000000000000028616-KGV

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
2. El usuario navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.
3. El sistema carga la PLP con el listado de productos.
4. El usuario toca "Agregar" en 000000000000028616-KGV.
5. El sistema agrega el producto y muestra los controles de cantidad.

**Resultado esperado**

Con los controles de cantidad visibles, la cucarda sigue en la misma posición y con el mismo estilo, sin superponerse.

**Resultado obtenido**

Tras tocar «Agregar» en 028616-KGV el shelf muestra los controles de cantidad y la cucarda «Cyber» sigue en la misma posición y tamaño (dx 45, dy 36, 83x44), sin cruzarse con Favoritos.

**Observación**

La unidad agregada se quitó del carro al terminar (en la primera corrida la limpieza falló y se quitó a mano; ver la ejecución del 2026-11-12). La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 ya instalada en el emulador, a pedido del usuario. iOS queda Pendiente.

**Evidencia**

![Android · Paso 1 — app con la sesion iniciada](<B2C-65 APP Evidencias/TC-65-APP-007-android-p01-app-con-la-sesion-iniciada.png>)

![Android · Paso 3 — plp vacuno](<B2C-65 APP Evidencias/TC-65-APP-007-android-p03-plp-vacuno.png>)

![Android · Paso 5 — shelf en el carro con la cucarda](<B2C-65 APP Evidencias/TC-65-APP-007-android-p05-shelf-en-el-carro-con-la-cucarda.png>)

![Android · Estado final](<B2C-65 APP Evidencias/TC-65-APP-007-android.png>)

---

### TC-65-APP-008 - Verificar que la cucarda se mantiene en la shelf de un producto sin stock [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-12 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador |
| Spec | tests-app/B2C-65.spec.ts:258 |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- Ubicacion: PLP
- 000000000000029403-KG tiene cucarda y no tiene stock

**Data utilizada**

App: v1.0.1 (cl.smu.unimarcapp.sfcc.qa, ya instalada)

Cuenta: vhchirinos+comprador@avatar-global.com (login por correo + código OTP)

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

{SKU_SIN_STOCK} = 000000000000029403-KG

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
2. El usuario navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.
3. El sistema carga la PLP con el listado de productos.
4. El usuario ubica 000000000000029403-KG en la grilla.

**Resultado esperado**

La shelf muestra "Pronto disponible" y "Ver similares" y la cucarda en la misma posición y estilo, sin superponerse.

**Resultado obtenido**

El shelf de 029403-KG muestra «Pronto disponible» y «Ver similares», y la cucarda «Promoción en Carnes» arriba a la izquierda (dx 45, dy 36), a 44 px de Favoritos.

**Observación**

La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 ya instalada en el emulador, a pedido del usuario. iOS queda Pendiente.

**Evidencia**

![Android · Paso 1 — app con la sesion iniciada](<B2C-65 APP Evidencias/TC-65-APP-008-android-p01-app-con-la-sesion-iniciada.png>)

![Android · Paso 3 — plp vacuno](<B2C-65 APP Evidencias/TC-65-APP-008-android-p03-plp-vacuno.png>)

![Android · Paso 4 — shelf sin stock con la cucarda](<B2C-65 APP Evidencias/TC-65-APP-008-android-p04-shelf-sin-stock-con-la-cucarda.png>)

![Android · Estado final](<B2C-65 APP Evidencias/TC-65-APP-008-android.png>)

---

### TC-65-APP-009 - Verificar que un texto de cucarda de más de 15 caracteres se trunca con puntos suspensivos [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-12 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador |
| Spec | tests-app/B2C-65.spec.ts:280 |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- Ubicacion: PLP
- 000000000000666285-UN tiene Label_Texto de más de 15 caracteres

**Data utilizada**

App: v1.0.1 (cl.smu.unimarcapp.sfcc.qa, ya instalada)

Cuenta: vhchirinos+comprador@avatar-global.com (login por correo + código OTP)

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

{SKU_CUCARDA_LARGA} = 000000000000666285-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
2. El usuario navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.
3. El sistema carga la PLP con el listado de productos.
4. El usuario ubica 000000000000666285-UN en la grilla.

**Resultado esperado**

La cucarda muestra los primeros 15 caracteres del texto seguidos de "...".

**Resultado obtenido**

La cucarda de 666285-UN, cuyo texto es «Promoción Lleva 2 unidades por Monto» (36 caracteres), se ve en pantalla como «Promoción Lleva 2 u…»: 19 caracteres y puntos suspensivos, cortada por el ancho de la cucarda.

**Observación**

Esperado: los primeros 15 caracteres seguidos de «...» («Promoción Lleva...»). Obtenido: «Promoción Lleva 2 u…» (19 caracteres + «…»), truncado por ancho y no por cantidad de caracteres; visto igual en la PLP y en el Home. El árbol de accesibilidad trae el texto completo: el veredicto sale de la captura del shelf. La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 ya instalada en el emulador, a pedido del usuario. iOS queda Pendiente.

**Evidencia**

![Android · Paso 1 — app con la sesion iniciada](<B2C-65 APP Evidencias/TC-65-APP-009-android-p01-app-con-la-sesion-iniciada.png>)

![Android · Paso 3 — plp vacuno](<B2C-65 APP Evidencias/TC-65-APP-009-android-p03-plp-vacuno.png>)

![Android · Paso 4 — cucarda larga](<B2C-65 APP Evidencias/TC-65-APP-009-android-p04-cucarda-larga.png>)

![Android · Estado final](<B2C-65 APP Evidencias/TC-65-APP-009-android.png>)

---

### TC-65-APP-010 - Verificar que la cucarda se muestra en la shelf simplificada del modal de buscador [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-12 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador |
| Spec | tests-app/B2C-65.spec.ts:295 |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- Ubicacion: Buscador
- 000000000000028616-KGV tiene cucarda y aparece en las sugerencias del buscador

**Data utilizada**

App: v1.0.1 (cl.smu.unimarcapp.sfcc.qa, ya instalada)

Cuenta: vhchirinos+comprador@avatar-global.com (login por correo + código OTP)

{SKU_CYBER} = 000000000000028616-KGV

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
2. El usuario toca el buscador y escribe el nombre de 000000000000028616-KGV.
3. El sistema muestra el modal de buscador con la shelf simplificada.

**Resultado esperado**

La shelf simplificada de 000000000000028616-KGV muestra la cucarda con la misma posición y estilo que en la PLP.

**Resultado obtenido**

Al escribir «Tapapecho vacuno Nacional» en el buscador, los resultados muestran el shelf de 028616-KGV con la cucarda «Cyber» en la misma posición que en la PLP (dx 45, dy 36).

**Observación**

La app no tiene una shelf simplificada en el buscador: muestra el shelf completo. La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 ya instalada en el emulador, a pedido del usuario. iOS queda Pendiente.

**Evidencia**

![Android · Paso 1 — app con la sesion iniciada](<B2C-65 APP Evidencias/TC-65-APP-010-android-p01-app-con-la-sesion-iniciada.png>)

![Android · Paso 3 — buscador con el producto](<B2C-65 APP Evidencias/TC-65-APP-010-android-p03-buscador-con-el-producto.png>)

![Android · Paso 3 — shelf del buscador con la cucarda](<B2C-65 APP Evidencias/TC-65-APP-010-android-p03-shelf-del-buscador-con-la-cucarda.png>)

![Android · Estado final](<B2C-65 APP Evidencias/TC-65-APP-010-android.png>)

---

### TC-65-APP-011 - Verificar que la cucarda se ve igual en App iOS y App Android y se adapta al Design System [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Pendiente |
| Ejecutado | 2026-11-12 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador |
| Spec | tests-app/B2C-65.spec.ts:311 |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- Ubicacion: PLP
- 000000000000028616-KGV tiene cucarda configurada (Label_Texto, Label_ColorTexto, Label_ColorFondo, Label_Icono, Label_ColorBorder)
- Se dispone de un dispositivo iOS y uno Android

**Data utilizada**

App: v1.0.1 (cl.smu.unimarcapp.sfcc.qa, ya instalada)

Cuenta: vhchirinos+comprador@avatar-global.com (login por correo + código OTP)

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

{SKU_CYBER} = 000000000000028616-KGV

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
2. El usuario navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.
3. El sistema carga la PLP con el listado de productos.
4. El usuario registra texto, colores, ícono, borde y posición de la cucarda de 000000000000028616-KGV en iOS.
5. El usuario repite los pasos 1 a 3 en Android y compara.

**Resultado esperado**

En iOS y Android la cucarda muestra el mismo texto, color de texto, color de fondo, ícono y color de borde configurados, en la esquina superior izquierda, con el tamaño del Design System Super DS.

**Resultado obtenido**

Registro de Android: cucarda «Cyber» en 028616-KGV, arriba a la izquierda (dx 45, dy 36, 83x44 px), texto negro sobre fondo blanco con borde, sin ícono.

**Observación**

El TC compara iOS con Android: sin la corrida de iOS no tiene veredicto. Queda el registro de Android para compararlo. La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 ya instalada en el emulador, a pedido del usuario. iOS queda Pendiente.

**Evidencia**

![Android · Paso 1 — app con la sesion iniciada](<B2C-65 APP Evidencias/TC-65-APP-011-android-p01-app-con-la-sesion-iniciada.png>)

![Android · Paso 3 — plp vacuno](<B2C-65 APP Evidencias/TC-65-APP-011-android-p03-plp-vacuno.png>)

![Android · Paso 4 — cucarda en android](<B2C-65 APP Evidencias/TC-65-APP-011-android-p04-cucarda-en-android.png>)

---

### TC-65-APP-012 - Verificar que la cucarda se muestra sobre la imagen placeholder [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-12 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- Ubicacion: PLP
- 000000000000029400-KG tiene cucarda y no tiene imagen válida

**Data utilizada**

App: v1.0.1 (cl.smu.unimarcapp.sfcc.qa, ya instalada)

Cuenta: vhchirinos+comprador@avatar-global.com (login por correo + código OTP)

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

{SKU_SIN_IMAGEN} = 000000000000029400-KG

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
2. El usuario navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.
3. El sistema carga la PLP con el listado de productos.
4. El usuario ubica 000000000000029400-KG en la grilla.

**Resultado esperado**

La cucarda se muestra en la esquina superior izquierda de la imagen placeholder, con el mismo estilo que sobre una imagen real.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {SKU_SIN_IMAGEN} (029400-KG, Posta paleta Brasil Paraguay) no tiene cucarda en la PLP Vacuno; la precondición pide un producto con cucarda y sin imagen válida. Acción: declarar un SKU con cucarda y sin imagen. La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 ya instalada en el emulador, a pedido del usuario. iOS queda Pendiente.

---

### TC-65-APP-013 - Verificar que el label de promoción tiene prioridad sobre el de categoría [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-12 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- Ubicacion: PLP
- {SKU_LABEL_CAT_PROMO} está en una subcategoría con Label_Activo=true y es elegible a una promoción con Label_Activo=true (textos distintos); JOB1 y JOB2 ejecutados

**Data utilizada**

App: v1.0.1 (cl.smu.unimarcapp.sfcc.qa, ya instalada)

Cuenta: vhchirinos+comprador@avatar-global.com (login por correo + código OTP)

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
2. El usuario navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.
3. El sistema carga la PLP con el listado de productos.
4. El usuario ubica {SKU_LABEL_CAT_PROMO} y compara su cucarda con los labels configurados.

**Resultado esperado**

La cucarda muestra el texto, colores e ícono del label de la promoción, no los de la categoría.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {SKU_LABEL_CAT_PROMO} está en TBD en el Excel de data. Acción: cargar el SKU con label de categoría y de promoción. La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 ya instalada en el emulador, a pedido del usuario. iOS queda Pendiente.

---

### TC-65-APP-014 - Verificar la prioridad entre labels de promoción: membresía > Unipay > BancoEstado > % descuento [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-12 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- Ubicacion: PLP
- {SKU_LABEL_MULTIPROMO} es elegible a promociones de membresía, Unipay, BancoEstado y % de descuento, todas con label; JOB2 ejecutado

**Data utilizada**

App: v1.0.1 (cl.smu.unimarcapp.sfcc.qa, ya instalada)

Cuenta: vhchirinos+comprador@avatar-global.com (login por correo + código OTP)

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
2. El usuario navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.
3. El sistema carga la PLP con el listado de productos.
4. El usuario ubica {SKU_LABEL_MULTIPROMO} y revisa la cucarda.

**Resultado esperado**

La cucarda muestra el label de la promoción de membresía.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {SKU_LABEL_MULTIPROMO} está en TBD en el Excel de data. Acción: cargar el SKU elegible a las cuatro promociones con label. La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 ya instalada en el emulador, a pedido del usuario. iOS queda Pendiente.

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "devices": {
   "android": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador"
  },
  "environment": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
  "executed_by": "Victor Chirinos",
  "suite": "B2C-65 APP",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP1/B2C-65 APP Test Cases.xlsx",
  "title": "B2C-65 APP - Cucarda del shelf - Evidencias QA",
  "updated_at": "2026-11-12"
 },
 "history": {
  "2026-11-12": [
   "TC-65-APP-001",
   "TC-65-APP-002",
   "TC-65-APP-003",
   "TC-65-APP-004",
   "TC-65-APP-005",
   "TC-65-APP-006",
   "TC-65-APP-007",
   "TC-65-APP-008",
   "TC-65-APP-009",
   "TC-65-APP-010",
   "TC-65-APP-011",
   "TC-65-APP-012",
   "TC-65-APP-013",
   "TC-65-APP-014"
  ]
 },
 "results": [
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador",
   "executed_at": "2026-11-12",
   "expected": "La shelf de 000000000000028616-KGV muestra la cucarda en la esquina superior izquierda de la imagen, con el texto, colores, ícono y borde configurados.",
   "form_factor": "app",
   "id": "TC-65-APP-001",
   "name": "Verificar que la cucarda se muestra en la PLP en la esquina superior izquierda con el estilo configurado [App] [Logueado]",
   "observation": "Colores, ícono y borde configurados en BM no se leen desde la app: se verificaron posición, texto y recuadro en la captura. La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 ya instalada en el emulador, a pedido del usuario. iOS queda Pendiente.",
   "observed": "El shelf de Tapapecho Nacional (028616-KGV) en la PLP Vacuno muestra la cucarda «Cyber» en la esquina superior izquierda (dx 45, dy 36 respecto del shelf), con su recuadro, y Favoritos a la derecha.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- Ubicacion: PLP\n- 000000000000028616-KGV tiene cucarda configurada (Label_Texto, colores, ícono y borde)",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — app con la sesion iniciada",
     "file": "TC-65-APP-001-android-p01-app-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Android · Paso 3 — plp vacuno",
     "file": "TC-65-APP-001-android-p03-plp-vacuno.png"
    },
    {
     "caption": "Android · Paso 4 — shelf con la cucarda",
     "file": "TC-65-APP-001-android-p04-shelf-con-la-cucarda.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-65-APP-001-android.png"
    }
   ],
   "spec": "tests-app/B2C-65.spec.ts:100",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n2. El usuario navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.\n3. El sistema carga la PLP con el listado de productos.\n4. El usuario ubica 000000000000028616-KGV en la grilla.",
   "test_data": "App: v1.0.1 (cl.smu.unimarcapp.sfcc.qa, ya instalada)\nCuenta: vhchirinos+comprador@avatar-global.com (login por correo + código OTP)\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n{SKU_CYBER} = 000000000000028616-KGV"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador",
   "executed_at": "2026-11-12",
   "expected": "La shelf de 000000000000028616-KGV en los resultados muestra la cucarda en la esquina superior izquierda con el estilo configurado.",
   "form_factor": "app",
   "id": "TC-65-APP-002",
   "name": "Verificar que la cucarda se muestra en los resultados de búsqueda [App] [Logueado]",
   "observation": "La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 ya instalada en el emulador, a pedido del usuario. iOS queda Pendiente.",
   "observed": "En los resultados de «carne» el shelf de 028616-KGV muestra la cucarda «Cyber» arriba a la izquierda (dx 45, dy 36), igual que en la PLP.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- Ubicacion: Buscador\n- 000000000000028616-KGV tiene cucarda configurada y aparece en los resultados",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — app con la sesion iniciada",
     "file": "TC-65-APP-002-android-p01-app-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Android · Paso 3 — resultados de carne",
     "file": "TC-65-APP-002-android-p03-resultados-de-carne.png"
    },
    {
     "caption": "Android · Paso 4 — shelf con la cucarda en los resultados",
     "file": "TC-65-APP-002-android-p04-shelf-con-la-cucarda-en-los-resultados.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-65-APP-002-android.png"
    }
   ],
   "spec": "tests-app/B2C-65.spec.ts:114",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n2. El usuario busca el término de https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/search?q=carne en el buscador.\n3. El sistema muestra los resultados de búsqueda.\n4. El usuario ubica 000000000000028616-KGV en los resultados.",
   "test_data": "App: v1.0.1 (cl.smu.unimarcapp.sfcc.qa, ya instalada)\nCuenta: vhchirinos+comprador@avatar-global.com (login por correo + código OTP)\n{SRP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/search?q=carne\n{SKU_CYBER} = 000000000000028616-KGV"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador",
   "executed_at": "2026-11-12",
   "expected": "La shelf de 000000000000028616-KGV muestra la cucarda en la esquina superior izquierda con el estilo configurado.",
   "form_factor": "app",
   "id": "TC-65-APP-003",
   "name": "Verificar que la cucarda se muestra en carruseles y colecciones [App] [Logueado]",
   "observation": "Causa: {SKU_CUCARDA} (028616-KGV) no está en ningún carrusel del Home y la fila no declara una Colección. En el carrusel «Tus productos mas comprados» sí se ve otra cucarda («Promoción Lleva 2 u…», 666285-UN) en la misma posición. Acción: declarar un SKU con cucarda que esté en un carrusel del Home o la Colección donde ubicarlo. La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 ya instalada en el emulador, a pedido del usuario. iOS queda Pendiente.",
   "observed": "Se recorrió el Home y se deslizaron sus carruseles de productos: 028616-KGV no aparece en ninguno.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- Ubicacion: Home de la App\n- 000000000000028616-KGV tiene cucarda y aparece en un carrusel del Home o en una Colección",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — app con la sesion iniciada",
     "file": "TC-65-APP-003-android-p01-app-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Android · Paso 2 — home",
     "file": "TC-65-APP-003-android-p02-home.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-65-APP-003-android.png"
    }
   ],
   "spec": "tests-app/B2C-65.spec.ts:131",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n2. El sistema carga la Home.\n3. El usuario ubica 000000000000028616-KGV en un carrusel o en una Colección.",
   "test_data": "App: v1.0.1 (cl.smu.unimarcapp.sfcc.qa, ya instalada)\nCuenta: vhchirinos+comprador@avatar-global.com (login por correo + código OTP)\n{SKU_CUCARDA} = 000000000000028616-KGV"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador",
   "executed_at": "2026-11-12",
   "expected": "La shelf muestra una sola cucarda a la izquierda y el botón de Favoritos a la derecha, sin superposición.",
   "form_factor": "app",
   "id": "TC-65-APP-004",
   "name": "Verificar que se muestra como máximo 1 cucarda y no se superpone con Favoritos [App] [Logueado]",
   "observation": "La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 ya instalada en el emulador, a pedido del usuario. iOS queda Pendiente.",
   "observed": "El shelf de 028616-KGV tiene una sola cucarda («Cyber», x 45..128 del shelf) y el botón de Favoritos a la derecha (x 375..463), separados por 247 px, sin superposición.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- Ubicacion: PLP\n- 000000000000028616-KGV tiene cucarda configurada",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — app con la sesion iniciada",
     "file": "TC-65-APP-004-android-p01-app-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Android · Paso 3 — plp vacuno",
     "file": "TC-65-APP-004-android-p03-plp-vacuno.png"
    },
    {
     "caption": "Android · Paso 4 — cucarda y favoritos",
     "file": "TC-65-APP-004-android-p04-cucarda-y-favoritos.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-65-APP-004-android.png"
    }
   ],
   "spec": "tests-app/B2C-65.spec.ts:166",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n2. El usuario navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.\n3. El sistema carga la PLP con el listado de productos.\n4. El usuario observa la parte superior de la imagen de 000000000000028616-KGV.",
   "test_data": "App: v1.0.1 (cl.smu.unimarcapp.sfcc.qa, ya instalada)\nCuenta: vhchirinos+comprador@avatar-global.com (login por correo + código OTP)\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n{SKU_CYBER} = 000000000000028616-KGV"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador",
   "executed_at": "2026-11-12",
   "expected": "La shelf de 000000000000662457-UN no muestra cucarda ni deja un espacio vacío en la esquina superior izquierda.",
   "form_factor": "app",
   "id": "TC-65-APP-005",
   "name": "Verificar que un producto sin Label_Texto no muestra cucarda ni espacio vacío [App] [Logueado]",
   "observation": "La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 ya instalada en el emulador, a pedido del usuario. iOS queda Pendiente.",
   "observed": "El shelf de 662457-UN no muestra cucarda (ningún texto en la franja superior) y sus precios empiezan a la misma altura (dy 391) que en el shelf de 028616-KGV, que sí tiene cucarda: no queda espacio reservado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- Ubicacion: PLP\n- 000000000000662457-UN no tiene Label_Texto configurado",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — app con la sesion iniciada",
     "file": "TC-65-APP-005-android-p01-app-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Android · Paso 3 — plp vacuno",
     "file": "TC-65-APP-005-android-p03-plp-vacuno.png"
    },
    {
     "caption": "Android · Paso 4 — shelf sin cucarda",
     "file": "TC-65-APP-005-android-p04-shelf-sin-cucarda.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-65-APP-005-android.png"
    }
   ],
   "spec": "tests-app/B2C-65.spec.ts:181",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n2. El usuario navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.\n3. El sistema carga la PLP con el listado de productos.\n4. El usuario ubica 000000000000662457-UN en la grilla.",
   "test_data": "App: v1.0.1 (cl.smu.unimarcapp.sfcc.qa, ya instalada)\nCuenta: vhchirinos+comprador@avatar-global.com (login por correo + código OTP)\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n{SKU_PRECIO_MIEMBRO} = 000000000000662457-UN"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador",
   "executed_at": "2026-11-12",
   "expected": "La shelf en estado normal muestra la cucarda en su posición y con su estilo, sin ocultarse ni superponerse con otros elementos.",
   "form_factor": "app",
   "id": "TC-65-APP-006",
   "name": "Verificar que la cucarda se muestra en la shelf en estado normal [App] [Logueado]",
   "observation": "La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 ya instalada en el emulador, a pedido del usuario. iOS queda Pendiente.",
   "observed": "Con 028616-KGV en estado normal («Agregar», sin estar en el carro) la cucarda «Cyber» está arriba a la izquierda y no se cruza con Favoritos.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- Ubicacion: PLP\n- 000000000000028616-KGV tiene cucarda, stock y no está en el carro",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — app con la sesion iniciada",
     "file": "TC-65-APP-006-android-p01-app-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Android · Paso 3 — plp vacuno",
     "file": "TC-65-APP-006-android-p03-plp-vacuno.png"
    },
    {
     "caption": "Android · Paso 4 — shelf en estado normal con la cucarda",
     "file": "TC-65-APP-006-android-p04-shelf-en-estado-normal-con-la-cucarda.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-65-APP-006-android.png"
    }
   ],
   "spec": "tests-app/B2C-65.spec.ts:201",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n2. El usuario navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.\n3. El sistema carga la PLP con el listado de productos.\n4. El usuario ubica 000000000000028616-KGV en la grilla.",
   "test_data": "App: v1.0.1 (cl.smu.unimarcapp.sfcc.qa, ya instalada)\nCuenta: vhchirinos+comprador@avatar-global.com (login por correo + código OTP)\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n{SKU_CYBER} = 000000000000028616-KGV"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador",
   "executed_at": "2026-11-12",
   "expected": "Con los controles de cantidad visibles, la cucarda sigue en la misma posición y con el mismo estilo, sin superponerse.",
   "form_factor": "app",
   "id": "TC-65-APP-007",
   "name": "Verificar que la cucarda se mantiene en la shelf en estado \"en carro\" [App] [Logueado]",
   "observation": "La unidad agregada se quitó del carro al terminar (en la primera corrida la limpieza falló y se quitó a mano; ver la ejecución del 2026-11-12). La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 ya instalada en el emulador, a pedido del usuario. iOS queda Pendiente.",
   "observed": "Tras tocar «Agregar» en 028616-KGV el shelf muestra los controles de cantidad y la cucarda «Cyber» sigue en la misma posición y tamaño (dx 45, dy 36, 83x44), sin cruzarse con Favoritos.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- Ubicacion: PLP\n- 000000000000028616-KGV tiene cucarda y stock\n- Método de entrega activo",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — app con la sesion iniciada",
     "file": "TC-65-APP-007-android-p01-app-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Android · Paso 3 — plp vacuno",
     "file": "TC-65-APP-007-android-p03-plp-vacuno.png"
    },
    {
     "caption": "Android · Paso 5 — shelf en el carro con la cucarda",
     "file": "TC-65-APP-007-android-p05-shelf-en-el-carro-con-la-cucarda.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-65-APP-007-android.png"
    }
   ],
   "spec": "tests-app/B2C-65.spec.ts:217",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n2. El usuario navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.\n3. El sistema carga la PLP con el listado de productos.\n4. El usuario toca \"Agregar\" en 000000000000028616-KGV.\n5. El sistema agrega el producto y muestra los controles de cantidad.",
   "test_data": "App: v1.0.1 (cl.smu.unimarcapp.sfcc.qa, ya instalada)\nCuenta: vhchirinos+comprador@avatar-global.com (login por correo + código OTP)\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n{SKU_CYBER} = 000000000000028616-KGV"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador",
   "executed_at": "2026-11-12",
   "expected": "La shelf muestra \"Pronto disponible\" y \"Ver similares\" y la cucarda en la misma posición y estilo, sin superponerse.",
   "form_factor": "app",
   "id": "TC-65-APP-008",
   "name": "Verificar que la cucarda se mantiene en la shelf de un producto sin stock [App] [Logueado]",
   "observation": "La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 ya instalada en el emulador, a pedido del usuario. iOS queda Pendiente.",
   "observed": "El shelf de 029403-KG muestra «Pronto disponible» y «Ver similares», y la cucarda «Promoción en Carnes» arriba a la izquierda (dx 45, dy 36), a 44 px de Favoritos.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- Ubicacion: PLP\n- 000000000000029403-KG tiene cucarda y no tiene stock",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — app con la sesion iniciada",
     "file": "TC-65-APP-008-android-p01-app-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Android · Paso 3 — plp vacuno",
     "file": "TC-65-APP-008-android-p03-plp-vacuno.png"
    },
    {
     "caption": "Android · Paso 4 — shelf sin stock con la cucarda",
     "file": "TC-65-APP-008-android-p04-shelf-sin-stock-con-la-cucarda.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-65-APP-008-android.png"
    }
   ],
   "spec": "tests-app/B2C-65.spec.ts:258",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n2. El usuario navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.\n3. El sistema carga la PLP con el listado de productos.\n4. El usuario ubica 000000000000029403-KG en la grilla.",
   "test_data": "App: v1.0.1 (cl.smu.unimarcapp.sfcc.qa, ya instalada)\nCuenta: vhchirinos+comprador@avatar-global.com (login por correo + código OTP)\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n{SKU_SIN_STOCK} = 000000000000029403-KG"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador",
   "executed_at": "2026-11-12",
   "expected": "La cucarda muestra los primeros 15 caracteres del texto seguidos de \"...\".",
   "form_factor": "app",
   "id": "TC-65-APP-009",
   "name": "Verificar que un texto de cucarda de más de 15 caracteres se trunca con puntos suspensivos [App] [Logueado]",
   "observation": "Esperado: los primeros 15 caracteres seguidos de «...» («Promoción Lleva...»). Obtenido: «Promoción Lleva 2 u…» (19 caracteres + «…»), truncado por ancho y no por cantidad de caracteres; visto igual en la PLP y en el Home. El árbol de accesibilidad trae el texto completo: el veredicto sale de la captura del shelf. La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 ya instalada en el emulador, a pedido del usuario. iOS queda Pendiente.",
   "observed": "La cucarda de 666285-UN, cuyo texto es «Promoción Lleva 2 unidades por Monto» (36 caracteres), se ve en pantalla como «Promoción Lleva 2 u…»: 19 caracteres y puntos suspensivos, cortada por el ancho de la cucarda.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- Ubicacion: PLP\n- 000000000000666285-UN tiene Label_Texto de más de 15 caracteres",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — app con la sesion iniciada",
     "file": "TC-65-APP-009-android-p01-app-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Android · Paso 3 — plp vacuno",
     "file": "TC-65-APP-009-android-p03-plp-vacuno.png"
    },
    {
     "caption": "Android · Paso 4 — cucarda larga",
     "file": "TC-65-APP-009-android-p04-cucarda-larga.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-65-APP-009-android.png"
    }
   ],
   "spec": "tests-app/B2C-65.spec.ts:280",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n2. El usuario navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.\n3. El sistema carga la PLP con el listado de productos.\n4. El usuario ubica 000000000000666285-UN en la grilla.",
   "test_data": "App: v1.0.1 (cl.smu.unimarcapp.sfcc.qa, ya instalada)\nCuenta: vhchirinos+comprador@avatar-global.com (login por correo + código OTP)\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n{SKU_CUCARDA_LARGA} = 000000000000666285-UN"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador",
   "executed_at": "2026-11-12",
   "expected": "La shelf simplificada de 000000000000028616-KGV muestra la cucarda con la misma posición y estilo que en la PLP.",
   "form_factor": "app",
   "id": "TC-65-APP-010",
   "name": "Verificar que la cucarda se muestra en la shelf simplificada del modal de buscador [App] [Logueado]",
   "observation": "La app no tiene una shelf simplificada en el buscador: muestra el shelf completo. La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 ya instalada en el emulador, a pedido del usuario. iOS queda Pendiente.",
   "observed": "Al escribir «Tapapecho vacuno Nacional» en el buscador, los resultados muestran el shelf de 028616-KGV con la cucarda «Cyber» en la misma posición que en la PLP (dx 45, dy 36).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- Ubicacion: Buscador\n- 000000000000028616-KGV tiene cucarda y aparece en las sugerencias del buscador",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — app con la sesion iniciada",
     "file": "TC-65-APP-010-android-p01-app-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Android · Paso 3 — buscador con el producto",
     "file": "TC-65-APP-010-android-p03-buscador-con-el-producto.png"
    },
    {
     "caption": "Android · Paso 3 — shelf del buscador con la cucarda",
     "file": "TC-65-APP-010-android-p03-shelf-del-buscador-con-la-cucarda.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-65-APP-010-android.png"
    }
   ],
   "spec": "tests-app/B2C-65.spec.ts:295",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n2. El usuario toca el buscador y escribe el nombre de 000000000000028616-KGV.\n3. El sistema muestra el modal de buscador con la shelf simplificada.",
   "test_data": "App: v1.0.1 (cl.smu.unimarcapp.sfcc.qa, ya instalada)\nCuenta: vhchirinos+comprador@avatar-global.com (login por correo + código OTP)\n{SKU_CYBER} = 000000000000028616-KGV"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador",
   "executed_at": "2026-11-12",
   "expected": "En iOS y Android la cucarda muestra el mismo texto, color de texto, color de fondo, ícono y color de borde configurados, en la esquina superior izquierda, con el tamaño del Design System Super DS.",
   "form_factor": "app",
   "id": "TC-65-APP-011",
   "name": "Verificar que la cucarda se ve igual en App iOS y App Android y se adapta al Design System [App] [Logueado]",
   "observation": "El TC compara iOS con Android: sin la corrida de iOS no tiene veredicto. Queda el registro de Android para compararlo. La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 ya instalada en el emulador, a pedido del usuario. iOS queda Pendiente.",
   "observed": "Registro de Android: cucarda «Cyber» en 028616-KGV, arriba a la izquierda (dx 45, dy 36, 83x44 px), texto negro sobre fondo blanco con borde, sin ícono.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- Ubicacion: PLP\n- 000000000000028616-KGV tiene cucarda configurada (Label_Texto, Label_ColorTexto, Label_ColorFondo, Label_Icono, Label_ColorBorder)\n- Se dispone de un dispositivo iOS y uno Android",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — app con la sesion iniciada",
     "file": "TC-65-APP-011-android-p01-app-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Android · Paso 3 — plp vacuno",
     "file": "TC-65-APP-011-android-p03-plp-vacuno.png"
    },
    {
     "caption": "Android · Paso 4 — cucarda en android",
     "file": "TC-65-APP-011-android-p04-cucarda-en-android.png"
    }
   ],
   "spec": "tests-app/B2C-65.spec.ts:311",
   "status": "Pendiente",
   "steps": "1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n2. El usuario navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.\n3. El sistema carga la PLP con el listado de productos.\n4. El usuario registra texto, colores, ícono, borde y posición de la cucarda de 000000000000028616-KGV en iOS.\n5. El usuario repite los pasos 1 a 3 en Android y compara.",
   "test_data": "App: v1.0.1 (cl.smu.unimarcapp.sfcc.qa, ya instalada)\nCuenta: vhchirinos+comprador@avatar-global.com (login por correo + código OTP)\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n{SKU_CYBER} = 000000000000028616-KGV"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador",
   "executed_at": "2026-11-12",
   "expected": "La cucarda se muestra en la esquina superior izquierda de la imagen placeholder, con el mismo estilo que sobre una imagen real.",
   "form_factor": "app",
   "id": "TC-65-APP-012",
   "name": "Verificar que la cucarda se muestra sobre la imagen placeholder [App] [Logueado]",
   "observation": "Causa: {SKU_SIN_IMAGEN} (029400-KG, Posta paleta Brasil Paraguay) no tiene cucarda en la PLP Vacuno; la precondición pide un producto con cucarda y sin imagen válida. Acción: declarar un SKU con cucarda y sin imagen. La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 ya instalada en el emulador, a pedido del usuario. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- Ubicacion: PLP\n- 000000000000029400-KG tiene cucarda y no tiene imagen válida",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n2. El usuario navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.\n3. El sistema carga la PLP con el listado de productos.\n4. El usuario ubica 000000000000029400-KG en la grilla.",
   "test_data": "App: v1.0.1 (cl.smu.unimarcapp.sfcc.qa, ya instalada)\nCuenta: vhchirinos+comprador@avatar-global.com (login por correo + código OTP)\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n{SKU_SIN_IMAGEN} = 000000000000029400-KG"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador",
   "executed_at": "2026-11-12",
   "expected": "La cucarda muestra el texto, colores e ícono del label de la promoción, no los de la categoría.",
   "form_factor": "app",
   "id": "TC-65-APP-013",
   "name": "Verificar que el label de promoción tiene prioridad sobre el de categoría [App] [Logueado]",
   "observation": "Causa: {SKU_LABEL_CAT_PROMO} está en TBD en el Excel de data. Acción: cargar el SKU con label de categoría y de promoción. La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 ya instalada en el emulador, a pedido del usuario. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- Ubicacion: PLP\n- {SKU_LABEL_CAT_PROMO} está en una subcategoría con Label_Activo=true y es elegible a una promoción con Label_Activo=true (textos distintos); JOB1 y JOB2 ejecutados",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n2. El usuario navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.\n3. El sistema carga la PLP con el listado de productos.\n4. El usuario ubica {SKU_LABEL_CAT_PROMO} y compara su cucarda con los labels configurados.",
   "test_data": "App: v1.0.1 (cl.smu.unimarcapp.sfcc.qa, ya instalada)\nCuenta: vhchirinos+comprador@avatar-global.com (login por correo + código OTP)\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador",
   "executed_at": "2026-11-12",
   "expected": "La cucarda muestra el label de la promoción de membresía.",
   "form_factor": "app",
   "id": "TC-65-APP-014",
   "name": "Verificar la prioridad entre labels de promoción: membresía > Unipay > BancoEstado > % descuento [App] [Logueado]",
   "observation": "Causa: {SKU_LABEL_MULTIPROMO} está en TBD en el Excel de data. Acción: cargar el SKU elegible a las cuatro promociones con label. La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 ya instalada en el emulador, a pedido del usuario. iOS queda Pendiente.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- Ubicacion: PLP\n- {SKU_LABEL_MULTIPROMO} es elegible a promociones de membresía, Unipay, BancoEstado y % de descuento, todas con label; JOB2 ejecutado",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n2. El usuario navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.\n3. El sistema carga la PLP con el listado de productos.\n4. El usuario ubica {SKU_LABEL_MULTIPROMO} y revisa la cucarda.",
   "test_data": "App: v1.0.1 (cl.smu.unimarcapp.sfcc.qa, ya instalada)\nCuenta: vhchirinos+comprador@avatar-global.com (login por correo + código OTP)\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno"
  }
 ]
}
-->
