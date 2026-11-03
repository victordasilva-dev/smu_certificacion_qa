# B2C-59 APP

| Campo | Valor |
|---|---|
| Suite | B2C-59 |
| Última actualización | 2026-10-27 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | App Unimarc v1.0.1 (DEV) |
| Navegador Desktop | chromium |
| Navegador Mobile | webkit |
| Dispositivo Android | Pixel 6 · Android 14 (emulador) |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-59 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 11 |
| Bloqueado Data | 6 |
| Rechazado | 6 |
| **Total** | **23** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-27 | 1 | TC-B2C59-APP-018 |
| 2026-10-26 | 15 | TC-B2C59-APP-002, TC-B2C59-APP-003, TC-B2C59-APP-005, TC-B2C59-APP-006, TC-B2C59-APP-009, TC-B2C59-APP-010, TC-B2C59-APP-011, TC-B2C59-APP-012, TC-B2C59-APP-013, TC-B2C59-APP-014, TC-B2C59-APP-015, TC-B2C59-APP-016, TC-B2C59-APP-017, TC-B2C59-APP-019, TC-B2C59-APP-020 |
| 2026-10-19 | 7 | TC-B2C59-D-001, TC-B2C59-D-007, TC-B2C59-D-020, TC-B2C59-M-001, TC-B2C59-M-007, TC-B2C59-M-020, TC-B2C59-M-022 |

## Detalle por caso de prueba

### TC-B2C59-D-001 - Verificar orden de slots en el shelf (Desktop)

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

### TC-B2C59-M-001 - Verificar orden de slots en el shelf (Mobile)

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

### TC-B2C59-D-020 - Estructura base del shelf con todos los slots opcionales ausentes (Desktop)

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

### TC-B2C59-M-020 - Estructura base del shelf con todos los slots opcionales ausentes (Mobile)

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

### TC-B2C59-M-022 - Sin truncamiento cuando el texto esta dentro del limite de 40 caracteres (Mobile)

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

### TC-B2C59-D-007 - Galeria: hover rota la imagen cuando N>1 (Desktop)

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

### TC-B2C59-M-007 - Galeria: scroll horizontal cuando N>1 (Mobile)

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

### TC-B2C59-APP-002 - Verificar que un producto con label muestra una sola cucarda arriba a la izquierda

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
- Ubicacion: Resultados de búsqueda
- 000000000000028616-KGV tiene el atributo label configurado

**Data utilizada**

- v1.0.1 = TBD
- 000000000000028616-KGV = 000000000000662457-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000028616-KGV y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de 000000000000028616-KGV.

**Resultado esperado**

Se muestra una única cucarda en la esquina superior izquierda de la imagen.

**Evidencia**

![Android · Paso 1 — app abierta en el home](<B2C-59 Evidencias/TC-B2C59-APP-002-android-p01-app-abierta-en-el-home.png>)

![Android · Paso 3 — resultados con el shelf del producto](<B2C-59 Evidencias/TC-B2C59-APP-002-android-p03-resultados-con-el-shelf-del-producto.png>)

![Android · Estado final](<B2C-59 Evidencias/TC-B2C59-APP-002-android.png>)

---

### TC-B2C59-APP-003 - Verificar que un producto sin label no muestra cucarda

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
- Ubicacion: Resultados de búsqueda
- 000000000000675191-UN tiene label = null

**Data utilizada**

- v1.0.1 = TBD
- 000000000000675191-UN = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000675191-UN y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de 000000000000675191-UN.

**Resultado esperado**

No se muestra ninguna etiqueta en la esquina superior izquierda de la imagen.

**Evidencia**

![Android · Paso 1 — app abierta en el home](<B2C-59 Evidencias/TC-B2C59-APP-003-android-p01-app-abierta-en-el-home.png>)

![Android · Paso 3 — resultados con el shelf del producto](<B2C-59 Evidencias/TC-B2C59-APP-003-android-p03-resultados-con-el-shelf-del-producto.png>)

![Android · Estado final](<B2C-59 Evidencias/TC-B2C59-APP-003-android.png>)

---

### TC-B2C59-APP-005 - Verificar que un producto no patrocinado no muestra "Patrocinado"

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
- Ubicacion: Resultados de búsqueda
- 000000000000675191-UN tiene isSponsored = false

**Data utilizada**

- v1.0.1 = TBD
- 000000000000675191-UN = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000675191-UN y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de 000000000000675191-UN.

**Resultado esperado**

El shelf no muestra el texto "Patrocinado".

**Evidencia**

![Android · Paso 1 — app abierta en el home](<B2C-59 Evidencias/TC-B2C59-APP-005-android-p01-app-abierta-en-el-home.png>)

![Android · Paso 3 — resultados con el shelf del producto](<B2C-59 Evidencias/TC-B2C59-APP-005-android-p03-resultados-con-el-shelf-del-producto.png>)

![Android · Estado final](<B2C-59 Evidencias/TC-B2C59-APP-005-android.png>)

---

### TC-B2C59-APP-006 - Verificar que tocar la imagen o el nombre del shelf abre la PDP del producto

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
- Ubicacion: PLP

**Data utilizada**

- v1.0.1 = TBD
- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.
2. El sistema carga la PLP.
3. El usuario toca la imagen de un producto.
4. El sistema abre la PDP del producto.
5. El usuario vuelve a la PLP y toca el nombre del mismo producto.
6. El sistema abre la misma PDP.

**Resultado esperado**

Tanto la imagen como el nombre abren la PDP del producto y al volver se regresa a la PLP de origen.

**Evidencia**

![Android · Paso 1 — app abierta en el home](<B2C-59 Evidencias/TC-B2C59-APP-006-android-p01-app-abierta-en-el-home.png>)

![Android · Paso 2 — plp con su listado](<B2C-59 Evidencias/TC-B2C59-APP-006-android-p02-plp-con-su-listado.png>)

![Android · Paso 4 — tras tocar la imagen](<B2C-59 Evidencias/TC-B2C59-APP-006-android-p04-tras-tocar-la-imagen.png>)

![Android · Paso 6 — tras tocar el nombre](<B2C-59 Evidencias/TC-B2C59-APP-006-android-p06-tras-tocar-el-nombre.png>)

![Android · Estado final](<B2C-59 Evidencias/TC-B2C59-APP-006-android.png>)

---

### TC-B2C59-APP-009 - Verificar que un producto pesable muestra el label de formato bajo el nombre

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
- Ubicacion: Resultados de búsqueda

**Data utilizada**

- v1.0.1 = TBD
- 000000000000037972-KG = 000000000000037972-KG

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000037972-KG y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de 000000000000037972-KG.

**Resultado esperado**

Debajo del nombre se muestra el label de formato con la cantidad de medida (ej. "500gr.").

**Evidencia**

![Android · Paso 1 — app abierta en el home](<B2C-59 Evidencias/TC-B2C59-APP-009-android-p01-app-abierta-en-el-home.png>)

![Android · Paso 3 — resultados con el shelf del producto](<B2C-59 Evidencias/TC-B2C59-APP-009-android-p03-resultados-con-el-shelf-del-producto.png>)

![Android · Estado final](<B2C-59 Evidencias/TC-B2C59-APP-009-android.png>)

---

### TC-B2C59-APP-010 - Verificar que una promo que combina productos distintos muestra "Combina la promo" y abre su modal

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
- Ubicacion: Resultados de búsqueda
- 000000000000666200-UN tiene una promo NxM o NxPrecio vigente que combina productos distintos (SKUs diferentes)

**Data utilizada**

- v1.0.1 = TBD
- 000000000000666200-UN = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000666200-UN y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de 000000000000666200-UN.
4. El usuario toca "Combina la promo >".
5. El sistema abre el modal de Combina la promo.

**Resultado esperado**

Se muestra "Combina la promo >" antes de "Agregar" y al tocarlo se abre el modal definido en B2C-74.

**Evidencia**

![Android · Paso 1 — app abierta en el home](<B2C-59 Evidencias/TC-B2C59-APP-010-android-p01-app-abierta-en-el-home.png>)

![Android · Paso 3 — resultados con el shelf del producto](<B2C-59 Evidencias/TC-B2C59-APP-010-android-p03-resultados-con-el-shelf-del-producto.png>)

![Android · Paso 5 — tras tocar combina la promo](<B2C-59 Evidencias/TC-B2C59-APP-010-android-p05-tras-tocar-combina-la-promo.png>)

![Android · Estado final](<B2C-59 Evidencias/TC-B2C59-APP-010-android.png>)

---

### TC-B2C59-APP-011 - Verificar que un producto sin promo vigente no muestra "Combina la promo"

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Resultados de búsqueda
- 000000000000652899-UN no tiene ninguna promoción vigente

**Data utilizada**

- v1.0.1 = TBD
- 000000000000652899-UN = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000652899-UN y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de 000000000000652899-UN.

**Resultado esperado**

No se muestra "Combina la promo" y el shelf no deja espacio vacío en su lugar.

**Resultado obtenido**

Esperado: no se muestra «Combina la promo» y el shelf no deja espacio vacío en su lugar. Obtenido: no se muestra «Combina la promo», pero el shelf de {SKU_SIN_PROMO} (000000000000652899-UN) deja 162 px libres entre el nombre y «Agregar», que queda a la misma altura que en un shelf con «Combina la promo». B2C-59.spec.ts:214. A confirmar con Diseño si el espacio reservado es el comportamiento esperado. Bug: no creado — pendiente de que Diseño confirme si el espacio reservado es el comportamiento esperado.

**Evidencia**

![Android · Paso 1 — app abierta en el home](<B2C-59 Evidencias/TC-B2C59-APP-011-android-p01-app-abierta-en-el-home.png>)

![Android · Paso 3 — resultados con el shelf del producto](<B2C-59 Evidencias/TC-B2C59-APP-011-android-p03-resultados-con-el-shelf-del-producto.png>)

![Android · Estado final](<B2C-59 Evidencias/TC-B2C59-APP-011-android.png>)

---

### TC-B2C59-APP-012 - Verificar que un producto sin imagen válida muestra la imagen por defecto de Unimarc

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Resultados de búsqueda
- 000000000000029400-KG no tiene imagen o su URL de imagen retorna error

**Data utilizada**

- v1.0.1 = TBD
- 000000000000029400-KG = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000029400-KG y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de 000000000000029400-KG.

**Resultado esperado**

El shelf muestra la imagen por defecto de Unimarc y precio, nombre y "Agregar" se muestran con normalidad.

**Resultado obtenido**

Esperado: el shelf muestra la imagen por defecto de Unimarc. Obtenido: la zona de la imagen del shelf de {SKU_SIN_IMAGEN} (000000000000029400-KG, Posta paleta de vacuno) queda en blanco (100 % de píxeles blancos), sin imagen por defecto. B2C-59.spec.ts:227. Bug: B2C-1300.

**Evidencia**

![Android · Paso 1 — app abierta en el home](<B2C-59 Evidencias/TC-B2C59-APP-012-android-p01-app-abierta-en-el-home.png>)

![Android · Paso 3 — resultados con el shelf del producto](<B2C-59 Evidencias/TC-B2C59-APP-012-android-p03-resultados-con-el-shelf-del-producto.png>)

![Android · Paso 5 — zona de la imagen del shelf](<B2C-59 Evidencias/TC-B2C59-APP-012-android-p05-zona-de-la-imagen-del-shelf.png>)

![Android · Estado final](<B2C-59 Evidencias/TC-B2C59-APP-012-android.png>)

---

### TC-B2C59-APP-013 - Verificar que un producto sin stock muestra "Pronto disponible" y "Ver similares"

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
- Ubicacion: Resultados de búsqueda
- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)
- 000000000000029403-KG no tiene stock para el método de entrega activo

**Data utilizada**

- v1.0.1 = TBD
- 000000000000029403-KG = 000000000000029403-KG

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000029403-KG y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de 000000000000029403-KG.

**Resultado esperado**

Bajo el precio se muestra "Pronto disponible", no se muestra "Agregar" ni "Combina la promo" y se muestra "Ver similares".

**Evidencia**

![Android · Paso 1 — app abierta en el home](<B2C-59 Evidencias/TC-B2C59-APP-013-android-p01-app-abierta-en-el-home.png>)

![Android · Paso 3 — resultados con el shelf del producto](<B2C-59 Evidencias/TC-B2C59-APP-013-android-p03-resultados-con-el-shelf-del-producto.png>)

![Android · Estado final](<B2C-59 Evidencias/TC-B2C59-APP-013-android.png>)

---

### TC-B2C59-APP-014 - Verificar que "Ver similares" abre el modal de productos similares

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Resultados de búsqueda
- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)
- 000000000000029403-KG no tiene stock para el método de entrega activo

**Data utilizada**

- v1.0.1 = TBD
- 000000000000029403-KG = 000000000000029403-KG

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000029403-KG y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de 000000000000029403-KG.
4. El usuario toca "Ver similares".
5. El sistema abre el modal de productos similares.

**Resultado esperado**

Se abre el modal de productos similares definido en B2C-40.

**Resultado obtenido**

Esperado: se abre el modal de productos similares (B2C-40). Obtenido: tocar «Ver similares» abre la PDP del producto; no hay modal ni lista de similares tras 7 s de espera. B2C-59.spec.ts:250. Bug: B2C-1301.

**Evidencia**

![Android · Paso 1 — app abierta en el home](<B2C-59 Evidencias/TC-B2C59-APP-014-android-p01-app-abierta-en-el-home.png>)

![Android · Paso 3 — resultados con el shelf del producto](<B2C-59 Evidencias/TC-B2C59-APP-014-android-p03-resultados-con-el-shelf-del-producto.png>)

![Android · Paso 5 — tras tocar ver similares](<B2C-59 Evidencias/TC-B2C59-APP-014-android-p05-tras-tocar-ver-similares.png>)

![Android · Estado final](<B2C-59 Evidencias/TC-B2C59-APP-014-android.png>)

---

### TC-B2C59-APP-015 - Verificar que "Marca | Descripción" larga se trunca a 40 caracteres con "…"

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Resultados de búsqueda
- "Marca | Descripción" de 000000000000662457-UN supera 40 caracteres

**Data utilizada**

- v1.0.1 = TBD
- 000000000000662457-UN = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000662457-UN y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de 000000000000662457-UN.

**Resultado esperado**

El texto "Marca | Descripción" muestra como máximo 40 caracteres seguidos de "…", con la marca en negrita.

**Resultado obtenido**

Esperado: «Marca | Descripción» con un máximo de 40 caracteres seguidos de «…». Obtenido: el shelf muestra «Fundo Rio Alegre | Carne molida 4% grasa tártaro Fund…» (unos 53 caracteres visibles); la app publica el texto completo de 71 caracteres y lo corta por líneas, no a 40. B2C-59.spec.ts:265. Bug: B2C-1302.

**Evidencia**

![Android · Paso 1 — app abierta en el home](<B2C-59 Evidencias/TC-B2C59-APP-015-android-p01-app-abierta-en-el-home.png>)

![Android · Paso 3 — resultados con el shelf del producto](<B2C-59 Evidencias/TC-B2C59-APP-015-android-p03-resultados-con-el-shelf-del-producto.png>)

![Android · Estado final](<B2C-59 Evidencias/TC-B2C59-APP-015-android.png>)

---

### TC-B2C59-APP-016 - Verificar que "Marca | Descripción" de hasta 40 caracteres se muestra completa

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
- Ubicacion: Resultados de búsqueda
- "Marca | Descripción" de 000000000000038061-UN tiene 40 caracteres o menos

**Data utilizada**

- v1.0.1 = TBD
- 000000000000038061-UN = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000038061-UN y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de 000000000000038061-UN.

**Resultado esperado**

El texto "Marca | Descripción" se muestra completo, sin puntos suspensivos.

**Evidencia**

![Android · Paso 1 — app abierta en el home](<B2C-59 Evidencias/TC-B2C59-APP-016-android-p01-app-abierta-en-el-home.png>)

![Android · Paso 3 — resultados con el shelf del producto](<B2C-59 Evidencias/TC-B2C59-APP-016-android-p03-resultados-con-el-shelf-del-producto.png>)

![Android · Estado final](<B2C-59 Evidencias/TC-B2C59-APP-016-android.png>)

---

### TC-B2C59-APP-017 - Verificar que "Agregar" del shelf suma el producto al carro

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
- Ubicacion: Resultados de búsqueda
- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)

**Data utilizada**

- v1.0.1 = TBD
- 000000000000675191-UN = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000675191-UN y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de 000000000000675191-UN.
4. El usuario toca "Agregar".
5. El sistema agrega el producto y muestra el contador en el shelf.

**Resultado esperado**

El producto se agrega al carro y el shelf muestra el contador con 1 unidad.

**Evidencia**

![Android · Paso 1 — app abierta en el home](<B2C-59 Evidencias/TC-B2C59-APP-017-android-p01-app-abierta-en-el-home.png>)

![Android · Paso 3 — resultados con el shelf del producto](<B2C-59 Evidencias/TC-B2C59-APP-017-android-p03-resultados-con-el-shelf-del-producto.png>)

![Android · Paso 5 — tras tocar agregar](<B2C-59 Evidencias/TC-B2C59-APP-017-android-p05-tras-tocar-agregar.png>)

![Android · Estado final](<B2C-59 Evidencias/TC-B2C59-APP-017-android.png>)

---

### TC-B2C59-APP-018 - Verificar que el botón Favoritos del shelf marca el producto como favorito

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
- Ubicacion: Resultados de búsqueda
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- 000000000000675191-UN no está en favoritos

**Data utilizada**

- v1.0.1 = TBD
- 000000000000675191-UN = 000000000000675191-UN
- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000675191-UN y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de 000000000000675191-UN.
4. El usuario toca el botón Favoritos del shelf.
5. El sistema marca el producto como favorito.

**Resultado esperado**

El ícono de Favoritos queda activo y el producto aparece en la lista de favoritos.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: la precondición exige que 000000000000675191-UN no esté en favoritos, pero en los resultados de búsqueda el shelf del producto ya muestra el corazón activo (rojo) para la cuenta de prueba; quitarlo sería modificar sus favoritos sin que el caso lo autorice. Además el producto figura 'Pronto disponible'. Acción: dejar el producto fuera de favoritos de la cuenta o declarar otro SKU que no lo esté.

**Evidencia**

![Android · Paso 1 — app abierta en el home](<B2C-59 Evidencias/TC-B2C59-APP-018-android-p01-app-abierta-en-el-home.png>)

![Android · Paso 2 — shelf con el corazon ya activo](<B2C-59 Evidencias/TC-B2C59-APP-018-android-p02-shelf-con-el-corazon-ya-activo.png>)

![Android · Paso 3 — pantalla de inicio de sesion de la app](<B2C-59 Evidencias/TC-B2C59-APP-018-android-p03-pantalla-de-inicio-de-sesion-de-la-app.png>)

![Android · Estado final](<B2C-59 Evidencias/TC-B2C59-APP-018-android.png>)

---

### TC-B2C59-APP-019 - Verificar que un producto con "Completa la promo" no muestra "Combina la promo"

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
- Ubicacion: Resultados de búsqueda
- 000000000664214001-UN tiene una promo "Completa la promo" vigente

**Data utilizada**

- v1.0.1 = TBD
- 000000000664214001-UN = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000664214001-UN y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de 000000000664214001-UN.

**Resultado esperado**

El shelf no muestra el botón "Combina la promo".

**Evidencia**

![Android · Paso 1 — app abierta en el home](<B2C-59 Evidencias/TC-B2C59-APP-019-android-p01-app-abierta-en-el-home.png>)

![Android · Paso 3 — resultados con el shelf del producto](<B2C-59 Evidencias/TC-B2C59-APP-019-android-p03-resultados-con-el-shelf-del-producto.png>)

![Android · Estado final](<B2C-59 Evidencias/TC-B2C59-APP-019-android.png>)

---

### TC-B2C59-APP-020 - Verificar que la sección de precios del shelf sigue las reglas de B2C-62

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
- Ubicacion: Resultados de búsqueda
- {SKU_PROM_NxPRECIO} tiene una promo NxPrecio vigente

**Data utilizada**

- v1.0.1 = TBD
- {SKU_PROM_NxPRECIO} = 000000000000666200-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca {SKU_PROM_NxPRECIO} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_PROM_NxPRECIO}.

**Resultado esperado**

La sección de precios muestra la mecánica NxPrecio, el precio unitario y los PPUM según B2C-62, sin superar 3 precios.

**Evidencia**

![Android · Paso 1 — app abierta en el home](<B2C-59 Evidencias/TC-B2C59-APP-020-android-p01-app-abierta-en-el-home.png>)

![Android · Paso 3 — resultados con el shelf del producto](<B2C-59 Evidencias/TC-B2C59-APP-020-android-p03-resultados-con-el-shelf-del-producto.png>)

![Android · Estado final](<B2C-59 Evidencias/TC-B2C59-APP-020-android.png>)

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
  "environment": "App Unimarc v1.0.1 (DEV)",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-59",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-59 APP Test Cases.xlsx",
  "title": "B2C-59 APP",
  "updated_at": "2026-10-27"
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
  ],
  "2026-10-26": [
   "TC-B2C59-APP-002",
   "TC-B2C59-APP-003",
   "TC-B2C59-APP-005",
   "TC-B2C59-APP-006",
   "TC-B2C59-APP-009",
   "TC-B2C59-APP-010",
   "TC-B2C59-APP-011",
   "TC-B2C59-APP-012",
   "TC-B2C59-APP-013",
   "TC-B2C59-APP-014",
   "TC-B2C59-APP-015",
   "TC-B2C59-APP-016",
   "TC-B2C59-APP-017",
   "TC-B2C59-APP-019",
   "TC-B2C59-APP-020"
  ],
  "2026-10-27": [
   "TC-B2C59-APP-018"
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
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se muestra una única cucarda en la esquina superior izquierda de la imagen.",
   "form_factor": "app",
   "id": "TC-B2C59-APP-002",
   "name": "Verificar que un producto con label muestra una sola cucarda arriba a la izquierda",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- 000000000000028616-KGV tiene el atributo label configurado",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — app abierta en el home",
     "file": "TC-B2C59-APP-002-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Android · Paso 3 — resultados con el shelf del producto",
     "file": "TC-B2C59-APP-002-android-p03-resultados-con-el-shelf-del-producto.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C59-APP-002-android.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000028616-KGV y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de 000000000000028616-KGV.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000028616-KGV = 000000000000662457-UN"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "No se muestra ninguna etiqueta en la esquina superior izquierda de la imagen.",
   "form_factor": "app",
   "id": "TC-B2C59-APP-003",
   "name": "Verificar que un producto sin label no muestra cucarda",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- 000000000000675191-UN tiene label = null",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — app abierta en el home",
     "file": "TC-B2C59-APP-003-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Android · Paso 3 — resultados con el shelf del producto",
     "file": "TC-B2C59-APP-003-android-p03-resultados-con-el-shelf-del-producto.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C59-APP-003-android.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000675191-UN y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de 000000000000675191-UN.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000675191-UN = 000000000000675191-UN"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El shelf no muestra el texto \"Patrocinado\".",
   "form_factor": "app",
   "id": "TC-B2C59-APP-005",
   "name": "Verificar que un producto no patrocinado no muestra \"Patrocinado\"",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- 000000000000675191-UN tiene isSponsored = false",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — app abierta en el home",
     "file": "TC-B2C59-APP-005-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Android · Paso 3 — resultados con el shelf del producto",
     "file": "TC-B2C59-APP-005-android-p03-resultados-con-el-shelf-del-producto.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C59-APP-005-android.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000675191-UN y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de 000000000000675191-UN.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000675191-UN = 000000000000675191-UN"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Tanto la imagen como el nombre abren la PDP del producto y al volver se regresa a la PLP de origen.",
   "form_factor": "app",
   "id": "TC-B2C59-APP-006",
   "name": "Verificar que tocar la imagen o el nombre del shelf abre la PDP del producto",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PLP",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — app abierta en el home",
     "file": "TC-B2C59-APP-006-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Android · Paso 2 — plp con su listado",
     "file": "TC-B2C59-APP-006-android-p02-plp-con-su-listado.png"
    },
    {
     "caption": "Android · Paso 4 — tras tocar la imagen",
     "file": "TC-B2C59-APP-006-android-p04-tras-tocar-la-imagen.png"
    },
    {
     "caption": "Android · Paso 6 — tras tocar el nombre",
     "file": "TC-B2C59-APP-006-android-p06-tras-tocar-el-nombre.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C59-APP-006-android.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1 y navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.\n2. El sistema carga la PLP.\n3. El usuario toca la imagen de un producto.\n4. El sistema abre la PDP del producto.\n5. El usuario vuelve a la PLP y toca el nombre del mismo producto.\n6. El sistema abre la misma PDP.",
   "test_data": "- v1.0.1 = TBD\n- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Debajo del nombre se muestra el label de formato con la cantidad de medida (ej. \"500gr.\").",
   "form_factor": "app",
   "id": "TC-B2C59-APP-009",
   "name": "Verificar que un producto pesable muestra el label de formato bajo el nombre",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — app abierta en el home",
     "file": "TC-B2C59-APP-009-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Android · Paso 3 — resultados con el shelf del producto",
     "file": "TC-B2C59-APP-009-android-p03-resultados-con-el-shelf-del-producto.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C59-APP-009-android.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000037972-KG y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de 000000000000037972-KG.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000037972-KG = 000000000000037972-KG"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se muestra \"Combina la promo >\" antes de \"Agregar\" y al tocarlo se abre el modal definido en B2C-74.",
   "form_factor": "app",
   "id": "TC-B2C59-APP-010",
   "name": "Verificar que una promo que combina productos distintos muestra \"Combina la promo\" y abre su modal",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- 000000000000666200-UN tiene una promo NxM o NxPrecio vigente que combina productos distintos (SKUs diferentes)",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — app abierta en el home",
     "file": "TC-B2C59-APP-010-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Android · Paso 3 — resultados con el shelf del producto",
     "file": "TC-B2C59-APP-010-android-p03-resultados-con-el-shelf-del-producto.png"
    },
    {
     "caption": "Android · Paso 5 — tras tocar combina la promo",
     "file": "TC-B2C59-APP-010-android-p05-tras-tocar-combina-la-promo.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C59-APP-010-android.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000666200-UN y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de 000000000000666200-UN.\n4. El usuario toca \"Combina la promo >\".\n5. El sistema abre el modal de Combina la promo.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000666200-UN = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "No se muestra \"Combina la promo\" y el shelf no deja espacio vacío en su lugar.",
   "form_factor": "app",
   "id": "TC-B2C59-APP-011",
   "name": "Verificar que un producto sin promo vigente no muestra \"Combina la promo\"",
   "observed": "Esperado: no se muestra «Combina la promo» y el shelf no deja espacio vacío en su lugar. Obtenido: no se muestra «Combina la promo», pero el shelf de {SKU_SIN_PROMO} (000000000000652899-UN) deja 162 px libres entre el nombre y «Agregar», que queda a la misma altura que en un shelf con «Combina la promo». B2C-59.spec.ts:214. A confirmar con Diseño si el espacio reservado es el comportamiento esperado. Bug: no creado — pendiente de que Diseño confirme si el espacio reservado es el comportamiento esperado.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- 000000000000652899-UN no tiene ninguna promoción vigente",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — app abierta en el home",
     "file": "TC-B2C59-APP-011-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Android · Paso 3 — resultados con el shelf del producto",
     "file": "TC-B2C59-APP-011-android-p03-resultados-con-el-shelf-del-producto.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C59-APP-011-android.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000652899-UN y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de 000000000000652899-UN.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000652899-UN = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El shelf muestra la imagen por defecto de Unimarc y precio, nombre y \"Agregar\" se muestran con normalidad.",
   "form_factor": "app",
   "id": "TC-B2C59-APP-012",
   "name": "Verificar que un producto sin imagen válida muestra la imagen por defecto de Unimarc",
   "observed": "Esperado: el shelf muestra la imagen por defecto de Unimarc. Obtenido: la zona de la imagen del shelf de {SKU_SIN_IMAGEN} (000000000000029400-KG, Posta paleta de vacuno) queda en blanco (100 % de píxeles blancos), sin imagen por defecto. B2C-59.spec.ts:227. Bug: B2C-1300.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- 000000000000029400-KG no tiene imagen o su URL de imagen retorna error",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — app abierta en el home",
     "file": "TC-B2C59-APP-012-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Android · Paso 3 — resultados con el shelf del producto",
     "file": "TC-B2C59-APP-012-android-p03-resultados-con-el-shelf-del-producto.png"
    },
    {
     "caption": "Android · Paso 5 — zona de la imagen del shelf",
     "file": "TC-B2C59-APP-012-android-p05-zona-de-la-imagen-del-shelf.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C59-APP-012-android.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000029400-KG y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de 000000000000029400-KG.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000029400-KG = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Bajo el precio se muestra \"Pronto disponible\", no se muestra \"Agregar\" ni \"Combina la promo\" y se muestra \"Ver similares\".",
   "form_factor": "app",
   "id": "TC-B2C59-APP-013",
   "name": "Verificar que un producto sin stock muestra \"Pronto disponible\" y \"Ver similares\"",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)\n- 000000000000029403-KG no tiene stock para el método de entrega activo",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — app abierta en el home",
     "file": "TC-B2C59-APP-013-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Android · Paso 3 — resultados con el shelf del producto",
     "file": "TC-B2C59-APP-013-android-p03-resultados-con-el-shelf-del-producto.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C59-APP-013-android.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000029403-KG y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de 000000000000029403-KG.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000029403-KG = 000000000000029403-KG"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se abre el modal de productos similares definido en B2C-40.",
   "form_factor": "app",
   "id": "TC-B2C59-APP-014",
   "name": "Verificar que \"Ver similares\" abre el modal de productos similares",
   "observed": "Esperado: se abre el modal de productos similares (B2C-40). Obtenido: tocar «Ver similares» abre la PDP del producto; no hay modal ni lista de similares tras 7 s de espera. B2C-59.spec.ts:250. Bug: B2C-1301.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)\n- 000000000000029403-KG no tiene stock para el método de entrega activo",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — app abierta en el home",
     "file": "TC-B2C59-APP-014-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Android · Paso 3 — resultados con el shelf del producto",
     "file": "TC-B2C59-APP-014-android-p03-resultados-con-el-shelf-del-producto.png"
    },
    {
     "caption": "Android · Paso 5 — tras tocar ver similares",
     "file": "TC-B2C59-APP-014-android-p05-tras-tocar-ver-similares.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C59-APP-014-android.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000029403-KG y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de 000000000000029403-KG.\n4. El usuario toca \"Ver similares\".\n5. El sistema abre el modal de productos similares.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000029403-KG = 000000000000029403-KG"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El texto \"Marca | Descripción\" muestra como máximo 40 caracteres seguidos de \"…\", con la marca en negrita.",
   "form_factor": "app",
   "id": "TC-B2C59-APP-015",
   "name": "Verificar que \"Marca | Descripción\" larga se trunca a 40 caracteres con \"…\"",
   "observed": "Esperado: «Marca | Descripción» con un máximo de 40 caracteres seguidos de «…». Obtenido: el shelf muestra «Fundo Rio Alegre | Carne molida 4% grasa tártaro Fund…» (unos 53 caracteres visibles); la app publica el texto completo de 71 caracteres y lo corta por líneas, no a 40. B2C-59.spec.ts:265. Bug: B2C-1302.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- \"Marca | Descripción\" de 000000000000662457-UN supera 40 caracteres",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — app abierta en el home",
     "file": "TC-B2C59-APP-015-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Android · Paso 3 — resultados con el shelf del producto",
     "file": "TC-B2C59-APP-015-android-p03-resultados-con-el-shelf-del-producto.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C59-APP-015-android.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000662457-UN y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de 000000000000662457-UN.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000662457-UN = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El texto \"Marca | Descripción\" se muestra completo, sin puntos suspensivos.",
   "form_factor": "app",
   "id": "TC-B2C59-APP-016",
   "name": "Verificar que \"Marca | Descripción\" de hasta 40 caracteres se muestra completa",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- \"Marca | Descripción\" de 000000000000038061-UN tiene 40 caracteres o menos",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — app abierta en el home",
     "file": "TC-B2C59-APP-016-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Android · Paso 3 — resultados con el shelf del producto",
     "file": "TC-B2C59-APP-016-android-p03-resultados-con-el-shelf-del-producto.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C59-APP-016-android.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000038061-UN y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de 000000000000038061-UN.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000038061-UN = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El producto se agrega al carro y el shelf muestra el contador con 1 unidad.",
   "form_factor": "app",
   "id": "TC-B2C59-APP-017",
   "name": "Verificar que \"Agregar\" del shelf suma el producto al carro",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — app abierta en el home",
     "file": "TC-B2C59-APP-017-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Android · Paso 3 — resultados con el shelf del producto",
     "file": "TC-B2C59-APP-017-android-p03-resultados-con-el-shelf-del-producto.png"
    },
    {
     "caption": "Android · Paso 5 — tras tocar agregar",
     "file": "TC-B2C59-APP-017-android-p05-tras-tocar-agregar.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C59-APP-017-android.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000675191-UN y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de 000000000000675191-UN.\n4. El usuario toca \"Agregar\".\n5. El sistema agrega el producto y muestra el contador en el shelf.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000675191-UN = 000000000000675191-UN"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "El ícono de Favoritos queda activo y el producto aparece en la lista de favoritos.",
   "form_factor": "app",
   "id": "TC-B2C59-APP-018",
   "name": "Verificar que el botón Favoritos del shelf marca el producto como favorito",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: la precondición exige que 000000000000675191-UN no esté en favoritos, pero en los resultados de búsqueda el shelf del producto ya muestra el corazón activo (rojo) para la cuenta de prueba; quitarlo sería modificar sus favoritos sin que el caso lo autorice. Además el producto figura 'Pronto disponible'. Acción: dejar el producto fuera de favoritos de la cuenta o declarar otro SKU que no lo esté.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- 000000000000675191-UN no está en favoritos",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — app abierta en el home",
     "file": "TC-B2C59-APP-018-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Android · Paso 2 — shelf con el corazon ya activo",
     "file": "TC-B2C59-APP-018-android-p02-shelf-con-el-corazon-ya-activo.png"
    },
    {
     "caption": "Android · Paso 3 — pantalla de inicio de sesion de la app",
     "file": "TC-B2C59-APP-018-android-p03-pantalla-de-inicio-de-sesion-de-la-app.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C59-APP-018-android.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000675191-UN y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de 000000000000675191-UN.\n4. El usuario toca el botón Favoritos del shelf.\n5. El sistema marca el producto como favorito.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000675191-UN = 000000000000675191-UN\n- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El shelf no muestra el botón \"Combina la promo\".",
   "form_factor": "app",
   "id": "TC-B2C59-APP-019",
   "name": "Verificar que un producto con \"Completa la promo\" no muestra \"Combina la promo\"",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- 000000000664214001-UN tiene una promo \"Completa la promo\" vigente",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — app abierta en el home",
     "file": "TC-B2C59-APP-019-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Android · Paso 3 — resultados con el shelf del producto",
     "file": "TC-B2C59-APP-019-android-p03-resultados-con-el-shelf-del-producto.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C59-APP-019-android.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000664214001-UN y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de 000000000664214001-UN.",
   "test_data": "- v1.0.1 = TBD\n- 000000000664214001-UN = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "La sección de precios muestra la mecánica NxPrecio, el precio unitario y los PPUM según B2C-62, sin superar 3 precios.",
   "form_factor": "app",
   "id": "TC-B2C59-APP-020",
   "name": "Verificar que la sección de precios del shelf sigue las reglas de B2C-62",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- {SKU_PROM_NxPRECIO} tiene una promo NxPrecio vigente",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — app abierta en el home",
     "file": "TC-B2C59-APP-020-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Android · Paso 3 — resultados con el shelf del producto",
     "file": "TC-B2C59-APP-020-android-p03-resultados-con-el-shelf-del-producto.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C59-APP-020-android.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca {SKU_PROM_NxPRECIO} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_PROM_NxPRECIO}.",
   "test_data": "- v1.0.1 = TBD\n- {SKU_PROM_NxPRECIO} = 000000000000666200-UN"
  }
 ]
}
-->
