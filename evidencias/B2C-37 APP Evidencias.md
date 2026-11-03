# Página del carro en la app (Android)

| Campo | Valor |
|---|---|
| Suite | B2C-37 APP |
| Última actualización | 2026-10-23 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | App Unimarc v1.0.1 (DEV) |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-37 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 24 |
| Aprobado | 17 |
| Bloqueado | 4 |
| Rechazado | 1 |
| **Total** | **46** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-23 | 46 | TC-B2C37-APP-001, TC-B2C37-APP-002, TC-B2C37-APP-003, TC-B2C37-APP-004, TC-B2C37-APP-005, TC-B2C37-APP-006, TC-B2C37-APP-007, TC-B2C37-APP-008, TC-B2C37-APP-010, TC-B2C37-APP-011, TC-B2C37-APP-012, TC-B2C37-APP-013, TC-B2C37-APP-014, TC-B2C37-APP-015, TC-B2C37-APP-016, TC-B2C37-APP-017, TC-B2C37-APP-018, TC-B2C37-APP-019, TC-B2C37-APP-020, TC-B2C37-APP-021, TC-B2C37-APP-022, TC-B2C37-APP-023, TC-B2C37-APP-024, TC-B2C37-APP-025, TC-B2C37-APP-026, TC-B2C37-APP-027, TC-B2C37-APP-028, TC-B2C37-APP-029, TC-B2C37-APP-030, TC-B2C37-APP-031, TC-B2C37-APP-032, TC-B2C37-APP-033, TC-B2C37-APP-034, TC-B2C37-APP-035, TC-B2C37-APP-036, TC-B2C37-APP-037, TC-B2C37-APP-038, TC-B2C37-APP-039, TC-B2C37-APP-040, TC-B2C37-APP-041, TC-B2C37-APP-042, TC-B2C37-APP-043, TC-B2C37-APP-044, TC-B2C37-APP-045, TC-B2C37-APP-046, TC-B2C37-APP-047 |
| 2026-10-21 | 46 | TC-B2C37-APP-001, TC-B2C37-APP-002, TC-B2C37-APP-003, TC-B2C37-APP-004, TC-B2C37-APP-005, TC-B2C37-APP-006, TC-B2C37-APP-007, TC-B2C37-APP-008, TC-B2C37-APP-010, TC-B2C37-APP-011, TC-B2C37-APP-012, TC-B2C37-APP-013, TC-B2C37-APP-014, TC-B2C37-APP-015, TC-B2C37-APP-016, TC-B2C37-APP-017, TC-B2C37-APP-018, TC-B2C37-APP-019, TC-B2C37-APP-020, TC-B2C37-APP-021, TC-B2C37-APP-022, TC-B2C37-APP-023, TC-B2C37-APP-024, TC-B2C37-APP-025, TC-B2C37-APP-026, TC-B2C37-APP-027, TC-B2C37-APP-028, TC-B2C37-APP-029, TC-B2C37-APP-030, TC-B2C37-APP-031, TC-B2C37-APP-032, TC-B2C37-APP-033, TC-B2C37-APP-034, TC-B2C37-APP-035, TC-B2C37-APP-036, TC-B2C37-APP-037, TC-B2C37-APP-038, TC-B2C37-APP-039, TC-B2C37-APP-040, TC-B2C37-APP-041, TC-B2C37-APP-042, TC-B2C37-APP-043, TC-B2C37-APP-044, TC-B2C37-APP-045, TC-B2C37-APP-046, TC-B2C37-APP-047 |

## Detalle por caso de prueba

### TC-B2C37-APP-001 - Verificar que el carrito muestra el layout con ítems disponibles y totales fijos sin Unipay [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-23 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene solo {SKU_VALID_001} (disponible y sin descuento Unipay)

**Data utilizada**

{APP_BUILD} = v1.0.1

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito y muestra el header simplificado "< Mi carrito", el acordeón de ítems disponibles expandido (logo Unimarc + número de ítems + "productos" + ícono de menú ⋯) con la lista de productos.
3. El usuario revisa la parte inferior de la pantalla.
4. El sistema muestra la tarjeta de totales fija solo con "Subtotal", el CTA "Continuar con la entrega" y el footer simplificado.

**Resultado esperado**

El carrito muestra header simplificado, acordeón de disponibles expandido con ícono ⋯ y la tarjeta de totales fija con "Subtotal" (sin "Subtotal con Unipay") y el CTA "Continuar con la entrega".

**Evidencia**

![Android · Paso 5 — mi carro con sku valid 001](<B2C-37 APP Evidencias/TC-B2C37-APP-001-android-p05-mi-carro-con-sku-valid-001.png>)

![Android · Estado final](<B2C-37 APP Evidencias/TC-B2C37-APP-001-android.png>)

---

### TC-B2C37-APP-002 - Verificar que la tarjeta de totales muestra "Subtotal con Unipay" con descuento Unipay [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-23 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_UNIPAY_001} (producto con descuento Unipay)

**Data utilizada**

{APP_BUILD} = v1.0.1

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito y muestra en la tarjeta de totales las líneas "Subtotal" y "Subtotal con Unipay".

**Resultado esperado**

La tarjeta de totales muestra "Subtotal" y "Subtotal con Unipay", con un monto de "Subtotal con Unipay" menor al "Subtotal".

**Resultado obtenido**

Causa: {SKU_UNIPAY_001} no tiene una promo Unipay vigente; la tarjeta de totales solo muestra «Subtotal» y no existe «Subtotal con Unipay» que verificar. Acción: declarar en el Excel de data un SKU con promo Unipay vigente.

**Observación**

Causa: {SKU_UNIPAY_001} no tiene una promo Unipay vigente; la tarjeta de totales solo muestra «Subtotal» y no existe «Subtotal con Unipay» que verificar. Acción: declarar en el Excel de data un SKU con promo Unipay vigente.

**Evidencia**

![Android · Paso 5 — carro con sku unipay 001](<B2C-37 APP Evidencias/TC-B2C37-APP-002-android-p05-carro-con-sku-unipay-001.png>)

![Android · Estado final](<B2C-37 APP Evidencias/TC-B2C37-APP-002-android.png>)

---

### TC-B2C37-APP-003 - Verificar que el menú ⋯ muestra "Guardar como lista" y "Vaciar carro" [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-23 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001}

**Data utilizada**

{APP_BUILD} = v1.0.1

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca el menú de tres puntos (⋯).
4. El sistema despliega las opciones "Guardar como lista" y "Vaciar carro", cada una con su ícono.

**Resultado esperado**

El menú ⋯ muestra "Guardar como lista" + ícono y "Vaciar carro" + ícono.

**Evidencia**

![Android · Paso 5 — menu abierto](<B2C-37 APP Evidencias/TC-B2C37-APP-003-android-p05-menu-abierto.png>)

![Android · Estado final](<B2C-37 APP Evidencias/TC-B2C37-APP-003-android.png>)

---

### TC-B2C37-APP-004 - Verificar que el menú ⋯ muestra solo "Vaciar carro" al usuario invitado [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-23 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-37.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión de invitado (sin iniciar sesión)
- El carro contiene {SKU_VALID_001}

**Data utilizada**

{APP_BUILD} = v1.0.1

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca el menú de tres puntos (⋯).
4. El sistema despliega el menú con la opción "Vaciar carro" + ícono.

**Resultado esperado**

El menú ⋯ muestra "Vaciar carro" + ícono y no muestra "Guardar como lista".

**Resultado obtenido**

Resultado obtenido: el menú ⋯ del carro de un usuario invitado (app con datos borrados, sin sesión) muestra DOS opciones: «Guardar como lista» y «Vaciar Carro». Esperado: solo «Vaciar carro» + ícono, sin «Guardar como lista». Bug: B2C-1331.

**Observación**

Resultado obtenido: el menú ⋯ del carro de un usuario invitado (app con datos borrados, sin sesión) muestra DOS opciones: «Guardar como lista» y «Vaciar Carro». Esperado: solo «Vaciar carro» + ícono, sin «Guardar como lista». Bug: B2C-1331.

**Evidencia**

![Android · Paso 6 — menu del invitado](<B2C-37 APP Evidencias/TC-B2C37-APP-004-android-p06-menu-del-invitado.png>)

![Android · Estado final](<B2C-37 APP Evidencias/TC-B2C37-APP-004-android.png>)

---

### TC-B2C37-APP-005 - Verificar que "Continuar con la entrega" avanza al paso Datos de entrega [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-23 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO}
- El subtotal del carro es mayor o igual a {MONTO_MINIMO_COMPRA} y hay un método de entrega activo

**Data utilizada**

{APP_BUILD} = v1.0.1

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito con el CTA "Continuar con la entrega" habilitado.
3. El usuario toca "Continuar con la entrega".
4. El sistema navega al paso Datos de entrega del checkout.

**Resultado esperado**

El usuario queda en el paso Datos de entrega del checkout.

**Resultado obtenido**

Observación: al tocar «Continuar con la entrega» la app abre primero el modal «¡Que no se te olviden!» (sugeridos) con el botón «Continuar»; al tocarlo llega a «Datos de entrega». El modal intermedio no figura en los pasos del caso.

**Observación**

Observación: al tocar «Continuar con la entrega» la app abre primero el modal «¡Que no se te olviden!» (sugeridos) con el botón «Continuar»; al tocarlo llega a «Datos de entrega». El modal intermedio no figura en los pasos del caso.

**Evidencia**

![Android · Paso 6 — modal que no se te olviden tras continuar con la entrega](<B2C-37 APP Evidencias/TC-B2C37-APP-005-android-p06-modal-que-no-se-te-olviden-tras-continuar-con-la-entrega.png>)

![Android · Estado final](<B2C-37 APP Evidencias/TC-B2C37-APP-005-android.png>)

---

### TC-B2C37-APP-006 - Verificar que "Guardar como lista" del menú ⋯ inicia el flujo de guardado de lista [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-23 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001}

**Data utilizada**

{APP_BUILD} = v1.0.1

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca el menú de tres puntos (⋯).
4. El sistema despliega las opciones "Guardar como lista" y "Vaciar carro".
5. El usuario toca "Guardar como lista".
6. El sistema inicia el flujo de guardar como lista (B2C-54).

**Resultado esperado**

Se inicia el flujo de "Guardar como lista" definido en B2C-54.

**Resultado obtenido**

«Guardar como lista» abre la hoja «Agregar como lista» (Crear nueva lista / listas existentes / Confirmar).

**Observación**

«Guardar como lista» abre la hoja «Agregar como lista» (Crear nueva lista / listas existentes / Confirmar).

**Evidencia**

![Android · Paso 6 — tras tocar guardar como lista hoja agregar como lista](<B2C-37 APP Evidencias/TC-B2C37-APP-006-android-p06-tras-tocar-guardar-como-lista-hoja-agregar-como-lista.png>)

![Android · Estado final](<B2C-37 APP Evidencias/TC-B2C37-APP-006-android.png>)

---

### TC-B2C37-APP-007 - Verificar que el carrito muestra disponibles colapsados y no disponibles expandidos [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-23 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

{APP_BUILD} = v1.0.1

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito y muestra el acordeón de ítems disponibles colapsado (logo Unimarc + número de ítems + "productos" + chevron ↓ + ícono de menú ⋯ y el botón "Mostrar más") con el carrusel de miniaturas de 60×60 px, y el acordeón de ítems no disponibles expandido (ícono de carrito tachado + "Productos no disponibles" + "N productos" + chevron ↓ y el botón "Mostrar más") con la lista completa de ítems no disponibles.

**Resultado esperado**

El acordeón de disponibles se muestra colapsado con carrusel de miniaturas y el de no disponibles expandido con la lista completa de ítems no disponibles.

**Resultado obtenido**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes carne papas zanahoria y espinaca 215 g) no se puede dejar en el carro: su ficha de producto en la app muestra la etiqueta «Pronto disponible» y no tiene botón «Agregar», así que no existe un carro con un ítem no disponible. Acción: declarar en el Excel de data un {SKU_NO_DISPONIBLE} que pueda estar en el carro con estado no disponible (por ejemplo, uno que se agotó después de agregarse).

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes carne papas zanahoria y espinaca 215 g) no se puede dejar en el carro: su ficha de producto en la app muestra la etiqueta «Pronto disponible» y no tiene botón «Agregar», así que no existe un carro con un ítem no disponible. Acción: declarar en el Excel de data un {SKU_NO_DISPONIBLE} que pueda estar en el carro con estado no disponible (por ejemplo, uno que se agotó después de agregarse).

**Evidencia**

![Android · Estado final](<B2C-37 APP Evidencias/TC-B2C37-APP-007-android.png>)

---

### TC-B2C37-APP-008 - Verificar que el carrusel de disponibles muestra el tile "+N" con los ítems restantes [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-23 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKUS_CARRUSEL} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

{APP_BUILD} = v1.0.1

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito con el acordeón de disponibles colapsado y muestra en el carrusel las miniaturas que caben y un tile "+N" en gris.

**Resultado esperado**

El carrusel muestra un tile "+N" en gris donde N es la cantidad de ítems disponibles que no se muestran como miniatura.

**Resultado obtenido**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes carne papas zanahoria y espinaca 215 g) no se puede dejar en el carro: su ficha de producto en la app muestra la etiqueta «Pronto disponible» y no tiene botón «Agregar», así que no existe un carro con un ítem no disponible. Acción: declarar en el Excel de data un {SKU_NO_DISPONIBLE} que pueda estar en el carro con estado no disponible (por ejemplo, uno que se agotó después de agregarse).

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes carne papas zanahoria y espinaca 215 g) no se puede dejar en el carro: su ficha de producto en la app muestra la etiqueta «Pronto disponible» y no tiene botón «Agregar», así que no existe un carro con un ítem no disponible. Acción: declarar en el Excel de data un {SKU_NO_DISPONIBLE} que pueda estar en el carro con estado no disponible (por ejemplo, uno que se agotó después de agregarse).

**Evidencia**

![Android · Estado final](<B2C-37 APP Evidencias/TC-B2C37-APP-008-android.png>)

---

### TC-B2C37-APP-010 - Verificar que una sección colapsada se expande al tocar "Mostrar más" [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-23 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

{APP_BUILD} = v1.0.1

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.
3. El usuario toca el botón "Mostrar más" del acordeón de ítems disponibles.
4. El sistema expande la sección: el botón cambia a "Mostrar menos", el carrusel de miniaturas se oculta y se muestra la lista completa de ítems.

**Resultado esperado**

La sección de ítems disponibles queda expandida: el botón cambia a "Mostrar menos", el carrusel de miniaturas se oculta y se muestra la lista completa de ítems.

**Resultado obtenido**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes carne papas zanahoria y espinaca 215 g) no se puede dejar en el carro: su ficha de producto en la app muestra la etiqueta «Pronto disponible» y no tiene botón «Agregar», así que no existe un carro con un ítem no disponible. Acción: declarar en el Excel de data un {SKU_NO_DISPONIBLE} que pueda estar en el carro con estado no disponible (por ejemplo, uno que se agotó después de agregarse).

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes carne papas zanahoria y espinaca 215 g) no se puede dejar en el carro: su ficha de producto en la app muestra la etiqueta «Pronto disponible» y no tiene botón «Agregar», así que no existe un carro con un ítem no disponible. Acción: declarar en el Excel de data un {SKU_NO_DISPONIBLE} que pueda estar en el carro con estado no disponible (por ejemplo, uno que se agotó después de agregarse).

---

### TC-B2C37-APP-011 - Verificar que una sección expandida se colapsa al tocar "Mostrar menos" [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-23 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

{APP_BUILD} = v1.0.1

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.
3. El usuario toca el botón "Mostrar más" del acordeón de ítems disponibles.
4. El sistema expande la sección: el botón cambia a "Mostrar menos", el carrusel de miniaturas se oculta y se muestra la lista completa de ítems.
5. El usuario toca el botón "Mostrar menos" del acordeón de ítems disponibles.
6. El sistema colapsa la sección: el botón cambia a "Mostrar más", la lista de ítems se oculta y se muestra el carrusel de miniaturas.

**Resultado esperado**

La sección queda colapsada: el botón cambia a "Mostrar más", la lista de ítems se oculta y se muestra el carrusel de miniaturas.

**Resultado obtenido**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes carne papas zanahoria y espinaca 215 g) no se puede dejar en el carro: su ficha de producto en la app muestra la etiqueta «Pronto disponible» y no tiene botón «Agregar», así que no existe un carro con un ítem no disponible. Acción: declarar en el Excel de data un {SKU_NO_DISPONIBLE} que pueda estar en el carro con estado no disponible (por ejemplo, uno que se agotó después de agregarse).

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes carne papas zanahoria y espinaca 215 g) no se puede dejar en el carro: su ficha de producto en la app muestra la etiqueta «Pronto disponible» y no tiene botón «Agregar», así que no existe un carro con un ítem no disponible. Acción: declarar en el Excel de data un {SKU_NO_DISPONIBLE} que pueda estar en el carro con estado no disponible (por ejemplo, uno que se agotó después de agregarse).

---

### TC-B2C37-APP-012 - Verificar que las secciones disponibles y no disponibles cambian de estado de forma independiente [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-23 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

{APP_BUILD} = v1.0.1

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.
3. El usuario toca el botón "Mostrar más" del acordeón de ítems disponibles.
4. El sistema expande la sección de ítems disponibles y mantiene expandida la sección de no disponibles.
5. El usuario toca el botón "Mostrar menos" del acordeón de productos no disponibles.
6. El sistema colapsa la sección de no disponibles y mantiene expandida la sección de ítems disponibles.

**Resultado esperado**

Cada sección cambia de estado sin modificar el estado de la otra (disponibles expandida y no disponibles colapsada al final).

**Resultado obtenido**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes carne papas zanahoria y espinaca 215 g) no se puede dejar en el carro: su ficha de producto en la app muestra la etiqueta «Pronto disponible» y no tiene botón «Agregar», así que no existe un carro con un ítem no disponible. Acción: declarar en el Excel de data un {SKU_NO_DISPONIBLE} que pueda estar en el carro con estado no disponible (por ejemplo, uno que se agotó después de agregarse).

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes carne papas zanahoria y espinaca 215 g) no se puede dejar en el carro: su ficha de producto en la app muestra la etiqueta «Pronto disponible» y no tiene botón «Agregar», así que no existe un carro con un ítem no disponible. Acción: declarar en el Excel de data un {SKU_NO_DISPONIBLE} que pueda estar en el carro con estado no disponible (por ejemplo, uno que se agotó después de agregarse).

---

### TC-B2C37-APP-013 - Verificar que el estado de los acordeones vuelve al inicial al recargar el carrito [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-23 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

{APP_BUILD} = v1.0.1

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.
3. El usuario toca el botón "Mostrar más" del acordeón de ítems disponibles.
4. El sistema expande la sección de ítems disponibles.
5. El usuario sale del carro y vuelve a ingresar tocando el ícono del carro.
6. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.

**Resultado esperado**

Tras recargar o reingresar, el carrito vuelve al estado inicial: disponibles colapsado y no disponibles expandido.

**Resultado obtenido**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes carne papas zanahoria y espinaca 215 g) no se puede dejar en el carro: su ficha de producto en la app muestra la etiqueta «Pronto disponible» y no tiene botón «Agregar», así que no existe un carro con un ítem no disponible. Acción: declarar en el Excel de data un {SKU_NO_DISPONIBLE} que pueda estar en el carro con estado no disponible (por ejemplo, uno que se agotó después de agregarse).

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes carne papas zanahoria y espinaca 215 g) no se puede dejar en el carro: su ficha de producto en la app muestra la etiqueta «Pronto disponible» y no tiene botón «Agregar», así que no existe un carro con un ítem no disponible. Acción: declarar en el Excel de data un {SKU_NO_DISPONIBLE} que pueda estar en el carro con estado no disponible (por ejemplo, uno que se agotó después de agregarse).

---

### TC-B2C37-APP-014 - Verificar que cada ítem disponible muestra imagen, nombre, precios, cantidad y controles [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-23 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene solo {SKU_VALID_001} (disponible)

**Data utilizada**

{APP_BUILD} = v1.0.1

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito con el acordeón de disponibles expandido y muestra por cada ítem: imagen, nombre, precio unitario, precio final (con descuentos), cantidad actual, controles +/− y acción de eliminar.

**Resultado esperado**

Cada ítem disponible muestra imagen, nombre, precio unitario, precio final, cantidad actual, controles +/− y acción de eliminar.

**Evidencia**

![Android · Estado final](<B2C-37 APP Evidencias/TC-B2C37-APP-014-android.png>)

---

### TC-B2C37-APP-015 - Verificar que los ítems disponibles se ordenan del agregado más reciente al más antiguo [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-23 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro está vacío

**Data utilizada**

{APP_BUILD} = v1.0.1

**Pasos ejecutados**

1. El usuario busca {SKU_UNITARIO} en la App y lo agrega al carro.
2. El usuario busca {SKU_PESABLE} en la App y lo agrega al carro.
3. El usuario busca {SKU_VALID_001} en la App y lo agrega al carro.
4. El sistema agrega los tres productos al carro.
5. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
6. El sistema carga el carrito y lista los ítems disponibles en el orden {SKU_VALID_001}, {SKU_PESABLE}, {SKU_UNITARIO}.

**Resultado esperado**

La lista de ítems disponibles muestra primero {SKU_VALID_001}, luego {SKU_PESABLE} y al final {SKU_UNITARIO}.

**Evidencia**

![Android · Paso 6 — carro con tres items](<B2C-37 APP Evidencias/TC-B2C37-APP-015-android-p06-carro-con-tres-items.png>)

![Android · Estado final](<B2C-37 APP Evidencias/TC-B2C37-APP-015-android.png>)

---

### TC-B2C37-APP-016 - Verificar que cada ítem no disponible muestra overlay, badge, faltantes y "Reemplazar" [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-23 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

{APP_BUILD} = v1.0.1

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito y muestra por cada ítem no disponible: imagen con overlay blanco semitransparente, badge "Pronto disponible" (fondo gris, texto gris), nombre, texto "Faltantes: N un" con la cantidad solicitada y CTA "Reemplazar".

**Resultado esperado**

Cada ítem no disponible muestra imagen con overlay, badge "Pronto disponible", nombre, "Faltantes: N un" y CTA "Reemplazar".

**Resultado obtenido**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes carne papas zanahoria y espinaca 215 g) no se puede dejar en el carro: su ficha de producto en la app muestra la etiqueta «Pronto disponible» y no tiene botón «Agregar», así que no existe un carro con un ítem no disponible. Acción: declarar en el Excel de data un {SKU_NO_DISPONIBLE} que pueda estar en el carro con estado no disponible (por ejemplo, uno que se agotó después de agregarse).

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes carne papas zanahoria y espinaca 215 g) no se puede dejar en el carro: su ficha de producto en la app muestra la etiqueta «Pronto disponible» y no tiene botón «Agregar», así que no existe un carro con un ítem no disponible. Acción: declarar en el Excel de data un {SKU_NO_DISPONIBLE} que pueda estar en el carro con estado no disponible (por ejemplo, uno que se agotó después de agregarse).

---

### TC-B2C37-APP-017 - Verificar que los ítems no disponibles no permiten cambiar cantidad ni suman al subtotal [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-23 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

{APP_BUILD} = v1.0.1

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito con el acordeón de no disponibles expandido.
3. El usuario revisa un ítem no disponible y la tarjeta de totales.
4. El sistema muestra el ítem no disponible sin controles +/− y el Subtotal calculado solo con los ítems disponibles.

**Resultado esperado**

El ítem no disponible no tiene controles para modificar la cantidad y el Subtotal corresponde solo a {SKU_VALID_001}.

**Resultado obtenido**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes carne papas zanahoria y espinaca 215 g) no se puede dejar en el carro: su ficha de producto en la app muestra la etiqueta «Pronto disponible» y no tiene botón «Agregar», así que no existe un carro con un ítem no disponible. Acción: declarar en el Excel de data un {SKU_NO_DISPONIBLE} que pueda estar en el carro con estado no disponible (por ejemplo, uno que se agotó después de agregarse).

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes carne papas zanahoria y espinaca 215 g) no se puede dejar en el carro: su ficha de producto en la app muestra la etiqueta «Pronto disponible» y no tiene botón «Agregar», así que no existe un carro con un ítem no disponible. Acción: declarar en el Excel de data un {SKU_NO_DISPONIBLE} que pueda estar en el carro con estado no disponible (por ejemplo, uno que se agotó después de agregarse).

---

### TC-B2C37-APP-018 - Verificar que "Reemplazar" inicia el flujo de productos similares [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-23 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

{APP_BUILD} = v1.0.1

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito con el acordeón de no disponibles expandido.
3. El usuario toca "Reemplazar" en el ítem {SKU_NO_DISPONIBLE}.
4. El sistema inicia el flujo de búsqueda de productos similares (B2C-40).

**Resultado esperado**

Se inicia el flujo de productos similares definido en B2C-40 para {SKU_NO_DISPONIBLE}.

**Resultado obtenido**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes carne papas zanahoria y espinaca 215 g) no se puede dejar en el carro: su ficha de producto en la app muestra la etiqueta «Pronto disponible» y no tiene botón «Agregar», así que no existe un carro con un ítem no disponible. Acción: declarar en el Excel de data un {SKU_NO_DISPONIBLE} que pueda estar en el carro con estado no disponible (por ejemplo, uno que se agotó después de agregarse).

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes carne papas zanahoria y espinaca 215 g) no se puede dejar en el carro: su ficha de producto en la app muestra la etiqueta «Pronto disponible» y no tiene botón «Agregar», así que no existe un carro con un ítem no disponible. Acción: declarar en el Excel de data un {SKU_NO_DISPONIBLE} que pueda estar en el carro con estado no disponible (por ejemplo, uno que se agotó después de agregarse).

---

### TC-B2C37-APP-019 - Verificar que "Vaciar carro" abre el modal de confirmación con su contenido [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-23 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}

**Data utilizada**

{APP_BUILD} = v1.0.1

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca el menú de tres puntos (⋯).
4. El sistema despliega las opciones "Guardar como lista" y "Vaciar carro".
5. El usuario toca "Vaciar carro".
6. El sistema despliega un modal con imagen, título "Vaciar el carro", subtítulo "¿Deseas eliminar todos los productos de tu carro?", botones "Sí, eliminar" y "No, gracias" e ícono "X" en la esquina superior izquierda.

**Resultado esperado**

El modal muestra imagen, título "Vaciar el carro", subtítulo "¿Deseas eliminar todos los productos de tu carro?", "Sí, eliminar", "No, gracias" e ícono "X".

**Resultado obtenido**

El modal «Vaciar el carro» muestra imagen, título «Vaciar el carro», subtítulo «¿Deseas eliminar todos los productos de tu carro?», «Sí, eliminar», «No, gracias» y la X (verificado en captura).

**Observación**

El modal «Vaciar el carro» muestra imagen, título «Vaciar el carro», subtítulo «¿Deseas eliminar todos los productos de tu carro?», «Sí, eliminar», «No, gracias» y la X (verificado en captura).

**Evidencia**

![Android · Paso 6 — modal vaciar el carro](<B2C-37 APP Evidencias/TC-B2C37-APP-019-android-p06-modal-vaciar-el-carro.png>)

![Android · Estado final](<B2C-37 APP Evidencias/TC-B2C37-APP-019-android.png>)

---

### TC-B2C37-APP-020 - Verificar que el modal muestra el estado de carga al confirmar el vaciado [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-23 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}
- {HERRAMIENTA_PROXY_APP} configurado con throttling de red lenta

**Data utilizada**

{APP_BUILD} = v1.0.1

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca el menú de tres puntos (⋯).
4. El sistema despliega las opciones "Guardar como lista" y "Vaciar carro".
5. El usuario toca "Vaciar carro".
6. El sistema despliega el modal de confirmación "Vaciar el carro".
7. El usuario toca "Sí, eliminar".
8. El sistema reemplaza el botón "Sí, eliminar" por un indicador de carga y deshabilita "No, gracias" mientras procesa.

**Resultado esperado**

Durante el procesamiento, "Sí, eliminar" se muestra como indicador de carga y "No, gracias" queda deshabilitado.

**Resultado obtenido**

Causa: el caso necesita una herramienta de proxy para observar/demorar la red (estado de carga, error de red) y el token {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: definir la herramienta en el Excel de data.

**Observación**

Causa: el caso necesita una herramienta de proxy para observar/demorar la red (estado de carga, error de red) y el token {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: definir la herramienta en el Excel de data.

---

### TC-B2C37-APP-021 - Verificar que "Sí, eliminar" vacía el carro y muestra el estado de carro vacío [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-23 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}

**Data utilizada**

{APP_BUILD} = v1.0.1

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca el menú de tres puntos (⋯).
4. El sistema despliega las opciones "Guardar como lista" y "Vaciar carro".
5. El usuario toca "Vaciar carro".
6. El sistema despliega el modal de confirmación "Vaciar el carro".
7. El usuario toca "Sí, eliminar".
8. El sistema elimina todos los ítems y muestra imagen, título "¡Tu carro está vacío!", subtítulo "Descubre todas las ofertas que tenemos para ti y llena tu despensa." y botón "Ir a comprar".

**Resultado esperado**

El carro queda sin ítems y muestra el estado vacío con "¡Tu carro está vacío!", su subtítulo y el botón "Ir a comprar".

**Evidencia**

![Android · Paso 7 — carro vacio](<B2C-37 APP Evidencias/TC-B2C37-APP-021-android-p07-carro-vacio.png>)

![Android · Estado final](<B2C-37 APP Evidencias/TC-B2C37-APP-021-android.png>)

---

### TC-B2C37-APP-022 - Verificar que "No, gracias" cierra el modal sin cambios en el carro [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-23 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}

**Data utilizada**

{APP_BUILD} = v1.0.1

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca el menú de tres puntos (⋯).
4. El sistema despliega las opciones "Guardar como lista" y "Vaciar carro".
5. El usuario toca "Vaciar carro".
6. El sistema despliega el modal de confirmación "Vaciar el carro".
7. El usuario toca "No, gracias".
8. El sistema cierra el modal y mantiene el carrito sin cambios.

**Resultado esperado**

El modal se cierra y el carro conserva {SKU_VALID_001} y {SKU_UNITARIO} con sus cantidades.

**Resultado obtenido**

«No, gracias» cierra el modal y el carro conserva los 2 productos con 1 unidad cada uno (verificado en captura).

**Observación**

«No, gracias» cierra el modal y el carro conserva los 2 productos con 1 unidad cada uno (verificado en captura).

**Evidencia**

![Android · Paso 6 — modal vaciar el carro](<B2C-37 APP Evidencias/TC-B2C37-APP-022-android-p06-modal-vaciar-el-carro.png>)

![Android · Paso 7 — tras cerrar el modal](<B2C-37 APP Evidencias/TC-B2C37-APP-022-android-p07-tras-cerrar-el-modal.png>)

![Android · Estado final](<B2C-37 APP Evidencias/TC-B2C37-APP-022-android.png>)

---

### TC-B2C37-APP-023 - Verificar que la "X" del modal lo cierra sin cambios en el carro [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-23 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}

**Data utilizada**

{APP_BUILD} = v1.0.1

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca el menú de tres puntos (⋯).
4. El sistema despliega las opciones "Guardar como lista" y "Vaciar carro".
5. El usuario toca "Vaciar carro".
6. El sistema despliega el modal de confirmación "Vaciar el carro".
7. El usuario toca el ícono "X" del modal.
8. El sistema cierra el modal y mantiene el carrito sin cambios.

**Resultado esperado**

El modal se cierra y el carro conserva {SKU_VALID_001} y {SKU_UNITARIO} con sus cantidades.

**Resultado obtenido**

La X del modal «Vaciar el carro» lo cierra y el carro conserva los 2 productos con 1 unidad cada uno (verificado en captura).

**Observación**

La X del modal «Vaciar el carro» lo cierra y el carro conserva los 2 productos con 1 unidad cada uno (verificado en captura).

**Evidencia**

![Android · Paso 6 — modal vaciar el carro](<B2C-37 APP Evidencias/TC-B2C37-APP-023-android-p06-modal-vaciar-el-carro.png>)

![Android · Paso 7 — tras cerrar el modal](<B2C-37 APP Evidencias/TC-B2C37-APP-023-android-p07-tras-cerrar-el-modal.png>)

![Android · Estado final](<B2C-37 APP Evidencias/TC-B2C37-APP-023-android.png>)

---

### TC-B2C37-APP-024 - Verificar que el carrito muestra el toast de restricción de alcohol [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-23 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_ALCOHOL} (producto con restricción de alcohol)

**Data utilizada**

{APP_BUILD} = v1.0.1

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito y muestra un toast informativo con título "Información importante", el mensaje "Deberás mostrar tu carnet al recibir compras de bebidas alcohólicas." e ícono "X".

**Resultado esperado**

Se muestra el toast "Información importante" con el mensaje de carnet y {SKU_ALCOHOL} permanece en el carrito.

**Resultado obtenido**

No ejecutado: el toast «Información importante» (restricción de alcohol) dura 4 segundos y la automatización no logró capturarlo de forma confiable al abrir el carro con {SKU_ALCOHOL}; en las capturas tomadas varios segundos después solo aparece el toast de monto mínimo. No se concluye defecto: queda por verificar con captura inmediata al abrir el carro. Causa de la interrupción: inestabilidad del emulador Android durante la sesión.

**Observación**

No ejecutado: el toast «Información importante» (restricción de alcohol) dura 4 segundos y la automatización no logró capturarlo de forma confiable al abrir el carro con {SKU_ALCOHOL}; en las capturas tomadas varios segundos después solo aparece el toast de monto mínimo. No se concluye defecto: queda por verificar con captura inmediata al abrir el carro. Causa de la interrupción: inestabilidad del emulador Android durante la sesión.

**Evidencia**

![Android · Paso 5 — carro con sku alcohol](<B2C-37 APP Evidencias/TC-B2C37-APP-024-android-p05-carro-con-sku-alcohol.png>)

![Android · Estado final](<B2C-37 APP Evidencias/TC-B2C37-APP-024-android.png>)

---

### TC-B2C37-APP-025 - Verificar que la "X" cierra el toast de restricción de alcohol [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-23 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_ALCOHOL} (producto con restricción de alcohol)

**Data utilizada**

{APP_BUILD} = v1.0.1

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito y muestra un toast informativo con título "Información importante", el mensaje "Deberás mostrar tu carnet al recibir compras de bebidas alcohólicas." e ícono "X".
3. El usuario toca el ícono "X" del toast.
4. El sistema cierra el toast.

**Resultado esperado**

El toast deja de mostrarse y {SKU_ALCOHOL} permanece en el carrito.

**Resultado obtenido**

No ejecutado: el toast «Información importante» (restricción de alcohol) dura 4 segundos y la automatización no logró capturarlo de forma confiable al abrir el carro con {SKU_ALCOHOL}; en las capturas tomadas varios segundos después solo aparece el toast de monto mínimo. No se concluye defecto: queda por verificar con captura inmediata al abrir el carro. Causa de la interrupción: inestabilidad del emulador Android durante la sesión.

**Observación**

No ejecutado: el toast «Información importante» (restricción de alcohol) dura 4 segundos y la automatización no logró capturarlo de forma confiable al abrir el carro con {SKU_ALCOHOL}; en las capturas tomadas varios segundos después solo aparece el toast de monto mínimo. No se concluye defecto: queda por verificar con captura inmediata al abrir el carro. Causa de la interrupción: inestabilidad del emulador Android durante la sesión.

**Evidencia**

![Android · Paso 5 — carro con sku alcohol](<B2C-37 APP Evidencias/TC-B2C37-APP-025-android-p05-carro-con-sku-alcohol.png>)

![Android · Estado final](<B2C-37 APP Evidencias/TC-B2C37-APP-025-android.png>)

---

### TC-B2C37-APP-026 - Verificar que el toast de restricción de alcohol desaparece a los 4 segundos [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-23 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_ALCOHOL} (producto con restricción de alcohol)

**Data utilizada**

{APP_BUILD} = v1.0.1

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito y muestra un toast informativo con título "Información importante", el mensaje "Deberás mostrar tu carnet al recibir compras de bebidas alcohólicas." e ícono "X".
3. El usuario espera 4 segundos sin interactuar con el toast.
4. El sistema oculta el toast automáticamente.

**Resultado esperado**

El toast desaparece solo a los 4 segundos de mostrarse.

**Resultado obtenido**

No ejecutado: el toast «Información importante» (restricción de alcohol) dura 4 segundos y la automatización no logró capturarlo de forma confiable al abrir el carro con {SKU_ALCOHOL}; en las capturas tomadas varios segundos después solo aparece el toast de monto mínimo. No se concluye defecto: queda por verificar con captura inmediata al abrir el carro. Causa de la interrupción: inestabilidad del emulador Android durante la sesión.

**Observación**

No ejecutado: el toast «Información importante» (restricción de alcohol) dura 4 segundos y la automatización no logró capturarlo de forma confiable al abrir el carro con {SKU_ALCOHOL}; en las capturas tomadas varios segundos después solo aparece el toast de monto mínimo. No se concluye defecto: queda por verificar con captura inmediata al abrir el carro. Causa de la interrupción: inestabilidad del emulador Android durante la sesión.

**Evidencia**

![Android · Paso 5 — carro con sku alcohol](<B2C-37 APP Evidencias/TC-B2C37-APP-026-android-p05-carro-con-sku-alcohol.png>)

![Android · Estado final](<B2C-37 APP Evidencias/TC-B2C37-APP-026-android.png>)

---

### TC-B2C37-APP-027 - Verificar que el carrito sin ítems muestra el estado vacío con "Ir a Comprar" [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-23 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-37.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión de invitado (sin iniciar sesión)
- El carro está vacío

**Data utilizada**

{APP_BUILD} = v1.0.1

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito y muestra el estado de carro vacío con un mensaje que invita a agregar productos y el CTA "Ir a Comprar".

**Resultado esperado**

Se muestra el estado de carro vacío con el mensaje que invita a agregar productos y el CTA "Ir a Comprar".

**Resultado obtenido**

Carro vacío del invitado: «¡Tu carro está vacío!», subtítulo «Descubre todas las ofertas que tenemos para ti y llena tu despensa.» y botón «Ir a comprar» (verificado en captura).

**Observación**

Carro vacío del invitado: «¡Tu carro está vacío!», subtítulo «Descubre todas las ofertas que tenemos para ti y llena tu despensa.» y botón «Ir a comprar» (verificado en captura).

**Evidencia**

![Android · Paso 7 — carro vacio del invitado](<B2C-37 APP Evidencias/TC-B2C37-APP-027-android-p07-carro-vacio-del-invitado.png>)

![Android · Estado final](<B2C-37 APP Evidencias/TC-B2C37-APP-027-android.png>)

---

### TC-B2C37-APP-028 - Verificar que "Ir a Comprar" del carro vacío redirige al Home [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-23 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-37.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión de invitado (sin iniciar sesión)
- El carro está vacío

**Data utilizada**

{APP_BUILD} = v1.0.1

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito y muestra el estado de carro vacío con un mensaje que invita a agregar productos y el CTA "Ir a Comprar".
3. El usuario toca "Ir a Comprar".
4. El sistema redirige a el Home de la App.

**Resultado esperado**

El usuario queda en el Home de la App.

**Resultado obtenido**

«Ir a comprar» del carro vacío del invitado lleva al Home de la app (verificado en captura).

**Observación**

«Ir a comprar» del carro vacío del invitado lleva al Home de la app (verificado en captura).

**Evidencia**

![Android · Paso 7 — carro vacio del invitado](<B2C-37 APP Evidencias/TC-B2C37-APP-028-android-p07-carro-vacio-del-invitado.png>)

![Android · Paso 8 — tras ir a comprar](<B2C-37 APP Evidencias/TC-B2C37-APP-028-android-p08-tras-ir-a-comprar.png>)

![Android · Estado final](<B2C-37 APP Evidencias/TC-B2C37-APP-028-android.png>)

---

### TC-B2C37-APP-029 - Verificar que el carrito muestra el estado de error CRT-020 sin ítems parciales [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-23 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001}
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {CART_API_ENDPOINT}

**Data utilizada**

{APP_BUILD} = v1.0.1

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema muestra el estado de error con imagen, título "No pudimos mostrar tu carro", mensaje "Tenemos problemas con cargar tus productos. Por favor, inténtalo otra vez.", CTA "Volver al inicio", CTA "Reintentar" y "Error: CRT-020".

**Resultado esperado**

Se muestra el estado de error CRT-020 completo y no se muestran ítems ni totales del carro.

**Resultado obtenido**

Causa: el caso necesita una herramienta de proxy para observar/demorar la red (estado de carga, error de red) y el token {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: definir la herramienta en el Excel de data.

**Observación**

Causa: el caso necesita una herramienta de proxy para observar/demorar la red (estado de carga, error de red) y el token {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: definir la herramienta en el Excel de data.

---

### TC-B2C37-APP-030 - Verificar que "Volver al inicio" del error de carga navega al Home [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-23 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001}
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {CART_API_ENDPOINT}

**Data utilizada**

{APP_BUILD} = v1.0.1

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema muestra el estado de error con imagen, título "No pudimos mostrar tu carro", mensaje "Tenemos problemas con cargar tus productos. Por favor, inténtalo otra vez.", CTA "Volver al inicio", CTA "Reintentar" y "Error: CRT-020".
3. El usuario toca "Volver al inicio".
4. El sistema navega a el Home de la App.

**Resultado esperado**

El usuario queda en el Home de la App.

**Resultado obtenido**

Causa: el caso necesita una herramienta de proxy para observar/demorar la red (estado de carga, error de red) y el token {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: definir la herramienta en el Excel de data.

**Observación**

Causa: el caso necesita una herramienta de proxy para observar/demorar la red (estado de carga, error de red) y el token {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: definir la herramienta en el Excel de data.

---

### TC-B2C37-APP-031 - Verificar que "Reintentar" vuelve a cargar el contenido del carrito [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-23 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001}
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {CART_API_ENDPOINT}

**Data utilizada**

{APP_BUILD} = v1.0.1

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema muestra el estado de error con imagen, título "No pudimos mostrar tu carro", mensaje "Tenemos problemas con cargar tus productos. Por favor, inténtalo otra vez.", CTA "Volver al inicio", CTA "Reintentar" y "Error: CRT-020".
3. El usuario desactiva en {HERRAMIENTA_PROXY_APP} el error forzado en {CART_API_ENDPOINT}.
4. El usuario toca "Reintentar".
5. El sistema vuelve a solicitar el contenido y carga el carrito con {SKU_VALID_001}.

**Resultado esperado**

El carrito se carga correctamente y muestra {SKU_VALID_001}.

**Resultado obtenido**

Causa: el caso necesita una herramienta de proxy para observar/demorar la red (estado de carga, error de red) y el token {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: definir la herramienta en el Excel de data.

**Observación**

Causa: el caso necesita una herramienta de proxy para observar/demorar la red (estado de carga, error de red) y el token {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: definir la herramienta en el Excel de data.

---

### TC-B2C37-APP-032 - Verificar que el error al vaciar muestra el toast CRT-076 y conserva los ítems [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-23 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {VACIAR_CARRO_API_ENDPOINT}

**Data utilizada**

{APP_BUILD} = v1.0.1

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca el menú de tres puntos (⋯).
4. El sistema despliega las opciones "Guardar como lista" y "Vaciar carro".
5. El usuario toca "Vaciar carro".
6. El sistema despliega el modal de confirmación "Vaciar el carro".
7. El usuario toca "Sí, eliminar".
8. El sistema muestra el toast de error "¡Lo sentimos! No pudimos vaciar tu carro, vuelve a intentarlo! [CRT-076]".

**Resultado esperado**

Se muestra el toast de error CRT-076 y el carro conserva {SKU_VALID_001} y {SKU_UNITARIO} sin cambios.

**Resultado obtenido**

Causa: el caso necesita una herramienta de proxy para observar/demorar la red (estado de carga, error de red) y el token {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: definir la herramienta en el Excel de data.

**Observación**

Causa: el caso necesita una herramienta de proxy para observar/demorar la red (estado de carga, error de red) y el token {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: definir la herramienta en el Excel de data.

---

### TC-B2C37-APP-033 - Verificar que el toast de error CRT-076 permanece hasta cerrarlo con la X [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-23 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {VACIAR_CARRO_API_ENDPOINT}

**Data utilizada**

{APP_BUILD} = v1.0.1

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca el menú de tres puntos (⋯).
4. El sistema despliega las opciones "Guardar como lista" y "Vaciar carro".
5. El usuario toca "Vaciar carro".
6. El sistema despliega el modal de confirmación "Vaciar el carro".
7. El usuario toca "Sí, eliminar".
8. El sistema muestra el toast de error "¡Lo sentimos! No pudimos vaciar tu carro, vuelve a intentarlo! [CRT-076]".
9. El usuario espera 10 segundos sin interactuar con el toast.
10. El sistema mantiene visible el toast de error.
11. El usuario toca el ícono "X" del toast.
12. El sistema cierra el toast.

**Resultado esperado**

El toast sigue visible después de 10 segundos y solo se cierra con la "X".

**Resultado obtenido**

Causa: el caso necesita una herramienta de proxy para observar/demorar la red (estado de carga, error de red) y el token {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: definir la herramienta en el Excel de data.

**Observación**

Causa: el caso necesita una herramienta de proxy para observar/demorar la red (estado de carga, error de red) y el token {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: definir la herramienta en el Excel de data.

---

### TC-B2C37-APP-034 - Verificar que el carrito bajo el mínimo muestra el faltante y deshabilita el CTA [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-23 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El método de entrega activo es Despacho a domicilio
- El carro contiene {SKU_VALID_001} x 1 y el subtotal es menor a {MONTO_MINIMO_COMPRA}

**Data utilizada**

{APP_BUILD} = v1.0.1

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito, muestra el toast "¡Solo te faltan $X para ir a pagar!" con X = {MONTO_MINIMO_COMPRA} − subtotal y el botón "Continuar con la entrega" deshabilitado con el label "Mínimo de compra ${MONTO_MINIMO_COMPRA}".

**Resultado esperado**

Se muestra el toast con el faltante real y el CTA "Continuar con la entrega" deshabilitado con el label "Mínimo de compra $Y".

**Evidencia**

![Android · Paso 5 — carro bajo el minimo](<B2C-37 APP Evidencias/TC-B2C37-APP-034-android-p05-carro-bajo-el-minimo.png>)

![Android · Estado final](<B2C-37 APP Evidencias/TC-B2C37-APP-034-android.png>)

---

### TC-B2C37-APP-035 - Verificar que el monto faltante del toast se actualiza al cambiar la cantidad [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-23 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El método de entrega activo es Despacho a domicilio
- El carro contiene {SKU_VALID_001} x 1 y el subtotal es menor a {MONTO_MINIMO_COMPRA}
- Con 2 unidades de {SKU_VALID_001} el subtotal sigue siendo menor a {MONTO_MINIMO_COMPRA}

**Data utilizada**

{APP_BUILD} = v1.0.1

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito, muestra el toast "¡Solo te faltan $X para ir a pagar!" con X = {MONTO_MINIMO_COMPRA} − subtotal y el botón "Continuar con la entrega" deshabilitado con el label "Mínimo de compra ${MONTO_MINIMO_COMPRA}".
3. El usuario toca una vez el control + de {SKU_VALID_001}.
4. El sistema actualiza la cantidad y recalcula el monto del toast sin recargar la página.

**Resultado esperado**

El toast muestra el nuevo faltante: {MONTO_MINIMO_COMPRA} − subtotal con 2 unidades de {SKU_VALID_001}.

**Evidencia**

![Android · Paso 5 — carro con 2 unidades](<B2C-37 APP Evidencias/TC-B2C37-APP-035-android-p05-carro-con-2-unidades.png>)

![Android · Estado final](<B2C-37 APP Evidencias/TC-B2C37-APP-035-android.png>)

---

### TC-B2C37-APP-036 - Verificar que la X cierra el toast de monto mínimo [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-23 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El método de entrega activo es Despacho a domicilio
- El carro contiene {SKU_VALID_001} x 1 y el subtotal es menor a {MONTO_MINIMO_COMPRA}

**Data utilizada**

{APP_BUILD} = v1.0.1

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito, muestra el toast "¡Solo te faltan $X para ir a pagar!" con X = {MONTO_MINIMO_COMPRA} − subtotal y el botón "Continuar con la entrega" deshabilitado con el label "Mínimo de compra ${MONTO_MINIMO_COMPRA}".
3. El usuario toca el ícono "X" del toast.
4. El sistema cierra el toast.

**Resultado esperado**

El toast deja de mostrarse y el CTA "Continuar con la entrega" sigue deshabilitado.

**Evidencia**

![Android · Paso 6 — tras cerrar el toast](<B2C-37 APP Evidencias/TC-B2C37-APP-036-android-p06-tras-cerrar-el-toast.png>)

![Android · Estado final](<B2C-37 APP Evidencias/TC-B2C37-APP-036-android.png>)

---

### TC-B2C37-APP-037 - Verificar que el carrito sobre el mínimo con Retiro habilita "Continuar con la entrega" [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-23 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El método de entrega activo es Retiro en tienda en {TIENDA_RETIRO_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}

**Data utilizada**

{APP_BUILD} = v1.0.1

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito con el CTA "Continuar con la entrega" habilitado y sin el toast de monto faltante.

**Resultado esperado**

El CTA "Continuar con la entrega" está habilitado y no se muestra el toast "¡Solo te faltan $X para ir a pagar!".

**Resultado obtenido**

No ejecutado: la precondición exige tener activo el método de entrega «Retiro en tienda en Unimarc Las Condes» con el carro sobre el mínimo, y no se alcanzó a configurar en la sesión por la inestabilidad del emulador Android. Queda por verificar.

**Observación**

No ejecutado: la precondición exige tener activo el método de entrega «Retiro en tienda en Unimarc Las Condes» con el carro sobre el mínimo, y no se alcanzó a configurar en la sesión por la inestabilidad del emulador Android. Queda por verificar.

**Evidencia**

![Android · Paso 5 — carro sobre el minimo](<B2C-37 APP Evidencias/TC-B2C37-APP-037-android-p05-carro-sobre-el-minimo.png>)

![Android · Estado final](<B2C-37 APP Evidencias/TC-B2C37-APP-037-android.png>)

---

### TC-B2C37-APP-038 - Verificar que al alcanzar el mínimo se oculta el toast y se habilita el CTA en tiempo real [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-23 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El método de entrega activo es Despacho a domicilio
- El carro contiene {SKU_VALID_001} x 1 y el subtotal es menor a {MONTO_MINIMO_COMPRA}

**Data utilizada**

{APP_BUILD} = v1.0.1

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito, muestra el toast "¡Solo te faltan $X para ir a pagar!" con X = {MONTO_MINIMO_COMPRA} − subtotal y el botón "Continuar con la entrega" deshabilitado con el label "Mínimo de compra ${MONTO_MINIMO_COMPRA}".
3. El usuario toca el control + de {SKU_VALID_001} hasta llegar a {UNIDADES_SOBRE_MINIMO} unidades.
4. El sistema recalcula el subtotal, oculta el toast y habilita el CTA "Continuar con la entrega" sin recargar la página.

**Resultado esperado**

Con {UNIDADES_SOBRE_MINIMO} unidades el toast desaparece y el CTA "Continuar con la entrega" queda habilitado.

**Evidencia**

![Android · Paso 5 — carro con 11 unidades](<B2C-37 APP Evidencias/TC-B2C37-APP-038-android-p05-carro-con-11-unidades.png>)

![Android · Estado final](<B2C-37 APP Evidencias/TC-B2C37-APP-038-android.png>)

---

### TC-B2C37-APP-039 - Verificar que el carrito muestra el banner de membresía para cliente sin membresía previa [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-23 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}
- La cuenta {COMPRADOR_SIN_MEMBRESIA_USER} nunca tuvo membresía
- El carro contiene {SKU_VALID_001}
- El carrito contiene productos con descuentos membresía {SKU_OFERTA_MEMBRESIA}

**Data utilizada**

{APP_BUILD} = v1.0.1

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito y muestra el banner "Ahorra $X siendo Diamante · Prueba y disfruta 15 días gratis." con el CTA "Lo quiero".

**Resultado esperado**

Se muestra el banner "Ahorra $X siendo Diamante · Prueba y disfruta 15 días gratis." con $X calculado sobre el carro y el CTA "Lo quiero".

**Resultado obtenido**

Causa: {SKU_OFERTA_MEMBRESIA} (000000000000178089-UN, Watt's mermelada) no muestra precio de membresía/Diamante en el carro de la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}: solo una oferta normal del 23 %. Sin un producto con precio Diamante no se muestra el banner «Ahorra $X siendo Diamante». Con otro SKU en la misma cuenta (000000000000653466-UN, vino 1865 merlot) el carro sí mostró «Ahorra $1.529 siendo Diamante · Prueba y disfruta 15 días gratis» con «Lo quiero», así que la funcionalidad existe. Acción: declarar en el Excel de data un {SKU_OFERTA_MEMBRESIA} que tenga precio Diamante.

**Observación**

Causa: {SKU_OFERTA_MEMBRESIA} (000000000000178089-UN, Watt's mermelada) no muestra precio de membresía/Diamante en el carro de la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}: solo una oferta normal del 23 %. Sin un producto con precio Diamante no se muestra el banner «Ahorra $X siendo Diamante». Con otro SKU en la misma cuenta (000000000000653466-UN, vino 1865 merlot) el carro sí mostró «Ahorra $1.529 siendo Diamante · Prueba y disfruta 15 días gratis» con «Lo quiero», así que la funcionalidad existe. Acción: declarar en el Excel de data un {SKU_OFERTA_MEMBRESIA} que tenga precio Diamante.

**Evidencia**

![Android · Paso 5 — carro con la cuenta sin membresia](<B2C-37 APP Evidencias/TC-B2C37-APP-039-android-p05-carro-con-la-cuenta-sin-membresia.png>)

![Android · Estado final](<B2C-37 APP Evidencias/TC-B2C37-APP-039-android.png>)

---

### TC-B2C37-APP-040 - Verificar que "Lo quiero" abre el flujo de contratación de membresía [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-23 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}
- La cuenta {COMPRADOR_SIN_MEMBRESIA_USER} nunca tuvo membresía
- El carro contiene {SKU_VALID_001}

**Data utilizada**

{APP_BUILD} = v1.0.1

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito y muestra el banner "Ahorra $X siendo Diamante · Prueba y disfruta 15 días gratis." con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema abre el flujo de contratación de membresía (B2C-42).

**Resultado esperado**

Se abre el flujo de contratación de membresía definido en B2C-42.

**Resultado obtenido**

Causa: {SKU_OFERTA_MEMBRESIA} (000000000000178089-UN, Watt's mermelada) no muestra precio de membresía/Diamante en el carro de la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}: solo una oferta normal del 23 %. Sin un producto con precio Diamante no se muestra el banner «Ahorra $X siendo Diamante». Con otro SKU en la misma cuenta (000000000000653466-UN, vino 1865 merlot) el carro sí mostró «Ahorra $1.529 siendo Diamante · Prueba y disfruta 15 días gratis» con «Lo quiero», así que la funcionalidad existe. Acción: declarar en el Excel de data un {SKU_OFERTA_MEMBRESIA} que tenga precio Diamante.

**Observación**

Causa: {SKU_OFERTA_MEMBRESIA} (000000000000178089-UN, Watt's mermelada) no muestra precio de membresía/Diamante en el carro de la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}: solo una oferta normal del 23 %. Sin un producto con precio Diamante no se muestra el banner «Ahorra $X siendo Diamante». Con otro SKU en la misma cuenta (000000000000653466-UN, vino 1865 merlot) el carro sí mostró «Ahorra $1.529 siendo Diamante · Prueba y disfruta 15 días gratis» con «Lo quiero», así que la funcionalidad existe. Acción: declarar en el Excel de data un {SKU_OFERTA_MEMBRESIA} que tenga precio Diamante.

**Evidencia**

![Android · Estado final](<B2C-37 APP Evidencias/TC-B2C37-APP-040-android.png>)

---

### TC-B2C37-APP-041 - Verificar que el carrito muestra el banner de renovación para membresía expirada [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-23 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER}
- La cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER} tuvo membresía y ya no está vigente
- El carro contiene {SKU_VALID_001}

**Data utilizada**

{APP_BUILD} = v1.0.1

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito y muestra el banner "Ahorrarías $X siendo Diamante · Vuelve, te extrañamos." con el CTA "Renovar".

**Resultado esperado**

Se muestra el banner "Ahorrarías $X siendo Diamante · Vuelve, te extrañamos." con $X calculado sobre el carro y el CTA "Renovar".

**Resultado obtenido**

Causa: no se puede verificar el banner de renovación con la data actual. (1) El caso solo declara {SKU_VALID_001}, que no tiene precio Diamante: con él el carro de {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no muestra ningún banner de membresía. (2) Con un SKU con precio Diamante (000000000000653466-UN, vino 1865 merlot) la misma cuenta muestra el banner de cliente nuevo «Ahorra $1.529 siendo Diamante · Prueba y disfruta 15 días gratis» con «Lo quiero», y no el de renovación «Ahorrarías $X siendo Diamante · Vuelve, te extrañamos» con «Renovar». Hay que confirmar si la cuenta realmente tiene membresía vencida (data) o si la app muestra el banner equivocado (posible defecto). Acción: confirmar el estado de la cuenta en el backend y declarar en el caso un SKU con precio Diamante.

**Observación**

Causa: no se puede verificar el banner de renovación con la data actual. (1) El caso solo declara {SKU_VALID_001}, que no tiene precio Diamante: con él el carro de {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no muestra ningún banner de membresía. (2) Con un SKU con precio Diamante (000000000000653466-UN, vino 1865 merlot) la misma cuenta muestra el banner de cliente nuevo «Ahorra $1.529 siendo Diamante · Prueba y disfruta 15 días gratis» con «Lo quiero», y no el de renovación «Ahorrarías $X siendo Diamante · Vuelve, te extrañamos» con «Renovar». Hay que confirmar si la cuenta realmente tiene membresía vencida (data) o si la app muestra el banner equivocado (posible defecto). Acción: confirmar el estado de la cuenta en el backend y declarar en el caso un SKU con precio Diamante.

**Evidencia**

![Android · Estado final](<B2C-37 APP Evidencias/TC-B2C37-APP-041-android.png>)

---

### TC-B2C37-APP-042 - Verificar que "Renovar" abre el flujo de renovación de membresía [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-23 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER}
- La cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER} tuvo membresía y ya no está vigente
- El carro contiene {SKU_VALID_001}

**Data utilizada**

{APP_BUILD} = v1.0.1

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito y muestra el banner "Ahorrarías $X siendo Diamante · Vuelve, te extrañamos." con el CTA "Renovar".
3. El usuario toca "Renovar".
4. El sistema abre el flujo de renovación de membresía (B2C-42).

**Resultado esperado**

Se abre el flujo de renovación de membresía definido en B2C-42.

**Resultado obtenido**

Causa: no se puede verificar el banner de renovación con la data actual. (1) El caso solo declara {SKU_VALID_001}, que no tiene precio Diamante: con él el carro de {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no muestra ningún banner de membresía. (2) Con un SKU con precio Diamante (000000000000653466-UN, vino 1865 merlot) la misma cuenta muestra el banner de cliente nuevo «Ahorra $1.529 siendo Diamante · Prueba y disfruta 15 días gratis» con «Lo quiero», y no el de renovación «Ahorrarías $X siendo Diamante · Vuelve, te extrañamos» con «Renovar». Hay que confirmar si la cuenta realmente tiene membresía vencida (data) o si la app muestra el banner equivocado (posible defecto). Acción: confirmar el estado de la cuenta en el backend y declarar en el caso un SKU con precio Diamante.

**Observación**

Causa: no se puede verificar el banner de renovación con la data actual. (1) El caso solo declara {SKU_VALID_001}, que no tiene precio Diamante: con él el carro de {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no muestra ningún banner de membresía. (2) Con un SKU con precio Diamante (000000000000653466-UN, vino 1865 merlot) la misma cuenta muestra el banner de cliente nuevo «Ahorra $1.529 siendo Diamante · Prueba y disfruta 15 días gratis» con «Lo quiero», y no el de renovación «Ahorrarías $X siendo Diamante · Vuelve, te extrañamos» con «Renovar». Hay que confirmar si la cuenta realmente tiene membresía vencida (data) o si la app muestra el banner equivocado (posible defecto). Acción: confirmar el estado de la cuenta en el backend y declarar en el caso un SKU con precio Diamante.

**Evidencia**

![Android · Paso 5 — carro con la cuenta de membresia vencida](<B2C-37 APP Evidencias/TC-B2C37-APP-042-android-p05-carro-con-la-cuenta-de-membresia-vencida.png>)

![Android · Estado final](<B2C-37 APP Evidencias/TC-B2C37-APP-042-android.png>)

---

### TC-B2C37-APP-043 - Verificar que el carrito no muestra el banner de membresía al usuario invitado [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-23 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-37.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión de invitado (sin iniciar sesión)
- El carro contiene {SKU_VALID_001}

**Data utilizada**

{APP_BUILD} = v1.0.1

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carro invitado.

**Resultado esperado**

El carrito no muestra el banner de oferta de membresía.

**Resultado obtenido**

El carro del invitado con {SKU_VALID_001} no muestra el banner de oferta de membresía (verificado en captura).

**Observación**

El carro del invitado con {SKU_VALID_001} no muestra el banner de oferta de membresía (verificado en captura).

**Evidencia**

![Android · Paso 6 — carro del invitado](<B2C-37 APP Evidencias/TC-B2C37-APP-043-android-p06-carro-del-invitado.png>)

![Android · Estado final](<B2C-37 APP Evidencias/TC-B2C37-APP-043-android.png>)

---

### TC-B2C37-APP-044 - Verificar que el carrito muestra el skeleton de carga mientras procesa la solicitud [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-23 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001}
- {HERRAMIENTA_PROXY_APP} configurado con throttling de red lenta

**Data utilizada**

{APP_BUILD} = v1.0.1

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema muestra la pantalla de skeleton que replica la estructura del carrito mientras procesa la solicitud.

**Resultado esperado**

Durante la carga se muestra el skeleton con la estructura del carrito de App.

**Resultado obtenido**

Causa: el caso necesita una herramienta de proxy para observar/demorar la red (estado de carga, error de red) y el token {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: definir la herramienta en el Excel de data.

**Observación**

Causa: el caso necesita una herramienta de proxy para observar/demorar la red (estado de carga, error de red) y el token {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: definir la herramienta en el Excel de data.

---

### TC-B2C37-APP-045 - Verificar que el skeleton se reemplaza por el contenido del carrito sin parpadeo [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-23 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001}
- {HERRAMIENTA_PROXY_APP} configurado con throttling de red lenta

**Data utilizada**

{APP_BUILD} = v1.0.1

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema muestra la pantalla de skeleton que replica la estructura del carrito mientras procesa la solicitud.
3. El usuario espera a que finalice la carga.
4. El sistema reemplaza el skeleton por el contenido del carrito con una transición suave.

**Resultado esperado**

El skeleton se reemplaza por el carrito con {SKU_VALID_001} sin parpadeo.

**Resultado obtenido**

Causa: el caso necesita una herramienta de proxy para observar/demorar la red (estado de carga, error de red) y el token {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: definir la herramienta en el Excel de data.

**Observación**

Causa: el caso necesita una herramienta de proxy para observar/demorar la red (estado de carga, error de red) y el token {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: definir la herramienta en el Excel de data.

---

### TC-B2C37-APP-046 - Verificar que el skeleton se reemplaza por el estado de error si la carga falla [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-23 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001}
- {HERRAMIENTA_PROXY_APP} configurado con throttling de red lenta
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {CART_API_ENDPOINT}

**Data utilizada**

{APP_BUILD} = v1.0.1

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema muestra la pantalla de skeleton que replica la estructura del carrito mientras procesa la solicitud.
3. El usuario espera a que finalice la solicitud.
4. El sistema reemplaza el skeleton por el estado de error "No pudimos mostrar tu carro" con "Error: CRT-020".

**Resultado esperado**

El skeleton se reemplaza por el estado de error del carrito (CRT-020).

**Resultado obtenido**

Causa: el caso necesita una herramienta de proxy para observar/demorar la red (estado de carga, error de red) y el token {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: definir la herramienta en el Excel de data.

**Observación**

Causa: el caso necesita una herramienta de proxy para observar/demorar la red (estado de carga, error de red) y el token {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: definir la herramienta en el Excel de data.

---

### TC-B2C37-APP-047 - Verificar que la tarjeta de totales queda fija al hacer scroll en la lista de productos [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-23 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-37.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKUS_CARRUSEL} y {SKU_UNIPAY_001}, y la lista supera la altura visible de la pantalla

**Data utilizada**

{APP_BUILD} = v1.0.1

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito con la lista de productos y la tarjeta de totales en la parte inferior.
3. El usuario hace scroll vertical hasta el final de la lista de productos.
4. El sistema desplaza el área de productos y mantiene fija la tarjeta de totales con "Subtotal", "Subtotal con Unipay" y el CTA "Continuar con la entrega".

**Resultado esperado**

Durante todo el scroll la tarjeta de totales permanece fija mostrando "Subtotal", "Subtotal con Unipay" y "Continuar con la entrega".

**Resultado obtenido**

Causa: {SKU_UNIPAY_001} no tiene una promo Unipay vigente; la tarjeta de totales solo muestra «Subtotal» y no existe «Subtotal con Unipay» que verificar. Acción: declarar en el Excel de data un SKU con promo Unipay vigente. (el caso también usa {SKUS_CARRUSEL}.)

**Observación**

Causa: {SKU_UNIPAY_001} no tiene una promo Unipay vigente; la tarjeta de totales solo muestra «Subtotal» y no existe «Subtotal con Unipay» que verificar. Acción: declarar en el Excel de data un SKU con promo Unipay vigente. (el caso también usa {SKUS_CARRUSEL}.)

**Evidencia**

![Android · Paso 5 — carro](<B2C-37 APP Evidencias/TC-B2C37-APP-047-android-p05-carro.png>)

![Android · Estado final](<B2C-37 APP Evidencias/TC-B2C37-APP-047-android.png>)

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "devices": {
   "Android": "Pixel 6 (emulador) · Android 14"
  },
  "environment": "App Unimarc v1.0.1 (DEV)",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-37 APP",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-37 APP Test Cases.xlsx",
  "title": "Página del carro en la app (Android)",
  "updated_at": "2026-10-23"
 },
 "history": {
  "2026-10-21": [
   "TC-B2C37-APP-001",
   "TC-B2C37-APP-002",
   "TC-B2C37-APP-003",
   "TC-B2C37-APP-004",
   "TC-B2C37-APP-005",
   "TC-B2C37-APP-006",
   "TC-B2C37-APP-007",
   "TC-B2C37-APP-008",
   "TC-B2C37-APP-010",
   "TC-B2C37-APP-011",
   "TC-B2C37-APP-012",
   "TC-B2C37-APP-013",
   "TC-B2C37-APP-014",
   "TC-B2C37-APP-015",
   "TC-B2C37-APP-016",
   "TC-B2C37-APP-017",
   "TC-B2C37-APP-018",
   "TC-B2C37-APP-019",
   "TC-B2C37-APP-020",
   "TC-B2C37-APP-021",
   "TC-B2C37-APP-022",
   "TC-B2C37-APP-023",
   "TC-B2C37-APP-024",
   "TC-B2C37-APP-025",
   "TC-B2C37-APP-026",
   "TC-B2C37-APP-027",
   "TC-B2C37-APP-028",
   "TC-B2C37-APP-029",
   "TC-B2C37-APP-030",
   "TC-B2C37-APP-031",
   "TC-B2C37-APP-032",
   "TC-B2C37-APP-033",
   "TC-B2C37-APP-034",
   "TC-B2C37-APP-035",
   "TC-B2C37-APP-036",
   "TC-B2C37-APP-037",
   "TC-B2C37-APP-038",
   "TC-B2C37-APP-039",
   "TC-B2C37-APP-040",
   "TC-B2C37-APP-041",
   "TC-B2C37-APP-042",
   "TC-B2C37-APP-043",
   "TC-B2C37-APP-044",
   "TC-B2C37-APP-045",
   "TC-B2C37-APP-046",
   "TC-B2C37-APP-047"
  ],
  "2026-10-23": [
   "TC-B2C37-APP-001",
   "TC-B2C37-APP-002",
   "TC-B2C37-APP-003",
   "TC-B2C37-APP-004",
   "TC-B2C37-APP-005",
   "TC-B2C37-APP-006",
   "TC-B2C37-APP-007",
   "TC-B2C37-APP-008",
   "TC-B2C37-APP-010",
   "TC-B2C37-APP-011",
   "TC-B2C37-APP-012",
   "TC-B2C37-APP-013",
   "TC-B2C37-APP-014",
   "TC-B2C37-APP-015",
   "TC-B2C37-APP-016",
   "TC-B2C37-APP-017",
   "TC-B2C37-APP-018",
   "TC-B2C37-APP-019",
   "TC-B2C37-APP-020",
   "TC-B2C37-APP-021",
   "TC-B2C37-APP-022",
   "TC-B2C37-APP-023",
   "TC-B2C37-APP-024",
   "TC-B2C37-APP-025",
   "TC-B2C37-APP-026",
   "TC-B2C37-APP-027",
   "TC-B2C37-APP-028",
   "TC-B2C37-APP-029",
   "TC-B2C37-APP-030",
   "TC-B2C37-APP-031",
   "TC-B2C37-APP-032",
   "TC-B2C37-APP-033",
   "TC-B2C37-APP-034",
   "TC-B2C37-APP-035",
   "TC-B2C37-APP-036",
   "TC-B2C37-APP-037",
   "TC-B2C37-APP-038",
   "TC-B2C37-APP-039",
   "TC-B2C37-APP-040",
   "TC-B2C37-APP-041",
   "TC-B2C37-APP-042",
   "TC-B2C37-APP-043",
   "TC-B2C37-APP-044",
   "TC-B2C37-APP-045",
   "TC-B2C37-APP-046",
   "TC-B2C37-APP-047"
  ]
 },
 "results": [
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-23",
   "expected": "El carrito muestra header simplificado, acordeón de disponibles expandido con ícono ⋯ y la tarjeta de totales fija con \"Subtotal\" (sin \"Subtotal con Unipay\") y el CTA \"Continuar con la entrega\".",
   "form_factor": "app",
   "id": "TC-B2C37-APP-001",
   "name": "Verificar que el carrito muestra el layout con ítems disponibles y totales fijos sin Unipay [App] [Logueado]",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene solo {SKU_VALID_001} (disponible y sin descuento Unipay)",
   "screenshots": [
    {
     "caption": "Android · Paso 5 — mi carro con sku valid 001",
     "file": "TC-B2C37-APP-001-android-p05-mi-carro-con-sku-valid-001.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C37-APP-001-android.png"
    }
   ],
   "spec": "tests-app/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el header simplificado \"< Mi carrito\", el acordeón de ítems disponibles expandido (logo Unimarc + número de ítems + \"productos\" + ícono de menú ⋯) con la lista de productos.\n3. El usuario revisa la parte inferior de la pantalla.\n4. El sistema muestra la tarjeta de totales fija solo con \"Subtotal\", el CTA \"Continuar con la entrega\" y el footer simplificado.",
   "test_data": "{APP_BUILD} = v1.0.1"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-23",
   "expected": "La tarjeta de totales muestra \"Subtotal\" y \"Subtotal con Unipay\", con un monto de \"Subtotal con Unipay\" menor al \"Subtotal\".",
   "form_factor": "app",
   "id": "TC-B2C37-APP-002",
   "name": "Verificar que la tarjeta de totales muestra \"Subtotal con Unipay\" con descuento Unipay [App] [Logueado]",
   "observation": "Causa: {SKU_UNIPAY_001} no tiene una promo Unipay vigente; la tarjeta de totales solo muestra «Subtotal» y no existe «Subtotal con Unipay» que verificar. Acción: declarar en el Excel de data un SKU con promo Unipay vigente.",
   "observed": "Causa: {SKU_UNIPAY_001} no tiene una promo Unipay vigente; la tarjeta de totales solo muestra «Subtotal» y no existe «Subtotal con Unipay» que verificar. Acción: declarar en el Excel de data un SKU con promo Unipay vigente.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_UNIPAY_001} (producto con descuento Unipay)",
   "screenshots": [
    {
     "caption": "Android · Paso 5 — carro con sku unipay 001",
     "file": "TC-B2C37-APP-002-android-p05-carro-con-sku-unipay-001.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C37-APP-002-android.png"
    }
   ],
   "spec": "tests-app/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito y muestra en la tarjeta de totales las líneas \"Subtotal\" y \"Subtotal con Unipay\".",
   "test_data": "{APP_BUILD} = v1.0.1"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-23",
   "expected": "El menú ⋯ muestra \"Guardar como lista\" + ícono y \"Vaciar carro\" + ícono.",
   "form_factor": "app",
   "id": "TC-B2C37-APP-003",
   "name": "Verificar que el menú ⋯ muestra \"Guardar como lista\" y \"Vaciar carro\" [App] [Logueado]",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001}",
   "screenshots": [
    {
     "caption": "Android · Paso 5 — menu abierto",
     "file": "TC-B2C37-APP-003-android-p05-menu-abierto.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C37-APP-003-android.png"
    }
   ],
   "spec": "tests-app/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca el menú de tres puntos (⋯).\n4. El sistema despliega las opciones \"Guardar como lista\" y \"Vaciar carro\", cada una con su ícono.",
   "test_data": "{APP_BUILD} = v1.0.1"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-23",
   "expected": "El menú ⋯ muestra \"Vaciar carro\" + ícono y no muestra \"Guardar como lista\".",
   "form_factor": "app",
   "id": "TC-B2C37-APP-004",
   "name": "Verificar que el menú ⋯ muestra solo \"Vaciar carro\" al usuario invitado [App] [Guest]",
   "observation": "Resultado obtenido: el menú ⋯ del carro de un usuario invitado (app con datos borrados, sin sesión) muestra DOS opciones: «Guardar como lista» y «Vaciar Carro». Esperado: solo «Vaciar carro» + ícono, sin «Guardar como lista». Bug: B2C-1331.",
   "observed": "Resultado obtenido: el menú ⋯ del carro de un usuario invitado (app con datos borrados, sin sesión) muestra DOS opciones: «Guardar como lista» y «Vaciar Carro». Esperado: solo «Vaciar carro» + ícono, sin «Guardar como lista». Bug: B2C-1331.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión de invitado (sin iniciar sesión)\n- El carro contiene {SKU_VALID_001}",
   "screenshots": [
    {
     "caption": "Android · Paso 6 — menu del invitado",
     "file": "TC-B2C37-APP-004-android-p06-menu-del-invitado.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C37-APP-004-android.png"
    }
   ],
   "spec": "tests-app/B2C-37.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca el menú de tres puntos (⋯).\n4. El sistema despliega el menú con la opción \"Vaciar carro\" + ícono.",
   "test_data": "{APP_BUILD} = v1.0.1"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-23",
   "expected": "El usuario queda en el paso Datos de entrega del checkout.",
   "form_factor": "app",
   "id": "TC-B2C37-APP-005",
   "name": "Verificar que \"Continuar con la entrega\" avanza al paso Datos de entrega [App] [Logueado]",
   "observation": "Observación: al tocar «Continuar con la entrega» la app abre primero el modal «¡Que no se te olviden!» (sugeridos) con el botón «Continuar»; al tocarlo llega a «Datos de entrega». El modal intermedio no figura en los pasos del caso.",
   "observed": "Observación: al tocar «Continuar con la entrega» la app abre primero el modal «¡Que no se te olviden!» (sugeridos) con el botón «Continuar»; al tocarlo llega a «Datos de entrega». El modal intermedio no figura en los pasos del caso.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO}\n- El subtotal del carro es mayor o igual a {MONTO_MINIMO_COMPRA} y hay un método de entrega activo",
   "screenshots": [
    {
     "caption": "Android · Paso 6 — modal que no se te olviden tras continuar con la entrega",
     "file": "TC-B2C37-APP-005-android-p06-modal-que-no-se-te-olviden-tras-continuar-con-la-entrega.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C37-APP-005-android.png"
    }
   ],
   "spec": "tests-app/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito con el CTA \"Continuar con la entrega\" habilitado.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema navega al paso Datos de entrega del checkout.",
   "test_data": "{APP_BUILD} = v1.0.1"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-23",
   "expected": "Se inicia el flujo de \"Guardar como lista\" definido en B2C-54.",
   "form_factor": "app",
   "id": "TC-B2C37-APP-006",
   "name": "Verificar que \"Guardar como lista\" del menú ⋯ inicia el flujo de guardado de lista [App] [Logueado]",
   "observation": "«Guardar como lista» abre la hoja «Agregar como lista» (Crear nueva lista / listas existentes / Confirmar).",
   "observed": "«Guardar como lista» abre la hoja «Agregar como lista» (Crear nueva lista / listas existentes / Confirmar).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001}",
   "screenshots": [
    {
     "caption": "Android · Paso 6 — tras tocar guardar como lista hoja agregar como lista",
     "file": "TC-B2C37-APP-006-android-p06-tras-tocar-guardar-como-lista-hoja-agregar-como-lista.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C37-APP-006-android.png"
    }
   ],
   "spec": "tests-app/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca el menú de tres puntos (⋯).\n4. El sistema despliega las opciones \"Guardar como lista\" y \"Vaciar carro\".\n5. El usuario toca \"Guardar como lista\".\n6. El sistema inicia el flujo de guardar como lista (B2C-54).",
   "test_data": "{APP_BUILD} = v1.0.1"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-23",
   "expected": "El acordeón de disponibles se muestra colapsado con carrusel de miniaturas y el de no disponibles expandido con la lista completa de ítems no disponibles.",
   "form_factor": "app",
   "id": "TC-B2C37-APP-007",
   "name": "Verificar que el carrito muestra disponibles colapsados y no disponibles expandidos [App] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes carne papas zanahoria y espinaca 215 g) no se puede dejar en el carro: su ficha de producto en la app muestra la etiqueta «Pronto disponible» y no tiene botón «Agregar», así que no existe un carro con un ítem no disponible. Acción: declarar en el Excel de data un {SKU_NO_DISPONIBLE} que pueda estar en el carro con estado no disponible (por ejemplo, uno que se agotó después de agregarse).",
   "observed": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes carne papas zanahoria y espinaca 215 g) no se puede dejar en el carro: su ficha de producto en la app muestra la etiqueta «Pronto disponible» y no tiene botón «Agregar», así que no existe un carro con un ítem no disponible. Acción: declarar en el Excel de data un {SKU_NO_DISPONIBLE} que pueda estar en el carro con estado no disponible (por ejemplo, uno que se agotó después de agregarse).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "screenshots": [
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C37-APP-007-android.png"
    }
   ],
   "spec": "tests-app/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el acordeón de ítems disponibles colapsado (logo Unimarc + número de ítems + \"productos\" + chevron ↓ + ícono de menú ⋯ y el botón \"Mostrar más\") con el carrusel de miniaturas de 60×60 px, y el acordeón de ítems no disponibles expandido (ícono de carrito tachado + \"Productos no disponibles\" + \"N productos\" + chevron ↓ y el botón \"Mostrar más\") con la lista completa de ítems no disponibles.",
   "test_data": "{APP_BUILD} = v1.0.1"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-23",
   "expected": "El carrusel muestra un tile \"+N\" en gris donde N es la cantidad de ítems disponibles que no se muestran como miniatura.",
   "form_factor": "app",
   "id": "TC-B2C37-APP-008",
   "name": "Verificar que el carrusel de disponibles muestra el tile \"+N\" con los ítems restantes [App] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes carne papas zanahoria y espinaca 215 g) no se puede dejar en el carro: su ficha de producto en la app muestra la etiqueta «Pronto disponible» y no tiene botón «Agregar», así que no existe un carro con un ítem no disponible. Acción: declarar en el Excel de data un {SKU_NO_DISPONIBLE} que pueda estar en el carro con estado no disponible (por ejemplo, uno que se agotó después de agregarse).",
   "observed": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes carne papas zanahoria y espinaca 215 g) no se puede dejar en el carro: su ficha de producto en la app muestra la etiqueta «Pronto disponible» y no tiene botón «Agregar», así que no existe un carro con un ítem no disponible. Acción: declarar en el Excel de data un {SKU_NO_DISPONIBLE} que pueda estar en el carro con estado no disponible (por ejemplo, uno que se agotó después de agregarse).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKUS_CARRUSEL} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "screenshots": [
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C37-APP-008-android.png"
    }
   ],
   "spec": "tests-app/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito con el acordeón de disponibles colapsado y muestra en el carrusel las miniaturas que caben y un tile \"+N\" en gris.",
   "test_data": "{APP_BUILD} = v1.0.1"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-23",
   "expected": "La sección de ítems disponibles queda expandida: el botón cambia a \"Mostrar menos\", el carrusel de miniaturas se oculta y se muestra la lista completa de ítems.",
   "form_factor": "app",
   "id": "TC-B2C37-APP-010",
   "name": "Verificar que una sección colapsada se expande al tocar \"Mostrar más\" [App] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes carne papas zanahoria y espinaca 215 g) no se puede dejar en el carro: su ficha de producto en la app muestra la etiqueta «Pronto disponible» y no tiene botón «Agregar», así que no existe un carro con un ítem no disponible. Acción: declarar en el Excel de data un {SKU_NO_DISPONIBLE} que pueda estar en el carro con estado no disponible (por ejemplo, uno que se agotó después de agregarse).",
   "observed": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes carne papas zanahoria y espinaca 215 g) no se puede dejar en el carro: su ficha de producto en la app muestra la etiqueta «Pronto disponible» y no tiene botón «Agregar», así que no existe un carro con un ítem no disponible. Acción: declarar en el Excel de data un {SKU_NO_DISPONIBLE} que pueda estar en el carro con estado no disponible (por ejemplo, uno que se agotó después de agregarse).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "spec": "tests-app/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.\n3. El usuario toca el botón \"Mostrar más\" del acordeón de ítems disponibles.\n4. El sistema expande la sección: el botón cambia a \"Mostrar menos\", el carrusel de miniaturas se oculta y se muestra la lista completa de ítems.",
   "test_data": "{APP_BUILD} = v1.0.1"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-23",
   "expected": "La sección queda colapsada: el botón cambia a \"Mostrar más\", la lista de ítems se oculta y se muestra el carrusel de miniaturas.",
   "form_factor": "app",
   "id": "TC-B2C37-APP-011",
   "name": "Verificar que una sección expandida se colapsa al tocar \"Mostrar menos\" [App] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes carne papas zanahoria y espinaca 215 g) no se puede dejar en el carro: su ficha de producto en la app muestra la etiqueta «Pronto disponible» y no tiene botón «Agregar», así que no existe un carro con un ítem no disponible. Acción: declarar en el Excel de data un {SKU_NO_DISPONIBLE} que pueda estar en el carro con estado no disponible (por ejemplo, uno que se agotó después de agregarse).",
   "observed": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes carne papas zanahoria y espinaca 215 g) no se puede dejar en el carro: su ficha de producto en la app muestra la etiqueta «Pronto disponible» y no tiene botón «Agregar», así que no existe un carro con un ítem no disponible. Acción: declarar en el Excel de data un {SKU_NO_DISPONIBLE} que pueda estar en el carro con estado no disponible (por ejemplo, uno que se agotó después de agregarse).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "spec": "tests-app/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.\n3. El usuario toca el botón \"Mostrar más\" del acordeón de ítems disponibles.\n4. El sistema expande la sección: el botón cambia a \"Mostrar menos\", el carrusel de miniaturas se oculta y se muestra la lista completa de ítems.\n5. El usuario toca el botón \"Mostrar menos\" del acordeón de ítems disponibles.\n6. El sistema colapsa la sección: el botón cambia a \"Mostrar más\", la lista de ítems se oculta y se muestra el carrusel de miniaturas.",
   "test_data": "{APP_BUILD} = v1.0.1"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-23",
   "expected": "Cada sección cambia de estado sin modificar el estado de la otra (disponibles expandida y no disponibles colapsada al final).",
   "form_factor": "app",
   "id": "TC-B2C37-APP-012",
   "name": "Verificar que las secciones disponibles y no disponibles cambian de estado de forma independiente [App] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes carne papas zanahoria y espinaca 215 g) no se puede dejar en el carro: su ficha de producto en la app muestra la etiqueta «Pronto disponible» y no tiene botón «Agregar», así que no existe un carro con un ítem no disponible. Acción: declarar en el Excel de data un {SKU_NO_DISPONIBLE} que pueda estar en el carro con estado no disponible (por ejemplo, uno que se agotó después de agregarse).",
   "observed": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes carne papas zanahoria y espinaca 215 g) no se puede dejar en el carro: su ficha de producto en la app muestra la etiqueta «Pronto disponible» y no tiene botón «Agregar», así que no existe un carro con un ítem no disponible. Acción: declarar en el Excel de data un {SKU_NO_DISPONIBLE} que pueda estar en el carro con estado no disponible (por ejemplo, uno que se agotó después de agregarse).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "spec": "tests-app/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.\n3. El usuario toca el botón \"Mostrar más\" del acordeón de ítems disponibles.\n4. El sistema expande la sección de ítems disponibles y mantiene expandida la sección de no disponibles.\n5. El usuario toca el botón \"Mostrar menos\" del acordeón de productos no disponibles.\n6. El sistema colapsa la sección de no disponibles y mantiene expandida la sección de ítems disponibles.",
   "test_data": "{APP_BUILD} = v1.0.1"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-23",
   "expected": "Tras recargar o reingresar, el carrito vuelve al estado inicial: disponibles colapsado y no disponibles expandido.",
   "form_factor": "app",
   "id": "TC-B2C37-APP-013",
   "name": "Verificar que el estado de los acordeones vuelve al inicial al recargar el carrito [App] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes carne papas zanahoria y espinaca 215 g) no se puede dejar en el carro: su ficha de producto en la app muestra la etiqueta «Pronto disponible» y no tiene botón «Agregar», así que no existe un carro con un ítem no disponible. Acción: declarar en el Excel de data un {SKU_NO_DISPONIBLE} que pueda estar en el carro con estado no disponible (por ejemplo, uno que se agotó después de agregarse).",
   "observed": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes carne papas zanahoria y espinaca 215 g) no se puede dejar en el carro: su ficha de producto en la app muestra la etiqueta «Pronto disponible» y no tiene botón «Agregar», así que no existe un carro con un ítem no disponible. Acción: declarar en el Excel de data un {SKU_NO_DISPONIBLE} que pueda estar en el carro con estado no disponible (por ejemplo, uno que se agotó después de agregarse).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "spec": "tests-app/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.\n3. El usuario toca el botón \"Mostrar más\" del acordeón de ítems disponibles.\n4. El sistema expande la sección de ítems disponibles.\n5. El usuario sale del carro y vuelve a ingresar tocando el ícono del carro.\n6. El sistema carga el carrito con el acordeón de disponibles colapsado y el de no disponibles expandido.",
   "test_data": "{APP_BUILD} = v1.0.1"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-23",
   "expected": "Cada ítem disponible muestra imagen, nombre, precio unitario, precio final, cantidad actual, controles +/− y acción de eliminar.",
   "form_factor": "app",
   "id": "TC-B2C37-APP-014",
   "name": "Verificar que cada ítem disponible muestra imagen, nombre, precios, cantidad y controles [App] [Logueado]",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene solo {SKU_VALID_001} (disponible)",
   "screenshots": [
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C37-APP-014-android.png"
    }
   ],
   "spec": "tests-app/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito con el acordeón de disponibles expandido y muestra por cada ítem: imagen, nombre, precio unitario, precio final (con descuentos), cantidad actual, controles +/− y acción de eliminar.",
   "test_data": "{APP_BUILD} = v1.0.1"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-23",
   "expected": "La lista de ítems disponibles muestra primero {SKU_VALID_001}, luego {SKU_PESABLE} y al final {SKU_UNITARIO}.",
   "form_factor": "app",
   "id": "TC-B2C37-APP-015",
   "name": "Verificar que los ítems disponibles se ordenan del agregado más reciente al más antiguo [App] [Logueado]",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro está vacío",
   "screenshots": [
    {
     "caption": "Android · Paso 6 — carro con tres items",
     "file": "TC-B2C37-APP-015-android-p06-carro-con-tres-items.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C37-APP-015-android.png"
    }
   ],
   "spec": "tests-app/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario busca {SKU_UNITARIO} en la App y lo agrega al carro.\n2. El usuario busca {SKU_PESABLE} en la App y lo agrega al carro.\n3. El usuario busca {SKU_VALID_001} en la App y lo agrega al carro.\n4. El sistema agrega los tres productos al carro.\n5. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n6. El sistema carga el carrito y lista los ítems disponibles en el orden {SKU_VALID_001}, {SKU_PESABLE}, {SKU_UNITARIO}.",
   "test_data": "{APP_BUILD} = v1.0.1"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-23",
   "expected": "Cada ítem no disponible muestra imagen con overlay, badge \"Pronto disponible\", nombre, \"Faltantes: N un\" y CTA \"Reemplazar\".",
   "form_factor": "app",
   "id": "TC-B2C37-APP-016",
   "name": "Verificar que cada ítem no disponible muestra overlay, badge, faltantes y \"Reemplazar\" [App] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes carne papas zanahoria y espinaca 215 g) no se puede dejar en el carro: su ficha de producto en la app muestra la etiqueta «Pronto disponible» y no tiene botón «Agregar», así que no existe un carro con un ítem no disponible. Acción: declarar en el Excel de data un {SKU_NO_DISPONIBLE} que pueda estar en el carro con estado no disponible (por ejemplo, uno que se agotó después de agregarse).",
   "observed": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes carne papas zanahoria y espinaca 215 g) no se puede dejar en el carro: su ficha de producto en la app muestra la etiqueta «Pronto disponible» y no tiene botón «Agregar», así que no existe un carro con un ítem no disponible. Acción: declarar en el Excel de data un {SKU_NO_DISPONIBLE} que pueda estar en el carro con estado no disponible (por ejemplo, uno que se agotó después de agregarse).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "spec": "tests-app/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito y muestra por cada ítem no disponible: imagen con overlay blanco semitransparente, badge \"Pronto disponible\" (fondo gris, texto gris), nombre, texto \"Faltantes: N un\" con la cantidad solicitada y CTA \"Reemplazar\".",
   "test_data": "{APP_BUILD} = v1.0.1"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-23",
   "expected": "El ítem no disponible no tiene controles para modificar la cantidad y el Subtotal corresponde solo a {SKU_VALID_001}.",
   "form_factor": "app",
   "id": "TC-B2C37-APP-017",
   "name": "Verificar que los ítems no disponibles no permiten cambiar cantidad ni suman al subtotal [App] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes carne papas zanahoria y espinaca 215 g) no se puede dejar en el carro: su ficha de producto en la app muestra la etiqueta «Pronto disponible» y no tiene botón «Agregar», así que no existe un carro con un ítem no disponible. Acción: declarar en el Excel de data un {SKU_NO_DISPONIBLE} que pueda estar en el carro con estado no disponible (por ejemplo, uno que se agotó después de agregarse).",
   "observed": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes carne papas zanahoria y espinaca 215 g) no se puede dejar en el carro: su ficha de producto en la app muestra la etiqueta «Pronto disponible» y no tiene botón «Agregar», así que no existe un carro con un ítem no disponible. Acción: declarar en el Excel de data un {SKU_NO_DISPONIBLE} que pueda estar en el carro con estado no disponible (por ejemplo, uno que se agotó después de agregarse).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "spec": "tests-app/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito con el acordeón de no disponibles expandido.\n3. El usuario revisa un ítem no disponible y la tarjeta de totales.\n4. El sistema muestra el ítem no disponible sin controles +/− y el Subtotal calculado solo con los ítems disponibles.",
   "test_data": "{APP_BUILD} = v1.0.1"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-23",
   "expected": "Se inicia el flujo de productos similares definido en B2C-40 para {SKU_NO_DISPONIBLE}.",
   "form_factor": "app",
   "id": "TC-B2C37-APP-018",
   "name": "Verificar que \"Reemplazar\" inicia el flujo de productos similares [App] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes carne papas zanahoria y espinaca 215 g) no se puede dejar en el carro: su ficha de producto en la app muestra la etiqueta «Pronto disponible» y no tiene botón «Agregar», así que no existe un carro con un ítem no disponible. Acción: declarar en el Excel de data un {SKU_NO_DISPONIBLE} que pueda estar en el carro con estado no disponible (por ejemplo, uno que se agotó después de agregarse).",
   "observed": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes carne papas zanahoria y espinaca 215 g) no se puede dejar en el carro: su ficha de producto en la app muestra la etiqueta «Pronto disponible» y no tiene botón «Agregar», así que no existe un carro con un ítem no disponible. Acción: declarar en el Excel de data un {SKU_NO_DISPONIBLE} que pueda estar en el carro con estado no disponible (por ejemplo, uno que se agotó después de agregarse).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "spec": "tests-app/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito con el acordeón de no disponibles expandido.\n3. El usuario toca \"Reemplazar\" en el ítem {SKU_NO_DISPONIBLE}.\n4. El sistema inicia el flujo de búsqueda de productos similares (B2C-40).",
   "test_data": "{APP_BUILD} = v1.0.1"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-23",
   "expected": "El modal muestra imagen, título \"Vaciar el carro\", subtítulo \"¿Deseas eliminar todos los productos de tu carro?\", \"Sí, eliminar\", \"No, gracias\" e ícono \"X\".",
   "form_factor": "app",
   "id": "TC-B2C37-APP-019",
   "name": "Verificar que \"Vaciar carro\" abre el modal de confirmación con su contenido [App] [Logueado]",
   "observation": "El modal «Vaciar el carro» muestra imagen, título «Vaciar el carro», subtítulo «¿Deseas eliminar todos los productos de tu carro?», «Sí, eliminar», «No, gracias» y la X (verificado en captura).",
   "observed": "El modal «Vaciar el carro» muestra imagen, título «Vaciar el carro», subtítulo «¿Deseas eliminar todos los productos de tu carro?», «Sí, eliminar», «No, gracias» y la X (verificado en captura).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}",
   "screenshots": [
    {
     "caption": "Android · Paso 6 — modal vaciar el carro",
     "file": "TC-B2C37-APP-019-android-p06-modal-vaciar-el-carro.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C37-APP-019-android.png"
    }
   ],
   "spec": "tests-app/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca el menú de tres puntos (⋯).\n4. El sistema despliega las opciones \"Guardar como lista\" y \"Vaciar carro\".\n5. El usuario toca \"Vaciar carro\".\n6. El sistema despliega un modal con imagen, título \"Vaciar el carro\", subtítulo \"¿Deseas eliminar todos los productos de tu carro?\", botones \"Sí, eliminar\" y \"No, gracias\" e ícono \"X\" en la esquina superior izquierda.",
   "test_data": "{APP_BUILD} = v1.0.1"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-23",
   "expected": "Durante el procesamiento, \"Sí, eliminar\" se muestra como indicador de carga y \"No, gracias\" queda deshabilitado.",
   "form_factor": "app",
   "id": "TC-B2C37-APP-020",
   "name": "Verificar que el modal muestra el estado de carga al confirmar el vaciado [App] [Logueado]",
   "observation": "Causa: el caso necesita una herramienta de proxy para observar/demorar la red (estado de carga, error de red) y el token {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: definir la herramienta en el Excel de data.",
   "observed": "Causa: el caso necesita una herramienta de proxy para observar/demorar la red (estado de carga, error de red) y el token {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: definir la herramienta en el Excel de data.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}\n- {HERRAMIENTA_PROXY_APP} configurado con throttling de red lenta",
   "spec": "tests-app/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca el menú de tres puntos (⋯).\n4. El sistema despliega las opciones \"Guardar como lista\" y \"Vaciar carro\".\n5. El usuario toca \"Vaciar carro\".\n6. El sistema despliega el modal de confirmación \"Vaciar el carro\".\n7. El usuario toca \"Sí, eliminar\".\n8. El sistema reemplaza el botón \"Sí, eliminar\" por un indicador de carga y deshabilita \"No, gracias\" mientras procesa.",
   "test_data": "{APP_BUILD} = v1.0.1"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-23",
   "expected": "El carro queda sin ítems y muestra el estado vacío con \"¡Tu carro está vacío!\", su subtítulo y el botón \"Ir a comprar\".",
   "form_factor": "app",
   "id": "TC-B2C37-APP-021",
   "name": "Verificar que \"Sí, eliminar\" vacía el carro y muestra el estado de carro vacío [App] [Logueado]",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}",
   "screenshots": [
    {
     "caption": "Android · Paso 7 — carro vacio",
     "file": "TC-B2C37-APP-021-android-p07-carro-vacio.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C37-APP-021-android.png"
    }
   ],
   "spec": "tests-app/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca el menú de tres puntos (⋯).\n4. El sistema despliega las opciones \"Guardar como lista\" y \"Vaciar carro\".\n5. El usuario toca \"Vaciar carro\".\n6. El sistema despliega el modal de confirmación \"Vaciar el carro\".\n7. El usuario toca \"Sí, eliminar\".\n8. El sistema elimina todos los ítems y muestra imagen, título \"¡Tu carro está vacío!\", subtítulo \"Descubre todas las ofertas que tenemos para ti y llena tu despensa.\" y botón \"Ir a comprar\".",
   "test_data": "{APP_BUILD} = v1.0.1"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-23",
   "expected": "El modal se cierra y el carro conserva {SKU_VALID_001} y {SKU_UNITARIO} con sus cantidades.",
   "form_factor": "app",
   "id": "TC-B2C37-APP-022",
   "name": "Verificar que \"No, gracias\" cierra el modal sin cambios en el carro [App] [Logueado]",
   "observation": "«No, gracias» cierra el modal y el carro conserva los 2 productos con 1 unidad cada uno (verificado en captura).",
   "observed": "«No, gracias» cierra el modal y el carro conserva los 2 productos con 1 unidad cada uno (verificado en captura).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}",
   "screenshots": [
    {
     "caption": "Android · Paso 6 — modal vaciar el carro",
     "file": "TC-B2C37-APP-022-android-p06-modal-vaciar-el-carro.png"
    },
    {
     "caption": "Android · Paso 7 — tras cerrar el modal",
     "file": "TC-B2C37-APP-022-android-p07-tras-cerrar-el-modal.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C37-APP-022-android.png"
    }
   ],
   "spec": "tests-app/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca el menú de tres puntos (⋯).\n4. El sistema despliega las opciones \"Guardar como lista\" y \"Vaciar carro\".\n5. El usuario toca \"Vaciar carro\".\n6. El sistema despliega el modal de confirmación \"Vaciar el carro\".\n7. El usuario toca \"No, gracias\".\n8. El sistema cierra el modal y mantiene el carrito sin cambios.",
   "test_data": "{APP_BUILD} = v1.0.1"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-23",
   "expected": "El modal se cierra y el carro conserva {SKU_VALID_001} y {SKU_UNITARIO} con sus cantidades.",
   "form_factor": "app",
   "id": "TC-B2C37-APP-023",
   "name": "Verificar que la \"X\" del modal lo cierra sin cambios en el carro [App] [Logueado]",
   "observation": "La X del modal «Vaciar el carro» lo cierra y el carro conserva los 2 productos con 1 unidad cada uno (verificado en captura).",
   "observed": "La X del modal «Vaciar el carro» lo cierra y el carro conserva los 2 productos con 1 unidad cada uno (verificado en captura).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}",
   "screenshots": [
    {
     "caption": "Android · Paso 6 — modal vaciar el carro",
     "file": "TC-B2C37-APP-023-android-p06-modal-vaciar-el-carro.png"
    },
    {
     "caption": "Android · Paso 7 — tras cerrar el modal",
     "file": "TC-B2C37-APP-023-android-p07-tras-cerrar-el-modal.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C37-APP-023-android.png"
    }
   ],
   "spec": "tests-app/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca el menú de tres puntos (⋯).\n4. El sistema despliega las opciones \"Guardar como lista\" y \"Vaciar carro\".\n5. El usuario toca \"Vaciar carro\".\n6. El sistema despliega el modal de confirmación \"Vaciar el carro\".\n7. El usuario toca el ícono \"X\" del modal.\n8. El sistema cierra el modal y mantiene el carrito sin cambios.",
   "test_data": "{APP_BUILD} = v1.0.1"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-23",
   "expected": "Se muestra el toast \"Información importante\" con el mensaje de carnet y {SKU_ALCOHOL} permanece en el carrito.",
   "form_factor": "app",
   "id": "TC-B2C37-APP-024",
   "name": "Verificar que el carrito muestra el toast de restricción de alcohol [App] [Logueado]",
   "observation": "No ejecutado: el toast «Información importante» (restricción de alcohol) dura 4 segundos y la automatización no logró capturarlo de forma confiable al abrir el carro con {SKU_ALCOHOL}; en las capturas tomadas varios segundos después solo aparece el toast de monto mínimo. No se concluye defecto: queda por verificar con captura inmediata al abrir el carro. Causa de la interrupción: inestabilidad del emulador Android durante la sesión.",
   "observed": "No ejecutado: el toast «Información importante» (restricción de alcohol) dura 4 segundos y la automatización no logró capturarlo de forma confiable al abrir el carro con {SKU_ALCOHOL}; en las capturas tomadas varios segundos después solo aparece el toast de monto mínimo. No se concluye defecto: queda por verificar con captura inmediata al abrir el carro. Causa de la interrupción: inestabilidad del emulador Android durante la sesión.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_ALCOHOL} (producto con restricción de alcohol)",
   "screenshots": [
    {
     "caption": "Android · Paso 5 — carro con sku alcohol",
     "file": "TC-B2C37-APP-024-android-p05-carro-con-sku-alcohol.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C37-APP-024-android.png"
    }
   ],
   "spec": "tests-app/B2C-37.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito y muestra un toast informativo con título \"Información importante\", el mensaje \"Deberás mostrar tu carnet al recibir compras de bebidas alcohólicas.\" e ícono \"X\".",
   "test_data": "{APP_BUILD} = v1.0.1"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-23",
   "expected": "El toast deja de mostrarse y {SKU_ALCOHOL} permanece en el carrito.",
   "form_factor": "app",
   "id": "TC-B2C37-APP-025",
   "name": "Verificar que la \"X\" cierra el toast de restricción de alcohol [App] [Logueado]",
   "observation": "No ejecutado: el toast «Información importante» (restricción de alcohol) dura 4 segundos y la automatización no logró capturarlo de forma confiable al abrir el carro con {SKU_ALCOHOL}; en las capturas tomadas varios segundos después solo aparece el toast de monto mínimo. No se concluye defecto: queda por verificar con captura inmediata al abrir el carro. Causa de la interrupción: inestabilidad del emulador Android durante la sesión.",
   "observed": "No ejecutado: el toast «Información importante» (restricción de alcohol) dura 4 segundos y la automatización no logró capturarlo de forma confiable al abrir el carro con {SKU_ALCOHOL}; en las capturas tomadas varios segundos después solo aparece el toast de monto mínimo. No se concluye defecto: queda por verificar con captura inmediata al abrir el carro. Causa de la interrupción: inestabilidad del emulador Android durante la sesión.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_ALCOHOL} (producto con restricción de alcohol)",
   "screenshots": [
    {
     "caption": "Android · Paso 5 — carro con sku alcohol",
     "file": "TC-B2C37-APP-025-android-p05-carro-con-sku-alcohol.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C37-APP-025-android.png"
    }
   ],
   "spec": "tests-app/B2C-37.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito y muestra un toast informativo con título \"Información importante\", el mensaje \"Deberás mostrar tu carnet al recibir compras de bebidas alcohólicas.\" e ícono \"X\".\n3. El usuario toca el ícono \"X\" del toast.\n4. El sistema cierra el toast.",
   "test_data": "{APP_BUILD} = v1.0.1"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-23",
   "expected": "El toast desaparece solo a los 4 segundos de mostrarse.",
   "form_factor": "app",
   "id": "TC-B2C37-APP-026",
   "name": "Verificar que el toast de restricción de alcohol desaparece a los 4 segundos [App] [Logueado]",
   "observation": "No ejecutado: el toast «Información importante» (restricción de alcohol) dura 4 segundos y la automatización no logró capturarlo de forma confiable al abrir el carro con {SKU_ALCOHOL}; en las capturas tomadas varios segundos después solo aparece el toast de monto mínimo. No se concluye defecto: queda por verificar con captura inmediata al abrir el carro. Causa de la interrupción: inestabilidad del emulador Android durante la sesión.",
   "observed": "No ejecutado: el toast «Información importante» (restricción de alcohol) dura 4 segundos y la automatización no logró capturarlo de forma confiable al abrir el carro con {SKU_ALCOHOL}; en las capturas tomadas varios segundos después solo aparece el toast de monto mínimo. No se concluye defecto: queda por verificar con captura inmediata al abrir el carro. Causa de la interrupción: inestabilidad del emulador Android durante la sesión.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_ALCOHOL} (producto con restricción de alcohol)",
   "screenshots": [
    {
     "caption": "Android · Paso 5 — carro con sku alcohol",
     "file": "TC-B2C37-APP-026-android-p05-carro-con-sku-alcohol.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C37-APP-026-android.png"
    }
   ],
   "spec": "tests-app/B2C-37.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito y muestra un toast informativo con título \"Información importante\", el mensaje \"Deberás mostrar tu carnet al recibir compras de bebidas alcohólicas.\" e ícono \"X\".\n3. El usuario espera 4 segundos sin interactuar con el toast.\n4. El sistema oculta el toast automáticamente.",
   "test_data": "{APP_BUILD} = v1.0.1"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-23",
   "expected": "Se muestra el estado de carro vacío con el mensaje que invita a agregar productos y el CTA \"Ir a Comprar\".",
   "form_factor": "app",
   "id": "TC-B2C37-APP-027",
   "name": "Verificar que el carrito sin ítems muestra el estado vacío con \"Ir a Comprar\" [App] [Guest]",
   "observation": "Carro vacío del invitado: «¡Tu carro está vacío!», subtítulo «Descubre todas las ofertas que tenemos para ti y llena tu despensa.» y botón «Ir a comprar» (verificado en captura).",
   "observed": "Carro vacío del invitado: «¡Tu carro está vacío!», subtítulo «Descubre todas las ofertas que tenemos para ti y llena tu despensa.» y botón «Ir a comprar» (verificado en captura).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión de invitado (sin iniciar sesión)\n- El carro está vacío",
   "screenshots": [
    {
     "caption": "Android · Paso 7 — carro vacio del invitado",
     "file": "TC-B2C37-APP-027-android-p07-carro-vacio-del-invitado.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C37-APP-027-android.png"
    }
   ],
   "spec": "tests-app/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el estado de carro vacío con un mensaje que invita a agregar productos y el CTA \"Ir a Comprar\".",
   "test_data": "{APP_BUILD} = v1.0.1"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-23",
   "expected": "El usuario queda en el Home de la App.",
   "form_factor": "app",
   "id": "TC-B2C37-APP-028",
   "name": "Verificar que \"Ir a Comprar\" del carro vacío redirige al Home [App] [Guest]",
   "observation": "«Ir a comprar» del carro vacío del invitado lleva al Home de la app (verificado en captura).",
   "observed": "«Ir a comprar» del carro vacío del invitado lleva al Home de la app (verificado en captura).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión de invitado (sin iniciar sesión)\n- El carro está vacío",
   "screenshots": [
    {
     "caption": "Android · Paso 7 — carro vacio del invitado",
     "file": "TC-B2C37-APP-028-android-p07-carro-vacio-del-invitado.png"
    },
    {
     "caption": "Android · Paso 8 — tras ir a comprar",
     "file": "TC-B2C37-APP-028-android-p08-tras-ir-a-comprar.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C37-APP-028-android.png"
    }
   ],
   "spec": "tests-app/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el estado de carro vacío con un mensaje que invita a agregar productos y el CTA \"Ir a Comprar\".\n3. El usuario toca \"Ir a Comprar\".\n4. El sistema redirige a el Home de la App.",
   "test_data": "{APP_BUILD} = v1.0.1"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-23",
   "expected": "Se muestra el estado de error CRT-020 completo y no se muestran ítems ni totales del carro.",
   "form_factor": "app",
   "id": "TC-B2C37-APP-029",
   "name": "Verificar que el carrito muestra el estado de error CRT-020 sin ítems parciales [App] [Logueado]",
   "observation": "Causa: el caso necesita una herramienta de proxy para observar/demorar la red (estado de carga, error de red) y el token {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: definir la herramienta en el Excel de data.",
   "observed": "Causa: el caso necesita una herramienta de proxy para observar/demorar la red (estado de carga, error de red) y el token {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: definir la herramienta en el Excel de data.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001}\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {CART_API_ENDPOINT}",
   "spec": "tests-app/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema muestra el estado de error con imagen, título \"No pudimos mostrar tu carro\", mensaje \"Tenemos problemas con cargar tus productos. Por favor, inténtalo otra vez.\", CTA \"Volver al inicio\", CTA \"Reintentar\" y \"Error: CRT-020\".",
   "test_data": "{APP_BUILD} = v1.0.1"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-23",
   "expected": "El usuario queda en el Home de la App.",
   "form_factor": "app",
   "id": "TC-B2C37-APP-030",
   "name": "Verificar que \"Volver al inicio\" del error de carga navega al Home [App] [Logueado]",
   "observation": "Causa: el caso necesita una herramienta de proxy para observar/demorar la red (estado de carga, error de red) y el token {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: definir la herramienta en el Excel de data.",
   "observed": "Causa: el caso necesita una herramienta de proxy para observar/demorar la red (estado de carga, error de red) y el token {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: definir la herramienta en el Excel de data.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001}\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {CART_API_ENDPOINT}",
   "spec": "tests-app/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema muestra el estado de error con imagen, título \"No pudimos mostrar tu carro\", mensaje \"Tenemos problemas con cargar tus productos. Por favor, inténtalo otra vez.\", CTA \"Volver al inicio\", CTA \"Reintentar\" y \"Error: CRT-020\".\n3. El usuario toca \"Volver al inicio\".\n4. El sistema navega a el Home de la App.",
   "test_data": "{APP_BUILD} = v1.0.1"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-23",
   "expected": "El carrito se carga correctamente y muestra {SKU_VALID_001}.",
   "form_factor": "app",
   "id": "TC-B2C37-APP-031",
   "name": "Verificar que \"Reintentar\" vuelve a cargar el contenido del carrito [App] [Logueado]",
   "observation": "Causa: el caso necesita una herramienta de proxy para observar/demorar la red (estado de carga, error de red) y el token {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: definir la herramienta en el Excel de data.",
   "observed": "Causa: el caso necesita una herramienta de proxy para observar/demorar la red (estado de carga, error de red) y el token {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: definir la herramienta en el Excel de data.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001}\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {CART_API_ENDPOINT}",
   "spec": "tests-app/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema muestra el estado de error con imagen, título \"No pudimos mostrar tu carro\", mensaje \"Tenemos problemas con cargar tus productos. Por favor, inténtalo otra vez.\", CTA \"Volver al inicio\", CTA \"Reintentar\" y \"Error: CRT-020\".\n3. El usuario desactiva en {HERRAMIENTA_PROXY_APP} el error forzado en {CART_API_ENDPOINT}.\n4. El usuario toca \"Reintentar\".\n5. El sistema vuelve a solicitar el contenido y carga el carrito con {SKU_VALID_001}.",
   "test_data": "{APP_BUILD} = v1.0.1"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-23",
   "expected": "Se muestra el toast de error CRT-076 y el carro conserva {SKU_VALID_001} y {SKU_UNITARIO} sin cambios.",
   "form_factor": "app",
   "id": "TC-B2C37-APP-032",
   "name": "Verificar que el error al vaciar muestra el toast CRT-076 y conserva los ítems [App] [Logueado]",
   "observation": "Causa: el caso necesita una herramienta de proxy para observar/demorar la red (estado de carga, error de red) y el token {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: definir la herramienta en el Excel de data.",
   "observed": "Causa: el caso necesita una herramienta de proxy para observar/demorar la red (estado de carga, error de red) y el token {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: definir la herramienta en el Excel de data.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {VACIAR_CARRO_API_ENDPOINT}",
   "spec": "tests-app/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca el menú de tres puntos (⋯).\n4. El sistema despliega las opciones \"Guardar como lista\" y \"Vaciar carro\".\n5. El usuario toca \"Vaciar carro\".\n6. El sistema despliega el modal de confirmación \"Vaciar el carro\".\n7. El usuario toca \"Sí, eliminar\".\n8. El sistema muestra el toast de error \"¡Lo sentimos! No pudimos vaciar tu carro, vuelve a intentarlo! [CRT-076]\".",
   "test_data": "{APP_BUILD} = v1.0.1"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-23",
   "expected": "El toast sigue visible después de 10 segundos y solo se cierra con la \"X\".",
   "form_factor": "app",
   "id": "TC-B2C37-APP-033",
   "name": "Verificar que el toast de error CRT-076 permanece hasta cerrarlo con la X [App] [Logueado]",
   "observation": "Causa: el caso necesita una herramienta de proxy para observar/demorar la red (estado de carga, error de red) y el token {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: definir la herramienta en el Excel de data.",
   "observed": "Causa: el caso necesita una herramienta de proxy para observar/demorar la red (estado de carga, error de red) y el token {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: definir la herramienta en el Excel de data.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {VACIAR_CARRO_API_ENDPOINT}",
   "spec": "tests-app/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca el menú de tres puntos (⋯).\n4. El sistema despliega las opciones \"Guardar como lista\" y \"Vaciar carro\".\n5. El usuario toca \"Vaciar carro\".\n6. El sistema despliega el modal de confirmación \"Vaciar el carro\".\n7. El usuario toca \"Sí, eliminar\".\n8. El sistema muestra el toast de error \"¡Lo sentimos! No pudimos vaciar tu carro, vuelve a intentarlo! [CRT-076]\".\n9. El usuario espera 10 segundos sin interactuar con el toast.\n10. El sistema mantiene visible el toast de error.\n11. El usuario toca el ícono \"X\" del toast.\n12. El sistema cierra el toast.",
   "test_data": "{APP_BUILD} = v1.0.1"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-23",
   "expected": "Se muestra el toast con el faltante real y el CTA \"Continuar con la entrega\" deshabilitado con el label \"Mínimo de compra $Y\".",
   "form_factor": "app",
   "id": "TC-B2C37-APP-034",
   "name": "Verificar que el carrito bajo el mínimo muestra el faltante y deshabilita el CTA [App] [Logueado]",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El método de entrega activo es Despacho a domicilio\n- El carro contiene {SKU_VALID_001} x 1 y el subtotal es menor a {MONTO_MINIMO_COMPRA}",
   "screenshots": [
    {
     "caption": "Android · Paso 5 — carro bajo el minimo",
     "file": "TC-B2C37-APP-034-android-p05-carro-bajo-el-minimo.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C37-APP-034-android.png"
    }
   ],
   "spec": "tests-app/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito, muestra el toast \"¡Solo te faltan $X para ir a pagar!\" con X = {MONTO_MINIMO_COMPRA} − subtotal y el botón \"Continuar con la entrega\" deshabilitado con el label \"Mínimo de compra ${MONTO_MINIMO_COMPRA}\".",
   "test_data": "{APP_BUILD} = v1.0.1"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-23",
   "expected": "El toast muestra el nuevo faltante: {MONTO_MINIMO_COMPRA} − subtotal con 2 unidades de {SKU_VALID_001}.",
   "form_factor": "app",
   "id": "TC-B2C37-APP-035",
   "name": "Verificar que el monto faltante del toast se actualiza al cambiar la cantidad [App] [Logueado]",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El método de entrega activo es Despacho a domicilio\n- El carro contiene {SKU_VALID_001} x 1 y el subtotal es menor a {MONTO_MINIMO_COMPRA}\n- Con 2 unidades de {SKU_VALID_001} el subtotal sigue siendo menor a {MONTO_MINIMO_COMPRA}",
   "screenshots": [
    {
     "caption": "Android · Paso 5 — carro con 2 unidades",
     "file": "TC-B2C37-APP-035-android-p05-carro-con-2-unidades.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C37-APP-035-android.png"
    }
   ],
   "spec": "tests-app/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito, muestra el toast \"¡Solo te faltan $X para ir a pagar!\" con X = {MONTO_MINIMO_COMPRA} − subtotal y el botón \"Continuar con la entrega\" deshabilitado con el label \"Mínimo de compra ${MONTO_MINIMO_COMPRA}\".\n3. El usuario toca una vez el control + de {SKU_VALID_001}.\n4. El sistema actualiza la cantidad y recalcula el monto del toast sin recargar la página.",
   "test_data": "{APP_BUILD} = v1.0.1"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-23",
   "expected": "El toast deja de mostrarse y el CTA \"Continuar con la entrega\" sigue deshabilitado.",
   "form_factor": "app",
   "id": "TC-B2C37-APP-036",
   "name": "Verificar que la X cierra el toast de monto mínimo [App] [Logueado]",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El método de entrega activo es Despacho a domicilio\n- El carro contiene {SKU_VALID_001} x 1 y el subtotal es menor a {MONTO_MINIMO_COMPRA}",
   "screenshots": [
    {
     "caption": "Android · Paso 6 — tras cerrar el toast",
     "file": "TC-B2C37-APP-036-android-p06-tras-cerrar-el-toast.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C37-APP-036-android.png"
    }
   ],
   "spec": "tests-app/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito, muestra el toast \"¡Solo te faltan $X para ir a pagar!\" con X = {MONTO_MINIMO_COMPRA} − subtotal y el botón \"Continuar con la entrega\" deshabilitado con el label \"Mínimo de compra ${MONTO_MINIMO_COMPRA}\".\n3. El usuario toca el ícono \"X\" del toast.\n4. El sistema cierra el toast.",
   "test_data": "{APP_BUILD} = v1.0.1"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-23",
   "expected": "El CTA \"Continuar con la entrega\" está habilitado y no se muestra el toast \"¡Solo te faltan $X para ir a pagar!\".",
   "form_factor": "app",
   "id": "TC-B2C37-APP-037",
   "name": "Verificar que el carrito sobre el mínimo con Retiro habilita \"Continuar con la entrega\" [App] [Logueado]",
   "observation": "No ejecutado: la precondición exige tener activo el método de entrega «Retiro en tienda en Unimarc Las Condes» con el carro sobre el mínimo, y no se alcanzó a configurar en la sesión por la inestabilidad del emulador Android. Queda por verificar.",
   "observed": "No ejecutado: la precondición exige tener activo el método de entrega «Retiro en tienda en Unimarc Las Condes» con el carro sobre el mínimo, y no se alcanzó a configurar en la sesión por la inestabilidad del emulador Android. Queda por verificar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El método de entrega activo es Retiro en tienda en {TIENDA_RETIRO_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}",
   "screenshots": [
    {
     "caption": "Android · Paso 5 — carro sobre el minimo",
     "file": "TC-B2C37-APP-037-android-p05-carro-sobre-el-minimo.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C37-APP-037-android.png"
    }
   ],
   "spec": "tests-app/B2C-37.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito con el CTA \"Continuar con la entrega\" habilitado y sin el toast de monto faltante.",
   "test_data": "{APP_BUILD} = v1.0.1"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-23",
   "expected": "Con {UNIDADES_SOBRE_MINIMO} unidades el toast desaparece y el CTA \"Continuar con la entrega\" queda habilitado.",
   "form_factor": "app",
   "id": "TC-B2C37-APP-038",
   "name": "Verificar que al alcanzar el mínimo se oculta el toast y se habilita el CTA en tiempo real [App] [Logueado]",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El método de entrega activo es Despacho a domicilio\n- El carro contiene {SKU_VALID_001} x 1 y el subtotal es menor a {MONTO_MINIMO_COMPRA}",
   "screenshots": [
    {
     "caption": "Android · Paso 5 — carro con 11 unidades",
     "file": "TC-B2C37-APP-038-android-p05-carro-con-11-unidades.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C37-APP-038-android.png"
    }
   ],
   "spec": "tests-app/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito, muestra el toast \"¡Solo te faltan $X para ir a pagar!\" con X = {MONTO_MINIMO_COMPRA} − subtotal y el botón \"Continuar con la entrega\" deshabilitado con el label \"Mínimo de compra ${MONTO_MINIMO_COMPRA}\".\n3. El usuario toca el control + de {SKU_VALID_001} hasta llegar a {UNIDADES_SOBRE_MINIMO} unidades.\n4. El sistema recalcula el subtotal, oculta el toast y habilita el CTA \"Continuar con la entrega\" sin recargar la página.",
   "test_data": "{APP_BUILD} = v1.0.1"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-23",
   "expected": "Se muestra el banner \"Ahorra $X siendo Diamante · Prueba y disfruta 15 días gratis.\" con $X calculado sobre el carro y el CTA \"Lo quiero\".",
   "form_factor": "app",
   "id": "TC-B2C37-APP-039",
   "name": "Verificar que el carrito muestra el banner de membresía para cliente sin membresía previa [App] [Logueado]",
   "observation": "Causa: {SKU_OFERTA_MEMBRESIA} (000000000000178089-UN, Watt's mermelada) no muestra precio de membresía/Diamante en el carro de la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}: solo una oferta normal del 23 %. Sin un producto con precio Diamante no se muestra el banner «Ahorra $X siendo Diamante». Con otro SKU en la misma cuenta (000000000000653466-UN, vino 1865 merlot) el carro sí mostró «Ahorra $1.529 siendo Diamante · Prueba y disfruta 15 días gratis» con «Lo quiero», así que la funcionalidad existe. Acción: declarar en el Excel de data un {SKU_OFERTA_MEMBRESIA} que tenga precio Diamante.",
   "observed": "Causa: {SKU_OFERTA_MEMBRESIA} (000000000000178089-UN, Watt's mermelada) no muestra precio de membresía/Diamante en el carro de la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}: solo una oferta normal del 23 %. Sin un producto con precio Diamante no se muestra el banner «Ahorra $X siendo Diamante». Con otro SKU en la misma cuenta (000000000000653466-UN, vino 1865 merlot) el carro sí mostró «Ahorra $1.529 siendo Diamante · Prueba y disfruta 15 días gratis» con «Lo quiero», así que la funcionalidad existe. Acción: declarar en el Excel de data un {SKU_OFERTA_MEMBRESIA} que tenga precio Diamante.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta {COMPRADOR_SIN_MEMBRESIA_USER} nunca tuvo membresía\n- El carro contiene {SKU_VALID_001}\n- El carrito contiene productos con descuentos membresía {SKU_OFERTA_MEMBRESIA}",
   "screenshots": [
    {
     "caption": "Android · Paso 5 — carro con la cuenta sin membresia",
     "file": "TC-B2C37-APP-039-android-p05-carro-con-la-cuenta-sin-membresia.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C37-APP-039-android.png"
    }
   ],
   "spec": "tests-app/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner \"Ahorra $X siendo Diamante · Prueba y disfruta 15 días gratis.\" con el CTA \"Lo quiero\".",
   "test_data": "{APP_BUILD} = v1.0.1"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-23",
   "expected": "Se abre el flujo de contratación de membresía definido en B2C-42.",
   "form_factor": "app",
   "id": "TC-B2C37-APP-040",
   "name": "Verificar que \"Lo quiero\" abre el flujo de contratación de membresía [App] [Logueado]",
   "observation": "Causa: {SKU_OFERTA_MEMBRESIA} (000000000000178089-UN, Watt's mermelada) no muestra precio de membresía/Diamante en el carro de la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}: solo una oferta normal del 23 %. Sin un producto con precio Diamante no se muestra el banner «Ahorra $X siendo Diamante». Con otro SKU en la misma cuenta (000000000000653466-UN, vino 1865 merlot) el carro sí mostró «Ahorra $1.529 siendo Diamante · Prueba y disfruta 15 días gratis» con «Lo quiero», así que la funcionalidad existe. Acción: declarar en el Excel de data un {SKU_OFERTA_MEMBRESIA} que tenga precio Diamante.",
   "observed": "Causa: {SKU_OFERTA_MEMBRESIA} (000000000000178089-UN, Watt's mermelada) no muestra precio de membresía/Diamante en el carro de la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}: solo una oferta normal del 23 %. Sin un producto con precio Diamante no se muestra el banner «Ahorra $X siendo Diamante». Con otro SKU en la misma cuenta (000000000000653466-UN, vino 1865 merlot) el carro sí mostró «Ahorra $1.529 siendo Diamante · Prueba y disfruta 15 días gratis» con «Lo quiero», así que la funcionalidad existe. Acción: declarar en el Excel de data un {SKU_OFERTA_MEMBRESIA} que tenga precio Diamante.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta {COMPRADOR_SIN_MEMBRESIA_USER} nunca tuvo membresía\n- El carro contiene {SKU_VALID_001}",
   "screenshots": [
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C37-APP-040-android.png"
    }
   ],
   "spec": "tests-app/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner \"Ahorra $X siendo Diamante · Prueba y disfruta 15 días gratis.\" con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema abre el flujo de contratación de membresía (B2C-42).",
   "test_data": "{APP_BUILD} = v1.0.1"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-23",
   "expected": "Se muestra el banner \"Ahorrarías $X siendo Diamante · Vuelve, te extrañamos.\" con $X calculado sobre el carro y el CTA \"Renovar\".",
   "form_factor": "app",
   "id": "TC-B2C37-APP-041",
   "name": "Verificar que el carrito muestra el banner de renovación para membresía expirada [App] [Logueado]",
   "observation": "Causa: no se puede verificar el banner de renovación con la data actual. (1) El caso solo declara {SKU_VALID_001}, que no tiene precio Diamante: con él el carro de {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no muestra ningún banner de membresía. (2) Con un SKU con precio Diamante (000000000000653466-UN, vino 1865 merlot) la misma cuenta muestra el banner de cliente nuevo «Ahorra $1.529 siendo Diamante · Prueba y disfruta 15 días gratis» con «Lo quiero», y no el de renovación «Ahorrarías $X siendo Diamante · Vuelve, te extrañamos» con «Renovar». Hay que confirmar si la cuenta realmente tiene membresía vencida (data) o si la app muestra el banner equivocado (posible defecto). Acción: confirmar el estado de la cuenta en el backend y declarar en el caso un SKU con precio Diamante.",
   "observed": "Causa: no se puede verificar el banner de renovación con la data actual. (1) El caso solo declara {SKU_VALID_001}, que no tiene precio Diamante: con él el carro de {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no muestra ningún banner de membresía. (2) Con un SKU con precio Diamante (000000000000653466-UN, vino 1865 merlot) la misma cuenta muestra el banner de cliente nuevo «Ahorra $1.529 siendo Diamante · Prueba y disfruta 15 días gratis» con «Lo quiero», y no el de renovación «Ahorrarías $X siendo Diamante · Vuelve, te extrañamos» con «Renovar». Hay que confirmar si la cuenta realmente tiene membresía vencida (data) o si la app muestra el banner equivocado (posible defecto). Acción: confirmar el estado de la cuenta en el backend y declarar en el caso un SKU con precio Diamante.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER}\n- La cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER} tuvo membresía y ya no está vigente\n- El carro contiene {SKU_VALID_001}",
   "screenshots": [
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C37-APP-041-android.png"
    }
   ],
   "spec": "tests-app/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner \"Ahorrarías $X siendo Diamante · Vuelve, te extrañamos.\" con el CTA \"Renovar\".",
   "test_data": "{APP_BUILD} = v1.0.1"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-23",
   "expected": "Se abre el flujo de renovación de membresía definido en B2C-42.",
   "form_factor": "app",
   "id": "TC-B2C37-APP-042",
   "name": "Verificar que \"Renovar\" abre el flujo de renovación de membresía [App] [Logueado]",
   "observation": "Causa: no se puede verificar el banner de renovación con la data actual. (1) El caso solo declara {SKU_VALID_001}, que no tiene precio Diamante: con él el carro de {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no muestra ningún banner de membresía. (2) Con un SKU con precio Diamante (000000000000653466-UN, vino 1865 merlot) la misma cuenta muestra el banner de cliente nuevo «Ahorra $1.529 siendo Diamante · Prueba y disfruta 15 días gratis» con «Lo quiero», y no el de renovación «Ahorrarías $X siendo Diamante · Vuelve, te extrañamos» con «Renovar». Hay que confirmar si la cuenta realmente tiene membresía vencida (data) o si la app muestra el banner equivocado (posible defecto). Acción: confirmar el estado de la cuenta en el backend y declarar en el caso un SKU con precio Diamante.",
   "observed": "Causa: no se puede verificar el banner de renovación con la data actual. (1) El caso solo declara {SKU_VALID_001}, que no tiene precio Diamante: con él el carro de {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no muestra ningún banner de membresía. (2) Con un SKU con precio Diamante (000000000000653466-UN, vino 1865 merlot) la misma cuenta muestra el banner de cliente nuevo «Ahorra $1.529 siendo Diamante · Prueba y disfruta 15 días gratis» con «Lo quiero», y no el de renovación «Ahorrarías $X siendo Diamante · Vuelve, te extrañamos» con «Renovar». Hay que confirmar si la cuenta realmente tiene membresía vencida (data) o si la app muestra el banner equivocado (posible defecto). Acción: confirmar el estado de la cuenta en el backend y declarar en el caso un SKU con precio Diamante.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER}\n- La cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER} tuvo membresía y ya no está vigente\n- El carro contiene {SKU_VALID_001}",
   "screenshots": [
    {
     "caption": "Android · Paso 5 — carro con la cuenta de membresia vencida",
     "file": "TC-B2C37-APP-042-android-p05-carro-con-la-cuenta-de-membresia-vencida.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C37-APP-042-android.png"
    }
   ],
   "spec": "tests-app/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner \"Ahorrarías $X siendo Diamante · Vuelve, te extrañamos.\" con el CTA \"Renovar\".\n3. El usuario toca \"Renovar\".\n4. El sistema abre el flujo de renovación de membresía (B2C-42).",
   "test_data": "{APP_BUILD} = v1.0.1"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-23",
   "expected": "El carrito no muestra el banner de oferta de membresía.",
   "form_factor": "app",
   "id": "TC-B2C37-APP-043",
   "name": "Verificar que el carrito no muestra el banner de membresía al usuario invitado [App] [Guest]",
   "observation": "El carro del invitado con {SKU_VALID_001} no muestra el banner de oferta de membresía (verificado en captura).",
   "observed": "El carro del invitado con {SKU_VALID_001} no muestra el banner de oferta de membresía (verificado en captura).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión de invitado (sin iniciar sesión)\n- El carro contiene {SKU_VALID_001}",
   "screenshots": [
    {
     "caption": "Android · Paso 6 — carro del invitado",
     "file": "TC-B2C37-APP-043-android-p06-carro-del-invitado.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C37-APP-043-android.png"
    }
   ],
   "spec": "tests-app/B2C-37.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carro invitado.",
   "test_data": "{APP_BUILD} = v1.0.1"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-23",
   "expected": "Durante la carga se muestra el skeleton con la estructura del carrito de App.",
   "form_factor": "app",
   "id": "TC-B2C37-APP-044",
   "name": "Verificar que el carrito muestra el skeleton de carga mientras procesa la solicitud [App] [Logueado]",
   "observation": "Causa: el caso necesita una herramienta de proxy para observar/demorar la red (estado de carga, error de red) y el token {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: definir la herramienta en el Excel de data.",
   "observed": "Causa: el caso necesita una herramienta de proxy para observar/demorar la red (estado de carga, error de red) y el token {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: definir la herramienta en el Excel de data.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001}\n- {HERRAMIENTA_PROXY_APP} configurado con throttling de red lenta",
   "spec": "tests-app/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema muestra la pantalla de skeleton que replica la estructura del carrito mientras procesa la solicitud.",
   "test_data": "{APP_BUILD} = v1.0.1"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-23",
   "expected": "El skeleton se reemplaza por el carrito con {SKU_VALID_001} sin parpadeo.",
   "form_factor": "app",
   "id": "TC-B2C37-APP-045",
   "name": "Verificar que el skeleton se reemplaza por el contenido del carrito sin parpadeo [App] [Logueado]",
   "observation": "Causa: el caso necesita una herramienta de proxy para observar/demorar la red (estado de carga, error de red) y el token {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: definir la herramienta en el Excel de data.",
   "observed": "Causa: el caso necesita una herramienta de proxy para observar/demorar la red (estado de carga, error de red) y el token {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: definir la herramienta en el Excel de data.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001}\n- {HERRAMIENTA_PROXY_APP} configurado con throttling de red lenta",
   "spec": "tests-app/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema muestra la pantalla de skeleton que replica la estructura del carrito mientras procesa la solicitud.\n3. El usuario espera a que finalice la carga.\n4. El sistema reemplaza el skeleton por el contenido del carrito con una transición suave.",
   "test_data": "{APP_BUILD} = v1.0.1"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-23",
   "expected": "El skeleton se reemplaza por el estado de error del carrito (CRT-020).",
   "form_factor": "app",
   "id": "TC-B2C37-APP-046",
   "name": "Verificar que el skeleton se reemplaza por el estado de error si la carga falla [App] [Logueado]",
   "observation": "Causa: el caso necesita una herramienta de proxy para observar/demorar la red (estado de carga, error de red) y el token {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: definir la herramienta en el Excel de data.",
   "observed": "Causa: el caso necesita una herramienta de proxy para observar/demorar la red (estado de carga, error de red) y el token {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: definir la herramienta en el Excel de data.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001}\n- {HERRAMIENTA_PROXY_APP} configurado con throttling de red lenta\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {CART_API_ENDPOINT}",
   "spec": "tests-app/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema muestra la pantalla de skeleton que replica la estructura del carrito mientras procesa la solicitud.\n3. El usuario espera a que finalice la solicitud.\n4. El sistema reemplaza el skeleton por el estado de error \"No pudimos mostrar tu carro\" con \"Error: CRT-020\".",
   "test_data": "{APP_BUILD} = v1.0.1"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-23",
   "expected": "Durante todo el scroll la tarjeta de totales permanece fija mostrando \"Subtotal\", \"Subtotal con Unipay\" y \"Continuar con la entrega\".",
   "form_factor": "app",
   "id": "TC-B2C37-APP-047",
   "name": "Verificar que la tarjeta de totales queda fija al hacer scroll en la lista de productos [App] [Logueado]",
   "observation": "Causa: {SKU_UNIPAY_001} no tiene una promo Unipay vigente; la tarjeta de totales solo muestra «Subtotal» y no existe «Subtotal con Unipay» que verificar. Acción: declarar en el Excel de data un SKU con promo Unipay vigente. (el caso también usa {SKUS_CARRUSEL}.)",
   "observed": "Causa: {SKU_UNIPAY_001} no tiene una promo Unipay vigente; la tarjeta de totales solo muestra «Subtotal» y no existe «Subtotal con Unipay» que verificar. Acción: declarar en el Excel de data un SKU con promo Unipay vigente. (el caso también usa {SKUS_CARRUSEL}.)",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKUS_CARRUSEL} y {SKU_UNIPAY_001}, y la lista supera la altura visible de la pantalla",
   "screenshots": [
    {
     "caption": "Android · Paso 5 — carro",
     "file": "TC-B2C37-APP-047-android-p05-carro.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C37-APP-047-android.png"
    }
   ],
   "spec": "tests-app/B2C-37.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito con la lista de productos y la tarjeta de totales en la parte inferior.\n3. El usuario hace scroll vertical hasta el final de la lista de productos.\n4. El sistema desplaza el área de productos y mantiene fija la tarjeta de totales con \"Subtotal\", \"Subtotal con Unipay\" y el CTA \"Continuar con la entrega\".",
   "test_data": "{APP_BUILD} = v1.0.1"
  }
 ]
}
-->
