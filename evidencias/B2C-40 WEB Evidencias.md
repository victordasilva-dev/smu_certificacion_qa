# B2C-40 WEB - Modal Ver similares - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-40 WEB |
| Última actualización | 2026-11-16 |
| Ejecutado por | Victor Chirinos |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | webkit |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP1/B2C-40 WEB Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 32 |
| **Total** | **32** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-16 | 32 | TC-40-D-002, TC-40-D-003, TC-40-D-004, TC-40-D-005, TC-40-D-006, TC-40-D-007, TC-40-D-008, TC-40-D-009, TC-40-D-010, TC-40-D-011, TC-40-D-012, TC-40-D-013, TC-40-D-014, TC-40-D-015, TC-40-D-016, TC-40-D-017, TC-40-M-002, TC-40-M-003, TC-40-M-004, TC-40-M-005, TC-40-M-006, TC-40-M-007, TC-40-M-008, TC-40-M-009, TC-40-M-010, TC-40-M-011, TC-40-M-012, TC-40-M-013, TC-40-M-014, TC-40-M-015, TC-40-M-016, TC-40-M-017 |

## Detalle por caso de prueba

### TC-40-D-002 - Clic en 'Ver similares' desde la PDP de un producto sin stock abre el modal

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

Storefront Unimarc activo en Desktop 1440x900. Al menos un producto sin stock visible en el contexto de prueba con el botón 'Ver similares' habilitado. Einstein Recommendations activo con recommender Product to Product configurado. User type: Guest.

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {SKU_PRODS_SIMILARES} = 000000000000628239-UN

**Pasos ejecutados**

1. Navegar al Home con viewport Desktop 1440×900.
2. Acceder a la PDP de un producto sin stock que muestre el botón 'Ver similares'.
3. Localizar el botón 'Ver similares' en la PDP.
4. Hacer clic en 'Ver similares'.
5. Verificar que el modal de productos similares se abre como sidebar derecho.
6. Confirmar que la PDP permanece visible detrás del modal.

**Resultado esperado**

El modal de productos similares se abre como sidebar derecho desde la PDP. La PDP permanece en el fondo mientras el modal está activo.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra "Agregar" y no "Ver similares", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16). Acción: declarar un SKU sin stock que muestre "Ver similares" (y la dirección o tienda donde no tiene stock).

**Evidencia**

![{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, "Agregar" y sin "Ver similares"](<B2C-40 WEB Evidencias/TC-40-sku-prods-similares-035129-con-stock.png>)

---

### TC-40-D-003 - Clic en 'Ver similares' desde el Carro (usuario logueado) abre el modal

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

Storefront Unimarc activo en Desktop 1440x900. Al menos un producto sin stock visible con botón 'Ver similares'. Einstein Recommendations activo. Usuario registrado logueado con credenciales válidas.

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {SKU_PRODS_SIMILARES} = 000000000000628239-UN
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {COMPRADOR_USER} = 11.223.344-K
- {COMPRADOR_PASSWORD} = Avatar1234.

**Pasos ejecutados**

1. Navegar al Home con viewport Desktop 1440×900 con usuario logueado.
2. Acceder al carro de compras que contiene al menos un producto no disponible.
3. En la sección de productos no disponibles, localizar el botón 'Ver similares'.
4. Hacer clic en 'Ver similares'.
5. Verificar que el modal de productos similares se abre como sidebar derecho.
6. Confirmar que el modal corresponde al producto no disponible seleccionado.

**Resultado esperado**

El modal de productos similares se abre correctamente desde el carro de compras. El modal corresponde al producto no disponible desde el cual se activó.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: el caso necesita el carro de {COMPRADOR_USER} con un producto no disponible, y el único producto que declara, {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra "Agregar" y no "Ver similares", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16), así que no hay producto no disponible que dejar en el carro. Acción: declarar un SKU sin stock para la dirección o tienda de {COMPRADOR_USER} y cargarlo en su carro.

**Evidencia**

![{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, "Agregar" y sin "Ver similares"](<B2C-40 WEB Evidencias/TC-40-sku-prods-similares-035129-con-stock.png>)

---

### TC-40-D-004 - Clic en 'Ver similares' desde el Minicarro (usuario logueado) abre el modal

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

Storefront Unimarc activo en Desktop 1440x900. Al menos un producto sin stock visible con botón 'Ver similares'. Einstein Recommendations activo. Usuario registrado logueado con credenciales válidas.

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {SKU_PRODS_SIMILARES} = 000000000000628239-UN
- {COMPRADOR_USER} = 11.223.344-K
- {COMPRADOR_PASSWORD} = Avatar1234.

**Pasos ejecutados**

1. Navegar al Home con viewport Desktop 1440×900 con usuario logueado.
2. Abrir el minicarro (dropdown del ícono de carro en el header).
3. En la sección de productos no disponibles del minicarro, localizar el botón 'Ver similares'.
4. Hacer clic en 'Ver similares'.
5. Verificar que el modal se abre como sidebar derecho.
6. Confirmar que el modal corresponde al producto no disponible seleccionado.

**Resultado esperado**

El modal de productos similares se abre desde el minicarro. Funciona correctamente para usuarios logueados desde este punto de entrada.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: el caso necesita el carro de {COMPRADOR_USER} con un producto no disponible, y el único producto que declara, {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra "Agregar" y no "Ver similares", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16), así que no hay producto no disponible que dejar en el carro. Acción: declarar un SKU sin stock para la dirección o tienda de {COMPRADOR_USER} y cargarlo en su carro.

**Evidencia**

![{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, "Agregar" y sin "Ver similares"](<B2C-40 WEB Evidencias/TC-40-sku-prods-similares-035129-con-stock.png>)

---

### TC-40-D-005 - Modal 'Ver similares' se presenta como sidebar lateral derecho (overlay)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

Storefront Unimarc activo en Desktop 1440×900. Al menos un producto sin stock visible en el contexto de prueba con el botón 'Ver similares' habilitado. Einstein Recommendations activo con recommender Product to Product configurado. User type: Guest.

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {SKU_PRODS_SIMILARES} = 000000000000628239-UN

**Pasos ejecutados**

1. Navegar al Home con viewport Desktop 1440×900.
2. Navegar a una página con un producto sin stock y hacer clic en 'Ver similares'.
3. Verificar que el modal aparece como un panel lateral en el lado derecho de la pantalla.
4. Verificar que es un overlay: la página de fondo permanece visible (con oscurecimiento).
5. Confirmar que el sidebar tiene scroll interno si el contenido lo requiere.
6. Verificar que el modal NO ocupa toda la pantalla ni reemplaza el contenido.

**Resultado esperado**

El modal se presenta como sidebar lateral derecho tipo overlay en Desktop. La página de fondo permanece visible detrás del overlay. El sidebar tiene scroll interno si el contenido supera la altura visible.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra "Agregar" y no "Ver similares", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16). Acción: declarar un SKU sin stock que muestre "Ver similares" (y la dirección o tienda donde no tiene stock).

**Evidencia**

![{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, "Agregar" y sin "Ver similares"](<B2C-40 WEB Evidencias/TC-40-sku-prods-similares-035129-con-stock.png>)

---

### TC-40-D-006 - Modal muestra todos los elementos estructurales requeridos (header, referencia producto, lista similares, botón Reemplazar fijo)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

Storefront Unimarc activo en Desktop 1440×900. Modal 'Ver similares' abierto (sidebar derecho) con productos similares disponibles. Einstein Recommendations activo. User type: Guest.

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {SKU_PRODS_SIMILARES} = 000000000000628239-UN

**Pasos ejecutados**

1. Abrir el modal 'Ver similares' desde un producto sin stock en Desktop.
2. Verificar que el header muestra el título 'Productos similares' y el botón cerrar (X).
3. Verificar que se muestra la referencia al producto original sin stock (imagen miniatura + nombre del producto).
4. Verificar que se muestra la lista de productos similares en formato shelf simplificada, cada uno con: imagen, marca | nombre, sección de precios y botón 'Agregar'.
5. Verificar que el botón 'Reemplazar producto' aparece fijo en la parte inferior del modal.
6. Desplazar el scroll del modal hacia abajo y confirmar que el botón 'Reemplazar producto' permanece fijo.

**Resultado esperado**

El modal muestra: header con título 'Productos similares' + botón X, referencia al producto original (miniatura + nombre), lista de similares en shelf simplificada (imagen, marca|nombre, precios, botón Agregar) y botón 'Reemplazar producto' fijo en la parte inferior.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra "Agregar" y no "Ver similares", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16). Acción: declarar un SKU sin stock que muestre "Ver similares" (y la dirección o tienda donde no tiene stock).

**Evidencia**

![{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, "Agregar" y sin "Ver similares"](<B2C-40 WEB Evidencias/TC-40-sku-prods-similares-035129-con-stock.png>)

---

### TC-40-D-007 - Al abrir el modal se muestra skeleton/loader mientras Einstein Recommendations carga los similares

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

Storefront Unimarc activo en Desktop 1440×900. Al menos un producto sin stock visible en el contexto de prueba con el botón 'Ver similares' habilitado. Einstein Recommendations activo con recommender Product to Product configurado. User type: Guest.

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {SKU_PRODS_SIMILARES} = 000000000000628239-UN

**Pasos ejecutados**

1. Navegar a una página con un producto sin stock en Desktop 1440×900.
2. Hacer clic en 'Ver similares'.
3. Observar inmediatamente el estado del modal recién abierto.
4. Verificar que se muestra un skeleton o loader representativo mientras Einstein Recommendations procesa la solicitud.
5. Esperar a que complete la carga.
6. Verificar que el skeleton es reemplazado por el contenido real (productos similares o estado vacío/error).

**Resultado esperado**

Al abrir el modal, se muestra un skeleton/loader mientras carga Einstein. Una vez completada la consulta, el skeleton es reemplazado por el contenido real. No queda skeleton visible junto al contenido final.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra "Agregar" y no "Ver similares", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16). Acción: declarar un SKU sin stock que muestre "Ver similares" (y la dirección o tienda donde no tiene stock).

**Evidencia**

![{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, "Agregar" y sin "Ver similares"](<B2C-40 WEB Evidencias/TC-40-sku-prods-similares-035129-con-stock.png>)

---

### TC-40-D-008 - Modal muestra productos similares disponibles filtrados por método de entrega activo; excluye similares sin stock

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

Storefront Unimarc activo en Desktop 1440×900. Modal 'Ver similares' abierto (sidebar derecho) con productos similares disponibles. Einstein Recommendations activo. User type: Guest.

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {SKU_PRODS_SIMILARES} = 000000000000628239-UN

**Pasos ejecutados**

1. Con método de entrega activo en Desktop 1440×900, abrir el modal 'Ver similares' de un producto sin stock.
2. Esperar a que carguen los productos similares.
3. Verificar que los productos listados están disponibles para el método de entrega activo.
4. Verificar que los precios mostrados son los vigentes.
5. Confirmar que ningún producto similar sin stock aparece en el listado del modal.

**Resultado esperado**

El modal muestra únicamente productos similares disponibles para el método de entrega activo, con precios vigentes. Los similares sin stock quedan excluidos del listado del modal.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra "Agregar" y no "Ver similares", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16). Acción: declarar un SKU sin stock que muestre "Ver similares" (y la dirección o tienda donde no tiene stock).

**Evidencia**

![{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, "Agregar" y sin "Ver similares"](<B2C-40 WEB Evidencias/TC-40-sku-prods-similares-035129-con-stock.png>)

---

### TC-40-D-009 - Cuando Einstein no retorna similares, modal muestra estado vacío con imagen, mensaje, error NAV015 y botón 'Entendido'

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

Storefront Unimarc activo en Desktop 1440×900. Producto sin stock cuyo Product ID no tiene similares en Einstein Recommendations (recommender retorna lista vacía). User type: Guest.

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {DIRECCION_DESPACHO_003} = TBD
- {SKU_SIN_SIMILARES} = 000000000000675191-UN

**Pasos ejecutados**

1. Navegar a una página con un producto sin stock que no tenga similares en Einstein Recommendations, en Desktop 1440×900.
2. Hacer clic en 'Ver similares'.
3. Esperar a que el modal complete la carga.
4. Verificar que se muestra la imagen del estado vacío.
5. Verificar que aparece el mensaje '¡Ups! Lo sentimos. El producto que buscamos no tiene otros similares'.
6. Verificar que se muestra el código de error NAV015.
7. Hacer clic en el botón 'Entendido' y verificar que el modal se cierra.

**Resultado esperado**

El modal muestra el estado vacío con: imagen, mensaje '¡Ups! Lo sentimos. El producto que buscamos no tiene otros similares', error NAV015 y botón 'Entendido' que cierra el modal correctamente.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: con {DIRECCION_DESPACHO_003} activa, {SKU_SIN_SIMILARES} = 000000000000675191-UN (Albóndigas Super Pollo 300 g) sí está sin stock y muestra "Ver similares", pero Einstein (product-to-product-einstein, HTTP 200) devuelve 6 similares (Salchicha San Jorge 20 un y 5 un, Chorizos La Crianza, Prietas La Preferida, Pechuga Super Pollo) y el modal los lista: no cumple la precondición "sin similares en Einstein". Acción: declarar un SKU sin stock para el que Einstein no devuelva similares.

**Evidencia**

![{SKU_SIN_SIMILARES} 675191 con {DIRECCION_DESPACHO_003}: "Pronto disponible" y "Ver similares"](<B2C-40 WEB Evidencias/TC-40-sku-sin-similares-675191-sin-stock-lo-barnechea.png>)

![Modal "Productos similares" de 675191: Einstein devuelve 6 similares](<B2C-40 WEB Evidencias/TC-40-D-009-p02-modal-con-6-similares.png>)

---

### TC-40-D-010 - Error o timeout en Einstein muestra estado de error con imagen, mensaje, error NAV016 y botón 'Entendido'

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

Storefront Unimarc activo en Desktop 1440×900. Condición de error o timeout simulable en el servicio de Einstein Recommendations (ej. tiempo de respuesta excedido o error de servidor). User type: Guest.

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {DIRECCION_DESPACHO_003} = TBD
- {SKU_PRODS_SIMILARES} = 000000000000628239-UN

**Pasos ejecutados**

1. Simular una condición de error o timeout en Einstein Recommendations.
2. Navegar a una página con un producto sin stock en Desktop 1440×900.
3. Hacer clic en 'Ver similares'.
4. Verificar que se muestra la imagen del estado de error.
5. Verificar el mensaje '¡Ups! Lo sentimos. El producto que buscas no tiene otros similares'.
6. Verificar que se muestra el código de error NAV016.
7. Hacer clic en el botón 'Entendido' y verificar que el modal se cierra.

**Resultado esperado**

El modal muestra el estado de error con: imagen, mensaje de error, código NAV016 y botón 'Entendido' que cierra el modal.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra "Agregar" y no "Ver similares", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16). Acción: declarar un SKU sin stock que muestre "Ver similares" (y la dirección o tienda donde no tiene stock). La simulación del error de Einstein se puede hacer interceptando la llamada a product-to-product-einstein.

**Evidencia**

![{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, "Agregar" y sin "Ver similares"](<B2C-40 WEB Evidencias/TC-40-sku-prods-similares-035129-con-stock.png>)

---

### TC-40-D-011 - Agregar producto similar desde el modal muestra bloque 'En carro X un.' con controles dentro del modal

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

Storefront Unimarc activo en Desktop 1440×900. Modal 'Ver similares' abierto (sidebar derecho) con productos similares disponibles. Einstein Recommendations activo. User type: Guest.

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {DIRECCION_DESPACHO_003} = TBD
- {SKU_PRODS_SIMILARES} = 000000000000628239-UN

**Pasos ejecutados**

1. Abrir el modal 'Ver similares' con productos disponibles en Desktop 1440×900.
2. Hacer clic en el botón 'Agregar' de uno de los productos similares.
3. Verificar que el botón 'Agregar' se reemplaza por el bloque 'En carro X un.' con controles de cantidad (−/+) dentro del modal.
4. Verificar que los demás productos similares en el listado siguen siendo navegables.
5. Hacer clic en otro producto similar para confirmar que el listado sigue activo.

**Resultado esperado**

Al hacer clic en 'Agregar', el producto muestra el bloque 'En carro X un.' con controles de cantidad dentro del modal. Los demás productos similares permanecen navegables en el listado.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra "Agregar" y no "Ver similares", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16). Acción: declarar un SKU sin stock que muestre "Ver similares" (y la dirección o tienda donde no tiene stock).

**Evidencia**

![{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, "Agregar" y sin "Ver similares"](<B2C-40 WEB Evidencias/TC-40-sku-prods-similares-035129-con-stock.png>)

---

### TC-40-D-012 - Producto seleccionado en el modal NO se agrega al carro hasta que se presiona 'Reemplazar productos'

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

Storefront Unimarc activo en Desktop 1440×900. Modal 'Ver similares' abierto (sidebar derecho) con productos similares disponibles. Einstein Recommendations activo. User type: Guest.

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {DIRECCION_DESPACHO_003} = TBD
- {SKU_PRODS_SIMILARES} = 000000000000628239-UN

**Pasos ejecutados**

1. Abrir el modal 'Ver similares' en Desktop 1440×900.
2. Hacer clic en 'Agregar' en un producto similar — aparece 'En carro X un.'.
3. Sin hacer clic en 'Reemplazar productos', verificar el contador del carro en el header.
4. Confirmar que el contador del carro NO refleja el producto seleccionado en el modal.
5. Abrir el carro y verificar que el producto similar NO aparece en él.

**Resultado esperado**

El producto seleccionado dentro del modal (con 'En carro X un.' visible) NO se añade al carro hasta que el usuario presione 'Reemplazar productos'. El contador del carro permanece sin cambios.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra "Agregar" y no "Ver similares", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16). Acción: declarar un SKU sin stock que muestre "Ver similares" (y la dirección o tienda donde no tiene stock).

**Evidencia**

![{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, "Agregar" y sin "Ver similares"](<B2C-40 WEB Evidencias/TC-40-sku-prods-similares-035129-con-stock.png>)

---

### TC-40-D-013 - Reemplazar productos' desde contexto navegación agrega similares al carro, cierra modal y actualiza contador

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

Storefront Unimarc activo en Desktop 1440×900. Modal 'Ver similares' abierto (sidebar derecho) con productos similares disponibles. Einstein Recommendations activo. User type: Guest.

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {SKU_PRODS_SIMILARES} = 000000000000628239-UN
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {COMPRADOR_USER} = 11.223.344-K
- {COMPRADOR_PASSWORD} = Avatar1234.

**Pasos ejecutados**

1. Abrir el modal 'Ver similares' desde un shelf en Desktop 1440×900.
2. Hacer clic en 'Agregar' en al menos un producto similar.
3. Hacer clic en el botón 'Reemplazar productos'.
4. Verificar que el modal se cierra.
5. Verificar que el contador del carro en el header refleja el producto agregado.
6. Acceder al carro y confirmar que el producto similar está presente.

**Resultado esperado**

Al confirmar con 'Reemplazar productos', el producto similar se agrega al carro, el modal se cierra y el contador del carro se actualiza correctamente. El producto aparece en el carro.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra "Agregar" y no "Ver similares", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16). Acción: declarar un SKU sin stock que muestre "Ver similares" (y la dirección o tienda donde no tiene stock).

**Evidencia**

![{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, "Agregar" y sin "Ver similares"](<B2C-40 WEB Evidencias/TC-40-sku-prods-similares-035129-con-stock.png>)

---

### TC-40-D-014 - Reemplazar productos' desde carro agrega similar a disponibles, elimina original de no disponibles y recalcula totales

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

Storefront Unimarc activo en Desktop 1440×900. Modal 'Ver similares' abierto desde el carro (sidebar derecho), con productos similares disponibles. Usuario registrado logueado.

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {SKU_PRODS_SIMILARES} = 000000000000628239-UN
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {COMPRADOR_USER} = 11.223.344-K
- {COMPRADOR_PASSWORD} = Avatar1234.

**Pasos ejecutados**

1. Abrir el modal 'Ver similares' desde la sección no disponibles del carro, usuario logueado, Desktop 1440×900.
2. Seleccionar un producto similar (clic en 'Agregar').
3. Hacer clic en 'Reemplazar productos'.
4. Verificar que el modal se cierra.
5. Verificar que el producto similar aparece en la sección de productos disponibles del carro.
6. Verificar que el producto no disponible original ha sido eliminado de la sección de no disponibles.
7. Verificar que el resumen de precios y el total del carro se recalculan.

**Resultado esperado**

El producto similar queda en la sección de disponibles. El producto no disponible original es eliminado de la sección de no disponibles. El resumen de precios y el total del carro se recalculan correctamente. El modal se cierra.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: el caso necesita el carro de {COMPRADOR_USER} con un producto no disponible, y el único producto que declara, {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra "Agregar" y no "Ver similares", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16), así que no hay producto no disponible que dejar en el carro. Acción: declarar un SKU sin stock para la dirección o tienda de {COMPRADOR_USER} y cargarlo en su carro.

**Evidencia**

![{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, "Agregar" y sin "Ver similares"](<B2C-40 WEB Evidencias/TC-40-sku-prods-similares-035129-con-stock.png>)

---

### TC-40-D-015 - Reemplazo parcial — similar no cubre la cantidad total faltante; original permanece con cantidad restante y totales se recalculan

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

Storefront Unimarc activo en Desktop 1440×900. Modal 'Ver similares' abierto desde el carro (sidebar derecho), con productos similares disponibles. Usuario registrado logueado.

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {SKU_PRODS_SIMILARES} = 000000000000628239-UN
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {UNIDADES_CARRITO_INICIAL_2} = 2
- {COMPRADOR_USER} = 11.223.344-K
- {COMPRADOR_PASSWORD} = Avatar1234.

**Pasos ejecutados**

1. Abrir el modal desde el carro con un producto no disponible que tenía cantidad > 1, usuario logueado, Desktop 1440×900.
2. Seleccionar un producto similar con cantidad menor a la del producto original no disponible.
3. Hacer clic en 'Reemplazar productos'.
4. Verificar que el modal se cierra.
5. Verificar que el producto similar se agrega al carro con la cantidad seleccionada.
6. Verificar que el producto no disponible original permanece en la sección de no disponibles con la cantidad restante no cubierta (ajustada).
7. Verificar que el resumen de precios y el total del carro se recalculan.

**Resultado esperado**

El producto similar se agrega con la cantidad seleccionada. El producto original permanece en no disponibles con la cantidad restante ajustada. Los totales del carro se recalculan reflejando el estado parcial del reemplazo.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: el caso necesita el carro de {COMPRADOR_USER} con un producto no disponible, y el único producto que declara, {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra "Agregar" y no "Ver similares", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16), así que no hay producto no disponible que dejar en el carro. Acción: declarar un SKU sin stock para la dirección o tienda de {COMPRADOR_USER} y cargarlo en su carro.

**Evidencia**

![{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, "Agregar" y sin "Ver similares"](<B2C-40 WEB Evidencias/TC-40-sku-prods-similares-035129-con-stock.png>)

---

### TC-40-D-016 - Cerrar el modal con el botón X descarta la selección y deja el carro sin cambios

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

Storefront Unimarc activo en Desktop 1440×900. Modal 'Ver similares' abierto (sidebar derecho) con productos similares disponibles. Einstein Recommendations activo. User type: Guest.

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {SKU_PRODS_SIMILARES} = 000000000000628239-UN

**Pasos ejecutados**

1. Abrir el modal 'Ver similares' en Desktop 1440×900.
2. Hacer clic en 'Agregar' en al menos un producto similar ('En carro X un.' visible dentro del modal).
3. Hacer clic en el botón cerrar (X) del header del modal.
4. Verificar que el modal se cierra.
5. Verificar que el contador del carro NO cambió.
6. Verificar que el usuario vuelve a la página/contexto donde estaba.
7. Abrir el carro y confirmar que el producto similar NO fue agregado.

**Resultado esperado**

Al cerrar con X, el modal se cierra y ninguna selección queda guardada. El carro permanece sin cambios. El usuario vuelve al contexto de donde abrió el modal.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra "Agregar" y no "Ver similares", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16). Acción: declarar un SKU sin stock que muestre "Ver similares" (y la dirección o tienda donde no tiene stock).

**Evidencia**

![{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, "Agregar" y sin "Ver similares"](<B2C-40 WEB Evidencias/TC-40-sku-prods-similares-035129-con-stock.png>)

---

### TC-40-D-017 - Clic fuera del área del modal (overlay) cierra el modal sin guardar selección y sin cambios en el carro

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

Storefront Unimarc activo en Desktop 1440×900. Modal 'Ver similares' abierto (sidebar derecho) con productos similares disponibles. Einstein Recommendations activo. User type: Guest.

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {SKU_PRODS_SIMILARES} = 000000000000628239-UN

**Pasos ejecutados**

1. Abrir el modal 'Ver similares' en Desktop 1440×900.
2. Hacer clic en 'Agregar' en un producto similar dentro del modal.
3. Hacer clic fuera del área del modal, sobre el overlay de la página.
4. Verificar que el modal se cierra.
5. Verificar que el contador del carro NO cambió.
6. Confirmar que el usuario vuelve al contexto donde estaba.
7. Verificar que el producto similar NO fue agregado al carro.

**Resultado esperado**

El clic en el overlay fuera del modal lo cierra sin guardar la selección. El carro permanece sin cambios. El usuario regresa al contexto de navegación previo.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra "Agregar" y no "Ver similares", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16). Acción: declarar un SKU sin stock que muestre "Ver similares" (y la dirección o tienda donde no tiene stock).

**Evidencia**

![{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, "Agregar" y sin "Ver similares"](<B2C-40 WEB Evidencias/TC-40-sku-prods-similares-035129-con-stock.png>)

---

### TC-40-M-002 - Tap en 'Ver similares' desde PDP de producto sin stock abre el modal

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

Storefront Unimarc activo en Mobile 390×844. Al menos un producto sin stock visible en el contexto de prueba con el botón 'Ver similares' habilitado. Einstein Recommendations activo con recommender Product to Product configurado. User type: Guest.

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {SKU_PRODS_SIMILARES} = 000000000000628239-UN

**Pasos ejecutados**

1. Navegar al Home con viewport Mobile 390×844.
2. Acceder a la PDP de un producto sin stock con botón 'Ver similares' visible.
3. Hacer tap en 'Ver similares'.
4. Verificar que el modal se abre como bottom sheet desde abajo.
5. Confirmar que la PDP permanece visible detrás del bottom sheet.

**Resultado esperado**

El modal se abre como bottom sheet desde la PDP en Mobile. La PDP permanece visible en el fondo.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra "Agregar" y no "Ver similares", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16). Acción: declarar un SKU sin stock que muestre "Ver similares" (y la dirección o tienda donde no tiene stock).

**Evidencia**

![{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, "Agregar" y sin "Ver similares"](<B2C-40 WEB Evidencias/TC-40-sku-prods-similares-035129-con-stock.png>)

---

### TC-40-M-003 - Tap en 'Ver similares' desde Carro (usuario logueado) abre el modal

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

Storefront Unimarc activo en Mobile 390×844. Al menos un producto sin stock visible con botón 'Ver similares'. Einstein Recommendations activo. Usuario registrado logueado con credenciales válidas.

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {SKU_PRODS_SIMILARES} = 000000000000628239-UN
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {COMPRADOR_USER} = 11.223.344-K
- {COMPRADOR_PASSWORD} = Avatar1234.

**Pasos ejecutados**

1. Navegar al Home con viewport Mobile 390×844, usuario logueado.
2. Acceder al carro con al menos un producto no disponible.
3. Localizar el botón 'Ver similares' en la sección de no disponibles.
4. Hacer tap en 'Ver similares'.
5. Verificar que el modal se abre como bottom sheet.
6. Confirmar que corresponde al producto no disponible seleccionado.

**Resultado esperado**

El modal de productos similares se abre como bottom sheet desde el carro en Mobile.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: el caso necesita el carro de {COMPRADOR_USER} con un producto no disponible, y el único producto que declara, {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra "Agregar" y no "Ver similares", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16), así que no hay producto no disponible que dejar en el carro. Acción: declarar un SKU sin stock para la dirección o tienda de {COMPRADOR_USER} y cargarlo en su carro.

**Evidencia**

![{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, "Agregar" y sin "Ver similares"](<B2C-40 WEB Evidencias/TC-40-sku-prods-similares-035129-con-stock.png>)

---

### TC-40-M-004 - Tap en 'Ver similares' desde Minicarro (usuario logueado) abre el modal

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

Storefront Unimarc activo en Mobile 390×844. Al menos un producto sin stock visible con botón 'Ver similares'. Einstein Recommendations activo. Usuario registrado logueado con credenciales válidas.

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {SKU_PRODS_SIMILARES} = 000000000000628239-UN
- {COMPRADOR_USER} = 11.223.344-K
- {COMPRADOR_PASSWORD} = Avatar1234.

**Pasos ejecutados**

1. Navegar al Home con viewport Mobile 390×844, usuario logueado.
2. Abrir el minicarro (tap en el ícono del carro).
3. En la sección de no disponibles, localizar el botón 'Ver similares'.
4. Hacer tap en 'Ver similares'.
5. Verificar que el modal se abre como bottom sheet.

**Resultado esperado**

El modal se abre como bottom sheet desde el minicarro en Mobile. Funciona correctamente para usuarios logueados.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: el caso necesita el carro de {COMPRADOR_USER} con un producto no disponible, y el único producto que declara, {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra "Agregar" y no "Ver similares", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16), así que no hay producto no disponible que dejar en el carro. Acción: declarar un SKU sin stock para la dirección o tienda de {COMPRADOR_USER} y cargarlo en su carro.

**Evidencia**

![{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, "Agregar" y sin "Ver similares"](<B2C-40 WEB Evidencias/TC-40-sku-prods-similares-035129-con-stock.png>)

---

### TC-40-M-005 - Modal 'Ver similares' se presenta como bottom sheet deslizable desde abajo

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

Storefront Unimarc activo en Mobile 390×844. Al menos un producto sin stock visible en el contexto de prueba con el botón 'Ver similares' habilitado. Einstein Recommendations activo con recommender Product to Product configurado. User type: Guest.

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {SKU_PRODS_SIMILARES} = 000000000000628239-UN

**Pasos ejecutados**

1. Navegar al Home con viewport Mobile 390×844.
2. Hacer tap en 'Ver similares' desde un producto sin stock.
3. Verificar que el modal se presenta deslizando desde abajo (bottom sheet).
4. Verificar que el bottom sheet no ocupa la pantalla completa (la página de fondo es parcialmente visible).
5. Verificar que el bottom sheet es deslizable (se puede subir o bajar).

**Resultado esperado**

El modal se presenta como bottom sheet deslizando desde abajo en Mobile. La página de fondo es parcialmente visible. El bottom sheet es deslizable.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra "Agregar" y no "Ver similares", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16). Acción: declarar un SKU sin stock que muestre "Ver similares" (y la dirección o tienda donde no tiene stock).

**Evidencia**

![{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, "Agregar" y sin "Ver similares"](<B2C-40 WEB Evidencias/TC-40-sku-prods-similares-035129-con-stock.png>)

---

### TC-40-M-006 - Modal muestra todos los elementos estructurales requeridos (header, referencia producto, lista similares, botón Reemplazar fijo)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

Storefront Unimarc activo en Mobile 390×844. Modal 'Ver similares' abierto (bottom sheet) con productos similares disponibles. Einstein Recommendations activo. User type: Guest.

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {SKU_PRODS_SIMILARES} = 000000000000628239-UN

**Pasos ejecutados**

1. Abrir el modal 'Ver similares' desde un producto sin stock en Mobile 390×844.
2. Verificar header: título 'Productos similares' y botón cerrar (X).
3. Verificar referencia al producto original sin stock (imagen miniatura + nombre).
4. Verificar lista de similares en shelf simplificada: imagen, marca|nombre, precios y botón 'Agregar'.
5. Verificar que el botón 'Reemplazar producto' está fijo en la parte inferior.
6. Desplazarse en el modal y confirmar que el botón permanece fijo.

**Resultado esperado**

El modal Mobile muestra todos los elementos: header con título y X, referencia producto original, lista de similares con shelf simplificada y botón 'Reemplazar producto' fijo en la parte inferior.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra "Agregar" y no "Ver similares", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16). Acción: declarar un SKU sin stock que muestre "Ver similares" (y la dirección o tienda donde no tiene stock).

**Evidencia**

![{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, "Agregar" y sin "Ver similares"](<B2C-40 WEB Evidencias/TC-40-sku-prods-similares-035129-con-stock.png>)

---

### TC-40-M-007 - Al abrir el modal se muestra skeleton/loader mientras Einstein Recommendations carga los similares

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

Storefront Unimarc activo en Mobile 390×844. Al menos un producto sin stock visible en el contexto de prueba con el botón 'Ver similares' habilitado. Einstein Recommendations activo con recommender Product to Product configurado. User type: Guest.

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {SKU_PRODS_SIMILARES} = 000000000000628239-UN

**Pasos ejecutados**

1. Navegar a una página con un producto sin stock en Mobile 390×844.
2. Hacer tap en 'Ver similares'.
3. Observar el estado del bottom sheet al abrirse.
4. Verificar que se muestra un skeleton o loader mientras carga Einstein.
5. Esperar la carga completa y verificar que el skeleton es reemplazado por el contenido real.

**Resultado esperado**

Al abrir el modal Mobile, el skeleton/loader es visible durante la carga. Una vez completada, el skeleton es reemplazado por el contenido real.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra "Agregar" y no "Ver similares", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16). Acción: declarar un SKU sin stock que muestre "Ver similares" (y la dirección o tienda donde no tiene stock).

**Evidencia**

![{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, "Agregar" y sin "Ver similares"](<B2C-40 WEB Evidencias/TC-40-sku-prods-similares-035129-con-stock.png>)

---

### TC-40-M-008 - Modal muestra productos similares disponibles filtrados por método de entrega; excluye similares sin stock

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

Storefront Unimarc activo en Mobile 390×844. Modal 'Ver similares' abierto (bottom sheet) con productos similares disponibles. Einstein Recommendations activo. User type: Guest.

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {SKU_PRODS_SIMILARES} = 000000000000628239-UN

**Pasos ejecutados**

1. Con método de entrega activo, abrir el modal 'Ver similares' en Mobile 390×844.
2. Esperar que carguen los productos similares.
3. Verificar que los productos listados están disponibles para el método de entrega activo.
4. Verificar que los precios son vigentes.
5. Confirmar que ningún similar sin stock aparece en el listado.

**Resultado esperado**

El modal Mobile muestra solo similares disponibles para el método de entrega activo, con precios vigentes. Los sin stock están excluidos.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra "Agregar" y no "Ver similares", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16). Acción: declarar un SKU sin stock que muestre "Ver similares" (y la dirección o tienda donde no tiene stock).

**Evidencia**

![{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, "Agregar" y sin "Ver similares"](<B2C-40 WEB Evidencias/TC-40-sku-prods-similares-035129-con-stock.png>)

---

### TC-40-M-009 - (sin nombre en la planilla)

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

Storefront Unimarc activo en Mobile 390×844. Producto sin stock cuyo Product ID no tiene similares en Einstein Recommendations. User type: Guest.

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {SKU_SIN_SIMILARES} = 000000000000675191-UN

**Pasos ejecutados**

1. Hacer tap en 'Ver similares' de un producto sin similares en Einstein, Mobile 390×844.
2. Esperar que cargue el modal.
3. Verificar imagen del estado vacío.
4. Verificar mensaje '¡Ups! Lo sentimos. El producto que buscamos no tiene otros similares'.
5. Verificar código NAV015.
6. Hacer tap en 'Entendido' y verificar que el modal se cierra.

**Resultado esperado**

El modal Mobile muestra: imagen, mensaje de estado vacío, NAV015 y botón 'Entendido' que cierra el modal.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: la fila declara {SKU_SIN_SIMILARES} = 000000000000675191-UN pero no una dirección; sin método de entrega el SKU tiene stock ("Agregar"). Además, con {DIRECCION_DESPACHO_003} (que declara D-009) Einstein le devuelve 6 similares, así que tampoco cumple "sin similares". Acción: declarar un SKU sin stock sin similares en Einstein y la dirección donde no tiene stock. Nota: la fila no tiene nombre.

**Evidencia**

![{SKU_SIN_SIMILARES} 675191 con {DIRECCION_DESPACHO_003}: "Pronto disponible" y "Ver similares"](<B2C-40 WEB Evidencias/TC-40-sku-sin-similares-675191-sin-stock-lo-barnechea.png>)

![Modal "Productos similares" de 675191: Einstein devuelve 6 similares](<B2C-40 WEB Evidencias/TC-40-D-009-p02-modal-con-6-similares.png>)

---

### TC-40-M-010 - Error o timeout en Einstein muestra estado de error con imagen, mensaje, error NAV016 y botón 'Entendido'

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

Storefront Unimarc activo en Mobile 390×844. Condición de error o timeout simulable en el servicio de Einstein Recommendations. User type: Guest.

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {SKU_PRODS_SIMILARES} = 000000000000628239-UN

**Pasos ejecutados**

1. Simular condición de error en Einstein Recommendations.
2. Hacer tap en 'Ver similares' de un producto sin stock en Mobile 390×844.
3. Verificar imagen del estado de error.
4. Verificar mensaje '¡Ups! Lo sentimos. El producto que buscas no tiene otros similares'.
5. Verificar código NAV016.
6. Hacer tap en 'Entendido' y verificar que el modal se cierra.

**Resultado esperado**

El modal Mobile muestra el estado de error con: imagen, mensaje, NAV016 y botón 'Entendido' funcional.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra "Agregar" y no "Ver similares", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16). Acción: declarar un SKU sin stock que muestre "Ver similares" (y la dirección o tienda donde no tiene stock). La simulación del error de Einstein se puede hacer interceptando la llamada a product-to-product-einstein.

**Evidencia**

![{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, "Agregar" y sin "Ver similares"](<B2C-40 WEB Evidencias/TC-40-sku-prods-similares-035129-con-stock.png>)

---

### TC-40-M-011 - Tap en 'Agregar' en producto similar muestra bloque 'En carro X un.' dentro del modal

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

Storefront Unimarc activo en Mobile 390×844. Modal 'Ver similares' abierto (bottom sheet) con productos similares disponibles. Einstein Recommendations activo. User type: Guest.

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {SKU_PRODS_SIMILARES} = 000000000000628239-UN

**Pasos ejecutados**

1. Abrir el modal 'Ver similares' en Mobile 390×844.
2. Hacer tap en 'Agregar' en un producto similar.
3. Verificar que aparece el bloque 'En carro X un.' con controles (−/+) dentro del modal.
4. Verificar que los demás productos similares siguen siendo visibles y accesibles.

**Resultado esperado**

El bloque 'En carro X un.' con controles aparece dentro del modal Mobile. Los demás similares permanecen accesibles.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra "Agregar" y no "Ver similares", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16). Acción: declarar un SKU sin stock que muestre "Ver similares" (y la dirección o tienda donde no tiene stock).

**Evidencia**

![{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, "Agregar" y sin "Ver similares"](<B2C-40 WEB Evidencias/TC-40-sku-prods-similares-035129-con-stock.png>)

---

### TC-40-M-012 - Producto seleccionado en modal NO se agrega al carro hasta confirmar con 'Reemplazar productos'

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

Storefront Unimarc activo en Mobile 390×844. Modal 'Ver similares' abierto (bottom sheet) con productos similares disponibles. Einstein Recommendations activo. User type: Guest.

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {SKU_PRODS_SIMILARES} = 000000000000628239-UN

**Pasos ejecutados**

1. Abrir el modal 'Ver similares' en Mobile 390×844.
2. Hacer tap en 'Agregar' en un similar — aparece 'En carro X un.'.
3. Sin confirmar, verificar el contador del carro.
4. Confirmar que el contador NO cambió.
5. Cerrar el modal y abrir el carro para verificar que el similar NO fue agregado.

**Resultado esperado**

El producto seleccionado NO se agrega al carro hasta confirmar. El contador del carro permanece sin cambios.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra "Agregar" y no "Ver similares", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16). Acción: declarar un SKU sin stock que muestre "Ver similares" (y la dirección o tienda donde no tiene stock).

**Evidencia**

![{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, "Agregar" y sin "Ver similares"](<B2C-40 WEB Evidencias/TC-40-sku-prods-similares-035129-con-stock.png>)

---

### TC-40-M-013 - Reemplazar productos' desde contexto navegación agrega similares al carro, cierra modal y actualiza contador

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

Storefront Unimarc activo en Mobile 390×844. Modal 'Ver similares' abierto (bottom sheet) con productos similares disponibles. Einstein Recommendations activo. User type: Guest.

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {SKU_PRODS_SIMILARES} = 000000000000628239-UN
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {COMPRADOR_USER} = 11.223.344-K
- {COMPRADOR_PASSWORD} = Avatar1234.

**Pasos ejecutados**

1. Abrir el modal 'Ver similares' desde un shelf en Mobile 390×844.
2. Hacer tap en 'Agregar' en un similar.
3. Hacer tap en 'Reemplazar productos'.
4. Verificar que el modal se cierra.
5. Verificar que el contador del carro se actualiza.
6. Abrir el carro y confirmar que el similar está presente.

**Resultado esperado**

El similar se agrega al carro, el modal se cierra y el contador se actualiza. El producto aparece en el carro.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra "Agregar" y no "Ver similares", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16). Acción: declarar un SKU sin stock que muestre "Ver similares" (y la dirección o tienda donde no tiene stock).

**Evidencia**

![{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, "Agregar" y sin "Ver similares"](<B2C-40 WEB Evidencias/TC-40-sku-prods-similares-035129-con-stock.png>)

---

### TC-40-M-014 - Reemplazar productos' desde carro agrega similar a disponibles, elimina original de no disponibles y recalcula totales

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

Storefront Unimarc activo en Mobile 390×844. Modal 'Ver similares' abierto desde el carro (bottom sheet), con productos similares disponibles. Usuario registrado logueado.

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {SKU_PRODS_SIMILARES} = 000000000000628239-UN
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {COMPRADOR_USER} = 11.223.344-K
- {COMPRADOR_PASSWORD} = Avatar1234.

**Pasos ejecutados**

1. Abrir el modal desde la sección no disponibles del carro, usuario logueado, Mobile 390×844.
2. Seleccionar un similar.
3. Hacer tap en 'Reemplazar productos'.
4. Verificar que el modal se cierra.
5. Verificar que el similar está en la sección de disponibles.
6. Verificar que el original fue eliminado de la sección de no disponibles.
7. Verificar que los totales del carro se recalculan.

**Resultado esperado**

El similar queda en disponibles, el original se elimina de no disponibles y los totales se recalculan. El modal se cierra.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: el caso necesita el carro de {COMPRADOR_USER} con un producto no disponible, y el único producto que declara, {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra "Agregar" y no "Ver similares", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16), así que no hay producto no disponible que dejar en el carro. Acción: declarar un SKU sin stock para la dirección o tienda de {COMPRADOR_USER} y cargarlo en su carro.

**Evidencia**

![{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, "Agregar" y sin "Ver similares"](<B2C-40 WEB Evidencias/TC-40-sku-prods-similares-035129-con-stock.png>)

---

### TC-40-M-015 - Reemplazo parcial — similar no cubre cantidad total; original permanece con cantidad restante y totales se recalculan

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

Storefront Unimarc activo en Mobile 390×844. Modal 'Ver similares' abierto desde el carro (bottom sheet), con productos similares disponibles. Usuario registrado logueado.

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {SKU_PRODS_SIMILARES} = 000000000000628239-UN
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {UNIDADES_CARRITO_INICIAL_2} = 2
- {COMPRADOR_USER} = 11.223.344-K
- {COMPRADOR_PASSWORD} = Avatar1234.

**Pasos ejecutados**

1. Abrir el modal desde el carro con producto no disponible de cantidad > 1, usuario logueado, Mobile 390×844.
2. Seleccionar un similar con cantidad menor a la del original.
3. Hacer tap en 'Reemplazar productos'.
4. Verificar que el similar se agrega con la cantidad seleccionada.
5. Verificar que el original permanece en no disponibles con la cantidad restante.
6. Verificar que los totales se recalculan.

**Resultado esperado**

El similar se agrega con la cantidad seleccionada. El original permanece con la cantidad restante ajustada. Los totales se recalculan.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: el caso necesita el carro de {COMPRADOR_USER} con un producto no disponible, y el único producto que declara, {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra "Agregar" y no "Ver similares", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16), así que no hay producto no disponible que dejar en el carro. Acción: declarar un SKU sin stock para la dirección o tienda de {COMPRADOR_USER} y cargarlo en su carro.

**Evidencia**

![{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, "Agregar" y sin "Ver similares"](<B2C-40 WEB Evidencias/TC-40-sku-prods-similares-035129-con-stock.png>)

---

### TC-40-M-016 - Cerrar el modal con botón X descarta la selección y deja el carro sin cambios

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

Storefront Unimarc activo en Mobile 390×844. Modal 'Ver similares' abierto (bottom sheet) con productos similares disponibles. Einstein Recommendations activo. User type: Guest.

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {SKU_PRODS_SIMILARES} = 000000000000628239-UN

**Pasos ejecutados**

1. Abrir el modal 'Ver similares' en Mobile 390×844.
2. Hacer tap en 'Agregar' en un similar.
3. Hacer tap en el botón X del header.
4. Verificar que el modal se cierra.
5. Verificar que el contador del carro NO cambió.
6. Confirmar que el usuario vuelve al contexto previo.

**Resultado esperado**

Al cerrar con X en Mobile, el modal se cierra, la selección se descarta y el carro permanece sin cambios.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra "Agregar" y no "Ver similares", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16). Acción: declarar un SKU sin stock que muestre "Ver similares" (y la dirección o tienda donde no tiene stock).

**Evidencia**

![{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, "Agregar" y sin "Ver similares"](<B2C-40 WEB Evidencias/TC-40-sku-prods-similares-035129-con-stock.png>)

---

### TC-40-M-017 - Deslizar el bottom sheet hacia abajo cierra el modal sin guardar selección y sin cambios en el carro

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

Storefront Unimarc activo en Mobile 390×844. Modal 'Ver similares' abierto (bottom sheet) con productos similares disponibles. Einstein Recommendations activo. User type: Guest.

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {SKU_PRODS_SIMILARES} = 000000000000628239-UN

**Pasos ejecutados**

1. Abrir el modal 'Ver similares' en Mobile 390×844.
2. Hacer tap en 'Agregar' en un similar.
3. Deslizar el bottom sheet hacia abajo (gesto de swipe down).
4. Verificar que el modal se cierra con la animación de descenso.
5. Verificar que el contador del carro NO cambió.
6. Confirmar que el usuario vuelve al contexto donde estaba.

**Resultado esperado**

El deslizamiento hacia abajo cierra el bottom sheet. La selección se descarta y el carro permanece sin cambios. El usuario regresa al contexto previo.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra "Agregar" y no "Ver similares", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16). Acción: declarar un SKU sin stock que muestre "Ver similares" (y la dirección o tienda donde no tiene stock).

**Evidencia**

![{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, "Agregar" y sin "Ver similares"](<B2C-40 WEB Evidencias/TC-40-sku-prods-similares-035129-con-stock.png>)

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
  "suite": "B2C-40 WEB",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP1/B2C-40 WEB Test Cases.xlsx",
  "title": "B2C-40 WEB - Modal Ver similares - Evidencias QA",
  "updated_at": "2026-11-16"
 },
 "history": {
  "2026-11-16": [
   "TC-40-D-002",
   "TC-40-D-003",
   "TC-40-D-004",
   "TC-40-D-005",
   "TC-40-D-006",
   "TC-40-D-007",
   "TC-40-D-008",
   "TC-40-D-009",
   "TC-40-D-010",
   "TC-40-D-011",
   "TC-40-D-012",
   "TC-40-D-013",
   "TC-40-D-014",
   "TC-40-D-015",
   "TC-40-D-016",
   "TC-40-D-017",
   "TC-40-M-002",
   "TC-40-M-003",
   "TC-40-M-004",
   "TC-40-M-005",
   "TC-40-M-006",
   "TC-40-M-007",
   "TC-40-M-008",
   "TC-40-M-009",
   "TC-40-M-010",
   "TC-40-M-011",
   "TC-40-M-012",
   "TC-40-M-013",
   "TC-40-M-014",
   "TC-40-M-015",
   "TC-40-M-016",
   "TC-40-M-017"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-11-16",
   "expected": "El modal de productos similares se abre como sidebar derecho desde la PDP. La PDP permanece en el fondo mientras el modal está activo.",
   "form_factor": "desktop",
   "id": "TC-40-D-002",
   "name": "Clic en 'Ver similares' desde la PDP de un producto sin stock abre el modal",
   "observation": "Causa: {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra \"Agregar\" y no \"Ver similares\", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16). Acción: declarar un SKU sin stock que muestre \"Ver similares\" (y la dirección o tienda donde no tiene stock).",
   "observed": "No ejecutado.",
   "preconditions": "Storefront Unimarc activo en Desktop 1440x900. Al menos un producto sin stock visible en el contexto de prueba con el botón 'Ver similares' habilitado. Einstein Recommendations activo con recommender Product to Product configurado. User type: Guest.",
   "screenshots": [
    {
     "caption": "{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, \"Agregar\" y sin \"Ver similares\"",
     "file": "TC-40-sku-prods-similares-035129-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Navegar al Home con viewport Desktop 1440×900.\n2. Acceder a la PDP de un producto sin stock que muestre el botón 'Ver similares'.\n3. Localizar el botón 'Ver similares' en la PDP.\n4. Hacer clic en 'Ver similares'.\n5. Verificar que el modal de productos similares se abre como sidebar derecho.\n6. Confirmar que la PDP permanece visible detrás del modal.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {SKU_PRODS_SIMILARES} = 000000000000628239-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-16",
   "expected": "El modal de productos similares se abre correctamente desde el carro de compras. El modal corresponde al producto no disponible desde el cual se activó.",
   "form_factor": "desktop",
   "id": "TC-40-D-003",
   "name": "Clic en 'Ver similares' desde el Carro (usuario logueado) abre el modal",
   "observation": "Causa: el caso necesita el carro de {COMPRADOR_USER} con un producto no disponible, y el único producto que declara, {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra \"Agregar\" y no \"Ver similares\", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16), así que no hay producto no disponible que dejar en el carro. Acción: declarar un SKU sin stock para la dirección o tienda de {COMPRADOR_USER} y cargarlo en su carro.",
   "observed": "No ejecutado.",
   "preconditions": "Storefront Unimarc activo en Desktop 1440x900. Al menos un producto sin stock visible con botón 'Ver similares'. Einstein Recommendations activo. Usuario registrado logueado con credenciales válidas.",
   "screenshots": [
    {
     "caption": "{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, \"Agregar\" y sin \"Ver similares\"",
     "file": "TC-40-sku-prods-similares-035129-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Navegar al Home con viewport Desktop 1440×900 con usuario logueado.\n2. Acceder al carro de compras que contiene al menos un producto no disponible.\n3. En la sección de productos no disponibles, localizar el botón 'Ver similares'.\n4. Hacer clic en 'Ver similares'.\n5. Verificar que el modal de productos similares se abre como sidebar derecho.\n6. Confirmar que el modal corresponde al producto no disponible seleccionado.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {SKU_PRODS_SIMILARES} = 000000000000628239-UN\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {COMPRADOR_USER} = 11.223.344-K\n- {COMPRADOR_PASSWORD} = Avatar1234.",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-16",
   "expected": "El modal de productos similares se abre desde el minicarro. Funciona correctamente para usuarios logueados desde este punto de entrada.",
   "form_factor": "desktop",
   "id": "TC-40-D-004",
   "name": "Clic en 'Ver similares' desde el Minicarro (usuario logueado) abre el modal",
   "observation": "Causa: el caso necesita el carro de {COMPRADOR_USER} con un producto no disponible, y el único producto que declara, {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra \"Agregar\" y no \"Ver similares\", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16), así que no hay producto no disponible que dejar en el carro. Acción: declarar un SKU sin stock para la dirección o tienda de {COMPRADOR_USER} y cargarlo en su carro.",
   "observed": "No ejecutado.",
   "preconditions": "Storefront Unimarc activo en Desktop 1440x900. Al menos un producto sin stock visible con botón 'Ver similares'. Einstein Recommendations activo. Usuario registrado logueado con credenciales válidas.",
   "screenshots": [
    {
     "caption": "{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, \"Agregar\" y sin \"Ver similares\"",
     "file": "TC-40-sku-prods-similares-035129-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Navegar al Home con viewport Desktop 1440×900 con usuario logueado.\n2. Abrir el minicarro (dropdown del ícono de carro en el header).\n3. En la sección de productos no disponibles del minicarro, localizar el botón 'Ver similares'.\n4. Hacer clic en 'Ver similares'.\n5. Verificar que el modal se abre como sidebar derecho.\n6. Confirmar que el modal corresponde al producto no disponible seleccionado.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {SKU_PRODS_SIMILARES} = 000000000000628239-UN\n- {COMPRADOR_USER} = 11.223.344-K\n- {COMPRADOR_PASSWORD} = Avatar1234.",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-16",
   "expected": "El modal se presenta como sidebar lateral derecho tipo overlay en Desktop. La página de fondo permanece visible detrás del overlay. El sidebar tiene scroll interno si el contenido supera la altura visible.",
   "form_factor": "desktop",
   "id": "TC-40-D-005",
   "name": "Modal 'Ver similares' se presenta como sidebar lateral derecho (overlay)",
   "observation": "Causa: {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra \"Agregar\" y no \"Ver similares\", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16). Acción: declarar un SKU sin stock que muestre \"Ver similares\" (y la dirección o tienda donde no tiene stock).",
   "observed": "No ejecutado.",
   "preconditions": "Storefront Unimarc activo en Desktop 1440×900. Al menos un producto sin stock visible en el contexto de prueba con el botón 'Ver similares' habilitado. Einstein Recommendations activo con recommender Product to Product configurado. User type: Guest.",
   "screenshots": [
    {
     "caption": "{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, \"Agregar\" y sin \"Ver similares\"",
     "file": "TC-40-sku-prods-similares-035129-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Navegar al Home con viewport Desktop 1440×900.\n2. Navegar a una página con un producto sin stock y hacer clic en 'Ver similares'.\n3. Verificar que el modal aparece como un panel lateral en el lado derecho de la pantalla.\n4. Verificar que es un overlay: la página de fondo permanece visible (con oscurecimiento).\n5. Confirmar que el sidebar tiene scroll interno si el contenido lo requiere.\n6. Verificar que el modal NO ocupa toda la pantalla ni reemplaza el contenido.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {SKU_PRODS_SIMILARES} = 000000000000628239-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-16",
   "expected": "El modal muestra: header con título 'Productos similares' + botón X, referencia al producto original (miniatura + nombre), lista de similares en shelf simplificada (imagen, marca|nombre, precios, botón Agregar) y botón 'Reemplazar producto' fijo en la parte inferior.",
   "form_factor": "desktop",
   "id": "TC-40-D-006",
   "name": "Modal muestra todos los elementos estructurales requeridos (header, referencia producto, lista similares, botón Reemplazar fijo)",
   "observation": "Causa: {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra \"Agregar\" y no \"Ver similares\", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16). Acción: declarar un SKU sin stock que muestre \"Ver similares\" (y la dirección o tienda donde no tiene stock).",
   "observed": "No ejecutado.",
   "preconditions": "Storefront Unimarc activo en Desktop 1440×900. Modal 'Ver similares' abierto (sidebar derecho) con productos similares disponibles. Einstein Recommendations activo. User type: Guest.",
   "screenshots": [
    {
     "caption": "{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, \"Agregar\" y sin \"Ver similares\"",
     "file": "TC-40-sku-prods-similares-035129-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Abrir el modal 'Ver similares' desde un producto sin stock en Desktop.\n2. Verificar que el header muestra el título 'Productos similares' y el botón cerrar (X).\n3. Verificar que se muestra la referencia al producto original sin stock (imagen miniatura + nombre del producto).\n4. Verificar que se muestra la lista de productos similares en formato shelf simplificada, cada uno con: imagen, marca | nombre, sección de precios y botón 'Agregar'.\n5. Verificar que el botón 'Reemplazar producto' aparece fijo en la parte inferior del modal.\n6. Desplazar el scroll del modal hacia abajo y confirmar que el botón 'Reemplazar producto' permanece fijo.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {SKU_PRODS_SIMILARES} = 000000000000628239-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-16",
   "expected": "Al abrir el modal, se muestra un skeleton/loader mientras carga Einstein. Una vez completada la consulta, el skeleton es reemplazado por el contenido real. No queda skeleton visible junto al contenido final.",
   "form_factor": "desktop",
   "id": "TC-40-D-007",
   "name": "Al abrir el modal se muestra skeleton/loader mientras Einstein Recommendations carga los similares",
   "observation": "Causa: {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra \"Agregar\" y no \"Ver similares\", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16). Acción: declarar un SKU sin stock que muestre \"Ver similares\" (y la dirección o tienda donde no tiene stock).",
   "observed": "No ejecutado.",
   "preconditions": "Storefront Unimarc activo en Desktop 1440×900. Al menos un producto sin stock visible en el contexto de prueba con el botón 'Ver similares' habilitado. Einstein Recommendations activo con recommender Product to Product configurado. User type: Guest.",
   "screenshots": [
    {
     "caption": "{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, \"Agregar\" y sin \"Ver similares\"",
     "file": "TC-40-sku-prods-similares-035129-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Navegar a una página con un producto sin stock en Desktop 1440×900.\n2. Hacer clic en 'Ver similares'.\n3. Observar inmediatamente el estado del modal recién abierto.\n4. Verificar que se muestra un skeleton o loader representativo mientras Einstein Recommendations procesa la solicitud.\n5. Esperar a que complete la carga.\n6. Verificar que el skeleton es reemplazado por el contenido real (productos similares o estado vacío/error).",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {SKU_PRODS_SIMILARES} = 000000000000628239-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-16",
   "expected": "El modal muestra únicamente productos similares disponibles para el método de entrega activo, con precios vigentes. Los similares sin stock quedan excluidos del listado del modal.",
   "form_factor": "desktop",
   "id": "TC-40-D-008",
   "name": "Modal muestra productos similares disponibles filtrados por método de entrega activo; excluye similares sin stock",
   "observation": "Causa: {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra \"Agregar\" y no \"Ver similares\", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16). Acción: declarar un SKU sin stock que muestre \"Ver similares\" (y la dirección o tienda donde no tiene stock).",
   "observed": "No ejecutado.",
   "preconditions": "Storefront Unimarc activo en Desktop 1440×900. Modal 'Ver similares' abierto (sidebar derecho) con productos similares disponibles. Einstein Recommendations activo. User type: Guest.",
   "screenshots": [
    {
     "caption": "{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, \"Agregar\" y sin \"Ver similares\"",
     "file": "TC-40-sku-prods-similares-035129-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Con método de entrega activo en Desktop 1440×900, abrir el modal 'Ver similares' de un producto sin stock.\n2. Esperar a que carguen los productos similares.\n3. Verificar que los productos listados están disponibles para el método de entrega activo.\n4. Verificar que los precios mostrados son los vigentes.\n5. Confirmar que ningún producto similar sin stock aparece en el listado del modal.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {SKU_PRODS_SIMILARES} = 000000000000628239-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-16",
   "expected": "El modal muestra el estado vacío con: imagen, mensaje '¡Ups! Lo sentimos. El producto que buscamos no tiene otros similares', error NAV015 y botón 'Entendido' que cierra el modal correctamente.",
   "form_factor": "desktop",
   "id": "TC-40-D-009",
   "name": "Cuando Einstein no retorna similares, modal muestra estado vacío con imagen, mensaje, error NAV015 y botón 'Entendido'",
   "observation": "Causa: con {DIRECCION_DESPACHO_003} activa, {SKU_SIN_SIMILARES} = 000000000000675191-UN (Albóndigas Super Pollo 300 g) sí está sin stock y muestra \"Ver similares\", pero Einstein (product-to-product-einstein, HTTP 200) devuelve 6 similares (Salchicha San Jorge 20 un y 5 un, Chorizos La Crianza, Prietas La Preferida, Pechuga Super Pollo) y el modal los lista: no cumple la precondición \"sin similares en Einstein\". Acción: declarar un SKU sin stock para el que Einstein no devuelva similares.",
   "observed": "No ejecutado.",
   "preconditions": "Storefront Unimarc activo en Desktop 1440×900. Producto sin stock cuyo Product ID no tiene similares en Einstein Recommendations (recommender retorna lista vacía). User type: Guest.",
   "screenshots": [
    {
     "caption": "{SKU_SIN_SIMILARES} 675191 con {DIRECCION_DESPACHO_003}: \"Pronto disponible\" y \"Ver similares\"",
     "file": "TC-40-sku-sin-similares-675191-sin-stock-lo-barnechea.png"
    },
    {
     "caption": "Modal \"Productos similares\" de 675191: Einstein devuelve 6 similares",
     "file": "TC-40-D-009-p02-modal-con-6-similares.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Navegar a una página con un producto sin stock que no tenga similares en Einstein Recommendations, en Desktop 1440×900.\n2. Hacer clic en 'Ver similares'.\n3. Esperar a que el modal complete la carga.\n4. Verificar que se muestra la imagen del estado vacío.\n5. Verificar que aparece el mensaje '¡Ups! Lo sentimos. El producto que buscamos no tiene otros similares'.\n6. Verificar que se muestra el código de error NAV015.\n7. Hacer clic en el botón 'Entendido' y verificar que el modal se cierra.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {DIRECCION_DESPACHO_003} = TBD\n- {SKU_SIN_SIMILARES} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-16",
   "expected": "El modal muestra el estado de error con: imagen, mensaje de error, código NAV016 y botón 'Entendido' que cierra el modal.",
   "form_factor": "desktop",
   "id": "TC-40-D-010",
   "name": "Error o timeout en Einstein muestra estado de error con imagen, mensaje, error NAV016 y botón 'Entendido'",
   "observation": "Causa: {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra \"Agregar\" y no \"Ver similares\", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16). Acción: declarar un SKU sin stock que muestre \"Ver similares\" (y la dirección o tienda donde no tiene stock). La simulación del error de Einstein se puede hacer interceptando la llamada a product-to-product-einstein.",
   "observed": "No ejecutado.",
   "preconditions": "Storefront Unimarc activo en Desktop 1440×900. Condición de error o timeout simulable en el servicio de Einstein Recommendations (ej. tiempo de respuesta excedido o error de servidor). User type: Guest.",
   "screenshots": [
    {
     "caption": "{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, \"Agregar\" y sin \"Ver similares\"",
     "file": "TC-40-sku-prods-similares-035129-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Simular una condición de error o timeout en Einstein Recommendations.\n2. Navegar a una página con un producto sin stock en Desktop 1440×900.\n3. Hacer clic en 'Ver similares'.\n4. Verificar que se muestra la imagen del estado de error.\n5. Verificar el mensaje '¡Ups! Lo sentimos. El producto que buscas no tiene otros similares'.\n6. Verificar que se muestra el código de error NAV016.\n7. Hacer clic en el botón 'Entendido' y verificar que el modal se cierra.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {DIRECCION_DESPACHO_003} = TBD\n- {SKU_PRODS_SIMILARES} = 000000000000628239-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-16",
   "expected": "Al hacer clic en 'Agregar', el producto muestra el bloque 'En carro X un.' con controles de cantidad dentro del modal. Los demás productos similares permanecen navegables en el listado.",
   "form_factor": "desktop",
   "id": "TC-40-D-011",
   "name": "Agregar producto similar desde el modal muestra bloque 'En carro X un.' con controles dentro del modal",
   "observation": "Causa: {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra \"Agregar\" y no \"Ver similares\", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16). Acción: declarar un SKU sin stock que muestre \"Ver similares\" (y la dirección o tienda donde no tiene stock).",
   "observed": "No ejecutado.",
   "preconditions": "Storefront Unimarc activo en Desktop 1440×900. Modal 'Ver similares' abierto (sidebar derecho) con productos similares disponibles. Einstein Recommendations activo. User type: Guest.",
   "screenshots": [
    {
     "caption": "{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, \"Agregar\" y sin \"Ver similares\"",
     "file": "TC-40-sku-prods-similares-035129-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Abrir el modal 'Ver similares' con productos disponibles en Desktop 1440×900.\n2. Hacer clic en el botón 'Agregar' de uno de los productos similares.\n3. Verificar que el botón 'Agregar' se reemplaza por el bloque 'En carro X un.' con controles de cantidad (−/+) dentro del modal.\n4. Verificar que los demás productos similares en el listado siguen siendo navegables.\n5. Hacer clic en otro producto similar para confirmar que el listado sigue activo.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {DIRECCION_DESPACHO_003} = TBD\n- {SKU_PRODS_SIMILARES} = 000000000000628239-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-16",
   "expected": "El producto seleccionado dentro del modal (con 'En carro X un.' visible) NO se añade al carro hasta que el usuario presione 'Reemplazar productos'. El contador del carro permanece sin cambios.",
   "form_factor": "desktop",
   "id": "TC-40-D-012",
   "name": "Producto seleccionado en el modal NO se agrega al carro hasta que se presiona 'Reemplazar productos'",
   "observation": "Causa: {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra \"Agregar\" y no \"Ver similares\", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16). Acción: declarar un SKU sin stock que muestre \"Ver similares\" (y la dirección o tienda donde no tiene stock).",
   "observed": "No ejecutado.",
   "preconditions": "Storefront Unimarc activo en Desktop 1440×900. Modal 'Ver similares' abierto (sidebar derecho) con productos similares disponibles. Einstein Recommendations activo. User type: Guest.",
   "screenshots": [
    {
     "caption": "{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, \"Agregar\" y sin \"Ver similares\"",
     "file": "TC-40-sku-prods-similares-035129-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Abrir el modal 'Ver similares' en Desktop 1440×900.\n2. Hacer clic en 'Agregar' en un producto similar — aparece 'En carro X un.'.\n3. Sin hacer clic en 'Reemplazar productos', verificar el contador del carro en el header.\n4. Confirmar que el contador del carro NO refleja el producto seleccionado en el modal.\n5. Abrir el carro y verificar que el producto similar NO aparece en él.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {DIRECCION_DESPACHO_003} = TBD\n- {SKU_PRODS_SIMILARES} = 000000000000628239-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-16",
   "expected": "Al confirmar con 'Reemplazar productos', el producto similar se agrega al carro, el modal se cierra y el contador del carro se actualiza correctamente. El producto aparece en el carro.",
   "form_factor": "desktop",
   "id": "TC-40-D-013",
   "name": "Reemplazar productos' desde contexto navegación agrega similares al carro, cierra modal y actualiza contador",
   "observation": "Causa: {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra \"Agregar\" y no \"Ver similares\", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16). Acción: declarar un SKU sin stock que muestre \"Ver similares\" (y la dirección o tienda donde no tiene stock).",
   "observed": "No ejecutado.",
   "preconditions": "Storefront Unimarc activo en Desktop 1440×900. Modal 'Ver similares' abierto (sidebar derecho) con productos similares disponibles. Einstein Recommendations activo. User type: Guest.",
   "screenshots": [
    {
     "caption": "{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, \"Agregar\" y sin \"Ver similares\"",
     "file": "TC-40-sku-prods-similares-035129-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Abrir el modal 'Ver similares' desde un shelf en Desktop 1440×900.\n2. Hacer clic en 'Agregar' en al menos un producto similar.\n3. Hacer clic en el botón 'Reemplazar productos'.\n4. Verificar que el modal se cierra.\n5. Verificar que el contador del carro en el header refleja el producto agregado.\n6. Acceder al carro y confirmar que el producto similar está presente.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {SKU_PRODS_SIMILARES} = 000000000000628239-UN\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {COMPRADOR_USER} = 11.223.344-K\n- {COMPRADOR_PASSWORD} = Avatar1234.",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-16",
   "expected": "El producto similar queda en la sección de disponibles. El producto no disponible original es eliminado de la sección de no disponibles. El resumen de precios y el total del carro se recalculan correctamente. El modal se cierra.",
   "form_factor": "desktop",
   "id": "TC-40-D-014",
   "name": "Reemplazar productos' desde carro agrega similar a disponibles, elimina original de no disponibles y recalcula totales",
   "observation": "Causa: el caso necesita el carro de {COMPRADOR_USER} con un producto no disponible, y el único producto que declara, {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra \"Agregar\" y no \"Ver similares\", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16), así que no hay producto no disponible que dejar en el carro. Acción: declarar un SKU sin stock para la dirección o tienda de {COMPRADOR_USER} y cargarlo en su carro.",
   "observed": "No ejecutado.",
   "preconditions": "Storefront Unimarc activo en Desktop 1440×900. Modal 'Ver similares' abierto desde el carro (sidebar derecho), con productos similares disponibles. Usuario registrado logueado.",
   "screenshots": [
    {
     "caption": "{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, \"Agregar\" y sin \"Ver similares\"",
     "file": "TC-40-sku-prods-similares-035129-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Abrir el modal 'Ver similares' desde la sección no disponibles del carro, usuario logueado, Desktop 1440×900.\n2. Seleccionar un producto similar (clic en 'Agregar').\n3. Hacer clic en 'Reemplazar productos'.\n4. Verificar que el modal se cierra.\n5. Verificar que el producto similar aparece en la sección de productos disponibles del carro.\n6. Verificar que el producto no disponible original ha sido eliminado de la sección de no disponibles.\n7. Verificar que el resumen de precios y el total del carro se recalculan.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {SKU_PRODS_SIMILARES} = 000000000000628239-UN\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {COMPRADOR_USER} = 11.223.344-K\n- {COMPRADOR_PASSWORD} = Avatar1234.",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-16",
   "expected": "El producto similar se agrega con la cantidad seleccionada. El producto original permanece en no disponibles con la cantidad restante ajustada. Los totales del carro se recalculan reflejando el estado parcial del reemplazo.",
   "form_factor": "desktop",
   "id": "TC-40-D-015",
   "name": "Reemplazo parcial — similar no cubre la cantidad total faltante; original permanece con cantidad restante y totales se recalculan",
   "observation": "Causa: el caso necesita el carro de {COMPRADOR_USER} con un producto no disponible, y el único producto que declara, {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra \"Agregar\" y no \"Ver similares\", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16), así que no hay producto no disponible que dejar en el carro. Acción: declarar un SKU sin stock para la dirección o tienda de {COMPRADOR_USER} y cargarlo en su carro.",
   "observed": "No ejecutado.",
   "preconditions": "Storefront Unimarc activo en Desktop 1440×900. Modal 'Ver similares' abierto desde el carro (sidebar derecho), con productos similares disponibles. Usuario registrado logueado.",
   "screenshots": [
    {
     "caption": "{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, \"Agregar\" y sin \"Ver similares\"",
     "file": "TC-40-sku-prods-similares-035129-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Abrir el modal desde el carro con un producto no disponible que tenía cantidad > 1, usuario logueado, Desktop 1440×900.\n2. Seleccionar un producto similar con cantidad menor a la del producto original no disponible.\n3. Hacer clic en 'Reemplazar productos'.\n4. Verificar que el modal se cierra.\n5. Verificar que el producto similar se agrega al carro con la cantidad seleccionada.\n6. Verificar que el producto no disponible original permanece en la sección de no disponibles con la cantidad restante no cubierta (ajustada).\n7. Verificar que el resumen de precios y el total del carro se recalculan.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {SKU_PRODS_SIMILARES} = 000000000000628239-UN\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {UNIDADES_CARRITO_INICIAL_2} = 2\n- {COMPRADOR_USER} = 11.223.344-K\n- {COMPRADOR_PASSWORD} = Avatar1234.",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-16",
   "expected": "Al cerrar con X, el modal se cierra y ninguna selección queda guardada. El carro permanece sin cambios. El usuario vuelve al contexto de donde abrió el modal.",
   "form_factor": "desktop",
   "id": "TC-40-D-016",
   "name": "Cerrar el modal con el botón X descarta la selección y deja el carro sin cambios",
   "observation": "Causa: {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra \"Agregar\" y no \"Ver similares\", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16). Acción: declarar un SKU sin stock que muestre \"Ver similares\" (y la dirección o tienda donde no tiene stock).",
   "observed": "No ejecutado.",
   "preconditions": "Storefront Unimarc activo en Desktop 1440×900. Modal 'Ver similares' abierto (sidebar derecho) con productos similares disponibles. Einstein Recommendations activo. User type: Guest.",
   "screenshots": [
    {
     "caption": "{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, \"Agregar\" y sin \"Ver similares\"",
     "file": "TC-40-sku-prods-similares-035129-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Abrir el modal 'Ver similares' en Desktop 1440×900.\n2. Hacer clic en 'Agregar' en al menos un producto similar ('En carro X un.' visible dentro del modal).\n3. Hacer clic en el botón cerrar (X) del header del modal.\n4. Verificar que el modal se cierra.\n5. Verificar que el contador del carro NO cambió.\n6. Verificar que el usuario vuelve a la página/contexto donde estaba.\n7. Abrir el carro y confirmar que el producto similar NO fue agregado.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {SKU_PRODS_SIMILARES} = 000000000000628239-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-16",
   "expected": "El clic en el overlay fuera del modal lo cierra sin guardar la selección. El carro permanece sin cambios. El usuario regresa al contexto de navegación previo.",
   "form_factor": "desktop",
   "id": "TC-40-D-017",
   "name": "Clic fuera del área del modal (overlay) cierra el modal sin guardar selección y sin cambios en el carro",
   "observation": "Causa: {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra \"Agregar\" y no \"Ver similares\", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16). Acción: declarar un SKU sin stock que muestre \"Ver similares\" (y la dirección o tienda donde no tiene stock).",
   "observed": "No ejecutado.",
   "preconditions": "Storefront Unimarc activo en Desktop 1440×900. Modal 'Ver similares' abierto (sidebar derecho) con productos similares disponibles. Einstein Recommendations activo. User type: Guest.",
   "screenshots": [
    {
     "caption": "{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, \"Agregar\" y sin \"Ver similares\"",
     "file": "TC-40-sku-prods-similares-035129-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Abrir el modal 'Ver similares' en Desktop 1440×900.\n2. Hacer clic en 'Agregar' en un producto similar dentro del modal.\n3. Hacer clic fuera del área del modal, sobre el overlay de la página.\n4. Verificar que el modal se cierra.\n5. Verificar que el contador del carro NO cambió.\n6. Confirmar que el usuario vuelve al contexto donde estaba.\n7. Verificar que el producto similar NO fue agregado al carro.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {SKU_PRODS_SIMILARES} = 000000000000628239-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-16",
   "expected": "El modal se abre como bottom sheet desde la PDP en Mobile. La PDP permanece visible en el fondo.",
   "form_factor": "mobile",
   "id": "TC-40-M-002",
   "name": "Tap en 'Ver similares' desde PDP de producto sin stock abre el modal",
   "observation": "Causa: {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra \"Agregar\" y no \"Ver similares\", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16). Acción: declarar un SKU sin stock que muestre \"Ver similares\" (y la dirección o tienda donde no tiene stock).",
   "observed": "No ejecutado.",
   "preconditions": "Storefront Unimarc activo en Mobile 390×844. Al menos un producto sin stock visible en el contexto de prueba con el botón 'Ver similares' habilitado. Einstein Recommendations activo con recommender Product to Product configurado. User type: Guest.",
   "screenshots": [
    {
     "caption": "{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, \"Agregar\" y sin \"Ver similares\"",
     "file": "TC-40-sku-prods-similares-035129-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Navegar al Home con viewport Mobile 390×844.\n2. Acceder a la PDP de un producto sin stock con botón 'Ver similares' visible.\n3. Hacer tap en 'Ver similares'.\n4. Verificar que el modal se abre como bottom sheet desde abajo.\n5. Confirmar que la PDP permanece visible detrás del bottom sheet.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {SKU_PRODS_SIMILARES} = 000000000000628239-UN",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-16",
   "expected": "El modal de productos similares se abre como bottom sheet desde el carro en Mobile.",
   "form_factor": "mobile",
   "id": "TC-40-M-003",
   "name": "Tap en 'Ver similares' desde Carro (usuario logueado) abre el modal",
   "observation": "Causa: el caso necesita el carro de {COMPRADOR_USER} con un producto no disponible, y el único producto que declara, {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra \"Agregar\" y no \"Ver similares\", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16), así que no hay producto no disponible que dejar en el carro. Acción: declarar un SKU sin stock para la dirección o tienda de {COMPRADOR_USER} y cargarlo en su carro.",
   "observed": "No ejecutado.",
   "preconditions": "Storefront Unimarc activo en Mobile 390×844. Al menos un producto sin stock visible con botón 'Ver similares'. Einstein Recommendations activo. Usuario registrado logueado con credenciales válidas.",
   "screenshots": [
    {
     "caption": "{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, \"Agregar\" y sin \"Ver similares\"",
     "file": "TC-40-sku-prods-similares-035129-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Navegar al Home con viewport Mobile 390×844, usuario logueado.\n2. Acceder al carro con al menos un producto no disponible.\n3. Localizar el botón 'Ver similares' en la sección de no disponibles.\n4. Hacer tap en 'Ver similares'.\n5. Verificar que el modal se abre como bottom sheet.\n6. Confirmar que corresponde al producto no disponible seleccionado.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {SKU_PRODS_SIMILARES} = 000000000000628239-UN\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {COMPRADOR_USER} = 11.223.344-K\n- {COMPRADOR_PASSWORD} = Avatar1234.",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-16",
   "expected": "El modal se abre como bottom sheet desde el minicarro en Mobile. Funciona correctamente para usuarios logueados.",
   "form_factor": "mobile",
   "id": "TC-40-M-004",
   "name": "Tap en 'Ver similares' desde Minicarro (usuario logueado) abre el modal",
   "observation": "Causa: el caso necesita el carro de {COMPRADOR_USER} con un producto no disponible, y el único producto que declara, {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra \"Agregar\" y no \"Ver similares\", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16), así que no hay producto no disponible que dejar en el carro. Acción: declarar un SKU sin stock para la dirección o tienda de {COMPRADOR_USER} y cargarlo en su carro.",
   "observed": "No ejecutado.",
   "preconditions": "Storefront Unimarc activo en Mobile 390×844. Al menos un producto sin stock visible con botón 'Ver similares'. Einstein Recommendations activo. Usuario registrado logueado con credenciales válidas.",
   "screenshots": [
    {
     "caption": "{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, \"Agregar\" y sin \"Ver similares\"",
     "file": "TC-40-sku-prods-similares-035129-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Navegar al Home con viewport Mobile 390×844, usuario logueado.\n2. Abrir el minicarro (tap en el ícono del carro).\n3. En la sección de no disponibles, localizar el botón 'Ver similares'.\n4. Hacer tap en 'Ver similares'.\n5. Verificar que el modal se abre como bottom sheet.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {SKU_PRODS_SIMILARES} = 000000000000628239-UN\n- {COMPRADOR_USER} = 11.223.344-K\n- {COMPRADOR_PASSWORD} = Avatar1234.",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-16",
   "expected": "El modal se presenta como bottom sheet deslizando desde abajo en Mobile. La página de fondo es parcialmente visible. El bottom sheet es deslizable.",
   "form_factor": "mobile",
   "id": "TC-40-M-005",
   "name": "Modal 'Ver similares' se presenta como bottom sheet deslizable desde abajo",
   "observation": "Causa: {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra \"Agregar\" y no \"Ver similares\", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16). Acción: declarar un SKU sin stock que muestre \"Ver similares\" (y la dirección o tienda donde no tiene stock).",
   "observed": "No ejecutado.",
   "preconditions": "Storefront Unimarc activo en Mobile 390×844. Al menos un producto sin stock visible en el contexto de prueba con el botón 'Ver similares' habilitado. Einstein Recommendations activo con recommender Product to Product configurado. User type: Guest.",
   "screenshots": [
    {
     "caption": "{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, \"Agregar\" y sin \"Ver similares\"",
     "file": "TC-40-sku-prods-similares-035129-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Navegar al Home con viewport Mobile 390×844.\n2. Hacer tap en 'Ver similares' desde un producto sin stock.\n3. Verificar que el modal se presenta deslizando desde abajo (bottom sheet).\n4. Verificar que el bottom sheet no ocupa la pantalla completa (la página de fondo es parcialmente visible).\n5. Verificar que el bottom sheet es deslizable (se puede subir o bajar).",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {SKU_PRODS_SIMILARES} = 000000000000628239-UN",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-16",
   "expected": "El modal Mobile muestra todos los elementos: header con título y X, referencia producto original, lista de similares con shelf simplificada y botón 'Reemplazar producto' fijo en la parte inferior.",
   "form_factor": "mobile",
   "id": "TC-40-M-006",
   "name": "Modal muestra todos los elementos estructurales requeridos (header, referencia producto, lista similares, botón Reemplazar fijo)",
   "observation": "Causa: {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra \"Agregar\" y no \"Ver similares\", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16). Acción: declarar un SKU sin stock que muestre \"Ver similares\" (y la dirección o tienda donde no tiene stock).",
   "observed": "No ejecutado.",
   "preconditions": "Storefront Unimarc activo en Mobile 390×844. Modal 'Ver similares' abierto (bottom sheet) con productos similares disponibles. Einstein Recommendations activo. User type: Guest.",
   "screenshots": [
    {
     "caption": "{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, \"Agregar\" y sin \"Ver similares\"",
     "file": "TC-40-sku-prods-similares-035129-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Abrir el modal 'Ver similares' desde un producto sin stock en Mobile 390×844.\n2. Verificar header: título 'Productos similares' y botón cerrar (X).\n3. Verificar referencia al producto original sin stock (imagen miniatura + nombre).\n4. Verificar lista de similares en shelf simplificada: imagen, marca|nombre, precios y botón 'Agregar'.\n5. Verificar que el botón 'Reemplazar producto' está fijo en la parte inferior.\n6. Desplazarse en el modal y confirmar que el botón permanece fijo.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {SKU_PRODS_SIMILARES} = 000000000000628239-UN",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-16",
   "expected": "Al abrir el modal Mobile, el skeleton/loader es visible durante la carga. Una vez completada, el skeleton es reemplazado por el contenido real.",
   "form_factor": "mobile",
   "id": "TC-40-M-007",
   "name": "Al abrir el modal se muestra skeleton/loader mientras Einstein Recommendations carga los similares",
   "observation": "Causa: {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra \"Agregar\" y no \"Ver similares\", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16). Acción: declarar un SKU sin stock que muestre \"Ver similares\" (y la dirección o tienda donde no tiene stock).",
   "observed": "No ejecutado.",
   "preconditions": "Storefront Unimarc activo en Mobile 390×844. Al menos un producto sin stock visible en el contexto de prueba con el botón 'Ver similares' habilitado. Einstein Recommendations activo con recommender Product to Product configurado. User type: Guest.",
   "screenshots": [
    {
     "caption": "{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, \"Agregar\" y sin \"Ver similares\"",
     "file": "TC-40-sku-prods-similares-035129-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Navegar a una página con un producto sin stock en Mobile 390×844.\n2. Hacer tap en 'Ver similares'.\n3. Observar el estado del bottom sheet al abrirse.\n4. Verificar que se muestra un skeleton o loader mientras carga Einstein.\n5. Esperar la carga completa y verificar que el skeleton es reemplazado por el contenido real.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {SKU_PRODS_SIMILARES} = 000000000000628239-UN",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-16",
   "expected": "El modal Mobile muestra solo similares disponibles para el método de entrega activo, con precios vigentes. Los sin stock están excluidos.",
   "form_factor": "mobile",
   "id": "TC-40-M-008",
   "name": "Modal muestra productos similares disponibles filtrados por método de entrega; excluye similares sin stock",
   "observation": "Causa: {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra \"Agregar\" y no \"Ver similares\", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16). Acción: declarar un SKU sin stock que muestre \"Ver similares\" (y la dirección o tienda donde no tiene stock).",
   "observed": "No ejecutado.",
   "preconditions": "Storefront Unimarc activo en Mobile 390×844. Modal 'Ver similares' abierto (bottom sheet) con productos similares disponibles. Einstein Recommendations activo. User type: Guest.",
   "screenshots": [
    {
     "caption": "{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, \"Agregar\" y sin \"Ver similares\"",
     "file": "TC-40-sku-prods-similares-035129-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Con método de entrega activo, abrir el modal 'Ver similares' en Mobile 390×844.\n2. Esperar que carguen los productos similares.\n3. Verificar que los productos listados están disponibles para el método de entrega activo.\n4. Verificar que los precios son vigentes.\n5. Confirmar que ningún similar sin stock aparece en el listado.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {SKU_PRODS_SIMILARES} = 000000000000628239-UN",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-16",
   "expected": "El modal Mobile muestra: imagen, mensaje de estado vacío, NAV015 y botón 'Entendido' que cierra el modal.",
   "form_factor": "mobile",
   "id": "TC-40-M-009",
   "name": "(sin nombre en la planilla)",
   "observation": "Causa: la fila declara {SKU_SIN_SIMILARES} = 000000000000675191-UN pero no una dirección; sin método de entrega el SKU tiene stock (\"Agregar\"). Además, con {DIRECCION_DESPACHO_003} (que declara D-009) Einstein le devuelve 6 similares, así que tampoco cumple \"sin similares\". Acción: declarar un SKU sin stock sin similares en Einstein y la dirección donde no tiene stock. Nota: la fila no tiene nombre.",
   "observed": "No ejecutado.",
   "preconditions": "Storefront Unimarc activo en Mobile 390×844. Producto sin stock cuyo Product ID no tiene similares en Einstein Recommendations. User type: Guest.",
   "screenshots": [
    {
     "caption": "{SKU_SIN_SIMILARES} 675191 con {DIRECCION_DESPACHO_003}: \"Pronto disponible\" y \"Ver similares\"",
     "file": "TC-40-sku-sin-similares-675191-sin-stock-lo-barnechea.png"
    },
    {
     "caption": "Modal \"Productos similares\" de 675191: Einstein devuelve 6 similares",
     "file": "TC-40-D-009-p02-modal-con-6-similares.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Hacer tap en 'Ver similares' de un producto sin similares en Einstein, Mobile 390×844.\n2. Esperar que cargue el modal.\n3. Verificar imagen del estado vacío.\n4. Verificar mensaje '¡Ups! Lo sentimos. El producto que buscamos no tiene otros similares'.\n5. Verificar código NAV015.\n6. Hacer tap en 'Entendido' y verificar que el modal se cierra.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {SKU_SIN_SIMILARES} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-16",
   "expected": "El modal Mobile muestra el estado de error con: imagen, mensaje, NAV016 y botón 'Entendido' funcional.",
   "form_factor": "mobile",
   "id": "TC-40-M-010",
   "name": "Error o timeout en Einstein muestra estado de error con imagen, mensaje, error NAV016 y botón 'Entendido'",
   "observation": "Causa: {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra \"Agregar\" y no \"Ver similares\", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16). Acción: declarar un SKU sin stock que muestre \"Ver similares\" (y la dirección o tienda donde no tiene stock). La simulación del error de Einstein se puede hacer interceptando la llamada a product-to-product-einstein.",
   "observed": "No ejecutado.",
   "preconditions": "Storefront Unimarc activo en Mobile 390×844. Condición de error o timeout simulable en el servicio de Einstein Recommendations. User type: Guest.",
   "screenshots": [
    {
     "caption": "{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, \"Agregar\" y sin \"Ver similares\"",
     "file": "TC-40-sku-prods-similares-035129-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Simular condición de error en Einstein Recommendations.\n2. Hacer tap en 'Ver similares' de un producto sin stock en Mobile 390×844.\n3. Verificar imagen del estado de error.\n4. Verificar mensaje '¡Ups! Lo sentimos. El producto que buscas no tiene otros similares'.\n5. Verificar código NAV016.\n6. Hacer tap en 'Entendido' y verificar que el modal se cierra.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {SKU_PRODS_SIMILARES} = 000000000000628239-UN",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-16",
   "expected": "El bloque 'En carro X un.' con controles aparece dentro del modal Mobile. Los demás similares permanecen accesibles.",
   "form_factor": "mobile",
   "id": "TC-40-M-011",
   "name": "Tap en 'Agregar' en producto similar muestra bloque 'En carro X un.' dentro del modal",
   "observation": "Causa: {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra \"Agregar\" y no \"Ver similares\", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16). Acción: declarar un SKU sin stock que muestre \"Ver similares\" (y la dirección o tienda donde no tiene stock).",
   "observed": "No ejecutado.",
   "preconditions": "Storefront Unimarc activo en Mobile 390×844. Modal 'Ver similares' abierto (bottom sheet) con productos similares disponibles. Einstein Recommendations activo. User type: Guest.",
   "screenshots": [
    {
     "caption": "{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, \"Agregar\" y sin \"Ver similares\"",
     "file": "TC-40-sku-prods-similares-035129-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Abrir el modal 'Ver similares' en Mobile 390×844.\n2. Hacer tap en 'Agregar' en un producto similar.\n3. Verificar que aparece el bloque 'En carro X un.' con controles (−/+) dentro del modal.\n4. Verificar que los demás productos similares siguen siendo visibles y accesibles.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {SKU_PRODS_SIMILARES} = 000000000000628239-UN",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-16",
   "expected": "El producto seleccionado NO se agrega al carro hasta confirmar. El contador del carro permanece sin cambios.",
   "form_factor": "mobile",
   "id": "TC-40-M-012",
   "name": "Producto seleccionado en modal NO se agrega al carro hasta confirmar con 'Reemplazar productos'",
   "observation": "Causa: {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra \"Agregar\" y no \"Ver similares\", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16). Acción: declarar un SKU sin stock que muestre \"Ver similares\" (y la dirección o tienda donde no tiene stock).",
   "observed": "No ejecutado.",
   "preconditions": "Storefront Unimarc activo en Mobile 390×844. Modal 'Ver similares' abierto (bottom sheet) con productos similares disponibles. Einstein Recommendations activo. User type: Guest.",
   "screenshots": [
    {
     "caption": "{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, \"Agregar\" y sin \"Ver similares\"",
     "file": "TC-40-sku-prods-similares-035129-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Abrir el modal 'Ver similares' en Mobile 390×844.\n2. Hacer tap en 'Agregar' en un similar — aparece 'En carro X un.'.\n3. Sin confirmar, verificar el contador del carro.\n4. Confirmar que el contador NO cambió.\n5. Cerrar el modal y abrir el carro para verificar que el similar NO fue agregado.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {SKU_PRODS_SIMILARES} = 000000000000628239-UN",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-16",
   "expected": "El similar se agrega al carro, el modal se cierra y el contador se actualiza. El producto aparece en el carro.",
   "form_factor": "mobile",
   "id": "TC-40-M-013",
   "name": "Reemplazar productos' desde contexto navegación agrega similares al carro, cierra modal y actualiza contador",
   "observation": "Causa: {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra \"Agregar\" y no \"Ver similares\", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16). Acción: declarar un SKU sin stock que muestre \"Ver similares\" (y la dirección o tienda donde no tiene stock).",
   "observed": "No ejecutado.",
   "preconditions": "Storefront Unimarc activo en Mobile 390×844. Modal 'Ver similares' abierto (bottom sheet) con productos similares disponibles. Einstein Recommendations activo. User type: Guest.",
   "screenshots": [
    {
     "caption": "{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, \"Agregar\" y sin \"Ver similares\"",
     "file": "TC-40-sku-prods-similares-035129-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Abrir el modal 'Ver similares' desde un shelf en Mobile 390×844.\n2. Hacer tap en 'Agregar' en un similar.\n3. Hacer tap en 'Reemplazar productos'.\n4. Verificar que el modal se cierra.\n5. Verificar que el contador del carro se actualiza.\n6. Abrir el carro y confirmar que el similar está presente.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {SKU_PRODS_SIMILARES} = 000000000000628239-UN\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {COMPRADOR_USER} = 11.223.344-K\n- {COMPRADOR_PASSWORD} = Avatar1234.",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-16",
   "expected": "El similar queda en disponibles, el original se elimina de no disponibles y los totales se recalculan. El modal se cierra.",
   "form_factor": "mobile",
   "id": "TC-40-M-014",
   "name": "Reemplazar productos' desde carro agrega similar a disponibles, elimina original de no disponibles y recalcula totales",
   "observation": "Causa: el caso necesita el carro de {COMPRADOR_USER} con un producto no disponible, y el único producto que declara, {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra \"Agregar\" y no \"Ver similares\", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16), así que no hay producto no disponible que dejar en el carro. Acción: declarar un SKU sin stock para la dirección o tienda de {COMPRADOR_USER} y cargarlo en su carro.",
   "observed": "No ejecutado.",
   "preconditions": "Storefront Unimarc activo en Mobile 390×844. Modal 'Ver similares' abierto desde el carro (bottom sheet), con productos similares disponibles. Usuario registrado logueado.",
   "screenshots": [
    {
     "caption": "{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, \"Agregar\" y sin \"Ver similares\"",
     "file": "TC-40-sku-prods-similares-035129-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Abrir el modal desde la sección no disponibles del carro, usuario logueado, Mobile 390×844.\n2. Seleccionar un similar.\n3. Hacer tap en 'Reemplazar productos'.\n4. Verificar que el modal se cierra.\n5. Verificar que el similar está en la sección de disponibles.\n6. Verificar que el original fue eliminado de la sección de no disponibles.\n7. Verificar que los totales del carro se recalculan.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {SKU_PRODS_SIMILARES} = 000000000000628239-UN\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {COMPRADOR_USER} = 11.223.344-K\n- {COMPRADOR_PASSWORD} = Avatar1234.",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-16",
   "expected": "El similar se agrega con la cantidad seleccionada. El original permanece con la cantidad restante ajustada. Los totales se recalculan.",
   "form_factor": "mobile",
   "id": "TC-40-M-015",
   "name": "Reemplazo parcial — similar no cubre cantidad total; original permanece con cantidad restante y totales se recalculan",
   "observation": "Causa: el caso necesita el carro de {COMPRADOR_USER} con un producto no disponible, y el único producto que declara, {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra \"Agregar\" y no \"Ver similares\", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16), así que no hay producto no disponible que dejar en el carro. Acción: declarar un SKU sin stock para la dirección o tienda de {COMPRADOR_USER} y cargarlo en su carro.",
   "observed": "No ejecutado.",
   "preconditions": "Storefront Unimarc activo en Mobile 390×844. Modal 'Ver similares' abierto desde el carro (bottom sheet), con productos similares disponibles. Usuario registrado logueado.",
   "screenshots": [
    {
     "caption": "{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, \"Agregar\" y sin \"Ver similares\"",
     "file": "TC-40-sku-prods-similares-035129-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Abrir el modal desde el carro con producto no disponible de cantidad > 1, usuario logueado, Mobile 390×844.\n2. Seleccionar un similar con cantidad menor a la del original.\n3. Hacer tap en 'Reemplazar productos'.\n4. Verificar que el similar se agrega con la cantidad seleccionada.\n5. Verificar que el original permanece en no disponibles con la cantidad restante.\n6. Verificar que los totales se recalculan.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {SKU_PRODS_SIMILARES} = 000000000000628239-UN\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {UNIDADES_CARRITO_INICIAL_2} = 2\n- {COMPRADOR_USER} = 11.223.344-K\n- {COMPRADOR_PASSWORD} = Avatar1234.",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-16",
   "expected": "Al cerrar con X en Mobile, el modal se cierra, la selección se descarta y el carro permanece sin cambios.",
   "form_factor": "mobile",
   "id": "TC-40-M-016",
   "name": "Cerrar el modal con botón X descarta la selección y deja el carro sin cambios",
   "observation": "Causa: {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra \"Agregar\" y no \"Ver similares\", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16). Acción: declarar un SKU sin stock que muestre \"Ver similares\" (y la dirección o tienda donde no tiene stock).",
   "observed": "No ejecutado.",
   "preconditions": "Storefront Unimarc activo en Mobile 390×844. Modal 'Ver similares' abierto (bottom sheet) con productos similares disponibles. Einstein Recommendations activo. User type: Guest.",
   "screenshots": [
    {
     "caption": "{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, \"Agregar\" y sin \"Ver similares\"",
     "file": "TC-40-sku-prods-similares-035129-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Abrir el modal 'Ver similares' en Mobile 390×844.\n2. Hacer tap en 'Agregar' en un similar.\n3. Hacer tap en el botón X del header.\n4. Verificar que el modal se cierra.\n5. Verificar que el contador del carro NO cambió.\n6. Confirmar que el usuario vuelve al contexto previo.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {SKU_PRODS_SIMILARES} = 000000000000628239-UN",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-16",
   "expected": "El deslizamiento hacia abajo cierra el bottom sheet. La selección se descarta y el carro permanece sin cambios. El usuario regresa al contexto previo.",
   "form_factor": "mobile",
   "id": "TC-40-M-017",
   "name": "Deslizar el bottom sheet hacia abajo cierra el modal sin guardar selección y sin cambios en el carro",
   "observation": "Causa: {SKU_PRODS_SIMILARES} = 000000000000035129-UN (Salchicha tradicional San Jorge 20 un 1 Kg) tiene stock en DEV: su PDP muestra \"Agregar\" y no \"Ver similares\", como invitado sin método de entrega y también con {DIRECCION_DESPACHO_003} (Lo Barnechea) activa (verificado el 2026-11-16). Acción: declarar un SKU sin stock que muestre \"Ver similares\" (y la dirección o tienda donde no tiene stock).",
   "observed": "No ejecutado.",
   "preconditions": "Storefront Unimarc activo en Mobile 390×844. Modal 'Ver similares' abierto (bottom sheet) con productos similares disponibles. Einstein Recommendations activo. User type: Guest.",
   "screenshots": [
    {
     "caption": "{SKU_PRODS_SIMILARES} 035129 con {DIRECCION_DESPACHO_003} activa: con stock, \"Agregar\" y sin \"Ver similares\"",
     "file": "TC-40-sku-prods-similares-035129-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Abrir el modal 'Ver similares' en Mobile 390×844.\n2. Hacer tap en 'Agregar' en un similar.\n3. Deslizar el bottom sheet hacia abajo (gesto de swipe down).\n4. Verificar que el modal se cierra con la animación de descenso.\n5. Verificar que el contador del carro NO cambió.\n6. Confirmar que el usuario vuelve al contexto donde estaba.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {SKU_PRODS_SIMILARES} = 000000000000628239-UN",
   "viewport": "390x844"
  }
 ]
}
-->
