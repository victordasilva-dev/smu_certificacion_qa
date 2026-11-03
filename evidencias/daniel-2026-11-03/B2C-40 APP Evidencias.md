# B2C-40 APP - Evidencias QA (Android)

| Campo | Valor |
|---|---|
| Suite | B2C-40 APP |
| Última actualización | 2026-10-29 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | App Unimarc v1.0.1 (DEV) |
| Origen de los TC | Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-40 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado | 10 |
| Bloqueado Data | 5 |
| Rechazado | 2 |
| **Total** | **17** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-29 | 17 | TC-40-APP-001, TC-40-APP-002, TC-40-APP-003, TC-40-APP-004, TC-40-APP-005, TC-40-APP-006, TC-40-APP-007, TC-40-APP-008, TC-40-APP-009, TC-40-APP-010, TC-40-APP-011, TC-40-APP-012, TC-40-APP-013, TC-40-APP-014, TC-40-APP-015, TC-40-APP-016, TC-40-APP-017 |

## Detalle por caso de prueba

### TC-40-APP-001 - Verificar que "Ver similares" en un shelf de navegación abre el modal de productos similares [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-40.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- {SKU_PRODS_SIMILARES} no tiene stock para el método de entrega activo y tiene productos similares con stock
- {SKU_PRODS_SIMILARES} aparece en la PLP de {PLP_URL}

**Data utilizada**

- {APP_BUILD} = TBD
- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno
- {SKU_PRODS_SIMILARES} = 000000000000628239-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario navega a la PLP equivalente a {PLP_URL}.
3. El sistema carga la PLP con {SKU_PRODS_SIMILARES} marcado sin stock y el botón "Ver similares" en su shelf.
4. El usuario toca "Ver similares".
5. El sistema abre el bottom sheet "Productos similares" con la lista de productos similares.

**Resultado esperado**

Se abre el modal "Productos similares" para {SKU_PRODS_SIMILARES}.

**Resultado obtenido**

Esperado: se abre el modal «Productos similares». Obtenido: «Ver similares» del shelf sin stock abre la PDP del producto y no el modal. Bug B2C-1399. spec: tests-app/B2C-40.spec.ts:41

**Observación**

Esperado: se abre el modal «Productos similares». Obtenido: «Ver similares» del shelf sin stock abre la PDP del producto y no el modal. Bug B2C-1399. spec: tests-app/B2C-40.spec.ts:41

---

### TC-40-APP-002 - Verificar que "Ver similares" en la PDP de un producto sin stock abre el modal [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-40.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- {SKU_PRODS_SIMILARES} no tiene stock para el método de entrega activo y tiene productos similares con stock

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_PRODS_SIMILARES} = 000000000000628239-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_PRODS_SIMILARES} y abre su PDP.
3. El sistema carga la PDP con el producto marcado sin stock y el botón "Ver similares".
4. El usuario toca "Ver similares".
5. El sistema abre el bottom sheet "Productos similares" con la lista de productos similares.

**Resultado esperado**

Se abre el modal "Productos similares" para {SKU_PRODS_SIMILARES}.

**Resultado obtenido**

Esperado: la PDP del producto sin stock muestra «Ver similares» y abre el modal. Obtenido: la PDP muestra «Pronto disponible» pero no tiene el botón. Bug B2C-1400. spec: tests-app/B2C-40.spec.ts:57

**Observación**

Esperado: la PDP del producto sin stock muestra «Ver similares» y abre el modal. Obtenido: la PDP muestra «Pronto disponible» pero no tiene el botón. Bug B2C-1400. spec: tests-app/B2C-40.spec.ts:57

---

### TC-40-APP-003 - Verificar que "Reemplazar" en un producto no disponible del carro abre el modal de similares [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-40.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_PRODS_SIMILARES}, sin stock en la tienda activa (sección de productos no disponibles)

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_PRODS_SIMILARES} = 000000000000628239-UN
- {COMPRADOR_USER} = 11.223.344-K
- {COMPRADOR_PASSWORD} = [contraseña omitida]

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario toca el ícono del carro.
3. El sistema carga el carrito con {SKU_PRODS_SIMILARES} en la sección de productos no disponibles.
4. El usuario toca "Reemplazar" en {SKU_PRODS_SIMILARES}.
5. El sistema abre el bottom sheet "Productos similares" con la lista de productos similares.

**Resultado esperado**

Se abre el modal "Productos similares" para {SKU_PRODS_SIMILARES}.

**Resultado obtenido**

Dato que no cumple la precondición: {SKU_PRODS_SIMILARES} aparece «Pronto disponible» y sin botón «Agregar» en la tienda de {DIRECCION_DESPACHO_001}, así que no se puede dejar en el carro como no disponible. Se necesita una tienda con stock de ese SKU para agregarlo y luego cambiar a la tienda sin stock. Verificado en Android.

**Observación**

Dato que no cumple la precondición: {SKU_PRODS_SIMILARES} aparece «Pronto disponible» y sin botón «Agregar» en la tienda de {DIRECCION_DESPACHO_001}, así que no se puede dejar en el carro como no disponible. Se necesita una tienda con stock de ese SKU para agregarlo y luego cambiar a la tienda sin stock. Verificado en Android.

---

### TC-40-APP-004 - Verificar que el modal de similares se muestra como bottom sheet deslizable desde abajo [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-40.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- {SKU_PRODS_SIMILARES} no tiene stock para el método de entrega activo y tiene productos similares con stock

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_PRODS_SIMILARES} = 000000000000628239-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_PRODS_SIMILARES} y abre su PDP.
3. El sistema carga la PDP con el producto marcado sin stock y el botón "Ver similares".
4. El usuario toca "Ver similares".
5. El sistema despliega el modal desde la parte inferior de la pantalla como bottom sheet sobre la PDP.

**Resultado esperado**

El modal aparece como bottom sheet que sube desde la parte inferior, sobre la PDP.

**Resultado obtenido**

Causa: el modal «Productos similares» no se abre en esta build, así que no se puede verificar su contenido (ver B2C-1399 y B2C-1400). Acción: re-ejecutar cuando se corrijan.

**Observación**

Causa: el modal «Productos similares» no se abre en esta build, así que no se puede verificar su contenido (ver B2C-1399 y B2C-1400). Acción: re-ejecutar cuando se corrijan.

---

### TC-40-APP-005 - Verificar que el modal muestra título, X, producto original, similares y "Reemplazar productos" [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-40.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- {SKU_PRODS_SIMILARES} no tiene stock para el método de entrega activo y tiene productos similares con stock

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_PRODS_SIMILARES} = 000000000000628239-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_PRODS_SIMILARES} y abre su PDP.
3. El sistema carga la PDP con el producto marcado sin stock y el botón "Ver similares".
4. El usuario toca "Ver similares".
5. El sistema muestra el título "Productos similares", el botón cerrar (X), la miniatura y el nombre de {SKU_PRODS_SIMILARES}, la lista de similares en shelf simplificada (imagen, marca | nombre, precios, "Agregar") y el botón "Reemplazar productos" fijo abajo.

**Resultado esperado**

El modal muestra todos los elementos del CA3 y "Reemplazar productos" permanece fijo en la parte inferior al hacer scroll en la lista.

**Resultado obtenido**

Causa: el modal «Productos similares» no se abre en esta build, así que no se puede verificar su contenido (ver B2C-1399 y B2C-1400). Acción: re-ejecutar cuando se corrijan.

**Observación**

Causa: el modal «Productos similares» no se abre en esta build, así que no se puede verificar su contenido (ver B2C-1399 y B2C-1400). Acción: re-ejecutar cuando se corrijan.

---

### TC-40-APP-006 - Verificar que el modal muestra un skeleton mientras carga los productos similares [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-40.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- {SKU_PRODS_SIMILARES} no tiene stock para el método de entrega activo y tiene productos similares con stock
- {HERRAMIENTA_PROXY_APP} configurado con throttling de red lenta

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_PRODS_SIMILARES} = 000000000000628239-UN
- {HERRAMIENTA_PROXY_APP} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_PRODS_SIMILARES} y abre su PDP.
3. El sistema carga la PDP con el producto marcado sin stock y el botón "Ver similares".
4. El usuario toca "Ver similares".
5. El sistema abre el modal con un skeleton de carga y, al recibir la respuesta, lo reemplaza por la lista de similares.

**Resultado esperado**

Mientras se obtienen los similares el modal muestra el skeleton de carga.

**Resultado obtenido**

Falta dato: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Cargar el valor y re-ejecutar.

**Observación**

Falta dato: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Cargar el valor y re-ejecutar.

---

### TC-40-APP-007 - Verificar que el modal lista solo similares con stock para el método de entrega activo [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-40.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- {SKU_PRODS_SIMILARES} no tiene stock para el método de entrega activo y tiene productos similares con stock
- Hay un método de entrega activo

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_PRODS_SIMILARES} = 000000000000628239-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_PRODS_SIMILARES} y abre su PDP.
3. El sistema carga la PDP con el producto marcado sin stock y el botón "Ver similares".
4. El usuario toca "Ver similares".
5. El sistema abre el bottom sheet "Productos similares" con la lista de productos similares.
6. El usuario revisa todos los productos de la lista.

**Resultado esperado**

Todos los similares tienen el botón "Agregar" habilitado y precio vigente; no aparece ningún producto sin stock.

**Resultado obtenido**

Causa: el modal «Productos similares» no se abre en esta build, así que no se puede verificar su contenido (ver B2C-1399 y B2C-1400). Acción: re-ejecutar cuando se corrijan.

**Observación**

Causa: el modal «Productos similares» no se abre en esta build, así que no se puede verificar su contenido (ver B2C-1399 y B2C-1400). Acción: re-ejecutar cuando se corrijan.

---

### TC-40-APP-008 - Verificar que sin productos similares se muestra el estado vacío con NAV015 [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-40.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- {SKU_SIN_SIMILARES} no tiene stock y Einstein no retorna similares para él

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_SIN_SIMILARES} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_SIN_SIMILARES} y abre su PDP.
3. El sistema carga la PDP con el botón "Ver similares".
4. El usuario toca "Ver similares".
5. El sistema muestra en el modal la imagen, el mensaje "¡Ups! Lo sentimos. El producto que buscamos no tiene otros similares", "Error NAV015" y el botón "Entendido".
6. El usuario toca "Entendido".
7. El sistema cierra el modal.

**Resultado esperado**

Se muestra el estado vacío con "Error NAV015" y "Entendido" cierra el modal.

**Resultado obtenido**

Causa: el modal «Productos similares» no se abre en esta build, así que no se puede verificar su contenido (ver B2C-1399 y B2C-1400). Acción: re-ejecutar cuando se corrijan.

**Observación**

Causa: el modal «Productos similares» no se abre en esta build, así que no se puede verificar su contenido (ver B2C-1399 y B2C-1400). Acción: re-ejecutar cuando se corrijan.

---

### TC-40-APP-009 - Verificar que un error de Einstein muestra el estado de error con NAV016 [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-40.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- {SKU_PRODS_SIMILARES} no tiene stock para el método de entrega activo y tiene productos similares con stock
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request a Einstein Recommendations

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_PRODS_SIMILARES} = 000000000000628239-UN
- {HERRAMIENTA_PROXY_APP} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_PRODS_SIMILARES} y abre su PDP.
3. El sistema carga la PDP con el producto marcado sin stock y el botón "Ver similares".
4. El usuario toca "Ver similares".
5. El sistema muestra en el modal la imagen, el mensaje de error, "Error NAV016" y el botón "Entendido".
6. El usuario toca "Entendido".
7. El sistema cierra el modal.

**Resultado esperado**

Se muestra el estado de error con "Error NAV016" y "Entendido" cierra el modal.

**Resultado obtenido**

Falta dato: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Cargar el valor y re-ejecutar.

**Observación**

Falta dato: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Cargar el valor y re-ejecutar.

---

### TC-40-APP-010 - Verificar que "Agregar" en un similar muestra "En carro X un." dentro del modal [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-40.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- {SKU_PRODS_SIMILARES} no tiene stock para el método de entrega activo y tiene productos similares con stock

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_PRODS_SIMILARES} = 000000000000628239-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_PRODS_SIMILARES} y abre su PDP.
3. El sistema carga la PDP con el producto marcado sin stock y el botón "Ver similares".
4. El usuario toca "Ver similares".
5. El sistema abre el bottom sheet "Productos similares" con la lista de productos similares.
6. El usuario toca "Agregar" en el primer producto similar.
7. El sistema muestra en ese producto el bloque "En carro 1 un." con los controles +/−, dentro del bottom sheet.
8. El usuario toca "+" en ese producto.
9. El sistema actualiza el bloque a "En carro 2 un.".

**Resultado esperado**

El producto muestra "En carro 2 un." con controles +/− y el usuario puede seguir revisando los demás similares.

**Resultado obtenido**

Causa: el modal «Productos similares» no se abre en esta build, así que no se puede verificar su contenido (ver B2C-1399 y B2C-1400). Acción: re-ejecutar cuando se corrijan.

**Observación**

Causa: el modal «Productos similares» no se abre en esta build, así que no se puede verificar su contenido (ver B2C-1399 y B2C-1400). Acción: re-ejecutar cuando se corrijan.

---

### TC-40-APP-011 - Verificar que los similares elegidos no se agregan al carro hasta tocar "Reemplazar productos" [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-40.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- {SKU_PRODS_SIMILARES} no tiene stock para el método de entrega activo y tiene productos similares con stock

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_PRODS_SIMILARES} = 000000000000628239-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario anota el contador del ícono del carro.
3. El usuario busca {SKU_PRODS_SIMILARES} y abre su PDP.
4. El sistema carga la PDP con el producto marcado sin stock y el botón "Ver similares".
5. El usuario toca "Ver similares".
6. El sistema abre el bottom sheet "Productos similares" con la lista de productos similares.
7. El usuario toca "Agregar" en el primer producto similar.
8. El sistema muestra en ese producto el bloque "En carro 1 un." con los controles +/−, dentro del bottom sheet.

**Resultado esperado**

El contador del ícono del carro sigue igual al anotado mientras no se toca "Reemplazar productos".

**Resultado obtenido**

Causa: el modal «Productos similares» no se abre en esta build, así que no se puede verificar su contenido (ver B2C-1399 y B2C-1400). Acción: re-ejecutar cuando se corrijan.

**Observación**

Causa: el modal «Productos similares» no se abre en esta build, así que no se puede verificar su contenido (ver B2C-1399 y B2C-1400). Acción: re-ejecutar cuando se corrijan.

---

### TC-40-APP-012 - Verificar que "Reemplazar productos" desde la PDP agrega los similares al carro y cierra el modal [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-40.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: PDP
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- {SKU_PRODS_SIMILARES} no tiene stock para el método de entrega activo y tiene productos similares con stock

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_PRODS_SIMILARES} = 000000000000628239-UN
- {COMPRADOR_USER} = 11.223.344-K
- {COMPRADOR_PASSWORD} = [contraseña omitida]

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario anota el contador del ícono del carro.
3. El usuario busca {SKU_PRODS_SIMILARES} y abre su PDP.
4. El sistema carga la PDP con el producto marcado sin stock y el botón "Ver similares".
5. El usuario toca "Ver similares".
6. El sistema abre el bottom sheet "Productos similares" con la lista de productos similares.
7. El usuario toca "Agregar" en el primer producto similar.
8. El sistema muestra en ese producto el bloque "En carro 1 un." con los controles +/−, dentro del bottom sheet.
9. El usuario toca "Reemplazar productos".
10. El sistema agrega el producto al carro y cierra el modal.

**Resultado esperado**

El modal se cierra, el contador del carro aumenta en 1 respecto del anotado y el similar aparece en el carro.

**Resultado obtenido**

Causa: la PDP del producto sin stock no tiene el botón «Ver similares» (ver B2C-1400) y el modal «Productos similares» no se abre en esta build (ver B2C-1399). Acción: re-ejecutar cuando se corrijan.

**Observación**

Causa: la PDP del producto sin stock no tiene el botón «Ver similares» (ver B2C-1400) y el modal «Productos similares» no se abre en esta build (ver B2C-1399). Acción: re-ejecutar cuando se corrijan.

---

### TC-40-APP-013 - Verificar que reemplazar desde el carro mueve el similar a disponibles y quita el original [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-40.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_PRODS_SIMILARES} x 1, sin stock en la tienda activa (sección de productos no disponibles)

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_PRODS_SIMILARES} = 000000000000628239-UN
- {COMPRADOR_USER} = 11.223.344-K
- {COMPRADOR_PASSWORD} = [contraseña omitida]

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario toca el ícono del carro.
3. El sistema carga el carrito con {SKU_PRODS_SIMILARES} en no disponibles (Faltantes: 1 un).
4. El usuario anota el Subtotal.
5. El usuario toca "Reemplazar" en {SKU_PRODS_SIMILARES}.
6. El sistema abre el bottom sheet "Productos similares" con la lista de productos similares.
7. El usuario toca "Agregar" en el primer producto similar.
8. El sistema muestra en ese producto el bloque "En carro 1 un." con los controles +/−, dentro del bottom sheet.
9. El usuario toca "Reemplazar productos".
10. El sistema cierra el modal, agrega el similar a la sección de disponibles, elimina {SKU_PRODS_SIMILARES} de no disponibles y recalcula los totales.

**Resultado esperado**

El similar aparece en disponibles, {SKU_PRODS_SIMILARES} ya no está en no disponibles y el Subtotal aumenta en el precio del similar.

**Resultado obtenido**

Dato que no cumple la precondición: {SKU_PRODS_SIMILARES} aparece «Pronto disponible» y sin botón «Agregar» en la tienda de {DIRECCION_DESPACHO_001}, así que no se puede dejar en el carro como no disponible. Se necesita una tienda con stock de ese SKU para agregarlo y luego cambiar a la tienda sin stock. Verificado en Android.

**Observación**

Dato que no cumple la precondición: {SKU_PRODS_SIMILARES} aparece «Pronto disponible» y sin botón «Agregar» en la tienda de {DIRECCION_DESPACHO_001}, así que no se puede dejar en el carro como no disponible. Se necesita una tienda con stock de ese SKU para agregarlo y luego cambiar a la tienda sin stock. Verificado en Android.

---

### TC-40-APP-014 - Verificar que un reemplazo parcial deja el original con la cantidad no cubierta [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-40.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_PRODS_SIMILARES} x {UNIDADES_CARRITO_INICIAL_2}, sin stock en la tienda activa

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_PRODS_SIMILARES} = 000000000000628239-UN
- {UNIDADES_CARRITO_INICIAL_2} = 2
- {COMPRADOR_USER} = 11.223.344-K
- {COMPRADOR_PASSWORD} = [contraseña omitida]

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario toca el ícono del carro.
3. El sistema carga el carrito con {SKU_PRODS_SIMILARES} en no disponibles (Faltantes: {UNIDADES_CARRITO_INICIAL_2} un).
4. El usuario toca "Reemplazar" en {SKU_PRODS_SIMILARES}.
5. El sistema abre el bottom sheet "Productos similares" con la lista de productos similares.
6. El usuario toca "Agregar" en el primer producto similar.
7. El sistema muestra en ese producto el bloque "En carro 1 un." con los controles +/−, dentro del bottom sheet.
8. El usuario toca "Reemplazar productos".
9. El sistema cierra el modal, agrega 1 unidad del similar a disponibles y recalcula los totales.

**Resultado esperado**

El similar aparece en disponibles con 1 un. y {SKU_PRODS_SIMILARES} sigue en no disponibles con "Faltantes: 1 un".

**Resultado obtenido**

Dato que no cumple la precondición: {SKU_PRODS_SIMILARES} aparece «Pronto disponible» y sin botón «Agregar» en la tienda de {DIRECCION_DESPACHO_001}, así que no se puede dejar en el carro como no disponible. Se necesita una tienda con stock de ese SKU para agregarlo y luego cambiar a la tienda sin stock. Verificado en Android.

**Observación**

Dato que no cumple la precondición: {SKU_PRODS_SIMILARES} aparece «Pronto disponible» y sin botón «Agregar» en la tienda de {DIRECCION_DESPACHO_001}, así que no se puede dejar en el carro como no disponible. Se necesita una tienda con stock de ese SKU para agregarlo y luego cambiar a la tienda sin stock. Verificado en Android.

---

### TC-40-APP-015 - Verificar que cerrar el modal con la X descarta la selección y deja el carro sin cambios [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-40.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- {SKU_PRODS_SIMILARES} no tiene stock para el método de entrega activo y tiene productos similares con stock

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_PRODS_SIMILARES} = 000000000000628239-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario anota el contador del ícono del carro.
3. El usuario busca {SKU_PRODS_SIMILARES} y abre su PDP.
4. El sistema carga la PDP con el producto marcado sin stock y el botón "Ver similares".
5. El usuario toca "Ver similares".
6. El sistema abre el bottom sheet "Productos similares" con la lista de productos similares.
7. El usuario toca "Agregar" en el primer producto similar.
8. El sistema muestra en ese producto el bloque "En carro 1 un." con los controles +/−, dentro del bottom sheet.
9. El usuario toca la X del modal.
10. El sistema cierra el modal y muestra la PDP de {SKU_PRODS_SIMILARES}.

**Resultado esperado**

El usuario vuelve a la PDP y el contador del carro sigue igual al anotado.

**Resultado obtenido**

Causa: el modal «Productos similares» no se abre en esta build, así que no se puede verificar su contenido (ver B2C-1399 y B2C-1400). Acción: re-ejecutar cuando se corrijan.

**Observación**

Causa: el modal «Productos similares» no se abre en esta build, así que no se puede verificar su contenido (ver B2C-1399 y B2C-1400). Acción: re-ejecutar cuando se corrijan.

---

### TC-40-APP-016 - Verificar que tocar fuera del modal descarta la selección y deja el carro sin cambios [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-40.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- {SKU_PRODS_SIMILARES} no tiene stock para el método de entrega activo y tiene productos similares con stock

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_PRODS_SIMILARES} = 000000000000628239-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario anota el contador del ícono del carro.
3. El usuario busca {SKU_PRODS_SIMILARES} y abre su PDP.
4. El sistema carga la PDP con el producto marcado sin stock y el botón "Ver similares".
5. El usuario toca "Ver similares".
6. El sistema abre el bottom sheet "Productos similares" con la lista de productos similares.
7. El usuario toca "Agregar" en el primer producto similar.
8. El sistema muestra en ese producto el bloque "En carro 1 un." con los controles +/−, dentro del bottom sheet.
9. El usuario toca fuera del área del bottom sheet.
10. El sistema cierra el modal y muestra la PDP de {SKU_PRODS_SIMILARES}.

**Resultado esperado**

El usuario vuelve a la PDP y el contador del carro sigue igual al anotado.

**Resultado obtenido**

Causa: el modal «Productos similares» no se abre en esta build, así que no se puede verificar su contenido (ver B2C-1399 y B2C-1400). Acción: re-ejecutar cuando se corrijan.

**Observación**

Causa: el modal «Productos similares» no se abre en esta build, así que no se puede verificar su contenido (ver B2C-1399 y B2C-1400). Acción: re-ejecutar cuando se corrijan.

---

### TC-40-APP-017 - Verificar que deslizar el bottom sheet hacia abajo descarta la selección y deja el carro sin cambios [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-40.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- {SKU_PRODS_SIMILARES} no tiene stock para el método de entrega activo y tiene productos similares con stock

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_PRODS_SIMILARES} = 000000000000628239-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario anota el contador del ícono del carro.
3. El usuario busca {SKU_PRODS_SIMILARES} y abre su PDP.
4. El sistema carga la PDP con el producto marcado sin stock y el botón "Ver similares".
5. El usuario toca "Ver similares".
6. El sistema abre el bottom sheet "Productos similares" con la lista de productos similares.
7. El usuario toca "Agregar" en el primer producto similar.
8. El sistema muestra en ese producto el bloque "En carro 1 un." con los controles +/−, dentro del bottom sheet.
9. El usuario desliza el bottom sheet hacia abajo.
10. El sistema cierra el modal y muestra la PDP de {SKU_PRODS_SIMILARES}.

**Resultado esperado**

El usuario vuelve a la PDP y el contador del carro sigue igual al anotado.

**Resultado obtenido**

Causa: el modal «Productos similares» no se abre en esta build, así que no se puede verificar su contenido (ver B2C-1399 y B2C-1400). Acción: re-ejecutar cuando se corrijan.

**Observación**

Causa: el modal «Productos similares» no se abre en esta build, así que no se puede verificar su contenido (ver B2C-1399 y B2C-1400). Acción: re-ejecutar cuando se corrijan.

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "devices": {
   "Android": "dispositivo por ADB"
  },
  "environment": "App Unimarc v1.0.1 (DEV)",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-40 APP",
  "tc_file": "Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-40 APP Test Cases.xlsx",
  "title": "B2C-40 APP - Evidencias QA (Android)",
  "updated_at": "2026-10-29"
 },
 "history": {
  "2026-10-29": [
   "TC-40-APP-001",
   "TC-40-APP-002",
   "TC-40-APP-003",
   "TC-40-APP-004",
   "TC-40-APP-005",
   "TC-40-APP-006",
   "TC-40-APP-007",
   "TC-40-APP-008",
   "TC-40-APP-009",
   "TC-40-APP-010",
   "TC-40-APP-011",
   "TC-40-APP-012",
   "TC-40-APP-013",
   "TC-40-APP-014",
   "TC-40-APP-015",
   "TC-40-APP-016",
   "TC-40-APP-017"
  ]
 },
 "results": [
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se abre el modal \"Productos similares\" para {SKU_PRODS_SIMILARES}.",
   "form_factor": "app",
   "id": "TC-40-APP-001",
   "name": "Verificar que \"Ver similares\" en un shelf de navegación abre el modal de productos similares [App] [Guest]",
   "observation": "Esperado: se abre el modal «Productos similares». Obtenido: «Ver similares» del shelf sin stock abre la PDP del producto y no el modal. Bug B2C-1399. spec: tests-app/B2C-40.spec.ts:41",
   "observed": "Esperado: se abre el modal «Productos similares». Obtenido: «Ver similares» del shelf sin stock abre la PDP del producto y no el modal. Bug B2C-1399. spec: tests-app/B2C-40.spec.ts:41",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- {SKU_PRODS_SIMILARES} no tiene stock para el método de entrega activo y tiene productos similares con stock\n- {SKU_PRODS_SIMILARES} aparece en la PLP de {PLP_URL}",
   "spec": "tests-app/B2C-40.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario navega a la PLP equivalente a {PLP_URL}.\n3. El sistema carga la PLP con {SKU_PRODS_SIMILARES} marcado sin stock y el botón \"Ver similares\" en su shelf.\n4. El usuario toca \"Ver similares\".\n5. El sistema abre el bottom sheet \"Productos similares\" con la lista de productos similares.",
   "test_data": "- {APP_BUILD} = TBD\n- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n- {SKU_PRODS_SIMILARES} = 000000000000628239-UN"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se abre el modal \"Productos similares\" para {SKU_PRODS_SIMILARES}.",
   "form_factor": "app",
   "id": "TC-40-APP-002",
   "name": "Verificar que \"Ver similares\" en la PDP de un producto sin stock abre el modal [App] [Guest]",
   "observation": "Esperado: la PDP del producto sin stock muestra «Ver similares» y abre el modal. Obtenido: la PDP muestra «Pronto disponible» pero no tiene el botón. Bug B2C-1400. spec: tests-app/B2C-40.spec.ts:57",
   "observed": "Esperado: la PDP del producto sin stock muestra «Ver similares» y abre el modal. Obtenido: la PDP muestra «Pronto disponible» pero no tiene el botón. Bug B2C-1400. spec: tests-app/B2C-40.spec.ts:57",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- {SKU_PRODS_SIMILARES} no tiene stock para el método de entrega activo y tiene productos similares con stock",
   "spec": "tests-app/B2C-40.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_PRODS_SIMILARES} y abre su PDP.\n3. El sistema carga la PDP con el producto marcado sin stock y el botón \"Ver similares\".\n4. El usuario toca \"Ver similares\".\n5. El sistema abre el bottom sheet \"Productos similares\" con la lista de productos similares.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_PRODS_SIMILARES} = 000000000000628239-UN"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se abre el modal \"Productos similares\" para {SKU_PRODS_SIMILARES}.",
   "form_factor": "app",
   "id": "TC-40-APP-003",
   "name": "Verificar que \"Reemplazar\" en un producto no disponible del carro abre el modal de similares [App] [Logueado]",
   "observation": "Dato que no cumple la precondición: {SKU_PRODS_SIMILARES} aparece «Pronto disponible» y sin botón «Agregar» en la tienda de {DIRECCION_DESPACHO_001}, así que no se puede dejar en el carro como no disponible. Se necesita una tienda con stock de ese SKU para agregarlo y luego cambiar a la tienda sin stock. Verificado en Android.",
   "observed": "Dato que no cumple la precondición: {SKU_PRODS_SIMILARES} aparece «Pronto disponible» y sin botón «Agregar» en la tienda de {DIRECCION_DESPACHO_001}, así que no se puede dejar en el carro como no disponible. Se necesita una tienda con stock de ese SKU para agregarlo y luego cambiar a la tienda sin stock. Verificado en Android.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_PRODS_SIMILARES}, sin stock en la tienda activa (sección de productos no disponibles)",
   "spec": "tests-app/B2C-40.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario toca el ícono del carro.\n3. El sistema carga el carrito con {SKU_PRODS_SIMILARES} en la sección de productos no disponibles.\n4. El usuario toca \"Reemplazar\" en {SKU_PRODS_SIMILARES}.\n5. El sistema abre el bottom sheet \"Productos similares\" con la lista de productos similares.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_PRODS_SIMILARES} = 000000000000628239-UN\n- {COMPRADOR_USER} = 11.223.344-K\n- {COMPRADOR_PASSWORD} = [contraseña omitida]"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El modal aparece como bottom sheet que sube desde la parte inferior, sobre la PDP.",
   "form_factor": "app",
   "id": "TC-40-APP-004",
   "name": "Verificar que el modal de similares se muestra como bottom sheet deslizable desde abajo [App] [Guest]",
   "observation": "Causa: el modal «Productos similares» no se abre en esta build, así que no se puede verificar su contenido (ver B2C-1399 y B2C-1400). Acción: re-ejecutar cuando se corrijan.",
   "observed": "Causa: el modal «Productos similares» no se abre en esta build, así que no se puede verificar su contenido (ver B2C-1399 y B2C-1400). Acción: re-ejecutar cuando se corrijan.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- {SKU_PRODS_SIMILARES} no tiene stock para el método de entrega activo y tiene productos similares con stock",
   "spec": "tests-app/B2C-40.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_PRODS_SIMILARES} y abre su PDP.\n3. El sistema carga la PDP con el producto marcado sin stock y el botón \"Ver similares\".\n4. El usuario toca \"Ver similares\".\n5. El sistema despliega el modal desde la parte inferior de la pantalla como bottom sheet sobre la PDP.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_PRODS_SIMILARES} = 000000000000628239-UN"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El modal muestra todos los elementos del CA3 y \"Reemplazar productos\" permanece fijo en la parte inferior al hacer scroll en la lista.",
   "form_factor": "app",
   "id": "TC-40-APP-005",
   "name": "Verificar que el modal muestra título, X, producto original, similares y \"Reemplazar productos\" [App] [Guest]",
   "observation": "Causa: el modal «Productos similares» no se abre en esta build, así que no se puede verificar su contenido (ver B2C-1399 y B2C-1400). Acción: re-ejecutar cuando se corrijan.",
   "observed": "Causa: el modal «Productos similares» no se abre en esta build, así que no se puede verificar su contenido (ver B2C-1399 y B2C-1400). Acción: re-ejecutar cuando se corrijan.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- {SKU_PRODS_SIMILARES} no tiene stock para el método de entrega activo y tiene productos similares con stock",
   "spec": "tests-app/B2C-40.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_PRODS_SIMILARES} y abre su PDP.\n3. El sistema carga la PDP con el producto marcado sin stock y el botón \"Ver similares\".\n4. El usuario toca \"Ver similares\".\n5. El sistema muestra el título \"Productos similares\", el botón cerrar (X), la miniatura y el nombre de {SKU_PRODS_SIMILARES}, la lista de similares en shelf simplificada (imagen, marca | nombre, precios, \"Agregar\") y el botón \"Reemplazar productos\" fijo abajo.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_PRODS_SIMILARES} = 000000000000628239-UN"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Mientras se obtienen los similares el modal muestra el skeleton de carga.",
   "form_factor": "app",
   "id": "TC-40-APP-006",
   "name": "Verificar que el modal muestra un skeleton mientras carga los productos similares [App] [Guest]",
   "observation": "Falta dato: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Cargar el valor y re-ejecutar.",
   "observed": "Falta dato: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Cargar el valor y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- {SKU_PRODS_SIMILARES} no tiene stock para el método de entrega activo y tiene productos similares con stock\n- {HERRAMIENTA_PROXY_APP} configurado con throttling de red lenta",
   "spec": "tests-app/B2C-40.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_PRODS_SIMILARES} y abre su PDP.\n3. El sistema carga la PDP con el producto marcado sin stock y el botón \"Ver similares\".\n4. El usuario toca \"Ver similares\".\n5. El sistema abre el modal con un skeleton de carga y, al recibir la respuesta, lo reemplaza por la lista de similares.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_PRODS_SIMILARES} = 000000000000628239-UN\n- {HERRAMIENTA_PROXY_APP} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Todos los similares tienen el botón \"Agregar\" habilitado y precio vigente; no aparece ningún producto sin stock.",
   "form_factor": "app",
   "id": "TC-40-APP-007",
   "name": "Verificar que el modal lista solo similares con stock para el método de entrega activo [App] [Guest]",
   "observation": "Causa: el modal «Productos similares» no se abre en esta build, así que no se puede verificar su contenido (ver B2C-1399 y B2C-1400). Acción: re-ejecutar cuando se corrijan.",
   "observed": "Causa: el modal «Productos similares» no se abre en esta build, así que no se puede verificar su contenido (ver B2C-1399 y B2C-1400). Acción: re-ejecutar cuando se corrijan.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- {SKU_PRODS_SIMILARES} no tiene stock para el método de entrega activo y tiene productos similares con stock\n- Hay un método de entrega activo",
   "spec": "tests-app/B2C-40.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_PRODS_SIMILARES} y abre su PDP.\n3. El sistema carga la PDP con el producto marcado sin stock y el botón \"Ver similares\".\n4. El usuario toca \"Ver similares\".\n5. El sistema abre el bottom sheet \"Productos similares\" con la lista de productos similares.\n6. El usuario revisa todos los productos de la lista.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_PRODS_SIMILARES} = 000000000000628239-UN"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra el estado vacío con \"Error NAV015\" y \"Entendido\" cierra el modal.",
   "form_factor": "app",
   "id": "TC-40-APP-008",
   "name": "Verificar que sin productos similares se muestra el estado vacío con NAV015 [App] [Guest]",
   "observation": "Causa: el modal «Productos similares» no se abre en esta build, así que no se puede verificar su contenido (ver B2C-1399 y B2C-1400). Acción: re-ejecutar cuando se corrijan.",
   "observed": "Causa: el modal «Productos similares» no se abre en esta build, así que no se puede verificar su contenido (ver B2C-1399 y B2C-1400). Acción: re-ejecutar cuando se corrijan.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- {SKU_SIN_SIMILARES} no tiene stock y Einstein no retorna similares para él",
   "spec": "tests-app/B2C-40.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_SIN_SIMILARES} y abre su PDP.\n3. El sistema carga la PDP con el botón \"Ver similares\".\n4. El usuario toca \"Ver similares\".\n5. El sistema muestra en el modal la imagen, el mensaje \"¡Ups! Lo sentimos. El producto que buscamos no tiene otros similares\", \"Error NAV015\" y el botón \"Entendido\".\n6. El usuario toca \"Entendido\".\n7. El sistema cierra el modal.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_SIN_SIMILARES} = 000000000000675191-UN"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra el estado de error con \"Error NAV016\" y \"Entendido\" cierra el modal.",
   "form_factor": "app",
   "id": "TC-40-APP-009",
   "name": "Verificar que un error de Einstein muestra el estado de error con NAV016 [App] [Guest]",
   "observation": "Falta dato: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Cargar el valor y re-ejecutar.",
   "observed": "Falta dato: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Cargar el valor y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- {SKU_PRODS_SIMILARES} no tiene stock para el método de entrega activo y tiene productos similares con stock\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request a Einstein Recommendations",
   "spec": "tests-app/B2C-40.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_PRODS_SIMILARES} y abre su PDP.\n3. El sistema carga la PDP con el producto marcado sin stock y el botón \"Ver similares\".\n4. El usuario toca \"Ver similares\".\n5. El sistema muestra en el modal la imagen, el mensaje de error, \"Error NAV016\" y el botón \"Entendido\".\n6. El usuario toca \"Entendido\".\n7. El sistema cierra el modal.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_PRODS_SIMILARES} = 000000000000628239-UN\n- {HERRAMIENTA_PROXY_APP} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El producto muestra \"En carro 2 un.\" con controles +/− y el usuario puede seguir revisando los demás similares.",
   "form_factor": "app",
   "id": "TC-40-APP-010",
   "name": "Verificar que \"Agregar\" en un similar muestra \"En carro X un.\" dentro del modal [App] [Guest]",
   "observation": "Causa: el modal «Productos similares» no se abre en esta build, así que no se puede verificar su contenido (ver B2C-1399 y B2C-1400). Acción: re-ejecutar cuando se corrijan.",
   "observed": "Causa: el modal «Productos similares» no se abre en esta build, así que no se puede verificar su contenido (ver B2C-1399 y B2C-1400). Acción: re-ejecutar cuando se corrijan.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- {SKU_PRODS_SIMILARES} no tiene stock para el método de entrega activo y tiene productos similares con stock",
   "spec": "tests-app/B2C-40.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_PRODS_SIMILARES} y abre su PDP.\n3. El sistema carga la PDP con el producto marcado sin stock y el botón \"Ver similares\".\n4. El usuario toca \"Ver similares\".\n5. El sistema abre el bottom sheet \"Productos similares\" con la lista de productos similares.\n6. El usuario toca \"Agregar\" en el primer producto similar.\n7. El sistema muestra en ese producto el bloque \"En carro 1 un.\" con los controles +/−, dentro del bottom sheet.\n8. El usuario toca \"+\" en ese producto.\n9. El sistema actualiza el bloque a \"En carro 2 un.\".",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_PRODS_SIMILARES} = 000000000000628239-UN"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El contador del ícono del carro sigue igual al anotado mientras no se toca \"Reemplazar productos\".",
   "form_factor": "app",
   "id": "TC-40-APP-011",
   "name": "Verificar que los similares elegidos no se agregan al carro hasta tocar \"Reemplazar productos\" [App] [Guest]",
   "observation": "Causa: el modal «Productos similares» no se abre en esta build, así que no se puede verificar su contenido (ver B2C-1399 y B2C-1400). Acción: re-ejecutar cuando se corrijan.",
   "observed": "Causa: el modal «Productos similares» no se abre en esta build, así que no se puede verificar su contenido (ver B2C-1399 y B2C-1400). Acción: re-ejecutar cuando se corrijan.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- {SKU_PRODS_SIMILARES} no tiene stock para el método de entrega activo y tiene productos similares con stock",
   "spec": "tests-app/B2C-40.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario anota el contador del ícono del carro.\n3. El usuario busca {SKU_PRODS_SIMILARES} y abre su PDP.\n4. El sistema carga la PDP con el producto marcado sin stock y el botón \"Ver similares\".\n5. El usuario toca \"Ver similares\".\n6. El sistema abre el bottom sheet \"Productos similares\" con la lista de productos similares.\n7. El usuario toca \"Agregar\" en el primer producto similar.\n8. El sistema muestra en ese producto el bloque \"En carro 1 un.\" con los controles +/−, dentro del bottom sheet.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_PRODS_SIMILARES} = 000000000000628239-UN"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El modal se cierra, el contador del carro aumenta en 1 respecto del anotado y el similar aparece en el carro.",
   "form_factor": "app",
   "id": "TC-40-APP-012",
   "name": "Verificar que \"Reemplazar productos\" desde la PDP agrega los similares al carro y cierra el modal [App] [Logueado]",
   "observation": "Causa: la PDP del producto sin stock no tiene el botón «Ver similares» (ver B2C-1400) y el modal «Productos similares» no se abre en esta build (ver B2C-1399). Acción: re-ejecutar cuando se corrijan.",
   "observed": "Causa: la PDP del producto sin stock no tiene el botón «Ver similares» (ver B2C-1400) y el modal «Productos similares» no se abre en esta build (ver B2C-1399). Acción: re-ejecutar cuando se corrijan.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: PDP\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- {SKU_PRODS_SIMILARES} no tiene stock para el método de entrega activo y tiene productos similares con stock",
   "spec": "tests-app/B2C-40.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario anota el contador del ícono del carro.\n3. El usuario busca {SKU_PRODS_SIMILARES} y abre su PDP.\n4. El sistema carga la PDP con el producto marcado sin stock y el botón \"Ver similares\".\n5. El usuario toca \"Ver similares\".\n6. El sistema abre el bottom sheet \"Productos similares\" con la lista de productos similares.\n7. El usuario toca \"Agregar\" en el primer producto similar.\n8. El sistema muestra en ese producto el bloque \"En carro 1 un.\" con los controles +/−, dentro del bottom sheet.\n9. El usuario toca \"Reemplazar productos\".\n10. El sistema agrega el producto al carro y cierra el modal.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_PRODS_SIMILARES} = 000000000000628239-UN\n- {COMPRADOR_USER} = 11.223.344-K\n- {COMPRADOR_PASSWORD} = [contraseña omitida]"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El similar aparece en disponibles, {SKU_PRODS_SIMILARES} ya no está en no disponibles y el Subtotal aumenta en el precio del similar.",
   "form_factor": "app",
   "id": "TC-40-APP-013",
   "name": "Verificar que reemplazar desde el carro mueve el similar a disponibles y quita el original [App] [Logueado]",
   "observation": "Dato que no cumple la precondición: {SKU_PRODS_SIMILARES} aparece «Pronto disponible» y sin botón «Agregar» en la tienda de {DIRECCION_DESPACHO_001}, así que no se puede dejar en el carro como no disponible. Se necesita una tienda con stock de ese SKU para agregarlo y luego cambiar a la tienda sin stock. Verificado en Android.",
   "observed": "Dato que no cumple la precondición: {SKU_PRODS_SIMILARES} aparece «Pronto disponible» y sin botón «Agregar» en la tienda de {DIRECCION_DESPACHO_001}, así que no se puede dejar en el carro como no disponible. Se necesita una tienda con stock de ese SKU para agregarlo y luego cambiar a la tienda sin stock. Verificado en Android.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_PRODS_SIMILARES} x 1, sin stock en la tienda activa (sección de productos no disponibles)",
   "spec": "tests-app/B2C-40.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario toca el ícono del carro.\n3. El sistema carga el carrito con {SKU_PRODS_SIMILARES} en no disponibles (Faltantes: 1 un).\n4. El usuario anota el Subtotal.\n5. El usuario toca \"Reemplazar\" en {SKU_PRODS_SIMILARES}.\n6. El sistema abre el bottom sheet \"Productos similares\" con la lista de productos similares.\n7. El usuario toca \"Agregar\" en el primer producto similar.\n8. El sistema muestra en ese producto el bloque \"En carro 1 un.\" con los controles +/−, dentro del bottom sheet.\n9. El usuario toca \"Reemplazar productos\".\n10. El sistema cierra el modal, agrega el similar a la sección de disponibles, elimina {SKU_PRODS_SIMILARES} de no disponibles y recalcula los totales.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_PRODS_SIMILARES} = 000000000000628239-UN\n- {COMPRADOR_USER} = 11.223.344-K\n- {COMPRADOR_PASSWORD} = [contraseña omitida]"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El similar aparece en disponibles con 1 un. y {SKU_PRODS_SIMILARES} sigue en no disponibles con \"Faltantes: 1 un\".",
   "form_factor": "app",
   "id": "TC-40-APP-014",
   "name": "Verificar que un reemplazo parcial deja el original con la cantidad no cubierta [App] [Logueado]",
   "observation": "Dato que no cumple la precondición: {SKU_PRODS_SIMILARES} aparece «Pronto disponible» y sin botón «Agregar» en la tienda de {DIRECCION_DESPACHO_001}, así que no se puede dejar en el carro como no disponible. Se necesita una tienda con stock de ese SKU para agregarlo y luego cambiar a la tienda sin stock. Verificado en Android.",
   "observed": "Dato que no cumple la precondición: {SKU_PRODS_SIMILARES} aparece «Pronto disponible» y sin botón «Agregar» en la tienda de {DIRECCION_DESPACHO_001}, así que no se puede dejar en el carro como no disponible. Se necesita una tienda con stock de ese SKU para agregarlo y luego cambiar a la tienda sin stock. Verificado en Android.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_PRODS_SIMILARES} x {UNIDADES_CARRITO_INICIAL_2}, sin stock en la tienda activa",
   "spec": "tests-app/B2C-40.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario toca el ícono del carro.\n3. El sistema carga el carrito con {SKU_PRODS_SIMILARES} en no disponibles (Faltantes: {UNIDADES_CARRITO_INICIAL_2} un).\n4. El usuario toca \"Reemplazar\" en {SKU_PRODS_SIMILARES}.\n5. El sistema abre el bottom sheet \"Productos similares\" con la lista de productos similares.\n6. El usuario toca \"Agregar\" en el primer producto similar.\n7. El sistema muestra en ese producto el bloque \"En carro 1 un.\" con los controles +/−, dentro del bottom sheet.\n8. El usuario toca \"Reemplazar productos\".\n9. El sistema cierra el modal, agrega 1 unidad del similar a disponibles y recalcula los totales.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_PRODS_SIMILARES} = 000000000000628239-UN\n- {UNIDADES_CARRITO_INICIAL_2} = 2\n- {COMPRADOR_USER} = 11.223.344-K\n- {COMPRADOR_PASSWORD} = [contraseña omitida]"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El usuario vuelve a la PDP y el contador del carro sigue igual al anotado.",
   "form_factor": "app",
   "id": "TC-40-APP-015",
   "name": "Verificar que cerrar el modal con la X descarta la selección y deja el carro sin cambios [App] [Guest]",
   "observation": "Causa: el modal «Productos similares» no se abre en esta build, así que no se puede verificar su contenido (ver B2C-1399 y B2C-1400). Acción: re-ejecutar cuando se corrijan.",
   "observed": "Causa: el modal «Productos similares» no se abre en esta build, así que no se puede verificar su contenido (ver B2C-1399 y B2C-1400). Acción: re-ejecutar cuando se corrijan.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- {SKU_PRODS_SIMILARES} no tiene stock para el método de entrega activo y tiene productos similares con stock",
   "spec": "tests-app/B2C-40.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario anota el contador del ícono del carro.\n3. El usuario busca {SKU_PRODS_SIMILARES} y abre su PDP.\n4. El sistema carga la PDP con el producto marcado sin stock y el botón \"Ver similares\".\n5. El usuario toca \"Ver similares\".\n6. El sistema abre el bottom sheet \"Productos similares\" con la lista de productos similares.\n7. El usuario toca \"Agregar\" en el primer producto similar.\n8. El sistema muestra en ese producto el bloque \"En carro 1 un.\" con los controles +/−, dentro del bottom sheet.\n9. El usuario toca la X del modal.\n10. El sistema cierra el modal y muestra la PDP de {SKU_PRODS_SIMILARES}.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_PRODS_SIMILARES} = 000000000000628239-UN"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El usuario vuelve a la PDP y el contador del carro sigue igual al anotado.",
   "form_factor": "app",
   "id": "TC-40-APP-016",
   "name": "Verificar que tocar fuera del modal descarta la selección y deja el carro sin cambios [App] [Guest]",
   "observation": "Causa: el modal «Productos similares» no se abre en esta build, así que no se puede verificar su contenido (ver B2C-1399 y B2C-1400). Acción: re-ejecutar cuando se corrijan.",
   "observed": "Causa: el modal «Productos similares» no se abre en esta build, así que no se puede verificar su contenido (ver B2C-1399 y B2C-1400). Acción: re-ejecutar cuando se corrijan.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- {SKU_PRODS_SIMILARES} no tiene stock para el método de entrega activo y tiene productos similares con stock",
   "spec": "tests-app/B2C-40.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario anota el contador del ícono del carro.\n3. El usuario busca {SKU_PRODS_SIMILARES} y abre su PDP.\n4. El sistema carga la PDP con el producto marcado sin stock y el botón \"Ver similares\".\n5. El usuario toca \"Ver similares\".\n6. El sistema abre el bottom sheet \"Productos similares\" con la lista de productos similares.\n7. El usuario toca \"Agregar\" en el primer producto similar.\n8. El sistema muestra en ese producto el bloque \"En carro 1 un.\" con los controles +/−, dentro del bottom sheet.\n9. El usuario toca fuera del área del bottom sheet.\n10. El sistema cierra el modal y muestra la PDP de {SKU_PRODS_SIMILARES}.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_PRODS_SIMILARES} = 000000000000628239-UN"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El usuario vuelve a la PDP y el contador del carro sigue igual al anotado.",
   "form_factor": "app",
   "id": "TC-40-APP-017",
   "name": "Verificar que deslizar el bottom sheet hacia abajo descarta la selección y deja el carro sin cambios [App] [Guest]",
   "observation": "Causa: el modal «Productos similares» no se abre en esta build, así que no se puede verificar su contenido (ver B2C-1399 y B2C-1400). Acción: re-ejecutar cuando se corrijan.",
   "observed": "Causa: el modal «Productos similares» no se abre en esta build, así que no se puede verificar su contenido (ver B2C-1399 y B2C-1400). Acción: re-ejecutar cuando se corrijan.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- {SKU_PRODS_SIMILARES} no tiene stock para el método de entrega activo y tiene productos similares con stock",
   "spec": "tests-app/B2C-40.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario anota el contador del ícono del carro.\n3. El usuario busca {SKU_PRODS_SIMILARES} y abre su PDP.\n4. El sistema carga la PDP con el producto marcado sin stock y el botón \"Ver similares\".\n5. El usuario toca \"Ver similares\".\n6. El sistema abre el bottom sheet \"Productos similares\" con la lista de productos similares.\n7. El usuario toca \"Agregar\" en el primer producto similar.\n8. El sistema muestra en ese producto el bloque \"En carro 1 un.\" con los controles +/−, dentro del bottom sheet.\n9. El usuario desliza el bottom sheet hacia abajo.\n10. El sistema cierra el modal y muestra la PDP de {SKU_PRODS_SIMILARES}.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_PRODS_SIMILARES} = 000000000000628239-UN"
  }
 ]
}
-->
