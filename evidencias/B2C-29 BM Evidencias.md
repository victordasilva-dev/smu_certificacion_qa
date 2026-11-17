# B2C-29 BM - Home administrable desde Page Designer - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-29 BM |
| Última actualización | 2026-11-16 |
| Ejecutado por | Victor Chirinos |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | webkit |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP1/B2C-29 BM Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 2 |
| Bloqueado Data | 1 |
| Rechazado | 1 |
| **Total** | **4** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-16 | 4 | TC-B2C29-BM-001, TC-B2C29-BM-002, TC-B2C29-BM-003, TC-B2C29-BM-004 |

## Detalle por caso de prueba

### TC-B2C29-BM-001 - Configurar atributos de un componente del Home desde Page Designer

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-16 |
| Form factor | bm |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: BM Admin
- Ubicacion: Business Manager > Page Designer > Home

**Data utilizada**

Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl; contraseña no se transcribe)

Page Designer > Unimarc Home (home-page), locale Spanish (Chile)

**Pasos ejecutados**

1. Ingresar a Business Manager con la cuenta {BM_ADMIN_USER}.
2. Navegar a Page Designer > Home.
3. Seleccionar un componente y configurar imagen/video, texto, link, productos asociados, boton CTA y comportamiento.
4. Guardar y publicar.

**Resultado esperado**

El componente queda configurado con los atributos definidos (imagen/video, texto, link, productos, CTA, comportamiento); los cambios se guardan correctamente.

**Resultado obtenido**

En Page Designer > Home se agregó a Main Content un componente "Carrusel de productos" de prueba y se configuraron sus atributos: video del banner (/images/unimarc-home/ot-vid.mp4), texto (título "QA B2C-29 BM-001", subtítulo "Componente de prueba QA", título y etiqueta del banner), link (enlace del banner a /category/carnes), productos asociados (modo collection, categoría "carnes", máximo 8), botón CTA ("Ver todo QA" a /category/carnes) y comportamiento (desplazamiento automático cada 4 s, indicadores). Apply muestra "The component was successfully saved for the Spanish (Chile) locale"; tras recargar Page Designer todos los valores siguen guardados y el componente se renderiza con su video, textos, CTA y productos de Carnes.

**Observación**

Se usó un componente de prueba nuevo para no alterar los componentes reales del Home; al terminar la corrida se eliminó y se invalidó la caché de página de Unimarc (16:58). No se cargó imagen del banner: la librería de medios del locale es-CL está vacía y no se subieron archivos; el atributo imagen/video se cubrió con el video. La fila no nombra qué componente ni qué valores configurar: se eligieron valores de prueba. Ejecutado manualmente en BM (HU de BM).

**Evidencia**

![Paso 1 — atributos](<B2C-29 BM Evidencias/TC-B2C29-BM-001-p01-atributos.png>)

![Paso 2 — guardado](<B2C-29 BM Evidencias/TC-B2C29-BM-001-p02-guardado.png>)

![Paso 3 — tras recargar](<B2C-29 BM Evidencias/TC-B2C29-BM-001-p03-tras-recargar.png>)

![Paso 4 — cta comportamiento](<B2C-29 BM Evidencias/TC-B2C29-BM-001-p04-cta-comportamiento.png>)

![Paso 5 — banner video link](<B2C-29 BM Evidencias/TC-B2C29-BM-001-p05-banner-video-link.png>)

![Paso 6 — componente eliminado](<B2C-29 BM Evidencias/TC-B2C29-BM-001-p06-componente-eliminado.png>)

---

### TC-B2C29-BM-002 - Definir el orden de visualizacion de los componentes del Home en Page Designer

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-16 |
| Form factor | bm |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: BM Admin
- Required data state: Home con al menos 2 componentes configurados

**Data utilizada**

Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl; contraseña no se transcribe)

Storefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

**Pasos ejecutados**

1. Ingresar a Business Manager > Page Designer > Home.
2. Reordenar (drag and drop o configuracion de orden) al menos 2 componentes.
3. Publicar el cambio.
4. Navegar al Home en el storefront.

**Resultado esperado**

Los componentes se muestran en el storefront respetando el nuevo orden configurado.

**Resultado obtenido**

En Page Designer > Home se movió el componente de prueba "Carrusel de productos" desde el final de Main Content a antes de "Accordion Info" (Términos y condiciones). Tras invalidar la caché de página de Unimarc, el Home del storefront (Desktop 1440x900) muestra el nuevo orden: "Especial Bebidas", "Contrata la membresía", "QA B2C-29 BM-003", "TÉRMINOS Y CONDICIONES UNIMARC". Antes del cambio el componente de prueba quedaba debajo de los Términos.

**Observación**

Se reordenó el componente de prueba creado en BM-001 respecto de "Accordion Info" para no alterar el orden real del Home; al terminar se eliminó. El cambio solo llega al storefront tras invalidar "Entire Page Cache for Site" (autorizado por el usuario); la URL "/" sigue servida por la CDN varios minutos más, se verificó con "/?qa=…". Ejecutado manualmente en BM (HU de BM).

**Evidencia**

![Paso 1 — orden antes](<B2C-29 BM Evidencias/TC-B2C29-BM-002-p01-orden-antes.png>)

![Paso 2 — reordenado](<B2C-29 BM Evidencias/TC-B2C29-BM-002-p02-reordenado.png>)

![Paso 3 — cache invalidada](<B2C-29 BM Evidencias/TC-B2C29-BM-002-p03-cache-invalidada.png>)

![Paso 4 — storefront nuevo orden](<B2C-29 BM Evidencias/TC-B2C29-BM-002-p04-storefront-nuevo-orden.png>)

![Paso 5 — storefront terminos debajo](<B2C-29 BM Evidencias/TC-B2C29-BM-002-p05-storefront-terminos-debajo.png>)

---

### TC-B2C29-BM-003 - Actualizacion automatica del contenido del Home en App sin reiniciar la aplicacion

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-16 |
| Form factor | bm |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Required data state: Home abierto en la app antes del cambio

**Data utilizada**

Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl; contraseña no se transcribe)

App Unimarc QA (cl.smu.unimarcapp.sfcc.qa) build v1.0.1, Android emulador Pixel 4 API 33, invitado

**Pasos ejecutados**

1. Tener el Home abierto en la app.
2. En otra sesion, publicar un cambio de contenido en Page Designer.
3. Sin reiniciar la app, navegar de vuelta al Home o esperar la actualizacion.

**Resultado esperado**

El contenido actualizado se visualiza sin necesidad de reiniciar la aplicacion.

**Resultado obtenido**

Con la app abierta en el Home (proceso 4106), el componente de prueba se ve como "QA B2C-29 BM-001", debajo de "Términos y condiciones". A las 16:36 se publicó en Page Designer el cambio de título a "QA B2C-29 BM-003" (y a las 16:38 el cambio de orden), y a las 16:48 se invalidó la caché de página. Sin reiniciar la app se navegó a otra pestaña y de vuelta al Home a las 16:36, 16:38, 16:47, 16:50 y 16:54: el Home siguió mostrando "QA B2C-29 BM-001" en la posición anterior. Como control, al cerrar y volver a abrir la app (16:55, proceso 6666) el Home muestra de inmediato "QA B2C-29 BM-003" en la nueva posición.

**Observación**

Esperado: el contenido actualizado en Page Designer se visualiza en el Home de la app sin reiniciarla. Obtenido: 6 minutos después de invalidar la caché, y con el storefront ya mostrando el cambio, la app sin reiniciar sigue con el contenido anterior; solo al reiniciarla aparece el cambio. Paso 3. Bug: B2C-1500. Se probó solo Android (emulador Pixel 4 API 33, build v1.0.1); iOS no se ejecutó. Ejecutado manualmente (BM + app).

**Evidencia**

![Paso 1 — home app antes](<B2C-29 BM Evidencias/TC-B2C29-BM-003-p01-home-app-antes.png>)

![Paso 2 — bm cambio publicado](<B2C-29 BM Evidencias/TC-B2C29-BM-003-p02-bm-cambio-publicado.png>)

![Sin reiniciar la app, tras volver al Home: sigue "BM-001" (error)](<B2C-29 BM Evidencias/TC-B2C29-BM-003-p03-home-app-despues.png>)

![16:54, 6 min después de invalidar la caché: la app sin reiniciar sigue sin el cambio (error)](<B2C-29 BM Evidencias/TC-B2C29-BM-003-p05-app-sin-reiniciar-1655.png>)

![Paso 6 — control tras reiniciar](<B2C-29 BM Evidencias/TC-B2C29-BM-003-p06-control-tras-reiniciar.png>)

---

### TC-B2C29-BM-004 - Desactivacion automatica de un componente al cumplirse la fecha fin

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | bm |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: BM Admin (config) / Guest (verificacion)
- Viewport: Desktop 1440x900
- Required data state: componente configurado con fecha de fin de vigencia

**Data utilizada**

{BASE_URL} https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{FECHA_FIN_VIGENCIA} 2026-12-12 00:00:00

**Pasos ejecutados**

1. Configurar un componente con fecha de fin de vigencia.
2. Esperar (o simular) que se cumpla la fecha fin.
3. Navegar al Home.

**Resultado esperado**

El componente se desactiva automaticamente al cumplirse la fecha fin; durante el periodo de inactividad no se muestra en el Home.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: {FECHA_FIN_VIGENCIA} = 2026-12-12 00:00:00 es una fecha futura que no se alcanza durante la corrida, y la fila no declara qué componente configurar. Acción: declarar un componente de prueba y una {FECHA_FIN_VIGENCIA} alcanzable durante la ejecución (minutos después del inicio), o una ya cumplida.

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
  "suite": "B2C-29 BM",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP1/B2C-29 BM Test Cases.xlsx",
  "title": "B2C-29 BM - Home administrable desde Page Designer - Evidencias QA",
  "updated_at": "2026-11-16"
 },
 "history": {
  "2026-11-16": [
   "TC-B2C29-BM-001",
   "TC-B2C29-BM-002",
   "TC-B2C29-BM-003",
   "TC-B2C29-BM-004"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-11-16",
   "expected": "El componente queda configurado con los atributos definidos (imagen/video, texto, link, productos, CTA, comportamiento); los cambios se guardan correctamente.",
   "form_factor": "bm",
   "id": "TC-B2C29-BM-001",
   "name": "Configurar atributos de un componente del Home desde Page Designer",
   "observation": "Se usó un componente de prueba nuevo para no alterar los componentes reales del Home; al terminar la corrida se eliminó y se invalidó la caché de página de Unimarc (16:58). No se cargó imagen del banner: la librería de medios del locale es-CL está vacía y no se subieron archivos; el atributo imagen/video se cubrió con el video. La fila no nombra qué componente ni qué valores configurar: se eligieron valores de prueba. Ejecutado manualmente en BM (HU de BM).",
   "observed": "En Page Designer > Home se agregó a Main Content un componente \"Carrusel de productos\" de prueba y se configuraron sus atributos: video del banner (/images/unimarc-home/ot-vid.mp4), texto (título \"QA B2C-29 BM-001\", subtítulo \"Componente de prueba QA\", título y etiqueta del banner), link (enlace del banner a /category/carnes), productos asociados (modo collection, categoría \"carnes\", máximo 8), botón CTA (\"Ver todo QA\" a /category/carnes) y comportamiento (desplazamiento automático cada 4 s, indicadores). Apply muestra \"The component was successfully saved for the Spanish (Chile) locale\"; tras recargar Page Designer todos los valores siguen guardados y el componente se renderiza con su video, textos, CTA y productos de Carnes.",
   "preconditions": "- User type: BM Admin\n- Ubicacion: Business Manager > Page Designer > Home",
   "screenshots": [
    {
     "caption": "Paso 1 — atributos",
     "file": "TC-B2C29-BM-001-p01-atributos.png"
    },
    {
     "caption": "Paso 2 — guardado",
     "file": "TC-B2C29-BM-001-p02-guardado.png"
    },
    {
     "caption": "Paso 3 — tras recargar",
     "file": "TC-B2C29-BM-001-p03-tras-recargar.png"
    },
    {
     "caption": "Paso 4 — cta comportamiento",
     "file": "TC-B2C29-BM-001-p04-cta-comportamiento.png"
    },
    {
     "caption": "Paso 5 — banner video link",
     "file": "TC-B2C29-BM-001-p05-banner-video-link.png"
    },
    {
     "caption": "Paso 6 — componente eliminado",
     "file": "TC-B2C29-BM-001-p06-componente-eliminado.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Ingresar a Business Manager con la cuenta {BM_ADMIN_USER}.\n2. Navegar a Page Designer > Home.\n3. Seleccionar un componente y configurar imagen/video, texto, link, productos asociados, boton CTA y comportamiento.\n4. Guardar y publicar.",
   "test_data": "Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl; contraseña no se transcribe)\nPage Designer > Unimarc Home (home-page), locale Spanish (Chile)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-16",
   "expected": "Los componentes se muestran en el storefront respetando el nuevo orden configurado.",
   "form_factor": "bm",
   "id": "TC-B2C29-BM-002",
   "name": "Definir el orden de visualizacion de los componentes del Home en Page Designer",
   "observation": "Se reordenó el componente de prueba creado en BM-001 respecto de \"Accordion Info\" para no alterar el orden real del Home; al terminar se eliminó. El cambio solo llega al storefront tras invalidar \"Entire Page Cache for Site\" (autorizado por el usuario); la URL \"/\" sigue servida por la CDN varios minutos más, se verificó con \"/?qa=…\". Ejecutado manualmente en BM (HU de BM).",
   "observed": "En Page Designer > Home se movió el componente de prueba \"Carrusel de productos\" desde el final de Main Content a antes de \"Accordion Info\" (Términos y condiciones). Tras invalidar la caché de página de Unimarc, el Home del storefront (Desktop 1440x900) muestra el nuevo orden: \"Especial Bebidas\", \"Contrata la membresía\", \"QA B2C-29 BM-003\", \"TÉRMINOS Y CONDICIONES UNIMARC\". Antes del cambio el componente de prueba quedaba debajo de los Términos.",
   "preconditions": "- User type: BM Admin\n- Required data state: Home con al menos 2 componentes configurados",
   "screenshots": [
    {
     "caption": "Paso 1 — orden antes",
     "file": "TC-B2C29-BM-002-p01-orden-antes.png"
    },
    {
     "caption": "Paso 2 — reordenado",
     "file": "TC-B2C29-BM-002-p02-reordenado.png"
    },
    {
     "caption": "Paso 3 — cache invalidada",
     "file": "TC-B2C29-BM-002-p03-cache-invalidada.png"
    },
    {
     "caption": "Paso 4 — storefront nuevo orden",
     "file": "TC-B2C29-BM-002-p04-storefront-nuevo-orden.png"
    },
    {
     "caption": "Paso 5 — storefront terminos debajo",
     "file": "TC-B2C29-BM-002-p05-storefront-terminos-debajo.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Ingresar a Business Manager > Page Designer > Home.\n2. Reordenar (drag and drop o configuracion de orden) al menos 2 componentes.\n3. Publicar el cambio.\n4. Navegar al Home en el storefront.",
   "test_data": "Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl; contraseña no se transcribe)\nStorefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-16",
   "expected": "El contenido actualizado se visualiza sin necesidad de reiniciar la aplicacion.",
   "form_factor": "bm",
   "id": "TC-B2C29-BM-003",
   "name": "Actualizacion automatica del contenido del Home en App sin reiniciar la aplicacion",
   "observation": "Esperado: el contenido actualizado en Page Designer se visualiza en el Home de la app sin reiniciarla. Obtenido: 6 minutos después de invalidar la caché, y con el storefront ya mostrando el cambio, la app sin reiniciar sigue con el contenido anterior; solo al reiniciarla aparece el cambio. Paso 3. Bug: B2C-1500. Se probó solo Android (emulador Pixel 4 API 33, build v1.0.1); iOS no se ejecutó. Ejecutado manualmente (BM + app).",
   "observed": "Con la app abierta en el Home (proceso 4106), el componente de prueba se ve como \"QA B2C-29 BM-001\", debajo de \"Términos y condiciones\". A las 16:36 se publicó en Page Designer el cambio de título a \"QA B2C-29 BM-003\" (y a las 16:38 el cambio de orden), y a las 16:48 se invalidó la caché de página. Sin reiniciar la app se navegó a otra pestaña y de vuelta al Home a las 16:36, 16:38, 16:47, 16:50 y 16:54: el Home siguió mostrando \"QA B2C-29 BM-001\" en la posición anterior. Como control, al cerrar y volver a abrir la app (16:55, proceso 6666) el Home muestra de inmediato \"QA B2C-29 BM-003\" en la nueva posición.",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Required data state: Home abierto en la app antes del cambio",
   "screenshots": [
    {
     "caption": "Paso 1 — home app antes",
     "file": "TC-B2C29-BM-003-p01-home-app-antes.png"
    },
    {
     "caption": "Paso 2 — bm cambio publicado",
     "file": "TC-B2C29-BM-003-p02-bm-cambio-publicado.png"
    },
    {
     "caption": "Sin reiniciar la app, tras volver al Home: sigue \"BM-001\" (error)",
     "file": "TC-B2C29-BM-003-p03-home-app-despues.png"
    },
    {
     "caption": "16:54, 6 min después de invalidar la caché: la app sin reiniciar sigue sin el cambio (error)",
     "file": "TC-B2C29-BM-003-p05-app-sin-reiniciar-1655.png"
    },
    {
     "caption": "Paso 6 — control tras reiniciar",
     "file": "TC-B2C29-BM-003-p06-control-tras-reiniciar.png"
    }
   ],
   "status": "Rechazado",
   "steps": "1. Tener el Home abierto en la app.\n2. En otra sesion, publicar un cambio de contenido en Page Designer.\n3. Sin reiniciar la app, navegar de vuelta al Home o esperar la actualizacion.",
   "test_data": "Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl; contraseña no se transcribe)\nApp Unimarc QA (cl.smu.unimarcapp.sfcc.qa) build v1.0.1, Android emulador Pixel 4 API 33, invitado",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-16",
   "expected": "El componente se desactiva automaticamente al cumplirse la fecha fin; durante el periodo de inactividad no se muestra en el Home.",
   "form_factor": "bm",
   "id": "TC-B2C29-BM-004",
   "name": "Desactivacion automatica de un componente al cumplirse la fecha fin",
   "observation": "Causa: {FECHA_FIN_VIGENCIA} = 2026-12-12 00:00:00 es una fecha futura que no se alcanza durante la corrida, y la fila no declara qué componente configurar. Acción: declarar un componente de prueba y una {FECHA_FIN_VIGENCIA} alcanzable durante la ejecución (minutos después del inicio), o una ya cumplida.",
   "observed": "No ejecutado.",
   "preconditions": "- User type: BM Admin (config) / Guest (verificacion)\n- Viewport: Desktop 1440x900\n- Required data state: componente configurado con fecha de fin de vigencia",
   "status": "Bloqueado Data",
   "steps": "1. Configurar un componente con fecha de fin de vigencia.\n2. Esperar (o simular) que se cumpla la fecha fin.\n3. Navegar al Home.",
   "test_data": "{BASE_URL} https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{FECHA_FIN_VIGENCIA} 2026-12-12 00:00:00",
   "viewport": "1440x900"
  }
 ]
}
-->
