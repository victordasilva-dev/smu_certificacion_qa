# B2C-65 - Cucarda en la shelf de producto - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-65 |
| Última actualización | 2026-10-19 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | chromium |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP1/B2C-65 Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Data Pruebas.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 12 |
| Bloqueado Data | 11 |
| Bloqueado | 4 |
| Rechazado | 2 |
| **Total** | **29** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-19 | 29 | TC-65-D-001, TC-65-D-003, TC-65-D-004, TC-65-D-006, TC-65-D-007, TC-65-D-008, TC-65-D-009, TC-65-D-010, TC-65-D-011, TC-65-D-012, TC-65-D-013, TC-65-D-014, TC-65-D-015, TC-65-D-016, TC-65-M-001, TC-65-M-002, TC-65-M-003, TC-65-M-004, TC-65-M-006, TC-65-M-007, TC-65-M-008, TC-65-M-009, TC-65-M-010, TC-65-M-011, TC-65-M-012, TC-65-M-013, TC-65-M-014, TC-65-M-015, TC-65-M-016 |

## Detalle por caso de prueba

### TC-65-D-001 - Cucarda visible en PLP con posición y estilo configurados

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Duración | 67.4 s |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Guest

Producto con atributos Label_Activo=true, Label_Texto (ej. "Cyber"), Label_ColorTexto y Label_ColorFondo configurados

Producto disponible en una PLP

Viewport Desktop 1280x900

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

{SKU_CYBER} = 000000000000028616-KGV

**Pasos ejecutados**

1. Navegar a la PLP que contiene el producto con cucarda configurada.
2. Localizar el producto en la grilla de la PLP.
3. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen del producto.
4. Verificar que el texto de la cucarda coincide con Label_Texto configurado (ej. "Cyber").
5. Verificar que el color del texto y el color de fondo coinciden con Label_ColorTexto y Label_ColorFondo.
6. Verificar que el ícono (si Label_Icono está configurado) se muestra correctamente.

**Resultado esperado**

La cucarda aparece en la esquina superior izquierda de la imagen del producto en la PLP. El texto, colores e ícono coinciden con los atributos Label configurados en BM. El estilo visual es el definido en el Design System Super DS.

**Resultado obtenido**

La cucarda 'Cyber' aparece arriba a la izquierda de la imagen del SKU declarado (dx 8, dy 3), con color de texto y fondo propios y sin cruzarse con Favoritos. El valor exacto de colores e icono configurado en BM no es legible desde el storefront; el SKU no tiene icono.

**Evidencia**

![Paso 1 — plp declarada](<B2C-65 Evidencias/TC-65-D-001-p01-plp-declarada.png>)

![Paso 2 — shelf del sku 000000000000028616 kgv](<B2C-65 Evidencias/TC-65-D-001-p02-shelf-del-sku-000000000000028616-kgv.png>)

![Paso 3 — cucarda en dx 8 dy 3](<B2C-65 Evidencias/TC-65-D-001-p03-cucarda-en-dx-8-dy-3.png>)

![Estado final](<B2C-65 Evidencias/TC-65-D-001.png>)

---

### TC-65-D-003 - Cucarda visible en Carrusel y Colecciones con estilo configurado

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Guest

Producto con cucarda configurada visible en al menos un carrusel del Home o en una página de Colección

Viewport Desktop 1280x900

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{SKU_CUCARDA} = 000000000000028616-KGV

**Pasos ejecutados**

1. Navegar al Home y localizar un carrusel que muestre el producto con cucarda.
2. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen del producto en el carrusel.
3. Navegar a una página de Colecciones que contenga el producto.
4. Verificar que la cucarda se muestra con el mismo estilo en la Colección.

**Resultado esperado**

La cucarda se muestra en la shelf del producto tanto en carruseles del Home como en Colecciones. Posición, texto y colores son consistentes en ambos contextos.

**Resultado obtenido**

Causa: el paso 3 exige una página de Colecciones que la fila no declara (solo {BASE_URL} y {SKU_CUCARDA}). Acción: declarar la URL de la colección con el producto.

**Observación**

Causa: el paso 3 exige una página de Colecciones que la fila no declara (solo {BASE_URL} y {SKU_CUCARDA}). Acción: declarar la URL de la colección con el producto.

---

### TC-65-D-004 - Máximo 1 cucarda por producto — no se superpone con botón Favoritos

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Duración | 73.6 s |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Guest

Producto con cucarda configurada visible en la PLP

Viewport Desktop 1280x900

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

{SKU_CYBER} = 000000000000028616-KGV

**Pasos ejecutados**

1. Navegar a la PLP con el producto con cucarda configurada.
2. Verificar que solo aparece 1 cucarda en la shelf del producto.
3. Verificar que la cucarda está en la esquina superior izquierda de la imagen.
4. Verificar que el botón de Favoritos (icono corazón) está en la esquina superior derecha.
5. Confirmar que no hay solapamiento visual entre la cucarda y el botón Favoritos.

**Resultado esperado**

Solo se muestra 1 cucarda en la shelf del producto. La cucarda (izquierda) y el botón Favoritos (derecha) no se solapan visualmente. Si el producto aplica a múltiples configuraciones de label, se respeta la prioridad y se muestra solo 1.

**Resultado obtenido**

Una sola cucarda en la shelf, a la izquierda; Favoritos a la derecha; sus recuadros no se solapan.

**Evidencia**

![Paso 1 — shelf del producto con cucarda](<B2C-65 Evidencias/TC-65-D-004-p01-shelf-del-producto-con-cucarda.png>)

![Paso 2 — cucarda a la izquierda y favoritos a la derecha](<B2C-65 Evidencias/TC-65-D-004-p02-cucarda-a-la-izquierda-y-favoritos-a-la-derecha.png>)

![Estado final](<B2C-65 Evidencias/TC-65-D-004.png>)

---

### TC-65-D-006 - Cucarda visible en estado normal (producto disponible, no en carro)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Duración | 19.0 s |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Guest

Producto con cucarda configurada, disponible y con stock

Carrito vacío (producto no agregado)

Viewport Desktop 1280x900

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

{SKU_CYBER} = 000000000000028616-KGV

**Pasos ejecutados**

1. Navegar a la PLP con el producto con cucarda (carrito vacío).
2. Verificar que el producto muestra el botón "Agregar" (estado normal).
3. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen.
4. Verificar posición, texto y colores de la cucarda.

**Resultado esperado**

La cucarda se muestra correctamente en la shelf del producto en estado normal. Posición, texto y colores son consistentes con la configuración en BM.

**Resultado obtenido**

El SKU muestra 'Agregar' (no está en carro) y la cucarda 'Cyber' en la esquina superior izquierda.

**Evidencia**

![Paso 1 — shelf con cucarda en estado normal](<B2C-65 Evidencias/TC-65-D-006-p01-shelf-con-cucarda-en-estado-normal.png>)

![Paso 2 — cucarda cyber en dx 8 dy 3](<B2C-65 Evidencias/TC-65-D-006-p02-cucarda-cyber-en-dx-8-dy-3.png>)

![Estado final](<B2C-65 Evidencias/TC-65-D-006.png>)

---

### TC-65-D-007 - Cucarda visible en estado 'en carro' (controles de cantidad visibles)

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Duración | 187.7 s |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Guest

Producto con cucarda configurada y con stock

1 unidad del producto ya agregada al carrito (shelf muestra controles +/−)

Viewport Desktop 1280x900

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

{SKU_CYBER} = 000000000000028616-KGV

**Pasos ejecutados**

1. Navegar a la PLP (el producto ya tiene 1 unidad en el carrito).
2. Verificar que la shelf muestra los controles de cantidad (+/−) y el contador.
3. Verificar que la cucarda sigue apareciendo en la esquina superior izquierda de la imagen.
4. Verificar que la cucarda no se oculta ni se desplaza por los controles de cantidad.

**Resultado esperado**

La cucarda se muestra en la misma posición y con el mismo estilo en el estado 'en carro'. Los controles de cantidad no ocultan ni desplazan la cucarda.

**Resultado obtenido**

Causa: el caso excede el tiempo de ejecución (timeouts de 180 s al ubicar el elemento en el ambiente). Acción: revisar el rendimiento del ambiente o el producto declarado y re-ejecutar.

**Observación**

Causa: el caso excede el tiempo de ejecución (timeouts de 180 s al ubicar el elemento en el ambiente). Acción: revisar el rendimiento del ambiente o el producto declarado y re-ejecutar.

---

### TC-65-D-008 - Cucarda visible en estado 'sin stock' (etiqueta 'Pronto disponible')

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Guest

Producto con cucarda configurada y sin stock para el método de entrega activo

Viewport Desktop 1280x900

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

{SKU_SIN_STOCK} = 000000000000029403-KG

**Pasos ejecutados**

1. Navegar a la PLP con el producto sin stock.
2. Verificar que la shelf muestra la etiqueta "Pronto disponible" y sin botón "Agregar".
3. Verificar que la cucarda sigue apareciendo en la esquina superior izquierda de la imagen.
4. Verificar que la cucarda no se oculta por la etiqueta de sin stock.

**Resultado esperado**

La cucarda se muestra en la misma posición y estilo en el estado 'sin stock'. La etiqueta "Pronto disponible" y la cucarda coexisten sin solapamiento.

**Resultado obtenido**

Causa: el SKU declarado {SKU_SIN_STOCK} (000000000000029403-KG) tiene stock en el ambiente (muestra 'Agregar', sin 'Pronto disponible') y no tiene cucarda configurada. Acción: cargar un SKU sin stock y con cucarda en el Excel de data.

**Observación**

Causa: el SKU declarado {SKU_SIN_STOCK} (000000000000029403-KG) tiene stock en el ambiente (muestra 'Agregar', sin 'Pronto disponible') y no tiene cucarda configurada. Acción: cargar un SKU sin stock y con cucarda en el Excel de data.

---

### TC-65-D-009 - Texto de cucarda >20 caracteres se trunca con '...' en Desktop

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Duración | 65.1 s |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Guest

Producto con Label_Texto de más de 20 caracteres (ej. "Club Unimarc Exclusivo!") configurado

Viewport Desktop 1280x900

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

{SKU_CUCARDA_LARGA} = 000000000000666285-UN

**Pasos ejecutados**

1. Navegar a la PLP con el producto que tiene Label_Texto de más de 20 caracteres.
2. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen.
3. Verificar que el texto visible está truncado con "..." y no supera los 20 caracteres visibles.
4. Verificar que la cucarda no rompe el layout del shelf ni se desborda.

**Resultado esperado**

El texto de la cucarda aparece truncado con "..." al exceder 20 caracteres en Desktop. El layout de la shelf no se rompe. La cucarda mantiene su posición y dimensiones correctas.

**Resultado obtenido**

Texto completo sin puntos suspensivos y cucarda solapando Favoritos.

**Observación**

Esperado: texto >20 caracteres truncado con '...'. Obtenido: la cucarda de {SKU_CUCARDA_LARGA} muestra completo 'Promoción Lleva 2 unidades por Monto' (36 caracteres) con text-overflow clip, sin '...'; además la cucarda de 180 px se cruza con el botón Favoritos. B2C-65.spec.ts:501.

**Evidencia**

![Paso 1 — shelf del sku 000000000000666285 un](<B2C-65 Evidencias/TC-65-D-009-p01-shelf-del-sku-000000000000666285-un.png>)

![Paso 2 — cucarda de 36 caracteres](<B2C-65 Evidencias/TC-65-D-009-p02-cucarda-de-36-caracteres.png>)

![Estado al fallar la aserción](<B2C-65 Evidencias/TC-65-D-009.png>)

---

### TC-65-D-010 - Cucarda visible en shelf simplificada dentro de modal de buscador

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Duración | 38.3 s |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Guest

Producto con cucarda configurada (Label_Activo=true, Label_Texto, colores)

Modal de buscador activo con el producto en los resultados

Viewport Desktop 1280x900

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{SKU_CYBER} = 000000000000028616-KGV

{SRP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/search?q=carne

**Pasos ejecutados**

1. Abrir el modal de buscador e ingresar un término que devuelva el producto con cucarda.
2. Localizar la shelf simplificada del producto en los resultados del modal.
3. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen.
4. Verificar que texto y colores son consistentes con la configuración en BM.

**Resultado esperado**

La cucarda se muestra en la shelf simplificada del modal de buscador con el mismo comportamiento que en la shelf de navegación: posición superior izquierda, texto y colores correctos.

**Resultado obtenido**

Causa: con el término declarado en {SRP_URL} ('carne') el modal del buscador no incluye el SKU {SKU_CYBER} entre sus resultados (sí aparece en la SRP completa), por lo que el producto con cucarda no es alcanzable con la data del TC. Acción: declarar en la planilla un término que devuelva el producto en el modal.

**Observación**

Causa: con el término declarado en {SRP_URL} ('carne') el modal del buscador no incluye el SKU {SKU_CYBER} entre sus resultados (sí aparece en la SRP completa), por lo que el producto con cucarda no es alcanzable con la data del TC. Acción: declarar en la planilla un término que devuelva el producto en el modal.

---

### TC-65-D-011 - Cucarda muestra mismo texto, colores e ícono en Desktop y Mobile

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Duración | 73.7 s |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Guest

Producto con cucarda configurada con Label_Texto, Label_ColorTexto, Label_ColorFondo y Label_Icono

Acceso a la PLP en Desktop 1280x900 y en Mobile 390x844

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. Navegar a la PLP con el producto con cucarda en Desktop 1280x900.
2. Registrar texto, color de texto, color de fondo e ícono de la cucarda.
3. Cambiar la visualización a Mobile 390x844 (o acceder desde dispositivo móvil).
4. Navegar a la misma PLP y localizar el producto.
5. Verificar que texto, colores e ícono son idénticos en ambos viewports.
6. Verificar que el tamaño del componente se adapta al canal.

**Resultado esperado**

La cucarda muestra el mismo texto, colores e ícono en Desktop y Mobile. El tamaño del componente se adapta a cada canal respetando el Design System Super DS. No hay diferencias de contenido entre canales.

**Resultado obtenido**

En Desktop y Mobile los mismos 3 productos de la PLP llevan cucarda con el mismo texto y colores; el tamaño se adapta al canal.

**Evidencia**

![Paso 1 — plp en desktop 1280x900](<B2C-65 Evidencias/TC-65-D-011-p01-plp-en-desktop-1280x900.png>)

![Paso 2 — misma plp en mobile 390x844](<B2C-65 Evidencias/TC-65-D-011-p02-misma-plp-en-mobile-390x844.png>)

![Estado final](<B2C-65 Evidencias/TC-65-D-011.png>)

---

### TC-65-D-012 - Cucarda visible sobre imagen placeholder cuando el producto no tiene imagen válida

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Duración | 134.5 s |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Guest

Producto con cucarda configurada y sin imagen válida (muestra imagen placeholder)

Producto visible en la PLP

Viewport Desktop 1280x900

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. Navegar a la PLP con el producto sin imagen válida (muestra placeholder).
2. Verificar que la imagen del producto muestra el placeholder configurado.
3. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen placeholder.
4. Verificar que el texto y colores de la cucarda son los configurados en BM.

**Resultado esperado**

La cucarda se muestra sobre la imagen placeholder en la esquina superior izquierda. El estilo visual (texto, colores) es el mismo que sobre una imagen real de producto.

**Resultado obtenido**

Causa: el caso excede el tiempo de ejecución (timeouts de 180 s al ubicar el elemento en el ambiente). Acción: revisar el rendimiento del ambiente o el producto declarado y re-ejecutar. La simulación de imagen inválida no logró mostrar el placeholder sobre un producto con cucarda, por lo que no hay veredicto sobre el producto.

**Observación**

Causa: el caso excede el tiempo de ejecución (timeouts de 180 s al ubicar el elemento en el ambiente). Acción: revisar el rendimiento del ambiente o el producto declarado y re-ejecutar. La simulación de imagen inválida no logró mostrar el placeholder sobre un producto con cucarda, por lo que no hay veredicto sobre el producto.

---

### TC-65-M-001 - Cucarda visible en PLP con posición y estilo configurados

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 65.6 s |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Guest

Producto con cucarda configurada (Label_Activo=true, Label_Texto, colores)

Producto disponible en una PLP

Viewport Mobile 390x844

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

{SKU_CYBER} = 000000000000028616-KGV

**Pasos ejecutados**

1. Navegar a la PLP en Mobile con el producto con cucarda configurada.
2. Localizar el producto en la grilla.
3. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen.
4. Verificar que texto, colores e ícono coinciden con los atributos Label en BM.

**Resultado esperado**

La cucarda se muestra en la esquina superior izquierda de la imagen en Mobile. Texto, colores e ícono son consistentes con la configuración en BM.

**Resultado obtenido**

Igual que en Desktop, en Mobile: cucarda 'Cyber' arriba a la izquierda, sin cruzar Favoritos.

**Evidencia**

![Paso 1 — plp declarada](<B2C-65 Evidencias/TC-65-M-001-p01-plp-declarada.png>)

![Paso 2 — shelf del sku 000000000000028616 kgv](<B2C-65 Evidencias/TC-65-M-001-p02-shelf-del-sku-000000000000028616-kgv.png>)

![Paso 3 — cucarda en dx 8 dy 3](<B2C-65 Evidencias/TC-65-M-001-p03-cucarda-en-dx-8-dy-3.png>)

![Estado final](<B2C-65 Evidencias/TC-65-M-001.png>)

---

### TC-65-M-002 - Cucarda visible en SRP (buscador) con estilo configurado

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 88.1 s |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Guest

Producto con cucarda configurada indexado y visible en resultados del buscador

Viewport Mobile 390x844

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

{SKU_CYBER} = 000000000000028616-KGV

**Pasos ejecutados**

1. Abrir el buscador en Mobile e ingresar un término que devuelva el producto con cucarda.
2. Localizar el producto en los resultados.
3. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen.
4. Verificar que texto y colores coinciden con los configurados.

**Resultado esperado**

La cucarda se muestra en la shelf del producto en el SRP/buscador en Mobile. Posición, texto y colores son consistentes con la configuración en BM.

**Resultado obtenido**

Desde el buscador Mobile se llega a la SRP; el SKU declarado muestra la cucarda 'Cyber' arriba a la izquierda.

**Observación**

El término de búsqueda se derivó del nombre del SKU declarado (la fila no declara término).

**Evidencia**

![Paso 1 — resultados de tapapecho vacuno nacional](<B2C-65 Evidencias/TC-65-M-002-p01-resultados-de-tapapecho-vacuno-nacional.png>)

![Paso 2 — shelf del producto en la srp](<B2C-65 Evidencias/TC-65-M-002-p02-shelf-del-producto-en-la-srp.png>)

![Paso 3 — cucarda cyber en dx 8 dy 3](<B2C-65 Evidencias/TC-65-M-002-p03-cucarda-cyber-en-dx-8-dy-3.png>)

![Estado final](<B2C-65 Evidencias/TC-65-M-002.png>)

---

### TC-65-M-003 - Cucarda visible en Carrusel y Colecciones con estilo configurado

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Guest

Producto con cucarda visible en un carrusel del Home o en una página de Colección

Viewport Mobile 390x844

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{SKU_CUCARDA} = 000000000000028616-KGV

**Pasos ejecutados**

1. Navegar al Home en Mobile y localizar el carrusel con el producto con cucarda.
2. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen en el carrusel.
3. Navegar a una página de Colecciones con el producto y verificar la cucarda.

**Resultado esperado**

La cucarda se muestra en carruseles y Colecciones en Mobile con posición, texto y colores correctos.

**Resultado obtenido**

Causa: el paso 3 exige una página de Colecciones que la fila no declara (solo {BASE_URL} y {SKU_CUCARDA}). Acción: declarar la URL de la colección con el producto.

**Observación**

Causa: el paso 3 exige una página de Colecciones que la fila no declara (solo {BASE_URL} y {SKU_CUCARDA}). Acción: declarar la URL de la colección con el producto.

---

### TC-65-M-004 - Máximo 1 cucarda por producto — no se superpone con botón Favoritos

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 64.2 s |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Guest

Producto con cucarda configurada en la PLP

Viewport Mobile 390x844

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

{SKU_CYBER} = 000000000000028616-KGV

**Pasos ejecutados**

1. Navegar a la PLP en Mobile con el producto con cucarda.
2. Verificar que solo aparece 1 cucarda en la shelf del producto.
3. Verificar que la cucarda (izquierda) y el botón Favoritos (derecha) no se solapan.

**Resultado esperado**

Solo se muestra 1 cucarda en la shelf del producto en Mobile. La cucarda y el botón Favoritos no se solapan visualmente.

**Resultado obtenido**

Una sola cucarda a la izquierda y Favoritos a la derecha, sin solapamiento, en Mobile.

**Evidencia**

![Paso 1 — shelf del producto con cucarda](<B2C-65 Evidencias/TC-65-M-004-p01-shelf-del-producto-con-cucarda.png>)

![Paso 2 — cucarda a la izquierda y favoritos a la derecha](<B2C-65 Evidencias/TC-65-M-004-p02-cucarda-a-la-izquierda-y-favoritos-a-la-derecha.png>)

![Estado final](<B2C-65 Evidencias/TC-65-M-004.png>)

---

### TC-65-M-006 - Cucarda visible en estado normal (producto disponible, no en carro)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 66.0 s |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Guest

Producto con cucarda, disponible y con stock · Carrito vacío

Viewport Mobile 390x844

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. Navegar a la PLP en Mobile (carrito vacío, producto disponible).
2. Verificar que el producto muestra el botón "Agregar" (estado normal).
3. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen.

**Resultado esperado**

La cucarda se muestra en la shelf del producto en estado normal en Mobile, con posición, texto y colores correctos.

**Resultado obtenido**

Producto con 'Agregar' y cucarda en la esquina superior izquierda.

**Observación**

Mobile no declara SKU: se tomó el primer producto con cucarda de la PLP declarada.

**Evidencia**

![Paso 1 — shelf con cucarda en estado normal](<B2C-65 Evidencias/TC-65-M-006-p01-shelf-con-cucarda-en-estado-normal.png>)

![Paso 2 — cucarda cyber en dx 8 dy 3](<B2C-65 Evidencias/TC-65-M-006-p02-cucarda-cyber-en-dx-8-dy-3.png>)

![Estado final](<B2C-65 Evidencias/TC-65-M-006.png>)

---

### TC-65-M-007 - Cucarda visible en estado 'en carro' (controles de cantidad visibles)

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 184.8 s |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Guest

Producto con cucarda y 1 unidad ya en el carrito

Viewport Mobile 390x844

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. Navegar a la PLP en Mobile (producto ya tiene 1 unidad en el carrito).
2. Verificar que la shelf muestra controles de cantidad (+/−).
3. Verificar que la cucarda sigue apareciendo en la esquina superior izquierda.

**Resultado esperado**

La cucarda se mantiene visible en el estado 'en carro' en Mobile. Los controles de cantidad no ocultan ni desplazan la cucarda.

**Resultado obtenido**

Causa: el caso excede el tiempo de ejecución (timeouts de 180 s al ubicar el elemento en el ambiente). Acción: revisar el rendimiento del ambiente o el producto declarado y re-ejecutar.

**Observación**

Causa: el caso excede el tiempo de ejecución (timeouts de 180 s al ubicar el elemento en el ambiente). Acción: revisar el rendimiento del ambiente o el producto declarado y re-ejecutar.

---

### TC-65-M-008 - Cucarda visible en estado 'sin stock' (etiqueta 'Pronto disponible')

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Guest

Producto con cucarda configurada y sin stock

Viewport Mobile 390x844

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

{SKU_SIN_STOCK} = 000000000000029403-KG

**Pasos ejecutados**

1. Navegar a la PLP en Mobile con el producto sin stock.
2. Verificar que la shelf muestra la etiqueta "Pronto disponible".
3. Verificar que la cucarda sigue apareciendo en la esquina superior izquierda de la imagen.

**Resultado esperado**

La cucarda se muestra en la shelf del producto sin stock en Mobile. "Pronto disponible" y la cucarda coexisten sin solapamiento.

**Resultado obtenido**

Causa: el SKU declarado {SKU_SIN_STOCK} (000000000000029403-KG) tiene stock en el ambiente (muestra 'Agregar', sin 'Pronto disponible') y no tiene cucarda configurada. Acción: cargar un SKU sin stock y con cucarda en el Excel de data.

**Observación**

Causa: el SKU declarado {SKU_SIN_STOCK} (000000000000029403-KG) tiene stock en el ambiente (muestra 'Agregar', sin 'Pronto disponible') y no tiene cucarda configurada. Acción: cargar un SKU sin stock y con cucarda en el Excel de data.

---

### TC-65-M-009 - Texto de cucarda >15 caracteres se trunca con '...' en Mobile

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 67.4 s |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Guest

Producto con Label_Texto de más de 15 caracteres (ej. "Club Unimarc Exclusivo!") configurado

Viewport Mobile 390x844

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

{SKU_CUCARDA_LARGA} = 000000000000666285-UN

**Pasos ejecutados**

1. Navegar a la PLP en Mobile con el producto que tiene Label_Texto de más de 15 caracteres.
2. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen.
3. Verificar que el texto visible está truncado con "..." y no supera los 15 caracteres.
4. Verificar que el layout del shelf no se rompe.

**Resultado esperado**

El texto de la cucarda aparece truncado con "..." al exceder 15 caracteres en Mobile. El layout del shelf no se rompe. La cucarda mantiene su posición y dimensiones correctas.

**Resultado obtenido**

Texto sin puntos suspensivos, cucarda desborda la imagen y tapa Favoritos.

**Observación**

Esperado: texto >15 caracteres truncado con '...'. Obtenido: la cucarda de {SKU_CUCARDA_LARGA} muestra 'Promoción Lleva 2 unidades por Monto' (36 caracteres) sin '...'; la cucarda mide 153 px, se sale del borde derecho de la imagen y cubre Favoritos. B2C-65.spec.ts:516.

**Evidencia**

![Paso 1 — shelf del sku 000000000000666285 un](<B2C-65 Evidencias/TC-65-M-009-p01-shelf-del-sku-000000000000666285-un.png>)

![Paso 2 — cucarda de 36 caracteres](<B2C-65 Evidencias/TC-65-M-009-p02-cucarda-de-36-caracteres.png>)

![Estado al fallar la aserción](<B2C-65 Evidencias/TC-65-M-009.png>)

---

### TC-65-M-010 - Cucarda visible en shelf simplificada dentro de modal de buscador

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 31.0 s |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Guest

Producto con cucarda configurada en los resultados del modal de buscador

Viewport Mobile 390x844

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{SKU_CYBER} = 000000000000028616-KGV

{SRP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/search?q=carne

**Pasos ejecutados**

1. Abrir el modal de buscador en Mobile con el producto con cucarda en los resultados.
2. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen en la shelf simplificada.
3. Verificar que texto y colores son consistentes con la configuración en BM.

**Resultado esperado**

La cucarda se muestra en la shelf simplificada del modal en Mobile con posición, texto y colores correctos.

**Resultado obtenido**

La shelf simplificada del modal muestra la cucarda 'Cyber' arriba a la izquierda sin tapar Favoritos.

**Observación**

El término se derivó del nombre del SKU declarado.

**Evidencia**

![Paso 1 — modal de buscador con tapapecho vacuno nacional](<B2C-65 Evidencias/TC-65-M-010-p01-modal-de-buscador-con-tapapecho-vacuno-nacional.png>)

![Paso 2 — shelf simplificada del producto](<B2C-65 Evidencias/TC-65-M-010-p02-shelf-simplificada-del-producto.png>)

![Estado final](<B2C-65 Evidencias/TC-65-M-010.png>)

---

### TC-65-M-011 - Cucarda muestra mismo texto, colores e ícono en Desktop y Mobile

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 1280x900 |
| Navegador | webkit |
| Duración | 84.2 s |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Guest

Producto con cucarda configurada con Label_Texto, colores e ícono

Acceso a la PLP en Desktop 1280x900 y Mobile 390x844

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. Navegar a la PLP con el producto en Desktop y registrar texto, colores e ícono de la cucarda.
2. Navegar a la misma PLP en Mobile 390x844.
3. Verificar que texto, colores e ícono son idénticos al de Desktop.
4. Verificar que el tamaño del componente se adapta al viewport Mobile.

**Resultado esperado**

La cucarda muestra el mismo contenido en Mobile que en Desktop. El componente se adapta al tamaño del viewport Mobile respetando el Design System Super DS.

**Resultado obtenido**

En Desktop y Mobile los mismos 3 productos de la PLP llevan cucarda con el mismo texto y colores; el tamaño se adapta al canal.

**Evidencia**

![Paso 1 — plp en mobile 390x844](<B2C-65 Evidencias/TC-65-M-011-p01-plp-en-mobile-390x844.png>)

![Paso 2 — misma plp en desktop 1280x900](<B2C-65 Evidencias/TC-65-M-011-p02-misma-plp-en-desktop-1280x900.png>)

![Estado final](<B2C-65 Evidencias/TC-65-M-011.png>)

---

### TC-65-M-012 - Cucarda visible sobre imagen placeholder cuando el producto no tiene imagen válida

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Guest

Producto con cucarda y sin imagen válida (muestra placeholder)

Viewport Mobile 390x844

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. Navegar a la PLP en Mobile con el producto sin imagen válida (muestra placeholder).
2. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen placeholder.
3. Verificar que texto y colores son los configurados en BM.

**Resultado esperado**

La cucarda se muestra sobre la imagen placeholder en Mobile con el mismo estilo que sobre una imagen real de producto.

**Resultado obtenido**

Causa: el caso excede el tiempo de ejecución (timeouts de 180 s al ubicar el elemento en el ambiente). Acción: revisar el rendimiento del ambiente o el producto declarado y re-ejecutar. (sin veredicto: la corrida se detuvo antes de ejecutarlo).

**Observación**

Causa: el caso excede el tiempo de ejecución (timeouts de 180 s al ubicar el elemento en el ambiente). Acción: revisar el rendimiento del ambiente o el producto declarado y re-ejecutar. (sin veredicto: la corrida se detuvo antes de ejecutarlo).

---

### TC-65-D-013 - Cucarda visible en PLP para usuario logueado

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

Producto con cucarda configurada en la PLP

Viewport Desktop 1280x900

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{COMPRADOR_PASSWORD} = (contraseña de la cuenta de comprador)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. Iniciar sesión con cuenta de cliente registrado.
2. Navegar a la PLP con el producto con cucarda configurada.
3. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen.
4. Verificar que texto y colores son consistentes con la configuración en BM.

**Resultado esperado**

La cucarda se muestra correctamente para usuario logueado con el mismo comportamiento que para usuario Guest: posición, texto y colores correctos.

**Resultado obtenido**

La cucarda 'Cyber' se ve arriba a la izquierda de la imagen con el usuario logueado, igual que como invitado (dx 8, dy 3), con colores de texto y fondo propios. El valor exacto configurado en BM no se lee desde el storefront.

**Evidencia**

![Paso 1 — plp declarada](<B2C-65 Evidencias/TC-65-D-013-p01-plp-declarada.png>)

![Paso 2 — shelf del sku 000000000000028616 kgv](<B2C-65 Evidencias/TC-65-D-013-p02-shelf-del-sku-000000000000028616-kgv.png>)

![Paso 3 — cucarda en dx 8 dy 3](<B2C-65 Evidencias/TC-65-D-013-p03-cucarda-en-dx-8-dy-3.png>)

![Estado final](<B2C-65 Evidencias/TC-65-D-013.png>)

---

### TC-65-M-013 - Cucarda visible en PLP para usuario logueado

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

Producto con cucarda configurada en la PLP

Viewport Mobile 390x844

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{COMPRADOR_PASSWORD} = (contraseña de la cuenta de comprador)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. Iniciar sesión con cuenta de cliente registrado en Mobile.
2. Navegar a la PLP con el producto con cucarda.
3. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen.
4. Verificar texto y colores consistentes con BM.

**Resultado esperado**

La cucarda se muestra correctamente en Mobile para usuario logueado, con el mismo comportamiento que para usuario Guest.

**Resultado obtenido**

La cucarda 'Cyber' se ve arriba a la izquierda de la imagen en Mobile con el usuario logueado, igual que como invitado. El valor exacto configurado en BM no se lee desde el storefront.

**Evidencia**

![Paso 1 — plp declarada](<B2C-65 Evidencias/TC-65-M-013-p01-plp-declarada.png>)

![Paso 2 — shelf del sku 000000000000028616 kgv](<B2C-65 Evidencias/TC-65-M-013-p02-shelf-del-sku-000000000000028616-kgv.png>)

![Paso 3 — cucarda en dx 8 dy 3](<B2C-65 Evidencias/TC-65-M-013-p03-cucarda-en-dx-8-dy-3.png>)

![Estado final](<B2C-65 Evidencias/TC-65-M-013.png>)

---

### TC-65-D-014 - Cucarda consistente en todos los estados de la shelf para usuario logueado

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

Producto con cucarda configurada, con stock

Viewport Desktop 1280x900

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{COMPRADOR_PASSWORD} = (contraseña de la cuenta de comprador)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. Iniciar sesión con cuenta de cliente registrado.
2. Navegar a la PLP (producto sin agregar) → verificar cucarda en estado normal.
3. Agregar el producto al carrito → verificar cucarda en estado 'en carro'.
4. Con producto sin stock → verificar cucarda en estado 'sin stock' (etiqueta 'Pronto disponible').

**Resultado esperado**

La cucarda se muestra en la misma posición y con el mismo estilo en los tres estados de la shelf para usuario logueado. No se oculta ni desplaza en ningún estado.

**Resultado obtenido**

Causa: el paso 4 pide un producto con cucarda y sin stock y la fila no declara ninguno ({SKU_SIN_STOCK} no está en su Test data y en el ambiente tiene stock). Los pasos 2 y 3 (estado normal y 'en carro') se ejecutaron con la cuenta de comprador y la cucarda se mantuvo igual. Acción: declarar en la fila un producto con cucarda y sin stock.

**Observación**

Causa: el paso 4 pide un producto con cucarda y sin stock y la fila no declara ninguno ({SKU_SIN_STOCK} no está en su Test data y en el ambiente tiene stock). Los pasos 2 y 3 (estado normal y 'en carro') se ejecutaron con la cuenta de comprador y la cucarda se mantuvo igual. Acción: declarar en la fila un producto con cucarda y sin stock.

**Evidencia**

![Paso 1 — shelf antes de agregar](<B2C-65 Evidencias/TC-65-D-014-p01-shelf-antes-de-agregar.png>)

![Paso 2 — shelf con controles de cantidad](<B2C-65 Evidencias/TC-65-D-014-p02-shelf-con-controles-de-cantidad.png>)

![Paso 3 — cucarda intacta en el estado en carro](<B2C-65 Evidencias/TC-65-D-014-p03-cucarda-intacta-en-el-estado-en-carro.png>)

![Estado final](<B2C-65 Evidencias/TC-65-D-014.png>)

---

### TC-65-M-014 - Cucarda consistente en todos los estados de la shelf para usuario logueado

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

Producto con cucarda, disponible y con stock

Viewport Mobile 390x844

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{COMPRADOR_PASSWORD} = (contraseña de la cuenta de comprador)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. Iniciar sesión en Mobile.
2. Navegar a la PLP (sin agregar) → verificar cucarda en estado normal.
3. Agregar producto → verificar cucarda en estado 'en carro'.
4. Con producto sin stock → verificar cucarda en estado 'sin stock'.

**Resultado esperado**

La cucarda se muestra en los tres estados de la shelf en Mobile para usuario logueado, con posición y estilo consistentes.

**Resultado obtenido**

Causa: el paso 4 pide un producto con cucarda y sin stock y la fila no declara ninguno ({SKU_SIN_STOCK} no está en su Test data y en el ambiente tiene stock). Los pasos 2 y 3 (estado normal y 'en carro') se ejecutaron con la cuenta de comprador y la cucarda se mantuvo igual. Acción: declarar en la fila un producto con cucarda y sin stock. En Mobile, además, el estado normal no pudo comprobarse: el producto ya estaba en el carro de la misma cuenta por la corrida Desktop (el botón 'Agregar' no aparece).

**Observación**

Causa: el paso 4 pide un producto con cucarda y sin stock y la fila no declara ninguno ({SKU_SIN_STOCK} no está en su Test data y en el ambiente tiene stock). Los pasos 2 y 3 (estado normal y 'en carro') se ejecutaron con la cuenta de comprador y la cucarda se mantuvo igual. Acción: declarar en la fila un producto con cucarda y sin stock. En Mobile, además, el estado normal no pudo comprobarse: el producto ya estaba en el carro de la misma cuenta por la corrida Desktop (el botón 'Agregar' no aparece).

---

### TC-65-D-015 - Priorización: label de promoción tiene precedencia sobre label de categoría en storefront

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

Producto en una subcategoría con Label_Activo=true (label de categoría configurado)

Mismo producto elegible a una promoción con Label_Activo=true (label de promoción configurado, texto diferente)

JOB1 y JOB2 ejecutados para aplicar ambos labels

Viewport Desktop 1280x900

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{COMPRADOR_PASSWORD} = (contraseña de la cuenta de comprador)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. Iniciar sesión con cuenta de cliente registrado.
2. Navegar a la PLP con el producto que tiene configurados tanto label de categoría como de promoción.
3. Verificar el texto de la cucarda mostrada en la shelf del producto.
4. Comparar el texto con el Label_Texto de la promoción y el Label_Texto de la categoría.

**Resultado esperado**

La shelf del producto muestra el label de la promoción (no el de la categoría). El texto, colores e ícono corresponden a los atributos configurados en la promoción, confirmando la priorización: promoción > categoría.

**Resultado obtenido**

Causa: la precondición pide un producto con label de categoría y de promoción configurados y los jobs ejecutados, y la fila solo declara {BASE_URL}, {COMPRADOR_USER}, {COMPRADOR_PASSWORD} y {PLP_URL}: no dice qué producto. Acción: declarar en la fila el producto (token) que cumple la precondición.

**Observación**

Causa: la precondición pide un producto con label de categoría y de promoción configurados y los jobs ejecutados, y la fila solo declara {BASE_URL}, {COMPRADOR_USER}, {COMPRADOR_PASSWORD} y {PLP_URL}: no dice qué producto. Acción: declarar en la fila el producto (token) que cumple la precondición.

---

### TC-65-M-015 - Priorización: label de promoción tiene precedencia sobre label de categoría en storefront

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

Producto con label de categoría y label de promoción configurados (JOB1 y JOB2 ejecutados)

Viewport Mobile 390x844

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{COMPRADOR_PASSWORD} = (contraseña de la cuenta de comprador)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. Iniciar sesión en Mobile.
2. Navegar a la PLP con el producto con ambos labels configurados.
3. Verificar el texto de la cucarda mostrada.
4. Confirmar que corresponde al Label_Texto de la promoción y no de la categoría.

**Resultado esperado**

La shelf en Mobile muestra el label de la promoción (mayor prioridad). El label de la categoría no se muestra.

**Resultado obtenido**

Causa: la precondición pide un producto con label de categoría y de promoción configurados y los jobs ejecutados, y la fila solo declara {BASE_URL}, {COMPRADOR_USER}, {COMPRADOR_PASSWORD} y {PLP_URL}: no dice qué producto. Acción: declarar en la fila el producto (token) que cumple la precondición.

**Observación**

Causa: la precondición pide un producto con label de categoría y de promoción configurados y los jobs ejecutados, y la fila solo declara {BASE_URL}, {COMPRADOR_USER}, {COMPRADOR_PASSWORD} y {PLP_URL}: no dice qué producto. Acción: declarar en la fila el producto (token) que cumple la precondición.

---

### TC-65-D-016 - Priorización entre labels de promoción: membresía > Unipay > BancoEstado > % dcto en storefront

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

Producto elegible para múltiples promos con label activo: membresía, Unipay, BancoEstado y % descuento

JOB2 ejecutado para aplicar todos los labels

Viewport Desktop 1280x900

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{COMPRADOR_PASSWORD} = (contraseña de la cuenta de comprador)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. Iniciar sesión con cuenta de cliente registrado.
2. Navegar a la PLP con el producto elegible a las múltiples promociones.
3. Verificar el texto de la cucarda mostrada en la shelf.
4. Confirmar que el texto corresponde al Label_Texto de la promoción de membresía (mayor prioridad).

**Resultado esperado**

La shelf muestra el label de la promoción de membresía (máxima prioridad). El texto e ícono corresponden a los atributos de la promo de membresía. Los labels de Unipay, BancoEstado y % dcto no se muestran (solo 1 cucarda por producto).

**Resultado obtenido**

Causa: la precondición pide un producto con varias promociones con label (membresía, Unipay, BancoEstado y % dcto) configurados y los jobs ejecutados, y la fila solo declara {BASE_URL}, {COMPRADOR_USER}, {COMPRADOR_PASSWORD} y {PLP_URL}: no dice qué producto. Acción: declarar en la fila el producto (token) que cumple la precondición.

**Observación**

Causa: la precondición pide un producto con varias promociones con label (membresía, Unipay, BancoEstado y % dcto) configurados y los jobs ejecutados, y la fila solo declara {BASE_URL}, {COMPRADOR_USER}, {COMPRADOR_PASSWORD} y {PLP_URL}: no dice qué producto. Acción: declarar en la fila el producto (token) que cumple la precondición.

---

### TC-65-M-016 - Priorización entre labels de promoción: membresía > Unipay > BancoEstado > % dcto en storefront

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-65.spec.ts |

**Precondiciones**

User type: Logueado

Cuenta de cliente registrado con sesión activa

Producto elegible a múltiples promos con label: membresía, Unipay, BancoEstado y % dcto (JOB2 ejecutado)

Viewport Mobile 390x844

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{COMPRADOR_PASSWORD} = (contraseña de la cuenta de comprador)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. Iniciar sesión en Mobile.
2. Navegar a la PLP con el producto elegible a múltiples promociones.
3. Verificar el texto de la cucarda.
4. Confirmar que corresponde al label de la promo de membresía.

**Resultado esperado**

La shelf en Mobile muestra el label de la promo de membresía (mayor prioridad). Labels de Unipay, BancoEstado y % dcto no se muestran.

**Resultado obtenido**

Causa: la precondición pide un producto con varias promociones con label (membresía, Unipay, BancoEstado y % dcto) configurados y los jobs ejecutados, y la fila solo declara {BASE_URL}, {COMPRADOR_USER}, {COMPRADOR_PASSWORD} y {PLP_URL}: no dice qué producto. Acción: declarar en la fila el producto (token) que cumple la precondición.

**Observación**

Causa: la precondición pide un producto con varias promociones con label (membresía, Unipay, BancoEstado y % dcto) configurados y los jobs ejecutados, y la fila solo declara {BASE_URL}, {COMPRADOR_USER}, {COMPRADOR_PASSWORD} y {PLP_URL}: no dice qué producto. Acción: declarar en la fila el producto (token) que cumple la precondición.

---

<!-- qa-evidence-state
{
 "header": {
  "browsers": {
   "desktop": "chromium",
   "mobile": "chromium"
  },
  "data_file": "Datos Pruebas/Data Pruebas.xlsx",
  "environment": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-65",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP1/B2C-65 Test Cases.xlsx",
  "title": "B2C-65 - Cucarda en la shelf de producto - Evidencias QA",
  "updated_at": "2026-10-19"
 },
 "history": {
  "2026-10-19": [
   "TC-65-D-001",
   "TC-65-D-003",
   "TC-65-D-004",
   "TC-65-D-006",
   "TC-65-D-007",
   "TC-65-D-008",
   "TC-65-D-009",
   "TC-65-D-010",
   "TC-65-D-011",
   "TC-65-D-012",
   "TC-65-D-013",
   "TC-65-D-014",
   "TC-65-D-015",
   "TC-65-D-016",
   "TC-65-M-001",
   "TC-65-M-002",
   "TC-65-M-003",
   "TC-65-M-004",
   "TC-65-M-006",
   "TC-65-M-007",
   "TC-65-M-008",
   "TC-65-M-009",
   "TC-65-M-010",
   "TC-65-M-011",
   "TC-65-M-012",
   "TC-65-M-013",
   "TC-65-M-014",
   "TC-65-M-015",
   "TC-65-M-016"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "duration_s": 67.4,
   "executed_at": "2026-10-19",
   "expected": "La cucarda aparece en la esquina superior izquierda de la imagen del producto en la PLP. El texto, colores e ícono coinciden con los atributos Label configurados en BM. El estilo visual es el definido en el Design System Super DS.",
   "form_factor": "desktop",
   "id": "TC-65-D-001",
   "name": "Cucarda visible en PLP con posición y estilo configurados",
   "observed": "La cucarda 'Cyber' aparece arriba a la izquierda de la imagen del SKU declarado (dx 8, dy 3), con color de texto y fondo propios y sin cruzarse con Favoritos. El valor exacto de colores e icono configurado en BM no es legible desde el storefront; el SKU no tiene icono.",
   "preconditions": "User type: Guest\nProducto con atributos Label_Activo=true, Label_Texto (ej. \"Cyber\"), Label_ColorTexto y Label_ColorFondo configurados\nProducto disponible en una PLP\nViewport Desktop 1280x900",
   "screenshots": [
    {
     "caption": "Paso 1 — plp declarada",
     "file": "TC-65-D-001-p01-plp-declarada.png"
    },
    {
     "caption": "Paso 2 — shelf del sku 000000000000028616 kgv",
     "file": "TC-65-D-001-p02-shelf-del-sku-000000000000028616-kgv.png"
    },
    {
     "caption": "Paso 3 — cucarda en dx 8 dy 3",
     "file": "TC-65-D-001-p03-cucarda-en-dx-8-dy-3.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-65-D-001.png"
    }
   ],
   "spec": "tests/B2C-65.spec.ts",
   "status": "Aprobado",
   "steps": "1. Navegar a la PLP que contiene el producto con cucarda configurada.\n2. Localizar el producto en la grilla de la PLP.\n3. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen del producto.\n4. Verificar que el texto de la cucarda coincide con Label_Texto configurado (ej. \"Cyber\").\n5. Verificar que el color del texto y el color de fondo coinciden con Label_ColorTexto y Label_ColorFondo.\n6. Verificar que el ícono (si Label_Icono está configurado) se muestra correctamente.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n{SKU_CYBER} = 000000000000028616-KGV",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "La cucarda se muestra en la shelf del producto tanto en carruseles del Home como en Colecciones. Posición, texto y colores son consistentes en ambos contextos.",
   "form_factor": "desktop",
   "id": "TC-65-D-003",
   "name": "Cucarda visible en Carrusel y Colecciones con estilo configurado",
   "observation": "Causa: el paso 3 exige una página de Colecciones que la fila no declara (solo {BASE_URL} y {SKU_CUCARDA}). Acción: declarar la URL de la colección con el producto.",
   "observed": "Causa: el paso 3 exige una página de Colecciones que la fila no declara (solo {BASE_URL} y {SKU_CUCARDA}). Acción: declarar la URL de la colección con el producto.",
   "preconditions": "User type: Guest\nProducto con cucarda configurada visible en al menos un carrusel del Home o en una página de Colección\nViewport Desktop 1280x900",
   "spec": "tests/B2C-65.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. Navegar al Home y localizar un carrusel que muestre el producto con cucarda.\n2. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen del producto en el carrusel.\n3. Navegar a una página de Colecciones que contenga el producto.\n4. Verificar que la cucarda se muestra con el mismo estilo en la Colección.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{SKU_CUCARDA} = 000000000000028616-KGV",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "duration_s": 73.6,
   "executed_at": "2026-10-19",
   "expected": "Solo se muestra 1 cucarda en la shelf del producto. La cucarda (izquierda) y el botón Favoritos (derecha) no se solapan visualmente. Si el producto aplica a múltiples configuraciones de label, se respeta la prioridad y se muestra solo 1.",
   "form_factor": "desktop",
   "id": "TC-65-D-004",
   "name": "Máximo 1 cucarda por producto — no se superpone con botón Favoritos",
   "observed": "Una sola cucarda en la shelf, a la izquierda; Favoritos a la derecha; sus recuadros no se solapan.",
   "preconditions": "User type: Guest\nProducto con cucarda configurada visible en la PLP\nViewport Desktop 1280x900",
   "screenshots": [
    {
     "caption": "Paso 1 — shelf del producto con cucarda",
     "file": "TC-65-D-004-p01-shelf-del-producto-con-cucarda.png"
    },
    {
     "caption": "Paso 2 — cucarda a la izquierda y favoritos a la derecha",
     "file": "TC-65-D-004-p02-cucarda-a-la-izquierda-y-favoritos-a-la-derecha.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-65-D-004.png"
    }
   ],
   "spec": "tests/B2C-65.spec.ts",
   "status": "Aprobado",
   "steps": "1. Navegar a la PLP con el producto con cucarda configurada.\n2. Verificar que solo aparece 1 cucarda en la shelf del producto.\n3. Verificar que la cucarda está en la esquina superior izquierda de la imagen.\n4. Verificar que el botón de Favoritos (icono corazón) está en la esquina superior derecha.\n5. Confirmar que no hay solapamiento visual entre la cucarda y el botón Favoritos.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n{SKU_CYBER} = 000000000000028616-KGV",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "duration_s": 19.0,
   "executed_at": "2026-10-19",
   "expected": "La cucarda se muestra correctamente en la shelf del producto en estado normal. Posición, texto y colores son consistentes con la configuración en BM.",
   "form_factor": "desktop",
   "id": "TC-65-D-006",
   "name": "Cucarda visible en estado normal (producto disponible, no en carro)",
   "observed": "El SKU muestra 'Agregar' (no está en carro) y la cucarda 'Cyber' en la esquina superior izquierda.",
   "preconditions": "User type: Guest\nProducto con cucarda configurada, disponible y con stock\nCarrito vacío (producto no agregado)\nViewport Desktop 1280x900",
   "screenshots": [
    {
     "caption": "Paso 1 — shelf con cucarda en estado normal",
     "file": "TC-65-D-006-p01-shelf-con-cucarda-en-estado-normal.png"
    },
    {
     "caption": "Paso 2 — cucarda cyber en dx 8 dy 3",
     "file": "TC-65-D-006-p02-cucarda-cyber-en-dx-8-dy-3.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-65-D-006.png"
    }
   ],
   "spec": "tests/B2C-65.spec.ts",
   "status": "Aprobado",
   "steps": "1. Navegar a la PLP con el producto con cucarda (carrito vacío).\n2. Verificar que el producto muestra el botón \"Agregar\" (estado normal).\n3. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen.\n4. Verificar posición, texto y colores de la cucarda.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n{SKU_CYBER} = 000000000000028616-KGV",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "duration_s": 187.7,
   "executed_at": "2026-10-19",
   "expected": "La cucarda se muestra en la misma posición y con el mismo estilo en el estado 'en carro'. Los controles de cantidad no ocultan ni desplazan la cucarda.",
   "form_factor": "desktop",
   "id": "TC-65-D-007",
   "name": "Cucarda visible en estado 'en carro' (controles de cantidad visibles)",
   "observation": "Causa: el caso excede el tiempo de ejecución (timeouts de 180 s al ubicar el elemento en el ambiente). Acción: revisar el rendimiento del ambiente o el producto declarado y re-ejecutar.",
   "observed": "Causa: el caso excede el tiempo de ejecución (timeouts de 180 s al ubicar el elemento en el ambiente). Acción: revisar el rendimiento del ambiente o el producto declarado y re-ejecutar.",
   "preconditions": "User type: Guest\nProducto con cucarda configurada y con stock\n1 unidad del producto ya agregada al carrito (shelf muestra controles +/−)\nViewport Desktop 1280x900",
   "spec": "tests/B2C-65.spec.ts",
   "status": "Bloqueado",
   "steps": "1. Navegar a la PLP (el producto ya tiene 1 unidad en el carrito).\n2. Verificar que la shelf muestra los controles de cantidad (+/−) y el contador.\n3. Verificar que la cucarda sigue apareciendo en la esquina superior izquierda de la imagen.\n4. Verificar que la cucarda no se oculta ni se desplaza por los controles de cantidad.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n{SKU_CYBER} = 000000000000028616-KGV",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "La cucarda se muestra en la misma posición y estilo en el estado 'sin stock'. La etiqueta \"Pronto disponible\" y la cucarda coexisten sin solapamiento.",
   "form_factor": "desktop",
   "id": "TC-65-D-008",
   "name": "Cucarda visible en estado 'sin stock' (etiqueta 'Pronto disponible')",
   "observation": "Causa: el SKU declarado {SKU_SIN_STOCK} (000000000000029403-KG) tiene stock en el ambiente (muestra 'Agregar', sin 'Pronto disponible') y no tiene cucarda configurada. Acción: cargar un SKU sin stock y con cucarda en el Excel de data.",
   "observed": "Causa: el SKU declarado {SKU_SIN_STOCK} (000000000000029403-KG) tiene stock en el ambiente (muestra 'Agregar', sin 'Pronto disponible') y no tiene cucarda configurada. Acción: cargar un SKU sin stock y con cucarda en el Excel de data.",
   "preconditions": "User type: Guest\nProducto con cucarda configurada y sin stock para el método de entrega activo\nViewport Desktop 1280x900",
   "spec": "tests/B2C-65.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a la PLP con el producto sin stock.\n2. Verificar que la shelf muestra la etiqueta \"Pronto disponible\" y sin botón \"Agregar\".\n3. Verificar que la cucarda sigue apareciendo en la esquina superior izquierda de la imagen.\n4. Verificar que la cucarda no se oculta por la etiqueta de sin stock.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n{SKU_SIN_STOCK} = 000000000000029403-KG",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "duration_s": 65.1,
   "executed_at": "2026-10-19",
   "expected": "El texto de la cucarda aparece truncado con \"...\" al exceder 20 caracteres en Desktop. El layout de la shelf no se rompe. La cucarda mantiene su posición y dimensiones correctas.",
   "form_factor": "desktop",
   "id": "TC-65-D-009",
   "name": "Texto de cucarda >20 caracteres se trunca con '...' en Desktop",
   "observation": "Esperado: texto >20 caracteres truncado con '...'. Obtenido: la cucarda de {SKU_CUCARDA_LARGA} muestra completo 'Promoción Lleva 2 unidades por Monto' (36 caracteres) con text-overflow clip, sin '...'; además la cucarda de 180 px se cruza con el botón Favoritos. B2C-65.spec.ts:501.",
   "observed": "Texto completo sin puntos suspensivos y cucarda solapando Favoritos.",
   "preconditions": "User type: Guest\nProducto con Label_Texto de más de 20 caracteres (ej. \"Club Unimarc Exclusivo!\") configurado\nViewport Desktop 1280x900",
   "screenshots": [
    {
     "caption": "Paso 1 — shelf del sku 000000000000666285 un",
     "file": "TC-65-D-009-p01-shelf-del-sku-000000000000666285-un.png"
    },
    {
     "caption": "Paso 2 — cucarda de 36 caracteres",
     "file": "TC-65-D-009-p02-cucarda-de-36-caracteres.png"
    },
    {
     "caption": "Estado al fallar la aserción",
     "file": "TC-65-D-009.png"
    }
   ],
   "spec": "tests/B2C-65.spec.ts",
   "status": "Rechazado",
   "steps": "1. Navegar a la PLP con el producto que tiene Label_Texto de más de 20 caracteres.\n2. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen.\n3. Verificar que el texto visible está truncado con \"...\" y no supera los 20 caracteres visibles.\n4. Verificar que la cucarda no rompe el layout del shelf ni se desborda.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n{SKU_CUCARDA_LARGA} = 000000000000666285-UN",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "duration_s": 38.3,
   "executed_at": "2026-10-19",
   "expected": "La cucarda se muestra en la shelf simplificada del modal de buscador con el mismo comportamiento que en la shelf de navegación: posición superior izquierda, texto y colores correctos.",
   "form_factor": "desktop",
   "id": "TC-65-D-010",
   "name": "Cucarda visible en shelf simplificada dentro de modal de buscador",
   "observation": "Causa: con el término declarado en {SRP_URL} ('carne') el modal del buscador no incluye el SKU {SKU_CYBER} entre sus resultados (sí aparece en la SRP completa), por lo que el producto con cucarda no es alcanzable con la data del TC. Acción: declarar en la planilla un término que devuelva el producto en el modal.",
   "observed": "Causa: con el término declarado en {SRP_URL} ('carne') el modal del buscador no incluye el SKU {SKU_CYBER} entre sus resultados (sí aparece en la SRP completa), por lo que el producto con cucarda no es alcanzable con la data del TC. Acción: declarar en la planilla un término que devuelva el producto en el modal.",
   "preconditions": "User type: Guest\nProducto con cucarda configurada (Label_Activo=true, Label_Texto, colores)\nModal de buscador activo con el producto en los resultados\nViewport Desktop 1280x900",
   "spec": "tests/B2C-65.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. Abrir el modal de buscador e ingresar un término que devuelva el producto con cucarda.\n2. Localizar la shelf simplificada del producto en los resultados del modal.\n3. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen.\n4. Verificar que texto y colores son consistentes con la configuración en BM.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{SKU_CYBER} = 000000000000028616-KGV\n{SRP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/search?q=carne",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "duration_s": 73.7,
   "executed_at": "2026-10-19",
   "expected": "La cucarda muestra el mismo texto, colores e ícono en Desktop y Mobile. El tamaño del componente se adapta a cada canal respetando el Design System Super DS. No hay diferencias de contenido entre canales.",
   "form_factor": "desktop",
   "id": "TC-65-D-011",
   "name": "Cucarda muestra mismo texto, colores e ícono en Desktop y Mobile",
   "observed": "En Desktop y Mobile los mismos 3 productos de la PLP llevan cucarda con el mismo texto y colores; el tamaño se adapta al canal.",
   "preconditions": "User type: Guest\nProducto con cucarda configurada con Label_Texto, Label_ColorTexto, Label_ColorFondo y Label_Icono\nAcceso a la PLP en Desktop 1280x900 y en Mobile 390x844",
   "screenshots": [
    {
     "caption": "Paso 1 — plp en desktop 1280x900",
     "file": "TC-65-D-011-p01-plp-en-desktop-1280x900.png"
    },
    {
     "caption": "Paso 2 — misma plp en mobile 390x844",
     "file": "TC-65-D-011-p02-misma-plp-en-mobile-390x844.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-65-D-011.png"
    }
   ],
   "spec": "tests/B2C-65.spec.ts",
   "status": "Aprobado",
   "steps": "1. Navegar a la PLP con el producto con cucarda en Desktop 1280x900.\n2. Registrar texto, color de texto, color de fondo e ícono de la cucarda.\n3. Cambiar la visualización a Mobile 390x844 (o acceder desde dispositivo móvil).\n4. Navegar a la misma PLP y localizar el producto.\n5. Verificar que texto, colores e ícono son idénticos en ambos viewports.\n6. Verificar que el tamaño del componente se adapta al canal.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "duration_s": 134.5,
   "executed_at": "2026-10-19",
   "expected": "La cucarda se muestra sobre la imagen placeholder en la esquina superior izquierda. El estilo visual (texto, colores) es el mismo que sobre una imagen real de producto.",
   "form_factor": "desktop",
   "id": "TC-65-D-012",
   "name": "Cucarda visible sobre imagen placeholder cuando el producto no tiene imagen válida",
   "observation": "Causa: el caso excede el tiempo de ejecución (timeouts de 180 s al ubicar el elemento en el ambiente). Acción: revisar el rendimiento del ambiente o el producto declarado y re-ejecutar. La simulación de imagen inválida no logró mostrar el placeholder sobre un producto con cucarda, por lo que no hay veredicto sobre el producto.",
   "observed": "Causa: el caso excede el tiempo de ejecución (timeouts de 180 s al ubicar el elemento en el ambiente). Acción: revisar el rendimiento del ambiente o el producto declarado y re-ejecutar. La simulación de imagen inválida no logró mostrar el placeholder sobre un producto con cucarda, por lo que no hay veredicto sobre el producto.",
   "preconditions": "User type: Guest\nProducto con cucarda configurada y sin imagen válida (muestra imagen placeholder)\nProducto visible en la PLP\nViewport Desktop 1280x900",
   "spec": "tests/B2C-65.spec.ts",
   "status": "Bloqueado",
   "steps": "1. Navegar a la PLP con el producto sin imagen válida (muestra placeholder).\n2. Verificar que la imagen del producto muestra el placeholder configurado.\n3. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen placeholder.\n4. Verificar que el texto y colores de la cucarda son los configurados en BM.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno",
   "viewport": "1280x900"
  },
  {
   "browser": "webkit",
   "duration_s": 65.6,
   "executed_at": "2026-10-19",
   "expected": "La cucarda se muestra en la esquina superior izquierda de la imagen en Mobile. Texto, colores e ícono son consistentes con la configuración en BM.",
   "form_factor": "mobile",
   "id": "TC-65-M-001",
   "name": "Cucarda visible en PLP con posición y estilo configurados",
   "observed": "Igual que en Desktop, en Mobile: cucarda 'Cyber' arriba a la izquierda, sin cruzar Favoritos.",
   "preconditions": "User type: Guest\nProducto con cucarda configurada (Label_Activo=true, Label_Texto, colores)\nProducto disponible en una PLP\nViewport Mobile 390x844",
   "screenshots": [
    {
     "caption": "Paso 1 — plp declarada",
     "file": "TC-65-M-001-p01-plp-declarada.png"
    },
    {
     "caption": "Paso 2 — shelf del sku 000000000000028616 kgv",
     "file": "TC-65-M-001-p02-shelf-del-sku-000000000000028616-kgv.png"
    },
    {
     "caption": "Paso 3 — cucarda en dx 8 dy 3",
     "file": "TC-65-M-001-p03-cucarda-en-dx-8-dy-3.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-65-M-001.png"
    }
   ],
   "spec": "tests/B2C-65.spec.ts",
   "status": "Aprobado",
   "steps": "1. Navegar a la PLP en Mobile con el producto con cucarda configurada.\n2. Localizar el producto en la grilla.\n3. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen.\n4. Verificar que texto, colores e ícono coinciden con los atributos Label en BM.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n{SKU_CYBER} = 000000000000028616-KGV",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 88.1,
   "executed_at": "2026-10-19",
   "expected": "La cucarda se muestra en la shelf del producto en el SRP/buscador en Mobile. Posición, texto y colores son consistentes con la configuración en BM.",
   "form_factor": "mobile",
   "id": "TC-65-M-002",
   "name": "Cucarda visible en SRP (buscador) con estilo configurado",
   "observation": "El término de búsqueda se derivó del nombre del SKU declarado (la fila no declara término).",
   "observed": "Desde el buscador Mobile se llega a la SRP; el SKU declarado muestra la cucarda 'Cyber' arriba a la izquierda.",
   "preconditions": "User type: Guest\nProducto con cucarda configurada indexado y visible en resultados del buscador\nViewport Mobile 390x844",
   "screenshots": [
    {
     "caption": "Paso 1 — resultados de tapapecho vacuno nacional",
     "file": "TC-65-M-002-p01-resultados-de-tapapecho-vacuno-nacional.png"
    },
    {
     "caption": "Paso 2 — shelf del producto en la srp",
     "file": "TC-65-M-002-p02-shelf-del-producto-en-la-srp.png"
    },
    {
     "caption": "Paso 3 — cucarda cyber en dx 8 dy 3",
     "file": "TC-65-M-002-p03-cucarda-cyber-en-dx-8-dy-3.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-65-M-002.png"
    }
   ],
   "spec": "tests/B2C-65.spec.ts",
   "status": "Aprobado",
   "steps": "1. Abrir el buscador en Mobile e ingresar un término que devuelva el producto con cucarda.\n2. Localizar el producto en los resultados.\n3. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen.\n4. Verificar que texto y colores coinciden con los configurados.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n{SKU_CYBER} = 000000000000028616-KGV",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-19",
   "expected": "La cucarda se muestra en carruseles y Colecciones en Mobile con posición, texto y colores correctos.",
   "form_factor": "mobile",
   "id": "TC-65-M-003",
   "name": "Cucarda visible en Carrusel y Colecciones con estilo configurado",
   "observation": "Causa: el paso 3 exige una página de Colecciones que la fila no declara (solo {BASE_URL} y {SKU_CUCARDA}). Acción: declarar la URL de la colección con el producto.",
   "observed": "Causa: el paso 3 exige una página de Colecciones que la fila no declara (solo {BASE_URL} y {SKU_CUCARDA}). Acción: declarar la URL de la colección con el producto.",
   "preconditions": "User type: Guest\nProducto con cucarda visible en un carrusel del Home o en una página de Colección\nViewport Mobile 390x844",
   "spec": "tests/B2C-65.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. Navegar al Home en Mobile y localizar el carrusel con el producto con cucarda.\n2. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen en el carrusel.\n3. Navegar a una página de Colecciones con el producto y verificar la cucarda.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{SKU_CUCARDA} = 000000000000028616-KGV",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 64.2,
   "executed_at": "2026-10-19",
   "expected": "Solo se muestra 1 cucarda en la shelf del producto en Mobile. La cucarda y el botón Favoritos no se solapan visualmente.",
   "form_factor": "mobile",
   "id": "TC-65-M-004",
   "name": "Máximo 1 cucarda por producto — no se superpone con botón Favoritos",
   "observed": "Una sola cucarda a la izquierda y Favoritos a la derecha, sin solapamiento, en Mobile.",
   "preconditions": "User type: Guest\nProducto con cucarda configurada en la PLP\nViewport Mobile 390x844",
   "screenshots": [
    {
     "caption": "Paso 1 — shelf del producto con cucarda",
     "file": "TC-65-M-004-p01-shelf-del-producto-con-cucarda.png"
    },
    {
     "caption": "Paso 2 — cucarda a la izquierda y favoritos a la derecha",
     "file": "TC-65-M-004-p02-cucarda-a-la-izquierda-y-favoritos-a-la-derecha.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-65-M-004.png"
    }
   ],
   "spec": "tests/B2C-65.spec.ts",
   "status": "Aprobado",
   "steps": "1. Navegar a la PLP en Mobile con el producto con cucarda.\n2. Verificar que solo aparece 1 cucarda en la shelf del producto.\n3. Verificar que la cucarda (izquierda) y el botón Favoritos (derecha) no se solapan.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n{SKU_CYBER} = 000000000000028616-KGV",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 66.0,
   "executed_at": "2026-10-19",
   "expected": "La cucarda se muestra en la shelf del producto en estado normal en Mobile, con posición, texto y colores correctos.",
   "form_factor": "mobile",
   "id": "TC-65-M-006",
   "name": "Cucarda visible en estado normal (producto disponible, no en carro)",
   "observation": "Mobile no declara SKU: se tomó el primer producto con cucarda de la PLP declarada.",
   "observed": "Producto con 'Agregar' y cucarda en la esquina superior izquierda.",
   "preconditions": "User type: Guest\nProducto con cucarda, disponible y con stock · Carrito vacío\nViewport Mobile 390x844",
   "screenshots": [
    {
     "caption": "Paso 1 — shelf con cucarda en estado normal",
     "file": "TC-65-M-006-p01-shelf-con-cucarda-en-estado-normal.png"
    },
    {
     "caption": "Paso 2 — cucarda cyber en dx 8 dy 3",
     "file": "TC-65-M-006-p02-cucarda-cyber-en-dx-8-dy-3.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-65-M-006.png"
    }
   ],
   "spec": "tests/B2C-65.spec.ts",
   "status": "Aprobado",
   "steps": "1. Navegar a la PLP en Mobile (carrito vacío, producto disponible).\n2. Verificar que el producto muestra el botón \"Agregar\" (estado normal).\n3. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 184.8,
   "executed_at": "2026-10-19",
   "expected": "La cucarda se mantiene visible en el estado 'en carro' en Mobile. Los controles de cantidad no ocultan ni desplazan la cucarda.",
   "form_factor": "mobile",
   "id": "TC-65-M-007",
   "name": "Cucarda visible en estado 'en carro' (controles de cantidad visibles)",
   "observation": "Causa: el caso excede el tiempo de ejecución (timeouts de 180 s al ubicar el elemento en el ambiente). Acción: revisar el rendimiento del ambiente o el producto declarado y re-ejecutar.",
   "observed": "Causa: el caso excede el tiempo de ejecución (timeouts de 180 s al ubicar el elemento en el ambiente). Acción: revisar el rendimiento del ambiente o el producto declarado y re-ejecutar.",
   "preconditions": "User type: Guest\nProducto con cucarda y 1 unidad ya en el carrito\nViewport Mobile 390x844",
   "spec": "tests/B2C-65.spec.ts",
   "status": "Bloqueado",
   "steps": "1. Navegar a la PLP en Mobile (producto ya tiene 1 unidad en el carrito).\n2. Verificar que la shelf muestra controles de cantidad (+/−).\n3. Verificar que la cucarda sigue apareciendo en la esquina superior izquierda.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-19",
   "expected": "La cucarda se muestra en la shelf del producto sin stock en Mobile. \"Pronto disponible\" y la cucarda coexisten sin solapamiento.",
   "form_factor": "mobile",
   "id": "TC-65-M-008",
   "name": "Cucarda visible en estado 'sin stock' (etiqueta 'Pronto disponible')",
   "observation": "Causa: el SKU declarado {SKU_SIN_STOCK} (000000000000029403-KG) tiene stock en el ambiente (muestra 'Agregar', sin 'Pronto disponible') y no tiene cucarda configurada. Acción: cargar un SKU sin stock y con cucarda en el Excel de data.",
   "observed": "Causa: el SKU declarado {SKU_SIN_STOCK} (000000000000029403-KG) tiene stock en el ambiente (muestra 'Agregar', sin 'Pronto disponible') y no tiene cucarda configurada. Acción: cargar un SKU sin stock y con cucarda en el Excel de data.",
   "preconditions": "User type: Guest\nProducto con cucarda configurada y sin stock\nViewport Mobile 390x844",
   "spec": "tests/B2C-65.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. Navegar a la PLP en Mobile con el producto sin stock.\n2. Verificar que la shelf muestra la etiqueta \"Pronto disponible\".\n3. Verificar que la cucarda sigue apareciendo en la esquina superior izquierda de la imagen.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n{SKU_SIN_STOCK} = 000000000000029403-KG",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 67.4,
   "executed_at": "2026-10-19",
   "expected": "El texto de la cucarda aparece truncado con \"...\" al exceder 15 caracteres en Mobile. El layout del shelf no se rompe. La cucarda mantiene su posición y dimensiones correctas.",
   "form_factor": "mobile",
   "id": "TC-65-M-009",
   "name": "Texto de cucarda >15 caracteres se trunca con '...' en Mobile",
   "observation": "Esperado: texto >15 caracteres truncado con '...'. Obtenido: la cucarda de {SKU_CUCARDA_LARGA} muestra 'Promoción Lleva 2 unidades por Monto' (36 caracteres) sin '...'; la cucarda mide 153 px, se sale del borde derecho de la imagen y cubre Favoritos. B2C-65.spec.ts:516.",
   "observed": "Texto sin puntos suspensivos, cucarda desborda la imagen y tapa Favoritos.",
   "preconditions": "User type: Guest\nProducto con Label_Texto de más de 15 caracteres (ej. \"Club Unimarc Exclusivo!\") configurado\nViewport Mobile 390x844",
   "screenshots": [
    {
     "caption": "Paso 1 — shelf del sku 000000000000666285 un",
     "file": "TC-65-M-009-p01-shelf-del-sku-000000000000666285-un.png"
    },
    {
     "caption": "Paso 2 — cucarda de 36 caracteres",
     "file": "TC-65-M-009-p02-cucarda-de-36-caracteres.png"
    },
    {
     "caption": "Estado al fallar la aserción",
     "file": "TC-65-M-009.png"
    }
   ],
   "spec": "tests/B2C-65.spec.ts",
   "status": "Rechazado",
   "steps": "1. Navegar a la PLP en Mobile con el producto que tiene Label_Texto de más de 15 caracteres.\n2. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen.\n3. Verificar que el texto visible está truncado con \"...\" y no supera los 15 caracteres.\n4. Verificar que el layout del shelf no se rompe.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n{SKU_CUCARDA_LARGA} = 000000000000666285-UN",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 31.0,
   "executed_at": "2026-10-19",
   "expected": "La cucarda se muestra en la shelf simplificada del modal en Mobile con posición, texto y colores correctos.",
   "form_factor": "mobile",
   "id": "TC-65-M-010",
   "name": "Cucarda visible en shelf simplificada dentro de modal de buscador",
   "observation": "El término se derivó del nombre del SKU declarado.",
   "observed": "La shelf simplificada del modal muestra la cucarda 'Cyber' arriba a la izquierda sin tapar Favoritos.",
   "preconditions": "User type: Guest\nProducto con cucarda configurada en los resultados del modal de buscador\nViewport Mobile 390x844",
   "screenshots": [
    {
     "caption": "Paso 1 — modal de buscador con tapapecho vacuno nacional",
     "file": "TC-65-M-010-p01-modal-de-buscador-con-tapapecho-vacuno-nacional.png"
    },
    {
     "caption": "Paso 2 — shelf simplificada del producto",
     "file": "TC-65-M-010-p02-shelf-simplificada-del-producto.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-65-M-010.png"
    }
   ],
   "spec": "tests/B2C-65.spec.ts",
   "status": "Aprobado",
   "steps": "1. Abrir el modal de buscador en Mobile con el producto con cucarda en los resultados.\n2. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen en la shelf simplificada.\n3. Verificar que texto y colores son consistentes con la configuración en BM.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{SKU_CYBER} = 000000000000028616-KGV\n{SRP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/search?q=carne",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 84.2,
   "executed_at": "2026-10-19",
   "expected": "La cucarda muestra el mismo contenido en Mobile que en Desktop. El componente se adapta al tamaño del viewport Mobile respetando el Design System Super DS.",
   "form_factor": "mobile",
   "id": "TC-65-M-011",
   "name": "Cucarda muestra mismo texto, colores e ícono en Desktop y Mobile",
   "observed": "En Desktop y Mobile los mismos 3 productos de la PLP llevan cucarda con el mismo texto y colores; el tamaño se adapta al canal.",
   "preconditions": "User type: Guest\nProducto con cucarda configurada con Label_Texto, colores e ícono\nAcceso a la PLP en Desktop 1280x900 y Mobile 390x844",
   "screenshots": [
    {
     "caption": "Paso 1 — plp en mobile 390x844",
     "file": "TC-65-M-011-p01-plp-en-mobile-390x844.png"
    },
    {
     "caption": "Paso 2 — misma plp en desktop 1280x900",
     "file": "TC-65-M-011-p02-misma-plp-en-desktop-1280x900.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-65-M-011.png"
    }
   ],
   "spec": "tests/B2C-65.spec.ts",
   "status": "Aprobado",
   "steps": "1. Navegar a la PLP con el producto en Desktop y registrar texto, colores e ícono de la cucarda.\n2. Navegar a la misma PLP en Mobile 390x844.\n3. Verificar que texto, colores e ícono son idénticos al de Desktop.\n4. Verificar que el tamaño del componente se adapta al viewport Mobile.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno",
   "viewport": "1280x900"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-19",
   "expected": "La cucarda se muestra sobre la imagen placeholder en Mobile con el mismo estilo que sobre una imagen real de producto.",
   "form_factor": "mobile",
   "id": "TC-65-M-012",
   "name": "Cucarda visible sobre imagen placeholder cuando el producto no tiene imagen válida",
   "observation": "Causa: el caso excede el tiempo de ejecución (timeouts de 180 s al ubicar el elemento en el ambiente). Acción: revisar el rendimiento del ambiente o el producto declarado y re-ejecutar. (sin veredicto: la corrida se detuvo antes de ejecutarlo).",
   "observed": "Causa: el caso excede el tiempo de ejecución (timeouts de 180 s al ubicar el elemento en el ambiente). Acción: revisar el rendimiento del ambiente o el producto declarado y re-ejecutar. (sin veredicto: la corrida se detuvo antes de ejecutarlo).",
   "preconditions": "User type: Guest\nProducto con cucarda y sin imagen válida (muestra placeholder)\nViewport Mobile 390x844",
   "spec": "tests/B2C-65.spec.ts",
   "status": "Bloqueado",
   "steps": "1. Navegar a la PLP en Mobile con el producto sin imagen válida (muestra placeholder).\n2. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen placeholder.\n3. Verificar que texto y colores son los configurados en BM.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "La cucarda se muestra correctamente para usuario logueado con el mismo comportamiento que para usuario Guest: posición, texto y colores correctos.",
   "form_factor": "desktop",
   "id": "TC-65-D-013",
   "name": "Cucarda visible en PLP para usuario logueado",
   "observed": "La cucarda 'Cyber' se ve arriba a la izquierda de la imagen con el usuario logueado, igual que como invitado (dx 8, dy 3), con colores de texto y fondo propios. El valor exacto configurado en BM no se lee desde el storefront.",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nProducto con cucarda configurada en la PLP\nViewport Desktop 1280x900",
   "screenshots": [
    {
     "caption": "Paso 1 — plp declarada",
     "file": "TC-65-D-013-p01-plp-declarada.png"
    },
    {
     "caption": "Paso 2 — shelf del sku 000000000000028616 kgv",
     "file": "TC-65-D-013-p02-shelf-del-sku-000000000000028616-kgv.png"
    },
    {
     "caption": "Paso 3 — cucarda en dx 8 dy 3",
     "file": "TC-65-D-013-p03-cucarda-en-dx-8-dy-3.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-65-D-013.png"
    }
   ],
   "spec": "tests/B2C-65.spec.ts",
   "status": "Aprobado",
   "steps": "1. Iniciar sesión con cuenta de cliente registrado.\n2. Navegar a la PLP con el producto con cucarda configurada.\n3. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen.\n4. Verificar que texto y colores son consistentes con la configuración en BM.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta de comprador)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "La cucarda se muestra correctamente en Mobile para usuario logueado, con el mismo comportamiento que para usuario Guest.",
   "form_factor": "mobile",
   "id": "TC-65-M-013",
   "name": "Cucarda visible en PLP para usuario logueado",
   "observed": "La cucarda 'Cyber' se ve arriba a la izquierda de la imagen en Mobile con el usuario logueado, igual que como invitado. El valor exacto configurado en BM no se lee desde el storefront.",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nProducto con cucarda configurada en la PLP\nViewport Mobile 390x844",
   "screenshots": [
    {
     "caption": "Paso 1 — plp declarada",
     "file": "TC-65-M-013-p01-plp-declarada.png"
    },
    {
     "caption": "Paso 2 — shelf del sku 000000000000028616 kgv",
     "file": "TC-65-M-013-p02-shelf-del-sku-000000000000028616-kgv.png"
    },
    {
     "caption": "Paso 3 — cucarda en dx 8 dy 3",
     "file": "TC-65-M-013-p03-cucarda-en-dx-8-dy-3.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-65-M-013.png"
    }
   ],
   "spec": "tests/B2C-65.spec.ts",
   "status": "Aprobado",
   "steps": "1. Iniciar sesión con cuenta de cliente registrado en Mobile.\n2. Navegar a la PLP con el producto con cucarda.\n3. Verificar que la cucarda aparece en la esquina superior izquierda de la imagen.\n4. Verificar texto y colores consistentes con BM.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta de comprador)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "La cucarda se muestra en la misma posición y con el mismo estilo en los tres estados de la shelf para usuario logueado. No se oculta ni desplaza en ningún estado.",
   "form_factor": "desktop",
   "id": "TC-65-D-014",
   "name": "Cucarda consistente en todos los estados de la shelf para usuario logueado",
   "observation": "Causa: el paso 4 pide un producto con cucarda y sin stock y la fila no declara ninguno ({SKU_SIN_STOCK} no está en su Test data y en el ambiente tiene stock). Los pasos 2 y 3 (estado normal y 'en carro') se ejecutaron con la cuenta de comprador y la cucarda se mantuvo igual. Acción: declarar en la fila un producto con cucarda y sin stock.",
   "observed": "Causa: el paso 4 pide un producto con cucarda y sin stock y la fila no declara ninguno ({SKU_SIN_STOCK} no está en su Test data y en el ambiente tiene stock). Los pasos 2 y 3 (estado normal y 'en carro') se ejecutaron con la cuenta de comprador y la cucarda se mantuvo igual. Acción: declarar en la fila un producto con cucarda y sin stock.",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nProducto con cucarda configurada, con stock\nViewport Desktop 1280x900",
   "screenshots": [
    {
     "caption": "Paso 1 — shelf antes de agregar",
     "file": "TC-65-D-014-p01-shelf-antes-de-agregar.png"
    },
    {
     "caption": "Paso 2 — shelf con controles de cantidad",
     "file": "TC-65-D-014-p02-shelf-con-controles-de-cantidad.png"
    },
    {
     "caption": "Paso 3 — cucarda intacta en el estado en carro",
     "file": "TC-65-D-014-p03-cucarda-intacta-en-el-estado-en-carro.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-65-D-014.png"
    }
   ],
   "spec": "tests/B2C-65.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. Iniciar sesión con cuenta de cliente registrado.\n2. Navegar a la PLP (producto sin agregar) → verificar cucarda en estado normal.\n3. Agregar el producto al carrito → verificar cucarda en estado 'en carro'.\n4. Con producto sin stock → verificar cucarda en estado 'sin stock' (etiqueta 'Pronto disponible').",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta de comprador)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "La cucarda se muestra en los tres estados de la shelf en Mobile para usuario logueado, con posición y estilo consistentes.",
   "form_factor": "mobile",
   "id": "TC-65-M-014",
   "name": "Cucarda consistente en todos los estados de la shelf para usuario logueado",
   "observation": "Causa: el paso 4 pide un producto con cucarda y sin stock y la fila no declara ninguno ({SKU_SIN_STOCK} no está en su Test data y en el ambiente tiene stock). Los pasos 2 y 3 (estado normal y 'en carro') se ejecutaron con la cuenta de comprador y la cucarda se mantuvo igual. Acción: declarar en la fila un producto con cucarda y sin stock. En Mobile, además, el estado normal no pudo comprobarse: el producto ya estaba en el carro de la misma cuenta por la corrida Desktop (el botón 'Agregar' no aparece).",
   "observed": "Causa: el paso 4 pide un producto con cucarda y sin stock y la fila no declara ninguno ({SKU_SIN_STOCK} no está en su Test data y en el ambiente tiene stock). Los pasos 2 y 3 (estado normal y 'en carro') se ejecutaron con la cuenta de comprador y la cucarda se mantuvo igual. Acción: declarar en la fila un producto con cucarda y sin stock. En Mobile, además, el estado normal no pudo comprobarse: el producto ya estaba en el carro de la misma cuenta por la corrida Desktop (el botón 'Agregar' no aparece).",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nProducto con cucarda, disponible y con stock\nViewport Mobile 390x844",
   "spec": "tests/B2C-65.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. Iniciar sesión en Mobile.\n2. Navegar a la PLP (sin agregar) → verificar cucarda en estado normal.\n3. Agregar producto → verificar cucarda en estado 'en carro'.\n4. Con producto sin stock → verificar cucarda en estado 'sin stock'.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta de comprador)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "La shelf del producto muestra el label de la promoción (no el de la categoría). El texto, colores e ícono corresponden a los atributos configurados en la promoción, confirmando la priorización: promoción > categoría.",
   "form_factor": "desktop",
   "id": "TC-65-D-015",
   "name": "Priorización: label de promoción tiene precedencia sobre label de categoría en storefront",
   "observation": "Causa: la precondición pide un producto con label de categoría y de promoción configurados y los jobs ejecutados, y la fila solo declara {BASE_URL}, {COMPRADOR_USER}, {COMPRADOR_PASSWORD} y {PLP_URL}: no dice qué producto. Acción: declarar en la fila el producto (token) que cumple la precondición.",
   "observed": "Causa: la precondición pide un producto con label de categoría y de promoción configurados y los jobs ejecutados, y la fila solo declara {BASE_URL}, {COMPRADOR_USER}, {COMPRADOR_PASSWORD} y {PLP_URL}: no dice qué producto. Acción: declarar en la fila el producto (token) que cumple la precondición.",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nProducto en una subcategoría con Label_Activo=true (label de categoría configurado)\nMismo producto elegible a una promoción con Label_Activo=true (label de promoción configurado, texto diferente)\nJOB1 y JOB2 ejecutados para aplicar ambos labels\nViewport Desktop 1280x900",
   "spec": "tests/B2C-65.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. Iniciar sesión con cuenta de cliente registrado.\n2. Navegar a la PLP con el producto que tiene configurados tanto label de categoría como de promoción.\n3. Verificar el texto de la cucarda mostrada en la shelf del producto.\n4. Comparar el texto con el Label_Texto de la promoción y el Label_Texto de la categoría.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta de comprador)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "La shelf en Mobile muestra el label de la promoción (mayor prioridad). El label de la categoría no se muestra.",
   "form_factor": "mobile",
   "id": "TC-65-M-015",
   "name": "Priorización: label de promoción tiene precedencia sobre label de categoría en storefront",
   "observation": "Causa: la precondición pide un producto con label de categoría y de promoción configurados y los jobs ejecutados, y la fila solo declara {BASE_URL}, {COMPRADOR_USER}, {COMPRADOR_PASSWORD} y {PLP_URL}: no dice qué producto. Acción: declarar en la fila el producto (token) que cumple la precondición.",
   "observed": "Causa: la precondición pide un producto con label de categoría y de promoción configurados y los jobs ejecutados, y la fila solo declara {BASE_URL}, {COMPRADOR_USER}, {COMPRADOR_PASSWORD} y {PLP_URL}: no dice qué producto. Acción: declarar en la fila el producto (token) que cumple la precondición.",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nProducto con label de categoría y label de promoción configurados (JOB1 y JOB2 ejecutados)\nViewport Mobile 390x844",
   "spec": "tests/B2C-65.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. Iniciar sesión en Mobile.\n2. Navegar a la PLP con el producto con ambos labels configurados.\n3. Verificar el texto de la cucarda mostrada.\n4. Confirmar que corresponde al Label_Texto de la promoción y no de la categoría.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta de comprador)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "La shelf muestra el label de la promoción de membresía (máxima prioridad). El texto e ícono corresponden a los atributos de la promo de membresía. Los labels de Unipay, BancoEstado y % dcto no se muestran (solo 1 cucarda por producto).",
   "form_factor": "desktop",
   "id": "TC-65-D-016",
   "name": "Priorización entre labels de promoción: membresía > Unipay > BancoEstado > % dcto en storefront",
   "observation": "Causa: la precondición pide un producto con varias promociones con label (membresía, Unipay, BancoEstado y % dcto) configurados y los jobs ejecutados, y la fila solo declara {BASE_URL}, {COMPRADOR_USER}, {COMPRADOR_PASSWORD} y {PLP_URL}: no dice qué producto. Acción: declarar en la fila el producto (token) que cumple la precondición.",
   "observed": "Causa: la precondición pide un producto con varias promociones con label (membresía, Unipay, BancoEstado y % dcto) configurados y los jobs ejecutados, y la fila solo declara {BASE_URL}, {COMPRADOR_USER}, {COMPRADOR_PASSWORD} y {PLP_URL}: no dice qué producto. Acción: declarar en la fila el producto (token) que cumple la precondición.",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nProducto elegible para múltiples promos con label activo: membresía, Unipay, BancoEstado y % descuento\nJOB2 ejecutado para aplicar todos los labels\nViewport Desktop 1280x900",
   "spec": "tests/B2C-65.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. Iniciar sesión con cuenta de cliente registrado.\n2. Navegar a la PLP con el producto elegible a las múltiples promociones.\n3. Verificar el texto de la cucarda mostrada en la shelf.\n4. Confirmar que el texto corresponde al Label_Texto de la promoción de membresía (mayor prioridad).",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta de comprador)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "La shelf en Mobile muestra el label de la promo de membresía (mayor prioridad). Labels de Unipay, BancoEstado y % dcto no se muestran.",
   "form_factor": "mobile",
   "id": "TC-65-M-016",
   "name": "Priorización entre labels de promoción: membresía > Unipay > BancoEstado > % dcto en storefront",
   "observation": "Causa: la precondición pide un producto con varias promociones con label (membresía, Unipay, BancoEstado y % dcto) configurados y los jobs ejecutados, y la fila solo declara {BASE_URL}, {COMPRADOR_USER}, {COMPRADOR_PASSWORD} y {PLP_URL}: no dice qué producto. Acción: declarar en la fila el producto (token) que cumple la precondición.",
   "observed": "Causa: la precondición pide un producto con varias promociones con label (membresía, Unipay, BancoEstado y % dcto) configurados y los jobs ejecutados, y la fila solo declara {BASE_URL}, {COMPRADOR_USER}, {COMPRADOR_PASSWORD} y {PLP_URL}: no dice qué producto. Acción: declarar en la fila el producto (token) que cumple la precondición.",
   "preconditions": "User type: Logueado\nCuenta de cliente registrado con sesión activa\nProducto elegible a múltiples promos con label: membresía, Unipay, BancoEstado y % dcto (JOB2 ejecutado)\nViewport Mobile 390x844",
   "spec": "tests/B2C-65.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. Iniciar sesión en Mobile.\n2. Navegar a la PLP con el producto elegible a múltiples promociones.\n3. Verificar el texto de la cucarda.\n4. Confirmar que corresponde al label de la promo de membresía.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta de comprador)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno",
   "viewport": "390x844"
  }
 ]
}
-->
