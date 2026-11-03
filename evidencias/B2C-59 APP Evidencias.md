# B2C-59 (app Android) - Shelf y galería de producto - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-59 APP |
| Última actualización | 2026-11-03 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Dispositivo Android | dispositivo por ADB |
| Origen de los TC | Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-59 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 13 |
| Rechazado | 4 |
| Bloqueado Data | 3 |
| **Total** | **20** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-03 | 4 | TC-B2C59-APP-001, TC-B2C59-APP-004, TC-B2C59-APP-007, TC-B2C59-APP-008 |
| 2026-10-22 | 20 | TC-B2C59-APP-001, TC-B2C59-APP-002, TC-B2C59-APP-003, TC-B2C59-APP-004, TC-B2C59-APP-005, TC-B2C59-APP-006, TC-B2C59-APP-007, TC-B2C59-APP-008, TC-B2C59-APP-009, TC-B2C59-APP-010, TC-B2C59-APP-011, TC-B2C59-APP-012, TC-B2C59-APP-013, TC-B2C59-APP-014, TC-B2C59-APP-015, TC-B2C59-APP-016, TC-B2C59-APP-017, TC-B2C59-APP-018, TC-B2C59-APP-019, TC-B2C59-APP-020 |

## Detalle por caso de prueba

### TC-B2C59-APP-001 - Verificar que el shelf muestra sus slots en el orden definido [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-59.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Resultados de búsqueda
- {SKU_SHELF_COMPLETO} tiene cucarda, promo combinable, formato, isSponsored = true y stock

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_SHELF_COMPLETO} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_SHELF_COMPLETO} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_SHELF_COMPLETO}.

**Resultado esperado**

El shelf muestra en orden: cucarda (arriba a la izquierda de la imagen), galería, Favoritos (arriba a la derecha), precios, marca + nombre, label de formato y "Patrocinado", "Combina la promo" y "Agregar".

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): la precondición pide {SKU_SHELF_COMPLETO} con isSponsored = true; en el shelf de 000000000000666200-UN se ven precio, marca+nombre, formato y favoritos pero no aparece «Patrocinado» y el atributo isSponsored no se puede verificar desde el app. Falta confirmar/cargar el SKU patrocinado (lo hace el equipo de data).

**Evidencia**

![Android · Paso 1 — shelf completo](<B2C-59 APP Evidencias/TC-B2C59-APP-001-android-p01-shelf-completo.png>)

---

### TC-B2C59-APP-002 - Verificar que un producto con label muestra una sola cucarda arriba a la izquierda [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-59.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Resultados de búsqueda
- {SKU_CUCARDA} tiene el atributo label configurado

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_CUCARDA} = 000000000000662457-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_CUCARDA} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_CUCARDA}.

**Resultado esperado**

Se muestra una única cucarda en la esquina superior izquierda de la imagen.

**Resultado obtenido**

El shelf de {SKU_CUCARDA} muestra una única cucarda («Cyber») en la esquina superior izquierda de la imagen.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-59 APP Evidencias/TC-B2C59-APP-002-android-p01-app-abierta-en-el-home.png>)

![Paso 3 — resultados con el shelf del producto](<B2C-59 APP Evidencias/TC-B2C59-APP-002-android-p03-resultados-con-el-shelf-del-producto.png>)

![Estado final](<B2C-59 APP Evidencias/TC-B2C59-APP-002-android.png>)

---

### TC-B2C59-APP-003 - Verificar que un producto sin label no muestra cucarda [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-59.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Resultados de búsqueda
- {SKU_VALID_001} tiene label = null

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_VALID_001} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_VALID_001}.

**Resultado esperado**

No se muestra ninguna etiqueta en la esquina superior izquierda de la imagen.

**Resultado obtenido**

El shelf de {SKU_VALID_001} no muestra ninguna cucarda en la esquina superior izquierda de la imagen.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-59 APP Evidencias/TC-B2C59-APP-003-android-p01-app-abierta-en-el-home.png>)

![Paso 3 — resultados con el shelf del producto](<B2C-59 APP Evidencias/TC-B2C59-APP-003-android-p03-resultados-con-el-shelf-del-producto.png>)

![Estado final](<B2C-59 APP Evidencias/TC-B2C59-APP-003-android.png>)

---

### TC-B2C59-APP-004 - Verificar que un producto patrocinado muestra "Patrocinado" bajo el nombre [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-59.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Resultados de búsqueda
- {SKU_PATROCINADO} tiene isSponsored = true

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_PATROCINADO} = 000000000000642688-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_PATROCINADO} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_PATROCINADO}.

**Resultado esperado**

Debajo del nombre del producto se muestra el texto "Patrocinado".

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): la precondición pide {SKU_PATROCINADO} con isSponsored = true; en el shelf de 000000000000642688-UN (Galleta Oreo) no aparece «Patrocinado» y el atributo isSponsored no se puede verificar desde el app. Falta confirmar/cargar el SKU patrocinado (lo hace el equipo de data).

**Evidencia**

![Android · Paso 1 — shelf patrocinado](<B2C-59 APP Evidencias/TC-B2C59-APP-004-android-p01-shelf-patrocinado.png>)

---

### TC-B2C59-APP-005 - Verificar que un producto no patrocinado no muestra "Patrocinado" [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-59.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Resultados de búsqueda
- {SKU_VALID_001} tiene isSponsored = false

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_VALID_001} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_VALID_001}.

**Resultado esperado**

El shelf no muestra el texto "Patrocinado".

**Resultado obtenido**

El shelf de {SKU_VALID_001} no muestra el texto «Patrocinado».

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-59 APP Evidencias/TC-B2C59-APP-005-android-p01-app-abierta-en-el-home.png>)

![Paso 3 — resultados con el shelf del producto](<B2C-59 APP Evidencias/TC-B2C59-APP-005-android-p03-resultados-con-el-shelf-del-producto.png>)

![Estado final](<B2C-59 APP Evidencias/TC-B2C59-APP-005-android.png>)

---

### TC-B2C59-APP-006 - Verificar que tocar la imagen o el nombre del shelf abre la PDP del producto [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-59.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PLP

**Data utilizada**

- {APP_BUILD} = TBD
- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.
2. El sistema carga la PLP.
3. El usuario toca la imagen de un producto.
4. El sistema abre la PDP del producto.
5. El usuario vuelve a la PLP y toca el nombre del mismo producto.
6. El sistema abre la misma PDP.

**Resultado esperado**

Tanto la imagen como el nombre abren la PDP del producto y al volver se regresa a la PLP de origen.

**Resultado obtenido**

Tocar la imagen y tocar el nombre de un producto de la PLP abren su PDP, y al volver se regresa a la PLP de origen.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-59 APP Evidencias/TC-B2C59-APP-006-android-p01-app-abierta-en-el-home.png>)

![Paso 2 — plp con su listado](<B2C-59 APP Evidencias/TC-B2C59-APP-006-android-p02-plp-con-su-listado.png>)

![Paso 4 — tras tocar la imagen](<B2C-59 APP Evidencias/TC-B2C59-APP-006-android-p04-tras-tocar-la-imagen.png>)

![Paso 6 — tras tocar el nombre](<B2C-59 APP Evidencias/TC-B2C59-APP-006-android-p06-tras-tocar-el-nombre.png>)

![Estado final](<B2C-59 APP Evidencias/TC-B2C59-APP-006-android.png>)

---

### TC-B2C59-APP-007 - Verificar que un producto con varias imágenes permite deslizarlas una a una [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-59.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Resultados de búsqueda
- {SKU_MULTI_IMAGEN} tiene entre 2 y 5 imágenes

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_MULTI_IMAGEN} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_MULTI_IMAGEN} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_MULTI_IMAGEN}.
4. El usuario desliza horizontalmente la imagen del shelf.
5. El sistema muestra la siguiente imagen.

**Resultado esperado**

La galería muestra una imagen a la vez, se desliza horizontalmente y no muestra flechas ni dots.

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Galería: antes «Imagen 1 de 3», tras deslizar «Imagen 2 de 3». Controles de flechas/dots expuestos: ninguno. La ausencia visual de flechas y dots se confirma en la captura.

**Evidencia**

![Android · Paso 1 — galeria imagen 1](<B2C-59 APP Evidencias/TC-B2C59-APP-007-android-p01-galeria-imagen-1.png>)

![Android · Paso 2 — galeria imagen 2](<B2C-59 APP Evidencias/TC-B2C59-APP-007-android-p02-galeria-imagen-2.png>)

---

### TC-B2C59-APP-008 - Verificar que un producto con una sola imagen no se desliza ni muestra controles [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-59.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Resultados de búsqueda
- {SKU_UNA_IMAGEN} tiene una sola imagen

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_UNA_IMAGEN} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_UNA_IMAGEN} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_UNA_IMAGEN}.
4. El usuario intenta deslizar horizontalmente la imagen del shelf.
5. El sistema mantiene la misma imagen.

**Resultado esperado**

La imagen no se desplaza y no se muestran controles ni dots.

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Galería con una sola imagen: «Imagen 1 de 1»; tras deslizar sigue «Imagen 1 de 1». La ausencia de controles y dots se confirma en la captura.

**Evidencia**

![Android · Paso 1 — galeria una imagen](<B2C-59 APP Evidencias/TC-B2C59-APP-008-android-p01-galeria-una-imagen.png>)

---

### TC-B2C59-APP-009 - Verificar que un producto pesable muestra el label de formato bajo el nombre [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-59.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Resultados de búsqueda

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_PESABLE} = 000000000000037972-KG

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_PESABLE} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_PESABLE}.

**Resultado esperado**

Debajo del nombre se muestra el label de formato con la cantidad de medida (ej. "500gr.").

**Resultado obtenido**

El shelf del pesable muestra el label de formato «500 g» bajo el nombre.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-59 APP Evidencias/TC-B2C59-APP-009-android-p01-app-abierta-en-el-home.png>)

![Paso 3 — resultados con el shelf del producto](<B2C-59 APP Evidencias/TC-B2C59-APP-009-android-p03-resultados-con-el-shelf-del-producto.png>)

![Estado final](<B2C-59 APP Evidencias/TC-B2C59-APP-009-android.png>)

---

### TC-B2C59-APP-010 - Verificar que una promo que combina productos distintos muestra "Combina la promo" y abre su modal [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-59.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Resultados de búsqueda
- {SKU_COMBINA_PROMO} tiene una promo NxM o NxPrecio vigente que combina productos distintos (SKUs diferentes)

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_COMBINA_PROMO} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_COMBINA_PROMO} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_COMBINA_PROMO}.
4. El usuario toca "Combina la promo >".
5. El sistema abre el modal de Combina la promo.

**Resultado esperado**

Se muestra "Combina la promo >" antes de "Agregar" y al tocarlo se abre el modal definido en B2C-74.

**Resultado obtenido**

El shelf muestra «Combina la promo» antes de «Agregar» y, al tocarlo, se abre el modal de la promo con su botón de cierre.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-59 APP Evidencias/TC-B2C59-APP-010-android-p01-app-abierta-en-el-home.png>)

![Paso 3 — resultados con el shelf del producto](<B2C-59 APP Evidencias/TC-B2C59-APP-010-android-p03-resultados-con-el-shelf-del-producto.png>)

![Paso 5 — tras tocar combina la promo](<B2C-59 APP Evidencias/TC-B2C59-APP-010-android-p05-tras-tocar-combina-la-promo.png>)

![Estado final](<B2C-59 APP Evidencias/TC-B2C59-APP-010-android.png>)

---

### TC-B2C59-APP-011 - Verificar que un producto sin promo vigente no muestra "Combina la promo" [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-59.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Resultados de búsqueda
- {SKU_SIN_PROMO} no tiene ninguna promoción vigente

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_SIN_PROMO} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_SIN_PROMO} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_SIN_PROMO}.

**Resultado esperado**

No se muestra "Combina la promo" y el shelf no deja espacio vacío en su lugar.

**Resultado obtenido**

El shelf de {SKU_SIN_PROMO} no muestra «Combina la promo», pero deja un espacio libre entre el nombre y «Agregar».

**Observación**

Esperado: no se muestra «Combina la promo» y el shelf no deja espacio vacío en su lugar. Obtenido: no se muestra «Combina la promo», pero el shelf de {SKU_SIN_PROMO} (000000000000652899-UN) deja 162 px libres entre el nombre y «Agregar», que queda a la misma altura que en un shelf con «Combina la promo». B2C-59.spec.ts:214. A confirmar con Diseño si el espacio reservado es el comportamiento esperado. Bug: no creado — pendiente de que Diseño confirme si el espacio reservado es el comportamiento esperado.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-59 APP Evidencias/TC-B2C59-APP-011-android-p01-app-abierta-en-el-home.png>)

![Paso 3 — resultados con el shelf del producto](<B2C-59 APP Evidencias/TC-B2C59-APP-011-android-p03-resultados-con-el-shelf-del-producto.png>)

![Estado final](<B2C-59 APP Evidencias/TC-B2C59-APP-011-android.png>)

---

### TC-B2C59-APP-012 - Verificar que un producto sin imagen válida muestra la imagen por defecto de Unimarc [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-59.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Resultados de búsqueda
- {SKU_SIN_IMAGEN} no tiene imagen o su URL de imagen retorna error

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_SIN_IMAGEN} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_SIN_IMAGEN} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_SIN_IMAGEN}.

**Resultado esperado**

El shelf muestra la imagen por defecto de Unimarc y precio, nombre y "Agregar" se muestran con normalidad.

**Resultado obtenido**

La zona de la imagen del shelf de {SKU_SIN_IMAGEN} queda en blanco; precio, nombre y «Agregar» sí se muestran.

**Observación**

Esperado: el shelf muestra la imagen por defecto de Unimarc. Obtenido: la zona de la imagen del shelf de {SKU_SIN_IMAGEN} (000000000000029400-KG, Posta paleta de vacuno) queda en blanco (100 % de píxeles blancos), sin imagen por defecto. B2C-59.spec.ts:227. Bug: B2C-1300.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-59 APP Evidencias/TC-B2C59-APP-012-android-p01-app-abierta-en-el-home.png>)

![Paso 3 — resultados con el shelf del producto](<B2C-59 APP Evidencias/TC-B2C59-APP-012-android-p03-resultados-con-el-shelf-del-producto.png>)

![Paso 5 — zona de la imagen del shelf](<B2C-59 APP Evidencias/TC-B2C59-APP-012-android-p05-zona-de-la-imagen-del-shelf.png>)

![Estado final](<B2C-59 APP Evidencias/TC-B2C59-APP-012-android.png>)

---

### TC-B2C59-APP-013 - Verificar que un producto sin stock muestra "Pronto disponible" y "Ver similares" [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-59.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Resultados de búsqueda
- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)
- {SKU_SIN_STOCK} no tiene stock para el método de entrega activo

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_SIN_STOCK} = 000000000000029403-KG

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_SIN_STOCK} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_SIN_STOCK}.

**Resultado esperado**

Bajo el precio se muestra "Pronto disponible", no se muestra "Agregar" ni "Combina la promo" y se muestra "Ver similares".

**Resultado obtenido**

El shelf sin stock muestra «Pronto disponible» bajo el precio y «Ver similares»; no muestra «Agregar» ni «Combina la promo».

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-59 APP Evidencias/TC-B2C59-APP-013-android-p01-app-abierta-en-el-home.png>)

![Paso 3 — resultados con el shelf del producto](<B2C-59 APP Evidencias/TC-B2C59-APP-013-android-p03-resultados-con-el-shelf-del-producto.png>)

![Estado final](<B2C-59 APP Evidencias/TC-B2C59-APP-013-android.png>)

---

### TC-B2C59-APP-014 - Verificar que "Ver similares" abre el modal de productos similares [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-59.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Resultados de búsqueda
- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)
- {SKU_SIN_STOCK} no tiene stock para el método de entrega activo

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_SIN_STOCK} = 000000000000029403-KG

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_SIN_STOCK} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_SIN_STOCK}.
4. El usuario toca "Ver similares".
5. El sistema abre el modal de productos similares.

**Resultado esperado**

Se abre el modal de productos similares definido en B2C-40.

**Resultado obtenido**

«Ver similares» abre la PDP del producto (Tapapecho vacuno al vacío 2.2 Kg, «Pronto disponible») y no un modal de productos similares.

**Observación**

Esperado: se abre el modal de productos similares (B2C-40). Obtenido: tocar «Ver similares» abre la PDP del producto; no hay modal ni lista de similares tras 7 s de espera. B2C-59.spec.ts:250. Bug: B2C-1301.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-59 APP Evidencias/TC-B2C59-APP-014-android-p01-app-abierta-en-el-home.png>)

![Paso 3 — resultados con el shelf del producto](<B2C-59 APP Evidencias/TC-B2C59-APP-014-android-p03-resultados-con-el-shelf-del-producto.png>)

![Paso 5 — tras tocar ver similares](<B2C-59 APP Evidencias/TC-B2C59-APP-014-android-p05-tras-tocar-ver-similares.png>)

![Estado final](<B2C-59 APP Evidencias/TC-B2C59-APP-014-android.png>)

---

### TC-B2C59-APP-015 - Verificar que "Marca | Descripción" larga se trunca a 40 caracteres con "…" [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-59.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Resultados de búsqueda
- "Marca | Descripción" de {SKU_NOMBRE_LARGO} supera 40 caracteres

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_NOMBRE_LARGO} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_NOMBRE_LARGO} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_NOMBRE_LARGO}.

**Resultado esperado**

El texto "Marca | Descripción" muestra como máximo 40 caracteres seguidos de "…", con la marca en negrita.

**Resultado obtenido**

El shelf de {SKU_NOMBRE_LARGO} muestra «Fundo Rio Alegre | Carne molida 4% grasa tártaro Fund…», unos 53 caracteres visibles.

**Observación**

Esperado: «Marca | Descripción» con un máximo de 40 caracteres seguidos de «…». Obtenido: el shelf muestra «Fundo Rio Alegre | Carne molida 4% grasa tártaro Fund…» (unos 53 caracteres visibles); la app publica el texto completo de 71 caracteres y lo corta por líneas, no a 40. B2C-59.spec.ts:265. Bug: B2C-1302.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-59 APP Evidencias/TC-B2C59-APP-015-android-p01-app-abierta-en-el-home.png>)

![Paso 3 — resultados con el shelf del producto](<B2C-59 APP Evidencias/TC-B2C59-APP-015-android-p03-resultados-con-el-shelf-del-producto.png>)

![Estado final](<B2C-59 APP Evidencias/TC-B2C59-APP-015-android.png>)

---

### TC-B2C59-APP-016 - Verificar que "Marca | Descripción" de hasta 40 caracteres se muestra completa [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-59.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Resultados de búsqueda
- "Marca | Descripción" de {SKU_NOMBRE_CORTO} tiene 40 caracteres o menos

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_NOMBRE_CORTO} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_NOMBRE_CORTO} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_NOMBRE_CORTO}.

**Resultado esperado**

El texto "Marca | Descripción" se muestra completo, sin puntos suspensivos.

**Resultado obtenido**

El shelf de {SKU_NOMBRE_CORTO} muestra «Sofruco | Pera bolsa 1 Kg» completo, sin puntos suspensivos.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-59 APP Evidencias/TC-B2C59-APP-016-android-p01-app-abierta-en-el-home.png>)

![Paso 3 — resultados con el shelf del producto](<B2C-59 APP Evidencias/TC-B2C59-APP-016-android-p03-resultados-con-el-shelf-del-producto.png>)

![Estado final](<B2C-59 APP Evidencias/TC-B2C59-APP-016-android.png>)

---

### TC-B2C59-APP-017 - Verificar que "Agregar" del shelf suma el producto al carro [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-59.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Resultados de búsqueda
- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_VALID_001} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_VALID_001}.
4. El usuario toca "Agregar".
5. El sistema agrega el producto y muestra el contador en el shelf.

**Resultado esperado**

El producto se agrega al carro y el shelf muestra el contador con 1 unidad.

**Resultado obtenido**

Con el carro vacío, «Agregar» suma {SKU_VALID_001} al carro y el carro flotante muestra «1 unidades».

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-59 APP Evidencias/TC-B2C59-APP-017-android-p01-app-abierta-en-el-home.png>)

![Paso 3 — resultados con el shelf del producto](<B2C-59 APP Evidencias/TC-B2C59-APP-017-android-p03-resultados-con-el-shelf-del-producto.png>)

![Paso 5 — tras tocar agregar](<B2C-59 APP Evidencias/TC-B2C59-APP-017-android-p05-tras-tocar-agregar.png>)

![Estado final](<B2C-59 APP Evidencias/TC-B2C59-APP-017-android.png>)

---

### TC-B2C59-APP-018 - Verificar que el botón Favoritos del shelf marca el producto como favorito [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-59.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Resultados de búsqueda
- Sesión iniciada con la cuenta {USER_AUTH_001}
- {SKU_VALID_001} no está en favoritos

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_VALID_001} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_VALID_001}.
4. El usuario toca el botón Favoritos del shelf.
5. El sistema marca el producto como favorito.

**Resultado esperado**

El ícono de Favoritos queda activo y el producto aparece en la lista de favoritos.

**Resultado obtenido**

La pantalla de inicio de sesión de la app pide RUT y contraseña.

**Observación**

Causa: la app inicia sesión con RUT y contraseña; {USER_AUTH_001} es un correo con contraseña y no hay un RUT de cuenta de prueba en el Excel de data. Acción: declarar el RUT y la contraseña de una cuenta de prueba. Verificado el 2026-10-22.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-59 APP Evidencias/TC-B2C59-APP-018-android-p01-app-abierta-en-el-home.png>)

![Paso 3 — pantalla de inicio de sesion de la app](<B2C-59 APP Evidencias/TC-B2C59-APP-018-android-p03-pantalla-de-inicio-de-sesion-de-la-app.png>)

![Estado final](<B2C-59 APP Evidencias/TC-B2C59-APP-018-android.png>)

---

### TC-B2C59-APP-019 - Verificar que un producto con "Completa la promo" no muestra "Combina la promo" [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-59.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Resultados de búsqueda
- {SKU_COMPLETA_PROMO_2X1} tiene una promo "Completa la promo" vigente

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_COMPLETA_PROMO_2X1} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_COMPLETA_PROMO_2X1} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_COMPLETA_PROMO_2X1}.

**Resultado esperado**

El shelf no muestra el botón "Combina la promo".

**Resultado obtenido**

El shelf de {SKU_COMPLETA_PROMO_2X1} no muestra «Combina la promo».

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-59 APP Evidencias/TC-B2C59-APP-019-android-p01-app-abierta-en-el-home.png>)

![Paso 3 — resultados con el shelf del producto](<B2C-59 APP Evidencias/TC-B2C59-APP-019-android-p03-resultados-con-el-shelf-del-producto.png>)

![Estado final](<B2C-59 APP Evidencias/TC-B2C59-APP-019-android.png>)

---

### TC-B2C59-APP-020 - Verificar que la sección de precios del shelf sigue las reglas de B2C-62 [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-59.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Resultados de búsqueda
- {SKU_PROM_NxPRECIO} tiene una promo NxPrecio vigente

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_PROM_NxPRECIO} = 000000000000666200-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_PROM_NxPRECIO} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_PROM_NxPRECIO}.

**Resultado esperado**

La sección de precios muestra la mecánica NxPrecio, el precio unitario y los PPUM según B2C-62, sin superar 3 precios.

**Resultado obtenido**

El shelf muestra «2 por $12.490», «$7.690 c/u» y los PPUM del total y del unitario, con 3 precios como máximo.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-59 APP Evidencias/TC-B2C59-APP-020-android-p01-app-abierta-en-el-home.png>)

![Paso 3 — resultados con el shelf del producto](<B2C-59 APP Evidencias/TC-B2C59-APP-020-android-p03-resultados-con-el-shelf-del-producto.png>)

![Estado final](<B2C-59 APP Evidencias/TC-B2C59-APP-020-android.png>)

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "devices": {
   "android": "dispositivo por ADB"
  },
  "environment": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-59 APP",
  "tc_file": "Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-59 APP Test Cases.xlsx",
  "title": "B2C-59 (app Android) - Shelf y galería de producto - Evidencias QA",
  "updated_at": "2026-11-03"
 },
 "history": {
  "2026-10-22": [
   "TC-B2C59-APP-001",
   "TC-B2C59-APP-002",
   "TC-B2C59-APP-003",
   "TC-B2C59-APP-004",
   "TC-B2C59-APP-005",
   "TC-B2C59-APP-006",
   "TC-B2C59-APP-007",
   "TC-B2C59-APP-008",
   "TC-B2C59-APP-009",
   "TC-B2C59-APP-010",
   "TC-B2C59-APP-011",
   "TC-B2C59-APP-012",
   "TC-B2C59-APP-013",
   "TC-B2C59-APP-014",
   "TC-B2C59-APP-015",
   "TC-B2C59-APP-016",
   "TC-B2C59-APP-017",
   "TC-B2C59-APP-018",
   "TC-B2C59-APP-019",
   "TC-B2C59-APP-020"
  ],
  "2026-11-03": [
   "TC-B2C59-APP-001",
   "TC-B2C59-APP-004",
   "TC-B2C59-APP-007",
   "TC-B2C59-APP-008"
  ]
 },
 "results": [
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "El shelf muestra en orden: cucarda (arriba a la izquierda de la imagen), galería, Favoritos (arriba a la derecha), precios, marca + nombre, label de formato y \"Patrocinado\", \"Combina la promo\" y \"Agregar\".",
   "form_factor": "app",
   "id": "TC-B2C59-APP-001",
   "name": "Verificar que el shelf muestra sus slots en el orden definido [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): la precondición pide {SKU_SHELF_COMPLETO} con isSponsored = true; en el shelf de 000000000000666200-UN se ven precio, marca+nombre, formato y favoritos pero no aparece «Patrocinado» y el atributo isSponsored no se puede verificar desde el app. Falta confirmar/cargar el SKU patrocinado (lo hace el equipo de data).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- {SKU_SHELF_COMPLETO} tiene cucarda, promo combinable, formato, isSponsored = true y stock",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — shelf completo",
     "file": "TC-B2C59-APP-001-android-p01-shelf-completo.png"
    }
   ],
   "spec": "tests-app/B2C-59.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_SHELF_COMPLETO} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_SHELF_COMPLETO}.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_SHELF_COMPLETO} = TBD"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "Se muestra una única cucarda en la esquina superior izquierda de la imagen.",
   "form_factor": "app",
   "id": "TC-B2C59-APP-002",
   "name": "Verificar que un producto con label muestra una sola cucarda arriba a la izquierda [App] [Guest]",
   "observed": "El shelf de {SKU_CUCARDA} muestra una única cucarda («Cyber») en la esquina superior izquierda de la imagen.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- {SKU_CUCARDA} tiene el atributo label configurado",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C59-APP-002-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 3 — resultados con el shelf del producto",
     "file": "TC-B2C59-APP-002-android-p03-resultados-con-el-shelf-del-producto.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C59-APP-002-android.png"
    }
   ],
   "spec": "tests-app/B2C-59.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_CUCARDA} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_CUCARDA}.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_CUCARDA} = 000000000000662457-UN"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "No se muestra ninguna etiqueta en la esquina superior izquierda de la imagen.",
   "form_factor": "app",
   "id": "TC-B2C59-APP-003",
   "name": "Verificar que un producto sin label no muestra cucarda [App] [Guest]",
   "observed": "El shelf de {SKU_VALID_001} no muestra ninguna cucarda en la esquina superior izquierda de la imagen.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- {SKU_VALID_001} tiene label = null",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C59-APP-003-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 3 — resultados con el shelf del producto",
     "file": "TC-B2C59-APP-003-android-p03-resultados-con-el-shelf-del-producto.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C59-APP-003-android.png"
    }
   ],
   "spec": "tests-app/B2C-59.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_VALID_001} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_VALID_001}.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Debajo del nombre del producto se muestra el texto \"Patrocinado\".",
   "form_factor": "app",
   "id": "TC-B2C59-APP-004",
   "name": "Verificar que un producto patrocinado muestra \"Patrocinado\" bajo el nombre [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): la precondición pide {SKU_PATROCINADO} con isSponsored = true; en el shelf de 000000000000642688-UN (Galleta Oreo) no aparece «Patrocinado» y el atributo isSponsored no se puede verificar desde el app. Falta confirmar/cargar el SKU patrocinado (lo hace el equipo de data).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- {SKU_PATROCINADO} tiene isSponsored = true",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — shelf patrocinado",
     "file": "TC-B2C59-APP-004-android-p01-shelf-patrocinado.png"
    }
   ],
   "spec": "tests-app/B2C-59.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_PATROCINADO} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_PATROCINADO}.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_PATROCINADO} = 000000000000642688-UN"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "El shelf no muestra el texto \"Patrocinado\".",
   "form_factor": "app",
   "id": "TC-B2C59-APP-005",
   "name": "Verificar que un producto no patrocinado no muestra \"Patrocinado\" [App] [Guest]",
   "observed": "El shelf de {SKU_VALID_001} no muestra el texto «Patrocinado».",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- {SKU_VALID_001} tiene isSponsored = false",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C59-APP-005-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 3 — resultados con el shelf del producto",
     "file": "TC-B2C59-APP-005-android-p03-resultados-con-el-shelf-del-producto.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C59-APP-005-android.png"
    }
   ],
   "spec": "tests-app/B2C-59.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_VALID_001} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_VALID_001}.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "Tanto la imagen como el nombre abren la PDP del producto y al volver se regresa a la PLP de origen.",
   "form_factor": "app",
   "id": "TC-B2C59-APP-006",
   "name": "Verificar que tocar la imagen o el nombre del shelf abre la PDP del producto [App] [Guest]",
   "observed": "Tocar la imagen y tocar el nombre de un producto de la PLP abren su PDP, y al volver se regresa a la PLP de origen.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PLP",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C59-APP-006-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 2 — plp con su listado",
     "file": "TC-B2C59-APP-006-android-p02-plp-con-su-listado.png"
    },
    {
     "caption": "Paso 4 — tras tocar la imagen",
     "file": "TC-B2C59-APP-006-android-p04-tras-tocar-la-imagen.png"
    },
    {
     "caption": "Paso 6 — tras tocar el nombre",
     "file": "TC-B2C59-APP-006-android-p06-tras-tocar-el-nombre.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C59-APP-006-android.png"
    }
   ],
   "spec": "tests-app/B2C-59.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.\n2. El sistema carga la PLP.\n3. El usuario toca la imagen de un producto.\n4. El sistema abre la PDP del producto.\n5. El usuario vuelve a la PLP y toca el nombre del mismo producto.\n6. El sistema abre la misma PDP.",
   "test_data": "- {APP_BUILD} = TBD\n- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "La galería muestra una imagen a la vez, se desliza horizontalmente y no muestra flechas ni dots.",
   "form_factor": "app",
   "id": "TC-B2C59-APP-007",
   "name": "Verificar que un producto con varias imágenes permite deslizarlas una a una [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Galería: antes «Imagen 1 de 3», tras deslizar «Imagen 2 de 3». Controles de flechas/dots expuestos: ninguno. La ausencia visual de flechas y dots se confirma en la captura.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- {SKU_MULTI_IMAGEN} tiene entre 2 y 5 imágenes",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — galeria imagen 1",
     "file": "TC-B2C59-APP-007-android-p01-galeria-imagen-1.png"
    },
    {
     "caption": "Android · Paso 2 — galeria imagen 2",
     "file": "TC-B2C59-APP-007-android-p02-galeria-imagen-2.png"
    }
   ],
   "spec": "tests-app/B2C-59.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_MULTI_IMAGEN} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_MULTI_IMAGEN}.\n4. El usuario desliza horizontalmente la imagen del shelf.\n5. El sistema muestra la siguiente imagen.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_MULTI_IMAGEN} = TBD"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "La imagen no se desplaza y no se muestran controles ni dots.",
   "form_factor": "app",
   "id": "TC-B2C59-APP-008",
   "name": "Verificar que un producto con una sola imagen no se desliza ni muestra controles [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Galería con una sola imagen: «Imagen 1 de 1»; tras deslizar sigue «Imagen 1 de 1». La ausencia de controles y dots se confirma en la captura.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- {SKU_UNA_IMAGEN} tiene una sola imagen",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — galeria una imagen",
     "file": "TC-B2C59-APP-008-android-p01-galeria-una-imagen.png"
    }
   ],
   "spec": "tests-app/B2C-59.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_UNA_IMAGEN} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_UNA_IMAGEN}.\n4. El usuario intenta deslizar horizontalmente la imagen del shelf.\n5. El sistema mantiene la misma imagen.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_UNA_IMAGEN} = TBD"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "Debajo del nombre se muestra el label de formato con la cantidad de medida (ej. \"500gr.\").",
   "form_factor": "app",
   "id": "TC-B2C59-APP-009",
   "name": "Verificar que un producto pesable muestra el label de formato bajo el nombre [App] [Guest]",
   "observed": "El shelf del pesable muestra el label de formato «500 g» bajo el nombre.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C59-APP-009-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 3 — resultados con el shelf del producto",
     "file": "TC-B2C59-APP-009-android-p03-resultados-con-el-shelf-del-producto.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C59-APP-009-android.png"
    }
   ],
   "spec": "tests-app/B2C-59.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_PESABLE} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_PESABLE}.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_PESABLE} = 000000000000037972-KG"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "Se muestra \"Combina la promo >\" antes de \"Agregar\" y al tocarlo se abre el modal definido en B2C-74.",
   "form_factor": "app",
   "id": "TC-B2C59-APP-010",
   "name": "Verificar que una promo que combina productos distintos muestra \"Combina la promo\" y abre su modal [App] [Guest]",
   "observed": "El shelf muestra «Combina la promo» antes de «Agregar» y, al tocarlo, se abre el modal de la promo con su botón de cierre.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- {SKU_COMBINA_PROMO} tiene una promo NxM o NxPrecio vigente que combina productos distintos (SKUs diferentes)",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C59-APP-010-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 3 — resultados con el shelf del producto",
     "file": "TC-B2C59-APP-010-android-p03-resultados-con-el-shelf-del-producto.png"
    },
    {
     "caption": "Paso 5 — tras tocar combina la promo",
     "file": "TC-B2C59-APP-010-android-p05-tras-tocar-combina-la-promo.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C59-APP-010-android.png"
    }
   ],
   "spec": "tests-app/B2C-59.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_COMBINA_PROMO} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_COMBINA_PROMO}.\n4. El usuario toca \"Combina la promo >\".\n5. El sistema abre el modal de Combina la promo.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_COMBINA_PROMO} = TBD"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "No se muestra \"Combina la promo\" y el shelf no deja espacio vacío en su lugar.",
   "form_factor": "app",
   "id": "TC-B2C59-APP-011",
   "name": "Verificar que un producto sin promo vigente no muestra \"Combina la promo\" [App] [Guest]",
   "observation": "Esperado: no se muestra «Combina la promo» y el shelf no deja espacio vacío en su lugar. Obtenido: no se muestra «Combina la promo», pero el shelf de {SKU_SIN_PROMO} (000000000000652899-UN) deja 162 px libres entre el nombre y «Agregar», que queda a la misma altura que en un shelf con «Combina la promo». B2C-59.spec.ts:214. A confirmar con Diseño si el espacio reservado es el comportamiento esperado. Bug: no creado — pendiente de que Diseño confirme si el espacio reservado es el comportamiento esperado.",
   "observed": "El shelf de {SKU_SIN_PROMO} no muestra «Combina la promo», pero deja un espacio libre entre el nombre y «Agregar».",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- {SKU_SIN_PROMO} no tiene ninguna promoción vigente",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C59-APP-011-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 3 — resultados con el shelf del producto",
     "file": "TC-B2C59-APP-011-android-p03-resultados-con-el-shelf-del-producto.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C59-APP-011-android.png"
    }
   ],
   "spec": "tests-app/B2C-59.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_SIN_PROMO} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_SIN_PROMO}.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_SIN_PROMO} = TBD"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "El shelf muestra la imagen por defecto de Unimarc y precio, nombre y \"Agregar\" se muestran con normalidad.",
   "form_factor": "app",
   "id": "TC-B2C59-APP-012",
   "name": "Verificar que un producto sin imagen válida muestra la imagen por defecto de Unimarc [App] [Guest]",
   "observation": "Esperado: el shelf muestra la imagen por defecto de Unimarc. Obtenido: la zona de la imagen del shelf de {SKU_SIN_IMAGEN} (000000000000029400-KG, Posta paleta de vacuno) queda en blanco (100 % de píxeles blancos), sin imagen por defecto. B2C-59.spec.ts:227. Bug: B2C-1300.",
   "observed": "La zona de la imagen del shelf de {SKU_SIN_IMAGEN} queda en blanco; precio, nombre y «Agregar» sí se muestran.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- {SKU_SIN_IMAGEN} no tiene imagen o su URL de imagen retorna error",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C59-APP-012-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 3 — resultados con el shelf del producto",
     "file": "TC-B2C59-APP-012-android-p03-resultados-con-el-shelf-del-producto.png"
    },
    {
     "caption": "Paso 5 — zona de la imagen del shelf",
     "file": "TC-B2C59-APP-012-android-p05-zona-de-la-imagen-del-shelf.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C59-APP-012-android.png"
    }
   ],
   "spec": "tests-app/B2C-59.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_SIN_IMAGEN} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_SIN_IMAGEN}.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_SIN_IMAGEN} = TBD"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "Bajo el precio se muestra \"Pronto disponible\", no se muestra \"Agregar\" ni \"Combina la promo\" y se muestra \"Ver similares\".",
   "form_factor": "app",
   "id": "TC-B2C59-APP-013",
   "name": "Verificar que un producto sin stock muestra \"Pronto disponible\" y \"Ver similares\" [App] [Guest]",
   "observed": "El shelf sin stock muestra «Pronto disponible» bajo el precio y «Ver similares»; no muestra «Agregar» ni «Combina la promo».",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)\n- {SKU_SIN_STOCK} no tiene stock para el método de entrega activo",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C59-APP-013-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 3 — resultados con el shelf del producto",
     "file": "TC-B2C59-APP-013-android-p03-resultados-con-el-shelf-del-producto.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C59-APP-013-android.png"
    }
   ],
   "spec": "tests-app/B2C-59.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_SIN_STOCK} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_SIN_STOCK}.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_SIN_STOCK} = 000000000000029403-KG"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "Se abre el modal de productos similares definido en B2C-40.",
   "form_factor": "app",
   "id": "TC-B2C59-APP-014",
   "name": "Verificar que \"Ver similares\" abre el modal de productos similares [App] [Guest]",
   "observation": "Esperado: se abre el modal de productos similares (B2C-40). Obtenido: tocar «Ver similares» abre la PDP del producto; no hay modal ni lista de similares tras 7 s de espera. B2C-59.spec.ts:250. Bug: B2C-1301.",
   "observed": "«Ver similares» abre la PDP del producto (Tapapecho vacuno al vacío 2.2 Kg, «Pronto disponible») y no un modal de productos similares.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)\n- {SKU_SIN_STOCK} no tiene stock para el método de entrega activo",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C59-APP-014-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 3 — resultados con el shelf del producto",
     "file": "TC-B2C59-APP-014-android-p03-resultados-con-el-shelf-del-producto.png"
    },
    {
     "caption": "Paso 5 — tras tocar ver similares",
     "file": "TC-B2C59-APP-014-android-p05-tras-tocar-ver-similares.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C59-APP-014-android.png"
    }
   ],
   "spec": "tests-app/B2C-59.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_SIN_STOCK} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_SIN_STOCK}.\n4. El usuario toca \"Ver similares\".\n5. El sistema abre el modal de productos similares.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_SIN_STOCK} = 000000000000029403-KG"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "El texto \"Marca | Descripción\" muestra como máximo 40 caracteres seguidos de \"…\", con la marca en negrita.",
   "form_factor": "app",
   "id": "TC-B2C59-APP-015",
   "name": "Verificar que \"Marca | Descripción\" larga se trunca a 40 caracteres con \"…\" [App] [Guest]",
   "observation": "Esperado: «Marca | Descripción» con un máximo de 40 caracteres seguidos de «…». Obtenido: el shelf muestra «Fundo Rio Alegre | Carne molida 4% grasa tártaro Fund…» (unos 53 caracteres visibles); la app publica el texto completo de 71 caracteres y lo corta por líneas, no a 40. B2C-59.spec.ts:265. Bug: B2C-1302.",
   "observed": "El shelf de {SKU_NOMBRE_LARGO} muestra «Fundo Rio Alegre | Carne molida 4% grasa tártaro Fund…», unos 53 caracteres visibles.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- \"Marca | Descripción\" de {SKU_NOMBRE_LARGO} supera 40 caracteres",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C59-APP-015-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 3 — resultados con el shelf del producto",
     "file": "TC-B2C59-APP-015-android-p03-resultados-con-el-shelf-del-producto.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C59-APP-015-android.png"
    }
   ],
   "spec": "tests-app/B2C-59.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_NOMBRE_LARGO} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_NOMBRE_LARGO}.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_NOMBRE_LARGO} = TBD"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "El texto \"Marca | Descripción\" se muestra completo, sin puntos suspensivos.",
   "form_factor": "app",
   "id": "TC-B2C59-APP-016",
   "name": "Verificar que \"Marca | Descripción\" de hasta 40 caracteres se muestra completa [App] [Guest]",
   "observed": "El shelf de {SKU_NOMBRE_CORTO} muestra «Sofruco | Pera bolsa 1 Kg» completo, sin puntos suspensivos.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- \"Marca | Descripción\" de {SKU_NOMBRE_CORTO} tiene 40 caracteres o menos",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C59-APP-016-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 3 — resultados con el shelf del producto",
     "file": "TC-B2C59-APP-016-android-p03-resultados-con-el-shelf-del-producto.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C59-APP-016-android.png"
    }
   ],
   "spec": "tests-app/B2C-59.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_NOMBRE_CORTO} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_NOMBRE_CORTO}.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_NOMBRE_CORTO} = TBD"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "El producto se agrega al carro y el shelf muestra el contador con 1 unidad.",
   "form_factor": "app",
   "id": "TC-B2C59-APP-017",
   "name": "Verificar que \"Agregar\" del shelf suma el producto al carro [App] [Guest]",
   "observed": "Con el carro vacío, «Agregar» suma {SKU_VALID_001} al carro y el carro flotante muestra «1 unidades».",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C59-APP-017-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 3 — resultados con el shelf del producto",
     "file": "TC-B2C59-APP-017-android-p03-resultados-con-el-shelf-del-producto.png"
    },
    {
     "caption": "Paso 5 — tras tocar agregar",
     "file": "TC-B2C59-APP-017-android-p05-tras-tocar-agregar.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C59-APP-017-android.png"
    }
   ],
   "spec": "tests-app/B2C-59.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_VALID_001} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_VALID_001}.\n4. El usuario toca \"Agregar\".\n5. El sistema agrega el producto y muestra el contador en el shelf.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "El ícono de Favoritos queda activo y el producto aparece en la lista de favoritos.",
   "form_factor": "app",
   "id": "TC-B2C59-APP-018",
   "name": "Verificar que el botón Favoritos del shelf marca el producto como favorito [App] [Logueado]",
   "observation": "Causa: la app inicia sesión con RUT y contraseña; {USER_AUTH_001} es un correo con contraseña y no hay un RUT de cuenta de prueba en el Excel de data. Acción: declarar el RUT y la contraseña de una cuenta de prueba. Verificado el 2026-10-22.",
   "observed": "La pantalla de inicio de sesión de la app pide RUT y contraseña.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- {SKU_VALID_001} no está en favoritos",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C59-APP-018-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 3 — pantalla de inicio de sesion de la app",
     "file": "TC-B2C59-APP-018-android-p03-pantalla-de-inicio-de-sesion-de-la-app.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C59-APP-018-android.png"
    }
   ],
   "spec": "tests-app/B2C-59.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_VALID_001} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_VALID_001}.\n4. El usuario toca el botón Favoritos del shelf.\n5. El sistema marca el producto como favorito.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "El shelf no muestra el botón \"Combina la promo\".",
   "form_factor": "app",
   "id": "TC-B2C59-APP-019",
   "name": "Verificar que un producto con \"Completa la promo\" no muestra \"Combina la promo\" [App] [Guest]",
   "observed": "El shelf de {SKU_COMPLETA_PROMO_2X1} no muestra «Combina la promo».",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- {SKU_COMPLETA_PROMO_2X1} tiene una promo \"Completa la promo\" vigente",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C59-APP-019-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 3 — resultados con el shelf del producto",
     "file": "TC-B2C59-APP-019-android-p03-resultados-con-el-shelf-del-producto.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C59-APP-019-android.png"
    }
   ],
   "spec": "tests-app/B2C-59.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_COMPLETA_PROMO_2X1} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_COMPLETA_PROMO_2X1}.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_COMPLETA_PROMO_2X1} = TBD"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "La sección de precios muestra la mecánica NxPrecio, el precio unitario y los PPUM según B2C-62, sin superar 3 precios.",
   "form_factor": "app",
   "id": "TC-B2C59-APP-020",
   "name": "Verificar que la sección de precios del shelf sigue las reglas de B2C-62 [App] [Guest]",
   "observed": "El shelf muestra «2 por $12.490», «$7.690 c/u» y los PPUM del total y del unitario, con 3 precios como máximo.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- {SKU_PROM_NxPRECIO} tiene una promo NxPrecio vigente",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C59-APP-020-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 3 — resultados con el shelf del producto",
     "file": "TC-B2C59-APP-020-android-p03-resultados-con-el-shelf-del-producto.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C59-APP-020-android.png"
    }
   ],
   "spec": "tests-app/B2C-59.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_PROM_NxPRECIO} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_PROM_NxPRECIO}.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_PROM_NxPRECIO} = 000000000000666200-UN"
  }
 ]
}
-->
