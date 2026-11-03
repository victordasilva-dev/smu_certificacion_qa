# B2C-73 WEB - Evidencias QA (corrida del 2026-10-30)

| Campo | Valor |
|---|---|
| Suite | B2C-73 |
| Última actualización | 2026-10-30 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ (DEV) |
| Navegador Desktop | chromium |
| Navegador Mobile | chromium |
| Origen de los TC | SP1/B2C-73 WEB Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 22 |
| Bloqueado Data | 1 |
| Rechazado | 1 |
| **Total** | **24** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-30 | 24 | TC-B2C73-D-001, TC-B2C73-D-002, TC-B2C73-D-003, TC-B2C73-D-004, TC-B2C73-D-005, TC-B2C73-D-006, TC-B2C73-D-007, TC-B2C73-D-008, TC-B2C73-D-009, TC-B2C73-D-010, TC-B2C73-D-011, TC-B2C73-D-012, TC-B2C73-D-013, TC-B2C73-D-014, TC-B2C73-D-015, TC-B2C73-D-016, TC-B2C73-D-017, TC-B2C73-D-018, TC-B2C73-D-019, TC-B2C73-D-020, TC-B2C73-D-021, TC-B2C73-D-022, TC-B2C73-D-023, TC-B2C73-D-024 |

## Detalle por caso de prueba

### TC-B2C73-D-001 - Apertura del modal de categorías desde el botón Categorías del header como invitado

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home

**Data utilizada**

Valida CA1: al hacer clic en "Categorías" del header se despliega el modal con el título, el ícono X y las categorías N1 activas.

**Pasos ejecutados**

1. Navegar a {BASE_URL} con viewport Desktop 1440x900.
2. Hacer clic en el botón "Categorías" del header.

**Resultado esperado**

Se despliega el modal de categorías con el título "Categorías", el ícono X y el listado de categorías N1 activas.

**Evidencia**

![Paso 1 — home como invitado](<B2C-73 WEB Evidencias 2026-10-30/TC-B2C73-D-001-p01-home-como-invitado.png>)

![Paso 2 — modal de categorias desplegado](<B2C-73 WEB Evidencias 2026-10-30/TC-B2C73-D-001-p02-modal-de-categorias-desplegado.png>)

![Paso 3 — titulo x y categorias n1](<B2C-73 WEB Evidencias 2026-10-30/TC-B2C73-D-001-p03-titulo-x-y-categorias-n1.png>)

---

### TC-B2C73-D-002 - Apertura del modal de categorías desde el botón Categorías del header como usuario logueado

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Registrado
- Viewport: Desktop 1440x900
- Ubicacion: Home

**Data utilizada**

Valida CA1 con sesión iniciada: el botón "Categorías" del header despliega el mismo modal que para el invitado.

**Pasos ejecutados**

1. Navegar a {BASE_URL} con viewport Desktop 1440x900 e iniciar sesión con la cuenta {COMPRADOR_USER}.
2. Hacer clic en el botón "Categorías" del header.

**Resultado esperado**

Se despliega el modal de categorías con el título "Categorías", el ícono X y el listado de categorías N1 activas.

**Evidencia**

![Paso 1 — home con sesion iniciada](<B2C-73 WEB Evidencias 2026-10-30/TC-B2C73-D-002-p01-home-con-sesion-iniciada.png>)

![Paso 2 — modal de categorias con sesion](<B2C-73 WEB Evidencias 2026-10-30/TC-B2C73-D-002-p02-modal-de-categorias-con-sesion.png>)

---

### TC-B2C73-D-003 - Cada categoría N1 del modal muestra thumbnail, nombre e ícono de navegación

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home con el modal de categorías abierto

**Data utilizada**

Valida CA2: cada categoría N1 del listado muestra su thumbnail, su nombre y el ícono ">" alineado a la derecha.

**Pasos ejecutados**

1. Navegar a {BASE_URL} con viewport Desktop 1440x900.
2. Hacer clic en el botón "Categorías" del header.
3. Revisar los ítems del listado de categorías N1.

**Resultado esperado**

Cada categoría N1 muestra su thumbnail, su nombre y el ícono ">" alineado a la derecha.

**Evidencia**

![Paso 3 — listado n1](<B2C-73 WEB Evidencias 2026-10-30/TC-B2C73-D-003-p03-listado-n1.png>)

---

### TC-B2C73-D-004 - Scroll del listado de categorías N1 mantiene fijos el título y el ícono X

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home con el modal de categorías abierto
- Required data state: más categorías N1 activas de las visibles en el modal (ej. más de 11)

**Data utilizada**

Valida CA3: al hacer scroll en el listado se visualizan las categorías restantes sin afectar el header; el título y el botón cerrar quedan fijos.

**Pasos ejecutados**

1. Navegar a {BASE_URL} con viewport Desktop 1440x900.
2. Hacer clic en el botón "Categorías" del header.
3. Hacer scroll hacia abajo dentro del listado de categorías N1.

**Resultado esperado**

El listado se desplaza y muestra las categorías N1 restantes; el título "Categorías" y el ícono X se mantienen fijos y el header del sitio no se mueve.

**Evidencia**

![Paso 2 — antes del scroll](<B2C-73 WEB Evidencias 2026-10-30/TC-B2C73-D-004-p02-antes-del-scroll.png>)

![Paso 3 — despues del scroll](<B2C-73 WEB Evidencias 2026-10-30/TC-B2C73-D-004-p03-despues-del-scroll.png>)

---

### TC-B2C73-D-005 - Categoría N1 cambia color de fondo y de fuente al pasar el mouse

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home con el modal de categorías abierto

**Data utilizada**

Valida CA4: al pasar el mouse sobre una categoría N1, el ítem cambia su color de fondo y de fuente según Figma.

**Pasos ejecutados**

1. Navegar a {BASE_URL} con viewport Desktop 1440x900.
2. Hacer clic en el botón "Categorías" del header.
3. Pasar el mouse sobre una categoría N1.

**Resultado esperado**

El ítem de la categoría N1 cambia su color de fondo y de fuente según lo definido en Figma (Categorías-Web, Menú de categorías N1).

**Evidencia**

![Paso 2 — sin hover](<B2C-73 WEB Evidencias 2026-10-30/TC-B2C73-D-005-p02-sin-hover.png>)

![Paso 3 — con el mouse encima](<B2C-73 WEB Evidencias 2026-10-30/TC-B2C73-D-005-p03-con-el-mouse-encima.png>)

---

### TC-B2C73-D-006 - Hover sobre una categoría N1 despliega el panel de subcategorías N2 a la derecha

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home con el modal de categorías abierto
- Required data state: categoría N1 con subcategorías N2 activas

**Data utilizada**

Valida CA5a: al pasar el mouse sobre el nombre de una categoría N1 se despliega a la derecha el panel N2 con banner superior, título de la categoría, link "Mostrar todo" y las N2 organizadas en columnas.

**Pasos ejecutados**

1. Navegar a {BASE_URL} con viewport Desktop 1440x900.
2. Hacer clic en el botón "Categorías" del header.
3. Pasar el mouse sobre el nombre de la categoría N1 de {CATEGORY_N1_URL}.

**Resultado esperado**

A la derecha se despliega el panel de subcategorías N2 con el banner superior de la categoría N1, su título, el link "Mostrar todo" y las subcategorías N2 activas organizadas en columnas.

**Evidencia**

![Paso 3 — panel n2 de carnes](<B2C-73 WEB Evidencias 2026-10-30/TC-B2C73-D-006-p03-panel-n2-de-carnes.png>)

---

### TC-B2C73-D-007 - Clic en el nombre de una categoría N1 navega a su PLP y cierra el modal

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home con el modal de categorías abierto

**Data utilizada**

Valida CA5b: al hacer clic en el nombre de una categoría N1 del listado se navega a la PLP de esa categoría y el modal se cierra.

**Pasos ejecutados**

1. Navegar a {BASE_URL} con viewport Desktop 1440x900.
2. Hacer clic en el botón "Categorías" del header.
3. Hacer clic en el nombre de la categoría N1 de {CATEGORY_N1_URL} en el listado.

**Resultado esperado**

Se carga la PLP de la categoría N1 ({CATEGORY_N1_URL}) y el modal de categorías ya no se muestra.

**Evidencia**

![Paso 3 — plp de la categoria n1](<B2C-73 WEB Evidencias 2026-10-30/TC-B2C73-D-007-p03-plp-de-la-categoria-n1.png>)

---

### TC-B2C73-D-008 - Panel N2 muestra los bloques en 3 columnas con ícono, nombre, lista N3 y Mostrar todo

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home con el modal de categorías abierto
- Required data state: categoría N1 con subcategorías N2 que tienen sub-subcategorías N3

**Data utilizada**

Valida CA6: el panel N2 organiza las subcategorías en 3 columnas y cada bloque N2 muestra su ícono (thumbnail), su nombre, la lista de N3 y el link "Mostrar todo".

**Pasos ejecutados**

1. Navegar a {BASE_URL} con viewport Desktop 1440x900.
2. Hacer clic en el botón "Categorías" del header.
3. Pasar el mouse sobre la categoría N1 a la que pertenece {CATEGORY_N2_URL}.
4. Revisar los bloques de subcategorías N2 del panel.

**Resultado esperado**

Los bloques N2 se muestran en 3 columnas y cada bloque contiene el ícono de la N2, su nombre, la lista de sus sub-subcategorías N3 y el link "Mostrar todo".

**Evidencia**

![Paso 3 — panel n2](<B2C-73 WEB Evidencias 2026-10-30/TC-B2C73-D-008-p03-panel-n2.png>)

---

### TC-B2C73-D-009 - Bloque N2 con más de 10 sub-subcategorías N3 lista solo 10 en el menú

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home con el modal de categorías abierto
- Required data state: categoría N2 con más de 10 sub-subcategorías N3 activas

**Data utilizada**

Valida CA6 (límite RF11): dentro del bloque N2 solo se listan hasta 10 sub-subcategorías N3; las restantes no aparecen en el menú.

**Pasos ejecutados**

1. Navegar a {BASE_URL} con viewport Desktop 1440x900.
2. Hacer clic en el botón "Categorías" del header.
3. Pasar el mouse sobre la categoría N1 que contiene la N2 {CATEGORY_N2_MAS_10_N3}.
4. Contar las sub-subcategorías N3 listadas en el bloque {CATEGORY_N2_MAS_10_N3}.

**Resultado esperado**

El bloque de la categoría N2 lista exactamente 10 sub-subcategorías N3, en el orden del catálogo, y no muestra las restantes.

**Resultado obtenido**

Verificado 2026-10-30 en DEV: la N2 «Leches y cremas» lista exactamente 10 N3 en el menu (el tope).

**Observación**

Verificado 2026-10-30 en DEV: la N2 «Leches y cremas» lista exactamente 10 N3 en el menu (el tope).

**Evidencia**

![Paso 3 — bloque n2 leches y cremas](<B2C-73 WEB Evidencias 2026-10-30/TC-B2C73-D-009-p03-bloque-n2-leches-y-cremas.png>)

---

### TC-B2C73-D-010 - Link Mostrar todo de la categoría N1 en el panel navega a la PLP de la N1

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home con el modal de categorías abierto

**Data utilizada**

Valida CA7: el link "Mostrar todo" de la categoría N1 en el panel N2 navega a la PLP de la N1 y cierra el modal.

**Pasos ejecutados**

1. Navegar a {BASE_URL} con viewport Desktop 1440x900.
2. Hacer clic en el botón "Categorías" del header.
3. Pasar el mouse sobre la categoría N1 de {CATEGORY_N1_URL}.
4. Hacer clic en el link "Mostrar todo" junto al título de la categoría N1 en el panel.

**Resultado esperado**

Se carga la PLP de la categoría N1 ({CATEGORY_N1_URL}) y el modal se cierra automáticamente.

**Evidencia**

![Paso 3 — panel con mostrar todo](<B2C-73 WEB Evidencias 2026-10-30/TC-B2C73-D-010-p03-panel-con-mostrar-todo.png>)

![Paso 4 — plp de la n1](<B2C-73 WEB Evidencias 2026-10-30/TC-B2C73-D-010-p04-plp-de-la-n1.png>)

---

### TC-B2C73-D-011 - Título de la categoría N1 en el panel N2 navega a la PLP de la N1

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home con el modal de categorías abierto

**Data utilizada**

Valida CA7: el nombre de la categoría N1 que se muestra como título del panel N2 navega a la PLP de la N1 y cierra el modal.

**Pasos ejecutados**

1. Navegar a {BASE_URL} con viewport Desktop 1440x900.
2. Hacer clic en el botón "Categorías" del header.
3. Pasar el mouse sobre la categoría N1 de {CATEGORY_N1_URL}.
4. Hacer clic en el título de la categoría N1 dentro del panel N2.

**Resultado esperado**

Se carga la PLP de la categoría N1 ({CATEGORY_N1_URL}) y el modal se cierra automáticamente.

**Resultado obtenido**

Esperado: el titulo de la categoria N1 en el panel N2 navega a la PLP de la N1 y cierra el modal. Obtenido: al hacer clic en el titulo «Carnes» del panel no ocurre nada (sigue en /, el modal sigue abierto); el titulo es un texto plano sin accion de clic. Verificado 2026-10-30 en DEV, Desktop 1440x900. B2C-73.spec.ts:286. Bug: B2C-1407.

**Observación**

Esperado: el titulo de la categoria N1 en el panel N2 navega a la PLP de la N1 y cierra el modal. Obtenido: al hacer clic en el titulo «Carnes» del panel no ocurre nada (sigue en /, el modal sigue abierto); el titulo es un texto plano sin accion de clic. Verificado 2026-10-30 en DEV, Desktop 1440x900. B2C-73.spec.ts:286. Bug: B2C-1407.

**Evidencia**

![Paso 3 — panel con el titulo](<B2C-73 WEB Evidencias 2026-10-30/TC-B2C73-D-011-p03-panel-con-el-titulo.png>)

![Paso 4 — plp de la n1](<B2C-73 WEB Evidencias 2026-10-30/TC-B2C73-D-011-p04-plp-de-la-n1.png>)

---

### TC-B2C73-D-012 - Panel N2 con contenido mayor al alto muestra barra de scroll vertical propia

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home con el modal de categorías abierto
- Required data state: categoría N1 cuyo panel N2 excede el alto visible

**Data utilizada**

Valida CA8: cuando el contenido del panel N2 excede su alto se muestra una barra de scroll vertical que permite desplazarlo.

**Pasos ejecutados**

1. Navegar a {BASE_URL} con viewport Desktop 1440x900.
2. Hacer clic en el botón "Categorías" del header.
3. Pasar el mouse sobre la categoría N1 {CATEGORY_N1_PANEL_SCROLL}.
4. Hacer scroll hacia abajo dentro del panel N2.

**Resultado esperado**

El panel N2 muestra una barra de scroll vertical y su contenido se desplaza, dejando ver los bloques N2 restantes.

**Resultado obtenido**

Falta el dato: {CATEGORY_N1_PANEL_SCROLL} = Despensa no cumple «panel N2 que excede el alto visible»: su panel muestra 8 bloques y termina en ~700 px dentro de los ~880 px del modal a 1440x900, asi que no hay scroll que comprobar. Quien lo carga: equipo de data (una N1 cuyo panel N2 sea mas alto que el modal).

**Observación**

Falta el dato: {CATEGORY_N1_PANEL_SCROLL} = Despensa no cumple «panel N2 que excede el alto visible»: su panel muestra 8 bloques y termina en ~700 px dentro de los ~880 px del modal a 1440x900, asi que no hay scroll que comprobar. Quien lo carga: equipo de data (una N1 cuyo panel N2 sea mas alto que el modal).

**Evidencia**

![Paso 3 — panel n2 de despensa](<B2C-73 WEB Evidencias 2026-10-30/TC-B2C73-D-012-p03-panel-n2-de-despensa.png>)

![Paso 4 — panel tras el scroll](<B2C-73 WEB Evidencias 2026-10-30/TC-B2C73-D-012-p04-panel-tras-el-scroll.png>)

---

### TC-B2C73-D-013 - Link Mostrar todo de un bloque N2 navega a la PLP de la categoría N2

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home con el modal de categorías abierto

**Data utilizada**

Valida CA9: el link "Mostrar todo" del bloque de una categoría N2 navega a la PLP de esa N2 y cierra el modal.

**Pasos ejecutados**

1. Navegar a {BASE_URL} con viewport Desktop 1440x900.
2. Hacer clic en el botón "Categorías" del header.
3. Pasar el mouse sobre la categoría N1 a la que pertenece {CATEGORY_N2_URL}.
4. Hacer clic en el link "Mostrar todo" del bloque de la categoría N2 de {CATEGORY_N2_URL}.

**Resultado esperado**

Se carga la PLP de la categoría N2 ({CATEGORY_N2_URL}) y el modal se cierra automáticamente.

**Evidencia**

![Paso 3 — bloque n2 con su mostrar todo](<B2C-73 WEB Evidencias 2026-10-30/TC-B2C73-D-013-p03-bloque-n2-con-su-mostrar-todo.png>)

![Paso 4 — plp de la n2](<B2C-73 WEB Evidencias 2026-10-30/TC-B2C73-D-013-p04-plp-de-la-n2.png>)

---

### TC-B2C73-D-014 - Nombre de una categoría N2 en el panel navega a su PLP

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home con el modal de categorías abierto

**Data utilizada**

Valida CA9: el nombre de una categoría N2 en el panel navega a la PLP de esa N2 y cierra el modal.

**Pasos ejecutados**

1. Navegar a {BASE_URL} con viewport Desktop 1440x900.
2. Hacer clic en el botón "Categorías" del header.
3. Pasar el mouse sobre la categoría N1 a la que pertenece {CATEGORY_N2_URL}.
4. Hacer clic en el nombre de la categoría N2 de {CATEGORY_N2_URL}.

**Resultado esperado**

Se carga la PLP de la categoría N2 ({CATEGORY_N2_URL}) y el modal se cierra automáticamente.

**Evidencia**

![Paso 3 — panel n2](<B2C-73 WEB Evidencias 2026-10-30/TC-B2C73-D-014-p03-panel-n2.png>)

![Paso 4 — plp de la n2](<B2C-73 WEB Evidencias 2026-10-30/TC-B2C73-D-014-p04-plp-de-la-n2.png>)

---

### TC-B2C73-D-015 - Nombre de una sub-subcategoría N3 en el panel navega a su PLP

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home con el modal de categorías abierto

**Data utilizada**

Valida CA10: el nombre de una categoría N3 dentro de un bloque N2 navega a la PLP de esa N3 y cierra el modal.

**Pasos ejecutados**

1. Navegar a {BASE_URL} con viewport Desktop 1440x900.
2. Hacer clic en el botón "Categorías" del header.
3. Pasar el mouse sobre la categoría N1 a la que pertenece {CATEGORY_N3_URL}.
4. Hacer clic en el nombre de la categoría N3 de {CATEGORY_N3_URL} dentro de su bloque N2.

**Resultado esperado**

Se carga la PLP de la categoría N3 ({CATEGORY_N3_URL}) y el modal se cierra automáticamente.

**Evidencia**

![Paso 3 — bloque n2 con su n3](<B2C-73 WEB Evidencias 2026-10-30/TC-B2C73-D-015-p03-bloque-n2-con-su-n3.png>)

![Paso 4 — plp de la n3](<B2C-73 WEB Evidencias 2026-10-30/TC-B2C73-D-015-p04-plp-de-la-n3.png>)

---

### TC-B2C73-D-016 - Ícono X cierra el modal de categorías y mantiene la pantalla anterior

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: PLP de categoría

**Data utilizada**

Valida CA11: al hacer clic en el ícono X el modal se cierra y el usuario queda en la pantalla desde donde lo abrió.

**Pasos ejecutados**

1. Navegar a {CATEGORY_N1_URL} con viewport Desktop 1440x900.
2. Hacer clic en el botón "Categorías" del header.
3. Hacer clic en el ícono X del modal.

**Resultado esperado**

El modal de categorías se cierra y se sigue mostrando la PLP de {CATEGORY_N1_URL}, sin navegar a otra página.

**Evidencia**

![Paso 2 — modal abierto sobre la plp](<B2C-73 WEB Evidencias 2026-10-30/TC-B2C73-D-016-p02-modal-abierto-sobre-la-plp.png>)

![Paso 3 — tras la x](<B2C-73 WEB Evidencias 2026-10-30/TC-B2C73-D-016-p03-tras-la-x.png>)

---

### TC-B2C73-D-017 - Categoría N1 sin subcategorías N2 activas no despliega el panel N2

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home con el modal de categorías abierto
- Required data state: categoría N1 sin subcategorías N2 activas

**Data utilizada**

Valida CA12: al pasar el mouse sobre una N1 sin N2 activas solo se muestra su nombre con el ícono ">" y no se despliega el panel N2.

**Pasos ejecutados**

1. Navegar a {BASE_URL} con viewport Desktop 1440x900.
2. Hacer clic en el botón "Categorías" del header.
3. Pasar el mouse sobre la categoría N1 {CATEGORY_N1_WO_SUB}.

**Resultado esperado**

La categoría {CATEGORY_N1_WO_SUB} muestra solo su nombre y el ícono ">" y no se despliega el panel de subcategorías N2.

**Resultado obtenido**

Verificado 2026-10-30 en DEV: «Congelados» no despliega panel N2.

**Observación**

Verificado 2026-10-30 en DEV: «Congelados» no despliega panel N2.

**Evidencia**

![Paso 3 — hover sobre congelados](<B2C-73 WEB Evidencias 2026-10-30/TC-B2C73-D-017-p03-hover-sobre-congelados.png>)

---

### TC-B2C73-D-018 - Categoría N2 sin sub-subcategorías N3 muestra solo nombre, imagen y Mostrar todo

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home con el modal de categorías abierto
- Required data state: categoría N2 sin sub-subcategorías N3 activas

**Data utilizada**

Valida CA13: el bloque de una N2 sin N3 activas muestra solo el nombre, la imagen y el link "Mostrar todo".

**Pasos ejecutados**

1. Navegar a {BASE_URL} con viewport Desktop 1440x900.
2. Hacer clic en el botón "Categorías" del header.
3. Pasar el mouse sobre la categoría N1 que contiene la N2 {CATEGORY_N2_WO_SUB}.
4. Revisar el bloque de la categoría N2 {CATEGORY_N2_WO_SUB}.

**Resultado esperado**

El bloque de {CATEGORY_N2_WO_SUB} muestra solo su nombre, su imagen y el link "Mostrar todo", sin lista de sub-subcategorías N3.

**Evidencia**

![Paso 4 — bloque n2 detergente](<B2C-73 WEB Evidencias 2026-10-30/TC-B2C73-D-018-p04-bloque-n2-detergente.png>)

---

### TC-B2C73-D-019 - Clic fuera del área del modal cierra el modal de categorías

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home con el modal de categorías abierto

**Data utilizada**

Valida CA14: un clic fuera de la lista N1 y del panel N2 cierra el modal completo y deja al usuario en la pantalla anterior.

**Pasos ejecutados**

1. Navegar a {BASE_URL} con viewport Desktop 1440x900.
2. Hacer clic en el botón "Categorías" del header.
3. Pasar el mouse sobre una categoría N1 con subcategorías N2.
4. Hacer clic en un área de la página fuera de la lista N1 y del panel N2.

**Resultado esperado**

El modal completo (lista N1 y panel N2) se cierra y se sigue mostrando la Home.

**Evidencia**

![Paso 3 — modal con panel n2](<B2C-73 WEB Evidencias 2026-10-30/TC-B2C73-D-019-p03-modal-con-panel-n2.png>)

![Paso 4 — tras el clic fuera](<B2C-73 WEB Evidencias 2026-10-30/TC-B2C73-D-019-p04-tras-el-clic-fuera.png>)

---

### TC-B2C73-D-020 - Mover el mouse fuera del modal sin hacer clic mantiene visibles la lista N1 y el panel N2

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home con el modal de categorías abierto

**Data utilizada**

Valida CA15: al mover el mouse fuera del modal sin hacer clic, la lista N1 y el panel N2 permanecen visibles, sin cierre por hover-out.

**Pasos ejecutados**

1. Navegar a {BASE_URL} con viewport Desktop 1440x900.
2. Hacer clic en el botón "Categorías" del header.
3. Pasar el mouse sobre una categoría N1 con subcategorías N2.
4. Mover el mouse fuera del área del modal sin hacer clic.

**Resultado esperado**

La lista de categorías N1 y el panel N2 siguen visibles; el modal no se cierra.

**Evidencia**

![Paso 3 — panel n2 desplegado](<B2C-73 WEB Evidencias 2026-10-30/TC-B2C73-D-020-p03-panel-n2-desplegado.png>)

![Paso 4 — mouse fuera del modal](<B2C-73 WEB Evidencias 2026-10-30/TC-B2C73-D-020-p04-mouse-fuera-del-modal.png>)

---

### TC-B2C73-D-021 - Abrir el modal desde la PLP de una categoría N2 o N3 lo muestra en estado neutro

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: PLP de categoría N2 o N3

**Data utilizada**

Valida CA17: al abrir el modal desde una PLP de N2 o N3, el listado N1 aparece sin hover ni categoría preseleccionada y el panel N2 no se despliega solo.

**Pasos ejecutados**

1. Navegar a {CATEGORY_N2_URL} con viewport Desktop 1440x900.
2. Hacer clic en el botón "Categorías" del header.

**Resultado esperado**

El modal muestra el listado de categorías N1 sin ninguna categoría resaltada ni preseleccionada y el panel N2 no se despliega.

**Evidencia**

![Paso 2 — modal abierto desde la plp de la n2](<B2C-73 WEB Evidencias 2026-10-30/TC-B2C73-D-021-p02-modal-abierto-desde-la-plp-de-la-n2.png>)

---

### TC-B2C73-D-022 - Nombre de categoría N2 mayor a 20 caracteres se trunca con puntos suspensivos

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home con el modal de categorías abierto
- Required data state: categoría N2 con nombre de más de 20 caracteres

**Data utilizada**

Valida CA18: el nombre de una categoría N2 de más de 20 caracteres se trunca a 20 y se agregan puntos suspensivos.

**Pasos ejecutados**

1. Navegar a {BASE_URL} con viewport Desktop 1440x900.
2. Hacer clic en el botón "Categorías" del header.
3. Pasar el mouse sobre la categoría N1 que contiene la N2 {LONG_NAME_CATEGORY_N2}.
4. Revisar el nombre del bloque {LONG_NAME_CATEGORY_N2}.

**Resultado esperado**

El nombre de la categoría N2 se muestra con sus primeros 20 caracteres seguidos de puntos suspensivos ("...").

**Evidencia**

![Paso 4 — bloque libreria celebraciones y juguetes](<B2C-73 WEB Evidencias 2026-10-30/TC-B2C73-D-022-p04-bloque-libreria-celebraciones-y-juguetes.png>)

---

### TC-B2C73-D-023 - Nombre de sub-subcategoría N3 mayor a 20 caracteres se trunca con puntos suspensivos

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home con el modal de categorías abierto
- Required data state: categoría N3 con nombre de más de 20 caracteres

**Data utilizada**

Valida CA18: el nombre de una categoría N3 de más de 20 caracteres se trunca a 20 y se agregan puntos suspensivos.

**Pasos ejecutados**

1. Navegar a {BASE_URL} con viewport Desktop 1440x900.
2. Hacer clic en el botón "Categorías" del header.
3. Pasar el mouse sobre la categoría N1 que contiene la N3 {LONG_NAME_CATEGORY_N3}.
4. Revisar el nombre de {LONG_NAME_CATEGORY_N3} dentro de su bloque N2.

**Resultado esperado**

El nombre de la categoría N3 se muestra con sus primeros 20 caracteres seguidos de puntos suspensivos ("...").

**Evidencia**

![Paso 4 — n3 decima primera sub categoria lactea](<B2C-73 WEB Evidencias 2026-10-30/TC-B2C73-D-023-p04-n3-decima-primera-sub-categoria-lactea.png>)

---

### TC-B2C73-D-024 - Categoría inactiva (offline) en el catálogo no se muestra en el menú

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home con el modal de categorías abierto
- Required data state: categoría inactiva (offline) en el catálogo

**Data utilizada**

Valida la consideración general: solo se muestran categorías activas (Online); las inactivas quedan ocultas en el menú.

**Pasos ejecutados**

1. Navegar a {BASE_URL} con viewport Desktop 1440x900.
2. Hacer clic en el botón "Categorías" del header.
3. Buscar la categoría {CATEGORY_OFF} en el listado N1 y en los paneles N2 donde correspondería.

**Resultado esperado**

La categoría {CATEGORY_OFF} no aparece en el listado de categorías N1 ni en los paneles N2 del menú.

**Resultado obtenido**

Verificado 2026-10-30 en DEV: «Accesorios aseo» no aparece en el listado N1 ni en ningun panel N2/N3.

**Observación**

Verificado 2026-10-30 en DEV: «Accesorios aseo» no aparece en el listado N1 ni en ningun panel N2/N3.

**Evidencia**

![Paso 3 — menu recorrido](<B2C-73 WEB Evidencias 2026-10-30/TC-B2C73-D-024-p03-menu-recorrido.png>)

---

<!-- qa-evidence-state
{
 "header": {
  "browsers": {
   "desktop": "chromium",
   "mobile": "chromium"
  },
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "environment": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ (DEV)",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-73",
  "tc_file": "SP1/B2C-73 WEB Test Cases.xlsx",
  "title": "B2C-73 WEB - Evidencias QA (corrida del 2026-10-30)",
  "updated_at": "2026-10-30"
 },
 "history": {
  "2026-10-30": [
   "TC-B2C73-D-001",
   "TC-B2C73-D-002",
   "TC-B2C73-D-003",
   "TC-B2C73-D-004",
   "TC-B2C73-D-005",
   "TC-B2C73-D-006",
   "TC-B2C73-D-007",
   "TC-B2C73-D-008",
   "TC-B2C73-D-009",
   "TC-B2C73-D-010",
   "TC-B2C73-D-011",
   "TC-B2C73-D-012",
   "TC-B2C73-D-013",
   "TC-B2C73-D-014",
   "TC-B2C73-D-015",
   "TC-B2C73-D-016",
   "TC-B2C73-D-017",
   "TC-B2C73-D-018",
   "TC-B2C73-D-019",
   "TC-B2C73-D-020",
   "TC-B2C73-D-021",
   "TC-B2C73-D-022",
   "TC-B2C73-D-023",
   "TC-B2C73-D-024"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "Se despliega el modal de categorías con el título \"Categorías\", el ícono X y el listado de categorías N1 activas.",
   "form_factor": "desktop",
   "id": "TC-B2C73-D-001",
   "name": "Apertura del modal de categorías desde el botón Categorías del header como invitado",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home",
   "screenshots": [
    {
     "caption": "Paso 1 — home como invitado",
     "file": "TC-B2C73-D-001-p01-home-como-invitado.png"
    },
    {
     "caption": "Paso 2 — modal de categorias desplegado",
     "file": "TC-B2C73-D-001-p02-modal-de-categorias-desplegado.png"
    },
    {
     "caption": "Paso 3 — titulo x y categorias n1",
     "file": "TC-B2C73-D-001-p03-titulo-x-y-categorias-n1.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Navegar a {BASE_URL} con viewport Desktop 1440x900.\n2. Hacer clic en el botón \"Categorías\" del header.",
   "test_data": "Valida CA1: al hacer clic en \"Categorías\" del header se despliega el modal con el título, el ícono X y las categorías N1 activas.",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "Se despliega el modal de categorías con el título \"Categorías\", el ícono X y el listado de categorías N1 activas.",
   "form_factor": "desktop",
   "id": "TC-B2C73-D-002",
   "name": "Apertura del modal de categorías desde el botón Categorías del header como usuario logueado",
   "preconditions": "- User type: Registrado\n- Viewport: Desktop 1440x900\n- Ubicacion: Home",
   "screenshots": [
    {
     "caption": "Paso 1 — home con sesion iniciada",
     "file": "TC-B2C73-D-002-p01-home-con-sesion-iniciada.png"
    },
    {
     "caption": "Paso 2 — modal de categorias con sesion",
     "file": "TC-B2C73-D-002-p02-modal-de-categorias-con-sesion.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Navegar a {BASE_URL} con viewport Desktop 1440x900 e iniciar sesión con la cuenta {COMPRADOR_USER}.\n2. Hacer clic en el botón \"Categorías\" del header.",
   "test_data": "Valida CA1 con sesión iniciada: el botón \"Categorías\" del header despliega el mismo modal que para el invitado.",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "Cada categoría N1 muestra su thumbnail, su nombre y el ícono \">\" alineado a la derecha.",
   "form_factor": "desktop",
   "id": "TC-B2C73-D-003",
   "name": "Cada categoría N1 del modal muestra thumbnail, nombre e ícono de navegación",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home con el modal de categorías abierto",
   "screenshots": [
    {
     "caption": "Paso 3 — listado n1",
     "file": "TC-B2C73-D-003-p03-listado-n1.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Navegar a {BASE_URL} con viewport Desktop 1440x900.\n2. Hacer clic en el botón \"Categorías\" del header.\n3. Revisar los ítems del listado de categorías N1.",
   "test_data": "Valida CA2: cada categoría N1 del listado muestra su thumbnail, su nombre y el ícono \">\" alineado a la derecha.",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "El listado se desplaza y muestra las categorías N1 restantes; el título \"Categorías\" y el ícono X se mantienen fijos y el header del sitio no se mueve.",
   "form_factor": "desktop",
   "id": "TC-B2C73-D-004",
   "name": "Scroll del listado de categorías N1 mantiene fijos el título y el ícono X",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home con el modal de categorías abierto\n- Required data state: más categorías N1 activas de las visibles en el modal (ej. más de 11)",
   "screenshots": [
    {
     "caption": "Paso 2 — antes del scroll",
     "file": "TC-B2C73-D-004-p02-antes-del-scroll.png"
    },
    {
     "caption": "Paso 3 — despues del scroll",
     "file": "TC-B2C73-D-004-p03-despues-del-scroll.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Navegar a {BASE_URL} con viewport Desktop 1440x900.\n2. Hacer clic en el botón \"Categorías\" del header.\n3. Hacer scroll hacia abajo dentro del listado de categorías N1.",
   "test_data": "Valida CA3: al hacer scroll en el listado se visualizan las categorías restantes sin afectar el header; el título y el botón cerrar quedan fijos.",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "El ítem de la categoría N1 cambia su color de fondo y de fuente según lo definido en Figma (Categorías-Web, Menú de categorías N1).",
   "form_factor": "desktop",
   "id": "TC-B2C73-D-005",
   "name": "Categoría N1 cambia color de fondo y de fuente al pasar el mouse",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home con el modal de categorías abierto",
   "screenshots": [
    {
     "caption": "Paso 2 — sin hover",
     "file": "TC-B2C73-D-005-p02-sin-hover.png"
    },
    {
     "caption": "Paso 3 — con el mouse encima",
     "file": "TC-B2C73-D-005-p03-con-el-mouse-encima.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Navegar a {BASE_URL} con viewport Desktop 1440x900.\n2. Hacer clic en el botón \"Categorías\" del header.\n3. Pasar el mouse sobre una categoría N1.",
   "test_data": "Valida CA4: al pasar el mouse sobre una categoría N1, el ítem cambia su color de fondo y de fuente según Figma.",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "A la derecha se despliega el panel de subcategorías N2 con el banner superior de la categoría N1, su título, el link \"Mostrar todo\" y las subcategorías N2 activas organizadas en columnas.",
   "form_factor": "desktop",
   "id": "TC-B2C73-D-006",
   "name": "Hover sobre una categoría N1 despliega el panel de subcategorías N2 a la derecha",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home con el modal de categorías abierto\n- Required data state: categoría N1 con subcategorías N2 activas",
   "screenshots": [
    {
     "caption": "Paso 3 — panel n2 de carnes",
     "file": "TC-B2C73-D-006-p03-panel-n2-de-carnes.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Navegar a {BASE_URL} con viewport Desktop 1440x900.\n2. Hacer clic en el botón \"Categorías\" del header.\n3. Pasar el mouse sobre el nombre de la categoría N1 de {CATEGORY_N1_URL}.",
   "test_data": "Valida CA5a: al pasar el mouse sobre el nombre de una categoría N1 se despliega a la derecha el panel N2 con banner superior, título de la categoría, link \"Mostrar todo\" y las N2 organizadas en columnas.",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "Se carga la PLP de la categoría N1 ({CATEGORY_N1_URL}) y el modal de categorías ya no se muestra.",
   "form_factor": "desktop",
   "id": "TC-B2C73-D-007",
   "name": "Clic en el nombre de una categoría N1 navega a su PLP y cierra el modal",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home con el modal de categorías abierto",
   "screenshots": [
    {
     "caption": "Paso 3 — plp de la categoria n1",
     "file": "TC-B2C73-D-007-p03-plp-de-la-categoria-n1.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Navegar a {BASE_URL} con viewport Desktop 1440x900.\n2. Hacer clic en el botón \"Categorías\" del header.\n3. Hacer clic en el nombre de la categoría N1 de {CATEGORY_N1_URL} en el listado.",
   "test_data": "Valida CA5b: al hacer clic en el nombre de una categoría N1 del listado se navega a la PLP de esa categoría y el modal se cierra.",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "Los bloques N2 se muestran en 3 columnas y cada bloque contiene el ícono de la N2, su nombre, la lista de sus sub-subcategorías N3 y el link \"Mostrar todo\".",
   "form_factor": "desktop",
   "id": "TC-B2C73-D-008",
   "name": "Panel N2 muestra los bloques en 3 columnas con ícono, nombre, lista N3 y Mostrar todo",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home con el modal de categorías abierto\n- Required data state: categoría N1 con subcategorías N2 que tienen sub-subcategorías N3",
   "screenshots": [
    {
     "caption": "Paso 3 — panel n2",
     "file": "TC-B2C73-D-008-p03-panel-n2.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Navegar a {BASE_URL} con viewport Desktop 1440x900.\n2. Hacer clic en el botón \"Categorías\" del header.\n3. Pasar el mouse sobre la categoría N1 a la que pertenece {CATEGORY_N2_URL}.\n4. Revisar los bloques de subcategorías N2 del panel.",
   "test_data": "Valida CA6: el panel N2 organiza las subcategorías en 3 columnas y cada bloque N2 muestra su ícono (thumbnail), su nombre, la lista de N3 y el link \"Mostrar todo\".",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "El bloque de la categoría N2 lista exactamente 10 sub-subcategorías N3, en el orden del catálogo, y no muestra las restantes.",
   "form_factor": "desktop",
   "id": "TC-B2C73-D-009",
   "name": "Bloque N2 con más de 10 sub-subcategorías N3 lista solo 10 en el menú",
   "observation": "Verificado 2026-10-30 en DEV: la N2 «Leches y cremas» lista exactamente 10 N3 en el menu (el tope).",
   "observed": "Verificado 2026-10-30 en DEV: la N2 «Leches y cremas» lista exactamente 10 N3 en el menu (el tope).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home con el modal de categorías abierto\n- Required data state: categoría N2 con más de 10 sub-subcategorías N3 activas",
   "screenshots": [
    {
     "caption": "Paso 3 — bloque n2 leches y cremas",
     "file": "TC-B2C73-D-009-p03-bloque-n2-leches-y-cremas.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Navegar a {BASE_URL} con viewport Desktop 1440x900.\n2. Hacer clic en el botón \"Categorías\" del header.\n3. Pasar el mouse sobre la categoría N1 que contiene la N2 {CATEGORY_N2_MAS_10_N3}.\n4. Contar las sub-subcategorías N3 listadas en el bloque {CATEGORY_N2_MAS_10_N3}.",
   "test_data": "Valida CA6 (límite RF11): dentro del bloque N2 solo se listan hasta 10 sub-subcategorías N3; las restantes no aparecen en el menú.",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "Se carga la PLP de la categoría N1 ({CATEGORY_N1_URL}) y el modal se cierra automáticamente.",
   "form_factor": "desktop",
   "id": "TC-B2C73-D-010",
   "name": "Link Mostrar todo de la categoría N1 en el panel navega a la PLP de la N1",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home con el modal de categorías abierto",
   "screenshots": [
    {
     "caption": "Paso 3 — panel con mostrar todo",
     "file": "TC-B2C73-D-010-p03-panel-con-mostrar-todo.png"
    },
    {
     "caption": "Paso 4 — plp de la n1",
     "file": "TC-B2C73-D-010-p04-plp-de-la-n1.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Navegar a {BASE_URL} con viewport Desktop 1440x900.\n2. Hacer clic en el botón \"Categorías\" del header.\n3. Pasar el mouse sobre la categoría N1 de {CATEGORY_N1_URL}.\n4. Hacer clic en el link \"Mostrar todo\" junto al título de la categoría N1 en el panel.",
   "test_data": "Valida CA7: el link \"Mostrar todo\" de la categoría N1 en el panel N2 navega a la PLP de la N1 y cierra el modal.",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "Se carga la PLP de la categoría N1 ({CATEGORY_N1_URL}) y el modal se cierra automáticamente.",
   "form_factor": "desktop",
   "id": "TC-B2C73-D-011",
   "name": "Título de la categoría N1 en el panel N2 navega a la PLP de la N1",
   "observation": "Esperado: el titulo de la categoria N1 en el panel N2 navega a la PLP de la N1 y cierra el modal. Obtenido: al hacer clic en el titulo «Carnes» del panel no ocurre nada (sigue en /, el modal sigue abierto); el titulo es un texto plano sin accion de clic. Verificado 2026-10-30 en DEV, Desktop 1440x900. B2C-73.spec.ts:286. Bug: B2C-1407.",
   "observed": "Esperado: el titulo de la categoria N1 en el panel N2 navega a la PLP de la N1 y cierra el modal. Obtenido: al hacer clic en el titulo «Carnes» del panel no ocurre nada (sigue en /, el modal sigue abierto); el titulo es un texto plano sin accion de clic. Verificado 2026-10-30 en DEV, Desktop 1440x900. B2C-73.spec.ts:286. Bug: B2C-1407.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home con el modal de categorías abierto",
   "screenshots": [
    {
     "caption": "Paso 3 — panel con el titulo",
     "file": "TC-B2C73-D-011-p03-panel-con-el-titulo.png"
    },
    {
     "caption": "Paso 4 — plp de la n1",
     "file": "TC-B2C73-D-011-p04-plp-de-la-n1.png"
    }
   ],
   "status": "Rechazado",
   "steps": "1. Navegar a {BASE_URL} con viewport Desktop 1440x900.\n2. Hacer clic en el botón \"Categorías\" del header.\n3. Pasar el mouse sobre la categoría N1 de {CATEGORY_N1_URL}.\n4. Hacer clic en el título de la categoría N1 dentro del panel N2.",
   "test_data": "Valida CA7: el nombre de la categoría N1 que se muestra como título del panel N2 navega a la PLP de la N1 y cierra el modal.",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "El panel N2 muestra una barra de scroll vertical y su contenido se desplaza, dejando ver los bloques N2 restantes.",
   "form_factor": "desktop",
   "id": "TC-B2C73-D-012",
   "name": "Panel N2 con contenido mayor al alto muestra barra de scroll vertical propia",
   "observation": "Falta el dato: {CATEGORY_N1_PANEL_SCROLL} = Despensa no cumple «panel N2 que excede el alto visible»: su panel muestra 8 bloques y termina en ~700 px dentro de los ~880 px del modal a 1440x900, asi que no hay scroll que comprobar. Quien lo carga: equipo de data (una N1 cuyo panel N2 sea mas alto que el modal).",
   "observed": "Falta el dato: {CATEGORY_N1_PANEL_SCROLL} = Despensa no cumple «panel N2 que excede el alto visible»: su panel muestra 8 bloques y termina en ~700 px dentro de los ~880 px del modal a 1440x900, asi que no hay scroll que comprobar. Quien lo carga: equipo de data (una N1 cuyo panel N2 sea mas alto que el modal).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home con el modal de categorías abierto\n- Required data state: categoría N1 cuyo panel N2 excede el alto visible",
   "screenshots": [
    {
     "caption": "Paso 3 — panel n2 de despensa",
     "file": "TC-B2C73-D-012-p03-panel-n2-de-despensa.png"
    },
    {
     "caption": "Paso 4 — panel tras el scroll",
     "file": "TC-B2C73-D-012-p04-panel-tras-el-scroll.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Navegar a {BASE_URL} con viewport Desktop 1440x900.\n2. Hacer clic en el botón \"Categorías\" del header.\n3. Pasar el mouse sobre la categoría N1 {CATEGORY_N1_PANEL_SCROLL}.\n4. Hacer scroll hacia abajo dentro del panel N2.",
   "test_data": "Valida CA8: cuando el contenido del panel N2 excede su alto se muestra una barra de scroll vertical que permite desplazarlo.",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "Se carga la PLP de la categoría N2 ({CATEGORY_N2_URL}) y el modal se cierra automáticamente.",
   "form_factor": "desktop",
   "id": "TC-B2C73-D-013",
   "name": "Link Mostrar todo de un bloque N2 navega a la PLP de la categoría N2",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home con el modal de categorías abierto",
   "screenshots": [
    {
     "caption": "Paso 3 — bloque n2 con su mostrar todo",
     "file": "TC-B2C73-D-013-p03-bloque-n2-con-su-mostrar-todo.png"
    },
    {
     "caption": "Paso 4 — plp de la n2",
     "file": "TC-B2C73-D-013-p04-plp-de-la-n2.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Navegar a {BASE_URL} con viewport Desktop 1440x900.\n2. Hacer clic en el botón \"Categorías\" del header.\n3. Pasar el mouse sobre la categoría N1 a la que pertenece {CATEGORY_N2_URL}.\n4. Hacer clic en el link \"Mostrar todo\" del bloque de la categoría N2 de {CATEGORY_N2_URL}.",
   "test_data": "Valida CA9: el link \"Mostrar todo\" del bloque de una categoría N2 navega a la PLP de esa N2 y cierra el modal.",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "Se carga la PLP de la categoría N2 ({CATEGORY_N2_URL}) y el modal se cierra automáticamente.",
   "form_factor": "desktop",
   "id": "TC-B2C73-D-014",
   "name": "Nombre de una categoría N2 en el panel navega a su PLP",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home con el modal de categorías abierto",
   "screenshots": [
    {
     "caption": "Paso 3 — panel n2",
     "file": "TC-B2C73-D-014-p03-panel-n2.png"
    },
    {
     "caption": "Paso 4 — plp de la n2",
     "file": "TC-B2C73-D-014-p04-plp-de-la-n2.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Navegar a {BASE_URL} con viewport Desktop 1440x900.\n2. Hacer clic en el botón \"Categorías\" del header.\n3. Pasar el mouse sobre la categoría N1 a la que pertenece {CATEGORY_N2_URL}.\n4. Hacer clic en el nombre de la categoría N2 de {CATEGORY_N2_URL}.",
   "test_data": "Valida CA9: el nombre de una categoría N2 en el panel navega a la PLP de esa N2 y cierra el modal.",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "Se carga la PLP de la categoría N3 ({CATEGORY_N3_URL}) y el modal se cierra automáticamente.",
   "form_factor": "desktop",
   "id": "TC-B2C73-D-015",
   "name": "Nombre de una sub-subcategoría N3 en el panel navega a su PLP",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home con el modal de categorías abierto",
   "screenshots": [
    {
     "caption": "Paso 3 — bloque n2 con su n3",
     "file": "TC-B2C73-D-015-p03-bloque-n2-con-su-n3.png"
    },
    {
     "caption": "Paso 4 — plp de la n3",
     "file": "TC-B2C73-D-015-p04-plp-de-la-n3.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Navegar a {BASE_URL} con viewport Desktop 1440x900.\n2. Hacer clic en el botón \"Categorías\" del header.\n3. Pasar el mouse sobre la categoría N1 a la que pertenece {CATEGORY_N3_URL}.\n4. Hacer clic en el nombre de la categoría N3 de {CATEGORY_N3_URL} dentro de su bloque N2.",
   "test_data": "Valida CA10: el nombre de una categoría N3 dentro de un bloque N2 navega a la PLP de esa N3 y cierra el modal.",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "El modal de categorías se cierra y se sigue mostrando la PLP de {CATEGORY_N1_URL}, sin navegar a otra página.",
   "form_factor": "desktop",
   "id": "TC-B2C73-D-016",
   "name": "Ícono X cierra el modal de categorías y mantiene la pantalla anterior",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: PLP de categoría",
   "screenshots": [
    {
     "caption": "Paso 2 — modal abierto sobre la plp",
     "file": "TC-B2C73-D-016-p02-modal-abierto-sobre-la-plp.png"
    },
    {
     "caption": "Paso 3 — tras la x",
     "file": "TC-B2C73-D-016-p03-tras-la-x.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Navegar a {CATEGORY_N1_URL} con viewport Desktop 1440x900.\n2. Hacer clic en el botón \"Categorías\" del header.\n3. Hacer clic en el ícono X del modal.",
   "test_data": "Valida CA11: al hacer clic en el ícono X el modal se cierra y el usuario queda en la pantalla desde donde lo abrió.",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "La categoría {CATEGORY_N1_WO_SUB} muestra solo su nombre y el ícono \">\" y no se despliega el panel de subcategorías N2.",
   "form_factor": "desktop",
   "id": "TC-B2C73-D-017",
   "name": "Categoría N1 sin subcategorías N2 activas no despliega el panel N2",
   "observation": "Verificado 2026-10-30 en DEV: «Congelados» no despliega panel N2.",
   "observed": "Verificado 2026-10-30 en DEV: «Congelados» no despliega panel N2.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home con el modal de categorías abierto\n- Required data state: categoría N1 sin subcategorías N2 activas",
   "screenshots": [
    {
     "caption": "Paso 3 — hover sobre congelados",
     "file": "TC-B2C73-D-017-p03-hover-sobre-congelados.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Navegar a {BASE_URL} con viewport Desktop 1440x900.\n2. Hacer clic en el botón \"Categorías\" del header.\n3. Pasar el mouse sobre la categoría N1 {CATEGORY_N1_WO_SUB}.",
   "test_data": "Valida CA12: al pasar el mouse sobre una N1 sin N2 activas solo se muestra su nombre con el ícono \">\" y no se despliega el panel N2.",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "El bloque de {CATEGORY_N2_WO_SUB} muestra solo su nombre, su imagen y el link \"Mostrar todo\", sin lista de sub-subcategorías N3.",
   "form_factor": "desktop",
   "id": "TC-B2C73-D-018",
   "name": "Categoría N2 sin sub-subcategorías N3 muestra solo nombre, imagen y Mostrar todo",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home con el modal de categorías abierto\n- Required data state: categoría N2 sin sub-subcategorías N3 activas",
   "screenshots": [
    {
     "caption": "Paso 4 — bloque n2 detergente",
     "file": "TC-B2C73-D-018-p04-bloque-n2-detergente.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Navegar a {BASE_URL} con viewport Desktop 1440x900.\n2. Hacer clic en el botón \"Categorías\" del header.\n3. Pasar el mouse sobre la categoría N1 que contiene la N2 {CATEGORY_N2_WO_SUB}.\n4. Revisar el bloque de la categoría N2 {CATEGORY_N2_WO_SUB}.",
   "test_data": "Valida CA13: el bloque de una N2 sin N3 activas muestra solo el nombre, la imagen y el link \"Mostrar todo\".",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "El modal completo (lista N1 y panel N2) se cierra y se sigue mostrando la Home.",
   "form_factor": "desktop",
   "id": "TC-B2C73-D-019",
   "name": "Clic fuera del área del modal cierra el modal de categorías",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home con el modal de categorías abierto",
   "screenshots": [
    {
     "caption": "Paso 3 — modal con panel n2",
     "file": "TC-B2C73-D-019-p03-modal-con-panel-n2.png"
    },
    {
     "caption": "Paso 4 — tras el clic fuera",
     "file": "TC-B2C73-D-019-p04-tras-el-clic-fuera.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Navegar a {BASE_URL} con viewport Desktop 1440x900.\n2. Hacer clic en el botón \"Categorías\" del header.\n3. Pasar el mouse sobre una categoría N1 con subcategorías N2.\n4. Hacer clic en un área de la página fuera de la lista N1 y del panel N2.",
   "test_data": "Valida CA14: un clic fuera de la lista N1 y del panel N2 cierra el modal completo y deja al usuario en la pantalla anterior.",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "La lista de categorías N1 y el panel N2 siguen visibles; el modal no se cierra.",
   "form_factor": "desktop",
   "id": "TC-B2C73-D-020",
   "name": "Mover el mouse fuera del modal sin hacer clic mantiene visibles la lista N1 y el panel N2",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home con el modal de categorías abierto",
   "screenshots": [
    {
     "caption": "Paso 3 — panel n2 desplegado",
     "file": "TC-B2C73-D-020-p03-panel-n2-desplegado.png"
    },
    {
     "caption": "Paso 4 — mouse fuera del modal",
     "file": "TC-B2C73-D-020-p04-mouse-fuera-del-modal.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Navegar a {BASE_URL} con viewport Desktop 1440x900.\n2. Hacer clic en el botón \"Categorías\" del header.\n3. Pasar el mouse sobre una categoría N1 con subcategorías N2.\n4. Mover el mouse fuera del área del modal sin hacer clic.",
   "test_data": "Valida CA15: al mover el mouse fuera del modal sin hacer clic, la lista N1 y el panel N2 permanecen visibles, sin cierre por hover-out.",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "El modal muestra el listado de categorías N1 sin ninguna categoría resaltada ni preseleccionada y el panel N2 no se despliega.",
   "form_factor": "desktop",
   "id": "TC-B2C73-D-021",
   "name": "Abrir el modal desde la PLP de una categoría N2 o N3 lo muestra en estado neutro",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: PLP de categoría N2 o N3",
   "screenshots": [
    {
     "caption": "Paso 2 — modal abierto desde la plp de la n2",
     "file": "TC-B2C73-D-021-p02-modal-abierto-desde-la-plp-de-la-n2.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Navegar a {CATEGORY_N2_URL} con viewport Desktop 1440x900.\n2. Hacer clic en el botón \"Categorías\" del header.",
   "test_data": "Valida CA17: al abrir el modal desde una PLP de N2 o N3, el listado N1 aparece sin hover ni categoría preseleccionada y el panel N2 no se despliega solo.",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "El nombre de la categoría N2 se muestra con sus primeros 20 caracteres seguidos de puntos suspensivos (\"...\").",
   "form_factor": "desktop",
   "id": "TC-B2C73-D-022",
   "name": "Nombre de categoría N2 mayor a 20 caracteres se trunca con puntos suspensivos",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home con el modal de categorías abierto\n- Required data state: categoría N2 con nombre de más de 20 caracteres",
   "screenshots": [
    {
     "caption": "Paso 4 — bloque libreria celebraciones y juguetes",
     "file": "TC-B2C73-D-022-p04-bloque-libreria-celebraciones-y-juguetes.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Navegar a {BASE_URL} con viewport Desktop 1440x900.\n2. Hacer clic en el botón \"Categorías\" del header.\n3. Pasar el mouse sobre la categoría N1 que contiene la N2 {LONG_NAME_CATEGORY_N2}.\n4. Revisar el nombre del bloque {LONG_NAME_CATEGORY_N2}.",
   "test_data": "Valida CA18: el nombre de una categoría N2 de más de 20 caracteres se trunca a 20 y se agregan puntos suspensivos.",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "El nombre de la categoría N3 se muestra con sus primeros 20 caracteres seguidos de puntos suspensivos (\"...\").",
   "form_factor": "desktop",
   "id": "TC-B2C73-D-023",
   "name": "Nombre de sub-subcategoría N3 mayor a 20 caracteres se trunca con puntos suspensivos",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home con el modal de categorías abierto\n- Required data state: categoría N3 con nombre de más de 20 caracteres",
   "screenshots": [
    {
     "caption": "Paso 4 — n3 decima primera sub categoria lactea",
     "file": "TC-B2C73-D-023-p04-n3-decima-primera-sub-categoria-lactea.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Navegar a {BASE_URL} con viewport Desktop 1440x900.\n2. Hacer clic en el botón \"Categorías\" del header.\n3. Pasar el mouse sobre la categoría N1 que contiene la N3 {LONG_NAME_CATEGORY_N3}.\n4. Revisar el nombre de {LONG_NAME_CATEGORY_N3} dentro de su bloque N2.",
   "test_data": "Valida CA18: el nombre de una categoría N3 de más de 20 caracteres se trunca a 20 y se agregan puntos suspensivos.",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-30",
   "expected": "La categoría {CATEGORY_OFF} no aparece en el listado de categorías N1 ni en los paneles N2 del menú.",
   "form_factor": "desktop",
   "id": "TC-B2C73-D-024",
   "name": "Categoría inactiva (offline) en el catálogo no se muestra en el menú",
   "observation": "Verificado 2026-10-30 en DEV: «Accesorios aseo» no aparece en el listado N1 ni en ningun panel N2/N3.",
   "observed": "Verificado 2026-10-30 en DEV: «Accesorios aseo» no aparece en el listado N1 ni en ningun panel N2/N3.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home con el modal de categorías abierto\n- Required data state: categoría inactiva (offline) en el catálogo",
   "screenshots": [
    {
     "caption": "Paso 3 — menu recorrido",
     "file": "TC-B2C73-D-024-p03-menu-recorrido.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Navegar a {BASE_URL} con viewport Desktop 1440x900.\n2. Hacer clic en el botón \"Categorías\" del header.\n3. Buscar la categoría {CATEGORY_OFF} en el listado N1 y en los paneles N2 donde correspondería.",
   "test_data": "Valida la consideración general: solo se muestran categorías activas (Online); las inactivas quedan ocultas en el menú.",
   "viewport": "1440x900"
  }
 ]
}
-->
