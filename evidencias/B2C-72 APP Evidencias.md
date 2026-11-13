# Carrusel de imágenes circulares en la app (Android)

| Campo | Valor |
|---|---|
| Suite | B2C-72 APP |
| Última actualización | 2026-11-13 |
| Ejecutado por | Victor Chirinos |
| Ambiente | App Unimarc (DEV) · cl.smu.unimarcapp.sfcc.qa |
| Dispositivo Android | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (actualizada 11-11-2026) |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/Pendiente IOS/B2C-72 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 15 |
| Aprobado | 3 |
| Fuera de Alcance | 3 |
| Rechazado | 1 |
| **Total** | **22** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-13 | 1 | TC-B2C72-APP-012 |
| 2026-10-21 | 22 | TC-B2C72-APP-001, TC-B2C72-APP-002, TC-B2C72-APP-003, TC-B2C72-APP-004, TC-B2C72-APP-005, TC-B2C72-APP-008, TC-B2C72-APP-009, TC-B2C72-APP-010, TC-B2C72-APP-011, TC-B2C72-APP-012, TC-B2C72-APP-013, TC-B2C72-APP-014, TC-B2C72-APP-015, TC-B2C72-APP-016, TC-B2C72-APP-017, TC-B2C72-APP-018, TC-B2C72-APP-019, TC-B2C72-APP-020, TC-B2C72-APP-021, TC-B2C72-BM-016, TC-B2C72-BM-017, TC-B2C72-BM-018 |

## Detalle por caso de prueba

### TC-B2C72-APP-001 - Verificar que el carrusel muestra el título centrado e imágenes circulares con su título [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-72.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El componente "Carrusel + imagen circular con título" está publicado en el Home

**Data utilizada**

{APP_BUILD} = v1.0.7

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App con el carrusel de imágenes circulares.

**Resultado esperado**

Se muestra el título centrado y un slider de imágenes circulares, cada una con su título debajo, con hasta 3 imágenes visibles por slide.

**Resultado obtenido**

Esperado: el título centrado y un slider de imágenes circulares, cada una con su título, con hasta 3 imágenes visibles por slide. Obtenido: el título «Categorías destacadas» está centrado y cada imagen lleva su título, pero la pantalla muestra 4 imágenes completas (Orgánico, Comida en casa, Panadería, Pastelería) y una quinta cortada por el borde (Celebraciones). Medido en pantalla: x=42, 263, 483 y 704 con 189 px de ancho y la quinta en x=924 con 156 visibles. Bug B2C-1268.

**Observación**

Esperado: el título centrado y un slider de imágenes circulares, cada una con su título, con hasta 3 imágenes visibles por slide. Obtenido: el título «Categorías destacadas» está centrado y cada imagen lleva su título, pero la pantalla muestra 4 imágenes completas (Orgánico, Comida en casa, Panadería, Pastelería) y una quinta cortada por el borde (Celebraciones). Medido en pantalla: x=42, 263, 483 y 704 con 189 px de ancho y la quinta en x=924 con 156 visibles. Bug B2C-1268.

**Evidencia**

![Android · Paso 2 — home con el carrusel de imagenes circulares](<B2C-72 APP Evidencias/TC-B2C72-APP-001-android-p02-home-con-el-carrusel-de-imagenes-circulares.png>)

![Android · Estado final](<B2C-72 APP Evidencias/TC-B2C72-APP-001-android.png>)

---

### TC-B2C72-APP-002 - Verificar que el carrusel de imágenes circulares se desliza horizontalmente [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-72.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El componente "Carrusel + imagen circular con título" está publicado en el Home

**Data utilizada**

{APP_BUILD} = v1.0.7

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App con el carrusel de imágenes circulares.
3. El usuario desliza el carrusel hacia la izquierda.
4. El sistema muestra las siguientes imágenes circulares.

**Resultado esperado**

El carrusel se desplaza horizontalmente y muestra las imágenes siguientes.

**Resultado obtenido**

Al deslizar el carrusel hacia la izquierda se desplaza horizontalmente y muestra los círculos siguientes.

**Evidencia**

![Android · Paso 2 — carrusel antes de deslizar](<B2C-72 APP Evidencias/TC-B2C72-APP-002-android-p02-carrusel-antes-de-deslizar.png>)

![Android · Paso 4 — carrusel tras deslizar a la izquierda](<B2C-72 APP Evidencias/TC-B2C72-APP-002-android-p04-carrusel-tras-deslizar-a-la-izquierda.png>)

![Android · Estado final](<B2C-72 APP Evidencias/TC-B2C72-APP-002-android.png>)

---

### TC-B2C72-APP-003 - Verificar que tocar una imagen circular abre la categoría configurada [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-72.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El componente "Carrusel + imagen circular con título" está publicado en el Home

**Data utilizada**

{APP_BUILD} = v1.0.7

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App con el carrusel de imágenes circulares.
3. El usuario toca una imagen circular.
4. El sistema abre la categoría destino configurada.

**Resultado esperado**

Se muestra la PLP de la categoría configurada para la imagen tocada.

**Resultado obtenido**

Al tocar la imagen circular «Orgánico» se abre una PLP de categoría («Frutas y Verduras») con buscador, subcategorías (Todo, Frutas, Verduras) y productos.

**Evidencia**

![Android · Paso 2 — carrusel con la imagen a tocar](<B2C-72 APP Evidencias/TC-B2C72-APP-003-android-p02-carrusel-con-la-imagen-a-tocar.png>)

![Android · Paso 4 — pantalla tras tocar organico](<B2C-72 APP Evidencias/TC-B2C72-APP-003-android-p04-pantalla-tras-tocar-organico.png>)

![Android · Estado final](<B2C-72 APP Evidencias/TC-B2C72-APP-003-android.png>)

---

### TC-B2C72-APP-004 - Verificar que un elemento sin imagen, se muestra una imagen generica en el carrusel de imágenes circulares [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-72.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- En Page Designer ({BM_PD_PATH}) el carrusel "Carrusel + imagen circular con título" está publicado en el Home con 3 o más elementos, y uno de ellos ({CATEGORY_N1_URL}) no tiene imagen circular cargada

**Data utilizada**

{APP_BUILD} = v1.0.7

{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)

{BM_ADMIN_USER} = e_jmoran@smu.cl

{BM_PD_PATH} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content

{CATEGORY_N1_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App.
3. El usuario revisa los elementos del carrusel y lo desliza hasta el final.

**Resultado esperado**

El elemento sin imagen una imagen generica; el resto de los elementos se muestran y el carrusel funciona normalmente. La App no muestra error ni se cierra.

**Resultado obtenido**

Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización. Acción: declarar el RUT de la cuenta y coordinar el cambio en Page Designer.

**Observación**

Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización. Acción: declarar el RUT de la cuenta y coordinar el cambio en Page Designer. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C72-APP-005 - Verificar que tocar un elemento sin link no redirige ni muestra error [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-72.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- En Page Designer ({BM_PD_PATH}) el carrusel "Carrusel + imagen circular con título" está publicado en el Home y uno de sus elementos no tiene configurado el atributo Popular Category (sin link)

**Data utilizada**

{APP_BUILD} = v1.0.7

{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)

{BM_ADMIN_USER} = e_jmoran@smu.cl

{BM_PD_PATH} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App.
3. El usuario toca el elemento sin link.

**Resultado esperado**

La App se mantiene en el Home: no navega a una pantalla vacía o de error ni se cierra. Si el elemento sin link se muestra, no responde al toque.

**Resultado obtenido**

Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización. Acción: declarar el RUT de la cuenta y coordinar el cambio en Page Designer.

**Observación**

Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización. Acción: declarar el RUT de la cuenta y coordinar el cambio en Page Designer. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C72-APP-008 - Verificar que un carrusel sin elementos no se muestra en el Home [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-72.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- En Page Designer ({BM_PD_PATH}) el carrusel "Carrusel + imagen circular con título" está publicado en el Home con título y sin ningún Round Category Tile

**Data utilizada**

{APP_BUILD} = v1.0.7

{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)

{BM_ADMIN_USER} = e_jmoran@smu.cl

{BM_PD_PATH} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App.
3. El usuario recorre el Home en la posición del carrusel.

**Resultado esperado**

El carrusel no se muestra: no aparece el título solo ni un área vacía; los componentes vecinos se muestran sin espacio en blanco.

**Resultado obtenido**

Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización. Acción: declarar el RUT de la cuenta y coordinar el cambio en Page Designer.

**Observación**

Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización. Acción: declarar el RUT de la cuenta y coordinar el cambio en Page Designer. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C72-APP-009 - Verificar que un carrusel fuera de vigencia no se muestra en el Home [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-72.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- En Page Designer ({BM_PD_PATH}) el carrusel "Carrusel + imagen circular con título" está publicado en el Home con programación cuya fecha de fin {FECHA_HORA_FIN_CARRUSEL_VENCIDO} ya pasó

**Data utilizada**

{APP_BUILD} = v1.0.7

{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)

{BM_ADMIN_USER} = e_jmoran@smu.cl

{BM_PD_PATH} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content

{FECHA_HORA_FIN_CARRUSEL_VENCIDO} = None

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App.
3. El usuario recorre el Home en la posición del carrusel.

**Resultado esperado**

El carrusel no se muestra y no deja espacio vacío en el Home.

**Resultado obtenido**

Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización, con las fechas del carrusel ({FECHA_HORA_*}) en TBD en el Excel de data. Acción: declarar el RUT, las fechas y coordinar el cambio en Page Designer.

**Observación**

Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización, con las fechas del carrusel ({FECHA_HORA_*}) en TBD en el Excel de data. Acción: declarar el RUT, las fechas y coordinar el cambio en Page Designer. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C72-APP-010 - Verificar que el carrusel programado aparece exactamente a la hora de inicio [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-72.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- En Page Designer ({BM_PD_PATH}) el carrusel "Carrusel + imagen circular con título" está publicado en el Home con programación (CA5) de inicio {FECHA_HORA_INICIO_CARRUSEL}, configurada con anticipación (al menos 1 día antes)

**Data utilizada**

{APP_BUILD} = v1.0.7

{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)

{BM_ADMIN_USER} = e_jmoran@smu.cl

{BM_PD_PATH} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content

{FECHA_HORA_INICIO_CARRUSEL} = None

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. Un minuto antes de {FECHA_HORA_INICIO_CARRUSEL}, el usuario revisa el Home.
3. A la hora de {FECHA_HORA_INICIO_CARRUSEL}, el usuario vuelve a cargar el Home (cierra y abre la App o desliza para actualizar).
4. El usuario revisa el Home.

**Resultado esperado**

Antes de {FECHA_HORA_INICIO_CARRUSEL} el carrusel no se muestra; desde esa hora se muestra con su título y elementos, sin publicar nada nuevo en Page Designer.

**Resultado obtenido**

Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización, con las fechas del carrusel ({FECHA_HORA_*}) en TBD en el Excel de data. Acción: declarar el RUT, las fechas y coordinar el cambio en Page Designer.

**Observación**

Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización, con las fechas del carrusel ({FECHA_HORA_*}) en TBD en el Excel de data. Acción: declarar el RUT, las fechas y coordinar el cambio en Page Designer. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C72-APP-011 - Verificar que el carrusel programado deja de mostrarse exactamente a la hora de fin [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-72.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- En Page Designer ({BM_PD_PATH}) el carrusel "Carrusel + imagen circular con título" está publicado en el Home con programación (CA5) de fin {FECHA_HORA_FIN_CARRUSEL}, configurada con anticipación

**Data utilizada**

{APP_BUILD} = v1.0.7

{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)

{BM_ADMIN_USER} = e_jmoran@smu.cl

{BM_PD_PATH} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content

{FECHA_HORA_FIN_CARRUSEL} = None

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. Un minuto antes de {FECHA_HORA_FIN_CARRUSEL}, el usuario revisa el Home.
3. A la hora de {FECHA_HORA_FIN_CARRUSEL}, el usuario vuelve a cargar el Home (cierra y abre la App o desliza para actualizar).
4. El usuario revisa el Home.

**Resultado esperado**

Antes de {FECHA_HORA_FIN_CARRUSEL} el carrusel se muestra; desde esa hora deja de mostrarse y no deja espacio vacío en el Home.

**Resultado obtenido**

Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización, con las fechas del carrusel ({FECHA_HORA_*}) en TBD en el Excel de data. Acción: declarar el RUT, las fechas y coordinar el cambio en Page Designer.

**Observación**

Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización, con las fechas del carrusel ({FECHA_HORA_*}) en TBD en el Excel de data. Acción: declarar el RUT, las fechas y coordinar el cambio en Page Designer. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C72-APP-012 - Verificar que un usuario logueado ve el carrusel sin segmentación [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-13 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (actualizada 11-11-2026) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- En Page Designer ({BM_PD_PATH}) el carrusel "Carrusel + imagen circular con título" está publicado en el Home sin targeting de grupo de clientes

**Data utilizada**

- {APP_BUILD}
- {BM_PD_PATH}
- {BM_ADMIN_USER}
- {BM_ADMIN_PASSWORD}
- {USER_AUTH_001}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App.
3. El usuario revisa el carrusel.

**Resultado esperado**

Se muestra el carrusel con su título centrado y las mismas imágenes circulares que ve el invitado, hasta 3 por slide.

**Resultado obtenido**

La cuenta logueada ve el carrusel con hasta 3 imágenes circulares por slide y los mismos 7 elementos que el invitado.

**Observación**

El test() de la suite busca el título «Categorías destacadas», que hoy dice «Popular Categories»; se condujo con mobilecli.

**Evidencia**

![Paso 1 — logueado](<B2C-72 APP Evidencias/B2C-1363-p01-logueado.png>)

![Paso 2 — deslizado](<B2C-72 APP Evidencias/B2C-1363-p02-deslizado.png>)

---

### TC-B2C72-APP-013 - Verificar que un usuario del grupo de clientes segmentado ve el carrusel [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-72.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con {COMPRADOR_SEGMENTO_USER} / {COMPRADOR_SEGMENTO_PASSWORD}, cuenta que pertenece al grupo de clientes {GRUPO_CLIENTES_SEGMENTO}
- En Page Designer ({BM_PD_PATH}) el carrusel "Carrusel + imagen circular con título" está publicado en el Home con targeting (CA5) restringido al grupo de clientes {GRUPO_CLIENTES_SEGMENTO}

**Data utilizada**

{APP_BUILD} = v1.0.7

{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)

{BM_ADMIN_USER} = e_jmoran@smu.cl

{BM_PD_PATH} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content

{COMPRADOR_SEGMENTO_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_SEGMENTO_USER} = daunuruco+noaddress@avatar-global.com

{GRUPO_CLIENTES_SEGMENTO} = None

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App.
3. El usuario revisa el Home en la posición del carrusel.

**Resultado esperado**

Se muestra el carrusel segmentado con su título y elementos.

**Resultado obtenido**

Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización, y {GRUPO_CLIENTES_SEGMENTO} está en TBD en el Excel de data. Acción: declarar el grupo de clientes y coordinar el cambio en Page Designer.

**Observación**

Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización, y {GRUPO_CLIENTES_SEGMENTO} está en TBD en el Excel de data. Acción: declarar el grupo de clientes y coordinar el cambio en Page Designer. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C72-APP-014 - Verificar que un usuario fuera del grupo de clientes segmentado no ve el carrusel [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-72.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con {COMPRADOR_FUERA_SEGMENTO_USER} / {COMPRADOR_FUERA_SEGMENTO_PASSWORD}, cuenta que NO pertenece al grupo de clientes {GRUPO_CLIENTES_SEGMENTO}
- En Page Designer ({BM_PD_PATH}) el carrusel "Carrusel + imagen circular con título" está publicado en el Home con targeting (CA5) restringido al grupo de clientes {GRUPO_CLIENTES_SEGMENTO}

**Data utilizada**

{APP_BUILD} = v1.0.7

{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)

{BM_ADMIN_USER} = e_jmoran@smu.cl

{BM_PD_PATH} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content

{COMPRADOR_FUERA_SEGMENTO_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_FUERA_SEGMENTO_USER} = daunuruco+segundo@avatar-global.com

{GRUPO_CLIENTES_SEGMENTO} = None

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App.
3. El usuario revisa el Home en la posición del carrusel.

**Resultado esperado**

El carrusel segmentado no se muestra y no deja espacio vacío en el Home.

**Resultado obtenido**

Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización, y {GRUPO_CLIENTES_SEGMENTO} está en TBD en el Excel de data. Acción: declarar el grupo de clientes y coordinar el cambio en Page Designer.

**Observación**

Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización, y {GRUPO_CLIENTES_SEGMENTO} está en TBD en el Excel de data. Acción: declarar el grupo de clientes y coordinar el cambio en Page Designer. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C72-APP-015 - Verificar que un invitado no ve el carrusel segmentado a un grupo de clientes [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-72.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App sin sesión iniciada
- En Page Designer ({BM_PD_PATH}) el carrusel "Carrusel + imagen circular con título" está publicado en el Home con targeting (CA5) restringido al grupo de clientes {GRUPO_CLIENTES_SEGMENTO}

**Data utilizada**

{APP_BUILD} = v1.0.7

{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)

{BM_ADMIN_USER} = e_jmoran@smu.cl

{BM_PD_PATH} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content

{GRUPO_CLIENTES_SEGMENTO} = None

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App.
3. El usuario revisa el Home en la posición del carrusel.

**Resultado esperado**

El carrusel segmentado no se muestra al invitado y no deja espacio vacío en el Home.

**Resultado obtenido**

Causa: el caso necesita un carrusel segmentado a un grupo de clientes y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización, y {GRUPO_CLIENTES_SEGMENTO} está en TBD en el Excel de data. Acción: declarar el grupo de clientes y coordinar el cambio en Page Designer.

**Observación**

Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso necesita un carrusel segmentado a un grupo de clientes y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización, y {GRUPO_CLIENTES_SEGMENTO} está en TBD en el Excel de data. Acción: declarar el grupo de clientes y coordinar el cambio en Page Designer. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C72-BM-016 - Verificar que un cambio de contenido publicado en Page Designer se refleja en la App [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Fuera de Alcance |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-72.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- En Page Designer ({BM_PD_PATH}) el carrusel "Carrusel + imagen circular con título" está publicado en el Home

**Data utilizada**

{APP_BUILD} = v1.0.7

{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)

{BM_ADMIN_USER} = e_jmoran@smu.cl

{BM_PD_PATH} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App.
3. El usuario anota el título del carrusel y el nombre e imagen del primer elemento.
4. El administrador ingresa a {BM_PD_PATH} con {BM_ADMIN_USER} / {BM_ADMIN_PASSWORD}, cambia el título del carrusel, el Custom display name y la imagen del primer elemento, y publica la página.
5. El usuario vuelve a cargar el Home (cierra y abre la App o desliza para actualizar).
6. El usuario revisa el carrusel.

**Resultado esperado**

La App muestra el nuevo título del carrusel y el primer elemento con el nuevo nombre e imagen, sin instalar una nueva versión; el resto de los elementos no cambia.

**Resultado obtenido**

Causa: es un caso de Business Manager (Page Designer) y el login de la app pide RUT, que el Excel de data no trae Se certifica en la planilla de Business Manager, no en la de la app.

**Observación**

Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: es un caso de Business Manager (Page Designer) y el login de la app pide RUT, que el Excel de data no trae Se certifica en la planilla de Business Manager, no en la de la app. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C72-BM-017 - Verificar que un elemento agregado o eliminado en Page Designer se refleja en la App [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Fuera de Alcance |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-72.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- En Page Designer ({BM_PD_PATH}) el carrusel "Carrusel + imagen circular con título" está publicado en el Home con 4 o más elementos

**Data utilizada**

{APP_BUILD} = v1.0.7

{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)

{BM_ADMIN_USER} = e_jmoran@smu.cl

{BM_PD_PATH} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content

{CATEGORY_N1_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App.
3. El usuario anota los elementos del carrusel, en orden.
4. El administrador ingresa a {BM_PD_PATH} con {BM_ADMIN_USER} / {BM_ADMIN_PASSWORD}, agrega un elemento que apunta a {CATEGORY_N1_URL}, elimina otro y publica la página.
5. El usuario vuelve a cargar el Home (cierra y abre la App o desliza para actualizar).
6. El usuario recorre el carrusel y toca el elemento nuevo.

**Resultado esperado**

El carrusel muestra el elemento nuevo y ya no muestra el eliminado; al tocar el elemento nuevo se abre la PLP de {CATEGORY_N1_URL}.

**Resultado obtenido**

Causa: es un caso de Business Manager (Page Designer) y el login de la app pide RUT, que el Excel de data no trae Se certifica en la planilla de Business Manager, no en la de la app.

**Observación**

Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: es un caso de Business Manager (Page Designer) y el login de la app pide RUT, que el Excel de data no trae Se certifica en la planilla de Business Manager, no en la de la app. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C72-APP-016 - Verificar que un usuario del nivel de cliente segmentado ve el carrusel [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-72.spec.ts |

**Precondiciones**

- User type: Logueado_x000D_
- Viewport: App iOS/Android_x000D_
- Ubicacion: Home de la App_x000D_
- Sesión iniciada con {COMPRADOR_NIVEL_USER} / {COMPRADOR_NIVEL_PASSWORD}, cuenta con el nivel de cliente {NIVEL_CLIENTE}, que pertenece al grupo de clientes {GRUPO_CLIENTES_NIVEL}_x000D_
- En Page Designer ({BM_PD_PATH}) el carrusel "Carrusel + imagen circular con título" está publicado en el Home con targeting (CA5) restringido al grupo de clientes {GRUPO_CLIENTES_NIVEL}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App.
3. El usuario revisa el Home en la posición del carrusel.

**Resultado esperado**

Se muestra el carrusel segmentado con su título y elementos.

**Resultado obtenido**

Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización, y el caso necesita una cuenta de un nivel de cliente segmentado que el Excel de data no declara. Acción: declarar el RUT y las cuentas de prueba por segmento y coordinar el cambio en Page Designer.

**Observación**

Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización, y el caso necesita una cuenta de un nivel de cliente segmentado que el Excel de data no declara. Acción: declarar el RUT y las cuentas de prueba por segmento y coordinar el cambio en Page Designer. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C72-APP-017 - Verificar que un usuario de otro nivel de cliente no ve el carrusel segmentado por nivel [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-72.spec.ts |

**Precondiciones**

"- User type: Logueado

- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con {COMPRADOR_OTRO_NIVEL_USER} / {COMPRADOR_OTRO_NIVEL_PASSWORD}, cuenta con el nivel de cliente {NIVEL_CLIENTE_OTRO}, que NO pertenece al grupo de clientes {GRUPO_CLIENTES_NIVEL}
- En Page Designer ({BM_PD_PATH}) el carrusel ""Carrusel + imagen circular con título"" está publicado en el Home con targeting (CA5) restringido al grupo de clientes {GRUPO_CLIENTES_NIVEL}"

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App.
3. El usuario revisa el Home en la posición del carrusel.

**Resultado esperado**

El carrusel segmentado no se muestra y no deja espacio vacío en el Home.

**Resultado obtenido**

Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización, y el caso necesita una cuenta de otro nivel de cliente que el Excel de data no declara. Acción: declarar el RUT y las cuentas de prueba por segmento y coordinar el cambio en Page Designer.

**Observación**

Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización, y el caso necesita una cuenta de otro nivel de cliente que el Excel de data no declara. Acción: declarar el RUT y las cuentas de prueba por segmento y coordinar el cambio en Page Designer. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C72-APP-018 - Verificar que un usuario del segmento de región y comuna configurado ve el carrusel [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-72.spec.ts |

**Precondiciones**

- User type: Logueado_x000D_
- Viewport: App iOS/Android_x000D_
- Ubicacion: Home de la App_x000D_
- Sesión iniciada con {COMPRADOR_REGION_USER} / {COMPRADOR_REGION_PASSWORD}, cuenta que pertenece al grupo de clientes {GRUPO_CLIENTES_REGION_COMUNA} ({REGION} / {COMUNA}) antes de iniciar sesión_x000D_
- En Page Designer ({BM_PD_PATH}) el carrusel "Carrusel + imagen circular con título" está publicado en el Home con targeting (CA5) restringido al grupo de clientes {GRUPO_CLIENTES_REGION_COMUNA}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App.
3. El usuario revisa el Home en la posición del carrusel.

**Resultado esperado**

Se muestra el carrusel segmentado con su título y elementos.

**Resultado obtenido**

Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización, y el caso necesita una cuenta del segmento de región y comuna configurado, que el Excel de data no declara. Acción: declarar el RUT y las cuentas de prueba por segmento y coordinar el cambio en Page Designer.

**Observación**

Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización, y el caso necesita una cuenta del segmento de región y comuna configurado, que el Excel de data no declara. Acción: declarar el RUT y las cuentas de prueba por segmento y coordinar el cambio en Page Designer. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C72-APP-019 - Verificar que un usuario de otra región y comuna no ve el carrusel segmentado por región y comuna [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-72.spec.ts |

**Precondiciones**

"- User type: Logueado

- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con {COMPRADOR_OTRA_REGION_USER} / {COMPRADOR_OTRA_REGION_PASSWORD}, cuenta que NO pertenece al grupo de clientes {GRUPO_CLIENTES_REGION_COMUNA}
- En Page Designer ({BM_PD_PATH}) el carrusel ""Carrusel + imagen circular con título"" está publicado en el Home con targeting (CA5) restringido al grupo de clientes {GRUPO_CLIENTES_REGION_COMUNA}"

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App.
3. El usuario revisa el Home en la posición del carrusel.

**Resultado esperado**

El carrusel segmentado no se muestra y no deja espacio vacío en el Home.

**Resultado obtenido**

Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y el caso necesita una cuenta de otra región y comuna que el Excel de data no declara. Acción: declarar la cuenta y el RUT.

**Observación**

Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y el caso necesita una cuenta de otra región y comuna que el Excel de data no declara. Acción: declarar la cuenta y el RUT. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C72-APP-020 - Verificar que la impresión del carrusel envía el evento de tracking con los atributos configurados en Page Designer [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-72.spec.ts |

**Precondiciones**

"- User type: Guest

- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App sin sesión iniciada
- En Page Designer ({BM_PD_PATH}) el carrusel ""Carrusel + imagen circular con título"" está publicado en el Home con los atributos de tracking (CA6) configurados: promotion_id = {PROMOTION_ID}, promotion_name = {PROMOTION_NAME}, creative_name = {CREATIVE_NAME}, creative_slot = {CREATIVE_SLOT}, location_id = {LOCATION_ID}
- La App {APP_BUILD} está conectada a la herramienta de analítica en modo depuración ({HERRAMIENTA_TRACKING}) para ver los eventos en tiempo real"

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App.
3. El usuario se desplaza hasta que el carrusel queda visible en pantalla.
4. El sistema registra el evento de impresión del carrusel.
5. El usuario revisa el evento en {HERRAMIENTA_TRACKING}.

**Resultado esperado**

Se registra el evento de impresión con los 5 atributos y sus valores son los configurados en Page Designer: promotion_id = {PROMOTION_ID}, promotion_name = {PROMOTION_NAME}, creative_name = {CREATIVE_NAME}, creative_slot = {CREATIVE_SLOT} y location_id = {LOCATION_ID}. Ningún atributo llega vacío, "undefined" ni "null".

**Resultado obtenido**

Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y necesita ver los eventos de tracking que envía la app, sin herramienta declarada en el Excel de data. Acción: declarar el RUT y la herramienta de tracking.

**Observación**

Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y necesita ver los eventos de tracking que envía la app, sin herramienta declarada en el Excel de data. Acción: declarar el RUT y la herramienta de tracking. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C72-APP-021 - Verificar que tocar un elemento del carrusel envía el evento de clic con los atributos configurados en Page Designer [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-72.spec.ts |

**Precondiciones**

"- User type: Guest

- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App sin sesión iniciada
- En Page Designer ({BM_PD_PATH}) el carrusel ""Carrusel + imagen circular con título"" está publicado en el Home con los atributos de tracking (CA6) configurados: promotion_id = {PROMOTION_ID}, promotion_name = {PROMOTION_NAME}, creative_name = {CREATIVE_NAME}, creative_slot = {CREATIVE_SLOT}, location_id = {LOCATION_ID}
- La App {APP_BUILD} está conectada a la herramienta de analítica en modo depuración ({HERRAMIENTA_TRACKING}) para ver los eventos en tiempo real"

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App.
3. El usuario toca una imagen circular del carrusel.
4. El sistema registra el evento de clic y abre la PLP de la categoría configurada.
5. El usuario revisa el evento en {HERRAMIENTA_TRACKING}.

**Resultado esperado**

Se registra un evento de clic con los 5 atributos y sus valores son los configurados en Page Designer: promotion_id = {PROMOTION_ID}, promotion_name = {PROMOTION_NAME}, creative_name = {CREATIVE_NAME}, creative_slot = {CREATIVE_SLOT} y location_id = {LOCATION_ID}. El evento se registra aunque la App cambie de pantalla y se abre la PLP de la categoría configurada (CA7).

**Resultado obtenido**

Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y necesita ver los eventos de tracking que envía la app, sin herramienta declarada en el Excel de data. Acción: declarar el RUT y la herramienta de tracking.

**Observación**

Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y necesita ver los eventos de tracking que envía la app, sin herramienta declarada en el Excel de data. Acción: declarar el RUT y la herramienta de tracking. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C72-BM-018 - Verificar que los valores de tracking modificados en Page Designer se reflejan en los eventos de la App [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Fuera de Alcance |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-72.spec.ts |

**Precondiciones**

"- User type: Guest

- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App sin sesión iniciada
- En Page Designer ({BM_PD_PATH}) el carrusel ""Carrusel + imagen circular con título"" está publicado en el Home con los atributos de tracking (CA6) configurados: promotion_id = {PROMOTION_ID}, promotion_name = {PROMOTION_NAME}, creative_name = {CREATIVE_NAME}, creative_slot = {CREATIVE_SLOT}, location_id = {LOCATION_ID}
- La App {APP_BUILD} está conectada a la herramienta de analítica en modo depuración ({HERRAMIENTA_TRACKING}) para ver los eventos en tiempo real"

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App y registra el evento de impresión con los valores actuales.
3. El administrador ingresa a {BM_PD_PATH} con {BM_ADMIN_USER} / {BM_ADMIN_PASSWORD}, cambia los 5 atributos de tracking a {PROMOTION_ID_NUEVO}, {PROMOTION_NAME_NUEVO}, {CREATIVE_NAME_NUEVO}, {CREATIVE_SLOT_NUEVO} y {LOCATION_ID_NUEVO}, y publica la página.
4. El usuario vuelve a cargar el Home (cierra y abre la App o desliza para actualizar).
5. El usuario toca una imagen circular del carrusel.
6. El usuario revisa en {HERRAMIENTA_TRACKING} los eventos de impresión y clic.

**Resultado esperado**

Los eventos de impresión y clic posteriores a la publicación llevan los nuevos valores ({PROMOTION_ID_NUEVO}, {PROMOTION_NAME_NUEVO}, {CREATIVE_NAME_NUEVO}, {CREATIVE_SLOT_NUEVO}, {LOCATION_ID_NUEVO}), sin instalar una nueva versión de la App.

**Resultado obtenido**

Causa: es un caso de Business Manager (Page Designer): necesita cambiar los valores de tracking del carrusel y ver los eventos que envía la app, sin herramienta declarada en el Excel de data Se certifica en la planilla de Business Manager, no en la de la app.

**Observación**

Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: es un caso de Business Manager (Page Designer): necesita cambiar los valores de tracking del carrusel y ver los eventos que envía la app, sin herramienta declarada en el Excel de data Se certifica en la planilla de Business Manager, no en la de la app. Re-verificado en vivo el 2026-10-21.

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "devices": {
   "android": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (actualizada 11-11-2026)"
  },
  "environment": "App Unimarc (DEV) · cl.smu.unimarcapp.sfcc.qa",
  "executed_by": "Victor Chirinos",
  "suite": "B2C-72 APP",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/Pendiente IOS/B2C-72 APP Test Cases.xlsx",
  "title": "Carrusel de imágenes circulares en la app (Android)",
  "updated_at": "2026-11-13"
 },
 "history": {
  "2026-10-21": [
   "TC-B2C72-APP-001",
   "TC-B2C72-APP-002",
   "TC-B2C72-APP-003",
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
   "TC-B2C72-APP-021",
   "TC-B2C72-BM-016",
   "TC-B2C72-BM-017",
   "TC-B2C72-BM-018"
  ],
  "2026-11-13": [
   "TC-B2C72-APP-012"
  ]
 },
 "results": [
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "Se muestra el título centrado y un slider de imágenes circulares, cada una con su título debajo, con hasta 3 imágenes visibles por slide.",
   "form_factor": "app",
   "id": "TC-B2C72-APP-001",
   "name": "Verificar que el carrusel muestra el título centrado e imágenes circulares con su título [App] [Guest]",
   "observation": "Esperado: el título centrado y un slider de imágenes circulares, cada una con su título, con hasta 3 imágenes visibles por slide. Obtenido: el título «Categorías destacadas» está centrado y cada imagen lleva su título, pero la pantalla muestra 4 imágenes completas (Orgánico, Comida en casa, Panadería, Pastelería) y una quinta cortada por el borde (Celebraciones). Medido en pantalla: x=42, 263, 483 y 704 con 189 px de ancho y la quinta en x=924 con 156 visibles. Bug B2C-1268.",
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
   "spec": "tests-app/B2C-72.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App con el carrusel de imágenes circulares.",
   "test_data": "{APP_BUILD} = v1.0.7"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "El carrusel se desplaza horizontalmente y muestra las imágenes siguientes.",
   "form_factor": "app",
   "id": "TC-B2C72-APP-002",
   "name": "Verificar que el carrusel de imágenes circulares se desliza horizontalmente [App] [Guest]",
   "observed": "Al deslizar el carrusel hacia la izquierda se desplaza horizontalmente y muestra los círculos siguientes.",
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
   "spec": "tests-app/B2C-72.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App con el carrusel de imágenes circulares.\n3. El usuario desliza el carrusel hacia la izquierda.\n4. El sistema muestra las siguientes imágenes circulares.",
   "test_data": "{APP_BUILD} = v1.0.7"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "Se muestra la PLP de la categoría configurada para la imagen tocada.",
   "form_factor": "app",
   "id": "TC-B2C72-APP-003",
   "name": "Verificar que tocar una imagen circular abre la categoría configurada [App] [Guest]",
   "observed": "Al tocar la imagen circular «Orgánico» se abre una PLP de categoría («Frutas y Verduras») con buscador, subcategorías (Todo, Frutas, Verduras) y productos.",
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
   "spec": "tests-app/B2C-72.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App con el carrusel de imágenes circulares.\n3. El usuario toca una imagen circular.\n4. El sistema abre la categoría destino configurada.",
   "test_data": "{APP_BUILD} = v1.0.7"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "El elemento sin imagen una imagen generica; el resto de los elementos se muestran y el carrusel funciona normalmente. La App no muestra error ni se cierra.",
   "form_factor": "app",
   "id": "TC-B2C72-APP-004",
   "name": "Verificar que un elemento sin imagen, se muestra una imagen generica en el carrusel de imágenes circulares [App] [Logueado]",
   "observation": "Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización. Acción: declarar el RUT de la cuenta y coordinar el cambio en Page Designer. Re-verificado en vivo el 2026-10-21.",
   "observed": "Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización. Acción: declarar el RUT de la cuenta y coordinar el cambio en Page Designer.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- En Page Designer ({BM_PD_PATH}) el carrusel \"Carrusel + imagen circular con título\" está publicado en el Home con 3 o más elementos, y uno de ellos ({CATEGORY_N1_URL}) no tiene imagen circular cargada",
   "spec": "tests-app/B2C-72.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App.\n3. El usuario revisa los elementos del carrusel y lo desliza hasta el final.",
   "test_data": "{APP_BUILD} = v1.0.7\n{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)\n{BM_ADMIN_USER} = e_jmoran@smu.cl\n{BM_PD_PATH} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content\n{CATEGORY_N1_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "La App se mantiene en el Home: no navega a una pantalla vacía o de error ni se cierra. Si el elemento sin link se muestra, no responde al toque.",
   "form_factor": "app",
   "id": "TC-B2C72-APP-005",
   "name": "Verificar que tocar un elemento sin link no redirige ni muestra error [App] [Logueado]",
   "observation": "Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización. Acción: declarar el RUT de la cuenta y coordinar el cambio en Page Designer. Re-verificado en vivo el 2026-10-21.",
   "observed": "Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización. Acción: declarar el RUT de la cuenta y coordinar el cambio en Page Designer.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- En Page Designer ({BM_PD_PATH}) el carrusel \"Carrusel + imagen circular con título\" está publicado en el Home y uno de sus elementos no tiene configurado el atributo Popular Category (sin link)",
   "spec": "tests-app/B2C-72.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App.\n3. El usuario toca el elemento sin link.",
   "test_data": "{APP_BUILD} = v1.0.7\n{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)\n{BM_ADMIN_USER} = e_jmoran@smu.cl\n{BM_PD_PATH} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "El carrusel no se muestra: no aparece el título solo ni un área vacía; los componentes vecinos se muestran sin espacio en blanco.",
   "form_factor": "app",
   "id": "TC-B2C72-APP-008",
   "name": "Verificar que un carrusel sin elementos no se muestra en el Home [App] [Logueado]",
   "observation": "Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización. Acción: declarar el RUT de la cuenta y coordinar el cambio en Page Designer. Re-verificado en vivo el 2026-10-21.",
   "observed": "Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización. Acción: declarar el RUT de la cuenta y coordinar el cambio en Page Designer.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- En Page Designer ({BM_PD_PATH}) el carrusel \"Carrusel + imagen circular con título\" está publicado en el Home con título y sin ningún Round Category Tile",
   "spec": "tests-app/B2C-72.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App.\n3. El usuario recorre el Home en la posición del carrusel.",
   "test_data": "{APP_BUILD} = v1.0.7\n{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)\n{BM_ADMIN_USER} = e_jmoran@smu.cl\n{BM_PD_PATH} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "El carrusel no se muestra y no deja espacio vacío en el Home.",
   "form_factor": "app",
   "id": "TC-B2C72-APP-009",
   "name": "Verificar que un carrusel fuera de vigencia no se muestra en el Home [App] [Logueado]",
   "observation": "Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización, con las fechas del carrusel ({FECHA_HORA_*}) en TBD en el Excel de data. Acción: declarar el RUT, las fechas y coordinar el cambio en Page Designer. Re-verificado en vivo el 2026-10-21.",
   "observed": "Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización, con las fechas del carrusel ({FECHA_HORA_*}) en TBD en el Excel de data. Acción: declarar el RUT, las fechas y coordinar el cambio en Page Designer.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- En Page Designer ({BM_PD_PATH}) el carrusel \"Carrusel + imagen circular con título\" está publicado en el Home con programación cuya fecha de fin {FECHA_HORA_FIN_CARRUSEL_VENCIDO} ya pasó",
   "spec": "tests-app/B2C-72.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App.\n3. El usuario recorre el Home en la posición del carrusel.",
   "test_data": "{APP_BUILD} = v1.0.7\n{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)\n{BM_ADMIN_USER} = e_jmoran@smu.cl\n{BM_PD_PATH} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content\n{FECHA_HORA_FIN_CARRUSEL_VENCIDO} = None\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "Antes de {FECHA_HORA_INICIO_CARRUSEL} el carrusel no se muestra; desde esa hora se muestra con su título y elementos, sin publicar nada nuevo en Page Designer.",
   "form_factor": "app",
   "id": "TC-B2C72-APP-010",
   "name": "Verificar que el carrusel programado aparece exactamente a la hora de inicio [App] [Logueado]",
   "observation": "Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización, con las fechas del carrusel ({FECHA_HORA_*}) en TBD en el Excel de data. Acción: declarar el RUT, las fechas y coordinar el cambio en Page Designer. Re-verificado en vivo el 2026-10-21.",
   "observed": "Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización, con las fechas del carrusel ({FECHA_HORA_*}) en TBD en el Excel de data. Acción: declarar el RUT, las fechas y coordinar el cambio en Page Designer.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- En Page Designer ({BM_PD_PATH}) el carrusel \"Carrusel + imagen circular con título\" está publicado en el Home con programación (CA5) de inicio {FECHA_HORA_INICIO_CARRUSEL}, configurada con anticipación (al menos 1 día antes)",
   "spec": "tests-app/B2C-72.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. Un minuto antes de {FECHA_HORA_INICIO_CARRUSEL}, el usuario revisa el Home.\n3. A la hora de {FECHA_HORA_INICIO_CARRUSEL}, el usuario vuelve a cargar el Home (cierra y abre la App o desliza para actualizar).\n4. El usuario revisa el Home.",
   "test_data": "{APP_BUILD} = v1.0.7\n{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)\n{BM_ADMIN_USER} = e_jmoran@smu.cl\n{BM_PD_PATH} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content\n{FECHA_HORA_INICIO_CARRUSEL} = None\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "Antes de {FECHA_HORA_FIN_CARRUSEL} el carrusel se muestra; desde esa hora deja de mostrarse y no deja espacio vacío en el Home.",
   "form_factor": "app",
   "id": "TC-B2C72-APP-011",
   "name": "Verificar que el carrusel programado deja de mostrarse exactamente a la hora de fin [App] [Logueado]",
   "observation": "Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización, con las fechas del carrusel ({FECHA_HORA_*}) en TBD en el Excel de data. Acción: declarar el RUT, las fechas y coordinar el cambio en Page Designer. Re-verificado en vivo el 2026-10-21.",
   "observed": "Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización, con las fechas del carrusel ({FECHA_HORA_*}) en TBD en el Excel de data. Acción: declarar el RUT, las fechas y coordinar el cambio en Page Designer.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- En Page Designer ({BM_PD_PATH}) el carrusel \"Carrusel + imagen circular con título\" está publicado en el Home con programación (CA5) de fin {FECHA_HORA_FIN_CARRUSEL}, configurada con anticipación",
   "spec": "tests-app/B2C-72.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. Un minuto antes de {FECHA_HORA_FIN_CARRUSEL}, el usuario revisa el Home.\n3. A la hora de {FECHA_HORA_FIN_CARRUSEL}, el usuario vuelve a cargar el Home (cierra y abre la App o desliza para actualizar).\n4. El usuario revisa el Home.",
   "test_data": "{APP_BUILD} = v1.0.7\n{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)\n{BM_ADMIN_USER} = e_jmoran@smu.cl\n{BM_PD_PATH} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content\n{FECHA_HORA_FIN_CARRUSEL} = None\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (actualizada 11-11-2026)",
   "executed_at": "2026-11-13",
   "expected": "Se muestra el carrusel con su título centrado y las mismas imágenes circulares que ve el invitado, hasta 3 por slide.",
   "form_factor": "app",
   "id": "TC-B2C72-APP-012",
   "name": "Verificar que un usuario logueado ve el carrusel sin segmentación [App] [Logueado]",
   "observation": "El test() de la suite busca el título «Categorías destacadas», que hoy dice «Popular Categories»; se condujo con mobilecli.",
   "observed": "La cuenta logueada ve el carrusel con hasta 3 imágenes circulares por slide y los mismos 7 elementos que el invitado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- En Page Designer ({BM_PD_PATH}) el carrusel \"Carrusel + imagen circular con título\" está publicado en el Home sin targeting de grupo de clientes",
   "screenshots": [
    {
     "caption": "Paso 1 — logueado",
     "file": "B2C-1363-p01-logueado.png"
    },
    {
     "caption": "Paso 2 — deslizado",
     "file": "B2C-1363-p02-deslizado.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App.\n3. El usuario revisa el carrusel.",
   "test_data": "- {APP_BUILD}\n- {BM_PD_PATH}\n- {BM_ADMIN_USER}\n- {BM_ADMIN_PASSWORD}\n- {USER_AUTH_001}"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "Se muestra el carrusel segmentado con su título y elementos.",
   "form_factor": "app",
   "id": "TC-B2C72-APP-013",
   "name": "Verificar que un usuario del grupo de clientes segmentado ve el carrusel [App] [Logueado]",
   "observation": "Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización, y {GRUPO_CLIENTES_SEGMENTO} está en TBD en el Excel de data. Acción: declarar el grupo de clientes y coordinar el cambio en Page Designer. Re-verificado en vivo el 2026-10-21.",
   "observed": "Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización, y {GRUPO_CLIENTES_SEGMENTO} está en TBD en el Excel de data. Acción: declarar el grupo de clientes y coordinar el cambio en Page Designer.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con {COMPRADOR_SEGMENTO_USER} / {COMPRADOR_SEGMENTO_PASSWORD}, cuenta que pertenece al grupo de clientes {GRUPO_CLIENTES_SEGMENTO}\n- En Page Designer ({BM_PD_PATH}) el carrusel \"Carrusel + imagen circular con título\" está publicado en el Home con targeting (CA5) restringido al grupo de clientes {GRUPO_CLIENTES_SEGMENTO}",
   "spec": "tests-app/B2C-72.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App.\n3. El usuario revisa el Home en la posición del carrusel.",
   "test_data": "{APP_BUILD} = v1.0.7\n{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)\n{BM_ADMIN_USER} = e_jmoran@smu.cl\n{BM_PD_PATH} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content\n{COMPRADOR_SEGMENTO_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_SEGMENTO_USER} = daunuruco+noaddress@avatar-global.com\n{GRUPO_CLIENTES_SEGMENTO} = None"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "El carrusel segmentado no se muestra y no deja espacio vacío en el Home.",
   "form_factor": "app",
   "id": "TC-B2C72-APP-014",
   "name": "Verificar que un usuario fuera del grupo de clientes segmentado no ve el carrusel [App] [Logueado]",
   "observation": "Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización, y {GRUPO_CLIENTES_SEGMENTO} está en TBD en el Excel de data. Acción: declarar el grupo de clientes y coordinar el cambio en Page Designer. Re-verificado en vivo el 2026-10-21.",
   "observed": "Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización, y {GRUPO_CLIENTES_SEGMENTO} está en TBD en el Excel de data. Acción: declarar el grupo de clientes y coordinar el cambio en Page Designer.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con {COMPRADOR_FUERA_SEGMENTO_USER} / {COMPRADOR_FUERA_SEGMENTO_PASSWORD}, cuenta que NO pertenece al grupo de clientes {GRUPO_CLIENTES_SEGMENTO}\n- En Page Designer ({BM_PD_PATH}) el carrusel \"Carrusel + imagen circular con título\" está publicado en el Home con targeting (CA5) restringido al grupo de clientes {GRUPO_CLIENTES_SEGMENTO}",
   "spec": "tests-app/B2C-72.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App.\n3. El usuario revisa el Home en la posición del carrusel.",
   "test_data": "{APP_BUILD} = v1.0.7\n{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)\n{BM_ADMIN_USER} = e_jmoran@smu.cl\n{BM_PD_PATH} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content\n{COMPRADOR_FUERA_SEGMENTO_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_FUERA_SEGMENTO_USER} = daunuruco+segundo@avatar-global.com\n{GRUPO_CLIENTES_SEGMENTO} = None"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "El carrusel segmentado no se muestra al invitado y no deja espacio vacío en el Home.",
   "form_factor": "app",
   "id": "TC-B2C72-APP-015",
   "name": "Verificar que un invitado no ve el carrusel segmentado a un grupo de clientes [App] [Guest]",
   "observation": "Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso necesita un carrusel segmentado a un grupo de clientes y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización, y {GRUPO_CLIENTES_SEGMENTO} está en TBD en el Excel de data. Acción: declarar el grupo de clientes y coordinar el cambio en Page Designer. Re-verificado en vivo el 2026-10-21.",
   "observed": "Causa: el caso necesita un carrusel segmentado a un grupo de clientes y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización, y {GRUPO_CLIENTES_SEGMENTO} está en TBD en el Excel de data. Acción: declarar el grupo de clientes y coordinar el cambio en Page Designer.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App sin sesión iniciada\n- En Page Designer ({BM_PD_PATH}) el carrusel \"Carrusel + imagen circular con título\" está publicado en el Home con targeting (CA5) restringido al grupo de clientes {GRUPO_CLIENTES_SEGMENTO}",
   "spec": "tests-app/B2C-72.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App.\n3. El usuario revisa el Home en la posición del carrusel.",
   "test_data": "{APP_BUILD} = v1.0.7\n{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)\n{BM_ADMIN_USER} = e_jmoran@smu.cl\n{BM_PD_PATH} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content\n{GRUPO_CLIENTES_SEGMENTO} = None"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "La App muestra el nuevo título del carrusel y el primer elemento con el nuevo nombre e imagen, sin instalar una nueva versión; el resto de los elementos no cambia.",
   "form_factor": "app",
   "id": "TC-B2C72-BM-016",
   "name": "Verificar que un cambio de contenido publicado en Page Designer se refleja en la App [App] [Logueado]",
   "observation": "Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: es un caso de Business Manager (Page Designer) y el login de la app pide RUT, que el Excel de data no trae Se certifica en la planilla de Business Manager, no en la de la app. Re-verificado en vivo el 2026-10-21.",
   "observed": "Causa: es un caso de Business Manager (Page Designer) y el login de la app pide RUT, que el Excel de data no trae Se certifica en la planilla de Business Manager, no en la de la app.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- En Page Designer ({BM_PD_PATH}) el carrusel \"Carrusel + imagen circular con título\" está publicado en el Home",
   "spec": "tests-app/B2C-72.spec.ts",
   "status": "Fuera de Alcance",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App.\n3. El usuario anota el título del carrusel y el nombre e imagen del primer elemento.\n4. El administrador ingresa a {BM_PD_PATH} con {BM_ADMIN_USER} / {BM_ADMIN_PASSWORD}, cambia el título del carrusel, el Custom display name y la imagen del primer elemento, y publica la página.\n5. El usuario vuelve a cargar el Home (cierra y abre la App o desliza para actualizar).\n6. El usuario revisa el carrusel.",
   "test_data": "{APP_BUILD} = v1.0.7\n{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)\n{BM_ADMIN_USER} = e_jmoran@smu.cl\n{BM_PD_PATH} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "El carrusel muestra el elemento nuevo y ya no muestra el eliminado; al tocar el elemento nuevo se abre la PLP de {CATEGORY_N1_URL}.",
   "form_factor": "app",
   "id": "TC-B2C72-BM-017",
   "name": "Verificar que un elemento agregado o eliminado en Page Designer se refleja en la App [App] [Logueado]",
   "observation": "Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: es un caso de Business Manager (Page Designer) y el login de la app pide RUT, que el Excel de data no trae Se certifica en la planilla de Business Manager, no en la de la app. Re-verificado en vivo el 2026-10-21.",
   "observed": "Causa: es un caso de Business Manager (Page Designer) y el login de la app pide RUT, que el Excel de data no trae Se certifica en la planilla de Business Manager, no en la de la app.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- En Page Designer ({BM_PD_PATH}) el carrusel \"Carrusel + imagen circular con título\" está publicado en el Home con 4 o más elementos",
   "spec": "tests-app/B2C-72.spec.ts",
   "status": "Fuera de Alcance",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App.\n3. El usuario anota los elementos del carrusel, en orden.\n4. El administrador ingresa a {BM_PD_PATH} con {BM_ADMIN_USER} / {BM_ADMIN_PASSWORD}, agrega un elemento que apunta a {CATEGORY_N1_URL}, elimina otro y publica la página.\n5. El usuario vuelve a cargar el Home (cierra y abre la App o desliza para actualizar).\n6. El usuario recorre el carrusel y toca el elemento nuevo.",
   "test_data": "{APP_BUILD} = v1.0.7\n{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)\n{BM_ADMIN_USER} = e_jmoran@smu.cl\n{BM_PD_PATH} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewLdsBusinessManagerScreen-PageDesigner?SelectedMenuItem=content_pages&CurrentMenuItemId=content\n{CATEGORY_N1_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "Se muestra el carrusel segmentado con su título y elementos.",
   "form_factor": "app",
   "id": "TC-B2C72-APP-016",
   "name": "Verificar que un usuario del nivel de cliente segmentado ve el carrusel [App] [Logueado]",
   "observation": "Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización, y el caso necesita una cuenta de un nivel de cliente segmentado que el Excel de data no declara. Acción: declarar el RUT y las cuentas de prueba por segmento y coordinar el cambio en Page Designer. Re-verificado en vivo el 2026-10-21.",
   "observed": "Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización, y el caso necesita una cuenta de un nivel de cliente segmentado que el Excel de data no declara. Acción: declarar el RUT y las cuentas de prueba por segmento y coordinar el cambio en Page Designer.",
   "platform": "Android",
   "preconditions": "- User type: Logueado_x000D_\n- Viewport: App iOS/Android_x000D_\n- Ubicacion: Home de la App_x000D_\n- Sesión iniciada con {COMPRADOR_NIVEL_USER} / {COMPRADOR_NIVEL_PASSWORD}, cuenta con el nivel de cliente {NIVEL_CLIENTE}, que pertenece al grupo de clientes {GRUPO_CLIENTES_NIVEL}_x000D_\n- En Page Designer ({BM_PD_PATH}) el carrusel \"Carrusel + imagen circular con título\" está publicado en el Home con targeting (CA5) restringido al grupo de clientes {GRUPO_CLIENTES_NIVEL}",
   "spec": "tests-app/B2C-72.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App.\n3. El usuario revisa el Home en la posición del carrusel."
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "El carrusel segmentado no se muestra y no deja espacio vacío en el Home.",
   "form_factor": "app",
   "id": "TC-B2C72-APP-017",
   "name": "Verificar que un usuario de otro nivel de cliente no ve el carrusel segmentado por nivel [App] [Logueado]",
   "observation": "Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización, y el caso necesita una cuenta de otro nivel de cliente que el Excel de data no declara. Acción: declarar el RUT y las cuentas de prueba por segmento y coordinar el cambio en Page Designer. Re-verificado en vivo el 2026-10-21.",
   "observed": "Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización, y el caso necesita una cuenta de otro nivel de cliente que el Excel de data no declara. Acción: declarar el RUT y las cuentas de prueba por segmento y coordinar el cambio en Page Designer.",
   "platform": "Android",
   "preconditions": "\"- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con {COMPRADOR_OTRO_NIVEL_USER} / {COMPRADOR_OTRO_NIVEL_PASSWORD}, cuenta con el nivel de cliente {NIVEL_CLIENTE_OTRO}, que NO pertenece al grupo de clientes {GRUPO_CLIENTES_NIVEL}\n- En Page Designer ({BM_PD_PATH}) el carrusel \"\"Carrusel + imagen circular con título\"\" está publicado en el Home con targeting (CA5) restringido al grupo de clientes {GRUPO_CLIENTES_NIVEL}\"",
   "spec": "tests-app/B2C-72.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App.\n3. El usuario revisa el Home en la posición del carrusel."
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "Se muestra el carrusel segmentado con su título y elementos.",
   "form_factor": "app",
   "id": "TC-B2C72-APP-018",
   "name": "Verificar que un usuario del segmento de región y comuna configurado ve el carrusel [App] [Logueado]",
   "observation": "Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización, y el caso necesita una cuenta del segmento de región y comuna configurado, que el Excel de data no declara. Acción: declarar el RUT y las cuentas de prueba por segmento y coordinar el cambio en Page Designer. Re-verificado en vivo el 2026-10-21.",
   "observed": "Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y cambiar el carrusel en Page Designer ({BM_PD_PATH}) con la cuenta de administrador {BM_ADMIN_USER}, una modificación del contenido publicado en DEV que no se hace desde la automatización sin autorización, y el caso necesita una cuenta del segmento de región y comuna configurado, que el Excel de data no declara. Acción: declarar el RUT y las cuentas de prueba por segmento y coordinar el cambio en Page Designer.",
   "platform": "Android",
   "preconditions": "- User type: Logueado_x000D_\n- Viewport: App iOS/Android_x000D_\n- Ubicacion: Home de la App_x000D_\n- Sesión iniciada con {COMPRADOR_REGION_USER} / {COMPRADOR_REGION_PASSWORD}, cuenta que pertenece al grupo de clientes {GRUPO_CLIENTES_REGION_COMUNA} ({REGION} / {COMUNA}) antes de iniciar sesión_x000D_\n- En Page Designer ({BM_PD_PATH}) el carrusel \"Carrusel + imagen circular con título\" está publicado en el Home con targeting (CA5) restringido al grupo de clientes {GRUPO_CLIENTES_REGION_COMUNA}",
   "spec": "tests-app/B2C-72.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App.\n3. El usuario revisa el Home en la posición del carrusel."
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "El carrusel segmentado no se muestra y no deja espacio vacío en el Home.",
   "form_factor": "app",
   "id": "TC-B2C72-APP-019",
   "name": "Verificar que un usuario de otra región y comuna no ve el carrusel segmentado por región y comuna [App] [Logueado]",
   "observation": "Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y el caso necesita una cuenta de otra región y comuna que el Excel de data no declara. Acción: declarar la cuenta y el RUT. Re-verificado en vivo el 2026-10-21.",
   "observed": "Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y el caso necesita una cuenta de otra región y comuna que el Excel de data no declara. Acción: declarar la cuenta y el RUT.",
   "platform": "Android",
   "preconditions": "\"- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con {COMPRADOR_OTRA_REGION_USER} / {COMPRADOR_OTRA_REGION_PASSWORD}, cuenta que NO pertenece al grupo de clientes {GRUPO_CLIENTES_REGION_COMUNA}\n- En Page Designer ({BM_PD_PATH}) el carrusel \"\"Carrusel + imagen circular con título\"\" está publicado en el Home con targeting (CA5) restringido al grupo de clientes {GRUPO_CLIENTES_REGION_COMUNA}\"",
   "spec": "tests-app/B2C-72.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App.\n3. El usuario revisa el Home en la posición del carrusel."
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "Se registra el evento de impresión con los 5 atributos y sus valores son los configurados en Page Designer: promotion_id = {PROMOTION_ID}, promotion_name = {PROMOTION_NAME}, creative_name = {CREATIVE_NAME}, creative_slot = {CREATIVE_SLOT} y location_id = {LOCATION_ID}. Ningún atributo llega vacío, \"undefined\" ni \"null\".",
   "form_factor": "app",
   "id": "TC-B2C72-APP-020",
   "name": "Verificar que la impresión del carrusel envía el evento de tracking con los atributos configurados en Page Designer [App] [Guest]",
   "observation": "Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y necesita ver los eventos de tracking que envía la app, sin herramienta declarada en el Excel de data. Acción: declarar el RUT y la herramienta de tracking. Re-verificado en vivo el 2026-10-21.",
   "observed": "Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y necesita ver los eventos de tracking que envía la app, sin herramienta declarada en el Excel de data. Acción: declarar el RUT y la herramienta de tracking.",
   "platform": "Android",
   "preconditions": "\"- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App sin sesión iniciada\n- En Page Designer ({BM_PD_PATH}) el carrusel \"\"Carrusel + imagen circular con título\"\" está publicado en el Home con los atributos de tracking (CA6) configurados: promotion_id = {PROMOTION_ID}, promotion_name = {PROMOTION_NAME}, creative_name = {CREATIVE_NAME}, creative_slot = {CREATIVE_SLOT}, location_id = {LOCATION_ID}\n- La App {APP_BUILD} está conectada a la herramienta de analítica en modo depuración ({HERRAMIENTA_TRACKING}) para ver los eventos en tiempo real\"",
   "spec": "tests-app/B2C-72.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App.\n3. El usuario se desplaza hasta que el carrusel queda visible en pantalla.\n4. El sistema registra el evento de impresión del carrusel.\n5. El usuario revisa el evento en {HERRAMIENTA_TRACKING}."
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "Se registra un evento de clic con los 5 atributos y sus valores son los configurados en Page Designer: promotion_id = {PROMOTION_ID}, promotion_name = {PROMOTION_NAME}, creative_name = {CREATIVE_NAME}, creative_slot = {CREATIVE_SLOT} y location_id = {LOCATION_ID}. El evento se registra aunque la App cambie de pantalla y se abre la PLP de la categoría configurada (CA7).",
   "form_factor": "app",
   "id": "TC-B2C72-APP-021",
   "name": "Verificar que tocar un elemento del carrusel envía el evento de clic con los atributos configurados en Page Designer [App] [Guest]",
   "observation": "Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y necesita ver los eventos de tracking que envía la app, sin herramienta declarada en el Excel de data. Acción: declarar el RUT y la herramienta de tracking. Re-verificado en vivo el 2026-10-21.",
   "observed": "Causa: el caso exige iniciar sesión con {USER_AUTH_001}, que es un correo, y el login de la app pide RUT (el Excel de data no trae el RUT de la cuenta) y necesita ver los eventos de tracking que envía la app, sin herramienta declarada en el Excel de data. Acción: declarar el RUT y la herramienta de tracking.",
   "platform": "Android",
   "preconditions": "\"- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App sin sesión iniciada\n- En Page Designer ({BM_PD_PATH}) el carrusel \"\"Carrusel + imagen circular con título\"\" está publicado en el Home con los atributos de tracking (CA6) configurados: promotion_id = {PROMOTION_ID}, promotion_name = {PROMOTION_NAME}, creative_name = {CREATIVE_NAME}, creative_slot = {CREATIVE_SLOT}, location_id = {LOCATION_ID}\n- La App {APP_BUILD} está conectada a la herramienta de analítica en modo depuración ({HERRAMIENTA_TRACKING}) para ver los eventos en tiempo real\"",
   "spec": "tests-app/B2C-72.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App.\n3. El usuario toca una imagen circular del carrusel.\n4. El sistema registra el evento de clic y abre la PLP de la categoría configurada.\n5. El usuario revisa el evento en {HERRAMIENTA_TRACKING}."
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "Los eventos de impresión y clic posteriores a la publicación llevan los nuevos valores ({PROMOTION_ID_NUEVO}, {PROMOTION_NAME_NUEVO}, {CREATIVE_NAME_NUEVO}, {CREATIVE_SLOT_NUEVO}, {LOCATION_ID_NUEVO}), sin instalar una nueva versión de la App.",
   "form_factor": "app",
   "id": "TC-B2C72-BM-018",
   "name": "Verificar que los valores de tracking modificados en Page Designer se reflejan en los eventos de la App [App] [Guest]",
   "observation": "Revisado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: es un caso de Business Manager (Page Designer): necesita cambiar los valores de tracking del carrusel y ver los eventos que envía la app, sin herramienta declarada en el Excel de data Se certifica en la planilla de Business Manager, no en la de la app. Re-verificado en vivo el 2026-10-21.",
   "observed": "Causa: es un caso de Business Manager (Page Designer): necesita cambiar los valores de tracking del carrusel y ver los eventos que envía la app, sin herramienta declarada en el Excel de data Se certifica en la planilla de Business Manager, no en la de la app.",
   "platform": "Android",
   "preconditions": "\"- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App sin sesión iniciada\n- En Page Designer ({BM_PD_PATH}) el carrusel \"\"Carrusel + imagen circular con título\"\" está publicado en el Home con los atributos de tracking (CA6) configurados: promotion_id = {PROMOTION_ID}, promotion_name = {PROMOTION_NAME}, creative_name = {CREATIVE_NAME}, creative_slot = {CREATIVE_SLOT}, location_id = {LOCATION_ID}\n- La App {APP_BUILD} está conectada a la herramienta de analítica en modo depuración ({HERRAMIENTA_TRACKING}) para ver los eventos en tiempo real\"",
   "spec": "tests-app/B2C-72.spec.ts",
   "status": "Fuera de Alcance",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App y registra el evento de impresión con los valores actuales.\n3. El administrador ingresa a {BM_PD_PATH} con {BM_ADMIN_USER} / {BM_ADMIN_PASSWORD}, cambia los 5 atributos de tracking a {PROMOTION_ID_NUEVO}, {PROMOTION_NAME_NUEVO}, {CREATIVE_NAME_NUEVO}, {CREATIVE_SLOT_NUEVO} y {LOCATION_ID_NUEVO}, y publica la página.\n4. El usuario vuelve a cargar el Home (cierra y abre la App o desliza para actualizar).\n5. El usuario toca una imagen circular del carrusel.\n6. El usuario revisa en {HERRAMIENTA_TRACKING} los eventos de impresión y clic."
  }
 ]
}
-->
