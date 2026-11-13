# B2C-77 BM - Tabs + Carrusel de productos en Page Designer - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-77 BM |
| Última actualización | 2026-11-12 |
| Ejecutado por | Victor Chirinos |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-77 BM Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 9 |
| Aprobado | 5 |
| Rechazado | 1 |
| **Total** | **15** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-12 | 15 | TC-B2C77-BM-001, TC-B2C77-BM-002, TC-B2C77-BM-003, TC-B2C77-BM-004, TC-B2C77-BM-005, TC-B2C77-BM-006, TC-B2C77-BM-007, TC-B2C77-BM-008, TC-B2C77-BM-009, TC-B2C77-BM-010, TC-B2C77-BM-011, TC-B2C77-BM-012, TC-B2C77-BM-013, TC-B2C77-BM-014, TC-B2C77-BM-015 |

## Detalle por caso de prueba

### TC-B2C77-BM-006 - Verificar que el componente asignado a una campaña o promoción se muestra solo con la campaña activa [BM] [Administrador]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-12 |
| Form factor | bm |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Administrador BM
- Ubicacion: Business Manager (Site Unimarc) > Page Designer
- El componente Tabs + Carrusel de productos está publicado en el Home, con al menos 2 tabs con productos y sin targeting
- La campaña {CAMPANA_PRUEBA_PD} existe en Merchant Tools > Online Marketing > Campaigns y está activa

**Data utilizada**

Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl; contraseña no se transcribe)

Storefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

**Pasos ejecutados**

1. El administrador ingresa a https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner con e_vgaldino@smu.cl / (contraseña de la cuenta administradora, no se transcribe) y abre el Home.
2. El administrador selecciona el componente Tabs + Carrusel de productos y abre la pestaña de visibilidad/targeting.
3. El administrador asigna el componente a la campaña {CAMPANA_PRUEBA_PD}, guarda y publica.
4. El usuario ingresa (o recarga) https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ en Desktop y revisa si se muestra el componente.
5. El administrador desactiva la campaña {CAMPANA_PRUEBA_PD} en Online Marketing > Campaigns.
6. El usuario ingresa (o recarga) https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ en Desktop y revisa si se muestra el componente.
7. El administrador reactiva la campaña, el administrador quita el targeting configurado y vuelve a publicar.

**Resultado esperado**

Page Designer permite asignar el componente a {CAMPANA_PRUEBA_PD} y publicarlo. Con la campaña activa el componente se muestra en el Home; con la campaña desactivada no se muestra y no deja espacio vacío.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {CAMPANA_PRUEBA_PD} no tiene fila en el Excel de data. Acción: cargar el valor en el Excel de data y re-ejecutar.

---

### TC-B2C77-BM-007 - Verificar que el componente segmentado a un grupo de clientes se muestra a un usuario del grupo [BM] [Administrador]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-12 |
| Form factor | bm |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Administrador BM
- Ubicacion: Business Manager (Site Unimarc) > Page Designer
- El componente Tabs + Carrusel de productos está publicado en el Home, con al menos 2 tabs con productos y sin targeting
- vhchirinos+noaddress@avatar-global.com pertenece al grupo de clientes {GRUPO_CLIENTES_SEGMENTO}

**Data utilizada**

Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl; contraseña no se transcribe)

Storefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

**Pasos ejecutados**

1. El administrador ingresa a https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner con e_vgaldino@smu.cl / (contraseña de la cuenta administradora, no se transcribe) y abre el Home.
2. El administrador selecciona el componente Tabs + Carrusel de productos y abre la pestaña de visibilidad/targeting.
3. El administrador restringe el componente al grupo de clientes {GRUPO_CLIENTES_SEGMENTO}, guarda y publica.
4. El usuario inicia sesión en https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ (Desktop) con vhchirinos+noaddress@avatar-global.com / {COMPRADOR_SEGMENTO_PASSWORD}.
5. El usuario revisa el Home.
6. El administrador quita el targeting configurado y vuelve a publicar.

**Resultado esperado**

Page Designer permite asignar {GRUPO_CLIENTES_SEGMENTO} como condición del componente y publicarlo. El usuario del grupo ve el componente con su título, tabs y carrusel.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {GRUPO_CLIENTES_SEGMENTO} no tiene fila en el Excel de data. Acción: cargar el valor en el Excel de data y re-ejecutar.

---

### TC-B2C77-BM-008 - Verificar que el componente segmentado no se muestra a un usuario fuera del grupo ni al invitado [BM] [Administrador]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-12 |
| Form factor | bm |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Administrador BM
- Ubicacion: Business Manager (Site Unimarc) > Page Designer
- El componente Tabs + Carrusel de productos está publicado en el Home, con al menos 2 tabs con productos y sin targeting
- vhchirinos+segundo@avatar-global.com NO pertenece al grupo de clientes {GRUPO_CLIENTES_SEGMENTO}

**Data utilizada**

Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl; contraseña no se transcribe)

Storefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

**Pasos ejecutados**

1. El administrador ingresa a https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner con e_vgaldino@smu.cl / (contraseña de la cuenta administradora, no se transcribe) y abre el Home.
2. El administrador selecciona el componente Tabs + Carrusel de productos y abre la pestaña de visibilidad/targeting.
3. El administrador restringe el componente al grupo de clientes {GRUPO_CLIENTES_SEGMENTO}, guarda y publica.
4. El usuario inicia sesión en https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ (Desktop) con vhchirinos+segundo@avatar-global.com / {COMPRADOR_FUERA_SEGMENTO_PASSWORD} y revisa el Home.
5. El usuario cierra sesión y revisa el Home como invitado.
6. El administrador quita el targeting configurado y vuelve a publicar.

**Resultado esperado**

El componente no se muestra al usuario fuera de {GRUPO_CLIENTES_SEGMENTO} ni al invitado, y no deja espacio vacío en el Home.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {GRUPO_CLIENTES_SEGMENTO} no tiene fila en el Excel de data. Acción: cargar el valor en el Excel de data y re-ejecutar.

---

### TC-B2C77-BM-009 - Verificar que el componente se puede restringir por locale [BM] [Administrador]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-12 |
| Form factor | bm |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Administrador BM
- Ubicacion: Business Manager (Site Unimarc) > Page Designer
- El componente Tabs + Carrusel de productos está publicado en el Home, con al menos 2 tabs con productos y sin targeting

**Data utilizada**

Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl; contraseña no se transcribe)

Storefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

**Pasos ejecutados**

1. El administrador ingresa a https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner con e_vgaldino@smu.cl / (contraseña de la cuenta administradora, no se transcribe) y abre el Home.
2. El administrador selecciona el componente Tabs + Carrusel de productos y abre la pestaña de visibilidad/targeting.
3. El administrador restringe el componente al locale del sitio (es_CL), guarda y publica.
4. El usuario ingresa (o recarga) https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ en Desktop y revisa si se muestra el componente.
5. El administrador cambia la condición a un locale distinto al del sitio, guarda y publica.
6. El usuario ingresa (o recarga) https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ en Desktop y revisa si se muestra el componente.
7. El administrador quita el targeting configurado y vuelve a publicar.

**Resultado esperado**

Page Designer permite condicionar el componente por locale. Con el locale del sitio el componente se muestra; con un locale distinto no se muestra en el Home.

**Resultado obtenido**

Con la condición de locale Spanish (Chile) el componente 'Nuestras marcas' se muestra en el Home (9 tabs); con English (United States) no se muestra y el Home pasa al bloque siguiente sin hueco. Al quitar el targeting (None) vuelve a mostrarse.

**Observación**

El targeting quedó en None, como estaba. Cada cambio se verificó tras invalidar la caché de página de Unimarc.

**Evidencia**

![Paso 1 — business manager con sesion](<B2C-77 BM Evidencias/TC-B2C77-BM-009-p01-business-manager-con-sesion.png>)

![Paso 3 — componente restringido a spanish chile](<B2C-77 BM Evidencias/TC-B2C77-BM-009-p03-componente-restringido-a-spanish-chile.png>)

![Paso 4 — con locale del sitio el componente se muestra](<B2C-77 BM Evidencias/TC-B2C77-BM-009-p04-con-locale-del-sitio-el-componente-se-muestra.png>)

![Paso 5 — componente restringido a english us](<B2C-77 BM Evidencias/TC-B2C77-BM-009-p05-componente-restringido-a-english-us.png>)

![Paso 6 — con otro locale el componente no se muestra](<B2C-77 BM Evidencias/TC-B2C77-BM-009-p06-con-otro-locale-el-componente-no-se-muestra.png>)

![Paso 7 — targeting quitado](<B2C-77 BM Evidencias/TC-B2C77-BM-009-p07-targeting-quitado.png>)

---

### TC-B2C77-BM-010 - Verificar que el componente programado aparece exactamente a la hora de inicio [BM] [Administrador]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-12 |
| Form factor | bm |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Administrador BM
- Ubicacion: Business Manager (Site Unimarc) > Page Designer
- El componente Tabs + Carrusel de productos está publicado en el Home, con al menos 2 tabs con productos y sin targeting

**Data utilizada**

Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl; contraseña no se transcribe)

Storefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

**Pasos ejecutados**

1. El administrador ingresa a https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner con e_vgaldino@smu.cl / (contraseña de la cuenta administradora, no se transcribe) y abre el Home.
2. El administrador selecciona el componente Tabs + Carrusel de productos y abre la pestaña de visibilidad/targeting.
3. Con al menos 1 día de anticipación, el administrador configura la programación con inicio {FECHA_HORA_INICIO_CARRUSEL}, guarda y publica.
4. Un minuto antes de {FECHA_HORA_INICIO_CARRUSEL}, el usuario ingresa (o recarga) https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ en Desktop y revisa si se muestra el componente.
5. A la hora de {FECHA_HORA_INICIO_CARRUSEL}, el usuario recarga https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ y revisa si se muestra el componente.
6. El administrador quita el targeting configurado y vuelve a publicar.

**Resultado esperado**

Antes de {FECHA_HORA_INICIO_CARRUSEL} el componente no se muestra; desde esa hora se muestra sin volver a publicar en Page Designer.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {FECHA_HORA_INICIO_CARRUSEL} no tiene fila en el Excel de data. Acción: cargar el valor en el Excel de data y re-ejecutar.

---

### TC-B2C77-BM-011 - Verificar que el componente programado deja de mostrarse exactamente a la hora de fin [BM] [Administrador]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-12 |
| Form factor | bm |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Administrador BM
- Ubicacion: Business Manager (Site Unimarc) > Page Designer
- El componente Tabs + Carrusel de productos está publicado en el Home, con al menos 2 tabs con productos y sin targeting

**Data utilizada**

Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl; contraseña no se transcribe)

Storefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

**Pasos ejecutados**

1. El administrador ingresa a https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner con e_vgaldino@smu.cl / (contraseña de la cuenta administradora, no se transcribe) y abre el Home.
2. El administrador selecciona el componente Tabs + Carrusel de productos y abre la pestaña de visibilidad/targeting.
3. Con anticipación, el administrador configura la programación con fin {FECHA_HORA_FIN_CARRUSEL}, guarda y publica.
4. Un minuto antes de {FECHA_HORA_FIN_CARRUSEL}, el usuario ingresa (o recarga) https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ en Desktop y revisa si se muestra el componente.
5. A la hora de {FECHA_HORA_FIN_CARRUSEL}, el usuario recarga https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ y revisa si se muestra el componente.
6. El administrador quita el targeting configurado y vuelve a publicar.

**Resultado esperado**

Antes de {FECHA_HORA_FIN_CARRUSEL} el componente se muestra; desde esa hora deja de mostrarse y no deja espacio vacío en el Home.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {FECHA_HORA_FIN_CARRUSEL} no tiene fila en el Excel de data. Acción: cargar el valor en el Excel de data y re-ejecutar.

---

### TC-B2C77-BM-012 - Verificar que con varias condiciones de targeting el componente se muestra solo si se cumplen todas [BM] [Administrador]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-12 |
| Form factor | bm |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Administrador BM
- Ubicacion: Business Manager (Site Unimarc) > Page Designer
- El componente Tabs + Carrusel de productos está publicado en el Home, con al menos 2 tabs con productos y sin targeting
- vhchirinos+noaddress@avatar-global.com pertenece al grupo de clientes {GRUPO_CLIENTES_SEGMENTO}

**Data utilizada**

Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl; contraseña no se transcribe)

Storefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

**Pasos ejecutados**

1. El administrador ingresa a https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner con e_vgaldino@smu.cl / (contraseña de la cuenta administradora, no se transcribe) y abre el Home.
2. El administrador selecciona el componente Tabs + Carrusel de productos y abre la pestaña de visibilidad/targeting.
3. El administrador restringe el componente a {GRUPO_CLIENTES_SEGMENTO} con programación de inicio {FECHA_HORA_INICIO_CARRUSEL}, guarda y publica.
4. Antes de {FECHA_HORA_INICIO_CARRUSEL}, el usuario inicia sesión en https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ con vhchirinos+noaddress@avatar-global.com / {COMPRADOR_SEGMENTO_PASSWORD} y revisa el Home.
5. Después de {FECHA_HORA_INICIO_CARRUSEL}, el usuario recarga el Home.
6. El usuario cierra sesión y revisa el Home como invitado.
7. El administrador quita el targeting configurado y vuelve a publicar.

**Resultado esperado**

Antes del inicio, el usuario del grupo no ve el componente; después del inicio sí lo ve. El invitado (fuera del grupo) no lo ve aunque la programación esté vigente.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {GRUPO_CLIENTES_SEGMENTO} y {FECHA_HORA_INICIO_CARRUSEL} no tiene fila en el Excel de data. Acción: cargar el valor en el Excel de data y re-ejecutar.

---

### TC-B2C77-BM-013 - Verificar que se pueden configurar los atributos de tracking del componente en Page Designer [BM] [Administrador]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-12 |
| Form factor | bm |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Administrador BM
- Ubicacion: Business Manager (Site Unimarc) > Page Designer
- El componente Tabs + Carrusel de productos está publicado en el Home, con al menos 2 tabs con productos y sin targeting

**Data utilizada**

Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl; contraseña no se transcribe)

Storefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

**Pasos ejecutados**

1. El administrador ingresa a https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner con e_vgaldino@smu.cl / (contraseña de la cuenta administradora, no se transcribe) y abre el Home.
2. El administrador selecciona el componente Tabs + Carrusel de productos y abre sus atributos.
3. El administrador completa promotion_id = {TRACKING_PROMOTION_ID}, promotion_name = {TRACKING_PROMOTION_NAME}, creative_name = {TRACKING_CREATIVE_NAME}, creative_slot = {TRACKING_CREATIVE_SLOT} y location_id = {TRACKING_LOCATION_ID}, guarda y publica.
4. El administrador cierra y vuelve a abrir el componente.

**Resultado esperado**

Los 5 atributos de tracking están disponibles en el componente, se guardan y, al volver a abrirlo, conservan los valores ingresados.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {TRACKING_PROMOTION_ID}, {TRACKING_PROMOTION_NAME}, {TRACKING_CREATIVE_NAME}, {TRACKING_CREATIVE_SLOT} y {TRACKING_LOCATION_ID} no tiene fila en el Excel de data. Acción: cargar el valor en el Excel de data y re-ejecutar.

---

### TC-B2C77-BM-014 - Verificar que la impresión del componente envía view_promotion con los atributos de tracking configurados [BM] [Administrador]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-12 |
| Form factor | bm |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Administrador BM
- Ubicacion: Business Manager (Site Unimarc) > Page Designer
- El componente Tabs + Carrusel de productos está publicado en el Home, con al menos 2 tabs con productos y sin targeting
- El componente tiene configurados los atributos de tracking: promotion_id = {TRACKING_PROMOTION_ID}, promotion_name = {TRACKING_PROMOTION_NAME}, creative_name = {TRACKING_CREATIVE_NAME}, creative_slot = {TRACKING_CREATIVE_SLOT} y location_id = {TRACKING_LOCATION_ID}

**Data utilizada**

Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl; contraseña no se transcribe)

Storefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ en Desktop con la consola del navegador (dataLayer) o GA4 DebugView abiertos.
2. El usuario hace scroll hasta que el componente queda visible.
3. El usuario revisa el evento view_promotion registrado.

**Resultado esperado**

Se registra un evento view_promotion con promotion_id = {TRACKING_PROMOTION_ID}, promotion_name = {TRACKING_PROMOTION_NAME}, creative_name = {TRACKING_CREATIVE_NAME}, creative_slot = {TRACKING_CREATIVE_SLOT} y location_id = {TRACKING_LOCATION_ID}, iguales a los configurados en Page Designer.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {TRACKING_PROMOTION_ID}, {TRACKING_PROMOTION_NAME}, {TRACKING_CREATIVE_NAME}, {TRACKING_CREATIVE_SLOT} y {TRACKING_LOCATION_ID} no tiene fila en el Excel de data. Acción: cargar el valor en el Excel de data y re-ejecutar.

---

### TC-B2C77-BM-015 - Verificar que el clic en el componente envía select_promotion con los atributos de tracking configurados [BM] [Administrador]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-12 |
| Form factor | bm |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Administrador BM
- Ubicacion: Business Manager (Site Unimarc) > Page Designer
- El componente Tabs + Carrusel de productos está publicado en el Home, con al menos 2 tabs con productos y sin targeting
- El componente tiene configurados los atributos de tracking: promotion_id = {TRACKING_PROMOTION_ID}, promotion_name = {TRACKING_PROMOTION_NAME}, creative_name = {TRACKING_CREATIVE_NAME}, creative_slot = {TRACKING_CREATIVE_SLOT} y location_id = {TRACKING_LOCATION_ID}

**Data utilizada**

Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl; contraseña no se transcribe)

Storefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ en Desktop con la consola del navegador (dataLayer) o GA4 DebugView abiertos y preserva el log al navegar.
2. El usuario hace clic en la shelf de un producto del carrusel.
3. El usuario revisa el evento select_promotion registrado.

**Resultado esperado**

Se registra un evento select_promotion con promotion_id = {TRACKING_PROMOTION_ID}, promotion_name = {TRACKING_PROMOTION_NAME}, creative_name = {TRACKING_CREATIVE_NAME}, creative_slot = {TRACKING_CREATIVE_SLOT} y location_id = {TRACKING_LOCATION_ID}, iguales a los configurados en Page Designer, antes de la redirección a la PDP.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {TRACKING_PROMOTION_ID}, {TRACKING_PROMOTION_NAME}, {TRACKING_CREATIVE_NAME}, {TRACKING_CREATIVE_SLOT} y {TRACKING_LOCATION_ID} no tiene fila en el Excel de data. Acción: cargar el valor en el Excel de data y re-ejecutar.

---

### TC-B2C77-BM-002 - Configuracion del targeting del componente

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-12 |
| Form factor | bm |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: BM Admin
- Ubicacion: Business Manager > Page Designer

**Data utilizada**

Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl; contraseña no se transcribe)

Storefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

**Pasos ejecutados**

1. En Page Designer, abrir la configuracion de targeting del componente.
2. Definir campana/promocion, grupo de cliente, idioma y fechas de programacion.
3. Guardar y publicar.

**Resultado esperado**

El targeting queda configurado con las condiciones definidas.

**Resultado obtenido**

Page Designer permite configurar en Custom Targeting, a la vez, grupo de clientes (Clientes MyUsuals), locale (Spanish (Chile)) y programación (11/10/2026 12:00 pm – 11/30/2026 12:00 pm); tras Apply la cabecera muestra 'Visible only to', 'Visible only in' y 'Schedule'. La asignación a campaña está disponible como modo alternativo ('Add to Campaign', con la lista de campañas).

**Observación**

Se ejecutó sobre un componente Tabs + Product Carousel de prueba agregado al Home (dentro del primer Container), que se eliminó al terminar; el componente 'Nuestras marcas' no se tocó. Valores usados (la planilla no los declara, decisión del usuario): grupo 'Clientes MyUsuals', locale es_CL y esas fechas. En Page Designer campaña/promoción y Custom Targeting son modos excluyentes: no se pueden definir los cuatro a la vez.

**Evidencia**

![Paso 1 — opcion add to campaign](<B2C-77 BM Evidencias/TC-B2C77-BM-002-p01-opcion-add-to-campaign.png>)

![Paso 3 — targeting configurado grupo locale fechas](<B2C-77 BM Evidencias/TC-B2C77-BM-002-p03-targeting-configurado-grupo-locale-fechas.png>)

---

### TC-B2C77-BM-003 - Configuracion de atributos de tracking del componente

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-12 |
| Form factor | bm |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: BM Admin
- Ubicacion: Business Manager > Page Designer

**Data utilizada**

Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl; contraseña no se transcribe)

Storefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

**Pasos ejecutados**

1. En Page Designer, abrir la configuracion de tracking del componente.
2. Verificar/definir promotion_id, promotion_name, creative_name, creative_slot y location_id.
3. Guardar y publicar.

**Resultado esperado**

Los atributos de tracking quedan configurados y disponibles para medicion de impresiones e interacciones.

**Resultado obtenido**

El componente 'Nuestras marcas' tiene los 5 atributos de tracking configurados (promotion_id PROMO-TABS-MARCAS, promotion_name 'Nuestras marcas exclusivas', creative_name tabs-marcas, creative_slot home_tabs, location_id home_tabs) y el storefront registra view_promotion en el dataLayer con esos mismos valores.

**Observación**

Se verificaron los valores ya configurados; no se cambiaron. El view_promotion trae items vacío.

**Evidencia**

![Paso 2 — atributos de tracking del componente](<B2C-77 BM Evidencias/TC-B2C77-BM-003-p02-atributos-de-tracking-del-componente.png>)

---

### TC-B2C77-BM-004 - Validaciones de Page Designer: campos requeridos y limites de caracteres

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-12 |
| Form factor | bm |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: BM Admin
- Ubicacion: Business Manager > Page Designer

**Data utilizada**

Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl; contraseña no se transcribe)

Storefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

**Pasos ejecutados**

1. En Page Designer, configurar el componente con solo 1 tab e intentar guardar/publicar.
2. Verificar que el sistema impide guardar o muestra un error de validacion.
3. Repetir dejando una tab sin Label, y luego una tab sin link de coleccion, verificando el mismo comportamiento en cada caso.
4. Ingresar en el campo Titulo un texto de mas de 30 caracteres y en el Label de una tab un texto de mas de 12 caracteres.
5. Verificar el comportamiento del sistema ante el exceso de caracteres (truncamiento o bloqueo de guardado).

**Resultado esperado**

El sistema no permite guardar/publicar el componente si tiene menos de 2 tabs, o si falta el Label o el link de coleccion de alguna tab (campos requeridos). Los campos Titulo y Label de tab no aceptan (o truncan) texto que excede su limite de caracteres definido (30/12 respectivamente).

**Resultado obtenido**

Page Designer guardó y publicó el componente sin ningún mensaje de validación con solo la Tab 1 configurada, con la Tab 2 con categoría y sin Label, y con la Tab 2 con Label y sin categoría (grupos rotulados 'Tab 1 (required)' / 'Tab 2 (required)'). Los límites sí se cumplen por truncado: título de 46 caracteres se ve cortado a 30 y label de 21 a 12 en el storefront, sin puntos suspensivos.

**Observación**

Esperado: no permitir guardar/publicar con menos de 2 tabs o con una tab sin Label o sin link de colección. Obtenido: se guarda y publica en los tres casos (paso 1 y 3). Se ejecutó sobre un componente Tabs + Product Carousel de prueba agregado al Home (dentro del primer Container), que se eliminó al terminar; el componente 'Nuestras marcas' no se tocó. Valores usados (la planilla no los declara, decisión del usuario): tabs 'Como en casa'→carnes y 'Azul'→congelados.

**Evidencia**

![Paso 1 — guardar con una sola tab](<B2C-77 BM Evidencias/TC-B2C77-BM-004-p01-guardar-con-una-sola-tab.png>)

![Paso 2 — componente guardado con una sola tab](<B2C-77 BM Evidencias/TC-B2C77-BM-004-p02-componente-guardado-con-una-sola-tab.png>)

![Paso 3 — tab 2 sin categoria](<B2C-77 BM Evidencias/TC-B2C77-BM-004-p03-tab-2-sin-categoria.png>)

![Paso 3 — tab 2 sin label](<B2C-77 BM Evidencias/TC-B2C77-BM-004-p03-tab-2-sin-label.png>)

![Paso 4 — titulo y label sobre el limite](<B2C-77 BM Evidencias/TC-B2C77-BM-004-p04-titulo-y-label-sobre-el-limite.png>)

![Paso 5 — storefront trunca titulo 30 y label 12](<B2C-77 BM Evidencias/TC-B2C77-BM-004-p05-storefront-trunca-titulo-30-y-label-12.png>)

---

### TC-B2C77-BM-005 - Valor por defecto del Maximo de productos (12) por tab

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-12 |
| Form factor | bm |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: BM Admin
- Ubicacion: Business Manager > Page Designer

**Data utilizada**

Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl; contraseña no se transcribe)

Storefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

**Pasos ejecutados**

1. Ingresar a Business Manager > Page Designer.
2. Agregar el componente Tabs + Carrusel y configurar una tab con su label y coleccion, dejando el campo 'Maximo de productos' sin configurar.
3. Guardar y publicar.
4. Verificar el valor aplicado para el maximo de productos de esa tab (en configuracion o en el render del carrusel).

**Resultado esperado**

El componente aplica 12 como el maximo de productos por defecto para la tab, sin requerir que el administrador lo configure explicitamente.

**Resultado obtenido**

Con 'Max products per tab' sin configurar (Select an Option), la tab 'carnes' del componente muestra 12 productos en el storefront.

**Observación**

Se ejecutó sobre un componente Tabs + Product Carousel de prueba agregado al Home (dentro del primer Container), que se eliminó al terminar; el componente 'Nuestras marcas' no se tocó. Valores usados (la planilla no los declara, decisión del usuario): tabs 'Como en casa'→carnes y 'Azul'→congelados. 'Max products per tab' es un atributo del componente, no de cada tab.

**Evidencia**

![Paso 2 — max productos sin configurar](<B2C-77 BM Evidencias/TC-B2C77-BM-005-p02-max-productos-sin-configurar.png>)

![Paso 4 — tab con 12 productos por defecto](<B2C-77 BM Evidencias/TC-B2C77-BM-005-p04-tab-con-12-productos-por-defecto.png>)

---

### TC-B2C77-BM-001 - Cada tab tiene asociada su colección en la configuración del componente

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-12 |
| Form factor | bm |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

"- User type: BM Admin

- Ubicacion: Business Manager > Page Designer
- Required data state: componente Tabs + Carrusel (T4) publicado con entre 2 y 10 tabs"

**Data utilizada**

Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl; contraseña no se transcribe)

Storefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

**Pasos ejecutados**

1. Ingresar a Business Manager > Page Designer con e_vgaldino@smu.cl / (contraseña de la cuenta administradora, no se transcribe).
2. Abrir la página que contiene el componente Tabs + Carrusel (T4).
3. Revisar la configuración de cada tab: Label y link de la categoría colección.
4. Registrar la relación tab → colección de todas las tabs (Nuestras marcas).

**Resultado esperado**

Todas las tabs configuradas tienen un link de categoría colección definido (Modo = Colección) y ninguna queda sin colección. La relación tab → colección queda registrada para verificarla en el storefront.

**Resultado obtenido**

Las 9 tabs del componente 'Nuestras marcas' tienen categoría: Amada masa→panaderia-y-pasteleria, Azul→congelados, Como en casa→carnes, D-kora→limpieza, Fundo Río alegre→frutas-y-verduras, Nubelín→bebidas-y-licores, Nuestra cocina→panaderia-y-pasteleria, Smart Clean→limpieza, Tento→congelados. Ninguna queda sin categoría.

**Observación**

El componente no tiene un campo 'Modo' (Colección) y las tabs apuntan a categorías N1 regulares, no a categorías de colección: revisar si eso cumple el CA. La columna Test data no declara tokens (se usó {TABS_COLECCIONES} = 'Nuestras marcas' de los pasos). ID renombrado por el usuario (antes duplicaba TC-B2C77-BM-006).

**Evidencia**

![Paso 3 — tabs con su categoria](<B2C-77 BM Evidencias/TC-B2C77-BM-001-p03-tabs-con-su-categoria.png>)

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
  "suite": "B2C-77 BM",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-77 BM Test Cases.xlsx",
  "title": "B2C-77 BM - Tabs + Carrusel de productos en Page Designer - Evidencias QA",
  "updated_at": "2026-11-12"
 },
 "history": {
  "2026-11-12": [
   "TC-B2C77-BM-001",
   "TC-B2C77-BM-002",
   "TC-B2C77-BM-003",
   "TC-B2C77-BM-004",
   "TC-B2C77-BM-005",
   "TC-B2C77-BM-006",
   "TC-B2C77-BM-007",
   "TC-B2C77-BM-008",
   "TC-B2C77-BM-009",
   "TC-B2C77-BM-010",
   "TC-B2C77-BM-011",
   "TC-B2C77-BM-012",
   "TC-B2C77-BM-013",
   "TC-B2C77-BM-014",
   "TC-B2C77-BM-015"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-11-12",
   "expected": "Page Designer permite asignar el componente a {CAMPANA_PRUEBA_PD} y publicarlo. Con la campaña activa el componente se muestra en el Home; con la campaña desactivada no se muestra y no deja espacio vacío.",
   "form_factor": "bm",
   "id": "TC-B2C77-BM-006",
   "name": "Verificar que el componente asignado a una campaña o promoción se muestra solo con la campaña activa [BM] [Administrador]",
   "observation": "Causa: {CAMPANA_PRUEBA_PD} no tiene fila en el Excel de data. Acción: cargar el valor en el Excel de data y re-ejecutar.",
   "observed": "No se ejecutó.",
   "preconditions": "- User type: Administrador BM\n- Ubicacion: Business Manager (Site Unimarc) > Page Designer\n- El componente Tabs + Carrusel de productos está publicado en el Home, con al menos 2 tabs con productos y sin targeting\n- La campaña {CAMPANA_PRUEBA_PD} existe en Merchant Tools > Online Marketing > Campaigns y está activa",
   "status": "Bloqueado Data",
   "steps": "1. El administrador ingresa a https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner con e_vgaldino@smu.cl / (contraseña de la cuenta administradora, no se transcribe) y abre el Home.\n2. El administrador selecciona el componente Tabs + Carrusel de productos y abre la pestaña de visibilidad/targeting.\n3. El administrador asigna el componente a la campaña {CAMPANA_PRUEBA_PD}, guarda y publica.\n4. El usuario ingresa (o recarga) https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ en Desktop y revisa si se muestra el componente.\n5. El administrador desactiva la campaña {CAMPANA_PRUEBA_PD} en Online Marketing > Campaigns.\n6. El usuario ingresa (o recarga) https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ en Desktop y revisa si se muestra el componente.\n7. El administrador reactiva la campaña, el administrador quita el targeting configurado y vuelve a publicar.",
   "test_data": "Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl; contraseña no se transcribe)\nStorefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-12",
   "expected": "Page Designer permite asignar {GRUPO_CLIENTES_SEGMENTO} como condición del componente y publicarlo. El usuario del grupo ve el componente con su título, tabs y carrusel.",
   "form_factor": "bm",
   "id": "TC-B2C77-BM-007",
   "name": "Verificar que el componente segmentado a un grupo de clientes se muestra a un usuario del grupo [BM] [Administrador]",
   "observation": "Causa: {GRUPO_CLIENTES_SEGMENTO} no tiene fila en el Excel de data. Acción: cargar el valor en el Excel de data y re-ejecutar.",
   "observed": "No se ejecutó.",
   "preconditions": "- User type: Administrador BM\n- Ubicacion: Business Manager (Site Unimarc) > Page Designer\n- El componente Tabs + Carrusel de productos está publicado en el Home, con al menos 2 tabs con productos y sin targeting\n- vhchirinos+noaddress@avatar-global.com pertenece al grupo de clientes {GRUPO_CLIENTES_SEGMENTO}",
   "status": "Bloqueado Data",
   "steps": "1. El administrador ingresa a https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner con e_vgaldino@smu.cl / (contraseña de la cuenta administradora, no se transcribe) y abre el Home.\n2. El administrador selecciona el componente Tabs + Carrusel de productos y abre la pestaña de visibilidad/targeting.\n3. El administrador restringe el componente al grupo de clientes {GRUPO_CLIENTES_SEGMENTO}, guarda y publica.\n4. El usuario inicia sesión en https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ (Desktop) con vhchirinos+noaddress@avatar-global.com / {COMPRADOR_SEGMENTO_PASSWORD}.\n5. El usuario revisa el Home.\n6. El administrador quita el targeting configurado y vuelve a publicar.",
   "test_data": "Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl; contraseña no se transcribe)\nStorefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-12",
   "expected": "El componente no se muestra al usuario fuera de {GRUPO_CLIENTES_SEGMENTO} ni al invitado, y no deja espacio vacío en el Home.",
   "form_factor": "bm",
   "id": "TC-B2C77-BM-008",
   "name": "Verificar que el componente segmentado no se muestra a un usuario fuera del grupo ni al invitado [BM] [Administrador]",
   "observation": "Causa: {GRUPO_CLIENTES_SEGMENTO} no tiene fila en el Excel de data. Acción: cargar el valor en el Excel de data y re-ejecutar.",
   "observed": "No se ejecutó.",
   "preconditions": "- User type: Administrador BM\n- Ubicacion: Business Manager (Site Unimarc) > Page Designer\n- El componente Tabs + Carrusel de productos está publicado en el Home, con al menos 2 tabs con productos y sin targeting\n- vhchirinos+segundo@avatar-global.com NO pertenece al grupo de clientes {GRUPO_CLIENTES_SEGMENTO}",
   "status": "Bloqueado Data",
   "steps": "1. El administrador ingresa a https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner con e_vgaldino@smu.cl / (contraseña de la cuenta administradora, no se transcribe) y abre el Home.\n2. El administrador selecciona el componente Tabs + Carrusel de productos y abre la pestaña de visibilidad/targeting.\n3. El administrador restringe el componente al grupo de clientes {GRUPO_CLIENTES_SEGMENTO}, guarda y publica.\n4. El usuario inicia sesión en https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ (Desktop) con vhchirinos+segundo@avatar-global.com / {COMPRADOR_FUERA_SEGMENTO_PASSWORD} y revisa el Home.\n5. El usuario cierra sesión y revisa el Home como invitado.\n6. El administrador quita el targeting configurado y vuelve a publicar.",
   "test_data": "Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl; contraseña no se transcribe)\nStorefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-12",
   "expected": "Page Designer permite condicionar el componente por locale. Con el locale del sitio el componente se muestra; con un locale distinto no se muestra en el Home.",
   "form_factor": "bm",
   "id": "TC-B2C77-BM-009",
   "name": "Verificar que el componente se puede restringir por locale [BM] [Administrador]",
   "observation": "El targeting quedó en None, como estaba. Cada cambio se verificó tras invalidar la caché de página de Unimarc.",
   "observed": "Con la condición de locale Spanish (Chile) el componente 'Nuestras marcas' se muestra en el Home (9 tabs); con English (United States) no se muestra y el Home pasa al bloque siguiente sin hueco. Al quitar el targeting (None) vuelve a mostrarse.",
   "preconditions": "- User type: Administrador BM\n- Ubicacion: Business Manager (Site Unimarc) > Page Designer\n- El componente Tabs + Carrusel de productos está publicado en el Home, con al menos 2 tabs con productos y sin targeting",
   "screenshots": [
    {
     "caption": "Paso 1 — business manager con sesion",
     "file": "TC-B2C77-BM-009-p01-business-manager-con-sesion.png"
    },
    {
     "caption": "Paso 3 — componente restringido a spanish chile",
     "file": "TC-B2C77-BM-009-p03-componente-restringido-a-spanish-chile.png"
    },
    {
     "caption": "Paso 4 — con locale del sitio el componente se muestra",
     "file": "TC-B2C77-BM-009-p04-con-locale-del-sitio-el-componente-se-muestra.png"
    },
    {
     "caption": "Paso 5 — componente restringido a english us",
     "file": "TC-B2C77-BM-009-p05-componente-restringido-a-english-us.png"
    },
    {
     "caption": "Paso 6 — con otro locale el componente no se muestra",
     "file": "TC-B2C77-BM-009-p06-con-otro-locale-el-componente-no-se-muestra.png"
    },
    {
     "caption": "Paso 7 — targeting quitado",
     "file": "TC-B2C77-BM-009-p07-targeting-quitado.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El administrador ingresa a https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner con e_vgaldino@smu.cl / (contraseña de la cuenta administradora, no se transcribe) y abre el Home.\n2. El administrador selecciona el componente Tabs + Carrusel de productos y abre la pestaña de visibilidad/targeting.\n3. El administrador restringe el componente al locale del sitio (es_CL), guarda y publica.\n4. El usuario ingresa (o recarga) https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ en Desktop y revisa si se muestra el componente.\n5. El administrador cambia la condición a un locale distinto al del sitio, guarda y publica.\n6. El usuario ingresa (o recarga) https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ en Desktop y revisa si se muestra el componente.\n7. El administrador quita el targeting configurado y vuelve a publicar.",
   "test_data": "Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl; contraseña no se transcribe)\nStorefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-12",
   "expected": "Antes de {FECHA_HORA_INICIO_CARRUSEL} el componente no se muestra; desde esa hora se muestra sin volver a publicar en Page Designer.",
   "form_factor": "bm",
   "id": "TC-B2C77-BM-010",
   "name": "Verificar que el componente programado aparece exactamente a la hora de inicio [BM] [Administrador]",
   "observation": "Causa: {FECHA_HORA_INICIO_CARRUSEL} no tiene fila en el Excel de data. Acción: cargar el valor en el Excel de data y re-ejecutar.",
   "observed": "No se ejecutó.",
   "preconditions": "- User type: Administrador BM\n- Ubicacion: Business Manager (Site Unimarc) > Page Designer\n- El componente Tabs + Carrusel de productos está publicado en el Home, con al menos 2 tabs con productos y sin targeting",
   "status": "Bloqueado Data",
   "steps": "1. El administrador ingresa a https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner con e_vgaldino@smu.cl / (contraseña de la cuenta administradora, no se transcribe) y abre el Home.\n2. El administrador selecciona el componente Tabs + Carrusel de productos y abre la pestaña de visibilidad/targeting.\n3. Con al menos 1 día de anticipación, el administrador configura la programación con inicio {FECHA_HORA_INICIO_CARRUSEL}, guarda y publica.\n4. Un minuto antes de {FECHA_HORA_INICIO_CARRUSEL}, el usuario ingresa (o recarga) https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ en Desktop y revisa si se muestra el componente.\n5. A la hora de {FECHA_HORA_INICIO_CARRUSEL}, el usuario recarga https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ y revisa si se muestra el componente.\n6. El administrador quita el targeting configurado y vuelve a publicar.",
   "test_data": "Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl; contraseña no se transcribe)\nStorefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-12",
   "expected": "Antes de {FECHA_HORA_FIN_CARRUSEL} el componente se muestra; desde esa hora deja de mostrarse y no deja espacio vacío en el Home.",
   "form_factor": "bm",
   "id": "TC-B2C77-BM-011",
   "name": "Verificar que el componente programado deja de mostrarse exactamente a la hora de fin [BM] [Administrador]",
   "observation": "Causa: {FECHA_HORA_FIN_CARRUSEL} no tiene fila en el Excel de data. Acción: cargar el valor en el Excel de data y re-ejecutar.",
   "observed": "No se ejecutó.",
   "preconditions": "- User type: Administrador BM\n- Ubicacion: Business Manager (Site Unimarc) > Page Designer\n- El componente Tabs + Carrusel de productos está publicado en el Home, con al menos 2 tabs con productos y sin targeting",
   "status": "Bloqueado Data",
   "steps": "1. El administrador ingresa a https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner con e_vgaldino@smu.cl / (contraseña de la cuenta administradora, no se transcribe) y abre el Home.\n2. El administrador selecciona el componente Tabs + Carrusel de productos y abre la pestaña de visibilidad/targeting.\n3. Con anticipación, el administrador configura la programación con fin {FECHA_HORA_FIN_CARRUSEL}, guarda y publica.\n4. Un minuto antes de {FECHA_HORA_FIN_CARRUSEL}, el usuario ingresa (o recarga) https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ en Desktop y revisa si se muestra el componente.\n5. A la hora de {FECHA_HORA_FIN_CARRUSEL}, el usuario recarga https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ y revisa si se muestra el componente.\n6. El administrador quita el targeting configurado y vuelve a publicar.",
   "test_data": "Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl; contraseña no se transcribe)\nStorefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-12",
   "expected": "Antes del inicio, el usuario del grupo no ve el componente; después del inicio sí lo ve. El invitado (fuera del grupo) no lo ve aunque la programación esté vigente.",
   "form_factor": "bm",
   "id": "TC-B2C77-BM-012",
   "name": "Verificar que con varias condiciones de targeting el componente se muestra solo si se cumplen todas [BM] [Administrador]",
   "observation": "Causa: {GRUPO_CLIENTES_SEGMENTO} y {FECHA_HORA_INICIO_CARRUSEL} no tiene fila en el Excel de data. Acción: cargar el valor en el Excel de data y re-ejecutar.",
   "observed": "No se ejecutó.",
   "preconditions": "- User type: Administrador BM\n- Ubicacion: Business Manager (Site Unimarc) > Page Designer\n- El componente Tabs + Carrusel de productos está publicado en el Home, con al menos 2 tabs con productos y sin targeting\n- vhchirinos+noaddress@avatar-global.com pertenece al grupo de clientes {GRUPO_CLIENTES_SEGMENTO}",
   "status": "Bloqueado Data",
   "steps": "1. El administrador ingresa a https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner con e_vgaldino@smu.cl / (contraseña de la cuenta administradora, no se transcribe) y abre el Home.\n2. El administrador selecciona el componente Tabs + Carrusel de productos y abre la pestaña de visibilidad/targeting.\n3. El administrador restringe el componente a {GRUPO_CLIENTES_SEGMENTO} con programación de inicio {FECHA_HORA_INICIO_CARRUSEL}, guarda y publica.\n4. Antes de {FECHA_HORA_INICIO_CARRUSEL}, el usuario inicia sesión en https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ con vhchirinos+noaddress@avatar-global.com / {COMPRADOR_SEGMENTO_PASSWORD} y revisa el Home.\n5. Después de {FECHA_HORA_INICIO_CARRUSEL}, el usuario recarga el Home.\n6. El usuario cierra sesión y revisa el Home como invitado.\n7. El administrador quita el targeting configurado y vuelve a publicar.",
   "test_data": "Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl; contraseña no se transcribe)\nStorefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-12",
   "expected": "Los 5 atributos de tracking están disponibles en el componente, se guardan y, al volver a abrirlo, conservan los valores ingresados.",
   "form_factor": "bm",
   "id": "TC-B2C77-BM-013",
   "name": "Verificar que se pueden configurar los atributos de tracking del componente en Page Designer [BM] [Administrador]",
   "observation": "Causa: {TRACKING_PROMOTION_ID}, {TRACKING_PROMOTION_NAME}, {TRACKING_CREATIVE_NAME}, {TRACKING_CREATIVE_SLOT} y {TRACKING_LOCATION_ID} no tiene fila en el Excel de data. Acción: cargar el valor en el Excel de data y re-ejecutar.",
   "observed": "No se ejecutó.",
   "preconditions": "- User type: Administrador BM\n- Ubicacion: Business Manager (Site Unimarc) > Page Designer\n- El componente Tabs + Carrusel de productos está publicado en el Home, con al menos 2 tabs con productos y sin targeting",
   "status": "Bloqueado Data",
   "steps": "1. El administrador ingresa a https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner con e_vgaldino@smu.cl / (contraseña de la cuenta administradora, no se transcribe) y abre el Home.\n2. El administrador selecciona el componente Tabs + Carrusel de productos y abre sus atributos.\n3. El administrador completa promotion_id = {TRACKING_PROMOTION_ID}, promotion_name = {TRACKING_PROMOTION_NAME}, creative_name = {TRACKING_CREATIVE_NAME}, creative_slot = {TRACKING_CREATIVE_SLOT} y location_id = {TRACKING_LOCATION_ID}, guarda y publica.\n4. El administrador cierra y vuelve a abrir el componente.",
   "test_data": "Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl; contraseña no se transcribe)\nStorefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-12",
   "expected": "Se registra un evento view_promotion con promotion_id = {TRACKING_PROMOTION_ID}, promotion_name = {TRACKING_PROMOTION_NAME}, creative_name = {TRACKING_CREATIVE_NAME}, creative_slot = {TRACKING_CREATIVE_SLOT} y location_id = {TRACKING_LOCATION_ID}, iguales a los configurados en Page Designer.",
   "form_factor": "bm",
   "id": "TC-B2C77-BM-014",
   "name": "Verificar que la impresión del componente envía view_promotion con los atributos de tracking configurados [BM] [Administrador]",
   "observation": "Causa: {TRACKING_PROMOTION_ID}, {TRACKING_PROMOTION_NAME}, {TRACKING_CREATIVE_NAME}, {TRACKING_CREATIVE_SLOT} y {TRACKING_LOCATION_ID} no tiene fila en el Excel de data. Acción: cargar el valor en el Excel de data y re-ejecutar.",
   "observed": "No se ejecutó.",
   "preconditions": "- User type: Administrador BM\n- Ubicacion: Business Manager (Site Unimarc) > Page Designer\n- El componente Tabs + Carrusel de productos está publicado en el Home, con al menos 2 tabs con productos y sin targeting\n- El componente tiene configurados los atributos de tracking: promotion_id = {TRACKING_PROMOTION_ID}, promotion_name = {TRACKING_PROMOTION_NAME}, creative_name = {TRACKING_CREATIVE_NAME}, creative_slot = {TRACKING_CREATIVE_SLOT} y location_id = {TRACKING_LOCATION_ID}",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ en Desktop con la consola del navegador (dataLayer) o GA4 DebugView abiertos.\n2. El usuario hace scroll hasta que el componente queda visible.\n3. El usuario revisa el evento view_promotion registrado.",
   "test_data": "Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl; contraseña no se transcribe)\nStorefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-12",
   "expected": "Se registra un evento select_promotion con promotion_id = {TRACKING_PROMOTION_ID}, promotion_name = {TRACKING_PROMOTION_NAME}, creative_name = {TRACKING_CREATIVE_NAME}, creative_slot = {TRACKING_CREATIVE_SLOT} y location_id = {TRACKING_LOCATION_ID}, iguales a los configurados en Page Designer, antes de la redirección a la PDP.",
   "form_factor": "bm",
   "id": "TC-B2C77-BM-015",
   "name": "Verificar que el clic en el componente envía select_promotion con los atributos de tracking configurados [BM] [Administrador]",
   "observation": "Causa: {TRACKING_PROMOTION_ID}, {TRACKING_PROMOTION_NAME}, {TRACKING_CREATIVE_NAME}, {TRACKING_CREATIVE_SLOT} y {TRACKING_LOCATION_ID} no tiene fila en el Excel de data. Acción: cargar el valor en el Excel de data y re-ejecutar.",
   "observed": "No se ejecutó.",
   "preconditions": "- User type: Administrador BM\n- Ubicacion: Business Manager (Site Unimarc) > Page Designer\n- El componente Tabs + Carrusel de productos está publicado en el Home, con al menos 2 tabs con productos y sin targeting\n- El componente tiene configurados los atributos de tracking: promotion_id = {TRACKING_PROMOTION_ID}, promotion_name = {TRACKING_PROMOTION_NAME}, creative_name = {TRACKING_CREATIVE_NAME}, creative_slot = {TRACKING_CREATIVE_SLOT} y location_id = {TRACKING_LOCATION_ID}",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ en Desktop con la consola del navegador (dataLayer) o GA4 DebugView abiertos y preserva el log al navegar.\n2. El usuario hace clic en la shelf de un producto del carrusel.\n3. El usuario revisa el evento select_promotion registrado.",
   "test_data": "Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl; contraseña no se transcribe)\nStorefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-12",
   "expected": "El targeting queda configurado con las condiciones definidas.",
   "form_factor": "bm",
   "id": "TC-B2C77-BM-002",
   "name": "Configuracion del targeting del componente",
   "observation": "Se ejecutó sobre un componente Tabs + Product Carousel de prueba agregado al Home (dentro del primer Container), que se eliminó al terminar; el componente 'Nuestras marcas' no se tocó. Valores usados (la planilla no los declara, decisión del usuario): grupo 'Clientes MyUsuals', locale es_CL y esas fechas. En Page Designer campaña/promoción y Custom Targeting son modos excluyentes: no se pueden definir los cuatro a la vez.",
   "observed": "Page Designer permite configurar en Custom Targeting, a la vez, grupo de clientes (Clientes MyUsuals), locale (Spanish (Chile)) y programación (11/10/2026 12:00 pm – 11/30/2026 12:00 pm); tras Apply la cabecera muestra 'Visible only to', 'Visible only in' y 'Schedule'. La asignación a campaña está disponible como modo alternativo ('Add to Campaign', con la lista de campañas).",
   "preconditions": "- User type: BM Admin\n- Ubicacion: Business Manager > Page Designer",
   "screenshots": [
    {
     "caption": "Paso 1 — opcion add to campaign",
     "file": "TC-B2C77-BM-002-p01-opcion-add-to-campaign.png"
    },
    {
     "caption": "Paso 3 — targeting configurado grupo locale fechas",
     "file": "TC-B2C77-BM-002-p03-targeting-configurado-grupo-locale-fechas.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. En Page Designer, abrir la configuracion de targeting del componente.\n2. Definir campana/promocion, grupo de cliente, idioma y fechas de programacion.\n3. Guardar y publicar.",
   "test_data": "Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl; contraseña no se transcribe)\nStorefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-12",
   "expected": "Los atributos de tracking quedan configurados y disponibles para medicion de impresiones e interacciones.",
   "form_factor": "bm",
   "id": "TC-B2C77-BM-003",
   "name": "Configuracion de atributos de tracking del componente",
   "observation": "Se verificaron los valores ya configurados; no se cambiaron. El view_promotion trae items vacío.",
   "observed": "El componente 'Nuestras marcas' tiene los 5 atributos de tracking configurados (promotion_id PROMO-TABS-MARCAS, promotion_name 'Nuestras marcas exclusivas', creative_name tabs-marcas, creative_slot home_tabs, location_id home_tabs) y el storefront registra view_promotion en el dataLayer con esos mismos valores.",
   "preconditions": "- User type: BM Admin\n- Ubicacion: Business Manager > Page Designer",
   "screenshots": [
    {
     "caption": "Paso 2 — atributos de tracking del componente",
     "file": "TC-B2C77-BM-003-p02-atributos-de-tracking-del-componente.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. En Page Designer, abrir la configuracion de tracking del componente.\n2. Verificar/definir promotion_id, promotion_name, creative_name, creative_slot y location_id.\n3. Guardar y publicar.",
   "test_data": "Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl; contraseña no se transcribe)\nStorefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-12",
   "expected": "El sistema no permite guardar/publicar el componente si tiene menos de 2 tabs, o si falta el Label o el link de coleccion de alguna tab (campos requeridos). Los campos Titulo y Label de tab no aceptan (o truncan) texto que excede su limite de caracteres definido (30/12 respectivamente).",
   "form_factor": "bm",
   "id": "TC-B2C77-BM-004",
   "name": "Validaciones de Page Designer: campos requeridos y limites de caracteres",
   "observation": "Esperado: no permitir guardar/publicar con menos de 2 tabs o con una tab sin Label o sin link de colección. Obtenido: se guarda y publica en los tres casos (paso 1 y 3). Se ejecutó sobre un componente Tabs + Product Carousel de prueba agregado al Home (dentro del primer Container), que se eliminó al terminar; el componente 'Nuestras marcas' no se tocó. Valores usados (la planilla no los declara, decisión del usuario): tabs 'Como en casa'→carnes y 'Azul'→congelados.",
   "observed": "Page Designer guardó y publicó el componente sin ningún mensaje de validación con solo la Tab 1 configurada, con la Tab 2 con categoría y sin Label, y con la Tab 2 con Label y sin categoría (grupos rotulados 'Tab 1 (required)' / 'Tab 2 (required)'). Los límites sí se cumplen por truncado: título de 46 caracteres se ve cortado a 30 y label de 21 a 12 en el storefront, sin puntos suspensivos.",
   "preconditions": "- User type: BM Admin\n- Ubicacion: Business Manager > Page Designer",
   "screenshots": [
    {
     "caption": "Paso 1 — guardar con una sola tab",
     "file": "TC-B2C77-BM-004-p01-guardar-con-una-sola-tab.png"
    },
    {
     "caption": "Paso 2 — componente guardado con una sola tab",
     "file": "TC-B2C77-BM-004-p02-componente-guardado-con-una-sola-tab.png"
    },
    {
     "caption": "Paso 3 — tab 2 sin categoria",
     "file": "TC-B2C77-BM-004-p03-tab-2-sin-categoria.png"
    },
    {
     "caption": "Paso 3 — tab 2 sin label",
     "file": "TC-B2C77-BM-004-p03-tab-2-sin-label.png"
    },
    {
     "caption": "Paso 4 — titulo y label sobre el limite",
     "file": "TC-B2C77-BM-004-p04-titulo-y-label-sobre-el-limite.png"
    },
    {
     "caption": "Paso 5 — storefront trunca titulo 30 y label 12",
     "file": "TC-B2C77-BM-004-p05-storefront-trunca-titulo-30-y-label-12.png"
    }
   ],
   "status": "Rechazado",
   "steps": "1. En Page Designer, configurar el componente con solo 1 tab e intentar guardar/publicar.\n2. Verificar que el sistema impide guardar o muestra un error de validacion.\n3. Repetir dejando una tab sin Label, y luego una tab sin link de coleccion, verificando el mismo comportamiento en cada caso.\n4. Ingresar en el campo Titulo un texto de mas de 30 caracteres y en el Label de una tab un texto de mas de 12 caracteres.\n5. Verificar el comportamiento del sistema ante el exceso de caracteres (truncamiento o bloqueo de guardado).",
   "test_data": "Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl; contraseña no se transcribe)\nStorefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-12",
   "expected": "El componente aplica 12 como el maximo de productos por defecto para la tab, sin requerir que el administrador lo configure explicitamente.",
   "form_factor": "bm",
   "id": "TC-B2C77-BM-005",
   "name": "Valor por defecto del Maximo de productos (12) por tab",
   "observation": "Se ejecutó sobre un componente Tabs + Product Carousel de prueba agregado al Home (dentro del primer Container), que se eliminó al terminar; el componente 'Nuestras marcas' no se tocó. Valores usados (la planilla no los declara, decisión del usuario): tabs 'Como en casa'→carnes y 'Azul'→congelados. 'Max products per tab' es un atributo del componente, no de cada tab.",
   "observed": "Con 'Max products per tab' sin configurar (Select an Option), la tab 'carnes' del componente muestra 12 productos en el storefront.",
   "preconditions": "- User type: BM Admin\n- Ubicacion: Business Manager > Page Designer",
   "screenshots": [
    {
     "caption": "Paso 2 — max productos sin configurar",
     "file": "TC-B2C77-BM-005-p02-max-productos-sin-configurar.png"
    },
    {
     "caption": "Paso 4 — tab con 12 productos por defecto",
     "file": "TC-B2C77-BM-005-p04-tab-con-12-productos-por-defecto.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Ingresar a Business Manager > Page Designer.\n2. Agregar el componente Tabs + Carrusel y configurar una tab con su label y coleccion, dejando el campo 'Maximo de productos' sin configurar.\n3. Guardar y publicar.\n4. Verificar el valor aplicado para el maximo de productos de esa tab (en configuracion o en el render del carrusel).",
   "test_data": "Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl; contraseña no se transcribe)\nStorefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-12",
   "expected": "Todas las tabs configuradas tienen un link de categoría colección definido (Modo = Colección) y ninguna queda sin colección. La relación tab → colección queda registrada para verificarla en el storefront.",
   "form_factor": "bm",
   "id": "TC-B2C77-BM-001",
   "name": "Cada tab tiene asociada su colección en la configuración del componente",
   "observation": "El componente no tiene un campo 'Modo' (Colección) y las tabs apuntan a categorías N1 regulares, no a categorías de colección: revisar si eso cumple el CA. La columna Test data no declara tokens (se usó {TABS_COLECCIONES} = 'Nuestras marcas' de los pasos). ID renombrado por el usuario (antes duplicaba TC-B2C77-BM-006).",
   "observed": "Las 9 tabs del componente 'Nuestras marcas' tienen categoría: Amada masa→panaderia-y-pasteleria, Azul→congelados, Como en casa→carnes, D-kora→limpieza, Fundo Río alegre→frutas-y-verduras, Nubelín→bebidas-y-licores, Nuestra cocina→panaderia-y-pasteleria, Smart Clean→limpieza, Tento→congelados. Ninguna queda sin categoría.",
   "preconditions": "\"- User type: BM Admin\n- Ubicacion: Business Manager > Page Designer\n- Required data state: componente Tabs + Carrusel (T4) publicado con entre 2 y 10 tabs\"",
   "screenshots": [
    {
     "caption": "Paso 3 — tabs con su categoria",
     "file": "TC-B2C77-BM-001-p03-tabs-con-su-categoria.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. Ingresar a Business Manager > Page Designer con e_vgaldino@smu.cl / (contraseña de la cuenta administradora, no se transcribe).\n2. Abrir la página que contiene el componente Tabs + Carrusel (T4).\n3. Revisar la configuración de cada tab: Label y link de la categoría colección.\n4. Registrar la relación tab → colección de todas las tabs (Nuestras marcas).",
   "test_data": "Business Manager: https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site (cuenta administradora e_vgaldino@smu.cl; contraseña no se transcribe)\nStorefront: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
   "viewport": "1440x900"
  }
 ]
}
-->
