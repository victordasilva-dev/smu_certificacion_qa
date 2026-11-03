# Minicarro del header

| Campo | Valor |
|---|---|
| Suite | B2C-53 |
| Última actualización | 2026-10-21 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Origen de los TC | Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-53 WEB Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 21 |
| Bloqueado Data | 4 |
| Rechazado | 3 |
| **Total** | **28** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-21 | 21 | TC-B2C53-D-001, TC-B2C53-D-002, TC-B2C53-D-003, TC-B2C53-D-004, TC-B2C53-D-005, TC-B2C53-D-006, TC-B2C53-D-007, TC-B2C53-D-008, TC-B2C53-D-009, TC-B2C53-D-010, TC-B2C53-D-011, TC-B2C53-D-017, TC-B2C53-D-019, TC-B2C53-D-020, TC-B2C53-D-021, TC-B2C53-D-022, TC-B2C53-D-023, TC-B2C53-D-024, TC-B2C53-D-028, TC-B2C53-D-029, TC-B2C53-D-030 |
| 2026-10-20 | 28 | TC-B2C53-D-001, TC-B2C53-D-002, TC-B2C53-D-003, TC-B2C53-D-004, TC-B2C53-D-005, TC-B2C53-D-006, TC-B2C53-D-007, TC-B2C53-D-008, TC-B2C53-D-009, TC-B2C53-D-010, TC-B2C53-D-011, TC-B2C53-D-012, TC-B2C53-D-013, TC-B2C53-D-014, TC-B2C53-D-015, TC-B2C53-D-017, TC-B2C53-D-019, TC-B2C53-D-020, TC-B2C53-D-021, TC-B2C53-D-022, TC-B2C53-D-023, TC-B2C53-D-024, TC-B2C53-D-025, TC-B2C53-D-026, TC-B2C53-D-027, TC-B2C53-D-028, TC-B2C53-D-029, TC-B2C53-D-030 |

## Detalle por caso de prueba

### TC-B2C53-D-001 - Verificar que al abrir el minicarro se muestra un skeleton mientras carga el carrito [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- El carro contiene {SKU_VALID_001}
- DevTools abierto con throttling de red "Slow 3G"

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario hace clic en el ícono del carrito en el header.

**Resultado esperado**

Se muestra un skeleton de carga en el panel del minicarro hasta que se obtienen los datos del carrito.

**Resultado obtenido**

Con la red en Slow 3G activada antes de ingresar, al abrir el minicarro se muestra un skeleton de carga y luego el producto.

**Evidencia**

![Paso 3 — skeleton del minicarro](<B2C-53 Evidencias/TC-B2C53-D-001-p03-skeleton-del-minicarro.png>)

![Estado final](<B2C-53 Evidencias/TC-B2C53-D-001.png>)

---

### TC-B2C53-D-002 - Verificar que el minicarro lista los productos con thumbnail, nombre, unidad, precio y cantidad [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- El carro contiene {SKU_VALID_001} x 1 y {SKU_PESABLE} con 0,5 kg

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea

{SKU_PESABLE} = 000000000000037972-KG

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario hace clic en el ícono del carrito en el header.
3. El sistema despliega el panel flotante del minicarro.
4. El usuario revisa cada producto listado.

**Resultado esperado**

Cada producto muestra thumbnail, nombre, unidad de medida, precio y cantidad con controles +/−; la lista es completa y scrolleable (no colapsa).

**Resultado obtenido**

El minicarro lista cada producto con miniatura, nombre, precio «$X c/u», cantidad «N un.» y sus controles (tacho o − y +).

**Evidencia**

![Paso 3 — minicarro con 2 productos](<B2C-53 Evidencias/TC-B2C53-D-002-p03-minicarro-con-2-productos.png>)

![Estado final](<B2C-53 Evidencias/TC-B2C53-D-002.png>)

---

### TC-B2C53-D-003 - Verificar que el minicarro muestra total, Vaciar carro, Ver mi carro, Ir a pagar e indicador [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- El carro contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 1

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario hace clic en el ícono del carrito en el header.
3. El sistema despliega el panel flotante del minicarro.
4. El usuario revisa el total, las acciones del panel y el indicador del ícono del carrito.

**Resultado esperado**

El panel muestra el total del carrito, el link "Vaciar carro 🗑", los CTAs "Ver mi carro" e "Ir a pagar", y el ícono del carrito muestra 2.

**Resultado obtenido**

Con el carro sobre el mínimo el minicarro muestra el total, «Vaciar carro», «Ver mi carro», «Ir a pagar» y el indicador del carrito con la cantidad correcta. Bajo el mínimo «Ver mi carro» se reemplaza por «Mínimo de compra $20.000» (coherente con D-012 y D-014).

**Evidencia**

![Paso 3 — minicarro](<B2C-53 Evidencias/TC-B2C53-D-003-p03-minicarro.png>)

![Estado final](<B2C-53 Evidencias/TC-B2C53-D-003.png>)

---

### TC-B2C53-D-004 - Verificar que los productos no disponibles se muestran debajo como referencia visual [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_NO_DISPONIBLE} = 000000000400254005-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_SIN_STOCK} = Unimarc Los leones

{USER_AUTH_001} = (contraseña de la cuenta)

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario hace clic en el ícono del carrito en el header.
3. El sistema despliega el panel flotante del minicarro.
4. El usuario revisa la sección de productos no disponibles del minicarro.

**Resultado esperado**

{SKU_NO_DISPONIBLE} se muestra en una sección de no disponibles debajo de los disponibles, sin acciones de gestión (definidas en B2C-39).

**Resultado obtenido**

Causa: los datos están invertidos. En {TIENDA_SIN_STOCK} (Unimarc Los Leones) {SKU_NO_DISPONIBLE} (000000000400254005-UN) sí tiene stock: su ficha muestra «Agregar» y «En carro», el carro lo lista como disponible y suma $1.970 al total; en la dirección Calle Uno 23, La Florida figura «Pronto disponible» sin «Agregar». El token además dice «Unimarc Los leones» y la tienda se llama «Unimarc Los Leones». Acción: declarar una tienda donde el producto no tenga stock (o ajustar su inventario) y el nombre exacto de la tienda. Re-verificado en vivo el 2026-10-21.

**Observación**

Causa: los datos están invertidos. En {TIENDA_SIN_STOCK} (Unimarc Los Leones) {SKU_NO_DISPONIBLE} (000000000400254005-UN) sí tiene stock: su ficha muestra «Agregar» y «En carro», el carro lo lista como disponible y suma $1.970 al total; en la dirección Calle Uno 23, La Florida figura «Pronto disponible» sin «Agregar». El token además dice «Unimarc Los leones» y la tienda se llama «Unimarc Los Leones». Acción: declarar una tienda donde el producto no tenga stock (o ajustar su inventario) y el nombre exacto de la tienda. Re-verificado en vivo el 2026-10-21.

**Evidencia**

![explore53 pdp tienda](<B2C-53 Evidencias/explore53-pdp-tienda.png>)

![explore53 nodisp](<B2C-53 Evidencias/explore53-nodisp.png>)

---

### TC-B2C53-D-005 - Verificar que con el carro vacío el minicarro muestra el estado vacío e Ir a comprar [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-21 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- El carro está vacío

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario hace clic en el ícono del carrito en el header.
3. El sistema despliega el panel flotante del minicarro.
4. El usuario revisa el panel y el ícono del carrito.

**Resultado esperado**

El panel muestra imagen, subtítulo "Tu carro está vacío", un mensaje que invita a seguir comprando y el CTA "Ir a comprar"; el ícono del carrito no muestra número.

**Resultado obtenido**

Esperado: con el carro vacío el panel muestra imagen, «Tu carro está vacío», un mensaje que invita a seguir comprando y «Ir a comprar», y el ícono del carrito no muestra número. Obtenido: el panel muestra todo eso, pero el ícono del carrito del header muestra el número «0». Bug B2C-1260. Re-verificado en vivo el 2026-10-21.

**Observación**

Esperado: con el carro vacío el panel muestra imagen, «Tu carro está vacío», un mensaje que invita a seguir comprando y «Ir a comprar», y el ícono del carrito no muestra número. Obtenido: el panel muestra todo eso, pero el ícono del carrito del header muestra el número «0». Bug B2C-1260. Re-verificado en vivo el 2026-10-21.

**Evidencia**

![Paso 3 — minicarro vacio](<B2C-53 Evidencias/TC-B2C53-D-005-p03-minicarro-vacio.png>)

![Estado final](<B2C-53 Evidencias/TC-B2C53-D-005.png>)

---

### TC-B2C53-D-006 - Verificar que un error al cargar el minicarro muestra la pantalla de error CRT-020 [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- El carro contiene {SKU_VALID_001}
- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_API_ENDPOINT} = *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/cust

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario hace clic en el ícono del carrito en el header.

**Resultado esperado**

El panel se abre con la pantalla de error "No pudimos mostrar tu carro. Tenemos problemas con cargar tus productos. Por favor, inténtalo otra vez. (CRT-020)" y los botones "Reintentar" y "Volver al Inicio".

**Resultado obtenido**

Con la request del carro bloqueada antes de ingresar, el minicarro muestra «No pudimos mostrar tu carro» con CRT-020, «Reintentar» y «Volver al Inicio».

**Evidencia**

![Paso 3 — minicarro con el error](<B2C-53 Evidencias/TC-B2C53-D-006-p03-minicarro-con-el-error.png>)

![Estado final](<B2C-53 Evidencias/TC-B2C53-D-006.png>)

---

### TC-B2C53-D-007 - Verificar que Reintentar con éxito recarga el minicarro y muestra los productos [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- El carro contiene {SKU_VALID_001}
- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_API_ENDPOINT} = *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/cust

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario hace clic en el ícono del carrito en el header.
3. El sistema muestra la pantalla de error CRT-020.
4. El usuario desactiva en DevTools el bloqueo de la request {CART_API_ENDPOINT}.
5. El usuario hace clic en "Reintentar".
6. El sistema muestra el skeleton de carga.

**Resultado esperado**

El minicarro vuelve a solicitar el carrito y muestra {SKU_VALID_001}.

**Resultado obtenido**

Al quitar el bloqueo y tocar «Reintentar», el minicarro vuelve a cargar y muestra el producto.

**Evidencia**

![Paso 3 — minicarro con el error](<B2C-53 Evidencias/TC-B2C53-D-007-p03-minicarro-con-el-error.png>)

![Estado final](<B2C-53 Evidencias/TC-B2C53-D-007.png>)

---

### TC-B2C53-D-008 - Verificar que Reintentar con fallo mantiene la pantalla de error del minicarro [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- El carro contiene {SKU_VALID_001}
- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_API_ENDPOINT} = *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/cust

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario hace clic en el ícono del carrito en el header.
3. El sistema muestra la pantalla de error CRT-020.
4. El usuario hace clic en "Reintentar".
5. El sistema muestra el skeleton de carga.

**Resultado esperado**

Tras el skeleton, el minicarro vuelve a mostrar la pantalla de error CRT-020 con "Reintentar" y "Volver al Inicio".

**Resultado obtenido**

Con el bloqueo activo, «Reintentar» mantiene la pantalla de error del minicarro.

**Evidencia**

![Paso 3 — minicarro con el error](<B2C-53 Evidencias/TC-B2C53-D-008-p03-minicarro-con-el-error.png>)

![Estado final](<B2C-53 Evidencias/TC-B2C53-D-008.png>)

---

### TC-B2C53-D-009 - Verificar que Volver al Inicio cierra el minicarro y redirige al Home [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: PLP ({PLP_URL})
- El carro contiene {SKU_VALID_001}
- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_API_ENDPOINT} = *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/cust

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_v

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {PLP_URL}.
2. El usuario hace clic en el ícono del carrito en el header.
3. El sistema muestra la pantalla de error CRT-020.
4. El usuario hace clic en "Volver al Inicio".

**Resultado esperado**

El minicarro se cierra y el usuario es redirigido al Home ({BASE_URL}).

**Resultado obtenido**

Desde la PLP con el error del minicarro, «Volver al Inicio» cierra el minicarro y redirige al Home.

**Evidencia**

![Paso 3 — error del minicarro en la plp](<B2C-53 Evidencias/TC-B2C53-D-009-p03-error-del-minicarro-en-la-plp.png>)

![Estado final](<B2C-53 Evidencias/TC-B2C53-D-009.png>)

---

### TC-B2C53-D-010 - Verificar que con el minicarro cerrado el indicador del carrito se actualiza en tiempo real [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: PLP ({PLP_URL})
- El carro contiene {SKU_VALID_001} x 1
- El minicarro está cerrado

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_v

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {PLP_URL}.
2. El usuario hace clic en "Agregar" en un producto unitario de la PLP.
3. El usuario hace clic en el + del mismo producto.

**Resultado esperado**

El indicador del ícono del carrito pasa de 1 a 2 y luego a 3 en tiempo real, sin recargar la página.

**Resultado obtenido**

En la PLP el indicador del carrito pasa de 1 a 2 al agregar y de 2 a 3 con el +, sin recargar la página.

**Evidencia**

![Paso 4 — indicador en 2](<B2C-53 Evidencias/TC-B2C53-D-010-p04-indicador-en-2.png>)

![Estado final](<B2C-53 Evidencias/TC-B2C53-D-010.png>)

---

### TC-B2C53-D-011 - Verificar que el indicador cuenta los unitarios por cantidad y los pesables como 1 [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- El carro contiene {SKU_VALID_001} x 3 y {SKU_PESABLE} con 1,5 kg

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea

{SKU_PESABLE} = 000000000000037972-KG

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario revisa el número del indicador del ícono del carrito.

**Resultado esperado**

El indicador muestra 4 (3 unidades de {SKU_VALID_001} + 1 por {SKU_PESABLE}).

**Resultado obtenido**

El indicador cuenta 3 unidades de {SKU_VALID_001} más 1 por el pesable = 4.

**Evidencia**

![Paso 3 — indicador del carrito](<B2C-53 Evidencias/TC-B2C53-D-011-p03-indicador-del-carrito.png>)

![Estado final](<B2C-53 Evidencias/TC-B2C53-D-011.png>)

---

### TC-B2C53-D-012 - Verificar que con el mínimo cumplido Ver mi carro redirige al carro completo [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Método de entrega activo

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (credencial)

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario hace clic en el ícono del carrito en el header.
3. El sistema despliega el panel flotante del minicarro.
4. El usuario hace clic en "Ver mi carro".

**Resultado esperado**

El usuario es redirigido al carro completo ({CART_URL}).

**Resultado obtenido**

Con {SKU_VALID_001} x 11 (subtotal $27.390), 'Ver mi carro' del minicarro lleva al carro completo (/cart).

**Evidencia**

![Paso 3 — minicarro sobre el minimo](<B2C-53 Evidencias/TC-B2C53-D-012-p03-minicarro-sobre-el-minimo.png>)

![Estado final](<B2C-53 Evidencias/TC-B2C53-D-012.png>)

---

### TC-B2C53-D-013 - Verificar que con el mínimo cumplido Ir a pagar lleva directo a Mis Envíos [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Método de entrega activo
- La cuenta tiene productos My Usuals o favoritos

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (credencial)

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario hace clic en el ícono del carrito en el header.
3. El sistema despliega el panel flotante del minicarro.
4. El usuario hace clic en "Ir a pagar".

**Resultado esperado**

El usuario es redirigido directamente a Mis Envíos, sin mostrarse el modal "¡Que no se te olviden!" (B2C-41).

**Resultado obtenido**

Con {SKU_VALID_001} x 11, 'Ir a pagar' del minicarro lleva directo a Mis Envíos (/checkout/entrega) sin mostrar '¡Que no se te olviden!'.

**Evidencia**

![Paso 3 — minicarro sobre el minimo](<B2C-53 Evidencias/TC-B2C53-D-013-p03-minicarro-sobre-el-minimo.png>)

![Estado final](<B2C-53 Evidencias/TC-B2C53-D-013.png>)

---

### TC-B2C53-D-014 - Verificar que sin el mínimo el minicarro muestra el faltante y deshabilita Ir a pagar [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x 1 y el subtotal es menor a {MONTO_MINIMO_COMPRA}
- Método de entrega activo

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (credencial)

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario hace clic en el ícono del carrito en el header.
3. El sistema despliega el panel flotante del minicarro.
4. El usuario revisa el panel del minicarro.

**Resultado esperado**

Se muestra el banner "¡Solo te faltan $X para ir a pagar!" (X = {MONTO_MINIMO_COMPRA} − subtotal) con botón X, la línea "Mínimo de compra ${MONTO_MINIMO_COMPRA}" y el botón "Ir a pagar" deshabilitado.

**Resultado obtenido**

Con {SKU_VALID_001} x 1 el minicarro muestra '¡Solo te faltan $X para ir a pagar!' (X = 20.000 − subtotal) con su X, la línea 'Mínimo de compra $20.000' e 'Ir a pagar' deshabilitado.

**Evidencia**

![Paso 4 — minicarro bajo el minimo](<B2C-53 Evidencias/TC-B2C53-D-014-p04-minicarro-bajo-el-minimo.png>)

---

### TC-B2C53-D-015 - Verificar que el banner de faltante para el mínimo se cierra con la X [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x 1 y el subtotal es menor a {MONTO_MINIMO_COMPRA}
- Método de entrega activo

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (credencial)

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario hace clic en el ícono del carrito en el header.
3. El sistema despliega el panel flotante del minicarro.
4. El usuario hace clic en la X del banner "¡Solo te faltan $X para ir a pagar!".

**Resultado esperado**

El banner se cierra y el botón "Ir a pagar" sigue deshabilitado.

**Resultado obtenido**

La X cierra el banner de faltante y 'Ir a pagar' sigue deshabilitado.

**Evidencia**

![Estado final](<B2C-53 Evidencias/TC-B2C53-D-015.png>)

---

### TC-B2C53-D-017 - Verificar que un invitado que hace clic en "Ver mi carro" es redirigido a la sección del carro [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- El carro contiene {SKU_VALID_001}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario hace clic en el ícono del carrito en el header.
3. El sistema despliega el panel flotante del minicarro.
4. El usuario hace clic en "Ver mi carro".

**Resultado esperado**

El sistema redirige al usuario a la sección del carro ({CART_URL}).

**Resultado obtenido**

«Ver mi carro» redirige al carro ({CART_URL}). El caso se ejecutó con el carro sobre el mínimo, que es cuando el botón aparece.

**Evidencia**

![Paso 3 — minicarro](<B2C-53 Evidencias/TC-B2C53-D-017-p03-minicarro.png>)

![Estado final](<B2C-53 Evidencias/TC-B2C53-D-017.png>)

---

### TC-B2C53-D-019 - Verificar que Vaciar carro abre el modal de confirmación con Si, eliminar y No, Gracias [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- El carro contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 1

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario hace clic en el ícono del carrito en el header.
3. El sistema despliega el panel flotante del minicarro.
4. El usuario hace clic en el link "Vaciar carro 🗑".
5. El sistema despliega el modal de confirmación "Vaciar carro".
6. El usuario revisa el contenido del modal.

**Resultado esperado**

El modal muestra imagen, título "Vaciar carro", subtítulo "¿Estas seguro de que quieres eliminar todos los producots de tu carro?" y los botones "Si, eliminar" y "No, Gracias".

**Resultado obtenido**

«Vaciar carro» abre el modal con imagen, «Sí, eliminar» y «No, gracias». El texto del modal es «Vaciar el carro» y «¿Deseas eliminar todos los productos de tu carro?», distinto del de la planilla («Vaciar carro» y un subtítulo con errores de tipeo): se trata como texto de planilla desactualizado, igual que el mismo modal aprobado en B2C-37.

**Evidencia**

![Paso 5 — modal vaciar carro](<B2C-53 Evidencias/TC-B2C53-D-019-p05-modal-vaciar-carro.png>)

![Estado final](<B2C-53 Evidencias/TC-B2C53-D-019.png>)

---

### TC-B2C53-D-020 - Verificar que con Unipay activo el total del minicarro refleja el descuento Unipay [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- Sesión iniciada con la cuenta {COMPRADOR_UNIPAY_USER}
- La cuenta tiene membresía Unipay activa
- El carro contiene {SKU_UNIPAY_001} (producto con descuento Unipay)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_UNIPAY_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_UNIPAY_USER} = daunuruco+comprador@avatar-global.com

{SKU_UNIPAY_001} = 000000000000661945-UN

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario hace clic en el ícono del carrito en el header.
3. El sistema despliega el panel flotante del minicarro.
4. El usuario revisa el precio del producto y el total del panel.

**Resultado esperado**

El total del minicarro refleja el precio de {SKU_UNIPAY_001} con el descuento Unipay aplicado.

**Resultado obtenido**

Causa: {SKU_UNIPAY_001} (Lavaloza Quix 1.5 L) no tiene precio Unipay vigente: su ficha trae solo la etiqueta «Promoción % Unipay» y un único precio ($4.750), así que no hay descuento Unipay que verificar en el total. Acción: declarar un SKU con precio Unipay vigente. Re-verificado en vivo el 2026-10-21.

**Observación**

Causa: {SKU_UNIPAY_001} (Lavaloza Quix 1.5 L) no tiene precio Unipay vigente: su ficha trae solo la etiqueta «Promoción % Unipay» y un único precio ($4.750), así que no hay descuento Unipay que verificar en el total. Acción: declarar un SKU con precio Unipay vigente. Re-verificado en vivo el 2026-10-21.

**Evidencia**

![Estado final](<B2C-53 Evidencias/TC-B2C53-D-020.png>)

---

### TC-B2C53-D-021 - Verificar que confirmar el vaciado muestra spinner y deja el minicarro vacío [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- El carro contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 1

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario hace clic en el ícono del carrito en el header.
3. El sistema despliega el panel flotante del minicarro.
4. El usuario hace clic en el link "Vaciar carro 🗑".
5. El sistema despliega el modal de confirmación "Vaciar carro".
6. El usuario hace clic en "Si, eliminar".
7. El sistema muestra un spinner en el botón.

**Resultado esperado**

El panel pasa al estado vacío ("Tu carro está vacío") y el indicador del ícono del carrito se actualiza a 0.

**Resultado obtenido**

Al confirmar «Sí, eliminar» el minicarro queda vacío («Tu carro está vacío») y el indicador se limpia.

**Evidencia**

![Paso 5 — modal vaciar carro](<B2C-53 Evidencias/TC-B2C53-D-021-p05-modal-vaciar-carro.png>)

![Estado final](<B2C-53 Evidencias/TC-B2C53-D-021.png>)

---

### TC-B2C53-D-022 - Verificar que un error al vaciar cierra el modal, mantiene los productos y muestra CRT-076 [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- El carro contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 1
- DevTools abierto con bloqueo de la request {VACIAR_CARRO_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{VACIAR_CARRO_API_ENDPOINT} = None

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario hace clic en el ícono del carrito en el header.
3. El sistema despliega el panel flotante del minicarro.
4. El usuario hace clic en el link "Vaciar carro 🗑".
5. El sistema despliega el modal de confirmación "Vaciar carro".
6. El usuario hace clic en "Si, eliminar".

**Resultado esperado**

El modal se cierra, el carrito mantiene {SKU_VALID_001} y {SKU_UNITARIO} y se muestra el toast "¡Lo sentimos! No pudimos vaciar tu carro, vuelve a intentarlo" (CRT-076) que persiste hasta cerrarlo con la X.

**Resultado obtenido**

Con el vaciado bloqueado (DELETE de ítems del carro) y {SKU_VALID_001} + {SKU_UNITARIO} en el carro: al confirmar «Sí, eliminar» el modal se cierra, el carro conserva sus 2 productos y aparece el toast «¡Lo sentimos! No pudimos vaciar tu carro, vuelve a intentarlo» (CRT-076), que persiste 6 s y se cierra con la X.

**Evidencia**

![Paso 7 — toast CRT-076](<B2C-53 Evidencias/TC-B2C53-D-022-p07-toast-crt-076.png>)

![Estado final](<B2C-53 Evidencias/TC-B2C53-D-022.png>)

---

### TC-B2C53-D-023 - Verificar que No, Gracias cierra el modal de vaciado sin cambios en el carro [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- El carro contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 1

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario hace clic en el ícono del carrito en el header.
3. El sistema despliega el panel flotante del minicarro.
4. El usuario hace clic en el link "Vaciar carro 🗑".
5. El sistema despliega el modal de confirmación "Vaciar carro".
6. El usuario hace clic en "No, Gracias".

**Resultado esperado**

El modal se cierra y el minicarro mantiene {SKU_VALID_001} y {SKU_UNITARIO} con sus cantidades.

**Resultado obtenido**

«No, gracias» cierra el modal de vaciado y el carro conserva sus 2 productos.

**Evidencia**

![Paso 5 — modal vaciar carro](<B2C-53 Evidencias/TC-B2C53-D-023-p05-modal-vaciar-carro.png>)

![Estado final](<B2C-53 Evidencias/TC-B2C53-D-023.png>)

---

### TC-B2C53-D-024 - Verificar que un producto con promo "Combina/Completa" muestra el mensaje en el minicarro [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-21 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- El carro contiene {SKU_CON_PROMO_COMBINA}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{SKU_CON_PROMO_COMBINA} = None

{USER_AUTH_001} = (contraseña de la cuenta)

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL} con la cuenta {USER_AUTH_001}.
2. El usuario agrega {SKU_CON_PROMO_COMBINA} al carrito.
3. El usuario hace clic en el ícono del carrito en el header.
4. El sistema despliega el panel flotante del minicarro.
5. El usuario localiza {SKU_CON_PROMO_COMBINA} en el listado del minicarro.
6. El usuario verifica que el producto muestra el mensaje "Combina" o "Completa".

**Resultado esperado**

El producto {SKU_CON_PROMO_COMBINA} muestra el mensaje "Combina" o "Completa" junto a su información.

**Resultado obtenido**

El minicarro lista Carne molida fundo río alegre ($7.690 c/u, 1 un.) con el enlace «Te faltan 1 para la promo»; no se muestra «Combina» ni «Completa».

**Observación**

Esperado: el producto {SKU_CON_PROMO_COMBINA} muestra el mensaje «Combina» o «Completa». Obtenido: el minicarro muestra «Te faltan 1 para la promo» y no aparece ni «Combina» ni «Completa». B2C-53.spec.ts:184. A confirmar con el equipo si ese es el texto vigente de la promo.

**Evidencia**

![Paso 5 — minicarro con el producto con promo](<B2C-53 Evidencias/TC-B2C53-D-024-p05-minicarro-con-el-producto-con-promo.png>)

---

### TC-B2C53-D-025 - Verificar que incrementar la cantidad de un producto en el minicarro actualiza el subtotal e indicador [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- El carro contiene {SKU_VALID_001} x 1

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = (credencial)

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL} con la cuenta {USER_AUTH_001}.
2. El usuario agrega {SKU_VALID_001} x 1 al carrito.
3. El usuario hace clic en el ícono del carrito en el header.
4. El sistema despliega el panel flotante del minicarro.
5. El usuario anota el subtotal actual y la cantidad del indicador del ícono.
6. El usuario hace clic en el control + del producto {SKU_VALID_001}.
7. El sistema actualiza la cantidad del producto y el subtotal del minicarro.

**Resultado esperado**

La cantidad del producto {SKU_VALID_001} se incrementa en 1. El subtotal del minicarro refleja el nuevo precio. El indicador del ícono del carrito se actualiza al nuevo total de ítems.

**Resultado obtenido**

El + del minicarro pasa la cantidad de 1 a 2, el subtotal se duplica y el indicador del ícono pasa a 2.

**Evidencia**

![Paso 5 — minicarro con 1 un](<B2C-53 Evidencias/TC-B2C53-D-025-p05-minicarro-con-1-un.png>)

![Paso 7 — minicarro con 2 un](<B2C-53 Evidencias/TC-B2C53-D-025-p07-minicarro-con-2-un.png>)

---

### TC-B2C53-D-026 - Verificar que decrementar la cantidad de un producto en el minicarro actualiza el subtotal e indicador [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- El carro contiene {SKU_VALID_001} x 2

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = (credencial)

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL} con la cuenta {USER_AUTH_001}.
2. El usuario agrega {SKU_VALID_001} x 2 al carrito.
3. El usuario hace clic en el ícono del carrito en el header.
4. El sistema despliega el panel flotante del minicarro.
5. El usuario anota el subtotal actual y la cantidad del indicador del ícono.
6. El usuario hace clic en el control − del producto {SKU_VALID_001}.
7. El sistema actualiza la cantidad del producto y el subtotal del minicarro.

**Resultado esperado**

La cantidad del producto {SKU_VALID_001} se decrementa en 1 (de 2 a 1). El subtotal del minicarro refleja el nuevo precio. El indicador del ícono del carrito se actualiza al nuevo total de ítems.

**Resultado obtenido**

El − del minicarro pasa la cantidad de 2 a 1, el subtotal baja a la mitad y el indicador pasa a 1.

**Evidencia**

![Paso 5 — minicarro con 2 un](<B2C-53 Evidencias/TC-B2C53-D-026-p05-minicarro-con-2-un.png>)

![Paso 7 — minicarro con 1 un](<B2C-53 Evidencias/TC-B2C53-D-026-p07-minicarro-con-1-un.png>)

---

### TC-B2C53-D-027 - Verificar que decrementar la cantidad a 0 elimina el producto del minicarro [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- El carro contiene {SKU_VALID_001} x 1

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = (credencial)

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL} con la cuenta {USER_AUTH_001}.
2. El usuario agrega {SKU_VALID_001} x 1 al carrito.
3. El usuario hace clic en el ícono del carrito en el header.
4. El sistema despliega el panel flotante del minicarro.
5. El usuario hace clic en el control − del producto {SKU_VALID_001} (cantidad actual: 1).
6. El sistema elimina el producto del minicarro y actualiza el subtotal.

**Resultado esperado**

El producto {SKU_VALID_001} desaparece del listado del minicarro. El subtotal se actualiza descontando el precio del producto eliminado. El indicador del ícono del carrito se actualiza.

**Resultado obtenido**

Con 1 unidad, el control − (tacho) elimina el producto del minicarro, el subtotal descuenta su precio y el indicador se actualiza.

**Evidencia**

![Paso 5 — minicarro con 1 un](<B2C-53 Evidencias/TC-B2C53-D-027-p05-minicarro-con-1-un.png>)

![Paso 7 — minicarro sin el producto](<B2C-53 Evidencias/TC-B2C53-D-027-p07-minicarro-sin-el-producto.png>)

---

### TC-B2C53-D-028 - Verificar que al alcanzar el límite máximo de cantidad el control + queda deshabilitado [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-21 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- El carro contiene {SKU_VALID_001} x {CART_LIMIT_QTY}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_LIMIT_QTY} = None

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = (contraseña de la cuenta)

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL} con la cuenta {USER_AUTH_001}.
2. El usuario agrega {SKU_VALID_001} al carrito hasta alcanzar {CART_LIMIT_QTY}.
3. El usuario hace clic en el ícono del carrito en el header.
4. El sistema despliega el panel flotante del minicarro.
5. El usuario verifica el estado del control + del producto {SKU_VALID_001}.

**Resultado esperado**

El control + del producto {SKU_VALID_001} se muestra deshabilitado (no clickeable). La cantidad del producto permanece en {CART_LIMIT_QTY}.

**Resultado obtenido**

El minicarro muestra Albóndigas Super Pollo con 30 un. ($2.490 c/u, subtotal $74.700) y el botón + habilitado.

**Observación**

Esperado: con {CART_LIMIT_QTY} = 30 un. el control + del producto queda deshabilitado. Obtenido: con 30 un. en el minicarro el + sigue habilitado. B2C-53.spec.ts:195. No se comprobó si el carro admite 31.

**Evidencia**

![Paso 5 — minicarro con 30 un.](<B2C-53 Evidencias/TC-B2C53-D-028-p05-minicarro-con-30-un.png>)

---

### TC-B2C53-D-029 - Verificar que un producto no disponible se muestra sin controles +/− en el minicarro [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- El carro contiene {SKU_VALID_001} (disponible) y {SKU_NO_DISPONIBLE} (no disponible)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{SKU_NO_DISPONIBLE} = 000000000400254005-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = (contraseña de la cuenta)

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL} con la cuenta {USER_AUTH_001}.
2. El usuario agrega {SKU_VALID_001} y {SKU_NO_DISPONIBLE} al carrito.
3. El usuario hace clic en el ícono del carrito en el header.
4. El sistema despliega el panel flotante del minicarro.
5. El usuario ubica la sección de productos no disponibles en el minicarro.
6. El usuario verifica los controles del producto {SKU_NO_DISPONIBLE}.

**Resultado esperado**

El producto {SKU_NO_DISPONIBLE} aparece en una sección separada debajo de los disponibles. No muestra controles +/− ni acciones de compra. Se presenta como referencia visual únicamente.

**Resultado obtenido**

Causa: los datos están invertidos. En {TIENDA_SIN_STOCK} (Unimarc Los Leones) {SKU_NO_DISPONIBLE} (000000000400254005-UN) sí tiene stock: su ficha muestra «Agregar» y «En carro», el carro lo lista como disponible y suma $1.970 al total; en la dirección Calle Uno 23, La Florida figura «Pronto disponible» sin «Agregar». El token además dice «Unimarc Los leones» y la tienda se llama «Unimarc Los Leones». Acción: declarar una tienda donde el producto no tenga stock (o ajustar su inventario) y el nombre exacto de la tienda. Re-verificado en vivo el 2026-10-21.

**Observación**

Causa: los datos están invertidos. En {TIENDA_SIN_STOCK} (Unimarc Los Leones) {SKU_NO_DISPONIBLE} (000000000400254005-UN) sí tiene stock: su ficha muestra «Agregar» y «En carro», el carro lo lista como disponible y suma $1.970 al total; en la dirección Calle Uno 23, La Florida figura «Pronto disponible» sin «Agregar». El token además dice «Unimarc Los leones» y la tienda se llama «Unimarc Los Leones». Acción: declarar una tienda donde el producto no tenga stock (o ajustar su inventario) y el nombre exacto de la tienda. Re-verificado en vivo el 2026-10-21.

**Evidencia**

![explore53 pdp tienda](<B2C-53 Evidencias/explore53-pdp-tienda.png>)

![explore53 nodisp](<B2C-53 Evidencias/explore53-nodisp.png>)

---

### TC-B2C53-D-030 - Verificar que el total del minicarro no incluye el precio de los productos no disponibles [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-53.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- El carro contiene {SKU_VALID_001} x 1 (disponible) y {SKU_NO_DISPONIBLE} (no disponible)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{PRECIO_SKU_VALID_001} = None

{SKU_NO_DISPONIBLE} = 000000000400254005-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = (contraseña de la cuenta)

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL} con la cuenta {USER_AUTH_001}.
2. El usuario agrega {SKU_VALID_001} x 1 y {SKU_NO_DISPONIBLE} al carrito.
3. El usuario hace clic en el ícono del carrito en el header.
4. El sistema despliega el panel flotante del minicarro.
5. El usuario verifica el total mostrado en el pie del minicarro.

**Resultado esperado**

El total del minicarro es igual al precio de {SKU_VALID_001} × 1 ({PRECIO_SKU_VALID_001}). El precio de {SKU_NO_DISPONIBLE} no está incluido en el total.

**Resultado obtenido**

En la ficha de {SKU_NO_DISPONIBLE} figura «Pronto disponible» y no se ofrece «Agregar».

**Observación**

Causa: {SKU_NO_DISPONIBLE} figura «Pronto disponible» sin «Agregar» para esta cuenta, así que no se puede dejar en el carro como no disponible. Los tokens {PRECIO_SKU_VALID_001} (2490) ya tienen valor. Acción: declarar un producto que quede no disponible en la tienda del carro (ver D-004). Re-verificado en vivo el 2026-10-21 con la data de las 10:07.

**Evidencia**

![Estado final](<B2C-53 Evidencias/TC-B2C53-D-030.png>)

---

<!-- qa-evidence-state
{
 "header": {
  "browsers": {
   "desktop": "chromium"
  },
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "environment": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-53",
  "tc_file": "Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-53 WEB Test Cases.xlsx",
  "title": "Minicarro del header",
  "updated_at": "2026-10-21"
 },
 "history": {
  "2026-10-20": [
   "TC-B2C53-D-001",
   "TC-B2C53-D-002",
   "TC-B2C53-D-003",
   "TC-B2C53-D-004",
   "TC-B2C53-D-005",
   "TC-B2C53-D-006",
   "TC-B2C53-D-007",
   "TC-B2C53-D-008",
   "TC-B2C53-D-009",
   "TC-B2C53-D-010",
   "TC-B2C53-D-011",
   "TC-B2C53-D-012",
   "TC-B2C53-D-013",
   "TC-B2C53-D-014",
   "TC-B2C53-D-015",
   "TC-B2C53-D-017",
   "TC-B2C53-D-019",
   "TC-B2C53-D-020",
   "TC-B2C53-D-021",
   "TC-B2C53-D-022",
   "TC-B2C53-D-023",
   "TC-B2C53-D-024",
   "TC-B2C53-D-025",
   "TC-B2C53-D-026",
   "TC-B2C53-D-027",
   "TC-B2C53-D-028",
   "TC-B2C53-D-029",
   "TC-B2C53-D-030"
  ],
  "2026-10-21": [
   "TC-B2C53-D-001",
   "TC-B2C53-D-002",
   "TC-B2C53-D-003",
   "TC-B2C53-D-004",
   "TC-B2C53-D-005",
   "TC-B2C53-D-006",
   "TC-B2C53-D-007",
   "TC-B2C53-D-008",
   "TC-B2C53-D-009",
   "TC-B2C53-D-010",
   "TC-B2C53-D-011",
   "TC-B2C53-D-017",
   "TC-B2C53-D-019",
   "TC-B2C53-D-020",
   "TC-B2C53-D-021",
   "TC-B2C53-D-022",
   "TC-B2C53-D-023",
   "TC-B2C53-D-024",
   "TC-B2C53-D-028",
   "TC-B2C53-D-029",
   "TC-B2C53-D-030"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "Se muestra un skeleton de carga en el panel del minicarro hasta que se obtienen los datos del carrito.",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-001",
   "name": "Verificar que al abrir el minicarro se muestra un skeleton mientras carga el carrito [Desktop] [Guest]",
   "observed": "Con la red en Slow 3G activada antes de ingresar, al abrir el minicarro se muestra un skeleton de carga y luego el producto.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- El carro contiene {SKU_VALID_001}\n- DevTools abierto con throttling de red \"Slow 3G\"",
   "screenshots": [
    {
     "caption": "Paso 3 — skeleton del minicarro",
     "file": "TC-B2C53-D-001-p03-skeleton-del-minicarro.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C53-D-001.png"
    }
   ],
   "spec": "tests/B2C-53.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario hace clic en el ícono del carrito en el header.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "Cada producto muestra thumbnail, nombre, unidad de medida, precio y cantidad con controles +/−; la lista es completa y scrolleable (no colapsa).",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-002",
   "name": "Verificar que el minicarro lista los productos con thumbnail, nombre, unidad, precio y cantidad [Desktop] [Guest]",
   "observed": "El minicarro lista cada producto con miniatura, nombre, precio «$X c/u», cantidad «N un.» y sus controles (tacho o − y +).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- El carro contiene {SKU_VALID_001} x 1 y {SKU_PESABLE} con 0,5 kg",
   "screenshots": [
    {
     "caption": "Paso 3 — minicarro con 2 productos",
     "file": "TC-B2C53-D-002-p03-minicarro-con-2-productos.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C53-D-002.png"
    }
   ],
   "spec": "tests/B2C-53.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario hace clic en el ícono del carrito en el header.\n3. El sistema despliega el panel flotante del minicarro.\n4. El usuario revisa cada producto listado.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea\n{SKU_PESABLE} = 000000000000037972-KG\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El panel muestra el total del carrito, el link \"Vaciar carro 🗑\", los CTAs \"Ver mi carro\" e \"Ir a pagar\", y el ícono del carrito muestra 2.",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-003",
   "name": "Verificar que el minicarro muestra total, Vaciar carro, Ver mi carro, Ir a pagar e indicador [Desktop] [Guest]",
   "observed": "Con el carro sobre el mínimo el minicarro muestra el total, «Vaciar carro», «Ver mi carro», «Ir a pagar» y el indicador del carrito con la cantidad correcta. Bajo el mínimo «Ver mi carro» se reemplaza por «Mínimo de compra $20.000» (coherente con D-012 y D-014).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- El carro contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 1",
   "screenshots": [
    {
     "caption": "Paso 3 — minicarro",
     "file": "TC-B2C53-D-003-p03-minicarro.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C53-D-003.png"
    }
   ],
   "spec": "tests/B2C-53.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario hace clic en el ícono del carrito en el header.\n3. El sistema despliega el panel flotante del minicarro.\n4. El usuario revisa el total, las acciones del panel y el indicador del ícono del carrito.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "{SKU_NO_DISPONIBLE} se muestra en una sección de no disponibles debajo de los disponibles, sin acciones de gestión (definidas en B2C-39).",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-004",
   "name": "Verificar que los productos no disponibles se muestran debajo como referencia visual [Desktop] [Logueado]",
   "observation": "Causa: los datos están invertidos. En {TIENDA_SIN_STOCK} (Unimarc Los Leones) {SKU_NO_DISPONIBLE} (000000000400254005-UN) sí tiene stock: su ficha muestra «Agregar» y «En carro», el carro lo lista como disponible y suma $1.970 al total; en la dirección Calle Uno 23, La Florida figura «Pronto disponible» sin «Agregar». El token además dice «Unimarc Los leones» y la tienda se llama «Unimarc Los Leones». Acción: declarar una tienda donde el producto no tenga stock (o ajustar su inventario) y el nombre exacto de la tienda. Re-verificado en vivo el 2026-10-21.",
   "observed": "Causa: los datos están invertidos. En {TIENDA_SIN_STOCK} (Unimarc Los Leones) {SKU_NO_DISPONIBLE} (000000000400254005-UN) sí tiene stock: su ficha muestra «Agregar» y «En carro», el carro lo lista como disponible y suma $1.970 al total; en la dirección Calle Uno 23, La Florida figura «Pronto disponible» sin «Agregar». El token además dice «Unimarc Los leones» y la tienda se llama «Unimarc Los Leones». Acción: declarar una tienda donde el producto no tenga stock (o ajustar su inventario) y el nombre exacto de la tienda. Re-verificado en vivo el 2026-10-21.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "screenshots": [
    {
     "caption": "explore53 pdp tienda",
     "file": "explore53-pdp-tienda.png"
    },
    {
     "caption": "explore53 nodisp",
     "file": "explore53-nodisp.png"
    }
   ],
   "spec": "tests/B2C-53.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario hace clic en el ícono del carrito en el header.\n3. El sistema despliega el panel flotante del minicarro.\n4. El usuario revisa la sección de productos no disponibles del minicarro.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_NO_DISPONIBLE} = 000000000400254005-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_SIN_STOCK} = Unimarc Los leones\n{USER_AUTH_001} = (contraseña de la cuenta)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El panel muestra imagen, subtítulo \"Tu carro está vacío\", un mensaje que invita a seguir comprando y el CTA \"Ir a comprar\"; el ícono del carrito no muestra número.",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-005",
   "name": "Verificar que con el carro vacío el minicarro muestra el estado vacío e Ir a comprar [Desktop] [Guest]",
   "observation": "Esperado: con el carro vacío el panel muestra imagen, «Tu carro está vacío», un mensaje que invita a seguir comprando y «Ir a comprar», y el ícono del carrito no muestra número. Obtenido: el panel muestra todo eso, pero el ícono del carrito del header muestra el número «0». Bug B2C-1260. Re-verificado en vivo el 2026-10-21.",
   "observed": "Esperado: con el carro vacío el panel muestra imagen, «Tu carro está vacío», un mensaje que invita a seguir comprando y «Ir a comprar», y el ícono del carrito no muestra número. Obtenido: el panel muestra todo eso, pero el ícono del carrito del header muestra el número «0». Bug B2C-1260. Re-verificado en vivo el 2026-10-21.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- El carro está vacío",
   "screenshots": [
    {
     "caption": "Paso 3 — minicarro vacio",
     "file": "TC-B2C53-D-005-p03-minicarro-vacio.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C53-D-005.png"
    }
   ],
   "spec": "tests/B2C-53.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario hace clic en el ícono del carrito en el header.\n3. El sistema despliega el panel flotante del minicarro.\n4. El usuario revisa el panel y el ícono del carrito.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El panel se abre con la pantalla de error \"No pudimos mostrar tu carro. Tenemos problemas con cargar tus productos. Por favor, inténtalo otra vez. (CRT-020)\" y los botones \"Reintentar\" y \"Volver al Inicio\".",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-006",
   "name": "Verificar que un error al cargar el minicarro muestra la pantalla de error CRT-020 [Desktop] [Guest]",
   "observed": "Con la request del carro bloqueada antes de ingresar, el minicarro muestra «No pudimos mostrar tu carro» con CRT-020, «Reintentar» y «Volver al Inicio».",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- El carro contiene {SKU_VALID_001}\n- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)",
   "screenshots": [
    {
     "caption": "Paso 3 — minicarro con el error",
     "file": "TC-B2C53-D-006-p03-minicarro-con-el-error.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C53-D-006.png"
    }
   ],
   "spec": "tests/B2C-53.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario hace clic en el ícono del carrito en el header.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_API_ENDPOINT} = *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/cust\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El minicarro vuelve a solicitar el carrito y muestra {SKU_VALID_001}.",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-007",
   "name": "Verificar que Reintentar con éxito recarga el minicarro y muestra los productos [Desktop] [Guest]",
   "observed": "Al quitar el bloqueo y tocar «Reintentar», el minicarro vuelve a cargar y muestra el producto.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- El carro contiene {SKU_VALID_001}\n- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)",
   "screenshots": [
    {
     "caption": "Paso 3 — minicarro con el error",
     "file": "TC-B2C53-D-007-p03-minicarro-con-el-error.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C53-D-007.png"
    }
   ],
   "spec": "tests/B2C-53.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario hace clic en el ícono del carrito en el header.\n3. El sistema muestra la pantalla de error CRT-020.\n4. El usuario desactiva en DevTools el bloqueo de la request {CART_API_ENDPOINT}.\n5. El usuario hace clic en \"Reintentar\".\n6. El sistema muestra el skeleton de carga.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_API_ENDPOINT} = *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/cust\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "Tras el skeleton, el minicarro vuelve a mostrar la pantalla de error CRT-020 con \"Reintentar\" y \"Volver al Inicio\".",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-008",
   "name": "Verificar que Reintentar con fallo mantiene la pantalla de error del minicarro [Desktop] [Guest]",
   "observed": "Con el bloqueo activo, «Reintentar» mantiene la pantalla de error del minicarro.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- El carro contiene {SKU_VALID_001}\n- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)",
   "screenshots": [
    {
     "caption": "Paso 3 — minicarro con el error",
     "file": "TC-B2C53-D-008-p03-minicarro-con-el-error.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C53-D-008.png"
    }
   ],
   "spec": "tests/B2C-53.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario hace clic en el ícono del carrito en el header.\n3. El sistema muestra la pantalla de error CRT-020.\n4. El usuario hace clic en \"Reintentar\".\n5. El sistema muestra el skeleton de carga.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_API_ENDPOINT} = *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/cust\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El minicarro se cierra y el usuario es redirigido al Home ({BASE_URL}).",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-009",
   "name": "Verificar que Volver al Inicio cierra el minicarro y redirige al Home [Desktop] [Guest]",
   "observed": "Desde la PLP con el error del minicarro, «Volver al Inicio» cierra el minicarro y redirige al Home.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: PLP ({PLP_URL})\n- El carro contiene {SKU_VALID_001}\n- DevTools abierto con bloqueo de la request {CART_API_ENDPOINT} (Network request blocking)",
   "screenshots": [
    {
     "caption": "Paso 3 — error del minicarro en la plp",
     "file": "TC-B2C53-D-009-p03-error-del-minicarro-en-la-plp.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C53-D-009.png"
    }
   ],
   "spec": "tests/B2C-53.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {PLP_URL}.\n2. El usuario hace clic en el ícono del carrito en el header.\n3. El sistema muestra la pantalla de error CRT-020.\n4. El usuario hace clic en \"Volver al Inicio\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_API_ENDPOINT} = *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/cust\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_v\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El indicador del ícono del carrito pasa de 1 a 2 y luego a 3 en tiempo real, sin recargar la página.",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-010",
   "name": "Verificar que con el minicarro cerrado el indicador del carrito se actualiza en tiempo real [Desktop] [Guest]",
   "observed": "En la PLP el indicador del carrito pasa de 1 a 2 al agregar y de 2 a 3 con el +, sin recargar la página.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: PLP ({PLP_URL})\n- El carro contiene {SKU_VALID_001} x 1\n- El minicarro está cerrado",
   "screenshots": [
    {
     "caption": "Paso 4 — indicador en 2",
     "file": "TC-B2C53-D-010-p04-indicador-en-2.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C53-D-010.png"
    }
   ],
   "spec": "tests/B2C-53.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {PLP_URL}.\n2. El usuario hace clic en \"Agregar\" en un producto unitario de la PLP.\n3. El usuario hace clic en el + del mismo producto.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_v\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El indicador muestra 4 (3 unidades de {SKU_VALID_001} + 1 por {SKU_PESABLE}).",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-011",
   "name": "Verificar que el indicador cuenta los unitarios por cantidad y los pesables como 1 [Desktop] [Guest]",
   "observed": "El indicador cuenta 3 unidades de {SKU_VALID_001} más 1 por el pesable = 4.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- El carro contiene {SKU_VALID_001} x 3 y {SKU_PESABLE} con 1,5 kg",
   "screenshots": [
    {
     "caption": "Paso 3 — indicador del carrito",
     "file": "TC-B2C53-D-011-p03-indicador-del-carrito.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C53-D-011.png"
    }
   ],
   "spec": "tests/B2C-53.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario revisa el número del indicador del ícono del carrito.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea\n{SKU_PESABLE} = 000000000000037972-KG\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El usuario es redirigido al carro completo ({CART_URL}).",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-012",
   "name": "Verificar que con el mínimo cumplido Ver mi carro redirige al carro completo [Desktop] [Logueado]",
   "observed": "Con {SKU_VALID_001} x 11 (subtotal $27.390), 'Ver mi carro' del minicarro lleva al carro completo (/cart).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Método de entrega activo",
   "screenshots": [
    {
     "caption": "Paso 3 — minicarro sobre el minimo",
     "file": "TC-B2C53-D-012-p03-minicarro-sobre-el-minimo.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C53-D-012.png"
    }
   ],
   "spec": "tests/B2C-53.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario hace clic en el ícono del carrito en el header.\n3. El sistema despliega el panel flotante del minicarro.\n4. El usuario hace clic en \"Ver mi carro\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (credencial)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El usuario es redirigido directamente a Mis Envíos, sin mostrarse el modal \"¡Que no se te olviden!\" (B2C-41).",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-013",
   "name": "Verificar que con el mínimo cumplido Ir a pagar lleva directo a Mis Envíos [Desktop] [Logueado]",
   "observed": "Con {SKU_VALID_001} x 11, 'Ir a pagar' del minicarro lleva directo a Mis Envíos (/checkout/entrega) sin mostrar '¡Que no se te olviden!'.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Método de entrega activo\n- La cuenta tiene productos My Usuals o favoritos",
   "screenshots": [
    {
     "caption": "Paso 3 — minicarro sobre el minimo",
     "file": "TC-B2C53-D-013-p03-minicarro-sobre-el-minimo.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C53-D-013.png"
    }
   ],
   "spec": "tests/B2C-53.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario hace clic en el ícono del carrito en el header.\n3. El sistema despliega el panel flotante del minicarro.\n4. El usuario hace clic en \"Ir a pagar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (credencial)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se muestra el banner \"¡Solo te faltan $X para ir a pagar!\" (X = {MONTO_MINIMO_COMPRA} − subtotal) con botón X, la línea \"Mínimo de compra ${MONTO_MINIMO_COMPRA}\" y el botón \"Ir a pagar\" deshabilitado.",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-014",
   "name": "Verificar que sin el mínimo el minicarro muestra el faltante y deshabilita Ir a pagar [Desktop] [Logueado]",
   "observed": "Con {SKU_VALID_001} x 1 el minicarro muestra '¡Solo te faltan $X para ir a pagar!' (X = 20.000 − subtotal) con su X, la línea 'Mínimo de compra $20.000' e 'Ir a pagar' deshabilitado.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x 1 y el subtotal es menor a {MONTO_MINIMO_COMPRA}\n- Método de entrega activo",
   "screenshots": [
    {
     "caption": "Paso 4 — minicarro bajo el minimo",
     "file": "TC-B2C53-D-014-p04-minicarro-bajo-el-minimo.png"
    }
   ],
   "spec": "tests/B2C-53.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario hace clic en el ícono del carrito en el header.\n3. El sistema despliega el panel flotante del minicarro.\n4. El usuario revisa el panel del minicarro.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (credencial)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El banner se cierra y el botón \"Ir a pagar\" sigue deshabilitado.",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-015",
   "name": "Verificar que el banner de faltante para el mínimo se cierra con la X [Desktop] [Logueado]",
   "observed": "La X cierra el banner de faltante y 'Ir a pagar' sigue deshabilitado.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x 1 y el subtotal es menor a {MONTO_MINIMO_COMPRA}\n- Método de entrega activo",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C53-D-015.png"
    }
   ],
   "spec": "tests/B2C-53.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario hace clic en el ícono del carrito en el header.\n3. El sistema despliega el panel flotante del minicarro.\n4. El usuario hace clic en la X del banner \"¡Solo te faltan $X para ir a pagar!\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (credencial)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El sistema redirige al usuario a la sección del carro ({CART_URL}).",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-017",
   "name": "Verificar que un invitado que hace clic en \"Ver mi carro\" es redirigido a la sección del carro [Desktop] [Guest]",
   "observed": "«Ver mi carro» redirige al carro ({CART_URL}). El caso se ejecutó con el carro sobre el mínimo, que es cuando el botón aparece.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- El carro contiene {SKU_VALID_001}",
   "screenshots": [
    {
     "caption": "Paso 3 — minicarro",
     "file": "TC-B2C53-D-017-p03-minicarro.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C53-D-017.png"
    }
   ],
   "spec": "tests/B2C-53.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario hace clic en el ícono del carrito en el header.\n3. El sistema despliega el panel flotante del minicarro.\n4. El usuario hace clic en \"Ver mi carro\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El modal muestra imagen, título \"Vaciar carro\", subtítulo \"¿Estas seguro de que quieres eliminar todos los producots de tu carro?\" y los botones \"Si, eliminar\" y \"No, Gracias\".",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-019",
   "name": "Verificar que Vaciar carro abre el modal de confirmación con Si, eliminar y No, Gracias [Desktop] [Guest]",
   "observed": "«Vaciar carro» abre el modal con imagen, «Sí, eliminar» y «No, gracias». El texto del modal es «Vaciar el carro» y «¿Deseas eliminar todos los productos de tu carro?», distinto del de la planilla («Vaciar carro» y un subtítulo con errores de tipeo): se trata como texto de planilla desactualizado, igual que el mismo modal aprobado en B2C-37.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- El carro contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 1",
   "screenshots": [
    {
     "caption": "Paso 5 — modal vaciar carro",
     "file": "TC-B2C53-D-019-p05-modal-vaciar-carro.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C53-D-019.png"
    }
   ],
   "spec": "tests/B2C-53.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario hace clic en el ícono del carrito en el header.\n3. El sistema despliega el panel flotante del minicarro.\n4. El usuario hace clic en el link \"Vaciar carro 🗑\".\n5. El sistema despliega el modal de confirmación \"Vaciar carro\".\n6. El usuario revisa el contenido del modal.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El total del minicarro refleja el precio de {SKU_UNIPAY_001} con el descuento Unipay aplicado.",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-020",
   "name": "Verificar que con Unipay activo el total del minicarro refleja el descuento Unipay [Desktop] [Logueado]",
   "observation": "Causa: {SKU_UNIPAY_001} (Lavaloza Quix 1.5 L) no tiene precio Unipay vigente: su ficha trae solo la etiqueta «Promoción % Unipay» y un único precio ($4.750), así que no hay descuento Unipay que verificar en el total. Acción: declarar un SKU con precio Unipay vigente. Re-verificado en vivo el 2026-10-21.",
   "observed": "Causa: {SKU_UNIPAY_001} (Lavaloza Quix 1.5 L) no tiene precio Unipay vigente: su ficha trae solo la etiqueta «Promoción % Unipay» y un único precio ($4.750), así que no hay descuento Unipay que verificar en el total. Acción: declarar un SKU con precio Unipay vigente. Re-verificado en vivo el 2026-10-21.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- Sesión iniciada con la cuenta {COMPRADOR_UNIPAY_USER}\n- La cuenta tiene membresía Unipay activa\n- El carro contiene {SKU_UNIPAY_001} (producto con descuento Unipay)",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C53-D-020.png"
    }
   ],
   "spec": "tests/B2C-53.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario hace clic en el ícono del carrito en el header.\n3. El sistema despliega el panel flotante del minicarro.\n4. El usuario revisa el precio del producto y el total del panel.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_UNIPAY_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_UNIPAY_USER} = daunuruco+comprador@avatar-global.com\n{SKU_UNIPAY_001} = 000000000000661945-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El panel pasa al estado vacío (\"Tu carro está vacío\") y el indicador del ícono del carrito se actualiza a 0.",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-021",
   "name": "Verificar que confirmar el vaciado muestra spinner y deja el minicarro vacío [Desktop] [Guest]",
   "observed": "Al confirmar «Sí, eliminar» el minicarro queda vacío («Tu carro está vacío») y el indicador se limpia.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- El carro contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 1",
   "screenshots": [
    {
     "caption": "Paso 5 — modal vaciar carro",
     "file": "TC-B2C53-D-021-p05-modal-vaciar-carro.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C53-D-021.png"
    }
   ],
   "spec": "tests/B2C-53.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario hace clic en el ícono del carrito en el header.\n3. El sistema despliega el panel flotante del minicarro.\n4. El usuario hace clic en el link \"Vaciar carro 🗑\".\n5. El sistema despliega el modal de confirmación \"Vaciar carro\".\n6. El usuario hace clic en \"Si, eliminar\".\n7. El sistema muestra un spinner en el botón.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El modal se cierra, el carrito mantiene {SKU_VALID_001} y {SKU_UNITARIO} y se muestra el toast \"¡Lo sentimos! No pudimos vaciar tu carro, vuelve a intentarlo\" (CRT-076) que persiste hasta cerrarlo con la X.",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-022",
   "name": "Verificar que un error al vaciar cierra el modal, mantiene los productos y muestra CRT-076 [Desktop] [Guest]",
   "observed": "Con el vaciado bloqueado (DELETE de ítems del carro) y {SKU_VALID_001} + {SKU_UNITARIO} en el carro: al confirmar «Sí, eliminar» el modal se cierra, el carro conserva sus 2 productos y aparece el toast «¡Lo sentimos! No pudimos vaciar tu carro, vuelve a intentarlo» (CRT-076), que persiste 6 s y se cierra con la X.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- El carro contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 1\n- DevTools abierto con bloqueo de la request {VACIAR_CARRO_API_ENDPOINT} (Network request blocking)",
   "screenshots": [
    {
     "caption": "Paso 7 — toast CRT-076",
     "file": "TC-B2C53-D-022-p07-toast-crt-076.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C53-D-022.png"
    }
   ],
   "spec": "tests/B2C-53.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario hace clic en el ícono del carrito en el header.\n3. El sistema despliega el panel flotante del minicarro.\n4. El usuario hace clic en el link \"Vaciar carro 🗑\".\n5. El sistema despliega el modal de confirmación \"Vaciar carro\".\n6. El usuario hace clic en \"Si, eliminar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{VACIAR_CARRO_API_ENDPOINT} = None",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El modal se cierra y el minicarro mantiene {SKU_VALID_001} y {SKU_UNITARIO} con sus cantidades.",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-023",
   "name": "Verificar que No, Gracias cierra el modal de vaciado sin cambios en el carro [Desktop] [Guest]",
   "observed": "«No, gracias» cierra el modal de vaciado y el carro conserva sus 2 productos.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- El carro contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 1",
   "screenshots": [
    {
     "caption": "Paso 5 — modal vaciar carro",
     "file": "TC-B2C53-D-023-p05-modal-vaciar-carro.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C53-D-023.png"
    }
   ],
   "spec": "tests/B2C-53.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario hace clic en el ícono del carrito en el header.\n3. El sistema despliega el panel flotante del minicarro.\n4. El usuario hace clic en el link \"Vaciar carro 🗑\".\n5. El sistema despliega el modal de confirmación \"Vaciar carro\".\n6. El usuario hace clic en \"No, Gracias\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El producto {SKU_CON_PROMO_COMBINA} muestra el mensaje \"Combina\" o \"Completa\" junto a su información.",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-024",
   "name": "Verificar que un producto con promo \"Combina/Completa\" muestra el mensaje en el minicarro [Desktop] [Logueado]",
   "observation": "Esperado: el producto {SKU_CON_PROMO_COMBINA} muestra el mensaje «Combina» o «Completa». Obtenido: el minicarro muestra «Te faltan 1 para la promo» y no aparece ni «Combina» ni «Completa». B2C-53.spec.ts:184. A confirmar con el equipo si ese es el texto vigente de la promo.",
   "observed": "El minicarro lista Carne molida fundo río alegre ($7.690 c/u, 1 un.) con el enlace «Te faltan 1 para la promo»; no se muestra «Combina» ni «Completa».",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- El carro contiene {SKU_CON_PROMO_COMBINA}",
   "screenshots": [
    {
     "caption": "Paso 5 — minicarro con el producto con promo",
     "file": "TC-B2C53-D-024-p05-minicarro-con-el-producto-con-promo.png"
    }
   ],
   "spec": "tests/B2C-53.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {BASE_URL} con la cuenta {USER_AUTH_001}.\n2. El usuario agrega {SKU_CON_PROMO_COMBINA} al carrito.\n3. El usuario hace clic en el ícono del carrito en el header.\n4. El sistema despliega el panel flotante del minicarro.\n5. El usuario localiza {SKU_CON_PROMO_COMBINA} en el listado del minicarro.\n6. El usuario verifica que el producto muestra el mensaje \"Combina\" o \"Completa\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{SKU_CON_PROMO_COMBINA} = None\n{USER_AUTH_001} = (contraseña de la cuenta)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "La cantidad del producto {SKU_VALID_001} se incrementa en 1. El subtotal del minicarro refleja el nuevo precio. El indicador del ícono del carrito se actualiza al nuevo total de ítems.",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-025",
   "name": "Verificar que incrementar la cantidad de un producto en el minicarro actualiza el subtotal e indicador [Desktop] [Logueado]",
   "observed": "El + del minicarro pasa la cantidad de 1 a 2, el subtotal se duplica y el indicador del ícono pasa a 2.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- El carro contiene {SKU_VALID_001} x 1",
   "screenshots": [
    {
     "caption": "Paso 5 — minicarro con 1 un",
     "file": "TC-B2C53-D-025-p05-minicarro-con-1-un.png"
    },
    {
     "caption": "Paso 7 — minicarro con 2 un",
     "file": "TC-B2C53-D-025-p07-minicarro-con-2-un.png"
    }
   ],
   "spec": "tests/B2C-53.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL} con la cuenta {USER_AUTH_001}.\n2. El usuario agrega {SKU_VALID_001} x 1 al carrito.\n3. El usuario hace clic en el ícono del carrito en el header.\n4. El sistema despliega el panel flotante del minicarro.\n5. El usuario anota el subtotal actual y la cantidad del indicador del ícono.\n6. El usuario hace clic en el control + del producto {SKU_VALID_001}.\n7. El sistema actualiza la cantidad del producto y el subtotal del minicarro.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = (credencial)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "La cantidad del producto {SKU_VALID_001} se decrementa en 1 (de 2 a 1). El subtotal del minicarro refleja el nuevo precio. El indicador del ícono del carrito se actualiza al nuevo total de ítems.",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-026",
   "name": "Verificar que decrementar la cantidad de un producto en el minicarro actualiza el subtotal e indicador [Desktop] [Logueado]",
   "observed": "El − del minicarro pasa la cantidad de 2 a 1, el subtotal baja a la mitad y el indicador pasa a 1.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- El carro contiene {SKU_VALID_001} x 2",
   "screenshots": [
    {
     "caption": "Paso 5 — minicarro con 2 un",
     "file": "TC-B2C53-D-026-p05-minicarro-con-2-un.png"
    },
    {
     "caption": "Paso 7 — minicarro con 1 un",
     "file": "TC-B2C53-D-026-p07-minicarro-con-1-un.png"
    }
   ],
   "spec": "tests/B2C-53.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL} con la cuenta {USER_AUTH_001}.\n2. El usuario agrega {SKU_VALID_001} x 2 al carrito.\n3. El usuario hace clic en el ícono del carrito en el header.\n4. El sistema despliega el panel flotante del minicarro.\n5. El usuario anota el subtotal actual y la cantidad del indicador del ícono.\n6. El usuario hace clic en el control − del producto {SKU_VALID_001}.\n7. El sistema actualiza la cantidad del producto y el subtotal del minicarro.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = (credencial)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El producto {SKU_VALID_001} desaparece del listado del minicarro. El subtotal se actualiza descontando el precio del producto eliminado. El indicador del ícono del carrito se actualiza.",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-027",
   "name": "Verificar que decrementar la cantidad a 0 elimina el producto del minicarro [Desktop] [Logueado]",
   "observed": "Con 1 unidad, el control − (tacho) elimina el producto del minicarro, el subtotal descuenta su precio y el indicador se actualiza.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- El carro contiene {SKU_VALID_001} x 1",
   "screenshots": [
    {
     "caption": "Paso 5 — minicarro con 1 un",
     "file": "TC-B2C53-D-027-p05-minicarro-con-1-un.png"
    },
    {
     "caption": "Paso 7 — minicarro sin el producto",
     "file": "TC-B2C53-D-027-p07-minicarro-sin-el-producto.png"
    }
   ],
   "spec": "tests/B2C-53.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL} con la cuenta {USER_AUTH_001}.\n2. El usuario agrega {SKU_VALID_001} x 1 al carrito.\n3. El usuario hace clic en el ícono del carrito en el header.\n4. El sistema despliega el panel flotante del minicarro.\n5. El usuario hace clic en el control − del producto {SKU_VALID_001} (cantidad actual: 1).\n6. El sistema elimina el producto del minicarro y actualiza el subtotal.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = (credencial)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El control + del producto {SKU_VALID_001} se muestra deshabilitado (no clickeable). La cantidad del producto permanece en {CART_LIMIT_QTY}.",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-028",
   "name": "Verificar que al alcanzar el límite máximo de cantidad el control + queda deshabilitado [Desktop] [Logueado]",
   "observation": "Esperado: con {CART_LIMIT_QTY} = 30 un. el control + del producto queda deshabilitado. Obtenido: con 30 un. en el minicarro el + sigue habilitado. B2C-53.spec.ts:195. No se comprobó si el carro admite 31.",
   "observed": "El minicarro muestra Albóndigas Super Pollo con 30 un. ($2.490 c/u, subtotal $74.700) y el botón + habilitado.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- El carro contiene {SKU_VALID_001} x {CART_LIMIT_QTY}",
   "screenshots": [
    {
     "caption": "Paso 5 — minicarro con 30 un.",
     "file": "TC-B2C53-D-028-p05-minicarro-con-30-un.png"
    }
   ],
   "spec": "tests/B2C-53.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {BASE_URL} con la cuenta {USER_AUTH_001}.\n2. El usuario agrega {SKU_VALID_001} al carrito hasta alcanzar {CART_LIMIT_QTY}.\n3. El usuario hace clic en el ícono del carrito en el header.\n4. El sistema despliega el panel flotante del minicarro.\n5. El usuario verifica el estado del control + del producto {SKU_VALID_001}.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_LIMIT_QTY} = None\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = (contraseña de la cuenta)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El producto {SKU_NO_DISPONIBLE} aparece en una sección separada debajo de los disponibles. No muestra controles +/− ni acciones de compra. Se presenta como referencia visual únicamente.",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-029",
   "name": "Verificar que un producto no disponible se muestra sin controles +/− en el minicarro [Desktop] [Logueado]",
   "observation": "Causa: los datos están invertidos. En {TIENDA_SIN_STOCK} (Unimarc Los Leones) {SKU_NO_DISPONIBLE} (000000000400254005-UN) sí tiene stock: su ficha muestra «Agregar» y «En carro», el carro lo lista como disponible y suma $1.970 al total; en la dirección Calle Uno 23, La Florida figura «Pronto disponible» sin «Agregar». El token además dice «Unimarc Los leones» y la tienda se llama «Unimarc Los Leones». Acción: declarar una tienda donde el producto no tenga stock (o ajustar su inventario) y el nombre exacto de la tienda. Re-verificado en vivo el 2026-10-21.",
   "observed": "Causa: los datos están invertidos. En {TIENDA_SIN_STOCK} (Unimarc Los Leones) {SKU_NO_DISPONIBLE} (000000000400254005-UN) sí tiene stock: su ficha muestra «Agregar» y «En carro», el carro lo lista como disponible y suma $1.970 al total; en la dirección Calle Uno 23, La Florida figura «Pronto disponible» sin «Agregar». El token además dice «Unimarc Los leones» y la tienda se llama «Unimarc Los Leones». Acción: declarar una tienda donde el producto no tenga stock (o ajustar su inventario) y el nombre exacto de la tienda. Re-verificado en vivo el 2026-10-21.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- El carro contiene {SKU_VALID_001} (disponible) y {SKU_NO_DISPONIBLE} (no disponible)",
   "screenshots": [
    {
     "caption": "explore53 pdp tienda",
     "file": "explore53-pdp-tienda.png"
    },
    {
     "caption": "explore53 nodisp",
     "file": "explore53-nodisp.png"
    }
   ],
   "spec": "tests/B2C-53.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL} con la cuenta {USER_AUTH_001}.\n2. El usuario agrega {SKU_VALID_001} y {SKU_NO_DISPONIBLE} al carrito.\n3. El usuario hace clic en el ícono del carrito en el header.\n4. El sistema despliega el panel flotante del minicarro.\n5. El usuario ubica la sección de productos no disponibles en el minicarro.\n6. El usuario verifica los controles del producto {SKU_NO_DISPONIBLE}.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{SKU_NO_DISPONIBLE} = 000000000400254005-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = (contraseña de la cuenta)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El total del minicarro es igual al precio de {SKU_VALID_001} × 1 ({PRECIO_SKU_VALID_001}). El precio de {SKU_NO_DISPONIBLE} no está incluido en el total.",
   "form_factor": "desktop",
   "id": "TC-B2C53-D-030",
   "name": "Verificar que el total del minicarro no incluye el precio de los productos no disponibles [Desktop] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} figura «Pronto disponible» sin «Agregar» para esta cuenta, así que no se puede dejar en el carro como no disponible. Los tokens {PRECIO_SKU_VALID_001} (2490) ya tienen valor. Acción: declarar un producto que quede no disponible en la tienda del carro (ver D-004). Re-verificado en vivo el 2026-10-21 con la data de las 10:07.",
   "observed": "En la ficha de {SKU_NO_DISPONIBLE} figura «Pronto disponible» y no se ofrece «Agregar».",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- El carro contiene {SKU_VALID_001} x 1 (disponible) y {SKU_NO_DISPONIBLE} (no disponible)",
   "screenshots": [
    {
     "caption": "Estado final",
     "file": "TC-B2C53-D-030.png"
    }
   ],
   "spec": "tests/B2C-53.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL} con la cuenta {USER_AUTH_001}.\n2. El usuario agrega {SKU_VALID_001} x 1 y {SKU_NO_DISPONIBLE} al carrito.\n3. El usuario hace clic en el ícono del carrito en el header.\n4. El sistema despliega el panel flotante del minicarro.\n5. El usuario verifica el total mostrado en el pie del minicarro.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{PRECIO_SKU_VALID_001} = None\n{SKU_NO_DISPONIBLE} = 000000000400254005-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = (contraseña de la cuenta)",
   "viewport": "1440x900"
  }
 ]
}
-->
