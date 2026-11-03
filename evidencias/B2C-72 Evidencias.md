# B2C-72 APP — Carrusel + imagen circular con título (Nativo)

| Campo | Valor |
|---|---|
| Suite | B2C-72 |
| Última actualización | 2026-10-27 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | App Unimarc v1.0.1 (DEV) |
| Dispositivo Android | Pixel 6 · Android 14 (emulador) |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-72 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 14 |
| Fuera de alcance | 3 |
| Aprobado | 2 |
| Rechazado | 2 |
| Bloqueado | 1 |
| **Total** | **22** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-27 | 16 | TC-B2C72-APP-004, TC-B2C72-APP-005, TC-B2C72-APP-008, TC-B2C72-APP-009, TC-B2C72-APP-010, TC-B2C72-APP-011, TC-B2C72-APP-012, TC-B2C72-APP-013, TC-B2C72-APP-014, TC-B2C72-APP-015, TC-B2C72-APP-016, TC-B2C72-APP-017, TC-B2C72-APP-018, TC-B2C72-APP-019, TC-B2C72-APP-020, TC-B2C72-APP-021 |
| 2026-10-26 | 6 | TC-B2C72-APP-001, TC-B2C72-APP-002, TC-B2C72-APP-003, TC-B2C72-BM-016, TC-B2C72-BM-017, TC-B2C72-BM-018 |

## Detalle por caso de prueba

### TC-B2C72-APP-001 - Verificar que el carrusel muestra el título centrado e imágenes circulares con su título

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El componente "Carrusel + imagen circular con título" está publicado en el Home

**Data utilizada**

- v1.0.1 = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App con el carrusel de imágenes circulares.

**Resultado esperado**

Se muestra el título centrado y un slider de imágenes circulares, cada una con su título debajo, con hasta 3 imágenes visibles por slide.

**Resultado obtenido**

Esperado: el título centrado y un slider de imágenes circulares, cada una con su título, con hasta 3 imágenes visibles por slide. Obtenido: el título «Categorías destacadas» está centrado y cada imagen lleva su título, pero la pantalla muestra 4 imágenes completas (Orgánico, Comida en casa, Panadería, Pastelería) y una quinta cortada por el borde (Celebraciones). Medido en pantalla: x=42, 263, 483 y 704 con 189 px de ancho y la quinta en x=924 con 156 visibles. Bug B2C-1268.

**Evidencia**

![Android · Paso 2 — home con el carrusel de imagenes circulares](<B2C-72 Evidencias/TC-B2C72-APP-001-android-p02-home-con-el-carrusel-de-imagenes-circulares.png>)

![Android · Estado final](<B2C-72 Evidencias/TC-B2C72-APP-001-android.png>)

---

### TC-B2C72-APP-002 - Verificar que el carrusel de imágenes circulares se desliza horizontalmente

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El componente "Carrusel + imagen circular con título" está publicado en el Home

**Data utilizada**

- v1.0.1 = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App con el carrusel de imágenes circulares.
3. El usuario desliza el carrusel hacia la izquierda.
4. El sistema muestra las siguientes imágenes circulares.

**Resultado esperado**

El carrusel se desplaza horizontalmente y muestra las imágenes siguientes.

**Evidencia**

![Android · Paso 2 — carrusel antes de deslizar](<B2C-72 Evidencias/TC-B2C72-APP-002-android-p02-carrusel-antes-de-deslizar.png>)

![Android · Paso 4 — carrusel tras deslizar a la izquierda](<B2C-72 Evidencias/TC-B2C72-APP-002-android-p04-carrusel-tras-deslizar-a-la-izquierda.png>)

![Android · Estado final](<B2C-72 Evidencias/TC-B2C72-APP-002-android.png>)

---

### TC-B2C72-APP-003 - Verificar que tocar una imagen circular abre la categoría configurada

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El componente "Carrusel + imagen circular con título" está publicado en el Home

**Data utilizada**

- v1.0.1 = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App con el carrusel de imágenes circulares.
3. El usuario toca una imagen circular.
4. El sistema abre la categoría destino configurada.

**Resultado esperado**

Se muestra la PLP de la categoría configurada para la imagen tocada.

**Evidencia**

![Android · Paso 2 — carrusel con la imagen a tocar](<B2C-72 Evidencias/TC-B2C72-APP-003-android-p02-carrusel-con-la-imagen-a-tocar.png>)

![Android · Paso 4 — pantalla tras tocar organico](<B2C-72 Evidencias/TC-B2C72-APP-003-android-p04-pantalla-tras-tocar-organico.png>)

![Android · Estado final](<B2C-72 Evidencias/TC-B2C72-APP-003-android.png>)

---

### TC-B2C72-APP-004 - Verificar que un elemento sin imagen, se muestra una imagen generica en el carrusel de imágenes circulares

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | tests-app/B2C-72-pendientes.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- En Page Designer (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content) el carrusel "Carrusel + imagen circular con título" está publicado en el Home con 3 o más elementos, y uno de ellos (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes) no tiene imagen circular cargada

**Data utilizada**

- v1.0.1
- https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content
- e_jmoran@smu.cl
- daunuruco+comprador@avatar-global.com
- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App.
3. El usuario revisa los elementos del carrusel y lo desliza hasta el final.

**Resultado esperado**

El elemento sin imagen una imagen generica; el resto de los elementos se muestran y el carrusel funciona normalmente. La App no muestra error ni se cierra.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: la precondición exige un elemento del carrusel sin imagen asignada en Page Designer; el carrusel publicado tiene 7 elementos y todos muestran su foto propia (capturas del recorrido completo). La automatización no modifica Business Manager. Acción: dejar un elemento sin imagen en el carrusel publicado o declarar un entorno con ese contenido.

**Evidencia**

![Android · Paso 2 — carrusel publicado primer tramo](<B2C-72 Evidencias/TC-B2C72-APP-004-android-p02-carrusel-publicado-primer-tramo.png>)

![Android · Paso 4 — carrusel publicado](<B2C-72 Evidencias/TC-B2C72-APP-004-android-p04-carrusel-publicado.png>)

---

### TC-B2C72-APP-005 - Verificar que tocar un elemento sin link no redirige ni muestra error

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | tests-app/B2C-72-pendientes.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- En Page Designer (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content) el carrusel "Carrusel + imagen circular con título" está publicado en el Home y uno de sus elementos no tiene configurado el atributo Popular Category (sin link)

**Data utilizada**

- v1.0.1
- https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content
- e_jmoran@smu.cl
- daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App.
3. El usuario toca el elemento sin link.

**Resultado esperado**

La App se mantiene en el Home: no navega a una pantalla vacía o de error ni se cierra. Si el elemento sin link se muestra, no responde al toque.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: la precondición exige un elemento sin link configurado en Page Designer, algo que no se puede comprobar sin acceso a Business Manager; en dos intentos la lectura del árbol de la app agotó el tiempo antes de tocar todos los elementos. Acción: confirmar qué elemento no tiene link o repetir con ese dato declarado.

**Evidencia**

![Android · Paso 2 — carrusel publicado en el home](<B2C-72 Evidencias/TC-B2C72-APP-005-android-p02-carrusel-publicado-en-el-home.png>)

![Android · Estado final](<B2C-72 Evidencias/TC-B2C72-APP-005-android.png>)

---

### TC-B2C72-APP-008 - Verificar que un carrusel sin elementos no se muestra en el Home

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | tests-app/B2C-72-pendientes.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- En Page Designer (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content) el carrusel "Carrusel + imagen circular con título" está publicado en el Home con título y sin ningún Round Category Tile

**Data utilizada**

- v1.0.1
- https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content
- e_jmoran@smu.cl
- daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App.
3. El usuario recorre el Home en la posición del carrusel.

**Resultado esperado**

El carrusel no se muestra: no aparece el título solo ni un área vacía; los componentes vecinos se muestran sin espacio en blanco.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: la precondición exige un carrusel sin elementos; el publicado tiene 7 elementos, por lo que no hay un carrusel vacío que verificar. Acción: publicar un carrusel sin elementos en Page Designer para la prueba.

**Evidencia**

![Android · Paso 2 — el carrusel publicado tiene elementos](<B2C-72 Evidencias/TC-B2C72-APP-008-android-p02-el-carrusel-publicado-tiene-elementos.png>)

---

### TC-B2C72-APP-009 - Verificar que un carrusel fuera de vigencia no se muestra en el Home

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- En Page Designer (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content) el carrusel "Carrusel + imagen circular con título" está publicado en el Home con programación cuya fecha de fin {FECHA_HORA_FIN_CARRUSEL_VENCIDO} ya pasó

**Data utilizada**

- v1.0.1
- https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content
- e_jmoran@smu.cl
- daunuruco+comprador@avatar-global.com
- {FECHA_HORA_FIN_CARRUSEL_VENCIDO}

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App.
3. El usuario recorre el Home en la posición del carrusel.

**Resultado esperado**

El carrusel no se muestra y no deja espacio vacío en el Home.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: las fechas de vigencia del carrusel ({FECHA_HORA_FIN_CARRUSEL_VENCIDO}, inicio y fin) están en TBD en la data y la automatización no edita Page Designer. Acción: declarar las fechas y dejar configurado el carrusel con esa vigencia.

---

### TC-B2C72-APP-010 - Verificar que el carrusel programado aparece exactamente a la hora de inicio

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- En Page Designer (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content) el carrusel "Carrusel + imagen circular con título" está publicado en el Home con programación (CA5) de inicio {FECHA_HORA_INICIO_CARRUSEL}, configurada con anticipación (al menos 1 día antes)

**Data utilizada**

- v1.0.1
- https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content
- e_jmoran@smu.cl
- daunuruco+comprador@avatar-global.com
- {FECHA_HORA_INICIO_CARRUSEL}

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. Un minuto antes de {FECHA_HORA_INICIO_CARRUSEL}, el usuario revisa el Home.
3. A la hora de {FECHA_HORA_INICIO_CARRUSEL}, el usuario vuelve a cargar el Home (cierra y abre la App o desliza para actualizar).
4. El usuario revisa el Home.

**Resultado esperado**

Antes de {FECHA_HORA_INICIO_CARRUSEL} el carrusel no se muestra; desde esa hora se muestra con su título y elementos, sin publicar nada nuevo en Page Designer.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: las fechas de vigencia del carrusel ({FECHA_HORA_FIN_CARRUSEL_VENCIDO}, inicio y fin) están en TBD en la data y la automatización no edita Page Designer. Acción: declarar las fechas y dejar configurado el carrusel con esa vigencia.

---

### TC-B2C72-APP-011 - Verificar que el carrusel programado deja de mostrarse exactamente a la hora de fin

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- En Page Designer (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content) el carrusel "Carrusel + imagen circular con título" está publicado en el Home con programación (CA5) de fin {FECHA_HORA_FIN_CARRUSEL}, configurada con anticipación

**Data utilizada**

- v1.0.1
- https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content
- e_jmoran@smu.cl
- daunuruco+comprador@avatar-global.com
- {FECHA_HORA_FIN_CARRUSEL}

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. Un minuto antes de {FECHA_HORA_FIN_CARRUSEL}, el usuario revisa el Home.
3. A la hora de {FECHA_HORA_FIN_CARRUSEL}, el usuario vuelve a cargar el Home (cierra y abre la App o desliza para actualizar).
4. El usuario revisa el Home.

**Resultado esperado**

Antes de {FECHA_HORA_FIN_CARRUSEL} el carrusel se muestra; desde esa hora deja de mostrarse y no deja espacio vacío en el Home.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: las fechas de vigencia del carrusel ({FECHA_HORA_FIN_CARRUSEL_VENCIDO}, inicio y fin) están en TBD en la data y la automatización no edita Page Designer. Acción: declarar las fechas y dejar configurado el carrusel con esa vigencia.

---

### TC-B2C72-APP-012 - Verificar que un usuario logueado ve el carrusel sin segmentación

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | tests-app/B2C-72-pendientes.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- En Page Designer (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content) el carrusel "Carrusel + imagen circular con título" está publicado en el Home sin targeting de grupo de clientes

**Data utilizada**

- v1.0.1
- https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content
- e_jmoran@smu.cl
- daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App.
3. El usuario revisa el carrusel.

**Resultado esperado**

Se muestra el carrusel con su título centrado y las mismas imágenes circulares que ve el invitado, hasta 3 por slide.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): el título está centrado y la cuenta logueada ve los mismos 7 elementos que el invitado, pero la pantalla muestra 5 imágenes completas por slide (el criterio pide hasta 3). Mismo defecto que TC-001 (B2C-1268). Bug: B2C-1363.

**Observación**

Bug B2C-1363 (relacionado con B2C-1268).

**Evidencia**

![Android · Paso 2 — home del invitado con el carrusel](<B2C-72 Evidencias/TC-B2C72-APP-012-android-p02-home-del-invitado-con-el-carrusel.png>)

![Android · Paso 4 — home de la cuenta logueada con el carrusel](<B2C-72 Evidencias/TC-B2C72-APP-012-android-p04-home-de-la-cuenta-logueada-con-el-carrusel.png>)

![Android · Estado final](<B2C-72 Evidencias/TC-B2C72-APP-012-android.png>)

---

### TC-B2C72-APP-013 - Verificar que un usuario del grupo de clientes segmentado ve el carrusel

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con daunuruco+noaddress@avatar-global.com / (contraseña de la cuenta de prueba), cuenta que pertenece al grupo de clientes {GRUPO_CLIENTES_SEGMENTO}
- En Page Designer (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content) el carrusel "Carrusel + imagen circular con título" está publicado en el Home con targeting (CA5) restringido al grupo de clientes {GRUPO_CLIENTES_SEGMENTO}

**Data utilizada**

- v1.0.1
- https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content
- e_jmoran@smu.cl
- daunuruco+noaddress@avatar-global.com
- {GRUPO_CLIENTES_SEGMENTO}

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App.
3. El usuario revisa el Home en la posición del carrusel.

**Resultado esperado**

Se muestra el carrusel segmentado con su título y elementos.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: {GRUPO_CLIENTES_SEGMENTO} y la cuenta de segmento están en TBD en la data. Acción: declarar el grupo de clientes y una cuenta que pertenezca a él.

---

### TC-B2C72-APP-014 - Verificar que un usuario fuera del grupo de clientes segmentado no ve el carrusel

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con daunuruco+segundo@avatar-global.com / (contraseña de la cuenta de prueba), cuenta que NO pertenece al grupo de clientes {GRUPO_CLIENTES_SEGMENTO}
- En Page Designer (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content) el carrusel "Carrusel + imagen circular con título" está publicado en el Home con targeting (CA5) restringido al grupo de clientes {GRUPO_CLIENTES_SEGMENTO}

**Data utilizada**

- v1.0.1
- https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content
- e_jmoran@smu.cl
- daunuruco+segundo@avatar-global.com
- {GRUPO_CLIENTES_SEGMENTO}

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App.
3. El usuario revisa el Home en la posición del carrusel.

**Resultado esperado**

El carrusel segmentado no se muestra y no deja espacio vacío en el Home.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: {GRUPO_CLIENTES_SEGMENTO} y la cuenta de segmento están en TBD en la data. Acción: declarar el grupo de clientes y una cuenta que pertenezca a él.

---

### TC-B2C72-APP-015 - Verificar que un invitado no ve el carrusel segmentado a un grupo de clientes

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App sin sesión iniciada
- En Page Designer (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content) el carrusel "Carrusel + imagen circular con título" está publicado en el Home con targeting (CA5) restringido al grupo de clientes {GRUPO_CLIENTES_SEGMENTO}

**Data utilizada**

- v1.0.1
- https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content
- e_jmoran@smu.cl
- {GRUPO_CLIENTES_SEGMENTO}

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App.
3. El usuario revisa el Home en la posición del carrusel.

**Resultado esperado**

El carrusel segmentado no se muestra al invitado y no deja espacio vacío en el Home.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: {GRUPO_CLIENTES_SEGMENTO} y la cuenta de segmento están en TBD en la data. Acción: declarar el grupo de clientes y una cuenta que pertenezca a él.

---

### TC-B2C72-BM-016 - Verificar que un cambio de contenido publicado en Page Designer se refleja en la App

| Campo | Valor |
|---|---|
| Estado | Fuera de alcance |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- En Page Designer (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content) el carrusel "Carrusel + imagen circular con título" está publicado en el Home

**Data utilizada**

- v1.0.1
- https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content
- e_jmoran@smu.cl
- daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App.
3. El usuario anota el título del carrusel y el nombre e imagen del primer elemento.
4. El administrador ingresa a https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content con e_jmoran@smu.cl / (contraseña de la cuenta de prueba), cambia el título del carrusel, el Custom display name y la imagen del primer elemento, y publica la página.
5. El usuario vuelve a cargar el Home (cierra y abre la App o desliza para actualizar).
6. El usuario revisa el carrusel.

**Resultado esperado**

La App muestra el nuevo título del carrusel y el primer elemento con el nuevo nombre e imagen, sin instalar una nueva versión; el resto de los elementos no cambia.

**Resultado obtenido**

Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: es un caso de Business Manager (Page Designer) y el login de la app pide RUT, que el Excel de data no trae Se certifica en la planilla de Business Manager, no en la de la app. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C72-BM-017 - Verificar que un elemento agregado o eliminado en Page Designer se refleja en la App

| Campo | Valor |
|---|---|
| Estado | Fuera de alcance |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- En Page Designer (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content) el carrusel "Carrusel + imagen circular con título" está publicado en el Home con 4 o más elementos

**Data utilizada**

- v1.0.1
- https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content
- e_jmoran@smu.cl
- daunuruco+comprador@avatar-global.com
- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App.
3. El usuario anota los elementos del carrusel, en orden.
4. El administrador ingresa a https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content con e_jmoran@smu.cl / (contraseña de la cuenta de prueba), agrega un elemento que apunta a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes, elimina otro y publica la página.
5. El usuario vuelve a cargar el Home (cierra y abre la App o desliza para actualizar).
6. El usuario recorre el carrusel y toca el elemento nuevo.

**Resultado esperado**

El carrusel muestra el elemento nuevo y ya no muestra el eliminado; al tocar el elemento nuevo se abre la PLP de https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes.

**Resultado obtenido**

Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: es un caso de Business Manager (Page Designer) y el login de la app pide RUT, que el Excel de data no trae Se certifica en la planilla de Business Manager, no en la de la app. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C72-APP-016 - Verificar que un usuario del nivel de cliente segmentado ve el carrusel

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado_x000D_
- Viewport: App iOS/Android_x000D_
- Ubicacion: Home de la App_x000D_
- Sesión iniciada con {COMPRADOR_NIVEL_USER} / (contraseña de la cuenta de prueba), cuenta con el nivel de cliente {NIVEL_CLIENTE}, que pertenece al grupo de clientes {GRUPO_CLIENTES_NIVEL}_x000D_
- En Page Designer (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content) el carrusel "Carrusel + imagen circular con título" está publicado en el Home con targeting (CA5) restringido al grupo de clientes {GRUPO_CLIENTES_NIVEL}

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App.
3. El usuario revisa el Home en la posición del carrusel.

**Resultado esperado**

Se muestra el carrusel segmentado con su título y elementos.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: las cuentas y grupos por nivel o región no tienen valor en la data. Acción: declarar las cuentas y los grupos de nivel/región.

---

### TC-B2C72-APP-017 - Verificar que un usuario de otro nivel de cliente no ve el carrusel segmentado por nivel

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

"- User type: Logueado

- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con {COMPRADOR_OTRO_NIVEL_USER} / (contraseña de la cuenta de prueba), cuenta con el nivel de cliente {NIVEL_CLIENTE_OTRO}, que NO pertenece al grupo de clientes {GRUPO_CLIENTES_NIVEL}
- En Page Designer (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content) el carrusel ""Carrusel + imagen circular con título"" está publicado en el Home con targeting (CA5) restringido al grupo de clientes {GRUPO_CLIENTES_NIVEL}"

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App.
3. El usuario revisa el Home en la posición del carrusel.

**Resultado esperado**

El carrusel segmentado no se muestra y no deja espacio vacío en el Home.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: las cuentas y grupos por nivel o región no tienen valor en la data. Acción: declarar las cuentas y los grupos de nivel/región.

---

### TC-B2C72-APP-018 - Verificar que un usuario del segmento de región y comuna configurado ve el carrusel

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado_x000D_
- Viewport: App iOS/Android_x000D_
- Ubicacion: Home de la App_x000D_
- Sesión iniciada con {COMPRADOR_REGION_USER} / (contraseña de la cuenta de prueba), cuenta que pertenece al grupo de clientes {GRUPO_CLIENTES_REGION_COMUNA} ({REGION} / {COMUNA}) antes de iniciar sesión_x000D_
- En Page Designer (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content) el carrusel "Carrusel + imagen circular con título" está publicado en el Home con targeting (CA5) restringido al grupo de clientes {GRUPO_CLIENTES_REGION_COMUNA}

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App.
3. El usuario revisa el Home en la posición del carrusel.

**Resultado esperado**

Se muestra el carrusel segmentado con su título y elementos.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: las cuentas y grupos por nivel o región no tienen valor en la data. Acción: declarar las cuentas y los grupos de nivel/región.

---

### TC-B2C72-APP-019 - Verificar que un usuario de otra región y comuna no ve el carrusel segmentado por región y comuna

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

"- User type: Logueado

- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con {COMPRADOR_OTRA_REGION_USER} / (contraseña de la cuenta de prueba), cuenta que NO pertenece al grupo de clientes {GRUPO_CLIENTES_REGION_COMUNA}
- En Page Designer (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content) el carrusel ""Carrusel + imagen circular con título"" está publicado en el Home con targeting (CA5) restringido al grupo de clientes {GRUPO_CLIENTES_REGION_COMUNA}"

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App.
3. El usuario revisa el Home en la posición del carrusel.

**Resultado esperado**

El carrusel segmentado no se muestra y no deja espacio vacío en el Home.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: las cuentas y grupos por nivel o región no tienen valor en la data. Acción: declarar las cuentas y los grupos de nivel/región.

---

### TC-B2C72-APP-020 - Verificar que la impresión del carrusel envía el evento de tracking con los atributos configurados en Page Designer

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

"- User type: Guest

- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App sin sesión iniciada
- En Page Designer (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content) el carrusel ""Carrusel + imagen circular con título"" está publicado en el Home con los atributos de tracking (CA6) configurados: promotion_id = {PROMOTION_ID}, promotion_name = {PROMOTION_NAME}, creative_name = {CREATIVE_NAME}, creative_slot = {CREATIVE_SLOT}, location_id = {LOCATION_ID}
- La App v1.0.1 está conectada a la herramienta de analítica en modo depuración ({HERRAMIENTA_TRACKING}) para ver los eventos en tiempo real"

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App.
3. El usuario se desplaza hasta que el carrusel queda visible en pantalla.
4. El sistema registra el evento de impresión del carrusel.
5. El usuario revisa el evento en {HERRAMIENTA_TRACKING}.

**Resultado esperado**

Se registra el evento de impresión con los 5 atributos y sus valores son los configurados en Page Designer: promotion_id = {PROMOTION_ID}, promotion_name = {PROMOTION_NAME}, creative_name = {CREATIVE_NAME}, creative_slot = {CREATIVE_SLOT} y location_id = {LOCATION_ID}. Ningún atributo llega vacío, "undefined" ni "null".

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: {HERRAMIENTA_TRACKING} y los atributos de seguimiento no tienen valor en la data. Acción: declarar la herramienta de tracking y los atributos a verificar.

---

### TC-B2C72-APP-021 - Verificar que tocar un elemento del carrusel envía el evento de clic con los atributos configurados en Page Designer

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

"- User type: Guest

- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App sin sesión iniciada
- En Page Designer (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content) el carrusel ""Carrusel + imagen circular con título"" está publicado en el Home con los atributos de tracking (CA6) configurados: promotion_id = {PROMOTION_ID}, promotion_name = {PROMOTION_NAME}, creative_name = {CREATIVE_NAME}, creative_slot = {CREATIVE_SLOT}, location_id = {LOCATION_ID}
- La App v1.0.1 está conectada a la herramienta de analítica en modo depuración ({HERRAMIENTA_TRACKING}) para ver los eventos en tiempo real"

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App.
3. El usuario toca una imagen circular del carrusel.
4. El sistema registra el evento de clic y abre la PLP de la categoría configurada.
5. El usuario revisa el evento en {HERRAMIENTA_TRACKING}.

**Resultado esperado**

Se registra un evento de clic con los 5 atributos y sus valores son los configurados en Page Designer: promotion_id = {PROMOTION_ID}, promotion_name = {PROMOTION_NAME}, creative_name = {CREATIVE_NAME}, creative_slot = {CREATIVE_SLOT} y location_id = {LOCATION_ID}. El evento se registra aunque la App cambie de pantalla y se abre la PLP de la categoría configurada (CA7).

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: {HERRAMIENTA_TRACKING} y los atributos de seguimiento no tienen valor en la data. Acción: declarar la herramienta de tracking y los atributos a verificar.

---

### TC-B2C72-BM-018 - Verificar que los valores de tracking modificados en Page Designer se reflejan en los eventos de la App

| Campo | Valor |
|---|---|
| Estado | Fuera de alcance |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

"- User type: Guest

- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App sin sesión iniciada
- En Page Designer (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content) el carrusel ""Carrusel + imagen circular con título"" está publicado en el Home con los atributos de tracking (CA6) configurados: promotion_id = {PROMOTION_ID}, promotion_name = {PROMOTION_NAME}, creative_name = {CREATIVE_NAME}, creative_slot = {CREATIVE_SLOT}, location_id = {LOCATION_ID}
- La App v1.0.1 está conectada a la herramienta de analítica en modo depuración ({HERRAMIENTA_TRACKING}) para ver los eventos en tiempo real"

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App y registra el evento de impresión con los valores actuales.
3. El administrador ingresa a https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content con e_jmoran@smu.cl / (contraseña de la cuenta de prueba), cambia los 5 atributos de tracking a {PROMOTION_ID_NUEVO}, {PROMOTION_NAME_NUEVO}, {CREATIVE_NAME_NUEVO}, {CREATIVE_SLOT_NUEVO} y {LOCATION_ID_NUEVO}, y publica la página.
4. El usuario vuelve a cargar el Home (cierra y abre la App o desliza para actualizar).
5. El usuario toca una imagen circular del carrusel.
6. El usuario revisa en {HERRAMIENTA_TRACKING} los eventos de impresión y clic.

**Resultado esperado**

Los eventos de impresión y clic posteriores a la publicación llevan los nuevos valores ({PROMOTION_ID_NUEVO}, {PROMOTION_NAME_NUEVO}, {CREATIVE_NAME_NUEVO}, {CREATIVE_SLOT_NUEVO}, {LOCATION_ID_NUEVO}), sin instalar una nueva versión de la App.

**Resultado obtenido**

Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: es un caso de Business Manager (Page Designer): necesita cambiar los valores de tracking del carrusel y ver los eventos que envía la app, sin herramienta declarada en el Excel de data Se certifica en la planilla de Business Manager, no en la de la app. Re-verificado en vivo el 2026-10-21.

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "devices": {
   "android": "Pixel 6 · Android 14 (emulador)"
  },
  "environment": "App Unimarc v1.0.1 (DEV)",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-72",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-72 APP Test Cases.xlsx",
  "title": "B2C-72 APP — Carrusel + imagen circular con título (Nativo)",
  "updated_at": "2026-10-27"
 },
 "history": {
  "2026-10-26": [
   "TC-B2C72-APP-001",
   "TC-B2C72-APP-002",
   "TC-B2C72-APP-003",
   "TC-B2C72-BM-016",
   "TC-B2C72-BM-017",
   "TC-B2C72-BM-018"
  ],
  "2026-10-27": [
   "TC-B2C72-APP-004",
   "TC-B2C72-APP-005",
   "TC-B2C72-APP-008",
   "TC-B2C72-APP-009",
   "TC-B2C72-APP-010",
   "TC-B2C72-APP-011",
   "TC-B2C72-APP-012",
   "TC-B2C72-APP-013",
   "TC-B2C72-APP-014",
   "TC-B2C72-APP-015",
   "TC-B2C72-APP-016",
   "TC-B2C72-APP-017",
   "TC-B2C72-APP-018",
   "TC-B2C72-APP-019",
   "TC-B2C72-APP-020",
   "TC-B2C72-APP-021"
  ]
 },
 "results": [
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se muestra el título centrado y un slider de imágenes circulares, cada una con su título debajo, con hasta 3 imágenes visibles por slide.",
   "form_factor": "app",
   "id": "TC-B2C72-APP-001",
   "name": "Verificar que el carrusel muestra el título centrado e imágenes circulares con su título",
   "observed": "Esperado: el título centrado y un slider de imágenes circulares, cada una con su título, con hasta 3 imágenes visibles por slide. Obtenido: el título «Categorías destacadas» está centrado y cada imagen lleva su título, pero la pantalla muestra 4 imágenes completas (Orgánico, Comida en casa, Panadería, Pastelería) y una quinta cortada por el borde (Celebraciones). Medido en pantalla: x=42, 263, 483 y 704 con 189 px de ancho y la quinta en x=924 con 156 visibles. Bug B2C-1268.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El componente \"Carrusel + imagen circular con título\" está publicado en el Home",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home con el carrusel de imagenes circulares",
     "file": "TC-B2C72-APP-001-android-p02-home-con-el-carrusel-de-imagenes-circulares.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C72-APP-001-android.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App con el carrusel de imágenes circulares.",
   "test_data": "- v1.0.1 = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El carrusel se desplaza horizontalmente y muestra las imágenes siguientes.",
   "form_factor": "app",
   "id": "TC-B2C72-APP-002",
   "name": "Verificar que el carrusel de imágenes circulares se desliza horizontalmente",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El componente \"Carrusel + imagen circular con título\" está publicado en el Home",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — carrusel antes de deslizar",
     "file": "TC-B2C72-APP-002-android-p02-carrusel-antes-de-deslizar.png"
    },
    {
     "caption": "Android · Paso 4 — carrusel tras deslizar a la izquierda",
     "file": "TC-B2C72-APP-002-android-p04-carrusel-tras-deslizar-a-la-izquierda.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C72-APP-002-android.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App con el carrusel de imágenes circulares.\n3. El usuario desliza el carrusel hacia la izquierda.\n4. El sistema muestra las siguientes imágenes circulares.",
   "test_data": "- v1.0.1 = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se muestra la PLP de la categoría configurada para la imagen tocada.",
   "form_factor": "app",
   "id": "TC-B2C72-APP-003",
   "name": "Verificar que tocar una imagen circular abre la categoría configurada",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El componente \"Carrusel + imagen circular con título\" está publicado en el Home",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — carrusel con la imagen a tocar",
     "file": "TC-B2C72-APP-003-android-p02-carrusel-con-la-imagen-a-tocar.png"
    },
    {
     "caption": "Android · Paso 4 — pantalla tras tocar organico",
     "file": "TC-B2C72-APP-003-android-p04-pantalla-tras-tocar-organico.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C72-APP-003-android.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App con el carrusel de imágenes circulares.\n3. El usuario toca una imagen circular.\n4. El sistema abre la categoría destino configurada.",
   "test_data": "- v1.0.1 = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "El elemento sin imagen una imagen generica; el resto de los elementos se muestran y el carrusel funciona normalmente. La App no muestra error ni se cierra.",
   "form_factor": "app",
   "id": "TC-B2C72-APP-004",
   "name": "Verificar que un elemento sin imagen, se muestra una imagen generica en el carrusel de imágenes circulares",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: la precondición exige un elemento del carrusel sin imagen asignada en Page Designer; el carrusel publicado tiene 7 elementos y todos muestran su foto propia (capturas del recorrido completo). La automatización no modifica Business Manager. Acción: dejar un elemento sin imagen en el carrusel publicado o declarar un entorno con ese contenido.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- En Page Designer (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content) el carrusel \"Carrusel + imagen circular con título\" está publicado en el Home con 3 o más elementos, y uno de ellos (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes) no tiene imagen circular cargada",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — carrusel publicado primer tramo",
     "file": "TC-B2C72-APP-004-android-p02-carrusel-publicado-primer-tramo.png"
    },
    {
     "caption": "Android · Paso 4 — carrusel publicado",
     "file": "TC-B2C72-APP-004-android-p04-carrusel-publicado.png"
    }
   ],
   "spec": "tests-app/B2C-72-pendientes.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App.\n3. El usuario revisa los elementos del carrusel y lo desliza hasta el final.",
   "test_data": "- v1.0.1\n- https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content\n- e_jmoran@smu.cl\n- daunuruco+comprador@avatar-global.com\n- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "La App se mantiene en el Home: no navega a una pantalla vacía o de error ni se cierra. Si el elemento sin link se muestra, no responde al toque.",
   "form_factor": "app",
   "id": "TC-B2C72-APP-005",
   "name": "Verificar que tocar un elemento sin link no redirige ni muestra error",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: la precondición exige un elemento sin link configurado en Page Designer, algo que no se puede comprobar sin acceso a Business Manager; en dos intentos la lectura del árbol de la app agotó el tiempo antes de tocar todos los elementos. Acción: confirmar qué elemento no tiene link o repetir con ese dato declarado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- En Page Designer (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content) el carrusel \"Carrusel + imagen circular con título\" está publicado en el Home y uno de sus elementos no tiene configurado el atributo Popular Category (sin link)",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — carrusel publicado en el home",
     "file": "TC-B2C72-APP-005-android-p02-carrusel-publicado-en-el-home.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C72-APP-005-android.png"
    }
   ],
   "spec": "tests-app/B2C-72-pendientes.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App.\n3. El usuario toca el elemento sin link.",
   "test_data": "- v1.0.1\n- https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content\n- e_jmoran@smu.cl\n- daunuruco+comprador@avatar-global.com"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "El carrusel no se muestra: no aparece el título solo ni un área vacía; los componentes vecinos se muestran sin espacio en blanco.",
   "form_factor": "app",
   "id": "TC-B2C72-APP-008",
   "name": "Verificar que un carrusel sin elementos no se muestra en el Home",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: la precondición exige un carrusel sin elementos; el publicado tiene 7 elementos, por lo que no hay un carrusel vacío que verificar. Acción: publicar un carrusel sin elementos en Page Designer para la prueba.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- En Page Designer (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content) el carrusel \"Carrusel + imagen circular con título\" está publicado en el Home con título y sin ningún Round Category Tile",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — el carrusel publicado tiene elementos",
     "file": "TC-B2C72-APP-008-android-p02-el-carrusel-publicado-tiene-elementos.png"
    }
   ],
   "spec": "tests-app/B2C-72-pendientes.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App.\n3. El usuario recorre el Home en la posición del carrusel.",
   "test_data": "- v1.0.1\n- https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content\n- e_jmoran@smu.cl\n- daunuruco+comprador@avatar-global.com"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "El carrusel no se muestra y no deja espacio vacío en el Home.",
   "form_factor": "app",
   "id": "TC-B2C72-APP-009",
   "name": "Verificar que un carrusel fuera de vigencia no se muestra en el Home",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: las fechas de vigencia del carrusel ({FECHA_HORA_FIN_CARRUSEL_VENCIDO}, inicio y fin) están en TBD en la data y la automatización no edita Page Designer. Acción: declarar las fechas y dejar configurado el carrusel con esa vigencia.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- En Page Designer (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content) el carrusel \"Carrusel + imagen circular con título\" está publicado en el Home con programación cuya fecha de fin {FECHA_HORA_FIN_CARRUSEL_VENCIDO} ya pasó",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App.\n3. El usuario recorre el Home en la posición del carrusel.",
   "test_data": "- v1.0.1\n- https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content\n- e_jmoran@smu.cl\n- daunuruco+comprador@avatar-global.com\n- {FECHA_HORA_FIN_CARRUSEL_VENCIDO}"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Antes de {FECHA_HORA_INICIO_CARRUSEL} el carrusel no se muestra; desde esa hora se muestra con su título y elementos, sin publicar nada nuevo en Page Designer.",
   "form_factor": "app",
   "id": "TC-B2C72-APP-010",
   "name": "Verificar que el carrusel programado aparece exactamente a la hora de inicio",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: las fechas de vigencia del carrusel ({FECHA_HORA_FIN_CARRUSEL_VENCIDO}, inicio y fin) están en TBD en la data y la automatización no edita Page Designer. Acción: declarar las fechas y dejar configurado el carrusel con esa vigencia.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- En Page Designer (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content) el carrusel \"Carrusel + imagen circular con título\" está publicado en el Home con programación (CA5) de inicio {FECHA_HORA_INICIO_CARRUSEL}, configurada con anticipación (al menos 1 día antes)",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. Un minuto antes de {FECHA_HORA_INICIO_CARRUSEL}, el usuario revisa el Home.\n3. A la hora de {FECHA_HORA_INICIO_CARRUSEL}, el usuario vuelve a cargar el Home (cierra y abre la App o desliza para actualizar).\n4. El usuario revisa el Home.",
   "test_data": "- v1.0.1\n- https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content\n- e_jmoran@smu.cl\n- daunuruco+comprador@avatar-global.com\n- {FECHA_HORA_INICIO_CARRUSEL}"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Antes de {FECHA_HORA_FIN_CARRUSEL} el carrusel se muestra; desde esa hora deja de mostrarse y no deja espacio vacío en el Home.",
   "form_factor": "app",
   "id": "TC-B2C72-APP-011",
   "name": "Verificar que el carrusel programado deja de mostrarse exactamente a la hora de fin",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: las fechas de vigencia del carrusel ({FECHA_HORA_FIN_CARRUSEL_VENCIDO}, inicio y fin) están en TBD en la data y la automatización no edita Page Designer. Acción: declarar las fechas y dejar configurado el carrusel con esa vigencia.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- En Page Designer (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content) el carrusel \"Carrusel + imagen circular con título\" está publicado en el Home con programación (CA5) de fin {FECHA_HORA_FIN_CARRUSEL}, configurada con anticipación",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. Un minuto antes de {FECHA_HORA_FIN_CARRUSEL}, el usuario revisa el Home.\n3. A la hora de {FECHA_HORA_FIN_CARRUSEL}, el usuario vuelve a cargar el Home (cierra y abre la App o desliza para actualizar).\n4. El usuario revisa el Home.",
   "test_data": "- v1.0.1\n- https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content\n- e_jmoran@smu.cl\n- daunuruco+comprador@avatar-global.com\n- {FECHA_HORA_FIN_CARRUSEL}"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Se muestra el carrusel con su título centrado y las mismas imágenes circulares que ve el invitado, hasta 3 por slide.",
   "form_factor": "app",
   "id": "TC-B2C72-APP-012",
   "name": "Verificar que un usuario logueado ve el carrusel sin segmentación",
   "observation": "Bug B2C-1363 (relacionado con B2C-1268).",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): el título está centrado y la cuenta logueada ve los mismos 7 elementos que el invitado, pero la pantalla muestra 5 imágenes completas por slide (el criterio pide hasta 3). Mismo defecto que TC-001 (B2C-1268). Bug: B2C-1363.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- En Page Designer (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content) el carrusel \"Carrusel + imagen circular con título\" está publicado en el Home sin targeting de grupo de clientes",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home del invitado con el carrusel",
     "file": "TC-B2C72-APP-012-android-p02-home-del-invitado-con-el-carrusel.png"
    },
    {
     "caption": "Android · Paso 4 — home de la cuenta logueada con el carrusel",
     "file": "TC-B2C72-APP-012-android-p04-home-de-la-cuenta-logueada-con-el-carrusel.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C72-APP-012-android.png"
    }
   ],
   "spec": "tests-app/B2C-72-pendientes.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App.\n3. El usuario revisa el carrusel.",
   "test_data": "- v1.0.1\n- https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content\n- e_jmoran@smu.cl\n- daunuruco+comprador@avatar-global.com"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Se muestra el carrusel segmentado con su título y elementos.",
   "form_factor": "app",
   "id": "TC-B2C72-APP-013",
   "name": "Verificar que un usuario del grupo de clientes segmentado ve el carrusel",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: {GRUPO_CLIENTES_SEGMENTO} y la cuenta de segmento están en TBD en la data. Acción: declarar el grupo de clientes y una cuenta que pertenezca a él.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con daunuruco+noaddress@avatar-global.com / (contraseña de la cuenta de prueba), cuenta que pertenece al grupo de clientes {GRUPO_CLIENTES_SEGMENTO}\n- En Page Designer (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content) el carrusel \"Carrusel + imagen circular con título\" está publicado en el Home con targeting (CA5) restringido al grupo de clientes {GRUPO_CLIENTES_SEGMENTO}",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App.\n3. El usuario revisa el Home en la posición del carrusel.",
   "test_data": "- v1.0.1\n- https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content\n- e_jmoran@smu.cl\n- daunuruco+noaddress@avatar-global.com\n- {GRUPO_CLIENTES_SEGMENTO}"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "El carrusel segmentado no se muestra y no deja espacio vacío en el Home.",
   "form_factor": "app",
   "id": "TC-B2C72-APP-014",
   "name": "Verificar que un usuario fuera del grupo de clientes segmentado no ve el carrusel",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: {GRUPO_CLIENTES_SEGMENTO} y la cuenta de segmento están en TBD en la data. Acción: declarar el grupo de clientes y una cuenta que pertenezca a él.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con daunuruco+segundo@avatar-global.com / (contraseña de la cuenta de prueba), cuenta que NO pertenece al grupo de clientes {GRUPO_CLIENTES_SEGMENTO}\n- En Page Designer (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content) el carrusel \"Carrusel + imagen circular con título\" está publicado en el Home con targeting (CA5) restringido al grupo de clientes {GRUPO_CLIENTES_SEGMENTO}",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App.\n3. El usuario revisa el Home en la posición del carrusel.",
   "test_data": "- v1.0.1\n- https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content\n- e_jmoran@smu.cl\n- daunuruco+segundo@avatar-global.com\n- {GRUPO_CLIENTES_SEGMENTO}"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "El carrusel segmentado no se muestra al invitado y no deja espacio vacío en el Home.",
   "form_factor": "app",
   "id": "TC-B2C72-APP-015",
   "name": "Verificar que un invitado no ve el carrusel segmentado a un grupo de clientes",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: {GRUPO_CLIENTES_SEGMENTO} y la cuenta de segmento están en TBD en la data. Acción: declarar el grupo de clientes y una cuenta que pertenezca a él.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App sin sesión iniciada\n- En Page Designer (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content) el carrusel \"Carrusel + imagen circular con título\" está publicado en el Home con targeting (CA5) restringido al grupo de clientes {GRUPO_CLIENTES_SEGMENTO}",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App.\n3. El usuario revisa el Home en la posición del carrusel.",
   "test_data": "- v1.0.1\n- https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content\n- e_jmoran@smu.cl\n- {GRUPO_CLIENTES_SEGMENTO}"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "La App muestra el nuevo título del carrusel y el primer elemento con el nuevo nombre e imagen, sin instalar una nueva versión; el resto de los elementos no cambia.",
   "form_factor": "app",
   "id": "TC-B2C72-BM-016",
   "name": "Verificar que un cambio de contenido publicado en Page Designer se refleja en la App",
   "observed": "Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: es un caso de Business Manager (Page Designer) y el login de la app pide RUT, que el Excel de data no trae Se certifica en la planilla de Business Manager, no en la de la app. Re-verificado en vivo el 2026-10-21.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- En Page Designer (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content) el carrusel \"Carrusel + imagen circular con título\" está publicado en el Home",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Fuera de alcance",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App.\n3. El usuario anota el título del carrusel y el nombre e imagen del primer elemento.\n4. El administrador ingresa a https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content con e_jmoran@smu.cl / (contraseña de la cuenta de prueba), cambia el título del carrusel, el Custom display name y la imagen del primer elemento, y publica la página.\n5. El usuario vuelve a cargar el Home (cierra y abre la App o desliza para actualizar).\n6. El usuario revisa el carrusel.",
   "test_data": "- v1.0.1\n- https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content\n- e_jmoran@smu.cl\n- daunuruco+comprador@avatar-global.com"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El carrusel muestra el elemento nuevo y ya no muestra el eliminado; al tocar el elemento nuevo se abre la PLP de https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes.",
   "form_factor": "app",
   "id": "TC-B2C72-BM-017",
   "name": "Verificar que un elemento agregado o eliminado en Page Designer se refleja en la App",
   "observed": "Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: es un caso de Business Manager (Page Designer) y el login de la app pide RUT, que el Excel de data no trae Se certifica en la planilla de Business Manager, no en la de la app. Re-verificado en vivo el 2026-10-21.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- En Page Designer (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content) el carrusel \"Carrusel + imagen circular con título\" está publicado en el Home con 4 o más elementos",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Fuera de alcance",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App.\n3. El usuario anota los elementos del carrusel, en orden.\n4. El administrador ingresa a https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content con e_jmoran@smu.cl / (contraseña de la cuenta de prueba), agrega un elemento que apunta a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes, elimina otro y publica la página.\n5. El usuario vuelve a cargar el Home (cierra y abre la App o desliza para actualizar).\n6. El usuario recorre el carrusel y toca el elemento nuevo.",
   "test_data": "- v1.0.1\n- https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content\n- e_jmoran@smu.cl\n- daunuruco+comprador@avatar-global.com\n- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Se muestra el carrusel segmentado con su título y elementos.",
   "form_factor": "app",
   "id": "TC-B2C72-APP-016",
   "name": "Verificar que un usuario del nivel de cliente segmentado ve el carrusel",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: las cuentas y grupos por nivel o región no tienen valor en la data. Acción: declarar las cuentas y los grupos de nivel/región.",
   "platform": "Android",
   "preconditions": "- User type: Logueado_x000D_\n- Viewport: App iOS/Android_x000D_\n- Ubicacion: Home de la App_x000D_\n- Sesión iniciada con {COMPRADOR_NIVEL_USER} / (contraseña de la cuenta de prueba), cuenta con el nivel de cliente {NIVEL_CLIENTE}, que pertenece al grupo de clientes {GRUPO_CLIENTES_NIVEL}_x000D_\n- En Page Designer (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content) el carrusel \"Carrusel + imagen circular con título\" está publicado en el Home con targeting (CA5) restringido al grupo de clientes {GRUPO_CLIENTES_NIVEL}",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App.\n3. El usuario revisa el Home en la posición del carrusel."
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "El carrusel segmentado no se muestra y no deja espacio vacío en el Home.",
   "form_factor": "app",
   "id": "TC-B2C72-APP-017",
   "name": "Verificar que un usuario de otro nivel de cliente no ve el carrusel segmentado por nivel",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: las cuentas y grupos por nivel o región no tienen valor en la data. Acción: declarar las cuentas y los grupos de nivel/región.",
   "platform": "Android",
   "preconditions": "\"- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con {COMPRADOR_OTRO_NIVEL_USER} / (contraseña de la cuenta de prueba), cuenta con el nivel de cliente {NIVEL_CLIENTE_OTRO}, que NO pertenece al grupo de clientes {GRUPO_CLIENTES_NIVEL}\n- En Page Designer (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content) el carrusel \"\"Carrusel + imagen circular con título\"\" está publicado en el Home con targeting (CA5) restringido al grupo de clientes {GRUPO_CLIENTES_NIVEL}\"",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App.\n3. El usuario revisa el Home en la posición del carrusel."
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Se muestra el carrusel segmentado con su título y elementos.",
   "form_factor": "app",
   "id": "TC-B2C72-APP-018",
   "name": "Verificar que un usuario del segmento de región y comuna configurado ve el carrusel",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: las cuentas y grupos por nivel o región no tienen valor en la data. Acción: declarar las cuentas y los grupos de nivel/región.",
   "platform": "Android",
   "preconditions": "- User type: Logueado_x000D_\n- Viewport: App iOS/Android_x000D_\n- Ubicacion: Home de la App_x000D_\n- Sesión iniciada con {COMPRADOR_REGION_USER} / (contraseña de la cuenta de prueba), cuenta que pertenece al grupo de clientes {GRUPO_CLIENTES_REGION_COMUNA} ({REGION} / {COMUNA}) antes de iniciar sesión_x000D_\n- En Page Designer (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content) el carrusel \"Carrusel + imagen circular con título\" está publicado en el Home con targeting (CA5) restringido al grupo de clientes {GRUPO_CLIENTES_REGION_COMUNA}",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App.\n3. El usuario revisa el Home en la posición del carrusel."
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "El carrusel segmentado no se muestra y no deja espacio vacío en el Home.",
   "form_factor": "app",
   "id": "TC-B2C72-APP-019",
   "name": "Verificar que un usuario de otra región y comuna no ve el carrusel segmentado por región y comuna",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: las cuentas y grupos por nivel o región no tienen valor en la data. Acción: declarar las cuentas y los grupos de nivel/región.",
   "platform": "Android",
   "preconditions": "\"- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con {COMPRADOR_OTRA_REGION_USER} / (contraseña de la cuenta de prueba), cuenta que NO pertenece al grupo de clientes {GRUPO_CLIENTES_REGION_COMUNA}\n- En Page Designer (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content) el carrusel \"\"Carrusel + imagen circular con título\"\" está publicado en el Home con targeting (CA5) restringido al grupo de clientes {GRUPO_CLIENTES_REGION_COMUNA}\"",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App.\n3. El usuario revisa el Home en la posición del carrusel."
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Se registra el evento de impresión con los 5 atributos y sus valores son los configurados en Page Designer: promotion_id = {PROMOTION_ID}, promotion_name = {PROMOTION_NAME}, creative_name = {CREATIVE_NAME}, creative_slot = {CREATIVE_SLOT} y location_id = {LOCATION_ID}. Ningún atributo llega vacío, \"undefined\" ni \"null\".",
   "form_factor": "app",
   "id": "TC-B2C72-APP-020",
   "name": "Verificar que la impresión del carrusel envía el evento de tracking con los atributos configurados en Page Designer",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: {HERRAMIENTA_TRACKING} y los atributos de seguimiento no tienen valor en la data. Acción: declarar la herramienta de tracking y los atributos a verificar.",
   "platform": "Android",
   "preconditions": "\"- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App sin sesión iniciada\n- En Page Designer (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content) el carrusel \"\"Carrusel + imagen circular con título\"\" está publicado en el Home con los atributos de tracking (CA6) configurados: promotion_id = {PROMOTION_ID}, promotion_name = {PROMOTION_NAME}, creative_name = {CREATIVE_NAME}, creative_slot = {CREATIVE_SLOT}, location_id = {LOCATION_ID}\n- La App v1.0.1 está conectada a la herramienta de analítica en modo depuración ({HERRAMIENTA_TRACKING}) para ver los eventos en tiempo real\"",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App.\n3. El usuario se desplaza hasta que el carrusel queda visible en pantalla.\n4. El sistema registra el evento de impresión del carrusel.\n5. El usuario revisa el evento en {HERRAMIENTA_TRACKING}."
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Se registra un evento de clic con los 5 atributos y sus valores son los configurados en Page Designer: promotion_id = {PROMOTION_ID}, promotion_name = {PROMOTION_NAME}, creative_name = {CREATIVE_NAME}, creative_slot = {CREATIVE_SLOT} y location_id = {LOCATION_ID}. El evento se registra aunque la App cambie de pantalla y se abre la PLP de la categoría configurada (CA7).",
   "form_factor": "app",
   "id": "TC-B2C72-APP-021",
   "name": "Verificar que tocar un elemento del carrusel envía el evento de clic con los atributos configurados en Page Designer",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: {HERRAMIENTA_TRACKING} y los atributos de seguimiento no tienen valor en la data. Acción: declarar la herramienta de tracking y los atributos a verificar.",
   "platform": "Android",
   "preconditions": "\"- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App sin sesión iniciada\n- En Page Designer (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content) el carrusel \"\"Carrusel + imagen circular con título\"\" está publicado en el Home con los atributos de tracking (CA6) configurados: promotion_id = {PROMOTION_ID}, promotion_name = {PROMOTION_NAME}, creative_name = {CREATIVE_NAME}, creative_slot = {CREATIVE_SLOT}, location_id = {LOCATION_ID}\n- La App v1.0.1 está conectada a la herramienta de analítica en modo depuración ({HERRAMIENTA_TRACKING}) para ver los eventos en tiempo real\"",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App.\n3. El usuario toca una imagen circular del carrusel.\n4. El sistema registra el evento de clic y abre la PLP de la categoría configurada.\n5. El usuario revisa el evento en {HERRAMIENTA_TRACKING}."
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Los eventos de impresión y clic posteriores a la publicación llevan los nuevos valores ({PROMOTION_ID_NUEVO}, {PROMOTION_NAME_NUEVO}, {CREATIVE_NAME_NUEVO}, {CREATIVE_SLOT_NUEVO}, {LOCATION_ID_NUEVO}), sin instalar una nueva versión de la App.",
   "form_factor": "app",
   "id": "TC-B2C72-BM-018",
   "name": "Verificar que los valores de tracking modificados en Page Designer se reflejan en los eventos de la App",
   "observed": "Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: es un caso de Business Manager (Page Designer): necesita cambiar los valores de tracking del carrusel y ver los eventos que envía la app, sin herramienta declarada en el Excel de data Se certifica en la planilla de Business Manager, no en la de la app. Re-verificado en vivo el 2026-10-21.",
   "platform": "Android",
   "preconditions": "\"- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App sin sesión iniciada\n- En Page Designer (https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content) el carrusel \"\"Carrusel + imagen circular con título\"\" está publicado en el Home con los atributos de tracking (CA6) configurados: promotion_id = {PROMOTION_ID}, promotion_name = {PROMOTION_NAME}, creative_name = {CREATIVE_NAME}, creative_slot = {CREATIVE_SLOT}, location_id = {LOCATION_ID}\n- La App v1.0.1 está conectada a la herramienta de analítica en modo depuración ({HERRAMIENTA_TRACKING}) para ver los eventos en tiempo real\"",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Fuera de alcance",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App y registra el evento de impresión con los valores actuales.\n3. El administrador ingresa a https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content con e_jmoran@smu.cl / (contraseña de la cuenta de prueba), cambia los 5 atributos de tracking a {PROMOTION_ID_NUEVO}, {PROMOTION_NAME_NUEVO}, {CREATIVE_NAME_NUEVO}, {CREATIVE_SLOT_NUEVO} y {LOCATION_ID_NUEVO}, y publica la página.\n4. El usuario vuelve a cargar el Home (cierra y abre la App o desliza para actualizar).\n5. El usuario toca una imagen circular del carrusel.\n6. El usuario revisa en {HERRAMIENTA_TRACKING} los eventos de impresión y clic."
  }
 ]
}
-->
