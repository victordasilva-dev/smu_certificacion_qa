# B2C-55 BM - My Usuals en Page Designer - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-55 BM |
| Última actualización | 2026-11-12 |
| Ejecutado por | Victor Chirinos |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP1/B2C-55 BM Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 3 |
| Bloqueado Data | 1 |
| **Total** | **4** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-12 | 4 | TC-B2C55-BM-001, TC-B2C55-BM-002, TC-B2C55-BM-003, TC-B2C55-BM-004 |

## Detalle por caso de prueba

### TC-B2C55-BM-001 - [BM] [Administrador] Configurar el componente My Usuals en una posición de la Home con título

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-12 |
| Form factor | bm |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Administrador BM
- Ubicacion: Business Manager > Page Designer
- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes

**Data utilizada**

Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl; contraseña no se transcribe)

Storefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

Cuenta de comprador: vhchirinos+comprador@avatar-global.com (login por correo + código OTP)

Título: Tus productos mas comprados

**Pasos ejecutados**

1. Ingresar a https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site con la cuenta e_vgaldino@smu.cl.
2. Ir a Merchant Tools > Content > Page Designer y abrir la página Home.
3. Agregar el componente My Usuals en una posición de la página, con el título Tus productos mas comprados, y publicar.
4. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ con viewport Desktop 1440x900 e iniciar sesión con la cuenta vhchirinos+comprador@avatar-global.com.
5. Ubicar el carrusel My Usuals en la Home.

**Resultado esperado**

El carrusel My Usuals se muestra en la posición configurada con el título Tus productos mas comprados.

**Resultado obtenido**

Se agregó un componente Mis Usuales (My Usuals) nuevo directamente en Main Content, debajo de Home_Banner, con el título 'Tus productos mas comprados' (locale Spanish (Chile)). En el storefront, con la sesión de vhchirinos+comprador@avatar-global.com, el carrusel aparece en esa posición (entre el banner y 'Los más vendidos') con ese título.

**Observación**

La Home ya tenía un My Usuals con ese título (dentro de un Container): por decisión del usuario se agregó uno nuevo y se eliminó al terminar la HU; el original no se tocó.

**Evidencia**

![Paso 1 — business manager con sesion](<B2C-55 BM Evidencias/TC-B2C55-BM-001-p01-business-manager-con-sesion.png>)

![Paso 2 — page designer lista de paginas](<B2C-55 BM Evidencias/TC-B2C55-BM-001-p02-page-designer-lista-de-paginas.png>)

![Paso 3 — my usuals nuevo aplicado con titulo](<B2C-55 BM Evidencias/TC-B2C55-BM-001-p03-my-usuals-nuevo-aplicado-con-titulo.png>)

![Paso 4 — home con sesion iniciada](<B2C-55 BM Evidencias/TC-B2C55-BM-001-p04-home-con-sesion-iniciada.png>)

![Paso 5 — carrusel my usuals en la posicion configurada](<B2C-55 BM Evidencias/TC-B2C55-BM-001-p05-carrusel-my-usuals-en-la-posicion-configurada.png>)

---

### TC-B2C55-BM-002 - [BM] [Administrador] El título de 30 caracteres del componente My Usuals se muestra completo

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-12 |
| Form factor | bm |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Administrador BM
- Ubicacion: Business Manager > Page Designer
- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes

**Data utilizada**

Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl)

Storefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

Cuenta de comprador: vhchirinos+comprador@avatar-global.com

Título: Tus productos mucho mas comprados (33 caracteres)

**Pasos ejecutados**

1. Ingresar a https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site con la cuenta e_vgaldino@smu.cl.
2. Ir a Merchant Tools > Content > Page Designer y abrir la página Home.
3. Editar el componente My Usuals, ingresar el título Tus productos mucho mas comprados (30 caracteres) y publicar.
4. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ con viewport Desktop 1440x900 e iniciar sesión con la cuenta vhchirinos+comprador@avatar-global.com.

**Resultado esperado**

El carrusel muestra el título Tus productos mucho mas comprados completo, sin cortes.

**Resultado obtenido**

El título 'Tus productos mucho mas comprados' se muestra completo en una línea, sin cortes ni puntos suspensivos (441 px de texto en un contenedor de 1265 px).

**Observación**

Ojo: {MY_USUALS_TITULO_30} tiene 33 caracteres, no 30; se ejecutó con el valor declarado. El cambio no llegó al storefront en 28 min por la caché de página: se vio después de invalidar 'Entire Page Cache for Site' de Unimarc en BM (a pedido del usuario).

**Evidencia**

![Paso 3 — titulo editado y aplicado](<B2C-55 BM Evidencias/TC-B2C55-BM-002-p03-titulo-editado-y-aplicado.png>)

![Paso 4 — titulo completo en el carrusel](<B2C-55 BM Evidencias/TC-B2C55-BM-002-p04-titulo-completo-en-el-carrusel.png>)

---

### TC-B2C55-BM-003 - [BM] [Administrador] Con targeting por segmento el componente My Usuals solo se muestra al segmento

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-12 |
| Form factor | bm |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Administrador BM
- Ubicacion: Business Manager > Page Designer
- Las cuentas vhchirinos+comprador@avatar-global.com (en el segmento) y vhchirinos+frecuentes_outsegment@avatar-global.com (fuera del segmento) tienen más de 5 productos frecuentes

**Data utilizada**

Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl)

Storefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

Cuenta en el segmento: vhchirinos+comprador@avatar-global.com

Cuenta fuera del segmento: vhchirinos+frecuentes_outsegment@avatar-global.com

Segmento: Clientes MyUsuals

**Pasos ejecutados**

1. Ingresar a https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site con la cuenta e_vgaldino@smu.cl.
2. Ir a Merchant Tools > Content > Page Designer y abrir la página Home.
3. Configurar en el componente My Usuals el targeting por el segmento Clientes MyUsuals y publicar.
4. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ con viewport Desktop 1440x900 e iniciar sesión con la cuenta vhchirinos+comprador@avatar-global.com.
5. Cerrar sesión e iniciar sesión con la cuenta vhchirinos+frecuentes_outsegment@avatar-global.com.

**Resultado esperado**

La cuenta del segmento ve el carrusel My Usuals; la cuenta fuera del segmento no lo ve.

**Resultado obtenido**

Con el targeting por 'Clientes MyUsuals', la cuenta del segmento (vhchirinos+comprador@avatar-global.com) ve el carrusel. La cuenta fuera del segmento no lo ve, pero tampoco ve el My Usuals original (sin targeting): tiene exactamente 5 productos frecuentes y el componente solo se muestra con más de 5.

**Observación**

Causa: {COMPRADOR_FRECUENTES_FUERA_SEGMENTO_USER} tiene 5 productos frecuentes en /account/my-usuals y la precondición pide más de 5; así su ausencia del carrusel no prueba el targeting. La mitad del segmento sí se verificó (la cuenta del segmento ve el carrusel). Acción: dejar en esa cuenta más de 5 productos frecuentes (o declarar otra cuenta fuera del segmento que los tenga) y re-ejecutar.

**Evidencia**

![Paso 3 — targeting por segmento configurado](<B2C-55 BM Evidencias/TC-B2C55-BM-003-p03-targeting-por-segmento-configurado.png>)

![Paso 4 — cuenta del segmento ve el carrusel](<B2C-55 BM Evidencias/TC-B2C55-BM-003-p04-cuenta-del-segmento-ve-el-carrusel.png>)

![Paso 5 — cuenta fuera del segmento home sin my usuals](<B2C-55 BM Evidencias/TC-B2C55-BM-003-p05-cuenta-fuera-del-segmento-home-sin-my-usuals.png>)

![Paso 6 — cuenta fuera del segmento tiene solo 5 frecuentes](<B2C-55 BM Evidencias/TC-B2C55-BM-003-p06-cuenta-fuera-del-segmento-tiene-solo-5-frecuentes.png>)

---

### TC-B2C55-BM-004 - [BM] [Administrador] Con targeting por fecha el componente My Usuals solo se muestra dentro de la vigencia

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-12 |
| Form factor | bm |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Administrador BM
- Ubicacion: Business Manager > Page Designer
- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes

**Data utilizada**

Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl)

Storefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

Cuenta de comprador: vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. Ingresar a https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site con la cuenta e_vgaldino@smu.cl.
2. Ir a Merchant Tools > Content > Page Designer y abrir la página Home.
3. Configurar en el componente My Usuals una fecha de inicio futura y publicar.
4. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ con viewport Desktop 1440x900 e iniciar sesión con la cuenta vhchirinos+comprador@avatar-global.com.
5. Volver a Page Designer, cambiar la fecha de inicio a una fecha pasada y publicar.
6. Recargar la Home.

**Resultado esperado**

Con fecha de inicio futura el carrusel My Usuals no se muestra; con la vigencia activa se muestra.

**Resultado obtenido**

Con Display From 11/20/2026 (futura) el carrusel nuevo no aparece en la Home y el My Usuals original sí (control: la cuenta cumple la precondición). Con Display From 11/10/2026 (pasada) y recarga, el carrusel se muestra.

**Observación**

Cada cambio de fecha se reflejó tras invalidar la caché de página de Unimarc. Fechas de prueba: futura 11/20/2026 12:00 pm, pasada 11/10/2026 12:00 pm.

**Evidencia**

![Paso 3 — fecha de inicio futura configurada](<B2C-55 BM Evidencias/TC-B2C55-BM-004-p03-fecha-de-inicio-futura-configurada.png>)

![Paso 4 — con fecha futura el carrusel no se muestra](<B2C-55 BM Evidencias/TC-B2C55-BM-004-p04-con-fecha-futura-el-carrusel-no-se-muestra.png>)

![Paso 5 — fecha de inicio pasada configurada](<B2C-55 BM Evidencias/TC-B2C55-BM-004-p05-fecha-de-inicio-pasada-configurada.png>)

![Paso 6 — con vigencia activa el carrusel se muestra](<B2C-55 BM Evidencias/TC-B2C55-BM-004-p06-con-vigencia-activa-el-carrusel-se-muestra.png>)

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
  "suite": "B2C-55 BM",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP1/B2C-55 BM Test Cases.xlsx",
  "title": "B2C-55 BM - My Usuals en Page Designer - Evidencias QA",
  "updated_at": "2026-11-12"
 },
 "history": {
  "2026-11-12": [
   "TC-B2C55-BM-001",
   "TC-B2C55-BM-002",
   "TC-B2C55-BM-003",
   "TC-B2C55-BM-004"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-11-12",
   "expected": "El carrusel My Usuals se muestra en la posición configurada con el título Tus productos mas comprados.",
   "form_factor": "bm",
   "id": "TC-B2C55-BM-001",
   "name": "[BM] [Administrador] Configurar el componente My Usuals en una posición de la Home con título",
   "observation": "La Home ya tenía un My Usuals con ese título (dentro de un Container): por decisión del usuario se agregó uno nuevo y se eliminó al terminar la HU; el original no se tocó.",
   "observed": "Se agregó un componente Mis Usuales (My Usuals) nuevo directamente en Main Content, debajo de Home_Banner, con el título 'Tus productos mas comprados' (locale Spanish (Chile)). En el storefront, con la sesión de vhchirinos+comprador@avatar-global.com, el carrusel aparece en esa posición (entre el banner y 'Los más vendidos') con ese título.",
   "preconditions": "- User type: Administrador BM\n- Ubicacion: Business Manager > Page Designer\n- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes",
   "screenshots": [
    {
     "caption": "Paso 1 — business manager con sesion",
     "file": "TC-B2C55-BM-001-p01-business-manager-con-sesion.png"
    },
    {
     "caption": "Paso 2 — page designer lista de paginas",
     "file": "TC-B2C55-BM-001-p02-page-designer-lista-de-paginas.png"
    },
    {
     "caption": "Paso 3 — my usuals nuevo aplicado con titulo",
     "file": "TC-B2C55-BM-001-p03-my-usuals-nuevo-aplicado-con-titulo.png"
    },
    {
     "caption": "Paso 4 — home con sesion iniciada",
     "file": "TC-B2C55-BM-001-p04-home-con-sesion-iniciada.png"
    },
    {
     "caption": "Paso 5 — carrusel my usuals en la posicion configurada",
     "file": "TC-B2C55-BM-001-p05-carrusel-my-usuals-en-la-posicion-configurada.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Ingresar a https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site con la cuenta e_vgaldino@smu.cl.\n2. Ir a Merchant Tools > Content > Page Designer y abrir la página Home.\n3. Agregar el componente My Usuals en una posición de la página, con el título Tus productos mas comprados, y publicar.\n4. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ con viewport Desktop 1440x900 e iniciar sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n5. Ubicar el carrusel My Usuals en la Home.",
   "test_data": "Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl; contraseña no se transcribe)\nStorefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\nCuenta de comprador: vhchirinos+comprador@avatar-global.com (login por correo + código OTP)\nTítulo: Tus productos mas comprados",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-12",
   "expected": "El carrusel muestra el título Tus productos mucho mas comprados completo, sin cortes.",
   "form_factor": "bm",
   "id": "TC-B2C55-BM-002",
   "name": "[BM] [Administrador] El título de 30 caracteres del componente My Usuals se muestra completo",
   "observation": "Ojo: {MY_USUALS_TITULO_30} tiene 33 caracteres, no 30; se ejecutó con el valor declarado. El cambio no llegó al storefront en 28 min por la caché de página: se vio después de invalidar 'Entire Page Cache for Site' de Unimarc en BM (a pedido del usuario).",
   "observed": "El título 'Tus productos mucho mas comprados' se muestra completo en una línea, sin cortes ni puntos suspensivos (441 px de texto en un contenedor de 1265 px).",
   "preconditions": "- User type: Administrador BM\n- Ubicacion: Business Manager > Page Designer\n- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes",
   "screenshots": [
    {
     "caption": "Paso 3 — titulo editado y aplicado",
     "file": "TC-B2C55-BM-002-p03-titulo-editado-y-aplicado.png"
    },
    {
     "caption": "Paso 4 — titulo completo en el carrusel",
     "file": "TC-B2C55-BM-002-p04-titulo-completo-en-el-carrusel.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Ingresar a https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site con la cuenta e_vgaldino@smu.cl.\n2. Ir a Merchant Tools > Content > Page Designer y abrir la página Home.\n3. Editar el componente My Usuals, ingresar el título Tus productos mucho mas comprados (30 caracteres) y publicar.\n4. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ con viewport Desktop 1440x900 e iniciar sesión con la cuenta vhchirinos+comprador@avatar-global.com.",
   "test_data": "Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl)\nStorefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\nCuenta de comprador: vhchirinos+comprador@avatar-global.com\nTítulo: Tus productos mucho mas comprados (33 caracteres)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-12",
   "expected": "La cuenta del segmento ve el carrusel My Usuals; la cuenta fuera del segmento no lo ve.",
   "form_factor": "bm",
   "id": "TC-B2C55-BM-003",
   "name": "[BM] [Administrador] Con targeting por segmento el componente My Usuals solo se muestra al segmento",
   "observation": "Causa: {COMPRADOR_FRECUENTES_FUERA_SEGMENTO_USER} tiene 5 productos frecuentes en /account/my-usuals y la precondición pide más de 5; así su ausencia del carrusel no prueba el targeting. La mitad del segmento sí se verificó (la cuenta del segmento ve el carrusel). Acción: dejar en esa cuenta más de 5 productos frecuentes (o declarar otra cuenta fuera del segmento que los tenga) y re-ejecutar.",
   "observed": "Con el targeting por 'Clientes MyUsuals', la cuenta del segmento (vhchirinos+comprador@avatar-global.com) ve el carrusel. La cuenta fuera del segmento no lo ve, pero tampoco ve el My Usuals original (sin targeting): tiene exactamente 5 productos frecuentes y el componente solo se muestra con más de 5.",
   "preconditions": "- User type: Administrador BM\n- Ubicacion: Business Manager > Page Designer\n- Las cuentas vhchirinos+comprador@avatar-global.com (en el segmento) y vhchirinos+frecuentes_outsegment@avatar-global.com (fuera del segmento) tienen más de 5 productos frecuentes",
   "screenshots": [
    {
     "caption": "Paso 3 — targeting por segmento configurado",
     "file": "TC-B2C55-BM-003-p03-targeting-por-segmento-configurado.png"
    },
    {
     "caption": "Paso 4 — cuenta del segmento ve el carrusel",
     "file": "TC-B2C55-BM-003-p04-cuenta-del-segmento-ve-el-carrusel.png"
    },
    {
     "caption": "Paso 5 — cuenta fuera del segmento home sin my usuals",
     "file": "TC-B2C55-BM-003-p05-cuenta-fuera-del-segmento-home-sin-my-usuals.png"
    },
    {
     "caption": "Paso 6 — cuenta fuera del segmento tiene solo 5 frecuentes",
     "file": "TC-B2C55-BM-003-p06-cuenta-fuera-del-segmento-tiene-solo-5-frecuentes.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Ingresar a https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site con la cuenta e_vgaldino@smu.cl.\n2. Ir a Merchant Tools > Content > Page Designer y abrir la página Home.\n3. Configurar en el componente My Usuals el targeting por el segmento Clientes MyUsuals y publicar.\n4. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ con viewport Desktop 1440x900 e iniciar sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n5. Cerrar sesión e iniciar sesión con la cuenta vhchirinos+frecuentes_outsegment@avatar-global.com.",
   "test_data": "Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl)\nStorefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\nCuenta en el segmento: vhchirinos+comprador@avatar-global.com\nCuenta fuera del segmento: vhchirinos+frecuentes_outsegment@avatar-global.com\nSegmento: Clientes MyUsuals",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-12",
   "expected": "Con fecha de inicio futura el carrusel My Usuals no se muestra; con la vigencia activa se muestra.",
   "form_factor": "bm",
   "id": "TC-B2C55-BM-004",
   "name": "[BM] [Administrador] Con targeting por fecha el componente My Usuals solo se muestra dentro de la vigencia",
   "observation": "Cada cambio de fecha se reflejó tras invalidar la caché de página de Unimarc. Fechas de prueba: futura 11/20/2026 12:00 pm, pasada 11/10/2026 12:00 pm.",
   "observed": "Con Display From 11/20/2026 (futura) el carrusel nuevo no aparece en la Home y el My Usuals original sí (control: la cuenta cumple la precondición). Con Display From 11/10/2026 (pasada) y recarga, el carrusel se muestra.",
   "preconditions": "- User type: Administrador BM\n- Ubicacion: Business Manager > Page Designer\n- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes",
   "screenshots": [
    {
     "caption": "Paso 3 — fecha de inicio futura configurada",
     "file": "TC-B2C55-BM-004-p03-fecha-de-inicio-futura-configurada.png"
    },
    {
     "caption": "Paso 4 — con fecha futura el carrusel no se muestra",
     "file": "TC-B2C55-BM-004-p04-con-fecha-futura-el-carrusel-no-se-muestra.png"
    },
    {
     "caption": "Paso 5 — fecha de inicio pasada configurada",
     "file": "TC-B2C55-BM-004-p05-fecha-de-inicio-pasada-configurada.png"
    },
    {
     "caption": "Paso 6 — con vigencia activa el carrusel se muestra",
     "file": "TC-B2C55-BM-004-p06-con-vigencia-activa-el-carrusel-se-muestra.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Ingresar a https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site con la cuenta e_vgaldino@smu.cl.\n2. Ir a Merchant Tools > Content > Page Designer y abrir la página Home.\n3. Configurar en el componente My Usuals una fecha de inicio futura y publicar.\n4. Navegar a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ con viewport Desktop 1440x900 e iniciar sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n5. Volver a Page Designer, cambiar la fecha de inicio a una fecha pasada y publicar.\n6. Recargar la Home.",
   "test_data": "Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl)\nStorefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\nCuenta de comprador: vhchirinos+comprador@avatar-global.com",
   "viewport": "1440x900"
  }
 ]
}
-->
