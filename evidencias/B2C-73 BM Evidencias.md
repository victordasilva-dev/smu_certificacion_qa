# B2C-73 BM - Menú de categorías desde el catálogo - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-73 BM |
| Última actualización | 2026-11-12 |
| Ejecutado por | Victor Chirinos |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP1/B2C-73 BM Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 2 |
| Bloqueado Data | 1 |
| **Total** | **3** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-12 | 3 | TC-B2C73-BM-001, TC-B2C73-BM-002, TC-B2C73-BM-003 |

## Detalle por caso de prueba

### TC-B2C73-BM-001 - [BM] [Administrador] Categoría sin thumbnail configurado muestra imagen placeholder en el menú

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-12 |
| Form factor | bm |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Administrador de Business Manager
- Ubicacion: login de Business Manager
- Required data state: categoría N1 activa con thumbnail configurado

**Data utilizada**

Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl; contraseña no se transcribe)

Storefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

Categoría: Pan ({BM_CATEGORY_SIN_THUMBNAIL})

**Pasos ejecutados**

1. Ingresar a https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site con la cuenta e_vgaldino@smu.cl.
2. Ir a Merchant Tools > Products and Catalogs > Catalogs, abrir la categoría Pan, quitar el thumbnail y guardar.
3. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ con viewport Desktop 1440x900 y hacer clic en el botón "Categorías" del header.
4. Revisar el ítem de la categoría Pan en el listado N1.

**Resultado esperado**

El ítem de la categoría Pan muestra una imagen placeholder genérica en el espacio del thumbnail.

**Resultado obtenido**

No se ejecutó el cambio: en el catálogo unimarc-storefront-catalog 'Pan' es una subcategoría N2 (panaderia-y-pasteleria_pan, bajo Panadería y Pastelería), no una N1, y el caso revisa el ítem en el listado N1 del menú.

**Observación**

Causa: {BM_CATEGORY_SIN_THUMBNAIL} = 'Pan' es una N2 y el TC pide una N1 con thumbnail. Acción: declarar en el Excel de data una categoría N1 activa con thumbnail (ej. el ID o nombre de una N1 del menú) y re-ejecutar. La columna Test data de la planilla no declara tokens (trae la descripción del CA); se ejecutó con los tokens que nombran los pasos, por decisión del usuario: corregir la planilla.

**Evidencia**

![Paso 1 — business manager con sesion](<B2C-73 BM Evidencias/TC-B2C73-BM-001-p01-business-manager-con-sesion.png>)

![Paso 2 — pan es subcategoria n2 de panaderia](<B2C-73 BM Evidencias/TC-B2C73-BM-001-p02-pan-es-subcategoria-n2-de-panaderia.png>)

---

### TC-B2C73-BM-002 - [BM] [Administrador] Categoría N1 sin fullimage no muestra banner en el panel N2 ni deja espacio vacío

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-12 |
| Form factor | bm |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Administrador de Business Manager
- Ubicacion: login de Business Manager
- Required data state: categoría N1 activa con subcategorías N2 y fullimage configurado

**Data utilizada**

Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl)

Storefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

Categoría: Despensa ({BM_CATEGORY_SIN_FULLIMAGE})

**Pasos ejecutados**

1. Ingresar a https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site con la cuenta e_vgaldino@smu.cl.
2. Ir a Merchant Tools > Products and Catalogs > Catalogs, abrir la categoría Despensa, quitar el fullimage y guardar.
3. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ con viewport Desktop 1440x900 y hacer clic en el botón "Categorías" del header.
4. Pasar el mouse sobre la categoría Despensa.

**Resultado esperado**

El panel N2 se muestra sin banner superior y el título y las subcategorías N2 suben a ocupar ese espacio, sin dejar un hueco vacío.

**Resultado obtenido**

El panel N2 de Despensa se muestra sin banner superior: el título 'Despensa' y las subcategorías N2 arrancan arriba, sin hueco vacío (en contraste, Frutas y Verduras o Carnes, con fullimage, muestran su banner).

**Observación**

Despensa ya tenía el Standard Image (fullimage) vacío en BM, así que la precondición ('con fullimage configurado') no se cumplía y el paso 2 no cambió nada; por decisión del usuario se aprueba con el estado actual. La columna Test data de la planilla no declara tokens (trae la descripción del CA); se ejecutó con los tokens que nombran los pasos, por decisión del usuario: corregir la planilla.

**Evidencia**

![Paso 2 — despensa sin standard image en bm](<B2C-73 BM Evidencias/TC-B2C73-BM-002-p02-despensa-sin-standard-image-en-bm.png>)

![Paso 4 — panel de despensa sin banner ni hueco](<B2C-73 BM Evidencias/TC-B2C73-BM-002-p04-panel-de-despensa-sin-banner-ni-hueco.png>)

---

### TC-B2C73-BM-003 - [BM] [Administrador] El orden de las categorías en el menú sigue el orden del catálogo

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-12 |
| Form factor | bm |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Administrador de Business Manager
- Ubicacion: login de Business Manager
- Required data state: al menos dos categorías N1 activas

**Data utilizada**

Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl)

Storefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

Categorías N1 reordenadas: Carnes y Frutas y Verduras (catálogo unimarc-storefront-catalog)

**Pasos ejecutados**

1. Ingresar a https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site con la cuenta e_vgaldino@smu.cl.
2. Ir a Merchant Tools > Products and Catalogs > Catalogs, cambiar la posición de dos categorías N1 y guardar.
3. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ con viewport Desktop 1440x900 y hacer clic en el botón "Categorías" del header.
4. Revisar el orden de las categorías N1 del listado.

**Resultado esperado**

El listado de categorías N1 del menú muestra las dos categorías en el nuevo orden configurado en el catálogo.

**Resultado obtenido**

Tras mover Frutas y Verduras sobre Carnes en el catálogo e invalidar la caché de página, el menú Categorías muestra 'Frutas y Verduras > Carnes > Lácteos…', el nuevo orden.

**Observación**

El orden original (Carnes primero) se restauró en BM y se verificó en el storefront. La columna Test data de la planilla no declara tokens (trae la descripción del CA); se ejecutó con los tokens que nombran los pasos, por decisión del usuario: corregir la planilla.

**Evidencia**

![Paso 1 — business manager con sesion](<B2C-73 BM Evidencias/TC-B2C73-BM-003-p01-business-manager-con-sesion.png>)

![Paso 2 — orden original del catalogo](<B2C-73 BM Evidencias/TC-B2C73-BM-003-p02-orden-original-del-catalogo.png>)

![Paso 3 — frutas y verduras movida sobre carnes](<B2C-73 BM Evidencias/TC-B2C73-BM-003-p03-frutas-y-verduras-movida-sobre-carnes.png>)

![Paso 4 — menu con el nuevo orden](<B2C-73 BM Evidencias/TC-B2C73-BM-003-p04-menu-con-el-nuevo-orden.png>)

---

<!-- qa-evidence-state
{
 "header": {
  "browsers": {
   "desktop": "chromium"
  },
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "environment": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
  "executed_by": "Victor Chirinos",
  "suite": "B2C-73 BM",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP1/B2C-73 BM Test Cases.xlsx",
  "title": "B2C-73 BM - Menú de categorías desde el catálogo - Evidencias QA",
  "updated_at": "2026-11-12"
 },
 "history": {
  "2026-11-12": [
   "TC-B2C73-BM-001",
   "TC-B2C73-BM-002",
   "TC-B2C73-BM-003"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-11-12",
   "expected": "El ítem de la categoría Pan muestra una imagen placeholder genérica en el espacio del thumbnail.",
   "form_factor": "bm",
   "id": "TC-B2C73-BM-001",
   "name": "[BM] [Administrador] Categoría sin thumbnail configurado muestra imagen placeholder en el menú",
   "observation": "Causa: {BM_CATEGORY_SIN_THUMBNAIL} = 'Pan' es una N2 y el TC pide una N1 con thumbnail. Acción: declarar en el Excel de data una categoría N1 activa con thumbnail (ej. el ID o nombre de una N1 del menú) y re-ejecutar. La columna Test data de la planilla no declara tokens (trae la descripción del CA); se ejecutó con los tokens que nombran los pasos, por decisión del usuario: corregir la planilla.",
   "observed": "No se ejecutó el cambio: en el catálogo unimarc-storefront-catalog 'Pan' es una subcategoría N2 (panaderia-y-pasteleria_pan, bajo Panadería y Pastelería), no una N1, y el caso revisa el ítem en el listado N1 del menú.",
   "preconditions": "- User type: Administrador de Business Manager\n- Ubicacion: login de Business Manager\n- Required data state: categoría N1 activa con thumbnail configurado",
   "screenshots": [
    {
     "caption": "Paso 1 — business manager con sesion",
     "file": "TC-B2C73-BM-001-p01-business-manager-con-sesion.png"
    },
    {
     "caption": "Paso 2 — pan es subcategoria n2 de panaderia",
     "file": "TC-B2C73-BM-001-p02-pan-es-subcategoria-n2-de-panaderia.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Ingresar a https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site con la cuenta e_vgaldino@smu.cl.\n2. Ir a Merchant Tools > Products and Catalogs > Catalogs, abrir la categoría Pan, quitar el thumbnail y guardar.\n3. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ con viewport Desktop 1440x900 y hacer clic en el botón \"Categorías\" del header.\n4. Revisar el ítem de la categoría Pan en el listado N1.",
   "test_data": "Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl; contraseña no se transcribe)\nStorefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\nCategoría: Pan ({BM_CATEGORY_SIN_THUMBNAIL})",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-12",
   "expected": "El panel N2 se muestra sin banner superior y el título y las subcategorías N2 suben a ocupar ese espacio, sin dejar un hueco vacío.",
   "form_factor": "bm",
   "id": "TC-B2C73-BM-002",
   "name": "[BM] [Administrador] Categoría N1 sin fullimage no muestra banner en el panel N2 ni deja espacio vacío",
   "observation": "Despensa ya tenía el Standard Image (fullimage) vacío en BM, así que la precondición ('con fullimage configurado') no se cumplía y el paso 2 no cambió nada; por decisión del usuario se aprueba con el estado actual. La columna Test data de la planilla no declara tokens (trae la descripción del CA); se ejecutó con los tokens que nombran los pasos, por decisión del usuario: corregir la planilla.",
   "observed": "El panel N2 de Despensa se muestra sin banner superior: el título 'Despensa' y las subcategorías N2 arrancan arriba, sin hueco vacío (en contraste, Frutas y Verduras o Carnes, con fullimage, muestran su banner).",
   "preconditions": "- User type: Administrador de Business Manager\n- Ubicacion: login de Business Manager\n- Required data state: categoría N1 activa con subcategorías N2 y fullimage configurado",
   "screenshots": [
    {
     "caption": "Paso 2 — despensa sin standard image en bm",
     "file": "TC-B2C73-BM-002-p02-despensa-sin-standard-image-en-bm.png"
    },
    {
     "caption": "Paso 4 — panel de despensa sin banner ni hueco",
     "file": "TC-B2C73-BM-002-p04-panel-de-despensa-sin-banner-ni-hueco.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Ingresar a https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site con la cuenta e_vgaldino@smu.cl.\n2. Ir a Merchant Tools > Products and Catalogs > Catalogs, abrir la categoría Despensa, quitar el fullimage y guardar.\n3. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ con viewport Desktop 1440x900 y hacer clic en el botón \"Categorías\" del header.\n4. Pasar el mouse sobre la categoría Despensa.",
   "test_data": "Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl)\nStorefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\nCategoría: Despensa ({BM_CATEGORY_SIN_FULLIMAGE})",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-12",
   "expected": "El listado de categorías N1 del menú muestra las dos categorías en el nuevo orden configurado en el catálogo.",
   "form_factor": "bm",
   "id": "TC-B2C73-BM-003",
   "name": "[BM] [Administrador] El orden de las categorías en el menú sigue el orden del catálogo",
   "observation": "El orden original (Carnes primero) se restauró en BM y se verificó en el storefront. La columna Test data de la planilla no declara tokens (trae la descripción del CA); se ejecutó con los tokens que nombran los pasos, por decisión del usuario: corregir la planilla.",
   "observed": "Tras mover Frutas y Verduras sobre Carnes en el catálogo e invalidar la caché de página, el menú Categorías muestra 'Frutas y Verduras > Carnes > Lácteos…', el nuevo orden.",
   "preconditions": "- User type: Administrador de Business Manager\n- Ubicacion: login de Business Manager\n- Required data state: al menos dos categorías N1 activas",
   "screenshots": [
    {
     "caption": "Paso 1 — business manager con sesion",
     "file": "TC-B2C73-BM-003-p01-business-manager-con-sesion.png"
    },
    {
     "caption": "Paso 2 — orden original del catalogo",
     "file": "TC-B2C73-BM-003-p02-orden-original-del-catalogo.png"
    },
    {
     "caption": "Paso 3 — frutas y verduras movida sobre carnes",
     "file": "TC-B2C73-BM-003-p03-frutas-y-verduras-movida-sobre-carnes.png"
    },
    {
     "caption": "Paso 4 — menu con el nuevo orden",
     "file": "TC-B2C73-BM-003-p04-menu-con-el-nuevo-orden.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Ingresar a https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site con la cuenta e_vgaldino@smu.cl.\n2. Ir a Merchant Tools > Products and Catalogs > Catalogs, cambiar la posición de dos categorías N1 y guardar.\n3. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ con viewport Desktop 1440x900 y hacer clic en el botón \"Categorías\" del header.\n4. Revisar el orden de las categorías N1 del listado.",
   "test_data": "Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl)\nStorefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\nCategorías N1 reordenadas: Carnes y Frutas y Verduras (catálogo unimarc-storefront-catalog)",
   "viewport": "1440x900"
  }
 ]
}
-->
