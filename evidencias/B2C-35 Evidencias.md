# B2C-35 - Product List Page (PLP) N2 y N3 - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-35 |
| Última actualización | 2026-11-10 |
| Ejecutado por | Victor Chirinos |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | webkit |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP1/B2C-35 Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 14 |
| Bloqueado | 6 |
| Aprobado | 4 |
| Rechazado | 2 |
| **Total** | **26** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-10 | 10 | TC-B2C35-D-001, TC-B2C35-D-009, TC-B2C35-M-009, TC-B2C35-M-020, TC-B2C35-M-029, TC-B2C35-M-030, TC-B2C35-M-040, TC-B2C35-M-041, TC-B2C35-M-042, TC-B2C35-M-043 |
| 2026-11-03 | 20 | TC-B2C35-D-001, TC-B2C35-D-004, TC-B2C35-D-005, TC-B2C35-D-008, TC-B2C35-D-009, TC-B2C35-D-010, TC-B2C35-D-014, TC-B2C35-M-003, TC-B2C35-M-004, TC-B2C35-M-009, TC-B2C35-M-014, TC-B2C35-M-018, TC-B2C35-M-020, TC-B2C35-M-023, TC-B2C35-M-024, TC-B2C35-M-025, TC-B2C35-M-026, TC-B2C35-M-028, TC-B2C35-M-032, TC-B2C35-M-033 |

## Detalle por caso de prueba

### TC-B2C35-D-001 - La PLP N2/N3 carga desde menu, URL directa, banner del Home o carrusel del Home

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-10 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-35.spec.ts:468 |

**Precondiciones**

- Viewport: Desktop 1440x900

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {COMPRADOR_PASSWORD} = contraseña de la cuenta (no se transcribe)
- {COMPRADOR_USER} = vhchirinos+comprador@avatar-global.com
- {HOME_BANNER_N2} = Home_Banner
- {HOME_CARRUSEL_N2} = Carrusel_Banner
- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. Acceder desde el menu.
2. Repetir con URL directa, banner y carrusel del Home.

**Resultado esperado**

En los 4 puntos de entrada carga la PLP correcta.

**Resultado obtenido**

Causa: {HOME_CARRUSEL_N2} = Carrusel_Banner (tb-banner-t4-hp) solo enlaza a categorías N1 (/category/carnes, /category/bebes-y-ninos, /category/frutas-y-verduras, /category/desayuno-y-dulces), así que el cuarto punto de entrada (carrusel → PLP N2/N3) no se puede probar. Las otras tres entradas cargan la PLP correcta: menú y URL directa → Vacuno (/category/carnes_vacuno); Home_Banner → su N3 de leches. Acción: declarar un carrusel del Home que enlace a una N2/N3, o configurarlo en Carrusel_Banner. Re-verificado el 2026-11-10.

**Observación**

Causa: {HOME_CARRUSEL_N2} = Carrusel_Banner (tb-banner-t4-hp) solo enlaza a categorías N1 (/category/carnes, /category/bebes-y-ninos, /category/frutas-y-verduras, /category/desayuno-y-dulces), así que el cuarto punto de entrada (carrusel → PLP N2/N3) no se puede probar. Las otras tres entradas cargan la PLP correcta: menú y URL directa → Vacuno (/category/carnes_vacuno); Home_Banner → su N3 de leches. Acción: declarar un carrusel del Home que enlace a una N2/N3, o configurarlo en Carrusel_Banner. Re-verificado el 2026-11-10.

**Evidencia**

![Paso 1 — menu de categorias](<B2C-35 Evidencias/TC-B2C35-D-001-p01-menu-de-categorias.png>)

![Paso 1 — plp vacuno desde el menu](<B2C-35 Evidencias/TC-B2C35-D-001-p01-plp-vacuno-desde-el-menu.png>)

![Paso 2 — carrusel tb banner t4 hp del home](<B2C-35 Evidencias/TC-B2C35-D-001-p02-carrusel-tb-banner-t4-hp-del-home.png>)

![Paso 2 — plp desde el banner del home lacteos huevos y refrigerados l](<B2C-35 Evidencias/TC-B2C35-D-001-p02-plp-desde-el-banner-del-home-lacteos-huevos-y-refrigerados-l.png>)

![Paso 2 — plp vacuno por url directa](<B2C-35 Evidencias/TC-B2C35-D-001-p02-plp-vacuno-por-url-directa.png>)

![Estado final](<B2C-35 Evidencias/TC-B2C35-D-001.png>)

---

### TC-B2C35-D-004 - El titulo y contador de productos se actualizan al cambiar la direccion

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 51.0 s |

**Precondiciones**

- Viewport: Desktop 1440x900

**Data utilizada**

- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {PLP_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno
- {TIENDA_RETIRO_001}: Unimarc Las Condes
- {TIENDA_RETIRO_002}: Unimarc Los Trapenses

**Pasos ejecutados**

1. Ver el contador con una direccion.
2. Cambiar de direccion.

**Resultado esperado**

El contador se actualiza automaticamente.

**Resultado obtenido**

Con retiro en Unimarc Las Condes la PLP de Vacuno muestra 10 productos; al cambiar a Unimarc Los Trapenses desde la misma PLP (sin recarga) sigue en 10, que es tambien lo que muestra la PLP cargada desde cero con Los Trapenses.

**Observación**

Causa: con las dos tiendas declaradas ({TIENDA_RETIRO_001} Unimarc Las Condes y {TIENDA_RETIRO_002} Unimarc Los Trapenses) la categoria {PLP_URL} tiene la misma cantidad de productos (10), asi que la actualizacion del contador no es observable: el valor tras el cambio coincide con el de la nueva tienda, pero tambien con el anterior. Accion requerida: declarar dos metodos de entrega cuyas tiendas tengan distinta cantidad de productos en la categoria y re-ejecutar.

**Evidencia**

![Paso 1 — vacuno con unimarc las condes 10 productos](<B2C-35 Evidencias/TC-B2C35-D-004-p01-vacuno-con-unimarc-las-condes-10-productos.png>)

![Paso 2 — vacuno con unimarc los trapenses 10 productos](<B2C-35 Evidencias/TC-B2C35-D-004-p02-vacuno-con-unimarc-los-trapenses-10-productos.png>)

![Estado final del caso](<B2C-35 Evidencias/TC-B2C35-D-004.png>)

---

### TC-B2C35-D-005 - Las pildoras de PLP N2 muestran Todas por defecto y las N3 en orden BM; sin N3 no se renderizan; en Mobile se desplazan horizontalmente

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-03 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 9.0 s |
| Spec | tests/B2C-35.spec.ts:550 |

**Precondiciones**

- Viewport: Desktop 1440x900

**Data utilizada**

- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CATEGORY_N2_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_cerdo
- {CATEGORY_N2_WO_SUB}: Detergente

**Pasos ejecutados**

1. Ver una PLP N2 con subcategorias N3.
2. Ver una PLP N2 sin subcategorias N3.
3. Deslizar las pildoras en Mobile.

**Resultado esperado**

El primer caso muestra las pildoras correctas; el segundo no muestra pildoras; en Mobile se desplazan sin romper el layout.

**Resultado obtenido**

Carnes > Cerdo (N2 con N3) muestra "Todo" activa y las N3 Chuleta, Costillas y costillar, Lomo cerdo, Malaya y plateada y Pulpa cerdo; en 390 px la fila se desplaza 250 px sin mover la pagina. Pero Detergente (N2 sin N3) SI muestra fila de pildoras: "Todo", "Detergente" (seleccionada) y las hermanas de Limpieza.

**Observación**

Esperado: "el segundo no muestra pildoras". Obtenido: la PLP N2 Detergente (sin N3) muestra la fila de pildoras con "Todo" y "Detergente" seleccionada. tests/B2C-35.spec.ts:550. Bug: B2C-1439.

**Evidencia**

![Paso 1 — n2 con subcategorias pildoras](<B2C-35 Evidencias/TC-B2C35-D-005-p01-n2-con-subcategorias-pildoras.png>)

![Paso 2 — detergente n2 sin n3](<B2C-35 Evidencias/TC-B2C35-D-005-p02-detergente-n2-sin-n3.png>)

![Paso 3 — pildoras desplazadas en 390 px](<B2C-35 Evidencias/TC-B2C35-D-005-p03-pildoras-desplazadas-en-390-px.png>)

![Estado al fallar la aserción](<B2C-35 Evidencias/TC-B2C35-D-005.png>)

---

### TC-B2C35-D-008 - La grilla muestra 50 productos con imagen, nombre, precio y boton Agregar al carro

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-03 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 37.0 s |

**Precondiciones**

- Viewport: Desktop 1440x900

**Data utilizada**

- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CATEGORY_N3_MAS_50_PRODS}: Pan molde y pita

**Pasos ejecutados**

1. Ver la grilla inicial sin filtros.
2. Contar productos y verificar datos.

**Resultado esperado**

Se muestran 50 productos con todos los datos indicados.

**Resultado obtenido**

Pan molde y pita declara 103 productos y la grilla inicial muestra 50, todos con nombre, precio y Agregar. Uno, Prosepan | Pan de molde integral familiar 650 g (000000000000627789-UN), se muestra con el placeholder "Imagen no disponible".

**Observación**

Causa: el producto 000000000000627789-UN (Prosepan, pan de molde integral familiar 650 g) no tiene imagen en el catalogo de DEV y la grilla muestra "Imagen no disponible"; lo demas del esperado se cumple (50 de 103 productos con nombre, precio y Agregar). Accion requerida: cargar la imagen del SKU en el catalogo y re-ejecutar.

**Evidencia**

![Paso 1 — pan molde y pita 103 productos](<B2C-35 Evidencias/TC-B2C35-D-008-p01-pan-molde-y-pita-103-productos.png>)

![Paso 2 — grilla con 50 productos](<B2C-35 Evidencias/TC-B2C35-D-008-p02-grilla-con-50-productos.png>)

![Paso 2 — producto con imagen no disponible](<B2C-35 Evidencias/TC-B2C35-D-008-p02-producto-con-imagen-no-disponible.png>)

---

### TC-B2C35-D-009 - Web Desktop muestra paginacion y Mobile/App cargan mas via scroll infinito

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-10 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | (sin spec: el caso quedó bloqueado antes de ejecutarse) |

**Precondiciones**

- Viewport: Desktop 1440x900

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CATEGORY_N2_MAS_50_PRODS} = {CATEGORY_N2_MAS_50_PRODS}

**Pasos ejecutados**

1. Llegar al final del listado en Desktop.
2. Repetir en Mobile/App.

**Resultado esperado**

Desktop muestra paginacion; Mobile/App cargan mas productos con scroll infinito.

**Resultado obtenido**

Causa: {CATEGORY_N2_MAS_50_PRODS} no tiene fila en el Excel de data. Acción: cargar una categoría N2 con más de 50 productos (p. ej. /category/panaderia-y-pasteleria_pan-envasado, 103 productos) y re-ejecutar.

**Observación**

Causa: {CATEGORY_N2_MAS_50_PRODS} no tiene fila en el Excel de data. Acción: cargar una categoría N2 con más de 50 productos (p. ej. /category/panaderia-y-pasteleria_pan-envasado, 103 productos) y re-ejecutar.

---

### TC-B2C35-D-010 - La disponibilidad varia segun el metodo de entrega; los no disponibles muestran Ver similares

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- Viewport: Desktop 1440x900

**Data utilizada**

- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {SKU_SIN_STOCK}: 000000000000029403-KG
- {TIENDA_RETIRO_001}: Unimarc Las Condes

**Pasos ejecutados**

1. Ver la PLP sin metodo, luego con despacho y retiro.
2. Verificar un producto no disponible.

**Resultado esperado**

La disponibilidad se ajusta segun el metodo; un producto no disponible muestra 'Pronto disponible' y 'Ver similares'.

**Observación**

Causa: el caso compara la PLP sin metodo, con despacho y con retiro, y la columna Test data no declara ninguna direccion de despacho (solo {SKU_SIN_STOCK} y {TIENDA_RETIRO_001}); tampoco declara la PLP donde verla. Accion requerida: referenciar en la fila la direccion de despacho y la PLP del caso, y re-ejecutar.

---

### TC-B2C35-D-014 - La paginacion aparece solo con mas de 50 productos, con elipsis en listados largos y navegacion que respeta filtros

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- Viewport: Desktop 1440x900

**Data utilizada**

- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CATEGORY_N3_MAS_50_PRODS}: Pan molde y pita

**Pasos ejecutados**

1. Ver la paginacion con mas de 50 productos y mas de 5 paginas.
2. Cambiar de pagina y verificar filtros/scroll.
3. Ver una categoria con 50 productos o menos.

**Resultado esperado**

La paginacion, la elipsis y la navegacion funcionan segun lo descrito; sin suficientes productos no se renderiza.

**Observación**

Causa: el caso exige una categoria con mas de 5 paginas (mas de 250 productos) para la elipsis y otra con 50 productos o menos. {CATEGORY_N3_MAS_50_PRODS} = Pan molde y pita tiene 103 productos (3 paginas, sin elipsis) y la fila no declara la categoria de 50 o menos. Accion requerida: declarar una categoria con mas de 250 productos y una con 50 o menos, y re-ejecutar.

---

### TC-B2C35-M-003 - Verificar que un banner del Home vinculado a una categoría abre su PLP [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 40.0 s |
| Spec | tests/B2C-35.spec.ts:1117 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El Home tiene el banner {HOME_BANNER_N2} vinculado a una categoría N2 o N3

**Data utilizada**

- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {HOME_BANNER_N2}: Home_Banner

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El sistema carga el Home con el banner Home_Banner.
3. El usuario toca el banner Home_Banner.
4. El sistema carga la PLP de la categoría vinculada al banner.

**Resultado esperado**

Se muestra la PLP N2/N3 vinculada al banner {HOME_BANNER_N2}.

**Resultado obtenido**

El banner Home_Banner (tb-banner-hp) tiene una slide que enlaza a la N3 Leches blancas; al tocarla se abre /category/lacteos-huevos-y-refrigerados_leches-y-cremas_leches-blancas con su titulo y listado.

**Evidencia**

![Paso 2 — banner tb banner hp del home](<B2C-35 Evidencias/TC-B2C35-M-003-p02-banner-tb-banner-hp-del-home.png>)

![Paso 4 — plp lacteos huevos y refrigerados leches y cremas leches bla](<B2C-35 Evidencias/TC-B2C35-M-003-p04-plp-lacteos-huevos-y-refrigerados-leches-y-cremas-leches-bla.png>)

![Estado final del caso](<B2C-35 Evidencias/TC-B2C35-M-003.png>)

---

### TC-B2C35-M-004 - Verificar que un carrusel del Home vinculado a una categoría abre su PLP [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-03 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El Home tiene el carrusel {HOME_CARRUSEL_N2} vinculado a una categoría N2 o N3

**Data utilizada**

- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {HOME_CARRUSEL_N2}: Carrusel_Banner

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El sistema carga el Home con el carrusel Carrusel_Banner.
3. El usuario toca el enlace de categoría del carrusel Carrusel_Banner.
4. El sistema carga la PLP de la categoría vinculada al carrusel.

**Resultado esperado**

Se muestra la PLP N2/N3 vinculada al carrusel {HOME_CARRUSEL_N2}.

**Resultado obtenido**

El carrusel Carrusel_Banner del Home (tb-banner-t4-hp, "Cada dia, una ocasion") solo enlaza a categorias N1 (carnes, bebes-y-ninos, frutas-y-verduras, desayuno-y-dulces) y a /search?q=ofertas.

**Observación**

Causa: el carrusel {HOME_CARRUSEL_N2} = Carrusel_Banner (tb-banner-t4-hp) no esta vinculado a ninguna categoria N2 o N3: solo enlaza a N1 y a una busqueda (re-verificado el 2026-11-03). Accion requerida: configurar en el carrusel un enlace a una N2/N3 y re-ejecutar.

**Evidencia**

![Captura del impedimento (exploración)](<B2C-35 Evidencias/TC-B2C35-M-004.png>)

---

### TC-B2C35-M-009 - Verificar que el contador de productos se actualiza al cambiar la dirección [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-10 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 67.4 s |
| Spec | tests/B2C-35.spec.ts:1143 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: PLP N2
- Despacho a domicilio activo con Calle Uno 23, La Florida

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CATEGORY_N2_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_cerdo
- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida
- {TIENDA_RETIRO_001} = Unimarc Las Condes

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_cerdo.
2. El sistema carga la PLP N2 con el listado de productos.
3. El usuario anota la cantidad de productos.
4. El usuario cambia desde el Store Locator a Retiro en tienda en Unimarc Las Condes.
5. El sistema actualiza la PLP y la cantidad de productos según la nueva tienda.

**Resultado esperado**

La cantidad de productos se actualiza sin recargar manualmente y corresponde a la tienda Unimarc Las Condes.

**Resultado obtenido**

Causa: con {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida) y con {TIENDA_RETIRO_001} (Unimarc Las Condes), {CATEGORY_N2_URL} (/category/carnes_cerdo) tiene la misma cantidad de productos: 15 y 15. La PLP no quita los productos sin stock, así que no se puede observar que el contador se actualice. El cambio de método sí se aplicó sin recargar la página. Acción: declarar una dirección y una tienda con distinta cantidad de productos en la categoría. Re-verificado el 2026-11-10.

**Observación**

Causa: con {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida) y con {TIENDA_RETIRO_001} (Unimarc Las Condes), {CATEGORY_N2_URL} (/category/carnes_cerdo) tiene la misma cantidad de productos: 15 y 15. La PLP no quita los productos sin stock, así que no se puede observar que el contador se actualice. El cambio de método sí se aplicó sin recargar la página. Acción: declarar una dirección y una tienda con distinta cantidad de productos en la categoría. Re-verificado el 2026-11-10.

**Evidencia**

![Paso 3 — plp n2 con despacho 15 productos](<B2C-35 Evidencias/TC-B2C35-M-009-p03-plp-n2-con-despacho-15-productos.png>)

![Paso 5 — plp n2 con retiro en unimarc las condes 15 productos](<B2C-35 Evidencias/TC-B2C35-M-009-p05-plp-n2-con-retiro-en-unimarc-las-condes-15-productos.png>)

![Estado final](<B2C-35 Evidencias/TC-B2C35-M-009.png>)

---

### TC-B2C35-M-014 - Verificar que una PLP N2 sin subcategorías N3 no muestra la fila de píldoras [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-03 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 34.0 s |
| Spec | tests/B2C-35.spec.ts:1164 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: PLP N2

**Data utilizada**

- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CATEGORY_N2_WO_SUB}: Detergente

**Pasos ejecutados**

1. El usuario ingresa a Detergente.
2. El sistema carga la PLP N2 con el listado de productos.

**Resultado esperado**

No se muestra la fila de píldoras y la grilla de productos aparece directamente, sin espacio vacío.

**Resultado obtenido**

La PLP N2 Detergente (sin N3, abierta desde el menu de categorias) muestra bajo el titulo la fila de pildoras con "Todo" y "Detergente" seleccionada.

**Observación**

Esperado: "No se muestra la fila de pildoras". Obtenido: la PLP N2 Detergente (sin N3) muestra "Todo" y "Detergente" seleccionada. tests/B2C-35.spec.ts:1164. Bug: B2C-1440.

**Evidencia**

![Paso 2 — plp detergente](<B2C-35 Evidencias/TC-B2C35-M-014-p02-plp-detergente.png>)

---

### TC-B2C35-M-018 - Verificar que la grilla muestra 50 productos en la carga inicial [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: PLP N2
- {PLP_URL_MAS_50} es una categoría N2/N3 con más de 50 productos disponibles

**Data utilizada**

- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CATEGORY_N3_MAS_50_PRODS}: Pan molde y pita

**Pasos ejecutados**

1. El usuario ingresa a {PLP_URL_MAS_50}.
2. El sistema carga la PLP con el listado de productos.
3. El usuario cuenta los productos cargados antes de llegar al final del listado.

**Resultado esperado**

La carga inicial muestra 50 productos.

**Observación**

Causa: los pasos usan {PLP_URL_MAS_50}, que no tiene fila en el Excel de data (la fila declara {CATEGORY_N3_MAS_50_PRODS}, que los pasos no usan). Accion requerida: cargar {PLP_URL_MAS_50} en el Excel de data o corregir los pasos para que usen el token declarado, y re-ejecutar.

---

### TC-B2C35-M-020 - Verificar que el scroll infinito carga el siguiente bloque de 50 productos [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-10 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | (sin spec: el caso quedó bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: PLP N2
- {PLP_URL_MAS_50} es una categoría N2/N3 con más de 50 productos disponibles

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CATEGORY_N3_MAS_50_PRODS} = Pan molde y pita

**Pasos ejecutados**

1. El usuario ingresa a Pan molde y pita.
2. El sistema carga la PLP con el listado de productos.
3. El usuario hace scroll hasta el final del listado visible.
4. El sistema muestra el indicador de carga «…» y agrega el siguiente bloque de productos al listado.

**Resultado esperado**

Se agregan hasta 50 productos más al listado, sin paginación y sin recargar la página.

**Resultado obtenido**

Causa: la precondición usa {PLP_URL_MAS_50}, que no tiene fila en el Excel de data. El paso 1 usa {CATEGORY_N3_MAS_50_PRODS} = «Pan molde y pita», que es un nombre y no una URL. Acción: cargar {PLP_URL_MAS_50} con la URL de una N2/N3 de más de 50 productos y usar un solo token en precondición y pasos.

**Observación**

Causa: la precondición usa {PLP_URL_MAS_50}, que no tiene fila en el Excel de data. El paso 1 usa {CATEGORY_N3_MAS_50_PRODS} = «Pan molde y pita», que es un nombre y no una URL. Acción: cargar {PLP_URL_MAS_50} con la URL de una N2/N3 de más de 50 productos y usar un solo token en precondición y pasos.

---

### TC-B2C35-M-023 - Verificar que con Retiro en tienda la PLP muestra el stock de la tienda elegida [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 56.0 s |
| Spec | tests/B2C-35.spec.ts:1183 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: PLP N2
- Retiro en tienda activo en {TIENDA_RETIRO_001}

**Data utilizada**

- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CATEGORY_N2_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_cerdo
- {TIENDA_RETIRO_001}: Unimarc Las Condes

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_cerdo.
2. El sistema carga la PLP N2 con el listado de productos.

**Resultado esperado**

La disponibilidad de los productos corresponde al stock de {TIENDA_RETIRO_001}.

**Resultado obtenido**

Con retiro en Unimarc Las Condes (tienda 671, inventario smu-inv-uni-671) la disponibilidad de los 15 productos de la PLP de Cerdo coincide con el stock de esa tienda (los 15 con stock).

**Observación**

Los 15 productos de la categoria tienen stock en Unimarc Las Condes: la PLP los muestra todos con Agregar.

**Evidencia**

![Paso 2 — plp n2 con retiro en unimarc las condes](<B2C-35 Evidencias/TC-B2C35-M-023-p02-plp-n2-con-retiro-en-unimarc-las-condes.png>)

![Estado final del caso](<B2C-35 Evidencias/TC-B2C35-M-023.png>)

---

### TC-B2C35-M-024 - Verificar que un producto sin stock muestra "Pronto disponible" y "Ver similares" [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 43.0 s |
| Spec | tests/B2C-35.spec.ts:1207 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: PLP N2
- {SKU_SIN_STOCK} aparece en {PLP_URL} y no tiene stock para el método de entrega activo

**Data utilizada**

- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {DIRECCION_DESPACHO}: Camino La Fuente 1589 Las Condes
- {PLP_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno
- {SKU_SIN_STOCK}: 000000000000029403-KG

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.
2. El sistema carga la PLP con el listado de productos.
3. El usuario ubica 000000000000029403-KG en el listado.

**Resultado esperado**

{SKU_SIN_STOCK} muestra la etiqueta "Pronto disponible", no muestra "Agregar" y muestra el botón "Ver similares".

**Resultado obtenido**

Con despacho a Camino La Fuente 1589 Las Condes, en la PLP de Vacuno el SKU 000000000000029403-KG (Tapapecho vacuno al vacio 2.2 Kg) muestra "Pronto disponible", sin Agregar y con "Ver similares".

**Evidencia**

![Paso 2 — plp con despacho activo](<B2C-35 Evidencias/TC-B2C35-M-024-p02-plp-con-despacho-activo.png>)

![Paso 3 — tarjeta de 000000000000029403 kg](<B2C-35 Evidencias/TC-B2C35-M-024-p03-tarjeta-de-000000000000029403-kg.png>)

![Estado final del caso](<B2C-35 Evidencias/TC-B2C35-M-024.png>)

---

### TC-B2C35-M-025 - Verificar que cambiar el método de entrega desde la PLP actualiza la disponibilidad [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 69.0 s |
| Spec | tests/B2C-35.spec.ts:1229 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: PLP N2
- Despacho a domicilio activo con {DIRECCION_DESPACHO_001}

**Data utilizada**

- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CATEGORY_N2_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_cerdo
- {DIRECCION_DESPACHO_001}: Calle Uno 23, La Florida
- {DIRECCION_DESPACHO}: Camino La Fuente 1589 Las Condes
- {TIENDA_RETIRO_001}: Unimarc Las Condes

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_cerdo.
2. El sistema carga la PLP N2 con el listado de productos.
3. El usuario cambia desde el Store Locator a Retiro en tienda en Unimarc Las Condes.
4. El sistema consulta el stock y actualiza la disponibilidad de los productos de la PLP.

**Resultado esperado**

La PLP refleja el stock de {TIENDA_RETIRO_001} y los productos sin stock allí muestran "Pronto disponible".

**Resultado obtenido**

Con despacho a Calle Uno 23, La Florida la PLP de Cerdo usa el inventario smu-inv-uni-581; al pasar a retiro en Unimarc Las Condes desde el Store Locator pasa a smu-inv-uni-671 y la disponibilidad de los 15 productos coincide con el stock de esa tienda.

**Observación**

En Unimarc Las Condes los 15 productos de la categoria tienen stock, asi que no hubo producto sin stock en el que comprobar "Pronto disponible". La precondicion nombra {DIRECCION_DESPACHO_001} y Test data declara {DIRECCION_DESPACHO}: se uso la de la precondicion.

**Evidencia**

![Paso 2 — plp n2 con despacho smu inv uni 581](<B2C-35 Evidencias/TC-B2C35-M-025-p02-plp-n2-con-despacho-smu-inv-uni-581.png>)

![Paso 4 — plp n2 con retiro en unimarc las condes smu inv uni 671](<B2C-35 Evidencias/TC-B2C35-M-025-p04-plp-n2-con-retiro-en-unimarc-las-condes-smu-inv-uni-671.png>)

![Estado final del caso](<B2C-35 Evidencias/TC-B2C35-M-025.png>)

---

### TC-B2C35-M-026 - Verificar que el banner principal configurado se muestra bajo el breadcrumb y no es clickeable [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-03 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: PLP N2
- {PLP_URL_BANNER_PRINCIPAL} tiene configurada la imagen de banner principal en su atributo de categoría

**Data utilizada**

- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {PLP_URL_BANNER_PRINCIPAL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/bebidas-y-licores

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/bebidas-y-licores.
2. El sistema carga la PLP con el listado de productos.
3. El usuario toca el banner principal.
4. El sistema no navega y se mantiene en la PLP.

**Resultado esperado**

El banner principal se muestra debajo del breadcrumb y al tocarlo no se navega a otra página.

**Resultado obtenido**

La PLP de {PLP_URL_BANNER_PRINCIPAL} (/category/bebidas-y-licores) no muestra banner principal: el titulo queda a 16 px del breadcrumb.

**Observación**

Causa: /category/bebidas-y-licores ({PLP_URL_BANNER_PRINCIPAL}) no tiene configurado el banner principal: no se renderiza ninguna imagen entre el breadcrumb y el titulo (re-verificado el 2026-11-03). Ademas es una PLP N1, no N2. Accion requerida: configurar el atributo de banner principal en la categoria declarada (o declarar una N2 que lo tenga) y re-ejecutar.

**Evidencia**

![Captura del impedimento (exploración)](<B2C-35 Evidencias/TC-B2C35-M-026.png>)

---

### TC-B2C35-M-028 - Verificar que el banner circular configurado se muestra bajo el título y navega a su link [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-03 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: PLP N2
- {PLP_URL_BANNER_CIRCULAR} tiene un content asset de tipo Banner circular en el slot

**Data utilizada**

- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {PLP_URL_BANNER_CIRCULAR}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/frutas-y-verduras

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/frutas-y-verduras.
2. El sistema carga la PLP con el listado de productos.
3. El usuario toca uno de los banners circulares.
4. El sistema navega al link configurado para ese banner.

**Resultado esperado**

Los banners circulares se muestran debajo del título con imagen y nombre, y el tocado lleva a su link configurado.

**Resultado obtenido**

La PLP de {PLP_URL_BANNER_CIRCULAR} (/category/frutas-y-verduras) no muestra banners circulares bajo el titulo.

**Observación**

Causa: /category/frutas-y-verduras ({PLP_URL_BANNER_CIRCULAR}) no tiene content asset de Banner circular en el slot: no se renderiza ninguno (re-verificado el 2026-11-03). Ademas es una PLP N1. Accion requerida: configurar el Banner circular para la categoria declarada (o declarar una N2 que lo tenga, como /category/carnes_cerdo) y re-ejecutar.

**Evidencia**

![Captura del impedimento (exploración)](<B2C-35 Evidencias/TC-B2C35-M-028.png>)

---

### TC-B2C35-M-032 - Verificar que si falla el servicio del grid de banners la PLP carga sin él [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-03 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: PLP N2
- {PLP_URL_GRID_BANNERS} tiene un content asset de tipo Grid Banners en el slot
- DevTools (emulación Mobile 390x844) con bloqueo de la request de contenido del grid de banners (Network request blocking)

**Data utilizada**

- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {PLP_URL_GRID_BANNERS}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_cerdo

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_cerdo.
2. El sistema carga la PLP con el listado de productos.

**Resultado esperado**

La PLP carga título, filtros, píldoras y grilla sin el grid de banners y sin mensajes de error.

**Resultado obtenido**

La PLP de {PLP_URL_GRID_BANNERS} (/category/carnes_cerdo) muestra banner circular y Sponsor Banners, pero ningun Grid Banners: el contenido carnes-cerdo-plp-grid-banner no se pide ni se renderiza.

**Observación**

Causa: /category/carnes_cerdo ({PLP_URL_GRID_BANNERS}) no tiene content asset de tipo Grid Banners en el slot (re-verificado el 2026-11-03), asi que bloquear su request no cambia nada. Accion requerida: configurar el Grid Banners en la categoria declarada y re-ejecutar.

**Evidencia**

![Captura del impedimento (exploración)](<B2C-35 Evidencias/TC-B2C35-M-032.png>)

---

### TC-B2C35-M-033 - Verificar que la PLP muestra el componente de monetización configurado [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-03 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: PLP N2
- {PLP_URL_MONETIZACION} tiene un componente de monetización activo (B2C-5)

**Data utilizada**

- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {PLP_URL_MONETIZACION}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/frutas-y-verduras_frutas

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/frutas-y-verduras_frutas.
2. El sistema carga la PLP con el listado de productos.
3. El usuario hace scroll por todo el listado.

**Resultado esperado**

Se muestra el componente de monetización configurado para la categoría en la posición definida por negocio (máximo 4 banners de un mismo tipo).

**Resultado obtenido**

La PLP de {PLP_URL_MONETIZACION} (/category/frutas-y-verduras_frutas, 17 productos) no muestra ningun componente de monetizacion ni producto "Patrocinado" en todo el listado.

**Observación**

Causa: /category/frutas-y-verduras_frutas ({PLP_URL_MONETIZACION}) no tiene un componente de monetizacion activo (re-verificado el 2026-11-03). Accion requerida: activar el componente de monetizacion (B2C-5) para la categoria declarada y re-ejecutar.

**Evidencia**

![Captura del impedimento (exploración)](<B2C-35 Evidencias/TC-B2C35-M-033.png>)

---

### TC-B2C35-M-029 - Verificar que sin banner circular asignado el componente no se muestra [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-10 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | (sin spec: el caso quedó bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: PLP N2
- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_cerdo no tiene content asset de tipo Banner circular en el slot

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CATEGORY_N2_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_cerdo

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_cerdo.
2. El sistema carga la PLP N2 con el listado de productos.

**Resultado esperado**

No se muestra el banner circular y no queda espacio vacío bajo el título.

**Resultado obtenido**

Causa: {CATEGORY_N2_URL} (/category/carnes_cerdo) SÍ tiene Banner circular (content asset carnes-cerdo-plp-banner-circular: Carnes, Chuleta, Pavo), así que no cumple la precondición «sin banner circular». Acción: declarar una PLP N2 sin Banner circular (por ejemplo, una cuya consulta a <categoria>-plp-banner-circular dé 404).

**Observación**

Causa: {CATEGORY_N2_URL} (/category/carnes_cerdo) SÍ tiene Banner circular (content asset carnes-cerdo-plp-banner-circular: Carnes, Chuleta, Pavo), así que no cumple la precondición «sin banner circular». Acción: declarar una PLP N2 sin Banner circular (por ejemplo, una cuya consulta a <categoria>-plp-banner-circular dé 404).

---

### TC-B2C35-M-030 - Verificar que el grid de banners configurado se muestra arriba del título de la categoría [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-10 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | (sin spec: el caso quedó bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: PLP N2
- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_cerdo tiene un content asset de tipo Grid Banners en el slot

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {PLP_URL_GRID_BANNERS} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_cerdo

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_cerdo.
2. El sistema carga la PLP con el listado de productos.
3. El usuario toca uno de los banners del grid.
4. El sistema navega al link configurado para ese banner.

**Resultado esperado**

El grid de banners se muestra arriba del título y el banner tocado lleva a su link configurado.

**Resultado obtenido**

Causa: {PLP_URL_GRID_BANNERS} (/category/carnes_cerdo) no tiene Grid Banners: el content asset carnes-cerdo-plp-grid-banner da 404 (Content Asset Not Found). Acción: configurar el Grid Banners en esa categoría o declarar una PLP que lo tenga.

**Observación**

Causa: {PLP_URL_GRID_BANNERS} (/category/carnes_cerdo) no tiene Grid Banners: el content asset carnes-cerdo-plp-grid-banner da 404 (Content Asset Not Found). Acción: configurar el Grid Banners en esa categoría o declarar una PLP que lo tenga.

---

### TC-B2C35-M-040 - Verificar que la PLP hija de una categoría top con SEO muestra el bloque SEO al final [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-10 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | (sin spec: el caso quedó bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: PLP N2
- La categoría top de https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes tiene un content asset SEO configurado en BM

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {PLP_URL_SEO} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes.
2. El sistema carga la PLP con el listado de productos.
3. El usuario hace scroll hasta el final de la página.

**Resultado esperado**

Al final, bajo la grilla, se muestra el bloque SEO con links de texto y "Revisa también las Bases legales y las Políticas de privacidad de unimarc.cl".

**Resultado obtenido**

Causa: {PLP_URL_SEO} es /category/carnes, la categoría top misma, y el caso se ubica en una PLP N2 hija de ella. En DEV el bloque SEO de Carnes (content asset carnes-plp-links-seo) se muestra en las PLP hijas (/category/carnes_vacuno, /category/carnes_cerdo), no en /category/carnes, que ni siquiera lo pide. Ojo al corregir la data: ese contenido dice «Revisa también: Vacuno, Pollo, Cerdo, Cordero y Pavo, Embutidos y Cecinas, Carnes Especiales» y no trae el texto ni los links de «Bases legales» y «Políticas de privacidad». Acción: declarar en {PLP_URL_SEO} una PLP N2 hija de una categoría top con SEO (p. ej. /category/carnes_vacuno).

**Observación**

Causa: {PLP_URL_SEO} es /category/carnes, la categoría top misma, y el caso se ubica en una PLP N2 hija de ella. En DEV el bloque SEO de Carnes (content asset carnes-plp-links-seo) se muestra en las PLP hijas (/category/carnes_vacuno, /category/carnes_cerdo), no en /category/carnes, que ni siquiera lo pide. Ojo al corregir la data: ese contenido dice «Revisa también: Vacuno, Pollo, Cerdo, Cordero y Pavo, Embutidos y Cecinas, Carnes Especiales» y no trae el texto ni los links de «Bases legales» y «Políticas de privacidad». Acción: declarar en {PLP_URL_SEO} una PLP N2 hija de una categoría top con SEO (p. ej. /category/carnes_vacuno).

---

### TC-B2C35-M-041 - Verificar que los links del bloque SEO redirigen a Bases legales y Políticas de privacidad [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-10 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | (sin spec: el caso quedó bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: PLP N2
- La categoría top de https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes tiene un content asset SEO configurado en BM

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {PLP_URL_SEO} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes.
2. El sistema carga la PLP con el listado de productos.
3. El usuario hace scroll hasta el bloque SEO y toca "Bases legales".
4. El sistema abre la página de Bases legales.
5. El usuario vuelve a la PLP y toca "Políticas de privacidad".
6. El sistema abre la página de Políticas de privacidad.

**Resultado esperado**

Cada link abre su página correspondiente.

**Resultado obtenido**

Causa: {PLP_URL_SEO} es /category/carnes, la categoría top misma, y el caso se ubica en una PLP N2 hija de ella. En DEV el bloque SEO de Carnes (content asset carnes-plp-links-seo) se muestra en las PLP hijas (/category/carnes_vacuno, /category/carnes_cerdo), no en /category/carnes, que ni siquiera lo pide. Ojo al corregir la data: ese contenido dice «Revisa también: Vacuno, Pollo, Cerdo, Cordero y Pavo, Embutidos y Cecinas, Carnes Especiales» y no trae el texto ni los links de «Bases legales» y «Políticas de privacidad». Acción: declarar en {PLP_URL_SEO} una PLP N2 hija de una categoría top con SEO (p. ej. /category/carnes_vacuno).

**Observación**

Causa: {PLP_URL_SEO} es /category/carnes, la categoría top misma, y el caso se ubica en una PLP N2 hija de ella. En DEV el bloque SEO de Carnes (content asset carnes-plp-links-seo) se muestra en las PLP hijas (/category/carnes_vacuno, /category/carnes_cerdo), no en /category/carnes, que ni siquiera lo pide. Ojo al corregir la data: ese contenido dice «Revisa también: Vacuno, Pollo, Cerdo, Cordero y Pavo, Embutidos y Cecinas, Carnes Especiales» y no trae el texto ni los links de «Bases legales» y «Políticas de privacidad». Acción: declarar en {PLP_URL_SEO} una PLP N2 hija de una categoría top con SEO (p. ej. /category/carnes_vacuno).

---

### TC-B2C35-M-043 - Verificar que un error del componente SEO lo oculta sin afectar el resto de la PLP [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-10 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | (sin spec: el caso quedó bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: PLP N2
- La categoría top de https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes tiene un content asset SEO configurado en BM
- DevTools (emulación Mobile 390x844) con bloqueo de la request de contenido SEO (Network request blocking)

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {PLP_URL_SEO} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes.
2. El sistema carga la PLP con el listado de productos.
3. El usuario hace scroll hasta el final de la página.

**Resultado esperado**

Listado, filtros y píldoras se muestran correctamente; el bloque SEO no aparece y no hay mensajes de error visibles.

**Resultado obtenido**

Causa: {PLP_URL_SEO} es /category/carnes, la categoría top misma, y el caso se ubica en una PLP N2 hija de ella. En DEV el bloque SEO de Carnes (content asset carnes-plp-links-seo) se muestra en las PLP hijas (/category/carnes_vacuno, /category/carnes_cerdo), no en /category/carnes, que ni siquiera lo pide. Por eso, bloquear la request de SEO en /category/carnes no cambia nada. Acción: declarar en {PLP_URL_SEO} una PLP N2 hija de una categoría top con SEO (p. ej. /category/carnes_vacuno).

**Observación**

Causa: {PLP_URL_SEO} es /category/carnes, la categoría top misma, y el caso se ubica en una PLP N2 hija de ella. En DEV el bloque SEO de Carnes (content asset carnes-plp-links-seo) se muestra en las PLP hijas (/category/carnes_vacuno, /category/carnes_cerdo), no en /category/carnes, que ni siquiera lo pide. Por eso, bloquear la request de SEO en /category/carnes no cambia nada. Acción: declarar en {PLP_URL_SEO} una PLP N2 hija de una categoría top con SEO (p. ej. /category/carnes_vacuno).

---

### TC-B2C35-M-042 - Verificar que sin SEO en la categoría top sus PLP hijas no muestran el bloque SEO [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-10 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | (sin spec: el caso quedó bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: PLP N2
- La categoría top de https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/bebes-y-ninos no tiene content asset SEO configurado

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {PLP_URL_SIN_SEO} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/bebes-y-ninos

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/bebes-y-ninos.
2. El sistema carga la PLP con el listado de productos.
3. El usuario hace scroll hasta el final de la página.

**Resultado esperado**

Al final de la PLP no se muestra el bloque SEO y no queda espacio vacío.

**Resultado obtenido**

Causa: {PLP_URL_SIN_SEO} es /category/bebes-y-ninos, la categoría top misma, y el caso se ubica en una PLP N2 hija de ella. La precondición sí se cumple (el content asset bebes-y-ninos-plp-links-seo da 404) y esa N1 no muestra bloque SEO, pero eso no prueba lo que pasa en sus PLP hijas. Acción: declarar en {PLP_URL_SIN_SEO} una PLP N2 hija de bebes-y-ninos.

**Observación**

Causa: {PLP_URL_SIN_SEO} es /category/bebes-y-ninos, la categoría top misma, y el caso se ubica en una PLP N2 hija de ella. La precondición sí se cumple (el content asset bebes-y-ninos-plp-links-seo da 404) y esa N1 no muestra bloque SEO, pero eso no prueba lo que pasa en sus PLP hijas. Acción: declarar en {PLP_URL_SIN_SEO} una PLP N2 hija de bebes-y-ninos.

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
  "suite": "B2C-35",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP1/B2C-35 Test Cases.xlsx",
  "title": "B2C-35 - Product List Page (PLP) N2 y N3 - Evidencias QA",
  "updated_at": "2026-11-10"
 },
 "history": {
  "2026-11-03": [
   "TC-B2C35-D-001",
   "TC-B2C35-D-004",
   "TC-B2C35-D-005",
   "TC-B2C35-D-008",
   "TC-B2C35-D-009",
   "TC-B2C35-D-010",
   "TC-B2C35-D-014",
   "TC-B2C35-M-003",
   "TC-B2C35-M-004",
   "TC-B2C35-M-009",
   "TC-B2C35-M-014",
   "TC-B2C35-M-018",
   "TC-B2C35-M-020",
   "TC-B2C35-M-023",
   "TC-B2C35-M-024",
   "TC-B2C35-M-025",
   "TC-B2C35-M-026",
   "TC-B2C35-M-028",
   "TC-B2C35-M-032",
   "TC-B2C35-M-033"
  ],
  "2026-11-10": [
   "TC-B2C35-D-001",
   "TC-B2C35-D-009",
   "TC-B2C35-M-009",
   "TC-B2C35-M-020",
   "TC-B2C35-M-029",
   "TC-B2C35-M-030",
   "TC-B2C35-M-040",
   "TC-B2C35-M-041",
   "TC-B2C35-M-042",
   "TC-B2C35-M-043"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-11-10",
   "expected": "En los 4 puntos de entrada carga la PLP correcta.",
   "form_factor": "desktop",
   "id": "TC-B2C35-D-001",
   "name": "La PLP N2/N3 carga desde menu, URL directa, banner del Home o carrusel del Home",
   "observation": "Causa: {HOME_CARRUSEL_N2} = Carrusel_Banner (tb-banner-t4-hp) solo enlaza a categorías N1 (/category/carnes, /category/bebes-y-ninos, /category/frutas-y-verduras, /category/desayuno-y-dulces), así que el cuarto punto de entrada (carrusel → PLP N2/N3) no se puede probar. Las otras tres entradas cargan la PLP correcta: menú y URL directa → Vacuno (/category/carnes_vacuno); Home_Banner → su N3 de leches. Acción: declarar un carrusel del Home que enlace a una N2/N3, o configurarlo en Carrusel_Banner. Re-verificado el 2026-11-10.",
   "observed": "Causa: {HOME_CARRUSEL_N2} = Carrusel_Banner (tb-banner-t4-hp) solo enlaza a categorías N1 (/category/carnes, /category/bebes-y-ninos, /category/frutas-y-verduras, /category/desayuno-y-dulces), así que el cuarto punto de entrada (carrusel → PLP N2/N3) no se puede probar. Las otras tres entradas cargan la PLP correcta: menú y URL directa → Vacuno (/category/carnes_vacuno); Home_Banner → su N3 de leches. Acción: declarar un carrusel del Home que enlace a una N2/N3, o configurarlo en Carrusel_Banner. Re-verificado el 2026-11-10.",
   "preconditions": "- Viewport: Desktop 1440x900",
   "screenshots": [
    {
     "caption": "Paso 1 — menu de categorias",
     "file": "TC-B2C35-D-001-p01-menu-de-categorias.png"
    },
    {
     "caption": "Paso 1 — plp vacuno desde el menu",
     "file": "TC-B2C35-D-001-p01-plp-vacuno-desde-el-menu.png"
    },
    {
     "caption": "Paso 2 — carrusel tb banner t4 hp del home",
     "file": "TC-B2C35-D-001-p02-carrusel-tb-banner-t4-hp-del-home.png"
    },
    {
     "caption": "Paso 2 — plp desde el banner del home lacteos huevos y refrigerados l",
     "file": "TC-B2C35-D-001-p02-plp-desde-el-banner-del-home-lacteos-huevos-y-refrigerados-l.png"
    },
    {
     "caption": "Paso 2 — plp vacuno por url directa",
     "file": "TC-B2C35-D-001-p02-plp-vacuno-por-url-directa.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C35-D-001.png"
    }
   ],
   "spec": "tests/B2C-35.spec.ts:468",
   "status": "Bloqueado Data",
   "steps": "1. Acceder desde el menu.\n2. Repetir con URL directa, banner y carrusel del Home.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {COMPRADOR_PASSWORD} = contraseña de la cuenta (no se transcribe)\n- {COMPRADOR_USER} = vhchirinos+comprador@avatar-global.com\n- {HOME_BANNER_N2} = Home_Banner\n- {HOME_CARRUSEL_N2} = Carrusel_Banner\n- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 51,
   "executed_at": "2026-11-03",
   "expected": "El contador se actualiza automaticamente.",
   "form_factor": "desktop",
   "id": "TC-B2C35-D-004",
   "name": "El titulo y contador de productos se actualizan al cambiar la direccion",
   "observation": "Causa: con las dos tiendas declaradas ({TIENDA_RETIRO_001} Unimarc Las Condes y {TIENDA_RETIRO_002} Unimarc Los Trapenses) la categoria {PLP_URL} tiene la misma cantidad de productos (10), asi que la actualizacion del contador no es observable: el valor tras el cambio coincide con el de la nueva tienda, pero tambien con el anterior. Accion requerida: declarar dos metodos de entrega cuyas tiendas tengan distinta cantidad de productos en la categoria y re-ejecutar.",
   "observed": "Con retiro en Unimarc Las Condes la PLP de Vacuno muestra 10 productos; al cambiar a Unimarc Los Trapenses desde la misma PLP (sin recarga) sigue en 10, que es tambien lo que muestra la PLP cargada desde cero con Los Trapenses.",
   "preconditions": "- Viewport: Desktop 1440x900",
   "screenshots": [
    {
     "caption": "Paso 1 — vacuno con unimarc las condes 10 productos",
     "file": "TC-B2C35-D-004-p01-vacuno-con-unimarc-las-condes-10-productos.png"
    },
    {
     "caption": "Paso 2 — vacuno con unimarc los trapenses 10 productos",
     "file": "TC-B2C35-D-004-p02-vacuno-con-unimarc-los-trapenses-10-productos.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C35-D-004.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Ver el contador con una direccion.\n2. Cambiar de direccion.",
   "test_data": "- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {PLP_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n- {TIENDA_RETIRO_001}: Unimarc Las Condes\n- {TIENDA_RETIRO_002}: Unimarc Los Trapenses",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 9,
   "executed_at": "2026-11-03",
   "expected": "El primer caso muestra las pildoras correctas; el segundo no muestra pildoras; en Mobile se desplazan sin romper el layout.",
   "form_factor": "desktop",
   "id": "TC-B2C35-D-005",
   "name": "Las pildoras de PLP N2 muestran Todas por defecto y las N3 en orden BM; sin N3 no se renderizan; en Mobile se desplazan horizontalmente",
   "observation": "Esperado: \"el segundo no muestra pildoras\". Obtenido: la PLP N2 Detergente (sin N3) muestra la fila de pildoras con \"Todo\" y \"Detergente\" seleccionada. tests/B2C-35.spec.ts:550. Bug: B2C-1439.",
   "observed": "Carnes > Cerdo (N2 con N3) muestra \"Todo\" activa y las N3 Chuleta, Costillas y costillar, Lomo cerdo, Malaya y plateada y Pulpa cerdo; en 390 px la fila se desplaza 250 px sin mover la pagina. Pero Detergente (N2 sin N3) SI muestra fila de pildoras: \"Todo\", \"Detergente\" (seleccionada) y las hermanas de Limpieza.",
   "preconditions": "- Viewport: Desktop 1440x900",
   "screenshots": [
    {
     "caption": "Paso 1 — n2 con subcategorias pildoras",
     "file": "TC-B2C35-D-005-p01-n2-con-subcategorias-pildoras.png"
    },
    {
     "caption": "Paso 2 — detergente n2 sin n3",
     "file": "TC-B2C35-D-005-p02-detergente-n2-sin-n3.png"
    },
    {
     "caption": "Paso 3 — pildoras desplazadas en 390 px",
     "file": "TC-B2C35-D-005-p03-pildoras-desplazadas-en-390-px.png"
    },
    {
     "caption": "Estado al fallar la aserción",
     "file": "TC-B2C35-D-005.png"
    }
   ],
   "spec": "tests/B2C-35.spec.ts:550",
   "status": "Rechazado",
   "steps": "1. Ver una PLP N2 con subcategorias N3.\n2. Ver una PLP N2 sin subcategorias N3.\n3. Deslizar las pildoras en Mobile.",
   "test_data": "- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CATEGORY_N2_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_cerdo\n- {CATEGORY_N2_WO_SUB}: Detergente",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 37,
   "executed_at": "2026-11-03",
   "expected": "Se muestran 50 productos con todos los datos indicados.",
   "form_factor": "desktop",
   "id": "TC-B2C35-D-008",
   "name": "La grilla muestra 50 productos con imagen, nombre, precio y boton Agregar al carro",
   "observation": "Causa: el producto 000000000000627789-UN (Prosepan, pan de molde integral familiar 650 g) no tiene imagen en el catalogo de DEV y la grilla muestra \"Imagen no disponible\"; lo demas del esperado se cumple (50 de 103 productos con nombre, precio y Agregar). Accion requerida: cargar la imagen del SKU en el catalogo y re-ejecutar.",
   "observed": "Pan molde y pita declara 103 productos y la grilla inicial muestra 50, todos con nombre, precio y Agregar. Uno, Prosepan | Pan de molde integral familiar 650 g (000000000000627789-UN), se muestra con el placeholder \"Imagen no disponible\".",
   "preconditions": "- Viewport: Desktop 1440x900",
   "screenshots": [
    {
     "caption": "Paso 1 — pan molde y pita 103 productos",
     "file": "TC-B2C35-D-008-p01-pan-molde-y-pita-103-productos.png"
    },
    {
     "caption": "Paso 2 — grilla con 50 productos",
     "file": "TC-B2C35-D-008-p02-grilla-con-50-productos.png"
    },
    {
     "caption": "Paso 2 — producto con imagen no disponible",
     "file": "TC-B2C35-D-008-p02-producto-con-imagen-no-disponible.png"
    }
   ],
   "status": "Bloqueado",
   "steps": "1. Ver la grilla inicial sin filtros.\n2. Contar productos y verificar datos.",
   "test_data": "- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CATEGORY_N3_MAS_50_PRODS}: Pan molde y pita",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-10",
   "expected": "Desktop muestra paginacion; Mobile/App cargan mas productos con scroll infinito.",
   "form_factor": "desktop",
   "id": "TC-B2C35-D-009",
   "name": "Web Desktop muestra paginacion y Mobile/App cargan mas via scroll infinito",
   "observation": "Causa: {CATEGORY_N2_MAS_50_PRODS} no tiene fila en el Excel de data. Acción: cargar una categoría N2 con más de 50 productos (p. ej. /category/panaderia-y-pasteleria_pan-envasado, 103 productos) y re-ejecutar.",
   "observed": "Causa: {CATEGORY_N2_MAS_50_PRODS} no tiene fila en el Excel de data. Acción: cargar una categoría N2 con más de 50 productos (p. ej. /category/panaderia-y-pasteleria_pan-envasado, 103 productos) y re-ejecutar.",
   "preconditions": "- Viewport: Desktop 1440x900",
   "spec": "(sin spec: el caso quedó bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. Llegar al final del listado en Desktop.\n2. Repetir en Mobile/App.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CATEGORY_N2_MAS_50_PRODS} = {CATEGORY_N2_MAS_50_PRODS}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-03",
   "expected": "La disponibilidad se ajusta segun el metodo; un producto no disponible muestra 'Pronto disponible' y 'Ver similares'.",
   "form_factor": "desktop",
   "id": "TC-B2C35-D-010",
   "name": "La disponibilidad varia segun el metodo de entrega; los no disponibles muestran Ver similares",
   "observation": "Causa: el caso compara la PLP sin metodo, con despacho y con retiro, y la columna Test data no declara ninguna direccion de despacho (solo {SKU_SIN_STOCK} y {TIENDA_RETIRO_001}); tampoco declara la PLP donde verla. Accion requerida: referenciar en la fila la direccion de despacho y la PLP del caso, y re-ejecutar.",
   "preconditions": "- Viewport: Desktop 1440x900",
   "status": "Bloqueado Data",
   "steps": "1. Ver la PLP sin metodo, luego con despacho y retiro.\n2. Verificar un producto no disponible.",
   "test_data": "- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {SKU_SIN_STOCK}: 000000000000029403-KG\n- {TIENDA_RETIRO_001}: Unimarc Las Condes",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-03",
   "expected": "La paginacion, la elipsis y la navegacion funcionan segun lo descrito; sin suficientes productos no se renderiza.",
   "form_factor": "desktop",
   "id": "TC-B2C35-D-014",
   "name": "La paginacion aparece solo con mas de 50 productos, con elipsis en listados largos y navegacion que respeta filtros",
   "observation": "Causa: el caso exige una categoria con mas de 5 paginas (mas de 250 productos) para la elipsis y otra con 50 productos o menos. {CATEGORY_N3_MAS_50_PRODS} = Pan molde y pita tiene 103 productos (3 paginas, sin elipsis) y la fila no declara la categoria de 50 o menos. Accion requerida: declarar una categoria con mas de 250 productos y una con 50 o menos, y re-ejecutar.",
   "preconditions": "- Viewport: Desktop 1440x900",
   "status": "Bloqueado Data",
   "steps": "1. Ver la paginacion con mas de 50 productos y mas de 5 paginas.\n2. Cambiar de pagina y verificar filtros/scroll.\n3. Ver una categoria con 50 productos o menos.",
   "test_data": "- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CATEGORY_N3_MAS_50_PRODS}: Pan molde y pita",
   "viewport": "1440x900"
  },
  {
   "browser": "webkit",
   "duration_s": 40,
   "executed_at": "2026-11-03",
   "expected": "Se muestra la PLP N2/N3 vinculada al banner {HOME_BANNER_N2}.",
   "form_factor": "mobile",
   "id": "TC-B2C35-M-003",
   "name": "Verificar que un banner del Home vinculado a una categoría abre su PLP [Mobile] [Guest]",
   "observed": "El banner Home_Banner (tb-banner-hp) tiene una slide que enlaza a la N3 Leches blancas; al tocarla se abre /category/lacteos-huevos-y-refrigerados_leches-y-cremas_leches-blancas con su titulo y listado.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El Home tiene el banner {HOME_BANNER_N2} vinculado a una categoría N2 o N3",
   "screenshots": [
    {
     "caption": "Paso 2 — banner tb banner hp del home",
     "file": "TC-B2C35-M-003-p02-banner-tb-banner-hp-del-home.png"
    },
    {
     "caption": "Paso 4 — plp lacteos huevos y refrigerados leches y cremas leches bla",
     "file": "TC-B2C35-M-003-p04-plp-lacteos-huevos-y-refrigerados-leches-y-cremas-leches-bla.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C35-M-003.png"
    }
   ],
   "spec": "tests/B2C-35.spec.ts:1117",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El sistema carga el Home con el banner Home_Banner.\n3. El usuario toca el banner Home_Banner.\n4. El sistema carga la PLP de la categoría vinculada al banner.",
   "test_data": "- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {HOME_BANNER_N2}: Home_Banner",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-03",
   "expected": "Se muestra la PLP N2/N3 vinculada al carrusel {HOME_CARRUSEL_N2}.",
   "form_factor": "mobile",
   "id": "TC-B2C35-M-004",
   "name": "Verificar que un carrusel del Home vinculado a una categoría abre su PLP [Mobile] [Guest]",
   "observation": "Causa: el carrusel {HOME_CARRUSEL_N2} = Carrusel_Banner (tb-banner-t4-hp) no esta vinculado a ninguna categoria N2 o N3: solo enlaza a N1 y a una busqueda (re-verificado el 2026-11-03). Accion requerida: configurar en el carrusel un enlace a una N2/N3 y re-ejecutar.",
   "observed": "El carrusel Carrusel_Banner del Home (tb-banner-t4-hp, \"Cada dia, una ocasion\") solo enlaza a categorias N1 (carnes, bebes-y-ninos, frutas-y-verduras, desayuno-y-dulces) y a /search?q=ofertas.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El Home tiene el carrusel {HOME_CARRUSEL_N2} vinculado a una categoría N2 o N3",
   "screenshots": [
    {
     "caption": "Captura del impedimento (exploración)",
     "file": "TC-B2C35-M-004.png"
    }
   ],
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El sistema carga el Home con el carrusel Carrusel_Banner.\n3. El usuario toca el enlace de categoría del carrusel Carrusel_Banner.\n4. El sistema carga la PLP de la categoría vinculada al carrusel.",
   "test_data": "- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {HOME_CARRUSEL_N2}: Carrusel_Banner",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 67.4,
   "executed_at": "2026-11-10",
   "expected": "La cantidad de productos se actualiza sin recargar manualmente y corresponde a la tienda Unimarc Las Condes.",
   "form_factor": "mobile",
   "id": "TC-B2C35-M-009",
   "name": "Verificar que el contador de productos se actualiza al cambiar la dirección [Mobile] [Guest]",
   "observation": "Causa: con {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida) y con {TIENDA_RETIRO_001} (Unimarc Las Condes), {CATEGORY_N2_URL} (/category/carnes_cerdo) tiene la misma cantidad de productos: 15 y 15. La PLP no quita los productos sin stock, así que no se puede observar que el contador se actualice. El cambio de método sí se aplicó sin recargar la página. Acción: declarar una dirección y una tienda con distinta cantidad de productos en la categoría. Re-verificado el 2026-11-10.",
   "observed": "Causa: con {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida) y con {TIENDA_RETIRO_001} (Unimarc Las Condes), {CATEGORY_N2_URL} (/category/carnes_cerdo) tiene la misma cantidad de productos: 15 y 15. La PLP no quita los productos sin stock, así que no se puede observar que el contador se actualice. El cambio de método sí se aplicó sin recargar la página. Acción: declarar una dirección y una tienda con distinta cantidad de productos en la categoría. Re-verificado el 2026-11-10.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: PLP N2\n- Despacho a domicilio activo con Calle Uno 23, La Florida",
   "screenshots": [
    {
     "caption": "Paso 3 — plp n2 con despacho 15 productos",
     "file": "TC-B2C35-M-009-p03-plp-n2-con-despacho-15-productos.png"
    },
    {
     "caption": "Paso 5 — plp n2 con retiro en unimarc las condes 15 productos",
     "file": "TC-B2C35-M-009-p05-plp-n2-con-retiro-en-unimarc-las-condes-15-productos.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C35-M-009.png"
    }
   ],
   "spec": "tests/B2C-35.spec.ts:1143",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_cerdo.\n2. El sistema carga la PLP N2 con el listado de productos.\n3. El usuario anota la cantidad de productos.\n4. El usuario cambia desde el Store Locator a Retiro en tienda en Unimarc Las Condes.\n5. El sistema actualiza la PLP y la cantidad de productos según la nueva tienda.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CATEGORY_N2_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_cerdo\n- {DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n- {TIENDA_RETIRO_001} = Unimarc Las Condes",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 34,
   "executed_at": "2026-11-03",
   "expected": "No se muestra la fila de píldoras y la grilla de productos aparece directamente, sin espacio vacío.",
   "form_factor": "mobile",
   "id": "TC-B2C35-M-014",
   "name": "Verificar que una PLP N2 sin subcategorías N3 no muestra la fila de píldoras [Mobile] [Guest]",
   "observation": "Esperado: \"No se muestra la fila de pildoras\". Obtenido: la PLP N2 Detergente (sin N3) muestra \"Todo\" y \"Detergente\" seleccionada. tests/B2C-35.spec.ts:1164. Bug: B2C-1440.",
   "observed": "La PLP N2 Detergente (sin N3, abierta desde el menu de categorias) muestra bajo el titulo la fila de pildoras con \"Todo\" y \"Detergente\" seleccionada.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: PLP N2",
   "screenshots": [
    {
     "caption": "Paso 2 — plp detergente",
     "file": "TC-B2C35-M-014-p02-plp-detergente.png"
    }
   ],
   "spec": "tests/B2C-35.spec.ts:1164",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a Detergente.\n2. El sistema carga la PLP N2 con el listado de productos.",
   "test_data": "- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CATEGORY_N2_WO_SUB}: Detergente",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-03",
   "expected": "La carga inicial muestra 50 productos.",
   "form_factor": "mobile",
   "id": "TC-B2C35-M-018",
   "name": "Verificar que la grilla muestra 50 productos en la carga inicial [Mobile] [Guest]",
   "observation": "Causa: los pasos usan {PLP_URL_MAS_50}, que no tiene fila en el Excel de data (la fila declara {CATEGORY_N3_MAS_50_PRODS}, que los pasos no usan). Accion requerida: cargar {PLP_URL_MAS_50} en el Excel de data o corregir los pasos para que usen el token declarado, y re-ejecutar.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: PLP N2\n- {PLP_URL_MAS_50} es una categoría N2/N3 con más de 50 productos disponibles",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {PLP_URL_MAS_50}.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario cuenta los productos cargados antes de llegar al final del listado.",
   "test_data": "- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CATEGORY_N3_MAS_50_PRODS}: Pan molde y pita",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-10",
   "expected": "Se agregan hasta 50 productos más al listado, sin paginación y sin recargar la página.",
   "form_factor": "mobile",
   "id": "TC-B2C35-M-020",
   "name": "Verificar que el scroll infinito carga el siguiente bloque de 50 productos [Mobile] [Guest]",
   "observation": "Causa: la precondición usa {PLP_URL_MAS_50}, que no tiene fila en el Excel de data. El paso 1 usa {CATEGORY_N3_MAS_50_PRODS} = «Pan molde y pita», que es un nombre y no una URL. Acción: cargar {PLP_URL_MAS_50} con la URL de una N2/N3 de más de 50 productos y usar un solo token en precondición y pasos.",
   "observed": "Causa: la precondición usa {PLP_URL_MAS_50}, que no tiene fila en el Excel de data. El paso 1 usa {CATEGORY_N3_MAS_50_PRODS} = «Pan molde y pita», que es un nombre y no una URL. Acción: cargar {PLP_URL_MAS_50} con la URL de una N2/N3 de más de 50 productos y usar un solo token en precondición y pasos.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: PLP N2\n- {PLP_URL_MAS_50} es una categoría N2/N3 con más de 50 productos disponibles",
   "spec": "(sin spec: el caso quedó bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a Pan molde y pita.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario hace scroll hasta el final del listado visible.\n4. El sistema muestra el indicador de carga «…» y agrega el siguiente bloque de productos al listado.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CATEGORY_N3_MAS_50_PRODS} = Pan molde y pita",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 56,
   "executed_at": "2026-11-03",
   "expected": "La disponibilidad de los productos corresponde al stock de {TIENDA_RETIRO_001}.",
   "form_factor": "mobile",
   "id": "TC-B2C35-M-023",
   "name": "Verificar que con Retiro en tienda la PLP muestra el stock de la tienda elegida [Mobile] [Guest]",
   "observation": "Los 15 productos de la categoria tienen stock en Unimarc Las Condes: la PLP los muestra todos con Agregar.",
   "observed": "Con retiro en Unimarc Las Condes (tienda 671, inventario smu-inv-uni-671) la disponibilidad de los 15 productos de la PLP de Cerdo coincide con el stock de esa tienda (los 15 con stock).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: PLP N2\n- Retiro en tienda activo en {TIENDA_RETIRO_001}",
   "screenshots": [
    {
     "caption": "Paso 2 — plp n2 con retiro en unimarc las condes",
     "file": "TC-B2C35-M-023-p02-plp-n2-con-retiro-en-unimarc-las-condes.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C35-M-023.png"
    }
   ],
   "spec": "tests/B2C-35.spec.ts:1183",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_cerdo.\n2. El sistema carga la PLP N2 con el listado de productos.",
   "test_data": "- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CATEGORY_N2_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_cerdo\n- {TIENDA_RETIRO_001}: Unimarc Las Condes",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 43,
   "executed_at": "2026-11-03",
   "expected": "{SKU_SIN_STOCK} muestra la etiqueta \"Pronto disponible\", no muestra \"Agregar\" y muestra el botón \"Ver similares\".",
   "form_factor": "mobile",
   "id": "TC-B2C35-M-024",
   "name": "Verificar que un producto sin stock muestra \"Pronto disponible\" y \"Ver similares\" [Mobile] [Guest]",
   "observed": "Con despacho a Camino La Fuente 1589 Las Condes, en la PLP de Vacuno el SKU 000000000000029403-KG (Tapapecho vacuno al vacio 2.2 Kg) muestra \"Pronto disponible\", sin Agregar y con \"Ver similares\".",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: PLP N2\n- {SKU_SIN_STOCK} aparece en {PLP_URL} y no tiene stock para el método de entrega activo",
   "screenshots": [
    {
     "caption": "Paso 2 — plp con despacho activo",
     "file": "TC-B2C35-M-024-p02-plp-con-despacho-activo.png"
    },
    {
     "caption": "Paso 3 — tarjeta de 000000000000029403 kg",
     "file": "TC-B2C35-M-024-p03-tarjeta-de-000000000000029403-kg.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C35-M-024.png"
    }
   ],
   "spec": "tests/B2C-35.spec.ts:1207",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario ubica 000000000000029403-KG en el listado.",
   "test_data": "- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {DIRECCION_DESPACHO}: Camino La Fuente 1589 Las Condes\n- {PLP_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n- {SKU_SIN_STOCK}: 000000000000029403-KG",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 69,
   "executed_at": "2026-11-03",
   "expected": "La PLP refleja el stock de {TIENDA_RETIRO_001} y los productos sin stock allí muestran \"Pronto disponible\".",
   "form_factor": "mobile",
   "id": "TC-B2C35-M-025",
   "name": "Verificar que cambiar el método de entrega desde la PLP actualiza la disponibilidad [Mobile] [Guest]",
   "observation": "En Unimarc Las Condes los 15 productos de la categoria tienen stock, asi que no hubo producto sin stock en el que comprobar \"Pronto disponible\". La precondicion nombra {DIRECCION_DESPACHO_001} y Test data declara {DIRECCION_DESPACHO}: se uso la de la precondicion.",
   "observed": "Con despacho a Calle Uno 23, La Florida la PLP de Cerdo usa el inventario smu-inv-uni-581; al pasar a retiro en Unimarc Las Condes desde el Store Locator pasa a smu-inv-uni-671 y la disponibilidad de los 15 productos coincide con el stock de esa tienda.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: PLP N2\n- Despacho a domicilio activo con {DIRECCION_DESPACHO_001}",
   "screenshots": [
    {
     "caption": "Paso 2 — plp n2 con despacho smu inv uni 581",
     "file": "TC-B2C35-M-025-p02-plp-n2-con-despacho-smu-inv-uni-581.png"
    },
    {
     "caption": "Paso 4 — plp n2 con retiro en unimarc las condes smu inv uni 671",
     "file": "TC-B2C35-M-025-p04-plp-n2-con-retiro-en-unimarc-las-condes-smu-inv-uni-671.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C35-M-025.png"
    }
   ],
   "spec": "tests/B2C-35.spec.ts:1229",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_cerdo.\n2. El sistema carga la PLP N2 con el listado de productos.\n3. El usuario cambia desde el Store Locator a Retiro en tienda en Unimarc Las Condes.\n4. El sistema consulta el stock y actualiza la disponibilidad de los productos de la PLP.",
   "test_data": "- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CATEGORY_N2_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_cerdo\n- {DIRECCION_DESPACHO_001}: Calle Uno 23, La Florida\n- {DIRECCION_DESPACHO}: Camino La Fuente 1589 Las Condes\n- {TIENDA_RETIRO_001}: Unimarc Las Condes",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-03",
   "expected": "El banner principal se muestra debajo del breadcrumb y al tocarlo no se navega a otra página.",
   "form_factor": "mobile",
   "id": "TC-B2C35-M-026",
   "name": "Verificar que el banner principal configurado se muestra bajo el breadcrumb y no es clickeable [Mobile] [Guest]",
   "observation": "Causa: /category/bebidas-y-licores ({PLP_URL_BANNER_PRINCIPAL}) no tiene configurado el banner principal: no se renderiza ninguna imagen entre el breadcrumb y el titulo (re-verificado el 2026-11-03). Ademas es una PLP N1, no N2. Accion requerida: configurar el atributo de banner principal en la categoria declarada (o declarar una N2 que lo tenga) y re-ejecutar.",
   "observed": "La PLP de {PLP_URL_BANNER_PRINCIPAL} (/category/bebidas-y-licores) no muestra banner principal: el titulo queda a 16 px del breadcrumb.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: PLP N2\n- {PLP_URL_BANNER_PRINCIPAL} tiene configurada la imagen de banner principal en su atributo de categoría",
   "screenshots": [
    {
     "caption": "Captura del impedimento (exploración)",
     "file": "TC-B2C35-M-026.png"
    }
   ],
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/bebidas-y-licores.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario toca el banner principal.\n4. El sistema no navega y se mantiene en la PLP.",
   "test_data": "- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {PLP_URL_BANNER_PRINCIPAL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/bebidas-y-licores",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-03",
   "expected": "Los banners circulares se muestran debajo del título con imagen y nombre, y el tocado lleva a su link configurado.",
   "form_factor": "mobile",
   "id": "TC-B2C35-M-028",
   "name": "Verificar que el banner circular configurado se muestra bajo el título y navega a su link [Mobile] [Guest]",
   "observation": "Causa: /category/frutas-y-verduras ({PLP_URL_BANNER_CIRCULAR}) no tiene content asset de Banner circular en el slot: no se renderiza ninguno (re-verificado el 2026-11-03). Ademas es una PLP N1. Accion requerida: configurar el Banner circular para la categoria declarada (o declarar una N2 que lo tenga, como /category/carnes_cerdo) y re-ejecutar.",
   "observed": "La PLP de {PLP_URL_BANNER_CIRCULAR} (/category/frutas-y-verduras) no muestra banners circulares bajo el titulo.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: PLP N2\n- {PLP_URL_BANNER_CIRCULAR} tiene un content asset de tipo Banner circular en el slot",
   "screenshots": [
    {
     "caption": "Captura del impedimento (exploración)",
     "file": "TC-B2C35-M-028.png"
    }
   ],
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/frutas-y-verduras.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario toca uno de los banners circulares.\n4. El sistema navega al link configurado para ese banner.",
   "test_data": "- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {PLP_URL_BANNER_CIRCULAR}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/frutas-y-verduras",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-03",
   "expected": "La PLP carga título, filtros, píldoras y grilla sin el grid de banners y sin mensajes de error.",
   "form_factor": "mobile",
   "id": "TC-B2C35-M-032",
   "name": "Verificar que si falla el servicio del grid de banners la PLP carga sin él [Mobile] [Guest]",
   "observation": "Causa: /category/carnes_cerdo ({PLP_URL_GRID_BANNERS}) no tiene content asset de tipo Grid Banners en el slot (re-verificado el 2026-11-03), asi que bloquear su request no cambia nada. Accion requerida: configurar el Grid Banners en la categoria declarada y re-ejecutar.",
   "observed": "La PLP de {PLP_URL_GRID_BANNERS} (/category/carnes_cerdo) muestra banner circular y Sponsor Banners, pero ningun Grid Banners: el contenido carnes-cerdo-plp-grid-banner no se pide ni se renderiza.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: PLP N2\n- {PLP_URL_GRID_BANNERS} tiene un content asset de tipo Grid Banners en el slot\n- DevTools (emulación Mobile 390x844) con bloqueo de la request de contenido del grid de banners (Network request blocking)",
   "screenshots": [
    {
     "caption": "Captura del impedimento (exploración)",
     "file": "TC-B2C35-M-032.png"
    }
   ],
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_cerdo.\n2. El sistema carga la PLP con el listado de productos.",
   "test_data": "- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {PLP_URL_GRID_BANNERS}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_cerdo",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-03",
   "expected": "Se muestra el componente de monetización configurado para la categoría en la posición definida por negocio (máximo 4 banners de un mismo tipo).",
   "form_factor": "mobile",
   "id": "TC-B2C35-M-033",
   "name": "Verificar que la PLP muestra el componente de monetización configurado [Mobile] [Guest]",
   "observation": "Causa: /category/frutas-y-verduras_frutas ({PLP_URL_MONETIZACION}) no tiene un componente de monetizacion activo (re-verificado el 2026-11-03). Accion requerida: activar el componente de monetizacion (B2C-5) para la categoria declarada y re-ejecutar.",
   "observed": "La PLP de {PLP_URL_MONETIZACION} (/category/frutas-y-verduras_frutas, 17 productos) no muestra ningun componente de monetizacion ni producto \"Patrocinado\" en todo el listado.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: PLP N2\n- {PLP_URL_MONETIZACION} tiene un componente de monetización activo (B2C-5)",
   "screenshots": [
    {
     "caption": "Captura del impedimento (exploración)",
     "file": "TC-B2C35-M-033.png"
    }
   ],
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/frutas-y-verduras_frutas.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario hace scroll por todo el listado.",
   "test_data": "- {BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {PLP_URL_MONETIZACION}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/frutas-y-verduras_frutas",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-10",
   "expected": "No se muestra el banner circular y no queda espacio vacío bajo el título.",
   "form_factor": "mobile",
   "id": "TC-B2C35-M-029",
   "name": "Verificar que sin banner circular asignado el componente no se muestra [Mobile] [Guest]",
   "observation": "Causa: {CATEGORY_N2_URL} (/category/carnes_cerdo) SÍ tiene Banner circular (content asset carnes-cerdo-plp-banner-circular: Carnes, Chuleta, Pavo), así que no cumple la precondición «sin banner circular». Acción: declarar una PLP N2 sin Banner circular (por ejemplo, una cuya consulta a <categoria>-plp-banner-circular dé 404).",
   "observed": "Causa: {CATEGORY_N2_URL} (/category/carnes_cerdo) SÍ tiene Banner circular (content asset carnes-cerdo-plp-banner-circular: Carnes, Chuleta, Pavo), así que no cumple la precondición «sin banner circular». Acción: declarar una PLP N2 sin Banner circular (por ejemplo, una cuya consulta a <categoria>-plp-banner-circular dé 404).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: PLP N2\n- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_cerdo no tiene content asset de tipo Banner circular en el slot",
   "spec": "(sin spec: el caso quedó bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_cerdo.\n2. El sistema carga la PLP N2 con el listado de productos.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CATEGORY_N2_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_cerdo",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-10",
   "expected": "El grid de banners se muestra arriba del título y el banner tocado lleva a su link configurado.",
   "form_factor": "mobile",
   "id": "TC-B2C35-M-030",
   "name": "Verificar que el grid de banners configurado se muestra arriba del título de la categoría [Mobile] [Guest]",
   "observation": "Causa: {PLP_URL_GRID_BANNERS} (/category/carnes_cerdo) no tiene Grid Banners: el content asset carnes-cerdo-plp-grid-banner da 404 (Content Asset Not Found). Acción: configurar el Grid Banners en esa categoría o declarar una PLP que lo tenga.",
   "observed": "Causa: {PLP_URL_GRID_BANNERS} (/category/carnes_cerdo) no tiene Grid Banners: el content asset carnes-cerdo-plp-grid-banner da 404 (Content Asset Not Found). Acción: configurar el Grid Banners en esa categoría o declarar una PLP que lo tenga.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: PLP N2\n- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_cerdo tiene un content asset de tipo Grid Banners en el slot",
   "spec": "(sin spec: el caso quedó bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_cerdo.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario toca uno de los banners del grid.\n4. El sistema navega al link configurado para ese banner.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {PLP_URL_GRID_BANNERS} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_cerdo",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-10",
   "expected": "Al final, bajo la grilla, se muestra el bloque SEO con links de texto y \"Revisa también las Bases legales y las Políticas de privacidad de unimarc.cl\".",
   "form_factor": "mobile",
   "id": "TC-B2C35-M-040",
   "name": "Verificar que la PLP hija de una categoría top con SEO muestra el bloque SEO al final [Mobile] [Guest]",
   "observation": "Causa: {PLP_URL_SEO} es /category/carnes, la categoría top misma, y el caso se ubica en una PLP N2 hija de ella. En DEV el bloque SEO de Carnes (content asset carnes-plp-links-seo) se muestra en las PLP hijas (/category/carnes_vacuno, /category/carnes_cerdo), no en /category/carnes, que ni siquiera lo pide. Ojo al corregir la data: ese contenido dice «Revisa también: Vacuno, Pollo, Cerdo, Cordero y Pavo, Embutidos y Cecinas, Carnes Especiales» y no trae el texto ni los links de «Bases legales» y «Políticas de privacidad». Acción: declarar en {PLP_URL_SEO} una PLP N2 hija de una categoría top con SEO (p. ej. /category/carnes_vacuno).",
   "observed": "Causa: {PLP_URL_SEO} es /category/carnes, la categoría top misma, y el caso se ubica en una PLP N2 hija de ella. En DEV el bloque SEO de Carnes (content asset carnes-plp-links-seo) se muestra en las PLP hijas (/category/carnes_vacuno, /category/carnes_cerdo), no en /category/carnes, que ni siquiera lo pide. Ojo al corregir la data: ese contenido dice «Revisa también: Vacuno, Pollo, Cerdo, Cordero y Pavo, Embutidos y Cecinas, Carnes Especiales» y no trae el texto ni los links de «Bases legales» y «Políticas de privacidad». Acción: declarar en {PLP_URL_SEO} una PLP N2 hija de una categoría top con SEO (p. ej. /category/carnes_vacuno).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: PLP N2\n- La categoría top de https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes tiene un content asset SEO configurado en BM",
   "spec": "(sin spec: el caso quedó bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario hace scroll hasta el final de la página.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {PLP_URL_SEO} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-10",
   "expected": "Cada link abre su página correspondiente.",
   "form_factor": "mobile",
   "id": "TC-B2C35-M-041",
   "name": "Verificar que los links del bloque SEO redirigen a Bases legales y Políticas de privacidad [Mobile] [Guest]",
   "observation": "Causa: {PLP_URL_SEO} es /category/carnes, la categoría top misma, y el caso se ubica en una PLP N2 hija de ella. En DEV el bloque SEO de Carnes (content asset carnes-plp-links-seo) se muestra en las PLP hijas (/category/carnes_vacuno, /category/carnes_cerdo), no en /category/carnes, que ni siquiera lo pide. Ojo al corregir la data: ese contenido dice «Revisa también: Vacuno, Pollo, Cerdo, Cordero y Pavo, Embutidos y Cecinas, Carnes Especiales» y no trae el texto ni los links de «Bases legales» y «Políticas de privacidad». Acción: declarar en {PLP_URL_SEO} una PLP N2 hija de una categoría top con SEO (p. ej. /category/carnes_vacuno).",
   "observed": "Causa: {PLP_URL_SEO} es /category/carnes, la categoría top misma, y el caso se ubica en una PLP N2 hija de ella. En DEV el bloque SEO de Carnes (content asset carnes-plp-links-seo) se muestra en las PLP hijas (/category/carnes_vacuno, /category/carnes_cerdo), no en /category/carnes, que ni siquiera lo pide. Ojo al corregir la data: ese contenido dice «Revisa también: Vacuno, Pollo, Cerdo, Cordero y Pavo, Embutidos y Cecinas, Carnes Especiales» y no trae el texto ni los links de «Bases legales» y «Políticas de privacidad». Acción: declarar en {PLP_URL_SEO} una PLP N2 hija de una categoría top con SEO (p. ej. /category/carnes_vacuno).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: PLP N2\n- La categoría top de https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes tiene un content asset SEO configurado en BM",
   "spec": "(sin spec: el caso quedó bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario hace scroll hasta el bloque SEO y toca \"Bases legales\".\n4. El sistema abre la página de Bases legales.\n5. El usuario vuelve a la PLP y toca \"Políticas de privacidad\".\n6. El sistema abre la página de Políticas de privacidad.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {PLP_URL_SEO} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-10",
   "expected": "Listado, filtros y píldoras se muestran correctamente; el bloque SEO no aparece y no hay mensajes de error visibles.",
   "form_factor": "mobile",
   "id": "TC-B2C35-M-043",
   "name": "Verificar que un error del componente SEO lo oculta sin afectar el resto de la PLP [Mobile] [Guest]",
   "observation": "Causa: {PLP_URL_SEO} es /category/carnes, la categoría top misma, y el caso se ubica en una PLP N2 hija de ella. En DEV el bloque SEO de Carnes (content asset carnes-plp-links-seo) se muestra en las PLP hijas (/category/carnes_vacuno, /category/carnes_cerdo), no en /category/carnes, que ni siquiera lo pide. Por eso, bloquear la request de SEO en /category/carnes no cambia nada. Acción: declarar en {PLP_URL_SEO} una PLP N2 hija de una categoría top con SEO (p. ej. /category/carnes_vacuno).",
   "observed": "Causa: {PLP_URL_SEO} es /category/carnes, la categoría top misma, y el caso se ubica en una PLP N2 hija de ella. En DEV el bloque SEO de Carnes (content asset carnes-plp-links-seo) se muestra en las PLP hijas (/category/carnes_vacuno, /category/carnes_cerdo), no en /category/carnes, que ni siquiera lo pide. Por eso, bloquear la request de SEO en /category/carnes no cambia nada. Acción: declarar en {PLP_URL_SEO} una PLP N2 hija de una categoría top con SEO (p. ej. /category/carnes_vacuno).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: PLP N2\n- La categoría top de https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes tiene un content asset SEO configurado en BM\n- DevTools (emulación Mobile 390x844) con bloqueo de la request de contenido SEO (Network request blocking)",
   "spec": "(sin spec: el caso quedó bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario hace scroll hasta el final de la página.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {PLP_URL_SEO} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-11-10",
   "expected": "Al final de la PLP no se muestra el bloque SEO y no queda espacio vacío.",
   "form_factor": "mobile",
   "id": "TC-B2C35-M-042",
   "name": "Verificar que sin SEO en la categoría top sus PLP hijas no muestran el bloque SEO [Mobile] [Guest]",
   "observation": "Causa: {PLP_URL_SIN_SEO} es /category/bebes-y-ninos, la categoría top misma, y el caso se ubica en una PLP N2 hija de ella. La precondición sí se cumple (el content asset bebes-y-ninos-plp-links-seo da 404) y esa N1 no muestra bloque SEO, pero eso no prueba lo que pasa en sus PLP hijas. Acción: declarar en {PLP_URL_SIN_SEO} una PLP N2 hija de bebes-y-ninos.",
   "observed": "Causa: {PLP_URL_SIN_SEO} es /category/bebes-y-ninos, la categoría top misma, y el caso se ubica en una PLP N2 hija de ella. La precondición sí se cumple (el content asset bebes-y-ninos-plp-links-seo da 404) y esa N1 no muestra bloque SEO, pero eso no prueba lo que pasa en sus PLP hijas. Acción: declarar en {PLP_URL_SIN_SEO} una PLP N2 hija de bebes-y-ninos.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: PLP N2\n- La categoría top de https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/bebes-y-ninos no tiene content asset SEO configurado",
   "spec": "(sin spec: el caso quedó bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/bebes-y-ninos.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario hace scroll hasta el final de la página.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {PLP_URL_SIN_SEO} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/bebes-y-ninos",
   "viewport": "390x844"
  }
 ]
}
-->
