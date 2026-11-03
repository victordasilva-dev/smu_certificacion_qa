# B2C-37 APP Android - Evidencias QA (corrida del 2026-10-30)

| Campo | Valor |
|---|---|
| Suite | B2C-37 |
| Última actualización | 2026-10-30 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | App Android cl.smu.unimarcapp.sfcc.qa v1.0.1 (DEV), dispositivo por ADB |
| Origen de los TC | Unimarc/B2C-37 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 11 |
| Bloqueado Data | 9 |
| **Total** | **20** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-30 | 20 | TC-B2C37-APP-001, TC-B2C37-APP-002, TC-B2C37-APP-003, TC-B2C37-APP-005, TC-B2C37-APP-006, TC-B2C37-APP-014, TC-B2C37-APP-015, TC-B2C37-APP-021, TC-B2C37-APP-024, TC-B2C37-APP-025, TC-B2C37-APP-026, TC-B2C37-APP-034, TC-B2C37-APP-035, TC-B2C37-APP-036, TC-B2C37-APP-037, TC-B2C37-APP-038, TC-B2C37-APP-039, TC-B2C37-APP-040, TC-B2C37-APP-042, TC-B2C37-APP-047 |

## Detalle por caso de prueba

### TC-B2C37-APP-001 - Verificar que el carrito muestra el layout con ítems disponibles y totales fijos sin Unipay [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene solo {SKU_VALID_001} (disponible y sin descuento Unipay)

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {COMPRADOR_RUT} = 11.223.344-K
- {COMPRADOR_PASSWORD} = [contraseña omitida]

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito y muestra el header simplificado "< Mi carrito", el acordeón de ítems disponibles expandido (logo Unimarc + número de ítems + "productos" + ícono de menú ⋯) con la lista de productos.
3. El usuario revisa la parte inferior de la pantalla.
4. El sistema muestra la tarjeta de totales fija solo con "Subtotal", el CTA "Continuar con la entrega" y el footer simplificado.

**Resultado esperado**

El carrito muestra header simplificado, acordeón de disponibles expandido con ícono ⋯ y la tarjeta de totales fija con "Subtotal" (sin "Subtotal con Unipay") y el CTA "Continuar con la entrega".

**Evidencia**

![Android · Paso 5 — mi carro con sku valid 001](<B2C-37 APP Evidencias 2026-10-30/TC-B2C37-APP-001-android-p05-mi-carro-con-sku-valid-001.png>)

![Android · Estado final](<B2C-37 APP Evidencias 2026-10-30/TC-B2C37-APP-001-android.png>)

---

### TC-B2C37-APP-002 - Verificar que la tarjeta de totales muestra "Subtotal con Unipay" con descuento Unipay [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_UNIPAY_001} (producto con descuento Unipay)

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_UNIPAY_001} = TBD
- {COMPRADOR_USER} = 11.223.344-K
- {COMPRADOR_PASSWORD} = [contraseña omitida]

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito y muestra en la tarjeta de totales las líneas "Subtotal" y "Subtotal con Unipay".

**Resultado esperado**

La tarjeta de totales muestra "Subtotal" y "Subtotal con Unipay", con un monto de "Subtotal con Unipay" menor al "Subtotal".

**Resultado obtenido**

Android: Bloqueado Data. Falta el dato: {SKU_UNIPAY_001} no tiene promo Unipay vigente en DEV, asi que la tarjeta solo muestra «Subtotal» y no hay «Subtotal con Unipay» que verificar. Quien lo carga: equipo de data (SKU con promo Unipay vigente). iOS: pendiente (falta MOBILENEXT_API_KEY).

**Observación**

Android: Bloqueado Data. Falta el dato: {SKU_UNIPAY_001} no tiene promo Unipay vigente en DEV, asi que la tarjeta solo muestra «Subtotal» y no hay «Subtotal con Unipay» que verificar. Quien lo carga: equipo de data (SKU con promo Unipay vigente). iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 5 — carro con sku unipay 001](<B2C-37 APP Evidencias 2026-10-30/TC-B2C37-APP-002-android-p05-carro-con-sku-unipay-001.png>)

![Android · Estado final](<B2C-37 APP Evidencias 2026-10-30/TC-B2C37-APP-002-android.png>)

---

### TC-B2C37-APP-003 - Verificar que el menú ⋯ muestra "Guardar como lista" y "Vaciar carro" [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {COMPRADOR_USER} = 11.223.344-K
- {COMPRADOR_PASSWORD} = [contraseña omitida]

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca el menú de tres puntos (⋯).
4. El sistema despliega las opciones "Guardar como lista" y "Vaciar carro", cada una con su ícono.

**Resultado esperado**

El menú ⋯ muestra "Guardar como lista" + ícono y "Vaciar carro" + ícono.

**Evidencia**

![Android · Paso 5 — menu abierto](<B2C-37 APP Evidencias 2026-10-30/TC-B2C37-APP-003-android-p05-menu-abierto.png>)

![Android · Estado final](<B2C-37 APP Evidencias 2026-10-30/TC-B2C37-APP-003-android.png>)

---

### TC-B2C37-APP-005 - Verificar que "Continuar con la entrega" avanza al paso Datos de entrega [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO}
- El subtotal del carro es mayor o igual a {MONTO_MINIMO_COMPRA} y hay un método de entrega activo

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = TBD
- {MONTO_MINIMO_COMPRA} = TBD
- {COMPRADOR_USER} = 11.223.344-K
- {COMPRADOR_PASSWORD} = [contraseña omitida]

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

![Android · Paso 6 — modal que no se te olviden tras continuar con la entrega](<B2C-37 APP Evidencias 2026-10-30/TC-B2C37-APP-005-android-p06-modal-que-no-se-te-olviden-tras-continuar-con-la-entrega.png>)

![Android · Estado final](<B2C-37 APP Evidencias 2026-10-30/TC-B2C37-APP-005-android.png>)

---

### TC-B2C37-APP-006 - Verificar que "Guardar como lista" del menú ⋯ inicia el flujo de guardado de lista [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {COMPRADOR_USER} = 11.223.344-K
- {COMPRADOR_PASSWORD} = [contraseña omitida]

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

![Android · Paso 6 — tras tocar guardar como lista hoja agregar como lista](<B2C-37 APP Evidencias 2026-10-30/TC-B2C37-APP-006-android-p06-tras-tocar-guardar-como-lista-hoja-agregar-como-lista.png>)

![Android · Estado final](<B2C-37 APP Evidencias 2026-10-30/TC-B2C37-APP-006-android.png>)

---

### TC-B2C37-APP-014 - Verificar que cada ítem disponible muestra imagen, nombre, precios, cantidad y controles [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene solo {SKU_VALID_001} (disponible)

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {COMPRADOR_USER} = 11.223.344-K
- {COMPRADOR_PASSWORD} = [contraseña omitida]

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito con el acordeón de disponibles expandido y muestra por cada ítem: imagen, nombre, precio unitario, precio final (con descuentos), cantidad actual, controles +/− y acción de eliminar.

**Resultado esperado**

Cada ítem disponible muestra imagen, nombre, precio unitario, precio final, cantidad actual, controles +/− y acción de eliminar.

**Evidencia**

![Android · Estado final](<B2C-37 APP Evidencias 2026-10-30/TC-B2C37-APP-014-android.png>)

---

### TC-B2C37-APP-015 - Verificar que los ítems disponibles se ordenan del agregado más reciente al más antiguo [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro está vacío

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_UNITARIO} = 000000000400254005-UN
- {SKU_PESABLE} = 000000000000037972-KG
- {SKU_VALID_001} = 000000000000675191-UN
- {COMPRADOR_USER} = 11.223.344-K
- {COMPRADOR_PASSWORD} = [contraseña omitida]

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

![Android · Paso 6 — carro con tres items](<B2C-37 APP Evidencias 2026-10-30/TC-B2C37-APP-015-android-p06-carro-con-tres-items.png>)

![Android · Estado final](<B2C-37 APP Evidencias 2026-10-30/TC-B2C37-APP-015-android.png>)

---

### TC-B2C37-APP-021 - Verificar que "Sí, eliminar" vacía el carro y muestra el estado de carro vacío [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_UNITARIO} = 000000000400254005-UN
- {COMPRADOR_USER} = 11.223.344-K
- {COMPRADOR_PASSWORD} = [contraseña omitida]

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

![Android · Paso 7 — carro vacio](<B2C-37 APP Evidencias 2026-10-30/TC-B2C37-APP-021-android-p07-carro-vacio.png>)

![Android · Estado final](<B2C-37 APP Evidencias 2026-10-30/TC-B2C37-APP-021-android.png>)

---

### TC-B2C37-APP-024 - Verificar que el carrito muestra el toast de restricción de alcohol [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_ALCOHOL} (producto con restricción de alcohol)

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_ALCOHOL} = TBD
- {COMPRADOR_USER} = 11.223.344-K
- {COMPRADOR_PASSWORD} = [contraseña omitida]

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito y muestra un toast informativo con título "Información importante", el mensaje "Deberás mostrar tu carnet al recibir compras de bebidas alcohólicas." e ícono "X".

**Resultado esperado**

Se muestra el toast "Información importante" con el mensaje de carnet y {SKU_ALCOHOL} permanece en el carrito.

**Resultado obtenido**

Android: Bloqueado Data. Con {SKU_ALCOHOL} en el carro (cuenta {COMPRADOR_USER}) el toast «Información importante» no aparece: solo se ve el aviso de monto mínimo («Solo te faltan $8.107»), en 3 corridas. Falta confirmar que el SKU tiene la restricción de alcohol configurada en DEV y que el aviso de monto mínimo no reemplaza al de alcohol. Quien lo carga: equipo de data/catalogo. iOS: pendiente (falta MOBILENEXT_API_KEY).

**Observación**

Android: Bloqueado Data. Con {SKU_ALCOHOL} en el carro (cuenta {COMPRADOR_USER}) el toast «Información importante» no aparece: solo se ve el aviso de monto mínimo («Solo te faltan $8.107»), en 3 corridas. Falta confirmar que el SKU tiene la restricción de alcohol configurada en DEV y que el aviso de monto mínimo no reemplaza al de alcohol. Quien lo carga: equipo de data/catalogo. iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 5 — carro con sku alcohol](<B2C-37 APP Evidencias 2026-10-30/TC-B2C37-APP-024-android-p05-carro-con-sku-alcohol.png>)

![Android · Estado final](<B2C-37 APP Evidencias 2026-10-30/TC-B2C37-APP-024-android.png>)

---

### TC-B2C37-APP-025 - Verificar que la "X" cierra el toast de restricción de alcohol [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_ALCOHOL} (producto con restricción de alcohol)

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_ALCOHOL} = TBD
- {COMPRADOR_USER} = 11.223.344-K
- {COMPRADOR_PASSWORD} = [contraseña omitida]

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito y muestra un toast informativo con título "Información importante", el mensaje "Deberás mostrar tu carnet al recibir compras de bebidas alcohólicas." e ícono "X".
3. El usuario toca el ícono "X" del toast.
4. El sistema cierra el toast.

**Resultado esperado**

El toast deja de mostrarse y {SKU_ALCOHOL} permanece en el carrito.

**Resultado obtenido**

Android: Bloqueado Data. Depende de TC-B2C37-APP-024: el toast de alcohol que se cierra con la «X» no aparece con {SKU_ALCOHOL} (ver 024). Quien lo carga: equipo de data/catalogo. iOS: pendiente (falta MOBILENEXT_API_KEY).

**Observación**

Android: Bloqueado Data. Depende de TC-B2C37-APP-024: el toast de alcohol que se cierra con la «X» no aparece con {SKU_ALCOHOL} (ver 024). Quien lo carga: equipo de data/catalogo. iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 5 — carro con sku alcohol](<B2C-37 APP Evidencias 2026-10-30/TC-B2C37-APP-025-android-p05-carro-con-sku-alcohol.png>)

![Android · Estado final](<B2C-37 APP Evidencias 2026-10-30/TC-B2C37-APP-025-android.png>)

---

### TC-B2C37-APP-026 - Verificar que el toast de restricción de alcohol desaparece a los 4 segundos [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKU_ALCOHOL} (producto con restricción de alcohol)

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_ALCOHOL} = TBD
- {COMPRADOR_USER} = 11.223.344-K
- {COMPRADOR_PASSWORD} = [contraseña omitida]

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito y muestra un toast informativo con título "Información importante", el mensaje "Deberás mostrar tu carnet al recibir compras de bebidas alcohólicas." e ícono "X".
3. El usuario espera 4 segundos sin interactuar con el toast.
4. El sistema oculta el toast automáticamente.

**Resultado esperado**

El toast desaparece solo a los 4 segundos de mostrarse.

**Resultado obtenido**

Android: Bloqueado Data. Depende de TC-B2C37-APP-024: el toast de alcohol que debe desaparecer a los 4 s no aparece con {SKU_ALCOHOL} (ver 024). Quien lo carga: equipo de data/catalogo. iOS: pendiente (falta MOBILENEXT_API_KEY).

**Observación**

Android: Bloqueado Data. Depende de TC-B2C37-APP-024: el toast de alcohol que debe desaparecer a los 4 s no aparece con {SKU_ALCOHOL} (ver 024). Quien lo carga: equipo de data/catalogo. iOS: pendiente (falta MOBILENEXT_API_KEY).

---

### TC-B2C37-APP-034 - Verificar que el carrito bajo el mínimo muestra el faltante y deshabilita el CTA [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El método de entrega activo es Despacho a domicilio
- El carro contiene {SKU_VALID_001} x 1 y el subtotal es menor a {MONTO_MINIMO_COMPRA}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {MONTO_MINIMO_COMPRA} = TBD
- {COMPRADOR_USER} = 11.223.344-K
- {COMPRADOR_PASSWORD} = [contraseña omitida]

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito, muestra el toast "¡Solo te faltan $X para ir a pagar!" con X = {MONTO_MINIMO_COMPRA} − subtotal y el botón "Continuar con la entrega" deshabilitado con el label "Mínimo de compra ${MONTO_MINIMO_COMPRA}".

**Resultado esperado**

Se muestra el toast con el faltante real y el CTA "Continuar con la entrega" deshabilitado con el label "Mínimo de compra $Y".

**Evidencia**

![Android · Paso 5 — carro bajo el minimo](<B2C-37 APP Evidencias 2026-10-30/TC-B2C37-APP-034-android-p05-carro-bajo-el-minimo.png>)

![Android · Estado final](<B2C-37 APP Evidencias 2026-10-30/TC-B2C37-APP-034-android.png>)

---

### TC-B2C37-APP-035 - Verificar que el monto faltante del toast se actualiza al cambiar la cantidad [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El método de entrega activo es Despacho a domicilio
- El carro contiene {SKU_VALID_001} x 1 y el subtotal es menor a {MONTO_MINIMO_COMPRA}
- Con 2 unidades de {SKU_VALID_001} el subtotal sigue siendo menor a {MONTO_MINIMO_COMPRA}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {MONTO_MINIMO_COMPRA} = TBD
- {COMPRADOR_USER} = 11.223.344-K
- {COMPRADOR_PASSWORD} = [contraseña omitida]

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito, muestra el toast "¡Solo te faltan $X para ir a pagar!" con X = {MONTO_MINIMO_COMPRA} − subtotal y el botón "Continuar con la entrega" deshabilitado con el label "Mínimo de compra ${MONTO_MINIMO_COMPRA}".
3. El usuario toca una vez el control + de {SKU_VALID_001}.
4. El sistema actualiza la cantidad y recalcula el monto del toast sin recargar la página.

**Resultado esperado**

El toast muestra el nuevo faltante: {MONTO_MINIMO_COMPRA} − subtotal con 2 unidades de {SKU_VALID_001}.

**Evidencia**

![Android · Paso 5 — carro con 2 unidades](<B2C-37 APP Evidencias 2026-10-30/TC-B2C37-APP-035-android-p05-carro-con-2-unidades.png>)

![Android · Estado final](<B2C-37 APP Evidencias 2026-10-30/TC-B2C37-APP-035-android.png>)

---

### TC-B2C37-APP-036 - Verificar que la X cierra el toast de monto mínimo [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El método de entrega activo es Despacho a domicilio
- El carro contiene {SKU_VALID_001} x 1 y el subtotal es menor a {MONTO_MINIMO_COMPRA}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {MONTO_MINIMO_COMPRA} = TBD
- {COMPRADOR_USER} = 11.223.344-K
- {COMPRADOR_PASSWORD} = [contraseña omitida]

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito, muestra el toast "¡Solo te faltan $X para ir a pagar!" con X = {MONTO_MINIMO_COMPRA} − subtotal y el botón "Continuar con la entrega" deshabilitado con el label "Mínimo de compra ${MONTO_MINIMO_COMPRA}".
3. El usuario toca el ícono "X" del toast.
4. El sistema cierra el toast.

**Resultado esperado**

El toast deja de mostrarse y el CTA "Continuar con la entrega" sigue deshabilitado.

**Evidencia**

![Android · Paso 6 — tras cerrar el toast](<B2C-37 APP Evidencias 2026-10-30/TC-B2C37-APP-036-android-p06-tras-cerrar-el-toast.png>)

![Android · Estado final](<B2C-37 APP Evidencias 2026-10-30/TC-B2C37-APP-036-android.png>)

---

### TC-B2C37-APP-037 - Verificar que el carrito sobre el mínimo con Retiro habilita "Continuar con la entrega" [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El método de entrega activo es Retiro en tienda en {TIENDA_RETIRO_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {TIENDA_RETIRO_001} = TBD
- {UNIDADES_SOBRE_MINIMO} = TBD
- {MONTO_MINIMO_COMPRA} = TBD
- {COMPRADOR_USER} = 11.223.344-K
- {COMPRADOR_PASSWORD} = [contraseña omitida]

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito con el CTA "Continuar con la entrega" habilitado y sin el toast de monto faltante.

**Resultado esperado**

El CTA "Continuar con la entrega" está habilitado y no se muestra el toast "¡Solo te faltan $X para ir a pagar!".

**Resultado obtenido**

Android: Bloqueado Data. Falta el dato: la cuenta no tiene activo el metodo de entrega «Retiro en tienda en Unimarc Las Condes»; con el carro sobre el minimo el CTA queda «ocupado». Quien lo carga: equipo de data (activar ese metodo en la cuenta). iOS: pendiente (falta MOBILENEXT_API_KEY).

**Observación**

Android: Bloqueado Data. Falta el dato: la cuenta no tiene activo el metodo de entrega «Retiro en tienda en Unimarc Las Condes»; con el carro sobre el minimo el CTA queda «ocupado». Quien lo carga: equipo de data (activar ese metodo en la cuenta). iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 5 — carro sobre el minimo](<B2C-37 APP Evidencias 2026-10-30/TC-B2C37-APP-037-android-p05-carro-sobre-el-minimo.png>)

![Android · Estado final](<B2C-37 APP Evidencias 2026-10-30/TC-B2C37-APP-037-android.png>)

---

### TC-B2C37-APP-038 - Verificar que al alcanzar el mínimo se oculta el toast y se habilita el CTA en tiempo real [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El método de entrega activo es Despacho a domicilio
- El carro contiene {SKU_VALID_001} x 1 y el subtotal es menor a {MONTO_MINIMO_COMPRA}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {MONTO_MINIMO_COMPRA} = TBD
- {UNIDADES_SOBRE_MINIMO} = TBD
- {COMPRADOR_USER} = 11.223.344-K
- {COMPRADOR_PASSWORD} = [contraseña omitida]

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito, muestra el toast "¡Solo te faltan $X para ir a pagar!" con X = {MONTO_MINIMO_COMPRA} − subtotal y el botón "Continuar con la entrega" deshabilitado con el label "Mínimo de compra ${MONTO_MINIMO_COMPRA}".
3. El usuario toca el control + de {SKU_VALID_001} hasta llegar a {UNIDADES_SOBRE_MINIMO} unidades.
4. El sistema recalcula el subtotal, oculta el toast y habilita el CTA "Continuar con la entrega" sin recargar la página.

**Resultado esperado**

Con {UNIDADES_SOBRE_MINIMO} unidades el toast desaparece y el CTA "Continuar con la entrega" queda habilitado.

**Evidencia**

![Android · Paso 5 — carro con 11 unidades](<B2C-37 APP Evidencias 2026-10-30/TC-B2C37-APP-038-android-p05-carro-con-11-unidades.png>)

![Android · Estado final](<B2C-37 APP Evidencias 2026-10-30/TC-B2C37-APP-038-android.png>)

---

### TC-B2C37-APP-039 - Verificar que el carrito muestra el banner de membresía para cliente sin membresía previa [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}
- La cuenta {COMPRADOR_SIN_MEMBRESIA_USER} nunca tuvo membresía
- El carro contiene {SKU_VALID_001}
- El carrito contiene productos con descuentos membresía {SKU_OFERTA_MEMBRESIA}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K
- {COMPRADOR_SIN_MEMBRESIA_PASSWORD} = Avatar123.
- {SKU_OFERTA_MEMBRESIA} = 000000000000178089-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito y muestra el banner "Ahorra $X siendo Diamante · Prueba y disfruta 15 días gratis." con el CTA "Lo quiero".

**Resultado esperado**

Se muestra el banner "Ahorra $X siendo Diamante · Prueba y disfruta 15 días gratis." con $X calculado sobre el carro y el CTA "Lo quiero".

**Resultado obtenido**

Android: Bloqueado Data. Falta el dato: {SKU_OFERTA_MEMBRESIA} no tiene precio Diamante en DEV (en el carro solo muestra su promo normal del 23%), asi que el banner «Ahorra $X siendo Diamante» no aparece con la cuenta sin membresia. Quien lo carga: equipo de data (SKU con precio Diamante vigente). iOS: pendiente (falta MOBILENEXT_API_KEY).

**Observación**

Android: Bloqueado Data. Falta el dato: {SKU_OFERTA_MEMBRESIA} no tiene precio Diamante en DEV (en el carro solo muestra su promo normal del 23%), asi que el banner «Ahorra $X siendo Diamante» no aparece con la cuenta sin membresia. Quien lo carga: equipo de data (SKU con precio Diamante vigente). iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 5 — carro con la cuenta sin membresia](<B2C-37 APP Evidencias 2026-10-30/TC-B2C37-APP-039-android-p05-carro-con-la-cuenta-sin-membresia.png>)

![Android · Estado final](<B2C-37 APP Evidencias 2026-10-30/TC-B2C37-APP-039-android.png>)

---

### TC-B2C37-APP-040 - Verificar que "Lo quiero" abre el flujo de contratación de membresía [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}
- La cuenta {COMPRADOR_SIN_MEMBRESIA_USER} nunca tuvo membresía
- El carro contiene {SKU_VALID_001}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K
- {COMPRADOR_SIN_MEMBRESIA_PASSWORD} = Avatar123.

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito y muestra el banner "Ahorra $X siendo Diamante · Prueba y disfruta 15 días gratis." con el CTA "Lo quiero".
3. El usuario toca "Lo quiero".
4. El sistema abre el flujo de contratación de membresía (B2C-42).

**Resultado esperado**

Se abre el flujo de contratación de membresía definido en B2C-42.

**Resultado obtenido**

Android: Bloqueado Data. Falta el dato: el carro con {SKU_VALID_001} no tiene ningun producto con precio Diamante, asi que no aparece el banner «Ahorra $X siendo Diamante» ni su CTA «Lo quiero». Quien lo carga: equipo de data (SKU con precio Diamante vigente). iOS: pendiente (falta MOBILENEXT_API_KEY).

**Observación**

Android: Bloqueado Data. Falta el dato: el carro con {SKU_VALID_001} no tiene ningun producto con precio Diamante, asi que no aparece el banner «Ahorra $X siendo Diamante» ni su CTA «Lo quiero». Quien lo carga: equipo de data (SKU con precio Diamante vigente). iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 5 — carro con la cuenta sin membresia](<B2C-37 APP Evidencias 2026-10-30/TC-B2C37-APP-040-android-p05-carro-con-la-cuenta-sin-membresia.png>)

![Android · Estado final](<B2C-37 APP Evidencias 2026-10-30/TC-B2C37-APP-040-android.png>)

---

### TC-B2C37-APP-042 - Verificar que "Renovar" abre el flujo de renovación de membresía [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER}
- La cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER} tuvo membresía y ya no está vigente
- El carro contiene {SKU_VALID_001}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {COMPRADOR_MEMBRESIA_EXPIRADA_USER} = TBD
- {COMPRADOR_MEMBRESIA_EXPIRADA_PASSWORD} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito y muestra el banner "Ahorrarías $X siendo Diamante · Vuelve, te extrañamos." con el CTA "Renovar".
3. El usuario toca "Renovar".
4. El sistema abre el flujo de renovación de membresía (B2C-42).

**Resultado esperado**

Se abre el flujo de renovación de membresía definido en B2C-42.

**Resultado obtenido**

Android: Bloqueado Data. Falta el dato: con la cuenta de membresia vencida y {SKU_VALID_001} en el carro no aparece el banner «Ahorrarias $X siendo Diamante · Vuelve, te extranamos.» (el SKU no tiene precio Diamante). Quien lo carga: equipo de data (SKU con precio Diamante vigente). iOS: pendiente (falta MOBILENEXT_API_KEY).

**Observación**

Android: Bloqueado Data. Falta el dato: con la cuenta de membresia vencida y {SKU_VALID_001} en el carro no aparece el banner «Ahorrarias $X siendo Diamante · Vuelve, te extranamos.» (el SKU no tiene precio Diamante). Quien lo carga: equipo de data (SKU con precio Diamante vigente). iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 5 — carro con la cuenta de membresia vencida](<B2C-37 APP Evidencias 2026-10-30/TC-B2C37-APP-042-android-p05-carro-con-la-cuenta-de-membresia-vencida.png>)

![Android · Estado final](<B2C-37 APP Evidencias 2026-10-30/TC-B2C37-APP-042-android.png>)

---

### TC-B2C37-APP-047 - Verificar que la tarjeta de totales queda fija al hacer scroll en la lista de productos [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- El carro contiene {SKUS_CARRUSEL} y {SKU_UNIPAY_001}, y la lista supera la altura visible de la pantalla

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKUS_CARRUSEL} = TBD
- {SKU_UNIPAY_001} = TBD
- {COMPRADOR_USER} = 11.223.344-K
- {COMPRADOR_PASSWORD} = [contraseña omitida]

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito con la lista de productos y la tarjeta de totales en la parte inferior.
3. El usuario hace scroll vertical hasta el final de la lista de productos.
4. El sistema desplaza el área de productos y mantiene fija la tarjeta de totales con "Subtotal", "Subtotal con Unipay" y el CTA "Continuar con la entrega".

**Resultado esperado**

Durante todo el scroll la tarjeta de totales permanece fija mostrando "Subtotal", "Subtotal con Unipay" y "Continuar con la entrega".

**Resultado obtenido**

Android: Bloqueado Data. Falta el dato: {SKU_UNIPAY_001} no tiene una promo Unipay vigente en DEV; la tarjeta de totales solo muestra «Subtotal». Quien lo carga: equipo de data (SKU con promo Unipay vigente). iOS: pendiente (falta MOBILENEXT_API_KEY).

**Observación**

Android: Bloqueado Data. Falta el dato: {SKU_UNIPAY_001} no tiene una promo Unipay vigente en DEV; la tarjeta de totales solo muestra «Subtotal». Quien lo carga: equipo de data (SKU con promo Unipay vigente). iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 5 — carro](<B2C-37 APP Evidencias 2026-10-30/TC-B2C37-APP-047-android-p05-carro.png>)

![Android · Estado final](<B2C-37 APP Evidencias 2026-10-30/TC-B2C37-APP-047-android.png>)

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "environment": "App Android cl.smu.unimarcapp.sfcc.qa v1.0.1 (DEV), dispositivo por ADB",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-37",
  "tc_file": "Unimarc/B2C-37 APP Test Cases.xlsx",
  "title": "B2C-37 APP Android - Evidencias QA (corrida del 2026-10-30)",
  "updated_at": "2026-10-30"
 },
 "history": {
  "2026-10-30": [
   "TC-B2C37-APP-001",
   "TC-B2C37-APP-002",
   "TC-B2C37-APP-003",
   "TC-B2C37-APP-005",
   "TC-B2C37-APP-006",
   "TC-B2C37-APP-014",
   "TC-B2C37-APP-015",
   "TC-B2C37-APP-021",
   "TC-B2C37-APP-024",
   "TC-B2C37-APP-025",
   "TC-B2C37-APP-026",
   "TC-B2C37-APP-034",
   "TC-B2C37-APP-035",
   "TC-B2C37-APP-036",
   "TC-B2C37-APP-037",
   "TC-B2C37-APP-038",
   "TC-B2C37-APP-039",
   "TC-B2C37-APP-040",
   "TC-B2C37-APP-042",
   "TC-B2C37-APP-047"
  ]
 },
 "results": [
  {
   "executed_at": "2026-10-30",
   "expected": "El carrito muestra header simplificado, acordeón de disponibles expandido con ícono ⋯ y la tarjeta de totales fija con \"Subtotal\" (sin \"Subtotal con Unipay\") y el CTA \"Continuar con la entrega\".",
   "id": "TC-B2C37-APP-001",
   "name": "Verificar que el carrito muestra el layout con ítems disponibles y totales fijos sin Unipay [App] [Logueado]",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene solo {SKU_VALID_001} (disponible y sin descuento Unipay)",
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
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el header simplificado \"< Mi carrito\", el acordeón de ítems disponibles expandido (logo Unimarc + número de ítems + \"productos\" + ícono de menú ⋯) con la lista de productos.\n3. El usuario revisa la parte inferior de la pantalla.\n4. El sistema muestra la tarjeta de totales fija solo con \"Subtotal\", el CTA \"Continuar con la entrega\" y el footer simplificado.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {COMPRADOR_RUT} = 11.223.344-K\n- {COMPRADOR_PASSWORD} = [contraseña omitida]"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "La tarjeta de totales muestra \"Subtotal\" y \"Subtotal con Unipay\", con un monto de \"Subtotal con Unipay\" menor al \"Subtotal\".",
   "id": "TC-B2C37-APP-002",
   "name": "Verificar que la tarjeta de totales muestra \"Subtotal con Unipay\" con descuento Unipay [App] [Logueado]",
   "observation": "Android: Bloqueado Data. Falta el dato: {SKU_UNIPAY_001} no tiene promo Unipay vigente en DEV, asi que la tarjeta solo muestra «Subtotal» y no hay «Subtotal con Unipay» que verificar. Quien lo carga: equipo de data (SKU con promo Unipay vigente). iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Android: Bloqueado Data. Falta el dato: {SKU_UNIPAY_001} no tiene promo Unipay vigente en DEV, asi que la tarjeta solo muestra «Subtotal» y no hay «Subtotal con Unipay» que verificar. Quien lo carga: equipo de data (SKU con promo Unipay vigente). iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_UNIPAY_001} (producto con descuento Unipay)",
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
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito y muestra en la tarjeta de totales las líneas \"Subtotal\" y \"Subtotal con Unipay\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_UNIPAY_001} = TBD\n- {COMPRADOR_USER} = 11.223.344-K\n- {COMPRADOR_PASSWORD} = [contraseña omitida]"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "El menú ⋯ muestra \"Guardar como lista\" + ícono y \"Vaciar carro\" + ícono.",
   "id": "TC-B2C37-APP-003",
   "name": "Verificar que el menú ⋯ muestra \"Guardar como lista\" y \"Vaciar carro\" [App] [Logueado]",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001}",
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
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca el menú de tres puntos (⋯).\n4. El sistema despliega las opciones \"Guardar como lista\" y \"Vaciar carro\", cada una con su ícono.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {COMPRADOR_USER} = 11.223.344-K\n- {COMPRADOR_PASSWORD} = [contraseña omitida]"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "El usuario queda en el paso Datos de entrega del checkout.",
   "id": "TC-B2C37-APP-005",
   "name": "Verificar que \"Continuar con la entrega\" avanza al paso Datos de entrega [App] [Logueado]",
   "observation": "Observación: al tocar «Continuar con la entrega» la app abre primero el modal «¡Que no se te olviden!» (sugeridos) con el botón «Continuar»; al tocarlo llega a «Datos de entrega». El modal intermedio no figura en los pasos del caso.",
   "observed": "Observación: al tocar «Continuar con la entrega» la app abre primero el modal «¡Que no se te olviden!» (sugeridos) con el botón «Continuar»; al tocarlo llega a «Datos de entrega». El modal intermedio no figura en los pasos del caso.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO}\n- El subtotal del carro es mayor o igual a {MONTO_MINIMO_COMPRA} y hay un método de entrega activo",
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
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito con el CTA \"Continuar con la entrega\" habilitado.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema navega al paso Datos de entrega del checkout.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = TBD\n- {MONTO_MINIMO_COMPRA} = TBD\n- {COMPRADOR_USER} = 11.223.344-K\n- {COMPRADOR_PASSWORD} = [contraseña omitida]"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "Se inicia el flujo de \"Guardar como lista\" definido en B2C-54.",
   "id": "TC-B2C37-APP-006",
   "name": "Verificar que \"Guardar como lista\" del menú ⋯ inicia el flujo de guardado de lista [App] [Logueado]",
   "observation": "«Guardar como lista» abre la hoja «Agregar como lista» (Crear nueva lista / listas existentes / Confirmar).",
   "observed": "«Guardar como lista» abre la hoja «Agregar como lista» (Crear nueva lista / listas existentes / Confirmar).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001}",
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
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca el menú de tres puntos (⋯).\n4. El sistema despliega las opciones \"Guardar como lista\" y \"Vaciar carro\".\n5. El usuario toca \"Guardar como lista\".\n6. El sistema inicia el flujo de guardar como lista (B2C-54).",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {COMPRADOR_USER} = 11.223.344-K\n- {COMPRADOR_PASSWORD} = [contraseña omitida]"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "Cada ítem disponible muestra imagen, nombre, precio unitario, precio final, cantidad actual, controles +/− y acción de eliminar.",
   "id": "TC-B2C37-APP-014",
   "name": "Verificar que cada ítem disponible muestra imagen, nombre, precios, cantidad y controles [App] [Logueado]",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene solo {SKU_VALID_001} (disponible)",
   "screenshots": [
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C37-APP-014-android.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito con el acordeón de disponibles expandido y muestra por cada ítem: imagen, nombre, precio unitario, precio final (con descuentos), cantidad actual, controles +/− y acción de eliminar.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {COMPRADOR_USER} = 11.223.344-K\n- {COMPRADOR_PASSWORD} = [contraseña omitida]"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "La lista de ítems disponibles muestra primero {SKU_VALID_001}, luego {SKU_PESABLE} y al final {SKU_UNITARIO}.",
   "id": "TC-B2C37-APP-015",
   "name": "Verificar que los ítems disponibles se ordenan del agregado más reciente al más antiguo [App] [Logueado]",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro está vacío",
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
   "status": "Aprobado",
   "steps": "1. El usuario busca {SKU_UNITARIO} en la App y lo agrega al carro.\n2. El usuario busca {SKU_PESABLE} en la App y lo agrega al carro.\n3. El usuario busca {SKU_VALID_001} en la App y lo agrega al carro.\n4. El sistema agrega los tres productos al carro.\n5. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n6. El sistema carga el carrito y lista los ítems disponibles en el orden {SKU_VALID_001}, {SKU_PESABLE}, {SKU_UNITARIO}.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_UNITARIO} = 000000000400254005-UN\n- {SKU_PESABLE} = 000000000000037972-KG\n- {SKU_VALID_001} = 000000000000675191-UN\n- {COMPRADOR_USER} = 11.223.344-K\n- {COMPRADOR_PASSWORD} = [contraseña omitida]"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "El carro queda sin ítems y muestra el estado vacío con \"¡Tu carro está vacío!\", su subtítulo y el botón \"Ir a comprar\".",
   "id": "TC-B2C37-APP-021",
   "name": "Verificar que \"Sí, eliminar\" vacía el carro y muestra el estado de carro vacío [App] [Logueado]",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO}",
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
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca el menú de tres puntos (⋯).\n4. El sistema despliega las opciones \"Guardar como lista\" y \"Vaciar carro\".\n5. El usuario toca \"Vaciar carro\".\n6. El sistema despliega el modal de confirmación \"Vaciar el carro\".\n7. El usuario toca \"Sí, eliminar\".\n8. El sistema elimina todos los ítems y muestra imagen, título \"¡Tu carro está vacío!\", subtítulo \"Descubre todas las ofertas que tenemos para ti y llena tu despensa.\" y botón \"Ir a comprar\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_UNITARIO} = 000000000400254005-UN\n- {COMPRADOR_USER} = 11.223.344-K\n- {COMPRADOR_PASSWORD} = [contraseña omitida]"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "Se muestra el toast \"Información importante\" con el mensaje de carnet y {SKU_ALCOHOL} permanece en el carrito.",
   "id": "TC-B2C37-APP-024",
   "name": "Verificar que el carrito muestra el toast de restricción de alcohol [App] [Logueado]",
   "observation": "Android: Bloqueado Data. Con {SKU_ALCOHOL} en el carro (cuenta {COMPRADOR_USER}) el toast «Información importante» no aparece: solo se ve el aviso de monto mínimo («Solo te faltan $8.107»), en 3 corridas. Falta confirmar que el SKU tiene la restricción de alcohol configurada en DEV y que el aviso de monto mínimo no reemplaza al de alcohol. Quien lo carga: equipo de data/catalogo. iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Android: Bloqueado Data. Con {SKU_ALCOHOL} en el carro (cuenta {COMPRADOR_USER}) el toast «Información importante» no aparece: solo se ve el aviso de monto mínimo («Solo te faltan $8.107»), en 3 corridas. Falta confirmar que el SKU tiene la restricción de alcohol configurada en DEV y que el aviso de monto mínimo no reemplaza al de alcohol. Quien lo carga: equipo de data/catalogo. iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_ALCOHOL} (producto con restricción de alcohol)",
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
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito y muestra un toast informativo con título \"Información importante\", el mensaje \"Deberás mostrar tu carnet al recibir compras de bebidas alcohólicas.\" e ícono \"X\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_ALCOHOL} = TBD\n- {COMPRADOR_USER} = 11.223.344-K\n- {COMPRADOR_PASSWORD} = [contraseña omitida]"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "El toast deja de mostrarse y {SKU_ALCOHOL} permanece en el carrito.",
   "id": "TC-B2C37-APP-025",
   "name": "Verificar que la \"X\" cierra el toast de restricción de alcohol [App] [Logueado]",
   "observation": "Android: Bloqueado Data. Depende de TC-B2C37-APP-024: el toast de alcohol que se cierra con la «X» no aparece con {SKU_ALCOHOL} (ver 024). Quien lo carga: equipo de data/catalogo. iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Android: Bloqueado Data. Depende de TC-B2C37-APP-024: el toast de alcohol que se cierra con la «X» no aparece con {SKU_ALCOHOL} (ver 024). Quien lo carga: equipo de data/catalogo. iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_ALCOHOL} (producto con restricción de alcohol)",
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
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito y muestra un toast informativo con título \"Información importante\", el mensaje \"Deberás mostrar tu carnet al recibir compras de bebidas alcohólicas.\" e ícono \"X\".\n3. El usuario toca el ícono \"X\" del toast.\n4. El sistema cierra el toast.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_ALCOHOL} = TBD\n- {COMPRADOR_USER} = 11.223.344-K\n- {COMPRADOR_PASSWORD} = [contraseña omitida]"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "El toast desaparece solo a los 4 segundos de mostrarse.",
   "id": "TC-B2C37-APP-026",
   "name": "Verificar que el toast de restricción de alcohol desaparece a los 4 segundos [App] [Logueado]",
   "observation": "Android: Bloqueado Data. Depende de TC-B2C37-APP-024: el toast de alcohol que debe desaparecer a los 4 s no aparece con {SKU_ALCOHOL} (ver 024). Quien lo carga: equipo de data/catalogo. iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Android: Bloqueado Data. Depende de TC-B2C37-APP-024: el toast de alcohol que debe desaparecer a los 4 s no aparece con {SKU_ALCOHOL} (ver 024). Quien lo carga: equipo de data/catalogo. iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKU_ALCOHOL} (producto con restricción de alcohol)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito y muestra un toast informativo con título \"Información importante\", el mensaje \"Deberás mostrar tu carnet al recibir compras de bebidas alcohólicas.\" e ícono \"X\".\n3. El usuario espera 4 segundos sin interactuar con el toast.\n4. El sistema oculta el toast automáticamente.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_ALCOHOL} = TBD\n- {COMPRADOR_USER} = 11.223.344-K\n- {COMPRADOR_PASSWORD} = [contraseña omitida]"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "Se muestra el toast con el faltante real y el CTA \"Continuar con la entrega\" deshabilitado con el label \"Mínimo de compra $Y\".",
   "id": "TC-B2C37-APP-034",
   "name": "Verificar que el carrito bajo el mínimo muestra el faltante y deshabilita el CTA [App] [Logueado]",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El método de entrega activo es Despacho a domicilio\n- El carro contiene {SKU_VALID_001} x 1 y el subtotal es menor a {MONTO_MINIMO_COMPRA}",
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
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito, muestra el toast \"¡Solo te faltan $X para ir a pagar!\" con X = {MONTO_MINIMO_COMPRA} − subtotal y el botón \"Continuar con la entrega\" deshabilitado con el label \"Mínimo de compra ${MONTO_MINIMO_COMPRA}\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {MONTO_MINIMO_COMPRA} = TBD\n- {COMPRADOR_USER} = 11.223.344-K\n- {COMPRADOR_PASSWORD} = [contraseña omitida]"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "El toast muestra el nuevo faltante: {MONTO_MINIMO_COMPRA} − subtotal con 2 unidades de {SKU_VALID_001}.",
   "id": "TC-B2C37-APP-035",
   "name": "Verificar que el monto faltante del toast se actualiza al cambiar la cantidad [App] [Logueado]",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El método de entrega activo es Despacho a domicilio\n- El carro contiene {SKU_VALID_001} x 1 y el subtotal es menor a {MONTO_MINIMO_COMPRA}\n- Con 2 unidades de {SKU_VALID_001} el subtotal sigue siendo menor a {MONTO_MINIMO_COMPRA}",
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
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito, muestra el toast \"¡Solo te faltan $X para ir a pagar!\" con X = {MONTO_MINIMO_COMPRA} − subtotal y el botón \"Continuar con la entrega\" deshabilitado con el label \"Mínimo de compra ${MONTO_MINIMO_COMPRA}\".\n3. El usuario toca una vez el control + de {SKU_VALID_001}.\n4. El sistema actualiza la cantidad y recalcula el monto del toast sin recargar la página.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {MONTO_MINIMO_COMPRA} = TBD\n- {COMPRADOR_USER} = 11.223.344-K\n- {COMPRADOR_PASSWORD} = [contraseña omitida]"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "El toast deja de mostrarse y el CTA \"Continuar con la entrega\" sigue deshabilitado.",
   "id": "TC-B2C37-APP-036",
   "name": "Verificar que la X cierra el toast de monto mínimo [App] [Logueado]",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El método de entrega activo es Despacho a domicilio\n- El carro contiene {SKU_VALID_001} x 1 y el subtotal es menor a {MONTO_MINIMO_COMPRA}",
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
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito, muestra el toast \"¡Solo te faltan $X para ir a pagar!\" con X = {MONTO_MINIMO_COMPRA} − subtotal y el botón \"Continuar con la entrega\" deshabilitado con el label \"Mínimo de compra ${MONTO_MINIMO_COMPRA}\".\n3. El usuario toca el ícono \"X\" del toast.\n4. El sistema cierra el toast.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {MONTO_MINIMO_COMPRA} = TBD\n- {COMPRADOR_USER} = 11.223.344-K\n- {COMPRADOR_PASSWORD} = [contraseña omitida]"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "El CTA \"Continuar con la entrega\" está habilitado y no se muestra el toast \"¡Solo te faltan $X para ir a pagar!\".",
   "id": "TC-B2C37-APP-037",
   "name": "Verificar que el carrito sobre el mínimo con Retiro habilita \"Continuar con la entrega\" [App] [Logueado]",
   "observation": "Android: Bloqueado Data. Falta el dato: la cuenta no tiene activo el metodo de entrega «Retiro en tienda en Unimarc Las Condes»; con el carro sobre el minimo el CTA queda «ocupado». Quien lo carga: equipo de data (activar ese metodo en la cuenta). iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Android: Bloqueado Data. Falta el dato: la cuenta no tiene activo el metodo de entrega «Retiro en tienda en Unimarc Las Condes»; con el carro sobre el minimo el CTA queda «ocupado». Quien lo carga: equipo de data (activar ese metodo en la cuenta). iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El método de entrega activo es Retiro en tienda en {TIENDA_RETIRO_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}",
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
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito con el CTA \"Continuar con la entrega\" habilitado y sin el toast de monto faltante.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {TIENDA_RETIRO_001} = TBD\n- {UNIDADES_SOBRE_MINIMO} = TBD\n- {MONTO_MINIMO_COMPRA} = TBD\n- {COMPRADOR_USER} = 11.223.344-K\n- {COMPRADOR_PASSWORD} = [contraseña omitida]"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "Con {UNIDADES_SOBRE_MINIMO} unidades el toast desaparece y el CTA \"Continuar con la entrega\" queda habilitado.",
   "id": "TC-B2C37-APP-038",
   "name": "Verificar que al alcanzar el mínimo se oculta el toast y se habilita el CTA en tiempo real [App] [Logueado]",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El método de entrega activo es Despacho a domicilio\n- El carro contiene {SKU_VALID_001} x 1 y el subtotal es menor a {MONTO_MINIMO_COMPRA}",
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
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito, muestra el toast \"¡Solo te faltan $X para ir a pagar!\" con X = {MONTO_MINIMO_COMPRA} − subtotal y el botón \"Continuar con la entrega\" deshabilitado con el label \"Mínimo de compra ${MONTO_MINIMO_COMPRA}\".\n3. El usuario toca el control + de {SKU_VALID_001} hasta llegar a {UNIDADES_SOBRE_MINIMO} unidades.\n4. El sistema recalcula el subtotal, oculta el toast y habilita el CTA \"Continuar con la entrega\" sin recargar la página.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {MONTO_MINIMO_COMPRA} = TBD\n- {UNIDADES_SOBRE_MINIMO} = TBD\n- {COMPRADOR_USER} = 11.223.344-K\n- {COMPRADOR_PASSWORD} = [contraseña omitida]"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "Se muestra el banner \"Ahorra $X siendo Diamante · Prueba y disfruta 15 días gratis.\" con $X calculado sobre el carro y el CTA \"Lo quiero\".",
   "id": "TC-B2C37-APP-039",
   "name": "Verificar que el carrito muestra el banner de membresía para cliente sin membresía previa [App] [Logueado]",
   "observation": "Android: Bloqueado Data. Falta el dato: {SKU_OFERTA_MEMBRESIA} no tiene precio Diamante en DEV (en el carro solo muestra su promo normal del 23%), asi que el banner «Ahorra $X siendo Diamante» no aparece con la cuenta sin membresia. Quien lo carga: equipo de data (SKU con precio Diamante vigente). iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Android: Bloqueado Data. Falta el dato: {SKU_OFERTA_MEMBRESIA} no tiene precio Diamante en DEV (en el carro solo muestra su promo normal del 23%), asi que el banner «Ahorra $X siendo Diamante» no aparece con la cuenta sin membresia. Quien lo carga: equipo de data (SKU con precio Diamante vigente). iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta {COMPRADOR_SIN_MEMBRESIA_USER} nunca tuvo membresía\n- El carro contiene {SKU_VALID_001}\n- El carrito contiene productos con descuentos membresía {SKU_OFERTA_MEMBRESIA}",
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
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner \"Ahorra $X siendo Diamante · Prueba y disfruta 15 días gratis.\" con el CTA \"Lo quiero\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K\n- {COMPRADOR_SIN_MEMBRESIA_PASSWORD} = Avatar123.\n- {SKU_OFERTA_MEMBRESIA} = 000000000000178089-UN"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "Se abre el flujo de contratación de membresía definido en B2C-42.",
   "id": "TC-B2C37-APP-040",
   "name": "Verificar que \"Lo quiero\" abre el flujo de contratación de membresía [App] [Logueado]",
   "observation": "Android: Bloqueado Data. Falta el dato: el carro con {SKU_VALID_001} no tiene ningun producto con precio Diamante, asi que no aparece el banner «Ahorra $X siendo Diamante» ni su CTA «Lo quiero». Quien lo carga: equipo de data (SKU con precio Diamante vigente). iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Android: Bloqueado Data. Falta el dato: el carro con {SKU_VALID_001} no tiene ningun producto con precio Diamante, asi que no aparece el banner «Ahorra $X siendo Diamante» ni su CTA «Lo quiero». Quien lo carga: equipo de data (SKU con precio Diamante vigente). iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER}\n- La cuenta {COMPRADOR_SIN_MEMBRESIA_USER} nunca tuvo membresía\n- El carro contiene {SKU_VALID_001}",
   "screenshots": [
    {
     "caption": "Android · Paso 5 — carro con la cuenta sin membresia",
     "file": "TC-B2C37-APP-040-android-p05-carro-con-la-cuenta-sin-membresia.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C37-APP-040-android.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner \"Ahorra $X siendo Diamante · Prueba y disfruta 15 días gratis.\" con el CTA \"Lo quiero\".\n3. El usuario toca \"Lo quiero\".\n4. El sistema abre el flujo de contratación de membresía (B2C-42).",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {COMPRADOR_SIN_MEMBRESIA_USER} = 11.223.344-K\n- {COMPRADOR_SIN_MEMBRESIA_PASSWORD} = Avatar123."
  },
  {
   "executed_at": "2026-10-30",
   "expected": "Se abre el flujo de renovación de membresía definido en B2C-42.",
   "id": "TC-B2C37-APP-042",
   "name": "Verificar que \"Renovar\" abre el flujo de renovación de membresía [App] [Logueado]",
   "observation": "Android: Bloqueado Data. Falta el dato: con la cuenta de membresia vencida y {SKU_VALID_001} en el carro no aparece el banner «Ahorrarias $X siendo Diamante · Vuelve, te extranamos.» (el SKU no tiene precio Diamante). Quien lo carga: equipo de data (SKU con precio Diamante vigente). iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Android: Bloqueado Data. Falta el dato: con la cuenta de membresia vencida y {SKU_VALID_001} en el carro no aparece el banner «Ahorrarias $X siendo Diamante · Vuelve, te extranamos.» (el SKU no tiene precio Diamante). Quien lo carga: equipo de data (SKU con precio Diamante vigente). iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER}\n- La cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER} tuvo membresía y ya no está vigente\n- El carro contiene {SKU_VALID_001}",
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
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito y muestra el banner \"Ahorrarías $X siendo Diamante · Vuelve, te extrañamos.\" con el CTA \"Renovar\".\n3. El usuario toca \"Renovar\".\n4. El sistema abre el flujo de renovación de membresía (B2C-42).",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {COMPRADOR_MEMBRESIA_EXPIRADA_USER} = TBD\n- {COMPRADOR_MEMBRESIA_EXPIRADA_PASSWORD} = TBD"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "Durante todo el scroll la tarjeta de totales permanece fija mostrando \"Subtotal\", \"Subtotal con Unipay\" y \"Continuar con la entrega\".",
   "id": "TC-B2C37-APP-047",
   "name": "Verificar que la tarjeta de totales queda fija al hacer scroll en la lista de productos [App] [Logueado]",
   "observation": "Android: Bloqueado Data. Falta el dato: {SKU_UNIPAY_001} no tiene una promo Unipay vigente en DEV; la tarjeta de totales solo muestra «Subtotal». Quien lo carga: equipo de data (SKU con promo Unipay vigente). iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Android: Bloqueado Data. Falta el dato: {SKU_UNIPAY_001} no tiene una promo Unipay vigente en DEV; la tarjeta de totales solo muestra «Subtotal». Quien lo carga: equipo de data (SKU con promo Unipay vigente). iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- El carro contiene {SKUS_CARRUSEL} y {SKU_UNIPAY_001}, y la lista supera la altura visible de la pantalla",
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
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito con la lista de productos y la tarjeta de totales en la parte inferior.\n3. El usuario hace scroll vertical hasta el final de la lista de productos.\n4. El sistema desplaza el área de productos y mantiene fija la tarjeta de totales con \"Subtotal\", \"Subtotal con Unipay\" y el CTA \"Continuar con la entrega\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKUS_CARRUSEL} = TBD\n- {SKU_UNIPAY_001} = TBD\n- {COMPRADOR_USER} = 11.223.344-K\n- {COMPRADOR_PASSWORD} = [contraseña omitida]"
  }
 ]
}
-->
