# B2C-75 APP - Carrusel de productos T1/T2/T3 (Android) - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-75 APP |
| Última actualización | 2026-11-11 |
| Ejecutado por | Victor Chirinos |
| Ambiente | App Unimarc v1.0.1 (DEV) |
| Dispositivo Android | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local) · cl.smu.unimarcapp.sfcc.qa |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-75 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 8 |
| Bloqueado Data | 6 |
| Rechazado | 2 |
| **Total** | **16** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-11 | 16 | TC-B2C75-APP-001, TC-B2C75-APP-002, TC-B2C75-APP-003, TC-B2C75-APP-004, TC-B2C75-APP-005, TC-B2C75-APP-006, TC-B2C75-APP-007, TC-B2C75-APP-008, TC-B2C75-APP-009, TC-B2C75-APP-010, TC-B2C75-APP-011, TC-B2C75-APP-012, TC-B2C75-APP-013, TC-B2C75-APP-014, TC-B2C75-APP-015, TC-B2C75-APP-016 |

## Detalle por caso de prueba

### TC-B2C75-APP-001 - Verificar que la presentación T1 muestra título, texto y banner arriba y el carrusel debajo con 2 productos [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-11 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local) |
| Duración | 73.0 s |
| Spec | tests-app/B2C-75.spec.ts:135 |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App con el componente "Carrusel de productos" configurado en T1 (con título, texto y banner)

**Data utilizada**

- {APP_BUILD} = v1.0.1
- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com / Avatar1234.

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com / Avatar1234..
2. El sistema carga la Home de la App.
3. El usuario se desplaza hasta el carrusel T1.

**Resultado esperado**

El componente muestra título y texto, el banner en la parte superior y el carrusel de productos debajo con 2 productos visibles por slide.

**Resultado obtenido**

«Frescura y calidad» (T1): título y texto «Frutas y verduras» arriba, el banner «Mecadito Unimarc» debajo y el carrusel de productos bajo el banner, con 2 productos enteros por slide.

**Observación**

La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 instalada en el emulador. iOS queda Pendiente.

**Evidencia**

![Android · Paso 2 — home de la app](<B2C-75 APP Evidencias/TC-B2C75-APP-001-android-p02-home-de-la-app.png>)

![Android · Paso 3 — carrusel t1 frescura y calidad](<B2C-75 APP Evidencias/TC-B2C75-APP-001-android-p03-carrusel-t1-frescura-y-calidad.png>)

![Android · Estado final](<B2C-75 APP Evidencias/TC-B2C75-APP-001-android.png>)

---

### TC-B2C75-APP-002 - Verificar que la etiqueta configurada en T1 aparece como tag sobre el banner [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-11 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local) |
| Duración | 69.0 s |
| Spec | tests-app/B2C-75.spec.ts:151 |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App con el componente "Carrusel de productos" configurado en T1 con el campo Etiqueta configurado (ej. "OFERTA")

**Data utilizada**

- {APP_BUILD} = v1.0.1
- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com / Avatar1234.

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com / Avatar1234..
2. El sistema carga la Home de la App.
3. El usuario se desplaza hasta el carrusel T1 y observa el banner.

**Resultado esperado**

El texto de la etiqueta configurada aparece como tag superpuesto sobre el banner.

**Resultado obtenido**

La etiqueta configurada «OFERTA» aparece como tag sobre el banner del T1 «Frescura y calidad».

**Observación**

La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 instalada en el emulador. iOS queda Pendiente.

**Evidencia**

![Android · Paso 2 — home de la app](<B2C-75 APP Evidencias/TC-B2C75-APP-002-android-p02-home-de-la-app.png>)

![Android · Paso 3 — banner del t1 con la etiqueta](<B2C-75 APP Evidencias/TC-B2C75-APP-002-android-p03-banner-del-t1-con-la-etiqueta.png>)

![Android · Estado final](<B2C-75 APP Evidencias/TC-B2C75-APP-002-android.png>)

---

### TC-B2C75-APP-003 - Verificar que tocar el banner de T1 navega al enlace configurado [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-11 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local) |
| Duración | 70.0 s |
| Spec | tests-app/B2C-75.spec.ts:161 |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App con el componente "Carrusel de productos" configurado en T1 con Enlace del banner configurado

**Data utilizada**

- {APP_BUILD} = v1.0.1
- {CATEGORY_N1_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes
- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com / Avatar1234.

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com / Avatar1234..
2. El sistema carga la Home de la App.
3. El usuario toca el banner del carrusel T1.
4. El sistema navega al destino del banner.

**Resultado esperado**

Se abre la pantalla correspondiente al enlace configurado en el banner (ej. la PLP de https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes).

**Resultado obtenido**

Al tocar el banner del T1 se abre la PLP «Frutas» (17 productos), que es el enlace configurado /category/frutas-y-verduras_frutas.

**Observación**

El enlace configurado del banner es Frutas (no la PLP de {CATEGORY_N1_URL} que el TC da como ejemplo). La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 instalada en el emulador. iOS queda Pendiente.

**Evidencia**

![Android · Paso 2 — home de la app](<B2C-75 APP Evidencias/TC-B2C75-APP-003-android-p02-home-de-la-app.png>)

![Android · Paso 3 — banner del t1](<B2C-75 APP Evidencias/TC-B2C75-APP-003-android-p03-banner-del-t1.png>)

![Android · Paso 4 — destino del banner frutas](<B2C-75 APP Evidencias/TC-B2C75-APP-003-android-p04-destino-del-banner-frutas.png>)

![Android · Estado final](<B2C-75 APP Evidencias/TC-B2C75-APP-003-android.png>)

---

### TC-B2C75-APP-004 - Verificar que la presentación T2 muestra el título a la izquierda y el carrusel debajo con 2 productos [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-11 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local) |
| Spec | (sin spec: el caso quedó bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App con el componente "Carrusel de productos" configurado en T2 con título configurado

**Data utilizada**

- {APP_BUILD} = v1.0.1
- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com / Avatar1234.

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com / Avatar1234..
2. El sistema carga la Home de la App.
3. El usuario se desplaza hasta el carrusel T2.

**Resultado esperado**

El título se muestra alineado a la izquierda y el carrusel debajo, a todo el ancho, con 2 productos visibles por slide.

**Resultado obtenido**

Causa: Configuración de Page Designer leída del Home el 2026-11-11: la única instancia T2 publicada («Los más vendidos», hp-pc-masvendidos) tiene la Posición del título en Centrado, así que no se puede verificar la presentación T2 con el título a la izquierda. Acción: publicar en DEV un carrusel T2 con el título a la izquierda (o declarar cuál usar).

**Observación**

Causa: Configuración de Page Designer leída del Home el 2026-11-11: la única instancia T2 publicada («Los más vendidos», hp-pc-masvendidos) tiene la Posición del título en Centrado, así que no se puede verificar la presentación T2 con el título a la izquierda. Acción: publicar en DEV un carrusel T2 con el título a la izquierda (o declarar cuál usar).

---

### TC-B2C75-APP-005 - Verificar que en T2 modo Colección se muestra el enlace "Ver todo" al final del carrusel [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-11 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local) |
| Duración | 178.0 s |
| Spec | tests-app/B2C-75.spec.ts:176 |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App con el componente "Carrusel de productos" configurado en T2 en modo Colección

**Data utilizada**

- {APP_BUILD} = v1.0.1
- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com / Avatar1234.

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com / Avatar1234..
2. El sistema carga la Home de la App.
3. El usuario desliza el carrusel T2 hasta el final.

**Resultado esperado**

Al final del carrusel se muestra el enlace "Ver todo".

**Resultado obtenido**

Esperado: en el carrusel T2 en modo Colección («Los más vendidos»: T2, colección carnes, máximo 12) se muestra el enlace «Ver todo» al final del carrusel. Obtenido: al deslizar hasta el último producto no aparece «Ver todo»; el carrusel termina en la última tarjeta (solo hay «Mostrar todo» arriba y abajo del bloque). tests-app/B2C-75.spec.ts:176. Bug: B2C-1485.

**Observación**

Esperado: en el carrusel T2 en modo Colección («Los más vendidos»: T2, colección carnes, máximo 12) se muestra el enlace «Ver todo» al final del carrusel. Obtenido: al deslizar hasta el último producto no aparece «Ver todo»; el carrusel termina en la última tarjeta (solo hay «Mostrar todo» arriba y abajo del bloque). tests-app/B2C-75.spec.ts:176. Bug: B2C-1485.

**Evidencia**

![Android · Paso 2 — home de la app](<B2C-75 APP Evidencias/TC-B2C75-APP-005-android-p02-home-de-la-app.png>)

![Android · Estado final](<B2C-75 APP Evidencias/TC-B2C75-APP-005-android.png>)

---

### TC-B2C75-APP-006 - Verificar que la presentación T3 muestra el título, el fondo configurado y el carrusel con 2 productos y "Mostrar todo" [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-11 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local) |
| Spec | (sin spec: el caso quedó bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App con el componente "Carrusel de productos" configurado en T3 con título y color de fondo configurados

**Data utilizada**

- {APP_BUILD} = v1.0.1
- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com / Avatar1234.

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com / Avatar1234..
2. El sistema carga la Home de la App.
3. El usuario se desplaza hasta el carrusel T3.

**Resultado esperado**

El título se muestra en la posición configurada, el bloque usa el color de fondo configurado, el carrusel aparece debajo con 2 productos visibles y el enlace "Mostrar todo" está alineado a la derecha.

**Resultado obtenido**

Causa: Configuración de Page Designer leída del Home el 2026-11-11: no hay ninguna instancia T3 publicada en el Home (las de Carrusel de productos son T1: Frescura, Milka, Especial Bebidas; y T2: Los más vendidos). Acción: publicar en DEV un carrusel T3 con título y color de fondo configurados.

**Observación**

Causa: Configuración de Page Designer leída del Home el 2026-11-11: no hay ninguna instancia T3 publicada en el Home (las de Carrusel de productos son T1: Frescura, Milka, Especial Bebidas; y T2: Los más vendidos). Acción: publicar en DEV un carrusel T3 con título y color de fondo configurados.

---

### TC-B2C75-APP-007 - Verificar que el carrusel se desplaza al deslizar con el dedo [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-11 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local) |
| Duración | 77.0 s |
| Spec | tests-app/B2C-75.spec.ts:197 |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App con el componente "Carrusel de productos" configurado en cualquier presentación

**Data utilizada**

- {APP_BUILD} = v1.0.1
- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com / Avatar1234.

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com / Avatar1234..
2. El sistema carga la Home de la App.
3. El usuario desliza horizontalmente con el dedo sobre el carrusel.
4. El sistema desplaza el carrusel.

**Resultado esperado**

El carrusel se desplaza horizontalmente y muestra los productos siguientes.

**Resultado obtenido**

Al deslizar con el dedo el carrusel «Los más vendidos» se desplaza y muestra los productos siguientes.

**Observación**

La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 instalada en el emulador. iOS queda Pendiente.

**Evidencia**

![Android · Paso 2 — carrusel antes de deslizar](<B2C-75 APP Evidencias/TC-B2C75-APP-007-android-p02-carrusel-antes-de-deslizar.png>)

![Android · Paso 2 — home de la app](<B2C-75 APP Evidencias/TC-B2C75-APP-007-android-p02-home-de-la-app.png>)

![Android · Paso 4 — carrusel tras deslizar](<B2C-75 APP Evidencias/TC-B2C75-APP-007-android-p04-carrusel-tras-deslizar.png>)

![Android · Estado final](<B2C-75 APP Evidencias/TC-B2C75-APP-007-android.png>)

---

### TC-B2C75-APP-008 - Verificar que el carrusel avanza automáticamente cada 3 segundos [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-11 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local) |
| Duración | 113.0 s |
| Spec | tests-app/B2C-75.spec.ts:213 |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App con el componente "Carrusel de productos" configurado en cualquier presentación

**Data utilizada**

- {APP_BUILD} = v1.0.1
- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com / Avatar1234.

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com / Avatar1234..
2. El sistema carga la Home de la App.
3. El usuario se desplaza hasta el carrusel y lo observa sin tocarlo durante al menos 6 segundos.

**Resultado esperado**

El carrusel avanza solo cada 3 segundos, sin interacción del usuario.

**Resultado obtenido**

Esperado: el carrusel avanza solo cada 3 segundos (autoplay activo y velocidad 3 en Page Designer para «Los más vendidos»). Obtenido: observado 7 segundos sin tocarlo, el carrusel no cambia (0 píxeles distintos segundo a segundo); también en la exploración, 8 segundos sin movimiento. tests-app/B2C-75.spec.ts:213. Bug: B2C-1486.

**Observación**

Esperado: el carrusel avanza solo cada 3 segundos (autoplay activo y velocidad 3 en Page Designer para «Los más vendidos»). Obtenido: observado 7 segundos sin tocarlo, el carrusel no cambia (0 píxeles distintos segundo a segundo); también en la exploración, 8 segundos sin movimiento. tests-app/B2C-75.spec.ts:213. Bug: B2C-1486.

**Evidencia**

![Android · Paso 2 — home de la app](<B2C-75 APP Evidencias/TC-B2C75-APP-008-android-p02-home-de-la-app.png>)

![Android · Paso 3 — carrusel al empezar a observar](<B2C-75 APP Evidencias/TC-B2C75-APP-008-android-p03-carrusel-al-empezar-a-observar.png>)

![Android · Paso 4 — carrusel tras 7 s sin tocarlo](<B2C-75 APP Evidencias/TC-B2C75-APP-008-android-p04-carrusel-tras-7-s-sin-tocarlo.png>)

![Android · Estado final](<B2C-75 APP Evidencias/TC-B2C75-APP-008-android.png>)

---

### TC-B2C75-APP-009 - Verificar que "Mostrar todo" lleva al destino configurado [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-11 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local) |
| Duración | 62.0 s |
| Spec | tests-app/B2C-75.spec.ts:235 |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App con el componente "Carrusel de productos" configurado en modo Colección con el enlace "Mostrar todo" visible

**Data utilizada**

- {APP_BUILD} = v1.0.1
- {CATEGORY_N1_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes
- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com / Avatar1234.

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com / Avatar1234..
2. El sistema carga la Home de la App.
3. El usuario toca "Mostrar todo" en el carrusel.
4. El sistema navega al destino configurado.

**Resultado esperado**

Se abre el destino configurado para "Mostrar todo" (ej. la PLP de la colección).

**Resultado obtenido**

«Mostrar todo» del carrusel «Los más vendidos» (modo Colección, categoría carnes) abre la landing «Carnes».

**Observación**

La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 instalada en el emulador. iOS queda Pendiente.

**Evidencia**

![Android · Paso 2 — home de la app](<B2C-75 APP Evidencias/TC-B2C75-APP-009-android-p02-home-de-la-app.png>)

![Android · Paso 3 — mostrar todo del carrusel](<B2C-75 APP Evidencias/TC-B2C75-APP-009-android-p03-mostrar-todo-del-carrusel.png>)

![Android · Paso 4 — destino de mostrar todo carnes](<B2C-75 APP Evidencias/TC-B2C75-APP-009-android-p04-destino-de-mostrar-todo-carnes.png>)

![Android · Estado final](<B2C-75 APP Evidencias/TC-B2C75-APP-009-android.png>)

---

### TC-B2C75-APP-010 - Verificar que tocar la imagen o el nombre de un producto abre su PDP [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-11 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local) |
| Duración | 74.0 s |
| Spec | tests-app/B2C-75.spec.ts:250 |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App con el componente "Carrusel de productos" configurado en cualquier presentación

**Data utilizada**

- {APP_BUILD} = v1.0.1
- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com / Avatar1234.

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com / Avatar1234..
2. El sistema carga la Home de la App.
3. El usuario toca la imagen o el nombre de un producto del carrusel.
4. El sistema abre la PDP.

**Resultado esperado**

Se abre la PDP del producto tocado.

**Resultado obtenido**

Tocar el nombre «Simunovic | Chuletas de cordero Simunovic 600 g» en el carrusel abre su PDP.

**Observación**

Pasó en el reintento 1: en el primer intento el script no ubicó el carrusel al recorrer el Home. La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 instalada en el emulador. iOS queda Pendiente.

**Evidencia**

![Android · Paso 2 — home de la app](<B2C-75 APP Evidencias/TC-B2C75-APP-010-android-p02-home-de-la-app.png>)

![Android · Paso 3 — producto simunovic chuletas de cordero simunovic 600 g](<B2C-75 APP Evidencias/TC-B2C75-APP-010-android-p03-producto-simunovic-chuletas-de-cordero-simunovic-600-g.png>)

![Android · Paso 4 — pdp del producto](<B2C-75 APP Evidencias/TC-B2C75-APP-010-android-p04-pdp-del-producto.png>)

![Android · Estado final](<B2C-75 APP Evidencias/TC-B2C75-APP-010-android.png>)

---

### TC-B2C75-APP-011 - Verificar que agregar un producto con stock desde el carrusel actualiza el indicador del carro [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-11 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local) |
| Duración | 81.0 s |
| Spec | tests-app/B2C-75.spec.ts:271 |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App con el componente "Carrusel de productos" configurado en cualquier presentación
- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)

**Data utilizada**

- {APP_BUILD} = v1.0.1
- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com / Avatar1234.

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com / Avatar1234..
2. El sistema carga la Home de la App.
3. El usuario anota el indicador del carro y toca "Agregar" en un producto con stock del carrusel.
4. El sistema agrega el producto al carro.

**Resultado esperado**

El indicador del carro aumenta en la cantidad agregada.

**Resultado obtenido**

Con despacho activo (Calle Uno 23, La Florida), «Agregar» en Chuletas de cordero Simunovic sube el indicador del carro de 0 a 1. Al terminar se quitó la unidad agregada.

**Observación**

La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 instalada en el emulador. iOS queda Pendiente.

**Evidencia**

![Android · Paso 2 — home de la app](<B2C-75 APP Evidencias/TC-B2C75-APP-011-android-p02-home-de-la-app.png>)

![Android · Paso 3 — carro con 0 unidades antes de agregar](<B2C-75 APP Evidencias/TC-B2C75-APP-011-android-p03-carro-con-0-unidades-antes-de-agregar.png>)

![Android · Paso 4 — carro con 1 unidades tras agregar](<B2C-75 APP Evidencias/TC-B2C75-APP-011-android-p04-carro-con-1-unidades-tras-agregar.png>)

![Android · Estado final](<B2C-75 APP Evidencias/TC-B2C75-APP-011-android.png>)

---

### TC-B2C75-APP-012 - Verificar que un producto sin stock del carrusel muestra "Pronto disponible" y "Ver similares" [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-11 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local) |
| Spec | (sin spec: el caso quedó bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App con el componente "Carrusel de productos" configurado en cualquier presentación
- El carrusel incluye 000000000000029403-KG, sin stock

**Data utilizada**

- {APP_BUILD} = v1.0.1
- {SKU_SIN_STOCK} = 000000000000029403-KG
- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com / Avatar1234.

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com / Avatar1234..
2. El sistema carga la Home de la App.
3. El usuario ubica 000000000000029403-KG en el carrusel.

**Resultado esperado**

La tarjeta de 000000000000029403-KG muestra la etiqueta "Pronto disponible", no muestra "Agregar" y muestra "Ver similares".

**Resultado obtenido**

Causa: 000000000000029403-KG (000000000000029403-KG, Tapapecho vacuno) no está en ningún Carrusel de productos del Home (sí aparece en My Usuals, que es otro componente). Acción: incluir el SKU en un Carrusel de productos o declarar un SKU sin stock que esté en uno.

**Observación**

Causa: {SKU_SIN_STOCK} (000000000000029403-KG, Tapapecho vacuno) no está en ningún Carrusel de productos del Home (sí aparece en My Usuals, que es otro componente). Acción: incluir el SKU en un Carrusel de productos o declarar un SKU sin stock que esté en uno.

---

### TC-B2C75-APP-013 - Verificar que con la categoría de Colección no disponible el carrusel queda sin productos y el resto del layout se ve normal [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-11 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local) |
| Spec | (sin spec: el caso quedó bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App con el componente "Carrusel de productos" configurado en modo Colección con la categoría Bebés y Niños no disponible

**Data utilizada**

- {APP_BUILD} = v1.0.1
- {CATEGORY_N1_WO_PRODS} = Bebés y Niños
- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com / Avatar1234.

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com / Avatar1234..
2. El sistema carga la Home de la App.
3. El usuario se desplaza hasta el carrusel configurado con Bebés y Niños.

**Resultado esperado**

El carrusel no muestra productos (shelves en blanco), el título, el texto y el banner se ven con normalidad y la App no se cierra ni se bloquea.

**Resultado obtenido**

Causa: el carrusel configurado con Bebés y Niños (Bebés y Niños: «Frescura y calidad», colección bebes-y-ninos) sí muestra productos, así que la categoría está disponible y no se cumple la precondición. Acción: declarar una categoría realmente no disponible y configurarla en un carrusel.

**Observación**

Causa: el carrusel configurado con {CATEGORY_N1_WO_PRODS} (Bebés y Niños: «Frescura y calidad», colección bebes-y-ninos) sí muestra productos, así que la categoría está disponible y no se cumple la precondición. Acción: declarar una categoría realmente no disponible y configurarla en un carrusel.

---

### TC-B2C75-APP-014 - Verificar que una imagen que no carga muestra el estado "imagen no disponible" [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-11 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local) |
| Spec | (sin spec: el caso quedó bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App con el componente "Carrusel de productos" configurado en cualquier presentación, con un banner o producto con imagen inválida

**Data utilizada**

- {APP_BUILD} = v1.0.1
- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com / Avatar1234.

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com / Avatar1234..
2. El sistema carga la Home de la App.
3. El usuario se desplaza hasta el componente con la imagen inválida.

**Resultado esperado**

El elemento afectado muestra el estado de imagen no disponible, el resto del componente se ve con normalidad y la App no se cierra ni se bloquea.

**Resultado obtenido**

Causa: ningún carrusel del Home tiene un banner o producto con imagen inválida. Acción: configurar en DEV un carrusel con una imagen inválida y declararlo en la fila.

**Observación**

Causa: ningún carrusel del Home tiene un banner o producto con imagen inválida. Acción: configurar en DEV un carrusel con una imagen inválida y declararlo en la fila.

---

### TC-B2C75-APP-015 - Verificar que el fondo del componente ocupa todo el ancho y el contenido respeta el padding del header [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-11 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local) |
| Duración | 132.0 s |
| Spec | tests-app/B2C-75.spec.ts:291 |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App con el componente "Carrusel de productos" configurado en cualquier presentación

**Data utilizada**

- {APP_BUILD} = v1.0.1
- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com / Avatar1234.

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com / Avatar1234..
2. El sistema carga la Home de la App.
3. El usuario se desplaza hasta el componente y observa sus bordes laterales.

**Resultado esperado**

El fondo del componente llega de borde a borde de la pantalla y el contenido interior queda alineado con el padding lateral del header.

**Resultado obtenido**

En «Frescura y calidad» el fondo (#FFFFFF configurado) llega a ambos bordes de la pantalla y el título, el banner y el carrusel arrancan en x=44, el mismo padding del header (44 px a cada lado).

**Observación**

El fondo configurado es blanco, igual que la página, así que «borde a borde» se verifica por el color en los bordes. La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 instalada en el emulador. iOS queda Pendiente.

**Evidencia**

![Android · Paso 2 — home de la app](<B2C-75 APP Evidencias/TC-B2C75-APP-015-android-p02-home-de-la-app.png>)

![Android · Paso 3 — bordes del componente t1](<B2C-75 APP Evidencias/TC-B2C75-APP-015-android-p03-bordes-del-componente-t1.png>)

![Android · Estado final](<B2C-75 APP Evidencias/TC-B2C75-APP-015-android.png>)

---

### TC-B2C75-APP-016 - Verificar que en modo Colección el carrusel no muestra más productos que el máximo configurado [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-11 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local) |
| Spec | (sin spec: el caso quedó bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App con el componente "Carrusel de productos" configurado en modo Colección con Máximo de productos = {MAX_PRODUCTOS_CARRUSEL}
- La categoría https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes tiene más productos que {MAX_PRODUCTOS_CARRUSEL}

**Data utilizada**

- {APP_BUILD} = v1.0.1
- {CATEGORY_N1_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes
- {MAX_PRODUCTOS_CARRUSEL} = TBD en el Excel de data
- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com / Avatar1234.

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com / Avatar1234..
2. El sistema carga la Home de la App.
3. El usuario desliza el carrusel hasta el final y cuenta los productos.

**Resultado esperado**

El carrusel muestra como máximo {MAX_PRODUCTOS_CARRUSEL} productos.

**Resultado obtenido**

Causa: {MAX_PRODUCTOS_CARRUSEL} no tiene fila en el Excel de data. Acción: cargar el máximo configurado (en Page Designer «Los más vendidos» tiene 12 y los T1, 8).

**Observación**

Causa: {MAX_PRODUCTOS_CARRUSEL} no tiene fila en el Excel de data. Acción: cargar el máximo configurado (en Page Designer «Los más vendidos» tiene 12 y los T1, 8).

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "devices": {
   "android": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local) · cl.smu.unimarcapp.sfcc.qa"
  },
  "environment": "App Unimarc v1.0.1 (DEV)",
  "executed_by": "Victor Chirinos",
  "suite": "B2C-75 APP",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-75 APP Test Cases.xlsx",
  "title": "B2C-75 APP - Carrusel de productos T1/T2/T3 (Android) - Evidencias QA",
  "updated_at": "2026-11-11"
 },
 "history": {
  "2026-11-11": [
   "TC-B2C75-APP-001",
   "TC-B2C75-APP-002",
   "TC-B2C75-APP-003",
   "TC-B2C75-APP-004",
   "TC-B2C75-APP-005",
   "TC-B2C75-APP-006",
   "TC-B2C75-APP-007",
   "TC-B2C75-APP-008",
   "TC-B2C75-APP-009",
   "TC-B2C75-APP-010",
   "TC-B2C75-APP-011",
   "TC-B2C75-APP-012",
   "TC-B2C75-APP-013",
   "TC-B2C75-APP-014",
   "TC-B2C75-APP-015",
   "TC-B2C75-APP-016"
  ]
 },
 "results": [
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local)",
   "duration_s": 73,
   "executed_at": "2026-11-11",
   "expected": "El componente muestra título y texto, el banner en la parte superior y el carrusel de productos debajo con 2 productos visibles por slide.",
   "form_factor": "app",
   "id": "TC-B2C75-APP-001",
   "name": "Verificar que la presentación T1 muestra título, texto y banner arriba y el carrusel debajo con 2 productos [App] [Logueado]",
   "observation": "La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 instalada en el emulador. iOS queda Pendiente.",
   "observed": "«Frescura y calidad» (T1): título y texto «Frutas y verduras» arriba, el banner «Mecadito Unimarc» debajo y el carrusel de productos bajo el banner, con 2 productos enteros por slide.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App con el componente \"Carrusel de productos\" configurado en T1 (con título, texto y banner)",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home de la app",
     "file": "TC-B2C75-APP-001-android-p02-home-de-la-app.png"
    },
    {
     "caption": "Android · Paso 3 — carrusel t1 frescura y calidad",
     "file": "TC-B2C75-APP-001-android-p03-carrusel-t1-frescura-y-calidad.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C75-APP-001-android.png"
    }
   ],
   "spec": "tests-app/B2C-75.spec.ts:135",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com / Avatar1234..\n2. El sistema carga la Home de la App.\n3. El usuario se desplaza hasta el carrusel T1.",
   "test_data": "- {APP_BUILD} = v1.0.1\n- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com / Avatar1234."
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local)",
   "duration_s": 69,
   "executed_at": "2026-11-11",
   "expected": "El texto de la etiqueta configurada aparece como tag superpuesto sobre el banner.",
   "form_factor": "app",
   "id": "TC-B2C75-APP-002",
   "name": "Verificar que la etiqueta configurada en T1 aparece como tag sobre el banner [App] [Logueado]",
   "observation": "La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 instalada en el emulador. iOS queda Pendiente.",
   "observed": "La etiqueta configurada «OFERTA» aparece como tag sobre el banner del T1 «Frescura y calidad».",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App con el componente \"Carrusel de productos\" configurado en T1 con el campo Etiqueta configurado (ej. \"OFERTA\")",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home de la app",
     "file": "TC-B2C75-APP-002-android-p02-home-de-la-app.png"
    },
    {
     "caption": "Android · Paso 3 — banner del t1 con la etiqueta",
     "file": "TC-B2C75-APP-002-android-p03-banner-del-t1-con-la-etiqueta.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C75-APP-002-android.png"
    }
   ],
   "spec": "tests-app/B2C-75.spec.ts:151",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com / Avatar1234..\n2. El sistema carga la Home de la App.\n3. El usuario se desplaza hasta el carrusel T1 y observa el banner.",
   "test_data": "- {APP_BUILD} = v1.0.1\n- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com / Avatar1234."
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local)",
   "duration_s": 70,
   "executed_at": "2026-11-11",
   "expected": "Se abre la pantalla correspondiente al enlace configurado en el banner (ej. la PLP de https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes).",
   "form_factor": "app",
   "id": "TC-B2C75-APP-003",
   "name": "Verificar que tocar el banner de T1 navega al enlace configurado [App] [Logueado]",
   "observation": "El enlace configurado del banner es Frutas (no la PLP de {CATEGORY_N1_URL} que el TC da como ejemplo). La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 instalada en el emulador. iOS queda Pendiente.",
   "observed": "Al tocar el banner del T1 se abre la PLP «Frutas» (17 productos), que es el enlace configurado /category/frutas-y-verduras_frutas.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App con el componente \"Carrusel de productos\" configurado en T1 con Enlace del banner configurado",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home de la app",
     "file": "TC-B2C75-APP-003-android-p02-home-de-la-app.png"
    },
    {
     "caption": "Android · Paso 3 — banner del t1",
     "file": "TC-B2C75-APP-003-android-p03-banner-del-t1.png"
    },
    {
     "caption": "Android · Paso 4 — destino del banner frutas",
     "file": "TC-B2C75-APP-003-android-p04-destino-del-banner-frutas.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C75-APP-003-android.png"
    }
   ],
   "spec": "tests-app/B2C-75.spec.ts:161",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com / Avatar1234..\n2. El sistema carga la Home de la App.\n3. El usuario toca el banner del carrusel T1.\n4. El sistema navega al destino del banner.",
   "test_data": "- {APP_BUILD} = v1.0.1\n- {CATEGORY_N1_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes\n- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com / Avatar1234."
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local)",
   "executed_at": "2026-11-11",
   "expected": "El título se muestra alineado a la izquierda y el carrusel debajo, a todo el ancho, con 2 productos visibles por slide.",
   "form_factor": "app",
   "id": "TC-B2C75-APP-004",
   "name": "Verificar que la presentación T2 muestra el título a la izquierda y el carrusel debajo con 2 productos [App] [Logueado]",
   "observation": "Causa: Configuración de Page Designer leída del Home el 2026-11-11: la única instancia T2 publicada («Los más vendidos», hp-pc-masvendidos) tiene la Posición del título en Centrado, así que no se puede verificar la presentación T2 con el título a la izquierda. Acción: publicar en DEV un carrusel T2 con el título a la izquierda (o declarar cuál usar).",
   "observed": "Causa: Configuración de Page Designer leída del Home el 2026-11-11: la única instancia T2 publicada («Los más vendidos», hp-pc-masvendidos) tiene la Posición del título en Centrado, así que no se puede verificar la presentación T2 con el título a la izquierda. Acción: publicar en DEV un carrusel T2 con el título a la izquierda (o declarar cuál usar).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App con el componente \"Carrusel de productos\" configurado en T2 con título configurado",
   "spec": "(sin spec: el caso quedó bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com / Avatar1234..\n2. El sistema carga la Home de la App.\n3. El usuario se desplaza hasta el carrusel T2.",
   "test_data": "- {APP_BUILD} = v1.0.1\n- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com / Avatar1234."
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local)",
   "duration_s": 178,
   "executed_at": "2026-11-11",
   "expected": "Al final del carrusel se muestra el enlace \"Ver todo\".",
   "form_factor": "app",
   "id": "TC-B2C75-APP-005",
   "name": "Verificar que en T2 modo Colección se muestra el enlace \"Ver todo\" al final del carrusel [App] [Logueado]",
   "observation": "Esperado: en el carrusel T2 en modo Colección («Los más vendidos»: T2, colección carnes, máximo 12) se muestra el enlace «Ver todo» al final del carrusel. Obtenido: al deslizar hasta el último producto no aparece «Ver todo»; el carrusel termina en la última tarjeta (solo hay «Mostrar todo» arriba y abajo del bloque). tests-app/B2C-75.spec.ts:176. Bug: B2C-1485.",
   "observed": "Esperado: en el carrusel T2 en modo Colección («Los más vendidos»: T2, colección carnes, máximo 12) se muestra el enlace «Ver todo» al final del carrusel. Obtenido: al deslizar hasta el último producto no aparece «Ver todo»; el carrusel termina en la última tarjeta (solo hay «Mostrar todo» arriba y abajo del bloque). tests-app/B2C-75.spec.ts:176. Bug: B2C-1485.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App con el componente \"Carrusel de productos\" configurado en T2 en modo Colección",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home de la app",
     "file": "TC-B2C75-APP-005-android-p02-home-de-la-app.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C75-APP-005-android.png"
    }
   ],
   "spec": "tests-app/B2C-75.spec.ts:176",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com / Avatar1234..\n2. El sistema carga la Home de la App.\n3. El usuario desliza el carrusel T2 hasta el final.",
   "test_data": "- {APP_BUILD} = v1.0.1\n- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com / Avatar1234."
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local)",
   "executed_at": "2026-11-11",
   "expected": "El título se muestra en la posición configurada, el bloque usa el color de fondo configurado, el carrusel aparece debajo con 2 productos visibles y el enlace \"Mostrar todo\" está alineado a la derecha.",
   "form_factor": "app",
   "id": "TC-B2C75-APP-006",
   "name": "Verificar que la presentación T3 muestra el título, el fondo configurado y el carrusel con 2 productos y \"Mostrar todo\" [App] [Logueado]",
   "observation": "Causa: Configuración de Page Designer leída del Home el 2026-11-11: no hay ninguna instancia T3 publicada en el Home (las de Carrusel de productos son T1: Frescura, Milka, Especial Bebidas; y T2: Los más vendidos). Acción: publicar en DEV un carrusel T3 con título y color de fondo configurados.",
   "observed": "Causa: Configuración de Page Designer leída del Home el 2026-11-11: no hay ninguna instancia T3 publicada en el Home (las de Carrusel de productos son T1: Frescura, Milka, Especial Bebidas; y T2: Los más vendidos). Acción: publicar en DEV un carrusel T3 con título y color de fondo configurados.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App con el componente \"Carrusel de productos\" configurado en T3 con título y color de fondo configurados",
   "spec": "(sin spec: el caso quedó bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com / Avatar1234..\n2. El sistema carga la Home de la App.\n3. El usuario se desplaza hasta el carrusel T3.",
   "test_data": "- {APP_BUILD} = v1.0.1\n- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com / Avatar1234."
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local)",
   "duration_s": 77,
   "executed_at": "2026-11-11",
   "expected": "El carrusel se desplaza horizontalmente y muestra los productos siguientes.",
   "form_factor": "app",
   "id": "TC-B2C75-APP-007",
   "name": "Verificar que el carrusel se desplaza al deslizar con el dedo [App] [Logueado]",
   "observation": "La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 instalada en el emulador. iOS queda Pendiente.",
   "observed": "Al deslizar con el dedo el carrusel «Los más vendidos» se desplaza y muestra los productos siguientes.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App con el componente \"Carrusel de productos\" configurado en cualquier presentación",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — carrusel antes de deslizar",
     "file": "TC-B2C75-APP-007-android-p02-carrusel-antes-de-deslizar.png"
    },
    {
     "caption": "Android · Paso 2 — home de la app",
     "file": "TC-B2C75-APP-007-android-p02-home-de-la-app.png"
    },
    {
     "caption": "Android · Paso 4 — carrusel tras deslizar",
     "file": "TC-B2C75-APP-007-android-p04-carrusel-tras-deslizar.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C75-APP-007-android.png"
    }
   ],
   "spec": "tests-app/B2C-75.spec.ts:197",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com / Avatar1234..\n2. El sistema carga la Home de la App.\n3. El usuario desliza horizontalmente con el dedo sobre el carrusel.\n4. El sistema desplaza el carrusel.",
   "test_data": "- {APP_BUILD} = v1.0.1\n- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com / Avatar1234."
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local)",
   "duration_s": 113,
   "executed_at": "2026-11-11",
   "expected": "El carrusel avanza solo cada 3 segundos, sin interacción del usuario.",
   "form_factor": "app",
   "id": "TC-B2C75-APP-008",
   "name": "Verificar que el carrusel avanza automáticamente cada 3 segundos [App] [Logueado]",
   "observation": "Esperado: el carrusel avanza solo cada 3 segundos (autoplay activo y velocidad 3 en Page Designer para «Los más vendidos»). Obtenido: observado 7 segundos sin tocarlo, el carrusel no cambia (0 píxeles distintos segundo a segundo); también en la exploración, 8 segundos sin movimiento. tests-app/B2C-75.spec.ts:213. Bug: B2C-1486.",
   "observed": "Esperado: el carrusel avanza solo cada 3 segundos (autoplay activo y velocidad 3 en Page Designer para «Los más vendidos»). Obtenido: observado 7 segundos sin tocarlo, el carrusel no cambia (0 píxeles distintos segundo a segundo); también en la exploración, 8 segundos sin movimiento. tests-app/B2C-75.spec.ts:213. Bug: B2C-1486.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App con el componente \"Carrusel de productos\" configurado en cualquier presentación",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home de la app",
     "file": "TC-B2C75-APP-008-android-p02-home-de-la-app.png"
    },
    {
     "caption": "Android · Paso 3 — carrusel al empezar a observar",
     "file": "TC-B2C75-APP-008-android-p03-carrusel-al-empezar-a-observar.png"
    },
    {
     "caption": "Android · Paso 4 — carrusel tras 7 s sin tocarlo",
     "file": "TC-B2C75-APP-008-android-p04-carrusel-tras-7-s-sin-tocarlo.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C75-APP-008-android.png"
    }
   ],
   "spec": "tests-app/B2C-75.spec.ts:213",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com / Avatar1234..\n2. El sistema carga la Home de la App.\n3. El usuario se desplaza hasta el carrusel y lo observa sin tocarlo durante al menos 6 segundos.",
   "test_data": "- {APP_BUILD} = v1.0.1\n- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com / Avatar1234."
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local)",
   "duration_s": 62,
   "executed_at": "2026-11-11",
   "expected": "Se abre el destino configurado para \"Mostrar todo\" (ej. la PLP de la colección).",
   "form_factor": "app",
   "id": "TC-B2C75-APP-009",
   "name": "Verificar que \"Mostrar todo\" lleva al destino configurado [App] [Logueado]",
   "observation": "La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 instalada en el emulador. iOS queda Pendiente.",
   "observed": "«Mostrar todo» del carrusel «Los más vendidos» (modo Colección, categoría carnes) abre la landing «Carnes».",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App con el componente \"Carrusel de productos\" configurado en modo Colección con el enlace \"Mostrar todo\" visible",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home de la app",
     "file": "TC-B2C75-APP-009-android-p02-home-de-la-app.png"
    },
    {
     "caption": "Android · Paso 3 — mostrar todo del carrusel",
     "file": "TC-B2C75-APP-009-android-p03-mostrar-todo-del-carrusel.png"
    },
    {
     "caption": "Android · Paso 4 — destino de mostrar todo carnes",
     "file": "TC-B2C75-APP-009-android-p04-destino-de-mostrar-todo-carnes.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C75-APP-009-android.png"
    }
   ],
   "spec": "tests-app/B2C-75.spec.ts:235",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com / Avatar1234..\n2. El sistema carga la Home de la App.\n3. El usuario toca \"Mostrar todo\" en el carrusel.\n4. El sistema navega al destino configurado.",
   "test_data": "- {APP_BUILD} = v1.0.1\n- {CATEGORY_N1_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes\n- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com / Avatar1234."
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local)",
   "duration_s": 74,
   "executed_at": "2026-11-11",
   "expected": "Se abre la PDP del producto tocado.",
   "form_factor": "app",
   "id": "TC-B2C75-APP-010",
   "name": "Verificar que tocar la imagen o el nombre de un producto abre su PDP [App] [Logueado]",
   "observation": "Pasó en el reintento 1: en el primer intento el script no ubicó el carrusel al recorrer el Home. La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 instalada en el emulador. iOS queda Pendiente.",
   "observed": "Tocar el nombre «Simunovic | Chuletas de cordero Simunovic 600 g» en el carrusel abre su PDP.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App con el componente \"Carrusel de productos\" configurado en cualquier presentación",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home de la app",
     "file": "TC-B2C75-APP-010-android-p02-home-de-la-app.png"
    },
    {
     "caption": "Android · Paso 3 — producto simunovic chuletas de cordero simunovic 600 g",
     "file": "TC-B2C75-APP-010-android-p03-producto-simunovic-chuletas-de-cordero-simunovic-600-g.png"
    },
    {
     "caption": "Android · Paso 4 — pdp del producto",
     "file": "TC-B2C75-APP-010-android-p04-pdp-del-producto.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C75-APP-010-android.png"
    }
   ],
   "spec": "tests-app/B2C-75.spec.ts:250",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com / Avatar1234..\n2. El sistema carga la Home de la App.\n3. El usuario toca la imagen o el nombre de un producto del carrusel.\n4. El sistema abre la PDP.",
   "test_data": "- {APP_BUILD} = v1.0.1\n- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com / Avatar1234."
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local)",
   "duration_s": 81,
   "executed_at": "2026-11-11",
   "expected": "El indicador del carro aumenta en la cantidad agregada.",
   "form_factor": "app",
   "id": "TC-B2C75-APP-011",
   "name": "Verificar que agregar un producto con stock desde el carrusel actualiza el indicador del carro [App] [Logueado]",
   "observation": "La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 instalada en el emulador. iOS queda Pendiente.",
   "observed": "Con despacho activo (Calle Uno 23, La Florida), «Agregar» en Chuletas de cordero Simunovic sube el indicador del carro de 0 a 1. Al terminar se quitó la unidad agregada.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App con el componente \"Carrusel de productos\" configurado en cualquier presentación\n- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home de la app",
     "file": "TC-B2C75-APP-011-android-p02-home-de-la-app.png"
    },
    {
     "caption": "Android · Paso 3 — carro con 0 unidades antes de agregar",
     "file": "TC-B2C75-APP-011-android-p03-carro-con-0-unidades-antes-de-agregar.png"
    },
    {
     "caption": "Android · Paso 4 — carro con 1 unidades tras agregar",
     "file": "TC-B2C75-APP-011-android-p04-carro-con-1-unidades-tras-agregar.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C75-APP-011-android.png"
    }
   ],
   "spec": "tests-app/B2C-75.spec.ts:271",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com / Avatar1234..\n2. El sistema carga la Home de la App.\n3. El usuario anota el indicador del carro y toca \"Agregar\" en un producto con stock del carrusel.\n4. El sistema agrega el producto al carro.",
   "test_data": "- {APP_BUILD} = v1.0.1\n- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com / Avatar1234."
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local)",
   "executed_at": "2026-11-11",
   "expected": "La tarjeta de 000000000000029403-KG muestra la etiqueta \"Pronto disponible\", no muestra \"Agregar\" y muestra \"Ver similares\".",
   "form_factor": "app",
   "id": "TC-B2C75-APP-012",
   "name": "Verificar que un producto sin stock del carrusel muestra \"Pronto disponible\" y \"Ver similares\" [App] [Logueado]",
   "observation": "Causa: {SKU_SIN_STOCK} (000000000000029403-KG, Tapapecho vacuno) no está en ningún Carrusel de productos del Home (sí aparece en My Usuals, que es otro componente). Acción: incluir el SKU en un Carrusel de productos o declarar un SKU sin stock que esté en uno.",
   "observed": "Causa: 000000000000029403-KG (000000000000029403-KG, Tapapecho vacuno) no está en ningún Carrusel de productos del Home (sí aparece en My Usuals, que es otro componente). Acción: incluir el SKU en un Carrusel de productos o declarar un SKU sin stock que esté en uno.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App con el componente \"Carrusel de productos\" configurado en cualquier presentación\n- El carrusel incluye 000000000000029403-KG, sin stock",
   "spec": "(sin spec: el caso quedó bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com / Avatar1234..\n2. El sistema carga la Home de la App.\n3. El usuario ubica 000000000000029403-KG en el carrusel.",
   "test_data": "- {APP_BUILD} = v1.0.1\n- {SKU_SIN_STOCK} = 000000000000029403-KG\n- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com / Avatar1234."
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local)",
   "executed_at": "2026-11-11",
   "expected": "El carrusel no muestra productos (shelves en blanco), el título, el texto y el banner se ven con normalidad y la App no se cierra ni se bloquea.",
   "form_factor": "app",
   "id": "TC-B2C75-APP-013",
   "name": "Verificar que con la categoría de Colección no disponible el carrusel queda sin productos y el resto del layout se ve normal [App] [Logueado]",
   "observation": "Causa: el carrusel configurado con {CATEGORY_N1_WO_PRODS} (Bebés y Niños: «Frescura y calidad», colección bebes-y-ninos) sí muestra productos, así que la categoría está disponible y no se cumple la precondición. Acción: declarar una categoría realmente no disponible y configurarla en un carrusel.",
   "observed": "Causa: el carrusel configurado con Bebés y Niños (Bebés y Niños: «Frescura y calidad», colección bebes-y-ninos) sí muestra productos, así que la categoría está disponible y no se cumple la precondición. Acción: declarar una categoría realmente no disponible y configurarla en un carrusel.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App con el componente \"Carrusel de productos\" configurado en modo Colección con la categoría Bebés y Niños no disponible",
   "spec": "(sin spec: el caso quedó bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com / Avatar1234..\n2. El sistema carga la Home de la App.\n3. El usuario se desplaza hasta el carrusel configurado con Bebés y Niños.",
   "test_data": "- {APP_BUILD} = v1.0.1\n- {CATEGORY_N1_WO_PRODS} = Bebés y Niños\n- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com / Avatar1234."
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local)",
   "executed_at": "2026-11-11",
   "expected": "El elemento afectado muestra el estado de imagen no disponible, el resto del componente se ve con normalidad y la App no se cierra ni se bloquea.",
   "form_factor": "app",
   "id": "TC-B2C75-APP-014",
   "name": "Verificar que una imagen que no carga muestra el estado \"imagen no disponible\" [App] [Logueado]",
   "observation": "Causa: ningún carrusel del Home tiene un banner o producto con imagen inválida. Acción: configurar en DEV un carrusel con una imagen inválida y declararlo en la fila.",
   "observed": "Causa: ningún carrusel del Home tiene un banner o producto con imagen inválida. Acción: configurar en DEV un carrusel con una imagen inválida y declararlo en la fila.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App con el componente \"Carrusel de productos\" configurado en cualquier presentación, con un banner o producto con imagen inválida",
   "spec": "(sin spec: el caso quedó bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com / Avatar1234..\n2. El sistema carga la Home de la App.\n3. El usuario se desplaza hasta el componente con la imagen inválida.",
   "test_data": "- {APP_BUILD} = v1.0.1\n- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com / Avatar1234."
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local)",
   "duration_s": 132,
   "executed_at": "2026-11-11",
   "expected": "El fondo del componente llega de borde a borde de la pantalla y el contenido interior queda alineado con el padding lateral del header.",
   "form_factor": "app",
   "id": "TC-B2C75-APP-015",
   "name": "Verificar que el fondo del componente ocupa todo el ancho y el contenido respeta el padding del header [App] [Logueado]",
   "observation": "El fondo configurado es blanco, igual que la página, así que «borde a borde» se verifica por el color en los bordes. La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 instalada en el emulador. iOS queda Pendiente.",
   "observed": "En «Frescura y calidad» el fondo (#FFFFFF configurado) llega a ambos bordes de la pantalla y el título, el banner y el carrusel arrancan en x=44, el mismo padding del header (44 px a cada lado).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App con el componente \"Carrusel de productos\" configurado en cualquier presentación",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home de la app",
     "file": "TC-B2C75-APP-015-android-p02-home-de-la-app.png"
    },
    {
     "caption": "Android · Paso 3 — bordes del componente t1",
     "file": "TC-B2C75-APP-015-android-p03-bordes-del-componente-t1.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C75-APP-015-android.png"
    }
   ],
   "spec": "tests-app/B2C-75.spec.ts:291",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com / Avatar1234..\n2. El sistema carga la Home de la App.\n3. El usuario se desplaza hasta el componente y observa sus bordes laterales.",
   "test_data": "- {APP_BUILD} = v1.0.1\n- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com / Avatar1234."
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local)",
   "executed_at": "2026-11-11",
   "expected": "El carrusel muestra como máximo {MAX_PRODUCTOS_CARRUSEL} productos.",
   "form_factor": "app",
   "id": "TC-B2C75-APP-016",
   "name": "Verificar que en modo Colección el carrusel no muestra más productos que el máximo configurado [App] [Logueado]",
   "observation": "Causa: {MAX_PRODUCTOS_CARRUSEL} no tiene fila en el Excel de data. Acción: cargar el máximo configurado (en Page Designer «Los más vendidos» tiene 12 y los T1, 8).",
   "observed": "Causa: {MAX_PRODUCTOS_CARRUSEL} no tiene fila en el Excel de data. Acción: cargar el máximo configurado (en Page Designer «Los más vendidos» tiene 12 y los T1, 8).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App con el componente \"Carrusel de productos\" configurado en modo Colección con Máximo de productos = {MAX_PRODUCTOS_CARRUSEL}\n- La categoría https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes tiene más productos que {MAX_PRODUCTOS_CARRUSEL}",
   "spec": "(sin spec: el caso quedó bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com / Avatar1234..\n2. El sistema carga la Home de la App.\n3. El usuario desliza el carrusel hasta el final y cuenta los productos.",
   "test_data": "- {APP_BUILD} = v1.0.1\n- {CATEGORY_N1_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes\n- {MAX_PRODUCTOS_CARRUSEL} = TBD en el Excel de data\n- {USER_AUTH_001} = vhchirinos+comprador@avatar-global.com / Avatar1234."
  }
 ]
}
-->
