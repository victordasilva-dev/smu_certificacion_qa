# B2C-18 - Search Results Page (SRP) - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-18 |
| Última actualización | 2026-11-03 |
| Ejecutado por | Victor Chirinos |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | webkit |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP1/B2C-18 WEB Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 5 |
| Bloqueado | 5 |
| Bloqueado Data | 5 |
| **Total** | **15** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-03 | 15 | TC-B2C18-D-013, TC-B2C18-D-014, TC-B2C18-D-015, TC-B2C18-D-016, TC-B2C18-D-018, TC-B2C18-D-026, TC-B2C18-D-027, TC-B2C18-M-008, TC-B2C18-M-009, TC-B2C18-M-011, TC-B2C18-M-012, TC-B2C18-M-013, TC-B2C18-M-014, TC-B2C18-M-015, TC-B2C18-M-025 |

## Detalle por caso de prueba

### TC-B2C18-D-013 - Verificar que con retiro en tienda activo la SRP muestra productos según stock de la tienda seleccionada [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Duración | 59.0 s |
| Spec | tests/B2C-18.spec.ts:750 |

**Precondiciones**

Storefront Unimarc activo en Desktop 1280×900. Método de entrega 'Retiro en tienda' activo con una tienda específica seleccionada. Catálogo con productos diferenciados por stock de tienda. User type: Guest.

**Data utilizada**

- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {BROWSER}: Chrome
- {SEARCH_TERM_001}: leche
- {TIENDA_RETIRO_001}: Unimarc Las Condes
- {VIEWPORT}: 1440x900

**Pasos ejecutados**

1. Navegar al Home con viewport Desktop 1280×900.
2. Configurar método de entrega: Retiro en tienda, seleccionar una tienda específica.
3. Buscar un término (ej. 'leche') y acceder a la SRP.
4. Verificar que los productos mostrados corresponden al stock disponible en la tienda seleccionada para retiro.

**Resultado esperado**

Con retiro en tienda activo, la SRP muestra productos filtrados según el stock de la tienda seleccionada. La disponibilidad refleja el inventario real de esa tienda.

**Resultado obtenido**

Con retiro en Unimarc Las Condes activo, la SRP de "leche" resolvió la disponibilidad contra el stock de la tienda: al menos un producto cambió de disponibilidad respecto del catálogo general.

**Evidencia**

![Paso 2 — metodo de entrega activo unimarc las condes](<B2C-18 Evidencias/TC-B2C18-D-013-p02-metodo-de-entrega-activo-unimarc-las-condes.png>)

![Paso 3 — srp de leche con el metodo activo](<B2C-18 Evidencias/TC-B2C18-D-013-p03-srp-de-leche-con-el-metodo-activo.png>)

![Paso 4 — 1 producto s con disponibilidad distinta a la del catalogo g](<B2C-18 Evidencias/TC-B2C18-D-013-p04-1-producto-s-con-disponibilidad-distinta-a-la-del-catalogo-g.png>)

![Estado final del caso](<B2C-18 Evidencias/TC-B2C18-D-013.png>)

---

### TC-B2C18-D-014 - Verificar que un producto sin disponibilidad en la SRP muestra etiqueta 'No disponible', botón Agregar oculto y botón 'Ver similares' visible [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Duración | 35.0 s |
| Spec | tests/B2C-18.spec.ts:761 |

**Precondiciones**

Storefront Unimarc activo en Desktop 1280×900. Método de entrega activo (despacho o retiro). Al menos un producto en el catálogo sin stock para el método de entrega configurado. User type: Guest.

**Data utilizada**

- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {BROWSER}: Chrome
- {SEARCH_TERM_001}: leche
- {SKU_SIN_STOCK}: 000000000000029403-KG
- {TIENDA_RETIRO_001}: Unimarc Las Condes
- {VIEWPORT}: 1440x900

**Pasos ejecutados**

1. Navegar al Home con viewport Desktop 1280×900 con método de entrega activo.
2. Buscar un término que incluya productos sin stock para el método configurado.
3. Identificar en la SRP un producto marcado como no disponible.
4. Verificar que el producto muestra la etiqueta 'No disponible'.
5. Verificar que el botón 'Agregar al carro' está oculto para ese producto.
6. Verificar que el botón 'Ver similares' es visible para ese producto.

**Resultado esperado**

El producto no disponible muestra la etiqueta 'No disponible'. El botón 'Agregar al carro' está oculto. El botón 'Ver similares' es visible y accesible.

**Resultado obtenido**

Con retiro en Unimarc Las Condes, la SRP de "leche" muestra un producto con la etiqueta "No disponible", sin botón Agregar y con "Ver similares" visible.

**Evidencia**

![Paso 2 — srp de leche con retiro en unimarc las condes](<B2C-18 Evidencias/TC-B2C18-D-014-p02-srp-de-leche-con-retiro-en-unimarc-las-condes.png>)

![Paso 3 — producto sin disponibilidad en la grilla](<B2C-18 Evidencias/TC-B2C18-D-014-p03-producto-sin-disponibilidad-en-la-grilla.png>)

![Paso 4 — etiqueta del shelf no disponible](<B2C-18 Evidencias/TC-B2C18-D-014-p04-etiqueta-del-shelf-no-disponible.png>)

![Paso 5 — boton agregar oculto y ver similares visible](<B2C-18 Evidencias/TC-B2C18-D-014-p05-boton-agregar-oculto-y-ver-similares-visible.png>)

![Estado final del caso](<B2C-18 Evidencias/TC-B2C18-D-014.png>)

---

### TC-B2C18-D-015 - Verificar que cambiar el método de entrega desde la SRP actualiza la disponibilidad de productos sin salir de la SRP [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |

**Precondiciones**

Storefront Unimarc activo en Desktop 1280×900. SRP cargada con despacho a domicilio activo. Opción de cambio de método de entrega disponible desde la SRP. User type: Guest.

**Data utilizada**

- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {BROWSER}: Chrome
- {SEARCH_TERM_001}: leche
- {TIENDA_RETIRO_001}: Unimarc Las Condes
- {VIEWPORT}: 1440x900

**Pasos ejecutados**

1. Navegar al Home con viewport Desktop 1280×900 con despacho a domicilio activo.
2. Acceder a la SRP con un término de búsqueda (ej. 'leche').
3. Localizar la opción de cambio de método de entrega en la SRP.
4. Cambiar el método a 'Retiro en tienda' y seleccionar una tienda.
5. Verificar que la SRP actualiza la disponibilidad de los productos según el stock de la tienda seleccionada.
6. Confirmar que no es necesario recargar la página o navegar fuera de la SRP.

**Resultado esperado**

Al cambiar el método de entrega desde la SRP, los productos actualizan su disponibilidad según el nuevo método (stock de la tienda de retiro seleccionada). La actualización ocurre sin salir de la SRP.

**Observación**

Causa: el caso parte con despacho a domicilio activo y la columna Test data no declara ninguna dirección (solo {SEARCH_TERM_001} y {TIENDA_RETIRO_001}); elegir una del Excel de data a criterio propio dejaría el veredicto sin significado. Acción requerida: referenciar en la fila del TC el token de la dirección de despacho con que debe correrse (p. ej. {DIRECCION_DESPACHO_002}).

---

### TC-B2C18-D-016 - Verificar que los componentes de monetización configurados en BM se muestran en la SRP según el tipo activo [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-03 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |
| Duración | 7.0 s |

**Precondiciones**

Storefront Unimarc activo en Desktop 1280×900. Componentes de monetización configurados en BM para la categoría de la búsqueda de prueba (al menos un tipo: Sponsor Products, Sponsor Banner o Sponsor Carrusel). User type: Guest.

**Data utilizada**

- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {BROWSER}: Chrome
- {SEARCH_TERM_001}: leche
- {VIEWPORT}: 1440x900

**Pasos ejecutados**

1. Navegar al Home con viewport Desktop 1280×900.
2. Buscar un término cuya categoría tenga componente de monetización configurado.
3. Acceder a la SRP.
4. Verificar que se muestra el tipo de componente de monetización activo:
- Tipo 1 (Sponsor Products): productos patrocinados integrados en la grilla.
- Tipo 2 (Sponsor Banner): banner que interrumpe la grilla.
- Tipo 3 (Sponsor Carrusel): carrusel de productos de marca/campaña.
5. Confirmar que el componente visible corresponde al tipo configurado en BM.

**Resultado esperado**

La SRP muestra el componente de monetización del tipo configurado en BM. Tipo 1: productos patrocinados integrados en grilla. Tipo 2: banner entre productos. Tipo 3: carrusel de productos de marca/campaña. (Detalle funcional: B2C-5.)

**Resultado obtenido**

La SRP de "leche" muestra 2 Sponsor Banners (tipo 2) que interrumpen la grilla, con el texto "Patrocinado" y enlace, pero la imagen de campaña y el logo del patrocinador no se pintan: las dos URLs (images/banners-sponsor/imagen campaña.png e images/icon-sponsor/not-copmpany.jpg) responden 404 y el banner se ve con el ícono de imagen rota y el texto alternativo.

**Observación**

Causa: el Sponsor Banner (tipo 2) configurado para la SRP de "leche" se renderiza, pero sus imágenes no existen en la librería de contenido de DEV: la imagen de campaña (images/banners-sponsor/imagen campaña.png) y el logo del patrocinador (images/icon-sponsor/not-copmpany.jpg) responden 404 y el banner se ve roto. Acción requerida: cargar en BM (DEV) las imágenes del componente de monetización y re-ejecutar.

**Evidencia**

![Paso 3 — srp de leche](<B2C-18 Evidencias/TC-B2C18-D-016-p03-srp-de-leche.png>)

![Paso 4 — sponsor banner tipo 2 interrumpiendo la grilla](<B2C-18 Evidencias/TC-B2C18-D-016-p04-sponsor-banner-tipo-2-interrumpiendo-la-grilla.png>)

![Paso 5 — 2 sponsor banner s en la srp](<B2C-18 Evidencias/TC-B2C18-D-016-p05-2-sponsor-banner-s-en-la-srp.png>)

![Estado final del caso](<B2C-18 Evidencias/TC-B2C18-D-016.png>)

---

### TC-B2C18-D-018 - Verificar que con matchmode 'strict' el banner configurado se muestra solo cuando el término de búsqueda coincide exactamente [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-03 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |

**Precondiciones**

Storefront Unimarc activo en Desktop 1280×900. Al menos un content asset de tipo banner configurado en BM, vinculado a un término de búsqueda específico (ej. término = 'aceite', matchmode = 'strict'). User type: Guest.

**Data utilizada**

- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {BROWSER}: Chrome
- {SEARCH_BANNER_STRICT_001}: aceite
- {VIEWPORT}: 1440x900

**Pasos ejecutados**

1. Navegar al Home con viewport Desktop 1280×900.
2. Buscar el término exacto configurado en el content asset (ej. 'aceite').
3. Acceder a la SRP.
4. Verificar que el banner configurado para 'aceite' se muestra en la SRP.
5. Buscar una variación del término (ej. 'aceites').
6. Verificar que el banner NO se muestra para la variación (matchmode strict).

**Resultado esperado**

Con matchmode 'strict', el banner se muestra únicamente cuando el término de búsqueda coincide exactamente con el configurado ('aceite'). Una variación ('aceites') no activa el banner.

**Resultado obtenido**

Las SRP de "aceite" y de "aceites" (2 productos cada una) no renderizan ningún banner: no hay banner que pueda aparecer o dejar de aparecer.

**Observación**

Causa: el caso exige un content asset de banner configurado en BM con matchmode strict para {SEARCH_BANNER_STRICT_001} = "aceite", y la SRP de ese término no renderiza ningún banner (re-verificado el 2026-11-03). Acción requerida: configurar en DEV el content asset de banner con matchmode strict para el término de prueba.

**Evidencia**

![Paso 1 — srp de aceite sin banner](<B2C-18 Evidencias/TC-B2C18-D-018-p01-srp-de-aceite-sin-banner.png>)

![Paso 2 — srp de aceites sin banner](<B2C-18 Evidencias/TC-B2C18-D-018-p02-srp-de-aceites-sin-banner.png>)

---

### TC-B2C18-D-026 - Verificar que el componente de paginación muestra la página 1 activa, los números de página disponibles y la flecha de navegación [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |

**Precondiciones**

Storefront Unimarc activo en Desktop 1280×900. SRP cargada con un término de búsqueda que retorna más de 50 productos (ej. 'leche'). User type: Guest.

**Data utilizada**

- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {BROWSER}: Chrome
- {VIEWPORT}: 1440x900

**Pasos ejecutados**

1. Navegar al Home con viewport Desktop 1280×900.
2. Buscar un término que devuelva más de 50 resultados.
3. Acceder a la SRP y desplazarse hasta el final del listado de productos.
4. Verificar que el componente de paginación se muestra debajo del listado.
5. Verificar que la página 1 aparece resaltada/activa.
6. Verificar que se visualizan los números de páginas disponibles.
7. Verificar que se muestra la flecha (›) de navegación hacia la página siguiente.

**Resultado esperado**

El componente de paginación muestra: página 1 resaltada como activa, números de páginas disponibles visibles y flecha (›) hacia la página siguiente. La estructura visual del componente es correcta.

**Observación**

Causa: el caso exige una búsqueda con más de 50 resultados y la columna Test data no declara ningún término que la cumpla (el ejemplo de la precondición, "leche", devuelve hoy 48 productos en DEV). Acción requerida: referenciar en la fila un token de término con más de 50 resultados (el Excel de data ya tiene {SEARCH_TERM_50+_SKUS} = "pan molde", pero esta fila no lo declara).

---

### TC-B2C18-D-027 - Verificar que la SRP con content asset Banner circular muestra el banner bajo el título con imagen circular, nombre y enlace [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-03 |
| Form factor | desktop |
| Viewport | 1280x900 |
| Navegador | chromium |

**Precondiciones**

Storefront Unimarc activo en Desktop 1280×900. Content asset de tipo Banner circular configurado en BM y asociado al slot de la SRP de prueba. User type: Guest.

**Data utilizada**

- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {BROWSER}: Chrome
- {SEARCH_TERM_001}: leche
- {VIEWPORT}: 1440x900

**Pasos ejecutados**

1. Navegar al Home con viewport Desktop 1280×900.
2. Buscar un término cuya SRP tenga content asset Banner circular configurado.
3. Acceder a la SRP.
4. Verificar que el banner circular se muestra debajo del título de la SRP.
5. Verificar que el banner tiene: imagen circular y nombre del banner.
6. Hacer clic en el banner y verificar que navega al destino configurado (categoría, colección u otra URL).

**Resultado esperado**

La SRP muestra el banner circular debajo del título con: imagen circular y nombre. El clic navega correctamente al destino configurado.

**Resultado obtenido**

La SRP de "leche" (48 productos) no renderiza ningún banner circular bajo el título: entre el título y la grilla solo están el contador, el orden, "Filtros" y los chips de categoría.

**Observación**

Causa: el caso exige un content asset Banner circular asociado al slot de la SRP del término declarado ("leche"), y la SRP no renderiza ninguno (re-verificado el 2026-11-03). Acción requerida: configurar en DEV el Banner circular para la SRP del término de prueba, o declarar en la fila un término cuya SRP ya lo tenga.

**Evidencia**

![Captura del impedimento (exploración)](<B2C-18 Evidencias/TC-B2C18-D-027.png>)

---

### TC-B2C18-M-008 - Verificar que la SRP muestra hasta 50 productos en la carga inicial con estructura de shelf correcta [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

Storefront Unimarc activo en Mobile 390×844. SRP cargada con un término de búsqueda que retorna más de 50 productos (ej. 'leche'). User type: Guest.

**Data utilizada**

- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

**Pasos ejecutados**

1. Navegar al Home con viewport Mobile 390×844.
2. Buscar un término que devuelva más de 50 resultados.
3. Verificar que la SRP carga hasta 50 productos en la carga inicial.
4. Examinar la estructura de al menos 3 productos: imagen, nombre, precio, precio oferta (si aplica) y botón 'Agregar al carro'.

**Resultado esperado**

La SRP Mobile carga hasta 50 productos en la carga inicial con estructura correcta. (Cobertura detallada: B2C-59.)

**Observación**

Causa: el caso exige una búsqueda con más de 50 resultados y la columna Test data no declara ningún término que la cumpla (el ejemplo de la precondición, "leche", devuelve hoy 48 productos en DEV). Acción requerida: referenciar en la fila un token de término con más de 50 resultados (el Excel de data ya tiene {SEARCH_TERM_50+_SKUS} = "pan molde", pero esta fila no lo declara).

---

### TC-B2C18-M-009 - Verificar que el scroll infinito en la SRP carga el siguiente bloque de productos con indicador de carga al llegar al final [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

Storefront Unimarc activo en Mobile 390×844. SRP cargada con un término de búsqueda que retorna más de 50 productos (ej. 'leche'). User type: Guest.

**Data utilizada**

- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

**Pasos ejecutados**

1. Navegar al Home con viewport Mobile 390×844.
2. Buscar un término que devuelva más de 50 resultados.
3. Desplazarse (scroll) hasta el final del listado de los 50 productos iniciales.
4. Verificar que aparece el indicador de carga '…' al llegar al final.
5. Verificar que el sistema carga automáticamente el siguiente bloque de productos.
6. Confirmar que el scroll infinito funciona sin necesidad de acción explícita del usuario.

**Resultado esperado**

Al llegar al final del listado aparece el indicador de carga '…'. El sistema carga automáticamente el siguiente bloque de productos. El scroll infinito funciona correctamente en Mobile.

**Observación**

Causa: el caso exige una búsqueda con más de 50 resultados y la columna Test data no declara ningún término que la cumpla (el ejemplo de la precondición, "leche", devuelve hoy 48 productos en DEV). Acción requerida: referenciar en la fila un token de término con más de 50 resultados (el Excel de data ya tiene {SEARCH_TERM_50+_SKUS} = "pan molde", pero esta fila no lo declara).

---

### TC-B2C18-M-011 - Verificar que con despacho a domicilio activo la SRP muestra productos según cobertura de la dirección configurada [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 41.0 s |
| Spec | tests/B2C-18.spec.ts:1270 |

**Precondiciones**

Storefront Unimarc activo en Mobile 390×844. Método de entrega 'Despacho a domicilio' activo con una dirección configurada. Catálogo con productos diferenciados por stock de tienda. User type: Guest.

**Data utilizada**

- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {DIRECCION_DESPACHO_002}: Vilanova 122, Las Condes
- {SEARCH_TERM_001}: leche

**Pasos ejecutados**

1. Navegar al Home con viewport Mobile 390×844 con despacho a domicilio activo.
2. Buscar 'leche' y acceder a la SRP.
3. Verificar que los productos mostrados corresponden al stock disponible según la cobertura y tienda asignada a la dirección.

**Resultado esperado**

Con despacho activo, la SRP Mobile muestra productos filtrados según la cobertura y tienda asignada a la dirección de entrega.

**Resultado obtenido**

Con despacho a Vilanova 122, Las Condes activo, la SRP Mobile de "leche" resolvió la disponibilidad según la tienda asignada a la dirección: al menos un producto cambió respecto del catálogo general.

**Evidencia**

![Paso 2 — metodo de entrega activo vilanova 122](<B2C-18 Evidencias/TC-B2C18-M-011-p02-metodo-de-entrega-activo-vilanova-122.png>)

![Paso 3 — srp de leche con el metodo activo](<B2C-18 Evidencias/TC-B2C18-M-011-p03-srp-de-leche-con-el-metodo-activo.png>)

![Paso 4 — 1 producto s con disponibilidad distinta a la del catalogo g](<B2C-18 Evidencias/TC-B2C18-M-011-p04-1-producto-s-con-disponibilidad-distinta-a-la-del-catalogo-g.png>)

![Estado final del caso](<B2C-18 Evidencias/TC-B2C18-M-011.png>)

---

### TC-B2C18-M-012 - Verificar que con retiro en tienda activo la SRP muestra productos según stock de la tienda seleccionada [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 64.0 s |
| Spec | tests/B2C-18.spec.ts:1283 |

**Precondiciones**

Storefront Unimarc activo en Mobile 390×844. Método de entrega 'Retiro en tienda' activo con una tienda seleccionada. Catálogo con productos diferenciados por stock. User type: Guest.

**Data utilizada**

- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {SEARCH_TERM_001}: leche
- {TIENDA_RETIRO_001}: Unimarc Las Condes

**Pasos ejecutados**

1. Navegar al Home con viewport Mobile 390×844 con retiro en tienda activo.
2. Buscar 'leche' y acceder a la SRP.
3. Verificar que los productos corresponden al stock de la tienda de retiro seleccionada.

**Resultado esperado**

Con retiro activo, la SRP Mobile muestra productos según el stock de la tienda de retiro seleccionada.

**Resultado obtenido**

Con retiro en Unimarc Las Condes activo, la SRP Mobile de "leche" resolvió la disponibilidad contra el stock de la tienda: al menos un producto cambió respecto del catálogo general.

**Evidencia**

![Paso 2 — metodo de entrega activo unimarc las condes](<B2C-18 Evidencias/TC-B2C18-M-012-p02-metodo-de-entrega-activo-unimarc-las-condes.png>)

![Paso 3 — srp de leche con el metodo activo](<B2C-18 Evidencias/TC-B2C18-M-012-p03-srp-de-leche-con-el-metodo-activo.png>)

![Paso 4 — 1 producto s con disponibilidad distinta a la del catalogo g](<B2C-18 Evidencias/TC-B2C18-M-012-p04-1-producto-s-con-disponibilidad-distinta-a-la-del-catalogo-g.png>)

![Estado final del caso](<B2C-18 Evidencias/TC-B2C18-M-012.png>)

---

### TC-B2C18-M-013 - Verificar que un producto sin disponibilidad en la SRP muestra etiqueta 'No disponible', botón Agregar oculto y botón 'Ver similares' visible [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 55.0 s |
| Spec | tests/B2C-18.spec.ts:1294 |

**Precondiciones**

Storefront Unimarc activo en Mobile 390×844. Método de entrega activo. Al menos un producto sin stock para el método configurado. User type: Guest.

**Data utilizada**

- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {SEARCH_TERM_001}: leche
- {SKU_SIN_STOCK}: 000000000000029403-KG
- {TIENDA_RETIRO_001}: Unimarc Las Condes

**Pasos ejecutados**

1. Navegar al Home con viewport Mobile 390×844 con método de entrega activo.
2. Buscar un término que incluya productos no disponibles.
3. Identificar un producto no disponible en la SRP.
4. Verificar etiqueta 'No disponible'.
5. Verificar que botón 'Agregar' está oculto.
6. Verificar que botón 'Ver similares' es visible.

**Resultado esperado**

El producto no disponible muestra: etiqueta 'No disponible', botón 'Agregar' oculto, botón 'Ver similares' visible.

**Resultado obtenido**

Con retiro en Unimarc Las Condes, la SRP Mobile de "leche" muestra un producto con la etiqueta "No disponible", sin botón Agregar y con "Ver similares" visible.

**Evidencia**

![Paso 2 — srp de leche con retiro en unimarc las condes](<B2C-18 Evidencias/TC-B2C18-M-013-p02-srp-de-leche-con-retiro-en-unimarc-las-condes.png>)

![Paso 3 — producto sin disponibilidad en la grilla](<B2C-18 Evidencias/TC-B2C18-M-013-p03-producto-sin-disponibilidad-en-la-grilla.png>)

![Paso 4 — etiqueta del shelf no disponible](<B2C-18 Evidencias/TC-B2C18-M-013-p04-etiqueta-del-shelf-no-disponible.png>)

![Paso 5 — boton agregar oculto y ver similares visible](<B2C-18 Evidencias/TC-B2C18-M-013-p05-boton-agregar-oculto-y-ver-similares-visible.png>)

![Estado final del caso](<B2C-18 Evidencias/TC-B2C18-M-013.png>)

---

### TC-B2C18-M-014 - Verificar que cambiar el método de entrega desde la SRP actualiza la disponibilidad de productos sin salir de la SRP [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

Storefront Unimarc activo en Mobile 390×844. SRP cargada con despacho activo. Opción de cambio de método disponible desde la SRP. User type: Guest.

**Data utilizada**

- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {SEARCH_TERM_001}: leche
- {TIENDA_RETIRO_001}: Unimarc Las Condes

**Pasos ejecutados**

1. Navegar al Home con viewport Mobile 390×844 con despacho activo.
2. Acceder a la SRP con 'leche'.
3. Cambiar el método a 'Retiro en tienda' seleccionando una tienda.
4. Verificar que la SRP actualiza la disponibilidad según el stock de la tienda.
5. Confirmar que no es necesario salir de la SRP.

**Resultado esperado**

Al cambiar el método de entrega, la SRP Mobile actualiza la disponibilidad de productos. La actualización ocurre sin salir de la SRP.

**Observación**

Causa: el caso parte con despacho a domicilio activo y la columna Test data no declara ninguna dirección (solo {SEARCH_TERM_001} y {TIENDA_RETIRO_001}); elegir una del Excel de data a criterio propio dejaría el veredicto sin significado. Acción requerida: referenciar en la fila del TC el token de la dirección de despacho con que debe correrse (p. ej. {DIRECCION_DESPACHO_002}).

---

### TC-B2C18-M-015 - Verificar que los componentes de monetización configurados en BM se muestran en la SRP según el tipo activo [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-03 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 6.0 s |

**Precondiciones**

Storefront Unimarc activo en Mobile 390×844. Componentes de monetización configurados en BM para la categoría de la búsqueda de prueba. User type: Guest.

**Data utilizada**

- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {SEARCH_TERM_001}: leche

**Pasos ejecutados**

1. Navegar al Home con viewport Mobile 390×844.
2. Buscar un término cuya categoría tenga componente de monetización activo.
3. Acceder a la SRP.
4. Verificar que se muestra el tipo de componente configurado (Sponsor Products, Banner o Carrusel).

**Resultado esperado**

La SRP Mobile muestra el componente de monetización del tipo configurado en BM. (Detalle funcional: B2C-5.)

**Resultado obtenido**

La SRP Mobile de "leche" muestra 2 Sponsor Banners (tipo 2) con "Patrocinado" y enlace, pero la imagen de campaña y el logo del patrocinador no se pintan (404): se ve el ícono de imagen rota.

**Observación**

Causa: el Sponsor Banner (tipo 2) configurado para la SRP de "leche" se renderiza, pero sus imágenes no existen en la librería de contenido de DEV: la imagen de campaña y el logo del patrocinador responden 404 y el banner se ve roto. Acción requerida: cargar en BM (DEV) las imágenes del componente de monetización y re-ejecutar.

**Evidencia**

![Paso 3 — srp de leche](<B2C-18 Evidencias/TC-B2C18-M-015-p03-srp-de-leche.png>)

![Paso 4 — sponsor banner tipo 2 interrumpiendo la grilla](<B2C-18 Evidencias/TC-B2C18-M-015-p04-sponsor-banner-tipo-2-interrumpiendo-la-grilla.png>)

![Paso 5 — 2 sponsor banner s en la srp](<B2C-18 Evidencias/TC-B2C18-M-015-p05-2-sponsor-banner-s-en-la-srp.png>)

![Estado final del caso](<B2C-18 Evidencias/TC-B2C18-M-015.png>)

---

### TC-B2C18-M-025 - Verificar que la SRP con content asset Banner circular muestra el banner bajo el título con imagen circular, nombre y enlace [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-03 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

Storefront Unimarc activo en Mobile 390×844. Content asset de tipo Banner circular configurado en BM y asociado al slot de la SRP de prueba. User type: Guest.

**Data utilizada**

- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {SEARCH_TERM_001}: leche

**Pasos ejecutados**

1. Navegar al Home con viewport Mobile 390×844.
2. Buscar un término cuya SRP tenga content asset Banner circular.
3. Verificar que el banner circular se muestra debajo del título.
4. Verificar imagen circular y nombre del banner.
5. Hacer tap en el banner y verificar que navega al destino configurado.

**Resultado esperado**

La SRP Mobile muestra el banner circular bajo el título con imagen y nombre. El tap navega al destino configurado.

**Resultado obtenido**

La SRP Mobile de "leche" no renderiza ningún banner circular bajo el título.

**Observación**

Causa: el caso exige un content asset Banner circular asociado al slot de la SRP del término declarado ("leche"), y la SRP Mobile no renderiza ninguno (re-verificado el 2026-11-03). Acción requerida: configurar en DEV el Banner circular para la SRP del término de prueba, o declarar en la fila un término cuya SRP ya lo tenga.

**Evidencia**

![Captura del impedimento (exploración)](<B2C-18 Evidencias/TC-B2C18-M-025.png>)

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
  "suite": "B2C-18",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP1/B2C-18 WEB Test Cases.xlsx",
  "title": "B2C-18 - Search Results Page (SRP) - Evidencias QA",
  "updated_at": "2026-11-03"
 },
 "history": {
  "2026-11-03": [
   "TC-B2C18-D-013",
   "TC-B2C18-D-014",
   "TC-B2C18-D-015",
   "TC-B2C18-D-016",
   "TC-B2C18-D-018",
   "TC-B2C18-D-026",
   "TC-B2C18-D-027",
   "TC-B2C18-M-008",
   "TC-B2C18-M-009",
   "TC-B2C18-M-011",
   "TC-B2C18-M-012",
   "TC-B2C18-M-013",
   "TC-B2C18-M-014",
   "TC-B2C18-M-015",
   "TC-B2C18-M-025"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "duration_s": 59,
   "executed_at": "2026-11-03",
   "expected": "Con retiro en tienda activo, la SRP muestra productos filtrados según el stock de la tienda seleccionada. La disponibilidad refleja el inventario real de esa tienda.",
   "form_factor": "desktop",
   "id": "TC-B2C18-D-013",
   "name": "Verificar que con retiro en tienda activo la SRP muestra productos según stock de la tienda seleccionada [Desktop] [Guest]",
   "observed": "Con retiro en Unimarc Las Condes activo, la SRP de \"leche\" resolvió la disponibilidad contra el stock de la tienda: al menos un producto cambió de disponibilidad respecto del catálogo general.",
   "preconditions": "Storefront Unimarc activo en Desktop 1280×900. Método de entrega 'Retiro en tienda' activo con una tienda específica seleccionada. Catálogo con productos diferenciados por stock de tienda. User type: Guest.",
   "screenshots": [
    {
     "caption": "Paso 2 — metodo de entrega activo unimarc las condes",
     "file": "TC-B2C18-D-013-p02-metodo-de-entrega-activo-unimarc-las-condes.png"
    },
    {
     "caption": "Paso 3 — srp de leche con el metodo activo",
     "file": "TC-B2C18-D-013-p03-srp-de-leche-con-el-metodo-activo.png"
    },
    {
     "caption": "Paso 4 — 1 producto s con disponibilidad distinta a la del catalogo g",
     "file": "TC-B2C18-D-013-p04-1-producto-s-con-disponibilidad-distinta-a-la-del-catalogo-g.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C18-D-013.png"
    }
   ],
   "spec": "tests/B2C-18.spec.ts:750",
   "status": "Aprobado",
   "steps": "1. Navegar al Home con viewport Desktop 1280×900.\n2. Configurar método de entrega: Retiro en tienda, seleccionar una tienda específica.\n3. Buscar un término (ej. 'leche') y acceder a la SRP.\n4. Verificar que los productos mostrados corresponden al stock disponible en la tienda seleccionada para retiro.",
   "test_data": "- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {BROWSER}: Chrome\n- {SEARCH_TERM_001}: leche\n- {TIENDA_RETIRO_001}: Unimarc Las Condes\n- {VIEWPORT}: 1440x900",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "duration_s": 35,
   "executed_at": "2026-11-03",
   "expected": "El producto no disponible muestra la etiqueta 'No disponible'. El botón 'Agregar al carro' está oculto. El botón 'Ver similares' es visible y accesible.",
   "form_factor": "desktop",
   "id": "TC-B2C18-D-014",
   "name": "Verificar que un producto sin disponibilidad en la SRP muestra etiqueta 'No disponible', botón Agregar oculto y botón 'Ver similares' visible [Desktop] [Guest]",
   "observed": "Con retiro en Unimarc Las Condes, la SRP de \"leche\" muestra un producto con la etiqueta \"No disponible\", sin botón Agregar y con \"Ver similares\" visible.",
   "preconditions": "Storefront Unimarc activo en Desktop 1280×900. Método de entrega activo (despacho o retiro). Al menos un producto en el catálogo sin stock para el método de entrega configurado. User type: Guest.",
   "screenshots": [
    {
     "caption": "Paso 2 — srp de leche con retiro en unimarc las condes",
     "file": "TC-B2C18-D-014-p02-srp-de-leche-con-retiro-en-unimarc-las-condes.png"
    },
    {
     "caption": "Paso 3 — producto sin disponibilidad en la grilla",
     "file": "TC-B2C18-D-014-p03-producto-sin-disponibilidad-en-la-grilla.png"
    },
    {
     "caption": "Paso 4 — etiqueta del shelf no disponible",
     "file": "TC-B2C18-D-014-p04-etiqueta-del-shelf-no-disponible.png"
    },
    {
     "caption": "Paso 5 — boton agregar oculto y ver similares visible",
     "file": "TC-B2C18-D-014-p05-boton-agregar-oculto-y-ver-similares-visible.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C18-D-014.png"
    }
   ],
   "spec": "tests/B2C-18.spec.ts:761",
   "status": "Aprobado",
   "steps": "1. Navegar al Home con viewport Desktop 1280×900 con método de entrega activo.\n2. Buscar un término que incluya productos sin stock para el método configurado.\n3. Identificar en la SRP un producto marcado como no disponible.\n4. Verificar que el producto muestra la etiqueta 'No disponible'.\n5. Verificar que el botón 'Agregar al carro' está oculto para ese producto.\n6. Verificar que el botón 'Ver similares' es visible para ese producto.",
   "test_data": "- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {BROWSER}: Chrome\n- {SEARCH_TERM_001}: leche\n- {SKU_SIN_STOCK}: 000000000000029403-KG\n- {TIENDA_RETIRO_001}: Unimarc Las Condes\n- {VIEWPORT}: 1440x900",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-03",
   "expected": "Al cambiar el método de entrega desde la SRP, los productos actualizan su disponibilidad según el nuevo método (stock de la tienda de retiro seleccionada). La actualización ocurre sin salir de la SRP.",
   "form_factor": "desktop",
   "id": "TC-B2C18-D-015",
   "name": "Verificar que cambiar el método de entrega desde la SRP actualiza la disponibilidad de productos sin salir de la SRP [Desktop] [Guest]",
   "observation": "Causa: el caso parte con despacho a domicilio activo y la columna Test data no declara ninguna dirección (solo {SEARCH_TERM_001} y {TIENDA_RETIRO_001}); elegir una del Excel de data a criterio propio dejaría el veredicto sin significado. Acción requerida: referenciar en la fila del TC el token de la dirección de despacho con que debe correrse (p. ej. {DIRECCION_DESPACHO_002}).",
   "preconditions": "Storefront Unimarc activo en Desktop 1280×900. SRP cargada con despacho a domicilio activo. Opción de cambio de método de entrega disponible desde la SRP. User type: Guest.",
   "status": "Bloqueado Data",
   "steps": "1. Navegar al Home con viewport Desktop 1280×900 con despacho a domicilio activo.\n2. Acceder a la SRP con un término de búsqueda (ej. 'leche').\n3. Localizar la opción de cambio de método de entrega en la SRP.\n4. Cambiar el método a 'Retiro en tienda' y seleccionar una tienda.\n5. Verificar que la SRP actualiza la disponibilidad de los productos según el stock de la tienda seleccionada.\n6. Confirmar que no es necesario recargar la página o navegar fuera de la SRP.",
   "test_data": "- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {BROWSER}: Chrome\n- {SEARCH_TERM_001}: leche\n- {TIENDA_RETIRO_001}: Unimarc Las Condes\n- {VIEWPORT}: 1440x900",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "duration_s": 7,
   "executed_at": "2026-11-03",
   "expected": "La SRP muestra el componente de monetización del tipo configurado en BM. Tipo 1: productos patrocinados integrados en grilla. Tipo 2: banner entre productos. Tipo 3: carrusel de productos de marca/campaña. (Detalle funcional: B2C-5.)",
   "form_factor": "desktop",
   "id": "TC-B2C18-D-016",
   "name": "Verificar que los componentes de monetización configurados en BM se muestran en la SRP según el tipo activo [Desktop] [Guest]",
   "observation": "Causa: el Sponsor Banner (tipo 2) configurado para la SRP de \"leche\" se renderiza, pero sus imágenes no existen en la librería de contenido de DEV: la imagen de campaña (images/banners-sponsor/imagen campaña.png) y el logo del patrocinador (images/icon-sponsor/not-copmpany.jpg) responden 404 y el banner se ve roto. Acción requerida: cargar en BM (DEV) las imágenes del componente de monetización y re-ejecutar.",
   "observed": "La SRP de \"leche\" muestra 2 Sponsor Banners (tipo 2) que interrumpen la grilla, con el texto \"Patrocinado\" y enlace, pero la imagen de campaña y el logo del patrocinador no se pintan: las dos URLs (images/banners-sponsor/imagen campaña.png e images/icon-sponsor/not-copmpany.jpg) responden 404 y el banner se ve con el ícono de imagen rota y el texto alternativo.",
   "preconditions": "Storefront Unimarc activo en Desktop 1280×900. Componentes de monetización configurados en BM para la categoría de la búsqueda de prueba (al menos un tipo: Sponsor Products, Sponsor Banner o Sponsor Carrusel). User type: Guest.",
   "screenshots": [
    {
     "caption": "Paso 3 — srp de leche",
     "file": "TC-B2C18-D-016-p03-srp-de-leche.png"
    },
    {
     "caption": "Paso 4 — sponsor banner tipo 2 interrumpiendo la grilla",
     "file": "TC-B2C18-D-016-p04-sponsor-banner-tipo-2-interrumpiendo-la-grilla.png"
    },
    {
     "caption": "Paso 5 — 2 sponsor banner s en la srp",
     "file": "TC-B2C18-D-016-p05-2-sponsor-banner-s-en-la-srp.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C18-D-016.png"
    }
   ],
   "status": "Bloqueado",
   "steps": "1. Navegar al Home con viewport Desktop 1280×900.\n2. Buscar un término cuya categoría tenga componente de monetización configurado.\n3. Acceder a la SRP.\n4. Verificar que se muestra el tipo de componente de monetización activo:\n   - Tipo 1 (Sponsor Products): productos patrocinados integrados en la grilla.\n   - Tipo 2 (Sponsor Banner): banner que interrumpe la grilla.\n   - Tipo 3 (Sponsor Carrusel): carrusel de productos de marca/campaña.\n5. Confirmar que el componente visible corresponde al tipo configurado en BM.",
   "test_data": "- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {BROWSER}: Chrome\n- {SEARCH_TERM_001}: leche\n- {VIEWPORT}: 1440x900",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-03",
   "expected": "Con matchmode 'strict', el banner se muestra únicamente cuando el término de búsqueda coincide exactamente con el configurado ('aceite'). Una variación ('aceites') no activa el banner.",
   "form_factor": "desktop",
   "id": "TC-B2C18-D-018",
   "name": "Verificar que con matchmode 'strict' el banner configurado se muestra solo cuando el término de búsqueda coincide exactamente [Desktop] [Guest]",
   "observation": "Causa: el caso exige un content asset de banner configurado en BM con matchmode strict para {SEARCH_BANNER_STRICT_001} = \"aceite\", y la SRP de ese término no renderiza ningún banner (re-verificado el 2026-11-03). Acción requerida: configurar en DEV el content asset de banner con matchmode strict para el término de prueba.",
   "observed": "Las SRP de \"aceite\" y de \"aceites\" (2 productos cada una) no renderizan ningún banner: no hay banner que pueda aparecer o dejar de aparecer.",
   "preconditions": "Storefront Unimarc activo en Desktop 1280×900. Al menos un content asset de tipo banner configurado en BM, vinculado a un término de búsqueda específico (ej. término = 'aceite', matchmode = 'strict'). User type: Guest.",
   "screenshots": [
    {
     "caption": "Paso 1 — srp de aceite sin banner",
     "file": "TC-B2C18-D-018-p01-srp-de-aceite-sin-banner.png"
    },
    {
     "caption": "Paso 2 — srp de aceites sin banner",
     "file": "TC-B2C18-D-018-p02-srp-de-aceites-sin-banner.png"
    }
   ],
   "status": "Bloqueado",
   "steps": "1. Navegar al Home con viewport Desktop 1280×900.\n2. Buscar el término exacto configurado en el content asset (ej. 'aceite').\n3. Acceder a la SRP.\n4. Verificar que el banner configurado para 'aceite' se muestra en la SRP.\n5. Buscar una variación del término (ej. 'aceites').\n6. Verificar que el banner NO se muestra para la variación (matchmode strict).",
   "test_data": "- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {BROWSER}: Chrome\n- {SEARCH_BANNER_STRICT_001}: aceite\n- {VIEWPORT}: 1440x900",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-03",
   "expected": "El componente de paginación muestra: página 1 resaltada como activa, números de páginas disponibles visibles y flecha (›) hacia la página siguiente. La estructura visual del componente es correcta.",
   "form_factor": "desktop",
   "id": "TC-B2C18-D-026",
   "name": "Verificar que el componente de paginación muestra la página 1 activa, los números de página disponibles y la flecha de navegación [Desktop] [Guest]",
   "observation": "Causa: el caso exige una búsqueda con más de 50 resultados y la columna Test data no declara ningún término que la cumpla (el ejemplo de la precondición, \"leche\", devuelve hoy 48 productos en DEV). Acción requerida: referenciar en la fila un token de término con más de 50 resultados (el Excel de data ya tiene {SEARCH_TERM_50+_SKUS} = \"pan molde\", pero esta fila no lo declara).",
   "preconditions": "Storefront Unimarc activo en Desktop 1280×900. SRP cargada con un término de búsqueda que retorna más de 50 productos (ej. 'leche'). User type: Guest.",
   "status": "Bloqueado Data",
   "steps": "1. Navegar al Home con viewport Desktop 1280×900.\n2. Buscar un término que devuelva más de 50 resultados.\n3. Acceder a la SRP y desplazarse hasta el final del listado de productos.\n4. Verificar que el componente de paginación se muestra debajo del listado.\n5. Verificar que la página 1 aparece resaltada/activa.\n6. Verificar que se visualizan los números de páginas disponibles.\n7. Verificar que se muestra la flecha (›) de navegación hacia la página siguiente.",
   "test_data": "- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {BROWSER}: Chrome\n- {VIEWPORT}: 1440x900",
   "viewport": "1280x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-03",
   "expected": "La SRP muestra el banner circular debajo del título con: imagen circular y nombre. El clic navega correctamente al destino configurado.",
   "form_factor": "desktop",
   "id": "TC-B2C18-D-027",
   "name": "Verificar que la SRP con content asset Banner circular muestra el banner bajo el título con imagen circular, nombre y enlace [Desktop] [Guest]",
   "observation": "Causa: el caso exige un content asset Banner circular asociado al slot de la SRP del término declarado (\"leche\"), y la SRP no renderiza ninguno (re-verificado el 2026-11-03). Acción requerida: configurar en DEV el Banner circular para la SRP del término de prueba, o declarar en la fila un término cuya SRP ya lo tenga.",
   "observed": "La SRP de \"leche\" (48 productos) no renderiza ningún banner circular bajo el título: entre el título y la grilla solo están el contador, el orden, \"Filtros\" y los chips de categoría.",
   "preconditions": "Storefront Unimarc activo en Desktop 1280×900. Content asset de tipo Banner circular configurado en BM y asociado al slot de la SRP de prueba. User type: Guest.",
   "screenshots": [
    {
     "caption": "Captura del impedimento (exploración)",
     "file": "TC-B2C18-D-027.png"
    }
   ],
   "status": "Bloqueado",
   "steps": "1. Navegar al Home con viewport Desktop 1280×900.\n2. Buscar un término cuya SRP tenga content asset Banner circular configurado.\n3. Acceder a la SRP.\n4. Verificar que el banner circular se muestra debajo del título de la SRP.\n5. Verificar que el banner tiene: imagen circular y nombre del banner.\n6. Hacer clic en el banner y verificar que navega al destino configurado (categoría, colección u otra URL).",
   "test_data": "- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {BROWSER}: Chrome\n- {SEARCH_TERM_001}: leche\n- {VIEWPORT}: 1440x900",
   "viewport": "1280x900"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-03",
   "expected": "La SRP Mobile carga hasta 50 productos en la carga inicial con estructura correcta. (Cobertura detallada: B2C-59.)",
   "form_factor": "mobile",
   "id": "TC-B2C18-M-008",
   "name": "Verificar que la SRP muestra hasta 50 productos en la carga inicial con estructura de shelf correcta [Mobile] [Guest]",
   "observation": "Causa: el caso exige una búsqueda con más de 50 resultados y la columna Test data no declara ningún término que la cumpla (el ejemplo de la precondición, \"leche\", devuelve hoy 48 productos en DEV). Acción requerida: referenciar en la fila un token de término con más de 50 resultados (el Excel de data ya tiene {SEARCH_TERM_50+_SKUS} = \"pan molde\", pero esta fila no lo declara).",
   "preconditions": "Storefront Unimarc activo en Mobile 390×844. SRP cargada con un término de búsqueda que retorna más de 50 productos (ej. 'leche'). User type: Guest.",
   "status": "Bloqueado Data",
   "steps": "1. Navegar al Home con viewport Mobile 390×844.\n2. Buscar un término que devuelva más de 50 resultados.\n3. Verificar que la SRP carga hasta 50 productos en la carga inicial.\n4. Examinar la estructura de al menos 3 productos: imagen, nombre, precio, precio oferta (si aplica) y botón 'Agregar al carro'.",
   "test_data": "- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-03",
   "expected": "Al llegar al final del listado aparece el indicador de carga '…'. El sistema carga automáticamente el siguiente bloque de productos. El scroll infinito funciona correctamente en Mobile.",
   "form_factor": "mobile",
   "id": "TC-B2C18-M-009",
   "name": "Verificar que el scroll infinito en la SRP carga el siguiente bloque de productos con indicador de carga al llegar al final [Mobile] [Guest]",
   "observation": "Causa: el caso exige una búsqueda con más de 50 resultados y la columna Test data no declara ningún término que la cumpla (el ejemplo de la precondición, \"leche\", devuelve hoy 48 productos en DEV). Acción requerida: referenciar en la fila un token de término con más de 50 resultados (el Excel de data ya tiene {SEARCH_TERM_50+_SKUS} = \"pan molde\", pero esta fila no lo declara).",
   "preconditions": "Storefront Unimarc activo en Mobile 390×844. SRP cargada con un término de búsqueda que retorna más de 50 productos (ej. 'leche'). User type: Guest.",
   "status": "Bloqueado Data",
   "steps": "1. Navegar al Home con viewport Mobile 390×844.\n2. Buscar un término que devuelva más de 50 resultados.\n3. Desplazarse (scroll) hasta el final del listado de los 50 productos iniciales.\n4. Verificar que aparece el indicador de carga '…' al llegar al final.\n5. Verificar que el sistema carga automáticamente el siguiente bloque de productos.\n6. Confirmar que el scroll infinito funciona sin necesidad de acción explícita del usuario.",
   "test_data": "- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 41,
   "executed_at": "2026-11-03",
   "expected": "Con despacho activo, la SRP Mobile muestra productos filtrados según la cobertura y tienda asignada a la dirección de entrega.",
   "form_factor": "mobile",
   "id": "TC-B2C18-M-011",
   "name": "Verificar que con despacho a domicilio activo la SRP muestra productos según cobertura de la dirección configurada [Mobile] [Guest]",
   "observed": "Con despacho a Vilanova 122, Las Condes activo, la SRP Mobile de \"leche\" resolvió la disponibilidad según la tienda asignada a la dirección: al menos un producto cambió respecto del catálogo general.",
   "preconditions": "Storefront Unimarc activo en Mobile 390×844. Método de entrega 'Despacho a domicilio' activo con una dirección configurada. Catálogo con productos diferenciados por stock de tienda. User type: Guest.",
   "screenshots": [
    {
     "caption": "Paso 2 — metodo de entrega activo vilanova 122",
     "file": "TC-B2C18-M-011-p02-metodo-de-entrega-activo-vilanova-122.png"
    },
    {
     "caption": "Paso 3 — srp de leche con el metodo activo",
     "file": "TC-B2C18-M-011-p03-srp-de-leche-con-el-metodo-activo.png"
    },
    {
     "caption": "Paso 4 — 1 producto s con disponibilidad distinta a la del catalogo g",
     "file": "TC-B2C18-M-011-p04-1-producto-s-con-disponibilidad-distinta-a-la-del-catalogo-g.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C18-M-011.png"
    }
   ],
   "spec": "tests/B2C-18.spec.ts:1270",
   "status": "Aprobado",
   "steps": "1. Navegar al Home con viewport Mobile 390×844 con despacho a domicilio activo.\n2. Buscar 'leche' y acceder a la SRP.\n3. Verificar que los productos mostrados corresponden al stock disponible según la cobertura y tienda asignada a la dirección.",
   "test_data": "- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {DIRECCION_DESPACHO_002}: Vilanova 122, Las Condes\n- {SEARCH_TERM_001}: leche",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 64,
   "executed_at": "2026-11-03",
   "expected": "Con retiro activo, la SRP Mobile muestra productos según el stock de la tienda de retiro seleccionada.",
   "form_factor": "mobile",
   "id": "TC-B2C18-M-012",
   "name": "Verificar que con retiro en tienda activo la SRP muestra productos según stock de la tienda seleccionada [Mobile] [Guest]",
   "observed": "Con retiro en Unimarc Las Condes activo, la SRP Mobile de \"leche\" resolvió la disponibilidad contra el stock de la tienda: al menos un producto cambió respecto del catálogo general.",
   "preconditions": "Storefront Unimarc activo en Mobile 390×844. Método de entrega 'Retiro en tienda' activo con una tienda seleccionada. Catálogo con productos diferenciados por stock. User type: Guest.",
   "screenshots": [
    {
     "caption": "Paso 2 — metodo de entrega activo unimarc las condes",
     "file": "TC-B2C18-M-012-p02-metodo-de-entrega-activo-unimarc-las-condes.png"
    },
    {
     "caption": "Paso 3 — srp de leche con el metodo activo",
     "file": "TC-B2C18-M-012-p03-srp-de-leche-con-el-metodo-activo.png"
    },
    {
     "caption": "Paso 4 — 1 producto s con disponibilidad distinta a la del catalogo g",
     "file": "TC-B2C18-M-012-p04-1-producto-s-con-disponibilidad-distinta-a-la-del-catalogo-g.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C18-M-012.png"
    }
   ],
   "spec": "tests/B2C-18.spec.ts:1283",
   "status": "Aprobado",
   "steps": "1. Navegar al Home con viewport Mobile 390×844 con retiro en tienda activo.\n2. Buscar 'leche' y acceder a la SRP.\n3. Verificar que los productos corresponden al stock de la tienda de retiro seleccionada.",
   "test_data": "- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {SEARCH_TERM_001}: leche\n- {TIENDA_RETIRO_001}: Unimarc Las Condes",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 55,
   "executed_at": "2026-11-03",
   "expected": "El producto no disponible muestra: etiqueta 'No disponible', botón 'Agregar' oculto, botón 'Ver similares' visible.",
   "form_factor": "mobile",
   "id": "TC-B2C18-M-013",
   "name": "Verificar que un producto sin disponibilidad en la SRP muestra etiqueta 'No disponible', botón Agregar oculto y botón 'Ver similares' visible [Mobile] [Guest]",
   "observed": "Con retiro en Unimarc Las Condes, la SRP Mobile de \"leche\" muestra un producto con la etiqueta \"No disponible\", sin botón Agregar y con \"Ver similares\" visible.",
   "preconditions": "Storefront Unimarc activo en Mobile 390×844. Método de entrega activo. Al menos un producto sin stock para el método configurado. User type: Guest.",
   "screenshots": [
    {
     "caption": "Paso 2 — srp de leche con retiro en unimarc las condes",
     "file": "TC-B2C18-M-013-p02-srp-de-leche-con-retiro-en-unimarc-las-condes.png"
    },
    {
     "caption": "Paso 3 — producto sin disponibilidad en la grilla",
     "file": "TC-B2C18-M-013-p03-producto-sin-disponibilidad-en-la-grilla.png"
    },
    {
     "caption": "Paso 4 — etiqueta del shelf no disponible",
     "file": "TC-B2C18-M-013-p04-etiqueta-del-shelf-no-disponible.png"
    },
    {
     "caption": "Paso 5 — boton agregar oculto y ver similares visible",
     "file": "TC-B2C18-M-013-p05-boton-agregar-oculto-y-ver-similares-visible.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C18-M-013.png"
    }
   ],
   "spec": "tests/B2C-18.spec.ts:1294",
   "status": "Aprobado",
   "steps": "1. Navegar al Home con viewport Mobile 390×844 con método de entrega activo.\n2. Buscar un término que incluya productos no disponibles.\n3. Identificar un producto no disponible en la SRP.\n4. Verificar etiqueta 'No disponible'.\n5. Verificar que botón 'Agregar' está oculto.\n6. Verificar que botón 'Ver similares' es visible.",
   "test_data": "- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {SEARCH_TERM_001}: leche\n- {SKU_SIN_STOCK}: 000000000000029403-KG\n- {TIENDA_RETIRO_001}: Unimarc Las Condes",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-03",
   "expected": "Al cambiar el método de entrega, la SRP Mobile actualiza la disponibilidad de productos. La actualización ocurre sin salir de la SRP.",
   "form_factor": "mobile",
   "id": "TC-B2C18-M-014",
   "name": "Verificar que cambiar el método de entrega desde la SRP actualiza la disponibilidad de productos sin salir de la SRP [Mobile] [Guest]",
   "observation": "Causa: el caso parte con despacho a domicilio activo y la columna Test data no declara ninguna dirección (solo {SEARCH_TERM_001} y {TIENDA_RETIRO_001}); elegir una del Excel de data a criterio propio dejaría el veredicto sin significado. Acción requerida: referenciar en la fila del TC el token de la dirección de despacho con que debe correrse (p. ej. {DIRECCION_DESPACHO_002}).",
   "preconditions": "Storefront Unimarc activo en Mobile 390×844. SRP cargada con despacho activo. Opción de cambio de método disponible desde la SRP. User type: Guest.",
   "status": "Bloqueado Data",
   "steps": "1. Navegar al Home con viewport Mobile 390×844 con despacho activo.\n2. Acceder a la SRP con 'leche'.\n3. Cambiar el método a 'Retiro en tienda' seleccionando una tienda.\n4. Verificar que la SRP actualiza la disponibilidad según el stock de la tienda.\n5. Confirmar que no es necesario salir de la SRP.",
   "test_data": "- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {SEARCH_TERM_001}: leche\n- {TIENDA_RETIRO_001}: Unimarc Las Condes",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 6,
   "executed_at": "2026-11-03",
   "expected": "La SRP Mobile muestra el componente de monetización del tipo configurado en BM. (Detalle funcional: B2C-5.)",
   "form_factor": "mobile",
   "id": "TC-B2C18-M-015",
   "name": "Verificar que los componentes de monetización configurados en BM se muestran en la SRP según el tipo activo [Mobile] [Guest]",
   "observation": "Causa: el Sponsor Banner (tipo 2) configurado para la SRP de \"leche\" se renderiza, pero sus imágenes no existen en la librería de contenido de DEV: la imagen de campaña y el logo del patrocinador responden 404 y el banner se ve roto. Acción requerida: cargar en BM (DEV) las imágenes del componente de monetización y re-ejecutar.",
   "observed": "La SRP Mobile de \"leche\" muestra 2 Sponsor Banners (tipo 2) con \"Patrocinado\" y enlace, pero la imagen de campaña y el logo del patrocinador no se pintan (404): se ve el ícono de imagen rota.",
   "preconditions": "Storefront Unimarc activo en Mobile 390×844. Componentes de monetización configurados en BM para la categoría de la búsqueda de prueba. User type: Guest.",
   "screenshots": [
    {
     "caption": "Paso 3 — srp de leche",
     "file": "TC-B2C18-M-015-p03-srp-de-leche.png"
    },
    {
     "caption": "Paso 4 — sponsor banner tipo 2 interrumpiendo la grilla",
     "file": "TC-B2C18-M-015-p04-sponsor-banner-tipo-2-interrumpiendo-la-grilla.png"
    },
    {
     "caption": "Paso 5 — 2 sponsor banner s en la srp",
     "file": "TC-B2C18-M-015-p05-2-sponsor-banner-s-en-la-srp.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C18-M-015.png"
    }
   ],
   "status": "Bloqueado",
   "steps": "1. Navegar al Home con viewport Mobile 390×844.\n2. Buscar un término cuya categoría tenga componente de monetización activo.\n3. Acceder a la SRP.\n4. Verificar que se muestra el tipo de componente configurado (Sponsor Products, Banner o Carrusel).",
   "test_data": "- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {SEARCH_TERM_001}: leche",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-03",
   "expected": "La SRP Mobile muestra el banner circular bajo el título con imagen y nombre. El tap navega al destino configurado.",
   "form_factor": "mobile",
   "id": "TC-B2C18-M-025",
   "name": "Verificar que la SRP con content asset Banner circular muestra el banner bajo el título con imagen circular, nombre y enlace [Mobile] [Guest]",
   "observation": "Causa: el caso exige un content asset Banner circular asociado al slot de la SRP del término declarado (\"leche\"), y la SRP Mobile no renderiza ninguno (re-verificado el 2026-11-03). Acción requerida: configurar en DEV el Banner circular para la SRP del término de prueba, o declarar en la fila un término cuya SRP ya lo tenga.",
   "observed": "La SRP Mobile de \"leche\" no renderiza ningún banner circular bajo el título.",
   "preconditions": "Storefront Unimarc activo en Mobile 390×844. Content asset de tipo Banner circular configurado en BM y asociado al slot de la SRP de prueba. User type: Guest.",
   "screenshots": [
    {
     "caption": "Captura del impedimento (exploración)",
     "file": "TC-B2C18-M-025.png"
    }
   ],
   "status": "Bloqueado",
   "steps": "1. Navegar al Home con viewport Mobile 390×844.\n2. Buscar un término cuya SRP tenga content asset Banner circular.\n3. Verificar que el banner circular se muestra debajo del título.\n4. Verificar imagen circular y nombre del banner.\n5. Hacer tap en el banner y verificar que navega al destino configurado.",
   "test_data": "- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {SEARCH_TERM_001}: leche",
   "viewport": "390x844"
  }
 ]
}
-->
