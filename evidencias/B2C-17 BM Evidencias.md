# B2C-17 BM - Accesos directos del Header (content asset header-shortcut-bar) - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-17 BM |
| Última actualización | 2026-11-16 |
| Ejecutado por | Victor Chirinos |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | webkit |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP1/B2C-17 BM Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 3 |
| **Total** | **3** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-16 | 3 | TC-B2C17-BM-001, TC-B2C17-BM-002, TC-B2C17-BM-003 |

## Detalle por caso de prueba

### TC-B2C17-BM-001 - Accesos directos configurados en BM se muestran y redirigen

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-16 |
| Form factor | bm |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: BM Admin (config) / Guest (verificacion)
- Required data state: content asset 'header-shortcut-bar' configurado con accesos (ej. Suscribete a UPR, Ofertas, Marketplace, Locales)

**Data utilizada**

Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl; contraseña no se transcribe)

Storefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

**Pasos ejecutados**

1. En Business Manager (Merchant Tools > Content > Content Assets), configurar el content asset 'header-shortcut-bar' con accesos directos.
2. Publicar el cambio (Apply).
3. Acceder al Header en https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ como invitado, Desktop 1440x900.
4. Hacer clic en uno de los accesos directos.
5. Verificar la redireccion.

**Resultado esperado**

El Header muestra los accesos directos configurados; al hacer clic en un acceso, el usuario es redirigido a la seccion correspondiente.

**Resultado obtenido**

El asset tiene configurados tres accesos: Ofertas (/ofertas), Marketplace (/marketplace) y Locales y horarios (/locales). Se aplicó en BM. El Header Desktop los muestra en ese orden, a la izquierda del botón 'Suscríbete a UNIMARC'. Al hacer clic en 'Locales y horarios' el usuario llega a /account/tiendas-y-horarios ('Tiendas y horarios').

**Observación**

Los accesos Ofertas y Marketplace navegan a la URL configurada (/ofertas, /marketplace), pero esas páginas no existen en DEV y muestran 'No encontramos esta página' (404). Ya estaba registrado como limitación del ambiente. Ejecutado manualmente en BM a pedido del usuario.

**Evidencia**

![Paso 1 — asset header shortcut bar con 3 accesos](<B2C-17 BM Evidencias/TC-B2C17-BM-001-p01-asset-header-shortcut-bar-con-3-accesos.png>)

![Paso 2 — cambio aplicado en BM](<B2C-17 BM Evidencias/TC-B2C17-BM-001-p02-cambio-aplicado-en-BM.png>)

![Paso 3 — header desktop con accesos directos](<B2C-17 BM Evidencias/TC-B2C17-BM-001-p03-header-desktop-con-accesos-directos.png>)

![Paso 4 — redireccion a locales y horarios](<B2C-17 BM Evidencias/TC-B2C17-BM-001-p04-redireccion-a-locales-y-horarios.png>)

![Ofertas → /ofertas: la página no existe en DEV (limitación del ambiente)](<B2C-17 BM Evidencias/TC-B2C17-BM-001-p05-ofertas-destino-404-en-DEV.png>)

---

### TC-B2C17-BM-002 - Actualizacion de accesos directos desde BM se refleja sin deploy

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-16 |
| Form factor | bm |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: BM Admin (config) / Guest (verificacion)
- Required data state: content asset 'header-shortcut-bar' previamente configurado

**Data utilizada**

Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl; contraseña no se transcribe)

Storefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

**Pasos ejecutados**

1. En Business Manager, modificar los accesos directos del content asset 'header-shortcut-bar': de Ofertas / Marketplace / Locales y horarios a 'Tiendas QA B2C-17' (/locales) / Ofertas (/ofertas).
2. Publicar el cambio (Apply).
3. Acceder (o refrescar) al Header en el storefront, sin deploy.
4. Verificar los accesos mostrados.

**Resultado esperado**

El Header refleja los nuevos accesos directos configurados, sin necesidad de un deploy.

**Resultado obtenido**

Sin ningún deploy, el Header muestra 'Tiendas QA B2C-17 / Ofertas' en lugar de los tres accesos anteriores (verificado en /category/carnes, /account/tiendas-y-horarios y en el Home con query string).

**Observación**

El cambio llegó al storefront recién después de invalidar 'Entire Page Cache for Site' de Unimarc en BM (con autorización del usuario; no es un deploy). La ruta '/' exacta del Home siguió sirviéndose desde la caché del CDN con los accesos anteriores durante más de 25 min. Al terminar se restauró el valor original del asset.

**Evidencia**

![Paso 1 — accesos modificados en BM](<B2C-17 BM Evidencias/TC-B2C17-BM-002-p01-accesos-modificados-en-BM.png>)

![Paso 2 — cambio aplicado en BM](<B2C-17 BM Evidencias/TC-B2C17-BM-002-p02-cambio-aplicado-en-BM.png>)

![Paso 3 — header refleja nuevos accesos sin deploy](<B2C-17 BM Evidencias/TC-B2C17-BM-002-p03-header-refleja-nuevos-accesos-sin-deploy.png>)

![Home '/' todavía servido desde la caché del CDN con los accesos anteriores](<B2C-17 BM Evidencias/TC-B2C17-BM-002-p04-home-raiz-aun-servida-desde-cache-cdn.png>)

---

### TC-B2C17-BM-003 - Sin accesos directos configurados en BM, el Header no muestra ninguno y el boton Membresia mantiene su posicion

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-16 |
| Form factor | bm |
| Viewport | 1440x900 / 390x844 |
| Navegador | chromium / webkit |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900 y Mobile 390x844
- Required data state: content asset 'header-shortcut-bar' sin configurar / vacio

**Data utilizada**

Storefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

**Pasos ejecutados**

1. Asegurar que el content asset 'header-shortcut-bar' esta vacio o sin configurar (Body vaciado en BM y aplicado).
2. Acceder al Header en Desktop 1440x900.
3. Verificar la ausencia de accesos directos y la posicion del boton Membresia.
4. Repetir la verificacion en Mobile 390x844.

**Resultado esperado**

El Header no muestra ningun acceso directo; el boton 'Suscribete a Unimarc' se mantiene en la misma posicion en Desktop y en Mobile.

**Resultado obtenido**

Con el asset vacío, el Header no muestra accesos directos en ninguno de los dos viewports. Desktop: el botón 'Suscríbete a UNIMARC' sigue exactamente en x=1129, y=76 (216x48) y el header mide 132 px, igual que con accesos. Mobile: el botón sigue primero a la izquierda de la fila inferior del header.

**Observación**

En Mobile el botón se corre de (16, 129) a (20, 120) y el header pasa de 176 a 158 px porque la fila de accesos queda más baja; sigue en el mismo lugar del layout. La fila no declara los tokens de BM: se usó la cuenta administradora de BM-001/002 solo para vaciar el asset, por decisión del usuario. Se restauró el valor original al terminar.

**Evidencia**

![Referencia Desktop con accesos configurados](<B2C-17 BM Evidencias/TC-B2C17-BM-003-p00-referencia-desktop-con-accesos.png>)

![Referencia Mobile con accesos configurados](<B2C-17 BM Evidencias/TC-B2C17-BM-003-p00-referencia-mobile-con-accesos.png>)

![Paso 1 — asset vacio en BM](<B2C-17 BM Evidencias/TC-B2C17-BM-003-p01-asset-vacio-en-BM.png>)

![Paso 2 — header desktop sin accesos](<B2C-17 BM Evidencias/TC-B2C17-BM-003-p02-header-desktop-sin-accesos.png>)

![Paso 4 — header mobile sin accesos](<B2C-17 BM Evidencias/TC-B2C17-BM-003-p04-header-mobile-sin-accesos.png>)

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
  "suite": "B2C-17 BM",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP1/B2C-17 BM Test Cases.xlsx",
  "title": "B2C-17 BM - Accesos directos del Header (content asset header-shortcut-bar) - Evidencias QA",
  "updated_at": "2026-11-16"
 },
 "history": {
  "2026-11-16": [
   "TC-B2C17-BM-001",
   "TC-B2C17-BM-002",
   "TC-B2C17-BM-003"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-11-16",
   "expected": "El Header muestra los accesos directos configurados; al hacer clic en un acceso, el usuario es redirigido a la seccion correspondiente.",
   "form_factor": "bm",
   "id": "TC-B2C17-BM-001",
   "name": "Accesos directos configurados en BM se muestran y redirigen",
   "observation": "Los accesos Ofertas y Marketplace navegan a la URL configurada (/ofertas, /marketplace), pero esas páginas no existen en DEV y muestran 'No encontramos esta página' (404). Ya estaba registrado como limitación del ambiente. Ejecutado manualmente en BM a pedido del usuario.",
   "observed": "El asset tiene configurados tres accesos: Ofertas (/ofertas), Marketplace (/marketplace) y Locales y horarios (/locales). Se aplicó en BM. El Header Desktop los muestra en ese orden, a la izquierda del botón 'Suscríbete a UNIMARC'. Al hacer clic en 'Locales y horarios' el usuario llega a /account/tiendas-y-horarios ('Tiendas y horarios').",
   "preconditions": "- User type: BM Admin (config) / Guest (verificacion)\n- Required data state: content asset 'header-shortcut-bar' configurado con accesos (ej. Suscribete a UPR, Ofertas, Marketplace, Locales)",
   "screenshots": [
    {
     "caption": "Paso 1 — asset header shortcut bar con 3 accesos",
     "file": "TC-B2C17-BM-001-p01-asset-header-shortcut-bar-con-3-accesos.png"
    },
    {
     "caption": "Paso 2 — cambio aplicado en BM",
     "file": "TC-B2C17-BM-001-p02-cambio-aplicado-en-BM.png"
    },
    {
     "caption": "Paso 3 — header desktop con accesos directos",
     "file": "TC-B2C17-BM-001-p03-header-desktop-con-accesos-directos.png"
    },
    {
     "caption": "Paso 4 — redireccion a locales y horarios",
     "file": "TC-B2C17-BM-001-p04-redireccion-a-locales-y-horarios.png"
    },
    {
     "caption": "Ofertas → /ofertas: la página no existe en DEV (limitación del ambiente)",
     "file": "TC-B2C17-BM-001-p05-ofertas-destino-404-en-DEV.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. En Business Manager (Merchant Tools > Content > Content Assets), configurar el content asset 'header-shortcut-bar' con accesos directos.\n2. Publicar el cambio (Apply).\n3. Acceder al Header en https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ como invitado, Desktop 1440x900.\n4. Hacer clic en uno de los accesos directos.\n5. Verificar la redireccion.",
   "test_data": "Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl; contraseña no se transcribe)\nStorefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-16",
   "expected": "El Header refleja los nuevos accesos directos configurados, sin necesidad de un deploy.",
   "form_factor": "bm",
   "id": "TC-B2C17-BM-002",
   "name": "Actualizacion de accesos directos desde BM se refleja sin deploy",
   "observation": "El cambio llegó al storefront recién después de invalidar 'Entire Page Cache for Site' de Unimarc en BM (con autorización del usuario; no es un deploy). La ruta '/' exacta del Home siguió sirviéndose desde la caché del CDN con los accesos anteriores durante más de 25 min. Al terminar se restauró el valor original del asset.",
   "observed": "Sin ningún deploy, el Header muestra 'Tiendas QA B2C-17 / Ofertas' en lugar de los tres accesos anteriores (verificado en /category/carnes, /account/tiendas-y-horarios y en el Home con query string).",
   "preconditions": "- User type: BM Admin (config) / Guest (verificacion)\n- Required data state: content asset 'header-shortcut-bar' previamente configurado",
   "screenshots": [
    {
     "caption": "Paso 1 — accesos modificados en BM",
     "file": "TC-B2C17-BM-002-p01-accesos-modificados-en-BM.png"
    },
    {
     "caption": "Paso 2 — cambio aplicado en BM",
     "file": "TC-B2C17-BM-002-p02-cambio-aplicado-en-BM.png"
    },
    {
     "caption": "Paso 3 — header refleja nuevos accesos sin deploy",
     "file": "TC-B2C17-BM-002-p03-header-refleja-nuevos-accesos-sin-deploy.png"
    },
    {
     "caption": "Home '/' todavía servido desde la caché del CDN con los accesos anteriores",
     "file": "TC-B2C17-BM-002-p04-home-raiz-aun-servida-desde-cache-cdn.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. En Business Manager, modificar los accesos directos del content asset 'header-shortcut-bar': de Ofertas / Marketplace / Locales y horarios a 'Tiendas QA B2C-17' (/locales) / Ofertas (/ofertas).\n2. Publicar el cambio (Apply).\n3. Acceder (o refrescar) al Header en el storefront, sin deploy.\n4. Verificar los accesos mostrados.",
   "test_data": "Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl; contraseña no se transcribe)\nStorefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium / webkit",
   "executed_at": "2026-11-16",
   "expected": "El Header no muestra ningun acceso directo; el boton 'Suscribete a Unimarc' se mantiene en la misma posicion en Desktop y en Mobile.",
   "form_factor": "bm",
   "id": "TC-B2C17-BM-003",
   "name": "Sin accesos directos configurados en BM, el Header no muestra ninguno y el boton Membresia mantiene su posicion",
   "observation": "En Mobile el botón se corre de (16, 129) a (20, 120) y el header pasa de 176 a 158 px porque la fila de accesos queda más baja; sigue en el mismo lugar del layout. La fila no declara los tokens de BM: se usó la cuenta administradora de BM-001/002 solo para vaciar el asset, por decisión del usuario. Se restauró el valor original al terminar.",
   "observed": "Con el asset vacío, el Header no muestra accesos directos en ninguno de los dos viewports. Desktop: el botón 'Suscríbete a UNIMARC' sigue exactamente en x=1129, y=76 (216x48) y el header mide 132 px, igual que con accesos. Mobile: el botón sigue primero a la izquierda de la fila inferior del header.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900 y Mobile 390x844\n- Required data state: content asset 'header-shortcut-bar' sin configurar / vacio",
   "screenshots": [
    {
     "caption": "Referencia Desktop con accesos configurados",
     "file": "TC-B2C17-BM-003-p00-referencia-desktop-con-accesos.png"
    },
    {
     "caption": "Referencia Mobile con accesos configurados",
     "file": "TC-B2C17-BM-003-p00-referencia-mobile-con-accesos.png"
    },
    {
     "caption": "Paso 1 — asset vacio en BM",
     "file": "TC-B2C17-BM-003-p01-asset-vacio-en-BM.png"
    },
    {
     "caption": "Paso 2 — header desktop sin accesos",
     "file": "TC-B2C17-BM-003-p02-header-desktop-sin-accesos.png"
    },
    {
     "caption": "Paso 4 — header mobile sin accesos",
     "file": "TC-B2C17-BM-003-p04-header-mobile-sin-accesos.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Asegurar que el content asset 'header-shortcut-bar' esta vacio o sin configurar (Body vaciado en BM y aplicado).\n2. Acceder al Header en Desktop 1440x900.\n3. Verificar la ausencia de accesos directos y la posicion del boton Membresia.\n4. Repetir la verificacion en Mobile 390x844.",
   "test_data": "Storefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
   "viewport": "1440x900 / 390x844"
  }
 ]
}
-->
